module.exports = {
  build: {
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.externals = Object.assign({}, config.externals, {
          grpc: 'grpc'
        })
      } else {
        config.externals = Object.assign({}, config.externals, {
          'grpc-web': 'gprc-web'
        })
      }
    }
 }
}
