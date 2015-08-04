"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
        /**
         * Create by zhj on 15-8-3
         */
        'use strict';

        Object.defineProperty(exports, '__esModule', {
            value: true
        });

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }

        var Point = function Point() {
            _classCallCheck(this, Point);

            this.es6 = 'yay';
        };

        exports.Point = Point;

        //# sourceMappingURL=Point.js.map
    }, {}] }, {}, [1]);

//# sourceMappingURL=p2.js.map