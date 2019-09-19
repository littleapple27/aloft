$(function() {

 
		  
  
	// Slick Carousel
    $('#listing-carousel').slick({
        autoplay: true, 
        autoplaySpeed: 4000,
		centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows: false,  
        dots: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false, 
                dots: false
            }
        }]

    });//End Slick Carousel

    //slideout
    // Config Options
var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('navbar-main'),
  'padding': 230,
  'tolerance': 70
    });



// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});


    // Lazy Loading
    $('#lazy-container .lazy').lazyload();
      
    




});

