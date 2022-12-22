import template from './activeContact.template';
import Block from '../../utils/block';
import './activeContact.scss';

export interface ActiveContact {
    name: string;
}

export class ActiveContact extends Block {
    constructor({name, ...props}) {
        super({name, ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
