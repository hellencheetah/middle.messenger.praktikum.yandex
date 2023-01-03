import AuthApi, {ILoginData, IRegistrationData} from "../api/authApi";
const authService = new AuthApi();

export class LoginController {
    async login(data: ILoginData) {
        try {
            await authService.login(data);
            console.log(data)
           // await this.getUser();
        } catch (e) {
            return e.reason;
        }
    }

    async register(data: IRegistrationData) {
        try {
            await authService.register(data);
            console.log(data)
        } catch (e) {
            return e.reason;
        }
    }

    async logout() {
        try {
            await authService.logout();
        } catch (e) {
            return e.reason;
        }
    }

   async getUser() {
        let res;
        try {
            res = await authService.getUser();
        } catch (e) {
            res = e.reason;
        }
        return res;
    }
}
