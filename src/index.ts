import { PromptService } from './core/prompt/prompt.service';
import StreamProxyHandler from './core/handlers/stream.handler';
import ConsoleLogger from './out/console.logger/console.logger';

export class App {
	async run() {
		const res = await (new PromptService()).input<number>('Число', 'number');
		console.log(res);
	}
}

const app = new App();
app.run();

