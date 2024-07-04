(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var commentForm = {
  stars: $(".comment-stars i"),
  textarea: $(".comment-tarea"),
  tip: $(".modal-noti"),
  score: 0,
  init: function init() {
    // this - commentForm object
    this.stars.on("click", this.handleStarClick.bind(this));
    $(".comment-btn").on("click", this.handleSubmit.bind(this));
  },
  handleStarClick: function handleStarClick(event) {
    var index = this.stars.index(event.currentTarget);
    this.updateStars(index);
  },
  updateStars: function updateStars(index) {
    this.score = index + 1;
    this.stars.each(function (i) {
      $(this).toggleClass("star-on", i < index + 1);
    });
  },
  handleSubmit: function handleSubmit() {
    if (this.validateRating() && this.validateComment()) {
      this.submitComment();
    }
  },
  validateRating: function validateRating() {
    if (this.score === 0) {
      this.displayError("评分不能为0");
      return false;
    }
    return true;
  },
  validateComment: function validateComment() {
    var comment = this.textarea.val().trim();
    if (comment.length === 0) {
      this.displayError("评论不能为空");
      return false;
    } else if (this.getCharacterCount(comment) < 20) {
      this.displayError("评论不能少于20个字");
      return false;
    }
    return true;
  },
  displayError: function displayError(message) {
    this.tip.text(message).removeClass("hide");
    this.hideTip();
  },
  hideTip: function hideTip() {
    setTimeout(function () {
      this.tip.addClass("hide");
    }.bind(this), 1500);
  },
  getCharacterCount: function getCharacterCount(str) {
    var noSpaceStr = str.replace(/\s+/g, "");
    var len = 0;
    for (var i = 0; i < noSpaceStr.length; i++) {
      var _char = noSpaceStr.charCodeAt(i);
      len += _char >= 0x0001 && _char <= 0x007e || 0xff60 <= _char && _char <= 0xff9f ? 1 : 2;
    }
    return len;
  },
  submitComment: function submitComment() {}
};
commentForm.init();

},{}]},{},[1]);
