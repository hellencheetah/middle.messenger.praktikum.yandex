import template from './deleteUserMenu.template';
import Block from '../../utils/block';
import './deleteUserMenu.scss';
import Button from "../button";
import store, {StoreEvents} from "../../utils/store";
import Services from "../../utils/services";
import ChatsController from "../../controllers/chatsController";

export class DeleteUserMenu extends Block {
    constructor() {

        const button: Block = new Button({
            btnText: 'Get users',
            btnType: 'submit',
            btnClass: 'delete-user-menu__btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const chatId = store.getState().currentChatId;
                    ChatsController.getChatUsers(chatId);
                }
            }
        });

        const deleteUserButton: Block = new Button({
            btnText: 'Yes',
            btnType: 'button',
            btnClass: '',
            events: {
                click: (e: Event) => {
                    console.log(e)
                }
            }
        });


        super({
            button,
            deleteUserButton,
            events: {
                click: Services.onClick,
            }
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
