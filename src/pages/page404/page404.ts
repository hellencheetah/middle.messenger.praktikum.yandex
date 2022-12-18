import * as Handlebars from 'handlebars';
import template from './page404.template';
import Block from '../../utils/block';
import './page404.scss';

export class Page404 extends Block {

    render(): string {
        return template;
    }
}
