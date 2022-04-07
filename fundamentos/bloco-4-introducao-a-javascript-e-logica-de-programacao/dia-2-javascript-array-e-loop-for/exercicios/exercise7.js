/*Utilizando for , descubra qual o menor valor 
contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    let cont = 0;

    for (let index2 = 0; index2 < numbers.length; index2 += 1){

        if(numbers[index] > numbers[index2]){
            cont += 1;
        }

        if(index2 === (numbers.length -1) && cont === 0){
            console.log("Este é o menor valor: " + numbers[index])
        }
    }
}