import * as Handlebars from 'handlebars';
import template from './page404.template';
import Block from '../../utils/block';
import './page404.scss';

export class Page404 extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
