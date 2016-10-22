$(function(){  
  var nav_fixed = function(){
	  $(window).on('scroll',function(){
	      if($(window).scrollTop()>$(".nav").offset().top){
		      $(".nav-box").addClass("fixed");
	      }else{
	          $(".nav-box").removeClass("fixed");
	      }
      })
  }();
})