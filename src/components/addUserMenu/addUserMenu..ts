import template from './addUserMenu..template';
import Block from '../../utils/block';
import './addUserMenu.scss';
import Button from "../button";
import BaseInput from "../baseInput";
import {getDataFromForm} from "../../utils/validations";
import UsersController from "../../controllers/usersController";
import store, {StoreEvents} from "../../utils/store";
import Services from "../../utils/services";
import {openMenu} from "../../utils/helpers";
import ChatsController from "../../controllers/chatsController";

export class AddUserMenu extends Block {
    constructor() {

        const input = new BaseInput({
            inputPlaceholder: 'User login',
            inputType: 'text',
            inputModifier: 'form-control--small',
            inputName: 'login',
            errorId: '',
            events: {}
        })

        const button: Block = new Button({
            btnText: 'Find',
            btnType: 'submit',
            btnClass: 'add-user-menu__btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = getDataFromForm('add-user-menu');
                    UsersController.findUserByLogin(result);

                }
            }
        });

        const addUserButton: Block = new Button({
            btnText: 'Yes',
            btnType: 'button',
            btnClass: '',
            events: {
                click: () => {
                    const userToAdd = store.getState().userToAdd;
                    const chatId = store.getState().currentChat.id;
                    const data = {
                        users: [userToAdd.id],
                        chatId,
                    }
                    ChatsController.addUsers(data);
                }
            }
        });

        const cancelUserButton: Block = new Button({
            btnText: 'No',
            btnType: 'button',
            btnClass: 'btn--ghost',
            events: {
                click: () => {
                    store.setState('userToAdd', null);
                    openMenu('add-user-menu');
                }
            }
        });


        super({
            button,
            input,
            addUserButton,
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
