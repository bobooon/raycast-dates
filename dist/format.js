"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports2, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/dayjs/plugin/advancedFormat.js
var require_advancedFormat = __commonJS({
  "node_modules/dayjs/plugin/advancedFormat.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
    })(exports2, (function() {
      "use strict";
      return function(e, t) {
        var r = t.prototype, n = r.format;
        r.format = function(e2) {
          var t2 = this, r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(e3) {
            switch (e3) {
              case "Q":
                return Math.ceil((t2.$M + 1) / 3);
              case "Do":
                return r2.ordinal(t2.$D);
              case "gggg":
                return t2.weekYear();
              case "GGGG":
                return t2.isoWeekYear();
              case "wo":
                return r2.ordinal(t2.week(), "W");
              case "w":
              case "ww":
                return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
              case "W":
              case "WW":
                return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
              case "k":
              case "kk":
                return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
              case "X":
                return Math.floor(t2.$d.getTime() / 1e3);
              case "x":
                return t2.$d.getTime();
              case "z":
                return "[" + t2.offsetName() + "]";
              case "zzz":
                return "[" + t2.offsetName("long") + "]";
              default:
                return e3;
            }
          }));
          return n.bind(this)(a);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "node_modules/dayjs/plugin/relativeTime.js"(exports2, module2) {
    !(function(r, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    })(exports2, (function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/timezone.js
var require_timezone = __commonJS({
  "node_modules/dayjs/plugin/timezone.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
    })(exports2, (function() {
      "use strict";
      var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
      return function(n, i, o) {
        var r, a = function(t2, n2, i2) {
          void 0 === i2 && (i2 = {});
          var o2 = new Date(t2), r2 = (function(t3, n3) {
            void 0 === n3 && (n3 = {});
            var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
            return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
          })(n2, i2);
          return r2.formatToParts(o2);
        }, u = function(e2, n2) {
          for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
            var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
            c >= 0 && (r2[c] = parseInt(m, 10));
          }
          var d = r2[3], l = 24 === d ? 0 : d, h = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", v = +e2;
          return (o.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
        }, f = i.prototype;
        f.tz = function(t2, e2) {
          void 0 === t2 && (t2 = r);
          var n2, i2 = this.utcOffset(), a2 = this.toDate(), u2 = a2.toLocaleString("en-US", { timeZone: t2 }), f2 = Math.round((a2 - new Date(u2)) / 1e3 / 60), s2 = 15 * -Math.round(a2.getTimezoneOffset() / 15) - f2;
          if (!Number(s2)) n2 = this.utcOffset(0, e2);
          else if (n2 = o(u2, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(s2, true), e2) {
            var m = n2.utcOffset();
            n2 = n2.add(i2 - m, "minute");
          }
          return n2.$x.$timezone = t2, n2;
        }, f.offsetName = function(t2) {
          var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find((function(t3) {
            return "timezonename" === t3.type.toLowerCase();
          }));
          return n2 && n2.value;
        };
        var s = f.startOf;
        f.startOf = function(t2, e2) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, t2, e2);
          var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
          return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
        }, o.tz = function(t2, e2, n2) {
          var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
          if ("string" != typeof t2) return o(t2).tz(a2);
          var s2 = (function(t3, e3, n3) {
            var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
            if (e3 === o2) return [i3, e3];
            var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
            return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
          })(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
          return d.$x.$timezone = a2, d;
        }, o.tz.guess = function() {
          return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }, o.tz.setDefault = function(t2) {
          r = t2;
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/utc.js
var require_utc = __commonJS({
  "node_modules/dayjs/plugin/utc.js"(exports2, module2) {
    !(function(t, i) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
    })(exports2, (function() {
      "use strict";
      var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
      return function(s, f, n) {
        var u = f.prototype;
        n.utc = function(t2) {
          var i2 = { date: t2, utc: true, args: arguments };
          return new f(i2);
        }, u.utc = function(i2) {
          var e2 = n(this.toDate(), { locale: this.$L, utc: true });
          return i2 ? e2.add(this.utcOffset(), t) : e2;
        }, u.local = function() {
          return n(this.toDate(), { locale: this.$L, utc: false });
        };
        var r = u.parse;
        u.parse = function(t2) {
          t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), r.call(this, t2);
        };
        var o = u.init;
        u.init = function() {
          if (this.$u) {
            var t2 = this.$d;
            this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
          } else o.call(this);
        };
        var a = u.utcOffset;
        u.utcOffset = function(s2, f2) {
          var n2 = this.$utils().u;
          if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
          if ("string" == typeof s2 && (s2 = (function(t2) {
            void 0 === t2 && (t2 = "");
            var s3 = t2.match(i);
            if (!s3) return null;
            var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
            return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
          })(s2), null === s2)) return this;
          var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2;
          if (0 === u2) return this.utc(f2);
          var r2 = this.clone();
          if (f2) return r2.$offset = u2, r2.$u = false, r2;
          var o2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          return (r2 = this.local().add(u2 + o2, t)).$offset = u2, r2.$x.$localOffset = o2, r2;
        };
        var h = u.format;
        u.format = function(t2) {
          var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, i2);
        }, u.valueOf = function() {
          var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * t2;
        }, u.isUTC = function() {
          return !!this.$u;
        }, u.toISOString = function() {
          return this.toDate().toISOString();
        }, u.toString = function() {
          return this.toDate().toUTCString();
        };
        var l = u.toDate;
        u.toDate = function(t2) {
          return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
        };
        var c = u.diff;
        u.diff = function(t2, i2, e2) {
          if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
          var s2 = this.local(), f2 = n(t2).local();
          return c.call(s2, f2, i2, e2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/dayjs/plugin/weekOfYear.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    })(exports2, (function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2) return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    }));
  }
});

// src/format.tsx
var format_exports = {};
__export(format_exports, {
  default: () => Format
});
module.exports = __toCommonJS(format_exports);
var import_api = require("@raycast/api");

// node_modules/chrono-node/dist/esm/types.js
var Meridiem;
(function(Meridiem2) {
  Meridiem2[Meridiem2["AM"] = 0] = "AM";
  Meridiem2[Meridiem2["PM"] = 1] = "PM";
})(Meridiem || (Meridiem = {}));
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["SUNDAY"] = 0] = "SUNDAY";
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var Month;
(function(Month2) {
  Month2[Month2["JANUARY"] = 1] = "JANUARY";
  Month2[Month2["FEBRUARY"] = 2] = "FEBRUARY";
  Month2[Month2["MARCH"] = 3] = "MARCH";
  Month2[Month2["APRIL"] = 4] = "APRIL";
  Month2[Month2["MAY"] = 5] = "MAY";
  Month2[Month2["JUNE"] = 6] = "JUNE";
  Month2[Month2["JULY"] = 7] = "JULY";
  Month2[Month2["AUGUST"] = 8] = "AUGUST";
  Month2[Month2["SEPTEMBER"] = 9] = "SEPTEMBER";
  Month2[Month2["OCTOBER"] = 10] = "OCTOBER";
  Month2[Month2["NOVEMBER"] = 11] = "NOVEMBER";
  Month2[Month2["DECEMBER"] = 12] = "DECEMBER";
})(Month || (Month = {}));

// node_modules/chrono-node/dist/esm/utils/dates.js
function assignSimilarDate(component, target) {
  component.assign("day", target.getDate());
  component.assign("month", target.getMonth() + 1);
  component.assign("year", target.getFullYear());
}
function assignSimilarTime(component, target) {
  component.assign("hour", target.getHours());
  component.assign("minute", target.getMinutes());
  component.assign("second", target.getSeconds());
  component.assign("millisecond", target.getMilliseconds());
  component.assign("meridiem", target.getHours() < 12 ? Meridiem.AM : Meridiem.PM);
}
function implySimilarDate(component, target) {
  component.imply("day", target.getDate());
  component.imply("month", target.getMonth() + 1);
  component.imply("year", target.getFullYear());
}
function implySimilarTime(component, target) {
  component.imply("hour", target.getHours());
  component.imply("minute", target.getMinutes());
  component.imply("second", target.getSeconds());
  component.imply("millisecond", target.getMilliseconds());
  component.imply("meridiem", target.getHours() < 12 ? Meridiem.AM : Meridiem.PM);
}

// node_modules/chrono-node/dist/esm/timezone.js
var TIMEZONE_ABBR_MAP = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: {
    timezoneOffsetDuringDst: 2 * 60,
    timezoneOffsetNonDst: 60,
    dstStart: (year) => getLastWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2),
    dstEnd: (year) => getLastWeekdayOfMonth(year, Month.OCTOBER, Weekday.SUNDAY, 3)
  },
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: {
    timezoneOffsetDuringDst: -5 * 60,
    timezoneOffsetNonDst: -6 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: {
    timezoneOffsetDuringDst: -4 * 60,
    timezoneOffsetNonDst: -5 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -6 * 60,
    timezoneOffsetNonDst: -7 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -7 * 60,
    timezoneOffsetNonDst: -8 * 60,
    dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360
};
function getNthWeekdayOfMonth(year, month, weekday, n, hour = 0) {
  let dayOfMonth = 0;
  let i = 0;
  while (i < n) {
    dayOfMonth++;
    const date = new Date(year, month - 1, dayOfMonth);
    if (date.getDay() === weekday)
      i++;
  }
  return new Date(year, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year, month, weekday, hour = 0) {
  const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
  const date = new Date(year, month - 1 + 1, 1, 12);
  const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
  let dayDiff;
  if (firstWeekdayNextMonth === oneIndexedWeekday)
    dayDiff = 7;
  else if (firstWeekdayNextMonth < oneIndexedWeekday)
    dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;
  else
    dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
  date.setDate(date.getDate() - dayDiff);
  return new Date(year, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
  if (timezoneInput == null) {
    return null;
  }
  if (typeof timezoneInput === "number") {
    return timezoneInput;
  }
  const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
  if (matchedTimezone == null) {
    return null;
  }
  if (typeof matchedTimezone == "number") {
    return matchedTimezone;
  }
  if (date == null) {
    return null;
  }
  if (date > matchedTimezone.dstStart(date.getFullYear()) && !(date > matchedTimezone.dstEnd(date.getFullYear()))) {
    return matchedTimezone.timezoneOffsetDuringDst;
  }
  return matchedTimezone.timezoneOffsetNonDst;
}

// node_modules/chrono-node/dist/esm/calculation/duration.js
var EmptyDuration = {
  day: 0,
  second: 0,
  millisecond: 0
};
function addDuration(ref, duration) {
  let date = new Date(ref);
  if (duration["y"]) {
    duration["year"] = duration["y"];
    delete duration["y"];
  }
  if (duration["mo"]) {
    duration["month"] = duration["mo"];
    delete duration["mo"];
  }
  if (duration["M"]) {
    duration["month"] = duration["M"];
    delete duration["M"];
  }
  if (duration["w"]) {
    duration["week"] = duration["w"];
    delete duration["w"];
  }
  if (duration["d"]) {
    duration["day"] = duration["d"];
    delete duration["d"];
  }
  if (duration["h"]) {
    duration["hour"] = duration["h"];
    delete duration["h"];
  }
  if (duration["m"]) {
    duration["minute"] = duration["m"];
    delete duration["m"];
  }
  if (duration["s"]) {
    duration["second"] = duration["s"];
    delete duration["s"];
  }
  if (duration["ms"]) {
    duration["millisecond"] = duration["ms"];
    delete duration["ms"];
  }
  if ("year" in duration) {
    const floor = Math.floor(duration["year"]);
    date.setFullYear(date.getFullYear() + floor);
    const remainingFraction = duration["year"] - floor;
    if (remainingFraction > 0) {
      duration.month = duration?.month ?? 0;
      duration.month += remainingFraction * 12;
    }
  }
  if ("quarter" in duration) {
    const floor = Math.floor(duration["quarter"]);
    date.setMonth(date.getMonth() + floor * 3);
  }
  if ("month" in duration) {
    const floor = Math.floor(duration["month"]);
    date.setMonth(date.getMonth() + floor);
    const remainingFraction = duration["month"] - floor;
    if (remainingFraction > 0) {
      duration.week = duration?.week ?? 0;
      duration.week += remainingFraction * 4;
    }
  }
  if ("week" in duration) {
    const floor = Math.floor(duration["week"]);
    date.setDate(date.getDate() + floor * 7);
    const remainingFraction = duration["week"] - floor;
    if (remainingFraction > 0) {
      duration.day = duration?.day ?? 0;
      duration.day += Math.round(remainingFraction * 7);
    }
  }
  if ("day" in duration) {
    const floor = Math.floor(duration["day"]);
    date.setDate(date.getDate() + floor);
    const remainingFraction = duration["day"] - floor;
    if (remainingFraction > 0) {
      duration.hour = duration?.hour ?? 0;
      duration.hour += Math.round(remainingFraction * 24);
    }
  }
  if ("hour" in duration) {
    const floor = Math.floor(duration["hour"]);
    date.setHours(date.getHours() + floor);
    const remainingFraction = duration["hour"] - floor;
    if (remainingFraction > 0) {
      duration.minute = duration?.minute ?? 0;
      duration.minute += Math.round(remainingFraction * 60);
    }
  }
  if ("minute" in duration) {
    const floor = Math.floor(duration["minute"]);
    date.setMinutes(date.getMinutes() + floor);
    const remainingFraction = duration["minute"] - floor;
    if (remainingFraction > 0) {
      duration.second = duration?.second ?? 0;
      duration.second += Math.round(remainingFraction * 60);
    }
  }
  if ("second" in duration) {
    const floor = Math.floor(duration["second"]);
    date.setSeconds(date.getSeconds() + floor);
    const remainingFraction = duration["second"] - floor;
    if (remainingFraction > 0) {
      duration.millisecond = duration?.millisecond ?? 0;
      duration.millisecond += Math.round(remainingFraction * 1e3);
    }
  }
  if ("millisecond" in duration) {
    const floor = Math.floor(duration["millisecond"]);
    date.setMilliseconds(date.getMilliseconds() + floor);
  }
  return date;
}
function reverseDuration(duration) {
  const reversed = {};
  for (const key in duration) {
    reversed[key] = -duration[key];
  }
  return reversed;
}

// node_modules/chrono-node/dist/esm/results.js
var ReferenceWithTimezone = class _ReferenceWithTimezone {
  instant;
  timezoneOffset;
  constructor(instant, timezoneOffset) {
    this.instant = instant ?? /* @__PURE__ */ new Date();
    this.timezoneOffset = timezoneOffset ?? null;
  }
  static fromDate(date) {
    return new _ReferenceWithTimezone(date);
  }
  static fromInput(input, timezoneOverrides) {
    if (input instanceof Date) {
      return _ReferenceWithTimezone.fromDate(input);
    }
    const instant = input?.instant ?? /* @__PURE__ */ new Date();
    const timezoneOffset = toTimezoneOffset(input?.timezone, instant, timezoneOverrides);
    return new _ReferenceWithTimezone(instant, timezoneOffset);
  }
  getDateWithAdjustedTimezone() {
    const date = new Date(this.instant);
    if (this.timezoneOffset !== null) {
      date.setMinutes(date.getMinutes() - this.getSystemTimezoneAdjustmentMinute(this.instant));
    }
    return date;
  }
  getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
    if (!date || date.getTime() < 0) {
      date = /* @__PURE__ */ new Date();
    }
    const currentTimezoneOffset = -date.getTimezoneOffset();
    const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
    return currentTimezoneOffset - targetTimezoneOffset;
  }
  getTimezoneOffset() {
    return this.timezoneOffset ?? -this.instant.getTimezoneOffset();
  }
};
var ParsingComponents = class _ParsingComponents {
  knownValues;
  impliedValues;
  reference;
  _tags = /* @__PURE__ */ new Set();
  constructor(reference, knownComponents) {
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    if (knownComponents) {
      for (const key in knownComponents) {
        this.knownValues[key] = knownComponents[key];
      }
    }
    const date = reference.getDateWithAdjustedTimezone();
    this.imply("day", date.getDate());
    this.imply("month", date.getMonth() + 1);
    this.imply("year", date.getFullYear());
    this.imply("hour", 12);
    this.imply("minute", 0);
    this.imply("second", 0);
    this.imply("millisecond", 0);
  }
  static createRelativeFromReference(reference, duration = EmptyDuration) {
    let date = addDuration(reference.getDateWithAdjustedTimezone(), duration);
    const components = new _ParsingComponents(reference);
    components.addTag("result/relativeDate");
    if ("hour" in duration || "minute" in duration || "second" in duration || "millisecond" in duration) {
      components.addTag("result/relativeDateAndTime");
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      components.assign("timezoneOffset", reference.getTimezoneOffset());
    } else {
      implySimilarTime(components, date);
      components.imply("timezoneOffset", reference.getTimezoneOffset());
      if ("day" in duration) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.assign("weekday", date.getDay());
      } else if ("week" in duration) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.imply("weekday", date.getDay());
      } else {
        components.imply("day", date.getDate());
        if ("month" in duration) {
          components.assign("month", date.getMonth() + 1);
          components.assign("year", date.getFullYear());
        } else {
          components.imply("month", date.getMonth() + 1);
          if ("year" in duration) {
            components.assign("year", date.getFullYear());
          } else {
            components.imply("year", date.getFullYear());
          }
        }
      }
    }
    return components;
  }
  get(component) {
    if (component in this.knownValues) {
      return this.knownValues[component];
    }
    if (component in this.impliedValues) {
      return this.impliedValues[component];
    }
    return null;
  }
  isCertain(component) {
    return component in this.knownValues;
  }
  getCertainComponents() {
    return Object.keys(this.knownValues);
  }
  imply(component, value) {
    if (component in this.knownValues) {
      return this;
    }
    this.impliedValues[component] = value;
    return this;
  }
  assign(component, value) {
    this.knownValues[component] = value;
    delete this.impliedValues[component];
    return this;
  }
  addDurationAsImplied(duration) {
    const currentDate = this.dateWithoutTimezoneAdjustment();
    const date = addDuration(currentDate, duration);
    if ("day" in duration || "week" in duration || "month" in duration || "year" in duration) {
      this.delete(["day", "weekday", "month", "year"]);
      this.imply("day", date.getDate());
      this.imply("weekday", date.getDay());
      this.imply("month", date.getMonth() + 1);
      this.imply("year", date.getFullYear());
    }
    if ("second" in duration || "minute" in duration || "hour" in duration) {
      this.delete(["second", "minute", "hour"]);
      this.imply("second", date.getSeconds());
      this.imply("minute", date.getMinutes());
      this.imply("hour", date.getHours());
    }
    return this;
  }
  delete(components) {
    if (typeof components === "string") {
      components = [components];
    }
    for (const component of components) {
      delete this.knownValues[component];
      delete this.impliedValues[component];
    }
  }
  clone() {
    const component = new _ParsingComponents(this.reference);
    component.knownValues = {};
    component.impliedValues = {};
    for (const key in this.knownValues) {
      component.knownValues[key] = this.knownValues[key];
    }
    for (const key in this.impliedValues) {
      component.impliedValues[key] = this.impliedValues[key];
    }
    return component;
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year");
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year");
  }
  isValidDate() {
    const date = this.dateWithoutTimezoneAdjustment();
    if (date.getFullYear() !== this.get("year"))
      return false;
    if (date.getMonth() !== this.get("month") - 1)
      return false;
    if (date.getDate() !== this.get("day"))
      return false;
    if (this.get("hour") != null && date.getHours() != this.get("hour"))
      return false;
    if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
      return false;
    return true;
  }
  toString() {
    return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
  }
  date() {
    const date = this.dateWithoutTimezoneAdjustment();
    const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
    return new Date(date.getTime() + timezoneAdjustment * 6e4);
  }
  addTag(tag) {
    this._tags.add(tag);
    return this;
  }
  addTags(tags) {
    for (const tag of tags) {
      this._tags.add(tag);
    }
    return this;
  }
  tags() {
    return new Set(this._tags);
  }
  dateWithoutTimezoneAdjustment() {
    const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    date.setFullYear(this.get("year"));
    return date;
  }
};
var ParsingResult = class _ParsingResult {
  refDate;
  index;
  text;
  reference;
  start;
  end;
  constructor(reference, index, text, start, end) {
    this.reference = reference;
    this.refDate = reference.instant;
    this.index = index;
    this.text = text;
    this.start = start || new ParsingComponents(reference);
    this.end = end;
  }
  clone() {
    const result = new _ParsingResult(this.reference, this.index, this.text);
    result.start = this.start ? this.start.clone() : null;
    result.end = this.end ? this.end.clone() : null;
    return result;
  }
  date() {
    return this.start.date();
  }
  addTag(tag) {
    this.start.addTag(tag);
    if (this.end) {
      this.end.addTag(tag);
    }
    return this;
  }
  addTags(tags) {
    this.start.addTags(tags);
    if (this.end) {
      this.end.addTags(tags);
    }
    return this;
  }
  tags() {
    const combinedTags = new Set(this.start.tags());
    if (this.end) {
      for (const tag of this.end.tags()) {
        combinedTags.add(tag);
      }
    }
    return combinedTags;
  }
  toString() {
    const tags = Array.from(this.tags()).sort();
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(tags)} ...}]`;
  }
};

// node_modules/chrono-node/dist/esm/utils/pattern.js
function repeatedTimeunitPattern(prefix, singleTimeunitPattern, connectorPattern = "\\s{0,5},?\\s{0,5}") {
  const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
  return `${prefix}${singleTimeunitPatternNoCapture}(?:${connectorPattern}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
  let keys;
  if (dictionary instanceof Array) {
    keys = [...dictionary];
  } else if (dictionary instanceof Map) {
    keys = Array.from(dictionary.keys());
  } else {
    keys = Object.keys(dictionary);
  }
  return keys;
}
function matchAnyPattern(dictionary) {
  const joinedTerms = extractTerms(dictionary).sort((a, b) => b.length - a.length).join("|").replace(/\./g, "\\.");
  return `(?:${joinedTerms})`;
}

// node_modules/chrono-node/dist/esm/calculation/years.js
function findMostLikelyADYear(yearNumber) {
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2e3;
    }
  }
  return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
  let date = new Date(refDate);
  date.setMonth(month - 1);
  date.setDate(day);
  const nextYear = addDuration(date, { "year": 1 });
  const lastYear = addDuration(date, { "year": -1 });
  if (Math.abs(nextYear.getTime() - refDate.getTime()) < Math.abs(date.getTime() - refDate.getTime())) {
    date = nextYear;
  } else if (Math.abs(lastYear.getTime() - refDate.getTime()) < Math.abs(date.getTime() - refDate.getTime())) {
    date = lastYear;
  }
  return date.getFullYear();
}

// node_modules/chrono-node/dist/esm/locales/en/constants.js
var WEEKDAY_DICTIONARY = {
  sunday: 0,
  sun: 0,
  "sun.": 0,
  monday: 1,
  mon: 1,
  "mon.": 1,
  tuesday: 2,
  tue: 2,
  "tue.": 2,
  wednesday: 3,
  wed: 3,
  "wed.": 3,
  thursday: 4,
  thurs: 4,
  "thurs.": 4,
  thur: 4,
  "thur.": 4,
  thu: 4,
  "thu.": 4,
  friday: 5,
  fri: 5,
  "fri.": 5,
  saturday: 6,
  sat: 6,
  "sat.": 6
};
var FULL_MONTH_NAME_DICTIONARY = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
var MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  jan: 1,
  "jan.": 1,
  feb: 2,
  "feb.": 2,
  mar: 3,
  "mar.": 3,
  apr: 4,
  "apr.": 4,
  jun: 6,
  "jun.": 6,
  jul: 7,
  "jul.": 7,
  aug: 8,
  "aug.": 8,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oct: 10,
  "oct.": 10,
  nov: 11,
  "nov.": 11,
  dec: 12,
  "dec.": 12
};
var INTEGER_WORD_DICTIONARY = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
};
var ORDINAL_WORD_DICTIONARY = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
  "twenty first": 21,
  "twenty-first": 21,
  "twenty second": 22,
  "twenty-second": 22,
  "twenty third": 23,
  "twenty-third": 23,
  "twenty fourth": 24,
  "twenty-fourth": 24,
  "twenty fifth": 25,
  "twenty-fifth": 25,
  "twenty sixth": 26,
  "twenty-sixth": 26,
  "twenty seventh": 27,
  "twenty-seventh": 27,
  "twenty eighth": 28,
  "twenty-eighth": 28,
  "twenty ninth": 29,
  "twenty-ninth": 29,
  "thirtieth": 30,
  "thirty first": 31,
  "thirty-first": 31
};
var TIME_UNIT_DICTIONARY_NO_ABBR = {
  second: "second",
  seconds: "second",
  minute: "minute",
  minutes: "minute",
  hour: "hour",
  hours: "hour",
  day: "day",
  days: "day",
  week: "week",
  weeks: "week",
  month: "month",
  months: "month",
  quarter: "quarter",
  quarters: "quarter",
  year: "year",
  years: "year"
};
var TIME_UNIT_DICTIONARY = {
  s: "second",
  sec: "second",
  second: "second",
  seconds: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  d: "day",
  day: "day",
  days: "day",
  w: "week",
  week: "week",
  weeks: "week",
  mo: "month",
  mon: "month",
  mos: "month",
  month: "month",
  months: "month",
  qtr: "quarter",
  quarter: "quarter",
  quarters: "quarter",
  y: "year",
  yr: "year",
  year: "year",
  years: "year",
  ...TIME_UNIT_DICTIONARY_NO_ABBR
};
var NUMBER_PATTERN = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY[num];
  } else if (num === "a" || num === "an" || num == "the") {
    return 1;
  } else if (num.match(/few/)) {
    return 3;
  } else if (num.match(/half/)) {
    return 0.5;
  } else if (num.match(/couple/)) {
    return 2;
  } else if (num.match(/several/)) {
    return 7;
  }
  return parseFloat(num);
}
var ORDINAL_NUMBER_PATTERN = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  num = num.replace(/(?:st|nd|rd|th)$/i, "");
  return parseInt(num);
}
var YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])`;
function parseYear(match) {
  if (/BE/i.test(match)) {
    match = match.replace(/BE/i, "");
    return parseInt(match) - 543;
  }
  if (/BCE?/i.test(match)) {
    match = match.replace(/BCE?/i, "");
    return -parseInt(match);
  }
  if (/(AD|CE)/i.test(match)) {
    match = match.replace(/(AD|CE)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
var SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})`;
var SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
var SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
var TIME_UNIT_CONNECTOR_PATTERN = `\\s{0,5},?(?:\\s*and)?\\s{0,5}`;
var TIME_UNITS_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
var TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
function parseDuration(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  if (Object.keys(fragments).length == 0) {
    return null;
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  if (match[0].match(/^[a-zA-Z]+$/)) {
    return;
  }
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}

// node_modules/chrono-node/dist/esm/common/parsers/AbstractParserWithWordBoundary.js
var AbstractParserWithWordBoundaryChecking = class {
  innerPatternHasChange(context, currentInnerPattern) {
    return this.innerPattern(context) !== currentInnerPattern;
  }
  patternLeftBoundary() {
    return `(\\W|^)`;
  }
  cachedInnerPattern = null;
  cachedPattern = null;
  pattern(context) {
    if (this.cachedInnerPattern) {
      if (!this.innerPatternHasChange(context, this.cachedInnerPattern)) {
        return this.cachedPattern;
      }
    }
    this.cachedInnerPattern = this.innerPattern(context);
    this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags);
    return this.cachedPattern;
  }
  extract(context, match) {
    const header = match[1] ?? "";
    match.index = match.index + header.length;
    match[0] = match[0].substring(header.length);
    for (let i = 2; i < match.length; i++) {
      match[i - 1] = match[i];
    }
    return this.innerExtract(context, match);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitWithinFormatParser.js
var PATTERN_WITH_OPTIONAL_PREFIX = new RegExp(`(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
var ENTimeUnitWithinFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMode;
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern(context) {
    if (this.strictMode) {
      return PATTERN_WITH_PREFIX_STRICT;
    }
    return context.option.forwardDate ? PATTERN_WITH_OPTIONAL_PREFIX : PATTERN_WITH_PREFIX;
  }
  innerExtract(context, match) {
    if (match[0].match(/^for\s*the\s*\w+/)) {
      return null;
    }
    const timeUnits = parseDuration(match[1]);
    if (!timeUnits) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameLittleEndianParser.js
var PATTERN = new RegExp(`(?:on\\s{0,3})?(${ORDINAL_NUMBER_PATTERN})(?:\\s{0,3}(?:to|\\-|\\\u2013|until|through|till)?\\s{0,3}(${ORDINAL_NUMBER_PATTERN}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${matchAnyPattern(MONTH_DICTIONARY)})(?:(?:-|/|,?\\s{0,3})(${YEAR_PATTERN}(?!\\w)))?(?=\\W|$)`, "i");
var DATE_GROUP = 1;
var DATE_TO_GROUP = 2;
var MONTH_NAME_GROUP = 3;
var YEAR_GROUP = 4;
var ENMonthNameLittleEndianParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
    const day = parseOrdinalNumberPattern(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP]) {
      const yearNumber = parseYear(match[YEAR_GROUP]);
      result.start.assign("year", yearNumber);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameMiddleEndianParser.js
var PATTERN2 = new RegExp(`(${matchAnyPattern(MONTH_DICTIONARY)})(?:-|/|\\s*,?\\s*)(${ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${ORDINAL_NUMBER_PATTERN})\\s*)?(?:(?:-|/|\\s*,\\s*|\\s+)(${YEAR_PATTERN}))?(?=\\W|$)(?!\\:\\d)`, "i");
var MONTH_NAME_GROUP2 = 1;
var DATE_GROUP2 = 2;
var DATE_TO_GROUP2 = 3;
var YEAR_GROUP2 = 4;
var ENMonthNameMiddleEndianParser = class extends AbstractParserWithWordBoundaryChecking {
  shouldSkipYearLikeDate;
  constructor(shouldSkipYearLikeDate) {
    super();
    this.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
  }
  innerPattern() {
    return PATTERN2;
  }
  innerExtract(context, match) {
    const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP2].toLowerCase()];
    const day = parseOrdinalNumberPattern(match[DATE_GROUP2]);
    if (day > 31) {
      return null;
    }
    if (this.shouldSkipYearLikeDate) {
      if (!match[DATE_TO_GROUP2] && !match[YEAR_GROUP2] && match[DATE_GROUP2].match(/^2[0-5]$/)) {
        return null;
      }
    }
    const components = context.createParsingComponents({
      day,
      month
    }).addTag("parser/ENMonthNameMiddleEndianParser");
    if (match[YEAR_GROUP2]) {
      const year = parseYear(match[YEAR_GROUP2]);
      components.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      components.imply("year", year);
    }
    if (!match[DATE_TO_GROUP2]) {
      return components;
    }
    const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP2]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENMonthNameParser.js
var PATTERN3 = new RegExp(`((?:in)\\s*)?(${matchAnyPattern(MONTH_DICTIONARY)})\\s*(?:(?:,|-|of)?\\s*(${YEAR_PATTERN})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
var PREFIX_GROUP = 1;
var MONTH_NAME_GROUP3 = 2;
var YEAR_GROUP3 = 3;
var ENMonthNameParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN3;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP3].toLowerCase();
    if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index + (match[PREFIX_GROUP] || "").length, match.index + match[0].length);
    result.start.imply("day", 1);
    result.start.addTag("parser/ENMonthNameParser");
    const month = MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP3]) {
      const year = parseYear(match[YEAR_GROUP3]);
      result.start.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, 1, month);
      result.start.imply("year", year);
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENYearMonthDayParser.js
var PATTERN4 = new RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${matchAnyPattern(MONTH_DICTIONARY)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
var YEAR_NUMBER_GROUP = 1;
var MONTH_NAME_GROUP4 = 2;
var MONTH_NUMBER_GROUP = 3;
var DATE_NUMBER_GROUP = 4;
var ENYearMonthDayParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMonthDateOrder;
  constructor(strictMonthDateOrder) {
    super();
    this.strictMonthDateOrder = strictMonthDateOrder;
  }
  innerPattern() {
    return PATTERN4;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_NUMBER_GROUP]);
    let day = parseInt(match[DATE_NUMBER_GROUP]);
    let month = match[MONTH_NUMBER_GROUP] ? parseInt(match[MONTH_NUMBER_GROUP]) : MONTH_DICTIONARY[match[MONTH_NAME_GROUP4].toLowerCase()];
    if (month < 1 || month > 12) {
      if (this.strictMonthDateOrder) {
        return null;
      }
      if (day >= 1 && day <= 12) {
        [month, day] = [day, month];
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    return {
      day,
      month,
      year
    };
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENSlashMonthFormatParser.js
var PATTERN5 = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
var MONTH_GROUP = 1;
var YEAR_GROUP4 = 2;
var ENSlashMonthFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN5;
  }
  innerExtract(context, match) {
    const year = parseInt(match[YEAR_GROUP4]);
    const month = parseInt(match[MONTH_GROUP]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/AbstractTimeExpressionParser.js
function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
  return new RegExp(`${leftBoundary}${primaryPrefix}(\\d{1,4})(?:(?:\\.|:|\uFF1A)(\\d{1,2})(?:(?::|\uFF1A)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
  return new RegExp(`^(${followingPhase})(\\d{1,4})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:(?:\\.|\\:|\\\uFF1A)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${followingSuffix}`, "i");
}
var HOUR_GROUP = 2;
var MINUTE_GROUP = 3;
var SECOND_GROUP = 4;
var MILLI_SECOND_GROUP = 5;
var AM_PM_HOUR_GROUP = 6;
var AbstractTimeExpressionParser = class {
  strictMode;
  constructor(strictMode = false) {
    this.strictMode = strictMode;
  }
  patternFlags() {
    return "i";
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|\\b)`;
  }
  primarySuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  followingSuffix() {
    return `(?!/)(?=\\W|$)`;
  }
  pattern(context) {
    return this.getPrimaryTimePatternThroughCache();
  }
  extract(context, match) {
    const startComponents = this.extractPrimaryTimeComponents(context, match);
    if (!startComponents) {
      if (match[0].match(/^\d{4}/)) {
        match.index += 4;
        return null;
      }
      match.index += match[0].length;
      return null;
    }
    const index = match.index + match[1].length;
    const text = match[0].substring(match[1].length);
    const result = context.createParsingResult(index, text, startComponents);
    match.index += match[0].length;
    const remainingText = context.text.substring(match.index);
    const followingPattern = this.getFollowingTimePatternThroughCache();
    const followingMatch = followingPattern.exec(remainingText);
    if (text.match(/^\d{3,4}/) && followingMatch) {
      if (followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
        return null;
      }
      if (followingMatch[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) {
        return null;
      }
    }
    if (!followingMatch || followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
      return this.checkAndReturnWithoutFollowingPattern(result);
    }
    result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
    if (result.end) {
      result.text += followingMatch[0];
    }
    return this.checkAndReturnWithFollowingPattern(result);
  }
  extractPrimaryTimeComponents(context, match, strict2 = false) {
    const components = context.createParsingComponents();
    let minute = 0;
    let meridiem = null;
    let hour = parseInt(match[HOUR_GROUP]);
    if (hour > 100) {
      if (match[HOUR_GROUP].length == 4 && match[MINUTE_GROUP] == null && !match[AM_PM_HOUR_GROUP]) {
        return null;
      }
      if (this.strictMode || match[MINUTE_GROUP] != null) {
        return null;
      }
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (hour > 24) {
      return null;
    }
    if (match[MINUTE_GROUP] != null) {
      if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
        return null;
      }
      minute = parseInt(match[MINUTE_GROUP]);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem !== null) {
      components.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        components.imply("meridiem", Meridiem.AM);
      } else {
        components.imply("meridiem", Meridiem.PM);
      }
    }
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    return components;
  }
  extractFollowingTimeComponents(context, match, result) {
    const components = context.createParsingComponents();
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP] != null) {
      const second = parseInt(match[SECOND_GROUP]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    let hour = parseInt(match[HOUR_GROUP]);
    let minute = 0;
    let meridiem = -1;
    if (match[MINUTE_GROUP] != null) {
      minute = parseInt(match[MINUTE_GROUP]);
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP] != null) {
      if (hour > 12) {
        return null;
      }
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
          if (!components.isCertain("day")) {
            components.imply("day", components.get("day") + 1);
          }
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12)
          hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == Meridiem.AM) {
          result.start.imply("meridiem", Meridiem.AM);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", Meridiem.PM);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem >= 0) {
      components.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
      if (startAtPM) {
        if (result.start.get("hour") - 12 > hour) {
          components.imply("meridiem", Meridiem.AM);
        } else if (hour <= 12) {
          components.assign("hour", hour + 12);
          components.assign("meridiem", Meridiem.PM);
        }
      } else if (hour > 12) {
        components.imply("meridiem", Meridiem.PM);
      } else if (hour <= 12) {
        components.imply("meridiem", Meridiem.AM);
      }
    }
    if (components.date().getTime() < result.start.date().getTime()) {
      components.imply("day", components.get("day") + 1);
    }
    return components;
  }
  checkAndReturnWithoutFollowingPattern(result) {
    if (result.text.match(/^\d$/)) {
      return null;
    }
    if (result.text.match(/^\d\d\d+$/)) {
      return null;
    }
    if (result.text.match(/\d[apAP]$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
    if (endingWithNumbers) {
      const endingNumbers = endingWithNumbers[1];
      if (this.strictMode) {
        return null;
      }
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      if (endingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  checkAndReturnWithFollowingPattern(result) {
    if (result.text.match(/^\d+-\d+$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (endingWithNumbers) {
      if (this.strictMode) {
        return null;
      }
      const startingNumbers = endingWithNumbers[1];
      const endingNumbers = endingWithNumbers[2];
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      const startingNumberVal = parseInt(startingNumbers);
      if (endingNumberVal > 24 || startingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  cachedPrimaryPrefix = null;
  cachedPrimarySuffix = null;
  cachedPrimaryTimePattern = null;
  getPrimaryTimePatternThroughCache() {
    const primaryPrefix = this.primaryPrefix();
    const primarySuffix = this.primarySuffix();
    if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
      return this.cachedPrimaryTimePattern;
    }
    this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
    this.cachedPrimaryPrefix = primaryPrefix;
    this.cachedPrimarySuffix = primarySuffix;
    return this.cachedPrimaryTimePattern;
  }
  cachedFollowingPhase = null;
  cachedFollowingSuffix = null;
  cachedFollowingTimePatten = null;
  getFollowingTimePatternThroughCache() {
    const followingPhase = this.followingPhase();
    const followingSuffix = this.followingSuffix();
    if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
      return this.cachedFollowingTimePatten;
    }
    this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
    this.cachedFollowingPhase = followingPhase;
    this.cachedFollowingSuffix = followingSuffix;
    return this.cachedFollowingTimePatten;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeExpressionParser.js
var ENTimeExpressionParser = class extends AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  followingPhase() {
    return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|to|until|through|till|\\?)\\s*";
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??";
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (!components) {
      return components;
    }
    if (match[0].endsWith("night")) {
      const hour = components.get("hour");
      if (hour >= 6 && hour < 12) {
        components.assign("hour", components.get("hour") + 12);
        components.assign("meridiem", Meridiem.PM);
      } else if (hour < 6) {
        components.assign("meridiem", Meridiem.AM);
      }
    }
    if (match[0].endsWith("afternoon")) {
      components.assign("meridiem", Meridiem.PM);
      const hour = components.get("hour");
      if (hour >= 0 && hour <= 6) {
        components.assign("hour", components.get("hour") + 12);
      }
    }
    if (match[0].endsWith("morning")) {
      components.assign("meridiem", Meridiem.AM);
      const hour = components.get("hour");
      if (hour < 12) {
        components.assign("hour", components.get("hour"));
      }
    }
    return components.addTag("parser/ENTimeExpressionParser");
  }
  extractFollowingTimeComponents(context, match, result) {
    const followingComponents = super.extractFollowingTimeComponents(context, match, result);
    if (followingComponents) {
      followingComponents.addTag("parser/ENTimeExpressionParser");
    }
    return followingComponents;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitAgoFormatParser.js
var PATTERN6 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var STRICT_PATTERN = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
var ENTimeUnitAgoFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMode;
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN6;
  }
  innerExtract(context, match) {
    const duration = parseDuration(match[1]);
    if (!duration) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, reverseDuration(duration));
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitLaterFormatParser.js
var PATTERN7 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i");
var STRICT_PATTERN2 = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
var GROUP_NUM_TIMEUNITS = 1;
var ENTimeUnitLaterFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  strictMode;
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN2 : PATTERN7;
  }
  innerExtract(context, match) {
    const timeUnits = parseDuration(match[GROUP_NUM_TIMEUNITS]);
    if (!timeUnits) {
      return null;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
};

// node_modules/chrono-node/dist/esm/common/abstractRefiners.js
var Filter = class {
  refine(context, results) {
    return results.filter((r) => this.isValid(context, r));
  }
};
var MergingRefiner = class {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const mergedResults = [];
    let curResult = results[0];
    let nextResult = null;
    for (let i = 1; i < results.length; i++) {
      nextResult = results[i];
      const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
      if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
        mergedResults.push(curResult);
        curResult = nextResult;
      } else {
        const left = curResult;
        const right = nextResult;
        const mergedResult = this.mergeResults(textBetween, left, right, context);
        context.debug(() => {
          console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
        });
        curResult = mergedResult;
      }
    }
    if (curResult != null) {
      mergedResults.push(curResult);
    }
    return mergedResults;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateRangeRefiner.js
var AbstractMergeDateRangeRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, fromResult, toResult) {
    if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
      toResult.start.getCertainComponents().forEach((key) => {
        if (!fromResult.start.isCertain(key)) {
          fromResult.start.imply(key, toResult.start.get(key));
        }
      });
      fromResult.start.getCertainComponents().forEach((key) => {
        if (!toResult.start.isCertain(key)) {
          toResult.start.imply(key, fromResult.start.get(key));
        }
      });
    }
    if (fromResult.start.date() > toResult.start.date()) {
      let fromDate = fromResult.start.date();
      let toDate = toResult.start.date();
      if (toResult.start.isOnlyWeekdayComponent() && addDuration(toDate, { day: 7 }) > fromDate) {
        toDate = addDuration(toDate, { day: 7 });
        toResult.start.imply("day", toDate.getDate());
        toResult.start.imply("month", toDate.getMonth() + 1);
        toResult.start.imply("year", toDate.getFullYear());
      } else if (fromResult.start.isOnlyWeekdayComponent() && addDuration(fromDate, { day: -7 }) < toDate) {
        fromDate = addDuration(fromDate, { day: -7 });
        fromResult.start.imply("day", fromDate.getDate());
        fromResult.start.imply("month", fromDate.getMonth() + 1);
        fromResult.start.imply("year", fromDate.getFullYear());
      } else if (toResult.start.isDateWithUnknownYear() && addDuration(toDate, { year: 1 }) > fromDate) {
        toDate = addDuration(toDate, { year: 1 });
        toResult.start.imply("year", toDate.getFullYear());
      } else if (fromResult.start.isDateWithUnknownYear() && addDuration(fromDate, { year: -1 }) < toDate) {
        fromDate = addDuration(fromDate, { year: -1 });
        fromResult.start.imply("year", fromDate.getFullYear());
      } else {
        [toResult, fromResult] = [fromResult, toResult];
      }
    }
    const result = fromResult.clone();
    result.start = fromResult.start;
    result.end = toResult.start;
    result.index = Math.min(fromResult.index, toResult.index);
    if (fromResult.index < toResult.index) {
      result.text = fromResult.text + textBetween + toResult.text;
    } else {
      result.text = toResult.text + textBetween + fromResult.text;
    }
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateRangeRefiner.js
var ENMergeDateRangeRefiner = class extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
};

// node_modules/chrono-node/dist/esm/calculation/mergingCalculation.js
function mergeDateTimeResult(dateResult, timeResult) {
  const result = dateResult.clone();
  const beginDate = dateResult.start;
  const beginTime = timeResult.start;
  result.start = mergeDateTimeComponent(beginDate, beginTime);
  if (dateResult.end != null || timeResult.end != null) {
    const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
    const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
    const endDateTime = mergeDateTimeComponent(endDate, endTime);
    if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
      const nextDay = new Date(endDateTime.date().getTime());
      nextDay.setDate(nextDay.getDate() + 1);
      if (endDateTime.isCertain("day")) {
        assignSimilarDate(endDateTime, nextDay);
      } else {
        implySimilarDate(endDateTime, nextDay);
      }
    }
    result.end = endDateTime;
  }
  return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
  const dateTimeComponent = dateComponent.clone();
  if (timeComponent.isCertain("hour")) {
    dateTimeComponent.assign("hour", timeComponent.get("hour"));
    dateTimeComponent.assign("minute", timeComponent.get("minute"));
    if (timeComponent.isCertain("second")) {
      dateTimeComponent.assign("second", timeComponent.get("second"));
      if (timeComponent.isCertain("millisecond")) {
        dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
      } else {
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
      }
    } else {
      dateTimeComponent.imply("second", timeComponent.get("second"));
      dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
  } else {
    dateTimeComponent.imply("hour", timeComponent.get("hour"));
    dateTimeComponent.imply("minute", timeComponent.get("minute"));
    dateTimeComponent.imply("second", timeComponent.get("second"));
    dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
  }
  if (timeComponent.isCertain("timezoneOffset")) {
    dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
  }
  if (timeComponent.isCertain("meridiem")) {
    dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
  } else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
    dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
  }
  if (dateTimeComponent.get("meridiem") == Meridiem.PM && dateTimeComponent.get("hour") < 12) {
    if (timeComponent.isCertain("hour")) {
      dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
    } else {
      dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
    }
  }
  dateTimeComponent.addTags(dateComponent.tags());
  dateTimeComponent.addTags(timeComponent.tags());
  return dateTimeComponent;
}

// node_modules/chrono-node/dist/esm/common/refiners/AbstractMergeDateTimeRefiner.js
var AbstractMergeDateTimeRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return (currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime() || nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime()) && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, currentResult, nextResult) {
    const result = currentResult.start.isOnlyDate() ? mergeDateTimeResult(currentResult, nextResult) : mergeDateTimeResult(nextResult, currentResult);
    result.index = currentResult.index;
    result.text = currentResult.text + textBetween + nextResult.text;
    return result;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeDateTimeRefiner.js
var ENMergeDateTimeRefiner = class extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|\u2219|:)?\\s*$");
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneAbbrRefiner.js
var TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
var ExtractTimezoneAbbrRefiner = class {
  timezoneOverrides;
  constructor(timezoneOverrides) {
    this.timezoneOverrides = timezoneOverrides;
  }
  refine(context, results) {
    const timezoneOverrides = context.option.timezones ?? {};
    results.forEach((result) => {
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_NAME_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      const timezoneAbbr = match[1].toUpperCase();
      const refDate = result.start.date() ?? result.refDate ?? /* @__PURE__ */ new Date();
      const tzOverrides = { ...this.timezoneOverrides, ...timezoneOverrides };
      const extractedTimezoneOffset = toTimezoneOffset(timezoneAbbr, refDate, tzOverrides);
      if (extractedTimezoneOffset == null) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
      });
      const currentTimezoneOffset = result.start.get("timezoneOffset");
      if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
        if (result.start.isCertain("timezoneOffset")) {
          return;
        }
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      if (result.start.isOnlyDate()) {
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      result.text += match[0];
      if (!result.start.isCertain("timezoneOffset")) {
        result.start.assign("timezoneOffset", extractedTimezoneOffset);
      }
      if (result.end != null && !result.end.isCertain("timezoneOffset")) {
        result.end.assign("timezoneOffset", extractedTimezoneOffset);
      }
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ExtractTimezoneOffsetRefiner.js
var TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
var TIMEZONE_OFFSET_SIGN_GROUP = 1;
var TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
var TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
var ExtractTimezoneOffsetRefiner = class {
  refine(context, results) {
    results.forEach(function(result) {
      if (result.start.isCertain("timezoneOffset")) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
      });
      const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
      const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
      let timezoneOffset = hourOffset * 60 + minuteOffset;
      if (timezoneOffset > 14 * 60) {
        return;
      }
      if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
        timezoneOffset = -timezoneOffset;
      }
      if (result.end != null) {
        result.end.assign("timezoneOffset", timezoneOffset);
      }
      result.start.assign("timezoneOffset", timezoneOffset);
      result.text += match[0];
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/OverlapRemovalRefiner.js
var OverlapRemovalRefiner = class {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const filteredResults = [];
    let prevResult = results[0];
    for (let i = 1; i < results.length; i++) {
      const result = results[i];
      if (result.index >= prevResult.index + prevResult.text.length) {
        filteredResults.push(prevResult);
        prevResult = result;
        continue;
      }
      let kept = null;
      let removed = null;
      if (result.text.length > prevResult.text.length) {
        kept = result;
        removed = prevResult;
      } else {
        kept = prevResult;
        removed = result;
      }
      context.debug(() => {
        console.log(`${this.constructor.name} remove ${removed} by ${kept}`);
      });
      prevResult = kept;
    }
    if (prevResult != null) {
      filteredResults.push(prevResult);
    }
    return filteredResults;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/ForwardDateRefiner.js
var ForwardDateRefiner = class {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach((result) => {
      let refDate = context.reference.getDateWithAdjustedTimezone();
      if (result.start.isOnlyTime() && context.reference.instant > result.start.date()) {
        const refDate2 = context.reference.getDateWithAdjustedTimezone();
        const refFollowingDay = new Date(refDate2);
        refFollowingDay.setDate(refFollowingDay.getDate() + 1);
        implySimilarDate(result.start, refFollowingDay);
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} time from the ref date (${refDate2}) to the following day (${refFollowingDay})`);
        });
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate(result.end, refFollowingDay);
          if (result.start.date() > result.end.date()) {
            refFollowingDay.setDate(refFollowingDay.getDate() + 1);
            implySimilarDate(result.end, refFollowingDay);
          }
        }
      }
      if (result.start.isOnlyWeekdayComponent() && refDate > result.start.date()) {
        let daysToAdd = result.start.get("weekday") - refDate.getDay();
        if (daysToAdd <= 0) {
          daysToAdd += 7;
        }
        refDate = addDuration(refDate, { day: daysToAdd });
        implySimilarDate(result.start, refDate);
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} weekday (${result.start})`);
        });
        if (result.end && result.end.isOnlyWeekdayComponent()) {
          let daysToAdd2 = result.end.get("weekday") - refDate.getDay();
          if (daysToAdd2 <= 0) {
            daysToAdd2 += 7;
          }
          refDate = addDuration(refDate, { day: daysToAdd2 });
          implySimilarDate(result.end, refDate);
          context.debug(() => {
            console.log(`${this.constructor.name} adjusted ${result} weekday (${result.end})`);
          });
        }
      }
      if (result.start.isDateWithUnknownYear() && refDate > result.start.date()) {
        for (let i = 0; i < 3 && refDate > result.start.date(); i++) {
          result.start.imply("year", result.start.get("year") + 1);
          context.debug(() => {
            console.log(`${this.constructor.name} adjusted ${result} year (${result.start})`);
          });
          if (result.end && !result.end.isCertain("year")) {
            result.end.imply("year", result.end.get("year") + 1);
            context.debug(() => {
              console.log(`${this.constructor.name} adjusted ${result} month (${result.start})`);
            });
          }
        }
      }
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/UnlikelyFormatFilter.js
var UnlikelyFormatFilter = class extends Filter {
  strictMode;
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  isValid(context, result) {
    if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
      context.debug(() => {
        console.log(`Removing unlikely result '${result.text}'`);
      });
      return false;
    }
    if (!result.start.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.start})`);
      });
      return false;
    }
    if (result.end && !result.end.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.end})`);
      });
      return false;
    }
    if (this.strictMode) {
      return this.isStrictModeValid(context, result);
    }
    return true;
  }
  isStrictModeValid(context, result) {
    if (result.start.isOnlyWeekdayComponent()) {
      context.debug(() => {
        console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
      });
      return false;
    }
    return true;
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/ISOFormatParser.js
var PATTERN8 = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i");
var YEAR_NUMBER_GROUP2 = 1;
var MONTH_NUMBER_GROUP2 = 2;
var DATE_NUMBER_GROUP2 = 3;
var HOUR_NUMBER_GROUP = 4;
var MINUTE_NUMBER_GROUP = 5;
var SECOND_NUMBER_GROUP = 6;
var MILLISECOND_NUMBER_GROUP = 7;
var TZD_GROUP = 8;
var TZD_HOUR_OFFSET_GROUP = 9;
var TZD_MINUTE_OFFSET_GROUP = 10;
var ISOFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN8;
  }
  innerExtract(context, match) {
    const components = context.createParsingComponents({
      "year": parseInt(match[YEAR_NUMBER_GROUP2]),
      "month": parseInt(match[MONTH_NUMBER_GROUP2]),
      "day": parseInt(match[DATE_NUMBER_GROUP2])
    });
    if (match[HOUR_NUMBER_GROUP] != null) {
      components.assign("hour", parseInt(match[HOUR_NUMBER_GROUP]));
      components.assign("minute", parseInt(match[MINUTE_NUMBER_GROUP]));
      if (match[SECOND_NUMBER_GROUP] != null) {
        components.assign("second", parseInt(match[SECOND_NUMBER_GROUP]));
      }
      if (match[MILLISECOND_NUMBER_GROUP] != null) {
        components.assign("millisecond", parseInt(match[MILLISECOND_NUMBER_GROUP]));
      }
      if (match[TZD_GROUP] != null) {
        let offset = 0;
        if (match[TZD_HOUR_OFFSET_GROUP]) {
          const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
          let minuteOffset = 0;
          if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
            minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
          }
          offset = hourOffset * 60;
          if (offset < 0) {
            offset -= minuteOffset;
          } else {
            offset += minuteOffset;
          }
        }
        components.assign("timezoneOffset", offset);
      }
    }
    return components.addTag("parser/ISOFormatParser");
  }
};

// node_modules/chrono-node/dist/esm/common/refiners/MergeWeekdayComponentRefiner.js
var MergeWeekdayComponentRefiner = class extends MergingRefiner {
  mergeResults(textBetween, currentResult, nextResult) {
    const newResult = nextResult.clone();
    newResult.index = currentResult.index;
    newResult.text = currentResult.text + textBetween + newResult.text;
    newResult.start.assign("weekday", currentResult.start.get("weekday"));
    if (newResult.end) {
      newResult.end.assign("weekday", currentResult.start.get("weekday"));
    }
    return newResult;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() && !currentResult.start.isCertain("hour") && nextResult.start.isCertain("day");
    return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
  }
};

// node_modules/chrono-node/dist/esm/configurations.js
function includeCommonConfiguration(configuration2, strictMode = false) {
  configuration2.parsers.unshift(new ISOFormatParser());
  configuration2.refiners.unshift(new MergeWeekdayComponentRefiner());
  configuration2.refiners.unshift(new ExtractTimezoneOffsetRefiner());
  configuration2.refiners.unshift(new OverlapRemovalRefiner());
  configuration2.refiners.push(new ExtractTimezoneAbbrRefiner());
  configuration2.refiners.push(new OverlapRemovalRefiner());
  configuration2.refiners.push(new ForwardDateRefiner());
  configuration2.refiners.push(new UnlikelyFormatFilter(strictMode));
  return configuration2;
}

// node_modules/chrono-node/dist/esm/common/casualReferences.js
function now(reference) {
  const targetDate = reference.getDateWithAdjustedTimezone();
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  assignSimilarTime(component, targetDate);
  component.assign("timezoneOffset", reference.getTimezoneOffset());
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = reference.getDateWithAdjustedTimezone();
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  component.delete("meridiem");
  component.addTag("casualReference/today");
  return component;
}
function yesterday(reference) {
  return theDayBefore(reference, 1).addTag("casualReference/yesterday");
}
function tomorrow(reference) {
  return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayBefore(reference, numDay) {
  return theDayAfter(reference, -numDay);
}
function theDayAfter(reference, nDays) {
  const targetDate = reference.getDateWithAdjustedTimezone();
  const component = new ParsingComponents(reference, {});
  const newDate = new Date(targetDate.getTime());
  newDate.setDate(newDate.getDate() + nDays);
  assignSimilarDate(component, newDate);
  implySimilarTime(component, newDate);
  component.delete("meridiem");
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = reference.getDateWithAdjustedTimezone();
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  component.imply("hour", implyHour);
  component.imply("meridiem", Meridiem.PM);
  component.addTag("casualReference/tonight");
  return component;
}
function evening(reference, implyHour = 20) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  component.addTag("casualReference/evening");
  return component;
}
function midnight(reference) {
  const component = new ParsingComponents(reference, {});
  if (reference.getDateWithAdjustedTimezone().getHours() > 2) {
    component.addDurationAsImplied({ day: 1 });
  }
  component.assign("hour", 0);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/midnight");
  return component;
}
function morning(reference, implyHour = 6) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/morning");
  return component;
}
function afternoon(reference, implyHour = 15) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/afternoon");
  return component;
}
function noon(reference) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.assign("hour", 12);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  component.addTag("casualReference/noon");
  return component;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js
var PATTERN9 = /(now|today|tonight|tomorrow|overmorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
var ENCasualDateParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN9;
  }
  innerExtract(context, match) {
    let targetDate = context.refDate;
    const lowerText = match[0].toLowerCase();
    let component = context.createParsingComponents();
    switch (lowerText) {
      case "now":
        component = now(context.reference);
        break;
      case "today":
        component = today(context.reference);
        break;
      case "yesterday":
        component = yesterday(context.reference);
        break;
      case "tomorrow":
      case "tmr":
      case "tmrw":
        component = tomorrow(context.reference);
        break;
      case "tonight":
        component = tonight(context.reference);
        break;
      case "overmorrow":
        component = theDayAfter(context.reference, 2);
        break;
      default:
        if (lowerText.match(/last\s*night/)) {
          if (targetDate.getHours() > 6) {
            const previousDay = new Date(targetDate.getTime());
            previousDay.setDate(previousDay.getDate() - 1);
            targetDate = previousDay;
          }
          assignSimilarDate(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    component.addTag("parser/ENCasualDateParser");
    return component;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualTimeParser.js
var PATTERN10 = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
var ENCasualTimeParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN10;
  }
  innerExtract(context, match) {
    let component = null;
    switch (match[1].toLowerCase()) {
      case "afternoon":
        component = afternoon(context.reference);
        break;
      case "evening":
      case "night":
        component = evening(context.reference);
        break;
      case "midnight":
        component = midnight(context.reference);
        break;
      case "morning":
        component = morning(context.reference);
        break;
      case "noon":
      case "midday":
        component = noon(context.reference);
        break;
    }
    if (component) {
      component.addTag("parser/ENCasualTimeParser");
    }
    return component;
  }
};

// node_modules/chrono-node/dist/esm/calculation/weekdays.js
function createParsingComponentsAtWeekday(reference, weekday, modifier) {
  const refDate = reference.getDateWithAdjustedTimezone();
  const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
  let components = new ParsingComponents(reference);
  components = components.addDurationAsImplied({ day: daysToWeekday });
  components.assign("weekday", weekday);
  return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
  const refWeekday = refDate.getDay();
  switch (modifier) {
    case "this":
      return getDaysForwardToWeekday(refDate, weekday);
    case "last":
      return getBackwardDaysToWeekday(refDate, weekday);
    case "next":
      if (refWeekday == Weekday.SUNDAY) {
        return weekday == Weekday.SUNDAY ? 7 : weekday;
      }
      if (refWeekday == Weekday.SATURDAY) {
        if (weekday == Weekday.SATURDAY)
          return 7;
        if (weekday == Weekday.SUNDAY)
          return 8;
        return 1 + weekday;
      }
      if (weekday < refWeekday && weekday != Weekday.SUNDAY) {
        return getDaysForwardToWeekday(refDate, weekday);
      } else {
        return getDaysForwardToWeekday(refDate, weekday) + 7;
      }
  }
  return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
  const backward = getBackwardDaysToWeekday(refDate, weekday);
  const forward = getDaysForwardToWeekday(refDate, weekday);
  return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let forwardCount = weekday - refWeekday;
  if (forwardCount < 0) {
    forwardCount += 7;
  }
  return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let backwardCount = weekday - refWeekday;
  if (backwardCount >= 0) {
    backwardCount -= 7;
  }
  return backwardCount;
}

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENWeekdayParser.js
var PATTERN11 = new RegExp(`(?:(?:\\,|\\(|\\\uFF08)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\\uFF09))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i");
var PREFIX_GROUP2 = 1;
var WEEKDAY_GROUP = 2;
var POSTFIX_GROUP = 3;
var ENWeekdayParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN11;
  }
  innerExtract(context, match) {
    const prefix = match[PREFIX_GROUP2];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "last" || modifierWord == "past") {
      modifier = "last";
    } else if (modifierWord == "next") {
      modifier = "next";
    } else if (modifierWord == "this") {
      modifier = "this";
    }
    const weekday_word = match[WEEKDAY_GROUP].toLowerCase();
    let weekday;
    if (WEEKDAY_DICTIONARY[weekday_word] !== void 0) {
      weekday = WEEKDAY_DICTIONARY[weekday_word];
    } else if (weekday_word == "weekend") {
      weekday = modifier == "last" ? Weekday.SUNDAY : Weekday.SATURDAY;
    } else if (weekday_word == "weekday") {
      const refWeekday = context.reference.getDateWithAdjustedTimezone().getDay();
      if (refWeekday == Weekday.SUNDAY || refWeekday == Weekday.SATURDAY) {
        weekday = modifier == "last" ? Weekday.FRIDAY : Weekday.MONDAY;
      } else {
        weekday = refWeekday - 1;
        weekday = modifier == "last" ? weekday - 1 : weekday + 1;
        weekday = weekday % 5 + 1;
      }
    } else {
      return null;
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENRelativeDateFormatParser.js
var PATTERN12 = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY)})(?=\\s*)(?=\\W|$)`, "i");
var MODIFIER_WORD_GROUP = 1;
var RELATIVE_WORD_GROUP = 2;
var ENRelativeDateFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN12;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "next" || modifier.startsWith("after")) {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "last" || modifier == "past") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = new Date(context.reference.instant.getTime());
    if (unitWord.match(/week/i)) {
      date.setDate(date.getDate() - date.getDay());
      components.imply("day", date.getDate());
      components.imply("month", date.getMonth() + 1);
      components.imply("year", date.getFullYear());
    } else if (unitWord.match(/month/i)) {
      date.setDate(1);
      components.imply("day", date.getDate());
      components.assign("year", date.getFullYear());
      components.assign("month", date.getMonth() + 1);
    } else if (unitWord.match(/year/i)) {
      date.setDate(1);
      date.setMonth(0);
      components.imply("day", date.getDate());
      components.imply("month", date.getMonth() + 1);
      components.assign("year", date.getFullYear());
    }
    return components;
  }
};

// node_modules/chrono-node/dist/esm/common/parsers/SlashDateFormatParser.js
var PATTERN13 = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i");
var OPENING_GROUP = 1;
var ENDING_GROUP = 5;
var FIRST_NUMBERS_GROUP = 2;
var SECOND_NUMBERS_GROUP = 3;
var YEAR_GROUP5 = 4;
var SlashDateFormatParser = class {
  groupNumberMonth;
  groupNumberDay;
  constructor(littleEndian) {
    this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
    this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
  }
  pattern() {
    return PATTERN13;
  }
  extract(context, match) {
    const index = match.index + match[OPENING_GROUP].length;
    const indexEnd = match.index + match[0].length - match[ENDING_GROUP].length;
    if (index > 0) {
      const textBefore = context.text.substring(0, index);
      if (textBefore.match("\\d/?$")) {
        return;
      }
    }
    if (indexEnd < context.text.length) {
      const textAfter = context.text.substring(indexEnd);
      if (textAfter.match("^/?\\d")) {
        return;
      }
    }
    const text = context.text.substring(index, indexEnd);
    if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
      return;
    }
    if (!match[YEAR_GROUP5] && text.indexOf("/") < 0) {
      return;
    }
    const result = context.createParsingResult(index, text);
    let month = parseInt(match[this.groupNumberMonth]);
    let day = parseInt(match[this.groupNumberDay]);
    if (month < 1 || month > 12) {
      if (month > 12) {
        if (day >= 1 && day <= 12 && month <= 31) {
          [day, month] = [month, day];
        } else {
          return null;
        }
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    result.start.assign("day", day);
    result.start.assign("month", month);
    if (match[YEAR_GROUP5]) {
      const rawYearNumber = parseInt(match[YEAR_GROUP5]);
      const year = findMostLikelyADYear(rawYearNumber);
      result.start.assign("year", year);
    } else {
      const year = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year);
    }
    return result.addTag("parser/SlashDateFormatParser");
  }
};

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENTimeUnitCasualRelativeFormatParser.js
var PATTERN14 = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
var PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
var ENTimeUnitCasualRelativeFormatParser = class extends AbstractParserWithWordBoundaryChecking {
  allowAbbreviations;
  constructor(allowAbbreviations = true) {
    super();
    this.allowAbbreviations = allowAbbreviations;
  }
  innerPattern() {
    return this.allowAbbreviations ? PATTERN14 : PATTERN_NO_ABBR;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let duration = parseDuration(match[2]);
    if (!duration) {
      return null;
    }
    switch (prefix) {
      case "last":
      case "past":
      case "-":
        duration = reverseDuration(duration);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, duration);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeAfterDateRefiner.js
function IsPositiveFollowingReference(result) {
  return result.text.match(/^[+-]/i) != null;
}
function IsNegativeFollowingReference(result) {
  return result.text.match(/^-/i) != null;
}
var ENMergeRelativeAfterDateRefiner = class extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(/^\s*$/i)) {
      return false;
    }
    return IsPositiveFollowingReference(nextResult) || IsNegativeFollowingReference(nextResult);
  }
  mergeResults(textBetween, currentResult, nextResult, context) {
    let timeUnits = parseDuration(nextResult.text);
    if (IsNegativeFollowingReference(nextResult)) {
      timeUnits = reverseDuration(timeUnits);
    }
    const components = ParsingComponents.createRelativeFromReference(ReferenceWithTimezone.fromDate(currentResult.start.date()), timeUnits);
    return new ParsingResult(currentResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENMergeRelativeFollowByDateRefiner.js
function hasImpliedEarlierReferenceDate(result) {
  return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
  return result.text.match(/\s+(after|since)$/i) != null;
}
var ENMergeRelativeFollowByDateRefiner = class extends MergingRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(this.patternBetween())) {
      return false;
    }
    if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
      return false;
    }
    return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
  }
  mergeResults(textBetween, currentResult, nextResult) {
    let duration = parseDuration(currentResult.text);
    if (hasImpliedEarlierReferenceDate(currentResult)) {
      duration = reverseDuration(duration);
    }
    const components = ParsingComponents.createRelativeFromReference(ReferenceWithTimezone.fromDate(nextResult.start.date()), duration);
    return new ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENExtractYearSuffixRefiner.js
var YEAR_SUFFIX_PATTERN = new RegExp(`^\\s*(${YEAR_PATTERN})`, "i");
var YEAR_GROUP6 = 1;
var ENExtractYearSuffixRefiner = class {
  refine(context, results) {
    results.forEach(function(result) {
      if (!result.start.isDateWithUnknownYear()) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = YEAR_SUFFIX_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      if (match[0].trim().length <= 3) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting year: '${match[0]}' into : ${result}`);
      });
      const year = parseYear(match[YEAR_GROUP6]);
      if (result.end != null) {
        result.end.assign("year", year);
      }
      result.start.assign("year", year);
      result.text += match[0];
    });
    return results;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/refiners/ENUnlikelyFormatFilter.js
var ENUnlikelyFormatFilter = class extends Filter {
  constructor() {
    super();
  }
  isValid(context, result) {
    const text = result.text.trim();
    if (text === context.text.trim()) {
      return true;
    }
    if (text.toLowerCase() === "may") {
      const textBefore = context.text.substring(0, result.index).trim();
      if (!textBefore.match(/\b(in)$/i)) {
        context.debug(() => {
          console.log(`Removing unlikely result: ${result}`);
        });
        return false;
      }
    }
    if (text.toLowerCase().endsWith("the second")) {
      const textAfter = context.text.substring(result.index + result.text.length).trim();
      if (textAfter.length > 0) {
        context.debug(() => {
          console.log(`Removing unlikely result: ${result}`);
        });
      }
      return false;
    }
    return true;
  }
};

// node_modules/chrono-node/dist/esm/locales/en/configuration.js
var ENDefaultConfiguration = class {
  createCasualConfiguration(littleEndian = false) {
    const option = this.createConfiguration(false, littleEndian);
    option.parsers.push(new ENCasualDateParser());
    option.parsers.push(new ENCasualTimeParser());
    option.parsers.push(new ENMonthNameParser());
    option.parsers.push(new ENRelativeDateFormatParser());
    option.parsers.push(new ENTimeUnitCasualRelativeFormatParser());
    option.refiners.push(new ENUnlikelyFormatFilter());
    return option;
  }
  createConfiguration(strictMode = true, littleEndian = false) {
    const options = includeCommonConfiguration({
      parsers: [
        new SlashDateFormatParser(littleEndian),
        new ENTimeUnitWithinFormatParser(strictMode),
        new ENMonthNameLittleEndianParser(),
        new ENMonthNameMiddleEndianParser(littleEndian),
        new ENWeekdayParser(),
        new ENSlashMonthFormatParser(),
        new ENTimeExpressionParser(strictMode),
        new ENTimeUnitAgoFormatParser(strictMode),
        new ENTimeUnitLaterFormatParser(strictMode)
      ],
      refiners: [new ENMergeDateTimeRefiner()]
    }, strictMode);
    options.parsers.unshift(new ENYearMonthDayParser(strictMode));
    options.refiners.unshift(new ENMergeRelativeFollowByDateRefiner());
    options.refiners.unshift(new ENMergeRelativeAfterDateRefiner());
    options.refiners.unshift(new OverlapRemovalRefiner());
    options.refiners.push(new ENMergeDateTimeRefiner());
    options.refiners.push(new ENExtractYearSuffixRefiner());
    options.refiners.push(new ENMergeDateRangeRefiner());
    return options;
  }
};

// node_modules/chrono-node/dist/esm/chrono.js
var Chrono = class _Chrono {
  parsers;
  refiners;
  defaultConfig = new ENDefaultConfiguration();
  constructor(configuration2) {
    configuration2 = configuration2 || this.defaultConfig.createCasualConfiguration();
    this.parsers = [...configuration2.parsers];
    this.refiners = [...configuration2.refiners];
  }
  clone() {
    return new _Chrono({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(text, referenceDate, option) {
    const results = this.parse(text, referenceDate, option);
    return results.length > 0 ? results[0].start.date() : null;
  }
  parse(text, referenceDate, option) {
    const context = new ParsingContext(text, referenceDate, option);
    let results = [];
    this.parsers.forEach((parser) => {
      const parsedResults = _Chrono.executeParser(context, parser);
      results = results.concat(parsedResults);
    });
    results.sort((a, b) => {
      return a.index - b.index;
    });
    this.refiners.forEach(function(refiner) {
      results = refiner.refine(context, results);
    });
    return results;
  }
  static executeParser(context, parser) {
    const results = [];
    const pattern = parser.pattern(context);
    const originalText = context.text;
    let remainingText = context.text;
    let match = pattern.exec(remainingText);
    while (match) {
      const index = match.index + originalText.length - remainingText.length;
      match.index = index;
      const result = parser.extract(context, match);
      if (!result) {
        remainingText = originalText.substring(match.index + 1);
        match = pattern.exec(remainingText);
        continue;
      }
      let parsedResult = null;
      if (result instanceof ParsingResult) {
        parsedResult = result;
      } else if (result instanceof ParsingComponents) {
        parsedResult = context.createParsingResult(match.index, match[0]);
        parsedResult.start = result;
      } else {
        parsedResult = context.createParsingResult(match.index, match[0], result);
      }
      const parsedIndex = parsedResult.index;
      const parsedText = parsedResult.text;
      context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
      results.push(parsedResult);
      remainingText = originalText.substring(parsedIndex + parsedText.length);
      match = pattern.exec(remainingText);
    }
    return results;
  }
};
var ParsingContext = class {
  text;
  option;
  reference;
  refDate;
  constructor(text, refDate, option) {
    this.text = text;
    this.option = option ?? {};
    this.reference = ReferenceWithTimezone.fromInput(refDate, this.option.timezones);
    this.refDate = this.reference.instant;
  }
  createParsingComponents(components) {
    if (components instanceof ParsingComponents) {
      return components;
    }
    return new ParsingComponents(this.reference, components);
  }
  createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
    const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
    const start = startComponents ? this.createParsingComponents(startComponents) : null;
    const end = endComponents ? this.createParsingComponents(endComponents) : null;
    return new ParsingResult(this.reference, index, text, start, end);
  }
  debug(block) {
    if (this.option.debug) {
      if (this.option.debug instanceof Function) {
        this.option.debug(block);
      } else {
        const handler = this.option.debug;
        handler.debug(block);
      }
    }
  }
};

// node_modules/chrono-node/dist/esm/locales/en/index.js
var configuration = new ENDefaultConfiguration();
var casual = new Chrono(configuration.createCasualConfiguration(false));
var strict = new Chrono(configuration.createConfiguration(true, false));
var GB = new Chrono(configuration.createCasualConfiguration(true));

// node_modules/chrono-node/dist/esm/index.js
var casual2 = casual;
function parseDate(text, ref, option) {
  return casual2.parseDate(text, ref, option);
}

// src/format.tsx
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_advancedFormat = __toESM(require_advancedFormat(), 1);
var import_relativeTime = __toESM(require_relativeTime(), 1);
var import_timezone3 = __toESM(require_timezone(), 1);
var import_utc = __toESM(require_utc(), 1);
var import_weekOfYear = __toESM(require_weekOfYear(), 1);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
import_dayjs.default.extend(import_advancedFormat.default);
import_dayjs.default.extend(import_weekOfYear.default);
import_dayjs.default.extend(import_utc.default);
import_dayjs.default.extend(import_timezone3.default);
import_dayjs.default.extend(import_relativeTime.default);
function handleConversion(input, timezone) {
  if (input.match(/^\d+$/))
    input = new Date(Number.parseInt(input, 10) * 1e3).toString();
  const parsedDate = parseDate(input);
  if (!parsedDate || parsedDate.toString() === "Invalid Date")
    return [];
  const date = (0, import_dayjs.default)(parsedDate).tz(timezone);
  const fromNow = date.fromNow();
  return [
    { label: "Unix (s)", value: date.unix() },
    { label: "Unix (ms)", value: date.valueOf() },
    { label: "Human Readable", value: date.format("MMMM Do, YYYY [at] hh:mm:ss A (zzz)") },
    { label: "DateTime", value: date.format("YYYY-MM-DD HH:mm:ss") },
    { label: "UTC", value: date.toString() },
    { label: "ISO 8601", value: date.toISOString() },
    { label: "Week of Year", value: date.format("wo dddd [of] YYYY") },
    { label: "In / Ago", value: String(fromNow).charAt(0).toUpperCase() + String(fromNow).slice(1) }
  ];
}
function Format() {
  const [input, setInput] = (0, import_react.useState)("now");
  const [timezone, setTimezone] = (0, import_react.useState)(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [items, setItems] = (0, import_react.useState)([]);
  const onTimezoneChange = async (value) => {
    setTimezone(value);
    setItems(handleConversion(input, value));
  };
  const onSearchTextChange = async (value) => {
    setInput(value);
    setItems(handleConversion(value, timezone));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List,
    {
      searchBarPlaceholder: "Date",
      filtering: false,
      searchText: input,
      onSearchTextChange,
      searchBarAccessory: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown, { tooltip: "Timezone", onChange: onTimezoneChange, defaultValue: timezone, children: Intl.supportedValuesOf("timeZone").map((zone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown.Item, { value: zone, title: zone }, zone)) }),
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api.List.Item,
        {
          title: String(item.value),
          accessories: [{ tag: { value: item.label, color: import_api.Color.SecondaryText } }],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.CopyToClipboard, { content: item.value }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Paste, { content: item.value })
          ] })
        },
        item.value
      ))
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2FkdmFuY2VkRm9ybWF0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vdGltZXpvbmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi93ZWVrT2ZZZWFyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL3NyYy9mb3JtYXQudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdHlwZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXRlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3RpbWV6b25lLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vZHVyYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9yZXN1bHRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvcGF0dGVybi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3llYXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vYWJzdHJhY3RSZWZpbmVycy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbmZpZ3VyYXRpb25zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3dlZWtkYXlzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QtZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2hyb25vLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0LWRhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC1kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5wcm90b3R5cGUsbj1yLmZvcm1hdDtyLmZvcm1hdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmJpbmQodGhpcykoZSk7dmFyIHM9dGhpcy4kdXRpbHMoKSxhPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLChmdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZVwiUVwiOnJldHVybiBNYXRoLmNlaWwoKHQuJE0rMSkvMyk7Y2FzZVwiRG9cIjpyZXR1cm4gci5vcmRpbmFsKHQuJEQpO2Nhc2VcImdnZ2dcIjpyZXR1cm4gdC53ZWVrWWVhcigpO2Nhc2VcIkdHR0dcIjpyZXR1cm4gdC5pc29XZWVrWWVhcigpO2Nhc2VcIndvXCI6cmV0dXJuIHIub3JkaW5hbCh0LndlZWsoKSxcIldcIik7Y2FzZVwid1wiOmNhc2VcInd3XCI6cmV0dXJuIHMucyh0LndlZWsoKSxcIndcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJXXCI6Y2FzZVwiV1dcIjpyZXR1cm4gcy5zKHQuaXNvV2VlaygpLFwiV1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcImtcIjpjYXNlXCJra1wiOnJldHVybiBzLnMoU3RyaW5nKDA9PT10LiRIPzI0OnQuJEgpLFwia1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIlhcIjpyZXR1cm4gTWF0aC5mbG9vcih0LiRkLmdldFRpbWUoKS8xZTMpO2Nhc2VcInhcIjpyZXR1cm4gdC4kZC5nZXRUaW1lKCk7Y2FzZVwielwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZSgpK1wiXVwiO2Nhc2VcInp6elwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZShcImxvbmdcIikrXCJdXCI7ZGVmYXVsdDpyZXR1cm4gZX19KSk7cmV0dXJuIG4uYmluZCh0aGlzKShhKX19fSkpOyIsICIhZnVuY3Rpb24ocixlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToocj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnJ8fHNlbGYpLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihyLGUsdCl7cj1yfHx7fTt2YXIgbj1lLnByb3RvdHlwZSxvPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTtmdW5jdGlvbiBpKHIsZSx0LG8pe3JldHVybiBuLmZyb21Ub0Jhc2UocixlLHQsbyl9dC5lbi5yZWxhdGl2ZVRpbWU9byxuLmZyb21Ub0Jhc2U9ZnVuY3Rpb24oZSxuLGksZCx1KXtmb3IodmFyIGYsYSxzLGw9aS4kbG9jYWxlKCkucmVsYXRpdmVUaW1lfHxvLGg9ci50aHJlc2hvbGRzfHxbe2w6XCJzXCIscjo0NCxkOlwic2Vjb25kXCJ9LHtsOlwibVwiLHI6ODl9LHtsOlwibW1cIixyOjQ0LGQ6XCJtaW51dGVcIn0se2w6XCJoXCIscjo4OX0se2w6XCJoaFwiLHI6MjEsZDpcImhvdXJcIn0se2w6XCJkXCIscjozNX0se2w6XCJkZFwiLHI6MjUsZDpcImRheVwifSx7bDpcIk1cIixyOjQ1fSx7bDpcIk1NXCIscjoxMCxkOlwibW9udGhcIn0se2w6XCJ5XCIscjoxN30se2w6XCJ5eVwiLGQ6XCJ5ZWFyXCJ9XSxtPWgubGVuZ3RoLGM9MDtjPG07Yys9MSl7dmFyIHk9aFtjXTt5LmQmJihmPWQ/dChlKS5kaWZmKGkseS5kLCEwKTppLmRpZmYoZSx5LmQsITApKTt2YXIgcD0oci5yb3VuZGluZ3x8TWF0aC5yb3VuZCkoTWF0aC5hYnMoZikpO2lmKHM9Zj4wLHA8PXkucnx8IXkucil7cDw9MSYmYz4wJiYoeT1oW2MtMV0pO3ZhciB2PWxbeS5sXTt1JiYocD11KFwiXCIrcCkpLGE9XCJzdHJpbmdcIj09dHlwZW9mIHY/di5yZXBsYWNlKFwiJWRcIixwKTp2KHAsbix5Lmwscyk7YnJlYWt9fWlmKG4pcmV0dXJuIGE7dmFyIE09cz9sLmZ1dHVyZTpsLnBhc3Q7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgTT9NKGEpOk0ucmVwbGFjZShcIiVzXCIsYSl9LG4udG89ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzKX07dmFyIGQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIuJHU/dC51dGMoKTp0KCl9O24udG9Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMudG8oZCh0aGlzKSxyKX0sbi5mcm9tTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmZyb20oZCh0aGlzKSxyKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsaD1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIix2PStlO3JldHVybihvLnV0YyhoKS52YWx1ZU9mKCktKHYtPXYlMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbixpPXRoaXMudXRjT2Zmc2V0KCksYT10aGlzLnRvRGF0ZSgpLHU9YS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIse3RpbWVab25lOnR9KSxmPU1hdGgucm91bmQoKGEtbmV3IERhdGUodSkpLzFlMy82MCkscz0xNSotTWF0aC5yb3VuZChhLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLWY7aWYoIU51bWJlcihzKSluPXRoaXMudXRjT2Zmc2V0KDAsZSk7ZWxzZSBpZihuPW8odSx7bG9jYWxlOnRoaXMuJEx9KS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KHMsITApLGUpe3ZhciBtPW4udXRjT2Zmc2V0KCk7bj1uLmFkZChpLW0sXCJtaW51dGVcIil9cmV0dXJuIG4uJHguJHRpbWV6b25lPXQsbn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikse2xvY2FsZTp0aGlzLiRMfSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwgIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciByPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksci5jYWxsKHRoaXMsdCl9O3ZhciBvPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugby5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnM7aWYoMD09PXUpcmV0dXJuIHRoaXMudXRjKGYpO3ZhciByPXRoaXMuY2xvbmUoKTtpZihmKXJldHVybiByLiRvZmZzZXQ9dSxyLiR1PSExLHI7dmFyIG89dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTtyZXR1cm4ocj10aGlzLmxvY2FsKCkuYWRkKHUrbyx0KSkuJG9mZnNldD11LHIuJHguJGxvY2FsT2Zmc2V0PW8scn07dmFyIGg9dS5mb3JtYXQ7dS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGk9dHx8KHRoaXMuJHU/XCJZWVlZLU1NLUREVEhIOm1tOnNzW1pdXCI6XCJcIik7cmV0dXJuIGguY2FsbCh0aGlzLGkpfSx1LnZhbHVlT2Y9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiR1dGlscygpLnUodGhpcy4kb2Zmc2V0KT8wOnRoaXMuJG9mZnNldCsodGhpcy4keC4kbG9jYWxPZmZzZXR8fHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIHRoaXMuJGQudmFsdWVPZigpLTZlNCp0fSx1LmlzVVRDPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLiR1fSx1LnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKX0sdS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvVVRDU3RyaW5nKCl9O3ZhciBsPXUudG9EYXRlO3UudG9EYXRlPWZ1bmN0aW9uKHQpe3JldHVyblwic1wiPT09dCYmdGhpcy4kb2Zmc2V0P24odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSkudG9EYXRlKCk6bC5jYWxsKHRoaXMpfTt2YXIgYz11LmRpZmY7dS5kaWZmPWZ1bmN0aW9uKHQsaSxlKXtpZih0JiZ0aGlzLiR1PT09dC4kdSlyZXR1cm4gYy5jYWxsKHRoaXMsdCxpLGUpO3ZhciBzPXRoaXMubG9jYWwoKSxmPW4odCkubG9jYWwoKTtyZXR1cm4gYy5jYWxsKHMsZixpLGUpfX19KSk7IiwgIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfcGx1Z2luX3dlZWtPZlllYXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwid2Vla1wiLHQ9XCJ5ZWFyXCI7cmV0dXJuIGZ1bmN0aW9uKGksbixyKXt2YXIgZj1uLnByb3RvdHlwZTtmLndlZWs9ZnVuY3Rpb24oaSl7aWYodm9pZCAwPT09aSYmKGk9bnVsbCksbnVsbCE9PWkpcmV0dXJuIHRoaXMuYWRkKDcqKGktdGhpcy53ZWVrKCkpLFwiZGF5XCIpO3ZhciBuPXRoaXMuJGxvY2FsZSgpLnllYXJTdGFydHx8MTtpZigxMT09PXRoaXMubW9udGgoKSYmdGhpcy5kYXRlKCk+MjUpe3ZhciBmPXIodGhpcykuc3RhcnRPZih0KS5hZGQoMSx0KS5kYXRlKG4pLHM9cih0aGlzKS5lbmRPZihlKTtpZihmLmlzQmVmb3JlKHMpKXJldHVybiAxfXZhciBhPXIodGhpcykuc3RhcnRPZih0KS5kYXRlKG4pLnN0YXJ0T2YoZSkuc3VidHJhY3QoMSxcIm1pbGxpc2Vjb25kXCIpLG89dGhpcy5kaWZmKGEsZSwhMCk7cmV0dXJuIG88MD9yKHRoaXMpLnN0YXJ0T2YoXCJ3ZWVrXCIpLndlZWsoKTpNYXRoLmNlaWwobyl9LGYud2Vla3M9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPW51bGwpLHRoaXMud2VlayhlKX19fSkpOyIsICJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblBhbmVsLCBDb2xvciwgTGlzdCB9IGZyb20gJ0ByYXljYXN0L2FwaSdcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJ2Nocm9uby1ub2RlJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IGFkdmFuY2VkRm9ybWF0UGx1Z2luIGZyb20gJ2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcydcbmltcG9ydCByZWxhdGl2ZVRpbWVQbHVnaW4gZnJvbSAnZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcydcbmltcG9ydCB0aW1lem9uZVBsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUuanMnXG5pbXBvcnQgdXRjUGx1Z2luIGZyb20gJ2RheWpzL3BsdWdpbi91dGMuanMnXG5pbXBvcnQgd2Vla09mWWVhclBsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vd2Vla09mWWVhci5qcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmRheWpzLmV4dGVuZChhZHZhbmNlZEZvcm1hdFBsdWdpbilcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyUGx1Z2luKVxuZGF5anMuZXh0ZW5kKHV0Y1BsdWdpbilcbmRheWpzLmV4dGVuZCh0aW1lem9uZVBsdWdpbilcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWVQbHVnaW4pXG5cbmZ1bmN0aW9uIGhhbmRsZUNvbnZlcnNpb24oaW5wdXQ6IHN0cmluZywgdGltZXpvbmU6IHN0cmluZykge1xuICBpZiAoaW5wdXQubWF0Y2goL15cXGQrJC8pKVxuICAgIGlucHV0ID0gbmV3IERhdGUoTnVtYmVyLnBhcnNlSW50KGlucHV0LCAxMCkgKiAxMDAwKS50b1N0cmluZygpXG5cbiAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlRGF0ZShpbnB1dClcbiAgaWYgKCFwYXJzZWREYXRlIHx8IHBhcnNlZERhdGUudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpXG4gICAgcmV0dXJuIFtdXG5cbiAgY29uc3QgZGF0ZSA9IGRheWpzKHBhcnNlZERhdGUpLnR6KHRpbWV6b25lKVxuICBjb25zdCBmcm9tTm93ID0gZGF0ZS5mcm9tTm93KClcblxuICByZXR1cm4gW1xuICAgIHsgbGFiZWw6ICdVbml4IChzKScsIHZhbHVlOiBkYXRlLnVuaXgoKSB9LFxuICAgIHsgbGFiZWw6ICdVbml4IChtcyknLCB2YWx1ZTogZGF0ZS52YWx1ZU9mKCkgfSxcbiAgICB7IGxhYmVsOiAnSHVtYW4gUmVhZGFibGUnLCB2YWx1ZTogZGF0ZS5mb3JtYXQoJ01NTU0gRG8sIFlZWVkgW2F0XSBoaDptbTpzcyBBICh6enopJykgfSxcbiAgICB7IGxhYmVsOiAnRGF0ZVRpbWUnLCB2YWx1ZTogZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSB9LFxuICAgIHsgbGFiZWw6ICdVVEMnLCB2YWx1ZTogZGF0ZS50b1N0cmluZygpIH0sXG4gICAgeyBsYWJlbDogJ0lTTyA4NjAxJywgdmFsdWU6IGRhdGUudG9JU09TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6ICdXZWVrIG9mIFllYXInLCB2YWx1ZTogZGF0ZS5mb3JtYXQoJ3dvIGRkZGQgW29mXSBZWVlZJykgfSxcbiAgICB7IGxhYmVsOiAnSW4gLyBBZ28nLCB2YWx1ZTogU3RyaW5nKGZyb21Ob3cpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgU3RyaW5nKGZyb21Ob3cpLnNsaWNlKDEpIH0sXG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybWF0KCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCdub3cnKVxuICBjb25zdCBbdGltZXpvbmUsIHNldFRpbWV6b25lXSA9IHVzZVN0YXRlKEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSlcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTx7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfVtdPihbXSlcblxuICBjb25zdCBvblRpbWV6b25lQ2hhbmdlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUaW1lem9uZSh2YWx1ZSlcbiAgICBzZXRJdGVtcyhoYW5kbGVDb252ZXJzaW9uKGlucHV0LCB2YWx1ZSkpXG4gIH1cblxuICBjb25zdCBvblNlYXJjaFRleHRDaGFuZ2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldElucHV0KHZhbHVlKVxuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24odmFsdWUsIHRpbWV6b25lKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIHNlYXJjaEJhclBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICBmaWx0ZXJpbmc9e2ZhbHNlfVxuICAgICAgc2VhcmNoVGV4dD17aW5wdXR9XG4gICAgICBvblNlYXJjaFRleHRDaGFuZ2U9e29uU2VhcmNoVGV4dENoYW5nZX1cbiAgICAgIHNlYXJjaEJhckFjY2Vzc29yeT17KFxuICAgICAgICA8TGlzdC5Ecm9wZG93biB0b29sdGlwPVwiVGltZXpvbmVcIiBvbkNoYW5nZT17b25UaW1lem9uZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt0aW1lem9uZX0+XG4gICAgICAgICAge0ludGwuc3VwcG9ydGVkVmFsdWVzT2YoJ3RpbWVab25lJykubWFwKHpvbmUgPT4gKFxuICAgICAgICAgICAgPExpc3QuRHJvcGRvd24uSXRlbSBrZXk9e3pvbmV9IHZhbHVlPXt6b25lfSB0aXRsZT17em9uZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0LkRyb3Bkb3duPlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgIHRpdGxlPXtTdHJpbmcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogeyB2YWx1ZTogaXRlbS5sYWJlbCwgY29sb3I6IENvbG9yLlNlY29uZGFyeVRleHQgfSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXsoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb24uUGFzdGUgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKVxufVxuIiwgImltcG9ydCB7IERlYnVnQ29uc3VtZSwgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2luZ09wdGlvbiB7XG4gICAgLyoqXG4gICAgICogVG8gcGFyc2Ugb25seSBmb3J3YXJkIGRhdGVzICh0aGUgcmVzdWx0cyBzaG91bGQgYmUgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBkYXRlKS5cbiAgICAgKiBUaGlzIGVmZmVjdHMgZGF0ZS90aW1lIGltcGxpY2F0aW9uIChlLmcuIHdlZWtkYXkgb3IgdGltZSBtZW50aW9uaW5nKVxuICAgICAqL1xuICAgIGZvcndhcmREYXRlPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgdGltZXpvbmUga2V5d29yZHMgZm9yIHRoZSBwYXJzZXJzIHRvIHJlY29nbml6ZS5cbiAgICAgKiBBbnkgdmFsdWUgcHJvdmlkZWQgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCBoYW5kbGluZyBvZiB0aGF0IHZhbHVlLlxuICAgICAqL1xuICAgIHRpbWV6b25lcz86IFRpbWV6b25lQWJick1hcDtcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGRlYnVnIGV2ZW50IGhhbmRsZXIuXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgZGVidWc/OiBEZWJ1Z0hhbmRsZXIgfCBEZWJ1Z0NvbnN1bWU7XG59XG5cbi8qKlxuICogU29tZSB0aW1lem9uZSBhYmJyZXZpYXRpb25zIGFyZSBhbWJpZ3VvdXMgaW4gdGhhdCB0aGV5IHJlZmVyIHRvIGRpZmZlcmVudCBvZmZzZXRzXG4gKiBkZXBlbmRpbmcgb24gdGhlIHRpbWUgb2YgeWVhciBcdTIwMTQgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIChEU1QpLCBvciBub24tRFNULiBUaGlzIGludGVyZmFjZVxuICogYWxsb3dzIGRlZmluaW5nIHN1Y2ggdGltZXpvbmVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQW1iaWd1b3VzVGltZXpvbmVNYXAge1xuICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiBudW1iZXI7XG4gICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0YXJ0IGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBlbmQgZGF0ZSBvZiBEU1QgZm9yIHRoZSBnaXZlbiB5ZWFyLlxuICAgICAqIHRpbWV6b25lLnRzIGNvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBjb21tb24gc3VjaCBydWxlcy5cbiAgICAgKi9cbiAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IERhdGU7XG59XG5cbi8qKlxuICogQSBtYXAgZGVzY3JpYmluZyBob3cgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBzaG91bGQgbWFwIHRvIHRpbWUgb2Zmc2V0cy5cbiAqIFN1cHBvcnRzIGJvdGggdW5hbWJpZ291cyBtYXBwaW5ncyBhYmJyZXZpYXRpb24gPT4gb2Zmc2V0LFxuICogYW5kIGFtYmlndW91cyBtYXBwaW5ncywgd2hlcmUgdGhlIG9mZnNldCB3aWxsIGRlcGVuZCBvbiB3aGV0aGVyIHRoZVxuICogdGltZSBpbiBxdWVzdGlvbiBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyB0aW1lIG9yIG5vdC5cbiAqL1xuZXhwb3J0IHR5cGUgVGltZXpvbmVBYmJyTWFwID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfCBBbWJpZ3VvdXNUaW1lem9uZU1hcCB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdSZWZlcmVuY2Uge1xuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSBkYXRlLiBUaGUgaW5zdGFudCAoSmF2YVNjcmlwdCBEYXRlIG9iamVjdCkgd2hlbiB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIFRoaXMgZWZmZWN0IGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZykuXG4gICAgICogKGRlZmF1bHQgPSBub3cpXG4gICAgICovXG4gICAgaW5zdGFudD86IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdGltZXpvbmUuIFRoZSB0aW1lem9uZSB3aGVyZSB0aGUgaW5wdXQgaXMgd3JpdHRlbiBvciBtZW50aW9uLlxuICAgICAqIERhdGUvdGltZSBpbXBsaWNhdGlvbiB3aWxsIGFjY291bnQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBpbnB1dCB0aW1lem9uZSBhbmQgdGhlIGN1cnJlbnQgc3lzdGVtIHRpbWV6b25lLlxuICAgICAqIChkZWZhdWx0ID0gY3VycmVudCB0aW1lem9uZSlcbiAgICAgKi9cbiAgICB0aW1lem9uZT86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuLyoqXG4gKiBQYXJzZWQgcmVzdWx0IG9yIGZpbmFsIG91dHB1dC5cbiAqIEVhY2ggcmVzdWx0IG9iamVjdCByZXByZXNlbnRzIGEgZGF0ZS90aW1lIChvciBkYXRlL3RpbWUtcmFuZ2UpIG1lbnRpb25pbmcgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcbiAgICByZWFkb25seSBpbmRleDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHN0YXJ0OiBQYXJzZWRDb21wb25lbnRzO1xuICAgIHJlYWRvbmx5IGVuZD86IFBhcnNlZENvbXBvbmVudHM7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGByZXN1bHQuc3RhcnRgLlxuICAgICAqL1xuICAgIGRhdGUoKTogRGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4gZGVidWdnaW5nIHRhZ3MgY29tYmluZWQgb2YgdGhlIGByZXN1bHQuc3RhcnRgIGFuZCBgcmVzdWx0LmVuZGAuXG4gICAgICovXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgcGFyc2VkIGRhdGUvdGltZSBjb21wb25lbnRzIChlLmcuIGRheSwgaG91ciwgbWludXRlLCAuLi4sIGV0YykuXG4gKlxuICogRWFjaCBwYXJzZWQgY29tcG9uZW50IGhhcyB0aHJlZSBkaWZmZXJlbnQgbGV2ZWxzIG9mIGNlcnRhaW50eS5cbiAqIC0gKkNlcnRhaW4qIChvciAqS25vd24qKTogVGhlIGNvbXBvbmVudCBpcyBkaXJlY3RseSBtZW50aW9uZWQgYW5kIHBhcnNlZC5cbiAqIC0gKkltcGxpZWQqOiBUaGUgY29tcG9uZW50IGlzIG5vdCBkaXJlY3RseSBtZW50aW9uZWQsIGJ1dCBpbXBsaWVkIGJ5IG90aGVyIHBhcnNlZCBpbmZvcm1hdGlvbi5cbiAqIC0gKlVua25vd24qOiBDb21wbGV0ZWx5IG5vIG1lbnRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGNlcnRhaW5seSBpZiB0aGUgY29tcG9uZW50IGlzICpDZXJ0YWluKiAob3IgKktub3duKilcbiAgICAgKi9cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjb21wb25lbnQgdmFsdWUgZm9yIGVpdGhlciAqQ2VydGFpbiogb3IgKkltcGxpZWQqIHZhbHVlLlxuICAgICAqL1xuICAgIGdldChjb21wb25lbnQ6IENvbXBvbmVudCk6IG51bWJlciB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGEgamF2YXNjcmlwdCBkYXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIG9mIHRoZSBwYXJzZWQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudCA9XG4gICAgfCBcInllYXJcIlxuICAgIHwgXCJtb250aFwiXG4gICAgfCBcImRheVwiXG4gICAgfCBcIndlZWtkYXlcIlxuICAgIHwgXCJob3VyXCJcbiAgICB8IFwibWludXRlXCJcbiAgICB8IFwic2Vjb25kXCJcbiAgICB8IFwibWlsbGlzZWNvbmRcIlxuICAgIHwgXCJtZXJpZGllbVwiXG4gICAgfCBcInRpbWV6b25lT2Zmc2V0XCI7XG5cbmV4cG9ydCB0eXBlIFRpbWV1bml0ID0gXCJ5ZWFyXCIgfCBcIm1vbnRoXCIgfCBcIndlZWtcIiB8IFwiZGF5XCIgfCBcImhvdXJcIiB8IFwibWludXRlXCIgfCBcInNlY29uZFwiIHwgXCJtaWxsaXNlY29uZFwiIHwgXCJxdWFydGVyXCI7XG5cbmV4cG9ydCBlbnVtIE1lcmlkaWVtIHtcbiAgICBBTSA9IDAsXG4gICAgUE0gPSAxLFxufVxuXG5leHBvcnQgZW51bSBXZWVrZGF5IHtcbiAgICBTVU5EQVkgPSAwLFxuICAgIE1PTkRBWSA9IDEsXG4gICAgVFVFU0RBWSA9IDIsXG4gICAgV0VETkVTREFZID0gMyxcbiAgICBUSFVSU0RBWSA9IDQsXG4gICAgRlJJREFZID0gNSxcbiAgICBTQVRVUkRBWSA9IDYsXG59XG5cbmV4cG9ydCBlbnVtIE1vbnRoIHtcbiAgICBKQU5VQVJZID0gMSxcbiAgICBGRUJSVUFSWSA9IDIsXG4gICAgTUFSQ0ggPSAzLFxuICAgIEFQUklMID0gNCxcbiAgICBNQVkgPSA1LFxuICAgIEpVTkUgPSA2LFxuICAgIEpVTFkgPSA3LFxuICAgIEFVR1VTVCA9IDgsXG4gICAgU0VQVEVNQkVSID0gOSxcbiAgICBPQ1RPQkVSID0gMTAsXG4gICAgTk9WRU1CRVIgPSAxMSxcbiAgICBERUNFTUJFUiA9IDEyLFxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbi8qKlxuICogQXNzaWduIChmb3JjZSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSBkYXkgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImRheVwiLCB0YXJnZXQuZ2V0RGF0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgdGFyZ2V0LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwieWVhclwiLCB0YXJnZXQuZ2V0RnVsbFllYXIoKSk7XG59XG5cbi8qKlxuICogQXNzaWduIChmb3JjZSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSB0aW1lIGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIHRhcmdldC5nZXRIb3VycygpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRhcmdldC5nZXRNaW51dGVzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGFyZ2V0LmdldFNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRhcmdldC5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIHRhcmdldC5nZXRIb3VycygpIDwgMTIgPyBNZXJpZGllbS5BTSA6IE1lcmlkaWVtLlBNKTtcbn1cblxuLyoqXG4gKiBJbXBseSAod2Vha2x5IHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIGRheSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXQuZ2V0RGF0ZSgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtb250aFwiLCB0YXJnZXQuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInllYXJcIiwgdGFyZ2V0LmdldEZ1bGxZZWFyKCkpO1xufVxuXG4vKipcbiAqIEltcGx5ICh3ZWFrbHkgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgdGltZSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGFyZ2V0LmdldEhvdXJzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0YXJnZXQuZ2V0TWludXRlcygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGFyZ2V0LmdldFNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0LmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCB0YXJnZXQuZ2V0SG91cnMoKSA8IDEyID8gTWVyaWRpZW0uQU0gOiBNZXJpZGllbS5QTSk7XG59XG4iLCAiaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwLCBXZWVrZGF5LCBNb250aCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBUSU1FWk9ORV9BQkJSX01BUDogVGltZXpvbmVBYmJyTWFwID0ge1xuICAgIEFDRFQ6IDYzMCxcbiAgICBBQ1NUOiA1NzAsXG4gICAgQURUOiAtMTgwLFxuICAgIEFFRFQ6IDY2MCxcbiAgICBBRVNUOiA2MDAsXG4gICAgQUZUOiAyNzAsXG4gICAgQUtEVDogLTQ4MCxcbiAgICBBS1NUOiAtNTQwLFxuICAgIEFMTVQ6IDM2MCxcbiAgICBBTVNUOiAtMTgwLFxuICAgIEFNVDogLTI0MCxcbiAgICBBTkFTVDogNzIwLFxuICAgIEFOQVQ6IDcyMCxcbiAgICBBUVRUOiAzMDAsXG4gICAgQVJUOiAtMTgwLFxuICAgIEFTVDogLTI0MCxcbiAgICBBV0RUOiA1NDAsXG4gICAgQVdTVDogNDgwLFxuICAgIEFaT1NUOiAwLFxuICAgIEFaT1Q6IC02MCxcbiAgICBBWlNUOiAzMDAsXG4gICAgQVpUOiAyNDAsXG4gICAgQk5UOiA0ODAsXG4gICAgQk9UOiAtMjQwLFxuICAgIEJSU1Q6IC0xMjAsXG4gICAgQlJUOiAtMTgwLFxuICAgIEJTVDogNjAsXG4gICAgQlRUOiAzNjAsXG4gICAgQ0FTVDogNDgwLFxuICAgIENBVDogMTIwLFxuICAgIENDVDogMzkwLFxuICAgIENEVDogLTMwMCxcbiAgICBDRVNUOiAxMjAsXG4gICAgLy8gTm90ZTogTWFueSBzb3VyY2VzIGRlZmluZSBDRVQgYXMgYSBjb25zdGFudCBVVEMrMS4gSW4gY29tbW9uIHVzYWdlLCBob3dldmVyLFxuICAgIC8vIENFVCB1c3VhbGx5IHJlZmVycyB0byB0aGUgdGltZSBvYnNlcnZlZCBpbiBtb3N0IG9mIEV1cm9wZSwgYmUgaXQgc3RhbmRhcmQgdGltZSBvciBkYXlsaWdodCBzYXZpbmcgdGltZS5cbiAgICBDRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IDIgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk9DVE9CRVIsIFdlZWtkYXkuU1VOREFZLCAzKSxcbiAgICB9LFxuICAgIENIQURUOiA4MjUsXG4gICAgQ0hBU1Q6IDc2NSxcbiAgICBDS1Q6IC02MDAsXG4gICAgQ0xTVDogLTE4MCxcbiAgICBDTFQ6IC0yNDAsXG4gICAgQ09UOiAtMzAwLFxuICAgIENTVDogLTM2MCxcbiAgICBDVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTUgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC02ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBDVlQ6IC02MCxcbiAgICBDWFQ6IDQyMCxcbiAgICBDaFNUOiA2MDAsXG4gICAgREFWVDogNDIwLFxuICAgIEVBU1NUOiAtMzAwLFxuICAgIEVBU1Q6IC0zNjAsXG4gICAgRUFUOiAxODAsXG4gICAgRUNUOiAtMzAwLFxuICAgIEVEVDogLTI0MCxcbiAgICBFRVNUOiAxODAsXG4gICAgRUVUOiAxMjAsXG4gICAgRUdTVDogMCxcbiAgICBFR1Q6IC02MCxcbiAgICBFU1Q6IC0zMDAsXG4gICAgRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC00ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNSAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgRkpTVDogNzgwLFxuICAgIEZKVDogNzIwLFxuICAgIEZLU1Q6IC0xODAsXG4gICAgRktUOiAtMjQwLFxuICAgIEZOVDogLTEyMCxcbiAgICBHQUxUOiAtMzYwLFxuICAgIEdBTVQ6IC01NDAsXG4gICAgR0VUOiAyNDAsXG4gICAgR0ZUOiAtMTgwLFxuICAgIEdJTFQ6IDcyMCxcbiAgICBHTVQ6IDAsXG4gICAgR1NUOiAyNDAsXG4gICAgR1lUOiAtMjQwLFxuICAgIEhBQTogLTE4MCxcbiAgICBIQUM6IC0zMDAsXG4gICAgSEFEVDogLTU0MCxcbiAgICBIQUU6IC0yNDAsXG4gICAgSEFQOiAtNDIwLFxuICAgIEhBUjogLTM2MCxcbiAgICBIQVNUOiAtNjAwLFxuICAgIEhBVDogLTkwLFxuICAgIEhBWTogLTQ4MCxcbiAgICBIS1Q6IDQ4MCxcbiAgICBITFY6IC0yMTAsXG4gICAgSE5BOiAtMjQwLFxuICAgIEhOQzogLTM2MCxcbiAgICBITkU6IC0zMDAsXG4gICAgSE5QOiAtNDgwLFxuICAgIEhOUjogLTQyMCxcbiAgICBITlQ6IC0xNTAsXG4gICAgSE5ZOiAtNTQwLFxuICAgIEhPVlQ6IDQyMCxcbiAgICBJQ1Q6IDQyMCxcbiAgICBJRFQ6IDE4MCxcbiAgICBJT1Q6IDM2MCxcbiAgICBJUkRUOiAyNzAsXG4gICAgSVJLU1Q6IDU0MCxcbiAgICBJUktUOiA1NDAsXG4gICAgSVJTVDogMjEwLFxuICAgIElTVDogMzMwLFxuICAgIEpTVDogNTQwLFxuICAgIEtHVDogMzYwLFxuICAgIEtSQVNUOiA0ODAsXG4gICAgS1JBVDogNDgwLFxuICAgIEtTVDogNTQwLFxuICAgIEtVWVQ6IDI0MCxcbiAgICBMSERUOiA2NjAsXG4gICAgTEhTVDogNjMwLFxuICAgIExJTlQ6IDg0MCxcbiAgICBNQUdTVDogNzIwLFxuICAgIE1BR1Q6IDcyMCxcbiAgICBNQVJUOiAtNTEwLFxuICAgIE1BV1Q6IDMwMCxcbiAgICBNRFQ6IC0zNjAsXG4gICAgTUVTWjogMTIwLFxuICAgIE1FWjogNjAsXG4gICAgTUhUOiA3MjAsXG4gICAgTU1UOiAzOTAsXG4gICAgTVNEOiAyNDAsXG4gICAgTVNLOiAxODAsXG4gICAgTVNUOiAtNDIwLFxuICAgIE1UOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTcgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIE1VVDogMjQwLFxuICAgIE1WVDogMzAwLFxuICAgIE1ZVDogNDgwLFxuICAgIE5DVDogNjYwLFxuICAgIE5EVDogLTkwLFxuICAgIE5GVDogNjkwLFxuICAgIE5PVlNUOiA0MjAsXG4gICAgTk9WVDogMzYwLFxuICAgIE5QVDogMzQ1LFxuICAgIE5TVDogLTE1MCxcbiAgICBOVVQ6IC02NjAsXG4gICAgTlpEVDogNzgwLFxuICAgIE5aU1Q6IDcyMCxcbiAgICBPTVNTVDogNDIwLFxuICAgIE9NU1Q6IDQyMCxcbiAgICBQRFQ6IC00MjAsXG4gICAgUEVUOiAtMzAwLFxuICAgIFBFVFNUOiA3MjAsXG4gICAgUEVUVDogNzIwLFxuICAgIFBHVDogNjAwLFxuICAgIFBIT1Q6IDc4MCxcbiAgICBQSFQ6IDQ4MCxcbiAgICBQS1Q6IDMwMCxcbiAgICBQTURUOiAtMTIwLFxuICAgIFBNU1Q6IC0xODAsXG4gICAgUE9OVDogNjYwLFxuICAgIFBTVDogLTQ4MCxcbiAgICBQVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTcgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC04ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBQV1Q6IDU0MCxcbiAgICBQWVNUOiAtMTgwLFxuICAgIFBZVDogLTI0MCxcbiAgICBSRVQ6IDI0MCxcbiAgICBTQU1UOiAyNDAsXG4gICAgU0FTVDogMTIwLFxuICAgIFNCVDogNjYwLFxuICAgIFNDVDogMjQwLFxuICAgIFNHVDogNDgwLFxuICAgIFNSVDogLTE4MCxcbiAgICBTU1Q6IC02NjAsXG4gICAgVEFIVDogLTYwMCxcbiAgICBURlQ6IDMwMCxcbiAgICBUSlQ6IDMwMCxcbiAgICBUS1Q6IDc4MCxcbiAgICBUTFQ6IDU0MCxcbiAgICBUTVQ6IDMwMCxcbiAgICBUVlQ6IDcyMCxcbiAgICBVTEFUOiA0ODAsXG4gICAgVVRDOiAwLFxuICAgIFVZU1Q6IC0xMjAsXG4gICAgVVlUOiAtMTgwLFxuICAgIFVaVDogMzAwLFxuICAgIFZFVDogLTIxMCxcbiAgICBWTEFTVDogNjYwLFxuICAgIFZMQVQ6IDY2MCxcbiAgICBWVVQ6IDY2MCxcbiAgICBXQVNUOiAxMjAsXG4gICAgV0FUOiA2MCxcbiAgICBXRVNUOiA2MCxcbiAgICBXRVNaOiA2MCxcbiAgICBXRVQ6IDAsXG4gICAgV0VaOiAwLFxuICAgIFdGVDogNzIwLFxuICAgIFdHU1Q6IC0xMjAsXG4gICAgV0dUOiAtMTgwLFxuICAgIFdJQjogNDIwLFxuICAgIFdJVDogNTQwLFxuICAgIFdJVEE6IDQ4MCxcbiAgICBXU1Q6IDc4MCxcbiAgICBXVDogMCxcbiAgICBZQUtTVDogNjAwLFxuICAgIFlBS1Q6IDYwMCxcbiAgICBZQVBUOiA2MDAsXG4gICAgWUVLU1Q6IDM2MCxcbiAgICBZRUtUOiAzNjAsXG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbnRoIG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIG4gVGhlIG50aCBvY2N1cmVuY2Ugb2YgdGhlIGdpdmVuIHdlZWtkYXkgb24gdGhlIG1vbnRoIHRvIHJldHVyblxuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW5cbiAqICAgICAgICAgbW9udGggYW5kIHllYXIsIGF0IHRoZSBnaXZlbiBob3VyIG9mIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIG46IDEgfCAyIHwgMyB8IDQsIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgbGV0IGRheU9mTW9udGggPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgZGF5T2ZNb250aCsrO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoKTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF5KCkgPT09IHdlZWtkYXkpIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCwgaG91cik7XG59XG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlbiBtb250aCBhbmQgeWVhci5cbiAqXG4gKiBAcGFyYW0geWVhciBUaGUgeWVhciBmb3Igd2hpY2ggdG8gZmluZCB0aGUgZGF0ZVxuICogQHBhcmFtIG1vbnRoIFRoZSBtb250aCBpbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSB3ZWVrZGF5IFRoZSB3ZWVrZGF5IG9uIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIGhvdXIgVGhlIGhvdXIgb2YgZGF5IHdoaWNoIHNob3VsZCBiZSBzZXQgb24gdGhlIHJldHVybmVkIGRhdGVcbiAqIEByZXR1cm4gVGhlIGRhdGUgd2hpY2ggaXMgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBNb250aCwgd2Vla2RheTogV2Vla2RheSwgaG91ciA9IDApOiBEYXRlIHtcbiAgICAvLyBQcm9jZWR1cmU6IEZpbmQgdGhlIGZpcnN0IHdlZWtkYXkgb2YgdGhlIG5leHQgbW9udGgsIGNvbXBhcmUgd2l0aCB0aGUgZ2l2ZW4gd2Vla2RheSxcbiAgICAvLyBhbmQgdXNlIHRoZSBkaWZmZXJlbmNlIHRvIGRldGVybWluZSBob3cgbWFueSBkYXlzIHRvIHN1YnRyYWN0IGZyb20gdGhlIGZpcnN0IG9mIHRoZSBuZXh0IG1vbnRoLlxuICAgIGNvbnN0IG9uZUluZGV4ZWRXZWVrZGF5ID0gd2Vla2RheSA9PT0gMCA/IDcgOiB3ZWVrZGF5O1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEgKyAxLCAxLCAxMik7XG4gICAgY29uc3QgZmlyc3RXZWVrZGF5TmV4dE1vbnRoID0gZGF0ZS5nZXREYXkoKSA9PT0gMCA/IDcgOiBkYXRlLmdldERheSgpO1xuICAgIGxldCBkYXlEaWZmO1xuICAgIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPT09IG9uZUluZGV4ZWRXZWVrZGF5KSBkYXlEaWZmID0gNztcbiAgICBlbHNlIGlmIChmaXJzdFdlZWtkYXlOZXh0TW9udGggPCBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDcgKyBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBlbHNlIGRheURpZmYgPSBmaXJzdFdlZWtkYXlOZXh0TW9udGggLSBvbmVJbmRleGVkV2Vla2RheTtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkYXlEaWZmKTtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlLmdldERhdGUoKSwgaG91cik7XG59XG5cbi8qKlxuICogRmluZHMgYW5kIHJldHVybnMgdGltZXpvbmUgb2Zmc2V0LiBJZiB0aW1lem9uZUlucHV0IGlzIG51bWVyaWMsIGl0IGlzIHJldHVybmVkLiBPdGhlcndpc2UsIGxvb2sgZm9yIHRpbWV6b25lIG9mZnNldHNcbiAqIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IHRpbWV6b25lT3ZlcnJpZGVzIC0+IHtAbGluayBUSU1FWk9ORV9BQkJSX01BUH0uXG4gKlxuICogQHBhcmFtIHRpbWV6b25lSW5wdXQgVXBwZXJjYXNlIHRpbWV6b25lIGFiYnJldmlhdGlvbiBvciBudW1lcmljIG9mZnNldCBpbiBtaW51dGVzXG4gKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byB1c2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcmV0dXJuIERTVCBvZmZzZXRzIGZvciBhbWJpZ3VvdXMgdGltZXpvbmVzXG4gKiBAcGFyYW0gdGltZXpvbmVPdmVycmlkZXMgT3ZlcnJpZGVzIGZvciB0aW1lem9uZXNcbiAqIEByZXR1cm4gdGltZXpvbmUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvVGltZXpvbmVPZmZzZXQoXG4gICAgdGltZXpvbmVJbnB1dD86IHN0cmluZyB8IG51bWJlcixcbiAgICBkYXRlPzogRGF0ZSxcbiAgICB0aW1lem9uZU92ZXJyaWRlczogVGltZXpvbmVBYmJyTWFwID0ge31cbik6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0aW1lem9uZUlucHV0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aW1lem9uZUlucHV0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB0aW1lem9uZUlucHV0O1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZWRUaW1lem9uZSA9IHRpbWV6b25lT3ZlcnJpZGVzW3RpbWV6b25lSW5wdXRdID8/IFRJTUVaT05FX0FCQlJfTUFQW3RpbWV6b25lSW5wdXRdO1xuICAgIGlmIChtYXRjaGVkVGltZXpvbmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdlIGhhdmUgbWF0Y2hlZCBhbiB1bmFtYmlndW91cyB0aW1lem9uZVxuICAgIGlmICh0eXBlb2YgbWF0Y2hlZFRpbWV6b25lID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZTtcbiAgICB9XG5cbiAgICAvLyBUaGUgbWF0Y2hlZCB0aW1lem9uZSBpcyBhbiBhbWJpZ3VvdXMgdGltZXpvbmUsIHdoZXJlIHRoZSBvZmZzZXQgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBjb250ZXh0IChyZWZEYXRlKVxuICAgIC8vIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzIG9yIG5vdC5cblxuICAgIC8vIFdpdGhvdXQgcmVmRGF0ZSBhcyBjb250ZXh0LCB0aGVyZSdzIG5vIHdheSB0byBrbm93IGlmIERTVCBvciBub24tRFNUIG9mZnNldCBzaG91bGQgYmUgdXNlZC4gUmV0dXJuIG51bGwgaW5zdGVhZC5cbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBEU1Qgb2Zmc2V0IGlmIHRoZSByZWZEYXRlIGlzIGR1cmluZyBkYXlsaWdodCBzYXZpbmdzXG4gICAgaWYgKGRhdGUgPiBtYXRjaGVkVGltZXpvbmUuZHN0U3RhcnQoZGF0ZS5nZXRGdWxsWWVhcigpKSAmJiAhKGRhdGUgPiBtYXRjaGVkVGltZXpvbmUuZHN0RW5kKGRhdGUuZ2V0RnVsbFllYXIoKSkpKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmUudGltZXpvbmVPZmZzZXREdXJpbmdEc3Q7XG4gICAgfVxuXG4gICAgLy8gcmVmRGF0ZSBpcyBub3QgZHVyaW5nIERTVCA9PiByZXR1cm4gbm9uLURTVCBvZmZzZXRcbiAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0Tm9uRHN0O1xufVxuIiwgImltcG9ydCB7IFRpbWV1bml0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIFRpbWV1bml0U2hvcnRlbiA9IFwieVwiIHwgXCJtb1wiIHwgXCJNXCIgfCBcIndcIiB8IFwiZFwiIHwgXCJoXCIgfCBcIm1cIiB8IFwic1wiIHwgXCJtc1wiO1xuZXhwb3J0IHR5cGUgVGltZXVuaXRTcGVjaWFsID0gXCJxdWFydGVyXCI7XG5cbi8qKlxuICogQSB0eXBlIHJlcHJlc2VudCBhIGRpcmVjdGVkIHRpbWUgZHVyYXRpb24gYXMgYSBzZXQgb2YgdmFsdWVzIGJ5IHRpbWV1bml0cy5cbiAqIFRoZSBwb3NpdGl2ZSB2YWx1ZXMgbWVhbiB0aGUgdGltZSBkdXJhdGlvbiBpbnRvIHRoZSBmdXR1cmUuXG4gKi9cbmV4cG9ydCB0eXBlIER1cmF0aW9uID0geyBbYyBpbiBUaW1ldW5pdCB8IFRpbWV1bml0U3BlY2lhbCB8IFRpbWV1bml0U2hvcnRlbl0/OiBudW1iZXIgfTtcblxuLyoqXG4gKiBBbiBleHBsaWNpdCBlbXB0eSBkdXJhdGlvbiAobm90IGp1c3QgZW1wdHkgZHVyYXRpb24gb2JqZWN0KS5cbiAqIFRoaXMgaXMgZGVmaW5lZCBhcyB6ZXJvIGRheSBhbmQgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgRW1wdHlEdXJhdGlvbiA9IHtcbiAgICBkYXk6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkYXRlIGFmdGVyIGFkZGluZyB0aGUgZ2l2ZW4gYGR1cmF0aW9uYCB0byBgcmVmYC5cbiAqIEBwYXJhbSByZWZcbiAqIEBwYXJhbSBkdXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRHVyYXRpb24ocmVmOiBEYXRlLCBkdXJhdGlvbjogRHVyYXRpb24pOiBEYXRlIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHJlZik7XG5cbiAgICAvLyBSZXBsYWNlIHNob3J0IHRpbWV1bml0IGtleXMgd2l0aCBmdWxsIHRpbWV1bml0IGtleXNcbiAgICBpZiAoZHVyYXRpb25bXCJ5XCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wieWVhclwiXSA9IGR1cmF0aW9uW1wieVwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wieVwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wibW9cIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJtb250aFwiXSA9IGR1cmF0aW9uW1wibW9cIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIm1vXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJNXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibW9udGhcIl0gPSBkdXJhdGlvbltcIk1cIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIk1cIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIndcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJ3ZWVrXCJdID0gZHVyYXRpb25bXCJ3XCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJ3XCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJkXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wiZGF5XCJdID0gZHVyYXRpb25bXCJkXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJkXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJoXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wiaG91clwiXSA9IGR1cmF0aW9uW1wiaFwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wiaFwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wibVwiXSkge1xuICAgICAgICBkdXJhdGlvbltcIm1pbnV0ZVwiXSA9IGR1cmF0aW9uW1wibVwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wibVwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wic1wiXSkge1xuICAgICAgICBkdXJhdGlvbltcInNlY29uZFwiXSA9IGR1cmF0aW9uW1wic1wiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wic1wiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wibXNcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJtaWxsaXNlY29uZFwiXSA9IGR1cmF0aW9uW1wibXNcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIm1zXCJdO1xuICAgIH1cblxuICAgIGlmIChcInllYXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJ5ZWFyXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJ5ZWFyXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1vbnRoID0gZHVyYXRpb24/Lm1vbnRoID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5tb250aCArPSByZW1haW5pbmdGcmFjdGlvbiAqIDEyO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcInF1YXJ0ZXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJxdWFydGVyXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBmbG9vciAqIDMpO1xuICAgIH1cbiAgICBpZiAoXCJtb250aFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIm1vbnRoXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJtb250aFwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi53ZWVrID0gZHVyYXRpb24/LndlZWsgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLndlZWsgKz0gcmVtYWluaW5nRnJhY3Rpb24gKiA0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcIndlZWtcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJ3ZWVrXCJdKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZmxvb3IgKiA3KTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcIndlZWtcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24uZGF5ID0gZHVyYXRpb24/LmRheSA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24uZGF5ICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiA3KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJkYXlcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJkYXlcIl0pO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJkYXlcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24uaG91ciA9IGR1cmF0aW9uPy5ob3VyID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5ob3VyICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiAyNCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwiaG91clwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcImhvdXJcIl0pO1xuICAgICAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcImhvdXJcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ubWludXRlID0gZHVyYXRpb24/Lm1pbnV0ZSA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24ubWludXRlICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiA2MCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibWludXRlXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wibWludXRlXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wibWludXRlXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLnNlY29uZCA9IGR1cmF0aW9uPy5zZWNvbmQgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLnNlY29uZCArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogNjApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcInNlY29uZFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcInNlY29uZFwiXSk7XG4gICAgICAgIGRhdGUuc2V0U2Vjb25kcyhkYXRlLmdldFNlY29uZHMoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcInNlY29uZFwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZCA9IGR1cmF0aW9uPy5taWxsaXNlY29uZCA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmQgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcIm1pbGxpc2Vjb25kXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wibWlsbGlzZWNvbmRcIl0pO1xuICAgICAgICBkYXRlLnNldE1pbGxpc2Vjb25kcyhkYXRlLmdldE1pbGxpc2Vjb25kcygpICsgZmxvb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHJldmVyc2VkIGR1cmF0aW9uIChlLmcuIGJhY2sgaW50byB0aGUgcGFzdCwgaW5zdGVhZCBvZiBmdXR1cmUpXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VEdXJhdGlvbihkdXJhdGlvbjogRHVyYXRpb24pOiBEdXJhdGlvbiB7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkdXJhdGlvbikge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXG4gICAgICAgIHJldmVyc2VkW2tleV0gPSAtZHVyYXRpb25ba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHJldmVyc2VkIGFzIER1cmF0aW9uO1xufVxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nUmVmZXJlbmNlLCBUaW1lem9uZUFiYnJNYXAgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgYXNzaWduU2ltaWxhclRpbWUsIGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi91dGlscy9kYXRlc1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuL3RpbWV6b25lXCI7XG5pbXBvcnQgeyBhZGREdXJhdGlvbiwgRHVyYXRpb24sIEVtcHR5RHVyYXRpb24gfSBmcm9tIFwiLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlV2l0aFRpbWV6b25lIHtcbiAgICByZWFkb25seSBpbnN0YW50OiBEYXRlO1xuICAgIHJlYWRvbmx5IHRpbWV6b25lT2Zmc2V0PzogbnVtYmVyIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGluc3RhbnQ/OiBEYXRlLCB0aW1lem9uZU9mZnNldD86IG51bWJlcikge1xuICAgICAgICB0aGlzLmluc3RhbnQgPSBpbnN0YW50ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXQgPSB0aW1lem9uZU9mZnNldCA/PyBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tRGF0ZShkYXRlOiBEYXRlKTogUmVmZXJlbmNlV2l0aFRpbWV6b25lIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUoZGF0ZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21JbnB1dChpbnB1dD86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCB0aW1lem9uZU92ZXJyaWRlcz86IFRpbWV6b25lQWJick1hcCkge1xuICAgICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmZXJlbmNlV2l0aFRpbWV6b25lLmZyb21EYXRlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW50OiBEYXRlID0gaW5wdXQ/Lmluc3RhbnQgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSB0b1RpbWV6b25lT2Zmc2V0KGlucHV0Py50aW1lem9uZSwgaW5zdGFudCwgdGltZXpvbmVPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShpbnN0YW50LCB0aW1lem9uZU9mZnNldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEpTIGRhdGUgKHN5c3RlbSB0aW1lem9uZSkgd2l0aCB0aGUgeyB5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCB9IGVxdWFsIHRvIHRoZSByZWZlcmVuY2UuXG4gICAgICogVGhlIG91dHB1dCdzIGluc3RhbnQgaXMgTk9UIHRoZSByZWZlcmVuY2UncyBpbnN0YW50IHdoZW4gdGhlIHJlZmVyZW5jZSdzIGFuZCBzeXN0ZW0ncyB0aW1lem9uZSBhcmUgZGlmZmVyZW50LlxuICAgICAqL1xuICAgIGdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuaW5zdGFudCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWV6b25lT2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgLSB0aGlzLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZSh0aGlzLmluc3RhbnQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgbWludXRlcyBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIEpTIGRhdGUncyB0aW1lem9uZSBhbmQgdGhlIHJlZmVyZW5jZSB0aW1lem9uZS5cbiAgICAgKiBAcGFyYW0gZGF0ZVxuICAgICAqIEBwYXJhbSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0XG4gICAgICovXG4gICAgZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGU/OiBEYXRlLCBvdmVycmlkZVRpbWV6b25lT2Zmc2V0PzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCFkYXRlIHx8IGRhdGUuZ2V0VGltZSgpIDwgMCkge1xuICAgICAgICAgICAgLy8gSmF2YXNjcmlwdCBkYXRlIHRpbWV6b25lIGNhbGN1bGF0aW9uIGdvdCBlZmZlY3Qgd2hlbiB0aGUgdGltZSBlcG9jaCA8IDBcbiAgICAgICAgICAgIC8vIGUuZy4gbmV3IERhdGUoJ1R1ZSBGZWIgMDIgMTMwMCAwMDowMDowMCBHTVQrMDkwMCAoSlNUKScpID0+IFR1ZSBGZWIgMDIgMTMwMCAwMDoxODo1OSBHTVQrMDkxOCAoSlNUKVxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50VGltZXpvbmVPZmZzZXQgPSAtZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRUaW1lem9uZU9mZnNldCA9IG92ZXJyaWRlVGltZXpvbmVPZmZzZXQgPz8gdGhpcy50aW1lem9uZU9mZnNldCA/PyBjdXJyZW50VGltZXpvbmVPZmZzZXQ7XG4gICAgICAgIHJldHVybiBjdXJyZW50VGltZXpvbmVPZmZzZXQgLSB0YXJnZXRUaW1lem9uZU9mZnNldDtcbiAgICB9XG5cbiAgICBnZXRUaW1lem9uZU9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lem9uZU9mZnNldCA/PyAtdGhpcy5pbnN0YW50LmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbXBvbmVudHMgaW1wbGVtZW50cyBQYXJzZWRDb21wb25lbnRzIHtcbiAgICBwcml2YXRlIGtub3duVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIGltcGxpZWRWYWx1ZXM6IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9O1xuICAgIHByaXZhdGUgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmU7XG4gICAgcHJpdmF0ZSBfdGFncyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGtub3duQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlcyA9IHt9O1xuICAgICAgICBpZiAoa25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0ga25vd25Db21wb25lbnRzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICAgICAgdGhpcy5pbXBseShcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgdGhpcy5pbXBseShcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgdGhpcy5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgICAgICB0aGlzLmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgcmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsXG4gICAgICAgIGR1cmF0aW9uOiBEdXJhdGlvbiA9IEVtcHR5RHVyYXRpb25cbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGxldCBkYXRlID0gYWRkRHVyYXRpb24ocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpLCBkdXJhdGlvbik7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVcIik7XG4gICAgICAgIGlmIChcImhvdXJcIiBpbiBkdXJhdGlvbiB8fCBcIm1pbnV0ZVwiIGluIGR1cmF0aW9uIHx8IFwic2Vjb25kXCIgaW4gZHVyYXRpb24gfHwgXCJtaWxsaXNlY29uZFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVBbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cbiAgICAgICAgICAgIGlmIChcImRheVwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcIndlZWtcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ3ZWVrZGF5XCIsIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJtb250aFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwieWVhclwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmltcGxpZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlzQ2VydGFpbihjb21wb25lbnQ6IENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXM7XG4gICAgfVxuXG4gICAgZ2V0Q2VydGFpbkNvbXBvbmVudHMoKTogQXJyYXk8Q29tcG9uZW50PiB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmtub3duVmFsdWVzKSBhcyBBcnJheTxDb21wb25lbnQ+O1xuICAgIH1cblxuICAgIGltcGx5KGNvbXBvbmVudDogQ29tcG9uZW50LCB2YWx1ZTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzc2lnbihjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBgZHVyYXRpb25gIGludG8gdGhpcyBjb21wb25lbnQsIG1hcmsgdGhlIG1vZGlmaWVkIGRhdGUgYW5kL29yIHRpbWUgYXMgaW1wbGllZC5cbiAgICAgKiBAcGFyYW0gZHVyYXRpb25cbiAgICAgKi9cbiAgICBhZGREdXJhdGlvbkFzSW1wbGllZChkdXJhdGlvbjogRHVyYXRpb24pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gdGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpO1xuICAgICAgICBjb25zdCBkYXRlID0gYWRkRHVyYXRpb24oY3VycmVudERhdGUsIGR1cmF0aW9uKTtcbiAgICAgICAgaWYgKFwiZGF5XCIgaW4gZHVyYXRpb24gfHwgXCJ3ZWVrXCIgaW4gZHVyYXRpb24gfHwgXCJtb250aFwiIGluIGR1cmF0aW9uIHx8IFwieWVhclwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShbXCJkYXlcIiwgXCJ3ZWVrZGF5XCIsIFwibW9udGhcIiwgXCJ5ZWFyXCJdKTtcbiAgICAgICAgICAgIHRoaXMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5pbXBseShcIndlZWtkYXlcIiwgZGF0ZS5nZXREYXkoKSk7XG4gICAgICAgICAgICB0aGlzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICB0aGlzLmltcGx5KFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChcInNlY29uZFwiIGluIGR1cmF0aW9uIHx8IFwibWludXRlXCIgaW4gZHVyYXRpb24gfHwgXCJob3VyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlKFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIl0pO1xuICAgICAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCBkYXRlLmdldFNlY29uZHMoKSk7XG4gICAgICAgICAgICB0aGlzLmltcGx5KFwibWludXRlXCIsIGRhdGUuZ2V0TWludXRlcygpKTtcbiAgICAgICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIGRhdGUuZ2V0SG91cnMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVsZXRlKGNvbXBvbmVudHM6IENvbXBvbmVudCB8IENvbXBvbmVudFtdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29tcG9uZW50cyA9IFtjb21wb25lbnRzXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvbmUoKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IHRoaXMuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgaXNPbmx5RGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ2VydGFpbihcImhvdXJcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibWludXRlXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInNlY29uZFwiKTtcbiAgICB9XG5cbiAgICBpc09ubHlUaW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzT25seVdlZWtkYXlDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpO1xuICAgIH1cblxuICAgIGlzRGF0ZVdpdGhVbmtub3duWWVhcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcblxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpICE9PSB0aGlzLmdldChcInllYXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5nZXQoXCJtb250aFwiKSAtIDEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF0ZSgpICE9PSB0aGlzLmdldChcImRheVwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJob3VyXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRIb3VycygpICE9IHRoaXMuZ2V0KFwiaG91clwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJtaW51dGVcIikgIT0gbnVsbCAmJiBkYXRlLmdldE1pbnV0ZXMoKSAhPSB0aGlzLmdldChcIm1pbnV0ZVwiKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgICAgICB0YWdzOiAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odGhpcy5fdGFncykuc29ydCgpKX0sIFxuICAgICAgICAgICAga25vd25WYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5rbm93blZhbHVlcyl9LCBcbiAgICAgICAgICAgIGltcGxpZWRWYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pbXBsaWVkVmFsdWVzKX19LCBcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnJlZmVyZW5jZSl9XWA7XG4gICAgfVxuXG4gICAgZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcbiAgICAgICAgY29uc3QgdGltZXpvbmVBZGp1c3RtZW50ID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKGRhdGUsIHRoaXMuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lem9uZUFkanVzdG1lbnQgKiA2MDAwMCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX3RhZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwieWVhclwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibW9udGhcIikgLSAxLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJkYXlcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcImhvdXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1pbnV0ZVwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwic2Vjb25kXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaWxsaXNlY29uZFwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy5nZXQoXCJ5ZWFyXCIpKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFyc2luZ1Jlc3VsdCBpbXBsZW1lbnRzIFBhcnNlZFJlc3VsdCB7XG4gICAgcmVmRGF0ZTogRGF0ZTtcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHRleHQ6IHN0cmluZztcblxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgc3RhcnQ6IFBhcnNpbmdDb21wb25lbnRzO1xuICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgIHN0YXJ0PzogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgICAgIGVuZD86IFBhcnNpbmdDb21wb25lbnRzXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLnJlZkRhdGUgPSByZWZlcmVuY2UuaW5zdGFudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgfHwgbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cblxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgdGhpcy5pbmRleCwgdGhpcy50ZXh0KTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gdGhpcy5zdGFydCA/IHRoaXMuc3RhcnQuY2xvbmUoKSA6IG51bGw7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0aGlzLmVuZCA/IHRoaXMuZW5kLmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0LmRhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRUYWcodGFnOiBzdHJpbmcpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWcodGFnKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWcodGFnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGRUYWdzKHRhZ3M6IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgdGhpcy5zdGFydC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kLmFkZFRhZ3ModGFncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGFncygpOiBTZXQ8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGNvbWJpbmVkVGFnczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHRoaXMuc3RhcnQudGFncygpKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0aGlzLmVuZC50YWdzKCkpIHtcbiAgICAgICAgICAgICAgICBjb21iaW5lZFRhZ3MuYWRkKHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkVGFncztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgY29uc3QgdGFncyA9IEFycmF5LmZyb20odGhpcy50YWdzKCkpLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ1Jlc3VsdCB7aW5kZXg6ICR7dGhpcy5pbmRleH0sIHRleHQ6ICcke3RoaXMudGV4dH0nLCB0YWdzOiAke0pTT04uc3RyaW5naWZ5KHRhZ3MpfSAuLi59XWA7XG4gICAgfVxufVxuIiwgInR5cGUgRGljdGlvbmFyeUxpa2UgPSBzdHJpbmdbXSB8IHsgW3dvcmQ6IHN0cmluZ106IHVua25vd24gfSB8IE1hcDxzdHJpbmcsIHVua25vd24+O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgcHJlZml4OiBzdHJpbmcsXG4gICAgc2luZ2xlVGltZXVuaXRQYXR0ZXJuOiBzdHJpbmcsXG4gICAgY29ubmVjdG9yUGF0dGVybiA9IFwiXFxcXHN7MCw1fSw/XFxcXHN7MCw1fVwiXG4pOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZSA9IHNpbmdsZVRpbWV1bml0UGF0dGVybi5yZXBsYWNlKC9cXCgoPyFcXD8pL2csIFwiKD86XCIpO1xuICAgIHJldHVybiBgJHtwcmVmaXh9JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KD86JHtjb25uZWN0b3JQYXR0ZXJufSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSl7MCwxMH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnk6IERpY3Rpb25hcnlMaWtlKTogc3RyaW5nW10ge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGtleXMgPSBbLi4uZGljdGlvbmFyeV07XG4gICAgfSBlbHNlIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgIGtleXMgPSBBcnJheS5mcm9tKChkaWN0aW9uYXJ5IGFzIE1hcDxzdHJpbmcsIHVua25vd24+KS5rZXlzKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhkaWN0aW9uYXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoQW55UGF0dGVybihkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZyB7XG4gICAgLy8gVE9ETzogTW9yZSBlZmZpY2llbnQgcmVnZXggcGF0dGVybiBieSBjb25zaWRlcmluZyBkdXBsaWNhdGVkIHByZWZpeFxuXG4gICAgY29uc3Qgam9pbmVkVGVybXMgPSBleHRyYWN0VGVybXMoZGljdGlvbmFyeSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXG4gICAgICAgIC5qb2luKFwifFwiKVxuICAgICAgICAucmVwbGFjZSgvXFwuL2csIFwiXFxcXC5cIik7XG5cbiAgICByZXR1cm4gYCg/OiR7am9pbmVkVGVybXN9KWA7XG59XG4iLCAiaW1wb3J0IHsgYWRkRHVyYXRpb24gfSBmcm9tIFwiLi9kdXJhdGlvblwiO1xuXG4vKipcbiAqIEZpbmQgdGhlIG1vc3QgbGlrZWx5IHllYXIsIGZyb20gYSByYXcgbnVtYmVyLiBGb3IgZXhhbXBsZTpcbiAqIDE5OTcgPT4gMTk5N1xuICogOTcgPT4gMTk5N1xuICogMTIgPT4gMjAxMlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE1vc3RMaWtlbHlBRFllYXIoeWVhck51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoeWVhck51bWJlciA8IDEwMCkge1xuICAgICAgICBpZiAoeWVhck51bWJlciA+IDUwKSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDE5MDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDIwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geWVhck51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRZZWFyQ2xvc2VzdFRvUmVmKHJlZkRhdGU6IERhdGUsIGRheTogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHJlZkRhdGUpO1xuICAgIGRhdGUuc2V0TW9udGgobW9udGggLSAxKTtcbiAgICBkYXRlLnNldERhdGUoZGF5KTtcbiAgICBjb25zdCBuZXh0WWVhciA9IGFkZER1cmF0aW9uKGRhdGUsIHsgXCJ5ZWFyXCI6IDEgfSk7XG4gICAgY29uc3QgbGFzdFllYXIgPSBhZGREdXJhdGlvbihkYXRlLCB7IFwieWVhclwiOiAtMSB9KTtcbiAgICBpZiAoTWF0aC5hYnMobmV4dFllYXIuZ2V0VGltZSgpIC0gcmVmRGF0ZS5nZXRUaW1lKCkpIDwgTWF0aC5hYnMoZGF0ZS5nZXRUaW1lKCkgLSByZWZEYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgZGF0ZSA9IG5leHRZZWFyO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMobGFzdFllYXIuZ2V0VGltZSgpIC0gcmVmRGF0ZS5nZXRUaW1lKCkpIDwgTWF0aC5hYnMoZGF0ZS5nZXRUaW1lKCkgLSByZWZEYXRlLmdldFRpbWUoKSkpIHtcbiAgICAgICAgZGF0ZSA9IGxhc3RZZWFyO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuIiwgImltcG9ydCB7IG1hdGNoQW55UGF0dGVybiwgcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBUaW1ldW5pdCwgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgV0VFS0RBWV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBXZWVrZGF5IH0gPSB7XG4gICAgc3VuZGF5OiAwLFxuICAgIHN1bjogMCxcbiAgICBcInN1bi5cIjogMCxcbiAgICBtb25kYXk6IDEsXG4gICAgbW9uOiAxLFxuICAgIFwibW9uLlwiOiAxLFxuICAgIHR1ZXNkYXk6IDIsXG4gICAgdHVlOiAyLFxuICAgIFwidHVlLlwiOiAyLFxuICAgIHdlZG5lc2RheTogMyxcbiAgICB3ZWQ6IDMsXG4gICAgXCJ3ZWQuXCI6IDMsXG4gICAgdGh1cnNkYXk6IDQsXG4gICAgdGh1cnM6IDQsXG4gICAgXCJ0aHVycy5cIjogNCxcbiAgICB0aHVyOiA0LFxuICAgIFwidGh1ci5cIjogNCxcbiAgICB0aHU6IDQsXG4gICAgXCJ0aHUuXCI6IDQsXG4gICAgZnJpZGF5OiA1LFxuICAgIGZyaTogNSxcbiAgICBcImZyaS5cIjogNSxcbiAgICBzYXR1cmRheTogNixcbiAgICBzYXQ6IDYsXG4gICAgXCJzYXQuXCI6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGphbnVhcnk6IDEsXG4gICAgZmVicnVhcnk6IDIsXG4gICAgbWFyY2g6IDMsXG4gICAgYXByaWw6IDQsXG4gICAgbWF5OiA1LFxuICAgIGp1bmU6IDYsXG4gICAganVseTogNyxcbiAgICBhdWd1c3Q6IDgsXG4gICAgc2VwdGVtYmVyOiA5LFxuICAgIG9jdG9iZXI6IDEwLFxuICAgIG5vdmVtYmVyOiAxMSxcbiAgICBkZWNlbWJlcjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgTU9OVEhfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgLi4uRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksXG4gICAgamFuOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIGZlYjogMixcbiAgICBcImZlYi5cIjogMixcbiAgICBtYXI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgYXByOiA0LFxuICAgIFwiYXByLlwiOiA0LFxuICAgIGp1bjogNixcbiAgICBcImp1bi5cIjogNixcbiAgICBqdWw6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgYXVnOiA4LFxuICAgIFwiYXVnLlwiOiA4LFxuICAgIHNlcDogOSxcbiAgICBcInNlcC5cIjogOSxcbiAgICBzZXB0OiA5LFxuICAgIFwic2VwdC5cIjogOSxcbiAgICBvY3Q6IDEwLFxuICAgIFwib2N0LlwiOiAxMCxcbiAgICBub3Y6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBkZWM6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBJTlRFR0VSX1dPUkRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgb25lOiAxLFxuICAgIHR3bzogMixcbiAgICB0aHJlZTogMyxcbiAgICBmb3VyOiA0LFxuICAgIGZpdmU6IDUsXG4gICAgc2l4OiA2LFxuICAgIHNldmVuOiA3LFxuICAgIGVpZ2h0OiA4LFxuICAgIG5pbmU6IDksXG4gICAgdGVuOiAxMCxcbiAgICBlbGV2ZW46IDExLFxuICAgIHR3ZWx2ZTogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgT1JESU5BTF9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGZpcnN0OiAxLFxuICAgIHNlY29uZDogMixcbiAgICB0aGlyZDogMyxcbiAgICBmb3VydGg6IDQsXG4gICAgZmlmdGg6IDUsXG4gICAgc2l4dGg6IDYsXG4gICAgc2V2ZW50aDogNyxcbiAgICBlaWdodGg6IDgsXG4gICAgbmludGg6IDksXG4gICAgdGVudGg6IDEwLFxuICAgIGVsZXZlbnRoOiAxMSxcbiAgICB0d2VsZnRoOiAxMixcbiAgICB0aGlydGVlbnRoOiAxMyxcbiAgICBmb3VydGVlbnRoOiAxNCxcbiAgICBmaWZ0ZWVudGg6IDE1LFxuICAgIHNpeHRlZW50aDogMTYsXG4gICAgc2V2ZW50ZWVudGg6IDE3LFxuICAgIGVpZ2h0ZWVudGg6IDE4LFxuICAgIG5pbmV0ZWVudGg6IDE5LFxuICAgIHR3ZW50aWV0aDogMjAsXG4gICAgXCJ0d2VudHkgZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHktZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHkgc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5LXNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eSB0aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eS10aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eSBmb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHktZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5IGZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5LWZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5IHNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5LXNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5IHNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHktc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eSBlaWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHktZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5IG5pbnRoXCI6IDI5LFxuICAgIFwidHdlbnR5LW5pbnRoXCI6IDI5LFxuICAgIFwidGhpcnRpZXRoXCI6IDMwLFxuICAgIFwidGhpcnR5IGZpcnN0XCI6IDMxLFxuICAgIFwidGhpcnR5LWZpcnN0XCI6IDMxLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlI6IHsgW3dvcmQ6IHN0cmluZ106IFRpbWV1bml0IH0gPSB7XG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGRheTogXCJkYXlcIixcbiAgICBkYXlzOiBcImRheVwiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9VTklUX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IFRpbWV1bml0IH0gPSB7XG4gICAgczogXCJzZWNvbmRcIixcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbTogXCJtaW51dGVcIixcbiAgICBtaW46IFwibWludXRlXCIsXG4gICAgbWluczogXCJtaW51dGVcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBoOiBcImhvdXJcIixcbiAgICBocjogXCJob3VyXCIsXG4gICAgaHJzOiBcImhvdXJcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgZDogXCJkYXlcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICB3OiBcIndlZWtcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW86IFwibW9udGhcIixcbiAgICBtb246IFwibW9udGhcIixcbiAgICBtb3M6IFwibW9udGhcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF0cjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHk6IFwieWVhclwiLFxuICAgIHlyOiBcInllYXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgLy8gQWxzbywgbWVyZ2UgdGhlIGVudHJpZXMgZnJvbSB0aGUgZnVsbC1uYW1lIGRpY3Rpb25hcnkuXG4gICAgLy8gV2UgbGVhdmUgdGhlIGR1cGxpY2F0ZWQgZW50cmllcyBmb3IgcmVhZGFiaWxpdHkuXG4gICAgLi4uVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUixcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE5VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKFxuICAgIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZXG4pfXxbMC05XSt8WzAtOV0rXFxcXC5bMC05XSt8aGFsZig/OlxcXFxzezAsMn1hbj8pP3xhbj9cXFxcYig/OlxcXFxzezAsMn1mZXcpP3xmZXd8c2V2ZXJhbHx0aGV8YT9cXFxcc3swLDJ9Y291cGxlXFxcXHN7MCwyfSg/Om9mKT8pYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfSBlbHNlIGlmIChudW0gPT09IFwiYVwiIHx8IG51bSA9PT0gXCJhblwiIHx8IG51bSA9PSBcInRoZVwiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9mZXcvKSkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvaGFsZi8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2NvdXBsZS8pKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9zZXZlcmFsLykpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihPUkRJTkFMX1dPUkRfRElDVElPTkFSWSl9fFswLTldezEsMn0oPzpzdHxuZHxyZHx0aCk/KWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBPUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cblxuICAgIG51bSA9IG51bS5yZXBsYWNlKC8oPzpzdHxuZHxyZHx0aCkkL2ksIFwiXCIpO1xuICAgIHJldHVybiBwYXJzZUludChudW0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBZRUFSX1BBVFRFUk4gPSBgKD86WzEtOV1bMC05XXswLDN9XFxcXHN7MCwyfSg/OkJFfEFEfEJDfEJDRXxDRSl8WzEtMl1bMC05XXszfXxbNS05XVswLTldfDJbMC01XSlgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhcihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoL0JFL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQnVkZGhpc3QgRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkUvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCkgLSA1NDM7XG4gICAgfVxuXG4gICAgaWYgKC9CQ0U/L2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQmVmb3JlIENocmlzdCwgQmVmb3JlIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CQ0U/L2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gLXBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG5cbiAgICBpZiAoLyhBRHxDRSkvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBBbm5vIERvbWluaSwgQ29tbW9uIEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoLyhBRHxDRSkvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICByZXR1cm4gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pYDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuXG5jb25zdCBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihcbiAgICBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSXG4pfSlgO1xuXG5jb25zdCBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk4gPSBgXFxcXHN7MCw1fSw/KD86XFxcXHMqYW5kKT9cXFxcc3swLDV9YDtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sXG4gICAgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOXG4pO1xuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLFxuICAgIFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24odGltZXVuaXRUZXh0KTogbnVsbCB8IER1cmF0aW9uIHtcbiAgICBjb25zdCBmcmFnbWVudHMgPSB7fTtcbiAgICBsZXQgcmVtYWluaW5nVGV4dCA9IHRpbWV1bml0VGV4dDtcbiAgICBsZXQgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpO1xuICAgICAgICByZW1haW5pbmdUZXh0ID0gcmVtYWluaW5nVGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKS50cmltKCk7XG4gICAgICAgIG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIH1cbiAgICBpZiAoT2JqZWN0LmtleXMoZnJhZ21lbnRzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50cyBhcyBEdXJhdGlvbjtcbn1cblxuZnVuY3Rpb24gY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCkge1xuICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlthLXpBLVpdKyQvKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW21hdGNoWzJdLnRvTG93ZXJDYXNlKCldO1xuICAgIGZyYWdtZW50c1t1bml0XSA9IG51bTtcbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGVja3MgZm9yIHdvcmQgYm91bmRhcnkgYW5kIGFwcGx5aW5nIHRoZSBpbm5lciBwYXR0ZXJuIGFuZCBleHRyYWN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cDtcbiAgICBhYnN0cmFjdCBpbm5lckV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcblxuICAgIC8vIE92ZXJyaWRlcyB0aGlzIG1ldGhvZCBpZiB0aGVyZSBpcyBtb3JlIGVmZmljaWVudCB3YXkgdG8gY2hlY2sgZm9yIGlubmVyIHBhdHRlcm4gY2hhbmdlLlxuICAgIGlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgY3VycmVudElubmVyUGF0dGVybjogUmVnRXhwKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KSAhPT0gY3VycmVudElubmVyUGF0dGVybjtcbiAgICB9XG5cbiAgICBwYXR0ZXJuTGVmdEJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKFxcXFxXfF4pYDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZElubmVyUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQYXR0ZXJuPzogUmVnRXhwID0gbnVsbDtcblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICBpZiAodGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dCwgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybiA9IHRoaXMuaW5uZXJQYXR0ZXJuKGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNhY2hlZFBhdHRlcm4gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7dGhpcy5wYXR0ZXJuTGVmdEJvdW5kYXJ5KCl9JHt0aGlzLmNhY2hlZElubmVyUGF0dGVybi5zb3VyY2V9YCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLmZsYWdzXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbWF0Y2hbMV0gPz8gXCJcIjtcbiAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIGhlYWRlci5sZW5ndGg7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc3Vic3RyaW5nKGhlYWRlci5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1hdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXRjaFtpIC0gMV0gPSBtYXRjaFtpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VEdXJhdGlvbiwgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86KD86d2l0aGlufGlufGZvcilcXFxccyopP2AgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSA/IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggOiBQQVRURVJOX1dJVEhfUFJFRklYO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgLy8gRXhjbHVkZSBcImZvciB0aGUgdW5pdFwiIHBoYXNlcywgZS5nLiBcImZvciB0aGUgeWVhclwiXG4gICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXmZvclxccyp0aGVcXHMqXFx3Ky8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZUR1cmF0aW9uKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKD86b25cXFxcc3swLDN9KT9gICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgICAgICBgXFxcXHN7MCwzfSg/OnRvfFxcXFwtfFxcXFxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKT9cXFxcc3swLDN9YCArXG4gICAgICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIGAoPzotfC98XFxcXHN7MCwzfSg/Om9mKT9cXFxcc3swLDN9KWAgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfCw/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgICAgIGAoJHtZRUFSX1BBVFRFUk59KD8hXFxcXHcpKWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IERBVEVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDI7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcblxuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCJbOTYgQXVnXVwiID0+IFwiOVs2IEF1Z11cIiwgd2UgbmVlZCB0byBzaGlmdCBhd2F5IGZyb20gdGhlIG5leHQgbnVtYmVyXG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbREFURV9HUk9VUF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyTnVtYmVyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXJOdW1iZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5lbmQgPSByZXN1bHQuc3RhcnQuY2xvbmUoKTtcbiAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgICAgICBgKCR7T1JESU5BTF9OVU1CRVJfUEFUVEVSTn0pKD8hXFxcXHMqKD86YW18cG0pKVxcXFxzKmAgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiKD86dG98XFxcXC0pXFxcXHMqXCIgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KVxcXFxzKmAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIGAoPzotfC98XFxcXHMqLFxcXFxzKnxcXFxccyspYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKSg/IVxcXFw6XFxcXGQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAxO1xuY29uc3QgREFURV9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX1RPX0dST1VQID0gMztcbmNvbnN0IFlFQVJfR1JPVVAgPSA0O1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgVVMncyBkYXRlIGZvcm1hdCB0aGF0IGJlZ2luIHdpdGggbW9udGgncyBuYW1lLlxuICogIC0gSmFudWFyeSAxM1xuICogIC0gSmFudWFyeSAxMywgMjAxMlxuICogIC0gSmFudWFyeSAxMyAtIDE1LCAyMDEyXG4gKiBOb3RlOiBXYXRjaCBvdXQgZm9yOlxuICogIC0gSmFudWFyeSAxMjowMFxuICogIC0gSmFudWFyeSAxMi40NFxuICogIC0gSmFudWFyeSAxMjIyMzQ0XG4gKiAgLSBKYW51YXJ5IDIxICh3aGVuIHNob3VsZFNraXBZZWFyTGlrZURhdGU9dHJ1ZSlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlID0gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aCA9IE1PTlRIX0RJQ1RJT05BUllbbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9HUk9VUF0pO1xuICAgICAgICBpZiAoZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCB0aGUgY2FzZSB3aGVyZSB0aGUgZGF5IGxvb2tzIGxpa2UgYSB5ZWFyIChleDogSmFudWFyeSAyMSlcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSAmJiAhbWF0Y2hbWUVBUl9HUk9VUF0gJiYgbWF0Y2hbREFURV9HUk9VUF0ubWF0Y2goL14yWzAtNV0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKTtcblxuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRleHQgY2FuIGJlICdyYW5nZScgdmFsdWUuIFN1Y2ggYXMgJ0phbnVhcnkgMTIgLSAxMywgMjAxMidcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gY29tcG9uZW50cztcbiAgICAgICAgcmVzdWx0LmVuZCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksIE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgoPzppbilcXFxccyopP2AgK1xuICAgICAgICBgKCR7bWF0Y2hBbnlQYXR0ZXJuKE1PTlRIX0RJQ1RJT05BUlkpfSlgICtcbiAgICAgICAgYFxcXFxzKmAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgIGAoPzosfC18b2YpP1xcXFxzKigke1lFQVJfUEFUVEVSTn0pP2AgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBcIig/PVteXFxcXHNcXFxcd118XFxcXHMrW14wLTldfFxcXFxzKyR8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgWUVBUl9HUk9VUCA9IDM7XG5cbi8qKlxuICogVGhlIHBhcnNlciBmb3IgcGFyc2luZyBtb250aCBuYW1lIGFuZCB5ZWFyLlxuICogLSBKYW51YXJ5LCAyMDEyXG4gKiAtIEphbnVhcnkgMjAxMlxuICogLSBKYW51YXJ5XG4gKiAoaW4pIEphblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1vbnRoTmFtZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBtYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIHNraXAgc29tZSB1bmxpa2VseSB3b3JkcyBcImphblwiLCBcIm1hclwiLCAuLlxuICAgICAgICBpZiAobWF0Y2hbMF0ubGVuZ3RoIDw9IDMgJiYgIUZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZW21vbnRoTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyAobWF0Y2hbUFJFRklYX0dST1VQXSB8fCBcIlwiKS5sZW5ndGgsXG4gICAgICAgICAgICBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgICAgICApO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgMSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVQYXJzZXJcIik7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21vbnRoTmFtZV07XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgMSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLypcbiAgICBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIGJldHdlZW4gbnVtYmVycyBsaWtlIEVOU2xhc2hEYXRlRm9ybWF0UGFyc2VyLFxuICAgIGJ1dCB0aGlzIHBhcnNlciBleHBlY3QgeWVhciBiZWZvcmUgbW9udGggYW5kIGRhdGUuXG4gICAgLSBZWVlZL01NL0REXG4gICAgLSBZWVlZLU1NLUREXG4gICAgLSBZWVlZLk1NLkREXG4qL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYChbMC05XXs0fSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYCg/Oigke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pfChbMC05XXsxLDJ9KSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICAgICAgYChbMC05XXsxLDJ9KWAgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05BTUVfR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTlVNQkVSX0dST1VQID0gMztcbmNvbnN0IERBVEVfTlVNQkVSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb250aERhdGVPcmRlcjogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1vbnRoID0gbWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXVxuICAgICAgICAgICAgPyBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKVxuICAgICAgICAgICAgOiBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuXG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9udGhEYXRlT3JkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXkgPj0gMSAmJiBkYXkgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBbbW9udGgsIGRheV0gPSBbZGF5LCBtb250aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCIoWzAtOV18MFsxLTldfDFbMDEyXSkvKFswLTldezR9KVwiICsgXCJcIiwgXCJpXCIpO1xuXG5jb25zdCBNT05USF9HUk9VUCA9IDE7XG5jb25zdCBZRUFSX0dST1VQID0gMjtcblxuLyoqXG4gKiBNb250aC9ZZWFyIGRhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKGFsc28gXCItXCIgYW5kIFwiLlwiKSBiZXR3ZWVuIG51bWJlcnNcbiAqIC0gMTEvMDVcbiAqIC0gMDYvMjAwNVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbTU9OVEhfR1JPVVBdKTtcblxuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpLmltcGx5KFwiZGF5XCIsIDEpLmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKS5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBwcmltYXJ5VGltZVBhdHRlcm4obGVmdEJvdW5kYXJ5OiBzdHJpbmcsIHByaW1hcnlQcmVmaXg6IHN0cmluZywgcHJpbWFyeVN1ZmZpeDogc3RyaW5nLCBmbGFnczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBgJHtsZWZ0Qm91bmRhcnl9YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5UHJlZml4fWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnw6fFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgICAgIGAoXFxcXGR7Mn0pYCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLihcXFxcZHsxLDZ9KSk/YCArXG4gICAgICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGAoPzpcXFxccyooYVxcXFwubVxcXFwufHBcXFxcLm1cXFxcLnxhbT98cG0/KSk/YCArXG4gICAgICAgICAgICBgJHtwcmltYXJ5U3VmZml4fWAsXG4gICAgICAgIGZsYWdzXG4gICAgKTtcbn1cblxuLy8gcHJldHRpZXItaWdub3JlXG5mdW5jdGlvbiBmb2xsb3dpbmdUaW1lUGF0dGVuKGZvbGxvd2luZ1BoYXNlOiBzdHJpbmcsIGZvbGxvd2luZ1N1ZmZpeDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICAgIGBeKCR7Zm9sbG93aW5nUGhhc2V9KWAgK1xuICAgICAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgICAgICAgICBgKD86YCArXG4gICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLnxcXFxcOnxcXFxcXHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7Zm9sbG93aW5nU3VmZml4fWAsXG4gICAgICAgIFwiaVwiXG4gICAgKTtcbn1cblxuY29uc3QgSE9VUl9HUk9VUCA9IDI7XG5jb25zdCBNSU5VVEVfR1JPVVAgPSAzO1xuY29uc3QgU0VDT05EX0dST1VQID0gNDtcbmNvbnN0IE1JTExJX1NFQ09ORF9HUk9VUCA9IDU7XG5jb25zdCBBTV9QTV9IT1VSX0dST1VQID0gNjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgaW1wbGVtZW50cyBQYXJzZXIge1xuICAgIGFic3RyYWN0IHByaW1hcnlQcmVmaXgoKTogc3RyaW5nO1xuICAgIGFic3RyYWN0IGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZztcbiAgICBzdHJpY3RNb2RlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IHN0cmljdE1vZGU7XG4gICAgfVxuXG4gICAgcGF0dGVybkZsYWdzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImlcIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChefFxcXFxzfFR8XFxcXGIpYDtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nU3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuXG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29tcG9uZW50cyA9IHRoaXMuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghc3RhcnRDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbWF0Y2ggc2VlbSBsaWtlIGEgeWVhciBlLmcuIFwiMjAxMy4xMjouLi5cIixcbiAgICAgICAgICAgIC8vIHRoZW4gc2tpcHMgdGhlIHllYXIgcGFydCBhbmQgdHJ5IG1hdGNoaW5nIGFnYWluLlxuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eXFxkezR9LykpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRleCArPSA0OyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoOyAvLyBTa2lwIG92ZXIgcG90ZW50aWFsIG92ZXJsYXBwaW5nIHBhdHRlcm5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzFdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGV4dCA9IG1hdGNoWzBdLnN1YnN0cmluZyhtYXRjaFsxXS5sZW5ndGgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQsIHN0YXJ0Q29tcG9uZW50cyk7XG4gICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG5cbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQYXR0ZXJuID0gdGhpcy5nZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdNYXRjaCA9IGZvbGxvd2luZ1BhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICAvLyBQYXR0ZXJuIFwiNDU2LTEyXCIsIFwiMjAyMi0xMlwiIHNob3VsZCBub3QgYmUgdGltZSB3aXRob3V0IHByb3BlciBjb250ZXh0XG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkezMsNH0vKSAmJiBmb2xsb3dpbmdNYXRjaCkge1xuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTJcIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Miw0fSQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZS5nLiBcIjIwMjItMTI6MDEuLi5cIlxuICAgICAgICAgICAgaWYgKGZvbGxvd2luZ01hdGNoWzBdLm1hdGNoKC9eXFxzKihbKy1dKVxccypcXGR7Mn1cXFdcXGR7Mn0vKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWZvbGxvd2luZ01hdGNoIHx8XG4gICAgICAgICAgICAvLyBQYXR0ZXJuIFwiWVkuWVkgLVhYWFhcIiBpcyBtb3JlIGxpa2UgdGltZXpvbmUgb2Zmc2V0XG4gICAgICAgICAgICBmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezMsNH0kLylcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgZm9sbG93aW5nTWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQuZW5kKSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBmb2xsb3dpbmdNYXRjaFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KTtcbiAgICB9XG5cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHN0cmljdCA9IGZhbHNlXG4gICAgKTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IG51bGw7XG5cbiAgICAgICAgLy8gLS0tLS0gSG91cnNcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHRpbWUgaXMgbGlrZSAnMjAxOScsIGl0IGlzIG1vcmUgbGlrZWx5IGEgeWVhci5cbiAgICAgICAgICAgIC8vIEVzcGVjaWFsbHkgaWYgdGhlcmUgaXMgbm8gbWludXRlIHBhcnQgYW5kIG5vIGFtL3BtLlxuICAgICAgICAgICAgaWYgKG1hdGNoW0hPVVJfR1JPVVBdLmxlbmd0aCA9PSA0ICYmIG1hdGNoW01JTlVURV9HUk9VUF0gPT0gbnVsbCAmJiAhbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSB8fCBtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVzXG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdLmxlbmd0aCA9PSAxICYmICFtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2luZ2xlIGRpZ2l0IG1pbnV0ZSBlLmcuIFwiYXQgMS4xIHh4XCJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG5cbiAgICAgICAgLy8gLS0tLS0gTWlsbGlzZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gU2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IC0xO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbnV0ZVxuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChtYXRjaFtNSU5VVEVfR1JPVVBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBob3VyICUgMTAwO1xuICAgICAgICAgICAgaG91ciA9IE1hdGguZmxvb3IoaG91ciAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwIHx8IGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+PSAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIEFNICYgUE1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uQU07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50cy5pc0NlcnRhaW4oXCJkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZXJpZGllbSA9PSBNZXJpZGllbS5BTSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgIT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA+PSAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXRQTSA9IHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSAmJiByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA+IDEyO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QXRQTSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAtIDEyID4gaG91cikge1xuICAgICAgICAgICAgICAgICAgICAvLyAxMHBtIC0gMSAoYW0pXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIC8vIFNpbmdsZSBkaWdpdCAoZS5nIFwiMVwiKSBzaG91bGQgbm90IGJlIGNvdW50ZWQgYXMgdGltZSBleHByZXNzaW9uICh3aXRob3V0IHByb3BlciBjb250ZXh0KVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGQkLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhyZWUgb3IgbW9yZSBkaWdpdCAoZS5nLiBcIjIwM1wiLCBcIjIwMTRcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkXFxkXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnN0ZWFkIG9mIFwiYW0vcG1cIiwgaXQgZW5kcyB3aXRoIFwiYVwiIG9yIFwicFwiIChlLmcgXCIxYVwiLCBcIjEyM3BcIiksIHRoaXMgc2VlbXMgdW5saWtlbHlcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9cXGRbYXBBUF0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBvciBkb3RzXG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzFdO1xuXG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDFcIiBvciBcImF0IDEuMlwiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkKy1cXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKVxccyotXFxzKihcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDEtM1wiIG9yIFwiYXQgMS4yIC0gMi4zXCIpLCB0aGlzIHNob3VsZCBub3QgYmUgYWNjZXB0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzJdO1xuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggZG90IHNpbmdsZSBkaWdpdCwgZS5nLiBcImF0IDEuMlwiXG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIGFib3ZlIDI0LCBlLmcuIFwiYXQgMjVcIlxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlclZhbCA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQgfHwgc3RhcnRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlQcmVmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBudWxsO1xuXG4gICAgZ2V0UHJpbWFyeVRpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBwcmltYXJ5UHJlZml4ID0gdGhpcy5wcmltYXJ5UHJlZml4KCk7XG4gICAgICAgIGNvbnN0IHByaW1hcnlTdWZmaXggPSB0aGlzLnByaW1hcnlTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID09PSBwcmltYXJ5UHJlZml4ICYmIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9PT0gcHJpbWFyeVN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBwcmltYXJ5VGltZVBhdHRlcm4oXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlQYXR0ZXJuTGVmdEJvdW5kYXJ5KCksXG4gICAgICAgICAgICBwcmltYXJ5UHJlZml4LFxuICAgICAgICAgICAgcHJpbWFyeVN1ZmZpeCxcbiAgICAgICAgICAgIHRoaXMucGF0dGVybkZsYWdzKClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gcHJpbWFyeVByZWZpeDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gcHJpbWFyeVN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nU3VmZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBudWxsO1xuXG4gICAgZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BoYXNlID0gdGhpcy5mb2xsb3dpbmdQaGFzZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdTdWZmaXggPSB0aGlzLmZvbGxvd2luZ1N1ZmZpeCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID09PSBmb2xsb3dpbmdQaGFzZSAmJiB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9PT0gZm9sbG93aW5nU3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZSwgZm9sbG93aW5nU3VmZml4KTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9IGZvbGxvd2luZ1BoYXNlO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IGZvbGxvd2luZ1N1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlKSB7XG4gICAgICAgIHN1cGVyKHN0cmljdE1vZGUpO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlxcXFxzKig/OlxcXFwtfFxcXFxcdTIwMTN8XFxcXH58XFxcXFx1MzAxQ3x0b3x1bnRpbHx0aHJvdWdofHRpbGx8XFxcXD8pXFxcXHMqXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVByZWZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoPzooPzphdHxmcm9tKVxcXFxzKik/P1wiO1xuICAgIH1cblxuICAgIHByaW1hcnlTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86XFxcXHMqKD86b1xcXFxXKmNsb2NrfGF0XFxcXHMqbmlnaHR8aW5cXFxccyp0aGVcXFxccyooPzptb3JuaW5nfGFmdGVybm9vbikpKT8oPyEvKSg/PVxcXFxXfCQpXCI7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghY29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuaWdodFwiKSkge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDYgJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcImFmdGVybm9vblwiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPj0gMCAmJiBob3VyIDw9IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibW9ybmluZ1wiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ0NvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChmb2xsb3dpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb2xsb3dpbmdDb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb2xsb3dpbmdDb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlRHVyYXRpb24sIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19QQVRURVJOfSlcXFxcc3swLDV9KD86YWdvfGJlZm9yZXxlYXJsaWVyKSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgU1RSSUNUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VEdXJhdGlvbihtYXRjaFsxXSk7XG4gICAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHJldmVyc2VEdXJhdGlvbihkdXJhdGlvbikpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlRHVyYXRpb24sIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmxhdGVyfGFmdGVyfGZyb20gbm93fGhlbmNlZm9ydGh8Zm9yd2FyZHxvdXQpYCArIFwiKD89KD86XFxcXFd8JCkpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0obGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3cpKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBHUk9VUF9OVU1fVElNRVVOSVRTID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gU1RSSUNUX1BBVFRFUk4gOiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VEdXJhdGlvbihtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBmaWx0ZXIgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IGlzVmFsaWQoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW47XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmZpbHRlcigocikgPT4gdGhpcy5pc1ZhbGlkKGNvbnRleHQsIHIpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQSBzcGVjaWFsIHR5cGUgb2Yge0BsaW5rIFJlZmluZXJ9IHRvIG1lcmdlIGNvbnNlY3V0aXZlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1lcmdpbmdSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgYWJzdHJhY3Qgc2hvdWxkTWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IGJvb2xlYW47XG5cbiAgICBhYnN0cmFjdCBtZXJnZVJlc3VsdHMoXG4gICAgICAgIHRleHRCZXR3ZWVuOiBzdHJpbmcsXG4gICAgICAgIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0XG4gICAgKTogUGFyc2luZ1Jlc3VsdDtcblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10gPSBbXTtcbiAgICAgICAgbGV0IGN1clJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGxldCBuZXh0UmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRSZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gY3VyUmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHQgPSB0aGlzLm1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgbGVmdCwgcmlnaHQsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IG1lcmdlZCAke2xlZnR9IGFuZCAke3JpZ2h0fSBpbnRvICR7bWVyZ2VkUmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbWVyZ2VkUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgYWRkRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwO1xuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhY3VycmVudFJlc3VsdC5lbmQgJiYgIW5leHRSZXN1bHQuZW5kICYmIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGZyb21SZXN1bHQsIHRvUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgIXRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZyb21SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShrZXksIHRvUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdG9SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCBmcm9tUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbVJlc3VsdC5zdGFydC5kYXRlKCkgPiB0b1Jlc3VsdC5zdGFydC5kYXRlKCkpIHtcbiAgICAgICAgICAgIGxldCBmcm9tRGF0ZSA9IGZyb21SZXN1bHQuc3RhcnQuZGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHRvRGF0ZSA9IHRvUmVzdWx0LnN0YXJ0LmRhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiBhZGREdXJhdGlvbih0b0RhdGUsIHsgZGF5OiA3IH0pID4gZnJvbURhdGUpIHtcbiAgICAgICAgICAgICAgICB0b0RhdGUgPSBhZGREdXJhdGlvbih0b0RhdGUsIHsgZGF5OiA3IH0pO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHRvRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgdG9EYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgdG9EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiBhZGREdXJhdGlvbihmcm9tRGF0ZSwgeyBkYXk6IC03IH0pIDwgdG9EYXRlKSB7XG4gICAgICAgICAgICAgICAgZnJvbURhdGUgPSBhZGREdXJhdGlvbihmcm9tRGF0ZSwgeyBkYXk6IC03IH0pO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgZnJvbURhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgZnJvbURhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b1Jlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiBhZGREdXJhdGlvbih0b0RhdGUsIHsgeWVhcjogMSB9KSA+IGZyb21EYXRlKSB7XG4gICAgICAgICAgICAgICAgdG9EYXRlID0gYWRkRHVyYXRpb24odG9EYXRlLCB7IHllYXI6IDEgfSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiBhZGREdXJhdGlvbihmcm9tRGF0ZSwgeyB5ZWFyOiAtMSB9KSA8IHRvRGF0ZSkge1xuICAgICAgICAgICAgICAgIGZyb21EYXRlID0gYWRkRHVyYXRpb24oZnJvbURhdGUsIHsgeWVhcjogLTEgfSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgZnJvbURhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFt0b1Jlc3VsdCwgZnJvbVJlc3VsdF0gPSBbZnJvbVJlc3VsdCwgdG9SZXN1bHRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZyb21SZXN1bHQuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gZnJvbVJlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmVuZCA9IHRvUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuaW5kZXggPSBNYXRoLm1pbihmcm9tUmVzdWx0LmluZGV4LCB0b1Jlc3VsdC5pbmRleCk7XG4gICAgICAgIGlmIChmcm9tUmVzdWx0LmluZGV4IDwgdG9SZXN1bHQuaW5kZXgpIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gZnJvbVJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyB0b1Jlc3VsdC50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSB0b1Jlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBmcm9tUmVzdWx0LnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgYmVmb3JlIGFuZCBhZnRlciByZXN1bHRzIChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKVxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW3RvXSAyMDIwLTAyLTEzXG4gKiAtIFdlZG5lc2RheSBbLV0gRnJpZGF5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiAvXlxccyoodG98LXxcdTIwMTN8dW50aWx8dGhyb3VnaHx0aWxsKVxccyokL2k7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi91dGlscy9kYXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZVJlc3VsdChkYXRlUmVzdWx0OiBQYXJzaW5nUmVzdWx0LCB0aW1lUmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gZGF0ZVJlc3VsdC5jbG9uZSgpO1xuICAgIGNvbnN0IGJlZ2luRGF0ZSA9IGRhdGVSZXN1bHQuc3RhcnQ7XG4gICAgY29uc3QgYmVnaW5UaW1lID0gdGltZVJlc3VsdC5zdGFydDtcblxuICAgIHJlc3VsdC5zdGFydCA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoYmVnaW5EYXRlLCBiZWdpblRpbWUpO1xuICAgIGlmIChkYXRlUmVzdWx0LmVuZCAhPSBudWxsIHx8IHRpbWVSZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGRhdGVSZXN1bHQuZW5kID09IG51bGwgPyBkYXRlUmVzdWx0LnN0YXJ0IDogZGF0ZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lUmVzdWx0LmVuZCA9PSBudWxsID8gdGltZVJlc3VsdC5zdGFydCA6IHRpbWVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZW5kRGF0ZSwgZW5kVGltZSk7XG5cbiAgICAgICAgaWYgKGRhdGVSZXN1bHQuZW5kID09IG51bGwgJiYgZW5kRGF0ZVRpbWUuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgIFwiVHVlc2RheSA5cG0gLSAxYW1cIiB0aGUgZW5kaW5nIHNob3VsZCBhY3R1YWxseSBiZSAxYW0gb24gdGhlIG5leHQgZGF5LlxuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBhZGQgdG8gZW5kaW5nIGJ5IGFub3RoZXIgZGF5LlxuICAgICAgICAgICAgY29uc3QgbmV4dERheSA9IG5ldyBEYXRlKGVuZERhdGVUaW1lLmRhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgbmV4dERheS5zZXREYXRlKG5leHREYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBseVNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5lbmQgPSBlbmREYXRlVGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRlVGltZUNvbXBvbmVudChcbiAgICBkYXRlQ29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICB0aW1lQ29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50c1xuKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGRhdGVUaW1lQ29tcG9uZW50ID0gZGF0ZUNvbXBvbmVudC5jbG9uZSgpO1xuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbnV0ZVwiKSk7XG5cbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwic2Vjb25kXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuXG4gICAgICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtaWxsaXNlY29uZFwiKSkge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbnV0ZVwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICB9XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lQ29tcG9uZW50LmdldChcInRpbWV6b25lT2Zmc2V0XCIpKTtcbiAgICB9XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9IGVsc2UgaWYgKHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgIT0gbnVsbCAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBudWxsKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IE1lcmlkaWVtLlBNICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhdGVUaW1lQ29tcG9uZW50LmFkZFRhZ3MoZGF0ZUNvbXBvbmVudC50YWdzKCkpO1xuICAgIGRhdGVUaW1lQ29tcG9uZW50LmFkZFRhZ3ModGltZUNvbXBvbmVudC50YWdzKCkpO1xuICAgIHJldHVybiBkYXRlVGltZUNvbXBvbmVudDtcbn1cbiIsICIvKlxuXG4qL1xuXG5pbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IG1lcmdlRGF0ZVRpbWVSZXN1bHQgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24vbWVyZ2luZ0NhbGN1bGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwO1xuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICgoY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkgJiYgbmV4dFJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkpIHx8XG4gICAgICAgICAgICAgICAgKG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSkgJiZcbiAgICAgICAgICAgIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpXG4gICAgICAgICAgICA/IG1lcmdlRGF0ZVRpbWVSZXN1bHQoY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdClcbiAgICAgICAgICAgIDogbWVyZ2VEYXRlVGltZVJlc3VsdChuZXh0UmVzdWx0LCBjdXJyZW50UmVzdWx0KTtcblxuICAgICAgICByZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICByZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV4dFJlc3VsdC50ZXh0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXJcIjtcblxuLyoqXG4gKiBNZXJnaW5nIGRhdGUtb25seSByZXN1bHQgYW5kIHRpbWUtb25seSByZXN1bHQgKHNlZS4gQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lcikuXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIHNob3VsZCBwcm92aWRlIEVuZ2xpc2ggY29ubmVjdGluZyBwaGFzZXNcbiAqIC0gMjAyMC0wMi0xMyBbYXRdIDZwbVxuICogLSBUb21vcnJvdyBbYWZ0ZXJdIDdhbVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeXFxcXHMqKFR8YXR8YWZ0ZXJ8YmVmb3JlfG9ufG9mfCx8LXxcXFxcLnxcdTIyMTl8Oik/XFxcXHMqJFwiKTtcbiAgICB9XG59XG4iLCAiLy8gTWFwIEFCQlIgLT4gT2Zmc2V0IGluIG1pbnV0ZVxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBUaW1lem9uZUFiYnJNYXAgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuLi8uLi90aW1lem9uZVwiO1xuXG5jb25zdCBUSU1FWk9ORV9OQU1FX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXlxcXFxzKiw/XFxcXHMqXFxcXCg/KFtBLVpdezIsNH0pXFxcXCk/KD89XFxcXFd8JClcIiwgXCJpXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGltZXpvbmVPdmVycmlkZXM/OiBUaW1lem9uZUFiYnJNYXApIHt9XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lT3ZlcnJpZGVzID0gY29udGV4dC5vcHRpb24udGltZXpvbmVzID8/IHt9O1xuXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFRJTUVaT05FX05BTUVfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lem9uZUFiYnIgPSBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgcmVmRGF0ZSA9IHJlc3VsdC5zdGFydC5kYXRlKCkgPz8gcmVzdWx0LnJlZkRhdGUgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHR6T3ZlcnJpZGVzID0geyAuLi50aGlzLnRpbWV6b25lT3ZlcnJpZGVzLCAuLi50aW1lem9uZU92ZXJyaWRlcyB9O1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgPSB0b1RpbWV6b25lT2Zmc2V0KHRpbWV6b25lQWJiciwgcmVmRGF0ZSwgdHpPdmVycmlkZXMpO1xuICAgICAgICAgICAgaWYgKGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke3RpbWV6b25lQWJicn0nIGludG86ICR7ZXh0cmFjdGVkVGltZXpvbmVPZmZzZXR9IGZvcjogJHtyZXN1bHQuc3RhcnR9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gcmVzdWx0LnN0YXJ0LmdldChcInRpbWV6b25lT2Zmc2V0XCIpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lem9uZU9mZnNldCAhPT0gbnVsbCAmJiBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCAhPSBjdXJyZW50VGltZXpvbmVPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYWxyZWFkeSBoYXZlIGV4dHJhY3RlZCB0aGUgdGltZXpvbmUgb2Zmc2V0IGUuZy4gXCIxMSBhbSBHTVQrMDkwMCAoSlNUKVwiXG4gICAgICAgICAgICAgICAgLy8gLSBpZiB0aGV5IGFyZSBlcXVhbCwgd2UgYWxzbyB3YW50IHRvIHRha2UgdGhlIGFiYnJldmlhdGlvbiB0ZXh0IGludG8gcmVzdWx0XG4gICAgICAgICAgICAgICAgLy8gLSBpZiB0aGV5IGFyZSBub3QgZXF1YWwsIHdlIHRydXN0IHRoZSBvZmZzZXQgbW9yZVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgb2Z0ZW4gYmVjYXVzZSBpdCdzIHJlbGF0aXZlIHRpbWUgd2l0aCBpbmZlcnJlZCB0aW1lem9uZSAoZS5nLiBpbiAxIGhvdXIsIHRvbW9ycm93KVxuICAgICAgICAgICAgICAgIC8vIFRoZW4sIHdlIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRpbWUgaXMgbm90IGV4cGxpY2l0bHkgbWVudGlvbmVkLFxuICAgICAgICAgICAgICAgIC8vIFRoZW4sIHdlIGFsc28gd2FudCB0byBkb3VibGUtY2hlY2sgdGhlIGFiYnIgY2FzZSAoZS5nLiBcIkdFVFwiIG5vdCBcImdldFwiKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lem9uZUFiYnIgIT0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXlxcXFxzKig/OlxcXFwoPyg/OkdNVHxVVEMpXFxcXHM/KT8oWystXSkoXFxcXGR7MSwyfSkoPzo6PyhcXFxcZHsyfSkpP1xcXFwpP1wiLCBcImlcIik7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfU0lHTl9HUk9VUCA9IDE7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVAgPSAyO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVAgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdGluZyB0aW1lem9uZTogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVBdIHx8IFwiMFwiKTtcbiAgICAgICAgICAgIGxldCB0aW1lem9uZU9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MCArIG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgIC8vIE5vIHRpbWV6b25lcyBoYXZlIG9mZnNldHMgZ3JlYXRlciB0aGFuIDE0IGhvdXJzLCBzbyBkaXNyZWdhcmQgdGhpcyBtYXRjaFxuICAgICAgICAgICAgaWYgKHRpbWV6b25lT2Zmc2V0ID4gMTQgKiA2MCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfU0lHTl9HUk9VUF0gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICAgICAgdGltZXpvbmVPZmZzZXQgPSAtdGltZXpvbmVPZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGFwUmVtb3ZhbFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gICAgICAgIGxldCBwcmV2UmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5pbmRleCA+PSBwcmV2UmVzdWx0LmluZGV4ICsgcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHByZXZSZXN1bHQpO1xuICAgICAgICAgICAgICAgIHByZXZSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIG92ZXJsYXAsIGNvbXBhcmUgdGhlIGxlbmd0aCBhbmQgZGlzY2FyZCB0aGUgc2hvcnRlciBvbmVcbiAgICAgICAgICAgIGxldCBrZXB0ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCByZW1vdmVkID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudGV4dC5sZW5ndGggPiBwcmV2UmVzdWx0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAga2VwdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gcHJldlJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2VwdCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gcmVtb3ZlICR7cmVtb3ZlZH0gYnkgJHtrZXB0fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcmV2UmVzdWx0ID0ga2VwdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBsYXN0IG9uZVxuICAgICAgICBpZiAocHJldlJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gICAgRW5mb3JjZSAnZm9yd2FyZERhdGUnIG9wdGlvbiB0byBvbiB0aGUgcmVzdWx0cy4gV2hlbiB0aGVyZSBhcmUgbWlzc2luZyBjb21wb25lbnQsXG4gICAgZS5nLiBcIk1hcmNoIDEyLTEzICh3aXRob3V0IHllYXIpXCIgb3IgXCJUaHVyc2RheVwiLCB0aGUgcmVmaW5lciB3aWxsIHRyeSB0byBhZGp1c3QgdGhlIHJlc3VsdFxuICAgIGludG8gdGhlIGZ1dHVyZSBpbnN0ZWFkIG9mIHRoZSBwYXN0LlxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCAqIGFzIGRhdGVzIGZyb20gXCIuLi8uLi91dGlscy9kYXRlc1wiO1xuaW1wb3J0IHsgaW1wbHlTaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlc1wiO1xuaW1wb3J0IHsgYWRkRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yd2FyZERhdGVSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAoIWNvbnRleHQub3B0aW9uLmZvcndhcmREYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVmRGF0ZSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSAmJiBjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50ID4gcmVzdWx0LnN0YXJ0LmRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZGb2xsb3dpbmdEYXkgPSBuZXcgRGF0ZShyZWZEYXRlKTtcbiAgICAgICAgICAgICAgICByZWZGb2xsb3dpbmdEYXkuc2V0RGF0ZShyZWZGb2xsb3dpbmdEYXkuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5zdGFydCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB0aW1lIGZyb20gdGhlIHJlZiBkYXRlICgke3JlZkRhdGV9KSB0byB0aGUgZm9sbG93aW5nIGRheSAoJHtyZWZGb2xsb3dpbmdEYXl9KWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZGF0ZSgpID4gcmVzdWx0LmVuZC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZkZvbGxvd2luZ0RheS5zZXREYXRlKHJlZkZvbGxvd2luZ0RheS5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVzLmltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmRm9sbG93aW5nRGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgcmVmRGF0ZSA+IHJlc3VsdC5zdGFydC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c1RvQWRkID0gcmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikgLSByZWZEYXRlLmdldERheSgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXlzVG9BZGQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXlzVG9BZGQgKz0gNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVmRGF0ZSA9IGFkZER1cmF0aW9uKHJlZkRhdGUsIHsgZGF5OiBkYXlzVG9BZGQgfSk7XG4gICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuc3RhcnQsIHJlZkRhdGUpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB3ZWVrZGF5ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiByZXN1bHQuZW5kLmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgZGF0ZSB0byB0aGUgY29taW5nIHdlZWtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRheXNUb0FkZCA9IHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSAtIHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlzVG9BZGQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5c1RvQWRkICs9IDc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVmRGF0ZSA9IGFkZER1cmF0aW9uKHJlZkRhdGUsIHsgZGF5OiBkYXlzVG9BZGQgfSk7XG4gICAgICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUocmVzdWx0LmVuZCwgcmVmRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJbiBjYXNlIHdoZXJlIHdlIGtub3cgdGhlIG1vbnRoLCBidXQgbm90IHdoaWNoIHllYXIgKGUuZy4gXCJpbiBEZWNlbWJlclwiLCBcIjI1dGggRGVjZW1iZXJcIiksXG4gICAgICAgICAgICAvLyB0cnkgbW92ZSB0byBhbm90aGVyIHllYXIgKHVwLXRvIDMgdGltZXMpXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHJlZkRhdGUgPiByZXN1bHQuc3RhcnQuZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzICYmIHJlZkRhdGUgPiByZXN1bHQuc3RhcnQuZGF0ZSgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZXN1bHQuc3RhcnQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHllYXIgKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwieWVhclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcInllYXJcIiwgcmVzdWx0LmVuZC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSBtb250aCAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL15cXGQqKFxcLlxcZCopPyQvKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdCAnJHtyZXN1bHQudGV4dH0nYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB3ZWVrZGF5IG9ubHkgY29tcG9uZW50OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBJU08gODYwMVxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuLy8gLSBZWVlZLU1NLUREXG4vLyAtIFlZWVktTU0tRERUaGg6bW1UWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzc1RaRFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tOnNzLnNUWkRcbi8vIC0gVFpEID0gKFogb3IgK2hoOm1tIG9yIC1oaDptbSlcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIihbMC05XXs0fSlcXFxcLShbMC05XXsxLDJ9KVxcXFwtKFswLTldezEsMn0pXCIgK1xuICAgIFwiKD86VFwiICsgLy8uLlxuICAgICAgICBcIihbMC05XXsxLDJ9KTooWzAtOV17MSwyfSlcIiArIC8vIGhoOm1tXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgXCI6KFswLTldezEsMn0pKD86XFxcXC4oXFxcXGR7MSw0fSkpP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gOnNzLnNcbiAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgXCJafChbKy1dXFxcXGR7Mn0pOj8oXFxcXGR7Mn0pP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gVFpEIChaIG9yIFx1MDBCMWhoOm1tIG9yIFx1MDBCMWhobW0gb3IgXHUwMEIxaGgpXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBIT1VSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNSU5VVEVfTlVNQkVSX0dST1VQID0gNTtcbmNvbnN0IFNFQ09ORF9OVU1CRVJfR1JPVVAgPSA2O1xuY29uc3QgTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQID0gNztcbmNvbnN0IFRaRF9HUk9VUCA9IDg7XG5jb25zdCBUWkRfSE9VUl9PRkZTRVRfR1JPVVAgPSA5O1xuY29uc3QgVFpEX01JTlVURV9PRkZTRVRfR1JPVVAgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVNPRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgIFwieWVhclwiOiBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJtb250aFwiOiBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwiZGF5XCI6IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBwYXJzZUludChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIHBhcnNlSW50KG1hdGNoW01JTlVURV9OVU1CRVJfR1JPVVBdKSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBadWx1IHRpbWUgem9uZSAoWikgaXMgZXF1aXZhbGVudCB0byBVVENcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IC09IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9JU09Gb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbi8qKlxuICogTWVyZ2Ugd2Vla2RheSBjb21wb25lbnQgaW50byBtb3JlIGNvbXBsZXRlZCBkYXRhXG4gKiAtIFtTdW5kYXldIFsxMi83LzIwMTRdID0+IFtTdW5kYXkgMTIvNy8yMDE0XVxuICogLSBbVHVlc2RheV0sIFtKYW51YXJ5IDEzLCAyMDEyXSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSBuZXh0UmVzdWx0LmNsb25lKCk7XG4gICAgICAgIG5ld1Jlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIG5ld1Jlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXdSZXN1bHQudGV4dDtcblxuICAgICAgICBuZXdSZXN1bHQuc3RhcnQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICBpZiAobmV3UmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgbmV3UmVzdWx0LmVuZC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UmVzdWx0O1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSA9XG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJlxuICAgICAgICAgICAgIWN1cnJlbnRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSAmJlxuICAgICAgICAgICAgbmV4dFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJkYXlcIik7XG4gICAgICAgIHJldHVybiB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgJiYgdGV4dEJldHdlZW4ubWF0Y2goL14sP1xccyokLykgIT0gbnVsbDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5cbmltcG9ydCBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXJcIjtcbmltcG9ydCBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIjtcbmltcG9ydCBGb3J3YXJkRGF0ZVJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lclwiO1xuaW1wb3J0IFVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlclwiO1xuaW1wb3J0IElTT0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLCBzdHJpY3RNb2RlID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICBjb25maWd1cmF0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgSVNPRm9ybWF0UGFyc2VyKCkpO1xuXG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcblxuICAgIC8vIFVubGlrZSBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLCB0aGlzIHJlZmluZXIgcmVsaWVzIG9uIGtub3dpbmcgYm90aCBkYXRlIGFuZCB0aW1lIGluIGNhc2VzIHdoZXJlIHRoZSB0elxuICAgIC8vIGlzIGFtYmlndW91cyAoaW4gdGVybXMgb2YgRFNUL25vbi1EU1QpLiBJdCB0aGVyZWZvcmUgbmVlZHMgdG8gYmUgYXBwbGllZCBhcyBsYXRlIGFzIHBvc3NpYmxlIGluIHRoZSBwYXJzaW5nLlxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBGb3J3YXJkRGF0ZVJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBVbmxpa2VseUZvcm1hdEZpbHRlcihzdHJpY3RNb2RlKSk7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgYXNzaWduU2ltaWxhclRpbWUsIGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3cocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCByZWZlcmVuY2UuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub3dcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5kZWxldGUoXCJtZXJpZGllbVwiKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvZGF5XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXkocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUJlZm9yZShyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b21vcnJvdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlLCAxKS5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9tb3Jyb3dcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVEYXlCZWZvcmUocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIG51bURheTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIC1udW1EYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIG5EYXlzOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUuZ2V0VGltZSgpKTtcbiAgICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgKyBuRGF5cyk7XG5cbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIG5ld0RhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCBuZXdEYXRlKTtcbiAgICBjb21wb25lbnQuZGVsZXRlKFwibWVyaWRpZW1cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvbmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3ROaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgaWYgKHRhcmdldERhdGUuZ2V0SG91cnMoKSA8IDYpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUuZ2V0VGltZSgpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgfVxuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheUV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICB0YXJnZXREYXRlID0gbmV3IERhdGUodGFyZ2V0RGF0ZS5nZXRUaW1lKCkgLSAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ldmVuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRuaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgaWYgKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKS5nZXRIb3VycygpID4gMikge1xuICAgICAgICAvLyBVbmxlc3MgaXQncyB2ZXJ5IGVhcmx5IG1vcm5pbmcgKDB+MkFNKSwgd2UgYXNzdW1lIHRoZSBtaWRuaWdodCBpcyB0aGUgY29taW5nIG1pZG5pZ2h0LlxuICAgICAgICAvLyBUaHVzLCBpbmNyZWFzaW5nIHRoZSBkYXkgYnkgMS5cbiAgICAgICAgY29tcG9uZW50LmFkZER1cmF0aW9uQXNJbXBsaWVkKHsgZGF5OiAxIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbWlkbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vcm5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDYpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21vcm5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVybm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMTUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2FmdGVybm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vbihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIDEyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYXRlc1wiO1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8obm93fHRvZGF5fHRvbmlnaHR8dG9tb3Jyb3d8b3Zlcm1vcnJvd3x0bXJ8dG1yd3x5ZXN0ZXJkYXl8bGFzdFxccypuaWdodCkoPz1cXFd8JCkvaTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxEYXRlUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgdGFyZ2V0RGF0ZSA9IGNvbnRleHQucmVmRGF0ZTtcbiAgICAgICAgY29uc3QgbG93ZXJUZXh0ID0gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcblxuICAgICAgICBzd2l0Y2ggKGxvd2VyVGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcIm5vd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMubm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnllc3RlcmRheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b21vcnJvd1wiOlxuICAgICAgICAgICAgY2FzZSBcInRtclwiOlxuICAgICAgICAgICAgY2FzZSBcInRtcndcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbW9ycm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwib3Zlcm1vcnJvd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudGhlRGF5QWZ0ZXIoY29udGV4dC5yZWZlcmVuY2UsIDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChsb3dlclRleHQubWF0Y2goL2xhc3RcXHMqbmlnaHQvKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RGF0ZS5nZXRIb3VycygpID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNEYXkgPSBuZXcgRGF0ZSh0YXJnZXREYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0RheS5zZXREYXRlKHByZXZpb3VzRGF5LmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHByZXZpb3VzRGF5O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbERhdGVQYXJzZXJcIik7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgKiBhcyBjYXN1YWxSZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gLyg/OnRoaXMpP1xcc3swLDN9KG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHR8bWlkbmlnaHR8bWlkZGF5fG5vb24pKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsVGltZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKG1hdGNoWzFdLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhZnRlcm5vb25cIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLmFmdGVybm9vbihjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXZlbmluZ1wiOlxuICAgICAgICAgICAgY2FzZSBcIm5pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ldmVuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtaWRuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubWlkbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1vcm5pbmdcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1vcm5pbmcoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5vb25cIjpcbiAgICAgICAgICAgIGNhc2UgXCJtaWRkYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hZGRUYWcoXCJwYXJzZXIvRU5DYXN1YWxUaW1lUGFyc2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFdlZWtkYXkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgaW1wbHlTaW1pbGFyVGltZSB9IGZyb20gXCIuLi91dGlscy9kYXRlc1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcnNpbmcgY29tcG9uZW50cyBhdCB0aGUgd2Vla2RheSAoY29uc2lkZXJpbmcgdGhlIG1vZGlmaWVyKS4gVGhlIHRpbWUgYW5kIHRpbWV6b25lIGlzIGFzc3VtZSB0byBiZVxuICogc2ltaWxhciB0byB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHJlZmVyZW5jZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgIHdlZWtkYXk6IFdlZWtkYXksXG4gICAgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCJcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCByZWZEYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGRheXNUb1dlZWtkYXkgPSBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXksIG1vZGlmaWVyKTtcblxuICAgIGxldCBjb21wb25lbnRzID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgY29tcG9uZW50cyA9IGNvbXBvbmVudHMuYWRkRHVyYXRpb25Bc0ltcGxpZWQoeyBkYXk6IGRheXNUb1dlZWtkYXkgfSk7XG4gICAgY29tcG9uZW50cy5hc3NpZ24oXCJ3ZWVrZGF5XCIsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogUmV0dXJucyBudW1iZXIgb2YgZGF5cyBmcm9tIHJlZkRhdGUgdG8gdGhlIHdlZWtkYXkuIFRoZSByZWZEYXRlIGRhdGUgYW5kIHRpbWV6b25lIGluZm9ybWF0aW9uIGlzIHVzZWQuXG4gKiBAcGFyYW0gcmVmRGF0ZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSwgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpIGFzIFdlZWtkYXk7XG4gICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICBjYXNlIFwidGhpc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICBjYXNlIFwibGFzdFwiOlxuICAgICAgICAgICAgcmV0dXJuIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcbiAgICAgICAgICAgIC8vIEZyb20gU3VuZGF5LCB0aGUgbmV4dCBTdW5kYXkgaXMgNyBkYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAxIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAyIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLiwgKHJldHVybiBlbnVtIHZhbHVlKVxuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSA/IDcgOiB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSBTYXR1cmRheSwgdGhlIG5leHQgU2F0dXJkYXkgaXMgNyBkYXlzIGxhdGVyLCB0aGUgbmV4dCBTdW5kYXkgaXMgOC1kYXlzIGxhdGVyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBuZXh0IE1vbiBpcyAoMSArIDEpIGRheXMgbGF0ZXIsIG5leHQgVHVlcyBpcyAoMSArIDIpIGRheXMgbGF0ZXIsIGFuZCBzbyBvbi4uLixcbiAgICAgICAgICAgIC8vIChyZXR1cm4sIDIgKyBbZW51bSB2YWx1ZV0gZGF5cylcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU0FUVVJEQVkpIHtcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSByZXR1cm4gNztcbiAgICAgICAgICAgICAgICBpZiAod2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSkgcmV0dXJuIDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgKyB3ZWVrZGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRnJvbSB3ZWVrZGF5cywgbmV4dCBNb24gaXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgTW9uLCBuZXh0IFR1ZXMgdGhlIGZvbGxvd2luZyB3ZWVrJ3MgVHVlcywgYW5kIHNvIG9uLi4uXG4gICAgICAgICAgICAvLyBJZiB0aGUgd2VlaydzIHdlZWtkYXkgYWxyZWFkeSBwYXNzZWQgKHdlZWtkYXkgPCByZWZXZWVrZGF5KSwgd2Ugc2ltcGx5IGNvdW50IGZvcndhcmQgdG8gbmV4dCB3ZWVrXG4gICAgICAgICAgICAvLyAoc2ltaWxhciB0byAndGhpcycpLiBPdGhlcndpc2UsIGNvdW50IGZvcndhcmQgdG8gdGhpcyB3ZWVrLCB0aGVuIGFkZCBhbm90aGVyIDcgZGF5cy5cbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgcmVmV2Vla2RheSAmJiB3ZWVrZGF5ICE9IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSkgKyA3O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZSwgd2Vla2RheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5Q2xvc2VzdChyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCBiYWNrd2FyZCA9IGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG5cbiAgICByZXR1cm4gZm9yd2FyZCA8IC1iYWNrd2FyZCA/IGZvcndhcmQgOiBiYWNrd2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXkpOiBudW1iZXIge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBmb3J3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoZm9yd2FyZENvdW50IDwgMCkge1xuICAgICAgICBmb3J3YXJkQ291bnQgKz0gNztcbiAgICB9XG4gICAgcmV0dXJuIGZvcndhcmRDb3VudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgYmFja3dhcmRDb3VudCA9IHdlZWtkYXkgLSByZWZXZWVrZGF5O1xuICAgIGlmIChiYWNrd2FyZENvdW50ID49IDApIHtcbiAgICAgICAgYmFja3dhcmRDb3VudCAtPSA3O1xuICAgIH1cbiAgICByZXR1cm4gYmFja3dhcmRDb3VudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IFdFRUtEQVlfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3dlZWtkYXlzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKD86KD86XFxcXCx8XFxcXCh8XFxcXFx1RkYwOClcXFxccyopP1wiICtcbiAgICAgICAgXCIoPzpvblxcXFxzKj8pP1wiICtcbiAgICAgICAgXCIoPzoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyopP1wiICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihXRUVLREFZX0RJQ1RJT05BUlkpfXx3ZWVrZW5kfHdlZWtkYXkpYCArXG4gICAgICAgIFwiKD86XFxcXHMqKD86XFxcXCx8XFxcXCl8XFxcXFx1RkYwOSkpP1wiICtcbiAgICAgICAgXCIoPzpcXFxccyoodGhpc3xsYXN0fHBhc3R8bmV4dClcXFxccyp3ZWVrKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgUFJFRklYX0dST1VQID0gMTtcbmNvbnN0IFdFRUtEQVlfR1JPVVAgPSAyO1xuY29uc3QgUE9TVEZJWF9HUk9VUCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOV2Vla2RheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoW1BSRUZJWF9HUk9VUF07XG4gICAgICAgIGNvbnN0IHBvc3RmaXggPSBtYXRjaFtQT1NURklYX0dST1VQXTtcbiAgICAgICAgbGV0IG1vZGlmaWVyV29yZCA9IHByZWZpeCB8fCBwb3N0Zml4O1xuICAgICAgICBtb2RpZmllcldvcmQgPSBtb2RpZmllcldvcmQgfHwgXCJcIjtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcbiAgICAgICAgaWYgKG1vZGlmaWVyV29yZCA9PSBcImxhc3RcIiB8fCBtb2RpZmllcldvcmQgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJsYXN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibmV4dFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcInRoaXNcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcInRoaXNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdlZWtkYXlfd29yZCA9IG1hdGNoW1dFRUtEQVlfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB3ZWVrZGF5O1xuICAgICAgICBpZiAoV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2Vla2RheSA9IFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdO1xuICAgICAgICB9IGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtlbmRcIikge1xuICAgICAgICAgICAgLy8gVGhpcyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gJ1RoaXMvbmV4dCB3ZWVrZW5kJyBtZWFucyB0aGUgY29taW5nIFNhdHVyZGF5LCAnbGFzdCB3ZWVrZW5kJyBtZWFucyBsYXN0IFN1bmRheS5cbiAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuU1VOREFZIDogV2Vla2RheS5TQVRVUkRBWTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZGF5XCIpIHtcbiAgICAgICAgICAgIC8vIEluIEVuZ2xpc2gsIHRoZSBcIndlZWtkYXlcIiBtZWFucyBhbnkgZGF5IG9mIHRoZSB3ZWVrIGV4Y2VwdCB3ZWVrZW5kLlxuICAgICAgICAgICAgLy8gVGhpcyBhbHNvIGRlcGVuZHMgb24gd2hhdCBkYXlzIGFyZSB3ZWVrZW5kIHNldHRpbmcsIGJ1dCB0eXBpY2FsbHk6XG4gICAgICAgICAgICAvLyAtIE9uIHdlZWtlbmQgcmVmLCB0aGlzIG1lYW5zIHRoZSBjb21pbmcgTW9uZGF5IG9yIGxhc3QgRnJpZGF5LlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZGF5IHJlZiwgdGhpcyBtZWFucyB0aGUgbmV4dC9sYXN0IHdvcmtpbmcgZGF5LlxuICAgICAgICAgICAgY29uc3QgcmVmV2Vla2RheSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgfHwgcmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5GUklEQVkgOiBXZWVrZGF5Lk1PTkRBWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHJlZldlZWtkYXkgLSAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IHdlZWtkYXkgLSAxIDogd2Vla2RheSArIDE7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9ICh3ZWVrZGF5ICUgNSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkoY29udGV4dC5yZWZlcmVuY2UsIHdlZWtkYXksIG1vZGlmaWVyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyXFxcXHMqdGhpcylcXFxccyooJHttYXRjaEFueVBhdHRlcm4oVElNRV9VTklUX0RJQ1RJT05BUlkpfSkoPz1cXFxccyopYCArIFwiKD89XFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgTU9ESUZJRVJfV09SRF9HUk9VUCA9IDE7XG5jb25zdCBSRUxBVElWRV9XT1JEX0dST1VQID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IG1vZGlmaWVyID0gbWF0Y2hbTU9ESUZJRVJfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdW5pdFdvcmQgPSBtYXRjaFtSRUxBVElWRV9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0aW1ldW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW3VuaXRXb3JkXTtcblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJuZXh0XCIgfHwgbW9kaWZpZXIuc3RhcnRzV2l0aChcImFmdGVyXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RpZmllciA9PSBcImxhc3RcIiB8fCBtb2RpZmllciA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gLTE7XG4gICAgICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShjb250ZXh0LnJlZmVyZW5jZS5pbnN0YW50LmdldFRpbWUoKSk7XG5cbiAgICAgICAgLy8gVGhpcyB3ZWVrXG4gICAgICAgIGlmICh1bml0V29yZC5tYXRjaCgvd2Vlay9pKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF0ZS5nZXREYXkoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIG1vbnRoXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC9tb250aC9pKSkge1xuICAgICAgICAgICAgZGF0ZS5zZXREYXRlKDEpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIHllYXJcbiAgICAgICAgZWxzZSBpZiAodW5pdFdvcmQubWF0Y2goL3llYXIvaSkpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgIGRhdGUuc2V0TW9udGgoMCk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyLCBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuXG4vKipcbiAqIERhdGUgZm9ybWF0IHdpdGggc2xhc2ggXCIvXCIgKG9yIGRvdCBcIi5cIikgYmV0d2VlbiBudW1iZXJzLlxuICogRm9yIGV4YW1wbGVzOlxuICogLSA3LzEwXG4gKiAtIDcvMTIvMjAyMFxuICogLSA3LjEyLjIwMjBcbiAqL1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoW15cXFxcZF18XilcIiArXG4gICAgICAgIFwiKFswLTNdezAsMX1bMC05XXsxfSlbXFxcXC9cXFxcLlxcXFwtXShbMC0zXXswLDF9WzAtOV17MX0pXCIgK1xuICAgICAgICBcIig/OltcXFxcL1xcXFwuXFxcXC1dKFswLTldezR9fFswLTldezJ9KSk/XCIgK1xuICAgICAgICBcIihcXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBPUEVOSU5HX0dST1VQID0gMTtcbmNvbnN0IEVORElOR19HUk9VUCA9IDU7XG5cbmNvbnN0IEZJUlNUX05VTUJFUlNfR1JPVVAgPSAyO1xuY29uc3QgU0VDT05EX05VTUJFUlNfR1JPVVAgPSAzO1xuXG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBncm91cE51bWJlck1vbnRoOiBudW1iZXI7XG4gICAgZ3JvdXBOdW1iZXJEYXk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGxpdHRsZUVuZGlhbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyTW9udGggPSBsaXR0bGVFbmRpYW4gPyBTRUNPTkRfTlVNQkVSU19HUk9VUCA6IEZJUlNUX05VTUJFUlNfR1JPVVA7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJEYXkgPSBsaXR0bGVFbmRpYW4gPyBGSVJTVF9OVU1CRVJTX0dST1VQIDogU0VDT05EX05VTUJFUlNfR1JPVVA7XG4gICAgfVxuXG4gICAgcGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICAvLyBCZWNhdXNlIG9mIGhvdyBwYXR0ZXJuIGlzIGV4ZWN1dGVkIG9uIHJlbWFpbmluZyB0ZXh0IGluIGBjaHJvbm8udHNgLCB0aGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgbWF0Y2ggY291bGRcbiAgICAgICAgLy8gc3RpbGwgYmUgYSBudW1iZXIgKGUuZy4gWFtYL1lZL1paXSBvciBYWFsvWVkvWlpdIG9yIFtYWC9ZWS9dWlopLiBXZSB3YW50IHRvIGNoZWNrIGFuZCBza2lwIHRoZW0uXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGluZGV4RW5kID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBtYXRjaFtFTkRJTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRleHRCZWZvcmUubWF0Y2goXCJcXFxcZC8/JFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhFbmQgPCBjb250ZXh0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4RW5kKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubWF0Y2goXCJeLz9cXFxcZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4LCBpbmRleEVuZCk7XG5cbiAgICAgICAgLy8gJzEuMTInLCAnMS4xMi4xMicgaXMgbW9yZSBsaWtlIGEgdmVyc2lvbiBudW1iZXJzXG4gICAgICAgIGlmICh0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkJC8pIHx8IHRleHQubWF0Y2goL15cXGRcXC5cXGR7MSwyfVxcLlxcZHsxLDJ9XFxzKiQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTU0vZGQgLT4gT0tcbiAgICAgICAgLy8gTU0uZGQgLT4gTkdcbiAgICAgICAgaWYgKCFtYXRjaFtZRUFSX0dST1VQXSAmJiB0ZXh0LmluZGV4T2YoXCIvXCIpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0KTtcbiAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlck1vbnRoXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyRGF5XSk7XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyICYmIG1vbnRoIDw9IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkYXksIG1vbnRoXSA9IFttb250aCwgZGF5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiZGF5XCIsIGRheSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJtb250aFwiLCBtb250aCk7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmFkZFRhZyhcInBhcnNlci9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VEdXJhdGlvbiwgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgcmV2ZXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlcnxcXFxcK3wtKVxcXFxzKigke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBQQVRURVJOX05PX0FCQlIgPSBuZXcgUmVnRXhwKFxuICAgIGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlcnxcXFxcK3wtKVxcXFxzKigke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsbG93QWJicmV2aWF0aW9uczogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dBYmJyZXZpYXRpb25zID8gUEFUVEVSTiA6IFBBVFRFUk5fTk9fQUJCUjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24obWF0Y2hbMl0pO1xuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCBkdXJhdGlvbik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlRHVyYXRpb24gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZXZlcnNlRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuZnVuY3Rpb24gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL15bKy1dL2kpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eLS9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGNvbWVzIGFmdGVyIGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyMDIwLTAyLTEzXSBbKzIgd2Vla3NdXG4gKiAtIFtuZXh0IHR1ZXNkYXldIFsrMTAgZGF5c11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKC9eXFxzKiQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpIHx8IElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIGNvbnRleHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlRHVyYXRpb24obmV4dFJlc3VsdC50ZXh0KTtcbiAgICAgICAgaWYgKElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VEdXJhdGlvbih0aW1lVW5pdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgICAgIFJlZmVyZW5jZVdpdGhUaW1lem9uZS5mcm9tRGF0ZShjdXJyZW50UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICB0aW1lVW5pdHNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBwYXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYmVmb3JlfGZyb20pJC9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhhZnRlcnxzaW5jZSkkL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgZm9sbG93IGJ5IGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyIHdlZWtzIGJlZm9yZV0gWzIwMjAtMDItMTNdXG4gKiAtIFsyIGRheXMgYWZ0ZXJdIFtuZXh0IEZyaWRheV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqJC9pO1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIERhdGVzIG5lZWQgdG8gYmUgbmV4dCB0byBlYWNoIG90aGVyIHRvIGdldCBtZXJnZWRcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgcmVsYXRpdmUgdG9rZW5zIHdlcmUgc3dhbGxvd2VkIGJ5IHRoZSBmaXJzdCBkYXRlLlxuICAgICAgICAvLyBFLmcuIFs8cmVsYXRpdmVfZGF0ZTE+IGZyb21dIFs8ZGF0ZTI+XVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgPGRhdGUyPiBpbXBsaWVzIGFuIGFic29sdXRlIGRhdGVcbiAgICAgICAgcmV0dXJuICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJkYXlcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcIm1vbnRoXCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24oY3VycmVudFJlc3VsdC50ZXh0KTtcbiAgICAgICAgaWYgKGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSByZXZlcnNlRHVyYXRpb24oZHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShcbiAgICAgICAgICAgIFJlZmVyZW5jZVdpdGhUaW1lem9uZS5mcm9tRGF0ZShuZXh0UmVzdWx0LnN0YXJ0LmRhdGUoKSksXG4gICAgICAgICAgICBkdXJhdGlvblxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIG5leHRSZXN1bHQucmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXN1bHQudGV4dH0ke3RleHRCZXR3ZWVufSR7bmV4dFJlc3VsdC50ZXh0fWAsXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgWUVBUl9TVUZGSVhfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYF5cXFxccyooJHtZRUFSX1BBVFRFUk59KWAsIFwiaVwiKTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAxO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gWUVBUl9TVUZGSVhfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHN1ZmZpeCBtYXRjaCBpcyBqdXN0IGEgc2hvcnQgbnVtYmVyLCBlLmcuIFwiMTQvNCA5MFwiLCBkb24ndCBhc3N1bWUgaXQgeWVhci5cbiAgICAgICAgICAgIGlmIChtYXRjaFswXS50cmltKCkubGVuZ3RoIDw9IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0cmFjdGluZyB5ZWFyOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gcmVzdWx0LnRleHQudHJpbSgpO1xuXG4gICAgICAgIC8vIElmIHRoZSByZXN1bHQgaXMgY29uc2lzdHMgb2YgdGhlIHdob2xlIHRleHQgKGUuZy4gXCIyMDI0XCIsIFwiTWF5XCIsIGV0YyksXG4gICAgICAgIC8vIHRoZW4gaXQgaXMgdW5saWtlbHkgdG8gYmUgYSBkYXRlLlxuICAgICAgICBpZiAodGV4dCA9PT0gY29udGV4dC50ZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBFbmdsaXNoLCB0aGUgd29yZCBcIm1heVwiIGlzIGEgbW9udGggbmFtZSwgYnV0IGl0IGlzIGFsc28gYSBtb2RhbCB2ZXJiLlxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdGV4dCBiZWZvcmUgXCJtYXlcIiBmb2xsb3dzIHNvbWUgYWxsb3dlZCBwYXR0ZXJucy5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKSA9PT0gXCJtYXlcIikge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgcmVzdWx0LmluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHRCZWZvcmUubWF0Y2goL1xcYihpbikkL2kpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgXCJ0aGUgc2Vjb25kXCIgY291bGQgcmVmZXIgdG8gdGhlIG9yZGluYWwgbnVtYmVyIG9yIHRpbWV1bml0LlxuICAgICAgICBpZiAodGV4dC50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKFwidGhlIHNlY29uZFwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuXG5pbXBvcnQgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXJcIjtcbmltcG9ydCBFTlllYXJNb250aERheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOWWVhck1vbnRoRGF5UGFyc2VyXCI7XG5pbXBvcnQgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lRXhwcmVzc2lvblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbmltcG9ydCB7IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3VyYXRpb25zXCI7XG5pbXBvcnQgRU5DYXN1YWxEYXRlUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyXCI7XG5pbXBvcnQgRU5DYXN1YWxUaW1lUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5XZWVrZGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyXCI7XG5pbXBvcnQgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlclwiO1xuXG5pbXBvcnQgU2xhc2hEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuLi8uLi9jb21tb24vcGFyc2Vycy9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXJcIjtcbmltcG9ydCBFTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXJcIjtcbmltcG9ydCBPdmVybGFwUmVtb3ZhbFJlZmluZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIjtcbmltcG9ydCBFTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lclwiO1xuaW1wb3J0IEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5Vbmxpa2VseUZvcm1hdEZpbHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkRlZmF1bHRDb25maWd1cmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkZWZhdWx0ICpjYXN1YWwqIHtATGluayBDb25maWd1cmF0aW9ufSBmb3IgRW5nbGlzaCBjaHJvbm8uXG4gICAgICogSXQgY2FsbHMge0BMaW5rIGNyZWF0ZUNvbmZpZ3VyYXRpb259IGFuZCBpbmNsdWRlcyBhZGRpdGlvbmFsIHBhcnNlcnMuXG4gICAgICovXG4gICAgY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihsaXR0bGVFbmRpYW4gPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSB0aGlzLmNyZWF0ZUNvbmZpZ3VyYXRpb24oZmFsc2UsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsRGF0ZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5DYXN1YWxUaW1lUGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTk1vbnRoTmFtZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnJlZmluZXJzLnB1c2gobmV3IEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIoKSk7XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaWN0TW9kZSBJZiB0aGUgdGltZXVuaXQgbWVudGlvbmluZyBzaG91bGQgYmUgc3RyaWN0LCBub3QgY2FzdWFsXG4gICAgICogQHBhcmFtIGxpdHRsZUVuZGlhbiBJZiBmb3JtYXQgc2hvdWxkIGJlIGRhdGUtZmlyc3QvbGl0dGxlRW5kaWFuIChlLmcuIGVuX1VLKSwgbm90IG1vbnRoLWZpcnN0L21pZGRsZUVuZGlhbiAoZS5nLiBlbl9VUylcbiAgICAgKi9cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uKHN0cmljdE1vZGUgPSB0cnVlLCBsaXR0bGVFbmRpYW4gPSBmYWxzZSk6IENvbmZpZ3VyYXRpb24ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyc2VyczogW1xuICAgICAgICAgICAgICAgICAgICBuZXcgU2xhc2hEYXRlRm9ybWF0UGFyc2VyKGxpdHRsZUVuZGlhbiksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyKC8qc2hvdWxkU2tpcFllYXJMaWtlRGF0ZT0qLyBsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5XZWVrZGF5UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZUV4cHJlc3Npb25QYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgcmVmaW5lcnM6IFtuZXcgRU5NZXJnZURhdGVUaW1lUmVmaW5lcigpXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHJpY3RNb2RlXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMucGFyc2Vycy51bnNoaWZ0KG5ldyBFTlllYXJNb250aERheVBhcnNlcigvKnN0cmljdE1vbnRoRGF0ZU9yZGVyPSovIHN0cmljdE1vZGUpKTtcblxuICAgICAgICAvLyBUaGVzZSByZWxhdGl2ZS1kYXRlcyBjb25zaWRlcmF0aW9uIHNob3VsZCBiZSBkb25lIGJlZm9yZSBvdGhlciBjb21tb24gcmVmaW5lcnMuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcblxuICAgICAgICAvLyBSZS1hcHBseSB0aGUgZGF0ZSB0aW1lIHJlZmluZXIgYWdhaW4gYWZ0ZXIgdGhlIHRpbWV6b25lIHJlZmluZW1lbnQgYW5kIGV4Y2x1c2lvbiBpbiBjb21tb24gcmVmaW5lcnMuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5NZXJnZURhdGVUaW1lUmVmaW5lcigpKTtcblxuICAgICAgICAvLyBFeHRyYWN0IHllYXIgYWZ0ZXIgbWVyZ2luZyBkYXRlIGFuZCB0aW1lXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gS2VlcCB0aGUgZGF0ZSByYW5nZSByZWZpbmVyIGF0IHRoZSBlbmQgKGFmdGVyIGFsbCBvdGhlciByZWZpbmVtZW50cykuXG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMucHVzaChuZXcgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIoKSk7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQXN5bmNEZWJ1Z0Jsb2NrLCBEZWJ1Z0hhbmRsZXIgfSBmcm9tIFwiLi9kZWJ1Z2dpbmdcIjtcbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2xvY2FsZXMvZW4vY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuL3RpbWV6b25lXCI7XG5cbi8qKlxuICogQ2hyb25vIGNvbmZpZ3VyYXRpb24uXG4gKiBJdCBpcyBzaW1wbHkgYW4gb3JkZXJlZCBsaXN0IG9mIHBhcnNlcnMgYW5kIHJlZmluZXJzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XG4gICAgcGFyc2VyczogUGFyc2VyW107XG4gICAgcmVmaW5lcnM6IFJlZmluZXJbXTtcbn1cblxuLyoqXG4gKiBBbiBhYnN0cmFjdGlvbiBmb3IgQ2hyb25vICpQYXJzZXIqLlxuICpcbiAqIEVhY2ggcGFyc2VyIHNob3VsZCByZWNvZ25pemUgYW5kIGhhbmRsZSBhIGNlcnRhaW4gZGF0ZSBmb3JtYXQuXG4gKiBDaHJvbm8gdXNlcyBtdWx0aXBsZSBwYXJzZXMgKGFuZCByZWZpbmVycykgdG9nZXRoZXIgZm9yIHBhcnNpbmcgdGhlIGlucHV0LlxuICpcbiAqIFRoZSBwYXJzZXIgaW1wbGVtZW50YXRpb24gbXVzdCBwcm92aWRlIHtATGluayBwYXR0ZXJuIHwgcGF0dGVybigpfSBmb3IgdGhlIGRhdGUgZm9ybWF0LlxuICpcbiAqIFRoZSB7QExpbmsgZXh0cmFjdCB8IGV4dHJhY3QoKX0gbWV0aG9kIGlzIGNhbGxlZCB3aXRoIHRoZSBwYXR0ZXJuJ3MgKm1hdGNoKi5cbiAqIFRoZSBtYXRjaGluZyBhbmQgZXh0cmFjdGluZyBpcyBjb250cm9sbGVkIGFuZCBhZGp1c3RlZCB0byBhdm9pZCBmb3Igb3ZlcmxhcHBpbmcgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZXIge1xuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgZXh0cmFjdChcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHwgeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBudWxsO1xufVxuXG4vKipcbiAqIEEgYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUmVmaW5lciouXG4gKlxuICogRWFjaCByZWZpbmVyIHRha2VzIHRoZSBsaXN0IG9mIHJlc3VsdHMgKGZyb20gcGFyc2VycyBvciBvdGhlciByZWZpbmVycykgYW5kIHJldHVybnMgYW5vdGhlciBsaXN0IG9mIHJlc3VsdHMuXG4gKiBDaHJvbm8gYXBwbGllcyBlYWNoIHJlZmluZXIgaW4gb3JkZXIgYW5kIHJldHVybiB0aGUgb3V0cHV0IGZyb20gdGhlIGxhc3QgcmVmaW5lci5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZpbmVyIHtcbiAgICByZWZpbmU6IChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKSA9PiBQYXJzaW5nUmVzdWx0W107XG59XG5cbi8qKlxuICogVGhlIENocm9ubyBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xuICAgIHBhcnNlcnM6IEFycmF5PFBhcnNlcj47XG4gICAgcmVmaW5lcnM6IEFycmF5PFJlZmluZXI+O1xuXG4gICAgZGVmYXVsdENvbmZpZyA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uPzogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBjb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbiB8fCB0aGlzLmRlZmF1bHRDb25maWcuY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbigpO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbLi4uY29uZmlndXJhdGlvbi5wYXJzZXJzXTtcbiAgICAgICAgdGhpcy5yZWZpbmVycyA9IFsuLi5jb25maWd1cmF0aW9uLnJlZmluZXJzXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIENocm9ubyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBjb25maWd1cmF0aW9uIChgcGFyc2Vyc2AgYW5kIGByZWZpbmVyc2ApXG4gICAgICovXG4gICAgY2xvbmUoKTogQ2hyb25vIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDaHJvbm8oe1xuICAgICAgICAgICAgcGFyc2VyczogWy4uLnRoaXMucGFyc2Vyc10sXG4gICAgICAgICAgICByZWZpbmVyczogWy4uLnRoaXMucmVmaW5lcnNdLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHNob3J0Y3V0IGZvciBjYWxsaW5nIHtATGluayBwYXJzZSB8IHBhcnNlKCkgfSB0aGVuIHRyYW5zZm9ybSB0aGUgcmVzdWx0IGludG8gSmF2YXNjcmlwdCdzIERhdGUgb2JqZWN0XG4gICAgICogQHJldHVybiBEYXRlIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIGZpcnN0IHBhcnNlIHJlc3VsdFxuICAgICAqL1xuICAgIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IHRoaXMucGFyc2UodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMubGVuZ3RoID4gMCA/IHJlc3VsdHNbMF0uc3RhcnQuZGF0ZSgpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZmVyZW5jZURhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBQYXJzaW5nQ29udGV4dCh0ZXh0LCByZWZlcmVuY2VEYXRlLCBvcHRpb24pO1xuXG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlc3VsdHMgPSBDaHJvbm8uZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpO1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChyZWZpbmVyKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gcmVmaW5lci5yZWZpbmUoY29udGV4dCwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGV4ZWN1dGVQYXJzZXIoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHBhcnNlcjogUGFyc2VyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHBhcnNlci5wYXR0ZXJuKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcblxuICAgICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtYXRjaCBpbmRleCBvbiB0aGUgZnVsbCB0ZXh0O1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG9yaWdpbmFsVGV4dC5sZW5ndGggLSByZW1haW5pbmdUZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5leHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgZmFpbHMsIG1vdmUgb24gYnkgMVxuICAgICAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0LnN0YXJ0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRJbmRleCA9IHBhcnNlZFJlc3VsdC5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFRleHQgPSBwYXJzZWRSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXJzZXIuY29uc3RydWN0b3IubmFtZX0gZXh0cmFjdGVkIChhdCBpbmRleD0ke3BhcnNlZEluZGV4fSkgJyR7cGFyc2VkVGV4dH0nYClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwYXJzZWRSZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcocGFyc2VkSW5kZXggKyBwYXJzZWRUZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb250ZXh0IGltcGxlbWVudHMgRGVidWdIYW5kbGVyIHtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb3B0aW9uOiBQYXJzaW5nT3B0aW9uO1xuICAgIHJlYWRvbmx5IHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQuIFVzZSBgcmVmZXJlbmNlLmluc3RhbnRgIGluc3RlYWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmRGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgcmVmRGF0ZT86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uID8/IHt9O1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IFJlZmVyZW5jZVdpdGhUaW1lem9uZS5mcm9tSW5wdXQocmVmRGF0ZSwgdGhpcy5vcHRpb24udGltZXpvbmVzKTtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gdGhpcy5yZWZlcmVuY2UuaW5zdGFudDtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhjb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudHMgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlLCBjb21wb25lbnRzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQYXJzaW5nUmVzdWx0KFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICAgICB0ZXh0T3JFbmRJbmRleDogbnVtYmVyIHwgc3RyaW5nLFxuICAgICAgICBzdGFydENvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50c1xuICAgICk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCB0ZXh0ID0gdHlwZW9mIHRleHRPckVuZEluZGV4ID09PSBcInN0cmluZ1wiID8gdGV4dE9yRW5kSW5kZXggOiB0aGlzLnRleHQuc3Vic3RyaW5nKGluZGV4LCB0ZXh0T3JFbmRJbmRleCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHN0YXJ0Q29tcG9uZW50cykgOiBudWxsO1xuICAgICAgICBjb25zdCBlbmQgPSBlbmRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhlbmRDb21wb25lbnRzKSA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KHRoaXMucmVmZXJlbmNlLCBpbmRleCwgdGV4dCwgc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgZGVidWcoYmxvY2s6IEFzeW5jRGVidWdCbG9jayk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyOiBEZWJ1Z0hhbmRsZXIgPSA8RGVidWdIYW5kbGVyPnRoaXMub3B0aW9uLmRlYnVnO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwgIi8qKlxuICogQ2hyb25vIGNvbXBvbmVudHMgZm9yIEVuZ2xpc2ggc3VwcG9ydCAoKnBhcnNlcnMqLCAqcmVmaW5lcnMqLCBhbmQgKmNvbmZpZ3VyYXRpb24qKVxuICpcbiAqIEBtb2R1bGVcbiAqL1xuXG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIsIFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfTtcbmV4cG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9O1xuXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBFTkRlZmF1bHRDb25maWd1cmF0aW9uKCk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpjYXN1YWwqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IGNhc3VhbCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDYXN1YWxDb25maWd1cmF0aW9uKGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpzdHJpY3QqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDb25maWd1cmF0aW9uKHRydWUsIGZhbHNlKSk7XG5cbi8qKlxuICogQ2hyb25vIG9iamVjdCBjb25maWd1cmVkIGZvciBwYXJzaW5nICpVSy1zdHlsZSogRW5nbGlzaFxuICovXG5leHBvcnQgY29uc3QgR0IgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbih0cnVlKSk7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlKClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3IgZW4uY2FzdWFsLnBhcnNlRGF0ZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbiIsICJpbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi9sb2NhbGVzL2VuXCI7XG5pbXBvcnQgeyBDaHJvbm8sIFBhcnNlciwgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgeyBlbiwgQ2hyb25vLCBQYXJzZXIsIFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuLy8gRXhwb3J0IGFsbCBsb2NhbGVzXG5pbXBvcnQgKiBhcyBkZSBmcm9tIFwiLi9sb2NhbGVzL2RlXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi9sb2NhbGVzL2ZyXCI7XG5pbXBvcnQgKiBhcyBqYSBmcm9tIFwiLi9sb2NhbGVzL2phXCI7XG5pbXBvcnQgKiBhcyBwdCBmcm9tIFwiLi9sb2NhbGVzL3B0XCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi9sb2NhbGVzL25sXCI7XG5pbXBvcnQgKiBhcyB6aCBmcm9tIFwiLi9sb2NhbGVzL3poXCI7XG5pbXBvcnQgKiBhcyBydSBmcm9tIFwiLi9sb2NhbGVzL3J1XCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi9sb2NhbGVzL2VzXCI7XG5pbXBvcnQgKiBhcyB1ayBmcm9tIFwiLi9sb2NhbGVzL3VrXCI7XG5pbXBvcnQgKiBhcyBpdCBmcm9tIFwiLi9sb2NhbGVzL2l0XCI7XG5pbXBvcnQgKiBhcyBzdiBmcm9tIFwiLi9sb2NhbGVzL3N2XCI7XG5cbmV4cG9ydCB7IGRlLCBmciwgamEsIHB0LCBubCwgemgsIHJ1LCBlcywgdWssIGl0LCBzdiB9O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5zdHJpY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3QgPSBlbi5zdHJpY3Q7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNhc3VhbCA9IGVuLmNhc3VhbDtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlKCl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWwucGFyc2VEYXRlKCl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IERhdGUgfCBudWxsIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLG9DQUFBQSxVQUFBQyxTQUFBO0FBQUEsTUFBQyxTQUFTLEdBQUUsR0FBRTtBQUFDLGtCQUFVLE9BQU9ELFlBQVMsZUFBYSxPQUFPQyxVQUFPQSxRQUFPLFVBQVEsRUFBRSxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPLENBQUMsS0FBRyxJQUFFLGVBQWEsT0FBTyxhQUFXLGFBQVcsS0FBRyxNQUFNLFFBQU0sRUFBRTtBQUFBLElBQUMsR0FBRUQsV0FBTSxXQUFVO0FBQUM7QUFBYSxVQUFJLElBQUUsS0FBSSxJQUFFLEtBQUksSUFBRSxNQUFLLElBQUUsZUFBYyxJQUFFLFVBQVMsSUFBRSxVQUFTLElBQUUsUUFBTyxJQUFFLE9BQU0sSUFBRSxRQUFPLElBQUUsU0FBUSxJQUFFLFdBQVUsSUFBRSxRQUFPLElBQUUsUUFBTyxJQUFFLGdCQUFlLElBQUUsOEZBQTZGLElBQUUsdUZBQXNGLElBQUUsRUFBQyxNQUFLLE1BQUssVUFBUywyREFBMkQsTUFBTSxHQUFHLEdBQUUsUUFBTyx3RkFBd0YsTUFBTSxHQUFHLEdBQUUsU0FBUSxTQUFTRSxJQUFFO0FBQUMsWUFBSUMsS0FBRSxDQUFDLE1BQUssTUFBSyxNQUFLLElBQUksR0FBRUMsS0FBRUYsS0FBRTtBQUFJLGVBQU0sTUFBSUEsTUFBR0MsSUFBR0MsS0FBRSxNQUFJLEVBQUUsS0FBR0QsR0FBRUMsRUFBQyxLQUFHRCxHQUFFLENBQUMsS0FBRztBQUFBLE1BQUcsRUFBQyxHQUFFLElBQUUsU0FBU0QsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUlDLEtBQUUsT0FBT0gsRUFBQztBQUFFLGVBQU0sQ0FBQ0csTUFBR0EsR0FBRSxVQUFRRixLQUFFRCxLQUFFLEtBQUcsTUFBTUMsS0FBRSxJQUFFRSxHQUFFLE1BQU0sRUFBRSxLQUFLRCxFQUFDLElBQUVGO0FBQUEsTUFBQyxHQUFFLElBQUUsRUFBQyxHQUFFLEdBQUUsR0FBRSxTQUFTQSxJQUFFO0FBQUMsWUFBSUMsS0FBRSxDQUFDRCxHQUFFLFVBQVUsR0FBRUUsS0FBRSxLQUFLLElBQUlELEVBQUMsR0FBRUUsS0FBRSxLQUFLLE1BQU1ELEtBQUUsRUFBRSxHQUFFRSxLQUFFRixLQUFFO0FBQUcsZ0JBQU9ELE1BQUcsSUFBRSxNQUFJLE9BQUssRUFBRUUsSUFBRSxHQUFFLEdBQUcsSUFBRSxNQUFJLEVBQUVDLElBQUUsR0FBRSxHQUFHO0FBQUEsTUFBQyxHQUFFLEdBQUUsU0FBU0osR0FBRUMsSUFBRUMsSUFBRTtBQUFDLFlBQUdELEdBQUUsS0FBSyxJQUFFQyxHQUFFLEtBQUssRUFBRSxRQUFNLENBQUNGLEdBQUVFLElBQUVELEVBQUM7QUFBRSxZQUFJRSxLQUFFLE1BQUlELEdBQUUsS0FBSyxJQUFFRCxHQUFFLEtBQUssTUFBSUMsR0FBRSxNQUFNLElBQUVELEdBQUUsTUFBTSxJQUFHRyxLQUFFSCxHQUFFLE1BQU0sRUFBRSxJQUFJRSxJQUFFLENBQUMsR0FBRUUsS0FBRUgsS0FBRUUsS0FBRSxHQUFFRSxLQUFFTCxHQUFFLE1BQU0sRUFBRSxJQUFJRSxNQUFHRSxLQUFFLEtBQUcsSUFBRyxDQUFDO0FBQUUsZUFBTSxFQUFFLEVBQUVGLE1BQUdELEtBQUVFLE9BQUlDLEtBQUVELEtBQUVFLEtBQUVBLEtBQUVGLFFBQUs7QUFBQSxNQUFFLEdBQUUsR0FBRSxTQUFTSixJQUFFO0FBQUMsZUFBT0EsS0FBRSxJQUFFLEtBQUssS0FBS0EsRUFBQyxLQUFHLElBQUUsS0FBSyxNQUFNQSxFQUFDO0FBQUEsTUFBQyxHQUFFLEdBQUUsU0FBU0EsSUFBRTtBQUFDLGVBQU0sRUFBQyxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLEdBQUUsR0FBRSxHQUFFLElBQUcsR0FBRSxHQUFFLEVBQUMsRUFBRUEsRUFBQyxLQUFHLE9BQU9BLE1BQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLE1BQUssRUFBRTtBQUFBLE1BQUMsR0FBRSxHQUFFLFNBQVNBLElBQUU7QUFBQyxlQUFPLFdBQVNBO0FBQUEsTUFBQyxFQUFDLEdBQUUsSUFBRSxNQUFLLElBQUUsQ0FBQztBQUFFLFFBQUUsQ0FBQyxJQUFFO0FBQUUsVUFBSSxJQUFFLGtCQUFpQixJQUFFLFNBQVNBLElBQUU7QUFBQyxlQUFPQSxjQUFhLEtBQUcsRUFBRSxDQUFDQSxNQUFHLENBQUNBLEdBQUUsQ0FBQztBQUFBLE1BQUUsR0FBRSxJQUFFLFNBQVNBLEdBQUVDLElBQUVDLElBQUVDLElBQUU7QUFBQyxZQUFJQztBQUFFLFlBQUcsQ0FBQ0gsR0FBRSxRQUFPO0FBQUUsWUFBRyxZQUFVLE9BQU9BLElBQUU7QUFBQyxjQUFJSSxLQUFFSixHQUFFLFlBQVk7QUFBRSxZQUFFSSxFQUFDLE1BQUlELEtBQUVDLEtBQUdILE9BQUksRUFBRUcsRUFBQyxJQUFFSCxJQUFFRSxLQUFFQztBQUFHLGNBQUlDLEtBQUVMLEdBQUUsTUFBTSxHQUFHO0FBQUUsY0FBRyxDQUFDRyxNQUFHRSxHQUFFLFNBQU8sRUFBRSxRQUFPTixHQUFFTSxHQUFFLENBQUMsQ0FBQztBQUFBLFFBQUMsT0FBSztBQUFDLGNBQUlDLEtBQUVOLEdBQUU7QUFBSyxZQUFFTSxFQUFDLElBQUVOLElBQUVHLEtBQUVHO0FBQUEsUUFBQztBQUFDLGVBQU0sQ0FBQ0osTUFBR0MsT0FBSSxJQUFFQSxLQUFHQSxNQUFHLENBQUNELE1BQUc7QUFBQSxNQUFDLEdBQUUsSUFBRSxTQUFTSCxJQUFFQyxJQUFFO0FBQUMsWUFBRyxFQUFFRCxFQUFDLEVBQUUsUUFBT0EsR0FBRSxNQUFNO0FBQUUsWUFBSUUsS0FBRSxZQUFVLE9BQU9ELEtBQUVBLEtBQUUsQ0FBQztBQUFFLGVBQU9DLEdBQUUsT0FBS0YsSUFBRUUsR0FBRSxPQUFLLFdBQVUsSUFBSSxFQUFFQSxFQUFDO0FBQUEsTUFBQyxHQUFFLElBQUU7QUFBRSxRQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsR0FBRSxFQUFFLElBQUUsU0FBU0YsSUFBRUMsSUFBRTtBQUFDLGVBQU8sRUFBRUQsSUFBRSxFQUFDLFFBQU9DLEdBQUUsSUFBRyxLQUFJQSxHQUFFLElBQUcsR0FBRUEsR0FBRSxJQUFHLFNBQVFBLEdBQUUsUUFBTyxDQUFDO0FBQUEsTUFBQztBQUFFLFVBQUksS0FBRSxXQUFVO0FBQUMsaUJBQVNPLEdBQUVSLElBQUU7QUFBQyxlQUFLLEtBQUcsRUFBRUEsR0FBRSxRQUFPLE1BQUssSUFBRSxHQUFFLEtBQUssTUFBTUEsRUFBQyxHQUFFLEtBQUssS0FBRyxLQUFLLE1BQUlBLEdBQUUsS0FBRyxDQUFDLEdBQUUsS0FBSyxDQUFDLElBQUU7QUFBQSxRQUFFO0FBQUMsWUFBSVMsS0FBRUQsR0FBRTtBQUFVLGVBQU9DLEdBQUUsUUFBTSxTQUFTVCxJQUFFO0FBQUMsZUFBSyxNQUFHLFNBQVNBLElBQUU7QUFBQyxnQkFBSUMsS0FBRUQsR0FBRSxNQUFLRSxLQUFFRixHQUFFO0FBQUksZ0JBQUcsU0FBT0MsR0FBRSxRQUFPLG9CQUFJLEtBQUssR0FBRztBQUFFLGdCQUFHLEVBQUUsRUFBRUEsRUFBQyxFQUFFLFFBQU8sb0JBQUk7QUFBSyxnQkFBR0EsY0FBYSxLQUFLLFFBQU8sSUFBSSxLQUFLQSxFQUFDO0FBQUUsZ0JBQUcsWUFBVSxPQUFPQSxNQUFHLENBQUMsTUFBTSxLQUFLQSxFQUFDLEdBQUU7QUFBQyxrQkFBSUUsS0FBRUYsR0FBRSxNQUFNLENBQUM7QUFBRSxrQkFBR0UsSUFBRTtBQUFDLG9CQUFJQyxLQUFFRCxHQUFFLENBQUMsSUFBRSxLQUFHLEdBQUVFLE1BQUdGLEdBQUUsQ0FBQyxLQUFHLEtBQUssVUFBVSxHQUFFLENBQUM7QUFBRSx1QkFBT0QsS0FBRSxJQUFJLEtBQUssS0FBSyxJQUFJQyxHQUFFLENBQUMsR0FBRUMsSUFBRUQsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUUsRUFBQyxDQUFDLElBQUUsSUFBSSxLQUFLRixHQUFFLENBQUMsR0FBRUMsSUFBRUQsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUEsR0FBRSxDQUFDLEtBQUcsR0FBRUUsRUFBQztBQUFBLGNBQUM7QUFBQSxZQUFDO0FBQUMsbUJBQU8sSUFBSSxLQUFLSixFQUFDO0FBQUEsVUFBQyxHQUFFRCxFQUFDLEdBQUUsS0FBSyxLQUFLO0FBQUEsUUFBQyxHQUFFUyxHQUFFLE9BQUssV0FBVTtBQUFDLGNBQUlULEtBQUUsS0FBSztBQUFHLGVBQUssS0FBR0EsR0FBRSxZQUFZLEdBQUUsS0FBSyxLQUFHQSxHQUFFLFNBQVMsR0FBRSxLQUFLLEtBQUdBLEdBQUUsUUFBUSxHQUFFLEtBQUssS0FBR0EsR0FBRSxPQUFPLEdBQUUsS0FBSyxLQUFHQSxHQUFFLFNBQVMsR0FBRSxLQUFLLEtBQUdBLEdBQUUsV0FBVyxHQUFFLEtBQUssS0FBR0EsR0FBRSxXQUFXLEdBQUUsS0FBSyxNQUFJQSxHQUFFLGdCQUFnQjtBQUFBLFFBQUMsR0FBRVMsR0FBRSxTQUFPLFdBQVU7QUFBQyxpQkFBTztBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBTSxFQUFFLEtBQUssR0FBRyxTQUFTLE1BQUk7QUFBQSxRQUFFLEdBQUVBLEdBQUUsU0FBTyxTQUFTVCxJQUFFQyxJQUFFO0FBQUMsY0FBSUMsS0FBRSxFQUFFRixFQUFDO0FBQUUsaUJBQU8sS0FBSyxRQUFRQyxFQUFDLEtBQUdDLE1BQUdBLE1BQUcsS0FBSyxNQUFNRCxFQUFDO0FBQUEsUUFBQyxHQUFFUSxHQUFFLFVBQVEsU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEVBQUVELEVBQUMsSUFBRSxLQUFLLFFBQVFDLEVBQUM7QUFBQSxRQUFDLEdBQUVRLEdBQUUsV0FBUyxTQUFTVCxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sS0FBSyxNQUFNQSxFQUFDLElBQUUsRUFBRUQsRUFBQztBQUFBLFFBQUMsR0FBRVMsR0FBRSxLQUFHLFNBQVNULElBQUVDLElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFLEVBQUVGLEVBQUMsSUFBRSxLQUFLQyxFQUFDLElBQUUsS0FBSyxJQUFJQyxJQUFFRixFQUFDO0FBQUEsUUFBQyxHQUFFUyxHQUFFLE9BQUssV0FBVTtBQUFDLGlCQUFPLEtBQUssTUFBTSxLQUFLLFFBQVEsSUFBRSxHQUFHO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFVBQVEsV0FBVTtBQUFDLGlCQUFPLEtBQUssR0FBRyxRQUFRO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFVBQVEsU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUlDLEtBQUUsTUFBS0MsS0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFRixFQUFDLEtBQUdBLElBQUVTLEtBQUUsRUFBRSxFQUFFVixFQUFDLEdBQUVXLEtBQUUsU0FBU1gsSUFBRUMsSUFBRTtBQUFDLGdCQUFJRyxLQUFFLEVBQUUsRUFBRUYsR0FBRSxLQUFHLEtBQUssSUFBSUEsR0FBRSxJQUFHRCxJQUFFRCxFQUFDLElBQUUsSUFBSSxLQUFLRSxHQUFFLElBQUdELElBQUVELEVBQUMsR0FBRUUsRUFBQztBQUFFLG1CQUFPQyxLQUFFQyxLQUFFQSxHQUFFLE1BQU0sQ0FBQztBQUFBLFVBQUMsR0FBRVEsS0FBRSxTQUFTWixJQUFFQyxJQUFFO0FBQUMsbUJBQU8sRUFBRSxFQUFFQyxHQUFFLE9BQU8sRUFBRUYsRUFBQyxFQUFFLE1BQU1FLEdBQUUsT0FBTyxHQUFHLElBQUdDLEtBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRSxDQUFDLElBQUUsQ0FBQyxJQUFHLElBQUcsSUFBRyxHQUFHLEdBQUcsTUFBTUYsRUFBQyxDQUFDLEdBQUVDLEVBQUM7QUFBQSxVQUFDLEdBQUVXLEtBQUUsS0FBSyxJQUFHTCxLQUFFLEtBQUssSUFBR0MsS0FBRSxLQUFLLElBQUdLLEtBQUUsU0FBTyxLQUFLLEtBQUcsUUFBTTtBQUFJLGtCQUFPSixJQUFFO0FBQUEsWUFBQyxLQUFLO0FBQUUscUJBQU9QLEtBQUVRLEdBQUUsR0FBRSxDQUFDLElBQUVBLEdBQUUsSUFBRyxFQUFFO0FBQUEsWUFBRSxLQUFLO0FBQUUscUJBQU9SLEtBQUVRLEdBQUUsR0FBRUgsRUFBQyxJQUFFRyxHQUFFLEdBQUVILEtBQUUsQ0FBQztBQUFBLFlBQUUsS0FBSztBQUFFLGtCQUFJTyxLQUFFLEtBQUssUUFBUSxFQUFFLGFBQVcsR0FBRUMsTUFBR0gsS0FBRUUsS0FBRUYsS0FBRSxJQUFFQSxNQUFHRTtBQUFFLHFCQUFPSixHQUFFUixLQUFFTSxLQUFFTyxLQUFFUCxNQUFHLElBQUVPLEtBQUdSLEVBQUM7QUFBQSxZQUFFLEtBQUs7QUFBQSxZQUFFLEtBQUs7QUFBRSxxQkFBT0ksR0FBRUUsS0FBRSxTQUFRLENBQUM7QUFBQSxZQUFFLEtBQUs7QUFBRSxxQkFBT0YsR0FBRUUsS0FBRSxXQUFVLENBQUM7QUFBQSxZQUFFLEtBQUs7QUFBRSxxQkFBT0YsR0FBRUUsS0FBRSxXQUFVLENBQUM7QUFBQSxZQUFFLEtBQUs7QUFBRSxxQkFBT0YsR0FBRUUsS0FBRSxnQkFBZSxDQUFDO0FBQUEsWUFBRTtBQUFRLHFCQUFPLEtBQUssTUFBTTtBQUFBLFVBQUM7QUFBQSxRQUFDLEdBQUVMLEdBQUUsUUFBTSxTQUFTVCxJQUFFO0FBQUMsaUJBQU8sS0FBSyxRQUFRQSxJQUFFLEtBQUU7QUFBQSxRQUFDLEdBQUVTLEdBQUUsT0FBSyxTQUFTVCxJQUFFQyxJQUFFO0FBQUMsY0FBSUMsSUFBRWUsS0FBRSxFQUFFLEVBQUVqQixFQUFDLEdBQUVVLEtBQUUsU0FBTyxLQUFLLEtBQUcsUUFBTSxLQUFJQyxNQUFHVCxLQUFFLENBQUMsR0FBRUEsR0FBRSxDQUFDLElBQUVRLEtBQUUsUUFBT1IsR0FBRSxDQUFDLElBQUVRLEtBQUUsUUFBT1IsR0FBRSxDQUFDLElBQUVRLEtBQUUsU0FBUVIsR0FBRSxDQUFDLElBQUVRLEtBQUUsWUFBV1IsR0FBRSxDQUFDLElBQUVRLEtBQUUsU0FBUVIsR0FBRSxDQUFDLElBQUVRLEtBQUUsV0FBVVIsR0FBRSxDQUFDLElBQUVRLEtBQUUsV0FBVVIsR0FBRSxDQUFDLElBQUVRLEtBQUUsZ0JBQWVSLElBQUdlLEVBQUMsR0FBRUwsS0FBRUssT0FBSSxJQUFFLEtBQUssTUFBSWhCLEtBQUUsS0FBSyxNQUFJQTtBQUFFLGNBQUdnQixPQUFJLEtBQUdBLE9BQUksR0FBRTtBQUFDLGdCQUFJSixLQUFFLEtBQUssTUFBTSxFQUFFLElBQUksR0FBRSxDQUFDO0FBQUUsWUFBQUEsR0FBRSxHQUFHRixFQUFDLEVBQUVDLEVBQUMsR0FBRUMsR0FBRSxLQUFLLEdBQUUsS0FBSyxLQUFHQSxHQUFFLElBQUksR0FBRSxLQUFLLElBQUksS0FBSyxJQUFHQSxHQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUU7QUFBQSxVQUFFLE1BQU0sQ0FBQUYsTUFBRyxLQUFLLEdBQUdBLEVBQUMsRUFBRUMsRUFBQztBQUFFLGlCQUFPLEtBQUssS0FBSyxHQUFFO0FBQUEsUUFBSSxHQUFFSCxHQUFFLE1BQUksU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssTUFBTSxFQUFFLEtBQUtELElBQUVDLEVBQUM7QUFBQSxRQUFDLEdBQUVRLEdBQUUsTUFBSSxTQUFTVCxJQUFFO0FBQUMsaUJBQU8sS0FBSyxFQUFFLEVBQUVBLEVBQUMsQ0FBQyxFQUFFO0FBQUEsUUFBQyxHQUFFUyxHQUFFLE1BQUksU0FBU04sSUFBRU8sSUFBRTtBQUFDLGNBQUlRLElBQUVQLEtBQUU7QUFBSyxVQUFBUixLQUFFLE9BQU9BLEVBQUM7QUFBRSxjQUFJUyxLQUFFLEVBQUUsRUFBRUYsRUFBQyxHQUFFRyxLQUFFLFNBQVNiLElBQUU7QUFBQyxnQkFBSUMsS0FBRSxFQUFFVSxFQUFDO0FBQUUsbUJBQU8sRUFBRSxFQUFFVixHQUFFLEtBQUtBLEdBQUUsS0FBSyxJQUFFLEtBQUssTUFBTUQsS0FBRUcsRUFBQyxDQUFDLEdBQUVRLEVBQUM7QUFBQSxVQUFDO0FBQUUsY0FBR0MsT0FBSSxFQUFFLFFBQU8sS0FBSyxJQUFJLEdBQUUsS0FBSyxLQUFHVCxFQUFDO0FBQUUsY0FBR1MsT0FBSSxFQUFFLFFBQU8sS0FBSyxJQUFJLEdBQUUsS0FBSyxLQUFHVCxFQUFDO0FBQUUsY0FBR1MsT0FBSSxFQUFFLFFBQU9DLEdBQUUsQ0FBQztBQUFFLGNBQUdELE9BQUksRUFBRSxRQUFPQyxHQUFFLENBQUM7QUFBRSxjQUFJTCxNQUFHVSxLQUFFLENBQUMsR0FBRUEsR0FBRSxDQUFDLElBQUUsR0FBRUEsR0FBRSxDQUFDLElBQUUsR0FBRUEsR0FBRSxDQUFDLElBQUUsR0FBRUEsSUFBR04sRUFBQyxLQUFHLEdBQUVILEtBQUUsS0FBSyxHQUFHLFFBQVEsSUFBRU4sS0FBRUs7QUFBRSxpQkFBTyxFQUFFLEVBQUVDLElBQUUsSUFBSTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxXQUFTLFNBQVNULElBQUVDLElBQUU7QUFBQyxpQkFBTyxLQUFLLElBQUksS0FBR0QsSUFBRUMsRUFBQztBQUFBLFFBQUMsR0FBRVEsR0FBRSxTQUFPLFNBQVNULElBQUU7QUFBQyxjQUFJQyxLQUFFLE1BQUtDLEtBQUUsS0FBSyxRQUFRO0FBQUUsY0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFLFFBQU9BLEdBQUUsZUFBYTtBQUFFLGNBQUlDLEtBQUVILE1BQUcsd0JBQXVCSSxLQUFFLEVBQUUsRUFBRSxJQUFJLEdBQUVDLEtBQUUsS0FBSyxJQUFHQyxLQUFFLEtBQUssSUFBR0MsS0FBRSxLQUFLLElBQUdVLEtBQUVmLEdBQUUsVUFBU2lCLEtBQUVqQixHQUFFLFFBQU9RLEtBQUVSLEdBQUUsVUFBU2tCLEtBQUUsU0FBU3BCLElBQUVFLElBQUVFLElBQUVDLElBQUU7QUFBQyxtQkFBT0wsT0FBSUEsR0FBRUUsRUFBQyxLQUFHRixHQUFFQyxJQUFFRSxFQUFDLE1BQUlDLEdBQUVGLEVBQUMsRUFBRSxNQUFNLEdBQUVHLEVBQUM7QUFBQSxVQUFDLEdBQUVhLEtBQUUsU0FBU2xCLElBQUU7QUFBQyxtQkFBTyxFQUFFLEVBQUVLLEtBQUUsTUFBSSxJQUFHTCxJQUFFLEdBQUc7QUFBQSxVQUFDLEdBQUVZLEtBQUVGLE1BQUcsU0FBU1YsSUFBRUMsSUFBRUMsSUFBRTtBQUFDLGdCQUFJQyxLQUFFSCxLQUFFLEtBQUcsT0FBSztBQUFLLG1CQUFPRSxLQUFFQyxHQUFFLFlBQVksSUFBRUE7QUFBQSxVQUFDO0FBQUUsaUJBQU9BLEdBQUUsUUFBUSxJQUFHLFNBQVNILElBQUVHLElBQUU7QUFBQyxtQkFBT0EsT0FBRyxTQUFTSCxJQUFFO0FBQUMsc0JBQU9BLElBQUU7QUFBQSxnQkFBQyxLQUFJO0FBQUsseUJBQU8sT0FBT0MsR0FBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQUEsZ0JBQUUsS0FBSTtBQUFPLHlCQUFPLEVBQUUsRUFBRUEsR0FBRSxJQUFHLEdBQUUsR0FBRztBQUFBLGdCQUFFLEtBQUk7QUFBSSx5QkFBT00sS0FBRTtBQUFBLGdCQUFFLEtBQUk7QUFBSyx5QkFBTyxFQUFFLEVBQUVBLEtBQUUsR0FBRSxHQUFFLEdBQUc7QUFBQSxnQkFBRSxLQUFJO0FBQU0seUJBQU9hLEdBQUVsQixHQUFFLGFBQVlLLElBQUVZLElBQUUsQ0FBQztBQUFBLGdCQUFFLEtBQUk7QUFBTyx5QkFBT0MsR0FBRUQsSUFBRVosRUFBQztBQUFBLGdCQUFFLEtBQUk7QUFBSSx5QkFBT04sR0FBRTtBQUFBLGdCQUFHLEtBQUk7QUFBSyx5QkFBTyxFQUFFLEVBQUVBLEdBQUUsSUFBRyxHQUFFLEdBQUc7QUFBQSxnQkFBRSxLQUFJO0FBQUkseUJBQU8sT0FBT0EsR0FBRSxFQUFFO0FBQUEsZ0JBQUUsS0FBSTtBQUFLLHlCQUFPbUIsR0FBRWxCLEdBQUUsYUFBWUQsR0FBRSxJQUFHZ0IsSUFBRSxDQUFDO0FBQUEsZ0JBQUUsS0FBSTtBQUFNLHlCQUFPRyxHQUFFbEIsR0FBRSxlQUFjRCxHQUFFLElBQUdnQixJQUFFLENBQUM7QUFBQSxnQkFBRSxLQUFJO0FBQU8seUJBQU9BLEdBQUVoQixHQUFFLEVBQUU7QUFBQSxnQkFBRSxLQUFJO0FBQUkseUJBQU8sT0FBT0ksRUFBQztBQUFBLGdCQUFFLEtBQUk7QUFBSyx5QkFBTyxFQUFFLEVBQUVBLElBQUUsR0FBRSxHQUFHO0FBQUEsZ0JBQUUsS0FBSTtBQUFJLHlCQUFPYSxHQUFFLENBQUM7QUFBQSxnQkFBRSxLQUFJO0FBQUsseUJBQU9BLEdBQUUsQ0FBQztBQUFBLGdCQUFFLEtBQUk7QUFBSSx5QkFBT04sR0FBRVAsSUFBRUMsSUFBRSxJQUFFO0FBQUEsZ0JBQUUsS0FBSTtBQUFJLHlCQUFPTSxHQUFFUCxJQUFFQyxJQUFFLEtBQUU7QUFBQSxnQkFBRSxLQUFJO0FBQUkseUJBQU8sT0FBT0EsRUFBQztBQUFBLGdCQUFFLEtBQUk7QUFBSyx5QkFBTyxFQUFFLEVBQUVBLElBQUUsR0FBRSxHQUFHO0FBQUEsZ0JBQUUsS0FBSTtBQUFJLHlCQUFPLE9BQU9MLEdBQUUsRUFBRTtBQUFBLGdCQUFFLEtBQUk7QUFBSyx5QkFBTyxFQUFFLEVBQUVBLEdBQUUsSUFBRyxHQUFFLEdBQUc7QUFBQSxnQkFBRSxLQUFJO0FBQU0seUJBQU8sRUFBRSxFQUFFQSxHQUFFLEtBQUksR0FBRSxHQUFHO0FBQUEsZ0JBQUUsS0FBSTtBQUFJLHlCQUFPRztBQUFBLGNBQUM7QUFBQyxxQkFBTztBQUFBLFlBQUksR0FBRUosRUFBQyxLQUFHSSxHQUFFLFFBQVEsS0FBSSxFQUFFO0FBQUEsVUFBQyxFQUFFO0FBQUEsUUFBQyxHQUFFSyxHQUFFLFlBQVUsV0FBVTtBQUFDLGlCQUFPLEtBQUcsQ0FBQyxLQUFLLE1BQU0sS0FBSyxHQUFHLGtCQUFrQixJQUFFLEVBQUU7QUFBQSxRQUFDLEdBQUVBLEdBQUUsT0FBSyxTQUFTTixJQUFFZSxJQUFFUCxJQUFFO0FBQUMsY0FBSUMsSUFBRUMsS0FBRSxNQUFLTCxLQUFFLEVBQUUsRUFBRVUsRUFBQyxHQUFFVCxLQUFFLEVBQUVOLEVBQUMsR0FBRVcsTUFBR0wsR0FBRSxVQUFVLElBQUUsS0FBSyxVQUFVLEtBQUcsR0FBRU0sS0FBRSxPQUFLTixJQUFFTyxLQUFFLFdBQVU7QUFBQyxtQkFBTyxFQUFFLEVBQUVILElBQUVKLEVBQUM7QUFBQSxVQUFDO0FBQUUsa0JBQU9ELElBQUU7QUFBQSxZQUFDLEtBQUs7QUFBRSxjQUFBSSxLQUFFSSxHQUFFLElBQUU7QUFBRztBQUFBLFlBQU0sS0FBSztBQUFFLGNBQUFKLEtBQUVJLEdBQUU7QUFBRTtBQUFBLFlBQU0sS0FBSztBQUFFLGNBQUFKLEtBQUVJLEdBQUUsSUFBRTtBQUFFO0FBQUEsWUFBTSxLQUFLO0FBQUUsY0FBQUosTUFBR0csS0FBRUQsTUFBRztBQUFPO0FBQUEsWUFBTSxLQUFLO0FBQUUsY0FBQUYsTUFBR0csS0FBRUQsTUFBRztBQUFNO0FBQUEsWUFBTSxLQUFLO0FBQUUsY0FBQUYsS0FBRUcsS0FBRTtBQUFFO0FBQUEsWUFBTSxLQUFLO0FBQUUsY0FBQUgsS0FBRUcsS0FBRTtBQUFFO0FBQUEsWUFBTSxLQUFLO0FBQUUsY0FBQUgsS0FBRUcsS0FBRTtBQUFFO0FBQUEsWUFBTTtBQUFRLGNBQUFILEtBQUVHO0FBQUEsVUFBQztBQUFDLGlCQUFPSixLQUFFQyxLQUFFLEVBQUUsRUFBRUEsRUFBQztBQUFBLFFBQUMsR0FBRUgsR0FBRSxjQUFZLFdBQVU7QUFBQyxpQkFBTyxLQUFLLE1BQU0sQ0FBQyxFQUFFO0FBQUEsUUFBRSxHQUFFQSxHQUFFLFVBQVEsV0FBVTtBQUFDLGlCQUFPLEVBQUUsS0FBSyxFQUFFO0FBQUEsUUFBQyxHQUFFQSxHQUFFLFNBQU8sU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUcsQ0FBQ0QsR0FBRSxRQUFPLEtBQUs7QUFBRyxjQUFJRSxLQUFFLEtBQUssTUFBTSxHQUFFQyxLQUFFLEVBQUVILElBQUVDLElBQUUsSUFBRTtBQUFFLGlCQUFPRSxPQUFJRCxHQUFFLEtBQUdDLEtBQUdEO0FBQUEsUUFBQyxHQUFFTyxHQUFFLFFBQU0sV0FBVTtBQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLElBQUcsSUFBSTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxTQUFPLFdBQVU7QUFBQyxpQkFBTyxJQUFJLEtBQUssS0FBSyxRQUFRLENBQUM7QUFBQSxRQUFDLEdBQUVBLEdBQUUsU0FBTyxXQUFVO0FBQUMsaUJBQU8sS0FBSyxRQUFRLElBQUUsS0FBSyxZQUFZLElBQUU7QUFBQSxRQUFJLEdBQUVBLEdBQUUsY0FBWSxXQUFVO0FBQUMsaUJBQU8sS0FBSyxHQUFHLFlBQVk7QUFBQSxRQUFDLEdBQUVBLEdBQUUsV0FBUyxXQUFVO0FBQUMsaUJBQU8sS0FBSyxHQUFHLFlBQVk7QUFBQSxRQUFDLEdBQUVEO0FBQUEsTUFBQyxHQUFFLEdBQUUsSUFBRSxFQUFFO0FBQVUsYUFBTyxFQUFFLFlBQVUsR0FBRSxDQUFDLENBQUMsT0FBTSxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsR0FBRSxDQUFDLE1BQUssQ0FBQyxHQUFFLENBQUMsTUFBSyxDQUFDLEdBQUUsQ0FBQyxNQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsU0FBU1IsSUFBRTtBQUFDLFVBQUVBLEdBQUUsQ0FBQyxDQUFDLElBQUUsU0FBU0MsSUFBRTtBQUFDLGlCQUFPLEtBQUssR0FBR0EsSUFBRUQsR0FBRSxDQUFDLEdBQUVBLEdBQUUsQ0FBQyxDQUFDO0FBQUEsUUFBQztBQUFBLE1BQUMsRUFBRSxHQUFFLEVBQUUsU0FBTyxTQUFTQSxJQUFFQyxJQUFFO0FBQUMsZUFBT0QsR0FBRSxPQUFLQSxHQUFFQyxJQUFFLEdBQUUsQ0FBQyxHQUFFRCxHQUFFLEtBQUcsT0FBSTtBQUFBLE1BQUMsR0FBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLFVBQVEsR0FBRSxFQUFFLE9BQUssU0FBU0EsSUFBRTtBQUFDLGVBQU8sRUFBRSxNQUFJQSxFQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsS0FBRyxFQUFFLENBQUMsR0FBRSxFQUFFLEtBQUcsR0FBRSxFQUFFLElBQUUsQ0FBQyxHQUFFO0FBQUEsSUFBQyxFQUFFO0FBQUE7QUFBQTs7O0FDQXQvTjtBQUFBLGdEQUFBcUIsVUFBQUMsU0FBQTtBQUFBLE1BQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSw4QkFBNEIsRUFBRTtBQUFBLElBQUMsR0FBRUQsV0FBTSxXQUFVO0FBQUM7QUFBYSxhQUFPLFNBQVMsR0FBRSxHQUFFO0FBQUMsWUFBSSxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUU7QUFBTyxVQUFFLFNBQU8sU0FBU0UsSUFBRTtBQUFDLGNBQUlDLEtBQUUsTUFBS0MsS0FBRSxLQUFLLFFBQVE7QUFBRSxjQUFHLENBQUMsS0FBSyxRQUFRLEVBQUUsUUFBTyxFQUFFLEtBQUssSUFBSSxFQUFFRixFQUFDO0FBQUUsY0FBSSxJQUFFLEtBQUssT0FBTyxHQUFFLEtBQUdBLE1BQUcsd0JBQXdCLFFBQVEsZ0VBQStELFNBQVNBLElBQUU7QUFBQyxvQkFBT0EsSUFBRTtBQUFBLGNBQUMsS0FBSTtBQUFJLHVCQUFPLEtBQUssTUFBTUMsR0FBRSxLQUFHLEtBQUcsQ0FBQztBQUFBLGNBQUUsS0FBSTtBQUFLLHVCQUFPQyxHQUFFLFFBQVFELEdBQUUsRUFBRTtBQUFBLGNBQUUsS0FBSTtBQUFPLHVCQUFPQSxHQUFFLFNBQVM7QUFBQSxjQUFFLEtBQUk7QUFBTyx1QkFBT0EsR0FBRSxZQUFZO0FBQUEsY0FBRSxLQUFJO0FBQUssdUJBQU9DLEdBQUUsUUFBUUQsR0FBRSxLQUFLLEdBQUUsR0FBRztBQUFBLGNBQUUsS0FBSTtBQUFBLGNBQUksS0FBSTtBQUFLLHVCQUFPLEVBQUUsRUFBRUEsR0FBRSxLQUFLLEdBQUUsUUFBTUQsS0FBRSxJQUFFLEdBQUUsR0FBRztBQUFBLGNBQUUsS0FBSTtBQUFBLGNBQUksS0FBSTtBQUFLLHVCQUFPLEVBQUUsRUFBRUMsR0FBRSxRQUFRLEdBQUUsUUFBTUQsS0FBRSxJQUFFLEdBQUUsR0FBRztBQUFBLGNBQUUsS0FBSTtBQUFBLGNBQUksS0FBSTtBQUFLLHVCQUFPLEVBQUUsRUFBRSxPQUFPLE1BQUlDLEdBQUUsS0FBRyxLQUFHQSxHQUFFLEVBQUUsR0FBRSxRQUFNRCxLQUFFLElBQUUsR0FBRSxHQUFHO0FBQUEsY0FBRSxLQUFJO0FBQUksdUJBQU8sS0FBSyxNQUFNQyxHQUFFLEdBQUcsUUFBUSxJQUFFLEdBQUc7QUFBQSxjQUFFLEtBQUk7QUFBSSx1QkFBT0EsR0FBRSxHQUFHLFFBQVE7QUFBQSxjQUFFLEtBQUk7QUFBSSx1QkFBTSxNQUFJQSxHQUFFLFdBQVcsSUFBRTtBQUFBLGNBQUksS0FBSTtBQUFNLHVCQUFNLE1BQUlBLEdBQUUsV0FBVyxNQUFNLElBQUU7QUFBQSxjQUFJO0FBQVEsdUJBQU9EO0FBQUEsWUFBQztBQUFBLFVBQUMsRUFBRTtBQUFFLGlCQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQyxFQUFFO0FBQUE7QUFBQTs7O0FDQXhrQztBQUFBLDhDQUFBRyxVQUFBQyxTQUFBO0FBQUEsTUFBQyxTQUFTLEdBQUUsR0FBRTtBQUFDLGtCQUFVLE9BQU9ELFlBQVMsZUFBYSxPQUFPQyxVQUFPQSxRQUFPLFVBQVEsRUFBRSxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPLENBQUMsS0FBRyxJQUFFLGVBQWEsT0FBTyxhQUFXLGFBQVcsS0FBRyxNQUFNLDRCQUEwQixFQUFFO0FBQUEsSUFBQyxHQUFFRCxXQUFNLFdBQVU7QUFBQztBQUFhLGFBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUUsS0FBRyxDQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUUsV0FBVSxJQUFFLEVBQUMsUUFBTyxTQUFRLE1BQUssVUFBUyxHQUFFLGlCQUFnQixHQUFFLFlBQVcsSUFBRyxjQUFhLEdBQUUsV0FBVSxJQUFHLFlBQVcsR0FBRSxTQUFRLElBQUcsV0FBVSxHQUFFLFdBQVUsSUFBRyxhQUFZLEdBQUUsVUFBUyxJQUFHLFdBQVU7QUFBRSxpQkFBUyxFQUFFRSxJQUFFQyxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sRUFBRSxXQUFXSCxJQUFFQyxJQUFFQyxJQUFFQyxFQUFDO0FBQUEsUUFBQztBQUFDLFVBQUUsR0FBRyxlQUFhLEdBQUUsRUFBRSxhQUFXLFNBQVNGLElBQUVHLElBQUVDLElBQUVDLElBQUUsR0FBRTtBQUFDLG1CQUFRLEdBQUUsR0FBRSxHQUFFLElBQUVELEdBQUUsUUFBUSxFQUFFLGdCQUFjLEdBQUUsSUFBRSxFQUFFLGNBQVksQ0FBQyxFQUFDLEdBQUUsS0FBSSxHQUFFLElBQUcsR0FBRSxTQUFRLEdBQUUsRUFBQyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsRUFBQyxHQUFFLE1BQUssR0FBRSxJQUFHLEdBQUUsU0FBUSxHQUFFLEVBQUMsR0FBRSxLQUFJLEdBQUUsR0FBRSxHQUFFLEVBQUMsR0FBRSxNQUFLLEdBQUUsSUFBRyxHQUFFLE9BQU0sR0FBRSxFQUFDLEdBQUUsS0FBSSxHQUFFLEdBQUUsR0FBRSxFQUFDLEdBQUUsTUFBSyxHQUFFLElBQUcsR0FBRSxNQUFLLEdBQUUsRUFBQyxHQUFFLEtBQUksR0FBRSxHQUFFLEdBQUUsRUFBQyxHQUFFLE1BQUssR0FBRSxJQUFHLEdBQUUsUUFBTyxHQUFFLEVBQUMsR0FBRSxLQUFJLEdBQUUsR0FBRSxHQUFFLEVBQUMsR0FBRSxNQUFLLEdBQUUsT0FBTSxDQUFDLEdBQUUsSUFBRSxFQUFFLFFBQU8sSUFBRSxHQUFFLElBQUUsR0FBRSxLQUFHLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEVBQUUsQ0FBQztBQUFFLGNBQUUsTUFBSSxJQUFFQyxLQUFFLEVBQUVMLEVBQUMsRUFBRSxLQUFLSSxJQUFFLEVBQUUsR0FBRSxJQUFFLElBQUVBLEdBQUUsS0FBS0osSUFBRSxFQUFFLEdBQUUsSUFBRTtBQUFHLGdCQUFJLEtBQUcsRUFBRSxZQUFVLEtBQUssT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQUUsZ0JBQUcsSUFBRSxJQUFFLEdBQUUsS0FBRyxFQUFFLEtBQUcsQ0FBQyxFQUFFLEdBQUU7QUFBQyxtQkFBRyxLQUFHLElBQUUsTUFBSSxJQUFFLEVBQUUsSUFBRSxDQUFDO0FBQUcsa0JBQUksSUFBRSxFQUFFLEVBQUUsQ0FBQztBQUFFLG9CQUFJLElBQUUsRUFBRSxLQUFHLENBQUMsSUFBRyxJQUFFLFlBQVUsT0FBTyxJQUFFLEVBQUUsUUFBUSxNQUFLLENBQUMsSUFBRSxFQUFFLEdBQUVHLElBQUUsRUFBRSxHQUFFLENBQUM7QUFBRTtBQUFBLFlBQUs7QUFBQSxVQUFDO0FBQUMsY0FBR0EsR0FBRSxRQUFPO0FBQUUsY0FBSSxJQUFFLElBQUUsRUFBRSxTQUFPLEVBQUU7QUFBSyxpQkFBTSxjQUFZLE9BQU8sSUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLFFBQVEsTUFBSyxDQUFDO0FBQUEsUUFBQyxHQUFFLEVBQUUsS0FBRyxTQUFTSixJQUFFQyxJQUFFO0FBQUMsaUJBQU8sRUFBRUQsSUFBRUMsSUFBRSxNQUFLLElBQUU7QUFBQSxRQUFDLEdBQUUsRUFBRSxPQUFLLFNBQVNELElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFRCxJQUFFQyxJQUFFLElBQUk7QUFBQSxRQUFDO0FBQUUsWUFBSSxJQUFFLFNBQVNELElBQUU7QUFBQyxpQkFBT0EsR0FBRSxLQUFHLEVBQUUsSUFBSSxJQUFFLEVBQUU7QUFBQSxRQUFDO0FBQUUsVUFBRSxRQUFNLFNBQVNBLElBQUU7QUFBQyxpQkFBTyxLQUFLLEdBQUcsRUFBRSxJQUFJLEdBQUVBLEVBQUM7QUFBQSxRQUFDLEdBQUUsRUFBRSxVQUFRLFNBQVNBLElBQUU7QUFBQyxpQkFBTyxLQUFLLEtBQUssRUFBRSxJQUFJLEdBQUVBLEVBQUM7QUFBQSxRQUFDO0FBQUEsTUFBQztBQUFBLElBQUMsRUFBRTtBQUFBO0FBQUE7OztBQ0E1NEM7QUFBQSwwQ0FBQU8sVUFBQUMsU0FBQTtBQUFBLE1BQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSx3QkFBc0IsRUFBRTtBQUFBLElBQUMsR0FBRUQsV0FBTSxXQUFVO0FBQUM7QUFBYSxVQUFJLElBQUUsRUFBQyxNQUFLLEdBQUUsT0FBTSxHQUFFLEtBQUksR0FBRSxNQUFLLEdBQUUsUUFBTyxHQUFFLFFBQU8sRUFBQyxHQUFFLElBQUUsQ0FBQztBQUFFLGFBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUksR0FBRSxJQUFFLFNBQVNFLElBQUVDLElBQUVDLElBQUU7QUFBQyxxQkFBU0EsT0FBSUEsS0FBRSxDQUFDO0FBQUcsY0FBSUMsS0FBRSxJQUFJLEtBQUtILEVBQUMsR0FBRUksTUFBRSxTQUFTSixJQUFFQyxJQUFFO0FBQUMsdUJBQVNBLE9BQUlBLEtBQUUsQ0FBQztBQUFHLGdCQUFJQyxLQUFFRCxHQUFFLGdCQUFjLFNBQVFFLEtBQUVILEtBQUUsTUFBSUUsSUFBRUUsS0FBRSxFQUFFRCxFQUFDO0FBQUUsbUJBQU9DLE9BQUlBLEtBQUUsSUFBSSxLQUFLLGVBQWUsU0FBUSxFQUFDLFFBQU8sT0FBRyxVQUFTSixJQUFFLE1BQUssV0FBVSxPQUFNLFdBQVUsS0FBSSxXQUFVLE1BQUssV0FBVSxRQUFPLFdBQVUsUUFBTyxXQUFVLGNBQWFFLEdBQUMsQ0FBQyxHQUFFLEVBQUVDLEVBQUMsSUFBRUMsS0FBR0E7QUFBQSxVQUFDLEdBQUVILElBQUVDLEVBQUM7QUFBRSxpQkFBT0UsR0FBRSxjQUFjRCxFQUFDO0FBQUEsUUFBQyxHQUFFLElBQUUsU0FBU0UsSUFBRUosSUFBRTtBQUFDLG1CQUFRQyxLQUFFLEVBQUVHLElBQUVKLEVBQUMsR0FBRUcsS0FBRSxDQUFDLEdBQUVFLEtBQUUsR0FBRUEsS0FBRUosR0FBRSxRQUFPSSxNQUFHLEdBQUU7QUFBQyxnQkFBSUMsS0FBRUwsR0FBRUksRUFBQyxHQUFFRSxLQUFFRCxHQUFFLE1BQUssSUFBRUEsR0FBRSxPQUFNLElBQUUsRUFBRUMsRUFBQztBQUFFLGlCQUFHLE1BQUlKLEdBQUUsQ0FBQyxJQUFFLFNBQVMsR0FBRSxFQUFFO0FBQUEsVUFBRTtBQUFDLGNBQUksSUFBRUEsR0FBRSxDQUFDLEdBQUUsSUFBRSxPQUFLLElBQUUsSUFBRSxHQUFFLElBQUVBLEdBQUUsQ0FBQyxJQUFFLE1BQUlBLEdBQUUsQ0FBQyxJQUFFLE1BQUlBLEdBQUUsQ0FBQyxJQUFFLE1BQUksSUFBRSxNQUFJQSxHQUFFLENBQUMsSUFBRSxNQUFJQSxHQUFFLENBQUMsSUFBRSxRQUFPLElBQUUsQ0FBQ0M7QUFBRSxrQkFBTyxFQUFFLElBQUksQ0FBQyxFQUFFLFFBQVEsS0FBRyxLQUFHLElBQUUsUUFBTTtBQUFBLFFBQUcsR0FBRSxJQUFFLEVBQUU7QUFBVSxVQUFFLEtBQUcsU0FBU0wsSUFBRUssSUFBRTtBQUFDLHFCQUFTTCxPQUFJQSxLQUFFO0FBQUcsY0FBSUMsSUFBRUMsS0FBRSxLQUFLLFVBQVUsR0FBRU8sS0FBRSxLQUFLLE9BQU8sR0FBRUgsS0FBRUcsR0FBRSxlQUFlLFNBQVEsRUFBQyxVQUFTVCxHQUFDLENBQUMsR0FBRU8sS0FBRSxLQUFLLE9BQU9FLEtBQUUsSUFBSSxLQUFLSCxFQUFDLEtBQUcsTUFBSSxFQUFFLEdBQUVFLEtBQUUsS0FBRyxDQUFDLEtBQUssTUFBTUMsR0FBRSxrQkFBa0IsSUFBRSxFQUFFLElBQUVGO0FBQUUsY0FBRyxDQUFDLE9BQU9DLEVBQUMsRUFBRSxDQUFBUCxLQUFFLEtBQUssVUFBVSxHQUFFSSxFQUFDO0FBQUEsbUJBQVVKLEtBQUUsRUFBRUssSUFBRSxFQUFDLFFBQU8sS0FBSyxHQUFFLENBQUMsRUFBRSxLQUFLLGVBQWMsS0FBSyxHQUFHLEVBQUUsVUFBVUUsSUFBRSxJQUFFLEdBQUVILElBQUU7QUFBQyxnQkFBSSxJQUFFSixHQUFFLFVBQVU7QUFBRSxZQUFBQSxLQUFFQSxHQUFFLElBQUlDLEtBQUUsR0FBRSxRQUFRO0FBQUEsVUFBQztBQUFDLGlCQUFPRCxHQUFFLEdBQUcsWUFBVUQsSUFBRUM7QUFBQSxRQUFDLEdBQUUsRUFBRSxhQUFXLFNBQVNELElBQUU7QUFBQyxjQUFJSyxLQUFFLEtBQUssR0FBRyxhQUFXLEVBQUUsR0FBRyxNQUFNLEdBQUVKLEtBQUUsRUFBRSxLQUFLLFFBQVEsR0FBRUksSUFBRSxFQUFDLGNBQWFMLEdBQUMsQ0FBQyxFQUFFLE1BQU0sU0FBU0EsSUFBRTtBQUFDLG1CQUFNLG1CQUFpQkEsR0FBRSxLQUFLLFlBQVk7QUFBQSxVQUFDLEVBQUU7QUFBRSxpQkFBT0MsTUFBR0EsR0FBRTtBQUFBLFFBQUs7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFRLFVBQUUsVUFBUSxTQUFTRCxJQUFFSyxJQUFFO0FBQUMsY0FBRyxDQUFDLEtBQUssTUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLFFBQU8sRUFBRSxLQUFLLE1BQUtMLElBQUVLLEVBQUM7QUFBRSxjQUFJSixLQUFFLEVBQUUsS0FBSyxPQUFPLHlCQUF5QixHQUFFLEVBQUMsUUFBTyxLQUFLLEdBQUUsQ0FBQztBQUFFLGlCQUFPLEVBQUUsS0FBS0EsSUFBRUQsSUFBRUssRUFBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLFdBQVUsSUFBRTtBQUFBLFFBQUMsR0FBRSxFQUFFLEtBQUcsU0FBU0wsSUFBRUssSUFBRUosSUFBRTtBQUFDLGNBQUlDLEtBQUVELE1BQUdJLElBQUVJLEtBQUVSLE1BQUdJLE1BQUcsR0FBRUUsS0FBRSxFQUFFLENBQUMsRUFBRSxHQUFFRSxFQUFDO0FBQUUsY0FBRyxZQUFVLE9BQU9ULEdBQUUsUUFBTyxFQUFFQSxFQUFDLEVBQUUsR0FBR1MsRUFBQztBQUFFLGNBQUlELE1BQUUsU0FBU1IsSUFBRUssSUFBRUosSUFBRTtBQUFDLGdCQUFJQyxLQUFFRixLQUFFLEtBQUdLLEtBQUUsS0FBSUYsS0FBRSxFQUFFRCxJQUFFRCxFQUFDO0FBQUUsZ0JBQUdJLE9BQUlGLEdBQUUsUUFBTSxDQUFDRCxJQUFFRyxFQUFDO0FBQUUsZ0JBQUlELEtBQUUsRUFBRUYsTUFBRyxNQUFJQyxLQUFFRSxNQUFHLEtBQUlKLEVBQUM7QUFBRSxtQkFBT0UsT0FBSUMsS0FBRSxDQUFDRixJQUFFQyxFQUFDLElBQUUsQ0FBQ0gsS0FBRSxLQUFHLEtBQUssSUFBSUcsSUFBRUMsRUFBQyxJQUFFLEtBQUksS0FBSyxJQUFJRCxJQUFFQyxFQUFDLENBQUM7QUFBQSxVQUFDLEdBQUUsRUFBRSxJQUFJSixJQUFFRSxFQUFDLEVBQUUsUUFBUSxHQUFFSyxJQUFFRSxFQUFDLEdBQUUsSUFBRUQsR0FBRSxDQUFDLEdBQUUsSUFBRUEsR0FBRSxDQUFDLEdBQUUsSUFBRSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUM7QUFBRSxpQkFBTyxFQUFFLEdBQUcsWUFBVUMsSUFBRTtBQUFBLFFBQUMsR0FBRSxFQUFFLEdBQUcsUUFBTSxXQUFVO0FBQUMsaUJBQU8sS0FBSyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFBQSxRQUFRLEdBQUUsRUFBRSxHQUFHLGFBQVcsU0FBU1QsSUFBRTtBQUFDLGNBQUVBO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDLEVBQUU7QUFBQTtBQUFBOzs7QUNBNW9FO0FBQUEscUNBQUFVLFVBQUFDLFNBQUE7QUFBQSxNQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBT0QsWUFBUyxlQUFhLE9BQU9DLFVBQU9BLFFBQU8sVUFBUSxFQUFFLElBQUUsY0FBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxLQUFHLElBQUUsZUFBYSxPQUFPLGFBQVcsYUFBVyxLQUFHLE1BQU0sbUJBQWlCLEVBQUU7QUFBQSxJQUFDLEdBQUVELFdBQU0sV0FBVTtBQUFDO0FBQWEsVUFBSSxJQUFFLFVBQVMsSUFBRSx3QkFBdUIsSUFBRTtBQUFlLGFBQU8sU0FBUyxHQUFFLEdBQUUsR0FBRTtBQUFDLFlBQUksSUFBRSxFQUFFO0FBQVUsVUFBRSxNQUFJLFNBQVNFLElBQUU7QUFBQyxjQUFJQyxLQUFFLEVBQUMsTUFBS0QsSUFBRSxLQUFJLE1BQUcsTUFBSyxVQUFTO0FBQUUsaUJBQU8sSUFBSSxFQUFFQyxFQUFDO0FBQUEsUUFBQyxHQUFFLEVBQUUsTUFBSSxTQUFTQSxJQUFFO0FBQUMsY0FBSUMsS0FBRSxFQUFFLEtBQUssT0FBTyxHQUFFLEVBQUMsUUFBTyxLQUFLLElBQUcsS0FBSSxLQUFFLENBQUM7QUFBRSxpQkFBT0QsS0FBRUMsR0FBRSxJQUFJLEtBQUssVUFBVSxHQUFFLENBQUMsSUFBRUE7QUFBQSxRQUFDLEdBQUUsRUFBRSxRQUFNLFdBQVU7QUFBQyxpQkFBTyxFQUFFLEtBQUssT0FBTyxHQUFFLEVBQUMsUUFBTyxLQUFLLElBQUcsS0FBSSxNQUFFLENBQUM7QUFBQSxRQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUU7QUFBTSxVQUFFLFFBQU0sU0FBU0YsSUFBRTtBQUFDLFVBQUFBLEdBQUUsUUFBTSxLQUFLLEtBQUcsT0FBSSxLQUFLLE9BQU8sRUFBRSxFQUFFQSxHQUFFLE9BQU8sTUFBSSxLQUFLLFVBQVFBLEdBQUUsVUFBUyxFQUFFLEtBQUssTUFBS0EsRUFBQztBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFLLFVBQUUsT0FBSyxXQUFVO0FBQUMsY0FBRyxLQUFLLElBQUc7QUFBQyxnQkFBSUEsS0FBRSxLQUFLO0FBQUcsaUJBQUssS0FBR0EsR0FBRSxlQUFlLEdBQUUsS0FBSyxLQUFHQSxHQUFFLFlBQVksR0FBRSxLQUFLLEtBQUdBLEdBQUUsV0FBVyxHQUFFLEtBQUssS0FBR0EsR0FBRSxVQUFVLEdBQUUsS0FBSyxLQUFHQSxHQUFFLFlBQVksR0FBRSxLQUFLLEtBQUdBLEdBQUUsY0FBYyxHQUFFLEtBQUssS0FBR0EsR0FBRSxjQUFjLEdBQUUsS0FBSyxNQUFJQSxHQUFFLG1CQUFtQjtBQUFBLFVBQUMsTUFBTSxHQUFFLEtBQUssSUFBSTtBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFVLFVBQUUsWUFBVSxTQUFTRyxJQUFFQyxJQUFFO0FBQUMsY0FBSUMsS0FBRSxLQUFLLE9BQU8sRUFBRTtBQUFFLGNBQUdBLEdBQUVGLEVBQUMsRUFBRSxRQUFPLEtBQUssS0FBRyxJQUFFRSxHQUFFLEtBQUssT0FBTyxJQUFFLEVBQUUsS0FBSyxJQUFJLElBQUUsS0FBSztBQUFRLGNBQUcsWUFBVSxPQUFPRixPQUFJQSxNQUFFLFNBQVNILElBQUU7QUFBQyx1QkFBU0EsT0FBSUEsS0FBRTtBQUFJLGdCQUFJRyxLQUFFSCxHQUFFLE1BQU0sQ0FBQztBQUFFLGdCQUFHLENBQUNHLEdBQUUsUUFBTztBQUFLLGdCQUFJQyxNQUFHLEtBQUdELEdBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFHLENBQUMsS0FBSSxHQUFFLENBQUMsR0FBRUUsS0FBRUQsR0FBRSxDQUFDLEdBQUVFLEtBQUUsS0FBRyxDQUFDRixHQUFFLENBQUMsSUFBRyxDQUFDQSxHQUFFLENBQUM7QUFBRSxtQkFBTyxNQUFJRSxLQUFFLElBQUUsUUFBTUQsS0FBRUMsS0FBRSxDQUFDQTtBQUFBLFVBQUMsR0FBRUgsRUFBQyxHQUFFLFNBQU9BLElBQUcsUUFBTztBQUFLLGNBQUlHLEtBQUUsS0FBSyxJQUFJSCxFQUFDLEtBQUcsS0FBRyxLQUFHQSxLQUFFQTtBQUFFLGNBQUcsTUFBSUcsR0FBRSxRQUFPLEtBQUssSUFBSUYsRUFBQztBQUFFLGNBQUlHLEtBQUUsS0FBSyxNQUFNO0FBQUUsY0FBR0gsR0FBRSxRQUFPRyxHQUFFLFVBQVFELElBQUVDLEdBQUUsS0FBRyxPQUFHQTtBQUFFLGNBQUlDLEtBQUUsS0FBSyxLQUFHLEtBQUssT0FBTyxFQUFFLGtCQUFrQixJQUFFLEtBQUcsS0FBSyxVQUFVO0FBQUUsa0JBQU9ELEtBQUUsS0FBSyxNQUFNLEVBQUUsSUFBSUQsS0FBRUUsSUFBRSxDQUFDLEdBQUcsVUFBUUYsSUFBRUMsR0FBRSxHQUFHLGVBQWFDLElBQUVEO0FBQUEsUUFBQztBQUFFLFlBQUksSUFBRSxFQUFFO0FBQU8sVUFBRSxTQUFPLFNBQVNQLElBQUU7QUFBQyxjQUFJQyxLQUFFRCxPQUFJLEtBQUssS0FBRywyQkFBeUI7QUFBSSxpQkFBTyxFQUFFLEtBQUssTUFBS0MsRUFBQztBQUFBLFFBQUMsR0FBRSxFQUFFLFVBQVEsV0FBVTtBQUFDLGNBQUlELEtBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRSxLQUFLLE9BQU8sSUFBRSxJQUFFLEtBQUssV0FBUyxLQUFLLEdBQUcsZ0JBQWMsS0FBSyxHQUFHLGtCQUFrQjtBQUFHLGlCQUFPLEtBQUssR0FBRyxRQUFRLElBQUUsTUFBSUE7QUFBQSxRQUFDLEdBQUUsRUFBRSxRQUFNLFdBQVU7QUFBQyxpQkFBTSxDQUFDLENBQUMsS0FBSztBQUFBLFFBQUUsR0FBRSxFQUFFLGNBQVksV0FBVTtBQUFDLGlCQUFPLEtBQUssT0FBTyxFQUFFLFlBQVk7QUFBQSxRQUFDLEdBQUUsRUFBRSxXQUFTLFdBQVU7QUFBQyxpQkFBTyxLQUFLLE9BQU8sRUFBRSxZQUFZO0FBQUEsUUFBQztBQUFFLFlBQUksSUFBRSxFQUFFO0FBQU8sVUFBRSxTQUFPLFNBQVNBLElBQUU7QUFBQyxpQkFBTSxRQUFNQSxNQUFHLEtBQUssVUFBUSxFQUFFLEtBQUssT0FBTyx5QkFBeUIsQ0FBQyxFQUFFLE9BQU8sSUFBRSxFQUFFLEtBQUssSUFBSTtBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFLLFVBQUUsT0FBSyxTQUFTQSxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsY0FBR0YsTUFBRyxLQUFLLE9BQUtBLEdBQUUsR0FBRyxRQUFPLEVBQUUsS0FBSyxNQUFLQSxJQUFFQyxJQUFFQyxFQUFDO0FBQUUsY0FBSUMsS0FBRSxLQUFLLE1BQU0sR0FBRUMsS0FBRSxFQUFFSixFQUFDLEVBQUUsTUFBTTtBQUFFLGlCQUFPLEVBQUUsS0FBS0csSUFBRUMsSUFBRUgsSUFBRUMsRUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQyxFQUFFO0FBQUE7QUFBQTs7O0FDQW50RTtBQUFBLDRDQUFBTyxVQUFBQyxTQUFBO0FBQUEsTUFBQyxTQUFTLEdBQUUsR0FBRTtBQUFDLGtCQUFVLE9BQU9ELFlBQVMsZUFBYSxPQUFPQyxVQUFPQSxRQUFPLFVBQVEsRUFBRSxJQUFFLGNBQVksT0FBTyxVQUFRLE9BQU8sTUFBSSxPQUFPLENBQUMsS0FBRyxJQUFFLGVBQWEsT0FBTyxhQUFXLGFBQVcsS0FBRyxNQUFNLDBCQUF3QixFQUFFO0FBQUEsSUFBQyxHQUFFRCxXQUFNLFdBQVU7QUFBQztBQUFhLFVBQUksSUFBRSxRQUFPLElBQUU7QUFBTyxhQUFPLFNBQVMsR0FBRSxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRTtBQUFVLFVBQUUsT0FBSyxTQUFTRSxJQUFFO0FBQUMsY0FBRyxXQUFTQSxPQUFJQSxLQUFFLE9BQU0sU0FBT0EsR0FBRSxRQUFPLEtBQUssSUFBSSxLQUFHQSxLQUFFLEtBQUssS0FBSyxJQUFHLEtBQUs7QUFBRSxjQUFJQyxLQUFFLEtBQUssUUFBUSxFQUFFLGFBQVc7QUFBRSxjQUFHLE9BQUssS0FBSyxNQUFNLEtBQUcsS0FBSyxLQUFLLElBQUUsSUFBRztBQUFDLGdCQUFJQyxLQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksR0FBRSxDQUFDLEVBQUUsS0FBS0QsRUFBQyxHQUFFLElBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUUsZ0JBQUdDLEdBQUUsU0FBUyxDQUFDLEVBQUUsUUFBTztBQUFBLFVBQUM7QUFBQyxjQUFJLElBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsS0FBS0QsRUFBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFNBQVMsR0FBRSxhQUFhLEdBQUUsSUFBRSxLQUFLLEtBQUssR0FBRSxHQUFFLElBQUU7QUFBRSxpQkFBTyxJQUFFLElBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxNQUFNLEVBQUUsS0FBSyxJQUFFLEtBQUssS0FBSyxDQUFDO0FBQUEsUUFBQyxHQUFFLEVBQUUsUUFBTSxTQUFTRSxJQUFFO0FBQUMsaUJBQU8sV0FBU0EsT0FBSUEsS0FBRSxPQUFNLEtBQUssS0FBS0EsRUFBQztBQUFBLFFBQUM7QUFBQSxNQUFDO0FBQUEsSUFBQyxFQUFFO0FBQUE7QUFBQTs7O0FDQXJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWlEOzs7QUNxSWpELElBQVk7Q0FBWixTQUFZQyxXQUFRO0FBQ2hCLEVBQUFBLFVBQUFBLFVBQUEsSUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFVBQUFBLFVBQUEsSUFBQSxJQUFBLENBQUEsSUFBQTtBQUNKLEdBSFksYUFBQSxXQUFRLENBQUEsRUFBQTtBQUtwQixJQUFZO0NBQVosU0FBWUMsVUFBTztBQUNmLEVBQUFBLFNBQUFBLFNBQUEsUUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsUUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsU0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsV0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsVUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsUUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFNBQUFBLFNBQUEsVUFBQSxJQUFBLENBQUEsSUFBQTtBQUNKLEdBUlksWUFBQSxVQUFPLENBQUEsRUFBQTtBQVVuQixJQUFZO0NBQVosU0FBWUMsUUFBSztBQUNiLEVBQUFBLE9BQUFBLE9BQUEsU0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsVUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsT0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsS0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsTUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsTUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsUUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsV0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsU0FBQSxJQUFBLEVBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsVUFBQSxJQUFBLEVBQUEsSUFBQTtBQUNBLEVBQUFBLE9BQUFBLE9BQUEsVUFBQSxJQUFBLEVBQUEsSUFBQTtBQUNKLEdBYlksVUFBQSxRQUFLLENBQUEsRUFBQTs7O0FDNUlYLFNBQVUsa0JBQWtCLFdBQThCLFFBQVk7QUFDeEUsWUFBVSxPQUFPLE9BQU8sT0FBTyxRQUFPLENBQUU7QUFDeEMsWUFBVSxPQUFPLFNBQVMsT0FBTyxTQUFRLElBQUssQ0FBQztBQUMvQyxZQUFVLE9BQU8sUUFBUSxPQUFPLFlBQVcsQ0FBRTtBQUNqRDtBQU9NLFNBQVUsa0JBQWtCLFdBQThCLFFBQVk7QUFDeEUsWUFBVSxPQUFPLFFBQVEsT0FBTyxTQUFRLENBQUU7QUFDMUMsWUFBVSxPQUFPLFVBQVUsT0FBTyxXQUFVLENBQUU7QUFDOUMsWUFBVSxPQUFPLFVBQVUsT0FBTyxXQUFVLENBQUU7QUFDOUMsWUFBVSxPQUFPLGVBQWUsT0FBTyxnQkFBZSxDQUFFO0FBQ3hELFlBQVUsT0FBTyxZQUFZLE9BQU8sU0FBUSxJQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsRUFBRTtBQUNuRjtBQU9NLFNBQVUsaUJBQWlCLFdBQThCLFFBQVk7QUFDdkUsWUFBVSxNQUFNLE9BQU8sT0FBTyxRQUFPLENBQUU7QUFDdkMsWUFBVSxNQUFNLFNBQVMsT0FBTyxTQUFRLElBQUssQ0FBQztBQUM5QyxZQUFVLE1BQU0sUUFBUSxPQUFPLFlBQVcsQ0FBRTtBQUNoRDtBQU9NLFNBQVUsaUJBQWlCLFdBQThCLFFBQVk7QUFDdkUsWUFBVSxNQUFNLFFBQVEsT0FBTyxTQUFRLENBQUU7QUFDekMsWUFBVSxNQUFNLFVBQVUsT0FBTyxXQUFVLENBQUU7QUFDN0MsWUFBVSxNQUFNLFVBQVUsT0FBTyxXQUFVLENBQUU7QUFDN0MsWUFBVSxNQUFNLGVBQWUsT0FBTyxnQkFBZSxDQUFFO0FBQ3ZELFlBQVUsTUFBTSxZQUFZLE9BQU8sU0FBUSxJQUFLLEtBQUssU0FBUyxLQUFLLFNBQVMsRUFBRTtBQUNsRjs7O0FDL0NPLElBQU0sb0JBQXFDO0VBQzlDLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUdOLEtBQUs7SUFDRCx5QkFBeUIsSUFBSTtJQUM3QixzQkFBc0I7SUFDdEIsVUFBVSxDQUFDLFNBQWlCLHNCQUFzQixNQUFNLE1BQU0sT0FBTyxRQUFRLFFBQVEsQ0FBQztJQUN0RixRQUFRLENBQUMsU0FBaUIsc0JBQXNCLE1BQU0sTUFBTSxTQUFTLFFBQVEsUUFBUSxDQUFDOztFQUUxRixPQUFPO0VBQ1AsT0FBTztFQUNQLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsSUFBSTtJQUNBLHlCQUF5QixLQUFLO0lBQzlCLHNCQUFzQixLQUFLO0lBQzNCLFVBQVUsQ0FBQyxTQUFpQixxQkFBcUIsTUFBTSxNQUFNLE9BQU8sUUFBUSxRQUFRLEdBQUcsQ0FBQztJQUN4RixRQUFRLENBQUMsU0FBaUIscUJBQXFCLE1BQU0sTUFBTSxVQUFVLFFBQVEsUUFBUSxHQUFHLENBQUM7O0VBRTdGLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsSUFBSTtJQUNBLHlCQUF5QixLQUFLO0lBQzlCLHNCQUFzQixLQUFLO0lBQzNCLFVBQVUsQ0FBQyxTQUFpQixxQkFBcUIsTUFBTSxNQUFNLE9BQU8sUUFBUSxRQUFRLEdBQUcsQ0FBQztJQUN4RixRQUFRLENBQUMsU0FBaUIscUJBQXFCLE1BQU0sTUFBTSxVQUFVLFFBQVEsUUFBUSxHQUFHLENBQUM7O0VBRTdGLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE9BQU87RUFDUCxNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07RUFDTixNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxJQUFJO0lBQ0EseUJBQXlCLEtBQUs7SUFDOUIsc0JBQXNCLEtBQUs7SUFDM0IsVUFBVSxDQUFDLFNBQWlCLHFCQUFxQixNQUFNLE1BQU0sT0FBTyxRQUFRLFFBQVEsR0FBRyxDQUFDO0lBQ3hGLFFBQVEsQ0FBQyxTQUFpQixxQkFBcUIsTUFBTSxNQUFNLFVBQVUsUUFBUSxRQUFRLEdBQUcsQ0FBQzs7RUFFN0YsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsT0FBTztFQUNQLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE9BQU87RUFDUCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxPQUFPO0VBQ1AsTUFBTTtFQUNOLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsSUFBSTtJQUNBLHlCQUF5QixLQUFLO0lBQzlCLHNCQUFzQixLQUFLO0lBQzNCLFVBQVUsQ0FBQyxTQUFpQixxQkFBcUIsTUFBTSxNQUFNLE9BQU8sUUFBUSxRQUFRLEdBQUcsQ0FBQztJQUN4RixRQUFRLENBQUMsU0FBaUIscUJBQXFCLE1BQU0sTUFBTSxVQUFVLFFBQVEsUUFBUSxHQUFHLENBQUM7O0VBRTdGLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxLQUFLO0VBQ0wsS0FBSztFQUNMLE9BQU87RUFDUCxNQUFNO0VBQ04sS0FBSztFQUNMLE1BQU07RUFDTixLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixLQUFLO0VBQ0wsS0FBSztFQUNMLEtBQUs7RUFDTCxNQUFNO0VBQ04sS0FBSztFQUNMLEtBQUs7RUFDTCxLQUFLO0VBQ0wsTUFBTTtFQUNOLEtBQUs7RUFDTCxJQUFJO0VBQ0osT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0VBQ04sT0FBTztFQUNQLE1BQU07O0FBY0osU0FBVSxxQkFBcUIsTUFBYyxPQUFjLFNBQWtCLEdBQWtCLE9BQU8sR0FBQztBQUN6RyxNQUFJLGFBQWE7QUFDakIsTUFBSSxJQUFJO0FBQ1IsU0FBTyxJQUFJLEdBQUc7QUFDVjtBQUNBLFVBQU0sT0FBTyxJQUFJLEtBQUssTUFBTSxRQUFRLEdBQUcsVUFBVTtBQUNqRCxRQUFJLEtBQUssT0FBTSxNQUFPO0FBQVM7RUFDbkM7QUFDQSxTQUFPLElBQUksS0FBSyxNQUFNLFFBQVEsR0FBRyxZQUFZLElBQUk7QUFDckQ7QUFZTSxTQUFVLHNCQUFzQixNQUFjLE9BQWMsU0FBa0IsT0FBTyxHQUFDO0FBR3hGLFFBQU0sb0JBQW9CLFlBQVksSUFBSSxJQUFJO0FBQzlDLFFBQU0sT0FBTyxJQUFJLEtBQUssTUFBTSxRQUFRLElBQUksR0FBRyxHQUFHLEVBQUU7QUFDaEQsUUFBTSx3QkFBd0IsS0FBSyxPQUFNLE1BQU8sSUFBSSxJQUFJLEtBQUssT0FBTTtBQUNuRSxNQUFJO0FBQ0osTUFBSSwwQkFBMEI7QUFBbUIsY0FBVTtXQUNsRCx3QkFBd0I7QUFBbUIsY0FBVSxJQUFJLHdCQUF3Qjs7QUFDckYsY0FBVSx3QkFBd0I7QUFDdkMsT0FBSyxRQUFRLEtBQUssUUFBTyxJQUFLLE9BQU87QUFDckMsU0FBTyxJQUFJLEtBQUssTUFBTSxRQUFRLEdBQUcsS0FBSyxRQUFPLEdBQUksSUFBSTtBQUN6RDtBQVdNLFNBQVUsaUJBQ1osZUFDQSxNQUNBLG9CQUFxQyxDQUFBLEdBQUU7QUFFdkMsTUFBSSxpQkFBaUIsTUFBTTtBQUN2QixXQUFPO0VBQ1g7QUFFQSxNQUFJLE9BQU8sa0JBQWtCLFVBQVU7QUFDbkMsV0FBTztFQUNYO0FBRUEsUUFBTSxrQkFBa0Isa0JBQWtCLGFBQWEsS0FBSyxrQkFBa0IsYUFBYTtBQUMzRixNQUFJLG1CQUFtQixNQUFNO0FBQ3pCLFdBQU87RUFDWDtBQUVBLE1BQUksT0FBTyxtQkFBbUIsVUFBVTtBQUNwQyxXQUFPO0VBQ1g7QUFNQSxNQUFJLFFBQVEsTUFBTTtBQUNkLFdBQU87RUFDWDtBQUdBLE1BQUksT0FBTyxnQkFBZ0IsU0FBUyxLQUFLLFlBQVcsQ0FBRSxLQUFLLEVBQUUsT0FBTyxnQkFBZ0IsT0FBTyxLQUFLLFlBQVcsQ0FBRSxJQUFJO0FBQzdHLFdBQU8sZ0JBQWdCO0VBQzNCO0FBR0EsU0FBTyxnQkFBZ0I7QUFDM0I7OztBQzlTTyxJQUFNLGdCQUFnQjtFQUN6QixLQUFLO0VBQ0wsUUFBUTtFQUNSLGFBQWE7O0FBUVgsU0FBVSxZQUFZLEtBQVcsVUFBa0I7QUFDckQsTUFBSSxPQUFPLElBQUksS0FBSyxHQUFHO0FBR3ZCLE1BQUksU0FBUyxHQUFHLEdBQUc7QUFDZixhQUFTLE1BQU0sSUFBSSxTQUFTLEdBQUc7QUFDL0IsV0FBTyxTQUFTLEdBQUc7RUFDdkI7QUFDQSxNQUFJLFNBQVMsSUFBSSxHQUFHO0FBQ2hCLGFBQVMsT0FBTyxJQUFJLFNBQVMsSUFBSTtBQUNqQyxXQUFPLFNBQVMsSUFBSTtFQUN4QjtBQUNBLE1BQUksU0FBUyxHQUFHLEdBQUc7QUFDZixhQUFTLE9BQU8sSUFBSSxTQUFTLEdBQUc7QUFDaEMsV0FBTyxTQUFTLEdBQUc7RUFDdkI7QUFDQSxNQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ2YsYUFBUyxNQUFNLElBQUksU0FBUyxHQUFHO0FBQy9CLFdBQU8sU0FBUyxHQUFHO0VBQ3ZCO0FBQ0EsTUFBSSxTQUFTLEdBQUcsR0FBRztBQUNmLGFBQVMsS0FBSyxJQUFJLFNBQVMsR0FBRztBQUM5QixXQUFPLFNBQVMsR0FBRztFQUN2QjtBQUNBLE1BQUksU0FBUyxHQUFHLEdBQUc7QUFDZixhQUFTLE1BQU0sSUFBSSxTQUFTLEdBQUc7QUFDL0IsV0FBTyxTQUFTLEdBQUc7RUFDdkI7QUFDQSxNQUFJLFNBQVMsR0FBRyxHQUFHO0FBQ2YsYUFBUyxRQUFRLElBQUksU0FBUyxHQUFHO0FBQ2pDLFdBQU8sU0FBUyxHQUFHO0VBQ3ZCO0FBQ0EsTUFBSSxTQUFTLEdBQUcsR0FBRztBQUNmLGFBQVMsUUFBUSxJQUFJLFNBQVMsR0FBRztBQUNqQyxXQUFPLFNBQVMsR0FBRztFQUN2QjtBQUNBLE1BQUksU0FBUyxJQUFJLEdBQUc7QUFDaEIsYUFBUyxhQUFhLElBQUksU0FBUyxJQUFJO0FBQ3ZDLFdBQU8sU0FBUyxJQUFJO0VBQ3hCO0FBRUEsTUFBSSxVQUFVLFVBQVU7QUFDcEIsVUFBTSxRQUFRLEtBQUssTUFBTSxTQUFTLE1BQU0sQ0FBQztBQUN6QyxTQUFLLFlBQVksS0FBSyxZQUFXLElBQUssS0FBSztBQUMzQyxVQUFNLG9CQUFvQixTQUFTLE1BQU0sSUFBSTtBQUM3QyxRQUFJLG9CQUFvQixHQUFHO0FBQ3ZCLGVBQVMsUUFBUSxVQUFVLFNBQVM7QUFDcEMsZUFBUyxTQUFTLG9CQUFvQjtJQUMxQztFQUNKO0FBQ0EsTUFBSSxhQUFhLFVBQVU7QUFDdkIsVUFBTSxRQUFRLEtBQUssTUFBTSxTQUFTLFNBQVMsQ0FBQztBQUM1QyxTQUFLLFNBQVMsS0FBSyxTQUFRLElBQUssUUFBUSxDQUFDO0VBQzdDO0FBQ0EsTUFBSSxXQUFXLFVBQVU7QUFDckIsVUFBTSxRQUFRLEtBQUssTUFBTSxTQUFTLE9BQU8sQ0FBQztBQUMxQyxTQUFLLFNBQVMsS0FBSyxTQUFRLElBQUssS0FBSztBQUNyQyxVQUFNLG9CQUFvQixTQUFTLE9BQU8sSUFBSTtBQUM5QyxRQUFJLG9CQUFvQixHQUFHO0FBQ3ZCLGVBQVMsT0FBTyxVQUFVLFFBQVE7QUFDbEMsZUFBUyxRQUFRLG9CQUFvQjtJQUN6QztFQUNKO0FBQ0EsTUFBSSxVQUFVLFVBQVU7QUFDcEIsVUFBTSxRQUFRLEtBQUssTUFBTSxTQUFTLE1BQU0sQ0FBQztBQUN6QyxTQUFLLFFBQVEsS0FBSyxRQUFPLElBQUssUUFBUSxDQUFDO0FBQ3ZDLFVBQU0sb0JBQW9CLFNBQVMsTUFBTSxJQUFJO0FBQzdDLFFBQUksb0JBQW9CLEdBQUc7QUFDdkIsZUFBUyxNQUFNLFVBQVUsT0FBTztBQUNoQyxlQUFTLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixDQUFDO0lBQ3BEO0VBQ0o7QUFDQSxNQUFJLFNBQVMsVUFBVTtBQUNuQixVQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVMsS0FBSyxDQUFDO0FBQ3hDLFNBQUssUUFBUSxLQUFLLFFBQU8sSUFBSyxLQUFLO0FBQ25DLFVBQU0sb0JBQW9CLFNBQVMsS0FBSyxJQUFJO0FBQzVDLFFBQUksb0JBQW9CLEdBQUc7QUFDdkIsZUFBUyxPQUFPLFVBQVUsUUFBUTtBQUNsQyxlQUFTLFFBQVEsS0FBSyxNQUFNLG9CQUFvQixFQUFFO0lBQ3REO0VBQ0o7QUFDQSxNQUFJLFVBQVUsVUFBVTtBQUNwQixVQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVMsTUFBTSxDQUFDO0FBQ3pDLFNBQUssU0FBUyxLQUFLLFNBQVEsSUFBSyxLQUFLO0FBQ3JDLFVBQU0sb0JBQW9CLFNBQVMsTUFBTSxJQUFJO0FBQzdDLFFBQUksb0JBQW9CLEdBQUc7QUFDdkIsZUFBUyxTQUFTLFVBQVUsVUFBVTtBQUN0QyxlQUFTLFVBQVUsS0FBSyxNQUFNLG9CQUFvQixFQUFFO0lBQ3hEO0VBQ0o7QUFDQSxNQUFJLFlBQVksVUFBVTtBQUN0QixVQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVMsUUFBUSxDQUFDO0FBQzNDLFNBQUssV0FBVyxLQUFLLFdBQVUsSUFBSyxLQUFLO0FBQ3pDLFVBQU0sb0JBQW9CLFNBQVMsUUFBUSxJQUFJO0FBQy9DLFFBQUksb0JBQW9CLEdBQUc7QUFDdkIsZUFBUyxTQUFTLFVBQVUsVUFBVTtBQUN0QyxlQUFTLFVBQVUsS0FBSyxNQUFNLG9CQUFvQixFQUFFO0lBQ3hEO0VBQ0o7QUFDQSxNQUFJLFlBQVksVUFBVTtBQUN0QixVQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVMsUUFBUSxDQUFDO0FBQzNDLFNBQUssV0FBVyxLQUFLLFdBQVUsSUFBSyxLQUFLO0FBQ3pDLFVBQU0sb0JBQW9CLFNBQVMsUUFBUSxJQUFJO0FBQy9DLFFBQUksb0JBQW9CLEdBQUc7QUFDdkIsZUFBUyxjQUFjLFVBQVUsZUFBZTtBQUNoRCxlQUFTLGVBQWUsS0FBSyxNQUFNLG9CQUFvQixHQUFJO0lBQy9EO0VBQ0o7QUFDQSxNQUFJLGlCQUFpQixVQUFVO0FBQzNCLFVBQU0sUUFBUSxLQUFLLE1BQU0sU0FBUyxhQUFhLENBQUM7QUFDaEQsU0FBSyxnQkFBZ0IsS0FBSyxnQkFBZSxJQUFLLEtBQUs7RUFDdkQ7QUFDQSxTQUFPO0FBQ1g7QUFNTSxTQUFVLGdCQUFnQixVQUFrQjtBQUM5QyxRQUFNLFdBQVcsQ0FBQTtBQUNqQixhQUFXLE9BQU8sVUFBVTtBQUV4QixhQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRztFQUNqQztBQUNBLFNBQU87QUFDWDs7O0FDbEpNLElBQU8sd0JBQVAsTUFBTyx1QkFBcUI7RUFDckI7RUFDQTtFQUVULFlBQVksU0FBZ0IsZ0JBQXVCO0FBQy9DLFNBQUssVUFBVSxXQUFXLG9CQUFJLEtBQUk7QUFDbEMsU0FBSyxpQkFBaUIsa0JBQWtCO0VBQzVDO0VBRUEsT0FBTyxTQUFTLE1BQVU7QUFDdEIsV0FBTyxJQUFJLHVCQUFzQixJQUFJO0VBQ3pDO0VBRUEsT0FBTyxVQUFVLE9BQWlDLG1CQUFtQztBQUNqRixRQUFJLGlCQUFpQixNQUFNO0FBQ3ZCLGFBQU8sdUJBQXNCLFNBQVMsS0FBSztJQUMvQztBQUNBLFVBQU0sVUFBZ0IsT0FBTyxXQUFXLG9CQUFJLEtBQUk7QUFDaEQsVUFBTSxpQkFBaUIsaUJBQWlCLE9BQU8sVUFBVSxTQUFTLGlCQUFpQjtBQUNuRixXQUFPLElBQUksdUJBQXNCLFNBQVMsY0FBYztFQUM1RDtFQU1BLDhCQUEyQjtBQUN2QixVQUFNLE9BQU8sSUFBSSxLQUFLLEtBQUssT0FBTztBQUNsQyxRQUFJLEtBQUssbUJBQW1CLE1BQU07QUFDOUIsV0FBSyxXQUFXLEtBQUssV0FBVSxJQUFLLEtBQUssa0NBQWtDLEtBQUssT0FBTyxDQUFDO0lBQzVGO0FBQ0EsV0FBTztFQUNYO0VBT0Esa0NBQWtDLE1BQWEsd0JBQStCO0FBQzFFLFFBQUksQ0FBQyxRQUFRLEtBQUssUUFBTyxJQUFLLEdBQUc7QUFHN0IsYUFBTyxvQkFBSSxLQUFJO0lBQ25CO0FBRUEsVUFBTSx3QkFBd0IsQ0FBQyxLQUFLLGtCQUFpQjtBQUNyRCxVQUFNLHVCQUF1QiwwQkFBMEIsS0FBSyxrQkFBa0I7QUFDOUUsV0FBTyx3QkFBd0I7RUFDbkM7RUFFQSxvQkFBaUI7QUFDYixXQUFPLEtBQUssa0JBQWtCLENBQUMsS0FBSyxRQUFRLGtCQUFpQjtFQUNqRTs7QUFHRSxJQUFPLG9CQUFQLE1BQU8sbUJBQWlCO0VBQ2xCO0VBQ0E7RUFDQTtFQUNBLFFBQVEsb0JBQUksSUFBRztFQUV2QixZQUFZLFdBQWtDLGlCQUErQztBQUN6RixTQUFLLFlBQVk7QUFDakIsU0FBSyxjQUFjLENBQUE7QUFDbkIsU0FBSyxnQkFBZ0IsQ0FBQTtBQUNyQixRQUFJLGlCQUFpQjtBQUNqQixpQkFBVyxPQUFPLGlCQUFpQjtBQUMvQixhQUFLLFlBQVksR0FBZ0IsSUFBSSxnQkFBZ0IsR0FBZ0I7TUFDekU7SUFDSjtBQUVBLFVBQU0sT0FBTyxVQUFVLDRCQUEyQjtBQUNsRCxTQUFLLE1BQU0sT0FBTyxLQUFLLFFBQU8sQ0FBRTtBQUNoQyxTQUFLLE1BQU0sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQ3ZDLFNBQUssTUFBTSxRQUFRLEtBQUssWUFBVyxDQUFFO0FBQ3JDLFNBQUssTUFBTSxRQUFRLEVBQUU7QUFDckIsU0FBSyxNQUFNLFVBQVUsQ0FBQztBQUN0QixTQUFLLE1BQU0sVUFBVSxDQUFDO0FBQ3RCLFNBQUssTUFBTSxlQUFlLENBQUM7RUFDL0I7RUFFQSxPQUFPLDRCQUNILFdBQ0EsV0FBcUIsZUFBYTtBQUVsQyxRQUFJLE9BQU8sWUFBWSxVQUFVLDRCQUEyQixHQUFJLFFBQVE7QUFFeEUsVUFBTSxhQUFhLElBQUksbUJBQWtCLFNBQVM7QUFDbEQsZUFBVyxPQUFPLHFCQUFxQjtBQUN2QyxRQUFJLFVBQVUsWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLGlCQUFpQixVQUFVO0FBQ2pHLGlCQUFXLE9BQU8sNEJBQTRCO0FBQzlDLHdCQUFrQixZQUFZLElBQUk7QUFDbEMsd0JBQWtCLFlBQVksSUFBSTtBQUNsQyxpQkFBVyxPQUFPLGtCQUFrQixVQUFVLGtCQUFpQixDQUFFO0lBQ3JFLE9BQU87QUFDSCx1QkFBaUIsWUFBWSxJQUFJO0FBQ2pDLGlCQUFXLE1BQU0sa0JBQWtCLFVBQVUsa0JBQWlCLENBQUU7QUFFaEUsVUFBSSxTQUFTLFVBQVU7QUFDbkIsbUJBQVcsT0FBTyxPQUFPLEtBQUssUUFBTyxDQUFFO0FBQ3ZDLG1CQUFXLE9BQU8sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQzlDLG1CQUFXLE9BQU8sUUFBUSxLQUFLLFlBQVcsQ0FBRTtBQUM1QyxtQkFBVyxPQUFPLFdBQVcsS0FBSyxPQUFNLENBQUU7TUFDOUMsV0FBVyxVQUFVLFVBQVU7QUFDM0IsbUJBQVcsT0FBTyxPQUFPLEtBQUssUUFBTyxDQUFFO0FBQ3ZDLG1CQUFXLE9BQU8sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQzlDLG1CQUFXLE9BQU8sUUFBUSxLQUFLLFlBQVcsQ0FBRTtBQUM1QyxtQkFBVyxNQUFNLFdBQVcsS0FBSyxPQUFNLENBQUU7TUFDN0MsT0FBTztBQUNILG1CQUFXLE1BQU0sT0FBTyxLQUFLLFFBQU8sQ0FBRTtBQUN0QyxZQUFJLFdBQVcsVUFBVTtBQUNyQixxQkFBVyxPQUFPLFNBQVMsS0FBSyxTQUFRLElBQUssQ0FBQztBQUM5QyxxQkFBVyxPQUFPLFFBQVEsS0FBSyxZQUFXLENBQUU7UUFDaEQsT0FBTztBQUNILHFCQUFXLE1BQU0sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQzdDLGNBQUksVUFBVSxVQUFVO0FBQ3BCLHVCQUFXLE9BQU8sUUFBUSxLQUFLLFlBQVcsQ0FBRTtVQUNoRCxPQUFPO0FBQ0gsdUJBQVcsTUFBTSxRQUFRLEtBQUssWUFBVyxDQUFFO1VBQy9DO1FBQ0o7TUFDSjtJQUNKO0FBRUEsV0FBTztFQUNYO0VBRUEsSUFBSSxXQUFvQjtBQUNwQixRQUFJLGFBQWEsS0FBSyxhQUFhO0FBQy9CLGFBQU8sS0FBSyxZQUFZLFNBQVM7SUFDckM7QUFFQSxRQUFJLGFBQWEsS0FBSyxlQUFlO0FBQ2pDLGFBQU8sS0FBSyxjQUFjLFNBQVM7SUFDdkM7QUFFQSxXQUFPO0VBQ1g7RUFFQSxVQUFVLFdBQW9CO0FBQzFCLFdBQU8sYUFBYSxLQUFLO0VBQzdCO0VBRUEsdUJBQW9CO0FBQ2hCLFdBQU8sT0FBTyxLQUFLLEtBQUssV0FBVztFQUN2QztFQUVBLE1BQU0sV0FBc0IsT0FBYTtBQUNyQyxRQUFJLGFBQWEsS0FBSyxhQUFhO0FBQy9CLGFBQU87SUFDWDtBQUNBLFNBQUssY0FBYyxTQUFTLElBQUk7QUFDaEMsV0FBTztFQUNYO0VBRUEsT0FBTyxXQUFzQixPQUFhO0FBQ3RDLFNBQUssWUFBWSxTQUFTLElBQUk7QUFDOUIsV0FBTyxLQUFLLGNBQWMsU0FBUztBQUNuQyxXQUFPO0VBQ1g7RUFNQSxxQkFBcUIsVUFBa0I7QUFDbkMsVUFBTSxjQUFjLEtBQUssOEJBQTZCO0FBQ3RELFVBQU0sT0FBTyxZQUFZLGFBQWEsUUFBUTtBQUM5QyxRQUFJLFNBQVMsWUFBWSxVQUFVLFlBQVksV0FBVyxZQUFZLFVBQVUsVUFBVTtBQUN0RixXQUFLLE9BQU8sQ0FBQyxPQUFPLFdBQVcsU0FBUyxNQUFNLENBQUM7QUFDL0MsV0FBSyxNQUFNLE9BQU8sS0FBSyxRQUFPLENBQUU7QUFDaEMsV0FBSyxNQUFNLFdBQVcsS0FBSyxPQUFNLENBQUU7QUFDbkMsV0FBSyxNQUFNLFNBQVMsS0FBSyxTQUFRLElBQUssQ0FBQztBQUN2QyxXQUFLLE1BQU0sUUFBUSxLQUFLLFlBQVcsQ0FBRTtJQUN6QztBQUNBLFFBQUksWUFBWSxZQUFZLFlBQVksWUFBWSxVQUFVLFVBQVU7QUFDcEUsV0FBSyxPQUFPLENBQUMsVUFBVSxVQUFVLE1BQU0sQ0FBQztBQUN4QyxXQUFLLE1BQU0sVUFBVSxLQUFLLFdBQVUsQ0FBRTtBQUN0QyxXQUFLLE1BQU0sVUFBVSxLQUFLLFdBQVUsQ0FBRTtBQUN0QyxXQUFLLE1BQU0sUUFBUSxLQUFLLFNBQVEsQ0FBRTtJQUN0QztBQUNBLFdBQU87RUFDWDtFQUVBLE9BQU8sWUFBbUM7QUFDdEMsUUFBSSxPQUFPLGVBQWUsVUFBVTtBQUNoQyxtQkFBYSxDQUFDLFVBQVU7SUFDNUI7QUFDQSxlQUFXLGFBQWEsWUFBWTtBQUNoQyxhQUFPLEtBQUssWUFBWSxTQUFTO0FBQ2pDLGFBQU8sS0FBSyxjQUFjLFNBQVM7SUFDdkM7RUFDSjtFQUVBLFFBQUs7QUFDRCxVQUFNLFlBQVksSUFBSSxtQkFBa0IsS0FBSyxTQUFTO0FBQ3RELGNBQVUsY0FBYyxDQUFBO0FBQ3hCLGNBQVUsZ0JBQWdCLENBQUE7QUFFMUIsZUFBVyxPQUFPLEtBQUssYUFBYTtBQUNoQyxnQkFBVSxZQUFZLEdBQWdCLElBQUksS0FBSyxZQUFZLEdBQWdCO0lBQy9FO0FBRUEsZUFBVyxPQUFPLEtBQUssZUFBZTtBQUNsQyxnQkFBVSxjQUFjLEdBQWdCLElBQUksS0FBSyxjQUFjLEdBQWdCO0lBQ25GO0FBRUEsV0FBTztFQUNYO0VBRUEsYUFBVTtBQUNOLFdBQU8sQ0FBQyxLQUFLLFVBQVUsTUFBTSxLQUFLLENBQUMsS0FBSyxVQUFVLFFBQVEsS0FBSyxDQUFDLEtBQUssVUFBVSxRQUFRO0VBQzNGO0VBRUEsYUFBVTtBQUNOLFdBQ0ksQ0FBQyxLQUFLLFVBQVUsU0FBUyxLQUFLLENBQUMsS0FBSyxVQUFVLEtBQUssS0FBSyxDQUFDLEtBQUssVUFBVSxPQUFPLEtBQUssQ0FBQyxLQUFLLFVBQVUsTUFBTTtFQUVsSDtFQUVBLHlCQUFzQjtBQUNsQixXQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssQ0FBQyxLQUFLLFVBQVUsS0FBSyxLQUFLLENBQUMsS0FBSyxVQUFVLE9BQU87RUFDekY7RUFFQSx3QkFBcUI7QUFDakIsV0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLENBQUMsS0FBSyxVQUFVLE1BQU07RUFDNUQ7RUFFQSxjQUFXO0FBQ1AsVUFBTSxPQUFPLEtBQUssOEJBQTZCO0FBRS9DLFFBQUksS0FBSyxZQUFXLE1BQU8sS0FBSyxJQUFJLE1BQU07QUFBRyxhQUFPO0FBQ3BELFFBQUksS0FBSyxTQUFRLE1BQU8sS0FBSyxJQUFJLE9BQU8sSUFBSTtBQUFHLGFBQU87QUFDdEQsUUFBSSxLQUFLLFFBQU8sTUFBTyxLQUFLLElBQUksS0FBSztBQUFHLGFBQU87QUFDL0MsUUFBSSxLQUFLLElBQUksTUFBTSxLQUFLLFFBQVEsS0FBSyxTQUFRLEtBQU0sS0FBSyxJQUFJLE1BQU07QUFBRyxhQUFPO0FBQzVFLFFBQUksS0FBSyxJQUFJLFFBQVEsS0FBSyxRQUFRLEtBQUssV0FBVSxLQUFNLEtBQUssSUFBSSxRQUFRO0FBQUcsYUFBTztBQUVsRixXQUFPO0VBQ1g7RUFFQSxXQUFRO0FBQ0osV0FBTztvQkFDSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxFQUFFLEtBQUksQ0FBRSxDQUFDOzJCQUN0QyxLQUFLLFVBQVUsS0FBSyxXQUFXLENBQUM7NkJBQzlCLEtBQUssVUFBVSxLQUFLLGFBQWEsQ0FBQzt5QkFDdEMsS0FBSyxVQUFVLEtBQUssU0FBUyxDQUFDO0VBQ25EO0VBRUEsT0FBSTtBQUNBLFVBQU0sT0FBTyxLQUFLLDhCQUE2QjtBQUMvQyxVQUFNLHFCQUFxQixLQUFLLFVBQVUsa0NBQWtDLE1BQU0sS0FBSyxJQUFJLGdCQUFnQixDQUFDO0FBQzVHLFdBQU8sSUFBSSxLQUFLLEtBQUssUUFBTyxJQUFLLHFCQUFxQixHQUFLO0VBQy9EO0VBRUEsT0FBTyxLQUFXO0FBQ2QsU0FBSyxNQUFNLElBQUksR0FBRztBQUNsQixXQUFPO0VBQ1g7RUFFQSxRQUFRLE1BQTRCO0FBQ2hDLGVBQVcsT0FBTyxNQUFNO0FBQ3BCLFdBQUssTUFBTSxJQUFJLEdBQUc7SUFDdEI7QUFDQSxXQUFPO0VBQ1g7RUFFQSxPQUFJO0FBQ0EsV0FBTyxJQUFJLElBQUksS0FBSyxLQUFLO0VBQzdCO0VBRVEsZ0NBQTZCO0FBQ2pDLFVBQU0sT0FBTyxJQUFJLEtBQ2IsS0FBSyxJQUFJLE1BQU0sR0FDZixLQUFLLElBQUksT0FBTyxJQUFJLEdBQ3BCLEtBQUssSUFBSSxLQUFLLEdBQ2QsS0FBSyxJQUFJLE1BQU0sR0FDZixLQUFLLElBQUksUUFBUSxHQUNqQixLQUFLLElBQUksUUFBUSxHQUNqQixLQUFLLElBQUksYUFBYSxDQUFDO0FBRzNCLFNBQUssWUFBWSxLQUFLLElBQUksTUFBTSxDQUFDO0FBQ2pDLFdBQU87RUFDWDs7QUFHRSxJQUFPLGdCQUFQLE1BQU8sZUFBYTtFQUN0QjtFQUNBO0VBQ0E7RUFFQTtFQUVBO0VBQ0E7RUFFQSxZQUNJLFdBQ0EsT0FDQSxNQUNBLE9BQ0EsS0FBdUI7QUFFdkIsU0FBSyxZQUFZO0FBQ2pCLFNBQUssVUFBVSxVQUFVO0FBQ3pCLFNBQUssUUFBUTtBQUNiLFNBQUssT0FBTztBQUNaLFNBQUssUUFBUSxTQUFTLElBQUksa0JBQWtCLFNBQVM7QUFDckQsU0FBSyxNQUFNO0VBQ2Y7RUFFQSxRQUFLO0FBQ0QsVUFBTSxTQUFTLElBQUksZUFBYyxLQUFLLFdBQVcsS0FBSyxPQUFPLEtBQUssSUFBSTtBQUN0RSxXQUFPLFFBQVEsS0FBSyxRQUFRLEtBQUssTUFBTSxNQUFLLElBQUs7QUFDakQsV0FBTyxNQUFNLEtBQUssTUFBTSxLQUFLLElBQUksTUFBSyxJQUFLO0FBQzNDLFdBQU87RUFDWDtFQUVBLE9BQUk7QUFDQSxXQUFPLEtBQUssTUFBTSxLQUFJO0VBQzFCO0VBRUEsT0FBTyxLQUFXO0FBQ2QsU0FBSyxNQUFNLE9BQU8sR0FBRztBQUNyQixRQUFJLEtBQUssS0FBSztBQUNWLFdBQUssSUFBSSxPQUFPLEdBQUc7SUFDdkI7QUFDQSxXQUFPO0VBQ1g7RUFFQSxRQUFRLE1BQTRCO0FBQ2hDLFNBQUssTUFBTSxRQUFRLElBQUk7QUFDdkIsUUFBSSxLQUFLLEtBQUs7QUFDVixXQUFLLElBQUksUUFBUSxJQUFJO0lBQ3pCO0FBQ0EsV0FBTztFQUNYO0VBRUEsT0FBSTtBQUNBLFVBQU0sZUFBNEIsSUFBSSxJQUFJLEtBQUssTUFBTSxLQUFJLENBQUU7QUFDM0QsUUFBSSxLQUFLLEtBQUs7QUFDVixpQkFBVyxPQUFPLEtBQUssSUFBSSxLQUFJLEdBQUk7QUFDL0IscUJBQWEsSUFBSSxHQUFHO01BQ3hCO0lBQ0o7QUFDQSxXQUFPO0VBQ1g7RUFFQSxXQUFRO0FBQ0osVUFBTSxPQUFPLE1BQU0sS0FBSyxLQUFLLEtBQUksQ0FBRSxFQUFFLEtBQUk7QUFDekMsV0FBTywwQkFBMEIsS0FBSyxLQUFLLFlBQVksS0FBSyxJQUFJLFlBQVksS0FBSyxVQUFVLElBQUksQ0FBQztFQUNwRzs7OztBQ3BXRSxTQUFVLHdCQUNaLFFBQ0EsdUJBQ0EsbUJBQW1CLHNCQUFvQjtBQUV2QyxRQUFNLGlDQUFpQyxzQkFBc0IsUUFBUSxhQUFhLEtBQUs7QUFDdkYsU0FBTyxHQUFHLE1BQU0sR0FBRyw4QkFBOEIsTUFBTSxnQkFBZ0IsR0FBRyw4QkFBOEI7QUFDNUc7QUFFTSxTQUFVLGFBQWEsWUFBMEI7QUFDbkQsTUFBSTtBQUNKLE1BQUksc0JBQXNCLE9BQU87QUFDN0IsV0FBTyxDQUFDLEdBQUcsVUFBVTtFQUN6QixXQUFXLHNCQUFzQixLQUFLO0FBQ2xDLFdBQU8sTUFBTSxLQUFNLFdBQW9DLEtBQUksQ0FBRTtFQUNqRSxPQUFPO0FBQ0gsV0FBTyxPQUFPLEtBQUssVUFBVTtFQUNqQztBQUVBLFNBQU87QUFDWDtBQUVNLFNBQVUsZ0JBQWdCLFlBQTBCO0FBR3RELFFBQU0sY0FBYyxhQUFhLFVBQVUsRUFDdEMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQ2xDLEtBQUssR0FBRyxFQUNSLFFBQVEsT0FBTyxLQUFLO0FBRXpCLFNBQU8sTUFBTSxXQUFXO0FBQzVCOzs7QUN6Qk0sU0FBVSxxQkFBcUIsWUFBa0I7QUFDbkQsTUFBSSxhQUFhLEtBQUs7QUFDbEIsUUFBSSxhQUFhLElBQUk7QUFDakIsbUJBQWEsYUFBYTtJQUM5QixPQUFPO0FBQ0gsbUJBQWEsYUFBYTtJQUM5QjtFQUNKO0FBRUEsU0FBTztBQUNYO0FBRU0sU0FBVSxxQkFBcUIsU0FBZSxLQUFhLE9BQWE7QUFDMUUsTUFBSSxPQUFPLElBQUksS0FBSyxPQUFPO0FBQzNCLE9BQUssU0FBUyxRQUFRLENBQUM7QUFDdkIsT0FBSyxRQUFRLEdBQUc7QUFDaEIsUUFBTSxXQUFXLFlBQVksTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFFO0FBQ2hELFFBQU0sV0FBVyxZQUFZLE1BQU0sRUFBRSxRQUFRLEdBQUUsQ0FBRTtBQUNqRCxNQUFJLEtBQUssSUFBSSxTQUFTLFFBQU8sSUFBSyxRQUFRLFFBQU8sQ0FBRSxJQUFJLEtBQUssSUFBSSxLQUFLLFFBQU8sSUFBSyxRQUFRLFFBQU8sQ0FBRSxHQUFHO0FBQ2pHLFdBQU87RUFDWCxXQUFXLEtBQUssSUFBSSxTQUFTLFFBQU8sSUFBSyxRQUFRLFFBQU8sQ0FBRSxJQUFJLEtBQUssSUFBSSxLQUFLLFFBQU8sSUFBSyxRQUFRLFFBQU8sQ0FBRSxHQUFHO0FBQ3hHLFdBQU87RUFDWDtBQUNBLFNBQU8sS0FBSyxZQUFXO0FBQzNCOzs7QUMzQk8sSUFBTSxxQkFBa0Q7RUFDM0QsUUFBUTtFQUNSLEtBQUs7RUFDTCxRQUFRO0VBQ1IsUUFBUTtFQUNSLEtBQUs7RUFDTCxRQUFRO0VBQ1IsU0FBUztFQUNULEtBQUs7RUFDTCxRQUFRO0VBQ1IsV0FBVztFQUNYLEtBQUs7RUFDTCxRQUFRO0VBQ1IsVUFBVTtFQUNWLE9BQU87RUFDUCxVQUFVO0VBQ1YsTUFBTTtFQUNOLFNBQVM7RUFDVCxLQUFLO0VBQ0wsUUFBUTtFQUNSLFFBQVE7RUFDUixLQUFLO0VBQ0wsUUFBUTtFQUNSLFVBQVU7RUFDVixLQUFLO0VBQ0wsUUFBUTs7QUFHTCxJQUFNLDZCQUF5RDtFQUNsRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLE9BQU87RUFDUCxPQUFPO0VBQ1AsS0FBSztFQUNMLE1BQU07RUFDTixNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7O0FBR1AsSUFBTSxtQkFBK0M7RUFDeEQsR0FBRztFQUNILEtBQUs7RUFDTCxRQUFRO0VBQ1IsS0FBSztFQUNMLFFBQVE7RUFDUixLQUFLO0VBQ0wsUUFBUTtFQUNSLEtBQUs7RUFDTCxRQUFRO0VBQ1IsS0FBSztFQUNMLFFBQVE7RUFDUixLQUFLO0VBQ0wsUUFBUTtFQUNSLEtBQUs7RUFDTCxRQUFRO0VBQ1IsS0FBSztFQUNMLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULEtBQUs7RUFDTCxRQUFRO0VBQ1IsS0FBSztFQUNMLFFBQVE7RUFDUixLQUFLO0VBQ0wsUUFBUTs7QUFHTCxJQUFNLDBCQUFzRDtFQUMvRCxLQUFLO0VBQ0wsS0FBSztFQUNMLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtFQUNOLEtBQUs7RUFDTCxPQUFPO0VBQ1AsT0FBTztFQUNQLE1BQU07RUFDTixLQUFLO0VBQ0wsUUFBUTtFQUNSLFFBQVE7O0FBR0wsSUFBTSwwQkFBc0Q7RUFDL0QsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLE9BQU87RUFDUCxPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsT0FBTztFQUNQLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFHYixJQUFNLCtCQUE2RDtFQUN0RSxRQUFRO0VBQ1IsU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0VBQ1QsTUFBTTtFQUNOLE9BQU87RUFDUCxLQUFLO0VBQ0wsTUFBTTtFQUNOLE1BQU07RUFDTixPQUFPO0VBQ1AsT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLE1BQU07RUFDTixPQUFPOztBQUdKLElBQU0sdUJBQXFEO0VBQzlELEdBQUc7RUFDSCxLQUFLO0VBQ0wsUUFBUTtFQUNSLFNBQVM7RUFDVCxHQUFHO0VBQ0gsS0FBSztFQUNMLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULEdBQUc7RUFDSCxJQUFJO0VBQ0osS0FBSztFQUNMLE1BQU07RUFDTixPQUFPO0VBQ1AsR0FBRztFQUNILEtBQUs7RUFDTCxNQUFNO0VBQ04sR0FBRztFQUNILE1BQU07RUFDTixPQUFPO0VBQ1AsSUFBSTtFQUNKLEtBQUs7RUFDTCxLQUFLO0VBQ0wsT0FBTztFQUNQLFFBQVE7RUFDUixLQUFLO0VBQ0wsU0FBUztFQUNULFVBQVU7RUFDVixHQUFHO0VBQ0gsSUFBSTtFQUNKLE1BQU07RUFDTixPQUFPO0VBR1AsR0FBRzs7QUFLQSxJQUFNLGlCQUFpQixNQUFNLGdCQUNoQyx1QkFBdUIsQ0FDMUI7QUFFSyxTQUFVLG1CQUFtQixPQUFhO0FBQzVDLFFBQU0sTUFBTSxNQUFNLFlBQVc7QUFDN0IsTUFBSSx3QkFBd0IsR0FBRyxNQUFNLFFBQVc7QUFDNUMsV0FBTyx3QkFBd0IsR0FBRztFQUN0QyxXQUFXLFFBQVEsT0FBTyxRQUFRLFFBQVEsT0FBTyxPQUFPO0FBQ3BELFdBQU87RUFDWCxXQUFXLElBQUksTUFBTSxLQUFLLEdBQUc7QUFDekIsV0FBTztFQUNYLFdBQVcsSUFBSSxNQUFNLE1BQU0sR0FBRztBQUMxQixXQUFPO0VBQ1gsV0FBVyxJQUFJLE1BQU0sUUFBUSxHQUFHO0FBQzVCLFdBQU87RUFDWCxXQUFXLElBQUksTUFBTSxTQUFTLEdBQUc7QUFDN0IsV0FBTztFQUNYO0FBRUEsU0FBTyxXQUFXLEdBQUc7QUFDekI7QUFJTyxJQUFNLHlCQUF5QixNQUFNLGdCQUFnQix1QkFBdUIsQ0FBQztBQUM5RSxTQUFVLDBCQUEwQixPQUFhO0FBQ25ELE1BQUksTUFBTSxNQUFNLFlBQVc7QUFDM0IsTUFBSSx3QkFBd0IsR0FBRyxNQUFNLFFBQVc7QUFDNUMsV0FBTyx3QkFBd0IsR0FBRztFQUN0QztBQUVBLFFBQU0sSUFBSSxRQUFRLHFCQUFxQixFQUFFO0FBQ3pDLFNBQU8sU0FBUyxHQUFHO0FBQ3ZCO0FBSU8sSUFBTSxlQUFlO0FBQ3RCLFNBQVUsVUFBVSxPQUFhO0FBQ25DLE1BQUksTUFBTSxLQUFLLEtBQUssR0FBRztBQUVuQixZQUFRLE1BQU0sUUFBUSxPQUFPLEVBQUU7QUFDL0IsV0FBTyxTQUFTLEtBQUssSUFBSTtFQUM3QjtBQUVBLE1BQUksUUFBUSxLQUFLLEtBQUssR0FBRztBQUVyQixZQUFRLE1BQU0sUUFBUSxTQUFTLEVBQUU7QUFDakMsV0FBTyxDQUFDLFNBQVMsS0FBSztFQUMxQjtBQUVBLE1BQUksV0FBVyxLQUFLLEtBQUssR0FBRztBQUV4QixZQUFRLE1BQU0sUUFBUSxZQUFZLEVBQUU7QUFDcEMsV0FBTyxTQUFTLEtBQUs7RUFDekI7QUFFQSxRQUFNLGdCQUFnQixTQUFTLEtBQUs7QUFDcEMsU0FBTyxxQkFBcUIsYUFBYTtBQUM3QztBQUlBLElBQU0sMkJBQTJCLElBQUksY0FBYyxhQUFhLGdCQUFnQixvQkFBb0IsQ0FBQztBQUNyRyxJQUFNLHlCQUF5QixJQUFJLE9BQU8sMEJBQTBCLEdBQUc7QUFFdkUsSUFBTSxtQ0FBbUMsSUFBSSxjQUFjLGFBQWEsZ0JBQ3BFLDRCQUE0QixDQUMvQjtBQUVELElBQU0sOEJBQThCO0FBRTdCLElBQU0scUJBQXFCLHdCQUM5QixpQ0FDQSwwQkFDQSwyQkFBMkI7QUFFeEIsSUFBTSw2QkFBNkIsd0JBQ3RDLGlDQUNBLGtDQUNBLDJCQUEyQjtBQUd6QixTQUFVLGNBQWMsY0FBWTtBQUN0QyxRQUFNLFlBQVksQ0FBQTtBQUNsQixNQUFJLGdCQUFnQjtBQUNwQixNQUFJLFFBQVEsdUJBQXVCLEtBQUssYUFBYTtBQUNyRCxTQUFPLE9BQU87QUFDViw0QkFBd0IsV0FBVyxLQUFLO0FBQ3hDLG9CQUFnQixjQUFjLFVBQVUsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUk7QUFDN0QsWUFBUSx1QkFBdUIsS0FBSyxhQUFhO0VBQ3JEO0FBQ0EsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFLFVBQVUsR0FBRztBQUNwQyxXQUFPO0VBQ1g7QUFDQSxTQUFPO0FBQ1g7QUFFQSxTQUFTLHdCQUF3QixXQUFXLE9BQUs7QUFDN0MsTUFBSSxNQUFNLENBQUMsRUFBRSxNQUFNLGFBQWEsR0FBRztBQUMvQjtFQUNKO0FBQ0EsUUFBTSxNQUFNLG1CQUFtQixNQUFNLENBQUMsQ0FBQztBQUN2QyxRQUFNLE9BQU8scUJBQXFCLE1BQU0sQ0FBQyxFQUFFLFlBQVcsQ0FBRTtBQUN4RCxZQUFVLElBQUksSUFBSTtBQUN0Qjs7O0FDclNNLElBQWdCLHlDQUFoQixNQUFzRDtFQVF4RCxzQkFBc0IsU0FBeUIscUJBQTJCO0FBQ3RFLFdBQU8sS0FBSyxhQUFhLE9BQU8sTUFBTTtFQUMxQztFQUVBLHNCQUFtQjtBQUNmLFdBQU87RUFDWDtFQUVRLHFCQUE4QjtFQUM5QixnQkFBeUI7RUFFakMsUUFBUSxTQUF1QjtBQUMzQixRQUFJLEtBQUssb0JBQW9CO0FBQ3pCLFVBQUksQ0FBQyxLQUFLLHNCQUFzQixTQUFTLEtBQUssa0JBQWtCLEdBQUc7QUFDL0QsZUFBTyxLQUFLO01BQ2hCO0lBQ0o7QUFDQSxTQUFLLHFCQUFxQixLQUFLLGFBQWEsT0FBTztBQUNuRCxTQUFLLGdCQUFnQixJQUFJLE9BQ3JCLEdBQUcsS0FBSyxvQkFBbUIsQ0FBRSxHQUFHLEtBQUssbUJBQW1CLE1BQU0sSUFDOUQsS0FBSyxtQkFBbUIsS0FBSztBQUVqQyxXQUFPLEtBQUs7RUFDaEI7RUFFQSxRQUFRLFNBQXlCLE9BQXVCO0FBQ3BELFVBQU0sU0FBUyxNQUFNLENBQUMsS0FBSztBQUMzQixVQUFNLFFBQVEsTUFBTSxRQUFRLE9BQU87QUFDbkMsVUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsVUFBVSxPQUFPLE1BQU07QUFDM0MsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNuQyxZQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQztJQUMxQjtBQUVBLFdBQU8sS0FBSyxhQUFhLFNBQVMsS0FBSztFQUMzQzs7OztBQzVDSixJQUFNLCtCQUErQixJQUFJLE9BQ3JDLDRGQUNzRSxrQkFBa0IsY0FDeEYsR0FBRztBQUdQLElBQU0sc0JBQXNCLElBQUksT0FDNUIsdUZBQ3NFLGtCQUFrQixjQUN4RixHQUFHO0FBR1AsSUFBTSw2QkFBNkIsSUFBSSxPQUNuQyx1RkFDc0UsMEJBQTBCLGNBQ2hHLEdBQUc7QUFHUCxJQUFxQiwrQkFBckIsY0FBMEQsdUNBQXNDO0VBQ3hFO0VBQXBCLFlBQW9CLFlBQW1CO0FBQ25DLFVBQUs7QUFEVyxTQUFBLGFBQUE7RUFFcEI7RUFFQSxhQUFhLFNBQXVCO0FBQ2hDLFFBQUksS0FBSyxZQUFZO0FBQ2pCLGFBQU87SUFDWDtBQUNBLFdBQU8sUUFBUSxPQUFPLGNBQWMsK0JBQStCO0VBQ3ZFO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUV6RCxRQUFJLE1BQU0sQ0FBQyxFQUFFLE1BQU0sa0JBQWtCLEdBQUc7QUFDcEMsYUFBTztJQUNYO0FBQ0EsVUFBTSxZQUFZLGNBQWMsTUFBTSxDQUFDLENBQUM7QUFDeEMsUUFBSSxDQUFDLFdBQVc7QUFDWixhQUFPO0lBQ1g7QUFDQSxXQUFPLGtCQUFrQiw0QkFBNEIsUUFBUSxXQUFXLFNBQVM7RUFDckY7Ozs7QUNuQ0osSUFBTSxVQUFVLElBQUksT0FDaEIsbUJBQ1Esc0JBQXNCLCtEQUdsQixzQkFBc0Isc0NBRzFCLGdCQUFnQixnQkFBZ0IsQ0FBQywwQkFHN0IsWUFBWSx1QkFHeEIsR0FBRztBQUdQLElBQU0sYUFBYTtBQUNuQixJQUFNLGdCQUFnQjtBQUN0QixJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGFBQWE7QUFFbkIsSUFBcUIsZ0NBQXJCLGNBQTJELHVDQUFzQztFQUM3RixlQUFZO0FBQ1IsV0FBTztFQUNYO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUN6RCxVQUFNLFNBQVMsUUFBUSxvQkFBb0IsTUFBTSxPQUFPLE1BQU0sQ0FBQyxDQUFDO0FBRWhFLFVBQU0sUUFBUSxpQkFBaUIsTUFBTSxnQkFBZ0IsRUFBRSxZQUFXLENBQUU7QUFDcEUsVUFBTSxNQUFNLDBCQUEwQixNQUFNLFVBQVUsQ0FBQztBQUN2RCxRQUFJLE1BQU0sSUFBSTtBQUVWLFlBQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxVQUFVLEVBQUU7QUFDOUMsYUFBTztJQUNYO0FBRUEsV0FBTyxNQUFNLE9BQU8sU0FBUyxLQUFLO0FBQ2xDLFdBQU8sTUFBTSxPQUFPLE9BQU8sR0FBRztBQUU5QixRQUFJLE1BQU0sVUFBVSxHQUFHO0FBQ25CLFlBQU0sYUFBYSxVQUFVLE1BQU0sVUFBVSxDQUFDO0FBQzlDLGFBQU8sTUFBTSxPQUFPLFFBQVEsVUFBVTtJQUMxQyxPQUFPO0FBQ0gsWUFBTSxPQUFPLHFCQUFxQixRQUFRLFNBQVMsS0FBSyxLQUFLO0FBQzdELGFBQU8sTUFBTSxNQUFNLFFBQVEsSUFBSTtJQUNuQztBQUVBLFFBQUksTUFBTSxhQUFhLEdBQUc7QUFDdEIsWUFBTSxVQUFVLDBCQUEwQixNQUFNLGFBQWEsQ0FBQztBQUU5RCxhQUFPLE1BQU0sT0FBTyxNQUFNLE1BQUs7QUFDL0IsYUFBTyxJQUFJLE9BQU8sT0FBTyxPQUFPO0lBQ3BDO0FBRUEsV0FBTztFQUNYOzs7O0FDMURKLElBQU1DLFdBQVUsSUFBSSxPQUNoQixJQUFJLGdCQUFnQixnQkFBZ0IsQ0FBQyx1QkFFN0Isc0JBQXNCLDJDQUdsQixzQkFBc0Isb0NBSXRCLFlBQVksMEJBR3hCLEdBQUc7QUFHUCxJQUFNQyxvQkFBbUI7QUFDekIsSUFBTUMsY0FBYTtBQUNuQixJQUFNQyxpQkFBZ0I7QUFDdEIsSUFBTUMsY0FBYTtBQWFuQixJQUFxQixnQ0FBckIsY0FBMkQsdUNBQXNDO0VBQzdGO0VBRUEsWUFBWSx3QkFBK0I7QUFDdkMsVUFBSztBQUNMLFNBQUsseUJBQXlCO0VBQ2xDO0VBRUEsZUFBWTtBQUNSLFdBQU9KO0VBQ1g7RUFFQSxhQUFhLFNBQXlCLE9BQXVCO0FBQ3pELFVBQU0sUUFBUSxpQkFBaUIsTUFBTUMsaUJBQWdCLEVBQUUsWUFBVyxDQUFFO0FBQ3BFLFVBQU0sTUFBTSwwQkFBMEIsTUFBTUMsV0FBVSxDQUFDO0FBQ3ZELFFBQUksTUFBTSxJQUFJO0FBQ1YsYUFBTztJQUNYO0FBR0EsUUFBSSxLQUFLLHdCQUF3QjtBQUM3QixVQUFJLENBQUMsTUFBTUMsY0FBYSxLQUFLLENBQUMsTUFBTUMsV0FBVSxLQUFLLE1BQU1GLFdBQVUsRUFBRSxNQUFNLFVBQVUsR0FBRztBQUNwRixlQUFPO01BQ1g7SUFDSjtBQUNBLFVBQU0sYUFBYSxRQUNkLHdCQUF3QjtNQUNyQjtNQUNBO0tBQ0gsRUFDQSxPQUFPLHNDQUFzQztBQUVsRCxRQUFJLE1BQU1FLFdBQVUsR0FBRztBQUNuQixZQUFNLE9BQU8sVUFBVSxNQUFNQSxXQUFVLENBQUM7QUFDeEMsaUJBQVcsT0FBTyxRQUFRLElBQUk7SUFDbEMsT0FBTztBQUNILFlBQU0sT0FBTyxxQkFBcUIsUUFBUSxTQUFTLEtBQUssS0FBSztBQUM3RCxpQkFBVyxNQUFNLFFBQVEsSUFBSTtJQUNqQztBQUNBLFFBQUksQ0FBQyxNQUFNRCxjQUFhLEdBQUc7QUFDdkIsYUFBTztJQUNYO0FBR0EsVUFBTSxVQUFVLDBCQUEwQixNQUFNQSxjQUFhLENBQUM7QUFDOUQsVUFBTSxTQUFTLFFBQVEsb0JBQW9CLE1BQU0sT0FBTyxNQUFNLENBQUMsQ0FBQztBQUNoRSxXQUFPLFFBQVE7QUFDZixXQUFPLE1BQU0sV0FBVyxNQUFLO0FBQzdCLFdBQU8sSUFBSSxPQUFPLE9BQU8sT0FBTztBQUVoQyxXQUFPO0VBQ1g7Ozs7QUNyRkosSUFBTUUsV0FBVSxJQUFJLE9BQ2hCLGlCQUNRLGdCQUFnQixnQkFBZ0IsQ0FBQywyQkFHbEIsWUFBWSx3Q0FHbkMsR0FBRztBQUdQLElBQU0sZUFBZTtBQUNyQixJQUFNQyxvQkFBbUI7QUFDekIsSUFBTUMsY0FBYTtBQVNuQixJQUFxQixvQkFBckIsY0FBK0MsdUNBQXNDO0VBQ2pGLGVBQVk7QUFDUixXQUFPRjtFQUNYO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUN6RCxVQUFNLFlBQVksTUFBTUMsaUJBQWdCLEVBQUUsWUFBVztBQUdyRCxRQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQVUsS0FBSyxDQUFDLDJCQUEyQixTQUFTLEdBQUc7QUFDaEUsYUFBTztJQUNYO0FBRUEsVUFBTSxTQUFTLFFBQVEsb0JBQ25CLE1BQU0sU0FBUyxNQUFNLFlBQVksS0FBSyxJQUFJLFFBQzFDLE1BQU0sUUFBUSxNQUFNLENBQUMsRUFBRSxNQUFNO0FBRWpDLFdBQU8sTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUMzQixXQUFPLE1BQU0sT0FBTywwQkFBMEI7QUFFOUMsVUFBTSxRQUFRLGlCQUFpQixTQUFTO0FBQ3hDLFdBQU8sTUFBTSxPQUFPLFNBQVMsS0FBSztBQUVsQyxRQUFJLE1BQU1DLFdBQVUsR0FBRztBQUNuQixZQUFNLE9BQU8sVUFBVSxNQUFNQSxXQUFVLENBQUM7QUFDeEMsYUFBTyxNQUFNLE9BQU8sUUFBUSxJQUFJO0lBQ3BDLE9BQU87QUFDSCxZQUFNLE9BQU8scUJBQXFCLFFBQVEsU0FBUyxHQUFHLEtBQUs7QUFDM0QsYUFBTyxNQUFNLE1BQU0sUUFBUSxJQUFJO0lBQ25DO0FBRUEsV0FBTztFQUNYOzs7O0FDakRKLElBQU1DLFdBQVUsSUFBSSxPQUNoQiw2QkFDVyxnQkFBZ0IsZ0JBQWdCLENBQUMsb0RBRzVDLEdBQUc7QUFHUCxJQUFNLG9CQUFvQjtBQUMxQixJQUFNQyxvQkFBbUI7QUFDekIsSUFBTSxxQkFBcUI7QUFDM0IsSUFBTSxvQkFBb0I7QUFFMUIsSUFBcUIsdUJBQXJCLGNBQWtELHVDQUFzQztFQUNoRTtFQUFwQixZQUFvQixzQkFBNkI7QUFDN0MsVUFBSztBQURXLFNBQUEsdUJBQUE7RUFFcEI7RUFFQSxlQUFZO0FBQ1IsV0FBT0Q7RUFDWDtFQUVBLGFBQWEsU0FBeUIsT0FBdUI7QUFDekQsVUFBTSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxRQUFJLE1BQU0sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLFFBQUksUUFBUSxNQUFNLGtCQUFrQixJQUM5QixTQUFTLE1BQU0sa0JBQWtCLENBQUMsSUFDbEMsaUJBQWlCLE1BQU1DLGlCQUFnQixFQUFFLFlBQVcsQ0FBRTtBQUU1RCxRQUFJLFFBQVEsS0FBSyxRQUFRLElBQUk7QUFDekIsVUFBSSxLQUFLLHNCQUFzQjtBQUMzQixlQUFPO01BQ1g7QUFDQSxVQUFJLE9BQU8sS0FBSyxPQUFPLElBQUk7QUFDdkIsU0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSztNQUM5QjtJQUNKO0FBQ0EsUUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBQ3JCLGFBQU87SUFDWDtBQUVBLFdBQU87TUFDSDtNQUNBO01BQ0E7O0VBRVI7Ozs7QUN0REosSUFBTUMsV0FBVSxJQUFJLE9BQU8sb0NBQXlDLEdBQUc7QUFFdkUsSUFBTSxjQUFjO0FBQ3BCLElBQU1DLGNBQWE7QUFPbkIsSUFBcUIsMkJBQXJCLGNBQXNELHVDQUFzQztFQUN4RixlQUFZO0FBQ1IsV0FBT0Q7RUFDWDtFQUVBLGFBQWEsU0FBeUIsT0FBdUI7QUFDekQsVUFBTSxPQUFPLFNBQVMsTUFBTUMsV0FBVSxDQUFDO0FBQ3ZDLFVBQU0sUUFBUSxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBRXpDLFdBQU8sUUFBUSx3QkFBdUIsRUFBRyxNQUFNLE9BQU8sQ0FBQyxFQUFFLE9BQU8sU0FBUyxLQUFLLEVBQUUsT0FBTyxRQUFRLElBQUk7RUFDdkc7Ozs7QUNuQkosU0FBUyxtQkFBbUIsY0FBc0IsZUFBdUIsZUFBdUIsT0FBYTtBQUN6RyxTQUFPLElBQUksT0FDSCxHQUFHLFlBQVksR0FDWixhQUFhLDJIQVliLGFBQWEsSUFDcEIsS0FBSztBQUViO0FBR0EsU0FBUyxvQkFBb0IsZ0JBQXdCLGlCQUF1QjtBQUN4RSxTQUFPLElBQUksT0FDUCxLQUFLLGNBQWMsMElBV1osZUFBZSxJQUN0QixHQUFHO0FBRVg7QUFFQSxJQUFNLGFBQWE7QUFDbkIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sZUFBZTtBQUNyQixJQUFNLHFCQUFxQjtBQUMzQixJQUFNLG1CQUFtQjtBQUVuQixJQUFnQiwrQkFBaEIsTUFBNEM7RUFHOUM7RUFFQSxZQUFZLGFBQWEsT0FBSztBQUMxQixTQUFLLGFBQWE7RUFDdEI7RUFFQSxlQUFZO0FBQ1IsV0FBTztFQUNYO0VBRUEsNkJBQTBCO0FBQ3RCLFdBQU87RUFDWDtFQUVBLGdCQUFhO0FBQ1QsV0FBTztFQUNYO0VBRUEsa0JBQWU7QUFDWCxXQUFPO0VBQ1g7RUFFQSxRQUFRLFNBQXVCO0FBQzNCLFdBQU8sS0FBSyxrQ0FBaUM7RUFDakQ7RUFFQSxRQUFRLFNBQXlCLE9BQXVCO0FBQ3BELFVBQU0sa0JBQWtCLEtBQUssNkJBQTZCLFNBQVMsS0FBSztBQUN4RSxRQUFJLENBQUMsaUJBQWlCO0FBR2xCLFVBQUksTUFBTSxDQUFDLEVBQUUsTUFBTSxRQUFRLEdBQUc7QUFDMUIsY0FBTSxTQUFTO0FBQ2YsZUFBTztNQUNYO0FBRUEsWUFBTSxTQUFTLE1BQU0sQ0FBQyxFQUFFO0FBQ3hCLGFBQU87SUFDWDtBQUVBLFVBQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxDQUFDLEVBQUU7QUFDckMsVUFBTSxPQUFPLE1BQU0sQ0FBQyxFQUFFLFVBQVUsTUFBTSxDQUFDLEVBQUUsTUFBTTtBQUMvQyxVQUFNLFNBQVMsUUFBUSxvQkFBb0IsT0FBTyxNQUFNLGVBQWU7QUFDdkUsVUFBTSxTQUFTLE1BQU0sQ0FBQyxFQUFFO0FBRXhCLFVBQU0sZ0JBQWdCLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSztBQUN4RCxVQUFNLG1CQUFtQixLQUFLLG9DQUFtQztBQUNqRSxVQUFNLGlCQUFpQixpQkFBaUIsS0FBSyxhQUFhO0FBRzFELFFBQUksS0FBSyxNQUFNLFVBQVUsS0FBSyxnQkFBZ0I7QUFFMUMsVUFBSSxlQUFlLENBQUMsRUFBRSxNQUFNLHVCQUF1QixHQUFHO0FBQ2xELGVBQU87TUFDWDtBQUVBLFVBQUksZUFBZSxDQUFDLEVBQUUsTUFBTSwyQkFBMkIsR0FBRztBQUN0RCxlQUFPO01BQ1g7SUFDSjtBQUVBLFFBQ0ksQ0FBQyxrQkFFRCxlQUFlLENBQUMsRUFBRSxNQUFNLHVCQUF1QixHQUNqRDtBQUNFLGFBQU8sS0FBSyxzQ0FBc0MsTUFBTTtJQUM1RDtBQUVBLFdBQU8sTUFBTSxLQUFLLCtCQUErQixTQUFTLGdCQUFnQixNQUFNO0FBQ2hGLFFBQUksT0FBTyxLQUFLO0FBQ1osYUFBTyxRQUFRLGVBQWUsQ0FBQztJQUNuQztBQUVBLFdBQU8sS0FBSyxtQ0FBbUMsTUFBTTtFQUN6RDtFQUVBLDZCQUNJLFNBQ0EsT0FDQUMsVUFBUyxPQUFLO0FBRWQsVUFBTSxhQUFhLFFBQVEsd0JBQXVCO0FBQ2xELFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUdmLFFBQUksT0FBTyxTQUFTLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLFFBQUksT0FBTyxLQUFLO0FBR1osVUFBSSxNQUFNLFVBQVUsRUFBRSxVQUFVLEtBQUssTUFBTSxZQUFZLEtBQUssUUFBUSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7QUFDMUYsZUFBTztNQUNYO0FBRUEsVUFBSSxLQUFLLGNBQWMsTUFBTSxZQUFZLEtBQUssTUFBTTtBQUNoRCxlQUFPO01BQ1g7QUFFQSxlQUFTLE9BQU87QUFDaEIsYUFBTyxLQUFLLE1BQU0sT0FBTyxHQUFHO0lBQ2hDO0FBRUEsUUFBSSxPQUFPLElBQUk7QUFDWCxhQUFPO0lBQ1g7QUFHQSxRQUFJLE1BQU0sWUFBWSxLQUFLLE1BQU07QUFDN0IsVUFBSSxNQUFNLFlBQVksRUFBRSxVQUFVLEtBQUssQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0FBRTdELGVBQU87TUFDWDtBQUVBLGVBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztJQUN6QztBQUVBLFFBQUksVUFBVSxJQUFJO0FBQ2QsYUFBTztJQUNYO0FBRUEsUUFBSSxPQUFPLElBQUk7QUFDWCxpQkFBVyxTQUFTO0lBQ3hCO0FBR0EsUUFBSSxNQUFNLGdCQUFnQixLQUFLLE1BQU07QUFDakMsVUFBSSxPQUFPO0FBQUksZUFBTztBQUN0QixZQUFNLE9BQU8sTUFBTSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsWUFBVztBQUNuRCxVQUFJLFFBQVEsS0FBSztBQUNiLG1CQUFXLFNBQVM7QUFDcEIsWUFBSSxRQUFRLElBQUk7QUFDWixpQkFBTztRQUNYO01BQ0o7QUFFQSxVQUFJLFFBQVEsS0FBSztBQUNiLG1CQUFXLFNBQVM7QUFDcEIsWUFBSSxRQUFRLElBQUk7QUFDWixrQkFBUTtRQUNaO01BQ0o7SUFDSjtBQUVBLGVBQVcsT0FBTyxRQUFRLElBQUk7QUFDOUIsZUFBVyxPQUFPLFVBQVUsTUFBTTtBQUVsQyxRQUFJLGFBQWEsTUFBTTtBQUNuQixpQkFBVyxPQUFPLFlBQVksUUFBUTtJQUMxQyxPQUFPO0FBQ0gsVUFBSSxPQUFPLElBQUk7QUFDWCxtQkFBVyxNQUFNLFlBQVksU0FBUyxFQUFFO01BQzVDLE9BQU87QUFDSCxtQkFBVyxNQUFNLFlBQVksU0FBUyxFQUFFO01BQzVDO0lBQ0o7QUFHQSxRQUFJLE1BQU0sa0JBQWtCLEtBQUssTUFBTTtBQUNuQyxZQUFNLGNBQWMsU0FBUyxNQUFNLGtCQUFrQixFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEUsVUFBSSxlQUFlO0FBQU0sZUFBTztBQUVoQyxpQkFBVyxPQUFPLGVBQWUsV0FBVztJQUNoRDtBQUdBLFFBQUksTUFBTSxZQUFZLEtBQUssTUFBTTtBQUM3QixZQUFNLFNBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztBQUMzQyxVQUFJLFVBQVU7QUFBSSxlQUFPO0FBRXpCLGlCQUFXLE9BQU8sVUFBVSxNQUFNO0lBQ3RDO0FBRUEsV0FBTztFQUNYO0VBRUEsK0JBQ0ksU0FDQSxPQUNBLFFBQXFCO0FBRXJCLFVBQU0sYUFBYSxRQUFRLHdCQUF1QjtBQUdsRCxRQUFJLE1BQU0sa0JBQWtCLEtBQUssTUFBTTtBQUNuQyxZQUFNLGNBQWMsU0FBUyxNQUFNLGtCQUFrQixFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDdEUsVUFBSSxlQUFlO0FBQU0sZUFBTztBQUVoQyxpQkFBVyxPQUFPLGVBQWUsV0FBVztJQUNoRDtBQUdBLFFBQUksTUFBTSxZQUFZLEtBQUssTUFBTTtBQUM3QixZQUFNLFNBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztBQUMzQyxVQUFJLFVBQVU7QUFBSSxlQUFPO0FBRXpCLGlCQUFXLE9BQU8sVUFBVSxNQUFNO0lBQ3RDO0FBRUEsUUFBSSxPQUFPLFNBQVMsTUFBTSxVQUFVLENBQUM7QUFDckMsUUFBSSxTQUFTO0FBQ2IsUUFBSSxXQUFXO0FBR2YsUUFBSSxNQUFNLFlBQVksS0FBSyxNQUFNO0FBQzdCLGVBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztJQUN6QyxXQUFXLE9BQU8sS0FBSztBQUNuQixlQUFTLE9BQU87QUFDaEIsYUFBTyxLQUFLLE1BQU0sT0FBTyxHQUFHO0lBQ2hDO0FBRUEsUUFBSSxVQUFVLE1BQU0sT0FBTyxJQUFJO0FBQzNCLGFBQU87SUFDWDtBQUVBLFFBQUksUUFBUSxJQUFJO0FBQ1osaUJBQVcsU0FBUztJQUN4QjtBQUdBLFFBQUksTUFBTSxnQkFBZ0IsS0FBSyxNQUFNO0FBQ2pDLFVBQUksT0FBTyxJQUFJO0FBQ1gsZUFBTztNQUNYO0FBRUEsWUFBTSxPQUFPLE1BQU0sZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLFlBQVc7QUFDbkQsVUFBSSxRQUFRLEtBQUs7QUFDYixtQkFBVyxTQUFTO0FBQ3BCLFlBQUksUUFBUSxJQUFJO0FBQ1osaUJBQU87QUFDUCxjQUFJLENBQUMsV0FBVyxVQUFVLEtBQUssR0FBRztBQUM5Qix1QkFBVyxNQUFNLE9BQU8sV0FBVyxJQUFJLEtBQUssSUFBSSxDQUFDO1VBQ3JEO1FBQ0o7TUFDSjtBQUVBLFVBQUksUUFBUSxLQUFLO0FBQ2IsbUJBQVcsU0FBUztBQUNwQixZQUFJLFFBQVE7QUFBSSxrQkFBUTtNQUM1QjtBQUVBLFVBQUksQ0FBQyxPQUFPLE1BQU0sVUFBVSxVQUFVLEdBQUc7QUFDckMsWUFBSSxZQUFZLFNBQVMsSUFBSTtBQUN6QixpQkFBTyxNQUFNLE1BQU0sWUFBWSxTQUFTLEVBQUU7QUFFMUMsY0FBSSxPQUFPLE1BQU0sSUFBSSxNQUFNLEtBQUssSUFBSTtBQUNoQyxtQkFBTyxNQUFNLE9BQU8sUUFBUSxDQUFDO1VBQ2pDO1FBQ0osT0FBTztBQUNILGlCQUFPLE1BQU0sTUFBTSxZQUFZLFNBQVMsRUFBRTtBQUUxQyxjQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJO0FBQ2hDLG1CQUFPLE1BQU0sT0FBTyxRQUFRLE9BQU8sTUFBTSxJQUFJLE1BQU0sSUFBSSxFQUFFO1VBQzdEO1FBQ0o7TUFDSjtJQUNKO0FBRUEsZUFBVyxPQUFPLFFBQVEsSUFBSTtBQUM5QixlQUFXLE9BQU8sVUFBVSxNQUFNO0FBRWxDLFFBQUksWUFBWSxHQUFHO0FBQ2YsaUJBQVcsT0FBTyxZQUFZLFFBQVE7SUFDMUMsT0FBTztBQUNILFlBQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLEtBQUssT0FBTyxNQUFNLElBQUksTUFBTSxJQUFJO0FBQ25GLFVBQUksV0FBVztBQUNYLFlBQUksT0FBTyxNQUFNLElBQUksTUFBTSxJQUFJLEtBQUssTUFBTTtBQUV0QyxxQkFBVyxNQUFNLFlBQVksU0FBUyxFQUFFO1FBQzVDLFdBQVcsUUFBUSxJQUFJO0FBQ25CLHFCQUFXLE9BQU8sUUFBUSxPQUFPLEVBQUU7QUFDbkMscUJBQVcsT0FBTyxZQUFZLFNBQVMsRUFBRTtRQUM3QztNQUNKLFdBQVcsT0FBTyxJQUFJO0FBQ2xCLG1CQUFXLE1BQU0sWUFBWSxTQUFTLEVBQUU7TUFDNUMsV0FBVyxRQUFRLElBQUk7QUFDbkIsbUJBQVcsTUFBTSxZQUFZLFNBQVMsRUFBRTtNQUM1QztJQUNKO0FBRUEsUUFBSSxXQUFXLEtBQUksRUFBRyxRQUFPLElBQUssT0FBTyxNQUFNLEtBQUksRUFBRyxRQUFPLEdBQUk7QUFDN0QsaUJBQVcsTUFBTSxPQUFPLFdBQVcsSUFBSSxLQUFLLElBQUksQ0FBQztJQUNyRDtBQUVBLFdBQU87RUFDWDtFQUVRLHNDQUFzQyxRQUFNO0FBRWhELFFBQUksT0FBTyxLQUFLLE1BQU0sTUFBTSxHQUFHO0FBQzNCLGFBQU87SUFDWDtBQUdBLFFBQUksT0FBTyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ2hDLGFBQU87SUFDWDtBQUdBLFFBQUksT0FBTyxLQUFLLE1BQU0sV0FBVyxHQUFHO0FBQ2hDLGFBQU87SUFDWDtBQUdBLFVBQU0sb0JBQW9CLE9BQU8sS0FBSyxNQUFNLG9CQUFvQjtBQUNoRSxRQUFJLG1CQUFtQjtBQUNuQixZQUFNLGdCQUF3QixrQkFBa0IsQ0FBQztBQUdqRCxVQUFJLEtBQUssWUFBWTtBQUNqQixlQUFPO01BQ1g7QUFHQSxVQUFJLGNBQWMsU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLE1BQU0sZUFBZSxHQUFHO0FBQ3RFLGVBQU87TUFDWDtBQUdBLFlBQU0sa0JBQWtCLFNBQVMsYUFBYTtBQUM5QyxVQUFJLGtCQUFrQixJQUFJO0FBQ3RCLGVBQU87TUFDWDtJQUNKO0FBRUEsV0FBTztFQUNYO0VBRVEsbUNBQW1DLFFBQU07QUFDN0MsUUFBSSxPQUFPLEtBQUssTUFBTSxXQUFXLEdBQUc7QUFDaEMsYUFBTztJQUNYO0FBR0EsVUFBTSxvQkFBb0IsT0FBTyxLQUFLLE1BQU0scUNBQXFDO0FBQ2pGLFFBQUksbUJBQW1CO0FBRW5CLFVBQUksS0FBSyxZQUFZO0FBQ2pCLGVBQU87TUFDWDtBQUVBLFlBQU0sa0JBQTBCLGtCQUFrQixDQUFDO0FBQ25ELFlBQU0sZ0JBQXdCLGtCQUFrQixDQUFDO0FBRWpELFVBQUksY0FBYyxTQUFTLEdBQUcsS0FBSyxDQUFDLGNBQWMsTUFBTSxlQUFlLEdBQUc7QUFDdEUsZUFBTztNQUNYO0FBR0EsWUFBTSxrQkFBa0IsU0FBUyxhQUFhO0FBQzlDLFlBQU0sb0JBQW9CLFNBQVMsZUFBZTtBQUNsRCxVQUFJLGtCQUFrQixNQUFNLG9CQUFvQixJQUFJO0FBQ2hELGVBQU87TUFDWDtJQUNKO0FBRUEsV0FBTztFQUNYO0VBRVEsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFFbkMsb0NBQWlDO0FBQzdCLFVBQU0sZ0JBQWdCLEtBQUssY0FBYTtBQUN4QyxVQUFNLGdCQUFnQixLQUFLLGNBQWE7QUFFeEMsUUFBSSxLQUFLLHdCQUF3QixpQkFBaUIsS0FBSyx3QkFBd0IsZUFBZTtBQUMxRixhQUFPLEtBQUs7SUFDaEI7QUFFQSxTQUFLLDJCQUEyQixtQkFDNUIsS0FBSywyQkFBMEIsR0FDL0IsZUFDQSxlQUNBLEtBQUssYUFBWSxDQUFFO0FBRXZCLFNBQUssc0JBQXNCO0FBQzNCLFNBQUssc0JBQXNCO0FBQzNCLFdBQU8sS0FBSztFQUNoQjtFQUVRLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBRXBDLHNDQUFtQztBQUMvQixVQUFNLGlCQUFpQixLQUFLLGVBQWM7QUFDMUMsVUFBTSxrQkFBa0IsS0FBSyxnQkFBZTtBQUU1QyxRQUFJLEtBQUsseUJBQXlCLGtCQUFrQixLQUFLLDBCQUEwQixpQkFBaUI7QUFDaEcsYUFBTyxLQUFLO0lBQ2hCO0FBRUEsU0FBSyw0QkFBNEIsb0JBQW9CLGdCQUFnQixlQUFlO0FBQ3BGLFNBQUssdUJBQXVCO0FBQzVCLFNBQUssd0JBQXdCO0FBQzdCLFdBQU8sS0FBSztFQUNoQjs7OztBQzliSixJQUFxQix5QkFBckIsY0FBb0QsNkJBQTRCO0VBQzVFLFlBQVksWUFBVTtBQUNsQixVQUFNLFVBQVU7RUFDcEI7RUFFQSxpQkFBYztBQUNWLFdBQU87RUFDWDtFQUVBLGdCQUFhO0FBQ1QsV0FBTztFQUNYO0VBRUEsZ0JBQWE7QUFDVCxXQUFPO0VBQ1g7RUFFQSw2QkFBNkIsU0FBeUIsT0FBdUI7QUFDekUsVUFBTSxhQUFhLE1BQU0sNkJBQTZCLFNBQVMsS0FBSztBQUNwRSxRQUFJLENBQUMsWUFBWTtBQUNiLGFBQU87SUFDWDtBQUVBLFFBQUksTUFBTSxDQUFDLEVBQUUsU0FBUyxPQUFPLEdBQUc7QUFDNUIsWUFBTSxPQUFPLFdBQVcsSUFBSSxNQUFNO0FBQ2xDLFVBQUksUUFBUSxLQUFLLE9BQU8sSUFBSTtBQUN4QixtQkFBVyxPQUFPLFFBQVEsV0FBVyxJQUFJLE1BQU0sSUFBSSxFQUFFO0FBQ3JELG1CQUFXLE9BQU8sWUFBWSxTQUFTLEVBQUU7TUFDN0MsV0FBVyxPQUFPLEdBQUc7QUFDakIsbUJBQVcsT0FBTyxZQUFZLFNBQVMsRUFBRTtNQUM3QztJQUNKO0FBRUEsUUFBSSxNQUFNLENBQUMsRUFBRSxTQUFTLFdBQVcsR0FBRztBQUNoQyxpQkFBVyxPQUFPLFlBQVksU0FBUyxFQUFFO0FBQ3pDLFlBQU0sT0FBTyxXQUFXLElBQUksTUFBTTtBQUNsQyxVQUFJLFFBQVEsS0FBSyxRQUFRLEdBQUc7QUFDeEIsbUJBQVcsT0FBTyxRQUFRLFdBQVcsSUFBSSxNQUFNLElBQUksRUFBRTtNQUN6RDtJQUNKO0FBRUEsUUFBSSxNQUFNLENBQUMsRUFBRSxTQUFTLFNBQVMsR0FBRztBQUM5QixpQkFBVyxPQUFPLFlBQVksU0FBUyxFQUFFO0FBQ3pDLFlBQU0sT0FBTyxXQUFXLElBQUksTUFBTTtBQUNsQyxVQUFJLE9BQU8sSUFBSTtBQUNYLG1CQUFXLE9BQU8sUUFBUSxXQUFXLElBQUksTUFBTSxDQUFDO01BQ3BEO0lBQ0o7QUFFQSxXQUFPLFdBQVcsT0FBTywrQkFBK0I7RUFDNUQ7RUFFQSwrQkFDSSxTQUNBLE9BQ0EsUUFBcUI7QUFFckIsVUFBTSxzQkFBc0IsTUFBTSwrQkFBK0IsU0FBUyxPQUFPLE1BQU07QUFDdkYsUUFBSSxxQkFBcUI7QUFDckIsMEJBQW9CLE9BQU8sK0JBQStCO0lBQzlEO0FBQ0EsV0FBTztFQUNYOzs7O0FDN0RKLElBQU1DLFdBQVUsSUFBSSxPQUFPLElBQUksa0JBQWtCLDRDQUE0QyxHQUFHO0FBQ2hHLElBQU0saUJBQWlCLElBQUksT0FBTyxJQUFJLDBCQUEwQiw0Q0FBNEMsR0FBRztBQUUvRyxJQUFxQiw0QkFBckIsY0FBdUQsdUNBQXNDO0VBQ3JFO0VBQXBCLFlBQW9CLFlBQW1CO0FBQ25DLFVBQUs7QUFEVyxTQUFBLGFBQUE7RUFFcEI7RUFFQSxlQUFZO0FBQ1IsV0FBTyxLQUFLLGFBQWEsaUJBQWlCQTtFQUM5QztFQUVBLGFBQWEsU0FBeUIsT0FBdUI7QUFDekQsVUFBTSxXQUFXLGNBQWMsTUFBTSxDQUFDLENBQUM7QUFDdkMsUUFBSSxDQUFDLFVBQVU7QUFDWCxhQUFPO0lBQ1g7QUFDQSxXQUFPLGtCQUFrQiw0QkFBNEIsUUFBUSxXQUFXLGdCQUFnQixRQUFRLENBQUM7RUFDckc7Ozs7QUNuQkosSUFBTUMsV0FBVSxJQUFJLE9BQ2hCLElBQUksa0JBQWtCLHlFQUN0QixHQUFHO0FBR1AsSUFBTUMsa0JBQWlCLElBQUksT0FBTyxJQUFJLDBCQUEwQiw0Q0FBNEMsR0FBRztBQUMvRyxJQUFNLHNCQUFzQjtBQUU1QixJQUFxQiw4QkFBckIsY0FBeUQsdUNBQXNDO0VBQ3ZFO0VBQXBCLFlBQW9CLFlBQW1CO0FBQ25DLFVBQUs7QUFEVyxTQUFBLGFBQUE7RUFFcEI7RUFFQSxlQUFZO0FBQ1IsV0FBTyxLQUFLLGFBQWFBLGtCQUFpQkQ7RUFDOUM7RUFFQSxhQUFhLFNBQXlCLE9BQXVCO0FBQ3pELFVBQU0sWUFBWSxjQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsUUFBSSxDQUFDLFdBQVc7QUFDWixhQUFPO0lBQ1g7QUFDQSxXQUFPLGtCQUFrQiw0QkFBNEIsUUFBUSxXQUFXLFNBQVM7RUFDckY7Ozs7QUN0QkUsSUFBZ0IsU0FBaEIsTUFBc0I7RUFHeEIsT0FBTyxTQUF5QixTQUF3QjtBQUNwRCxXQUFPLFFBQVEsT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLFNBQVMsQ0FBQyxDQUFDO0VBQ3pEOztBQU1FLElBQWdCLGlCQUFoQixNQUE4QjtFQWVoQyxPQUFPLFNBQXlCLFNBQXdCO0FBQ3BELFFBQUksUUFBUSxTQUFTLEdBQUc7QUFDcEIsYUFBTztJQUNYO0FBRUEsVUFBTSxnQkFBaUMsQ0FBQTtBQUN2QyxRQUFJLFlBQVksUUFBUSxDQUFDO0FBQ3pCLFFBQUksYUFBYTtBQUVqQixhQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUFLO0FBQ3JDLG1CQUFhLFFBQVEsQ0FBQztBQUV0QixZQUFNLGNBQWMsUUFBUSxLQUFLLFVBQVUsVUFBVSxRQUFRLFVBQVUsS0FBSyxRQUFRLFdBQVcsS0FBSztBQUNwRyxVQUFJLENBQUMsS0FBSyxtQkFBbUIsYUFBYSxXQUFXLFlBQVksT0FBTyxHQUFHO0FBQ3ZFLHNCQUFjLEtBQUssU0FBUztBQUM1QixvQkFBWTtNQUNoQixPQUFPO0FBQ0gsY0FBTSxPQUFPO0FBQ2IsY0FBTSxRQUFRO0FBQ2QsY0FBTSxlQUFlLEtBQUssYUFBYSxhQUFhLE1BQU0sT0FBTyxPQUFPO0FBQ3hFLGdCQUFRLE1BQU0sTUFBSztBQUNmLGtCQUFRLElBQUksR0FBRyxLQUFLLFlBQVksSUFBSSxXQUFXLElBQUksUUFBUSxLQUFLLFNBQVMsWUFBWSxFQUFFO1FBQzNGLENBQUM7QUFFRCxvQkFBWTtNQUNoQjtJQUNKO0FBRUEsUUFBSSxhQUFhLE1BQU07QUFDbkIsb0JBQWMsS0FBSyxTQUFTO0lBQ2hDO0FBRUEsV0FBTztFQUNYOzs7O0FDekRKLElBQThCLGdDQUE5QixjQUFvRSxlQUFjO0VBRzlFLG1CQUFtQixhQUFhLGVBQWUsWUFBVTtBQUNyRCxXQUFPLENBQUMsY0FBYyxPQUFPLENBQUMsV0FBVyxPQUFPLFlBQVksTUFBTSxLQUFLLGVBQWMsQ0FBRSxLQUFLO0VBQ2hHO0VBRUEsYUFBYSxhQUFhLFlBQVksVUFBUTtBQUMxQyxRQUFJLENBQUMsV0FBVyxNQUFNLHVCQUFzQixLQUFNLENBQUMsU0FBUyxNQUFNLHVCQUFzQixHQUFJO0FBQ3hGLGVBQVMsTUFBTSxxQkFBb0IsRUFBRyxRQUFRLENBQUMsUUFBTztBQUNsRCxZQUFJLENBQUMsV0FBVyxNQUFNLFVBQVUsR0FBRyxHQUFHO0FBQ2xDLHFCQUFXLE1BQU0sTUFBTSxLQUFLLFNBQVMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUN2RDtNQUNKLENBQUM7QUFFRCxpQkFBVyxNQUFNLHFCQUFvQixFQUFHLFFBQVEsQ0FBQyxRQUFPO0FBQ3BELFlBQUksQ0FBQyxTQUFTLE1BQU0sVUFBVSxHQUFHLEdBQUc7QUFDaEMsbUJBQVMsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLElBQUksR0FBRyxDQUFDO1FBQ3ZEO01BQ0osQ0FBQztJQUNMO0FBQ0EsUUFBSSxXQUFXLE1BQU0sS0FBSSxJQUFLLFNBQVMsTUFBTSxLQUFJLEdBQUk7QUFDakQsVUFBSSxXQUFXLFdBQVcsTUFBTSxLQUFJO0FBQ3BDLFVBQUksU0FBUyxTQUFTLE1BQU0sS0FBSTtBQUVoQyxVQUFJLFNBQVMsTUFBTSx1QkFBc0IsS0FBTSxZQUFZLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBRSxJQUFJLFVBQVU7QUFDdkYsaUJBQVMsWUFBWSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUU7QUFDdkMsaUJBQVMsTUFBTSxNQUFNLE9BQU8sT0FBTyxRQUFPLENBQUU7QUFDNUMsaUJBQVMsTUFBTSxNQUFNLFNBQVMsT0FBTyxTQUFRLElBQUssQ0FBQztBQUNuRCxpQkFBUyxNQUFNLE1BQU0sUUFBUSxPQUFPLFlBQVcsQ0FBRTtNQUNyRCxXQUFXLFdBQVcsTUFBTSx1QkFBc0IsS0FBTSxZQUFZLFVBQVUsRUFBRSxLQUFLLEdBQUUsQ0FBRSxJQUFJLFFBQVE7QUFDakcsbUJBQVcsWUFBWSxVQUFVLEVBQUUsS0FBSyxHQUFFLENBQUU7QUFDNUMsbUJBQVcsTUFBTSxNQUFNLE9BQU8sU0FBUyxRQUFPLENBQUU7QUFDaEQsbUJBQVcsTUFBTSxNQUFNLFNBQVMsU0FBUyxTQUFRLElBQUssQ0FBQztBQUN2RCxtQkFBVyxNQUFNLE1BQU0sUUFBUSxTQUFTLFlBQVcsQ0FBRTtNQUN6RCxXQUFXLFNBQVMsTUFBTSxzQkFBcUIsS0FBTSxZQUFZLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBRSxJQUFJLFVBQVU7QUFDOUYsaUJBQVMsWUFBWSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUU7QUFDeEMsaUJBQVMsTUFBTSxNQUFNLFFBQVEsT0FBTyxZQUFXLENBQUU7TUFDckQsV0FBVyxXQUFXLE1BQU0sc0JBQXFCLEtBQU0sWUFBWSxVQUFVLEVBQUUsTUFBTSxHQUFFLENBQUUsSUFBSSxRQUFRO0FBQ2pHLG1CQUFXLFlBQVksVUFBVSxFQUFFLE1BQU0sR0FBRSxDQUFFO0FBQzdDLG1CQUFXLE1BQU0sTUFBTSxRQUFRLFNBQVMsWUFBVyxDQUFFO01BQ3pELE9BQU87QUFDSCxTQUFDLFVBQVUsVUFBVSxJQUFJLENBQUMsWUFBWSxRQUFRO01BQ2xEO0lBQ0o7QUFDQSxVQUFNLFNBQVMsV0FBVyxNQUFLO0FBQy9CLFdBQU8sUUFBUSxXQUFXO0FBQzFCLFdBQU8sTUFBTSxTQUFTO0FBQ3RCLFdBQU8sUUFBUSxLQUFLLElBQUksV0FBVyxPQUFPLFNBQVMsS0FBSztBQUN4RCxRQUFJLFdBQVcsUUFBUSxTQUFTLE9BQU87QUFDbkMsYUFBTyxPQUFPLFdBQVcsT0FBTyxjQUFjLFNBQVM7SUFDM0QsT0FBTztBQUNILGFBQU8sT0FBTyxTQUFTLE9BQU8sY0FBYyxXQUFXO0lBQzNEO0FBQ0EsV0FBTztFQUNYOzs7O0FDbkRKLElBQXFCLDBCQUFyQixjQUFxRCw4QkFBNkI7RUFDOUUsaUJBQWM7QUFDVixXQUFPO0VBQ1g7Ozs7QUNYRSxTQUFVLG9CQUFvQixZQUEyQixZQUF5QjtBQUNwRixRQUFNLFNBQVMsV0FBVyxNQUFLO0FBQy9CLFFBQU0sWUFBWSxXQUFXO0FBQzdCLFFBQU0sWUFBWSxXQUFXO0FBRTdCLFNBQU8sUUFBUSx1QkFBdUIsV0FBVyxTQUFTO0FBQzFELE1BQUksV0FBVyxPQUFPLFFBQVEsV0FBVyxPQUFPLE1BQU07QUFDbEQsVUFBTSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxXQUFXO0FBQ3ZFLFVBQU0sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsV0FBVztBQUN2RSxVQUFNLGNBQWMsdUJBQXVCLFNBQVMsT0FBTztBQUUzRCxRQUFJLFdBQVcsT0FBTyxRQUFRLFlBQVksS0FBSSxFQUFHLFFBQU8sSUFBSyxPQUFPLE1BQU0sS0FBSSxFQUFHLFFBQU8sR0FBSTtBQUd4RixZQUFNLFVBQVUsSUFBSSxLQUFLLFlBQVksS0FBSSxFQUFHLFFBQU8sQ0FBRTtBQUNyRCxjQUFRLFFBQVEsUUFBUSxRQUFPLElBQUssQ0FBQztBQUNyQyxVQUFJLFlBQVksVUFBVSxLQUFLLEdBQUc7QUFDOUIsMEJBQWtCLGFBQWEsT0FBTztNQUMxQyxPQUFPO0FBQ0gseUJBQWlCLGFBQWEsT0FBTztNQUN6QztJQUNKO0FBRUEsV0FBTyxNQUFNO0VBQ2pCO0FBRUEsU0FBTztBQUNYO0FBRU0sU0FBVSx1QkFDWixlQUNBLGVBQWdDO0FBRWhDLFFBQU0sb0JBQW9CLGNBQWMsTUFBSztBQUU3QyxNQUFJLGNBQWMsVUFBVSxNQUFNLEdBQUc7QUFDakMsc0JBQWtCLE9BQU8sUUFBUSxjQUFjLElBQUksTUFBTSxDQUFDO0FBQzFELHNCQUFrQixPQUFPLFVBQVUsY0FBYyxJQUFJLFFBQVEsQ0FBQztBQUU5RCxRQUFJLGNBQWMsVUFBVSxRQUFRLEdBQUc7QUFDbkMsd0JBQWtCLE9BQU8sVUFBVSxjQUFjLElBQUksUUFBUSxDQUFDO0FBRTlELFVBQUksY0FBYyxVQUFVLGFBQWEsR0FBRztBQUN4QywwQkFBa0IsT0FBTyxlQUFlLGNBQWMsSUFBSSxhQUFhLENBQUM7TUFDNUUsT0FBTztBQUNILDBCQUFrQixNQUFNLGVBQWUsY0FBYyxJQUFJLGFBQWEsQ0FBQztNQUMzRTtJQUNKLE9BQU87QUFDSCx3QkFBa0IsTUFBTSxVQUFVLGNBQWMsSUFBSSxRQUFRLENBQUM7QUFDN0Qsd0JBQWtCLE1BQU0sZUFBZSxjQUFjLElBQUksYUFBYSxDQUFDO0lBQzNFO0VBQ0osT0FBTztBQUNILHNCQUFrQixNQUFNLFFBQVEsY0FBYyxJQUFJLE1BQU0sQ0FBQztBQUN6RCxzQkFBa0IsTUFBTSxVQUFVLGNBQWMsSUFBSSxRQUFRLENBQUM7QUFDN0Qsc0JBQWtCLE1BQU0sVUFBVSxjQUFjLElBQUksUUFBUSxDQUFDO0FBQzdELHNCQUFrQixNQUFNLGVBQWUsY0FBYyxJQUFJLGFBQWEsQ0FBQztFQUMzRTtBQUVBLE1BQUksY0FBYyxVQUFVLGdCQUFnQixHQUFHO0FBQzNDLHNCQUFrQixPQUFPLGtCQUFrQixjQUFjLElBQUksZ0JBQWdCLENBQUM7RUFDbEY7QUFFQSxNQUFJLGNBQWMsVUFBVSxVQUFVLEdBQUc7QUFDckMsc0JBQWtCLE9BQU8sWUFBWSxjQUFjLElBQUksVUFBVSxDQUFDO0VBQ3RFLFdBQVcsY0FBYyxJQUFJLFVBQVUsS0FBSyxRQUFRLGtCQUFrQixJQUFJLFVBQVUsS0FBSyxNQUFNO0FBQzNGLHNCQUFrQixNQUFNLFlBQVksY0FBYyxJQUFJLFVBQVUsQ0FBQztFQUNyRTtBQUVBLE1BQUksa0JBQWtCLElBQUksVUFBVSxLQUFLLFNBQVMsTUFBTSxrQkFBa0IsSUFBSSxNQUFNLElBQUksSUFBSTtBQUN4RixRQUFJLGNBQWMsVUFBVSxNQUFNLEdBQUc7QUFDakMsd0JBQWtCLE9BQU8sUUFBUSxrQkFBa0IsSUFBSSxNQUFNLElBQUksRUFBRTtJQUN2RSxPQUFPO0FBQ0gsd0JBQWtCLE1BQU0sUUFBUSxrQkFBa0IsSUFBSSxNQUFNLElBQUksRUFBRTtJQUN0RTtFQUNKO0FBRUEsb0JBQWtCLFFBQVEsY0FBYyxLQUFJLENBQUU7QUFDOUMsb0JBQWtCLFFBQVEsY0FBYyxLQUFJLENBQUU7QUFDOUMsU0FBTztBQUNYOzs7QUMzRUEsSUFBOEIsK0JBQTlCLGNBQW1FLGVBQWM7RUFHN0UsbUJBQW1CLGFBQXFCLGVBQThCLFlBQXlCO0FBQzNGLFlBQ00sY0FBYyxNQUFNLFdBQVUsS0FBTSxXQUFXLE1BQU0sV0FBVSxLQUM1RCxXQUFXLE1BQU0sV0FBVSxLQUFNLGNBQWMsTUFBTSxXQUFVLE1BQ3BFLFlBQVksTUFBTSxLQUFLLGVBQWMsQ0FBRSxLQUFLO0VBRXBEO0VBRUEsYUFBYSxhQUFxQixlQUE4QixZQUF5QjtBQUNyRixVQUFNLFNBQVMsY0FBYyxNQUFNLFdBQVUsSUFDdkMsb0JBQW9CLGVBQWUsVUFBVSxJQUM3QyxvQkFBb0IsWUFBWSxhQUFhO0FBRW5ELFdBQU8sUUFBUSxjQUFjO0FBQzdCLFdBQU8sT0FBTyxjQUFjLE9BQU8sY0FBYyxXQUFXO0FBQzVELFdBQU87RUFDWDs7OztBQ25CSixJQUFxQix5QkFBckIsY0FBb0QsNkJBQTRCO0VBQzVFLGlCQUFjO0FBQ1YsV0FBTyxJQUFJLE9BQU8sdURBQWtEO0VBQ3hFOzs7O0FDTEosSUFBTSx3QkFBd0IsSUFBSSxPQUFPLDRDQUE0QyxHQUFHO0FBRXhGLElBQXFCLDZCQUFyQixNQUErQztFQUNkO0VBQTdCLFlBQTZCLG1CQUFtQztBQUFuQyxTQUFBLG9CQUFBO0VBQXNDO0VBRW5FLE9BQU8sU0FBeUIsU0FBd0I7QUFDcEQsVUFBTSxvQkFBb0IsUUFBUSxPQUFPLGFBQWEsQ0FBQTtBQUV0RCxZQUFRLFFBQVEsQ0FBQyxXQUFVO0FBQ3ZCLFlBQU0sU0FBUyxRQUFRLEtBQUssVUFBVSxPQUFPLFFBQVEsT0FBTyxLQUFLLE1BQU07QUFDdkUsWUFBTSxRQUFRLHNCQUFzQixLQUFLLE1BQU07QUFDL0MsVUFBSSxDQUFDLE9BQU87QUFDUjtNQUNKO0FBRUEsWUFBTSxlQUFlLE1BQU0sQ0FBQyxFQUFFLFlBQVc7QUFDekMsWUFBTSxVQUFVLE9BQU8sTUFBTSxLQUFJLEtBQU0sT0FBTyxXQUFXLG9CQUFJLEtBQUk7QUFDakUsWUFBTSxjQUFjLEVBQUUsR0FBRyxLQUFLLG1CQUFtQixHQUFHLGtCQUFpQjtBQUNyRSxZQUFNLDBCQUEwQixpQkFBaUIsY0FBYyxTQUFTLFdBQVc7QUFDbkYsVUFBSSwyQkFBMkIsTUFBTTtBQUNqQztNQUNKO0FBQ0EsY0FBUSxNQUFNLE1BQUs7QUFDZixnQkFBUSxJQUNKLHlCQUF5QixZQUFZLFdBQVcsdUJBQXVCLFNBQVMsT0FBTyxLQUFLLEVBQUU7TUFFdEcsQ0FBQztBQUVELFlBQU0sd0JBQXdCLE9BQU8sTUFBTSxJQUFJLGdCQUFnQjtBQUMvRCxVQUFJLDBCQUEwQixRQUFRLDJCQUEyQix1QkFBdUI7QUFJcEYsWUFBSSxPQUFPLE1BQU0sVUFBVSxnQkFBZ0IsR0FBRztBQUMxQztRQUNKO0FBSUEsWUFBSSxnQkFBZ0IsTUFBTSxDQUFDLEdBQUc7QUFDMUI7UUFDSjtNQUNKO0FBRUEsVUFBSSxPQUFPLE1BQU0sV0FBVSxHQUFJO0FBRzNCLFlBQUksZ0JBQWdCLE1BQU0sQ0FBQyxHQUFHO0FBQzFCO1FBQ0o7TUFDSjtBQUVBLGFBQU8sUUFBUSxNQUFNLENBQUM7QUFFdEIsVUFBSSxDQUFDLE9BQU8sTUFBTSxVQUFVLGdCQUFnQixHQUFHO0FBQzNDLGVBQU8sTUFBTSxPQUFPLGtCQUFrQix1QkFBdUI7TUFDakU7QUFFQSxVQUFJLE9BQU8sT0FBTyxRQUFRLENBQUMsT0FBTyxJQUFJLFVBQVUsZ0JBQWdCLEdBQUc7QUFDL0QsZUFBTyxJQUFJLE9BQU8sa0JBQWtCLHVCQUF1QjtNQUMvRDtJQUNKLENBQUM7QUFFRCxXQUFPO0VBQ1g7Ozs7QUNuRUosSUFBTSwwQkFBMEIsSUFBSSxPQUFPLG9FQUFvRSxHQUFHO0FBQ2xILElBQU0sNkJBQTZCO0FBQ25DLElBQU0sb0NBQW9DO0FBQzFDLElBQU0sc0NBQXNDO0FBRTVDLElBQXFCLCtCQUFyQixNQUFpRDtFQUM3QyxPQUFPLFNBQXlCLFNBQXdCO0FBQ3BELFlBQVEsUUFBUSxTQUFVLFFBQU07QUFDNUIsVUFBSSxPQUFPLE1BQU0sVUFBVSxnQkFBZ0IsR0FBRztBQUMxQztNQUNKO0FBRUEsWUFBTSxTQUFTLFFBQVEsS0FBSyxVQUFVLE9BQU8sUUFBUSxPQUFPLEtBQUssTUFBTTtBQUN2RSxZQUFNLFFBQVEsd0JBQXdCLEtBQUssTUFBTTtBQUNqRCxVQUFJLENBQUMsT0FBTztBQUNSO01BQ0o7QUFFQSxjQUFRLE1BQU0sTUFBSztBQUNmLGdCQUFRLElBQUkseUJBQXlCLE1BQU0sQ0FBQyxDQUFDLFlBQVksTUFBTSxFQUFFO01BQ3JFLENBQUM7QUFFRCxZQUFNLGFBQWEsU0FBUyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLFlBQU0sZUFBZSxTQUFTLE1BQU0sbUNBQW1DLEtBQUssR0FBRztBQUMvRSxVQUFJLGlCQUFpQixhQUFhLEtBQUs7QUFFdkMsVUFBSSxpQkFBaUIsS0FBSyxJQUFJO0FBQzFCO01BQ0o7QUFDQSxVQUFJLE1BQU0sMEJBQTBCLE1BQU0sS0FBSztBQUMzQyx5QkFBaUIsQ0FBQztNQUN0QjtBQUVBLFVBQUksT0FBTyxPQUFPLE1BQU07QUFDcEIsZUFBTyxJQUFJLE9BQU8sa0JBQWtCLGNBQWM7TUFDdEQ7QUFFQSxhQUFPLE1BQU0sT0FBTyxrQkFBa0IsY0FBYztBQUNwRCxhQUFPLFFBQVEsTUFBTSxDQUFDO0lBQzFCLENBQUM7QUFFRCxXQUFPO0VBQ1g7Ozs7QUN0Q0osSUFBcUIsd0JBQXJCLE1BQTBDO0VBQ3RDLE9BQU8sU0FBeUIsU0FBd0I7QUFDcEQsUUFBSSxRQUFRLFNBQVMsR0FBRztBQUNwQixhQUFPO0lBQ1g7QUFFQSxVQUFNLGtCQUFrQixDQUFBO0FBQ3hCLFFBQUksYUFBYSxRQUFRLENBQUM7QUFDMUIsYUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLFFBQVEsS0FBSztBQUNyQyxZQUFNLFNBQVMsUUFBUSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxTQUFTLFdBQVcsUUFBUSxXQUFXLEtBQUssUUFBUTtBQUMzRCx3QkFBZ0IsS0FBSyxVQUFVO0FBQy9CLHFCQUFhO0FBQ2I7TUFDSjtBQUdBLFVBQUksT0FBTztBQUNYLFVBQUksVUFBVTtBQUNkLFVBQUksT0FBTyxLQUFLLFNBQVMsV0FBVyxLQUFLLFFBQVE7QUFDN0MsZUFBTztBQUNQLGtCQUFVO01BQ2QsT0FBTztBQUNILGVBQU87QUFDUCxrQkFBVTtNQUNkO0FBQ0EsY0FBUSxNQUFNLE1BQUs7QUFDZixnQkFBUSxJQUFJLEdBQUcsS0FBSyxZQUFZLElBQUksV0FBVyxPQUFPLE9BQU8sSUFBSSxFQUFFO01BQ3ZFLENBQUM7QUFDRCxtQkFBYTtJQUNqQjtBQUdBLFFBQUksY0FBYyxNQUFNO0FBQ3BCLHNCQUFnQixLQUFLLFVBQVU7SUFDbkM7QUFFQSxXQUFPO0VBQ1g7Ozs7QUNqQ0osSUFBcUIscUJBQXJCLE1BQXVDO0VBQ25DLE9BQU8sU0FBeUIsU0FBd0I7QUFDcEQsUUFBSSxDQUFDLFFBQVEsT0FBTyxhQUFhO0FBQzdCLGFBQU87SUFDWDtBQUVBLFlBQVEsUUFBUSxDQUFDLFdBQVU7QUFDdkIsVUFBSSxVQUFVLFFBQVEsVUFBVSw0QkFBMkI7QUFFM0QsVUFBSSxPQUFPLE1BQU0sV0FBVSxLQUFNLFFBQVEsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFJLEdBQUk7QUFDOUUsY0FBTUUsV0FBVSxRQUFRLFVBQVUsNEJBQTJCO0FBQzdELGNBQU0sa0JBQWtCLElBQUksS0FBS0EsUUFBTztBQUN4Qyx3QkFBZ0IsUUFBUSxnQkFBZ0IsUUFBTyxJQUFLLENBQUM7QUFFckQsUUFBTSxpQkFBaUIsT0FBTyxPQUFPLGVBQWU7QUFDcEQsZ0JBQVEsTUFBTSxNQUFLO0FBQ2Ysa0JBQVEsSUFDSixHQUFHLEtBQUssWUFBWSxJQUFJLGFBQWEsTUFBTSw0QkFBNEJBLFFBQU8sMkJBQTJCLGVBQWUsR0FBRztRQUVuSSxDQUFDO0FBQ0QsWUFBSSxPQUFPLE9BQU8sT0FBTyxJQUFJLFdBQVUsR0FBSTtBQUN2QyxVQUFNLGlCQUFpQixPQUFPLEtBQUssZUFBZTtBQUNsRCxjQUFJLE9BQU8sTUFBTSxLQUFJLElBQUssT0FBTyxJQUFJLEtBQUksR0FBSTtBQUN6Qyw0QkFBZ0IsUUFBUSxnQkFBZ0IsUUFBTyxJQUFLLENBQUM7QUFDckQsWUFBTSxpQkFBaUIsT0FBTyxLQUFLLGVBQWU7VUFDdEQ7UUFDSjtNQUNKO0FBRUEsVUFBSSxPQUFPLE1BQU0sdUJBQXNCLEtBQU0sVUFBVSxPQUFPLE1BQU0sS0FBSSxHQUFJO0FBQ3hFLFlBQUksWUFBWSxPQUFPLE1BQU0sSUFBSSxTQUFTLElBQUksUUFBUSxPQUFNO0FBQzVELFlBQUksYUFBYSxHQUFHO0FBQ2hCLHVCQUFhO1FBQ2pCO0FBQ0Esa0JBQVUsWUFBWSxTQUFTLEVBQUUsS0FBSyxVQUFTLENBQUU7QUFDakQseUJBQWlCLE9BQU8sT0FBTyxPQUFPO0FBQ3RDLGdCQUFRLE1BQU0sTUFBSztBQUNmLGtCQUFRLElBQUksR0FBRyxLQUFLLFlBQVksSUFBSSxhQUFhLE1BQU0sYUFBYSxPQUFPLEtBQUssR0FBRztRQUN2RixDQUFDO0FBRUQsWUFBSSxPQUFPLE9BQU8sT0FBTyxJQUFJLHVCQUFzQixHQUFJO0FBRW5ELGNBQUlDLGFBQVksT0FBTyxJQUFJLElBQUksU0FBUyxJQUFJLFFBQVEsT0FBTTtBQUMxRCxjQUFJQSxjQUFhLEdBQUc7QUFDaEIsWUFBQUEsY0FBYTtVQUNqQjtBQUNBLG9CQUFVLFlBQVksU0FBUyxFQUFFLEtBQUtBLFdBQVMsQ0FBRTtBQUNqRCwyQkFBaUIsT0FBTyxLQUFLLE9BQU87QUFDcEMsa0JBQVEsTUFBTSxNQUFLO0FBQ2Ysb0JBQVEsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLGFBQWEsTUFBTSxhQUFhLE9BQU8sR0FBRyxHQUFHO1VBQ3JGLENBQUM7UUFDTDtNQUNKO0FBSUEsVUFBSSxPQUFPLE1BQU0sc0JBQXFCLEtBQU0sVUFBVSxPQUFPLE1BQU0sS0FBSSxHQUFJO0FBQ3ZFLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssVUFBVSxPQUFPLE1BQU0sS0FBSSxHQUFJLEtBQUs7QUFDekQsaUJBQU8sTUFBTSxNQUFNLFFBQVEsT0FBTyxNQUFNLElBQUksTUFBTSxJQUFJLENBQUM7QUFDdkQsa0JBQVEsTUFBTSxNQUFLO0FBQ2Ysb0JBQVEsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxHQUFHO1VBQ3BGLENBQUM7QUFFRCxjQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sSUFBSSxVQUFVLE1BQU0sR0FBRztBQUM3QyxtQkFBTyxJQUFJLE1BQU0sUUFBUSxPQUFPLElBQUksSUFBSSxNQUFNLElBQUksQ0FBQztBQUNuRCxvQkFBUSxNQUFNLE1BQUs7QUFDZixzQkFBUSxJQUFJLEdBQUcsS0FBSyxZQUFZLElBQUksYUFBYSxNQUFNLFdBQVcsT0FBTyxLQUFLLEdBQUc7WUFDckYsQ0FBQztVQUNMO1FBQ0o7TUFDSjtJQUNKLENBQUM7QUFFRCxXQUFPO0VBQ1g7Ozs7QUNuRkosSUFBcUIsdUJBQXJCLGNBQWtELE9BQU07RUFDaEM7RUFBcEIsWUFBb0IsWUFBbUI7QUFDbkMsVUFBSztBQURXLFNBQUEsYUFBQTtFQUVwQjtFQUVBLFFBQVEsU0FBUyxRQUFxQjtBQUNsQyxRQUFJLE9BQU8sS0FBSyxRQUFRLEtBQUssRUFBRSxFQUFFLE1BQU0sZUFBZSxHQUFHO0FBQ3JELGNBQVEsTUFBTSxNQUFLO0FBQ2YsZ0JBQVEsSUFBSSw2QkFBNkIsT0FBTyxJQUFJLEdBQUc7TUFDM0QsQ0FBQztBQUVELGFBQU87SUFDWDtBQUVBLFFBQUksQ0FBQyxPQUFPLE1BQU0sWUFBVyxHQUFJO0FBQzdCLGNBQVEsTUFBTSxNQUFLO0FBQ2YsZ0JBQVEsSUFBSSw0QkFBNEIsTUFBTSxLQUFLLE9BQU8sS0FBSyxHQUFHO01BQ3RFLENBQUM7QUFFRCxhQUFPO0lBQ1g7QUFFQSxRQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFXLEdBQUk7QUFDekMsY0FBUSxNQUFNLE1BQUs7QUFDZixnQkFBUSxJQUFJLDRCQUE0QixNQUFNLEtBQUssT0FBTyxHQUFHLEdBQUc7TUFDcEUsQ0FBQztBQUVELGFBQU87SUFDWDtBQUVBLFFBQUksS0FBSyxZQUFZO0FBQ2pCLGFBQU8sS0FBSyxrQkFBa0IsU0FBUyxNQUFNO0lBQ2pEO0FBRUEsV0FBTztFQUNYO0VBRVEsa0JBQWtCLFNBQVMsUUFBcUI7QUFDcEQsUUFBSSxPQUFPLE1BQU0sdUJBQXNCLEdBQUk7QUFDdkMsY0FBUSxNQUFNLE1BQUs7QUFDZixnQkFBUSxJQUFJLDZDQUE2QyxNQUFNLEtBQUssT0FBTyxHQUFHLEdBQUc7TUFDckYsQ0FBQztBQUVELGFBQU87SUFDWDtBQUVBLFdBQU87RUFDWDs7OztBQ3JDSixJQUFNQyxXQUFVLElBQUksT0FDaEIsb0pBV0EsR0FBRztBQUdQLElBQU1DLHFCQUFvQjtBQUMxQixJQUFNQyxzQkFBcUI7QUFDM0IsSUFBTUMscUJBQW9CO0FBQzFCLElBQU0sb0JBQW9CO0FBQzFCLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sMkJBQTJCO0FBQ2pDLElBQU0sWUFBWTtBQUNsQixJQUFNLHdCQUF3QjtBQUM5QixJQUFNLDBCQUEwQjtBQUVoQyxJQUFxQixrQkFBckIsY0FBNkMsdUNBQXNDO0VBQy9FLGVBQVk7QUFDUixXQUFPSDtFQUNYO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUN6RCxVQUFNLGFBQWEsUUFBUSx3QkFBd0I7TUFDL0MsUUFBUSxTQUFTLE1BQU1DLGtCQUFpQixDQUFDO01BQ3pDLFNBQVMsU0FBUyxNQUFNQyxtQkFBa0IsQ0FBQztNQUMzQyxPQUFPLFNBQVMsTUFBTUMsa0JBQWlCLENBQUM7S0FDM0M7QUFDRCxRQUFJLE1BQU0saUJBQWlCLEtBQUssTUFBTTtBQUNsQyxpQkFBVyxPQUFPLFFBQVEsU0FBUyxNQUFNLGlCQUFpQixDQUFDLENBQUM7QUFDNUQsaUJBQVcsT0FBTyxVQUFVLFNBQVMsTUFBTSxtQkFBbUIsQ0FBQyxDQUFDO0FBRWhFLFVBQUksTUFBTSxtQkFBbUIsS0FBSyxNQUFNO0FBQ3BDLG1CQUFXLE9BQU8sVUFBVSxTQUFTLE1BQU0sbUJBQW1CLENBQUMsQ0FBQztNQUNwRTtBQUVBLFVBQUksTUFBTSx3QkFBd0IsS0FBSyxNQUFNO0FBQ3pDLG1CQUFXLE9BQU8sZUFBZSxTQUFTLE1BQU0sd0JBQXdCLENBQUMsQ0FBQztNQUM5RTtBQUNBLFVBQUksTUFBTSxTQUFTLEtBQUssTUFBTTtBQUUxQixZQUFJLFNBQVM7QUFDYixZQUFJLE1BQU0scUJBQXFCLEdBQUc7QUFDOUIsZ0JBQU0sYUFBYSxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsY0FBSSxlQUFlO0FBQ25CLGNBQUksTUFBTSx1QkFBdUIsS0FBSyxNQUFNO0FBQ3hDLDJCQUFlLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztVQUMxRDtBQUNBLG1CQUFTLGFBQWE7QUFDdEIsY0FBSSxTQUFTLEdBQUc7QUFDWixzQkFBVTtVQUNkLE9BQU87QUFDSCxzQkFBVTtVQUNkO1FBQ0o7QUFDQSxtQkFBVyxPQUFPLGtCQUFrQixNQUFNO01BQzlDO0lBQ0o7QUFDQSxXQUFPLFdBQVcsT0FBTyx3QkFBd0I7RUFDckQ7Ozs7QUNyRUosSUFBcUIsK0JBQXJCLGNBQTBELGVBQWM7RUFDcEUsYUFBYSxhQUFxQixlQUE4QixZQUF5QjtBQUNyRixVQUFNLFlBQVksV0FBVyxNQUFLO0FBQ2xDLGNBQVUsUUFBUSxjQUFjO0FBQ2hDLGNBQVUsT0FBTyxjQUFjLE9BQU8sY0FBYyxVQUFVO0FBRTlELGNBQVUsTUFBTSxPQUFPLFdBQVcsY0FBYyxNQUFNLElBQUksU0FBUyxDQUFDO0FBQ3BFLFFBQUksVUFBVSxLQUFLO0FBQ2YsZ0JBQVUsSUFBSSxPQUFPLFdBQVcsY0FBYyxNQUFNLElBQUksU0FBUyxDQUFDO0lBQ3RFO0FBRUEsV0FBTztFQUNYO0VBRUEsbUJBQW1CLGFBQXFCLGVBQThCLFlBQXlCO0FBQzNGLFVBQU0sd0JBQ0YsY0FBYyxNQUFNLHVCQUFzQixLQUMxQyxDQUFDLGNBQWMsTUFBTSxVQUFVLE1BQU0sS0FDckMsV0FBVyxNQUFNLFVBQVUsS0FBSztBQUNwQyxXQUFPLHlCQUF5QixZQUFZLE1BQU0sU0FBUyxLQUFLO0VBQ3BFOzs7O0FDdEJFLFNBQVUsMkJBQTJCQyxnQkFBOEIsYUFBYSxPQUFLO0FBQ3ZGLEVBQUFBLGVBQWMsUUFBUSxRQUFRLElBQUksZ0JBQWUsQ0FBRTtBQUVuRCxFQUFBQSxlQUFjLFNBQVMsUUFBUSxJQUFJLDZCQUE0QixDQUFFO0FBQ2pFLEVBQUFBLGVBQWMsU0FBUyxRQUFRLElBQUksNkJBQTRCLENBQUU7QUFDakUsRUFBQUEsZUFBYyxTQUFTLFFBQVEsSUFBSSxzQkFBcUIsQ0FBRTtBQUkxRCxFQUFBQSxlQUFjLFNBQVMsS0FBSyxJQUFJLDJCQUEwQixDQUFFO0FBQzVELEVBQUFBLGVBQWMsU0FBUyxLQUFLLElBQUksc0JBQXFCLENBQUU7QUFDdkQsRUFBQUEsZUFBYyxTQUFTLEtBQUssSUFBSSxtQkFBa0IsQ0FBRTtBQUNwRCxFQUFBQSxlQUFjLFNBQVMsS0FBSyxJQUFJLHFCQUFxQixVQUFVLENBQUM7QUFDaEUsU0FBT0E7QUFDWDs7O0FDcEJNLFNBQVUsSUFBSSxXQUFnQztBQUNoRCxRQUFNLGFBQWEsVUFBVSw0QkFBMkI7QUFDeEQsUUFBTSxZQUFZLElBQUksa0JBQWtCLFdBQVcsQ0FBQSxDQUFFO0FBQ3JELG9CQUFrQixXQUFXLFVBQVU7QUFDdkMsb0JBQWtCLFdBQVcsVUFBVTtBQUN2QyxZQUFVLE9BQU8sa0JBQWtCLFVBQVUsa0JBQWlCLENBQUU7QUFDaEUsWUFBVSxPQUFPLHFCQUFxQjtBQUN0QyxTQUFPO0FBQ1g7QUFFTSxTQUFVLE1BQU0sV0FBZ0M7QUFDbEQsUUFBTSxhQUFhLFVBQVUsNEJBQTJCO0FBQ3hELFFBQU0sWUFBWSxJQUFJLGtCQUFrQixXQUFXLENBQUEsQ0FBRTtBQUNyRCxvQkFBa0IsV0FBVyxVQUFVO0FBQ3ZDLG1CQUFpQixXQUFXLFVBQVU7QUFDdEMsWUFBVSxPQUFPLFVBQVU7QUFDM0IsWUFBVSxPQUFPLHVCQUF1QjtBQUN4QyxTQUFPO0FBQ1g7QUFFTSxTQUFVLFVBQVUsV0FBZ0M7QUFDdEQsU0FBTyxhQUFhLFdBQVcsQ0FBQyxFQUFFLE9BQU8sMkJBQTJCO0FBQ3hFO0FBRU0sU0FBVSxTQUFTLFdBQWdDO0FBQ3JELFNBQU8sWUFBWSxXQUFXLENBQUMsRUFBRSxPQUFPLDBCQUEwQjtBQUN0RTtBQUVNLFNBQVUsYUFBYSxXQUFrQyxRQUFjO0FBQ3pFLFNBQU8sWUFBWSxXQUFXLENBQUMsTUFBTTtBQUN6QztBQUVNLFNBQVUsWUFBWSxXQUFrQyxPQUFhO0FBQ3ZFLFFBQU0sYUFBYSxVQUFVLDRCQUEyQjtBQUN4RCxRQUFNLFlBQVksSUFBSSxrQkFBa0IsV0FBVyxDQUFBLENBQUU7QUFDckQsUUFBTSxVQUFVLElBQUksS0FBSyxXQUFXLFFBQU8sQ0FBRTtBQUM3QyxVQUFRLFFBQVEsUUFBUSxRQUFPLElBQUssS0FBSztBQUV6QyxvQkFBa0IsV0FBVyxPQUFPO0FBQ3BDLG1CQUFpQixXQUFXLE9BQU87QUFDbkMsWUFBVSxPQUFPLFVBQVU7QUFDM0IsU0FBTztBQUNYO0FBRU0sU0FBVSxRQUFRLFdBQWtDLFlBQVksSUFBRTtBQUNwRSxRQUFNLGFBQWEsVUFBVSw0QkFBMkI7QUFDeEQsUUFBTSxZQUFZLElBQUksa0JBQWtCLFdBQVcsQ0FBQSxDQUFFO0FBQ3JELG9CQUFrQixXQUFXLFVBQVU7QUFDdkMsWUFBVSxNQUFNLFFBQVEsU0FBUztBQUNqQyxZQUFVLE1BQU0sWUFBWSxTQUFTLEVBQUU7QUFDdkMsWUFBVSxPQUFPLHlCQUF5QjtBQUMxQyxTQUFPO0FBQ1g7QUFhTSxTQUFVLFFBQVEsV0FBa0MsWUFBWSxJQUFFO0FBQ3BFLFFBQU0sWUFBWSxJQUFJLGtCQUFrQixXQUFXLENBQUEsQ0FBRTtBQUNyRCxZQUFVLE1BQU0sWUFBWSxTQUFTLEVBQUU7QUFDdkMsWUFBVSxNQUFNLFFBQVEsU0FBUztBQUNqQyxZQUFVLE9BQU8seUJBQXlCO0FBQzFDLFNBQU87QUFDWDtBQWNNLFNBQVUsU0FBUyxXQUFnQztBQUNyRCxRQUFNLFlBQVksSUFBSSxrQkFBa0IsV0FBVyxDQUFBLENBQUU7QUFDckQsTUFBSSxVQUFVLDRCQUEyQixFQUFHLFNBQVEsSUFBSyxHQUFHO0FBR3hELGNBQVUscUJBQXFCLEVBQUUsS0FBSyxFQUFDLENBQUU7RUFDN0M7QUFDQSxZQUFVLE9BQU8sUUFBUSxDQUFDO0FBQzFCLFlBQVUsTUFBTSxVQUFVLENBQUM7QUFDM0IsWUFBVSxNQUFNLFVBQVUsQ0FBQztBQUMzQixZQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLFlBQVUsT0FBTywwQkFBMEI7QUFDM0MsU0FBTztBQUNYO0FBRU0sU0FBVSxRQUFRLFdBQWtDLFlBQVksR0FBQztBQUNuRSxRQUFNLFlBQVksSUFBSSxrQkFBa0IsV0FBVyxDQUFBLENBQUU7QUFDckQsWUFBVSxNQUFNLFlBQVksU0FBUyxFQUFFO0FBQ3ZDLFlBQVUsTUFBTSxRQUFRLFNBQVM7QUFDakMsWUFBVSxNQUFNLFVBQVUsQ0FBQztBQUMzQixZQUFVLE1BQU0sVUFBVSxDQUFDO0FBQzNCLFlBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEMsWUFBVSxPQUFPLHlCQUF5QjtBQUMxQyxTQUFPO0FBQ1g7QUFFTSxTQUFVLFVBQVUsV0FBa0MsWUFBWSxJQUFFO0FBQ3RFLFFBQU0sWUFBWSxJQUFJLGtCQUFrQixXQUFXLENBQUEsQ0FBRTtBQUNyRCxZQUFVLE1BQU0sWUFBWSxTQUFTLEVBQUU7QUFDdkMsWUFBVSxNQUFNLFFBQVEsU0FBUztBQUNqQyxZQUFVLE1BQU0sVUFBVSxDQUFDO0FBQzNCLFlBQVUsTUFBTSxVQUFVLENBQUM7QUFDM0IsWUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNoQyxZQUFVLE9BQU8sMkJBQTJCO0FBQzVDLFNBQU87QUFDWDtBQUVNLFNBQVUsS0FBSyxXQUFnQztBQUNqRCxRQUFNLFlBQVksSUFBSSxrQkFBa0IsV0FBVyxDQUFBLENBQUU7QUFDckQsWUFBVSxNQUFNLFlBQVksU0FBUyxFQUFFO0FBQ3ZDLFlBQVUsT0FBTyxRQUFRLEVBQUU7QUFDM0IsWUFBVSxNQUFNLFVBQVUsQ0FBQztBQUMzQixZQUFVLE1BQU0sVUFBVSxDQUFDO0FBQzNCLFlBQVUsTUFBTSxlQUFlLENBQUM7QUFDaEMsWUFBVSxPQUFPLHNCQUFzQjtBQUN2QyxTQUFPO0FBQ1g7OztBQ2pJQSxJQUFNQyxXQUFVO0FBRWhCLElBQXFCLHFCQUFyQixjQUFnRCx1Q0FBc0M7RUFDbEYsYUFBYSxTQUF1QjtBQUNoQyxXQUFPQTtFQUNYO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUN6RCxRQUFJLGFBQWEsUUFBUTtBQUN6QixVQUFNLFlBQVksTUFBTSxDQUFDLEVBQUUsWUFBVztBQUN0QyxRQUFJLFlBQVksUUFBUSx3QkFBdUI7QUFFL0MsWUFBUSxXQUFXO01BQ2YsS0FBSztBQUNELG9CQUF1QixJQUFJLFFBQVEsU0FBUztBQUM1QztNQUVKLEtBQUs7QUFDRCxvQkFBdUIsTUFBTSxRQUFRLFNBQVM7QUFDOUM7TUFFSixLQUFLO0FBQ0Qsb0JBQXVCLFVBQVUsUUFBUSxTQUFTO0FBQ2xEO01BRUosS0FBSztNQUNMLEtBQUs7TUFDTCxLQUFLO0FBQ0Qsb0JBQXVCLFNBQVMsUUFBUSxTQUFTO0FBQ2pEO01BRUosS0FBSztBQUNELG9CQUF1QixRQUFRLFFBQVEsU0FBUztBQUNoRDtNQUVKLEtBQUs7QUFDRCxvQkFBdUIsWUFBWSxRQUFRLFdBQVcsQ0FBQztBQUN2RDtNQUVKO0FBQ0ksWUFBSSxVQUFVLE1BQU0sY0FBYyxHQUFHO0FBQ2pDLGNBQUksV0FBVyxTQUFRLElBQUssR0FBRztBQUMzQixrQkFBTSxjQUFjLElBQUksS0FBSyxXQUFXLFFBQU8sQ0FBRTtBQUNqRCx3QkFBWSxRQUFRLFlBQVksUUFBTyxJQUFLLENBQUM7QUFDN0MseUJBQWE7VUFDakI7QUFFQSw0QkFBa0IsV0FBVyxVQUFVO0FBQ3ZDLG9CQUFVLE1BQU0sUUFBUSxDQUFDO1FBQzdCO0FBQ0E7SUFDUjtBQUNBLGNBQVUsT0FBTywyQkFBMkI7QUFDNUMsV0FBTztFQUNYOzs7O0FDeERKLElBQU1DLFlBQVU7QUFFaEIsSUFBcUIscUJBQXJCLGNBQWdELHVDQUFzQztFQUNsRixlQUFZO0FBQ1IsV0FBT0E7RUFDWDtFQUNBLGFBQWEsU0FBeUIsT0FBdUI7QUFDekQsUUFBSSxZQUFZO0FBQ2hCLFlBQVEsTUFBTSxDQUFDLEVBQUUsWUFBVyxHQUFJO01BQzVCLEtBQUs7QUFDRCxvQkFBNkIsVUFBVSxRQUFRLFNBQVM7QUFDeEQ7TUFDSixLQUFLO01BQ0wsS0FBSztBQUNELG9CQUE2QixRQUFRLFFBQVEsU0FBUztBQUN0RDtNQUNKLEtBQUs7QUFDRCxvQkFBNkIsU0FBUyxRQUFRLFNBQVM7QUFDdkQ7TUFDSixLQUFLO0FBQ0Qsb0JBQTZCLFFBQVEsUUFBUSxTQUFTO0FBQ3REO01BQ0osS0FBSztNQUNMLEtBQUs7QUFDRCxvQkFBNkIsS0FBSyxRQUFRLFNBQVM7QUFDbkQ7SUFDUjtBQUNBLFFBQUksV0FBVztBQUNYLGdCQUFVLE9BQU8sMkJBQTJCO0lBQ2hEO0FBQ0EsV0FBTztFQUNYOzs7O0FDeEJFLFNBQVUsaUNBQ1osV0FDQSxTQUNBLFVBQW1DO0FBRW5DLFFBQU0sVUFBVSxVQUFVLDRCQUEyQjtBQUNyRCxRQUFNLGdCQUFnQixpQkFBaUIsU0FBUyxTQUFTLFFBQVE7QUFFakUsTUFBSSxhQUFhLElBQUksa0JBQWtCLFNBQVM7QUFDaEQsZUFBYSxXQUFXLHFCQUFxQixFQUFFLEtBQUssY0FBYSxDQUFFO0FBQ25FLGFBQVcsT0FBTyxXQUFXLE9BQU87QUFFcEMsU0FBTztBQUNYO0FBUU0sU0FBVSxpQkFBaUIsU0FBZSxTQUFrQixVQUFtQztBQUNqRyxRQUFNLGFBQWEsUUFBUSxPQUFNO0FBQ2pDLFVBQVEsVUFBVTtJQUNkLEtBQUs7QUFDRCxhQUFPLHdCQUF3QixTQUFTLE9BQU87SUFDbkQsS0FBSztBQUNELGFBQU8seUJBQXlCLFNBQVMsT0FBTztJQUNwRCxLQUFLO0FBR0QsVUFBSSxjQUFjLFFBQVEsUUFBUTtBQUM5QixlQUFPLFdBQVcsUUFBUSxTQUFTLElBQUk7TUFDM0M7QUFJQSxVQUFJLGNBQWMsUUFBUSxVQUFVO0FBQ2hDLFlBQUksV0FBVyxRQUFRO0FBQVUsaUJBQU87QUFDeEMsWUFBSSxXQUFXLFFBQVE7QUFBUSxpQkFBTztBQUN0QyxlQUFPLElBQUk7TUFDZjtBQUlBLFVBQUksVUFBVSxjQUFjLFdBQVcsUUFBUSxRQUFRO0FBQ25ELGVBQU8sd0JBQXdCLFNBQVMsT0FBTztNQUNuRCxPQUFPO0FBQ0gsZUFBTyx3QkFBd0IsU0FBUyxPQUFPLElBQUk7TUFDdkQ7RUFDUjtBQUNBLFNBQU8sd0JBQXdCLFNBQVMsT0FBTztBQUNuRDtBQUVNLFNBQVUsd0JBQXdCLFNBQWUsU0FBZ0I7QUFDbkUsUUFBTSxXQUFXLHlCQUF5QixTQUFTLE9BQU87QUFDMUQsUUFBTSxVQUFVLHdCQUF3QixTQUFTLE9BQU87QUFFeEQsU0FBTyxVQUFVLENBQUMsV0FBVyxVQUFVO0FBQzNDO0FBRU0sU0FBVSx3QkFBd0IsU0FBZSxTQUFnQjtBQUNuRSxRQUFNLGFBQWEsUUFBUSxPQUFNO0FBQ2pDLE1BQUksZUFBZSxVQUFVO0FBQzdCLE1BQUksZUFBZSxHQUFHO0FBQ2xCLG9CQUFnQjtFQUNwQjtBQUNBLFNBQU87QUFDWDtBQUVNLFNBQVUseUJBQXlCLFNBQWUsU0FBZ0I7QUFDcEUsUUFBTSxhQUFhLFFBQVEsT0FBTTtBQUNqQyxNQUFJLGdCQUFnQixVQUFVO0FBQzlCLE1BQUksaUJBQWlCLEdBQUc7QUFDcEIscUJBQWlCO0VBQ3JCO0FBQ0EsU0FBTztBQUNYOzs7QUNoRkEsSUFBTUMsWUFBVSxJQUFJLE9BQ2hCLDJFQUdRLGdCQUFnQixrQkFBa0IsQ0FBQyxpR0FJM0MsR0FBRztBQUdQLElBQU1DLGdCQUFlO0FBQ3JCLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sZ0JBQWdCO0FBRXRCLElBQXFCLGtCQUFyQixjQUE2Qyx1Q0FBc0M7RUFDL0UsZUFBWTtBQUNSLFdBQU9EO0VBQ1g7RUFFQSxhQUFhLFNBQXlCLE9BQXVCO0FBQ3pELFVBQU0sU0FBUyxNQUFNQyxhQUFZO0FBQ2pDLFVBQU0sVUFBVSxNQUFNLGFBQWE7QUFDbkMsUUFBSSxlQUFlLFVBQVU7QUFDN0IsbUJBQWUsZ0JBQWdCO0FBQy9CLG1CQUFlLGFBQWEsWUFBVztBQUV2QyxRQUFJLFdBQVc7QUFDZixRQUFJLGdCQUFnQixVQUFVLGdCQUFnQixRQUFRO0FBQ2xELGlCQUFXO0lBQ2YsV0FBVyxnQkFBZ0IsUUFBUTtBQUMvQixpQkFBVztJQUNmLFdBQVcsZ0JBQWdCLFFBQVE7QUFDL0IsaUJBQVc7SUFDZjtBQUVBLFVBQU0sZUFBZSxNQUFNLGFBQWEsRUFBRSxZQUFXO0FBQ3JELFFBQUk7QUFDSixRQUFJLG1CQUFtQixZQUFZLE1BQU0sUUFBVztBQUNoRCxnQkFBVSxtQkFBbUIsWUFBWTtJQUM3QyxXQUFXLGdCQUFnQixXQUFXO0FBR2xDLGdCQUFVLFlBQVksU0FBUyxRQUFRLFNBQVMsUUFBUTtJQUM1RCxXQUFXLGdCQUFnQixXQUFXO0FBS2xDLFlBQU0sYUFBYSxRQUFRLFVBQVUsNEJBQTJCLEVBQUcsT0FBTTtBQUN6RSxVQUFJLGNBQWMsUUFBUSxVQUFVLGNBQWMsUUFBUSxVQUFVO0FBQ2hFLGtCQUFVLFlBQVksU0FBUyxRQUFRLFNBQVMsUUFBUTtNQUM1RCxPQUFPO0FBQ0gsa0JBQVUsYUFBYTtBQUN2QixrQkFBVSxZQUFZLFNBQVMsVUFBVSxJQUFJLFVBQVU7QUFDdkQsa0JBQVcsVUFBVSxJQUFLO01BQzlCO0lBQ0osT0FBTztBQUNILGFBQU87SUFDWDtBQUVBLFdBQU8saUNBQWlDLFFBQVEsV0FBVyxTQUFTLFFBQVE7RUFDaEY7Ozs7QUNoRUosSUFBTUMsWUFBVSxJQUFJLE9BQ2hCLDJDQUEyQyxnQkFBZ0Isb0JBQW9CLENBQUMsc0JBQ2hGLEdBQUc7QUFHUCxJQUFNLHNCQUFzQjtBQUM1QixJQUFNLHNCQUFzQjtBQUU1QixJQUFxQiw2QkFBckIsY0FBd0QsdUNBQXNDO0VBQzFGLGVBQVk7QUFDUixXQUFPQTtFQUNYO0VBRUEsYUFBYSxTQUF5QixPQUF1QjtBQUN6RCxVQUFNLFdBQVcsTUFBTSxtQkFBbUIsRUFBRSxZQUFXO0FBQ3ZELFVBQU0sV0FBVyxNQUFNLG1CQUFtQixFQUFFLFlBQVc7QUFDdkQsVUFBTSxXQUFXLHFCQUFxQixRQUFRO0FBRTlDLFFBQUksWUFBWSxVQUFVLFNBQVMsV0FBVyxPQUFPLEdBQUc7QUFDcEQsWUFBTSxZQUFZLENBQUE7QUFDbEIsZ0JBQVUsUUFBUSxJQUFJO0FBQ3RCLGFBQU8sa0JBQWtCLDRCQUE0QixRQUFRLFdBQVcsU0FBUztJQUNyRjtBQUVBLFFBQUksWUFBWSxVQUFVLFlBQVksUUFBUTtBQUMxQyxZQUFNLFlBQVksQ0FBQTtBQUNsQixnQkFBVSxRQUFRLElBQUk7QUFDdEIsYUFBTyxrQkFBa0IsNEJBQTRCLFFBQVEsV0FBVyxTQUFTO0lBQ3JGO0FBRUEsVUFBTSxhQUFhLFFBQVEsd0JBQXVCO0FBQ2xELFFBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxVQUFVLFFBQVEsUUFBTyxDQUFFO0FBR3ZELFFBQUksU0FBUyxNQUFNLE9BQU8sR0FBRztBQUN6QixXQUFLLFFBQVEsS0FBSyxRQUFPLElBQUssS0FBSyxPQUFNLENBQUU7QUFDM0MsaUJBQVcsTUFBTSxPQUFPLEtBQUssUUFBTyxDQUFFO0FBQ3RDLGlCQUFXLE1BQU0sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQzdDLGlCQUFXLE1BQU0sUUFBUSxLQUFLLFlBQVcsQ0FBRTtJQUMvQyxXQUdTLFNBQVMsTUFBTSxRQUFRLEdBQUc7QUFDL0IsV0FBSyxRQUFRLENBQUM7QUFDZCxpQkFBVyxNQUFNLE9BQU8sS0FBSyxRQUFPLENBQUU7QUFDdEMsaUJBQVcsT0FBTyxRQUFRLEtBQUssWUFBVyxDQUFFO0FBQzVDLGlCQUFXLE9BQU8sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0lBQ2xELFdBR1MsU0FBUyxNQUFNLE9BQU8sR0FBRztBQUM5QixXQUFLLFFBQVEsQ0FBQztBQUNkLFdBQUssU0FBUyxDQUFDO0FBQ2YsaUJBQVcsTUFBTSxPQUFPLEtBQUssUUFBTyxDQUFFO0FBQ3RDLGlCQUFXLE1BQU0sU0FBUyxLQUFLLFNBQVEsSUFBSyxDQUFDO0FBQzdDLGlCQUFXLE9BQU8sUUFBUSxLQUFLLFlBQVcsQ0FBRTtJQUNoRDtBQUVBLFdBQU87RUFDWDs7OztBQ3RESixJQUFNQyxZQUFVLElBQUksT0FDaEIsMkdBSUEsR0FBRztBQUdQLElBQU0sZ0JBQWdCO0FBQ3RCLElBQU0sZUFBZTtBQUVyQixJQUFNLHNCQUFzQjtBQUM1QixJQUFNLHVCQUF1QjtBQUU3QixJQUFNQyxjQUFhO0FBRW5CLElBQXFCLHdCQUFyQixNQUEwQztFQUN0QztFQUNBO0VBRUEsWUFBWSxjQUFxQjtBQUM3QixTQUFLLG1CQUFtQixlQUFlLHVCQUF1QjtBQUM5RCxTQUFLLGlCQUFpQixlQUFlLHNCQUFzQjtFQUMvRDtFQUVBLFVBQU87QUFDSCxXQUFPRDtFQUNYO0VBRUEsUUFBUSxTQUF5QixPQUF1QjtBQUdwRCxVQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sYUFBYSxFQUFFO0FBQ2pELFVBQU0sV0FBVyxNQUFNLFFBQVEsTUFBTSxDQUFDLEVBQUUsU0FBUyxNQUFNLFlBQVksRUFBRTtBQUNyRSxRQUFJLFFBQVEsR0FBRztBQUNYLFlBQU0sYUFBYSxRQUFRLEtBQUssVUFBVSxHQUFHLEtBQUs7QUFDbEQsVUFBSSxXQUFXLE1BQU0sUUFBUSxHQUFHO0FBQzVCO01BQ0o7SUFDSjtBQUNBLFFBQUksV0FBVyxRQUFRLEtBQUssUUFBUTtBQUNoQyxZQUFNLFlBQVksUUFBUSxLQUFLLFVBQVUsUUFBUTtBQUNqRCxVQUFJLFVBQVUsTUFBTSxRQUFRLEdBQUc7QUFDM0I7TUFDSjtJQUNKO0FBRUEsVUFBTSxPQUFPLFFBQVEsS0FBSyxVQUFVLE9BQU8sUUFBUTtBQUduRCxRQUFJLEtBQUssTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLDJCQUEyQixHQUFHO0FBQ25FO0lBQ0o7QUFJQSxRQUFJLENBQUMsTUFBTUMsV0FBVSxLQUFLLEtBQUssUUFBUSxHQUFHLElBQUksR0FBRztBQUM3QztJQUNKO0FBRUEsVUFBTSxTQUFTLFFBQVEsb0JBQW9CLE9BQU8sSUFBSTtBQUN0RCxRQUFJLFFBQVEsU0FBUyxNQUFNLEtBQUssZ0JBQWdCLENBQUM7QUFDakQsUUFBSSxNQUFNLFNBQVMsTUFBTSxLQUFLLGNBQWMsQ0FBQztBQUM3QyxRQUFJLFFBQVEsS0FBSyxRQUFRLElBQUk7QUFDekIsVUFBSSxRQUFRLElBQUk7QUFDWixZQUFJLE9BQU8sS0FBSyxPQUFPLE1BQU0sU0FBUyxJQUFJO0FBQ3RDLFdBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxPQUFPLEdBQUc7UUFDOUIsT0FBTztBQUNILGlCQUFPO1FBQ1g7TUFDSjtJQUNKO0FBRUEsUUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJO0FBQ3JCLGFBQU87SUFDWDtBQUVBLFdBQU8sTUFBTSxPQUFPLE9BQU8sR0FBRztBQUM5QixXQUFPLE1BQU0sT0FBTyxTQUFTLEtBQUs7QUFFbEMsUUFBSSxNQUFNQSxXQUFVLEdBQUc7QUFDbkIsWUFBTSxnQkFBZ0IsU0FBUyxNQUFNQSxXQUFVLENBQUM7QUFDaEQsWUFBTSxPQUFPLHFCQUFxQixhQUFhO0FBQy9DLGFBQU8sTUFBTSxPQUFPLFFBQVEsSUFBSTtJQUNwQyxPQUFPO0FBQ0gsWUFBTSxPQUFPLHFCQUFxQixRQUFRLFNBQVMsS0FBSyxLQUFLO0FBQzdELGFBQU8sTUFBTSxNQUFNLFFBQVEsSUFBSTtJQUNuQztBQUVBLFdBQU8sT0FBTyxPQUFPLDhCQUE4QjtFQUN2RDs7OztBQy9GSixJQUFNQyxZQUFVLElBQUksT0FBTyx5Q0FBeUMsa0JBQWtCLGNBQWMsR0FBRztBQUN2RyxJQUFNLGtCQUFrQixJQUFJLE9BQ3hCLHlDQUF5QywwQkFBMEIsY0FDbkUsR0FBRztBQUdQLElBQXFCLHVDQUFyQixjQUFrRSx1Q0FBc0M7RUFDaEY7RUFBcEIsWUFBb0IscUJBQThCLE1BQUk7QUFDbEQsVUFBSztBQURXLFNBQUEscUJBQUE7RUFFcEI7RUFFQSxlQUFZO0FBQ1IsV0FBTyxLQUFLLHFCQUFxQkEsWUFBVTtFQUMvQztFQUVBLGFBQWEsU0FBeUIsT0FBdUI7QUFDekQsVUFBTSxTQUFTLE1BQU0sQ0FBQyxFQUFFLFlBQVc7QUFDbkMsUUFBSSxXQUFXLGNBQWMsTUFBTSxDQUFDLENBQUM7QUFDckMsUUFBSSxDQUFDLFVBQVU7QUFDWCxhQUFPO0lBQ1g7QUFDQSxZQUFRLFFBQVE7TUFDWixLQUFLO01BQ0wsS0FBSztNQUNMLEtBQUs7QUFDRCxtQkFBVyxnQkFBZ0IsUUFBUTtBQUNuQztJQUNSO0FBQ0EsV0FBTyxrQkFBa0IsNEJBQTRCLFFBQVEsV0FBVyxRQUFRO0VBQ3BGOzs7O0FDOUJKLFNBQVMsNkJBQTZCLFFBQXFCO0FBQ3ZELFNBQU8sT0FBTyxLQUFLLE1BQU0sUUFBUSxLQUFLO0FBQzFDO0FBRUEsU0FBUyw2QkFBNkIsUUFBcUI7QUFDdkQsU0FBTyxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUs7QUFDdkM7QUFPQSxJQUFxQixrQ0FBckIsY0FBNkQsZUFBYztFQUN2RSxtQkFBbUIsYUFBcUIsZUFBOEIsWUFBeUI7QUFDM0YsUUFBSSxDQUFDLFlBQVksTUFBTSxRQUFRLEdBQUc7QUFDOUIsYUFBTztJQUNYO0FBRUEsV0FBTyw2QkFBNkIsVUFBVSxLQUFLLDZCQUE2QixVQUFVO0VBQzlGO0VBRUEsYUFBYSxhQUFxQixlQUE4QixZQUEyQixTQUFPO0FBQzlGLFFBQUksWUFBWSxjQUFjLFdBQVcsSUFBSTtBQUM3QyxRQUFJLDZCQUE2QixVQUFVLEdBQUc7QUFDMUMsa0JBQVksZ0JBQWdCLFNBQVM7SUFDekM7QUFFQSxVQUFNLGFBQWEsa0JBQWtCLDRCQUNqQyxzQkFBc0IsU0FBUyxjQUFjLE1BQU0sS0FBSSxDQUFFLEdBQ3pELFNBQVM7QUFHYixXQUFPLElBQUksY0FDUCxjQUFjLFdBQ2QsY0FBYyxPQUNkLEdBQUcsY0FBYyxJQUFJLEdBQUcsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUNyRCxVQUFVO0VBRWxCOzs7O0FDdkNKLFNBQVMsK0JBQStCLFFBQXFCO0FBQ3pELFNBQU8sT0FBTyxLQUFLLE1BQU0sb0JBQW9CLEtBQUs7QUFDdEQ7QUFFQSxTQUFTLDZCQUE2QixRQUFxQjtBQUN2RCxTQUFPLE9BQU8sS0FBSyxNQUFNLG9CQUFvQixLQUFLO0FBQ3REO0FBT0EsSUFBcUIscUNBQXJCLGNBQWdFLGVBQWM7RUFDMUUsaUJBQWM7QUFDVixXQUFPO0VBQ1g7RUFFQSxtQkFBbUIsYUFBcUIsZUFBOEIsWUFBeUI7QUFFM0YsUUFBSSxDQUFDLFlBQVksTUFBTSxLQUFLLGVBQWMsQ0FBRSxHQUFHO0FBQzNDLGFBQU87SUFDWDtBQUlBLFFBQUksQ0FBQywrQkFBK0IsYUFBYSxLQUFLLENBQUMsNkJBQTZCLGFBQWEsR0FBRztBQUNoRyxhQUFPO0lBQ1g7QUFHQSxXQUFPLENBQUMsQ0FBQyxXQUFXLE1BQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLFdBQVcsTUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsV0FBVyxNQUFNLElBQUksTUFBTTtFQUM1RztFQUVBLGFBQWEsYUFBcUIsZUFBOEIsWUFBeUI7QUFDckYsUUFBSSxXQUFXLGNBQWMsY0FBYyxJQUFJO0FBQy9DLFFBQUksK0JBQStCLGFBQWEsR0FBRztBQUMvQyxpQkFBVyxnQkFBZ0IsUUFBUTtJQUN2QztBQUVBLFVBQU0sYUFBYSxrQkFBa0IsNEJBQ2pDLHNCQUFzQixTQUFTLFdBQVcsTUFBTSxLQUFJLENBQUUsR0FDdEQsUUFBUTtBQUdaLFdBQU8sSUFBSSxjQUNQLFdBQVcsV0FDWCxjQUFjLE9BQ2QsR0FBRyxjQUFjLElBQUksR0FBRyxXQUFXLEdBQUcsV0FBVyxJQUFJLElBQ3JELFVBQVU7RUFFbEI7Ozs7QUNwREosSUFBTSxzQkFBc0IsSUFBSSxPQUFPLFNBQVMsWUFBWSxLQUFLLEdBQUc7QUFDcEUsSUFBTUMsY0FBYTtBQUNuQixJQUFxQiw2QkFBckIsTUFBK0M7RUFDM0MsT0FBTyxTQUF5QixTQUF3QjtBQUNwRCxZQUFRLFFBQVEsU0FBVSxRQUFNO0FBQzVCLFVBQUksQ0FBQyxPQUFPLE1BQU0sc0JBQXFCLEdBQUk7QUFDdkM7TUFDSjtBQUNBLFlBQU0sU0FBUyxRQUFRLEtBQUssVUFBVSxPQUFPLFFBQVEsT0FBTyxLQUFLLE1BQU07QUFDdkUsWUFBTSxRQUFRLG9CQUFvQixLQUFLLE1BQU07QUFDN0MsVUFBSSxDQUFDLE9BQU87QUFDUjtNQUNKO0FBRUEsVUFBSSxNQUFNLENBQUMsRUFBRSxLQUFJLEVBQUcsVUFBVSxHQUFHO0FBQzdCO01BQ0o7QUFDQSxjQUFRLE1BQU0sTUFBSztBQUNmLGdCQUFRLElBQUkscUJBQXFCLE1BQU0sQ0FBQyxDQUFDLFlBQVksTUFBTSxFQUFFO01BQ2pFLENBQUM7QUFDRCxZQUFNLE9BQU8sVUFBVSxNQUFNQSxXQUFVLENBQUM7QUFDeEMsVUFBSSxPQUFPLE9BQU8sTUFBTTtBQUNwQixlQUFPLElBQUksT0FBTyxRQUFRLElBQUk7TUFDbEM7QUFDQSxhQUFPLE1BQU0sT0FBTyxRQUFRLElBQUk7QUFDaEMsYUFBTyxRQUFRLE1BQU0sQ0FBQztJQUMxQixDQUFDO0FBQ0QsV0FBTztFQUNYOzs7O0FDN0JKLElBQXFCLHlCQUFyQixjQUFvRCxPQUFNO0VBQ3RELGNBQUE7QUFDSSxVQUFLO0VBQ1Q7RUFFQSxRQUFRLFNBQVMsUUFBcUI7QUFDbEMsVUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFJO0FBSTdCLFFBQUksU0FBUyxRQUFRLEtBQUssS0FBSSxHQUFJO0FBQzlCLGFBQU87SUFDWDtBQUlBLFFBQUksS0FBSyxZQUFXLE1BQU8sT0FBTztBQUM5QixZQUFNLGFBQWEsUUFBUSxLQUFLLFVBQVUsR0FBRyxPQUFPLEtBQUssRUFBRSxLQUFJO0FBQy9ELFVBQUksQ0FBQyxXQUFXLE1BQU0sVUFBVSxHQUFHO0FBQy9CLGdCQUFRLE1BQU0sTUFBSztBQUNmLGtCQUFRLElBQUksNkJBQTZCLE1BQU0sRUFBRTtRQUNyRCxDQUFDO0FBRUQsZUFBTztNQUNYO0lBQ0o7QUFHQSxRQUFJLEtBQUssWUFBVyxFQUFHLFNBQVMsWUFBWSxHQUFHO0FBQzNDLFlBQU0sWUFBWSxRQUFRLEtBQUssVUFBVSxPQUFPLFFBQVEsT0FBTyxLQUFLLE1BQU0sRUFBRSxLQUFJO0FBQ2hGLFVBQUksVUFBVSxTQUFTLEdBQUc7QUFDdEIsZ0JBQVEsTUFBTSxNQUFLO0FBQ2Ysa0JBQVEsSUFBSSw2QkFBNkIsTUFBTSxFQUFFO1FBQ3JELENBQUM7TUFDTDtBQUNBLGFBQU87SUFDWDtBQUVBLFdBQU87RUFDWDs7OztBQ2RKLElBQXFCLHlCQUFyQixNQUEyQztFQUt2QywwQkFBMEIsZUFBZSxPQUFLO0FBQzFDLFVBQU0sU0FBUyxLQUFLLG9CQUFvQixPQUFPLFlBQVk7QUFDM0QsV0FBTyxRQUFRLEtBQUssSUFBSSxtQkFBa0IsQ0FBRTtBQUM1QyxXQUFPLFFBQVEsS0FBSyxJQUFJLG1CQUFrQixDQUFFO0FBQzVDLFdBQU8sUUFBUSxLQUFLLElBQUksa0JBQWlCLENBQUU7QUFDM0MsV0FBTyxRQUFRLEtBQUssSUFBSSwyQkFBMEIsQ0FBRTtBQUNwRCxXQUFPLFFBQVEsS0FBSyxJQUFJLHFDQUFvQyxDQUFFO0FBQzlELFdBQU8sU0FBUyxLQUFLLElBQUksdUJBQXNCLENBQUU7QUFDakQsV0FBTztFQUNYO0VBUUEsb0JBQW9CLGFBQWEsTUFBTSxlQUFlLE9BQUs7QUFDdkQsVUFBTSxVQUFVLDJCQUNaO01BQ0ksU0FBUztRQUNMLElBQUksc0JBQXNCLFlBQVk7UUFDdEMsSUFBSSw2QkFBNkIsVUFBVTtRQUMzQyxJQUFJLDhCQUE2QjtRQUNqQyxJQUFJLDhCQUEwRCxZQUFZO1FBQzFFLElBQUksZ0JBQWU7UUFDbkIsSUFBSSx5QkFBd0I7UUFDNUIsSUFBSSx1QkFBdUIsVUFBVTtRQUNyQyxJQUFJLDBCQUEwQixVQUFVO1FBQ3hDLElBQUksNEJBQTRCLFVBQVU7O01BRTlDLFVBQVUsQ0FBQyxJQUFJLHVCQUFzQixDQUFFO09BRTNDLFVBQVU7QUFFZCxZQUFRLFFBQVEsUUFBUSxJQUFJLHFCQUErQyxVQUFVLENBQUM7QUFHdEYsWUFBUSxTQUFTLFFBQVEsSUFBSSxtQ0FBa0MsQ0FBRTtBQUNqRSxZQUFRLFNBQVMsUUFBUSxJQUFJLGdDQUErQixDQUFFO0FBQzlELFlBQVEsU0FBUyxRQUFRLElBQUksc0JBQXFCLENBQUU7QUFHcEQsWUFBUSxTQUFTLEtBQUssSUFBSSx1QkFBc0IsQ0FBRTtBQUdsRCxZQUFRLFNBQVMsS0FBSyxJQUFJLDJCQUEwQixDQUFFO0FBR3RELFlBQVEsU0FBUyxLQUFLLElBQUksd0JBQXVCLENBQUU7QUFDbkQsV0FBTztFQUNYOzs7O0FDckNFLElBQU8sU0FBUCxNQUFPLFFBQU07RUFDZjtFQUNBO0VBRUEsZ0JBQWdCLElBQUksdUJBQXNCO0VBRTFDLFlBQVlDLGdCQUE2QjtBQUNyQyxJQUFBQSxpQkFBZ0JBLGtCQUFpQixLQUFLLGNBQWMsMEJBQXlCO0FBQzdFLFNBQUssVUFBVSxDQUFDLEdBQUdBLGVBQWMsT0FBTztBQUN4QyxTQUFLLFdBQVcsQ0FBQyxHQUFHQSxlQUFjLFFBQVE7RUFDOUM7RUFLQSxRQUFLO0FBQ0QsV0FBTyxJQUFJLFFBQU87TUFDZCxTQUFTLENBQUMsR0FBRyxLQUFLLE9BQU87TUFDekIsVUFBVSxDQUFDLEdBQUcsS0FBSyxRQUFRO0tBQzlCO0VBQ0w7RUFNQSxVQUFVLE1BQWMsZUFBeUMsUUFBc0I7QUFDbkYsVUFBTSxVQUFVLEtBQUssTUFBTSxNQUFNLGVBQWUsTUFBTTtBQUN0RCxXQUFPLFFBQVEsU0FBUyxJQUFJLFFBQVEsQ0FBQyxFQUFFLE1BQU0sS0FBSSxJQUFLO0VBQzFEO0VBRUEsTUFBTSxNQUFjLGVBQXlDLFFBQXNCO0FBQy9FLFVBQU0sVUFBVSxJQUFJLGVBQWUsTUFBTSxlQUFlLE1BQU07QUFFOUQsUUFBSSxVQUFVLENBQUE7QUFDZCxTQUFLLFFBQVEsUUFBUSxDQUFDLFdBQVU7QUFDNUIsWUFBTSxnQkFBZ0IsUUFBTyxjQUFjLFNBQVMsTUFBTTtBQUMxRCxnQkFBVSxRQUFRLE9BQU8sYUFBYTtJQUMxQyxDQUFDO0FBRUQsWUFBUSxLQUFLLENBQUMsR0FBRyxNQUFLO0FBQ2xCLGFBQU8sRUFBRSxRQUFRLEVBQUU7SUFDdkIsQ0FBQztBQUVELFNBQUssU0FBUyxRQUFRLFNBQVUsU0FBTztBQUNuQyxnQkFBVSxRQUFRLE9BQU8sU0FBUyxPQUFPO0lBQzdDLENBQUM7QUFFRCxXQUFPO0VBQ1g7RUFFUSxPQUFPLGNBQWMsU0FBeUIsUUFBYztBQUNoRSxVQUFNLFVBQVUsQ0FBQTtBQUNoQixVQUFNLFVBQVUsT0FBTyxRQUFRLE9BQU87QUFFdEMsVUFBTSxlQUFlLFFBQVE7QUFDN0IsUUFBSSxnQkFBZ0IsUUFBUTtBQUM1QixRQUFJLFFBQVEsUUFBUSxLQUFLLGFBQWE7QUFFdEMsV0FBTyxPQUFPO0FBRVYsWUFBTSxRQUFRLE1BQU0sUUFBUSxhQUFhLFNBQVMsY0FBYztBQUNoRSxZQUFNLFFBQVE7QUFFZCxZQUFNLFNBQVMsT0FBTyxRQUFRLFNBQVMsS0FBSztBQUM1QyxVQUFJLENBQUMsUUFBUTtBQUVULHdCQUFnQixhQUFhLFVBQVUsTUFBTSxRQUFRLENBQUM7QUFDdEQsZ0JBQVEsUUFBUSxLQUFLLGFBQWE7QUFDbEM7TUFDSjtBQUVBLFVBQUksZUFBOEI7QUFDbEMsVUFBSSxrQkFBa0IsZUFBZTtBQUNqQyx1QkFBZTtNQUNuQixXQUFXLGtCQUFrQixtQkFBbUI7QUFDNUMsdUJBQWUsUUFBUSxvQkFBb0IsTUFBTSxPQUFPLE1BQU0sQ0FBQyxDQUFDO0FBQ2hFLHFCQUFhLFFBQVE7TUFDekIsT0FBTztBQUNILHVCQUFlLFFBQVEsb0JBQW9CLE1BQU0sT0FBTyxNQUFNLENBQUMsR0FBRyxNQUFNO01BQzVFO0FBRUEsWUFBTSxjQUFjLGFBQWE7QUFDakMsWUFBTSxhQUFhLGFBQWE7QUFDaEMsY0FBUSxNQUFNLE1BQ1YsUUFBUSxJQUFJLEdBQUcsT0FBTyxZQUFZLElBQUksd0JBQXdCLFdBQVcsTUFBTSxVQUFVLEdBQUcsQ0FBQztBQUdqRyxjQUFRLEtBQUssWUFBWTtBQUN6QixzQkFBZ0IsYUFBYSxVQUFVLGNBQWMsV0FBVyxNQUFNO0FBQ3RFLGNBQVEsUUFBUSxLQUFLLGFBQWE7SUFDdEM7QUFFQSxXQUFPO0VBQ1g7O0FBR0UsSUFBTyxpQkFBUCxNQUFxQjtFQUNkO0VBQ0E7RUFDQTtFQUtBO0VBRVQsWUFBWSxNQUFjLFNBQW1DLFFBQXNCO0FBQy9FLFNBQUssT0FBTztBQUNaLFNBQUssU0FBUyxVQUFVLENBQUE7QUFDeEIsU0FBSyxZQUFZLHNCQUFzQixVQUFVLFNBQVMsS0FBSyxPQUFPLFNBQVM7QUFDL0UsU0FBSyxVQUFVLEtBQUssVUFBVTtFQUNsQztFQUVBLHdCQUF3QixZQUE4RDtBQUNsRixRQUFJLHNCQUFzQixtQkFBbUI7QUFDekMsYUFBTztJQUNYO0FBRUEsV0FBTyxJQUFJLGtCQUFrQixLQUFLLFdBQVcsVUFBVTtFQUMzRDtFQUVBLG9CQUNJLE9BQ0EsZ0JBQ0EsaUJBQ0EsZUFBaUU7QUFFakUsVUFBTSxPQUFPLE9BQU8sbUJBQW1CLFdBQVcsaUJBQWlCLEtBQUssS0FBSyxVQUFVLE9BQU8sY0FBYztBQUU1RyxVQUFNLFFBQVEsa0JBQWtCLEtBQUssd0JBQXdCLGVBQWUsSUFBSTtBQUNoRixVQUFNLE1BQU0sZ0JBQWdCLEtBQUssd0JBQXdCLGFBQWEsSUFBSTtBQUUxRSxXQUFPLElBQUksY0FBYyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sR0FBRztFQUNwRTtFQUVBLE1BQU0sT0FBc0I7QUFDeEIsUUFBSSxLQUFLLE9BQU8sT0FBTztBQUNuQixVQUFJLEtBQUssT0FBTyxpQkFBaUIsVUFBVTtBQUN2QyxhQUFLLE9BQU8sTUFBTSxLQUFLO01BQzNCLE9BQU87QUFDSCxjQUFNLFVBQXNDLEtBQUssT0FBTztBQUN4RCxnQkFBUSxNQUFNLEtBQUs7TUFDdkI7SUFDSjtFQUNKOzs7O0FDakxHLElBQU0sZ0JBQWdCLElBQUksdUJBQXNCO0FBS2hELElBQU0sU0FBUyxJQUFJLE9BQU8sY0FBYywwQkFBMEIsS0FBSyxDQUFDO0FBS3hFLElBQU0sU0FBUyxJQUFJLE9BQU8sY0FBYyxvQkFBb0IsTUFBTSxLQUFLLENBQUM7QUFLeEUsSUFBTSxLQUFLLElBQUksT0FBTyxjQUFjLDBCQUEwQixJQUFJLENBQUM7OztBQ0NuRSxJQUFNQyxVQUFZO0FBWW5CLFNBQVUsVUFBVSxNQUFjLEtBQStCLFFBQXNCO0FBQ3pGLFNBQU9DLFFBQU8sVUFBVSxNQUFNLEtBQUssTUFBTTtBQUM3Qzs7O0FqRDNDQSxtQkFBa0I7QUFDbEIsNEJBQWlDO0FBQ2pDLDBCQUErQjtBQUMvQixJQUFBQyxtQkFBMkI7QUFDM0IsaUJBQXNCO0FBQ3RCLHdCQUE2QjtBQUM3QixtQkFBeUI7QUF1RGI7QUFyRFosYUFBQUMsUUFBTSxPQUFPLHNCQUFBQyxPQUFvQjtBQUNqQyxhQUFBRCxRQUFNLE9BQU8sa0JBQUFFLE9BQWdCO0FBQzdCLGFBQUFGLFFBQU0sT0FBTyxXQUFBRyxPQUFTO0FBQ3RCLGFBQUFILFFBQU0sT0FBTyxpQkFBQUksT0FBYztBQUMzQixhQUFBSixRQUFNLE9BQU8sb0JBQUFLLE9BQWtCO0FBRS9CLFNBQVMsaUJBQWlCLE9BQWUsVUFBa0I7QUFDekQsTUFBSSxNQUFNLE1BQU0sT0FBTztBQUNyQixZQUFRLElBQUksS0FBSyxPQUFPLFNBQVMsT0FBTyxFQUFFLElBQUksR0FBSSxFQUFFLFNBQVM7QUFFL0QsUUFBTSxhQUFhLFVBQVUsS0FBSztBQUNsQyxNQUFJLENBQUMsY0FBYyxXQUFXLFNBQVMsTUFBTTtBQUMzQyxXQUFPLENBQUM7QUFFVixRQUFNLFdBQU8sYUFBQUwsU0FBTSxVQUFVLEVBQUUsR0FBRyxRQUFRO0FBQzFDLFFBQU0sVUFBVSxLQUFLLFFBQVE7QUFFN0IsU0FBTztBQUFBLElBQ0wsRUFBRSxPQUFPLFlBQVksT0FBTyxLQUFLLEtBQUssRUFBRTtBQUFBLElBQ3hDLEVBQUUsT0FBTyxhQUFhLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFBQSxJQUM1QyxFQUFFLE9BQU8sa0JBQWtCLE9BQU8sS0FBSyxPQUFPLHFDQUFxQyxFQUFFO0FBQUEsSUFDckYsRUFBRSxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8scUJBQXFCLEVBQUU7QUFBQSxJQUMvRCxFQUFFLE9BQU8sT0FBTyxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQUEsSUFDdkMsRUFBRSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksRUFBRTtBQUFBLElBQy9DLEVBQUUsT0FBTyxnQkFBZ0IsT0FBTyxLQUFLLE9BQU8sbUJBQW1CLEVBQUU7QUFBQSxJQUNqRSxFQUFFLE9BQU8sWUFBWSxPQUFPLE9BQU8sT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxPQUFPLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtBQUFBLEVBQ2pHO0FBQ0Y7QUFFZSxTQUFSLFNBQTBCO0FBQy9CLFFBQU0sQ0FBQyxPQUFPLFFBQVEsUUFBSSx1QkFBUyxLQUFLO0FBQ3hDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsUUFBSSx1QkFBUyxLQUFLLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxRQUFRO0FBQ3pGLFFBQU0sQ0FBQyxPQUFPLFFBQVEsUUFBSSx1QkFBc0QsQ0FBQyxDQUFDO0FBRWxGLFFBQU0sbUJBQW1CLE9BQU8sVUFBa0I7QUFDaEQsZ0JBQVksS0FBSztBQUNqQixhQUFTLGlCQUFpQixPQUFPLEtBQUssQ0FBQztBQUFBLEVBQ3pDO0FBRUEsUUFBTSxxQkFBcUIsT0FBTyxVQUFrQjtBQUNsRCxhQUFTLEtBQUs7QUFDZCxhQUFTLGlCQUFpQixPQUFPLFFBQVEsQ0FBQztBQUFBLEVBQzVDO0FBRUEsU0FDRTtBQUFBLElBQUM7QUFBQTtBQUFBLE1BQ0Msc0JBQXFCO0FBQUEsTUFDckIsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1o7QUFBQSxNQUNBLG9CQUNFLDRDQUFDLGdCQUFLLFVBQUwsRUFBYyxTQUFRLFlBQVcsVUFBVSxrQkFBa0IsY0FBYyxVQUN6RSxlQUFLLGtCQUFrQixVQUFVLEVBQUUsSUFBSSxVQUN0Qyw0Q0FBQyxnQkFBSyxTQUFTLE1BQWQsRUFBOEIsT0FBTyxNQUFNLE9BQU8sUUFBMUIsSUFBZ0MsQ0FDMUQsR0FDSDtBQUFBLE1BR0QsZ0JBQU0sSUFBSSxVQUNUO0FBQUEsUUFBQyxnQkFBSztBQUFBLFFBQUw7QUFBQSxVQUVDLE9BQU8sT0FBTyxLQUFLLEtBQUs7QUFBQSxVQUN4QixhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxLQUFLLE9BQU8sT0FBTyxpQkFBTSxjQUFjLEVBQUUsQ0FBQztBQUFBLFVBQ3hFLFNBQ0UsNkNBQUMsMEJBQ0M7QUFBQSx3REFBQyxrQkFBTyxpQkFBUCxFQUF1QixTQUFTLEtBQUssT0FBTztBQUFBLFlBQzdDLDRDQUFDLGtCQUFPLE9BQVAsRUFBYSxTQUFTLEtBQUssT0FBTztBQUFBLGFBQ3JDO0FBQUE7QUFBQSxRQVBHLEtBQUs7QUFBQSxNQVNaLENBQ0Q7QUFBQTtBQUFBLEVBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgIm4iLCAiciIsICJpIiwgInMiLCAidSIsICJhIiwgIk0iLCAibSIsICJmIiwgImwiLCAiJCIsICJ5IiwgInYiLCAiZyIsICJEIiwgIm8iLCAiZCIsICJjIiwgImgiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZSIsICJ0IiwgInIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiciIsICJlIiwgInQiLCAibyIsICJuIiwgImkiLCAiZCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgIm4iLCAiaSIsICJvIiwgInIiLCAiZSIsICJ1IiwgImYiLCAicyIsICJhIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiaSIsICJlIiwgInMiLCAiZiIsICJuIiwgInUiLCAiciIsICJvIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImkiLCAibiIsICJmIiwgImUiLCAiTWVyaWRpZW0iLCAiV2Vla2RheSIsICJNb250aCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiREFURV9HUk9VUCIsICJEQVRFX1RPX0dST1VQIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJzdHJpY3QiLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlNUUklDVF9QQVRURVJOIiwgInJlZkRhdGUiLCAiZGF5c1RvQWRkIiwgIlBBVFRFUk4iLCAiWUVBUl9OVU1CRVJfR1JPVVAiLCAiTU9OVEhfTlVNQkVSX0dST1VQIiwgIkRBVEVfTlVNQkVSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiUFJFRklYX0dST1VQIiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJjb25maWd1cmF0aW9uIiwgImNhc3VhbCIsICJjYXN1YWwiLCAiaW1wb3J0X3RpbWV6b25lIiwgImRheWpzIiwgImFkdmFuY2VkRm9ybWF0UGx1Z2luIiwgIndlZWtPZlllYXJQbHVnaW4iLCAidXRjUGx1Z2luIiwgInRpbWV6b25lUGx1Z2luIiwgInJlbGF0aXZlVGltZVBsdWdpbiJdCn0K
