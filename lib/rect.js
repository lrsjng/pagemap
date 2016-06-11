const win = global.window;
const docEl = win.document.documentElement;

const Rect = module.exports = (x, y, w, h) => {
    return Object.assign(Object.create(Rect.prototype), {
        x, y, w, h
    });
};

Rect.prototype = {
    constructor: Rect,

    relativeTo(pos = {x: 0, y: 0}) {
        return Rect(this.x - pos.x, this.y - pos.y, this.w, this.h);
    }
};

Rect.ofDocument = () => {
    return Rect(0, 0, docEl.scrollWidth, docEl.scrollHeight);
};

Rect.ofWindow = () => {
    return Rect(
        win.pageXOffset,
        win.pageYOffset,
        docEl.clientWidth,
        docEl.clientHeight
    );
};

const getOffset = el => {
    const br = el.getBoundingClientRect();
    return {
        x: br.left + win.pageXOffset,
        y: br.top + win.pageYOffset
    };
};

Rect.ofElement = el => {
    const {x, y} = getOffset(el);
    return Rect(
        x,
        y,
        el.offsetWidth,
        el.offsetHeight
    );
};

Rect.ofViewport = el => {
    const {x, y} = getOffset(el);
    return Rect(
        x + el.clientLeft,
        y + el.clientTop,
        el.clientWidth,
        el.clientHeight
    );
};

Rect.ofContent = el => {
    const {x, y} = getOffset(el);
    return Rect(
        x + el.clientLeft - el.scrollLeft,
        y + el.clientTop - el.scrollTop,
        el.scrollWidth,
        el.scrollHeight
    );
};
