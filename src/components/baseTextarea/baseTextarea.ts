import template from './baseTextarea.template';
import Block from '../../utils/block';
import Textarea from "../textarea";
import './baseTextarea.scss';

export class BaseTextarea extends Block {
    constructor(props) {
        const textarea = new Textarea({
            textareaErrorId: props.textareaErrorId,
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
