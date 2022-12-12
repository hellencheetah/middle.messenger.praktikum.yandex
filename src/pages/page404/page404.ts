import * as Handlebars from 'handlebars';
import template from './page404.template';
import Block from '../../utils/block';

export default class Page404 extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}
