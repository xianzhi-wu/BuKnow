define(function(require) {
	var $ = require("zepto");
	//分享
	var share = function() {
		var title = document.title;
		var url = window.location;
		var picurl = "http://img1.buknow.com/Public/Uploads/onlineActivity/201504/27/55399f56777821739.jpg";
		
		//分享到腾讯微博
		function sharetoqq(){
			var shareqqstring='http://v.t.qq.com/share/share.php?title='+title+'&url='+url+'&pic='+picurl;  
			window.open(shareqqstring);
			share_close();  
		}
		//分享到新浪微博
		function sharetosina(){  
			var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;  
			window.open(sharesinastring); 
			share_close(); 
		}  
		//分享到QQ空间  
		function sharetoqqzone(){  
		   var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+title+'&url='+url+'&pics='+picurl;  
		   window.open(shareqqzonestring); 
		   share_close();  
		} 
		function share(){
		   var html = '<div class="overlay"></div>';
		   $("body").append(html);
		   $(".share-wrapper").css("bottom", "0");
		}
		function share_close() {
		   $(".overlay").remove();
		   $(".share-wrapper").css("bottom", "-208px");
		}
		
		$(".share-icon").parent().click(function() { share(); });
		$(".cancel-share").click(function() { share_close();});
		$("body").on("click", ".overlay", function() { share_close(); });
		
		$(".share-wrapper").on("click", "#sharetoqqzone", function() { sharetoqqzone(); });
		$(".share-wrapper").on("click", "#sharetoqq", function() { sharetoqq(); });
		$(".share-wrapper").on("click", "#sharetosina", function() { sharetosina(); });
	}();
	
	//收藏
	var deal_collect = function() {
		var $collect = $(".collect-area"),
			$collect_icon = $collect.children(".collect-icon");
		$collect.click(function() {		
			collect($collect_icon);
		});
	}();
	
	var shop_collect = function() {
		var $collect_icon = $(".header-icon-btn .collect-icon"),
			$collect = $collect_icon.parent();
		$collect.click(function() {
			collect($collect_icon);
		});
	}();
	
	//写评论
	var comment = function() {
		$(".comment-link").click(function() {
			show_tip("请先登录");  //如果未登录，如果已经登录，跳转到评论页面
		});
	}();
	
	function collect($c) {
		show_tip("请先登录");  //如果未登录
		//如果已经登录
		if($c.hasClass("collected")) { 
			$c.removeClass("collected");  //如果已经收藏，取消收藏
		} else {
			$c.addClass("collected"); 
		}
	}
	
	function show_tip(msg) {
		if($(".tip").length == 0) {
		    var html = '<div class="tip">'+ msg +'</div>';
		    $("body").append(html);
		    setTimeout(function() { $(".tip").remove(); }, 1000);
		}
	}
})