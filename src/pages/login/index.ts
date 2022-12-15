import Button from '../../components/button/button';
import Login from './login';
import Input from "../../components/input/input";
import {initForm} from "./utils";
import {renderDom} from "../../utils/renderDom";

const buttonOpts = {
    btnText: 'Sign in',
    btnType: 'submit',
    btnClass: '',
}

const formData = [
    {
        inputPlaceholder: 'Email',
        inputType: 'text',
        inputName: 'login',
    },
    {
        inputPlaceholder: 'Password',
        inputType: 'password',
        inputName: 'password',
    }
]

const form = formData
    .map(p => {
        return new Input(p).render();
    })
    .join('')


const button = new Button(buttonOpts).render();

const loginBlock = new Login({});


renderDom("#app", loginBlock);


