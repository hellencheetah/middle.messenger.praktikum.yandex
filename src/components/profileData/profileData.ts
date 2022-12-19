import template from './profileData.template';
import Block from '../../utils/block';
import './profileData.scss';

export class ProfileData extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
