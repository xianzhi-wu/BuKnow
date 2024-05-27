(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var rp = {
  $curPwdInput: $("#cur-pwd"),
  $newPwdInput: $("#new-pwd"),
  $confirmPwdInput: $("#confirm-pwd"),
  $tip: $(".valid-tip"),
  checkInput: function checkInput($input, message) {
    var value = $input.val().trim();
    if (value === '') {
      rp.showTip(message);
      return false;
    }
    return true;
  },
  checkPasswordFormat: function checkPasswordFormat($input) {
    var password = $input.val().trim();
    if (!/^[0-9a-zA-Z!@#$%^&*]{6,16}$/.test(password)) {
      rp.showTip("密码格式错误(密码由6-16个字符组成)");
      return false;
    }
    return true;
  },
  checkConfirmation: function checkConfirmation() {
    var newPassword = rp.$newPwdInput.val().trim();
    var confirmPassword = rp.$confirmPwdInput.val().trim();
    if (confirmPassword !== newPassword) {
      rp.showTip("两次新密码输入不一致");
      return false;
    }
    return true;
  },
  showTip: function showTip(message) {
    rp.$tip.text(message).removeClass("hide");
  },
  hideTip: function hideTip() {
    rp.$tip.addClass("hide");
  },
  init: function init() {
    $(".reset-pwd-form input").on("focus", rp.hideTip);
    $(".reset-pwd-btn").click(function (e) {
      e.preventDefault();
      if (rp.checkInput(rp.$curPwdInput, "请输入当前密码") && rp.checkPasswordFormat(rp.$curPwdInput) && rp.checkInput(rp.$newPwdInput, "请输入新密码") && rp.checkPasswordFormat(rp.$newPwdInput) && rp.checkInput(rp.$confirmPwdInput, "请确认密码") && rp.checkConfirmation()) {
        alert("Password reset successfully!");
      }
    });
  }
};
rp.init();

},{}]},{},[1]);
