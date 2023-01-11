import Services from "./services";

const WSS_URL = 'wss://ya-praktikum.tech/ws/chats';

export default class Socket {
    socket: WebSocket;
    protected token: string;
    protected chatId: string;
    protected userId: string;

    static instance: Socket;

    public constructor(userId: string, chatId: string, token: string) {
        this.userId = userId;
        this.chatId = chatId;
        this.token = token;

        this.socket = new WebSocket(`${WSS_URL}/${this.userId}/${this.chatId}/${this.token}`);
        this.initSocket();
    }

    private initSocket() {
        this.socket.addEventListener('open', this.open.bind(this));
        this.socket.addEventListener('close', this.close.bind(this));
        this.socket.addEventListener('message', this.message.bind(this));
        this.socket.addEventListener('error', this.error.bind(this));
    }

    public send(data: any): void {
        this.socket.send(JSON.stringify(data));
    }

    private open(): void {
        console.log('Opened');
    }

    public message(event) {
        Services.onMessage(event);
    }

    private close(event): void {
        console.log('Closed', event);
    }

    private error(event): void {
        console.log('Error', event);
    }
}

