const nav = document.querySelector(".menuContent");

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

var img1 = `./assets/imagens/WSOP_Logo.jpg`


var listaEventos=[img1, `./assets/imagens/ept_logo.jpg`,`./assets/imagens/PCA_logo.jpg`,`./assets/imagens/lapt_logo.jpg`, `./assets/imagens/bsop_logo.png`, `./assets/imagens/ksop_logo.jpg`]

var efeitoCarrossel= document.getElementById('carrossel')

carrossel.src= listaEventos[0];

var i = 0;

function proximo(){
    if(i == 5){
        i = -1;
    }
    i++
    carrossel.src = listaEventos[i];
}

function anterior(){
    if(i == 0){
        i = 6;
    }
    i--
    carrossel.src = listaEventos[i];
}