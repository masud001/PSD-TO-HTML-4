$(document).ready(function(){
    // owl carousel plugine start here
    // -------------------------------
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
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



    
    // window.onscroll = function() {myFunction()};
    // var navbar = document.getElementById("header");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    // if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    // } else {
    //     navbar.classList.remove("sticky");
    // }
    // };



});