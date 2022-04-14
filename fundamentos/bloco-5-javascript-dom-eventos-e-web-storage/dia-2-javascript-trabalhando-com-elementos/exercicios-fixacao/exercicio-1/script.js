document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "grey";
document.getElementById("primeiroFilhoDoFilho").innerHTML = "Lorem Ipsum";
document.getElementById("pai").firstElementChild;
document.getElementById("elementoOndeVoceEsta").previousElementSibling;

let createE = document.createElement("div");
createE.innerText = "Filho do pai"
document.getElementById("pai").appendChild(createE);

let WhereYouAreSon = document.createElement("article")
document.getElementById("elementoOndeVoceEsta").appendChild(WhereYouAreSon)

let firstSonSon = document.createElement("h4");
document.getElementById("primeiroFilhoDoFilho").appendChild(firstSonSon);

let paiDoPaiFilhosElement = document.getElementById("pai").children;
let paiDoPaiElement = document.getElementById("pai");
for (let index = 0; index < paiDoPaiFilhosElement.length; index += 1){
    element = paiDoPaiFilhosElement[index];
    console.log(element);
    if (element.innerHTML.includes("")){
        paiDoPaiElement.removeChild(element);
    }
}
