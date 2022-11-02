import { ICommandExec } from "../../core/executor/command.types";

export interface IFfmpegInput {
    width: number,
    height: number,
    name: string,
    path: string
}

export interface ICommandExecFfmpeg extends ICommandExec {
    output: string
}