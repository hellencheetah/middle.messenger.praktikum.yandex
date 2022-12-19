import template from './messages.template';
import Block from '../../utils/block';
import './messages.scss';
import Message from "../message";

export class Messages extends Block {
    constructor(props) {
        const messages = props.messagesData.map(p => {
            return new Message(p);
        })

        super({ messages, ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
