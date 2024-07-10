(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _mobileSlider = _interopRequireDefault(require("../plugins/mobile-slider"));
var _menu = _interopRequireDefault(require("./menu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var index = {
  init: function init() {
    var sliderWrapper = document.querySelector('.slider-wrapper');
    new _mobileSlider["default"](sliderWrapper);
    var menu = new _menu["default"]();
    menu.init();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  return index.init();
});

},{"../plugins/mobile-slider":3,"./menu":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
var MobileSlider = /*#__PURE__*/function () {
  function MobileSlider(sliderWrapper) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    _classCallCheck(this, MobileSlider);
    this.sliderWrapper = sliderWrapper; // Wrapper element containing the slider
    this.interval = interval; // Time interval for auto sliding

    this.duration = duration; // Transition duration
    this.transitionProperty = "transform ".concat(this.duration / 1000, "s ease-in-out"); // Transition property

    this.slider = this.sliderWrapper.querySelector('.slider'); // The slider element
    this.slider.style.transition = this.transitionProperty; // Set the transition property
    this.items = this.slider.querySelectorAll('.slide-item'); // All slide items

    // Create indicators for each slide
    var indicatorsDiv = document.createElement('div'); // Create a div for indicators
    indicatorsDiv.classList.add('indicators'); // Add class to the indicators div

    var numberOfIndicatorsToAdd = this.items.length; // Number of indicators based on slide items

    // Create a document fragment to hold the indicators
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < numberOfIndicatorsToAdd; i++) {
      var newIndicator = document.createElement('i'); // Create each indicator element
      fragment.appendChild(newIndicator); // Append indicator to the fragment
    }

    // Append the fragment containing all indicators to the indicatorsDiv
    indicatorsDiv.appendChild(fragment);
    this.sliderWrapper.appendChild(indicatorsDiv); // Append indicators div to the slider wrapper

    this.indicators = this.sliderWrapper.querySelectorAll('.indicators i'); // Get all indicators
    this.indicators[0].classList.add('active'); // Set the first indicator as active

    // Clone the first and last slides for circular effect
    this.firstItem = this.items[0].cloneNode(true); // Clone the first item
    this.lastItem = this.items[this.items.length - 1].cloneNode(true); // Clone the last item

    this.slider.appendChild(this.firstItem); // Append clone of first item at the end
    this.slider.insertBefore(this.lastItem, this.items[0]); // Insert clone of last item at the beginning

    // Update the items NodeList after cloning
    this.items = this.slider.querySelectorAll('.slide-item');
    this.currentIndex = 1; // Start at the second element (first original slide)
    this.startX = 0; // Starting X coordinate for touch events
    this.currentX = 0; // Current X coordinate for touch events
    this.isDragging = false; // Flag to check if the user is dragging
    this.autoSlideInterval = null; // Interval ID for auto sliding

    this.init(); // Initialize the slider
  }

  // Initialize the slider
  return _createClass(MobileSlider, [{
    key: "init",
    value: function init() {
      this.updateSlide(); // Set the initial position of the slide
      this.startAutoSlide(); // Start the auto slide functionality
      this.addEventListeners(); // Add event listeners for user interactions
    }

    // Update the position of the slide
  }, {
    key: "updateSlide",
    value: function updateSlide() {
      var offset = -this.currentIndex * 100; // Calculate the offset
      //this.slider.style.transition = transitionProperty; // Set the transition
      this.slider.style.transform = "translateX(".concat(offset, "%)"); // Set the transform property
    }

    // Update the position of the slide without transition effect to make a seamless loop
  }, {
    key: "updateSlideNoTrans",
    value: function updateSlideNoTrans() {
      var _this = this;
      setTimeout(function () {
        _this.slider.style.transition = 'none'; // Disable transition
        _this.updateSlide(); // Update the slide position

        setTimeout(function () {
          _this.slider.style.transition = _this.transitionProperty;
        }, _this.duration / 5); // Re-enable transition
      }, this.duration); // Wait for the transition to finish (and then disable transition)
    }

    // Show the next slide
  }, {
    key: "showNext",
    value: function showNext() {
      this.currentIndex++; // Increment the index
      this.updateSlide(); // Update the slide position

      // Check if the current index is the last cloned slide
      if (this.currentIndex === this.items.length - 1) {
        this.currentIndex = 1; // Reset index to the first original slide
        this.updateSlideNoTrans(); // Update the position of the slide without transition effect to make a seamless loop
      }
      this.updateIndicators(); // Update the indicators
    }

    // Show the previous slide
  }, {
    key: "showPrev",
    value: function showPrev() {
      this.currentIndex--; // Decrement the slide index
      this.updateSlide(); // Update the slide position

      // Check if the current index is the first cloned slide
      if (this.currentIndex === 0) {
        this.currentIndex = this.items.length - 2; // Reset index to the last original slide
        this.updateSlideNoTrans();
      }
      this.updateIndicators(); // Update the indicators
    }

    // Handle the start of a touch event
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(event) {
      this.startX = event.touches[0].clientX; // Record the starting X coordinate
      this.isDragging = true; // Set the dragging flag to true
      this.slider.style.transition = 'none'; // Disable transition while dragging
      this.stopAutoSlide(); // Stop the auto slide functionality
    }

    // Handle the movement during a touch event
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(event) {
      if (!this.isDragging) return; // If not dragging, return

      this.currentX = event.touches[0].clientX; // Record the current X coordinate
      var moveX = this.currentX - this.startX; // Calculate the distance moved
      var offset = -this.currentIndex * 100 + moveX / this.slider.clientWidth * 100; // Calculate the offset
      this.slider.style.transform = "translateX(".concat(offset, "%)"); // Set the transform property
    }

    // Handle the end of a touch event
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(event) {
      this.isDragging = false; // Set the dragging flag to false
      this.slider.style.transition = this.transitionProperty; // Re-enable transition
      var moveX = this.currentX - this.startX; // Calculate the distance moved

      // Determine if the slide should change based on the movement
      if (moveX > 50) {
        this.showPrev(); // Show the previous slide if moved sufficiently left
      } else if (moveX < -50) {
        this.showNext(); // Show the next slide if moved sufficiently right
      } else {
        this.updateSlide(); // Snap back to the current item if the swipe is not significant
      }
      this.startAutoSlide(); // Restart the auto slide functionality
    }

    // Update the indicators to reflect the current slide
  }, {
    key: "updateIndicators",
    value: function updateIndicators() {
      var _this2 = this;
      this.indicators.forEach(function (indicator, index) {
        indicator.classList.remove('active'); // Remove the active class from the active indicator
        if (_this2.currentIndex - 1 === index) {
          indicator.classList.add('active'); // Add the active class to the current indicator
        }
      });
    }

    // Start the auto slide functionality
  }, {
    key: "startAutoSlide",
    value: function startAutoSlide() {
      var _this3 = this;
      this.autoSlideInterval = setInterval(function () {
        return _this3.showNext();
      }, this.interval); // Change slide at specified interval
    }

    // Stop the auto slide functionality
  }, {
    key: "stopAutoSlide",
    value: function stopAutoSlide() {
      clearInterval(this.autoSlideInterval); // Clear the interval
    }

    // Add event listeners for user interactions
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this4 = this;
      // Add touch event listeners to the slider
      this.slider.addEventListener('touchstart', function (event) {
        return _this4.handleTouchStart(event);
      });
      this.slider.addEventListener('touchmove', function (event) {
        return _this4.handleTouchMove(event);
      });
      this.slider.addEventListener('touchend', function (event) {
        return _this4.handleTouchEnd(event);
      });
    }
  }]);
}(); // Export the MobileSlider class as a module
var _default = exports["default"] = MobileSlider;

},{}]},{},[1]);
