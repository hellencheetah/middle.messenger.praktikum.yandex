import store from "./store";
import {openMenu} from "./helpers";
import Socket from "./web-socket";

class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            const chatId = element.dataset.id;
            const chatTitle = element.dataset.title;

            store.setState('currentChat', {id: chatId, title: chatTitle});

        }

        else if (element.dataset.value === 'found-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;


            store.setState('userToAdd', {id: userId, login: userLogin});
            openMenu('add-user-menu');
        }

        else if (element.dataset.value === 'chat-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;

            store.setState('userToDelete', {id: userId, login: userLogin});
            openMenu('delete-user-menu');

        }
    }
}

export default new Services();
