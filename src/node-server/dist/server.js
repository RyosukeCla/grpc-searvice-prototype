"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("grpc"));
const greeter_1 = __importDefault(require("./services/greeter"));
const echo_1 = __importDefault(require("./services/echo"));
function main() {
    const server = new grpc.Server();
    greeter_1.default(server);
    echo_1.default(server);
    server.bind('0.0.0.0:9090', grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('listen node server on', '0.0.0.0:9090');
}
main();
//# sourceMappingURL=server.js.map