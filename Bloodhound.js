!function(root, factory) {
    "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(a0) {
        return root.Bloodhound = factory(a0)
    }) : "object" == typeof exports ? module.exports = factory(require("jquery")) : root.Bloodhound = factory(jQuery)
}(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str)
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function(obj) {
                return "string" == typeof obj
            },
            isNumber: function(obj) {
                return "number" == typeof obj
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return "undefined" == typeof obj
            },
            isElement: function(obj) {
                return !(!obj || 1 !== obj.nodeType)
            },
            isJQuery: function(obj) {
                return obj instanceof $
            },
            toStr: function(s) {
                return _.isUndefined(s) || null === s ? "" : s + ""
            },
            bind: $.proxy,
            each: function(collection, cb) {
                function reverseArgs(index, value) {
                    return cb(value, index)
                }
                $.each(collection, reverseArgs)
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = !0;
                return obj ? ($.each(obj, function(key, val) {
                    return (result = test.call(null, val, key, obj)) ? void 0 : !1
                }),
                !!result) : result
            },
            some: function(obj, test) {
                var result = !1;
                return obj ? ($.each(obj, function(key, val) {
                    return (result = test.call(null, val, key, obj)) ? !1 : void 0
                }),
                !!result) : result
            },
            mixin: $.extend,
            identity: function(x) {
                return x
            },
            clone: function(obj) {
                return $.extend(!0, {}, obj)
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++
                }
            },
            templatify: function(obj) {
                function template() {
                    return String(obj)
                }
                return $.isFunction(obj) ? obj : template
            },
            defer: function(fn) {
                setTimeout(fn, 0)
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var later, callNow, context = this, args = arguments;
                    return later = function() {
                        timeout = null,
                        immediate || (result = func.apply(context, args))
                    }
                    ,
                    callNow = immediate && !timeout,
                    clearTimeout(timeout),
                    timeout = setTimeout(later, wait),
                    callNow && (result = func.apply(context, args)),
                    result
                }
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                return previous = 0,
                later = function() {
                    previous = new Date,
                    timeout = null,
                    result = func.apply(context, args)
                }
                ,
                function() {
                    var now = new Date
                      , remaining = wait - (now - previous);
                    return context = this,
                    args = arguments,
                    0 >= remaining ? (clearTimeout(timeout),
                    timeout = null,
                    previous = now,
                    result = func.apply(context, args)) : timeout || (timeout = setTimeout(later, remaining)),
                    result
                }
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val)
            },
            noop: function() {}
        }
    }()
      , VERSION = "0.11.1"
      , tokenizers = function() {
        "use strict";
        function whitespace(str) {
            return str = _.toStr(str),
            str ? str.split(/\s+/) : []
        }
        function nonword(str) {
            return str = _.toStr(str),
            str ? str.split(/\W+/) : []
        }
        function getObjTokenizer(tokenizer) {
            return function(keys) {
                return keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0),
                function(o) {
                    var tokens = [];
                    return _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])))
                    }),
                    tokens
                }
            }
        }
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
            }
        }
    }()
      , LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100,
            this.reset(),
            this.maxSize <= 0 && (this.set = this.get = $.noop)
        }
        function List() {
            this.head = this.tail = null
        }
        function Node(key, val) {
            this.key = key,
            this.val = val,
            this.prev = this.next = null
        }
        return _.mixin(LruCache.prototype, {
            set: function(key, val) {
                var node, tailItem = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(tailItem),
                delete this.hash[tailItem.key],
                this.size--),
                (node = this.hash[key]) ? (node.val = val,
                this.list.moveToFront(node)) : (node = new Node(key,val),
                this.list.add(node),
                this.hash[key] = node,
                this.size++)
            },
            get: function(key) {
                var node = this.hash[key];
                return node ? (this.list.moveToFront(node),
                node.val) : void 0
            },
            reset: function() {
                this.size = 0,
                this.hash = {},
                this.list = new List
            }
        }),
        _.mixin(List.prototype, {
            add: function(node) {
                this.head && (node.next = this.head,
                this.head.prev = node),
                this.head = node,
                this.tail = this.tail || node
            },
            remove: function(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next,
                node.next ? node.next.prev = node.prev : this.tail = node.prev
            },
            moveToFront: function(node) {
                this.remove(node),
                this.add(node)
            }
        }),
        LruCache
    }()
      , PersistentStorage = function() {
        "use strict";
        function PersistentStorage(namespace, override) {
            this.prefix = ["__", namespace, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix)),
            this.ls = override || LOCAL_STORAGE,
            !this.ls && this._noop()
        }
        function now() {
            return (new Date).getTime()
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val)
        }
        function decode(val) {
            return $.parseJSON(val)
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; len > i; i++)
                (key = LOCAL_STORAGE.key(i)).match(keyMatcher) && keys.push(key.replace(keyMatcher, ""));
            return keys
        }
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage,
            LOCAL_STORAGE.setItem("~~~", "!"),
            LOCAL_STORAGE.removeItem("~~~")
        } catch (err) {
            LOCAL_STORAGE = null
        }
        return _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val)
                } catch (err) {
                    "QuotaExceededError" === err.name && (this.clear(),
                    this._noop())
                }
            },
            get: function(key) {
                return this.isExpired(key) && this.remove(key),
                decode(this.ls.getItem(this._prefix(key)))
            },
            set: function(key, val, ttl) {
                return _.isNumber(ttl) ? this._safeSet(this._ttlKey(key), encode(now() + ttl)) : this.ls.removeItem(this._ttlKey(key)),
                this._safeSet(this._prefix(key), encode(val))
            },
            remove: function(key) {
                return this.ls.removeItem(this._ttlKey(key)),
                this.ls.removeItem(this._prefix(key)),
                this
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; )
                    this.remove(keys[i]);
                return this
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? !0 : !1
            }
        }),
        PersistentStorage
    }()
      , Transport = function() {
        "use strict";
        function Transport(o) {
            o = o || {},
            this.cancelled = !1,
            this.lastReq = null,
            this._send = o.transport,
            this._get = o.limiter ? o.limiter(this._get) : this._get,
            this._cache = o.cache === !1 ? new LruCache(0) : sharedCache
        }
        var pendingRequestsCount = 0
          , pendingRequests = {}
          , maxPendingRequests = 6
          , sharedCache = new LruCache(10);
        return Transport.setMaxPendingRequests = function(num) {
            maxPendingRequests = num
        }
        ,
        Transport.resetCache = function() {
            sharedCache.reset()
        }
        ,
        _.mixin(Transport.prototype, {
            _fingerprint: function(o) {
                return o = o || {},
                o.url + o.type + $.param(o.data || {})
            },
            _get: function(o, cb) {
                function done(resp) {
                    cb(null, resp),
                    that._cache.set(fingerprint, resp)
                }
                function fail() {
                    cb(!0)
                }
                function always() {
                    pendingRequestsCount--,
                    delete pendingRequests[fingerprint],
                    that.onDeckRequestArgs && (that._get.apply(that, that.onDeckRequestArgs),
                    that.onDeckRequestArgs = null)
                }
                var fingerprint, jqXhr, that = this;
                fingerprint = this._fingerprint(o),
                this.cancelled || fingerprint !== this.lastReq || ((jqXhr = pendingRequests[fingerprint]) ? jqXhr.done(done).fail(fail) : maxPendingRequests > pendingRequestsCount ? (pendingRequestsCount++,
                pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop,
                o = _.isString(o) ? {
                    url: o
                } : o || {},
                fingerprint = this._fingerprint(o),
                this.cancelled = !1,
                this.lastReq = fingerprint,
                (resp = this._cache.get(fingerprint)) ? cb(null, resp) : this._get(o, cb)
            },
            cancel: function() {
                this.cancelled = !0
            }
        }),
        Transport
    }()
      , SearchIndex = window.SearchIndex = function() {
        "use strict";
        function SearchIndex(o) {
            o = o || {},
            o.datumTokenizer && o.queryTokenizer || $.error("datumTokenizer and queryTokenizer are both required"),
            this.identify = o.identify || _.stringify,
            this.datumTokenizer = o.datumTokenizer,
            this.queryTokenizer = o.queryTokenizer,
            this.reset()
        }
        function normalizeTokens(tokens) {
            return tokens = _.filter(tokens, function(token) {
                return !!token
            }),
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase()
            })
        }
        function newNode() {
            var node = {};
            return node[IDS] = [],
            node[CHILDREN] = {},
            node
        }
        function unique(array) {
            for (var seen = {}, uniques = [], i = 0, len = array.length; len > i; i++)
                seen[array[i]] || (seen[array[i]] = !0,
                uniques.push(array[i]));
            return uniques
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0
              , bi = 0
              , intersection = [];
            arrayA = arrayA.sort(),
            arrayB = arrayB.sort();
            for (var lenArrayA = arrayA.length, lenArrayB = arrayB.length; lenArrayA > ai && lenArrayB > bi; )
                arrayA[ai] < arrayB[bi] ? ai++ : arrayA[ai] > arrayB[bi] ? bi++ : (intersection.push(arrayA[ai]),
                ai++,
                bi++);
            return intersection
        }
        var CHILDREN = "c"
          , IDS = "i";
        return _.mixin(SearchIndex.prototype, {
            bootstrap: function(o) {
                this.datums = o.datums,
                this.trie = o.trie
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [data],
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum,
                    tokens = normalizeTokens(that.datumTokenizer(datum)),
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        for (node = that.trie,
                        chars = token.split(""); ch = chars.shift(); )
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode()),
                            node[IDS].push(id)
                    })
                })
            },
            get: function(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id]
                })
            },
            search: function(query) {
                var tokens, matches, that = this;
                return tokens = normalizeTokens(this.queryTokenizer(query)),
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && 0 === matches.length)
                        return !1;
                    for (node = that.trie,
                    chars = token.split(""); node && (ch = chars.shift()); )
                        node = node[CHILDREN][ch];
                    return node && 0 === chars.length ? (ids = node[IDS].slice(0),
                    void (matches = matches ? getIntersection(matches, ids) : ids)) : (matches = [],
                    !1)
                }),
                matches ? _.map(unique(matches), function(id) {
                    return that.datums[id]
                }) : []
            },
            all: function() {
                var values = [];
                for (var key in this.datums)
                    values.push(this.datums[key]);
                return values
            },
            reset: function() {
                this.datums = {},
                this.trie = newNode()
            },
            serialize: function() {
                return {
                    datums: this.datums,
                    trie: this.trie
                }
            }
        }),
        SearchIndex
    }()
      , Prefetch = function() {
        "use strict";
        function Prefetch(o) {
            this.url = o.url,
            this.ttl = o.ttl,
            this.cache = o.cache,
            this.prepare = o.prepare,
            this.transform = o.transform,
            this.transport = o.transport,
            this.thumbprint = o.thumbprint,
            this.storage = new PersistentStorage(o.cacheKey)
        }
        var keys;
        return keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        },
        _.mixin(Prefetch.prototype, {
            _settings: function() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                }
            },
            store: function(data) {
                this.cache && (this.storage.set(keys.data, data, this.ttl),
                this.storage.set(keys.protocol, location.protocol, this.ttl),
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl))
            },
            fromCache: function() {
                var isExpired, stored = {};
                return this.cache ? (stored.data = this.storage.get(keys.data),
                stored.protocol = this.storage.get(keys.protocol),
                stored.thumbprint = this.storage.get(keys.thumbprint),
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol,
                stored.data && !isExpired ? stored.data : null) : null
            },
            fromNetwork: function(cb) {
                function onError() {
                    cb(!0)
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp))
                }
                var settings, that = this;
                cb && (settings = this.prepare(this._settings()),
                this.transport(settings).fail(onError).done(onResponse))
            },
            clear: function() {
                return this.storage.clear(),
                this
            }
        }),
        Prefetch
    }()
      , Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url,
            this.prepare = o.prepare,
            this.transform = o.transform,
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport
            })
        }
        return _.mixin(Remote.prototype, {
            _settings: function() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                }
            },
            get: function(query, cb) {
                function onResponse(err, resp) {
                    cb(err ? [] : that.transform(resp))
                }
                var settings, that = this;
                if (cb)
                    return query = query || "",
                    settings = this.prepare(query, this._settings()),
                    this.transport.get(settings, onResponse)
            },
            cancelLastRequest: function() {
                this.transport.cancel()
            }
        }),
        Remote
    }()
      , oParser = function() {
        "use strict";
        function parsePrefetch(o) {
            var defaults;
            return o ? (defaults = {
                url: null,
                ttl: 864e5,
                cache: !0,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            },
            o = _.isString(o) ? {
                url: o
            } : o,
            o = _.mixin(defaults, o),
            !o.url && $.error("prefetch requires url to be set"),
            o.transform = o.filter || o.transform,
            o.cacheKey = o.cacheKey || o.url,
            o.thumbprint = VERSION + o.thumbprint,
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax,
            o) : null
        }
        function parseRemote(o) {
            var defaults;
            if (o)
                return defaults = {
                    url: null,
                    cache: !0,
                    prepare: null,
                    replace: null,
                    wildcard: null,
                    limiter: null,
                    rateLimitBy: "debounce",
                    rateLimitWait: 300,
                    transform: _.identity,
                    transport: null
                },
                o = _.isString(o) ? {
                    url: o
                } : o,
                o = _.mixin(defaults, o),
                !o.url && $.error("remote requires url to be set"),
                o.transform = o.filter || o.transform,
                o.prepare = toRemotePrepare(o),
                o.limiter = toLimiter(o),
                o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax,
                delete o.replace,
                delete o.wildcard,
                delete o.rateLimitBy,
                delete o.rateLimitWait,
                o
        }
        function toRemotePrepare(o) {
            function prepareByReplace(query, settings) {
                return settings.url = replace(settings.url, query),
                settings
            }
            function prepareByWildcard(query, settings) {
                return settings.url = settings.url.replace(wildcard, encodeURIComponent(query)),
                settings
            }
            function idenityPrepare(query, settings) {
                return settings
            }
            var prepare, replace, wildcard;
            return prepare = o.prepare,
            replace = o.replace,
            wildcard = o.wildcard,
            prepare ? prepare : prepare = replace ? prepareByReplace : o.wildcard ? prepareByWildcard : idenityPrepare
        }
        function toLimiter(o) {
            function debounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait)
                }
            }
            function throttle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait)
                }
            }
            var limiter, method, wait;
            return limiter = o.limiter,
            method = o.rateLimitBy,
            wait = o.rateLimitWait,
            limiter || (limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait)),
            limiter
        }
        function callbackToDeferred(fn) {
            return function(o) {
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp)
                    })
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err)
                    })
                }
                var deferred = $.Deferred();
                return fn(o, onSuccess, onError),
                deferred
            }
        }
        return function(o) {
            var defaults, sorter;
            return defaults = {
                initialize: !0,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                sufficient: 5,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            },
            o = _.mixin(defaults, o || {}),
            !o.datumTokenizer && $.error("datumTokenizer is required"),
            !o.queryTokenizer && $.error("queryTokenizer is required"),
            sorter = o.sorter,
            o.sorter = sorter ? function(x) {
                return x.sort(sorter)
            }
            : _.identity,
            o.local = _.isFunction(o.local) ? o.local() : o.local,
            o.prefetch = parsePrefetch(o.prefetch),
            o.remote = parseRemote(o.remote),
            o
        }
    }()
      , Bloodhound = function() {
        "use strict";
        function Bloodhound(o) {
            o = oParser(o),
            this.sorter = o.sorter,
            this.identify = o.identify,
            this.sufficient = o.sufficient,
            this.local = o.local,
            this.remote = o.remote ? new Remote(o.remote) : null,
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null,
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            }),
            o.initialize !== !1 && this.initialize()
        }
        var old;
        return old = window && window.Bloodhound,
        Bloodhound.noConflict = function() {
            return window && (window.Bloodhound = old),
            Bloodhound
        }
        ,
        Bloodhound.tokenizers = tokenizers,
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function() {
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async)
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync)
                }
                var that = this;
                return this.remote ? withAsync : withoutAsync
            },
            _loadPrefetch: function() {
                function done(err, data) {
                    return err ? deferred.reject() : (that.add(data),
                    that.prefetch.store(that.index.serialize()),
                    void deferred.resolve())
                }
                var deferred, serialized, that = this;
                return deferred = $.Deferred(),
                this.prefetch ? (serialized = this.prefetch.fromCache()) ? (this.index.bootstrap(serialized),
                deferred.resolve()) : this.prefetch.fromNetwork(done) : deferred.resolve(),
                deferred.promise()
            },
            _initialize: function() {
                function addLocalToIndex() {
                    that.add(that.local)
                }
                var that = this;
                return this.clear(),
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex),
                this.initPromise
            },
            initialize: function(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise
            },
            add: function(data) {
                return this.index.add(data),
                this
            },
            get: function(ids) {
                return ids = _.isArray(ids) ? ids : [].slice.call(arguments),
                this.index.get(ids)
            },
            search: function(query, sync, async) {
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l)
                        }) && nonDuplicates.push(r)
                    }),
                    async && async(nonDuplicates)
                }
                var local, that = this;
                return local = this.sorter(this.index.search(query)),
                sync(this.remote ? local.slice() : local),
                this.remote && local.length < this.sufficient ? this.remote.get(query, processRemote) : this.remote && this.remote.cancelLastRequest(),
                this
            },
            all: function() {
                return this.index.all()
            },
            clear: function() {
                return this.index.reset(),
                this
            },
            clearPrefetchCache: function() {
                return this.prefetch && this.prefetch.clear(),
                this
            },
            clearRemoteCache: function() {
                return Transport.resetCache(),
                this
            },
            ttAdapter: function() {
                return this.__ttAdapter()
            }
        }),
        Bloodhound
    }();
    return Bloodhound
}),
function(root, factory) {
    "function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function(a0) {
        return factory(a0)
    }) : "object" == typeof exports ? module.exports = factory(require("jquery")) : factory(jQuery)
}(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str)
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function(obj) {
                return "string" == typeof obj
            },
            isNumber: function(obj) {
                return "number" == typeof obj
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return "undefined" == typeof obj
            },
            isElement: function(obj) {
                return !(!obj || 1 !== obj.nodeType)
            },
            isJQuery: function(obj) {
                return obj instanceof $
            },
            toStr: function(s) {
                return _.isUndefined(s) || null === s ? "" : s + ""
            },
            bind: $.proxy,
            each: function(collection, cb) {
                function reverseArgs(index, value) {
                    return cb(value, index)
                }
                $.each(collection, reverseArgs)
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = !0;
                return obj ? ($.each(obj, function(key, val) {
                    return (result = test.call(null, val, key, obj)) ? void 0 : !1
                }),
                !!result) : result
            },
            some: function(obj, test) {
                var result = !1;
                return obj ? ($.each(obj, function(key, val) {
                    return (result = test.call(null, val, key, obj)) ? !1 : void 0
                }),
                !!result) : result
            },
            mixin: $.extend,
            identity: function(x) {
                return x
            },
            clone: function(obj) {
                return $.extend(!0, {}, obj)
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++
                }
            },
            templatify: function(obj) {
                function template() {
                    return String(obj)
                }
                return $.isFunction(obj) ? obj : template
            },
            defer: function(fn) {
                setTimeout(fn, 0)
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var later, callNow, context = this, args = arguments;
                    return later = function() {
                        timeout = null,
                        immediate || (result = func.apply(context, args))
                    }
                    ,
                    callNow = immediate && !timeout,
                    clearTimeout(timeout),
                    timeout = setTimeout(later, wait),
                    callNow && (result = func.apply(context, args)),
                    result
                }
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                return previous = 0,
                later = function() {
                    previous = new Date,
                    timeout = null,
                    result = func.apply(context, args)
                }
                ,
                function() {
                    var now = new Date
                      , remaining = wait - (now - previous);
                    return context = this,
                    args = arguments,
                    0 >= remaining ? (clearTimeout(timeout),
                    timeout = null,
                    previous = now,
                    result = func.apply(context, args)) : timeout || (timeout = setTimeout(later, remaining)),
                    result
                }
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val)
            },
            noop: function() {}
        }
    }()
      , WWW = function() {
        "use strict";
        function build(o, menu_css) {
            var www, classes;
            return classes = _.mixin({}, defaultClassNames, o),
            www = {
                css: buildCss(menu_css),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            },
            {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www)
                }
            }
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div class="' + c.menu + '"></div>'
            }
        }
        function buildSelectors(classes) {
            var selectors = {};
            return _.each(classes, function(v, k) {
                selectors[k] = "." + v
            }),
            selectors
        }
        function buildCss(menu_css) {
            var css = {
                wrapper: {},
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: $.extend({
                    position: "absolute",
                    top: "calc(100% - 55px)",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                }, menu_css),
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            return _.isMsie() && _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            }),
            css
        }
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build
    }()
      , EventBus = function() {
        "use strict";
        function EventBus(o) {
            o && o.el || $.error("EventBus initialized without el"),
            this.$el = $(o.el)
        }
        var namespace, deprecationMap;
        return namespace = "typeahead:",
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        },
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e;
                return $e = $.Event(namespace + type),
                (args = args || []).unshift($e),
                this.$el.trigger.apply(this.$el, args),
                $e
            },
            before: function(type) {
                var args, $e;
                return args = [].slice.call(arguments, 1),
                $e = this._trigger("before" + type, args),
                $e.isDefaultPrevented()
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1)),
                (deprecatedType = deprecationMap[type]) && this._trigger(deprecatedType, [].slice.call(arguments, 1))
            }
        }),
        EventBus
    }()
      , EventEmitter = function() {
        "use strict";
        function on(method, types, cb, context) {
            var type;
            if (!cb)
                return this;
            for (types = types.split(splitter),
            cb = context ? bindContext(cb, context) : cb,
            this._callbacks = this._callbacks || {}; type = types.shift(); )
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                },
                this._callbacks[type][method].push(cb);
            return this
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context)
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context)
        }
        function off(types) {
            var type;
            if (!this._callbacks)
                return this;
            for (types = types.split(splitter); type = types.shift(); )
                delete this._callbacks[type];
            return this
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks)
                return this;
            for (types = types.split(splitter),
            args = [].slice.call(arguments, 1); (type = types.shift()) && (callbacks = this._callbacks[type]); )
                syncFlush = getFlush(callbacks.sync, this, [type].concat(args)),
                asyncFlush = getFlush(callbacks.async, this, [type].concat(args)),
                syncFlush() && nextTick(asyncFlush);
            return this
        }
        function getFlush(callbacks, context, args) {
            function flush() {
                for (var cancelled, i = 0, len = callbacks.length; !cancelled && len > i; i += 1)
                    cancelled = callbacks[i].apply(context, args) === !1;
                return !cancelled
            }
            return flush
        }
        function getNextTick() {
            var nextTickFn;
            return nextTickFn = window.setImmediate ? function(fn) {
                setImmediate(function() {
                    fn()
                })
            }
            : function(fn) {
                setTimeout(function() {
                    fn()
                }, 0)
            }
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0))
            }
        }
        var splitter = /\s+/
          , nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        }
    }()
      , highlight = function(doc) {
        "use strict";
        function getRegex(patterns, caseSensitive, wordsOnly) {
            for (var regexStr, escapedPatterns = [], i = 0, len = patterns.length; len > i; i++)
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
            return regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")",
            caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr,"i")
        }
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        };
        return function(o) {
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                return (match = regex.exec(textNode.data)) && (wrapperNode = doc.createElement(o.tagName),
                o.className && (wrapperNode.className = o.className),
                patternNode = textNode.splitText(match.index),
                patternNode.splitText(match[0].length),
                wrapperNode.appendChild(patternNode.cloneNode(!0)),
                textNode.parentNode.replaceChild(wrapperNode, patternNode)),
                !!match
            }
            function traverse(el, hightlightTextNode) {
                for (var childNode, TEXT_NODE_TYPE = 3, i = 0; i < el.childNodes.length; i++)
                    childNode = el.childNodes[i],
                    childNode.nodeType === TEXT_NODE_TYPE ? i += hightlightTextNode(childNode) ? 1 : 0 : traverse(childNode, hightlightTextNode)
            }
            var regex;
            o = _.mixin({}, defaults, o),
            o.node && o.pattern && (o.pattern = _.isArray(o.pattern) ? o.pattern : [o.pattern],
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly),
            traverse(o.node, hightlightTextNode))
        }
    }(window.document)
      , Input = function() {
        "use strict";
        function Input(o, www) {
            o = o || {},
            o.input || $.error("input is missing"),
            www.mixin(this),
            this.$hint = $(o.hint),
            this.$input = $(o.input),
            this.query = this.$input.html(),
            this.queryWhenFocused = this.hasFocus() ? this.query : null,
            this.$overflowHelper = buildOverflowHelper(this.$input),
            this._checkLanguageDirection(),
            0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop)
        }
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input)
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b)
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey
        }
        var specialKeyCodeMap;
        return specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        },
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }
        ,
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function() {
                this.up_down === !1 && (this.resetInputValue(),
                this.trigger("blurred"))
            },
            _onFocus: function() {
                this.queryWhenFocused = this.query,
                this.trigger("focused")
            },
            _onKeydown: function($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e),
                keyName && this._shouldTrigger(keyName, $e) && ("up" != keyName && "down" != keyName && "enter" != keyName || this.up_down === !1) && this.trigger(keyName + "Keyed", $e)
            },
            _onInput: function() {
                this._setQuery(this.getInputValue()),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection()
            },
            up_down: !0,
            _managePreventDefault: function(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                case "up":
                case "down":
                case "enter":
                    preventDefault = this.up_down === !1 ? !withModifier($e) : !1;
                    break;
                default:
                    preventDefault = !1
                }
                preventDefault && $e.preventDefault()
            },
            _shouldTrigger: function(keyName, $e) {
                var trigger;
                switch (keyName) {
                case "tab":
                    trigger = !withModifier($e);
                    break;
                default:
                    trigger = !0
                }
                return trigger
            },
            _checkLanguageDirection: function() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                this.dir !== dir && (this.dir = dir,
                this.$hint.attr("dir", dir),
                this.trigger("langDirChanged", dir))
            },
            _setQuery: function(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query),
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : !1,
                this.query = val,
                silent || areEquivalent ? !silent && hasDifferentWhitespace && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            },
            bind: function() {
                var onBlur, onFocus, onKeydown, onInput, that = this;
                return onBlur = _.bind(this._onBlur, this),
                onFocus = _.bind(this._onFocus, this),
                onKeydown = _.bind(this._onKeydown, this),
                onInput = _.bind(this._onInput, this),
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown),
                !_.isMsie() || _.isMsie() > 9 ? this.$input.on("input.tt", onInput) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    specialKeyCodeMap[$e.which || $e.keyCode] || _.defer(_.bind(that._onInput, that, $e))
                }),
                this
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getLangDir: function() {
                return this.dir
            },
            getQuery: function() {
                return this.query || ""
            },
            setQuery: function(val, silent) {
                this.setInputValue(val),
                this._setQuery(val, silent)
            },
            hasQueryChangedSinceLastFocus: function() {
                return this.query !== this.queryWhenFocused
            },
            getInputValue: function() {
                return this.$input.html()
            },
            setInputValue: function(value) {
                this.$input.html(value),
                this.clearHintIfInvalid(),
                this._checkLanguageDirection()
            },
            resetInputValue: function() {
                this.setInputValue(this.query)
            },
            getHint: function() {
                return this.$hint.html()
            },
            setHint: function(value) {
                this.$hint.html(value)
            },
            clearHint: function() {
                this.setHint("")
            },
            clearHintIfInvalid: function() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue(),
                hint = this.getHint(),
                valIsPrefixOfHint = val !== hint && 0 === hint.indexOf(val),
                isValid = "" !== val && valIsPrefixOfHint && !this.hasOverflow(),
                !isValid && this.clearHint()
            },
            hasFocus: function() {
                return this.$input.is(":focus")
            },
            hasOverflow: function() {
                var constraint = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= constraint
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                return valueLength = this.$input.html().length,
                selectionStart = this.$input.caret("pos"),
                _.isNumber(selectionStart) ? selectionStart === valueLength : document.selection ? (range = document.selection.createRange(),
                range.moveStart("character", -valueLength),
                valueLength === range.text.length) : !0
            },
            destroy: function() {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$overflowHelper.remove(),
                this.$hint = this.$input = this.$overflowHelper = $("<div>")
            }
        }),
        Input
    }()
      , Dataset = function() {
        "use strict";
        function Dataset(o, www) {
            o = o || {},
            o.templates = o.templates || {},
            o.templates.notFound = o.templates.notFound || o.templates.empty,
            o.source || $.error("missing source"),
            o.node || $.error("missing node"),
            o.name && !isValidName(o.name) && $.error("invalid dataset name: " + o.name),
            www.mixin(this),
            this.highlight = !!o.highlight,
            this.name = o.name || nameGenerator(),
            this.limit = o.limit || 5,
            this.displayFn = getDisplayFn(o.display || o.displayKey),
            this.templates = getTemplates(o.templates, this.displayFn),
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source,
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async,
            this._resetLastSuggestion(),
            this.$el = $(o.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
        }
        function getDisplayFn(display) {
            function displayFn(obj) {
                return obj[display]
            }
            return display = display || _.stringify,
            _.isFunction(display) ? display : displayFn
        }
        function getTemplates(templates, displayFn) {
            function suggestionTemplate(context) {
                return $("<div>").text(displayFn(context))
            }
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str)
        }
        var keys, nameGenerator;
        return keys = {
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        },
        nameGenerator = _.getIdGenerator(),
        Dataset.extractData = function(el) {
            var $el = $(el);
            return $el.data(keys.obj) ? {
                val: $el.data(keys.val) || "",
                obj: $el.data(keys.obj) || null
            } : null
        }
        ,
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function(query, suggestions) {
                suggestions = suggestions || [],
                suggestions.length ? this._renderSuggestions(query, suggestions) : this.async && this.templates.pending ? this._renderPending(query) : !this.async && this.templates.notFound ? this._renderNotFound(query) : this._empty(),
                this.trigger("rendered", this.name, suggestions, !1)
            },
            _append: function(query, suggestions) {
                suggestions = suggestions || [],
                suggestions.length && this.$lastSuggestion.length ? this._appendSuggestions(query, suggestions) : suggestions.length ? this._renderSuggestions(query, suggestions) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(query),
                this.trigger("rendered", this.name, suggestions, !0);
            },
            _renderSuggestions: function(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions),
                this.$lastSuggestion = $fragment.children().last(),
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions))
            },
            _appendSuggestions: function(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions),
                $lastSuggestion = $fragment.children().last(),
                this.$lastSuggestion.after($fragment),
                this.$lastSuggestion = $lastSuggestion
            },
            _renderPending: function(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion(),
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }))
            },
            _renderNotFound: function(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion(),
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }))
            },
            _empty: function() {
                this.$el.empty(),
                this._resetLastSuggestion()
            },
            _getSuggestionsFragment: function(query, suggestions) {
                var fragment, that = this;
                return fragment = document.createDocumentFragment(),
                _.each(suggestions, function(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion),
                    $el = $(that.templates.suggestion(context)).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable),
                    fragment.appendChild($el[0])
                }),
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                }),
                $(fragment)
            },
            _getFooter: function(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null
            },
            _getHeader: function(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null
            },
            _resetLastSuggestion: function() {
                this.$lastSuggestion = $()
            },
            _injectQuery: function(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj
            },
            update: function(query) {
                function sync(suggestions) {
                    syncCalled || (syncCalled = !0,
                    suggestions = (suggestions || []).slice(0, that.limit),
                    rendered = suggestions.length,
                    that._overwrite(query, suggestions),
                    rendered < that.limit && that.async && that.trigger("asyncRequested", query))
                }
                function async(suggestions) {
                    suggestions = suggestions || [],
                    !canceled && rendered < that.limit && (that.cancel = $.noop,
                    rendered += suggestions.length,
                    that._append(query, suggestions.slice(0, that.limit - rendered)),
                    that.async && that.trigger("asyncReceived", query))
                }
                var that = this
                  , canceled = !1
                  , syncCalled = !1
                  , rendered = 0;
                this.cancel(),
                this.cancel = function() {
                    canceled = !0,
                    that.cancel = $.noop,
                    that.async && that.trigger("asyncCanceled", query)
                }
                ,
                this.source(query, sync, async),
                !syncCalled && sync([])
            },
            cancel: $.noop,
            clear: function() {
                this._empty(),
                this.cancel(),
                this.trigger("cleared")
            },
            isEmpty: function() {
                return this.$el.is(":empty")
            },
            destroy: function() {
                this.$el = $("<div>")
            }
        }),
        Dataset
    }()
      , Menu = function() {
        "use strict";
        function Menu(o, www) {
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                return oDataset.node = node.length ? node : $("<div>").appendTo(that.$node),
                new Dataset(oDataset,www)
            }
            var that = this;
            o = o || {},
            o.node || $.error("node is required"),
            www.mixin(this),
            this.$node = $(o.node),
            this.query = null,
            this.datasets = _.map(o.datasets, initializeDataset)
        }
        return _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function($e) {
                this.trigger("selectableClicked", $($e.currentTarget))
            },
            _onRendered: function(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()),
                this.trigger("datasetRendered", dataset, suggestions, async)
            },
            _onCleared: function() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()),
                this.trigger("datasetCleared")
            },
            _propagate: function() {
                this.trigger.apply(this, arguments)
            },
            _allDatasetsEmpty: function() {
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty()
                }
                return _.every(this.datasets, isDatasetEmpty)
            },
            _getSelectables: function() {
                return this.$node.find(this.selectors.selectable)
            },
            _removeCursor: function() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor)
            },
            _ensureVisible: function($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top,
                elBottom = elTop + $el.outerHeight(!0),
                nodeScrollTop = this.$node.scrollTop(),
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10),
                0 > elTop ? this.$node.scrollTop(nodeScrollTop + elTop) : elBottom > nodeHeight && this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight))
            },
            bind: function() {
                var onSelectableClick, that = this;
                return onSelectableClick = _.bind(this._onSelectableClick, this),
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick),
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that)
                }),
                this
            },
            isOpen: function() {
                return this.$node.hasClass(this.classes.open)
            },
            open: function() {
                this.$node.addClass(this.classes.open)
            },
            close: function() {
                this.$node.removeClass(this.classes.open),
                this._removeCursor()
            },
            setLanguageDirection: function(dir) {
                this.$node.attr("dir", dir)
            },
            selectableRelativeToCursor: function(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                return $oldCursor = this.getActiveSelectable(),
                $selectables = this._getSelectables(),
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1,
                newIndex = oldIndex + delta,
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1,
                newIndex = -1 > newIndex ? $selectables.length - 1 : newIndex,
                -1 === newIndex ? null : $selectables.eq(newIndex)
            },
            setCursor: function($selectable) {
                this._removeCursor(),
                ($selectable = $selectable && $selectable.first()) && ($selectable.addClass(this.classes.cursor),
                this._ensureVisible($selectable))
            },
            getSelectableData: function($el) {
                return $el && $el.length ? Dataset.extractData($el) : null
            },
            getActiveSelectable: function() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null
            },
            getTopSelectable: function() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null
            },
            update: function(query) {
                function updateDataset(dataset) {
                    dataset.update(query)
                }
                var isValidUpdate = query !== this.query;
                return isValidUpdate && (this.query = query,
                _.each(this.datasets, updateDataset)),
                isValidUpdate
            },
            empty: function() {
                function clearDataset(dataset) {
                    dataset.clear()
                }
                _.each(this.datasets, clearDataset),
                this.query = null,
                this.$node.addClass(this.classes.empty)
            },
            destroy: function() {
                function destroyDataset(dataset) {
                    dataset.destroy()
                }
                this.$node.off(".tt"),
                this.$node = $("<div>"),
                _.each(this.datasets, destroyDataset)
            }
        }),
        Menu
    }()
      , DefaultMenu = function() {
        "use strict";
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0))
        }
        var s = Menu.prototype;
        return _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function() {
                return !this._allDatasetsEmpty() && this._show(),
                s.open.apply(this, [].slice.call(arguments, 0))
            },
            close: function() {
                return this._hide(),
                s.close.apply(this, [].slice.call(arguments, 0))
            },
            _onRendered: function() {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(),
                s._onRendered.apply(this, [].slice.call(arguments, 0))
            },
            _onCleared: function() {
                return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(),
                s._onCleared.apply(this, [].slice.call(arguments, 0))
            },
            setLanguageDirection: function(dir) {
                return this.$node.css("ltr" === dir ? this.css.ltr : this.css.rtl),
                s.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
            },
            _hide: function() {
                this.$node.hide()
            },
            _show: function() {
                this.$node.css("display", "block")
            }
        }),
        DefaultMenu
    }()
      , Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {},
            o.input || $.error("missing input"),
            o.menu || $.error("missing menu"),
            o.eventBus || $.error("missing event bus"),
            www.mixin(this),
            this.cursorQueryPosition = 0,
            this.search_char = o.search_char,
            this.eventBus = o.eventBus,
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1,
            this.input = o.input,
            this.menu = o.menu,
            this.enabled = !0,
            this.active = !1,
            this.input.hasFocus() && this.activate(),
            this.dir = this.input.getLangDir(),
            this._hacks(),
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this),
            onFocused = c(this, "activate", "open", "_onFocused"),
            onBlurred = c(this, "deactivate", "_onBlurred"),
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed"),
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed"),
            onEscKeyed = c(this, "isActive", "_onEscKeyed"),
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed"),
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed"),
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed"),
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed"),
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged"),
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged"),
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this)
        }
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args)
                })
            }
        }
        return _.mixin(Typeahead.prototype, {
            _hacks: function() {
                var $input, $menu;
                $input = this.input.$input || $("<div>"),
                $menu = this.menu.$node || $("<div>"),
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement,
                    isActive = $menu.is(active),
                    hasActive = $menu.has(active).length > 0,
                    _.isMsie() && (isActive || hasActive) && ($e.preventDefault(),
                    $e.stopImmediatePropagation(),
                    _.defer(function() {
                        $input.focus()
                    }))
                }),
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault()
                })
            },
            _onSelectableClicked: function(type, $el) {
                this.select($el)
            },
            _onDatasetCleared: function() {
                this._updateHint()
            },
            _onDatasetRendered: function(type, dataset, suggestions, async) {
                this._updateHint(),
                this.eventBus.trigger("render", suggestions, async, dataset)
            },
            _onAsyncRequested: function(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset)
            },
            _onAsyncCanceled: function(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset)
            },
            _onAsyncReceived: function(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset)
            },
            _onFocused: function() {
                this._minLengthMet() && this.menu.update(this.input.getQuery())
            },
            _onBlurred: function() {
                this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
            },
            _onEnterKeyed: function(type, $e) {
                var $selectable;
                ($selectable = this.menu.getActiveSelectable()) && this.select($selectable) && $e.preventDefault()
            },
            _onTabKeyed: function(type, $e) {
                var $selectable;
                ($selectable = this.menu.getActiveSelectable()) ? this.select($selectable) && $e.preventDefault() : ($selectable = this.menu.getTopSelectable()) && this.autocomplete($selectable) && $e.preventDefault()
            },
            _onEscKeyed: function() {
                this.close()
            },
            _onUpKeyed: function() {
                this.moveCursor(-1)
            },
            _onDownKeyed: function() {
                this.moveCursor(1)
            },
            _onLeftKeyed: function() {
                "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            },
            _onRightKeyed: function() {
                "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
            },
            parseQuery: function(query) {
                if (query.length > 0) {
                    var start_string, end_string, delimited_string, spacer_index, frag_cat, text_start_string, html_cursor_position, text_start_string_split, search_index, regex;
                    for (html_cursor_position = 0,
                    text_start_string = $("<div>" + query + "</div>").text().slice(0, this.cursorQueryPosition),
                    text_start_string_split = text_start_string.split(""),
                    $.each(text_start_string_split, function(index, letter) {
                        regex = new RegExp("^<[^>]*>(&nbsp;)?"),
                        (search_index = regex.exec(query.slice(html_cursor_position))) && (html_cursor_position = html_cursor_position + search_index[0].length + search_index.index),
                        regex = new RegExp(_.escapeRegExChars(letter)),
                        (search_index = regex.exec(query.slice(html_cursor_position))) && (html_cursor_position = html_cursor_position + search_index[0].length + search_index.index)
                    }),
                    start_string = query.slice(0, html_cursor_position),
                    delimited_string = start_string,
                    frag_cat = ""; spacer_index = delimited_string.search(this.spacer) > -1; ) {
                        var fragment = delimited_string.slice(0, spacer_index + this.spacer.length);
                        delimited_string = delimited_string.slice(spacer_index + this.spacer.length),
                        frag_cat += fragment
                    }
                    return delimited_string !== start_string && (start_string = frag_cat),
                    end_string = query.slice(html_cursor_position),
                    [start_string, delimited_string, end_string]
                }
                return ["", "", ""]
            },
            generateQueryStrings: function(broken_strings) {
                var q_string_2, q_string_3, delimited_string = (broken_strings[0],
                broken_strings[1]), outside_q_array = (broken_strings[2],
                delimited_string.split(">")), q_array = [];
                $.each(outside_q_array, function(index, mini_string) {
                    index > 0 && q_array.push(">"),
                    q_array = q_array.concat(mini_string.split(" "))
                });
                var possible_word_length = q_array.length
                  , q_string = q_array[q_array.length - 1];
                return q_string_2 = possible_word_length > 1 ? q_array[q_array.length - 2] + " " + q_array[q_array.length - 1] : "",
                q_string_3 = possible_word_length > 2 ? q_array[q_array.length - 3] + " " + q_array[q_array.length - 2] + " " + q_array[q_array.length - 1] : "",
                [q_array, q_string, q_string_2, q_string_3]
            },
            _onQueryChanged: function(e, query) {
                this.cursorQueryPosition = this.input.$input.caret("pos");
                var q_array, q_string, q_string_2, q_string_3, broken_strings = this.parseQuery(query), query_strings = this.generateQueryStrings(broken_strings);
                q_array = query_strings[0],
                q_string = query_strings[1],
                q_string_2 = query_strings[2],
                q_string_3 = query_strings[3],
                q_string.charAt(0) == this.search_char ? (this.query_word_length = 1,
                this._minLengthMet(q_string) ? this.menu.update(q_string) : (this.menu.empty(),
                this.input.up_down = !0),
                this.input.up_down = !1) : q_string_2.charAt(0) == this.search_char ? (this.query_word_length = 2,
                this._minLengthMet(q_string_2) ? this.menu.update(q_string_2) : (this.menu.empty(),
                this.input.up_down = !0),
                this.input.up_down = !1) : q_string_3.charAt(0) == this.search_char ? (this.query_word_length = 3,
                this._minLengthMet(q_string_3) ? this.menu.update(q_string_3) : (this.menu.empty(),
                this.input.up_down = !0),
                this.input.up_down = !1) : (this.menu.close(),
                this.menu.empty(),
                this.input.up_down = !0)
            },
            _onWhitespaceChanged: function() {
                this._updateHint()
            },
            _onLangDirChanged: function(e, dir) {
                this.dir !== dir && (this.dir = dir,
                this.menu.setLanguageDirection(dir))
            },
            _openIfActive: function() {
                this.isActive() && this.open()
            },
            _minLengthMet: function(query) {
                return query = _.isString(query) ? query : this.input.getQuery() || "",
                query.length >= this.minLength
            },
            _updateHint: function() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable(),
                data = this.menu.getSelectableData($selectable),
                val = this.input.getInputValue(),
                !data || _.isBlankString(val) || this.input.hasOverflow() ? this.input.clearHint() : (query = Input.normalizeQuery(val),
                escapedQuery = _.escapeRegExChars(query),
                frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)","i"),
                match = frontMatchRegEx.exec(data.val),
                match && this.input.setHint(val + match[1]))
            },
            isEnabled: function() {
                return this.enabled
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            isActive: function() {
                return this.active
            },
            activate: function() {
                return this.isActive() ? !0 : !this.isEnabled() || this.eventBus.before("active") ? !1 : (this.active = !0,
                this.eventBus.trigger("active"),
                !0)
            },
            deactivate: function() {
                return this.isActive() ? this.eventBus.before("idle") ? !1 : (this.active = !1,
                this.close(),
                this.eventBus.trigger("idle"),
                !0) : !0
            },
            isOpen: function() {
                return this.menu.isOpen()
            },
            open: function() {
                return this.isOpen() || this.eventBus.before("open") || (this.input.up_down === !1 && this.menu.open(),
                this._updateHint(),
                this.eventBus.trigger("open")),
                this.isOpen()
            },
            close: function() {
                return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(),
                this.input.up_down = !0,
                this.input.clearHint(),
                this.input.resetInputValue(),
                this.eventBus.trigger("close")),
                !this.isOpen()
            },
            setVal: function(val) {
                this.input.setQuery(_.toStr(val))
            },
            getVal: function() {
                return this.input.getQuery()
            },
            new_cursor_position: 0,
            queryReAssemble: function(broken_strings, data) {
                var start_string = broken_strings[0]
                  , delimited_string = broken_strings[1]
                  , end_string = broken_strings[2]
                  , query_strings = this.generateQueryStrings(broken_strings)
                  , q_array = query_strings[0];
                query_strings[1],
                query_strings[2],
                query_strings[3];
                q_array.splice(-1 * this.query_word_length);
                var selection = '&nbsp;<span class="username">' + this.search_char + data.val + this.spacer
                  , space_between_words = "";
                0 != q_array.length && (space_between_words = " ");
                var final_string = q_array.join(" ") + space_between_words + selection + " " + end_string;
                return start_string != delimited_string && (final_string = start_string + final_string),
                this.new_cursor_position = $("<div>" + final_string + "</div>").text().length - $("<div>" + end_string + "</div>").text().length - 1,
                final_string
            },
            spacer: "</span>" + String.fromCharCode(160),
            new_cursor_postion: function() {
                this.input.$input.caret("pos", this.new_cursor_position)
            },
            old_cursor_position: function() {
                this.input.$input.caret("pos", this.cursorQueryPosition)
            },
            lock_usernames: function() {
                $(".username").each(function(index, elet) {
                    elet.contentEditable = !1
                })
            },
            select: function($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj)) {
                    var query = this.input.getQuery()
                      , broken_strings = this.parseQuery(query)
                      , final_string = this.queryReAssemble(broken_strings, data);
                    return this.input.setQuery(final_string, !0),
                    this.eventBus.trigger("select", data.obj),
                    this.close(),
                    this.lock_usernames(),
                    this.new_cursor_postion(),
                    !0
                }
                return !1
            },
            autocomplete: function($selectable) {
                var query, data, isValid;
                query = this.input.getQuery(),
                data = this.menu.getSelectableData($selectable);
                var broken_strings = this.parseQuery(query);
                if (isValid = data && query !== data.val,
                isValid && !this.eventBus.before("autocomplete", data.obj)) {
                    var final_string = this.queryReAssemble(broken_strings, data);
                    return this.input.setQuery(final_string),
                    this.eventBus.trigger("autocomplete", data.obj),
                    this.lock_usernames(),
                    this.new_cursor_postion(),
                    !0
                }
                return !1
            },
            moveCursor: function(delta) {
                var query, $candidate, data, payload, cancelMove;
                query = this.input.getQuery();
                var broken_strings = this.parseQuery(query)
                  , query_strings = this.generateQueryStrings(broken_strings);
                if ($candidate = this.menu.selectableRelativeToCursor(delta),
                data = this.menu.getSelectableData($candidate),
                payload = data ? data.obj : null,
                cancelMove = this._minLengthMet() && this.menu.update(query_strings[this.query_word_length]),
                !cancelMove && !this.eventBus.before("cursorchange", payload)) {
                    if (this.menu.setCursor($candidate),
                    data) {
                        var final_string = this.queryReAssemble(broken_strings, data);
                        this.input.setInputValue(final_string),
                        this.eventBus.trigger("cursorchange", payload),
                        this.lock_usernames(),
                        this.new_cursor_postion()
                    } else
                        this.input.resetInputValue(),
                        this._updateHint(),
                        this.eventBus.trigger("cursorchange", payload),
                        this.lock_usernames(),
                        this.old_cursor_position();
                    return !0
                }
                return !1
            },
            destroy: function() {
                this.input.destroy(),
                this.menu.destroy()
            }
        }),
        Typeahead
    }();
    !function() {
        "use strict";
        function ttEach($els, fn) {
            $els.each(function() {
                var typeahead, $input = $(this);
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input)
            })
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            })
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            }),
            $input.addClass(www.classes.input).attr({
                autocomplete: "off",
                spellcheck: !1
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto")
            } catch (e) {}
            return $input
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            }
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www),
            $wrapper = $input.parent().filter(www.selectors.wrapper),
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val)
            }),
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input),
            $wrapper.length && ($input.detach().insertAfter($wrapper),
            $wrapper.remove())
        }
        function $elOrNull(obj) {
            var isValid, $el;
            return isValid = _.isJQuery(obj) || _.isElement(obj),
            $el = isValid ? $(obj).first() : [],
            $el.length ? $el : null
        }
        var old, keys, methods;
        old = $.fn.typeahead,
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        },
        methods = {
            initialize: function(o, datasets) {
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight
                    }),
                    $input = $(this),
                    $wrapper = $(www.html.wrapper),
                    $hint = $elOrNull(o.hint),
                    $menu = $elOrNull(o.menu),
                    defaultHint = o.hint !== !1 && !$hint,
                    defaultMenu = o.menu !== !1 && !$menu,
                    defaultHint && ($hint = buildHintFromInput($input, www)),
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu)),
                    $hint && $hint.html(""),
                    $input = prepInput($input, www),
                    (defaultHint || defaultMenu) && ($wrapper.css(www.css.wrapper),
                    $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint),
                    $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null)),
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu,
                    eventBus = new EventBus({
                        el: $input
                    }),
                    input = new Input({
                        hint: $hint,
                        input: $input
                    },www),
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    },www),
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength,
                        search_char: void 0 === o.search_char ? "@" : o.search_char
                    },www),
                    $input.data(keys.www, www),
                    $input.data(keys.typeahead, typeahead)
                }
                var www;
                return datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1),
                o = o || {},
                www = WWW(o.classNames, void 0 === o.menu_css ? {} : o.menu_css),
                this.each(attach)
            },
            isEnabled: function() {
                var enabled;
                return ttEach(this.first(), function(t) {
                    enabled = t.isEnabled()
                }),
                enabled
            },
            enable: function() {
                return ttEach(this, function(t) {
                    t.enable()
                }),
                this
            },
            disable: function() {
                return ttEach(this, function(t) {
                    t.disable()
                }),
                this
            },
            isActive: function() {
                var active;
                return ttEach(this.first(), function(t) {
                    active = t.isActive()
                }),
                active
            },
            activate: function() {
                return ttEach(this, function(t) {
                    t.activate()
                }),
                this
            },
            deactivate: function() {
                return ttEach(this, function(t) {
                    t.deactivate()
                }),
                this
            },
            isOpen: function() {
                var open;
                return ttEach(this.first(), function(t) {
                    open = t.isOpen()
                }),
                open
            },
            open: function() {
                return ttEach(this, function(t) {
                    t.open()
                }),
                this
            },
            close: function() {
                return ttEach(this, function(t) {
                    t.close()
                }),
                this
            },
            select: function(el) {
                var success = !1
                  , $el = $(el);
                return ttEach(this.first(), function(t) {
                    success = t.select($el)
                }),
                success
            },
            autocomplete: function(el) {
                var success = !1
                  , $el = $(el);
                return ttEach(this.first(), function(t) {
                    success = t.autocomplete($el)
                }),
                success
            },
            moveCursor: function(delta) {
                var success = !1;
                return ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta)
                }),
                success
            },
            val: function(newVal) {
                var query;
                return arguments.length ? (ttEach(this, function(t) {
                    t.setVal(newVal)
                }),
                this) : (ttEach(this.first(), function(t) {
                    query = t.getVal()
                }),
                query)
            },
            destroy: function() {
                return ttEach(this, function(typeahead, $input) {
                    revert($input),
                    typeahead.destroy()
                }),
                this
            }
        },
        $.fn.typeahead = function(method) {
            return methods[method] ? methods[method].apply(this, [].slice.call(arguments, 1)) : methods.initialize.apply(this, arguments)
        }
        ,
        $.fn.typeahead.noConflict = function() {
            return $.fn.typeahead = old,
            this
        }
    }()
});

!function(factory) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return factory(window, document)
    }) : "undefined" != typeof exports ? module.exports = factory(window, document) : window.wysiwyg = factory(window, document)
}(function(window, document) {
    "use strict";
    var debounce = function(callback, wait, cancelprevious) {
        var timeout;
        return function() {
            if (timeout) {
                if (!cancelprevious)
                    return;
                clearTimeout(timeout)
            }
            var context = this
              , args = arguments;
            timeout = setTimeout(function() {
                timeout = null,
                callback.apply(context, args)
            }, wait)
        }
    }
      , addEvent = function(element, type, handler, useCapture) {
        element.addEventListener ? element.addEventListener(type, handler, useCapture ? !0 : !1) : element.attachEvent ? element.attachEvent("on" + type, handler) : element != window && (element["on" + type] = handler)
    }
      , removeEvent = function(element, type, handler, useCapture) {
        element.removeEventListener ? element.removeEventListener(type, handler, useCapture ? !0 : !1) : element.detachEvent ? element.detachEvent("on" + type, handler) : element != window && (element["on" + type] = null)
    }
      , fireEvent = function(element, type, bubbles, cancelable) {
        if (document.createEvent) {
            var event = document.createEvent("Event");
            event.initEvent(type, void 0 !== bubbles ? bubbles : !0, void 0 !== cancelable ? cancelable : !1),
            element.dispatchEvent(event)
        } else if (document.createEventObject) {
            var event = document.createEventObject();
            element.fireEvent("on" + type, event)
        } else
            "function" == typeof element["on" + type] && element["on" + type]()
    }
      , cancelEvent = function(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0,
        !1
    }
      , Node_ELEMENT_NODE = "undefined" != typeof Node ? Node.ELEMENT_NODE : 1
      , Node_TEXT_NODE = "undefined" != typeof Node ? Node.TEXT_NODE : 3
      , isOrContainsNode = function(ancestor, descendant) {
        for (var node = descendant; node; ) {
            if (node === ancestor)
                return !0;
            node = node.parentNode
        }
        return !1
    }
      , nextNode = function(node, container) {
        if (node.firstChild)
            return node.firstChild;
        for (; node; ) {
            if (node == container)
                return null;
            if (node.nextSibling)
                return node.nextSibling;
            node = node.parentNode
        }
        return null
    }
      , saveSelection = function(containerNode) {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount > 0)
                return sel.getRangeAt(0)
        } else if (document.selection) {
            var sel = document.selection;
            return sel.createRange()
        }
        return null
    }
      , restoreSelection = function(containerNode, savedSel) {
        if (savedSel)
            if (window.getSelection) {
                var sel = window.getSelection();
                sel.removeAllRanges(),
                sel.addRange(savedSel)
            } else
                document.selection && savedSel.select()
    }
      , getSelectionRect = function() {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (!sel.rangeCount)
                return !1;
            var range = sel.getRangeAt(0).cloneRange();
            if (range.getBoundingClientRect) {
                var rect = range.getBoundingClientRect();
                if (rect && rect.left && rect.top && rect.right && rect.bottom)
                    return {
                        left: parseInt(rect.left),
                        top: parseInt(rect.top),
                        width: parseInt(rect.right - rect.left),
                        height: parseInt(rect.bottom - rect.top)
                    };
                for (var rects = range.getClientRects ? range.getClientRects() : [], i = 0; i < rects.length; ++i) {
                    var rect = rects[i];
                    if (rect.left && rect.top && rect.right && rect.bottom)
                        return {
                            left: parseInt(rect.left),
                            top: parseInt(rect.top),
                            width: parseInt(rect.right - rect.left),
                            height: parseInt(rect.bottom - rect.top)
                        }
                }
            }
        } else if (document.selection) {
            var sel = document.selection;
            if ("Control" != sel.type) {
                var range = sel.createRange();
                if (range.boundingLeft || range.boundingTop || range.boundingWidth || range.boundingHeight)
                    return {
                        left: range.boundingLeft,
                        top: range.boundingTop,
                        width: range.boundingWidth,
                        height: range.boundingHeight
                    }
            }
        }
        return !1
    }
      , getSelectionCollapsed = function(containerNode) {
        if (window.getSelection) {
            var sel = window.getSelection();
            return sel.isCollapsed ? !0 : !1
        }
        if (document.selection) {
            var sel = document.selection;
            if ("Text" == sel.type) {
                var range = document.selection.createRange()
                  , textrange = document.body.createTextRange();
                return textrange.moveToElementText(containerNode),
                textrange.setEndPoint("EndToStart", range),
                0 == range.htmlText.length
            }
            if ("Control" == sel.type)
                return !1
        }
        return !0
    }
      , getSelectedNodes = function(containerNode) {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (!sel.rangeCount)
                return [];
            for (var nodes = [], i = 0; i < sel.rangeCount; ++i)
                for (var range = sel.getRangeAt(i), node = range.startContainer, endNode = range.endContainer; node; ) {
                    if (node != containerNode) {
                        var node_inside_selection = !1;
                        if (sel.containsNode)
                            node_inside_selection = sel.containsNode(node, !0);
                        else {
                            var noderange = document.createRange();
                            noderange.selectNodeContents(node);
                            for (var i = 0; i < sel.rangeCount; ++i) {
                                var range = sel.getRangeAt(i);
                                if (range.compareBoundaryPoints(range.END_TO_START, noderange) >= 0 && range.compareBoundaryPoints(range.START_TO_END, noderange) <= 0) {
                                    node_inside_selection = !0;
                                    break
                                }
                            }
                        }
                        node_inside_selection && nodes.push(node)
                    }
                    node = nextNode(node, node == endNode ? endNode : containerNode)
                }
            return 0 == nodes.length && isOrContainsNode(containerNode, sel.focusNode) && sel.focusNode != containerNode && nodes.push(sel.focusNode),
            nodes
        }
        if (document.selection) {
            var sel = document.selection;
            if ("Text" == sel.type) {
                for (var nodes = [], ranges = sel.createRangeCollection(), i = 0; i < ranges.length; ++i)
                    for (var range = ranges[i], parentNode = range.parentElement(), node = parentNode; node; ) {
                        var noderange = range.duplicate();
                        if (noderange.moveToElementText(node.nodeType != Node_ELEMENT_NODE ? node.parentNode : node),
                        noderange.compareEndPoints("EndToStart", range) >= 0 && noderange.compareEndPoints("StartToEnd", range) <= 0) {
                            for (var in_array = !1, j = 0; j < nodes.length; ++j)
                                if (nodes[j] === node) {
                                    in_array = !0;
                                    break
                                }
                            in_array || nodes.push(node)
                        }
                        node = nextNode(node, parentNode)
                    }
                return 0 == nodes.length && isOrContainsNode(containerNode, document.activeElement) && document.activeElement != containerNode && nodes.push(document.activeElement),
                nodes
            }
            if ("Control" == sel.type) {
                for (var nodes = [], range = sel.createRange(), i = 0; i < range.length; ++i)
                    nodes.push(range(i));
                return nodes
            }
        }
        return []
    }
      , collapseSelectionEnd = function() {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (!sel.isCollapsed)
                try {
                    sel.collapseToEnd()
                } catch (e) {}
        } else if (document.selection) {
            var sel = document.selection;
            if ("Control" != sel.type) {
                var range = sel.createRange();
                range.collapse(!1),
                range.select()
            }
        }
    }
      , expandSelectionCaret = function(containerNode, preceding, following) {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.modify) {
                for (var i = 0; preceding > i; ++i)
                    sel.modify("extend", "backward", "character");
                for (var i = 0; following > i; ++i)
                    sel.modify("extend", "forward", "character")
            } else {
                var range = sel.getRangeAt(0);
                range.setStart(range.startContainer, range.startOffset - preceding),
                range.setEnd(range.endContainer, range.endOffset + following),
                sel.removeAllRanges(),
                sel.addRange(range)
            }
        } else if (document.selection) {
            var sel = document.selection;
            if ("Control" != sel.type) {
                var range = sel.createRange();
                range.collapse(!0),
                range.moveStart("character", -preceding),
                range.moveEnd("character", following),
                range.select()
            }
        }
    }
      , getSelectionHtml = function(containerNode) {
        if (getSelectionCollapsed(containerNode))
            return null;
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                for (var container = document.createElement("div"), len = sel.rangeCount, i = 0; len > i; ++i) {
                    var contents = sel.getRangeAt(i).cloneContents();
                    container.appendChild(contents)
                }
                return container.innerHTML
            }
        } else if (document.selection) {
            var sel = document.selection;
            if ("Text" == sel.type) {
                var range = sel.createRange();
                return range.htmlText
            }
        }
        return null
    }
      , selectionInside = function(containerNode, force) {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (isOrContainsNode(containerNode, sel.anchorNode) && isOrContainsNode(containerNode, sel.focusNode))
                return !0;
            if (!force)
                return !1;
            var range = document.createRange();
            range.selectNodeContents(containerNode),
            range.collapse(!1),
            sel.removeAllRanges(),
            sel.addRange(range)
        } else if (document.selection) {
            var sel = document.selection;
            if ("Control" == sel.type) {
                var range = sel.createRange();
                if (0 != range.length && isOrContainsNode(containerNode, range(0)))
                    return !0
            } else {
                var rangeContainer = document.body.createTextRange();
                rangeContainer.moveToElementText(containerNode);
                var range = sel.createRange();
                if (rangeContainer.inRange(range))
                    return !0
            }
            if (!force)
                return !1;
            var range = document.body.createTextRange();
            range.moveToElementText(containerNode),
            range.setEndPoint("StartToEnd", range),
            range.select()
        }
        return !0
    }
      , pasteHtmlAtCaret = function(containerNode, html) {
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                var range = sel.getRangeAt(0)
                  , el = document.createElement("div");
                el.innerHTML = html;
                for (var node, lastNode, frag = document.createDocumentFragment(); node = el.firstChild; )
                    lastNode = frag.appendChild(node);
                isOrContainsNode(containerNode, range.commonAncestorContainer) ? (range.deleteContents(),
                range.insertNode(frag)) : containerNode.appendChild(frag),
                lastNode && (range = range.cloneRange(),
                range.setStartAfter(lastNode),
                range.collapse(!0),
                sel.removeAllRanges(),
                sel.addRange(range))
            }
        } else if (document.selection) {
            var sel = document.selection;
            if ("Control" != sel.type) {
                var originalRange = sel.createRange();
                originalRange.collapse(!0);
                var range = sel.createRange();
                if (isOrContainsNode(containerNode, range.parentElement()))
                    range.pasteHTML(html);
                else {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(containerNode),
                    textRange.collapse(!1),
                    textRange.select(),
                    textRange.pasteHTML(html)
                }
                range = sel.createRange(),
                range.setEndPoint("StartToEnd", originalRange),
                range.select()
            }
        }
    }
      , wysiwyg = function(option) {
        option = option || {};
        var option_element = option.element || null;
        "string" == typeof option_element && (option_element = document.getElementById(option_element));
        var option_contenteditable = option.contenteditable || null;
        "string" == typeof option_contenteditable && (option_contenteditable = document.getElementById(option_contenteditable));
        var option_onkeydown = option.onKeyDown || null
          , option_onkeypress = option.onKeyPress || null
          , option_onkeyup = option.onKeyUp || null
          , option_onselection = option.onSelection || null
          , option_onplaceholder = option.onPlaceholder || null
          , option_onopenpopup = option.onOpenpopup || null
          , option_onclosepopup = option.onClosepopup || null
          , option_hijackcontextmenu = option.hijackContextmenu || !1
          , option_readonly = option.readOnly || !1
          , is_textarea = "TEXTAREA" == option_element.nodeName || "INPUT" == option_element.nodeName;
        if (is_textarea) {
            var canContentEditable = "contentEditable"in document.body;
            if (canContentEditable) {
                var webkit = navigator.userAgent.match(/(?:iPad|iPhone|Android).* AppleWebKit\/([^ ]+)/);
                webkit && 420 <= parseInt(webkit[1]) && parseInt(webkit[1]) < 534 && (canContentEditable = !1)
            }
            if (!canContentEditable) {
                var node_textarea = option_element
                  , newlineAfterBR = function(html) {
                    return html.replace(/<br[ \/]*>\n?/gi, "<br>\n")
                };
                node_textarea.value = newlineAfterBR(node_textarea.value);
                var dummy_this = function() {
                    return this
                }
                  , dummy_null = function() {
                    return null
                };
                return {
                    legacy: !0,
                    getElement: function() {
                        return node_textarea
                    },
                    getHTML: function() {
                        return node_textarea.value
                    },
                    setHTML: function(html) {
                        return node_textarea.value = newlineAfterBR(html),
                        this
                    },
                    getSelectedHTML: dummy_null,
                    sync: dummy_this,
                    readOnly: function(readonly) {
                        return void 0 === readonly ? node_textarea.hasAttribute ? node_textarea.hasAttribute("readonly") : !!node_textarea.getAttribute("readonly") : (readonly ? node_textarea.setAttribute("readonly", "readonly") : node_textarea.removeAttribute("readonly"),
                        this)
                    },
                    collapseSelection: dummy_this,
                    expandSelection: dummy_this,
                    openPopup: dummy_null,
                    closePopup: dummy_this,
                    removeFormat: dummy_this,
                    bold: dummy_this,
                    italic: dummy_this,
                    underline: dummy_this,
                    strikethrough: dummy_this,
                    forecolor: dummy_this,
                    highlight: dummy_this,
                    fontName: dummy_this,
                    fontSize: dummy_this,
                    subscript: dummy_this,
                    superscript: dummy_this,
                    align: dummy_this,
                    format: dummy_this,
                    indent: dummy_this,
                    insertLink: dummy_this,
                    insertImage: dummy_this,
                    insertHTML: dummy_this,
                    insertList: dummy_this
                }
            }
        }
        var node_textarea = null
          , node_wysiwyg = null;
        if (is_textarea)
            if (node_textarea = option_element,
            node_textarea.style.display = "none",
            option_contenteditable)
                node_wysiwyg = option_contenteditable;
            else {
                node_wysiwyg = document.createElement("DIV"),
                node_wysiwyg.innerHTML = node_textarea.value || "";
                var parent = node_textarea.parentNode
                  , next = node_textarea.nextSibling;
                next ? parent.insertBefore(node_wysiwyg, next) : parent.appendChild(node_wysiwyg)
            }
        else
            node_wysiwyg = option_element;
        option_readonly || node_wysiwyg.setAttribute("contentEditable", "true");
        var callUpdates, window_ie8 = document.all && (!document.documentMode || document.documentMode <= 8) ? document : window, syncTextarea = null;
        if (is_textarea) {
            var previous_html = node_wysiwyg.innerHTML;
            syncTextarea = function() {
                var new_html = node_wysiwyg.innerHTML;
                new_html != previous_html && (node_textarea.value = new_html,
                previous_html = new_html,
                fireEvent(node_textarea, "change", !1))
            }
            ;
            var form = node_textarea.form;
            form && addEvent(form, "reset", function() {
                node_wysiwyg.innerHTML = "",
                syncTextarea(),
                callUpdates(!0)
            })
        }
        var showPlaceholder;
        if (option_onplaceholder) {
            var placeholder_visible = !1;
            showPlaceholder = function() {
                for (var wysiwyg_empty = !0, node = node_wysiwyg; node; )
                    if (node = nextNode(node, node_wysiwyg)) {
                        if (node.nodeType == Node_ELEMENT_NODE) {
                            if ("IMG" == node.nodeName) {
                                wysiwyg_empty = !1;
                                break
                            }
                        } else if (node.nodeType == Node_TEXT_NODE) {
                            var text = node.nodeValue;
                            if (text && -1 != text.search(/[^\s]/)) {
                                wysiwyg_empty = !1;
                                break
                            }
                        }
                    } else
                        ;
                placeholder_visible != wysiwyg_empty && (option_onplaceholder(wysiwyg_empty),
                placeholder_visible = wysiwyg_empty)
            }
            ,
            showPlaceholder()
        }
        var popup_saved_selection = null
          , handleSelection = null
          , debounced_handleSelection = null;
        option_onselection && (handleSelection = function(clientX, clientY, rightclick) {
            var collapsed = getSelectionCollapsed(node_wysiwyg)
              , nodes = getSelectedNodes(node_wysiwyg)
              , rect = null === clientX || null === clientY ? null : {
                left: clientX,
                top: clientY,
                width: 0,
                height: 0
            }
              , selectionRect = getSelectionRect();
            if (selectionRect && (rect = selectionRect),
            rect) {
                if (node_wysiwyg.getBoundingClientRect) {
                    var boundingrect = node_wysiwyg.getBoundingClientRect();
                    rect.left -= parseInt(boundingrect.left),
                    rect.top -= parseInt(boundingrect.top)
                } else {
                    var node = node_wysiwyg
                      , offsetLeft = 0
                      , offsetTop = 0
                      , fixed = !1;
                    do
                        offsetLeft += node.offsetLeft ? parseInt(node.offsetLeft) : 0,
                        offsetTop += node.offsetTop ? parseInt(node.offsetTop) : 0,
                        "fixed" == node.style.position && (fixed = !0);
                    while (node = node.offsetParent);rect.left -= offsetLeft - (fixed ? 0 : window.pageXOffset),
                    rect.top -= offsetTop - (fixed ? 0 : window.pageYOffset)
                }
                rect.left < 0 && (rect.left = 0),
                rect.top < 0 && (rect.top = 0),
                rect.width > node_wysiwyg.offsetWidth && (rect.width = node_wysiwyg.offsetWidth),
                rect.height > node_wysiwyg.offsetHeight && (rect.height = node_wysiwyg.offsetHeight)
            } else if (nodes.length)
                for (var i = 0; i < nodes.length; ++i) {
                    var node = nodes[i];
                    if (node.nodeType == Node_ELEMENT_NODE) {
                        rect = {
                            left: node.offsetLeft,
                            top: node.offsetTop,
                            width: node.offsetWidth,
                            height: node.offsetHeight
                        };
                        break
                    }
                }
            option_onselection(collapsed, rect, nodes, rightclick)
        }
        ,
        debounced_handleSelection = debounce(handleSelection, 1));
        var node_popup = null
          , popupClickClose = function(e) {
            if (!e)
                var e = window.event;
            var target = e.target || e.srcElement;
            target.nodeType == Node_TEXT_NODE && (target = target.parentNode),
            isOrContainsNode(node_popup, target) || popupClose()
        }
          , popupOpen = function() {
            if (node_popup)
                return node_popup;
            addEvent(window_ie8, "mousedown", popupClickClose, !0),
            node_popup = document.createElement("DIV");
            var parent = node_wysiwyg.parentNode
              , next = node_wysiwyg.nextSibling;
            return next ? parent.insertBefore(node_popup, next) : parent.appendChild(node_popup),
            option_onopenpopup && option_onopenpopup(),
            node_popup
        }
          , popupClose = function() {
            node_popup && (node_popup.parentNode.removeChild(node_popup),
            node_popup = null,
            removeEvent(window_ie8, "mousedown", popupClickClose, !0),
            option_onclosepopup && option_onclosepopup())
        };
        addEvent(node_wysiwyg, "focus", function() {
            node_textarea && fireEvent(node_textarea, "focus", !1)
        }),
        addEvent(node_wysiwyg, "blur", function() {
            syncTextarea && syncTextarea(),
            node_textarea && fireEvent(node_textarea, "blur", !1)
        });
        var debounced_changeHandler = null;
        if (showPlaceholder || syncTextarea) {
            var debounced_syncTextarea = syncTextarea ? debounce(syncTextarea, 250, !0) : null
              , changeHandler = function(e) {
                showPlaceholder && showPlaceholder(),
                debounced_syncTextarea && debounced_syncTextarea()
            };
            debounced_changeHandler = debounce(changeHandler, 1),
            addEvent(node_wysiwyg, "input", debounced_changeHandler),
            addEvent(node_wysiwyg, "DOMNodeInserted", debounced_changeHandler),
            addEvent(node_wysiwyg, "DOMNodeRemoved", debounced_changeHandler),
            addEvent(node_wysiwyg, "DOMSubtreeModified", debounced_changeHandler),
            addEvent(node_wysiwyg, "DOMCharacterDataModified", debounced_changeHandler),
            addEvent(node_wysiwyg, "propertychange", debounced_changeHandler),
            addEvent(node_wysiwyg, "textInput", debounced_changeHandler),
            addEvent(node_wysiwyg, "paste", debounced_changeHandler),
            addEvent(node_wysiwyg, "cut", debounced_changeHandler),
            addEvent(node_wysiwyg, "drop", debounced_changeHandler)
        }
        var keyHandler = function(e, phase) {
            if (!e)
                var e = window.event;
            var key = e.which || e.keyCode
              , character = String.fromCharCode(key || e.charCode)
              , shiftKey = e.shiftKey || !1
              , altKey = e.altKey || !1
              , ctrlKey = e.ctrlKey || !1
              , metaKey = e.metaKey || !1;
            if (1 == phase) {
                if (option_onkeydown && option_onkeydown(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1)
                    return cancelEvent(e)
            } else if (2 == phase) {
                if (option_onkeypress && option_onkeypress(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1)
                    return cancelEvent(e)
            } else if (3 == phase && option_onkeyup && option_onkeyup(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1)
                return cancelEvent(e);
            if ((2 == phase || 3 == phase) && (popup_saved_selection = null,
            debounced_handleSelection && debounced_handleSelection(null, null, !1)),
            2 == phase && debounced_changeHandler)
                switch (key) {
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                    break;
                default:
                    debounced_changeHandler()
                }
        };
        addEvent(node_wysiwyg, "keydown", function(e) {
            return keyHandler(e, 1)
        }),
        addEvent(node_wysiwyg, "keypress", function(e) {
            return keyHandler(e, 2)
        }),
        addEvent(node_wysiwyg, "keyup", function(e) {
            return keyHandler(e, 3)
        });
        var mouseHandler = function(e, rightclick) {
            if (!e)
                var e = window.event;
            var clientX = null
              , clientY = null;
            e.clientX && e.clientY ? (clientX = e.clientX,
            clientY = e.clientY) : e.pageX && e.pageY && (clientX = e.pageX - window.pageXOffset,
            clientY = e.pageY - window.pageYOffset),
            e.which && 3 == e.which ? rightclick = !0 : e.button && 2 == e.button && (rightclick = !0),
            removeEvent(window_ie8, "mouseup", mouseHandler),
            popup_saved_selection = null,
            (option_hijackcontextmenu || !rightclick) && debounced_handleSelection && debounced_handleSelection(clientX, clientY, rightclick)
        };
        addEvent(node_wysiwyg, "mousedown", function(e) {
            removeEvent(window_ie8, "mouseup", mouseHandler),
            addEvent(window_ie8, "mouseup", mouseHandler)
        }),
        addEvent(node_wysiwyg, "mouseup", function(e) {
            mouseHandler(e),
            debounced_changeHandler && debounced_changeHandler()
        }),
        addEvent(node_wysiwyg, "dblclick", function(e) {
            mouseHandler(e)
        }),
        addEvent(node_wysiwyg, "selectionchange", function(e) {
            mouseHandler(e)
        }),
        option_hijackcontextmenu && addEvent(node_wysiwyg, "contextmenu", function(e) {
            return mouseHandler(e, !0),
            cancelEvent(e)
        });
        var execCommand = function(command, param, force_selection) {
            if (restoreSelection(node_wysiwyg, popup_saved_selection),
            node_wysiwyg.focus(),
            !selectionInside(node_wysiwyg, force_selection))
                return !1;
            if (window.getSelection)
                try {
                    return document.queryCommandSupported && !document.queryCommandSupported(command) ? !1 : document.execCommand(command, !1, param)
                } catch (e) {}
            else if (document.selection) {
                var sel = document.selection;
                if ("None" != sel.type) {
                    var range = sel.createRange();
                    try {
                        return range.queryCommandEnabled(command) ? range.execCommand(command, !1, param) : !1
                    } catch (e) {}
                }
            }
            return !1
        }
          , trailingDiv = null
          , IEtrailingDIV = function() {
            (document.all || window.MSInputMethodContext) && (trailingDiv = document.createElement("DIV"),
            node_wysiwyg.appendChild(trailingDiv))
        };
        return callUpdates = function(selection_destroyed) {
            trailingDiv && (node_wysiwyg.removeChild(trailingDiv),
            trailingDiv = null),
            debounced_changeHandler && debounced_changeHandler(),
            selection_destroyed ? (collapseSelectionEnd(),
            popup_saved_selection = null) : popup_saved_selection && (popup_saved_selection = saveSelection(node_wysiwyg))
        }
        ,
        {
            getElement: function() {
                return node_wysiwyg
            },
            getHTML: function() {
                return node_wysiwyg.innerHTML
            },
            setHTML: function(html) {
                return node_wysiwyg.innerHTML = html || "<br>",
                callUpdates(!0),
                this
            },
            getSelectedHTML: function() {
                return restoreSelection(node_wysiwyg, popup_saved_selection),
                selectionInside(node_wysiwyg) ? getSelectionHtml(node_wysiwyg) : null
            },
            sync: function() {
                return syncTextarea && syncTextarea(),
                this
            },
            readOnly: function(readonly) {
                return void 0 === readonly ? node_wysiwyg.hasAttribute ? !node_wysiwyg.hasAttribute("contentEditable") : !node_wysiwyg.getAttribute("contentEditable") : (readonly ? node_wysiwyg.removeAttribute("contentEditable") : node_wysiwyg.setAttribute("contentEditable", "true"),
                this)
            },
            collapseSelection: function() {
                return collapseSelectionEnd(),
                popup_saved_selection = null,
                this
            },
            expandSelection: function(preceding, following) {
                return restoreSelection(node_wysiwyg, popup_saved_selection),
                selectionInside(node_wysiwyg) ? (expandSelectionCaret(node_wysiwyg, preceding, following),
                popup_saved_selection = saveSelection(node_wysiwyg),
                this) : this
            },
            openPopup: function() {
                return popup_saved_selection || (popup_saved_selection = saveSelection(node_wysiwyg)),
                popupOpen()
            },
            closePopup: function() {
                return popupClose(),
                this
            },
            removeFormat: function() {
                return execCommand("removeFormat"),
                execCommand("unlink"),
                callUpdates(),
                this
            },
            bold: function() {
                return execCommand("bold"),
                callUpdates(),
                this
            },
            italic: function() {
                return execCommand("italic"),
                callUpdates(),
                this
            },
            underline: function() {
                return execCommand("underline"),
                callUpdates(),
                this
            },
            strikethrough: function() {
                return execCommand("strikeThrough"),
                callUpdates(),
                this
            },
            forecolor: function(color) {
                return execCommand("foreColor", color),
                callUpdates(),
                this
            },
            highlight: function(color) {
                return execCommand("hiliteColor", color) || execCommand("backColor", color),
                callUpdates(),
                this
            },
            fontName: function(name) {
                return execCommand("fontName", name),
                callUpdates(),
                this
            },
            fontSize: function(size) {
                return execCommand("fontSize", size),
                callUpdates(),
                this
            },
            subscript: function() {
                return execCommand("subscript"),
                callUpdates(),
                this
            },
            superscript: function() {
                return execCommand("superscript"),
                callUpdates(),
                this
            },
            align: function(align) {
                return IEtrailingDIV(),
                "left" == align ? execCommand("justifyLeft") : "center" == align ? execCommand("justifyCenter") : "right" == align ? execCommand("justifyRight") : "justify" == align && execCommand("justifyFull"),
                callUpdates(),
                this
            },
            format: function(tagname) {
                return IEtrailingDIV(),
                execCommand("formatBlock", tagname),
                callUpdates(),
                this
            },
            indent: function(outdent) {
                return IEtrailingDIV(),
                execCommand(outdent ? "outdent" : "indent"),
                callUpdates(),
                this
            },
            insertLink: function(url) {
                return execCommand("createLink", url),
                callUpdates(!0),
                this
            },
            insertImage: function(url) {
                return execCommand("insertImage", url, !0),
                callUpdates(!0),
                this
            },
            insertHTML: function(html) {
                return execCommand("insertHTML", html, !0) || (restoreSelection(node_wysiwyg, popup_saved_selection),
                selectionInside(node_wysiwyg, !0),
                pasteHtmlAtCaret(node_wysiwyg, html)),
                callUpdates(!0),
                this
            },
            insertList: function(ordered) {
                return IEtrailingDIV(),
                execCommand(ordered ? "insertOrderedList" : "insertUnorderedList"),
                callUpdates(),
                this
            }
        }
    };
    return wysiwyg
});

!function(factory) {
    "use strict";
    if ("function" == typeof define && define.amd)
        define(["jquery"], function($) {
            return factory(window, document, $)
        });
    else {
        if ("undefined" == typeof exports)
            return factory(window, document, jQuery);
        module.exports = factory(window, document, require("jquery"))
    }
}(function(window, document, $) {
    "use strict";
    var HSVtoRGB = function(h, s, v) {
        var r, g, b, i, f, p, q, t;
        switch (i = Math.floor(6 * h),
        f = 6 * h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        i % 6) {
        case 0:
            r = v,
            g = t,
            b = p;
            break;
        case 1:
            r = q,
            g = v,
            b = p;
            break;
        case 2:
            r = p,
            g = v,
            b = t;
            break;
        case 3:
            r = p,
            g = q,
            b = v;
            break;
        case 4:
            r = t,
            g = p,
            b = v;
            break;
        case 5:
            r = v,
            g = p,
            b = q
        }
        var hr = Math.floor(255 * r).toString(16)
          , hg = Math.floor(255 * g).toString(16)
          , hb = Math.floor(255 * b).toString(16);
        return "#" + (hr.length < 2 ? "0" : "") + hr + (hg.length < 2 ? "0" : "") + hg + (hb.length < 2 ? "0" : "") + hb
    }
      , html_encode = function(string) {
        return string.replace(/[&<>"]/g, function(tag) {
            var charsToReplace = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return charsToReplace[tag] || tag
        })
    }
      , create_editor = function($textarea, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_selectImage, placeholder_url, placeholder_embed, max_imagesize, filter_imageType, on_imageupload, force_imageupload, video_from_url, on_keydown, on_keypress, on_keyup, on_autocomplete) {
        var wysiwygeditor_insertLink = function(wysiwygeditor, url) {
            url && (wysiwygeditor.getSelectedHTML() ? wysiwygeditor.insertLink(url) : wysiwygeditor.insertHTML('<a href="' + html_encode(url) + '">' + html_encode(url) + "</a>")),
            wysiwygeditor.closePopup().collapseSelection()
        }
          , content_insertlink = function(wysiwygeditor, $modify_link) {
            var $inputurl = $('<input type="text" value="">').val($modify_link ? $modify_link.attr("href") : "").addClass("wysiwyg-input").keypress(function(event) {
                (10 == event.which || 13 == event.which) && ($modify_link ? ($modify_link.prop("href", $inputurl.val()),
                wysiwygeditor.closePopup().collapseSelection()) : wysiwygeditor_insertLink(wysiwygeditor, $inputurl.val()))
            });
            placeholder_url && $inputurl.prop("placeholder", placeholder_url);
            var $okaybutton = $();
            toolbar_submit && ($okaybutton = toolbar_button(toolbar_submit).click(function(event) {
                return $modify_link ? ($modify_link.prop("href", $inputurl.val()),
                wysiwygeditor.closePopup().collapseSelection()) : wysiwygeditor_insertLink(wysiwygeditor, $inputurl.val()),
                event.stopPropagation(),
                event.preventDefault(),
                !1
            }));
            var $content = $("<div/>").addClass("wysiwyg-toolbar-form").prop("unselectable", "on");
            return $content.append($inputurl).append($okaybutton),
            $content
        }
          , content_insertimage = function(wysiwygeditor) {
            var insert_image_wysiwyg = function(url, filename) {
                var html = '<img id="wysiwyg-insert-image" src="" alt=""' + (filename ? ' title="' + html_encode(filename) + '"' : "") + ">";
                wysiwygeditor.insertHTML(html).closePopup().collapseSelection();
                var $image = $("#wysiwyg-insert-image").removeAttr("id");
                max_imagesize && $image.css({
                    maxWidth: max_imagesize[0] + "px",
                    maxHeight: max_imagesize[1] + "px"
                }).load(function() {
                    $image.css({
                        maxWidth: "",
                        maxHeight: ""
                    });
                    var image_width = $image.width()
                      , image_height = $image.height();
                    (image_width > max_imagesize[0] || image_height > max_imagesize[1]) && (image_width / image_height > max_imagesize[0] / max_imagesize[1] ? (image_height = parseInt(image_height / image_width * max_imagesize[0]),
                    image_width = max_imagesize[0]) : (image_width = parseInt(image_width / image_height * max_imagesize[1]),
                    image_height = max_imagesize[1]),
                    $image.prop("width", image_width).prop("height", image_height))
                }),
                $image.prop("src", url)
            }
              , $content = $("<div/>").addClass("wysiwyg-toolbar-form").prop("unselectable", "on")
              , $fileuploader = null
              , $fileuploader_input = $('<input type="file">').css({
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer"
            });
            if (!force_imageupload && window.File && window.FileReader && window.FileList) {
                var loadImageFromFile = function(file) {
                    if (("function" != typeof filter_imageType || filter_imageType(file)) && file.type.match(filter_imageType)) {
                        var reader = new FileReader;
                        reader.onload = function(event) {
                            var dataurl = event.target.result;
                            insert_image_wysiwyg(dataurl, file.name)
                        }
                        ,
                        reader.readAsDataURL(file)
                    }
                };
                $fileuploader = $fileuploader_input.prop("draggable", "true").change(function(event) {
                    for (var files = event.target.files, i = 0; i < files.length; ++i)
                        loadImageFromFile(files[i])
                }).on("dragover", function(event) {
                    return event.originalEvent.dataTransfer.dropEffect = "copy",
                    event.stopPropagation(),
                    event.preventDefault(),
                    !1
                }).on("drop", function(event) {
                    for (var files = event.originalEvent.dataTransfer.files, i = 0; i < files.length; ++i)
                        loadImageFromFile(files[i]);
                    return event.stopPropagation(),
                    event.preventDefault(),
                    !1
                })
            } else if (on_imageupload) {
                var $input = $fileuploader_input.change(function(event) {
                    on_imageupload.call(this, insert_image_wysiwyg)
                });
                $fileuploader = $("<form/>").append($input)
            }
            $fileuploader && $("<div/>").addClass("wysiwyg-browse").html(label_selectImage).append($fileuploader).appendTo($content);
            var $inputurl = $('<input type="text" value="">').addClass("wysiwyg-input").keypress(function(event) {
                (10 == event.which || 13 == event.which) && insert_image_wysiwyg($inputurl.val())
            });
            placeholder_url && $inputurl.prop("placeholder", placeholder_url);
            var $okaybutton = $();
            return toolbar_submit && ($okaybutton = toolbar_button(toolbar_submit).click(function(event) {
                return insert_image_wysiwyg($inputurl.val()),
                event.stopPropagation(),
                event.preventDefault(),
                !1
            })),
            $content.append($("<div/>").append($inputurl).append($okaybutton)),
            $content
        }
          , content_insertvideo = function(wysiwygeditor) {
            var insert_video_wysiwyg = function(url, html) {
                url = $.trim(url || ""),
                html = $.trim(html || "");
                var website_url = !1;
                url.length && !html.length ? website_url = url : -1 == html.indexOf("<") && -1 == html.indexOf(">") && html.match(/^(?:https?:\/)?\/?(?:[^:\/\s]+)(?:(?:\/\w+)*\/)(?:[\w\-\.]+[^#?\s]+)(?:.*)?(?:#[\w\-]+)?$/) && (website_url = html),
                website_url && video_from_url && (html = video_from_url(website_url) || ""),
                !html.length && website_url && (html = '<video src="' + html_encode(website_url) + '">'),
                wysiwygeditor.insertHTML(html).closePopup().collapseSelection()
            }
              , $content = $("<div/>").addClass("wysiwyg-toolbar-form").prop("unselectable", "on")
              , $textareaembed = $("<textarea>").addClass("wysiwyg-input wysiwyg-inputtextarea");
            placeholder_embed && $textareaembed.prop("placeholder", placeholder_embed),
            $("<div/>").addClass("wysiwyg-embedcode").append($textareaembed).appendTo($content);
            var $inputurl = $('<input type="text" value="">').addClass("wysiwyg-input").keypress(function(event) {
                (10 == event.which || 13 == event.which) && insert_video_wysiwyg($inputurl.val())
            });
            placeholder_url && $inputurl.prop("placeholder", placeholder_url);
            var $okaybutton = $();
            return toolbar_submit && ($okaybutton = toolbar_button(toolbar_submit).click(function(event) {
                return insert_video_wysiwyg($inputurl.val(), $textareaembed.val()),
                event.stopPropagation(),
                event.preventDefault(),
                !1
            })),
            $content.append($("<div/>").append($inputurl).append($okaybutton)),
            $content
        }
          , content_colorpalette = function(wysiwygeditor, forecolor) {
            for (var $content = $("<table/>").prop("cellpadding", "0").prop("cellspacing", "0").prop("unselectable", "on"), row = 1; 15 > row; ++row) {
                for (var $rows = $("<tr/>"), col = 0; 25 > col; ++col) {
                    var color;
                    if (24 == col) {
                        var gray = Math.floor(255 / 13 * (14 - row)).toString(16)
                          , hexg = (gray.length < 2 ? "0" : "") + gray;
                        color = "#" + hexg + hexg + hexg
                    } else {
                        var hue = col / 24
                          , saturation = 8 >= row ? row / 8 : 1
                          , value = row > 8 ? (16 - row) / 8 : 1;
                        color = HSVtoRGB(hue, saturation, value)
                    }
                    $("<td/>").addClass("wysiwyg-toolbar-color").prop("title", color).prop("unselectable", "on").css({
                        backgroundColor: color
                    }).click(function() {
                        var color = this.title;
                        return forecolor ? wysiwygeditor.forecolor(color).closePopup().collapseSelection() : wysiwygeditor.highlight(color).closePopup().collapseSelection(),
                        !1
                    }).appendTo($rows)
                }
                $content.append($rows)
            }
            return $content
        }
          , get_toolbar_handler = function(name, popup_callback) {
            switch (name) {
            case "insertimage":
                return popup_callback ? function(target) {
                    popup_callback(content_insertimage(wysiwygeditor), target)
                }
                : null;
            case "insertvideo":
                return popup_callback ? function(target) {
                    popup_callback(content_insertvideo(wysiwygeditor), target)
                }
                : null;
            case "insertlink":
                return popup_callback ? function(target) {
                    popup_callback(content_insertlink(wysiwygeditor), target)
                }
                : null;
            case "bold":
                return function() {
                    wysiwygeditor.bold()
                }
                ;
            case "italic":
                return function() {
                    wysiwygeditor.italic()
                }
                ;
            case "underline":
                return function() {
                    wysiwygeditor.underline()
                }
                ;
            case "strikethrough":
                return function() {
                    wysiwygeditor.strikethrough()
                }
                ;
            case "forecolor":
                return popup_callback ? function(target) {
                    popup_callback(content_colorpalette(wysiwygeditor, !0), target)
                }
                : null;
            case "highlight":
                return popup_callback ? function(target) {
                    popup_callback(content_colorpalette(wysiwygeditor, !1), target)
                }
                : null;
            case "alignleft":
                return function() {
                    wysiwygeditor.align("left")
                }
                ;
            case "aligncenter":
                return function() {
                    wysiwygeditor.align("center")
                }
                ;
            case "alignright":
                return function() {
                    wysiwygeditor.align("right")
                }
                ;
            case "alignjustify":
                return function() {
                    wysiwygeditor.align("justify")
                }
                ;
            case "subscript":
                return function() {
                    wysiwygeditor.subscript()
                }
                ;
            case "superscript":
                return function() {
                    wysiwygeditor.superscript()
                }
                ;
            case "indent":
                return function() {
                    wysiwygeditor.indent()
                }
                ;
            case "outdent":
                return function() {
                    wysiwygeditor.indent(!0)
                }
                ;
            case "orderedList":
                return function() {
                    wysiwygeditor.insertList(!0)
                }
                ;
            case "unorderedList":
                return function() {
                    wysiwygeditor.insertList()
                }
                ;
            case "removeformat":
                return function() {
                    wysiwygeditor.removeFormat().closePopup().collapseSelection()
                }
            }
            return null
        }
          , toolbar_button = function(button) {
            var $element = $("<a/>").addClass("wysiwyg-toolbar-icon").prop("href", "#").prop("unselectable", "on").append(button.image);
            return $.each(button, function(name, value) {
                switch (name) {
                case "class":
                    $element.addClass(value);
                    break;
                case "image":
                case "html":
                case "popup":
                case "click":
                case "showstatic":
                case "showselection":
                    break;
                default:
                    $element.attr(name, value)
                }
            }),
            $element
        }
          , add_buttons_to_toolbar = function($toolbar, selection, popup_open_callback, popup_position_callback) {
            $.each(toolbar_buttons, function(key, value) {
                if (value && (!(selection === !1 && "showstatic"in value) || value.showstatic) && (!(selection === !0 && "showselection"in value) || value.showselection)) {
                    var toolbar_handler;
                    toolbar_handler = "click"in value ? function(target) {
                        value.click($(target))
                    }
                    : "popup"in value ? function(target) {
                        var $popup = popup_open_callback()
                          , overwrite_offset = value.popup($popup, $(target));
                        popup_position_callback($popup, target, overwrite_offset)
                    }
                    : get_toolbar_handler(key, function($content, target) {
                        var $popup = popup_open_callback();
                        $popup.append($content),
                        popup_position_callback($popup, target),
                        $popup.find("input[type=text]:first").focus()
                    });
                    var $button;
                    toolbar_handler ? $button = toolbar_button(value).click(function(event) {
                        return toolbar_handler(event.currentTarget),
                        get_toolbar_handler(key) && wysiwygeditor.getElement().focus(),
                        event.stopPropagation(),
                        event.preventDefault(),
                        !1
                    }) : value.html && ($button = $(value.html)),
                    $button && $toolbar.append($button)
                }
            })
        }
          , popup_position = function($popup, $container, left, top) {
            for (var container_node = $container.get(0), offsetparent = container_node.offsetParent, offsetparent_left = 0, offsetparent_top = 0, offsetparent_break = !1, offsetparent_window_left = 0, offsetparent_window_top = 0, offsetparent_fixed = !1, offsetparent_overflow = !1, popup_width = $popup.width(), node = offsetparent; node; ) {
                offsetparent_window_left += node.offsetLeft,
                offsetparent_window_top += node.offsetTop;
                var $node = $(node)
                  , node_position = $node.css("position");
                "static" != node_position ? offsetparent_break = !0 : offsetparent_break || (offsetparent_left += node.offsetLeft,
                offsetparent_top += node.offsetTop),
                "fixed" == node_position && (offsetparent_fixed = !0),
                "visible" != $node.css("overflow") && (offsetparent_overflow = !0),
                node = node.offsetParent
            }
            var $offsetparent = $(offsetparent || document.body);
            $offsetparent.append($popup),
            left += offsetparent_left + container_node.offsetLeft,
            top += offsetparent_top + container_node.offsetTop,
            (offsetparent_fixed || offsetparent_overflow) && (left + popup_width > $offsetparent.width() - 1 && (left = $offsetparent.width() - popup_width - 1),
            1 > left && (left = 1));
            var viewport_width = $(window).width();
            offsetparent_window_left + left + popup_width > viewport_width - 1 && (left = viewport_width - offsetparent_window_left - popup_width - 1);
            var scroll_left = offsetparent_fixed ? 0 : $(window).scrollLeft();
            scroll_left + 1 > offsetparent_window_left + left && (left = scroll_left - offsetparent_window_left + 1),
            $popup.css({
                left: parseInt(left) + "px",
                top: parseInt(top) + "px"
            })
        }
          , hotkeys = {}
          , autocomplete = null
          , create_wysiwyg = function($textarea, $editor, $container, $placeholder) {
            var handle_autocomplete = function(keypress, key, character, shiftKey, altKey, ctrlKey, metaKey) {
                if (on_autocomplete) {
                    var typed = autocomplete || "";
                    switch (key) {
                    case 8:
                        typed = typed.substring(0, typed.length - 1);
                    case 13:
                    case 27:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        if (keypress)
                            return;
                        character = !1;
                        break;
                    default:
                        if (!keypress)
                            return;
                        typed += character
                    }
                    var rc = on_autocomplete(typed, key, character, shiftKey, altKey, ctrlKey, metaKey);
                    if ("object" != typeof rc || !rc.length)
                        return wysiwygeditor.closePopup(),
                        autocomplete = null,
                        rc;
                    var $popup = $(wysiwygeditor.openPopup());
                    $popup.hide().addClass("wysiwyg-popup wysiwyg-popuphover").empty().append(rc),
                    autocomplete = typed
                }
            }
              , option = {
                element: $textarea.get(0),
                contenteditable: $editor ? $editor.get(0) : null,
                onKeyDown: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {
                    if (on_keydown && on_keydown(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1)
                        return !1;
                    if (character && !shiftKey && !altKey && ctrlKey && !metaKey) {
                        var hotkey = character.toLowerCase();
                        if (!hotkeys[hotkey])
                            return;
                        return hotkeys[hotkey](),
                        !1
                    }
                    return handle_autocomplete(!1, key, character, shiftKey, altKey, ctrlKey, metaKey)
                },
                onKeyPress: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {
                    return on_keypress && on_keypress(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1 ? !1 : handle_autocomplete(!0, key, character, shiftKey, altKey, ctrlKey, metaKey)
                },
                onKeyUp: function(key, character, shiftKey, altKey, ctrlKey, metaKey) {
                    return on_keyup && on_keyup(key, character, shiftKey, altKey, ctrlKey, metaKey) === !1 ? !1 : void 0
                },
                onSelection: function(collapsed, rect, nodes, rightclick) {
                    var show_popup = !0
                      , $special_popup = null;
                    if (collapsed && $.each(nodes, function(index, node) {
                        var $link = $(node).closest("a");
                        return 0 != $link.length ? ($special_popup = content_insertlink(wysiwygeditor, $link),
                        !1) : void 0
                    }),
                    wysiwygeditor.readOnly() ? show_popup = !1 : rect ? $special_popup || rightclick || autocomplete || (-1 == $.inArray("selection", toolbar_position.split("-")) ? show_popup = !1 : collapsed ? show_popup = !1 : 1 == nodes.length && "IMG" == nodes[0].nodeName && (show_popup = !1)) : show_popup = !1,
                    !show_popup)
                        return void wysiwygeditor.closePopup();
                    var $popup, apply_popup_position = function() {
                        var popup_width = $popup.outerWidth()
                          , $parent = $textarea.parent()
                          , container_offset = $parent.offset()
                          , editor_offset = $(wysiwygeditor.getElement()).offset()
                          , left = rect.left + parseInt(rect.width / 2) - parseInt(popup_width / 2) + editor_offset.left - container_offset.left
                          , top = rect.top + rect.height + editor_offset.top - container_offset.top;
                        popup_position($popup, $parent, left, top)
                    };
                    $popup = $(wysiwygeditor.openPopup()),
                    $popup.hasClass("wysiwyg-popuphover") && !$popup.data("wysiwygjs-special") == !$special_popup || ($popup = $(wysiwygeditor.closePopup().openPopup())),
                    autocomplete ? $popup.show() : $popup.hasClass("wysiwyg-popup") || ($popup.addClass("wysiwyg-popup wysiwyg-popuphover"),
                    $special_popup ? $popup.empty().append($special_popup).data("wysiwygjs-special", !0) : add_buttons_to_toolbar($popup, !0, function() {
                        return $popup.empty()
                    }, apply_popup_position)),
                    apply_popup_position()
                },
                onOpenpopup: function() {
                    add_class_active()
                },
                onClosepopup: function() {
                    autocomplete = null,
                    remove_class_active()
                },
                hijackContextmenu: "selection" == toolbar_position,
                readOnly: !!$textarea.prop("readonly")
            };
            $placeholder && (option.onPlaceholder = function(visible) {
                visible ? $placeholder.show() : $placeholder.hide()
            }
            );
            var wysiwygeditor = wysiwyg(option);
            return wysiwygeditor
        }
          , $container = $textarea.closest(".wysiwyg-container");
        0 == $container.length && ($container = $("<div/>").addClass("wysiwyg-container"),
        classes && $container.addClass(classes),
        $textarea.wrap($container),
        $container = $textarea.closest(".wysiwyg-container"));
        var $wrapper = $textarea.closest(".wysiwyg-wrapper");
        placeholder && 0 == $wrapper.length && ($wrapper = $("<div/>").addClass("wysiwyg-wrapper"),
        $textarea.wrap($wrapper),
        $wrapper = $textarea.closest(".wysiwyg-wrapper"));
        var $placeholder = null;
        0 != $wrapper.length && ($placeholder = $wrapper.find(".wysiwyg-placeholder")),
        !placeholder || $placeholder && 0 != $placeholder.length || ($placeholder = $("<div/>").addClass("wysiwyg-placeholder").html(placeholder).hide(),
        $wrapper.prepend($placeholder));
        var $editor = $container.find(".wysiwyg-editor");
        0 == $editor.length && ($editor = null);
        var wysiwygeditor = create_wysiwyg($textarea, $editor, $container, $placeholder);
        if (wysiwygeditor.legacy) {
            $editor && $editor.hide(),
            $placeholder && $placeholder.hide();
            var $textarea = $(wysiwygeditor.getElement());
            $textarea.show().addClass("wysiwyg-textarea"),
            $textarea.is(":visible") && $textarea.width($container.width() - ($textarea.outerWidth() - $textarea.width()))
        } else {
            $editor || $(wysiwygeditor.getElement()).addClass("wysiwyg-editor"),
            $wrapper.click(function() {
                wysiwygeditor.getElement().focus()
            });
            var remove_active_timeout = null
              , initialize_toolbar = null
              , add_class_active = function() {
                remove_active_timeout && clearTimeout(remove_active_timeout),
                remove_active_timeout = null,
                initialize_toolbar && (initialize_toolbar(),
                initialize_toolbar = null),
                $container.addClass("wysiwyg-active"),
                $container.find(".wysiwyg-toolbar-focus").slideDown(200)
            }
              , remove_class_active = function() {
                remove_active_timeout || document.activeElement == wysiwygeditor.getElement() || (remove_active_timeout = setTimeout(function() {
                    remove_active_timeout = null,
                    $container.removeClass("wysiwyg-active"),
                    0 == $.trim(wysiwygeditor.getHTML().replace(/<br\s*[\/]?>/gi, "")).length && $container.find(".wysiwyg-toolbar-focus").slideUp(200)
                }, 100))
            };
            $(wysiwygeditor.getElement()).focus(add_class_active).blur(remove_class_active),
            $textarea.closest("form").on("reset", remove_class_active);
            var commands = {};
            if ($.each(toolbar_buttons, function(key, value) {
                if (value && value.hotkey) {
                    var toolbar_handler = get_toolbar_handler(key);
                    toolbar_handler && (hotkeys[value.hotkey.toLowerCase()] = toolbar_handler,
                    commands[key] = toolbar_handler)
                }
            }),
            !$.isEmptyObject(toolbar_buttons) && "selection" != toolbar_position) {
                var toolbar_top = -1 != $.inArray("top", toolbar_position.split("-"))
                  , toolbar_focus = -1 != $.inArray("focus", toolbar_position.split("-"))
                  , create_toolbar = function() {
                    var $toolbar = $("<div/>").addClass("wysiwyg-toolbar").addClass(toolbar_top ? "wysiwyg-toolbar-top" : "wysiwyg-toolbar-bottom");
                    toolbar_focus && $toolbar.hide().addClass("wysiwyg-toolbar-focus"),
                    add_buttons_to_toolbar($toolbar, !1, function() {
                        var $popup = $(wysiwygeditor.openPopup());
                        return $popup.hasClass("wysiwyg-popup") && $popup.hasClass("wysiwyg-popuphover") && ($popup = $(wysiwygeditor.closePopup().openPopup())),
                        $popup.hasClass("wysiwyg-popup") || $popup.addClass("wysiwyg-popup"),
                        $popup
                    }, function($popup, target, overwrite_offset) {
                        var $button = $(target)
                          , popup_width = $popup.outerWidth()
                          , left = $button.offset().left - $container.offset().left + parseInt($button.width() / 2) - parseInt(popup_width / 2)
                          , top = $button.offset().top - $container.offset().top;
                        toolbar_top ? top += $button.outerHeight() : top -= $popup.outerHeight(),
                        overwrite_offset && (left = overwrite_offset.left,
                        top = overwrite_offset.top),
                        popup_position($popup, $container, left, top)
                    }),
                    toolbar_top ? $container.prepend($toolbar) : $container.append($toolbar)
                };
                toolbar_focus ? initialize_toolbar = create_toolbar : create_toolbar()
            }
        }
        return {
            wysiwygeditor: wysiwygeditor,
            $container: $container
        }
    };
    $.fn.wysiwyg = function(option, param) {
        if (!option || "object" == typeof option)
            return option = $.extend({}, option),
            this.each(function() {
                var $that = $(this);
                if (!$that.data("wysiwygjs")) {
                    var classes = option["class"]
                      , placeholder = option.placeholder || $that.prop("placeholder")
                      , toolbar_position = option.toolbar || "top"
                      , toolbar_buttons = option.buttons || {}
                      , toolbar_submit = option.submit
                      , label_selectImage = option.selectImage
                      , placeholder_url = option.placeholderUrl || null
                      , placeholder_embed = option.placeholderEmbed || null
                      , max_imagesize = option.maxImageSize || null
                      , filter_imageType = option.filterImageType || "^image/"
                      , on_imageupload = option.onImageUpload || null
                      , force_imageupload = option.forceImageUpload && on_imageupload
                      , video_from_url = option.videoFromUrl || null
                      , on_keydown = option.onKeyDown || null
                      , on_keypress = option.onKeyPress || null
                      , on_keyup = option.onKeyUp || null
                      , on_autocomplete = option.onAutocomplete || null
                      , data = create_editor($that, classes, placeholder, toolbar_position, toolbar_buttons, toolbar_submit, label_selectImage, placeholder_url, placeholder_embed, max_imagesize, filter_imageType, on_imageupload, force_imageupload, video_from_url, on_keydown, on_keypress, on_keyup, on_autocomplete);
                    $that.data("wysiwygjs", data)
                }
            });
        if (1 == this.length) {
            var data = this.data("wysiwygjs");
            if (!data)
                return this;
            if ("container" == option)
                return data.$container;
            if ("shell" == option)
                return data.wysiwygeditor
        }
        return this
    }
});

!function(a) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = a();
    else if ("function" == typeof define && define.amd)
        define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        b.enquire = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)
                        return i(g, !0);
                    if (f)
                        return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND",
                    j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
            e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            function d(a, b) {
                this.query = a,
                this.isUnconditional = b,
                this.handlers = [],
                this.mql = window.matchMedia(a);
                var c = this;
                this.listener = function(a) {
                    c.mql = a.currentTarget || a,
                    c.assess()
                }
                ,
                this.mql.addListener(this.listener)
            }
            var e = a(3)
              , f = a(4).each;
            d.prototype = {
                constuctor: d,
                addHandler: function(a) {
                    var b = new e(a);
                    this.handlers.push(b),
                    this.matches() && b.on()
                },
                removeHandler: function(a) {
                    var b = this.handlers;
                    f(b, function(c, d) {
                        return c.equals(a) ? (c.destroy(),
                        !b.splice(d, 1)) : void 0
                    })
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    f(this.handlers, function(a) {
                        a.destroy()
                    }),
                    this.mql.removeListener(this.listener),
                    this.handlers.length = 0
                },
                assess: function() {
                    var a = this.matches() ? "on" : "off";
                    f(this.handlers, function(b) {
                        b[a]()
                    })
                }
            },
            b.exports = d
        }
        , {
            3: 3,
            4: 4
        }],
        2: [function(a, b, c) {
            function d() {
                if (!window.matchMedia)
                    throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {},
                this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            var e = a(1)
              , f = a(4)
              , g = f.each
              , h = f.isFunction
              , i = f.isArray;
            d.prototype = {
                constructor: d,
                register: function(a, b, c) {
                    var d = this.queries
                      , f = c && this.browserIsIncapable;
                    return d[a] || (d[a] = new e(a,f)),
                    h(b) && (b = {
                        match: b
                    }),
                    i(b) || (b = [b]),
                    g(b, function(b) {
                        h(b) && (b = {
                            match: b
                        }),
                        d[a].addHandler(b)
                    }),
                    this
                },
                unregister: function(a, b) {
                    var c = this.queries[a];
                    return c && (b ? c.removeHandler(b) : (c.clear(),
                    delete this.queries[a])),
                    this
                }
            },
            b.exports = d
        }
        , {
            1: 1,
            4: 4
        }],
        3: [function(a, b, c) {
            function d(a) {
                this.options = a,
                !a.deferSetup && this.setup()
            }
            d.prototype = {
                constructor: d,
                setup: function() {
                    this.options.setup && this.options.setup(),
                    this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(),
                    this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(a) {
                    return this.options === a || this.options.match === a
                }
            },
            b.exports = d
        }
        , {}],
        4: [function(a, b, c) {
            function d(a, b) {
                var c = 0
                  , d = a.length;
                for (c; d > c && b(a[c], c) !== !1; c++)
                    ;
            }
            function e(a) {
                return "[object Array]" === Object.prototype.toString.apply(a)
            }
            function f(a) {
                return "function" == typeof a
            }
            b.exports = {
                isFunction: f,
                isArray: e,
                each: d
            }
        }
        , {}],
        5: [function(a, b, c) {
            var d = a(2);
            b.exports = new d
        }
        , {
            2: 2
        }]
    }, {}, [5])(5)
});
