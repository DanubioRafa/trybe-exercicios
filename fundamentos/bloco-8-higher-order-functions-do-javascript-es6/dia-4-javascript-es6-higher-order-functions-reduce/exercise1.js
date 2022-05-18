const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(matriz) {
    return matriz.reduce((accumulator, array) => accumulator.concat(array) , []);
}


console.log(flatten(arrays));