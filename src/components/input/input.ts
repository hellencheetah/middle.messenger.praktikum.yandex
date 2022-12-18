import * as Handlebars from 'handlebars';
import template from './input.template';
import Block from '../../utils/block';

export class Input extends Block {
    constructor(props) {
        super({
            ...props,
        });
        console.log(props)
    }

    protected render(): string {
        return template;
    }
}
