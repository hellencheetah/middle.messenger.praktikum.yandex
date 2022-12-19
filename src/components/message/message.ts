import template from './message.template';
import Block from '../../utils/block';
import './message.scss';


export class Message extends Block {
    constructor(props) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

