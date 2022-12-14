import template from './baseTextarea.template';
import Block, {Props} from '../../utils/block';
import Textarea from "../textarea";
import './baseTextarea.scss';

export interface BasetextareaProps {
    textareaErrorId: string;
    events: any;
}
export class BaseTextarea extends Block {
    constructor(props: Props) {
        const textarea = new Textarea({
            events: props.events,
        })
        super({
            textarea,
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
