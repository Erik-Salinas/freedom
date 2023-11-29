const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".menu__enlaces");
const barras = document.querySelectorAll(".ham span")




ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child =>{
        child.classList.toggle("animado");
    })
});
