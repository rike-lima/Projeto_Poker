const nav = document.querySelector(".menuContent");

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

// function ativarMenu(){
//     menuHamburguer.style.display='block'
//     if(menuHamburguer.style.display=='block'){
//         menuHamburguer.style.display='none'
//     }
// }

function ativarMenu() {
    var menuHamburguer = document.getElementById('menuHamburguer');
    if (menuHamburguer.style.display === 'none') {
        menuHamburguer.style.display = 'block';
    } else {
        menuHamburguer.style.display = 'none';
    }
}