import HTTPTransport from "../utils/http-transport";
import {IRegistrationData} from "./authApi";
const instance = new HTTPTransport('/users');

export interface IChangePasswordData {
    oldPassword: string;
    newPassword: string;
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

    usersSearch(login: string) {
        return instance.get('/password', {login});
    }
}
