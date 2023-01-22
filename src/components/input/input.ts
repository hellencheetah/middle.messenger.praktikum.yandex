import template from './input.template';
import Block, {Props} from '../../utils/block';
import './input.scss';

export interface InputProps {
    inputName: string;
    inputPlaceholder: string;
    inputType: string;
    inputValue?: string|number;
    events?: {
        blur?: (e: Event) => void;
        focus?: (e: Event) => void;
    }
}

export class Input extends Block {
    constructor(props: Props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
