import template from './profileData.template';
import Block from '../../utils/block';
import './profileData.scss';

export interface ProfileDataItem {
    field: string;
    value: string;
}

export interface ProfileDataProps {
   data: ProfileDataItem[];
}

export class ProfileData extends Block {
    constructor(props: ProfileDataProps) {
        super({ ...props });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
