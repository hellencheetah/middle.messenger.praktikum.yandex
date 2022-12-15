import * as Handlebars from 'handlebars';
import template from './button.template';
import Block from '../../utils/block';

export default class Button extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
