import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import CommandExecutor from "../../core/executor/command.executor";
import FileService from "../../core/files/file.service";
import IStreamLoger from "../../core/handlers/stream-logger.interface";
import PromptService from "../../core/prompt/prompt.service";
import { ICommandExecFfmpeg, IFfmpegInput } from "./ffmpeg.types"; 
import FfmpegBuilder from "./ffmpeg.builder";
import StreamProxyHandler from "../../core/handlers/stream.handler";

class FfmpegExecutor extends CommandExecutor<IFfmpegInput> {
    private fileService: FileService = new FileService();
    private promptService: PromptService = new PromptService();

    constructor( logger: IStreamLoger,) {
        super(logger);
    }

    protected async prompt(): Promise<IFfmpegInput> {
        const width = await this.promptService.input<number>("Width", 'number')
        const path = await this.promptService.input<string>("Path", 'input')
        const name = await this.promptService.input<string>("Name", 'input')
        const height = await this.promptService.input<number>("Height", 'number')
        
        return {width, name, path, height};
    }

    protected build({ width, name, path, height }: IFfmpegInput): ICommandExecFfmpeg {
        const output = this.fileService.getFilePath(path, name, "mp4");
        const args = (new FfmpegBuilder())
            .input(path)
            .setVideoSize(width, height)
            .outPut(output);

        return { command: "ffmpeg", args, output };
    }
    protected spawn({output, command, args}: ICommandExecFfmpeg): ChildProcessWithoutNullStreams {
        this.fileService.deleteFileIfExist(output);
        
        return spawn(command, args)
    }
    protected processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLoger): void {
        const handler = new StreamProxyHandler(logger);
        handler.procesOutput(stream);
    }
    
}

export default FfmpegExecutor;