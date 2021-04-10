let cartaPaulo = {
  nome: "Seiya de Pegaso",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

let cartaRafa = {
  nome: "Bulbasauro",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

let cartaGuilherme = {
  nome: "Lorde Darth Vader",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGuilherme];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obterAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo")
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value;
        }
    }
}