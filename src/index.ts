import { renderDom } from "./utils/renderDom";
import LoginPage from "./pages/login/login";

document.addEventListener("DOMContentLoaded", () => {
    const authPage = new LoginPage();
    renderDom("#app", authPage);
});
