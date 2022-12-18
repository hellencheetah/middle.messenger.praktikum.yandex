import template from './login.template';
import Block from '../../utils/block';
import { Button } from "../../components/button";
import { Input } from "../../components/input/input";
import "./login.scss";
import Form from "../../components/form/form";
import {BaseInput} from "../../components/baseInput";

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
                inputName: 'login',
                inputError: '',
                events: {
                    blur: e => {
                        let error = ''
                        if (e.target.value.length < 4) {
                            error = 'FUUU';
                        }
                        const err = document.querySelector('.error')
                        err.innerHTML = error
                    },
                    focus: e => {
                        const err = document.querySelector('.error')
                        err.innerHTML = ''
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
            }),
        ]




        super({
            button,
            form,
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
