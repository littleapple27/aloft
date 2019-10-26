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
    cursorcolor:"#45b39d",
    cursorborder: "1px solid rgba(69,179,157, 0.3)",
    cursorwidth:"8px",
    zindex: "auto",
    autohidemode: true,
    background: "#f8f9fa",
    cursorfixedheight: 50,
    scrollspeed: 100
    });

});//End doc ready

