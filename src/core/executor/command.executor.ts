import { ChildProcessWithoutNullStreams } from "child_process";
import IStreamLoger from "../handlers/stream-logger.interface";
import { ICommandExec } from "./command.types";

//generic for prompt method
abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLoger) {}
    
    protected abstract prompt(...args: any[]): Promise<Input>;
    protected abstract build(input: Input): ICommandExec;
    protected abstract spawn(command: ICommandExec): ChildProcessWithoutNullStreams;
    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger:IStreamLoger): void;

    public async execute() { 
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }

}


export default CommandExecutor