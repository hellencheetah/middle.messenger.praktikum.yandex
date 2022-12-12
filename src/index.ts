import { renderDom } from "./utils/renderDom";
import Menu from "./components/menu/menu";

document.addEventListener("DOMContentLoaded", () => {
    const authPage = new Menu();
    renderDom("#app", authPage);
});
