const func = require('./exercise7');

describe('Teste', () => {
    it('uppercase "test" to equal "TEST"', (done) => {
        func('test', (str) => {
          try {
            expect(str).toBe('TEST');
            done();
          } catch (error) {
            done(error);
          }
        });
      });
})