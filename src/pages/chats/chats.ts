import * as Handlebars from 'handlebars';
import template from './chats.template';
import Block from '../../utils/block';
import './chats.scss';
import {Button} from "../../components/button";
import {Contact} from "../../components/contact";
import {Messages} from "../../components/messages";
import Textarea from "../../components/textarea";
import ActiveContact from "../../components/activeContact";

export class Chats extends Block {
    constructor(props) {

        const button = new Button({
            btnText: 'Send',
            btnType: 'button',
            btnClass: 'chats__main-btn',
            events: {
                click: e => {
                    e.preventDefault();

                }
            }
        });

        const contacts = [
            new Contact({
                id: '1',
                name: 'Ivan Ivanov',
            }),
            new Contact({
                id: '2',
                name: 'Petr Petrov',
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
                text: 'Thnak you, how are you?',
                time: '12:20',
                my: false,
            }
        ]

        const textarea = new Textarea({})

        const messages = new Messages({messagesData})

        const activeContact =  new ActiveContact({
            name: 'Ivan Ivanov',
        })

        super({button, contacts, messages, textarea, activeContact,  ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
