(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var socialSharing = {
  $shareWrapper: $(".share-wrapper"),
  $overlay: $(".overlay"),
  init: function init() {
    $(".share-icon").parent().click(this.openShare.bind(this));
    $(".cancel-share").click(this.closeShare.bind(this));
    socialSharing.$shareWrapper.on("click", "#sharetoqqzone", this.shareToQQZone.bind(this));
    socialSharing.$shareWrapper.on("click", "#sharetoqq", this.shareToQQ.bind(this));
    socialSharing.$shareWrapper.on("click", "#sharetosina", this.shareToSina.bind(this));
  },
  openShare: function openShare() {
    socialSharing.$overlay.removeClass("hide");
    socialSharing.$shareWrapper.css("bottom", "0");
  },
  closeShare: function closeShare() {
    socialSharing.$overlay.addClass("hide");
    socialSharing.$shareWrapper.css("bottom", "-208px");
  },
  shareToQQZone: function shareToQQZone() {
    this.share("QQ空间");
  },
  shareToQQ: function shareToQQ() {
    this.share("腾讯微博");
  },
  shareToSina: function shareToSina() {
    this.share("新浪微博");
  },
  share: function share(platform) {
    var title = document.title;
    var url = window.location;
    var picurl = "http://img1.buknow.com/Public/Uploads/onlineActivity/201504/27/55399f56777821739.jpg";
    var shareUrl, shareWindow;
    switch (platform) {
      case "QQ空间":
        shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + picurl;
        break;
      case "腾讯微博":
        shareUrl = 'http://v.t.qq.com/share/share.php?title=' + title + '&url=' + url + '&pic=' + picurl;
        break;
      case "新浪微博":
        shareUrl = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
        break;
    }
    shareWindow = window.open(shareUrl);
    this.closeShare();
  }
};
var userActions = {
  init: function init() {
    this.initCollect(".collect-area");
    this.initCollect(".icon-btn");
    $(".comment-link").click(this.showCommentTip);
  },
  initCollect: function initCollect(selector) {
    $(selector).on("click", ".collect-icon", this.collect);
  },
  collect: function collect() {
    if (!userActions.isLoggedIn()) {
      userActions.showTip("请先登录");
      return;
    }
    var $collectIcon = $(this);
    $collectIcon.toggleClass("collected");
  },
  isLoggedIn: function isLoggedIn() {
    return false;
  },
  showCommentTip: function showCommentTip() {
    if (!userActions.isLoggedIn()) {
      userActions.showTip("请先登录");
    } else {}
  },
  $popupTip: $(".popup-tip"),
  showTip: function showTip(message) {
    userActions.$popupTip.text(message).removeClass("hide");
    setTimeout(function () {
      userActions.$popupTip.addClass("hide");
    }, 1500);
  }
};
socialSharing.init();
userActions.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9idWlsZC9zb2NpYWwtc2hhcmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxhQUFhLEdBQUc7RUFDaEIsYUFBYSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUNsQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztFQUV2QixJQUFJLEVBQUUsU0FBQSxLQUFBLEVBQVc7SUFDYixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwRCxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEYsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3hGLENBQUM7RUFFRCxTQUFTLEVBQUUsU0FBQSxVQUFBLEVBQVc7SUFDbEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7RUFDbEQsQ0FBQztF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V0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN2RCxVQUFVLENBQUMsWUFBVztNQUNsQixXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaO0FBQ0osQ0FBQztBQUVELGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgc29jaWFsU2hhcmluZyA9IHtcbiAgICAkc2hhcmVXcmFwcGVyOiAkKFwiLnNoYXJlLXdyYXBwZXJcIiksXG4gICAgJG92ZXJsYXk6ICQoXCIub3ZlcmxheVwiKSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLnNoYXJlLWljb25cIikucGFyZW50KCkuY2xpY2sodGhpcy5vcGVuU2hhcmUuYmluZCh0aGlzKSk7XG4gICAgICAgICQoXCIuY2FuY2VsLXNoYXJlXCIpLmNsaWNrKHRoaXMuY2xvc2VTaGFyZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICBzb2NpYWxTaGFyaW5nLiRzaGFyZVdyYXBwZXIub24oXCJjbGlja1wiLCBcIiNzaGFyZXRvcXF6b25lXCIsIHRoaXMuc2hhcmVUb1FRWm9uZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgc29jaWFsU2hhcmluZy4kc2hhcmVXcmFwcGVyLm9uKFwiY2xpY2tcIiwgXCIjc2hhcmV0b3FxXCIsIHRoaXMuc2hhcmVUb1FRLmJpbmQodGhpcykpO1xuICAgICAgICBzb2NpYWxTaGFyaW5nLiRzaGFyZVdyYXBwZXIub24oXCJjbGlja1wiLCBcIiNzaGFyZXRvc2luYVwiLCB0aGlzLnNoYXJlVG9TaW5hLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBvcGVuU2hhcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzb2NpYWxTaGFyaW5nLiRvdmVybGF5LnJlbW92ZUNsYXNzKFwiaGlkZVwiKTtcbiAgICAgICAgc29jaWFsU2hhcmluZy4kc2hhcmVXcmFwcGVyLmNzcyhcImJvdHRvbVwiLCBcIjBcIik7XG4gICAgfSxcblxuICAgIGNsb3NlU2hhcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBzb2NpYWxTaGFyaW5nLiRvdmVybGF5LmFkZENsYXNzKFwiaGlkZVwiKTtcbiAgICAgICAgc29jaWFsU2hhcmluZy4kc2hhcmVXcmFwcGVyLmNzcyhcImJvdHRvbVwiLCBcIi0yMDhweFwiKTtcbiAgICB9LFxuXG4gICAgc2hhcmVUb1FRWm9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hhcmUoXCJRUeepuumXtFwiKTtcbiAgICB9LFxuXG4gICAgc2hhcmVUb1FROiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGFyZShcIuiFvuiur+W+ruWNmlwiKTtcbiAgICB9LFxuXG4gICAgc2hhcmVUb1NpbmE6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNoYXJlKFwi5paw5rWq5b6u5Y2aXCIpO1xuICAgIH0sXG5cbiAgICBzaGFyZTogZnVuY3Rpb24ocGxhdGZvcm0pIHtcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG4gICAgICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb247XG4gICAgICAgIHZhciBwaWN1cmwgPSBcImh0dHA6Ly9pbWcxLmJ1a25vdy5jb20vUHVibGljL1VwbG9hZHMvb25saW5lQWN0aXZpdHkvMjAxNTA0LzI3LzU1Mzk5ZjU2Nzc3ODIxNzM5LmpwZ1wiO1xuICAgICAgICB2YXIgc2hhcmVVcmwsIHNoYXJlV2luZG93O1xuXG4gICAgICAgIHN3aXRjaChwbGF0Zm9ybSkge1xuICAgICAgICAgICAgY2FzZSBcIlFR56m66Ze0XCI6XG4gICAgICAgICAgICAgICAgc2hhcmVVcmwgPSAnaHR0cDovL3Nucy5xem9uZS5xcS5jb20vY2dpLWJpbi9xenNoYXJlL2NnaV9xenNoYXJlX29uZWtleT9zdW1tYXJ5PScgKyB0aXRsZSArICcmdXJsPScgKyB1cmwgKyAnJnBpY3M9JyArIHBpY3VybDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCLohb7orq/lvq7ljZpcIjpcbiAgICAgICAgICAgICAgICBzaGFyZVVybCA9ICdodHRwOi8vdi50LnFxLmNvbS9zaGFyZS9zaGFyZS5waHA/dGl0bGU9JyArIHRpdGxlICsgJyZ1cmw9JyArIHVybCArICcmcGljPScgKyBwaWN1cmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwi5paw5rWq5b6u5Y2aXCI6XG4gICAgICAgICAgICAgICAgc2hhcmVVcmwgPSAnaHR0cDovL3YudC5zaW5hLmNvbS5jbi9zaGFyZS9zaGFyZS5waHA/dGl0bGU9JyArIHRpdGxlICsgJyZ1cmw9JyArIHVybCArICcmY29udGVudD11dGYtOCZzb3VyY2VVcmw9JyArIHVybCArICcmcGljPScgKyBwaWN1cmw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzaGFyZVdpbmRvdyA9IHdpbmRvdy5vcGVuKHNoYXJlVXJsKTtcbiAgICAgICAgdGhpcy5jbG9zZVNoYXJlKCk7XG4gICAgfVxufTtcblxudmFyIHVzZXJBY3Rpb25zID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmluaXRDb2xsZWN0KFwiLmNvbGxlY3QtYXJlYVwiKTtcbiAgICAgICAgdGhpcy5pbml0Q29sbGVjdChcIi5pY29uLWJ0blwiKTtcbiAgICAgICAgJChcIi5jb21tZW50LWxpbmtcIikuY2xpY2sodGhpcy5zaG93Q29tbWVudFRpcCk7XG4gICAgfSxcblxuICAgIGluaXRDb2xsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgICAkKHNlbGVjdG9yKS5vbihcImNsaWNrXCIsIFwiLmNvbGxlY3QtaWNvblwiLCB0aGlzLmNvbGxlY3QpO1xuICAgIH0sXG5cbiAgICBjb2xsZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF1c2VyQWN0aW9ucy5pc0xvZ2dlZEluKCkpIHtcbiAgICAgICAgICAgIHVzZXJBY3Rpb25zLnNob3dUaXAoXCLor7flhYjnmbvlvZVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGNvbGxlY3RJY29uID0gJCh0aGlzKTtcbiAgICAgICAgJGNvbGxlY3RJY29uLnRvZ2dsZUNsYXNzKFwiY29sbGVjdGVkXCIpO1xuICAgIH0sXG5cbiAgICBpc0xvZ2dlZEluOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBzaG93Q29tbWVudFRpcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdXNlckFjdGlvbnMuaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICB1c2VyQWN0aW9ucy5zaG93VGlwKFwi6K+35YWI55m75b2VXCIpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgJHBvcHVwVGlwOiAkKFwiLnBvcHVwLXRpcFwiKSxcblxuICAgIHNob3dUaXA6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgdXNlckFjdGlvbnMuJHBvcHVwVGlwLnRleHQobWVzc2FnZSkucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdXNlckFjdGlvbnMuJHBvcHVwVGlwLmFkZENsYXNzKFwiaGlkZVwiKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxufTtcblxuc29jaWFsU2hhcmluZy5pbml0KCk7XG51c2VyQWN0aW9ucy5pbml0KCk7Il19
