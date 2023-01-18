import template from './profile.template';
import Block from '../../utils/block';
import ProfileData from "../../components/profileData";
import Button from "../../components/button";
import './profile.scss';
import AuthController from "../../controllers/authController";
import store, {StoreEvents} from "../../utils/store";
import AvatarBlock from "../../components/avatarBlock";

export class Profile extends Block {
    constructor() {
        AuthController.getUser();

       const profileData = new ProfileData();
       const avatarBlock = new AvatarBlock();

        const button = new Button({
            btnText: 'Logout',
            btnClass: 'btn--link-like profile__options-btn',
            btnType: 'button',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    AuthController.logout();
                }
            }
        })

        super({avatarBlock, profileData, button });

        store.on(StoreEvents.Updated, () => {
            const user = store.getState().currentUser;
            this.setProps(user); // обновили пропс
        });

    }

    render() {
        return this.compile(template, {...this.props});
    }
}
