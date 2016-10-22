//初始化地图对象，加载地图
var mapObj
function mapInit() {
	 mapObj = new AMap.Map("map",{
		dragEnable:true,
		zoomEnable:true,
		zooms:[3,18],
		//二维地图显示视口
		view: new AMap.View2D({
			center:new AMap.LngLat(114.339809,30.50624),//地图中心点
			zoom:16 //地图显示的缩放级别
		})
	});
	var marker = new AMap.Marker({
		position:mapObj.getCenter(),
		size:new AMap.Size(23,25),
		content: "<i class='map-location'></i><div class='marker'>外婆家</div>"
	});
	marker.setMap(mapObj);

	mapObj.plugin('AMap.Geolocation', function () {
		geolocation = new AMap.Geolocation({
			enableHighAccuracy: true,//是否使用高精度定位，默认:true
			timeout: 10000,          //超过10秒后停止定位，默认：无穷大
			maximumAge: 0,           //定位结果缓存0毫秒，默认：0
			convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
			showButton: true,        //显示定位按钮，默认：true
			buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
			buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
			showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
			showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
			panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
			zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
		});
		mapObj.addControl(geolocation);
	});

	mapObj.plugin(["AMap.ToolBar"],function(){
		toolBar = new AMap.ToolBar();
		mapObj.addControl(toolBar);
	});
}
mapInit();