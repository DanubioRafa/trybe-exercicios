const geraEmail = (nome) => {
    const email = `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;
    return email;
}

const geraObjetoNomeEmail = (nome) => {
    const objeto = {
        nomeCompleto: nome,
        email: geraEmail(nome)
    }
    return objeto;
}
const newEmployees = () => {
    const employees = {
        id1: geraObjetoNomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: geraObjetoNomeEmail('Luiza Drumont'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: geraObjetoNomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());