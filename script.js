let cartaPaulo = {
  nome: "Seiya de Pegaso",
  ataque: 80,
  defesa: 60,
  magia: 90
}

let cartaRafa = {
  nome: "Bulbasauro",
  ataque: 70,
  defesa: 65,
  magia: 85
}

let cartaGuilherme = {
    nome: "Lorde Darth Vader",
    ataque: 88,
    defesa: 62,
    magia: 90
  }


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGuilherme]


function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    
}
