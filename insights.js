(function() {
    var TagSettings;
    TagSettings = function() {
        function d(a) {
            this.context = a;
            this.data = {};
            this._set_window_options();
            this._set_partner_ids();
            this.data.loaded_in_iframe = this._loaded_in_iframe();
            a = this._get_page_url();
            this.data.protocol = "https:";
            this.data.page_url = a.href;
            this.data.hostname = a.hostname;
            this.data.context_hostname = this.context.win.location.hostname;
            this.data.page_url_query = a.search ? a.search.substring(1) : "";
            this.data.referrer = this.context.doc.referrer
        }
        d.prefixes = ["_bizo_", "_linkedin_"];
        d.options = {
            raw_data: "data_partner_raw_data",
            raw_data_overwrite: "data_partner_raw_data_overwrite",
            encrypted_data: "data_partner_encrypted_data",
            partner_data: "data_partner_data",
            async_target: "data_async_target",
            use_iframe: "data_use_iframe",
            use_callback: "data_partner_use_callback",
            test_url: "data_test_base_url"
        };
        d.prototype._get_page_url = function() {
            var a;
            if (this._loaded_in_iframe() && this.context.doc.referrer)
                try {
                    return new URL(this.context.doc.referrer)
                } catch (b) {
                    a = document.createElement("a");
                    a.href = this.context.doc.referrer;
                    return a
                }
            else
                return this.context.win.location
        }
        ;
        d.prototype._loaded_in_iframe = function() {
            return window.self !== this.context.win.top ? true : false
        }
        ;
        d.prototype._set_partner_ids = function() {
            var a, b, c, e, f, g;
            b = [];
            g = d.prefixes;
            e = 0;
            for (f = g.length; e < f; e++) {
                c = g[e];
                if (a = this.context.win[c + "data_partner_id"])
                    b = b.concat(a);
                if (a = this.context.win[c + "data_partner_ids"])
                    b = a.concat(b)
            }
            return this.data.partner_ids = b
        }
        ;
        d.prototype._set_window_options = function() {
            return this._set_options(d.options, function(a) {
                return function(b) {
                    var c, e, f, g;
                    g = d.prefixes;
                    e = 0;
                    for (f = g.length; e < f; e++) {
                        c = g[e];
                        if (a.context.win[c + b] != null)
                            return a.context.win[c + b]
                    }
                }
            }(this))
        }
        ;
        d.prototype._set_option = function(a, b) {
            var c, e;
            c = ArrayUtil.is_array;
            return c(b) ? this.data[a] = function() {
                var f, g, h;
                h = [];
                f = 0;
                for (g = b.length; f < g; f++) {
                    e = b[f];
                    h.push(e.toString())
                }
                return h
            }() : this.data[a] = b.toString()
        }
        ;
        d.prototype._set_options = function(a, b) {
            var c, e, f;
            f = [];
            for (c in a) {
                e = a[c];
                e = b(e);
                this._valid_property(e) ? f.push(this._set_option(c, e)) : f.push(void 0)
            }
            return f
        }
        ;
        d.prototype._valid_property = function(a) {
            return a != null && a !== "undefined" && a.toString && a.toString().length > 0
        }
        ;
        return d
    }();
    var ParamBuilder;
    ParamBuilder = function() {
        function d(a) {
            this.tag_settings = a;
            this.context = this.tag_settings.context;
            this.params = this.tag_settings.partner_data || {}
        }
        d.prototype.add_default_parameters = function() {
            var a, b, c, e;
            c = this.tag_settings.data;
            a = c.use_iframe ? "iframe" : "js";
            a = {
                pid: c.partner_ids.toString(),
                url: c.page_url,
                fmt: a
            };
            e = [];
            for (b in a) {
                c = a[b];
                e.push(this.add(b, c))
            }
            return e
        }
        ;
        d.prototype.add = function(a, b, c) {
            if (c == null)
                c = 0;
            if (a != null && b != null) {
                b = c > 0 ? b.substring(0, Math.min(b.length, c)) : b;
                return this.params[a] = b
            }
        }
        ;
        d.prototype.add_all = function(a, b) {
            var c, e, f, g, h;
            h = [];
            c = f = 0;
            for (g = b.length; f < g; c = ++f) {
                e = b[c];
                h.push(this.add("" + a + "[" + c + "]", e))
            }
            return h
        }
        ;
        d.prototype.add_encrypted_data_if_present = function() {
            var a;
            a = this.tag_settings.data.encrypted_data;
            if (a != null)
                return this.add_all("ed", a)
        }
        ;
        d.prototype.add_raw_data_if_present = function() {
            var a;
            a = this.tag_settings.data.raw_data;
            a != null && this.add_all("rd", a);
            if (this.tag_settings.data.raw_data_overwrite)
                return this.params.rdo = "t"
        }
        ;
        d.prototype.add_callback_if_present = function() {
            if (this.tag_settings.data.use_callback != null)
                return this.add("callback", "_bizo_callback")
        }
        ;
        d.prototype.add_secure_param_if_page_is_secure = function() {
            if (this.tag_settings.data.protocol === "https:")
                return this.params.s = "1"
        }
        ;
        d.prototype.add_li_fat_id = function(a) {
            return this.add("li_fat_id", a)
        }
        ;
        d.prototype.build = function() {
            this.add_default_parameters();
            this.add_encrypted_data_if_present();
            this.add_raw_data_if_present();
            this.add_callback_if_present();
            this.add_secure_param_if_page_is_secure();
            return this.params
        }
        ;
        return d
    }();
    var dom_ready;
    dom_ready = function() {
        var d;
        d = false;
        return function(a) {
            var b, c, e;
            c = function() {
                if (!d) {
                    d = true;
                    return a()
                }
            }
            ;
            b = function() {
                try {
                    document.documentElement.doScroll("left")
                } catch (f) {
                    setTimeout(b, 1);
                    return
                }
                return c()
            }
            ;
            if (document.readyState === "complete")
                return c();
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", c, false);
                return window.addEventListener("load", c, false)
            } else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", c);
                window.attachEvent("onload", c);
                if ((typeof document !== "undefined" && document !== null ? (e = document.documentElement) != null ? e.doScroll : void 0 : void 0) && (typeof window !== "undefined" && window !== null ? window.frameElement : void 0) === null)
                    return b()
            }
        }
    }();
    var PartnerTags;
    PartnerTags = function() {
        function d() {}
        d.fire_partners = function(a, b, c, e) {
            var f, g, h, i;
            if (!(a != null && a.length && a.length > 0))
                return null;
            i = [];
            g = 0;
            for (h = a.length; g < h; g++) {
                f = a[g];
                switch (f.t) {
                case "image":
                    i.push(this.fire_partner_pixel(f, b, c, e));
                    break;
                case "script":
                    i.push(this.fire_partner_script(f, b, c, e));
                    break;
                default:
                    i.push(void 0)
                }
            }
            return i
        }
        ;
        d.fire_partner_pixel = function(a, b, c, e) {
            a.pid.toString();
            a = a.u;
            e.now().getTime();
            return b.write_pixel({
                src: a,
                onload: function() {}
            })
        }
        ;
        d.fire_partner_script = function(a, b, c, e) {
            a.pid.toString();
            a = a.u;
            e.now().getTime();
            return b.write_script({
                src: a,
                onload: function() {}
            })
        }
        ;
        return d
    }();
    var FirstPartyIdMgr;
    FirstPartyIdMgr = function() {
        function d(c, e) {
            var f;
            this.cookie_manager = new CookieManager(c);
            if (this.li_fat_id = this._get_param_value_from_url(e.data.page_url_query, b)) {
                f = e.data.context_hostname.split(".");
                this._try_to_set_li_fat_cookie_on_highest_top_level_domains(f, [])
            } else
                this.li_fat_id = this.cookie_manager.get(a)
        }
        var a, b;
        a = b = "li_fat_id";
        d.prototype._try_to_set_li_fat_cookie_on_highest_top_level_domains = function(c, e) {
            var f;
            if (c.length === 0)
                return this._set_li_fat_cookie();
            else if (e.length === 0) {
                e.unshift(c.pop());
                return this._try_to_set_li_fat_cookie_on_highest_top_level_domains(c, e)
            } else {
                e.unshift(c.pop());
                f = e.join(".");
                this._set_li_fat_cookie(f);
                f = this.cookie_manager.get(a);
                if (!f)
                    return this._try_to_set_li_fat_cookie_on_highest_top_level_domains(c, e)
            }
        }
        ;
        d.prototype._set_li_fat_cookie = function(c) {
            if (c == null)
                c = null;
            return this.cookie_manager.set(a, this.li_fat_id, 30, "/", c)
        }
        ;
        d.prototype._get_param_value_from_url = function(c, e) {
            var f, g, h, i, j;
            g = c.split("&");
            f = i = 0;
            for (j = g.length; 0 <= j ? i < j : i > j; f = 0 <= j ? ++i : --i) {
                h = g[f].split("=");
                f = h[0];
                h = h[1];
                if (f === e)
                    return decodeURIComponent(h)
            }
        }
        ;
        return d
    }();
    var BaseLogger, ConsoleLogger, ErrorLog, LocalLogger, PixelLogger, __slice = [].slice, __hasProp = {}.hasOwnProperty, __extends = function(d, a) {
        function b() {
            this.constructor = d
        }
        for (var c in a)
            if (__hasProp.call(a, c))
                d[c] = a[c];
        b.prototype = a.prototype;
        d.prototype = new b;
        d.__super__ = a.prototype;
        return d
    };
    ErrorLog = function() {
        function d() {}
        d.log = function() {
            var a, b, c, e, f, g, h;
            a = arguments[0];
            b = arguments[1];
            e = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
            h = [];
            f = 0;
            for (g = e.length; f < g; f++) {
                c = e[f];
                h.push(c.log(a, b))
            }
            return h
        }
        ;
        return d
    }();
    BaseLogger = function() {
        function d() {}
        d.map_error_data = function(a, b, c) {
            var e, f;
            if (c == null)
                c = function(g) {
                    return g
                }
                ;
            return function() {
                var g;
                g = [];
                for (e in a) {
                    f = a[e];
                    g.push("" + e + "=" + c(f))
                }
                return g
            }().join(b)
        }
        ;
        return d
    }();
    PixelLogger = function(d) {
        function a() {
            return a.__super__.constructor.apply(this, arguments)
        }
        __extends(a, d);
        a.https_path = "https://px.ads.linkedin.com/insight_tag_errors.gif";
        a.log = function(b, c) {
            var e, f;
            e = this.map_error_data(c, "&", encodeURIComponent);
            f = new Image(1,1);
            f.src = "" + this.https_path + "?" + e;
            return f
        }
        ;
        return a
    }(BaseLogger);
    ConsoleLogger = function(d) {
        function a() {
            return a.__super__.constructor.apply(this, arguments)
        }
        __extends(a, d);
        a.log = function(b, c) {
            var e;
            e = this.map_error_data(c, ", ");
            if (typeof console !== "undefined" && console !== null && console.log != null)
                return console.log(e)
        }
        ;
        return a
    }(BaseLogger);
    LocalLogger = function(d) {
        function a() {
            return a.__super__.constructor.apply(this, arguments)
        }
        __extends(a, d);
        a.errors = [];
        a.log = function(b, c) {
            return this.errors.push(c)
        }
        ;
        return a
    }(BaseLogger);
    var DOMUtil;
    DOMUtil = function() {
        function d(a, b) {
            this.context = a;
            this.attachment_strategy = b != null ? b : d.append;
            this.doc = this.context.doc;
            this.body = this.context.doc.body
        }
        d.append = function(a, b) {
            return b.appendChild(a.to_element())
        }
        ;
        d.write = function(a, b, c) {
            return c.write(a.to_html_string())
        }
        ;
        d.prototype.create_tag = function(a, b) {
            return new Tag(a,b)
        }
        ;
        d.prototype.write_script = function(a, b) {
            if (a == null)
                a = {};
            if (b == null)
                b = this.body;
            this.attachment_strategy(new Tag("script",a), b, this.doc)
        }
        ;
        d.prototype.write_iframe = function(a, b) {
            if (a == null)
                a = {};
            if (b == null)
                b = this.body;
            this.attachment_strategy(new Tag("iframe",a), b, this.doc)
        }
        ;
        d.prototype.write_and_throw_error = function(a) {
            this.write_script(a);
            throw a;
        }
        ;
        d.prototype.write_pixel = function(a, b) {
            if (a == null)
                a = {};
            if (b == null)
                b = this.body;
            this.attachment_strategy(new Tag("img",a), b, this.doc)
        }
        ;
        return d
    }();
    var Tag;
    Tag = function() {
        function d(a, b, c) {
            this.type = a;
            if (b == null)
                b = {};
            this.doc = c != null ? c : document;
            this.attributes = HashUtil.merge_copy(d.defaults(this.type), b)
        }
        d.defaults = function(a) {
            switch (a) {
            case "script":
                return {
                    type: "text/javascript"
                };
            case "img":
                return {
                    width: "1",
                    height: "1",
                    border: "0",
                    alt: "",
                    style: {
                        display: "none"
                    }
                };
            case "iframe":
                return {
                    width: 0,
                    height: 0,
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0,
                    scrolling: "no"
                };
            default:
                return {}
            }
        }
        ;
        d.prototype.to_html_string = function() {
            var a, b, c, e, f;
            c = "<" + this.type;
            f = this.attributes;
            for (a in f) {
                e = f[a];
                b = a.toLowerCase();
                if (!this._is_object(e) && a !== "innerHTML" && a !== "text")
                    c += " " + b + "='" + e + "'";
                if (a === "style")
                    c += " " + b + "='" + this._get_style_string(e) + "'"
            }
            c += ">";
            if (this.attributes.text != null)
                c += "" + this.attributes.text;
            if (this.attributes.innerHTML != null)
                c += "" + this.attributes.innerHTML;
            c += "</" + this.type + ">";
            return c
        }
        ;
        d.prototype.to_element = function() {
            var a, b, c, e;
            b = this.doc.createElement(this.type);
            e = this.attributes;
            for (a in e) {
                c = e[a];
                this.set_property(b, a, c)
            }
            return b
        }
        ;
        d.prototype.set_invisible = function() {
            var a;
            if ((a = this.attributes).style == null)
                a.style = {};
            return this.attributes.style.display = "none"
        }
        ;
        d.prototype.set_property = function(a, b, c) {
            return (!this._is_object(c) ? this._set_single_property : this._set_multiple_properties)(a, b, c)
        }
        ;
        d.prototype._get_style_string = function(a) {
            var b, c, e;
            c = "";
            for (b in a) {
                e = a[b];
                c += "" + b + ": " + e + "; "
            }
            return c
        }
        ;
        d.prototype._is_object = function(a) {
            return typeof a === "object"
        }
        ;
        d.prototype._set_single_property = function(a, b, c) {
            return a[b] = c
        }
        ;
        d.prototype._set_multiple_properties = function(a, b, c) {
            var e, f, g;
            g = [];
            for (e in c) {
                f = c[e];
                g.push(a[b][e] = f)
            }
            return g
        }
        ;
        return d
    }();
    var HashUtil;
    HashUtil = function() {
        function d() {}
        d.clone = function(a) {
            return this.merge(a, {})
        }
        ;
        d.merge = function(a, b) {
            var c;
            for (c in a)
                if (a.hasOwnProperty(c) && b[c] == null)
                    b[c] = a[c];
            return b
        }
        ;
        d.merge_copy = function(a, b) {
            return this.merge(a, this.clone(b))
        }
        ;
        return d
    }();
    var ArrayUtil;
    ArrayUtil = function() {
        function d() {}
        d.includes = function(a, b) {
            var c, e, f;
            e = 0;
            for (f = a.length; e < f; e++) {
                c = a[e];
                if (c === b)
                    return true
            }
            return false
        }
        ;
        d.is_array = function(a) {
            return Object.prototype.toString.call(a) === "[object Array]"
        }
        ;
        d.map = function(a, b) {
            var c, e, f, g;
            if (a == null)
                return null;
            g = [];
            e = 0;
            for (f = a.length; e < f; e++) {
                c = a[e];
                g.push(b(c))
            }
            return g
        }
        ;
        d.reduce = function(a, b, c) {
            var e, f, g;
            if (a == null)
                return b;
            f = 0;
            for (g = a.length; f < g; f++) {
                e = a[f];
                b = c(b, e)
            }
            return b
        }
        ;
        d.flatten = function(a) {
            if (a == null)
                return null;
            return this.reduce(a, [], function(b) {
                return function(c, e) {
                    var f, g, h;
                    if (b.is_array(e)) {
                        g = 0;
                        for (h = e.length; g < h; g++) {
                            f = e[g];
                            c.push(f)
                        }
                    } else
                        c.push(e);
                    return c
                }
            }(this))
        }
        ;
        return d
    }();
    var QueryStringBuilder;
    QueryStringBuilder = function() {
        function d() {}
        d._to_param = function(a, b) {
            return "" + encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        d.build = function(a) {
            var b, c, e, f, g;
            c = ["time=" + (new Date).getTime()];
            for (b in a) {
                g = a[b];
                if (g != null)
                    if (ArrayUtil.is_array(g)) {
                        e = function() {
                            var h, i, j;
                            j = [];
                            h = 0;
                            for (i = g.length; h < i; h++) {
                                f = g[h];
                                j.push(this._to_param(b, f))
                            }
                            return j
                        }
                        .call(this);
                        c.push(e)
                    } else
                        c.push(this._to_param(b, g))
            }
            return ArrayUtil.flatten(c).join("&")
        }
        ;
        return d
    }();
    var CookieManager;
    CookieManager = function() {
        function d(a) {
            this.context = a;
            this.one_day = 864E5
        }
        d.prototype.get = function(a) {
            var b, c, e, f, g;
            g = this.context.doc.cookie.split("; ");
            e = 0;
            for (f = g.length; e < f; e++) {
                b = g[e];
                c = b.split("=");
                b = c[0];
                c = c[1];
                if (b === a && c != null)
                    return unescape(c)
            }
            return null
        }
        ;
        d.prototype.set = function(a, b, c, e, f) {
            if (c == null)
                c = 1;
            if (e == null)
                e = "/";
            if (f == null)
                f = null;
            c = this.context.clock.future_date(this.one_day * c);
            a = "" + a + "=" + escape(b);
            a += "; expires=" + c.toGMTString();
            if (f)
                a += "; domain=" + f;
            a += "; path=" + e;
            return this.context.doc.cookie = a
        }
        ;
        d.prototype["delete"] = function(a, b) {
            if (b == null)
                b = "/";
            return this.set(a, "", -10, b)
        }
        ;
        return d
    }();
    var Clock;
    Clock = function() {
        function d() {
            this.real_time = function() {
                return new Date
            }
            ;
            this.time = function() {
                return this.real_time()
            }
        }
        d.prototype.now = function() {
            return this.time()
        }
        ;
        d.prototype.set_time = function(a) {
            return this.time = function() {
                return a
            }
        }
        ;
        d.prototype.reset_time = function() {
            return this.time = function() {
                return this.real_time()
            }
        }
        ;
        d.prototype.future_date = function(a) {
            return this._timewarp(a)
        }
        ;
        d.prototype.past_date = function(a) {
            return this._timewarp(a * -1)
        }
        ;
        d.prototype._timewarp = function(a) {
            return this._create_date(this.now().getTime() + a)
        }
        ;
        d.prototype._create_date = function(a) {
            var b;
            b = new Date;
            b.setTime(a);
            return b
        }
        ;
        return d
    }();
    var Context;
    Context = function() {
        return function(d, a, b) {
            this.doc = d;
            this.win = a;
            this.clock = b
        }
    }();
    var InsightTags;
    InsightTags = function() {
        function d(a) {
            this.context = a;
            this.tag_settings = new TagSettings(a);
            this.first_party_id_manager = new FirstPartyIdMgr(a,this.tag_settings);
            this.dom = new DOMUtil(a)
        }
        d.init = function(a) {
            var b, c;
            a.win._bizo_local_logger = LocalLogger;
            c = new d(a);
            c.attach_global_functions_for_data_collector_callback();
            b = a.win.data_collector_iframe_callback;
            b != null && b();
            if (this.already_called(a.win))
                return "already called";
            a.win._bizo_main_already_called = true;
            return c.init()
        }
        ;
        d.already_called = function(a) {
            return a._bizo_main_already_called === true
        }
        ;
        d.prototype.get_pixli_url = function() {
            return "" + this.tag_settings.data.protocol + "//" + (this.tag_settings.data.test_url || "px.ads.linkedin.com") + "/collect/"
        }
        ;
        d.prototype.create_query_string = function() {
            var a, b;
            a = this.first_party_id_manager.li_fat_id;
            b = new ParamBuilder(this.tag_settings);
            a != null && b.add_li_fat_id(a);
            return QueryStringBuilder.build(b.build())
        }
        ;
        d.prototype.write_tags_to_dom = function() {
            var a, b;
            a = this.create_query_string();
            a = "" + this.get_pixli_url() + "?" + a;
            b = this.context.doc.body;
            if (this.tag_settings.data.use_iframe != null)
                this.dom.write_iframe({
                    id: "_bizo_iframe",
                    src: a
                });
            else {
                if (this.tag_settings.data.async_target != null)
                    b = this.context.doc.getElementById(this.tag_settings.data.async_target);
                return this.dom.write_script({
                    src: a
                }, b)
            }
        }
        ;
        d.prototype.attach_global_functions_for_data_collector_callback = function(a) {
            if (a == null)
                a = this.context.win;
            return a._bizo_fire_partners = function(b) {
                return function(c) {
                    try {
                        return PartnerTags.fire_partners(c, b.dom, b.tag_settings, b.context.clock)
                    } catch (e) {
                        return ErrorLog.log(b.context, {
                            error: e
                        }, PixelLogger, ConsoleLogger, LocalLogger)
                    }
                }
            }(this)
        }
        ;
        d.prototype.init = function() {
            var a, b, c, e, f;
            f = this.exit_conditions = [["no partner id", this.tag_settings.data.partner_ids == null]];
            c = 0;
            for (e = f.length; c < e; c++) {
                a = f[c];
                b = a[0];
                a = a[1];
                if (a === true) {
                    ErrorLog.log(this.context, {
                        error: b
                    }, ConsoleLogger, LocalLogger);
                    return b
                }
            }
            this.write_tags_to_dom();
            return true
        }
        ;
        return d
    }();
    dom_ready(function() {
        var d;
        d = new Context(document,window,new Clock);
        try {
            return InsightTags.init(d)
        } catch (a) {
            return ErrorLog.log(d, {
                pid: window._bizo_data_partner_id || window._linkedin_data_partner_id || window._linkedin_data_partner_ids,
                error: a,
                href: window.location.href
            }, PixelLogger, ConsoleLogger, LocalLogger)
        }
    });
}
)();
