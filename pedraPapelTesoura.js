const jogador1 = "tesoura";
const jogador2 = "pedra";

const resultado = jogador1 === jogador2 ? 'Empate' :
    jogador1 === "pedra" && jogador2 === "papel" ? "Vitoria Jogador 2" :
    jogador1 === "pedra" && jogador2 === "tesoura" ? "Vitoria Jogador 1" :
    jogador1 === "papel" && jogador2 === "tesoura" ? "Vitoria Jogador 2" :
    jogador1 === "papel" && jogador2 === "pedra" ? "Vitoria Jogador 1" :
    jogador1 === "tesoura" && jogador2 === "pedra" ? "Vitoria Jogador 2" :
    jogador1 === "tesoura" && jogador2 === "papel" ? "Vitoria Jogador 1" :
    "Erro";

    console.log(resultado);