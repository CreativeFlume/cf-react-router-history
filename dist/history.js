'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = createHistory;

var _reactRouter = require('react-router');

function createHistory(windowExists) {
  return windowExists ? _reactRouter.browserHistory : _reactRouter.memoryHistory;
}

exports.default = createHistory(typeof window !== 'undefined');