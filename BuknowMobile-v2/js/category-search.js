$(function(){
	var $selector = $(".selector");
	//分类选择滚动	    
	function iscroll(scroller) {
		this._scroll = null;
		this.scroller = scroller;
	}
	iscroll.prototype.s = function() {
		if(this._scroll) {
		    this._scroll.refresh();
		} else {
			this._scroll= new IScroll(this.scroller, {
				scrollbars: true,
				mouseWheel: true,
			}); 
		}
		document.addEventListener('touchmove', preventDefault, false);
    }
	var s1 = new iscroll("#selector1");
	var s2 = new iscroll("#selector2");
	//点击显示、隐藏分类列表
	$(".category>a").click(function() {	
		if($(".overlay").size() == 0) {
			var html = "<div class='overlay'></div>";	
			$("body").append(html);  //添加黑色透明背景
			$(".overlay").bind("click", function(){ selector_hide(); });  //黑色透明绑定点击事件		
		} else {
			if($(this).hasClass("on")) {
				selector_hide(); 
				return false;  //第二次（class为on之后）点击关闭相对应选项
			} 		   	
		}
		$selector.addClass("hide").eq($(this).index()).removeClass("hide");	//显示相对应选项列表
		$(this).addClass("on").siblings().removeClass("on");  //菜单选项箭头向上
		if($(this).index() == 0 ) {
			s1.s();
		} else if($(this).index() == 1) {
			s2.s();
		}
	});	

	//隐藏黑色透明背景和分类列表
	function selector_hide() {
		$(".overlay").remove(); //解除绑定
		$(".category>a.on").removeClass("on");
		$selector.addClass("hide");    
		document.removeEventListener('touchmove', preventDefault, false); 
	}
    
	//阻止默认事件
	function preventDefault(e) { e.preventDefault(); };  
	//选择分类
    $(".selector ul li a").click(function(){
		$("a.active", $(this).parents(".selector")).removeClass("active");
		var $link = $(this);
		$link.addClass("active");
		var text = $link.text();
		switch(text) {
			case "全部美食":
			  text = "美食";
			  break;
			case "全部购物":
			  text = "购物";
			  break;
		}
		$(".category>a.on span").text(text);
		selector_hide();
	});
	
	//分类里面
	$("#selector2 ul li>span").click(function(){
		var $selector_sub = $(".selector-sub", $(this).parent());
		if($selector_sub.hasClass("hide")) {
			$selector_sub.removeClass("hide");
		} else {
			$selector_sub.addClass("hide");
		}
		s2.s();
	});
})