import * as Handlebars from 'handlebars';
import template from './contact.template';
import Block from '../../utils/block';
import './contact.scss';

export class Contact extends Block {
    constructor(props) {

        super({
            ...props
        });
    }

    render(): string {
        return template;
    }
}
