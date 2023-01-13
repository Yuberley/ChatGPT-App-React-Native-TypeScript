import { useState ,useEffect } from "react";
import { getMessage } from "../helpers/getMessage";
import { MessageType } from "../types/types";

type state = {
    data: MessageType;
    isLoading: boolean;
};

export const useFetchMessage = (message: string): state => {

    const [state, setState] = useState<state>({
        data: {
            id: '',
            create: 0,
            model: '',
            text: '',
            user: {
                name: '',
                avatar: '',
            },
            usage: {
                prompt_tokens: 0,
                completion_tokens: 0,
                total_tokens: 0,
            },
        },
        isLoading: true,
    });

    const loadMessage = async () => {
        const data = await getMessage(message);
        setState({
            data,
            isLoading: false,
        });
    };

    useEffect(() => {
        loadMessage();
    }, [message]);

    return state;
}