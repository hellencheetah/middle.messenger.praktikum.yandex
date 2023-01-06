
import UserApi, {IChangePasswordData, IFindUserData} from "../api/userApi";
import {IRegistrationData} from "../api/authApi";
import store from "../utils/store";
import {openMenu} from "../utils/helpers";

const usersService = new UserApi();

class UsersController {

    getUserProfile(userId: number) {
        usersService.getUserProfile(userId)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    changeUserProfile(data: IRegistrationData) {
        usersService.changeUserProfile(data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    changeUserPassword(data: IChangePasswordData) {
        usersService.changeUserPassword(data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err));
    }

    findUserByLogin(data: IFindUserData) {
        usersService.findUserByLogin(data)
            .then((res: XMLHttpRequest) => {
                store.setState('usersFound', res.response);
                openMenu('add-user-menu');
            })
            .catch((err) => console.log(err));
    }
}

export default new UsersController();
