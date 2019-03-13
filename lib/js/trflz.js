$(document).ready(function() {


(function($) {

  "use strict"; // Start of use strict
  $("#phone").mask("+7 (999) 999-99-99");
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });


    
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

        // Modal popup$(function () 


})(jQuery); // End of use strict



$('.works').on('mouseup', function() {
  var classes=this.className;
  $("#"+classes.substr(6,7)+"-modal").fancybox().trigger('click');

});

$('#sendMessage').click(function(){	//функция добавления данных с формы заводов
  $('#sendMessage').prop('disabled',true);
  var tel=$('#phone').val();
  var desc=$('#message').val();
  var file=$('#photo').val();
  var agree=$("#customCheck").is(':checked') ;
   
  if( tel=='' || file =='' || agree==false){		
    $('#response').html('<span class="danger">Не все поля заполнены!</span>');
    $('#sendMessage').prop('disabled',false);
    
  }
  else{
   $.ajax({
     url:'mail/mail.php',
     type:'post',
     data: new FormData($('form')[0]),
     processData: false,
     contentType: false,
     cache: false,
     success:function(printdata){
       $('form').trigger("reset");
       $('#response').fadeIn().html(printdata);
       $("#sendMessage").prop('disabled',false);
       setTimeout(function(){
         $('#response').fadeOut("slow");

       },5000);
     }
   });			 
  }

});



});