// Obtener todas las opciones de números
const numeroOptions = document.querySelectorAll('.numeroOption');

// Seleccionar el número por defecto (puedes cambiar este valor)
const defaultNumeroValue = '1';

// Encontrar la opción del número por defecto
const defaultNumeroOption = Array.from(numeroOptions).find(option => option.dataset.value === defaultNumeroValue);

// Seleccionar el número por defecto al cargar la página
selectNumero(defaultNumeroOption);

// Añadir manejadores de eventos a cada opción de número
numeroOptions.forEach(option => {
    option.addEventListener('click', () => selectNumero(option));
});

function selectNumero(selectedOption) {
    // Eliminar la clase 'datos__numeros--active' de todas las opciones
    numeroOptions.forEach(option => option.classList.remove('datos__numeros--active'));

    // Agregar la clase 'datos__numeros--active' a la opción seleccionada
    selectedOption.classList.add('datos__numeros--active');

    // Actualizar la vista previa (puedes añadir lógica aquí si es necesario)
    console.log(`Número seleccionado: ${selectedOption.dataset.value}`);
}

