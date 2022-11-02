"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamProxyHandler {
    constructor(logger) {
        this.logger = logger;
    }
    procesOutput(stream) {
        stream.stdout.on('data', (data) => {
            this.logger.log(data.toString());
        });
        stream.stderr.on('error', (err) => {
            this.logger.error(err.toString());
        });
        stream.on("close", () => {
            this.logger.end();
        });
    }
}
exports.default = StreamProxyHandler;
