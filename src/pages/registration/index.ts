import Button from '../../components/button/button';
import Registration from './registration';
import Input from "../../components/input/input";

const buttonOpts = {
    btnText: 'Sign up',
    btnType: 'submit',
    btnClass: '',
}

const formData = [
    {
        inputPlaceholder: 'Firstname',
        inputType: 'text',
        inputName: 'first_name',
    },
    {
        inputPlaceholder: 'Lastname',
        inputType: 'text',
        inputName: 'second_name',
    },
    {
        inputPlaceholder: 'Login',
        inputType: 'text',
        inputName: 'login',
    },
    {
        inputPlaceholder: 'Email',
        inputType: 'text',
        inputName: 'email',
    },
    {
        inputPlaceholder: 'Password',
        inputType: 'text',
        inputName: 'password',
    },
    {
        inputPlaceholder: 'Phone',
        inputType: 'text',
        inputName: 'phone',
    },
]

const form = formData
    .map(p => {
        return new Input(p).render();
    })
    .join('')
const button = new Button(buttonOpts).render();

const registrationBlock = new Registration({button, form}).render();

document.querySelector('#app').innerHTML = registrationBlock;
