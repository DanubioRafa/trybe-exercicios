/*Utilizando o array criado no exercício 
anterior imprima o resultado da divisão de 
cada um dos elementos por 2 . */

let numbers = [];
for (let index = 1; index <= 25; index += 1){
    numbers.push(index)
}

for (let index2 = 0; index2 < numbers.length; index2 += 1){
    console.log(numbers[index2] / 2);
}