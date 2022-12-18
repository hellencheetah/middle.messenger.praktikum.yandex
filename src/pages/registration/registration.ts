import * as Handlebars from 'handlebars';
import template from './registration.template';
import Block from '../../utils/block';
import './registration.scss';

export class Registration extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
