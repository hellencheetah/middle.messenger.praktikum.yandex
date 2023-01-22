import template from './login.template';
import Block from '../../utils/block';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import "./login.scss";
import {validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onBlur, onFocus} from "../../helpers/events";
import AuthController from "../../controllers/authController";
import store, {StoreEvents} from "../../utils/store";


export class Login extends Block {
    constructor() {

        const button: Block = new Button({
            btnText: 'Sign in',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = validateFullForm('login-form');

                    if (result !== 'invalid') {
                        // @ts-ignore
                        AuthController.login(result)
                    }
                }
            }
        });

        const form: Block[] = [
            new BaseInput({
                inputPlaceholder: 'Login',
                inputType: 'text',
                inputName: 'login',
                errorId: 'login_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Login);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.Login);
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
                    focus: () => {
                        onFocus(ValidateRuleType.Password);
                    }
                }
            }),
        ]


        super({ button, form });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
