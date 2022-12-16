import * as Handlebars from 'handlebars';
import template from './messages.template';
import Block from '../../utils/block';
import './messages.scss';

export class Messages extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}
