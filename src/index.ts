import { renderDom } from "./utils/renderDom";
import Menu from "./components/menu/menu";
import LoginPage from "./pages/login/login";
const menu = new Menu({});
const Login = new LoginPage({})

if (window.location.pathname === '/') {

    renderDom("#app", menu);
} else if (window.location.pathname === '/login') {

    renderDom("#app", Login);
}
