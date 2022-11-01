"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
