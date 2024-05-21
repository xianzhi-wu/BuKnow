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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9idWlsZC9uZXdlc3QtY2F0ZS1mdW5jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFNBQVMsR0FBRztFQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFDL0IsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7RUFFdkIsSUFBSSxFQUFFLFNBQUEsS0FBQSxFQUFXO0lBQ2IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ25ELENBQUM7RUFFRCxZQUFZLEVBQUUsU0FBQSxhQUFBLEVBQVc7SUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RCO0VBQ0osQ0FBQztFQUVELFdBQVcsRUFBRSxTQUFBLFlBQUEsRUFBVztJQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0VBQ2xDLENBQUM7RUFFRCxVQUFVLEVBQUUsU0FBQSxXQUFBLEVBQVc7SUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztFQUNyQyxDQUFDO0VBRUQsU0FBUyxFQUFFLFNBQUEsVUFBUyxLQUFLLEVBQUU7SUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDekIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQzdDO0VBQ0o7QUFDSixDQUFDO0FBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGZpbHRlckNhdCA9IHtcbiAgICAkd3JhcHBlcjogJChcIi5uZXctY2F0LXdyYXBwZXJcIiksXG4gICAgJG92ZXJsYXk6ICQoXCIub3ZlcmxheVwiKSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI2ZpbHRlci1pY29uXCIpLmNsaWNrKHRoaXMudG9nZ2xlRmlsdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAkKFwiLmNhdC1pdGVtXCIpLmNsaWNrKHRoaXMuY2hvb3NlQ2F0LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB0b2dnbGVGaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy4kb3ZlcmxheS5oYXNDbGFzcyhcImhpZGVcIikpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkZpbHRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlRmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5hZGRDbGFzcyhcImhpZGVcIik7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoXCJoaWRlXCIpO1xuICAgIH0sXG5cbiAgICBvcGVuRmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmVDbGFzcyhcImhpZGVcIik7XG4gICAgICAgIHRoaXMuJHdyYXBwZXIucmVtb3ZlQ2xhc3MoXCJoaWRlXCIpO1xuICAgIH0sXG5cbiAgICBjaG9vc2VDYXQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgICAgIGlmICghJHRhcmdldC5oYXNDbGFzcyhcIm9uXCIpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKFwib25cIik7XG4gICAgICAgICAgICAkdGFyZ2V0LnNpYmxpbmdzKFwiLm9uXCIpLnJlbW92ZUNsYXNzKFwib25cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5maWx0ZXJDYXQuaW5pdCgpOyJdfQ==
