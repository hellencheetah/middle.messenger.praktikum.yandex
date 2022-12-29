import template from './contact.template';
import Block, {Props} from '../../utils/block';
import './contact.scss';

export interface ContactProps {
    id?: string;
    name: string;
    events?: { click?: (e: Event) => void }
}

export class Contact extends Block {
    constructor(props: Props) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
