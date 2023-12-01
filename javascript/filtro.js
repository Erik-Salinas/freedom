/* Utilizando la bibloteca de Jquery*/

$(function() {
    // AGREGAR CLASE ACTIVE AL PRIMER ENLACE
    $('.category_list .category-item[category="all"]').addClass('ct_item-active');
    
    //FILTRANDO LOS PRODUCTOS
    $('.category-item').click(function(){
        // Variables
        let catProduct = $(this).attr('category');

        // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category-item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTAR PRODUCTOS
       /*  $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        }setTimeout(hideProduct,400); //Segundos 400 */

         $('.productos__item').hide();  //opcion sin efecto
        // MOSTRAR PRODUCTOS //EL + Nos permite agregar una variable con '' = '+variable+'
        /* $('.product-item').css('transform', 'scale(0)');
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)'); 
            $('.product-item[category="'+catProduct+'"]').show();  //opcion sin efecto
        }setTimeout(showProduct,400); //Segundos 400 */


        $('.productos__item[category="'+catProduct+'"]').show(); //opcion sin efecto
    });

    //MOSTRANDO TODO LOS PRODUCTOS
    /* $('.category-item[category="all"]').click(function(){
        function showAll(){
            $('.product-item').show();
            $('.product-item').css('transform', 'scale(1)')
        }setTimeout(showAll,400); 
    }); */
    $('.category-item[category="all"]').click(function(){ //opcion sin efecto
        $('.productos__item').show();
    }); 
});