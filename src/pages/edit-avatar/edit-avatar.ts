import template from './edit-avatar.template';
import Block from '../../utils/block';
import './edit-avatar.scss';
import Button from "../../components/button";
import store, {StoreEvents} from "../../utils/store";
import UsersController from "../../controllers/usersController";

export class EditAvatar extends Block {
    constructor() {

        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-avatar__btn',
            btnType: 'submit',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const permittedFileTypes = ['jpg', 'jpeg', 'png'];
                    const file = document.getElementById('avatar') as any;
                    if (!file) return;
                    const fileName = file.files[0].name.toLowerCase();
                    const isFileTypeOk = permittedFileTypes.some(type => fileName.endsWith(type));
                    if (!isFileTypeOk) return;
                    const formData = new FormData();
                    formData.append('avatar', file.files[0]);
                    UsersController.changeUserAvatar(formData);
                }
            }
        });

        super({ button });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
