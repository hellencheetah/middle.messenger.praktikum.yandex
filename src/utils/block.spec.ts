import { expect } from 'chai';
import Block, {Props} from './block';

const template = `
<div>{{text}}</div>
`;

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
    const text = block.getContent()?.innerHTML;

    it('should render new block', () => {
        expect(text).to.equal('Hello');
    });
});
