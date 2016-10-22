define(function(require) {
	var $ = require("zepto"),
	swipe = require("swipe"),
	iscroll = require("iScroll");
		
    $("#j-sliders").on("click", "a", function () {
		var $self = $(this);
		usertrack.location($self.attr("href"));
		return false;
	});
	
	new swipe(document.getElementById("j-sliders"), {
		startSlide: 1 - 1, 
		continuous: "1" ? true : false, 
		auto: "5000" ? parseInt("5000", 10) : 0,
		pointers: "1" ? document.getElementById("j-pointers") : false
	});
	
	//热门商家滚动
	new iscroll('.brands-list', { 
		  mouseWheel: true,
		  scrollX: true, 
		  scrollY: false, 
		  eventPassthrough: true, 
		  preventDefault: false
	});
	
	//打开关闭菜单
	var menu_func = function() {
		var $menu = $(".menu-dropdown"), $header = $(".index-header");
		$("#nav-menu").click(function(e) {
			e.stopPropagation(); //阻止冒泡
			if($(".overlay").length == 0) {
				var html = '<div class="overlay"></div>';
				$("body").append(html);  //添加黑色透明背景
				$header.bind("click", function() {close_menu();});  //头部绑定关闭菜单功能
				$menu.css({"height":"160px"});
				if(!$header.hasClass("purple-bg")&&$(window).scrollTop()<=20) {$header.addClass("purple-bg");} //打开菜单时如果头部为透明背景，添加紫色背景。
			} else {
				close_menu();
				$header.unbind("click");  //头部解除绑定关闭菜单功能
			}
		});
		$("body").on("click", ".overlay", function() { close_menu(); });
		//关闭
		function close_menu() {
			$(".overlay").remove();
			if($header.hasClass("purple-bg")&&$(window).scrollTop()<=20) {$header.removeClass("purple-bg");} //关闭菜单式如果头部为紫色背景并且页面往上滚动距离小于20px,移除紫色背景
			$menu.css({"height" : "0"});
		}
	}();
	
	var nav_fixed = function(){
		var $header = $(".index-header");
		$(window).on('scroll',function(){
			if($(window).scrollTop()>20){
				$header.addClass("purple-bg");
			}else{
				if($(".overlay").length != 0 && $header.hasClass("purple-bg")) {return false;} //如果菜单已经打开，并且页面往上滚动距离小于20px，不移除紫色背景
				$header.removeClass("purple-bg");
			}
		})
	}();
})