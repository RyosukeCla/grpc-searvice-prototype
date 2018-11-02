"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_pb_1 = require("../../proto/greeter_pb");
const greeter_grpc_pb_1 = require("../../proto/greeter_grpc_pb");
const sayHello = (call, callback) => {
    const reply = new greeter_pb_1.HelloReply();
    const name = call.request.getName();
    reply.setMessage('Hello, ' + name);
    return callback(null, reply);
};
exports.default = (server) => {
    server.addService(greeter_grpc_pb_1.GreeterService, {
        sayHello
    });
};
//# sourceMappingURL=greeter.js.map