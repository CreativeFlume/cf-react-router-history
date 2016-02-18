'use strict';

var _chai = require('chai');

var history = require('../dist/history');

describe('history', function () {

  describe('history', function () {
    console.log(JSON.stringify(history));
    it('exports createHistory', function () {
      (0, _chai.expect)(history.createHistory).to.not.be.undefined;
    });
  });
});