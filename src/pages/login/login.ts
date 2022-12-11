// @ts-ignore
import Handlebars from 'handlebars';
import tmpl from './login.template';
import Block from '../../utils/block';

export default class LoginPage extends Block {
    public template: string = tmpl;

    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(tmpl, { noEscape: true })(this.props);
    }
}


