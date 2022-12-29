import template from './button.template';
import Block, {Props} from '../../utils/block';
import './button.scss';

export interface ButtonProps {
    btnText: string;
    btnType: string;
    btnClass?: string;
    events?: { click?: (e: Event) => void }
}

export class Button extends Block {
    constructor(props: Props) {
        super({...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
