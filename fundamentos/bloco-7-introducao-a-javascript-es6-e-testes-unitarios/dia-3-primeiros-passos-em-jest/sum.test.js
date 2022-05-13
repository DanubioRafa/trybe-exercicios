const sum = require('./sum');

test('4 + 5 === 9?', () => {
    expect(sum(4, 5)).toBe(9);
})
test('0 + 0 === 0?', () => {
    expect(sum(0, 0)).toBe(0);
})
test('Da erro quando é passado string?', () => {
    expect(() => sum(4, '5')).toThrow(Error);
})
test('A mensagem de erro é legível?', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
})