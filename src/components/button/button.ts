import * as Handlebars from 'handlebars';
import template from './button.template';
import Block from '../../utils/block';
import './button.scss';

export class Button extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected render(): string {
        return template;
    }
}
