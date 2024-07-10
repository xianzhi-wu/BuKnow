(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);
    this.menu = document.querySelector('.menu-dropdown');
    this.overlay = document.querySelector('.overlay');
    this.indexWrapper = document.querySelector('.index-wrapper');
    this.menuHeight = 0;
  }
  return _createClass(Menu, [{
    key: "init",
    value: function init() {
      var self = this;
      document.getElementById('nav-menu').addEventListener('click', function (e) {
        e.stopPropagation(); // 阻止冒泡

        if (self.overlay.classList.contains('hide')) {
          self.openMenu();
        } else {
          self.closeMenu();
        }
      });
      var menuLinks = self.menu.querySelectorAll('a');
      self.menuHeight = menuLinks[0].offsetHeight * menuLinks.length;
      self.overlay.addEventListener('click', self.closeMenu.bind(self));
      window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
          self.indexWrapper.classList.add('h-sticky');
        } else {
          // 如果菜单已经打开，并且页面往上滚动距离小于20px，不移除紫色背景
          if (!self.overlay.classList.contains('hide') && self.indexWrapper.classList.contains('h-sticky')) {
            return false;
          }
          self.indexWrapper.classList.remove('h-sticky');
        }
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.overlay.classList.remove('hide');
      this.menu.style.height = this.menuHeight + 'px';

      // 打开菜单时如果头部为透明背景，添加紫色背景。
      if (!this.indexWrapper.classList.contains('h-sticky') && window.scrollY <= 20) {
        this.indexWrapper.classList.add('h-sticky');
      }
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.overlay.classList.add('hide');

      // 关闭菜单时如果头部为紫色背景并且页面往上滚动距离小于20px,移除紫色背景
      if (this.indexWrapper.classList.contains('h-sticky') && window.scrollY <= 20) {
        this.indexWrapper.classList.remove('h-sticky');
      }
      this.menu.style.height = '0px';
    }
  }]);
}();
var _default = exports["default"] = Menu;

},{}]},{},[1]);
