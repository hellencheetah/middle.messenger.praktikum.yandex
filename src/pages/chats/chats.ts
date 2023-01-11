import template from './chats.template';
import Block from '../../utils/block';
import './chats.scss';
import Button from "../../components/button";
import Messages from "../../components/messages";
import BaseTextarea from "../../components/baseTextarea";
import {getDataFromForm, validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onFocus} from "../../helpers/events";
import BaseInput from "../../components/baseInput";
import ChatsController from "../../controllers/chatsController";
import store, {StoreEvents} from "../../utils/store";
import Services from "../../utils/services";
import AddUserMenu from "../../components/addUserMenu";
import DeleteUserMenu from "../../components/deleteUserMenu";
import {findChatInStoreById, toggleMenu} from "../../utils/helpers";
import AuthController from "../../controllers/authController";


export class Chats extends Block {
    constructor() {
        ChatsController.getAllChats();
        AuthController.getUser();


        const inputNewChat = new BaseInput({
            inputPlaceholder: 'Title',
            inputType: 'text',
            inputName: 'title',
            errorId: 'title_error',
            events: {}
        })

        const buttonCreate = new Button({
            btnText: 'Create',
            btnType: 'submit',
            btnClass: 'chats-search__btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const form = getDataFromForm('add-chat-form');
                    ChatsController.createNewChat(form);
                }
            }
        });

        const baseTextarea: Block = new BaseTextarea({
            textareaErrorId: 'message_error',
            events: {
                blur: () => {
                    //onBlur(e, ValidateRuleType.Message);
                },
                focus: () => {
                    onFocus(ValidateRuleType.Message);
                }
            }
        })

        const button: Block = new Button({
            btnText: 'Send',
            btnType: 'submit',
            btnClass: 'chats__main-btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = validateFullForm('message-form');

                    if (result !== 'invalid') {
                        // api
                        const chat = store.getState().currentChat;
                        const chatId = chat.id;
                        const socket = findChatInStoreById(chatId);
                        socket.send({
                            type: 'message',
                            content: result.message,
                        })
                    }
                }
            }
        });

        const buttonDeleteChatMenu: Block = new Button({
            btnText: 'Delete chat',
            btnType: 'button',
            btnClass: 'active-contact__options-btn',
            events: {
                click: () => {
                    if (window.confirm('Do you really want to delete this chat?')) {
                        const chatId = store.getState().currentChat.id;
                        ChatsController.deleteChatById({ chatId });
                    }
                }
            }
        });

        const buttonAddUserMenu: Block = new Button({
            btnText: 'Add user',
            btnType: 'button',
            btnClass: 'active-contact__options-btn',
            events: {
                click: () => {
                    toggleMenu('add-user-menu');
                }
            }
        });

        const buttonDeleteUserMenu: Block = new Button({
            btnText: 'Delete user',
            btnType: 'button',
            btnClass: 'active-contact__options-btn',
            events: {
                click: () => {
                    toggleMenu('delete-user-menu');
                }
            }
        });


        const messagesData: any = [];
        const messages: Block = new Messages({messagesData})
        const addUserMenu: Block = new AddUserMenu();
        const deleteUserMenu: Block = new DeleteUserMenu();


        super({
            button,
            inputNewChat,
            buttonCreate,
            messages,
            baseTextarea,
            buttonDeleteChatMenu,
            buttonAddUserMenu,
            buttonDeleteUserMenu,
            addUserMenu,
            deleteUserMenu,
            events: {
                click: (e: Event) => Services.onClick(e),
            },
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
