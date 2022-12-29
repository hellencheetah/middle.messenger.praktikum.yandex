import template from './chats.template';
import Block from '../../utils/block';
import './chats.scss';
import Button from "../../components/button";
import Contact from "../../components/contact";
import Messages from "../../components/messages";
import ActiveContact from "../../components/activeContact";
import BaseTextarea from "../../components/baseTextarea";
import {validateFullForm, ValidateRuleType} from "../../utils/validations";
import {onFocus} from "../../helpers/events";

export class Chats extends Block {
    constructor() {

        const contacts: Block[] = [
            new Contact({
                id: '1',
                name: 'Ivan Ivanov',
                events: {
                    click: (e: Event) => {
                        console.log(e)
                    }
                }
            }),
            new Contact({
                id: '2',
                name: 'Petr Petrov',
                events: {
                    click: (e: Event) => {
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

        const baseTextarea: Block = new BaseTextarea({
            textareaErrorId: 'message_error',
            events: {
                blur: () => {
                    //onBlur(e, ValidateRuleType.Message);
                },
                focus: () => {
                    onFocus(ValidateRuleType.Message);
                }
            }
        })

        const button: Block = new Button({
            btnText: 'Send',
            btnType: 'submit',
            btnClass: 'chats__main-btn',
            events: {
                click: (e: Event) => {
                    e.preventDefault();
                    const result = validateFullForm('message-form');

                    if (result !== 'invalid') {
                        // api
                        console.log(result)
                    }
                }
            }
        });

        const messages: Block = new Messages({messagesData})

        // @ts-ignore
        const activeContact =  new ActiveContact({
            name: 'Ivan Ivanov',
        })

        super({ button, contacts, messages, baseTextarea, activeContact });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
