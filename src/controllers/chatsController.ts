import store from "../utils/store";
import ChatsApi, {IUsersData, IChatData, IDeleteChatData} from "../api/chatsApi";
import {closeMenu, openMenu} from "../utils/helpers";
import Socket from "../utils/web-socket";
import {Props} from "../utils/block";
import Services from "../utils/services";

const chatsService = new ChatsApi();

class ChatsController {

    // Получаем список всех чатов
    getAllChats() {
        chatsService.getAllChats()
            .then((res: XMLHttpRequest) => {
                store.setState('chats', res.response);
                return res.response
            })
            .then((chats) => {
                chats.forEach((chat: Props) => {
                     chatsService.getRequestToken(chat.id)
                         .then((res: XMLHttpRequest) => {
                             const token = res.response.token;
                             const userId = store.getState().currentUser.id;
                             const socket = new Socket(userId, chat.id, token);
                             store.setState(`sockets.${chat.id}`, socket);
                             socket.message((e) => Services.onMessage(e))
                         })
                 })

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
            .then(() => {
                this.getAllChats();
                store.setState('currentChat', null);
            })
            .catch((err) => console.log(err));
    }

    addUsers(data: IUsersData) {
        chatsService.addUsers(data)
            .then(() => {
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


    public getRequestToken(id: number) {
        chatsService.getRequestToken(id)
            .then((res: XMLHttpRequest) => {
                return res.response.token;
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
