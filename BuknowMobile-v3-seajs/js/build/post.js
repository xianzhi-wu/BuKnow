define("build/post-func", function(require){
	var mdater = require("mdater"),
		EXIF = require("exif"),
		canvasFuns = require("canvasFuns");
	
	var post = {
		imgsData : new Array(), // 选择的图片集合(data内存对象,已经通过convas缩放处理的了)
		savimg_maxwidth : 750, // 保存的图片限制的宽度(自动用canvas重绘图片)
		$add01 : $("#addPic-01"), 
		$add02 : $("#addPic-02"),	
		count : 0,   //选择文件表单改变事件(表示选择了图片的)
		
		//绑定事件
		_bindEvent : function() {
			$("#f-pic").live("change", this.uploadPic);
			this.$add01.on("click", function(){ $("#f-pic").click(); });
			this.$add02.on("click", function(){ $("#f-pic").click(); });
			$(".uploaded-pics").delegate(".delete-area","click", this.deletePic);
			$('#end').mdater({ minDate : new Date() });
			$("#post").on("click", this.finish);
			$("#toPost").on("click", this.backToPost);
		},
		
		//提交发布
		finish : function() {
			//防止重复提交
			if($(this).text() == "发布") {
				var picOK = false, titleOK = false, reasonOK = false, timeOK = false, addressOK = false;
				if(post.checkPic()) {picOK = true;}
				if(post.checkTitle()) {titleOK = true;}
				if(post.checkReason()) {reasonOK = true;}
				if(post.checkTime()) {timeOK = true;}
				if(post.checkAddress()) {addressOK = true;}
				//验证成功
				//if(picOK&&titleOK&&reasonOK&&timeOK&&addressOK) {
					
					//如果未登录，弹出完善资料页面
					$("#complete-info").removeClass("page-on-right");
					$("#post-wrapper").addClass("page-to-left");
					setTimeout(function() {
						$("#post-wrapper").removeClass("page-to-left").addClass("page-on-left");
					}, 300);
					
					$(this).text("发布中");
					//未发布成功之间取消点击事件
					$("#post").unbind("click");
					
					//处理图片内容
					var datahtml = '';
					for(var i = 0; i < post.imgsData.length; i++) {
						datahtml = datahtml + '<input type="hidden" name="image_data'+i+'" id="image_data'+i+'" value="'+post.imgsData[i]+'" />';
					}
					$("#div-imgdata").html(datahtml);  
					
					//如果发布失败
					$(this).text("发布")
					//重新绑定点击事件
					$("#post").on("click", post.finish);
					
					//发布成功之后
					//post.showTip("恭喜你，发布爆料成功！");
				//}
			}
		},
		
		backToPost : function() {
			$("#complete-info").addClass("page-on-right");
			$("#post-wrapper").removeClass("page-on-left");
		},
		/*显示提示信息*/
		showTip : function(msg) {
			var html = '<div class="popup-tip">'+ msg +'</div>';
			$("body").append(html);
			setTimeout(function() {
				$(".popup-tip").remove();
			}, 1000);
		},
		
		checkPic : function() {
			if($(".uploaded-pics ul li").length == 0) {
				$("#pic-tip").text("*请上传图片");
				return false;
			} else {
				$("#pic-tip").text("");
			}
			return true;
		},
		checkTitle : function() {
			var value = $("#title").val();
			if(value == "" || value.length == 0) {
				$("#title-tip").text("*请填写标题");
				return false;
			} else {
				$("#title-tip").text("");
			}
			return true;
		},
		checkReason : function() {
			var value = $("#reason").val();
			if(value == "" || value.length == 0) {
				$("#reason-tip").text("*请填写推荐理由");
				return false;
			} else {
				$("#reason-tip").text("");
			}
			return true;
		},
		checkTime : function() {
			var value = $("#end").val();
			if(value == "" || value.length == 0) {
				$("#time-tip").text("*请输入截止时间");
				return false;
			} else {
				$("#time-tip").text("");
			}
			return true;
		},
		checkAddress : function() {
			var value = $("#address").text(); //$("#address")为div, 用text()
			if(value == "" || value.length == 0) {
				$("#address-tip").text("*请填写地址");
				return false;
			} else {
				$("#address-tip").text("");
			}
			return true;
		},
		//上传图片
		uploadPic : function() {
			//多次上传
			this.count++; 
			$("#f-pic").replaceWith('<input type="file" id="f-pic" capture="camera" accept="image/jpg,image/jpeg,image/png,image/gif" style="visibility:hidden;" title="'+ this.count +'">');
			//如果超过9张
			if($(".uploaded-pics ul li").length>=9) { post.showTip("最多只能上传9张图片！");  return false; }
			if(!post.$add01.parent(".camera-add").hasClass("hide")) {
				post.$add01.parent(".camera-add").addClass("hide");
				post.$add02.removeClass("hide");
			 }
			var html = '<li>' +
				   '<div class="delete-area hide"><i class="delete-icon"></i></div>' +
				   '<div class="load-pic"></div>' +
				   '<p class="hide">请重新上传</p>'+
				   '</li>';
			$(html).appendTo($(".uploaded-pics ul"));
			//如果图片超过9张就隐藏添加按钮
			if($(".uploaded-pics ul li").length>=9&&!post.$add02.hasClass("hide")) { post.$add02.addClass("hide"); }
			var url = "", file = this.files[0];
			//图片方向角
			var Orientation = null;
			//获取照片方向角属性，用户旋转控制  
			EXIF.getData(file, function() {EXIF.getAllTags(this);Orientation = EXIF.getTag(this, 'Orientation');});
	
			url = post.getObjectURL(file);
			var $latest =  $(".uploaded-pics ul li:last-child");
			var img = new Image();
			img.onload = function() {
				var width = this.width, height = this.height;
				// 生成图片区域
				var p_nw = 0, p_nh = 0;
				width <= post.savimg_maxwidth ? (p_nw = width, p_nh = height) : (p_nw = post.savimg_maxwidth, p_nh = height * p_nw / width);
				var img = canvasFuns.getImgToCanvasData(this, p_nw, p_nh, Orientation); //canvasFunc.js里的getImgToCanvasData
				for(var i = 0; i < post.imgsData.length; i++) {
					if(post.imgsData[i] == img) {
						$latest.remove();
						post.showTip("请勿重复上传图片");
						return false;
					}
				}
				post.imgsData[post.imgsData.length] = img;
				$latest.children(".load-pic").addClass("hide");
				$latest.children(".delete-area").removeClass("hide");
				$latest.css({"background" : "url(" + img + ")","background-size" : "cover","background-position" : "center"});  
			}
			img.onerror = function() {
				post.imgsData[post.imgsData.length] = null;
				$latest.children(".load-pic").addClass("hide");
				$latest.children("p.hide").removeClass("hide");
				$latest.children(".delete-area").removeClass("hide");
			}
			img.src = url;	
		},
		
		//删除图片
		deletePic : function() {
			var currI = $(this).parent(".uploaded-pics ul li").index();
			$(".uploaded-pics ul li").eq(currI).remove();
			post.imgsData.splice(currI, 1);
			/*少于9张就显示添加图片按钮*/
			if($(".uploaded-pics ul li").length <= 9&&post.$add02.hasClass("hide")) {post.$add02.removeClass("hide"); }
			/*删除完时 显示中间添加按钮*/
			if($(".uploaded-pics ul li").length == 0) {post.$add01.parent(".camera-add").removeClass("hide");post.$add02.addClass("hide");}
		},
		
		start_date : function() {
			var today = new Date();
			var year = today.getFullYear(), month = today.getMonth() < 9 ? ("0" + (today.getMonth() + 1)) : (today.getMonth() + 1), day = today.getDate(); 
			var start = year+'-'+month+'-'+day;
			$("#start").text(start);
		},
		
		getObjectURL : function(file) {
			var url = null;
			if (window.createObjectURL != undefined) { // basic
				url = window.createObjectURL(file);
			} else if (window.URL != undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if (window.webkitURL != undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		},
		
		init : function() {
			this.start_date();
			this._bindEvent(); 
		},
	}
	//post.init();
	return post;
}), define("build/post-ga", ["http://webapi.amap.com/maps?v=1.3&key=ce3b5cdd3320877043e663bd19e9e0e8&plugin=AMap.Geocoder"], function() {
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
	return ga;
}), define("build/post-login", function() {
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
	return login;
}), define(function(require) {
	var $ = require("zepto");
	    p = require("build/post-func"),
		g = require("build/post-ga"),
		l = require("build/post-login");
	p.init();
	g.init();
	l.init();
})