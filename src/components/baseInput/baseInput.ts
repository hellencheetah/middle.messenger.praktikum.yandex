import * as Handlebars from 'handlebars';
import template from './baseInput.template';
import Block from '../../utils/block';
import './baseInput.scss';
import {Input} from "../input";

export class BaseInput extends Block {


    constructor(props) {
        const input = new Input({
            inputName: props.inputName,
            inputPlaceholder: props.inputPlaceholder,
            inputType: props.inputType,
            events: props.events,
        })
        super({
            input,
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
