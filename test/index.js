if (!global.window) {
    global.window = new (require('jsdom')).JSDOM().window;
}

const {test, assert} = require('scar');
const pagemap = require('../src/pagemap');

test('access', () => {
    assert.equal(typeof pagemap, 'function');
});

test.cli();
