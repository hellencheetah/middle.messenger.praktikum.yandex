import template from './login.template';
import Block from '../../utils/block';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import "./login.scss";
import {validateForm, validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onBlur, onFocus} from "../../helpers/events";

export class Login extends Block {
    constructor(props) {

        const button: Block = new Button({
            btnText: 'Sign in',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: e => {
                    e.preventDefault();
                    const result = validateFullForm('login-form');

                    if (result !== 'invalid') {
                        // api
                        console.log(result)
                    }
                }
            }
        });

        const form: Block[] = [
            new BaseInput({
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'email',
                errorId: 'email_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Email);
                    },
                    focus: (e: FocusEvent) => {
                        onFocus(ValidateRuleType.Email);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Password',
                inputType: 'password',
                inputName: 'password',
                errorId: 'password_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Password);
                    },
                    focus: (e: FocusEvent) => {
                        onFocus(ValidateRuleType.Password);
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
