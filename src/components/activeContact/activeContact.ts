import template from './activeContact.template';
import Block from '../../utils/block';
import './activeContact.scss';

export class ActiveContact extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
