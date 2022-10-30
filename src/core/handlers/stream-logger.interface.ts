//interface for StreamHandler
interface IStreamLoger {
    log(...args: any[]): void;
    error(...args: any[]): void;
    end(): void;
}

export default IStreamLoger;