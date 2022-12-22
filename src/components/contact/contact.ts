import template from './contact.template';
import Block from '../../utils/block';
import './contact.scss';

export interface ContactProps {
    id?: string;
    name: string;
    events?: { click?: (e: Event) => void }
}

export class Contact extends Block {
    constructor(props: ContactProps) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
