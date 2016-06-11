const Rect = require('./rect');

const win = global.window;
const doc = win.document;
const body = doc.querySelector('body');

const black = pc => `rgba(0,0,0,${pc / 100})`;
const defaults = {
    viewport: null,
    styles: {
        'header,footer,section,article': black(8),
        'h1,a': black(10),
        'h2,h3,h4': black(8)
    },
    back: black(2),
    view: black(5),
    drag: black(10),
    interval: null
};

const _listener = (el, method, types, fn) => types.split(/\s+/).forEach(type => el[method](type, fn));
const on = (el, types, fn) => _listener(el, 'addEventListener', types, fn);
const off = (el, types, fn) => _listener(el, 'removeEventListener', types, fn);

module.exports = (canvas, options) => {
    const settings = Object.assign({}, defaults, options);

    const context = canvas.getContext('2d');

    const calcScale = (() => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        return (w, h) => Math.min(width / w, height / h);
    })();

    const resizeCanvas = (w, h) => {
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
    };

    const viewport = settings.viewport;
    const find = sel => Array.from((viewport || doc).querySelectorAll(sel));

    let drag = false;

    let rootRect;
    let viewRect;
    let scale;
    let dragRx;
    let dragRy;

    const drawRect = (rect, col) => {
        if (!col) {
            return;
        }
        context.beginPath();
        context.rect(rect.x, rect.y, rect.w, rect.h);
        context.fillStyle = col;
        context.fill();
    };

    const applyStyles = styles => {
        Object.keys(styles).forEach(sel => {
            const col = styles[sel];
            find(sel).forEach(el => {
                drawRect(Rect.ofElement(el).relativeTo(rootRect), col);
            });
        });
    };

    const draw = () => {
        rootRect = viewport ? Rect.ofContent(viewport) : Rect.ofDocument();
        viewRect = viewport ? Rect.ofViewport(viewport) : Rect.ofWindow();
        scale = calcScale(rootRect.w, rootRect.h);

        resizeCanvas(rootRect.w * scale, rootRect.h * scale);

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.scale(scale, scale);

        drawRect(rootRect.relativeTo(rootRect), settings.back);
        applyStyles(settings.styles);
        drawRect(viewRect.relativeTo(rootRect), drag ? settings.drag : settings.view);
    };

    const onDrag = ev => {
        ev.preventDefault();
        const cr = Rect.ofViewport(canvas);
        const x = (ev.pageX - cr.x) / scale - viewRect.w * dragRx;
        const y = (ev.pageY - cr.y) / scale - viewRect.h * dragRy;

        if (viewport) {
            viewport.scrollLeft = x;
            viewport.scrollTop = y;
        } else {
            win.scrollTo(x, y);
        }
        draw();
    };

    const onDragEnd = ev => {
        drag = false;

        canvas.style.cursor = 'pointer';
        body.style.cursor = 'auto';
        off(win, 'mousemove', onDrag);
        off(win, 'mouseup', onDragEnd);
        onDrag(ev);
    };

    const onDragStart = ev => {
        drag = true;

        const cr = Rect.ofViewport(canvas);
        const vr = viewRect.relativeTo(rootRect);
        dragRx = ((ev.pageX - cr.x) / scale - vr.x) / vr.w;
        dragRy = ((ev.pageY - cr.y) / scale - vr.y) / vr.h;
        if (dragRx < 0 || dragRx > 1 || dragRy < 0 || dragRy > 1) {
            dragRx = 0.5;
            dragRy = 0.5;
        }

        canvas.style.cursor = 'crosshair';
        body.style.cursor = 'crosshair';
        on(win, 'mousemove', onDrag);
        on(win, 'mouseup', onDragEnd);
        onDrag(ev);
    };

    const init = () => {
        canvas.style.cursor = 'pointer';
        on(canvas, 'mousedown', onDragStart);
        on(viewport || win, 'load resize scroll', draw);
        if (settings.interval > 0) {
            setInterval(() => draw(), settings.interval);
        }
        draw();
    };

    init();

    return {
        redraw: draw
    };
};
