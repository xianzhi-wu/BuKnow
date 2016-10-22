define(function(require){
	var $ = require("zepto"), IScroll = require("iScroll");
	$.extend($.fn, {
		showIScroll: function(e, t) {
			if (0 === this.length) return this;
			var i = this.data("initIScroll");
			if (i) t && i instanceof IScroll && "refresh" === t && (i.refresh());
			else {
				var i = new IScroll(this.get(0), {
					mouseWheel: !0,
					tap: "iscrollTap",
					click: !0,
					disableMouse: "ontouchend" in document
				});
				this.data("initIScroll", e ? i : "ok")
			}
			return this
		}
	});
	var SlideNav = function(e) {
		this.options = $.extend({}, this.options, e), this.showedMenus = {}
	};
	SlideNav.prototype = {
		options: {
			menuSignKey: "slideMenuKey",
			menuSelector: {
				wrap: ".dropdown-selector",
				top: ".selector-view",
				sub: ".selector-sider",
				subHandle: ".selector-sider ul li a",
				noExists: "#noneExistsElement"
			},
			showEmptySubMenu: !1
		},
		showedMenus: {},
		isShowedMenu: function(e, t) {
			var i = e.data(this.options.menuSignKey);
			if (i && this.showedMenus) for (var n in this.showedMenus) if (!t || t === ~~n) {
				var o = this.showedMenus[n].data(this.options.menuSignKey);
				if (o === i) return ~~n
			}
			return 0
		},
		ctrlShowedMenu: function(e, t, i) {
			switch (e) {
			case "get":
				return t in this.showedMenus ? this.showedMenus[t] : $(this.options.menuSelector.noExists);
			case "show":
				i && (this.showedMenus[t] = i);
				break;
			case "hide":
				delete this.showedMenus[t]
			}
		},
		showMenu: function(e, t, i, n) {
			return 0 === e.length ? !1 : (1 === t && !n && this.options.menuSelector.wrap && e.parents(this.options.menuSelector.wrap).show(), e.data(this.options.menuSignKey, Math.random()), i && e.show() || e.show().showIScroll(), void this.ctrlShowedMenu("show", t, e))
		},
		hideMenu: function(e, t, i) {
			e = e && e.length ? e : this.ctrlShowedMenu("get", t);
			var n = this.isShowedMenu(e, t);
			return n > 0 && (this.ctrlShowedMenu("hide", n), 1 === n && !i && this.options.menuSelector.wrap ? e.parents(this.options.menuSelector.wrap).hide() : e.hide()), e
		},
		showTopMenu: function(e, t, i) {
			if (t = t && t.length ? t : this.controllerToMenu(e, 1), this.showMenu(t, 1), $(".overlay").show().height($(".overlay").height() + $("footer").height()), e && e.length && !i) {
				var n = e.attr("data-main"),
					o = n && "emptyMenu" === n.split("_")[1];
				if (n && (!o || this.options.showEmptySubMenu)) {
					var s = t.parents(this.options.menuSelector.wrap).find(this.options.menuSelector.sub).filter('[data-main="' + n + '"]'),
						r = this.controllerToMenu(s, 2, !0);
					this.showSubMenu(r, s)
				}
			}
		},
		showSubMenu: function(e, t, i) {
			t = t && t.length ? t : this.controllerToMenu(e, 2), this.showMenu(t, 2, !0), t.showIScroll(), e && !i
		},
		controllerToMenu: function(e, t, i) {
			if (!e || "object" != typeof e) return $(this.options.menuSelector.noExists);
			switch (t) {
			case 1:
				return i ? e.find(".selected a") : e.parents(this.options.menuSelector.top);
			case 2:
				return i ? e.find("a.selected") : e.parents(this.options.menuSelector.sub);
			default:
				return $(this.options.menuSelector.noExists)
			}
		},
		fixHeight: function(e, t, i) {
			i = "number" == typeof i ? i : 30;
			var n = t ? $('.cate').offset().top : 0,
				o = e.closest(".selector-wrapper"),
				r = Math.min(e.children("ul").height(), $(window).height() - $(".cate").height() - n - i);
			/qqbrowser/i.test(navigator.userAgent) && /iphone|ipod/i.test(navigator.userAgent) && (r -= 45);
			var h = e.data("slide_curHeight");
			h !== r && (e.height(r).data("slide_curHeight", r), e.siblings(this.options.menuSelector.sub).height(r), $(window).triggerHandler("resize"));
			var l = $(".header"),
				u = Math.floor(l.width() / 2);
			if (l.data("slide_curWidth") !== u) {
				l.data("slide_curWidth", u);
				var c = $('<style type="text/css" id="slidenav_css">.dropdown-selector .selector-view, .dropdown-selector .selector-sider {min-width: ' + u + "px; }</style>");
				$("#slidenav_css").remove(), c.appendTo("body")
			}
		},
		resize: function(e, t) {
			var i = this,
				n = 0;
			$(window).bind("orientationchange resize", function(o) {
				var s = i.ctrlShowedMenu("get", 1),
					r = o.type;
				s.length && (n > 0 && (clearTimeout(n), n = 0), n = setTimeout(function() {
					"orientationchange" === r && window.scrollTo(0, e ? 0 : $('.cate').offset().top), i.fixHeight(s, e, t)
				}, 60))
			})
		}
	};
		
	$(function() {
		var e = new SlideNav;
		if ($(".cate ul li a").click(function() {
			var t = $(this),
				i = t.attr("data-type");
			if (i) {
				var n = $(e.options.menuSelector.wrap).filter('[data-type="' + i + '"]'),
					o = n.find(e.options.menuSelector.top);
				if (o.length) {
					var s = e.isShowedMenu(o, 1);
					if ($(".overlay").trigger("click"), !s) {
						t.parents("li").addClass("selected");
						var r = e.controllerToMenu(o, 1, !0);
						window.scrollTo(0, $('.cate').offset().top), n.show(), e.fixHeight(o), e.showTopMenu(r, o)
					}
				}
			}
		}), $(".selector-view ul li a").bind("iscrollTap click", function(t) {
			var i = $(this),
				n = i.attr("data-main"),
				o = n && "emptyMenu" === n.split("_")[1];
			if ("click" === t.type) return n && !o ? !1 : "";
			var s = i.parent();
			if (s.siblings(".selected").removeClass("selected"), s.addClass("selected"), n && !o) {
				var r = i.parents(e.options.menuSelector.top).siblings(e.options.menuSelector.sub).filter('[data-main="' + n + '"]'),
					a = e.isShowedMenu(r, 2);
				return a || (e.hideMenu(null, 2), e.showSubMenu(null, r)), !1
			}
		}), $(".selector-sider ul li a").bind("iscrollTap click", function(t) {
			var i = $(this),
				n = i.is(e.options.menuSelector.subHandle);
			if ("click" === t.type) return n && i.attr("data-sub") ? !1 : "";
			if (n) {
				var o = e.controllerToMenu(i, 2);
				if (e.controllerToMenu(o, 2, !0).removeClass("selected") ? o.showIScroll(!0, "refresh") : (i.addClass("selected"))) return !1
			}
		}), $(".overlay").click(function() {
			e.hideMenu(null, 2), e.hideMenu(null, 1), $(".cate ul li").removeClass("selected"), $(this).hide().css("height", "100%")
		}), window.initSort) {
			var t = $(e.options.menuSelector.wrap + '[data-type="' + window.initSort + '"]');
			if (t.length) {
				var i = t.find(e.options.menuSelector.top),
					n = e.controllerToMenu(i, 1, !0);
				e.resize(!0, 0), e.fixHeight(i, !0, 0), e.showTopMenu(n, i)
			}
		} else e.resize();
	})
})