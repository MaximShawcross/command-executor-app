"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    static get() {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger();
        }
        return ConsoleLogger.instance;
    }
    log(...args) {
        console.log(args);
    }
    error(error) {
        throw new Error(error.message);
    }
    end() {
        console.log('finished');
    }
}
exports.default = ConsoleLogger;
