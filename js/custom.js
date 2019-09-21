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
        'padding': 275,
        'tolerance': 70
        });

    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
    });



var fixed = document.querySelector('#main');

slideout.on('translate', function(translated) {
  fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeclose', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(275px)';
});

slideout.on('beforeopen', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
  fixed.style.transition = '';
});

slideout.on('close', function () {
  fixed.style.transition = '';
});

    // Lazy Loading
    $('#lazy-container .lazy').lazyload();
      

});

