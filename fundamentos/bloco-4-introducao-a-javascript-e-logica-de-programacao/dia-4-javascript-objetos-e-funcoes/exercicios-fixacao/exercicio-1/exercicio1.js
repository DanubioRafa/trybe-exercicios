let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},
    bestInTheWorld: {
        years: [2006, 2007, 2008, 2009, 2010, 2018]
    }

}

console.log('A jogadora '+ player.name + ' '+ player.lastName + ' Tem '
 + player.age + ' anos de idade')

console.log('A jogadora '+ player.name + ' '
+ player.lastName + 'foi eleita a melhor do mundo nos anos: '
+ player.bestInTheWorld.years + '.')

console.log('A jogadora possui ' + player.medals.golden
+ ' medalhas de ouro e ' + player.medals.silver +
' medalhas de prata.')
