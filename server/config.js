import { config } from 'dotenv';
config();

export const environment = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ORGANIZATION: process.env.OPENAI_ORGANIZATION,
}
