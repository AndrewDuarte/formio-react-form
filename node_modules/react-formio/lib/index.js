'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Formio = require('./components/Formio');

Object.keys(_Formio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Formio[key];
    }
  });
});