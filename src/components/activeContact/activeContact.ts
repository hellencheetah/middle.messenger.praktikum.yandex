import template from './activeContact.template';
import Block, {Props} from '../../utils/block';
import './activeContact.scss';

export class ActiveContact extends Block {
    constructor(props: Props) {
        super({...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
