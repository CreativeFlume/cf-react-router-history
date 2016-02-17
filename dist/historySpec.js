'use strict';

var _chai = require('chai');

var historyModule = './history';

describe('history', function () {

  describe('memory history', function () {
    it('creates memory history', function () {
      var history = require(historyModule);
      (0, _chai.expect)('history').to.be.defined;
    });
  });

  describe('browser history', function () {
    it('creates browser history', function () {

      afterEach(function () {
        if (global.window) {
          delete global.window;
        }
      });

      (0, _chai.expect)(function () {
        delete require.cache[require.resolve(historyModule)];
        global.window = {};
        var history = require(historyModule);
      }).to.throw('Browser history needs a DOM');
    });
  });
});