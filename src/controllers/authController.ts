import AuthApi, {ILoginData, IRegistrationData} from "../api/authApi";
import router from "../utils/router/router";
import store from "../utils/store";

const authService = new AuthApi();

class AuthController {

    login(data: ILoginData) {
        authService.login(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch((err) => console.log(err));
    }

    register(data: IRegistrationData) {
        authService.register(data)
            .then(() => {
                router.go('/messenger');
            })
            .catch((err) => console.log(err));
    }

    logout() {
       authService.logout()
           .then(() => {
               router.go('/');
           })
           .catch((err) => console.log(err))
    }

   getUser() {
        authService.getUser()
            .then((res: XMLHttpRequest) => {
                store.setState('currentUser', res.response);
            })
            .catch((err) => console.log(err))
    }
}

export default new AuthController();
