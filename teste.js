const nav = document.querySelector(".menuContent");



window.addEventListener("scroll", () => nav.classList.toggle("active", scrollY > 0));

