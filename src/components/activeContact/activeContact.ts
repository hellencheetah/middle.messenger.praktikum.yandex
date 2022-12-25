import template from './activeContact.template';
import Block from '../../utils/block';
import './activeContact.scss';

export interface ActiveContact {
    name: string;
}

export class ActiveContact extends Block {
    constructor(props: ActiveContact) {
        super({...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
