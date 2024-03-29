import HTTPTransport from "../utils/http-transport";
const instance = new HTTPTransport('/chats');

export interface IUsersData {
    users: string[];
    chatId: number;
}

export interface IChatData {
    title: string;
}

export interface IDeleteChatData {
    chatId: number;
}

export default class ChatsApi {

    getAllChats() {
        return instance.get('/');
    }

    createNewChat(data: IChatData) {
        return instance.post('/', data);
    }

    deleteChatById(data: IDeleteChatData) {
        return instance.delete('/', data);
    }

    addUsers(data: IUsersData) {
        return instance.put('/users', data);
    }

    deleteUsers(data: IUsersData) {
        return instance.delete('/users', data);
    }

    //Request token to connect to messages server
    getRequestToken(id: number) {
        return instance.post(`/token/${id}`);
    }

    getNewMessagesCount(id: number) {
        return instance.post(`/new/${id}`);
    }

    getChatUsers(id: number) {
        return instance.get(`/${id}/users`);
    }

    changeChatAvatar(data: FormData) {
        return instance.put(`/avatar`, data);
    }
}
