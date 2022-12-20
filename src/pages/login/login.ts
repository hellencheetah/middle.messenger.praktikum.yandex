import template from './login.template';
import Block from '../../utils/block';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import "./login.scss";
import {validateForm, validateFullForm, ValidateRuleType} from "../../utils/validations";

export class Login extends Block {
    constructor(props) {

        const button = new Button({
            btnText: 'Sign in',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: e => {
                    e.preventDefault();
                    const result = validateFullForm('login-form');

                    if (result !== 'invalid') {
                        // api
                    }
                }
            }
        });

        const form = [
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
