var setting = {
	show_tip : function(msg) {
		if($(".tip").length == 0) {
			var html = '<div class="tip">'+ msg +'</div>';
	        $("body").append(html);
	        setTimeout(function() { $(".tip").remove(); }, 1000);
	    }  
    },
	
	init : function() {
		var self = this;
		$("#user-img").on("click", function() { self.show_tip("请下载Buknow app修改头像"); });
		$("#user-name").on("click", function() { self.show_tip("请下载Buknow app修改昵称"); });
		$("#mobile").on("click", function() { self.show_tip("请下载Buknow app修改手机绑定"); });
	}
}
setting.init();