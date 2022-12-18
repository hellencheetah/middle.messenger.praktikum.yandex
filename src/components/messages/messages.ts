import * as Handlebars from 'handlebars';
import template from './messages.template';
import Block from '../../utils/block';
import './messages.scss';

export class Messages extends Block {
    constructor(props) {

        super({
            ...props
        });
    }

    render(): string {
        return template;
    }
}
