const nav = document.querySelector(".menuContent");

window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));


var count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},4000)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
        
    }
    document.getElementById("radio" +count).checked = true;
}

