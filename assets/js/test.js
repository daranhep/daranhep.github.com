!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { exports: {}, id: r, loaded: !1 });
    return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function(e, t, n) {
    e.exports = n(1);
  },
  function(e, t, n) {
    (window.FramerSite = {}),
      (FramerSite.run = function(e, t) {
        var n = document.body.classList.contains(e);
        n && t();
      }),
      n(2),
      n(3),
      n(4),
      n(5),
      n(13),
      n(14),
      n(15),
      n(16),
      n(17),
      n(18),
      n(21),
      n(22),
      n(23),
      n(24),
      n(25),
      n(26),
      n(27),
      n(28),
      n(29),
      n(30),
      n(31),
      n(32),
      n(33),
      n(34),
      n(35),
      n(36),
      n(37),
      n(38),
      n(40),
      n(41),
      n(42),
      n(43),
      n(44),
      n(45),
      n(46);
  },
  function(e, t) {
    window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = Array.prototype.forEach);
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = function(e) {
          function t() {
            (h = !0),
              window.addEventListener("mousemove", r, !0),
              c.removeEventListener("timeupdate", o, !1);
          }
          function n(e) {
            1 == h &&
              (r(e),
              window.removeEventListener("mousemove", r, !0),
              (c.currentTime = s * m(e)),
              c.addEventListener("timeupdate", o, !1)),
              (h = !1);
          }
          function r(e) {
            var t = e.clientX - i(d);
            t >= 0 && t <= f && (u.style.width = t + "px"),
              t < 0 && (u.style.width = "px"),
              t > f && (u.style.width = f + "px");
          }
          function o() {
            var e = f * (c.currentTime / s);
            (u.style.width = e + "px"),
              c.currentTime == s &&
                ((l.className = ""), (l.className = "controls-play")),
              p();
          }
          function a() {
            4 !== c.readyState && e.classList.add("loading"),
              c.paused
                ? ((l.className = "controls-pause"), c.play())
                : (c.pause(), (l.className = "controls-play"));
          }
          function i(e) {
            return e.getBoundingClientRect().left;
          }
          var c = e.querySelector("audio"),
            s = c.duration,
            l = e.querySelector("button"),
            u = e.querySelector(".controls-playhead"),
            d = e.querySelector(".controls-timeline"),
            f = d.offsetWidth - u.offsetWidth;
          l.addEventListener("click", a),
            c.addEventListener("timeupdate", o, !1),
            c.addEventListener("playing", function() {
              e.classList.remove("loading");
            }),
            d.addEventListener(
              "mousedown",
              function(e) {
                r(e), (c.currentTime = s * m(e));
              },
              !1
            );
          var p = function() {
              var t,
                n,
                r = e.querySelector(".timeleft"),
                o = parseInt(c.duration),
                a = parseInt(c.currentTime),
                i = o - a;
              (t = i % 60),
                (n = Math.floor(i / 60) % 60),
                (t = t < 10 ? "0" + t : t),
                (n = n < 10 ? "0" + n : n),
                (r.innerHTML = n + ":" + t);
            },
            m = function(e) {
              return (e.clientX - i(d)) / f;
            };
          u.addEventListener("mousedown", t, !1),
            window.addEventListener("mouseup", n, !1);
          var h = !1;
          c.addEventListener("canplaythrough", function() {
            s = c.duration;
          });
        },
        t = document.querySelectorAll(".audio");
      t.length &&
        (t.forEach(e),
        document.addEventListener(
          "play",
          function(e) {
            for (
              var t = document.getElementsByTagName("audio"),
                n = 0,
                r = t.length;
              n < r;
              n++
            )
              t[n] != e.target && t[n].pause();
          },
          !0
        ));
    });
  },
  function(e, t) {
    var n = {};
    (n.event = function(e) {
      e.category &&
        e.action &&
        window.dataLayer &&
        dataLayer.push({
          event: "eventTracking",
          trackingEventCategory: e.category,
          trackingEventAction: e.action,
          trackingEventLabel: e.label || "",
          trackingEventValue: e.value || ""
        });
    }),
      (n.conversion = function(e) {
        e.id &&
          e.label &&
          window.dataLayer &&
          dataLayer.push({
            event: "conversionTracking",
            trackingConversionId: e.id,
            trackingConversionLabel: e.label,
            trackingConversionValue: e.value || void 0,
            trackingConversionOrderId: e.orderId || void 0,
            trackingConversionCurrency: e.currency || void 0
          });
      }),
      (e.exports = n);
  },
  function(e, t, n) {
    var r = n(6),
      o = [].slice.call(document.querySelectorAll(".blocks")),
      a = o.map(function(e) {
        return { layers: [], ySpeed: 0, difference: 0 };
      }),
      i = function(e) {
        o.forEach(function(t, n) {
          var r = { blocks: [], height: 0 };
          t.querySelectorAll(":scope > div:not(.right)").forEach(function(e) {
            r.blocks.push(e), (r.height += e.clientHeight);
          });
          var o = { blocks: [], height: 0 };
          t.querySelectorAll(":scope > div.right").forEach(function(e) {
            o.blocks.push(e), (o.height += e.clientHeight);
          });
          var i = a[n];
          o.height < r.height
            ? ((i.layers = o.blocks),
              (i.ySpeed =
                (r.height - o.height) / (r.height - window.innerHeight)),
              (i.difference = r.height - o.height))
            : ((i.layers = r.blocks),
              (i.ySpeed =
                (o.height - r.height) / (o.height - window.innerHeight)),
              (i.difference = o.height - r.height)),
            e(!0);
        });
      },
      c = function() {
        o.forEach(function(e, t) {
          var n = a[t];
          if (n.layers[0]) {
            var o = (r.scrollTop() - r.getOffset(n.layers[0]).top) * n.ySpeed;
            r.scrollTop() - window.innerHeight >
              r.getOffset(n.layers[0]).top - window.innerHeight &&
            o <= n.difference
              ? n.layers.forEach(function(e) {
                  e.style.transform = "translateY(" + o + "px)";
                })
              : o < n.difference
              ? n.layers.forEach(function(e) {
                  e.style.transform = "translateY(0px)";
                })
              : o > n.difference &&
                n.layers.forEach(function(e) {
                  e.style.transform = "translateY(" + n.difference + "px)";
                });
          }
        });
      },
      s = function() {
        o.forEach(function(e) {
          e.style.transform = "translateY(0px)";
        });
      };
    window.addEventListener("load", function() {
      if (document.querySelectorAll(".blocks"))
        return i(function() {
          window.addEventListener("scroll", function() {
            window.innerWidth >= 768 && c();
          }),
            window.addEventListener("resize", function() {
              window.innerWidth >= 768 ? c() : s();
            });
        });
    });
  },
  function(e, t, n) {
    var r = n(7),
      o = n(12),
      a = {};
    (a.cookiesAllowed = function() {
      return "deny" !== o.get("cookieconsent_status");
    }),
      (a.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }),
      (a.isEmail = function(e) {
        var t = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return t.test(e);
      }),
      (a.debounce = function(e, t, n) {
        var r;
        return function() {
          var o = this,
            a = arguments,
            i = function() {
              (r = null), n || e.apply(o, a);
            },
            c = n && !r;
          clearTimeout(r), (r = setTimeout(i, t)), c && e.apply(o, a);
        };
      }),
      (a.getOffset = function(e) {
        var t = e.getBoundingClientRect(),
          n = window.pageXOffset || document.documentElement.scrollLeft,
          r = window.pageYOffset || document.documentElement.scrollTop;
        return { top: t.top + r, left: t.left + n };
      }),
      (a.findKeyInArray = function(e, t, n) {
        var r = 0;
        e.forEach(function(o, a) {
          Object.values(o).indexOf(t) > -1 && r++,
            a == e.length - 1 && "function" == typeof n && n(r);
        });
      }),
      (a.delay = function(e, t) {
        return setTimeout(t, 1e3 * e);
      }),
      (a.scrollTop = function() {
        return window.pageYOffset || document.documentElement.scrollTop;
      }),
      (a.scrollTo = function(e, t) {
        if (!t) {
          var n =
            document.body.scrollTop > 0
              ? document.body
              : document.documentElement;
          return (n.scrollTop = e);
        }
        t.scrollIntoView({ block: "start", behavior: "smooth" });
      }),
      (a.getParameterByName = function(e, t) {
        t || (t = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&"));
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
          r = n.exec(t);
        return r
          ? r[2]
            ? decodeURIComponent(r[2].replace(/\+/g, " "))
            : ""
          : null;
      }),
      (a.getParameters = function(e) {
        e || (e = window.location.href);
        var t = e.split("?")[1];
        return t;
      }),
      (a.getRedirectUrl = function(e, t, n, o) {
        var n = r.parse(n.substr(1)),
          a = Object.assign(o, n),
          i = e + t + "?" + r.stringify(a);
        return i;
      }),
      (a.redirectToLogin = function(e) {
        var t = "https://login.framer.com/?" + r.stringify({ redirect: e });
        document.location.href = t;
      }),
      (a.setFramerIdCookie = function(e) {
        var t = o.getJSON("framer-user-id"),
          n = [e];
        t &&
          (null != t && (n = t.all),
          null == n && (n = []),
          n.indexOf(e) === -1 && n.push(e)),
          o.set(
            "framer-user-id",
            { current: e, all: n },
            { secure: !0, expires: 1825 }
          );
      }),
      (a.getCookie = function() {
        return o.getJSON();
      }),
      (a.getFramerId = function() {
        var e = o.getJSON("framer-user-id");
        if (e) return e.current;
      }),
      (a.getEnv = function() {
        return "production" === window.__ENV__
          ? {
              FRAMER_TRACKING_API_BASE_URL: "https://events.framer.com",
              FRAMER_API_BASE_URL: "https://api.framer.com"
            }
          : {
              FRAMER_TRACKING_API_BASE_URL: "https://events.staging.framer.com",
              FRAMER_API_BASE_URL: "https://api.development.framer.com"
            };
      }),
      (a.Queue = function() {
        (this.currentTimer = null), (this.tasks = []);
      }),
      (a.Queue.prototype.add = function(e, t) {
        this.tasks.push({ callback: t, delay: e }),
          this.currentTimer || this.next();
      }),
      (a.Queue.prototype.next = function() {
        if (!this.currentTimer) {
          var e = this,
            t = this.tasks.shift();
          return t
            ? void (this.currentTimer = setTimeout(function() {
                t.callback.call(), (e.currentTimer = null), e.next();
              }, t.delay))
            : this.clear();
        }
      }),
      (a.Queue.prototype.clear = function() {
        this.currentTimer && clearTimeout(this.currentTimer),
          (this.currentTimer = null),
          (this.tasks.length = 0);
      }),
      (e.exports = a);
  },
  function(e, t, n) {
    "use strict";
    var r = n(8),
      o = n(11),
      a = n(10);
    e.exports = { formats: a, parse: o, stringify: r };
  },
  function(e, t, n) {
    "use strict";
    var r = n(9),
      o = n(10),
      a = {
        brackets: function(e) {
          return e + "[]";
        },
        indices: function(e, t) {
          return e + "[" + t + "]";
        },
        repeat: function(e) {
          return e;
        }
      },
      i = Date.prototype.toISOString,
      c = {
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        serializeDate: function(e) {
          return i.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      s = function e(t, n, o, a, i, s, l, u, d, f, p, m) {
        var h = t;
        if ("function" == typeof l) h = l(n, h);
        else if (h instanceof Date) h = f(h);
        else if (null === h) {
          if (a) return s && !m ? s(n, c.encoder) : n;
          h = "";
        }
        if (
          "string" == typeof h ||
          "number" == typeof h ||
          "boolean" == typeof h ||
          r.isBuffer(h)
        ) {
          if (s) {
            var y = m ? n : s(n, c.encoder);
            return [p(y) + "=" + p(s(h, c.encoder))];
          }
          return [p(n) + "=" + p(String(h))];
        }
        var v = [];
        if ("undefined" == typeof h) return v;
        var g;
        if (Array.isArray(l)) g = l;
        else {
          var b = Object.keys(h);
          g = u ? b.sort(u) : b;
        }
        for (var w = 0; w < g.length; ++w) {
          var L = g[w];
          (i && null === h[L]) ||
            (v = Array.isArray(h)
              ? v.concat(e(h[L], o(n, L), o, a, i, s, l, u, d, f, p, m))
              : v.concat(
                  e(
                    h[L],
                    n + (d ? "." + L : "[" + L + "]"),
                    o,
                    a,
                    i,
                    s,
                    l,
                    u,
                    d,
                    f,
                    p,
                    m
                  )
                ));
        }
        return v;
      };
    e.exports = function(e, t) {
      var n = e,
        i = t ? r.assign({}, t) : {};
      if (
        null !== i.encoder &&
        void 0 !== i.encoder &&
        "function" != typeof i.encoder
      )
        throw new TypeError("Encoder has to be a function.");
      var l = "undefined" == typeof i.delimiter ? c.delimiter : i.delimiter,
        u =
          "boolean" == typeof i.strictNullHandling
            ? i.strictNullHandling
            : c.strictNullHandling,
        d = "boolean" == typeof i.skipNulls ? i.skipNulls : c.skipNulls,
        f = "boolean" == typeof i.encode ? i.encode : c.encode,
        p = "function" == typeof i.encoder ? i.encoder : c.encoder,
        m = "function" == typeof i.sort ? i.sort : null,
        h = "undefined" != typeof i.allowDots && i.allowDots,
        y =
          "function" == typeof i.serializeDate
            ? i.serializeDate
            : c.serializeDate,
        v =
          "boolean" == typeof i.encodeValuesOnly
            ? i.encodeValuesOnly
            : c.encodeValuesOnly;
      if ("undefined" == typeof i.format) i.format = o.default;
      else if (!Object.prototype.hasOwnProperty.call(o.formatters, i.format))
        throw new TypeError("Unknown format option provided.");
      var g,
        b,
        w = o.formatters[i.format];
      "function" == typeof i.filter
        ? ((b = i.filter), (n = b("", n)))
        : Array.isArray(i.filter) && ((b = i.filter), (g = b));
      var L = [];
      if ("object" != typeof n || null === n) return "";
      var C;
      C =
        i.arrayFormat in a
          ? i.arrayFormat
          : "indices" in i
          ? i.indices
            ? "indices"
            : "repeat"
          : "indices";
      var E = a[C];
      g || (g = Object.keys(n)), m && g.sort(m);
      for (var S = 0; S < g.length; ++S) {
        var k = g[S];
        (d && null === n[k]) ||
          (L = L.concat(s(n[k], k, E, u, d, f ? p : null, b, m, h, y, w, v)));
      }
      var A = L.join(l),
        x = i.addQueryPrefix === !0 ? "?" : "";
      return A.length > 0 ? x + A : "";
    };
  },
  function(e, t) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      r = (function() {
        for (var e = [], t = 0; t < 256; ++t)
          e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e;
      })(),
      o = function(e) {
        for (var t; e.length; ) {
          var n = e.pop();
          if (((t = n.obj[n.prop]), Array.isArray(t))) {
            for (var r = [], o = 0; o < t.length; ++o)
              "undefined" != typeof t[o] && r.push(t[o]);
            n.obj[n.prop] = r;
          }
        }
        return t;
      },
      a = function(e, t) {
        for (
          var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
          r < e.length;
          ++r
        )
          "undefined" != typeof e[r] && (n[r] = e[r]);
        return n;
      },
      i = function e(t, r, o) {
        if (!r) return t;
        if ("object" != typeof r) {
          if (Array.isArray(t)) t.push(r);
          else {
            if ("object" != typeof t) return [t, r];
            (o.plainObjects ||
              o.allowPrototypes ||
              !n.call(Object.prototype, r)) &&
              (t[r] = !0);
          }
          return t;
        }
        if ("object" != typeof t) return [t].concat(r);
        var i = t;
        return (
          Array.isArray(t) && !Array.isArray(r) && (i = a(t, o)),
          Array.isArray(t) && Array.isArray(r)
            ? (r.forEach(function(r, a) {
                n.call(t, a)
                  ? t[a] && "object" == typeof t[a]
                    ? (t[a] = e(t[a], r, o))
                    : t.push(r)
                  : (t[a] = r);
              }),
              t)
            : Object.keys(r).reduce(function(t, a) {
                var i = r[a];
                return n.call(t, a) ? (t[a] = e(t[a], i, o)) : (t[a] = i), t;
              }, i)
        );
      },
      c = function(e, t) {
        return Object.keys(t).reduce(function(e, n) {
          return (e[n] = t[n]), e;
        }, e);
      },
      s = function(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (t) {
          return e;
        }
      },
      l = function(e) {
        if (0 === e.length) return e;
        for (
          var t = "string" == typeof e ? e : String(e), n = "", o = 0;
          o < t.length;
          ++o
        ) {
          var a = t.charCodeAt(o);
          45 === a ||
          46 === a ||
          95 === a ||
          126 === a ||
          (a >= 48 && a <= 57) ||
          (a >= 65 && a <= 90) ||
          (a >= 97 && a <= 122)
            ? (n += t.charAt(o))
            : a < 128
            ? (n += r[a])
            : a < 2048
            ? (n += r[192 | (a >> 6)] + r[128 | (63 & a)])
            : a < 55296 || a >= 57344
            ? (n +=
                r[224 | (a >> 12)] +
                r[128 | ((a >> 6) & 63)] +
                r[128 | (63 & a)])
            : ((o += 1),
              (a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(o)))),
              (n +=
                r[240 | (a >> 18)] +
                r[128 | ((a >> 12) & 63)] +
                r[128 | ((a >> 6) & 63)] +
                r[128 | (63 & a)]));
        }
        return n;
      },
      u = function(e) {
        for (
          var t = [{ obj: { o: e }, prop: "o" }], n = [], r = 0;
          r < t.length;
          ++r
        )
          for (
            var a = t[r], i = a.obj[a.prop], c = Object.keys(i), s = 0;
            s < c.length;
            ++s
          ) {
            var l = c[s],
              u = i[l];
            "object" == typeof u &&
              null !== u &&
              n.indexOf(u) === -1 &&
              (t.push({ obj: i, prop: l }), n.push(u));
          }
        return o(t);
      },
      d = function(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e);
      },
      f = function(e) {
        return (
          null !== e &&
          "undefined" != typeof e &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        );
      };
    e.exports = {
      arrayToObject: a,
      assign: c,
      compact: u,
      decode: s,
      encode: l,
      isBuffer: f,
      isRegExp: d,
      merge: i
    };
  },
  function(e, t) {
    "use strict";
    var n = String.prototype.replace,
      r = /%20/g;
    e.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function(e) {
          return n.call(e, r, "+");
        },
        RFC3986: function(e) {
          return e;
        }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(9),
      o = Object.prototype.hasOwnProperty,
      a = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        parameterLimit: 1e3,
        plainObjects: !1,
        strictNullHandling: !1
      },
      i = function(e, t) {
        for (
          var n = {},
            r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            c = r.split(t.delimiter, i),
            s = 0;
          s < c.length;
          ++s
        ) {
          var l,
            u,
            d = c[s],
            f = d.indexOf("]="),
            p = f === -1 ? d.indexOf("=") : f + 1;
          p === -1
            ? ((l = t.decoder(d, a.decoder)),
              (u = t.strictNullHandling ? null : ""))
            : ((l = t.decoder(d.slice(0, p), a.decoder)),
              (u = t.decoder(d.slice(p + 1), a.decoder))),
            o.call(n, l) ? (n[l] = [].concat(n[l]).concat(u)) : (n[l] = u);
        }
        return n;
      },
      c = function(e, t, n) {
        for (var r = t, o = e.length - 1; o >= 0; --o) {
          var a,
            i = e[o];
          if ("[]" === i) (a = []), (a = a.concat(r));
          else {
            a = n.plainObjects ? Object.create(null) : {};
            var c =
                "[" === i.charAt(0) && "]" === i.charAt(i.length - 1)
                  ? i.slice(1, -1)
                  : i,
              s = parseInt(c, 10);
            !isNaN(s) &&
            i !== c &&
            String(s) === c &&
            s >= 0 &&
            n.parseArrays &&
            s <= n.arrayLimit
              ? ((a = []), (a[s] = r))
              : (a[c] = r);
          }
          r = a;
        }
        return r;
      },
      s = function(e, t, n) {
        if (e) {
          var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            a = /(\[[^[\]]*])/,
            i = /(\[[^[\]]*])/g,
            s = a.exec(r),
            l = s ? r.slice(0, s.index) : r,
            u = [];
          if (l) {
            if (
              !n.plainObjects &&
              o.call(Object.prototype, l) &&
              !n.allowPrototypes
            )
              return;
            u.push(l);
          }
          for (var d = 0; null !== (s = i.exec(r)) && d < n.depth; ) {
            if (
              ((d += 1),
              !n.plainObjects &&
                o.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            u.push(s[1]);
          }
          return s && u.push("[" + r.slice(s.index) + "]"), c(u, t, n);
        }
      };
    e.exports = function(e, t) {
      var n = t ? r.assign({}, t) : {};
      if (
        null !== n.decoder &&
        void 0 !== n.decoder &&
        "function" != typeof n.decoder
      )
        throw new TypeError("Decoder has to be a function.");
      if (
        ((n.ignoreQueryPrefix = n.ignoreQueryPrefix === !0),
        (n.delimiter =
          "string" == typeof n.delimiter || r.isRegExp(n.delimiter)
            ? n.delimiter
            : a.delimiter),
        (n.depth = "number" == typeof n.depth ? n.depth : a.depth),
        (n.arrayLimit =
          "number" == typeof n.arrayLimit ? n.arrayLimit : a.arrayLimit),
        (n.parseArrays = n.parseArrays !== !1),
        (n.decoder = "function" == typeof n.decoder ? n.decoder : a.decoder),
        (n.allowDots =
          "boolean" == typeof n.allowDots ? n.allowDots : a.allowDots),
        (n.plainObjects =
          "boolean" == typeof n.plainObjects ? n.plainObjects : a.plainObjects),
        (n.allowPrototypes =
          "boolean" == typeof n.allowPrototypes
            ? n.allowPrototypes
            : a.allowPrototypes),
        (n.parameterLimit =
          "number" == typeof n.parameterLimit
            ? n.parameterLimit
            : a.parameterLimit),
        (n.strictNullHandling =
          "boolean" == typeof n.strictNullHandling
            ? n.strictNullHandling
            : a.strictNullHandling),
        "" === e || null === e || "undefined" == typeof e)
      )
        return n.plainObjects ? Object.create(null) : {};
      for (
        var o = "string" == typeof e ? i(e, n) : e,
          c = n.plainObjects ? Object.create(null) : {},
          l = Object.keys(o),
          u = 0;
        u < l.length;
        ++u
      ) {
        var d = l[u],
          f = s(d, o[d], n);
        c = r.merge(c, f, n);
      }
      return r.compact(c);
    };
  },
  function(e, t, n) {
    var r, o;
    !(function(a) {
      var i = !1;
      if (
        ((r = a),
        (o = "function" == typeof r ? r.call(t, n, t, e) : r),
        !(void 0 !== o && (e.exports = o)),
        (i = !0),
        (e.exports = a()),
        (i = !0),
        !i)
      ) {
        var c = window.Cookies,
          s = (window.Cookies = a());
        s.noConflict = function() {
          return (window.Cookies = c), s;
        };
      }
    })(function() {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      function t(n) {
        function r(t, o, a) {
          var i;
          if ("undefined" != typeof document) {
            if (arguments.length > 1) {
              if (
                ((a = e({ path: "/" }, r.defaults, a)),
                "number" == typeof a.expires)
              ) {
                var c = new Date();
                c.setMilliseconds(c.getMilliseconds() + 864e5 * a.expires),
                  (a.expires = c);
              }
              a.expires = a.expires ? a.expires.toUTCString() : "";
              try {
                (i = JSON.stringify(o)), /^[\{\[]/.test(i) && (o = i);
              } catch (e) {}
              (o = n.write
                ? n.write(o, t)
                : encodeURIComponent(String(o)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (t = encodeURIComponent(String(t))),
                (t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
                (t = t.replace(/[\(\)]/g, escape));
              var s = "";
              for (var l in a)
                a[l] && ((s += "; " + l), a[l] !== !0 && (s += "=" + a[l]));
              return (document.cookie = t + "=" + o + s);
            }
            t || (i = {});
            for (
              var u = document.cookie ? document.cookie.split("; ") : [],
                d = /(%[0-9A-Z]{2})+/g,
                f = 0;
              f < u.length;
              f++
            ) {
              var p = u[f].split("="),
                m = p.slice(1).join("=");
              this.json || '"' !== m.charAt(0) || (m = m.slice(1, -1));
              try {
                var h = p[0].replace(d, decodeURIComponent);
                if (
                  ((m = n.read
                    ? n.read(m, h)
                    : n(m, h) || m.replace(d, decodeURIComponent)),
                  this.json)
                )
                  try {
                    m = JSON.parse(m);
                  } catch (e) {}
                if (t === h) {
                  i = m;
                  break;
                }
                t || (i[h] = m);
              } catch (e) {}
            }
            return i;
          }
        }
        return (
          (r.set = r),
          (r.get = function(e) {
            return r.call(r, e);
          }),
          (r.getJSON = function() {
            return r.apply({ json: !0 }, [].slice.call(arguments));
          }),
          (r.defaults = {}),
          (r.remove = function(t, n) {
            r(t, "", e(n, { expires: -1 }));
          }),
          (r.withConverter = t),
          r
        );
      }
      return t(function() {});
    });
  },
  function(e, t, n) {
    var r = n(6);
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.querySelectorAll(".chat-trigger"),
        t = function(e) {
          r.cookiesAllowed() &&
            e.addEventListener("click", function() {
              event.preventDefault(),
                Intercom(
                  "showNewMessage",
                  event.target.getAttribute("data-message")
                );
            });
        };
      e.length && e.forEach(t);
    });
  },
  function(e, t, n) {
    var r = n(12),
      o = n(6);
    window.addEventListener("load", function() {
      var e = document.getElementById("cookie-wrapper"),
        t = document.getElementById("cookie-trigger"),
        n = document.querySelector(".cookie-message");
      (giveCookieConsent = function() {
        (window.dataLayer = window.dataLayer || []),
          window.dataLayer.push({
            event: "cookieConsentAllow",
            cookieConsent: "allow"
          }),
          r.set("cookieconsent_status", "allow", { secure: !0, expires: 365 });
      }),
        (handleStatusChange = function(e) {
          return "deny" === e
            ? (window.dataLayer.push({ cookieConsent: "deny" }), void a())
            : void giveCookieConsent();
        });
      var a = function() {
        for (
          var e = ["cookieconsent_status"],
            t = document.cookie.split(";"),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n],
            o = r.indexOf("="),
            a = o > -1 ? r.substr(0, o) : r;
          (a = a.trim()),
            (void 0 !== e && 0 != e.length && e.indexOf(a) != -1) ||
              (document.cookie =
                a + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/");
        }
      };
      t &&
        (t.addEventListener("click", function(t) {
          t.preventDefault(),
            n.classList.contains("enable") && n.classList.remove("enable"),
            e.classList.add("enable"),
            window.Intercom && window.Intercom("shutdown");
        }),
        document
          .querySelector(".cc-allow")
          .addEventListener("click", function(t) {
            t.preventDefault(),
              handleStatusChange("enable"),
              r.set("cookieconsent_status", "allow", {
                secure: !0,
                expires: 365
              }),
              e.classList.remove("enable");
          }),
        document
          .querySelector(".cc-deny")
          .addEventListener("click", function(t) {
            t.preventDefault(),
              handleStatusChange("deny"),
              r.set("cookieconsent_status", "deny", {
                secure: !0,
                expires: 365
              }),
              e.classList.remove("enable");
          })),
        "deny" !== r.getJSON("cookieconsent_status") &&
          (handleStatusChange("enable"),
          "hidden" !== r.getJSON("cookiemessage_status") &&
            (n.classList.add("enable"),
            n.querySelector(".cm-close").addEventListener("click", function(e) {
              e.preventDefault(),
                r.set("cookiemessage_status", "hidden", {
                  secure: !0,
                  expires: 365
                }),
                n.classList.remove("enable");
            }),
            window.Intercom && o.isMobile() && window.Intercom("shutdown")));
    });
  },
  function(e, t, n) {
    var r = n(6);
    document.addEventListener("DOMContentLoaded", function() {
      if (document.querySelector(".download-cta") && r.isMobile()) {
        var e = document.querySelector(".download-sheet"),
          t = document.querySelector(".sheet-input"),
          n = function() {
            document.body.classList.toggle("no-scroll"),
              document.querySelector("html").classList.toggle("no-scroll"),
              e.classList.toggle("active"),
              window.Intercom && window.Intercom("shutdown");
          },
          o = document.querySelectorAll(".download-cta");
        o.forEach(function(e) {
          e.removeAttribute("href"),
            e.addEventListener("click", function() {
              n(),
                t.focus(),
                window.scrollTo(0, 0),
                (document.body.scrollTop = 0);
            });
        }),
          document
            .querySelector(".close-sheet")
            .addEventListener("click", function() {
              n();
            });
      }
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = n(4),
      a = "https://dl.devmate.com/com.framer.x/FramerX.zip";
    FramerSite.download = function() {
      r.delay(3, function() {
        window.location.href = a;
      }),
        r.cookiesAllowed() &&
          (o.event({ category: "Download", action: "Framer Studio", value: a }),
          o.conversion({ id: "965556087", label: "Kf1KCPixhH8Q9-60zAM" }));
    };
  },
  function(e, t) {
    var n = document.querySelectorAll(".footer-list h6");
    n.forEach(function(e, t) {
      e.addEventListener("click", function(e) {
        var t = e.currentTarget.parentNode;
        t.classList.toggle("active");
      });
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = n(19),
      a = n(20),
      i = n(4),
      c = function(e) {
        e.classList.add("loading");
      },
      s = function(e, t) {
        t
          ? (window.location.href = t)
          : (e.classList.remove("loading"), e.classList.add("success"));
      },
      l = function(e, t) {
        e.classList.remove("loading"),
          e.classList.add("error"),
          t && e.querySelector("input[type='checkbox']").classList.add("error");
      },
      u = function(e, t) {
        var n = document.getElementById(e);
        n && n.addEventListener("submit", t);
      },
      d = function(e, t) {
        r.cookiesAllowed() &&
          (i.event({ category: "Newsletter", action: e, label: t }),
          i.conversion({ id: "965556087", label: "xDmVCL3hh38Q9-60zAM" }));
      },
      f = function(e) {
        e.preventDefault();
        var t = this,
          n = t.getAttribute("data-id") || "",
          a = t.querySelector(".email").value,
          i = t.getAttribute("data-redirect"),
          u = t.querySelector(".newsletter-form-subscribe"),
          f = r.isEmail(a),
          p = u && u.checked;
        c(t),
          f && p
            ? o.subscribe(
                n,
                { email: a, name: "" },
                function() {
                  s(t, i + ("?email=" + a)), d("Subscribe", t.id);
                },
                function() {
                  l(t);
                }
              )
            : f && !p
            ? (t.classList.add("error-required"), l(t))
            : l(t),
          u.addEventListener("change", function() {
            t.classList.remove("error-required");
          });
      },
      p = function(e) {
        var t = this,
          n = t.getAttribute("data-id"),
          a = t.getAttribute("data-success"),
          u = t.querySelector(".email").value,
          f = t.querySelector(".newsletter-form-subscribe"),
          p = r.isEmail(u),
          m = f && f.checked;
        if (
          (f.addEventListener("change", function() {
            this.checked
              ? t.classList.remove("error-required")
              : t.classList.add("error-required");
          }),
          e.preventDefault(),
          p && m)
        ) {
          var h = function() {
            o.sendEmail(n, { email: u }, function() {
              i.event({
                category: "Form",
                action: "Download submit",
                label: n
              }),
                s(t, a);
            });
          };
          c(t);
          var f = t.querySelector(".formSubscribe");
          o.subscribe("", { email: u, name: "" }, function(e) {
            d("Mobile Form", n), h();
          });
        } else p && !m && (t.classList.add("error-required"), l(t));
      },
      m = function(e) {
        e.preventDefault();
        var t = this,
          n = {},
          a = t.getAttribute("action"),
          i = t.querySelector(".email").value,
          u = t.querySelector(".name").value,
          f = r.isEmail(i),
          p = t.querySelector(".newsletter-form-subscribe"),
          m = p && p.checked;
        if (
          (c(t),
          t.querySelectorAll("input").forEach(function(e) {
            n[e.getAttribute("name")] = e.value;
          }),
          p.addEventListener("change", function() {
            this.checked
              ? t.classList.remove("error-required")
              : t.classList.add("error-required");
          }),
          t.checkValidity() && f && m && "" !== t.querySelector(".file").value)
        ) {
          var p = document.getElementById("subscribe");
          p &&
            p.checked &&
            o.subscribe("", { email: i, name: u }, function() {
              d("Education");
            }),
            o.sendEmail(
              "edu-code",
              { email: i, name: u },
              function() {
                o.sendNetlify(a, n, function() {
                  s(t, a);
                });
              },
              function() {
                l(t);
              }
            );
        } else
          t.checkValidity() && f && "" !== t.querySelector(".file").value && !m
            ? (t.classList.add("error-required"), l(t))
            : l(t);
      },
      h = function(e) {
        e.preventDefault();
        var t = this,
          n = t.getAttribute("action"),
          r = t.querySelectorAll("textarea"),
          s = t.querySelector("input[name=reason]:checked");
        if ((c(t), s)) {
          var l = "";
          r.forEach(function(e) {
            "" !== e.value && (l = e.value);
          });
          var u = { value: s.value, comment: l },
            d = function() {
              "employer" === s.value
                ? d(t, "/subscription/unsubscribe")
                : d(t, n);
            },
            f = function(e) {
              console.log(e);
            };
          o.track("cancellation_feedback", a.get("fID"), u, d, f),
            i.event({
              category: "Subscription",
              action: "Cancel Feedback",
              label: s.value
            });
        } else f(t);
      },
      y = function(e) {
        e.preventDefault();
        var t = this,
          n = t.getAttribute("data-redirect"),
          a = t.querySelector(".email").value;
        c(t),
          t.checkValidity() && r.isEmail(a)
            ? o.sendEmail(
                "discount-code",
                { email: a },
                function() {
                  s(t, n);
                },
                function() {
                  l(t);
                }
              )
            : l(t);
      };
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll(".newsletter-form").forEach(function(e) {
        e.addEventListener("submit", f);
      }),
        document.querySelectorAll(".form-download").forEach(function(e) {
          e.addEventListener("submit", p);
        }),
        u("discount-form", y),
        u("cancel-form", h),
        u("edu-form", m);
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = function(e) {
        var t = [];
        for (var n in e) {
          var r = e[n];
          t.push(n + "=" + encodeURIComponent(r));
        }
        return t.join("&");
      },
      a = function(e) {
        var t = new XMLHttpRequest();
        if ((t.open(e.type, e.url), e.headers))
          for (var n in e.headers) t.setRequestHeader(n, e.headers[n]);
        (t.onload = function() {
          200 === t.status || 201 === t.status
            ? e.res(t.response)
            : e.rej(t.responseText);
        }),
          "application/x-www-form-urlencoded" === e.headers["Content-Type"]
            ? (e.body = o(e.body))
            : "application/json" === e.headers["Content-Type"] &&
              (e.body = JSON.stringify(e.body)),
          t.send(e.body);
      },
      i = {};
    (i.subscribe = function(e, t, n, r) {
      a({
        type: "POST",
        url:
          "https://framer-newsletter-api.herokuapp.com/subscribe?listId=" + e,
        body: t,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            window.btoa("framer:9E182110-15A6-4858-8EE7-499D794381C0")
        },
        res: n,
        rej: r
      });
    }),
      (i.sendEmail = function(e, t, n, r) {
        a({
          type: "POST",
          url: "https://mailer.framer.com/api/1/send/" + e,
          body: t,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          res: n,
          rej: r
        });
      }),
      (i.sendNetlify = function(e, t, n, r) {
        a({
          type: "POST",
          url: e,
          body: t,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          res: n,
          rej: r
        });
      }),
      (i.track = function(e, t, n, o, i) {
        var c = r.getEnv().FRAMER_TRACKING_API_BASE_URL + "/track",
          s = function() {
            var e = function() {
              return Math.floor(65536 * (1 + Math.random()))
                .toString(16)
                .substring(1);
            };
            return (
              "" +
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          },
          l = [
            {
              source: "framer.site",
              timestamp: Date.now(),
              data: { type: e, uuid: s(), context: { userId: t }, event: n }
            }
          ];
        a({
          type: "POST",
          url: c,
          body: l,
          headers: { "Content-Type": "application/json" },
          res: o,
          rej: i
        });
      }),
      (e.exports = i);
  },
  function(e, t) {
    var n = {};
    (n.set = function(e, t) {
      localStorage.setItem(e, JSON.stringify(t));
    }),
      (n.get = function(e) {
        return JSON.parse(localStorage.getItem(e));
      }),
      (e.exports = n);
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.querySelector("input[type='file']");
      null !== e &&
        e.addEventListener("change", function() {
          document.querySelector(".file-name").textContent = e.value
            .split("\\")
            .pop();
        });
    });
  },
  function(e, t, n) {
    var r = (n(6),
    function() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoia3Jpam5yaWpzaG91d2VyIiwiYSI6ImNqZndlamIzcjJnaTUycm83c3U3cXBqNGoifQ.VlfngEP3bc9wmw42da3DIQ";
      var e,
        t = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/krijnrijshouwer/cjfxqwli578aw2so01nv6t3ev",
          center: [0, 0],
          attributionControl: !1,
          pitch: 50,
          bearing: 10,
          zoom: 6,
          interactive: !1
        }),
        n = new mapboxgl.LngLatBounds(),
        r = function() {
          var e = 180;
          window.innerWidth <= 600 && (e = 60),
            t.fitBounds(n, { padding: e, animate: !1 });
        };
      window.addEventListener("resize", function() {
        r();
      }),
        t.on("load", function() {
          var o = function(e, n, r) {
              t.addSource(e, {
                type: "geojson",
                data: { type: "Point", coordinates: n }
              });
              var o = (new mapboxgl.Popup({ closeButton: !1, closeOnClick: !1 })
                .setHTML("<div class='popup'>" + r.outerHTML + "</div>")
                .setLngLat(n)
                .addTo(t),
              document.createElement("div"));
              o.className = "marker";
              var a = new mapboxgl.Marker(o).setLngLat(n).addTo(t);
              a.togglePopup();
            },
            a = Array.prototype.slice.call(
              document.querySelectorAll("#meetup-locations > li a")
            );
          a.sort(function(e, t) {
            return (
              parseInt(e.getAttribute("data-order")) -
              parseInt(t.getAttribute("data-order"))
            );
          }),
            a.forEach(function(e) {
              var t = e.getAttribute("data-city"),
                r = JSON.parse(e.getAttribute("data-location"));
              o(t, r, e), n.extend(r);
            }),
            r(),
            (e = document.querySelectorAll("#map .popup")),
            e.forEach(function(e) {
              var t = e.querySelector("a");
              t.setAttribute("data-href", t.getAttribute("href")),
                e.addEventListener("mouseenter", function() {
                  e.classList.contains("visible") && clearInterval(c);
                }),
                e.addEventListener("mouseleave", function() {
                  e.classList.contains("visible") && (c = i());
                });
            });
          var c = i();
        }),
        t.on("sourcedata", function(e) {
          t.areTilesLoaded() &&
            t.isStyleLoaded() &&
            ((document.querySelector("#map").style.opacity = 1),
            t.off("sourcedata"));
        });
      var o,
        a = 0,
        i = function() {
          var t = function(e) {
            o &&
              (o.classList.toggle("visible"),
              o.querySelector("a").removeAttribute("href")),
              e.classList.toggle("visible");
            var t = e.querySelector("a");
            t.setAttribute("href", t.getAttribute("data-href")), (o = e);
          };
          t(e[a]);
          var n = setInterval(function() {
            a++, a == e.length && (a = 0), t(e[a]);
          }, 3e3);
          return n;
        };
    });
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelector("#map") && r();
    });
  },
  function(e, t, n) {
    var r = n(6);
    document.addEventListener("DOMContentLoaded", function() {
      r.isMobile() && document.body.classList.add("mobile");
    });
  },
  function(e, t, n) {
    var r = n(12),
      o = n(4),
      a = [
        {
          type: "Windows",
          trigger:
            navigator.platform.indexOf("Win") > -1 &&
            !JSON.parse(localStorage.getItem("subscribed")),
          href: "/forms/windows",
          content: {
            icon:
              "<svg width='41' height='41'><g><defs><path d='M 20.5 0 C 31.822 0 41 9.178 41 20.5 C 41 31.822 31.822 41 20.5 41 C 9.178 41 0 31.822 0 20.5 C 0 9.178 9.178 0 20.5 0 Z' id='a1008z'></path><clipPath id='a1009z'><use xlink:href='#a1008z'></use></clipPath></defs><use xlink:href='#a1008z' fill='hsl(0, 0%, 100%)' clip-path='url(#a1009z)' stroke-width='2' stroke='hsla(0, 0%, 0%, 0.1)'></use></g><path d='M 21 21 L 29 21 L 29 29 L 21 29 Z' fill='rgba(255, 185, 1, 1.00)'></path><path d='M 21 12 L 29 12 L 29 20 L 21 20 Z' fill='rgba(129, 185, 3, 1.00)'></path><path d='M 12 21 L 20 21 L 20 29 L 12 29 Z' fill='rgba(0, 164, 239, 1.00)'></path><path d='M 12 12 L 20 12 L 20 20 L 12 20 Z' fill='rgba(244, 77, 36, 1.00)'></path></svg>",
            title: "Framer is for macOS only.",
            subtitle: "Get notified once we launch on Windows."
          }
        }
      ],
      i = function() {
        var e = document.querySelector(".notification:not(.static)"),
          t = function(t) {
            var n = r.getJSON("notification");
            "dismissed" != n &&
              ((e.querySelector(".notification-title").innerHTML =
                t.content.title),
              (e.querySelector(".notification-subtitle").innerHTML =
                t.content.subtitle),
              (e.querySelector(".notification-icon").innerHTML =
                t.content.icon),
              e.setAttribute("href", t.href),
              e.classList.add("enable"),
              e.addEventListener("click", function(e) {
                o.event({
                  category: "Notification",
                  action: "Web",
                  label: t.type
                });
              }));
          },
          n = function() {
            e.classList.remove("enable"),
              r.set("notification", "dismissed", { secure: !0, expires: 31 });
          };
        e
          .querySelector(".notification-close")
          .addEventListener("click", function(e) {
            e.preventDefault(), e.stopPropagation(), n();
          }),
          a.every(function(e) {
            return !e.trigger || (t(e), !1);
          });
      };
    document.addEventListener("DOMContentLoaded", function() {
      !document.querySelector(".hide-notification") &&
        document.querySelector(".notification") &&
        i();
    });
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.querySelector(".overlay"),
        t = document.querySelector(".overlay-background"),
        n = document.getElementById("name"),
        r = document.querySelectorAll(".overlay-trigger"),
        o = document.querySelector(".close-overlay"),
        a = function() {
          e.classList.add("active"),
            t.classList.add("active"),
            document.body.classList.add("no-scroll"),
            document.querySelector("html").classList.add("no-scroll"),
            setTimeout(function() {
              n.focus();
            }, 100);
        },
        i = function() {
          e.classList.remove("active"),
            t.classList.remove("active"),
            document.body.classList.remove("no-scroll"),
            document.querySelector("html").classList.remove("no-scroll");
        };
      (window.FramerSite.overlayOpen = a),
        r.length > 0 &&
          (r.forEach(function(e) {
            e.addEventListener("click", function(e) {
              e.preventDefault(), a();
            });
          }),
          e.addEventListener("click", function(e) {
            const t = e.target.classList.contains("overlay");
            t && i();
          }),
          o.addEventListener("click", function() {
            i();
          }),
          window.addEventListener("keyup", function(e) {
            "Escape" === e.key && i();
          }));
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = [],
      a = function(e) {
        document.querySelectorAll(".parallax").forEach(function(e) {
          var t = window
              .getComputedStyle(e)
              .transform.replace(/[^0-9\-.,]/g, "")
              .split(","),
            n = r.getOffset(e).top - window.innerHeight,
            a = r.getOffset(e).top + e.offsetHeight;
          if ("false" === e.getAttribute("data-threshold")) n = 0;
          else if (e.getAttribute("data-delay"))
            var i =
              n + (window.innerHeight / 100) * e.getAttribute("data-delay");
          o.push({
            layer: e,
            offset: n,
            limit: a,
            delay: i || !1,
            position: parseInt(t[5]) || 0,
            speed: e.getAttribute("data-speed")
          });
        }),
          e(!0);
      };
    (calculateParallax = function() {
      o.forEach(function(e) {
        if (
          (r.scrollTop() > e.offset || 0 === e.offset) &&
          r.scrollTop() < e.limit
        ) {
          var t;
          (t = e.delay
            ? r.scrollTop() < e.delay
              ? 0
              : e.position - (r.scrollTop() - e.delay) / e.speed
            : e.position - (r.scrollTop() - e.offset) / e.speed),
            (e.layer.style.transform = "translateY(" + t + "px)");
        }
      });
    }),
      window.addEventListener("load", function() {
        return a(function() {
          return (
            calculateParallax(),
            window.addEventListener("scroll", function() {
              calculateParallax();
            }),
            window.addEventListener("resize", function() {
              return calculateParallax();
            })
          );
        });
      });
  },
  function(e, t, n) {
    var r = n(6),
      o = n(4),
      a = function() {
        var e = document.querySelector(".player"),
          t = document.querySelector(".video-close"),
          n = document.querySelectorAll(".js-movie"),
          a = function(t) {
            e.classList.toggle("open"),
              document.body.classList.toggle("playing"),
              document.documentElement.classList.toggle("no-scroll"),
              t
                ? e.classList.add("show-warning")
                : e.classList.remove("show-warning");
          };
        t.addEventListener("click", function() {
          a(), window.ytPlayer.stopVideo();
        }),
          n.forEach(function(e) {
            e.addEventListener("click", function(e) {
              e.preventDefault();
              var t = e.currentTarget.getAttribute("data-id"),
                n = {
                  start: e.currentTarget.getAttribute("data-start"),
                  end: e.currentTarget.getAttribute("data-end")
                },
                r = e.currentTarget.getAttribute("data-warning");
              c(t, n, "show" === r);
            });
          });
        var i = function(e, t) {
            var n = document.createElement("script");
            n.src = "https://www.youtube.com/iframe_api";
            var r = document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r),
              (window.onYouTubeIframeAPIReady = function() {
                window.ytPlayer = new YT.Player("yt", {
                  videoId: e,
                  height: "1920",
                  width: "1080",
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    showinfo: 0,
                    modestbranding: 1,
                    loop: 0,
                    fs: 0,
                    cc_load_policy: 0,
                    iv_load_policy: 3,
                    autohide: 1,
                    color: "white",
                    rel: 0,
                    start: parseFloat(t.start) || 0,
                    end: parseFloat(t.end) || null
                  }
                });
              });
          },
          c = function(e, t, n) {
            void 0 === window.ytPlayer
              ? i(e, t)
              : window.ytPlayer.loadVideoById({
                  videoId: e,
                  startSeconds: t.start || 0,
                  endSeconds: t.end || null
                }),
              a(n),
              o.event({ category: "Video", action: "Play", label: e });
          },
          s = ["4_Zy1V701qw"],
          l = r.getParameterByName("play"),
          u = s.some(function(e) {
            return e === l;
          });
        u && c(l);
      };
    document.addEventListener("DOMContentLoaded", function() {
      a();
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = n(12),
      a = function() {
        return document.domain;
      },
      i = function() {
        return document.referrer;
      },
      c = function() {
        return Math.floor(Date.now() / 1e3);
      },
      s = function(e) {
        var t;
        return (
          (t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0]),
          (t = t.split(":")[0]),
          (t = t.split("?")[0])
        );
      },
      l = function() {
        var e = document.location.search;
        e = e.split("+").join(" ");
        for (
          var t = {}, n = void 0, r = /[?&]?([^=]+)=([^&]*)/g;
          (n = r.exec(e));

        ) {
          var o = decodeURIComponent(n[1]).toLowerCase();
          t[o] = decodeURIComponent(n[2]);
        }
        return t;
      },
      u = function() {
        var e = [],
          t = o.get("history");
        if (t) {
          e = JSON.parse(t);
          var n = e[e.length - 1],
            r = c() - n.date,
            i = 300;
          if (r < i) return;
        }
        var s = window.location.pathname;
        if ("/welcome/" !== s) {
          var u = l();
          e.push({
            date: c(),
            first_url: window.location.href,
            previous_url: document.referrer,
            utm_campaign: u.utm_campaign,
            utm_medium: u.utm_medium,
            utm_source: u.utm_source
          });
          var d = { domain: a(), expires: 365 };
          o.set("history", e, d);
        }
      },
      d = function() {
        var e = s(i()),
          t = e !== a();
        if ((t && u(), !o.get("ref"))) {
          var n = l();
          if (n.ref) {
            var r = { domain: a(), expires: 365 };
            o.set("ref", n.ref, r);
          }
        }
      };
    r.cookiesAllowed() && d();
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = function(e) {
        var t = e.getAttribute("data-type"),
          n = e.getAttribute("data-handle"),
          r = e.getAttribute("data-hashtags"),
          o = e.getAttribute("data-tweet"),
          a = e.getAttribute("data-url"),
          i = window.location.href.split("?")[0],
          c = document.title.split("- ")[1],
          s = "";
        if (document.querySelector(".blog"))
          var s =
            "&utm_source=website&utm_medium=blog&utm_campaign=" + encodeURI(c);
        var l = "",
          u = "";
        switch ((n && (u = "by @" + n), t)) {
          case "twitter":
            var d = 'Read "' + c + '" ' + u + " on the @framer blog";
            o && (d = o),
              a || (a = i),
              document.querySelector(".teaser")
                ? (s =
                    "&utm_source=referral&utm_medium=Twitter&utm_campaign=framer_x_teaser")
                : document.querySelector(".blackfriday") &&
                  (s =
                    "&utm_source=referral&utm_medium=Twitter&utm_campaign=black_friday"),
              (r = r ? "&hashtags=" + encodeURIComponent(r) : ""),
              (l =
                "https://twitter.com/share?url=" +
                a +
                "&related=framer&text=" +
                encodeURIComponent(d) +
                r);
            break;
          case "facebook":
            var f = a || i;
            document.querySelector(".teaser") &&
              (s =
                "&utm_source=referral&utm_medium=Facebook&utm_campaign=framer_x_teaser"),
              (l =
                "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(f));
        }
        e.setAttribute("href", l + s);
      };
      (shareButtons = document.querySelectorAll(".share")),
        shareButtons.length &&
          shareButtons.forEach(function(t) {
            e(t),
              t.addEventListener("updateHref", function() {
                e(t);
              });
          });
    });
  },
  function(e, t) {
    var n = function() {
      var e = document.querySelectorAll(".fade"),
        t = 0,
        n = function() {
          var r = function(e) {
            e.classList.add("visible"), t++;
          };
          e.forEach(function(e) {
            var t = e.classList.contains("visible");
            if (!t) {
              var n = e.classList.contains("force");
              if (n) return void r(e);
              var o = window.innerHeight - 100,
                a = e.getBoundingClientRect().top,
                i = a < o;
              i && r(e);
            }
          }),
            t < e.length && window.requestAnimationFrame(n);
        },
        r = function() {
          e.forEach(function(e) {
            e.classList.remove("fade");
          });
        };
      e.length && window.innerWidth > 768 ? setTimeout(n, 200) : r();
    };
    document.addEventListener("DOMContentLoaded", n);
  },
  function(e, t, n) {
    var r = n(6),
      o = function() {
        var e = document.querySelector(".sidebar-scroll .active .sub-sections");
        if (e) {
          var t = [],
            n = e.children,
            o = null,
            a = function(e) {
              var n = document.querySelectorAll("a[id]");
              n.forEach(function(o, a) {
                t.push(r.getOffset(o).top),
                  a === n.length - 1 && "function" == typeof e && e();
              });
            },
            i = function(e) {
              for (
                var o = r.scrollTop() + 0.25 * window.innerHeight, a = 0;
                a < t.length;
                a++
              ) {
                var i = t[a],
                  c = o >= i && o < t[a + 1],
                  s = o < i && 0 === a,
                  l = a === n.length - 1,
                  u = c || s || l;
                if (u) {
                  e(a);
                  break;
                }
              }
            },
            c = function(e) {
              var t = document.querySelector(".sidebar-scroll .active .active");
              null !== t && t.classList.remove("active"),
                n[e].classList.add("active");
            };
          a(function() {
            i(function(e) {
              c(e), (o = e);
            });
          }),
            i(function(e) {
              e !== o && (c(e), (o = e));
            });
        }
      },
      a = document.querySelector(".sidebar");
    document.addEventListener("readystatechange", function() {
      "complete" === document.readyState &&
        a &&
        a.querySelector(".sidebar-scroll") &&
        window.addEventListener("scroll", o);
    });
  },
  function(e, t, n) {
    var r = n(20);
    document.addEventListener("DOMContentLoaded", function() {
      if (document.body.classList.contains("subscription")) {
        var e = window.location.href.split("?"),
          t = e[e.length - 1].split("=");
        "fID" === t[0] && r.set("fID", t[1]);
        var n = document.querySelector("iframe");
        null !== n &&
          n.setAttribute(
            "src",
            "https://sites.fastspring.com/motif/order/s/" +
              r.get("fID") +
              "?mode=force"
          );
      }
    });
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.querySelectorAll(".scroll-link");
      if (e) {
        var t = function(e) {
          var t,
            n = function(e, t, n, r) {
              return (
                (e /= r / 2),
                e < 1
                  ? (n / 2) * e * e + t
                  : (e--, (-n / 2) * (e * (e - 2) - 1) + t)
              );
            },
            r = window.scrollY,
            o = e - 120,
            a = 0,
            i = 20,
            c = 1e3,
            s = function() {
              a += i;
              var e = n(a, r, o, c);
              window.scrollTo(0, e),
                a < c && (t = window.requestAnimationFrame(s));
            };
          s();
        };
        e.forEach(function(e) {
          e.addEventListener("click", function(e) {
            var n = e.currentTarget,
              r = n.getAttribute("href"),
              n = document.querySelector(r),
              o = n.getBoundingClientRect(),
              a = o.top;
            e.preventDefault(), t(a);
          });
        });
      }
    });
  },
  function(e, t) {
    var n,
      r,
      o,
      a,
      i,
      c,
      s,
      l = {
        default: [
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/e28987c2faa68ea7d4cbd0292850c5d9ff0e89d7/17df0/assets/static/images/avatars/kyle.png",
            logo:
              "<svg width='25' height='25'><path d='M 12.5 0 C 19.404 0 25 5.596 25 12.5 C 25 19.404 19.404 25 12.5 25 C 5.596 25 0 19.404 0 12.5 C 0 5.596 5.596 0 12.5 0 Z' fill='rgb(255,255,255)'></path><path d='M 12.5 2 C 18.299 2 23 6.701 23 12.5 C 23 18.299 18.299 23 12.5 23 C 6.701 23 2 18.299 2 12.5 C 2 6.701 6.701 2 12.5 2 Z' class='fill' fill='#05f'></path><path d='M 9.25 7 L 6 9.063 L 9.25 11.125 L 12.5 9.063 Z' fill='rgb(2550,2550,2550)'></path><path d='M 15.75 7 L 12.5 9.063 L 15.75 11.125 L 19 9.063 Z' fill='rgb(255,255,255)'></path><path d='M 6 13.188 L 9.25 15.25 L 12.5 13.188 L 9.25 11.125 Z' fill='rgb(255,255,255)'></path><path d='M 15.75 11.125 L 12.5 13.188 L 15.75 15.25 L 19 13.188 Z' fill='rgb(255,255,255)'></path><path d='M 9.25 15.938 L 12.5 18 L 15.75 15.938 L 12.5 13.875 Z' fill='rgb(255,255,255)'></path></svg>",
            text: {
              en:
                "â€œThis is the future of design tools. Designers and engineers accessing a shared component library built on codeâ€”not static, pixel-based facsimiles.â€"
            },
            author: "Kyle Decker, Dropbox"
          },
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/f2e8c968507ab4de0a8d9810faf08f76cdaba9d2/25f02/assets/static/images/avatars/meng-to.png",
            logo:
              "<svg width='25' height='25'><g><defs><linearGradient id='idJMuAyH95Wg852975744' gradientTransform='rotate(-90, 0.5, 0.5)'><stop offset='0' stop-color='rgba(79, 35, 239, 1.00)' stop-opacity='1'></stop><stop offset='1' stop-color='rgba(170, 30, 255, 1.00)' stop-opacity='1'></stop></linearGradient></defs><path d='M 12.5 1.5 C 18.575 1.5 23.5 6.425 23.5 12.5 C 23.5 18.575 18.575 23.5 12.5 23.5 C 6.425 23.5 1.5 18.575 1.5 12.5 C 1.5 6.425 6.425 1.5 12.5 1.5 Z' class='fill' fill='url(#idJMuAyH95Wg852975744)' stroke-width='2' stroke='#FFF'></path></g><path d='M 13.5 17 L 9 17 L 9 8 L 13.5 8' fill='rgb(255,255,255)'></path><g><defs><linearGradient id='idqi_ugeveEg-1379436103' gradientTransform='rotate(0, 0.5, 0.5)'><stop offset='0' stop-color='rgba(124, 35, 247, 1.00)' stop-opacity='1'></stop><stop offset='1' stop-color='rgba(141, 34, 250, 1.00)' stop-opacity='1'></stop></linearGradient></defs><path d='M 9 12.5 L 13.5 8 C 14.628 8 15.659 8.415 16.449 9.101 C 16.449 9.102 15.316 10.235 13.05 12.5 C 15.316 14.765 16.449 15.898 16.449 15.899 C 15.659 16.585 14.628 17 13.5 17 Z' class='fill' fill='url(#idqi_ugeveEg-1379436103)'></path></g><path d='M 16.449 9.101 C 17.399 9.926 18 11.143 18 12.5 C 18 13.857 17.399 15.074 16.449 15.899 C 16.449 15.898 15.316 14.765 13.05 12.5 Z' fill='hsl(0, 0%, 100%)'></path></svg>",
            text: {
              en:
                "â€œYour team can contribute both design and code by using this single source of truth. On top of that, you have access to thousands of community made components.â€"
            },
            author: "Meng To, Design+Code"
          }
        ],
        frontpage: [
          {
            text: {
              en:
                "â€œFramer Xâ€™s React codebase will allow our designers to get closer to high-fidelity implementation with&nbsp;engineering.â€"
            },
            avatar: "/assets/static/images/avatars/ash.png",
            author: "Ash Adamson, Flexport"
          },
          {
            text: {
              en:
                "â€œFramer allows designers to quickly iterate and user test a dozen different concepts, which drastically cuts down on development&nbsp;time.â€"
            },
            avatar: "/assets/static/images/avatars/paul.png",
            author: "Paul Stamatiou, Twitter"
          },
          {
            text: {
              en:
                "â€œFramer is my go-to tool for mobile prototyping at Pinterest, since I find it helpful to evaluate my design ideas in a fully-interactive&nbsp;environment.â€œ"
            },
            avatar: "/assets/static/images/avatars/shana.png",
            author: "Shana Hu, Pinterest"
          },
          {
            text: {
              en:
                "â€Framer doesnâ€™t abstract you away from the core. You end up with a large pool of power users who can contribute components back to the&nbsp;masses.â€œ"
            },
            avatar: "/assets/static/images/avatars/george.png",
            author: "George Kedenburg III, Instagram"
          }
        ],
        design: [
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/47365352cdb38e960d1f033bc9c9ef66ad96deb6/82b94/assets/static/images/avatars/justin-mezzel.png",
            logo:
              "<svg width='25' height='25'><g><defs><linearGradient id='idBGuPwV28eg-1366353932' gradientTransform='rotate(-90, 0.5, 0.5)'><stop offset='0' stop-color='rgba(251, 0, 137, 1.00)' stop-opacity='1'></stop><stop offset='1' stop-color='rgba(255, 75, 0, 1.00)' stop-opacity='1'></stop></linearGradient></defs><path d='M 12.5 1.5 C 18.575 1.5 23.5 6.425 23.5 12.5 C 23.5 18.575 18.575 23.5 12.5 23.5 C 6.425 23.5 1.5 18.575 1.5 12.5 C 1.5 6.425 6.425 1.5 12.5 1.5 Z' class='fill' fill='url(#idBGuPwV28eg-1366353932)' stroke-width='2' stroke='hsl(0, 0%, 100%)'></path></g><path d='M 10.5 7 L 10.5 18 L 19.5 12.5 Z' fill='transparent' stroke='hsl(0, 0%, 100%)'></path><path d='M 14.5 12.5 L 7.5 8.5 L 7.5 16.5 Z' fill='transparent' stroke='hsl(0, 0%, 100%)'></path></svg>",
            text: {
              en:
                "â€œIâ€™ve been playing around with some of the illustration tools in Framer X and whoaâ€”theyâ€™re crazy powerful.â€",
              de:
                "â€œIch habe mit die Illustrations-Tools in Framer X gespielt und Whoa! - die sind so vielfÃ¤ltig und stark!â€"
            },
            author: "Justin Mezzell, Pluralsight"
          },
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/7b1464abda0597fe171d9642fe2058abb047f111/f4d34/assets/static/images/avatars/jon.png",
            logo:
              "<svg width='25' height='25'><g><path d='M 12.5 1 C 18.851 1 24 6.149 24 12.5 C 24 18.851 18.851 24 12.5 24 C 6.149 24 1 18.851 1 12.5 C 1 6.149 6.149 1 12.5 1 Z' class='fill' fill='rgba(255, 91, 94, 1.00)'></path><path d='M 17.836 14.529 C 17.777 14.384 17.718 14.228 17.658 14.096 C 17.564 13.88 17.469 13.676 17.386 13.483 L 17.374 13.471 C 16.556 11.67 15.679 9.844 14.755 8.042 L 14.719 7.97 C 14.625 7.79 14.53 7.598 14.435 7.405 C 14.316 7.189 14.198 6.961 14.008 6.745 C 13.629 6.264 13.084 6 12.503 6 C 11.911 6 11.377 6.264 10.986 6.721 C 10.809 6.937 10.678 7.165 10.56 7.381 C 10.465 7.574 10.37 7.766 10.275 7.946 L 10.24 8.018 C 9.327 9.82 8.438 11.646 7.621 13.447 L 7.609 13.471 C 7.526 13.664 7.431 13.868 7.336 14.084 C 7.277 14.216 7.218 14.36 7.159 14.517 C 7.005 14.961 6.957 15.381 7.016 15.814 C 7.147 16.715 7.739 17.471 8.557 17.808 C 8.865 17.94 9.185 18 9.517 18 C 9.612 18 9.73 17.988 9.825 17.976 C 10.216 17.928 10.619 17.796 11.01 17.568 C 11.496 17.291 11.958 16.895 12.48 16.318 C 13.001 16.895 13.475 17.291 13.949 17.568 C 14.34 17.796 14.743 17.928 15.134 17.976 C 15.229 17.988 15.348 18 15.442 18 C 15.774 18 16.106 17.94 16.402 17.808 C 17.232 17.471 17.812 16.703 17.943 15.814 C 18.038 15.393 17.99 14.973 17.836 14.529 Z M 12.491 15.153 C 11.852 14.336 11.437 13.568 11.295 12.919 C 11.235 12.643 11.223 12.402 11.259 12.186 C 11.283 11.994 11.354 11.826 11.449 11.682 C 11.674 11.357 12.053 11.153 12.491 11.153 C 12.93 11.153 13.321 11.345 13.534 11.682 C 13.629 11.826 13.7 11.994 13.724 12.186 C 13.76 12.402 13.748 12.655 13.688 12.919 C 13.546 13.556 13.131 14.324 12.491 15.153 Z M 17.22 15.718 C 17.137 16.342 16.722 16.883 16.142 17.123 C 15.857 17.243 15.549 17.279 15.241 17.243 C 14.945 17.207 14.648 17.111 14.34 16.931 C 13.914 16.691 13.487 16.318 12.989 15.766 C 13.771 14.793 14.245 13.904 14.423 13.111 C 14.506 12.739 14.518 12.402 14.482 12.09 C 14.435 11.79 14.328 11.514 14.162 11.273 C 13.795 10.733 13.179 10.42 12.491 10.42 C 11.804 10.42 11.188 10.745 10.82 11.273 C 10.655 11.514 10.548 11.79 10.501 12.09 C 10.453 12.402 10.465 12.751 10.56 13.111 C 10.738 13.904 11.223 14.805 11.994 15.778 C 11.508 16.33 11.069 16.703 10.643 16.943 C 10.335 17.123 10.038 17.219 9.742 17.255 C 9.422 17.291 9.114 17.243 8.841 17.135 C 8.261 16.895 7.846 16.354 7.763 15.73 C 7.727 15.429 7.751 15.129 7.87 14.793 C 7.905 14.673 7.964 14.553 8.024 14.408 C 8.107 14.216 8.201 14.012 8.296 13.808 L 8.308 13.784 C 9.126 11.994 10.003 10.168 10.915 8.39 L 10.951 8.318 C 11.046 8.138 11.14 7.946 11.235 7.766 C 11.33 7.574 11.437 7.393 11.567 7.237 C 11.816 6.949 12.148 6.793 12.515 6.793 C 12.883 6.793 13.214 6.949 13.463 7.237 C 13.594 7.393 13.7 7.574 13.795 7.766 C 13.89 7.946 13.985 8.138 14.079 8.318 L 14.115 8.39 C 15.016 10.18 15.893 12.006 16.71 13.796 L 16.71 13.808 C 16.805 14 16.888 14.216 16.983 14.408 C 17.042 14.553 17.101 14.673 17.137 14.793 C 17.232 15.105 17.267 15.405 17.22 15.718 Z' fill='rgba(255, 255, 255, 1.00)'></path><path d='M 12.5 0 C 19.404 0 25 5.596 25 12.5 C 25 19.404 19.404 25 12.5 25 C 5.596 25 0 19.404 0 12.5 C 0 5.596 5.596 0 12.5 0 Z M 2 12.5 C 2 18.299 6.701 23 12.5 23 C 18.299 23 23 18.299 23 12.5 C 23 6.701 18.299 2 12.5 2 C 6.701 2 2 6.701 2 12.5 Z' fill='#fff'></path></g></svg>",
            text: {
              en:
                "â€œTotally, totally mindblown by Framer X. This is the design tool you have been waiting for.â€",
              de:
                "â€œIch bin total begeistert von Framer X. Das ist das Design Tool, auf das du gewartet hast!â€"
            },
            author: "Jon Gold, Airbnb"
          }
        ],
        developer: [
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/89463572bcbb81d9085d3a942fdba8cf7ebb61e3/dfbe7/assets/static/images/avatars/dan.png",
            logo:
              "<svg width='25' height='25'><g><path d='M 12.5 0 C 19.404 0 25 5.596 25 12.5 C 25 19.404 19.404 25 12.5 25 C 5.596 25 0 19.404 0 12.5 C 0 5.596 5.596 0 12.5 0 Z' fill='#000'></path><path d='M 12.5 0 C 19.404 0 25 5.596 25 12.5 C 25 19.404 19.404 25 12.5 25 C 5.596 25 0 19.404 0 12.5 C 0 5.596 5.596 0 12.5 0 Z' fill='#000'></path><path d='M 12.5 2 C 18.299 2 23 6.701 23 12.5 C 23 18.299 18.299 23 12.5 23 C 6.701 23 2 18.299 2 12.5 C 2 6.701 6.701 2 12.5 2 Z' fill='#05f' class='fill'></path><path d='M 12.5 11 C 13.328 11 14 11.672 14 12.5 C 14 13.328 13.328 14 12.5 14 C 11.672 14 11 13.328 11 12.5 C 11 11.672 11.672 11 12.5 11 Z' class='dim' fill='rgba(255, 255, 255, 1.00)'></path><path d='M 3.5 0 C 5.433 0 7 3.806 7 8.5 C 7 13.194 5.433 17 3.5 17 C 1.567 17 0 13.194 0 8.5 C 0 3.806 1.567 0 3.5 0 Z' transform='translate(9 4) rotate(30 3.5 8.5)' fill='transparent' class='dim' stroke='hsl(0, 0%, 100%)'></path><path d='M 3.5 0 C 5.433 0 7 3.806 7 8.5 C 7 13.194 5.433 17 3.5 17 C 1.567 17 0 13.194 0 8.5 C 0 3.806 1.567 0 3.5 0 Z' transform='translate(9 4) rotate(-30 3.5 8.5)' fill='transparent' class='dim' stroke='hsl(0, 0%, 100%)'></path><path d='M 3.5 0 C 5.433 0 7 3.806 7 8.5 C 7 13.194 5.433 17 3.5 17 C 1.567 17 0 13.194 0 8.5 C 0 3.806 1.567 0 3.5 0 Z' transform='translate(9 4) rotate(90 3.5 8.5)' fill='transparent' class='dim' stroke='hsl(0, 0%, 100%)'></path></g></svg>",
            text: {
              en:
                "â€œReact components transformed sharing UI code for me. I hope that the Framer X Store will empower so many more people to experience the same.â€"
            },
            author: "Dan Abramov, React"
          },
          {
            avatar:
              "https://d33wubrfki0l68.cloudfront.net/78622ca7517dbb820bd99995c0612b06c16a3ab0/cb570/assets/static/images/avatars/ash.png",
            logo:
              "<svg width='25' height='25'><path d='M 12.5 1 C 18.851 1 24 6.149 24 12.5 C 24 18.851 18.851 24 12.5 24 C 6.149 24 1 18.851 1 12.5 C 1 6.149 6.149 1 12.5 1 Z' class='fill' fill='#FFF'></path><path d='M 12.5 0 C 19.404 0 25 5.596 25 12.5 C 25 19.404 19.404 25 12.5 25 C 5.596 25 0 19.404 0 12.5 C 0 5.596 5.596 0 12.5 0 Z M 2 12.5 C 2 18.299 6.701 23 12.5 23 C 18.299 23 23 18.299 23 12.5 C 23 6.701 18.299 2 12.5 2 C 6.701 2 2 6.701 2 12.5 Z' fill='#000'></path><path d='M 16.895 8 L 12.544 8 C 12.516 8 12.489 8.011 12.469 8.031 L 8.031 12.469 C 8.011 12.489 8 12.516 8 12.544 L 8 16.895 C 8 16.953 8.047 17 8.105 17 L 12.456 17 C 12.484 17 12.511 16.989 12.531 16.969 L 16.969 12.531 C 16.989 12.511 17 12.485 17 12.456 L 17 8.106 C 17 8.047 16.953 8 16.895 8' fill='#000'></path></svg>",
            text: {
              en:
                "â€œFramer Xâ€™s React codebase will allow our designers to get closer to high-fidelity implementation with engineering.â€"
            },
            author: "Ash Adamson, Flexport"
          }
        ],
        framer: [
          {
            avatar: "/assets/static/images/careers/team/slim.jpg",
            logo: "",
            text: {
              en:
                "â€œIâ€™m grateful to work with such a passionate, multinational team who I learn something from every day.â€"
            },
            author: "Sarah Lim, Content"
          },
          {
            avatar: "/assets/static/images/careers/team/jonas.jpg",
            logo: "",
            text: {
              en:
                "â€œItâ€™s really rewarding to build a product that has a vibrant community. Theyâ€™ve been our biggest fans since day one.â€"
            },
            author: "Jonas Treub, Engineering"
          },
          {
            avatar: "/assets/static/images/careers/team/koen.jpg",
            logo: "",
            text: {
              en:
                "â€œInvesting the proper time into helping good people become the best pays off every single time. If it works, you get to witness them doing the best work of their career.â€"
            },
            author: "Koen Bok, CEO"
          }
        ]
      },
      u = function() {
        i || ((i = "default"), (c = "en")),
          l[i].forEach(function(e) {
            r.innerHTML +=
              "<li><img src='" +
              e.avatar +
              "' alt='" +
              e.author +
              "'/>" +
              e.logo +
              "</li>";
          }),
          p();
      },
      d = function() {
        var e = document.querySelectorAll(".quote-picker li"),
          t = document.querySelector(".quote-text"),
          n = document.querySelector(".quote-avatar"),
          r = document.querySelector(".quote-author"),
          o = 0,
          a = 0,
          i = function(e, o) {
            s.classList.remove("active"),
              e.classList.add("active"),
              (s = e),
              n.setAttribute("src", l.frontpage[o].avatar),
              (t.innerHTML = l.frontpage[o].text.en),
              (r.innerHTML = l.frontpage[o].author);
          },
          c = function() {
            o = setInterval(function() {
              a < e.length - 1 ? a++ : (a = 0), i(e[a], a);
            }, 6e3);
          };
        e.forEach(function(e, t) {
          e.addEventListener("click", function() {
            i(e, t), clearInterval(o), (a = t), c();
          });
        });
        var s = e[0];
        i(e[0], 0), c();
      },
      f = function(e, t) {
        s && s.classList.remove("active"),
          e.classList.add("active"),
          (s = e),
          (o.innerHTML = "<span>" + l[i][t].text[c] + "</span>"),
          (a.innerHTML = "<span>" + l[i][t].author + "</span>");
      },
      p = function() {
        var e,
          t = r.querySelectorAll("li"),
          n = 0;
        f(t[0], 0),
          t.forEach(function(t, r) {
            t.addEventListener("click", function() {
              f(t, r), (n = r), clearInterval(e);
            });
          }),
          (startInterval = function() {
            l[i].length > 1 &&
              (e = setInterval(function() {
                n < t.length - 1 ? n++ : (n = 0), f(t[n], n);
              }, 6e3));
          }),
          startInterval();
      };
    document.addEventListener("DOMContentLoaded", function() {
      (n = document.querySelector("#testimonial")),
        n
          ? ((r = n.querySelector("ul")),
            (o = n.querySelector(".quote-text")),
            (a = n.querySelector(".quote-author")),
            (i = n.getAttribute("data-type") || "default"),
            (c = n.getAttribute("data-lang") || "en"),
            u())
          : document.getElementById("feature-testimonials") && d();
    });
  },
  function(e, t, n) {
    n(6);
    document.addEventListener("DOMContentLoaded", function() {
      if (null !== document.querySelector("video")) {
        var e = function(e) {
            e.forEach(function(e, t) {
              e.target.classList.contains("ignore-observer") ||
                (e.intersectionRatio > 0 && e.target.paused
                  ? e.target
                      .play()
                      .then(function() {})
                      .catch(function(e) {})
                  : e.target.paused || e.target.pause());
            });
          },
          t = function() {
            var t = document.querySelectorAll("video"),
              n = new IntersectionObserver(e, { root: null, threshold: 0 });
            t.forEach(function(e) {
              n.observe(e);
            }),
              e(n.takeRecords());
          };
        if ("IntersectionObserver" in window) t();
        else {
          var n = document.createElement("script");
          n.setAttribute("src", "/assets/static/js/intersection-observer.js"),
            (n.onreadystatechange = function() {
              "complete" === this.readyState && t();
            }),
            (n.onload = t),
            document.querySelector("head").appendChild(n);
        }
      }
    });
  },
  function(e, t, n) {
    var r = n(6),
      o = function() {
        var e = r.getParameterByName("team");
        if (null !== e) {
          var t = document.getElementById(e);
          t.classList.add("is-open");
        }
      },
      a = function(e) {
        var t = function(e) {
            var t = e.currentTarget;
            t.parentNode.classList.toggle("is-open");
          },
          n = e.querySelectorAll(".accordion-title");
        n.forEach(function(e) {
          e.addEventListener("click", t);
        });
      };
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.querySelector(".accordion");
      e && (a(e), o());
    });
  },
  function(e, t) {
    var n = function(e) {
      e.forEach(function(e) {
        var t,
          n,
          r = 0,
          o = e.children.length,
          a = e.children[0];
        t = e.hasAttribute("data-cycle-speed")
          ? 1e3 * e.getAttribute("data-cycle-speed")
          : 4e3;
        var i = function() {
          r < o - 1 ? r++ : (r = 0),
            n && n.classList.remove("previous"),
            a.classList.remove("active"),
            (n = a),
            n.classList.add("previous"),
            (a = e.children[r]);
          var t = a.querySelector("video");
          t && ((t.currentTime = 0), t.play()), a.classList.add("active");
        };
        a.classList.add("active"), setInterval(i, t);
      });
    };
    document.addEventListener("DOMContentLoaded", function() {
      (cycleElements = document.querySelectorAll(".cycle-content")),
        cycleElements.length && n(cycleElements);
    });
  },
  function(e, t, n) {
    var r = n(4),
      o = n(20),
      a = n(6);
    n(39),
      window.Cypress && (window.Utils = a),
      FramerSite.run("pricing", function() {
        Paddle.Setup({ vendor: 18370, checkoutVariant: "multipage" });
        var e = function(e) {
            var r = e.product,
              o = e.coupon,
              a = e.email || null,
              i = e.id,
              c = plans[r];
            t(),
              Paddle.Checkout.open({
                product: c,
                coupon: o,
                passthrough: JSON.stringify({ framer_x_id: i }),
                message: "Enter your info to complete your purchase.",
                successCallback: n,
                email: a
              });
          },
          t = function() {
            r.event({ category: "InitiateCheckout", action: "Web" }),
              r.conversion({ id: "965556087", label: "3DYsCPyC8X4Q9-60zAM" });
          },
          n = function(e) {
            return e
              ? (document.body.classList.add("purchasing"),
                void Paddle.Order.details(e.checkout.id, function(t) {
                  o.set("order", t);
                  var n = function() {
                    window.location.replace(
                      "/pricing/complete/?" +
                        ("order_id=" + t.order.order_id + "&") +
                        ("user_id=" + a.getFramerId() + "&") +
                        ("email=" + e.user.email + "&") +
                        ("path=" + location.pathname)
                    );
                  };
                  setTimeout(n, 2e3), gaTrackSale(e, t.order.order_id);
                }))
              : void document.body.classList.add("error");
          },
          i = function(e) {
            return e.toLowerCase().indexOf("yearly") !== -1
              ? "framer-yearly"
              : e.toLowerCase().indexOf("monthly") !== -1
              ? "framer-monthly"
              : e.toLowerCase();
          },
          c = function(e) {
            var t = /\((\d+)\)/g.exec(e);
            return t ? parseInt(t[1]) : null;
          },
          s = function(e) {
            var t = /\((\d+)\)/g.exec(e);
            return t ? e.replace(" " + t[0], "") : e;
          };
        (gaTrackSale = function(e, t) {
          var n = {
            id: e.product.id,
            name: s(e.product.name),
            brand: "Framer",
            category: i(e.product.name),
            quantity: c(e.product.name) || e.product.quantity,
            price: e.checkout.prices.vendor.unit
          };
          e.checkout.coupon && (n.coupon = e.checkout.coupon.coupon_code);
          var o = {
            name: s(e.product.name),
            sku: e.product.id,
            category: i(e.product.name),
            price: e.checkout.prices.vendor.unit,
            quantity: c(e.product.name) || e.product.quantity
          };
          dataLayer.push({
            event: "purchase",
            ecommerce: { currencyCode: e.checkout.prices.vendor.currency },
            transactionId: t,
            transactionAffiliation: "Framer Paddle",
            transactionTotal: e.checkout.prices.vendor.total,
            transactionShipping: 0,
            transactionTax: e.checkout.prices.vendor.total_tax,
            transactionProducts: [o],
            transactionCurrency: e.checkout.prices.vendor.currency
          }),
            r.conversion({
              id: "965556087",
              label: "CgqGCMiB8X4Q9-60zAM",
              value: e.checkout.prices.vendor.total,
              currency: e.checkout.prices.vendor.currency
            });
        }),
          (plans = { monthly: 539581, yearly: 539582 });
        var l = "yearly",
          u = { restricted: "reseller", team: "team" },
          d = document.querySelector(".toggle"),
          f = a.getEnv().FRAMER_API_BASE_URL,
          p = function(t) {
            fetch(f + "/auth/signin", { credentials: "include" })
              .then(function(e) {
                if (401 === e.status) {
                  var t = a.getRedirectUrl(
                    window.location.origin,
                    window.location.pathname,
                    window.location.search,
                    { plan: l }
                  );
                  return void a.redirectToLogin(t);
                }
                return e.json();
              })
              .then(function(n) {
                if (!n || n.userType !== u.restricted) {
                  if (n && n.userType === u.team)
                    return void (
                      window.FramerSite && window.FramerSite.overlayOpen()
                    );
                  var r = a.getParameterByName("c");
                  e({
                    product: t,
                    email: n.email || null,
                    id: n.userId,
                    coupon: r
                  }),
                    a.setFramerIdCookie(n.id);
                }
              });
          },
          m = function() {
            var e = a.getParameterByName("reason");
            if ("web-login" === e) {
              var t = a.getParameterByName("plan") || "yearly";
              p(t);
            }
          },
          h = function() {
            fetch(f + "/auth/signin", { credentials: "include" })
              .then(function(e) {
                return e.json();
              })
              .then(function(e) {
                var t = document.querySelector(".checkout-team"),
                  n = document.getElementById("team-form-prospect");
                switch (e.userType) {
                  case u.restricted:
                    document.body.classList.add("restricted");
                    break;
                  case u.team:
                    var o = document.querySelectorAll(".overlay form"),
                      a = document.querySelector(".checkout"),
                      i = n.querySelector(".email");
                    t.classList.remove("hide"),
                      a.classList.add("hide"),
                      o.forEach(function(e) {
                        e.classList.add("hide");
                      }),
                      n.classList.remove("hide"),
                      (i.value = e.email),
                      r.event({ category: "ShowProspectForm", action: "Web" });
                }
                e.userType !== u.team &&
                  (t.parentNode.removeChild(t), n.parentNode.removeChild(n));
              });
          };
        document.addEventListener("DOMContentLoaded", function() {
          var e = document.querySelector(".checkout");
          if (d) {
            var t = d.querySelector("input"),
              n = document.querySelector(".price-value"),
              r = document.querySelector(".yearly-only");
            t.addEventListener("change", function(e) {
              e.preventDefault(),
                document.body.classList.toggle("monthly"),
                r.classList.toggle("not"),
                t.checked
                  ? ((l = "monthly"), (n.innerHTML = "$15"))
                  : ((l = "yearly"), (n.innerHTML = "$12"));
            });
          }
          e &&
            e.addEventListener("click", function(e) {
              e.preventDefault(), document.body.classList.remove("error"), p(l);
            }),
            m(),
            h();
        });
      });
  },
  function(e, t, n) {
    !(function(e, n) {
      n(t);
    })(this, function(e) {
      "use strict";
      function t(e) {
        return e && DataView.prototype.isPrototypeOf(e);
      }
      function n(e) {
        if (
          ("string" != typeof e && (e = String(e)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
        )
          throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
      }
      function r(e) {
        return "string" != typeof e && (e = String(e)), e;
      }
      function o(e) {
        var t = {
          next: function() {
            var t = e.shift();
            return { done: void 0 === t, value: t };
          }
        };
        return (
          b.iterable &&
            (t[Symbol.iterator] = function() {
              return t;
            }),
          t
        );
      }
      function a(e) {
        (this.map = {}),
          e instanceof a
            ? e.forEach(function(e, t) {
                this.append(t, e);
              }, this)
            : Array.isArray(e)
            ? e.forEach(function(e) {
                this.append(e[0], e[1]);
              }, this)
            : e &&
              Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t]);
              }, this);
      }
      function i(e) {
        return e.bodyUsed
          ? Promise.reject(new TypeError("Already read"))
          : void (e.bodyUsed = !0);
      }
      function c(e) {
        return new Promise(function(t, n) {
          (e.onload = function() {
            t(e.result);
          }),
            (e.onerror = function() {
              n(e.error);
            });
        });
      }
      function s(e) {
        var t = new FileReader(),
          n = c(t);
        return t.readAsArrayBuffer(e), n;
      }
      function l(e) {
        var t = new FileReader(),
          n = c(t);
        return t.readAsText(e), n;
      }
      function u(e) {
        for (
          var t = new Uint8Array(e), n = new Array(t.length), r = 0;
          r < t.length;
          r++
        )
          n[r] = String.fromCharCode(t[r]);
        return n.join("");
      }
      function d(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
      }
      function f() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function(e) {
            (this._bodyInit = e),
              e
                ? "string" == typeof e
                  ? (this._bodyText = e)
                  : b.blob && Blob.prototype.isPrototypeOf(e)
                  ? (this._bodyBlob = e)
                  : b.formData && FormData.prototype.isPrototypeOf(e)
                  ? (this._bodyFormData = e)
                  : b.searchParams && URLSearchParams.prototype.isPrototypeOf(e)
                  ? (this._bodyText = e.toString())
                  : b.arrayBuffer && b.blob && t(e)
                  ? ((this._bodyArrayBuffer = d(e.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : b.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(e) || L(e))
                  ? (this._bodyArrayBuffer = d(e))
                  : (this._bodyText = e = Object.prototype.toString.call(e))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : b.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          b.blob &&
            ((this.blob = function() {
              var e = i(this);
              if (e) return e;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function() {
              return this._bodyArrayBuffer
                ? i(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(s);
            })),
          (this.text = function() {
            var e = i(this);
            if (e) return e;
            if (this._bodyBlob) return l(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(u(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          b.formData &&
            (this.formData = function() {
              return this.text().then(h);
            }),
          (this.json = function() {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function p(e) {
        var t = e.toUpperCase();
        return C.indexOf(t) > -1 ? t : e;
      }
      function m(e, t) {
        t = t || {};
        var n = t.body;
        if (e instanceof m) {
          if (e.bodyUsed) throw new TypeError("Already read");
          (this.url = e.url),
            (this.credentials = e.credentials),
            t.headers || (this.headers = new a(e.headers)),
            (this.method = e.method),
            (this.mode = e.mode),
            (this.signal = e.signal),
            n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = String(e);
        if (
          ((this.credentials =
            t.credentials || this.credentials || "same-origin"),
          (!t.headers && this.headers) || (this.headers = new a(t.headers)),
          (this.method = p(t.method || this.method || "GET")),
          (this.mode = t.mode || this.mode || null),
          (this.signal = t.signal || this.signal),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && n)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
      }
      function h(e) {
        var t = new FormData();
        return (
          e
            .trim()
            .split("&")
            .forEach(function(e) {
              if (e) {
                var n = e.split("="),
                  r = n.shift().replace(/\+/g, " "),
                  o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o));
              }
            }),
          t
        );
      }
      function y(e) {
        var t = new a(),
          n = e.replace(/\r?\n[\t ]+/g, " ");
        return (
          n.split(/\r?\n/).forEach(function(e) {
            var n = e.split(":"),
              r = n.shift().trim();
            if (r) {
              var o = n.join(":").trim();
              t.append(r, o);
            }
          }),
          t
        );
      }
      function v(e, t) {
        t || (t = {}),
          (this.type = "default"),
          (this.status = void 0 === t.status ? 200 : t.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in t ? t.statusText : "OK"),
          (this.headers = new a(t.headers)),
          (this.url = t.url || ""),
          this._initBody(e);
      }
      function g(t, n) {
        return new Promise(function(r, o) {
          function a() {
            c.abort();
          }
          var i = new m(t, n);
          if (i.signal && i.signal.aborted)
            return o(new e.DOMException("Aborted", "AbortError"));
          var c = new XMLHttpRequest();
          (c.onload = function() {
            var e = {
              status: c.status,
              statusText: c.statusText,
              headers: y(c.getAllResponseHeaders() || "")
            };
            e.url =
              "responseURL" in c
                ? c.responseURL
                : e.headers.get("X-Request-URL");
            var t = "response" in c ? c.response : c.responseText;
            r(new v(t, e));
          }),
            (c.onerror = function() {
              o(new TypeError("Network request failed"));
            }),
            (c.ontimeout = function() {
              o(new TypeError("Network request failed"));
            }),
            (c.onabort = function() {
              o(new e.DOMException("Aborted", "AbortError"));
            }),
            c.open(i.method, i.url, !0),
            "include" === i.credentials
              ? (c.withCredentials = !0)
              : "omit" === i.credentials && (c.withCredentials = !1),
            "responseType" in c && b.blob && (c.responseType = "blob"),
            i.headers.forEach(function(e, t) {
              c.setRequestHeader(t, e);
            }),
            i.signal &&
              (i.signal.addEventListener("abort", a),
              (c.onreadystatechange = function() {
                4 === c.readyState && i.signal.removeEventListener("abort", a);
              })),
            c.send("undefined" == typeof i._bodyInit ? null : i._bodyInit);
        });
      }
      var b = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob:
          "FileReader" in self &&
          "Blob" in self &&
          (function() {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          })(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self
      };
      if (b.arrayBuffer)
        var w = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ],
          L =
            ArrayBuffer.isView ||
            function(e) {
              return e && w.indexOf(Object.prototype.toString.call(e)) > -1;
            };
      (a.prototype.append = function(e, t) {
        (e = n(e)), (t = r(t));
        var o = this.map[e];
        this.map[e] = o ? o + ", " + t : t;
      }),
        (a.prototype.delete = function(e) {
          delete this.map[n(e)];
        }),
        (a.prototype.get = function(e) {
          return (e = n(e)), this.has(e) ? this.map[e] : null;
        }),
        (a.prototype.has = function(e) {
          return this.map.hasOwnProperty(n(e));
        }),
        (a.prototype.set = function(e, t) {
          this.map[n(e)] = r(t);
        }),
        (a.prototype.forEach = function(e, t) {
          for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (a.prototype.keys = function() {
          var e = [];
          return (
            this.forEach(function(t, n) {
              e.push(n);
            }),
            o(e)
          );
        }),
        (a.prototype.values = function() {
          var e = [];
          return (
            this.forEach(function(t) {
              e.push(t);
            }),
            o(e)
          );
        }),
        (a.prototype.entries = function() {
          var e = [];
          return (
            this.forEach(function(t, n) {
              e.push([n, t]);
            }),
            o(e)
          );
        }),
        b.iterable && (a.prototype[Symbol.iterator] = a.prototype.entries);
      var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      (m.prototype.clone = function() {
        return new m(this, { body: this._bodyInit });
      }),
        f.call(m.prototype),
        f.call(v.prototype),
        (v.prototype.clone = function() {
          return new v(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new a(this.headers),
            url: this.url
          });
        }),
        (v.error = function() {
          var e = new v(null, { status: 0, statusText: "" });
          return (e.type = "error"), e;
        });
      var E = [301, 302, 303, 307, 308];
      (v.redirect = function(e, t) {
        if (E.indexOf(t) === -1) throw new RangeError("Invalid status code");
        return new v(null, { status: t, headers: { location: e } });
      }),
        (e.DOMException = self.DOMException);
      try {
        new e.DOMException();
      } catch (t) {
        (e.DOMException = function(e, t) {
          (this.message = e), (this.name = t);
          var n = Error(e);
          this.stack = n.stack;
        }),
          (e.DOMException.prototype = Object.create(Error.prototype)),
          (e.DOMException.prototype.constructor = e.DOMException);
      }
      (g.polyfill = !0),
        self.fetch ||
          ((self.fetch = g),
          (self.Headers = a),
          (self.Request = m),
          (self.Response = v)),
        (e.Headers = a),
        (e.Request = m),
        (e.Response = v),
        (e.fetch = g),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
  function(e, t) {
    FramerSite.run("frontpage", function() {
      var e = function() {
          var e = document.getElementById("hero"),
            t = e.querySelector(".preview"),
            n = t.querySelector("video"),
            r = e.querySelector(".window"),
            o = r.querySelector("video"),
            a = function() {
              (o.currentTime = 0),
                o.play(),
                o.addEventListener("timeupdate", s);
            },
            i = function() {
              n.removeEventListener("ended", i),
                t.classList.remove("active"),
                o.play();
            },
            c = function() {
              o.pause(),
                o.removeEventListener("timeupdate", s),
                (n.currentTime = 0),
                t.classList.add("active"),
                n.play(),
                n.addEventListener("ended", i);
            },
            s = function() {
              o.currentTime > 11.5 && c();
            };
          n.addEventListener("ended", i),
            o.addEventListener("ended", a),
            o.addEventListener("timeupdate", s),
            o.play(),
            (o.currentTime = 11.5),
            setTimeout(c, 700);
        },
        t = function() {
          var e = document.querySelectorAll(".team-cards"),
            t = 0,
            n = function() {
              e[t].classList.remove("active"),
                t++,
                t === e.length && (t = 0),
                e[t].classList.add("active");
            };
          setInterval(n, 4e3);
        };
      document.addEventListener("DOMContentLoaded", function() {
        e(), t();
      });
    });
  },
  function(e, t, n) {
    var r = n(20);
    FramerSite.run("complete", function() {
      if (r.get("order")) {
        var e = r.get("order").order;
        document.querySelector(".data-ordernr").textContent = "#" + e.order_id;
      }
    });
  },
  function(e, t, n) {
    n(39),
      FramerSite.run("docs", function() {
        var e = document.getElementById("docs-mobile-header"),
          t = e.querySelector("span"),
          n = document.getElementById("docs-sidebar");
        e.addEventListener("click", function() {
          n.classList.toggle("show"),
            document.body.classList.toggle("no-scroll");
        });
        var r = function(e) {
            window.scrollTo(0, 0);
            var t = function(e) {
                var t = new DOMParser(),
                  n = t.parseFromString(e, "text/html");
                return n.getElementById("docs-body");
              },
              n = function(e) {
                var n = document.getElementById("docs-body"),
                  r = t(e);
                n.innerHTML = r.innerHTML;
              };
            (pageHTMLLocation = e + "/index.html"),
              fetch(pageHTMLLocation)
                .then(function(e) {
                  return e.text();
                })
                .then(n);
          },
          o = window.location.origin,
          a = new Navigo(o);
        a.on("/learn/docs", function() {
          r("docs"), c("home");
        }),
          a.on("/learn/docs/:section", function(e) {
            r(e.section), c(e.section);
          });
        var i = function(e) {
            var e = e.replace("-", " ");
            return e.replace(/\w\S*/g, function(e) {
              return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            });
          },
          c = function(e) {
            var r = document.querySelector(".sidebar-scroll > .active"),
              o = "[data-section='" + e + "']",
              a = document.querySelector(o);
            (t.innerHTML = i(e)),
              n.classList.remove("show"),
              document.body.classList.remove("no-scroll"),
              r.classList.remove("active"),
              a.classList.add("active");
          };
      });
  },
  function(e, t, n) {
    var r = n(20),
      o = n(6);
    FramerSite.run("checkout", function() {
      Paddle.Setup({ vendor: 18370, checkoutVariant: "multipage" });
      var e = function(e) {
          var n = 544352,
            r = e.id;
          Paddle.Checkout.open({
            product: n,
            quantity: e.amount,
            passthrough: JSON.stringify({ framer_x_organization_id: r }),
            allowQuantity: !0,
            message: "Enter your info to complete your purchase.",
            successCallback: t
          });
        },
        t = function(e) {
          Paddle.Order.details(e.checkout.id, function(e) {
            r.set("order", e),
              window.location.replace("/_checkout/teams/complete");
          });
        },
        n = document.getElementById("size"),
        a = document.getElementById("subscribe"),
        i = o.getParameterByName("organizationId", window.location.href);
      i
        ? a.addEventListener("click", function() {
            e({ amount: n.value, id: i });
          })
        : a.classList.add("disabled");
    });
  },
  function(e, t, n) {
    var r = n(6);
    FramerSite.run("teams", function() {
      var e = document.querySelectorAll("form"),
        t = r.getParameterByName("utm_source"),
        n = r.getParameterByName("utm_medium"),
        o = decodeURIComponent(r.getParameterByName("utm_campaign")),
        a = r.getParameterByName("utm_content");
      t &&
        e.forEach(function(e) {
          var r = e.querySelector(".campaign-input");
          r && (r.value = t + " - " + n + " - " + o + " - " + a);
        });
    }),
      FramerSite.run("blog", function() {
        var e = document.querySelectorAll("a"),
          t = r.getParameters();
        t &&
          e.forEach(function(e) {
            var n = e.href;
            n.indexOf("/teams") !== -1 && (e.href = n + "?" + t);
          });
      });
  },
  function(e, t, n) {
    var r = n(6),
      o = n(4),
      a = n(19);
    FramerSite.run("welcome", function() {
      var e = function(e) {
          if (e.length) return e[0];
        },
        t = function() {
          var t = {};
          location.search
            .substr(1)
            .split("&")
            .forEach(function(e) {
              var n = e.split("="),
                r = n[0],
                o = n[1] && decodeURIComponent(n[1]);
              return r in t ? t[r].push(o) : (t[r] = [o]);
            });
          for (k in t) {
            var n = t[k];
            t[k] = e(n);
          }
          return t;
        },
        n = function(e) {
          var t = "";
          return (
            (t = e.indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0]),
            (t = t.split(":")[0]),
            (t = t.split("?")[0])
          );
        },
        i = t(),
        c = i.reason,
        s = i.id,
        l = i.callback,
        u = i.launch;
      if (c && s && r.cookiesAllowed()) {
        r.setFramerIdCookie(s);
        var d = r.getCookie(),
          f = function() {
            console.log("Tracked: ", s);
          },
          p = function(e) {
            Raven.captureMessage(
              "Failed to track for id: " + s + ". Error: " + e
            );
          };
        a.track("user_login_cookie", s, d, f, p);
      }
      if (l) {
        var m = n(l),
          h =
            "localhost" === m ||
            m.indexOf("framer.cloud") !== -1 ||
            m.indexOf("framer.com") !== -1;
        if (h) {
          var y = new XMLHttpRequest();
          y.open("POST", l, !0),
            y.setRequestHeader("Content-Type", "text/plain; charset=UTF-8"),
            y.send(document.cookie);
        }
      }
      r.cookiesAllowed() &&
        (o.event({ category: "CompleteRegistration", action: "Web" }),
        o.conversion({ id: "965556087", label: "bvEGCJmBwnMQ9-60zAM" })),
        (window.launchFramer = function() {
          window.location.href = u;
        }),
        c.startsWith("x-") && window.launchFramer();
    });
  },
  function(e, t) {
    document.addEventListener("DOMContentLoaded", function() {
      var e = document.getElementById("meetup-locations");
      e &&
        e.querySelectorAll("li").forEach(function(e, t) {
          function n(e) {
            return [, "st", "nd", "rd"][(e % 100 >> 3) ^ 1 && e % 10] || "th";
          }
          var r = e.querySelector("a").getAttribute("data-date"),
            o = e.querySelector("a .meetup-date"),
            a = new Date(r),
            i = new Date(),
            c = a.toDateString() === i.toDateString();
          (o.innerHTML =
            a.toLocaleString("en-us", { month: "short" }) +
            " " +
            a.getDate() +
            n(a.getDate())),
            c
              ? (e.classList.add("today"), (o.innerHTML = "Today"))
              : a < i &&
                (0 == t
                  ? e.classList.add("past", "first")
                  : e.classList.add("past"));
        });
    });
  }
]);
//# sourceMappingURL=index.js.map;
