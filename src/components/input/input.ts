import * as Handlebars from 'handlebars';
import inputTemplate from './input.template';
import Block from '../../utils/block';

export default class Input extends Block {

    constructor(props) {
        super();
        this.props = props;
    }

    public render() {
        return Handlebars.compile(inputTemplate)(this.props);
    }
}
