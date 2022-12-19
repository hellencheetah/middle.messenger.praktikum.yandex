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
                errorId: 'oldPasswordError',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'error';
                        }
                        const err = document.getElementById('oldPasswordError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('oldPasswordError')
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
                errorId: 'newPasswordError',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'error';
                        }
                        const err = document.getElementById('newPasswordError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('newPasswordError')
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
                errorId: 'confirmPasswordError',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'error';
                        }
                        const err = document.getElementById('confirmPasswordError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('confirmPasswordError')
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
