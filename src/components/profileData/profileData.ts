import template from './profileData.template';
import Block from '../../utils/block';
import './profileData.scss';
import store, {StoreEvents} from "../../utils/store";

export interface ProfileDataItem {
    field: string;
    value: string;
}

export interface ProfileDataProps {
   data: ProfileDataItem[];
}

export class ProfileData extends Block {
    constructor() {
        super()

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
