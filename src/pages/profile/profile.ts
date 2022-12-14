import template from './profile.template';
import Block from '../../utils/block';
import ProfileData from "../../components/profileData";
import Button from "../../components/button";
import './profile.scss';

export class Profile extends Block {
    constructor() {

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
                click: (e: Event) => {
                    console.log(e)
                }
            }
        })

        super({profileData, button });
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
