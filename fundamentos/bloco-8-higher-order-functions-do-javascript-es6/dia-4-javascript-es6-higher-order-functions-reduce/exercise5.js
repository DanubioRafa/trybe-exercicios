const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = (cur) => {
    let count = 0;
    const name = cur.toLowerCase();
    for (let index of name) {
       if (index === 'a') {count += 1};
    }
    return count;
}

function containsA(array) {
    return array.reduce((acc, cur) => acc + countA(cur), 0)
}

console.log(containsA(names))