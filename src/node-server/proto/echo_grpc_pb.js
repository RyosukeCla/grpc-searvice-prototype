// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var echo_pb = require('./echo_pb.js');

function serialize_echo_ClientStreamingEchoRequest(arg) {
  if (!(arg instanceof echo_pb.ClientStreamingEchoRequest)) {
    throw new Error('Expected argument of type echo.ClientStreamingEchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_ClientStreamingEchoRequest(buffer_arg) {
  return echo_pb.ClientStreamingEchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_ClientStreamingEchoResponse(arg) {
  if (!(arg instanceof echo_pb.ClientStreamingEchoResponse)) {
    throw new Error('Expected argument of type echo.ClientStreamingEchoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_ClientStreamingEchoResponse(buffer_arg) {
  return echo_pb.ClientStreamingEchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_EchoRequest(arg) {
  if (!(arg instanceof echo_pb.EchoRequest)) {
    throw new Error('Expected argument of type echo.EchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_EchoRequest(buffer_arg) {
  return echo_pb.EchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_EchoResponse(arg) {
  if (!(arg instanceof echo_pb.EchoResponse)) {
    throw new Error('Expected argument of type echo.EchoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_EchoResponse(buffer_arg) {
  return echo_pb.EchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_Empty(arg) {
  if (!(arg instanceof echo_pb.Empty)) {
    throw new Error('Expected argument of type echo.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_Empty(buffer_arg) {
  return echo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_ServerStreamingEchoRequest(arg) {
  if (!(arg instanceof echo_pb.ServerStreamingEchoRequest)) {
    throw new Error('Expected argument of type echo.ServerStreamingEchoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_ServerStreamingEchoRequest(buffer_arg) {
  return echo_pb.ServerStreamingEchoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_echo_ServerStreamingEchoResponse(arg) {
  if (!(arg instanceof echo_pb.ServerStreamingEchoResponse)) {
    throw new Error('Expected argument of type echo.ServerStreamingEchoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_echo_ServerStreamingEchoResponse(buffer_arg) {
  return echo_pb.ServerStreamingEchoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A simple echo service.
var EchoService = exports.EchoService = {
  // One request followed by one response
  // The server returns the client message as-is.
  echo: {
    path: '/echo.Echo/Echo',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  // Sends back abort status.
  echoAbort: {
    path: '/echo.Echo/EchoAbort',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  // One empty request, ZERO processing, followed by one empty response
  // (minimum effort to do message serialization).
  noOp: {
    path: '/echo.Echo/NoOp',
    requestStream: false,
    responseStream: false,
    requestType: echo_pb.Empty,
    responseType: echo_pb.Empty,
    requestSerialize: serialize_echo_Empty,
    requestDeserialize: deserialize_echo_Empty,
    responseSerialize: serialize_echo_Empty,
    responseDeserialize: deserialize_echo_Empty,
  },
  // One request followed by a sequence of responses (streamed download).
  // The server will return the same client message repeatedly.
  serverStreamingEcho: {
    path: '/echo.Echo/ServerStreamingEcho',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.ServerStreamingEchoRequest,
    responseType: echo_pb.ServerStreamingEchoResponse,
    requestSerialize: serialize_echo_ServerStreamingEchoRequest,
    requestDeserialize: deserialize_echo_ServerStreamingEchoRequest,
    responseSerialize: serialize_echo_ServerStreamingEchoResponse,
    responseDeserialize: deserialize_echo_ServerStreamingEchoResponse,
  },
  // One request followed by a sequence of responses (streamed download).
  // The server abort directly.
  serverStreamingEchoAbort: {
    path: '/echo.Echo/ServerStreamingEchoAbort',
    requestStream: false,
    responseStream: true,
    requestType: echo_pb.ServerStreamingEchoRequest,
    responseType: echo_pb.ServerStreamingEchoResponse,
    requestSerialize: serialize_echo_ServerStreamingEchoRequest,
    requestDeserialize: deserialize_echo_ServerStreamingEchoRequest,
    responseSerialize: serialize_echo_ServerStreamingEchoResponse,
    responseDeserialize: deserialize_echo_ServerStreamingEchoResponse,
  },
  // A sequence of requests followed by one response (streamed upload).
  // The server returns the total number of messages as the result.
  clientStreamingEcho: {
    path: '/echo.Echo/ClientStreamingEcho',
    requestStream: true,
    responseStream: false,
    requestType: echo_pb.ClientStreamingEchoRequest,
    responseType: echo_pb.ClientStreamingEchoResponse,
    requestSerialize: serialize_echo_ClientStreamingEchoRequest,
    requestDeserialize: deserialize_echo_ClientStreamingEchoRequest,
    responseSerialize: serialize_echo_ClientStreamingEchoResponse,
    responseDeserialize: deserialize_echo_ClientStreamingEchoResponse,
  },
  // A sequence of requests with each message echoed by the server immediately.
  // The server returns the same client messages in order.
  // E.g. this is how the speech API works.
  fullDuplexEcho: {
    path: '/echo.Echo/FullDuplexEcho',
    requestStream: true,
    responseStream: true,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
  // A sequence of requests followed by a sequence of responses.
  // The server buffers all the client messages and then returns the same
  // client messages one by one after the client half-closes the stream.
  // This is how an image recognition API may work.
  halfDuplexEcho: {
    path: '/echo.Echo/HalfDuplexEcho',
    requestStream: true,
    responseStream: true,
    requestType: echo_pb.EchoRequest,
    responseType: echo_pb.EchoResponse,
    requestSerialize: serialize_echo_EchoRequest,
    requestDeserialize: deserialize_echo_EchoRequest,
    responseSerialize: serialize_echo_EchoResponse,
    responseDeserialize: deserialize_echo_EchoResponse,
  },
};

exports.EchoClient = grpc.makeGenericClientConstructor(EchoService);
