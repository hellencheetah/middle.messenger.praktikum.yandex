import * as Handlebars from 'handlebars';
import template from './chats.template';
import Block from '../../utils/block';
import './chats.scss';

export class Chats extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
