(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var setting = {
  showTip: function showTip(msg) {
    var $tip = $(".modal-noti");
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

},{}]},{},[1]);
