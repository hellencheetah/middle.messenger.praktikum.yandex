import * as Handlebars from 'handlebars';
import template from './baseInput.template';
import Block from '../../utils/block';
import './baseInput.scss';

export class BaseInput extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected render(): string {
        return template;
    }
}
