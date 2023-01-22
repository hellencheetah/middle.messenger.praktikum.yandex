import template from './messages.template';
import Block, {Props} from '../../utils/block';
import './messages.scss';
import Message from "../message";
import {MessageProps} from "../message/message";
import store, {StoreEvents} from "../../utils/store";

export interface MessagesProps {
    messagesData: MessageProps[];
}

export class Messages extends Block {
    constructor(props: Props) {

        super({ ...props });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }

}
