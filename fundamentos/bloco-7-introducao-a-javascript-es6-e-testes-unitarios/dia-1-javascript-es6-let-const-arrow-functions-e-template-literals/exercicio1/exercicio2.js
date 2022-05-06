const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sorteia = (param) => param.sort((a, b) => a - b);

console.log(sorteia(oddsAndEvens)); // será necessário alterar essa linha 😉


const numFatorial = (num) => {
    let numFat = 1;
    for (let i = num; i > 0; i -= 1) {
        numFat = numFat * i;
    }
    console.log(numFat);
}

numFatorial(3);