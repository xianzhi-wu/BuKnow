$(function() {
	//Append overlay div on page load.
    $("body").append('<div class="menuOverlay" style="display:none;"></div>');

    //Mega menu hover animation.
    $('.navItem').hover(function(){
		var getClass = jQuery(this).find('a').attr('class').split(' ')[0];
        $('#' + getClass).stop().fadeIn();
        //Add hover class to top level nav items
        $(this).find('a').addClass('underline');
        //Fade In page overlay
        $(".menuOverlay").stop().fadeIn();
    }, function() {
		var getClass = jQuery(this).find('a').attr('class').split(' ')[0];
        $('#' + getClass).stop().fadeOut('fast');
        //Remove hover class to top level nav items
        $(this).find('a').removeClass('underline');
        //Fade Out page overlay
        $(".menuOverlay").stop().fadeOut('fast');
    });
})

$(window).load(function() {
	$("#gridLayout .item .bannerContent").css("display", "none");
    $('.shardBanner .bannerContent').delay(500).fadeIn(1600);
});

//Load sub banner content on hover.
$(document).ready(function() {
	$("#gridLayout .item").hover(function() {
		$(this).find(".bannerContent").fadeIn();
	}, function() {
		$(this).find(".bannerContent").fadeOut();
	});
});