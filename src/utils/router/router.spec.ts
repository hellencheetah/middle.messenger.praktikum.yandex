import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import router from './Router';

class TestBlock_1 {
   getContent() {
        const div = document.createElement('div');
        div.setAttribute('id', 'my-component-1');
        return div;
    }
    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}

class TestBlock_2 {
    getContent() {
        const div = document.createElement('div');
        div.setAttribute('id', 'my-component-2');
        return div;
    }
    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}

const dom = new JSDOM(`
            <div id="app"></div>`,
    {
        url: 'http://localhost:3000',
    });

(global as any).document = dom.window.document;
(global as any).window = dom.window;

describe('Router', () => {

    it('Check component', () => {
        router.use('/', TestBlock_1, {}).start();
        expect(document.getElementById('my-component-1')).not.to.be.null;
    });

    it('Check routing', () => {
        router
            .use('/1', TestBlock_1, {})
            .use('/2', TestBlock_2, {})
            .start();
        router.go('/2');
        console.log(window.history)
        // @ts-ignore
        expect(window.location.pathname).to.equal('/2');
    });

});
