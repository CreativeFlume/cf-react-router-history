'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = createHistory;

var _reactRouter = require('react-router');

function createHistory(windowExists) {
  return windowExists ? (0, _reactRouter.useRouterHistory)(_reactRouter.browserHistory) : (0, _reactRouter.useRouterHistory)(_reactRouter.memoryHistory);
}

exports.default = createHistory(typeof window !== 'undefined');