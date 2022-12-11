import { EventBus } from "./event-bus";
import { v4 as uuidv4 } from 'uuid';

// Нельзя создавать экземпляр данного класса
class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    private _element: HTMLElement;
    private _meta = null;
    private _eventBus: EventBus;
    private id: any;
    protected props: any;


    constructor(tagName = "div", props = {}) {
        this.id = uuidv4();
        this._meta = {
            tagName, // полученный тэг при создании блока
            props  // пропсы
        };
        this.props = this._makePropsProxy(props);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        this._eventBus = new EventBus();
        this._registerEvents(this._eventBus);
        this._eventBus.emit(Block.EVENTS.INIT);
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps, newProps) {

    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = (nextProps) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _render() {
        const block = this.render();
        // @ts-ignore
        this._element.innerHTML = block;
    }

    // Переопределяется пользователем. Необходимо вернуть разметку
    render() {

    }

    getContent() {
        return this._element;
    }

    _makePropsProxy(props) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value: unknown) {
                target[prop] = value;
                self._eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}

export default Block;
