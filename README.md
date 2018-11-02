# proof of concept

## getteing started
```bash
$ docker-compose up -d
```

### code gen from proto
```bash
$ docker-compose exec workspace sh ./script/gen_proto.sh
```

### node-server
```bash
$ docker-compose exec node-server npm i
$ docker-compose exec node-server npm run dev
```

### web-server: nuxt
```bash
$ docker-compose exec node-server npm i
$ docker-compose exec web-server npm run dev
```

go to [localhost:8081](localhost:8081)

## examples
- echo
  - server streaming call
- greeter
  - rpc call

not implemented yet ([why](https://github.com/grpc/grpc-web/issues/24))
- client streaming call
- bidirectional streaming call
