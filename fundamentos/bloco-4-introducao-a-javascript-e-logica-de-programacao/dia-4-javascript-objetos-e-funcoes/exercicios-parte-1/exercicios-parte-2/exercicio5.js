let numMoreRepeated = 0;

let contMore = 0;

function recebeArray(inteiros) {


    for (let index of inteiros) {
        let cont = 0;
        for (let index1 of inteiros) {

            if (index === index1) {
                cont += 1;
            }
        }
        if (cont > contMore) {
            contMore = cont;
            numMoreRepeated = index;
        }
    }

    console.log("Este é o numero que mais se repete: " + numMoreRepeated)
}
recebeArray([2, 3, 2, 5, 8, 2, 3]);