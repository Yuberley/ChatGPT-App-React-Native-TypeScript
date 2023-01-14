import { API_URL } from '../constants/constants';
import { MessageType } from '../types/types';

export const getMessage = async (message: string) => {

    console.log('getMessageInput: ', message );

    const body = {
        model: 'text-davinci-003',
        message: message || '',
        max_tokens: 1000,
        temperature: 0.5
    };

    const fetchMessage = async (): Promise<MessageType> => {
        const response = await globalThis.fetch(`${API_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const { data } = await response.json();

        return data;
    };
    
    return fetchMessage();

};