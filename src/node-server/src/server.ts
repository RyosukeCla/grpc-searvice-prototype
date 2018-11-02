import * as grpc from 'grpc'
import greeter from './services/greeter'
import echo from './services/echo'

function main() {
  const server = new grpc.Server();

  greeter(server)
  echo(server)

  server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
  server.start();
  console.log('listen node server on', '0.0.0.0:9090')
}

main();
