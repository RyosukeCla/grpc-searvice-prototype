import * as messages from '../../proto/echo_pb'
import { EchoService } from '../../proto/echo_grpc_pb'
import * as grpc from 'grpc'
import * as _ from 'lodash'
import * as async from 'async'

const copyMetadata = (call) => {
  const metadata = call.metadata.getMap();
  const response_metadata = new grpc.Metadata()
  for (let key in metadata) {
    response_metadata.set(key, metadata[key])
  }
  return response_metadata
}

const doEcho: grpc.handleUnaryCall<messages.EchoRequest, messages.EchoResponse> = (call, callback) => {
  const response = new messages.EchoResponse()
  const message = call.request.getMessage()
  response.setMessage('echo ' + message)
  return callback(null, response, copyMetadata(call))
}

const doEchoAbort = (call, callback) => {
  return callback({
    code: grpc.status.ABORTED,
    message: 'Aborted from server side.'
  })
}

const doServerStreamingEcho: grpc.handleServerStreamingCall<messages.ServerStreamingEchoRequest, messages.ServerStreamingEchoResponse> = (call) => {
  const message = call.request.getMessage()
  const count = call.request.getMessageCount()
  const interval = call.request.getMessageInterval()

  let echoMessage = ''
  const echos = []
  for (let i = 0; i < count; i++) {
    echos.push(
      (callback) => {
        _.delay(() => {
        const reply = new messages.ServerStreamingEchoResponse()
        echoMessage += ' ' + message
        reply.setMessage(echoMessage)
        call.write(reply)
        callback()
      }, interval)
    })
  }

  async.series(echos, () => {
    call.end(copyMetadata(call))
  })
}

export default (server: grpc.Server) => {
  server.addService(EchoService, {
    echo: doEcho,
    echoAbort: doEchoAbort,
    serverStreamingEcho: doServerStreamingEcho
  })
}
