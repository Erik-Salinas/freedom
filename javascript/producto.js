let  botonEncargar = document.getElementById('encargar_producto');

 botonEncargar.addEventListener('click',function(){

    // Número de teléfono y mensaje
    let telefono = '5491166428146'; // Reemplaza con el número de teléfono deseado
    let mensaje = '¡Hola! Estoy interesado en el siguiente producto: http://localhost:8848/html/producto.html';

    // Crear el enlace de WhatsApp                                 
     // encodeURIComponent se utiliza para codificar componentes de una URI, asegurando la transmisión segura de datos en una URL al reemplazar caracteres especiales con códigos de escape válidos.    
    let whatsApp = 'whatsapp://send?phone=' + telefono + '&text=' + encodeURIComponent(mensaje);

    // Abrir una nueva pestaña con el enlace de WhatsApp
    window.open(whatsApp);
})




/* document.addEventListener('DOMContentLoaded', function () {
    let botonEncargar = document.getElementById('encargar_producto');

    botonEncargar.addEventListener('click', function () {
        // Número de teléfono y mensaje
        let telefono = '5491140638603'; // Reemplaza con el número de teléfono deseado
        let mensaje = '¡Hola! Estoy interesado en el siguiente producto: http://localhost:8848/html/producto.html';

        // Crear el enlace de WhatsApp
        let whatsApp = 'whatsapp://send?phone=' + telefono + '&text=' + encodeURIComponent(mensaje);

        // Abrir una nueva pestaña con el enlace de WhatsApp
        window.open(whatsApp);
    });
}); */