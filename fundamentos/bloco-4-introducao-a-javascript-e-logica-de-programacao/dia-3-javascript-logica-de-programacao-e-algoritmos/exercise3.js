/*3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python',
 'html', 'css'];

Escreva dois algoritmos: um que retorne a 
maior palavra deste array e outro que retorne 
a menor. Considere o número de caracteres de 
cada palavra.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let menor = "";

for (let index = 0; index < array.length; index += 1){
    let cont = 0;

    for (let index2 = 0; index2 < array.length; index2 += 1){
        if (array[index].length > array[index2].length){
            cont += 1;
        }
        
        if (cont === (array.length - 1)){
            maior = array[index]
        }
    }
}

for (let index3 = 0; index3 < array.length; index3 += 1){
    let cont = 0;

    for (let index4 = 0; index4 < array.length; index4 += 1){
        if (array[index3].length > array[index4].length){
            cont += 1;
        }
        
    }
    if (cont === 0){
        menor = array[index3]
    }
}

console.log("A maior palavra do array é: "+ maior)
console.log("A menor palavra do array é: "+ menor)