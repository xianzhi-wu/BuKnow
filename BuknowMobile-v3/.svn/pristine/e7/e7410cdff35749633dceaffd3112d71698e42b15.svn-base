var reset_pwd = {
	$tips : $(".error-tips"),
	
	checkCurrentPwd: function() {
		var value = $("#current-password").val();
		if (value == '' || value.length == 0) {
			reset_pwd.$tips.text("请输入当前密码").css("visibility", "visible");
			return false;
		} else {
			reset_pwd.$tips.css("visibility", "hidden");
		}
		return false;
	},	
	
	checkNewPwd: function() {
		var value = $("#new-password").val();
		if (value == '' || value.length == 0) {
			reset_pwd.$tips.text("请输入新密码").css("visibility", "visible");
			return false;
		} else if (!(/^[0-9 a-z A-Z !@#$%^&*]{6,16}$/.test(value))) {
			reset_pwd.$tip.text("密码格式错误(密码由6-16个字符组成)").css("visibility", "visible");
			return false;
		} else {
			reset_pwd.$tips.css("visibility", "hidden");
		}
		return false;
	},
	
	confirmPwd : function() {
		var value = $("#new-password2").val();
		if (value == '' || value.length == 0) {
			reset_pwd.$tips.text("请确认密码").css("visibility", "visible");
			return false;
		} else if ($("#new-password").val() != $("#new-password2").val()) {
			reset_pwd.$tip.text("两次新密码输入不一致").css("visibility", "visible");
			return false;
		} {
			reset_pwd.$tips.css("visibility", "hidden");
		}
		return false;
	},
	
	init : function() {
		var self = this;
		$(".reset-password input").on("focus", function() {self.$tips.css("visibility", "hidden");});
		$("#reset-password").click(function() {
			if(self.checkCurrentPwd() && self.checkNewPwd() && self.confirmPwd()) {
				//验证成功
				alert("2334")
			}
		})
	}
}
reset_pwd.init();