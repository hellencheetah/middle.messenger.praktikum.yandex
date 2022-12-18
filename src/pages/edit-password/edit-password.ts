import template from './edit-password.template';
import Block from '../../utils/block';
import './edit-password.scss';


export class EditPassword extends Block {
    constructor(props) {

        super({
            ...props
        });
    }

    render(): string {
        return template;
    }
}
