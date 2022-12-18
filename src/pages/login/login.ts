import template from './login.template';
import Block from '../../utils/block';
import "./login.scss";

export class Login extends Block {
    constructor(props) {

        super({
            ...props
        });
    }

    render(): string {
        return template;
    }
}
