import IStreamLoger from "../../core/handlers/stream-logger.interface";

class ConsoleLogger implements IStreamLoger {
    private static instance: ConsoleLogger;

    public static get(): ConsoleLogger {
        if (!ConsoleLogger.instance) {
            ConsoleLogger.instance = new ConsoleLogger();
        } 

        return ConsoleLogger.instance;
    }

    log(...args: any[]): void {
        console.log(args);
    }

    error(error: Error): void {
       throw new Error(error.message);
    }

    end(): void {
        console.log('finished');
    }

}

export default ConsoleLogger;