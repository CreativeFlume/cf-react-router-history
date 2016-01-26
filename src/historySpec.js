import { expect } from 'chai';

const historyModule = './history';

describe('history', () => {

  describe('memory history', () => {
    it('creates memory history', () => {
      const history = require(historyModule);
      expect('history').to.be.defined; 
    });
  });

  describe('browser history', () => {
    it('creates browser history', () => {

      afterEach(() => {
        if (global.window) {
          delete global.window; 
        }
      }); 

      expect(() => {
        delete require.cache[require.resolve(historyModule)];
        global.window = {};
        const history = require(historyModule);
      }).to.throw('Browser history needs a DOM');
    });
  });
});
