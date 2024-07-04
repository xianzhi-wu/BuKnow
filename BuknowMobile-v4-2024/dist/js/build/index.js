(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _swipe = _interopRequireDefault(require("../plugins/swipe.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var index = {
  banner: function banner() {
    new _swipe["default"](document.getElementById("j-slider"), {
      startSlide: 1 - 1,
      continuous: "1" ? true : false,
      auto: "5000" ? parseInt("5000", 10) : 0,
      pointers: "1" ? document.getElementById("j-pointers") : false
    });
  },
  menu: {
    $menu: $(".menu-dropdown"),
    $overlay: $(".overlay"),
    $indexWrapper: $(".index-wrapper"),
    init: function init() {
      var self = this;
      $("#nav-menu").click(function (e) {
        e.stopPropagation(); //阻止冒泡

        if (self.$overlay.hasClass("hide")) {
          self.openMenu();
        } else {
          self.closeMenu();
        }
      });
      var menuLinks = self.$menu.find("a");
      self.menuHeight = menuLinks.eq(0).height() * menuLinks.length;
      self.$overlay.on("click", self.closeMenu.bind(self));
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 20) {
          self.$indexWrapper.addClass("h-sticky");
        } else {
          //如果菜单已经打开，并且页面往上滚动距离小于20px，不移除紫色背景
          if (!self.$overlay.hasClass("hide") && self.$indexWrapper.hasClass("h-sticky")) {
            return false;
          }
          self.$indexWrapper.removeClass("h-sticky");
        }
      });
    },
    openMenu: function openMenu() {
      this.$overlay.removeClass("hide");
      this.$menu.css({
        "height": this.menuHeight + "px"
      });
      //打开菜单时如果头部为透明背景，添加紫色背景。
      if (!this.$indexWrapper.hasClass("h-sticky") && $(window).scrollTop() <= 20) {
        this.$indexWrapper.addClass("h-sticky");
      }
    },
    closeMenu: function closeMenu() {
      this.$overlay.addClass("hide");
      //关闭菜单式如果头部为紫色背景并且页面往上滚动距离小于20px,移除紫色背景
      if (this.$indexWrapper.hasClass("h-sticky") && $(window).scrollTop() <= 20) {
        this.$indexWrapper.removeClass("h-sticky");
      }
      this.$menu.css({
        "height": "0px"
      });
    }
  },
  init: function init() {
    this.banner();
    this.menu.init();
  }
};
index.init();

},{"../plugins/swipe.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var swipe = function swipe(n, t) {
  "use strict";

  function e(n) {
    var t = v.children.length;
    for (n %= t; t--;) v.children[t].className = t === n ? "active" : "";
  }
  function i() {
    $ = (d = n.children).length, t.continuous && 3 > $ && (n.appendChild(d[0].cloneNode(!0)), n.appendChild(n.children[1].cloneNode(!0)), $ = (d = n.children).length, b = !0), _ = Array($), h = n.getBoundingClientRect().width || n.offsetWidth;
    for (var e = $; e--;) d[e].setAttribute("data-index", e), s(e, x > e ? -h : e > x ? h : 0, 0);
    t.continuous && (0 === x && s(a(x - 1), -h, 0), x === $ && s(a(x + 1), h, 0)), n.style.visibility = "visible";
  }
  function o() {
    t.continuous ? r(x + 1) : x < d.length - 1 && r(x + 1);
  }
  function a(n) {
    return (d.length + n % d.length) % d.length;
  }
  function r(n, i) {
    if (x != n) {
      var o = Math.abs(x - n) / (x - n);
      if (t.continuous) {
        var r = o;
        (o = -_[a(n)] / h) !== r && (n = -o * d.length + n);
      }
      for (var c = Math.abs(x - n) - 1; c--;) s(a((n > x ? n : x) - c - 1), h * o, 0);
      n = a(n), s(x, h * o, i || p), s(n, 0, i || p), t.continuous && s(a(n - o), -(h * o), 0), e(x = n), f(t.callback && t.callback(x, d[x]));
    }
  }
  function s(n, t, e) {
    c(n, t, e), _[n] = t;
  }
  function c(n, t, e) {
    var i = d[n],
      o = i && i.style;
    o && (o.webkitTransitionDuration = o.transitionDuration = e + "ms", o.webkitTransform = "translate(" + t + "px,0)translateZ(0)", o.transform = "translateX(" + t + "px)");
  }
  function u() {
    m = 0, clearTimeout(g);
  }
  if (t = t || {}, n && n.nodeType && 0 !== n.children.length) {
    var l = {
      touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
      transitions: function (n) {
        var t = ["transitionProperty", "WebkitTransition"];
        for (var e in t) if (void 0 !== n.style[t[e]]) return !0;
        return !1;
      }(document.createElement("swipe"))
    };
    if (!l.touch || !l.transitions || 1 === n.children.length) return void (n.style.visibility = "visible");
    var d,
      _,
      h,
      $,
      v,
      f = function f(n) {
        setTimeout(n, 0);
      },
      b = !1,
      x = parseInt(t.startSlide, 10) || 0,
      p = t.speed || 300;
    t.continuous = void 0 === t.continuous || t.continuous, function () {
      if (t.pointers) {
        var e = n.children.length,
          i = e;
        for (v = t.pointers; i--;) {
          var o = document.createElement("i");
          e - i - 1 === x && (o.className = "active"), v.appendChild(o);
        }
      }
    }();
    var g,
      m = t.auto || 0;
    i(), m && (g = setTimeout(o, m));
    var E,
      k,
      y = {},
      w = {};
    return k = {
      handleEvent: function handleEvent(n) {
        switch (n.type) {
          case "touchstart":
            this.start(n);
            break;
          case "touchmove":
            this.move(n);
            break;
          case "touchend":
            f(this.end(n));
            break;
          case "resize":
            f(i.call());
            break;
          case "webkitTransitionEnd":
          case "transitionend":
            f(this.transitionEnd(event));
        }
      },
      start: function start(t) {
        var e = t.touches[0];
        y = {
          x: e.pageX,
          y: e.pageY,
          time: +new Date()
        }, E = void 0, w = {}, n.addEventListener("touchmove", this, !1), n.addEventListener("touchend", this, !1);
      },
      move: function move(n) {
        if (!(n.touches.length > 1 || n.scale && 1 !== n.scale)) {
          var e = n.touches[0];
          w = {
            x: e.pageX - y.x,
            y: e.pageY - y.y
          }, void 0 === E && (E = !!(E || Math.abs(w.x) < Math.abs(w.y))), E || (n.preventDefault(), u(), t.continuous ? (c(a(x - 1), w.x + _[a(x - 1)], 0), c(x, w.x + _[x], 0), c(a(x + 1), w.x + _[a(x + 1)], 0)) : (w.x = w.x / (!x && w.x > 0 || x == d.length - 1 && w.x < 0 ? Math.abs(w.x) / h + 1 : 1), c(x - 1, w.x + _[x - 1], 0), c(x, w.x + _[x], 0), c(x + 1, w.x + _[x + 1], 0)));
        }
      },
      end: function end() {
        var i = 250 > Number(+new Date() - y.time) && Math.abs(w.x) > 20 || Math.abs(w.x) > h / 2,
          o = !x && w.x > 0 || x == d.length - 1 && w.x < 0;
        t.continuous && (o = !1);
        var r = w.x < 0;
        E || (i && !o ? (r ? (t.continuous ? (s(a(x - 1), -h, 0), s(a(x + 2), h, 0)) : s(x - 1, -h, 0), s(x, _[x] - h, p), s(a(x + 1), _[a(x + 1)] - h, p), x = a(x + 1)) : (t.continuous ? (s(a(x + 1), h, 0), s(a(x - 2), -h, 0)) : s(x + 1, h, 0), s(x, _[x] + h, p), s(a(x - 1), _[a(x - 1)] + h, p), x = a(x - 1)), e(x), t.callback && t.callback(x, d[x])) : t.continuous ? (s(a(x - 1), -h, p), s(x, 0, p), s(a(x + 1), h, p)) : (s(x - 1, -h, p), s(x, 0, p), s(x + 1, h, p))), n.removeEventListener("touchmove", k, !1), n.removeEventListener("touchend", k, !1);
      },
      transitionEnd: function transitionEnd(n) {
        parseInt(n.target.getAttribute("data-index"), 10) == x && (t.auto && (clearTimeout(g), g = setTimeout(o, t.auto)), t.transitionEnd && t.transitionEnd.call(event, x, d[x]));
      }
    }, n.addEventListener("touchstart", k, !1), window.addEventListener("resize", k, !1), n.addEventListener("webkitTransitionEnd", k, !1), n.addEventListener("transitionend", k, !1), {
      next: function next() {
        u(), o();
      },
      prev: function prev() {
        u(), t.continuous ? r(x - 1) : x && r(x - 1);
      },
      slide: function slide(n, t) {
        u(), r(n, t);
      },
      pos: function pos() {
        return x;
      },
      len: function len() {
        return b ? 2 : d.length;
      }
    };
  }
};
var _default = exports["default"] = swipe;

},{}]},{},[1]);
