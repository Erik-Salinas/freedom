document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu__btn');
    const enlaces = document.querySelector('.menu__enlaces');
    const barras = document.querySelectorAll('.menu__btn span');
    const menuItems = document.querySelectorAll('.menu__enlaces .menu-item');

    menuBtn.addEventListener('click', () => {
        enlaces.classList.toggle('activado');
        barras.forEach(child => {child.classList.toggle('animado')});
        menuBtn.classList.toggle('girar');
    });

    // Agregar evento de clic a cada elemento del menú de productos
    menuItems.forEach(item => {
        item.addEventListener('click', () => {

            // Cerrar el menú sin afectar las clases
            enlaces.classList.remove('activado');
            barras.forEach(child => {child.classList.remove('animado')});
            menuBtn.classList.remove('girar');

        });
    });

});
