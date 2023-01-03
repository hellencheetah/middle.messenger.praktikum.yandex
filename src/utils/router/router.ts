import Route, {IRoute} from "./route";

export interface IRouter {
    use(pathname: string, block: any, props: any): IRouter;
    start(): void;
    go(pathname?: string): void;
    getCurrentRoute(): void;
    back(): void;
    back(): void;
    forward(): void;
    routes(): IRoute[];
}

export default class Router {
    history: History;
    routes: IRoute[];
    private _currentRoute: IRoute | null;
    static __instance: Router | null;

    constructor() {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        Router.__instance = this;
    }

    use(pathname: string, block: any, props: any) {
        const route = new Route(pathname, block, props);
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = ((event: any) => {
            this._onRoute(event.currentTarget.location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) { return; }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}
