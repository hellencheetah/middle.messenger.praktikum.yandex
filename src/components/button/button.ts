import * as Handlebars from 'handlebars';
import btnTemplate from './button.template';
import Block from '../../utils/block';

export default class Button extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(btnTemplate)(this.props);
    }
}
