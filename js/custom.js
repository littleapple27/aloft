$(function() {

 
		  

    ///Slidebars Navigation Slide out
    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
    });

    var controller = new slidebars();
    controller.init();
    $( '.toggle-button' ).on( 'click', function ( event ) {
    // Stop default action and bubbling
        event.stopPropagation();
        event.preventDefault();

        // Toggle the Slidebar with id 'id-1'
        controller.toggle( 'left-nav' );
        } );


    // Lazy Loading
    // Bottom image does not always load -- Need to troubleshoot more
    $('.results-container .lazy').lazy({
        appendScroll: $('.results-container'),

        beforeLoad: function(element) {
                var imageSrc = element.data('src');
                console.log('image "' + imageSrc + '" is about to be loaded');
            },
            
            // called after an element was successfully handled
            afterLoad: function(element) {
                var imageSrc = element.data('src');
                console.log('image "' + imageSrc + '" was loaded successfully');
            }   
        });//End lazy 
   
      

});//End doc ready

