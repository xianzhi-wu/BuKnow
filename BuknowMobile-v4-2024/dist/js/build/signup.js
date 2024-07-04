(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var signupForm = {
  countdown: 0,
  countdownDuration: 60,
  $mobileInput: $("#mobile"),
  $vericodeInput: $("#vericode"),
  $passwordInput: $("#password"),
  $validTip: $(".valid-tip"),
  $getCode: $(".get-code"),
  init: function init() {
    this.$getCode.click(this.handleGetCode.bind(this));
    $("#signup").click(this.handleSignup.bind(this));
  },
  showTip: function showTip(message) {
    this.$validTip.text(message);
  },
  hideTip: function hideTip() {
    this.$validTip.text("");
  },
  validateMobile: function validateMobile() {
    var pregMobile = /^(1(([3578][0-9])|(47)))\d{8}$/;
    var value = this.$mobileInput.val();
    if (value === '') {
      this.showTip("请输入手机号");
      return false;
    } else if (pregMobile.test(value) === false) {
      this.showTip("手机号码格式错误");
      return false;
    }
    this.hideTip();
    return true;
  },
  validateVericode: function validateVericode() {
    var value = this.$vericodeInput.val();
    if (value === '') {
      this.showTip("请输入手机短信验证码");
      return false;
    }
    this.hideTip();
    return true;
  },
  validatePassword: function validatePassword() {
    var value = this.$passwordInput.val();
    var pregPassword = /^[0-9a-zA-Z!@#$%^&*]{6,16}$/;
    if (value === '') {
      this.showTip("请输入密码");
      return false;
    } else if (pregPassword.test(value) === false) {
      this.showTip("密码格式错误");
      return false;
    }
    this.hideTip();
    return true;
  },
  handleGetCode: function handleGetCode(e) {
    e.preventDefault();
    if (this.validateMobile() && signupForm.countdown === 0) {
      signupForm.countdown = signupForm.countdownDuration;
      this.startCountdown();
      this.tip("验证码已发送到您手机");
    }
  },
  startCountdown: function startCountdown() {
    if (signupForm.countdown === 0) {
      signupForm.$getCode.text("获取");
      return;
    } else {
      signupForm.$getCode.text("重新获取(" + signupForm.countdown + "s)");
      signupForm.countdown--;
    }
    setTimeout(function () {
      signupForm.startCountdown();
    }, 1000);
  },
  tip: function tip(message) {
    var $overlay = $(".overlay");
    $overlay.find(".modal-noti").text(message);
    $overlay.removeClass("hide");
    setTimeout(function () {
      $overlay.addClass("hide");
    }, 1500);
  },
  handleSignup: function handleSignup(e) {
    e.preventDefault();
    if (this.validateMobile() && this.validateVericode() && this.validatePassword()) {
      this.tip("成功找回密码，请重新登录。");
    }
  }
};
signupForm.init();

},{}]},{},[1]);
