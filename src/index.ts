import './styles/main.scss';
import { renderDom } from "./utils/renderDom";
import Menu  from "./components/menu";
const Main = new Menu({});

document.addEventListener("DOMContentLoaded", () => {
    renderDom("#app", Main);
});

// if (window.location.pathname === '/') {
//     renderDom("#app", Main);
// } else if (window.location.pathname === '/login') {
//     renderDom("#app", LoginPage);
// } else if (window.location.pathname === '/registration') {
//     renderDom("#app", RegistrationPage);
// } else if (window.location.pathname === '/chats') {
//     renderDom("#app", ChatsPage);
// } else if (window.location.pathname === '/page5') {
//     renderDom("#app", Page5);
// } else if (window.location.pathname === '/page404') {
//     renderDom("#app", Page4);
// } else if (window.location.pathname === '/profile') {
//     renderDom("#app", ProfilePage);
// } else if (window.location.pathname === '/edit-password') {
//     renderDom("#app", EditPasswordPage);
// } else if (window.location.pathname === '/edit-profile') {
//     renderDom("#app", EditProfilePage);
// }
