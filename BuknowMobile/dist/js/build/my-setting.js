(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var setting = {
  showTip: function showTip(msg) {
    var $tip = $(".popup-tip");
    if ($tip.hasClass("hide")) {
      $tip.text(msg).removeClass("hide");
      setTimeout(function () {
        $tip.addClass("hide");
      }, 1000);
    }
  },
  init: function init() {
    var self = this;
    $("#user-img").on("click", function () {
      self.showTip("请下载Buknow app修改头像");
    });
    $("#user-name").on("click", function () {
      self.showTip("请下载Buknow app修改昵称");
    });
    $("#mobile").on("click", function () {
      self.showTip("请下载Buknow app修改手机绑定");
    });
  }
};
setting.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9idWlsZC9teS1zZXR0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQSxJQUFJLE9BQU8sR0FBRztFQUNiLE9BQU8sRUFBRyxTQUFBLFFBQVMsR0FBRyxFQUFFO0lBQ3ZCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFFMUIsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO01BQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztNQUNsQyxVQUFVLENBQUMsWUFBVztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztNQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDO0lBQ1Q7RUFDRCxDQUFDO0VBRUQsSUFBSSxFQUFHLFNBQUEsS0FBQSxFQUFXO0lBQ2pCLElBQUksSUFBSSxHQUFHLElBQUk7SUFFZixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFXO01BQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztNQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUVGLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVc7TUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDLENBQUM7RUFDSDtBQUNELENBQUM7QUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcbnZhciBzZXR0aW5nID0ge1xuXHRzaG93VGlwIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0dmFyICR0aXAgPSAkKFwiLnBvcHVwLXRpcFwiKTtcblxuXHRcdGlmKCR0aXAuaGFzQ2xhc3MoXCJoaWRlXCIpKSB7XG5cdFx0XHQkdGlwLnRleHQobXNnKS5yZW1vdmVDbGFzcyhcImhpZGVcIik7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBcblx0XHRcdFx0JHRpcC5hZGRDbGFzcyhcImhpZGVcIik7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9ICBcblx0fSxcblx0XG5cdGluaXQgOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQkKFwiI3VzZXItaW1nXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IFxuXHRcdFx0c2VsZi5zaG93VGlwKFwi6K+35LiL6L29QnVrbm93IGFwcOS/ruaUueWktOWDj1wiKTsgXG5cdFx0fSk7XG5cblx0XHQkKFwiI3VzZXItbmFtZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5zaG93VGlwKFwi6K+35LiL6L29QnVrbm93IGFwcOS/ruaUueaYteensFwiKTsgXG5cdFx0fSk7XG5cblx0XHQkKFwiI21vYmlsZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkgeyBcblx0XHRcdHNlbGYuc2hvd1RpcChcIuivt+S4i+i9vUJ1a25vdyBhcHDkv67mlLnmiYvmnLrnu5HlrppcIik7IFxuXHRcdH0pO1xuXHR9XG59XG5cbnNldHRpbmcuaW5pdCgpOyJdfQ==
