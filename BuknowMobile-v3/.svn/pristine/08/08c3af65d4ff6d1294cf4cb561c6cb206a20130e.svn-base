var img_viewer = {
	$overlay : null,
	imgScroll : null,
	$body : $("body"),
	st : null,
	
	show_img : function() {
		$(".ecoupon-list").hide();
		img_viewer.st = img_viewer.$body.scrollTop();
		var h = img_viewer.$body.height();
		var html = '<div class="overlay" style="z-index:9300;background:rgba(0, 0, 0, 1);"><div class="pic-viewer"><div id="div"><img src="images/kfc-5ikfc-12_c7.jpg"></div></div><a href="javascript:void(0);" class="hide-img">关闭</a></div>';
		img_viewer.$body.append(html);  //添加黑色透明背景
		img_viewer.$viewer = $(".pic-viewer"), img_viewer.$overlay = $(".overlay");
		img_viewer.$viewer.css({"height" : h + "px", "line-height" : h + "px"});	
		img_viewer.imgScroll = new IScroll(".pic-viewer", {zoom : true, scrollX : true, scrollY : true, mouseWheel : true, wheelAction : 'zoom', click : true });
	},
	
	hide_img : function() {
		if(img_viewer.$overlay != null && img_viewer.imgScroll != null && img_viewer.st != null) {
			img_viewer.imgScroll.destroy();
		    $(".ecoupon-list").show();
		    img_viewer.$body.scrollTop(img_viewer.st);
		    img_viewer.$overlay.remove();	
		}
	},
	
	_bindEvent : function() {
		this.$body.delegate(".ecoupon-pic","click", this.show_img);
		this.$body.delegate(".hide-img, .pic-viewer","click", this.hide_img);
	},
	
	init : function() {
		this._bindEvent();
	}
}
img_viewer.init();

