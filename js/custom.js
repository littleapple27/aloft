$(function() {

   
    ///Slidebars Navigation Slide out
    // Toggle button
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
    background: "#f8f9fa",
    });

    
    //Mark favorite and notify icon 
    $('#fav-icon').click(function(){
            $(this).find('i').toggleClass('far fas')
        });

    $('#notify-icon').click(function(){
            $(this).find('i').toggleClass('far fas')
        });


    //Log out of firebase on button click 

    $('.sign-out').click(function(){
        firebase.auth().signOut().then(function() {
            console.log('User signed out. Begin redirect to sign-in page.')
            location.replace("index.html");
        }).catch(function(error) {
        alert('An error occurred.  Please try again.')
        });
    });



});//End doc ready

