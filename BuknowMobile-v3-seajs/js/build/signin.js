define(function(require) {
	var $ = require("zepto");
	function checkUserName() {
		var value = $("#username").val();
		if (value == '' || value.length == 0) {
			$(".login-tips").text("请输入手机号").css("visibility", "visible");
			return false;
		} else {
			$(".login-tips").css("visibility", "hidden");
		}
		return true;
	}
	function checkPassword() {
		var value = $("#password").val();
		if (value == '' || value.length == 0) {
			$(".login-tips").text("请输入密码").css("visibility", "visible");
			return false;
		} else {
			$(".login-tips").css("visibility", "hidden");
		}
		return true;
	}
	
	$("#signin").click(function () {
		if (checkUserName() && checkPassword()) {
			//登录成功
			location.href = "http://www.baidu.com";
		}
	});
});