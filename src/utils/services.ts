import store from "./store";
import {findChatInStoreById, isArray, openMenu} from "./helpers";
import {Message, MessageItem} from "../models/main";


class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            const chatId = element.dataset.id;
            const chatTitle = element.dataset.title;
            const chatAvatar = element.dataset.avatar;

            store.setState('currentChat', {id: chatId, title: chatTitle, avatar: chatAvatar});
            const socket = findChatInStoreById(chatId);
            if (socket) {
                socket.send({
                    content: '0',
                    type: 'get old',
                });
            }
        } else if (element.dataset.value === 'found-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;

            store.setState('userToAdd', { id: userId, login: userLogin });
            openMenu('add-user-menu');
        } else if (element.dataset.value === 'chat-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;

            store.setState('userToDelete', { id: userId, login: userLogin });
            openMenu('delete-user-menu');
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
        if (data.type !== 'message') return;
        const {messages, currentUser: { id }} = store.getState();
        const message = data;
        const time = new Date(message.time).toLocaleTimeString().slice(0, 5)
        const messageToSave = {...message, time, my: id === message.user_id};
        messages.push(messageToSave);
        store.setState('messages', messageToSave);
    }

    private saveChatMessages(messages: Message[]): void {
        if (messages.length > 0) {
            const {currentUser: {id}} = store.getState();
            const messagesToSave = messages
                .map(message => {
                    const time = new Date(message.time).toLocaleTimeString().slice(0, 5);
                    return {...message, time, my: id === message.user_id}
                }).reverse();
            store.setState(`messages`, messagesToSave);
        } else {
            store.setState(`messages`, []);
        }
    }

    public onClose() {
        store.setState('currentChat', null);
        store.setState('messages', []);
    }
}

export default new Services();
