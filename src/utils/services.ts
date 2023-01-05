import store from "./store";
import ChatsController from "../controllers/chatsController";
import {IUsersData} from "../api/chatsApi";

class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            const chatId = element.dataset.id;
            const chatTitle = element.dataset.title;

            store.setState('currentChatId', chatId);
            store.setState('currentChatTitle', chatTitle);
        }

        else if (element.dataset.value === 'found-user') {
            const userId = element.dataset.id;

            const chatId = store.getState().currentChatId;
            const data = {
                users: [ userId ],
                chatId,
            }
            ChatsController.addUsers(data);
        }

        else if (element.dataset.value === 'chat-user') {
            const userId = element.dataset.id;
            const userLogin = element.dataset.login;

            store.setState('userIdToDelete', userId);
            store.setState('userLoginToDelete', userLogin);
            const elem = document.getElementById('delete-user-menu') as HTMLElement;
            elem.style.display = 'block';



            // const chatId = store.getState().currentChatId;
            // const data = {
            //     users: [ userId ],
            //     chatId,
            // }
            // ChatsController.addUsers(data);
        }
    }


    public openMenu(id: string) {
        const elem = document.getElementById(id) as HTMLElement;
        elem.style.display = 'block';
    }

    public closeMenu(id: string) {
        const elem = document.getElementById(id) as HTMLElement;
        elem.style.display = 'none';
    }

    public toggleMenu(id: string) {
        const elem = document.getElementById(id) as HTMLElement;
        if (elem.style.display === 'block') {
            elem.style.display = 'none';
        } else {
            elem.style.display = 'block';
        }
    }
}

export default new Services();
