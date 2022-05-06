const greatestWord = (phrase) => {
    const arrayOfWords = phrase.split(' ');
    let wordG = arrayOfWords[0];
    for (let i of arrayOfWords) {
        if (!wordG > i) {
            wordG = i;
        }
    }
    console.log(wordG);
}
greatestWord('oioioioi oi oioioi');
