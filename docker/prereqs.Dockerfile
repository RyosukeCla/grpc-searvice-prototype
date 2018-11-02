FROM ubuntu:16.04

ARG MAKEFLAGS=-j8

RUN apt-get update && apt-get install -y \
  autoconf \
  automake \
  build-essential \
  curl \
  git \
  default-jdk \
  default-jre \
  libtool \
  libpcre3-dev \
  libssl-dev \
  make \
  nginx \
  zip

# install node 10.x
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  apt-get install -y nodejs

# install grpc env
RUN git clone https://github.com/grpc/grpc-web /github/grpc-web
RUN cd /github/grpc-web && \
  ./scripts/init_submodules.sh
## install grpc
RUN cd /github/grpc-web/third_party/grpc && \
  make && make install

## install protoc
RUN cd /github/grpc-web/third_party/grpc/third_party/protobuf && \
  make install

## install protoc-gen-grpc-web
RUN cd /github/grpc-web && \
  make install-plugin

## install protoc for grpc for node
RUN npm i -g grpc-tools --unsafe-perm
RUN npm i -g grpc_tools_node_protoc_ts --unsafe-perm
