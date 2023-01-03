import './styles/main.scss';
import Router from "./utils/router/router";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Chats from "./pages/chats";
import Profile from "./pages/profile";
import Page5 from "./pages/page5";
import EditProfile from "./pages/edit-profile";
import EditPassword from "./pages/edit-password";
import Page404 from "./pages/page404";



document.addEventListener("DOMContentLoaded", async () => {
    const router = new Router();
    router
        .use("/", Login, {})
        .use("/sign-up", Registration, {})
        .use("/messenger", Chats, {})
        .use("/settings", Profile, {})
        .use("/page500", Page5, {})
        .use("/edit-profile", EditProfile, {})
        .use("/edit-password", EditPassword, {})
        .use("*", Page404, {})
        .start()
});
