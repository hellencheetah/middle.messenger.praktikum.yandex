import template from './menu.template';
import Block from '../../utils/block';

export class Menu extends Block {

    render() {
        return this.compile(template, {});
    }
}
