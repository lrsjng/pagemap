/*! pagemap v1.4.1 - undefined */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pagemap", [], factory);
	else if(typeof exports === 'object')
		exports["pagemap"] = factory();
	else
		root["pagemap"] = factory();
})((typeof self !== 'undefined' ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function (canvas, options) {
  var WIN = __webpack_require__.g.window;
  var DOC = WIN.document;
  var DOC_EL = DOC.documentElement;
  var BODY = DOC.querySelector('body');
  var CTX = canvas.getContext('2d');
  var black = function black(pc) {
    return "rgba(0,0,0,".concat(pc / 100, ")");
  };
  var settings = Object.assign({
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
  }, options);
  var _listener = function _listener(el, method, types, fn) {
    return types.split(/\s+/).forEach(function (type) {
      return el[method](type, fn);
    });
  };
  var on = function on(el, types, fn) {
    return _listener(el, 'addEventListener', types, fn);
  };
  var off = function off(el, types, fn) {
    return _listener(el, 'removeEventListener', types, fn);
  };
  var Rect = function Rect(x, y, w, h) {
    return {
      x: x,
      y: y,
      w: w,
      h: h
    };
  };
  var rect_rel_to = function rect_rel_to(rect) {
    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      x: 0,
      y: 0
    };
    return Rect(rect.x - pos.x, rect.y - pos.y, rect.w, rect.h);
  };
  var rect_of_doc = function rect_of_doc() {
    return Rect(0, 0, DOC_EL.scrollWidth, DOC_EL.scrollHeight);
  };
  var rect_of_win = function rect_of_win() {
    return Rect(WIN.pageXOffset, WIN.pageYOffset, DOC_EL.clientWidth, DOC_EL.clientHeight);
  };
  var el_get_offset = function el_get_offset(el) {
    var br = el.getBoundingClientRect();
    return {
      x: br.left + WIN.pageXOffset,
      y: br.top + WIN.pageYOffset
    };
  };
  var rect_of_el = function rect_of_el(el) {
    var _el_get_offset = el_get_offset(el),
      x = _el_get_offset.x,
      y = _el_get_offset.y;
    return Rect(x, y, el.offsetWidth, el.offsetHeight);
  };
  var rect_of_viewport = function rect_of_viewport(el) {
    var _el_get_offset2 = el_get_offset(el),
      x = _el_get_offset2.x,
      y = _el_get_offset2.y;
    return Rect(x + el.clientLeft, y + el.clientTop, el.clientWidth, el.clientHeight);
  };
  var rect_of_content = function rect_of_content(el) {
    var _el_get_offset3 = el_get_offset(el),
      x = _el_get_offset3.x,
      y = _el_get_offset3.y;
    return Rect(x + el.clientLeft - el.scrollLeft, y + el.clientTop - el.scrollTop, el.scrollWidth, el.scrollHeight);
  };
  var calc_scale = function () {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    return function (w, h) {
      return Math.min(width / w, height / h);
    };
  }();
  var resize_canvas = function resize_canvas(w, h) {
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = "".concat(w, "px");
    canvas.style.height = "".concat(h, "px");
  };
  var viewport = settings.viewport;
  var find = function find(sel) {
    return Array.from((viewport || DOC).querySelectorAll(sel));
  };
  var drag = false;
  var root_rect;
  var view_rect;
  var scale;
  var drag_rx;
  var drag_ry;
  var draw_rect = function draw_rect(rect, col) {
    if (col) {
      CTX.beginPath();
      CTX.rect(rect.x, rect.y, rect.w, rect.h);
      CTX.fillStyle = col;
      CTX.fill();
    }
  };
  var apply_styles = function apply_styles(styles) {
    Object.keys(styles).forEach(function (sel) {
      var col = styles[sel];
      find(sel).forEach(function (el) {
        draw_rect(rect_rel_to(rect_of_el(el), root_rect), col);
      });
    });
  };
  var draw = function draw() {
    root_rect = viewport ? rect_of_content(viewport) : rect_of_doc();
    view_rect = viewport ? rect_of_viewport(viewport) : rect_of_win();
    scale = calc_scale(root_rect.w, root_rect.h);
    resize_canvas(root_rect.w * scale, root_rect.h * scale);
    CTX.setTransform(1, 0, 0, 1, 0, 0);
    CTX.clearRect(0, 0, canvas.width, canvas.height);
    CTX.scale(scale, scale);
    draw_rect(rect_rel_to(root_rect, root_rect), settings.back);
    apply_styles(settings.styles);
    draw_rect(rect_rel_to(view_rect, root_rect), drag ? settings.drag : settings.view);
  };
  var on_drag = function on_drag(ev) {
    ev.preventDefault();
    var cr = rect_of_viewport(canvas);
    var x = (ev.pageX - cr.x) / scale - view_rect.w * drag_rx;
    var y = (ev.pageY - cr.y) / scale - view_rect.h * drag_ry;
    if (viewport) {
      viewport.scrollLeft = x;
      viewport.scrollTop = y;
    } else {
      WIN.scrollTo(x, y);
    }
    draw();
  };
  var _on_drag_end = function on_drag_end(ev) {
    drag = false;
    canvas.style.cursor = 'pointer';
    BODY.style.cursor = 'auto';
    off(WIN, 'mousemove', on_drag);
    off(WIN, 'mouseup', _on_drag_end);
    on_drag(ev);
  };
  var on_drag_start = function on_drag_start(ev) {
    drag = true;
    var cr = rect_of_viewport(canvas);
    var vr = rect_rel_to(view_rect, root_rect);
    drag_rx = ((ev.pageX - cr.x) / scale - vr.x) / vr.w;
    drag_ry = ((ev.pageY - cr.y) / scale - vr.y) / vr.h;
    if (drag_rx < 0 || drag_rx > 1 || drag_ry < 0 || drag_ry > 1) {
      drag_rx = 0.5;
      drag_ry = 0.5;
    }
    canvas.style.cursor = 'crosshair';
    BODY.style.cursor = 'crosshair';
    on(WIN, 'mousemove', on_drag);
    on(WIN, 'mouseup', _on_drag_end);
    on_drag(ev);
  };
  var init = function init() {
    canvas.style.cursor = 'pointer';
    on(canvas, 'mousedown', on_drag_start);
    on(viewport || WIN, 'load resize scroll', draw);
    if (settings.interval > 0) {
      setInterval(function () {
        return draw();
      }, settings.interval);
    }
    draw();
  };
  init();
  return {
    redraw: draw
  };
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});