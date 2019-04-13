$(document).ready(function(){
    // owl carousel plugine start here
    // -------------------------------
    $(".banner-content-wrapper").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        dotsData:true,
        center: true,
        navText: ["<i class='fas fa-caret-left'></i>","<i class='fas fa-caret-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
            1900:{
                items:1
            }
        }
    });



// Add smooth scrolling to all links
// -----------------------------------

$("a.nav-link").on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top + 75
        },800, function(){
            window.location.hash = hash;
        });
    }
});



});