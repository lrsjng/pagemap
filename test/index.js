const {test, assert} = require('scar');
const pagemap = require('../src/pagemap');

if (!global.window) {
    global.window = new (require('jsdom')).JSDOM().window;
}

test('access', () => {
    assert.equal(typeof pagemap, 'function');
});

test('no canvas throws', () => {
    assert.throws(() => pagemap(), /getContext/);
    assert.throws(() => pagemap(true), /getContext/);
    assert.throws(() => pagemap({}, {}), /getContext/);
});

// test('basic canvas', () => {
//     const canvas = global.window.document.createElement('canvas');
//     const res = pagemap(canvas);
//     assert.equal(typeof res, 'object');
// });

test.cli();
