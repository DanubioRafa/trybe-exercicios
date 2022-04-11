function recebeArray(conjunto) {
    let maiorNum = conjunto[0];

    for (let index = 0; index < conjunto.length; index += 1) {
        
        if (maiorNum < conjunto[index]) {
            maiorNum = conjunto[index];
        }
    }

    for (let index1 = 0; index1 < conjunto.length; index1 += 1){
        if (maiorNum === conjunto[index1]){
            console.log(index1)
        }

    }
}

recebeArray([2,3,6,7,10,1])