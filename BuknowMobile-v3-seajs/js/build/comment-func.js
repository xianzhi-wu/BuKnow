define(function(require) {
	var $ = require("zepto");
	
	var $stars = $(".comment-stars"), $star = $("a", $stars), iScore = 0;
	$star.click(function() {
		iScore = $(this).index();  //评分
		for(var i = 0; i < $star.length; i++) {
			$star[i].className = i < iScore ? "star-on" : "";
		}
	});
	
	$(".comment-btn").click(function() {
		if(checkpoint() && checktextarea()) {
		}
	});
	
	function checkpoint() {
		if(iScore == 0) {
			$(".comment-tip").text("评分不能为0").show();
			hide_tip();
			return false;
		}
		return true;
	}
	function checktextarea() {
		var value = $("#comment-tarea").val();
		if(value.length == "") {
			$(".comment-tip").text("评论不能为空").show();
			hide_tip();
			return false;
		} else if(strlen(value) < 20){
			$(".comment-tip").text("评论不能少于10个字").show();
			hide_tip();
			return false;
		}
		return true;
	}	
	
	function hide_tip() {
		setTimeout(function() {
			$(".comment-tip").hide();
		}, 1500);
	}
	
	//去除所有空格
	function removeAllSpace(str) {
		return str.replace(/\s+/g, "");
	}
	function strlen(val) {
		var len = 0, value = removeAllSpace(val);
		for (i = 0; i < value.length; i++) {
			var char = value.charCodeAt(i);
			if ((char >= 0x0001 && char <= 0x007e) || (0xff60 <= char && char <= 0xff9f)) {
				len++;
			}
			else {
				len += 2;
			}
		}
		return len;
	}
})