# pagemap

[![license][license-img]][github] [![web][web-img]][web] [![github][github-img]][github] [![npm][npm-img]][npm]  
[![version][npm-v-img]][npm] [![downloads][npm-dm-img]][npm] [![build status][travis-img]][travis]

Mini map for web pages.


## Example usage

add a `canvas` tag to your HTML page:
```html
<canvas id='map'></canvas>
```

fix it's position on the screen:
```css
#map {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 100;
}
```

init and style the mini map:
```js
pagemap(document.querySelector('#map'), {
    viewport: null,
    styles: {
        'header,footer,section,article': rgba(0,0,0,0.08),
        'h1,a': rgba(0,0,0,0.10),
        'h2,h3,h4': rgba(0,0,0,0.08)
    },
    back: rgba(0,0,0,0.02),
    view: rgba(0,0,0,0.05),
    drag: rgba(0,0,0,0.10),
    interval: null
});
```


## License
The MIT License (MIT)

Copyright (c) 2020 Lars Jung (https://larsjung.de)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[web]: https://larsjung.de/pagemap/
[github]: https://github.com/lrsjng/pagemap
[npm]: https://www.npmjs.org/package/pagemap
[travis]: https://travis-ci.org/lrsjng/pagemap

[license-img]: https://img.shields.io/badge/license-MIT-a0a060.svg?style=flat-square
[web-img]: https://img.shields.io/badge/web-larsjung.de/pagemap-a0a060.svg?style=flat-square
[github-img]: https://img.shields.io/badge/github-lrsjng/pagemap-a0a060.svg?style=flat-square
[npm-img]: https://img.shields.io/badge/npm-pagemap-a0a060.svg?style=flat-square

[npm-v-img]: https://img.shields.io/npm/v/pagemap.svg?style=flat-square
[npm-dm-img]: https://img.shields.io/npm/dm/pagemap.svg?style=flat-square
[travis-img]: https://img.shields.io/travis/lrsjng/pagemap.svg?style=flat-square
