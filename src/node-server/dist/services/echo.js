"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const messages = __importStar(require("../../proto/echo_pb"));
const echo_grpc_pb_1 = require("../../proto/echo_grpc_pb");
const grpc = __importStar(require("grpc"));
const _ = __importStar(require("lodash"));
const async = __importStar(require("async"));
const copyMetadata = (call) => {
    const metadata = call.metadata.getMap();
    const response_metadata = new grpc.Metadata();
    for (let key in metadata) {
        response_metadata.set(key, metadata[key]);
    }
    return response_metadata;
};
const doEcho = (call, callback) => {
    const response = new messages.EchoResponse();
    const message = call.request.getMessage();
    response.setMessage('echo ' + message);
    return callback(null, response, copyMetadata(call));
};
const doEchoAbort = (call, callback) => {
    return callback({
        code: grpc.status.ABORTED,
        message: 'Aborted from server side.'
    });
};
const doServerStreamingEcho = (call) => {
    const message = call.request.getMessage();
    const count = call.request.getMessageCount();
    const interval = call.request.getMessageInterval();
    let echoMessage = '';
    const echos = [];
    for (let i = 0; i < count; i++) {
        echos.push((callback) => {
            _.delay(() => {
                const reply = new messages.ServerStreamingEchoResponse();
                echoMessage += ' ' + message;
                reply.setMessage(echoMessage);
                call.write(reply);
                callback();
            }, interval);
        });
    }
    async.series(echos, () => {
        call.end(copyMetadata(call));
    });
};
exports.default = (server) => {
    server.addService(echo_grpc_pb_1.EchoService, {
        echo: doEcho,
        echoAbort: doEchoAbort,
        serverStreamingEcho: doServerStreamingEcho
    });
};
//# sourceMappingURL=echo.js.map