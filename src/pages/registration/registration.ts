import template from './registration.template';
import Block from '../../utils/block';
import './registration.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateForm, ValidateRuleType} from "../../utils/validations";

export class Registration extends Block {
    constructor(props) {
        const button = new Button({
            btnText: 'Sign up',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: e => {
                    e.preventDefault();

                }
            }
        });

        const form = [
            new BaseInput({
                inputPlaceholder: 'Firstname',
                inputType: 'text',
                inputName: 'first_name',
                inputError: '',
                errorId: 'firstnameError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Firstname, e.target.value);
                        const err = document.getElementById('firstnameError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('firstnameError')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Lastname',
                inputType: 'text',
                inputName: 'last_name',
                inputError: '',
                errorId: 'lastnameError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Lastname, e.target.value);
                        const err = document.getElementById('lastnameError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('lastnameError')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Login',
                inputType: 'text',
                inputName: 'login',
                inputError: '',
                errorId: 'loginError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Login, e.target.value);
                        const err = document.getElementById('loginError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('loginError')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'email',
                inputError: '',
                errorId: 'emailError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Email, e.target.value);
                        const err = document.getElementById('emailError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('emailError')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                inputError: '',
                errorId: 'phoneError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Phone, e.target.value);
                        const err = document.getElementById('phoneError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('phoneError')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
                inputError: '',
                errorId: 'passwordError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Password, e.target.value);
                        const err = document.getElementById('passwordError')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.getElementById('passwordError')
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
