import { ChildProcessWithoutNullStreams } from "child_process";
import IStreamLoger from "./stream-logger.interface";

// get an a stream, and then give it to logger

class StreamProxyHandler {
    constructor(private logger: IStreamLoger) { }

    procesOutput(stream: ChildProcessWithoutNullStreams) {
        stream.stdout.on('data', (data: any) => {
            this.logger.log(data.toString());
        });

        stream.stderr.on('error', (err) => {
            this.logger.error(err.toString());
        })

        stream.on("close", () => {
            this.logger.end();
        })
    }
}

export default StreamProxyHandler;