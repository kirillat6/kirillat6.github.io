$(document).ready(function(){
    $('.feedback__slider').slick({
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrows/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrows/right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows:false
              }
            }
        ]
      });

      $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });
  
      $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
    });