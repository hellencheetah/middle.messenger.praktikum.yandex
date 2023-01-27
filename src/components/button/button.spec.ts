import { expect } from 'chai';
import {Button} from "./button";

describe('Component', () => {

    it('should render a button', () => {
        const button = new Button({ btnText: 'Open', btnType: 'button'});

        expect(button).not.to.be.null;
    });

    it('should render proper btnText', () => {
        const button = new Button({ btnText: 'Open', btnType: 'button'});
        const btnText = button.getContent()?.innerHTML.trim();

        expect(btnText).to.equal('Open');
    });
});
