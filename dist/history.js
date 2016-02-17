'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = createHistory;

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = require('history/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createHistory(windowExists) {
  return windowExists ? (0, _createBrowserHistory2.default)() : (0, _createMemoryHistory2.default)();
}

exports.default = createHistory(typeof window !== 'undefined');