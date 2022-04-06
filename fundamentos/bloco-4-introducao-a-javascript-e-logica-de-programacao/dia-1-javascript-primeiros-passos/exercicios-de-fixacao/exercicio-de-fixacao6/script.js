let estado = "reprovad";

switch (estado){
    case "aprovada":
        console.log("Você foi aprovado");
        break;

    case "lista":
        console.log("Você está na lista de espera")
        break;
    
    case "reprovada":
        console.log("Você foi reprovado");
        break;
    
    default:
        console.log("Não se aplica");
}