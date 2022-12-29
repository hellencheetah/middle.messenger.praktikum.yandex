import template from './page5.template';
import Block from '../../utils/block';
import './page5.scss';

export class Page500 extends Block {

    render() {
        return this.compile(template, {});
    }
}
