let cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem:
    "https://i.pinimg.com/originals/e9/c1/77/e9c1778727e6c604ace92a2ec73ce52b.jpg",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

let cartaRafa = {
  nome: "Bulbasauro",
  imagem:
    "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

let cartaGuilherme = {
  nome: "Lorde Darth Vader",
  imagem:
    "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
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

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura = `<img
src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
style=" width: inherit; height: inherit; position: absolute;">`;

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obterAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obterAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  exibeCartaMaquina();
}

function exibeCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura = `<img
src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
style=" width: inherit; height: inherit; position: absolute;">`;

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "<br>";
  }

  var html = "<div id='opcoes' class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}


