import template from './edit-password.template';
import Block from '../../utils/block';
import './edit-password.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";

export class EditPassword extends Block {
    constructor() {

        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-password__btn',
            btnType: 'submit',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
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
                    blur: () => {
                        let error = '';
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = error;
                    },
                    focus: () => {
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = '';
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
                    blur: () => {
                        let error = '';
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = error;
                    },
                    focus: () => {
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = '';
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
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = error;
                    },
                    focus: () => {
                        const err = document.getElementById('oldPassword_error') as HTMLElement;
                        err.innerHTML = '';
                    }
                }
            }),
        ]
        super({form, button});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
