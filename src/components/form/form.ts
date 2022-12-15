import * as Handlebars from 'handlebars';
import template from './form.template';
import Block from '../../utils/block';

export default class Form extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected initChildrenComponents() {

    }


    render() {
        return this.compile(template, {...this.props});
    }
}
