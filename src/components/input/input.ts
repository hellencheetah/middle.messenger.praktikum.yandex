import * as Handlebars from 'handlebars';
import template from './input.template';
import Block from '../../utils/block';

export default class Input extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
