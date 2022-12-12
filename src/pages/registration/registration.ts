import * as Handlebars from 'handlebars';
import template from './registration.template';
import Block from '../../utils/block';

export default class Registration extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}
