// Obtener todas las opciones de color
const colorOptions = document.querySelectorAll('.colorOption');

// Añadir manejadores de eventos a cada opción de color
colorOptions.forEach(option => {
    option.addEventListener('click', () => selectOption(option));
});

// Seleccionar el color por defecto (puedes cambiar este valor)
const defaultColorClass = 'color__option--active'; //Clase

// Encontrar la opción del color por defecto
const defaultOption = Array.from(colorOptions).find(option => option.classList.contains(defaultColorClass));

// Seleccionar el color por defecto al cargar la página
selectOption(defaultOption);

function selectOption(selectedOption) {
    // Eliminar la clase 'selected' de todas las opciones
    colorOptions.forEach(option => option.classList.remove('datos__colores--active'));

    // Agregar la clase 'selected' a la opción seleccionada
    selectedOption.classList.add('datos__colores--active');

    // Actualizar la vista previa (puedes añadir lógica aquí si es necesario)
}