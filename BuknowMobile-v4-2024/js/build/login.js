var login = {
	$tip: $(".valid-tip"),

	checkUserName: function() {
		var value = $("#username").val();

		if (value == '' || value.length == 0) {
			this.$tip.text("请输入手机号");
			return false;
		} else {
			this.$tip.text("");
			return true;
		}
	},

	checkPassword: function() {
		var value = $("#password").val();

		if (value == '' || value.length == 0) {
			this.$tip.text("请输入密码");
			return false;
		} else {
			this.$tip.text("");
			return true;
		}
	}, 
	
	submit: function() {
		var self = this;
		$("#login").click(function(e) {
			e.preventDefault();
			if (self.checkUserName() && self.checkPassword()) {
				//登录成功
				location.href = "user-center.html";
			}
		});
	},

	init: function() {
		this.submit();
	}
}

login.init();