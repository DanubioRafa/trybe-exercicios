let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info.personagem)

info.recorrente = 'Sim';

console.log(info)


for (let index in info) {
  console.log(info[index])
}

console.log("")

for (let index in info) {
  console.log(index)
}

console.log("")

let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};

info1.recorrente = "sim";

for (index in info) {
  console.log(info[index] + " e " + info1[index])
}