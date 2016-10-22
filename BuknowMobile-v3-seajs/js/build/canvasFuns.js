define("canvasFuns", [], function(require, exports, module) {
	//canvas 一些公共操作的函数
	// 图片通过画布转换成canvas缩放后的数据(data)
	// nw,nh:生成图片的尺寸(画布的尺寸)
	var canvasFuns = {
		getImgToCanvasData : function(img, nw, nh, Orientation) {
			// 新的临时画布
			nw = Math.floor(nw);
			nh = Math.floor(nh);
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");
			$(canvas).attr({
				width: nw,
				height: nh
			});
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			var data = null;
			//修复ios  
			if (navigator.userAgent.match(/iphone/i)) {   
				if(Orientation != "" && Orientation != 1){  
					switch(Orientation){  
						case 6://需要顺时针（向左）90度旋转  
							this.rotateImg(img,'left',canvas);  
							break;  
						case 8://需要逆时针（向右）90度旋转  
							this.rotateImg(img,'right',canvas);  
							break;  
						case 3://需要180度旋转   
							this.rotateImg(img,'right',canvas);//转两次  
							this.rotateImg(img,'right',canvas);  
							break;  
					}         
				}   
				data = canvas.toDataURL("image/jpeg");
			}else if (navigator.userAgent.match(/Android/i)) {// 修复android  
				//var encoder = new JPEGEncoder();
				//data = encoder.encode(ctx.getImageData(0, 0, canvas.width, canvas.height));
				data = canvas.toDataURL("image/jpeg");
			}else{
				if(Orientation != "" && Orientation != 1){   
					switch(Orientation){  
						case 6://需要顺时针（向左）90度旋转  
							this.rotateImg(img,'left',canvas);  
							break;  
						case 8://需要逆时针（向右）90度旋转   
							this.rotateImg(img,'right',canvas);  
							break;  
						case 3://需要180度旋转  
							this.rotateImg(img,'right',canvas);//转两次  
							this.rotateImg(img,'right',canvas);  
							break;  
					}         
				}
				data = canvas.toDataURL("image/jpeg");
			}
			return data;
		},
		//对图片旋转处理 
		rotateImg : function(img, direction,canvas) {    
			//最小与最大旋转方向，图片旋转4次后回到原方向    
			var min_step = 0;    
			var max_step = 3;    
			//var img = document.getElementById(pid);    
			if (img == null)return;    
			//img的高度和宽度不能在img元素隐藏后获取，否则会出错    
			var height = img.height;    
			var width = img.width;    
			//var step = img.getAttribute('step');    
			var step = 2;    
			if (step == null) {    
				step = min_step;    
			}    
			if (direction == 'right') {    
				step++;    
				//旋转到原位置，即超过最大值    
				step > max_step && (step = min_step);    
			} else {    
				step--;    
				step < min_step && (step = max_step);    
			}    
			//旋转角度以弧度值为参数    
			var degree = step * 90 * Math.PI / 180;    
			var ctx = canvas.getContext('2d');    
			switch (step) {    
				case 0:    
					canvas.width = width;    
					canvas.height = height;    
					ctx.drawImage(img, 0, 0);    
					break;    
				case 1:    
					canvas.width = height;    
					canvas.height = width;    
					ctx.rotate(degree);    
					ctx.drawImage(img, 0, -height);    
					break;    
				case 2:    
					canvas.width = width;    
					canvas.height = height;    
					ctx.rotate(degree);    
					ctx.drawImage(img, -width, -height);    
					break;    
				case 3:    
					canvas.width = height;    
					canvas.height = width;    
					ctx.rotate(degree);    
					ctx.drawImage(img, -width, 0);    
					break;    
			}    
		} 
	}
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = canvasFuns;
	} else {
	    window.canvasFuns = canvasFuns;
	}
})