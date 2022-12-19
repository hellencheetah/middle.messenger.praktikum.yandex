import template from './page5.template';
import Block from '../../utils/block';
import './page5.scss';

export class Page500 extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
