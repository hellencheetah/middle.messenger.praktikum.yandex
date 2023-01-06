const isEqual = (lhs: string, rhs: string) => lhs === rhs;

const render = (block: any) => {
    const root = document.querySelector("#app") as HTMLElement;
    root.innerHTML = '';
    root.appendChild(block.getContent());
    return root;
}

export interface IRoute {
    navigate(pathname: string): void;
    leave(): void;
    match(pathname: string): void;
    render(): void;
}

export default class Route {
    private _pathname: string;
    private _blockClass: any;
    private _block: any;
    private _props: any;

    constructor(pathname: string, view: string, props: any) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
            render(this._block);
            return;
        }
        this._block.show();
    }
}
