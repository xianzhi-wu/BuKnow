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
  $popupTip: $(".modal-noti"),
  showTip: function showTip(message) {
    userActions.$popupTip.text(message).removeClass("hide");
    setTimeout(function () {
      userActions.$popupTip.addClass("hide");
    }, 1500);
  }
};
socialSharing.init();
userActions.init();

},{}]},{},[1]);
