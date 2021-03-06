! function(e, t) {
  function i(t, n) {
    var r, i, o, u = t.nodeName.toLowerCase();
    return "area" === u ? (r = t.parentNode, i = r.name, t.href && i && "map" === r.nodeName.toLowerCase() ? (o = e("img[usemap=#" + i + "]")[0], !!o && s(o)) : !1) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
  }

  function s(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility")
    }).length
  }
  var n = 0,
    r = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
    version: "1.10.0",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    _focus: e.fn.focus,
    focus: function(t, n) {
      return "number" == typeof t ? this.each(function() {
        var r = this;
        setTimeout(function() {
          e(r).focus(), n && n.call(r)
        }, t)
      }) : this._focus.apply(this, arguments)
    },
    scrollParent: function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0) : this.parents().filter(function() {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    },
    zIndex: function(n) {
      if (n !== t) return this.css("zIndex", n);
      if (this.length)
        for (var i, s, r = e(this[0]); r.length && r[0] !== document;) {
          if (i = r.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(r.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
          r = r.parent()
        }
      return 0
    },
    uniqueId: function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++n)
      })
    },
    removeUniqueId: function() {
      return this.each(function() {
        r.test(this.id) && e(this).removeAttr("id")
      })
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(n) {
        return !!e.data(n, t)
      }
    }) : function(t, n, r) {
      return !!e.data(t, r[3])
    },
    focusable: function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")))
    },
    tabbable: function(t) {
      var n = e.attr(t, "tabindex"),
        r = isNaN(n);
      return (r || n >= 0) && i(t, !r)
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
    function u(t, n, r, s) {
      return e.each(i, function() {
        n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
      }), n
    }
    var i = "Width" === r ? ["Left", "Right"] : ["Top", "Bottom"],
      s = r.toLowerCase(),
      o = {
        innerWidth: e.fn.innerWidth,
        innerHeight: e.fn.innerHeight,
        outerWidth: e.fn.outerWidth,
        outerHeight: e.fn.outerHeight
      };
    e.fn["inner" + r] = function(n) {
      return n === t ? o["inner" + r].call(this) : this.each(function() {
        e(this).css(s, u(this, n) + "px")
      })
    }, e.fn["outer" + r] = function(t, n) {
      return "number" != typeof t ? o["outer" + r].call(this, t) : this.each(function() {
        e(this).css(s, u(this, t, !0, n) + "px")
      })
    }
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
    return function(n) {
      return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
    }
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault()
      })
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function(t, n, r) {
        var i, s = e.ui[t].prototype;
        for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
      },
      call: function(e, t, n) {
        var r, i = e.plugins[t];
        if (i && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
          for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
      }
    },
    hasScroll: function(t, n) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var r = n && "left" === n ? "scrollLeft" : "scrollTop",
        i = !1;
      return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
    }
  }))
}(jQuery),
function(e, t) {
  var n = 0,
    r = Array.prototype.slice,
    i = e.cleanData;
  e.cleanData = function(t) {
    for (var r, n = 0; null != (r = t[n]); n++) try {
      e(r).triggerHandler("remove")
    } catch (s) {}
    i(t)
  }, e.widget = function(t, n, r) {
    var i, s, o, u, a = {},
      f = t.split(".")[0];
    t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
      return !!e.data(t, i)
    }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
      return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
    }, e.extend(o, s, {
      version: r.version,
      _proto: e.extend({}, r),
      _childConstructors: []
    }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
      return e.isFunction(r) ? void(a[t] = function() {
        var e = function() {
            return n.prototype[t].apply(this, arguments)
          },
          i = function(e) {
            return n.prototype[t].apply(this, e)
          };
        return function() {
          var s, t = this._super,
            n = this._superApply;
          return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
        }
      }()) : void(a[t] = r)
    }), o.prototype = e.widget.extend(u, {
      widgetEventPrefix: s ? u.widgetEventPrefix : t
    }, a, {
      constructor: o,
      namespace: f,
      widgetName: t,
      widgetFullName: i
    }), s ? (e.each(s._childConstructors, function(t, n) {
      var r = n.prototype;
      e.widget(r.namespace + "." + r.widgetName, o, n._proto)
    }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
  }, e.widget.extend = function(n) {
    for (var u, a, i = r.call(arguments, 1), s = 0, o = i.length; o > s; s++)
      for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
    return n
  }, e.widget.bridge = function(n, i) {
    var s = i.prototype.widgetFullName || n;
    e.fn[n] = function(o) {
      var u = "string" == typeof o,
        a = r.call(arguments, 1),
        f = this;
      return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
        var r, i = e.data(this, s);
        return i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (r = i[o].apply(i, a), r !== i && r !== t ? (f = r && r.jquery ? f.pushStack(r.get()) : r, !1) : void 0) : e.error("no such method '" + o + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + o + "'")
      }) : this.each(function() {
        var t = e.data(this, s);
        t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
      }), f
    }
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(t, r) {
      r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(e) {
          e.target === r && this.destroy()
        }
      }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: e.noop,
    widget: function() {
      return this.element
    },
    option: function(n, r) {
      var s, o, u, i = n;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof n)
        if (i = {}, s = n.split("."), n = s.shift(), s.length) {
          for (o = i[n] = e.widget.extend({}, this.options[n]), u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
          if (n = s.pop(), r === t) return o[n] === t ? null : o[n];
          o[n] = r
        } else {
          if (r === t) return this.options[n] === t ? null : this.options[n];
          i[n] = r
        } return this._setOptions(i), this
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this
    },
    _setOption: function(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    },
    enable: function() {
      return this._setOption("disabled", !1)
    },
    disable: function() {
      return this._setOption("disabled", !0)
    },
    _on: function(t, n, r) {
      var i, s = this;
      "boolean" != typeof t && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
        function u() {
          return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
        }
        "string" != typeof o && (u.guid = o.guid = o.guid || u.guid || e.guid++);
        var a = r.match(/^(\w+)\s*(.*)$/),
          f = a[1] + s.eventNamespace,
          l = a[2];
        l ? i.delegate(l, f, u) : n.bind(f, u)
      })
    },
    _off: function(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    },
    _delay: function(e, t) {
      function n() {
        return ("string" == typeof e ? r[e] : e).apply(r, arguments)
      }
      var r = this;
      return setTimeout(n, t || 0)
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(t, n, r) {
      var i, s, o = this.options[t];
      if (r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent, s)
        for (i in s) i in n || (n[i] = s[i]);
      return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, n) {
    e.Widget.prototype["_" + t] = function(r, i, s) {
      "string" == typeof i && (i = {
        effect: i
      });
      var o, u = i ? i === !0 || "number" == typeof i ? n : i.effect || n : t;
      i = i || {}, "number" == typeof i && (i = {
        duration: i
      }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
        e(this)[t](), s && s.call(r[0]), n()
      })
    }
  })
}(jQuery),
function(e, t) {
  var n = !1;
  e(document).mouseup(function() {
    n = !1
  }), e.widget("ui.mouse", {
    version: "1.10.0",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e)
      }).bind("click." + this.widgetName, function(n) {
        return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(t) {
      if (!n) {
        this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var r = this,
          i = 1 === t.which,
          s = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          r.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
          return r._mouseMove(e)
        }, this._mouseUpDelegate = function(e) {
          return r._mouseUp(e)
        }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0)) : !0
      }
    },
    _mouseMove: function(t) {
      return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
    },
    _mouseUp: function(t) {
      return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  })
}(jQuery),
function(e, t) {
  function h(e, t, n) {
    return [parseInt(e[0], 10) * (l.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (l.test(e[1]) ? n / 100 : 1)]
  }

  function p(t, n) {
    return parseInt(e.css(t, n), 10) || 0
  }

  function d(t) {
    var n = t[0];
    return 9 === n.nodeType ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: 0,
        left: 0
      }
    } : e.isWindow(n) ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: t.scrollTop(),
        left: t.scrollLeft()
      }
    } : n.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
        top: n.pageY,
        left: n.pageX
      }
    } : {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
    }
  }
  e.ui = e.ui || {};
  var n, r = Math.max,
    i = Math.abs,
    s = Math.round,
    o = /left|center|right/,
    u = /top|center|bottom/,
    a = /[\+\-]\d+%?/,
    f = /^\w+/,
    l = /%$/,
    c = e.fn.position;
  e.position = {
      scrollbarWidth: function() {
        if (n !== t) return n;
        var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
          o = s.children()[0];
        return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
      },
      getScrollInfo: function(t) {
        var n = t.isWindow ? "" : t.element.css("overflow-x"),
          r = t.isWindow ? "" : t.element.css("overflow-y"),
          i = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
          s = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
        return {
          width: i ? e.position.scrollbarWidth() : 0,
          height: s ? e.position.scrollbarWidth() : 0
        }
      },
      getWithinInfo: function(t) {
        var n = e(t || window),
          r = e.isWindow(n[0]);
        return {
          element: n,
          isWindow: r,
          offset: n.offset() || {
            left: 0,
            top: 0
          },
          scrollLeft: n.scrollLeft(),
          scrollTop: n.scrollTop(),
          width: r ? n.width() : n.outerWidth(),
          height: r ? n.height() : n.outerHeight()
        }
      }
    }, e.fn.position = function(t) {
      if (!t || !t.of) return c.apply(this, arguments);
      t = e.extend({}, t);
      var n, l, v, m, g, y, b = e(t.of),
        w = e.position.getWithinInfo(t.within),
        E = e.position.getScrollInfo(w),
        S = (t.collision || "flip").split(" "),
        x = {};
      return y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
        var n, r, e = (t[this] || "").split(" ");
        1 === e.length && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
      }), 1 === S.length && (S[1] = S[0]), "right" === t.at[0] ? g.left += l : "center" === t.at[0] && (g.left += l / 2), "bottom" === t.at[1] ? g.top += v : "center" === t.at[1] && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function() {
        var o, u, a = e(this),
          f = a.outerWidth(),
          c = a.outerHeight(),
          d = p(this, "marginLeft"),
          y = p(this, "marginTop"),
          T = f + d + p(this, "marginRight") + E.width,
          N = c + y + p(this, "marginBottom") + E.height,
          C = e.extend({}, g),
          k = h(x.my, a.outerWidth(), a.outerHeight());
        "right" === t.my[0] ? C.left -= f : "center" === t.my[0] && (C.left -= f / 2), "bottom" === t.my[1] ? C.top -= c : "center" === t.my[1] && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
          marginLeft: d,
          marginTop: y
        }, e.each(["left", "top"], function(r, i) {
          e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
            targetWidth: l,
            targetHeight: v,
            elemWidth: f,
            elemHeight: c,
            collisionPosition: o,
            collisionWidth: T,
            collisionHeight: N,
            offset: [n[0] + k[0], n[1] + k[1]],
            my: t.my,
            at: t.at,
            within: w,
            elem: a
          })
        }), t.using && (u = function(e) {
          var n = m.left - C.left,
            s = n + l - f,
            o = m.top - C.top,
            u = o + v - c,
            h = {
              target: {
                element: b,
                left: m.left,
                top: m.top,
                width: l,
                height: v
              },
              element: {
                element: a,
                left: C.left,
                top: C.top,
                width: f,
                height: c
              },
              horizontal: 0 > s ? "left" : n > 0 ? "right" : "center",
              vertical: 0 > u ? "top" : o > 0 ? "bottom" : "middle"
            };
          f > l && i(n + s) < l && (h.horizontal = "center"), c > v && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
        }), a.offset(e.extend(C, {
          using: u
        }))
      })
    }, e.ui.position = {
      fit: {
        left: function(e, t) {
          var f, n = t.within,
            i = n.isWindow ? n.scrollLeft : n.offset.left,
            s = n.width,
            o = e.left - t.collisionPosition.marginLeft,
            u = i - o,
            a = o + t.collisionWidth - s - i;
          t.collisionWidth > s ? u > 0 && 0 >= a ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && 0 >= u ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
        },
        top: function(e, t) {
          var f, n = t.within,
            i = n.isWindow ? n.scrollTop : n.offset.top,
            s = t.within.height,
            o = e.top - t.collisionPosition.marginTop,
            u = i - o,
            a = o + t.collisionHeight - s - i;
          t.collisionHeight > s ? u > 0 && 0 >= a ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && 0 >= u ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
        }
      },
      flip: {
        left: function(e, t) {
          var p, d, n = t.within,
            r = n.offset.left + n.scrollLeft,
            s = n.width,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            u = e.left - t.collisionPosition.marginLeft,
            a = u - o,
            f = u + t.collisionWidth - s - o,
            l = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
            c = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
            h = -2 * t.offset[0];
          0 > a ? (p = e.left + l + c + h + t.collisionWidth - s - r, (0 > p || p < i(a)) && (e.left += l + c + h)) : f > 0 && (d = e.left - t.collisionPosition.marginLeft + l + c + h - o, (d > 0 || i(d) < f) && (e.left += l + c + h))
        },
        top: function(e, t) {
          var d, v, n = t.within,
            r = n.offset.top + n.scrollTop,
            s = n.height,
            o = n.isWindow ? n.scrollTop : n.offset.top,
            u = e.top - t.collisionPosition.marginTop,
            a = u - o,
            f = u + t.collisionHeight - s - o,
            l = "top" === t.my[1],
            c = l ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
            h = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
            p = -2 * t.offset[1];
          0 > a ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (0 > v || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
        }
      },
      flipfit: {
        left: function() {
          e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
        },
        top: function() {
          e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
        }
      }
    },
    function() {
      var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
        u = document.createElement("div");
      t = document.createElement(o ? "div" : "body"), r = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none"
      }, o && e.extend(r, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px"
      });
      for (s in r) t.style[s] = r[s];
      t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && 11 > i, t.innerHTML = "", n.removeChild(t)
    }()
}(jQuery),
function(e, t) {
  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, e.extend(this._defaults, this.regional[""]), this.dpDiv = o(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function o(t) {
    var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t.delegate(n, "mouseout", function() {
      e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
    }).delegate(n, "mouseover", function() {
      e.datepicker._isDisabledDatepicker(i.inline ? t.parent()[0] : i.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    })
  }

  function u(t, n) {
    e.extend(t, n);
    for (var r in n) null == n[r] && (t[r] = n[r]);
    return t
  }
  e.extend(e.ui, {
    datepicker: {
      version: "1.10.0"
    }
  });
  var i, n = "datepicker",
    r = (new Date).getTime();
  e.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(e) {
      return u(this._defaults, e || {}), this
    },
    _attachDatepicker: function(t, n) {
      var r, i, s;
      r = t.nodeName.toLowerCase(), i = "div" === r || "span" === r, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), "input" === r ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
    },
    _newInst: function(t, n) {
      var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: r,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: n,
        dpDiv: n ? o(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(t, r) {
      var i = e(t);
      r.append = e([]), r.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t))
    },
    _attachments: function(t, n) {
      var r, i, s, o = this._get(n, "appendText"),
        u = this._get(n, "isRTL");
      n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), ("focus" === r || "both" === r) && t.focus(this._showDatepicker), ("button" === r || "both" === r) && (i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
        src: s,
        alt: i,
        title: i
      }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
        src: s,
        alt: i,
        title: i
      }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
      }))
    },
    _autoSize: function(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t, n, r, i, s = new Date(2009, 11, 20),
          o = this._get(e, "dateFormat");
        o.match(/[DM]/) && (t = function(e) {
          for (n = 0, r = 0, i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
          return r
        }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
      }
    },
    _inlineDatepicker: function(t, r) {
      var i = e(t);
      i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(t, r, i, s, o) {
      var a, f, l, c, h, p = this._dialogInst;
      return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], n, p)), u(p.settings, s || {}), r = r && r.constructor === Date ? this._formatDate(p, r) : r, this._dialogInput.val(r), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], n, p), this
    },
    _destroyDatepicker: function(t) {
      var r, i = e(t),
        s = e.data(t, n);
      i.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), e.removeData(t, n), "input" === r ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && i.removeClass(this.markerClassName).empty())
    },
    _enableDatepicker: function(t) {
      var r, i, s = e(t),
        o = e.data(t, n);
      s.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !1, o.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === r || "span" === r) && (i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
        return e === t ? null : e
      }))
    },
    _disableDatepicker: function(t) {
      var r, i, s = e(t),
        o = e.data(t, n);
      s.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), "input" === r ? (t.disabled = !0, o.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === r || "span" === r) && (i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
        return e === t ? null : e
      }), this._disabledInputs[this._disabledInputs.length] = t)
    },
    _isDisabledDatepicker: function(e) {
      if (!e) return !1;
      for (var t = 0; t < this._disabledInputs.length; t++)
        if (this._disabledInputs[t] === e) return !0;
      return !1
    },
    _getInst: function(t) {
      try {
        return e.data(t, n)
      } catch (r) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(n, r, i) {
      var s, o, a, f, l = this._getInst(n);
      return 2 === arguments.length && "string" == typeof r ? "defaults" === r ? e.extend({}, e.datepicker._defaults) : l ? "all" === r ? e.extend({}, l.settings) : this._get(l, r) : null : (s = r || {}, "string" == typeof r && (s = {}, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), u(l.settings, s), null !== a && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), null !== f && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
    },
    _changeDatepicker: function(e, t, n) {
      this._optionDatepicker(e, t, n)
    },
    _refreshDatepicker: function(e) {
      var t = this._getInst(e);
      t && this._updateDatepicker(t)
    },
    _setDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
    },
    _getDateDatepicker: function(e, t) {
      var n = this._getInst(e);
      return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
    },
    _doKeyDown: function(t) {
      var n, r, i, s = e.datepicker._getInst(t.target),
        o = !0,
        u = s.dpDiv.is(".ui-datepicker-rtl");
      if (s._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(), o = !1;
          break;
        case 13:
          return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
        case 27:
          e.datepicker._hideDatepicker();
          break;
        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
          break;
        default:
          o = !1
      } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
      o && (t.preventDefault(), t.stopPropagation())
    },
    _doKeyPress: function(t) {
      var n, r, i = e.datepicker._getInst(t.target);
      return e.datepicker._get(i, "constrainInput") ? (n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > r || !n || n.indexOf(r) > -1) : void 0
    },
    _doKeyUp: function(t) {
      var n, r = e.datepicker._getInst(t.target);
      if (r.input.val() !== r.lastVal) try {
        n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
      } catch (i) {}
      return !0
    },
    _showDatepicker: function(t) {
      if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var n, r, i, s, o, a, f;
        n = e.datepicker._getInst(t),
          e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {}, i !== !1 && (u(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
            return s |= "fixed" === e(this).css("position"), !s
          }), o = {
            left: e.datepicker._pos[0],
            top: e.datepicker._pos[1]
          }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
          }), e.datepicker._updateDatepicker(n), o = e.datepicker._checkOffset(n, o, s), n.dpDiv.css({
            position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
            display: "none",
            left: o.left + "px",
            top: o.top + "px"
          }), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), n.input.is(":visible") && !n.input.is(":disabled") && n.input.focus(), e.datepicker._curInst = n))
      }
    },
    _updateDatepicker: function(t) {
      this.maxRows = 4, i = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
      var n, r = this._getNumberOfMonths(t),
        s = r[1],
        o = 17;
      t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(1 !== r[0] || 1 !== r[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] !== document.activeElement && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
        n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
      }, 0))
    },
    _getBorders: function(e) {
      var t = function(e) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        } [e] || e
      };
      return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
    },
    _checkOffset: function(t, n, r) {
      var i = t.dpDiv.outerWidth(),
        s = t.dpDiv.outerHeight(),
        o = t.input ? t.input.outerWidth() : 0,
        u = t.input ? t.input.outerHeight() : 0,
        a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
        f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
      return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
    },
    _findPos: function(t) {
      for (var n, r = this._getInst(t), i = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
      return n = e(t).offset(), [n.left, n.top]
    },
    _hideDatepicker: function(t) {
      var r, i, s, o, u = this._curInst;
      !u || t && u !== e.data(t, n) || this._datepickerShowing && (r = this._get(u, "showAnim"), i = this._get(u, "duration"), s = function() {
        e.datepicker._tidyDialog(u)
      }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(t) {
      if (e.datepicker._curInst) {
        var n = e(t.target),
          r = e.datepicker._getInst(n[0]);
        (n[0].id !== e.datepicker._mainDivId && 0 === n.parents("#" + e.datepicker._mainDivId).length && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(s, n + ("M" === r ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s))
    },
    _gotoToday: function(t) {
      var n, r = e(t),
        i = this._getInst(r[0]);
      this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
    },
    _selectMonthYear: function(t, n, r) {
      var i = e(t),
        s = this._getInst(i[0]);
      s["selected" + ("M" === r ? "Month" : "Year")] = s["draw" + ("M" === r ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
    },
    _selectDay: function(t, n, r, i) {
      var s, o = e(t);
      e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
    },
    _clearDate: function(t) {
      var n = e(t);
      this._selectDate(n, "")
    },
    _selectDate: function(t, n) {
      var r, i = e(t),
        s = this._getInst(i[0]);
      n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function(t) {
      var n, r, i, s = this._get(t, "altField");
      s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
        e(this).val(i)
      }))
    },
    noWeekends: function(e) {
      var t = e.getDay();
      return [t > 0 && 6 > t, ""]
    },
    iso8601Week: function(e) {
      var t, n = new Date(e.getTime());
      return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
    },
    parseDate: function(t, n, r) {
      if (null == t || null == n) throw "Invalid arguments";
      if (n = "object" == typeof n ? n.toString() : n + "", "" === n) return null;
      var i, s, o, b, u = 0,
        a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        f = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
        l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
        c = (r ? r.dayNames : null) || this._defaults.dayNames,
        h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
        p = (r ? r.monthNames : null) || this._defaults.monthNames,
        d = -1,
        v = -1,
        m = -1,
        g = -1,
        y = !1,
        w = function(e) {
          var n = i + 1 < t.length && t.charAt(i + 1) === e;
          return n && i++, n
        },
        E = function(e) {
          var t = w(e),
            r = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
            i = new RegExp("^\\d{1," + r + "}"),
            s = n.substring(u).match(i);
          if (!s) throw "Missing number at position " + u;
          return u += s[0].length, parseInt(s[0], 10)
        },
        S = function(t, r, i) {
          var s = -1,
            o = e.map(w(t) ? i : r, function(e, t) {
              return [
                [t, e]
              ]
            }).sort(function(e, t) {
              return -(e[1].length - t[1].length)
            });
          if (e.each(o, function(e, t) {
              var r = t[1];
              return n.substr(u, r.length).toLowerCase() === r.toLowerCase() ? (s = t[0], u += r.length, !1) : void 0
            }), -1 !== s) return s + 1;
          throw "Unknown name at position " + u
        },
        x = function() {
          if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
          u++
        };
      for (i = 0; i < t.length; i++)
        if (y) "'" !== t.charAt(i) || w("'") ? x() : y = !1;
        else switch (t.charAt(i)) {
          case "d":
            m = E("d");
            break;
          case "D":
            S("D", l, c);
            break;
          case "o":
            g = E("o");
            break;
          case "m":
            v = E("m");
            break;
          case "M":
            v = S("M", h, p);
            break;
          case "y":
            d = E("y");
            break;
          case "@":
            b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
            break;
          case "!":
            b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
            break;
          case "'":
            w("'") ? x() : y = !0;
            break;
          default:
            x()
        }
      if (u < n.length && (o = n.substr(u), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
      if (-1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f >= d ? 0 : -100)), g > -1)
        for (v = 1, m = g;;) {
          if (s = this._getDaysInMonth(d, v - 1), s >= m) break;
          v++, m -= s
        }
      if (b = this._daylightSavingAdjust(new Date(d, v - 1, m)), b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
      return b
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function(e, t, n) {
      if (!t) return "";
      var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        s = (n ? n.dayNames : null) || this._defaults.dayNames,
        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        u = (n ? n.monthNames : null) || this._defaults.monthNames,
        a = function(t) {
          var n = r + 1 < e.length && e.charAt(r + 1) === t;
          return n && r++, n
        },
        f = function(e, t, n) {
          var r = "" + t;
          if (a(e))
            for (; r.length < n;) r = "0" + r;
          return r
        },
        l = function(e, t, n, r) {
          return a(e) ? r[t] : n[t]
        },
        c = "",
        h = !1;
      if (t)
        for (r = 0; r < e.length; r++)
          if (h) "'" !== e.charAt(r) || a("'") ? c += e.charAt(r) : h = !1;
          else switch (e.charAt(r)) {
            case "d":
              c += f("d", t.getDate(), 2);
              break;
            case "D":
              c += l("D", t.getDay(), i, s);
              break;
            case "o":
              c += f("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              c += f("m", t.getMonth() + 1, 2);
              break;
            case "M":
              c += l("M", t.getMonth(), o, u);
              break;
            case "y":
              c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
              break;
            case "@":
              c += t.getTime();
              break;
            case "!":
              c += 1e4 * t.getTime() + this._ticksTo1970;
              break;
            case "'":
              a("'") ? c += "'" : h = !0;
              break;
            default:
              c += e.charAt(r)
          }
      return c
    },
    _possibleChars: function(e) {
      var t, n = "",
        r = !1,
        i = function(n) {
          var r = t + 1 < e.length && e.charAt(t + 1) === n;
          return r && t++, r
        };
      for (t = 0; t < e.length; t++)
        if (r) "'" !== e.charAt(t) || i("'") ? n += e.charAt(t) : r = !1;
        else switch (e.charAt(t)) {
          case "d":
          case "m":
          case "y":
          case "@":
            n += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            i("'") ? n += "'" : r = !0;
            break;
          default:
            n += e.charAt(t)
        }
      return n
    },
    _get: function(e, n) {
      return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
    },
    _setDateFromField: function(e, t) {
      if (e.input.val() !== e.lastVal) {
        var n = this._get(e, "dateFormat"),
          r = e.lastVal = e.input ? e.input.val() : null,
          i = this._getDefaultDate(e),
          s = i,
          o = this._getFormatConfig(e);
        try {
          s = this.parseDate(n, r, o) || i
        } catch (u) {
          r = t ? "" : r
        }
        e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
      }
    },
    _getDefaultDate: function(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
    },
    _determineDate: function(t, n, r) {
      var i = function(e) {
          var t = new Date;
          return t.setDate(t.getDate() + e), t
        },
        s = function(n) {
          try {
            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
          } catch (r) {}
          for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n); f;) {
            switch (f[2] || "d") {
              case "d":
              case "D":
                u += parseInt(f[1], 10);
                break;
              case "w":
              case "W":
                u += 7 * parseInt(f[1], 10);
                break;
              case "m":
              case "M":
                o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                break;
              case "y":
              case "Y":
                s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
            }
            f = a.exec(n)
          }
          return new Date(s, o, u)
        },
        o = null == n || "" === n ? r : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? r : i(n) : new Date(n.getTime());
      return o = o && "Invalid Date" === o.toString() ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
    },
    _daylightSavingAdjust: function(e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
    },
    _setDate: function(e, t, n) {
      var r = !t,
        i = e.selectedMonth,
        s = e.selectedYear,
        o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
      e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
    },
    _getDate: function(e) {
      var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t
    },
    _attachHandlers: function(t) {
      var n = this._get(t, "stepMonths"),
        i = "#" + t.id.replace(/\\\\/g, "\\");
      t.dpDiv.find("[data-handler]").map(function() {
        var t = {
          prev: function() {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, -n, "M")
          },
          next: function() {
            window["DP_jQuery_" + r].datepicker._adjustDate(i, +n, "M")
          },
          hide: function() {
            window["DP_jQuery_" + r].datepicker._hideDatepicker()
          },
          today: function() {
            window["DP_jQuery_" + r].datepicker._gotoToday(i)
          },
          selectDay: function() {
            return window["DP_jQuery_" + r].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "M"), !1
          },
          selectYear: function() {
            return window["DP_jQuery_" + r].datepicker._selectMonthYear(i, this, "Y"), !1
          }
        };
        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(e) {
      var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
        R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
        U = this._get(e, "isRTL"),
        z = this._get(e, "showButtonPanel"),
        W = this._get(e, "hideIfNoPrevNext"),
        X = this._get(e, "navigationAsDateFormat"),
        V = this._getNumberOfMonths(e),
        $ = this._get(e, "showCurrentAtPos"),
        J = this._get(e, "stepMonths"),
        K = 1 !== V[0] || 1 !== V[1],
        Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
        G = this._getMinMaxDate(e, "min"),
        Y = this._getMinMaxDate(e, "max"),
        Z = e.drawMonth - $,
        et = e.drawYear;
      if (0 > Z && (Z += 12, et--), Y)
        for (t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && G > t ? G : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
      for (e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E, S = 0; S < V[0]; S++) {
        for (x = "", this.maxRows = 4, T = 0; T < V[1]; T++) {
          if (N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "", K) {
            if (k += "<div class='ui-datepicker-group", V[1] > 1) switch (T) {
              case 0:
                k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                break;
              case V[1] - 1:
                k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                break;
              default:
                k += " ui-datepicker-group-middle", C = ""
            }
            k += "'>"
          }
          for (k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === S ? U ? s : r : "") + (/all|right/.test(C) && 0 === S ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead><tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", E = 0; 7 > E; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + h[A] + "'>" + p[A] + "</span></th>";
          for (k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K && this.maxRows > _ ? this.maxRows : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M)), H = 0; D > H; H++) {
            for (k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", E = 0; 7 > E; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && G > P || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !g || !j[2] ? "" : " title='" + j[2] + "'") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
            k += B + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
        }
        w += x
      }
      return w += f, e._keyEvent = !1, w
    },
    _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
      var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
        g = this._get(e, "changeYear"),
        y = this._get(e, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        w = "";
      if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
      else {
        for (a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
        w += "</select>"
      }
      if (y || (b += w + (!s && m && g ? "" : "&#xa0;")), !e.yearshtml)
        if (e.yearshtml = "", s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
        else {
          for (c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
              var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
              return isNaN(t) ? h : t
            }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; v >= d; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
          e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
        } return b += this._get(e, "yearSuffix"), y && (b += (!s && m && g ? "" : "&#xa0;") + w), b += "</div>"
    },
    _adjustInstDate: function(e, t, n) {
      var r = e.drawYear + ("Y" === n ? t : 0),
        i = e.drawMonth + ("M" === n ? t : 0),
        s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + ("D" === n ? t : 0),
        o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
      e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(e)
    },
    _restrictMinMax: function(e, t) {
      var n = this._getMinMaxDate(e, "min"),
        r = this._getMinMaxDate(e, "max"),
        i = n && n > t ? n : t;
      return r && i > r ? r : i
    },
    _notifyChange: function(e) {
      var t = this._get(e, "onChangeMonthYear");
      t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
    },
    _getNumberOfMonths: function(e) {
      var t = this._get(e, "numberOfMonths");
      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
    },
    _getMinMaxDate: function(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null)
    },
    _getDaysInMonth: function(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
    },
    _getFirstDayOfMonth: function(e, t) {
      return new Date(e, t, 1).getDay()
    },
    _canAdjustMonth: function(e, t, n, r) {
      var i = this._getNumberOfMonths(e),
        s = this._daylightSavingAdjust(new Date(n, r + (0 > t ? t : i[0] * i[1]), 1));
      return 0 > t && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
    },
    _isInRange: function(e, t) {
      var n, r, i = this._getMinMaxDate(e, "min"),
        s = this._getMinMaxDate(e, "max"),
        o = null,
        u = null,
        a = this._get(e, "yearRange");
      return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10) + r, u = parseInt(n[1], 10) + r), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
    },
    _getFormatConfig: function(e) {
      var t = this._get(e, "shortYearCutoff");
      return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      }
    },
    _formatDate: function(e, t, n, r) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      var i = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
    }
  }), e.fn.datepicker = function(t) {
    if (!this.length) return this;
    e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
    var n = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
      "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
    }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
  }, e.datepicker = new s, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.0", window["DP_jQuery_" + r] = e
}(jQuery),
function(e, t) {
  var n = 5;
  e.widget("ui.slider", e.ui.mouse, {
    version: "1.10.0",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    _create: function() {
      var t, n, r = this.options,
        i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
        s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = [];
      for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this.range = e([]), r.range && (r.range === !0 && (r.values ? r.values.length && 2 !== r.values.length ? r.values = [r.values[0], r.values[0]] : e.isArray(r.values) && (r.values = r.values.slice(0)) : r.values = [this._valueMin(), this._valueMin()]), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === r.range || "max" === r.range ? " ui-slider-range-" + r.range : ""))), n = r.values && r.values.length || 1, t = i.length; n > t; t++) o.push(s);
      this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) {
        e.preventDefault()
      }).mouseenter(function() {
        r.disabled || e(this).addClass("ui-state-hover")
      }).mouseleave(function() {
        e(this).removeClass("ui-state-hover")
      }).focus(function() {
        r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
      }).blur(function() {
        e(this).removeClass("ui-state-focus")
      }), this.handles.each(function(t) {
        e(this).data("ui-slider-handle-index", t)
      }), this._setOption("disabled", r.disabled), this._on(this.handles, this._handleEvents), this._refreshValue(), this._animateOff = !1
    },
    _destroy: function() {
      this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
    },
    _mouseCapture: function(t) {
      var n, r, i, s, o, u, a, f, l = this,
        c = this.options;
      return c.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), n = {
        x: t.pageX,
        y: t.pageY
      }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
        var n = Math.abs(r - l.values(t));
        (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) && (i = n, s = e(this), o = t)
      }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - a.left - s.width() / 2,
        top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
    },
    _mouseStart: function() {
      return !0
    },
    _mouseDrag: function(e) {
      var t = {
          x: e.pageX,
          y: e.pageY
        },
        n = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, n), !1
    },
    _mouseStop: function(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(e) {
      var t, n, r, i, s;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), 0 > r && (r = 0), "vertical" === this.orientation && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
    },
    _start: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
    },
    _slide: function(e, t, n) {
      var r, i, s;
      this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > r || 1 === t && r > n) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
        handle: this.handles[t],
        value: n,
        values: i
      }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {
        handle: this.handles[t],
        value: n
      }), s !== !1 && this.value(n))
    },
    _stop: function(e, t) {
      var n = {
        handle: this.handles[t],
        value: this.value()
      };
      this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
    },
    _change: function(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var n = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
      }
    },
    value: function(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
    },
    values: function(t, n) {
      var r, i, s;
      if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t), void 0;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
      for (r = this.options.values, i = arguments[0], s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
      this._refreshValue()
    },
    _setOption: function(t, n) {
      var r, i = 0;
      switch (e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
        case "disabled":
          n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0)) : this.handles.prop("disabled", !1);
          break;
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), r = 0; i > r; r += 1) this._change(null, r);
          this._animateOff = !1;
          break;
        case "min":
        case "max":
          this._animateOff = !0, this._refreshValue(), this._animateOff = !1
      }
    },
    _value: function() {
      var e = this.options.value;
      return e = this._trimAlignValue(e)
    },
    _values: function(e) {
      var t, n, r;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
      for (n = this.options.values.slice(), r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
      return n
    },
    _trimAlignValue: function(e) {
      if (e <= this._valueMin()) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        n = (e - this._valueMin()) % t,
        r = e - n;
      return 2 * Math.abs(n) >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.options.max
    },
    _refreshValue: function() {
      var t, n, r, i, s, o = this.options.range,
        u = this.options,
        a = this,
        f = this._animateOff ? !1 : u.animate,
        l = {};
      this.options.values && this.options.values.length ? this.handles.each(function(r) {
        n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l["horizontal" === a.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && ("horizontal" === a.orientation ? (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
          left: n + "%"
        }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
          width: n - t + "%"
        }, {
          queue: !1,
          duration: u.animate
        })) : (0 === r && a.range.stop(1, 1)[f ? "animate" : "css"]({
          bottom: n + "%"
        }, u.animate), 1 === r && a.range[f ? "animate" : "css"]({
          height: n - t + "%"
        }, {
          queue: !1,
          duration: u.animate
        }))), t = n
      }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
        width: n + "%"
      }, u.animate), "max" === o && "horizontal" === this.orientation && this.range[f ? "animate" : "css"]({
        width: 100 - n + "%"
      }, {
        queue: !1,
        duration: u.animate
      }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[f ? "animate" : "css"]({
        height: n + "%"
      }, u.animate), "max" === o && "vertical" === this.orientation && this.range[f ? "animate" : "css"]({
        height: 100 - n + "%"
      }, {
        queue: !1,
        duration: u.animate
      }))
    },
    _handleEvents: {
      keydown: function(t) {
        var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u), r === !1)) return
        }
        switch (o = this.options.step, i = s = this.options.values && this.options.values.length ? this.values(u) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            s = this._valueMin();
            break;
          case e.ui.keyCode.END:
            s = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (i === this._valueMax()) return;
            s = this._trimAlignValue(i + o);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (i === this._valueMin()) return;
            s = this._trimAlignValue(i - o)
        }
        this._slide(t, u, s)
      },
      keyup: function(t) {
        var n = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
      }
    }
  })
}(jQuery);

! function(factory) {
  "function" == typeof define && define.amd ? define(["jquery"], factory) : factory("object" == typeof exports ? require("jquery") : jQuery)
}(function($) {
  function encode(s) {
    return config.raw ? s : encodeURIComponent(s)
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s)
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value))
  }

  function parseCookieValue(s) {
    0 === s.indexOf('"') && (s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return s = decodeURIComponent(s.replace(pluses, " ")), config.json ? JSON.parse(s) : s
    } catch (e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value
  }
  var pluses = /\+/g,
    config = $.cookie = function(key, value, options) {
      if (void 0 !== value && !$.isFunction(value)) {
        if (options = $.extend({}, config.defaults, options), "number" == typeof options.expires) {
          var days = options.expires,
            t = options.expires = new Date;
          t.setTime(+t + 864e5 * days)
        }
        return document.cookie = [encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
      }
      for (var result = key ? void 0 : {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0, l = cookies.length; l > i; i++) {
        var parts = cookies[i].split("="),
          name = decode(parts.shift()),
          cookie = parts.join("=");
        if (key && key === name) {
          result = read(cookie, value);
          break
        }
        key || void 0 === (cookie = read(cookie)) || (result[name] = cookie)
      }
      return result
    };
  config.defaults = {}, $.removeCookie = function(key, options) {
    return void 0 === $.cookie(key) ? !1 : ($.cookie(key, "", $.extend({}, options, {
      expires: -1
    })), !$.cookie(key))
  }
});

var LaLoader = function() {
    this.loader_array = [], this.remove = function(id) {
      void 0 !== id ? $("#laloader_" + id).remove() : $.each(this.loader_array, function(index, id) {
        $("#laloader_" + id).remove()
      })
    }, this.template = function() {
      return random_num = (999999999 * Math.random() + 1e9).toFixed(), ['<div id="laloader_' + random_num + '">         <div id="laloader">       <div id="laloader_1" class="laloader">        </div>        <div id="laloader_2" class="laloader">        </div>        <div id="laloader_3" class="laloader">        </div>        <div id="laloader_4" class="laloader">        </div>        <div id="laloader_5" class="laloader">        </div>        <div id="laloader_6" class="laloader">        </div>        <div id="laloader_7" class="laloader">        </div>        <div id="laloader_8" class="laloader">        </div>          </div>      </div>', random_num]
    }, this.appendTo = function(jq_location) {
      template = this.template(), $(jq_location).append(template[0]), this.loader_array.push(template[1])
    }, this.prependTo = function(jq_location) {
      template = this.template(), $(jq_location).prepend(template[0]), this.loader_array.push(template[1])
    }, this.insertAfter = function(jq_location) {
      template = this.template(), $(template[0]).insertAfter(jq_location), this.loader_array.push(template[1])
    }
  },
  laloader = {};
$(function() {
  laloader = new LaLoader
});

function clearStudyEventListeners() {
  $("#modalPlayDeck .score-up, #modalPlayDeck .score-down, #modalPlayDeck .submit-rating").off("click")
}

function setupRatingEntity(key, config) {
  var ratingLib = new RatingLibrary(config);
  $("#" + key + " .score-up").click(function(e) {
    e.preventDefault(), entityId = $(e.target).parents(".rating-container")[0].id, ratingLib.scoreUp(entityId)
  }), $("#" + key + " .score-down").click(function(e) {
    e.preventDefault(), entityId = $(e.target).parents(".rating-container")[0].id, ratingLib.scoreDown(entityId)
  }), ratingLib.registerEntity(key).done(function() {
    ratingLib.updateEntityUI(key)
  })
}
$(document).ready(function() {
  "undefined" != typeof ratingConfig && $.each(ratingConfig, function(key, config) {
    config.delayedInit === !1
  })
});
var RatingEntity = function(entityId, data, ratingService) {
    this.ratingService = ratingService, this.id = entityId, this.data = data, this.state = "", this.jqElement = $("#" + entityId), this.category = this.jqElement.attr("category"), this.processingScoreSubmit = !1, this.comment = null, this.createdAt = null, this.createdBy = null, this.entityId = this.id, this.entityVersion = null, this.score = null, this.updatedAt = null, this.scoreUp = function() {
      this.processingScoreSubmit || (this.processingScoreSubmit = !0, this.showProcessing(), this.score = 1, this.createOrUpdate())
    }, this.scoreDown = function() {
      this.processingScoreSubmit || (this.showProcessing(), this.score = -1, this.comment = $("#" + this.id + " .rating-comment-textarea").val(), this.createOrUpdate())
    }, this.submitRating = function() {
      this.processingScoreSubmit || (this.showProcessing(), this.comment = $("#" + this.id + " .rating-comment-textarea").val(), this.createOrUpdate())
    }, this.createOrUpdate = function() {
      ("new" == this.state || "existing" == this.state) && this.ratingService.create(this, this.id, this.getXferData()).done(function(data) {
        this.processingScoreSubmit = !1, this.data = data, this.parseData(), this.updateUI()
      }).fail(function(data) {
        this.processingScoreSubmit = !1
      })
    }, this.updateUI = function() {
      switch (this.state) {
        case "new":
          this.displayNew();
          break;
        case "existing":
          this.displayExisting();
          break;
        case "error":
          this.hideAll()
      }
      $("#" + this.id + " .rating-processing").remove()
    }, this.displayNew = function() {
      $("#" + this.id + " .rating-section-comment").show("fade"), $("#" + this.id + " .rating-comment-textarea").val(null), $("#" + this.id + "  .rating-buttons .btn").removeClass("pressed"), $("#" + this.id + " .rating-buttons").show("fade")
    }, this.displayExisting = function() {
      this.setPressedProperty(), this.score < 0 ? (this.setCommentText(), $("#" + this.id + " .rating-section-comment").show("fade"), $("#" + this.id + " .submit-rating").text("Update Rating")) : (this.setCommentText(), $("#" + this.id + " .rating-section-comment").show("fade"))
    }, this.showProcessing = function() {
      processing = $('<i class="fa fa-spinner fa-pulse fa-fw rating-processing"></i>'), processing.appendTo("#" + this.id + " h3")
    }, this.setPressedProperty = function() {
      this.score > 0 ? ($("#" + this.id + " .score-up").addClass("pressed"), $("#" + this.id + " .openScoreDownModal").removeClass("pressed")) : this.score < 0 ? ($("#" + this.id + " .openScoreDownModal").addClass("pressed"), $("#" + this.id + " .score-up").removeClass("pressed")) : ($("#" + this.id + " .openScoreDownModal").removeClass("pressed"), $("#" + this.id + " .score-up").removeClass("pressed"))
    }, this.setCommentText = function() {
      void 0 !== this.comment && $("#" + this.id + " .rating-comment-textarea").val(this.comment)
    }, this.hideAll = function() {
      $("#" + this.id).hide()
    }, this.parseData = function() {
      this.data && this.data.message ? this.state = "new" : void 0 !== this.data.createdAt ? (this.state = "existing", this.setNetworkProperties()) : this.state = "error"
    }, this.getXferData = function() {
      return {
        comment: this.comment,
        score: this.score,
        category: this.category
      }
    }, this.setNetworkProperties = function() {
      this.comment = this.data.comment ? this.data.comment : null, this.createdAt = this.data.createdAt ? this.data.createdAt : null, this.createdBy = this.data.createdBy ? this.data.createdBy : null, this.entityVersion = this.data.entityVersion ? this.data.entityVersion : null, this.score = this.data.score ? this.data.score : null, this.updatedAt = this.data.updatedAt ? this.data.updatedAt : null
    }, this.parseData()
  },
  RatingService = function(config) {
    this.config = config, this.getState = function(context, entityId) {
      return $.ajax({
        url: this.config.api + "/entities/" + entityId + "/ratings/" + this.getUserId(),
        method: "GET",
        dataType: "json",
        context: context,
        headers: this.headers()
      })
    }, this.create = function(context, entityId, data) {
      return data = JSON.stringify(data).replace(/\?\?/g, "? ? "), $.ajax({
        url: this.config.api + "/entities/" + entityId + "/ratings/" + this.getUserId(),
        method: "POST",
        dataType: "json",
        data: data,
        context: context,
        headers: this.headers()
      })
    }, this.getUserId = function() {
      return localStorage.access_token ? encodeURIComponent(JSON.parse(atob(localStorage.access_token.split(".")[1])).sub) : void 0
    }, this.update = function(context, entityId, data) {
      return $.ajax({
        url: this.config.api + "/entities/" + entityId + "/ratings/" + this.getUserId(),
        method: "PATCH",
        dataType: "json",
        data: JSON.stringify(data),
        context: context,
        headers: this.headers()
      })
    }, this.headers = function() {
      return {
        "Content-Type": "application/json",
        "x-Api-Key": this.config.apiKey,
        "X-Organization-Id": this.config.orgId,
        Authorization: localStorage.access_token
      }
    }
  },
  RatingLibrary = function(config) {
    this.config = config, this.entities = [], this.ratingService = new RatingService(this.config), this.registerEntity = function(entityId) {
      return defObject = $.Deferred(), this.ratingService.getState(this, entityId).done(function(data) {
        this.entities.push(new RatingEntity(entityId, data, this.ratingService)), defObject.resolve()
      }).fail(function(data) {
        this.entities.push(new RatingEntity(entityId, void 0 !== data.responseJSON ? data.responseJSON : {
          message: "Rating not found"
        }, this.ratingService)), defObject.resolve()
      }), defObject
    }, this.find = function(entityId) {
      return entity = $.each(this.entities, function(index, entity) {
        return entity.id == entityId ? entity : void 0
      }), entity ? entity[0] : null
    }, this.scoreUp = function(entityId) {
      entity = this.find(entityId), entity.scoreUp()
    }, this.scoreDown = function(entityId) {
      entity = this.find(entityId), entity.scoreDown()
    }, this.submitRating = function(entityId, data) {
      entity = this.find(entityId), entity.submitRating()
    }, this.updateEntityUI = function(entityId) {
      this.find(entityId).updateUI()
    }
  };

var EnterpriseBackend = {
    config: null,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.access_token
    },
    init: function() {
      this.config = $("#enterprise-backend").data("config")
    },
    getLearningPath: function(learning_path_id) {
      return EnterpriseBackend.get(EnterpriseBackend.config.enterprise_api + "/learning_paths/paths/" + learning_path_id)
    },
    getUserAssignedLearningPaths: function() {
      return EnterpriseBackend.get(EnterpriseBackend.config.enterprise_api + "/learning_paths/assigned")
    },
    getUserAssignedLearningPath: function(assigned_learning_path_id) {
      return EnterpriseBackend.get(EnterpriseBackend.config.enterprise_api + "/learning_paths/assigned/" + assigned_learning_path_id)
    },
    get: function(url) {
      var dfd = new $.Deferred;
      return $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        headers: EnterpriseBackend.headers,
        contentType: "application/json; charset=utf-8",
        success: function(result) {
          Array.isArray(result) || $.each(result.learning_path.learning_path_items, function(i, item) {
            item.full_details && (item.full_details.url = EnterpriseBackend.getRelativePath(item.full_details.url))
          }), dfd.resolve(result), $('[data-toggle="tooltip"]').tooltip()
        },
        error: function(error) {
          dfd.reject(error)
        }
      }), dfd.promise()
    },
    postToLA: function(url, data) {
      var dfd = new $.Deferred;
      return $.ajax({
        url: url,
        type: "POST",
        dataType: "JSON",
        data: JSON.stringify(data),
        success: function(result) {
          dfd.resolve(result)
        },
        error: function(error) {
          dfd.reject(error)
        }
      }), dfd.promise()
    },
    getRelativePath: function(url) {
      return url.replace(/^.*\/\/[^\/]+/, "")
    }
  },
  eb = EnterpriseBackend;

! function(t) {
  var e = !t.support.opacity;
  void 0 === t.proxy && t.extend({
    proxy: function(t, e) {
      return t && (proxy = function() {
        return t.apply(e || this, arguments)
      }), proxy
    }
  }), t.extend(t.easing, {
    easeOutBackMin: function(t, e, i, s, o, n) {
      return void 0 === n && (n = 1), s * ((e = e / o - 1) * e * ((n + 1) * e + n) + 1) + i
    }
  }), t.extend(t.expr[":"], {
    value: function(e) {
      return t(e).val()
    }
  }), t.extend({
    MsgBoxObject: {
      defaults: {
        name: "jquery-msgbox",
        zIndex: 1e4,
        width: 420,
        height: "auto",
        background: "#FFFFFF",
        modal: !0,
        overlay: {
          "background-color": "#000000",
          opacity: .5
        },
        showDuration: 200,
        closeDuration: 100,
        moveDuration: 550,
        shake: {
          distance: 10,
          duration: 100,
          transition: "easeOutBackMin",
          loops: 2
        },
        form: {
          active: !1,
          action: "#",
          method: "post"
        },
        emergefrom: "top"
      },
      options: {},
      esqueleto: {
        msgbox: [],
        wrapper: [],
        form: [],
        buttons: [],
        inputs: []
      },
      visible: !1,
      i: 0,
      animation: !1,
      config: function(e) {
        this.options = t.extend(!0, this.options, e), this.overlay.element.css(this.options.overlay), this.overlay.options.hideOnClick = !this.options.modal, this.esqueleto.msgbox.css({
          width: this.options.width,
          height: this.options.height,
          "background-color": this.options.background
        }), this.moveBox()
      },
      overlay: {
        create: function(e) {
          return this.options = e, this.element = t('<div id="' + (new Date).getTime() + '"></div>'), this.element.css(t.extend({}, {
            position: "fixed",
            top: 0,
            left: 0,
            opacity: 0,
            display: "none",
            "z-index": this.options.zIndex
          }, this.options.style)), this.element.click(t.proxy(function(e) {
            this.options.hideOnClick && (t.isFunction(this.options.callback) ? this.options.callback() : this.hide()), e.preventDefault()
          }, this)), this.hidden = !0, this.inject(), this
        },
        inject: function() {
          if (this.target = t(document.body), this.target.append(this.element), e) {
            this.element.css({
              position: "absolute"
            });
            var i = parseInt(this.element.css("zIndex"));
            if (!i) {
              i = 1;
              var s = this.element.css("position");
              "static" != s && s || this.element.css({
                position: "relative"
              }), this.element.css({
                zIndex: i
              })
            }(i = (this.options.zIndex || 0 === this.options.zIndex) && i > this.options.zIndex ? this.options.zIndex : i - 1) < 0 && (i = 1), this.shim = t('<iframe id="IF_' + (new Date).getTime() + '" scrolling="no" frameborder=0 src=""></div>'), this.shim.css({
              zIndex: i,
              position: "absolute",
              top: 0,
              left: 0,
              border: "none",
              width: 0,
              height: 0,
              opacity: 0
            }), this.shim.insertAfter(this.element), t("html, body").css({
              height: "100%",
              width: "100%",
              "margin-left": 0,
              "margin-right": 0
            })
          }
        },
        resize: function(e, i) {
          this.element.css({
            height: 0,
            width: 0
          }), this.shim && this.shim.css({
            height: 0,
            width: 0
          });
          var s = {
            x: t(document).width(),
            y: t(document).height()
          };
          return this.element.css({
            width: "100%",
            height: i || s.y
          }), this.shim && (this.shim.css({
            height: 0,
            width: 0
          }), this.shim.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: this.element.width(),
            height: i || s.y
          })), this
        },
        show: function() {
          return this.hidden ? (this.transition && this.transition.stop(), this.target.bind("resize", t.proxy(this.resize, this)), this.resize(), this.shim && this.shim.css({
            display: "block"
          }), this.hidden = !1, this.transition = this.element.fadeIn(this.options.showDuration, t.proxy(function() {
            this.element.trigger("show")
          }, this)), this) : this
        },
        hide: function() {
          return this.hidden ? this : (this.transition && this.transition.stop(), this.target.unbind("resize"), this.shim && this.shim.css({
            display: "none"
          }), this.hidden = !0, this.transition = this.element.fadeOut(this.options.closeDuration, t.proxy(function() {
            this.element.trigger("hide"), this.element.css({
              height: 0,
              width: 0
            })
          }, this)), this)
        }
      },
      create: function() {
        return this.options = t.extend(!0, this.defaults, this.options), this.overlay.create({
          style: this.options.overlay,
          hideOnClick: !this.options.modal,
          zIndex: this.options.zIndex - 1,
          showDuration: this.options.showDuration,
          closeDuration: this.options.closeDuration
        }), this.esqueleto.msgbox = t('<div class="' + this.options.name + '"></div>'), this.esqueleto.msgbox.css({
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
          width: this.options.width,
          height: this.options.height,
          "z-index": this.options.zIndex,
          "word-wrap": "break-word",
          "-moz-box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
          "-webkit-box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
          "box-shadow": "0 0 15px rgba(0, 0, 0, 0.5)",
          "-moz-border-radius": "6px",
          "-webkit-border-radius": "6px",
          "border-radius": "6px",
          "background-color": this.options.background
        }), this.esqueleto.wrapper = t('<div class="' + this.options.name + '-wrapper"></div>'), this.esqueleto.msgbox.append(this.esqueleto.wrapper), this.esqueleto.form = t('<form action="' + this.options.formaction + '" method="post"></form>'), this.esqueleto.wrapper.append(this.esqueleto.form), this.esqueleto.wrapper.css({
          height: e ? 80 : "auto",
          "min-height": 80,
          zoom: 1
        }), t("body").append(this.esqueleto.msgbox), this.addevents(), this.esqueleto.msgbox
      },
      addevents: function() {
        t(window).bind("resize", t.proxy(function() {
          this.visible && (this.overlay.resize(), this.moveBox())
        }, this)), t(window).bind("scroll", t.proxy(function() {
          this.visible && this.moveBox()
        }, this)), this.esqueleto.msgbox.bind("keydown", t.proxy(function(t) {
          27 == t.keyCode && this.close(!1)
        }, this)), this.esqueleto.form.bind("submit", t.proxy(function(e) {
          t("input[type=submit]:first, button[type=submit]:first, button:first", this.esqueleto.form).trigger("click"), options.form.active || e.preventDefault()
        }, this)), this.overlay.element.bind("show", t.proxy(function() {
          t(this).triggerHandler("show")
        }, this)), this.overlay.element.bind("hide", t.proxy(function() {
          t(this).triggerHandler("close")
        }, this))
      },
      show: function(e, i, s) {
        var o = ["alert", "info", "error", "prompt", "confirm"];
        this.esqueleto.msgbox.queue(this.options.name, t.proxy(function(n) {
          if ((i = t.extend(!0, {
              type: "alert",
              width: this.options.width,
              form: {
                active: !1
              }
            }, i || {})).width && (this.options.width = i.width), void 0 === i.buttons)
            if ("confirm" == i.type || "prompt" == i.type) var h = [{
              type: "submit",
              value: "Accept"
            }, {
              type: "cancel",
              value: "Cancel"
            }];
            else h = [{
              type: "submit",
              value: "Accept"
            }];
          else h = i.buttons;
          if (void 0 === i.inputs && "prompt" == i.type) var a = [{
            type: "text",
            name: "prompt",
            value: ""
          }];
          else a = i.inputs;
          this.callback = t.isFunction(s) ? s : function(t) {}, void 0 !== a && (this.esqueleto.inputs = t('<div class="' + this.options.name + '-inputs"></div>'), this.esqueleto.form.append(this.esqueleto.inputs), t.each(a, t.proxy(function(e, i) {
            "checkbox" == i.type ? (iLabel = i.label ? '<label class="' + this.options.name + '-label">' : "", fLabel = i.label ? i.label + "</label>" : "", i.value = void 0 === i.value ? "1" : i.value, iName = void 0 === i.name ? this.options.name + "-label-" + e : i.name, this.esqueleto.inputs.append(t(iLabel + '<input type="' + i.type + '" style="display:inline; width:auto;" name="' + iName + '" value="' + i.value + '" autocomplete="off"/> ' + fLabel))) : (iLabel = i.label ? '<label class="' + this.options.name + '-label">' + i.label : "", fLabel = i.label ? "</label>" : "", i.value = void 0 === i.value ? "" : i.value, iRequired = void 0 === i.required || 0 == i.required ? "" : 'required="true"', iName = void 0 === i.name ? this.options.name + "-label-" + e : i.name, this.esqueleto.inputs.append(t(iLabel + '<input type="' + i.type + '" name="' + iName + '" value="' + i.value + '" autocomplete="off" ' + iRequired + "/>" + fLabel)))
          }, this))), this.esqueleto.buttons = t('<div class="' + this.options.name + '-buttons"></div>'), this.esqueleto.form.append(this.esqueleto.buttons), i.form.active ? (this.esqueleto.form.attr("action", void 0 === i.form.action ? "#" : i.form.action), this.esqueleto.form.attr("method", void 0 === i.form.method ? "post" : i.form.method), this.options.form.active = !0) : (this.esqueleto.form.attr("action", "#"), this.esqueleto.form.attr("method", "post"), this.options.form.active = !1), "prompt" != i.type ? t.each(h, t.proxy(function(e, i) {
            "submit" == i.type ? this.esqueleto.buttons.append(t('<button type="submit" class="' + this.options.name + "-button-submit " + (i["class"] || "") + '">' + i.value + "</button>").bind("click", t.proxy(function(t) {
              this.close(i.value), t.preventDefault()
            }, this))) : "cancel" == i.type && this.esqueleto.buttons.append(t('<button type="button" class="' + this.options.name + "-button-cancel " + (i["class"] || "") + '">' + i.value + "</button>").bind("click", t.proxy(function(t) {
              this.close(!1), t.preventDefault()
            }, this)))
          }, this)) : "prompt" == i.type && t.each(h, t.proxy(function(e, i) {
            "submit" == i.type ? this.esqueleto.buttons.append(t('<button type="submit" class="' + this.options.name + "-button-submit " + (i["class"] || "") + '">' + i.value + "</button>").bind("click", t.proxy(function(e) {
              if (t('input[required="true"]:not(:value)').length > 0) t('input[required="true"]:not(:value):first').focus(), this.shake();
              else {
                if (this.options.form.active) return !0;
                this.close(this.toArguments(t("input", this.esqueleto.inputs)))
              }
              e.preventDefault()
            }, this))) : "cancel" == i.type && this.esqueleto.buttons.append(t('<button type="button" class="' + this.options.name + "-button-cancel " + (i["class"] || "") + '">' + i.value + "</button>").bind("click", t.proxy(function(t) {
              this.close(!1), t.preventDefault()
            }, this)))
          }, this)), this.esqueleto.form.prepend(e), t.each(o, t.proxy(function(t, e) {
            this.esqueleto.wrapper.removeClass(this.options.name + "-" + e)
          }, this)), this.esqueleto.wrapper.addClass(this.options.name + "-" + i.type), this.moveBox(), this.visible = !0, this.overlay.show(), this.esqueleto.msgbox.css({
            display: "block",
            width: this.options.width,
            left: (t(document).width() - this.options.width) / 2
          }), this.moveBox(), setTimeout(t.proxy(function() {
            var e = t("input, button", this.esqueleto.msgbox);
            e.length && e.get(0).focus()
          }, this), this.options.moveDuration)
        }, this)), this.i++, 1 == this.i && this.esqueleto.msgbox.dequeue(this.options.name)
      },
      toArguments: function(e) {
        return t.map(e, function(e) {
          return t(e).val()
        })
      },
      moveBox: function() {
        var e, i = t(window).width(),
          s = t(window).height(),
          o = t(window).scrollLeft(),
          n = t(window).scrollTop(),
          h = this.esqueleto.msgbox.outerHeight(),
          a = 0;
        e = o + (i - this.options.width) / 2, a = "bottom" == this.options.emergefrom ? n + s + 80 : n - h - 80, this.visible ? (this.animation && this.animation.stop, this.animation = this.esqueleto.msgbox.animate({
          left: e,
          top: n + (s - h) / 2
        }, {
          duration: this.options.moveDuration,
          queue: !1,
          easing: "easeOutBackMin"
        })) : this.esqueleto.msgbox.css({
          top: a,
          left: e
        })
      },
      close: function(e) {
        this.esqueleto.msgbox.css({
          display: "none",
          top: 0
        }), this.visible = !1, t.isFunction(this.callback) && this.callback.apply(this, t.makeArray(e)), setTimeout(t.proxy(function() {
          this.i--, this.esqueleto.msgbox.dequeue(this.options.name)
        }, this), this.options.closeDuration), 1 == this.i && this.overlay.hide(), this.moveBox(), this.esqueleto.form.empty()
      },
      shake: function() {
        var t = this.options.shake.distance,
          e = this.options.shake.duration,
          s = this.options.shake.transition,
          o = this.options.shake.loops,
          n = this.esqueleto.msgbox.position().left,
          h = this.esqueleto.msgbox;
        for (i = 0; i < o; i++) h.animate({
          left: n + t
        }, e, s), h.animate({
          left: n - t
        }, e, s);
        h.animate({
          left: n + t
        }, e, s), h.animate({
          left: n
        }, e, s)
      }
    },
    msgbox: function(e, i, s) {
      return "object" != typeof e ? t.MsgBoxObject.show(e, i, s) : void t.MsgBoxObject.config(e)
    }
  }), t(function() {
    t.MsgBoxObject.create()
  })
}(jQuery);
