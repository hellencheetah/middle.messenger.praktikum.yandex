import template from './login.template';
import Block from '../../utils/block';
import { Button } from "../../components/button";
import { Input } from "../../components/input/input";
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
                    console.log(e)
                }
            }
        });

        const form = [
            new Input({
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'login',
            }),
            new Input({
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
            }),
        ].map(p => p.getInnerHtml())


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
