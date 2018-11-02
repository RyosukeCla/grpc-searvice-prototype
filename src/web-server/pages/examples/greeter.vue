<template lang="pug">
  div
    h3 say hello test
    div In
      input(placeholder="name" v-model="name" @change="onInputChange")
      button(@click="sayHello") say hello
    div Out: {{ message }}
</template>

<script>
import { HelloRequest } from '../../proto/greeter_pb'
import { GreeterPromiseClient } from '../../proto/greeter_grpc_web_pb'

export default {
  async asyncData() {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    onInputChange(e) {
      this.name = e.target.value
    },
    async sayHello() {
      const client = new GreeterPromiseClient('http://localhost:8080')
      const request = new HelloRequest()
      request.setName(this.name)
      const response = await client.sayHello(request)

      this.message = response.getMessage()
    }
  }
}
</script>

<style>
</style>
