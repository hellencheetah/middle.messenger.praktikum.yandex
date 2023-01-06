import template from './deleteUserMenu.template';
import Block from '../../utils/block';
import './deleteUserMenu.scss';
import Button from "../button";
import store, {StoreEvents} from "../../utils/store";
import Services from "../../utils/services";
import ChatsController from "../../controllers/chatsController";
import {openMenu} from "../../utils/helpers";

export class DeleteUserMenu extends Block {
    constructor() {

        const button: Block = new Button({
            btnText: 'Get users',
            btnType: 'submit',
            btnClass: 'delete-user-menu__btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const chatId = store.getState().currentChat.id;
                    ChatsController.getChatUsers(chatId);
                }
            }
        });

        const deleteUserButton: Block = new Button({
            btnText: 'Yes',
            btnType: 'button',
            btnClass: '',
            events: {
                click: () => {
                    const userToDelete = store.getState().userToDelete;
                    const chatId = store.getState().currentChat.id;
                    const data = {
                        users: [userToDelete.id],
                        chatId,
                    }
                    ChatsController.deleteUsers(data);
                }
            }
        });

        const cancelUserButton: Block = new Button({
            btnText: 'No',
            btnType: 'button',
            btnClass: 'btn--ghost',
            events: {
                click: () => {
                    store.setState('userToDelete', null);
                    openMenu('delete-user-menu');
                }
            }
        });


        super({
            button,
            deleteUserButton,
            cancelUserButton,
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
