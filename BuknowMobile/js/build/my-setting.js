
var setting = {
	showTip : function(msg) {
		var $tip = $(".modal-noti");

		if($tip.hasClass("hide")) {
			$tip.text(msg).removeClass("hide");
			setTimeout(function() { 
				$tip.addClass("hide");
			}, 1000);
		}  
	},
	
	init : function() {
		var self = this;

		$("#user-img").on("click", function() { 
			self.showTip("请下载Buknow app修改头像"); 
		});

		$("#user-name").on("click", function() {
			self.showTip("请下载Buknow app修改昵称"); 
		});

		$("#mobile").on("click", function() { 
			self.showTip("请下载Buknow app修改手机绑定"); 
		});
	}
}

setting.init();