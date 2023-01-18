import HTTPTransport from "../utils/http-transport";
import {IRegistrationData} from "./authApi";
const instance = new HTTPTransport('/user');

export interface IChangePasswordData {
    oldPassword: string;
    newPassword: string;
}

export interface IFindUserData {
    login: string;
}

export default class UserApi {

    getUserProfile(userId: number) {
        return instance.get(`/${userId}`);
    }

    changeUserProfile(data: IRegistrationData) {
        return instance.put('/profile', data);
    }

    changeUserPassword(data: IChangePasswordData) {
        return instance.put('/password', data);
    }

    findUserByLogin(data: IFindUserData) {
        return instance.post('/search', data);
    }

    changeUserAvatar(data: FormData) {
        return instance.put('/profile/avatar', data);
    }
}
