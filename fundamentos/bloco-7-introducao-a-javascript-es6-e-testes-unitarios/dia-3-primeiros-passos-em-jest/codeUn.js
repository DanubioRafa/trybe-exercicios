function encode(palavras) {
    let wordCode = "";
  
    for (let index = 0; index < palavras.length; index += 1) {
  
      if (palavras[index] === 'a') {
        wordCode += '1';
      } else if (palavras[index] === 'e') {
        wordCode += '2';
      } else if (palavras[index] === 'i') {
        wordCode += '3';
      } else if (palavras[index] === 'o') {
        wordCode += '4';
      } else if (palavras[index] === 'u') {
        wordCode += '5';
      } else {
        wordCode += palavras[index];
      }
  
    }
    return wordCode
  }
    // seu código aqui 
  
  
  function decode(palavras) {
  
    let wordUncode = "";
  
    for (let index = 0; index < palavras.length; index += 1) {
  
      if (palavras[index] === '1') {
        wordUncode += 'a';
      } else if (palavras[index] === '2') {
        wordUncode += 'e';
      } else if (palavras[index] === '3') {
        wordUncode += 'i';
      } else if (palavras[index] === '4') {
        wordUncode += 'o';
      } else if (palavras[index] === '5') {
        wordUncode += 'u';
      } else {
        wordUncode += palavras[index];
      }
  
    }
    return wordUncode
}

module.exports = {encode, decode};