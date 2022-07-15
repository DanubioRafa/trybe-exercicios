const services = require('./services');

describe('Testa a função generate random Number', () => {

  test('Testa o retorno da função', () => {
    const generateRandomNumberFunc = jest.spyOn(services, 'generateRandomNumber')
    .mockReturnValue(10);

    expect(generateRandomNumberFunc()).toBe(10);
    expect(generateRandomNumberFunc).toHaveBeenCalledTimes(1);
  })

  test('Muda o Mock e verifica se funcionou', () => {
    const generateRandomNumberFunc2 = jest.spyOn(services, 'generateRandomNumber')
    .mockImplementationOnce((num1, num2) => num1 / num2);

    expect(generateRandomNumberFunc2(4, 2)).toBe(2);
    expect(generateRandomNumberFunc2).toHaveBeenCalled();
  })

  test('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
    const newImplement = jest.spyOn(services, 'generateRandomNumber')
    .mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(newImplement(1, 2, 3)).toBe(6);
    expect(newImplement).toHaveBeenCalled();
  })


  test('Testa se a função foi restaurada', () => {

    expect(typeof services.generateRandomNumber()).toBe('number');
  })

})

describe('Testa as funções toUpperCase, firstLetter, concatTwoStrings', () => { 
  const toLowerCase = jest.spyOn(services, 'toUpperCaseFunc')
  .mockImplementation((str) => str.toLowerCase());
  const lastLetter = jest.spyOn(services, 'firstLetter')
  .mockImplementation((str) => str[str.length - 1]);
  const concatThreeStrings = jest.spyOn(services, 'concatTwoStrings')
  .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

  test('Testa o primeiro mock', () => {
    expect(toLowerCase('PALAVRA')).toBe('palavra');
  })
  test('Testa o segundo mock', () => {
    expect(lastLetter('PALAVRA')).toBe('A');
  })
  test('Testa terceiro mock', () => {
    expect(concatThreeStrings('Pa', 'la', 'vra')).toBe('Palavra');
  })
})

describe('Testa a função fetchAPI', () => {
  services.fetchAPI = jest.fn();
  afterEach(services.fetchAPI.mockReset);

  test('testando requisição caso a promise resolva', async () => {
    services.fetchAPI.mockResolvedValue('request success');

    services.fetchAPI();
    await expect(services.fetchAPI()).resolves.toBe('request success');
  })

  test('testando requisição caso a promise seja rejeitada', async () => {
    services.fetchAPI.mockRejectedValue('request failed');

    await expect(services.fetchAPI()).rejects.toMatch('request failed');
  })
})