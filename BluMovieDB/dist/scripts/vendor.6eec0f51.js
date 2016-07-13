! function(a, b, c) {
  "use strict";

  function d(a) {
    return function() {
      var b, c, d = arguments[0],
        e = "[" + (a ? a + ":" : "") + d + "] ",
        f = arguments[1],
        g = arguments,
        h = function(a) {
          return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a
        };
      for (b = e + f.replace(/\{\d+\}/g, function(a) {
          var b, c = +a.slice(1, -1);
          return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? R(b) : b) : a
        }), b = b + "\nhttp://errors.angularjs.org/1.2.16/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c]));
      return new Error(b)
    }
  }

  function e(a) {
    if (null == a || A(a)) return !1;
    var b = a.length;
    return 1 === a.nodeType && b ? !0 : u(a) || x(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  function f(a, b, c) {
    var d;
    if (a)
      if (y(a))
        for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
      else if (a.forEach && a.forEach !== f) a.forEach(b, c);
    else if (e(a))
      for (d = 0; d < a.length; d++) b.call(c, a[d], d);
    else
      for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
    return a
  }

  function g(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push(c);
    return b.sort()
  }

  function h(a, b, c) {
    for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
    return d
  }

  function i(a) {
    return function(b, c) {
      a(c, b)
    }
  }

  function j() {
    for (var a, b = Bd.length; b;) {
      if (b--, a = Bd[b].charCodeAt(0), 57 == a) return Bd[b] = "A", Bd.join("");
      if (90 != a) return Bd[b] = String.fromCharCode(a + 1), Bd.join("");
      Bd[b] = "0"
    }
    return Bd.unshift("0"), Bd.join("")
  }

  function k(a, b) {
    b ? a.$$hashKey = b : delete a.$$hashKey
  }

  function l(a) {
    var b = a.$$hashKey;
    return f(arguments, function(b) {
      b !== a && f(b, function(b, c) {
        a[c] = b
      })
    }), k(a, b), a
  }

  function m(a) {
    return parseInt(a, 10)
  }

  function n(a, b) {
    return l(new(l(function() {}, {
      prototype: a
    })), b)
  }

  function o() {}

  function p(a) {
    return a
  }

  function q(a) {
    return function() {
      return a
    }
  }

  function r(a) {
    return "undefined" == typeof a
  }

  function s(a) {
    return "undefined" != typeof a
  }

  function t(a) {
    return null != a && "object" == typeof a
  }

  function u(a) {
    return "string" == typeof a
  }

  function v(a) {
    return "number" == typeof a
  }

  function w(a) {
    return "[object Date]" === yd.call(a)
  }

  function x(a) {
    return "[object Array]" === yd.call(a)
  }

  function y(a) {
    return "function" == typeof a
  }

  function z(a) {
    return "[object RegExp]" === yd.call(a)
  }

  function A(a) {
    return a && a.document && a.location && a.alert && a.setInterval
  }

  function B(a) {
    return a && a.$evalAsync && a.$watch
  }

  function C(a) {
    return "[object File]" === yd.call(a)
  }

  function D(a) {
    return "[object Blob]" === yd.call(a)
  }

  function E(a) {
    return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
  }

  function F(a, b, c) {
    var d = [];
    return f(a, function(a, e, f) {
      d.push(b.call(c, a, e, f))
    }), d
  }

  function G(a, b) {
    return -1 != H(a, b)
  }

  function H(a, b) {
    if (a.indexOf) return a.indexOf(b);
    for (var c = 0; c < a.length; c++)
      if (b === a[c]) return c;
    return -1
  }

  function I(a, b) {
    var c = H(a, b);
    return c >= 0 && a.splice(c, 1), b
  }

  function J(a, b) {
    if (A(a) || B(a)) throw zd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
    if (b) {
      if (a === b) throw zd("cpi", "Can't copy! Source and destination are identical.");
      if (x(a)) {
        b.length = 0;
        for (var c = 0; c < a.length; c++) b.push(J(a[c]))
      } else {
        var d = b.$$hashKey;
        f(b, function(a, c) {
          delete b[c]
        });
        for (var e in a) b[e] = J(a[e]);
        k(b, d)
      }
    } else b = a, a && (x(a) ? b = J(a, []) : w(a) ? b = new Date(a.getTime()) : z(a) ? b = new RegExp(a.source) : t(a) && (b = J(a, {})));
    return b
  }

  function K(a, b) {
    b = b || {};
    for (var c in a) !a.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (b[c] = a[c]);
    return b
  }

  function L(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    if (a !== a && b !== b) return !0;
    var d, e, f, g = typeof a,
      h = typeof b;
    if (g == h && "object" == g) {
      if (!x(a)) {
        if (w(a)) return w(b) && a.getTime() == b.getTime();
        if (z(a) && z(b)) return a.toString() == b.toString();
        if (B(a) || B(b) || A(a) || A(b) || x(b)) return !1;
        f = {};
        for (e in a)
          if ("$" !== e.charAt(0) && !y(a[e])) {
            if (!L(a[e], b[e])) return !1;
            f[e] = !0
          }
        for (e in b)
          if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !y(b[e])) return !1;
        return !0
      }
      if (!x(b)) return !1;
      if ((d = a.length) == b.length) {
        for (e = 0; d > e; e++)
          if (!L(a[e], b[e])) return !1;
        return !0
      }
    }
    return !1
  }

  function M() {
    return b.securityPolicy && b.securityPolicy.isActive || b.querySelector && !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"))
  }

  function N(a, b, c) {
    return a.concat(wd.call(b, c))
  }

  function O(a, b) {
    return wd.call(a, b || 0)
  }

  function P(a, b) {
    var c = arguments.length > 2 ? O(arguments, 2) : [];
    return !y(b) || b instanceof RegExp ? b : c.length ? function() {
      return arguments.length ? b.apply(a, c.concat(wd.call(arguments, 0))) : b.apply(a, c)
    } : function() {
      return arguments.length ? b.apply(a, arguments) : b.call(a)
    }
  }

  function Q(a, d) {
    var e = d;
    return "string" == typeof a && "$" === a.charAt(0) ? e = c : A(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : B(d) && (e = "$SCOPE"), e
  }

  function R(a, b) {
    return "undefined" == typeof a ? c : JSON.stringify(a, Q, b ? "  " : null)
  }

  function S(a) {
    return u(a) ? JSON.parse(a) : a
  }

  function T(a) {
    if ("function" == typeof a) a = !0;
    else if (a && 0 !== a.length) {
      var b = md("" + a);
      a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)
    } else a = !1;
    return a
  }

  function U(a) {
    a = sd(a).clone();
    try {
      a.empty()
    } catch (b) {}
    var c = 3,
      d = sd("<div>").append(a).html();
    try {
      return a[0].nodeType === c ? md(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
        return "<" + md(b)
      })
    } catch (b) {
      return md(d)
    }
  }

  function V(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {}
  }

  function W(a) {
    var b, c, d = {};
    return f((a || "").split("&"), function(a) {
      if (a && (b = a.split("="), c = V(b[0]), s(c))) {
        var e = s(b[1]) ? V(b[1]) : !0;
        d[c] ? x(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
      }
    }), d
  }

  function X(a) {
    var b = [];
    return f(a, function(a, c) {
      x(a) ? f(a, function(a) {
        b.push(Z(c, !0) + (a === !0 ? "" : "=" + Z(a, !0)))
      }) : b.push(Z(c, !0) + (a === !0 ? "" : "=" + Z(a, !0)))
    }), b.length ? b.join("&") : ""
  }

  function Y(a) {
    return Z(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function Z(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
  }

  function $(a, c) {
    function d(a) {
      a && h.push(a)
    }
    var e, g, h = [a],
      i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
      j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    f(i, function(c) {
      i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d))
    }), f(h, function(a) {
      if (!e) {
        var b = " " + a.className + " ",
          c = j.exec(b);
        c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
          !e && i[b.name] && (e = a, g = b.value)
        })
      }
    }), e && c(e, g ? [g] : [])
  }

  function _(c, d) {
    var e = function() {
        if (c = sd(c), c.injector()) {
          var a = c[0] === b ? "document" : U(c);
          throw zd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a)
        }
        d = d || [], d.unshift(["$provide", function(a) {
          a.value("$rootElement", c)
        }]), d.unshift("ng");
        var e = Ib(d);
        return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d) {
          a.$apply(function() {
            b.data("$injector", d), c(b)(a)
          })
        }]), e
      },
      g = /^NG_DEFER_BOOTSTRAP!/;
    return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ad.resumeBootstrap = function(a) {
      f(a, function(a) {
        d.push(a)
      }), e()
    }))
  }

  function ab(a, b) {
    return b = b || "_", a.replace(Dd, function(a, c) {
      return (c ? b : "") + a.toLowerCase()
    })
  }

  function bb() {
    td = a.jQuery, td ? (sd = td, l(td.fn, {
      scope: Sd.scope,
      isolateScope: Sd.isolateScope,
      controller: Sd.controller,
      injector: Sd.injector,
      inheritedData: Sd.inheritedData
    }), lb("remove", !0, !0, !1), lb("empty", !1, !1, !1), lb("html", !1, !1, !0)) : sd = pb, Ad.element = sd
  }

  function cb(a, b, c) {
    if (!a) throw zd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
    return a
  }

  function db(a, b, c) {
    return c && x(a) && (a = a[a.length - 1]), cb(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
  }

  function eb(a, b) {
    if ("hasOwnProperty" === a) throw zd("badname", "hasOwnProperty is not a valid {0} name", b)
  }

  function fb(a, b, c) {
    if (!b) return a;
    for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
    return !c && y(a) ? P(f, a) : a
  }

  function gb(a) {
    var b = a[0],
      c = a[a.length - 1];
    if (b === c) return sd(b);
    var d = b,
      e = [d];
    do {
      if (d = d.nextSibling, !d) break;
      e.push(d)
    } while (d !== c);
    return sd(e)
  }

  function hb(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c())
    }
    var c = d("$injector"),
      e = d("ng"),
      f = b(a, "angular", Object);
    return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
      var a = {};
      return function(d, f, g) {
        var h = function(a, b) {
          if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
        };
        return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
          function a(a, c, d) {
            return function() {
              return b[d || "push"]([a, c, arguments]), i
            }
          }
          if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
          var b = [],
            e = [],
            h = a("$injector", "invoke"),
            i = {
              _invokeQueue: b,
              _runBlocks: e,
              requires: f,
              name: d,
              provider: a("$provide", "provider"),
              factory: a("$provide", "factory"),
              service: a("$provide", "service"),
              value: a("$provide", "value"),
              constant: a("$provide", "constant", "unshift"),
              animation: a("$animateProvider", "register"),
              filter: a("$filterProvider", "register"),
              controller: a("$controllerProvider", "register"),
              directive: a("$compileProvider", "directive"),
              config: h,
              run: function(a) {
                return e.push(a), this
              }
            };
          return g && h(g), i
        })
      }
    })
  }

  function ib(b) {
    l(b, {
      bootstrap: _,
      copy: J,
      extend: l,
      equals: L,
      element: sd,
      forEach: f,
      injector: Ib,
      noop: o,
      bind: P,
      toJson: R,
      fromJson: S,
      identity: p,
      isUndefined: r,
      isDefined: s,
      isString: u,
      isFunction: y,
      isObject: t,
      isNumber: v,
      isElement: E,
      isArray: x,
      version: Ed,
      isDate: w,
      lowercase: md,
      uppercase: od,
      callbacks: {
        counter: 0
      },
      $$minErr: d,
      $$csp: M
    }), ud = hb(a);
    try {
      ud("ngLocale")
    } catch (c) {
      ud("ngLocale", []).provider("$locale", dc)
    }
    ud("ng", ["ngLocale"], ["$provide", function(a) {
      a.provider({
        $$sanitizeUri: Ec
      }), a.provider("$compile", Pb).directive({
        a: ye,
        input: Ie,
        textarea: Ie,
        form: Ce,
        script: qf,
        select: tf,
        style: vf,
        option: uf,
        ngBind: Ue,
        ngBindHtml: We,
        ngBindTemplate: Ve,
        ngClass: Xe,
        ngClassEven: Ze,
        ngClassOdd: Ye,
        ngCloak: $e,
        ngController: _e,
        ngForm: De,
        ngHide: kf,
        ngIf: bf,
        ngInclude: cf,
        ngInit: ef,
        ngNonBindable: ff,
        ngPluralize: gf,
        ngRepeat: hf,
        ngShow: jf,
        ngStyle: lf,
        ngSwitch: mf,
        ngSwitchWhen: nf,
        ngSwitchDefault: of,
        ngOptions: sf,
        ngTransclude: pf,
        ngModel: Oe,
        ngList: Re,
        ngChange: Pe,
        required: Qe,
        ngRequired: Qe,
        ngValue: Te
      }).directive({
        ngInclude: df
      }).directive(ze).directive(af), a.provider({
        $anchorScroll: Jb,
        $animate: _d,
        $browser: Mb,
        $cacheFactory: Nb,
        $controller: Sb,
        $document: Tb,
        $exceptionHandler: Ub,
        $filter: Pc,
        $interpolate: bc,
        $interval: cc,
        $http: Zb,
        $httpBackend: _b,
        $location: qc,
        $log: rc,
        $parse: zc,
        $rootScope: Dc,
        $q: Ac,
        $sce: Jc,
        $sceDelegate: Ic,
        $sniffer: Kc,
        $templateCache: Ob,
        $timeout: Lc,
        $window: Oc,
        $$rAF: Cc,
        $$asyncCallback: Kb
      })
    }])
  }

  function jb() {
    return ++Hd
  }

  function kb(a) {
    return a.replace(Kd, function(a, b, c, d) {
      return d ? c.toUpperCase() : c
    }).replace(Ld, "Moz$1")
  }

  function lb(a, b, c, d) {
    function e(a) {
      var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
        n = b;
      if (!d || null != a)
        for (; m.length;)
          for (e = m.shift(), g = 0, h = e.length; h > g; g++)
            for (i = sd(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(td(l[j]));
      return f.apply(this, arguments)
    }
    var f = td.fn[a];
    f = f.$original || f, e.$original = f, td.fn[a] = e
  }

  function mb(a) {
    return !Od.test(a)
  }

  function nb(a, b) {
    var c, d, e, f, g, h, i = b.createDocumentFragment(),
      j = [];
    if (mb(a)) j.push(b.createTextNode(a));
    else {
      for (c = i.appendChild(b.createElement("div")), d = (Pd.exec(a) || ["", ""])[1].toLowerCase(), e = Rd[d] || Rd._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Qd, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--;) c = c.lastChild;
      for (g = 0, h = c.childNodes.length; h > g; ++g) j.push(c.childNodes[g]);
      c = i.firstChild, c.textContent = ""
    }
    return i.textContent = "", i.innerHTML = "", j
  }

  function ob(a, c) {
    c = c || b;
    var d;
    return (d = Nd.exec(a)) ? [c.createElement(d[1])] : nb(a, c)
  }

  function pb(a) {
    if (a instanceof pb) return a;
    if (u(a) && (a = Cd(a)), !(this instanceof pb)) {
      if (u(a) && "<" != a.charAt(0)) throw Md("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
      return new pb(a)
    }
    if (u(a)) {
      zb(this, ob(a));
      var c = sd(b.createDocumentFragment());
      c.append(this)
    } else zb(this, a)
  }

  function qb(a) {
    return a.cloneNode(!0)
  }

  function rb(a) {
    tb(a);
    for (var b = 0, c = a.childNodes || []; b < c.length; b++) rb(c[b])
  }

  function sb(a, b, c, d) {
    if (s(d)) throw Md("offargs", "jqLite#off() does not support the `selector` argument");
    var e = ub(a, "events"),
      g = ub(a, "handle");
    g && (r(b) ? f(e, function(b, c) {
      Jd(a, c, b), delete e[c]
    }) : f(b.split(" "), function(b) {
      r(c) ? (Jd(a, b, e[b]), delete e[b]) : I(e[b] || [], c)
    }))
  }

  function tb(a, b) {
    var d = a[Gd],
      e = Fd[d];
    if (e) {
      if (b) return void delete Fd[d].data[b];
      e.handle && (e.events.$destroy && e.handle({}, "$destroy"), sb(a)), delete Fd[d], a[Gd] = c
    }
  }

  function ub(a, b, c) {
    var d = a[Gd],
      e = Fd[d || -1];
    return s(c) ? (e || (a[Gd] = d = jb(), e = Fd[d] = {}), void(e[b] = c)) : e && e[b]
  }

  function vb(a, b, c) {
    var d = ub(a, "data"),
      e = s(c),
      f = !e && s(b),
      g = f && !t(b);
    if (d || g || ub(a, "data", d = {}), e) d[b] = c;
    else {
      if (!f) return d;
      if (g) return d && d[b];
      l(d, b)
    }
  }

  function wb(a, b) {
    return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
  }

  function xb(a, b) {
    b && a.setAttribute && f(b.split(" "), function(b) {
      a.setAttribute("class", Cd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Cd(b) + " ", " ")))
    })
  }

  function yb(a, b) {
    if (b && a.setAttribute) {
      var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      f(b.split(" "), function(a) {
        a = Cd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
      }), a.setAttribute("class", Cd(c))
    }
  }

  function zb(a, b) {
    if (b) {
      b = b.nodeName || !s(b.length) || A(b) ? [b] : b;
      for (var c = 0; c < b.length; c++) a.push(b[c])
    }
  }

  function Ab(a, b) {
    return Bb(a, "$" + (b || "ngController") + "Controller")
  }

  function Bb(a, b, d) {
    a = sd(a), 9 == a[0].nodeType && (a = a.find("html"));
    for (var e = x(b) ? b : [b]; a.length;) {
      for (var f = a[0], g = 0, h = e.length; h > g; g++)
        if ((d = a.data(e[g])) !== c) return d;
      a = sd(f.parentNode || 11 === f.nodeType && f.host)
    }
  }

  function Cb(a) {
    for (var b = 0, c = a.childNodes; b < c.length; b++) rb(c[b]);
    for (; a.firstChild;) a.removeChild(a.firstChild)
  }

  function Db(a, b) {
    var c = Td[b.toLowerCase()];
    return c && Ud[a.nodeName] && c
  }

  function Eb(a, c) {
    var d = function(d, e) {
      if (d.preventDefault || (d.preventDefault = function() {
          d.returnValue = !1
        }), d.stopPropagation || (d.stopPropagation = function() {
          d.cancelBubble = !0
        }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
        var g = d.preventDefault;
        d.preventDefault = function() {
          d.defaultPrevented = !0, g.call(d)
        }, d.defaultPrevented = !1
      }
      d.isDefaultPrevented = function() {
        return d.defaultPrevented || d.returnValue === !1
      };
      var h = K(c[e || d.type] || []);
      f(h, function(b) {
        b.call(a, d)
      }), 8 >= rd ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented)
    };
    return d.elem = a, d
  }

  function Fb(a) {
    var b, d = typeof a;
    return "object" == d && null !== a ? "function" == typeof(b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = j()) : b = a, d + ":" + b
  }

  function Gb(a) {
    f(a, this.put, this)
  }

  function Hb(a) {
    var b, c, d, e;
    return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Yd, ""), d = c.match(Vd), f(d[1].split(Wd), function(a) {
      a.replace(Xd, function(a, c, d) {
        b.push(d)
      })
    })), a.$inject = b) : x(a) ? (e = a.length - 1, db(a[e], "fn"), b = a.slice(0, e)) : db(a, "fn", !0), b
  }

  function Ib(a) {
    function b(a) {
      return function(b, c) {
        return t(b) ? void f(b, i(a)) : a(b, c)
      }
    }

    function c(a, b) {
      if (eb(a, "service"), (y(b) || x(b)) && (b = v.instantiate(b)), !b.$get) throw Zd("pget", "Provider '{0}' must define $get factory method.", a);
      return s[a + n] = b
    }

    function d(a, b) {
      return c(a, {
        $get: b
      })
    }

    function e(a, b) {
      return d(a, ["$injector", function(a) {
        return a.instantiate(b)
      }])
    }

    function g(a, b) {
      return d(a, q(b))
    }

    function h(a, b) {
      eb(a, "constant"), s[a] = b, w[a] = b
    }

    function j(a, b) {
      var c = v.get(a + n),
        d = c.$get;
      c.$get = function() {
        var a = z.invoke(d, c);
        return z.invoke(b, null, {
          $delegate: a
        })
      }
    }

    function k(a) {
      var b, c, d, e, g = [];
      return f(a, function(a) {
        if (!r.get(a)) {
          r.put(a, !0);
          try {
            if (u(a))
              for (b = ud(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) {
                var f = c[d],
                  h = v.get(f[0]);
                h[f[1]].apply(h, f[2])
              } else y(a) ? g.push(v.invoke(a)) : x(a) ? g.push(v.invoke(a)) : db(a, "module")
          } catch (i) {
            throw x(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Zd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i)
          }
        }
      }), g
    }

    function l(a, b) {
      function c(c) {
        if (a.hasOwnProperty(c)) {
          if (a[c] === m) throw Zd("cdep", "Circular dependency found: {0}", p.join(" <- "));
          return a[c]
        }
        try {
          return p.unshift(c), a[c] = m, a[c] = b(c)
        } catch (d) {
          throw a[c] === m && delete a[c], d
        } finally {
          p.shift()
        }
      }

      function d(a, b, d) {
        var e, f, g, h = [],
          i = Hb(a);
        for (f = 0, e = i.length; e > f; f++) {
          if (g = i[f], "string" != typeof g) throw Zd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
          h.push(d && d.hasOwnProperty(g) ? d[g] : c(g))
        }
        return a.$inject || (a = a[e]), a.apply(b, h)
      }

      function e(a, b) {
        var c, e, f = function() {};
        return f.prototype = (x(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || y(e) ? e : c
      }
      return {
        invoke: d,
        instantiate: e,
        get: c,
        annotate: Hb,
        has: function(b) {
          return s.hasOwnProperty(b + n) || a.hasOwnProperty(b)
        }
      }
    }
    var m = {},
      n = "Provider",
      p = [],
      r = new Gb,
      s = {
        $provide: {
          provider: b(c),
          factory: b(d),
          service: b(e),
          value: b(g),
          constant: b(h),
          decorator: j
        }
      },
      v = s.$injector = l(s, function() {
        throw Zd("unpr", "Unknown provider: {0}", p.join(" <- "))
      }),
      w = {},
      z = w.$injector = l(w, function(a) {
        var b = v.get(a + n);
        return z.invoke(b.$get, b)
      });
    return f(k(a), function(a) {
      z.invoke(a || o)
    }), z
  }

  function Jb() {
    var a = !0;
    this.disableAutoScrolling = function() {
      a = !1
    }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
      function e(a) {
        var b = null;
        return f(a, function(a) {
          b || "a" !== md(a.nodeName) || (b = a)
        }), b
      }

      function g() {
        var a, d = c.hash();
        d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0)
      }
      var h = b.document;
      return a && d.$watch(function() {
        return c.hash()
      }, function() {
        d.$evalAsync(g)
      }), g
    }]
  }

  function Kb() {
    this.$get = ["$$rAF", "$timeout", function(a, b) {
      return a.supported ? function(b) {
        return a(b)
      } : function(a) {
        return b(a, 0, !1)
      }
    }]
  }

  function Lb(a, b, d, e) {
    function g(a) {
      try {
        a.apply(null, O(arguments, 1))
      } finally {
        if (s--, 0 === s)
          for (; t.length;) try {
            t.pop()()
          } catch (b) {
            d.error(b)
          }
      }
    }

    function h(a, b) {
      ! function c() {
        f(w, function(a) {
          a()
        }), v = b(c, a)
      }()
    }

    function i() {
      z = null, x != j.url() && (x = j.url(), f(A, function(a) {
        a(j.url())
      }))
    }
    var j = this,
      k = b[0],
      l = a.location,
      m = a.history,
      n = a.setTimeout,
      p = a.clearTimeout,
      q = {};
    j.isMock = !1;
    var s = 0,
      t = [];
    j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
      s++
    }, j.notifyWhenNoOutstandingRequests = function(a) {
      f(w, function(a) {
        a()
      }), 0 === s ? a() : t.push(a)
    };
    var v, w = [];
    j.addPollFn = function(a) {
      return r(v) && h(100, n), w.push(a), a
    };
    var x = l.href,
      y = b.find("base"),
      z = null;
    j.url = function(b, c) {
      if (l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
        if (x == b) return;
        return x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j
      }
      return z || l.href.replace(/%27/g, "'")
    };
    var A = [],
      B = !1;
    j.onUrlChange = function(b) {
      return B || (e.history && sd(a).on("popstate", i), e.hashchange ? sd(a).on("hashchange", i) : j.addPollFn(i), B = !0), A.push(b), b
    }, j.baseHref = function() {
      var a = y.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    var C = {},
      D = "",
      E = j.baseHref();
    j.cookies = function(a, b) {
      var e, f, g, h, i;
      if (!a) {
        if (k.cookie !== D)
          for (D = k.cookie, f = D.split("; "), C = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), C[a] === c && (C[a] = unescape(g.substring(i + 1))));
        return C
      }
      b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
    }, j.defer = function(a, b) {
      var c;
      return s++, c = n(function() {
        delete q[c], g(a)
      }, b || 0), q[c] = !0, c
    }, j.defer.cancel = function(a) {
      return q[a] ? (delete q[a], p(a), g(o), !0) : !1
    }
  }

  function Mb() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
      return new Lb(a, d, b, c)
    }]
  }

  function Nb() {
    this.$get = function() {
      function a(a, c) {
        function e(a) {
          a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }
        if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
        var g = 0,
          h = l({}, c, {
            id: a
          }),
          i = {},
          j = c && c.capacity || Number.MAX_VALUE,
          k = {},
          m = null,
          n = null;
        return b[a] = {
          put: function(a, b) {
            if (j < Number.MAX_VALUE) {
              var c = k[a] || (k[a] = {
                key: a
              });
              e(c)
            }
            if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
          },
          get: function(a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b) return;
              e(b)
            }
            return i[a]
          },
          remove: function(a) {
            if (j < Number.MAX_VALUE) {
              var b = k[a];
              if (!b) return;
              b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
            }
            delete i[a], g--
          },
          removeAll: function() {
            i = {}, g = 0, k = {}, m = n = null
          },
          destroy: function() {
            i = null, h = null, k = null, delete b[a]
          },
          info: function() {
            return l({}, h, {
              size: g
            })
          }
        }
      }
      var b = {};
      return a.info = function() {
        var a = {};
        return f(b, function(b, c) {
          a[c] = b.info()
        }), a
      }, a.get = function(a) {
        return b[a]
      }, a
    }
  }

  function Ob() {
    this.$get = ["$cacheFactory", function(a) {
      return a("templates")
    }]
  }

  function Pb(a, d) {
    var e = {},
      g = "Directive",
      h = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
      j = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
      k = /^(on[a-z]+|formaction)$/;
    this.directive = function m(b, c) {
      return eb(b, "directive"), u(b) ? (cb(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler", function(a, c) {
        var d = [];
        return f(e[b], function(e, f) {
          try {
            var g = a.invoke(e);
            y(g) ? g = {
              compile: q(g)
            } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g)
          } catch (h) {
            c(h)
          }
        }), d
      }])), e[b].push(c)) : f(b, i(m)), this
    }, this.aHrefSanitizationWhitelist = function(a) {
      return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
    }, this.imgSrcSanitizationWhitelist = function(a) {
      return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
    }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, i, m, o, r, s, v, w, z, A, B) {
      function C(a, b, c, d, e) {
        a instanceof sd || (a = sd(a)), f(a, function(b, c) {
          3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = sd(b).wrap("<span></span>").parent()[0])
        });
        var g = E(a, b, a, c, d, e);
        return D(a, "ng-scope"),
          function(b, c, d) {
            cb(b, "scope");
            var e = c ? Sd.clone.call(a) : a;
            f(d, function(a, b) {
              e.data("$" + b + "Controller", a)
            });
            for (var h = 0, i = e.length; i > h; h++) {
              var j = e[h],
                k = j.nodeType;
              (1 === k || 9 === k) && e.eq(h).data("$scope", b)
            }
            return c && c(e, b), g && g(b, e, e), e
          }
      }

      function D(a, b) {
        try {
          a.addClass(b)
        } catch (c) {}
      }

      function E(a, b, d, e, f, g) {
        function h(a, d, e, f) {
          var g, h, i, j, k, l, m, n, p, q = d.length,
            r = new Array(q);
          for (m = 0; q > m; m++) r[m] = d[m];
          for (m = 0, p = 0, n = o.length; n > m; p++) i = r[p], g = o[m++], h = o[m++], j = sd(i), g ? (g.scope ? (k = a.$new(), j.data("$scope", k)) : k = a, l = g.transclude, l || !f && b ? g(h, k, i, e, F(a, l || b)) : g(h, k, i, e, f)) : h && h(a, i.childNodes, c, f)
        }
        for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new $, j = G(a[p], [], i, 0 === p ? e : c, f), k = j.length ? J(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && D(sd(a[p]), "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : E(l, k ? k.transclude : b), o.push(k, m), n = n || k || m, g = null;
        return n ? h : null
      }

      function F(a, b) {
        return function(c, d, e) {
          var f = !1;
          c || (c = a.$new(), c.$$transcluded = !0, f = !0);
          var g = b(c, d, e);
          return f && g.on("$destroy", P(c, c.$destroy)), g
        }
      }

      function G(a, b, c, d, e) {
        var f, g, i = a.nodeType,
          k = c.$attr;
        switch (i) {
          case 1:
            N(b, Qb(vd(a).toLowerCase()), "E", d, e);
            for (var l, m, n, o, p, q = a.attributes, r = 0, s = q && q.length; s > r; r++) {
              var t = !1,
                v = !1;
              if (l = q[r], !rd || rd >= 8 || l.specified) {
                m = l.name, o = Qb(m), eb.test(o) && (m = ab(o.substr(6), "-"));
                var w = o.replace(/(Start|End)$/, "");
                o === w + "Start" && (t = m, v = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = Qb(m.toLowerCase()), k[n] = m, c[n] = p = Cd(l.value), Db(a, n) && (c[n] = !0), X(a, b, p, n), N(b, n, "A", d, e, t, v)
              }
            }
            if (g = a.className, u(g) && "" !== g)
              for (; f = j.exec(g);) n = Qb(f[2]), N(b, n, "C", d, e) && (c[n] = Cd(f[3])), g = g.substr(f.index + f[0].length);
            break;
          case 3:
            V(b, a.nodeValue);
            break;
          case 8:
            try {
              f = h.exec(a.nodeValue), f && (n = Qb(f[1]), N(b, n, "M", d, e) && (c[n] = Cd(f[2])))
            } catch (x) {}
        }
        return b.sort(S), b
      }

      function H(a, b, c) {
        var d = [],
          e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ae("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
          } while (e > 0)
        } else d.push(a);
        return sd(d)
      }

      function I(a, b, c) {
        return function(d, e, f, g, h) {
          return e = H(e[0], b, c), a(d, e, f, g, h)
        }
      }

      function J(a, e, g, h, j, k, l, m, n) {
        function o(a, b, c, d) {
          a && (c && (a = I(a, c, d)), a.require = w.require, (N === w || w.$$isolateScope) && (a = Z(a, {
            isolateScope: !0
          })), l.push(a)), b && (c && (b = I(b, c, d)), b.require = w.require, (N === w || w.$$isolateScope) && (b = Z(b, {
            isolateScope: !0
          })), m.push(b))
        }

        function p(a, b, c) {
          var d, e = "data",
            g = !1;
          if (u(a)) {
            for (;
              "^" == (d = a.charAt(0)) || "?" == d;) a = a.substr(1), "^" == d && (e = "inheritedData"), g = g || "?" == d;
            if (d = null, c && "data" === e && (d = c[a]), d = d || b[e]("$" + a + "Controller"), !d && !g) throw ae("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", a, z);
            return d
          }
          return x(a) && (d = [], f(a, function(a) {
            d.push(p(a, b, c))
          })), d
        }

        function q(a, b, h, j, k) {
          function n(a, b) {
            var d;
            return arguments.length < 2 && (b = a, a = c), W && (d = z), k(a, b, d)
          }
          var o, q, t, u, v, w, x, y, z = {};
          if (o = e === h ? g : K(g, new $(sd(h), g.$attr)), q = o.$$element, N) {
            var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/,
              B = sd(h);
            x = b.$new(!0), P && P === N.$$originalDirective ? B.data("$isolateScope", x) : B.data("$isolateScopeNoTemplate", x), D(B, "ng-isolate-scope"), f(N.scope, function(a, c) {
              var e, f, g, h, i = a.match(A) || [],
                j = i[3] || c,
                k = "?" == i[2],
                l = i[1];
              switch (x.$$isolateBindings[c] = l + j, l) {
                case "@":
                  o.$observe(j, function(a) {
                    x[c] = a
                  }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b));
                  break;
                case "=":
                  if (k && !o[j]) return;
                  f = r(o[j]), h = f.literal ? L : function(a, b) {
                    return a === b
                  }, g = f.assign || function() {
                    throw e = x[c] = f(b), ae("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], N.name)
                  }, e = x[c] = f(b), x.$watch(function() {
                    var a = f(b);
                    return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a
                  }, null, f.literal);
                  break;
                case "&":
                  f = r(o[j]), x[c] = function(a) {
                    return f(b, a)
                  };
                  break;
                default:
                  throw ae("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", N.name, c, a)
              }
            })
          }
          for (y = k && n, J && f(J, function(a) {
              var c, d = {
                $scope: a === N || a.$$isolateScope ? x : b,
                $element: q,
                $attrs: o,
                $transclude: y
              };
              w = a.controller, "@" == w && (w = o[a.name]), c = s(w, d), z[a.name] = c, W || q.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c)
            }), t = 0, u = l.length; u > t; t++) try {
            v = l[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
          } catch (C) {
            i(C, U(q))
          }
          var E = b;
          for (N && (N.template || null === N.templateUrl) && (E = x), a && a(E, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try {
            v = m[t], v(v.isolateScope ? x : b, q, o, v.require && p(v.require, q, z), y)
          } catch (C) {
            i(C, U(q))
          }
        }
        n = n || {};
        for (var v, w, z, A, B, E, F = -Number.MAX_VALUE, J = n.controllerDirectives, N = n.newIsolateScopeDirective, P = n.templateDirective, S = n.nonTlbTranscludeDirective, V = !1, W = n.hasElementTranscludeDirective, X = g.$$element = sd(e), _ = k, ab = h, bb = 0, cb = a.length; cb > bb; bb++) {
          w = a[bb];
          var eb = w.$$start,
            fb = w.$$end;
          if (eb && (X = H(e, eb, fb)), A = c, F > w.priority) break;
          if ((E = w.scope) && (v = v || w, w.templateUrl || (T("new/isolated scope", N, w, X), t(E) && (N = w))), z = w.name, !w.templateUrl && w.controller && (E = w.controller, J = J || {}, T("'" + z + "' controller", J[z], w, X), J[z] = w), (E = w.transclude) && (V = !0, w.$$tlb || (T("transclusion", S, w, X), S = w), "element" == E ? (W = !0, F = w.priority, A = H(e, eb, fb), X = g.$$element = sd(b.createComment(" " + z + ": " + g[z] + " ")), e = X[0], Y(j, sd(O(A)), e), ab = C(A, h, F, _ && _.name, {
              nonTlbTranscludeDirective: S
            })) : (A = sd(qb(e)).contents(), X.empty(), ab = C(A, h))), w.template)
            if (T("template", P, w, X), P = w, E = y(w.template) ? w.template(X, g) : w.template, E = db(E), w.replace) {
              if (_ = w, A = mb(E) ? [] : sd(E), e = A[0], 1 != A.length || 1 !== e.nodeType) throw ae("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", z, "");
              Y(j, X, e);
              var gb = {
                  $attr: {}
                },
                hb = G(e, [], gb),
                ib = a.splice(bb + 1, a.length - (bb + 1));
              N && M(hb), a = a.concat(hb).concat(ib), Q(g, gb), cb = a.length
            } else X.html(E);
          if (w.templateUrl) T("template", P, w, X), P = w, w.replace && (_ = w), q = R(a.splice(bb, a.length - bb), X, g, j, ab, l, m, {
            controllerDirectives: J,
            newIsolateScopeDirective: N,
            templateDirective: P,
            nonTlbTranscludeDirective: S
          }), cb = a.length;
          else if (w.compile) try {
            B = w.compile(X, g, ab), y(B) ? o(null, B, eb, fb) : B && o(B.pre, B.post, eb, fb)
          } catch (jb) {
            i(jb, U(X))
          }
          w.terminal && (q.terminal = !0, F = Math.max(F, w.priority))
        }
        return q.scope = v && v.scope === !0, q.transclude = V && ab, n.hasElementTranscludeDirective = W, q
      }

      function M(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
          $$isolateScope: !0
        })
      }

      function N(b, d, f, h, j, k, l) {
        if (d === j) return null;
        var m = null;
        if (e.hasOwnProperty(d))
          for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try {
            o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
              $$start: k,
              $$end: l
            })), b.push(o), m = o)
          } catch (s) {
            i(s)
          }
        return m
      }

      function Q(a, b) {
        var c = b.$attr,
          d = a.$attr,
          e = a.$$element;
        f(a, function(d, e) {
          "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        }), f(b, function(b, f) {
          "class" == f ? (D(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function R(a, b, c, d, e, g, h, i) {
        var j, k, n = [],
          p = b[0],
          q = a.shift(),
          r = l({}, q, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: q
          }),
          s = y(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
        return b.empty(), m.get(z.getTrustedResourceUrl(s), {
            cache: o
          }).success(function(l) {
            var m, o, u, v;
            if (l = db(l), q.replace) {
              if (u = mb(l) ? [] : sd(l), m = u[0], 1 != u.length || 1 !== m.nodeType) throw ae("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
              o = {
                $attr: {}
              }, Y(d, b, m);
              var w = G(m, [], o);
              t(q.scope) && M(w), a = w.concat(a), Q(c, o)
            } else m = p, b.html(l);
            for (a.unshift(r), j = J(a, m, c, e, b, q, g, h, i), f(d, function(a, c) {
                a == m && (d[c] = b[0])
              }), k = E(b[0].childNodes, e); n.length;) {
              var x = n.shift(),
                y = n.shift(),
                z = n.shift(),
                A = n.shift(),
                B = b[0];
              if (y !== p) {
                var C = y.className;
                i.hasElementTranscludeDirective && q.replace || (B = qb(m)), Y(z, sd(y), B), D(sd(B), C)
              }
              v = j.transclude ? F(x, j.transclude) : A, j(k, x, B, d, v)
            }
            n = null
          }).error(function(a, b, c, d) {
            throw ae("tpload", "Failed to load template: {0}", d.url)
          }),
          function(a, b, c, d, e) {
            n ? (n.push(b), n.push(c), n.push(d), n.push(e)) : j(k, b, c, d, e)
          }
      }

      function S(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function T(a, b, c, d) {
        if (b) throw ae("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, U(d))
      }

      function V(a, b) {
        var c = d(b, !0);
        c && a.push({
          priority: 0,
          compile: q(function(a, b) {
            var d = b.parent(),
              e = d.data("$binding") || [];
            e.push(c), D(d.data("$binding", e), "ng-binding"), a.$watch(c, function(a) {
              b[0].nodeValue = a
            })
          })
        })
      }

      function W(a, b) {
        if ("srcdoc" == b) return z.HTML;
        var c = vd(a);
        return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? z.RESOURCE_URL : void 0
      }

      function X(a, b, c, e) {
        var f = d(c, !0);
        if (f) {
          if ("multiple" === e && "SELECT" === vd(a)) throw ae("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", U(a));
          b.push({
            priority: 100,
            compile: function() {
              return {
                pre: function(b, c, g) {
                  var h = g.$$observers || (g.$$observers = {});
                  if (k.test(e)) throw ae("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                  f = d(g[e], !0, W(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
                    "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                  }))
                }
              }
            }
          })
        }
      }

      function Y(a, c, d) {
        var e, f, g = c[0],
          h = c.length,
          i = g.parentNode;
        if (a)
          for (e = 0, f = a.length; f > e; e++)
            if (a[e] == g) {
              a[e++] = d;
              for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
              a.length -= h - 1;
              break
            }
        i && i.replaceChild(d, g);
        var m = b.createDocumentFragment();
        m.appendChild(g), d[sd.expando] = g[sd.expando];
        for (var n = 1, o = c.length; o > n; n++) {
          var p = c[n];
          sd(p).remove(), m.appendChild(p), delete c[n]
        }
        c[0] = d, c.length = 1
      }

      function Z(a, b) {
        return l(function() {
          return a.apply(null, arguments)
        }, a, b)
      }
      var $ = function(a, b) {
        this.$$element = a, this.$attr = b || {}
      };
      $.prototype = {
        $normalize: Qb,
        $addClass: function(a) {
          a && a.length > 0 && A.addClass(this.$$element, a)
        },
        $removeClass: function(a) {
          a && a.length > 0 && A.removeClass(this.$$element, a)
        },
        $updateClass: function(a, b) {
          var c = Rb(a, b),
            d = Rb(b, a);
          0 === c.length ? A.removeClass(this.$$element, d) : 0 === d.length ? A.addClass(this.$$element, c) : A.setClass(this.$$element, c, d)
        },
        $set: function(a, b, d, e) {
          var g, h = Db(this.$$element[0], a);
          h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = ab(a, "-"))), g = vd(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = B(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
          var j = this.$$observers;
          j && f(j[a], function(a) {
            try {
              a(b)
            } catch (c) {
              i(c)
            }
          })
        },
        $observe: function(a, b) {
          var c = this,
            d = c.$$observers || (c.$$observers = {}),
            e = d[a] || (d[a] = []);
          return e.push(b), v.$evalAsync(function() {
            e.$$inter || b(c[a])
          }), b
        }
      };
      var _ = d.startSymbol(),
        bb = d.endSymbol(),
        db = "{{" == _ || "}}" == bb ? p : function(a) {
          return a.replace(/\{\{/g, _).replace(/}}/g, bb)
        },
        eb = /^ngAttr[A-Z]/;
      return C
    }]
  }

  function Qb(a) {
    return kb(a.replace(be, ""))
  }

  function Rb(a, b) {
    var c = "",
      d = a.split(/\s+/),
      e = b.split(/\s+/);
    a: for (var f = 0; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++)
        if (g == e[h]) continue a;
      c += (c.length > 0 ? " " : "") + g
    }
    return c
  }

  function Sb() {
    var a = {},
      b = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function(b, c) {
      eb(b, "controller"), t(b) ? l(a, b) : a[b] = c
    }, this.$get = ["$injector", "$window", function(c, e) {
      return function(f, g) {
        var h, i, j, k;
        if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : fb(g.$scope, j, !0) || fb(e, j, !0), db(f, j, !0)), h = c.instantiate(f, g), k) {
          if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
          g.$scope[k] = h
        }
        return h
      }
    }]
  }

  function Tb() {
    this.$get = ["$window", function(a) {
      return sd(a.document)
    }]
  }

  function Ub() {
    this.$get = ["$log", function(a) {
      return function() {
        a.error.apply(a, arguments)
      }
    }]
  }

  function Vb(a) {
    var b, c, d, e = {};
    return a ? (f(a.split("\n"), function(a) {
      d = a.indexOf(":"), b = md(Cd(a.substr(0, d))), c = Cd(a.substr(d + 1)), b && (e[b] ? e[b] += ", " + c : e[b] = c)
    }), e) : e
  }

  function Wb(a) {
    var b = t(a) ? a : c;
    return function(c) {
      return b || (b = Vb(a)), c ? b[md(c)] || null : b
    }
  }

  function Xb(a, b, c) {
    return y(c) ? c(a, b) : (f(c, function(c) {
      a = c(a, b)
    }), a)
  }

  function Yb(a) {
    return a >= 200 && 300 > a
  }

  function Zb() {
    var a = /^\s*(\[|\{[^\{])/,
      b = /[\}\]]\s*$/,
      d = /^\)\]\}',?\n/,
      e = {
        "Content-Type": "application/json;charset=utf-8"
      },
      g = this.defaults = {
        transformResponse: [function(c) {
          return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = S(c))), c
        }],
        transformRequest: [function(a) {
          return !t(a) || C(a) || D(a) ? a : R(a)
        }],
        headers: {
          common: {
            Accept: "application/json, text/plain, */*"
          },
          post: J(e),
          put: J(e),
          patch: J(e)
        },
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      },
      i = this.interceptors = [],
      j = this.responseInterceptors = [];
    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
      function n(a) {
        function d(a) {
          var b = l({}, a, {
            data: Xb(a.data, a.headers, h.transformResponse)
          });
          return Yb(a.status) ? b : k.reject(b)
        }

        function e(a) {
          function b(a) {
            var b;
            f(a, function(c, d) {
              y(c) && (b = c(), null != b ? a[d] = b : delete a[d])
            })
          }
          var c, d, e, h = g.headers,
            i = l({}, a.headers);
          h = l({}, h.common, h[md(a.method)]), b(h), b(i);
          a: for (c in h) {
            d = md(c);
            for (e in i)
              if (md(e) === d) continue a;
            i[c] = h[c]
          }
          return i
        }
        var h = {
            method: "get",
            transformRequest: g.transformRequest,
            transformResponse: g.transformResponse
          },
          i = e(a);
        l(h, a), h.headers = i, h.method = od(h.method);
        var j = Nc(h.url) ? b.cookies()[h.xsrfCookieName || g.xsrfCookieName] : c;
        j && (i[h.xsrfHeaderName || g.xsrfHeaderName] = j);
        var m = function(a) {
            i = a.headers;
            var b = Xb(a.data, Wb(i), a.transformRequest);
            return r(a.data) && f(i, function(a, b) {
              "content-type" === md(b) && delete i[b]
            }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, b, i).then(d, d)
          },
          n = [m, c],
          o = k.when(h);
        for (f(z, function(a) {
            (a.request || a.requestError) && n.unshift(a.request, a.requestError), (a.response || a.responseError) && n.push(a.response, a.responseError)
          }); n.length;) {
          var p = n.shift(),
            s = n.shift();
          o = o.then(p, s)
        }
        return o.success = function(a) {
          return o.then(function(b) {
            a(b.data, b.status, b.headers, h)
          }), o
        }, o.error = function(a) {
          return o.then(null, function(b) {
            a(b.data, b.status, b.headers, h)
          }), o
        }, o
      }

      function o() {
        f(arguments, function(a) {
          n[a] = function(b, c) {
            return n(l(c || {}, {
              method: a,
              url: b
            }))
          }
        })
      }

      function p() {
        f(arguments, function(a) {
          n[a] = function(b, c, d) {
            return n(l(d || {}, {
              method: a,
              url: b,
              data: c
            }))
          }
        })
      }

      function q(b, c, d) {
        function f(a, b, c, d) {
          j && (Yb(a) ? j.put(p, [a, b, Vb(c), d]) : j.remove(p)), h(b, a, c, d), e.$$phase || e.$apply()
        }

        function h(a, c, d, e) {
          c = Math.max(c, 0), (Yb(c) ? m.resolve : m.reject)({
            data: a,
            status: c,
            headers: Wb(d),
            config: b,
            statusText: e
          })
        }

        function i() {
          var a = H(n.pendingRequests, b); - 1 !== a && n.pendingRequests.splice(a, 1)
        }
        var j, l, m = k.defer(),
          o = m.promise,
          p = v(b.url, b.params);
        if (n.pendingRequests.push(b), o.then(i, i), (b.cache || g.cache) && b.cache !== !1 && "GET" == b.method && (j = t(b.cache) ? b.cache : t(g.cache) ? g.cache : w), j)
          if (l = j.get(p), s(l)) {
            if (l.then) return l.then(i, i), l;
            x(l) ? h(l[1], l[0], J(l[2]), l[3]) : h(l, 200, {}, "OK")
          } else j.put(p, o);
        return r(l) && a(b.method, p, c, f, d, b.timeout, b.withCredentials, b.responseType), o
      }

      function v(a, b) {
        if (!b) return a;
        var c = [];
        return h(b, function(a, b) {
          null === a || r(a) || (x(a) || (a = [a]), f(a, function(a) {
            t(a) && (a = R(a)), c.push(Z(b) + "=" + Z(a))
          }))
        }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
      }
      var w = d("$http"),
        z = [];
      return f(i, function(a) {
        z.unshift(u(a) ? m.get(a) : m.invoke(a))
      }), f(j, function(a, b) {
        var c = u(a) ? m.get(a) : m.invoke(a);
        z.splice(b, 0, {
          response: function(a) {
            return c(k.when(a))
          },
          responseError: function(a) {
            return c(k.reject(a))
          }
        })
      }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put"), n.defaults = g, n
    }]
  }

  function $b(b) {
    if (8 >= rd && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP");
    if (a.XMLHttpRequest) return new a.XMLHttpRequest;
    throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.")
  }

  function _b() {
    this.$get = ["$browser", "$window", "$document", function(a, b, c) {
      return ac(a, $b, a.defer, b.angular.callbacks, c[0])
    }]
  }

  function ac(a, b, c, d, e) {
    function g(a, b) {
      var c = e.createElement("script"),
        d = function() {
          c.onreadystatechange = c.onload = c.onerror = null, e.body.removeChild(c), b && b()
        };
      return c.type = "text/javascript", c.src = a, rd && 8 >= rd ? c.onreadystatechange = function() {
        /loaded|complete/.test(c.readyState) && d()
      } : c.onload = c.onerror = function() {
        d()
      }, e.body.appendChild(c), d
    }
    var h = -1;
    return function(e, i, j, k, l, m, n, p) {
      function q() {
        t = h, v && v(), w && w.abort()
      }

      function r(b, d, e, f, g) {
        y && c.cancel(y), v = w = null, 0 === d && (d = e ? 200 : "file" == Mc(i).protocol ? 404 : 0), d = 1223 === d ? 204 : d, g = g || "", b(d, e, f, g), a.$$completeOutstandingRequest(o)
      }
      var t;
      if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == md(e)) {
        var u = "_" + (d.counter++).toString(36);
        d[u] = function(a) {
          d[u].data = a
        };
        var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
          d[u].data ? r(k, 200, d[u].data) : r(k, t || -2), d[u] = Ad.noop
        })
      } else {
        var w = b(e);
        if (w.open(e, i, !0), f(l, function(a, b) {
            s(a) && w.setRequestHeader(b, a)
          }), w.onreadystatechange = function() {
            if (w && 4 == w.readyState) {
              var a = null,
                b = null;
              t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), r(k, t || w.status, b, a, w.statusText || "")
            }
          }, n && (w.withCredentials = !0), p) try {
          w.responseType = p
        } catch (x) {
          if ("json" !== p) throw x
        }
        w.send(j || null)
      }
      if (m > 0) var y = c(q, m);
      else m && m.then && m.then(q)
    }
  }

  function bc() {
    var a = "{{",
      b = "}}";
    this.startSymbol = function(b) {
      return b ? (a = b, this) : a
    }, this.endSymbol = function(a) {
      return a ? (b = a, this) : b
    }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
      function f(f, i, j) {
        for (var k, l, m, n, o = 0, p = [], q = f.length, s = !1, t = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, s = !0) : (o != q && p.push(f.substring(o)), o = q);
        if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw ce("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
        return !i || s ? (t.length = q, m = function(a) {
          try {
            for (var b, c = 0, g = q; g > c; c++) "function" == typeof(b = p[c]) && (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null === b || r(b) ? b = "" : "string" != typeof b && (b = R(b))), t[c] = b;
            return t.join("")
          } catch (h) {
            var i = ce("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
            d(i)
          }
        }, m.exp = f, m.parts = p, m) : void 0
      }
      var g = a.length,
        h = b.length;
      return f.startSymbol = function() {
        return a
      }, f.endSymbol = function() {
        return b
      }, f
    }]
  }

  function cc() {
    this.$get = ["$rootScope", "$window", "$q", function(a, b, c) {
      function d(d, f, g, h) {
        var i = b.setInterval,
          j = b.clearInterval,
          k = c.defer(),
          l = k.promise,
          m = 0,
          n = s(h) && !h;
        return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
          k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply()
        }, f), e[l.$$intervalId] = k, l
      }
      var e = {};
      return d.cancel = function(a) {
        return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1
      }, d
    }]
  }

  function dc() {
    this.$get = function() {
      return {
        id: "en-us",
        NUMBER_FORMATS: {
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            minInt: 1,
            minFrac: 0,
            maxFrac: 3,
            posPre: "",
            posSuf: "",
            negPre: "-",
            negSuf: "",
            gSize: 3,
            lgSize: 3
          }, {
            minInt: 1,
            minFrac: 2,
            maxFrac: 2,
            posPre: "¤",
            posSuf: "",
            negPre: "(¤",
            negSuf: ")",
            gSize: 3,
            lgSize: 3
          }],
          CURRENCY_SYM: "$"
        },
        DATETIME_FORMATS: {
          MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
          SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
          DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
          SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
          AMPMS: ["AM", "PM"],
          medium: "MMM d, y h:mm:ss a",
          "short": "M/d/yy h:mm a",
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          mediumDate: "MMM d, y",
          shortDate: "M/d/yy",
          mediumTime: "h:mm:ss a",
          shortTime: "h:mm a"
        },
        pluralCat: function(a) {
          return 1 === a ? "one" : "other"
        }
      }
    }
  }

  function ec(a) {
    for (var b = a.split("/"), c = b.length; c--;) b[c] = Y(b[c]);
    return b.join("/")
  }

  function fc(a, b, c) {
    var d = Mc(a, c);
    b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || ee[d.protocol] || null
  }

  function gc(a, b, c) {
    var d = "/" !== a.charAt(0);
    d && (a = "/" + a);
    var e = Mc(a, c);
    b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = W(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
  }

  function hc(a, b) {
    return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
  }

  function ic(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substr(0, b)
  }

  function jc(a) {
    return a.substr(0, ic(a).lastIndexOf("/") + 1)
  }

  function kc(a) {
    return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
  }

  function lc(a, b) {
    this.$$html5 = !0, b = b || "";
    var d = jc(a);
    fc(a, this, a), this.$$parse = function(b) {
      var c = hc(d, b);
      if (!u(c)) throw fe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
      gc(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose()
    }, this.$$compose = function() {
      var a = X(this.$$search),
        b = this.$$hash ? "#" + Y(this.$$hash) : "";
      this.$$url = ec(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
    }, this.$$rewrite = function(e) {
      var f, g;
      return (f = hc(a, e)) !== c ? (g = f, (f = hc(b, f)) !== c ? d + (hc("/", f) || f) : a + g) : (f = hc(d, e)) !== c ? d + f : d == e + "/" ? d : void 0
    }
  }

  function mc(a, b) {
    var c = jc(a);
    fc(a, this, a), this.$$parse = function(d) {
      function e(a, b, c) {
        var d, e = /^\/?.*?:(\/.*)/;
        return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
      }
      var f = hc(a, d) || hc(c, d),
        g = "#" == f.charAt(0) ? hc(b, f) : this.$$html5 ? f : "";
      if (!u(g)) throw fe("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
      gc(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose()
    }, this.$$compose = function() {
      var c = X(this.$$search),
        d = this.$$hash ? "#" + Y(this.$$hash) : "";
      this.$$url = ec(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
    }, this.$$rewrite = function(b) {
      return ic(a) == ic(b) ? b : void 0
    }
  }

  function nc(a, b) {
    this.$$html5 = !0, mc.apply(this, arguments);
    var c = jc(a);
    this.$$rewrite = function(d) {
      var e;
      return a == ic(d) ? d : (e = hc(c, d)) ? a + b + e : c === d + "/" ? c : void 0
    }
  }

  function oc(a) {
    return function() {
      return this[a]
    }
  }

  function pc(a, b) {
    return function(c) {
      return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
    }
  }

  function qc() {
    var b = "",
      c = !1;
    this.hashPrefix = function(a) {
      return s(a) ? (b = a, this) : b
    }, this.html5Mode = function(a) {
      return s(a) ? (c = a, this) : c
    }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
      function h(a) {
        d.$broadcast("$locationChangeSuccess", i.absUrl(), a)
      }
      var i, j, k, l = e.baseHref(),
        m = e.url();
      c ? (k = kc(m) + (l || "/"), j = f.history ? lc : nc) : (k = ic(m), j = mc), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m)), g.on("click", function(b) {
        if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
          for (var c = sd(b.target);
            "a" !== md(c[0].nodeName);)
            if (c[0] === g[0] || !(c = c.parent())[0]) return;
          var f = c.prop("href");
          t(f) && "[object SVGAnimatedString]" === f.toString() && (f = Mc(f.animVal).href);
          var h = i.$$rewrite(f);
          f && !c.attr("target") && h && !b.isDefaultPrevented() && (b.preventDefault(), h != e.url() && (i.$$parse(h), d.$apply(), a.angular["ff-684208-preventDefault"] = !0))
        }
      }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
        i.absUrl() != a && (d.$evalAsync(function() {
          var b = i.absUrl();
          i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b)
        }), d.$$phase || d.$digest())
      });
      var n = 0;
      return d.$watch(function() {
        var a = e.url(),
          b = i.$$replace;
        return n && a == i.absUrl() || (n++, d.$evalAsync(function() {
          d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a))
        })), i.$$replace = !1, n
      }), i
    }]
  }

  function rc() {
    var a = !0,
      b = this;
    this.debugEnabled = function(b) {
      return s(b) ? (a = b, this) : a
    }, this.$get = ["$window", function(c) {
      function d(a) {
        return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
      }

      function e(a) {
        var b = c.console || {},
          e = b[a] || b.log || o,
          g = !1;
        try {
          g = !!e.apply
        } catch (h) {}
        return g ? function() {
          var a = [];
          return f(arguments, function(b) {
            a.push(d(b))
          }), e.apply(b, a)
        } : function(a, b) {
          e(a, null == b ? "" : b)
        }
      }
      return {
        log: e("log"),
        info: e("info"),
        warn: e("warn"),
        error: e("error"),
        debug: function() {
          var c = e("debug");
          return function() {
            a && c.apply(b, arguments)
          }
        }()
      }
    }]
  }

  function sc(a, b) {
    if ("constructor" === a) throw he("isecfld", 'Referencing "constructor" field in Angular expressions is disallowed! Expression: {0}', b);
    return a
  }

  function tc(a, b) {
    if (a) {
      if (a.constructor === a) throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
      if (a.document && a.location && a.alert && a.setInterval) throw he("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
      if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw he("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b)
    }
    return a
  }

  function uc(a, b, d, e, f) {
    f = f || {};
    for (var g, h = b.split("."), i = 0; h.length > 1; i++) {
      g = sc(h.shift(), e);
      var j = a[g];
      j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (ge(e), "$$v" in a || ! function(a) {
        a.then(function(b) {
          a.$$v = b
        })
      }(a), a.$$v === c && (a.$$v = {}), a = a.$$v)
    }
    return g = sc(h.shift(), e), a[g] = d, d
  }

  function vc(a, b, d, e, f, g, h) {
    return sc(a, g), sc(b, g), sc(d, g), sc(e, g), sc(f, g), h.unwrapPromises ? function(h, i) {
      var j, k = i && i.hasOwnProperty(a) ? i : h;
      return null == k ? k : (k = k[a], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
        j.$$v = a
      })), k = k.$$v), b ? null == k ? c : (k = k[b], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
        j.$$v = a
      })), k = k.$$v), d ? null == k ? c : (k = k[d], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
        j.$$v = a
      })), k = k.$$v), e ? null == k ? c : (k = k[e], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
        j.$$v = a
      })), k = k.$$v), f ? null == k ? c : (k = k[f], k && k.then && (ge(g), "$$v" in k || (j = k, j.$$v = c, j.then(function(a) {
        j.$$v = a
      })), k = k.$$v), k) : k) : k) : k) : k)
    } : function(g, h) {
      var i = h && h.hasOwnProperty(a) ? h : g;
      return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i)
    }
  }

  function wc(a, b) {
    return sc(a, b),
      function(b, d) {
        return null == b ? c : (d && d.hasOwnProperty(a) ? d : b)[a]
      }
  }

  function xc(a, b, d) {
    return sc(a, d), sc(b, d),
      function(d, e) {
        return null == d ? c : (d = (e && e.hasOwnProperty(a) ? e : d)[a], null == d ? c : d[b])
      }
  }

  function yc(a, b, d) {
    if (ne.hasOwnProperty(a)) return ne[a];
    var e, g = a.split("."),
      h = g.length;
    if (b.unwrapPromises || 1 !== h)
      if (b.unwrapPromises || 2 !== h)
        if (b.csp) e = 6 > h ? vc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
          var f, i = 0;
          do f = vc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
          return f
        };
        else {
          var i = "var p;\n";
          f(g, function(a, c) {
            sc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
          }), i += "return s;";
          var j = new Function("s", "k", "pw", i);
          j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
            return j(a, b, ge)
          } : j
        } else e = xc(g[0], g[1], d);
    else e = wc(g[0], d);
    return "hasOwnProperty" !== a && (ne[a] = e), e
  }

  function zc() {
    var a = {},
      b = {
        csp: !1,
        unwrapPromises: !1,
        logPromiseWarnings: !0
      };
    this.unwrapPromises = function(a) {
      return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises
    }, this.logPromiseWarnings = function(a) {
      return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings
    }, this.$get = ["$filter", "$sniffer", "$log", function(c, d, e) {
      return b.csp = d.csp, ge = function(a) {
          b.logPromiseWarnings && !ie.hasOwnProperty(a) && (ie[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
        },
        function(d) {
          var e;
          switch (typeof d) {
            case "string":
              if (a.hasOwnProperty(d)) return a[d];
              var f = new le(b),
                g = new me(f, c, b);
              return e = g.parse(d, !1), "hasOwnProperty" !== d && (a[d] = e), e;
            case "function":
              return d;
            default:
              return o
          }
        }
    }]
  }

  function Ac() {
    this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
      return Bc(function(b) {
        a.$evalAsync(b)
      }, b)
    }]
  }

  function Bc(a, b) {
    function d(a) {
      return a
    }

    function e(a) {
      return j(a)
    }

    function g(a) {
      var b = h(),
        c = 0,
        d = x(a) ? [] : {};
      return f(a, function(a, e) {
        c++, i(a).then(function(a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
        }, function(a) {
          d.hasOwnProperty(e) || b.reject(a)
        })
      }), 0 === c && b.resolve(d), b.promise
    }
    var h = function() {
        var f, g, j = [];
        return g = {
          resolve: function(b) {
            if (j) {
              var d = j;
              j = c, f = i(b), d.length && a(function() {
                for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2])
              })
            }
          },
          reject: function(a) {
            g.resolve(k(a))
          },
          notify: function(b) {
            if (j) {
              var c = j;
              j.length && a(function() {
                for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b)
              })
            }
          },
          promise: {
            then: function(a, c, g) {
              var i = h(),
                k = function(c) {
                  try {
                    i.resolve((y(a) ? a : d)(c))
                  } catch (e) {
                    i.reject(e), b(e)
                  }
                },
                l = function(a) {
                  try {
                    i.resolve((y(c) ? c : e)(a))
                  } catch (d) {
                    i.reject(d), b(d)
                  }
                },
                m = function(a) {
                  try {
                    i.notify((y(g) ? g : d)(a))
                  } catch (c) {
                    b(c)
                  }
                };
              return j ? j.push([k, l, m]) : f.then(k, l, m), i.promise
            },
            "catch": function(a) {
              return this.then(null, a)
            },
            "finally": function(a) {
              function b(a, b) {
                var c = h();
                return b ? c.resolve(a) : c.reject(a), c.promise
              }

              function c(c, e) {
                var f = null;
                try {
                  f = (a || d)()
                } catch (g) {
                  return b(g, !1)
                }
                return f && y(f.then) ? f.then(function() {
                  return b(c, e)
                }, function(a) {
                  return b(a, !1)
                }) : b(c, e)
              }
              return this.then(function(a) {
                return c(a, !0)
              }, function(a) {
                return c(a, !1)
              })
            }
          }
        }
      },
      i = function(b) {
        return b && y(b.then) ? b : {
          then: function(c) {
            var d = h();
            return a(function() {
              d.resolve(c(b))
            }), d.promise
          }
        }
      },
      j = function(a) {
        var b = h();
        return b.reject(a), b.promise
      },
      k = function(c) {
        return {
          then: function(d, f) {
            var g = h();
            return a(function() {
              try {
                g.resolve((y(f) ? f : e)(c))
              } catch (a) {
                g.reject(a), b(a)
              }
            }), g.promise
          }
        }
      },
      l = function(c, f, g, k) {
        var l, m = h(),
          n = function(a) {
            try {
              return (y(f) ? f : d)(a)
            } catch (c) {
              return b(c), j(c)
            }
          },
          o = function(a) {
            try {
              return (y(g) ? g : e)(a)
            } catch (c) {
              return b(c), j(c)
            }
          },
          p = function(a) {
            try {
              return (y(k) ? k : d)(a)
            } catch (c) {
              b(c)
            }
          };
        return a(function() {
          i(c).then(function(a) {
            l || (l = !0, m.resolve(i(a).then(n, o, p)))
          }, function(a) {
            l || (l = !0, m.resolve(o(a)))
          }, function(a) {
            l || m.notify(p(a))
          })
        }), m.promise
      };
    return {
      defer: h,
      reject: j,
      when: l,
      all: g
    }
  }

  function Cc() {
    this.$get = ["$window", "$timeout", function(a, b) {
      var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
        d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
        e = !!c,
        f = e ? function(a) {
          var b = c(a);
          return function() {
            d(b)
          }
        } : function(a) {
          var c = b(a, 16.66, !1);
          return function() {
            b.cancel(c)
          }
        };
      return f.supported = e, f
    }]
  }

  function Dc() {
    var a = 10,
      b = d("$rootScope"),
      c = null;
    this.digestTtl = function(b) {
      return arguments.length && (a = b), a
    }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, g, h, i) {
      function k() {
        this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {}
      }

      function l(a) {
        if (r.$$phase) throw b("inprog", "{0} already in progress", r.$$phase);
        r.$$phase = a
      }

      function m() {
        r.$$phase = null
      }

      function n(a, b) {
        var c = h(a);
        return db(c, b), c
      }

      function p(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function q() {}
      k.prototype = {
        constructor: k,
        $new: function(a) {
          var b, c;
          return a ? (c = new k, c.$root = this.$root, c.$$asyncQueue = this.$$asyncQueue, c.$$postDigestQueue = this.$$postDigestQueue) : (b = function() {}, b.prototype = this, c = new b, c.$id = j()), c["this"] = c, c.$$listeners = {}, c.$$listenerCount = {}, c.$parent = this, c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c
        },
        $watch: function(a, b, d) {
          var e = this,
            f = n(a, "watch"),
            g = e.$$watchers,
            h = {
              fn: b,
              last: q,
              get: f,
              exp: a,
              eq: !!d
            };
          if (c = null, !y(b)) {
            var i = n(b || o, "listener");
            h.fn = function(a, b, c) {
              i(c)
            }
          }
          if ("string" == typeof a && f.constant) {
            var j = h.fn;
            h.fn = function(a, b, c) {
              j.call(this, a, b, c), I(g, h)
            }
          }
          return g || (g = e.$$watchers = []), g.unshift(h),
            function() {
              I(g, h), c = null
            }
        },
        $watchCollection: function(a, b) {
          function c() {
            f = m(j);
            var a, b;
            if (t(f))
              if (e(f)) {
                g !== n && (g = n, q = g.length = 0, l++), a = f.length, q !== a && (l++, g.length = q = a);
                for (var c = 0; a > c; c++) {
                  var d = g[c] !== g[c] && f[c] !== f[c];
                  d || g[c] === f[c] || (l++, g[c] = f[c])
                }
              } else {
                g !== o && (g = o = {}, q = 0, l++), a = 0;
                for (b in f) f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? g[b] !== f[b] && (l++, g[b] = f[b]) : (q++, g[b] = f[b], l++));
                if (q > a) {
                  l++;
                  for (b in g) g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b])
                }
              } else g !== f && (g = f, l++);
            return l
          }

          function d() {
            if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)
              if (t(f))
                if (e(f)) {
                  i = new Array(f.length);
                  for (var a = 0; a < f.length; a++) i[a] = f[a]
                } else {
                  i = {};
                  for (var c in f) nd.call(f, c) && (i[c] = f[c])
                } else i = f
          }
          var f, g, i, j = this,
            k = b.length > 1,
            l = 0,
            m = h(a),
            n = [],
            o = {},
            p = !0,
            q = 0;
          return this.$watch(c, d)
        },
        $digest: function() {
          var d, e, f, h, i, j, k, n, o, p, r, s = this.$$asyncQueue,
            t = this.$$postDigestQueue,
            u = a,
            v = this,
            w = [];
          l("$digest"), c = null;
          do {
            for (j = !1, n = v; s.length;) {
              try {
                r = s.shift(), r.scope.$eval(r.expression)
              } catch (x) {
                m(), g(x)
              }
              c = null
            }
            a: do {
              if (h = n.$$watchers)
                for (i = h.length; i--;) try {
                  if (d = h[i])
                    if ((e = d.get(n)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                      if (d === c) {
                        j = !1;
                        break a
                      }
                    } else j = !0, c = d, d.last = d.eq ? J(e) : e, d.fn(e, f === q ? e : f, n), 5 > u && (o = 4 - u, w[o] || (w[o] = []), p = y(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, p += "; newVal: " + R(e) + "; oldVal: " + R(f), w[o].push(p))
                } catch (x) {
                  m(), g(x)
                }
              if (!(k = n.$$childHead || n !== v && n.$$nextSibling))
                for (; n !== v && !(k = n.$$nextSibling);) n = n.$parent
            } while (n = k);
            if ((j || s.length) && !u--) throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, R(w))
          } while (j || s.length);
          for (m(); t.length;) try {
            t.shift()()
          } catch (x) {
            g(x)
          }
        },
        $destroy: function() {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, P(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function() {
              return o
            })
          }
        },
        $eval: function(a, b) {
          return h(a)(this, b)
        },
        $evalAsync: function(a) {
          r.$$phase || r.$$asyncQueue.length || i.defer(function() {
            r.$$asyncQueue.length && r.$digest()
          }), this.$$asyncQueue.push({
            scope: this,
            expression: a
          })
        },
        $$postDigest: function(a) {
          this.$$postDigestQueue.push(a)
        },
        $apply: function(a) {
          try {
            return l("$apply"), this.$eval(a)
          } catch (b) {
            g(b)
          } finally {
            m();
            try {
              r.$digest()
            } catch (b) {
              throw g(b), b
            }
          }
        },
        $on: function(a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] = c = []), c.push(b);
          var d = this;
          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function() {
            c[H(c, b)] = null, p(e, 1, a)
          }
        },
        $emit: function(a) {
          var b, c, d, e = [],
            f = this,
            h = !1,
            i = {
              name: a,
              targetScope: f,
              stopPropagation: function() {
                h = !0
              },
              preventDefault: function() {
                i.defaultPrevented = !0
              },
              defaultPrevented: !1
            },
            j = N([i], arguments, 1);
          do {
            for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
              if (b[c]) try {
                b[c].apply(null, j)
              } catch (k) {
                g(k)
              } else b.splice(c, 1), c--, d--;
            if (h) return i;
            f = f.$parent
          } while (f);
          return i
        },
        $broadcast: function(a) {
          for (var b, c, d, e = this, f = e, h = e, i = {
              name: a,
              targetScope: e,
              preventDefault: function() {
                i.defaultPrevented = !0
              },
              defaultPrevented: !1
            }, j = N([i], arguments, 1); f = h;) {
            for (i.currentScope = f, b = f.$$listeners[a] || [], c = 0, d = b.length; d > c; c++)
              if (b[c]) try {
                b[c].apply(null, j)
              } catch (k) {
                g(k)
              } else b.splice(c, 1), c--, d--;
            if (!(h = f.$$listenerCount[a] && f.$$childHead || f !== e && f.$$nextSibling))
              for (; f !== e && !(h = f.$$nextSibling);) f = f.$parent
          }
          return i
        }
      };
      var r = new k;
      return r
    }]
  }

  function Ec() {
    var a = /^\s*(https?|ftp|mailto|tel|file):/,
      b = /^\s*(https?|ftp|file):|data:image\//;
    this.aHrefSanitizationWhitelist = function(b) {
      return s(b) ? (a = b, this) : a
    }, this.imgSrcSanitizationWhitelist = function(a) {
      return s(a) ? (b = a, this) : b
    }, this.$get = function() {
      return function(c, d) {
        var e, f = d ? b : a;
        return rd && !(rd >= 8) || (e = Mc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e
      }
    }
  }

  function Fc(a) {
    return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
  }

  function Gc(a) {
    if ("self" === a) return a;
    if (u(a)) {
      if (a.indexOf("***") > -1) throw oe("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
      return a = Fc(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
    }
    if (z(a)) return new RegExp("^" + a.source + "$");
    throw oe("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
  }

  function Hc(a) {
    var b = [];
    return s(a) && f(a, function(a) {
      b.push(Gc(a))
    }), b
  }

  function Ic() {
    this.SCE_CONTEXTS = pe;
    var a = ["self"],
      b = [];
    this.resourceUrlWhitelist = function(b) {
      return arguments.length && (a = Hc(b)), a
    }, this.resourceUrlBlacklist = function(a) {
      return arguments.length && (b = Hc(a)), b
    }, this.$get = ["$injector", function(d) {
      function e(a, b) {
        return "self" === a ? Nc(b) : !!a.exec(b.href)
      }

      function f(c) {
        var d, f, g = Mc(c.toString()),
          h = !1;
        for (d = 0, f = a.length; f > d; d++)
          if (e(a[d], g)) {
            h = !0;
            break
          }
        if (h)
          for (d = 0, f = b.length; f > d; d++)
            if (e(b[d], g)) {
              h = !1;
              break
            }
        return h
      }

      function g(a) {
        var b = function(a) {
          this.$$unwrapTrustedValue = function() {
            return a
          }
        };
        return a && (b.prototype = new a), b.prototype.valueOf = function() {
          return this.$$unwrapTrustedValue()
        }, b.prototype.toString = function() {
          return this.$$unwrapTrustedValue().toString()
        }, b
      }

      function h(a, b) {
        var d = m.hasOwnProperty(a) ? m[a] : null;
        if (!d) throw oe("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
        if (null === b || b === c || "" === b) return b;
        if ("string" != typeof b) throw oe("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
        return new d(b)
      }

      function i(a) {
        return a instanceof l ? a.$$unwrapTrustedValue() : a
      }

      function j(a, b) {
        if (null === b || b === c || "" === b) return b;
        var d = m.hasOwnProperty(a) ? m[a] : null;
        if (d && b instanceof d) return b.$$unwrapTrustedValue();
        if (a === pe.RESOURCE_URL) {
          if (f(b)) return b;
          throw oe("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
        }
        if (a === pe.HTML) return k(b);
        throw oe("unsafe", "Attempting to use an unsafe value in a safe context.")
      }
      var k = function() {
        throw oe("unsafe", "Attempting to use an unsafe value in a safe context.")
      };
      d.has("$sanitize") && (k = d.get("$sanitize"));
      var l = g(),
        m = {};
      return m[pe.HTML] = g(l), m[pe.CSS] = g(l), m[pe.URL] = g(l), m[pe.JS] = g(l), m[pe.RESOURCE_URL] = g(m[pe.URL]), {
        trustAs: h,
        getTrusted: j,
        valueOf: i
      }
    }]
  }

  function Jc() {
    var a = !0;
    this.enabled = function(b) {
      return arguments.length && (a = !!b), a
    }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(b, c, d) {
      if (a && c.msie && c.msieDocumentMode < 8) throw oe("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
      var e = J(pe);
      e.isEnabled = function() {
        return a
      }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
        return b
      }, e.valueOf = p), e.parseAs = function(a, c) {
        var d = b(c);
        return d.literal && d.constant ? d : function(b, c) {
          return e.getTrusted(a, d(b, c))
        }
      };
      var g = e.parseAs,
        h = e.getTrusted,
        i = e.trustAs;
      return f(pe, function(a, b) {
        var c = md(b);
        e[kb("parse_as_" + c)] = function(b) {
          return g(a, b)
        }, e[kb("get_trusted_" + c)] = function(b) {
          return h(a, b)
        }, e[kb("trust_as_" + c)] = function(b) {
          return i(a, b)
        }
      }), e
    }]
  }

  function Kc() {
    this.$get = ["$window", "$document", function(a, b) {
      var c, d, e = {},
        f = m((/android (\d+)/.exec(md((a.navigator || {}).userAgent)) || [])[1]),
        g = /Boxee/i.test((a.navigator || {}).userAgent),
        h = b[0] || {},
        i = h.documentMode,
        j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
        k = h.body && h.body.style,
        l = !1,
        n = !1;
      if (k) {
        for (var o in k)
          if (d = j.exec(o)) {
            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
            break
          }
        c || (c = "WebkitOpacity" in k && "webkit"), l = !!("transition" in k || c + "Transition" in k), n = !!("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation))
      }
      return {
        history: !(!a.history || !a.history.pushState || 4 > f || g),
        hashchange: "onhashchange" in a && (!i || i > 7),
        hasEvent: function(a) {
          if ("input" == a && 9 == rd) return !1;
          if (r(e[a])) {
            var b = h.createElement("div");
            e[a] = "on" + a in b
          }
          return e[a]
        },
        csp: M(),
        vendorPrefix: c,
        transitions: l,
        animations: n,
        android: f,
        msie: rd,
        msieDocumentMode: i
      }
    }]
  }

  function Lc() {
    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
      function e(e, g, h) {
        var i, j = c.defer(),
          k = j.promise,
          l = s(h) && !h;
        return i = b.defer(function() {
          try {
            j.resolve(e())
          } catch (b) {
            j.reject(b), d(b)
          } finally {
            delete f[k.$$timeoutId]
          }
          l || a.$apply()
        }, g), k.$$timeoutId = i, f[i] = j, k
      }
      var f = {};
      return e.cancel = function(a) {
        return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
      }, e
    }]
  }

  function Mc(a) {
    var b = a;
    return rd && (qe.setAttribute("href", b), b = qe.href), qe.setAttribute("href", b), {
      href: qe.href,
      protocol: qe.protocol ? qe.protocol.replace(/:$/, "") : "",
      host: qe.host,
      search: qe.search ? qe.search.replace(/^\?/, "") : "",
      hash: qe.hash ? qe.hash.replace(/^#/, "") : "",
      hostname: qe.hostname,
      port: qe.port,
      pathname: "/" === qe.pathname.charAt(0) ? qe.pathname : "/" + qe.pathname
    }
  }

  function Nc(a) {
    var b = u(a) ? Mc(a) : a;
    return b.protocol === re.protocol && b.host === re.host
  }

  function Oc() {
    this.$get = q(a)
  }

  function Pc(a) {
    function b(d, e) {
      if (t(d)) {
        var g = {};
        return f(d, function(a, c) {
          g[c] = b(c, a)
        }), g
      }
      return a.factory(d + c, e)
    }
    var c = "Filter";
    this.register = b, this.$get = ["$injector", function(a) {
      return function(b) {
        return a.get(b + c)
      }
    }], b("currency", Rc), b("date", Zc), b("filter", Qc), b("json", $c), b("limitTo", _c), b("lowercase", we), b("number", Sc), b("orderBy", ad), b("uppercase", xe)
  }

  function Qc() {
    return function(a, b, c) {
      if (!x(a)) return a;
      var d = typeof c,
        e = [];
      e.check = function(a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a)) return !1;
        return !0
      }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
        return Ad.equals(a, b)
      } : function(a, b) {
        if (a && b && "object" == typeof a && "object" == typeof b) {
          for (var d in a)
            if ("$" !== d.charAt(0) && nd.call(a, d) && c(a[d], b[d])) return !0;
          return !1
        }
        return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1
      });
      var f = function(a, b) {
        if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
            return c(a, b);
          case "object":
            switch (typeof b) {
              case "object":
                return c(a, b);
              default:
                for (var d in a)
                  if ("$" !== d.charAt(0) && f(a[d], b)) return !0
            }
            return !1;
          case "array":
            for (var e = 0; e < a.length; e++)
              if (f(a[e], b)) return !0;
            return !1;
          default:
            return !1
        }
      };
      switch (typeof b) {
        case "boolean":
        case "number":
        case "string":
          b = {
            $: b
          };
        case "object":
          for (var g in b) ! function(a) {
            "undefined" != typeof b[a] && e.push(function(c) {
              return f("$" == a ? c : c && c[a], b[a])
            })
          }(g);
          break;
        case "function":
          e.push(b);
          break;
        default:
          return a
      }
      for (var h = [], i = 0; i < a.length; i++) {
        var j = a[i];
        e.check(j) && h.push(j)
      }
      return h
    }
  }

  function Rc(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c) {
      return r(c) && (c = b.CURRENCY_SYM), Tc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c)
    }
  }

  function Sc(a) {
    var b = a.NUMBER_FORMATS;
    return function(a, c) {
      return Tc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
    }
  }

  function Tc(a, b, c, d, e) {
    if (null == a || !isFinite(a) || t(a)) return "";
    var f = 0 > a;
    a = Math.abs(a);
    var g = a + "",
      h = "",
      i = [],
      j = !1;
    if (-1 !== g.indexOf("e")) {
      var k = g.match(/([\d\.]+)e(-?)(\d+)/);
      k && "-" == k[2] && k[3] > e + 1 ? g = "0" : (h = g, j = !0)
    }
    if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
    else {
      var l = (g.split(se)[1] || "").length;
      r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
      var m = Math.pow(10, e);
      a = Math.round(a * m) / m;
      var n = ("" + a).split(se),
        o = n[0];
      n = n[1] || "";
      var p, q = 0,
        s = b.lgSize,
        u = b.gSize;
      if (o.length >= s + u)
        for (q = o.length - s, p = 0; q > p; p++)(q - p) % u === 0 && 0 !== p && (h += c), h += o.charAt(p);
      for (p = q; p < o.length; p++)(o.length - p) % s === 0 && 0 !== p && (h += c), h += o.charAt(p);
      for (; n.length < e;) n += "0";
      e && "0" !== e && (h += d + n.substr(0, e))
    }
    return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("")
  }

  function Uc(a, b, c) {
    var d = "";
    for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
    return c && (a = a.substr(a.length - b)), d + a
  }

  function Vc(a, b, c, d) {
    return c = c || 0,
      function(e) {
        var f = e["get" + a]();
        return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Uc(f, b, d)
      }
  }

  function Wc(a, b) {
    return function(c, d) {
      var e = c["get" + a](),
        f = od(b ? "SHORT" + a : a);
      return d[f][e]
    }
  }

  function Xc(a) {
    var b = -1 * a.getTimezoneOffset(),
      c = b >= 0 ? "+" : "";
    return c += Uc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Uc(Math.abs(b % 60), 2)
  }

  function Yc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
  }

  function Zc(a) {
    function b(a) {
      var b;
      if (b = a.match(c)) {
        var d = new Date(0),
          e = 0,
          f = 0,
          g = b[8] ? d.setUTCFullYear : d.setFullYear,
          h = b[8] ? d.setUTCHours : d.setHours;
        b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
        var i = m(b[4] || 0) - e,
          j = m(b[5] || 0) - f,
          k = m(b[6] || 0),
          l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
        return h.call(d, i, j, k, l), d
      }
      return a
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function(c, d) {
      var e, g, h = "",
        i = [];
      if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ve.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
      for (; d;) g = ue.exec(d), g ? (i = N(i, g, 1), d = i.pop()) : (i.push(d), d = null);
      return f(i, function(b) {
        e = te[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      }), h
    }
  }

  function $c() {
    return function(a) {
      return R(a, !0)
    }
  }

  function _c() {
    return function(a, b) {
      if (!x(a) && !u(a)) return a;
      if (b = m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
      var c, d, e = [];
      for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
      return e
    }
  }

  function ad(a) {
    return function(b, c, d) {
      function e(a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e) return e
        }
        return 0
      }

      function f(a, b) {
        return T(b) ? function(b, c) {
          return a(c, b)
        } : a
      }

      function g(a, b) {
        var c = typeof a,
          d = typeof b;
        return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
      }
      if (!x(b)) return b;
      if (!c) return b;
      c = x(c) ? c : [c], c = F(c, function(b) {
        var c = !1,
          d = b || p;
        if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), d = a(b), d.constant)) {
          var e = d();
          return f(function(a, b) {
            return g(a[e], b[e])
          }, c)
        }
        return f(function(a, b) {
          return g(d(a), d(b))
        }, c)
      });
      for (var h = [], i = 0; i < b.length; i++) h.push(b[i]);
      return h.sort(f(e, d))
    }
  }

  function bd(a) {
    return y(a) && (a = {
      link: a
    }), a.restrict = a.restrict || "AC", q(a)
  }

  function cd(a, b, c, d) {
    function e(b, c) {
      c = c ? "-" + ab(c, "-") : "", d.removeClass(a, (b ? Ke : Je) + c), d.addClass(a, (b ? Je : Ke) + c)
    }
    var g = this,
      h = a.parent().controller("form") || Ae,
      i = 0,
      j = g.$error = {},
      k = [];
    g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, h.$addControl(g), a.addClass(Le), e(!0), g.$addControl = function(a) {
      eb(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a)
    }, g.$removeControl = function(a) {
      a.$name && g[a.$name] === a && delete g[a.$name], f(j, function(b, c) {
        g.$setValidity(c, !0, a)
      }), I(k, a)
    }, g.$setValidity = function(a, b, c) {
      var d = j[a];
      if (b) d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
      else {
        if (i || e(b), d) {
          if (G(d, c)) return
        } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
        d.push(c), g.$valid = !1, g.$invalid = !0
      }
    }, g.$setDirty = function() {
      d.removeClass(a, Le), d.addClass(a, Me), g.$dirty = !0, g.$pristine = !1, h.$setDirty()
    }, g.$setPristine = function() {
      d.removeClass(a, Me), d.addClass(a, Le), g.$dirty = !1, g.$pristine = !0, f(k, function(a) {
        a.$setPristine()
      })
    }
  }

  function dd(a, b, d, e) {
    return a.$setValidity(b, d), d ? e : c
  }

  function ed(a, b, c) {
    var d = c.prop("validity");
    if (t(d)) {
      var e = function(c) {
        return a.$error[b] || !(d.badInput || d.customError || d.typeMismatch) || d.valueMissing ? c : void a.$setValidity(b, !1)
      };
      a.$parsers.push(e)
    }
  }

  function fd(a, b, c, e, f, g) {
    var h = b.prop("validity");
    if (!f.android) {
      var i = !1;
      b.on("compositionstart", function() {
        i = !0
      }), b.on("compositionend", function() {
        i = !1, j()
      })
    }
    var j = function() {
      if (!i) {
        var d = b.val();
        T(c.ngTrim || "T") && (d = Cd(d)), (e.$viewValue !== d || h && "" === d && !h.valueMissing) && (a.$$phase ? e.$setViewValue(d) : a.$apply(function() {
          e.$setViewValue(d)
        }))
      }
    };
    if (f.hasEvent("input")) b.on("input", j);
    else {
      var k, l = function() {
        k || (k = g.defer(function() {
          j(), k = null
        }))
      };
      b.on("keydown", function(a) {
        var b = a.keyCode;
        91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || l()
      }), f.hasEvent("paste") && b.on("paste cut", l)
    }
    b.on("change", j), e.$render = function() {
      b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue)
    };
    var n, o, p = c.ngPattern;
    if (p) {
      var q = function(a, b) {
        return dd(e, "pattern", e.$isEmpty(b) || a.test(b), b)
      };
      o = p.match(/^\/(.*)\/([gim]*)$/), o ? (p = new RegExp(o[1], o[2]), n = function(a) {
        return q(p, a)
      }) : n = function(c) {
        var e = a.$eval(p);
        if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", p, e, U(b));
        return q(e, c)
      }, e.$formatters.push(n), e.$parsers.push(n)
    }
    if (c.ngMinlength) {
      var r = m(c.ngMinlength),
        s = function(a) {
          return dd(e, "minlength", e.$isEmpty(a) || a.length >= r, a)
        };
      e.$parsers.push(s), e.$formatters.push(s)
    }
    if (c.ngMaxlength) {
      var t = m(c.ngMaxlength),
        u = function(a) {
          return dd(e, "maxlength", e.$isEmpty(a) || a.length <= t, a)
        };
      e.$parsers.push(u), e.$formatters.push(u)
    }
  }

  function gd(a, b, d, e, f, g) {
    if (fd(a, b, d, e, f, g), e.$parsers.push(function(a) {
        var b = e.$isEmpty(a);
        return b || Ge.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c)
      }), ed(e, "number", b), e.$formatters.push(function(a) {
        return e.$isEmpty(a) ? "" : "" + a
      }), d.min) {
      var h = function(a) {
        var b = parseFloat(d.min);
        return dd(e, "min", e.$isEmpty(a) || a >= b, a)
      };
      e.$parsers.push(h), e.$formatters.push(h)
    }
    if (d.max) {
      var i = function(a) {
        var b = parseFloat(d.max);
        return dd(e, "max", e.$isEmpty(a) || b >= a, a)
      };
      e.$parsers.push(i), e.$formatters.push(i)
    }
    e.$formatters.push(function(a) {
      return dd(e, "number", e.$isEmpty(a) || v(a), a)
    })
  }

  function hd(a, b, c, d, e, f) {
    fd(a, b, c, d, e, f);
    var g = function(a) {
      return dd(d, "url", d.$isEmpty(a) || Ee.test(a), a)
    };
    d.$formatters.push(g), d.$parsers.push(g)
  }

  function id(a, b, c, d, e, f) {
    fd(a, b, c, d, e, f);
    var g = function(a) {
      return dd(d, "email", d.$isEmpty(a) || Fe.test(a), a)
    };
    d.$formatters.push(g), d.$parsers.push(g)
  }

  function jd(a, b, c, d) {
    r(c.name) && b.attr("name", j()), b.on("click", function() {
      b[0].checked && a.$apply(function() {
        d.$setViewValue(c.value)
      })
    }), d.$render = function() {
      var a = c.value;
      b[0].checked = a == d.$viewValue
    }, c.$observe("value", d.$render)
  }

  function kd(a, b, c, d) {
    var e = c.ngTrueValue,
      f = c.ngFalseValue;
    u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
      a.$apply(function() {
        d.$setViewValue(b[0].checked)
      })
    }), d.$render = function() {
      b[0].checked = d.$viewValue
    }, d.$isEmpty = function(a) {
      return a !== e
    }, d.$formatters.push(function(a) {
      return a === e
    }), d.$parsers.push(function(a) {
      return a ? e : f
    })
  }

  function ld(a, b) {
    return a = "ngClass" + a, ["$animate", function(c) {
      function d(a, b) {
        var c = [];
        a: for (var d = 0; d < a.length; d++) {
          for (var e = a[d], f = 0; f < b.length; f++)
            if (e == b[f]) continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        if (x(a)) return a;
        if (u(a)) return a.split(" ");
        if (t(a)) {
          var b = [];
          return f(a, function(a, c) {
            a && b.push(c)
          }), b
        }
        return a
      }
      return {
        restrict: "AC",
        link: function(g, h, i) {
          function j(a) {
            var b = l(a, 1);
            i.$addClass(b)
          }

          function k(a) {
            var b = l(a, -1);
            i.$removeClass(b)
          }

          function l(a, b) {
            var c = h.data("$classCounts") || {},
              d = [];
            return f(a, function(a) {
              (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
            }), h.data("$classCounts", c), d.join(" ")
          }

          function m(a, b) {
            var e = d(b, a),
              f = d(a, b);
            f = l(f, -1), e = l(e, 1), 0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f)
          }

          function n(a) {
            if (b === !0 || g.$index % 2 === b) {
              var c = e(a || []);
              if (o) {
                if (!L(a, o)) {
                  var d = e(o);
                  m(d, c)
                }
              } else j(c)
            }
            o = J(a)
          }
          var o;
          g.$watch(i[a], n, !0), i.$observe("class", function() {
            n(g.$eval(i[a]))
          }), "ngClass" !== a && g.$watch("$index", function(c, d) {
            var f = 1 & c;
            if (f !== d & 1) {
              var h = e(g.$eval(i[a]));
              f === b ? j(h) : k(h)
            }
          })
        }
      }
    }]
  }
  var md = function(a) {
      return u(a) ? a.toLowerCase() : a
    },
    nd = Object.prototype.hasOwnProperty,
    od = function(a) {
      return u(a) ? a.toUpperCase() : a
    },
    pd = function(a) {
      return u(a) ? a.replace(/[A-Z]/g, function(a) {
        return String.fromCharCode(32 | a.charCodeAt(0))
      }) : a
    },
    qd = function(a) {
      return u(a) ? a.replace(/[a-z]/g, function(a) {
        return String.fromCharCode(-33 & a.charCodeAt(0))
      }) : a
    };
  "i" !== "I".toLowerCase() && (md = pd, od = qd);
  var rd, sd, td, ud, vd, wd = [].slice,
    xd = [].push,
    yd = Object.prototype.toString,
    zd = d("ng"),
    Ad = (a.angular, a.angular || (a.angular = {})),
    Bd = ["0", "0", "0"];
  rd = m((/msie (\d+)/.exec(md(navigator.userAgent)) || [])[1]), isNaN(rd) && (rd = m((/trident\/.*; rv:(\d+)/.exec(md(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
  var Cd = function() {
    return String.prototype.trim ? function(a) {
      return u(a) ? a.trim() : a
    } : function(a) {
      return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a
    }
  }();
  vd = 9 > rd ? function(a) {
    return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? od(a.scopeName + ":" + a.nodeName) : a.nodeName
  } : function(a) {
    return a.nodeName ? a.nodeName : a[0].nodeName
  };
  var Dd = /[A-Z]/g,
    Ed = {
      full: "1.2.16",
      major: 1,
      minor: 2,
      dot: 16,
      codeName: "badger-enumeration"
    },
    Fd = pb.cache = {},
    Gd = pb.expando = "ng-" + (new Date).getTime(),
    Hd = 1,
    Id = a.document.addEventListener ? function(a, b, c) {
      a.addEventListener(b, c, !1)
    } : function(a, b, c) {
      a.attachEvent("on" + b, c)
    },
    Jd = a.document.removeEventListener ? function(a, b, c) {
      a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
      a.detachEvent("on" + b, c)
    },
    Kd = (pb._data = function(a) {
      return this.cache[a[this.expando]] || {}
    }, /([\:\-\_]+(.))/g),
    Ld = /^moz([A-Z])/,
    Md = d("jqLite"),
    Nd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    Od = /<|&#?\w+;/,
    Pd = /<([\w:]+)/,
    Qd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Rd = {
      option: [1, '<select multiple="multiple">', "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  Rd.optgroup = Rd.option, Rd.tbody = Rd.tfoot = Rd.colgroup = Rd.caption = Rd.thead, Rd.th = Rd.td;
  var Sd = pb.prototype = {
      ready: function(c) {
        function d() {
          e || (e = !0, c())
        }
        var e = !1;
        "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), pb(a).on("load", d))
      },
      toString: function() {
        var a = [];
        return f(this, function(b) {
          a.push("" + b)
        }), "[" + a.join(", ") + "]"
      },
      eq: function(a) {
        return sd(a >= 0 ? this[a] : this[this.length + a])
      },
      length: 0,
      push: xd,
      sort: [].sort,
      splice: [].splice
    },
    Td = {};
  f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
    Td[md(a)] = a
  });
  var Ud = {};
  f("input,select,option,textarea,button,form,details".split(","), function(a) {
    Ud[od(a)] = !0
  }), f({
    data: vb,
    inheritedData: Bb,
    scope: function(a) {
      return sd(a).data("$scope") || Bb(a.parentNode || a, ["$isolateScope", "$scope"])
    },
    isolateScope: function(a) {
      return sd(a).data("$isolateScope") || sd(a).data("$isolateScopeNoTemplate")
    },
    controller: Ab,
    injector: function(a) {
      return Bb(a, "$injector")
    },
    removeAttr: function(a, b) {
      a.removeAttribute(b)
    },
    hasClass: wb,
    css: function(a, b, d) {
      if (b = kb(b), !s(d)) {
        var e;
        return 8 >= rd && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= rd && (e = "" === e ? c : e), e
      }
      a.style[b] = d
    },
    attr: function(a, b, d) {
      var e = md(b);
      if (Td[e]) {
        if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
        d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
      } else if (s(d)) a.setAttribute(b, d);
      else if (a.getAttribute) {
        var f = a.getAttribute(b, 2);
        return null === f ? c : f
      }
    },
    prop: function(a, b, c) {
      return s(c) ? void(a[b] = c) : a[b]
    },
    text: function() {
      function a(a, c) {
        var d = b[a.nodeType];
        return r(c) ? d ? a[d] : "" : void(a[d] = c)
      }
      var b = [];
      return 9 > rd ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a
    }(),
    val: function(a, b) {
      if (r(b)) {
        if ("SELECT" === vd(a) && a.multiple) {
          var c = [];
          return f(a.options, function(a) {
            a.selected && c.push(a.value || a.text)
          }), 0 === c.length ? null : c
        }
        return a.value
      }
      a.value = b
    },
    html: function(a, b) {
      if (r(b)) return a.innerHTML;
      for (var c = 0, d = a.childNodes; c < d.length; c++) rb(d[c]);
      a.innerHTML = b
    },
    empty: Cb
  }, function(a, b) {
    pb.prototype[b] = function(b, d) {
      var e, f;
      if (a !== Cb && (2 == a.length && a !== wb && a !== Ab ? b : d) === c) {
        if (t(b)) {
          for (e = 0; e < this.length; e++)
            if (a === vb) a(this[e], b);
            else
              for (f in b) a(this[e], f, b[f]);
          return this
        }
        for (var g = a.$dv, h = g === c ? Math.min(this.length, 1) : this.length, i = 0; h > i; i++) {
          var j = a(this[i], b, d);
          g = g ? g + j : j
        }
        return g
      }
      for (e = 0; e < this.length; e++) a(this[e], b, d);
      return this
    }
  }), f({
    removeData: tb,
    dealoc: rb,
    on: function wf(a, c, d, e) {
      if (s(e)) throw Md("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
      var g = ub(a, "events"),
        h = ub(a, "handle");
      g || ub(a, "events", g = {}), h || ub(a, "handle", h = Eb(a, g)), f(c.split(" "), function(c) {
        var e = g[c];
        if (!e) {
          if ("mouseenter" == c || "mouseleave" == c) {
            var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
              var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;
              return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
              if (b)
                for (; b = b.parentNode;)
                  if (b === a) return !0;
              return !1
            };
            g[c] = [];
            var i = {
              mouseleave: "mouseout",
              mouseenter: "mouseover"
            };
            wf(a, i[c], function(a) {
              var b = this,
                d = a.relatedTarget;
              (!d || d !== b && !f(b, d)) && h(a, c)
            })
          } else Id(a, c, h), g[c] = [];
          e = g[c]
        }
        e.push(d)
      })
    },
    off: sb,
    one: function(a, b, c) {
      a = sd(a), a.on(b, function d() {
        a.off(b, c), a.off(b, d)
      }), a.on(b, c)
    },
    replaceWith: function(a, b) {
      var c, d = a.parentNode;
      rb(a), f(new pb(b), function(b) {
        c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
      })
    },
    children: function(a) {
      var b = [];
      return f(a.childNodes, function(a) {
        1 === a.nodeType && b.push(a)
      }), b
    },
    contents: function(a) {
      return a.contentDocument || a.childNodes || []
    },
    append: function(a, b) {
      f(new pb(b), function(b) {
        (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b)
      })
    },
    prepend: function(a, b) {
      if (1 === a.nodeType) {
        var c = a.firstChild;
        f(new pb(b), function(b) {
          a.insertBefore(b, c)
        })
      }
    },
    wrap: function(a, b) {
      b = sd(b)[0];
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a)
    },
    remove: function(a) {
      rb(a);
      var b = a.parentNode;
      b && b.removeChild(a)
    },
    after: function(a, b) {
      var c = a,
        d = a.parentNode;
      f(new pb(b), function(a) {
        d.insertBefore(a, c.nextSibling), c = a
      })
    },
    addClass: yb,
    removeClass: xb,
    toggleClass: function(a, b, c) {
      b && f(b.split(" "), function(b) {
        var d = c;
        r(d) && (d = !wb(a, b)), (d ? yb : xb)(a, b)
      })
    },
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    next: function(a) {
      if (a.nextElementSibling) return a.nextElementSibling;
      for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling;
      return b
    },
    find: function(a, b) {
      return a.getElementsByTagName ? a.getElementsByTagName(b) : []
    },
    clone: qb,
    triggerHandler: function(a, b, c) {
      var d = (ub(a, "events") || {})[b];
      c = c || [];
      var e = [{
        preventDefault: o,
        stopPropagation: o
      }];
      f(d, function(b) {
        b.apply(a, e.concat(c))
      })
    }
  }, function(a, b) {
    pb.prototype[b] = function(b, c, d) {
      for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = sd(e))) : zb(e, a(this[f], b, c, d));
      return s(e) ? e : this
    }, pb.prototype.bind = pb.prototype.on, pb.prototype.unbind = pb.prototype.off
  }), Gb.prototype = {
    put: function(a, b) {
      this[Fb(a)] = b
    },
    get: function(a) {
      return this[Fb(a)]
    },
    remove: function(a) {
      var b = this[a = Fb(a)];
      return delete this[a], b
    }
  };
  var Vd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    Wd = /,/,
    Xd = /^\s*(_?)(\S+?)\1\s*$/,
    Yd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    Zd = d("$injector"),
    $d = d("$animate"),
    _d = ["$provide", function(a) {
      this.$$selectors = {}, this.register = function(b, c) {
        var d = b + "-animation";
        if (b && "." != b.charAt(0)) throw $d("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
        this.$$selectors[b.substr(1)] = d, a.factory(d, c)
      }, this.classNameFilter = function(a) {
        return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
      }, this.$get = ["$timeout", "$$asyncCallback", function(a, b) {
        function c(a) {
          a && b(a)
        }
        return {
          enter: function(a, b, d, e) {
            d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)), c(e)
          },
          leave: function(a, b) {
            a.remove(), c(b)
          },
          move: function(a, b, c, d) {
            this.enter(a, b, c, d)
          },
          addClass: function(a, b, d) {
            b = u(b) ? b : x(b) ? b.join(" ") : "", f(a, function(a) {
              yb(a, b)
            }), c(d)
          },
          removeClass: function(a, b, d) {
            b = u(b) ? b : x(b) ? b.join(" ") : "", f(a, function(a) {
              xb(a, b)
            }), c(d)
          },
          setClass: function(a, b, d, e) {
            f(a, function(a) {
              yb(a, b), xb(a, d)
            }), c(e)
          },
          enabled: o
        }
      }]
    }],
    ae = d("$compile");
  Pb.$inject = ["$provide", "$$sanitizeUriProvider"];
  var be = /^(x[\:\-_]|data[\:\-_])/i,
    ce = d("$interpolate"),
    de = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    ee = {
      http: 80,
      https: 443,
      ftp: 21
    },
    fe = d("$location");
  nc.prototype = mc.prototype = lc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: oc("$$absUrl"),
    url: function(a, b) {
      if (r(a)) return this.$$url;
      var c = de.exec(a);
      return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), this.hash(c[5] || "", b), this
    },
    protocol: oc("$$protocol"),
    host: oc("$$host"),
    port: oc("$$port"),
    path: pc("$$path", function(a) {
      return "/" == a.charAt(0) ? a : "/" + a
    }),
    search: function(a, b) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (u(a)) this.$$search = W(a);
          else {
            if (!t(a)) throw fe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
            this.$$search = a
          }
          break;
        default:
          r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
      }
      return this.$$compose(), this
    },
    hash: pc("$$hash", p),
    replace: function() {
      return this.$$replace = !0, this
    }
  };
  var ge, he = d("$parse"),
    ie = {},
    je = {
      "null": function() {
        return null
      },
      "true": function() {
        return !0
      },
      "false": function() {
        return !1
      },
      undefined: o,
      "+": function(a, b, d, e) {
        return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
      },
      "-": function(a, b, c, d) {
        return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
      },
      "*": function(a, b, c, d) {
        return c(a, b) * d(a, b)
      },
      "/": function(a, b, c, d) {
        return c(a, b) / d(a, b)
      },
      "%": function(a, b, c, d) {
        return c(a, b) % d(a, b)
      },
      "^": function(a, b, c, d) {
        return c(a, b) ^ d(a, b)
      },
      "=": o,
      "===": function(a, b, c, d) {
        return c(a, b) === d(a, b)
      },
      "!==": function(a, b, c, d) {
        return c(a, b) !== d(a, b)
      },
      "==": function(a, b, c, d) {
        return c(a, b) == d(a, b)
      },
      "!=": function(a, b, c, d) {
        return c(a, b) != d(a, b)
      },
      "<": function(a, b, c, d) {
        return c(a, b) < d(a, b)
      },
      ">": function(a, b, c, d) {
        return c(a, b) > d(a, b)
      },
      "<=": function(a, b, c, d) {
        return c(a, b) <= d(a, b)
      },
      ">=": function(a, b, c, d) {
        return c(a, b) >= d(a, b)
      },
      "&&": function(a, b, c, d) {
        return c(a, b) && d(a, b)
      },
      "||": function(a, b, c, d) {
        return c(a, b) || d(a, b)
      },
      "&": function(a, b, c, d) {
        return c(a, b) & d(a, b)
      },
      "|": function(a, b, c, d) {
        return d(a, b)(a, b, c(a, b))
      },
      "!": function(a, b, c) {
        return !c(a, b)
      }
    },
    ke = {
      n: "\n",
      f: "\f",
      r: "\r",
      t: "	",
      v: "",
      "'": "'",
      '"': '"'
    },
    le = function(a) {
      this.options = a
    };
  le.prototype = {
    constructor: le,
    lex: function(a) {
      this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = [];
      for (var b, d = []; this.index < this.text.length;) {
        if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
        else if (this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === d[0] && (b = this.tokens[this.tokens.length - 1]) && (b.json = -1 === b.text.indexOf("."));
        else if (this.is("(){}[].,;:?")) this.tokens.push({
          index: this.index,
          text: this.ch,
          json: this.was(":[,") && this.is("{[") || this.is("}]:,")
        }), this.is("{[") && d.unshift(this.ch), this.is("}]") && d.shift(), this.index++;
        else {
          if (this.isWhitespace(this.ch)) {
            this.index++;
            continue
          }
          var e = this.ch + this.peek(),
            f = e + this.peek(2),
            g = je[this.ch],
            h = je[e],
            i = je[f];
          i ? (this.tokens.push({
            index: this.index,
            text: f,
            fn: i
          }), this.index += 3) : h ? (this.tokens.push({
            index: this.index,
            text: e,
            fn: h
          }), this.index += 2) : g ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: g,
            json: this.was("[,:") && this.is("+-")
          }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    },
    is: function(a) {
      return -1 !== a.indexOf(this.ch)
    },
    was: function(a) {
      return -1 !== a.indexOf(this.lastCh)
    },
    peek: function(a) {
      var b = a || 1;
      return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
    },
    isNumber: function(a) {
      return a >= "0" && "9" >= a
    },
    isWhitespace: function(a) {
      return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
    },
    isIdent: function(a) {
      return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
    },
    isExpOperator: function(a) {
      return "-" === a || "+" === a || this.isNumber(a)
    },
    throwError: function(a, b, c) {
      c = c || this.index;
      var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
      throw he("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
    },
    readNumber: function() {
      for (var a = "", b = this.index; this.index < this.text.length;) {
        var c = md(this.text.charAt(this.index));
        if ("." == c || this.isNumber(c)) a += c;
        else {
          var d = this.peek();
          if ("e" == c && this.isExpOperator(d)) a += c;
          else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
          else {
            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
            this.throwError("Invalid exponent")
          }
        }
        this.index++
      }
      a = 1 * a, this.tokens.push({
        index: b,
        text: a,
        json: !0,
        fn: function() {
          return a
        }
      })
    },
    readIdent: function() {
      for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++;
      if (a)
        for (b = this.index; b < this.text.length;) {
          if (d = this.text.charAt(b), "(" === d) {
            c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
            break
          }
          if (!this.isWhitespace(d)) break;
          b++
        }
      var h = {
        index: g,
        text: f
      };
      if (je.hasOwnProperty(f)) h.fn = je[f], h.json = je[f];
      else {
        var i = yc(f, this.options, this.text);
        h.fn = l(function(a, b) {
          return i(a, b)
        }, {
          assign: function(a, b) {
            return uc(a, f, b, e.text, e.options)
          }
        })
      }
      this.tokens.push(h), c && (this.tokens.push({
        index: a,
        text: ".",
        json: !1
      }), this.tokens.push({
        index: a + 1,
        text: c,
        json: !1
      }))
    },
    readString: function(a) {
      var b = this.index;
      this.index++;
      for (var c = "", d = a, e = !1; this.index < this.text.length;) {
        var f = this.text.charAt(this.index);
        if (d += f, e) {
          if ("u" === f) {
            var g = this.text.substring(this.index + 1, this.index + 5);
            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
          } else {
            var h = ke[f];
            c += h ? h : f
          }
          e = !1
        } else if ("\\" === f) e = !0;
        else {
          if (f === a) return this.index++, void this.tokens.push({
            index: b,
            text: d,
            string: c,
            json: !0,
            fn: function() {
              return c
            }
          });
          c += f
        }
        this.index++
      }
      this.throwError("Unterminated quote", b)
    }
  };
  var me = function(a, b, c) {
    this.lexer = a, this.$filter = b, this.options = c
  };
  me.ZERO = l(function() {
    return 0
  }, {
    constant: !0
  }), me.prototype = {
    constructor: me,
    parse: function(a, b) {
      this.text = a, this.json = b, this.tokens = this.lexer.lex(a), b && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
        this.throwError("is not valid json", {
          text: a,
          index: 0
        })
      });
      var c = b ? this.primary() : this.statements();
      return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), c.literal = !!c.literal, c.constant = !!c.constant, c
    },
    primary: function() {
      var a;
      if (this.expect("(")) a = this.filterChain(), this.consume(")");
      else if (this.expect("[")) a = this.arrayDeclaration();
      else if (this.expect("{")) a = this.object();
      else {
        var b = this.expect();
        a = b.fn, a || this.throwError("not a primary expression", b), b.json && (a.constant = !0, a.literal = !0)
      }
      for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
      return a
    },
    throwError: function(a, b) {
      throw he("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
    },
    peekToken: function() {
      if (0 === this.tokens.length) throw he("ueoe", "Unexpected end of expression: {0}", this.text);
      return this.tokens[0]
    },
    peek: function(a, b, c, d) {
      if (this.tokens.length > 0) {
        var e = this.tokens[0],
          f = e.text;
        if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e
      }
      return !1
    },
    expect: function(a, b, c, d) {
      var e = this.peek(a, b, c, d);
      return e ? (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e) : !1
    },
    consume: function(a) {
      this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    },
    unaryFn: function(a, b) {
      return l(function(c, d) {
        return a(c, d, b)
      }, {
        constant: b.constant
      })
    },
    ternaryFn: function(a, b, c) {
      return l(function(d, e) {
        return a(d, e) ? b(d, e) : c(d, e)
      }, {
        constant: a.constant && b.constant && c.constant
      })
    },
    binaryFn: function(a, b, c) {
      return l(function(d, e) {
        return b(d, e, a, c)
      }, {
        constant: a.constant && c.constant
      })
    },
    statements: function() {
      for (var a = [];;)
        if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
          for (var d, e = 0; e < a.length; e++) {
            var f = a[e];
            f && (d = f(b, c))
          }
          return d
        }
    },
    filterChain: function() {
      for (var a, b = this.expression();;) {
        if (!(a = this.expect("|"))) return b;
        b = this.binaryFn(b, a.fn, this.filter())
      }
    },
    filter: function() {
      for (var a = this.expect(), b = this.$filter(a.text), c = [];;) {
        if (!(a = this.expect(":"))) {
          var d = function(a, d, e) {
            for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d));
            return b.apply(a, f)
          };
          return function() {
            return d
          }
        }
        c.push(this.expression())
      }
    },
    expression: function() {
      return this.assignment()
    },
    assignment: function() {
      var a, b, c = this.ternary();
      return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function(b, d) {
        return c.assign(b, a(b, d), d)
      }) : c
    },
    ternary: function() {
      var a, b, c = this.logicalOR();
      return (b = this.expect("?")) ? (a = this.ternary(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.ternary()) : void this.throwError("expected :", b)) : c
    },
    logicalOR: function() {
      for (var a, b = this.logicalAND();;) {
        if (!(a = this.expect("||"))) return b;
        b = this.binaryFn(b, a.fn, this.logicalAND())
      }
    },
    logicalAND: function() {
      var a, b = this.equality();
      return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b
    },
    equality: function() {
      var a, b = this.relational();
      return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b
    },
    relational: function() {
      var a, b = this.additive();
      return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b
    },
    additive: function() {
      for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative());
      return b
    },
    multiplicative: function() {
      for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary());
      return b
    },
    unary: function() {
      var a;
      return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(me.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    },
    fieldAccess: function(a) {
      var b = this,
        c = this.expect().text,
        d = yc(c, this.options, this.text);
      return l(function(b, c, e) {
        return d(e || a(b, c))
      }, {
        assign: function(d, e, f) {
          return uc(a(d, f), c, e, b.text, b.options)
        }
      })
    },
    objectIndex: function(a) {
      var b = this,
        d = this.expression();
      return this.consume("]"), l(function(e, f) {
        var g, h, i = a(e, f),
          j = d(e, f);
        return i ? (g = tc(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) {
          h.$$v = a
        })), g = g.$$v), g) : c
      }, {
        assign: function(c, e, f) {
          var g = d(c, f),
            h = tc(a(c, f), b.text);
          return h[g] = e
        }
      })
    },
    functionCall: function(a, b) {
      var c = [];
      if (")" !== this.peekToken().text)
        do c.push(this.expression()); while (this.expect(","));
      this.consume(")");
      var d = this;
      return function(e, f) {
        for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
        var j = a(e, f, h) || o;
        tc(h, d.text), tc(j, d.text);
        var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]);
        return tc(k, d.text)
      }
    },
    arrayDeclaration: function() {
      var a = [],
        b = !0;
      if ("]" !== this.peekToken().text)
        do {
          if (this.peek("]")) break;
          var c = this.expression();
          a.push(c), c.constant || (b = !1)
        } while (this.expect(","));
      return this.consume("]"), l(function(b, c) {
        for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
        return d
      }, {
        literal: !0,
        constant: b
      })
    },
    object: function() {
      var a = [],
        b = !0;
      if ("}" !== this.peekToken().text)
        do {
          if (this.peek("}")) break;
          var c = this.expect(),
            d = c.string || c.text;
          this.consume(":");
          var e = this.expression();
          a.push({
            key: d,
            value: e
          }), e.constant || (b = !1)
        } while (this.expect(","));
      return this.consume("}"), l(function(b, c) {
        for (var d = {}, e = 0; e < a.length; e++) {
          var f = a[e];
          d[f.key] = f.value(b, c)
        }
        return d
      }, {
        literal: !0,
        constant: b
      })
    }
  };
  var ne = {},
    oe = d("$sce"),
    pe = {
      HTML: "html",
      CSS: "css",
      URL: "url",
      RESOURCE_URL: "resourceUrl",
      JS: "js"
    },
    qe = b.createElement("a"),
    re = Mc(a.location.href, !0);
  Pc.$inject = ["$provide"], Rc.$inject = ["$locale"], Sc.$inject = ["$locale"];
  var se = ".",
    te = {
      yyyy: Vc("FullYear", 4),
      yy: Vc("FullYear", 2, 0, !0),
      y: Vc("FullYear", 1),
      MMMM: Wc("Month"),
      MMM: Wc("Month", !0),
      MM: Vc("Month", 2, 1),
      M: Vc("Month", 1, 1),
      dd: Vc("Date", 2),
      d: Vc("Date", 1),
      HH: Vc("Hours", 2),
      H: Vc("Hours", 1),
      hh: Vc("Hours", 2, -12),
      h: Vc("Hours", 1, -12),
      mm: Vc("Minutes", 2),
      m: Vc("Minutes", 1),
      ss: Vc("Seconds", 2),
      s: Vc("Seconds", 1),
      sss: Vc("Milliseconds", 3),
      EEEE: Wc("Day"),
      EEE: Wc("Day", !0),
      a: Yc,
      Z: Xc
    },
    ue = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    ve = /^\-?\d+$/;
  Zc.$inject = ["$locale"];
  var we = q(md),
    xe = q(od);
  ad.$inject = ["$parse"];
  var ye = q({
      restrict: "E",
      compile: function(a, c) {
        return 8 >= rd && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
          var c = "[object SVGAnimatedString]" === yd.call(b.prop("href")) ? "xlink:href" : "href";
          b.on("click", function(a) {
            b.attr(c) || a.preventDefault()
          })
        }
      }
    }),
    ze = {};
  f(Td, function(a, b) {
    if ("multiple" != a) {
      var c = Qb("ng-" + b);
      ze[c] = function() {
        return {
          priority: 100,
          link: function(a, d, e) {
            a.$watch(e[c], function(a) {
              e.$set(b, !!a)
            })
          }
        }
      }
    }
  }), f(["src", "srcset", "href"], function(a) {
    var b = Qb("ng-" + a);
    ze[b] = function() {
      return {
        priority: 99,
        link: function(c, d, e) {
          var f = a,
            g = a;
          "href" === a && "[object SVGAnimatedString]" === yd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(a) {
            a && (e.$set(g, a), rd && f && d.prop(f, e[g]))
          })
        }
      }
    }
  });
  var Ae = {
    $addControl: o,
    $removeControl: o,
    $setValidity: o,
    $setDirty: o,
    $setPristine: o
  };
  cd.$inject = ["$element", "$attrs", "$scope", "$animate"];
  var Be = function(a) {
      return ["$timeout", function(b) {
        var d = {
          name: "form",
          restrict: a ? "EAC" : "E",
          controller: cd,
          compile: function() {
            return {
              pre: function(a, d, e, f) {
                if (!e.action) {
                  var g = function(a) {
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                  };
                  Id(d[0], "submit", g), d.on("$destroy", function() {
                    b(function() {
                      Jd(d[0], "submit", g)
                    }, 0, !1)
                  })
                }
                var h = d.parent().controller("form"),
                  i = e.name || e.ngForm;
                i && uc(a, i, f, i), h && d.on("$destroy", function() {
                  h.$removeControl(f), i && uc(a, i, c, i), l(f, Ae)
                })
              }
            }
          }
        };
        return d
      }]
    },
    Ce = Be(),
    De = Be(!0),
    Ee = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    Fe = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,
    Ge = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
    He = {
      text: fd,
      number: gd,
      url: hd,
      email: id,
      radio: jd,
      checkbox: kd,
      hidden: o,
      button: o,
      submit: o,
      reset: o,
      file: o
    },
    Ie = ["$browser", "$sniffer", function(a, b) {
      return {
        restrict: "E",
        require: "?ngModel",
        link: function(c, d, e, f) {
          f && (He[md(e.type)] || He.text)(c, d, e, f, b, a)
        }
      }
    }],
    Je = "ng-valid",
    Ke = "ng-invalid",
    Le = "ng-pristine",
    Me = "ng-dirty",
    Ne = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, b, c, e, g, h) {
      function i(a, b) {
        b = b ? "-" + ab(b, "-") : "", h.removeClass(e, (a ? Ke : Je) + b), h.addClass(e, (a ? Je : Ke) + b)
      }
      this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
      var j = g(c.ngModel),
        k = j.assign;
      if (!k) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, U(e));
      this.$render = o, this.$isEmpty = function(a) {
        return r(a) || "" === a || null === a || a !== a
      };
      var l = e.inheritedData("$formController") || Ae,
        m = 0,
        n = this.$error = {};
      e.addClass(Le), i(!0), this.$setValidity = function(a, b) {
        n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this))
      }, this.$setPristine = function() {
        this.$dirty = !1, this.$pristine = !0, h.removeClass(e, Me), h.addClass(e, Le)
      }, this.$setViewValue = function(c) {
        this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Le), h.addClass(e, Me), l.$setDirty()), f(this.$parsers, function(a) {
          c = a(c)
        }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function(a) {
          try {
            a()
          } catch (c) {
            b(c)
          }
        }))
      };
      var p = this;
      a.$watch(function() {
        var b = j(a);
        if (p.$modelValue !== b) {
          var c = p.$formatters,
            d = c.length;
          for (p.$modelValue = b; d--;) b = c[d](b);
          p.$viewValue !== b && (p.$viewValue = b, p.$render())
        }
        return b
      })
    }],
    Oe = function() {
      return {
        require: ["ngModel", "^?form"],
        controller: Ne,
        link: function(a, b, c, d) {
          var e = d[0],
            f = d[1] || Ae;
          f.$addControl(e), a.$on("$destroy", function() {
            f.$removeControl(e)
          })
        }
      }
    },
    Pe = q({
      require: "ngModel",
      link: function(a, b, c, d) {
        d.$viewChangeListeners.push(function() {
          a.$eval(c.ngChange)
        })
      }
    }),
    Qe = function() {
      return {
        require: "?ngModel",
        link: function(a, b, c, d) {
          if (d) {
            c.required = !0;
            var e = function(a) {
              return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a)
            };
            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
              e(d.$viewValue)
            })
          }
        }
      }
    },
    Re = function() {
      return {
        require: "ngModel",
        link: function(a, b, d, e) {
          var g = /\/(.*)\//.exec(d.ngList),
            h = g && new RegExp(g[1]) || d.ngList || ",",
            i = function(a) {
              if (!r(a)) {
                var b = [];
                return a && f(a.split(h), function(a) {
                  a && b.push(Cd(a))
                }), b
              }
            };
          e.$parsers.push(i), e.$formatters.push(function(a) {
            return x(a) ? a.join(", ") : c
          }), e.$isEmpty = function(a) {
            return !a || !a.length
          }
        }
      }
    },
    Se = /^(true|false|\d+)$/,
    Te = function() {
      return {
        priority: 100,
        compile: function(a, b) {
          return Se.test(b.ngValue) ? function(a, b, c) {
            c.$set("value", a.$eval(c.ngValue))
          } : function(a, b, c) {
            a.$watch(c.ngValue, function(a) {
              c.$set("value", a)
            })
          }
        }
      }
    },
    Ue = bd(function(a, b, d) {
      b.addClass("ng-binding").data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
        b.text(a == c ? "" : a)
      })
    }),
    Ve = ["$interpolate", function(a) {
      return function(b, c, d) {
        var e = a(c.attr(d.$attr.ngBindTemplate));
        c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) {
          c.text(a)
        })
      }
    }],
    We = ["$sce", "$parse", function(a, b) {
      return function(c, d, e) {
        function f() {
          return (g(c) || "").toString()
        }
        d.addClass("ng-binding").data("$binding", e.ngBindHtml);
        var g = b(e.ngBindHtml);
        c.$watch(f, function() {
          d.html(a.getTrustedHtml(g(c)) || "")
        })
      }
    }],
    Xe = ld("", !0),
    Ye = ld("Odd", 0),
    Ze = ld("Even", 1),
    $e = bd({
      compile: function(a, b) {
        b.$set("ngCloak", c), a.removeClass("ng-cloak")
      }
    }),
    _e = [function() {
      return {
        scope: !0,
        controller: "@",
        priority: 500
      }
    }],
    af = {};
  f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
    var b = Qb("ng-" + a);
    af[b] = ["$parse", function(c) {
      return {
        compile: function(d, e) {
          var f = c(e[b]);
          return function(b, c) {
            c.on(md(a), function(a) {
              b.$apply(function() {
                f(b, {
                  $event: a
                })
              })
            })
          }
        }
      }
    }]
  });
  var bf = ["$animate", function(a) {
      return {
        transclude: "element",
        priority: 600,
        terminal: !0,
        restrict: "A",
        $$tlb: !0,
        link: function(c, d, e, f, g) {
          var h, i, j;
          c.$watch(e.ngIf, function(f) {
            T(f) ? i || (i = c.$new(), g(i, function(c) {
              c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                clone: c
              }, a.enter(c, d.parent(), d)
            })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = gb(h.clone), a.leave(j, function() {
              j = null
            }), h = null))
          })
        }
      }
    }],
    cf = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, b, c, d, e) {
      return {
        restrict: "ECA",
        priority: 400,
        terminal: !0,
        transclude: "element",
        controller: Ad.noop,
        compile: function(f, g) {
          var h = g.ngInclude || g.src,
            i = g.onload || "",
            j = g.autoscroll;
          return function(f, g, k, l, m) {
            var n, o, p, q = 0,
              r = function() {
                o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function() {
                  o = null
                }), o = p, p = null)
              };
            f.$watch(e.parseAsResourceUrl(h), function(e) {
              var h = function() {
                  !s(j) || j && !f.$eval(j) || c()
                },
                k = ++q;
              e ? (a.get(e, {
                cache: b
              }).success(function(a) {
                if (k === q) {
                  var b = f.$new();
                  l.template = a;
                  var c = m(b, function(a) {
                    r(), d.enter(a, null, g, h)
                  });
                  n = b, p = c, n.$emit("$includeContentLoaded"), f.$eval(i)
                }
              }).error(function() {
                k === q && r()
              }), f.$emit("$includeContentRequested")) : (r(), l.template = null)
            })
          }
        }
      }
    }],
    df = ["$compile", function(a) {
      return {
        restrict: "ECA",
        priority: -400,
        require: "ngInclude",
        link: function(b, c, d, e) {
          c.html(e.template), a(c.contents())(b)
        }
      }
    }],
    ef = bd({
      priority: 450,
      compile: function() {
        return {
          pre: function(a, b, c) {
            a.$eval(c.ngInit)
          }
        }
      }
    }),
    ff = bd({
      terminal: !0,
      priority: 1e3
    }),
    gf = ["$locale", "$interpolate", function(a, b) {
      var c = /{}/g;
      return {
        restrict: "EA",
        link: function(d, e, g) {
          var h = g.count,
            i = g.$attr.when && e.attr(g.$attr.when),
            j = g.offset || 0,
            k = d.$eval(i) || {},
            l = {},
            m = b.startSymbol(),
            n = b.endSymbol(),
            o = /^when(Minus)?(.+)$/;
          f(g, function(a, b) {
            o.test(b) && (k[md(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]))
          }), f(k, function(a, d) {
            l[d] = b(a.replace(c, m + h + "-" + j + n))
          }), d.$watch(function() {
            var b = parseFloat(d.$eval(h));
            return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0))
          }, function(a) {
            e.text(a)
          })
        }
      }
    }],
    hf = ["$parse", "$animate", function(a, c) {
      function g(a) {
        return a.clone[0]
      }

      function h(a) {
        return a.clone[a.clone.length - 1]
      }
      var i = "$$NG_REMOVED",
        j = d("ngRepeat");
      return {
        transclude: "element",
        priority: 1e3,
        terminal: !0,
        $$tlb: !0,
        link: function(d, k, l, m, n) {
          var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
            y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
            z = {
              $id: Fb
            };
          if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x);
          if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function(a, b, c) {
              return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z)
            }) : (r = function(a, b) {
              return Fb(b)
            }, s = function(a) {
              return a
            }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
          v = y[3] || y[1], w = y[2];
          var A = {};
          d.$watchCollection(u, function(a) {
            var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
              G = {},
              H = [];
            if (e(a)) C = a, B = q || r;
            else {
              B = q || s, C = [];
              for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
              C.sort()
            }
            for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
              if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), eb(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
              else {
                if (G.hasOwnProperty(z)) throw f(H, function(a) {
                  a && a.scope && (A[a.id] = a)
                }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", x, z);
                H[l] = {
                  id: z
                }, G[z] = !1
              }
            for (u in A) A.hasOwnProperty(u) && (D = A[u], E = gb(D.clone), c.leave(E), f(E, function(a) {
              a[i] = !0
            }), D.scope.$destroy());
            for (l = 0, m = C.length; m > l; l++) {
              if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) {
                t = D.scope, o = F;
                do o = o.nextSibling; while (o && o[i]);
                g(D) != o && c.move(gb(D.clone), null, sd(F)), F = h(D)
              } else t = d.$new();
              t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function(a) {
                a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, sd(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D
              })
            }
            A = G
          })
        }
      }
    }],
    jf = ["$animate", function(a) {
      return function(b, c, d) {
        b.$watch(d.ngShow, function(b) {
          a[T(b) ? "removeClass" : "addClass"](c, "ng-hide")
        })
      }
    }],
    kf = ["$animate", function(a) {
      return function(b, c, d) {
        b.$watch(d.ngHide, function(b) {
          a[T(b) ? "addClass" : "removeClass"](c, "ng-hide")
        })
      }
    }],
    lf = bd(function(a, b, c) {
      a.$watch(c.ngStyle, function(a, c) {
        c && a !== c && f(c, function(a, c) {
          b.css(c, "")
        }), a && b.css(a)
      }, !0)
    }),
    mf = ["$animate", function(a) {
      return {
        restrict: "EA",
        require: "ngSwitch",
        controller: ["$scope", function() {
          this.cases = {}
        }],
        link: function(b, c, d, e) {
          var g, h, i, j = d.ngSwitch || d.on,
            k = [];
          b.$watch(j, function(c) {
            var j, l = k.length;
            if (l > 0) {
              if (i) {
                for (j = 0; l > j; j++) i[j].remove();
                i = null
              }
              for (i = [], j = 0; l > j; j++) {
                var m = h[j];
                k[j].$destroy(), i[j] = m, a.leave(m, function() {
                  i.splice(j, 1), 0 === i.length && (i = null)
                })
              }
            }
            h = [], k = [], (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(g, function(c) {
              var d = b.$new();
              k.push(d), c.transclude(d, function(b) {
                var d = c.element;
                h.push(b), a.enter(b, d.parent(), d)
              })
            }))
          })
        }
      }
    }],
    nf = bd({
      transclude: "element",
      priority: 800,
      require: "^ngSwitch",
      link: function(a, b, c, d, e) {
        d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
          transclude: e,
          element: b
        })
      }
    }),
    of = bd({
      transclude: "element",
      priority: 800,
      require: "^ngSwitch",
      link: function(a, b, c, d, e) {
        d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
          transclude: e,
          element: b
        })
      }
    }),
    pf = bd({
      link: function(a, b, c, e, f) {
        if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", U(b));
        f(function(a) {
          b.empty(), b.append(a)
        })
      }
    }),
    qf = ["$templateCache", function(a) {
      return {
        restrict: "E",
        terminal: !0,
        compile: function(b, c) {
          if ("text/ng-template" == c.type) {
            var d = c.id,
              e = b[0].text;
            a.put(d, e)
          }
        }
      }
    }],
    rf = d("ngOptions"),
    sf = q({
      terminal: !0
    }),
    tf = ["$compile", "$parse", function(a, d) {
      var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        h = {
          $setViewValue: o
        };
      return {
        restrict: "E",
        require: ["select", "?ngModel"],
        controller: ["$element", "$scope", "$attrs", function(a, b, c) {
          var d, e, f = this,
            g = {},
            i = h;
          f.databound = c.ngModel, f.init = function(a, b, c) {
            i = a, d = b, e = c
          }, f.addOption = function(b) {
            eb(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove())
          }, f.removeOption = function(a) {
            this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a))
          }, f.renderUnknownOption = function(b) {
            var c = "? " + Fb(b) + " ?";
            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
          }, f.hasOption = function(a) {
            return g.hasOwnProperty(a)
          }, b.$on("$destroy", function() {
            f.renderUnknownOption = o
          })
        }],
        link: function(h, i, j, k) {
          function l(a, b, c, d) {
            c.$render = function() {
              var a = c.$viewValue;
              d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
            }, b.on("change", function() {
              a.$apply(function() {
                z.parent() && z.remove(), c.$setViewValue(b.val())
              })
            })
          }

          function m(a, b, c) {
            var d;
            c.$render = function() {
              var a = new Gb(c.$viewValue);
              f(b.find("option"), function(b) {
                b.selected = s(a.get(b.value))
              })
            }, a.$watch(function() {
              L(d, c.$viewValue) || (d = J(c.$viewValue), c.$render())
            }), b.on("change", function() {
              a.$apply(function() {
                var a = [];
                f(b.find("option"), function(b) {
                  b.selected && a.push(b.value)
                }), c.$setViewValue(a)
              })
            })
          }

          function n(b, f, h) {
            function i() {
              var a, c, d, e, i, j, q, u, A, B, C, D, E, F, G, H = {
                  "": []
                },
                I = [""],
                J = h.$modelValue,
                K = p(b) || [],
                L = m ? g(K) : K,
                M = {},
                N = !1;
              if (t)
                if (r && x(J)) {
                  N = new Gb([]);
                  for (var O = 0; O < J.length; O++) M[l] = J[O], N.put(r(b, M), J[O])
                } else N = new Gb(J);
              for (C = 0; A = L.length, A > C; C++) {
                if (q = C, m) {
                  if (q = L[C], "$" === q.charAt(0)) continue;
                  M[m] = q
                }
                if (M[l] = K[q], a = n(b, M) || "", (c = H[a]) || (c = H[a] = [], I.push(a)), t) D = s(N.remove(r ? r(b, M) : o(b, M)));
                else {
                  if (r) {
                    var P = {};
                    P[l] = J, D = r(b, P) === r(b, M)
                  } else D = J === o(b, M);
                  N = N || D
                }
                G = k(b, M), G = s(G) ? G : "", c.push({
                  id: r ? r(b, M) : m ? L[C] : C,
                  label: G,
                  selected: D
                })
              }
              for (t || (v || null === J ? H[""].unshift({
                  id: "",
                  label: "",
                  selected: !N
                }) : N || H[""].unshift({
                  id: "?",
                  label: "",
                  selected: !0
                })), B = 0, u = I.length; u > B; B++) {
                for (a = I[B], c = H[a], z.length <= B ? (e = {
                    element: y.clone().attr("label", a),
                    label: c.label
                  }, i = [e], z.push(i), f.append(e.element)) : (i = z[B], e = i[0], e.label != a && e.element.attr("label", e.label = a)), E = null, C = 0, A = c.length; A > C; C++) d = c[C], (j = i[C + 1]) ? (E = j.element, j.label !== d.label && E.text(j.label = d.label), j.id !== d.id && E.val(j.id = d.id), j.selected !== d.selected && E.prop("selected", j.selected = d.selected)) : ("" === d.id && v ? F = v : (F = w.clone()).val(d.id).attr("selected", d.selected).text(d.label), i.push(j = {
                  element: F,
                  label: d.label,
                  id: d.id,
                  selected: d.selected
                }), E ? E.after(F) : e.element.append(F), E = F);
                for (C++; i.length > C;) i.pop().element.remove()
              }
              for (; z.length > B;) z.pop()[0].element.remove()
            }
            var j;
            if (!(j = u.match(e))) throw rf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, U(f));
            var k = d(j[2] || j[1]),
              l = j[4] || j[6],
              m = j[5],
              n = d(j[3] || ""),
              o = d(j[2] ? j[1] : l),
              p = d(j[7]),
              q = j[8],
              r = q ? d(j[8]) : null,
              z = [
                [{
                  element: f,
                  label: ""
                }]
              ];
            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function() {
              b.$apply(function() {
                var a, d, e, g, i, j, k, n, q, s = p(b) || [],
                  u = {};
                if (t) {
                  for (e = [], j = 0, n = z.length; n > j; j++)
                    for (a = z[j], i = 1, k = a.length; k > i; i++)
                      if ((g = a[i].element)[0].selected) {
                        if (d = g.val(), m && (u[m] = d), r)
                          for (q = 0; q < s.length && (u[l] = s[q], r(b, u) != d); q++);
                        else u[l] = s[d];
                        e.push(o(b, u))
                      }
                } else {
                  if (d = f.val(), "?" == d) e = c;
                  else if ("" === d) e = null;
                  else if (r) {
                    for (q = 0; q < s.length; q++)
                      if (u[l] = s[q], r(b, u) == d) {
                        e = o(b, u);
                        break
                      }
                  } else u[l] = s[d], m && (u[m] = d), e = o(b, u);
                  z[0].length > 1 && z[0][1].id !== d && (z[0][1].selected = !1)
                }
                h.$setViewValue(e)
              })
            }), h.$render = i, b.$watch(i)
          }
          if (k[1]) {
            for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = sd(b.createElement("option")), y = sd(b.createElement("optgroup")), z = w.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
              if ("" === B[A].value) {
                o = v = B.eq(A);
                break
              }
            p.init(q, v, z), t && (q.$isEmpty = function(a) {
              return !a || 0 === a.length
            }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
          }
        }
      }
    }],
    uf = ["$interpolate", function(a) {
      var b = {
        addOption: o,
        removeOption: o
      };
      return {
        restrict: "E",
        priority: 100,
        compile: function(c, d) {
          if (r(d.value)) {
            var e = a(c.text(), !0);
            e || d.$set("value", c.text())
          }
          return function(a, c, d) {
            var f = "$selectController",
              g = c.parent(),
              h = g.data(f) || g.parent().data(f);
            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) {
              d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a)
            }) : h.addOption(d.value), c.on("$destroy", function() {
              h.removeOption(d.value)
            })
          }
        }
      }
    }],
    vf = q({
      restrict: "E",
      terminal: !0
    });
  return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (bb(), ib(Ad), void sd(b).ready(function() {
    $(b, _)
  }))
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>'),
  function() {
    function a(b, d) {
      function f(a) {
        if (f[a] !== q) return f[a];
        var b;
        if ("bug-string-char-index" == a) b = "a" != "a" [0];
        else if ("json" == a) b = f("json-stringify") && f("json-parse");
        else {
          var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if ("json-stringify" == a) {
            var i = d.stringify,
              k = "function" == typeof i && t;
            if (k) {
              (c = function() {
                return 1
              }).toJSON = c;
              try {
                k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
                  a: [c, !0, !1, null, "\x00\b\n\f\r	"]
                }) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
              } catch (l) {
                k = !1
              }
            }
            b = k
          }
          if ("json-parse" == a) {
            var m = d.parse;
            if ("function" == typeof m) try {
              if (0 === m("0") && !m(!1)) {
                c = m(e);
                var n = 5 == c.a.length && 1 === c.a[0];
                if (n) {
                  try {
                    n = !m('"	"')
                  } catch (l) {}
                  if (n) try {
                    n = 1 !== m("01")
                  } catch (l) {}
                  if (n) try {
                    n = 1 !== m("1.")
                  } catch (l) {}
                }
              }
            } catch (l) {
              n = !1
            }
            b = n
          }
        }
        return f[a] = !!b
      }
      b || (b = e.Object()), d || (d = e.Object());
      var g = b.Number || e.Number,
        h = b.String || e.String,
        i = b.Object || e.Object,
        j = b.Date || e.Date,
        k = b.SyntaxError || e.SyntaxError,
        l = b.TypeError || e.TypeError,
        m = b.Math || e.Math,
        n = b.JSON || e.JSON;
      "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
      var o, p, q, r = i.prototype,
        s = r.toString,
        t = new j(-0xc782b5b800cec);
      try {
        t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
      } catch (u) {}
      if (!f("json")) {
        var v = "[object Function]",
          w = "[object Date]",
          x = "[object Number]",
          y = "[object String]",
          z = "[object Array]",
          A = "[object Boolean]",
          B = f("bug-string-char-index");
        if (!t) var C = m.floor,
          D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          E = function(a, b) {
            return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400)
          };
        if ((o = r.hasOwnProperty) || (o = function(a) {
            var b, c = {};
            return (c.__proto__ = null, c.__proto__ = {
              toString: 1
            }, c).toString != s ? o = function(a) {
              var b = this.__proto__,
                c = a in (this.__proto__ = null, this);
              return this.__proto__ = b, c
            } : (b = c.constructor, o = function(a) {
              var c = (this.constructor || b).prototype;
              return a in this && !(a in c && this[a] === c[a])
            }), c = null, o.call(this, a)
          }), p = function(a, b) {
            var d, e, f, g = 0;
            (d = function() {
              this.valueOf = 0
            }).prototype.valueOf = 0, e = new d;
            for (f in e) o.call(e, f) && g++;
            return d = e = null, g ? p = 2 == g ? function(a, b) {
              var c, d = {},
                e = s.call(a) == v;
              for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
            } : function(a, b) {
              var c, d, e = s.call(a) == v;
              for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
              (d || o.call(a, c = "constructor")) && b(c)
            } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
              var d, f, g = s.call(a) == v,
                h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
              for (d in a) g && "prototype" == d || !h.call(a, d) || b(d);
              for (f = e.length; d = e[--f]; h.call(a, d) && b(d));
            }), p(a, b)
          }, !f("json-stringify")) {
          var F = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            },
            G = "000000",
            H = function(a, b) {
              return (G + (b || 0)).slice(-a)
            },
            I = "\\u00",
            J = function(a) {
              for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
                var g = a.charCodeAt(c);
                switch (g) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    b += F[g];
                    break;
                  default:
                    if (32 > g) {
                      b += I + H(2, g.toString(16));
                      break
                    }
                    b += e ? f[c] : a.charAt(c)
                }
              }
              return b + '"'
            },
            K = function(a, b, c, d, e, f, g) {
              var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
              try {
                h = b[a]
              } catch (M) {}
              if ("object" == typeof h && h)
                if (i = s.call(h), i != w || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
                else if (h > -1 / 0 && 1 / 0 > h) {
                if (E) {
                  for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++);
                  for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++);
                  m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3
                } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z"
              } else h = null;
              if (c && (h = c.call(b, a, h)), null === h) return "null";
              if (i = s.call(h), i == A) return "" + h;
              if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
              if (i == y) return J("" + h);
              if ("object" == typeof h) {
                for (G = g.length; G--;)
                  if (g[G] === h) throw l();
                if (g.push(h), B = [], I = f, f += e, i == z) {
                  for (F = 0, G = h.length; G > F; F++) D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
                  L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]"
                } else p(d || h, function(a) {
                  var b = K(a, h, c, d, e, f, g);
                  b !== q && B.push(J(a) + ":" + (e ? " " : "") + b)
                }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
                return g.pop(), L
              }
            };
          d.stringify = function(a, b, d) {
            var e, f, g, h;
            if (c[typeof b] && b)
              if ((h = s.call(b)) == v) f = b;
              else if (h == z) {
              g = {};
              for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1));
            }
            if (d)
              if ((h = s.call(d)) == x) {
                if ((d -= d % 1) > 0)
                  for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
              } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
            return K("", (i = {}, i[""] = a, i), f, g, e, "", [])
          }
        }
        if (!f("json-parse")) {
          var L, M, N = h.fromCharCode,
            O = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "	",
              110: "\n",
              102: "\f",
              114: "\r"
            },
            P = function() {
              throw L = M = null, k()
            },
            Q = function() {
              for (var a, b, c, d, e, f = M, g = f.length; g > L;) switch (e = f.charCodeAt(L)) {
                case 9:
                case 10:
                case 13:
                case 32:
                  L++;
                  break;
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                  return a = B ? f.charAt(L) : f[L], L++, a;
                case 34:
                  for (a = "@", L++; g > L;)
                    if (e = f.charCodeAt(L), 32 > e) P();
                    else if (92 == e) switch (e = f.charCodeAt(++L)) {
                    case 92:
                    case 34:
                    case 47:
                    case 98:
                    case 116:
                    case 110:
                    case 102:
                    case 114:
                      a += O[e], L++;
                      break;
                    case 117:
                      for (b = ++L, c = L + 4; c > L; L++) e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                      a += N("0x" + f.slice(b, L));
                      break;
                    default:
                      P()
                  } else {
                    if (34 == e) break;
                    for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++L);
                    a += f.slice(b, L)
                  }
                  if (34 == f.charCodeAt(L)) return L++, a;
                  P();
                default:
                  if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                    for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++);
                    if (46 == f.charCodeAt(L)) {
                      for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                      c == L && P(), L = c
                    }
                    if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                      for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++);
                      c == L && P(), L = c
                    }
                    return +f.slice(b, L)
                  }
                  if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;
                  if ("false" == f.slice(L, L + 5)) return L += 5, !1;
                  if ("null" == f.slice(L, L + 4)) return L += 4, null;
                  P()
              }
              return "$"
            },
            R = function(a) {
              var b, c;
              if ("$" == a && P(), "string" == typeof a) {
                if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);
                if ("[" == a) {
                  for (b = []; a = Q(), "]" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
                  return b
                }
                if ("{" == a) {
                  for (b = {}; a = Q(), "}" != a; c || (c = !0)) c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
                  return b
                }
                P()
              }
              return a
            },
            S = function(a, b, c) {
              var d = T(a, b, c);
              d === q ? delete a[b] : a[b] = d
            },
            T = function(a, b, c) {
              var d, e = a[b];
              if ("object" == typeof e && e)
                if (s.call(e) == z)
                  for (d = e.length; d--;) S(e, d, c);
                else p(e, function(a) {
                  S(e, a, c)
                });
              return c.call(a, b, e)
            };
          d.parse = function(a, b) {
            var c, d;
            return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c
          }
        }
      }
      return d.runInContext = a, d
    }
    var b = "function" == typeof define && define.amd,
      c = {
        "function": !0,
        object: !0
      },
      d = c[typeof exports] && exports && !exports.nodeType && exports,
      e = c[typeof window] && window || this,
      f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);
    else {
      var g = e.JSON,
        h = e.JSON3,
        i = !1,
        j = a(e, e.JSON3 = {
          noConflict: function() {
            return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j
          }
        });
      e.JSON = {
        parse: j.parse,
        stringify: j.stringify
      }
    }
    b && define(function() {
      return j
    })
  }.call(this),
  function(a, b, c) {
    "use strict";

    function d(a) {
      return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, b) {
      if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
      for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
        var i = e[f];
        a = null !== a ? a[i] : c
      }
      return a
    }

    function f(a, c) {
      c = c || {}, b.forEach(c, function(a, b) {
        delete c[b]
      });
      for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
      return c
    }
    var g = b.$$minErr("$resource"),
      h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function(a, d) {
      function h(a) {
        return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
      }

      function i(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
      }

      function j(a, b) {
        this.template = a, this.defaults = b || {}, this.urlParams = {}
      }

      function k(h, i, r) {
        function s(a, b) {
          var c = {};
          return b = o({}, i, b), n(b, function(b, d) {
            q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
          }), c
        }

        function t(a) {
          return a.resource
        }

        function u(a) {
          f(a || {}, this)
        }
        var v = new j(h);
        return r = o({}, l, r), n(r, function(e, h) {
          var i = /^(POST|PUT|PATCH)$/i.test(e.method);
          u[h] = function(h, j, k, l) {
            var r, w, x, y = {};
            switch (arguments.length) {
              case 4:
                x = l, w = k;
              case 3:
              case 2:
                if (!q(j)) {
                  y = h, r = j, w = k;
                  break
                }
                if (q(h)) {
                  w = h, x = j;
                  break
                }
                w = j, x = k;
              case 1:
                q(h) ? w = h : i ? r = h : y = h;
                break;
              case 0:
                break;
              default:
                throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
            }
            var z = this instanceof u,
              A = z ? r : e.isArray ? [] : new u(r),
              B = {},
              C = e.interceptor && e.interceptor.response || t,
              D = e.interceptor && e.interceptor.responseError || c;
            n(e, function(a, b) {
              "params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a))
            }), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url);
            var E = a(B).then(function(a) {
              var c = a.data,
                d = A.$promise;
              if (c) {
                if (b.isArray(c) !== !!e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                e.isArray ? (A.length = 0, n(c, function(a) {
                  A.push(new u(a))
                })) : (f(c, A), A.$promise = d)
              }
              return A.$resolved = !0, a.resource = A, a
            }, function(a) {
              return A.$resolved = !0, (x || m)(a), d.reject(a)
            });
            return E = E.then(function(a) {
              var b = C(a);
              return (w || m)(b, a.headers), b
            }, D), z ? E : (A.$promise = E, A.$resolved = !1, A)
          }, u.prototype["$" + h] = function(a, b, c) {
            q(a) && (c = b, b = a, a = {});
            var d = u[h].call(this, a, this, b, c);
            return d.$promise || d
          }
        }), u.bind = function(a) {
          return k(h, o({}, i, a), r)
        }, u
      }
      var l = {
          get: {
            method: "GET"
          },
          save: {
            method: "POST"
          },
          query: {
            method: "GET",
            isArray: !0
          },
          remove: {
            method: "DELETE"
          },
          "delete": {
            method: "DELETE"
          }
        },
        m = b.noop,
        n = b.forEach,
        o = b.extend,
        p = b.copy,
        q = b.isFunction;
      return j.prototype = {
        setUrlParams: function(a, c, d) {
          var e, f, i = this,
            j = d || i.template,
            k = i.urlParams = {};
          n(j.split(/\W/), function(a) {
            if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
          }), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function(a, d) {
            e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
              return f + b
            })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
              return "/" == c.charAt(0) ? c : b + c
            })
          }), j = j.replace(/\/+$/, "") || "/", j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
            i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
          })
        }
      }, k
    }])
  }(window, window.angular),
  function(a, b, c) {
    "use strict";
    b.module("ngAnimate", ["ng"]).factory("$$animateReflow", ["$$rAF", "$document", function(a, b) {
      var c = b[0].body;
      return function(b) {
        return a(function() {
          c.offsetWidth + 1;
          b()
        })
      }
    }]).config(["$provide", "$animateProvider", function(d, e) {
      function f(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if (c.nodeType == l) return c
        }
      }

      function g(a) {
        return b.element(f(a))
      }

      function h(a, b) {
        return f(a) == f(b)
      }
      var i = b.noop,
        j = b.forEach,
        k = e.$$selectors,
        l = 1,
        m = "$$ngAnimateState",
        n = "ng-animate",
        o = {
          running: !0
        };
      d.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function(a, c, d, l, p, q) {
        function r(a) {
          if (a) {
            var b = [],
              e = {},
              f = a.substr(1).split(".");
            (d.transitions || d.animations) && b.push(c.get(k[""]));
            for (var g = 0; g < f.length; g++) {
              var h = f[g],
                i = k[h];
              i && !e[h] && (b.push(c.get(i)), e[h] = !0)
            }
            return b
          }
        }

        function s(a, c, d) {
          function e(a, b) {
            var c = a[b],
              d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
            return c || d ? ("leave" == b && (d = c, c = null), v.push({
              event: b,
              fn: c
            }), s.push({
              event: b,
              fn: d
            }), !0) : void 0
          }

          function f(b, c, e) {
            function f(a) {
              if (c) {
                if ((c[a] || i)(), ++l < g.length) return;
                c = null
              }
              e()
            }
            var g = [];
            j(b, function(a) {
              a.fn && g.push(a)
            });
            var l = 0;
            j(g, function(b, e) {
              var g = function() {
                f(e)
              };
              switch (b.event) {
                case "setClass":
                  c.push(b.fn(a, h, k, g));
                  break;
                case "addClass":
                  c.push(b.fn(a, h || d, g));
                  break;
                case "removeClass":
                  c.push(b.fn(a, k || d, g));
                  break;
                default:
                  c.push(b.fn(a, g))
              }
            }), c && 0 === c.length && e()
          }
          var g = a[0];
          if (g) {
            var h, k, l = "setClass" == c,
              m = l || "addClass" == c || "removeClass" == c;
            b.isArray(d) && (h = d[0], k = d[1], d = h + " " + k);
            var n = a.attr("class"),
              o = n + " " + d;
            if (z(o)) {
              var p = i,
                q = [],
                s = [],
                t = i,
                u = [],
                v = [],
                w = (" " + o).replace(/\s+/g, ".");
              return j(r(w), function(a) {
                var b = e(a, c);
                !b && l && (e(a, "addClass"), e(a, "removeClass"))
              }), {
                node: g,
                event: c,
                className: d,
                isClassBased: m,
                isSetClassOperation: l,
                before: function(a) {
                  p = a, f(s, q, function() {
                    p = i, a()
                  })
                },
                after: function(a) {
                  t = a, f(v, u, function() {
                    t = i, a()
                  })
                },
                cancel: function() {
                  q && (j(q, function(a) {
                    (a || i)(!0)
                  }), p(!0)), u && (j(u, function(a) {
                    (a || i)(!0)
                  }), t(!0))
                }
              }
            }
          }
        }

        function t(a, c, d, e, f, g, h) {
          function i(b) {
            var e = "$animate:" + b;
            u && u[e] && u[e].length > 0 && p(function() {
              d.triggerHandler(e, {
                event: a,
                className: c
              })
            })
          }

          function k() {
            i("before")
          }

          function l() {
            i("after")
          }

          function o() {
            i("close"), h && p(function() {
              h()
            })
          }

          function q() {
            q.hasBeenRun || (q.hasBeenRun = !0, g())
          }

          function r() {
            if (!r.hasBeenRun) {
              r.hasBeenRun = !0;
              var b = d.data(m);
              b && (t && t.isClassBased ? v(d, c) : (p(function() {
                var b = d.data(m) || {};
                H == b.index && v(d, c, a)
              }), d.data(m, b))), o()
            }
          }
          var t = s(d, a, c);
          if (!t) return q(), k(), l(), void r();
          c = t.className;
          var u = b.element._data(t.node);
          u = u && u.events, e || (e = f ? f.parent() : d.parent());
          var y = d.data(m) || {},
            z = y.active || {},
            A = y.totalActive || 0,
            B = y.last,
            C = t.isClassBased ? y.disabled || B && !B.isClassBased : !1;
          if (C || w(d, e)) return q(), k(), l(), void r();
          var D = !1;
          if (A > 0) {
            var E = [];
            if (t.isClassBased) {
              if ("setClass" == B.event) E.push(B), v(d, c);
              else if (z[c]) {
                var F = z[c];
                F.event == a ? D = !0 : (E.push(F), v(d, c))
              }
            } else if ("leave" == a && z["ng-leave"]) D = !0;
            else {
              for (var G in z) E.push(z[G]), v(d, G);
              z = {}, A = 0
            }
            E.length > 0 && j(E, function(a) {
              a.cancel()
            })
          }
          if (!t.isClassBased || t.isSetClassOperation || D || (D = "addClass" == a == d.hasClass(c)), D) return k(), l(), void o();
          "leave" == a && d.one("$destroy", function() {
            var a = b.element(this),
              c = a.data(m);
            if (c) {
              var d = c.active["ng-leave"];
              d && (d.cancel(), v(a, "ng-leave"))
            }
          }), d.addClass(n);
          var H = x++;
          A++, z[c] = t, d.data(m, {
            last: t,
            active: z,
            index: H,
            totalActive: A
          }), k(), t.before(function(b) {
            var e = d.data(m);
            b = b || !e || !e.active[c] || t.isClassBased && e.active[c].event != a, q(), b === !0 ? r() : (l(), t.after(r))
          })
        }

        function u(a) {
          var c = f(a);
          if (c) {
            var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(n) : c.querySelectorAll("." + n);
            j(d, function(a) {
              a = b.element(a);
              var c = a.data(m);
              c && c.active && j(c.active, function(a) {
                a.cancel()
              })
            })
          }
        }

        function v(a, b) {
          if (h(a, l)) o.disabled || (o.running = !1, o.structural = !1);
          else if (b) {
            var c = a.data(m) || {},
              d = b === !0;
            !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (a.removeClass(n), a.removeData(m))
          }
        }

        function w(a, b) {
          if (o.disabled) return !0;
          if (h(a, l)) return o.disabled || o.running;
          do {
            if (0 === b.length) break;
            var c = h(b, l),
              d = c ? o : b.data(m),
              e = d && (!!d.disabled || d.running || d.totalActive > 0);
            if (c || e) return e;
            if (c) return !0
          } while (b = b.parent());
          return !0
        }
        var x = 0;
        l.data(m, o), q.$$postDigest(function() {
          q.$$postDigest(function() {
            o.running = !1
          })
        });
        var y = e.classNameFilter(),
          z = y ? function(a) {
            return y.test(a)
          } : function() {
            return !0
          };
        return {
          enter: function(b, c, d, e) {
            this.enabled(!1, b), a.enter(b, c, d), q.$$postDigest(function() {
              b = g(b), t("enter", "ng-enter", b, c, d, i, e)
            })
          },
          leave: function(b, c) {
            u(b), this.enabled(!1, b), q.$$postDigest(function() {
              t("leave", "ng-leave", g(b), null, null, function() {
                a.leave(b)
              }, c)
            })
          },
          move: function(b, c, d, e) {
            u(b), this.enabled(!1, b), a.move(b, c, d), q.$$postDigest(function() {
              b = g(b), t("move", "ng-move", b, c, d, i, e)
            })
          },
          addClass: function(b, c, d) {
            b = g(b), t("addClass", c, b, null, null, function() {
              a.addClass(b, c)
            }, d)
          },
          removeClass: function(b, c, d) {
            b = g(b), t("removeClass", c, b, null, null, function() {
              a.removeClass(b, c)
            }, d)
          },
          setClass: function(b, c, d, e) {
            b = g(b), t("setClass", [c, d], b, null, null, function() {
              a.setClass(b, c, d)
            }, e)
          },
          enabled: function(a, b) {
            switch (arguments.length) {
              case 2:
                if (a) v(b);
                else {
                  var c = b.data(m) || {};
                  c.disabled = !0, b.data(m, c)
                }
                break;
              case 1:
                o.disabled = !a;
                break;
              default:
                a = !o.disabled
            }
            return !!a
          }
        }
      }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
        function k(a, b) {
          J && J(), W.push(b), J = h(function() {
            j(W, function(a) {
              a()
            }), W = [], J = null, U = {}
          })
        }

        function m(a, c) {
          var d = f(a);
          a = b.element(d), Z.push(a);
          var e = Date.now() + c;
          Y >= e || (g.cancel(X), Y = e, X = g(function() {
            n(Z), Z = []
          }, c, !1))
        }

        function n(a) {
          j(a, function(a) {
            var b = a.data(P);
            b && (b.closeAnimationFn || i)()
          })
        }

        function o(a, b) {
          var c = b ? U[b] : null;
          if (!c) {
            var e, f, g, h, i = 0,
              k = 0,
              m = 0,
              n = 0;
            j(a, function(a) {
              if (a.nodeType == l) {
                var b = d.getComputedStyle(a) || {};
                g = b[E + K], i = Math.max(p(g), i), h = b[E + L], e = b[E + M], k = Math.max(p(e), k), f = b[G + M], n = Math.max(p(f), n);
                var c = p(b[G + K]);
                c > 0 && (c *= parseInt(b[G + N], 10) || 1), m = Math.max(c, m)
              }
            }), c = {
              total: 0,
              transitionPropertyStyle: h,
              transitionDurationStyle: g,
              transitionDelayStyle: e,
              transitionDelay: k,
              transitionDuration: i,
              animationDelayStyle: f,
              animationDelay: n,
              animationDuration: m
            }, b && (U[b] = c)
          }
          return c
        }

        function p(a) {
          var c = 0,
            d = b.isString(a) ? a.split(/\s*,\s*/) : [];
          return j(d, function(a) {
            c = Math.max(parseFloat(a) || 0, c)
          }), c
        }

        function q(a) {
          var b = a.parent(),
            c = b.data(O);
          return c || (b.data(O, ++V), c = V), c + "-" + f(a).getAttribute("class")
        }

        function r(a, b, c, d) {
          var e = q(b),
            f = e + " " + c,
            g = U[f] ? ++U[f].total : 0,
            h = {};
          if (g > 0) {
            var j = c + "-stagger",
              k = e + " " + j,
              l = !U[k];
            l && b.addClass(j), h = o(b, k), l && b.removeClass(j)
          }
          d = d || function(a) {
            return a()
          }, b.addClass(c);
          var m = b.data(P) || {},
            n = d(function() {
              return o(b, f)
            }),
            p = n.transitionDuration,
            r = n.animationDuration;
          if (0 === p && 0 === r) return b.removeClass(c), !1;
          b.data(P, {
            running: m.running || 0,
            itemIndex: g,
            stagger: h,
            timings: n,
            closeAnimationFn: i
          });
          var s = m.running > 0 || "setClass" == a;
          return p > 0 && t(b, c, s), r > 0 && h.animationDelay > 0 && 0 === h.animationDuration && u(b), !0
        }

        function s(a) {
          return "ng-enter" == a || "ng-move" == a || "ng-leave" == a
        }

        function t(a, b, c) {
          s(b) || !c ? f(a).style[E + L] = "none" : a.addClass(Q)
        }

        function u(a) {
          f(a).style[G] = "none 0s"
        }

        function v(a) {
          var b = E + L,
            c = f(a);
          c.style[b] && c.style[b].length > 0 && (c.style[b] = ""), a.removeClass(Q)
        }

        function w(a) {
          var b = G,
            c = f(a);
          c.style[b] && c.style[b].length > 0 && (c.style[b] = "")
        }

        function x(a, b, c, d) {
          function e() {
            b.off(t, g), b.removeClass(k), C(b, c);
            var a = f(b);
            for (var d in v) a.style.removeProperty(v[d])
          }

          function g(a) {
            a.stopPropagation();
            var b = a.originalEvent || a,
              c = b.$manualTimeStamp || b.timeStamp || Date.now(),
              e = parseFloat(b.elapsedTime.toFixed(R));
            Math.max(c - s, 0) >= r && e >= p && d()
          }
          var h = f(b),
            i = b.data(P);
          if (-1 == h.getAttribute("class").indexOf(c) || !i) return void d();
          var k = "";
          j(c.split(" "), function(a, b) {
            k += (b > 0 ? " " : "") + a + "-active"
          });
          var l = i.stagger,
            n = i.timings,
            o = i.itemIndex,
            p = Math.max(n.transitionDuration, n.animationDuration),
            q = Math.max(n.transitionDelay, n.animationDelay),
            r = q * T,
            s = Date.now(),
            t = H + " " + F,
            u = "",
            v = [];
          if (n.transitionDuration > 0) {
            var w = n.transitionPropertyStyle; - 1 == w.indexOf("all") && (u += I + "transition-property: " + w + ";", u += I + "transition-duration: " + n.transitionDurationStyle + ";", v.push(I + "transition-property"), v.push(I + "transition-duration"))
          }
          if (o > 0) {
            if (l.transitionDelay > 0 && 0 === l.transitionDuration) {
              var x = n.transitionDelayStyle;
              u += I + "transition-delay: " + y(x, l.transitionDelay, o) + "; ", v.push(I + "transition-delay")
            }
            l.animationDelay > 0 && 0 === l.animationDuration && (u += I + "animation-delay: " + y(n.animationDelayStyle, l.animationDelay, o) + "; ", v.push(I + "animation-delay"))
          }
          if (v.length > 0) {
            var z = h.getAttribute("style") || "";
            h.setAttribute("style", z + " " + u)
          }
          b.on(t, g), b.addClass(k), i.closeAnimationFn = function() {
            e(), d()
          };
          var A = o * (Math.max(l.animationDelay, l.transitionDelay) || 0),
            B = (q + p) * S,
            D = (A + B) * T;
          return i.running++, m(b, D), e
        }

        function y(a, b, c) {
          var d = "";
          return j(a.split(","), function(a, e) {
            d += (e > 0 ? "," : "") + (c * b + parseInt(a, 10)) + "s"
          }), d
        }

        function z(a, b, c, d) {
          return r(a, b, c, d) ? function(a) {
            a && C(b, c)
          } : void 0
        }

        function A(a, b, c, d) {
          return b.data(P) ? x(a, b, c, d) : (C(b, c), void d())
        }

        function B(a, b, c, d) {
          var e = z(a, b, c);
          if (!e) return void d();
          var f = e;
          return k(b, function() {
              v(b, c), w(b), f = A(a, b, c, d)
            }),
            function(a) {
              (f || i)(a)
            }
        }

        function C(a, b) {
          a.removeClass(b);
          var c = a.data(P);
          c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(P))
        }

        function D(a, c) {
          var d = "";
          return a = b.isArray(a) ? a : a.split(/\s+/), j(a, function(a, b) {
            a && a.length > 0 && (d += (b > 0 ? " " : "") + a + c)
          }), d
        }
        var E, F, G, H, I = "";
        a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
        var J, K = "Duration",
          L = "Property",
          M = "Delay",
          N = "IterationCount",
          O = "$$ngAnimateKey",
          P = "$$ngAnimateCSS3Data",
          Q = "ng-animate-block-transitions",
          R = 3,
          S = 1.5,
          T = 1e3,
          U = {},
          V = 0,
          W = [],
          X = null,
          Y = 0,
          Z = [];
        return {
          enter: function(a, b) {
            return B("enter", a, "ng-enter", b)
          },
          leave: function(a, b) {
            return B("leave", a, "ng-leave", b)
          },
          move: function(a, b) {
            return B("move", a, "ng-move", b)
          },
          beforeSetClass: function(a, b, c, d) {
            var e = D(c, "-remove") + " " + D(b, "-add"),
              f = z("setClass", a, e, function(d) {
                var e = a.attr("class");
                a.removeClass(c), a.addClass(b);
                var f = d();
                return a.attr("class", e), f
              });
            return f ? (k(a, function() {
              v(a, e), w(a), d()
            }), f) : void d()
          },
          beforeAddClass: function(a, b, c) {
            var d = z("addClass", a, D(b, "-add"), function(c) {
              a.addClass(b);
              var d = c();
              return a.removeClass(b), d
            });
            return d ? (k(a, function() {
              v(a, b), w(a), c()
            }), d) : void c()
          },
          setClass: function(a, b, c, d) {
            c = D(c, "-remove"), b = D(b, "-add");
            var e = c + " " + b;
            return A("setClass", a, e, d)
          },
          addClass: function(a, b, c) {
            return A("addClass", a, D(b, "-add"), c)
          },
          beforeRemoveClass: function(a, b, c) {
            var d = z("removeClass", a, D(b, "-remove"), function(c) {
              var d = a.attr("class");
              a.removeClass(b);
              var e = c();
              return a.attr("class", d), e
            });
            return d ? (k(a, function() {
              v(a, b), w(a), c()
            }), d) : void c()
          },
          removeClass: function(a, b, c) {
            return A("removeClass", a, D(b, "-remove"), c)
          }
        }
      }])
    }])
  }(window, window.angular),
  function(a, b) {
    "use strict";

    function c() {
      function a(a, c) {
        return b.extend(new(b.extend(function() {}, {
          prototype: a
        })), c)
      }

      function c(a, b) {
        var c = b.caseInsensitiveMatch,
          d = {
            originalPath: a,
            regexp: a
          },
          e = d.keys = [];
        return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
          var f = "?" === d ? d : null,
            g = "*" === d ? d : null;
          return e.push({
            name: c,
            optional: !!f
          }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
        }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
      }
      var d = {};
      this.when = function(a, e) {
        if (d[a] = b.extend({
            reloadOnSearch: !0
          }, e, a && c(a, e)), a) {
          var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
          d[f] = b.extend({
            redirectTo: a
          }, c(f, e))
        }
        return this
      }, this.otherwise = function(a) {
        return this.when(null, a), this
      }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(c, e, f, g, h, i, j, k) {
        function l(a, b) {
          var c = b.keys,
            d = {};
          if (!b.regexp) return null;
          var e = b.regexp.exec(a);
          if (!e) return null;
          for (var f = 1, g = e.length; g > f; ++f) {
            var h = c[f - 1],
              i = "string" == typeof e[f] ? decodeURIComponent(e[f]) : e[f];
            h && i && (d[h.name] = i)
          }
          return d
        }

        function m() {
          var a = n(),
            d = q.current;
          a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function() {
            if (a) {
              var c, d, e = b.extend({}, a.resolve);
              return b.forEach(e, function(a, c) {
                e[c] = b.isString(a) ? h.get(a) : h.invoke(a)
              }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
                cache: j
              }).then(function(a) {
                return a.data
              }))), b.isDefined(c) && (e.$template = c), g.all(e)
            }
          }).then(function(e) {
            a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d))
          }, function(b) {
            a == q.current && c.$broadcast("$routeChangeError", a, d, b)
          }))
        }

        function n() {
          var c, f;
          return b.forEach(d, function(d) {
            !f && (c = l(e.path(), d)) && (f = a(d, {
              params: b.extend({}, e.search(), c),
              pathParams: c
            }), f.$$route = d)
          }), f || d[null] && a(d[null], {
            params: {},
            pathParams: {}
          })
        }

        function o(a, c) {
          var d = [];
          return b.forEach((a || "").split(":"), function(a, b) {
            if (0 === b) d.push(a);
            else {
              var e = a.match(/(\w+)(.*)/),
                f = e[1];
              d.push(c[f]), d.push(e[2] || ""), delete c[f]
            }
          }), d.join("")
        }
        var p = !1,
          q = {
            routes: d,
            reload: function() {
              p = !0, c.$evalAsync(m)
            }
          };
        return c.$on("$locationChangeSuccess", m), q
      }]
    }

    function d() {
      this.$get = function() {
        return {}
      }
    }

    function e(a, c, d) {
      return {
        restrict: "ECA",
        terminal: !0,
        priority: 400,
        transclude: "element",
        link: function(e, f, g, h, i) {
          function j() {
            n && (n.remove(), n = null), l && (l.$destroy(), l = null), m && (d.leave(m, function() {
              n = null
            }), n = m, m = null)
          }

          function k() {
            var g = a.current && a.current.locals,
              h = g && g.$template;
            if (b.isDefined(h)) {
              var k = e.$new(),
                n = a.current,
                q = i(k, function(a) {
                  d.enter(a, null, m || f, function() {
                    !b.isDefined(o) || o && !e.$eval(o) || c()
                  }), j()
                });
              m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
            } else j()
          }
          var l, m, n, o = g.autoscroll,
            p = g.onload || "";
          e.$on("$routeChangeSuccess", k), k()
        }
      }
    }

    function f(a, b, c) {
      return {
        restrict: "ECA",
        priority: -400,
        link: function(d, e) {
          var f = c.current,
            g = f.locals;
          e.html(g.$template);
          var h = a(e.contents());
          if (f.controller) {
            g.$scope = d;
            var i = b(f.controller, g);
            f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
          }
          h(d)
        }
      }
    }
    var g = b.module("ngRoute", ["ng"]).provider("$route", c);
    g.provider("$routeParams", d), g.directive("ngView", e), g.directive("ngView", f), e.$inject = ["$route", "$anchorScroll", "$animate"], f.$inject = ["$compile", "$controller", "$route"]
  }(window, window.angular);

