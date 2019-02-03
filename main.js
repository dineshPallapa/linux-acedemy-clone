! function($) {
  $.msgGrowl = function(config) {
    var defaults, options, container, msgGrowl, content, title, text, close;
    defaults = {
      type: "",
      title: "",
      text: "",
      lifetime: 6500,
      sticky: !1,
      position: "bottom-right",
      closeTrigger: !0,
      onOpen: function() {},
      onClose: function() {}
    }, options = $.extend(defaults, config), container = $(".msgGrowl-container." + options.position), container.length || (container = $("<div>", {
      "class": "msgGrowl-container " + options.position
    }).appendTo("body")), msgGrowl = $("<div>", {
      "class": "msgGrowl " + options.type
    }), content = $("<div>", {
      "class": "msgGrowl-content"
    }).appendTo(msgGrowl), text = $("<span>", {
      text: options.text
    }).appendTo(content), options.closeTrigger && (close = $("<div>", {
      "class": "msgGrowl-close",
      click: function(e) {
        e.preventDefault(), $(this).parent().fadeOut("medium", function() {
          $(this).remove(), "function" == typeof options.onClose && options.onClose()
        })
      }
    }).appendTo(msgGrowl)), "" != options.title && (title = $("<h4>", {
      text: options.title
    }).prependTo(content)), options.lifetime > 0 && !options.sticky && setTimeout(function() {
      "function" == typeof options.onClose && options.onClose(), msgGrowl.fadeOut("medium", function() {
        $(this).remove()
      })
    }, options.lifetime), container.addClass(options.position), "top" == options.position.split("-")[0] ? msgGrowl.prependTo(container).hide().fadeIn("slow") : msgGrowl.appendTo(container).hide().fadeIn("slow"), "function" == typeof options.onOpen && options.onOpen()
  }
}(jQuery);

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

function getTicket() {
  return jQuery.ajax({
    url: "/cp/api/generateUserTicket/callback/asf",
    dataType: "jsonp",
    jsonp: !1,
    jsonpCallback: "asf",
    async: !0
  })
}

function getServerSets(ticket, tags) {
  return void 0 === tags ? jQuery.ajax({
    url: "/subapp/api/server/sets",
    data: "ticketid=" + ticket
  }) : jQuery.ajax({
    url: "/subapp/api/server/sets",
    data: "ticketid=" + ticket + "&tags=" + tags
  })
}

function getProgress(ticket, user_id, interval) {
  return jQuery.ajax({
    url: "/subapp/api/user/progress",
    data: "ticketid=" + ticket + "&central_id=" + user_id + "&interval=" + interval
  })
}

function getProdevRecordLocal(id) {
  return jQuery.ajax({
    url: "/cp/cloudcredentials/recordlocal/id/" + id,
    dataType: "json"
  })
}

function getServerIps() {
  return jQuery.ajax({
    url: "/cp/server2/status/ajax/1",
    dataType: "json"
  })
}

function getAssessment(assessmentId, ticket) {
  return jQuery.ajax({
    url: "/subapp/lab_test/" + assessmentId + "/embed/",
    data: "ticketid=" + ticket,
    async: !0
  })
}
var jq_orig = $,
  EmbedViewer = function(selector, name) {
    this.selector = selector, this.name = name, this.select_dropdown = '<select name="lab_test[ip_address]" id="lab_test_ip_address" class="form-control"></select>', this.select_options = "", this.selectReapply = function() {
      $("#lab_test_ip_address").replaceWith(this.select_dropdown), $("#lab_test_ip_address").append(this.select_options)
    }, this.setupServerLiveLabIps = function(ip_array) {
      self = this, ip_array.forEach(function(address) {
        self.select_options += '<option value="' + address + '">' + address + "</option>"
      }), $("#lab_test_ip_address").replaceWith(self.select_dropdown), $("#lab_test_ip_address").append(self.select_options)
    }, this.setupServerIps = function() {
      self = this, getServerIps().done(function(json) {
        "none" == json.server_status ? ($("#lab_test_ip_address").replaceWith('<span class="no-lab-server">Please Start a new Cloud Server and Refresh this page in order to assess your work.</span>'), $("#select_ip_ajax").hide(), $("#select_ip_message").hide()) : (json.forEach(function(server) {
          "" != server.public_ip && "running" == server.status && (self.select_options += '<option value="' + server.public_ip + '">Server ' + server.server_number + " : " + server.public_ip + "</option>")
        }), "" != self.select_options ? ($("#lab_test_ip_address").replaceWith(self.select_dropdown), $("#lab_test_ip_address").append(self.select_options)) : ($("#lab_test_ip_address").replaceWith('<span class="no-lab-server">Please Start a new Cloud Server and Refresh this page in order to assess your work.</span>'), $("#select_ip_ajax").hide(), $("#select_ip_message").hide()))
      })
    }, this.initialize = function() {
      self = this, $(selector + " > img:first").show(), this.assessmentId = $(selector)[0].childNodes[0].value, getTicket().done(function(data) {
        getAssessment(self.assessmentId, data.ticket).done(function(html) {
          $(selector).append(html), $(selector + " > img:first").hide(), $.cookie = jq_orig.cookie, $.msgbox = jq_orig.msgbox, $.countdown = jq_orig.countdown, $.removeCookie = jq_orig.removeCookie, jq_orig(selector).trigger("initialized")
        }).fail(function() {
          getTicket().done(function(data) {
            getAssessment(self.assessmentId, data.ticket).done(function(html) {
              $(selector).append(html), $(selector + " > img:first").hide(), $.cookie = jq_orig.cookie, $.msgbox = jq_orig.msgbox, $.countdown = jq_orig.countdown, $.removeCookie = jq_orig.removeCookie, jq_orig(selector).trigger("initialized")
            }).fail(function() {
              $(selector).append("<p>Live Challenge Unavailable: Please try again later.</p>"), $(selector + " > img:first").hide()
            })
          })
        })
      })
    }
  };
embedViewer = {}, $(document).ready(function() {
  if ($("#ajax-assessment-embed").length > 0) {
    var isLiveLab = !1;
    $("#ajax-assessment-embed").parents().each(function() {
      ("prodev-embed" == this.className || "livelab-embed" == this.className) && (isLiveLab = !0)
    }), 1 == isLiveLab ? embedViewer = new EmbedViewer("#ajax-assessment-embed", "embedViewer") : (embedViewer = new EmbedViewer("#ajax-assessment-embed", "embedViewer"), $(embedViewer.selector).on("initialized", function() {
      embedViewer.setupServerIps()
    }), embedViewer.initialize())
  }
});
var AssessmentEmbedder = function(selector, name) {
  this.selector = selector, this.instanceName = name, this.jsonData = null, this.setup = function() {
    var self = this;
    getTicket().done(function(data) {
      getServerSets(data.ticket).done(function(dataSet) {
        self.displayHeader("Most Recent Challenges"), self.setJsonData(dataSet), self.displayData(), self.displaySearchForm()
      })
    })
  }, this.setJsonData = function(json) {
    this.jsonData = json
  }, this.displayData = function() {
    var self = this;
    this.jsonData.forEach(function(element, index) {
      $(self.selector).append("<div><button onclick='" + self.instanceName + ".insertData(" + element.id + ")'>" + element.name + "</button></div>")
    })
  }, this.displayHeader = function(header) {
    $(this.selector)[0].innerHTML = "", $(this.selector).append("<h4>" + header + "</h4>")
  }, this.insertData = function(id) {
    sets_filtered = $.grep(this.jsonData, function(object) {
      return object.id == id
    });
    var set = sets_filtered[0];
    tinyMCE.activeEditor.execCommand("mceInsertRawHTML", !1, set.embed_code), inputs = $("input[name = 'remote_id']"), inputs.length > 0 && (inputs[0].value = set.id)
  }, this.displaySearchForm = function() {
    $(this.selector).append('<input type="search" name="tags" id="embedder-search" onsearch="' + this.instanceName + '.search();"></input><button onclick="' + this.instanceName + '.search();">Search!</button>')
  }, this.search = function() {
    self = this, getServerSets("", $("#embedder-search")[0].value).done(function(json) {
      self.displayHeader("Search Results: " + $("#embedder-search")[0].value), self.setJsonData(json), self.displayData(), self.displaySearchForm()
    })
  }
};
$(document).ready(function() {
  $("#assessment-embedder").length > 0 && (embedder = new AssessmentEmbedder("#assessment-embedder", "embedder"), embedder.setup())
});
var ProgressEmbedder = function(selector, name) {
  this.total = null, this.selector = selector, this.name = name, this.jsonData = null, this.user_id = $(selector + "> input")[0].value, this.interval = $(selector + "> input")[1].value, this.setup = function() {
    var self = this;
    getTicket().done(function(data) {
      getProgress(data.ticket, self.user_id, self.interval).done(function(json) {
        self.setJsonData(json), self.displayData()
      })
    })
  }, this.setJsonData = function(data) {
    this.jsonData = data
  }, this.dateString = function(string) {
    var d = new Date(Date.parse(string)),
      m = d.getMonth(),
      monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      month = monthArray[m];
    return month + " " + d.getDate()
  }, this.displayData = function() {
    var self = this;
    if (this.total = this.jsonData.length, $("#assessment-total").append(this.total), this.jsonData.length > 0) {
      var output = '<table class="table table-bordered table-striped"><tbody>';
      this.jsonData.forEach(function(progress, index) {
        output = output + "<tr><td>" + self.dateString(progress.updated_at) + "</td><td>" + progress.assessment_set.name, output += '<div class="scores"><em>Scores:</em><ul>', progress.scores.forEach(function(score, index) {
          output += "<li>" + score.lab_test.name + ": " + score.total + "/" + score.lab_test_possible + "</li>"
        }), output += '</ul><span class="totals">Total: ' + progress.total_score + "/" + progress.total_possible_score + "</span></div>", output += '<div class="scores"><em>Completed Sections:</em><ul>', progress.completions.forEach(function(completion, index) {
          output += "<li>" + completion.lab_test.name + "</li>"
        }), output += '</ul><span class="totals">Total: ' + progress.total_sections_passed + "/" + progress.total_sections_passed + "</span></div>", output += "</td></tr>"
      }), output += "</tbody></table>", $(selector).append(output)
    } else $(selector).append('<table class="table table-bordered table-striped"><tbody><tr><td>No recent Activity</td></tr></tbody></table>')
  }
};
$(document).ready(function() {
  $("#progress-embedder").length > 0 && (pembedder = new ProgressEmbedder("#progress-embedder", "pembedder"), pembedder.setup())
});
var LeaderboardEmbedder = function(selector, name) {
    this.selector = selector, this.name = name, this.jsonData = {}, this.setJsonData = function(index, jsonData) {
      this.jsonData[index] = jsonData
    }, this.setup = function() {
      var self = this;
      getTicket().done(function(data) {
        $(self.selector).each(function(assessmentSet) {
          getLeaderboard(data.ticket, assessmentSet.childNodes[0].value).done(function(jsonData) {
            self.setJsonData(assessmentSet.childNodes[0].value, jsonData)
          })
        })
      })
    }
  },
  markProDevEmbedCompleteOnClick = function() {
    jq_orig.msgbox("Submit Exam Results for Cloud Credential Certification? This will complete your exam session, you will be unable to reurn to this exam session.", {
      type: "confirm",
      buttons: [{
        type: "submit",
        value: "Yes"
      }, {
        type: "cancel",
        value: "Cancel"
      }]
    }, function(result) {
      "Yes" == result && (setProDevEmbedCompleteState(!1), getProdevRecordLocal(prodev_id).done(function(data) {
        setProDevEmbedCompleteState(!0), $.ajax({
          url: "/cp/livelabs/completelab/id/" + livelab_id + "/topic/" + livelab_topic + "/labtype/" + livelab_type,
          dataType: "json"
        }), "0" == data.completed ? jq_orig.msgbox("You have not passed this exam. Better luck next time.", {
          type: alert
        }, function() {
          $("#markProDevEmbedComplete").prop("disabled", !0), window.location = "/cp/cloudcredentials/"
        }) : "1" == data.completed ? window.location = "/cp/challenges/pass/id/" + prodev_id : jq_orig.msgbox("You have already passed this exam.", {
          type: alert
        })
      }).fail(function(data) {
        jq_orig.msgbox("There was an unexpected error. Please try again, and contact support if the problem continues.")
      }))
    })
  },
  setProDevEmbedCompleteState = function(enable) {
    var button = $("#markProDevEmbedComplete");
    enable ? (button.html("Complete Challenge"), button.removeClass("disabled"), button.on("click", markProDevEmbedCompleteOnClick)) : (button.html('<i class="fa fa-spinner fa-spin"></i>'), button.addClass("disabled"), button.on("click", function(e) {
      e.preventDefault()
    }))
  };
$(document).ready(function() {
  $("#markProDevEmbedComplete").length > 0 && $("#markProDevEmbedComplete").on("click", markProDevEmbedCompleteOnClick)
});

! function(window, navigator, $, undefined) {
  "use strict";
  if (window.ion = window.ion || {}, !ion.sound) {
    var warn = function(text) {
        if (text || (text = "undefined"), window.console) {
          console.warn && "function" == typeof console.warn ? console.warn(text) : console.log && "function" == typeof console.log && console.log(text);
          var d = $ && $("#debug");
          if (d && d.length) {
            var a = d.html();
            d.html(a + text + "<br/>")
          }
        }
      },
      extend = function(parent, child) {
        var prop;
        child = child || {};
        for (prop in parent) parent.hasOwnProperty(prop) && (child[prop] = parent[prop]);
        return child
      };
    if ("function" != typeof Audio && "object" != typeof Audio) {
      var func = function() {
        warn("HTML5 Audio is not supported in this browser")
      };
      return ion.sound = func, ion.sound.play = func, ion.sound.stop = func, ion.sound.pause = func, ion.sound.preload = func, ion.sound.destroy = func, void func()
    }
    var i, is_iOS = /iPad|iPhone|iPod/.test(navigator.appVersion),
      sounds_num = 0,
      settings = {},
      sounds = {};
    !settings.supported && is_iOS ? settings.supported = ["mp3", "mp4", "aac"] : settings.supported || (settings.supported = ["mp3", "ogg", "mp4", "aac", "wav"]);
    var createSound = function(obj) {
      var name = obj.alias || obj.name;
      sounds[name] || (sounds[name] = new Sound(obj), sounds[name].init())
    };
    ion.sound = function(options) {
      if (extend(options, settings), settings.path = settings.path || "", settings.volume = settings.volume || 1, settings.preload = settings.preload || !1, settings.multiplay = settings.multiplay || !1, settings.loop = settings.loop || !1, settings.sprite = settings.sprite || null, settings.scope = settings.scope || null, settings.ready_callback = settings.ready_callback || null, settings.ended_callback = settings.ended_callback || null, sounds_num = settings.sounds.length, !sounds_num) return void warn("No sound-files provided!");
      for (i = 0; sounds_num > i; i++) createSound(settings.sounds[i])
    }, ion.sound.VERSION = "3.0.6", ion.sound._method = function(method, name, options) {
      if (name) sounds[name] && sounds[name][method](options);
      else
        for (i in sounds) sounds.hasOwnProperty(i) && sounds[i] && sounds[i][method](options)
    }, ion.sound.preload = function(name, options) {
      options = options || {}, extend({
        preload: !0
      }, options), ion.sound._method("init", name, options)
    }, ion.sound.destroy = function(name) {
      if (ion.sound._method("destroy", name), name) sounds[name] = null;
      else
        for (i in sounds) sounds.hasOwnProperty(i) && sounds[i] && (sounds[i] = null)
    }, ion.sound.play = function(name, options) {
      ion.sound._method("play", name, options)
    }, ion.sound.stop = function(name, options) {
      ion.sound._method("stop", name, options)
    }, ion.sound.pause = function(name, options) {
      ion.sound._method("pause", name, options)
    }, ion.sound.volume = function(name, options) {
      ion.sound._method("volume", name, options)
    }, $ && ($.ionSound = ion.sound);
    var audio, AudioContext = window.AudioContext || window.webkitAudioContext;
    AudioContext && (audio = new AudioContext);
    var Sound = function(options) {
      this.options = extend(settings), delete this.options.sounds, extend(options, this.options), this.request = null, this.streams = {}, this.result = {}, this.ext = 0, this.url = "", this.loaded = !1, this.decoded = !1, this.no_file = !1, this.autoplay = !1
    };
    Sound.prototype = {
      init: function(options) {
        options && extend(options, this.options), this.options.preload && this.load()
      },
      destroy: function() {
        var stream;
        for (i in this.streams) stream = this.streams[i], stream && (stream.destroy(), stream = null);
        this.streams = {}, this.result = null, this.options.buffer = null, this.options = null, this.request && (this.request.removeEventListener("load", this.ready.bind(this), !1), this.request.removeEventListener("error", this.error.bind(this), !1), this.request.abort(), this.request = null)
      },
      createUrl: function() {
        var no_cache = (new Date).valueOf();
        this.url = this.options.path + encodeURIComponent(this.options.name) + "." + this.options.supported[this.ext] + "?" + no_cache
      },
      load: function() {
        return this.no_file ? void warn('No sources for "' + this.options.name + '" sound :(') : (this.createUrl(), this.request = new XMLHttpRequest, this.request.open("GET", this.url, !0), this.request.responseType = "arraybuffer", this.request.addEventListener("load", this.ready.bind(this), !1), this.request.addEventListener("error", this.error.bind(this), !1), void this.request.send())
      },
      reload: function() {
        this.ext++, this.options.supported[this.ext] ? this.load() : (this.no_file = !0, warn('No sources for "' + this.options.name + '" sound :('))
      },
      ready: function(data) {
        return this.result = data.target, 4 !== this.result.readyState ? void this.reload() : 200 !== this.result.status && 0 !== this.result.status ? (warn(this.url + " was not found on server!"), void this.reload()) : (this.request.removeEventListener("load", this.ready.bind(this), !1), this.request.removeEventListener("error", this.error.bind(this), !1), this.request = null, this.loaded = !0, void this.decode())
      },
      decode: function() {
        audio && audio.decodeAudioData(this.result.response, this.setBuffer.bind(this), this.error.bind(this))
      },
      setBuffer: function(buffer) {
        this.options.buffer = buffer, this.decoded = !0;
        var config = {
          name: this.options.name,
          alias: this.options.alias,
          ext: this.options.supported[this.ext],
          duration: this.options.buffer.duration
        };
        if (this.options.ready_callback && "function" == typeof this.options.ready_callback && this.options.ready_callback.call(this.options.scope, config), this.options.sprite)
          for (i in this.options.sprite) this.options.start = this.options.sprite[i][0], this.options.end = this.options.sprite[i][1], this.streams[i] = new Stream(this.options, i);
        else this.streams[0] = new Stream(this.options);
        this.autoplay && (this.autoplay = !1, this.play())
      },
      error: function() {
        this.reload()
      },
      play: function(options) {
        if (delete this.options.part, options && extend(options, this.options), !this.loaded) return void(this.options.preload || (this.autoplay = !0, this.load()));
        if (!this.no_file && this.decoded)
          if (this.options.sprite)
            if (this.options.part) this.streams[this.options.part].play(this.options);
            else
              for (i in this.options.sprite) this.streams[i].play(this.options);
        else this.streams[0].play(this.options)
      },
      stop: function(options) {
        if (this.options.sprite)
          if (options) this.streams[options.part].stop();
          else
            for (i in this.options.sprite) this.streams[i].stop();
        else this.streams[0].stop()
      },
      pause: function(options) {
        if (this.options.sprite)
          if (options) this.streams[options.part].pause();
          else
            for (i in this.options.sprite) this.streams[i].pause();
        else this.streams[0].pause()
      },
      volume: function(options) {
        var stream;
        if (options)
          if (extend(options, this.options), this.options.sprite)
            if (this.options.part) stream = this.streams[this.options.part], stream && stream.setVolume(this.options);
            else
              for (i in this.options.sprite) stream = this.streams[i], stream && stream.setVolume(this.options);
        else stream = this.streams[0], stream && stream.setVolume(this.options)
      }
    };
    var Stream = function(options, sprite_part) {
      this.alias = options.alias, this.name = options.name, this.sprite_part = sprite_part, this.buffer = options.buffer, this.start = options.start || 0, this.end = options.end || this.buffer.duration, this.multiplay = options.multiplay || !1, this.volume = options.volume || 1, this.scope = options.scope, this.ended_callback = options.ended_callback, this.setLoop(options), this.source = null, this.gain = null, this.playing = !1, this.paused = !1, this.time_started = 0, this.time_ended = 0, this.time_played = 0, this.time_offset = 0
    };
    if (Stream.prototype = {
        destroy: function() {
          this.stop(), this.buffer = null, this.source = null, this.gain && this.gain.disconnect(), this.source && this.source.disconnect(), this.gain = null, this.source = null
        },
        setLoop: function(options) {
          options.loop === !0 ? this.loop = 9999999 : "number" == typeof options.loop ? this.loop = +options.loop - 1 : this.loop = !1
        },
        update: function(options) {
          this.setLoop(options), "volume" in options && (this.volume = options.volume)
        },
        play: function(options) {
          options && this.update(options), (this.multiplay || !this.playing) && (this.gain = audio.createGain(), this.source = audio.createBufferSource(), this.source.buffer = this.buffer, this.source.connect(this.gain), this.gain.connect(audio.destination), this.gain.gain.value = this.volume, this.source.onended = this.ended.bind(this), this._play())
        },
        _play: function() {
          var start, end;
          return this.paused ? (start = this.start + this.time_offset, end = this.end - this.time_offset) : (start = this.start, end = this.end), 0 >= end ? void this.clear() : ("function" == typeof this.source.start ? this.source.start(0, start, end) : this.source.noteOn(0, start, end), this.playing = !0, this.paused = !1, void(this.time_started = (new Date).valueOf()))
        },
        stop: function() {
          this.playing && this.source && ("function" == typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.clear()
        },
        pause: function() {
          return this.paused ? void this.play() : void(this.playing && (this.source && this.source.stop(0), this.paused = !0))
        },
        ended: function() {
          this.playing = !1, this.time_ended = (new Date).valueOf(), this.time_played = (this.time_ended - this.time_started) / 1e3, this.time_offset += this.time_played, (this.time_offset >= this.end || this.end - this.time_offset < .015) && (this._ended(), this.clear(), this.loop && (this.loop--, this.play()))
        },
        _ended: function() {
          var config = {
            name: this.name,
            alias: this.alias,
            part: this.sprite_part,
            start: this.start,
            duration: this.end
          };
          this.ended_callback && "function" == typeof this.ended_callback && this.ended_callback.call(this.scope, config)
        },
        clear: function() {
          this.time_played = 0, this.time_offset = 0, this.paused = !1, this.playing = !1
        },
        setVolume: function(options) {
          this.volume = options.volume, this.gain && (this.gain.gain.value = this.volume)
        }
      }, !audio) {
      var checkSupport = function() {
        var item, i, sound = new Audio,
          can_play_mp3 = sound.canPlayType("audio/mpeg"),
          can_play_ogg = sound.canPlayType("audio/ogg"),
          can_play_aac = sound.canPlayType('audio/mp4; codecs="mp4a.40.2"');
        for (i = 0; i < settings.supported.length; i++) item = settings.supported[i], can_play_mp3 || "mp3" !== item || settings.supported.splice(i, 1), can_play_ogg || "ogg" !== item || settings.supported.splice(i, 1), can_play_aac || "aac" !== item || settings.supported.splice(i, 1), can_play_aac || "mp4" !== item || settings.supported.splice(i, 1);
        sound = null
      };
      checkSupport(), Sound.prototype = {
        init: function(options) {
          options && extend(options, this.options), this.inited = !0, this.options.preload && this.load()
        },
        destroy: function() {
          var stream;
          for (i in this.streams) stream = this.streams[i], stream && (stream.destroy(), stream = null);
          this.streams = {}, this.loaded = !1, this.inited = !1
        },
        load: function() {
          var part;
          if (this.options.preload = !0, this.options._ready = this.ready, this.options._scope = this, this.options.sprite)
            for (i in this.options.sprite) part = this.options.sprite[i], this.options.start = part[0], this.options.end = part[1], this.streams[i] = new Stream(this.options, i);
          else this.streams[0] = new Stream(this.options)
        },
        ready: function(duration) {
          if (!this.loaded) {
            this.loaded = !0;
            var config = {
              name: this.options.name,
              alias: this.options.alias,
              ext: this.options.supported[this.ext],
              duration: duration
            };
            this.options.ready_callback && "function" == typeof this.options.ready_callback && this.options.ready_callback.call(this.options.scope, config), this.autoplay && (this.autoplay = !1, this.play())
          }
        },
        play: function(options) {
          if (this.inited) {
            if (delete this.options.part, options && extend(options, this.options), !this.loaded) return void(this.options.preload || (this.autoplay = !0, this.load()));
            if (this.options.sprite)
              if (this.options.part) this.streams[this.options.part].play(this.options);
              else
                for (i in this.options.sprite) this.streams[i].play(this.options);
            else this.streams[0].play(this.options)
          }
        },
        stop: function(options) {
          if (this.inited)
            if (this.options.sprite)
              if (options) this.streams[options.part].stop();
              else
                for (i in this.options.sprite) this.streams[i].stop();
          else this.streams[0].stop()
        },
        pause: function(options) {
          if (this.inited)
            if (this.options.sprite)
              if (options) this.streams[options.part].pause();
              else
                for (i in this.options.sprite) this.streams[i].pause();
          else this.streams[0].pause()
        },
        volume: function(options) {
          var stream;
          if (options)
            if (extend(options, this.options), this.options.sprite)
              if (this.options.part) stream = this.streams[this.options.part], stream && stream.setVolume(this.options);
              else
                for (i in this.options.sprite) stream = this.streams[i], stream && stream.setVolume(this.options);
          else stream = this.streams[0], stream && stream.setVolume(this.options)
        }
      }, Stream = function(options, sprite_part) {
        this.name = options.name, this.alias = options.alias, this.sprite_part = sprite_part, this.multiplay = options.multiplay, this.volume = options.volume, this.preload = options.preload, this.path = settings.path, this.start = options.start || 0, this.end = options.end || 0, this.scope = options.scope, this.ended_callback = options.ended_callback, this._scope = options._scope, this._ready = options._ready, this.setLoop(options), this.sound = null, this.url = null, this.loaded = !1, this.start_time = 0, this.paused_time = 0, this.played_time = 0, this.init()
      }, Stream.prototype = {
        init: function() {
          this.sound = new Audio, this.sound.volume = this.volume, this.createUrl(), this.sound.addEventListener("ended", this.ended.bind(this), !1), this.sound.addEventListener("canplaythrough", this.can_play_through.bind(this), !1), this.sound.addEventListener("timeupdate", this._update.bind(this), !1), this.load()
        },
        destroy: function() {
          this.stop(), this.sound.removeEventListener("ended", this.ended.bind(this), !1), this.sound.removeEventListener("canplaythrough", this.can_play_through.bind(this), !1), this.sound.removeEventListener("timeupdate", this._update.bind(this), !1), this.sound = null, this.loaded = !1
        },
        createUrl: function() {
          var rand = (new Date).valueOf();
          this.url = this.path + encodeURIComponent(this.name) + "." + settings.supported[0] + "?" + rand
        },
        can_play_through: function() {
          this.preload && this.ready()
        },
        load: function() {
          this.sound.src = this.url, this.sound.preload = this.preload ? "auto" : "none", this.preload && this.sound.load()
        },
        setLoop: function(options) {
          options.loop === !0 ? this.loop = 9999999 : "number" == typeof options.loop ? this.loop = +options.loop - 1 : this.loop = !1
        },
        update: function(options) {
          this.setLoop(options), "volume" in options && (this.volume = options.volume)
        },
        ready: function() {
          !this.loaded && this.sound && (this.loaded = !0, this._ready.call(this._scope, this.sound.duration), this.end || (this.end = this.sound.duration))
        },
        play: function(options) {
          options && this.update(options), (this.multiplay || !this.playing) && this._play()
        },
        _play: function() {
          if (this.paused) this.paused = !1;
          else try {
            this.sound.currentTime = this.start
          } catch (e) {}
          this.playing = !0, this.start_time = (new Date).valueOf(), this.sound.volume = this.volume, this.sound.play()
        },
        stop: function() {
          if (this.playing) {
            this.playing = !1, this.paused = !1, this.sound.pause(), this.clear();
            try {
              this.sound.currentTime = this.start
            } catch (e) {}
          }
        },
        pause: function() {
          this.paused ? this._play() : (this.playing = !1, this.paused = !0, this.sound.pause(), this.paused_time = (new Date).valueOf(), this.played_time += this.paused_time - this.start_time)
        },
        _update: function() {
          if (this.start_time) {
            var current_time = (new Date).valueOf(),
              played_time = current_time - this.start_time,
              played = (this.played_time + played_time) / 1e3;
            played >= this.end && this.playing && (this.stop(), this._ended())
          }
        },
        ended: function() {
          this.playing && (this.stop(), this._ended())
        },
        _ended: function() {
          this.playing = !1;
          var config = {
            name: this.name,
            alias: this.alias,
            part: this.sprite_part,
            start: this.start,
            duration: this.end
          };
          this.ended_callback && "function" == typeof this.ended_callback && this.ended_callback.call(this.scope, config), this.loop && setTimeout(this.looper.bind(this), 15)
        },
        looper: function() {
          this.loop--, this.play()
        },
        clear: function() {
          this.start_time = 0, this.played_time = 0, this.paused_time = 0
        },
        setVolume: function(options) {
          this.volume = options.volume, this.sound && (this.sound.volume = this.volume)
        }
      }
    }
  }
}(window, navigator, window.jQuery || window.$);

function play_sound(newest_notification_sound) {
  newest_notification_sound > nc_settings.last_notification && ("1" == nc_settings.sound_enabled && ion.sound.play("water_droplet"), $.ajax({
    url: "/cp/notifications/updateLastNotification/ajax/1/time/" + newest_notification_sound
  }), nc_settings.last_notification = newest_notification_sound)
}

function getNC() {
  $.ajax({
    url: "/cp/notifications/getNotificationCenter/ajax/1",
    dataType: "json"
  }).success(function(data) {
    nc_settings = data.settings, announce_data_new = data.announcements, data.notifications = announce_data_new.concat(data.notifications), data.notifications.sort(function(a, b) {
      return b.timestamp - a.timestamp
    }), nc_total_new = data.notifications.length, 0 == data.notifications.length ? (nc.children().remove(), nc.append("<li><a>No New Notifications</a></li>"), nc.append('<li class="divider"></li>'), nc.append('<li><a href="/cp/notifications">View all</a></li>'), nc_count[0].innerHTML = "0") : (play_sound(data.notifications[0].timestamp), nc_data = data.notifications, nc_count[0].innerHTML = data.notifications.length, nc.children().remove(), $.each(data.notifications, function(index, item) {
      return index > 7 ? !1 : (void 0 == item.subject && (item.subject = "No Subject"), void nc.append('<li><a href="#" onclick="showMessage(' + index + ')">' + item.subject + "</a></li>"))
    }), nc.append('<li class="divider"></li>'), nc.append('<li><a href="/cp/notifications">View all</a></li>'))
  })
}

function showMessage(index) {
  markItemRead(nc_data, index).success(function() {
    getNC()
  });
  var box_width = $(document).width() < 769 ? 320 : 600;
  jq_orig.msgbox("<h4>" + nc_data[index].subject + "</h4><p>" + nc_data[index].text + '</p><p><a href="' + nc_data[index].url + '">' + nc_data[index].url + "</a></p>", {
    type: "confirm",
    width: box_width,
    buttons: [{
      type: "submit",
      value: "Dismiss"
    }]
  })
}

function markItemRead(data, index) {
  return 1 == data[index].announce ? $.ajax({
    url: "/cp/notifications/setAnnounceRead/timestamp/" + data[index].timestamp,
    dataType: "json"
  }) : $.ajax({
    url: "/cp/notifications/markItemRead/timestamp/" + data[index].timestamp,
    dataType: "json"
  })
}

function markItemUnRead(data, index) {
  return 1 == data[index].announce ? $.ajax({
    url: "/cp/notifications/setAnnounceUnRead/timestamp/" + data[index].timestamp,
    dataType: "json"
  }) : $.ajax({
    url: "/cp/notifications/markItemUnRead/timestamp/" + data[index].timestamp,
    dataType: "json"
  })
}

function initialize_nc_list() {
  $(document).ready(function() {
    $("#notification-list").length > 0 && getNCList()
  })
}

function getNCList() {
  var nc = $("#notification-list");
  $("#nc_loading").show(), $("#nc_older").hide(), void 0 !== nc_data_all ? (timestamp = 0, $.each(nc_data_all, function(index, message) {
    void 0 == message.announce && (timestamp = message.timestamp)
  }), $.ajax({
    url: "/cp/notifications/getThirty/end_time/" + timestamp,
    dataType: "json"
  }).success(function(data) {
    0 == data.length ? nc.append('<tr><td colspan="3">No More Notifications</td></tr>') : (nc_data_start_at = nc_data_all.length, nc_data_all = nc_data_all.concat(data), $.each(data, function(index, item) {
      void 0 == item.subject && (item.subject = "No Subject"), timestring = formatTimestamp(item.timestamp), item.dismissed ? read = "" : read = " notification-unread", nc.append('<tr class="click_row ' + read + '"><td><input type="checkbox" id="check_' + (index + nc_data_start_at) + '"/></td><td onclick="showMessageAll(' + (index + nc_data_start_at) + ')">' + item.subject + '</td><td class="timestamp" onclick="showMessageAll(' + (index + nc_data_start_at) + ')">' + timestring + "</td></tr>")
    }), $("#nc_older").show()), $("#nc_loading").hide()
  })) : $.ajax({
    url: "/cp/notifications/getAnnouncements",
    dataType: "json"
  }).success(function(data) {
    announce_data_all = data, $.ajax({
      url: "/cp/notifications/getThirty",
      dataType: "json"
    }).success(function(data) {
      data = announce_data_all.concat(data), data.sort(function(a, b) {
        return b.timestamp - a.timestamp
      }), 0 == data.length ? nc.prepend("<tr><td>No Notifications</td></tr>") : (nc_data_all = data, $.each(data, function(index, item) {
        void 0 == item.subject && (item.subject = "No Subject"), timestring = formatTimestamp(item.timestamp), item.dismissed ? read = "" : read = " notification-unread", nc.append('<tr class="click_row ' + read + '"><td><input type="checkbox" id="check_' + index + '"/></td><td  onclick="showMessageAll(' + index + ')" >' + item.subject + '</td><td class="timestamp"  onclick="showMessageAll(' + index + ')">' + timestring + "</td></tr>")
      })), $("#nc_loading").hide(), $("#nc_older").show()
    })
  })
}

function formatTimestamp(timestamp) {
  ts = new Date(1e3 * timestamp), hours = ts.getHours(), minutes = ts.getMinutes(), mid = hours >= 12 ? "pm" : "am", hours %= 12, hours = hours ? hours : 12, minutes = minutes < 10 ? "0" + minutes : minutes;
  var time = hours + ":" + minutes + " " + mid;
  return date = $.datepicker.formatDate("mm/dd/yy", new Date(ts.getFullYear(), ts.getMonth(), ts.getDate())), date + " " + time
}

function showMessageAll(index) {
  markItemRead(nc_data_all, index).success(function() {
    $("input[id^='check_" + index + "']").parent().parent().removeClass("notification-unread"), getNC()
  });
  var box_width = $(document).width() < 769 ? 320 : 600;
  jq_orig.msgbox("<h4>" + nc_data_all[index].subject + "</h4><p>" + nc_data_all[index].text + '</p><p><a href="' + nc_data_all[index].url + '">' + nc_data_all[index].url + "</a></p>", {
    type: "confirm",
    width: box_width,
    buttons: [{
      type: "submit",
      value: "Dismiss"
    }]
  })
}

function selectAll() {
  $("input[id^='check']").each(function(index, box) {
    $("#select-all-check")[0].checked === !0 ? box.checked = !0 : box.checked = !1
  })
}

function markSelectionAsRead() {
  $("input[id^='check']").each(function(index, box) {
    box.checked === !0 && (notification_ops_to_run += 1, op_queue_interval[op_queue_interval.length] = setInterval(function(op_queue_index) {
      notification_op_in_progress === !1 && (notification_op_in_progress = !0, markItemRead(nc_data_all, index).success(function(data) {
        data.status === !0 && $("input[id^='check_" + index + "']").parent().parent().removeClass("notification-unread"), notification_op_in_progress = !1, notification_ops_to_run -= 1, clearInterval(op_queue_interval[op_queue_index])
      }))
    }, 500, op_queue_interval.length))
  }), getNCInterval = setInterval(function() {
    0 >= notification_ops_to_run && (getNC(), clearInterval(getNCInterval))
  }, 1e3)
}

function markSelectionAsUnRead() {
  $("input[id^='check']").each(function(index, box) {
    box.checked === !0 && (notification_ops_to_run += 1, op_queue_interval[op_queue_interval.length] = setInterval(function(op_queue_index) {
      notification_op_in_progress === !1 && (notification_op_in_progress = !0, markItemUnRead(nc_data_all, index).success(function(data) {
        data.status === !0 && $("input[id^='check_" + index + "']").parent().parent().addClass("notification-unread"), notification_op_in_progress = !1, notification_ops_to_run -= 1, clearInterval(op_queue_interval[op_queue_index])
      }))
    }, 500, op_queue_interval.length))
  }), getNCInterval = setInterval(function() {
    0 >= notification_op_in_progress && (getNC(), clearInterval(getNCInterval))
  }, 1e3)
}
var nc = $("#notification-center"),
  nc_count = $("#num_notifications"),
  nc_data, nc_data_all, nc_total_new = 0,
  nc_settings = null,
  announce_data_all, announce_data_new, sound_queue = 0;
ion.sound({
  sounds: [{
    name: "water_droplet"
  }],
  path: "/templates/cp/assets/sounds/",
  preload: !0,
  multiplay: !0,
  volume: .5
}), nc.length > 0 && (getNC(), setInterval(getNC, 6e5)), initialize_nc_list();
var getNCInterval, notification_op_in_progress = !1,
  notification_ops_to_run = 0,
  op_queue_interval = [];
