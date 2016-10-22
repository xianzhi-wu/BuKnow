define(function(require) {
	var $require = require("zepto");
	var $wrapper = $(".new-cate-wrapper"),
		$header_title = $(".header-title");
	
	//点击打开或关闭筛选窗口	
	$("#header-filter-btn").click(function() {
		if($(".overlay").length == 0) {
			var html = '<div class="overlay" style="z-index:8800;"></div>';
			$("body").append(html);  //添加透明背景
			$header_title.bind("click", function() {close_filter();});
			$wrapper.removeClass("hide");
		} else {
			close_filter();
			$header_title.unbind("click");
		}
	});
	
	$("body").on("click", ".overlay", function() {
		close_filter();
	});
	//关闭筛选窗口
	function close_filter() {
		$(".overlay").remove();
		$wrapper.addClass("hide");
	}
	
	//选择分类
	$(".new-cate a").click(function() {
		if($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
			if($(this).index() == 0) {
				$(this).siblings().removeClass("on");
			} else {
				$(".new-cate a").eq(0).removeClass("on");
			}
		}
	});
	
	$(".confirm-btn").click(function(){
		close_filter();
	});
})