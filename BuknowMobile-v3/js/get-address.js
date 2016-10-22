$(function() {
	var get_address = {
		map_init : function() {
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
				AMap.event.addListener(geolocation, 'complete', _this.onComplete);//返回定位信息
				AMap.event.addListener(geolocation, 'error', _this.onError);      //返回定位出错信息
			});
		},
		
		onComplete : function(data) {
			var lnglatXY = [data.position.getLng(), data.position.getLat()]; //已知点坐标
			new _this.regeocoder(lnglatXY);
		},
		
		regeocoder : function(lnglatXY) {
			var geocoder = new AMap.Geocoder({
				radius: 1000,
				extensions: "all"
			});        
			geocoder.getAddress(lnglatXY, function(status, result) {
				if (status === 'complete' && result.info === 'OK') {
					_this.geocoder_CallBack(result);
				}
			});
		},
		
		geocoder_CallBack : function(data) {
			var address = data.regeocode.formattedAddress; //返回地址描述
			$("#address").text(address);
		},
		//解析定位错误信息
		onError : function(data) {
		    $("#address-tip").text("＊自动获取位置失败");
		},
		
		init : function() {
			_this = this;
			$(".get-address").on("click", this.map_init);
		}
	}
	get_address.init();
});
