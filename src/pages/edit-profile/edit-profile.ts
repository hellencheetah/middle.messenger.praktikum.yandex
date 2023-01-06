import template from './edit-profile.template';
import Block from '../../utils/block';
import './edit-profile.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onBlur, onFocus} from "../../helpers/events";
import store, {StoreEvents} from "../../utils/store";
import UsersController from "../../controllers/usersController";



export class EditProfile extends Block {
    constructor() {
        const userFormStorage = localStorage.getItem('user');
        let user;
        if (userFormStorage) {
            user = JSON.parse(userFormStorage);
        }


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
                        UsersController.changeUserProfile(result);
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
                inputValue: user.email,
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
                inputValue: user.login,
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
                inputValue: user.first_name,
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
                inputValue: user.second_name,
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
                inputValue: user.display_name,
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
                inputValue: user.phone,
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

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
