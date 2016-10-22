define(function(require) {
	var $ = require("zepto");
	//获取地址
	var ga = {
		map_init : function() {
			$("#address-tip").text("＊正在获取你的当前位置...");
			var map, geolocation;
			//加载地图，调用浏览器定位服务
			map = new AMap.Map("");
			map.plugin('AMap.Geolocation', function() {
				geolocation = new AMap.Geolocation({
					enableHighAccuracy: true,//是否使用高精度定位，默认:true
					timeout: 10000,          //超过10秒后停止定位，默认：无穷大
				});
				map.addControl(geolocation);
				geolocation.getCurrentPosition();
				AMap.event.addListener(geolocation, 'complete', ga.onComplete);//返回定位信息
				AMap.event.addListener(geolocation, 'error', ga.onError);      //返回定位出错信息
			});
		},
		
		onComplete : function(data) {
			$("#address-tip").text("");
			var lnglatXY = [data.position.getLng(), data.position.getLat()]; //已知点坐标
			new ga.regeocoder(lnglatXY);
		},
		
		regeocoder : function(lnglatXY) {
			var geocoder = new AMap.Geocoder({
				radius: 1000,
				extensions: "all"
			});        
			geocoder.getAddress(lnglatXY, function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
					ga.geocoder_CallBack(result);
				}
			});
		},
		
		geocoder_CallBack : function(data) {
			var address = data.regeocode.formattedAddress; //返回地址描述
			$("#address").text(address);
		},
		//解析定位错误信息
		onError : function() {
			$("#address-tip").text("＊自动获取位置失败");
		},
		
		init : function() {
			$(".get-address").on("click", this.map_init);
		}
	}
	ga.init();
	
	//注册登录
	var login = {
		$tip : $(".login-tip"),
		countdown : 60, //倒计时
		
		checkMobile : function() {
			var pregMobile = /^(1(([3578][0-9])|(47)))\d{8}$/;
			var value = $("#mobile").val();
			
			if (value == '' || value.length == 0) {
				this.$tip.text("请输入手机号").css("visibility", "visible");
				return false;
			} else if (pregMobile.test(value) === false) {
				this.$tip.text("手机号码格式错误").css("visibility", "visible");
				return false;
			} else {
				this.$tip.css("visibility", "hidden");
			}
			return true;
		},
		
		checkVericode : function() {
			var value = $("#vericode").val();
			
			if (value == '' || value.length == 0) {
				this.$tip.text("请输入手机短信验证码").css("visibility", "visible");
				return false;
			} else {
				this.$tip.css("visibility", "hidden");
			}
			return false;
		},
		
		checkPassword : function() {
			var value = $("#password").val();			  
			var pregPassword = /^[0-9a-zA-Z!@#$%^&*]{6,16}$/;
			
			if (value == '' || value.length == 0) {
				this.$tip.text("请输入密码").css("visibility", "visible");
				return false;
			} else if (pregPassword.test(value) === false) {
				this.$tip.text("密码格式错误").css("visibility", "visible");
				return false;
			} else {
				this.$tip.css("visibility", "hidden");
			}
			return true;
		},
		
		timer : function(obj) {
			if (this.countdown == 0) { 
				obj.text("获取");
				this.countdown = 60; 
				return;
			} else { 
				obj.text("重新获取(" + this.countdown + "s)"); 
				this.countdown--; 
			} 
			setTimeout(function() { login.timer(obj) },1000) ;
		},
		
		tip : function(msg) {
			if ($(".popup-tip").length == 0){ 
			    var html = '<div class="popup-tip">'+ msg +'</div><div class="overlay"></div>'; 
				$("body").append(html);
			    setTimeout(function() { $(".overlay, .popup-tip").remove(); }, 600); 
			}
		},
		
		init : function() {
			$(".get-code").click(function() {
				if(login.checkMobile && login.countdown) {
					login.timer($(this));
					login.tip("验证码已发送到您手机");
				}
			});
			
			$("#finish").click(function() {
				if (login.checkMobile && login.checkVericode) {
					alert("12344");
				}
			});
		}
	}
	
	login.init();
})