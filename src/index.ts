import './styles/main.scss';
import { renderDom } from "./utils/renderDom";
import { Menu } from "./components/menu";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { Chats } from "./pages/chats";
import { Page500 } from "./pages/page5";
import { Page404 } from "./pages/page404";
import { Profile } from "./pages/profile";
import { EditProfile } from './pages/edit-profile';
import { EditPassword } from "./pages/edit-password";
const Main = new Menu({});
const LoginPage = new Login({});
const RegistrationPage = new Registration({});
const ChatsPage = new Chats({});
const Page5 = new Page500({});
const Page4 = new Page404({});
const ProfilePage = new Profile({});
const EditPasswordPage = new EditPassword({});
const EditProfilePage = new EditProfile({});


if (window.location.pathname === '/') {
    renderDom("#app", Main);
} else if (window.location.pathname === '/login') {
    renderDom("#app", LoginPage);
} else if (window.location.pathname === '/registration') {
    renderDom("#app", RegistrationPage);
} else if (window.location.pathname === '/chats') {
    renderDom("#app", ChatsPage);
} else if (window.location.pathname === '/page5') {
    renderDom("#app", Page5);
} else if (window.location.pathname === '/page404') {
    renderDom("#app", Page4);
} else if (window.location.pathname === '/profile') {
    renderDom("#app", ProfilePage);
} else if (window.location.pathname === '/edit-password') {
    renderDom("#app", EditPasswordPage);
} else if (window.location.pathname === '/edit-profile') {
    renderDom("#app", EditProfilePage);
}
