/*4- Um número primo é aquele divisível apenas 
por 1 e por ele mesmo. Sabendo disso, escreva 
um algoritmo que retorne o maior número primo 
entre 0 e 50. */

let primos = [];

for (let index = 2; index < 51; index += 1){
    let cont = 0;

    for (let index2 = 2; index2 < 51; index2 += 1){
        if (index % index2 === 0){
            cont += 1;
        }
    }

    if (cont === 1){
        primos.push(index)
    }
}

console.log(primos)