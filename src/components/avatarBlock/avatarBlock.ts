import template from './avatarBlock.template';
import Block from '../../utils/block';
import './avatarBlock.scss';
import store, {StoreEvents} from "../../utils/store";


export class AvatarBlock extends Block {
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
