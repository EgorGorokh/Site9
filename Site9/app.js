$(function(){

let header= $("#header");
let intro= $("#intro");
let introH ;
let scrollPos = $(window).scrollTop();




$(window).on("scroll load resize", function(){
    let introH = intro.innerHeight();
scrollPos = $(this).scrollTop();

if(scrollPos > introH){
    header.addClass("fixed");
}
else {
    header.removeClass("fixed");
}


});

let nav = $("#nav");
$("#navToggle").on("click", function(event){
    event.preventDefault();


nav.toggleClass("show");

});

 

let slider =  $("#reviewsSlider");
slider.slick({
    infinite:true,
    slides:1,
    slidesToScroll:1,
    fade: true,
    arrows:false

});



});