import { expect } from 'chai';
import Block, {Props} from './block';
import {JSDOM} from "jsdom";

const template = `
<div>{{text}}</div>
`;

const dom = new JSDOM(`
            <div id="app"></div>`,
    {
        url: 'http://localhost:3000',
    });

(global as any).document = dom.window.document;

class NewBlock extends Block {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}

describe('Block', () => {
    const props = { text: 'Hello' };
    const block = new NewBlock(props);
    const text = block.getContent()?.innerHTML

    it('must render new block', () => {
        expect(text).to.equal('Hello');
    });
});
