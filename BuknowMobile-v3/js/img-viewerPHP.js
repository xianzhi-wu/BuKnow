var img_viewer = {
	$overlay : null,
	$body : $("body"),
	imgScroll: null,
	st : 0,
	
	startX : 0,
	endX : 0, 
	startY : 0, 
	endY : 0,
	movePrevent : false,
	$viewer : null,
	page : 1,
	whichpic : 0,
	
	show_img : function() {
		var bigimg = $(this).attr("src");
		img_viewer.st = img_viewer.$body.scrollTop();
		img_viewer.whichpic = $(this).attr("data-value");
		$(".ecoupon-list").hide();
		var h = img_viewer.$body.height();
		var html = '<div class="overlay" style="z-index:9300;background:rgba(0, 0, 0, 1);"><div class="picCount"><span class="curPic">1</span>/<span class="totalPic">50</span></div><div class="pic-viewer"><div class="img" id="img'+ img_viewer.whichpic +'"><img src="'+bigimg+'"><div class="load-pic"></div></div></div><a href="javascript:void(0);" class="hide-img">关闭</a></div>';
		img_viewer.$body.append(html); 
		$(".curPic").text(img_viewer.whichpic);
		img_viewer.hide_loading(img_viewer.whichpic);
		img_viewer.$overlay = $(".overlay");
		img_viewer.$viewer = $(".pic-viewer");
		img_viewer.$viewer.css({"line-height" : h + "px"});	
		img_viewer.imgScroll = new IScroll(".pic-viewer", { scrollY : true, mouseWheel : true, click : true });
	},
	
	hide_img : function() {
		if(img_viewer.$overlay != null) {
		    $(".ecoupon-list").show();
			img_viewer.imgScroll.destroy();
		    img_viewer.$body.scrollTop(img_viewer.st);
		    img_viewer.$overlay.remove();	
		}
	},
	
	hide_loading : function(id) {
		$("#img"+ id +" img").ready(function(){ $("#img"+ id +" .load-pic").remove(); });
	},
	
	_bindEvent : function() {
		this.$body.delegate(".ecoupon-pic img","click", this.show_img);
		this.$body.delegate(".hide-img, .pic-viewer","click", this.hide_img);
		this.$body.delegate(".overlay", "touchstart", function(e){ img_viewer.onStart(e.changedTouches[0]); });
        this.$body.delegate(".overlay", "touchmove", function(e){ img_viewer.onMove(e.changedTouches[0]); });
        this.$body.delegate(".overlay", "touchend", function(e){ img_viewer.onEnd(e.changedTouches[0]); });
	},
	
	//开始滑动时
	onStart : function(e) {
		if(this.movePrevent == true){ event.preventDefault(); return false; }
	    this.startX = e.pageX;
	    this.startY = e.pageY;
    },
	onMove : function(e) {
		event.preventDefault();
		if(this.movePrevent == true){ return false;}
	},
	
	onEnd : function(e) {
		if(this.movePrevent == true){ event.preventDefault(); return false;}
		// 抬起点，页面位置
		this.endX = e.pageX;
		this.endY = e.pageY;
		this.movePrevent = true; //页面动画时阻止触发 
		// swipe事件默认大于20px才会触发
		if(Math.abs(this.endX-this.startX)<=15) {
			this.movePrevent = false;
		}else{
			if(Math.abs(this.endY-this.startY)<=60){
				if(this.endX>this.startX){
					this.prePic();
				}else{
					this.nextPic();
				}
			}else{
				this.movePrevent = false;
			}
		}
	},
	
    //下一张图片
    nextPic : function() {
		var self = this;
		self.page = self.whichpic+1;
		var ecouponshopid = $('#ecouponshopid').val();
		var url = "/detail/getecoupon_pic";
		$.post(url,{'page':self.page,'ecouponshopid':ecouponshopid},function(data){
			var data = $.trim(data);
			img_viewer.whichpic++;
		    $(".curPic").text(self.whichpic);
			self.$viewer.addClass("tran-effect");
			//left:100%;排在第一个<div class="img">的后面
			self.$viewer.append('<div class="img" style="left:100%;" id="img'+ self.whichpic +'"><img src="'+data+'"><div class="load-pic"></div>');
			self.$viewer.css("left","-100%");
			self.moving();
			self.hide_loading(self.whichpic);
		});
    },
    //前一张图片
    prePic : function() {
		var self = this;
		if(self.whichpic <= 1){
			self.page = 1;
			self.movePrevent = false;
			return;
		}else{
			self.page = self.whichpic-1;
		}
		var ecouponshopid = $('#ecouponshopid').val();
		var url = "/detail/getecoupon_pic";
		$.post(url,{'page':self.page,'ecouponshopid':ecouponshopid},function(data){
			var data = $.trim(data);
			self.whichpic--;
			$(".curPic").text(self.whichpic);
			self.$viewer.addClass("tran-effect");
			//left:-100%;排在第一个<div class="img">的前面，css3选择器是以子节点在文档中的顺序选取，而不是根据在浏览器显示的实际位置
			self.$viewer.append('<div class="img" style="left:-100%;" id="img'+ self.whichpic +'"><img src="'+data+'"><div class="load-pic"></div></div>');
			self.hide_loading(self.whichpic);
			self.$viewer.css("left","100%");
			self.moving();
		});
    }, 
	
    moving : function() {
		var self = this;
		self.movePrevent = true;
		setTimeout(function() {
			self.$viewer.removeClass("tran-effect").css("left","0");
			$(".img:first-child", self.$viewer).remove();   
			$(".img:first-child", self.$viewer).css("left", "0");  //移除第一个div, 第二个就变成第一个
			img_viewer.imgScroll.destroy();
			img_viewer.imgScroll = new IScroll(".pic-viewer", { scrollY : true, mouseWheel : true, click : true });
			self.movePrevent = false;
		}, 300);
	},
	
	init : function() {
		this._bindEvent();
	}
}

img_viewer.init();