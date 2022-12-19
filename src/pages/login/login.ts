import template from './login.template';
import Block from '../../utils/block';
import { Button } from "../../components/button";
import {BaseInput} from "../../components/baseInput";
import "./login.scss";

export class Login extends Block {
    constructor(props) {

        const button = new Button({
            btnText: 'Sign in',
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
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'email',
                inputError: '',
                errorId: 'emailError',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'FUUU';
                        }
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
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
                inputError: '',
                errorId: 'passwordError',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'FUUU';
                        }
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
