import FfmpegExecutor from './commands/ffmpeg/ffmpeg.exec';
import StreamProxyHandler from './core/handlers/stream.handler';
import ConsoleLogger from './out/console.logger/console.logger';

class App {
	async run() {
		new FfmpegExecutor(ConsoleLogger.get()).execute();
	}
}

const app = new App();
app.run();

