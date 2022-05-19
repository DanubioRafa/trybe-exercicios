const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (arrayCar) => {
    const [name, mark, year] = arrayCar;
    return {name: name, mark: mark, year: year};
};

console.log(toObject(palio));