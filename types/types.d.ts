
interface User {
    name: string;
    avatar: string;
}

interface Usage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

export interface MessageType {
    id: string;
    create: number;
    model: string;
    text: string;
    user: User;
    usage: Usage;
};

