$(document).ready(function(){

  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.nav-mobile ul').toggleClass('is-open')
  })

  $('.my-class').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

})

