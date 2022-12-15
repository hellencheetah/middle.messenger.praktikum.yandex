import * as Handlebars from 'handlebars';
import template from './login.template';
import Block from '../../utils/block';


import Button from "../../components/button/button";


export default class Login extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }


    render() {
        return this.compile(template, {...this.props});
    }
}
