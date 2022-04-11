function recebeNum(num) {
    let numSummed = 0;
    if (num > 0) {
        for (let index = 0; index <= num; index += 1) {
            numSummed += index;
        }
    }else{
        console.log("Digite um número não negativo.")
    }
    console.log(numSummed)

}
recebeNum(10)