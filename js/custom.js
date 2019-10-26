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
    $("img.lazyload").lazyload({
        effect : "fadeIn"
     },
        console.log('success')
    );

    //nicescroll
    $(".scroll-container").niceScroll(".nice-scroll", {
    cursorcolor:"rgba(21,67,96,.5)",
    cursorwidth:"6px",
    zindex: "auto",
    autohidemode: true,
    background: "#f8f9fa"
    });

});//End doc ready

