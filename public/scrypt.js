function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
  
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  /* --- modal menu --- */
  $(document).ready(function() {
    $('.modalBox').hide();
    $('.modal_open').click(function() {
      $('.modalBox').show(400);
    })
    $('.modal_close').click(function() {
      $('.modalBox').hide(400);
    })
  })



  /* --- gallery mobile--- */
  $(function() {
    var inWrap = $('.inner-wrapper');
      $('.prev').on('click', function() {
      inWrap.animate({left: '0%'}, 300, function(){
        inWrap.css('left', '-100%');
        $('.slide').first().before($('.slide').last());
      });
    });
  
    $('.next').on('click', function() {
      inWrap.animate({left: '-200%'}, 300, function(){
        inWrap.css('left', '-100%');
        $('.slide').last().after($('.slide').first());
      });
    });
  })


  /* --- gallery tablet--- */
  $(document).ready(function() {
    var mySwiper = new Swiper(".mySwiper", {
      autoplay: {
        delay: 2000,
      },
      speed: 800,
      loop: true,
      spaceBetween: 1,
      slidesPerView: 3,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  });



/* --- bg scale--- */
  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.part-01').css({
      width: (100 + scroll/25) + '%'
    })
  });