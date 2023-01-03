import HTTPTransport from "../utils/http-transport";
const instance = new HTTPTransport('/auth');

export interface ILoginData {
    login: string;
    password: string;
}

export interface IRegistrationData {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
}

export default class AuthApi {
    register(data: IRegistrationData) {
        return instance.post('/signup', data);
    }

    login(data: ILoginData) {
        return instance.post('/signin', data);
    }

    logout() {
        return instance.post('/logout');
    }

    getUser() {
        return instance.get('/user');
    }
}
