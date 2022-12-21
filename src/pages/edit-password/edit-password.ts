import template from './edit-password.template';
import Block from '../../utils/block';
import './edit-password.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";

export class EditPassword extends Block {
    constructor(props) {

        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-password__btn',
            btnType: 'submit',
            events: {
                click: e => {
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
                inputError: '',
                errorId: 'oldPassword_error',
                events: {
                    blur: e => {
                        let error = ''
                        const err = document.getElementById('oldPassword_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('oldPassword_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'New password',
                inputLabel: 'New password',
                inputType: 'password',
                inputName: 'newPassword',
                inputModifier: 'form-control--with-label',
                inputError: '',
                errorId: 'newPassword_error',
                events: {
                    blur: e => {
                        let error = ''
                        const err = document.getElementById('newPassword_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('newPassword_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Confirm password',
                inputLabel: 'Confirm password',
                inputType: 'password',
                inputName: 'confirmPassword',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'confirmPassword_error',
                events: {
                    blur: e => {
                        let error = ''
                        const err = document.getElementById('confirmPassword_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('confirmPassword_error')
                        err.innerHTML = ''
                    }
                }
            }),
        ]
        super({form, button, ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
