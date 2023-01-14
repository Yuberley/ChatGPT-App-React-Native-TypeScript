import express from 'express';
import cors from 'cors';
import { environment } from './config.js';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	organization: environment.OPENAI_ORGANIZATION,
	apiKey: environment.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const idRandonAvatar = Math.floor(Math.random() * 100);

app.post('/api/chat', async (req, res) => {
	const { message, model, max_tokens, temperature } = req.body;

	console.log('\n\nInput: ', req.body);

	if ( message === '' ) {
		console.log('No message provided');
		res.json({
			data: 'No message provided',
		});
	}

	if( message !== '' ) {

		const response = await openai.createCompletion({
			model: model || 'text-davinci-003',
			prompt: message,
			max_tokens: max_tokens || 100,
			temperature: temperature || 0.5,
		})

		const data = {
			id: response.data.id,
			create: response.data.created,
			model: response.data.model,
			text: response.data.choices[0].text.replace("\n\n", ""),
			usage: response.data.usage,
			user: {
				name: 'chatgpt',
				avatar: 'https://i.pravatar.cc/100?img=' + idRandonAvatar,
			}
		}

		res.json({
			data: data,
		});

		console.log('\n\nOutput: ', response.data);
	
	}
	
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
