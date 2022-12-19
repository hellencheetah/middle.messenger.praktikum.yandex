import template from './textarea.template';
import Block from '../../utils/block';
import './textarea.scss';

export class Textarea extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}