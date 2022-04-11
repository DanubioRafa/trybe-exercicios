function verifyPalindrome(palavra) {
    let palavraAoContrario = "";
    for (let index = palavra.length - 1; index >= 0; index -= 1) {
        palavraAoContrario += palavra[index];
    }
    if (palavra === palavraAoContrario) {
        console.log("true");
    } else {
        console.log("false");
    }
}

verifyPalindrome("arara")