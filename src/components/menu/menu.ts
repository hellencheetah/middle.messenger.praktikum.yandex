import * as Handlebars from 'handlebars';
import template from './menu.template';
import Block from '../../utils/block';

export class Menu extends Block {

    protected render(): string {
        return template;
    }
}
