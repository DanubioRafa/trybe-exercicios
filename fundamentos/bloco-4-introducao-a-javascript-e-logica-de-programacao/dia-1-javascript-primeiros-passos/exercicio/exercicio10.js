const valueSell = 2;
const valueBuy = 1;

if (valueBuy > 0 && valueSell > 0){
console.log("Lucro: "+ (1000*(valueSell - (valueBuy + valueBuy*20/100))))
}else{
    console.log("Erro: Insira um valor maior que zero")
}

