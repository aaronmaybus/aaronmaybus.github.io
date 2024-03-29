var screenWidth = $(window).innerWidth();
var newScreenWidth;
var windowHeight = window.innerHeight

!function(r) {
    "use strict";
    "function" == typeof define && define.amd ? define("parollerjs", ["jquery"], r) : "object" == typeof module && "object" == typeof module.exports ? module.exports = r(require("jquery")) : r(jQuery)
}(function($) {
    "use strict";
    var r = !1
      , t = function() {
        r = !1
    }
      , o = {
        bgVertical: function(r, t) {
            return r.css({
                "background-position": "center " + -t + "px"
            })
        },
        bgHorizontal: function(r, t) {
            return r.css({
                "background-position": -t + "px center"
            })
        },
        vertical: function(r, t, o, n) {
            return "none" === n ? n = "" : !0,
            r.css({
                "-webkit-transform": "translateY(" + t + "px)" + n,
                "-moz-transform": "translateY(" + t + "px)" + n,
                transform: "translateY(" + t + "px)" + n,
                transition: o,
                "will-change": "transform"
            })
        },
        horizontal: function(r, t, o, n) {
            return "none" === n ? n = "" : !0,
            r.css({
                "-webkit-transform": "translateX(" + t + "px)" + n,
                "-moz-transform": "translateX(" + t + "px)" + n,
                transform: "translateX(" + t + "px)" + n,
                transition: o,
                "will-change": "transform"
            })
        }
    }
      , n = {
        factor: function(r, t, o) {
            var n = r.data("paroller-factor")
              , a = n ? n : o.factor;
            if (576 > t) {
                var e = r.data("paroller-factor-xs")
                  , i = e ? e : o.factorXs;
                return i ? i : a
            }
            if (768 >= t) {
                var c = r.data("paroller-factor-sm")
                  , l = c ? c : o.factorSm;
                return l ? l : a
            }
            if (1024 >= t) {
                var f = r.data("paroller-factor-md")
                  , s = f ? f : o.factorMd;
                return s ? s : a
            }
            if (1200 >= t) {
                var u = r.data("paroller-factor-lg")
                  , d = u ? u : o.factorLg;
                return d ? d : a
            }
            if (1920 >= t) {
                var p = r.data("paroller-factor-xl")
                  , g = p ? p : o.factorXl;
                return g ? g : a
            }
            return a
        },
        bgOffset: function(r, t) {
            return Math.round(r * t)
        },
        transform: function(r, t, o, n) {
            return Math.round((r - o / 2 + n) * t)
        }
    }
      , a = {
        background: function(r) {
            return r.css({
                "background-position": "unset"
            })
        },
        foreground: function(r) {
            return r.css({
                transform: "unset",
                transition: "unset"
            })
        }
    };
    $.fn.paroller = function(e) {
        var i = $(window).height()
          , c = $(document).height()
          , e = $.extend({
            factor: 0,
            factorXs: 0,
            factorSm: 0,
            factorMd: 0,
            factorLg: 0,
            factorXl: 0,
            transition: "translate 0.1s ease",
            type: "background",
            direction: "vertical"
        }, e);
        return this.each(function() {
            var l = $(this)
              , f = $(window).width()
              , s = l.offset().top
              , u = l.outerHeight()
              , d = l.data("paroller-type")
              , p = l.data("paroller-direction")
              , g = l.data("paroller-transition")
              , h = l.css("transform")
              , m = g ? g : e.transition
              , b = d ? d : e.type
              , v = p ? p : e.direction
              , w = 0
              , z = n.bgOffset(s, w)
              , x = n.transform(s, w, i, u);
            "background" === b ? "vertical" === v ? o.bgVertical(l, z) : "horizontal" === v && o.bgHorizontal(l, z) : "foreground" === b && ("vertical" === v ? o.vertical(l, x, m, h) : "horizontal" === v && o.horizontal(l, x, m, h)),
            $(window).on("resize", function() {
			    newScreenWidth = $(window).innerWidth();
			    //If window resize is larger than 70 pixels
			    if((screenWidth - newScreenWidth) > 100 || (newScreenWidth - screenWidth) > 100){
                        windowHeight = window.innerHeight,
                        screenWidth = $(window).innerWidth();
                        var d = $(this).scrollTop();
                        f = $(window).width(),
                        s = l.offset().top,
                        u = l.outerHeight(),
                        w = n.factor(l, f, e),
                        z = Math.round(s * w),
                        x = Math.round((s - i / 2 + u) * w),
                        r || (window.requestAnimationFrame(t),
                        r = !0),
                        "background" === b ? (a.background(l),
                        "vertical" === v ? o.bgVertical(l, z) : "horizontal" === v && o.bgHorizontal(l, z)) : "foreground" === b && c >= d && (a.foreground(l),
                        "vertical" === v ? o.vertical(l, x, m) : "horizontal" === v && o.horizontal(l, x, m))
                }
            }),
            $(window).on("scroll", function() {
                var a = $(this).scrollTop()
                  , d = $(document).scrollTop();
                w = 0 === d ? 0 : n.factor(l, f, e),
                z = Math.round((s - a) * w),
                x = Math.round((s - i / 2 + u - a) * w),
                r || (window.requestAnimationFrame(t),
                r = !0),
                "background" === b ? "vertical" === v ? o.bgVertical(l, z) : "horizontal" === v && o.bgHorizontal(l, z) : "foreground" === b && c >= a && ("vertical" === v ? o.vertical(l, x, m, h) : "horizontal" === v && o.horizontal(l, x, m, h))
            })
        })
    }
});
