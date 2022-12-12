import { renderDom } from "./utils/renderDom";
import Menu from "./components/menu/menu";

document.addEventListener("DOMContentLoaded", () => {
    const menu = new Menu({});
    renderDom("#app", menu);
});
