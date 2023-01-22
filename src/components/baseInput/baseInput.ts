import template from './baseInput.template';
import Block, {Props} from '../../utils/block';
import './baseInput.scss';
import Input from "../input";

export interface BaseInputProps {
    inputName: string;
    inputPlaceholder: string;
    inputType: string;
    inputLabel?: string;
    inputModifier?: string;
    errorId: string;
    events?: {
        blur?: (e: Event) => void;
        focus?: (e: Event) => void;
    }
}

export class BaseInput extends Block {

    constructor(props: Props) {
        const input = new Input({
            inputName: props.inputName,
            inputPlaceholder: props.inputPlaceholder,
            inputType: props.inputType,
            inputValue: props.inputValue,
            events: props.events,
        })
        super({ input, ...props });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
