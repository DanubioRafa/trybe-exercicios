const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz', () => {
    test('Testa se 15 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });
    test('Testa se 6 retorna fizz', () => {
        expect(myFizzBuzz(6)).toBe('fizz')
    });
    test('Testa se 5 retorna buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    });
    test('Testa se o número não for % 3 nem por 5 retorna ele mesmo', () => {
        expect(myFizzBuzz(2)).toBe(2)
    })
    test('Testa se não for um número retorna false', () => {
        expect(myFizzBuzz('oi')).toBe(false)
    })
});