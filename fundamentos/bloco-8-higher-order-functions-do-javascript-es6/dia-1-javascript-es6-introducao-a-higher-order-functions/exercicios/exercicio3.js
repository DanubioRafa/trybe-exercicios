const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeProva = (gab, studentAnswers) => {
    let acertos = 0;
    let erros = 0;
    let notaFinal = 0;
    for (let index in gab) {
        if (gab[index] === studentAnswers[index]) {
            acertos += 1;
        } else if (gab[index] !== studentAnswers[index] && studentAnswers[index] !== 'N.A') {
            erros += 1;
        }
    }
    return (notaFinal = acertos - (erros * 0.5));
}

const mostraNota = (gab, studentAnswers, callback) => {
    return callback(gab, studentAnswers);
}

console.log(mostraNota(RIGHT_ANSWERS, STUDENT_ANSWERS, corrigeProva));