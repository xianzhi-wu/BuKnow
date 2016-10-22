//分享
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
   $(".overlay").show();
   $(".share_wrapper").css("bottom", "0");
}
function share_close() {
   $(".overlay").hide();
   $(".share_wrapper").css("bottom", "-208px");
}

//收藏
function collect(that) {
	//添加收藏
	 $(that).children(".collect").addClass("collected");
	 collect_tip("请先登录");
	//取消收藏
	//$(that).children(".collect").addClass("collected");
	
}

function collect_tip(msg) {
	$(".tip").text(msg).show();
	setTimeout(function() { $(".tip").hide() }, 1000);
}
