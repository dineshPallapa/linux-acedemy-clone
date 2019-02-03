! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("auth0-js", [], e) : "object" == typeof exports ? exports["auth0-js"] = e() : t.auth0 = e()
}(this, function() {
  return function(t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
  }([function(t, e, n) {
    t.exports = n(59)
  }, function(t, e, n) {
    function r(t, e) {
      return e.reduce(function(e, n) {
        return t[n] && (e[n] = t[n]), e
      }, {})
    }

    function i(t, e) {
      var n = [];
      for (var r in t) - 1 === e.indexOf(r) && n.push(r);
      return n
    }

    function o(t) {
      var e = [];
      for (var n in t) e.push(t[n]);
      return e
    }

    function s() {
      var t = o(arguments);
      return t.unshift({}), m.get().apply(void 0, t)
    }

    function a(t, e) {
      return {
        base: e ? r(t, e) : t,
        "with": function(t, e) {
          return t = e ? r(t, e) : t, s(this.base, t)
        }
      }
    }

    function u(t, e) {
      return Object.keys(t).reduce(function(n, r) {
        return -1 === e.indexOf(r) && (n[r] = t[r]), n
      }, {})
    }

    function p(t) {
      for (var e, n = "", r = 0, i = !0, o = !0; r < t.length;) e = t.charCodeAt(r), !o && e >= 65 && 90 >= e || !i && e >= 48 && 57 >= e ? (n += "_", n += t[r].toLowerCase()) : n += t[r].toLowerCase(), i = e >= 48 && 57 >= e, o = e >= 65 && 90 >= e, r++;
      return n
    }

    function c(t) {
      var e = t.split("_");
      return e.reduce(function(t, e) {
        return t + e.charAt(0).toUpperCase() + e.slice(1)
      }, e.shift())
    }

    function h(t, e) {
      return "object" != typeof t || y.isArray(t) || null === t ? t : (e = e || [], Object.keys(t).reduce(function(n, r) {
        var i = -1 === e.indexOf(r) ? p(r) : r;
        return n[i] = h(t[r]), n
      }, {}))
    }

    function l(t, e) {
      return "object" != typeof t || y.isArray(t) || null === t ? t : (e = e || [], Object.keys(t).reduce(function(n, r) {
        var i = -1 === e.indexOf(r) ? c(r) : r;
        return n[i] = l(t[r]), n
      }, {}))
    }

    function d(t) {
      var e = t.match(/^(https?:)\/\/(([^:\/?#]*)(?::([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
      return e && {
        href: t,
        protocol: e[1],
        host: e[2],
        hostname: e[3],
        port: e[4],
        pathname: e[5],
        search: e[6],
        hash: e[7]
      }
    }

    function f(t) {
      if (t) {
        var e = d(t),
          n = e.protocol + "//" + e.hostname;
        return e.port && (n += ":" + e.port), n
      }
    }
    var y = n(4),
      m = n(15);
    t.exports = {
      toSnakeCase: h,
      toCamelCase: l,
      blacklist: u,
      merge: a,
      pick: r,
      getKeysNotIn: i,
      extend: s,
      getOriginFromUrl: f,
      getLocationFromUrl: d
    }
  }, function(t, e, n) {
    (function(e) {
      function r(t) {
        e.window.location = t
      }

      function i() {
        return e.window.document
      }

      function o() {
        return e.window
      }

      function s() {
        var t = e.window.location,
          n = t.origin;
        return n || (n = a.getOriginFromUrl(t.href)), n
      }
      var a = n(1);
      t.exports = {
        redirect: r,
        getDocument: i,
        getWindow: o,
        getOrigin: s
      }
    }).call(e, function() {
      return this
    }())
  }, function(t, e, n) {
    var r, i;
    ! function(o, s, a) {
      "undefined" != typeof t && t.exports ? t.exports = a() : (r = a, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i)))
    }("urljoin", this, function() {
      function t(t, e) {
        return t = t.replace(/:\//g, "://"), t = t.replace(/([^:\s])\/+/g, "$1/"), t = t.replace(/\/(\?|&|#[^!])/g, "$1"), t = t.replace(/(\?.+)\?/g, "$1&")
      }
      return function() {
        var e = arguments,
          n = {};
        "object" == typeof arguments[0] && (e = arguments[0], n = arguments[1] || {});
        var r = [].slice.call(e, 0).join("/");
        return t(r, n)
      }
    })
  }, function(t, e) {
    function n(t, e, n, r) {
      if (n = "array" === n ? "object" : n, t && typeof t[e] !== n) throw new Error(r)
    }

    function r(t, e, n) {
      if (typeof t !== e) throw new Error(n)
    }

    function i(t, e, n) {
      if (-1 === e.indexOf(t)) throw new Error(n)
    }

    function o(t, e, o) {
      if (e.optional && !t || r(t, e.type, e.message), "object" === e.type && o)
        for (var s = Object.keys(o), a = 0; a < s.length; a++) {
          var u = s[a];
          o[u].optional && !t[u] || o[u].condition && !o[u].condition(t) || (n(t, u, o[u].type, o[u].message), o[u].values && i(t[u], o[u].values, o[u].value_message))
        }
    }

    function s(t) {
      return this.supportsIsArray() ? Array.isArray(t) : "[object Array]" === u.call(t)
    }

    function a() {
      return null != Array.isArray
    }
    var u = Object.prototype.toString;
    t.exports = {
      check: o,
      attribute: n,
      variable: r,
      value: i,
      isArray: s,
      supportsIsArray: a
    }
  }, function(t, e, n) {
    function r(t, e) {
      return e = e || {}, e.ignoreCasing = !!e.ignoreCasing && e.ignoreCasing,
        function(n, r) {
          var s;
          return n || r ? (!n && r.err && (n = r.err, r = null), !n && r.error && (n = r, r = null), n ? (s = {
            original: n
          }, n.response && n.response.statusCode && (s.statusCode = n.response.statusCode), n.response && n.response.statusText && (s.statusText = n.response.statusText), n.response && n.response.body && (n = n.response.body), n.err && (n = n.err), s.code = n.error || n.code || n.error_code || n.status || null, s.description = n.errorDescription || n.error_description || n.description || n.error || n.details || n.err || null, e.forceLegacyError && (s.error = s.code, s.error_description = s.description), n.name && (s.name = n.name), n.policy && (s.policy = n.policy), t(s)) : !r.type || "text/html" !== r.type && "text/plain" !== r.type ? e.ignoreCasing ? t(null, r.body || r) : t(null, o.toCamelCase(r.body || r)) : t(null, r.text)) : t(i.buildResponse("generic_error", "Something went wrong"))
        }
    }
    var i = n(26),
      o = n(1);
    t.exports = r
  }, function(t, e, n) {
    "use strict";
    var r = n(14),
      i = n(13),
      o = n(8);
    t.exports = {
      formats: o,
      parse: i,
      stringify: r
    }
  }, function(t, e) {
    function n(t) {
      this.disableWarnings = t.disableWarnings
    }
    n.prototype.warning = function(t) {
      this.disableWarnings || console.warn(t)
    }, t.exports = n
  }, function(t, e) {
    "use strict";
    var n = String.prototype.replace,
      r = /%20/g;
    t.exports = {
      "default": "RFC3986",
      formatters: {
        RFC1738: function(t) {
          return n.call(t, r, "+")
        },
        RFC3986: function(t) {
          return t
        }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    }
  }, function(t, e) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      r = function() {
        for (var t = [], e = 0; 256 > e; ++e) t.push("%" + ((16 > e ? "0" : "") + e.toString(16)).toUpperCase());
        return t
      }();
    e.arrayToObject = function(t, e) {
      for (var n = e && e.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) "undefined" != typeof t[r] && (n[r] = t[r]);
      return n
    }, e.merge = function(t, r, i) {
      if (!r) return t;
      if ("object" != typeof r) {
        if (Array.isArray(t)) t.push(r);
        else {
          if ("object" != typeof t) return [t, r];
          (i.plainObjects || i.allowPrototypes || !n.call(Object.prototype, r)) && (t[r] = !0)
        }
        return t
      }
      if ("object" != typeof t) return [t].concat(r);
      var o = t;
      return Array.isArray(t) && !Array.isArray(r) && (o = e.arrayToObject(t, i)), Array.isArray(t) && Array.isArray(r) ? (r.forEach(function(r, o) {
        n.call(t, o) ? t[o] && "object" == typeof t[o] ? t[o] = e.merge(t[o], r, i) : t.push(r) : t[o] = r
      }), t) : Object.keys(r).reduce(function(t, n) {
        var o = r[n];
        return Object.prototype.hasOwnProperty.call(t, n) ? t[n] = e.merge(t[n], o, i) : t[n] = o, t
      }, o)
    }, e.decode = function(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, " "))
      } catch (e) {
        return t
      }
    }, e.encode = function(t) {
      if (0 === t.length) return t;
      for (var e = "string" == typeof t ? t : String(t), n = "", i = 0; i < e.length; ++i) {
        var o = e.charCodeAt(i);
        45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && 57 >= o || o >= 65 && 90 >= o || o >= 97 && 122 >= o ? n += e.charAt(i) : 128 > o ? n += r[o] : 2048 > o ? n += r[192 | o >> 6] + r[128 | 63 & o] : 55296 > o || o >= 57344 ? n += r[224 | o >> 12] + r[128 | o >> 6 & 63] + r[128 | 63 & o] : (i += 1, o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(i)), n += r[240 | o >> 18] + r[128 | o >> 12 & 63] + r[128 | o >> 6 & 63] + r[128 | 63 & o])
      }
      return n
    }, e.compact = function(t, n) {
      if ("object" != typeof t || null === t) return t;
      var r = n || [],
        i = r.indexOf(t);
      if (-1 !== i) return r[i];
      if (r.push(t), Array.isArray(t)) {
        for (var o = [], s = 0; s < t.length; ++s) t[s] && "object" == typeof t[s] ? o.push(e.compact(t[s], r)) : "undefined" != typeof t[s] && o.push(t[s]);
        return o
      }
      var a = Object.keys(t);
      return a.forEach(function(n) {
        t[n] = e.compact(t[n], r)
      }), t
    }, e.isRegExp = function(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t)
    }, e.isBuffer = function(t) {
      return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
  }, function(t, e) {
    t.exports = {
      raw: "9.4.1"
    }
  }, function(t, e, n) {
    function r(t) {
      this.request = t, this.method = t.method, this.url = t.url, this.body = t._data, this.headers = t._header
    }

    function i(t) {
      this.request = t
    }

    function o(t) {
      this._sendTelemetry = t._sendTelemetry !== !1 || t._sendTelemetry, this._telemetryInfo = t._telemetryInfo || null, this._timesToRetryFailedRequests = t._timesToRetryFailedRequests, this.headers = t.headers || {}
    }
    var s = n(21),
      a = n(25),
      u = n(10);
    r.prototype.abort = function() {
      this.request.abort()
    }, r.prototype.getMethod = function() {
      return this.method
    }, r.prototype.getBody = function() {
      return this.body
    }, r.prototype.getUrl = function() {
      return this.url
    }, r.prototype.getHeaders = function() {
      return this.headers
    }, i.prototype.set = function(t, e) {
      return this.request = this.request.set(t, e), this
    }, i.prototype.send = function(t) {
      return this.request = this.request.send(t), this
    }, i.prototype.withCredentials = function() {
      return this.request = this.request.withCredentials(), this
    }, i.prototype.end = function(t) {
      return this.request = this.request.end(t), new r(this.request)
    }, o.prototype.setCommonConfiguration = function(t, e) {
      if (e = e || {}, this._timesToRetryFailedRequests > 0 && (t = t.retry(this._timesToRetryFailedRequests)), e.noHeaders) return t;
      var n = this.headers;
      t = t.set("Content-Type", "application/json");
      for (var r = Object.keys(this.headers), i = 0; i < r.length; i++) t = t.set(r[i], n[r[i]]);
      return this._sendTelemetry && (t = t.set("Auth0-Client", this.getTelemetryData())), t
    }, o.prototype.getTelemetryData = function() {
      var t = this._telemetryInfo || {
          name: "auth0.js",
          version: u.raw
        },
        e = JSON.stringify(t);
      return a.encode(e)
    }, o.prototype.get = function(t, e) {
      return new i(this.setCommonConfiguration(s.get(t), e))
    }, o.prototype.post = function(t, e) {
      return new i(this.setCommonConfiguration(s.post(t), e))
    }, o.prototype.patch = function(t, e) {
      return new i(this.setCommonConfiguration(s.patch(t), e))
    }, t.exports = o
  }, function(t, e, n) {
    ! function(n, r) {
      t.exports = e = r()
    }(this, function() {
      var t = t || function(t, e) {
        var n = Object.create || function() {
            function t() {}
            return function(e) {
              var n;
              return t.prototype = e, n = new t, t.prototype = null, n
            }
          }(),
          r = {},
          i = r.lib = {},
          o = i.Base = function() {
            return {
              extend: function(t) {
                var e = n(this);
                return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                  e.$super.init.apply(this, arguments)
                }), e.init.prototype = e, e.$super = this, e
              },
              create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t
              },
              init: function() {},
              mixIn: function(t) {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
              },
              clone: function() {
                return this.init.prototype.extend(this)
              }
            }
          }(),
          s = i.WordArray = o.extend({
            init: function(t, n) {
              t = this.words = t || [], n != e ? this.sigBytes = n : this.sigBytes = 4 * t.length
            },
            toString: function(t) {
              return (t || u).stringify(this)
            },
            concat: function(t) {
              var e = this.words,
                n = t.words,
                r = this.sigBytes,
                i = t.sigBytes;
              if (this.clamp(), r % 4)
                for (var o = 0; i > o; o++) {
                  var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                  e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                } else
                  for (var o = 0; i > o; o += 4) e[r + o >>> 2] = n[o >>> 2];
              return this.sigBytes += i, this
            },
            clamp: function() {
              var e = this.words,
                n = this.sigBytes;
              e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4)
            },
            clone: function() {
              var t = o.clone.call(this);
              return t.words = this.words.slice(0), t
            },
            random: function(e) {
              for (var n, r = [], i = function(e) {
                  var e = e,
                    n = 987654321,
                    r = 4294967295;
                  return function() {
                    n = 36969 * (65535 & n) + (n >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r;
                    var i = (n << 16) + e & r;
                    return i /= 4294967296, i += .5, i * (t.random() > .5 ? 1 : -1)
                  }
                }, o = 0; e > o; o += 4) {
                var a = i(4294967296 * (n || t.random()));
                n = 987654071 * a(), r.push(4294967296 * a() | 0)
              }
              return new s.init(r, e)
            }
          }),
          a = r.enc = {},
          u = a.Hex = {
            stringify: function(t) {
              for (var e = t.words, n = t.sigBytes, r = [], i = 0; n > i; i++) {
                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
              }
              return r.join("")
            },
            parse: function(t) {
              for (var e = t.length, n = [], r = 0; e > r; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
              return new s.init(n, e / 2)
            }
          },
          p = a.Latin1 = {
            stringify: function(t) {
              for (var e = t.words, n = t.sigBytes, r = [], i = 0; n > i; i++) {
                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                r.push(String.fromCharCode(o))
              }
              return r.join("")
            },
            parse: function(t) {
              for (var e = t.length, n = [], r = 0; e > r; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
              return new s.init(n, e)
            }
          },
          c = a.Utf8 = {
            stringify: function(t) {
              try {
                return decodeURIComponent(escape(p.stringify(t)))
              } catch (t) {
                throw new Error("Malformed UTF-8 data")
              }
            },
            parse: function(t) {
              return p.parse(unescape(encodeURIComponent(t)))
            }
          },
          h = i.BufferedBlockAlgorithm = o.extend({
            reset: function() {
              this._data = new s.init, this._nDataBytes = 0
            },
            _append: function(t) {
              "string" == typeof t && (t = c.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
            },
            _process: function(e) {
              var n = this._data,
                r = n.words,
                i = n.sigBytes,
                o = this.blockSize,
                a = 4 * o,
                u = i / a;
              u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0);
              var p = u * o,
                c = t.min(4 * p, i);
              if (p) {
                for (var h = 0; p > h; h += o) this._doProcessBlock(r, h);
                var l = r.splice(0, p);
                n.sigBytes -= c
              }
              return new s.init(l, c)
            },
            clone: function() {
              var t = o.clone.call(this);
              return t._data = this._data.clone(), t
            },
            _minBufferSize: 0
          }),
          l = (i.Hasher = h.extend({
            cfg: o.extend(),
            init: function(t) {
              this.cfg = this.cfg.extend(t), this.reset()
            },
            reset: function() {
              h.reset.call(this), this._doReset()
            },
            update: function(t) {
              return this._append(t), this._process(), this
            },
            finalize: function(t) {
              t && this._append(t);
              var e = this._doFinalize();
              return e
            },
            blockSize: 16,
            _createHelper: function(t) {
              return function(e, n) {
                return new t.init(n).finalize(e)
              }
            },
            _createHmacHelper: function(t) {
              return function(e, n) {
                return new l.HMAC.init(t, n).finalize(e)
              }
            }
          }), r.algo = {});
        return r
      }(Math);
      return t
    })
  }, function(t, e, n) {
    "use strict";
    var r = n(9),
      i = Object.prototype.hasOwnProperty,
      o = {
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
      s = function(t, e) {
        for (var n = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0; o < r.length; ++o) {
          var s, a, u = r[o],
            p = -1 === u.indexOf("]=") ? u.indexOf("=") : u.indexOf("]=") + 1; - 1 === p ? (s = e.decoder(u), a = e.strictNullHandling ? null : "") : (s = e.decoder(u.slice(0, p)), a = e.decoder(u.slice(p + 1))), i.call(n, s) ? n[s] = [].concat(n[s]).concat(a) : n[s] = a
        }
        return n
      },
      a = function(t, e, n) {
        if (!t.length) return e;
        var r, i = t.shift();
        if ("[]" === i) r = [], r = r.concat(a(t, e, n));
        else {
          r = n.plainObjects ? Object.create(null) : {};
          var o = "[" === i.charAt(0) && "]" === i.charAt(i.length - 1) ? i.slice(1, -1) : i,
            s = parseInt(o, 10);
          !isNaN(s) && i !== o && String(s) === o && s >= 0 && n.parseArrays && s <= n.arrayLimit ? (r = [], r[s] = a(t, e, n)) : r[o] = a(t, e, n)
        }
        return r
      },
      u = function(t, e, n) {
        if (t) {
          var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            o = /(\[[^[\]]*])/,
            s = /(\[[^[\]]*])/g,
            u = o.exec(r),
            p = u ? r.slice(0, u.index) : r,
            c = [];
          if (p) {
            if (!n.plainObjects && i.call(Object.prototype, p) && !n.allowPrototypes) return;
            c.push(p)
          }
          for (var h = 0; null !== (u = s.exec(r)) && h < n.depth;) {
            if (h += 1, !n.plainObjects && i.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
            c.push(u[1])
          }
          return u && c.push("[" + r.slice(u.index) + "]"), a(c, e, n)
        }
      };
    t.exports = function(t, e) {
      var n = e || {};
      if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder) throw new TypeError("Decoder has to be a function.");
      if (n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, "" === t || null === t || "undefined" == typeof t) return n.plainObjects ? Object.create(null) : {};
      for (var i = "string" == typeof t ? s(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, p = Object.keys(i), c = 0; c < p.length; ++c) {
        var h = p[c],
          l = u(h, i[h], n);
        a = r.merge(a, l, n)
      }
      return r.compact(a)
    }
  }, function(t, e, n) {
    "use strict";
    var r = n(9),
      i = n(8),
      o = {
        brackets: function(t) {
          return t + "[]"
        },
        indices: function(t, e) {
          return t + "[" + e + "]"
        },
        repeat: function(t) {
          return t
        }
      },
      s = Date.prototype.toISOString,
      a = {
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        serializeDate: function(t) {
          return s.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1
      },
      u = function t(e, n, i, o, s, a, u, p, c, h, l, d) {
        var f = e;
        if ("function" == typeof u) f = u(n, f);
        else if (f instanceof Date) f = h(f);
        else if (null === f) {
          if (o) return a && !d ? a(n) : n;
          f = ""
        }
        if ("string" == typeof f || "number" == typeof f || "boolean" == typeof f || r.isBuffer(f)) {
          if (a) {
            var y = d ? n : a(n);
            return [l(y) + "=" + l(a(f))]
          }
          return [l(n) + "=" + l(String(f))]
        }
        var m = [];
        if ("undefined" == typeof f) return m;
        var g;
        if (Array.isArray(u)) g = u;
        else {
          var v = Object.keys(f);
          g = p ? v.sort(p) : v
        }
        for (var b = 0; b < g.length; ++b) {
          var w = g[b];
          s && null === f[w] || (m = Array.isArray(f) ? m.concat(t(f[w], i(n, w), i, o, s, a, u, p, c, h, l, d)) : m.concat(t(f[w], n + (c ? "." + w : "[" + w + "]"), i, o, s, a, u, p, c, h, l, d)))
        }
        return m
      };
    t.exports = function(t, e) {
      var n = t,
        r = e || {};
      if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder) throw new TypeError("Encoder has to be a function.");
      var s = "undefined" == typeof r.delimiter ? a.delimiter : r.delimiter,
        p = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : a.strictNullHandling,
        c = "boolean" == typeof r.skipNulls ? r.skipNulls : a.skipNulls,
        h = "boolean" == typeof r.encode ? r.encode : a.encode,
        l = "function" == typeof r.encoder ? r.encoder : a.encoder,
        d = "function" == typeof r.sort ? r.sort : null,
        f = "undefined" != typeof r.allowDots && r.allowDots,
        y = "function" == typeof r.serializeDate ? r.serializeDate : a.serializeDate,
        m = "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : a.encodeValuesOnly;
      if ("undefined" == typeof r.format) r.format = i["default"];
      else if (!Object.prototype.hasOwnProperty.call(i.formatters, r.format)) throw new TypeError("Unknown format option provided.");
      var g, v, b = i.formatters[r.format];
      "function" == typeof r.filter ? (v = r.filter, n = v("", n)) : Array.isArray(r.filter) && (v = r.filter, g = v);
      var w = [];
      if ("object" != typeof n || null === n) return "";
      var _;
      _ = r.arrayFormat in o ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
      var T = o[_];
      g || (g = Object.keys(n)), d && g.sort(d);
      for (var O = 0; O < g.length; ++O) {
        var k = g[O];
        c && null === n[k] || (w = w.concat(u(n[k], k, T, p, c, h ? l : null, v, d, f, y, b, m)))
      }
      return w.join(s)
    }
  }, function(t, e) {
    function n() {
      return Object.assign ? Object.assign : r
    }

    function r(t) {
      "use strict";
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
      for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (void 0 !== r && null !== r)
          for (var i = Object.keys(Object(r)), o = 0, s = i.length; s > o; o++) {
            var a = i[o],
              u = Object.getOwnPropertyDescriptor(r, a);
            void 0 !== u && u.enumerable && (e[a] = r[a])
          }
      }
      return e
    }
    t.exports = {
      get: n,
      objectAssignPolyfill: r
    }
  }, function(t, e, n) {
    function r(t, e) {
      this.webAuth = t, this.baseOptions = e, this.request = new c(e), this.webMessageHandler = new h(t)
    }

    function i(t) {
      var e = u.getWindow(),
        n = "&" + e.location.hash.substring(1),
        r = n.split("&" + t + "=");
      return 2 === r.length ? r.pop().split("&").shift() : void 0
    }

    function o(t, e) {
      return ["co/verifier", encodeURIComponent(t), encodeURIComponent(e)].join("/")
    }

    function s(t, e) {
      try {
        var n = t.sessionStorage[e];
        return t.sessionStorage.removeItem(e), n
      } catch (t) {
        return ""
      }
    }
    var a = n(3),
      u = n(2),
      p = n(1),
      c = n(11),
      h = n(31),
      l = n(5);
    r.prototype.login = function(t, e) {
      var n = this,
        r = u.getWindow(),
        i = a(this.baseOptions.rootUrl, "/co/authenticate");
      t.username = t.username || t.email, delete t.email;
      var s = {
        client_id: t.clientID || this.baseOptions.clientID,
        username: t.username
      };
      t.password && (s.password = t.password), t.otp && (s.otp = t.otp);
      var c = t.realm || this.baseOptions.realm;
      if (c) {
        var h = t.credentialType || this.baseOptions.credentialType || "http://auth0.com/oauth/grant-type/password-realm";
        s.realm = c, s.credential_type = h
      } else s.credential_type = "password";
      this.request.post(i).withCredentials().send(s).end(function(i, s) {
        if (i) {
          var a = i.response && i.response.body || {
            error: "request_error",
            error_description: JSON.stringify(i)
          };
          return l(e, {
            forceLegacyError: !0
          })(a)
        }
        var u = t.popup === !0;
        t = p.blacklist(t, ["password", "credentialType", "otp", "popup"]);
        var c = p.merge(t)["with"]({
            loginTicket: s.body.login_ticket
          }),
          h = o(n.baseOptions.rootUrl, s.body.co_id);
        r.sessionStorage[h] = s.body.co_verifier, u ? n.webMessageHandler.run(c, l(e, {
          forceLegacyError: !0
        })) : n.webAuth.authorize(c)
      })
    }, r.prototype.callback = function() {
      var t = decodeURIComponent(i("origin")),
        e = u.getWindow();
      e.addEventListener("message", function(t) {
        if ("co_verifier_request" === t.data.type) {
          var n = o(t.origin, t.data.request.id),
            r = s(e, n);
          t.source.postMessage({
            type: "co_verifier_response",
            response: {
              verifier: r
            }
          }, t.origin)
        }
      }), e.parent.postMessage({
        type: "ready"
      }, t)
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      t = t || {}, this.namespace = t.namespace || s, this.keyLength = t.keyLength || 32
    }
    var i = n(54),
      o = n(29),
      s = "com.auth0.auth.";
    r.prototype.process = function(t) {
      if (!t.responseType) throw new Error("responseType is required");
      var e = t.realm || t.connection,
        n = -1 !== t.responseType.indexOf("id_token"),
        r = this.generateTransaction(t.appState, t.state, t.nonce, e, n);
      return t.state || (t.state = r.state), n && !t.nonce && (t.nonce = r.nonce), t
    }, r.prototype.generateTransaction = function(t, e, n, r, s) {
      return e = e || i.randomString(this.keyLength), n = n || (s ? i.randomString(this.keyLength) : null), o.setItem(this.namespace + e, {
        nonce: n,
        appState: t,
        state: e,
        lastUsedConnection: r
      }), {
        state: e,
        nonce: n
      }
    }, r.prototype.getStoredTransaction = function(t) {
      var e;
      return e = o.getItem(this.namespace + t), o.removeItem(this.namespace + t), e
    }, t.exports = r
  }, function(t, e) {
    "use strict";

    function n(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
    }

    function r(t) {
      return 3 * t.length / 4 - n(t)
    }

    function i(t) {
      var e, r, i, o, s, a, u = t.length;
      s = n(t), a = new c(3 * u / 4 - s), i = s > 0 ? u - 4 : u;
      var h = 0;
      for (e = 0, r = 0; i > e; e += 4, r += 3) o = p[t.charCodeAt(e)] << 18 | p[t.charCodeAt(e + 1)] << 12 | p[t.charCodeAt(e + 2)] << 6 | p[t.charCodeAt(e + 3)], a[h++] = o >> 16 & 255, a[h++] = o >> 8 & 255, a[h++] = 255 & o;
      return 2 === s ? (o = p[t.charCodeAt(e)] << 2 | p[t.charCodeAt(e + 1)] >> 4, a[h++] = 255 & o) : 1 === s && (o = p[t.charCodeAt(e)] << 10 | p[t.charCodeAt(e + 1)] << 4 | p[t.charCodeAt(e + 2)] >> 2, a[h++] = o >> 8 & 255, a[h++] = 255 & o), a
    }

    function o(t) {
      return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t]
    }

    function s(t, e, n) {
      for (var r, i = [], s = e; n > s; s += 3) r = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], i.push(o(r));
      return i.join("")
    }

    function a(t) {
      for (var e, n = t.length, r = n % 3, i = "", o = [], a = 16383, p = 0, c = n - r; c > p; p += a) o.push(s(t, p, p + a > c ? c : p + a));
      return 1 === r ? (e = t[n - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), o.push(i), o.join("")
    }
    e.byteLength = r, e.toByteArray = i, e.fromByteArray = a;
    for (var u = [], p = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, d = h.length; d > l; ++l) u[l] = h[l], p[h.charCodeAt(l)] = l;
    p["-".charCodeAt(0)] = 62, p["_".charCodeAt(0)] = 63
  }, function(t, e, n) {
    ! function(r, i) {
      t.exports = e = i(n(12))
    }(this, function(t) {
      return function(e) {
        var n = t,
          r = n.lib,
          i = r.WordArray,
          o = r.Hasher,
          s = n.algo,
          a = [],
          u = [];
        ! function() {
          function t(t) {
            for (var n = e.sqrt(t), r = 2; n >= r; r++)
              if (!(t % r)) return !1;
            return !0
          }

          function n(t) {
            return 4294967296 * (t - (0 | t)) | 0
          }
          for (var r = 2, i = 0; 64 > i;) t(r) && (8 > i && (a[i] = n(e.pow(r, .5))), u[i] = n(e.pow(r, 1 / 3)), i++), r++
        }();
        var p = [],
          c = s.SHA256 = o.extend({
            _doReset: function() {
              this._hash = new i.init(a.slice(0))
            },
            _doProcessBlock: function(t, e) {
              for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], c = n[5], h = n[6], l = n[7], d = 0; 64 > d; d++) {
                if (16 > d) p[d] = 0 | t[e + d];
                else {
                  var f = p[d - 15],
                    y = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                    m = p[d - 2],
                    g = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                  p[d] = y + p[d - 7] + g + p[d - 16]
                }
                var v = a & c ^ ~a & h,
                  b = r & i ^ r & o ^ i & o,
                  w = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                  _ = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25),
                  T = l + _ + v + u[d] + p[d],
                  O = w + b;
                l = h, h = c, c = a, a = s + T | 0, s = o, o = i, i = r, r = T + O | 0
              }
              n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + c | 0, n[6] = n[6] + h | 0, n[7] = n[7] + l | 0
            },
            _doFinalize: function() {
              var t = this._data,
                n = t.words,
                r = 8 * this._nDataBytes,
                i = 8 * t.sigBytes;
              return n[i >>> 5] |= 128 << 24 - i % 32, n[(i + 64 >>> 9 << 4) + 14] = e.floor(r / 4294967296), n[(i + 64 >>> 9 << 4) + 15] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
            },
            clone: function() {
              var t = o.clone.call(this);
              return t._hash = this._hash.clone(), t
            }
          });
        n.SHA256 = o._createHelper(c), n.HmacSHA256 = o._createHmacHelper(c)
      }(Math), t.SHA256
    })
  }, function(t, e, n) {
    function r(t) {
      var e = t.length % 4,
        n = 4 - e;
      return 0 === e ? t : t + new Array(1 + n).join("=")
    }

    function i(t) {
      for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
      return e
    }

    function o(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      return e
    }

    function s(t) {
      for (var e = "", n = 0; n < t.length; n++) {
        var r = t[n].toString(16);
        e += 2 === r.length ? r : "0" + r
      }
      return e
    }

    function a(t) {
      return h.fromByteArray(o(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
        return String.fromCharCode("0x" + e)
      }))).replace(/\+/g, "-").replace(/\//g, "_")
    }

    function u(t) {
      return t = r(t).replace(/\-/g, "+").replace(/_/g, "/"), decodeURIComponent(i(h.toByteArray(t)).split("").map(function(t) {
        return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
      }).join(""))
    }

    function p(t) {
      return s(h.toByteArray(r(t)))
    }

    function c(t) {
      var e = {
        "+": "-",
        "/": "_",
        "=": ""
      };
      return t.replace(/[+\/=]/g, function(t) {
        return e[t]
      })
    }
    var h = n(18);
    t.exports = {
      encodeString: a,
      decodeToString: u,
      byteArrayToString: i,
      stringToByteArray: o,
      padding: r,
      byteArrayToHex: s,
      decodeToHEX: p,
      base64ToBase64Url: c
    }
  }, function(t, e, n) {
    function r() {}

    function i(t) {
      if (!y(t)) return t;
      var e = [];
      for (var n in t) o(e, n, t[n]);
      return e.join("&")
    }

    function o(t, e, n) {
      if (null != n)
        if (Array.isArray(n)) n.forEach(function(n) {
          o(t, e, n)
        });
        else if (y(n))
        for (var r in n) o(t, e + "[" + r + "]", n[r]);
      else t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n));
      else null === n && t.push(encodeURIComponent(e))
    }

    function s(t) {
      for (var e, n, r = {}, i = t.split("&"), o = 0, s = i.length; s > o; ++o) e = i[o], n = e.indexOf("="), -1 == n ? r[decodeURIComponent(e)] = "" : r[decodeURIComponent(e.slice(0, n))] = decodeURIComponent(e.slice(n + 1));
      return r
    }

    function a(t) {
      for (var e, n, r, i, o = t.split(/\r?\n/), s = {}, a = 0, u = o.length; u > a; ++a) n = o[a], e = n.indexOf(":"), -1 !== e && (r = n.slice(0, e).toLowerCase(), i = b(n.slice(e + 1)), s[r] = i);
      return s
    }

    function u(t) {
      return /[\/+]json($|[^-\w])/.test(t)
    }

    function p(t) {
      this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var e = this.xhr.status;
      1223 === e && (e = 204), this._setStatusProperties(e), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function c(t, e) {
      var n = this;
      this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
        var t = null,
          e = null;
        try {
          e = new p(n)
        } catch (e) {
          return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, n.xhr ? (t.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
        }
        n.emit("response", e);
        var r;
        try {
          n._isResponseOK(e) || (r = new Error(e.statusText || "Unsuccessful HTTP response"))
        } catch (t) {
          r = t
        }
        r ? (r.original = t, r.response = e, r.status = e.status, n.callback(r, e)) : n.callback(null, e)
      })
    }

    function h(t, e, n) {
      var r = v("DELETE", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
    var l;
    "undefined" != typeof window ? l = window : "undefined" != typeof self ? l = self : (console.warn("Using browser-only version of superagent in non-browser environment"), l = this);
    var d = n(32),
      f = n(42),
      y = n(22),
      m = n(43),
      g = n(41),
      v = e = t.exports = function(t, n) {
        return "function" == typeof n ? new e.Request("GET", t).end(n) : 1 == arguments.length ? new e.Request("GET", t) : new e.Request(t, n)
      };
    e.Request = c, v.getXHR = function() {
      if (!(!l.XMLHttpRequest || l.location && "file:" == l.location.protocol && l.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (t) {}
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {}
      throw Error("Browser-only version of superagent could not find XHR")
    };
    var b = "".trim ? function(t) {
      return t.trim()
    } : function(t) {
      return t.replace(/(^\s*|\s*$)/g, "")
    };
    v.serializeObject = i, v.parseString = s, v.types = {
      html: "text/html",
      json: "application/json",
      xml: "text/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, v.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, v.parse = {
      "application/x-www-form-urlencoded": s,
      "application/json": JSON.parse
    }, m(p.prototype), p.prototype._parseBody = function(t) {
      var e = v.parse[this.type];
      return this.req._parser ? this.req._parser(this, t) : (!e && u(this.type) && (e = v.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null)
    }, p.prototype.toError = function() {
      var t = this.req,
        e = t.method,
        n = t.url,
        r = "cannot " + e + " " + n + " (" + this.status + ")",
        i = new Error(r);
      return i.status = this.status, i.method = e, i.url = n, i
    }, v.Response = p, d(c.prototype), f(c.prototype), c.prototype.type = function(t) {
      return this.set("Content-Type", v.types[t] || t), this
    }, c.prototype.accept = function(t) {
      return this.set("Accept", v.types[t] || t), this
    }, c.prototype.auth = function(t, e, n) {
      1 === arguments.length && (e = ""), "object" == typeof e && null !== e && (n = e, e = ""), n || (n = {
        type: "function" == typeof btoa ? "basic" : "auto"
      });
      var r = function(t) {
        if ("function" == typeof btoa) return btoa(t);
        throw new Error("Cannot use basic auth, btoa is not a function")
      };
      return this._auth(t, e, n, r)
    }, c.prototype.query = function(t) {
      return "string" != typeof t && (t = i(t)), t && this._query.push(t), this
    }, c.prototype.attach = function(t, e, n) {
      if (e) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");
        this._getFormData().append(t, e, n || e.name)
      }
      return this
    }, c.prototype._getFormData = function() {
      return this._formData || (this._formData = new l.FormData), this._formData
    }, c.prototype.callback = function(t, e) {
      if (this._shouldRetry(t, e)) return this._retry();
      var n = this._callback;
      this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), n(t, e)
    }, c.prototype.crossDomainError = function() {
      var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, c.prototype.buffer = c.prototype.ca = c.prototype.agent = function() {
      return console.warn("This is not supported in browser version of superagent"), this
    }, c.prototype.pipe = c.prototype.write = function() {
      throw Error("Streaming is not supported in browser version of superagent")
    }, c.prototype._isHost = function(t) {
      return t && "object" == typeof t && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
    }, c.prototype.end = function(t) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || r, this._finalizeQueryString(), this._end()
    }, c.prototype._end = function() {
      var t = this,
        e = this.xhr = v.getXHR(),
        n = this._formData || this._data;
      this._setTimeouts(), e.onreadystatechange = function() {
        var n = e.readyState;
        if (n >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 == n) {
          var r;
          try {
            r = e.status
          } catch (t) {
            r = 0
          }
          if (!r) {
            if (t.timedout || t._aborted) return;
            return t.crossDomainError()
          }
          t.emit("end")
        }
      };
      var r = function(e, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
      };
      if (this.hasListeners("progress")) try {
        e.onprogress = r.bind(null, "download"), e.upload && (e.upload.onprogress = r.bind(null, "upload"))
      } catch (t) {}
      try {
        this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
      } catch (t) {
        return this.callback(t)
      }
      if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
          o = this._serializer || v.serialize[i ? i.split(";")[0] : ""];
        !o && u(i) && (o = v.serialize["application/json"]), o && (n = o(n))
      }
      for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && e.setRequestHeader(s, this.header[s]);
      return this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send("undefined" != typeof n ? n : null), this
    }, v.agent = function() {
      return new g
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(t) {
      g.prototype[t.toLowerCase()] = function(e, n) {
        var r = new v.Request(t, e);
        return this._setDefaults(r), n && r.end(n), r
      }
    }), g.prototype.del = g.prototype["delete"], v.get = function(t, e, n) {
      var r = v("GET", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, v.head = function(t, e, n) {
      var r = v("HEAD", t);
      return "function" == typeof e && (n = e, e = null), e && r.query(e), n && r.end(n), r
    }, v.options = function(t, e, n) {
      var r = v("OPTIONS", t);
      return "function" == typeof e && (n = e,
        e = null), e && r.send(e), n && r.end(n), r
    }, v.del = h, v["delete"] = h, v.patch = function(t, e, n) {
      var r = v("PATCH", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, v.post = function(t, e, n) {
      var r = v("POST", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }, v.put = function(t, e, n) {
      var r = v("PUT", t);
      return "function" == typeof e && (n = e, e = null), e && r.send(e), n && r.end(n), r
    }
  }, function(t, e) {
    "use strict";

    function n(t) {
      return null !== t && "object" == typeof t
    }
    t.exports = n
  }, function(t, e) {
    var n = function() {
      function t(t, e, n) {
        t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener && t.addEventListener(e, n, !1)
      }

      function e(t, e, n) {
        t.detachEvent ? t.detachEvent("on" + e, n) : t.removeEventListener && t.removeEventListener(e, n, !1)
      }

      function n() {
        if ("undefined" == typeof navigator) return !1;
        var t = -1,
          e = navigator.userAgent;
        if ("Microsoft Internet Explorer" === navigator.appName) {
          var n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
          null != n.exec(e) && (t = parseFloat(RegExp.$1))
        } else if (e.indexOf("Trident") > -1) {
          var n = new RegExp("rv:([0-9]{2,2}[.0-9]{0,})");
          null !== n.exec(e) && (t = parseFloat(RegExp.$1))
        }
        return t >= 8
      }

      function r() {
        try {
          var t = navigator.userAgent;
          return -1 != t.indexOf("Fennec/") || -1 != t.indexOf("Firefox/") && -1 != t.indexOf("Android")
        } catch (t) {}
        return !1
      }

      function i() {
        return "undefined" != typeof window && window.JSON && window.JSON.stringify && window.JSON.parse && window.postMessage
      }

      function o(t) {
        /^https?:\/\//.test(t) || (t = window.location.href);
        var e = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);
        return e ? e[1] : t
      }

      function s() {
        for (var t = (window.location, window.opener.frames), e = t.length - 1; e >= 0; e--) try {
          if (t[e].location.protocol === window.location.protocol && t[e].location.host === window.location.host && t[e].name === a) return t[e]
        } catch (t) {}
      }
      var a = "__winchan_relay_frame",
        u = "die",
        p = n();
      return i() ? {
        open: function(n, i) {
          function s() {
            if (l && document.body.removeChild(l), l = void 0, m && (m = clearInterval(m)), e(window, "message", c), e(window, "unload", s), y) try {
              y.close()
            } catch (t) {
              f.postMessage(u, d)
            }
            y = f = void 0
          }

          function c(t) {
            if (t.origin === d) {
              try {
                var e = JSON.parse(t.data)
              } catch (t) {
                if (!i) throw t;
                i(t)
              }
              "ready" === e.a ? f.postMessage(g, d) : "error" === e.a ? (s(), i && (i(e.d), i = null)) : "response" === e.a && (s(), i && (i(null, e.d), i = null))
            }
          }
          if (!i) throw "missing required callback argument";
          var h;
          n.url || (h = "missing required 'url' parameter"), n.relay_url || (h = "missing required 'relay_url' parameter"), h && setTimeout(function() {
            i(h)
          }, 0), n.window_name || (n.window_name = null), n.window_features && !r() || (n.window_features = void 0);
          var l, d = n.origin || o(n.url);
          if (d !== o(n.relay_url)) return setTimeout(function() {
            i("invalid arguments: origin of url and relay_url must match")
          }, 0);
          var f;
          p && (l = document.createElement("iframe"), l.setAttribute("src", n.relay_url), l.style.display = "none", l.setAttribute("name", a), document.body.appendChild(l), f = l.contentWindow);
          var y = n.popup || window.open(n.url, n.window_name, n.window_features);
          n.popup && (y.location.href = n.url), f || (f = y);
          var m = setInterval(function() {
              y && y.closed && (s(), i && (i("User closed the popup window"), i = null))
            }, 500),
            g = JSON.stringify({
              a: "request",
              d: n.params
            });
          return t(window, "unload", s), t(window, "message", c), {
            close: s,
            focus: function() {
              if (y) try {
                y.focus()
              } catch (t) {}
            }
          }
        },
        onOpen: function(n) {
          function r(t) {
            t = JSON.stringify(t), p ? c.doPost(t, a) : c.postMessage(t, a)
          }

          function i(t) {
            var o;
            try {
              o = JSON.parse(t.data)
            } catch (t) {}
            o && "request" === o.a && (e(window, "message", i), a = t.origin, n && setTimeout(function() {
              n(a, o.d, function(t) {
                n = void 0, r({
                  a: "response",
                  d: t
                })
              })
            }, 0))
          }

          function o(t) {
            if (t.data === u) try {
              window.close()
            } catch (t) {}
          }
          var a = "*",
            c = p ? s() : window.opener;
          if (!c) throw "can't find relay frame";
          t(p ? c : window, "message", i), t(p ? c : window, "message", o);
          try {
            r({
              a: "ready"
            })
          } catch (e) {
            t(c, "load", function(t) {
              r({
                a: "ready"
              })
            })
          }
          var h = function() {
            try {
              e(p ? c : window, "message", o)
            } catch (t) {}
            n && r({
              a: "error",
              d: "client closed window"
            }), n = void 0;
            try {
              window.close()
            } catch (t) {}
          };
          return t(window, "unload", h), {
            detach: function() {
              e(window, "unload", h)
            }
          }
        }
      } : {
        open: function(t, e, n, r) {
          setTimeout(function() {
            r("unsupported browser")
          }, 0)
        },
        onOpen: function(t) {
          setTimeout(function() {
            t("unsupported browser")
          }, 0)
        }
      }
    }();
    "undefined" != typeof t && t.exports && (t.exports = n)
  }, function(t, e, n) {
    function r(t, e) {
      2 === arguments.length ? this.auth0 = t : e = t, u.check(e, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        domain: {
          type: "string",
          message: "domain option is required"
        },
        clientID: {
          type: "string",
          message: "clientID option is required"
        },
        responseType: {
          optional: !0,
          type: "string",
          message: "responseType is not valid"
        },
        responseMode: {
          optional: !0,
          type: "string",
          message: "responseMode is not valid"
        },
        redirectUri: {
          optional: !0,
          type: "string",
          message: "redirectUri is not valid"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope is not valid"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience is not valid"
        },
        _disableDeprecationWarnings: {
          optional: !0,
          type: "boolean",
          message: "_disableDeprecationWarnings option is not valid"
        },
        _sendTelemetry: {
          optional: !0,
          type: "boolean",
          message: "_sendTelemetry option is not valid"
        },
        _telemetryInfo: {
          optional: !0,
          type: "object",
          message: "_telemetryInfo option is not valid"
        }
      }), this.baseOptions = e, this.baseOptions._sendTelemetry = this.baseOptions._sendTelemetry !== !1 || this.baseOptions._sendTelemetry, this.baseOptions.rootUrl = "https://" + this.baseOptions.domain, this.request = new o(this.baseOptions), this.passwordless = new d(this.request, this.baseOptions), this.dbConnection = new f(this.request, this.baseOptions), this.warn = new l({
        disableWarnings: !!e._disableDeprecationWarnings
      })
    }
    var i = n(3),
      o = n(11),
      s = n(6),
      a = n(1),
      u = n(4),
      p = n(28),
      c = n(5),
      h = n(51),
      l = n(7),
      d = n(49),
      f = n(48);
    r.prototype.buildAuthorizeUrl = function(t) {
      var e, n;
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }), e = a.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience"])["with"](t), u.check(e, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        clientID: {
          type: "string",
          message: "clientID option is required"
        },
        redirectUri: {
          optional: !0,
          type: "string",
          message: "redirectUri option is required"
        },
        responseType: {
          type: "string",
          message: "responseType option is required"
        },
        nonce: {
          type: "string",
          message: "nonce option is required",
          condition: function(t) {
            return -1 === t.responseType.indexOf("code") && -1 !== t.responseType.indexOf("id_token")
          }
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope option is required"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience option is required"
        }
      }), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e.connection_scope && u.isArray(e.connection_scope) && (e.connection_scope = e.connection_scope.join(",")), e = a.blacklist(e, ["username", "popupOptions", "domain", "tenant", "timeout"]), e = a.toSnakeCase(e, ["auth0Client"]), e = h.oauthAuthorizeParams(this.warn, e), n = s.stringify(e), i(this.baseOptions.rootUrl, "authorize", "?" + n)
    }, r.prototype.buildLogoutUrl = function(t) {
      var e, n;
      return u.check(t, {
        optional: !0,
        type: "object",
        message: "options parameter is not valid"
      }), e = a.merge(this.baseOptions, ["clientID"])["with"](t || {}), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = a.toSnakeCase(e, ["auth0Client", "returnTo"]), n = s.stringify(a.blacklist(e, ["federated"])), t && void 0 !== t.federated && t.federated !== !1 && "false" !== t.federated && (n += "&federated"), i(this.baseOptions.rootUrl, "v2", "logout", "?" + n)
    }, r.prototype.loginWithDefaultDirectory = function(t, e) {
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        username: {
          type: "string",
          message: "username option is required"
        },
        password: {
          type: "string",
          message: "password option is required"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope option is required"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience option is required"
        }
      }), t.grantType = "password", this.oauthToken(t, e)
    }, r.prototype.login = function(t, e) {
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        username: {
          type: "string",
          message: "username option is required"
        },
        password: {
          type: "string",
          message: "password option is required"
        },
        realm: {
          type: "string",
          message: "realm option is required"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope option is required"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience option is required"
        }
      }), t.grantType = "http://auth0.com/oauth/grant-type/password-realm", this.oauthToken(t, e)
    }, r.prototype.oauthToken = function(t, e) {
      var n, r;
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }), u.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "oauth", "token"), r = a.merge(this.baseOptions, ["clientID", "scope", "audience"])["with"](t), u.check(r, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        clientID: {
          type: "string",
          message: "clientID option is required"
        },
        grantType: {
          type: "string",
          message: "grantType option is required"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope option is required"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience option is required"
        }
      }), r = a.toSnakeCase(r, ["auth0Client"]), r = h.oauthTokenParams(this.warn, r), this.request.post(n).send(r).end(c(e))
    }, r.prototype.loginWithResourceOwner = function(t, e) {
      var n, r;
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        username: {
          type: "string",
          message: "username option is required"
        },
        password: {
          type: "string",
          message: "password option is required"
        },
        connection: {
          type: "string",
          message: "connection option is required"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope option is required"
        }
      }), u.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "oauth", "ro"), r = a.merge(this.baseOptions, ["clientID", "scope"])["with"](t, ["username", "password", "scope", "connection", "device"]), r = a.toSnakeCase(r, ["auth0Client"]), r.grant_type = r.grant_type || "password", this.request.post(n).send(r).end(c(e))
    }, r.prototype.getSSOData = function(t, e) {
      if (!this.auth0) {
        var r = n(30);
        this.auth0 = new r(this.baseOptions)
      }
      "function" == typeof t && (e = t), u.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      });
      var i = this.baseOptions.clientID,
        o = p.get() || {};
      this.auth0.checkSession({
        responseType: "token id_token",
        scope: "openid profile email",
        connection: o.lastUsedConnection,
        timeout: 5e3
      }, function(t, n) {
        return t ? "login_required" === t.error ? e(null, {
          sso: !1
        }) : ("consent_required" === t.error && (t.error_description = "Consent required. When using `getSSOData`, the user has to be authenticated with the following scope: `openid profile email`."), e(t, {
          sso: !1
        })) : o.lastUsedSub && o.lastUsedSub !== n.idTokenPayload.sub ? e(t, {
          sso: !1
        }) : e(null, {
          lastUsedConnection: {
            name: o.lastUsedConnection
          },
          lastUsedUserID: n.idTokenPayload.sub,
          lastUsedUsername: n.idTokenPayload.email || n.idTokenPayload.name,
          lastUsedClientID: i,
          sessionClients: [i],
          sso: !0
        })
      })
    }, r.prototype.userInfo = function(t, e) {
      var n;
      return u.check(t, {
        type: "string",
        message: "accessToken parameter is not valid"
      }), u.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "userinfo"), this.request.get(n).set("Authorization", "Bearer " + t).end(c(e, {
        ignoreCasing: !0
      }))
    }, r.prototype.delegation = function(t, e) {
      var n, r;
      return u.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        grant_type: {
          type: "string",
          message: "grant_type option is required"
        }
      }), u.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "delegation"), r = a.merge(this.baseOptions, ["clientID"])["with"](t), r = a.toSnakeCase(r, ["auth0Client"]), this.request.post(n).send(r).end(c(e))
    }, r.prototype.getUserCountry = function(t) {
      var e;
      return u.check(t, {
        type: "function",
        message: "cb parameter is not valid"
      }), e = i(this.baseOptions.rootUrl, "user", "geoloc", "country"), this.request.get(e).end(c(t))
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      var e = t.length % 4,
        n = 4 - e;
      return 0 === e ? t : t + new Array(1 + n).join("=")
    }

    function i(t) {
      for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
      return e
    }

    function o(t) {
      for (var e = "", n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
      return e
    }

    function s(t) {
      return u.fromByteArray(i(t)).replace(/\+/g, "-").replace(/\//g, "_")
    }

    function a(t) {
      return t = r(t).replace(/-/g, "+").replace(/_/g, "/"), o(u.toByteArray(t))
    }
    var u = n(18);
    t.exports = {
      encode: s,
      decode: a
    }
  }, function(t, e) {
    function n(t, e) {
      return {
        error: t,
        errorDescription: e
      }
    }

    function r(t) {
      return n("invalid_token", t)
    }
    t.exports = {
      buildResponse: n,
      invalidToken: r
    }
  }, function(t, e, n) {
    function r(t) {
      if (this.url = t.url, this.callback = t.callback, this.timeout = t.timeout || 6e4, this.timeoutCallback = t.timeoutCallback || null, this.eventListenerType = t.eventListenerType || "message", this.iframe = null, this.timeoutHandle = null, this._destroyTimeout = null, this.transientMessageEventListener = null, this.proxyEventListener = null, this.eventValidator = t.eventValidator || {
          isValid: function() {
            return !0
          }
        }, "function" != typeof this.callback) throw new Error("options.callback must be a function")
    }
    var i = n(2);
    r.prototype.init = function() {
      var t = this,
        e = i.getWindow();
      switch (this.iframe = e.document.createElement("iframe"), this.iframe.style.display = "none", this.proxyEventListener = function(e) {
        t.eventListener(e)
      }, this.eventListenerType) {
        case "message":
          this.eventSourceObject = e;
          break;
        case "load":
          this.eventSourceObject = this.iframe;
          break;
        default:
          throw new Error("Unsupported event listener type: " + this.eventListenerType)
      }
      this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, !1), e.document.body.appendChild(this.iframe), this.iframe.src = this.url, this.timeoutHandle = setTimeout(function() {
        t.timeoutHandler()
      }, this.timeout)
    }, r.prototype.eventListener = function(t) {
      var e = {
        event: t,
        sourceObject: this.eventSourceObject
      };
      this.eventValidator.isValid(e) && (this.destroy(), this.callback(e))
    }, r.prototype.timeoutHandler = function() {
      this.destroy(), this.timeoutCallback && this.timeoutCallback()
    }, r.prototype.destroy = function() {
      var t = this,
        e = i.getWindow();
      clearTimeout(this.timeoutHandle), this._destroyTimeout = setTimeout(function() {
        t.eventSourceObject.removeEventListener(t.eventListenerType, t.proxyEventListener, !1), e.document.body.removeChild(t.iframe)
      }, 0)
    }, t.exports = r
  }, function(t, e, n) {
    var r = n(29);
    t.exports = {
      set: function(t, e) {
        var n = {
          lastUsedConnection: t,
          lastUsedSub: e
        };
        r.setItem("auth0.ssodata", JSON.stringify(n))
      },
      get: function() {
        var t = r.getItem("auth0.ssodata");
        return t ? JSON.parse(t) : void 0
      }
    }
  }, function(t, e, n) {
    function r(t) {
      return i && !t || (i = new o), i
    }
    var i, o = n(57);
    t.exports = {
      getItem: function(t) {
        var e = r().getItem(t);
        return e ? JSON.parse(e) : e
      },
      removeItem: function(t) {
        return r().removeItem(t)
      },
      setItem: function(t, e) {
        var n = JSON.stringify(e);
        return r().setItem(t, n)
      },
      reload: function() {
        r(!0)
      }
    }
  }, function(t, e, n) {
    function r(t) {
      s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        domain: {
          type: "string",
          message: "domain option is required"
        },
        clientID: {
          type: "string",
          message: "clientID option is required"
        },
        responseType: {
          optional: !0,
          type: "string",
          message: "responseType is not valid"
        },
        responseMode: {
          optional: !0,
          type: "string",
          message: "responseMode is not valid"
        },
        redirectUri: {
          optional: !0,
          type: "string",
          message: "redirectUri is not valid"
        },
        scope: {
          optional: !0,
          type: "string",
          message: "scope is not valid"
        },
        audience: {
          optional: !0,
          type: "string",
          message: "audience is not valid"
        },
        popupOrigin: {
          optional: !0,
          type: "string",
          message: "popupOrigin is not valid"
        },
        leeway: {
          optional: !0,
          type: "number",
          message: "leeway is not valid"
        },
        plugins: {
          optional: !0,
          type: "array",
          message: "plugins is not valid"
        },
        _disableDeprecationWarnings: {
          optional: !0,
          type: "boolean",
          message: "_disableDeprecationWarnings option is not valid"
        },
        _sendTelemetry: {
          optional: !0,
          type: "boolean",
          message: "_sendTelemetry option is not valid"
        },
        _telemetryInfo: {
          optional: !0,
          type: "object",
          message: "_telemetryInfo option is not valid"
        },
        _timesToRetryFailedRequests: {
          optional: !0,
          type: "number",
          message: "_timesToRetryFailedRequests option is not valid"
        }
      }), t.overrides && s.check(t.overrides, {
        type: "object",
        message: "overrides option is not valid"
      }, {
        __tenant: {
          type: "string",
          message: "__tenant option is required"
        },
        __token_issuer: {
          type: "string",
          message: "__token_issuer option is required"
        }
      }), this.baseOptions = t, this.baseOptions.plugins = new p(this, this.baseOptions.plugins || []), this.baseOptions._sendTelemetry = this.baseOptions._sendTelemetry !== !1 || this.baseOptions._sendTelemetry, this.baseOptions._timesToRetryFailedRequests = t._timesToRetryFailedRequests ? parseInt(t._timesToRetryFailedRequests, 0) : 0, this.baseOptions.tenant = this.baseOptions.overrides && this.baseOptions.overrides.__tenant || this.baseOptions.domain.split(".")[0], this.baseOptions.token_issuer = this.baseOptions.overrides && this.baseOptions.overrides.__token_issuer || "https://" + this.baseOptions.domain + "/", this.transactionManager = new d(this.baseOptions.transaction), this.client = new f(this.baseOptions), this.redirect = new y(this, this.baseOptions), this.popup = new m(this, this.baseOptions), this.crossOriginAuthentication = new v(this, this.baseOptions), this.webMessageHandler = new b(this), this._universalLogin = new w(this, this.baseOptions)
    }

    function i(t, e, n) {
      return {
        accessToken: t.access_token || null,
        idToken: t.id_token || null,
        idTokenPayload: n || null,
        appState: e || null,
        refreshToken: t.refresh_token || null,
        state: t.state || null,
        expiresIn: t.expires_in ? parseInt(t.expires_in, 10) : null,
        tokenType: t.token_type || null,
        scope: t.scope || null
      }
    }
    var o = n(39),
      s = n(4),
      a = n(26),
      u = n(6),
      p = n(52),
      c = n(2),
      h = n(1),
      l = n(28),
      d = n(17),
      f = n(24),
      y = n(63),
      m = n(62),
      g = n(64),
      v = n(16),
      b = n(31),
      w = n(61);
    r.prototype.parseHash = function(t, e) {
      var n, r;
      e || "function" != typeof t ? t = t || {} : (e = t, t = {});
      var i = c.getWindow(),
        o = void 0 === t.hash ? i.location.hash : t.hash;
      if (o = o.replace(/^#?\/?/, ""), n = u.parse(o), n.hasOwnProperty("error")) return r = a.buildResponse(n.error, n.error_description), n.state && (r.state = n.state), e(r);
      if (!n.hasOwnProperty("access_token") && !n.hasOwnProperty("id_token") && !n.hasOwnProperty("refresh_token")) return e(null, null);
      var s = (this.baseOptions.responseType || t.responseType || "").split(" ");
      return s.length > 0 && -1 !== s.indexOf("token") && !n.hasOwnProperty("access_token") ? e(a.buildResponse("invalid_hash", "response_type contains `token`, but the parsed hash does not contain an `access_token` property")) : s.length > 0 && -1 !== s.indexOf("id_token") && !n.hasOwnProperty("id_token") ? e(a.buildResponse("invalid_hash", "response_type contains `id_token`, but the parsed hash does not contain an `id_token` property")) : this.validateAuthenticationResponse(t, n, e)
    }, r.prototype.validateAuthenticationResponse = function(t, e, n) {
      var r = this;
      t.__enableIdPInitiatedLogin = t.__enableIdPInitiatedLogin || t.__enableImpersonation;
      var s = e.state,
        u = this.transactionManager.getStoredTransaction(s),
        p = t.state || u && u.state || null,
        c = p === s,
        h = !s && !p && t.__enableIdPInitiatedLogin;
      if (!h && !c) return n({
        error: "invalid_token",
        errorDescription: "`state` does not match."
      });
      var d = t.nonce || u && u.nonce || null,
        f = t.state || u && u.appState || null,
        y = function(t, r) {
          if (t) return n(t);
          if (u && u.lastUsedConnection) {
            var o;
            r && (o = r.sub), l.set(u.lastUsedConnection, o)
          }
          return n(null, i(e, f, r))
        };
      return e.id_token ? this.validateToken(e.id_token, d, function(t, n) {
        if (!t) return e.access_token && n.at_hash ? (new o).validateAccessToken(e.access_token, "RS256", n.at_hash, function(t) {
          return t ? y(a.invalidToken(t.message)) : y(null, n)
        }) : y(null, n);
        if ("invalid_token" !== t.error) return y(t);
        var i = (new o).decode(e.id_token);
        return "HS256" !== i.header.alg ? y(t) : r.client.userInfo(e.access_token, function(e, n) {
          return e ? y(t) : y(null, n)
        })
      }) : y(null, null)
    }, r.prototype.validateToken = function(t, e, n) {
      var r = new o({
        issuer: this.baseOptions.token_issuer,
        audience: this.baseOptions.clientID,
        leeway: this.baseOptions.leeway || 0,
        __disableExpirationCheck: this.baseOptions.__disableExpirationCheck
      });
      r.verify(t, e, function(t, e) {
        return t ? n(a.invalidToken(t.message)) : void n(null, e)
      })
    }, r.prototype.renewAuth = function(t, e) {
      var n, r = !!t.usePostMessage,
        i = t.postMessageDataType || !1,
        o = t.postMessageOrigin || c.getWindow().origin,
        a = t.timeout,
        u = this,
        p = h.merge(this.baseOptions, ["clientID", "redirectUri", "responseType", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t);
      p.responseType = p.responseType || "token", p.responseMode = p.responseMode || "fragment", p = this.transactionManager.process(p), s.check(p, {
        type: "object",
        message: "options parameter is not valid"
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), p.prompt = "none", p = h.blacklist(p, ["usePostMessage", "tenant", "postMessageDataType", "postMessageOrigin"]), n = g.create({
        authenticationUrl: this.client.buildAuthorizeUrl(p),
        postMessageDataType: i,
        postMessageOrigin: o,
        timeout: a
      }), n.login(r, function(t, n) {
        return "object" == typeof n ? e(t, n) : void u.parseHash({
          hash: n
        }, e)
      })
    }, r.prototype.checkSession = function(t, e) {
      var n = h.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t);
      return "code" === n.responseType ? e({
        error: "error",
        error_description: "responseType can't be `code`"
      }) : (t.nonce || (n = this.transactionManager.process(n)), s.check(n, {
        type: "object",
        message: "options parameter is not valid"
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = h.blacklist(n, ["usePostMessage", "tenant", "postMessageDataType"]), void this.webMessageHandler.run(n, e))
    }, r.prototype.changePassword = function(t, e) {
      return this.client.dbConnection.changePassword(t, e)
    }, r.prototype.passwordlessStart = function(t, e) {
      var n = h.merge(this.baseOptions, ["responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t.authParams);
      return t.authParams = this.transactionManager.process(n), this.client.passwordless.start(t, e)
    }, r.prototype.signup = function(t, e) {
      return this.client.dbConnection.signup(t, e)
    }, r.prototype.authorize = function(t) {
      var e = h.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t);
      s.check(e, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        responseType: {
          type: "string",
          message: "responseType option is required"
        }
      }), e = this.transactionManager.process(e), e.scope = e.scope || "openid profile email", c.redirect(this.client.buildAuthorizeUrl(e))
    }, r.prototype.signupAndAuthorize = function(t, e) {
      var n = this;
      return this.client.dbConnection.signup(h.blacklist(t, ["popupHandler"]), function(r) {
        return r ? e(r) : (t.realm = t.connection, t.username || (t.username = t.email), void n.client.login(t, e))
      })
    }, r.prototype.login = function(t, e) {
      var n = c.getWindow().location.host === this.baseOptions.domain;
      n ? (t.connection = t.realm, delete t.realm, this._universalLogin.login(t, e)) : this.crossOriginAuthentication.login(t, e)
    }, r.prototype.passwordlessLogin = function(t, e) {
      var n = c.getWindow().location.host === this.baseOptions.domain;
      if (n) this.passwordlessVerify(t, e);
      else {
        var r = h.extend({
          credentialType: "http://auth0.com/oauth/grant-type/passwordless/otp",
          realm: t.connection,
          username: t.email || t.phoneNumber,
          otp: t.verificationCode
        }, h.blacklist(t, ["connection", "email", "phoneNumber", "verificationCode"]));
        this.crossOriginAuthentication.login(r, e)
      }
    }, r.prototype.crossOriginAuthenticationCallback = function() {
      this.crossOriginVerification()
    }, r.prototype.crossOriginVerification = function() {
      this.crossOriginAuthentication.callback()
    }, r.prototype.logout = function(t) {
      c.redirect(this.client.buildLogoutUrl(t))
    }, r.prototype.passwordlessVerify = function(t, e) {
      var n = this,
        r = h.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t);
      return s.check(r, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        responseType: {
          type: "string",
          message: "responseType option is required"
        }
      }), r = this.transactionManager.process(r), this.client.passwordless.verify(r, function(t) {
        return t ? e(t) : c.redirect(n.client.passwordless.buildVerifyUrl(r))
      })
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e, n) {
      var r = new o({
        url: t,
        eventListenerType: "message",
        callback: function(t) {
          n(null, t)
        },
        timeout: e.timeout,
        eventValidator: {
          isValid: function(t) {
            return "authorization_response" === t.event.data.type && e.state === t.event.data.response.state
          }
        },
        timeoutCallback: function() {
          n({
            error: "timeout",
            error_description: "Timeout during executing web_message communication"
          })
        }
      });
      r.init()
    }

    function i(t) {
      this.webAuth = t, this.warn = new u(t.baseOptions)
    }
    var o = n(27),
      s = n(1),
      a = n(2),
      u = n(7);
    i.prototype.run = function(t, e) {
      var n = this;
      t.responseMode = "web_message", t.prompt = "none";
      var i = a.getOrigin(),
        o = s.getOriginFromUrl(t.redirectUri);
      return o && i !== o ? e({
        error: "origin_mismatch",
        error_description: "The redirectUri's origin (" + o + ") should match the window's origin (" + i + ")."
      }) : void r(this.webAuth.client.buildAuthorizeUrl(t), t, function(r, i) {
        var o = r;
        if (!r && i.event.data.response.error && (o = s.pick(i.event.data.response, ["error", "error_description"])), o && "consent_required" === o.error && "localhost" === a.getWindow().location.hostname && n.warn.warning("Consent Required. Consent can't be skipped on localhost. Read more here: https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients"), o) return e(o);
        var u = i.event.data.response;
        n.webAuth.validateAuthenticationResponse(t, u, e)
      })
    }, t.exports = i
  }, function(t, e, n) {
    function r(t) {
      return t ? i(t) : void 0
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, r.prototype.once = function(t, e) {
      function n() {
        this.off(t, n), e.apply(this, arguments)
      }
      return n.fn = e, this.on(t, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + t];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + t], this;
      for (var r, i = 0; i < n.length; i++)
        if (r = n[i], r === e || r.fn === e) {
          n.splice(i, 1);
          break
        } return this
    }, r.prototype.emit = function(t) {
      this._callbacks = this._callbacks || {};
      var e = [].slice.call(arguments, 1),
        n = this._callbacks["$" + t];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; i > r; ++r) n[r].apply(this, e)
      }
      return this
    }, r.prototype.listeners = function(t) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, r.prototype.hasListeners = function(t) {
      return !!this.listeners(t).length
    }
  }, function(t, e, n) {
    ! function(r, i) {
      t.exports = e = i(n(12))
    }(this, function(t) {
      return function() {
        function e(t, e, n) {
          for (var r = [], o = 0, s = 0; e > s; s++)
            if (s % 4) {
              var a = n[t.charCodeAt(s - 1)] << s % 4 * 2,
                u = n[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
              r[o >>> 2] |= (a | u) << 24 - o % 4 * 8, o++
            } return i.create(r, o)
        }
        var n = t,
          r = n.lib,
          i = r.WordArray,
          o = n.enc;
        o.Base64 = {
          stringify: function(t) {
            var e = t.words,
              n = t.sigBytes,
              r = this._map;
            t.clamp();
            for (var i = [], o = 0; n > o; o += 3)
              for (var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, u = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, p = s << 16 | a << 8 | u, c = 0; 4 > c && n > o + .75 * c; c++) i.push(r.charAt(p >>> 6 * (3 - c) & 63));
            var h = r.charAt(64);
            if (h)
              for (; i.length % 4;) i.push(h);
            return i.join("")
          },
          parse: function(t) {
            var n = t.length,
              r = this._map,
              i = this._reverseMap;
            if (!i) {
              i = this._reverseMap = [];
              for (var o = 0; o < r.length; o++) i[r.charCodeAt(o)] = o
            }
            var s = r.charAt(64);
            if (s) {
              var a = t.indexOf(s); - 1 !== a && (n = a)
            }
            return e(t, n, i)
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
      }(), t.enc.Base64
    })
  }, function(t, e, n) {
    ! function(r, i) {
      t.exports = e = i(n(12))
    }(this, function(t) {
      return t.enc.Hex
    })
  }, function(t, e) {
    function n() {}
    n.prototype.get = function() {
      return null
    }, n.prototype.has = function() {
      return !1
    }, n.prototype.set = function() {}, t.exports = n
  }, function(t, e) {
    function n(t) {
      this.name = "ConfigurationError", this.message = t || ""
    }

    function r(t) {
      this.name = "TokenValidationError", this.message = t || ""
    }
    n.prototype = Error.prototype, r.prototype = Error.prototype, t.exports = {
      ConfigurationError: n,
      TokenValidationError: r
    }
  }, function(t, e, n) {
    function r(t) {
      var e = s.decodeToHEX(t.n),
        n = s.decodeToHEX(t.e);
      return {
        modulus: e,
        exp: n
      }
    }

    function i(t, e) {
      var n = t.jwksURI || o(t.iss, ".well-known", "jwks.json");
      return a.get(n).end(function(n, i) {
        var o, s, a = null;
        if (n) return e(n);
        for (o = 0; o < i.body.keys.length && null === a; o++) s = i.body.keys[o], s.kid === t.kid && (a = s);
        return e(null, r(a))
      })
    }
    var o = n(3),
      s = n(20),
      a = n(21);
    t.exports = {
      process: r,
      getJWKS: i
    }
  }, function(t, e, n) {
    function r(t, e) {
      if (this.n = null, this.e = 0, !(null != t && null != e && t.length > 0 && e.length > 0)) throw new Error("Invalid key data");
      this.n = new o(t, 16), this.e = parseInt(e, 16)
    }

    function i(t) {
      for (var e in a) {
        var n = a[e],
          r = n.length;
        if (t.substring(0, r) === n) return {
          alg: e,
          hash: t.substring(r)
        }
      }
      return []
    }
    var o = n(40).BigInteger,
      s = n(19),
      a = {
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        ripemd160: "3021300906052b2403020105000414"
      },
      u = {
        sha256: s
      };
    r.prototype.verify = function(t, e) {
      e = e.replace(/[^0-9a-f]|[\s\n]]/gi, "");
      var n = new o(e, 16);
      if (n.bitLength() > this.n.bitLength()) throw new Error("Signature does not match with the key modulus.");
      var r = n.modPowInt(this.e, this.n),
        s = r.toString(16).replace(/^1f+00/, ""),
        a = i(s);
      if (0 === a.length) return !1;
      if (!u.hasOwnProperty(a.alg)) throw new Error("Hashing algorithm is not supported.");
      var p = u[a.alg](t).toString();
      return a.hash === p
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      var e = t || {};
      if (this.jwksCache = e.jwksCache || new h, this.expectedAlg = e.expectedAlg || "RS256", this.issuer = e.issuer, this.audience = e.audience, this.leeway = e.leeway || 0, this.__disableExpirationCheck = e.__disableExpirationCheck || !1, this.jwksURI = e.jwksURI, this.leeway < 0 || this.leeway > 60) throw new c.ConfigurationError("The leeway should be positive and lower than a minute.");
      if (-1 === l.indexOf(this.expectedAlg)) throw new c.ConfigurationError("Algorithm " + this.expectedAlg + " is not supported. (Expected algs: [" + l.join(",") + "])")
    }
    var i = n(19),
      o = n(33),
      s = n(34),
      a = n(38),
      u = n(20),
      p = n(37),
      c = n(36),
      h = n(35),
      l = ["RS256"];
    r.prototype.verify = function(t, e, n) {
      var r = this.decode(t);
      if (r instanceof Error) return n(r, !1);
      var i = r.encoded.header + "." + r.encoded.payload,
        o = u.decodeToHEX(r.encoded.signature),
        s = r.header.alg,
        a = r.header.kid,
        p = r.payload.aud,
        h = r.payload.iss,
        d = r.payload.exp,
        f = r.payload.nbf,
        y = r.payload.nonce || null;
      if (this.issuer !== h) return n(new c.TokenValidationError("Issuer " + h + " is not valid."), !1);
      if (this.audience !== p) return n(new c.TokenValidationError("Audience " + p + " is not valid."), !1);
      if (this.expectedAlg !== s) return n(new c.TokenValidationError("Algorithm " + s + " is not supported. (Expected algs: [" + l.join(",") + "])"), !1);
      if (y !== e) return n(new c.TokenValidationError("Nonce does not match."), !1);
      var m = this.verifyExpAndNbf(d, f);
      return m ? n(m, !1) : this.getRsaVerifier(h, a, function(t, e) {
        return t ? n(t) : e.verify(i, o) ? n(null, r.payload) : n(new c.TokenValidationError("Invalid signature."))
      })
    }, r.prototype.verifyExpAndNbf = function(t, e) {
      var n = new Date,
        r = new Date(0),
        i = new Date(0);
      return this.__disableExpirationCheck ? null : (r.setUTCSeconds(t + this.leeway), n > r ? new c.TokenValidationError("Expired token.") : "undefined" == typeof e ? null : (i.setUTCSeconds(e - this.leeway), i > n ? new c.TokenValidationError("The token is not valid until later in the future. Please check your computed clock.") : null))
    }, r.prototype.verifyExpAndIat = function(t, e) {
      var n = new Date,
        r = new Date(0),
        i = new Date(0);
      return this.__disableExpirationCheck ? null : (r.setUTCSeconds(t + this.leeway), n > r ? new c.TokenValidationError("Expired token.") : (i.setUTCSeconds(e - this.leeway), i > n ? new c.TokenValidationError("The token was issued in the future. Please check your computed clock.") : null))
    }, r.prototype.getRsaVerifier = function(t, e, n) {
      var r = this,
        i = t + e;
      if (this.jwksCache.has(i)) {
        var o = this.jwksCache.get(i);
        n(null, new a(o.modulus, o.exp))
      } else p.getJWKS({
        jwksURI: this.jwksURI,
        iss: t,
        kid: e
      }, function(t, e) {
        return t ? n(t) : (r.jwksCache.set(i, e), n(null, new a(e.modulus, e.exp)))
      })
    }, r.prototype.decode = function(t) {
      var e, n, r = t.split(".");
      if (3 !== r.length) return new c.TokenValidationError("Cannot decode a malformed JWT");
      try {
        e = JSON.parse(u.decodeToString(r[0])), n = JSON.parse(u.decodeToString(r[1]))
      } catch (t) {
        return new c.TokenValidationError("Token header or payload is not valid JSON")
      }
      return {
        header: e,
        payload: n,
        encoded: {
          header: r[0],
          payload: r[1],
          signature: r[2]
        }
      }
    }, r.prototype.validateAccessToken = function(t, e, n, r) {
      if (this.expectedAlg !== e) return r(new c.TokenValidationError("Algorithm " + e + " is not supported. (Expected alg: " + this.expectedAlg + ")"));
      var a = i(t),
        p = s.stringify(a),
        h = p.substring(0, p.length / 2),
        l = s.parse(h),
        d = o.stringify(l),
        f = u.base64ToBase64Url(d);
      return r(f !== n ? new c.TokenValidationError("Invalid access_token") : null);
    }, t.exports = r
  }, function(t, e, n) {
    (function() {
      function n(t, e, n) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
      }

      function r() {
        return new n(null)
      }

      function i(t, e, n, r, i, o) {
        for (; --o >= 0;) {
          var s = e * this[t++] + n[r] + i;
          i = Math.floor(s / 67108864), n[r++] = 67108863 & s
        }
        return i
      }

      function o(t, e, n, r, i, o) {
        for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
          var u = 32767 & this[t],
            p = this[t++] >> 15,
            c = a * u + p * s;
          u = s * u + ((32767 & c) << 15) + n[r] + (1073741823 & i), i = (u >>> 30) + (c >>> 15) + a * p + (i >>> 30), n[r++] = 1073741823 & u
        }
        return i
      }

      function s(t, e, n, r, i, o) {
        for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
          var u = 16383 & this[t],
            p = this[t++] >> 14,
            c = a * u + p * s;
          u = s * u + ((16383 & c) << 14) + n[r] + i, i = (u >> 28) + (c >> 14) + a * p, n[r++] = 268435455 & u
        }
        return i
      }

      function a(t) {
        return me.charAt(t)
      }

      function u(t, e) {
        var n = ge[t.charCodeAt(e)];
        return null == n ? -1 : n
      }

      function p(t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        t.t = this.t, t.s = this.s
      }

      function c(t) {
        this.t = 1, this.s = 0 > t ? -1 : 0, t > 0 ? this[0] = t : -1 > t ? this[0] = t + this.DV : this.t = 0
      }

      function h(t) {
        var e = r();
        return e.fromInt(t), e
      }

      function l(t, e) {
        var r;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void this.fromRadix(t, e);
          r = 2
        }
        this.t = 0, this.s = 0;
        for (var i = t.length, o = !1, s = 0; --i >= 0;) {
          var a = 8 == r ? 255 & t[i] : u(t, i);
          0 > a ? "-" == t.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, s += r, s >= this.DB && (s -= this.DB))
        }
        8 == r && 0 != (128 & t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && n.ZERO.subTo(this, this)
      }

      function d() {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
      }

      function f(t) {
        if (this.s < 0) return "-" + this.negate().toString(t);
        var e;
        if (16 == t) e = 4;
        else if (8 == t) e = 3;
        else if (2 == t) e = 1;
        else if (32 == t) e = 5;
        else {
          if (4 != t) return this.toRadix(t);
          e = 2
        }
        var n, r = (1 << e) - 1,
          i = !1,
          o = "",
          s = this.t,
          u = this.DB - s * this.DB % e;
        if (s-- > 0)
          for (u < this.DB && (n = this[s] >> u) > 0 && (i = !0, o = a(n)); s >= 0;) e > u ? (n = (this[s] & (1 << u) - 1) << e - u, n |= this[--s] >> (u += this.DB - e)) : (n = this[s] >> (u -= e) & r, 0 >= u && (u += this.DB, --s)), n > 0 && (i = !0), i && (o += a(n));
        return i ? o : "0"
      }

      function y() {
        var t = r();
        return n.ZERO.subTo(this, t), t
      }

      function m() {
        return this.s < 0 ? this.negate() : this
      }

      function g(t) {
        var e = this.s - t.s;
        if (0 != e) return e;
        var n = this.t;
        if (e = n - t.t, 0 != e) return this.s < 0 ? -e : e;
        for (; --n >= 0;)
          if (0 != (e = this[n] - t[n])) return e;
        return 0
      }

      function v(t) {
        var e, n = 1;
        return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n
      }

      function b() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + v(this[this.t - 1] ^ this.s & this.DM)
      }

      function w(t, e) {
        var n;
        for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n];
        for (n = t - 1; n >= 0; --n) e[n] = 0;
        e.t = this.t + t, e.s = this.s
      }

      function _(t, e) {
        for (var n = t; n < this.t; ++n) e[n - t] = this[n];
        e.t = Math.max(this.t - t, 0), e.s = this.s
      }

      function T(t, e) {
        var n, r = t % this.DB,
          i = this.DB - r,
          o = (1 << i) - 1,
          s = Math.floor(t / this.DB),
          a = this.s << r & this.DM;
        for (n = this.t - 1; n >= 0; --n) e[n + s + 1] = this[n] >> i | a, a = (this[n] & o) << r;
        for (n = s - 1; n >= 0; --n) e[n] = 0;
        e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp()
      }

      function O(t, e) {
        e.s = this.s;
        var n = Math.floor(t / this.DB);
        if (n >= this.t) return void(e.t = 0);
        var r = t % this.DB,
          i = this.DB - r,
          o = (1 << r) - 1;
        e[0] = this[n] >> r;
        for (var s = n + 1; s < this.t; ++s) e[s - n - 1] |= (this[s] & o) << i, e[s - n] = this[s] >> r;
        r > 0 && (e[this.t - n - 1] |= (this.s & o) << i), e.t = this.t - n, e.clamp()
      }

      function k(t, e) {
        for (var n = 0, r = 0, i = Math.min(t.t, this.t); i > n;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB;
        if (t.t < this.t) {
          for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
          r += this.s
        } else {
          for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
          r -= t.s
        }
        e.s = 0 > r ? -1 : 0, -1 > r ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp()
      }

      function x(t, e) {
        var r = this.abs(),
          i = t.abs(),
          o = r.t;
        for (e.t = o + i.t; --o >= 0;) e[o] = 0;
        for (o = 0; o < i.t; ++o) e[o + r.t] = r.am(0, i[o], e, o, 0, r.t);
        e.s = 0, e.clamp(), this.s != t.s && n.ZERO.subTo(e, e)
      }

      function C(t) {
        for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0;
        for (n = 0; n < e.t - 1; ++n) {
          var r = e.am(n, e[n], t, 2 * n, 0, 1);
          (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp()
      }

      function A(t, e, i) {
        var o = t.abs();
        if (!(o.t <= 0)) {
          var s = this.abs();
          if (s.t < o.t) return null != e && e.fromInt(0), void(null != i && this.copyTo(i));
          null == i && (i = r());
          var a = r(),
            u = this.s,
            p = t.s,
            c = this.DB - v(o[o.t - 1]);
          c > 0 ? (o.lShiftTo(c, a), s.lShiftTo(c, i)) : (o.copyTo(a), s.copyTo(i));
          var h = a.t,
            l = a[h - 1];
          if (0 != l) {
            var d = l * (1 << this.F1) + (h > 1 ? a[h - 2] >> this.F2 : 0),
              f = this.FV / d,
              y = (1 << this.F1) / d,
              m = 1 << this.F2,
              g = i.t,
              b = g - h,
              w = null == e ? r() : e;
            for (a.dlShiftTo(b, w), i.compareTo(w) >= 0 && (i[i.t++] = 1, i.subTo(w, i)), n.ONE.dlShiftTo(h, w), w.subTo(a, a); a.t < h;) a[a.t++] = 0;
            for (; --b >= 0;) {
              var _ = i[--g] == l ? this.DM : Math.floor(i[g] * f + (i[g - 1] + m) * y);
              if ((i[g] += a.am(0, _, i, b, 0, h)) < _)
                for (a.dlShiftTo(b, w), i.subTo(w, i); i[g] < --_;) i.subTo(w, i)
            }
            null != e && (i.drShiftTo(h, e), u != p && n.ZERO.subTo(e, e)), i.t = h, i.clamp(), c > 0 && i.rShiftTo(c, i), 0 > u && n.ZERO.subTo(i, i)
          }
        }
      }

      function D(t) {
        var e = r();
        return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(n.ZERO) > 0 && t.subTo(e, e), e
      }

      function S(t) {
        this.m = t
      }

      function E(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
      }

      function q(t) {
        return t
      }

      function j(t) {
        t.divRemTo(this.m, null, t)
      }

      function I(t, e, n) {
        t.multiplyTo(e, n), this.reduce(n)
      }

      function R(t, e) {
        t.squareTo(e), this.reduce(e)
      }

      function U() {
        if (this.t < 1) return 0;
        var t = this[0];
        if (0 == (1 & t)) return 0;
        var e = 3 & t;
        return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e
      }

      function M(t) {
        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
      }

      function B(t) {
        var e = r();
        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(n.ZERO) > 0 && this.m.subTo(e, e), e
      }

      function P(t) {
        var e = r();
        return t.copyTo(e), this.reduce(e), e
      }

      function L(t) {
        for (; t.t <= this.mt2;) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var n = 32767 & t[e],
            r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
          for (n = e + this.m.t, t[n] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++
        }
        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
      }

      function H(t, e) {
        t.squareTo(e), this.reduce(e)
      }

      function N(t, e, n) {
        t.multiplyTo(e, n), this.reduce(n)
      }

      function V() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
      }

      function W(t, e) {
        if (t > 4294967295 || 1 > t) return n.ONE;
        var i = r(),
          o = r(),
          s = e.convert(this),
          a = v(t) - 1;
        for (s.copyTo(i); --a >= 0;)
          if (e.sqrTo(i, o), (t & 1 << a) > 0) e.mulTo(o, s, i);
          else {
            var u = i;
            i = o, o = u
          } return e.revert(i)
      }

      function z(t, e) {
        var n;
        return n = 256 > t || e.isEven() ? new S(e) : new M(e), this.exp(t, n)
      }

      function F() {
        var t = r();
        return this.copyTo(t), t
      }

      function J() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
      }

      function X() {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
      }

      function $() {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
      }

      function Z(t) {
        return Math.floor(Math.LN2 * this.DB / Math.log(t))
      }

      function K() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
      }

      function G(t) {
        if (null == t && (t = 10), 0 == this.signum() || 2 > t || t > 36) return "0";
        var e = this.chunkSize(t),
          n = Math.pow(t, e),
          i = h(n),
          o = r(),
          s = r(),
          a = "";
        for (this.divRemTo(i, o, s); o.signum() > 0;) a = (n + s.intValue()).toString(t).substr(1) + a, o.divRemTo(i, o, s);
        return s.intValue().toString(t) + a
      }

      function Q(t, e) {
        this.fromInt(0), null == e && (e = 10);
        for (var r = this.chunkSize(e), i = Math.pow(e, r), o = !1, s = 0, a = 0, p = 0; p < t.length; ++p) {
          var c = u(t, p);
          0 > c ? "-" == t.charAt(p) && 0 == this.signum() && (o = !0) : (a = e * a + c, ++s >= r && (this.dMultiply(i), this.dAddOffset(a, 0), s = 0, a = 0))
        }
        s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)), o && n.ZERO.subTo(this, this)
      }

      function Y(t, e, r) {
        if ("number" == typeof e)
          if (2 > t) this.fromInt(1);
          else
            for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(n.ONE.shiftLeft(t - 1), at, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(n.ONE.shiftLeft(t - 1), this);
        else {
          var i = new Array,
            o = 7 & t;
          i.length = (t >> 3) + 1, e.nextBytes(i), o > 0 ? i[0] &= (1 << o) - 1 : i[0] = 0, this.fromString(i, 256)
        }
      }

      function tt() {
        var t = this.t,
          e = new Array;
        e[0] = this.s;
        var n, r = this.DB - t * this.DB % 8,
          i = 0;
        if (t-- > 0)
          for (r < this.DB && (n = this[t] >> r) != (this.s & this.DM) >> r && (e[i++] = n | this.s << this.DB - r); t >= 0;) 8 > r ? (n = (this[t] & (1 << r) - 1) << 8 - r, n |= this[--t] >> (r += this.DB - 8)) : (n = this[t] >> (r -= 8) & 255, 0 >= r && (r += this.DB, --t)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (e[i++] = n);
        return e
      }

      function et(t) {
        return 0 == this.compareTo(t)
      }

      function nt(t) {
        return this.compareTo(t) < 0 ? this : t
      }

      function rt(t) {
        return this.compareTo(t) > 0 ? this : t
      }

      function it(t, e, n) {
        var r, i, o = Math.min(t.t, this.t);
        for (r = 0; o > r; ++r) n[r] = e(this[r], t[r]);
        if (t.t < this.t) {
          for (i = t.s & this.DM, r = o; r < this.t; ++r) n[r] = e(this[r], i);
          n.t = this.t
        } else {
          for (i = this.s & this.DM, r = o; r < t.t; ++r) n[r] = e(i, t[r]);
          n.t = t.t
        }
        n.s = e(this.s, t.s), n.clamp()
      }

      function ot(t, e) {
        return t & e
      }

      function st(t) {
        var e = r();
        return this.bitwiseTo(t, ot, e), e
      }

      function at(t, e) {
        return t | e
      }

      function ut(t) {
        var e = r();
        return this.bitwiseTo(t, at, e), e
      }

      function pt(t, e) {
        return t ^ e
      }

      function ct(t) {
        var e = r();
        return this.bitwiseTo(t, pt, e), e
      }

      function ht(t, e) {
        return t & ~e
      }

      function lt(t) {
        var e = r();
        return this.bitwiseTo(t, ht, e), e
      }

      function dt() {
        for (var t = r(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
        return t.t = this.t, t.s = ~this.s, t
      }

      function ft(t) {
        var e = r();
        return 0 > t ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
      }

      function yt(t) {
        var e = r();
        return 0 > t ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
      }

      function mt(t) {
        if (0 == t) return -1;
        var e = 0;
        return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
      }

      function gt() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + mt(this[t]);
        return this.s < 0 ? this.t * this.DB : -1
      }

      function vt(t) {
        for (var e = 0; 0 != t;) t &= t - 1, ++e;
        return e
      }

      function bt() {
        for (var t = 0, e = this.s & this.DM, n = 0; n < this.t; ++n) t += vt(this[n] ^ e);
        return t
      }

      function wt(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
      }

      function _t(t, e) {
        var r = n.ONE.shiftLeft(t);
        return this.bitwiseTo(r, e, r), r
      }

      function Tt(t) {
        return this.changeBit(t, at)
      }

      function Ot(t) {
        return this.changeBit(t, ht)
      }

      function kt(t) {
        return this.changeBit(t, pt)
      }

      function xt(t, e) {
        for (var n = 0, r = 0, i = Math.min(t.t, this.t); i > n;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB;
        if (t.t < this.t) {
          for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
          r += this.s
        } else {
          for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
          r += t.s
        }
        e.s = 0 > r ? -1 : 0, r > 0 ? e[n++] = r : -1 > r && (e[n++] = this.DV + r), e.t = n, e.clamp()
      }

      function Ct(t) {
        var e = r();
        return this.addTo(t, e), e
      }

      function At(t) {
        var e = r();
        return this.subTo(t, e), e
      }

      function Dt(t) {
        var e = r();
        return this.multiplyTo(t, e), e
      }

      function St() {
        var t = r();
        return this.squareTo(t), t
      }

      function Et(t) {
        var e = r();
        return this.divRemTo(t, e, null), e
      }

      function qt(t) {
        var e = r();
        return this.divRemTo(t, null, e), e
      }

      function jt(t) {
        var e = r(),
          n = r();
        return this.divRemTo(t, e, n), new Array(e, n)
      }

      function It(t) {
        this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
      }

      function Rt(t, e) {
        if (0 != t) {
          for (; this.t <= e;) this[this.t++] = 0;
          for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
        }
      }

      function Ut() {}

      function Mt(t) {
        return t
      }

      function Bt(t, e, n) {
        t.multiplyTo(e, n)
      }

      function Pt(t, e) {
        t.squareTo(e)
      }

      function Lt(t) {
        return this.exp(t, new Ut)
      }

      function Ht(t, e, n) {
        var r = Math.min(this.t + t.t, e);
        for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
        var i;
        for (i = n.t - this.t; i > r; ++r) n[r + this.t] = this.am(0, t[r], n, r, 0, this.t);
        for (i = Math.min(t.t, e); i > r; ++r) this.am(0, t[r], n, r, 0, e - r);
        n.clamp()
      }

      function Nt(t, e, n) {
        --e;
        var r = n.t = this.t + t.t - e;
        for (n.s = 0; --r >= 0;) n[r] = 0;
        for (r = Math.max(e - this.t, 0); r < t.t; ++r) n[this.t + r - e] = this.am(e - r, t[r], n, 0, 0, this.t + r - e);
        n.clamp(), n.drShiftTo(1, n)
      }

      function Vt(t) {
        this.r2 = r(), this.q3 = r(), n.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
      }

      function Wt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = r();
        return t.copyTo(e), this.reduce(e), e
      }

      function zt(t) {
        return t
      }

      function Ft(t) {
        for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
        for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
      }

      function Jt(t, e) {
        t.squareTo(e), this.reduce(e)
      }

      function Xt(t, e, n) {
        t.multiplyTo(e, n), this.reduce(n)
      }

      function $t(t, e) {
        var n, i, o = t.bitLength(),
          s = h(1);
        if (0 >= o) return s;
        n = 18 > o ? 1 : 48 > o ? 3 : 144 > o ? 4 : 768 > o ? 5 : 6, i = 8 > o ? new S(e) : e.isEven() ? new Vt(e) : new M(e);
        var a = new Array,
          u = 3,
          p = n - 1,
          c = (1 << n) - 1;
        if (a[1] = i.convert(this), n > 1) {
          var l = r();
          for (i.sqrTo(a[1], l); c >= u;) a[u] = r(), i.mulTo(l, a[u - 2], a[u]), u += 2
        }
        var d, f, y = t.t - 1,
          m = !0,
          g = r();
        for (o = v(t[y]) - 1; y >= 0;) {
          for (o >= p ? d = t[y] >> o - p & c : (d = (t[y] & (1 << o + 1) - 1) << p - o, y > 0 && (d |= t[y - 1] >> this.DB + o - p)), u = n; 0 == (1 & d);) d >>= 1, --u;
          if ((o -= u) < 0 && (o += this.DB, --y), m) a[d].copyTo(s), m = !1;
          else {
            for (; u > 1;) i.sqrTo(s, g), i.sqrTo(g, s), u -= 2;
            u > 0 ? i.sqrTo(s, g) : (f = s, s = g, g = f), i.mulTo(g, a[d], s)
          }
          for (; y >= 0 && 0 == (t[y] & 1 << o);) i.sqrTo(s, g), f = s, s = g, g = f, --o < 0 && (o = this.DB - 1, --y)
        }
        return i.revert(s)
      }

      function Zt(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          n = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(n) < 0) {
          var r = e;
          e = n, n = r
        }
        var i = e.getLowestSetBit(),
          o = n.getLowestSetBit();
        if (0 > o) return e;
        for (o > i && (o = i), o > 0 && (e.rShiftTo(o, e), n.rShiftTo(o, n)); e.signum() > 0;)(i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), e.compareTo(n) >= 0 ? (e.subTo(n, e), e.rShiftTo(1, e)) : (n.subTo(e, n), n.rShiftTo(1, n));
        return o > 0 && n.lShiftTo(o, n), n
      }

      function Kt(t) {
        if (0 >= t) return 0;
        var e = this.DV % t,
          n = this.s < 0 ? t - 1 : 0;
        if (this.t > 0)
          if (0 == e) n = this[0] % t;
          else
            for (var r = this.t - 1; r >= 0; --r) n = (e * n + this[r]) % t;
        return n
      }

      function Gt(t) {
        var e = t.isEven();
        if (this.isEven() && e || 0 == t.signum()) return n.ZERO;
        for (var r = t.clone(), i = this.clone(), o = h(1), s = h(0), a = h(0), u = h(1); 0 != r.signum();) {
          for (; r.isEven();) r.rShiftTo(1, r), e ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
          for (; i.isEven();) i.rShiftTo(1, i), e ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
          r.compareTo(i) >= 0 ? (r.subTo(i, r), e && o.subTo(a, o), s.subTo(u, s)) : (i.subTo(r, i), e && a.subTo(o, a), u.subTo(s, u))
        }
        return 0 != i.compareTo(n.ONE) ? n.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
      }

      function Qt(t) {
        var e, n = this.abs();
        if (1 == n.t && n[0] <= ve[ve.length - 1]) {
          for (e = 0; e < ve.length; ++e)
            if (n[0] == ve[e]) return !0;
          return !1
        }
        if (n.isEven()) return !1;
        for (e = 1; e < ve.length;) {
          for (var r = ve[e], i = e + 1; i < ve.length && be > r;) r *= ve[i++];
          for (r = n.modInt(r); i > e;)
            if (r % ve[e++] == 0) return !1
        }
        return n.millerRabin(t)
      }

      function Yt(t) {
        var e = this.subtract(n.ONE),
          i = e.getLowestSetBit();
        if (0 >= i) return !1;
        var o = e.shiftRight(i);
        t = t + 1 >> 1, t > ve.length && (t = ve.length);
        for (var s = r(), a = 0; t > a; ++a) {
          s.fromInt(ve[Math.floor(Math.random() * ve.length)]);
          var u = s.modPow(o, this);
          if (0 != u.compareTo(n.ONE) && 0 != u.compareTo(e)) {
            for (var p = 1; p++ < i && 0 != u.compareTo(e);)
              if (u = u.modPowInt(2, this), 0 == u.compareTo(n.ONE)) return !1;
            if (0 != u.compareTo(e)) return !1
          }
        }
        return !0
      }

      function te(t) {
        _e[Te++] ^= 255 & t, _e[Te++] ^= t >> 8 & 255, _e[Te++] ^= t >> 16 & 255, _e[Te++] ^= t >> 24 & 255, Te >= Ce && (Te -= Ce)
      }

      function ee() {
        te((new Date).getTime())
      }

      function ne() {
        if (null == we) {
          for (ee(), we = ue(), we.init(_e), Te = 0; Te < _e.length; ++Te) _e[Te] = 0;
          Te = 0
        }
        return we.next()
      }

      function re(t) {
        var e;
        for (e = 0; e < t.length; ++e) t[e] = ne()
      }

      function ie() {}

      function oe() {
        this.i = 0, this.j = 0, this.S = new Array
      }

      function se(t) {
        var e, n, r;
        for (e = 0; 256 > e; ++e) this.S[e] = e;
        for (n = 0, e = 0; 256 > e; ++e) n = n + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[n], this.S[n] = r;
        this.i = 0, this.j = 0
      }

      function ae() {
        var t;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
      }

      function ue() {
        return new oe
      }
      var pe, ce = 0xdeadbeefcafe,
        he = 15715070 == (16777215 & ce),
        le = "undefined" != typeof navigator;
      le && he && "Microsoft Internet Explorer" == navigator.appName ? (n.prototype.am = o, pe = 30) : le && he && "Netscape" != navigator.appName ? (n.prototype.am = i, pe = 26) : (n.prototype.am = s, pe = 28), n.prototype.DB = pe, n.prototype.DM = (1 << pe) - 1, n.prototype.DV = 1 << pe;
      var de = 52;
      n.prototype.FV = Math.pow(2, de), n.prototype.F1 = de - pe, n.prototype.F2 = 2 * pe - de;
      var fe, ye, me = "0123456789abcdefghijklmnopqrstuvwxyz",
        ge = new Array;
      for (fe = "0".charCodeAt(0), ye = 0; 9 >= ye; ++ye) ge[fe++] = ye;
      for (fe = "a".charCodeAt(0), ye = 10; 36 > ye; ++ye) ge[fe++] = ye;
      for (fe = "A".charCodeAt(0), ye = 10; 36 > ye; ++ye) ge[fe++] = ye;
      S.prototype.convert = E, S.prototype.revert = q, S.prototype.reduce = j, S.prototype.mulTo = I, S.prototype.sqrTo = R, M.prototype.convert = B, M.prototype.revert = P, M.prototype.reduce = L, M.prototype.mulTo = N, M.prototype.sqrTo = H, n.prototype.copyTo = p, n.prototype.fromInt = c, n.prototype.fromString = l, n.prototype.clamp = d, n.prototype.dlShiftTo = w, n.prototype.drShiftTo = _, n.prototype.lShiftTo = T, n.prototype.rShiftTo = O, n.prototype.subTo = k, n.prototype.multiplyTo = x, n.prototype.squareTo = C, n.prototype.divRemTo = A, n.prototype.invDigit = U, n.prototype.isEven = V, n.prototype.exp = W, n.prototype.toString = f, n.prototype.negate = y, n.prototype.abs = m, n.prototype.compareTo = g, n.prototype.bitLength = b, n.prototype.mod = D, n.prototype.modPowInt = z, n.ZERO = h(0), n.ONE = h(1), Ut.prototype.convert = Mt, Ut.prototype.revert = Mt, Ut.prototype.mulTo = Bt, Ut.prototype.sqrTo = Pt, Vt.prototype.convert = Wt, Vt.prototype.revert = zt, Vt.prototype.reduce = Ft, Vt.prototype.mulTo = Xt, Vt.prototype.sqrTo = Jt;
      var ve = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        be = (1 << 26) / ve[ve.length - 1];
      n.prototype.chunkSize = Z, n.prototype.toRadix = G, n.prototype.fromRadix = Q, n.prototype.fromNumber = Y, n.prototype.bitwiseTo = it, n.prototype.changeBit = _t, n.prototype.addTo = xt, n.prototype.dMultiply = It, n.prototype.dAddOffset = Rt, n.prototype.multiplyLowerTo = Ht, n.prototype.multiplyUpperTo = Nt, n.prototype.modInt = Kt, n.prototype.millerRabin = Yt, n.prototype.clone = F, n.prototype.intValue = J, n.prototype.byteValue = X, n.prototype.shortValue = $, n.prototype.signum = K, n.prototype.toByteArray = tt, n.prototype.equals = et, n.prototype.min = nt, n.prototype.max = rt, n.prototype.and = st, n.prototype.or = ut, n.prototype.xor = ct, n.prototype.andNot = lt, n.prototype.not = dt, n.prototype.shiftLeft = ft, n.prototype.shiftRight = yt, n.prototype.getLowestSetBit = gt, n.prototype.bitCount = bt, n.prototype.testBit = wt, n.prototype.setBit = Tt, n.prototype.clearBit = Ot, n.prototype.flipBit = kt, n.prototype.add = Ct, n.prototype.subtract = At, n.prototype.multiply = Dt, n.prototype.divide = Et, n.prototype.remainder = qt, n.prototype.divideAndRemainder = jt, n.prototype.modPow = $t, n.prototype.modInverse = Gt, n.prototype.pow = Lt, n.prototype.gcd = Zt, n.prototype.isProbablePrime = Qt, n.prototype.square = St, n.prototype.Barrett = Vt;
      var we, _e, Te;
      if (null == _e) {
        _e = new Array, Te = 0;
        var Oe;
        if ("undefined" != typeof window && window.crypto)
          if (window.crypto.getRandomValues) {
            var ke = new Uint8Array(32);
            for (window.crypto.getRandomValues(ke), Oe = 0; 32 > Oe; ++Oe) _e[Te++] = ke[Oe]
          } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
          var xe = window.crypto.random(32);
          for (Oe = 0; Oe < xe.length; ++Oe) _e[Te++] = 255 & xe.charCodeAt(Oe)
        }
        for (; Ce > Te;) Oe = Math.floor(65536 * Math.random()), _e[Te++] = Oe >>> 8, _e[Te++] = 255 & Oe;
        Te = 0, ee()
      }
      ie.prototype.nextBytes = re, oe.prototype.init = se, oe.prototype.next = ae;
      var Ce = 256;
      n.SecureRandom = ie, n.BigInteger = n, e = t.exports = n
    }).call(this)
  }, function(t, e) {
    function n() {
      this._defaults = []
    } ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(t) {
      n.prototype[t] = function() {
        return this._defaults.push({
          fn: t,
          arguments: arguments
        }), this
      }
    }), n.prototype._setDefaults = function(t) {
      this._defaults.forEach(function(e) {
        t[e.fn].apply(t, e.arguments)
      })
    }, t.exports = n
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      return t ? i(t) : void 0
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    var o = n(22);
    t.exports = r, r.prototype.clearTimeout = function() {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function(t) {
      return this._parser = t, this
    }, r.prototype.responseType = function(t) {
      return this._responseType = t, this
    }, r.prototype.serialize = function(t) {
      return this._serializer = t, this
    }, r.prototype.timeout = function(t) {
      if (!t || "object" != typeof t) return this._timeout = t, this._responseTimeout = 0, this;
      for (var e in t) switch (e) {
        case "deadline":
          this._timeout = t.deadline;
          break;
        case "response":
          this._responseTimeout = t.response;
          break;
        default:
          console.warn("Unknown timeout option", e)
      }
      return this
    }, r.prototype.retry = function(t, e) {
      return 0 !== arguments.length && t !== !0 || (t = 1), 0 >= t && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
    };
    var s = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    r.prototype._shouldRetry = function(t, e) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
      if (this._retryCallback) try {
        var n = this._retryCallback(t, e);
        if (n === !0) return !0;
        if (n === !1) return !1
      } catch (t) {
        console.error(t)
      }
      if (e && e.status && e.status >= 500 && 501 != e.status) return !0;
      if (t) {
        if (t.code && ~s.indexOf(t.code)) return !0;
        if (t.timeout && "ECONNABORTED" == t.code) return !0;
        if (t.crossDomain) return !0
      }
      return !1
    }, r.prototype._retry = function() {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function(t, e) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function(t, e) {
          n.end(function(n, r) {
            n ? e(n) : t(r)
          })
        })
      }
      return this._fullfilledPromise.then(t, e)
    }, r.prototype["catch"] = function(t) {
      return this.then(void 0, t)
    }, r.prototype.use = function(t) {
      return t(this), this
    }, r.prototype.ok = function(t) {
      if ("function" != typeof t) throw Error("Callback required");
      return this._okCallback = t, this
    }, r.prototype._isResponseOK = function(t) {
      return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, r.prototype.get = function(t) {
      return this._header[t.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function(t, e) {
      if (o(t)) {
        for (var n in t) this.set(n, t[n]);
        return this
      }
      return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, r.prototype.unset = function(t) {
      return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, r.prototype.field = function(t, e) {
      if (null === t || void 0 === t) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(t)) {
        for (var n in t) this.field(n, t[n]);
        return this
      }
      if (Array.isArray(e)) {
        for (var r in e) this.field(t, e[r]);
        return this
      }
      if (null === e || void 0 === e) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof e && (e = "" + e), this._getFormData().append(t, e), this
    }, r.prototype.abort = function() {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype._auth = function(t, e, n, r) {
      switch (n.type) {
        case "basic":
          this.set("Authorization", "Basic " + r(t + ":" + e));
          break;
        case "auto":
          this.username = t, this.password = e;
          break;
        case "bearer":
          this.set("Authorization", "Bearer " + t)
      }
      return this
    }, r.prototype.withCredentials = function(t) {
      return void 0 == t && (t = !0), this._withCredentials = t, this
    }, r.prototype.redirects = function(t) {
      return this._maxRedirects = t, this
    }, r.prototype.maxResponseSize = function(t) {
      if ("number" != typeof t) throw TypeError("Invalid argument");
      return this._maxResponseSize = t, this
    }, r.prototype.toJSON = function() {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, r.prototype.send = function(t) {
      var e = o(t),
        n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
      else if (t && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (e && o(this._data))
        for (var r in t) this._data[r] = t[r];
      else "string" == typeof t ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + t : t : this._data = (this._data || "") + t) : this._data = t;
      return !e || this._isHost(t) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function(t) {
      return this._sort = "undefined" == typeof t || t, this
    }, r.prototype._finalizeQueryString = function() {
      var t = this._query.join("&");
      if (t && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + t), this._query.length = 0, this._sort) {
        var e = this.url.indexOf("?");
        if (e >= 0) {
          var n = this.url.substring(e + 1).split("&");
          "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, e) + "?" + n.join("&")
        }
      }
    }, r.prototype._appendQueryString = function() {
      console.trace("Unsupported")
    }, r.prototype._timeoutError = function(t, e, n) {
      if (!this._aborted) {
        var r = new Error(t + e + "ms exceeded");
        r.timeout = e, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function() {
      var t = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function() {
        t._timeoutError("Timeout of ", t._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
        t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function(t, e, n) {
    "use strict";

    function r(t) {
      return t ? i(t) : void 0
    }

    function i(t) {
      for (var e in r.prototype) t[e] = r.prototype[e];
      return t
    }
    var o = n(44);
    t.exports = r, r.prototype.get = function(t) {
      return this.header[t.toLowerCase()]
    }, r.prototype._setHeaderProperties = function(t) {
      var e = t["content-type"] || "";
      this.type = o.type(e);
      var n = o.params(e);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        t.link && (this.links = o.parseLinks(t.link))
      } catch (t) {}
    }, r.prototype._setStatusProperties = function(t) {
      var e = t / 100 | 0;
      this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.redirect = 3 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.forbidden = 403 == t, this.notFound = 404 == t
    }
  }, function(t, e) {
    "use strict";
    e.type = function(t) {
      return t.split(/ *; */).shift()
    }, e.params = function(t) {
      return t.split(/ *; */).reduce(function(t, e) {
        var n = e.split(/ *= */),
          r = n.shift(),
          i = n.shift();
        return r && i && (t[r] = i), t
      }, {})
    }, e.parseLinks = function(t) {
      return t.split(/ *, */).reduce(function(t, e) {
        var n = e.split(/ *; */),
          r = n[0].slice(1, -1),
          i = n[1].split(/ *= */)[1].slice(1, -1);
        return t[i] = r, t
      }, {})
    }, e.cleanHeader = function(t, e) {
      return delete t["content-type"], delete t["content-length"], delete t["transfer-encoding"], delete t.host, e && (delete t.authorization, delete t.cookie), t
    }
  }, , , , function(t, e, n) {
    function r(t, e) {
      this.baseOptions = e, this.request = t
    }
    var i = n(3),
      o = n(1),
      s = n(4),
      a = n(5);
    r.prototype.signup = function(t, e) {
      var n, r, u;
      return s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        connection: {
          type: "string",
          message: "connection option is required"
        },
        email: {
          type: "string",
          message: "email option is required"
        },
        password: {
          type: "string",
          message: "password option is required"
        }
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "dbconnections", "signup"), r = o.merge(this.baseOptions, ["clientID"])["with"](t), u = r.user_metadata || r.userMetadata, r = o.blacklist(r, ["scope", "userMetadata", "user_metadata"]), r = o.toSnakeCase(r, ["auth0Client"]), u && (r.user_metadata = u), this.request.post(n).send(r).end(a(e))
    }, r.prototype.changePassword = function(t, e) {
      var n, r;
      return s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        connection: {
          type: "string",
          message: "connection option is required"
        },
        email: {
          type: "string",
          message: "email option is required"
        }
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "dbconnections", "change_password"), r = o.merge(this.baseOptions, ["clientID"])["with"](t, ["email", "connection"]), r = o.toSnakeCase(r, ["auth0Client"]), this.request.post(n).send(r).end(a(e))
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      this.baseOptions = e, this.request = t
    }
    var i = n(3),
      o = n(1),
      s = n(4),
      a = n(6),
      u = n(5);
    r.prototype.buildVerifyUrl = function(t) {
      var e, n;
      return s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        connection: {
          type: "string",
          message: "connection option is required"
        },
        verificationCode: {
          type: "string",
          message: "verificationCode option is required"
        },
        phoneNumber: {
          optional: !1,
          type: "string",
          message: "phoneNumber option is required",
          condition: function(t) {
            return !t.email
          }
        },
        email: {
          optional: !1,
          type: "string",
          message: "email option is required",
          condition: function(t) {
            return !t.phoneNumber
          }
        }
      }), e = o.merge(this.baseOptions, ["clientID", "responseType", "responseMode", "redirectUri", "scope", "audience", "_csrf", "state", "_intstate", "protocol", "nonce"])["with"](t), this.baseOptions._sendTelemetry && (e.auth0Client = this.request.getTelemetryData()), e = o.toSnakeCase(e, ["auth0Client"]), n = a.stringify(e), i(this.baseOptions.rootUrl, "passwordless", "verify_redirect", "?" + n)
    }, r.prototype.start = function(t, e) {
      var n, r;
      return s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        connection: {
          type: "string",
          message: "connection option is required"
        },
        send: {
          type: "string",
          message: "send option is required",
          values: ["link", "code"],
          value_message: "send is not valid ([link, code])"
        },
        phoneNumber: {
          optional: !0,
          type: "string",
          message: "phoneNumber option is required",
          condition: function(t) {
            return "code" === t.send || !t.email
          }
        },
        email: {
          optional: !0,
          type: "string",
          message: "email option is required",
          condition: function(t) {
            return "link" === t.send || !t.phoneNumber
          }
        },
        authParams: {
          optional: !0,
          type: "object",
          message: "authParams option is required"
        }
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "passwordless", "start"), r = o.merge(this.baseOptions, ["clientID", "responseType", "redirectUri", "scope"])["with"](t), r.scope && (r.authParams = r.authParams || {}, r.authParams.scope = r.scope), r.redirectUri && (r.authParams = r.authParams || {}, r.authParams.redirect_uri = r.redirectUri), r.responseType && (r.authParams = r.authParams || {}, r.authParams.response_type = r.responseType), delete r.redirectUri, delete r.responseType, delete r.scope, r = o.toSnakeCase(r, ["auth0Client", "authParams"]), this.request.post(n).send(r).end(u(e))
    }, r.prototype.verify = function(t, e) {
      var n, r;
      return s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        connection: {
          type: "string",
          message: "connection option is required"
        },
        verificationCode: {
          type: "string",
          message: "verificationCode option is required"
        },
        phoneNumber: {
          optional: !1,
          type: "string",
          message: "phoneNumber option is required",
          condition: function(t) {
            return !t.email
          }
        },
        email: {
          optional: !1,
          type: "string",
          message: "email option is required",
          condition: function(t) {
            return !t.phoneNumber
          }
        }
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), r = o.pick(t, ["connection", "verificationCode", "phoneNumber", "email", "auth0Client"]), r = o.toSnakeCase(r, ["auth0Client"]), n = i(this.baseOptions.rootUrl, "passwordless", "verify"), this.request.post(n).send(r).end(u(e))
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e, n) {
      var r, i;
      if (void 0 === s.getDocument().cookie || null === s.getDocument().cookie) throw new Error("cookie storage not available");
      if (n) {
        var o = 24 * n * 60 * 60 * 1e3;
        r = new Date, r.setTime(r.getTime() + o), i = "; expires=" + r.toGMTString()
      } else i = "";
      s.getDocument().cookie = t + "=" + a.encode(e) + i + "; path=/"
    }

    function i(t) {
      var e, n, r, i = t + "=";
      if (void 0 === s.getDocument().cookie || null === s.getDocument().cookie) throw new Error("cookie storage not available");
      for (r = s.getDocument().cookie.split(";"), e = 0; e < r.length; e++) {
        for (n = r[e];
          " " === n.charAt(0);) n = n.substring(1, n.length);
        if (0 === n.indexOf(i)) return a.decode(n.substring(i.length, n.length))
      }
      return null
    }

    function o(t) {
      r(t, "", -1)
    }
    var s = n(2),
      a = n(25);
    t.exports = {
      create: r,
      read: i,
      erase: o
    }
  }, function(t, e, n) {
    function r(t, e) {
      var n = o.getKeysNotIn(e, a);
      return n.length > 0 && t.warning("Following parameters are not allowed on the `/authorize` endpoint: [" + n.join(",") + "]"), e
    }

    function i(t, e) {
      return o.pick(e, s)
    }
    var o = n(1),
      s = ["realm", "audience", "client_id", "client_secret", "redirect_uri", "scope", "code", "grant_type", "username", "password", "refresh_token", "assertion", "client_assertion", "client_assertion_type", "code_verifier"],
      a = ["connection", "connection_scope", "auth0Client", "owp", "device", "realm", "protocol", "_csrf", "_intstate", "login_ticket", "client_id", "response_type", "response_mode", "redirect_uri", "audience", "scope", "state", "nonce", "display", "prompt", "max_age", "ui_locales", "claims_locales", "id_token_hint", "login_hint", "acr_values", "claims", "registration", "request", "request_uri", "code_challenge", "code_challenge_method"];
    t.exports = {
      oauthTokenParams: i,
      oauthAuthorizeParams: r
    }
  }, function(t, e, n) {
    function r(t, e) {
      this.plugins = e;
      for (var n = 0; n < this.plugins.length; n++) {
        if (this.plugins[n].version !== i.raw) {
          var r = "";
          throw this.plugins[n].constructor && this.plugins[n].constructor.name && (r = this.plugins[n].constructor.name), new Error("Plugin " + r + " version (" + this.plugins[n].version + ") is not compatible with the SDK version (" + i.raw + ")")
        }
        this.plugins[n].setWebAuth(t)
      }
    }
    var i = n(10);
    r.prototype.get = function(t) {
      for (var e = 0; e < this.plugins.length; e++)
        if (this.plugins[e].supports(t)) return this.plugins[e].init();
      return null
    }, t.exports = r
  }, function(t, e, n) {
    function r() {
      this._current_popup = null
    }
    var i = n(23),
      o = n(2),
      s = n(1),
      a = n(6);
    r.prototype.calculatePosition = function(t) {
      var e = t.width || 500,
        n = t.height || 600,
        r = o.getWindow(),
        i = "undefined" != typeof r.screenX ? r.screenX : r.screenLeft,
        s = "undefined" != typeof r.screenY ? r.screenY : r.screenTop,
        a = "undefined" != typeof r.outerWidth ? r.outerWidth : r.document.body.clientWidth,
        u = "undefined" != typeof r.outerHeight ? r.outerHeight : r.document.body.clientHeight,
        p = (a - e) / 2,
        c = (u - n) / 2;
      return {
        width: e,
        height: n,
        left: i + p,
        top: s + c
      }
    }, r.prototype.preload = function(t) {
      var e = this,
        n = o.getWindow(),
        r = this.calculatePosition(t.popupOptions || {}),
        i = s.merge(r)["with"](t.popupOptions),
        u = t.url || "about:blank",
        p = a.stringify(i, {
          encode: !1,
          delimiter: ","
        });
      return this._current_popup && !this._current_popup.closed ? this._current_popup : (this._current_popup = n.open(u, "auth0_signup_popup", p), this._current_popup.kill = function() {
        this.close(), e._current_popup = null
      }, this._current_popup)
    }, r.prototype.load = function(t, e, n, r) {
      var o = this,
        u = this.calculatePosition(n.popupOptions || {}),
        p = s.merge(u)["with"](n.popupOptions),
        c = s.merge({
          url: t,
          relay_url: e,
          window_features: a.stringify(p, {
            delimiter: ",",
            encode: !1
          }),
          popup: this._current_popup
        })["with"](n),
        h = i.open(c, function(t, e) {
          return o._current_popup = null, r(t, e)
        });
      return h.focus(), h
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      var e = new Uint8Array(t),
        n = [],
        r = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~",
        o = i.getWindow().crypto || i.getWindow().msCrypto;
      if (!o) return null;
      for (var s = o.getRandomValues(e), a = 0; a < s.length; a++) n.push(r[s[a] % r.length]);
      return n.join("")
    }
    var i = n(2);
    t.exports = {
      randomString: r
    }
  }, function(t, e, n) {
    function r() {}
    var i = n(50);
    r.prototype.getItem = function(t) {
      return i.read(t)
    }, r.prototype.removeItem = function(t) {
      i.erase(t)
    }, r.prototype.setItem = function(t, e) {
      i.create(t, e, 1)
    }, t.exports = r
  }, function(t, e) {
    function n() {}
    n.prototype.getItem = function() {
      return null
    }, n.prototype.removeItem = function() {}, n.prototype.setItem = function() {}, t.exports = n
  }, function(t, e, n) {
    function r() {
      this.warn = new a({}), this.storage = new s;
      try {
        this.storage = i.getWindow().localStorage
      } catch (t) {
        this.warn.warning(t), this.warn.warning("Can't use localStorage. Using CookieStorage instead.")
      }
    }
    var i = n(2),
      o = n(56),
      s = n(55),
      a = n(7);
    r.prototype.failover = function() {
      return this.storage instanceof o ? void this.warn.warning("DummyStorage: ignore failover") : void(this.storage instanceof s ? (this.warn.warning("CookieStorage: failing over DummyStorage"), this.storage = new o) : (this.warn.warning("LocalStorage: failing over CookieStorage"), this.storage = new s))
    }, r.prototype.getItem = function(t) {
      try {
        return this.storage.getItem(t)
      } catch (e) {
        return this.warn.warning(e), this.failover(), this.getItem(t)
      }
    }, r.prototype.removeItem = function(t) {
      try {
        return this.storage.removeItem(t)
      } catch (e) {
        return this.warn.warning(e), this.failover(), this.removeItem(t)
      }
    }, r.prototype.setItem = function(t, e) {
      try {
        return this.storage.setItem(t, e)
      } catch (n) {
        return this.warn.warning(n), this.failover(), this.setItem(t, e)
      }
    }, t.exports = r
  }, function(t, e) {
    function n(t) {
      /^https?:\/\//.test(t) || (t = window.location.href);
      var e = /^(https?:\/\/[-_a-zA-Z.0-9:]+)/.exec(t);
      return e ? e[1] : t
    }
    t.exports = {
      extractOrigin: n
    }
  }, function(t, e, n) {
    var r = n(24),
      i = n(60),
      o = n(30),
      s = n(10);
    t.exports = {
      Authentication: r,
      Management: i,
      WebAuth: o,
      version: s.raw
    }
  }, function(t, e, n) {
    function r(t) {
      s.check(t, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        domain: {
          type: "string",
          message: "domain option is required"
        },
        token: {
          type: "string",
          message: "token option is required"
        },
        _sendTelemetry: {
          optional: !0,
          type: "boolean",
          message: "_sendTelemetry option is not valid"
        },
        _telemetryInfo: {
          optional: !0,
          type: "object",
          message: "_telemetryInfo option is not valid"
        }
      }), this.baseOptions = t, this.baseOptions.headers = {
        Authorization: "Bearer " + this.baseOptions.token
      }, this.request = new o(this.baseOptions), this.baseOptions.rootUrl = i("https://" + this.baseOptions.domain, "api", "v2")
    }
    var i = n(3),
      o = n(11),
      s = n(4),
      a = n(5);
    r.prototype.getUser = function(t, e) {
      var n;
      return s.check(t, {
        type: "string",
        message: "userId parameter is not valid"
      }), s.check(e, {
        type: "function",
        message: "cb parameter is not valid"
      }), n = i(this.baseOptions.rootUrl, "users", t), this.request.get(n).end(a(e, {
        ignoreCasing: !0
      }))
    }, r.prototype.patchUserMetadata = function(t, e, n) {
      var r;
      return s.check(t, {
        type: "string",
        message: "userId parameter is not valid"
      }), s.check(e, {
        type: "object",
        message: "userMetadata parameter is not valid"
      }), s.check(n, {
        type: "function",
        message: "cb parameter is not valid"
      }), r = i(this.baseOptions.rootUrl, "users", t), this.request.patch(r).send({
        user_metadata: e
      }).end(a(n, {
        ignoreCasing: !0
      }))
    }, r.prototype.linkUser = function(t, e, n) {
      var r;
      return s.check(t, {
        type: "string",
        message: "userId parameter is not valid"
      }), s.check(e, {
        type: "string",
        message: "secondaryUserToken parameter is not valid"
      }), s.check(n, {
        type: "function",
        message: "cb parameter is not valid"
      }), r = i(this.baseOptions.rootUrl, "users", t, "identities"), this.request.post(r).send({
        link_with: e
      }).end(a(n, {
        ignoreCasing: !0
      }))
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      this.baseOptions = e, this.client = t, this.warn = new a({
        disableWarnings: !!e._disableDeprecationWarnings
      })
    }
    var i = n(65),
      o = n(1),
      s = n(2),
      a = n(7),
      u = n(4);
    r.prototype.login = function(t, e) {
      if (s.getWindow().location.host !== this.baseOptions.domain) throw new Error("This method is meant to be used only inside the Universal Login Page.");
      var n, r = o.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience", "_csrf", "state", "_intstate", "nonce"])["with"](t);
      return u.check(r, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        responseType: {
          type: "string",
          message: "responseType option is required"
        }
      }), n = new i(this.baseOptions), n.login(r, function(t, r) {
        return t ? e(t) : n.callback(r)
      })
    }, r.prototype.signupAndLogin = function(t, e) {
      var n = this;
      return n.client.client.dbConnection.signup(t, function(r) {
        return r ? e(r) : n.login(t, e)
      })
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      this.baseOptions = e, this.baseOptions.popupOrigin = e.popupOrigin, this.client = t.client, this.webAuth = t, this.transactionManager = new d(this.baseOptions.transaction), this.crossOriginAuthentication = new f(t, this.baseOptions), this.warn = new l({
        disableWarnings: !!e._disableDeprecationWarnings
      })
    }
    var i = n(3),
      o = n(23),
      s = n(58),
      a = n(4),
      u = n(5),
      p = n(53),
      c = n(1),
      h = n(2),
      l = n(7),
      d = n(17),
      f = n(16);
    r.prototype.buildPopupHandler = function() {
      var t = this.baseOptions.plugins.get("popup.getPopupHandler");
      return t ? t.getPopupHandler() : new p
    }, r.prototype.preload = function(t) {
      t = t || {};
      var e = this.buildPopupHandler();
      return e.preload(t), e
    }, r.prototype.getPopupHandler = function(t, e) {
      return t.popupHandler ? t.popupHandler : e ? this.preload(t) : this.buildPopupHandler()
    }, r.prototype.callback = function(t) {
      var e = this,
        n = h.getWindow();
      t = t || {};
      var r = t.popupOrigin || this.baseOptions.popupOrigin || h.getOrigin();
      return n.opener ? void o.onOpen(function(n, i, o) {
        return n !== r ? o({
          error: "origin_mismatch",
          error_description: "The popup's origin (" + n + ") should match the `popupOrigin` parameter (" + r + ")."
        }) : void e.webAuth.parseHash(t || {}, function(t, e) {
          return o(t || e)
        })
      }) : void(n.doPost = function(t) {
        n.parent && n.parent.postMessage(t, r)
      })
    }, r.prototype.authorize = function(t, e) {
      var n, r, o, p = {},
        h = this.baseOptions.plugins.get("popup.authorize"),
        l = c.merge(this.baseOptions, ["clientID", "scope", "domain", "audience", "tenant", "responseType", "redirectUri", "_csrf", "state", "_intstate", "nonce"])["with"](c.blacklist(t, ["popupHandler"]));
      return a.check(l, {
        type: "object",
        message: "options parameter is not valid"
      }, {
        responseType: {
          type: "string",
          message: "responseType option is required"
        }
      }), o = i(this.baseOptions.rootUrl, "relay.html"), t.owp ? l.owp = !0 : (p.origin = s.extractOrigin(l.redirectUri), o = l.redirectUri), t.popupOptions && (p.popupOptions = c.pick(t.popupOptions, ["width", "height"])), h && (l = h.processParams(l)), l = this.transactionManager.process(l), l.scope = l.scope || "openid profile email", delete l.domain, r = this.client.buildAuthorizeUrl(l), n = this.getPopupHandler(t), n.load(r, o, p, u(e))
    }, r.prototype.loginWithCredentials = function(t, e) {
      t.realm = t.realm || t.connection, t.popup = !0, t = c.merge(this.baseOptions, ["redirectUri", "responseType", "state", "nonce"])["with"](c.blacklist(t, ["popupHandler", "connection"])), t = this.transactionManager.process(t), this.crossOriginAuthentication.login(t, e)
    }, r.prototype.passwordlessVerify = function(t, e) {
      var n = this;
      return this.client.passwordless.verify(c.blacklist(t, ["popupHandler"]), function(r) {
        return r ? e(r) : (t.username = t.phoneNumber || t.email, t.password = t.verificationCode, delete t.email, delete t.phoneNumber, delete t.verificationCode, delete t.type, void n.client.loginWithResourceOwner(t, e))
      })
    }, r.prototype.signupAndLogin = function(t, e) {
      var n = this,
        r = this.getPopupHandler(t, !0);
      return t.popupHandler = r, this.client.dbConnection.signup(c.blacklist(t, ["popupHandler"]), function(i) {
        return i ? (r._current_popup && r._current_popup.kill(), e(i)) : void n.loginWithCredentials(t, e)
      })
    }, t.exports = r
  }, function(t, e, n) {
    function r(t, e) {
      this.webAuth = t, this.baseOptions = e, this.crossOriginAuthentication = new i(t, this.baseOptions), this.warn = new o({
        disableWarnings: !!e._disableDeprecationWarnings
      })
    }
    var i = n(16),
      o = n(7);
    r.prototype.loginWithCredentials = function(t, e) {
      t.realm = t.realm || t.connection, delete t.connection, this.crossOriginAuthentication.login(t, e)
    }, r.prototype.signupAndLogin = function(t, e) {
      var n = this;
      return this.webAuth.client.dbConnection.signup(t, function(r) {
        return r ? e(r) : (t.realm = t.realm || t.connection, delete t.connection, n.webAuth.login(t, e))
      })
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      this.authenticationUrl = t.authenticationUrl, this.timeout = t.timeout || 6e4, this.handler = null, this.postMessageDataType = t.postMessageDataType || !1, this.postMessageOrigin = t.postMessageOrigin || o.getWindow().location.origin || o.getWindow().location.protocol + "//" + o.getWindow().location.hostname + (o.getWindow().location.port ? ":" + o.getWindow().location.port : "")
    }
    var i = n(27),
      o = n(2);
    r.create = function(t) {
      return new r(t)
    }, r.prototype.login = function(t, e) {
      this.handler = new i({
        auth0: this.auth0,
        url: this.authenticationUrl,
        eventListenerType: t ? "message" : "load",
        callback: this.getCallbackHandler(e, t),
        timeout: this.timeout,
        eventValidator: this.getEventValidator(),
        timeoutCallback: function() {
          e(null, "#error=timeout&error_description=Timeout+during+authentication+renew.")
        },
        usePostMessage: t || !1
      }), this.handler.init()
    }, r.prototype.getEventValidator = function() {
      var t = this;
      return {
        isValid: function(e) {
          switch (e.event.type) {
            case "message":
              return e.event.origin === t.postMessageOrigin && e.event.source === t.handler.iframe.contentWindow && (t.postMessageDataType === !1 || e.event.data.type && e.event.data.type === t.postMessageDataType);
            case "load":
              if ("about:" === e.sourceObject.contentWindow.location.protocol) return !1;
            default:
              return !0
          }
        }
      }
    }, r.prototype.getCallbackHandler = function(t, e) {
      return function(n) {
        var r;
        r = e ? "object" == typeof n.event.data && n.event.data.hash ? n.event.data.hash : n.event.data : n.sourceObject.contentWindow.location.hash, t(null, r)
      }
    }, t.exports = r
  }, function(t, e, n) {
    function r(t) {
      this.baseOptions = t, this.request = new s(t), this.transactionManager = new p(this.baseOptions.transaction)
    }
    var i = n(3),
      o = n(1),
      s = n(11),
      a = n(5),
      u = n(2),
      p = n(17);
    r.prototype.login = function(t, e) {
      var n, r;
      return n = i(this.baseOptions.rootUrl, "usernamepassword", "login"), t.username = t.username || t.email, t = o.blacklist(t, ["email"]), r = o.merge(this.baseOptions, ["clientID", "redirectUri", "tenant", "responseType", "responseMode", "scope", "audience"])["with"](t), r = this.transactionManager.process(r), r = o.toSnakeCase(r, ["auth0Client"]), this.request.post(n).send(r).end(a(e))
    }, r.prototype.callback = function(t) {
      var e, n, r = u.getDocument();
      e = r.createElement("div"), e.innerHTML = t, n = r.body.appendChild(e).children[0], n.submit()
    }, t.exports = r
  }])
});
