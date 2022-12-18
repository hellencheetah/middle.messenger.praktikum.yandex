import template from './profile.template';
import Block from '../../utils/block';
import './profile.scss';

export class Profile extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
