import template from './registration.template';
import Block from '../../utils/block';
import './registration.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateForm, validateFullForm, ValidateRuleType} from "../../utils/validations";

export class Registration extends Block {
    constructor(props) {
        const button = new Button({
            btnText: 'Sign up',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: e => {
                    e.preventDefault();
                    const result = validateFullForm('registration-form');
                    if (result !== 'invalid') {
                        // api
                        console.log(result)
                    }
                }
            }
        });

        const form = [
            new BaseInput({
                inputPlaceholder: 'Firstname',
                inputType: 'text',
                inputName: 'first_name',
                inputError: '',
                errorId: 'first_name_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Firstname, e.target.value);
                        const err = document.getElementById('first_name_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('first_name_error');
                        err.innerHTML = '';
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Lastname',
                inputType: 'text',
                inputName: 'second_name',
                inputError: '',
                errorId: 'second_name_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Lastname, e.target.value);
                        const err = document.getElementById('second_name_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('second_name_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Login',
                inputType: 'text',
                inputName: 'login',
                inputError: '',
                errorId: 'login_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Login, e.target.value);
                        const err = document.getElementById('login_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('login_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'email',
                inputError: '',
                errorId: 'email_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Email, e.target.value);
                        const err = document.getElementById('email_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('email_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                inputError: '',
                errorId: 'phone_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Phone, e.target.value);
                        const err = document.getElementById('phone_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('phone_error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
                inputError: '',
                errorId: 'password_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Password, e.target.value);
                        const err = document.getElementById('password_error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('password_error')
                        err.innerHTML = ''
                    }
                }
            }),
        ]

        super({ button, form, ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
