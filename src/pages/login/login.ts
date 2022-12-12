import * as Handlebars from 'handlebars';
import template from './login.template';
import Block from '../../utils/block';

export default class Login extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}


