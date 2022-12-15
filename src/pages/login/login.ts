import template from './login.template';
import Block from '../../utils/block';
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import Form from "../../components/form/form";

const formData = [
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
]

export default class Login extends Block {
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

        const inputEmail = new Input({
            inputPlaceholder: 'Email',
            inputType: 'text',
            inputName: 'login',
            required: true,
        });

        const inputPassword = new Input({
            inputPlaceholder: 'Password',
            inputType: 'password',
            inputName: 'password',
            required: true,
        });


        super({
            button,
            inputEmail,
            inputPassword,
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
