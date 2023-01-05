// import router from "../utils/router/router";
import store from "../utils/store";
import ChatsApi, {IUsersData, IChatData} from "../api/chatsApi";
import Services from "../utils/services";

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

    addUsers(data: IUsersData) {
        chatsService.addUsers(data)
            .then(() => Services.closeMenu('add-user-menu'))
            .catch((err) => console.log(err));
    }

    deleteUsers(data: IUsersData) {
        chatsService.deleteUsers(data)
            .then(() => Services.closeMenu('add-user-menu'))
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
                Services.openMenu('delete-user-menu');
            })
            .catch((err) => console.log(err));
    }
}

export default new ChatsController();
