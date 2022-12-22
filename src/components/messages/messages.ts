import template from './messages.template';
import Block from '../../utils/block';
import './messages.scss';
import Message from "../message";
import {MessageProps} from "../message/message";

export interface MessagesProps {
    messagesData: MessageProps[];
}

export class Messages extends Block {
    constructor(props: MessagesProps) {
        const messages = props.messagesData.map(p => {
            return new Message(p);
        })

        super({ messages, ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
