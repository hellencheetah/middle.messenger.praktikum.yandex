import template from './profile.template';
import Block from '../../utils/block';
import './profile.scss';
import ProfileData from "../../components/profileData";
import {Button} from "../../components/button";

export class Profile extends Block {
    constructor(props) {

        const data = [
            {
                field: 'Email',
                value: 'innovv@mail.ru',
            },
            {
                field: 'Login',
                value: 'ivvann',
            },
            {
                field: 'Firstname',
                value: 'Ivan',
            },
            {
                field: 'Lastname',
                value: 'Ivanov',
            },
            {
                field: 'Nickname',
                value: 'Ivvann',
            },
            {
                field: 'Phone',
                value: '+7 (909) 765 12 34',
            },
        ]

        const profileData = new ProfileData({ data })

        const button = new Button({
            btnText: 'Logout',
            btnClass: 'btn--link-like profile__options-btn',
            btnType: 'button',
            events: {
                click: e => {
                    console.log(e)
                }
            }
        })

        super({profileData, button, ...props});
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
