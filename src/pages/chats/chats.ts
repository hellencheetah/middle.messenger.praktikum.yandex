import * as Handlebars from 'handlebars';
import template from './chats.template';
import Block from '../../utils/block';

export default class Chats extends Block {
    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(template)(this.props);
    }
}
