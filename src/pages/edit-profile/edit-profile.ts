import template from './edit-profile.template';
import Block from '../../utils/block';
import './edit-profile.scss';


export class EditProfile extends Block {
    constructor(props) {

        super({
            ...props
        });
    }

    render(): string {
        return template;
    }
}
