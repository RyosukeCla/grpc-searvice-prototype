NODE_SERVER_DIR=./src/node-server/proto
WEB_SERVER_DIR=./src/web-server/proto
PROTO_DIR=./src/proto
PROTOC_GEN_TS_PATH=/usr/bin/grpc_tools_node_protoc_plugin

genForWeb () {
    # gen grpc-web proto
    protoc \
        --js_out=import_style=commonjs,binary:$1 \
        --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$1 \
        -I=$PROTO_DIR $PROTO_DIR/*.proto
}

genForSSR () {
    # gen grpc-web proto
    protoc \
        --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$1 \
        -I=$PROTO_DIR $PROTO_DIR/*.proto

    # gen grpc-node proto
    genForNode $1
}

genForNode () {
    # gen grpc-node proto
    grpc_tools_node_protoc \
        --js_out=import_style=commonjs,binary:$1 \
        --ts_out=$1 \
        --grpc_out=$1 \
        --plugin=protoc-gen-grpc=/usr/bin/grpc_tools_node_protoc_plugin \
        -I=$PROTO_DIR $PROTO_DIR/*.proto

    # gen grpc-node proto d.ts
    protoc \
        --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
        --ts_out=$1 \
        -I=$PROTO_DIR $PROTO_DIR/*.proto
}

genForNode $NODE_SERVER_DIR
genForSSR $WEB_SERVER_DIR
