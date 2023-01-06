import template from './edit-password.template';
import Block from '../../utils/block';
import './edit-password.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {onBlur, onFocus} from "../../helpers/events";
import {getDataFromForm, validateFullForm, ValidateRuleType} from "../../utils/validations";
import UsersController from "../../controllers/usersController";
import store, {StoreEvents} from "../../utils/store";

export class EditPassword extends Block {
    constructor() {

        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-password__btn',
            btnType: 'submit',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = validateFullForm('edit-password-form');

                    if (result !== 'invalid') {
                        const data = {
                            oldPassword: result.oldPassword,
                            newPassword: result.newPassword,
                        }
                        UsersController.changeUserPassword(data);
                    }
                }
            }
        });

        const form = [
            new BaseInput({
                inputPlaceholder: 'Old password',
                inputLabel: 'Old password',
                inputType: 'password',
                inputModifier: 'form-control--with-label',
                inputName: 'oldPassword',
                errorId: 'oldPassword_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.OldPassword);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.OldPassword);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'New password',
                inputLabel: 'New password',
                inputType: 'password',
                inputName: 'newPassword',
                inputModifier: 'form-control--with-label',
                errorId: 'newPassword_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.NewPassword);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.NewPassword);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Confirm password',
                inputLabel: 'Confirm password',
                inputType: 'password',
                inputName: 'confirmPassword',
                inputModifier: 'form-control--with-label',
                errorId: 'confirmPassword_error',
                events: {
                    blur: () => {
                        let error = '';
                        const err = document.getElementById('confirmPassword_error') as HTMLElement;
                        const form = getDataFromForm('edit-password-form');
                        if (form.newPassword !== form.confirmPassword) {
                            error = 'Пароли не совпадают'
                        }
                        err.innerHTML = error;
                    },
                    focus: () => {
                        const err = document.getElementById('confirmPassword_error') as HTMLElement;
                        err.innerHTML = '';
                    }
                }
            }),
        ]
        super({form, button});

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
