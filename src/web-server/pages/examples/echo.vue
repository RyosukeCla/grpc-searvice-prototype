<template lang="pug">
  div
    div
      h3 echo example
      button(@click="echo") echo
      div
        small Out: {{ output1 }}
      div
        small Metadata: {{ metadata1 }}
    div
      h3 server streaming echo example
      button(@click="doStreamingEcho") echo {{ guide2 }}
      div
        small Out: {{ output2 }}
      div
        small Metadata: {{ metadata2 }}
</template>

<script>
import { EchoRequest, EchoResponse, ServerStreamingEchoRequest, ServerStreamingEchoResponse } from '../../proto/echo_pb'
import { EchoClient } from '../../proto/echo_grpc_web_pb'

export default {
  data() {
    return {
      output1: '',
      metadata1: '',
      guide2: '',
      output2: '',
      metadata2: ''
    }
  },
  methods: {
    echo() {
      const request = new EchoRequest()
      request.setMessage("hello, world")

      const call = this.client.echo(request, null, (err, response) => {
        if (err) return console.log(err)
        this.output1 = response.getMessage()
      })

      call.on('status', (status) => {
        if (status.metadata) {
          this.metadata1 = status.metadata
        }
      })

      call.on('end', () => {
        console.log('end a')
      })
    },
    doStreamingEcho() {
      this.output2 = ''
      this.metadata2 = ''

      const request = new ServerStreamingEchoRequest()
      const message = "Hi"
      const count = parseInt(Math.random() * 10 + 1)
      const interval = parseInt(Math.random() * 1000 + 500)
      request.setMessage(message)
      request.setMessageCount(count)
      request.setMessageInterval(interval)

      this.guide2 = `: ${count} times '${message}' at ${interval} sec intervals`

      const stream = this.client.serverStreamingEcho(request)
      stream.on('data', (response) => {
        console.log('data')
        this.output2 = response.getMessage()
      })

      stream.on('status', (status) => {
        console.log('status')
        this.metadata2 = status.metadata
      })

      stream.on('error', (err) => {
        console.log('error', err)
      })

      stream.on('end', () => {
        console.log('end')
      })
    }
  },
  mounted() {
    this.client = new EchoClient('http://localhost:8080', null, null)
  }
}

</script>

<style>
</style>
