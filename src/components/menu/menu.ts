import * as Handlebars from 'handlebars';
import template from './menu.template';
import Block from '../../utils/block';

export default class Menu extends Block {
    constructor(props) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props });
    }
}
