const { JSDOM } = require('jsdom');

const dom = new JSDOM(`
            <div id="app"></div>`,
    {
        url: 'http://localhost:3000',
    });
global.window = {
    history: {
        pushState: () => true
    }
};
global.document = dom.window.document;
require.extensions['.scss'] = function (m) {
    m.exports = {};
}
