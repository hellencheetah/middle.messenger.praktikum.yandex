import template from './message.template';
import Block, {Props} from '../../utils/block';
import './message.scss';

export interface MessageProps {
    id?: string;
    time: string;
    my: boolean;
    text: string;
    events?: { click?: (e: Event) => void };
}

export class Message extends Block {
    constructor(props: Props) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

