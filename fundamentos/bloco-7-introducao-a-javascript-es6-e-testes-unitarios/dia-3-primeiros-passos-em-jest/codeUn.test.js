
const {encode, decode} = require('./codeUn')

describe('Testa Encode', () => {
    test('Testa se encode é uma função', () => {
        expect(typeof encode).toBe('function')
    })
    test('Testa se aeiou retorna 12345', () => {
        expect(encode('aeiou')).toBe('12345')
    })
    test('Testa se o tamanho da string passada tem o mesmo tamanho da retornada', () => {
        expect(encode('12345')).toHaveLength(5)
    })
})

describe('Testa Decode', () => {
    test('Testa se encode é uma função', () => {
        expect(typeof decode).toBe('function')
    })
    test('Testa se 12345 retorna aeiou', () => {
        expect(decode('12345')).toBe('aeiou')
    })
    test('Testa se o tamanho da string passada tem o mesmo tamanho da retornada', () => {
        expect(decode('12345')).toHaveLength(5)
    })
})