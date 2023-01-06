import AuthApi, {ILoginData, IRegistrationData} from "../api/authApi";
import router from "../utils/router/router";
import store from "../utils/store";
import {setServerError} from "../utils/helpers";

const authService = new AuthApi();

class AuthController {

    login(data: ILoginData) {
        authService.login(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch((err) => setServerError(err));
    }

    register(data: IRegistrationData) {
        authService.register(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch((err) => setServerError(err));
    }

    logout() {
       authService.logout()
           .then(() => {
               router.go('/');
               localStorage.removeItem('user');
               store.clearStore();
           })
           .catch((err) => console.log(err))
    }

   getUser() {
        authService.getUser()
            .then((res: XMLHttpRequest) => {
                store.setState('currentUser', res.response);
                localStorage.setItem('user', JSON.stringify(res.response));
            })
            .catch((err) => console.log(err))
    }
}

export default new AuthController();
