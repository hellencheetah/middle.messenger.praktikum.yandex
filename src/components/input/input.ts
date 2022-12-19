import template from './input.template';
import Block from '../../utils/block';
import './input.scss';

export interface InputProps {
    inputType: string;
    inputPlaceholder: string;
    inputName: string;
    inputLabel?: string;
}


export class Input extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
