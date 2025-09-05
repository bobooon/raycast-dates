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

// node_modules/dayjs/plugin/quarterOfYear.js
var require_quarterOfYear = __commonJS({
  "node_modules/dayjs/plugin/quarterOfYear.js"(exports2, module2) {
    !(function(t, n) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_quarterOfYear = n();
    })(exports2, (function() {
      "use strict";
      var t = "month", n = "quarter";
      return function(e, i) {
        var r = i.prototype;
        r.quarter = function(t2) {
          return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
        };
        var s = r.add;
        r.add = function(e2, i2) {
          return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
        };
        var u = r.startOf;
        r.startOf = function(e2, i2) {
          var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
          if (r2.p(e2) === n) {
            var o = this.quarter() - 1;
            return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
          }
          return u.bind(this)(e2, i2);
        };
      };
    }));
  }
});

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

// src/datetime.tsx
var datetime_exports = {};
__export(datetime_exports, {
  default: () => Datetime
});
module.exports = __toCommonJS(datetime_exports);
var import_api = require("@raycast/api");

// node_modules/chrono-node/dist/esm/results.js
var import_quarterOfYear = __toESM(require_quarterOfYear(), 1);
var import_dayjs2 = __toESM(require_dayjs_min(), 1);

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
var import_dayjs = __toESM(require_dayjs_min(), 1);
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
  if ((0, import_dayjs.default)(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) && !(0, import_dayjs.default)(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
    return matchedTimezone.timezoneOffsetDuringDst;
  }
  return matchedTimezone.timezoneOffsetNonDst;
}

// node_modules/chrono-node/dist/esm/calculation/duration.js
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
import_dayjs2.default.extend(import_quarterOfYear.default);
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
    const refDayJs = reference.getDateWithAdjustedTimezone();
    this.imply("day", refDayJs.getDate());
    this.imply("month", refDayJs.getMonth() + 1);
    this.imply("year", refDayJs.getFullYear());
    this.imply("hour", 12);
    this.imply("minute", 0);
    this.imply("second", 0);
    this.imply("millisecond", 0);
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
  delete(component) {
    delete this.knownValues[component];
    delete this.impliedValues[component];
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
  dayjs() {
    return (0, import_dayjs2.default)(this.dateWithoutTimezoneAdjustment());
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
  static createRelativeFromReference(reference, duration) {
    let date = addDuration(reference.getDateWithAdjustedTimezone(), duration);
    const components = new _ParsingComponents(reference);
    components.addTag("result/relativeDate");
    if (duration["hour"] || duration["minute"] || duration["second"]) {
      components.addTag("result/relativeDateAndTime");
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      components.assign("timezoneOffset", reference.getTimezoneOffset());
    } else {
      implySimilarTime(components, date);
      components.imply("timezoneOffset", reference.getTimezoneOffset());
      if (duration["day"]) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.assign("weekday", date.getDay());
      } else if (duration["week"]) {
        components.assign("day", date.getDate());
        components.assign("month", date.getMonth() + 1);
        components.assign("year", date.getFullYear());
        components.imply("weekday", date.getDay());
      } else {
        components.imply("day", date.getDate());
        if (duration["month"]) {
          components.assign("month", date.getMonth() + 1);
          components.assign("year", date.getFullYear());
        } else {
          components.imply("month", date.getMonth() + 1);
          if (duration["year"]) {
            components.assign("year", date.getFullYear());
          } else {
            components.imply("year", date.getFullYear());
          }
        }
      }
    }
    return components;
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
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
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
  const refMoment = (0, import_dayjs3.default)(refDate);
  let dateMoment = refMoment;
  dateMoment = dateMoment.month(month - 1);
  dateMoment = dateMoment.date(day);
  dateMoment = dateMoment.year(refMoment.year());
  const nextYear = dateMoment.add(1, "y");
  const lastYear = dateMoment.add(-1, "y");
  if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = nextYear;
  } else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = lastYear;
  }
  return dateMoment.year();
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
  day: "d",
  days: "d",
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
  d: "d",
  day: "d",
  days: "d",
  w: "w",
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
function parseTimeUnits(timeunitText) {
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
    const timeUnits = parseTimeUnits(match[1]);
    if (!timeUnits) {
      return null;
    }
    context.debug(() => {
      console.log(timeUnits);
      console.log(ParsingComponents.createRelativeFromReference(context.reference, timeUnits));
    });
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
    const duration = parseTimeUnits(match[1]);
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
    const timeUnits = parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
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
    if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
      let fromMoment = fromResult.start.dayjs();
      let toMoment = toResult.start.dayjs();
      if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
        toMoment = toMoment.add(7, "days");
        toResult.start.imply("day", toMoment.date());
        toResult.start.imply("month", toMoment.month() + 1);
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-7, "days");
        fromResult.start.imply("day", fromMoment.date());
        fromResult.start.imply("month", fromMoment.month() + 1);
        fromResult.start.imply("year", fromMoment.year());
      } else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
        toMoment = toMoment.add(1, "years");
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-1, "years");
        fromResult.start.imply("year", fromMoment.year());
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

// node_modules/chrono-node/dist/esm/utils/dayjs.js
function implyTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  implySimilarDate2(component, targetDayJs);
  implySimilarTime2(component, targetDayJs);
}
function assignSimilarDate2(component, targetDayJs) {
  component.assign("day", targetDayJs.date());
  component.assign("month", targetDayJs.month() + 1);
  component.assign("year", targetDayJs.year());
}
function assignSimilarTime2(component, targetDayJs) {
  component.assign("hour", targetDayJs.hour());
  component.assign("minute", targetDayJs.minute());
  component.assign("second", targetDayJs.second());
  component.assign("millisecond", targetDayJs.millisecond());
  if (component.get("hour") < 12) {
    component.assign("meridiem", Meridiem.AM);
  } else {
    component.assign("meridiem", Meridiem.PM);
  }
}
function implySimilarDate2(component, targetDayJs) {
  component.imply("day", targetDayJs.date());
  component.imply("month", targetDayJs.month() + 1);
  component.imply("year", targetDayJs.year());
}
function implySimilarTime2(component, targetDayJs) {
  component.imply("hour", targetDayJs.hour());
  component.imply("minute", targetDayJs.minute());
  component.imply("second", targetDayJs.second());
  component.imply("millisecond", targetDayJs.millisecond());
}

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
      const nextDayJs = endDateTime.dayjs().add(1, "day");
      if (endDateTime.isCertain("day")) {
        assignSimilarDate2(endDateTime, nextDayJs);
      } else {
        implySimilarDate2(endDateTime, nextDayJs);
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
var import_dayjs5 = __toESM(require_dayjs_min(), 1);
var ForwardDateRefiner = class {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach((result) => {
      let refMoment = (0, import_dayjs5.default)(context.reference.getDateWithAdjustedTimezone());
      if (result.start.isOnlyTime() && context.reference.instant > result.start.date()) {
        const refDate = context.reference.getDateWithAdjustedTimezone();
        const refFollowingDay = new Date(refDate);
        refFollowingDay.setDate(refFollowingDay.getDate() + 1);
        implySimilarDate(result.start, refFollowingDay);
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} time from the ref date (${refDate}) to the following day (${refFollowingDay})`);
        });
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate(result.end, refFollowingDay);
          if (result.start.date() > result.end.date()) {
            refFollowingDay.setDate(refFollowingDay.getDate() + 1);
            implySimilarDate(result.end, refFollowingDay);
          }
        }
      }
      if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
        if (refMoment.day() >= result.start.get("weekday")) {
          refMoment = refMoment.day(result.start.get("weekday") + 7);
        } else {
          refMoment = refMoment.day(result.start.get("weekday"));
        }
        result.start.imply("day", refMoment.date());
        result.start.imply("month", refMoment.month() + 1);
        result.start.imply("year", refMoment.year());
        context.debug(() => {
          console.log(`${this.constructor.name} adjusted ${result} weekday (${result.start})`);
        });
        if (result.end && result.end.isOnlyWeekdayComponent()) {
          if (refMoment.day() > result.end.get("weekday")) {
            refMoment = refMoment.day(result.end.get("weekday") + 7);
          } else {
            refMoment = refMoment.day(result.end.get("weekday"));
          }
          result.end.imply("day", refMoment.date());
          result.end.imply("month", refMoment.month() + 1);
          result.end.imply("year", refMoment.year());
          context.debug(() => {
            console.log(`${this.constructor.name} adjusted ${result} weekday (${result.end})`);
          });
        }
      }
      if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
        for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
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

// node_modules/chrono-node/dist/esm/locales/en/parsers/ENCasualDateParser.js
var import_dayjs8 = __toESM(require_dayjs_min(), 1);

// node_modules/chrono-node/dist/esm/common/casualReferences.js
var import_dayjs6 = __toESM(require_dayjs_min(), 1);
function now(reference) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
  assignSimilarTime2(component, targetDate);
  component.assign("timezoneOffset", reference.getTimezoneOffset());
  component.addTag("casualReference/now");
  return component;
}
function today(reference) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
  implySimilarTime2(component, targetDate);
  component.addTag("casualReference/today");
  return component;
}
function yesterday(reference) {
  return theDayBefore(reference, 1).addTag("casualReference/yesterday");
}
function theDayBefore(reference, numDay) {
  return theDayAfter(reference, -numDay);
}
function tomorrow(reference) {
  return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayAfter(reference, nDays) {
  let targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  assignSimilarDate2(component, targetDate);
  implySimilarTime2(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  const component = new ParsingComponents(reference, {});
  assignSimilarDate2(component, targetDate);
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
  const targetDate = (0, import_dayjs6.default)(reference.getDateWithAdjustedTimezone());
  if (targetDate.hour() > 2) {
    implyTheNextDay(component, targetDate);
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
    let targetDate = (0, import_dayjs8.default)(context.refDate);
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
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          assignSimilarDate2(component, targetDate);
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

// node_modules/chrono-node/dist/esm/utils/timeunits.js
function reverseTimeUnits(timeUnits) {
  const reversed = {};
  for (const key in timeUnits) {
    reversed[key] = -timeUnits[key];
  }
  return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
  const output = components.clone();
  let date = components.dayjs();
  for (const key in timeUnits) {
    date = date.add(timeUnits[key], key);
  }
  if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
    output.imply("day", date.date());
    output.imply("month", date.month() + 1);
    output.imply("year", date.year());
  }
  if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
    output.imply("second", date.second());
    output.imply("minute", date.minute());
    output.imply("hour", date.hour());
  }
  return output;
}

// node_modules/chrono-node/dist/esm/calculation/weekdays.js
function createParsingComponentsAtWeekday(reference, weekday, modifier) {
  const refDate = reference.getDateWithAdjustedTimezone();
  const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
  let components = new ParsingComponents(reference);
  components = addImpliedTimeUnits(components, { "day": daysToWeekday });
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
var import_dayjs10 = __toESM(require_dayjs_min(), 1);
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
    let date = (0, import_dayjs10.default)(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
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
    let duration = parseTimeUnits(match[2]);
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
    let timeUnits = parseTimeUnits(nextResult.text);
    if (IsNegativeFollowingReference(nextResult)) {
      timeUnits = reverseTimeUnits(timeUnits);
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
    let duration = parseTimeUnits(currentResult.text);
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

// src/datetime.tsx
var import_dayjs11 = __toESM(require_dayjs_min());
var import_advancedFormat = __toESM(require_advancedFormat());
var import_relativeTime = __toESM(require_relativeTime());
var import_timezone3 = __toESM(require_timezone());
var import_utc = __toESM(require_utc());
var import_weekOfYear = __toESM(require_weekOfYear());
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
import_dayjs11.default.extend(import_advancedFormat.default);
import_dayjs11.default.extend(import_weekOfYear.default);
import_dayjs11.default.extend(import_utc.default);
import_dayjs11.default.extend(import_timezone3.default);
import_dayjs11.default.extend(import_relativeTime.default);
function handleConversion(input, timezone) {
  if (input.match(/^\d+$/))
    input = new Date(Number.parseInt(input, 10) * 1e3).toString();
  const parsedDate = parseDate(input);
  if (!parsedDate || parsedDate.toString() === "Invalid Date")
    return [];
  const date = (0, import_dayjs11.default)(parsedDate).tz(timezone);
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
function Datetime() {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9kYXlqcy9kYXlqcy5taW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi9hZHZhbmNlZEZvcm1hdC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3JlbGF0aXZlVGltZS5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3RpbWV6b25lLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vdXRjLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9kYXlqcy9wbHVnaW4vd2Vla09mWWVhci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9zcmMvZGF0ZXRpbWUudHN4IiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvcmVzdWx0cy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL3R5cGVzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvZGF0ZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy90aW1lem9uZS50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL2R1cmF0aW9uLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvcGF0dGVybi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL3llYXJzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9jb25zdGFudHMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZUV4cHJlc3Npb25QYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vYWJzdHJhY3RSZWZpbmVycy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy91dGlscy9kYXlqcy50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NhbGN1bGF0aW9uL21lcmdpbmdDYWxjdWxhdGlvbi50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29uZmlndXJhdGlvbnMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL2Nhc3VhbFJlZmVyZW5jZXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvdXRpbHMvdGltZXVuaXRzLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY2FsY3VsYXRpb24vd2Vla2RheXMudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lci50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi9Wb2x1bWVzL0RhdGEvY29udGFpbmVycy9sYWJzL3BsdWdpbnMvd2luZ21hbi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvc3JjL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXIudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb24udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9jaHJvbm8udHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2NvbnRhaW5lcnMvbGFicy9wbHVnaW5zL3dpbmdtYW4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL3NyYy9sb2NhbGVzL2VuL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvRGF0YS9jb250YWluZXJzL2xhYnMvcGx1Z2lucy93aW5nbWFuL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9zcmMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4oKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anNfcGx1Z2luX3F1YXJ0ZXJPZlllYXI9bigpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibW9udGhcIixuPVwicXVhcnRlclwiO3JldHVybiBmdW5jdGlvbihlLGkpe3ZhciByPWkucHJvdG90eXBlO3IucXVhcnRlcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy4kdXRpbHMoKS51KHQpP01hdGguY2VpbCgodGhpcy5tb250aCgpKzEpLzMpOnRoaXMubW9udGgodGhpcy5tb250aCgpJTMrMyoodC0xKSl9O3ZhciBzPXIuYWRkO3IuYWRkPWZ1bmN0aW9uKGUsaSl7cmV0dXJuIGU9TnVtYmVyKGUpLHRoaXMuJHV0aWxzKCkucChpKT09PW4/dGhpcy5hZGQoMyplLHQpOnMuYmluZCh0aGlzKShlLGkpfTt2YXIgdT1yLnN0YXJ0T2Y7ci5zdGFydE9mPWZ1bmN0aW9uKGUsaSl7dmFyIHI9dGhpcy4kdXRpbHMoKSxzPSEhci51KGkpfHxpO2lmKHIucChlKT09PW4pe3ZhciBvPXRoaXMucXVhcnRlcigpLTE7cmV0dXJuIHM/dGhpcy5tb250aCgzKm8pLnN0YXJ0T2YodCkuc3RhcnRPZihcImRheVwiKTp0aGlzLm1vbnRoKDMqbysyKS5lbmRPZih0KS5lbmRPZihcImRheVwiKX1yZXR1cm4gdS5iaW5kKHRoaXMpKGUsaSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCAiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5kYXlqc19wbHVnaW5fYWR2YW5jZWRGb3JtYXQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbihlLHQpe3ZhciByPXQucHJvdG90eXBlLG49ci5mb3JtYXQ7ci5mb3JtYXQ9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5iaW5kKHRoaXMpKGUpO3ZhciBzPXRoaXMuJHV0aWxzKCksYT0oZXx8XCJZWVlZLU1NLUREVEhIOm1tOnNzWlwiKS5yZXBsYWNlKC9cXFsoW15cXF1dKyldfFF8d298d3d8d3xXV3xXfHp6enx6fGdnZ2d8R0dHR3xEb3xYfHh8a3sxLDJ9fFMvZywoZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2VcIlFcIjpyZXR1cm4gTWF0aC5jZWlsKCh0LiRNKzEpLzMpO2Nhc2VcIkRvXCI6cmV0dXJuIHIub3JkaW5hbCh0LiREKTtjYXNlXCJnZ2dnXCI6cmV0dXJuIHQud2Vla1llYXIoKTtjYXNlXCJHR0dHXCI6cmV0dXJuIHQuaXNvV2Vla1llYXIoKTtjYXNlXCJ3b1wiOnJldHVybiByLm9yZGluYWwodC53ZWVrKCksXCJXXCIpO2Nhc2VcIndcIjpjYXNlXCJ3d1wiOnJldHVybiBzLnModC53ZWVrKCksXCJ3XCI9PT1lPzE6MixcIjBcIik7Y2FzZVwiV1wiOmNhc2VcIldXXCI6cmV0dXJuIHMucyh0Lmlzb1dlZWsoKSxcIldcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJrXCI6Y2FzZVwia2tcIjpyZXR1cm4gcy5zKFN0cmluZygwPT09dC4kSD8yNDp0LiRIKSxcImtcIj09PWU/MToyLFwiMFwiKTtjYXNlXCJYXCI6cmV0dXJuIE1hdGguZmxvb3IodC4kZC5nZXRUaW1lKCkvMWUzKTtjYXNlXCJ4XCI6cmV0dXJuIHQuJGQuZ2V0VGltZSgpO2Nhc2VcInpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoKStcIl1cIjtjYXNlXCJ6enpcIjpyZXR1cm5cIltcIit0Lm9mZnNldE5hbWUoXCJsb25nXCIpK1wiXVwiO2RlZmF1bHQ6cmV0dXJuIGV9fSkpO3JldHVybiBuLmJpbmQodGhpcykoYSl9fX0pKTsiLCAiIWZ1bmN0aW9uKHIsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczpyfHxzZWxmKS5kYXlqc19wbHVnaW5fcmVsYXRpdmVUaW1lPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3I9cnx8e307dmFyIG49ZS5wcm90b3R5cGUsbz17ZnV0dXJlOlwiaW4gJXNcIixwYXN0OlwiJXMgYWdvXCIsczpcImEgZmV3IHNlY29uZHNcIixtOlwiYSBtaW51dGVcIixtbTpcIiVkIG1pbnV0ZXNcIixoOlwiYW4gaG91clwiLGhoOlwiJWQgaG91cnNcIixkOlwiYSBkYXlcIixkZDpcIiVkIGRheXNcIixNOlwiYSBtb250aFwiLE1NOlwiJWQgbW9udGhzXCIseTpcImEgeWVhclwiLHl5OlwiJWQgeWVhcnNcIn07ZnVuY3Rpb24gaShyLGUsdCxvKXtyZXR1cm4gbi5mcm9tVG9CYXNlKHIsZSx0LG8pfXQuZW4ucmVsYXRpdmVUaW1lPW8sbi5mcm9tVG9CYXNlPWZ1bmN0aW9uKGUsbixpLGQsdSl7Zm9yKHZhciBmLGEscyxsPWkuJGxvY2FsZSgpLnJlbGF0aXZlVGltZXx8byxoPXIudGhyZXNob2xkc3x8W3tsOlwic1wiLHI6NDQsZDpcInNlY29uZFwifSx7bDpcIm1cIixyOjg5fSx7bDpcIm1tXCIscjo0NCxkOlwibWludXRlXCJ9LHtsOlwiaFwiLHI6ODl9LHtsOlwiaGhcIixyOjIxLGQ6XCJob3VyXCJ9LHtsOlwiZFwiLHI6MzV9LHtsOlwiZGRcIixyOjI1LGQ6XCJkYXlcIn0se2w6XCJNXCIscjo0NX0se2w6XCJNTVwiLHI6MTAsZDpcIm1vbnRoXCJ9LHtsOlwieVwiLHI6MTd9LHtsOlwieXlcIixkOlwieWVhclwifV0sbT1oLmxlbmd0aCxjPTA7YzxtO2MrPTEpe3ZhciB5PWhbY107eS5kJiYoZj1kP3QoZSkuZGlmZihpLHkuZCwhMCk6aS5kaWZmKGUseS5kLCEwKSk7dmFyIHA9KHIucm91bmRpbmd8fE1hdGgucm91bmQpKE1hdGguYWJzKGYpKTtpZihzPWY+MCxwPD15LnJ8fCF5LnIpe3A8PTEmJmM+MCYmKHk9aFtjLTFdKTt2YXIgdj1sW3kubF07dSYmKHA9dShcIlwiK3ApKSxhPVwic3RyaW5nXCI9PXR5cGVvZiB2P3YucmVwbGFjZShcIiVkXCIscCk6dihwLG4seS5sLHMpO2JyZWFrfX1pZihuKXJldHVybiBhO3ZhciBNPXM/bC5mdXR1cmU6bC5wYXN0O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIE0/TShhKTpNLnJlcGxhY2UoXCIlc1wiLGEpfSxuLnRvPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGkocixlLHRoaXMsITApfSxuLmZyb209ZnVuY3Rpb24ocixlKXtyZXR1cm4gaShyLGUsdGhpcyl9O3ZhciBkPWZ1bmN0aW9uKHIpe3JldHVybiByLiR1P3QudXRjKCk6dCgpfTtuLnRvTm93PWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLnRvKGQodGhpcykscil9LG4uZnJvbU5vdz1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5mcm9tKGQodGhpcykscil9fX0pKTsiLCAiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fdGltZXpvbmU9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt5ZWFyOjAsbW9udGg6MSxkYXk6Mixob3VyOjMsbWludXRlOjQsc2Vjb25kOjV9LGU9e307cmV0dXJuIGZ1bmN0aW9uKG4saSxvKXt2YXIgcixhPWZ1bmN0aW9uKHQsbixpKXt2b2lkIDA9PT1pJiYoaT17fSk7dmFyIG89bmV3IERhdGUodCkscj1mdW5jdGlvbih0LG4pe3ZvaWQgMD09PW4mJihuPXt9KTt2YXIgaT1uLnRpbWVab25lTmFtZXx8XCJzaG9ydFwiLG89dCtcInxcIitpLHI9ZVtvXTtyZXR1cm4gcnx8KHI9bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLHtob3VyMTI6ITEsdGltZVpvbmU6dCx5ZWFyOlwibnVtZXJpY1wiLG1vbnRoOlwiMi1kaWdpdFwiLGRheTpcIjItZGlnaXRcIixob3VyOlwiMi1kaWdpdFwiLG1pbnV0ZTpcIjItZGlnaXRcIixzZWNvbmQ6XCIyLWRpZ2l0XCIsdGltZVpvbmVOYW1lOml9KSxlW29dPXIpLHJ9KG4saSk7cmV0dXJuIHIuZm9ybWF0VG9QYXJ0cyhvKX0sdT1mdW5jdGlvbihlLG4pe2Zvcih2YXIgaT1hKGUsbikscj1bXSx1PTA7dTxpLmxlbmd0aDt1Kz0xKXt2YXIgZj1pW3VdLHM9Zi50eXBlLG09Zi52YWx1ZSxjPXRbc107Yz49MCYmKHJbY109cGFyc2VJbnQobSwxMCkpfXZhciBkPXJbM10sbD0yND09PWQ/MDpkLGg9clswXStcIi1cIityWzFdK1wiLVwiK3JbMl0rXCIgXCIrbCtcIjpcIityWzRdK1wiOlwiK3JbNV0rXCI6MDAwXCIsdj0rZTtyZXR1cm4oby51dGMoaCkudmFsdWVPZigpLSh2LT12JTFlMykpLzZlNH0sZj1pLnByb3RvdHlwZTtmLnR6PWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09dCYmKHQ9cik7dmFyIG4saT10aGlzLnV0Y09mZnNldCgpLGE9dGhpcy50b0RhdGUoKSx1PWEudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLHt0aW1lWm9uZTp0fSksZj1NYXRoLnJvdW5kKChhLW5ldyBEYXRlKHUpKS8xZTMvNjApLHM9MTUqLU1hdGgucm91bmQoYS5nZXRUaW1lem9uZU9mZnNldCgpLzE1KS1mO2lmKCFOdW1iZXIocykpbj10aGlzLnV0Y09mZnNldCgwLGUpO2Vsc2UgaWYobj1vKHUse2xvY2FsZTp0aGlzLiRMfSkuJHNldChcIm1pbGxpc2Vjb25kXCIsdGhpcy4kbXMpLnV0Y09mZnNldChzLCEwKSxlKXt2YXIgbT1uLnV0Y09mZnNldCgpO249bi5hZGQoaS1tLFwibWludXRlXCIpfXJldHVybiBuLiR4LiR0aW1lem9uZT10LG59LGYub2Zmc2V0TmFtZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLiR4LiR0aW1lem9uZXx8by50ei5ndWVzcygpLG49YSh0aGlzLnZhbHVlT2YoKSxlLHt0aW1lWm9uZU5hbWU6dH0pLmZpbmQoKGZ1bmN0aW9uKHQpe3JldHVyblwidGltZXpvbmVuYW1lXCI9PT10LnR5cGUudG9Mb3dlckNhc2UoKX0pKTtyZXR1cm4gbiYmbi52YWx1ZX07dmFyIHM9Zi5zdGFydE9mO2Yuc3RhcnRPZj1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLiR4fHwhdGhpcy4keC4kdGltZXpvbmUpcmV0dXJuIHMuY2FsbCh0aGlzLHQsZSk7dmFyIG49byh0aGlzLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3M6U1NTXCIpLHtsb2NhbGU6dGhpcy4kTH0pO3JldHVybiBzLmNhbGwobix0LGUpLnR6KHRoaXMuJHguJHRpbWV6b25lLCEwKX0sby50ej1mdW5jdGlvbih0LGUsbil7dmFyIGk9biYmZSxhPW58fGV8fHIsZj11KCtvKCksYSk7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpcmV0dXJuIG8odCkudHooYSk7dmFyIHM9ZnVuY3Rpb24odCxlLG4pe3ZhciBpPXQtNjAqZSoxZTMsbz11KGksbik7aWYoZT09PW8pcmV0dXJuW2ksZV07dmFyIHI9dShpLT02MCooby1lKSoxZTMsbik7cmV0dXJuIG89PT1yP1tpLG9dOlt0LTYwKk1hdGgubWluKG8scikqMWUzLE1hdGgubWF4KG8scildfShvLnV0Yyh0LGkpLnZhbHVlT2YoKSxmLGEpLG09c1swXSxjPXNbMV0sZD1vKG0pLnV0Y09mZnNldChjKTtyZXR1cm4gZC4keC4kdGltZXpvbmU9YSxkfSxvLnR6Lmd1ZXNzPWZ1bmN0aW9uKCl7cmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZX0sby50ei5zZXREZWZhdWx0PWZ1bmN0aW9uKHQpe3I9dH19fSkpOyIsICIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShpKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl91dGM9aSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWludXRlXCIsaT0vWystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZyxlPS8oWystXXxcXGRcXGQpL2c7cmV0dXJuIGZ1bmN0aW9uKHMsZixuKXt2YXIgdT1mLnByb3RvdHlwZTtuLnV0Yz1mdW5jdGlvbih0KXt2YXIgaT17ZGF0ZTp0LHV0YzohMCxhcmdzOmFyZ3VtZW50c307cmV0dXJuIG5ldyBmKGkpfSx1LnV0Yz1mdW5jdGlvbihpKXt2YXIgZT1uKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMH0pO3JldHVybiBpP2UuYWRkKHRoaXMudXRjT2Zmc2V0KCksdCk6ZX0sdS5sb2NhbD1mdW5jdGlvbigpe3JldHVybiBuKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMX0pfTt2YXIgcj11LnBhcnNlO3UucGFyc2U9ZnVuY3Rpb24odCl7dC51dGMmJih0aGlzLiR1PSEwKSx0aGlzLiR1dGlscygpLnUodC4kb2Zmc2V0KXx8KHRoaXMuJG9mZnNldD10LiRvZmZzZXQpLHIuY2FsbCh0aGlzLHQpfTt2YXIgbz11LmluaXQ7dS5pbml0PWZ1bmN0aW9uKCl7aWYodGhpcy4kdSl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0VVRDTW9udGgoKSx0aGlzLiREPXQuZ2V0VVRDRGF0ZSgpLHRoaXMuJFc9dC5nZXRVVENEYXkoKSx0aGlzLiRIPXQuZ2V0VVRDSG91cnMoKSx0aGlzLiRtPXQuZ2V0VVRDTWludXRlcygpLHRoaXMuJHM9dC5nZXRVVENTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRVVENNaWxsaXNlY29uZHMoKX1lbHNlIG8uY2FsbCh0aGlzKX07dmFyIGE9dS51dGNPZmZzZXQ7dS51dGNPZmZzZXQ9ZnVuY3Rpb24ocyxmKXt2YXIgbj10aGlzLiR1dGlscygpLnU7aWYobihzKSlyZXR1cm4gdGhpcy4kdT8wOm4odGhpcy4kb2Zmc2V0KT9hLmNhbGwodGhpcyk6dGhpcy4kb2Zmc2V0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBzJiYocz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgcz10Lm1hdGNoKGkpO2lmKCFzKXJldHVybiBudWxsO3ZhciBmPShcIlwiK3NbMF0pLm1hdGNoKGUpfHxbXCItXCIsMCwwXSxuPWZbMF0sdT02MCorZlsxXSsgK2ZbMl07cmV0dXJuIDA9PT11PzA6XCIrXCI9PT1uP3U6LXV9KHMpLG51bGw9PT1zKSlyZXR1cm4gdGhpczt2YXIgdT1NYXRoLmFicyhzKTw9MTY/NjAqczpzO2lmKDA9PT11KXJldHVybiB0aGlzLnV0YyhmKTt2YXIgcj10aGlzLmNsb25lKCk7aWYoZilyZXR1cm4gci4kb2Zmc2V0PXUsci4kdT0hMSxyO3ZhciBvPXRoaXMuJHU/dGhpcy50b0RhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpOi0xKnRoaXMudXRjT2Zmc2V0KCk7cmV0dXJuKHI9dGhpcy5sb2NhbCgpLmFkZCh1K28sdCkpLiRvZmZzZXQ9dSxyLiR4LiRsb2NhbE9mZnNldD1vLHJ9O3ZhciBoPXUuZm9ybWF0O3UuZm9ybWF0PWZ1bmN0aW9uKHQpe3ZhciBpPXR8fCh0aGlzLiR1P1wiWVlZWS1NTS1ERFRISDptbTpzc1taXVwiOlwiXCIpO3JldHVybiBoLmNhbGwodGhpcyxpKX0sdS52YWx1ZU9mPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kdXRpbHMoKS51KHRoaXMuJG9mZnNldCk/MDp0aGlzLiRvZmZzZXQrKHRoaXMuJHguJGxvY2FsT2Zmc2V0fHx0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkpO3JldHVybiB0aGlzLiRkLnZhbHVlT2YoKS02ZTQqdH0sdS5pc1VUQz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy4kdX0sdS50b0lTT1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCl9LHUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b1VUQ1N0cmluZygpfTt2YXIgbD11LnRvRGF0ZTt1LnRvRGF0ZT1mdW5jdGlvbih0KXtyZXR1cm5cInNcIj09PXQmJnRoaXMuJG9mZnNldD9uKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikpLnRvRGF0ZSgpOmwuY2FsbCh0aGlzKX07dmFyIGM9dS5kaWZmO3UuZGlmZj1mdW5jdGlvbih0LGksZSl7aWYodCYmdGhpcy4kdT09PXQuJHUpcmV0dXJuIGMuY2FsbCh0aGlzLHQsaSxlKTt2YXIgcz10aGlzLmxvY2FsKCksZj1uKHQpLmxvY2FsKCk7cmV0dXJuIGMuY2FsbChzLGYsaSxlKX19fSkpOyIsICIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOmV8fHNlbGYpLmRheWpzX3BsdWdpbl93ZWVrT2ZZZWFyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cIndlZWtcIix0PVwieWVhclwiO3JldHVybiBmdW5jdGlvbihpLG4scil7dmFyIGY9bi5wcm90b3R5cGU7Zi53ZWVrPWZ1bmN0aW9uKGkpe2lmKHZvaWQgMD09PWkmJihpPW51bGwpLG51bGwhPT1pKXJldHVybiB0aGlzLmFkZCg3KihpLXRoaXMud2VlaygpKSxcImRheVwiKTt2YXIgbj10aGlzLiRsb2NhbGUoKS55ZWFyU3RhcnR8fDE7aWYoMTE9PT10aGlzLm1vbnRoKCkmJnRoaXMuZGF0ZSgpPjI1KXt2YXIgZj1yKHRoaXMpLnN0YXJ0T2YodCkuYWRkKDEsdCkuZGF0ZShuKSxzPXIodGhpcykuZW5kT2YoZSk7aWYoZi5pc0JlZm9yZShzKSlyZXR1cm4gMX12YXIgYT1yKHRoaXMpLnN0YXJ0T2YodCkuZGF0ZShuKS5zdGFydE9mKGUpLnN1YnRyYWN0KDEsXCJtaWxsaXNlY29uZFwiKSxvPXRoaXMuZGlmZihhLGUsITApO3JldHVybiBvPDA/cih0aGlzKS5zdGFydE9mKFwid2Vla1wiKS53ZWVrKCk6TWF0aC5jZWlsKG8pfSxmLndlZWtzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1udWxsKSx0aGlzLndlZWsoZSl9fX0pKTsiLCAiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25QYW5lbCwgQ29sb3IsIExpc3QgfSBmcm9tICdAcmF5Y2FzdC9hcGknXG5pbXBvcnQgeyBwYXJzZURhdGUgfSBmcm9tICdjaHJvbm8tbm9kZSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCBhZHZhbmNlZEZvcm1hdFBsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vYWR2YW5jZWRGb3JtYXQnXG5pbXBvcnQgcmVsYXRpdmVUaW1lUGx1Z2luIGZyb20gJ2RheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWUnXG5pbXBvcnQgdGltZXpvbmVQbHVnaW4gZnJvbSAnZGF5anMvcGx1Z2luL3RpbWV6b25lJ1xuaW1wb3J0IHV0Y1BsdWdpbiBmcm9tICdkYXlqcy9wbHVnaW4vdXRjJ1xuaW1wb3J0IHdlZWtPZlllYXJQbHVnaW4gZnJvbSAnZGF5anMvcGx1Z2luL3dlZWtPZlllYXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5kYXlqcy5leHRlbmQoYWR2YW5jZWRGb3JtYXRQbHVnaW4pXG5kYXlqcy5leHRlbmQod2Vla09mWWVhclBsdWdpbilcbmRheWpzLmV4dGVuZCh1dGNQbHVnaW4pXG5kYXlqcy5leHRlbmQodGltZXpvbmVQbHVnaW4pXG5kYXlqcy5leHRlbmQocmVsYXRpdmVUaW1lUGx1Z2luKVxuXG5mdW5jdGlvbiBoYW5kbGVDb252ZXJzaW9uKGlucHV0OiBzdHJpbmcsIHRpbWV6b25lOiBzdHJpbmcpIHtcbiAgaWYgKGlucHV0Lm1hdGNoKC9eXFxkKyQvKSlcbiAgICBpbnB1dCA9IG5ldyBEYXRlKE51bWJlci5wYXJzZUludChpbnB1dCwgMTApICogMTAwMCkudG9TdHJpbmcoKVxuXG4gIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZURhdGUoaW5wdXQpXG4gIGlmICghcGFyc2VkRGF0ZSB8fCBwYXJzZWREYXRlLnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKVxuICAgIHJldHVybiBbXVxuXG4gIGNvbnN0IGRhdGUgPSBkYXlqcyhwYXJzZWREYXRlKS50eih0aW1lem9uZSlcbiAgY29uc3QgZnJvbU5vdyA9IGRhdGUuZnJvbU5vdygpXG5cbiAgcmV0dXJuIFtcbiAgICB7IGxhYmVsOiAnVW5peCAocyknLCB2YWx1ZTogZGF0ZS51bml4KCkgfSxcbiAgICB7IGxhYmVsOiAnVW5peCAobXMpJywgdmFsdWU6IGRhdGUudmFsdWVPZigpIH0sXG4gICAgeyBsYWJlbDogJ0h1bWFuIFJlYWRhYmxlJywgdmFsdWU6IGRhdGUuZm9ybWF0KCdNTU1NIERvLCBZWVlZIFthdF0gaGg6bW06c3MgQSAoenp6KScpIH0sXG4gICAgeyBsYWJlbDogJ0RhdGVUaW1lJywgdmFsdWU6IGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykgfSxcbiAgICB7IGxhYmVsOiAnVVRDJywgdmFsdWU6IGRhdGUudG9TdHJpbmcoKSB9LFxuICAgIHsgbGFiZWw6ICdJU08gODYwMScsIHZhbHVlOiBkYXRlLnRvSVNPU3RyaW5nKCkgfSxcbiAgICB7IGxhYmVsOiAnV2VlayBvZiBZZWFyJywgdmFsdWU6IGRhdGUuZm9ybWF0KCd3byBkZGRkIFtvZl0gWVlZWScpIH0sXG4gICAgeyBsYWJlbDogJ0luIC8gQWdvJywgdmFsdWU6IFN0cmluZyhmcm9tTm93KS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIFN0cmluZyhmcm9tTm93KS5zbGljZSgxKSB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGV0aW1lKCkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCdub3cnKVxuICBjb25zdCBbdGltZXpvbmUsIHNldFRpbWV6b25lXSA9IHVzZVN0YXRlKEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSlcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTx7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfVtdPihbXSlcblxuICBjb25zdCBvblRpbWV6b25lQ2hhbmdlID0gYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRUaW1lem9uZSh2YWx1ZSlcbiAgICBzZXRJdGVtcyhoYW5kbGVDb252ZXJzaW9uKGlucHV0LCB2YWx1ZSkpXG4gIH1cblxuICBjb25zdCBvblNlYXJjaFRleHRDaGFuZ2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldElucHV0KHZhbHVlKVxuICAgIHNldEl0ZW1zKGhhbmRsZUNvbnZlcnNpb24odmFsdWUsIHRpbWV6b25lKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExpc3RcbiAgICAgIHNlYXJjaEJhclBsYWNlaG9sZGVyPVwiRGF0ZVwiXG4gICAgICBmaWx0ZXJpbmc9e2ZhbHNlfVxuICAgICAgc2VhcmNoVGV4dD17aW5wdXR9XG4gICAgICBvblNlYXJjaFRleHRDaGFuZ2U9e29uU2VhcmNoVGV4dENoYW5nZX1cbiAgICAgIHNlYXJjaEJhckFjY2Vzc29yeT17KFxuICAgICAgICA8TGlzdC5Ecm9wZG93biB0b29sdGlwPVwiVGltZXpvbmVcIiBvbkNoYW5nZT17b25UaW1lem9uZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXt0aW1lem9uZX0+XG4gICAgICAgICAge0ludGwuc3VwcG9ydGVkVmFsdWVzT2YoJ3RpbWVab25lJykubWFwKHpvbmUgPT4gKFxuICAgICAgICAgICAgPExpc3QuRHJvcGRvd24uSXRlbSBrZXk9e3pvbmV9IHZhbHVlPXt6b25lfSB0aXRsZT17em9uZX0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9MaXN0LkRyb3Bkb3duPlxuICAgICAgKX1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAga2V5PXtpdGVtLnZhbHVlfVxuICAgICAgICAgIHRpdGxlPXtTdHJpbmcoaXRlbS52YWx1ZSl9XG4gICAgICAgICAgYWNjZXNzb3JpZXM9e1t7IHRhZzogeyB2YWx1ZTogaXRlbS5sYWJlbCwgY29sb3I6IENvbG9yLlNlY29uZGFyeVRleHQgfSB9XX1cbiAgICAgICAgICBhY3Rpb25zPXsoXG4gICAgICAgICAgICA8QWN0aW9uUGFuZWw+XG4gICAgICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkIGNvbnRlbnQ9e2l0ZW0udmFsdWV9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb24uUGFzdGUgY29udGVudD17aXRlbS52YWx1ZX0gLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdD5cbiAgKVxufVxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkQ29tcG9uZW50cywgUGFyc2VkUmVzdWx0LCBQYXJzaW5nUmVmZXJlbmNlLCBUaW1lem9uZUFiYnJNYXAgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgcXVhcnRlck9mWWVhciBmcm9tIFwiZGF5anMvcGx1Z2luL3F1YXJ0ZXJPZlllYXJcIjtcbmltcG9ydCBkYXlqcywgeyBRVW5pdFR5cGUgfSBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlLCBhc3NpZ25TaW1pbGFyVGltZSwgaW1wbHlTaW1pbGFyVGltZSB9IGZyb20gXCIuL3V0aWxzL2RhdGVzXCI7XG5pbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4vdGltZXpvbmVcIjtcbmltcG9ydCB7IGFkZER1cmF0aW9uLCBEdXJhdGlvbiB9IGZyb20gXCIuL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5kYXlqcy5leHRlbmQocXVhcnRlck9mWWVhcik7XG5cbmV4cG9ydCBjbGFzcyBSZWZlcmVuY2VXaXRoVGltZXpvbmUge1xuICAgIHJlYWRvbmx5IGluc3RhbnQ6IERhdGU7XG4gICAgcmVhZG9ubHkgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXIgfCBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoaW5zdGFudD86IERhdGUsIHRpbWV6b25lT2Zmc2V0PzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW5zdGFudCA9IGluc3RhbnQgPz8gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IHRpbWV6b25lT2Zmc2V0ID8/IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21EYXRlKGRhdGU6IERhdGUpOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUge1xuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShkYXRlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbUlucHV0KGlucHV0PzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIHRpbWV6b25lT3ZlcnJpZGVzPzogVGltZXpvbmVBYmJyTWFwKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbURhdGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbnQ6IERhdGUgPSBpbnB1dD8uaW5zdGFudCA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IHRvVGltZXpvbmVPZmZzZXQoaW5wdXQ/LnRpbWV6b25lLCBpbnN0YW50LCB0aW1lem9uZU92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKGluc3RhbnQsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgSlMgZGF0ZSAoc3lzdGVtIHRpbWV6b25lKSB3aXRoIHRoZSB7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gZXF1YWwgdG8gdGhlIHJlZmVyZW5jZS5cbiAgICAgKiBUaGUgb3V0cHV0J3MgaW5zdGFudCBpcyBOT1QgdGhlIHJlZmVyZW5jZSdzIGluc3RhbnQgd2hlbiB0aGUgcmVmZXJlbmNlJ3MgYW5kIHN5c3RlbSdzIHRpbWV6b25lIGFyZSBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5pbnN0YW50KTtcbiAgICAgICAgaWYgKHRoaXMudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIHRoaXMuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKHRoaXMuaW5zdGFudCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBtaW51dGVzIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgSlMgZGF0ZSdzIHRpbWV6b25lIGFuZCB0aGUgcmVmZXJlbmNlIHRpbWV6b25lLlxuICAgICAqIEBwYXJhbSBkYXRlXG4gICAgICogQHBhcmFtIG92ZXJyaWRlVGltZXpvbmVPZmZzZXRcbiAgICAgKi9cbiAgICBnZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUoZGF0ZT86IERhdGUsIG92ZXJyaWRlVGltZXpvbmVPZmZzZXQ/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBpZiAoIWRhdGUgfHwgZGF0ZS5nZXRUaW1lKCkgPCAwKSB7XG4gICAgICAgICAgICAvLyBKYXZhc2NyaXB0IGRhdGUgdGltZXpvbmUgY2FsY3VsYXRpb24gZ290IGVmZmVjdCB3aGVuIHRoZSB0aW1lIGVwb2NoIDwgMFxuICAgICAgICAgICAgLy8gZS5nLiBuZXcgRGF0ZSgnVHVlIEZlYiAwMiAxMzAwIDAwOjAwOjAwIEdNVCswOTAwIChKU1QpJykgPT4gVHVlIEZlYiAwMiAxMzAwIDAwOjE4OjU5IEdNVCswOTE4IChKU1QpXG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFRpbWV6b25lT2Zmc2V0ID0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldCA/PyB0aGlzLnRpbWV6b25lT2Zmc2V0ID8/IGN1cnJlbnRUaW1lem9uZU9mZnNldDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lem9uZU9mZnNldCAtIHRhcmdldFRpbWV6b25lT2Zmc2V0O1xuICAgIH1cblxuICAgIGdldFRpbWV6b25lT2Zmc2V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWV6b25lT2Zmc2V0ID8/IC10aGlzLmluc3RhbnQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzaW5nQ29tcG9uZW50cyBpbXBsZW1lbnRzIFBhcnNlZENvbXBvbmVudHMge1xuICAgIHByaXZhdGUga25vd25WYWx1ZXM6IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9O1xuICAgIHByaXZhdGUgaW1wbGllZFZhbHVlczogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH07XG4gICAgcHJpdmF0ZSByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcbiAgICBwcml2YXRlIF90YWdzID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwga25vd25Db21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbXBsaWVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSBrbm93bkNvbXBvbmVudHNba2V5IGFzIENvbXBvbmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWZEYXlKcyA9IHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKTtcbiAgICAgICAgdGhpcy5pbXBseShcImRheVwiLCByZWZEYXlKcy5nZXREYXRlKCkpO1xuICAgICAgICB0aGlzLmltcGx5KFwibW9udGhcIiwgcmVmRGF5SnMuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICB0aGlzLmltcGx5KFwieWVhclwiLCByZWZEYXlKcy5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgdGhpcy5pbXBseShcImhvdXJcIiwgMTIpO1xuICAgICAgICB0aGlzLmltcGx5KFwibWludXRlXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgICAgICB0aGlzLmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgfVxuXG4gICAgZ2V0KGNvbXBvbmVudDogQ29tcG9uZW50KTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50OiBDb21wb25lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzO1xuICAgIH1cblxuICAgIGdldENlcnRhaW5Db21wb25lbnRzKCk6IEFycmF5PENvbXBvbmVudD4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5rbm93blZhbHVlcykgYXMgQXJyYXk8Q29tcG9uZW50PjtcbiAgICB9XG5cbiAgICBpbXBseShjb21wb25lbnQ6IENvbXBvbmVudCwgdmFsdWU6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudCBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltcGxpZWRWYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3NpZ24oY29tcG9uZW50OiBDb21wb25lbnQsIHZhbHVlOiBudW1iZXIpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XSA9IHZhbHVlO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlbGV0ZShjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgICBkZWxldGUgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgfVxuXG4gICAgY2xvbmUoKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmtub3duVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXNba2V5IGFzIENvbXBvbmVudF0gPSB0aGlzLmtub3duVmFsdWVzW2tleSBhcyBDb21wb25lbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XSA9IHRoaXMuaW1wbGllZFZhbHVlc1trZXkgYXMgQ29tcG9uZW50XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgaXNPbmx5RGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ2VydGFpbihcImhvdXJcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibWludXRlXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInNlY29uZFwiKTtcbiAgICB9XG5cbiAgICBpc09ubHlUaW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIXRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzT25seVdlZWtkYXlDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ2VydGFpbihcIndlZWtkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwiZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcIm1vbnRoXCIpO1xuICAgIH1cblxuICAgIGlzRGF0ZVdpdGhVbmtub3duWWVhcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkRGF0ZSgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF0ZVdpdGhvdXRUaW1lem9uZUFkanVzdG1lbnQoKTtcblxuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpICE9PSB0aGlzLmdldChcInllYXJcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5nZXQoXCJtb250aFwiKSAtIDEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0RGF0ZSgpICE9PSB0aGlzLmdldChcImRheVwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJob3VyXCIpICE9IG51bGwgJiYgZGF0ZS5nZXRIb3VycygpICE9IHRoaXMuZ2V0KFwiaG91clwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJtaW51dGVcIikgIT0gbnVsbCAmJiBkYXRlLmdldE1pbnV0ZXMoKSAhPSB0aGlzLmdldChcIm1pbnV0ZVwiKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgICAgICB0YWdzOiAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odGhpcy5fdGFncykuc29ydCgpKX0sIFxuICAgICAgICAgICAga25vd25WYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5rbm93blZhbHVlcyl9LCBcbiAgICAgICAgICAgIGltcGxpZWRWYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pbXBsaWVkVmFsdWVzKX19LCBcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnJlZmVyZW5jZSl9XWA7XG4gICAgfVxuXG4gICAgZGF5anMoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcyh0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCkpO1xuICAgIH1cblxuICAgIGRhdGUoKTogRGF0ZSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG4gICAgICAgIGNvbnN0IHRpbWV6b25lQWRqdXN0bWVudCA9IHRoaXMucmVmZXJlbmNlLmdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlLCB0aGlzLmdldChcInRpbWV6b25lT2Zmc2V0XCIpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgdGltZXpvbmVBZGp1c3RtZW50ICogNjAwMDApO1xuICAgIH1cblxuICAgIGFkZFRhZyh0YWc6IHN0cmluZyk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgdGhpcy5fdGFncy5hZGQodGFnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl90YWdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgICAgICB0aGlzLmdldChcInllYXJcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcIm1vbnRoXCIpIC0gMSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwiZGF5XCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJob3VyXCIpLFxuICAgICAgICAgICAgdGhpcy5nZXQoXCJtaW51dGVcIiksXG4gICAgICAgICAgICB0aGlzLmdldChcInNlY29uZFwiKSxcbiAgICAgICAgICAgIHRoaXMuZ2V0KFwibWlsbGlzZWNvbmRcIilcbiAgICAgICAgKTtcblxuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHRoaXMuZ2V0KFwieWVhclwiKSk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGR1cmF0aW9uOiBEdXJhdGlvbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICAgICAgbGV0IGRhdGUgPSBhZGREdXJhdGlvbihyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCksIGR1cmF0aW9uKTtcblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgICAgIGNvbXBvbmVudHMuYWRkVGFnKFwicmVzdWx0L3JlbGF0aXZlRGF0ZVwiKTtcbiAgICAgICAgaWYgKGR1cmF0aW9uW1wiaG91clwiXSB8fCBkdXJhdGlvbltcIm1pbnV0ZVwiXSB8fCBkdXJhdGlvbltcInNlY29uZFwiXSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlQW5kVGltZVwiKTtcbiAgICAgICAgICAgIGFzc2lnblNpbWlsYXJUaW1lKGNvbXBvbmVudHMsIGRhdGUpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHJlZmVyZW5jZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXG4gICAgICAgICAgICBpZiAoZHVyYXRpb25bXCJkYXlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmdldERhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIndlZWtkYXlcIiwgZGF0ZS5nZXREYXkoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGR1cmF0aW9uW1wid2Vla1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ3ZWVrZGF5XCIsIGRhdGUuZ2V0RGF5KCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZHVyYXRpb25bXCJtb250aFwiXSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkdXJhdGlvbltcInllYXJcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNpbmdSZXN1bHQgaW1wbGVtZW50cyBQYXJzZWRSZXN1bHQge1xuICAgIHJlZkRhdGU6IERhdGU7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIHN0YXJ0OiBQYXJzaW5nQ29tcG9uZW50cztcbiAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50cztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICBzdGFydD86IFBhcnNpbmdDb21wb25lbnRzLFxuICAgICAgICBlbmQ/OiBQYXJzaW5nQ29tcG9uZW50c1xuICAgICkge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5yZWZEYXRlID0gcmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0IHx8IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIHRoaXMuaW5kZXgsIHRoaXMudGV4dCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuc3RhcnQgPyB0aGlzLnN0YXJ0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5lbmQgPyB0aGlzLmVuZC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkYXRlKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydC5kYXRlKCk7XG4gICAgfVxuXG4gICAgYWRkVGFnKHRhZzogc3RyaW5nKTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFnKHRhZyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFnKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkVGFncyh0YWdzOiBzdHJpbmdbXSB8IFNldDxzdHJpbmc+KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICAgICAgICB0aGlzLmVuZC5hZGRUYWdzKHRhZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRhZ3MoKTogU2V0PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBjb21iaW5lZFRhZ3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCh0aGlzLnN0YXJ0LnRhZ3MoKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGhpcy5lbmQudGFncygpKSB7XG4gICAgICAgICAgICAgICAgY29tYmluZWRUYWdzLmFkZCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZFRhZ3M7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHRhZ3MgPSBBcnJheS5mcm9tKHRoaXMudGFncygpKS5zb3J0KCk7XG4gICAgICAgIHJldHVybiBgW1BhcnNpbmdSZXN1bHQge2luZGV4OiAke3RoaXMuaW5kZXh9LCB0ZXh0OiAnJHt0aGlzLnRleHR9JywgdGFnczogJHtKU09OLnN0cmluZ2lmeSh0YWdzKX0gLi4ufV1gO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBEZWJ1Z0NvbnN1bWUsIERlYnVnSGFuZGxlciB9IGZyb20gXCIuL2RlYnVnZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnNpbmdPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIFRvIHBhcnNlIG9ubHkgZm9yd2FyZCBkYXRlcyAodGhlIHJlc3VsdHMgc2hvdWxkIGJlIGFmdGVyIHRoZSByZWZlcmVuY2UgZGF0ZSkuXG4gICAgICogVGhpcyBlZmZlY3RzIGRhdGUvdGltZSBpbXBsaWNhdGlvbiAoZS5nLiB3ZWVrZGF5IG9yIHRpbWUgbWVudGlvbmluZylcbiAgICAgKi9cbiAgICBmb3J3YXJkRGF0ZT86IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIHRpbWV6b25lIGtleXdvcmRzIGZvciB0aGUgcGFyc2VycyB0byByZWNvZ25pemUuXG4gICAgICogQW55IHZhbHVlIHByb3ZpZGVkIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgaGFuZGxpbmcgb2YgdGhhdCB2YWx1ZS5cbiAgICAgKi9cbiAgICB0aW1lem9uZXM/OiBUaW1lem9uZUFiYnJNYXA7XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBkZWJ1ZyBldmVudCBoYW5kbGVyLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRlYnVnPzogRGVidWdIYW5kbGVyIHwgRGVidWdDb25zdW1lO1xufVxuXG4vKipcbiAqIFNvbWUgdGltZXpvbmUgYWJicmV2aWF0aW9ucyBhcmUgYW1iaWd1b3VzIGluIHRoYXQgdGhleSByZWZlciB0byBkaWZmZXJlbnQgb2Zmc2V0c1xuICogZGVwZW5kaW5nIG9uIHRoZSB0aW1lIG9mIHllYXIgXHUyMDE0IGRheWxpZ2h0IHNhdmluZ3MgdGltZSAoRFNUKSwgb3Igbm9uLURTVC4gVGhpcyBpbnRlcmZhY2VcbiAqIGFsbG93cyBkZWZpbmluZyBzdWNoIHRpbWV6b25lc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFtYmlndW91c1RpbWV6b25lTWFwIHtcbiAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogbnVtYmVyO1xuICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdGFydCBkYXRlIG9mIERTVCBmb3IgdGhlIGdpdmVuIHllYXIuXG4gICAgICogdGltZXpvbmUudHMgY29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIGNvbW1vbiBzdWNoIHJ1bGVzLlxuICAgICAqL1xuICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgZW5kIGRhdGUgb2YgRFNUIGZvciB0aGUgZ2l2ZW4geWVhci5cbiAgICAgKiB0aW1lem9uZS50cyBjb250YWlucyBoZWxwZXIgbWV0aG9kcyBmb3IgY29tbW9uIHN1Y2ggcnVsZXMuXG4gICAgICovXG4gICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBEYXRlO1xufVxuXG4vKipcbiAqIEEgbWFwIGRlc2NyaWJpbmcgaG93IHRpbWV6b25lIGFiYnJldmlhdGlvbnMgc2hvdWxkIG1hcCB0byB0aW1lIG9mZnNldHMuXG4gKiBTdXBwb3J0cyBib3RoIHVuYW1iaWdvdXMgbWFwcGluZ3MgYWJicmV2aWF0aW9uID0+IG9mZnNldCxcbiAqIGFuZCBhbWJpZ3VvdXMgbWFwcGluZ3MsIHdoZXJlIHRoZSBvZmZzZXQgd2lsbCBkZXBlbmQgb24gd2hldGhlciB0aGVcbiAqIHRpbWUgaW4gcXVlc3Rpb24gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3MgdGltZSBvciBub3QuXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWV6b25lQWJick1hcCA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgQW1iaWd1b3VzVGltZXpvbmVNYXAgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzaW5nUmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgZGF0ZS4gVGhlIGluc3RhbnQgKEphdmFTY3JpcHQgRGF0ZSBvYmplY3QpIHdoZW4gdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBUaGlzIGVmZmVjdCBkYXRlL3RpbWUgaW1wbGljYXRpb24gKGUuZy4gd2Vla2RheSBvciB0aW1lIG1lbnRpb25pbmcpLlxuICAgICAqIChkZWZhdWx0ID0gbm93KVxuICAgICAqL1xuICAgIGluc3RhbnQ/OiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRpbWV6b25lLiBUaGUgdGltZXpvbmUgd2hlcmUgdGhlIGlucHV0IGlzIHdyaXR0ZW4gb3IgbWVudGlvbi5cbiAgICAgKiBEYXRlL3RpbWUgaW1wbGljYXRpb24gd2lsbCBhY2NvdW50IHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gaW5wdXQgdGltZXpvbmUgYW5kIHRoZSBjdXJyZW50IHN5c3RlbSB0aW1lem9uZS5cbiAgICAgKiAoZGVmYXVsdCA9IGN1cnJlbnQgdGltZXpvbmUpXG4gICAgICovXG4gICAgdGltZXpvbmU/OiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbi8qKlxuICogUGFyc2VkIHJlc3VsdCBvciBmaW5hbCBvdXRwdXQuXG4gKiBFYWNoIHJlc3VsdCBvYmplY3QgcmVwcmVzZW50cyBhIGRhdGUvdGltZSAob3IgZGF0ZS90aW1lLXJhbmdlKSBtZW50aW9uaW5nIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRSZXN1bHQge1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG4gICAgcmVhZG9ubHkgaW5kZXg6IG51bWJlcjtcbiAgICByZWFkb25seSB0ZXh0OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBzdGFydDogUGFyc2VkQ29tcG9uZW50cztcbiAgICByZWFkb25seSBlbmQ/OiBQYXJzZWRDb21wb25lbnRzO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBgcmVzdWx0LnN0YXJ0YC5cbiAgICAgKi9cbiAgICBkYXRlKCk6IERhdGU7XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIGRlYnVnZ2luZyB0YWdzIGNvbWJpbmVkIG9mIHRoZSBgcmVzdWx0LnN0YXJ0YCBhbmQgYHJlc3VsdC5lbmRgLlxuICAgICAqL1xuICAgIHRhZ3MoKTogU2V0PHN0cmluZz47XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIHBhcnNlZCBkYXRlL3RpbWUgY29tcG9uZW50cyAoZS5nLiBkYXksIGhvdXIsIG1pbnV0ZSwgLi4uLCBldGMpLlxuICpcbiAqIEVhY2ggcGFyc2VkIGNvbXBvbmVudCBoYXMgdGhyZWUgZGlmZmVyZW50IGxldmVscyBvZiBjZXJ0YWludHkuXG4gKiAtICpDZXJ0YWluKiAob3IgKktub3duKik6IFRoZSBjb21wb25lbnQgaXMgZGlyZWN0bHkgbWVudGlvbmVkIGFuZCBwYXJzZWQuXG4gKiAtICpJbXBsaWVkKjogVGhlIGNvbXBvbmVudCBpcyBub3QgZGlyZWN0bHkgbWVudGlvbmVkLCBidXQgaW1wbGllZCBieSBvdGhlciBwYXJzZWQgaW5mb3JtYXRpb24uXG4gKiAtICpVbmtub3duKjogQ29tcGxldGVseSBubyBtZW50aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgdGhlIGNvbXBvbmVudCBjZXJ0YWlubHkgaWYgdGhlIGNvbXBvbmVudCBpcyAqQ2VydGFpbiogKG9yICpLbm93biopXG4gICAgICovXG4gICAgaXNDZXJ0YWluKGNvbXBvbmVudDogQ29tcG9uZW50KTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY29tcG9uZW50IHZhbHVlIGZvciBlaXRoZXIgKkNlcnRhaW4qIG9yICpJbXBsaWVkKiB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQoY29tcG9uZW50OiBDb21wb25lbnQpOiBudW1iZXIgfCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBhIGphdmFzY3JpcHQgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgZGF0ZSgpOiBEYXRlO1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybiBkZWJ1Z2dpbmcgdGFncyBvZiB0aGUgcGFyc2VkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICB0YWdzKCk6IFNldDxzdHJpbmc+O1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnQgPVxuICAgIHwgXCJ5ZWFyXCJcbiAgICB8IFwibW9udGhcIlxuICAgIHwgXCJkYXlcIlxuICAgIHwgXCJ3ZWVrZGF5XCJcbiAgICB8IFwiaG91clwiXG4gICAgfCBcIm1pbnV0ZVwiXG4gICAgfCBcInNlY29uZFwiXG4gICAgfCBcIm1pbGxpc2Vjb25kXCJcbiAgICB8IFwibWVyaWRpZW1cIlxuICAgIHwgXCJ0aW1lem9uZU9mZnNldFwiO1xuXG5leHBvcnQgdHlwZSBUaW1ldW5pdCA9IFwieWVhclwiIHwgXCJtb250aFwiIHwgXCJ3ZWVrXCIgfCBcImRheVwiIHwgXCJob3VyXCIgfCBcIm1pbnV0ZVwiIHwgXCJzZWNvbmRcIiB8IFwibWlsbGlzZWNvbmRcIjtcblxuZXhwb3J0IGVudW0gTWVyaWRpZW0ge1xuICAgIEFNID0gMCxcbiAgICBQTSA9IDEsXG59XG5cbmV4cG9ydCBlbnVtIFdlZWtkYXkge1xuICAgIFNVTkRBWSA9IDAsXG4gICAgTU9OREFZID0gMSxcbiAgICBUVUVTREFZID0gMixcbiAgICBXRURORVNEQVkgPSAzLFxuICAgIFRIVVJTREFZID0gNCxcbiAgICBGUklEQVkgPSA1LFxuICAgIFNBVFVSREFZID0gNixcbn1cblxuZXhwb3J0IGVudW0gTW9udGgge1xuICAgIEpBTlVBUlkgPSAxLFxuICAgIEZFQlJVQVJZID0gMixcbiAgICBNQVJDSCA9IDMsXG4gICAgQVBSSUwgPSA0LFxuICAgIE1BWSA9IDUsXG4gICAgSlVORSA9IDYsXG4gICAgSlVMWSA9IDcsXG4gICAgQVVHVVNUID0gOCxcbiAgICBTRVBURU1CRVIgPSA5LFxuICAgIE9DVE9CRVIgPSAxMCxcbiAgICBOT1ZFTUJFUiA9IDExLFxuICAgIERFQ0VNQkVSID0gMTIsXG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBBc3NpZ24gKGZvcmNlIHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIGRheSBhcyB0aGUgYHRhcmdldGAuXG4gKiBAcGFyYW0gY29tcG9uZW50IHRoZSBjb21wb25lbnQgdG8gYmUgdXBkYXRlZC5cbiAqIEBwYXJhbSB0YXJnZXQgdGhlIHRhcmdldCBkYXRlIHdpdGggdGltZXpvbmUgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXQ6IERhdGUpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiZGF5XCIsIHRhcmdldC5nZXREYXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtb250aFwiLCB0YXJnZXQuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIHRhcmdldC5nZXRGdWxsWWVhcigpKTtcbn1cblxuLyoqXG4gKiBBc3NpZ24gKGZvcmNlIHVwZGF0ZSkgdGhlIHBhcnNpbmcgY29tcG9uZW50IHRvIHRoZSBzYW1lIHRpbWUgYXMgdGhlIGB0YXJnZXRgLlxuICogQHBhcmFtIGNvbXBvbmVudCB0aGUgY29tcG9uZW50IHRvIGJlIHVwZGF0ZWQuXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSB0YXJnZXQgZGF0ZSB3aXRoIHRpbWV6b25lIGFkanVzdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGFyZ2V0LmdldEhvdXJzKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGFyZ2V0LmdldE1pbnV0ZXMoKSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0YXJnZXQuZ2V0U2Vjb25kcygpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0LmdldE1pbGxpc2Vjb25kcygpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgdGFyZ2V0LmdldEhvdXJzKCkgPCAxMiA/IE1lcmlkaWVtLkFNIDogTWVyaWRpZW0uUE0pO1xufVxuXG4vKipcbiAqIEltcGx5ICh3ZWFrbHkgdXBkYXRlKSB0aGUgcGFyc2luZyBjb21wb25lbnQgdG8gdGhlIHNhbWUgZGF5IGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiZGF5XCIsIHRhcmdldC5nZXREYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldC5nZXRNb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwieWVhclwiLCB0YXJnZXQuZ2V0RnVsbFllYXIoKSk7XG59XG5cbi8qKlxuICogSW1wbHkgKHdlYWtseSB1cGRhdGUpIHRoZSBwYXJzaW5nIGNvbXBvbmVudCB0byB0aGUgc2FtZSB0aW1lIGFzIHRoZSBgdGFyZ2V0YC5cbiAqIEBwYXJhbSBjb21wb25lbnQgdGhlIGNvbXBvbmVudCB0byBiZSB1cGRhdGVkLlxuICogQHBhcmFtIHRhcmdldCB0aGUgdGFyZ2V0IGRhdGUgd2l0aCB0aW1lem9uZSBhZGp1c3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0OiBEYXRlKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0YXJnZXQuZ2V0SG91cnMoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRhcmdldC5nZXRNaW51dGVzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0YXJnZXQuZ2V0U2Vjb25kcygpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0YXJnZXQuZ2V0TWlsbGlzZWNvbmRzKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIHRhcmdldC5nZXRIb3VycygpIDwgMTIgPyBNZXJpZGllbS5BTSA6IE1lcmlkaWVtLlBNKTtcbn1cbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBUaW1lem9uZUFiYnJNYXAsIFdlZWtkYXksIE1vbnRoIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFRJTUVaT05FX0FCQlJfTUFQOiBUaW1lem9uZUFiYnJNYXAgPSB7XG4gICAgQUNEVDogNjMwLFxuICAgIEFDU1Q6IDU3MCxcbiAgICBBRFQ6IC0xODAsXG4gICAgQUVEVDogNjYwLFxuICAgIEFFU1Q6IDYwMCxcbiAgICBBRlQ6IDI3MCxcbiAgICBBS0RUOiAtNDgwLFxuICAgIEFLU1Q6IC01NDAsXG4gICAgQUxNVDogMzYwLFxuICAgIEFNU1Q6IC0xODAsXG4gICAgQU1UOiAtMjQwLFxuICAgIEFOQVNUOiA3MjAsXG4gICAgQU5BVDogNzIwLFxuICAgIEFRVFQ6IDMwMCxcbiAgICBBUlQ6IC0xODAsXG4gICAgQVNUOiAtMjQwLFxuICAgIEFXRFQ6IDU0MCxcbiAgICBBV1NUOiA0ODAsXG4gICAgQVpPU1Q6IDAsXG4gICAgQVpPVDogLTYwLFxuICAgIEFaU1Q6IDMwMCxcbiAgICBBWlQ6IDI0MCxcbiAgICBCTlQ6IDQ4MCxcbiAgICBCT1Q6IC0yNDAsXG4gICAgQlJTVDogLTEyMCxcbiAgICBCUlQ6IC0xODAsXG4gICAgQlNUOiA2MCxcbiAgICBCVFQ6IDM2MCxcbiAgICBDQVNUOiA0ODAsXG4gICAgQ0FUOiAxMjAsXG4gICAgQ0NUOiAzOTAsXG4gICAgQ0RUOiAtMzAwLFxuICAgIENFU1Q6IDEyMCxcbiAgICAvLyBOb3RlOiBNYW55IHNvdXJjZXMgZGVmaW5lIENFVCBhcyBhIGNvbnN0YW50IFVUQysxLiBJbiBjb21tb24gdXNhZ2UsIGhvd2V2ZXIsXG4gICAgLy8gQ0VUIHVzdWFsbHkgcmVmZXJzIHRvIHRoZSB0aW1lIG9ic2VydmVkIGluIG1vc3Qgb2YgRXVyb3BlLCBiZSBpdCBzdGFuZGFyZCB0aW1lIG9yIGRheWxpZ2h0IHNhdmluZyB0aW1lLlxuICAgIENFVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogMiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguT0NUT0JFUiwgV2Vla2RheS5TVU5EQVksIDMpLFxuICAgIH0sXG4gICAgQ0hBRFQ6IDgyNSxcbiAgICBDSEFTVDogNzY1LFxuICAgIENLVDogLTYwMCxcbiAgICBDTFNUOiAtMTgwLFxuICAgIENMVDogLTI0MCxcbiAgICBDT1Q6IC0zMDAsXG4gICAgQ1NUOiAtMzYwLFxuICAgIENUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNSAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTYgKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIENWVDogLTYwLFxuICAgIENYVDogNDIwLFxuICAgIENoU1Q6IDYwMCxcbiAgICBEQVZUOiA0MjAsXG4gICAgRUFTU1Q6IC0zMDAsXG4gICAgRUFTVDogLTM2MCxcbiAgICBFQVQ6IDE4MCxcbiAgICBFQ1Q6IC0zMDAsXG4gICAgRURUOiAtMjQwLFxuICAgIEVFU1Q6IDE4MCxcbiAgICBFRVQ6IDEyMCxcbiAgICBFR1NUOiAwLFxuICAgIEVHVDogLTYwLFxuICAgIEVTVDogLTMwMCxcbiAgICBFVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogLTQgKiA2MCxcbiAgICAgICAgdGltZXpvbmVPZmZzZXROb25Ec3Q6IC01ICogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5NQVJDSCwgV2Vla2RheS5TVU5EQVksIDIsIDIpLFxuICAgICAgICBkc3RFbmQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBGSlNUOiA3ODAsXG4gICAgRkpUOiA3MjAsXG4gICAgRktTVDogLTE4MCxcbiAgICBGS1Q6IC0yNDAsXG4gICAgRk5UOiAtMTIwLFxuICAgIEdBTFQ6IC0zNjAsXG4gICAgR0FNVDogLTU0MCxcbiAgICBHRVQ6IDI0MCxcbiAgICBHRlQ6IC0xODAsXG4gICAgR0lMVDogNzIwLFxuICAgIEdNVDogMCxcbiAgICBHU1Q6IDI0MCxcbiAgICBHWVQ6IC0yNDAsXG4gICAgSEFBOiAtMTgwLFxuICAgIEhBQzogLTMwMCxcbiAgICBIQURUOiAtNTQwLFxuICAgIEhBRTogLTI0MCxcbiAgICBIQVA6IC00MjAsXG4gICAgSEFSOiAtMzYwLFxuICAgIEhBU1Q6IC02MDAsXG4gICAgSEFUOiAtOTAsXG4gICAgSEFZOiAtNDgwLFxuICAgIEhLVDogNDgwLFxuICAgIEhMVjogLTIxMCxcbiAgICBITkE6IC0yNDAsXG4gICAgSE5DOiAtMzYwLFxuICAgIEhORTogLTMwMCxcbiAgICBITlA6IC00ODAsXG4gICAgSE5SOiAtNDIwLFxuICAgIEhOVDogLTE1MCxcbiAgICBITlk6IC01NDAsXG4gICAgSE9WVDogNDIwLFxuICAgIElDVDogNDIwLFxuICAgIElEVDogMTgwLFxuICAgIElPVDogMzYwLFxuICAgIElSRFQ6IDI3MCxcbiAgICBJUktTVDogNTQwLFxuICAgIElSS1Q6IDU0MCxcbiAgICBJUlNUOiAyMTAsXG4gICAgSVNUOiAzMzAsXG4gICAgSlNUOiA1NDAsXG4gICAgS0dUOiAzNjAsXG4gICAgS1JBU1Q6IDQ4MCxcbiAgICBLUkFUOiA0ODAsXG4gICAgS1NUOiA1NDAsXG4gICAgS1VZVDogMjQwLFxuICAgIExIRFQ6IDY2MCxcbiAgICBMSFNUOiA2MzAsXG4gICAgTElOVDogODQwLFxuICAgIE1BR1NUOiA3MjAsXG4gICAgTUFHVDogNzIwLFxuICAgIE1BUlQ6IC01MTAsXG4gICAgTUFXVDogMzAwLFxuICAgIE1EVDogLTM2MCxcbiAgICBNRVNaOiAxMjAsXG4gICAgTUVaOiA2MCxcbiAgICBNSFQ6IDcyMCxcbiAgICBNTVQ6IDM5MCxcbiAgICBNU0Q6IDI0MCxcbiAgICBNU0s6IDE4MCxcbiAgICBNU1Q6IC00MjAsXG4gICAgTVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC02ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNyAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTUFSQ0gsIFdlZWtkYXkuU1VOREFZLCAyLCAyKSxcbiAgICAgICAgZHN0RW5kOiAoeWVhcjogbnVtYmVyKSA9PiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5OT1ZFTUJFUiwgV2Vla2RheS5TVU5EQVksIDEsIDIpLFxuICAgIH0sXG4gICAgTVVUOiAyNDAsXG4gICAgTVZUOiAzMDAsXG4gICAgTVlUOiA0ODAsXG4gICAgTkNUOiA2NjAsXG4gICAgTkRUOiAtOTAsXG4gICAgTkZUOiA2OTAsXG4gICAgTk9WU1Q6IDQyMCxcbiAgICBOT1ZUOiAzNjAsXG4gICAgTlBUOiAzNDUsXG4gICAgTlNUOiAtMTUwLFxuICAgIE5VVDogLTY2MCxcbiAgICBOWkRUOiA3ODAsXG4gICAgTlpTVDogNzIwLFxuICAgIE9NU1NUOiA0MjAsXG4gICAgT01TVDogNDIwLFxuICAgIFBEVDogLTQyMCxcbiAgICBQRVQ6IC0zMDAsXG4gICAgUEVUU1Q6IDcyMCxcbiAgICBQRVRUOiA3MjAsXG4gICAgUEdUOiA2MDAsXG4gICAgUEhPVDogNzgwLFxuICAgIFBIVDogNDgwLFxuICAgIFBLVDogMzAwLFxuICAgIFBNRFQ6IC0xMjAsXG4gICAgUE1TVDogLTE4MCxcbiAgICBQT05UOiA2NjAsXG4gICAgUFNUOiAtNDgwLFxuICAgIFBUOiB7XG4gICAgICAgIHRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0OiAtNyAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogLTggKiA2MCxcbiAgICAgICAgZHN0U3RhcnQ6ICh5ZWFyOiBudW1iZXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXI6IG51bWJlcikgPT4gZ2V0TnRoV2Vla2RheU9mTW9udGgoeWVhciwgTW9udGguTk9WRU1CRVIsIFdlZWtkYXkuU1VOREFZLCAxLCAyKSxcbiAgICB9LFxuICAgIFBXVDogNTQwLFxuICAgIFBZU1Q6IC0xODAsXG4gICAgUFlUOiAtMjQwLFxuICAgIFJFVDogMjQwLFxuICAgIFNBTVQ6IDI0MCxcbiAgICBTQVNUOiAxMjAsXG4gICAgU0JUOiA2NjAsXG4gICAgU0NUOiAyNDAsXG4gICAgU0dUOiA0ODAsXG4gICAgU1JUOiAtMTgwLFxuICAgIFNTVDogLTY2MCxcbiAgICBUQUhUOiAtNjAwLFxuICAgIFRGVDogMzAwLFxuICAgIFRKVDogMzAwLFxuICAgIFRLVDogNzgwLFxuICAgIFRMVDogNTQwLFxuICAgIFRNVDogMzAwLFxuICAgIFRWVDogNzIwLFxuICAgIFVMQVQ6IDQ4MCxcbiAgICBVVEM6IDAsXG4gICAgVVlTVDogLTEyMCxcbiAgICBVWVQ6IC0xODAsXG4gICAgVVpUOiAzMDAsXG4gICAgVkVUOiAtMjEwLFxuICAgIFZMQVNUOiA2NjAsXG4gICAgVkxBVDogNjYwLFxuICAgIFZVVDogNjYwLFxuICAgIFdBU1Q6IDEyMCxcbiAgICBXQVQ6IDYwLFxuICAgIFdFU1Q6IDYwLFxuICAgIFdFU1o6IDYwLFxuICAgIFdFVDogMCxcbiAgICBXRVo6IDAsXG4gICAgV0ZUOiA3MjAsXG4gICAgV0dTVDogLTEyMCxcbiAgICBXR1Q6IC0xODAsXG4gICAgV0lCOiA0MjAsXG4gICAgV0lUOiA1NDAsXG4gICAgV0lUQTogNDgwLFxuICAgIFdTVDogNzgwLFxuICAgIFdUOiAwLFxuICAgIFlBS1NUOiA2MDAsXG4gICAgWUFLVDogNjAwLFxuICAgIFlBUFQ6IDYwMCxcbiAgICBZRUtTVDogMzYwLFxuICAgIFlFS1Q6IDM2MCxcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkYXRlIHdoaWNoIGlzIHRoZSBudGggb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuIG1vbnRoIGFuZCB5ZWFyLlxuICpcbiAqIEBwYXJhbSB5ZWFyIFRoZSB5ZWFyIGZvciB3aGljaCB0byBmaW5kIHRoZSBkYXRlXG4gKiBAcGFyYW0gbW9udGggVGhlIG1vbnRoIGluIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIHdlZWtkYXkgVGhlIHdlZWtkYXkgb24gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gbiBUaGUgbnRoIG9jY3VyZW5jZSBvZiB0aGUgZ2l2ZW4gd2Vla2RheSBvbiB0aGUgbW9udGggdG8gcmV0dXJuXG4gKiBAcGFyYW0gaG91ciBUaGUgaG91ciBvZiBkYXkgd2hpY2ggc2hvdWxkIGJlIHNldCBvbiB0aGUgcmV0dXJuZWQgZGF0ZVxuICogQHJldHVybiBUaGUgZGF0ZSB3aGljaCBpcyB0aGUgbnRoIG9jY3VyZW5jZSBvZiBhIGdpdmVuIHdlZWtkYXkgaW4gYSBnaXZlblxuICogICAgICAgICBtb250aCBhbmQgeWVhciwgYXQgdGhlIGdpdmVuIGhvdXIgb2YgZGF5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdGhXZWVrZGF5T2ZNb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBNb250aCwgd2Vla2RheTogV2Vla2RheSwgbjogMSB8IDIgfCAzIHwgNCwgaG91ciA9IDApOiBEYXRlIHtcbiAgICBsZXQgZGF5T2ZNb250aCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBkYXlPZk1vbnRoKys7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheU9mTW9udGgpO1xuICAgICAgICBpZiAoZGF0ZS5nZXREYXkoKSA9PT0gd2Vla2RheSkgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoLCBob3VyKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgd2hpY2ggaXMgdGhlIGxhc3Qgb2NjdXJlbmNlIG9mIGEgZ2l2ZW4gd2Vla2RheSBpbiBhIGdpdmVuIG1vbnRoIGFuZCB5ZWFyLlxuICpcbiAqIEBwYXJhbSB5ZWFyIFRoZSB5ZWFyIGZvciB3aGljaCB0byBmaW5kIHRoZSBkYXRlXG4gKiBAcGFyYW0gbW9udGggVGhlIG1vbnRoIGluIHdoaWNoIHRoZSBkYXRlIG9jY3Vyc1xuICogQHBhcmFtIHdlZWtkYXkgVGhlIHdlZWtkYXkgb24gd2hpY2ggdGhlIGRhdGUgb2NjdXJzXG4gKiBAcGFyYW0gaG91ciBUaGUgaG91ciBvZiBkYXkgd2hpY2ggc2hvdWxkIGJlIHNldCBvbiB0aGUgcmV0dXJuZWQgZGF0ZVxuICogQHJldHVybiBUaGUgZGF0ZSB3aGljaCBpcyB0aGUgbGFzdCBvY2N1cmVuY2Ugb2YgYSBnaXZlbiB3ZWVrZGF5IGluIGEgZ2l2ZW5cbiAqICAgICAgICAgbW9udGggYW5kIHllYXIsIGF0IHRoZSBnaXZlbiBob3VyIG9mIGRheVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IE1vbnRoLCB3ZWVrZGF5OiBXZWVrZGF5LCBob3VyID0gMCk6IERhdGUge1xuICAgIC8vIFByb2NlZHVyZTogRmluZCB0aGUgZmlyc3Qgd2Vla2RheSBvZiB0aGUgbmV4dCBtb250aCwgY29tcGFyZSB3aXRoIHRoZSBnaXZlbiB3ZWVrZGF5LFxuICAgIC8vIGFuZCB1c2UgdGhlIGRpZmZlcmVuY2UgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IGRheXMgdG8gc3VidHJhY3QgZnJvbSB0aGUgZmlyc3Qgb2YgdGhlIG5leHQgbW9udGguXG4gICAgY29uc3Qgb25lSW5kZXhlZFdlZWtkYXkgPSB3ZWVrZGF5ID09PSAwID8gNyA6IHdlZWtkYXk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSArIDEsIDEsIDEyKTtcbiAgICBjb25zdCBmaXJzdFdlZWtkYXlOZXh0TW9udGggPSBkYXRlLmdldERheSgpID09PSAwID8gNyA6IGRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGRheURpZmY7XG4gICAgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA9PT0gb25lSW5kZXhlZFdlZWtkYXkpIGRheURpZmYgPSA3O1xuICAgIGVsc2UgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA8IG9uZUluZGV4ZWRXZWVrZGF5KSBkYXlEaWZmID0gNyArIGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGVsc2UgZGF5RGlmZiA9IGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRheURpZmYpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUuZ2V0RGF0ZSgpLCBob3VyKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBhbmQgcmV0dXJucyB0aW1lem9uZSBvZmZzZXQuIElmIHRpbWV6b25lSW5wdXQgaXMgbnVtZXJpYywgaXQgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSwgbG9vayBmb3IgdGltZXpvbmUgb2Zmc2V0c1xuICogaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogdGltZXpvbmVPdmVycmlkZXMgLT4ge0BsaW5rIFRJTUVaT05FX0FCQlJfTUFQfS5cbiAqXG4gKiBAcGFyYW0gdGltZXpvbmVJbnB1dCBVcHBlcmNhc2UgdGltZXpvbmUgYWJicmV2aWF0aW9uIG9yIG51bWVyaWMgb2Zmc2V0IGluIG1pbnV0ZXNcbiAqIEBwYXJhbSBkYXRlIFRoZSBkYXRlIHRvIHVzZSB0byBkZXRlcm1pbmUgd2hldGhlciB0byByZXR1cm4gRFNUIG9mZnNldHMgZm9yIGFtYmlndW91cyB0aW1lem9uZXNcbiAqIEBwYXJhbSB0aW1lem9uZU92ZXJyaWRlcyBPdmVycmlkZXMgZm9yIHRpbWV6b25lc1xuICogQHJldHVybiB0aW1lem9uZSBvZmZzZXQgaW4gbWludXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9UaW1lem9uZU9mZnNldChcbiAgICB0aW1lem9uZUlucHV0Pzogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGRhdGU/OiBEYXRlLFxuICAgIHRpbWV6b25lT3ZlcnJpZGVzOiBUaW1lem9uZUFiYnJNYXAgPSB7fVxuKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKHRpbWV6b25lSW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRpbWV6b25lSW5wdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRpbWV6b25lSW5wdXQ7XG4gICAgfVxuXG4gICAgY29uc3QgbWF0Y2hlZFRpbWV6b25lID0gdGltZXpvbmVPdmVycmlkZXNbdGltZXpvbmVJbnB1dF0gPz8gVElNRVpPTkVfQUJCUl9NQVBbdGltZXpvbmVJbnB1dF07XG4gICAgaWYgKG1hdGNoZWRUaW1lem9uZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBUaGlzIG1lYW5zIHRoYXQgd2UgaGF2ZSBtYXRjaGVkIGFuIHVuYW1iaWd1b3VzIHRpbWV6b25lXG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkVGltZXpvbmUgPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lO1xuICAgIH1cblxuICAgIC8vIFRoZSBtYXRjaGVkIHRpbWV6b25lIGlzIGFuIGFtYmlndW91cyB0aW1lem9uZSwgd2hlcmUgdGhlIG9mZnNldCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIGNvbnRleHQgKHJlZkRhdGUpXG4gICAgLy8gaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3Mgb3Igbm90LlxuXG4gICAgLy8gV2l0aG91dCByZWZEYXRlIGFzIGNvbnRleHQsIHRoZXJlJ3Mgbm8gd2F5IHRvIGtub3cgaWYgRFNUIG9yIG5vbi1EU1Qgb2Zmc2V0IHNob3VsZCBiZSB1c2VkLiBSZXR1cm4gbnVsbCBpbnN0ZWFkLlxuICAgIGlmIChkYXRlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIERTVCBvZmZzZXQgaWYgdGhlIHJlZkRhdGUgaXMgZHVyaW5nIGRheWxpZ2h0IHNhdmluZ3NcbiAgICBpZiAoXG4gICAgICAgIGRheWpzKGRhdGUpLmlzQWZ0ZXIobWF0Y2hlZFRpbWV6b25lLmRzdFN0YXJ0KGRhdGUuZ2V0RnVsbFllYXIoKSkpICYmXG4gICAgICAgICFkYXlqcyhkYXRlKS5pc0FmdGVyKG1hdGNoZWRUaW1lem9uZS5kc3RFbmQoZGF0ZS5nZXRGdWxsWWVhcigpKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRUaW1lem9uZS50aW1lem9uZU9mZnNldER1cmluZ0RzdDtcbiAgICB9XG5cbiAgICAvLyByZWZEYXRlIGlzIG5vdCBkdXJpbmcgRFNUID0+IHJldHVybiBub24tRFNUIG9mZnNldFxuICAgIHJldHVybiBtYXRjaGVkVGltZXpvbmUudGltZXpvbmVPZmZzZXROb25Ec3Q7XG59XG4iLCAiaW1wb3J0IHsgVGltZXVuaXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgVGltZXVuaXRTaG9ydGVuID0gXCJ5XCIgfCBcIm1vXCIgfCBcIk1cIiB8IFwid1wiIHwgXCJkXCIgfCBcImhcIiB8IFwibVwiIHwgXCJzXCIgfCBcIm1zXCI7XG5leHBvcnQgdHlwZSBUaW1ldW5pdFNwZWNpYWwgPSBcInF1YXJ0ZXJcIjtcblxuLyoqXG4gKiBBIHR5cGUgcmVwcmVzZW50IGEgZGlyZWN0ZWQgdGltZSBkdXJhdGlvbiBhcyBhIHNldCBvZiB2YWx1ZXMgYnkgdGltZXVuaXRzLlxuICogVGhlIHBvc2l0aXZlIHZhbHVlcyBtZWFuIHRoZSB0aW1lIGR1cmF0aW9uIGludG8gdGhlIGZ1dHVyZS5cbiAqL1xuZXhwb3J0IHR5cGUgRHVyYXRpb24gPSB7IFtjIGluIFRpbWV1bml0IHwgVGltZXVuaXRTcGVjaWFsIHwgVGltZXVuaXRTaG9ydGVuXT86IG51bWJlciB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGRhdGUgYWZ0ZXIgYWRkaW5nIHRoZSBnaXZlbiBgZHVyYXRpb25gIHRvIGByZWZgLlxuICogQHBhcmFtIHJlZlxuICogQHBhcmFtIGR1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREdXJhdGlvbihyZWY6IERhdGUsIGR1cmF0aW9uOiBEdXJhdGlvbik6IERhdGUge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUocmVmKTtcblxuICAgIC8vIFJlcGxhY2Ugc2hvcnQgdGltZXVuaXQga2V5cyB3aXRoIGZ1bGwgdGltZXVuaXQga2V5c1xuICAgIGlmIChkdXJhdGlvbltcInlcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJ5ZWFyXCJdID0gZHVyYXRpb25bXCJ5XCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJ5XCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJtb1wiXSkge1xuICAgICAgICBkdXJhdGlvbltcIm1vbnRoXCJdID0gZHVyYXRpb25bXCJtb1wiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wibW9cIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcIk1cIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJtb250aFwiXSA9IGR1cmF0aW9uW1wiTVwiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wiTVwiXTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uW1wid1wiXSkge1xuICAgICAgICBkdXJhdGlvbltcIndlZWtcIl0gPSBkdXJhdGlvbltcIndcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcIndcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcImRcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJkYXlcIl0gPSBkdXJhdGlvbltcImRcIl07XG4gICAgICAgIGRlbGV0ZSBkdXJhdGlvbltcImRcIl07XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbltcImhcIl0pIHtcbiAgICAgICAgZHVyYXRpb25bXCJob3VyXCJdID0gZHVyYXRpb25bXCJoXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJoXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJtXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wibWludXRlXCJdID0gZHVyYXRpb25bXCJtXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJtXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJzXCJdKSB7XG4gICAgICAgIGR1cmF0aW9uW1wic2Vjb25kXCJdID0gZHVyYXRpb25bXCJzXCJdO1xuICAgICAgICBkZWxldGUgZHVyYXRpb25bXCJzXCJdO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25bXCJtc1wiXSkge1xuICAgICAgICBkdXJhdGlvbltcIm1pbGxpc2Vjb25kXCJdID0gZHVyYXRpb25bXCJtc1wiXTtcbiAgICAgICAgZGVsZXRlIGR1cmF0aW9uW1wibXNcIl07XG4gICAgfVxuXG4gICAgaWYgKFwieWVhclwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcInllYXJcIl0pO1xuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcInllYXJcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24ubW9udGggPSBkdXJhdGlvbj8ubW9udGggPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1vbnRoICs9IHJlbWFpbmluZ0ZyYWN0aW9uICogMTI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwicXVhcnRlclwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcInF1YXJ0ZXJcIl0pO1xuICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGZsb29yICogMyk7XG4gICAgfVxuICAgIGlmIChcIm1vbnRoXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wibW9udGhcIl0pO1xuICAgICAgICBkYXRlLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcIm1vbnRoXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLndlZWsgPSBkdXJhdGlvbj8ud2VlayA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24ud2VlayArPSByZW1haW5pbmdGcmFjdGlvbiAqIDQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwid2Vla1wiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcIndlZWtcIl0pO1xuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBmbG9vciAqIDcpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wid2Vla1wiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5kYXkgPSBkdXJhdGlvbj8uZGF5ID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5kYXkgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImRheVwiIGluIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZsb29yID0gTWF0aC5mbG9vcihkdXJhdGlvbltcImRheVwiXSk7XG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGZsb29yKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nRnJhY3Rpb24gPSBkdXJhdGlvbltcImRheVwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5ob3VyID0gZHVyYXRpb24/LmhvdXIgPz8gMDtcbiAgICAgICAgICAgIGR1cmF0aW9uLmhvdXIgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDI0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJob3VyXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wiaG91clwiXSk7XG4gICAgICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wiaG91clwiXSAtIGZsb29yO1xuICAgICAgICBpZiAocmVtYWluaW5nRnJhY3Rpb24gPiAwKSB7XG4gICAgICAgICAgICBkdXJhdGlvbi5taW51dGUgPSBkdXJhdGlvbj8ubWludXRlID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5taW51dGUgKz0gTWF0aC5yb3VuZChyZW1haW5pbmdGcmFjdGlvbiAqIDYwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoXCJtaW51dGVcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJtaW51dGVcIl0pO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXMoZGF0ZS5nZXRNaW51dGVzKCkgKyBmbG9vcik7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0ZyYWN0aW9uID0gZHVyYXRpb25bXCJtaW51dGVcIl0gLSBmbG9vcjtcbiAgICAgICAgaWYgKHJlbWFpbmluZ0ZyYWN0aW9uID4gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24uc2Vjb25kID0gZHVyYXRpb24/LnNlY29uZCA/PyAwO1xuICAgICAgICAgICAgZHVyYXRpb24uc2Vjb25kICs9IE1hdGgucm91bmQocmVtYWluaW5nRnJhY3Rpb24gKiA2MCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwic2Vjb25kXCIgaW4gZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yKGR1cmF0aW9uW1wic2Vjb25kXCJdKTtcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKGRhdGUuZ2V0U2Vjb25kcygpICsgZmxvb3IpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdGcmFjdGlvbiA9IGR1cmF0aW9uW1wic2Vjb25kXCJdIC0gZmxvb3I7XG4gICAgICAgIGlmIChyZW1haW5pbmdGcmFjdGlvbiA+IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kID0gZHVyYXRpb24/Lm1pbGxpc2Vjb25kID8/IDA7XG4gICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZCArPSBNYXRoLnJvdW5kKHJlbWFpbmluZ0ZyYWN0aW9uICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwibWlsbGlzZWNvbmRcIiBpbiBkdXJhdGlvbikge1xuICAgICAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3IoZHVyYXRpb25bXCJtaWxsaXNlY29uZFwiXSk7XG4gICAgICAgIGRhdGUuc2V0TWlsbGlzZWNvbmRzKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgKyBmbG9vcik7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcmV2ZXJzZWQgZHVyYXRpb24gKGUuZy4gYmFjayBpbnRvIHRoZSBwYXN0LCBpbnN0ZWFkIG9mIGZ1dHVyZSlcbiAqIEBwYXJhbSBkdXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uOiBEdXJhdGlvbik6IER1cmF0aW9uIHtcbiAgICBjb25zdCByZXZlcnNlZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIGR1cmF0aW9uKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcbiAgICAgICAgcmV2ZXJzZWRba2V5XSA9IC1kdXJhdGlvbltrZXldO1xuICAgIH1cbiAgICByZXR1cm4gcmV2ZXJzZWQgYXMgRHVyYXRpb247XG59XG4iLCAidHlwZSBEaWN0aW9uYXJ5TGlrZSA9IHN0cmluZ1tdIHwgeyBbd29yZDogc3RyaW5nXTogdW5rbm93biB9IHwgTWFwPHN0cmluZywgdW5rbm93bj47XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFRpbWV1bml0UGF0dGVybihcbiAgICBwcmVmaXg6IHN0cmluZyxcbiAgICBzaW5nbGVUaW1ldW5pdFBhdHRlcm46IHN0cmluZyxcbiAgICBjb25uZWN0b3JQYXR0ZXJuID0gXCJcXFxcc3swLDV9LD9cXFxcc3swLDV9XCJcbik6IHN0cmluZyB7XG4gICAgY29uc3Qgc2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlID0gc2luZ2xlVGltZXVuaXRQYXR0ZXJuLnJlcGxhY2UoL1xcKCg/IVxcPykvZywgXCIoPzpcIik7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0oPzoke2Nvbm5lY3RvclBhdHRlcm59JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KXswLDEwfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGVybXMoZGljdGlvbmFyeTogRGljdGlvbmFyeUxpa2UpOiBzdHJpbmdbXSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdO1xuICAgIGlmIChkaWN0aW9uYXJ5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAga2V5cyA9IFsuLi5kaWN0aW9uYXJ5XTtcbiAgICB9IGVsc2UgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAga2V5cyA9IEFycmF5LmZyb20oKGRpY3Rpb25hcnkgYXMgTWFwPHN0cmluZywgdW5rbm93bj4pLmtleXMoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGRpY3Rpb25hcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hBbnlQYXR0ZXJuKGRpY3Rpb25hcnk6IERpY3Rpb25hcnlMaWtlKTogc3RyaW5nIHtcbiAgICAvLyBUT0RPOiBNb3JlIGVmZmljaWVudCByZWdleCBwYXR0ZXJuIGJ5IGNvbnNpZGVyaW5nIGR1cGxpY2F0ZWQgcHJlZml4XG5cbiAgICBjb25zdCBqb2luZWRUZXJtcyA9IGV4dHJhY3RUZXJtcyhkaWN0aW9uYXJ5KVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcbiAgICAgICAgLmpvaW4oXCJ8XCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcXFxcLlwiKTtcblxuICAgIHJldHVybiBgKD86JHtqb2luZWRUZXJtc30pYDtcbn1cbiIsICJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbi8qKlxuICogRmluZCB0aGUgbW9zdCBsaWtlbHkgeWVhciwgZnJvbSBhIHJhdyBudW1iZXIuIEZvciBleGFtcGxlOlxuICogMTk5NyA9PiAxOTk3XG4gKiA5NyA9PiAxOTk3XG4gKiAxMiA9PiAyMDEyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTW9zdExpa2VseUFEWWVhcih5ZWFyTnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh5ZWFyTnVtYmVyIDwgMTAwKSB7XG4gICAgICAgIGlmICh5ZWFyTnVtYmVyID4gNTApIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMTkwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyTnVtYmVyICsgMjAwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB5ZWFyTnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFllYXJDbG9zZXN0VG9SZWYocmVmRGF0ZTogRGF0ZSwgZGF5OiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vRmluZCB0aGUgbW9zdCBhcHByb3ByaWF0ZWQgeWVhclxuICAgIGNvbnN0IHJlZk1vbWVudCA9IGRheWpzKHJlZkRhdGUpO1xuICAgIGxldCBkYXRlTW9tZW50ID0gcmVmTW9tZW50O1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50Lm1vbnRoKG1vbnRoIC0gMSk7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQuZGF0ZShkYXkpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LnllYXIocmVmTW9tZW50LnllYXIoKSk7XG5cbiAgICBjb25zdCBuZXh0WWVhciA9IGRhdGVNb21lbnQuYWRkKDEsIFwieVwiKTtcbiAgICBjb25zdCBsYXN0WWVhciA9IGRhdGVNb21lbnQuYWRkKC0xLCBcInlcIik7XG4gICAgaWYgKE1hdGguYWJzKG5leHRZZWFyLmRpZmYocmVmTW9tZW50KSkgPCBNYXRoLmFicyhkYXRlTW9tZW50LmRpZmYocmVmTW9tZW50KSkpIHtcbiAgICAgICAgZGF0ZU1vbWVudCA9IG5leHRZZWFyO1xuICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMobGFzdFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbGFzdFllYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVNb21lbnQueWVhcigpO1xufVxuIiwgImltcG9ydCB7IE9wVW5pdFR5cGUsIFFVbml0VHlwZSB9IGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuLCByZXBlYXRlZFRpbWV1bml0UGF0dGVybiB9IGZyb20gXCIuLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5pbXBvcnQgeyBmaW5kTW9zdExpa2VseUFEWWVhciB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWV1bml0c1wiO1xuaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgV0VFS0RBWV9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBXZWVrZGF5IH0gPSB7XG4gICAgc3VuZGF5OiAwLFxuICAgIHN1bjogMCxcbiAgICBcInN1bi5cIjogMCxcbiAgICBtb25kYXk6IDEsXG4gICAgbW9uOiAxLFxuICAgIFwibW9uLlwiOiAxLFxuICAgIHR1ZXNkYXk6IDIsXG4gICAgdHVlOiAyLFxuICAgIFwidHVlLlwiOiAyLFxuICAgIHdlZG5lc2RheTogMyxcbiAgICB3ZWQ6IDMsXG4gICAgXCJ3ZWQuXCI6IDMsXG4gICAgdGh1cnNkYXk6IDQsXG4gICAgdGh1cnM6IDQsXG4gICAgXCJ0aHVycy5cIjogNCxcbiAgICB0aHVyOiA0LFxuICAgIFwidGh1ci5cIjogNCxcbiAgICB0aHU6IDQsXG4gICAgXCJ0aHUuXCI6IDQsXG4gICAgZnJpZGF5OiA1LFxuICAgIGZyaTogNSxcbiAgICBcImZyaS5cIjogNSxcbiAgICBzYXR1cmRheTogNixcbiAgICBzYXQ6IDYsXG4gICAgXCJzYXQuXCI6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGphbnVhcnk6IDEsXG4gICAgZmVicnVhcnk6IDIsXG4gICAgbWFyY2g6IDMsXG4gICAgYXByaWw6IDQsXG4gICAgbWF5OiA1LFxuICAgIGp1bmU6IDYsXG4gICAganVseTogNyxcbiAgICBhdWd1c3Q6IDgsXG4gICAgc2VwdGVtYmVyOiA5LFxuICAgIG9jdG9iZXI6IDEwLFxuICAgIG5vdmVtYmVyOiAxMSxcbiAgICBkZWNlbWJlcjogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgTU9OVEhfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgLi4uRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksXG4gICAgamFuOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIGZlYjogMixcbiAgICBcImZlYi5cIjogMixcbiAgICBtYXI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgYXByOiA0LFxuICAgIFwiYXByLlwiOiA0LFxuICAgIGp1bjogNixcbiAgICBcImp1bi5cIjogNixcbiAgICBqdWw6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgYXVnOiA4LFxuICAgIFwiYXVnLlwiOiA4LFxuICAgIHNlcDogOSxcbiAgICBcInNlcC5cIjogOSxcbiAgICBzZXB0OiA5LFxuICAgIFwic2VwdC5cIjogOSxcbiAgICBvY3Q6IDEwLFxuICAgIFwib2N0LlwiOiAxMCxcbiAgICBub3Y6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBkZWM6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5cbmV4cG9ydCBjb25zdCBJTlRFR0VSX1dPUkRfRElDVElPTkFSWTogeyBbd29yZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgb25lOiAxLFxuICAgIHR3bzogMixcbiAgICB0aHJlZTogMyxcbiAgICBmb3VyOiA0LFxuICAgIGZpdmU6IDUsXG4gICAgc2l4OiA2LFxuICAgIHNldmVuOiA3LFxuICAgIGVpZ2h0OiA4LFxuICAgIG5pbmU6IDksXG4gICAgdGVuOiAxMCxcbiAgICBlbGV2ZW46IDExLFxuICAgIHR3ZWx2ZTogMTIsXG59O1xuXG5leHBvcnQgY29uc3QgT1JESU5BTF9XT1JEX0RJQ1RJT05BUlk6IHsgW3dvcmQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIGZpcnN0OiAxLFxuICAgIHNlY29uZDogMixcbiAgICB0aGlyZDogMyxcbiAgICBmb3VydGg6IDQsXG4gICAgZmlmdGg6IDUsXG4gICAgc2l4dGg6IDYsXG4gICAgc2V2ZW50aDogNyxcbiAgICBlaWdodGg6IDgsXG4gICAgbmludGg6IDksXG4gICAgdGVudGg6IDEwLFxuICAgIGVsZXZlbnRoOiAxMSxcbiAgICB0d2VsZnRoOiAxMixcbiAgICB0aGlydGVlbnRoOiAxMyxcbiAgICBmb3VydGVlbnRoOiAxNCxcbiAgICBmaWZ0ZWVudGg6IDE1LFxuICAgIHNpeHRlZW50aDogMTYsXG4gICAgc2V2ZW50ZWVudGg6IDE3LFxuICAgIGVpZ2h0ZWVudGg6IDE4LFxuICAgIG5pbmV0ZWVudGg6IDE5LFxuICAgIHR3ZW50aWV0aDogMjAsXG4gICAgXCJ0d2VudHkgZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHktZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHkgc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5LXNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eSB0aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eS10aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eSBmb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHktZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5IGZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5LWZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5IHNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5LXNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5IHNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHktc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eSBlaWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHktZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5IG5pbnRoXCI6IDI5LFxuICAgIFwidHdlbnR5LW5pbnRoXCI6IDI5LFxuICAgIFwidGhpcnRpZXRoXCI6IDMwLFxuICAgIFwidGhpcnR5IGZpcnN0XCI6IDMxLFxuICAgIFwidGhpcnR5LWZpcnN0XCI6IDMxLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlI6IHsgW3dvcmQ6IHN0cmluZ106IE9wVW5pdFR5cGUgfCBRVW5pdFR5cGUgfSA9IHtcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgZGF5OiBcImRcIixcbiAgICBkYXlzOiBcImRcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZOiB7IFt3b3JkOiBzdHJpbmddOiBPcFVuaXRUeXBlIHwgUVVuaXRUeXBlIH0gPSB7XG4gICAgczogXCJzZWNvbmRcIixcbiAgICBzZWM6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbTogXCJtaW51dGVcIixcbiAgICBtaW46IFwibWludXRlXCIsXG4gICAgbWluczogXCJtaW51dGVcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBoOiBcImhvdXJcIixcbiAgICBocjogXCJob3VyXCIsXG4gICAgaHJzOiBcImhvdXJcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgZDogXCJkXCIsXG4gICAgZGF5OiBcImRcIixcbiAgICBkYXlzOiBcImRcIixcbiAgICB3OiBcIndcIixcbiAgICB3ZWVrOiBcIndlZWtcIixcbiAgICB3ZWVrczogXCJ3ZWVrXCIsXG4gICAgbW86IFwibW9udGhcIixcbiAgICBtb246IFwibW9udGhcIixcbiAgICBtb3M6IFwibW9udGhcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF0cjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHk6IFwieWVhclwiLFxuICAgIHlyOiBcInllYXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgLy8gQWxzbywgbWVyZ2UgdGhlIGVudHJpZXMgZnJvbSB0aGUgZnVsbC1uYW1lIGRpY3Rpb25hcnkuXG4gICAgLy8gV2UgbGVhdmUgdGhlIGR1cGxpY2F0ZWQgZW50cmllcyBmb3IgcmVhZGFiaWxpdHkuXG4gICAgLi4uVElNRV9VTklUX0RJQ1RJT05BUllfTk9fQUJCUixcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IE5VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKFxuICAgIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZXG4pfXxbMC05XSt8WzAtOV0rXFxcXC5bMC05XSt8aGFsZig/OlxcXFxzezAsMn1hbj8pP3xhbj9cXFxcYig/OlxcXFxzezAsMn1mZXcpP3xmZXd8c2V2ZXJhbHx0aGV8YT9cXFxcc3swLDJ9Y291cGxlXFxcXHN7MCwyfSg/Om9mKT8pYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBudW0gPSBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIElOVEVHRVJfV09SRF9ESUNUSU9OQVJZW251bV07XG4gICAgfSBlbHNlIGlmIChudW0gPT09IFwiYVwiIHx8IG51bSA9PT0gXCJhblwiIHx8IG51bSA9PSBcInRoZVwiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9mZXcvKSkge1xuICAgICAgICByZXR1cm4gMztcbiAgICB9IGVsc2UgaWYgKG51bS5tYXRjaCgvaGFsZi8pKSB7XG4gICAgICAgIHJldHVybiAwLjU7XG4gICAgfSBlbHNlIGlmIChudW0ubWF0Y2goL2NvdXBsZS8pKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH0gZWxzZSBpZiAobnVtLm1hdGNoKC9zZXZlcmFsLykpIHtcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiA9IGAoPzoke21hdGNoQW55UGF0dGVybihPUkRJTkFMX1dPUkRfRElDVElPTkFSWSl9fFswLTldezEsMn0oPzpzdHxuZHxyZHx0aCk/KWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBPUkRJTkFMX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cblxuICAgIG51bSA9IG51bS5yZXBsYWNlKC8oPzpzdHxuZHxyZHx0aCkkL2ksIFwiXCIpO1xuICAgIHJldHVybiBwYXJzZUludChudW0pO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBZRUFSX1BBVFRFUk4gPSBgKD86WzEtOV1bMC05XXswLDN9XFxcXHN7MCwyfSg/OkJFfEFEfEJDfEJDRXxDRSl8WzEtMl1bMC05XXszfXxbNS05XVswLTldfDJbMC01XSlgO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWWVhcihtYXRjaDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoL0JFL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQnVkZGhpc3QgRXJhXG4gICAgICAgIG1hdGNoID0gbWF0Y2gucmVwbGFjZSgvQkUvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCkgLSA1NDM7XG4gICAgfVxuXG4gICAgaWYgKC9CQ0U/L2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgLy8gQmVmb3JlIENocmlzdCwgQmVmb3JlIENvbW1vbiBFcmFcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CQ0U/L2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gLXBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG5cbiAgICBpZiAoLyhBRHxDRSkvaS50ZXN0KG1hdGNoKSkge1xuICAgICAgICAvLyBBbm5vIERvbWluaSwgQ29tbW9uIEVyYVxuICAgICAgICBtYXRjaCA9IG1hdGNoLnJlcGxhY2UoLyhBRHxDRSkvaSwgXCJcIik7XG4gICAgICAgIHJldHVybiBwYXJzZUludChtYXRjaCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICByZXR1cm4gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgU0lOR0xFX1RJTUVfVU5JVF9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pYDtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUkVHRVggPSBuZXcgUmVnRXhwKFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiwgXCJpXCIpO1xuXG5jb25zdCBTSU5HTEVfVElNRV9VTklUX05PX0FCQlJfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihcbiAgICBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSXG4pfSlgO1xuXG5jb25zdCBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk4gPSBgXFxcXHN7MCw1fSw/KD86XFxcXHMqYW5kKT9cXFxcc3swLDV9YDtcblxuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfUEFUVEVSTiA9IHJlcGVhdGVkVGltZXVuaXRQYXR0ZXJuKFxuICAgIGAoPzooPzphYm91dHxhcm91bmQpXFxcXHN7MCwzfSk/YCxcbiAgICBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sXG4gICAgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOXG4pO1xuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oXG4gICAgYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLFxuICAgIFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOLFxuICAgIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZVVuaXRzKHRpbWV1bml0VGV4dCk6IG51bGwgfCBUaW1lVW5pdHMge1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHt9O1xuICAgIGxldCByZW1haW5pbmdUZXh0ID0gdGltZXVuaXRUZXh0O1xuICAgIGxldCBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCk7XG4gICAgICAgIHJlbWFpbmluZ1RleHQgPSByZW1haW5pbmdUZXh0LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhmcmFnbWVudHMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0RGF0ZVRpbWVGcmFnbWVudChmcmFnbWVudHMsIG1hdGNoKSB7XG4gICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eW2EtekEtWl0rJC8pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoWzFdKTtcbiAgICBjb25zdCB1bml0ID0gVElNRV9VTklUX0RJQ1RJT05BUllbbWF0Y2hbMl0udG9Mb3dlckNhc2UoKV07XG4gICAgZnJhZ21lbnRzW3VuaXRdID0gbnVtO1xufVxuIiwgImltcG9ydCB7IFBhcnNlciwgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoZWNrcyBmb3Igd29yZCBib3VuZGFyeSBhbmQgYXBwbHlpbmcgdGhlIGlubmVyIHBhdHRlcm4gYW5kIGV4dHJhY3Rpb24uXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgYWJzdHJhY3QgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwO1xuICAgIGFic3RyYWN0IGlubmVyRXh0cmFjdChcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5XG4gICAgKTogUGFyc2luZ0NvbXBvbmVudHMgfCBQYXJzaW5nUmVzdWx0IHwgeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBudWxsO1xuXG4gICAgLy8gT3ZlcnJpZGVzIHRoaXMgbWV0aG9kIGlmIHRoZXJlIGlzIG1vcmUgZWZmaWNpZW50IHdheSB0byBjaGVjayBmb3IgaW5uZXIgcGF0dGVybiBjaGFuZ2UuXG4gICAgaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBjdXJyZW50SW5uZXJQYXR0ZXJuOiBSZWdFeHApOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJQYXR0ZXJuKGNvbnRleHQpICE9PSBjdXJyZW50SW5uZXJQYXR0ZXJuO1xuICAgIH1cblxuICAgIHBhdHRlcm5MZWZ0Qm91bmRhcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoXFxcXFd8XilgO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkSW5uZXJQYXR0ZXJuPzogUmVnRXhwID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZFBhdHRlcm4/OiBSZWdFeHAgPSBudWxsO1xuXG4gICAgcGF0dGVybihjb250ZXh0OiBQYXJzaW5nQ29udGV4dCk6IFJlZ0V4cCB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZElubmVyUGF0dGVybikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0LCB0aGlzLmNhY2hlZElubmVyUGF0dGVybikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQYXR0ZXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuID0gdGhpcy5pbm5lclBhdHRlcm4oY29udGV4dCk7XG4gICAgICAgIHRoaXMuY2FjaGVkUGF0dGVybiA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICBgJHt0aGlzLnBhdHRlcm5MZWZ0Qm91bmRhcnkoKX0ke3RoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLnNvdXJjZX1gLFxuICAgICAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4uZmxhZ3NcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUGF0dGVybjtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBtYXRjaFsxXSA/PyBcIlwiO1xuICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgaGVhZGVyLmxlbmd0aDtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zdWJzdHJpbmcoaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgbWF0Y2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1hdGNoW2kgLSAxXSA9IG1hdGNoW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgVElNRV9VTklUU19QQVRURVJOLCBwYXJzZVRpbWVVbml0cywgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG5jb25zdCBQQVRURVJOX1dJVEhfT1BUSU9OQUxfUFJFRklYID0gbmV3IFJlZ0V4cChcbiAgICBgKD86KD86d2l0aGlufGlufGZvcilcXFxccyopP2AgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVggPSBuZXcgUmVnRXhwKFxuICAgIGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgICAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUID0gbmV3IFJlZ0V4cChcbiAgICBgKD86d2l0aGlufGlufGZvcilcXFxccypgICtcbiAgICAgICAgYCg/Oig/OmFib3V0fGFyb3VuZHxyb3VnaGx5fGFwcHJveGltYXRlbHl8anVzdClcXFxccyooPzp+XFxcXHMqKT8pPygke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSkoPz1cXFxcV3wkKWAsXG4gICAgXCJpXCJcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSA/IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggOiBQQVRURVJOX1dJVEhfUFJFRklYO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgLy8gRXhjbHVkZSBcImZvciB0aGUgdW5pdFwiIHBoYXNlcywgZS5nLiBcImZvciB0aGUgeWVhclwiXG4gICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXmZvclxccyp0aGVcXHMqXFx3Ky8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsxXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbWVVbml0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cykpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBZRUFSX1BBVFRFUk4sIHBhcnNlWWVhciB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9SRElOQUxfTlVNQkVSX1BBVFRFUk4sIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCg/Om9uXFxcXHN7MCwzfSk/YCArXG4gICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgYFxcXFxzezAsM30oPzp0b3xcXFxcLXxcXFxcXHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbCk/XFxcXHN7MCwzfWAgK1xuICAgICAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KWAgK1xuICAgICAgICBcIik/XCIgK1xuICAgICAgICBgKD86LXwvfFxcXFxzezAsM30oPzpvZik/XFxcXHN7MCwzfSlgICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgYCg/Oi18L3wsP1xcXFxzezAsM30pYCArXG4gICAgICAgICAgICBgKCR7WUVBUl9QQVRURVJOfSg/IVxcXFx3KSlgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG5cbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICAvLyBlLmcuIFwiWzk2IEF1Z11cIiA9PiBcIjlbNiBBdWddXCIsIHdlIG5lZWQgdG8gc2hpZnQgYXdheSBmcm9tIHRoZSBuZXh0IG51bWJlclxuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoW0RBVEVfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhck51bWJlciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyTnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuXG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPUkRJTkFMX05VTUJFUl9QQVRURVJOLCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIFwiKD86LXwvfFxcXFxzKiw/XFxcXHMqKVwiICtcbiAgICAgICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KSg/IVxcXFxzKig/OmFtfHBtKSlcXFxccypgICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBcIig/OnRvfFxcXFwtKVxcXFxzKlwiICtcbiAgICAgICAgICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlcXFxccypgICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPzpcIiArXG4gICAgICAgICAgICBgKD86LXwvfFxcXFxzKixcXFxccyp8XFxcXHMrKWAgK1xuICAgICAgICAgICAgYCgke1lFQVJfUEFUVEVSTn0pYCArXG4gICAgICAgIFwiKT9cIiArXG4gICAgICAgIFwiKD89XFxcXFd8JCkoPyFcXFxcOlxcXFxkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMTtcbmNvbnN0IERBVEVfR1JPVVAgPSAyO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcblxuLyoqXG4gKiBUaGUgcGFyc2VyIGZvciBwYXJzaW5nIFVTJ3MgZGF0ZSBmb3JtYXQgdGhhdCBiZWdpbiB3aXRoIG1vbnRoJ3MgbmFtZS5cbiAqICAtIEphbnVhcnkgMTNcbiAqICAtIEphbnVhcnkgMTMsIDIwMTJcbiAqICAtIEphbnVhcnkgMTMgLSAxNSwgMjAxMlxuICogTm90ZTogV2F0Y2ggb3V0IGZvcjpcbiAqICAtIEphbnVhcnkgMTI6MDBcbiAqICAtIEphbnVhcnkgMTIuNDRcbiAqICAtIEphbnVhcnkgMTIyMjM0NFxuICogIC0gSmFudWFyeSAyMSAod2hlbiBzaG91bGRTa2lwWWVhckxpa2VEYXRlPXRydWUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIHNob3VsZFNraXBZZWFyTGlrZURhdGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihzaG91bGRTa2lwWWVhckxpa2VEYXRlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSA9IHNob3VsZFNraXBZZWFyTGlrZURhdGU7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNraXAgdGhlIGNhc2Ugd2hlcmUgdGhlIGRheSBsb29rcyBsaWtlIGEgeWVhciAoZXg6IEphbnVhcnkgMjEpXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFNraXBZZWFyTGlrZURhdGUpIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hbREFURV9UT19HUk9VUF0gJiYgIW1hdGNoW1lFQVJfR1JPVVBdICYmIG1hdGNoW0RBVEVfR1JPVVBdLm1hdGNoKC9eMlswLTVdJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHRcbiAgICAgICAgICAgIC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyh7XG4gICAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIik7XG5cbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXh0IGNhbiBiZSAncmFuZ2UnIHZhbHVlLiBTdWNoIGFzICdKYW51YXJ5IDEyIC0gMTMsIDIwMTInXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfVE9fR1JPVVBdKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IGNvbXBvbmVudHM7XG4gICAgICAgIHJlc3VsdC5lbmQgPSBjb21wb25lbnRzLmNsb25lKCk7XG4gICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwiZGF5XCIsIGVuZERhdGUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZLCBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFyc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm5cIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoKD86aW4pXFxcXHMqKT9gICtcbiAgICAgICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgICAgIGBcXFxccypgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICBgKD86LHwtfG9mKT9cXFxccyooJHtZRUFSX1BBVFRFUk59KT9gICtcbiAgICAgICAgXCIpP1wiICtcbiAgICAgICAgXCIoPz1bXlxcXFxzXFxcXHddfFxcXFxzK1teMC05XXxcXFxccyskfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IFlFQVJfR1JPVVAgPSAzO1xuXG4vKipcbiAqIFRoZSBwYXJzZXIgZm9yIHBhcnNpbmcgbW9udGggbmFtZSBhbmQgeWVhci5cbiAqIC0gSmFudWFyeSwgMjAxMlxuICogLSBKYW51YXJ5IDIwMTJcbiAqIC0gSmFudWFyeVxuICogKGluKSBKYW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Nb250aE5hbWVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gbWF0Y2hbTU9OVEhfTkFNRV9HUk9VUF0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBza2lwIHNvbWUgdW5saWtlbHkgd29yZHMgXCJqYW5cIiwgXCJtYXJcIiwgLi5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmxlbmd0aCA8PSAzICYmICFGVUxMX01PTlRIX05BTUVfRElDVElPTkFSWVttb250aE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICsgKG1hdGNoW1BSRUZJWF9HUk9VUF0gfHwgXCJcIikubGVuZ3RoLFxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIDEpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYWRkVGFnKFwicGFyc2VyL0VOTW9udGhOYW1lUGFyc2VyXCIpO1xuXG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttb250aE5hbWVdO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlWWVhcihtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIDEsIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbi8qXG4gICAgRGF0ZSBmb3JtYXQgd2l0aCBzbGFzaCBcIi9cIiBiZXR3ZWVuIG51bWJlcnMgbGlrZSBFTlNsYXNoRGF0ZUZvcm1hdFBhcnNlcixcbiAgICBidXQgdGhpcyBwYXJzZXIgZXhwZWN0IHllYXIgYmVmb3JlIG1vbnRoIGFuZCBkYXRlLlxuICAgIC0gWVlZWS9NTS9ERFxuICAgIC0gWVlZWS1NTS1ERFxuICAgIC0gWVlZWS5NTS5ERFxuKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAoWzAtOV17NH0pWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoPzooJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KXwoWzAtOV17MSwyfSkpWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgICAgIGAoWzAtOV17MSwyfSlgICtcbiAgICAgICAgXCIoPz1cXFxcV3wkKVwiLFxuICAgIFwiaVwiXG4pO1xuXG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOWWVhck1vbnRoRGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9udGhEYXRlT3JkZXI6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpbm5lclBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBtb250aCA9IG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF1cbiAgICAgICAgICAgID8gcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSlcbiAgICAgICAgICAgIDogTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcblxuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vbnRoRGF0ZU9yZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgW21vbnRoLCBkYXldID0gW2RheSwgbW9udGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IDMxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKFswLTldfDBbMS05XXwxWzAxMl0pLyhbMC05XXs0fSlcIiArIFwiXCIsIFwiaVwiKTtcblxuY29uc3QgTU9OVEhfR1JPVVAgPSAxO1xuY29uc3QgWUVBUl9HUk9VUCA9IDI7XG5cbi8qKlxuICogTW9udGgvWWVhciBkYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChhbHNvIFwiLVwiIGFuZCBcIi5cIikgYmV0d2VlbiBudW1iZXJzXG4gKiAtIDExLzA1XG4gKiAtIDA2LzIwMDVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1hdGNoW01PTlRIX0dST1VQXSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKS5pbXBseShcImRheVwiLCAxKS5hc3NpZ24oXCJtb250aFwiLCBtb250aCkuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gcHJpbWFyeVRpbWVQYXR0ZXJuKGxlZnRCb3VuZGFyeTogc3RyaW5nLCBwcmltYXJ5UHJlZml4OiBzdHJpbmcsIHByaW1hcnlTdWZmaXg6IHN0cmluZywgZmxhZ3M6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgYCR7bGVmdEJvdW5kYXJ5fWAgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVByZWZpeH1gICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58OnxcdUZGMUEpYCArXG4gICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICAgICAgYCg/Ojp8XHVGRjFBKWAgK1xuICAgICAgICAgICAgICAgICAgICBgKFxcXFxkezJ9KWAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oXFxcXGR7MSw2fSkpP2AgK1xuICAgICAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCk/YCArXG4gICAgICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICAgICAgYCR7cHJpbWFyeVN1ZmZpeH1gLFxuICAgICAgICBmbGFnc1xuICAgICk7XG59XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuZnVuY3Rpb24gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZTogc3RyaW5nLCBmb2xsb3dpbmdTdWZmaXg6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgICBgXigke2ZvbGxvd2luZ1BoYXNlfSlgICtcbiAgICAgICAgICAgIGAoXFxcXGR7MSw0fSlgICtcbiAgICAgICAgICAgIGAoPzpgICtcbiAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICBgKFxcXFxkezEsMn0pYCArXG4gICAgICAgICAgICAgICAgYCg/OmAgK1xuICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXFx1RkYxQSlgICtcbiAgICAgICAgICAgICAgICAgICAgYChcXFxcZHsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgICAgICAgICBgKT9gICtcbiAgICAgICAgICAgIGApP2AgK1xuICAgICAgICAgICAgYCg/OlxcXFxzKihhXFxcXC5tXFxcXC58cFxcXFwubVxcXFwufGFtP3xwbT8pKT9gICtcbiAgICAgICAgICAgIGAke2ZvbGxvd2luZ1N1ZmZpeH1gLFxuICAgICAgICBcImlcIlxuICAgICk7XG59XG5cbmNvbnN0IEhPVVJfR1JPVVAgPSAyO1xuY29uc3QgTUlOVVRFX0dST1VQID0gMztcbmNvbnN0IFNFQ09ORF9HUk9VUCA9IDQ7XG5jb25zdCBNSUxMSV9TRUNPTkRfR1JPVVAgPSA1O1xuY29uc3QgQU1fUE1fSE9VUl9HUk9VUCA9IDY7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIGltcGxlbWVudHMgUGFyc2VyIHtcbiAgICBhYnN0cmFjdCBwcmltYXJ5UHJlZml4KCk6IHN0cmluZztcbiAgICBhYnN0cmFjdCBmb2xsb3dpbmdQaGFzZSgpOiBzdHJpbmc7XG4gICAgc3RyaWN0TW9kZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cblxuICAgIHBhdHRlcm5GbGFncygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAoXnxcXFxcc3xUfFxcXFxiKWA7XG4gICAgfVxuXG4gICAgcHJpbWFyeVN1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1N1ZmZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cblxuICAgIHBhdHRlcm4oY29udGV4dDogUGFyc2luZ0NvbnRleHQpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICB9XG5cbiAgICBleHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBzdGFydENvbXBvbmVudHMgPSB0aGlzLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIXN0YXJ0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG1hdGNoIHNlZW0gbGlrZSBhIHllYXIgZS5nLiBcIjIwMTMuMTI6Li4uXCIsXG4gICAgICAgICAgICAvLyB0aGVuIHNraXBzIHRoZSB5ZWFyIHBhcnQgYW5kIHRyeSBtYXRjaGluZyBhZ2Fpbi5cbiAgICAgICAgICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlxcZHs0fS8pKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gNDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDsgLy8gU2tpcCBvdmVyIHBvdGVudGlhbCBvdmVybGFwcGluZyBwYXR0ZXJuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsxXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRleHQgPSBtYXRjaFswXS5zdWJzdHJpbmcobWF0Y2hbMV0ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0LCBzdGFydENvbXBvbmVudHMpO1xuICAgICAgICBtYXRjaC5pbmRleCArPSBtYXRjaFswXS5sZW5ndGg7IC8vIFNraXAgb3ZlciBwb3RlbnRpYWwgb3ZlcmxhcHBpbmcgcGF0dGVyblxuXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKG1hdGNoLmluZGV4KTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGF0dGVybiA9IHRoaXMuZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nTWF0Y2ggPSBmb2xsb3dpbmdQYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgLy8gUGF0dGVybiBcIjQ1Ni0xMlwiLCBcIjIwMjItMTJcIiBzaG91bGQgbm90IGJlIHRpbWUgd2l0aG91dCBwcm9wZXIgY29udGV4dFxuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZHszLDR9LykgJiYgZm9sbG93aW5nTWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezIsNH0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGUuZy4gXCIyMDIyLTEyOjAxLi4uXCJcbiAgICAgICAgICAgIGlmIChmb2xsb3dpbmdNYXRjaFswXS5tYXRjaCgvXlxccyooWystXSlcXHMqXFxkezJ9XFxXXFxkezJ9LykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICFmb2xsb3dpbmdNYXRjaCB8fFxuICAgICAgICAgICAgLy8gUGF0dGVybiBcIllZLllZIC1YWFhYXCIgaXMgbW9yZSBsaWtlIHRpbWV6b25lIG9mZnNldFxuICAgICAgICAgICAgZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHszLDR9JC8pXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRob3V0Rm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIGZvbGxvd2luZ01hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gZm9sbG93aW5nTWF0Y2hbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHQsXG4gICAgICAgIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5LFxuICAgICAgICBzdHJpY3QgPSBmYWxzZVxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBtaW51dGUgPSAwO1xuICAgICAgICBsZXQgbWVyaWRpZW0gPSBudWxsO1xuXG4gICAgICAgIC8vIC0tLS0tIEhvdXJzXG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBpZiAoaG91ciA+IDEwMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSB8fCBtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBNaW51dGVzXG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdLmxlbmd0aCA9PSAxICYmICFtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2luZ2xlIGRpZ2l0IG1pbnV0ZSBlLmcuIFwiYXQgMS4xIHh4XCJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLSBBTSAmIFBNXG4gICAgICAgIGlmIChtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA+IDEyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIE1pbGxpc2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIFNlY29uZFxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IG51bGwgfCBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG5cbiAgICAgICAgLy8gLS0tLS0gTWlsbGlzZWNvbmRcbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0gU2Vjb25kXG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KG1hdGNoW0hPVVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IDA7XG4gICAgICAgIGxldCBtZXJpZGllbSA9IC0xO1xuXG4gICAgICAgIC8vIC0tLS0tIE1pbnV0ZVxuICAgICAgICBpZiAobWF0Y2hbTUlOVVRFX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBwYXJzZUludChtYXRjaFtNSU5VVEVfR1JPVVBdKTtcbiAgICAgICAgfSBlbHNlIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBtaW51dGUgPSBob3VyICUgMTAwO1xuICAgICAgICAgICAgaG91ciA9IE1hdGguZmxvb3IoaG91ciAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID49IDYwIHx8IGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaG91ciA+PSAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tIEFNICYgUE1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYW1wbSA9IG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcImFcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uQU07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgPT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgaG91ciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50cy5pc0NlcnRhaW4oXCJkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgY29tcG9uZW50cy5nZXQoXCJkYXlcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLlBNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyICE9IDEyKSBob3VyICs9IDEyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZXJpZGllbSA9PSBNZXJpZGllbS5BTSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmdldChcImhvdXJcIikgIT0gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJob3VyXCIsIHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGhvdXIpO1xuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbnV0ZVwiLCBtaW51dGUpO1xuXG4gICAgICAgIGlmIChtZXJpZGllbSA+PSAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXRQTSA9IHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSAmJiByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA+IDEyO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QXRQTSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAtIDEyID4gaG91cikge1xuICAgICAgICAgICAgICAgICAgICAvLyAxMHBtIC0gMSAoYW0pXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPD0gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXBvbmVudHMuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIC8vIFNpbmdsZSBkaWdpdCAoZS5nIFwiMVwiKSBzaG91bGQgbm90IGJlIGNvdW50ZWQgYXMgdGltZSBleHByZXNzaW9uICh3aXRob3V0IHByb3BlciBjb250ZXh0KVxuICAgICAgICBpZiAocmVzdWx0LnRleHQubWF0Y2goL15cXGQkLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhyZWUgb3IgbW9yZSBkaWdpdCAoZS5nLiBcIjIwM1wiLCBcIjIwMTRcIikgc2hvdWxkIG5vdCBiZSBjb3VudGVkIGFzIHRpbWUgZXhwcmVzc2lvbiAod2l0aG91dCBwcm9wZXIgY29udGV4dClcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkXFxkXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnN0ZWFkIG9mIFwiYW0vcG1cIiwgaXQgZW5kcyB3aXRoIFwiYVwiIG9yIFwicFwiIChlLmcgXCIxYVwiLCBcIjEyM3BcIiksIHRoaXMgc2VlbXMgdW5saWtlbHlcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9cXGRbYXBBUF0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBvciBkb3RzXG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzFdO1xuXG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDFcIiBvciBcImF0IDEuMlwiKSwgdGhpcyBzaG91bGQgbm90IGJlIGFjY2VwdGVkXG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIGRvdCBzaW5nbGUgZGlnaXQsIGUuZy4gXCJhdCAxLjJcIlxuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlcnMuaW5jbHVkZXMoXCIuXCIpICYmICFlbmRpbmdOdW1iZXJzLm1hdGNoKC9cXGQoXFwuXFxkezJ9KSskLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggbnVtYmVycyBhYm92ZSAyNCwgZS5nLiBcImF0IDI1XCJcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlclZhbCA9IHBhcnNlSW50KGVuZGluZ051bWJlcnMpO1xuICAgICAgICAgICAgaWYgKGVuZGluZ051bWJlclZhbCA+IDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkKy1cXGQrJC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGVuZHMgb25seSB3aXRoIG51bWJlcnMgb3IgZG90c1xuICAgICAgICBjb25zdCBlbmRpbmdXaXRoTnVtYmVycyA9IHJlc3VsdC50ZXh0Lm1hdGNoKC9bXlxcZDouXShcXGRbXFxkLl0rKVxccyotXFxzKihcXGRbXFxkLl0rKSQvKTtcbiAgICAgICAgaWYgKGVuZGluZ1dpdGhOdW1iZXJzKSB7XG4gICAgICAgICAgICAvLyBJbiBzdHJpY3QgbW9kZSAoZS5nLiBcImF0IDEtM1wiIG9yIFwiYXQgMS4yIC0gMi4zXCIpLCB0aGlzIHNob3VsZCBub3QgYmUgYWNjZXB0ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJzOiBzdHJpbmcgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnM6IHN0cmluZyA9IGVuZGluZ1dpdGhOdW1iZXJzWzJdO1xuICAgICAgICAgICAgLy8gSWYgaXQgZW5kcyBvbmx5IHdpdGggZG90IHNpbmdsZSBkaWdpdCwgZS5nLiBcImF0IDEuMlwiXG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdCBlbmRzIG9ubHkgd2l0aCBudW1iZXJzIGFib3ZlIDI0LCBlLmcuIFwiYXQgMjVcIlxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlclZhbCA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQgfHwgc3RhcnRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhY2hlZFByaW1hcnlQcmVmaXggPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkUHJpbWFyeVN1ZmZpeCA9IG51bGw7XG4gICAgcHJpdmF0ZSBjYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBudWxsO1xuXG4gICAgZ2V0UHJpbWFyeVRpbWVQYXR0ZXJuVGhyb3VnaENhY2hlKCkge1xuICAgICAgICBjb25zdCBwcmltYXJ5UHJlZml4ID0gdGhpcy5wcmltYXJ5UHJlZml4KCk7XG4gICAgICAgIGNvbnN0IHByaW1hcnlTdWZmaXggPSB0aGlzLnByaW1hcnlTdWZmaXgoKTtcblxuICAgICAgICBpZiAodGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID09PSBwcmltYXJ5UHJlZml4ICYmIHRoaXMuY2FjaGVkUHJpbWFyeVN1ZmZpeCA9PT0gcHJpbWFyeVN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBwcmltYXJ5VGltZVBhdHRlcm4oXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlQYXR0ZXJuTGVmdEJvdW5kYXJ5KCksXG4gICAgICAgICAgICBwcmltYXJ5UHJlZml4LFxuICAgICAgICAgICAgcHJpbWFyeVN1ZmZpeCxcbiAgICAgICAgICAgIHRoaXMucGF0dGVybkZsYWdzKClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gcHJpbWFyeVByZWZpeDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gcHJpbWFyeVN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBudWxsO1xuICAgIHByaXZhdGUgY2FjaGVkRm9sbG93aW5nU3VmZml4ID0gbnVsbDtcbiAgICBwcml2YXRlIGNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBudWxsO1xuXG4gICAgZ2V0Rm9sbG93aW5nVGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKSB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1BoYXNlID0gdGhpcy5mb2xsb3dpbmdQaGFzZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdTdWZmaXggPSB0aGlzLmZvbGxvd2luZ1N1ZmZpeCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID09PSBmb2xsb3dpbmdQaGFzZSAmJiB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9PT0gZm9sbG93aW5nU3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuID0gZm9sbG93aW5nVGltZVBhdHRlbihmb2xsb3dpbmdQaGFzZSwgZm9sbG93aW5nU3VmZml4KTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdQaGFzZSA9IGZvbGxvd2luZ1BoYXNlO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9IGZvbGxvd2luZ1N1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbjtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlKSB7XG4gICAgICAgIHN1cGVyKHN0cmljdE1vZGUpO1xuICAgIH1cblxuICAgIGZvbGxvd2luZ1BoYXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlxcXFxzKig/OlxcXFwtfFxcXFxcdTIwMTN8XFxcXH58XFxcXFx1MzAxQ3x0b3x1bnRpbHx0aHJvdWdofHRpbGx8XFxcXD8pXFxcXHMqXCI7XG4gICAgfVxuXG4gICAgcHJpbWFyeVByZWZpeCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCIoPzooPzphdHxmcm9tKVxcXFxzKik/P1wiO1xuICAgIH1cblxuICAgIHByaW1hcnlTdWZmaXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiKD86XFxcXHMqKD86b1xcXFxXKmNsb2NrfGF0XFxcXHMqbmlnaHR8aW5cXFxccyp0aGVcXFxccyooPzptb3JuaW5nfGFmdGVybm9vbikpKT8oPyEvKSg/PVxcXFxXfCQpXCI7XG4gICAgfVxuXG4gICAgZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBudWxsIHwgUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdFByaW1hcnlUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgIGlmICghY29tcG9uZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuaWdodFwiKSkge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDYgJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaFswXS5lbmRzV2l0aChcImFmdGVybm9vblwiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPj0gMCAmJiBob3VyIDw9IDYpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgY29tcG9uZW50cy5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibW9ybmluZ1wiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMuYWRkVGFnKFwicGFyc2VyL0VOVGltZUV4cHJlc3Npb25QYXJzZXJcIik7XG4gICAgfVxuXG4gICAgZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dCxcbiAgICAgICAgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXksXG4gICAgICAgIHJlc3VsdDogUGFyc2luZ1Jlc3VsdFxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ0NvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHJlc3VsdCk7XG4gICAgICAgIGlmIChmb2xsb3dpbmdDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBmb2xsb3dpbmdDb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb2xsb3dpbmdDb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0oPzphZ298YmVmb3JlfGVhcmxpZXIpKD89XFxcXFd8JClgLCBcImlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJpY3RNb2RlOiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSkge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKSk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoXG4gICAgYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmxhdGVyfGFmdGVyfGZyb20gbm93fGhlbmNlZm9ydGh8Zm9yd2FyZHxvdXQpYCArIFwiKD89KD86XFxcXFd8JCkpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0obGF0ZXJ8YWZ0ZXJ8ZnJvbSBub3cpKD89XFxcXFd8JClgLCBcImlcIik7XG5jb25zdCBHUk9VUF9OVU1fVElNRVVOSVRTID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyaWN0TW9kZTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gU1RSSUNUX1BBVFRFUk4gOiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbR1JPVVBfTlVNX1RJTUVVTklUU10pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQsIFJlZmluZXIgfSBmcm9tIFwiLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uL3Jlc3VsdHNcIjtcblxuLyoqXG4gKiBBIHNwZWNpYWwgdHlwZSBvZiB7QGxpbmsgUmVmaW5lcn0gdG8gZmlsdGVyIHRoZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWx0ZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBpc1ZhbGlkKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuO1xuXG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHIpID0+IHRoaXMuaXNWYWxpZChjb250ZXh0LCByKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEEgc3BlY2lhbCB0eXBlIG9mIHtAbGluayBSZWZpbmVyfSB0byBtZXJnZSBjb25zZWN1dGl2ZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXJnaW5nUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIGFic3RyYWN0IHNob3VsZE1lcmdlUmVzdWx0cyhcbiAgICAgICAgdGV4dEJldHdlZW46IHN0cmluZyxcbiAgICAgICAgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCxcbiAgICAgICAgY29udGV4dDogUGFyc2luZ0NvbnRleHRcbiAgICApOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3QgbWVyZ2VSZXN1bHRzKFxuICAgICAgICB0ZXh0QmV0d2Vlbjogc3RyaW5nLFxuICAgICAgICBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0LFxuICAgICAgICBjb250ZXh0OiBQYXJzaW5nQ29udGV4dFxuICAgICk6IFBhcnNpbmdSZXN1bHQ7XG5cbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdID0gW107XG4gICAgICAgIGxldCBjdXJSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBsZXQgbmV4dFJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXh0UmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dEJldHdlZW4gPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGN1clJlc3VsdC5pbmRleCArIGN1clJlc3VsdC50ZXh0Lmxlbmd0aCwgbmV4dFJlc3VsdC5pbmRleCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJSZXN1bHQsIG5leHRSZXN1bHQsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY3VyUmVzdWx0ID0gbmV4dFJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IGN1clJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0ID0gdGhpcy5tZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGxlZnQsIHJpZ2h0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBtZXJnZWQgJHtsZWZ0fSBhbmQgJHtyaWdodH0gaW50byAke21lcmdlZFJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGN1clJlc3VsdCA9IG1lcmdlZFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJSZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWVyZ2VkUmVzdWx0cy5wdXNoKGN1clJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkUmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgYWJzdHJhY3QgcGF0dGVybkJldHdlZW4oKTogUmVnRXhwO1xuXG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhY3VycmVudFJlc3VsdC5lbmQgJiYgIW5leHRSZXN1bHQuZW5kICYmIHRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGZyb21SZXN1bHQsIHRvUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgIXRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSkge1xuICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuZ2V0Q2VydGFpbkNvbXBvbmVudHMoKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWZyb21SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShrZXksIHRvUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdG9SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCBmcm9tUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmRhdGUoKS5nZXRUaW1lKCkgPiB0b1Jlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBsZXQgZnJvbU1vbWVudCA9IGZyb21SZXN1bHQuc3RhcnQuZGF5anMoKTtcbiAgICAgICAgICAgIGxldCB0b01vbWVudCA9IHRvUmVzdWx0LnN0YXJ0LmRheWpzKCk7XG4gICAgICAgICAgICBpZiAodG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHRvTW9tZW50LmFkZCg3LCBcImRheXNcIikuaXNBZnRlcihmcm9tTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIHRvTW9tZW50ID0gdG9Nb21lbnQuYWRkKDcsIFwiZGF5c1wiKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCB0b01vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwibW9udGhcIiwgdG9Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiBmcm9tTW9tZW50LmFkZCgtNywgXCJkYXlzXCIpLmlzQmVmb3JlKHRvTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIGZyb21Nb21lbnQgPSBmcm9tTW9tZW50LmFkZCgtNywgXCJkYXlzXCIpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgZnJvbU1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJtb250aFwiLCBmcm9tTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCBmcm9tTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpLmlzQWZ0ZXIoZnJvbU1vbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0b01vbWVudCA9IHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIGZyb21Nb21lbnQuYWRkKC0xLCBcInllYXJzXCIpLmlzQmVmb3JlKHRvTW9tZW50KSkge1xuICAgICAgICAgICAgICAgIGZyb21Nb21lbnQgPSBmcm9tTW9tZW50LmFkZCgtMSwgXCJ5ZWFyc1wiKTtcbiAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCBmcm9tTW9tZW50LnllYXIoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFt0b1Jlc3VsdCwgZnJvbVJlc3VsdF0gPSBbZnJvbVJlc3VsdCwgdG9SZXN1bHRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnJvbVJlc3VsdC5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBmcm9tUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuZW5kID0gdG9SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5pbmRleCA9IE1hdGgubWluKGZyb21SZXN1bHQuaW5kZXgsIHRvUmVzdWx0LmluZGV4KTtcbiAgICAgICAgaWYgKGZyb21SZXN1bHQuaW5kZXggPCB0b1Jlc3VsdC5pbmRleCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBmcm9tUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIHRvUmVzdWx0LnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IHRvUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIGZyb21SZXN1bHQudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXJcIjtcblxuLyoqXG4gKiBNZXJnaW5nIGJlZm9yZSBhbmQgYWZ0ZXIgcmVzdWx0cyAoc2VlLiBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lcilcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gc2hvdWxkIHByb3ZpZGUgRW5nbGlzaCBjb25uZWN0aW5nIHBoYXNlc1xuICogLSAyMDIwLTAyLTEzIFt0b10gMjAyMC0wMi0xM1xuICogLSBXZWRuZXNkYXkgWy1dIEZyaWRheVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqKHRvfC18XHUyMDEzfHVudGlsfHRocm91Z2h8dGlsbClcXHMqJC9pO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGhlTmV4dERheShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICB0YXJnZXREYXlKcyA9IHRhcmdldERheUpzLmFkZCgxLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF5SnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wbHlUaGVOZXh0RGF5KGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJkYXlcIiwgdGFyZ2V0RGF5SnMuZGF0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibW9udGhcIiwgdGFyZ2V0RGF5SnMubW9udGgoKSArIDEpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLCB0YXJnZXREYXlKczogZGF5anMuRGF5anMpIHtcbiAgICBjb21wb25lbnQuYXNzaWduKFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaW51dGVcIiwgdGFyZ2V0RGF5SnMubWludXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGFyZ2V0RGF5SnMuc2Vjb25kKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbiAgICBpZiAoY29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBjb21wb25lbnQuYXNzaWduKFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZWAgd2l0aCBub3JtYWwgSmF2YXNjcmlwdCBEYXRlIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVNpbWlsYXJEYXRlKGNvbXBvbmVudDogUGFyc2luZ0NvbXBvbmVudHMsIHRhcmdldERheUpzOiBkYXlqcy5EYXlqcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldERheUpzLm1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkYXRlcy5pbXBseVNpbWlsYXJUaW1lYCB3aXRoIG5vcm1hbCBKYXZhc2NyaXB0IERhdGUgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50OiBQYXJzaW5nQ29tcG9uZW50cywgdGFyZ2V0RGF5SnM6IGRheWpzLkRheWpzKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0YXJnZXREYXlKcy5taW51dGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF5anNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZVRpbWVSZXN1bHQoZGF0ZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgdGltZVJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgIGNvbnN0IHJlc3VsdCA9IGRhdGVSZXN1bHQuY2xvbmUoKTtcbiAgICBjb25zdCBiZWdpbkRhdGUgPSBkYXRlUmVzdWx0LnN0YXJ0O1xuICAgIGNvbnN0IGJlZ2luVGltZSA9IHRpbWVSZXN1bHQuc3RhcnQ7XG5cbiAgICByZXN1bHQuc3RhcnQgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGJlZ2luRGF0ZSwgYmVnaW5UaW1lKTtcbiAgICBpZiAoZGF0ZVJlc3VsdC5lbmQgIT0gbnVsbCB8fCB0aW1lUmVzdWx0LmVuZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBkYXRlUmVzdWx0LmVuZCA9PSBudWxsID8gZGF0ZVJlc3VsdC5zdGFydCA6IGRhdGVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gdGltZVJlc3VsdC5lbmQgPT0gbnVsbCA/IHRpbWVSZXN1bHQuc3RhcnQgOiB0aW1lUmVzdWx0LmVuZDtcbiAgICAgICAgY29uc3QgZW5kRGF0ZVRpbWUgPSBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGVuZERhdGUsIGVuZFRpbWUpO1xuXG4gICAgICAgIGlmIChkYXRlUmVzdWx0LmVuZCA9PSBudWxsICYmIGVuZERhdGVUaW1lLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsICBcIlR1ZXNkYXkgOXBtIC0gMWFtXCIgdGhlIGVuZGluZyBzaG91bGQgYWN0dWFsbHkgYmUgMWFtIG9uIHRoZSBuZXh0IGRheS5cbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gYWRkIHRvIGVuZGluZyBieSBhbm90aGVyIGRheS5cbiAgICAgICAgICAgIGNvbnN0IG5leHREYXlKcyA9IGVuZERhdGVUaW1lLmRheWpzKCkuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgaWYgKGVuZERhdGVUaW1lLmlzQ2VydGFpbihcImRheVwiKSkge1xuICAgICAgICAgICAgICAgIGFzc2lnblNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5SnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBseVNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5SnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LmVuZCA9IGVuZERhdGVUaW1lO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURhdGVUaW1lQ29tcG9uZW50KFxuICAgIGRhdGVDb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzLFxuICAgIHRpbWVDb21wb25lbnQ6IFBhcnNpbmdDb21wb25lbnRzXG4pOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgZGF0ZVRpbWVDb21wb25lbnQgPSBkYXRlQ29tcG9uZW50LmNsb25lKCk7XG5cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWludXRlXCIpKTtcblxuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcIm1pbGxpc2Vjb25kXCIpKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWludXRlXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgIH1cblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWVDb21wb25lbnQuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgIH1cblxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcIm1lcmlkaWVtXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikpO1xuICAgIH0gZWxzZSBpZiAodGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSAhPSBudWxsICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IG51bGwpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwibWVyaWRpZW1cIikgPT0gTWVyaWRpZW0uUE0gJiYgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSA8IDEyKSB7XG4gICAgICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcImhvdXJcIikpIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwiaG91clwiLCBkYXRlVGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpICsgMTIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGF0ZVRpbWVDb21wb25lbnQuYWRkVGFncyhkYXRlQ29tcG9uZW50LnRhZ3MoKSk7XG4gICAgZGF0ZVRpbWVDb21wb25lbnQuYWRkVGFncyh0aW1lQ29tcG9uZW50LnRhZ3MoKSk7XG4gICAgcmV0dXJuIGRhdGVUaW1lQ29tcG9uZW50O1xufVxuIiwgIi8qXG5cbiovXG5cbmltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgbWVyZ2VEYXRlVGltZVJlc3VsdCB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBhYnN0cmFjdCBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHA7XG5cbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKChjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBuZXh0UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkgfHxcbiAgICAgICAgICAgICAgICAobmV4dFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkgJiYgY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkpKSAmJlxuICAgICAgICAgICAgdGV4dEJldHdlZW4ubWF0Y2godGhpcy5wYXR0ZXJuQmV0d2VlbigpKSAhPSBudWxsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKClcbiAgICAgICAgICAgID8gbWVyZ2VEYXRlVGltZVJlc3VsdChjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KVxuICAgICAgICAgICAgOiBtZXJnZURhdGVUaW1lUmVzdWx0KG5leHRSZXN1bHQsIGN1cnJlbnRSZXN1bHQpO1xuXG4gICAgICAgIHJlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIHJlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXh0UmVzdWx0LnRleHQ7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuIiwgImltcG9ydCBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG4vKipcbiAqIE1lcmdpbmcgZGF0ZS1vbmx5IHJlc3VsdCBhbmQgdGltZS1vbmx5IHJlc3VsdCAoc2VlLiBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyKS5cbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gc2hvdWxkIHByb3ZpZGUgRW5nbGlzaCBjb25uZWN0aW5nIHBoYXNlc1xuICogLSAyMDIwLTAyLTEzIFthdF0gNnBtXG4gKiAtIFRvbW9ycm93IFthZnRlcl0gN2FtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZXh0ZW5kcyBBYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cXFxccyooVHxhdHxhZnRlcnxiZWZvcmV8b258b2Z8LHwtfFxcXFwufFx1MjIxOXw6KT9cXFxccyokXCIpO1xuICAgIH1cbn1cbiIsICIvLyBNYXAgQUJCUiAtPiBPZmZzZXQgaW4gbWludXRlXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFRpbWV6b25lQWJick1hcCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3RpbWV6b25lXCI7XG5cbmNvbnN0IFRJTUVaT05FX05BTUVfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqLD9cXFxccypcXFxcKD8oW0EtWl17Miw0fSlcXFxcKT8oPz1cXFxcV3wkKVwiLCBcImlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0aW1lem9uZU92ZXJyaWRlcz86IFRpbWV6b25lQWJick1hcCkge31cblxuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgY29uc3QgdGltZXpvbmVPdmVycmlkZXMgPSBjb250ZXh0Lm9wdGlvbi50aW1lem9uZXMgPz8ge307XG5cbiAgICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfTkFNRV9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWV6b25lQWJiciA9IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCByZWZEYXRlID0gcmVzdWx0LnN0YXJ0LmRhdGUoKSA/PyByZXN1bHQucmVmRGF0ZSA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdHpPdmVycmlkZXMgPSB7IC4uLnRoaXMudGltZXpvbmVPdmVycmlkZXMsIC4uLnRpbWV6b25lT3ZlcnJpZGVzIH07XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9IHRvVGltZXpvbmVPZmZzZXQodGltZXpvbmVBYmJyLCByZWZEYXRlLCB0ek92ZXJyaWRlcyk7XG4gICAgICAgICAgICBpZiAoZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICBgRXh0cmFjdGluZyB0aW1lem9uZTogJyR7dGltZXpvbmVBYmJyfScgaW50bzogJHtleHRyYWN0ZWRUaW1lem9uZU9mZnNldH0gZm9yOiAke3Jlc3VsdC5zdGFydH1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZXpvbmVPZmZzZXQgPSByZXN1bHQuc3RhcnQuZ2V0KFwidGltZXpvbmVPZmZzZXRcIik7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWV6b25lT2Zmc2V0ICE9PSBudWxsICYmIGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ICE9IGN1cnJlbnRUaW1lem9uZU9mZnNldCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIG1heSBhbHJlYWR5IGhhdmUgZXh0cmFjdGVkIHRoZSB0aW1lem9uZSBvZmZzZXQgZS5nLiBcIjExIGFtIEdNVCswOTAwIChKU1QpXCJcbiAgICAgICAgICAgICAgICAvLyAtIGlmIHRoZXkgYXJlIGVxdWFsLCB3ZSBhbHNvIHdhbnQgdG8gdGFrZSB0aGUgYWJicmV2aWF0aW9uIHRleHQgaW50byByZXN1bHRcbiAgICAgICAgICAgICAgICAvLyAtIGlmIHRoZXkgYXJlIG5vdCBlcXVhbCwgd2UgdHJ1c3QgdGhlIG9mZnNldCBtb3JlXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvZnRlbiBiZWNhdXNlIGl0J3MgcmVsYXRpdmUgdGltZSB3aXRoIGluZmVycmVkIHRpbWV6b25lIChlLmcuIGluIDEgaG91ciwgdG9tb3Jyb3cpXG4gICAgICAgICAgICAgICAgLy8gVGhlbiwgd2Ugd2FudCB0byBkb3VibGUtY2hlY2sgdGhlIGFiYnIgY2FzZSAoZS5nLiBcIkdFVFwiIG5vdCBcImdldFwiKVxuICAgICAgICAgICAgICAgIGlmICh0aW1lem9uZUFiYnIgIT0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlEYXRlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGltZSBpcyBub3QgZXhwbGljaXRseSBtZW50aW9uZWQsXG4gICAgICAgICAgICAgICAgLy8gVGhlbiwgd2UgYWxzbyB3YW50IHRvIGRvdWJsZS1jaGVjayB0aGUgYWJiciBjYXNlIChlLmcuIFwiR0VUXCIgbm90IFwiZ2V0XCIpXG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBtYXRjaFswXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwidGltZXpvbmVPZmZzZXRcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuXG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqKD86XFxcXCg/KD86R01UfFVUQylcXFxccz8pPyhbKy1dKShcXFxcZHsxLDJ9KSg/Ojo/KFxcXFxkezJ9KSk/XFxcXCk/XCIsIFwiaVwiKTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQID0gMTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUCA9IDI7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIgaW1wbGVtZW50cyBSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSk6IFBhcnNpbmdSZXN1bHRbXSB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFRJTUVaT05FX09GRlNFVF9QQVRURVJOLmV4ZWMoc3VmZml4KTtcbiAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVPZmZzZXQgPSBwYXJzZUludChtYXRjaFtUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUF0gfHwgXCIwXCIpO1xuICAgICAgICAgICAgbGV0IHRpbWV6b25lT2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwICsgbWludXRlT2Zmc2V0O1xuICAgICAgICAgICAgLy8gTm8gdGltZXpvbmVzIGhhdmUgb2Zmc2V0cyBncmVhdGVyIHRoYW4gMTQgaG91cnMsIHNvIGRpc3JlZ2FyZCB0aGlzIG1hdGNoXG4gICAgICAgICAgICBpZiAodGltZXpvbmVPZmZzZXQgPiAxNCAqIDYwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoW1RJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQXSA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICB0aW1lem9uZU9mZnNldCA9IC10aW1lem9uZU9mZnNldDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICIvKlxuICBcbiovXG5cbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXBSZW1vdmFsUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJlZFJlc3VsdHMgPSBbXTtcbiAgICAgICAgbGV0IHByZXZSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICBpZiAocmVzdWx0LmluZGV4ID49IHByZXZSZXN1bHQuaW5kZXggKyBwcmV2UmVzdWx0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocHJldlJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcHJldlJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgb3ZlcmxhcCwgY29tcGFyZSB0aGUgbGVuZ3RoIGFuZCBkaXNjYXJkIHRoZSBzaG9ydGVyIG9uZVxuICAgICAgICAgICAgbGV0IGtlcHQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lmxlbmd0aCA+IHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXB0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXB0ID0gcHJldlJlc3VsdDtcbiAgICAgICAgICAgICAgICByZW1vdmVkID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSByZW1vdmUgJHtyZW1vdmVkfSBieSAke2tlcHR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByZXZSZXN1bHQgPSBrZXB0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIGxhc3Qgb25lXG4gICAgICAgIGlmIChwcmV2UmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUmVzdWx0cy5wdXNoKHByZXZSZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUmVzdWx0cztcbiAgICB9XG59XG4iLCAiLypcbiAgICBFbmZvcmNlICdmb3J3YXJkRGF0ZScgb3B0aW9uIHRvIG9uIHRoZSByZXN1bHRzLiBXaGVuIHRoZXJlIGFyZSBtaXNzaW5nIGNvbXBvbmVudCxcbiAgICBlLmcuIFwiTWFyY2ggMTItMTMgKHdpdGhvdXQgeWVhcilcIiBvciBcIlRodXJzZGF5XCIsIHRoZSByZWZpbmVyIHdpbGwgdHJ5IHRvIGFkanVzdCB0aGUgcmVzdWx0XG4gICAgaW50byB0aGUgZnV0dXJlIGluc3RlYWQgb2YgdGhlIHBhc3QuXG4qL1xuXG5pbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0ICogYXMgZGF0ZXMgZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcndhcmREYXRlUmVmaW5lciBpbXBsZW1lbnRzIFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgcmVzdWx0czogUGFyc2luZ1Jlc3VsdFtdKTogUGFyc2luZ1Jlc3VsdFtdIHtcbiAgICAgICAgaWYgKCFjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlZk1vbWVudCA9IGRheWpzKGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkgJiYgY29udGV4dC5yZWZlcmVuY2UuaW5zdGFudCA+IHJlc3VsdC5zdGFydC5kYXRlKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZEYXRlID0gY29udGV4dC5yZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmRm9sbG93aW5nRGF5ID0gbmV3IERhdGUocmVmRGF0ZSk7XG4gICAgICAgICAgICAgICAgcmVmRm9sbG93aW5nRGF5LnNldERhdGUocmVmRm9sbG93aW5nRGF5LmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgICAgICAgICAgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuc3RhcnQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gdGltZSBmcm9tIHRoZSByZWYgZGF0ZSAoJHtyZWZEYXRlfSkgdG8gdGhlIGZvbGxvd2luZyBkYXkgKCR7cmVmRm9sbG93aW5nRGF5fSlgXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMuaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZGb2xsb3dpbmdEYXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmRhdGUoKSA+IHJlc3VsdC5lbmQuZGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZGb2xsb3dpbmdEYXkuc2V0RGF0ZShyZWZGb2xsb3dpbmdEYXkuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlcy5pbXBseVNpbWlsYXJEYXRlKHJlc3VsdC5lbmQsIHJlZkZvbGxvd2luZ0RheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIGlmIChyZWZNb21lbnQuZGF5KCkgPj0gcmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmTW9tZW50ID0gcmVmTW9tZW50LmRheShyZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSArIDcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkoPG51bWJlcj5yZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHJlZk1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZWZNb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRqdXN0IGRhdGUgdG8gdGhlIGNvbWluZyB3ZWVrXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZNb21lbnQuZGF5KCkgPiByZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkocmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KDxudW1iZXI+cmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJkYXlcIiwgcmVmTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJtb250aFwiLCByZWZNb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZWZNb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB3ZWVrZGF5ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluIGNhc2Ugd2hlcmUgd2Uga25vdyB0aGUgbW9udGgsIGJ1dCBub3Qgd2hpY2ggeWVhciAoZS5nLiBcImluIERlY2VtYmVyXCIsIFwiMjV0aCBEZWNlbWJlclwiKSxcbiAgICAgICAgICAgIC8vIHRyeSBtb3ZlIHRvIGFub3RoZXIgeWVhclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiByZWZNb21lbnQuaXNBZnRlcihyZXN1bHQuc3RhcnQuZGF5anMoKSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZXN1bHQuc3RhcnQuZ2V0KFwieWVhclwiKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHllYXIgKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgIXJlc3VsdC5lbmQuaXNDZXJ0YWluKFwieWVhclwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcInllYXJcIiwgcmVzdWx0LmVuZC5nZXQoXCJ5ZWFyXCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSBtb250aCAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVubGlrZWx5Rm9ybWF0RmlsdGVyIGV4dGVuZHMgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmljdE1vZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocmVzdWx0LnRleHQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL15cXGQqKFxcLlxcZCopPyQvKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdCAnJHtyZXN1bHQudGV4dH0nYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc1ZhbGlkRGF0ZSgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgaW52YWxpZCByZXN1bHQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1N0cmljdE1vZGVWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB3ZWVrZGF5IG9ubHkgY29tcG9uZW50OiAke3Jlc3VsdH0gKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeVwiO1xuXG4vLyBJU08gODYwMVxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuLy8gLSBZWVlZLU1NLUREXG4vLyAtIFlZWVktTU0tRERUaGg6bW1UWkRcbi8vIC0gWVlZWS1NTS1ERFRoaDptbTpzc1RaRFxuLy8gLSBZWVlZLU1NLUREVGhoOm1tOnNzLnNUWkRcbi8vIC0gVFpEID0gKFogb3IgK2hoOm1tIG9yIC1oaDptbSlcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIihbMC05XXs0fSlcXFxcLShbMC05XXsxLDJ9KVxcXFwtKFswLTldezEsMn0pXCIgK1xuICAgIFwiKD86VFwiICsgLy8uLlxuICAgICAgICBcIihbMC05XXsxLDJ9KTooWzAtOV17MSwyfSlcIiArIC8vIGhoOm1tXG4gICAgICAgIFwiKD86XCIgK1xuICAgICAgICAgICAgXCI6KFswLTldezEsMn0pKD86XFxcXC4oXFxcXGR7MSw0fSkpP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gOnNzLnNcbiAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgXCJafChbKy1dXFxcXGR7Mn0pOj8oXFxcXGR7Mn0pP1wiICtcbiAgICAgICAgXCIpP1wiICsgLy8gVFpEIChaIG9yIFx1MDBCMWhoOm1tIG9yIFx1MDBCMWhobW0gb3IgXHUwMEIxaGgpXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBIT1VSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNSU5VVEVfTlVNQkVSX0dST1VQID0gNTtcbmNvbnN0IFNFQ09ORF9OVU1CRVJfR1JPVVAgPSA2O1xuY29uc3QgTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQID0gNztcbmNvbnN0IFRaRF9HUk9VUCA9IDg7XG5jb25zdCBUWkRfSE9VUl9PRkZTRVRfR1JPVVAgPSA5O1xuY29uc3QgVFpEX01JTlVURV9PRkZTRVRfR1JPVVAgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVNPRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgIFwieWVhclwiOiBwYXJzZUludChtYXRjaFtZRUFSX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJtb250aFwiOiBwYXJzZUludChtYXRjaFtNT05USF9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgICAgIFwiZGF5XCI6IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWF0Y2hbSE9VUl9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBwYXJzZUludChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIHBhcnNlSW50KG1hdGNoW01JTlVURV9OVU1CRVJfR1JPVVBdKSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoW1RaRF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBadWx1IHRpbWUgem9uZSAoWikgaXMgZXF1aXZhbGVudCB0byBVVENcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IC09IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9JU09Gb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuIiwgIi8qXG4gIFxuKi9cblxuaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVyc1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5cbi8qKlxuICogTWVyZ2Ugd2Vla2RheSBjb21wb25lbnQgaW50byBtb3JlIGNvbXBsZXRlZCBkYXRhXG4gKiAtIFtTdW5kYXldIFsxMi83LzIwMTRdID0+IFtTdW5kYXkgMTIvNy8yMDE0XVxuICogLSBbVHVlc2RheV0sIFtKYW51YXJ5IDEzLCAyMDEyXSA9PiBbU3VuZGF5IDEyLzcvMjAxNF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IFBhcnNpbmdSZXN1bHQge1xuICAgICAgICBjb25zdCBuZXdSZXN1bHQgPSBuZXh0UmVzdWx0LmNsb25lKCk7XG4gICAgICAgIG5ld1Jlc3VsdC5pbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXg7XG4gICAgICAgIG5ld1Jlc3VsdC50ZXh0ID0gY3VycmVudFJlc3VsdC50ZXh0ICsgdGV4dEJldHdlZW4gKyBuZXdSZXN1bHQudGV4dDtcblxuICAgICAgICBuZXdSZXN1bHQuc3RhcnQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICBpZiAobmV3UmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgbmV3UmVzdWx0LmVuZC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UmVzdWx0O1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSA9XG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJlxuICAgICAgICAgICAgIWN1cnJlbnRSZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSAmJlxuICAgICAgICAgICAgbmV4dFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJkYXlcIik7XG4gICAgICAgIHJldHVybiB3ZWVrZGF5VGhlbk5vcm1hbERhdGUgJiYgdGV4dEJldHdlZW4ubWF0Y2goL14sP1xccyokLykgIT0gbnVsbDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgUGFyc2VyLCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5cbmltcG9ydCBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXJcIjtcbmltcG9ydCBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9PdmVybGFwUmVtb3ZhbFJlZmluZXJcIjtcbmltcG9ydCBGb3J3YXJkRGF0ZVJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0ZvcndhcmREYXRlUmVmaW5lclwiO1xuaW1wb3J0IFVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9Vbmxpa2VseUZvcm1hdEZpbHRlclwiO1xuaW1wb3J0IElTT0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9jb21tb24vcGFyc2Vycy9JU09Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9NZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uLCBzdHJpY3RNb2RlID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICBjb25maWd1cmF0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgSVNPRm9ybWF0UGFyc2VyKCkpO1xuXG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBNZXJnZVdlZWtkYXlDb21wb25lbnRSZWZpbmVyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcblxuICAgIC8vIFVubGlrZSBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyLCB0aGlzIHJlZmluZXIgcmVsaWVzIG9uIGtub3dpbmcgYm90aCBkYXRlIGFuZCB0aW1lIGluIGNhc2VzIHdoZXJlIHRoZSB0elxuICAgIC8vIGlzIGFtYmlndW91cyAoaW4gdGVybXMgb2YgRFNUL25vbi1EU1QpLiBJdCB0aGVyZWZvcmUgbmVlZHMgdG8gYmUgYXBwbGllZCBhcyBsYXRlIGFzIHBvc3NpYmxlIGluIHRoZSBwYXJzaW5nLlxuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMucHVzaChuZXcgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBGb3J3YXJkRGF0ZVJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBVbmxpa2VseUZvcm1hdEZpbHRlcihzdHJpY3RNb2RlKSk7XG4gICAgcmV0dXJuIGNvbmZpZ3VyYXRpb247XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RheWpzXCI7XG5pbXBvcnQgKiBhcyByZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gLyhub3d8dG9kYXl8dG9uaWdodHx0b21vcnJvd3xvdmVybW9ycm93fHRtcnx0bXJ3fHllc3RlcmRheXxsYXN0XFxzKm5pZ2h0KSg/PVxcV3wkKS9pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbERhdGVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheSk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgY29uc3QgbG93ZXJUZXh0ID0gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoKTtcblxuICAgICAgICBzd2l0Y2ggKGxvd2VyVGV4dCkge1xuICAgICAgICAgICAgY2FzZSBcIm5vd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMubm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ5ZXN0ZXJkYXlcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnllc3RlcmRheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ0b21vcnJvd1wiOlxuICAgICAgICAgICAgY2FzZSBcInRtclwiOlxuICAgICAgICAgICAgY2FzZSBcInRtcndcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbW9ycm93KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInRvbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwib3Zlcm1vcnJvd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudGhlRGF5QWZ0ZXIoY29udGV4dC5yZWZlcmVuY2UsIDIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmIChsb3dlclRleHQubWF0Y2goL2xhc3RcXHMqbmlnaHQvKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5hZGQoLTEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbERhdGVQYXJzZXJcIik7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vcmVzdWx0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZSxcbiAgICBhc3NpZ25TaW1pbGFyVGltZSxcbiAgICBpbXBseVNpbWlsYXJEYXRlLFxuICAgIGltcGx5U2ltaWxhclRpbWUsXG4gICAgaW1wbHlUaGVOZXh0RGF5LFxufSBmcm9tIFwiLi4vdXRpbHMvZGF5anNcIjtcbmltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3cocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgcmVmZXJlbmNlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm93XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RheShyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b2RheVwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG4vKipcbiAqIFRoZSBwcmV2aW91cyBkYXkuIEltcGx5IHRoZSBzYW1lIHRpbWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXkocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgcmV0dXJuIHRoZURheUJlZm9yZShyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVEYXlCZWZvcmUocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIG51bURheTogbnVtYmVyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIHJldHVybiB0aGVEYXlBZnRlcihyZWZlcmVuY2UsIC1udW1EYXkpO1xufVxuXG4vKipcbiAqIFRoZSBmb2xsb3dpbmcgZGF5IHdpdGggZGF5anMuYXNzaWduVGhlTmV4dERheSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b21vcnJvdyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICByZXR1cm4gdGhlRGF5QWZ0ZXIocmVmZXJlbmNlLCAxKS5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9tb3Jyb3dcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGVEYXlBZnRlcihyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgbkRheXM6IG51bWJlcik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZChuRGF5cywgXCJkYXlcIik7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBpbXBseVNpbWlsYXJUaW1lKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvbmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIyKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS90b25pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0TmlnaHQocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDApOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBpZiAodGFyZ2V0RGF0ZS5ob3VyKCkgPCA2KSB7XG4gICAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmFkZCgtMSwgXCJkYXlcIik7XG4gICAgfVxuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVuaW5nKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAyMCk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllc3RlcmRheUV2ZW5pbmcocmVmZXJlbmNlOiBSZWZlcmVuY2VXaXRoVGltZXpvbmUsIGltcGx5SG91ciA9IDIwKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGxldCB0YXJnZXREYXRlID0gZGF5anMocmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ldmVuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRuaWdodChyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKSk7XG4gICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gMikge1xuICAgICAgICAvLyBVbmxlc3MgaXQncyB2ZXJ5IGVhcmx5IG1vcm5pbmcgKDB+MkFNKSwgd2UgYXNzdW1lIHRoZSBtaWRuaWdodCBpcyB0aGUgY29taW5nIG1pZG5pZ2h0LlxuICAgICAgICAvLyBUaHVzLCBpbmNyZWFzaW5nIHRoZSBkYXkgYnkgMS5cbiAgICAgICAgaW1wbHlUaGVOZXh0RGF5KGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9taWRuaWdodFwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9ybmluZyhyZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgaW1wbHlIb3VyID0gNik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbW9ybmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJub29uKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBpbXBseUhvdXIgPSAxNSk6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvYWZ0ZXJub29uXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29uKHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UsIHt9KTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgMTIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgMCk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ub29uXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCAqIGFzIGNhc3VhbFJlZmVyZW5jZXMgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9jYXN1YWxSZWZlcmVuY2VzXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSAvKD86dGhpcyk/XFxzezAsM30obW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodHxtaWRuaWdodHxtaWRkYXl8bm9vbikoPz1cXFd8JCkvaTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAobWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSBcImFmdGVybm9vblwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuYWZ0ZXJub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJldmVuaW5nXCI6XG4gICAgICAgICAgICBjYXNlIFwibmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLmV2ZW5pbmcoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1pZG5pZ2h0XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5taWRuaWdodChjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibW9ybmluZ1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubW9ybmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibm9vblwiOlxuICAgICAgICAgICAgY2FzZSBcIm1pZGRheVwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMubm9vbihjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50LmFkZFRhZyhcInBhcnNlci9FTkNhc3VhbFRpbWVQYXJzZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgT3BVbml0VHlwZSwgUVVuaXRUeXBlIH0gZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBjYWxjdWxhdGlvbi5kdXJhdGlvbi5EdXJhdGlvbmAuXG4gKi9cbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IHsgW2MgaW4gT3BVbml0VHlwZSB8IFFVbml0VHlwZV0/OiBudW1iZXIgfTtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGNhbGN1bGF0aW9uLmR1cmF0aW9uLipgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHM6IFRpbWVVbml0cyk6IFRpbWVVbml0cyB7XG4gICAgY29uc3QgcmV2ZXJzZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgICAgICByZXZlcnNlZFtrZXldID0gLXRpbWVVbml0c1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiByZXZlcnNlZCBhcyBUaW1lVW5pdHM7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGBjYWxjdWxhdGlvbi5kdXJhdGlvbi4qYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50czogUGFyc2luZ0NvbXBvbmVudHMsIHRpbWVVbml0czogVGltZVVuaXRzKTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgIGNvbnN0IG91dHB1dCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcblxuICAgIGxldCBkYXRlID0gY29tcG9uZW50cy5kYXlqcygpO1xuICAgIGZvciAoY29uc3Qga2V5IGluIHRpbWVVbml0cykge1xuICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wLFR5cGVTY3JpcHRWYWxpZGF0ZVR5cGVzXG4gICAgICAgIGRhdGUgPSBkYXRlLmFkZCh0aW1lVW5pdHNba2V5XSwga2V5IGFzIFFVbml0VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKFwiZGF5XCIgaW4gdGltZVVuaXRzIHx8IFwiZFwiIGluIHRpbWVVbml0cyB8fCBcIndlZWtcIiBpbiB0aW1lVW5pdHMgfHwgXCJtb250aFwiIGluIHRpbWVVbml0cyB8fCBcInllYXJcIiBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgIH1cblxuICAgIGlmIChcInNlY29uZFwiIGluIHRpbWVVbml0cyB8fCBcIm1pbnV0ZVwiIGluIHRpbWVVbml0cyB8fCBcImhvdXJcIiBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwic2Vjb25kXCIsIGRhdGUuc2Vjb25kKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtaW51dGVcIiwgZGF0ZS5taW51dGUoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcImhvdXJcIiwgZGF0ZS5ob3VyKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG59XG4iLCAiaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBhZGRJbXBsaWVkVGltZVVuaXRzIH0gZnJvbSBcIi4uL3V0aWxzL3RpbWV1bml0c1wiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcnNpbmcgY29tcG9uZW50cyBhdCB0aGUgd2Vla2RheSAoY29uc2lkZXJpbmcgdGhlIG1vZGlmaWVyKS4gVGhlIHRpbWUgYW5kIHRpbWV6b25lIGlzIGFzc3VtZSB0byBiZVxuICogc2ltaWxhciB0byB0aGUgcmVmZXJlbmNlLlxuICogQHBhcmFtIHJlZmVyZW5jZVxuICogQHBhcmFtIHdlZWtkYXlcbiAqIEBwYXJhbSBtb2RpZmllciBcInRoaXNcIiwgXCJuZXh0XCIsIFwibGFzdFwiIG1vZGlmaWVyIHdvcmQuIElmIGVtcHR5LCByZXR1cm5zIHRoZSB3ZWVrZGF5IGNsb3Nlc3QgdG8gdGhlIGByZWZEYXRlYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KFxuICAgIHJlZmVyZW5jZTogUmVmZXJlbmNlV2l0aFRpbWV6b25lLFxuICAgIHdlZWtkYXk6IFdlZWtkYXksXG4gICAgbW9kaWZpZXI/OiBcInRoaXNcIiB8IFwibmV4dFwiIHwgXCJsYXN0XCJcbik6IFBhcnNpbmdDb21wb25lbnRzIHtcbiAgICBjb25zdCByZWZEYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGRheXNUb1dlZWtkYXkgPSBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXksIG1vZGlmaWVyKTtcblxuICAgIGxldCBjb21wb25lbnRzID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgY29tcG9uZW50cyA9IGFkZEltcGxpZWRUaW1lVW5pdHMoY29tcG9uZW50cywgeyBcImRheVwiOiBkYXlzVG9XZWVrZGF5IH0pO1xuICAgIGNvbXBvbmVudHMuYXNzaWduKFwid2Vla2RheVwiLCB3ZWVrZGF5KTtcblxuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG4vKipcbiAqIFJldHVybnMgbnVtYmVyIG9mIGRheXMgZnJvbSByZWZEYXRlIHRvIHRoZSB3ZWVrZGF5LiBUaGUgcmVmRGF0ZSBkYXRlIGFuZCB0aW1lem9uZSBpbmZvcm1hdGlvbiBpcyB1c2VkLlxuICogQHBhcmFtIHJlZkRhdGVcbiAqIEBwYXJhbSB3ZWVrZGF5XG4gKiBAcGFyYW0gbW9kaWZpZXIgXCJ0aGlzXCIsIFwibmV4dFwiLCBcImxhc3RcIiBtb2RpZmllciB3b3JkLiBJZiBlbXB0eSwgcmV0dXJucyB0aGUgd2Vla2RheSBjbG9zZXN0IHRvIHRoZSBgcmVmRGF0ZWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGU6IERhdGUsIHdlZWtkYXk6IFdlZWtkYXksIG1vZGlmaWVyPzogXCJ0aGlzXCIgfCBcIm5leHRcIiB8IFwibGFzdFwiKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKSBhcyBXZWVrZGF5O1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgY2FzZSBcInRoaXNcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICAvLyBGcm9tIFN1bmRheSwgdGhlIG5leHQgU3VuZGF5IGlzIDcgZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgMSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgMiBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sIChyZXR1cm4gZW51bSB2YWx1ZSlcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgPyA3IDogd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gU2F0dXJkYXksIHRoZSBuZXh0IFNhdHVyZGF5IGlzIDcgZGF5cyBsYXRlciwgdGhlIG5leHQgU3VuZGF5IGlzIDgtZGF5cyBsYXRlci5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbmV4dCBNb24gaXMgKDEgKyAxKSBkYXlzIGxhdGVyLCBuZXh0IFR1ZXMgaXMgKDEgKyAyKSBkYXlzIGxhdGVyLCBhbmQgc28gb24uLi4sXG4gICAgICAgICAgICAvLyAocmV0dXJuLCAyICsgW2VudW0gdmFsdWVdIGRheXMpXG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkgcmV0dXJuIDc7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIHJldHVybiAxICsgd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZyb20gd2Vla2RheXMsIG5leHQgTW9uIGlzIHRoZSBmb2xsb3dpbmcgd2VlaydzIE1vbiwgbmV4dCBUdWVzIHRoZSBmb2xsb3dpbmcgd2VlaydzIFR1ZXMsIGFuZCBzbyBvbi4uLlxuICAgICAgICAgICAgLy8gSWYgdGhlIHdlZWsncyB3ZWVrZGF5IGFscmVhZHkgcGFzc2VkICh3ZWVrZGF5IDwgcmVmV2Vla2RheSksIHdlIHNpbXBseSBjb3VudCBmb3J3YXJkIHRvIG5leHQgd2Vla1xuICAgICAgICAgICAgLy8gKHNpbWlsYXIgdG8gJ3RoaXMnKS4gT3RoZXJ3aXNlLCBjb3VudCBmb3J3YXJkIHRvIHRoaXMgd2VlaywgdGhlbiBhZGQgYW5vdGhlciA3IGRheXMuXG4gICAgICAgICAgICBpZiAod2Vla2RheSA8IHJlZldlZWtkYXkgJiYgd2Vla2RheSAhPSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpICsgNztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheUNsb3Nlc3QocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgYmFja3dhcmQgPSBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgY29uc3QgZm9yd2FyZCA9IGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuXG4gICAgcmV0dXJuIGZvcndhcmQgPCAtYmFja3dhcmQgPyBmb3J3YXJkIDogYmFja3dhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlOiBEYXRlLCB3ZWVrZGF5OiBXZWVrZGF5KTogbnVtYmVyIHtcbiAgICBjb25zdCByZWZXZWVrZGF5ID0gcmVmRGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgZm9yd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGZvcndhcmRDb3VudCA8IDApIHtcbiAgICAgICAgZm9yd2FyZENvdW50ICs9IDc7XG4gICAgfVxuICAgIHJldHVybiBmb3J3YXJkQ291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZTogRGF0ZSwgd2Vla2RheTogV2Vla2RheSk6IG51bWJlciB7XG4gICAgY29uc3QgcmVmV2Vla2RheSA9IHJlZkRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGJhY2t3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoYmFja3dhcmRDb3VudCA+PSAwKSB7XG4gICAgICAgIGJhY2t3YXJkQ291bnQgLT0gNztcbiAgICB9XG4gICAgcmV0dXJuIGJhY2t3YXJkQ291bnQ7XG59XG4iLCAiaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBXRUVLREFZX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBtYXRjaEFueVBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcGF0dGVyblwiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi93ZWVrZGF5c1wiO1xuaW1wb3J0IHsgV2Vla2RheSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgICBcIig/Oig/OlxcXFwsfFxcXFwofFxcXFxcdUZGMDgpXFxcXHMqKT9cIiArXG4gICAgICAgIFwiKD86b25cXFxccyo/KT9cIiArXG4gICAgICAgIFwiKD86KHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqKT9cIiArXG4gICAgICAgIGAoJHttYXRjaEFueVBhdHRlcm4oV0VFS0RBWV9ESUNUSU9OQVJZKX18d2Vla2VuZHx3ZWVrZGF5KWAgK1xuICAgICAgICBcIig/OlxcXFxzKig/OlxcXFwsfFxcXFwpfFxcXFxcdUZGMDkpKT9cIiArXG4gICAgICAgIFwiKD86XFxcXHMqKHRoaXN8bGFzdHxwYXN0fG5leHQpXFxcXHMqd2Vlayk/XCIgK1xuICAgICAgICBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBXRUVLREFZX0dST1VQID0gMjtcbmNvbnN0IFBPU1RGSVhfR1JPVVAgPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTldlZWtkYXlQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nQ29tcG9uZW50cyB8IG51bGwge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFtQUkVGSVhfR1JPVVBdO1xuICAgICAgICBjb25zdCBwb3N0Zml4ID0gbWF0Y2hbUE9TVEZJWF9HUk9VUF07XG4gICAgICAgIGxldCBtb2RpZmllcldvcmQgPSBwcmVmaXggfHwgcG9zdGZpeDtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkIHx8IFwiXCI7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBtb2RpZmllciA9IG51bGw7XG4gICAgICAgIGlmIChtb2RpZmllcldvcmQgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXJXb3JkID09IFwicGFzdFwiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwibGFzdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKG1vZGlmaWVyV29yZCA9PSBcIm5leHRcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcIm5leHRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJ0aGlzXCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJ0aGlzXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3ZWVrZGF5X3dvcmQgPSBtYXRjaFtXRUVLREFZX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgd2Vla2RheTtcbiAgICAgICAgaWYgKFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBXRUVLREFZX0RJQ1RJT05BUllbd2Vla2RheV93b3JkXTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5X3dvcmQgPT0gXCJ3ZWVrZW5kXCIpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgZGVwZW5kcyBvbiB3aGF0IGRheXMgYXJlIHdlZWtlbmQgc2V0dGluZywgYnV0IHR5cGljYWxseTpcbiAgICAgICAgICAgIC8vICdUaGlzL25leHQgd2Vla2VuZCcgbWVhbnMgdGhlIGNvbWluZyBTYXR1cmRheSwgJ2xhc3Qgd2Vla2VuZCcgbWVhbnMgbGFzdCBTdW5kYXkuXG4gICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyBXZWVrZGF5LlNVTkRBWSA6IFdlZWtkYXkuU0FUVVJEQVk7XG4gICAgICAgIH0gZWxzZSBpZiAod2Vla2RheV93b3JkID09IFwid2Vla2RheVwiKSB7XG4gICAgICAgICAgICAvLyBJbiBFbmdsaXNoLCB0aGUgXCJ3ZWVrZGF5XCIgbWVhbnMgYW55IGRheSBvZiB0aGUgd2VlayBleGNlcHQgd2Vla2VuZC5cbiAgICAgICAgICAgIC8vIFRoaXMgYWxzbyBkZXBlbmRzIG9uIHdoYXQgZGF5cyBhcmUgd2Vla2VuZCBzZXR0aW5nLCBidXQgdHlwaWNhbGx5OlxuICAgICAgICAgICAgLy8gLSBPbiB3ZWVrZW5kIHJlZiwgdGhpcyBtZWFucyB0aGUgY29taW5nIE1vbmRheSBvciBsYXN0IEZyaWRheS5cbiAgICAgICAgICAgIC8vIC0gT24gd2Vla2RheSByZWYsIHRoaXMgbWVhbnMgdGhlIG5leHQvbGFzdCB3b3JraW5nIGRheS5cbiAgICAgICAgICAgIGNvbnN0IHJlZldlZWtkYXkgPSBjb250ZXh0LnJlZmVyZW5jZS5nZXREYXRlV2l0aEFkanVzdGVkVGltZXpvbmUoKS5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChyZWZXZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZIHx8IHJlZldlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSkge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSBtb2RpZmllciA9PSBcImxhc3RcIiA/IFdlZWtkYXkuRlJJREFZIDogV2Vla2RheS5NT05EQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSByZWZXZWVrZGF5IC0gMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyB3ZWVrZGF5IC0gMSA6IHdlZWtkYXkgKyAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSAod2Vla2RheSAlIDUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KGNvbnRleHQucmVmZXJlbmNlLCB3ZWVrZGF5LCBtb2RpZmllcik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IFRJTUVfVU5JVF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuXCI7XG5cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlclxcXFxzKnRoaXMpXFxcXHMqKCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pKD89XFxcXHMqKWAgKyBcIig/PVxcXFxXfCQpXCIsXG4gICAgXCJpXCJcbik7XG5cbmNvbnN0IE1PRElGSUVSX1dPUkRfR1JPVVAgPSAxO1xuY29uc3QgUkVMQVRJVkVfV09SRF9HUk9VUCA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG5cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5KTogUGFyc2luZ0NvbXBvbmVudHMge1xuICAgICAgICBjb25zdCBtb2RpZmllciA9IG1hdGNoW01PRElGSUVSX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVuaXRXb3JkID0gbWF0Y2hbUkVMQVRJVkVfV09SRF9HUk9VUF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdGltZXVuaXQgPSBUSU1FX1VOSVRfRElDVElPTkFSWVt1bml0V29yZF07XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyID09IFwibmV4dFwiIHx8IG1vZGlmaWVyLnN0YXJ0c1dpdGgoXCJhZnRlclwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZVVuaXRzID0ge307XG4gICAgICAgICAgICB0aW1lVW5pdHNbdGltZXVuaXRdID0gMTtcbiAgICAgICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXIgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGxldCBkYXRlID0gZGF5anMoY29udGV4dC5yZWZlcmVuY2UuaW5zdGFudCk7XG5cbiAgICAgICAgLy8gVGhpcyB3ZWVrXG4gICAgICAgIGlmICh1bml0V29yZC5tYXRjaCgvd2Vlay9pKSkge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLmdldChcImRcIiksIFwiZFwiKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyBtb250aFxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgvbW9udGgvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5kYXRlKCkgKyAxLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhpcyB5ZWFyXG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC95ZWFyL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLm1vbnRoKCksIFwibW9udGhcIik7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzZXIsIFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9yZXN1bHRzXCI7XG5pbXBvcnQgeyBmaW5kTW9zdExpa2VseUFEWWVhciwgZmluZFllYXJDbG9zZXN0VG9SZWYgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnNcIjtcblxuLyoqXG4gKiBEYXRlIGZvcm1hdCB3aXRoIHNsYXNoIFwiL1wiIChvciBkb3QgXCIuXCIpIGJldHdlZW4gbnVtYmVycy5cbiAqIEZvciBleGFtcGxlczpcbiAqIC0gNy8xMFxuICogLSA3LzEyLzIwMjBcbiAqIC0gNy4xMi4yMDIwXG4gKi9cbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAgIFwiKFteXFxcXGRdfF4pXCIgK1xuICAgICAgICBcIihbMC0zXXswLDF9WzAtOV17MX0pW1xcXFwvXFxcXC5cXFxcLV0oWzAtM117MCwxfVswLTldezF9KVwiICtcbiAgICAgICAgXCIoPzpbXFxcXC9cXFxcLlxcXFwtXShbMC05XXs0fXxbMC05XXsyfSkpP1wiICtcbiAgICAgICAgXCIoXFxcXFd8JClcIixcbiAgICBcImlcIlxuKTtcblxuY29uc3QgT1BFTklOR19HUk9VUCA9IDE7XG5jb25zdCBFTkRJTkdfR1JPVVAgPSA1O1xuXG5jb25zdCBGSVJTVF9OVU1CRVJTX0dST1VQID0gMjtcbmNvbnN0IFNFQ09ORF9OVU1CRVJTX0dST1VQID0gMztcblxuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBpbXBsZW1lbnRzIFBhcnNlciB7XG4gICAgZ3JvdXBOdW1iZXJNb250aDogbnVtYmVyO1xuICAgIGdyb3VwTnVtYmVyRGF5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihsaXR0bGVFbmRpYW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ncm91cE51bWJlck1vbnRoID0gbGl0dGxlRW5kaWFuID8gU0VDT05EX05VTUJFUlNfR1JPVVAgOiBGSVJTVF9OVU1CRVJTX0dST1VQO1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyRGF5ID0gbGl0dGxlRW5kaWFuID8gRklSU1RfTlVNQkVSU19HUk9VUCA6IFNFQ09ORF9OVU1CRVJTX0dST1VQO1xuICAgIH1cblxuICAgIHBhdHRlcm4oKTogUmVnRXhwIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuXG4gICAgZXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBob3cgcGF0dGVybiBpcyBleGVjdXRlZCBvbiByZW1haW5pbmcgdGV4dCBpbiBgY2hyb25vLnRzYCwgdGhlIGNoYXJhY3RlciBiZWZvcmUgdGhlIG1hdGNoIGNvdWxkXG4gICAgICAgIC8vIHN0aWxsIGJlIGEgbnVtYmVyIChlLmcuIFhbWC9ZWS9aWl0gb3IgWFhbL1lZL1paXSBvciBbWFgvWVkvXVpaKS4gV2Ugd2FudCB0byBjaGVjayBhbmQgc2tpcCB0aGVtLlxuICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbT1BFTklOR19HUk9VUF0ubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbmRleEVuZCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gbWF0Y2hbRU5ESU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIGlmICh0ZXh0QmVmb3JlLm1hdGNoKFwiXFxcXGQvPyRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4RW5kIDwgY29udGV4dC50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleEVuZCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLm1hdGNoKFwiXi8/XFxcXGRcIikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleCwgaW5kZXhFbmQpO1xuXG4gICAgICAgIC8vICcxLjEyJywgJzEuMTIuMTInIGlzIG1vcmUgbGlrZSBhIHZlcnNpb24gbnVtYmVyc1xuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZFxcLlxcZCQvKSB8fCB0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkezEsMn1cXC5cXGR7MSwyfVxccyokLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1NL2RkIC0+IE9LXG4gICAgICAgIC8vIE1NLmRkIC0+IE5HXG4gICAgICAgIGlmICghbWF0Y2hbWUVBUl9HUk9VUF0gJiYgdGV4dC5pbmRleE9mKFwiL1wiKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChpbmRleCwgdGV4dCk7XG4gICAgICAgIGxldCBtb250aCA9IHBhcnNlSW50KG1hdGNoW3RoaXMuZ3JvdXBOdW1iZXJNb250aF0pO1xuICAgICAgICBsZXQgZGF5ID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlckRheV0pO1xuICAgICAgICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgIGlmIChtb250aCA+IDEyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMiAmJiBtb250aCA8PSAzMSkge1xuICAgICAgICAgICAgICAgICAgICBbZGF5LCBtb250aF0gPSBbbW9udGgsIGRheV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gMzEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuXG4gICAgICAgIGlmIChtYXRjaFtZRUFSX0dST1VQXSkge1xuICAgICAgICAgICAgY29uc3QgcmF3WWVhck51bWJlciA9IHBhcnNlSW50KG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGZpbmRZZWFyQ2xvc2VzdFRvUmVmKGNvbnRleHQucmVmRGF0ZSwgZGF5LCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5hZGRUYWcoXCJwYXJzZXIvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCIpO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2Nocm9ub1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5XCI7XG5pbXBvcnQgeyByZXZlcnNlRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vY2FsY3VsYXRpb24vZHVyYXRpb25cIjtcblxuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFBBVFRFUk5fTk9fQUJCUiA9IG5ldyBSZWdFeHAoXG4gICAgYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCxcbiAgICBcImlcIlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxsb3dBYmJyZXZpYXRpb25zOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlubmVyUGF0dGVybigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxvd0FiYnJldmlhdGlvbnMgPyBQQVRURVJOIDogUEFUVEVSTl9OT19BQkJSO1xuICAgIH1cblxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0OiBQYXJzaW5nQ29udGV4dCwgbWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMl0pO1xuICAgICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCBkdXJhdGlvbik7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy90aW1ldW5pdHNcIjtcblxuZnVuY3Rpb24gSXNQb3NpdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL15bKy1dL2kpICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eLS9pKSAhPSBudWxsO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIHJlbGF0aXZlIGRhdGEvdGltZSB0aGF0IGNvbWVzIGFmdGVyIGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyMDIwLTAyLTEzXSBbKzIgd2Vla3NdXG4gKiAtIFtuZXh0IHR1ZXNkYXldIFsrMTAgZGF5c11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW46IHN0cmluZywgY3VycmVudFJlc3VsdDogUGFyc2luZ1Jlc3VsdCwgbmV4dFJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKC9eXFxzKiQvaSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpIHx8IElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCk7XG4gICAgfVxuXG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuOiBzdHJpbmcsIGN1cnJlbnRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIG5leHRSZXN1bHQ6IFBhcnNpbmdSZXN1bHQsIGNvbnRleHQpOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgbGV0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG5leHRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChJc05lZ2F0aXZlRm9sbG93aW5nUmVmZXJlbmNlKG5leHRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKFxuICAgICAgICAgICAgUmVmZXJlbmNlV2l0aFRpbWV6b25lLmZyb21EYXRlKGN1cnJlbnRSZXN1bHQuc3RhcnQuZGF0ZSgpKSxcbiAgICAgICAgICAgIHRpbWVVbml0c1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQucmVmZXJlbmNlLFxuICAgICAgICAgICAgY3VycmVudFJlc3VsdC5pbmRleCxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXN1bHQudGV4dH0ke3RleHRCZXR3ZWVufSR7bmV4dFJlc3VsdC50ZXh0fWAsXG4gICAgICAgICAgICBjb21wb25lbnRzXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwgImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCwgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IHBhcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmV2ZXJzZUR1cmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL2R1cmF0aW9uXCI7XG5cbmZ1bmN0aW9uIGhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShyZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcmVzdWx0LnRleHQubWF0Y2goL1xccysoYmVmb3JlfGZyb20pJC9pKSAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYXNJbXBsaWVkTGF0ZXJSZWZlcmVuY2VEYXRlKHJlc3VsdDogUGFyc2luZ1Jlc3VsdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXFxzKyhhZnRlcnxzaW5jZSkkL2kpICE9IG51bGw7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgcmVsYXRpdmUgZGF0YS90aW1lIHRoYXQgZm9sbG93IGJ5IGFuIGFic29sdXRlIGRhdGUuXG4gKiAtIFsyIHdlZWtzIGJlZm9yZV0gWzIwMjAtMDItMTNdXG4gKiAtIFsyIGRheXMgYWZ0ZXJdIFtuZXh0IEZyaWRheV1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpOiBSZWdFeHAge1xuICAgICAgICByZXR1cm4gL15cXHMqJC9pO1xuICAgIH1cblxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogYm9vbGVhbiB7XG4gICAgICAgIC8vIERhdGVzIG5lZWQgdG8gYmUgbmV4dCB0byBlYWNoIG90aGVyIHRvIGdldCBtZXJnZWRcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgcmVsYXRpdmUgdG9rZW5zIHdlcmUgc3dhbGxvd2VkIGJ5IHRoZSBmaXJzdCBkYXRlLlxuICAgICAgICAvLyBFLmcuIFs8cmVsYXRpdmVfZGF0ZTE+IGZyb21dIFs8ZGF0ZTI+XVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgPGRhdGUyPiBpbXBsaWVzIGFuIGFic29sdXRlIGRhdGVcbiAgICAgICAgcmV0dXJuICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJkYXlcIikgJiYgISFuZXh0UmVzdWx0LnN0YXJ0LmdldChcIm1vbnRoXCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJ5ZWFyXCIpO1xuICAgIH1cblxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2Vlbjogc3RyaW5nLCBjdXJyZW50UmVzdWx0OiBQYXJzaW5nUmVzdWx0LCBuZXh0UmVzdWx0OiBQYXJzaW5nUmVzdWx0KTogUGFyc2luZ1Jlc3VsdCB7XG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHBhcnNlVGltZVVuaXRzKGN1cnJlbnRSZXN1bHQudGV4dCk7XG4gICAgICAgIGlmIChoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUoY3VycmVudFJlc3VsdCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gcmV2ZXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoXG4gICAgICAgICAgICBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbURhdGUobmV4dFJlc3VsdC5zdGFydC5kYXRlKCkpLFxuICAgICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gbmV3IFBhcnNpbmdSZXN1bHQoXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGN1cnJlbnRSZXN1bHQuaW5kZXgsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLFxuICAgICAgICAgICAgY29tcG9uZW50c1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsICJpbXBvcnQgeyBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jaHJvbm9cIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgWUVBUl9QQVRURVJOLCBwYXJzZVllYXIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFlFQVJfU1VGRklYX1BBVFRFUk4gPSBuZXcgUmVnRXhwKGBeXFxcXHMqKCR7WUVBUl9QQVRURVJOfSlgLCBcImlcIik7XG5jb25zdCBZRUFSX0dST1VQID0gMTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyIGltcGxlbWVudHMgUmVmaW5lciB7XG4gICAgcmVmaW5lKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCByZXN1bHRzOiBQYXJzaW5nUmVzdWx0W10pOiBQYXJzaW5nUmVzdWx0W10ge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFlFQVJfU1VGRklYX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBzdWZmaXggbWF0Y2ggaXMganVzdCBhIHNob3J0IG51bWJlciwgZS5nLiBcIjE0LzQgOTBcIiwgZG9uJ3QgYXNzdW1lIGl0IHllYXIuXG4gICAgICAgICAgICBpZiAobWF0Y2hbMF0udHJpbSgpLmxlbmd0aCA8PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgeWVhcjogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hYnN0cmFjdFJlZmluZXJzXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0IH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5Vbmxpa2VseUZvcm1hdEZpbHRlciBleHRlbmRzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQ6IFBhcnNpbmdSZXN1bHQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHJlc3VsdC50ZXh0LnRyaW0oKTtcblxuICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIGNvbnNpc3RzIG9mIHRoZSB3aG9sZSB0ZXh0IChlLmcuIFwiMjAyNFwiLCBcIk1heVwiLCBldGMpLFxuICAgICAgICAvLyB0aGVuIGl0IGlzIHVubGlrZWx5IHRvIGJlIGEgZGF0ZS5cbiAgICAgICAgaWYgKHRleHQgPT09IGNvbnRleHQudGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gRW5nbGlzaCwgdGhlIHdvcmQgXCJtYXlcIiBpcyBhIG1vbnRoIG5hbWUsIGJ1dCBpdCBpcyBhbHNvIGEgbW9kYWwgdmVyYi5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHRleHQgYmVmb3JlIFwibWF5XCIgZm9sbG93cyBzb21lIGFsbG93ZWQgcGF0dGVybnMuXG4gICAgICAgIGlmICh0ZXh0LnRvTG93ZXJDYXNlKCkgPT09IFwibWF5XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmUgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5pbmRleCkudHJpbSgpO1xuICAgICAgICAgICAgaWYgKCF0ZXh0QmVmb3JlLm1hdGNoKC9cXGIoaW4pJC9pKSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEVuZ2xpc2gsIFwidGhlIHNlY29uZFwiIGNvdWxkIHJlZmVyIHRvIHRoZSBvcmRpbmFsIG51bWJlciBvciB0aW1ldW5pdC5cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChcInRoZSBzZWNvbmRcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHRBZnRlciA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGV4dEFmdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIHVubGlrZWx5IHJlc3VsdDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jaHJvbm9cIjtcblxuaW1wb3J0IEVOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZUxpdHRsZUVuZGlhblBhcnNlclwiO1xuaW1wb3J0IEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXJcIjtcbmltcG9ydCBFTk1vbnRoTmFtZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lUGFyc2VyXCI7XG5pbXBvcnQgRU5ZZWFyTW9udGhEYXlQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlllYXJNb250aERheVBhcnNlclwiO1xuaW1wb3J0IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOU2xhc2hNb250aEZvcm1hdFBhcnNlclwiO1xuaW1wb3J0IEVOVGltZUV4cHJlc3Npb25QYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXJcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lclwiO1xuaW1wb3J0IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVUaW1lUmVmaW5lclwiO1xuXG5pbXBvcnQgeyBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9jb25maWd1cmF0aW9uc1wiO1xuaW1wb3J0IEVOQ2FzdWFsRGF0ZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsRGF0ZVBhcnNlclwiO1xuaW1wb3J0IEVOQ2FzdWFsVGltZVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOQ2FzdWFsVGltZVBhcnNlclwiO1xuaW1wb3J0IEVOV2Vla2RheVBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOV2Vla2RheVBhcnNlclwiO1xuaW1wb3J0IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXJcIjtcblxuaW1wb3J0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuLi8uLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyXCI7XG5pbXBvcnQgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXJcIjtcbmltcG9ydCBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZGVmYXVsdCAqY2FzdWFsKiB7QExpbmsgQ29uZmlndXJhdGlvbn0gZm9yIEVuZ2xpc2ggY2hyb25vLlxuICAgICAqIEl0IGNhbGxzIHtATGluayBjcmVhdGVDb25maWd1cmF0aW9ufSBhbmQgaW5jbHVkZXMgYWRkaXRpb25hbCBwYXJzZXJzLlxuICAgICAqL1xuICAgIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbERhdGVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsVGltZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5Nb250aE5hbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGRlZmF1bHQge0BMaW5rIENvbmZpZ3VyYXRpb259IGZvciBFbmdsaXNoIGNocm9ub1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmljdE1vZGUgSWYgdGhlIHRpbWV1bml0IG1lbnRpb25pbmcgc2hvdWxkIGJlIHN0cmljdCwgbm90IGNhc3VhbFxuICAgICAqIEBwYXJhbSBsaXR0bGVFbmRpYW4gSWYgZm9ybWF0IHNob3VsZCBiZSBkYXRlLWZpcnN0L2xpdHRsZUVuZGlhbiAoZS5nLiBlbl9VSyksIG5vdCBtb250aC1maXJzdC9taWRkbGVFbmRpYW4gKGUuZy4gZW5fVVMpXG4gICAgICovXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbihzdHJpY3RNb2RlID0gdHJ1ZSwgbGl0dGxlRW5kaWFuID0gZmFsc2UpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcnNlcnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmV3IFNsYXNoRGF0ZUZvcm1hdFBhcnNlcihsaXR0bGVFbmRpYW4pLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlcigvKnNob3VsZFNraXBZZWFyTGlrZURhdGU9Ki8gbGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOV2Vla2RheVBhcnNlcigpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdEFnb0Zvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZmluZXJzOiBbbmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RyaWN0TW9kZVxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcnNlcnMudW5zaGlmdChuZXcgRU5ZZWFyTW9udGhEYXlQYXJzZXIoLypzdHJpY3RNb250aERhdGVPcmRlcj0qLyBzdHJpY3RNb2RlKSk7XG5cbiAgICAgICAgLy8gVGhlc2UgcmVsYXRpdmUtZGF0ZXMgY29uc2lkZXJhdGlvbiBzaG91bGQgYmUgZG9uZSBiZWZvcmUgb3RoZXIgY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIoKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gUmUtYXBwbHkgdGhlIGRhdGUgdGltZSByZWZpbmVyIGFnYWluIGFmdGVyIHRoZSB0aW1lem9uZSByZWZpbmVtZW50IGFuZCBleGNsdXNpb24gaW4gY29tbW9uIHJlZmluZXJzLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlVGltZVJlZmluZXIoKSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCB5ZWFyIGFmdGVyIG1lcmdpbmcgZGF0ZSBhbmQgdGltZVxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyKCkpO1xuXG4gICAgICAgIC8vIEtlZXAgdGhlIGRhdGUgcmFuZ2UgcmVmaW5lciBhdCB0aGUgZW5kIChhZnRlciBhbGwgb3RoZXIgcmVmaW5lbWVudHMpLlxuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgUmVmZXJlbmNlV2l0aFRpbWV6b25lLCBQYXJzaW5nQ29tcG9uZW50cywgUGFyc2luZ1Jlc3VsdCB9IGZyb20gXCIuL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IEFzeW5jRGVidWdCbG9jaywgRGVidWdIYW5kbGVyIH0gZnJvbSBcIi4vZGVidWdnaW5nXCI7XG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IHRvVGltZXpvbmVPZmZzZXQgfSBmcm9tIFwiLi90aW1lem9uZVwiO1xuXG4vKipcbiAqIENocm9ubyBjb25maWd1cmF0aW9uLlxuICogSXQgaXMgc2ltcGx5IGFuIG9yZGVyZWQgbGlzdCBvZiBwYXJzZXJzIGFuZCByZWZpbmVyc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xuICAgIHBhcnNlcnM6IFBhcnNlcltdO1xuICAgIHJlZmluZXJzOiBSZWZpbmVyW107XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIENocm9ubyAqUGFyc2VyKi5cbiAqXG4gKiBFYWNoIHBhcnNlciBzaG91bGQgcmVjb2duaXplIGFuZCBoYW5kbGUgYSBjZXJ0YWluIGRhdGUgZm9ybWF0LlxuICogQ2hyb25vIHVzZXMgbXVsdGlwbGUgcGFyc2VzIChhbmQgcmVmaW5lcnMpIHRvZ2V0aGVyIGZvciBwYXJzaW5nIHRoZSBpbnB1dC5cbiAqXG4gKiBUaGUgcGFyc2VyIGltcGxlbWVudGF0aW9uIG11c3QgcHJvdmlkZSB7QExpbmsgcGF0dGVybiB8IHBhdHRlcm4oKX0gZm9yIHRoZSBkYXRlIGZvcm1hdC5cbiAqXG4gKiBUaGUge0BMaW5rIGV4dHJhY3QgfCBleHRyYWN0KCl9IG1ldGhvZCBpcyBjYWxsZWQgd2l0aCB0aGUgcGF0dGVybidzICptYXRjaCouXG4gKiBUaGUgbWF0Y2hpbmcgYW5kIGV4dHJhY3RpbmcgaXMgY29udHJvbGxlZCBhbmQgYWRqdXN0ZWQgdG8gYXZvaWQgZm9yIG92ZXJsYXBwaW5nIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VyIHtcbiAgICBwYXR0ZXJuKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0KTogUmVnRXhwO1xuICAgIGV4dHJhY3QoXG4gICAgICAgIGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LFxuICAgICAgICBtYXRjaDogUmVnRXhwTWF0Y2hBcnJheVxuICAgICk6IFBhcnNpbmdDb21wb25lbnRzIHwgUGFyc2luZ1Jlc3VsdCB8IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBIGFic3RyYWN0aW9uIGZvciBDaHJvbm8gKlJlZmluZXIqLlxuICpcbiAqIEVhY2ggcmVmaW5lciB0YWtlcyB0aGUgbGlzdCBvZiByZXN1bHRzIChmcm9tIHBhcnNlcnMgb3Igb3RoZXIgcmVmaW5lcnMpIGFuZCByZXR1cm5zIGFub3RoZXIgbGlzdCBvZiByZXN1bHRzLlxuICogQ2hyb25vIGFwcGxpZXMgZWFjaCByZWZpbmVyIGluIG9yZGVyIGFuZCByZXR1cm4gdGhlIG91dHB1dCBmcm9tIHRoZSBsYXN0IHJlZmluZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmaW5lciB7XG4gICAgcmVmaW5lOiAoY29udGV4dDogUGFyc2luZ0NvbnRleHQsIHJlc3VsdHM6IFBhcnNpbmdSZXN1bHRbXSkgPT4gUGFyc2luZ1Jlc3VsdFtdO1xufVxuXG4vKipcbiAqIFRoZSBDaHJvbm8gb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ2hyb25vIHtcbiAgICBwYXJzZXJzOiBBcnJheTxQYXJzZXI+O1xuICAgIHJlZmluZXJzOiBBcnJheTxSZWZpbmVyPjtcblxuICAgIGRlZmF1bHRDb25maWcgPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24gfHwgdGhpcy5kZWZhdWx0Q29uZmlnLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucGFyc2Vyc107XG4gICAgICAgIHRoaXMucmVmaW5lcnMgPSBbLi4uY29uZmlndXJhdGlvbi5yZWZpbmVyc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBDaHJvbm8gb2JqZWN0IHdpdGggdGhlIHNhbWUgY29uZmlndXJhdGlvbiAoYHBhcnNlcnNgIGFuZCBgcmVmaW5lcnNgKVxuICAgICAqL1xuICAgIGNsb25lKCk6IENocm9ubyB7XG4gICAgICAgIHJldHVybiBuZXcgQ2hyb25vKHtcbiAgICAgICAgICAgIHBhcnNlcnM6IFsuLi50aGlzLnBhcnNlcnNdLFxuICAgICAgICAgICAgcmVmaW5lcnM6IFsuLi50aGlzLnJlZmluZXJzXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBzaG9ydGN1dCBmb3IgY2FsbGluZyB7QExpbmsgcGFyc2UgfCBwYXJzZSgpIH0gdGhlbiB0cmFuc2Zvcm0gdGhlIHJlc3VsdCBpbnRvIEphdmFzY3JpcHQncyBEYXRlIG9iamVjdFxuICAgICAqIEByZXR1cm4gRGF0ZSBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBmaXJzdCBwYXJzZSByZXN1bHRcbiAgICAgKi9cbiAgICBwYXJzZURhdGUodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnBhcnNlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA+IDAgPyByZXN1bHRzWzBdLnN0YXJ0LmRhdGUoKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dDogc3RyaW5nLCByZWZlcmVuY2VEYXRlPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgUGFyc2luZ0NvbnRleHQodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKTtcblxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaCgocGFyc2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRSZXN1bHRzID0gQ2hyb25vLmV4ZWN1dGVQYXJzZXIoY29udGV4dCwgcGFyc2VyKTtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChwYXJzZWRSZXN1bHRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVmaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAocmVmaW5lcikge1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlZmluZXIucmVmaW5lKGNvbnRleHQsIHJlc3VsdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBleGVjdXRlUGFyc2VyKGNvbnRleHQ6IFBhcnNpbmdDb250ZXh0LCBwYXJzZXI6IFBhcnNlcikge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBwYXJzZXIucGF0dGVybihjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCByZW1haW5pbmdUZXh0ID0gY29udGV4dC50ZXh0O1xuICAgICAgICBsZXQgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG5cbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWF0Y2ggaW5kZXggb24gdGhlIGZ1bGwgdGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBvcmlnaW5hbFRleHQubGVuZ3RoIC0gcmVtYWluaW5nVGV4dC5sZW5ndGg7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwYXJzZXIuZXh0cmFjdChjb250ZXh0LCBtYXRjaCk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGZhaWxzLCBtb3ZlIG9uIGJ5IDFcbiAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0ID0gb3JpZ2luYWxUZXh0LnN1YnN0cmluZyhtYXRjaC5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHJlbWFpbmluZ1RleHQpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyc2VkUmVzdWx0OiBQYXJzaW5nUmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdC5zdGFydCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkUmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KG1hdGNoLmluZGV4LCBtYXRjaFswXSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGFyc2VkSW5kZXggPSBwYXJzZWRSZXN1bHQuaW5kZXg7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRUZXh0ID0gcGFyc2VkUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGV4dHJhY3RlZCAoYXQgaW5kZXg9JHtwYXJzZWRJbmRleH0pICcke3BhcnNlZFRleHR9J2ApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocGFyc2VkUmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbmluZ1RleHQgPSBvcmlnaW5hbFRleHQuc3Vic3RyaW5nKHBhcnNlZEluZGV4ICsgcGFyc2VkVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzaW5nQ29udGV4dCBpbXBsZW1lbnRzIERlYnVnSGFuZGxlciB7XG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG9wdGlvbjogUGFyc2luZ09wdGlvbjtcbiAgICByZWFkb25seSByZWZlcmVuY2U6IFJlZmVyZW5jZVdpdGhUaW1lem9uZTtcblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkLiBVc2UgYHJlZmVyZW5jZS5pbnN0YW50YCBpbnN0ZWFkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZkRhdGU6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHJlZkRhdGU/OiBQYXJzaW5nUmVmZXJlbmNlIHwgRGF0ZSwgb3B0aW9uPzogUGFyc2luZ09wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbiA/PyB7fTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSBSZWZlcmVuY2VXaXRoVGltZXpvbmUuZnJvbUlucHV0KHJlZkRhdGUsIHRoaXMub3B0aW9uLnRpbWV6b25lcyk7XG4gICAgICAgIHRoaXMucmVmRGF0ZSA9IHRoaXMucmVmZXJlbmNlLmluc3RhbnQ7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoY29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHMpOiBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgIGlmIChjb21wb25lbnRzIGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nQ29tcG9uZW50cyh0aGlzLnJlZmVyZW5jZSwgY29tcG9uZW50cyk7XG4gICAgfVxuXG4gICAgY3JlYXRlUGFyc2luZ1Jlc3VsdChcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgdGV4dE9yRW5kSW5kZXg6IG51bWJlciB8IHN0cmluZyxcbiAgICAgICAgc3RhcnRDb21wb25lbnRzPzogeyBbYyBpbiBDb21wb25lbnRdPzogbnVtYmVyIH0gfCBQYXJzaW5nQ29tcG9uZW50cyxcbiAgICAgICAgZW5kQ29tcG9uZW50cz86IHsgW2MgaW4gQ29tcG9uZW50XT86IG51bWJlciB9IHwgUGFyc2luZ0NvbXBvbmVudHNcbiAgICApOiBQYXJzaW5nUmVzdWx0IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IHR5cGVvZiB0ZXh0T3JFbmRJbmRleCA9PT0gXCJzdHJpbmdcIiA/IHRleHRPckVuZEluZGV4IDogdGhpcy50ZXh0LnN1YnN0cmluZyhpbmRleCwgdGV4dE9yRW5kSW5kZXgpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhzdGFydENvbXBvbmVudHMpIDogbnVsbDtcbiAgICAgICAgY29uc3QgZW5kID0gZW5kQ29tcG9uZW50cyA/IHRoaXMuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoZW5kQ29tcG9uZW50cykgOiBudWxsO1xuXG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgaW5kZXgsIHRleHQsIHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIGRlYnVnKGJsb2NrOiBBc3luY0RlYnVnQmxvY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uLmRlYnVnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlcjogRGVidWdIYW5kbGVyID0gPERlYnVnSGFuZGxlcj50aGlzLm9wdGlvbi5kZWJ1ZztcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmRlYnVnKGJsb2NrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICIvKipcbiAqIENocm9ubyBjb21wb25lbnRzIGZvciBFbmdsaXNoIHN1cHBvcnQgKCpwYXJzZXJzKiwgKnJlZmluZXJzKiwgYW5kICpjb25maWd1cmF0aW9uKilcbiAqXG4gKiBAbW9kdWxlXG4gKi9cblxuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFJlZmluZXIgfSBmcm9tIFwiLi4vLi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4uLy4uL3Jlc3VsdHNcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgUGFyc2VkUmVzdWx0LCBQYXJzaW5nT3B0aW9uLCBQYXJzaW5nUmVmZXJlbmNlLCBNZXJpZGllbSwgV2Vla2RheSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCB7IENocm9ubywgUGFyc2VyLCBSZWZpbmVyLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBDb21wb25lbnQsIFBhcnNlZFJlc3VsdCwgUGFyc2luZ09wdGlvbiwgUGFyc2luZ1JlZmVyZW5jZSwgTWVyaWRpZW0sIFdlZWtkYXkgfTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgRU5EZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqY2FzdWFsKiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqc3RyaWN0KiBFbmdsaXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3QgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ29uZmlndXJhdGlvbih0cnVlLCBmYWxzZSkpO1xuXG4vKipcbiAqIENocm9ubyBvYmplY3QgY29uZmlndXJlZCBmb3IgcGFyc2luZyAqVUstc3R5bGUqIEVuZ2xpc2hcbiAqL1xuZXhwb3J0IGNvbnN0IEdCID0gbmV3IENocm9ubyhjb25maWd1cmF0aW9uLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24odHJ1ZSkpO1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZSgpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogUGFyc2VkUmVzdWx0W10ge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2UodGV4dCwgcmVmLCBvcHRpb24pO1xufVxuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIGVuLmNhc3VhbC5wYXJzZURhdGUoKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBEYXRlIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4iLCAiaW1wb3J0ICogYXMgZW4gZnJvbSBcIi4vbG9jYWxlcy9lblwiO1xuaW1wb3J0IHsgQ2hyb25vLCBQYXJzZXIsIFBhcnNpbmdDb250ZXh0LCBSZWZpbmVyIH0gZnJvbSBcIi4vY2hyb25vXCI7XG5pbXBvcnQgeyBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH0gZnJvbSBcIi4vcmVzdWx0c1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IHsgZW4sIENocm9ubywgUGFyc2VyLCBQYXJzaW5nQ29udGV4dCwgUmVmaW5lciwgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgQ29tcG9uZW50LCBQYXJzZWRDb21wb25lbnRzLCBQYXJzZWRSZXN1bHQsIFBhcnNpbmdPcHRpb24sIFBhcnNpbmdSZWZlcmVuY2UsIE1lcmlkaWVtLCBXZWVrZGF5IH07XG5cbi8vIEV4cG9ydCBhbGwgbG9jYWxlc1xuaW1wb3J0ICogYXMgZGUgZnJvbSBcIi4vbG9jYWxlcy9kZVwiO1xuaW1wb3J0ICogYXMgZnIgZnJvbSBcIi4vbG9jYWxlcy9mclwiO1xuaW1wb3J0ICogYXMgamEgZnJvbSBcIi4vbG9jYWxlcy9qYVwiO1xuaW1wb3J0ICogYXMgcHQgZnJvbSBcIi4vbG9jYWxlcy9wdFwiO1xuaW1wb3J0ICogYXMgbmwgZnJvbSBcIi4vbG9jYWxlcy9ubFwiO1xuaW1wb3J0ICogYXMgemggZnJvbSBcIi4vbG9jYWxlcy96aFwiO1xuaW1wb3J0ICogYXMgcnUgZnJvbSBcIi4vbG9jYWxlcy9ydVwiO1xuaW1wb3J0ICogYXMgZXMgZnJvbSBcIi4vbG9jYWxlcy9lc1wiO1xuaW1wb3J0ICogYXMgdWsgZnJvbSBcIi4vbG9jYWxlcy91a1wiO1xuXG5leHBvcnQgeyBkZSwgZnIsIGphLCBwdCwgbmwsIHpoLCBydSwgZXMsIHVrIH07XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLnN0cmljdH1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IGVuLnN0cmljdDtcblxuLyoqXG4gKiBBIHNob3J0Y3V0IGZvciB7QGxpbmsgZW4gfCBjaHJvbm8uZW4uY2FzdWFsfVxuICovXG5leHBvcnQgY29uc3QgY2FzdWFsID0gZW4uY2FzdWFsO1xuXG4vKipcbiAqIEEgc2hvcnRjdXQgZm9yIHtAbGluayBlbiB8IGNocm9uby5lbi5jYXN1YWwucGFyc2UoKX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHRleHQ6IHN0cmluZywgcmVmPzogUGFyc2luZ1JlZmVyZW5jZSB8IERhdGUsIG9wdGlvbj86IFBhcnNpbmdPcHRpb24pOiBQYXJzZWRSZXN1bHRbXSB7XG4gICAgcmV0dXJuIGNhc3VhbC5wYXJzZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG5cbi8qKlxuICogQSBzaG9ydGN1dCBmb3Ige0BsaW5rIGVuIHwgY2hyb25vLmVuLmNhc3VhbC5wYXJzZURhdGUoKX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcsIHJlZj86IFBhcnNpbmdSZWZlcmVuY2UgfCBEYXRlLCBvcHRpb24/OiBQYXJzaW5nT3B0aW9uKTogRGF0ZSB8IG51bGwge1xuICAgIHJldHVybiBjYXN1YWwucGFyc2VEYXRlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsK0NBQUFBLFVBQUFDLFNBQUE7QUFBQSxNQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBT0QsWUFBUyxlQUFhLE9BQU9DLFVBQU9BLFFBQU8sVUFBUSxFQUFFLElBQUUsY0FBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxLQUFHLElBQUUsZUFBYSxPQUFPLGFBQVcsYUFBVyxLQUFHLE1BQU0sNkJBQTJCLEVBQUU7QUFBQSxJQUFDLEdBQUVELFdBQU0sV0FBVTtBQUFDO0FBQWEsVUFBSSxJQUFFLFNBQVEsSUFBRTtBQUFVLGFBQU8sU0FBUyxHQUFFLEdBQUU7QUFBQyxZQUFJLElBQUUsRUFBRTtBQUFVLFVBQUUsVUFBUSxTQUFTRSxJQUFFO0FBQUMsaUJBQU8sS0FBSyxPQUFPLEVBQUUsRUFBRUEsRUFBQyxJQUFFLEtBQUssTUFBTSxLQUFLLE1BQU0sSUFBRSxLQUFHLENBQUMsSUFBRSxLQUFLLE1BQU0sS0FBSyxNQUFNLElBQUUsSUFBRSxLQUFHQSxLQUFFLEVBQUU7QUFBQSxRQUFDO0FBQUUsWUFBSSxJQUFFLEVBQUU7QUFBSSxVQUFFLE1BQUksU0FBU0MsSUFBRUMsSUFBRTtBQUFDLGlCQUFPRCxLQUFFLE9BQU9BLEVBQUMsR0FBRSxLQUFLLE9BQU8sRUFBRSxFQUFFQyxFQUFDLE1BQUksSUFBRSxLQUFLLElBQUksSUFBRUQsSUFBRSxDQUFDLElBQUUsRUFBRSxLQUFLLElBQUksRUFBRUEsSUFBRUMsRUFBQztBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFRLFVBQUUsVUFBUSxTQUFTRCxJQUFFQyxJQUFFO0FBQUMsY0FBSUMsS0FBRSxLQUFLLE9BQU8sR0FBRUMsS0FBRSxDQUFDLENBQUNELEdBQUUsRUFBRUQsRUFBQyxLQUFHQTtBQUFFLGNBQUdDLEdBQUUsRUFBRUYsRUFBQyxNQUFJLEdBQUU7QUFBQyxnQkFBSSxJQUFFLEtBQUssUUFBUSxJQUFFO0FBQUUsbUJBQU9HLEtBQUUsS0FBSyxNQUFNLElBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFFBQVEsS0FBSyxJQUFFLEtBQUssTUFBTSxJQUFFLElBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLE1BQU0sS0FBSztBQUFBLFVBQUM7QUFBQyxpQkFBTyxFQUFFLEtBQUssSUFBSSxFQUFFSCxJQUFFQyxFQUFDO0FBQUEsUUFBQztBQUFBLE1BQUM7QUFBQSxJQUFDLEVBQUU7QUFBQTtBQUFBOzs7QUNBbHdCO0FBQUEsb0NBQUFHLFVBQUFDLFNBQUE7QUFBQSxNQUFDLFNBQVMsR0FBRSxHQUFFO0FBQUMsa0JBQVUsT0FBT0QsWUFBUyxlQUFhLE9BQU9DLFVBQU9BLFFBQU8sVUFBUSxFQUFFLElBQUUsY0FBWSxPQUFPLFVBQVEsT0FBTyxNQUFJLE9BQU8sQ0FBQyxLQUFHLElBQUUsZUFBYSxPQUFPLGFBQVcsYUFBVyxLQUFHLE1BQU0sUUFBTSxFQUFFO0FBQUEsSUFBQyxHQUFFRCxXQUFNLFdBQVU7QUFBQztBQUFhLFVBQUksSUFBRSxLQUFJLElBQUUsS0FBSSxJQUFFLE1BQUssSUFBRSxlQUFjLElBQUUsVUFBUyxJQUFFLFVBQVMsSUFBRSxRQUFPLElBQUUsT0FBTSxJQUFFLFFBQU8sSUFBRSxTQUFRLElBQUUsV0FBVSxJQUFFLFFBQU8sSUFBRSxRQUFPLElBQUUsZ0JBQWUsSUFBRSw4RkFBNkYsSUFBRSx1RkFBc0YsSUFBRSxFQUFDLE1BQUssTUFBSyxVQUFTLDJEQUEyRCxNQUFNLEdBQUcsR0FBRSxRQUFPLHdGQUF3RixNQUFNLEdBQUcsR0FBRSxTQUFRLFNBQVNFLElBQUU7QUFBQyxZQUFJQyxLQUFFLENBQUMsTUFBSyxNQUFLLE1BQUssSUFBSSxHQUFFQyxLQUFFRixLQUFFO0FBQUksZUFBTSxNQUFJQSxNQUFHQyxJQUFHQyxLQUFFLE1BQUksRUFBRSxLQUFHRCxHQUFFQyxFQUFDLEtBQUdELEdBQUUsQ0FBQyxLQUFHO0FBQUEsTUFBRyxFQUFDLEdBQUUsSUFBRSxTQUFTRCxJQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBSUMsS0FBRSxPQUFPSCxFQUFDO0FBQUUsZUFBTSxDQUFDRyxNQUFHQSxHQUFFLFVBQVFGLEtBQUVELEtBQUUsS0FBRyxNQUFNQyxLQUFFLElBQUVFLEdBQUUsTUFBTSxFQUFFLEtBQUtELEVBQUMsSUFBRUY7QUFBQSxNQUFDLEdBQUUsSUFBRSxFQUFDLEdBQUUsR0FBRSxHQUFFLFNBQVNBLElBQUU7QUFBQyxZQUFJQyxLQUFFLENBQUNELEdBQUUsVUFBVSxHQUFFRSxLQUFFLEtBQUssSUFBSUQsRUFBQyxHQUFFRSxLQUFFLEtBQUssTUFBTUQsS0FBRSxFQUFFLEdBQUVFLEtBQUVGLEtBQUU7QUFBRyxnQkFBT0QsTUFBRyxJQUFFLE1BQUksT0FBSyxFQUFFRSxJQUFFLEdBQUUsR0FBRyxJQUFFLE1BQUksRUFBRUMsSUFBRSxHQUFFLEdBQUc7QUFBQSxNQUFDLEdBQUUsR0FBRSxTQUFTSixHQUFFQyxJQUFFQyxJQUFFO0FBQUMsWUFBR0QsR0FBRSxLQUFLLElBQUVDLEdBQUUsS0FBSyxFQUFFLFFBQU0sQ0FBQ0YsR0FBRUUsSUFBRUQsRUFBQztBQUFFLFlBQUlFLEtBQUUsTUFBSUQsR0FBRSxLQUFLLElBQUVELEdBQUUsS0FBSyxNQUFJQyxHQUFFLE1BQU0sSUFBRUQsR0FBRSxNQUFNLElBQUdHLEtBQUVILEdBQUUsTUFBTSxFQUFFLElBQUlFLElBQUUsQ0FBQyxHQUFFRSxLQUFFSCxLQUFFRSxLQUFFLEdBQUVFLEtBQUVMLEdBQUUsTUFBTSxFQUFFLElBQUlFLE1BQUdFLEtBQUUsS0FBRyxJQUFHLENBQUM7QUFBRSxlQUFNLEVBQUUsRUFBRUYsTUFBR0QsS0FBRUUsT0FBSUMsS0FBRUQsS0FBRUUsS0FBRUEsS0FBRUYsUUFBSztBQUFBLE1BQUUsR0FBRSxHQUFFLFNBQVNKLElBQUU7QUFBQyxlQUFPQSxLQUFFLElBQUUsS0FBSyxLQUFLQSxFQUFDLEtBQUcsSUFB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QUFFLE1BQUksU0FBU0UsSUFBRTtBQUFDLGNBQUlDLEtBQUUsRUFBQyxNQUFLRCxJQUFFLEtBQUksTUFBRyxNQUFLLFVBQVM7QUFBRSxpQkFBTyxJQUFJLEVBQUVDLEVBQUM7QUFBQSxRQUFDLEdBQUUsRUFBRSxNQUFJLFNBQVNBLElBQUU7QUFBQyxjQUFJQyxLQUFFLEVBQUUsS0FBSyxPQUFPLEdBQUUsRUFBQyxRQUFPLEtBQUssSUFBRyxLQUFJLEtBQUUsQ0FBQztBQUFFLGlCQUFPRCxLQUFFQyxHQUFFLElBQUksS0FBSyxVQUFVLEdBQUUsQ0FBQyxJQUFFQTtBQUFBLFFBQUMsR0FBRSxFQUFFLFFBQU0sV0FBVTtBQUFDLGlCQUFPLEVBQUUsS0FBSyxPQUFPLEdBQUUsRUFBQyxRQUFPLEtBQUssSUFBRyxLQUFJLE1BQUUsQ0FBQztBQUFBLFFBQUM7QUFBRSxZQUFJLElBQUUsRUFBRTtBQUFNLFVBQUUsUUFBTSxTQUFTRixJQUFFO0FBQUMsVUFBQUEsR0FBRSxRQUFNLEtBQUssS0FBRyxPQUFJLEtBQUssT0FBTyxFQUFFLEVBQUVBLEdBQUUsT0FBTyxNQUFJLEtBQUssVUFBUUEsR0FBRSxVQUFTLEVBQUUsS0FBSyxNQUFLQSxFQUFDO0FBQUEsUUFBQztBQUFFLFlBQUksSUFBRSxFQUFFO0FBQUssVUFBRSxPQUFLLFdBQVU7QUFBQyxjQUFHLEtBQUssSUFBRztBQUFDLGdCQUFJQSxLQUFFLEtBQUs7QUFBRyxpQkFBSyxLQUFHQSxHQUFFLGVBQWUsR0FBRSxLQUFLLEtBQUdBLEdBQUUsWUFBWSxHQUFFLEtBQUssS0FBR0EsR0FBRSxXQUFXLEdBQUUsS0FBSyxLQUFHQSxHQUFFLFVBQVUsR0FBRSxLQUFLLEtBQUdBLEdBQUUsWUFBWSxHQUFFLEtBQUssS0FBR0EsR0FBRSxjQUFjLEdBQUUsS0FBSyxLQUFHQSxHQUFFLGNBQWMsR0FBRSxLQUFLLE1BQUlBLEdBQUUsbUJBQW1CO0FBQUEsVUFBQyxNQUFNLEdBQUUsS0FBSyxJQUFJO0FBQUEsUUFBQztBQUFFLFlBQUksSUFBRSxFQUFFO0FBQVUsVUFBRSxZ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RUFBYSxTQUFTLEtBQUssT0FBTztBQUFBLGFBQ3JDO0FBQUE7QUFBQSxRQVBHLEtBQUs7QUFBQSxNQVNaLENBQ0Q7QUFBQTtBQUFBLEVBQ0g7QUFFSjsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJlIiwgImkiLCAiciIsICJzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInQiLCAiZSIsICJuIiwgInIiLCAiaSIsICJzIiwgInUiLCAiYSIsICJNIiwgIm0iLCAiZiIsICJsIiwgIiQiLCAieSIsICJ2IiwgImciLCAiRCIsICJvIiwgImQiLCAiYyIsICJoIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImUiLCAidCIsICJyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInIiLCAiZSIsICJ0IiwgIm8iLCAibiIsICJpIiwgImQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAidCIsICJuIiwgImkiLCAibyIsICJyIiwgImUiLCAidSIsICJmIiwgInMiLCAiYSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ0IiwgImkiLCAiZSIsICJzIiwgImYiLCAibiIsICJ1IiwgInIiLCAibyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJpIiwgIm4iLCAiZiIsICJlIiwgImltcG9ydF9kYXlqcyIsICJNZXJpZGllbSIsICJXZWVrZGF5IiwgIk1vbnRoIiwgImRheWpzIiwgImRheWpzIiwgInF1YXJ0ZXJPZlllYXIiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiTU9OVEhfTkFNRV9HUk9VUCIsICJEQVRFX0dST1VQIiwgIkRBVEVfVE9fR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiWUVBUl9HUk9VUCIsICJQQVRURVJOIiwgIk1PTlRIX05BTUVfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgInN0cmljdCIsICJQQVRURVJOIiwgIlBBVFRFUk4iLCAiU1RSSUNUX1BBVFRFUk4iLCAiaW1wbHlTaW1pbGFyRGF0ZSIsICJpbXBseVNpbWlsYXJUaW1lIiwgImFzc2lnblNpbWlsYXJEYXRlIiwgImFzc2lnblNpbWlsYXJUaW1lIiwgImFzc2lnblNpbWlsYXJEYXRlIiwgImltcGx5U2ltaWxhckRhdGUiLCAiaW1wb3J0X2RheWpzIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiWUVBUl9OVU1CRVJfR1JPVVAiLCAiTU9OVEhfTlVNQkVSX0dST1VQIiwgIkRBVEVfTlVNQkVSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiaW1wb3J0X2RheWpzIiwgImltcG9ydF9kYXlqcyIsICJkYXlqcyIsICJhc3NpZ25TaW1pbGFyRGF0ZSIsICJhc3NpZ25TaW1pbGFyVGltZSIsICJpbXBseVNpbWlsYXJUaW1lIiwgImRheWpzIiwgIlBBVFRFUk4iLCAiZGF5anMiLCAiYXNzaWduU2ltaWxhckRhdGUiLCAiUEFUVEVSTiIsICJQQVRURVJOIiwgIlBSRUZJWF9HUk9VUCIsICJpbXBvcnRfZGF5anMiLCAiUEFUVEVSTiIsICJkYXlqcyIsICJQQVRURVJOIiwgIllFQVJfR1JPVVAiLCAiUEFUVEVSTiIsICJZRUFSX0dST1VQIiwgImNvbmZpZ3VyYXRpb24iLCAiY2FzdWFsIiwgImNhc3VhbCIsICJpbXBvcnRfZGF5anMiLCAiaW1wb3J0X3RpbWV6b25lIiwgImRheWpzIiwgImFkdmFuY2VkRm9ybWF0UGx1Z2luIiwgIndlZWtPZlllYXJQbHVnaW4iLCAidXRjUGx1Z2luIiwgInRpbWV6b25lUGx1Z2luIiwgInJlbGF0aXZlVGltZVBsdWdpbiJdCn0K
