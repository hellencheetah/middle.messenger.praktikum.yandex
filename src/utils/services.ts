import store from "./store";
import {findChatInStoreById, isArray, openMenu} from "./helpers";
import {Message, MessageItem} from "../models/main";


class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            this.onClickChatItem(element);
        } else if (element.dataset.value === 'found-user') {
            this.onClickFoundUser(element);
        } else if (element.dataset.value === 'chat-user') {
            this.onClickChatUser(element);
        }
    }

    onMessage(event: MessageEvent) {
        if (event.data) {
            const data = JSON.parse(event.data)
            if (!isArray(data)) {
                this.addNewMessageToChat(data)
            } else {
                this.saveChatMessages(data);
            }
        }
    }

    private addNewMessageToChat(data: MessageItem): void {
        const {messages, currentUser: { id }} = store.getState();
        const message = data;
        const hours = new Date(message.time).getHours();
        const minutes = new Date(message.time).getMinutes();
        const messageToSave = {...message, time: `${hours}:${minutes}`, my: id === message.user_id};
        messages.push(messageToSave);
        store.setState('messages', messageToSave);
    }

    private saveChatMessages(messages: Message[]): void {
        if (messages.length > 0) {
            const {currentUser: {id}} = store.getState();
            const messagesToSave = messages
                .map(message => {
                    const hours = new Date(message.time).getHours();
                    const minutes = new Date(message.time).getMinutes();
                    return {...message, time: `${hours}:${minutes}`, my: id === message.user_id}
                }).reverse();
            store.setState(`messages`, messagesToSave);
        } else {
            store.setState(`messages`, []);
        }
    }

    private onClickChatItem(element: HTMLElement) {
        const chatId = element.dataset.id;
        const chatTitle = element.dataset.title;

        store.setState('currentChat', {id: chatId, title: chatTitle});
        const socket = findChatInStoreById(chatId);
        if (socket) {
            socket.send({
                content: '0',
                type: 'get old',
            });
        }
    }

    private onClickFoundUser(element: HTMLElement) {
        const userId = element.dataset.id;
        const userLogin = element.dataset.login;

        store.setState('userToAdd', { id: userId, login: userLogin });
        openMenu('add-user-menu');
    }

    private onClickChatUser(element: HTMLElement) {
        const userId = element.dataset.id;
        const userLogin = element.dataset.login;

        store.setState('userToDelete', { id: userId, login: userLogin });
        openMenu('delete-user-menu');
    }

    public onClose() {
        store.setState('currentChat', null);
    }
}

export default new Services();
