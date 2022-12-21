import template from './edit-profile.template';
import Block from '../../utils/block';
import './edit-profile.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateForm, validateFullForm, ValidateRuleType} from "../../utils/validations";


export class EditProfile extends Block {
    constructor(props) {
        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-profile__btn',
            btnType: 'submit',
            events: {
                click: e => {
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
                inputError: '',
                errorId: 'email_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Email, e.target.value);
                        const err = document.getElementById('email_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('email_error');
                        err.innerHTML = '';
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Login',
                inputLabel: 'Login',
                inputType: 'text',
                inputModifier: 'form-control--with-label',
                inputName: 'login',
                inputError: '',
                errorId: 'login_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Login, e.target.value);
                        const err = document.getElementById('login_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('login_error');
                        err.innerHTML = '';
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Firstname',
                inputLabel: 'Firstname',
                inputType: 'text',
                inputName: 'first_name',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'first_name_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Firstname, e.target.value);
                        const err = document.getElementById('first_name_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('first_name_error');
                        err.innerHTML = '';
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Lastname',
                inputLabel: 'Lastname',
                inputType: 'text',
                inputName: 'second_name',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'second_name_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Lastname, e.target.value);
                        const err = document.getElementById('second_name_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('second_name_error');
                        err.innerHTML = '';
                    }
                }
            }),
            // new BaseInput({
            //     inputPlaceholder: 'Nickname',
            //     inputLabel: 'Nickname',
            //     inputType: 'text',
            //     inputName: 'display_name',
            //     inputError: '',
            //     inputModifier: 'form-control--with-label',
            //     errorId: 'display_name_error',
            //     events: {
            //         blur: e => {
            //             let error = validateForm('', e.target.value);
            //             const err = document.getElementById('display_name_error');
            //             err.innerHTML = error;
            //         },
            //         focus: e => {
            //             const err = document.getElementById('display_name_error');
            //             err.innerHTML = '';
            //         }
            //     }
            // }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputLabel: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'phone_error',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Phone, e.target.value);
                        const err = document.getElementById('phone_error');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('phone_error');
                        err.innerHTML = '';
                    }
                }
            }),
        ]

        super({ form, button, ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
