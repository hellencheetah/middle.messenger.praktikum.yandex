import template from './edit-profile.template';
import Block from '../../utils/block';
import './edit-profile.scss';
import Button from "../../components/button";
import BaseInput from "../../components/baseInput";
import {validateForm, ValidateRuleType} from "../../utils/validations";


export class EditProfile extends Block {
    constructor(props) {
        const button = new Button({
            btnText: 'Save',
            btnClass: 'edit-profile__btn',
            btnType: 'submit',
            events: {
                click: e => {
                    e.preventDefault();

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
                errorId: 'emailError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Email, e.target.value);
                        const err = document.getElementById('emailError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('emailError');
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
                errorId: 'loginError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Login, e.target.value);
                        const err = document.getElementById('loginError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('loginError');
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
                errorId: 'firstnameError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Firstname, e.target.value);
                        const err = document.getElementById('firstnameError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('firstnameError');
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
                errorId: 'lastnameError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Lastname, e.target.value);
                        const err = document.getElementById('lastnameError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('lastnameError');
                        err.innerHTML = '';
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
                errorId: 'nicknameError',
                events: {
                    blur: e => {
                        let error = validateForm('', e.target.value);
                        const err = document.getElementById('nicknameError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('nicknameError');
                        err.innerHTML = '';
                    }
                }
            }),
            new BaseInput({
                inputPlaceholder: 'Phone',
                inputLabel: 'Phone',
                inputType: 'text',
                inputName: 'phone',
                inputError: '',
                inputModifier: 'form-control--with-label',
                errorId: 'phoneError',
                events: {
                    blur: e => {
                        let error = validateForm(ValidateRuleType.Phone, e.target.value);
                        const err = document.getElementById('phoneError');
                        err.innerHTML = error;
                    },
                    focus: e => {
                        const err = document.getElementById('phoneError');
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
