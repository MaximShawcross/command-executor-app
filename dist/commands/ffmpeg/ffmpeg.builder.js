"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FfmpegBuilder {
    constructor() {
        this.options = new Map();
        this.options.set("c:v", "libx264");
    }
    input(inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    setVideoSize(width, height) {
        this.options.set(`-s`, `${width}x${height}`);
        return this;
    }
    outPut(outputPath) {
        if (!this.inputPath) {
            throw new Error("Input field is not set");
        }
        const args = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    }
}
exports.default = FfmpegBuilder;
