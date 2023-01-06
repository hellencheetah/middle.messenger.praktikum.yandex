import './styles/main.scss';
import Login from "./pages/login";
import { Registration } from "./pages/registration/registration";
import { Chats } from "./pages/chats/chats";
import { Profile } from "./pages/profile/profile";
import { Page500 } from "./pages/page5/page5";
import { EditProfile } from "./pages/edit-profile/edit-profile";
import { EditPassword } from "./pages/edit-password/edit-password";
import { Page404 } from "./pages/page404/page404";
import router from "./utils/router/router";



document.addEventListener('DOMContentLoaded', async () => {
    router
        .use('/', Login, {})
        .use('/sign-up', Registration, {})
        .use('/messenger', Chats, {})
        .use('/settings', Profile, {})
        .use('/page500', Page500, {})
        .use('/edit-profile', EditProfile, {})
        .use('/edit-password', EditPassword, {})
        .use('*', Page404, {})
        .start()
});
