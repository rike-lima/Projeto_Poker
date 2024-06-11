function ativarMenu() {
    var menuHamburguer = document.getElementById('menuHamburguer');
    if (menuHamburguer.style.display = 'none') {
        menuHamburguer.style.display = 'block';
    } else {
        menuHamburguer.style.display = 'none';
    }
}

function simular() {

    // simulador.style.display=none

    var maos_maximas = ipt_config_maos.value;
    var numero_telas = ipt_config_telas.value;

    if (numero_telas == 0 || maos_maximas == 0) {
        alert('Preencha os campos corretamente')
    } else {

        divContainer.style.display = 'none';

        if (numero_telas == 1) {
            divTreinoUmaTela.style.display = "flex"
        }

        gerarMao()
    }
}

var carta1 = []
var naipe1 = []
var carta2 = []
var naipe2 = []
var position = []

function gerarMao() {
 var primeira_carta= Math.round(Math.random()*12)+1;
 var segunda_carta= Math.round(Math.random()*12)+1;
 var primeiro_naipe= Math.round(Math.random()*3)+1;
 var segundo_naipe= Math.round(Math.random()*3)+1;
 var posicaoJogador= Math.round(Math.random()*5)+1;

 if(primeira_carta==1){
    carta1.push(A)
} else if(primeira_carta==2){
    carta1.push(2);
} else if(primeira_carta==3){
    carta1.push(3)
} else if(primeira_carta==4){
    carta1.push(4)
} else if(primeira_carta==5){
    carta1.push(5)
} else if(primeira_carta==6){
    carta1.push(6)
} else if(primeira_carta==7){
    carta1.push(7)
} else if(primeira_carta==8){
    carta1.push(8)
} else if(primeira_carta==9){
    carta1.push(9)
} else if(primeira_carta==10){
    carta1.push(T)
} else if(primeira_carta==11){
    carta1.push(J)
} else if(primeira_carta==12){
    carta1.push(Q)
} else {
    carta1.push(K)
} 

//geração da segunda carta:

if(segunda_carta==1){
    carta2.push(A)
} else if(segunda_carta==2){
    carta2.push(2)
} else if(segunda_carta==3){
    carta2.push(3)
} else if(segunda_carta==4){
    carta2.push(4)
} else if(segunda_carta==5){
    carta2.push(5)
} else if(segunda_carta==6){
    carta2.push(6)
} else if(segunda_carta==7){
    carta2.push(7)
} else if(segunda_carta==8){
    carta2.push(8)
} else if(segunda_carta==9){
    carta2.push(9)
} else if(segunda_carta==10){
    carta2.push(T)
} else if(segunda_carta==11){
    carta2.push(J)
} else if(segunda_carta==12){
    carta2.push(Q)
} else {
    carta2.push(K)
} 

//Geração Naipe

if(primeiro_naipe==1){
    naipe1.push(`&#9824;`)
}else if(primeiro_naipe==2){
    naipe1.push(`&#9829;`)
} else if(primeiro_naipe==3){
    naipe1.push(`&#9827;`)
} 
else {
    naipe1.push(`&#9830;`)
} 

if(segundo_naipe==1){
    naipe2.push(`&#9824;`)
}else if(segundo_naipe==2){
    naipe2.push(`&#9829;`)
} else if(segundo_naipe==3){
    naipe2.push(`&#9827;`)
} 
else {
    naipe2.push(`&#9830;`)
} 

//gerar posição

if(posicaoJogador==1){
    position.push(UTG)
}else if(posicaoJogador==2){
    position.push(MP)
} else if(posicaoJogador==3){
    position.push(HJ)
} else if(posicaoJogador==4){
    position.push(CO)
} else if(posicaoJogador==5){
    position.push(BTN)
} 
else {
    position.push(SB)
} 

posicaoJogador.innerHTML
carta1.innerHTML
carta2.innerHTML
naipe1.innerHTML
naipe2.innerHTML


}