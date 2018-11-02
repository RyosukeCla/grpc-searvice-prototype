/**
 * @fileoverview gRPC-Web generated client stub for echo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.echo = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echo.EchoPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.echo.EchoClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.echo.EchoClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo.EchoRequest,
 *   !proto.echo.EchoResponse>}
 */
const methodInfo_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo.EchoResponse,
  /** @param {!proto.echo.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.echo.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/Echo',
      request,
      metadata,
      methodInfo_Echo,
      callback);
};


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.echo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.echo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo.EchoRequest,
 *   !proto.echo.EchoResponse>}
 */
const methodInfo_EchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo.EchoResponse,
  /** @param {!proto.echo.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.echo.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.echoAbort =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/EchoAbort',
      request,
      metadata,
      methodInfo_EchoAbort,
      callback);
};


/**
 * @param {!proto.echo.EchoRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.EchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.echoAbort =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.echoAbort(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo.Empty,
 *   !proto.echo.Empty>}
 */
const methodInfo_NoOp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo.Empty,
  /** @param {!proto.echo.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.Empty.deserializeBinary
);


/**
 * @param {!proto.echo.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.echo.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echo.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.noOp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echo.Echo/NoOp',
      request,
      metadata,
      methodInfo_NoOp,
      callback);
};


/**
 * @param {!proto.echo.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echo.Empty>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.noOp =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.noOp(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo.ServerStreamingEchoRequest,
 *   !proto.echo.ServerStreamingEchoResponse>}
 */
const methodInfo_ServerStreamingEcho = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo.ServerStreamingEchoResponse,
  /** @param {!proto.echo.ServerStreamingEchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo.Echo/ServerStreamingEcho',
      request,
      metadata,
      methodInfo_ServerStreamingEcho);
};


/**
 * @param {!proto.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.serverStreamingEcho =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/echo.Echo/ServerStreamingEcho',
      request,
      metadata,
      methodInfo_ServerStreamingEcho);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echo.ServerStreamingEchoRequest,
 *   !proto.echo.ServerStreamingEchoResponse>}
 */
const methodInfo_ServerStreamingEchoAbort = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echo.ServerStreamingEchoResponse,
  /** @param {!proto.echo.ServerStreamingEchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.echo.ServerStreamingEchoResponse.deserializeBinary
);


/**
 * @param {!proto.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/echo.Echo/ServerStreamingEchoAbort',
      request,
      metadata,
      methodInfo_ServerStreamingEchoAbort);
};


/**
 * @param {!proto.echo.ServerStreamingEchoRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.echo.ServerStreamingEchoResponse>}
 *     The XHR Node Readable Stream
 */
proto.echo.EchoPromiseClient.prototype.serverStreamingEchoAbort =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/echo.Echo/ServerStreamingEchoAbort',
      request,
      metadata,
      methodInfo_ServerStreamingEchoAbort);
};


module.exports = proto.echo;

