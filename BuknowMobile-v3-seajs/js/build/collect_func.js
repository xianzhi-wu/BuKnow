define(function(require) {
	var $ = require("zepto");
	var collect_func = {
		common : { data_type : null, $section_a : null, $section_c : null},
		//点击切换标签
		changeSection : function() {
			if($(this).children("a").hasClass("active"))  return;
			var $edit = $(".edit");
			e.common.data_type = $(this).attr("data-type");
			$edit.attr("data-type",e.common.data_type);
			$(this).children("a").addClass("active").parent().siblings().children("a").removeClass("active");
			e.showSection(e.common.data_type);
			if($edit.text() != "编辑" && e.common.$section_c.length != 0) $edit.text("编辑");
		},
		//显示那个类别的列表
		showSection : function(s) {
			if(e.common.$section_c != null) {
				var $delete = e.common.$section_c.children(".delete-area");
				if(!($delete.hasClass("hide"))) $delete.addClass("hide");
				if(e.common.$section_c.hasClass("pl")) e.common.$section_c.removeClass("pl");
			}
			var $section_showed = $(".collection section").filter('[data-type="'+ s +'"]');
			$section_showed.removeClass("hide").siblings().not(".mycol-nav").addClass("hide");
			e.common.$section_a = $(".collection section").filter('[data-type="'+ s +'"]').children("a");
			e.common.$section_c = e.common.$section_a.length ? e.common.$section_a : $section_showed.children("ul").children("li");
			if(e.common.$section_c.length == 0) { 
				$(".no-result").removeClass("hide");//如果列表个数为0，显示没收藏提示
				$(".edit").text("");
			}
		},
		
		/*显示删除按钮*/
		toggleDeleteBtn : function() {
			var $delete = e.common.$section_c.children(".delete-area");
			if($(this).text() == "编辑") {
				$(this).text("完成");
				e.common.$section_c.addClass("pl");
				$delete.removeClass("hide");
			} else {
				$(this).text("编辑");
				e.common.$section_c.removeClass("pl");
				$delete.addClass("hide");
			}	
		},
		
		/*删除*/
		deleteItem : function() {
			$(this).parent().remove();
			e.showTip("删除成功");
			if(e.common.$section_c.length == 0) {
				
			}
			return false;
		},
		
		/*显示提示信息*/
		showTip : function(msg) {
			if($(".popup-tip").length == 0) {
				var html = '<div class="popup-tip">'+ msg +'</div>';
				$("body").append(html);
				setTimeout(function() {
					$(".popup-tip").remove();
				}, 1000);
			}
		},
		
		_bindEvent : function() {
			$(".mycol-nav ul li").on("click", this.changeSection);
			$(".edit").on("click", this.toggleDeleteBtn);
			$(".delete-area").on("click", this.deleteItem);
		},
		
		init : function() {
			e = collect_func; //初始化e = collect_func.公用
			e._bindEvent();
			$(".mycol-nav ul li").each(function() {
				if($(this).children("a").hasClass("active")) {
					e.common.data_type = $(this).attr("data-type");
					$(".edit").attr("data-type",e.common.data_type);
					e.showSection(e.common.data_type);
					return false;
				}
			});
		}
	};
	collect_func.init();
})