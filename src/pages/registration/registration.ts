import template from './registration.template';
import Block from '../../utils/block';
import './registration.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onBlur, onFocus} from "../../helpers/events";
import AuthController from "../../controllers/authController";
import store, {StoreEvents} from "../../utils/store";

export class Registration extends Block {
    constructor() {
        const button = new Button({
            btnText: 'Sign up',
            btnType: 'submit',
            btnClass: '',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = validateFullForm('registration-form');
                    if (result !== 'invalid') {
                        // @ts-ignore
                        AuthController.register(result);
                    }
                }
            }
        });

        const form = [
            new BaseInput({
                inputPlaceholder: 'Firstname',
                inputType: 'text',
                inputName: 'first_name',
                errorId: 'first_name_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Firstname);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.Firstname);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Lastname',
                inputType: 'text',
                inputName: 'second_name',
                errorId: 'second_name_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Lastname);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.Lastname);
                    }
                }
            }),
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
                inputPlaceholder: 'Email',
                inputType: 'text',
                inputName: 'email',
                errorId: 'email_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Email);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.Email);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                errorId: 'phone_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.Phone);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.Phone);
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
