import * as Handlebars from 'handlebars';
import template from './page5.template';
import Block from '../../utils/block';
import './page5.scss';

export class Page500 extends Block {

    render(): string {
        return template;
    }
}
