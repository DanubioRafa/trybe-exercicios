const sum = (...numbers) => {
   return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sum(5,4,3,2,1))