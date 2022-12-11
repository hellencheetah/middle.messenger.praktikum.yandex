import * as Handlebars from 'handlebars';
import btnTemplate from './button.template';
import Block from '../../utils/block';

export default class Button extends Block {
    public template: string = btnTemplate;

    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(btnTemplate, { noEscape: true })(this.props);
    }
}
