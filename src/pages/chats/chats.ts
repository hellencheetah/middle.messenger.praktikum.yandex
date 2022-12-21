import * as Handlebars from 'handlebars';
import template from './chats.template';
import Block from '../../utils/block';
import './chats.scss';
import Button from "../../components/button";
import Contact from "../../components/contact";
import Messages from "../../components/messages";
import ActiveContact from "../../components/activeContact";
import BaseTextarea from "../../components/baseTextarea";
import {validateForm, validateFullForm, ValidateRuleType} from "../../utils/validations";

export class Chats extends Block {
    constructor(props) {

        const contacts = [
            new Contact({
                id: '1',
                name: 'Ivan Ivanov',
                events: {
                    click: e => {
                        console.log(e)
                    }
                }
            }),
            new Contact({
                id: '2',
                name: 'Petr Petrov',
                events: {
                    click: e => {
                        console.log(e)
                    }
                }
            }),
        ]

        const messagesData = [
            {
                id: '1',
                text: 'Great!',
                time: '12.10',
                my: true,
            },
            {
                id: '2',
                text: 'Thank you, how are you?',
                time: '12:20',
                my: false,
            }
        ]

        const baseTextarea = new BaseTextarea({
            textareaErrorId: 'message_error',
            events: {
                blur: e => {
                    const error = validateForm(ValidateRuleType.Message, e.target.value);
                    const err = document.getElementById('message_error');
                    err.innerHTML = error;
                },
                focus: e => {
                    const err = document.getElementById('message_error');
                    err.innerHTML = '';
                }
            }
        })

        const button = new Button({
            btnText: 'Send',
            btnType: 'submit',
            btnClass: 'chats__main-btn',
            events: {
                click: e => {
                    e.preventDefault();
                    const result = validateFullForm('message-form');

                    if (result !== 'invalid') {
                        // api
                        console.log(result)
                    }
                }
            }
        });

        const messages = new Messages({messagesData})

        const activeContact =  new ActiveContact({
            name: 'Ivan Ivanov',
        })

        super({button, contacts, messages, baseTextarea, activeContact,  ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
