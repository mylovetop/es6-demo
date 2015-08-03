/**
 * Create by zhj on 15-8-3
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Test = (function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    _createClass(Test, [{
        key: 'toString',
        value: function toString() {
            return 'Test class';
        }
    }], [{
        key: 'num',

        //静态方法
        value: function num() {
            return 9;
        }
    }]);

    return Test;
})();

//# sourceMappingURL=Test.js.map