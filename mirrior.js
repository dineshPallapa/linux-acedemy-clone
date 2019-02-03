! function($) {
  var mirrored, defaults = {
      className: "autosizejs",
      id: "autosizejs",
      append: "\n",
      callback: !1,
      resizeDelay: 10,
      placeholder: !0
    },
    typographyStyles = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"],
    mirror = $('<textarea aria-hidden="true" tabindex="-1"/>').data("autosize", !0)[0];
  mirror.style.cssText = "position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;", mirror.style.lineHeight = "99px", "99px" === $(mirror).css("lineHeight") && typographyStyles.push("lineHeight"), mirror.style.lineHeight = "", $.fn.autosize = function(options) {
    return this.length ? (options = $.extend({}, defaults, options || {}), mirror.parentNode !== document.body && $(document.body).append(mirror), this.each(function() {
      function setWidth() {
        var width, style = window.getComputedStyle ? window.getComputedStyle(ta, null) : null;
        style ? (width = parseFloat(style.width), ("border-box" === style.boxSizing || "border-box" === style.webkitBoxSizing || "border-box" === style.mozBoxSizing) && $.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(i, val) {
          width -= parseFloat(style[val])
        })) : width = $ta.width(), mirror.style.width = Math.max(width, 0) + "px"
      }

      function initMirror() {
        var styles = {};
        if (mirrored = ta, mirror.className = options.className, mirror.id = options.id, maxHeight = parseFloat($ta.css("maxHeight")), $.each(typographyStyles, function(i, val) {
            styles[val] = $ta.css(val)
          }), $(mirror).css(styles).attr("wrap", $ta.attr("wrap")), setWidth(), window.chrome) {
          var width = ta.style.width;
          ta.style.width = "0px";
          ta.offsetWidth;
          ta.style.width = width
        }
      }

      function adjust() {
        var height, originalHeight;
        mirrored !== ta ? initMirror() : setWidth(), !ta.value && options.placeholder ? mirror.value = $ta.attr("placeholder") || "" : mirror.value = ta.value, mirror.value += options.append || "", mirror.style.overflowY = ta.style.overflowY, originalHeight = parseFloat(ta.style.height) || 0, mirror.scrollTop = 0, mirror.scrollTop = 9e4, height = mirror.scrollTop, maxHeight && height > maxHeight ? (ta.style.overflowY = "scroll", height = maxHeight) : (ta.style.overflowY = "hidden", minHeight > height && (height = minHeight)), height += boxOffset, Math.abs(originalHeight - height) > .01 && (ta.style.height = height + "px", mirror.className = mirror.className, callback && options.callback.call(ta, ta), $ta.trigger("autosize.resized"))
      }

      function resize() {
        clearTimeout(timeout), timeout = setTimeout(function() {
          var newWidth = $ta.width();
          newWidth !== width && (width = newWidth, adjust())
        }, parseInt(options.resizeDelay, 10))
      }
      var maxHeight, minHeight, timeout, ta = this,
        $ta = $(ta),
        boxOffset = 0,
        callback = $.isFunction(options.callback),
        originalStyles = {
          height: ta.style.height,
          overflow: ta.style.overflow,
          overflowY: ta.style.overflowY,
          wordWrap: ta.style.wordWrap,
          resize: ta.style.resize
        },
        width = $ta.width(),
        taResize = $ta.css("resize");
      $ta.data("autosize") || ($ta.data("autosize", !0), ("border-box" === $ta.css("box-sizing") || "border-box" === $ta.css("-moz-box-sizing") || "border-box" === $ta.css("-webkit-box-sizing")) && (boxOffset = $ta.outerHeight() - $ta.height()), minHeight = Math.max(parseFloat($ta.css("minHeight")) - boxOffset || 0, $ta.height()), $ta.css({
        overflow: "hidden",
        overflowY: "hidden",
        wordWrap: "break-word"
      }), "vertical" === taResize ? $ta.css("resize", "none") : "both" === taResize && $ta.css("resize", "horizontal"), "onpropertychange" in ta ? "oninput" in ta ? $ta.on("input.autosize keyup.autosize", adjust) : $ta.on("propertychange.autosize", function() {
        "value" === event.propertyName && adjust()
      }) : $ta.on("input.autosize", adjust), options.resizeDelay !== !1 && $(window).on("resize.autosize", resize), $ta.on("autosize.resize", adjust), $ta.on("autosize.resizeIncludeStyle", function() {
        mirrored = null, adjust()
      }), $ta.on("autosize.destroy", function() {
        mirrored = null, clearTimeout(timeout), $(window).off("resize", resize), $ta.off("autosize").off(".autosize").css(originalStyles).removeData("autosize")
      }), adjust())
    })) : this
  }
}(jQuery || $);

! function(a, b) {
  "function" == typeof define && define.amd ? define(["jquery"], function(a) {
    return b(a)
  }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
  function b(a) {
    this.$container, this.constraints = null, this.__$tooltip, this.__init(a)
  }

  function c(b, c) {
    var d = !0;
    return a.each(b, function(a, e) {
      return void 0 === c[a] || b[a] !== c[a] ? (d = !1, !1) : void 0
    }), d
  }

  function d(b) {
    var c = b.attr("id"),
      d = c ? h.window.document.getElementById(c) : null;
    return d ? d === b[0] : a.contains(h.window.document.body, b[0])
  }

  function e() {
    if (!g) return !1;
    var a = g.document.body || g.document.documentElement,
      b = a.style,
      c = "transition",
      d = ["Moz", "Webkit", "Khtml", "O", "ms"];
    if ("string" == typeof b[c]) return !0;
    c = c.charAt(0).toUpperCase() + c.substr(1);
    for (var e = 0; e < d.length; e++)
      if ("string" == typeof b[d[e] + c]) return !0;
    return !1
  }
  var f = {
      animation: "fade",
      animationDuration: 350,
      content: null,
      contentAsHTML: !1,
      contentCloning: !1,
      debug: !0,
      delay: 300,
      delayTouch: [300, 500],
      functionInit: null,
      functionBefore: null,
      functionReady: null,
      functionAfter: null,
      functionFormat: null,
      IEmin: 6,
      interactive: !1,
      multiple: !1,
      parent: "body",
      plugins: ["sideTip"],
      repositionOnScroll: !1,
      restoration: "none",
      selfDestruction: !0,
      theme: [],
      timer: 0,
      trackerInterval: 500,
      trackOrigin: !1,
      trackTooltip: !1,
      trigger: "hover",
      triggerClose: {
        click: !1,
        mouseleave: !1,
        originClick: !1,
        scroll: !1,
        tap: !1,
        touchleave: !1
      },
      triggerOpen: {
        click: !1,
        mouseenter: !1,
        tap: !1,
        touchstart: !1
      },
      updateAnimation: "rotate",
      zIndex: 9999999
    },
    g = "undefined" != typeof window ? window : null,
    h = {
      hasTouchCapability: !(!g || !("ontouchstart" in g || g.DocumentTouch && g.document instanceof g.DocumentTouch || g.navigator.maxTouchPoints)),
      hasTransitions: e(),
      IE: !1,
      semVer: "4.1.2",
      window: g
    },
    i = function() {
      this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = h
    };
  i.prototype = {
    __bridge: function(b, c, d) {
      if (!c[d]) {
        var e = function() {};
        e.prototype = b;
        var g = new e;
        g.__init && g.__init(c), a.each(b, function(a, b) {
          0 != a.indexOf("__") && (c[a] ? f.debug && console.log("The " + a + " method of the " + d + " plugin conflicts with another plugin or native methods") : (c[a] = function() {
            return g[a].apply(g, Array.prototype.slice.apply(arguments))
          }, c[a].bridged = g))
        }), c[d] = g
      }
      return this
    },
    __setWindow: function(a) {
      return h.window = a, this
    },
    _getRuler: function(a) {
      return new b(a)
    },
    _off: function() {
      return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _on: function() {
      return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _one: function() {
      return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _plugin: function(b) {
      var c = this;
      if ("string" == typeof b) {
        var d = b,
          e = null;
        return d.indexOf(".") > 0 ? e = c.__plugins[d] : a.each(c.__plugins, function(a, b) {
          return b.name.substring(b.name.length - d.length - 1) == "." + d ? (e = b, !1) : void 0
        }), e
      }
      if (b.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
      return c.__plugins[b.name] = b, b.core && c.__bridge(b.core, c, b.name), this
    },
    _trigger: function() {
      var a = Array.prototype.slice.apply(arguments);
      return "string" == typeof a[0] && (a[0] = {
        type: a[0]
      }), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, a), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, a), this
    },
    instances: function(b) {
      var c = [],
        d = b || ".tooltipstered";
      return a(d).each(function() {
        var b = a(this),
          d = b.data("tooltipster-ns");
        d && a.each(d, function(a, d) {
          c.push(b.data(d))
        })
      }), c
    },
    instancesLatest: function() {
      return this.__instancesLatestArr
    },
    off: function() {
      return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    on: function() {
      return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    one: function() {
      return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    origins: function(b) {
      var c = b ? b + " " : "";
      return a(c + ".tooltipstered").toArray()
    },
    setDefaults: function(b) {
      return a.extend(f, b), this
    },
    triggerHandler: function() {
      return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    }
  }, a.tooltipster = new i, a.Tooltipster = function(b, c) {
    this.__callbacks = {
      close: [],
      open: []
    }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__destroying = !1, this.__$emitterPrivate = a({}), this.__$emitterPublic = a({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
      close: [],
      open: null
    }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(b, c)
  }, a.Tooltipster.prototype = {
    __init: function(b, c) {
      var d = this;
      if (d._$origin = a(b), d.__options = a.extend(!0, {}, f, c), d.__optionsFormat(), !h.IE || h.IE >= d.__options.IEmin) {
        var e = null;
        if (void 0 === d._$origin.data("tooltipster-initialTitle") && (e = d._$origin.attr("title"), void 0 === e && (e = null), d._$origin.data("tooltipster-initialTitle", e)), null !== d.__options.content) d.__contentSet(d.__options.content);
        else {
          var g, i = d._$origin.attr("data-tooltip-content");
          i && (g = a(i)), g && g[0] ? d.__contentSet(g.first()) : d.__contentSet(e)
        }
        d._$origin.removeAttr("title").addClass("tooltipstered"), d.__prepareOrigin(), d.__prepareGC(), a.each(d.__options.plugins, function(a, b) {
          d._plug(b)
        }), h.hasTouchCapability && a("body").on("touchmove." + d.__namespace + "-triggerOpen", function(a) {
          d._touchRecordEvent(a)
        }), d._on("created", function() {
          d.__prepareTooltip()
        })._on("repositioned", function(a) {
          d.__lastPosition = a.position
        })
      } else d.__options.disabled = !0
    },
    __contentInsert: function() {
      var a = this,
        b = a._$tooltip.find(".tooltipster-content"),
        c = a.__Content,
        d = function(a) {
          c = a
        };
      return a._trigger({
        type: "format",
        content: a.__Content,
        format: d
      }), a.__options.functionFormat && (c = a.__options.functionFormat.call(a, a, {
        origin: a._$origin[0]
      }, a.__Content)), "string" != typeof c || a.__options.contentAsHTML ? b.empty().append(c) : b.text(c), a
    },
    __contentSet: function(b) {
      return b instanceof a && this.__options.contentCloning && (b = b.clone(!0)), this.__Content = b, this._trigger({
        type: "updated",
        content: b
      }), this
    },
    __destroyError: function() {
      throw new Error("This tooltip has been destroyed and cannot execute your method call.")
    },
    __geometry: function() {
      var b = this,
        c = b._$origin,
        d = b._$origin.is("area");
      if (d) {
        var e = b._$origin.parent().attr("name");
        c = a('img[usemap="#' + e + '"]')
      }
      var f = c[0].getBoundingClientRect(),
        g = a(h.window.document),
        i = a(h.window),
        j = c,
        k = {
          available: {
            document: null,
            window: null
          },
          document: {
            size: {
              height: g.height(),
              width: g.width()
            }
          },
          window: {
            scroll: {
              left: h.window.scrollX || h.window.document.documentElement.scrollLeft,
              top: h.window.scrollY || h.window.document.documentElement.scrollTop
            },
            size: {
              height: i.height(),
              width: i.width()
            }
          },
          origin: {
            fixedLineage: !1,
            offset: {},
            size: {
              height: f.bottom - f.top,
              width: f.right - f.left
            },
            usemapImage: d ? c[0] : null,
            windowOffset: {
              bottom: f.bottom,
              left: f.left,
              right: f.right,
              top: f.top
            }
          }
        };
      if (d) {
        var l = b._$origin.attr("shape"),
          m = b._$origin.attr("coords");
        if (m && (m = m.split(","), a.map(m, function(a, b) {
            m[b] = parseInt(a)
          })), "default" != l) switch (l) {
          case "circle":
            var n = m[0],
              o = m[1],
              p = m[2],
              q = o - p,
              r = n - p;
            k.origin.size.height = 2 * p, k.origin.size.width = k.origin.size.height, k.origin.windowOffset.left += r, k.origin.windowOffset.top += q;
            break;
          case "rect":
            var s = m[0],
              t = m[1],
              u = m[2],
              v = m[3];
            k.origin.size.height = v - t, k.origin.size.width = u - s, k.origin.windowOffset.left += s, k.origin.windowOffset.top += t;
            break;
          case "poly":
            for (var w = 0, x = 0, y = 0, z = 0, A = "even", B = 0; B < m.length; B++) {
              var C = m[B];
              "even" == A ? (C > y && (y = C, 0 === B && (w = y)), w > C && (w = C), A = "odd") : (C > z && (z = C, 1 == B && (x = z)), x > C && (x = C), A = "even")
            }
            k.origin.size.height = z - x, k.origin.size.width = y - w, k.origin.windowOffset.left += w, k.origin.windowOffset.top += x
        }
      }
      var D = function(a) {
        k.origin.size.height = a.height, k.origin.windowOffset.left = a.left, k.origin.windowOffset.top = a.top, k.origin.size.width = a.width
      };
      for (b._trigger({
          type: "geometry",
          edit: D,
          geometry: {
            height: k.origin.size.height,
            left: k.origin.windowOffset.left,
            top: k.origin.windowOffset.top,
            width: k.origin.size.width
          }
        }), k.origin.windowOffset.right = k.origin.windowOffset.left + k.origin.size.width, k.origin.windowOffset.bottom = k.origin.windowOffset.top + k.origin.size.height, k.origin.offset.left = k.origin.windowOffset.left + h.window.scrollX, k.origin.offset.top = k.origin.windowOffset.top + h.window.scrollY, k.origin.offset.bottom = k.origin.offset.top + k.origin.size.height, k.origin.offset.right = k.origin.offset.left + k.origin.size.width, k.available.document = {
          bottom: {
            height: k.document.size.height - k.origin.offset.bottom,
            width: k.document.size.width
          },
          left: {
            height: k.document.size.height,
            width: k.origin.offset.left
          },
          right: {
            height: k.document.size.height,
            width: k.document.size.width - k.origin.offset.right
          },
          top: {
            height: k.origin.offset.top,
            width: k.document.size.width
          }
        }, k.available.window = {
          bottom: {
            height: Math.max(k.window.size.height - Math.max(k.origin.windowOffset.bottom, 0), 0),
            width: k.window.size.width
          },
          left: {
            height: k.window.size.height,
            width: Math.max(k.origin.windowOffset.left, 0)
          },
          right: {
            height: k.window.size.height,
            width: Math.max(k.window.size.width - Math.max(k.origin.windowOffset.right, 0), 0)
          },
          top: {
            height: Math.max(k.origin.windowOffset.top, 0),
            width: k.window.size.width
          }
        };
        "html" != j[0].tagName.toLowerCase();) {
        if ("fixed" == j.css("position")) {
          k.origin.fixedLineage = !0;
          break
        }
        j = j.parent()
      }
      return k
    },
    __optionsFormat: function() {
      return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), "string" == typeof this.__options.parent && (this.__options.parent = a(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
        mouseenter: !0,
        touchstart: !0
      }, this.__options.triggerClose = {
        mouseleave: !0,
        originClick: !0,
        touchleave: !0
      }) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
        click: !0,
        tap: !0
      }, this.__options.triggerClose = {
        click: !0,
        tap: !0
      }), this._trigger("options"), this
    },
    __prepareGC: function() {
      var b = this;
      return b.__options.selfDestruction ? b.__garbageCollector = setInterval(function() {
        var c = (new Date).getTime();
        b.__touchEvents = a.grep(b.__touchEvents, function(a, b) {
          return c - a.time > 6e4
        }), d(b._$origin) || b.destroy()
      }, 2e4) : clearInterval(b.__garbageCollector), b
    },
    __prepareOrigin: function() {
      var a = this;
      if (a._$origin.off("." + a.__namespace + "-triggerOpen"), h.hasTouchCapability && a._$origin.on("touchstart." + a.__namespace + "-triggerOpen touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen", function(b) {
          a._touchRecordEvent(b)
        }), a.__options.triggerOpen.click || a.__options.triggerOpen.tap && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerOpen.click && (b += "click." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.tap && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function(b) {
          a._touchIsMeaningfulEvent(b) && a._open(b)
        })
      }
      if (a.__options.triggerOpen.mouseenter || a.__options.triggerOpen.touchstart && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerOpen.mouseenter && (b += "mouseenter." + a.__namespace + "-triggerOpen "), a.__options.triggerOpen.touchstart && h.hasTouchCapability && (b += "touchstart." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function(b) {
          !a._touchIsTouchEvent(b) && a._touchIsEmulatedEvent(b) || (a.__pointerIsOverOrigin = !0, a._openShortly(b))
        })
      }
      if (a.__options.triggerClose.mouseleave || a.__options.triggerClose.touchleave && h.hasTouchCapability) {
        var b = "";
        a.__options.triggerClose.mouseleave && (b += "mouseleave." + a.__namespace + "-triggerOpen "), a.__options.triggerClose.touchleave && h.hasTouchCapability && (b += "touchend." + a.__namespace + "-triggerOpen touchcancel." + a.__namespace + "-triggerOpen"), a._$origin.on(b, function(b) {
          a._touchIsMeaningfulEvent(b) && (a.__pointerIsOverOrigin = !1)
        })
      }
      return a
    },
    __prepareTooltip: function() {
      var b = this,
        c = b.__options.interactive ? "auto" : "";
      return b._$tooltip.attr("id", b.__namespace).css({
        "pointer-events": c,
        zIndex: b.__options.zIndex
      }), a.each(b.__previousThemes, function(a, c) {
        b._$tooltip.removeClass(c)
      }), a.each(b.__options.theme, function(a, c) {
        b._$tooltip.addClass(c)
      }), b.__previousThemes = a.merge([], b.__options.theme), b
    },
    __scrollHandler: function(b) {
      var c = this;
      if (c.__options.triggerClose.scroll) c._close(b);
      else {
        if (b.target === h.window.document) c.__Geometry.origin.fixedLineage || c.__options.repositionOnScroll && c.reposition(b);
        else {
          var d = c.__geometry(),
            e = !1;
          if ("fixed" != c._$origin.css("position") && c.__$originParents.each(function(b, c) {
              var f = a(c),
                g = f.css("overflow-x"),
                h = f.css("overflow-y");
              if ("visible" != g || "visible" != h) {
                var i = c.getBoundingClientRect();
                if ("visible" != g && (d.origin.windowOffset.left < i.left || d.origin.windowOffset.right > i.right)) return e = !0, !1;
                if ("visible" != h && (d.origin.windowOffset.top < i.top || d.origin.windowOffset.bottom > i.bottom)) return e = !0, !1
              }
              return "fixed" == f.css("position") ? !1 : void 0
            }), e) c._$tooltip.css("visibility", "hidden");
          else if (c._$tooltip.css("visibility", "visible"), c.__options.repositionOnScroll) c.reposition(b);
          else {
            var f = d.origin.offset.left - c.__Geometry.origin.offset.left,
              g = d.origin.offset.top - c.__Geometry.origin.offset.top;
            c._$tooltip.css({
              left: c.__lastPosition.coord.left + f,
              top: c.__lastPosition.coord.top + g
            })
          }
        }
        c._trigger({
          type: "scroll",
          event: b
        })
      }
      return c
    },
    __stateSet: function(a) {
      return this.__state = a, this._trigger({
        type: "state",
        state: a
      }), this
    },
    __timeoutsClear: function() {
      return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, a.each(this.__timeouts.close, function(a, b) {
        clearTimeout(b)
      }), this.__timeouts.close = [], this
    },
    __trackerStart: function() {
      var a = this,
        b = a._$tooltip.find(".tooltipster-content");
      return a.__options.trackTooltip && (a.__contentBcr = b[0].getBoundingClientRect()), a.__tracker = setInterval(function() {
        if (d(a._$origin) && d(a._$tooltip)) {
          if (a.__options.trackOrigin) {
            var e = a.__geometry(),
              f = !1;
            c(e.origin.size, a.__Geometry.origin.size) && (a.__Geometry.origin.fixedLineage ? c(e.origin.windowOffset, a.__Geometry.origin.windowOffset) && (f = !0) : c(e.origin.offset, a.__Geometry.origin.offset) && (f = !0)), f || (a.__options.triggerClose.mouseleave ? a._close() : a.reposition())
          }
          if (a.__options.trackTooltip) {
            var g = b[0].getBoundingClientRect();
            g.height === a.__contentBcr.height && g.width === a.__contentBcr.width || (a.reposition(), a.__contentBcr = g)
          }
        } else a._close()
      }, a.__options.trackerInterval), a
    },
    _close: function(b, c) {
      var d = this,
        e = !0;
      if (d._trigger({
          type: "close",
          event: b,
          stop: function() {
            e = !1
          }
        }), e || d.__destroying) {
        c && d.__callbacks.close.push(c), d.__callbacks.open = [], d.__timeoutsClear();
        var f = function() {
          a.each(d.__callbacks.close, function(a, c) {
            c.call(d, d, {
              event: b,
              origin: d._$origin[0]
            })
          }), d.__callbacks.close = []
        };
        if ("closed" != d.__state) {
          var g = !0,
            i = new Date,
            j = i.getTime(),
            k = j + d.__options.animationDuration[1];
          if ("disappearing" == d.__state && k > d.__closingTime && (g = !1), g) {
            d.__closingTime = k, "disappearing" != d.__state && d.__stateSet("disappearing");
            var l = function() {
              clearInterval(d.__tracker), d._trigger({
                type: "closing",
                event: b
              }), d._$tooltip.off("." + d.__namespace + "-triggerClose").removeClass("tooltipster-dying"), a(h.window).off("." + d.__namespace + "-triggerClose"), d.__$originParents.each(function(b, c) {
                a(c).off("scroll." + d.__namespace + "-triggerClose")
              }), d.__$originParents = null, a("body").off("." + d.__namespace + "-triggerClose"), d._$origin.off("." + d.__namespace + "-triggerClose"), d._off("dismissable"), d.__stateSet("closed"), d._trigger({
                type: "after",
                event: b
              }), d.__options.functionAfter && d.__options.functionAfter.call(d, d, {
                event: b
              }), f()
            };
            h.hasTransitions ? (d._$tooltip.css({
              "-moz-animation-duration": d.__options.animationDuration[1] + "ms",
              "-ms-animation-duration": d.__options.animationDuration[1] + "ms",
              "-o-animation-duration": d.__options.animationDuration[1] + "ms",
              "-webkit-animation-duration": d.__options.animationDuration[1] + "ms",
              "animation-duration": d.__options.animationDuration[1] + "ms",
              "transition-duration": d.__options.animationDuration[1] + "ms"
            }), d._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), d.__options.animationDuration[1] > 0 && d._$tooltip.delay(d.__options.animationDuration[1]), d._$tooltip.queue(l)) : d._$tooltip.stop().fadeOut(d.__options.animationDuration[1], l)
          }
        } else f()
      }
      return d
    },
    _off: function() {
      return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _on: function() {
      return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _one: function() {
      return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
    },
    _open: function(b, c) {
      var e = this;
      if (!e.__destroying && d(e._$origin) && e.__enabled) {
        var f = !0;
        if ("closed" == e.__state && (e._trigger({
            type: "before",
            event: b,
            stop: function() {
              f = !1
            }
          }), f && e.__options.functionBefore && (f = e.__options.functionBefore.call(e, e, {
            event: b,
            origin: e._$origin[0]
          }))), f !== !1 && null !== e.__Content) {
          c && e.__callbacks.open.push(c), e.__callbacks.close = [], e.__timeoutsClear();
          var g, i = function() {
            "stable" != e.__state && e.__stateSet("stable"), a.each(e.__callbacks.open, function(a, b) {
              b.call(e, e, {
                origin: e._$origin[0],
                tooltip: e._$tooltip[0]
              })
            }), e.__callbacks.open = []
          };
          if ("closed" !== e.__state) g = 0, "disappearing" === e.__state ? (e.__stateSet("appearing"), h.hasTransitions ? (e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i)) : e._$tooltip.stop().fadeIn(i)) : "stable" == e.__state && i();
          else {
            if (e.__stateSet("appearing"), g = e.__options.animationDuration[0], e.__contentInsert(), e.reposition(b, !0), h.hasTransitions ? (e._$tooltip.addClass("tooltipster-" + e.__options.animation).addClass("tooltipster-initial").css({
                "-moz-animation-duration": e.__options.animationDuration[0] + "ms",
                "-ms-animation-duration": e.__options.animationDuration[0] + "ms",
                "-o-animation-duration": e.__options.animationDuration[0] + "ms",
                "-webkit-animation-duration": e.__options.animationDuration[0] + "ms",
                "animation-duration": e.__options.animationDuration[0] + "ms",
                "transition-duration": e.__options.animationDuration[0] + "ms"
              }), setTimeout(function() {
                "closed" != e.__state && (e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), e.__options.animationDuration[0] > 0 && e._$tooltip.delay(e.__options.animationDuration[0]), e._$tooltip.queue(i))
              }, 0)) : e._$tooltip.css("display", "none").fadeIn(e.__options.animationDuration[0], i), e.__trackerStart(), a(h.window).on("resize." + e.__namespace + "-triggerClose", function(a) {
                e.reposition(a)
              }).on("scroll." + e.__namespace + "-triggerClose", function(a) {
                e.__scrollHandler(a)
              }), e.__$originParents = e._$origin.parents(), e.__$originParents.each(function(b, c) {
                a(c).on("scroll." + e.__namespace + "-triggerClose", function(a) {
                  e.__scrollHandler(a)
                })
              }), e.__options.triggerClose.mouseleave || e.__options.triggerClose.touchleave && h.hasTouchCapability) {
              e._on("dismissable", function(a) {
                a.dismissable ? a.delay ? (m = setTimeout(function() {
                  e._close(a.event)
                }, a.delay), e.__timeouts.close.push(m)) : e._close(a) : clearTimeout(m)
              });
              var j = e._$origin,
                k = "",
                l = "",
                m = null;
              e.__options.interactive && (j = j.add(e._$tooltip)), e.__options.triggerClose.mouseleave && (k += "mouseenter." + e.__namespace + "-triggerClose ", l += "mouseleave." + e.__namespace + "-triggerClose "), e.__options.triggerClose.touchleave && h.hasTouchCapability && (k += "touchstart." + e.__namespace + "-triggerClose", l += "touchend." + e.__namespace + "-triggerClose touchcancel." + e.__namespace + "-triggerClose"), j.on(l, function(a) {
                if (e._touchIsTouchEvent(a) || !e._touchIsEmulatedEvent(a)) {
                  var b = "mouseleave" == a.type ? e.__options.delay : e.__options.delayTouch;
                  e._trigger({
                    delay: b[1],
                    dismissable: !0,
                    event: a,
                    type: "dismissable"
                  })
                }
              }).on(k, function(a) {
                !e._touchIsTouchEvent(a) && e._touchIsEmulatedEvent(a) || e._trigger({
                  dismissable: !1,
                  event: a,
                  type: "dismissable"
                })
              })
            }
            e.__options.triggerClose.originClick && e._$origin.on("click." + e.__namespace + "-triggerClose", function(a) {
              e._touchIsTouchEvent(a) || e._touchIsEmulatedEvent(a) || e._close(a)
            }), (e.__options.triggerClose.click || e.__options.triggerClose.tap && h.hasTouchCapability) && setTimeout(function() {
              if ("closed" != e.__state) {
                var b = "";
                e.__options.triggerClose.click && (b += "click." + e.__namespace + "-triggerClose "), e.__options.triggerClose.tap && h.hasTouchCapability && (b += "touchend." + e.__namespace + "-triggerClose"), a("body").on(b, function(b) {
                  e._touchIsMeaningfulEvent(b) && (e._touchRecordEvent(b), e.__options.interactive && a.contains(e._$tooltip[0], b.target) || e._close(b))
                }), e.__options.triggerClose.tap && h.hasTouchCapability && a("body").on("touchstart." + e.__namespace + "-triggerClose", function(a) {
                  e._touchRecordEvent(a)
                })
              }
            }, 0), e._trigger("ready"), e.__options.functionReady && e.__options.functionReady.call(e, e, {
              origin: e._$origin[0],
              tooltip: e._$tooltip[0]
            })
          }
          if (e.__options.timer > 0) {
            var m = setTimeout(function() {
              e._close()
            }, e.__options.timer + g);
            e.__timeouts.close.push(m)
          }
        }
      }
      return e
    },
    _openShortly: function(a) {
      var b = this,
        c = !0;
      if ("stable" != b.__state && "appearing" != b.__state && !b.__timeouts.open && (b._trigger({
          type: "start",
          event: a,
          stop: function() {
            c = !1
          }
        }), c)) {
        var d = 0 == a.type.indexOf("touch") ? b.__options.delayTouch : b.__options.delay;
        d[0] ? b.__timeouts.open = setTimeout(function() {
          b.__timeouts.open = null, b.__pointerIsOverOrigin && b._touchIsMeaningfulEvent(a) ? (b._trigger("startend"), b._open(a)) : b._trigger("startcancel")
        }, d[0]) : (b._trigger("startend"), b._open(a))
      }
      return b
    },
    _optionsExtract: function(b, c) {
      var d = this,
        e = a.extend(!0, {}, c),
        f = d.__options[b];
      return f || (f = {}, a.each(c, function(a, b) {
        var c = d.__options[a];
        void 0 !== c && (f[a] = c)
      })), a.each(e, function(b, c) {
        void 0 !== f[b] && ("object" != typeof c || c instanceof Array || null == c || "object" != typeof f[b] || f[b] instanceof Array || null == f[b] ? e[b] = f[b] : a.extend(e[b], f[b]))
      }), e
    },
    _plug: function(b) {
      var c = a.tooltipster._plugin(b);
      if (!c) throw new Error('The "' + b + '" plugin is not defined');
      return c.instance && a.tooltipster.__bridge(c.instance, this, c.name), this
    },
    _touchIsEmulatedEvent: function(a) {
      for (var b = !1, c = (new Date).getTime(), d = this.__touchEvents.length - 1; d >= 0; d--) {
        var e = this.__touchEvents[d];
        if (!(c - e.time < 500)) break;
        e.target === a.target && (b = !0)
      }
      return b
    },
    _touchIsMeaningfulEvent: function(a) {
      return this._touchIsTouchEvent(a) && !this._touchSwiped(a.target) || !this._touchIsTouchEvent(a) && !this._touchIsEmulatedEvent(a)
    },
    _touchIsTouchEvent: function(a) {
      return 0 == a.type.indexOf("touch")
    },
    _touchRecordEvent: function(a) {
      return this._touchIsTouchEvent(a) && (a.time = (new Date).getTime(), this.__touchEvents.push(a)), this
    },
    _touchSwiped: function(a) {
      for (var b = !1, c = this.__touchEvents.length - 1; c >= 0; c--) {
        var d = this.__touchEvents[c];
        if ("touchmove" == d.type) {
          b = !0;
          break
        }
        if ("touchstart" == d.type && a === d.target) break
      }
      return b
    },
    _trigger: function() {
      var b = Array.prototype.slice.apply(arguments);
      return "string" == typeof b[0] && (b[0] = {
        type: b[0]
      }), b[0].instance = this, b[0].origin = this._$origin ? this._$origin[0] : null, b[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, b), a.tooltipster._trigger.apply(a.tooltipster, b), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, b), this
    },
    _unplug: function(b) {
      var c = this;
      if (c[b]) {
        var d = a.tooltipster._plugin(b);
        d.instance && a.each(d.instance, function(a, d) {
          c[a] && c[a].bridged === c[b] && delete c[a]
        }), c[b].__destroy && c[b].__destroy(), delete c[b]
      }
      return c
    },
    close: function(a) {
      return this.__destroyed ? this.__destroyError() : this._close(null, a), this
    },
    content: function(a) {
      var b = this;
      if (void 0 === a) return b.__Content;
      if (b.__destroyed) b.__destroyError();
      else if (b.__contentSet(a), null !== b.__Content) {
        if ("closed" !== b.__state && (b.__contentInsert(), b.reposition(), b.__options.updateAnimation))
          if (h.hasTransitions) {
            var c = b.__options.updateAnimation;
            b._$tooltip.addClass("tooltipster-update-" + c), setTimeout(function() {
              "closed" != b.__state && b._$tooltip.removeClass("tooltipster-update-" + c)
            }, 1e3)
          } else b._$tooltip.fadeTo(200, .5, function() {
            "closed" != b.__state && b._$tooltip.fadeTo(200, 1)
          })
      } else b._close();
      return b
    },
    destroy: function() {
      var b = this;
      return b.__destroyed ? b.__destroyError() : b.__destroying || (b.__destroying = !0, b._close(null, function() {
        b._trigger("destroy"), b.__destroying = !1, b.__destroyed = !0, b._$origin.removeData(b.__namespace).off("." + b.__namespace + "-triggerOpen"), a("body").off("." + b.__namespace + "-triggerOpen");
        var c = b._$origin.data("tooltipster-ns");
        if (c)
          if (1 === c.length) {
            var d = null;
            "previous" == b.__options.restoration ? d = b._$origin.data("tooltipster-initialTitle") : "current" == b.__options.restoration && (d = "string" == typeof b.__Content ? b.__Content : a("<div></div>").append(b.__Content).html()), d && b._$origin.attr("title", d), b._$origin.removeClass("tooltipstered"), b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
          } else c = a.grep(c, function(a, c) {
            return a !== b.__namespace
          }), b._$origin.data("tooltipster-ns", c);
        b._trigger("destroyed"), b._off(), b.off(), b.__Content = null, b.__$emitterPrivate = null, b.__$emitterPublic = null, b.__options.parent = null, b._$origin = null, b._$tooltip = null, a.tooltipster.__instancesLatestArr = a.grep(a.tooltipster.__instancesLatestArr, function(a, c) {
          return b !== a
        }), clearInterval(b.__garbageCollector)
      })), b
    },
    disable: function() {
      return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this)
    },
    elementOrigin: function() {
      return this.__destroyed ? void this.__destroyError() : this._$origin[0]
    },
    elementTooltip: function() {
      return this._$tooltip ? this._$tooltip[0] : null
    },
    enable: function() {
      return this.__enabled = !0, this
    },
    hide: function(a) {
      return this.close(a)
    },
    instance: function() {
      return this
    },
    off: function() {
      return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    on: function() {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    one: function() {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    },
    open: function(a) {
      return this.__destroyed || this.__destroying ? this.__destroyError() : this._open(null, a), this
    },
    option: function(b, c) {
      return void 0 === c ? this.__options[b] : (this.__destroyed ? this.__destroyError() : (this.__options[b] = c, this.__optionsFormat(), a.inArray(b, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === b && this.__prepareGC()), this)
    },
    reposition: function(a, b) {
      var c = this;
      return c.__destroyed ? c.__destroyError() : (d(c._$tooltip) || b) && (b || c._$tooltip.detach(), c.__Geometry = c.__geometry(), c._trigger({
        type: "reposition",
        event: a,
        helper: {
          geo: c.__Geometry
        }
      })), c
    },
    show: function(a) {
      return this.open(a)
    },
    status: function() {
      return {
        destroyed: this.__destroyed,
        destroying: this.__destroying,
        enabled: this.__enabled,
        open: "closed" !== this.__state,
        state: this.__state
      }
    },
    triggerHandler: function() {
      return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
    }
  }, a.fn.tooltipster = function() {
    var b = Array.prototype.slice.apply(arguments),
      c = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
    if (0 === this.length) return this;
    if ("string" == typeof b[0]) {
      var d = "#*$~&";
      return this.each(function() {
        var e = a(this).data("tooltipster-ns"),
          f = e ? a(this).data(e[0]) : null;
        if (!f) throw new Error("You called Tooltipster's \"" + b[0] + '" method on an uninitialized element');
        if ("function" != typeof f[b[0]]) throw new Error('Unknown method "' + b[0] + '"');
        this.length > 1 && "content" == b[0] && (b[1] instanceof a || "object" == typeof b[1] && null != b[1] && b[1].tagName) && !f.__options.contentCloning && f.__options.debug && console.log(c);
        var g = f[b[0]](b[1], b[2]);
        return g !== f || "instance" === b[0] ? (d = g, !1) : void 0
      }), "#*$~&" !== d ? d : this
    }
    a.tooltipster.__instancesLatestArr = [];
    var e = b[0] && void 0 !== b[0].multiple,
      g = e && b[0].multiple || !e && f.multiple,
      h = b[0] && void 0 !== b[0].content,
      i = h && b[0].content || !h && f.content,
      j = b[0] && void 0 !== b[0].contentCloning,
      k = j && b[0].contentCloning || !j && f.contentCloning,
      l = b[0] && void 0 !== b[0].debug,
      m = l && b[0].debug || !l && f.debug;
    return this.length > 1 && (i instanceof a || "object" == typeof i && null != i && i.tagName) && !k && m && console.log(c), this.each(function() {
      var c = !1,
        d = a(this),
        e = d.data("tooltipster-ns"),
        f = null;
      e ? g ? c = !0 : m && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : c = !0, c && (f = new a.Tooltipster(this, b[0]), e || (e = []), e.push(f.__namespace), d.data("tooltipster-ns", e), d.data(f.__namespace, f), f.__options.functionInit && f.__options.functionInit.call(f, f, {
        origin: this
      }), f._trigger("init")), a.tooltipster.__instancesLatestArr.push(f)
    }), this
  }, b.prototype = {
    __init: function(b) {
      this.__$tooltip = b, this.__$tooltip.css({
        left: 0,
        overflow: "hidden",
        position: "absolute",
        top: 0
      }).find(".tooltipster-content").css("overflow", "auto"), this.$container = a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo("body")
    },
    __forceRedraw: function() {
      var a = this.__$tooltip.parent();
      this.__$tooltip.detach(), this.__$tooltip.appendTo(a)
    },
    constrain: function(a, b) {
      return this.constraints = {
        width: a,
        height: b
      }, this.__$tooltip.css({
        display: "block",
        height: "",
        overflow: "auto",
        width: a
      }), this
    },
    destroy: function() {
      this.__$tooltip.detach().find(".tooltipster-content").css({
        display: "",
        overflow: ""
      }), this.$container.remove()
    },
    free: function() {
      return this.constraints = null, this.__$tooltip.css({
        display: "",
        height: "",
        overflow: "visible",
        width: ""
      }), this
    },
    measure: function() {
      this.__forceRedraw();
      var a = this.__$tooltip[0].getBoundingClientRect(),
        b = {
          size: {
            height: a.height || a.bottom,
            width: a.width || a.right
          }
        };
      if (this.constraints) {
        var c = this.__$tooltip.find(".tooltipster-content"),
          d = this.__$tooltip.outerHeight(),
          e = c[0].getBoundingClientRect(),
          f = {
            height: d <= this.constraints.height,
            width: a.width <= this.constraints.width && e.width >= c[0].scrollWidth - 1
          };
        b.fits = f.height && f.width
      }
      return h.IE && h.IE <= 11 && (b.size.width = Math.ceil(b.size.width) + 1), b
    }
  };
  var j = navigator.userAgent.toLowerCase(); - 1 != j.indexOf("msie") ? h.IE = parseInt(j.split("msie")[1]) : -1 !== j.toLowerCase().indexOf("trident") && -1 !== j.indexOf(" rv:11") ? h.IE = 11 : -1 != j.toLowerCase().indexOf("edge/") && (h.IE = parseInt(j.toLowerCase().split("edge/")[1]));
  var k = "tooltipster.sideTip";
  return a.tooltipster._plugin({
    name: k,
    instance: {
      __defaults: function() {
        return {
          arrow: !0,
          distance: 6,
          functionPosition: null,
          maxWidth: null,
          minIntersection: 16,
          minWidth: 0,
          position: null,
          side: "top",
          viewportAware: !0
        }
      },
      __init: function(a) {
        var b = this;
        b.__instance = a, b.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), b.__previousState = "closed", b.__options, b.__optionsFormat(), b.__instance._on("state." + b.__namespace, function(a) {
          "closed" == a.state ? b.__close() : "appearing" == a.state && "closed" == b.__previousState && b.__create(), b.__previousState = a.state
        }), b.__instance._on("options." + b.__namespace, function() {
          b.__optionsFormat()
        }), b.__instance._on("reposition." + b.__namespace, function(a) {
          b.__reposition(a.event, a.helper)
        })
      },
      __close: function() {
        this.__instance.content() instanceof a && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
      },
      __create: function() {
        var b = a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
        this.__options.arrow || b.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && b.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && b.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = b, this.__instance._trigger("created")
      },
      __destroy: function() {
        this.__instance._off("." + self.__namespace)
      },
      __optionsFormat: function() {
        var b = this;
        if (b.__options = b.__instance._optionsExtract(k, b.__defaults()), b.__options.position && (b.__options.side = b.__options.position), "object" != typeof b.__options.distance && (b.__options.distance = [b.__options.distance]), b.__options.distance.length < 4 && (void 0 === b.__options.distance[1] && (b.__options.distance[1] = b.__options.distance[0]),
            void 0 === b.__options.distance[2] && (b.__options.distance[2] = b.__options.distance[0]), void 0 === b.__options.distance[3] && (b.__options.distance[3] = b.__options.distance[1]), b.__options.distance = {
              top: b.__options.distance[0],
              right: b.__options.distance[1],
              bottom: b.__options.distance[2],
              left: b.__options.distance[3]
            }), "string" == typeof b.__options.side) {
          var c = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          };
          b.__options.side = [b.__options.side, c[b.__options.side]], "left" == b.__options.side[0] || "right" == b.__options.side[0] ? b.__options.side.push("top", "bottom") : b.__options.side.push("right", "left")
        }
        6 === a.tooltipster._env.IE && b.__options.arrow !== !0 && (b.__options.arrow = !1)
      },
      __reposition: function(b, c) {
        var d, e = this,
          f = e.__targetFind(c),
          g = [];
        e.__instance._$tooltip.detach();
        var h = e.__instance._$tooltip.clone(),
          i = a.tooltipster._getRuler(h),
          j = !1;
        switch (a.each(["window", "document"], function(d, k) {
          var l = null;
          if (e.__instance._trigger({
              container: k,
              helper: c,
              satisfied: j,
              takeTest: function(a) {
                l = a
              },
              results: g,
              type: "positionTest"
            }), 1 == l || 0 != l && 0 == j && ("window" != k || e.__options.viewportAware))
            for (var d = 0; d < e.__options.side.length; d++) {
              var m = {
                  horizontal: 0,
                  vertical: 0
                },
                n = e.__options.side[d];
              "top" == n || "bottom" == n ? m.vertical = e.__options.distance[n] : m.horizontal = e.__options.distance[n], e.__sideChange(h, n), a.each(["natural", "constrained"], function(a, d) {
                if (l = null, e.__instance._trigger({
                    container: k,
                    event: b,
                    helper: c,
                    mode: d,
                    results: g,
                    satisfied: j,
                    side: n,
                    takeTest: function(a) {
                      l = a
                    },
                    type: "positionTest"
                  }), 1 == l || 0 != l && 0 == j) {
                  var h = {
                      container: k,
                      distance: m,
                      fits: null,
                      mode: d,
                      outerSize: null,
                      side: n,
                      size: null,
                      target: f[n],
                      whole: null
                    },
                    o = "natural" == d ? i.free() : i.constrain(c.geo.available[k][n].width - m.horizontal, c.geo.available[k][n].height - m.vertical),
                    p = o.measure();
                  if (h.size = p.size, h.outerSize = {
                      height: p.size.height + m.vertical,
                      width: p.size.width + m.horizontal
                    }, "natural" == d ? c.geo.available[k][n].width >= h.outerSize.width && c.geo.available[k][n].height >= h.outerSize.height ? h.fits = !0 : h.fits = !1 : h.fits = p.fits, "window" == k && (h.fits ? "top" == n || "bottom" == n ? h.whole = c.geo.origin.windowOffset.right >= e.__options.minIntersection && c.geo.window.size.width - c.geo.origin.windowOffset.left >= e.__options.minIntersection : h.whole = c.geo.origin.windowOffset.bottom >= e.__options.minIntersection && c.geo.window.size.height - c.geo.origin.windowOffset.top >= e.__options.minIntersection : h.whole = !1), g.push(h), h.whole) j = !0;
                  else if ("natural" == h.mode && (h.fits || h.size.width <= c.geo.available[k][n].width)) return !1
                }
              })
            }
        }), e.__instance._trigger({
          edit: function(a) {
            g = a
          },
          event: b,
          helper: c,
          results: g,
          type: "positionTested"
        }), g.sort(function(a, b) {
          if (a.whole && !b.whole) return -1;
          if (!a.whole && b.whole) return 1;
          if (a.whole && b.whole) {
            var c = e.__options.side.indexOf(a.side),
              d = e.__options.side.indexOf(b.side);
            return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1
          }
          if (a.fits && !b.fits) return -1;
          if (!a.fits && b.fits) return 1;
          if (a.fits && b.fits) {
            var c = e.__options.side.indexOf(a.side),
              d = e.__options.side.indexOf(b.side);
            return d > c ? -1 : c > d ? 1 : "natural" == a.mode ? -1 : 1
          }
          return "document" == a.container && "bottom" == a.side && "natural" == a.mode ? -1 : 1
        }), d = g[0], d.coord = {}, d.side) {
          case "left":
          case "right":
            d.coord.top = Math.floor(d.target - d.size.height / 2);
            break;
          case "bottom":
          case "top":
            d.coord.left = Math.floor(d.target - d.size.width / 2)
        }
        switch (d.side) {
          case "left":
            d.coord.left = c.geo.origin.windowOffset.left - d.outerSize.width;
            break;
          case "right":
            d.coord.left = c.geo.origin.windowOffset.right + d.distance.horizontal;
            break;
          case "top":
            d.coord.top = c.geo.origin.windowOffset.top - d.outerSize.height;
            break;
          case "bottom":
            d.coord.top = c.geo.origin.windowOffset.bottom + d.distance.vertical
        }
        "window" == d.container ? "top" == d.side || "bottom" == d.side ? d.coord.left < 0 ? c.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? d.coord.left = 0 : d.coord.left = c.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : d.coord.left > c.geo.window.size.width - d.size.width && (c.geo.origin.windowOffset.left + this.__options.minIntersection <= c.geo.window.size.width ? d.coord.left = c.geo.window.size.width - d.size.width : d.coord.left = c.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - d.size.width) : d.coord.top < 0 ? c.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? d.coord.top = 0 : d.coord.top = c.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : d.coord.top > c.geo.window.size.height - d.size.height && (c.geo.origin.windowOffset.top + this.__options.minIntersection <= c.geo.window.size.height ? d.coord.top = c.geo.window.size.height - d.size.height : d.coord.top = c.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - d.size.height) : (d.coord.left > c.geo.window.size.width - d.size.width && (d.coord.left = c.geo.window.size.width - d.size.width), d.coord.left < 0 && (d.coord.left = 0)), e.__sideChange(h, d.side), c.tooltipClone = h[0], c.tooltipParent = e.__instance.option("parent").parent[0], c.mode = d.mode, c.whole = d.whole, c.origin = e.__instance._$origin[0], c.tooltip = e.__instance._$tooltip[0], delete d.container, delete d.fits, delete d.mode, delete d.outerSize, delete d.whole, d.distance = d.distance.horizontal || d.distance.vertical;
        var k = a.extend(!0, {}, d);
        if (e.__instance._trigger({
            edit: function(a) {
              d = a
            },
            event: b,
            helper: c,
            position: k,
            type: "position"
          }), e.__options.functionPosition) {
          var l = e.__options.functionPosition.call(e, e.__instance, c, k);
          l && (d = l)
        }
        i.destroy();
        var m, n;
        "top" == d.side || "bottom" == d.side ? (m = {
          prop: "left",
          val: d.target - d.coord.left
        }, n = d.size.width - this.__options.minIntersection) : (m = {
          prop: "top",
          val: d.target - d.coord.top
        }, n = d.size.height - this.__options.minIntersection), m.val < this.__options.minIntersection ? m.val = this.__options.minIntersection : m.val > n && (m.val = n);
        var o;
        o = c.geo.origin.fixedLineage ? c.geo.origin.windowOffset : {
          left: c.geo.origin.windowOffset.left + c.geo.window.scroll.left,
          top: c.geo.origin.windowOffset.top + c.geo.window.scroll.top
        }, d.coord = {
          left: o.left + (d.coord.left - c.geo.origin.windowOffset.left),
          top: o.top + (d.coord.top - c.geo.origin.windowOffset.top)
        }, e.__sideChange(e.__instance._$tooltip, d.side), c.geo.origin.fixedLineage ? e.__instance._$tooltip.css("position", "fixed") : e.__instance._$tooltip.css("position", ""), e.__instance._$tooltip.css({
          left: d.coord.left,
          top: d.coord.top,
          height: d.size.height,
          width: d.size.width
        }).find(".tooltipster-arrow").css({
          left: "",
          top: ""
        }).css(m.prop, m.val), e.__instance._$tooltip.appendTo(e.__instance.option("parent")), e.__instance._trigger({
          type: "repositioned",
          event: b,
          position: d
        })
      },
      __sideChange: function(a, b) {
        a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + b)
      },
      __targetFind: function(a) {
        var b = {},
          c = this.__instance._$origin[0].getClientRects();
        if (c.length > 1) {
          var d = this.__instance._$origin.css("opacity");
          1 == d && (this.__instance._$origin.css("opacity", .99), c = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1))
        }
        if (c.length < 2) b.top = Math.floor(a.geo.origin.windowOffset.left + a.geo.origin.size.width / 2), b.bottom = b.top, b.left = Math.floor(a.geo.origin.windowOffset.top + a.geo.origin.size.height / 2), b.right = b.left;
        else {
          var e = c[0];
          b.top = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil(c.length / 2) - 1] : c[0], b.right = Math.floor(e.top + (e.bottom - e.top) / 2), e = c[c.length - 1], b.bottom = Math.floor(e.left + (e.right - e.left) / 2), e = c.length > 2 ? c[Math.ceil((c.length + 1) / 2) - 1] : c[c.length - 1], b.left = Math.floor(e.top + (e.bottom - e.top) / 2)
        }
        return b
      }
    }
  }), a
});

$(document).ready(function() {
  ! function(bootstro, $, undefined) {
    function is_entirely_visible($elem) {
      var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $elem.offset().top,
        elemBottom = elemTop + $elem.height();
      return elemBottom >= docViewTop && docViewBottom >= elemTop && docViewBottom >= elemBottom && elemTop >= docViewTop
    }

    function add_nav_btn(content, i) {
      var nextButton, prevButton, finishButton, defaultBtnClass, $el = get_element(i);
      return defaultBtnClass = 2 == bootstrapVersion ? "btn btn-primary btn-mini" : "btn btn-primary btn-xs", content += "<div class='bootstro-nav-wrapper'>", nextButton = $el.attr("data-bootstro-nextButton") ? $el.attr("data-bootstro-nextButton") : $el.attr("data-bootstro-nextButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-next-btn">' + $el.attr("data-bootstro-nextButtonText") + "</button>" : "undefined" != typeof settings.nextButton ? settings.nextButton : '<button class="' + defaultBtnClass + ' bootstro-next-btn">' + settings.nextButtonText + "</button>", prevButton = $el.attr("data-bootstro-prevButton") ? $el.attr("data-bootstro-prevButton") : $el.attr("data-bootstro-prevButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-prev-btn">' + $el.attr("data-bootstro-prevButtonText") + "</button>" : "undefined" != typeof settings.prevButton ? settings.prevButton : '<button class="' + defaultBtnClass + ' bootstro-prev-btn">' + settings.prevButtonText + "</button>", finishButton = $el.attr("data-bootstro-finishButton") ? $el.attr("data-bootstro-finishButton") : $el.attr("data-bootstro-finishButtonText") ? '<button class="' + defaultBtnClass + ' bootstro-finish-btn">' + $el.attr("data-bootstro-finishButtonText") + "</button>" : "undefined" != typeof settings.finishButton ? settings.finishButton : '<button class="' + defaultBtnClass + ' bootstro-finish-btn">' + settings.finishButtonText + "</button>", 1 != count && (0 == i ? content += nextButton : i == count - 1 ? content += prevButton : content = content + nextButton + prevButton), content += "</div>", content = content + '<div class="bootstro-finish-btn-wrapper">' + finishButton + "</div>"
    }
    var $elements, count, settings, activeIndex = null,
      bootstrapVersion = 3,
      defaults = {
        nextButtonText: "Next &raquo;",
        prevButtonText: "&laquo; Prev",
        finishButtonText: '<i class="icon-ok"></i> Great, thanks for the info!',
        stopOnBackdropClick: !0,
        stopOnEsc: !0,
        onExit: function(params) {
          $.get("/cp/account/api/action/disableDashboardWalkthrough/ajax/1")
        },
        margin: 100
      };
    process_items = function(popover) {
      var selectorArr = [];
      return $.each(popover, function(t, e) {
        $.each(e, function(j, attr) {
          $(e.selector).attr("data-bootstro-" + j, attr)
        }), $(e.selector).is(":visible") && selectorArr.push(e.selector)
      }), selectorArr.join(",")
    }, get_element = function(i) {
      return $elements.filter("[data-bootstro-step=" + i + "]").size() > 0 ? $elements.filter("[data-bootstro-step=" + i + "]") : $elements.eq(i)
    }, get_popup = function(i) {
      var p = {},
        $el = get_element(i),
        t = "";
      count > 1 && (t = "<span class='label label-success'>" + (i + 1) + "/" + count + "</span>"), p.title = $el.attr("data-bootstro-title") || "", "" != p.title && "" != t ? p.title = t + " - " + p.title : "" == p.title && (p.title = t), p.content = $el.attr("data-bootstro-content") || "", p.content = add_nav_btn(p.content, i), p.placement = $el.attr("data-bootstro-placement") || "top";
      var style = "";
      return $el.attr("data-bootstro-width") && (p.width = $el.attr("data-bootstro-width"), style = style + "width:" + $el.attr("data-bootstro-width") + ";"), $el.attr("data-bootstro-height") && (p.height = $el.attr("data-bootstro-height"), style = style + "height:" + $el.attr("data-bootstro-height") + ";"), p.trigger = "manual", p.html = $el.attr("data-bootstro-html") || "top", $el.attr("data-bootstro-container") && (p.container = $el.attr("data-bootstro-container")), p.template = '<div class="popover" style="' + style + '"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>', p
    }, bootstro.destroy_popover = function(i) {
      var i = i || 0;
      if ("all" != i) {
        var $el = get_element(i);
        $el.popover("destroy").removeClass("bootstro-highlight")
      }
    }, bootstro.stop = function() {
      bootstro.destroy_popover(activeIndex), bootstro.unbind(), $("div.bootstro-backdrop").remove(), "function" == typeof settings.onExit && settings.onExit.call(this, {
        idx: activeIndex
      })
    }, bootstro.go_to = function(idx) {
      if (bootstro.destroy_popover(activeIndex), 0 != count) {
        var p = get_popup(idx),
          $el = get_element(idx);
        $el.popover(p).popover("show");
        var docviewTop = $(window).scrollTop(),
          top = Math.min($(".popover.in").offset().top, $el.offset().top),
          topDistance = top - docviewTop;
        topDistance < settings.margin ? $("html,body").animate({
          scrollTop: top - settings.margin
        }, "slow") : is_entirely_visible($(".popover.in")) && is_entirely_visible($el) || $("html,body").animate({
          scrollTop: top - settings.margin
        }, "slow"), $el.addClass("bootstro-highlight"), activeIndex = idx
      }
    }, bootstro.next = function() {
      activeIndex + 1 == count ? "function" == typeof settings.onComplete && settings.onComplete.call(this, {
        idx: activeIndex
      }) : (bootstro.go_to(activeIndex + 1), "function" == typeof settings.onStep && settings.onStep.call(this, {
        idx: activeIndex,
        direction: "next"
      }))
    }, bootstro.prev = function() {
      0 == activeIndex || (bootstro.go_to(activeIndex - 1), "function" == typeof settings.onStep && settings.onStep.call(this, {
        idx: activeIndex,
        direction: "prev"
      }))
    }, bootstro._start = function(selector) {
      selector = selector || ".bootstro", $elements = $(selector), count = $elements.size(), count > 0 && 0 === $("div.bootstro-backdrop").length && ($('<div class="bootstro-backdrop"></div>').appendTo("body"), bootstro.bind(), bootstro.go_to(0))
    }, bootstro.start = function(selector, options) {
      settings = $.extend(!0, {}, defaults), $.extend(settings, options || {}), "undefined" != typeof settings.url ? $.ajax({
        url: settings.url,
        success: function(data) {
          if (data.success) {
            var popover = data.result;
            selector = process_items(popover), bootstro._start(selector)
          }
        }
      }) : "undefined" != typeof settings.items ? bootstro._start(process_items(settings.items)) : bootstro._start(selector)
    }, bootstro.set_bootstrap_version = function(ver) {
      bootstrapVersion = ver
    }, bootstro.bind = function() {
      bootstro.unbind(), $("html").on("click.bootstro", ".bootstro-next-btn", function(e) {
        return bootstro.next(), e.preventDefault(), !1
      }), $("html").on("click.bootstro", ".bootstro-prev-btn", function(e) {
        return bootstro.prev(), e.preventDefault(), !1
      }), $("html").on("click.bootstro", ".bootstro-finish-btn", function(e) {
        e.preventDefault(), bootstro.stop()
      }), settings.stopOnBackdropClick && $("html").on("click.bootstro", "div.bootstro-backdrop", function(e) {
        $(e.target).hasClass("bootstro-backdrop") && bootstro.stop()
      }), $(document).on("keydown.bootstro", function(e) {
        var code = e.keyCode ? e.keyCode : e.which;
        39 == code || 40 == code ? bootstro.next() : 37 == code || 38 == code ? bootstro.prev() : 27 == code && settings.stopOnEsc && bootstro.stop()
      })
    }, bootstro.unbind = function() {
      $("html").unbind("click.bootstro"), $(document).unbind("keydown.bootstro")
    }
  }(window.bootstro = window.bootstro || {}, jQuery)
});

! function(global, factory) {
  "object" == typeof exports && exports && "string" != typeof exports.nodeName ? factory(exports) : "function" == typeof define && define.amd ? define(["exports"], factory) : (global.Mustache = {}, factory(global.Mustache))
}(this, function(mustache) {
  function isFunction(object) {
    return "function" == typeof object
  }

  function typeStr(obj) {
    return isArray(obj) ? "array" : typeof obj
  }

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
  }

  function hasProperty(obj, propName) {
    return null != obj && "object" == typeof obj && propName in obj
  }

  function testRegExp(re, string) {
    return regExpTest.call(re, string)
  }

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string)
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function(s) {
      return entityMap[s]
    })
  }

  function parseTemplate(template, tags) {
    function stripSpace() {
      if (hasTag && !nonSpace)
        for (; spaces.length;) delete tokens[spaces.pop()];
      else spaces = [];
      hasTag = !1, nonSpace = !1
    }

    function compileTags(tagsToCompile) {
      if ("string" == typeof tagsToCompile && (tagsToCompile = tagsToCompile.split(spaceRe, 2)), !isArray(tagsToCompile) || 2 !== tagsToCompile.length) throw new Error("Invalid tags: " + tagsToCompile);
      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*"), closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1])), closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
    }
    if (!template) return [];
    var openingTagRe, closingTagRe, closingCurlyRe, sections = [],
      tokens = [],
      spaces = [],
      hasTag = !1,
      nonSpace = !1;
    compileTags(tags || mustache.tags);
    for (var start, type, value, chr, token, openSection, scanner = new Scanner(template); !scanner.eos();) {
      if (start = scanner.pos, value = scanner.scanUntil(openingTagRe))
        for (var i = 0, valueLength = value.length; valueLength > i; ++i) chr = value.charAt(i), isWhitespace(chr) ? spaces.push(tokens.length) : nonSpace = !0, tokens.push(["text", chr, start, start + 1]), start += 1, "\n" === chr && stripSpace();
      if (!scanner.scan(openingTagRe)) break;
      if (hasTag = !0, type = scanner.scan(tagRe) || "name", scanner.scan(whiteRe), "=" === type ? (value = scanner.scanUntil(equalsRe), scanner.scan(equalsRe), scanner.scanUntil(closingTagRe)) : "{" === type ? (value = scanner.scanUntil(closingCurlyRe), scanner.scan(curlyRe), scanner.scanUntil(closingTagRe), type = "&") : value = scanner.scanUntil(closingTagRe), !scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);
      if (token = [type, value, start, scanner.pos], tokens.push(token), "#" === type || "^" === type) sections.push(token);
      else if ("/" === type) {
        if (openSection = sections.pop(), !openSection) throw new Error('Unopened section "' + value + '" at ' + start);
        if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
      } else "name" === type || "{" === type || "&" === type ? nonSpace = !0 : "=" === type && compileTags(value)
    }
    if (openSection = sections.pop()) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    return nestTokens(squashTokens(tokens))
  }

  function squashTokens(tokens) {
    for (var token, lastToken, squashedTokens = [], i = 0, numTokens = tokens.length; numTokens > i; ++i) token = tokens[i], token && ("text" === token[0] && lastToken && "text" === lastToken[0] ? (lastToken[1] += token[1], lastToken[3] = token[3]) : (squashedTokens.push(token), lastToken = token));
    return squashedTokens
  }

  function nestTokens(tokens) {
    for (var token, section, nestedTokens = [], collector = nestedTokens, sections = [], i = 0, numTokens = tokens.length; numTokens > i; ++i) switch (token = tokens[i], token[0]) {
      case "#":
      case "^":
        collector.push(token), sections.push(token), collector = token[4] = [];
        break;
      case "/":
        section = sections.pop(), section[5] = token[2], collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token)
    }
    return nestedTokens
  }

  function Scanner(string) {
    this.string = string, this.tail = string, this.pos = 0
  }

  function Context(view, parentContext) {
    this.view = view, this.cache = {
      ".": this.view
    }, this.parent = parentContext
  }

  function Writer() {
    this.cache = {}
  }
  var objectToString = Object.prototype.toString,
    isArray = Array.isArray || function(object) {
      return "[object Array]" === objectToString.call(object)
    },
    regExpTest = RegExp.prototype.test,
    nonSpaceRe = /\S/,
    entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    },
    whiteRe = /\s*/,
    spaceRe = /\s+/,
    equalsRe = /\s*=/,
    curlyRe = /\s*\}/,
    tagRe = /#|\^|\/|>|\{|&|=|!/;
  Scanner.prototype.eos = function() {
    return "" === this.tail
  }, Scanner.prototype.scan = function(re) {
    var match = this.tail.match(re);
    if (!match || 0 !== match.index) return "";
    var string = match[0];
    return this.tail = this.tail.substring(string.length), this.pos += string.length, string
  }, Scanner.prototype.scanUntil = function(re) {
    var match, index = this.tail.search(re);
    switch (index) {
      case -1:
        match = this.tail, this.tail = "";
        break;
      case 0:
        match = "";
        break;
      default:
        match = this.tail.substring(0, index), this.tail = this.tail.substring(index)
    }
    return this.pos += match.length, match
  }, Context.prototype.push = function(view) {
    return new Context(view, this)
  }, Context.prototype.lookup = function(name) {
    var value, cache = this.cache;
    if (cache.hasOwnProperty(name)) value = cache[name];
    else {
      for (var names, index, context = this, lookupHit = !1; context;) {
        if (name.indexOf(".") > 0)
          for (value = context.view, names = name.split("."), index = 0; null != value && index < names.length;) index === names.length - 1 && (lookupHit = hasProperty(value, names[index])), value = value[names[index++]];
        else value = context.view[name], lookupHit = hasProperty(context.view, name);
        if (lookupHit) break;
        context = context.parent
      }
      cache[name] = value
    }
    return isFunction(value) && (value = value.call(this.view)), value
  }, Writer.prototype.clearCache = function() {
    this.cache = {}
  }, Writer.prototype.parse = function(template, tags) {
    var cache = this.cache,
      tokens = cache[template];
    return null == tokens && (tokens = cache[template] = parseTemplate(template, tags)), tokens
  }, Writer.prototype.render = function(template, view, partials) {
    var tokens = this.parse(template),
      context = view instanceof Context ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template)
  }, Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
    for (var token, symbol, value, buffer = "", i = 0, numTokens = tokens.length; numTokens > i; ++i) value = void 0, token = tokens[i], symbol = token[0], "#" === symbol ? value = this.renderSection(token, context, partials, originalTemplate) : "^" === symbol ? value = this.renderInverted(token, context, partials, originalTemplate) : ">" === symbol ? value = this.renderPartial(token, context, partials, originalTemplate) : "&" === symbol ? value = this.unescapedValue(token, context) : "name" === symbol ? value = this.escapedValue(token, context) : "text" === symbol && (value = this.rawValue(token)), void 0 !== value && (buffer += value);
    return buffer
  }, Writer.prototype.renderSection = function(token, context, partials, originalTemplate) {
    function subRender(template) {
      return self.render(template, context, partials)
    }
    var self = this,
      buffer = "",
      value = context.lookup(token[1]);
    if (value) {
      if (isArray(value))
        for (var j = 0, valueLength = value.length; valueLength > j; ++j) buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      else if ("object" == typeof value || "string" == typeof value || "number" == typeof value) buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
      else if (isFunction(value)) {
        if ("string" != typeof originalTemplate) throw new Error("Cannot use higher-order sections without the original template");
        value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender), null != value && (buffer += value)
      } else buffer += this.renderTokens(token[4], context, partials, originalTemplate);
      return buffer
    }
  }, Writer.prototype.renderInverted = function(token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);
    return !value || isArray(value) && 0 === value.length ? this.renderTokens(token[4], context, partials, originalTemplate) : void 0
  }, Writer.prototype.renderPartial = function(token, context, partials) {
    if (partials) {
      var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
      return null != value ? this.renderTokens(this.parse(value), context, partials, value) : void 0
    }
  }, Writer.prototype.unescapedValue = function(token, context) {
    var value = context.lookup(token[1]);
    return null != value ? value : void 0
  }, Writer.prototype.escapedValue = function(token, context) {
    var value = context.lookup(token[1]);
    return null != value ? mustache.escape(value) : void 0
  }, Writer.prototype.rawValue = function(token) {
    return token[1]
  }, mustache.name = "mustache.js", mustache.version = "2.2.1", mustache.tags = ["{{", "}}"];
  var defaultWriter = new Writer;
  mustache.clearCache = function() {
    return defaultWriter.clearCache()
  }, mustache.parse = function(template, tags) {
    return defaultWriter.parse(template, tags)
  }, mustache.render = function(template, view, partials) {
    if ("string" != typeof template) throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
    return defaultWriter.render(template, view, partials)
  }, mustache.to_html = function(template, view, partials, send) {
    var result = mustache.render(template, view, partials);
    return isFunction(send) ? void send(result) : result
  }, mustache.escape = escapeHtml, mustache.Scanner = Scanner, mustache.Context = Context, mustache.Writer = Writer
});
