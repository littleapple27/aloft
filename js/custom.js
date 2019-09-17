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

    // Lazy Loading
    $('#lazy-container .lazy').lazyload();
      
    




});

