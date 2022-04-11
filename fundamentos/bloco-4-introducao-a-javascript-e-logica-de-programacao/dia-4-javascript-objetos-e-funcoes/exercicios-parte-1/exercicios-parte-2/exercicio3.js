function recebeArray(conjunto) {
    let menorNum = conjunto[0];

    for (let index = 0; index < conjunto.length; index += 1) {

        if (menorNum > conjunto[index]) {
            menorNum = conjunto[index];
        }
    }

    for (let index1 = 0; index1 < conjunto.length; index1 += 1) {
        if (menorNum === conjunto[index1]) {
            console.log(index1)
        }

    }
}

recebeArray([2, 4, 6, 7, 10, 0, -3])