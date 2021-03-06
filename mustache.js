!function(global, factory) {
    "object" == typeof exports && exports && "string" != typeof exports.nodeName ? factory(exports) : "function" == typeof define && define.amd ? define(["exports"], factory) : (global.Mustache = {},
    factory(global.Mustache))
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
                for (; spaces.length; )
                    delete tokens[spaces.pop()];
            else
                spaces = [];
            hasTag = !1,
            nonSpace = !1
        }
        function compileTags(tagsToCompile) {
            if ("string" == typeof tagsToCompile && (tagsToCompile = tagsToCompile.split(spaceRe, 2)),
            !isArray(tagsToCompile) || 2 !== tagsToCompile.length)
                throw new Error("Invalid tags: " + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*"),
            closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1])),
            closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
        }
        if (!template)
            return [];
        var openingTagRe, closingTagRe, closingCurlyRe, sections = [], tokens = [], spaces = [], hasTag = !1, nonSpace = !1;
        compileTags(tags || mustache.tags);
        for (var start, type, value, chr, token, openSection, scanner = new Scanner(template); !scanner.eos(); ) {
            if (start = scanner.pos,
            value = scanner.scanUntil(openingTagRe))
                for (var i = 0, valueLength = value.length; valueLength > i; ++i)
                    chr = value.charAt(i),
                    isWhitespace(chr) ? spaces.push(tokens.length) : nonSpace = !0,
                    tokens.push(["text", chr, start, start + 1]),
                    start += 1,
                    "\n" === chr && stripSpace();
            if (!scanner.scan(openingTagRe))
                break;
            if (hasTag = !0,
            type = scanner.scan(tagRe) || "name",
            scanner.scan(whiteRe),
            "=" === type ? (value = scanner.scanUntil(equalsRe),
            scanner.scan(equalsRe),
            scanner.scanUntil(closingTagRe)) : "{" === type ? (value = scanner.scanUntil(closingCurlyRe),
            scanner.scan(curlyRe),
            scanner.scanUntil(closingTagRe),
            type = "&") : value = scanner.scanUntil(closingTagRe),
            !scanner.scan(closingTagRe))
                throw new Error("Unclosed tag at " + scanner.pos);
            if (token = [type, value, start, scanner.pos],
            tokens.push(token),
            "#" === type || "^" === type)
                sections.push(token);
            else if ("/" === type) {
                if (openSection = sections.pop(),
                !openSection)
                    throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value)
                    throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
            } else
                "name" === type || "{" === type || "&" === type ? nonSpace = !0 : "=" === type && compileTags(value)
        }
        if (openSection = sections.pop())
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens))
    }
    function squashTokens(tokens) {
        for (var token, lastToken, squashedTokens = [], i = 0, numTokens = tokens.length; numTokens > i; ++i)
            token = tokens[i],
            token && ("text" === token[0] && lastToken && "text" === lastToken[0] ? (lastToken[1] += token[1],
            lastToken[3] = token[3]) : (squashedTokens.push(token),
            lastToken = token));
        return squashedTokens
    }
    function nestTokens(tokens) {
        for (var token, section, nestedTokens = [], collector = nestedTokens, sections = [], i = 0, numTokens = tokens.length; numTokens > i; ++i)
            switch (token = tokens[i],
            token[0]) {
            case "#":
            case "^":
                collector.push(token),
                sections.push(token),
                collector = token[4] = [];
                break;
            case "/":
                section = sections.pop(),
                section[5] = token[2],
                collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                break;
            default:
                collector.push(token)
            }
        return nestedTokens
    }
    function Scanner(string) {
        this.string = string,
        this.tail = string,
        this.pos = 0
    }
    function Context(view, parentContext) {
        this.view = view,
        this.cache = {
            ".": this.view
        },
        this.parent = parentContext
    }
    function Writer() {
        this.cache = {}
    }
    var objectToString = Object.prototype.toString
      , isArray = Array.isArray || function(object) {
        return "[object Array]" === objectToString.call(object)
    }
      , regExpTest = RegExp.prototype.test
      , nonSpaceRe = /\S/
      , entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    }
      , whiteRe = /\s*/
      , spaceRe = /\s+/
      , equalsRe = /\s*=/
      , curlyRe = /\s*\}/
      , tagRe = /#|\^|\/|>|\{|&|=|!/;
    Scanner.prototype.eos = function() {
        return "" === this.tail
    }
    ,
    Scanner.prototype.scan = function(re) {
        var match = this.tail.match(re);
        if (!match || 0 !== match.index)
            return "";
        var string = match[0];
        return this.tail = this.tail.substring(string.length),
        this.pos += string.length,
        string
    }
    ,
    Scanner.prototype.scanUntil = function(re) {
        var match, index = this.tail.search(re);
        switch (index) {
        case -1:
            match = this.tail,
            this.tail = "";
            break;
        case 0:
            match = "";
            break;
        default:
            match = this.tail.substring(0, index),
            this.tail = this.tail.substring(index)
        }
        return this.pos += match.length,
        match
    }
    ,
    Context.prototype.push = function(view) {
        return new Context(view,this)
    }
    ,
    Context.prototype.lookup = function(name) {
        var value, cache = this.cache;
        if (cache.hasOwnProperty(name))
            value = cache[name];
        else {
            for (var names, index, context = this, lookupHit = !1; context; ) {
                if (name.indexOf(".") > 0)
                    for (value = context.view,
                    names = name.split("."),
                    index = 0; null != value && index < names.length; )
                        index === names.length - 1 && (lookupHit = hasProperty(value, names[index])),
                        value = value[names[index++]];
                else
                    value = context.view[name],
                    lookupHit = hasProperty(context.view, name);
                if (lookupHit)
                    break;
                context = context.parent
            }
            cache[name] = value
        }
        return isFunction(value) && (value = value.call(this.view)),
        value
    }
    ,
    Writer.prototype.clearCache = function() {
        this.cache = {}
    }
    ,
    Writer.prototype.parse = function(template, tags) {
        var cache = this.cache
          , tokens = cache[template];
        return null == tokens && (tokens = cache[template] = parseTemplate(template, tags)),
        tokens
    }
    ,
    Writer.prototype.render = function(template, view, partials) {
        var tokens = this.parse(template)
          , context = view instanceof Context ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template)
    }
    ,
    Writer.prototype.renderTokens = function(tokens, context, partials, originalTemplate) {
        for (var token, symbol, value, buffer = "", i = 0, numTokens = tokens.length; numTokens > i; ++i)
            value = void 0,
            token = tokens[i],
            symbol = token[0],
            "#" === symbol ? value = this.renderSection(token, context, partials, originalTemplate) : "^" === symbol ? value = this.renderInverted(token, context, partials, originalTemplate) : ">" === symbol ? value = this.renderPartial(token, context, partials, originalTemplate) : "&" === symbol ? value = this.unescapedValue(token, context) : "name" === symbol ? value = this.escapedValue(token, context) : "text" === symbol && (value = this.rawValue(token)),
            void 0 !== value && (buffer += value);
        return buffer
    }
    ,
    Writer.prototype.renderSection = function(token, context, partials, originalTemplate) {
        function subRender(template) {
            return self.render(template, context, partials)
        }
        var self = this
          , buffer = ""
          , value = context.lookup(token[1]);
        if (value) {
            if (isArray(value))
                for (var j = 0, valueLength = value.length; valueLength > j; ++j)
                    buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
            else if ("object" == typeof value || "string" == typeof value || "number" == typeof value)
                buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
            else if (isFunction(value)) {
                if ("string" != typeof originalTemplate)
                    throw new Error("Cannot use higher-order sections without the original template");
                value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender),
                null != value && (buffer += value)
            } else
                buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            return buffer
        }
    }
    ,
    Writer.prototype.renderInverted = function(token, context, partials, originalTemplate) {
        var value = context.lookup(token[1]);
        return !value || isArray(value) && 0 === value.length ? this.renderTokens(token[4], context, partials, originalTemplate) : void 0
    }
    ,
    Writer.prototype.renderPartial = function(token, context, partials) {
        if (partials) {
            var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
            return null != value ? this.renderTokens(this.parse(value), context, partials, value) : void 0
        }
    }
    ,
    Writer.prototype.unescapedValue = function(token, context) {
        var value = context.lookup(token[1]);
        return null != value ? value : void 0
    }
    ,
    Writer.prototype.escapedValue = function(token, context) {
        var value = context.lookup(token[1]);
        return null != value ? mustache.escape(value) : void 0
    }
    ,
    Writer.prototype.rawValue = function(token) {
        return token[1]
    }
    ,
    mustache.name = "mustache.js",
    mustache.version = "2.2.1",
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer;
    mustache.clearCache = function() {
        return defaultWriter.clearCache()
    }
    ,
    mustache.parse = function(template, tags) {
        return defaultWriter.parse(template, tags)
    }
    ,
    mustache.render = function(template, view, partials) {
        if ("string" != typeof template)
            throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
        return defaultWriter.render(template, view, partials)
    }
    ,
    mustache.to_html = function(template, view, partials, send) {
        var result = mustache.render(template, view, partials);
        return isFunction(send) ? void send(result) : result
    }
    ,
    mustache.escape = escapeHtml,
    mustache.Scanner = Scanner,
    mustache.Context = Context,
    mustache.Writer = Writer
});
