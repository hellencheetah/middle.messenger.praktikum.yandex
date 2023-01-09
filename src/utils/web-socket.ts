const WSS_URL = 'wss://ya-praktikum.tech/ws/chats';

export default class Socket {
    socket: WebSocket;
    private token: string;
    private chatId: string;
    private userId: string;

    public constructor(userId: string, chatId: string, token: string) {
        this.userId = userId;
        this.chatId = chatId;
        this.token = token;

        this.socket = new WebSocket(`${WSS_URL}/${this.userId}/${this.chatId}/${this.token}`);
        this.initSocket();
    }

    private initSocket() {
        this.socket.addEventListener('open', this.onOpen.bind(this));
        this.socket.addEventListener('close', this.onClose.bind(this));
        this.socket.addEventListener('message', this.onMessage.bind(this));
        this.socket.addEventListener('error', this.onError.bind(this));
    }

    public send(data): void {
        this.socket.send(JSON.stringify(data));
    }

    private onOpen(): void {
        console.log('Opened');
    }

    public onMessage(event) {
        console.log('Message from server ', event.data);
    }

    private onClose(event): void {
        console.log('Closed', event);
    }

    private onError(event): void {
        console.log('Closed', event);
    }
}

