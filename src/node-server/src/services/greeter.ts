import { HelloReply, HelloRequest } from '../../proto/greeter_pb'
import { GreeterService } from '../../proto/greeter_grpc_pb'
import * as grpc from 'grpc';

const sayHello: grpc.handleUnaryCall<HelloRequest, HelloReply> = (call, callback) => {
  const reply = new HelloReply()
  const name = call.request.getName()
  reply.setMessage('Hello, ' + name)
  return callback(null, reply)
}

export default (server: grpc.Server) => {
  server.addService(GreeterService, {
    sayHello
  })
}
