(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var filterCat = {
  $wrapper: $(".new-cat-wrapper"),
  $overlay: $(".overlay"),
  init: function init() {
    $("#filter-icon").click(this.toggleFilter.bind(this));
    $(".cat-item").click(this.chooseCat.bind(this));
  },
  toggleFilter: function toggleFilter() {
    if (this.$overlay.hasClass("hide")) {
      this.openFilter();
    } else {
      this.closeFilter();
    }
  },
  closeFilter: function closeFilter() {
    this.$overlay.addClass("hide");
    this.$wrapper.addClass("hide");
  },
  openFilter: function openFilter() {
    this.$overlay.removeClass("hide");
    this.$wrapper.removeClass("hide");
  },
  chooseCat: function chooseCat(event) {
    var $target = $(event.target);
    if (!$target.hasClass("on")) {
      $target.addClass("on");
      $target.siblings(".on").removeClass("on");
    }
  }
};
filterCat.init();

},{}]},{},[1]);
