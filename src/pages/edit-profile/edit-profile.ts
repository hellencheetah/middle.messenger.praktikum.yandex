import template from './edit-profile.template';
import Block from '../../utils/block';
import './edit-profile.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onBlur, onFocus} from "../../helpers/events";



export class EditProfile extends Block {
    constructor() {

        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-profile__btn',
            btnType: 'submit',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    e.preventDefault();
                    const result = validateFullForm('edit-profile-form');
                    if (result !== 'invalid') {
                        // api
                        console.log(result)
                    }
                }
            }
        });

        const form = [
            new BaseInput({
                inputPlaceholder: 'Email',
                inputLabel: 'Email',
                inputType: 'text',
                inputName: 'email',
                inputModifier: 'form-control--with-label',
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
                inputPlaceholder: 'Login',
                inputLabel: 'Login',
                inputType: 'text',
                inputModifier: 'form-control--with-label',
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
                inputPlaceholder: 'Firstname',
                inputLabel: 'Firstname',
                inputType: 'text',
                inputName: 'first_name',
                inputModifier: 'form-control--with-label',
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
                inputLabel: 'Lastname',
                inputType: 'text',
                inputName: 'second_name',
                inputModifier: 'form-control--with-label',
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
                inputPlaceholder: 'Nickname',
                inputLabel: 'Nickname',
                inputType: 'text',
                inputName: 'display_name',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'display_name_error',
                events: {
                    blur: (e: FocusEvent) => {
                        onBlur(e, ValidateRuleType.DisplayName);
                    },
                    focus: () => {
                        onFocus(ValidateRuleType.DisplayName);
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputLabel: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                inputModifier: 'form-control--with-label',
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
        ]

        super({ form, button });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
