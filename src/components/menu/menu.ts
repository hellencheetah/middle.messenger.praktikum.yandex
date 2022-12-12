import * as Handlebars from 'handlebars';
import menuTemplate from './menu.template';
import Block from '../../utils/block';

export default class Menu extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(menuTemplate)(this.props);
    }
}
