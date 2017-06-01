
(function() {
    function aa(a) {
        throw a;
    }
    var j = void 0
      , o = !0
      , p = null
      , q = !1;
    function s() {
        return function() {}
    }
    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }
    function t(a) {
        return function() {
            return this[a]
        }
    }
    function ca(a) {
        return function() {
            return a
        }
    }
    var da, ea = [];
    function fa(a) {
        return function() {
            return ea[a].apply(this, arguments)
        }
    }
    function ga(a, b) {
        return ea[a] = b
    }
    var ha, x = ha = x || {
        version: "1.3.4"
    };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    ;
    x.D = x.D || {};
    x.D.$ = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    }
    ;
    x.$ = x.Ec = x.D.$;
    x.D.U = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        a.style.display = "none";
        return a
    }
    ;
    x.U = x.D.U;
    x.lang = x.lang || {};
    x.lang.ug = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    x.ug = x.lang.ug;
    x.D.Qj = function(a) {
        return x.lang.ug(a) ? document.getElementById(a) : a
    }
    ;
    x.Qj = x.D.Qj;
    x.D.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var d = a;
            d == p && (d = document);
            c = [];
            var d = d.getElementsByTagName("*"), e = d.length, f = RegExp("(^|\\s)" + b + "(\\s|$)"), g, i;
            for (i = g = 0; g < e; g++)
                f.test(d[g].className) && (c[i] = d[g],
                i++)
        }
        return c
    }
    ;
    x.getElementsByClassName = x.D.getElementsByClassName;
    x.D.contains = function(a, b) {
        var c = x.D.Qj
          , a = c(a)
          , b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    x.ea = x.ea || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.ea.la = x.la = document.documentMode || +RegExp.$1);
    var ia = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > x.ea.la ? (ia["for"] = "htmlFor",
    ia["class"] = "className") : (ia.htmlFor = "for",
    ia.className = "class");
    x.D.AG = ia;
    x.D.oF = function(a, b, c) {
        a = x.D.$(a);
        if (a === p)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = x.D.AG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    }
    ;
    x.oF = x.D.oF;
    x.D.pF = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c in b)
            x.D.oF(a, c, b[c]);
        return a
    }
    ;
    x.pF = x.D.pF;
    x.Sk = x.Sk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        x.Sk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    x.trim = x.Sk.trim;
    x.Sk.Ro = function(a, b) {
        var a = "" + a
          , c = Array.prototype.slice.call(arguments, 1)
          , d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    }
    ;
    x.Ro = x.Sk.Ro;
    x.D.Rb = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
            g = 0;
            for (e = c.length; g < e; ++g)
                if (c[g] == d[i]) {
                    c.splice(g, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    }
    ;
    x.Rb = x.D.Rb;
    x.D.Hx = function(a, b, c) {
        a = x.D.$(a);
        if (a === p)
            return a;
        var d;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    }
    ;
    x.Hx = x.D.Hx;
    x.D.show = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        a.style.display = "";
        return a
    }
    ;
    x.show = x.D.show;
    x.D.GD = function(a) {
        a = x.D.$(a);
        return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    x.D.Ta = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++)
            e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    }
    ;
    x.Ta = x.D.Ta;
    x.D.DB = x.D.DB || {};
    x.D.Kl = x.D.Kl || [];
    x.D.Kl.filter = function(a, b, c) {
        for (var d = 0, e = x.D.Kl, f; f = e[d]; d++)
            if (f = f[c])
                b = f(a, b);
        return b
    }
    ;
    x.Sk.oO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    }
    ;
    x.D.D_ = function(a) {
        x.D.$s(a, "expand") ? x.D.Rb(a, "expand") : x.D.Ta(a, "expand")
    }
    ;
    x.D.$s = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return q;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
        x.forEach(this, function(a) {
            for (var a = a.className, e = 0; e < b.length; e++)
                if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                    c = q;
                    return
                }
            c !== q && (c = o)
        });
        return c
    }
    ;
    x.D.tj = function(a, b) {
        var c = x.D
          , a = c.$(a);
        if (a === p)
            return a;
        var b = x.Sk.oO(b)
          , d = a.style[b];
        if (!d)
            var e = c.DB[b]
              , d = a.currentStyle || (x.ea.la ? a.style : getComputedStyle(a, p))
              , d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Kl)
            d = e.filter(b, d, "get");
        return d
    }
    ;
    x.tj = x.D.tj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ea.opera = +RegExp.$1);
    x.ea.jM = /webkit/i.test(navigator.userAgent);
    x.ea.kY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.ea.uE = "CSS1Compat" == document.compatMode;
    x.D.ha = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        var b = x.D.GD(a)
          , c = x.ea
          , d = x.D.tj;
        c.kY > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
            left: 0,
            top: 0
        }, f;
        if (a == (c.la && !c.uE ? b.body : b.documentElement))
            return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.la && !c.uE) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.jM > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);if (c.opera > 0 || c.jM > 0 && d(a, "position") == "absolute")
                e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body; ) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR")
                    e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ea.rg = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.ea.l1 = o);
    var ja = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ja) && !/chrome/i.test(ja) && (x.ea.HN = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.ea.eC = +RegExp.$1);
    x.jc = x.jc || {};
    x.jc.Fb = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)
            for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === q)
                    break
            }
        return a
    }
    ;
    x.Fb = x.jc.Fb;
    x.lang.ba = function() {
        return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
    }
    ;
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.it = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    x.lang.Ba = function(a) {
        this.ba = a || x.lang.ba();
        window[x.ba]._instances[this.ba] = this
    }
    ;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Ba.prototype.gi = fa(0);
    x.lang.Ba.prototype.toString = function() {
        return "[object " + (this.uQ || "Object") + "]"
    }
    ;
    x.lang.Zy = function(a, b) {
        this.type = a;
        this.returnValue = o;
        this.target = b || p;
        this.currentTarget = p
    }
    ;
    x.lang.Ba.prototype.addEventListener = function(a, b, c) {
        if (x.lang.it(b)) {
            !b.al && (b.al = {});
            !this.Ii && (this.Ii = {});
            var d = this.Ii, e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.Ax = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            typeof b.al[a] != "object" && (b.al[a] = {});
            e = e || x.lang.ba();
            b.al[a].Ax = e;
            d[a][e] = b
        }
    }
    ;
    x.lang.Ba.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (x.lang.it(b)) {
            if (!b.al || !b.al[a])
                return;
            b = b.al[a].Ax
        } else if (!x.lang.ug(b))
            return;
        !this.Ii && (this.Ii = {});
        var c = this.Ii;
        c[a] && c[a][b] && delete c[a][b]
    }
    ;
    x.lang.Ba.prototype.dispatchEvent = function(a, b) {
        x.lang.ug(a) && (a = new x.lang.Zy(a));
        !this.Ii && (this.Ii = {});
        var b = b || {}, c;
        for (c in b)
            a[c] = b[c];
        var d = this.Ii
          , e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        x.lang.it(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")
            for (c in d[e])
                d[e][c].apply(this, arguments);
        return a.returnValue
    }
    ;
    x.lang.ta = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f)
            e[d] = f[d];
        a.prototype.constructor = a;
        a.u_ = b.prototype;
        if ("string" == typeof c)
            e.uQ = c
    }
    ;
    x.ta = x.lang.ta;
    x.lang.Mc = function(a) {
        return window[x.ba]._instances[a] || p
    }
    ;
    x.platform = x.platform || {};
    x.platform.cM = /macintosh/i.test(navigator.userAgent);
    x.platform.W2 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.kM = /windows/i.test(navigator.userAgent);
    x.platform.sY = /x11/i.test(navigator.userAgent);
    x.platform.Gm = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (x.platform.OJ = x.OJ = RegExp.$1);
    x.platform.mY = /ipad/i.test(navigator.userAgent);
    x.platform.qE = /iphone/i.test(navigator.userAgent);
    function la(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    x.lang.Rw = function(a) {
        var b = window[x.ba];
        b.FS && delete b.FS[a]
    }
    ;
    x.event = {};
    x.M = x.event.M = function(a, b, c) {
        if (!(a = x.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    }
    ;
    x.cd = x.event.cd = function(a, b, c) {
        if (!(a = x.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    }
    ;
    x.D.$s = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return q;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return q
        }
        return c > -1
    }
    ;
    x.SK = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
            this.VK = this.zk ? "touchstart" : "mousedown",
            this.oD = this.zk ? "touchmove" : "mousemove",
            this.nD = this.zk ? "touchend" : "mouseup",
            this.rh = q,
            this.bu = this.au = 0,
            this.element.addEventListener(this.VK, this, q),
            ha.M(this.element, "mousedown", s()),
            this.handleEvent(p))
        }
        a.prototype = {
            zk: "ontouchstart"in window || "createTouch"in document,
            start: function(a) {
                ma(a);
                this.rh = q;
                this.au = this.zk ? a.touches[0].clientX : a.clientX;
                this.bu = this.zk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.oD, this, q);
                this.element.addEventListener(this.nD, this, q)
            },
            move: function(a) {
                na(a);
                var c = this.zk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.zk ? a.touches[0].clientX : a.clientX) - this.au) || 10 < Math.abs(c - this.bu))
                    this.rh = o
            },
            end: function(a) {
                na(a);
                this.rh || (a = document.createEvent("Event"),
                a.initEvent("tap", q, o),
                this.element.dispatchEvent(a));
                this.element.removeEventListener(this.oD, this, q);
                this.element.removeEventListener(this.nD, this, q)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                    case this.VK:
                        this.start(a);
                        break;
                    case this.oD:
                        this.move(a);
                        break;
                    case this.nD:
                        this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.yJ = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Br = [];
    z.Se = function(a) {
        this.Br.push(a)
    }
    ;
    z.rr = [];
    z.Sm = function(a) {
        this.rr.push(a)
    }
    ;
    z.TU = z.apiLoad || s();
    var pa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var qa = window.BMap_loadScriptTime
      , ra = (new Date).getTime()
      , sa = p
      , ta = o
      , ua = p
      , va = 5042
      , wa = 5002
      , xa = 5003
      , ya = "load_mapclick"
      , za = 5038
      , Aa = 5041
      , Ba = 5047
      , Ca = 5036
      , Da = 5039
      , Fa = 5037
      , Ga = 5040
      , Ha = 5011
      , Ia = 7E3;
    var Ja = 0;
    function Ka(a, b) {
        if (a = x.$(a)) {
            var c = this;
            x.lang.Ba.call(c);
            b = b || {};
            c.K = {
                kC: 200,
                Xb: o,
                Zw: q,
                gD: o,
                Oo: o,
                Po: b.enableWheelZoom || q,
                QK: o,
                iD: o,
                Es: o,
                Xw: o,
                lm: o,
                Mo: b.enable3DBuilding || q,
                Ic: 25,
                m0: 240,
                HU: 450,
                Wb: F.Wb,
                Ed: F.Ed,
                Kx: !!b.Kx,
                fc: Math.round(b.minZoom) || 1,
                Zb: Math.round(b.maxZoom) || 19,
                Hb: b.mapType || La,
                O3: q,
                MK: b.drawer || Ja,
                Yw: o,
                Vw: 500,
                uW: b.enableHighResolution !== q,
                nj: b.enableMapClick !== q,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                RF: 99,
                te: b.mapStyle || p,
                CY: b.logoControl === q ? q : o,
                aV: [],
                ww: b.beforeClickIcon || p
            };
            c.K.te && (this.bY(c.K.te.controls),
            this.XL(c.K.te.geotableId));
            c.K.te && c.K.te.styleId && c.G2(c.K.te.styleId);
            c.K.dm = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.K.Xw = b.enableAutoResize);
            b.enableStreetEntrance === q && (c.K.lm = b.enableStreetEntrance);
            b.enableDeepZoom === q && (c.K.QK = b.enableDeepZoom);
            var d = c.K.aV;
            if (G())
                for (var e = 0, f = d.length; e < f; e++)
                    if (x.ea[d[e]]) {
                        c.K.devicePixelRatio = 1;
                        break
                    }
            d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e)
                c.K.RF = 99;
            c.Ua = a;
            c.wB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.ua());
            b.size && this.xe(b.size);
            d = c.yb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ue = c.platform.firstChild;
            c.ue.style.width = c.width + "px";
            c.ue.style.height = c.height + "px";
            c.Td = {};
            c.ef = new H(0,0);
            c.lc = new H(0,0);
            c.Ka = 3;
            c.Cc = 0;
            c.CC = p;
            c.BC = p;
            c.Vb = "";
            c.Cw = "";
            c.Oh = {};
            c.Oh.custom = {};
            c.Sa = 0;
            b.useWebGL === q && Ma(q);
            c.P = new Na(a,{
                Of: "api",
                KS: o
            });
            c.P.U();
            c.P.tF(c);
            b = b || {};
            d = c.Hb = c.K.Hb;
            c.we = d.bp();
            d === Oa && Pa(wa);
            d === Ra && Pa(xa);
            d = c.K;
            d.IO = Math.round(b.minZoom);
            d.HO = Math.round(b.maxZoom);
            c.Su();
            c.R = {
                Jc: q,
                kc: 0,
                mt: 0,
                oM: 0,
                a3: 0,
                bC: q,
                bF: -1,
                Ne: []
            };
            c.platform.style.cursor = c.K.Wb;
            for (e = 0; e < z.Br.length; e++)
                z.Br[e](c);
            c.R.bF = e;
            c.ca();
            I.load("map", function() {
                c.wb()
            });
            c.K.nj && (setTimeout(function() {
                Pa(ya)
            }, 1E3),
            I.load("mapclick", function() {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ba] = new Sa(c)
            }, o));
            Ta() && I.load("oppc", function() {
                c.pz()
            });
            G() && I.load("opmb", function() {
                c.pz()
            });
            a = p;
            c.LB = []
        }
    }
    x.lang.ta(Ka, x.lang.Ba, "Map");
    x.extend(Ka.prototype, {
        ua: function() {
            var a = K("div")
              , b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = K("div", {
                "class": "BMap_mask"
            })
              , c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        wB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ua(a).position && (b.position = "relative",
            b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ca: function() {
            var a = this;
            a.Ur = function() {
                var b = a.yb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new L(a.width,a.height)
                      , d = new N("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.ik((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ue.style.width = (a.width = b.width) + "px";
                    a.ue.style.height = (a.height = b.height) + "px";
                    c = new N("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            }
            ;
            a.K.Xw && (a.R.Yr = setInterval(a.Ur, 80))
        },
        ik: function(a, b, c, d) {
            var e = this.oa().Bc(this.fa())
              , f = this.we
              , g = o;
            c && H.bM(c) && (this.ef = new H(c.lng,c.lat),
            g = q);
            if (c = c && d ? f.Jm(c, this.Vb) : this.lc)
                if (this.lc = new H(c.lng + a * e,c.lat - b * e),
                (a = f.qh(this.lc, this.Vb)) && g)
                    this.ef = a
        },
        Fg: function(a, b) {
            if (Va(a) && (this.Su(),
            this.dispatchEvent(new N("onzoomstart")),
            a = this.Vn(a).zoom,
            a !== this.Ka)) {
                this.Cc = this.Ka;
                this.Ka = a;
                var c;
                b ? c = b : this.jh() && (c = this.jh().ha());
                c && (c = this.ac(c, this.Cc),
                this.ik(this.width / 2 - c.x, this.height / 2 - c.y, this.ub(c, this.Cc), o));
                this.dispatchEvent(new N("onzoomstartcode"))
            }
        },
        Oc: function(a) {
            this.Fg(a)
        },
        VF: function(a) {
            this.Fg(this.Ka + 1, a)
        },
        WF: function(a) {
            this.Fg(this.Ka - 1, a)
        },
        ui: function(a) {
            a instanceof H && (this.lc = this.we.Jm(a, this.Vb),
            this.ef = H.bM(a) ? new H(a.lng,a.lat) : this.we.qh(this.lc, this.Vb))
        },
        yg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.ik(-a, -b)
        },
        lw: function(a) {
            a && Wa(a.Ce) && (a.Ce(this),
            this.dispatchEvent(new N("onaddcontrol",a)))
        },
        vN: function(a) {
            a && Wa(a.remove) && (a.remove(),
            this.dispatchEvent(new N("onremovecontrol",a)))
        },
        uo: function(a) {
            a && Wa(a.qa) && (a.qa(this),
            this.dispatchEvent(new N("onaddcontextmenu",a)))
        },
        zp: function(a) {
            a && Wa(a.remove) && (this.dispatchEvent(new N("onremovecontextmenu",a)),
            a.remove())
        },
        Ia: function(a) {
            a && Wa(a.Ce) && (a.Ce(this),
            this.dispatchEvent(new N("onaddoverlay",a)))
        },
        Sb: function(a) {
            a && Wa(a.remove) && (a.remove(),
            this.dispatchEvent(new N("onremoveoverlay",a)))
        },
        hK: function() {
            this.dispatchEvent(new N("onclearoverlays"))
        },
        Yg: function(a) {
            a && this.dispatchEvent(new N("onaddtilelayer",a))
        },
        zh: function(a) {
            a && this.dispatchEvent(new N("onremovetilelayer",a))
        },
        Bg: function(a) {
            if (this.Hb !== a) {
                var b = new N("onsetmaptype");
                b.D3 = this.Hb;
                this.Hb = this.K.Hb = a;
                this.we = this.Hb.bp();
                this.ik(0, 0, this.Ja(), o);
                this.Su();
                var c = this.Vn(this.fa()).zoom;
                this.Fg(c);
                this.dispatchEvent(b);
                b = new N("onmaptypechange");
                b.Ka = c;
                b.Hb = a;
                this.dispatchEvent(b);
                (a === Xa || a === Ra) && Pa(xa)
            }
        },
        Vf: function(a) {
            var b = this;
            if (a instanceof H)
                b.ui(a, {
                    noAnimation: o
                });
            else if (Za(a))
                if (b.Hb === Oa) {
                    var c = F.gC[a];
                    c && (pt = c.m,
                    b.Vf(pt))
                } else {
                    var d = this.GH();
                    d.wF(function(c) {
                        0 === d.um() && 2 === d.Ea.result.type && (b.Vf(c.xk(0).point),
                        Oa.tk(a) && b.qF(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
        },
        Cd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            ua = G() ? $a.Fi.ok(z.yJ ? 102 : 101) : $a.Fi.ok(1);
            ua.cu();
            ua.kz = +new Date;
            ua.pc("script_loaded", ra - qa);
            ua.pc("centerAndZoom");
            z.Ij("cus.fire", "time", {
                z_loadscripttime: ra - qa
            });
            var c = this;
            if (Za(a))
                if (c.Hb === Oa) {
                    var d = F.gC[a];
                    d && (pt = d.m,
                    c.Cd(pt, b))
                } else {
                    var e = c.GH();
                    e.wF(function(d) {
                        if (0 === e.um() && (2 === e.Ea.result.type || 11 === e.Ea.result.type)) {
                            var d = d.xk(0).point
                              , f = b || P.bx(e.Ea.content.level, c);
                            c.Cd(d, f);
                            Oa.tk(a) && c.qF(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof H && b) {
                b = c.Vn(b).zoom;
                c.Cc = c.Ka || b;
                c.Ka = b;
                d = c.ef;
                c.ef = new H(a.lng,a.lat);
                c.lc = c.we.Jm(c.ef, c.Vb);
                c.CC = c.CC || c.Ka;
                c.BC = c.BC || c.ef;
                var f = new N("onload")
                  , g = new N("onloadcode");
                f.point = new H(a.lng,a.lat);
                f.pixel = c.ac(c.ef, c.Ka);
                f.zoom = b;
                c.loaded || (c.loaded = o,
                c.dispatchEvent(f),
                sa || (sa = ab()));
                c.dispatchEvent(g);
                f = new N("onmoveend");
                f.iH = "centerAndZoom";
                d.mb(c.ef) || c.dispatchEvent(f);
                c.dispatchEvent(new N("onmoveend"));
                c.Cc !== c.Ka && (d = new N("onzoomend"),
                d.iH = "centerAndZoom",
                c.dispatchEvent(d));
                c.K.Mo && c.Mo()
            }
        },
        GH: function() {
            this.R.vM || (this.R.vM = new bb(1));
            return this.R.vM
        },
        reset: function() {
            this.Cd(this.BC, this.CC, o)
        },
        enableDragging: function() {
            this.K.Xb = o
        },
        disableDragging: function() {
            this.K.Xb = q
        },
        enableInertialDragging: function() {
            this.K.Yw = o
        },
        disableInertialDragging: function() {
            this.K.Yw = q
        },
        enableScrollWheelZoom: function() {
            this.K.Po = o
        },
        disableScrollWheelZoom: function() {
            this.K.Po = q
        },
        enableContinuousZoom: function() {
            this.K.Oo = o
        },
        disableContinuousZoom: function() {
            this.K.Oo = q
        },
        enableDoubleClickZoom: function() {
            this.K.gD = o
        },
        disableDoubleClickZoom: function() {
            this.K.gD = q
        },
        enableKeyboard: function() {
            this.K.Zw = o
        },
        disableKeyboard: function() {
            this.K.Zw = q
        },
        enablePinchToZoom: function() {
            this.K.Es = o
        },
        disablePinchToZoom: function() {
            this.K.Es = q
        },
        enableAutoResize: function() {
            this.K.Xw = o;
            this.Ur();
            this.R.Yr || (this.R.Yr = setInterval(this.Ur, 80))
        },
        disableAutoResize: function() {
            this.K.Xw = q;
            this.R.Yr && (clearInterval(this.R.Yr),
            this.R.Yr = p)
        },
        Mo: function() {
            this.K.Mo = o;
            this.Kn || (this.Kn = new db({
                ZK: o
            }),
            this.Yg(this.Kn))
        },
        eW: function() {
            this.K.Mo = q;
            this.Kn && (this.zh(this.Kn),
            this.Kn = p,
            delete this.Kn)
        },
        yb: function() {
            return this.ls && this.ls instanceof L ? new L(this.ls.width,this.ls.height) : new L(this.Ua.clientWidth,this.Ua.clientHeight)
        },
        xe: function(a) {
            a && a instanceof L ? (this.ls = a,
            this.Ua.style.width = a.width + "px",
            this.Ua.style.height = a.height + "px") : this.ls = p
        },
        Ja: t("ef"),
        fa: t("Ka"),
        vV: function() {
            this.Ur()
        },
        Vn: function(a) {
            var b = this.K.fc
              , c = this.K.Zb
              , d = q
              , a = Math.round(a);
            a < b && (d = o,
            a = b);
            a > c && (d = o,
            a = c);
            return {
                zoom: a,
                pD: d
            }
        },
        Na: t("Ua"),
        ac: function(a, b) {
            b = b || this.fa();
            return this.we.ac(a, b, this.lc, this.yb(), this.Vb)
        },
        ub: function(a, b) {
            b = b || this.fa();
            return this.we.ub(a, b, this.lc, this.yb(), this.Vb)
        },
        Re: function(a, b) {
            if (a) {
                var c = this.ac(new H(a.lng,a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        kN: function(a, b) {
            if (a) {
                var c = new Q(a.x,a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.ub(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Vb;
            this.Hb === Oa && c && eb.nK(a, this, b)
        },
        y3: function(a, b) {
            var c = map.Vb;
            this.Hb === Oa && c && eb.mK(a, this, b)
        },
        z3: function(a, b) {
            var c = this
              , d = map.Vb;
            c.Hb === Oa && d && eb.nK(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        w3: function(a, b) {
            var c = map.Vb;
            this.Hb === Oa && c && (a.x += this.offsetX,
            a.y += this.offsetY,
            eb.mK(a, this, b))
        },
        Gd: function(a) {
            if (!this.Jx())
                return new fb;
            var b = a || {}
              , a = b.margins || [0, 0, 0, 0]
              , c = b.zoom || p
              , b = this.ub({
                x: a[3],
                y: this.height - a[2]
            }, c)
              , a = this.ub({
                x: this.width - a[1],
                y: a[0]
            }, c);
            return new fb(b,a)
        },
        Jx: function() {
            return !!this.loaded
        },
        MR: function(a, b) {
            for (var c = this.oa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.Xo(), i = c = c.qm(); i >= g; i--) {
                var k = this.oa().Bc(i);
                if (a.KF().lng / k < this.width - f && a.KF().lat / k < this.height - d)
                    break
            }
            i += e;
            i < g && (i = g);
            i > c && (i = c);
            return i
        },
        Zs: function(a, b) {
            var c = {
                center: this.Ja(),
                zoom: this.fa()
            };
            if (!a || !a instanceof fb && 0 === a.length || a instanceof fb && a.yj())
                return c;
            var d = [];
            a instanceof fb ? (d.push(a.kf()),
            d.push(a.re())) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)
                e.push(this.we.Jm(d[f], this.Vb));
            d = new fb;
            for (f = e.length - 1; 0 <= f; f--)
                d.extend(e[f]);
            if (d.yj())
                return c;
            c = d.Ja();
            e = this.MR(d, b);
            b.margins && (d = b.margins,
            f = (d[1] - d[3]) / 2,
            d = (d[0] - d[2]) / 2,
            g = this.oa().Bc(e),
            b.offset && (f = b.offset.width,
            d = b.offset.height),
            c.lng += g * f,
            c.lat += g * d);
            c = this.we.qh(c, this.Vb);
            return {
                center: c,
                zoom: e
            }
        },
        Bh: function(a, b) {
            var c;
            c = a && a.center ? a : this.Zs(a, b);
            var b = b || {}
              , d = b.delay || 200;
            if (c.zoom === this.Ka && b.enableAnimation !== q) {
                var e = this;
                setTimeout(function() {
                    e.ui(c.center, {
                        duration: 210
                    })
                }, d)
            } else
                this.Cd(c.center, c.zoom)
        },
        Qf: t("Td"),
        jh: function() {
            return this.R.nb && this.R.nb.Va() ? this.R.nb : p
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.mb(b))
                    return 0;
                var c = 0
                  , c = R.Vo(a, b);
                if (c === p || c === j)
                    c = 0;
                return c
            }
        },
        tx: function() {
            var a = []
              , b = this.va
              , c = this.ze;
            if (b)
                for (var d in b)
                    b[d]instanceof gb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++)
                    a.push(c[d])
            }
            return a
        },
        oa: t("Hb"),
        pz: function() {
            for (var a = this.R.bF; a < z.Br.length; a++)
                z.Br[a](this);
            this.R.bF = a
        },
        qF: function(a) {
            this.Vb = Oa.tk(a);
            this.Cw = Oa.jL(this.Vb);
            this.Hb === Oa && this.we instanceof hb && (this.we.gj = this.Vb)
        },
        setDefaultCursor: function(a) {
            this.K.Wb = a;
            this.platform && (this.platform.style.cursor = this.K.Wb)
        },
        getDefaultCursor: function() {
            return this.K.Wb
        },
        setDraggingCursor: function(a) {
            this.K.Ed = a
        },
        getDraggingCursor: function() {
            return this.K.Ed
        },
        dE: function() {
            return this.K.uW && 1.5 <= this.K.devicePixelRatio
        },
        nw: function(a, b) {
            b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof ib && (this.Oh[b][a.ba] = a,
            a.qa(this));
            var c = this;
            I.load("hotspot", function() {
                c.pz()
            }, o)
        },
        oZ: function(a, b) {
            b || (b = "custom");
            this.Oh[b][a.ba] && delete this.Oh[b][a.ba]
        },
        bm: function(a) {
            a || (a = "custom");
            this.Oh[a] = {}
        },
        Su: function() {
            var a = this.Hb.Xo()
              , b = this.Hb.qm()
              , c = this.K;
            c.fc = c.IO || a;
            c.Zb = c.HO || b;
            c.fc < a && (c.fc = a);
            c.Zb > b && (c.Zb = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.K.Zb && (a = this.K.Zb);
            this.K.IO = a;
            this.pJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.K.fc && (a = this.K.fc);
            this.K.HO = a;
            this.pJ()
        },
        pJ: function() {
            this.Su();
            var a = this.K;
            this.Ka < a.fc ? this.Oc(a.fc) : this.Ka > a.Zb && this.Oc(a.Zb);
            var b = new N("onzoomspanchange");
            b.fc = a.fc;
            b.Zb = a.Zb;
            this.dispatchEvent(b)
        },
        I2: t("LB"),
        getKey: function() {
            return pa
        },
        Nt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
            b.K.nj = q;
            z.Ij("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.r_(a.styleJson));
                G() && x.ea.HN ? setTimeout(function() {
                    b.K.te = a;
                    b.dispatchEvent(new N("onsetcustomstyles",a))
                }, 50) : (this.K.te = a,
                this.dispatchEvent(new N("onsetcustomstyles",a)),
                this.XL(b.K.te.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = o);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                Pa(5050, c);
                a.style && (c = b.K.dm[a.style] ? b.K.dm[a.style].backColor : b.K.dm.normal.backColor) && (this.Na().style.backgroundColor = c)
            }
        },
        bY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new jb,
                scaleControl: new kb,
                overviewMapControl: new lb,
                mapTypeControl: new mb
            });
            var b = this, c;
            for (c in this.controls)
                b.vN(b.controls[c]);
            a = a || [];
            x.jc.Fb(a, function(a) {
                b.lw(b.controls[a])
            })
        },
        XL: function(a) {
            a ? this.js && this.js.xf === a || (this.zh(this.js),
            this.js = new nb({
                geotableId: a
            }),
            this.Yg(this.js)) : this.zh(this.js)
        },
        Ub: function() {
            var a = this.fa() >= this.K.RF && this.oa() === La && 18 >= this.fa()
              , b = q;
            try {
                document.createElement("canvas").getContext("2d"),
                b = o
            } catch (c) {
                b = q
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.$g,
                code: this.Zr
            }
        },
        rm: function() {
            this.P.$n();
            return this.P
        },
        setPanorama: function(a) {
            this.P = a;
            this.P.tF(this)
        },
        r_: function(a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                x.extend(f, g);
                var g = [], i;
                for (i in b)
                    f[i] && ("elementType" === i ? g.push(b[i] + ":" + c[f[i]]) : g.push(b[i] + ":" + f[i]));
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        }
    });
    function Pa(a, b) {
        if (a) {
            var b = b || {}, c = "", d;
            for (d in b)
                c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                a && (ob = o,
                setTimeout(function() {
                    pb.src = z.Hc + "images/blank.gif?" + a.src
                }, 50))
            }
              , f = function() {
                var a = qb.shift();
                a && e(a)
            }
            ;
            d = (1E8 * Math.random()).toFixed(0);
            ob ? qb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) : e({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            rb || (x.M(pb, "load", function() {
                ob = q;
                f()
            }),
            x.M(pb, "error", function() {
                ob = q;
                f()
            }),
            rb = o)
        }
    }
    var ob, rb, qb = [], pb = new Image;
    Pa(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    z.RL = {
        TILE_BASE_URLS: ["ss0.baidu.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "ss0.baidu.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "ss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["ss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "ss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "sp2.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["sp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "sp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "sp3.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "sp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "sp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "sp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["ss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "ss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "sp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["ss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "ss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "ss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["ss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "sp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "ss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    z.XX = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    z.U_ = {
        "0": {
            proto: "http://",
            domain: z.XX
        },
        1: {
            proto: "https://",
            domain: z.RL
        },
        2: {
            proto: "https://",
            domain: z.RL
        }
    };
    z.ou = window.HOST_TYPE || "0";
    z.url = z.U_[z.ou];
    z.qp = z.url.proto + z.url.domain.baidumap + "/";
    z.Hc = z.url.proto + ("2" == z.ou ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.ma = z.url.proto + ("2" == z.ou ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
    z.ej = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
    z.tg = function(a, b) {
        var c, d, b = b || "";
        switch (a) {
        case "main_domain_nocdn":
            c = z.Hc + b;
            break;
        case "main_domain_cdn":
            c = z.ma + b;
            break;
        default:
            d = z.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(d) ? (c = [],
            x.jc.Fb(d, function(a, d) {
                c[d] = z.url.proto + a + "/" + b
            })) : c = z.url.proto + z.url.domain[a] + "/" + b
        }
        return c
    }
    ;
    function sb(a) {
        var b = {
            duration: 1E3,
            Ic: 30,
            Io: 0,
            hc: tb.sM,
            yt: s()
        };
        this.Zf = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.k = b;
        if (Va(b.Io)) {
            var d = this;
            setTimeout(function() {
                d.start()
            }, b.Io)
        } else
            b.Io != ub && this.start()
    }
    var ub = "INFINITE";
    sb.prototype.start = function() {
        this.Lu = ab();
        this.Wz = this.Lu + this.k.duration;
        vb(this)
    }
    ;
    sb.prototype.add = function(a) {
        this.Zf.push(a)
    }
    ;
    function vb(a) {
        var b = ab();
        b >= a.Wz ? (Wa(a.k.ua) && a.k.ua(a.k.hc(1)),
        Wa(a.k.finish) && a.k.finish(),
        0 < a.Zf.length && (b = a.Zf[0],
        b.Zf = [].concat(a.Zf.slice(1)),
        b.start())) : (a.uy = a.k.hc((b - a.Lu) / a.k.duration),
        Wa(a.k.ua) && a.k.ua(a.uy),
        a.FF || (a.Rr = setTimeout(function() {
            vb(a)
        }, 1E3 / a.k.Ic)))
    }
    sb.prototype.stop = function(a) {
        this.FF = o;
        for (var b = 0; b < this.Zf.length; b++)
            this.Zf[b].stop(),
            this.Zf[b] = p;
        this.Zf.length = 0;
        this.Rr && (clearTimeout(this.Rr),
        this.Rr = p);
        this.k.yt(this.uy);
        a && (this.Wz = this.Lu,
        vb(this))
    }
    ;
    sb.prototype.cancel = fa(1);
    var tb = {
        sM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        bD: function(a) {
            return a * a
        },
        aD: function(a) {
            return Math.pow(a, 3)
        },
        Cs: function(a) {
            return -(a * (a - 2))
        },
        OK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        NK: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        K1: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        L1: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    tb["ease-in"] = tb.bD;
    tb["ease-out"] = tb.Cs;
    var F = {
        ZF: 34,
        $F: 21,
        aG: new L(21,32),
        ZO: new L(10,32),
        YO: new L(24,36),
        XO: new L(12,36),
        XF: new L(13,1),
        pa: z.ma + "images/",
        R2: "http://api0.map.bdimg.com/images/",
        YF: z.ma + "images/markers_new.png",
        VO: 24,
        WO: 73,
        gC: {
            "\u5317\u4eac": {
                iy: "bj",
                m: new H(116.403874,39.914889)
            },
            "\u4e0a\u6d77": {
                iy: "sh",
                m: new H(121.487899,31.249162)
            },
            "\u6df1\u5733": {
                iy: "sz",
                m: new H(114.025974,22.546054)
            },
            "\u5e7f\u5dde": {
                iy: "gz",
                m: new H(113.30765,23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    x.ea.rg ? (x.extend(F, {
        CK: "url(" + F.pa + "ruler.cur),crosshair",
        Wb: "-moz-grab",
        Ed: "-moz-grabbing"
    }),
    x.platform.kM && (F.fontFamily = "arial,simsun,sans-serif")) : x.ea.eC || x.ea.HN ? x.extend(F, {
        CK: "url(" + F.pa + "ruler.cur) 2 6,crosshair",
        Wb: "url(" + F.pa + "openhand.cur) 8 8,default",
        Ed: "url(" + F.pa + "closedhand.cur) 8 8,move"
    }) : x.extend(F, {
        CK: "url(" + F.pa + "ruler.cur),crosshair",
        Wb: "url(" + F.pa + "openhand.cur),default",
        Ed: "url(" + F.pa + "closedhand.cur),move"
    });
    function wb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }
    function xb(a) {
        0 < x.ea.la ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function yb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function zb(a, b) {
        x.D.Hx(a, "beforeEnd", b);
        return a.lastChild
    }
    function Ab(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent; )
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }
    function ma(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }
    function Bb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = q;
        return q
    }
    function na(a) {
        ma(a);
        return Bb(a)
    }
    function Cb() {
        var a = document.documentElement
          , b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Eb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Fb(a, b) {
        var c = [], b = b || function(a) {
            return a
        }
        , d;
        for (d in a)
            c.push(d + "=" + b(a[d]));
        return c.join("&")
    }
    function K(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return x.D.pF(d, b || {})
    }
    function Ua(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }
    function Wa(a) {
        return "function" === typeof a
    }
    function Va(a) {
        return "number" === typeof a
    }
    function Za(a) {
        return "string" == typeof a
    }
    function Gb(a) {
        return "undefined" != typeof a
    }
    function Hb(a) {
        return "object" == typeof a
    }
    var Ib = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Jb(a) {
        var b = "", c, d, e = "", f, g = "", i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Ib.indexOf(a.charAt(i++)),
            d = Ib.indexOf(a.charAt(i++)),
            f = Ib.indexOf(a.charAt(i++)),
            g = Ib.indexOf(a.charAt(i++)),
            c = c << 2 | d >> 4,
            d = (d & 15) << 4 | f >> 2,
            e = (f & 3) << 6 | g,
            b += String.fromCharCode(c),
            64 != f && (b += String.fromCharCode(d)),
            64 != g && (b += String.fromCharCode(e));
        while (i < a.length);return b
    }
    var N = x.lang.Zy;
    function G() {
        return !(!x.platform.qE && !x.platform.mY && !x.platform.Gm)
    }
    function Ta() {
        return !(!x.platform.kM && !x.platform.cM && !x.platform.sY)
    }
    function ab() {
        return (new Date).getTime()
    }
    function Kb() {
        var a = document.body.appendChild(K("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return q;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : o;
        a.parentNode.removeChild(a);
        return b
    }
    function Lb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Mb() {
        return !!K("canvas").getContext
    }
    function Nb(a) {
        return a * Math.PI / 180
    }
    z.BY = function() {
        var a = o
          , b = o
          , c = o
          , d = o
          , e = 0
          , f = 0
          , g = 0
          , i = 0;
        return {
            FQ: function() {
                e += 1;
                a && (a = q,
                setTimeout(function() {
                    Pa(5054, {
                        pic: e
                    });
                    a = o;
                    e = 0
                }, 1E4))
            },
            y0: function() {
                f += 1;
                b && (b = q,
                setTimeout(function() {
                    Pa(5055, {
                        move: f
                    });
                    b = o;
                    f = 0
                }, 1E4))
            },
            A0: function() {
                g += 1;
                c && (c = q,
                setTimeout(function() {
                    Pa(5056, {
                        zoom: g
                    });
                    c = o;
                    g = 0
                }, 1E4))
            },
            z0: function(a) {
                i += a;
                d && (d = q,
                setTimeout(function() {
                    Pa(5057, {
                        tile: i
                    });
                    d = o;
                    i = 0
                }, 5E3))
            }
        }
    }();
    var $a;
    (function() {
        function a(a) {
            this.UU = a;
            this.timing = {};
            this.start = +new Date
        }
        function b(a, b) {
            if (a.length === +a.length)
                for (var c = 0, d = a.length; c < d && b.call(j, c, a[c], a) !== q; c++)
                    ;
            else
                for (c in a)
                    if (a.hasOwnProperty(c) && b.call(j, c, a[c], a) === q)
                        break
        }
        var c = [], d = {
            push: function(a) {
                c.push(a);
                if (window.localStorage && window.JSON)
                    try {
                        localStorage.setItem("WPO_NR", JSON.stringify(c))
                    } catch (b) {}
            },
            get: function(a) {
                var b = [];
                if (window.localStorage)
                    try {
                        a && localStorage.removeItem("WPO_NR")
                    } catch (d) {}
                b = c;
                a && (c = []);
                return b
            }
        }, e, f, g, i, k = {};
        (!window.localStorage || !window.JSON) && document.attachEvent && window.attachEvent("onbeforeunload", function() {
            l.send()
        });
        var l = {
            send: function(a) {
                var c = [], e = [], f = a || d.get(o), g;
                0 < f.length && (b(f, function(d, e) {
                    var f = [];
                    b(e.timing, function(a, b) {
                        f.push('"' + a + '":' + b)
                    });
                    c.push('{"t":{' + f.join(",") + '},"a":' + e.UU + "}");
                    !g && (a && e.start) && (g = e.start)
                }),
                b(k, function(a, b) {
                    e.push(a + "=" + b)
                }),
                e.push("d=[" + c.join(",") + "]"),
                g ? e.push("_st=" + g) : e.push("_t=" + +new Date),
                f = new Image,
                f.src = "http://static.tieba.baidu.com/tb/pms/img/st.gif?" + e.join("&"),
                window["___pms_img_" + 1 * new Date] = f)
            }
        };
        a.prototype = {
            pc: function(a, b) {
                this.timing[a] = 0 <= b ? b : new Date - this.start
            },
            cu: function() {
                this.start = +new Date
            },
            xO: function() {
                this.pc("tt")
            },
            Oy: function() {
                this.pc("vt")
            },
            Xm: function() {
                f && (d.push(this),
                d.get().length >= g && l.send())
            },
            error: s()
        };
        $a = {
            Fi: {
                iE: function(a) {
                    var b = navigator.x1 || navigator.l3 || navigator.B4 || {
                        type: 0
                    };
                    f = Math.random() <= (a.an || 0.01);
                    g = a.max || 5;
                    i = a.k3 || b.type;
                    k = {
                        p: a.kZ,
                        mnt: i,
                        b: 50
                    };
                    window.localStorage && (window.JSON && window.addEventListener) && (e = d.get(o),
                    window.addEventListener("load", function() {
                        l.send(e)
                    }, q))
                },
                ok: function(b) {
                    return new a(b)
                }
            }
        }
    })();
    $a.Fi.iE({
        kZ: 18,
        an: 0.1,
        max: 1
    });
    z.dq = {
        mG: "#83a1ff",
        gq: "#808080"
    };
    function Ob(a, b, c) {
        b.Mm || (b.Mm = [],
        b.handle = {});
        b.Mm.push({
            filter: c,
            mm: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        }
        );
        b.handle.click || (b.addEventListener("click", function(a) {
            for (var c = a.target || a.srcElement; c != b; ) {
                Pb(b.Mm, function(b, g) {
                    RegExp(g.filter).test(c.getAttribute("filter")) && g.mm.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, q),
        b.handle.click = o)
    }
    function Pb(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            b(c, a[c])
    }
    "2" !== z.ou && (function(a, b, c) {
        (function(a, b, c) {
            function g(a) {
                if (!a.Ho) {
                    for (var c = o, d = [], f = a.sZ, i = 0; f && i < f.length; i++) {
                        var k = f[i]
                          , l = oa[k] = oa[k] || {};
                        if (l.Ho || l == a)
                            d.push(l.Mc);
                        else {
                            c = q;
                            if (!l.YV && (k = (ka.get("alias") || {})[k] || k + ".js",
                            !J[k])) {
                                J[k] = o;
                                var m = b.createElement("script")
                                  , n = b.getElementsByTagName("script")[0];
                                m.async = o;
                                m.src = k;
                                n.parentNode.insertBefore(m, n)
                            }
                            l.Py = l.Py || {};
                            l.Py[a.name] = a
                        }
                    }
                    if (c) {
                        a.Ho = o;
                        a.uK && (a.Mc = a.uK.apply(a, d));
                        for (var u in a.Py)
                            g(a.Py[u])
                    }
                }
            }
            function i(a) {
                return (a || new Date) - B
            }
            function k(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = O);
                    try {
                        a == O ? (M[b] = M[b] || [],
                        M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (d) {}
                }
            }
            function l(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                    b = a,
                    a = O);
                    try {
                        if (a == O) {
                            var d = M[b];
                            if (d)
                                for (var e = d.length; e--; )
                                    d[e] === c && d.splice(e, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (f) {}
                }
            }
            function m(a) {
                var b = M[a]
                  , c = 0;
                if (b) {
                    for (var d = [], e = arguments, f = 1; f < e.length; f++)
                        d.push(e[f]);
                    for (f = b.length; f--; )
                        b[f].apply(this, d) && c++;
                    return c
                }
            }
            function n(a, b) {
                if (a && b) {
                    var c = new Image(1,1), d = [], e = "img_" + +new Date, f;
                    for (f in b)
                        b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
                    O[e] = c;
                    c.onload = c.onerror = function() {
                        O[e] = c = c.onload = c.onerror = p;
                        delete O[e]
                    }
                    ;
                    c.src = a + "?" + d.join("&")
                }
            }
            function u() {
                var a = arguments
                  , b = a[0];
                if (this.tK || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++)
                        c.push(a[d]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.TJ.push(a)
            }
            function v(a, b) {
                var c = {}, d;
                for (d in a)
                    a.hasOwnProperty(d) && (c[d] = a[d]);
                for (d in b)
                    b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            }
            function w(a) {
                this.name = a;
                this.Hs = {
                    ZE: {
                        ky: p,
                        ZE: p
                    }
                };
                this.TJ = []
            }
            function y(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [], b;
                    for (b in Y)
                        a.push(Y[b]);
                    return a
                }
                (b = Y[a]) || (b = Y[a] = new w(a));
                return b
            }
            var C = c.alog;
            if (!C || !C.Ho) {
                var A = b.all && a.attachEvent
                  , B = C && C.yE || +new Date
                  , D = a.d3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
                  , E = 0
                  , J = {}
                  , O = function(a) {
                    var b = arguments, c, d, e, f;
                    if ("define" == a || "require" == a) {
                        for (d = 1; d < b.length; d++)
                            switch (typeof b[d]) {
                            case "string":
                                c = b[d];
                                break;
                            case "object":
                                e = b[d];
                                break;
                            case "function":
                                f = b[d]
                            }
                        "require" == a && (c && !e && (e = [c]),
                        c = p);
                        c = !c ? "#" + E++ : c;
                        d = oa[c] = oa[c] || {};
                        d.Ho || (d.name = c,
                        d.sZ = e,
                        d.uK = f,
                        "define" == a && (d.YV = o),
                        g(d))
                    } else
                        "function" == typeof a ? a(O) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, d) {
                            b[0] = d;
                            u.apply(O.wO(c), b)
                        })
                }
                  , M = {}
                  , Y = {}
                  , oa = {
                    g1: {
                        name: "alog",
                        Ho: o,
                        Mc: O
                    }
                };
                w.prototype.start = w.prototype.create = function(a) {
                    if (!this.tK) {
                        "object" == typeof a && this.set(a);
                        this.tK = new Date;
                        for (this.Is("create", this); a = this.TJ.shift(); )
                            u.apply(this, a)
                    }
                }
                ;
                w.prototype.send = function(a, b) {
                    var c = v({
                        ts: i().toString(36),
                        t: a,
                        sid: D
                    }, this.Hs);
                    if ("object" == typeof b)
                        c = v(c, b);
                    else {
                        var d = arguments;
                        switch (a) {
                        case "pageview":
                            d[1] && (c.page = d[1]);
                            d[2] && (c.title = d[2]);
                            break;
                        case "event":
                            d[1] && (c.eventCategory = d[1]);
                            d[2] && (c.eventAction = d[2]);
                            d[3] && (c.eventLabel = d[3]);
                            d[4] && (c.eventValue = d[4]);
                            break;
                        case "timing":
                            d[1] && (c.timingCategory = d[1]);
                            d[2] && (c.timingVar = d[2]);
                            d[3] && (c.timingValue = d[3]);
                            d[4] && (c.timingLabel = d[4]);
                            break;
                        case "exception":
                            d[1] && (c.exDescription = d[1]);
                            d[2] && (c.exFatal = d[2]);
                            break;
                        default:
                            return
                        }
                    }
                    this.Is("send", c);
                    var e;
                    if (d = this.Hs.ZE) {
                        var f = {};
                        for (e in c)
                            d[e] !== p && (f[d[e] || e] = c[e]);
                        e = f
                    } else
                        e = c;
                    n(this.Hs.ky, e)
                }
                ;
                w.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = v({
                            ky: p,
                            ZE: p
                        }, b)),
                        this.Hs[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                }
                ;
                w.prototype.get = function(a, b) {
                    var c = this.Hs[a];
                    "function" == typeof b && b(c);
                    return c
                }
                ;
                w.prototype.Is = function(a, b) {
                    return O.Is(this.name + "." + a, b)
                }
                ;
                w.prototype.M = function(a, b) {
                    O.M(this.name + "." + a, b)
                }
                ;
                w.prototype.cd = function(a, b) {
                    O.cd(this.name + "." + a, b)
                }
                ;
                w.prototype.start = w.prototype.start;
                w.prototype.create = w.prototype.create;
                w.prototype.send = w.prototype.send;
                w.prototype.set = w.prototype.set;
                w.prototype.get = w.prototype.get;
                w.prototype.fire = w.prototype.Is;
                w.prototype.on = w.prototype.M;
                w.prototype.un = w.prototype.cd;
                O.name = "alog";
                O.ZN = D;
                O.Ho = o;
                O.timestamp = i;
                O.cd = l;
                O.M = k;
                O.Is = m;
                O.wO = y;
                O("init");
                var ka = y();
                ka.set("protocolParameter", {
                    f1: p
                });
                if (C) {
                    var Qa = [].concat(C.Ab || [], C.Wm || []);
                    C.Ab = C.Wm = p;
                    for (var cb in O)
                        O.hasOwnProperty(cb) && (C[cb] = O[cb]);
                    O.Ab = O.Wm = {
                        push: function(a) {
                            O.apply(O, a)
                        }
                    };
                    for (C = 0; C < Qa.length; C++)
                        O.apply(O, Qa[C])
                }
                c.alog = O;
                A && k(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Ya = q;
                a.onerror = function(a, b, d, e) {
                    var g = o;
                    !b && /^script error/i.test(a) && (Ya ? g = q : Ya = o);
                    g && c.alog("exception.send", "exception", {
                        QM: a,
                        tY: b,
                        uM: d,
                        Fw: e
                    });
                    return q
                }
                ;
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        QM: a.QM,
                        tY: a.path,
                        uM: a.uM,
                        method: a.method,
                        GW: "catch"
                    })
                })
            }
        })(a, b, c);
        (function(a, b, c) {
            var g = "18_1";
            G() && (g = "18_2");
            var i = Math.random
              , k = {
                an: "0.1"
            }
              , l = {
                an: "0.1"
            };
            if (k && k.an && i() < k.an) {
                var m = c.alog.wO("monkey"), n, a = a.screen, b = b.referrer;
                m.set("ver", 5);
                m.set("pid", 241);
                a && m.set("px", a.width + "*" + a.height);
                m.set("ref", b);
                c.alog("monkey.on", "create", function() {
                    n = c.alog.timestamp;
                    m.set("protocolParameter", {
                        reports: p
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = n(a.now).toString(36),
                    a.now = "")
                });
                c.alog("monkey.create", {
                    page: g,
                    pid: "241",
                    p: "18",
                    ky: "http://nsclick.baidu.com/u.gif",
                    M3: {
                        K3: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            l && (l.an && i() < l.an) && (c.alog("cus.on", "time", function(a) {
                var b = {}, d = q, e;
                if ("[object Object]" === a.toString()) {
                    for (var g in a)
                        "page" == g ? b.page = a[g] : (e = parseInt(a[g], 10),
                        0 < e && /^z_/.test(g) && (d = o,
                        b[g] = e));
                    d && c.alog("cus.send", "time", b)
                }
            }),
            c.alog("cus.on", "count", function(a) {
                var b = {}
                  , d = q;
                "string" === typeof a && (a = [a]);
                if (a instanceof Array)
                    for (var e = 0; e < a.length; e++)
                        /^z_/.test(a[e]) ? (d = o,
                        b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
                d && c.alog("cus.send", "count", b)
            }),
            c.alog("cus.create", {
                dv: 3,
                ky: "http://static.tieba.baidu.com/tb/pms/img/st.gif",
                page: g,
                p: "18"
            }))
        })(a, b, c)
    }(window, document, z),
    z.alog("cus.fire", "count", "z_loadscriptcount"));
    z.Ij = z.alog || s();
    function Qb(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete z._rd["_cbk" + c]
            }
            ;
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = K("script", {
            type: "text/javascript"
        });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = p
        }, 1)
    }
    ;var Rb = {
        map: "tk0ryi",
        common: "le15mk",
        style: "44zsko",
        tile: "y2qw2x",
        vectordrawlib: "qb0sq4",
        newvectordrawlib: "y2lono",
        groundoverlay: "43makz",
        pointcollection: "prd2zh",
        marker: "izcmyw",
        symbol: "mmm1ds",
        canvablepath: "5bmy2e",
        vmlcontext: "obpzx3",
        markeranimation: "4n4sfv",
        poly: "bs55zb",
        draw: "zhhpch",
        drawbysvg: "xzmng4",
        drawbyvml: "rscvqi",
        drawbycanvas: "evhm1h",
        infowindow: "1yqzkf",
        oppc: "uv0pep",
        opmb: "xviqqj",
        menu: "w3qwgl",
        control: "wlrzkm",
        navictrl: "ko1bzf",
        geoctrl: "v3szez",
        copyrightctrl: "nc3xny",
        citylistcontrol: "x2ymut",
        scommon: "mddzoo",
        local: "att0h3",
        route: "ihe02g",
        othersearch: "l3y02i",
        mapclick: "edk23z",
        buslinesearch: "inxnkk",
        hotspot: "x1ew3q",
        autocomplete: "k1nigj",
        coordtrans: "xddka3",
        coordtransutils: "ezmpfq",
        convertor: "dg4hqu",
        clayer: "pt3hj5",
        pservice: "2bo2iz",
        pcommon: "qx32lx",
        panorama: "34hu4f",
        panoramaflash: "p1tm3f",
        vector: "0tuckd"
    };
    x.Iy = function() {
        function a(a) {
            return d && !!c[b + a + "_" + Rb[a]]
        }
        var b = "BMap_"
          , c = window.localStorage
          , d = "localStorage"in window && c !== p && c !== j;
        return {
            oY: d,
            set: function(a, f) {
                if (d) {
                    for (var g = b + a + "_", i = c.length, k; i--; )
                        k = c.key(i),
                        -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Rb[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            },
            get: function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + Rb[e]) : q
            },
            dK: a
        }
    }();
    function I() {}
    x.object.extend(I, {
        Fj: {
            nG: -1,
            EP: 0,
            Zp: 1
        },
        nL: function() {
            var a = "canvablepath"
              , b = z.yJ ? "newvectordrawlib" : "vectordrawlib";
            if (!G() || !Mb())
                Lb() || (Kb() ? a = "vmlcontext" : Mb());
            return {
                tile: [b, "style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        C3: {},
        gG: {
            VP: z.ma + "getmodules?v=2.0&t=20140707",
            xU: 5E3
        },
        DC: q,
        Nd: {
            rl: {},
            En: [],
            Pv: []
        },
        load: function(a, b, c) {
            var d = this.hb(a);
            if (d.Bd == this.Fj.Zp)
                c && b();
            else {
                if (d.Bd == this.Fj.nG) {
                    this.jK(a);
                    this.sN(a);
                    var e = this;
                    e.DC == q && (e.DC = o,
                    setTimeout(function() {
                        for (var a = [], b = 0, c = e.Nd.En.length; b < c; b++) {
                            var d = e.Nd.En[b]
                              , l = "";
                            ha.Iy.dK(d) ? l = ha.Iy.get(d) : (l = "",
                            a.push(d + "_" + Rb[d]));
                            e.Nd.Pv.push({
                                MM: d,
                                KE: l
                            })
                        }
                        e.DC = q;
                        e.Nd.En.length = 0;
                        0 == a.length ? e.UK() : Qb(e.gG.VP + "&mod=" + a.join(","))
                    }, 1));
                    d.Bd = this.Fj.EP
                }
                d.Pu.push(b)
            }
        },
        jK: function(a) {
            if (a && this.nL()[a])
                for (var a = this.nL()[a], b = 0; b < a.length; b++)
                    this.jK(a[b]),
                    this.Nd.rl[a[b]] || this.sN(a[b])
        },
        sN: function(a) {
            for (var b = 0; b < this.Nd.En.length; b++)
                if (this.Nd.En[b] == a)
                    return;
            this.Nd.En.push(a)
        },
        yZ: function(a, b) {
            var c = this.hb(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.Bd = this.Fj.Zp;
            for (var e = 0, f = c.Pu.length; e < f; e++)
                c.Pu[e]();
            c.Pu.length = 0
        },
        dK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Nd.rl[a].Bd != c.Fj.Zp ? (c.remove(a),
                c.load(a, b)) : clearTimeout(c.timeout)
            }, c.gG.xU)
        },
        hb: function(a) {
            this.Nd.rl[a] || (this.Nd.rl[a] = {},
            this.Nd.rl[a].Bd = this.Fj.nG,
            this.Nd.rl[a].Pu = []);
            return this.Nd.rl[a]
        },
        remove: function(a) {
            delete this.hb(a)
        },
        sV: function(a, b) {
            for (var c = this.Nd.Pv, d = o, e = 0, f = c.length; e < f; e++)
                "" == c[e].KE && (c[e].MM == a ? c[e].KE = b : d = q);
            d && this.UK()
        },
        UK: function() {
            for (var a = this.Nd.Pv, b = 0, c = a.length; b < c; b++)
                this.yZ(a[b].MM, a[b].KE);
            this.Nd.Pv.length = 0
        }
    });
    function Q(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    Q.prototype.mb = function(a) {
        return a && a.x == this.x && a.y == this.y
    }
    ;
    function L(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    L.prototype.mb = function(a) {
        return a && this.width == a.width && this.height == a.height
    }
    ;
    function ib(a, b) {
        a && (this.Kb = a,
        this.ba = "spot" + ib.ba++,
        b = b || {},
        this.Vg = b.text || "",
        this.wv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.rJ = b.userData || p,
        this.Qh = b.minZoom || p,
        this.Cf = b.maxZoom || p)
    }
    ib.ba = 0;
    x.extend(ib.prototype, {
        qa: function(a) {
            this.Qh == p && (this.Qh = a.K.fc);
            this.Cf == p && (this.Cf = a.K.Zb)
        },
        sa: function(a) {
            a instanceof H && (this.Kb = a)
        },
        ha: t("Kb"),
        Rt: ba("Vg"),
        WD: t("Vg"),
        setUserData: ba("rJ"),
        getUserData: t("rJ")
    });
    function Sb() {
        this.C = p;
        this.Lb = "control";
        this.Pa = this.XJ = o
    }
    x.lang.ta(Sb, x.lang.Ba, "Control");
    x.extend(Sb.prototype, {
        initialize: function(a) {
            this.C = a;
            if (this.B)
                return a.Ua.appendChild(this.B),
                this.B
        },
        Ce: function(a) {
            !this.B && (this.initialize && Wa(this.initialize)) && (this.B = this.initialize(a));
            this.k = this.k || {
                Ag: q
            };
            this.wB();
            this.Jr();
            this.B && (this.B.ir = this)
        },
        wB: function() {
            var a = this.B;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.uz || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.Ag || x.D.Ta(a, "BMap_noprint");
                G() || x.M(a, "contextmenu", na)
            }
        },
        remove: function() {
            this.C = p;
            this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B),
            this.B = this.B.ir = p)
        },
        za: function() {
            this.B = zb(this.C.Ua, "<div unselectable='on'></div>");
            this.Pa == q && x.D.U(this.B);
            return this.B
        },
        Jr: function() {
            this.qc(this.k.anchor)
        },
        qc: function(a) {
            if (this.h1 || !Va(a) || isNaN(a) || a < Tb || 3 < a)
                a = this.defaultAnchor;
            this.k = this.k || {
                Ag: q
            };
            this.k.ya = this.k.ya || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.B) {
                var c = this.B
                  , d = this.k.ya.width
                  , e = this.k.ya.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                case Tb:
                    c.style.top = e + "px";
                    c.style.left = d + "px";
                    break;
                case Ub:
                    c.style.top = e + "px";
                    c.style.right = d + "px";
                    break;
                case Vb:
                    c.style.bottom = e + "px";
                    c.style.left = d + "px";
                    break;
                case 3:
                    c.style.bottom = e + "px",
                    c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                x.D.Rb(this.B, "anchor" + c[b]);
                x.D.Ta(this.B, "anchor" + c[a])
            }
        },
        yD: function() {
            return this.k.anchor
        },
        getContainer: t("B"),
        Te: function(a) {
            a instanceof L && (this.k = this.k || {
                Ag: q
            },
            this.k.ya = new L(a.width,a.height),
            this.B && this.qc(this.k.anchor))
        },
        Pf: function() {
            return this.k.ya
        },
        Hd: t("B"),
        show: function() {
            this.Pa != o && (this.Pa = o,
            this.B && x.D.show(this.B))
        },
        U: function() {
            this.Pa != q && (this.Pa = q,
            this.B && x.D.U(this.B))
        },
        isPrintable: function() {
            return !!this.k.Ag
        },
        mh: function() {
            return !this.B && !this.C ? q : !!this.Pa
        }
    });
    var Tb = 0
      , Ub = 1
      , Vb = 2;
    function jb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Ag: q,
            BF: a.showZoomInfo || o,
            anchor: a.anchor,
            ya: a.offset,
            type: a.type,
            tW: a.enableGeolocation || q
        };
        this.defaultAnchor = G() ? 3 : Tb;
        this.defaultOffset = new L(10,10);
        this.qc(a.anchor);
        this.jn(a.type);
        this.ye()
    }
    x.lang.ta(jb, Sb, "NavigationControl");
    x.extend(jb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        jn: function(a) {
            this.k.type = Va(a) && 0 <= a && 3 >= a ? a : 0
        },
        fp: function() {
            return this.k.type
        },
        ye: function() {
            var a = this;
            I.load("navictrl", function() {
                a.uf()
            })
        }
    });
    function Wb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Vb,
            ya: a.offset || new L(10,30),
            h_: a.showAddressBar !== q,
            N1: a.enableAutoLocation || q,
            AM: a.locationIcon || p
        };
        var b = this;
        this.uz = 1200;
        b.W_ = [];
        this.ke = [];
        I.load("geoctrl", function() {
            (function d() {
                if (0 !== b.ke.length) {
                    var a = b.ke.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.UP()
        });
        Pa(Ia)
    }
    x.lang.ta(Wb, Sb, "GeolocationControl");
    x.extend(Wb.prototype, {
        location: function() {
            this.ke.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ca(p)
    });
    function Xb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Ag: q,
            anchor: a.anchor,
            ya: a.offset
        };
        this.cc = [];
        this.defaultAnchor = Vb;
        this.defaultOffset = new L(5,2);
        this.qc(a.anchor);
        this.XJ = q;
        this.ye()
    }
    x.lang.ta(Xb, Sb, "CopyrightControl");
    x.object.extend(Xb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        mw: function(a) {
            if (a && Va(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: p,
                    content: ""
                }, c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.om(a.id))
                    for (var d in b)
                        a[d] = b[d];
                else
                    this.cc.push(b)
            }
        },
        om: function(a) {
            for (var b = 0, c = this.cc.length; b < c; b++)
                if (this.cc[b].id == a)
                    return this.cc[b]
        },
        FD: t("cc"),
        cF: function(a) {
            for (var b = 0, c = this.cc.length; b < c; b++)
                this.cc[b].id == a && (r = this.cc.splice(b, 1),
                b--,
                c = this.cc.length)
        },
        ye: function() {
            var a = this;
            I.load("copyrightctrl", function() {
                a.uf()
            })
        }
    });
    function lb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Ag: q,
            size: a.size || new L(150,150),
            padding: 5,
            Va: a.isOpen === o ? o : q,
            k0: 4,
            ya: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new L(0,0);
        this.xq = this.yq = 13;
        this.qc(a.anchor);
        this.xe(this.k.size);
        this.ye()
    }
    x.lang.ta(lb, Sb, "OverviewMapControl");
    x.extend(lb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        qc: function(a) {
            Sb.prototype.qc.call(this, a)
        },
        me: function() {
            this.me.jo = o;
            this.k.Va = !this.k.Va;
            this.B || (this.me.jo = q)
        },
        xe: function(a) {
            a instanceof L || (a = new L(150,150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        },
        yb: function() {
            return this.k.size
        },
        Va: function() {
            return this.k.Va
        },
        ye: function() {
            var a = this;
            I.load("control", function() {
                a.uf()
            })
        }
    });
    function Yb(a) {
        Sb.call(this);
        a = a || {};
        this.defaultAnchor = Tb;
        this.pV = a.canCheckSize === q ? q : o;
        this.gj = "";
        this.defaultOffset = new L(10,10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.k = {
            Ag: q,
            ya: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && Wa(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && Wa(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && Wa(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.qc(a.anchor);
        this.ye()
    }
    x.lang.ta(Yb, Sb, "CityListControl");
    x.object.extend(Yb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        ye: function() {
            var a = this;
            I.load("citylistcontrol", function() {
                a.uf()
            }, o)
        }
    });
    function kb(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Ag: q,
            color: "black",
            dd: "metric",
            ya: a.offset
        };
        this.defaultAnchor = Vb;
        this.defaultOffset = new L(81,18);
        this.qc(a.anchor);
        this.Zh = {
            metric: {
                name: "metric",
                lK: 1,
                WL: 1E3,
                BO: "\u7c73",
                CO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                lK: 3.2808,
                WL: 5280,
                BO: "\u82f1\u5c3a",
                CO: "\u82f1\u91cc"
            }
        };
        this.Zh[this.k.dd] || (this.k.dd = "metric");
        this.QI = p;
        this.pI = {};
        this.ye()
    }
    x.lang.ta(kb, Sb, "ScaleControl");
    x.object.extend(kb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Kk: function(a) {
            this.k.color = a + ""
        },
        e2: function() {
            return this.k.color
        },
        yF: function(a) {
            this.k.dd = this.Zh[a] && this.Zh[a].name || this.k.dd
        },
        MX: function() {
            return this.k.dd
        },
        ye: function() {
            var a = this;
            I.load("control", function() {
                a.uf()
            })
        }
    });
    var Zb = 0;
    function mb(a) {
        Sb.call(this);
        a = a || {};
        this.defaultAnchor = Ub;
        this.defaultOffset = new L(10,10);
        this.k = {
            Ag: q,
            ph: [La, Xa, Ra, Oa],
            XV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Zb,
            ya: a.offset || this.defaultOffset,
            xW: o
        };
        this.qc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.ph = a.mapTypes.slice(0));
        this.ye()
    }
    x.lang.ta(mb, Sb, "MapTypeControl");
    x.object.extend(mb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Jy: function(a) {
            this.C.Yn = a
        },
        ye: function() {
            var a = this;
            I.load("control", function() {
                a.uf()
            }, o)
        }
    });
    function $b(a) {
        Sb.call(this);
        a = a || {};
        this.k = {
            Ag: q,
            ya: a.offset,
            anchor: a.anchor
        };
        this.Si = q;
        this.Tv = p;
        this.yI = new ac({
            Of: "api"
        });
        this.zI = new bc(p,{
            Of: "api"
        });
        this.defaultAnchor = Ub;
        this.defaultOffset = new L(10,10);
        this.qc(a.anchor);
        this.ye();
        Pa(va)
    }
    x.lang.ta($b, Sb, "PanoramaControl");
    x.extend($b.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        ye: function() {
            var a = this;
            I.load("control", function() {
                a.uf()
            })
        }
    });
    function cc(a) {
        x.lang.Ba.call(this);
        this.k = {
            Ua: p,
            cursor: "default"
        };
        this.k = x.extend(this.k, a);
        this.Lb = "contextmenu";
        this.C = p;
        this.xa = [];
        this.Ff = [];
        this.Ae = [];
        this.Pw = this.gs = p;
        this.Ph = q;
        var b = this;
        I.load("menu", function() {
            b.wb()
        })
    }
    x.lang.ta(cc, x.lang.Ba, "ContextMenu");
    x.object.extend(cc.prototype, {
        qa: function(a, b) {
            this.C = a;
            this.wl = b || p
        },
        remove: function() {
            this.C = this.wl = p
        },
        ow: function(a) {
            if (a && !("menuitem" != a.Lb || "" == a.Vg || 0 >= a.aj)) {
                for (var b = 0, c = this.xa.length; b < c; b++)
                    if (this.xa[b] === a)
                        return;
                this.xa.push(a);
                this.Ff.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Lb) {
                for (var b = 0, c = this.xa.length; b < c; b++)
                    this.xa[b] === a && (this.xa[b].remove(),
                    this.xa.splice(b, 1),
                    c--);
                b = 0;
                for (c = this.Ff.length; b < c; b++)
                    this.Ff[b] === a && (this.Ff[b].remove(),
                    this.Ff.splice(b, 1),
                    c--)
            }
        },
        RB: function() {
            this.xa.push({
                Lb: "divider",
                Oj: this.Ae.length
            });
            this.Ae.push({
                D: p
            })
        },
        eF: function(a) {
            if (this.Ae[a]) {
                for (var b = 0, c = this.xa.length; b < c; b++)
                    this.xa[b] && ("divider" == this.xa[b].Lb && this.xa[b].Oj == a) && (this.xa.splice(b, 1),
                    c--),
                    this.xa[b] && ("divider" == this.xa[b].Lb && this.xa[b].Oj > a) && this.xa[b].Oj--;
                this.Ae.splice(a, 1)
            }
        },
        Hd: t("B"),
        show: function() {
            this.Ph != o && (this.Ph = o)
        },
        U: function() {
            this.Ph != q && (this.Ph = q)
        },
        NZ: function(a) {
            a && (this.k.cursor = a)
        },
        getItem: function(a) {
            return this.Ff[a]
        }
    });
    var dc = F.pa + "menu_zoom_in.png"
      , ec = F.pa + "menu_zoom_out.png";
    function fc(a, b, c) {
        if (a && Wa(b)) {
            x.lang.Ba.call(this);
            this.k = {
                width: 100,
                id: "",
                Cm: ""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.k.Cm = c.iconUrl ? c.iconUrl : "";
            this.Vg = a + "";
            this.xz = b;
            this.C = p;
            this.Lb = "menuitem";
            this.Pr = this.lv = this.B = this.Hh = p;
            this.Lh = o;
            var d = this;
            I.load("menu", function() {
                d.wb()
            })
        }
    }
    x.lang.ta(fc, x.lang.Ba, "MenuItem");
    x.object.extend(fc.prototype, {
        qa: function(a, b) {
            this.C = a;
            this.Hh = b
        },
        remove: function() {
            this.C = this.Hh = p
        },
        Rt: function(a) {
            a && (this.Vg = a + "")
        },
        Tb: function(a) {
            a && (this.k.Cm = a)
        },
        Hd: t("B"),
        enable: function() {
            this.Lh = o
        },
        disable: function() {
            this.Lh = q
        }
    });
    function fb(a, b) {
        a && !b && (b = a);
        this.Ee = this.De = this.Je = this.Ie = this.Ll = this.ul = p;
        a && (this.Ll = new H(a.lng,a.lat),
        this.ul = new H(b.lng,b.lat),
        this.Je = a.lng,
        this.Ie = a.lat,
        this.Ee = b.lng,
        this.De = b.lat)
    }
    x.object.extend(fb.prototype, {
        yj: function() {
            return !this.Ll || !this.ul
        },
        mb: function(a) {
            return !(a instanceof fb) || this.yj() ? q : this.re().mb(a.re()) && this.kf().mb(a.kf())
        },
        re: t("Ll"),
        kf: t("ul"),
        GV: function(a) {
            return !(a instanceof fb) || this.yj() || a.yj() ? q : a.Je > this.Je && a.Ee < this.Ee && a.Ie > this.Ie && a.De < this.De
        },
        Ja: function() {
            return this.yj() ? p : new H((this.Je + this.Ee) / 2,(this.Ie + this.De) / 2)
        },
        ft: function(a) {
            if (!(a instanceof fb) || Math.max(a.Je, a.Ee) < Math.min(this.Je, this.Ee) || Math.min(a.Je, a.Ee) > Math.max(this.Je, this.Ee) || Math.max(a.Ie, a.De) < Math.min(this.Ie, this.De) || Math.min(a.Ie, a.De) > Math.max(this.Ie, this.De))
                return p;
            var b = Math.max(this.Je, a.Je)
              , c = Math.min(this.Ee, a.Ee)
              , d = Math.max(this.Ie, a.Ie)
              , a = Math.min(this.De, a.De);
            return new fb(new H(b,d),new H(c,a))
        },
        bs: function(a) {
            return !(a instanceof H) || this.yj() ? q : a.lng >= this.Je && a.lng <= this.Ee && a.lat >= this.Ie && a.lat <= this.De
        },
        extend: function(a) {
            if (a instanceof H) {
                var b = a.lng
                  , a = a.lat;
                this.Ll || (this.Ll = new H(0,0));
                this.ul || (this.ul = new H(0,0));
                if (!this.Je || this.Je > b)
                    this.Ll.lng = this.Je = b;
                if (!this.Ee || this.Ee < b)
                    this.ul.lng = this.Ee = b;
                if (!this.Ie || this.Ie > a)
                    this.Ll.lat = this.Ie = a;
                if (!this.De || this.De < a)
                    this.ul.lat = this.De = a
            }
        },
        KF: function() {
            return this.yj() ? new H(0,0) : new H(Math.abs(this.Ee - this.Je),Math.abs(this.De - this.Ie))
        }
    });
    function H(a, b) {
        isNaN(a) && (a = Jb(a),
        a = isNaN(a) ? 0 : a);
        Za(a) && (a = parseFloat(a));
        isNaN(b) && (b = Jb(b),
        b = isNaN(b) ? 0 : b);
        Za(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    H.bM = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    H.prototype.mb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function gc() {}
    gc.prototype.nh = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    gc.prototype.wi = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function hc() {}
    ;var eb = {
        nK: function(a, b, c) {
            I.load("coordtransutils", function() {
                eb.ZU(a, b, c)
            }, o)
        },
        mK: function(a, b, c) {
            I.load("coordtransutils", function() {
                eb.YU(a, b, c)
            }, o)
        }
    };
    function ic() {
        this.Oa = [];
        var a = this;
        I.load("convertor", function() {
            a.SP()
        })
    }
    x.ta(ic, x.lang.Ba, "Convertor");
    x.extend(ic.prototype, {
        translate: function(a, b, c, d) {
            this.Oa.push({
                method: "translate",
                arguments: [a, b, c, d]
            })
        }
    });
    S(ic.prototype, {
        translate: ic.prototype.translate
    });
    function R() {}
    R.prototype = new gc;
    x.extend(R, {
        iP: 6370996.81,
        rG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Au: [75, 60, 45, 30, 15, 0],
        oP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
        oG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
        j2: function(a, b) {
            if (!a || !b)
                return 0;
            var c, d, a = this.Eb(a);
            if (!a)
                return 0;
            c = this.Tk(a.lng);
            d = this.Tk(a.lat);
            b = this.Eb(b);
            return !b ? 0 : this.Pe(c, this.Tk(b.lng), d, this.Tk(b.lat))
        },
        Vo: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.OD(a.lng, -180, 180);
            a.lat = this.SD(a.lat, -74, 74);
            b.lng = this.OD(b.lng, -180, 180);
            b.lat = this.SD(b.lat, -74, 74);
            return this.Pe(this.Tk(a.lng), this.Tk(b.lng), this.Tk(a.lat), this.Tk(b.lat))
        },
        Eb: function(a) {
            if (a === p || a === j)
                return new H(0,0);
            var b, c;
            b = new H(Math.abs(a.lng),Math.abs(a.lat));
            for (var d = 0; d < this.rG.length; d++)
                if (b.lat >= this.rG[d]) {
                    c = this.oP[d];
                    break
                }
            a = this.oK(a, c);
            return a = new H(a.lng.toFixed(6),a.lat.toFixed(6))
        },
        xb: function(a) {
            if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new H(0,0);
            var b, c;
            a.lng = this.OD(a.lng, -180, 180);
            a.lat = this.SD(a.lat, -74, 74);
            b = new H(a.lng,a.lat);
            for (var d = 0; d < this.Au.length; d++)
                if (b.lat >= this.Au[d]) {
                    c = this.oG[d];
                    break
                }
            if (!c)
                for (d = 0; d < this.Au.length; d++)
                    if (b.lat <= -this.Au[d]) {
                        c = this.oG[d];
                        break
                    }
            a = this.oK(a, c);
            return a = new H(a.lng.toFixed(2),a.lat.toFixed(2))
        },
        oK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng)
                  , d = Math.abs(a.lat) / b[9]
                  , d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d
                  , c = c * (0 > a.lng ? -1 : 1)
                  , d = d * (0 > a.lat ? -1 : 1);
                return new H(c,d)
            }
        },
        Pe: function(a, b, c, d) {
            return this.iP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        Tk: function(a) {
            return Math.PI * a / 180
        },
        j4: function(a) {
            return 180 * a / Math.PI
        },
        SD: function(a, b, c) {
            b != p && (a = Math.max(a, b));
            c != p && (a = Math.min(a, c));
            return a
        },
        OD: function(a, b, c) {
            for (; a > c; )
                a -= c - b;
            for (; a < b; )
                a += c - b;
            return a
        }
    });
    x.extend(R.prototype, {
        Jm: function(a) {
            return R.xb(a)
        },
        nh: function(a) {
            a = R.xb(a);
            return new Q(a.lng,a.lat)
        },
        qh: function(a) {
            return R.Eb(a)
        },
        wi: function(a) {
            a = new H(a.x,a.y);
            return R.Eb(a)
        },
        ac: function(a, b, c, d, e) {
            if (a)
                return a = this.Jm(a, e),
                b = this.Bc(b),
                new Q(Math.round((a.lng - c.lng) / b + d.width / 2),Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        ub: function(a, b, c, d, e) {
            if (a)
                return b = this.Bc(b),
                this.qh(new H(c.lng + b * (a.x - d.width / 2),c.lat - b * (a.y - d.height / 2)), e)
        },
        Bc: function(a) {
            return Math.pow(2, 18 - a)
        }
    });
    function hb() {
        this.gj = "bj"
    }
    hb.prototype = new R;
    x.extend(hb.prototype, {
        Jm: function(a, b) {
            return this.CQ(b, R.xb(a))
        },
        qh: function(a, b) {
            return R.Eb(this.DQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this
              , d = R.xb(a);
            I.load("coordtrans", function() {
                var a = hc.QD(c.gj || "bj", d)
                  , a = new Q(a.x,a.y);
                b && b(a)
            }, o)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this
              , d = new H(a.x,a.y);
            I.load("coordtrans", function() {
                var a = hc.PD(c.gj || "bj", d)
                  , a = new H(a.lng,a.lat)
                  , a = R.Eb(a);
                b && b(a)
            }, o)
        },
        CQ: function(a, b) {
            if (I.hb("coordtrans").Bd == I.Fj.Zp) {
                var c = hc.QD(a || "bj", b);
                return new H(c.x,c.y)
            }
            I.load("coordtrans", s());
            return new H(0,0)
        },
        DQ: function(a, b) {
            if (I.hb("coordtrans").Bd == I.Fj.Zp) {
                var c = hc.PD(a || "bj", b);
                return new H(c.lng,c.lat)
            }
            I.load("coordtrans", s());
            return new H(0,0)
        },
        Bc: function(a) {
            return Math.pow(2, 20 - a)
        }
    });
    function jc() {
        this.Lb = "overlay"
    }
    x.lang.ta(jc, x.lang.Ba, "Overlay");
    jc.ym = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    }
    ;
    x.extend(jc.prototype, {
        Ce: function(a) {
            if (!this.V && Wa(this.initialize) && (this.V = this.initialize(a)))
                this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = p;
            this.dispatchEvent(new N("onremove"))
        },
        U: function() {
            this.V && x.D.U(this.V)
        },
        show: function() {
            this.V && x.D.show(this.V)
        },
        mh: function() {
            return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
        }
    });
    z.Se(function(a) {
        function b(a, b) {
            var c = K("div")
              , g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.qd = a.qd = b(a.platform, 200);
        a.Td.sD = b(c.qd, 800);
        a.Td.GE = b(c.qd, 700);
        a.Td.aL = b(c.qd, 600);
        a.Td.zE = b(c.qd, 500);
        a.Td.EM = b(c.qd, 400);
        a.Td.FM = b(c.qd, 300);
        a.Td.OO = b(c.qd, 201);
        a.Td.ot = b(c.qd, 200)
    });
    function gb() {
        x.lang.Ba.call(this);
        jc.call(this);
        this.map = p;
        this.Pa = o;
        this.zb = p;
        this.dH = 0
    }
    x.lang.ta(gb, jc, "OverlayInternal");
    x.extend(gb.prototype, {
        initialize: function(a) {
            this.map = a;
            x.lang.Ba.call(this, this.ba);
            return p
        },
        nx: t("map"),
        draw: s(),
        Hj: s(),
        remove: function() {
            this.map = p;
            x.lang.Rw(this.ba);
            jc.prototype.remove.call(this)
        },
        U: function() {
            this.Pa !== q && (this.Pa = q)
        },
        show: function() {
            this.Pa !== o && (this.Pa = o)
        },
        mh: function() {
            return !this.V ? q : !!this.Pa
        },
        Na: t("V"),
        LN: function(a) {
            var a = a || {}, b;
            for (b in a)
                this.z[b] = a[b]
        },
        St: ba("zIndex"),
        ii: function() {
            this.z.ii = o
        },
        gW: function() {
            this.z.ii = q
        },
        uo: ba("hg"),
        zp: function() {
            this.hg = p
        }
    });
    function kc() {
        this.map = p;
        this.va = {};
        this.ze = []
    }
    z.Se(function(a) {
        var b = new kc;
        b.map = a;
        a.va = b.va;
        a.ze = b.ze;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        x.ea.la && 8 > x.ea.la || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof gb)
                b.va[a.ba] || (b.va[a.ba] = a);
            else {
                for (var d = q, e = 0, f = b.ze.length; e < f; e++)
                    if (b.ze[e] === a) {
                        d = o;
                        break
                    }
                d || b.ze.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof gb)
                delete b.va[a.ba];
            else
                for (var d = 0, e = b.ze.length; d < e; d++)
                    if (b.ze[d] === a) {
                        b.ze.splice(d, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Xc();
            for (var a in b.va)
                b.va[a].z.ii && (b.va[a].remove(),
                delete b.va[a]);
            a = 0;
            for (var d = b.ze.length; a < d; a++)
                b.ze[a].ii !== q && (b.ze[a].remove(),
                b.ze[a] = p,
                b.ze.splice(a, 1),
                a--,
                d--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.zb;
            a && (x.D.U(a.xc),
            x.D.U(a.bc))
        });
        a.addEventListener("movestart", function() {
            this.jh() && this.jh().WI()
        });
        a.addEventListener("moveend", function() {
            this.jh() && this.jh().LI()
        })
    });
    kc.prototype.draw = function(a) {
        if (z.cq) {
            var b = z.cq.Os(this.map);
            "canvas" === b.Lb && b.canvas && b.xQ(b.canvas.getContext("2d"))
        }
        for (var c in this.va)
            this.va[c].draw(a);
        x.jc.Fb(this.ze, function(a) {
            a.draw()
        });
        this.map.R.nb && this.map.R.nb.sa();
        z.cq && b.vF()
    }
    ;
    function lc(a) {
        gb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            mc: a.strokeWeight || 5,
            sd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            ii: a.enableMassClear === q ? q : o,
            wk: p,
            sm: p,
            Nf: a.enableEditing === o ? o : q,
            NM: 5,
            V_: q,
            ff: a.enableClicking === q ? q : o,
            ni: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.mc && (this.z.mc = 5);
        if (0 > this.z.sd || 1 < this.z.sd)
            this.z.sd = 0.65;
        if (0 > this.z.qg || 1 < this.z.qg)
            this.z.qg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = p;
        this.Mu = new fb(0,0);
        this.bf = [];
        this.nc = [];
        this.Qa = {}
    }
    x.lang.ta(lc, gb, "Graph");
    lc.ix = function(a) {
        var b = [];
        if (!a)
            return b;
        Za(a) && x.jc.Fb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new H(a[0],a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    }
    ;
    lc.QE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(lc.prototype, {
        initialize: function(a) {
            this.map = a;
            return p
        },
        draw: s(),
        Ir: function(a) {
            this.bf.length = 0;
            this.ia = lc.ix(a).slice(0);
            this.Eh()
        },
        ge: function(a) {
            this.Ir(a)
        },
        Eh: function() {
            if (this.ia) {
                var a = this;
                a.Mu = new fb;
                x.jc.Fb(this.ia, function(b) {
                    a.Mu.extend(b)
                })
            }
        },
        pe: t("ia"),
        hn: function(a, b) {
            b && this.ia[a] && (this.bf.length = 0,
            this.ia[a] = new H(b.lng,b.lat),
            this.Eh())
        },
        setStrokeColor: function(a) {
            this.z.strokeColor = a
        },
        DX: function() {
            return this.z.strokeColor
        },
        Op: function(a) {
            0 < a && (this.z.mc = a)
        },
        BL: function() {
            return this.z.mc
        },
        Mp: function(a) {
            a == j || (1 < a || 0 > a) || (this.z.sd = a)
        },
        EX: function() {
            return this.z.sd
        },
        Lt: function(a) {
            1 < a || 0 > a || (this.z.qg = a)
        },
        aX: function() {
            return this.z.qg
        },
        Np: function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        AL: function() {
            return this.z.strokeStyle
        },
        setFillColor: function(a) {
            this.z.fillColor = a || ""
        },
        $W: function() {
            return this.z.fillColor
        },
        Gd: t("Mu"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.iv);
            gb.prototype.remove.call(this);
            this.bf.length = 0
        },
        Nf: function() {
            if (!(2 > this.ia.length)) {
                this.z.Nf = o;
                var a = this;
                I.load("poly", function() {
                    a.Rl()
                }, o)
            }
        },
        fW: function() {
            this.z.Nf = q;
            var a = this;
            I.load("poly", function() {
                a.mk()
            }, o)
        }
    });
    function mc(a) {
        gb.call(this);
        this.V = this.map = p;
        this.z = {
            width: 0,
            height: 0,
            ya: new L(0,0),
            opacity: 1,
            background: "transparent",
            Px: 1,
            qM: "#000",
            zY: "solid",
            point: p
        };
        this.LN(a);
        this.point = this.z.point
    }
    x.lang.ta(mc, gb, "Division");
    x.extend(mc.prototype, {
        Hj: function() {
            var a = this.z
              , b = this.content
              , c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Px + "px " + a.zY + " " + a.qM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = zb(this.map.Qf().GE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Hj();
            this.V && x.M(this.V, G() ? "touchstart" : "mousedown", function(a) {
                ma(a)
            });
            return this.V
        },
        draw: function() {
            var a = this.map.Re(this.z.point);
            this.z.ya = new L(-Math.round(this.z.width / 2) - Math.round(this.z.Px),-Math.round(this.z.height / 2) - Math.round(this.z.Px));
            this.V.style.left = a.x + this.z.ya.width + "px";
            this.V.style.top = a.y + this.z.ya.height + "px"
        },
        ha: function() {
            return this.z.point
        },
        M0: function() {
            return this.map.ac(this.ha())
        },
        sa: function(a) {
            this.z.point = a;
            this.draw()
        },
        OZ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px",
            this.V.style.height = this.z.height + "px",
            this.draw())
        }
    });
    function nc(a, b, c) {
        a && b && (this.imageUrl = a,
        this.size = b,
        a = new L(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new L(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    x.extend(nc.prototype, {
        MN: function(a) {
            a && (this.imageUrl = a)
        },
        d_: function(a) {
            a && (this.printImageUrl = a)
        },
        xe: function(a) {
            a && (this.size = new L(a.width,a.height))
        },
        qc: function(a) {
            a && (this.anchor = new L(a.width,a.height))
        },
        Mt: function(a) {
            a && (this.imageOffset = new L(a.width,a.height))
        },
        UZ: function(a) {
            a && (this.infoWindowAnchor = new L(a.width,a.height))
        },
        RZ: function(a) {
            a && (this.imageSize = new L(a.width,a.height))
        },
        toString: ca("Icon")
    });
    function oc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new L(0,0),
                fillColor: b.fillColor || "#000",
                qg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                sd: b.strokeOpacity || 1,
                mc: b.strokeWeight
            };
            this.Lb = "number" === typeof a ? a : "UserDefined";
            this.Ji = this.style.anchor;
            this.or = new L(0,0);
            this.anchor = p;
            this.jB = a;
            var c = this;
            I.load("symbol", function() {
                c.Jn()
            }, o)
        }
    }
    x.extend(oc.prototype, {
        setPath: ba("jB"),
        setAnchor: function(a) {
            this.Ji = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.mc = a
        },
        setStrokeColor: function(a) {
            a = x.as.rC(a, this.style.sd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.sd = a
        },
        setFillOpacity: function(a) {
            this.style.qg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });
    function pc(a, b, c, d) {
        a && (this.Bv = {},
        this.$K = d ? !!d : q,
        this.Vc = [],
        this.v_ = a instanceof oc ? a : p,
        this.EI = b === j ? o : !!(b.indexOf("%") + 1),
        this.$j = isNaN(parseFloat(b)) ? 1 : this.EI ? parseFloat(b) / 100 : parseFloat(b),
        this.FI = !!(c.indexOf("%") + 1),
        this.repeat = c != j ? this.FI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function qc(a, b) {
        x.lang.Ba.call(this);
        this.content = a;
        this.map = p;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            ya: b.offset || new L(0,0),
            title: b.title || "",
            HE: b.maxContent || "",
            dh: b.enableMaximize || q,
            Ds: b.enableAutoPan === q ? q : o,
            eD: b.enableCloseOnClick === q ? q : o,
            margin: b.margin || [10, 10, 40, 10],
            mC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
            YX: q,
            UY: b.onClosing || ca(o),
            RK: q,
            jD: b.enableParano === o ? o : q,
            message: b.message,
            lD: b.enableSearchTool === o ? o : q,
            Bx: b.headerContent || "",
            fD: b.enableContentScroll || q
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220),
        730 < this.z.width))
            this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60),
        650 < this.z.height))
            this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220),
        730 < this.z.maxWidth))
            this.z.maxWidth = 730;
        this.ae = q;
        this.Ei = F.pa;
        this.$a = p;
        var c = this;
        I.load("infowindow", function() {
            c.wb()
        })
    }
    x.lang.ta(qc, x.lang.Ba, "InfoWindow");
    x.extend(qc.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.z.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
            650 < a && (a = 650)),
            this.z.height = a)
        },
        PN: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
            730 < a && (a = 730)),
            this.z.maxWidth = a)
        },
        Dc: function(a) {
            this.z.title = a
        },
        getTitle: function() {
            return this.z.title
        },
        bd: ba("content"),
        uk: t("content"),
        Ot: function(a) {
            this.z.HE = a + ""
        },
        fe: s(),
        Ds: function() {
            this.z.Ds = o
        },
        disableAutoPan: function() {
            this.z.Ds = q
        },
        enableCloseOnClick: function() {
            this.z.eD = o
        },
        disableCloseOnClick: function() {
            this.z.eD = q
        },
        dh: function() {
            this.z.dh = o
        },
        Uw: function() {
            this.z.dh = q
        },
        show: function() {
            this.Pa = o
        },
        U: function() {
            this.Pa = q
        },
        close: function() {
            this.U()
        },
        Tx: function() {
            this.ae = o
        },
        restore: function() {
            this.ae = q
        },
        mh: function() {
            return this.Va()
        },
        Va: ca(q),
        ha: function() {
            if (this.$a && this.$a.ha)
                return this.$a.ha()
        },
        Pf: function() {
            return this.z.ya
        }
    });
    Ka.prototype.Mb = function(a, b) {
        if (a instanceof qc && b instanceof H) {
            var c = this.R;
            c.Lm ? c.Lm.sa(b) : (c.Lm = new T(b,{
                icon: new nc(F.pa + "blank.gif",{
                    width: 1,
                    height: 1
                }),
                offset: new L(0,0),
                clickable: q
            }),
            c.Lm.AR = 1);
            this.Ia(c.Lm);
            c.Lm.Mb(a)
        }
    }
    ;
    Ka.prototype.Xc = function() {
        var a = this.R.nb || this.R.ll;
        a && a.$a && a.$a.Xc()
    }
    ;
    gb.prototype.Mb = function(a) {
        this.map && (this.map.Xc(),
        a.Pa = o,
        this.map.R.ll = a,
        a.$a = this,
        x.lang.Ba.call(a, a.ba))
    }
    ;
    gb.prototype.Xc = function() {
        this.map && this.map.R.ll && (this.map.R.ll.Pa = q,
        x.lang.Rw(this.map.R.ll.ba),
        this.map.R.ll = p)
    }
    ;
    function rc(a, b) {
        gb.call(this);
        this.content = a;
        this.V = this.map = p;
        b = b || {};
        this.z = {
            width: 0,
            ya: b.offset || new L(0,0),
            Rp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + F.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || p,
            ii: b.enableMassClear === q ? q : o,
            ff: o
        };
        0 > this.z.width && (this.z.width = 0);
        Gb(b.enableClicking) && (this.z.ff = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        I.load("marker", function() {
            c.wb()
        })
    }
    x.lang.ta(rc, gb, "Label");
    x.extend(rc.prototype, {
        ha: function() {
            return this.qv ? this.qv.ha() : this.point
        },
        sa: function(a) {
            a instanceof H && !this.ox() && (this.point = this.z.position = new H(a.lng,a.lat))
        },
        bd: ba("content"),
        uF: function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        Te: function(a) {
            a instanceof L && (this.z.ya = new L(a.width,a.height))
        },
        Pf: function() {
            return this.z.ya
        },
        Kd: function(a) {
            a = a || {};
            this.z.Rp = x.extend(this.z.Rp, a)
        },
        yi: function(a) {
            return this.Kd(a)
        },
        Dc: function(a) {
            this.z.title = a || ""
        },
        getTitle: function() {
            return this.z.title
        },
        ON: function(a) {
            this.point = (this.qv = a) ? this.z.position = a.ha() : this.z.position = p
        },
        ox: function() {
            return this.qv || p
        },
        uk: t("content")
    });
    function sc(a, b) {
        if (0 !== arguments.length) {
            gb.apply(this, arguments);
            b = b || {};
            this.z = {
                gb: a,
                opacity: b.opacity || 1,
                Em: b.Em || "",
                rs: b.displayOnMinLevel || 1,
                ii: b.enableMassClear === q ? q : o,
                qs: b.displayOnMaxLevel || 19,
                p_: b.stretch || q
            };
            var c = this;
            I.load("groundoverlay", function() {
                c.wb()
            })
        }
    }
    x.lang.ta(sc, gb, "GroundOverlay");
    x.extend(sc.prototype, {
        setBounds: function(a) {
            this.z.gb = a
        },
        getBounds: function() {
            return this.z.gb
        },
        setOpacity: function(a) {
            this.z.opacity = a
        },
        getOpacity: function() {
            return this.z.opacity
        },
        setImageURL: function(a) {
            this.z.Em = a
        },
        getImageURL: function() {
            return this.z.Em
        },
        setDisplayOnMinLevel: function(a) {
            this.z.rs = a
        },
        getDisplayOnMinLevel: function() {
            return this.z.rs
        },
        setDisplayOnMaxLevel: function(a) {
            this.z.qs = a
        },
        getDisplayOnMaxLevel: function() {
            return this.z.qs
        }
    });
    var tc = 3
      , uc = 4;
    function vc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }
    function wc(a, b) {
        var c = this;
        vc() && (a === j && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
        "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        gb.apply(c, arguments),
        c.da = {
            ia: a
        },
        c.z = {
            shape: b.shape || tc,
            size: b.size || uc,
            color: b.color || "#fa937e",
            ii: o
        },
        this.gB = [],
        this.ke = [],
        I.load("pointcollection", function() {
            for (var a = 0, b; b = c.gB[a]; a++)
                c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.ke[a]; a++)
                c[b.method].apply(c, b.arguments)
        }))
    }
    x.lang.ta(wc, gb, "PointCollection");
    x.extend(wc.prototype, {
        initialize: function(a) {
            this.gB && this.gB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.ke && this.ke.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.ke && this.ke.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.ke && this.ke.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.ke && this.ke.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var xc = new nc(F.pa + "marker_red_sprite.png",new L(19,25),{
        anchor: new L(10,25),
        infoWindowAnchor: new L(10,0)
    })
      , yc = new nc(F.pa + "marker_red_sprite.png",new L(20,11),{
        anchor: new L(6,11),
        imageOffset: new L(-19,-13)
    });
    function T(a, b) {
        gb.call(this);
        b = b || {};
        this.point = a;
        this.tq = this.map = p;
        this.z = {
            ya: b.offset || new L(0,0),
            vj: b.icon || xc,
            Nk: yc,
            title: b.title || "",
            label: p,
            WJ: b.baseZIndex || 0,
            ff: o,
            E4: q,
            vE: q,
            ii: b.enableMassClear === q ? q : o,
            Xb: q,
            uN: b.raiseOnDrag === o ? o : q,
            BN: q,
            Ed: b.draggingCursor || F.Ed,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.Nk = p);
        b.enableDragging && (this.z.Xb = b.enableDragging);
        Gb(b.enableClicking) && (this.z.ff = b.enableClicking);
        var c = this;
        I.load("marker", function() {
            c.wb()
        })
    }
    T.Fu = jc.ym(-90) + 1E6;
    T.kG = T.Fu + 1E6;
    x.lang.ta(T, gb, "Marker");
    x.extend(T.prototype, {
        Tb: function(a) {
            if (a instanceof nc || a instanceof oc)
                this.z.vj = a
        },
        Wo: function() {
            return this.z.vj
        },
        zy: function(a) {
            a instanceof nc && (this.z.Nk = a)
        },
        getShadow: function() {
            return this.z.Nk
        },
        fn: function(a) {
            this.z.label = a || p
        },
        MD: function() {
            return this.z.label
        },
        Xb: function() {
            this.z.Xb = o
        },
        KC: function() {
            this.z.Xb = q
        },
        ha: t("point"),
        sa: function(a) {
            a instanceof H && (this.point = new H(a.lng,a.lat))
        },
        zi: function(a, b) {
            this.z.vE = !!a;
            a && (this.GG = b || 0)
        },
        Dc: function(a) {
            this.z.title = a + ""
        },
        getTitle: function() {
            return this.z.title
        },
        Te: function(a) {
            a instanceof L && (this.z.ya = a)
        },
        Pf: function() {
            return this.z.ya
        },
        dn: ba("tq"),
        Lp: function(a) {
            this.z.rotation = a
        },
        yL: function() {
            return this.z.rotation
        }
    });
    function zc(a, b) {
        lc.call(this, b);
        b = b || {};
        this.z.qg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.ge(a);
        var c = this;
        I.load("poly", function() {
            c.wb()
        })
    }
    x.lang.ta(zc, lc, "Polygon");
    x.extend(zc.prototype, {
        ge: function(a, b) {
            this.ro = lc.ix(a).slice(0);
            var c = lc.ix(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng,c[0].lat));
            lc.prototype.ge.call(this, c, b)
        },
        hn: function(a, b) {
            this.ro[a] && (this.ro[a] = new H(b.lng,b.lat),
            this.ia[a] = new H(b.lng,b.lat),
            0 == a && !this.ia[0].mb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new H(b.lng,b.lat)),
            this.Eh())
        },
        pe: function() {
            var a = this.ro;
            0 == a.length && (a = this.ia);
            return a
        }
    });
    function Ac(a, b) {
        lc.call(this, b);
        this.Ir(a);
        var c = this;
        I.load("poly", function() {
            c.wb()
        })
    }
    x.lang.ta(Ac, lc, "Polyline");
    function Bc(a, b, c) {
        this.point = a;
        this.wa = Math.abs(b);
        zc.call(this, [], c)
    }
    Bc.QE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ta(Bc, zc, "Circle");
    x.extend(Bc.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ia = this.ev(this.point, this.wa);
            this.Eh();
            return p
        },
        Ja: t("point"),
        Vf: function(a) {
            a && (this.point = a)
        },
        wL: t("wa"),
        qf: function(a) {
            this.wa = Math.abs(a)
        },
        ev: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g
                  , k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i))
                  , i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new H(d.lng,d.lat));
            return c
        }
    });
    var Cc = {};
    function Dc(a) {
        this.map = a;
        this.Km = [];
        this.Wf = [];
        this.Eg = [];
        this.lV = 300;
        this.aF = 0;
        this.wg = {};
        this.fj = {};
        this.th = 0;
        this.pE = o;
        this.wK = {};
        this.ao = this.Mn(1);
        this.md = this.Mn(2);
        this.vl = this.Mn(3);
        a.platform.appendChild(this.ao);
        a.platform.appendChild(this.md);
        a.platform.appendChild(this.vl);
        var b = 256 * Math.pow(2, 15)
          , c = 3 * b
          , a = R.xb(new H(180,0)).lng
          , c = c - a
          , b = -3 * b
          , d = R.xb(new H(-180,0)).lng;
        this.hI = a;
        this.iI = d;
        this.NA = c + (d - b);
        this.jI = a - d
    }
    z.Se(function(a) {
        var b = new Dc(a);
        b.qa();
        a.bb = b
    });
    x.extend(Dc.prototype, {
        qa: function() {
            var a = this
              , b = a.map;
            b.addEventListener("loadcode", function() {
                a.Qx()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Yg(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.zh(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Bg(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Lc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.Nt(b.target);
                a.Tf(o)
            })
        },
        Qx: function() {
            var a = this;
            if (x.ea.la)
                try {
                    document.execCommand("BackgroundImageCache", q, o)
                } catch (b) {}
            this.loaded || a.Gx();
            a.Tf();
            this.loaded || (this.loaded = o,
            I.load("tile", function() {
                a.TP()
            }))
        },
        Gx: function() {
            for (var a = this.map.oa().jr, b = 0; b < a.length; b++) {
                var c = new Ec;
                x.extend(c, a[b]);
                this.Km.push(c);
                c.qa(this.map, this.ao)
            }
            this.Nt()
        },
        Mn: function(a) {
            var b = K("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        vf: function() {
            this.th--;
            var a = this;
            this.pE && (this.map.dispatchEvent(new N("onfirsttileloaded")),
            this.pE = q);
            0 == this.th && (this.Ni && (clearTimeout(this.Ni),
            this.Ni = p),
            this.Ni = setTimeout(function() {
                if (a.th == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    a.pE = o
                }
                a.Ni = p
            }, 80))
        },
        XD: function(a, b) {
            return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ex: function(a) {
            var b = a.Gb;
            b && yb(b) && b.parentNode.removeChild(b);
            delete this.wg[a.name];
            a.loaded || (Fc(a),
            a.Gb = p,
            a.Nm = p)
        },
        xm: function(a, b, c) {
            var d = this.map
              , e = d.oa()
              , f = d.Ka
              , g = d.lc
              , i = e.Bc(f)
              , k = this.lL()
              , l = k[0]
              , m = k[1]
              , n = k[2]
              , u = k[3]
              , v = k[4]
              , c = "undefined" != typeof c ? c : 0
              , e = e.k.Ob
              , k = d.ba.replace(/^TANGRAM_/, "");
            for (this.Rc ? this.Rc.length = 0 : this.Rc = []; l < n; l++)
                for (var w = m; w < u; w++) {
                    var y = l
                      , C = w;
                    this.Rc.push([y, C]);
                    y = k + "_" + b + "_" + y + "_" + C + "_" + f;
                    this.wK[y] = y
                }
            this.Rc.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([v[0] - 1, v[1] - 1]));
            g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.Ke ? this.Ke.length = 0 : this.Ke = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++)
                w = a.childNodes[l],
                w.fr = q,
                this.Ke.push(w);
            if (l = this.Qm)
                for (var A in l)
                    delete l[A];
            else
                this.Qm = {};
            this.Le ? this.Le.length = 0 : this.Le = [];
            l = 0;
            for (d = this.Rc.length; l < d; l++) {
                A = this.Rc[l][0];
                i = this.Rc[l][1];
                w = 0;
                for (m = this.Ke.length; w < m; w++)
                    if (n = this.Ke[w],
                    n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                        n.fr = o;
                        this.Qm[n.id] = n;
                        break
                    }
            }
            l = 0;
            for (d = this.Ke.length; l < d; l++)
                n = this.Ke[l],
                n.fr || this.Le.push(n);
            this.nn = [];
            w = (e + c) * this.map.K.devicePixelRatio;
            l = 0;
            for (d = this.Rc.length; l < d; l++)
                A = this.Rc[l][0],
                i = this.Rc[l][1],
                u = A * e + g[0] - c / 2,
                v = (-1 - i) * e + g[1] - c / 2,
                y = k + "_" + b + "_" + A + "_" + i + "_" + f,
                m = this.Qm[y],
                n = p,
                m ? (n = m.style,
                n.left = u + "px",
                n.top = v + "px",
                m.Xe || this.nn.push([A, i, m])) : (0 < this.Le.length ? (m = this.Le.shift(),
                m.getContext("2d").clearRect(-c / 2, -c / 2, w, w),
                n = m.style) : (m = document.createElement("canvas"),
                n = m.style,
                n.position = "absolute",
                n.width = e + c + "px",
                n.height = e + c + "px",
                this.Lx() && (n.WebkitTransform = "scale(1.001)"),
                m.setAttribute("width", w),
                m.setAttribute("height", w),
                a.appendChild(m)),
                m.id = y,
                n.left = u + "px",
                n.top = v + "px",
                -1 < y.indexOf("bg") && (u = "#F3F1EC",
                this.map.K.zo && (u = this.map.K.zo),
                n.background = u ? u : ""),
                this.nn.push([A, i, m])),
                m.style.visibility = "";
            l = 0;
            for (d = this.Le.length; l < d; l++)
                this.Le[l].style.visibility = "hidden";
            return this.nn
        },
        Lx: function() {
            return /M040/i.test(navigator.userAgent)
        },
        lL: function() {
            var a = this.map
              , b = a.oa()
              , c = b.bE(a.Ka)
              , d = a.lc
              , e = Math.ceil(d.lng / c)
              , f = Math.ceil(d.lat / c)
              , b = b.k.Ob
              , c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        k_: function(a, b, c, d) {
            var e = this;
            e.s1 = b;
            var f = this.map.oa()
              , g = e.XD(a, c)
              , i = f.k.Ob
              , b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]]
              , k = this.wg[g];
            if (this.map.oa() !== Xa && this.map.oa() !== Ra) {
                var l = this.xw(a[0], a[2]).offsetX;
                b[0] += l;
                b.Q0 = l
            }
            k && k.Gb ? (wb(k.Gb, b),
            d && (d = new Q(a[0],a[1]),
            f = this.map.K.te ? this.map.K.te.style : "normal",
            d = c.getTilesUrl(d, a[2], f),
            k.loaded = q,
            Gc(k, d)),
            k.loaded ? this.vf() : Hc(k, function() {
                e.vf()
            })) : (k = this.fj[g]) && k.Gb ? (c.Pb.insertBefore(k.Gb, c.Pb.lastChild),
            this.wg[g] = k,
            wb(k.Gb, b),
            d && (d = new Q(a[0],a[1]),
            f = this.map.K.te ? this.map.K.te.style : "normal",
            d = c.getTilesUrl(d, a[2], f),
            k.loaded = q,
            Gc(k, d)),
            k.loaded ? this.vf() : Hc(k, function() {
                e.vf()
            })) : (k = i * Math.pow(2, f.qm() - a[2]),
            new H(a[0] * k,a[1] * k),
            d = new Q(a[0],a[1]),
            f = this.map.K.te ? this.map.K.te.style : "normal",
            d = c.getTilesUrl(d, a[2], f),
            k = new Ic(this,d,b,a,c),
            Hc(k, function() {
                e.vf()
            }),
            k.$n(),
            this.wg[g] = k)
        },
        vf: function() {
            this.th--;
            var a = this;
            0 == this.th && (this.Ni && (clearTimeout(this.Ni),
            this.Ni = p),
            this.Ni = setTimeout(function() {
                if (a.th == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    if (ta) {
                        if (qa && ra && sa) {
                            var b = ab()
                              , c = a.map.yb();
                            setTimeout(function() {
                                Pa(5030, {
                                    load_script_time: ra - qa,
                                    load_tiles_time: b - sa,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            ua.pc("img_fisrt_loaded");
                            ua.pc("map_width", c.width);
                            ua.pc("map_height", c.height);
                            ua.pc("map_size", c.width * c.height);
                            ua.Xm();
                            z.Ij("cus.fire", "time", {
                                z_imgfirstloaded: b - sa
                            })
                        }
                        ta = q
                    }
                }
                a.Ni = p
            }, 80))
        },
        XD: function(a, b) {
            return this.map.oa() === Oa ? "TILE-" + b.ba + "-" + this.map.Cw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ex: function(a) {
            var b = a.Gb;
            b && (Jc(b),
            yb(b) && b.parentNode.removeChild(b));
            delete this.wg[a.name];
            a.loaded || (Jc(b),
            Fc(a),
            a.Gb = p,
            a.Nm = p)
        },
        xw: function(a, b) {
            for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e; )
                a -= d,
                c -= this.NA;
            for (; a < f; )
                a += d,
                c += this.NA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                Fw: a
            }
        },
        nV: function(a) {
            for (var b = a.lng; b > this.hI; )
                b -= this.jI;
            for (; b < this.iI; )
                b += this.jI;
            a.lng = b;
            return a
        },
        oV: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.hI / c), e = Math.floor(this.iI / c), c = Math.floor(this.NA / c), f = [], g = 0; g < a.length; g++) {
                var i = a[g]
                  , k = i[0]
                  , i = i[1];
                if (k >= d) {
                    var k = k + c
                      , l = "id_" + k + "_" + i + "_" + b;
                    a[l] || (a[l] = o,
                    f.push([k, i]))
                } else
                    k <= e && (k -= c,
                    l = "id_" + k + "_" + i + "_" + b,
                    a[l] || (a[l] = o,
                    f.push([k, i])))
            }
            for (g = 0; g < f.length; g++)
                a.push(f[g]);
            return a
        },
        Tf: function(a) {
            var b = this;
            if (b.map.oa() == Oa)
                I.load("coordtrans", function() {
                    b.map.Vb || (b.map.Vb = Oa.tk(b.map.$g),
                    b.map.Cw = Oa.jL(b.map.Vb));
                    b.lI()
                }, o);
            else {
                if (a && a)
                    for (var c in this.fj)
                        delete this.fj[c];
                b.lI(a)
            }
        },
        lI: function(a) {
            var b = this.Km.concat(this.Wf)
              , c = b.length
              , d = this.map
              , e = d.oa()
              , f = d.lc;
            this.map.oa() !== Xa && this.map.oa() !== Ra && (f = this.nV(f));
            for (var g = 0; g < c; g++) {
                var i = b[g];
                if (i.fc && d.Ka < i.fc)
                    break;
                if (i.vw) {
                    var k = this.Pb = i.Pb;
                    if (a) {
                        var l = k;
                        if (l && l.childNodes)
                            for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--)
                                m = l.childNodes[n],
                                l.removeChild(m),
                                m = p
                    }
                    if (this.map.Ub()) {
                        this.md.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new N("vectorchanged"), {
                            isvector: o
                        });
                        continue
                    } else
                        k.style.display = "block",
                        this.md.style.display = "none",
                        this.map.dispatchEvent(new N("vectorchanged"), {
                            isvector: q
                        })
                }
                if (!i.ZH && !(i.mp && !this.map.Ub() || i.iM && this.map.Ub())) {
                    d = this.map;
                    e = d.oa();
                    k = e.bp();
                    m = d.Ka;
                    f = d.lc;
                    e == Oa && f.mb(new H(0,0)) && (f = d.lc = k.Jm(d.ef, d.Vb));
                    var u = e.Bc(m)
                      , k = e.bE(m)
                      , l = Math.ceil(f.lng / k)
                      , v = Math.ceil(f.lat / k)
                      , w = e.k.Ob
                      , k = [l, v, (f.lng - l * k) / k * w, (f.lat - v * k) / k * w]
                      , n = k[0] - Math.ceil((d.width / 2 - k[2]) / w)
                      , l = k[1] - Math.ceil((d.height / 2 - k[3]) / w)
                      , v = k[0] + Math.ceil((d.width / 2 + k[2]) / w)
                      , y = 0;
                    e === Oa && 15 == d.fa() && (y = 1);
                    e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
                    this.RJ = new H(f.lng,f.lat);
                    var C = this.wg, w = -this.RJ.lng / u, y = this.RJ.lat / u, u = [Math.ceil(w), Math.ceil(y)], f = d.fa(), A;
                    for (A in C) {
                        var B = C[A]
                          , D = B.info;
                        (D[2] != f || D[2] == f && (n > D[0] || v <= D[0] || l > D[1] || e <= D[1])) && this.Ex(B)
                    }
                    C = -d.offsetX + d.width / 2;
                    B = -d.offsetY + d.height / 2;
                    i.Pb && (i.Pb.style.left = Math.ceil(w + C) - u[0] + "px",
                    i.Pb.style.top = Math.ceil(y + B) - u[1] + "px",
                    i.Pb.style.WebkitTransform = "translate3d(0,0,0)");
                    w = [];
                    for (d.LB = []; n < v; n++)
                        for (y = l; y < e; y++)
                            w.push([n, y]),
                            d.LB.push({
                                x: n,
                                y: y
                            });
                    this.map.oa() !== Xa && this.map.oa() !== Ra && (w = this.oV(w, m));
                    w.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([k[0] - 1, k[1] - 1]));
                    m = w.length;
                    this.th += m;
                    for (n = 0; n < m; n++)
                        this.k_([w[n][0], w[n][1], f], u, i, a)
                }
            }
        },
        Yg: function(a) {
            var b = this
              , c = a.target
              , a = b.map.Ub();
            if (c instanceof db)
                a && !c.Fm && (c.qa(this.map, this.md),
                c.Fm = o);
            else if (c.Xf && this.map.Yg(c.Xf),
            c.mp) {
                for (a = 0; a < b.Eg.length; a++)
                    if (b.Eg[a] == c)
                        return;
                I.load("vector", function() {
                    c.qa(b.map, b.md);
                    b.Eg.push(c)
                }, o)
            } else {
                for (a = 0; a < b.Wf.length; a++)
                    if (b.Wf[a] == c)
                        return;
                c.qa(this.map, this.vl);
                b.Wf.push(c)
            }
        },
        zh: function(a) {
            var a = a.target
              , b = this.map.Ub();
            if (a instanceof db)
                b && a.Fm && (a.remove(),
                a.Fm = q);
            else {
                a.Xf && this.map.zh(a.Xf);
                if (a.mp)
                    for (var b = 0, c = this.Eg.length; b < c; b++)
                        a == this.Eg[b] && this.Eg.splice(b, 1);
                else {
                    b = 0;
                    for (c = this.Wf.length; b < c; b++)
                        a == this.Wf[b] && this.Wf.splice(b, 1)
                }
                a.remove()
            }
        },
        Bg: function() {
            for (var a = this.Km, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Pb;
            this.Km = [];
            this.fj = this.wg = {};
            this.Gx();
            this.Tf()
        },
        Lc: function() {
            var a = this;
            a.ud && x.D.U(a.ud);
            setTimeout(function() {
                a.Tf();
                a.map.dispatchEvent(new N("onzoomend"))
            }, 10)
        },
        t4: s(),
        Nt: function(a) {
            var b = this.map.oa();
            if (!this.map.Ub() && (a ? this.map.K.s_ = a : a = this.map.K.s_,
            a))
                for (var c = p, c = "2" == z.ou ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Km[d]; d++)
                    if (e.f_ == o) {
                        b.k.Zb = 18;
                        e.getTilesUrl = function(b, d) {
                            var e = b.x
                              , e = this.map.bb.xw(e, d).Fw
                              , k = b.y
                              , l = 1;
                            this.map.dE() && (l = 2);
                            l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=20150629&scale=" + l;
                            l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                            return c[Math.abs(e + k) % c.length] + l
                        }
                        ;
                        break
                    }
        }
    });
    function Ic(a, b, c, d, e) {
        this.Nm = a;
        this.position = c;
        this.Qu = [];
        this.name = a.XD(d, e);
        this.info = d;
        this.oJ = e.lt();
        d = K("img");
        xb(d);
        d.cL = q;
        var f = d.style
          , a = a.map.oa();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.Ob + "px";
        f.height = a.k.Ob + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.Gb = d;
        this.src = b;
        Kc && (this.Gb.style.opacity = 0);
        var g = this;
        this.Gb.onload = function() {
            z.BY.FQ();
            g.loaded = o;
            if (g.Nm) {
                var a = g.Nm
                  , b = a.fj;
                if (!b[g.name]) {
                    a.aF++;
                    b[g.name] = g
                }
                if (g.Gb && !yb(g.Gb) && e.Pb) {
                    e.Pb.appendChild(g.Gb);
                    if (x.ea.la <= 6 && x.ea.la > 0 && g.oJ)
                        g.Gb.style.cssText = g.Gb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.aF - a.lV, d;
                for (d in b) {
                    if (c <= 0)
                        break;
                    if (!a.wg[d]) {
                        b[d].Nm = p;
                        var f = b[d].Gb;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            Jc(f)
                        }
                        f = p;
                        b[d].Gb = p;
                        delete b[d];
                        a.aF--;
                        c--
                    }
                }
                Kc && new sb({
                    Ic: 20,
                    duration: 200,
                    ua: function(a) {
                        if (g.Gb && g.Gb.style)
                            g.Gb.style.opacity = a * 1
                    },
                    finish: function() {
                        g.Gb && g.Gb.style && delete g.Gb.style.opacity
                    }
                });
                Fc(g)
            }
        }
        ;
        this.Gb.onerror = function() {
            Fc(g);
            if (g.Nm) {
                var a = g.Nm.map.oa();
                if (a.k.mD) {
                    g.error = o;
                    g.Gb.src = a.k.mD;
                    g.Gb && !yb(g.Gb) && e.Pb.appendChild(g.Gb)
                }
            }
        }
        ;
        d = p
    }
    function Hc(a, b) {
        a.Qu.push(b)
    }
    Ic.prototype.$n = function() {
        this.Gb.src = 0 < x.ea.la && 6 >= x.ea.la && this.oJ ? F.pa + "blank.gif" : "" !== this.src && this.Gb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function Fc(a) {
        for (var b = 0; b < a.Qu.length; b++)
            a.Qu[b]();
        a.Qu.length = 0
    }
    function Jc(a) {
        if (a) {
            a.onload = a.onerror = p;
            var b = a.attributes, c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1)
                    e = b[c].name,
                    Wa(a[e]) && (a[e] = p)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1)
                    Jc(a.children[c])
            }
        }
    }
    function Gc(a, b) {
        a.src = b;
        a.$n()
    }
    var Kc = !x.ea.la || 8 < x.ea.la;
    function Ec(a) {
        this.uh = a || {};
        this.IV = this.uh.copyright || p;
        this.R_ = this.uh.transparentPng || q;
        this.vw = this.uh.baseLayer || q;
        this.zIndex = this.uh.zIndex || 0;
        this.ba = Ec.tS++
    }
    Ec.tS = 0;
    x.lang.ta(Ec, x.lang.Ba, "TileLayer");
    x.extend(Ec.prototype, {
        qa: function(a, b) {
            this.vw && (this.zIndex = -100);
            this.map = a;
            if (!this.Pb) {
                var c = K("div")
                  , d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Pb = c
            }
        },
        remove: function() {
            this.Pb && this.Pb.parentNode && (this.Pb.innerHTML = "",
            this.Pb.parentNode.removeChild(this.Pb));
            delete this.Pb
        },
        lt: t("R_"),
        getTilesUrl: function(a, b) {
            if (this.map.oa() !== Xa && this.map.oa() !== Ra)
                var c = this.map.bb.xw(a.x, b).Fw;
            var d = "";
            this.uh.tileUrlTemplate && (d = this.uh.tileUrlTemplate.replace(/\{X\}/, c),
            d = d.replace(/\{Y\}/, a.y),
            d = d.replace(/\{Z\}/, b));
            return d
        },
        om: t("IV"),
        oa: function() {
            return this.Hb || La
        }
    });
    function Lc(a, b) {
        Hb(a) ? b = a || {} : (b = b || {},
        b.databoxId = a);
        this.k = {
            xK: b.databoxId,
            fh: b.geotableId,
            Wm: b.q || "",
            eu: b.tags || "",
            filter: b.filter || "",
            Gy: b.sortby || "",
            q_: b.styleId || "",
            Sl: b.ak || pa,
            sw: b.age || 36E5,
            zIndex: 11,
            wY: "VectorCloudLayer",
            Bk: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            SU: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.mp = o;
        Ec.call(this, this.k);
        this.aW = z.Hc + "geosearch/detail/";
        this.bW = z.Hc + "geosearch/v2/detail/";
        this.ip = {}
    }
    x.ta(Lc, Ec, "VectorCloudLayer");
    function Mc(a) {
        a = a || {};
        this.k = x.extend(a, {
            zIndex: 1,
            wY: "VectorTrafficLayer",
            SU: "\u77e2\u91cf\u8def\u51b5\u5c42"
        });
        this.mp = o;
        Ec.call(this, this.k);
        this.N_ = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.Db = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    x.ta(Mc, Ec, "VectorTrafficLayer");
    function db(a) {
        this.mV = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
        this.k = {
            ZK: q
        };
        for (var b in a)
            this.k[b] = a[b];
        this.Yh = this.Ih = this.Wa = this.B = this.C = p;
        this.nM = 0;
        var c = this;
        I.load("vector", function() {
            c.ye()
        })
    }
    x.extend(db.prototype, {
        qa: function(a, b) {
            this.C = a;
            this.B = b
        },
        remove: function() {
            this.B = this.C = p
        }
    });
    function Nc(a) {
        Ec.call(this, a);
        this.k = a || {};
        this.iM = o;
        this.Xf = new Mc;
        this.Xf.My = this;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)
                this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)
                this.k.predictDate.hour = 0
        }
        this.wU = z.url.proto + z.url.domain.traffic + "/traffic/"
    }
    Nc.prototype = new Ec;
    Nc.prototype.qa = function(a, b) {
        Ec.prototype.qa.call(this, a, b);
        this.C = a
    }
    ;
    Nc.prototype.lt = ca(o);
    Nc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
        return (this.wU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Oc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Pc = z.url.proto + z.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Qc = 100;
    function nb(a, b) {
        Ec.call(this);
        var c = this;
        this.iM = o;
        var d = q;
        try {
            document.createElement("canvas").getContext("2d"),
            d = o
        } catch (e) {
            d = q
        }
        d && (this.Xf = new Lc(a,b),
        this.Xf.My = this);
        Hb(a) ? b = a || {} : (c.Pn = a,
        b = b || {});
        b.geotableId && (c.xf = b.geotableId);
        b.databoxId && (c.Pn = b.databoxId);
        d = z.Hc + "geosearch";
        c.oc = {
            qN: b.pointDensity || Qc,
            VX: d + "/detail/",
            WX: d + "/v2/detail/",
            sw: b.age || 36E5,
            Wm: b.q || "",
            A_: "png",
            P2: [5, 5, 5, 5],
            vY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            Sl: b.ak || pa,
            eu: b.tags || "",
            filter: b.filter || "",
            Gy: b.sortby || "",
            Bk: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            PF: o
        };
        I.load("clayer", function() {
            c.Od()
        })
    }
    nb.prototype = new Ec;
    nb.prototype.qa = function(a, b) {
        Ec.prototype.qa.call(this, a, b);
        this.C = a
    }
    ;
    nb.prototype.getTilesUrl = function(a, b) {
        var c = a.x
          , d = a.y
          , e = this.oc
          , c = Oc[Math.abs(c + d) % Oc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Wm + "&tags=" + e.eu + "&filter=" + e.filter + "&sortby=" + e.Gy + "&ak=" + this.oc.Sl + "&age=" + e.sw + "&page_size=" + e.qN + "&format=" + e.A_;
        e.PF || (e = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + e);
        this.xf ? c += "&geotable_id=" + this.xf : this.Pn && (c += "&databox_id=" + this.Pn);
        return c
    }
    ;
    nb.prototype.enableUseCache = function() {
        this.oc.PF = o
    }
    ;
    nb.prototype.disableUseCache = function() {
        this.oc.PF = q
    }
    ;
    nb.UT = /^point\(|\)$/ig;
    nb.VT = /\s+/;
    nb.XT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function Rc(a, b, c) {
        this.af = a;
        this.jr = b instanceof Ec ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            B_: c.tips || "",
            AE: "",
            fc: c.minZoom || 3,
            Zb: c.maxZoom || 18,
            O2: c.minZoom || 3,
            N2: c.maxZoom || 18,
            Ob: 256,
            GF: c.textColor || "black",
            mD: c.errorImageUrl || "",
            we: c.projection || new R
        };
        1 <= this.jr.length && (this.jr[0].vw = o);
        x.extend(this.k, c)
    }
    x.extend(Rc.prototype, {
        getName: t("af"),
        Ys: function() {
            return this.k.B_
        },
        t2: function() {
            return this.k.AE
        },
        IX: function() {
            return this.jr[0]
        },
        H2: t("jr"),
        JX: function() {
            return this.k.Ob
        },
        Xo: function() {
            return this.k.fc
        },
        qm: function() {
            return this.k.Zb
        },
        setMaxZoom: function(a) {
            this.k.Zb = a
        },
        wm: function() {
            return this.k.GF
        },
        bp: function() {
            return this.k.we
        },
        k2: function() {
            return this.k.mD
        },
        JX: function() {
            return this.k.Ob
        },
        Bc: function(a) {
            return Math.pow(2, 18 - a)
        },
        bE: function(a) {
            return this.Bc(a) * this.k.Ob
        }
    });
    var Sc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"]
      , Tc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/tile/"]
      , Uc = {
        dark: "dl",
        light: "ll",
        normal: "pl"
    }
      , Vc = new Ec;
    Vc.f_ = o;
    Vc.getTilesUrl = function(a, b, c) {
        var d = a.x
          , a = a.y
          , e = 1
          , c = Uc[c];
        this.map.dE() && (e = 2);
        d = this.map.bb.xw(d, b).Fw;
        return (Tc[Math.abs(d + a) % Tc.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + e + (6 == x.ea.la ? "&color_dep=32&colors=50" : "") + "&udt=20160730").replace(/-(\d+)/gi, "M$1")
    }
    ;
    var La = new Rc("\u5730\u56fe",Vc,{
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    })
      , Wc = new Ec;
    Wc.lO = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Wc.getTilesUrl = function(a, b) {
        var c = a.x
          , d = a.y
          , e = 256 * Math.pow(2, 20 - b)
          , d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.lO[Math.abs(c + d) % this.lO.length] + this.map.Vb + "/" + this.map.Cw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    }
    ;
    var Oa = new Rc("\u4e09\u7ef4",Wc,{
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new hb
    });
    Oa.Bc = function(a) {
        return Math.pow(2, 20 - a)
    }
    ;
    Oa.tk = function(a) {
        if (!a)
            return "";
        var b = F.gC, c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].iy;
        return ""
    }
    ;
    Oa.jL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    }
    ;
    var Xc = new Ec({
        vw: o
    });
    Xc.getTilesUrl = function(a, b) {
        var c = a.x
          , d = a.y;
        return (Sc[Math.abs(c + d) % Sc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=20141015").replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Xa = new Rc("\u536b\u661f",Xc,{
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    })
      , Yc = new Ec({
        transparentPng: o
    });
    Yc.getTilesUrl = function(a, b) {
        var c = a.x
          , d = a.y;
        return (Tc[Math.abs(c + d) % Tc.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.ea.la ? "&color_dep=32&colors=50" : "") + "&udt=20141015").replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Ra = new Rc("\u6df7\u5408",[Xc, Yc],{
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var Zc = 1
      , U = {};
    window.n0 = U;
    function V(a, b) {
        x.lang.Ba.call(this);
        this.zd = {};
        this.gn(a);
        b = b || {};
        b.ka = b.renderOptions || {};
        this.k = {
            ka: {
                Ga: b.ka.panel || p,
                map: b.ka.map || p,
                Zg: b.ka.autoViewport || o,
                It: b.ka.selectFirstResult,
                bt: b.ka.highlightMode,
                Xb: b.ka.enableDragging || q
            },
            ay: b.onSearchComplete || s(),
            cN: b.onMarkersSet || s(),
            bN: b.onInfoHtmlSet || s(),
            eN: b.onResultsHtmlSet || s(),
            aN: b.onGetBusListComplete || s(),
            $M: b.onGetBusLineComplete || s(),
            YM: b.onBusListHtmlSet || s(),
            XM: b.onBusLineHtmlSet || s(),
            NE: b.onPolylinesSet || s(),
            Ap: b.reqFrom || ""
        };
        this.k.ka.Zg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
        this.k.ka.Ga = x.Ec(this.k.ka.Ga)
    }
    x.ta(V, x.lang.Ba);
    x.extend(V.prototype, {
        getResults: function() {
            return this.Gc ? this.Ki : this.ja
        },
        enableAutoViewport: function() {
            this.k.ka.Zg = o
        },
        disableAutoViewport: function() {
            this.k.ka.Zg = q
        },
        gn: function(a) {
            a && (this.zd.src = a)
        },
        wF: function(a) {
            this.k.ay = a || s()
        },
        setMarkersSetCallback: function(a) {
            this.k.cN = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.NE = a || s()
        },
        setInfoHtmlSetCallback: function(a) {
            this.k.bN = a || s()
        },
        setResultsHtmlSetCallback: function(a) {
            this.k.eN = a || s()
        },
        um: t("Bd")
    });
    var $c = {
        tG: z.Hc,
        ab: function(a, b, c, d, e) {
            var f = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + f] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                a && a(b, c),
                delete z._rd["_cbk" + f])
            }
            ;
            d = d || "";
            b = c && c.FO ? Fb(b, encodeURI) : Fb(b, encodeURIComponent);
            this.tG = c && c.Fs ? c.AN ? c.AN : z.qp : z.Hc;
            d = this.tG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + pa);
            Qb(d)
        }
    };
    window.u0 = $c;
    z._rd = {};
    var P = {};
    window.t0 = P;
    P.wN = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    P.bZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    P.cZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var ad = 2
      , bd = 3
      , dd = 0
      , ed = "bt"
      , fd = "nav"
      , gd = "walk"
      , hd = "bl"
      , id = "bsl"
      , jd = 14
      , kd = 15
      , ld = 18
      , md = 20
      , nd = 31;
    z.I = window.Instance = x.lang.Mc;
    function od(a, b, c) {
        x.lang.Ba.call(this);
        if (a) {
            this.Ua = "object" == typeof a ? a : x.Ec(a);
            this.page = 1;
            this.Id = 100;
            this.SJ = "pg";
            this.Uf = 4;
            this.$J = b;
            this.update = o;
            a = {
                page: 1,
                Ue: 100,
                Id: 100,
                Uf: 4,
                SJ: "pg",
                update: o
            };
            c || (c = a);
            for (var d in c)
                "undefined" != typeof c[d] && (this[d] = c[d]);
            this.ua()
        }
    }
    x.extend(od.prototype, {
        ua: function() {
            this.qa()
        },
        qa: function() {
            this.uV();
            this.Ua.innerHTML = this.QV()
        },
        uV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Id)) && (this.Id = 1);
            1 > this.page && (this.page = 1);
            1 > this.Id && (this.Id = 1);
            this.page > this.Id && (this.page = this.Id);
            this.page = parseInt(this.page);
            this.Id = parseInt(this.Id)
        },
        y2: function() {
            location.search.match(RegExp("[?&]?" + this.SJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        QV: function() {
            var a = []
              , b = this.page - 1
              , c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Uf) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
            }
            if (this.page < this.Uf)
                d = 0 == this.page % this.Uf ? this.page - this.Uf - 1 : this.page - this.page % this.Uf + 1,
                b = d + this.Uf - 1;
            else {
                d = Math.floor(this.Uf / 2);
                var e = this.Uf % 2 - 1
                  , b = this.Id > this.page + d ? this.page + d : this.Id;
                d = this.page - d - e
            }
            this.page > this.Id - this.Uf && this.page >= this.Uf && (d = this.Id - this.Uf + 1,
            b = this.Id);
            for (e = d; e <= b; e++)
                0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Id && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>",
                a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
            c > this.Id || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.$J && (this.$J(a),
            this.page = a);
            this.update && this.ua()
        }
    });
    function bb(a, b) {
        V.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Kp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.LC() : this.hD();
        this.va = [];
        this.sf = [];
        this.jb = -1;
        this.Oa = [];
        var c = this;
        I.load("local", function() {
            c.Bz()
        }, o)
    }
    x.ta(bb, V, "LocalSearch");
    bb.aq = 10;
    bb.r0 = 1;
    bb.Cn = 100;
    bb.jG = 2E3;
    bb.qG = 1E5;
    x.extend(bb.prototype, {
        search: function(a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        bn: function(a, b, c) {
            this.Oa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Gp: function(a, b, c, d) {
            this.Oa.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        Me: function() {
            delete this.Ea;
            delete this.Bd;
            delete this.ja;
            delete this.ga;
            this.jb = -1;
            this.rb();
            this.k.ka.Ga && (this.k.ka.Ga.innerHTML = "")
        },
        zm: s(),
        hD: function() {
            this.k.ka.It = o
        },
        LC: function() {
            this.k.ka.It = q
        },
        Kp: function(a) {
            this.k.Fk = "number" == typeof a && !isNaN(a) ? 1 > a ? bb.aq : a > bb.Cn ? bb.aq : a : bb.aq
        },
        lf: function() {
            return this.k.Fk
        },
        toString: ca("LocalSearch")
    });
    var pd = bb.prototype;
    S(pd, {
        clearResults: pd.Me,
        setPageCapacity: pd.Kp,
        getPageCapacity: pd.lf,
        gotoPage: pd.zm,
        searchNearby: pd.Gp,
        searchInBounds: pd.bn,
        search: pd.search,
        enableFirstResultSelection: pd.hD,
        disableFirstResultSelection: pd.LC
    });
    function qd(a, b) {
        V.call(this, a, b)
    }
    x.ta(qd, V, "BaseRoute");
    x.extend(qd.prototype, {
        Me: s()
    });
    function rd(a, b) {
        V.call(this, a, b);
        b = b || {};
        this.Qt(b.policy);
        this.Kp(b.pageCapacity);
        this.vd = ed;
        this.Bu = jd;
        this.Cu = Zc;
        this.va = [];
        this.jb = -1;
        this.k.fd = b.enableTraffic || q;
        this.Oa = [];
        var c = this;
        I.load("route", function() {
            c.Od()
        })
    }
    rd.Cn = 100;
    rd.kP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ta(rd, qd, "TransitRoute");
    x.extend(rd.prototype, {
        Qt: function(a) {
            this.k.ad = 0 <= a && 4 >= a ? a : 0
        },
        BA: function(a, b) {
            this.Oa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Kp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
            isNaN(a))) {
                this.k.Fk = rd.Cn;
                return
            }
            this.k.Fk = "number" !== typeof a ? rd.Cn : 1 <= a && a <= rd.Cn ? Math.round(a) : rd.Cn
        },
        toString: ca("TransitRoute"),
        iU: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var sd = rd.prototype;
    S(sd, {
        _internalSearch: sd.BA
    });
    function td(a, b) {
        V.call(this, a, b);
        this.va = [];
        this.jb = -1;
        this.Oa = [];
        var c = this
          , d = this.k.ka;
        1 !== d.bt && 2 !== d.bt && (d.bt = 1);
        this.Vz = this.k.ka.Xb ? o : q;
        I.load("route", function() {
            c.Od()
        });
        this.mE && this.mE()
    }
    td.xP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.ta(td, qd, "DWRoute");
    x.extend(td.prototype, {
        search: function(a, b, c) {
            this.Oa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });
    function ud(a, b) {
        td.call(this, a, b);
        b = b || {};
        this.k.fd = b.enableTraffic || q;
        this.Qt(b.policy);
        this.vd = fd;
        this.Bu = md;
        this.Cu = bd
    }
    x.ta(ud, td, "DrivingRoute");
    ud.prototype.Qt = function(a) {
        this.k.ad = 0 <= a && 2 >= a ? a : 0
    }
    ;
    function vd(a, b) {
        td.call(this, a, b);
        this.vd = gd;
        this.Bu = nd;
        this.Cu = ad;
        this.Vz = q
    }
    x.ta(vd, td, "WalkingRoute");
    function wd(a, b) {
        x.lang.Ba.call(this);
        this.Sf = [];
        this.Tm = [];
        this.k = b;
        this.dc = a;
        this.map = this.k.ka.map || p;
        this.ty = this.k.ty;
        this.zb = p;
        this.hj = 0;
        this.Hy = "";
        this.$d = 1;
        this.$w = "";
        this.Bp = [0, 0, 0, 0, 0, 0, 0];
        this.CE = [];
        this.fs = [1, 1, 1, 1, 1, 1, 1];
        this.tO = [1, 1, 1, 1, 1, 1, 1];
        this.Gt = [0, 0, 0, 0, 0, 0, 0];
        this.Cp = [0, 0, 0, 0, 0, 0, 0];
        this.Ma = [{
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }, {
            o: "",
            Lf: 0,
            tn: 0,
            x: 0,
            y: 0,
            Ac: -1
        }];
        this.fi = -1;
        this.gu = [];
        this.hu = [];
        I.load("route", s())
    }
    x.lang.ta(wd, x.lang.Ba, "RouteAddr");
    var xd = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(xd);
    var yd = /android/i.test(xd);
    function zd(a) {
        this.uh = a || {}
    }
    x.extend(zd.prototype, {
        GN: function(a, b, c) {
            var d = this;
            I.load("route", function() {
                d.Od(a, b, c)
            })
        }
    });
    function Ad(a) {
        this.k = {};
        x.extend(this.k, a);
        this.Oa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Od()
        })
    }
    x.ta(Ad, x.lang.Ba, "Geocoder");
    x.extend(Ad.prototype, {
        tm: function(a, b, c) {
            this.Oa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Rs: function(a, b, c) {
            this.Oa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ca("Geocoder")
    });
    var Bd = Ad.prototype;
    S(Bd, {
        getPoint: Bd.tm,
        getLocation: Bd.Rs
    });
    function Geolocation(a) {
        a = a || {};
        this.K = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5
        };
        this.ke = [];
        var b = this;
        I.load("othersearch", function() {
            for (var a = 0, d; d = b.ke[a]; a++)
                b[d.method].apply(b, d.arguments)
        })
    }
    x.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.ke.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: ca(2)
    });
    function Ed(a) {
        a = a || {};
        a.ka = a.renderOptions || {};
        this.k = {
            ka: {
                map: a.ka.map || p
            }
        };
        this.Oa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Od()
        })
    }
    x.ta(Ed, x.lang.Ba, "LocalCity");
    x.extend(Ed.prototype, {
        get: function(a) {
            this.Oa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ca("LocalCity")
    });
    function Fd() {
        this.Oa = [];
        var a = this;
        I.load("othersearch", function() {
            a.Od()
        })
    }
    x.ta(Fd, x.lang.Ba, "Boundary");
    x.extend(Fd.prototype, {
        get: function(a, b) {
            this.Oa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ca("Boundary")
    });
    function Gd(a, b) {
        V.call(this, a, b);
        this.uP = hd;
        this.wP = kd;
        this.tP = id;
        this.vP = ld;
        this.Oa = [];
        var c = this;
        I.load("buslinesearch", function() {
            c.Od()
        })
    }
    Gd.mv = F.pa + "iw_plus.gif";
    Gd.zS = F.pa + "iw_minus.gif";
    Gd.sU = F.pa + "stop_icon.png";
    x.ta(Gd, V);
    x.extend(Gd.prototype, {
        getBusList: function(a) {
            this.Oa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Oa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.k.aN = a || s()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.k.$M = a || s()
        },
        setBusListHtmlSetCallback: function(a) {
            this.k.YM = a || s()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.k.XM = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.NE = a || s()
        }
    });
    function Hd(a) {
        V.call(this, a);
        a = a || {};
        this.oc = {
            input: a.input || p,
            WB: a.baseDom || p,
            types: a.types || [],
            ay: a.onSearchComplete || s()
        };
        this.zd.src = a.location || "\u5168\u56fd";
        this.cj = "";
        this.mg = p;
        this.VH = "";
        this.Ri();
        Pa(Ha);
        var b = this;
        I.load("autocomplete", function() {
            b.Od()
        })
    }
    x.ta(Hd, V, "Autocomplete");
    x.extend(Hd.prototype, {
        Ri: s(),
        show: s(),
        U: s(),
        xF: function(a) {
            this.oc.types = a
        },
        gn: function(a) {
            this.zd.src = a
        },
        search: ba("cj"),
        wy: ba("VH")
    });
    var Sa;
    function Na(a, b) {
        function c() {
            e.k.visible ? ("inter" === e.Ge && e.k.haveBreakId && e.k.indoorExitControl === o ? x.D.show(e.uA) : x.D.U(e.uA),
            this.k.closeControl && this.wf && this.C && this.C.Na() === this.B ? x.D.show(e.wf) : x.D.U(e.wf),
            this.k.forceCloseControl && x.D.show(e.wf)) : (x.D.U(e.wf),
            x.D.U(e.uA))
        }
        this.B = "string" == typeof a ? x.$(a) : a;
        this.ba = Id++;
        this.k = {
            enableScrollWheelZoom: o,
            panoramaRenderer: "flash",
            swfSrc: z.tg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: o,
            indoorExitControl: o,
            indoorFloorControl: q,
            linksControl: o,
            clickOnRoad: o,
            navigationControl: o,
            closeControl: o,
            indoorSceneSwitchControl: o,
            albumsControl: q,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: q,
            haveBreakId: q
        };
        var b = b || {}, d;
        for (d in b)
            this.k[d] = b[d];
        b.closeControl === o && (this.k.forceCloseControl = o);
        this.Ca = {
            heading: 0,
            pitch: 0
        };
        this.Zn = [];
        this.Kb = this.Xa = p;
        this.dk = this.Yq();
        this.va = [];
        this.Lc = 1;
        this.Ge = this.XS = this.dl = "";
        this.Fe = {};
        this.Jf = p;
        this.Rg = [];
        this.ur = [];
        "cvsRender" == this.dk || Ma() ? (this.Wj = 90,
        this.Yj = -90) : "cssRender" == this.dk && (this.Wj = 45,
        this.Yj = -45);
        this.yr = q;
        var e = this;
        this.$n = function() {
            this.dk === "flashRender" ? I.load("panoramaflash", function() {
                e.Ri()
            }, o) : I.load("panorama", function() {
                e.wb()
            }, o);
            b.Of == "api" ? Pa(Ca) : Pa(Da);
            this.$n = s()
        }
        ;
        this.k.KS !== o && (this.$n(),
        z.Ij("cus.fire", "count", "z_loadpanoramacount"));
        this.BT(this.B);
        this.addEventListener("id_changed", function() {
            Pa(Ba, {
                from: b.Of
            })
        });
        this.OP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Jd = 4
      , Kd = 1
      , Id = 0;
    x.lang.ta(Na, x.lang.Ba, "Panorama");
    x.extend(Na.prototype, {
        OP: function() {
            var a = this
              , b = this.wf = K("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.U()
            }
            ;
            this.B.appendChild(b);
            var c = this.uA = K("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.Qo()
            }
            ;
            this.B.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
            c.style.backgroundColor = "rgb(37,37,37)")
        },
        Qo: s(),
        BT: function(a) {
            var b, c;
            b = a.style;
            c = Ua(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
            b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ua(a).zIndex,
                !a || "auto" === a)
                    b.zIndex = 0
        },
        iX: t("Zn"),
        Yb: t("Xa"),
        KX: t("Uv"),
        WN: t("Uv"),
        ha: t("Kb"),
        Da: t("Ca"),
        fa: t("Lc"),
        hh: t("dl"),
        A2: function() {
            return this.U0 || []
        },
        v2: t("XS"),
        Xs: t("Ge"),
        yy: function(a) {
            a !== this.Ge && (this.Ge = a,
            this.dispatchEvent(new N("onscene_type_changed")))
        },
        rc: function(a, b, c) {
            "object" === typeof b && (c = b,
            b = j);
            a != this.Xa && (this.ol = this.Xa,
            this.pl = this.Kb,
            this.Xa = a,
            this.Ge = b || "street",
            this.Kb = p,
            c && c.pov && this.Nc(c.pov))
        },
        sa: function(a) {
            a.mb(this.Kb) || (this.ol = this.Xa,
            this.pl = this.Kb,
            this.Kb = a,
            this.Xa = p)
        },
        Nc: function(a) {
            a && (this.Ca = a,
            a = this.Ca.pitch,
            a > this.Wj ? a = this.Wj : a < this.Yj && (a = this.Yj),
            this.yr = o,
            this.Ca.pitch = a)
        },
        a_: function(a, b) {
            this.Yj = 0 <= a ? 0 : a;
            this.Wj = 0 >= b ? 0 : b
        },
        Oc: function(a) {
            a != this.Lc && (a > Jd && (a = Jd),
            a < Kd && (a = Kd),
            a != this.Lc && (this.Lc = a),
            "cssRender" === this.dk && this.Nc(this.Ca))
        },
        uB: function() {
            if (this.C)
                for (var a = this.C.tx(), b = 0; b < a.length; b++)
                    (a[b]instanceof T || a[b]instanceof rc) && a[b].point && this.va.push(a[b])
        },
        tF: ba("C"),
        Pt: function(a) {
            this.Jf = a || "none"
        },
        Lk: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.k[b][c] = a[b][c];
                else
                    this.k[b] = a[b];
                a.closeControl === o && (this.k.forceCloseControl = o);
                a.closeControl === q && (this.k.forceCloseControl = q);
                switch (b) {
                case "linksControl":
                    this.dispatchEvent(new N("onlinks_visible_changed"));
                    break;
                case "clickOnRoad":
                    this.dispatchEvent(new N("onclickonroad_changed"));
                    break;
                case "navigationControl":
                    this.dispatchEvent(new N("onnavigation_visible_changed"));
                    break;
                case "indoorSceneSwitchControl":
                    this.dispatchEvent(new N("onindoor_default_switch_mode_changed"));
                    break;
                case "albumsControl":
                    this.dispatchEvent(new N("onalbums_visible_changed"));
                    break;
                case "albumsControlOptions":
                    this.dispatchEvent(new N("onalbums_options_changed"));
                    break;
                case "copyrightControlOptions":
                    this.dispatchEvent(new N("oncopyright_options_changed"));
                    break;
                case "closeControl":
                    this.dispatchEvent(new N("onclose_options_changed"));
                    break;
                case "indoorExitControl":
                    this.dispatchEvent(new N("onindoorexit_options_changed"));
                    break;
                case "indoorFloorControl":
                    this.dispatchEvent(new N("onindoorfloor_options_changed"))
                }
            }
        },
        Ak: function() {
            this.xl.style.visibility = "hidden"
        },
        Cy: function() {
            this.xl.style.visibility = "visible"
        },
        wW: function() {
            this.k.enableScrollWheelZoom = o
        },
        hW: function() {
            this.k.enableScrollWheelZoom = q
        },
        show: function() {
            this.k.visible = o
        },
        U: function() {
            this.k.visible = q
        },
        Yq: function() {
            return Ta() && !G() && "javascript" != this.k.panoramaRenderer ? "flashRender" : !G() && Mb() ? "cvsRender" : "cssRender"
        },
        Ia: function(a) {
            this.Fe[a.jd] = a
        },
        Sb: function(a) {
            delete this.Fe[a]
        },
        $D: function() {
            return this.k.visible
        },
        gh: function() {
            return new L(this.B.clientWidth,this.B.clientHeight)
        },
        Na: t("B"),
        fL: function() {
            var a = z.tg("baidumap", "?")
              , b = this.Yb();
            if (b) {
                var b = {
                    panotype: this.Xs(),
                    heading: this.Da().heading,
                    pitch: this.Da().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                }, c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Cx: function() {
            this.Lk({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        AF: function() {
            this.Lk({
                copyrightControlOptions: {
                    logoVisible: o
                }
            })
        },
        QB: function(a) {
            function b(a, b) {
                return function() {
                    a.ur.push({
                        JM: b,
                        IM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++)
                d = c[e],
                this[d] = b(this, d);
            this.Rg.push(a)
        },
        dF: function(a) {
            for (var b = this.Rg.length; b--; )
                this.Rg[b] === a && this.Rg.splice(b, 1)
        },
        sF: s()
    });
    var Ld = Na.prototype;
    S(Ld, {
        setId: Ld.rc,
        setPosition: Ld.sa,
        setPov: Ld.Nc,
        setZoom: Ld.Oc,
        setOptions: Ld.Lk,
        getId: Ld.Yb,
        getPosition: Ld.ha,
        getPov: Ld.Da,
        getZoom: Ld.fa,
        getLinks: Ld.iX,
        getBaiduMapUrl: Ld.fL,
        hideMapLogo: Ld.Cx,
        showMapLogo: Ld.AF,
        enableDoubleClickZoom: Ld.P1,
        disableDoubleClickZoom: Ld.E1,
        enableScrollWheelZoom: Ld.wW,
        disableScrollWheelZoom: Ld.hW,
        show: Ld.show,
        hide: Ld.U,
        addPlugin: Ld.QB,
        removePlugin: Ld.dF,
        getVisible: Ld.$D,
        addOverlay: Ld.Ia,
        removeOverlay: Ld.Sb,
        getSceneType: Ld.Xs,
        setPanoramaPOIType: Ld.Pt,
        exitInter: Ld.Qo,
        setInteractiveState: Ld.sF
    });
    S(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function Md() {
        x.lang.Ba.call(this);
        this.jd = "PanoramaOverlay_" + this.ba;
        this.P = p;
        this.Pa = o
    }
    x.lang.ta(Md, x.lang.Ba, "PanoramaOverlayBase");
    x.extend(Md.prototype, {
        w2: t("jd"),
        qa: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        If: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });
    function Nd(a, b) {
        Md.call(this);
        var c = {
            position: p,
            altitude: 2,
            displayDistance: o
        }, b = b || {}, d;
        for (d in b)
            c[d] = b[d];
        this.Kb = c.position;
        this.Mj = a;
        this.rq = c.altitude;
        this.$Q = c.displayDistance;
        this.GF = c.color;
        this.PL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.UJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.YJ = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.gE = c.imageUrl;
        this.size = c.size;
        this.se = c.image;
        this.width = c.width;
        this.height = c.height;
        this.ZX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    x.lang.ta(Nd, Md, "PanoramaLabel");
    x.extend(Nd.prototype, {
        b2: t("borderWidth"),
        getImageData: t("ZX"),
        wm: t("GF"),
        p2: t("PL"),
        X1: t("backgroundColor"),
        Y1: t("UJ"),
        Z1: t("borderColor"),
        a2: t("YJ"),
        m2: t("fontSize"),
        x2: t("padding"),
        q2: t("gE"),
        yb: t("size"),
        jx: t("se"),
        sa: function(a) {
            this.Kb = a;
            this.If("position", a)
        },
        ha: t("Kb"),
        bd: function(a) {
            this.Mj = a;
            this.If("content", a)
        },
        uk: t("Mj"),
        nF: function(a) {
            this.rq = a;
            this.If("altitude", a)
        },
        To: t("rq"),
        Da: function() {
            var a = this.ha()
              , b = p
              , c = p;
            this.P && (c = this.P.ha());
            if (a && c)
                if (a.mb(c))
                    b = this.P.Da();
                else {
                    b = {};
                    b.heading = Od(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b
                      , c = this.To()
                      , d = this.Un();
                    a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                }
            return b
        },
        Un: function() {
            var a = 0, b, c;
            this.P && (b = this.P.ha(),
            (c = this.ha()) && !c.mb(b) && (a = R.Vo(b, c)));
            return a
        },
        U: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        If: s()
    });
    var Pd = Nd.prototype;
    S(Pd, {
        setPosition: Pd.sa,
        getPosition: Pd.ha,
        setContent: Pd.bd,
        getContent: Pd.uk,
        setAltitude: Pd.nF,
        getAltitude: Pd.To,
        getPov: Pd.Da,
        show: Pd.show,
        hide: Pd.U
    });
    function Qd(a, b) {
        Md.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: p,
            altitude: 2
        }, b = b || {}, d;
        for (d in b)
            c[d] = b[d];
        this.Kb = a;
        this.QH = c.icon;
        this.mJ = c.title;
        this.rq = c.altitude;
        this.nT = c.panoInfo;
        this.Ca = {
            heading: 0,
            pitch: 0
        }
    }
    x.lang.ta(Qd, Md, "PanoramaMarker");
    x.extend(Qd.prototype, {
        sa: function(a) {
            this.Kb = a;
            this.If("position", a)
        },
        ha: t("Kb"),
        Dc: function(a) {
            this.mJ = a;
            this.If("title", a)
        },
        dp: t("mJ"),
        Tb: function(a) {
            this.QH = icon;
            this.If("icon", a)
        },
        Wo: t("QH"),
        nF: function(a) {
            this.rq = a;
            this.If("altitude", a)
        },
        To: t("rq"),
        RD: t("nT"),
        Da: function() {
            var a = p;
            if (this.P) {
                var a = this.P.ha()
                  , b = this.ha()
                  , a = Od(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Ca;
            return a
        },
        If: s()
    });
    var Rd = Qd.prototype;
    S(Rd, {
        setPosition: Rd.sa,
        getPosition: Rd.ha,
        setTitle: Rd.Dc,
        getTitle: Rd.dp,
        setAltitude: Rd.nF,
        getAltitude: Rd.To,
        getPanoInfo: Rd.RD,
        getIcon: Rd.Wo,
        setIcon: Rd.Tb,
        getPov: Rd.Da
    });
    function Od(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI)
              , d = 0;
            0 < a && 0 > b && (d = 90);
            0 > a && 0 > b && (d = 180);
            0 > a && 0 < b && (d = 270);
            c = (c + 90) % 90 + d
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }
    function Ma(a) {
        if ("boolean" === typeof Sd)
            return Sd;
        if (a === q || !window.WebGLRenderingContext || x.platform.Gm && -1 == navigator.userAgent.indexOf("Android 5"))
            return Sd = q;
        var a = document.createElement("canvas")
          , b = p;
        try {
            b = a.getContext("webgl")
        } catch (c) {
            Sd = q
        }
        return Sd = b === p ? q : o
    }
    var Sd;
    function Td() {
        if ("boolean" === typeof Ud)
            return Ud;
        Ud = o;
        if (x.platform.qE)
            return o;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : Ud = q
    }
    var Ud;
    function bc(a, b) {
        this.P = a || p;
        var c = this;
        c.P && c.ca();
        I.load("pservice", function() {
            c.sQ()
        });
        "api" == (b || {}).Of ? Pa(Fa) : Pa(Ga);
        this.xd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    z.Sm(function(a) {
        "flashRender" !== a.Yq() && new bc(a,{
            Of: "api"
        })
    });
    x.extend(bc.prototype, {
        ca: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Uv) {
                        b.WN(a.id);
                        b.da = a;
                        Td() || b.dispatchEvent(new N("onthumbnail_complete"));
                        b.Xa != p && (b.pl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                c) {
                                case "position":
                                    b.Kb = a[c];
                                    break;
                                case "id":
                                    b.Xa = a[c];
                                    break;
                                case "links":
                                    b.Zn = a[c];
                                    break;
                                case "zoom":
                                    b.Lc = a[c]
                                }
                        if (b.pl) {
                            var f = b.pl
                              , g = b._position;
                            c = f.lat;
                            var i = g.lat
                              , k = Nb(i - c)
                              , f = Nb(g.lng - f.lng);
                            c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Nb(c)) * Math.cos(Nb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                            b.eH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new N("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new N("onposition_changed"));
                        b.dispatchEvent(new N("onlinks_changed"));
                        b.dispatchEvent(new N("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.$l && b.k.closeControl ? x.D.show(b.vR) : x.D.U(b.vR)
                    }
                } else
                    b.Xa = b.ol,
                    b.Kb = b.pl,
                    b.dispatchEvent(new N("onnoresult"))
            }
            var b = this.P
              , c = this;
            b.addEventListener("id_changed", function() {
                c.$o(b.Yb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Sg(bc.$k + "qt=idata&iid=" + b.qA + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo
                          , e = {};
                        e.$l = b.BreakID;
                        for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                            if (b.Floors[i].Floor == f) {
                                g = b.Floors[i];
                                break
                            }
                        e.id = g.StartID || g.Points[0].PID;
                        c.$o(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.qj(b.ha(), a)
            })
        },
        $o: function(a, b) {
            this.xd.getPanoramaById.push(arguments)
        },
        qj: function(a, b, c) {
            this.xd.getPanoramaByLocation.push(arguments)
        },
        aE: function(a, b, c, d) {
            this.xd.getVisiblePOIs.push(arguments)
        },
        wx: function(a, b) {
            this.xd.getRecommendPanosById.push(arguments)
        },
        vx: function(a) {
            this.xd.getPanoramaVersions.push(arguments)
        },
        dC: function(a, b) {
            this.xd.checkPanoSupportByCityCode.push(arguments)
        },
        ux: function(a, b) {
            this.xd.getPanoramaByPOIId.push(arguments)
        },
        kL: function(a) {
            this.xd.getCopyrightProviders.push(arguments)
        }
    });
    var Vd = bc.prototype;
    S(Vd, {
        getPanoramaById: Vd.$o,
        getPanoramaByLocation: Vd.qj,
        getPanoramaByPOIId: Vd.ux
    });
    function ac(a) {
        Ec.call(this);
        "api" == (a || {}).Of ? Pa(za) : Pa(Aa)
    }
    ac.xG = z.tg("pano", "tile/");
    ac.prototype = new Ec;
    ac.prototype.getTilesUrl = function(a, b) {
        var c = ac.xG[(a.x + a.y) % ac.xG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        x.ea.la && 6 >= x.ea.la && (c += "&color_dep=32");
        return c
    }
    ;
    ac.prototype.lt = ca(o);
    Wd.Sd = new R;
    function Wd() {}
    x.extend(Wd, {
        iW: function(a, b, c) {
            c = x.lang.Mc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = Wd.Sd.wi(new Q(b.data.mercatorX,b.data.mercatorY)));
            c.dispatchEvent(new N("on" + a), b)
        }
    });
    var Xd = Wd;
    S(Xd, {
        dispatchFlashEvent: Xd.iW
    });
    var Yd = {
        mP: 50
    };
    Yd.Du = z.tg("pano")[0];
    Yd.zu = {
        width: 220,
        height: 60
    };
    x.extend(Yd, {
        kp: function(a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                d();
            else {
                this.fo === j && (this.fo = new bc(p,{
                    Of: "api"
                }));
                var e = this;
                this.fo.dC(b, function(b) {
                    b ? e.fo.qj(c.lngLat, Yd.mP, function(b) {
                        if (b && b.id) {
                            var f = b.id
                              , k = b.vh
                              , b = b.wh
                              , l = bc.Sd.nh(c.lngLat)
                              , m = e.aS(l, {
                                x: k,
                                y: b
                            })
                              , k = e.uL(f, m, 0, Yd.zu.width, Yd.zu.height);
                            a.content = e.bS(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ha.M(x.Ec("infoWndPano"), "click", function() {
                                    c.panoInstance.rc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Nc({
                                        heading: m,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        },
        bS: function(a, b, c, d) {
            var c = c || "", e;
            !d || !a.split(d)[0] ? (d = a,
            a = "") : (d = a.split(d)[0],
            e = d.lastIndexOf("<"),
            d = a.substring(0, e),
            a = a.substring(e));
            e = [];
            var f = Yd.zu.width
              , g = Yd.zu.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        },
        aS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        uL: function(a, b, c, d, e) {
            var f = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: d,
                height: e
            };
            return (Yd.Du + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return f[b]
            })
        }
    });
    var Zd = document, $d = Math, ae = Zd.createElement("div").style, be;
    a: {
        for (var ce = ["t", "webkitT", "MozT", "msT", "OT"], de, ee = 0, fe = ce.length; ee < fe; ee++)
            if (de = ce[ee] + "ransform",
            de in ae) {
                be = ce[ee].substr(0, ce[ee].length - 1);
                break a
            }
        be = q
    }
    var ge = be ? "-" + be.toLowerCase() + "-" : ""
      , ie = he("transform")
      , je = he("transitionProperty")
      , ke = he("transitionDuration")
      , le = he("transformOrigin")
      , ne = he("transitionTimingFunction")
      , pe = he("transitionDelay")
      , yd = /android/gi.test(navigator.appVersion)
      , qe = /iphone|ipad/gi.test(navigator.appVersion)
      , re = /hp-tablet/gi.test(navigator.appVersion)
      , se = he("perspective")in ae
      , te = "ontouchstart"in window && !re
      , ue = be !== q
      , ve = he("transition")in ae
      , we = "onorientationchange"in window ? "orientationchange" : "resize"
      , xe = te ? "touchstart" : "mousedown"
      , ye = te ? "touchmove" : "mousemove"
      , ze = te ? "touchend" : "mouseup"
      , Ae = te ? "touchcancel" : "mouseup"
      , Be = be === q ? q : {
        "": "transitionend",
        webkit: "webkitTransitionEnd",
        Moz: "transitionend",
        O: "otransitionend",
        ms: "MSTransitionEnd"
    }[be]
      , Ce = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        return setTimeout(a, 1)
    }
      , De = window.cancelRequestAnimationFrame || window.A4 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , Ee = se ? " translateZ(0)" : "";
    function Fe(a, b) {
        var c = this, d;
        c.xn = "object" == typeof a ? a : Zd.getElementById(a);
        c.xn.style.overflow = "hidden";
        c.Nb = c.xn.children[0];
        c.options = {
            hp: o,
            vn: o,
            x: 0,
            y: 0,
            Bo: o,
            iV: q,
            Ux: o,
            DE: o,
            Uk: o,
            Bi: q,
            E_: 0,
            Bw: q,
            zx: o,
            mi: o,
            Ci: o,
            rD: yd,
            Dx: qe,
            DW: qe && se,
            kF: "",
            zoom: q,
            Vk: 1,
            Xp: 4,
            kW: 2,
            SO: "scroll",
            Yt: q,
            Fy: 1,
            dN: p,
            WM: function(a) {
                a.preventDefault()
            },
            gN: p,
            VM: p,
            fN: p,
            UM: p,
            $x: p,
            hN: p,
            ZM: p,
            vp: p,
            iN: p,
            up: p
        };
        for (d in b)
            c.options[d] = b[d];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Uk = ue && c.options.Uk;
        c.options.mi = c.options.hp && c.options.mi;
        c.options.Ci = c.options.vn && c.options.Ci;
        c.options.zoom = c.options.Uk && c.options.zoom;
        c.options.Bi = ve && c.options.Bi;
        c.options.zoom && yd && (Ee = "");
        c.Nb.style[je] = c.options.Uk ? ge + "transform" : "top left";
        c.Nb.style[ke] = "0";
        c.Nb.style[le] = "0 0";
        c.options.Bi && (c.Nb.style[ne] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Uk ? c.Nb.style[ie] = "translate(" + c.x + "px," + c.y + "px)" + Ee : c.Nb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Bi && (c.options.rD = o);
        c.refresh();
        c.ca(we, window);
        c.ca(xe);
        !te && "none" != c.options.SO && (c.ca("DOMMouseScroll"),
        c.ca("mousewheel"));
        c.options.Bw && (c.tV = setInterval(function() {
            c.pQ()
        }, 500));
        this.options.zx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
            var d = Node.prototype.removeEventListener;
            a === "click" ? d.call(document.body, a, b.NL || b, c) : d.call(document.body, a, b, c)
        }
        ,
        document.body.addEventListener = function(a, b, c) {
            var d = Node.prototype.addEventListener;
            a === "click" ? d.call(document.body, a, b.NL || (b.NL = function(a) {
                a.lZ || b(a)
            }
            ), c) : d.call(document.body, a, b, c)
        }
        ),
        c.ca("click", document.body, o))
    }
    Fe.prototype = {
        enabled: o,
        x: 0,
        y: 0,
        Aj: [],
        scale: 1,
        yC: 0,
        zC: 0,
        Qe: [],
        pf: [],
        VB: p,
        Qy: 0,
        handleEvent: function(a) {
            switch (a.type) {
            case xe:
                if (!te && 0 !== a.button)
                    break;
                this.Nv(a);
                break;
            case ye:
                this.ZS(a);
                break;
            case ze:
            case Ae:
                this.$u(a);
                break;
            case we:
                this.nB();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                this.EU(a);
                break;
            case Be:
                this.AU(a);
                break;
            case "click":
                this.AQ(a)
            }
        },
        pQ: function() {
            !this.rh && (!this.Wk && !(this.Vl || this.vy == this.Nb.offsetWidth * this.scale && this.Fp == this.Nb.offsetHeight * this.scale)) && this.refresh()
        },
        Ev: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Zd.createElement("div"),
            this.options.kF ? b.className = this.options.kF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Ci ? "7" : "2") + "px" : "width:7px;bottom:" + (this.mi ? "7" : "2") + "px;top:2px;right:1px"),
            b.style.cssText += ";pointer-events:none;" + ge + "transition-property:opacity;" + ge + "transition-duration:" + (this.options.DW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Dx ? "0" : "1"),
            this.xn.appendChild(b),
            this[a + "ScrollbarWrapper"] = b,
            b = Zd.createElement("div"),
            this.options.kF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + ge + "background-clip:padding-box;" + ge + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + ge + "border-radius:3px;border-radius:3px"),
            b.style.cssText += ";pointer-events:none;" + ge + "transition-property:" + ge + "transform;" + ge + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + ge + "transition-duration:0;" + ge + "transform: translate(0,0)" + Ee,
            this.options.Bi && (b.style.cssText += ";" + ge + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
            this[a + "ScrollbarWrapper"].appendChild(b),
            this[a + "ScrollbarIndicator"] = b),
            "h" == a ? (this.KL = this.LL.clientWidth,
            this.SX = $d.max($d.round(this.KL * this.KL / this.vy), 8),
            this.RX.style.width = this.SX + "px") : (this.JO = this.KO.clientHeight,
            this.Z_ = $d.max($d.round(this.JO * this.JO / this.Fp), 8),
            this.Y_.style.height = this.Z_ + "px"),
            this.oB(a, o)) : this[a + "ScrollbarWrapper"] && (ue && (this[a + "ScrollbarIndicator"].style[ie] = ""),
            this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
            this[a + "ScrollbarWrapper"] = p,
            this[a + "ScrollbarIndicator"] = p)
        },
        nB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, yd ? 200 : 0)
        },
        xr: function(a, b) {
            this.Wk || (a = this.hp ? a : 0,
            b = this.vn ? b : 0,
            this.options.Uk ? this.Nb.style[ie] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Ee : (a = $d.round(a),
            b = $d.round(b),
            this.Nb.style.left = a + "px",
            this.Nb.style.top = b + "px"),
            this.x = a,
            this.y = b,
            this.oB("h"),
            this.oB("v"))
        },
        oB: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
            0 > c ? (this.options.rD || (c = this[a + "ScrollbarIndicatorSize"] + $d.round(3 * c),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.rD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - $d.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
            8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
            this[a + "ScrollbarWrapper"].style[pe] = "0",
            this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Dx ? "0" : "1",
            this[a + "ScrollbarIndicator"].style[ie] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Ee)
        },
        AQ: function(a) {
            if (a.wR === o)
                return this.NB = a.target,
                this.ax = Date.now(),
                o;
            if (this.NB && this.ax) {
                if (600 < Date.now() - this.ax)
                    return this.ax = this.NB = p,
                    o
            } else {
                for (var b = a.target; b != this.Nb && b != document.body; )
                    b = b.parentNode;
                if (b == document.body)
                    return o
            }
            for (b = a.target; 1 != b.nodeType; )
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.lZ = o,
                a.stopPropagation(),
                a.preventDefault(),
                this.ax = this.NB = p,
                q
        },
        Nv: function(a) {
            var b = te ? a.touches[0] : a, c, d;
            if (this.enabled) {
                this.options.WM && this.options.WM.call(this, a);
                (this.options.Bi || this.options.zoom) && this.nJ(0);
                this.Wk = this.Vl = this.rh = q;
                this.IC = this.HC = this.fw = this.ew = this.OC = this.NC = 0;
                this.options.zoom && (te && 1 < a.touches.length) && (d = $d.abs(a.touches[0].pageX - a.touches[1].pageX),
                c = $d.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.G_ = $d.sqrt(d * d + c * c),
                this.by = $d.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.TF) / 2 - this.x,
                this.dy = $d.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.UF) / 2 - this.y,
                this.options.vp && this.options.vp.call(this, a));
                if (this.options.Ux && (this.options.Uk ? (c = getComputedStyle(this.Nb, p)[ie].replace(/[^0-9\-.,]/g, "").split(","),
                d = +(c[12] || c[4]),
                c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Nb, p).left.replace(/[^0-9-]/g, ""),
                c = +getComputedStyle(this.Nb, p).top.replace(/[^0-9-]/g, "")),
                d != this.x || c != this.y))
                    this.options.Bi ? this.Vd(Be) : De(this.VB),
                    this.Aj = [],
                    this.xr(d, c),
                    this.options.$x && this.options.$x.call(this);
                this.gw = this.x;
                this.hw = this.y;
                this.au = this.x;
                this.bu = this.y;
                this.vh = b.pageX;
                this.wh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.gN && this.options.gN.call(this, a);
                this.ca(ye, window);
                this.ca(ze, window);
                this.ca(Ae, window)
            }
        },
        ZS: function(a) {
            var b = te ? a.touches[0] : a
              , c = b.pageX - this.vh
              , d = b.pageY - this.wh
              , e = this.x + c
              , f = this.y + d
              , g = a.timeStamp || Date.now();
            this.options.VM && this.options.VM.call(this, a);
            if (this.options.zoom && te && 1 < a.touches.length)
                e = $d.abs(a.touches[0].pageX - a.touches[1].pageX),
                f = $d.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.F_ = $d.sqrt(e * e + f * f),
                this.Wk = o,
                b = 1 / this.G_ * this.F_ * this.scale,
                b < this.options.Vk ? b = 0.5 * this.options.Vk * Math.pow(2, b / this.options.Vk) : b > this.options.Xp && (b = 2 * this.options.Xp * Math.pow(0.5, this.options.Xp / b)),
                this.op = b / this.scale,
                e = this.by - this.by * this.op + this.x,
                f = this.dy - this.dy * this.op + this.y,
                this.Nb.style[ie] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + Ee,
                this.options.iN && this.options.iN.call(this, a);
            else {
                this.vh = b.pageX;
                this.wh = b.pageY;
                if (0 < e || e < this.ee)
                    e = this.options.Bo ? this.x + c / 2 : 0 <= e || 0 <= this.ee ? 0 : this.ee;
                if (f > this.nf || f < this.od)
                    f = this.options.Bo ? this.y + d / 2 : f >= this.nf || 0 <= this.od ? this.nf : this.od;
                this.NC += c;
                this.OC += d;
                this.ew = $d.abs(this.NC);
                this.fw = $d.abs(this.OC);
                6 > this.ew && 6 > this.fw || (this.options.DE && (this.ew > this.fw + 5 ? (f = this.y,
                d = 0) : this.fw > this.ew + 5 && (e = this.x,
                c = 0)),
                this.rh = o,
                this.xr(e, f),
                this.HC = 0 < c ? -1 : 0 > c ? 1 : 0,
                this.IC = 0 < d ? -1 : 0 > d ? 1 : 0,
                300 < g - this.startTime && (this.startTime = g,
                this.au = this.x,
                this.bu = this.y),
                this.options.fN && this.options.fN.call(this, a))
            }
        },
        $u: function(a) {
            if (!(te && 0 !== a.touches.length)) {
                var b = this, c = te ? a.changedTouches[0] : a, d, e, f = {
                    Aa: 0,
                    time: 0
                }, g = {
                    Aa: 0,
                    time: 0
                }, i = (a.timeStamp || Date.now()) - b.startTime;
                d = b.x;
                e = b.y;
                b.Vd(ye, window);
                b.Vd(ze, window);
                b.Vd(Ae, window);
                b.options.UM && b.options.UM.call(b, a);
                if (b.Wk)
                    d = b.scale * b.op,
                    d = Math.max(b.options.Vk, d),
                    d = Math.min(b.options.Xp, d),
                    b.op = d / b.scale,
                    b.scale = d,
                    b.x = b.by - b.by * b.op + b.x,
                    b.y = b.dy - b.dy * b.op + b.y,
                    b.Nb.style[ke] = "200ms",
                    b.Nb.style[ie] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Ee,
                    b.Wk = q,
                    b.refresh(),
                    b.options.up && b.options.up.call(b, a);
                else {
                    if (b.rh) {
                        if (300 > i && b.options.Ux) {
                            f = d ? b.kI(d - b.au, i, -b.x, b.vy - b.ru + b.x, b.options.Bo ? b.ru : 0) : f;
                            g = e ? b.kI(e - b.bu, i, -b.y, 0 > b.od ? b.Fp - b.yn + b.y - b.nf : 0, b.options.Bo ? b.yn : 0) : g;
                            d = b.x + f.Aa;
                            e = b.y + g.Aa;
                            if (0 < b.x && 0 < d || b.x < b.ee && d < b.ee)
                                f = {
                                    Aa: 0,
                                    time: 0
                                };
                            if (b.y > b.nf && e > b.nf || b.y < b.od && e < b.od)
                                g = {
                                    Aa: 0,
                                    time: 0
                                }
                        }
                        f.Aa || g.Aa ? (c = $d.max($d.max(f.time, g.time), 10),
                        b.options.Yt && (f = d - b.gw,
                        g = e - b.hw,
                        $d.abs(f) < b.options.Fy && $d.abs(g) < b.options.Fy ? b.scrollTo(b.gw, b.hw, 200) : (f = b.eJ(d, e),
                        d = f.x,
                        e = f.y,
                        c = $d.max(f.time, c))),
                        b.scrollTo($d.round(d), $d.round(e), c)) : b.options.Yt ? (f = d - b.gw,
                        g = e - b.hw,
                        $d.abs(f) < b.options.Fy && $d.abs(g) < b.options.Fy ? b.scrollTo(b.gw, b.hw, 200) : (f = b.eJ(b.x, b.y),
                        (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.io(200)
                    } else {
                        if (te)
                            if (b.EK && b.options.zoom)
                                clearTimeout(b.EK),
                                b.EK = p,
                                b.options.vp && b.options.vp.call(b, a),
                                b.zoom(b.vh, b.wh, 1 == b.scale ? b.options.kW : 1),
                                b.options.up && setTimeout(function() {
                                    b.options.up.call(b, a)
                                }, 200);
                            else if (this.options.zx) {
                                for (d = c.target; 1 != d.nodeType; )
                                    d = d.parentNode;
                                e = d.tagName.toLowerCase();
                                "select" != e && "input" != e && "textarea" != e ? (e = Zd.createEvent("MouseEvents"),
                                e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p),
                                e.wR = o,
                                d.dispatchEvent(e)) : d.focus()
                            }
                        b.io(400)
                    }
                    b.options.hN && b.options.hN.call(b, a)
                }
            }
        },
        io: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.ee ? this.ee : this.x
              , c = this.y >= this.nf || 0 < this.od ? this.nf : this.y < this.od ? this.od : this.y;
            if (b == this.x && c == this.y) {
                if (this.rh && (this.rh = q,
                this.options.$x && this.options.$x.call(this)),
                this.mi && this.options.Dx && ("webkit" == be && (this.LL.style[pe] = "300ms"),
                this.LL.style.opacity = "0"),
                this.Ci && this.options.Dx)
                    "webkit" == be && (this.KO.style[pe] = "300ms"),
                    this.KO.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        EU: function(a) {
            var b = this, c, d;
            if ("wheelDeltaX"in a)
                c = a.wheelDeltaX / 12,
                d = a.wheelDeltaY / 12;
            else if ("wheelDelta"in a)
                c = d = a.wheelDelta / 12;
            else if ("detail"in a)
                c = d = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.SO) {
                if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)),
                d < b.options.Vk && (d = b.options.Vk),
                d > b.options.Xp && (d = b.options.Xp),
                d != b.scale)
                    !b.Qy && b.options.vp && b.options.vp.call(b, a),
                    b.Qy++,
                    b.zoom(a.pageX, a.pageY, d, 400),
                    setTimeout(function() {
                        b.Qy--;
                        !b.Qy && b.options.up && b.options.up.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                d = b.y + d,
                0 < c ? c = 0 : c < b.ee && (c = b.ee),
                d > b.nf ? d = b.nf : d < b.od && (d = b.od),
                0 > b.od && b.scrollTo(c, d, 0)
        },
        AU: function(a) {
            a.target == this.Nb && (this.Vd(Be),
            this.AB())
        },
        AB: function() {
            var a = this, b = a.x, c = a.y, d = Date.now(), e, f, g;
            a.Vl || (a.Aj.length ? (e = a.Aj.shift(),
            e.x == b && e.y == c && (e.time = 0),
            a.Vl = o,
            a.rh = o,
            a.options.Bi) ? (a.nJ(e.time),
            a.xr(e.x, e.y),
            a.Vl = q,
            e.time ? a.ca(Be) : a.io(0)) : (g = function() {
                var i = Date.now(), k;
                if (i >= d + e.time) {
                    a.xr(e.x, e.y);
                    a.Vl = q;
                    a.options.TY && a.options.TY.call(a);
                    a.AB()
                } else {
                    i = (i - d) / e.time - 1;
                    f = $d.sqrt(1 - i * i);
                    i = (e.x - b) * f + b;
                    k = (e.y - c) * f + c;
                    a.xr(i, k);
                    if (a.Vl)
                        a.VB = Ce(g)
                }
            }
            ,
            g()) : a.io(400))
        },
        nJ: function(a) {
            a += "ms";
            this.Nb.style[ke] = a;
            this.mi && (this.RX.style[ke] = a);
            this.Ci && (this.Y_.style[ke] = a)
        },
        kI: function(a, b, c, d, e) {
            var b = $d.abs(a) / b
              , f = b * b / 0.0012;
            0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))),
            b = b * c / f,
            f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))),
            b = b * d / f,
            f = d);
            return {
                Aa: f * (0 > a ? -1 : 1),
                time: $d.round(b / 6.0E-4)
            }
        },
        $j: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.xn && (b *= this.scale,
            c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        eJ: function(a, b) {
            var c, d, e;
            e = this.Qe.length - 1;
            c = 0;
            for (d = this.Qe.length; c < d; c++)
                if (a >= this.Qe[c]) {
                    e = c;
                    break
                }
            e == this.yC && (0 < e && 0 > this.HC) && e--;
            a = this.Qe[e];
            d = (d = $d.abs(a - this.Qe[this.yC])) ? 500 * ($d.abs(this.x - a) / d) : 0;
            this.yC = e;
            e = this.pf.length - 1;
            for (c = 0; c < e; c++)
                if (b >= this.pf[c]) {
                    e = c;
                    break
                }
            e == this.zC && (0 < e && 0 > this.IC) && e--;
            b = this.pf[e];
            c = (c = $d.abs(b - this.pf[this.zC])) ? 500 * ($d.abs(this.y - b) / c) : 0;
            this.zC = e;
            e = $d.round($d.max(d, c)) || 200;
            return {
                x: a,
                y: b,
                time: e
            }
        },
        ca: function(a, b, c) {
            (b || this.Nb).addEventListener(a, this, !!c)
        },
        Vd: function(a, b, c) {
            (b || this.Nb).removeEventListener(a, this, !!c)
        },
        EC: fa(2),
        refresh: function() {
            var a, b, c, d = 0;
            b = 0;
            this.scale < this.options.Vk && (this.scale = this.options.Vk);
            this.ru = this.xn.clientWidth || 1;
            this.yn = this.xn.clientHeight || 1;
            this.nf = -this.options.E_ || 0;
            this.vy = $d.round(this.Nb.offsetWidth * this.scale);
            this.Fp = $d.round((this.Nb.offsetHeight + this.nf) * this.scale);
            this.ee = this.ru - this.vy;
            this.od = this.yn - this.Fp + this.nf;
            this.IC = this.HC = 0;
            this.options.dN && this.options.dN.call(this);
            this.hp = this.options.hp && 0 > this.ee;
            this.vn = this.options.vn && (!this.options.iV && !this.hp || this.Fp > this.yn);
            this.mi = this.hp && this.options.mi;
            this.Ci = this.vn && this.options.Ci && this.Fp > this.yn;
            a = this.$j(this.xn);
            this.TF = -a.left;
            this.UF = -a.top;
            if ("string" == typeof this.options.Yt) {
                this.Qe = [];
                this.pf = [];
                c = this.Nb.querySelectorAll(this.options.Yt);
                a = 0;
                for (b = c.length; a < b; a++)
                    d = this.$j(c[a]),
                    d.left += this.TF,
                    d.top += this.UF,
                    this.Qe[a] = d.left < this.ee ? this.ee : d.left * this.scale,
                    this.pf[a] = d.top < this.od ? this.od : d.top * this.scale
            } else if (this.options.Yt) {
                for (this.Qe = []; d >= this.ee; )
                    this.Qe[b] = d,
                    d -= this.ru,
                    b++;
                this.ee % this.ru && (this.Qe[this.Qe.length] = this.ee - this.Qe[this.Qe.length - 1] + this.Qe[this.Qe.length - 1]);
                b = d = 0;
                for (this.pf = []; d >= this.od; )
                    this.pf[b] = d,
                    d -= this.yn,
                    b++;
                this.od % this.yn && (this.pf[this.pf.length] = this.od - this.pf[this.pf.length - 1] + this.pf[this.pf.length - 1])
            }
            this.Ev("h");
            this.Ev("v");
            this.Wk || (this.Nb.style[ke] = "0",
            this.io(400))
        },
        scrollTo: function(a, b, c, d) {
            var e = a;
            this.stop();
            e.length || (e = [{
                x: a,
                y: b,
                time: c,
                mZ: d
            }]);
            a = 0;
            for (b = e.length; a < b; a++)
                e[a].mZ && (e[a].x = this.x - e[a].x,
                e[a].y = this.y - e[a].y),
                this.Aj.push({
                    x: e[a].x,
                    y: e[a].y,
                    time: e[a].time || 0
                });
            this.AB()
        },
        disable: function() {
            this.stop();
            this.io(0);
            this.enabled = q;
            this.Vd(ye, window);
            this.Vd(ze, window);
            this.Vd(Ae, window)
        },
        enable: function() {
            this.enabled = o
        },
        stop: function() {
            this.options.Bi ? this.Vd(Be) : De(this.VB);
            this.Aj = [];
            this.Vl = this.rh = q
        },
        zoom: function(a, b, c, d) {
            var e = c / this.scale;
            this.options.Uk && (this.Wk = o,
            d = d === j ? 200 : d,
            a = a - this.TF - this.x,
            b = b - this.UF - this.y,
            this.x = a - a * e + this.x,
            this.y = b - b * e + this.y,
            this.scale = c,
            this.refresh(),
            this.x = 0 < this.x ? 0 : this.x < this.ee ? this.ee : this.x,
            this.y = this.y > this.nf ? this.nf : this.y < this.od ? this.od : this.y,
            this.Nb.style[ke] = d + "ms",
            this.Nb.style[ie] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Ee,
            this.Wk = q)
        }
    };
    function he(a) {
        if ("" === be)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return be + a
    }
    ae = p;
    function Ge(a) {
        this.k = {
            anchor: Vb,
            offset: new L(0,0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {}, b;
        for (b in a)
            this.k[b] = a[b];
        this.Hl = new bc(p,{
            Of: "api"
        });
        this.bk = [];
        this.P = p;
        this.eg = {
            height: this.k.imageHeight,
            width: this.k.imageHeight * He
        };
        this.Pc = this.pB = this.$l = this.Yc = p
    }
    var Ie = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , Je = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    z.Sm(function(a) {
        var b = p;
        a.addEventListener("position_changed", function() {
            a.k.visible && a.k.albumsControl === o && (b ? b.ny(a.Yb()) : (b = new Ge(a.k.albumsControlOptions),
            b.qa(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.k.albumsControl === o ? (b ? b.ny(a.Yb()) : (b = new Ge(a.k.albumsControlOptions),
            b.qa(a)),
            b.show()) : b.U()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.Lk(a.k.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.$D() ? a.k.albumsControl === o && (b.B.style.visibility = "visible") : b.B.style.visibility = "hidden")
        })
    });
    var He = 1.8;
    G() && (He = 1);
    x.extend(Ge.prototype, {
        Lk: function(a) {
            for (var b in a)
                this.k[b] = a[b];
            a = this.k.imageHeight + "px";
            this.qc(this.k.anchor);
            this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            this.B.style.height = a;
            this.gk.style.height = a;
            this.Wh.style.height = a;
            this.eg = {
                height: this.k.imageHeight,
                width: this.k.imageHeight * He
            };
            this.fk.style.height = this.eg.height - 6 + "px";
            this.fk.style.width = this.eg.width - 6 + "px";
            this.ny(this.P.Yb(), o)
        },
        qa: function(a) {
            this.P = a;
            this.ds();
            this.ZP();
            this.eY();
            this.ny(a.Yb())
        },
        ds: function() {
            var a = this.k.imageHeight + "px";
            this.B = K("div");
            var b = this.B.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.gk = K("div");
            b = this.gk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Wh = K("div");
            b = this.Wh.style;
            b.height = a;
            this.gk.appendChild(this.Wh);
            this.B.appendChild(this.gk);
            this.P.B.appendChild(this.B);
            this.fk = K("div", {
                "class": "pano_photo_item_seleted"
            });
            this.fk.style.height = this.eg.height - 6 + "px";
            this.fk.style.width = this.eg.width - 6 + "px";
            this.qc(this.k.anchor)
        },
        BH: function(a) {
            for (var b = this.bk, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        ny: function(a, b) {
            if (b || !this.bk[this.Yc] || !(this.bk[this.Yc].panoId == a && 3 !== this.bk[this.Yc].recoType)) {
                var c = this
                  , d = this.BH(a);
                !b && -1 !== d && this.bk[d] && 3 !== this.bk[d].recoType ? this.Jp(d) : this.xX(function(a) {
                    for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++)
                        d = a[m].catlog,
                        i = a[m].floor,
                        j !== d && ("" === d && j !== i ? (k = o,
                        b[i] || (b[i] = []),
                        b[i].push(a[m])) : (b[Ie[d]] || (b[Ie[d]] = []),
                        b[Ie[d]].push(a[m])));
                    for (var u in b)
                        k ? l.push({
                            data: u + "F",
                            index: u
                        }) : l.push({
                            data: Je[u],
                            index: u
                        });
                    c.TG = b;
                    c.Pi = l;
                    c.Dl(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        RV: function() {
            if (!this.Mi) {
                var a = this.lX(this.Pi)
                  , b = K("div");
                b.style.cssText = ["width:" + 134 * this.Pi.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = K("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Fe(a,{
                    Bo: q,
                    Ux: o,
                    mi: q,
                    Ci: q,
                    vn: q,
                    DE: o,
                    Bw: o,
                    zx: o
                });
                this.B.appendChild(a);
                for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++)
                    b = d[e],
                    x.M(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.Dl(c.TG[this.getAttribute("dataindex")]);
                            for (var a = 0, b = d.length; a < b; a++)
                                d[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Mi = a
            }
        },
        OV: function() {
            if (this.Mi)
                a = this.iL(this.Pi),
                this.oQ.innerHTML = a;
            else {
                var a = this.iL(this.Pi)
                  , b = K("ul")
                  , c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                x.M(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.Dl(c.TG[a]);
                        for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++)
                            d[e].childNodes[0].getAttribute("dataindex") === a ? x.D.Ta(d[e], "pano_catlogLiActive") : x.D.Rb(d[e], "pano_catlogLiActive")
                    }
                });
                var a = K("div")
                  , d = K("a")
                  , e = K("span")
                  , f = K("a")
                  , g = K("span")
                  , i = ["background:url(" + F.pa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                e.style.cssText = i + "background-position:-18px 0;";
                d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.cssText = i + "background-position:0 0;";
                f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                f.style.top = this.k.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                d.appendChild(e);
                f.appendChild(g);
                x.M(d, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (e.style.backgroundPosition = "-27px 0");
                    new sb({
                        Ic: 60,
                        hc: tb.Cs,
                        duration: 300,
                        ua: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                x.M(d, "mouseout", function() {
                    e.style.backgroundPosition = "-18px 0"
                });
                x.M(f, "mouseover", function() {
                    var a = parseInt(b.style.top, 10)
                      , d = c.k.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < d)) {
                        var e = d - parseInt(b.offsetHeight, 10) + 7;
                        e !== a && (g.style.backgroundPosition = "-9px 0");
                        new sb({
                            Ic: 60,
                            hc: tb.Cs,
                            duration: 300,
                            ua: function(c) {
                                b.style.top = a + (e - a) * c + "px"
                            }
                        })
                    }
                });
                x.M(f, "mouseout", function() {
                    g.style.backgroundPosition = "0 0"
                });
                a.appendChild(d);
                a.appendChild(f);
                d = K("div");
                d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                d.appendChild(b);
                d.appendChild(a);
                this.Mi = d;
                this.oQ = b;
                this.B.appendChild(d)
            }
        },
        PV: function() {
            if (this.Pi && !(0 >= this.Pi.length)) {
                var a = K("div");
                a.innerHTML = this.Xz;
                a.style.cssText = "position:absolute;background:#252525";
                this.B.appendChild(a);
                this.Gs = a;
                this.Pc.fg.style.left = this.eg.width + 8 + "px";
                this.Mi && (this.Mi.style.left = parseInt(this.Mi.style.left, 10) + this.eg.width + 8 + "px");
                var b = this;
                x.M(a, "click", function() {
                    b.P.rc(b.zW)
                })
            }
        },
        Dl: function(a) {
            this.bk = a;
            this.k.showCatalog && (0 < this.Pi.length ? (Ta() ? this.OV() : this.RV(),
            this.Pc.offsetLeft = 60) : (this.Gs && (this.B.removeChild(this.Gs),
            this.Gs = p,
            this.Pc.fg.style.left = "0px"),
            this.Mi && (this.B.removeChild(this.Mi),
            this.Mi = p),
            this.Pc.offsetLeft = 0));
            var b = this.fX(a);
            Ta() && (this.Pi && 0 < this.Pi.length && this.k.showExit && this.Xz) && (this.Pc.offsetLeft += this.eg.width + 8,
            this.Gs ? this.Gs.innerHTML = this.Xz : this.PV());
            this.Wh.innerHTML = b;
            this.Wh.style.width = (this.eg.width + 8) * a.length + 8 + "px";
            a = this.B.offsetWidth;
            b = this.Wh.offsetWidth;
            this.Pc.Ns && (b += this.Pc.Ns());
            b < a - 2 * this.Pc.Gi - this.Pc.offsetLeft ? this.B.style.width = b + this.Pc.offsetLeft + "px" : (this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px",
            b < this.B.offsetWidth - 2 * this.Pc.Gi - this.Pc.offsetLeft && (this.B.style.width = b + this.Pc.offsetLeft + "px"));
            this.Pc.refresh();
            this.pB = this.Wh.children;
            this.Wh.appendChild(this.fk);
            this.fk.style.left = "-100000px";
            a = this.BH(this.P.Yb(), this.Y0);
            -1 !== a && this.Jp(a)
        },
        lX: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>",
                b += c;
            return b
        },
        iL: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>",
                b += c;
            return b
        },
        fX: function(a) {
            for (var b, c, d, e, f = [], g = this.eg.height, i = this.eg.width, k = 0; k < a.length; k++)
                b = a[k],
                recoType = b.recoType,
                d = b.panoId,
                e = b.name,
                c = b.heading,
                b = b.pitch,
                c = Yd.uL(d, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>",
                3 === recoType ? Ta() ? (this.Xz = b,
                this.zW = d,
                a.splice(k, 1),
                k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + F.pa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>',
                f.push(b)) : f.push(b);
            return f.join("")
        },
        xX: function(a) {
            var b = this
              , c = this.P.Yb();
            c && this.Hl.wx(c, function(d) {
                b.P.Yb() === c && a(d)
            })
        },
        qc: function(a) {
            if (!Va(a) || isNaN(a) || a < Tb || 3 < a)
                a = this.defaultAnchor;
            var b = this.B
              , c = this.k.offset.width
              , d = this.k.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
            case Tb:
                b.style.top = d + "px";
                b.style.left = c + "px";
                break;
            case Ub:
                b.style.top = d + "px";
                b.style.right = c + "px";
                break;
            case Vb:
                b.style.bottom = d + "px";
                b.style.left = c + "px";
                break;
            case 3:
                b.style.bottom = d + "px",
                b.style.right = c + "px"
            }
        },
        ZP: function() {
            this.XP()
        },
        XP: function() {
            var a = this;
            x.M(this.B, "touchstart", function(a) {
                a.stopPropagation()
            });
            x.M(this.gk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Yc)
                    a.Jp(b),
                    a.P.rc(a.bk[b].panoId)
            });
            x.M(this.Wh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== p && a.kK(b, o)
            });
            this.P.addEventListener("size_changed", function() {
                isNaN(Number(a.k.maxWidth)) && a.Lk({
                    maxWidth: a.k.maxWidth
                })
            })
        },
        Jp: function(a) {
            this.fk.style.left = this.pB[a].offsetLeft + 8 + "px";
            this.fk.setAttribute("data-index", this.pB[a].getAttribute("data-index"));
            this.Yc = a;
            this.kK(a)
        },
        kK: function(a, b) {
            var c = this.eg.width + 8
              , d = 0;
            this.Pc.Ns && (d = this.Pc.Ns() / 2);
            var e = this.gk.offsetWidth - 2 * d
              , f = this.Wh.offsetLeft || this.Pc.x
              , f = f - d
              , g = -a * c;
            g > f && this.Pc.scrollTo(g + d);
            c = g - c;
            f -= e;
            c < f && (!b || b && 8 < g - f) && this.Pc.scrollTo(c + e + d)
        },
        eY: function() {
            this.Pc = G() ? new Fe(this.gk,{
                Bo: q,
                Ux: o,
                mi: q,
                Ci: q,
                vn: q,
                DE: o,
                Bw: o,
                zx: o
            }) : new Ke(this.gk)
        },
        U: function() {
            this.B.style.visibility = "hidden"
        },
        show: function() {
            this.B.style.visibility = "visible"
        }
    });
    function Ke(a) {
        this.B = a;
        this.Ug = a.children[0];
        this.Lr = p;
        this.Gi = 20;
        this.offsetLeft = 0;
        this.qa()
    }
    Ke.prototype = {
        qa: function() {
            this.Ug.style.position = "relative";
            this.refresh();
            this.ds();
            this.Yl()
        },
        refresh: function() {
            this.co = this.B.offsetWidth - this.Ns();
            this.PA = -(this.Ug.offsetWidth - this.co - this.Gi);
            this.rv = this.Gi + this.offsetLeft;
            this.Ug.style.left = this.rv + "px";
            this.Ug.children[0] && (this.Lr = this.Ug.children[0].offsetWidth);
            this.fg && (this.fg.children[0].style.marginTop = this.Dr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px")
        },
        Ns: function() {
            return 2 * this.Gi
        },
        ds: function() {
            this.Fv = K("div");
            this.Fv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.fg = this.Fv.children[0];
            this.Dr = this.Fv.children[1];
            this.B.appendChild(this.Fv);
            this.fg.children[0].style.marginTop = this.Dr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px"
        },
        Yl: function() {
            var a = this;
            x.M(this.fg, "click", function() {
                a.scrollTo(a.Ug.offsetLeft + a.co)
            });
            x.M(this.Dr, "click", function() {
                a.scrollTo(a.Ug.offsetLeft - a.co)
            })
        },
        BU: function() {
            x.D.Rb(this.fg, "pano_arrow_disable");
            x.D.Rb(this.Dr, "pano_arrow_disable");
            var a = this.Ug.offsetLeft;
            a >= this.rv && x.D.Ta(this.fg, "pano_arrow_disable");
            a - this.co <= this.PA && x.D.Ta(this.Dr, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Ug.offsetLeft ? Math.ceil((a - this.Gi - this.co) / this.Lr) * this.Lr + this.co + this.Gi - 8 : Math.ceil((a - this.Gi) / this.Lr) * this.Lr + this.Gi;
            a < this.PA ? a = this.PA : a > this.rv && (a = this.rv);
            var b = this.Ug.offsetLeft
              , c = this;
            new sb({
                Ic: 60,
                hc: tb.Cs,
                duration: 300,
                ua: function(d) {
                    c.Ug.style.left = b + (a - b) * d + "px"
                },
                finish: function() {
                    c.BU()
                }
            })
        }
    };
    z.Map = Ka;
    z.Hotspot = ib;
    z.MapType = Rc;
    z.Point = H;
    z.Pixel = Q;
    z.Size = L;
    z.Bounds = fb;
    z.TileLayer = Ec;
    z.Projection = gc;
    z.MercatorProjection = R;
    z.PerspectiveProjection = hb;
    z.Copyright = function(a, b, c) {
        this.id = a;
        this.gb = b;
        this.content = c
    }
    ;
    z.Overlay = jc;
    z.Label = rc;
    z.GroundOverlay = sc;
    z.PointCollection = wc;
    z.Marker = T;
    z.Icon = nc;
    z.IconSequence = pc;
    z.Symbol = oc;
    z.Polyline = Ac;
    z.Polygon = zc;
    z.InfoWindow = qc;
    z.Circle = Bc;
    z.Control = Sb;
    z.NavigationControl = jb;
    z.GeolocationControl = Wb;
    z.OverviewMapControl = lb;
    z.CopyrightControl = Xb;
    z.ScaleControl = kb;
    z.MapTypeControl = mb;
    z.CityListControl = Yb;
    z.PanoramaControl = $b;
    z.TrafficLayer = Nc;
    z.CustomLayer = nb;
    z.ContextMenu = cc;
    z.MenuItem = fc;
    z.LocalSearch = bb;
    z.TransitRoute = rd;
    z.DrivingRoute = ud;
    z.WalkingRoute = vd;
    z.Autocomplete = Hd;
    z.RouteSearch = zd;
    z.Geocoder = Ad;
    z.LocalCity = Ed;
    z.Geolocation = Geolocation;
    z.Convertor = ic;
    z.BusLineSearch = Gd;
    z.Boundary = Fd;
    z.VectorCloudLayer = Lc;
    z.VectorTrafficLayer = Mc;
    z.Panorama = Na;
    z.PanoramaLabel = Nd;
    z.PanoramaService = bc;
    z.PanoramaCoverageLayer = ac;
    z.PanoramaFlashInterface = Wd;
    function S(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    S(window, {
        BMap: z,
        _jsload2: function(a, b) {
            ha.Iy.oY && ha.Iy.set(a, b);
            I.sV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var W = Ka.prototype;
    S(W, {
        getBounds: W.Gd,
        getCenter: W.Ja,
        getMapType: W.oa,
        getSize: W.yb,
        setSize: W.xe,
        getViewport: W.Zs,
        getZoom: W.fa,
        centerAndZoom: W.Cd,
        panTo: W.ui,
        panBy: W.yg,
        setCenter: W.Vf,
        setCurrentCity: W.qF,
        setMapType: W.Bg,
        setViewport: W.Bh,
        setZoom: W.Oc,
        highResolutionEnabled: W.dE,
        zoomTo: W.Fg,
        zoomIn: W.VF,
        zoomOut: W.WF,
        addHotspot: W.nw,
        removeHotspot: W.oZ,
        clearHotspots: W.bm,
        checkResize: W.vV,
        addControl: W.lw,
        removeControl: W.vN,
        getContainer: W.Na,
        addContextMenu: W.uo,
        removeContextMenu: W.zp,
        addOverlay: W.Ia,
        removeOverlay: W.Sb,
        clearOverlays: W.hK,
        openInfoWindow: W.Mb,
        closeInfoWindow: W.Xc,
        pointToOverlayPixel: W.Re,
        overlayPixelToPoint: W.kN,
        getInfoWindow: W.jh,
        getOverlays: W.tx,
        getPanes: function() {
            return {
                floatPane: this.Td.sD,
                markerMouseTarget: this.Td.GE,
                floatShadow: this.Td.aL,
                labelPane: this.Td.zE,
                markerPane: this.Td.EM,
                markerShadow: this.Td.FM,
                mapPane: this.Td.ot,
                vertexPane: this.Td.OO
            }
        },
        addTileLayer: W.Yg,
        removeTileLayer: W.zh,
        pixelToPoint: W.ub,
        pointToPixel: W.ac,
        setFeatureStyle: W.Ip,
        selectBaseElement: W.S3,
        setMapStyle: W.Nt,
        enable3DBuilding: W.Mo,
        disable3DBuilding: W.eW,
        getPanorama: W.rm
    });
    var Le = Rc.prototype;
    S(Le, {
        getTileLayer: Le.IX,
        getMinZoom: Le.Xo,
        getMaxZoom: Le.qm,
        getProjection: Le.bp,
        getTextColor: Le.wm,
        getTips: Le.Ys
    });
    S(window, {
        BMAP_NORMAL_MAP: La,
        BMAP_PERSPECTIVE_MAP: Oa,
        BMAP_SATELLITE_MAP: Xa,
        BMAP_HYBRID_MAP: Ra
    });
    var Me = R.prototype;
    S(Me, {
        lngLatToPoint: Me.nh,
        pointToLngLat: Me.wi
    });
    var Ne = hb.prototype;
    S(Ne, {
        lngLatToPoint: Ne.nh,
        pointToLngLat: Ne.wi
    });
    var Oe = fb.prototype;
    S(Oe, {
        equals: Oe.mb,
        containsPoint: Oe.bs,
        containsBounds: Oe.GV,
        intersects: Oe.ft,
        extend: Oe.extend,
        getCenter: Oe.Ja,
        isEmpty: Oe.yj,
        getSouthWest: Oe.re,
        getNorthEast: Oe.kf,
        toSpan: Oe.KF
    });
    var Pe = jc.prototype;
    S(Pe, {
        isVisible: Pe.mh,
        show: Pe.show,
        hide: Pe.U
    });
    jc.getZIndex = jc.ym;
    var Qe = gb.prototype;
    S(Qe, {
        openInfoWindow: Qe.Mb,
        closeInfoWindow: Qe.Xc,
        enableMassClear: Qe.ii,
        disableMassClear: Qe.gW,
        show: Qe.show,
        hide: Qe.U,
        getMap: Qe.nx,
        addContextMenu: Qe.uo,
        removeContextMenu: Qe.zp
    });
    var Re = T.prototype;
    S(Re, {
        setIcon: Re.Tb,
        getIcon: Re.Wo,
        setPosition: Re.sa,
        getPosition: Re.ha,
        setOffset: Re.Te,
        getOffset: Re.Pf,
        getLabel: Re.MD,
        setLabel: Re.fn,
        setTitle: Re.Dc,
        setTop: Re.zi,
        enableDragging: Re.Xb,
        disableDragging: Re.KC,
        setZIndex: Re.St,
        getMap: Re.nx,
        setAnimation: Re.dn,
        setShadow: Re.zy,
        hide: Re.U,
        setRotation: Re.Lp,
        getRotation: Re.yL
    });
    S(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var Se = rc.prototype;
    S(Se, {
        setStyle: Se.Kd,
        setStyles: Se.yi,
        setContent: Se.bd,
        setPosition: Se.sa,
        getPosition: Se.ha,
        setOffset: Se.Te,
        getOffset: Se.Pf,
        setTitle: Se.Dc,
        setZIndex: Se.St,
        getMap: Se.nx,
        getContent: Se.uk
    });
    var Te = nc.prototype;
    S(Te, {
        setImageUrl: Te.MN,
        setSize: Te.xe,
        setAnchor: Te.qc,
        setImageOffset: Te.Mt,
        setImageSize: Te.RZ,
        setInfoWindowAnchor: Te.UZ,
        setPrintImageUrl: Te.d_
    });
    var We = qc.prototype;
    S(We, {
        redraw: We.fe,
        setTitle: We.Dc,
        setContent: We.bd,
        getContent: We.uk,
        getPosition: We.ha,
        enableMaximize: We.dh,
        disableMaximize: We.Uw,
        isOpen: We.Va,
        setMaxContent: We.Ot,
        maximize: We.Tx,
        enableAutoPan: We.Ds
    });
    var Xe = lc.prototype;
    S(Xe, {
        getPath: Xe.pe,
        setPath: Xe.ge,
        setPositionAt: Xe.hn,
        getStrokeColor: Xe.DX,
        setStrokeWeight: Xe.Op,
        getStrokeWeight: Xe.BL,
        setStrokeOpacity: Xe.Mp,
        getStrokeOpacity: Xe.EX,
        setFillOpacity: Xe.Lt,
        getFillOpacity: Xe.aX,
        setStrokeStyle: Xe.Np,
        getStrokeStyle: Xe.AL,
        getFillColor: Xe.$W,
        getBounds: Xe.Gd,
        enableEditing: Xe.Nf,
        disableEditing: Xe.fW
    });
    var Ye = Bc.prototype;
    S(Ye, {
        setCenter: Ye.Vf,
        getCenter: Ye.Ja,
        getRadius: Ye.wL,
        setRadius: Ye.qf
    });
    var Ze = zc.prototype;
    S(Ze, {
        getPath: Ze.pe,
        setPath: Ze.ge,
        setPositionAt: Ze.hn
    });
    var $e = ib.prototype;
    S($e, {
        getPosition: $e.ha,
        setPosition: $e.sa,
        getText: $e.WD,
        setText: $e.Rt
    });
    H.prototype.equals = H.prototype.mb;
    Q.prototype.equals = Q.prototype.mb;
    L.prototype.equals = L.prototype.mb;
    S(window, {
        BMAP_ANCHOR_TOP_LEFT: Tb,
        BMAP_ANCHOR_TOP_RIGHT: Ub,
        BMAP_ANCHOR_BOTTOM_LEFT: Vb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var af = Sb.prototype;
    S(af, {
        setAnchor: af.qc,
        getAnchor: af.yD,
        setOffset: af.Te,
        getOffset: af.Pf,
        show: af.show,
        hide: af.U,
        isVisible: af.mh,
        toString: af.toString
    });
    var bf = jb.prototype;
    S(bf, {
        getType: bf.fp,
        setType: bf.jn
    });
    S(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var cf = lb.prototype;
    S(cf, {
        changeView: cf.me,
        setSize: cf.xe,
        getSize: cf.yb
    });
    var df = kb.prototype;
    S(df, {
        getUnit: df.MX,
        setUnit: df.yF
    });
    S(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var ef = Xb.prototype;
    S(ef, {
        addCopyright: ef.mw,
        removeCopyright: ef.cF,
        getCopyright: ef.om,
        getCopyrightCollection: ef.FD
    });
    S(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Zb,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var ff = Ec.prototype;
    S(ff, {
        getMapType: ff.oa,
        getCopyright: ff.om,
        isTransparentPng: ff.lt
    });
    var gf = cc.prototype;
    S(gf, {
        addItem: gf.ow,
        addSeparator: gf.RB,
        removeSeparator: gf.eF
    });
    var jf = fc.prototype;
    S(jf, {
        setText: jf.Rt
    });
    var kf = V.prototype;
    S(kf, {
        getStatus: kf.um,
        setSearchCompleteCallback: kf.wF,
        getPageCapacity: kf.lf,
        setPageCapacity: kf.Kp,
        setLocation: kf.gn,
        disableFirstResultSelection: kf.LC,
        enableFirstResultSelection: kf.hD,
        gotoPage: kf.zm,
        searchNearby: kf.Gp,
        searchInBounds: kf.bn,
        search: kf.search
    });
    S(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    S(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    S(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var lf = qd.prototype;
    S(lf, {
        clearResults: lf.Me
    });
    sd = rd.prototype;
    S(sd, {
        setPolicy: sd.Qt,
        toString: sd.toString,
        setPageCapacity: sd.Kp
    });
    S(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    S(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var mf = zd.prototype;
    S(mf, {
        routeCall: mf.GN
    });
    S(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    S(window, {
        BMAP_ROUTE_TYPE_DRIVING: bd,
        BMAP_ROUTE_TYPE_WALKING: ad
    });
    S(window, {
        BMAP_ROUTE_STATUS_NORMAL: dd,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var nf = ud.prototype;
    S(nf, {
        setPolicy: nf.Qt
    });
    var of = Hd.prototype;
    S(of, {
        show: of.show,
        hide: of.U,
        setTypes: of.xF,
        setLocation: of.gn,
        search: of.search,
        setInputValue: of.wy
    });
    S(nb.prototype, {});
    var pf = Fd.prototype;
    S(pf, {
        get: pf.get
    });
    S(ac.prototype, {});
    S(db.prototype, {});
    S(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Qc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    S(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: tc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    S(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: uc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    S(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    S(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: dc,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: ec
    });
    S(window, {
        BMAP_SYS_DRAWER: Ja,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    z.TU();
})()