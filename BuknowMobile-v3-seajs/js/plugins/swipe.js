define("swipe",[],function(require, exports, module){
	function Swipe(t, n) {
		"use strict";
	
		function e(t) {
			var n = b.children.length;
			for (t %= n; n--;) b.children[n].className = n === t ? "active" : ""
		}
		function i() {
			v = t.children, p = v.length, n.continuous && 3 > p && (t.appendChild(v[0].cloneNode(!0)), t.appendChild(t.children[1].cloneNode(!0)), v = t.children, p = v.length, g = !0), f = new Array(p), m = t.getBoundingClientRect().width || t.offsetWidth;
			for (var e = p; e--;) {
				var i = v[e];
				i.setAttribute("data-index", e), c(e, w > e ? -m : e > w ? m : 0, 0)
			}
			n.continuous && (0 === w && c(r(w - 1), -m, 0), w === p && c(r(w + 1), m, 0)), t.style.visibility = "visible"
		}
		function o() {
			n.continuous ? s(w - 1) : w && s(w - 1)
		}
		function a() {
			n.continuous ? s(w + 1) : w < v.length - 1 && s(w + 1)
		}
		function r(t) {
			return (v.length + t % v.length) % v.length
		}
		function s(t, i) {
			if (w != t) {
				var o = Math.abs(w - t) / (w - t);
				if (n.continuous) {
					var a = o;
					o = -f[r(t)] / m, o !== a && (t = -o * v.length + t)
				}
				for (var s = Math.abs(w - t) - 1; s--;) c(r((t > w ? t : w) - s - 1), m * o, 0);
				t = r(t), c(w, m * o, i || E), c(t, 0, i || E), n.continuous && c(r(t - o), -(m * o), 0), w = t, e(w), x(n.callback && n.callback(w, v[w]))
			}
		}
		function c(t, n, e) {
			u(t, n, e), f[t] = n
		}
		function u(t, n, e) {
			var i = v[t],
				o = i && i.style;
			o && (o.webkitTransitionDuration = o.transitionDuration = e + "ms", o.webkitTransform = "translate(" + n + "px,0)translateZ(0)", o.transform = "translateX(" + n + "px)")
		}
		function d() {
			y = setTimeout(a, k)
		}
		function l() {
			k = 0, clearTimeout(y)
		}
		if (n = n || {}, t && t.nodeType && 0 !== t.children.length) {
			var h = {
				touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
				transitions: function(t) {
					var n = ["transitionProperty", "WebkitTransition"];
					for (var e in n) if (void 0 !== t.style[n[e]]) return !0;
					return !1
				}(document.createElement("swipe"))
			};
			if (!h.touch || !h.transitions || 1 === t.children.length) return void(t.style.visibility = "visible");
			var v, f, m, p, b, x = function(t) {
					setTimeout(t, 0)
				},
				g = !1,
				w = parseInt(n.startSlide, 10) || 0,
				E = n.speed || 300;
			n.continuous = void 0 !== n.continuous ? n.continuous : !0, function() {
				if (n.pointers) {
					var e = t.children.length,
						i = e;
					for (b = n.pointers; i--;) {
						var o = document.createElement("i");
						e - i - 1 === w && (o.className = "active"), b.appendChild(o)
					}
				}
			}();
			var y, k = n.auto || 0;
			i(), k && d();
			var T, L, D = {},
				M = {};
			return L = {
				handleEvent: function(t) {
					switch (t.type) {
					case "touchstart":
						this.start(t);
						break;
					case "touchmove":
						this.move(t);
						break;
					case "touchend":
						x(this.end(t));
						break;
					case "resize":
						x(i.call());
						break;
					case "webkitTransitionEnd":
					case "transitionend":
						x(this.transitionEnd(event))
					}
				},
				start: function(n) {
					var e = n.touches[0];
					D = {
						x: e.pageX,
						y: e.pageY,
						time: +new Date
					}, T = void 0, M = {}, t.addEventListener("touchmove", this, !1), t.addEventListener("touchend", this, !1)
				},
				move: function(t) {
					if (!(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
						var e = t.touches[0];
						M = {
							x: e.pageX - D.x,
							y: e.pageY - D.y
						}, "undefined" == typeof T && (T = !! (T || Math.abs(M.x) < Math.abs(M.y))), T || (t.preventDefault(), l(), n.continuous ? (u(r(w - 1), M.x + f[r(w - 1)], 0), u(w, M.x + f[w], 0), u(r(w + 1), M.x + f[r(w + 1)], 0)) : (M.x = M.x / (!w && M.x > 0 || w == v.length - 1 && M.x < 0 ? Math.abs(M.x) / m + 1 : 1), u(w - 1, M.x + f[w - 1], 0), u(w, M.x + f[w], 0), u(w + 1, M.x + f[w + 1], 0)))
					}
				},
				end: function() {
					var i = +new Date - D.time,
						o = Number(i) < 250 && Math.abs(M.x) > 20 || Math.abs(M.x) > m / 2,
						a = !w && M.x > 0 || w == v.length - 1 && M.x < 0;
					n.continuous && (a = !1);
					var s = M.x < 0;
					T || (o && !a ? (s ? (n.continuous ? (c(r(w - 1), -m, 0), c(r(w + 2), m, 0)) : c(w - 1, -m, 0), c(w, f[w] - m, E), c(r(w + 1), f[r(w + 1)] - m, E), w = r(w + 1)) : (n.continuous ? (c(r(w + 1), m, 0), c(r(w - 2), -m, 0)) : c(w + 1, m, 0), c(w, f[w] + m, E), c(r(w - 1), f[r(w - 1)] + m, E), w = r(w - 1)), e(w), n.callback && n.callback(w, v[w])) : n.continuous ? (c(r(w - 1), -m, E), c(w, 0, E), c(r(w + 1), m, E)) : (c(w - 1, -m, E), c(w, 0, E), c(w + 1, m, E))), t.removeEventListener("touchmove", L, !1), t.removeEventListener("touchend", L, !1)
				},
				transitionEnd: function(t) {
					parseInt(t.target.getAttribute("data-index"), 10) == w && (n.auto && (clearTimeout(y), y = setTimeout(a, n.auto)), n.transitionEnd && n.transitionEnd.call(event, w, v[w]))
				}
			}, t.addEventListener("touchstart", L, !1), window.addEventListener("resize", L, !1), t.addEventListener("webkitTransitionEnd", L, !1), t.addEventListener("transitionend", L, !1), {
				next: function() {
					l(), a()
				},
				prev: function() {
					l(), o()
				},
				slide: function(t, n) {
					l(), s(t, n)
				},
				pos: function() {
					return w
				},
				len: function() {
					return g ? 2 : v.length
				}
			}
		}
	}
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = Swipe;
	} else {
	    window.Swipe = Swipe;
	}
});
