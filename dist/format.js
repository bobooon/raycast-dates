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
var defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
function process(input, timezone) {
  if (input.match(/^\d+$/)) {
    const timestamp = Number.parseInt(input, 10);
    input = new Date(timestamp > 4102444800 ? timestamp : timestamp * 1e3).toString();
  }
  const dateParsed = parseDate(input);
  if (!dateParsed || dateParsed.toString() === "Invalid Date")
    return [];
  const date = (0, import_dayjs.default)(dateParsed).tz(timezone);
  const dateFrom = date.fromNow();
  return [
    { label: "Unix (s)", value: date.unix() },
    { label: "Unix (ms)", value: date.valueOf() },
    { label: "Human Readable", value: date.format("MMMM Do, YYYY [at] hh:mm:ss A (zzz)") },
    { label: "DateTime", value: date.format("YYYY-MM-DD HH:mm:ss") },
    { label: "String", value: date.toString() },
    { label: "ISO 8601", value: date.toISOString() },
    { label: "Week of Year", value: date.format("wo dddd [of] YYYY") },
    { label: "In / Ago", value: dateFrom.charAt(0).toUpperCase() + dateFrom.slice(1) }
  ];
}
function Format() {
  const [input, setInput] = (0, import_react.useState)("now");
  const [timezone, setTimezone] = (0, import_react.useState)(defaultTimezone);
  const [items, setItems] = (0, import_react.useState)([]);
  const onTimezoneChange = (value) => {
    setTimezone(value);
    setItems(process(input, value));
  };
  const onSearchTextChange = (value) => {
    setInput(value);
    setItems(process(value, timezone));
  };
  const timezones = (0, import_react.useMemo)(() => Intl.supportedValuesOf("timeZone"), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api.List,
    {
      searchBarPlaceholder: "Date",
      filtering: false,
      searchText: input,
      onSearchTextChange,
      searchBarAccessory: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown, { tooltip: "Timezone", onChange: onTimezoneChange, defaultValue: timezone, children: timezones.map((zone) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.List.Dropdown.Item, { value: zone, title: zone }, zone)) }),
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_api.List.Item,
        {
          title: String(item.value),
          accessories: [{ tag: { value: item.label, color: import_api.Color.SecondaryText } }],
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.CopyToClipboard, { content: String(item.value) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Action.Paste, { content: String(item.value) })
          ] })
        },
        item.label
      ))
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL2RheWpzLm1pbi5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL2FkdmFuY2VkRm9ybWF0LmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vcmVsYXRpdmVUaW1lLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vdGltZXpvbmUuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi93ZWVrT2ZZZWFyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL3NyYy9mb3JtYXQudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdHlwZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXRlcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3RpbWV6b25lLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vZHVyYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9yZXN1bHRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvcGF0dGVybi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3llYXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vYWJzdHJhY3RSZWZpbmVycy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbmZpZ3VyYXRpb25zLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3dlZWtkYXlzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3JheWNhc3QvZGF0ZXMvbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTlVubGlrZWx5Rm9ybWF0RmlsdGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2hyb25vLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy9yYXljYXN0L2RhdGVzL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9pbmRleC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvcmF5Y2FzdC9kYXRlcy9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD0xZTMsZT02ZTQsbj0zNmU1LHI9XCJtaWxsaXNlY29uZFwiLGk9XCJzZWNvbmRcIixzPVwibWludXRlXCIsdT1cImhvdXJcIixhPVwiZGF5XCIsbz1cIndlZWtcIixjPVwibW9udGhcIixmPVwicXVhcnRlclwiLGg9XCJ5ZWFyXCIsZD1cImRhdGVcIixsPVwiSW52YWxpZCBEYXRlXCIsJD0vXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvLHk9L1xcWyhbXlxcXV0rKV18WXsxLDR9fE17MSw0fXxEezEsMn18ZHsxLDR9fEh7MSwyfXxoezEsMn18YXxBfG17MSwyfXxzezEsMn18WnsxLDJ9fFNTUy9nLE09e25hbWU6XCJlblwiLHdlZWtkYXlzOlwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksbW9udGhzOlwiSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlclwiLnNwbGl0KFwiX1wiKSxvcmRpbmFsOmZ1bmN0aW9uKHQpe3ZhciBlPVtcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdLG49dCUxMDA7cmV0dXJuXCJbXCIrdCsoZVsobi0yMCklMTBdfHxlW25dfHxlWzBdKStcIl1cIn19LG09ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSx2PXtzOm0sejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpK20ociwyLFwiMFwiKStcIjpcIittKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsYykscz1uLWk8MCx1PWUuY2xvbmUoKS5hZGQocisocz8tMToxKSxjKTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLXU6dS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24odCl7cmV0dXJue006Yyx5OmgsdzpvLGQ6YSxEOmQsaDp1LG06cyxzOmksbXM6cixROmZ9W3RdfHxTdHJpbmcodHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSxnPVwiZW5cIixEPXt9O0RbZ109TTt2YXIgcD1cIiRpc0RheWpzT2JqZWN0XCIsUz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIF98fCEoIXR8fCF0W3BdKX0sdz1mdW5jdGlvbiB0KGUsbixyKXt2YXIgaTtpZighZSlyZXR1cm4gZztpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIHM9ZS50b0xvd2VyQ2FzZSgpO0Rbc10mJihpPXMpLG4mJihEW3NdPW4saT1zKTt2YXIgdT1lLnNwbGl0KFwiLVwiKTtpZighaSYmdS5sZW5ndGg+MSlyZXR1cm4gdCh1WzBdKX1lbHNle3ZhciBhPWUubmFtZTtEW2FdPWUsaT1hfXJldHVybiFyJiZpJiYoZz1pKSxpfHwhciYmZ30sTz1mdW5jdGlvbih0LGUpe2lmKFModCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBfKG4pfSxiPXY7Yi5sPXcsYi5pPVMsYi53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBfPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gTSh0KXt0aGlzLiRMPXcodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KSx0aGlzLiR4PXRoaXMuJHh8fHQueHx8e30sdGhpc1twXT0hMH12YXIgbT1NLnByb3RvdHlwZTtyZXR1cm4gbS5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGIudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaCgkKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLmluaXQoKX0sbS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0RnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0TW9udGgoKSx0aGlzLiREPXQuZ2V0RGF0ZSgpLHRoaXMuJFc9dC5nZXREYXkoKSx0aGlzLiRIPXQuZ2V0SG91cnMoKSx0aGlzLiRtPXQuZ2V0TWludXRlcygpLHRoaXMuJHM9dC5nZXRTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRNaWxsaXNlY29uZHMoKX0sbS4kdXRpbHM9ZnVuY3Rpb24oKXtyZXR1cm4gYn0sbS5pc1ZhbGlkPWZ1bmN0aW9uKCl7cmV0dXJuISh0aGlzLiRkLnRvU3RyaW5nKCk9PT1sKX0sbS5pc1NhbWU9ZnVuY3Rpb24odCxlKXt2YXIgbj1PKHQpO3JldHVybiB0aGlzLnN0YXJ0T2YoZSk8PW4mJm48PXRoaXMuZW5kT2YoZSl9LG0uaXNBZnRlcj1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQpPHRoaXMuc3RhcnRPZihlKX0sbS5pc0JlZm9yZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmVuZE9mKGUpPE8odCl9LG0uJGc9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBiLnUodCk/dGhpc1tlXTp0aGlzLnNldChuLHQpfSxtLnVuaXg9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKS8xZTMpfSxtLnZhbHVlT2Y9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC5nZXRUaW1lKCl9LG0uc3RhcnRPZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj0hIWIudShlKXx8ZSxmPWIucCh0KSxsPWZ1bmN0aW9uKHQsZSl7dmFyIGk9Yi53KG4uJHU/RGF0ZS5VVEMobi4keSxlLHQpOm5ldyBEYXRlKG4uJHksZSx0KSxuKTtyZXR1cm4gcj9pOmkuZW5kT2YoYSl9LCQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYi53KG4udG9EYXRlKClbdF0uYXBwbHkobi50b0RhdGUoXCJzXCIpLChyP1swLDAsMCwwXTpbMjMsNTksNTksOTk5XSkuc2xpY2UoZSkpLG4pfSx5PXRoaXMuJFcsTT10aGlzLiRNLG09dGhpcy4kRCx2PVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKTtzd2l0Y2goZil7Y2FzZSBoOnJldHVybiByP2woMSwwKTpsKDMxLDExKTtjYXNlIGM6cmV0dXJuIHI/bCgxLE0pOmwoMCxNKzEpO2Nhc2Ugbzp2YXIgZz10aGlzLiRsb2NhbGUoKS53ZWVrU3RhcnR8fDAsRD0oeTxnP3krNzp5KS1nO3JldHVybiBsKHI/bS1EOm0rKDYtRCksTSk7Y2FzZSBhOmNhc2UgZDpyZXR1cm4gJCh2K1wiSG91cnNcIiwwKTtjYXNlIHU6cmV0dXJuICQoditcIk1pbnV0ZXNcIiwxKTtjYXNlIHM6cmV0dXJuICQoditcIlNlY29uZHNcIiwyKTtjYXNlIGk6cmV0dXJuICQoditcIk1pbGxpc2Vjb25kc1wiLDMpO2RlZmF1bHQ6cmV0dXJuIHRoaXMuY2xvbmUoKX19LG0uZW5kT2Y9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc3RhcnRPZih0LCExKX0sbS4kc2V0PWZ1bmN0aW9uKHQsZSl7dmFyIG4sbz1iLnAodCksZj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIiksbD0obj17fSxuW2FdPWYrXCJEYXRlXCIsbltkXT1mK1wiRGF0ZVwiLG5bY109ZitcIk1vbnRoXCIsbltoXT1mK1wiRnVsbFllYXJcIixuW3VdPWYrXCJIb3Vyc1wiLG5bc109ZitcIk1pbnV0ZXNcIixuW2ldPWYrXCJTZWNvbmRzXCIsbltyXT1mK1wiTWlsbGlzZWNvbmRzXCIsbilbb10sJD1vPT09YT90aGlzLiREKyhlLXRoaXMuJFcpOmU7aWYobz09PWN8fG89PT1oKXt2YXIgeT10aGlzLmNsb25lKCkuc2V0KGQsMSk7eS4kZFtsXSgkKSx5LmluaXQoKSx0aGlzLiRkPXkuc2V0KGQsTWF0aC5taW4odGhpcy4kRCx5LmRheXNJbk1vbnRoKCkpKS4kZH1lbHNlIGwmJnRoaXMuJGRbbF0oJCk7cmV0dXJuIHRoaXMuaW5pdCgpLHRoaXN9LG0uc2V0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuY2xvbmUoKS4kc2V0KHQsZSl9LG0uZ2V0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzW2IucCh0KV0oKX0sbS5hZGQ9ZnVuY3Rpb24ocixmKXt2YXIgZCxsPXRoaXM7cj1OdW1iZXIocik7dmFyICQ9Yi5wKGYpLHk9ZnVuY3Rpb24odCl7dmFyIGU9TyhsKTtyZXR1cm4gYi53KGUuZGF0ZShlLmRhdGUoKStNYXRoLnJvdW5kKHQqcikpLGwpfTtpZigkPT09YylyZXR1cm4gdGhpcy5zZXQoYyx0aGlzLiRNK3IpO2lmKCQ9PT1oKXJldHVybiB0aGlzLnNldChoLHRoaXMuJHkrcik7aWYoJD09PWEpcmV0dXJuIHkoMSk7aWYoJD09PW8pcmV0dXJuIHkoNyk7dmFyIE09KGQ9e30sZFtzXT1lLGRbdV09bixkW2ldPXQsZClbJF18fDEsbT10aGlzLiRkLmdldFRpbWUoKStyKk07cmV0dXJuIGIudyhtLHRoaXMpfSxtLnN1YnRyYWN0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuYWRkKC0xKnQsZSl9LG0uZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRsb2NhbGUoKTtpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuIG4uaW52YWxpZERhdGV8fGw7dmFyIHI9dHx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiLGk9Yi56KHRoaXMpLHM9dGhpcy4kSCx1PXRoaXMuJG0sYT10aGlzLiRNLG89bi53ZWVrZGF5cyxjPW4ubW9udGhzLGY9bi5tZXJpZGllbSxoPWZ1bmN0aW9uKHQsbixpLHMpe3JldHVybiB0JiYodFtuXXx8dChlLHIpKXx8aVtuXS5zbGljZSgwLHMpfSxkPWZ1bmN0aW9uKHQpe3JldHVybiBiLnMocyUxMnx8MTIsdCxcIjBcIil9LCQ9Znx8ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQ8MTI/XCJBTVwiOlwiUE1cIjtyZXR1cm4gbj9yLnRvTG93ZXJDYXNlKCk6cn07cmV0dXJuIHIucmVwbGFjZSh5LChmdW5jdGlvbih0LHIpe3JldHVybiByfHxmdW5jdGlvbih0KXtzd2l0Y2godCl7Y2FzZVwiWVlcIjpyZXR1cm4gU3RyaW5nKGUuJHkpLnNsaWNlKC0yKTtjYXNlXCJZWVlZXCI6cmV0dXJuIGIucyhlLiR5LDQsXCIwXCIpO2Nhc2VcIk1cIjpyZXR1cm4gYSsxO2Nhc2VcIk1NXCI6cmV0dXJuIGIucyhhKzEsMixcIjBcIik7Y2FzZVwiTU1NXCI6cmV0dXJuIGgobi5tb250aHNTaG9ydCxhLGMsMyk7Y2FzZVwiTU1NTVwiOnJldHVybiBoKGMsYSk7Y2FzZVwiRFwiOnJldHVybiBlLiREO2Nhc2VcIkREXCI6cmV0dXJuIGIucyhlLiRELDIsXCIwXCIpO2Nhc2VcImRcIjpyZXR1cm4gU3RyaW5nKGUuJFcpO2Nhc2VcImRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c01pbixlLiRXLG8sMik7Y2FzZVwiZGRkXCI6cmV0dXJuIGgobi53ZWVrZGF5c1Nob3J0LGUuJFcsbywzKTtjYXNlXCJkZGRkXCI6cmV0dXJuIG9bZS4kV107Y2FzZVwiSFwiOnJldHVybiBTdHJpbmcocyk7Y2FzZVwiSEhcIjpyZXR1cm4gYi5zKHMsMixcIjBcIik7Y2FzZVwiaFwiOnJldHVybiBkKDEpO2Nhc2VcImhoXCI6cmV0dXJuIGQoMik7Y2FzZVwiYVwiOnJldHVybiAkKHMsdSwhMCk7Y2FzZVwiQVwiOnJldHVybiAkKHMsdSwhMSk7Y2FzZVwibVwiOnJldHVybiBTdHJpbmcodSk7Y2FzZVwibW1cIjpyZXR1cm4gYi5zKHUsMixcIjBcIik7Y2FzZVwic1wiOnJldHVybiBTdHJpbmcoZS4kcyk7Y2FzZVwic3NcIjpyZXR1cm4gYi5zKGUuJHMsMixcIjBcIik7Y2FzZVwiU1NTXCI6cmV0dXJuIGIucyhlLiRtcywzLFwiMFwiKTtjYXNlXCJaXCI6cmV0dXJuIGl9cmV0dXJuIG51bGx9KHQpfHxpLnJlcGxhY2UoXCI6XCIsXCJcIil9KSl9LG0udXRjT2Zmc2V0PWZ1bmN0aW9uKCl7cmV0dXJuIDE1Ki1NYXRoLnJvdW5kKHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKS8xNSl9LG0uZGlmZj1mdW5jdGlvbihyLGQsbCl7dmFyICQseT10aGlzLE09Yi5wKGQpLG09TyhyKSx2PShtLnV0Y09mZnNldCgpLXRoaXMudXRjT2Zmc2V0KCkpKmUsZz10aGlzLW0sRD1mdW5jdGlvbigpe3JldHVybiBiLm0oeSxtKX07c3dpdGNoKE0pe2Nhc2UgaDokPUQoKS8xMjticmVhaztjYXNlIGM6JD1EKCk7YnJlYWs7Y2FzZSBmOiQ9RCgpLzM7YnJlYWs7Y2FzZSBvOiQ9KGctdikvNjA0OGU1O2JyZWFrO2Nhc2UgYTokPShnLXYpLzg2NGU1O2JyZWFrO2Nhc2UgdTokPWcvbjticmVhaztjYXNlIHM6JD1nL2U7YnJlYWs7Y2FzZSBpOiQ9Zy90O2JyZWFrO2RlZmF1bHQ6JD1nfXJldHVybiBsPyQ6Yi5hKCQpfSxtLmRheXNJbk1vbnRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW5kT2YoYykuJER9LG0uJGxvY2FsZT1mdW5jdGlvbigpe3JldHVybiBEW3RoaXMuJExdfSxtLmxvY2FsZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybiB0aGlzLiRMO3ZhciBuPXRoaXMuY2xvbmUoKSxyPXcodCxlLCEwKTtyZXR1cm4gciYmKG4uJEw9ciksbn0sbS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBiLncodGhpcy4kZCx0aGlzKX0sbS50b0RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpfSxtLnRvSlNPTj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmFsaWQoKT90aGlzLnRvSVNPU3RyaW5nKCk6bnVsbH0sbS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvSVNPU3RyaW5nKCl9LG0udG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpfSxNfSgpLGs9Xy5wcm90b3R5cGU7cmV0dXJuIE8ucHJvdG90eXBlPWssW1tcIiRtc1wiLHJdLFtcIiRzXCIsaV0sW1wiJG1cIixzXSxbXCIkSFwiLHVdLFtcIiRXXCIsYV0sW1wiJE1cIixjXSxbXCIkeVwiLGhdLFtcIiREXCIsZF1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe2tbdFsxXV09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuJGcoZSx0WzBdLHRbMV0pfX0pKSxPLmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLF8sTyksdC4kaT0hMCksT30sTy5sb2NhbGU9dyxPLmlzRGF5anM9UyxPLnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIE8oMWUzKnQpfSxPLmVuPURbZ10sTy5Mcz1ELE8ucD17fSxPfSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl9hZHZhbmNlZEZvcm1hdD10KCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5wcm90b3R5cGUsbj1yLmZvcm1hdDtyLmZvcm1hdD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmJpbmQodGhpcykoZSk7dmFyIHM9dGhpcy4kdXRpbHMoKSxhPShlfHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIpLnJlcGxhY2UoL1xcWyhbXlxcXV0rKV18UXx3b3x3d3x3fFdXfFd8enp6fHp8Z2dnZ3xHR0dHfERvfFh8eHxrezEsMn18Uy9nLChmdW5jdGlvbihlKXtzd2l0Y2goZSl7Y2FzZVwiUVwiOnJldHVybiBNYXRoLmNlaWwoKHQuJE0rMSkvMyk7Y2FzZVwiRG9cIjpyZXR1cm4gci5vcmRpbmFsKHQuJEQpO2Nhc2VcImdnZ2dcIjpyZXR1cm4gdC53ZWVrWWVhcigpO2Nhc2VcIkdHR0dcIjpyZXR1cm4gdC5pc29XZWVrWWVhcigpO2Nhc2VcIndvXCI6cmV0dXJuIHIub3JkaW5hbCh0LndlZWsoKSxcIldcIik7Y2FzZVwid1wiOmNhc2VcInd3XCI6cmV0dXJuIHMucyh0LndlZWsoKSxcIndcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJXXCI6Y2FzZVwiV1dcIjpyZXR1cm4gcy5zKHQuaXNvV2VlaygpLFwiV1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcImtcIjpjYXNlXCJra1wiOnJldHVybiBzLnMoU3RyaW5nKDA9PT10LiRIPzI0OnQuJEgpLFwia1wiPT09ZT8xOjIsXCIwXCIpO2Nhc2VcIlhcIjpyZXR1cm4gTWF0aC5mbG9vcih0LiRkLmdldFRpbWUoKS8xZTMpO2Nhc2VcInhcIjpyZXR1cm4gdC4kZC5nZXRUaW1lKCk7Y2FzZVwielwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZSgpK1wiXVwiO2Nhc2VcInp6elwiOnJldHVyblwiW1wiK3Qub2Zmc2V0TmFtZShcImxvbmdcIikrXCJdXCI7ZGVmYXVsdDpyZXR1cm4gZX19KSk7cmV0dXJuIG4uYmluZCh0aGlzKShhKX19fSkpOyIsICIhZnVuY3Rpb24ocixlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToocj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnJ8fHNlbGYpLmRheWpzX3BsdWdpbl9yZWxhdGl2ZVRpbWU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihyLGUsdCl7cj1yfHx7fTt2YXIgbj1lLnByb3RvdHlwZSxvPXtmdXR1cmU6XCJpbiAlc1wiLHBhc3Q6XCIlcyBhZ29cIixzOlwiYSBmZXcgc2Vjb25kc1wiLG06XCJhIG1pbnV0ZVwiLG1tOlwiJWQgbWludXRlc1wiLGg6XCJhbiBob3VyXCIsaGg6XCIlZCBob3Vyc1wiLGQ6XCJhIGRheVwiLGRkOlwiJWQgZGF5c1wiLE06XCJhIG1vbnRoXCIsTU06XCIlZCBtb250aHNcIix5OlwiYSB5ZWFyXCIseXk6XCIlZCB5ZWFyc1wifTtmdW5jdGlvbiBpKHIsZSx0LG8pe3JldHVybiBuLmZyb21Ub0Jhc2UocixlLHQsbyl9dC5lbi5yZWxhdGl2ZVRpbWU9byxuLmZyb21Ub0Jhc2U9ZnVuY3Rpb24oZSxuLGksZCx1KXtmb3IodmFyIGYsYSxzLGw9aS4kbG9jYWxlKCkucmVsYXRpdmVUaW1lfHxvLGg9ci50aHJlc2hvbGRzfHxbe2w6XCJzXCIscjo0NCxkOlwic2Vjb25kXCJ9LHtsOlwibVwiLHI6ODl9LHtsOlwibW1cIixyOjQ0LGQ6XCJtaW51dGVcIn0se2w6XCJoXCIscjo4OX0se2w6XCJoaFwiLHI6MjEsZDpcImhvdXJcIn0se2w6XCJkXCIscjozNX0se2w6XCJkZFwiLHI6MjUsZDpcImRheVwifSx7bDpcIk1cIixyOjQ1fSx7bDpcIk1NXCIscjoxMCxkOlwibW9udGhcIn0se2w6XCJ5XCIscjoxN30se2w6XCJ5eVwiLGQ6XCJ5ZWFyXCJ9XSxtPWgubGVuZ3RoLGM9MDtjPG07Yys9MSl7dmFyIHk9aFtjXTt5LmQmJihmPWQ/dChlKS5kaWZmKGkseS5kLCEwKTppLmRpZmYoZSx5LmQsITApKTt2YXIgcD0oci5yb3VuZGluZ3x8TWF0aC5yb3VuZCkoTWF0aC5hYnMoZikpO2lmKHM9Zj4wLHA8PXkucnx8IXkucil7cDw9MSYmYz4wJiYoeT1oW2MtMV0pO3ZhciB2PWxbeS5sXTt1JiYocD11KFwiXCIrcCkpLGE9XCJzdHJpbmdcIj09dHlwZW9mIHY/di5yZXBsYWNlKFwiJWRcIixwKTp2KHAsbix5Lmwscyk7YnJlYWt9fWlmKG4pcmV0dXJuIGE7dmFyIE09cz9sLmZ1dHVyZTpsLnBhc3Q7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgTT9NKGEpOk0ucmVwbGFjZShcIiVzXCIsYSl9LG4udG89ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcywhMCl9LG4uZnJvbT1mdW5jdGlvbihyLGUpe3JldHVybiBpKHIsZSx0aGlzKX07dmFyIGQ9ZnVuY3Rpb24ocil7cmV0dXJuIHIuJHU/dC51dGMoKTp0KCl9O24udG9Ob3c9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMudG8oZCh0aGlzKSxyKX0sbi5mcm9tTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmZyb20oZCh0aGlzKSxyKX19fSkpOyIsICIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsaD1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIix2PStlO3JldHVybihvLnV0YyhoKS52YWx1ZU9mKCktKHYtPXYlMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbixpPXRoaXMudXRjT2Zmc2V0KCksYT10aGlzLnRvRGF0ZSgpLHU9YS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIse3RpbWVab25lOnR9KSxmPU1hdGgucm91bmQoKGEtbmV3IERhdGUodSkpLzFlMy82MCkscz0xNSotTWF0aC5yb3VuZChhLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLWY7aWYoIU51bWJlcihzKSluPXRoaXMudXRjT2Zmc2V0KDAsZSk7ZWxzZSBpZihuPW8odSx7bG9jYWxlOnRoaXMuJEx9KS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KHMsITApLGUpe3ZhciBtPW4udXRjT2Zmc2V0KCk7bj1uLmFkZChpLW0sXCJtaW51dGVcIil9cmV0dXJuIG4uJHguJHRpbWV6b25lPXQsbn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikse2xvY2FsZTp0aGlzLiRMfSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwgIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGkpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3V0Yz1pKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaW51dGVcIixpPS9bKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9nLGU9LyhbKy1dfFxcZFxcZCkvZztyZXR1cm4gZnVuY3Rpb24ocyxmLG4pe3ZhciB1PWYucHJvdG90eXBlO24udXRjPWZ1bmN0aW9uKHQpe3ZhciBpPXtkYXRlOnQsdXRjOiEwLGFyZ3M6YXJndW1lbnRzfTtyZXR1cm4gbmV3IGYoaSl9LHUudXRjPWZ1bmN0aW9uKGkpe3ZhciBlPW4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiEwfSk7cmV0dXJuIGk/ZS5hZGQodGhpcy51dGNPZmZzZXQoKSx0KTplfSx1LmxvY2FsPWZ1bmN0aW9uKCl7cmV0dXJuIG4odGhpcy50b0RhdGUoKSx7bG9jYWxlOnRoaXMuJEwsdXRjOiExfSl9O3ZhciByPXUucGFyc2U7dS5wYXJzZT1mdW5jdGlvbih0KXt0LnV0YyYmKHRoaXMuJHU9ITApLHRoaXMuJHV0aWxzKCkudSh0LiRvZmZzZXQpfHwodGhpcy4kb2Zmc2V0PXQuJG9mZnNldCksci5jYWxsKHRoaXMsdCl9O3ZhciBvPXUuaW5pdDt1LmluaXQ9ZnVuY3Rpb24oKXtpZih0aGlzLiR1KXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRVVENGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRVVENNb250aCgpLHRoaXMuJEQ9dC5nZXRVVENEYXRlKCksdGhpcy4kVz10LmdldFVUQ0RheSgpLHRoaXMuJEg9dC5nZXRVVENIb3VycygpLHRoaXMuJG09dC5nZXRVVENNaW51dGVzKCksdGhpcy4kcz10LmdldFVUQ1NlY29uZHMoKSx0aGlzLiRtcz10LmdldFVUQ01pbGxpc2Vjb25kcygpfWVsc2Ugby5jYWxsKHRoaXMpfTt2YXIgYT11LnV0Y09mZnNldDt1LnV0Y09mZnNldD1mdW5jdGlvbihzLGYpe3ZhciBuPXRoaXMuJHV0aWxzKCkudTtpZihuKHMpKXJldHVybiB0aGlzLiR1PzA6bih0aGlzLiRvZmZzZXQpP2EuY2FsbCh0aGlzKTp0aGlzLiRvZmZzZXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHMmJihzPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PVwiXCIpO3ZhciBzPXQubWF0Y2goaSk7aWYoIXMpcmV0dXJuIG51bGw7dmFyIGY9KFwiXCIrc1swXSkubWF0Y2goZSl8fFtcIi1cIiwwLDBdLG49ZlswXSx1PTYwKitmWzFdKyArZlsyXTtyZXR1cm4gMD09PXU/MDpcIitcIj09PW4/dTotdX0ocyksbnVsbD09PXMpKXJldHVybiB0aGlzO3ZhciB1PU1hdGguYWJzKHMpPD0xNj82MCpzOnM7aWYoMD09PXUpcmV0dXJuIHRoaXMudXRjKGYpO3ZhciByPXRoaXMuY2xvbmUoKTtpZihmKXJldHVybiByLiRvZmZzZXQ9dSxyLiR1PSExLHI7dmFyIG89dGhpcy4kdT90aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk6LTEqdGhpcy51dGNPZmZzZXQoKTtyZXR1cm4ocj10aGlzLmxvY2FsKCkuYWRkKHUrbyx0KSkuJG9mZnNldD11LHIuJHguJGxvY2FsT2Zmc2V0PW8scn07dmFyIGg9dS5mb3JtYXQ7dS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGk9dHx8KHRoaXMuJHU/XCJZWVlZLU1NLUREVEhIOm1tOnNzW1pdXCI6XCJcIik7cmV0dXJuIGguY2FsbCh0aGlzLGkpfSx1LnZhbHVlT2Y9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiR1dGlscygpLnUodGhpcy4kb2Zmc2V0KT8wOnRoaXMuJG9mZnNldCsodGhpcy4keC4kbG9jYWxPZmZzZXR8fHRoaXMuJGQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7cmV0dXJuIHRoaXMuJGQudmFsdWVPZigpLTZlNCp0fSx1LmlzVVRDPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLiR1fSx1LnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9JU09TdHJpbmcoKX0sdS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvVVRDU3RyaW5nKCl9O3ZhciBsPXUudG9EYXRlO3UudG9EYXRlPWZ1bmN0aW9uKHQpe3JldHVyblwic1wiPT09dCYmdGhpcy4kb2Zmc2V0P24odGhpcy5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzOlNTU1wiKSkudG9EYXRlKCk6bC5jYWxsKHRoaXMpfTt2YXIgYz11LmRpZmY7dS5kaWZmPWZ1bmN0aW9uKHQsaSxlKXtpZih0JiZ0aGlzLiR1PT09dC4kdSlyZXR1cm4gYy5jYWxsKHRoaXMsdCxpLGUpO3ZhciBzPXRoaXMubG9jYWwoKSxmPW4odCkubG9jYWwoKTtyZXR1cm4gYy5jYWxsKHMsZixpLGUpfX19KSk7IiwgIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuZGF5anNfcGx1Z2luX3dlZWtPZlllYXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwid2Vla1wiLHQ9XCJ5ZWFyXCI7cmV0dXJuIGZ1bmN0aW9uKGksbixyKXt2YXIgZj1uLnByb3RvdHlwZTtmLndlZWs9ZnVuY3Rpb24oaSl7aWYodm9pZCAwPT09aSYmKGk9bnVsbCksbnVsbCE9PWkpcmV0dXJuIHRoaXMuYWRkKDcqKGktdGhpcy53ZWVrKCkpLFwiZGF5XCIpO3ZhciBuPXRoaXMuJGxvY2FsZSgpLnllYXJTdGFydHx8MTtpZigxMT09PXRoaXMubW9udGgoKSYmdGhpcy5kYXRlKCk+MjUpe3ZhciBmPXIodGhpcykuc3RhcnRPZih0KS5hZGQoMSx0KS5kYXRlKG4pLHM9cih0aGlzKS5lbmRPZihlKTtpZihmLmlzQmVmb3JlKHMpKXJldHVybiAxfXZhciBhPXIodGhpcykuc3RhcnRPZih0KS5kYXRlKG4pLnN0YXJ0T2YoZSkuc3VidHJhY3QoMSxcIm1pbGxpc2Vjb25kXCIpLG89dGhpcy5kaWZmKGEsZSwhMCk7cmV0dXJuIG88MD9yKHRoaXMpLnN0YXJ0T2YoXCJ3ZWVrXCIpLndlZWsoKTpNYXRoLmNlaWwobyl9LGYud2Vla3M9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPW51bGwpLHRoaXMud2VlayhlKX19fSkpOyIsICJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblBhbmVsLCBDb2xvciwgTGlzdCB9IGZyb20gJ0ByYXljYXN0L2FwaSdcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJ2Nocm9uby1ub2RlJ1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xuaW1wb3J0IGFkdmFuY2VkRm9ybWF0UGx1Z2luIGZyb20gJ2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcydcbmltcG9ydCByZWxhdGl2ZVRpbWVQbHVnaW4gZnJvbSAnZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcydcbmltcG9ydCB0aW1lem9uZVBsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vdGltZXpvbmUuanMnXG5pbXBvcnQgdXRjUGx1Z2luIGZyb20gJ2RheWpzL3BsdWdpbi91dGMuanMnXG5pbXBvcnQgd2Vla09mWWVhclBsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vd2Vla09mWWVhci5qcydcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmRheWpzLmV4dGVuZChhZHZhbmNlZEZvcm1hdFBsdWdpbilcbmRheWpzLmV4dGVuZCh3ZWVrT2ZZZWFyUGx1Z2luKVxuZGF5anMuZXh0ZW5kKHV0Y1BsdWdpbilcbmRheWpzLmV4dGVuZCh0aW1lem9uZVBsdWdpbilcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWVQbHVnaW4pXG5cbmNvbnN0IGRlZmF1bHRUaW1lem9uZSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZVxuXG5mdW5jdGlvbiBwcm9jZXNzKGlucHV0OiBzdHJpbmcsIHRpbWV6b25lOiBzdHJpbmcpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlci5wYXJzZUludChpbnB1dCwgMTApXG4gICAgaW5wdXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgPiA0MTAyNDQ0ODAwID8gdGltZXN0YW1wIDogdGltZXN0YW1wICogMTAwMCkudG9TdHJpbmcoKVxuICB9XG5cbiAgY29uc3QgZGF0ZVBhcnNlZCA9IHBhcnNlRGF0ZShpbnB1dClcbiAgaWYgKCFkYXRlUGFyc2VkIHx8IGRhdGVQYXJzZWQudG9TdHJpbmcoKSA9PT0gJ0ludmFsaWQgRGF0ZScpXG4gICAgcmV0dXJuIFtdXG5cbiAgY29uc3QgZGF0ZSA9IGRheWpzKGRhdGVQYXJzZWQpLnR6KHRpbWV6b25lKVxuICBjb25zdCBkYXRlRnJvbSA9IGRhdGUuZnJvbU5vdygpXG5cbiAgcmV0dXJuIFtcbiAgICB7IGxhYmVsOiAnVW5peCAocyknLCB2YWx1ZTogZGF0ZS51bml4KCkgfSxcbiAgICB7IGxhYmVsOiAnVW5peCAobXMpJywgdmFsdWU6IGRhdGUudmFsdWVPZigpIH0sXG4gICAgeyBsYWJlbDogJ0h1bWFuIFJlYWRhYmxlJywgdmFsdWU6IGRhdGUuZm9ybWF0KCdNTU1NIERvLCBZWVlZIFthdF0gaGg6bW06c3MgQSAoenp6KScpIH0sXG4gICAgeyBsYWJlbDogJ0RhdGVUaW1lJywgdmFsdWU6IGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykgfSxcbiAgICB7IGxhYmVsOiAnU3RyaW5nJywgdmFsdWU6IGRhdGUudG9TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6ICdJU08gODYwMScsIHZhbHVlOiBkYXRlLnRvSVNPU3RyaW5nKCkgfSxcbiAgICB7IGxhYmVsOiAnV2VlayBvZiBZZWFyJywgdmFsdWU6IGRhdGUuZm9ybWF0KCd3byBkZGRkIFtvZl0gWVlZWScpIH0sXG4gICAgeyBsYWJlbDogJ0luIC8gQWdvJywgdmFsdWU6IGRhdGVGcm9tLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0ZUZyb20uc2xpY2UoMSkgfSxcbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtYXQoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJ25vdycpXG4gIGNvbnN0IFt0aW1lem9uZSwgc2V0VGltZXpvbmVdID0gdXNlU3RhdGUoZGVmYXVsdFRpbWV6b25lKVxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB9W10+KFtdKVxuXG4gIGNvbnN0IG9uVGltZXpvbmVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFRpbWV6b25lKHZhbHVlKVxuICAgIHNldEl0ZW1zKHByb2Nlc3MoaW5wdXQsIHZhbHVlKSlcbiAgfVxuXG4gIGNvbnN0IG9uU2VhcmNoVGV4dENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0SW5wdXQodmFsdWUpXG4gICAgc2V0SXRlbXMocHJvY2Vzcyh2YWx1ZSwgdGltZXpvbmUpKVxuICB9XG5cbiAgY29uc3QgdGltZXpvbmVzID0gdXNlTWVtbygoKSA9PiBJbnRsLnN1cHBvcnRlZFZhbHVlc09mKCd0aW1lWm9uZScpLCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBzZWFyY2hCYXJQbGFjZWhvbGRlcj1cIkRhdGVcIlxuICAgICAgZmlsdGVyaW5nPXtmYWxzZX1cbiAgICAgIHNlYXJjaFRleHQ9e2lucHV0fVxuICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXtvblNlYXJjaFRleHRDaGFuZ2V9XG4gICAgICBzZWFyY2hCYXJBY2Nlc3Nvcnk9eyhcbiAgICAgICAgPExpc3QuRHJvcGRvd24gdG9vbHRpcD1cIlRpbWV6b25lXCIgb25DaGFuZ2U9e29uVGltZXpvbmVDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17dGltZXpvbmV9PlxuICAgICAgICAgIHt0aW1lem9uZXMubWFwKHpvbmUgPT4gKFxuICAgICAgICAgICAgPExpc3QuRHJvcGRvd24uSXRlbSBrZXk9e3pvbmV9IHZhbHVlPXt6b25lfSB0aXRsZT17em9uZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0LkRyb3Bkb3duPlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgIHRpdGxlPXtTdHJpbmcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogeyB2YWx1ZTogaXRlbS5sYWJlbCwgY29sb3I6IENvbG9yLlNlY29uZGFyeVRleHQgfSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXsoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e1N0cmluZyhpdGVtLnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbi5QYXN0ZSBjb250ZW50PXtTdHJpbmcoaXRlbS52YWx1ZSl9IC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Q+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBEZWJ1Z0NvbnN1bWUsIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIHBhcnNlIG9ubHkgZm9yd2FyZCBkYXRlcyAodGhlIHJlc3VsdHMgc2hvdWxkIGJlIGFmdGVyIHRoZSByZWZlcmVuY2UgZGF0ZSkuXG4gICAgICogVGhpcyBlZmZlY3RzIGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZylcbiAgICAgKi9cbiAgICBmb3J3YXJkRGF0ZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIHRpbWV6b25lIGtleXdvcmRzIGZvciB0aGUgcGFyc2VycyB0byByZWNvZ25pemUuXG4gICAgICogQW55IHZhbHVlIHByb3ZpZGVkIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgaGFuZGxpbmcgb2YgdGhhdCB2YWx1ZS5cbiAgICAgKi9cbiAgICB0aW1lem9uZXM/OiBUaW1lem9uZUFiYnJNYXA7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBkZWJ1ZyBldmVudCBoYW5kbGVyLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRlYnVnPzogRGVidWdIYW5kbGVyIHwgRGVidWdDb25zdW1lO1xufVxuXG4vKipcbiAqIFNvbWUgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBhcmUgYW1iaWd1b3VzIGluIHRoYXQgdGhleSByZWZlciB0byBkaWZmZXJlbnQgb2Zmc2V0c1xuICogZGVwZW5kaW5nIG9uIHRoZSB0aW1lIG9mIHllYXIgXHUyMDE0IGRheWxpZ2h0IHNhdmluZ3MgdGltZSAoRFNUKSwgb3Igbm9uLURTVC4gVGhpcyBpbnRlcmZhY2VcbiAqIGFsbG93cyBkZWZpbmluZyBzdWNoIHRpbWV6b25lc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtYmlndW91c1RpbWV6b25lTWFwIHtcbiAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogbnVtYmVyO1xuICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdGFydCBkYXRlIG9mIERTVCBmb3IgdGhlIGdpdmVuIHllYXIuXG4gICAgICogdGltZXpvbmUudHMgY29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIGNvbW1vbiBzdWNoIHJ1bGVzLlxuICAgICAqL1xuICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW5kIGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xufVxuXG4vKipcbiAqIEEgbWFwIGRlc2NyaWJpbmcgaG93IHRpbWV6b25lIGFiYnJldmlhdGlvbnMgc2hvdWxkIG1hcCB0byB0aW1lIG9mZnNldHMuXG4gKiBTdXBwb3J0cyBib3RoIHVuYW1iaWdvdXMgbWFwcGluZ3MgYWJicmV2aWF0aW9uID0+IG9mZnNldCxcbiAqIGFuZCBhbWJpZ3VvdXMgbWFwcGluZ3MsIHdoZXJlIHRoZSBvZmZzZXQgd2lsbCBkZXBlbmQgb24gd2hldGhlciB0aGVcbiAqIHRpbWUgaW4gcXVlc3Rpb24gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3MgdGltZSBvciBub3QuXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWV6b25lQWJick1hcCA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgQW1iaWd1b3VzVGltZXpvbmVNYXAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzaW5nUmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgZGF0ZS4gVGhlIGluc3RhbnQgKEphdmFTY3JpcHQgRGF0ZSBvYmplY3QpIHdoZW4gdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBUaGlzIGVmZmVjdCBkYXRlL3RpbWUgaW1wbGljYXRpb24gKGUuZy4gd2Vla2RheSBvciB0aW1lIG1lbnRpb25pbmcpLlxuICAgICAqIChkZWZhdWx0ID0gbm93KVxuICAgICAqL1xuICAgIGluc3RhbnQ/OiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRpbWV6b25lLiBUaGUgdGltZXpvbmUgd2hlcmUgdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBEYXRlL3RpbWUgaW1wbGljYXRpb24gd2lsbCBhY2NvdW50IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaW5wdXQgdGltZXpvbmUgYW5kIHRoZSBjdXJyZW50IHN5c3RlbSB0aW1lem9uZS5cbiAgICAgKiAoZGVmYXVsdCA9IGN1cnJlbnQgdGltZXpvbmUpXG4gICAgICovXG4gICAgdGltZXpvbmU/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbi8qKlxuICogUGFyc2VkIHJlc3VsdCBvciBmaW5hbCBvdXRwdXQuXG4gKiBFYWNoIHJlc3VsdCBvYmplY3QgcmVwcmVzZW50cyBhIGRhdGUvdGltZSAob3IgZGF0ZS90aW1lLXJhbmdlKSBtZW50aW9uaW5nIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRSZXN1bHQge1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG4gICAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBzdGFydDogUGFyc2VkQ29tcG9uZW50cztcbiAgICByZWFkb25seSBlbmQ/OiBQYXJzZWRDb21wb25lbnRzO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBgcmVzdWx0LnN0YXJ0YC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIGNvbWJpbmVkIG9mIHRoZSBgcmVzdWx0LnN0YXJ0YCBhbmQgYHJlc3VsdC5lbmRgLlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHBhcnNlZCBkYXRlL3RpbWUgY29tcG9uZW50cyAoZS5nLiBkYXksIGhvdXIsIG1pbnV0ZSwgLi4uLCBldGMpLlxuICpcbiAqIEVhY2ggcGFyc2VkIGNvbXBvbmVudCBoYXMgdGhyZWUgZGlmZmVyZW50IGxldmVscyBvZiBjZXJ0YWludHkuXG4gKiAtICpDZXJ0YWluKiAob3IgKktub3duKik6IFRoZSBjb21wb25lbnQgaXMgZGlyZWN0bHkgbWVudGlvbmVkIGFuZCBwYXJzZWQuXG4gKiAtICpJbXBsaWVkKjogVGhlIGNvbXBvbmVudCBpcyBub3QgZGlyZWN0bHkgbWVudGlvbmVkLCBidXQgaW1wbGllZCBieSBvdGhlciBwYXJzZWQgaW5mb3JtYXRpb24uXG4gKiAtICpVbmtub3duKjogQ29tcGxldGVseSBubyBtZW50aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBjZXJ0YWlubHkgaWYgdGhlIGNvbXBvbmVudCBpcyAqQ2VydGFpbiogKG9yICpLbm93biopXG4gICAgICovXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29tcG9uZW50IHZhbHVlIGZvciBlaXRoZXIgKkNlcnRhaW4qIG9yICpJbXBsaWVkKiB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgZGF0ZSgpOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBkZWJ1Z2dpbmcgdGFncyBvZiB0aGUgcGFyc2VkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+O1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnQgPVxuICAgIHwgXCJ5ZWFyXCJcbiAgICB8IFwibW9udGhcIlxuICAgIHwgXCJkYXlcIlxuICAgIHwgXCJ3ZWVrZGF5XCJcbiAgICB8IFwiaG91clwiXG4gICAgfCBcIm1pbnV0ZVwiXG4gICAgfCBcInNlY29uZFwiXG4gICAgfCBcIm1pbGxpc2Vjb25kXCJcbiAgICB8IFwibWVyaWRpZW1cIlxuICAgIHwgXCJ0aW1lem9uZU9mZnNldFwiO1xuXG5leHBvcnQgdHlwZSBUaW1ldW5pdCA9IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJ3ZWVrXCIgfCBcImRheVwiIHwgXCJob3VyXCIgfCBcIm1pbnV0ZVwiIHwgXCJzZWNvbmRcIiB8IFwibWlsbGlzZWNvbmRcIiB8IFwicXVhcnRlclwiO1xuXG5leHBvcnQgZW51bSBNZXJpZGllbSB7XG4gICAgQU0gPSAwLFxuICAgIFBNID0gMSxcbn1cblxuZXhwb3J0IGVudW0gV2Vla2RheSB7XG4gICAgU1VOREFZID0gMCxcbiAgICBNT05EQVkgPSAxLFxuICAgIFRVRVNEQVkgPSAyLFxuICAgIFdFRE5FU0RBWSA9IDMsXG4gICAgVEhVUlNEQVkgPSA0LFxuICAgIEZSSURBWSA9IDUsXG4gICAgU0FUVVJEQVkgPSA2LFxufVxuXG5leHBvcnQgZW51bSBNb250aCB7XG4gICAgSkFOVUFSWSA9IDEsXG4gICAgRkVCUlVBUlkgPSAyLFxuICAgIE1BUkNIID0gMyxcbiAgICBBUFJJTCA9IDQsXG4gICAgTUFZID0gNSxcbiAgICBKVU5FID0gNixcbiAgICBKVUxZID0gNyxcbiAgICBBVUdVU1QgPSA4LFxuICAgIFNFUFRFTUJFUiA9IDksXG4gICAgT0NUT0JFUiA9IDEwLFxuICAgIE5PVkVNQkVSID0gMTEsXG4gICAgREVDRU1CRVIgPSAxMixcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vKipcbiAqIEFzc2lnbiAoZm9yY2UgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgZGF5IGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldDogRGF0ZSkge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0LmdldERhdGUoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1vbnRoXCIsIHRhcmdldC5nZXRNb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInllYXJcIiwgdGFyZ2V0LmdldEZ1bGxZZWFyKCkpO1xufVxuXG4vKipcbiAqIEFzc2lnbiAoZm9yY2UgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgdGltZSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0YXJnZXQuZ2V0SG91cnMoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcIm1pbnV0ZVwiLCB0YXJnZXQuZ2V0TWludXRlcygpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRhcmdldC5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0YXJnZXQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCB0YXJnZXQuZ2V0SG91cnMoKSA8IDEyID8gTWVyaWRpZW0uQU0gOiBNZXJpZGllbS5QTSk7XG59XG5cbi8qKlxuICogSW1wbHkgKHdlYWtseSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSBkYXkgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJkYXlcIiwgdGFyZ2V0LmdldERhdGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibW9udGhcIiwgdGFyZ2V0LmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldC5nZXRGdWxsWWVhcigpKTtcbn1cblxuLyoqXG4gKiBJbXBseSAod2Vha2x5IHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIHRpbWUgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRhcmdldC5nZXRIb3VycygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGFyZ2V0LmdldE1pbnV0ZXMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRhcmdldC5nZXRTZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRhcmdldC5nZXRNaWxsaXNlY29uZHMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgdGFyZ2V0LmdldEhvdXJzKCkgPCAxMiA/IE1lcmlkaWVtLkFNIDogTWVyaWRpZW0uUE0pO1xufVxuIiwgImltcG9ydCB7IFRpbWV6b25lQWJick1hcCwgV2Vla2RheSwgTW9udGggfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgVElNRVpPTkVfQUJCUl9NQVA6IFRpbWV6b25lQWJick1hcCA9IHtcbiAgICBBQ0RUOiA2MzAsXG4gICAgQUNTVDogNTcwLFxuICAgIEFEVDogLTE4MCxcbiAgICBBRURUOiA2NjAsXG4gICAgQUVTVDogNjAwLFxuICAgIEFGVDogMjcwLFxuICAgIEFLRFQ6IC00ODAsXG4gICAgQUtTVDogLTU0MCxcbiAgICBBTE1UOiAzNjAsXG4gICAgQU1TVDogLTE4MCxcbiAgICBBTVQ6IC0yNDAsXG4gICAgQU5BU1Q6IDcyMCxcbiAgICBBTkFUOiA3MjAsXG4gICAgQVFUVDogMzAwLFxuICAgIEFSVDogLTE4MCxcbiAgICBBU1Q6IC0yNDAsXG4gICAgQVdEVDogNTQwLFxuICAgIEFXU1Q6IDQ4MCxcbiAgICBBWk9TVDogMCxcbiAgICBBWk9UOiAtNjAsXG4gICAgQVpTVDogMzAwLFxuICAgIEFaVDogMjQwLFxuICAgIEJOVDogNDgwLFxuICAgIEJPVDogLTI0MCxcbiAgICBCUlNUOiAtMTIwLFxuICAgIEJSVDogLTE4MCxcbiAgICBCU1Q6IDYwLFxuICAgIEJUVDogMzYwLFxuICAgIENBU1Q6IDQ4MCxcbiAgICBDQVQ6IDEyMCxcbiAgICBDQ1Q6IDM5MCxcbiAgICBDRFQ6IC0zMDAsXG4gICAgQ0VTVDogMTIwLFxuICAgIC8vIE5vdGU6IE1hbnkgc291cmNlcyBkZWZpbmUgQ0VUIGFzIGEgY29uc3RhbnQgVVRDKzEuIEluIGNvbW1vbiB1c2FnZSwgaG93ZXZlcixcbiAgICAvLyBDRVQgdXN1YWxseSByZWZlcnMgdG8gdGhlIHRpbWUgb2JzZXJ2ZWQgaW4gbW9zdCBvZiBFdXJvcGUsIGJlIGl0IHN0YW5kYXJkIHRpbWUgb3IgZGF5bGlnaHQgc2F2aW5nIHRpbWUuXG4gICAgQ0VUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAyICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5PQ1RPQkVSLCBXZWVrZGF5LlNVTkRBWSwgMyksXG4gICAgfSxcbiAgICBDSEFEVDogODI1LFxuICAgIENIQVNUOiA3NjUsXG4gICAgQ0tUOiAtNjAwLFxuICAgIENMU1Q6IC0xODAsXG4gICAgQ0xUOiAtMjQwLFxuICAgIENPVDogLTMwMCxcbiAgICBDU1Q6IC0zNjAsXG4gICAgQ1Q6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC01ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNiAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgQ1ZUOiAtNjAsXG4gICAgQ1hUOiA0MjAsXG4gICAgQ2hTVDogNjAwLFxuICAgIERBVlQ6IDQyMCxcbiAgICBFQVNTVDogLTMwMCxcbiAgICBFQVNUOiAtMzYwLFxuICAgIEVBVDogMTgwLFxuICAgIEVDVDogLTMwMCxcbiAgICBFRFQ6IC0yNDAsXG4gICAgRUVTVDogMTgwLFxuICAgIEVFVDogMTIwLFxuICAgIEVHU1Q6IDAsXG4gICAgRUdUOiAtNjAsXG4gICAgRVNUOiAtMzAwLFxuICAgIEVUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNCAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTUgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIEZKU1Q6IDc4MCxcbiAgICBGSlQ6IDcyMCxcbiAgICBGS1NUOiAtMTgwLFxuICAgIEZLVDogLTI0MCxcbiAgICBGTlQ6IC0xMjAsXG4gICAgR0FMVDogLTM2MCxcbiAgICBHQU1UOiAtNTQwLFxuICAgIEdFVDogMjQwLFxuICAgIEdGVDogLTE4MCxcbiAgICBHSUxUOiA3MjAsXG4gICAgR01UOiAwLFxuICAgIEdTVDogMjQwLFxuICAgIEdZVDogLTI0MCxcbiAgICBIQUE6IC0xODAsXG4gICAgSEFDOiAtMzAwLFxuICAgIEhBRFQ6IC01NDAsXG4gICAgSEFFOiAtMjQwLFxuICAgIEhBUDogLTQyMCxcbiAgICBIQVI6IC0zNjAsXG4gICAgSEFTVDogLTYwMCxcbiAgICBIQVQ6IC05MCxcbiAgICBIQVk6IC00ODAsXG4gICAgSEtUOiA0ODAsXG4gICAgSExWOiAtMjEwLFxuICAgIEhOQTogLTI0MCxcbiAgICBITkM6IC0zNjAsXG4gICAgSE5FOiAtMzAwLFxuICAgIEhOUDogLTQ4MCxcbiAgICBITlI6IC00MjAsXG4gICAgSE5UOiAtMTUwLFxuICAgIEhOWTogLTU0MCxcbiAgICBIT1ZUOiA0MjAsXG4gICAgSUNUOiA0MjAsXG4gICAgSURUOiAxODAsXG4gICAgSU9UOiAzNjAsXG4gICAgSVJEVDogMjcwLFxuICAgIElSS1NUOiA1NDAsXG4gICAgSVJLVDogNTQwLFxuICAgIElSU1Q6IDIxMCxcbiAgICBJU1Q6IDMzMCxcbiAgICBKU1Q6IDU0MCxcbiAgICBLR1Q6IDM2MCxcbiAgICBLUkFTVDogNDgwLFxuICAgIEtSQVQ6IDQ4MCxcbiAgICBLU1Q6IDU0MCxcbiAgICBLVVlUOiAyNDAsXG4gICAgTEhEVDogNjYwLFxuICAgIExIU1Q6IDYzMCxcbiAgICBMSU5UOiA4NDAsXG4gICAgTUFHU1Q6IDcyMCxcbiAgICBNQUdUOiA3MjAsXG4gICAgTUFSVDogLTUxMCxcbiAgICBNQVdUOiAzMDAsXG4gICAgTURUOiAtMzYwLFxuICAgIE1FU1o6IDEyMCxcbiAgICBNRVo6IDYwLFxuICAgIE1IVDogNzIwLFxuICAgIE1NVDogMzkwLFxuICAgIE1TRDogMjQwLFxuICAgIE1TSzogMTgwLFxuICAgIE1TVDogLTQyMCxcbiAgICBNVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTYgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC03ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBNVVQ6IDI0MCxcbiAgICBNVlQ6IDMwMCxcbiAgICBNWVQ6IDQ4MCxcbiAgICBOQ1Q6IDY2MCxcbiAgICBORFQ6IC05MCxcbiAgICBORlQ6IDY5MCxcbiAgICBOT1ZTVDogNDIwLFxuICAgIE5PVlQ6IDM2MCxcbiAgICBOUFQ6IDM0NSxcbiAgICBOU1Q6IC0xNTAsXG4gICAgTlVUOiAtNjYwLFxuICAgIE5aRFQ6IDc4MCxcbiAgICBOWlNUOiA3MjAsXG4gICAgT01TU1Q6IDQyMCxcbiAgICBPTVNUOiA0MjAsXG4gICAgUERUOiAtNDIwLFxuICAgIFBFVDogLTMwMCxcbiAgICBQRVRTVDogNzIwLFxuICAgIFBFVFQ6IDcyMCxcbiAgICBQR1Q6IDYwMCxcbiAgICBQSE9UOiA3ODAsXG4gICAgUEhUOiA0ODAsXG4gICAgUEtUOiAzMDAsXG4gICAgUE1EVDogLTEyMCxcbiAgICBQTVNUOiAtMTgwLFxuICAgIFBPTlQ6IDY2MCxcbiAgICBQU1Q6IC00ODAsXG4gICAgUFQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC03ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtOCAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgUFdUOiA1NDAsXG4gICAgUFlTVDogLTE4MCxcbiAgICBQWVQ6IC0yNDAsXG4gICAgUkVUOiAyNDAsXG4gICAgU0FNVDogMjQwLFxuICAgIFNBU1Q6IDEyMCxcbiAgICBTQlQ6IDY2MCxcbiAgICBTQ1Q6IDI0MCxcbiAgICBTR1Q6IDQ4MCxcbiAgICBTUlQ6IC0xODAsXG4gICAgU1NUOiAtNjYwLFxuICAgIFRBSFQ6IC02MDAsXG4gICAgVEZUOiAzMDAsXG4gICAgVEpUOiAzMDAsXG4gICAgVEtUOiA3ODAsXG4gICAgVExUOiA1NDAsXG4gICAgVE1UOiAzMDAsXG4gICAgVFZUOiA3MjAsXG4gICAgVUxBVDogNDgwLFxuICAgIFVUQzogMCxcbiAgICBVWVNUOiAtMTIwLFxuICAgIFVZVDogLTE4MCxcbiAgICBVWlQ6IDMwMCxcbiAgICBWRVQ6IC0yMTAsXG4gICAgVkxBU1Q6IDY2MCxcbiAgICBWTEFUOiA2NjAsXG4gICAgVlVUOiA2NjAsXG4gICAgV0FTVDogMTIwLFxuICAgIFdBVDogNjAsXG4gICAgV0VTVDogNjAsXG4gICAgV0VTWjogNjAsXG4gICAgV0VUOiAwLFxuICAgIFdFWjogMCxcbiAgICBXRlQ6IDcyMCxcbiAgICBXR1NUOiAtMTIwLFxuICAgIFdHVDogLTE4MCxcbiAgICBXSUI6IDQyMCxcbiAgICBXSVQ6IDU0MCxcbiAgICBXSVRBOiA0ODAsXG4gICAgV1NUOiA3ODAsXG4gICAgV1Q6IDAsXG4gICAgWUFLU1Q6IDYwMCxcbiAgICBZQUtUOiA2MDAsXG4gICAgWUFQVDogNjAwLFxuICAgIFlFS1NUOiAzNjAsXG4gICAgWUVLVDogMzYwLFxufTtcblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgd2hpY2ggaXMgdGhlIG50aCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBuIFRoZSBudGggb2NjdXJlbmNlIG9mIHRoZSBnaXZlbiB3ZWVrZGF5IG9uIHRoZSBtb250aCB0byByZXR1cm5cbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBudGggb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuXG4gKiAgICAgICAgIG1vbnRoIGFuZCB5ZWFyLCBhdCB0aGUgZ2l2ZW4gaG91ciBvZiBkYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IE1vbnRoLCB3ZWVrZGF5OiBXZWVrZGF5LCBuOiAxIHwgMiB8IDMgfCA0LCBob3VyID0gMCk6IERhdGUge1xuICAgIGxldCBkYXlPZk1vbnRoID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIGRheU9mTW9udGgrKztcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCk7XG4gICAgICAgIGlmIChkYXRlLmdldERheSgpID09PSB3ZWVrZGF5KSBpKys7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU9mTW9udGgsIGhvdXIpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZGF0ZSB3aGljaCBpcyB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW4gbW9udGggYW5kIHllYXIuXG4gKlxuICogQHBhcmFtIHllYXIgVGhlIHllYXIgZm9yIHdoaWNoIHRvIGZpbmQgdGhlIGRhdGVcbiAqIEBwYXJhbSBtb250aCBUaGUgbW9udGggaW4gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gd2Vla2RheSBUaGUgd2Vla2RheSBvbiB3aGljaCB0aGUgZGF0ZSBvY2N1cnNcbiAqIEBwYXJhbSBob3VyIFRoZSBob3VyIG9mIGRheSB3aGljaCBzaG91bGQgYmUgc2V0IG9uIHRoZSByZXR1cm5lZCBkYXRlXG4gKiBAcmV0dXJuIFRoZSBkYXRlIHdoaWNoIGlzIHRoZSBsYXN0IG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlblxuICogICAgICAgICBtb250aCBhbmQgeWVhciwgYXQgdGhlIGdpdmVuIGhvdXIgb2YgZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogTW9udGgsIHdlZWtkYXk6IFdlZWtkYXksIGhvdXIgPSAwKTogRGF0ZSB7XG4gICAgLy8gUHJvY2VkdXJlOiBGaW5kIHRoZSBmaXJzdCB3ZWVrZGF5IG9mIHRoZSBuZXh0IG1vbnRoLCBjb21wYXJlIHdpdGggdGhlIGdpdmVuIHdlZWtkYXksXG4gICAgLy8gYW5kIHVzZSB0aGUgZGlmZmVyZW5jZSB0byBkZXRlcm1pbmUgaG93IG1hbnkgZGF5cyB0byBzdWJ0cmFjdCBmcm9tIHRoZSBmaXJzdCBvZiB0aGUgbmV4dCBtb250aC5cbiAgICBjb25zdCBvbmVJbmRleGVkV2Vla2RheSA9IHdlZWtkYXkgPT09IDAgPyA3IDogd2Vla2RheTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxICsgMSwgMSwgMTIpO1xuICAgIGNvbnN0IGZpcnN0V2Vla2RheU5leHRNb250aCA9IGRhdGUuZ2V0RGF5KCkgPT09IDAgPyA3IDogZGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZGF5RGlmZjtcbiAgICBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoID09PSBvbmVJbmRleGVkV2Vla2RheSkgZGF5RGlmZiA9IDc7XG4gICAgZWxzZSBpZiAoZmlyc3RXZWVrZGF5TmV4dE1vbnRoIDwgb25lSW5kZXhlZFdlZWtkYXkpIGRheURpZmYgPSA3ICsgZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZWxzZSBkYXlEaWZmID0gZmlyc3RXZWVrZGF5TmV4dE1vbnRoIC0gb25lSW5kZXhlZFdlZWtkYXk7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGF5RGlmZik7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZS5nZXREYXRlKCksIGhvdXIpO1xufVxuXG4vKipcbiAqIEZpbmRzIGFuZCByZXR1cm5zIHRpbWV6b25lIG9mZnNldC4gSWYgdGltZXpvbmVJbnB1dCBpcyBudW1lcmljLCBpdCBpcyByZXR1cm5lZC4gT3RoZXJ3aXNlLCBsb29rIGZvciB0aW1lem9uZSBvZmZzZXRzXG4gKiBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOiB0aW1lem9uZU92ZXJyaWRlcyAtPiB7QGxpbmsgVElNRVpPTkVfQUJCUl9NQVB9LlxuICpcbiAqIEBwYXJhbSB0aW1lem9uZUlucHV0IFVwcGVyY2FzZSB0aW1lem9uZSBhYmJyZXZpYXRpb24gb3IgbnVtZXJpYyBvZmZzZXQgaW4gbWludXRlc1xuICogQHBhcmFtIGRhdGUgVGhlIGRhdGUgdG8gdXNlIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIHJldHVybiBEU1Qgb2Zmc2V0cyBmb3IgYW1iaWd1b3VzIHRpbWV6b25lc1xuICogQHBhcmFtIHRpbWV6b25lT3ZlcnJpZGVzIE92ZXJyaWRlcyBmb3IgdGltZXpvbmVzXG4gKiBAcmV0dXJuIHRpbWV6b25lIG9mZnNldCBpbiBtaW51dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWV6b25lT2Zmc2V0KFxuICAgIHRpbWV6b25lSW5wdXQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gICAgZGF0ZT86IERhdGUsXG4gICAgdGltZXpvbmVPdmVycmlkZXM6IFRpbWV6b25lQWJick1hcCA9IHt9XG4pOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGltZXpvbmVJbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGltZXpvbmVJbnB1dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gdGltZXpvbmVJbnB1dDtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaGVkVGltZXpvbmUgPSB0aW1lem9uZU92ZXJyaWRlc1t0aW1lem9uZUlucHV0XSA/PyBUSU1FWk9ORV9BQkJSX01BUFt0aW1lem9uZUlucHV0XTtcbiAgICBpZiAobWF0Y2hlZFRpbWV6b25lID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB3ZSBoYXZlIG1hdGNoZWQgYW4gdW5hbWJpZ3VvdXMgdGltZXpvbmVcbiAgICBpZiAodHlwZW9mIG1hdGNoZWRUaW1lem9uZSA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmU7XG4gICAgfVxuXG4gICAgLy8gVGhlIG1hdGNoZWQgdGltZXpvbmUgaXMgYW4gYW1iaWd1b3VzIHRpbWV6b25lLCB3aGVyZSB0aGUgb2Zmc2V0IGRlcGVuZHMgb24gd2hldGhlciB0aGUgY29udGV4dCAocmVmRGF0ZSlcbiAgICAvLyBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5ncyBvciBub3QuXG5cbiAgICAvLyBXaXRob3V0IHJlZkRhdGUgYXMgY29udGV4dCwgdGhlcmUncyBubyB3YXkgdG8ga25vdyBpZiBEU1Qgb3Igbm9uLURTVCBvZmZzZXQgc2hvdWxkIGJlIHVzZWQuIFJldHVybiBudWxsIGluc3RlYWQuXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gRFNUIG9mZnNldCBpZiB0aGUgcmVmRGF0ZSBpcyBkdXJpbmcgZGF5bGlnaHQgc2F2aW5nc1xuICAgIGlmIChkYXRlID4gbWF0Y2hlZFRpbWV6b25lLmRzdFN0YXJ0KGRhdGUuZ2V0RnVsbFllYXIoKSkgJiYgIShkYXRlID4gbWF0Y2hlZFRpbWV6b25lLmRzdEVuZChkYXRlLmdldEZ1bGxZZWFyKCkpKSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0O1xuICAgIH1cblxuICAgIC8vIHJlZkRhdGUgaXMgbm90IGR1cmluZyBEU1QgPT4gcmV0dXJuIG5vbi1EU1Qgb2Zmc2V0XG4gICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZS50aW1lem9uZU9mZnNldE5vbkRzdDtcbn1cbiIsICJpbXBvcnQgeyBUaW1ldW5pdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBUaW1ldW5pdFNob3J0ZW4gPSBcInlcIiB8IFwibW9cIiB8IFwiTVwiIHwgXCJ3XCIgfCBcImRcIiB8IFwiaFwiIHwgXCJtXCIgfCBcInNcIiB8IFwibXNcIjtcbmV4cG9ydCB0eXBlIFRpbWV1bml0U3BlY2lhbCA9IFwicXVhcnRlclwiO1xuXG4vKipcbiAqIEEgdHlwZSByZXByZXNlbnQgYSBkaXJlY3RlZCB0aW1lIGR1cmF0aW9uIGFzIGEgc2V0IG9mIHZhbHVlcyBieSB0aW1ldW5pdHMuXG4gKiBUaGUgcG9zaXRpdmUgdmFsdWVzIG1lYW4gdGhlIHRpbWUgZHVyYXRpb24gaW50byB0aGUgZnV0dXJlLlxuICovXG5leHBvcnQgdHlwZSBEdXJhdGlvbiA9IHsgW2MgaW4gVGltZXVuaXQgfCBUaW1ldW5pdFNwZWNpYWwgfCBUaW1ldW5pdFNob3J0ZW5dPzogbnVtYmVyIH07XG5cbi8qKlxuICogQW4gZXhwbGljaXQgZW1wdHkgZHVyYXRpb24gKG5vdCBqdXN0IGVtcHR5IGR1cmF0aW9uIG9iamVjdCkuXG4gKiBUaGlzIGlzIGRlZmluZWQgYXMgemVybyBkYXkgYW5kIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEVtcHR5RHVyYXRpb24gPSB7XG4gICAgZGF5OiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMCxcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGF0ZSBhZnRlciBhZGRpbmcgdGhlIGdpdmVuIGBkdXJhdGlvbmAgdG8gYHJlZmAuXG4gKiBAcGFyYW0gcmVmXG4gKiBAcGFyYW0gZHVyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZER1cmF0aW9uKHJlZjogRGF0ZSwgZHVyYXRpb246IER1cmF0aW9uKTogRGF0ZSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShyZWYpO1xuXG4gICAgLy8gUmVwbGFjZSBzaG9ydCB0aW1ldW5pdCBrZXlzIHdpdGggZnVsbCB0aW1ldW5pdCBrZXlzXG4gICAgaWYgKGR1cmF0aW9uW1wieVwiXSkge1xuICAgICAgICBkdXJhdGlvbltcInllYXJcIl0gPSBkdXJhdGlvbltcInlcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcInlcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1vXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibW9udGhcIl0gPSBkdXJhdGlvbltcIm1vXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJtb1wiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiTVwiXSkge1xuICAgICAgICBkdXJhdGlvbltcIm1vbnRoXCJdID0gZHVyYXRpb25bXCJNXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJNXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJ3XCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wid2Vla1wiXSA9IGR1cmF0aW9uW1wid1wiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wid1wiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiZFwiXSkge1xuICAgICAgICBkdXJhdGlvbltcImRheVwiXSA9IGR1cmF0aW9uW1wiZFwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wiZFwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wiaFwiXSkge1xuICAgICAgICBkdXJhdGlvbltcImhvdXJcIl0gPSBkdXJhdGlvbltcImhcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcImhcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1cIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJtaW51dGVcIl0gPSBkdXJhdGlvbltcIm1cIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIm1cIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcInNcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJzZWNvbmRcIl0gPSBkdXJhdGlvbltcInNcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcInNcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIm1zXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibWlsbGlzZWNvbmRcIl0gPSBkdXJhdGlvbltcIm1zXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJtc1wiXTtcbiAgICB9XG5cbiAgICBpZiAoXCJ5ZWFyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wieWVhclwiXSk7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wieWVhclwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5tb250aCA9IGR1cmF0aW9uPy5tb250aCA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24ubW9udGggKz0gcmVtYWluaW5nRnJhY3Rpb24gKiAxMjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJxdWFydGVyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wicXVhcnRlclwiXSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgZmxvb3IgKiAzKTtcbiAgICB9XG4gICAgaWYgKFwibW9udGhcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJtb250aFwiXSk7XG4gICAgICAgIGRhdGUuc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wibW9udGhcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ud2VlayA9IGR1cmF0aW9uPy53ZWVrID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi53ZWVrICs9IHJlbWFpbmluZ0ZyYWN0aW9uICogNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJ3ZWVrXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wid2Vla1wiXSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGZsb29yICogNyk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJ3ZWVrXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLmRheSA9IGR1cmF0aW9uPy5kYXkgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLmRheSArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogNyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwiZGF5XCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wiZGF5XCJdKTtcbiAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wiZGF5XCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLmhvdXIgPSBkdXJhdGlvbj8uaG91ciA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24uaG91ciArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogMjQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImhvdXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJob3VyXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJob3VyXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbnV0ZSA9IGR1cmF0aW9uPy5taW51dGUgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbnV0ZSArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogNjApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcIm1pbnV0ZVwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIm1pbnV0ZVwiXSk7XG4gICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcIm1pbnV0ZVwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5zZWNvbmQgPSBkdXJhdGlvbj8uc2Vjb25kID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5zZWNvbmQgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDYwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJzZWNvbmRcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJzZWNvbmRcIl0pO1xuICAgICAgICBkYXRlLnNldFNlY29uZHMoZGF0ZS5nZXRTZWNvbmRzKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJzZWNvbmRcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ubWlsbGlzZWNvbmQgPSBkdXJhdGlvbj8ubWlsbGlzZWNvbmQgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJtaWxsaXNlY29uZFwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIm1pbGxpc2Vjb25kXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRNaWxsaXNlY29uZHMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSArIGZsb29yKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSByZXZlcnNlZCBkdXJhdGlvbiAoZS5nLiBiYWNrIGludG8gdGhlIHBhc3QsIGluc3RlYWQgb2YgZnV0dXJlKVxuICogQHBhcmFtIGR1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlRHVyYXRpb24oZHVyYXRpb246IER1cmF0aW9uKTogRHVyYXRpb24ge1xuICAgIGNvbnN0IHJldmVyc2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgICAgICByZXZlcnNlZFtrZXldID0gLWR1cmF0aW9uW2tleV07XG4gICAgfVxuICAgIHJldHVybiByZXZlcnNlZCBhcyBEdXJhdGlvbjtcbn1cbiIsICJpbXBvcnQgeyBDb21wb25lbnQsIFBhcnNlZENvbXBvbmVudHMsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ1JlZmVyZW5jZSwgVGltZXpvbmVBYmJyTWFwIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGFzc2lnblNpbWlsYXJUaW1lLCBpbXBseVNpbWlsYXJUaW1lIH0gZnJvbSBcIi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi90aW1lem9uZVwiO1xuaW1wb3J0IHsgYWRkRHVyYXRpb24sIER1cmF0aW9uLCBFbXB0eUR1cmF0aW9uIH0gZnJvbSBcIi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB7XG4gICAgcmVhZG9ubHkgaW5zdGFudDogRGF0ZTtcbiAgICByZWFkb25seSB0aW1lem9uZU9mZnNldD86IG51bWJlciB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihpbnN0YW50PzogRGF0ZSwgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbnN0YW50ID0gaW5zdGFudCA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gdGltZXpvbmVPZmZzZXQgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbURhdGUoZGF0ZTogRGF0ZSk6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKGRhdGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tSW5wdXQoaW5wdXQ/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgdGltZXpvbmVPdmVycmlkZXM/OiBUaW1lem9uZUFiYnJNYXApIHtcbiAgICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmVyZW5jZVdpdGhUaW1lem9uZS5mcm9tRGF0ZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFudDogRGF0ZSA9IGlucHV0Py5pbnN0YW50ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldChpbnB1dD8udGltZXpvbmUsIGluc3RhbnQsIHRpbWV6b25lT3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUoaW5zdGFudCwgdGltZXpvbmVPZmZzZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBKUyBkYXRlIChzeXN0ZW0gdGltZXpvbmUpIHdpdGggdGhlIHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQgfSBlcXVhbCB0byB0aGUgcmVmZXJlbmNlLlxuICAgICAqIFRoZSBvdXRwdXQncyBpbnN0YW50IGlzIE5PVCB0aGUgcmVmZXJlbmNlJ3MgaW5zdGFudCB3aGVuIHRoZSByZWZlcmVuY2UncyBhbmQgc3lzdGVtJ3MgdGltZXpvbmUgYXJlIGRpZmZlcmVudC5cbiAgICAgKi9cbiAgICBnZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmluc3RhbnQpO1xuICAgICAgICBpZiAodGhpcy50aW1lem9uZU9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpIC0gdGhpcy5nZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUodGhpcy5pbnN0YW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG1pbnV0ZXMgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBKUyBkYXRlJ3MgdGltZXpvbmUgYW5kIHRoZSByZWZlcmVuY2UgdGltZXpvbmUuXG4gICAgICogQHBhcmFtIGRhdGVcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldFxuICAgICAqL1xuICAgIGdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlPzogRGF0ZSwgb3ZlcnJpZGVUaW1lem9uZU9mZnNldD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICghZGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8IDApIHtcbiAgICAgICAgICAgIC8vIEphdmFzY3JpcHQgZGF0ZSB0aW1lem9uZSBjYWxjdWxhdGlvbiBnb3QgZWZmZWN0IHdoZW4gdGhlIHRpbWUgZXBvY2ggPCAwXG4gICAgICAgICAgICAvLyBlLmcuIG5ldyBEYXRlKCdUdWUgRmViIDAyIDEzMDAgMDA6MDA6MDAgR01UKzA5MDAgKEpTVCknKSA9PiBUdWUgRmViIDAyIDEzMDAgMDA6MTg6NTkgR01UKzA5MTggKEpTVClcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWV6b25lT2Zmc2V0ID0gLWRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGltZXpvbmVPZmZzZXQgPSBvdmVycmlkZVRpbWV6b25lT2Zmc2V0ID8/IHRoaXMudGltZXpvbmVPZmZzZXQgPz8gY3VycmVudFRpbWV6b25lT2Zmc2V0O1xuICAgICAgICByZXR1cm4gY3VycmVudFRpbWV6b25lT2Zmc2V0IC0gdGFyZ2V0VGltZXpvbmVPZmZzZXQ7XG4gICAgfVxuXG4gICAgZ2V0VGltZXpvbmVPZmZzZXQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXpvbmVPZmZzZXQgPz8gLXRoaXMuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdDb21wb25lbnRzIGltcGxlbWVudHMgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgcHJpdmF0ZSBrbm93blZhbHVlczogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSBpbXBsaWVkVmFsdWVzOiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfTtcbiAgICBwcml2YXRlIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lO1xuICAgIHByaXZhdGUgX3RhZ3MgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBrbm93bkNvbXBvbmVudHM/OiB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5rbm93blZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ga25vd25Db21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IGtub3duQ29tcG9uZW50c1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgICAgICBkdXJhdGlvbjogRHVyYXRpb24gPSBFbXB0eUR1cmF0aW9uXG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBsZXQgZGF0ZSA9IGFkZER1cmF0aW9uKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSwgZHVyYXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlXCIpO1xuICAgICAgICBpZiAoXCJob3VyXCIgaW4gZHVyYXRpb24gfHwgXCJtaW51dGVcIiBpbiBkdXJhdGlvbiB8fCBcInNlY29uZFwiIGluIGR1cmF0aW9uIHx8IFwibWlsbGlzZWNvbmRcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlQW5kVGltZVwiKTtcbiAgICAgICAgICAgIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudHMsIGRhdGUpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHJlZmVyZW5jZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXG4gICAgICAgICAgICBpZiAoXCJkYXlcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCBkYXRlLmdldERheSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJ3ZWVrXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwid2Vla2RheVwiLCBkYXRlLmdldERheSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKFwibW9udGhcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInllYXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgZ2V0KGNvbXBvbmVudDogQ29tcG9uZW50KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzO1xuICAgIH1cblxuICAgIGdldENlcnRhaW5Db21wb25lbnRzKCk6IEFycmF5PENvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5rbm93blZhbHVlcykgYXMgQXJyYXk8Q29tcG9uZW50PjtcbiAgICB9XG5cbiAgICBpbXBseShjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ24oY29tcG9uZW50OiBDb21wb25lbnQsIHZhbHVlOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgYGR1cmF0aW9uYCBpbnRvIHRoaXMgY29tcG9uZW50LCBtYXJrIHRoZSBtb2RpZmllZCBkYXRlIGFuZC9vciB0aW1lIGFzIGltcGxpZWQuXG4gICAgICogQHBhcmFtIGR1cmF0aW9uXG4gICAgICovXG4gICAgYWRkRHVyYXRpb25Bc0ltcGxpZWQoZHVyYXRpb246IER1cmF0aW9uKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGFkZER1cmF0aW9uKGN1cnJlbnREYXRlLCBkdXJhdGlvbik7XG4gICAgICAgIGlmIChcImRheVwiIGluIGR1cmF0aW9uIHx8IFwid2Vla1wiIGluIGR1cmF0aW9uIHx8IFwibW9udGhcIiBpbiBkdXJhdGlvbiB8fCBcInllYXJcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoW1wiZGF5XCIsIFwid2Vla2RheVwiLCBcIm1vbnRoXCIsIFwieWVhclwiXSk7XG4gICAgICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuaW1wbHkoXCJ3ZWVrZGF5XCIsIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgdGhpcy5pbXBseShcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgdGhpcy5pbXBseShcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJzZWNvbmRcIiBpbiBkdXJhdGlvbiB8fCBcIm1pbnV0ZVwiIGluIGR1cmF0aW9uIHx8IFwiaG91clwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCJdKTtcbiAgICAgICAgICAgIHRoaXMuaW1wbHkoXCJzZWNvbmRcIiwgZGF0ZS5nZXRTZWNvbmRzKCkpO1xuICAgICAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCBkYXRlLmdldE1pbnV0ZXMoKSk7XG4gICAgICAgICAgICB0aGlzLmltcGx5KFwiaG91clwiLCBkYXRlLmdldEhvdXJzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlbGV0ZShjb21wb25lbnRzOiBDb21wb25lbnQgfCBDb21wb25lbnRbXSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMgPSBbY29tcG9uZW50c107XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb25lKCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHRoaXMucmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzID0ge307XG4gICAgICAgIGNvbXBvbmVudC5pbXBsaWVkVmFsdWVzID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdID0gdGhpcy5rbm93blZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmltcGxpZWRWYWx1ZXNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGlzT25seURhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NlcnRhaW4oXCJob3VyXCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1pbnV0ZVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJzZWNvbmRcIik7XG4gICAgfVxuXG4gICAgaXNPbmx5VGltZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICF0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpc09ubHlXZWVrZGF5Q29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKTtcbiAgICB9XG5cbiAgICBpc0RhdGVXaXRoVW5rbm93blllYXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInllYXJcIik7XG4gICAgfVxuXG4gICAgaXNWYWxpZERhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG5cbiAgICAgICAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0gdGhpcy5nZXQoXCJ5ZWFyXCIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldE1vbnRoKCkgIT09IHRoaXMuZ2V0KFwibW9udGhcIikgLSAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldERhdGUoKSAhPT0gdGhpcy5nZXQoXCJkYXlcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwiaG91clwiKSAhPSBudWxsICYmIGRhdGUuZ2V0SG91cnMoKSAhPSB0aGlzLmdldChcImhvdXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KFwibWludXRlXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRNaW51dGVzKCkgIT0gdGhpcy5nZXQoXCJtaW51dGVcIikpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBbUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICAgICAgdGFnczogJHtKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRoaXMuX3RhZ3MpLnNvcnQoKSl9LCBcbiAgICAgICAgICAgIGtub3duVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMua25vd25WYWx1ZXMpfSwgXG4gICAgICAgICAgICBpbXBsaWVkVmFsdWVzOiAke0pTT04uc3RyaW5naWZ5KHRoaXMuaW1wbGllZFZhbHVlcyl9fSwgXG4gICAgICAgICAgICByZWZlcmVuY2U6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5yZWZlcmVuY2UpfV1gO1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lQWRqdXN0bWVudCA9IHRoaXMucmVmZXJlbmNlLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlLCB0aGlzLmdldChcInRpbWV6b25lT2Zmc2V0XCIpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgdGltZXpvbmVBZGp1c3RtZW50ICogNjAwMDApO1xuICAgIH1cblxuICAgIGFkZFRhZyh0YWc6IHN0cmluZyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5fdGFncy5hZGQodGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl90YWdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLmdldChcInllYXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1vbnRoXCIpIC0gMSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiZGF5XCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibWlsbGlzZWNvbmRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHRoaXMuZ2V0KFwieWVhclwiKSk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdSZXN1bHQgaW1wbGVtZW50cyBQYXJzZWRSZXN1bHQge1xuICAgIHJlZkRhdGU6IERhdGU7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIHN0YXJ0OiBQYXJzaW5nQ29tcG9uZW50cztcbiAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50cztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICBzdGFydD86IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50c1xuICAgICkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gcmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIHRoaXMuaW5kZXgsIHRoaXMudGV4dCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuc3RhcnQgPyB0aGlzLnN0YXJ0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5lbmQgPyB0aGlzLmVuZC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5kYXRlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFnKHRhZyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFnKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBjb21iaW5lZFRhZ3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnN0YXJ0LnRhZ3MoKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGhpcy5lbmQudGFncygpKSB7XG4gICAgICAgICAgICAgICAgY29tYmluZWRUYWdzLmFkZCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZFRhZ3M7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBBcnJheS5mcm9tKHRoaXMudGFncygpKS5zb3J0KCk7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdSZXN1bHQge2luZGV4OiAke3RoaXMuaW5kZXh9LCB0ZXh0OiAnJHt0aGlzLnRleHR9JywgdGFnczogJHtKU09OLnN0cmluZ2lmeSh0YWdzKX0gLi4ufV1gO1xuICAgIH1cbn1cbiIsICJ0eXBlIERpY3Rpb25hcnlMaWtlID0gc3RyaW5nW10gfCB7IFt3b3JkOiBzdHJpbmddOiB1bmtub3duIH0gfCBNYXA8c3RyaW5nLCB1bmtub3duPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIHByZWZpeDogc3RyaW5nLFxuICAgIHNpbmdsZVRpbWV1bml0UGF0dGVybjogc3RyaW5nLFxuICAgIGNvbm5lY3RvclBhdHRlcm4gPSBcIlxcXFxzezAsNX0sP1xcXFxzezAsNX1cIlxuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmUgPSBzaW5nbGVUaW1ldW5pdFBhdHRlcm4ucmVwbGFjZSgvXFwoKD8hXFw/KS9nLCBcIig/OlwiKTtcbiAgICByZXR1cm4gYCR7cHJlZml4fSR7c2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlfSg/OiR7Y29ubmVjdG9yUGF0dGVybn0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0pezAsMTB9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUZXJtcyhkaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5TGlrZSk6IHN0cmluZ1tdIHtcbiAgICBsZXQga2V5czogc3RyaW5nW107XG4gICAgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBrZXlzID0gWy4uLmRpY3Rpb25hcnldO1xuICAgIH0gZWxzZSBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBrZXlzID0gQXJyYXkuZnJvbSgoZGljdGlvbmFyeSBhcyBNYXA8c3RyaW5nLCB1bmtub3duPikua2V5cygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGljdGlvbmFyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFueVBhdHRlcm4oZGljdGlvbmFyeTogRGljdGlvbmFyeUxpa2UpOiBzdHJpbmcge1xuICAgIC8vIFRPRE86IE1vcmUgZWZmaWNpZW50IHJlZ2V4IHBhdHRlcm4gYnkgY29uc2lkZXJpbmcgZHVwbGljYXRlZCBwcmVmaXhcblxuICAgIGNvbnN0IGpvaW5lZFRlcm1zID0gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAuam9pbihcInxcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpO1xuXG4gICAgcmV0dXJuIGAoPzoke2pvaW5lZFRlcm1zfSlgO1xufVxuIiwgImltcG9ydCB7IGFkZER1cmF0aW9uIH0gZnJvbSBcIi4vZHVyYXRpb25cIjtcblxuLyoqXG4gKiBGaW5kIHRoZSBtb3N0IGxpa2VseSB5ZWFyLCBmcm9tIGEgcmF3IG51bWJlci4gRm9yIGV4YW1wbGU6XG4gKiAxOTk3ID0+IDE5OTdcbiAqIDk3ID0+IDE5OTdcbiAqIDEyID0+IDIwMTJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNb3N0TGlrZWx5QURZZWFyKHllYXJOdW1iZXI6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHllYXJOdW1iZXIgPCAxMDApIHtcbiAgICAgICAgaWYgKHllYXJOdW1iZXIgPiA1MCkge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAxOTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJOdW1iZXIgKyAyMDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHllYXJOdW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kWWVhckNsb3Nlc3RUb1JlZihyZWZEYXRlOiBEYXRlLCBkYXk6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShyZWZEYXRlKTtcbiAgICBkYXRlLnNldE1vbnRoKG1vbnRoIC0gMSk7XG4gICAgZGF0ZS5zZXREYXRlKGRheSk7XG4gICAgY29uc3QgbmV4dFllYXIgPSBhZGREdXJhdGlvbihkYXRlLCB7IFwieWVhclwiOiAxIH0pO1xuICAgIGNvbnN0IGxhc3RZZWFyID0gYWRkRHVyYXRpb24oZGF0ZSwgeyBcInllYXJcIjogLTEgfSk7XG4gICAgaWYgKE1hdGguYWJzKG5leHRZZWFyLmdldFRpbWUoKSAtIHJlZkRhdGUuZ2V0VGltZSgpKSA8IE1hdGguYWJzKGRhdGUuZ2V0VGltZSgpIC0gcmVmRGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIGRhdGUgPSBuZXh0WWVhcjtcbiAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGxhc3RZZWFyLmdldFRpbWUoKSAtIHJlZkRhdGUuZ2V0VGltZSgpKSA8IE1hdGguYWJzKGRhdGUuZ2V0VGltZSgpIC0gcmVmRGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIGRhdGUgPSBsYXN0WWVhcjtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbn1cbiIsICJpbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4sIHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IGZpbmRNb3N0TGlrZWx5QURZZWFyIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuaW1wb3J0IHsgVGltZXVuaXQsIFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFdFRUtEQVlfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogV2Vla2RheSB9ID0ge1xuICAgIHN1bmRheTogMCxcbiAgICBzdW46IDAsXG4gICAgXCJzdW4uXCI6IDAsXG4gICAgbW9uZGF5OiAxLFxuICAgIG1vbjogMSxcbiAgICBcIm1vbi5cIjogMSxcbiAgICB0dWVzZGF5OiAyLFxuICAgIHR1ZTogMixcbiAgICBcInR1ZS5cIjogMixcbiAgICB3ZWRuZXNkYXk6IDMsXG4gICAgd2VkOiAzLFxuICAgIFwid2VkLlwiOiAzLFxuICAgIHRodXJzZGF5OiA0LFxuICAgIHRodXJzOiA0LFxuICAgIFwidGh1cnMuXCI6IDQsXG4gICAgdGh1cjogNCxcbiAgICBcInRodXIuXCI6IDQsXG4gICAgdGh1OiA0LFxuICAgIFwidGh1LlwiOiA0LFxuICAgIGZyaWRheTogNSxcbiAgICBmcmk6IDUsXG4gICAgXCJmcmkuXCI6IDUsXG4gICAgc2F0dXJkYXk6IDYsXG4gICAgc2F0OiA2LFxuICAgIFwic2F0LlwiOiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBqYW51YXJ5OiAxLFxuICAgIGZlYnJ1YXJ5OiAyLFxuICAgIG1hcmNoOiAzLFxuICAgIGFwcmlsOiA0LFxuICAgIG1heTogNSxcbiAgICBqdW5lOiA2LFxuICAgIGp1bHk6IDcsXG4gICAgYXVndXN0OiA4LFxuICAgIHNlcHRlbWJlcjogOSxcbiAgICBvY3RvYmVyOiAxMCxcbiAgICBub3ZlbWJlcjogMTEsXG4gICAgZGVjZW1iZXI6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE1PTlRIX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIC4uLkZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLFxuICAgIGphbjogMSxcbiAgICBcImphbi5cIjogMSxcbiAgICBmZWI6IDIsXG4gICAgXCJmZWIuXCI6IDIsXG4gICAgbWFyOiAzLFxuICAgIFwibWFyLlwiOiAzLFxuICAgIGFwcjogNCxcbiAgICBcImFwci5cIjogNCxcbiAgICBqdW46IDYsXG4gICAgXCJqdW4uXCI6IDYsXG4gICAganVsOiA3LFxuICAgIFwianVsLlwiOiA3LFxuICAgIGF1ZzogOCxcbiAgICBcImF1Zy5cIjogOCxcbiAgICBzZXA6IDksXG4gICAgXCJzZXAuXCI6IDksXG4gICAgc2VwdDogOSxcbiAgICBcInNlcHQuXCI6IDksXG4gICAgb2N0OiAxMCxcbiAgICBcIm9jdC5cIjogMTAsXG4gICAgbm92OiAxMSxcbiAgICBcIm5vdi5cIjogMTEsXG4gICAgZGVjOiAxMixcbiAgICBcImRlYy5cIjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgSU5URUdFUl9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIG9uZTogMSxcbiAgICB0d286IDIsXG4gICAgdGhyZWU6IDMsXG4gICAgZm91cjogNCxcbiAgICBmaXZlOiA1LFxuICAgIHNpeDogNixcbiAgICBzZXZlbjogNyxcbiAgICBlaWdodDogOCxcbiAgICBuaW5lOiA5LFxuICAgIHRlbjogMTAsXG4gICAgZWxldmVuOiAxMSxcbiAgICB0d2VsdmU6IDEyLFxufTtcblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfV09SRF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBmaXJzdDogMSxcbiAgICBzZWNvbmQ6IDIsXG4gICAgdGhpcmQ6IDMsXG4gICAgZm91cnRoOiA0LFxuICAgIGZpZnRoOiA1LFxuICAgIHNpeHRoOiA2LFxuICAgIHNldmVudGg6IDcsXG4gICAgZWlnaHRoOiA4LFxuICAgIG5pbnRoOiA5LFxuICAgIHRlbnRoOiAxMCxcbiAgICBlbGV2ZW50aDogMTEsXG4gICAgdHdlbGZ0aDogMTIsXG4gICAgdGhpcnRlZW50aDogMTMsXG4gICAgZm91cnRlZW50aDogMTQsXG4gICAgZmlmdGVlbnRoOiAxNSxcbiAgICBzaXh0ZWVudGg6IDE2LFxuICAgIHNldmVudGVlbnRoOiAxNyxcbiAgICBlaWdodGVlbnRoOiAxOCxcbiAgICBuaW5ldGVlbnRoOiAxOSxcbiAgICB0d2VudGlldGg6IDIwLFxuICAgIFwidHdlbnR5IGZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5LWZpcnN0XCI6IDIxLFxuICAgIFwidHdlbnR5IHNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eS1zZWNvbmRcIjogMjIsXG4gICAgXCJ0d2VudHkgdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHktdGhpcmRcIjogMjMsXG4gICAgXCJ0d2VudHkgZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5LWZvdXJ0aFwiOiAyNCxcbiAgICBcInR3ZW50eSBmaWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eS1maWZ0aFwiOiAyNSxcbiAgICBcInR3ZW50eSBzaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eS1zaXh0aFwiOiAyNixcbiAgICBcInR3ZW50eSBzZXZlbnRoXCI6IDI3LFxuICAgIFwidHdlbnR5LXNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHkgZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5LWVpZ2h0aFwiOiAyOCxcbiAgICBcInR3ZW50eSBuaW50aFwiOiAyOSxcbiAgICBcInR3ZW50eS1uaW50aFwiOiAyOSxcbiAgICBcInRoaXJ0aWV0aFwiOiAzMCxcbiAgICBcInRoaXJ0eSBmaXJzdFwiOiAzMSxcbiAgICBcInRoaXJ0eS1maXJzdFwiOiAzMSxcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSOiB7IFt3b3JkOiBzdHJpbmddOiBUaW1ldW5pdCB9ID0ge1xuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBUaW1ldW5pdCB9ID0ge1xuICAgIHM6IFwic2Vjb25kXCIsXG4gICAgc2VjOiBcInNlY29uZFwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG06IFwibWludXRlXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGQ6IFwiZGF5XCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgdzogXCJ3ZWVrXCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vOiBcIm1vbnRoXCIsXG4gICAgbW9uOiBcIm1vbnRoXCIsXG4gICAgbW9zOiBcIm1vbnRoXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdHI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5OiBcInllYXJcIixcbiAgICB5cjogXCJ5ZWFyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIC8vIEFsc28sIG1lcmdlIHRoZSBlbnRyaWVzIGZyb20gdGhlIGZ1bGwtbmFtZSBkaWN0aW9uYXJ5LlxuICAgIC8vIFdlIGxlYXZlIHRoZSBkdXBsaWNhdGVkIGVudHJpZXMgZm9yIHJlYWRhYmlsaXR5LlxuICAgIC4uLlRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlIsXG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBOVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihcbiAgICBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVxuKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxcc3swLDJ9YW4/KT98YW4/XFxcXGIoPzpcXFxcc3swLDJ9ZmV3KT98ZmV3fHNldmVyYWx8dGhlfGE/XFxcXHN7MCwyfWNvdXBsZVxcXFxzezAsMn0oPzpvZik/KWA7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH0gZWxzZSBpZiAobnVtID09PSBcImFcIiB8fCBudW0gPT09IFwiYW5cIiB8fCBudW0gPT0gXCJ0aGVcIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvZmV3LykpIHtcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2hhbGYvKSkge1xuICAgICAgICByZXR1cm4gMC41O1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9jb3VwbGUvKSkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvc2V2ZXJhbC8pKSB7XG4gICAgICAgIHJldHVybiA3O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUZsb2F0KG51bSk7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4gPSBgKD86JHttYXRjaEFueVBhdHRlcm4oT1JESU5BTF9XT1JEX0RJQ1RJT05BUlkpfXxbMC05XXsxLDJ9KD86c3R8bmR8cmR8dGgpPylgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9XG5cbiAgICBudW0gPSBudW0ucmVwbGFjZSgvKD86c3R8bmR8cmR8dGgpJC9pLCBcIlwiKTtcbiAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgWUVBUl9QQVRURVJOID0gYCg/OlsxLTldWzAtOV17MCwzfVxcXFxzezAsMn0oPzpCRXxBRHxCQ3xCQ0V8Q0UpfFsxLTJdWzAtOV17M318WzUtOV1bMC05XXwyWzAtNV0pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIobWF0Y2g6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKC9CRS9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJ1ZGRoaXN0IEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoL0JFL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpIC0gNTQzO1xuICAgIH1cblxuICAgIGlmICgvQkNFPy9pLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIC8vIEJlZm9yZSBDaHJpc3QsIEJlZm9yZSBDb21tb24gRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkNFPy9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIC1wYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgaWYgKC8oQUR8Q0UpL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQW5ubyBEb21pbmksIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC8oQUR8Q0UpL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaCk7XG4gICAgcmV0dXJuIGZpbmRNb3N0TGlrZWx5QURZZWFyKHJhd1llYXJOdW1iZXIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KWA7XG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1JFR0VYID0gbmV3IFJlZ0V4cChTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sIFwiaVwiKTtcblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9OT19BQkJSX1BBVFRFUk4gPSBgKCR7TlVNQkVSX1BBVFRFUk59KVxcXFxzezAsM30oJHttYXRjaEFueVBhdHRlcm4oXG4gICAgVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUlxuKX0pYDtcblxuY29uc3QgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOID0gYFxcXFxzezAsNX0sPyg/OlxcXFxzKmFuZCk/XFxcXHN7MCw1fWA7XG5cbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsXG4gICAgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTixcbiAgICBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHRpbWV1bml0VGV4dCk6IG51bGwgfCBEdXJhdGlvbiB7XG4gICAgY29uc3QgZnJhZ21lbnRzID0ge307XG4gICAgbGV0IHJlbWFpbmluZ1RleHQgPSB0aW1ldW5pdFRleHQ7XG4gICAgbGV0IG1hdGNoID0gU0lOR0xFX1RJTUVfVU5JVF9SRUdFWC5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKTtcbiAgICAgICAgcmVtYWluaW5nVGV4dCA9IHJlbWFpbmluZ1RleHQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCkudHJpbSgpO1xuICAgICAgICBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB9XG4gICAgaWYgKE9iamVjdC5rZXlzKGZyYWdtZW50cykubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudHMgYXMgRHVyYXRpb247XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3REYXRlVGltZUZyYWdtZW50KGZyYWdtZW50cywgbWF0Y2gpIHtcbiAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15bYS16QS1aXSskLykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBwYXJzZU51bWJlclBhdHRlcm4obWF0Y2hbMV0pO1xuICAgIGNvbnN0IHVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVttYXRjaFsyXS50b0xvd2VyQ2FzZSgpXTtcbiAgICBmcmFnbWVudHNbdW5pdF0gPSBudW07XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hlY2tzIGZvciB3b3JkIGJvdW5kYXJ5IGFuZCBhcHBseWluZyB0aGUgaW5uZXIgcGF0dGVybiBhbmQgZXh0cmFjdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHA7XG4gICAgYWJzdHJhY3QgaW5uZXJFeHRyYWN0KFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXlcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IFBhcnNpbmdSZXN1bHQgfCB7IFtjIGluIENvbXBvbmVudF0/OiBudW1iZXIgfSB8IG51bGw7XG5cbiAgICAvLyBPdmVycmlkZXMgdGhpcyBtZXRob2QgaWYgdGhlcmUgaXMgbW9yZSBlZmZpY2llbnQgd2F5IHRvIGNoZWNrIGZvciBpbm5lciBwYXR0ZXJuIGNoYW5nZS5cbiAgICBpbm5lclBhdHRlcm5IYXNDaGFuZ2UoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIGN1cnJlbnRJbm5lclBhdHRlcm46IFJlZ0V4cCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclBhdHRlcm4oY29udGV4dCkgIT09IGN1cnJlbnRJbm5lclBhdHRlcm47XG4gICAgfVxuXG4gICAgcGF0dGVybkxlZnRCb3VuZGFyeSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYChcXFxcV3xeKWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRJbm5lclBhdHRlcm4/OiBSZWdFeHAgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUGF0dGVybj86IFJlZ0V4cCA9IG51bGw7XG5cbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQsIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4gPSB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jYWNoZWRQYXR0ZXJuID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgIGAke3RoaXMucGF0dGVybkxlZnRCb3VuZGFyeSgpfSR7dGhpcy5jYWNoZWRJbm5lclBhdHRlcm4uc291cmNlfWAsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybi5mbGFnc1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQYXR0ZXJuO1xuICAgIH1cblxuICAgIGV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IG1hdGNoWzFdID8/IFwiXCI7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gbWF0Y2guaW5kZXggKyBoZWFkZXIubGVuZ3RoO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnN1YnN0cmluZyhoZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBtYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF0Y2hbaSAtIDFdID0gbWF0Y2hbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlRHVyYXRpb24sIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Oig/OndpdGhpbnxpbnxmb3IpXFxcXHMqKT9gICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVCA9IG5ldyBSZWdFeHAoXG4gICAgYCg/OndpdGhpbnxpbnxmb3IpXFxcXHMqYCArXG4gICAgICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQQVRURVJOX1dJVEhfUFJFRklYX1NUUklDVDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUgPyBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYIDogUEFUVEVSTl9XSVRIX1BSRUZJWDtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIC8vIEV4Y2x1ZGUgXCJmb3IgdGhlIHVuaXRcIiBwaGFzZXMsIGUuZy4gXCJmb3IgdGhlIHllYXJcIlxuICAgICAgICBpZiAobWF0Y2hbMF0ubWF0Y2goL15mb3JcXHMqdGhlXFxzKlxcdysvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VEdXJhdGlvbihtYXRjaFsxXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Om9uXFxcXHN7MCwzfSk/YCArXG4gICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgYFxcXFxzezAsM30oPzp0b3xcXFxcLXxcXFxcXHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbCk/XFxcXHN7MCwzfWAgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBgKD86LXwvfFxcXFxzezAsM30oPzpvZik/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgYCg/Oi18L3wsP1xcXFxzezAsM30pYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSg/IVxcXFx3KSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICAvLyBlLmcuIFwiWzk2IEF1Z11cIiA9PiBcIjlbNiBBdWddXCIsIHdlIG5lZWQgdG8gc2hpZnQgYXdheSBmcm9tIHRoZSBuZXh0IG51bWJlclxuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhck51bWJlciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuXG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPUkRJTkFMX05VTUJFUl9QQVRURVJOLCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86LXwvfFxcXFxzKiw/XFxcXHMqKVwiICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KSg/IVxcXFxzKig/OmFtfHBtKSlcXFxccypgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBcIig/OnRvfFxcXFwtKVxcXFxzKlwiICtcbiAgICAgICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlcXFxccypgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfFxcXFxzKixcXFxccyp8XFxcXHMrKWAgK1xuICAgICAgICAgICAgYCgke1lFQVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JCkoPyFcXFxcOlxcXFxkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMTtcbmNvbnN0IERBVEVfR1JPVVAgPSAyO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuLyoqXG4gKiBUaGUgcGFyc2VyIGZvciBwYXJzaW5nIFVTJ3MgZGF0ZSBmb3JtYXQgdGhhdCBiZWdpbiB3aXRoIG1vbnRoJ3MgbmFtZS5cbiAqICAtIEphbnVhcnkgMTNcbiAqICAtIEphbnVhcnkgMTMsIDIwMTJcbiAqICAtIEphbnVhcnkgMTMgLSAxNSwgMjAxMlxuICogTm90ZTogV2F0Y2ggb3V0IGZvcjpcbiAqICAtIEphbnVhcnkgMTI6MDBcbiAqICAtIEphbnVhcnkgMTIuNDRcbiAqICAtIEphbnVhcnkgMTIyMjM0NFxuICogIC0gSmFudWFyeSAyMSAod2hlbiBzaG91bGRTa2lwWWVhckxpa2VEYXRlPXRydWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzaG91bGRTa2lwWWVhckxpa2VEYXRlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSA9IHNob3VsZFNraXBZZWFyTGlrZURhdGU7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNraXAgdGhlIGNhc2Ugd2hlcmUgdGhlIGRheSBsb29rcyBsaWtlIGEgeWVhciAoZXg6IEphbnVhcnkgMjEpXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNraXBZZWFyTGlrZURhdGUpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0gJiYgIW1hdGNoW1lFQVJfR1JPVVBdICYmIG1hdGNoW0RBVEVfR1JPVVBdLm1hdGNoKC9eMlswLTVdJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHRcbiAgICAgICAgICAgIC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXh0IGNhbiBiZSAncmFuZ2UnIHZhbHVlLiBTdWNoIGFzICdKYW51YXJ5IDEyIC0gMTMsIDIwMTInXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGNvbXBvbmVudHM7XG4gICAgICAgIHJlc3VsdC5lbmQgPSBjb21wb25lbnRzLmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLCBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoKD86aW4pXFxcXHMqKT9gICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIGBcXFxccypgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICBgKD86LHwtfG9mKT9cXFxccyooJHtZRUFSX1BBVFRFUk59KT9gICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1bXlxcXFxzXFxcXHddfFxcXFxzK1teMC05XXxcXFxccyskfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IFlFQVJfR1JPVVAgPSAzO1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgbW9udGggbmFtZSBhbmQgeWVhci5cbiAqIC0gSmFudWFyeSwgMjAxMlxuICogLSBKYW51YXJ5IDIwMTJcbiAqIC0gSmFudWFyeVxuICogKGluKSBKYW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBza2lwIHNvbWUgdW5saWtlbHkgd29yZHMgXCJqYW5cIiwgXCJtYXJcIiwgLi5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmxlbmd0aCA8PSAzICYmICFGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWVttb250aE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICsgKG1hdGNoW1BSRUZJWF9HUk9VUF0gfHwgXCJcIikubGVuZ3RoLFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIDEpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYWRkVGFnKFwicGFyc2VyL0VOTW9udGhOYW1lUGFyc2VyXCIpO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttb250aE5hbWVdO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIDEsIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8qXG4gICAgRGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiBiZXR3ZWVuIG51bWJlcnMgbGlrZSBFTlNsYXNoRGF0ZUZvcm1hdFBhcnNlcixcbiAgICBidXQgdGhpcyBwYXJzZXIgZXhwZWN0IHllYXIgYmVmb3JlIG1vbnRoIGFuZCBkYXRlLlxuICAgIC0gWVlZWS9NTS9ERFxuICAgIC0gWVlZWS1NTS1ERFxuICAgIC0gWVlZWS5NTS5ERFxuKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoWzAtOV17NH0pWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoPzooJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KXwoWzAtOV17MSwyfSkpWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoWzAtOV17MSwyfSlgICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOWWVhck1vbnRoRGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9udGhEYXRlT3JkZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBtb250aCA9IG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF1cbiAgICAgICAgICAgID8gcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSlcbiAgICAgICAgICAgIDogTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vbnRoRGF0ZU9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgW21vbnRoLCBkYXldID0gW2RheSwgbW9udGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKFswLTldfDBbMS05XXwxWzAxMl0pLyhbMC05XXs0fSlcIiArIFwiXCIsIFwiaVwiKTtcblxuY29uc3QgTU9OVEhfR1JPVVAgPSAxO1xuY29uc3QgWUVBUl9HUk9VUCA9IDI7XG5cbi8qKlxuICogTW9udGgvWWVhciBkYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChhbHNvIFwiLVwiIGFuZCBcIi5cIikgYmV0d2VlbiBudW1iZXJzXG4gKiAtIDExLzA1XG4gKiAtIDA2LzIwMDVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1hdGNoW01PTlRIX0dST1VQXSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKS5pbXBseShcImRheVwiLCAxKS5hc3NpZ24oXCJtb250aFwiLCBtb250aCkuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gcHJpbWFyeVRpbWVQYXR0ZXJuKGxlZnRCb3VuZGFyeTogc3RyaW5nLCBwcmltYXJ5UHJlZml4OiBzdHJpbmcsIHByaW1hcnlTdWZmaXg6IHN0cmluZywgZmxhZ3M6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7bGVmdEJvdW5kYXJ5fWAgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVByZWZpeH1gICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/Ojp8XHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezJ9KWAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVN1ZmZpeH1gLFxuICAgICAgICBmbGFnc1xuICAgICk7XG59XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZTogc3RyaW5nLCBmb2xsb3dpbmdTdWZmaXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICBgXigke2ZvbGxvd2luZ1BoYXNlfSlgICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9gICtcbiAgICAgICAgICAgIGAke2ZvbGxvd2luZ1N1ZmZpeH1gLFxuICAgICAgICBcImlcIlxuICAgICk7XG59XG5cbmNvbnN0IEhPVVJfR1JPVVAgPSAyO1xuY29uc3QgTUlOVVRFX0dST1VQID0gMztcbmNvbnN0IFNFQ09ORF9HUk9VUCA9IDQ7XG5jb25zdCBNSUxMSV9TRUNPTkRfR1JPVVAgPSA1O1xuY29uc3QgQU1fUE1fSE9VUl9HUk9VUCA9IDY7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBwcmltYXJ5UHJlZml4KCk6IHN0cmluZztcbiAgICBhYnN0cmFjdCBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmc7XG4gICAgc3RyaWN0TW9kZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cblxuICAgIHBhdHRlcm5GbGFncygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoXnxcXFxcc3xUfFxcXFxiKWA7XG4gICAgfVxuXG4gICAgcHJpbWFyeVN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1N1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBzdGFydENvbXBvbmVudHMgPSB0aGlzLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIXN0YXJ0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1hdGNoIHNlZW0gbGlrZSBhIHllYXIgZS5nLiBcIjIwMTMuMTI6Li4uXCIsXG4gICAgICAgICAgICAvLyB0aGVuIHNraXBzIHRoZSB5ZWFyIHBhcnQgYW5kIHRyeSBtYXRjaGluZyBhZ2Fpbi5cbiAgICAgICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlxcZHs0fS8pKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gNDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsxXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRleHQgPSBtYXRjaFswXS5zdWJzdHJpbmcobWF0Y2hbMV0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0LCBzdGFydENvbXBvbmVudHMpO1xuICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4KTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGF0dGVybiA9IHRoaXMuZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nTWF0Y2ggPSBmb2xsb3dpbmdQYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgLy8gUGF0dGVybiBcIjQ1Ni0xMlwiLCBcIjIwMjItMTJcIiBzaG91bGQgbm90IGJlIHRpbWUgd2l0aG91dCBwcm9wZXIgY29udGV4dFxuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZHszLDR9LykgJiYgZm9sbG93aW5nTWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezIsNH0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyOjAxLi4uXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezJ9XFxXXFxkezJ9LykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFmb2xsb3dpbmdNYXRjaCB8fFxuICAgICAgICAgICAgLy8gUGF0dGVybiBcIllZLllZIC1YWFhYXCIgaXMgbW9yZSBsaWtlIHRpbWV6b25lIG9mZnNldFxuICAgICAgICAgICAgZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHszLDR9JC8pXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIGZvbGxvd2luZ01hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gZm9sbG93aW5nTWF0Y2hbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICBzdHJpY3QgPSBmYWxzZVxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tIEhvdXJzXG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgLy8gV2hlbiB0aW1lIGlzIGxpa2UgJzIwMTknLCBpdCBpcyBtb3JlIGxpa2VseSBhIHllYXIuXG4gICAgICAgICAgICAvLyBFc3BlY2lhbGx5IGlmIHRoZXJlIGlzIG5vIG1pbnV0ZSBwYXJ0IGFuZCBubyBhbS9wbS5cbiAgICAgICAgICAgIGlmIChtYXRjaFtIT1VSX0dST1VQXS5sZW5ndGggPT0gNCAmJiBtYXRjaFtNSU5VVEVfR1JPVVBdID09IG51bGwgJiYgIW1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUgfHwgbWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gTWludXRlc1xuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXS5sZW5ndGggPT0gMSAmJiAhbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNpbmdsZSBkaWdpdCBtaW51dGUgZS5nLiBcImF0IDEuMSB4eFwiXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gQU0gJiBQTVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCBhbXBtID0gbWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF1bMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChhbXBtID09IFwiYVwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5BTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgbWVyaWRpZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaWxsaXNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBtaWxsaXNlY29uZCA9IHBhcnNlSW50KG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0uc3Vic3RyaW5nKDAsIDMpKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXNlY29uZCA+PSAxMDAwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBTZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbU0VDT05EX0dST1VQXSk7XG4gICAgICAgICAgICBpZiAoc2Vjb25kID49IDYwKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSAtMTtcblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVcbiAgICAgICAgaWYgKG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCB8fCBob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudHMuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikgaG91ciArPSAxMjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVyaWRpZW0gPT0gTWVyaWRpZW0uQU0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyKTtcbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgbWludXRlKTtcblxuICAgICAgICBpZiAobWVyaWRpZW0gPj0gMCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEF0UE0gPSByZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikgJiYgcmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgPiAxMjtcbiAgICAgICAgICAgIGlmIChzdGFydEF0UE0pIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgLSAxMiA+IGhvdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gMTBwbSAtIDEgKGFtKVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91ciArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnRzLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBjb21wb25lbnRzLmdldChcImRheVwiKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCkge1xuICAgICAgICAvLyBTaW5nbGUgZGlnaXQgKGUuZyBcIjFcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRocmVlIG9yIG1vcmUgZGlnaXQgKGUuZy4gXCIyMDNcIiwgXCIyMDE0XCIpIHNob3VsZCBub3QgYmUgY291bnRlZCBhcyB0aW1lIGV4cHJlc3Npb24gKHdpdGhvdXQgcHJvcGVyIGNvbnRleHQpXG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZFxcZFxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5zdGVhZCBvZiBcImFtL3BtXCIsIGl0IGVuZHMgd2l0aCBcImFcIiBvciBcInBcIiAoZS5nIFwiMWFcIiwgXCIxMjNwXCIpLCB0aGlzIHNlZW1zIHVubGlrZWx5XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXFxkW2FwQVBdJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcblxuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxXCIgb3IgXCJhdCAxLjJcIiksIHRoaXMgc2hvdWxkIG5vdCBiZSBhY2NlcHRlZFxuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBkb3Qgc2luZ2xlIGRpZ2l0LCBlLmcuIFwiYXQgMS4yXCJcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgYWJvdmUgMjQsIGUuZy4gXCJhdCAyNVwiXG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCstXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIG9yIGRvdHNcbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKylcXHMqLVxccyooXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgLy8gSW4gc3RyaWN0IG1vZGUgKGUuZy4gXCJhdCAxLTNcIiBvciBcImF0IDEuMiAtIDIuM1wiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyczogc3RyaW5nID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1syXTtcbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChzdGFydGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0IHx8IHN0YXJ0aW5nTnVtYmVyVmFsID4gMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5UHJlZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlTdWZmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gbnVsbDtcblxuICAgIGdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeVByZWZpeCA9IHRoaXMucHJpbWFyeVByZWZpeCgpO1xuICAgICAgICBjb25zdCBwcmltYXJ5U3VmZml4ID0gdGhpcy5wcmltYXJ5U3VmZml4KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9PT0gcHJpbWFyeVByZWZpeCAmJiB0aGlzLmNhY2hlZFByaW1hcnlTdWZmaXggPT09IHByaW1hcnlTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuID0gcHJpbWFyeVRpbWVQYXR0ZXJuKFxuICAgICAgICAgICAgdGhpcy5wcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpLFxuICAgICAgICAgICAgcHJpbWFyeVByZWZpeCxcbiAgICAgICAgICAgIHByaW1hcnlTdWZmaXgsXG4gICAgICAgICAgICB0aGlzLnBhdHRlcm5GbGFncygpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVByZWZpeCA9IHByaW1hcnlQcmVmaXg7XG4gICAgICAgIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IHByaW1hcnlTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFByaW1hcnlUaW1lUGF0dGVybjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1BoYXNlID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gbnVsbDtcblxuICAgIGdldEZvbGxvd2luZ1RpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQaGFzZSA9IHRoaXMuZm9sbG93aW5nUGhhc2UoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nU3VmZml4ID0gdGhpcy5mb2xsb3dpbmdTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9PT0gZm9sbG93aW5nUGhhc2UgJiYgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPT09IGZvbGxvd2luZ1N1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2UsIGZvbGxvd2luZ1N1ZmZpeCk7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBmb2xsb3dpbmdQaGFzZTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBmb2xsb3dpbmdTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFic3RyYWN0VGltZUV4cHJlc3Npb25QYXJzZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcihzdHJpY3RNb2RlKTtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcXFxccyooPzpcXFxcLXxcXFxcXHUyMDEzfFxcXFx+fFxcXFxcdTMwMUN8dG98dW50aWx8dGhyb3VnaHx0aWxsfFxcXFw/KVxcXFxzKlwiO1xuICAgIH1cblxuICAgIHByaW1hcnlQcmVmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86KD86YXR8ZnJvbSlcXFxccyopPz9cIjtcbiAgICB9XG5cbiAgICBwcmltYXJ5U3VmZml4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIig/OlxcXFxzKig/Om9cXFxcVypjbG9ja3xhdFxcXFxzKm5pZ2h0fGluXFxcXHMqdGhlXFxcXHMqKD86bW9ybmluZ3xhZnRlcm5vb24pKSk/KD8hLykoPz1cXFxcV3wkKVwiO1xuICAgIH1cblxuICAgIGV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogbnVsbCB8IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHN1cGVyLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIWNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibmlnaHRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSA2ICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJhZnRlcm5vb25cIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDAgJiYgaG91ciA8PSA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcIm1vcm5pbmdcIikpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgIH1cblxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICByZXN1bHQ6IFBhcnNpbmdSZXN1bHRcbiAgICApOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdDb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAoZm9sbG93aW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9sbG93aW5nQ29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9sbG93aW5nQ29tcG9uZW50cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZUR1cmF0aW9uLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0oPzphZ298YmVmb3JlfGVhcmxpZXIpKD89XFxcXFd8JClgLCBcImlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24obWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCByZXZlcnNlRHVyYXRpb24oZHVyYXRpb24pKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBwYXJzZUR1cmF0aW9uLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoJHtUSU1FX1VOSVRTX1BBVFRFUk59KVxcXFxzezAsNX0oPzpsYXRlcnxhZnRlcnxmcm9tIG5vd3xoZW5jZWZvcnRofGZvcndhcmR8b3V0KWAgKyBcIig/PSg/OlxcXFxXfCQpKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBTVFJJQ1RfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSlcXFxcc3swLDV9KGxhdGVyfGFmdGVyfGZyb20gbm93KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgR1JPVVBfTlVNX1RJTUVVTklUUyA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaWN0TW9kZSA/IFNUUklDVF9QQVRURVJOIDogUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlRHVyYXRpb24obWF0Y2hbR1JPVVBfTlVNX1RJTUVVTklUU10pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBBIHNwZWNpYWwgdHlwZSBvZiB7QGxpbmsgUmVmaW5lcn0gdG8gZmlsdGVyIHRoZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWx0ZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBpc1ZhbGlkKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuO1xuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHIpID0+IHRoaXMuaXNWYWxpZChjb250ZXh0LCByKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBtZXJnZSBjb25zZWN1dGl2ZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXJnaW5nUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IHNob3VsZE1lcmdlUmVzdWx0cyhcbiAgICAgICAgdGV4dEJldHdlZW46IHN0cmluZyxcbiAgICAgICAgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHRcbiAgICApOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3QgbWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IFBhcnNpbmdSZXN1bHQ7XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdID0gW107XG4gICAgICAgIGxldCBjdXJSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBsZXQgbmV4dFJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXh0UmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dEJldHdlZW4gPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGN1clJlc3VsdC5pbmRleCArIGN1clJlc3VsdC50ZXh0Lmxlbmd0aCwgbmV4dFJlc3VsdC5pbmRleCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJSZXN1bHQsIG5leHRSZXN1bHQsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IGN1clJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0ID0gdGhpcy5tZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGxlZnQsIHJpZ2h0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBtZXJnZWQgJHtsZWZ0fSBhbmQgJHtyaWdodH0gaW50byAke21lcmdlZFJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGN1clJlc3VsdCA9IG1lcmdlZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkUmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IGFkZER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRSZXN1bHQuZW5kICYmICFuZXh0UmVzdWx0LmVuZCAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGw7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBmcm9tUmVzdWx0LCB0b1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBpZiAoIWZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmICF0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmdldENlcnRhaW5Db21wb25lbnRzKCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCB0b1Jlc3VsdC5zdGFydC5nZXQoa2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvUmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgZnJvbVJlc3VsdC5zdGFydC5nZXQoa2V5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZyb21SZXN1bHQuc3RhcnQuZGF0ZSgpID4gdG9SZXN1bHQuc3RhcnQuZGF0ZSgpKSB7XG4gICAgICAgICAgICBsZXQgZnJvbURhdGUgPSBmcm9tUmVzdWx0LnN0YXJ0LmRhdGUoKTtcbiAgICAgICAgICAgIGxldCB0b0RhdGUgPSB0b1Jlc3VsdC5zdGFydC5kYXRlKCk7XG5cbiAgICAgICAgICAgIGlmICh0b1Jlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgYWRkRHVyYXRpb24odG9EYXRlLCB7IGRheTogNyB9KSA+IGZyb21EYXRlKSB7XG4gICAgICAgICAgICAgICAgdG9EYXRlID0gYWRkRHVyYXRpb24odG9EYXRlLCB7IGRheTogNyB9KTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCB0b0RhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHRvRGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHRvRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgYWRkRHVyYXRpb24oZnJvbURhdGUsIHsgZGF5OiAtNyB9KSA8IHRvRGF0ZSkge1xuICAgICAgICAgICAgICAgIGZyb21EYXRlID0gYWRkRHVyYXRpb24oZnJvbURhdGUsIHsgZGF5OiAtNyB9KTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIGZyb21EYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIGZyb21EYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCBmcm9tRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgYWRkRHVyYXRpb24odG9EYXRlLCB7IHllYXI6IDEgfSkgPiBmcm9tRGF0ZSkge1xuICAgICAgICAgICAgICAgIHRvRGF0ZSA9IGFkZER1cmF0aW9uKHRvRGF0ZSwgeyB5ZWFyOiAxIH0pO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b0RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgYWRkRHVyYXRpb24oZnJvbURhdGUsIHsgeWVhcjogLTEgfSkgPCB0b0RhdGUpIHtcbiAgICAgICAgICAgICAgICBmcm9tRGF0ZSA9IGFkZER1cmF0aW9uKGZyb21EYXRlLCB7IHllYXI6IC0xIH0pO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBbdG9SZXN1bHQsIGZyb21SZXN1bHRdID0gW2Zyb21SZXN1bHQsIHRvUmVzdWx0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBmcm9tUmVzdWx0LmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGZyb21SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5lbmQgPSB0b1Jlc3VsdC5zdGFydDtcbiAgICAgICAgcmVzdWx0LmluZGV4ID0gTWF0aC5taW4oZnJvbVJlc3VsdC5pbmRleCwgdG9SZXN1bHQuaW5kZXgpO1xuICAgICAgICBpZiAoZnJvbVJlc3VsdC5pbmRleCA8IHRvUmVzdWx0LmluZGV4KSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IGZyb21SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgdG9SZXN1bHQudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ID0gdG9SZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgZnJvbVJlc3VsdC50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIjtcblxuLyoqXG4gKiBNZXJnaW5nIGJlZm9yZSBhbmQgYWZ0ZXIgcmVzdWx0cyAoc2VlLiBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcilcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gc2hvdWxkIHByb3ZpZGUgRW5nbGlzaCBjb25uZWN0aW5nIHBoYXNlc1xuICogLSAyMDIwLTAyLTEzIFt0b10gMjAyMC0wMi0xM1xuICogLSBXZWRuZXNkYXkgWy1dIEZyaWRheVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqKHRvfC18XHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbClcXHMqJC9pO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVSZXN1bHQoZGF0ZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgdGltZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVSZXN1bHQuY2xvbmUoKTtcbiAgICBjb25zdCBiZWdpbkRhdGUgPSBkYXRlUmVzdWx0LnN0YXJ0O1xuICAgIGNvbnN0IGJlZ2luVGltZSA9IHRpbWVSZXN1bHQuc3RhcnQ7XG5cbiAgICByZXN1bHQuc3RhcnQgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGJlZ2luRGF0ZSwgYmVnaW5UaW1lKTtcbiAgICBpZiAoZGF0ZVJlc3VsdC5lbmQgIT0gbnVsbCB8fCB0aW1lUmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBkYXRlUmVzdWx0LmVuZCA9PSBudWxsID8gZGF0ZVJlc3VsdC5zdGFydCA6IGRhdGVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gdGltZVJlc3VsdC5lbmQgPT0gbnVsbCA/IHRpbWVSZXN1bHQuc3RhcnQgOiB0aW1lUmVzdWx0LmVuZDtcbiAgICAgICAgY29uc3QgZW5kRGF0ZVRpbWUgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGVuZERhdGUsIGVuZFRpbWUpO1xuXG4gICAgICAgIGlmIChkYXRlUmVzdWx0LmVuZCA9PSBudWxsICYmIGVuZERhdGVUaW1lLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsICBcIlR1ZXNkYXkgOXBtIC0gMWFtXCIgdGhlIGVuZGluZyBzaG91bGQgYWN0dWFsbHkgYmUgMWFtIG9uIHRoZSBuZXh0IGRheS5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYWRkIHRvIGVuZGluZyBieSBhbm90aGVyIGRheS5cbiAgICAgICAgICAgIGNvbnN0IG5leHREYXkgPSBuZXcgRGF0ZShlbmREYXRlVGltZS5kYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIG5leHREYXkuc2V0RGF0ZShuZXh0RGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgaWYgKGVuZERhdGVUaW1lLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShlbmREYXRlVGltZSwgbmV4dERheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQuZW5kID0gZW5kRGF0ZVRpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoXG4gICAgZGF0ZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsXG4gICAgdGltZUNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHNcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBkYXRlVGltZUNvbXBvbmVudCA9IGRhdGVDb21wb25lbnQuY2xvbmUoKTtcblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0aW1lQ29tcG9uZW50LmdldChcImhvdXJcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuXG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInNlY29uZFwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcblxuICAgICAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWlsbGlzZWNvbmRcIikpIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwic2Vjb25kXCIpKTtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWVyaWRpZW1cIikpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSk7XG4gICAgfSBlbHNlIGlmICh0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpICE9IG51bGwgJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gbnVsbCkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH1cblxuICAgIGlmIChkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSA9PSBNZXJpZGllbS5QTSAmJiBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwiaG91clwiKSkge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKGRhdGVDb21wb25lbnQudGFncygpKTtcbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKHRpbWVDb21wb25lbnQudGFncygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21wb25lbnQ7XG59XG4iLCAiLypcblxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBtZXJnZURhdGVUaW1lUmVzdWx0IH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIGFic3RyYWN0IHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cDtcblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoKGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpICYmIG5leHRSZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpKSB8fFxuICAgICAgICAgICAgICAgIChuZXh0UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkpICYmXG4gICAgICAgICAgICB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKVxuICAgICAgICAgICAgPyBtZXJnZURhdGVUaW1lUmVzdWx0KGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpXG4gICAgICAgICAgICA6IG1lcmdlRGF0ZVRpbWVSZXN1bHQobmV4dFJlc3VsdCwgY3VycmVudFJlc3VsdCk7XG5cbiAgICAgICAgcmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgcmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5leHRSZXN1bHQudGV4dDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyXCI7XG5cbi8qKlxuICogTWVyZ2luZyBkYXRlLW9ubHkgcmVzdWx0IGFuZCB0aW1lLW9ubHkgcmVzdWx0IChzZWUuIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIpLlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBzaG91bGQgcHJvdmlkZSBFbmdsaXNoIGNvbm5lY3RpbmcgcGhhc2VzXG4gKiAtIDIwMjAtMDItMTMgW2F0XSA2cG1cbiAqIC0gVG9tb3Jyb3cgW2FmdGVyXSA3YW1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIge1xuICAgIHBhdHRlcm5CZXR3ZWVuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlxcXFxzKihUfGF0fGFmdGVyfGJlZm9yZXxvbnxvZnwsfC18XFxcXC58XHUyMjE5fDopP1xcXFxzKiRcIik7XG4gICAgfVxufVxuIiwgIi8vIE1hcCBBQkJSIC0+IE9mZnNldCBpbiBtaW51dGVcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgVGltZXpvbmVBYmJyTWFwIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi4vLi4vdGltZXpvbmVcIjtcblxuY29uc3QgVElNRVpPTkVfTkFNRV9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyosP1xcXFxzKlxcXFwoPyhbQS1aXXsyLDR9KVxcXFwpPyg/PVxcXFxXfCQpXCIsIFwiaVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRpbWV6b25lT3ZlcnJpZGVzPzogVGltZXpvbmVBYmJyTWFwKSB7fVxuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBjb25zdCB0aW1lem9uZU92ZXJyaWRlcyA9IGNvbnRleHQub3B0aW9uLnRpbWV6b25lcyA/PyB7fTtcblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VmZml4ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBUSU1FWk9ORV9OQU1FX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGltZXpvbmVBYmJyID0gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSByZXN1bHQuc3RhcnQuZGF0ZSgpID8/IHJlc3VsdC5yZWZEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0ek92ZXJyaWRlcyA9IHsgLi4udGhpcy50aW1lem9uZU92ZXJyaWRlcywgLi4udGltZXpvbmVPdmVycmlkZXMgfTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldCh0aW1lem9uZUFiYnIsIHJlZkRhdGUsIHR6T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgIGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHt0aW1lem9uZUFiYnJ9JyBpbnRvOiAke2V4dHJhY3RlZFRpbWV6b25lT2Zmc2V0fSBmb3I6ICR7cmVzdWx0LnN0YXJ0fWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXpvbmVPZmZzZXQgIT09IG51bGwgJiYgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgIT0gY3VycmVudFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgbWF5IGFscmVhZHkgaGF2ZSBleHRyYWN0ZWQgdGhlIHRpbWV6b25lIG9mZnNldCBlLmcuIFwiMTEgYW0gR01UKzA5MDAgKEpTVClcIlxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgZXF1YWwsIHdlIGFsc28gd2FudCB0byB0YWtlIHRoZSBhYmJyZXZpYXRpb24gdGV4dCBpbnRvIHJlc3VsdFxuICAgICAgICAgICAgICAgIC8vIC0gaWYgdGhleSBhcmUgbm90IGVxdWFsLCB3ZSB0cnVzdCB0aGUgb2Zmc2V0IG1vcmVcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9mdGVuIGJlY2F1c2UgaXQncyByZWxhdGl2ZSB0aW1lIHdpdGggaW5mZXJyZWQgdGltZXpvbmUgKGUuZy4gaW4gMSBob3VyLCB0b21vcnJvdylcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0aW1lIGlzIG5vdCBleHBsaWNpdGx5IG1lbnRpb25lZCxcbiAgICAgICAgICAgICAgICAvLyBUaGVuLCB3ZSBhbHNvIHdhbnQgdG8gZG91YmxlLWNoZWNrIHRoZSBhYmJyIGNhc2UgKGUuZy4gXCJHRVRcIiBub3QgXCJnZXRcIilcbiAgICAgICAgICAgICAgICBpZiAodGltZXpvbmVBYmJyICE9IG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICE9IG51bGwgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmNvbnN0IFRJTUVaT05FX09GRlNFVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcIl5cXFxccyooPzpcXFxcKD8oPzpHTVR8VVRDKVxcXFxzPyk/KFsrLV0pKFxcXFxkezEsMn0pKD86Oj8oXFxcXGR7Mn0pKT9cXFxcKT9cIiwgXCJpXCIpO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVAgPSAxO1xuY29uc3QgVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQID0gMjtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke21hdGNoWzBdfScgaW50byA6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhvdXJPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfSE9VUl9PRkZTRVRfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9NSU5VVEVfT0ZGU0VUX0dST1VQXSB8fCBcIjBcIik7XG4gICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBob3VyT2Zmc2V0ICogNjAgKyBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAvLyBObyB0aW1lem9uZXMgaGF2ZSBvZmZzZXRzIGdyZWF0ZXIgdGhhbiAxNCBob3Vycywgc28gZGlzcmVnYXJkIHRoaXMgbWF0Y2hcbiAgICAgICAgICAgIGlmICh0aW1lem9uZU9mZnNldCA+IDE0ICogNjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lT2Zmc2V0ID0gLXRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCB0aW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPj0gcHJldlJlc3VsdC5pbmRleCArIHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBvdmVybGFwLCBjb21wYXJlIHRoZSBsZW5ndGggYW5kIGRpc2NhcmQgdGhlIHNob3J0ZXIgb25lXG4gICAgICAgICAgICBsZXQga2VwdCA9IG51bGw7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnRleHQubGVuZ3RoID4gcHJldlJlc3VsdC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGtlcHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGtlcHQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IHJlbW92ZSAke3JlbW92ZWR9IGJ5ICR7a2VwdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJldlJlc3VsdCA9IGtlcHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbGFzdCBvbmVcbiAgICAgICAgaWYgKHByZXZSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICAgIEVuZm9yY2UgJ2ZvcndhcmREYXRlJyBvcHRpb24gdG8gb24gdGhlIHJlc3VsdHMuIFdoZW4gdGhlcmUgYXJlIG1pc3NpbmcgY29tcG9uZW50LFxuICAgIGUuZy4gXCJNYXJjaCAxMi0xMyAod2l0aG91dCB5ZWFyKVwiIG9yIFwiVGh1cnNkYXlcIiwgdGhlIHJlZmluZXIgd2lsbCB0cnkgdG8gYWRqdXN0IHRoZSByZXN1bHRcbiAgICBpbnRvIHRoZSBmdXR1cmUgaW5zdGVhZCBvZiB0aGUgcGFzdC5cbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgKiBhcyBkYXRlcyBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCB7IGFkZER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcndhcmREYXRlUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKCFjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlZkRhdGUgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkgJiYgY29udGV4dC5yZWZlcmVuY2UuaW5zdGFudCA+IHJlc3VsdC5zdGFydC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZEYXRlID0gY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmRm9sbG93aW5nRGF5ID0gbmV3IERhdGUocmVmRGF0ZSk7XG4gICAgICAgICAgICAgICAgcmVmRm9sbG93aW5nRGF5LnNldERhdGUocmVmRm9sbG93aW5nRGF5LmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgICAgICAgICAgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuc3RhcnQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gdGltZSBmcm9tIHRoZSByZWYgZGF0ZSAoJHtyZWZEYXRlfSkgdG8gdGhlIGZvbGxvd2luZyBkYXkgKCR7cmVmRm9sbG93aW5nRGF5fSlgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZGb2xsb3dpbmdEYXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmRhdGUoKSA+IHJlc3VsdC5lbmQuZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZGb2xsb3dpbmdEYXkuc2V0RGF0ZShyZWZGb2xsb3dpbmdEYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHJlZkRhdGUgPiByZXN1bHQuc3RhcnQuZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNUb0FkZCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpIC0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF5c1RvQWRkIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5c1RvQWRkICs9IDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlZkRhdGUgPSBhZGREdXJhdGlvbihyZWZEYXRlLCB7IGRheTogZGF5c1RvQWRkIH0pO1xuICAgICAgICAgICAgICAgIGltcGx5U2ltaWxhckRhdGUocmVzdWx0LnN0YXJ0LCByZWZEYXRlKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRqdXN0IGRhdGUgdG8gdGhlIGNvbWluZyB3ZWVrXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXlzVG9BZGQgPSByZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikgLSByZWZEYXRlLmdldERheSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5c1RvQWRkIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXNUb0FkZCArPSA3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZkRhdGUgPSBhZGREdXJhdGlvbihyZWZEYXRlLCB7IGRheTogZGF5c1RvQWRkIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gY2FzZSB3aGVyZSB3ZSBrbm93IHRoZSBtb250aCwgYnV0IG5vdCB3aGljaCB5ZWFyIChlLmcuIFwiaW4gRGVjZW1iZXJcIiwgXCIyNXRoIERlY2VtYmVyXCIpLFxuICAgICAgICAgICAgLy8gdHJ5IG1vdmUgdG8gYW5vdGhlciB5ZWFyICh1cC10byAzIHRpbWVzKVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiByZWZEYXRlID4gcmVzdWx0LnN0YXJ0LmRhdGUoKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMyAmJiByZWZEYXRlID4gcmVzdWx0LnN0YXJ0LmRhdGUoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB5ZWFyICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInllYXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlc3VsdC5lbmQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gbW9udGggKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8kLykpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQgJyR7cmVzdWx0LnRleHR9J2ApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzdWx0LnN0YXJ0LmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgIXJlc3VsdC5lbmQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0OiBQYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKFN0cmljdCkgUmVtb3Zpbmcgd2Vla2RheSBvbmx5IGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuLy8gSVNPIDg2MDFcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIC0gWVlZWS1NTS1ERFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tVFpEXG4vLyAtIFlZWVktTU0tRERUaGg6bW06c3NUWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzcy5zVFpEXG4vLyAtIFRaRCA9IChaIG9yICtoaDptbSBvciAtaGg6bW0pXG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgXCIoWzAtOV17NH0pXFxcXC0oWzAtOV17MSwyfSlcXFxcLShbMC05XXsxLDJ9KVwiICtcbiAgICBcIig/OlRcIiArIC8vLi5cbiAgICAgICAgXCIoWzAtOV17MSwyfSk6KFswLTldezEsMn0pXCIgKyAvLyBoaDptbVxuICAgICAgICBcIig/OlwiICtcbiAgICAgICAgICAgIFwiOihbMC05XXsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNH0pKT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIDpzcy5zXG4gICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgIFwiWnwoWystXVxcXFxkezJ9KTo/KFxcXFxkezJ9KT9cIiArXG4gICAgICAgIFwiKT9cIiArIC8vIFRaRCAoWiBvciBcdTAwQjFoaDptbSBvciBcdTAwQjFoaG1tIG9yIFx1MDBCMWhoKVxuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OVU1CRVJfR1JPVVAgPSAyO1xuY29uc3QgREFURV9OVU1CRVJfR1JPVVAgPSAzO1xuY29uc3QgSE9VUl9OVU1CRVJfR1JPVVAgPSA0O1xuY29uc3QgTUlOVVRFX05VTUJFUl9HUk9VUCA9IDU7XG5jb25zdCBTRUNPTkRfTlVNQkVSX0dST1VQID0gNjtcbmNvbnN0IE1JTExJU0VDT05EX05VTUJFUl9HUk9VUCA9IDc7XG5jb25zdCBUWkRfR1JPVVAgPSA4O1xuY29uc3QgVFpEX0hPVVJfT0ZGU0VUX0dST1VQID0gOTtcbmNvbnN0IFRaRF9NSU5VVEVfT0ZGU0VUX0dST1VQID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElTT0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICBcInllYXJcIjogcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwibW9udGhcIjogcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcImRheVwiOiBwYXJzZUludChtYXRjaFtEQVRFX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgcGFyc2VJbnQobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBwYXJzZUludChtYXRjaFtNSU5VVEVfTlVNQkVSX0dST1VQXSkpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW1NFQ09ORF9OVU1CRVJfR1JPVVBdKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgWnVsdSB0aW1lIHpvbmUgKFopIGlzIGVxdWl2YWxlbnQgdG8gVVRDXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWludXRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUWkRfTUlOVVRFX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCAtPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgKz0gbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgb2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvSVNPRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG4vKipcbiAqIE1lcmdlIHdlZWtkYXkgY29tcG9uZW50IGludG8gbW9yZSBjb21wbGV0ZWQgZGF0YVxuICogLSBbU3VuZGF5XSBbMTIvNy8yMDE0XSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqIC0gW1R1ZXNkYXldLCBbSmFudWFyeSAxMywgMjAxMl0gPT4gW1N1bmRheSAxMi83LzIwMTRdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgbmV3UmVzdWx0ID0gbmV4dFJlc3VsdC5jbG9uZSgpO1xuICAgICAgICBuZXdSZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICBuZXdSZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV3UmVzdWx0LnRleHQ7XG5cbiAgICAgICAgbmV3UmVzdWx0LnN0YXJ0LmFzc2lnbihcIndlZWtkYXlcIiwgY3VycmVudFJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgaWYgKG5ld1Jlc3VsdC5lbmQpIHtcbiAgICAgICAgICAgIG5ld1Jlc3VsdC5lbmQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICB9XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgPVxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiZcbiAgICAgICAgICAgICFjdXJyZW50UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImhvdXJcIikgJiZcbiAgICAgICAgICAgIG5leHRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiZGF5XCIpO1xuICAgICAgICByZXR1cm4gd2Vla2RheVRoZW5Ob3JtYWxEYXRlICYmIHRleHRCZXR3ZWVuLm1hdGNoKC9eLD9cXHMqJC8pICE9IG51bGw7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIFBhcnNlciwgUmVmaW5lciB9IGZyb20gXCIuL2Nocm9ub1wiO1xuXG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyXCI7XG5pbXBvcnQgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lclwiO1xuaW1wb3J0IE92ZXJsYXBSZW1vdmFsUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRm9yd2FyZERhdGVSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXJcIjtcbmltcG9ydCBVbmxpa2VseUZvcm1hdEZpbHRlciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcbmltcG9ydCBJU09Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vY29tbW9uL3BhcnNlcnMvSVNPRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiwgc3RyaWN0TW9kZSA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiB7XG4gICAgY29uZmlndXJhdGlvbi5wYXJzZXJzLnVuc2hpZnQobmV3IElTT0Zvcm1hdFBhcnNlcigpKTtcblxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAvLyBVbmxpa2UgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lciwgdGhpcyByZWZpbmVyIHJlbGllcyBvbiBrbm93aW5nIGJvdGggZGF0ZSBhbmQgdGltZSBpbiBjYXNlcyB3aGVyZSB0aGUgdHpcbiAgICAvLyBpcyBhbWJpZ3VvdXMgKGluIHRlcm1zIG9mIERTVC9ub24tRFNUKS4gSXQgdGhlcmVmb3JlIG5lZWRzIHRvIGJlIGFwcGxpZWQgYXMgbGF0ZSBhcyBwb3NzaWJsZSBpbiB0aGUgcGFyc2luZy5cbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgT3ZlcmxhcFJlbW92YWxSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRm9yd2FyZERhdGVSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgVW5saWtlbHlGb3JtYXRGaWx0ZXIoc3RyaWN0TW9kZSkpO1xuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGFzc2lnblNpbWlsYXJUaW1lLCBpbXBseVNpbWlsYXJUaW1lIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbm93KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm93XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuZGVsZXRlKFwibWVyaWRpZW1cIik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b2RheVwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVzdGVyZGF5KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlCZWZvcmUocmVmZXJlbmNlLCAxKS5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UveWVzdGVyZGF5XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9tb3Jyb3cocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbW9ycm93XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBudW1EYXk6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlLCAtbnVtRGF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUFmdGVyKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBuRGF5czogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlLmdldFRpbWUoKSk7XG4gICAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgbkRheXMpO1xuXG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCBuZXdEYXRlKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgbmV3RGF0ZSk7XG4gICAgY29tcG9uZW50LmRlbGV0ZShcIm1lcmlkaWVtXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b25pZ2h0KHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b25pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0TmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSByZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmICh0YXJnZXREYXRlLmdldEhvdXJzKCkgPCA2KSB7XG4gICAgICAgIHRhcmdldERhdGUgPSBuZXcgRGF0ZSh0YXJnZXREYXRlLmdldFRpbWUoKSAtIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIH1cbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gMjApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ldmVuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXlFdmVuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKHRhcmdldERhdGUuZ2V0VGltZSgpIC0gMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UveWVzdGVyZGF5XCIpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvZXZlbmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlkbmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmIChyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkuZ2V0SG91cnMoKSA+IDIpIHtcbiAgICAgICAgLy8gVW5sZXNzIGl0J3MgdmVyeSBlYXJseSBtb3JuaW5nICgwfjJBTSksIHdlIGFzc3VtZSB0aGUgbWlkbmlnaHQgaXMgdGhlIGNvbWluZyBtaWRuaWdodC5cbiAgICAgICAgLy8gVGh1cywgaW5jcmVhc2luZyB0aGUgZGF5IGJ5IDEuXG4gICAgICAgIGNvbXBvbmVudC5hZGREdXJhdGlvbkFzSW1wbGllZCh7IGRheTogMSB9KTtcbiAgICB9XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21pZG5pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3JuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSA2KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9tb3JuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZnRlcm5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDE1KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9hZnRlcm5vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb24ocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCAxMik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vb25cIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGF0ZXNcIjtcbmltcG9ydCAqIGFzIHJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKG5vd3x0b2RheXx0b25pZ2h0fHRvbW9ycm93fG92ZXJtb3Jyb3d8dG1yfHRtcnd8eWVzdGVyZGF5fGxhc3RcXHMqbmlnaHQpKD89XFxXfCQpL2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOQ2FzdWFsRGF0ZVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRhcmdldERhdGUgPSBjb250ZXh0LnJlZkRhdGU7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG5cbiAgICAgICAgc3dpdGNoIChsb3dlclRleHQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJub3dcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLm5vdyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b2RheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9kYXkoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwieWVzdGVyZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy55ZXN0ZXJkYXkoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwidG9tb3Jyb3dcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ0bXJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ0bXJ3XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b21vcnJvdyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b25pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b25pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcIm92ZXJtb3Jyb3dcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRoZURheUFmdGVyKGNvbnRleHQucmVmZXJlbmNlLCAyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJUZXh0Lm1hdGNoKC9sYXN0XFxzKm5pZ2h0LykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldERhdGUuZ2V0SG91cnMoKSA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRGF5ID0gbmV3IERhdGUodGFyZ2V0RGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNEYXkuc2V0RGF0ZShwcmV2aW91c0RheS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGUgPSBwcmV2aW91c0RheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5hZGRUYWcoXCJwYXJzZXIvRU5DYXN1YWxEYXRlUGFyc2VyXCIpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuaW1wb3J0ICogYXMgY2FzdWFsUmVmZXJlbmNlcyBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXNcIjtcblxuY29uc3QgUEFUVEVSTiA9IC8oPzp0aGlzKT9cXHN7MCwzfShtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0fG1pZG5pZ2h0fG1pZGRheXxub29uKSg/PVxcV3wkKS9pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbFRpbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsxXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWZ0ZXJub29uXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5hZnRlcm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuZXZlbmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1pZG5pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5tb3JuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub29uXCI6XG4gICAgICAgICAgICBjYXNlIFwibWlkZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsVGltZVBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi4vdXRpbHMvZGF0ZXNcIjtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwYXJzaW5nIGNvbXBvbmVudHMgYXQgdGhlIHdlZWtkYXkgKGNvbnNpZGVyaW5nIHRoZSBtb2RpZmllcikuIFRoZSB0aW1lIGFuZCB0aW1lem9uZSBpcyBhc3N1bWUgdG8gYmVcbiAqIHNpbWlsYXIgdG8gdGhlIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSByZWZlcmVuY2VcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheShcbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICB3ZWVrZGF5OiBXZWVrZGF5LFxuICAgIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiXG4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgcmVmRGF0ZSA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICBjb25zdCBkYXlzVG9XZWVrZGF5ID0gZ2V0RGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5LCBtb2RpZmllcik7XG5cbiAgICBsZXQgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgIGNvbXBvbmVudHMgPSBjb21wb25lbnRzLmFkZER1cmF0aW9uQXNJbXBsaWVkKHsgZGF5OiBkYXlzVG9XZWVrZGF5IH0pO1xuICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCB3ZWVrZGF5KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIFJldHVybnMgbnVtYmVyIG9mIGRheXMgZnJvbSByZWZEYXRlIHRvIHRoZSB3ZWVrZGF5LiBUaGUgcmVmRGF0ZSBkYXRlIGFuZCB0aW1lem9uZSBpbmZvcm1hdGlvbiBpcyB1c2VkLlxuICogQHBhcmFtIHJlZkRhdGVcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXksIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKSBhcyBXZWVrZGF5O1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgY2FzZSBcInRoaXNcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICAvLyBGcm9tIFN1bmRheSwgdGhlIG5leHQgU3VuZGF5IGlzIDcgZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgMSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgMiBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sIChyZXR1cm4gZW51bSB2YWx1ZSlcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgPyA3IDogd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gU2F0dXJkYXksIHRoZSBuZXh0IFNhdHVyZGF5IGlzIDcgZGF5cyBsYXRlciwgdGhlIG5leHQgU3VuZGF5IGlzIDgtZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgKDEgKyAxKSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgKDEgKyAyKSBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sXG4gICAgICAgICAgICAvLyAocmV0dXJuLCAyICsgW2VudW0gdmFsdWVdIGRheXMpXG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkgcmV0dXJuIDc7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIHJldHVybiAxICsgd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gd2Vla2RheXMsIG5leHQgTW9uIGlzIHRoZSBmb2xsb3dpbmcgd2VlaydzIE1vbiwgbmV4dCBUdWVzIHRoZSBmb2xsb3dpbmcgd2VlaydzIFR1ZXMsIGFuZCBzbyBvbi4uLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHdlZWsncyB3ZWVrZGF5IGFscmVhZHkgcGFzc2VkICh3ZWVrZGF5IDwgcmVmV2Vla2RheSksIHdlIHNpbXBseSBjb3VudCBmb3J3YXJkIHRvIG5leHQgd2Vla1xuICAgICAgICAgICAgLy8gKHNpbWlsYXIgdG8gJ3RoaXMnKS4gT3RoZXJ3aXNlLCBjb3VudCBmb3J3YXJkIHRvIHRoaXMgd2VlaywgdGhlbiBhZGQgYW5vdGhlciA3IGRheXMuXG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IHJlZldlZWtkYXkgJiYgd2Vla2RheSAhPSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpICsgNztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgYmFja3dhcmQgPSBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgY29uc3QgZm9yd2FyZCA9IGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGZvcndhcmQgPCAtYmFja3dhcmQgPyBmb3J3YXJkIDogYmFja3dhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZm9yd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGZvcndhcmRDb3VudCA8IDApIHtcbiAgICAgICAgZm9yd2FyZENvdW50ICs9IDc7XG4gICAgfVxuICAgIHJldHVybiBmb3J3YXJkQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGJhY2t3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoYmFja3dhcmRDb3VudCA+PSAwKSB7XG4gICAgICAgIGJhY2t3YXJkQ291bnQgLT0gNztcbiAgICB9XG4gICAgcmV0dXJuIGJhY2t3YXJkQ291bnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBXRUVLREFZX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi93ZWVrZGF5c1wiO1xuaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIig/Oig/OlxcXFwsfFxcXFwofFxcXFxcdUZGMDgpXFxcXHMqKT9cIiArXG4gICAgICAgIFwiKD86b25cXFxccyo/KT9cIiArXG4gICAgICAgIFwiKD86KHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqKT9cIiArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oV0VFS0RBWV9ESUNUSU9OQVJZKX18d2Vla2VuZHx3ZWVrZGF5KWAgK1xuICAgICAgICBcIig/OlxcXFxzKig/OlxcXFwsfFxcXFwpfFxcXFxcdUZGMDkpKT9cIiArXG4gICAgICAgIFwiKD86XFxcXHMqKHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqd2Vlayk/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBXRUVLREFZX0dST1VQID0gMjtcbmNvbnN0IFBPU1RGSVhfR1JPVVAgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTldlZWtkYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFtQUkVGSVhfR1JPVVBdO1xuICAgICAgICBjb25zdCBwb3N0Zml4ID0gbWF0Y2hbUE9TVEZJWF9HUk9VUF07XG4gICAgICAgIGxldCBtb2RpZmllcldvcmQgPSBwcmVmaXggfHwgcG9zdGZpeDtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkIHx8IFwiXCI7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcldvcmQgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXJXb3JkID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibGFzdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcIm5leHRcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIm5leHRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJ0aGlzXCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJ0aGlzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWVrZGF5X3dvcmQgPSBtYXRjaFtXRUVLREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgd2Vla2RheTtcbiAgICAgICAgaWYgKFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBXRUVLREFZX0RJQ1RJT05BUllbd2Vla2RheV93b3JkXTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZW5kXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZGVwZW5kcyBvbiB3aGF0IGRheXMgYXJlIHdlZWtlbmQgc2V0dGluZywgYnV0IHR5cGljYWxseTpcbiAgICAgICAgICAgIC8vICdUaGlzL25leHQgd2Vla2VuZCcgbWVhbnMgdGhlIGNvbWluZyBTYXR1cmRheSwgJ2xhc3Qgd2Vla2VuZCcgbWVhbnMgbGFzdCBTdW5kYXkuXG4gICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyBXZWVrZGF5LlNVTkRBWSA6IFdlZWtkYXkuU0FUVVJEQVk7XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheV93b3JkID09IFwid2Vla2RheVwiKSB7XG4gICAgICAgICAgICAvLyBJbiBFbmdsaXNoLCB0aGUgXCJ3ZWVrZGF5XCIgbWVhbnMgYW55IGRheSBvZiB0aGUgd2VlayBleGNlcHQgd2Vla2VuZC5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxzbyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZW5kIHJlZiwgdGhpcyBtZWFucyB0aGUgY29taW5nIE1vbmRheSBvciBsYXN0IEZyaWRheS5cbiAgICAgICAgICAgIC8vIC0gT24gd2Vla2RheSByZWYsIHRoaXMgbWVhbnMgdGhlIG5leHQvbGFzdCB3b3JraW5nIGRheS5cbiAgICAgICAgICAgIGNvbnN0IHJlZldlZWtkYXkgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKS5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZIHx8IHJlZldlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuRlJJREFZIDogV2Vla2RheS5NT05EQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSByZWZXZWVrZGF5IC0gMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyB3ZWVrZGF5IC0gMSA6IHdlZWtkYXkgKyAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSAod2Vla2RheSAlIDUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KGNvbnRleHQucmVmZXJlbmNlLCB3ZWVrZGF5LCBtb2RpZmllcik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlclxcXFxzKnRoaXMpXFxcXHMqKCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pKD89XFxcXHMqKWAgKyBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PRElGSUVSX1dPUkRfR1JPVVAgPSAxO1xuY29uc3QgUkVMQVRJVkVfV09SRF9HUk9VUCA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IG1hdGNoW01PRElGSUVSX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVuaXRXb3JkID0gbWF0Y2hbUkVMQVRJVkVfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdGltZXVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVt1bml0V29yZF07XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibmV4dFwiIHx8IG1vZGlmaWVyLnN0YXJ0c1dpdGgoXCJhZnRlclwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gMTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXIgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoY29udGV4dC5yZWZlcmVuY2UuaW5zdGFudC5nZXRUaW1lKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgd2Vla1xuICAgICAgICBpZiAodW5pdFdvcmQubWF0Y2goL3dlZWsvaSkpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBtb250aFxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgvbW9udGgvaSkpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0RGF0ZSgxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyB5ZWFyXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC95ZWFyL2kpKSB7XG4gICAgICAgICAgICBkYXRlLnNldERhdGUoMSk7XG4gICAgICAgICAgICBkYXRlLnNldE1vbnRoKDApO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kTW9zdExpa2VseUFEWWVhciwgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcblxuLyoqXG4gKiBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChvciBkb3QgXCIuXCIpIGJldHdlZW4gbnVtYmVycy5cbiAqIEZvciBleGFtcGxlczpcbiAqIC0gNy8xMFxuICogLSA3LzEyLzIwMjBcbiAqIC0gNy4xMi4yMDIwXG4gKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKFteXFxcXGRdfF4pXCIgK1xuICAgICAgICBcIihbMC0zXXswLDF9WzAtOV17MX0pW1xcXFwvXFxcXC5cXFxcLV0oWzAtM117MCwxfVswLTldezF9KVwiICtcbiAgICAgICAgXCIoPzpbXFxcXC9cXFxcLlxcXFwtXShbMC05XXs0fXxbMC05XXsyfSkpP1wiICtcbiAgICAgICAgXCIoXFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgT1BFTklOR19HUk9VUCA9IDE7XG5jb25zdCBFTkRJTkdfR1JPVVAgPSA1O1xuXG5jb25zdCBGSVJTVF9OVU1CRVJTX0dST1VQID0gMjtcbmNvbnN0IFNFQ09ORF9OVU1CRVJTX0dST1VQID0gMztcblxuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgZ3JvdXBOdW1iZXJNb250aDogbnVtYmVyO1xuICAgIGdyb3VwTnVtYmVyRGF5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXR0bGVFbmRpYW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlck1vbnRoID0gbGl0dGxlRW5kaWFuID8gU0VDT05EX05VTUJFUlNfR1JPVVAgOiBGSVJTVF9OVU1CRVJTX0dST1VQO1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyRGF5ID0gbGl0dGxlRW5kaWFuID8gRklSU1RfTlVNQkVSU19HUk9VUCA6IFNFQ09ORF9OVU1CRVJTX0dST1VQO1xuICAgIH1cblxuICAgIHBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBob3cgcGF0dGVybiBpcyBleGVjdXRlZCBvbiByZW1haW5pbmcgdGV4dCBpbiBgY2hyb25vLnRzYCwgdGhlIGNoYXJhY3RlciBiZWZvcmUgdGhlIG1hdGNoIGNvdWxkXG4gICAgICAgIC8vIHN0aWxsIGJlIGEgbnVtYmVyIChlLmcuIFhbWC9ZWS9aWl0gb3IgWFhbL1lZL1paXSBvciBbWFgvWVkvXVpaKS4gV2Ugd2FudCB0byBjaGVjayBhbmQgc2tpcCB0aGVtLlxuICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbT1BFTklOR19HUk9VUF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleEVuZCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gbWF0Y2hbRU5ESU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIGlmICh0ZXh0QmVmb3JlLm1hdGNoKFwiXFxcXGQvPyRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4RW5kIDwgY29udGV4dC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleEVuZCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLm1hdGNoKFwiXi8/XFxcXGRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleCwgaW5kZXhFbmQpO1xuXG4gICAgICAgIC8vICcxLjEyJywgJzEuMTIuMTInIGlzIG1vcmUgbGlrZSBhIHZlcnNpb24gbnVtYmVyc1xuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZFxcLlxcZCQvKSB8fCB0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkezEsMn1cXC5cXGR7MSwyfVxccyokLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1NL2RkIC0+IE9LXG4gICAgICAgIC8vIE1NLmRkIC0+IE5HXG4gICAgICAgIGlmICghbWF0Y2hbWUVBUl9HUk9VUF0gJiYgdGV4dC5pbmRleE9mKFwiL1wiKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dCk7XG4gICAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KG1hdGNoW3RoaXMuZ3JvdXBOdW1iZXJNb250aF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlckRheV0pO1xuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMiAmJiBtb250aCA8PSAzMSkge1xuICAgICAgICAgICAgICAgICAgICBbZGF5LCBtb250aF0gPSBbbW9udGgsIGRheV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5hZGRUYWcoXCJwYXJzZXIvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlRHVyYXRpb24sIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IHJldmVyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgUEFUVEVSTl9OT19BQkJSID0gbmV3IFJlZ0V4cChcbiAgICBgKHRoaXN8bGFzdHxwYXN0fG5leHR8YWZ0ZXJ8XFxcXCt8LSlcXFxccyooJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLFxuICAgIFwiaVwiXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGxvd0FiYnJldmlhdGlvbnM6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbG93QWJicmV2aWF0aW9ucyA/IFBBVFRFUk4gOiBQQVRURVJOX05PX0FCQlI7XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKG1hdGNoWzJdKTtcbiAgICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGNhc2UgXCJsYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwicGFzdFwiOlxuICAgICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHJldmVyc2VEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgZHVyYXRpb24pO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBwYXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIElzUG9zaXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eWystXS9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXi0vaSkgIT0gbnVsbDtcbn1cblxuLyoqXG4gKiBNZXJnZXMgYSByZWxhdGl2ZSBkYXRhL3RpbWUgdGhhdCBjb21lcyBhZnRlciBhbiBhYnNvbHV0ZSBkYXRlLlxuICogLSBbMjAyMC0wMi0xM10gWysyIHdlZWtzXVxuICogLSBbbmV4dCB0dWVzZGF5XSBbKzEwIGRheXNdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VSZWxhdGl2ZUFmdGVyRGF0ZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCgvXlxccyokL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KSB8fCBJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBjb250ZXh0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZUR1cmF0aW9uKG5leHRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlRHVyYXRpb24odGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbURhdGUoY3VycmVudFJlc3VsdC5zdGFydC5kYXRlKCkpLFxuICAgICAgICAgICAgdGltZVVuaXRzXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5yZWZlcmVuY2UsXG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LmluZGV4LFxuICAgICAgICAgICAgYCR7Y3VycmVudFJlc3VsdC50ZXh0fSR7dGV4dEJldHdlZW59JHtuZXh0UmVzdWx0LnRleHR9YCxcbiAgICAgICAgICAgIGNvbXBvbmVudHNcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0LCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgcGFyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJldmVyc2VEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi9kdXJhdGlvblwiO1xuXG5mdW5jdGlvbiBoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9cXHMrKGJlZm9yZXxmcm9tKSQvaSkgIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYWZ0ZXJ8c2luY2UpJC9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGZvbGxvdyBieSBhbiBhYnNvbHV0ZSBkYXRlLlxuICogLSBbMiB3ZWVrcyBiZWZvcmVdIFsyMDIwLTAyLTEzXVxuICogLSBbMiBkYXlzIGFmdGVyXSBbbmV4dCBGcmlkYXldXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKiQvaTtcbiAgICB9XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBEYXRlcyBuZWVkIHRvIGJlIG5leHQgdG8gZWFjaCBvdGhlciB0byBnZXQgbWVyZ2VkXG4gICAgICAgIGlmICghdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IHJlbGF0aXZlIHRva2VucyB3ZXJlIHN3YWxsb3dlZCBieSB0aGUgZmlyc3QgZGF0ZS5cbiAgICAgICAgLy8gRS5nLiBbPHJlbGF0aXZlX2RhdGUxPiBmcm9tXSBbPGRhdGUyPl1cbiAgICAgICAgaWYgKCFoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkgJiYgIWhhc0ltcGxpZWRMYXRlclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IDxkYXRlMj4gaW1wbGllcyBhbiBhYnNvbHV0ZSBkYXRlXG4gICAgICAgIHJldHVybiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwiZGF5XCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJtb250aFwiKSAmJiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwieWVhclwiKTtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBsZXQgZHVyYXRpb24gPSBwYXJzZUR1cmF0aW9uKGN1cnJlbnRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbURhdGUobmV4dFJlc3VsdC5zdGFydC5kYXRlKCkpLFxuICAgICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFlFQVJfU1VGRklYX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGBeXFxcXHMqKCR7WUVBUl9QQVRURVJOfSlgLCBcImlcIik7XG5jb25zdCBZRUFSX0dST1VQID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFlFQVJfU1VGRklYX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBzdWZmaXggbWF0Y2ggaXMganVzdCBhIHNob3J0IG51bWJlciwgZS5nLiBcIjE0LzQgOTBcIiwgZG9uJ3QgYXNzdW1lIGl0IHllYXIuXG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0udHJpbSgpLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgeWVhcjogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcblxuICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIGNvbnNpc3RzIG9mIHRoZSB3aG9sZSB0ZXh0IChlLmcuIFwiMjAyNFwiLCBcIk1heVwiLCBldGMpLFxuICAgICAgICAvLyB0aGVuIGl0IGlzIHVubGlrZWx5IHRvIGJlIGEgZGF0ZS5cbiAgICAgICAgaWYgKHRleHQgPT09IGNvbnRleHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIHdvcmQgXCJtYXlcIiBpcyBhIG1vbnRoIG5hbWUsIGJ1dCBpdCBpcyBhbHNvIGEgbW9kYWwgdmVyYi5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgYmVmb3JlIFwibWF5XCIgZm9sbG93cyBzb21lIGFsbG93ZWQgcGF0dGVybnMuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwibWF5XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5pbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0QmVmb3JlLm1hdGNoKC9cXGIoaW4pJC9pKSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIFwidGhlIHNlY29uZFwiIGNvdWxkIHJlZmVyIHRvIHRoZSBvcmRpbmFsIG51bWJlciBvciB0aW1ldW5pdC5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcInRoZSBzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcblxuaW1wb3J0IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlclwiO1xuaW1wb3J0IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG5pbXBvcnQgeyBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiO1xuaW1wb3J0IEVOQ2FzdWFsRGF0ZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlclwiO1xuaW1wb3J0IEVOQ2FzdWFsVGltZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlclwiO1xuaW1wb3J0IEVOV2Vla2RheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlclwiO1xuaW1wb3J0IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXJcIjtcblxuaW1wb3J0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuLi8uLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXJcIjtcbmltcG9ydCBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCAqY2FzdWFsKiB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vLlxuICAgICAqIEl0IGNhbGxzIHtATGluayBjcmVhdGVDb25maWd1cmF0aW9ufSBhbmQgaW5jbHVkZXMgYWRkaXRpb25hbCBwYXJzZXJzLlxuICAgICAqL1xuICAgIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbERhdGVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsVGltZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5Nb250aE5hbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9ub1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmljdE1vZGUgSWYgdGhlIHRpbWV1bml0IG1lbnRpb25pbmcgc2hvdWxkIGJlIHN0cmljdCwgbm90IGNhc3VhbFxuICAgICAqIEBwYXJhbSBsaXR0bGVFbmRpYW4gSWYgZm9ybWF0IHNob3VsZCBiZSBkYXRlLWZpcnN0L2xpdHRsZUVuZGlhbiAoZS5nLiBlbl9VSyksIG5vdCBtb250aC1maXJzdC9taWRkbGVFbmRpYW4gKGUuZy4gZW5fVVMpXG4gICAgICovXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbihzdHJpY3RNb2RlID0gdHJ1ZSwgbGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcihsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcigvKnNob3VsZFNraXBZZWFyTGlrZURhdGU9Ki8gbGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOV2Vla2RheVBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZmluZXJzOiBbbmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaWN0TW9kZVxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcnNlcnMudW5zaGlmdChuZXcgRU5ZZWFyTW9udGhEYXlQYXJzZXIoLypzdHJpY3RNb250aERhdGVPcmRlcj0qLyBzdHJpY3RNb2RlKSk7XG5cbiAgICAgICAgLy8gVGhlc2UgcmVsYXRpdmUtZGF0ZXMgY29uc2lkZXJhdGlvbiBzaG91bGQgYmUgZG9uZSBiZWZvcmUgb3RoZXIgY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gUmUtYXBwbHkgdGhlIGRhdGUgdGltZSByZWZpbmVyIGFnYWluIGFmdGVyIHRoZSB0aW1lem9uZSByZWZpbmVtZW50IGFuZCBleGNsdXNpb24gaW4gY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCB5ZWFyIGFmdGVyIG1lcmdpbmcgZGF0ZSBhbmQgdGltZVxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGRhdGUgcmFuZ2UgcmVmaW5lciBhdCB0aGUgZW5kIChhZnRlciBhbGwgb3RoZXIgcmVmaW5lbWVudHMpLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEFzeW5jRGVidWdCbG9jaywgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi90aW1lem9uZVwiO1xuXG4vKipcbiAqIENocm9ubyBjb25maWd1cmF0aW9uLlxuICogSXQgaXMgc2ltcGx5IGFuIG9yZGVyZWQgbGlzdCBvZiBwYXJzZXJzIGFuZCByZWZpbmVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHBhcnNlcnM6IFBhcnNlcltdO1xuICAgIHJlZmluZXJzOiBSZWZpbmVyW107XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUGFyc2VyKi5cbiAqXG4gKiBFYWNoIHBhcnNlciBzaG91bGQgcmVjb2duaXplIGFuZCBoYW5kbGUgYSBjZXJ0YWluIGRhdGUgZm9ybWF0LlxuICogQ2hyb25vIHVzZXMgbXVsdGlwbGUgcGFyc2VzIChhbmQgcmVmaW5lcnMpIHRvZ2V0aGVyIGZvciBwYXJzaW5nIHRoZSBpbnB1dC5cbiAqXG4gKiBUaGUgcGFyc2VyIGltcGxlbWVudGF0aW9uIG11c3QgcHJvdmlkZSB7QExpbmsgcGF0dGVybiB8IHBhdHRlcm4oKX0gZm9yIHRoZSBkYXRlIGZvcm1hdC5cbiAqXG4gKiBUaGUge0BMaW5rIGV4dHJhY3QgfCBleHRyYWN0KCl9IG1ldGhvZCBpcyBjYWxsZWQgd2l0aCB0aGUgcGF0dGVybidzICptYXRjaCouXG4gKiBUaGUgbWF0Y2hpbmcgYW5kIGV4dHJhY3RpbmcgaXMgY29udHJvbGxlZCBhbmQgYWRqdXN0ZWQgdG8gYXZvaWQgZm9yIG92ZXJsYXBwaW5nIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VyIHtcbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwO1xuICAgIGV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIGFic3RyYWN0aW9uIGZvciBDaHJvbm8gKlJlZmluZXIqLlxuICpcbiAqIEVhY2ggcmVmaW5lciB0YWtlcyB0aGUgbGlzdCBvZiByZXN1bHRzIChmcm9tIHBhcnNlcnMgb3Igb3RoZXIgcmVmaW5lcnMpIGFuZCByZXR1cm5zIGFub3RoZXIgbGlzdCBvZiByZXN1bHRzLlxuICogQ2hyb25vIGFwcGxpZXMgZWFjaCByZWZpbmVyIGluIG9yZGVyIGFuZCByZXR1cm4gdGhlIG91dHB1dCBmcm9tIHRoZSBsYXN0IHJlZmluZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmaW5lciB7XG4gICAgcmVmaW5lOiAoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSkgPT4gUGFyc2luZ1Jlc3VsdFtdO1xufVxuXG4vKipcbiAqIFRoZSBDaHJvbm8gb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ2hyb25vIHtcbiAgICBwYXJzZXJzOiBBcnJheTxQYXJzZXI+O1xuICAgIHJlZmluZXJzOiBBcnJheTxSZWZpbmVyPjtcblxuICAgIGRlZmF1bHRDb25maWcgPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24gfHwgdGhpcy5kZWZhdWx0Q29uZmlnLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucGFyc2Vyc107XG4gICAgICAgIHRoaXMucmVmaW5lcnMgPSBbLi4uY29uZmlndXJhdGlvbi5yZWZpbmVyc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBDaHJvbm8gb2JqZWN0IHdpdGggdGhlIHNhbWUgY29uZmlndXJhdGlvbiAoYHBhcnNlcnNgIGFuZCBgcmVmaW5lcnNgKVxuICAgICAqL1xuICAgIGNsb25lKCk6IENocm9ubyB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hyb25vKHtcbiAgICAgICAgICAgIHBhcnNlcnM6IFsuLi50aGlzLnBhcnNlcnNdLFxuICAgICAgICAgICAgcmVmaW5lcnM6IFsuLi50aGlzLnJlZmluZXJzXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCBmb3IgY2FsbGluZyB7QExpbmsgcGFyc2UgfCBwYXJzZSgpIH0gdGhlbiB0cmFuc2Zvcm0gdGhlIHJlc3VsdCBpbnRvIEphdmFzY3JpcHQncyBEYXRlIG9iamVjdFxuICAgICAqIEByZXR1cm4gRGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBmaXJzdCBwYXJzZSByZXN1bHRcbiAgICAgKi9cbiAgICBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnBhcnNlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA+IDAgPyByZXN1bHRzWzBdLnN0YXJ0LmRhdGUoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgUGFyc2luZ0NvbnRleHQodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcblxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRSZXN1bHRzID0gQ2hyb25vLmV4ZWN1dGVQYXJzZXIoY29udGV4dCwgcGFyc2VyKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChwYXJzZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVmaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVmaW5lcikge1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZmluZXIucmVmaW5lKGNvbnRleHQsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleGVjdXRlUGFyc2VyKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBwYXJzZXI6IFBhcnNlcikge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBwYXJzZXIucGF0dGVybihjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0O1xuICAgICAgICBsZXQgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWF0Y2ggaW5kZXggb24gdGhlIGZ1bGwgdGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBvcmlnaW5hbFRleHQubGVuZ3RoIC0gcmVtYWluaW5nVGV4dC5sZW5ndGg7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIuZXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGZhaWxzLCBtb3ZlIG9uIGJ5IDFcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyc2VkUmVzdWx0OiBQYXJzaW5nUmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdC5zdGFydCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFyc2VkSW5kZXggPSBwYXJzZWRSZXN1bHQuaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRUZXh0ID0gcGFyc2VkUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGV4dHJhY3RlZCAoYXQgaW5kZXg9JHtwYXJzZWRJbmRleH0pICcke3BhcnNlZFRleHR9J2ApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocGFyc2VkUmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKHBhcnNlZEluZGV4ICsgcGFyc2VkVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzaW5nQ29udGV4dCBpbXBsZW1lbnRzIERlYnVnSGFuZGxlciB7XG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG9wdGlvbjogUGFyc2luZ09wdGlvbjtcbiAgICByZWFkb25seSByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkLiBVc2UgYHJlZmVyZW5jZS5pbnN0YW50YCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHJlZkRhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbiA/PyB7fTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbUlucHV0KHJlZkRhdGUsIHRoaXMub3B0aW9uLnRpbWV6b25lcyk7XG4gICAgICAgIHRoaXMucmVmRGF0ZSA9IHRoaXMucmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoY29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGlmIChjb21wb25lbnRzIGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZmVyZW5jZSwgY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dE9yRW5kSW5kZXg6IG51bWJlciB8IHN0cmluZyxcbiAgICAgICAgc3RhcnRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICAgICAgZW5kQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHNcbiAgICApOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB0ZXh0T3JFbmRJbmRleCA9PT0gXCJzdHJpbmdcIiA/IHRleHRPckVuZEluZGV4IDogdGhpcy50ZXh0LnN1YnN0cmluZyhpbmRleCwgdGV4dE9yRW5kSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhzdGFydENvbXBvbmVudHMpIDogbnVsbDtcbiAgICAgICAgY29uc3QgZW5kID0gZW5kQ29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoZW5kQ29tcG9uZW50cykgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgaW5kZXgsIHRleHQsIHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIGRlYnVnKGJsb2NrOiBBc3luY0RlYnVnQmxvY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmRlYnVnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlcjogRGVidWdIYW5kbGVyID0gPERlYnVnSGFuZGxlcj50aGlzLm9wdGlvbi5kZWJ1ZztcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICIvKipcbiAqIENocm9ubyBjb21wb25lbnRzIGZvciBFbmdsaXNoIHN1cHBvcnQgKCpwYXJzZXJzKiwgKnJlZmluZXJzKiwgYW5kICpjb25maWd1cmF0aW9uKilcbiAqXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqY2FzdWFsKiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqc3RyaWN0KiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3QgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ29uZmlndXJhdGlvbih0cnVlLCBmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqVUstc3R5bGUqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IEdCID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24odHJ1ZSkpO1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZURhdGUoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4iLCAiaW1wb3J0ICogYXMgZW4gZnJvbSBcIi4vbG9jYWxlcy9lblwiO1xuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHsgZW4sIENocm9ubywgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciwgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH07XG5cbi8vIEV4cG9ydCBhbGwgbG9jYWxlc1xuaW1wb3J0ICogYXMgZGUgZnJvbSBcIi4vbG9jYWxlcy9kZVwiO1xuaW1wb3J0ICogYXMgZnIgZnJvbSBcIi4vbG9jYWxlcy9mclwiO1xuaW1wb3J0ICogYXMgamEgZnJvbSBcIi4vbG9jYWxlcy9qYVwiO1xuaW1wb3J0ICogYXMgcHQgZnJvbSBcIi4vbG9jYWxlcy9wdFwiO1xuaW1wb3J0ICogYXMgbmwgZnJvbSBcIi4vbG9jYWxlcy9ubFwiO1xuaW1wb3J0ICogYXMgemggZnJvbSBcIi4vbG9jYWxlcy96aFwiO1xuaW1wb3J0ICogYXMgcnUgZnJvbSBcIi4vbG9jYWxlcy9ydVwiO1xuaW1wb3J0ICogYXMgZXMgZnJvbSBcIi4vbG9jYWxlcy9lc1wiO1xuaW1wb3J0ICogYXMgdWsgZnJvbSBcIi4vbG9jYWxlcy91a1wiO1xuaW1wb3J0ICogYXMgaXQgZnJvbSBcIi4vbG9jYWxlcy9pdFwiO1xuaW1wb3J0ICogYXMgc3YgZnJvbSBcIi4vbG9jYWxlcy9zdlwiO1xuXG5leHBvcnQgeyBkZSwgZnIsIGphLCBwdCwgbmwsIHpoLCBydSwgZXMsIHVrLCBpdCwgc3YgfTtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uc3RyaWN0fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaWN0ID0gZW4uc3RyaWN0O1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWx9XG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBlbi5jYXN1YWw7XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dDogc3RyaW5nLCByZWY/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbik6IFBhcnNlZFJlc3VsdFtdIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsLnBhcnNlRGF0ZSgpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxvQ0FBQUEsVUFBQUMsU0FBQTtBQUFBLE1BQUMsU0FBUyxHQUFFLEdBQUU7QUFBQyxrQkFBVSxPQUFPRCxZQUFTLGVBQWEsT0FBT0MsVUFBT0EsUUFBTyxVQUFRLEVBQUUsSUFBRSxjQUFZLE9BQU8sVUFBUSxPQUFPLE1BQUksT0FBTyxDQUFDLEtBQUcsSUFBRSxlQUFhLE9BQU8sYUFBVyxhQUFXLEtBQUcsTUFBTSxRQUFNLEVBQUU7QUFBQSxJQUFDLEdBQUVELFdBQU0sV0FBVTtBQUFDO0FBQWEsVUFBSSxJQUFFLEtBQUksSUFBRSxLQUFJLElBQUUsTUFBSyxJQUFFLGVBQWMsSUFBRSxVQUFTLElBQUUsVUFBUyxJQUFFLFFBQU8sSUFBRSxPQUFNLElBQUUsUUFBTyxJQUFFLFNBQVEsSUFBRSxXQUFVLElBQUUsUUFBTyxJQUFFLFFBQU8sSUFBRSxnQkFBZSxJQUFFLDhGQUE2RixJQUFFLHVGQUFzRixJQUFFLEVBQUMsTUFBSyxNQUFLLFVBQVMsMkRB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LEdBQUVBLEdBQUUsVUFBUSxXQUFVO0FBQUMsaUJBQU0sRUFBRSxLQUFLLEdBQUcsU0FBUyxNQUFJO0FBQUEsUUFBRSxHQUFFQSxHQUFFLFNBQU8sU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGNBQUlDLEtBQUUsRUFBRUYsRUFBQztBQUFFLGlCQUFPLEtBQUssUUFBUUMsRUFBQyxLQUFHQyxNQUFHQSxNQUFHLEtBQUssTUFBTUQsRUFBQztBQUFBLFFBQUMsR0FBRVEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxpQkFBTyxFQUFFRCxFQUFDLElBQUUsS0FBSyxRQUFRQyxFQUFDO0FBQUEsUUFBQyxHQUFFUSxHQUFFLFdBQVMsU0FBU1QsSUFBRUMsSUFBRTtBQUFDLGlCQUFPLEtBQUssTUFBTUEsRUFBQyxJQUFFLEVBQUVELEVBQUM7QUFBQSxRQUFDLEdBQUVTLEdBQUUsS0FBRyxTQUFTVCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsaUJBQU8sRUFBRSxFQUFFRixFQUFDLElBQUUsS0FBS0MsRUFBQyxJQUFFLEtBQUssSUFBSUMsSUFBRUYsRUFBQztBQUFBLFFBQUMsR0FBRVMsR0FBRSxPQUFLLFdBQVU7QUFBQyxpQkFBTyxLQUFLLE1BQU0sS0FBSyxRQUFRLElBQUUsR0FBRztBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFdBQVU7QUFBQyxpQkFBTyxLQUFLLEdBQUcsUUFBUTtBQUFBLFFBQUMsR0FBRUEsR0FBRSxVQUFRLFNBQVNULElBQUVDLElBQUU7QUFBQyxjQUFJQyxLQUFFLE1BQUtDLEtBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRUYsRUFBQyxLQUFHQSxJQUFFUyxLQUFFLEVBQUUsRUFBRVYsRUFBQyxHQUFFVyxLQUFFLFNBQVNYLElBQUVDLElBQUU7QUFBQyxnQkFBSUcsS0FBRSxFQUFFLEVBQUVGLEdBQUUsS0FBRyxLQUFLLElBQUlBLEdBQUUsSUFBR0QsSUFBRUQsRUFBQyxJQUFFLElBQUksS0FBS0UsR0FBRSxJQUFHRCxJQUFFRCxFQUFDLEdBQUVFLEVBQUM7QUFBRSxtQkFBT0MsS0FB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QVEsTUFBTSxLQUFLLGtCQUFrQixVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRXRFLFNBQ0U7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNDLHNCQUFxQjtBQUFBLE1BQ3JCLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaO0FBQUEsTUFDQSxvQkFDRSw0Q0FBQyxnQkFBSyxVQUFMLEVBQWMsU0FBUSxZQUFXLFVBQVUsa0JBQWtCLGNBQWMsVUFDekUsb0JBQVUsSUFBSSxVQUNiLDRDQUFDLGdCQUFLLFNBQVMsTUFBZCxFQUE4QixPQUFPLE1BQU0sT0FBTyxRQUExQixJQUFnQyxDQUMxRCxHQUNIO0FBQUEsTUFHRCxnQkFBTSxJQUFJLFVBQ1Q7QUFBQSxRQUFDLGdCQUFLO0FBQUEsUUFBTDtBQUFBLFVBRUMsT0FBTyxPQUFPLEtBQUssS0FBSztBQUFBLFVBQ3hCLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEtBQUssT0FBTyxPQUFPLGlCQUFNLGNBQWMsRUFBRSxDQUFDO0FBQUEsVUFDeEUsU0FDRSw2Q0FBQywwQkFDQztBQUFBLHdEQUFDLGtCQUFPLGlCQUFQLEVBQXVCLFNBQVMsT0FBTyxLQUFLLEtBQUssR0FBRztBQUFBLFlBQ3JELDRDQUFDLGtCQUFPLE9BQVAsRUFBYSxTQUFTLE9BQU8sS0FBSyxLQUFLLEdBQUc7QUFBQSxhQUM3QztBQUFBO0FBQUEsUUFQRyxLQUFLO0FBQUEsTUFTWixDQUNEO0FBQUE7QUFBQSxFQUNIO0FBRUo7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiZSIsICJuIiwgInIiLCAiaSIsICJzIiwgInUiLCAiYSIsICJNIiwgIm0iLCAiZiIsICJsIiwgIiQiLCAieSIsICJ2IiwgImciLCAiRCIsICJvIiwgImQiLCAiYyIsICJoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImUiLCAidCIsICJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInIiLCAiZSIsICJ0IiwgIm8iLCAibiIsICJpIiwgImQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJuIiwgImkiLCAibyIsICJyIiwgImUiLCAidSIsICJmIiwgInMiLCAiYSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImkiLCAiZSIsICJzIiwgImYiLCAibiIsICJ1IiwgInIiLCAibyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpIiwgIm4iLCAiZiIsICJlIiwgIk1lcmlkaWVtIiwgIldlZWtkYXkiLCAiTW9udGgiLCAiUEFUVEVSTiIsICJNT05USF9OQU1FX0dST1VQIiwgIkRBVEVfR1JPVVAiLCAiREFURV9UT19HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJZRUFSX0dST1VQIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAic3RyaWN0IiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJTVFJJQ1RfUEFUVEVSTiIsICJyZWZEYXRlIiwgImRheXNUb0FkZCIsICJQQVRURVJOIiwgIllFQVJfTlVNQkVSX0dST1VQIiwgIk1PTlRIX05VTUJFUl9HUk9VUCIsICJEQVRFX05VTUJFUl9HUk9VUCIsICJjb25maWd1cmF0aW9uIiwgIlBBVFRFUk4iLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlBSRUZJWF9HUk9VUCIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiY29uZmlndXJhdGlvbiIsICJjYXN1YWwiLCAiY2FzdWFsIiwgImltcG9ydF90aW1lem9uZSIsICJkYXlqcyIsICJhZHZhbmNlZEZvcm1hdFBsdWdpbiIsICJ3ZWVrT2ZZZWFyUGx1Z2luIiwgInV0Y1BsdWdpbiIsICJ0aW1lem9uZVBsdWdpbiIsICJyZWxhdGl2ZVRpbWVQbHVnaW4iXQp9Cg==
