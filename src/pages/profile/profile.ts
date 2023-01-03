import template from './profile.template';
import Block from '../../utils/block';
import ProfileData from "../../components/profileData";
import Button from "../../components/button";
import './profile.scss';
import AuthController from "../../controllers/authController";
import store, {StoreEvents} from "../../utils/store";

export class Profile extends Block {
    constructor() {
        AuthController.getUser();
        store.on(StoreEvents.Updated, () => {
            const user = store.getState().currentUser;
            this.setProps(user); // обновили пропс
        });

       const profileData = new ProfileData();

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

        super({profileData, button });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
