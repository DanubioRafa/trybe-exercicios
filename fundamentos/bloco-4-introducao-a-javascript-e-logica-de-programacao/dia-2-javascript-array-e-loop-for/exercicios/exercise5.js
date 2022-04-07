/*Utilizando for , descubra qual o maior valor 
contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    let greaterThan = 0;

    for (index2 = 0; index2 < numbers.length; index2 += 1){
        if (numbers[index] > numbers[index2]){
            greaterThan += 1
        }

        if (greaterThan === (numbers.length -1)){
            console.log(numbers[index])

            break;
        }
    }

}