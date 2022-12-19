import template from './input.template';
import Block from '../../utils/block';
import './input.scss';

export class Input extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
