(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var login = {
  $tip: $(".valid-tip"),
  checkUserName: function checkUserName() {
    var value = $("#username").val();
    if (value == '' || value.length == 0) {
      this.$tip.text("请输入手机号");
      return false;
    } else {
      this.$tip.text("");
      return true;
    }
  },
  checkPassword: function checkPassword() {
    var value = $("#password").val();
    if (value == '' || value.length == 0) {
      this.$tip.text("请输入密码");
      return false;
    } else {
      this.$tip.text("");
      return true;
    }
  },
  submit: function submit() {
    var self = this;
    $("#login").click(function (e) {
      e.preventDefault();
      if (self.checkUserName() && self.checkPassword()) {
        //登录成功
        location.href = "user-center.html";
      }
    });
  },
  init: function init() {
    this.submit();
  }
};
login.init();

},{}]},{},[1]);
