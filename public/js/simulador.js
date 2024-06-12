var carta1 = [];
var naipe1 = [];
var carta2 = [];
var naipe2 = [];
var position = [];
var acertos = [];


var maos_maximas = 0;
var numero_telas = 0;
var rodada_atual = 0;


function ativarMenu() {
  var menuHamburguer = document.getElementById("menuHamburguer");
  menuHamburguer.style.display = (menuHamburguer.style.display === "none" || menuHamburguer.style.display === "") ? "block" : "none";
}


function simular() {
  maos_maximas = Number(ipt_config_maos.value);
  numero_telas = Number(ipt_config_telas.value);


  if (numero_telas === 0 || maos_maximas === 0) {
    alert("Preencha os campos corretamente");
  } else {
    divContainer.style.display = "none";


    if (numero_telas === 1) {
      divTreinoUmaTela.style.display = "flex";
    }


    rodada_atual = 0; // Usado para reiniciar a rodada atual
    gerarMao(); // vamos gerar a mão
  }
}

function gerarMao() {
  // validação para saber em que rodadas estamos, baseado no que o usuario tiver colocado na input
  if (rodada_atual >= maos_maximas) {
    alert("Todas as mãos foram geradas.");
    return;
  }


  var primeira_carta = Math.round(Math.random() * 12) + 1;
  var segunda_carta = Math.round(Math.random() * 12) + 1;
  var primeiro_naipe = Math.round(Math.random() * 3) + 1;
  var segundo_naipe = Math.round(Math.random() * 3) + 1;
  var posicaoJogador = Math.round(Math.random() * 4) + 1;


  // Geração da primeira carta baseado em um vetor de cartas
  var carta1_valores = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
  carta1.push(carta1_valores[primeira_carta - 1]);


  // Geração da segunda carta baseado no mesmo vetor de cartas da primeira carta
  carta2.push(carta1_valores[segunda_carta - 1]);


  // Geração Naipe, usando a mesma logica das cartas
  var naipe_valores = ["&#9824;", "&#9829;", "&#9827;", "&#9830;"];
  if (primeiro_naipe == segundo_naipe && primeira_carta == segunda_carta) {
    naipe1.push(naipe_valores[primeiro_naipe - 2])
  } else {
    naipe1.push(naipe_valores[primeiro_naipe - 1]);
  }
  naipe2.push(naipe_valores[segundo_naipe - 1]);


  // Gerar posição baseado em um vetor tbm
  var posicoes = ["UTG", "MP", "HJ", "CO", "BTN"];
  position.push(posicoes[posicaoJogador - 1]);


  var posicaoAtual = position[rodada_atual];
  var cartaAtualUm = carta1[rodada_atual];
  var cartaAtualDois = carta2[rodada_atual];
  var naipeAtualUm = naipe1[rodada_atual];
  var naipeAtualDois = naipe2[rodada_atual];


  id_posicaoJogador.innerHTML = posicaoAtual;
  id_carta1.innerHTML = cartaAtualUm;
  id_carta2.innerHTML = cartaAtualDois;
  id_naipe1.innerHTML = naipeAtualUm;
  id_naipe2.innerHTML = naipeAtualDois;
  contadorRodada.innerHTML = rodada_atual + 1;


  rodada_atual++;

  var comboNaipe = ""

  if (naipeAtualUm == naipeAtualDois) {
    comboNaipe = 's'
  } else {
    comboNaipe = 'o'
  }


  var combo = ''

  if (cartaAtualUm >= cartaAtualDois) {
    combo = cartaAtualUm + cartaAtualDois + comboNaipe
    console.log(combo)
  } else {
    combo = cartaAtualDois + cartaAtualUm + comboNaipe
    console.log(combo)
  }
  
  
  
}

function fold() {
 if(posicaoAtual=='UTG'){
    if (correcao[0].maos.indexOf(combo) == -1) {
      acertos.push('certo')
    }else{
      acertos.push('errado')
    }
 }
  gerarMao()
}

function raise() {
  
  gerarMao()
}


var correcao = [
  {
    'posicao': 'UTG',
    'maos': ['ATo', 'AJo', 'AQo', 'AKo', 'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'T9s']
  },
  {
    'posicao': 'MP',
    'maos': ['ATo', 'AJo', 'AQo', 'AKo', 'KJo', 'QJo', 'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'T9s', 'K9s', 'Q9s', 'J9s', '98s']
  },
  {
    'posicao': 'HJ',
    'maos': ['A9o', 'ATo', 'AJo', 'AQo', 'AKo', 'KJo', 'QJo', 'KTo', 'K9o', 'QTo', 'JTo', 'T9o', 'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'T9s', 'K9s', 'Q9s', 'J9s', '98s', 'K8s', 'Q8s', 'J8s', 'T8s', '87s']
  },
  {
    'posicao': 'CO',
    'maos': ['A8o', 'A9o', 'ATo', 'AJo', 'AQo', 'AKo', 'KJo', 'QJo', 'KTo', 'K9o', 'K8o', 'QTo', 'Q9o', 'J9o', 'JTo', 'T9o', 'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o', '33o', '22o', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'T9s', 'K9s', 'Q9s', 'J9s', '98s', 'K8s', 'Q8s', 'J8s', 'T8s', '87s', 'K7s', 'Q7s', 'J7s', 'T7s', '97s', 'K6s', 'Q6s', 'J6s', 'K5s', 'Q5s', 'K4s', '76s', '65s']
  },
  {
    'posicao': 'BTN',
    'maos': ['A2o', 'A3o', 'A4o', 'A5o', 'A6o', 'A7o', 'A8o', 'A9o', 'ATo', 'AJo', 'AQo', 'AKo', 'KJo', 'K7o', 'K6o', 'Q8o', 'Q7o', 'J8o', 'T8o', '98o', '97o', '87o', '76o', 'QJo', 'KTo', 'K9o', 'K8o', 'QTo', 'Q9o', 'J9o', 'JTo', 'T9o', 'AAo', 'KKo', 'QQo', 'JJo', 'TTo', '99o', '88o', '77o', '66o', '55o', '44o', '33o', '22o', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'T9s', 'K9s', 'Q9s', 'J9s', '98s', 'K8s', 'Q8s', 'J8s', 'T8s', '87s', 'K7s', 'Q7s', 'J7s', 'T7s', '97s', 'K6s', 'Q6s', 'J6s', 'K5s', 'Q5s', 'K4s', '76s', '65s', 'K3s', 'K2s', 'Q4s', 'Q3s', 'J5s', 'J4s', 'T6s', 'T5s', '96s', '95s', '85s', '86s', '75s', '64s', '54s', '43s']
  },
];