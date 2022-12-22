import template from './textarea.template';
import Block from '../../utils/block';

export interface TextareaProps {
    events?: {
        blur?: (e: Event) => void;
        focus?: (e: Event) => void;
    }
}

export class Textarea extends Block {
    constructor(props: TextareaProps) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
