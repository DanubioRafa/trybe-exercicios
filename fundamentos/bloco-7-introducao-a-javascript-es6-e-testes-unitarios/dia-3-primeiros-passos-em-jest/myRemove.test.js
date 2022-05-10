const myRemove = require('./myRemove');

describe('Testa função myRemove', () => {
    test('Verifica se remove o segundo parâmetro do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
      })
    test('Verifica se a função não retorna o mesmo array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    test('Verifica se retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
      })
})
