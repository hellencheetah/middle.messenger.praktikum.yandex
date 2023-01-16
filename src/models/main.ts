
export interface Message {
    chat_id: number;
    content: string;
    file: any;
    id: number;
    is_read: boolean;
    time: Date;
    type: string;
    user_id: number;
}

export interface MessageItem {
    content: string;
    id: number;
    time: Date;
    type: string;
    user_id: number;
}
