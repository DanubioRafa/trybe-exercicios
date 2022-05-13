const matchNumber = (chosenNumber, numberRandom) => {
    return (chosenNumber === numberRandom ? 'Parabéns você ganhou' : 'Tente novamente');
}

const geraNumero = (chosenNumber, callback) => {
    const numberRandom = (Math.floor(Math.random() * 6));
    return callback(chosenNumber, numberRandom);
}
console.log(geraNumero(2, matchNumber));