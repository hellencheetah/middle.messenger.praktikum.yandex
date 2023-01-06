import store from "../utils/store";
import ChatsApi, {IUsersData, IChatData, IDeleteChatData} from "../api/chatsApi";
import {closeMenu, openMenu} from "../utils/helpers";

const chatsService = new ChatsApi();

class ChatsController {

    // Получаем список всех чатов
    getAllChats() {
        chatsService.getAllChats()
            .then((res: XMLHttpRequest) => {
                store.setState('chats', res.response);
            })
            .catch((err) => console.log(err));
    }

    // Создаем новый чат, в ответ приходит id чата
    createNewChat(data: IChatData) {
        chatsService.createNewChat(data)
            .then(() => this.getAllChats())
            .catch((err) => console.log(err));
    }

    deleteChatById(data: IDeleteChatData) {
        chatsService.deleteChatById(data)
            .then(() =>{
                this.getAllChats();
                store.setState('currentChat', null);
            })
            .catch((err) => console.log(err));
    }

    addUsers(data: IUsersData) {
        chatsService.addUsers(data)
            .then(() =>{
                closeMenu('add-user-menu');
                store.setState('userToAdd', null);
                store.setState('usersFound', []);
            })
            .catch((err) => console.log(err));
    }

    deleteUsers(data: IUsersData) {
        chatsService.deleteUsers(data)
            .then(() => {
                closeMenu('delete-user-menu');
                store.setState('userToDelete', null);
                store.setState('currentChatUsers', []);
            })
            .catch((err) => console.log(err));
    }


    getRequestToken(id: number) {
        chatsService.getRequestToken(id)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    getChatUsers(id: number) {
        chatsService.getChatUsers(id)
            .then((res: XMLHttpRequest) => {
                store.setState('currentChatUsers', res.response);
                openMenu('delete-user-menu');
            })
            .catch((err) => console.log(err));
    }
}

export default new ChatsController();
