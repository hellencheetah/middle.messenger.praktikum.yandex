import * as Handlebars from 'handlebars';
import template from './message.template';
import Block from '../../utils/block';
import './message.scss';

export class Message extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}
