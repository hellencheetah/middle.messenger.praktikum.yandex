import Block from "./block";

export function renderDom(query: string, component: Block){

    const root = document.querySelector(query) as HTMLElement;

    root.innerHTML = '';

    root.append(component.getContent()!)
}
