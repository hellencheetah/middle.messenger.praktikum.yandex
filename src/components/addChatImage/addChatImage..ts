import template from './addChatImage..template';
import Block from '../../utils/block';
import './addChatImage.scss';
import Button from "../button";
import store, {StoreEvents} from "../../utils/store";
import Services from "../../utils/services";
import ChatsController from "../../controllers/chatsController";


export class AddChatImage extends Block {
    constructor() {

        const button: Block = new Button({
            btnText: 'Save',
            btnType: 'button',
            btnClass: 'add-user-menu__btn',
            events: {
                click: () => {
                    const err = document.getElementById('image-error') as HTMLElement;
                    err.innerHTML = '';
                    const permittedFileTypes = ['jpg', 'jpeg', 'png'];
                    const file = document.getElementById('chat-image') as any;
                    if (!file || !file.files.length) return;

                    const fileName = file.files[0].name.toLowerCase();
                    const isFileTypeOk = permittedFileTypes.some(type => fileName.endsWith(type));
                    if (!isFileTypeOk) {
                        err.innerHTML = 'Допустимы только файлы jpg, jpeg или png';
                        return;
                    }
                    const chatId = store.getState().currentChat.id;
                    const formData = new FormData();
                    formData.append('avatar', file.files[0]);
                    formData.append('chatId', chatId);
                    ChatsController.changeChatAvatar(formData);
                }
            }
        });

        super({
            button,
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
