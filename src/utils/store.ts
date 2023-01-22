import { EventBus } from './event-bus';
import {Props} from "./block";
import {set} from "./helpers";

export enum StoreEvents {
    Updated = 'updated',
}

class Store extends EventBus {

    private state: Props = {};

    public getState() {
        return this.state;
    }

    public setState(path: string, value: unknown) {
        set(this.state, path, value);

        this.emit(StoreEvents.Updated);
    }

    public clearStore(): void {
        this.state = {};
    }
}

export default new Store();
