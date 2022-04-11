function recebeArray(nomes) {
    let maiorNome = nomes[0];
    for (let nom of nomes) {
        if (maiorNome.length < nom.length) {
            maiorNome = nom;
        }
    }
    console.log(maiorNome)
}

recebeArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])