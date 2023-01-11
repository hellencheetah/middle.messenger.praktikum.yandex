import store from "./store";
import {findChatInStoreById, openMenu} from "./helpers";
import Socket from "./web-socket";

class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            const chatId = element.dataset.id;
            const chatTitle = element.dataset.title;

            store.setState('currentChat', {id: chatId, title: chatTitle});


            const socket = findChatInStoreById(chatId);
            socket.send({
                content: '0',
                type: 'get old',
            });
        } else if (element.dataset.value === 'found-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;


            store.setState('userToAdd', {id: userId, login: userLogin});
            openMenu('add-user-menu');
        } else if (element.dataset.value === 'chat-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;

            store.setState('userToDelete', {id: userId, login: userLogin});
            openMenu('delete-user-menu');
        }
    }

    onMessage(event) {
        if (event.data) {
            if (!Array.isArray(JSON.parse(event.data))) {
                const messages = store.getState().messages;
                const message = JSON.parse(event.data);
                const hours = new Date(message.time).getHours();
                const minutes = new Date(message.time).getMinutes();
                const messageToSave = {...message, time: `${hours}:${minutes}`};
                messages.push(messageToSave);
                store.setState('messages', messageToSave);
            } else {
                const messages = JSON.parse(event.data);
                if (messages.length > 0) {
                    const messagesToSave = messages.map(message => {
                        const hours = new Date(message.time).getHours();
                        const minutes = new Date(message.time).getMinutes();
                        return {...message, time: `${hours}:${minutes}`}
                    }).reverse();
                    const chatId = messages[0].chat_id;
                    store.setState(`messages`, messagesToSave);
                } else {
                    store.setState(`messages`, []);
                }
            }
        }
    }
}

export default new Services();
