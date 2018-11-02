const isServer = process.server

export default (GrpcClient) => {
  if (process.server) {
    return new GrpcClient('localhost:8080', null, null)
  } else {
    return new GrpcClient('localhost:8080', null, null)
  }
}
