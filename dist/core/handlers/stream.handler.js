"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// get an a stream, and then give it to logger
class StreamProxyHandler {
    constructor(logger) {
        this.logger = logger;
    }
    procesOutput(stream) {
        stream.stdout.on('data', (data) => {
            this.logger.log(data);
        });
        stream.stderr.on('error', (err) => {
            this.logger.error(err.message);
        });
        stream.on("close", () => {
            this.logger.end();
        });
    }
}
exports.default = StreamProxyHandler;
