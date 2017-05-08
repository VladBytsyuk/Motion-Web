'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = angular.module('motionApp', []);

app.controller('controller', ['$scope', '$window', function ($scope, $window) {
	textGetter().then(function (json) {
		return $scope.text = json;
	}, function (error) {
		return alert(error);
	});

	$scope.width = $window.innerWidth;
	$scope.boxHeight = angular.element(document.querySelector('portfolio_box_invisible')).offsetHeight;
	window.onresize = function () {
		$scope.$apply(function () {
			$scope.width = $window.innerWidth;
			$scope.boxHeight = angular.element(document.querySelector('portfolio_box_invisible')).offsetHeight;
			console.log(angular.element(document.querySelector('portfolio_box_invisible')));
		});
	};
	$scope.isPortfolioSlideActive = function (x) {
		return x == $scope.curSlide;
	};
	$scope.portfolioBoxStyle = {
		"margin-top": '-' + $scope.boxHeight + 'px'
	};
}]);

app.directive('header', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/header/header.html'
	};
});

app.directive('merits', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/merits/merits.html'
	};
});

app.directive('team', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/team/team.html'
	};
});

app.directive('portfolio', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/portfolio/porfolio.html'
	};
});

app.directive('pricing', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/pricing/pricing.html'
	};
});

app.directive('tweets', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/tweets/tweets.html'
	};
});

app.directive('footer', function () {
	return {
		restrict: 'E',
		templateUrl: 'app/components/footer/footer.html'
	};
});
function textGetter() {
	return new Promise(function (resolve, reject) {
		var textRequest = new XMLHttpRequest();
		textRequest.open('GET', 'assets/json/text.json', false);

		textRequest.onload = function () {
			if (this.status == 200) {
				resolve(JSON.parse(textRequest.responseText));
			} else {
				reject('ERROR: Request code of \"text.json\" isn\'t 200 (' + textRequest.status + ')');
			}
		};

		textRequest.onerror = function () {
			reject(new Error("Network Error"));
		};

		textRequest.send('GET');
	});
}

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (F) {
	'use strict';
	function O(a) {
		return function () {
			var b = arguments[0],
			    d;d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.6/" + (a ? a + "/" : "") + b;for (b = 1; b < arguments.length; b++) {
				d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";var c = encodeURIComponent,
				    e;e = arguments[b];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;d += c(e);
			}return Error(d);
		};
	}function xa(a) {
		if (null == a || Wa(a)) return !1;if (K(a) || I(a) || G && a instanceof G) return !0;
		var b = "length" in Object(a) && a.length;return Q(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item);
	}function q(a, b, d) {
		var c, e;if (a) if (E(a)) for (c in a) {
			"prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
		} else if (K(a) || xa(a)) {
			var f = "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof(a));c = 0;for (e = a.length; c < e; c++) {
				(f || c in a) && b.call(d, a[c], c, a);
			}
		} else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);else if (rc(a)) for (c in a) {
			b.call(d, a[c], c, a);
		} else if ("function" === typeof a.hasOwnProperty) for (c in a) {
			a.hasOwnProperty(c) && b.call(d, a[c], c, a);
		} else for (c in a) {
			sa.call(a, c) && b.call(d, a[c], c, a);
		}return a;
	}function sc(a, b, d) {
		for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) {
			b.call(d, a[c[e]], c[e]);
		}return c;
	}function tc(a) {
		return function (b, d) {
			a(d, b);
		};
	}function Yd() {
		return ++pb;
	}function Qb(a, b, d) {
		for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
			var g = b[e];if (J(g) || E(g)) for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
				var m = h[k],
				    n = g[m];d && J(n) ? ha(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Rb(n) ? a[m] = n.clone() : (J(a[m]) || (a[m] = K(n) ? [] : {}), Qb(a[m], [n], !0)) : a[m] = n;
			}
		}c ? a.$$hashKey = c : delete a.$$hashKey;return a;
	}function P(a) {
		return Qb(a, ya.call(arguments, 1), !1);
	}function Zd(a) {
		return Qb(a, ya.call(arguments, 1), !0);
	}function $(a) {
		return parseInt(a, 10);
	}function Sb(a, b) {
		return P(Object.create(a), b);
	}function C() {}function Ya(a) {
		return a;
	}function ca(a) {
		return function () {
			return a;
		};
	}function uc(a) {
		return E(a.toString) && a.toString !== ja;
	}function y(a) {
		return "undefined" === typeof a;
	}function v(a) {
		return "undefined" !== typeof a;
	}function J(a) {
		return null !== a && "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a));
	}function rc(a) {
		return null !== a && "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && !vc(a);
	}function I(a) {
		return "string" === typeof a;
	}function Q(a) {
		return "number" === typeof a;
	}function ha(a) {
		return "[object Date]" === ja.call(a);
	}function E(a) {
		return "function" === typeof a;
	}function Xa(a) {
		return "[object RegExp]" === ja.call(a);
	}function Wa(a) {
		return a && a.window === a;
	}function Za(a) {
		return a && a.$evalAsync && a.$watch;
	}function Ea(a) {
		return "boolean" === typeof a;
	}function $d(a) {
		return a && Q(a.length) && ae.test(ja.call(a));
	}function Rb(a) {
		return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
	}function be(a) {
		var b = {};a = a.split(",");var d;for (d = 0; d < a.length; d++) {
			b[a[d]] = !0;
		}return b;
	}function ta(a) {
		return L(a.nodeName || a[0] && a[0].nodeName);
	}function $a(a, b) {
		var d = a.indexOf(b);0 <= d && a.splice(d, 1);return d;
	}function oa(a, b) {
		function d(a, b) {
			var d = b.$$hashKey,
			    e;if (K(a)) {
				e = 0;for (var f = a.length; e < f; e++) {
					b.push(c(a[e]));
				}
			} else if (rc(a)) for (e in a) {
				b[e] = c(a[e]);
			} else if (a && "function" === typeof a.hasOwnProperty) for (e in a) {
				a.hasOwnProperty(e) && (b[e] = c(a[e]));
			} else for (e in a) {
				sa.call(a, e) && (b[e] = c(a[e]));
			}d ? b.$$hashKey = d : delete b.$$hashKey;return b;
		}function c(a) {
			if (!J(a)) return a;var b = f.indexOf(a);if (-1 !== b) return g[b];if (Wa(a) || Za(a)) throw za("cpws");var b = !1,
			    c = e(a);void 0 === c && (c = K(a) ? [] : Object.create(vc(a)), b = !0);f.push(a);g.push(c);return b ? d(a, c) : c;
		}function e(a) {
			switch (ja.call(a)) {case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
					return new a.constructor(c(a.buffer));
				case "[object ArrayBuffer]":
					if (!a.slice) {
						var b = new ArrayBuffer(a.byteLength);new Uint8Array(b).set(new Uint8Array(a));return b;
					}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":
					return new a.constructor(a.valueOf());case "[object RegExp]":
					return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;case "[object Blob]":
					return new a.constructor([a], { type: a.type });}if (E(a.cloneNode)) return a.cloneNode(!0);
		}var f = [],
		    g = [];if (b) {
			if ($d(b) || "[object ArrayBuffer]" === ja.call(b)) throw za("cpta");if (a === b) throw za("cpi");K(b) ? b.length = 0 : q(b, function (a, d) {
				"$$hashKey" !== d && delete b[d];
			});f.push(a);g.push(b);return d(a, b);
		}return c(a);
	}function fa(a, b) {
		if (K(a)) {
			b = b || [];for (var d = 0, c = a.length; d < c; d++) {
				b[d] = a[d];
			}
		} else if (J(a)) for (d in b = b || {}, a) {
			if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
		}return b || a;
	}function na(a, b) {
		if (a === b) return !0;if (null === a || null === b) return !1;if (a !== a && b !== b) return !0;var d = typeof a === 'undefined' ? 'undefined' : _typeof(a),
		    c;if (d == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && "object" == d) if (K(a)) {
			if (!K(b)) return !1;if ((d = a.length) == b.length) {
				for (c = 0; c < d; c++) {
					if (!na(a[c], b[c])) return !1;
				}return !0;
			}
		} else {
			if (ha(a)) return ha(b) ? na(a.getTime(), b.getTime()) : !1;if (Xa(a)) return Xa(b) ? a.toString() == b.toString() : !1;if (Za(a) || Za(b) || Wa(a) || Wa(b) || K(b) || ha(b) || Xa(b)) return !1;d = S();for (c in a) {
				if ("$" !== c.charAt(0) && !E(a[c])) {
					if (!na(a[c], b[c])) return !1;d[c] = !0;
				}
			}for (c in b) {
				if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !E(b[c])) return !1;
			}return !0;
		}return !1;
	}function ab(a, b, d) {
		return a.concat(ya.call(b, d));
	}function bb(a, b) {
		var d = 2 < arguments.length ? ya.call(arguments, 2) : [];return !E(b) || b instanceof RegExp ? b : d.length ? function () {
			return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d);
		} : function () {
			return arguments.length ? b.apply(a, arguments) : b.call(a);
		};
	}function ce(a, b) {
		var d = b;"string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && F.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");return d;
	}function cb(a, b) {
		if (!y(a)) return Q(b) || (b = b ? 2 : null), JSON.stringify(a, ce, b);
	}function wc(a) {
		return I(a) ? JSON.parse(a) : a;
	}function xc(a, b) {
		a = a.replace(de, "");var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;return isNaN(d) ? b : d;
	}function Tb(a, b, d) {
		d = d ? -1 : 1;var c = a.getTimezoneOffset();b = xc(b, c);d *= b - c;a = new Date(a.getTime());a.setMinutes(a.getMinutes() + d);return a;
	}function ua(a) {
		a = G(a).clone();try {
			a.empty();
		} catch (b) {}var d = G("<div>").append(a).html();try {
			return a[0].nodeType === Na ? L(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
				return "<" + L(b);
			});
		} catch (c) {
			return L(d);
		}
	}
	function yc(a) {
		try {
			return decodeURIComponent(a);
		} catch (b) {}
	}function zc(a) {
		var b = {};q((a || "").split("&"), function (a) {
			var c, e, f;a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = yc(e), v(e) && (f = v(f) ? yc(f) : !0, sa.call(b, e) ? K(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f));
		});return b;
	}function Ub(a) {
		var b = [];q(a, function (a, c) {
			K(a) ? q(a, function (a) {
				b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)));
			}) : b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)));
		});return b.length ? b.join("&") : "";
	}
	function qb(a) {
		return ia(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
	}function ia(a, b) {
		return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+");
	}function ee(a, b) {
		var d,
		    c,
		    e = Oa.length;for (c = 0; c < e; ++c) {
			if (d = Oa[c] + b, I(d = a.getAttribute(d))) return d;
		}return null;
	}function fe(a, b) {
		var d,
		    c,
		    e = {};q(Oa, function (b) {
			b += "app";!d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b));
		});
		q(Oa, function (b) {
			b += "app";var e;!d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b));
		});d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e));
	}function Ac(a, b, d) {
		J(d) || (d = {});d = P({ strictDi: !1 }, d);var c = function c() {
			a = G(a);if (a.injector()) {
				var c = a[0] === F.document ? "document" : ua(a);throw za("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
			}b = b || [];b.unshift(["$provide", function (b) {
				b.value("$rootElement", a);
			}]);d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
				a.debugInfoEnabled(!0);
			}]);
			b.unshift("ng");c = db(b, d.strictDi);c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
				a.$apply(function () {
					b.data("$injector", d);c(b)(a);
				});
			}]);return c;
		},
		    e = /^NG_ENABLE_DEBUG_INFO!/,
		    f = /^NG_DEFER_BOOTSTRAP!/;F && e.test(F.name) && (d.debugInfoEnabled = !0, F.name = F.name.replace(e, ""));if (F && !f.test(F.name)) return c();F.name = F.name.replace(f, "");da.resumeBootstrap = function (a) {
			q(a, function (a) {
				b.push(a);
			});return c();
		};E(da.resumeDeferredBootstrap) && da.resumeDeferredBootstrap();
	}function ge() {
		F.name = "NG_ENABLE_DEBUG_INFO!" + F.name;F.location.reload();
	}function he(a) {
		a = da.element(a).injector();if (!a) throw za("test");return a.get("$$testability");
	}function Bc(a, b) {
		b = b || "_";return a.replace(ie, function (a, c) {
			return (c ? b : "") + a.toLowerCase();
		});
	}function je() {
		var a;if (!Cc) {
			var b = rb();(Y = y(b) ? F.jQuery : b ? F[b] : void 0) && Y.fn.on ? (G = Y, P(Y.fn, { scope: Pa.scope, isolateScope: Pa.isolateScope, controller: Pa.controller, injector: Pa.injector, inheritedData: Pa.inheritedData }), a = Y.cleanData, Y.cleanData = function (b) {
				for (var c, e = 0, f; null != (f = b[e]); e++) {
					(c = Y._data(f, "events")) && c.$destroy && Y(f).triggerHandler("$destroy");
				}a(b);
			}) : G = T;da.element = G;Cc = !0;
		}
	}function sb(a, b, d) {
		if (!a) throw za("areq", b || "?", d || "required");return a;
	}function Qa(a, b, d) {
		d && K(a) && (a = a[a.length - 1]);sb(E(a), b, "not a function, got " + (a && "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? a.constructor.name || "Object" : typeof a === 'undefined' ? 'undefined' : _typeof(a)));return a;
	}function Ra(a, b) {
		if ("hasOwnProperty" === a) throw za("badname", b);
	}function Dc(a, b, d) {
		if (!b) return a;b = b.split(".");for (var c, e = a, f = b.length, g = 0; g < f; g++) {
			c = b[g], a && (a = (e = a)[c]);
		}return !d && E(a) ? bb(e, a) : a;
	}function tb(a) {
		for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++) {
			if (c || a[e] !== b) c || (c = G(ya.call(a, 0, e))), c.push(b);
		}return c || a;
	}function S() {
		return Object.create(null);
	}function ke(a) {
		function b(a, b, c) {
			return a[b] || (a[b] = c());
		}var d = O("$injector"),
		    c = O("ng");a = b(a, "angular", Object);a.$$minErr = a.$$minErr || O;return b(a, "module", function () {
			var a = {};return function (f, g, h) {
				if ("hasOwnProperty" === f) throw c("badname", "module");g && a.hasOwnProperty(f) && (a[f] = null);return b(a, f, function () {
					function a(b, d, e, f) {
						f || (f = c);return function () {
							f[e || "push"]([b, d, arguments]);return U;
						};
					}function b(a, d) {
						return function (b, e) {
							e && E(e) && (e.$$moduleName = f);c.push([a, d, arguments]);return U;
						};
					}if (!g) throw d("nomod", f);var c = [],
					    e = [],
					    p = [],
					    x = a("$injector", "invoke", "push", e),
					    U = { _invokeQueue: c, _configBlocks: e, _runBlocks: p, requires: g, name: f, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), decorator: b("$provide", "decorator"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), component: b("$compileProvider", "component"), config: x, run: function run(a) {
							p.push(a);return this;
						} };h && x(h);return U;
				});
			};
		});
	}function le(a) {
		P(a, { bootstrap: Ac, copy: oa, extend: P, merge: Zd, equals: na, element: G, forEach: q, injector: db, noop: C, bind: bb, toJson: cb, fromJson: wc, identity: Ya, isUndefined: y,
			isDefined: v, isString: I, isFunction: E, isObject: J, isNumber: Q, isElement: Rb, isArray: K, version: me, isDate: ha, lowercase: L, uppercase: ub, callbacks: { counter: 0 }, getTestability: he, $$minErr: O, $$csp: Fa, reloadWithDebugInfo: ge });Vb = ke(F);Vb("ng", ["ngLocale"], ["$provide", function (a) {
			a.provider({ $$sanitizeUri: ne });a.provider("$compile", Ec).directive({ a: oe, input: Fc, textarea: Fc, form: pe, script: qe, select: re, style: se, option: te, ngBind: ue, ngBindHtml: ve, ngBindTemplate: we, ngClass: xe, ngClassEven: ye, ngClassOdd: ze, ngCloak: Ae, ngController: Be,
				ngForm: Ce, ngHide: De, ngIf: Ee, ngInclude: Fe, ngInit: Ge, ngNonBindable: He, ngPluralize: Ie, ngRepeat: Je, ngShow: Ke, ngStyle: Le, ngSwitch: Me, ngSwitchWhen: Ne, ngSwitchDefault: Oe, ngOptions: Pe, ngTransclude: Qe, ngModel: Re, ngList: Se, ngChange: Te, pattern: Gc, ngPattern: Gc, required: Hc, ngRequired: Hc, minlength: Ic, ngMinlength: Ic, maxlength: Jc, ngMaxlength: Jc, ngValue: Ue, ngModelOptions: Ve }).directive({ ngInclude: We }).directive(vb).directive(Kc);a.provider({ $anchorScroll: Xe, $animate: Ye, $animateCss: Ze, $$animateJs: $e, $$animateQueue: af,
				$$AnimateRunner: bf, $$animateAsyncRun: cf, $browser: df, $cacheFactory: ef, $controller: ff, $document: gf, $exceptionHandler: hf, $filter: Lc, $$forceReflow: jf, $interpolate: kf, $interval: lf, $http: mf, $httpParamSerializer: nf, $httpParamSerializerJQLike: of, $httpBackend: pf, $xhrFactory: qf, $location: rf, $log: sf, $parse: tf, $rootScope: uf, $q: vf, $$q: wf, $sce: xf, $sceDelegate: yf, $sniffer: zf, $templateCache: Af, $templateRequest: Bf, $$testability: Cf, $timeout: Df, $window: Ef, $$rAF: Ff, $$jqLite: Gf, $$HashMap: Hf, $$cookieReader: If });
		}]);
	}function eb(a) {
		return a.replace(Jf, function (a, d, c, e) {
			return e ? c.toUpperCase() : c;
		}).replace(Kf, "Moz$1");
	}function Mc(a) {
		a = a.nodeType;return 1 === a || !a || 9 === a;
	}function Nc(a, b) {
		var d,
		    c,
		    e = b.createDocumentFragment(),
		    f = [];if (Wb.test(a)) {
			d = d || e.appendChild(b.createElement("div"));c = (Lf.exec(a) || ["", ""])[1].toLowerCase();c = ga[c] || ga._default;d.innerHTML = c[1] + a.replace(Mf, "<$1></$2>") + c[2];for (c = c[0]; c--;) {
				d = d.lastChild;
			}f = ab(f, d.childNodes);d = e.firstChild;d.textContent = "";
		} else f.push(b.createTextNode(a));e.textContent = "";e.innerHTML = "";q(f, function (a) {
			e.appendChild(a);
		});
		return e;
	}function Oc(a, b) {
		var d = a.parentNode;d && d.replaceChild(b, a);b.appendChild(a);
	}function T(a) {
		if (a instanceof T) return a;var b;I(a) && (a = V(a), b = !0);if (!(this instanceof T)) {
			if (b && "<" != a.charAt(0)) throw Xb("nosel");return new T(a);
		}if (b) {
			b = F.document;var d;a = (d = Nf.exec(a)) ? [b.createElement(d[1])] : (d = Nc(a, b)) ? d.childNodes : [];
		}Pc(this, a);
	}function Yb(a) {
		return a.cloneNode(!0);
	}function wb(a, b) {
		b || fb(a);if (a.querySelectorAll) for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) {
			fb(d[c]);
		}
	}function Qc(a, b, d, c) {
		if (v(c)) throw Xb("offargs");var e = (c = xb(a)) && c.events,
		    f = c && c.handle;if (f) if (b) {
			var g = function g(b) {
				var c = e[b];v(d) && $a(c || [], d);v(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b]);
			};q(b.split(" "), function (a) {
				g(a);yb[a] && g(yb[a]);
			});
		} else for (b in e) {
			"$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b];
		}
	}function fb(a, b) {
		var d = a.ng339,
		    c = d && gb[d];c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Qc(a)), delete gb[d], a.ng339 = void 0));
	}function xb(a, b) {
		var d = a.ng339,
		    d = d && gb[d];b && !d && (a.ng339 = d = ++Of, d = gb[d] = { events: {}, data: {}, handle: void 0 });return d;
	}function Zb(a, b, d) {
		if (Mc(a)) {
			var c = v(d),
			    e = !c && b && !J(b),
			    f = !b;a = (a = xb(a, !e)) && a.data;if (c) a[b] = d;else {
				if (f) return a;if (e) return a && a[b];P(a, b);
			}
		}
	}function zb(a, b) {
		return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
	}function Ab(a, b) {
		b && a.setAttribute && q(b.split(" "), function (b) {
			a.setAttribute("class", V((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + V(b) + " ", " ")));
		});
	}function Bb(a, b) {
		if (b && a.setAttribute) {
			var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");q(b.split(" "), function (a) {
				a = V(a);-1 === d.indexOf(" " + a + " ") && (d += a + " ");
			});a.setAttribute("class", V(d));
		}
	}function Pc(a, b) {
		if (b) if (b.nodeType) a[a.length++] = b;else {
			var d = b.length;if ("number" === typeof d && b.window !== b) {
				if (d) for (var c = 0; c < d; c++) {
					a[a.length++] = b[c];
				}
			} else a[a.length++] = b;
		}
	}function Rc(a, b) {
		return Cb(a, "$" + (b || "ngController") + "Controller");
	}function Cb(a, b, d) {
		9 == a.nodeType && (a = a.documentElement);for (b = K(b) ? b : [b]; a;) {
			for (var c = 0, e = b.length; c < e; c++) {
				if (v(d = G.data(a, b[c]))) return d;
			}a = a.parentNode || 11 === a.nodeType && a.host;
		}
	}function Sc(a) {
		for (wb(a, !0); a.firstChild;) {
			a.removeChild(a.firstChild);
		}
	}function Db(a, b) {
		b || wb(a);var d = a.parentNode;d && d.removeChild(a);
	}function Pf(a, b) {
		b = b || F;if ("complete" === b.document.readyState) b.setTimeout(a);else G(b).on("load", a);
	}function Tc(a, b) {
		var d = Eb[b.toLowerCase()];return d && Uc[ta(a)] && d;
	}function Qf(a, b) {
		var d = function d(c, _d) {
			c.isDefaultPrevented = function () {
				return c.defaultPrevented;
			};var f = b[_d || c.type],
			    g = f ? f.length : 0;if (g) {
				if (y(c.immediatePropagationStopped)) {
					var h = c.stopImmediatePropagation;c.stopImmediatePropagation = function () {
						c.immediatePropagationStopped = !0;c.stopPropagation && c.stopPropagation();h && h.call(c);
					};
				}c.isImmediatePropagationStopped = function () {
					return !0 === c.immediatePropagationStopped;
				};var k = f.specialHandlerWrapper || Rf;1 < g && (f = fa(f));for (var l = 0; l < g; l++) {
					c.isImmediatePropagationStopped() || k(a, c, f[l]);
				}
			}
		};d.elem = a;return d;
	}function Rf(a, b, d) {
		d.call(a, b);
	}function Sf(a, b, d) {
		var c = b.relatedTarget;c && (c === a || Tf.call(a, c)) || d.call(a, b);
	}function Gf() {
		this.$get = function () {
			return P(T, { hasClass: function hasClass(a, b) {
					a.attr && (a = a[0]);return zb(a, b);
				}, addClass: function addClass(a, b) {
					a.attr && (a = a[0]);return Bb(a, b);
				}, removeClass: function removeClass(a, b) {
					a.attr && (a = a[0]);return Ab(a, b);
				} });
		};
	}function Ga(a, b) {
		var d = a && a.$$hashKey;if (d) return "function" === typeof d && (d = a.$$hashKey()), d;d = typeof a === 'undefined' ? 'undefined' : _typeof(a);return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Yd)() : d + ":" + a;
	}function Sa(a, b) {
		if (b) {
			var d = 0;this.nextUid = function () {
				return ++d;
			};
		}q(a, this.put, this);
	}function Vc(a) {
		a = (Function.prototype.toString.call(a) + " ").replace(Uf, "");return a.match(Vf) || a.match(Wf);
	}function Xf(a) {
		return (a = Vc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
	}function db(a, b) {
		function d(a) {
			return function (b, c) {
				if (J(b)) q(b, tc(a));else return a(b, c);
			};
		}function c(a, b) {
			Ra(a, "service");if (E(b) || K(b)) b = p.instantiate(b);if (!b.$get) throw Ha("pget", a);return n[a + "Provider"] = b;
		}function e(a, b) {
			return function () {
				var c = z.invoke(b, this);if (y(c)) throw Ha("undef", a);return c;
			};
		}function f(a, b, d) {
			return c(a, { $get: !1 !== d ? e(a, b) : b });
		}function g(a) {
			sb(y(a) || K(a), "modulesToLoad", "not an array");var b = [],
			    c;q(a, function (a) {
				function d(a) {
					var b, c;b = 0;for (c = a.length; b < c; b++) {
						var e = a[b],
						    f = p.get(e[0]);f[e[1]].apply(f, e[2]);
					}
				}if (!m.get(a)) {
					m.put(a, !0);try {
						I(a) ? (c = Vb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : E(a) ? b.push(p.invoke(a)) : K(a) ? b.push(p.invoke(a)) : Qa(a, "module");
					} catch (e) {
						throw K(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e);
					}
				}
			});return b;
		}function h(a, c) {
			function d(b, e) {
				if (a.hasOwnProperty(b)) {
					if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));return a[b];
				}try {
					return l.unshift(b), a[b] = k, a[b] = c(b, e);
				} catch (f) {
					throw a[b] === k && delete a[b], f;
				} finally {
					l.shift();
				}
			}function e(a, c, f) {
				var g = [];a = db.$$annotate(a, b, f);for (var h = 0, k = a.length; h < k; h++) {
					var l = a[h];
					if ("string" !== typeof l) throw Ha("itkn", l);g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f));
				}return g;
			}return { invoke: function invoke(a, b, c, d) {
					"string" === typeof c && (d = c, c = null);c = e(a, c, d);K(a) && (a = a[a.length - 1]);d = 11 >= Ba ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a) + " ");return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))()) : a.apply(b, c);
				}, instantiate: function instantiate(a, b, c) {
					var d = K(a) ? a[a.length - 1] : a;a = e(a, b, c);a.unshift(null);return new (Function.prototype.bind.apply(d, a))();
				}, get: d, annotate: db.$$annotate, has: function has(b) {
					return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b);
				} };
		}b = !0 === b;var k = {},
		    l = [],
		    m = new Sa([], !0),
		    n = { $provide: { provider: d(c), factory: d(f), service: d(function (a, b) {
					return f(a, ["$injector", function (a) {
						return a.instantiate(b);
					}]);
				}), value: d(function (a, b) {
					return f(a, ca(b), !1);
				}), constant: d(function (a, b) {
					Ra(a, "constant");n[a] = b;x[a] = b;
				}), decorator: function decorator(a, b) {
					var c = p.get(a + "Provider"),
					    d = c.$get;c.$get = function () {
						var a = z.invoke(d, c);return z.invoke(b, null, { $delegate: a });
					};
				} } },
		    p = n.$injector = h(n, function (a, b) {
			da.isString(b) && l.push(b);throw Ha("unpr", l.join(" <- "));
		}),
		    x = {},
		    U = h(x, function (a, b) {
			var c = p.get(a + "Provider", b);return z.invoke(c.$get, c, void 0, a);
		}),
		    z = U;n.$injectorProvider = { $get: ca(U) };var r = g(a),
		    z = U.get("$injector");z.strictDi = b;q(r, function (a) {
			a && z.invoke(a);
		});return z;
	}function Xe() {
		var a = !0;this.disableAutoScrolling = function () {
			a = !1;
		};this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
			function e(a) {
				var b = null;Array.prototype.some.call(a, function (a) {
					if ("a" === ta(a)) return b = a, !0;
				});return b;
			}function f(a) {
				if (a) {
					a.scrollIntoView();var c;c = g.yOffset;E(c) ? c = c() : Rb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c));
				} else b.scrollTo(0, 0);
			}function g(a) {
				a = I(a) ? a : d.hash();var b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
			}var h = b.document;a && c.$watch(function () {
				return d.hash();
			}, function (a, b) {
				a === b && "" === a || Pf(function () {
					c.$evalAsync(g);
				});
			});return g;
		}];
	}function hb(a, b) {
		if (!a && !b) return "";if (!a) return b;if (!b) return a;K(a) && (a = a.join(" "));K(b) && (b = b.join(" "));return a + " " + b;
	}function Yf(a) {
		I(a) && (a = a.split(" "));var b = S();q(a, function (a) {
			a.length && (b[a] = !0);
		});return b;
	}function Ia(a) {
		return J(a) ? a : {};
	}function Zf(a, b, d, c) {
		function e(a) {
			try {
				a.apply(null, ya.call(arguments, 1));
			} finally {
				if (U--, 0 === U) for (; z.length;) {
					try {
						z.pop()();
					} catch (b) {
						d.error(b);
					}
				}
			}
		}function f() {
			w = null;g();h();
		}function g() {
			r = ka();
			r = y(r) ? null : r;na(r, H) && (r = H);H = r;
		}function h() {
			if (u !== k.url() || D !== r) u = k.url(), D = r, q(B, function (a) {
				a(k.url(), r);
			});
		}var k = this,
		    l = a.location,
		    m = a.history,
		    n = a.setTimeout,
		    p = a.clearTimeout,
		    x = {};k.isMock = !1;var U = 0,
		    z = [];k.$$completeOutstandingRequest = e;k.$$incOutstandingRequestCount = function () {
			U++;
		};k.notifyWhenNoOutstandingRequests = function (a) {
			0 === U ? a() : z.push(a);
		};var r,
		    D,
		    u = l.href,
		    t = b.find("base"),
		    w = null,
		    ka = c.history ? function () {
			try {
				return m.state;
			} catch (a) {}
		} : C;g();D = r;k.url = function (b, d, e) {
			y(e) && (e = null);
			l !== a.location && (l = a.location);m !== a.history && (m = a.history);if (b) {
				var f = D === e;if (u === b && (!c.history || f)) return k;var h = u && Ja(u) === Ja(b);u = b;D = e;!c.history || h && f ? (h || (w = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (w = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), D = r);w && (w = b);return k;
			}return w || l.href.replace(/%27/g, "'");
		};k.state = function () {
			return r;
		};var B = [],
		    A = !1,
		    H = null;k.onUrlChange = function (b) {
			if (!A) {
				if (c.history) G(a).on("popstate", f);G(a).on("hashchange", f);A = !0;
			}B.push(b);return b;
		};k.$$applicationDestroyed = function () {
			G(a).off("hashchange popstate", f);
		};k.$$checkUrlChange = h;k.baseHref = function () {
			var a = t.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
		};k.defer = function (a, b) {
			var c;U++;c = n(function () {
				delete x[c];e(a);
			}, b || 0);x[c] = !0;return c;
		};k.defer.cancel = function (a) {
			return x[a] ? (delete x[a], p(a), e(C), !0) : !1;
		};
	}function df() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
			return new Zf(a, c, b, d);
		}];
	}function ef() {
		this.$get = function () {
			function a(a, c) {
				function e(a) {
					a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
				}function f(a, b) {
					a != b && (a && (a.p = b), b && (b.n = a));
				}if (a in b) throw O("$cacheFactory")("iid", a);var g = 0,
				    h = P({}, c, { id: a }),
				    k = S(),
				    l = c && c.capacity || Number.MAX_VALUE,
				    m = S(),
				    n = null,
				    p = null;return b[a] = { put: function put(a, b) {
						if (!y(b)) {
							if (l < Number.MAX_VALUE) {
								var c = m[a] || (m[a] = { key: a });e(c);
							}a in k || g++;k[a] = b;g > l && this.remove(p.key);return b;
						}
					}, get: function get(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;e(b);
						}return k[a];
					},
					remove: function remove(a) {
						if (l < Number.MAX_VALUE) {
							var b = m[a];if (!b) return;b == n && (n = b.p);b == p && (p = b.n);f(b.n, b.p);delete m[a];
						}a in k && (delete k[a], g--);
					}, removeAll: function removeAll() {
						k = S();g = 0;m = S();n = p = null;
					}, destroy: function destroy() {
						m = h = k = null;delete b[a];
					}, info: function info() {
						return P({}, h, { size: g });
					} };
			}var b = {};a.info = function () {
				var a = {};q(b, function (b, e) {
					a[e] = b.info();
				});return a;
			};a.get = function (a) {
				return b[a];
			};return a;
		};
	}function Af() {
		this.$get = ["$cacheFactory", function (a) {
			return a("templates");
		}];
	}function Ec(a, b) {
		function d(a, b, c) {
			var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
			    e = S();q(a, function (a, f) {
				if (a in n) e[f] = n[a];else {
					var g = a.match(d);if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");e[f] = { mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f };g[4] && (n[a] = e[f]);
				}
			});return e;
		}function c(a) {
			var b = a.charAt(0);if (!b || b !== L(b)) throw ea("baddir", a);if (a !== a.trim()) throw ea("baddir", a);
		}function e(a) {
			var b = a.require || a.controller && a.name;!K(b) && J(b) && q(b, function (a, c) {
				var d = a.match(l);a.substring(d[0].length) || (b[c] = d[0] + c);
			});return b;
		}var f = {},
		    g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
		    h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
		    k = be("ngSrc,ngSrcset,src,srcset"),
		    l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
		    m = /^(on[a-z]+|formaction)$/,
		    n = S();this.directive = function z(b, d) {
			Ra(b, "directive");I(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
				var d = [];q(f[b], function (f, g) {
					try {
						var h = a.invoke(f);E(h) ? h = { compile: ca(h) } : !h.compile && h.link && (h.compile = ca(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || b;h.require = e(h);h.restrict = h.restrict || "EA";h.$$moduleName = f.$$moduleName;d.push(h);
					} catch (k) {
						c(k);
					}
				});return d;
			}])), f[b].push(d)) : q(b, tc(z));return this;
		};this.component = function (a, b) {
			function c(a) {
				function e(b) {
					return E(b) || K(b) ? function (c, d) {
						return a.invoke(b, this, { $element: c, $attrs: d });
					} : b;
				}var f = b.template || b.templateUrl ? b.template : "",
				    g = { controller: d, controllerAs: Wc(b.controller) || b.controllerAs || "$ctrl",
					template: e(f), templateUrl: e(b.templateUrl), transclude: b.transclude, scope: {}, bindToController: b.bindings || {}, restrict: "E", require: b.require };q(b, function (a, b) {
					"$" === b.charAt(0) && (g[b] = a);
				});return g;
			}var d = b.controller || function () {};q(b, function (a, b) {
				"$" === b.charAt(0) && (c[b] = a, E(d) && (d[b] = a));
			});c.$inject = ["$injector"];return this.directive(a, c);
		};this.aHrefSanitizationWhitelist = function (a) {
			return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist();
		};this.imgSrcSanitizationWhitelist = function (a) {
			return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist();
		};var p = !0;this.debugInfoEnabled = function (a) {
			return v(a) ? (p = a, this) : p;
		};var x = 10;this.onChangesTtl = function (a) {
			return arguments.length ? (x = a, this) : x;
		};this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, w, ka, B, A, H) {
			function M() {
				try {
					if (! --oa) throw Y = void 0, ea("infchng", x);ka.$apply(function () {
						for (var a = 0, b = Y.length; a < b; ++a) {
							Y[a]();
						}Y = void 0;
					});
				} finally {
					oa++;
				}
			}function Aa(a, b) {
				if (b) {
					var c = Object.keys(b),
					    d,
					    e,
					    f;d = 0;for (e = c.length; d < e; d++) {
						f = c[d], this[f] = b[f];
					}
				} else this.$attr = {};this.$$element = a;
			}function R(a, b, c) {
				la.innerHTML = "<span " + b + ">";b = la.firstChild.attributes;var d = b[0];b.removeNamedItem(d.name);d.value = c;a.attributes.setNamedItem(d);
			}function N(a, b) {
				try {
					a.addClass(b);
				} catch (c) {}
			}function aa(a, b, c, d, e) {
				a instanceof G || (a = G(a));for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
					var k = a[g];k.nodeType === Na && k.nodeValue.match(f) && Oc(k, a[g] = F.document.createElement("span"));
				}var l = s(a, b, a, c, d, e);aa.$$addScopeClass(a);var m = null;return function (b, c, d) {
					sb(b, "scope");e && e.needsNewScope && (b = b.$parent.$new());d = d || {};var f = d.parentBoundTranscludeFn,
					    g = d.transcludeControllers;d = d.futureParentElement;f && f.$$boundTransclude && (f = f.$$boundTransclude);m || (m = (d = d && d[0]) ? "foreignobject" !== ta(d) && ja.call(d).match(/SVG/) ? "svg" : "html" : "html");d = "html" !== m ? G(ba(m, G("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;if (g) for (var h in g) {
						d.data("$" + h + "Controller", g[h].instance);
					}aa.$$addScopeInfo(d, b);c && c(d, b);l && l(b, d, d, f);return d;
				};
			}function s(a, b, c, d, e, f) {
				function g(a, c, d, e) {
					var f, k, l, m, n, u, r;if (p) for (r = Array(c.length), m = 0; m < h.length; m += 3) {
						f = h[m], r[f] = c[f];
					} else r = c;m = 0;for (n = h.length; m < n;) {
						k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(G(k), l)) : l = a, u = c.transcludeOnThisElement ? va(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? va(a, b) : null, c(f, l, k, d, u)) : f && f(a, k.childNodes, void 0, e);
					}
				}for (var h = [], k, l, m, n, p, u = 0; u < a.length; u++) {
					k = new Aa();l = $b(a[u], [], k, 0 === u ? d : void 0, e);(f = l.length ? Ta(l, a[u], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);k = f && f.terminal || !(m = a[u].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || k) h.push(u, f, k), n = !0, p = p || f;f = null;
				}return n ? g : null;
			}function va(a, b, c) {
				function d(e, f, g, h, k) {
					e || (e = a.$new(!1, k), e.$$transcluded = !0);return b(e, f, { parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h });
				}
				var e = d.$$slots = S(),
				    f;for (f in b.$$slots) {
					e[f] = b.$$slots[f] ? va(a, b.$$slots[f], c) : null;
				}return d;
			}function $b(a, b, c, d, e) {
				var f = c.$attr,
				    k;switch (a.nodeType) {case 1:
						Da(b, wa(ta(a)), "E", d, e);for (var l, m, n, p = a.attributes, u = 0, r = p && p.length; u < r; u++) {
							var B = !1,
							    x = !1;l = p[u];k = l.name;m = V(l.value);l = wa(k);if (n = xa.test(l)) k = k.replace(Xc, "").substr(8).replace(/_(.)/g, function (a, b) {
								return b.toUpperCase();
							});(l = l.match(za)) && Q(l[1]) && (B = k, x = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));l = wa(k.toLowerCase());f[l] = k;if (n || !c.hasOwnProperty(l)) c[l] = m, Tc(a, l) && (c[l] = !0);ha(a, b, m, l, n);Da(b, l, "A", d, e, B, x);
						}a = a.className;J(a) && (a = a.animVal);if (I(a) && "" !== a) for (; k = h.exec(a);) {
							l = wa(k[2]), Da(b, l, "C", d, e) && (c[l] = V(k[3])), a = a.substr(k.index + k[0].length);
						}break;case Na:
						if (11 === Ba) for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na;) {
							a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
						}$(b, a.nodeValue);break;case 8:
						try {
							if (k = g.exec(a.nodeValue)) l = wa(k[1]), Da(b, l, "M", d, e) && (c[l] = V(k[2]));
						} catch (A) {}}b.sort(X);
				return b;
			}function Yc(a, b, c) {
				var d = [],
				    e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
					do {
						if (!a) throw ea("uterdir", b, c);1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
					} while (0 < e);
				} else d.push(a);return G(d);
			}function O(a, b, c) {
				return function (d, e, f, g, h) {
					e = Yc(e[0], b, c);return a(d, e, f, g, h);
				};
			}function ac(a, b, c, d, e, f) {
				var g;return a ? aa(b, c, d, e, f) : function () {
					g || (g = aa(b, c, d, e, f), b = c = f = null);return g.apply(this, arguments);
				};
			}function Ta(a, b, d, e, f, g, h, k, l) {
				function m(a, b, c, d) {
					if (a) {
						c && (a = O(a, c, d));a.require = t.require;a.directiveName = M;if (B === t || t.$$isolateScope) a = fa(a, { isolateScope: !0 });h.push(a);
					}if (b) {
						c && (b = O(b, c, d));b.require = t.require;b.directiveName = M;if (B === t || t.$$isolateScope) b = fa(b, { isolateScope: !0 });k.push(b);
					}
				}function n(a, c, e, f, g) {
					function l(a, b, c, d) {
						var e;Za(a) || (d = c, c = b, b = a, a = void 0);w && (e = z);c || (c = w ? D.parent() : D);if (d) {
							var f = g.$$slots[d];if (f) return f(a, b, e, c, Fb);if (y(f)) throw ea("noslot", d, ua(D));
						} else return g(a, b, e, c, Fb);
					}var m, p, A, t, H, z, N, D;b === e ? (f = d, D = d.$$element) : (D = G(e), f = new Aa(D, d));H = c;B ? t = c.$new(!0) : u && (H = c.$parent);g && (N = l, N.$$boundTransclude = g, N.isSlotFilled = function (a) {
						return !!g.$$slots[a];
					});r && (z = $f(D, f, N, r, t, c, B));B && (aa.$$addScopeInfo(D, t, !0, !(x && (x === B || x === B.$$originalDirective))), aa.$$addScopeClass(D, !0), t.$$isolateBindings = B.$$isolateBindings, p = ga(c, f, t, t.$$isolateBindings, B), p.removeWatches && t.$on("$destroy", p.removeWatches));for (m in z) {
						p = r[m];A = z[m];var R = p.$$bindings.bindToController;A.bindingInfo = A.identifier && R ? ga(H, f, A.instance, R, p) : {};var M = A();M !== A.instance && (A.instance = M, D.data("$" + p.name + "Controller", M), A.bindingInfo.removeWatches && A.bindingInfo.removeWatches(), A.bindingInfo = ga(H, f, A.instance, R, p));
					}q(r, function (a, b) {
						var c = a.require;a.bindToController && !K(c) && J(c) && P(z[b].instance, ib(b, c, D, z));
					});q(z, function (a) {
						var b = a.instance;E(b.$onChanges) && b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit) && b.$onInit();E(b.$onDestroy) && H.$on("$destroy", function () {
							b.$onDestroy();
						});
					});m = 0;for (p = h.length; m < p; m++) {
						A = h[m], ia(A, A.isolateScope ? t : c, D, f, A.require && ib(A.directiveName, A.require, D, z), N);
					}var Fb = c;B && (B.template || null === B.templateUrl) && (Fb = t);a && a(Fb, e.childNodes, void 0, g);for (m = k.length - 1; 0 <= m; m--) {
						A = k[m], ia(A, A.isolateScope ? t : c, D, f, A.require && ib(A.directiveName, A.require, D, z), N);
					}q(z, function (a) {
						a = a.instance;E(a.$postLink) && a.$postLink();
					});
				}l = l || {};for (var p = -Number.MAX_VALUE, u = l.newScopeDirective, r = l.controllerDirectives, B = l.newIsolateScopeDirective, x = l.templateDirective, A = l.nonTlbTranscludeDirective, H = !1, z = !1, w = l.hasElementTranscludeDirective, N = d.$$element = G(b), t, M, R, ka = e, s, Ca = !1, va = !1, v, C = 0, F = a.length; C < F; C++) {
					t = a[C];var I = t.$$start,
					    Ta = t.$$end;I && (N = Yc(b, I, Ta));R = void 0;if (p > t.priority) break;if (v = t.scope) t.templateUrl || (J(v) ? (W("new/isolated scope", B || u, t, N), B = t) : W("new/isolated scope", B, t, N)), u = u || t;M = t.name;if (!Ca && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
						for (v = C + 1; Ca = a[v++];) {
							if (Ca.transclude && !Ca.$$tlb || Ca.replace && (Ca.templateUrl || Ca.template)) {
								va = !0;break;
							}
						}Ca = !0;
					}!t.templateUrl && t.controller && (v = t.controller, r = r || S(), W("'" + M + "' controller", r[M], t, N), r[M] = t);if (v = t.transclude) if (H = !0, t.$$tlb || (W("transclusion", A, t, N), A = t), "element" == v) w = !0, p = t.priority, R = N, N = d.$$element = G(aa.$$createComment(M, d[M])), b = N[0], ca(f, ya.call(R, 0), b), R[0].$$parentNode = R[0].parentNode, ka = ac(va, R, e, p, g && g.name, { nonTlbTranscludeDirective: A });else {
						var L = S();R = G(Yb(b)).contents();if (J(v)) {
							R = [];var Q = S(),
							    Da = S();q(v, function (a, b) {
								var c = "?" === a.charAt(0);a = c ? a.substring(1) : a;Q[a] = b;L[b] = null;Da[b] = c;
							});q(N.contents(), function (a) {
								var b = Q[wa(ta(a))];b ? (Da[b] = !0, L[b] = L[b] || [], L[b].push(a)) : R.push(a);
							});q(Da, function (a, b) {
								if (!a) throw ea("reqslot", b);
							});for (var X in L) {
								L[X] && (L[X] = ac(va, L[X], e));
							}
						}N.empty();ka = ac(va, R, e, void 0, void 0, { needsNewScope: t.$$isolateScope || t.$$newScope });ka.$$slots = L;
					}if (t.template) if (z = !0, W("template", x, t, N), x = t, v = E(t.template) ? t.template(N, d) : t.template, v = ra(v), t.replace) {
						g = t;R = Wb.test(v) ? Zc(ba(t.templateNamespace, V(v))) : [];b = R[0];if (1 != R.length || 1 !== b.nodeType) throw ea("tplrt", M, "");ca(f, N, b);F = { $attr: {} };v = $b(b, [], F);var $ = a.splice(C + 1, a.length - (C + 1));(B || u) && $c(v, B, u);a = a.concat(v).concat($);T(d, F);F = a.length;
					} else N.html(v);if (t.templateUrl) z = !0, W("template", x, t, N), x = t, t.replace && (g = t), n = Z(a.splice(C, a.length - C), N, d, f, H && ka, h, k, { controllerDirectives: r, newScopeDirective: u !== t && u, newIsolateScopeDirective: B, templateDirective: x, nonTlbTranscludeDirective: A }), F = a.length;else if (t.compile) try {
						s = t.compile(N, d, ka);var Y = t.$$originalDirective || t;E(s) ? m(null, bb(Y, s), I, Ta) : s && m(bb(Y, s.pre), bb(Y, s.post), I, Ta);
					} catch (da) {
						c(da, ua(N));
					}t.terminal && (n.terminal = !0, p = Math.max(p, t.priority));
				}n.scope = u && !0 === u.scope;n.transcludeOnThisElement = H;n.templateOnThisElement = z;n.transclude = ka;l.hasElementTranscludeDirective = w;return n;
			}function ib(a, b, c, d) {
				var e;if (I(b)) {
					var f = b.match(l);b = b.substring(f[0].length);var g = f[1] || f[3],
					    f = "?" === f[2];"^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;if (!e) {
						var h = "$" + b + "Controller";e = g ? c.inheritedData(h) : c.data(h);
					}if (!e && !f) throw ea("ctreq", b, a);
				} else if (K(b)) for (e = [], g = 0, f = b.length; g < f; g++) {
					e[g] = ib(a, b[g], c, d);
				} else J(b) && (e = {}, q(b, function (b, f) {
					e[f] = ib(a, b, c, d);
				}));return e || null;
			}function $f(a, b, c, d, e, f, g) {
				var h = S(),
				    k;for (k in d) {
					var l = d[k],
					    m = { $scope: l === g || l.$$isolateScope ? e : f, $element: a, $attrs: b, $transclude: c },
					    n = l.controller;"@" == n && (n = b[l.name]);m = w(n, m, !0, l.controllerAs);h[l.name] = m;a.data("$" + l.name + "Controller", m.instance);
				}return h;
			}function $c(a, b, c) {
				for (var d = 0, e = a.length; d < e; d++) {
					a[d] = Sb(a[d], { $$isolateScope: b, $$newScope: c });
				}
			}function Da(b, e, g, h, k, l, m) {
				if (e === k) return null;k = null;if (f.hasOwnProperty(e)) {
					var n;
					e = a.get(e + "Directive");for (var p = 0, u = e.length; p < u; p++) {
						try {
							if (n = e[p], (y(h) || h > n.priority) && -1 != n.restrict.indexOf(g)) {
								l && (n = Sb(n, { $$start: l, $$end: m }));if (!n.$$bindings) {
									var r = n,
									    B = n,
									    A = n.name,
									    x = { isolateScope: null, bindToController: null };J(B.scope) && (!0 === B.bindToController ? (x.bindToController = d(B.scope, A, !0), x.isolateScope = {}) : x.isolateScope = d(B.scope, A, !1));J(B.bindToController) && (x.bindToController = d(B.bindToController, A, !0));if (J(x.bindToController)) {
										var t = B.controller,
										    H = B.controllerAs;if (!t) throw ea("noctrl", A);if (!Wc(t, H)) throw ea("noident", A);
									}var N = r.$$bindings = x;J(N.isolateScope) && (n.$$isolateBindings = N.isolateScope);
								}b.push(n);k = n;
							}
						} catch (w) {
							c(w);
						}
					}
				}return k;
			}function Q(b) {
				if (f.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++) {
					if (b = c[d], b.multiElement) return !0;
				}return !1;
			}function T(a, b) {
				var c = b.$attr,
				    d = a.$attr,
				    e = a.$$element;q(a, function (d, e) {
					"$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
				});q(b, function (b, f) {
					"class" == f ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
				});
			}function Z(a, b, c, d, f, g, h, k) {
				var l = [],
				    m,
				    n,
				    p = b[0],
				    B = a.shift(),
				    r = Sb(B, { templateUrl: null, transclude: null, replace: null, $$originalDirective: B }),
				    A = E(B.templateUrl) ? B.templateUrl(b, c) : B.templateUrl,
				    x = B.templateNamespace;b.empty();e(A).then(function (e) {
					var u, t;e = ra(e);if (B.replace) {
						e = Wb.test(e) ? Zc(ba(x, V(e))) : [];u = e[0];if (1 != e.length || 1 !== u.nodeType) throw ea("tplrt", B.name, A);e = { $attr: {} };ca(d, b, u);var H = $b(u, [], e);J(B.scope) && $c(H, !0);a = H.concat(a);T(c, e);
					} else u = p, b.html(e);a.unshift(r);m = Ta(a, u, c, f, b, B, g, h, k);q(d, function (a, c) {
						a == u && (d[c] = b[0]);
					});for (n = s(b[0].childNodes, f); l.length;) {
						e = l.shift();t = l.shift();var z = l.shift(),
						    D = l.shift(),
						    H = b[0];if (!e.$$destroyed) {
							if (t !== p) {
								var w = t.className;k.hasElementTranscludeDirective && B.replace || (H = Yb(u));ca(z, G(t), H);N(G(H), w);
							}t = m.transcludeOnThisElement ? va(e, m.transclude, D) : D;m(n, e, H, d, t);
						}
					}l = null;
				});return function (a, b, c, d, e) {
					a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = va(b, m.transclude, e)), m(n, b, c, d, a)));
				};
			}function X(a, b) {
				var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
			}function W(a, b, c, d) {
				function e(a) {
					return a ? " (module: " + a + ")" : "";
				}if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
			}function $(a, c) {
				var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
						a = a.parent();var b = !!a.length;b && aa.$$addBindingClass(a);
						return function (a, c) {
							var e = c.parent();b || aa.$$addBindingClass(e);aa.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
								c[0].nodeValue = a;
							});
						};
					} });
			}function ba(a, b) {
				a = L(a || "html");switch (a) {case "svg":case "math":
						var c = F.document.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
						return b;}
			}function da(a, b) {
				if ("srcdoc" == b) return B.HTML;var c = ta(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return B.RESOURCE_URL;
			}function ha(a, c, d, e, f) {
				var g = da(a, e);f = k[e] || f;var h = b(d, !0, g, f);if (h) {
					if ("multiple" === e && "select" === ta(a)) throw ea("selmulti", ua(a));c.push({ priority: 100, compile: function compile() {
							return { pre: function pre(a, c, k) {
									c = k.$$observers || (k.$$observers = S());if (m.test(e)) throw ea("nodomevents");var l = k[e];l !== d && (h = l && b(l, !0, g, f), d = l);h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function (a, b) {
										"class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
									}));
								} };
						} });
				}
			}function ca(a, b, c) {
				var d = b[0],
				    e = b.length,
				    f = d.parentNode,
				    g,
				    h;if (a) for (g = 0, h = a.length; g < h; g++) {
					if (a[g] == d) {
						a[g++] = c;h = g + e - 1;for (var k = a.length; g < k; g++, h++) {
							h < k ? a[g] = a[h] : delete a[g];
						}a.length -= e - 1;a.context === d && (a.context = c);break;
					}
				}f && f.replaceChild(c, d);a = F.document.createDocumentFragment();for (g = 0; g < e; g++) {
					a.appendChild(b[g]);
				}G.hasData(d) && (G.data(c, G.data(d)), G(d).off("$destroy"));G.cleanData(a.querySelectorAll("*"));for (g = 1; g < e; g++) {
					delete b[g];
				}b[0] = c;b.length = 1;
			}function fa(a, b) {
				return P(function () {
					return a.apply(null, arguments);
				}, a, b);
			}function ia(a, b, d, e, f, g) {
				try {
					a(b, d, e, f, g);
				} catch (h) {
					c(h, ua(d));
				}
			}function ga(a, c, d, e, f) {
				function g(b, c, e) {
					E(d.$onChanges) && c !== e && (Y || (a.$$postDigest(M), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Gb(e, c));
				}function h() {
					d.$onChanges(m);m = void 0;
				}var k = [],
				    l = {},
				    m;q(e, function (e, h) {
					var m = e.attrName,
					    p = e.optional,
					    u,
					    B,
					    A,
					    x;switch (e.mode) {case "@":
							p || sa.call(c, m) || (d[h] = c[m] = void 0);c.$observe(m, function (a) {
								if (I(a) || Ea(a)) g(h, a, d[h]), d[h] = a;
							});c.$$observers[m].$$scope = a;u = c[m];I(u) ? d[h] = b(u)(a) : Ea(u) && (d[h] = u);l[h] = new Gb(bc, d[h]);break;case "=":
							if (!sa.call(c, m)) {
								if (p) break;c[m] = void 0;
							}if (p && !c[m]) break;B = n(c[m]);x = B.literal ? na : function (a, b) {
								return a === b || a !== a && b !== b;
							};A = B.assign || function () {
								u = d[h] = B(a);throw ea("nonassign", c[m], m, f.name);
							};u = d[h] = B(a);p = function p(b) {
								x(b, d[h]) || (x(b, u) ? A(a, b = d[h]) : d[h] = b);return u = b;
							};p.$stateful = !0;p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, B.literal);k.push(p);break;case "<":
							if (!sa.call(c, m)) {
								if (p) break;c[m] = void 0;
							}if (p && !c[m]) break;
							B = n(c[m]);var H = d[h] = B(a);l[h] = new Gb(bc, d[h]);p = a.$watch(B, function (a, b) {
								if (b === a) {
									if (b === H) return;b = H;
								}g(h, a, b);d[h] = a;
							}, B.literal);k.push(p);break;case "&":
							B = c.hasOwnProperty(m) ? n(c[m]) : C;if (B === C && p) break;d[h] = function (b) {
								return B(a, b);
							};}
				});return { initialChanges: l, removeWatches: k.length && function () {
						for (var a = 0, b = k.length; a < b; ++a) {
							k[a]();
						}
					} };
			}var ma = /^\w/,
			    la = F.document.createElement("div"),
			    oa = x,
			    Y;Aa.prototype = { $normalize: wa, $addClass: function $addClass(a) {
					a && 0 < a.length && A.addClass(this.$$element, a);
				}, $removeClass: function $removeClass(a) {
					a && 0 < a.length && A.removeClass(this.$$element, a);
				}, $updateClass: function $updateClass(a, b) {
					var c = ad(a, b);c && c.length && A.addClass(this.$$element, c);(c = ad(b, a)) && c.length && A.removeClass(this.$$element, c);
				}, $set: function $set(a, b, d, e) {
					var f = Tc(this.$$element[0], a),
					    g = bd[a],
					    h = a;f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Bc(a, "-"));f = ta(this.$$element);if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = H(b, "src" === a);else if ("img" === f && "srcset" === a && v(b)) {
						for (var f = "", g = V(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) {
							var m = 2 * l,
							    f = f + H(V(g[m]), !0),
							    f = f + (" " + V(g[m + 1]));
						}g = V(g[2 * l]).split(/\s/);f += H(V(g[0]), !0);2 === g.length && (f += " " + V(g[1]));this[a] = b = f;
					}!1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ma.test(e) ? this.$$element.attr(e, b) : R(this.$$element[0], e, b));(a = this.$$observers) && q(a[h], function (a) {
						try {
							a(b);
						} catch (d) {
							c(d);
						}
					});
				}, $observe: function $observe(a, b) {
					var c = this,
					    d = c.$$observers || (c.$$observers = S()),
					    e = d[a] || (d[a] = []);e.push(b);ka.$evalAsync(function () {
						e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a]);
					});return function () {
						$a(e, b);
					};
				} };var pa = b.startSymbol(),
			    qa = b.endSymbol(),
			    ra = "{{" == pa && "}}" == qa ? Ya : function (a) {
				return a.replace(/\{\{/g, pa).replace(/}}/g, qa);
			},
			    xa = /^ngAttr[A-Z]/,
			    za = /^(.+)Start$/;aa.$$addBindingInfo = p ? function (a, b) {
				var c = a.data("$binding") || [];K(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
			} : C;aa.$$addBindingClass = p ? function (a) {
				N(a, "ng-binding");
			} : C;aa.$$addScopeInfo = p ? function (a, b, c, d) {
				a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
			} : C;aa.$$addScopeClass = p ? function (a, b) {
				N(a, b ? "ng-isolate-scope" : "ng-scope");
			} : C;aa.$$createComment = function (a, b) {
				var c = "";p && (c = " " + (a || "") + ": ", b && (c += b + " "));return F.document.createComment(c);
			};return aa;
		}];
	}function Gb(a, b) {
		this.previousValue = a;this.currentValue = b;
	}function wa(a) {
		return eb(a.replace(Xc, ""));
	}function ad(a, b) {
		var d = "",
		    c = a.split(/\s+/),
		    e = b.split(/\s+/),
		    f = 0;a: for (; f < c.length; f++) {
			for (var g = c[f], h = 0; h < e.length; h++) {
				if (g == e[h]) continue a;
			}d += (0 < d.length ? " " : "") + g;
		}return d;
	}function Zc(a) {
		a = G(a);var b = a.length;if (1 >= b) return a;for (; b--;) {
			8 === a[b].nodeType && ag.call(a, b, 1);
		}return a;
	}function Wc(a, b) {
		if (b && I(b)) return b;if (I(a)) {
			var d = cd.exec(a);if (d) return d[3];
		}
	}function ff() {
		var a = {},
		    b = !1;this.has = function (b) {
			return a.hasOwnProperty(b);
		};this.register = function (b, c) {
			Ra(b, "controller");J(b) ? P(a, b) : a[b] = c;
		};this.allowGlobals = function () {
			b = !0;
		};this.$get = ["$injector", "$window", function (d, c) {
			function e(a, b, c, d) {
				if (!a || !J(a.$scope)) throw O("$controller")("noscp", d, b);a.$scope[b] = c;
			}return function (f, g, h, k) {
				var l, m, n;h = !0 === h;k && I(k) && (n = k);if (I(f)) {
					k = f.match(cd);if (!k) throw bg("ctrlfmt", f);m = k[1];n = n || k[3];f = a.hasOwnProperty(m) ? a[m] : Dc(g.$scope, m, !0) || (b ? Dc(c, m, !0) : void 0);Qa(f, m, !0);
				}if (h) return h = (K(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), P(function () {
					var a = d.invoke(f, l, g, m);a !== l && (J(a) || E(a)) && (l = a, n && e(g, n, l, m || f.name));return l;
				}, { instance: l, identifier: n });l = d.instantiate(f, g, m);n && e(g, n, l, m || f.name);return l;
			};
		}];
	}function gf() {
		this.$get = ["$window", function (a) {
			return G(a.document);
		}];
	}function hf() {
		this.$get = ["$log", function (a) {
			return function (b, d) {
				a.error.apply(a, arguments);
			};
		}];
	}function cc(a) {
		return J(a) ? ha(a) ? a.toISOString() : cb(a) : a;
	}function nf() {
		this.$get = function () {
			return function (a) {
				if (!a) return "";var b = [];sc(a, function (a, c) {
					null === a || y(a) || (K(a) ? q(a, function (a) {
						b.push(ia(c) + "=" + ia(cc(a)));
					}) : b.push(ia(c) + "=" + ia(cc(a))));
				});return b.join("&");
			};
		};
	}function of() {
		this.$get = function () {
			return function (a) {
				function b(a, e, f) {
					null === a || y(a) || (K(a) ? q(a, function (a, c) {
						b(a, e + "[" + (J(a) ? c : "") + "]");
					}) : J(a) && !ha(a) ? sc(a, function (a, c) {
						b(a, e + (f ? "" : "[") + c + (f ? "" : "]"));
					}) : d.push(ia(e) + "=" + ia(cc(a))));
				}if (!a) return "";var d = [];b(a, "", !0);return d.join("&");
			};
		};
	}function dc(a, b) {
		if (I(a)) {
			var d = a.replace(cg, "").trim();if (d) {
				var c = b("Content-Type");(c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(dg)) && eg[c[0]].test(d));c && (a = wc(d));
			}
		}return a;
	}function ed(a) {
		var b = S(),
		    d;I(a) ? q(a.split("\n"), function (a) {
			d = a.indexOf(":");var e = L(V(a.substr(0, d)));a = V(a.substr(d + 1));e && (b[e] = b[e] ? b[e] + ", " + a : a);
		}) : J(a) && q(a, function (a, d) {
			var f = L(d),
			    g = V(a);f && (b[f] = b[f] ? b[f] + ", " + g : g);
		});return b;
	}function fd(a) {
		var b;return function (d) {
			b || (b = ed(a));return d ? (d = b[L(d)], void 0 === d && (d = null), d) : b;
		};
	}function gd(a, b, d, c) {
		if (E(c)) return c(a, b, d);q(c, function (c) {
			a = c(a, b, d);
		});return a;
	}function mf() {
		var a = this.defaults = { transformResponse: [dc], transformRequest: [function (a) {
				return J(a) && "[object File]" !== ja.call(a) && "[object Blob]" !== ja.call(a) && "[object FormData]" !== ja.call(a) ? cb(a) : a;
			}], headers: { common: { Accept: "application/json, text/plain, */*" }, post: fa(ec), put: fa(ec), patch: fa(ec) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", paramSerializer: "$httpParamSerializer" },
		    b = !1;this.useApplyAsync = function (a) {
			return v(a) ? (b = !!a, this) : b;
		};var d = !0;this.useLegacyPromiseExtensions = function (a) {
			return v(a) ? (d = !!a, this) : d;
		};var c = this.interceptors = [];this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
			function m(b) {
				function c(a) {
					var b = P({}, a);b.data = gd(a.data, a.headers, a.status, f.transformResponse);a = a.status;return 200 <= a && 300 > a ? b : k.reject(b);
				}function e(a, b) {
					var c,
					    d = {};q(a, function (a, e) {
						E(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a;
					});return d;
				}if (!J(b)) throw O("$http")("badreq", b);if (!I(b.url)) throw O("$http")("badreq", b.url);var f = P({ method: "get", transformRequest: a.transformRequest, transformResponse: a.transformResponse, paramSerializer: a.paramSerializer }, b);f.headers = function (b) {
					var c = a.headers,
					    d = P({}, b.headers),
					    f,
					    g,
					    h,
					    c = P({}, c.common, c[L(b.method)]);a: for (f in c) {
						g = L(f);for (h in d) {
							if (L(h) === g) continue a;
						}d[f] = c[f];
					}return e(d, fa(b));
				}(b);f.method = ub(f.method);f.paramSerializer = I(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;var g = [function (b) {
					var d = b.headers,
					    e = gd(b.data, fd(d), void 0, b.transformRequest);y(e) && q(d, function (a, b) {
						"content-type" === L(b) && delete d[b];
					});y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials);return n(b, e).then(c, c);
				}, void 0],
				    h = k.when(f);for (q(U, function (a) {
					(a.request || a.requestError) && g.unshift(a.request, a.requestError);(a.response || a.responseError) && g.push(a.response, a.responseError);
				}); g.length;) {
					b = g.shift();var m = g.shift(),
					    h = h.then(b, m);
				}d ? (h.success = function (a) {
					Qa(a, "fn");h.then(function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}, h.error = function (a) {
					Qa(a, "fn");h.then(null, function (b) {
						a(b.data, b.status, b.headers, f);
					});return h;
				}) : (h.success = hd("success"), h.error = hd("error"));return h;
			}function n(c, d) {
				function g(a) {
					if (a) {
						var c = {};q(a, function (a, d) {
							c[d] = function (c) {
								function d() {
									a(c);
								}b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d);
							};
						});return c;
					}
				}function l(a, c, d, e) {
					function f() {
						n(c, a, d, e);
					}H && (200 <= a && 300 > a ? H.put(R, [a, c, ed(d), e]) : H.remove(R));b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply());
				}function n(a, b, d, e) {
					b = -1 <= b ? b : 0;(200 <= b && 300 > b ? B.resolve : B.reject)({ data: a, status: b, headers: fd(d), config: c, statusText: e });
				}function w(a) {
					n(a.data, a.status, fa(a.headers()), a.statusText);
				}function U() {
					var a = m.pendingRequests.indexOf(c);-1 !== a && m.pendingRequests.splice(a, 1);
				}var B = k.defer(),
				    A = B.promise,
				    H,
				    M,
				    Aa = c.headers,
				    R = p(c.url, c.paramSerializer(c.params));m.pendingRequests.push(c);A.then(U, U);!c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (H = J(c.cache) ? c.cache : J(a.cache) ? a.cache : x);H && (M = H.get(R), v(M) ? M && E(M.then) ? M.then(w, w) : K(M) ? n(M[1], M[0], fa(M[2]), M[3]) : n(M, 200, {}, "OK") : H.put(R, A));y(M) && ((M = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Aa[c.xsrfHeaderName || a.xsrfHeaderName] = M), e(c.method, R, d, l, Aa, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));return A;
			}function p(a, b) {
				0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);return a;
			}var x = g("$http");a.paramSerializer = I(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;var U = [];q(c, function (a) {
				U.unshift(I(a) ? l.get(a) : l.invoke(a));
			});m.pendingRequests = [];(function (a) {
				q(arguments, function (a) {
					m[a] = function (b, c) {
						return m(P({}, c || {}, { method: a, url: b }));
					};
				});
			})("get", "delete", "head", "jsonp");(function (a) {
				q(arguments, function (a) {
					m[a] = function (b, c, d) {
						return m(P({}, d || {}, { method: a, url: b, data: c }));
					};
				});
			})("post", "put", "patch");m.defaults = a;return m;
		}];
	}function qf() {
		this.$get = function () {
			return function () {
				return new F.XMLHttpRequest();
			};
		};
	}function pf() {
		this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
			return fg(a, c, a.defer, b.angular.callbacks, d[0]);
		}];
	}function fg(a, b, d, c, e) {
		function f(a, b, d) {
			var f = e.createElement("script"),
			    _m = null;f.type = "text/javascript";f.src = a;f.async = !0;_m = function m(a) {
				f.removeEventListener("load", _m, !1);f.removeEventListener("error", _m, !1);e.body.removeChild(f);f = null;var g = -1,
				    x = "unknown";a && ("load" !== a.type || c[b].called || (a = { type: "error" }), x = a.type, g = "error" === a.type ? 404 : 200);d && d(g, x);
			};f.addEventListener("load", _m, !1);f.addEventListener("error", _m, !1);e.body.appendChild(f);return _m;
		}return function (e, h, k, l, m, n, p, x, U, z) {
			function r() {
				t && t();w && w.abort();
			}function D(b, c, e, f, g) {
				v(B) && d.cancel(B);t = w = null;b(c, e, f, g);a.$$completeOutstandingRequest(C);
			}a.$$incOutstandingRequestCount();h = h || a.url();if ("jsonp" == L(e)) {
				var u = "_" + (c.counter++).toString(36);
				c[u] = function (a) {
					c[u].data = a;c[u].called = !0;
				};var t = f(h.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function (a, b) {
					D(l, a, c[u].data, "", b);c[u] = C;
				});
			} else {
				var w = b(e, h);w.open(e, h, !0);q(m, function (a, b) {
					v(a) && w.setRequestHeader(b, a);
				});w.onload = function () {
					var a = w.statusText || "",
					    b = "response" in w ? w.response : w.responseText,
					    c = 1223 === w.status ? 204 : w.status;0 === c && (c = b ? 200 : "file" == pa(h).protocol ? 404 : 0);D(l, c, b, w.getAllResponseHeaders(), a);
				};e = function e() {
					D(l, -1, null, null, "");
				};w.onerror = e;w.onabort = e;q(U, function (a, b) {
					w.addEventListener(b, a);
				});q(z, function (a, b) {
					w.upload.addEventListener(b, a);
				});p && (w.withCredentials = !0);if (x) try {
					w.responseType = x;
				} catch (ka) {
					if ("json" !== x) throw ka;
				}w.send(y(k) ? null : k);
			}if (0 < n) var B = d(r, n);else n && E(n.then) && n.then(r);
		};
	}function kf() {
		var a = "{{",
		    b = "}}";this.startSymbol = function (b) {
			return b ? (a = b, this) : a;
		};this.endSymbol = function (a) {
			return a ? (b = a, this) : b;
		};this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
			function f(a) {
				return "\\\\\\" + a;
			}function g(c) {
				return c.replace(n, a).replace(p, b);
			}function h(a, b, c, d) {
				var e;return e = a.$watch(function (a) {
					e();return d(a);
				}, b, c);
			}function k(f, k, n, p) {
				function D(a) {
					try {
						var b = a;a = n ? e.getTrusted(n, b) : e.valueOf(b);var d;if (p && !v(a)) d = a;else if (null == a) d = "";else {
							switch (typeof a === 'undefined' ? 'undefined' : _typeof(a)) {case "string":
									break;case "number":
									a = "" + a;break;default:
									a = cb(a);}d = a;
						}return d;
					} catch (g) {
						c(Ka.interr(f, g));
					}
				}if (!f.length || -1 === f.indexOf(a)) {
					var u;k || (k = g(f), u = ca(k), u.exp = f, u.expressions = [], u.$$watchDelegate = h);return u;
				}p = !!p;var t,
				    w,
				    q = 0,
				    B = [],
				    A = [];u = f.length;for (var H = [], M = []; q < u;) {
					if (-1 != (t = f.indexOf(a, q)) && -1 != (w = f.indexOf(b, t + l))) q !== t && H.push(g(f.substring(q, t))), q = f.substring(t + l, w), B.push(q), A.push(d(q, D)), q = w + m, M.push(H.length), H.push("");else {
						q !== u && H.push(g(f.substring(q)));break;
					}
				}n && 1 < H.length && Ka.throwNoconcat(f);if (!k || B.length) {
					var Aa = function Aa(a) {
						for (var b = 0, c = B.length; b < c; b++) {
							if (p && y(a[b])) return;H[M[b]] = a[b];
						}return H.join("");
					};return P(function (a) {
						var b = 0,
						    d = B.length,
						    e = Array(d);try {
							for (; b < d; b++) {
								e[b] = A[b](a);
							}return Aa(e);
						} catch (g) {
							c(Ka.interr(f, g));
						}
					}, { exp: f, expressions: B,
						$$watchDelegate: function $$watchDelegate(a, b) {
							var c;return a.$watchGroup(A, function (d, e) {
								var f = Aa(d);E(b) && b.call(this, f, d !== e ? c : f, a);c = f;
							});
						} });
				}
			}var l = a.length,
			    m = b.length,
			    n = new RegExp(a.replace(/./g, f), "g"),
			    p = new RegExp(b.replace(/./g, f), "g");k.startSymbol = function () {
				return a;
			};k.endSymbol = function () {
				return b;
			};return k;
		}];
	}function lf() {
		this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
			function f(f, k, l, m) {
				function n() {
					p ? f.apply(null, x) : f(r);
				}var p = 4 < arguments.length,
				    x = p ? ya.call(arguments, 4) : [],
				    q = b.setInterval,
				    z = b.clearInterval,
				    r = 0,
				    D = v(m) && !m,
				    u = (D ? c : d).defer(),
				    t = u.promise;l = v(l) ? l : 0;t.$$intervalId = q(function () {
					D ? e.defer(n) : a.$evalAsync(n);u.notify(r++);0 < l && r >= l && (u.resolve(r), z(t.$$intervalId), delete g[t.$$intervalId]);D || a.$apply();
				}, k);g[t.$$intervalId] = u;return t;
			}var g = {};f.cancel = function (a) {
				return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1;
			};return f;
		}];
	}function fc(a) {
		a = a.split("/");for (var b = a.length; b--;) {
			a[b] = qb(a[b]);
		}return a.join("/");
	}function jd(a, b) {
		var d = pa(a);b.$$protocol = d.protocol;b.$$host = d.hostname;b.$$port = $(d.port) || gg[d.protocol] || null;
	}function kd(a, b) {
		var d = "/" !== a.charAt(0);d && (a = "/" + a);var c = pa(a);b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);b.$$search = zc(c.search);b.$$hash = decodeURIComponent(c.hash);b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
	}function la(a, b) {
		if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length);
	}function Ja(a) {
		var b = a.indexOf("#");return -1 == b ? a : a.substr(0, b);
	}function jb(a) {
		return a.replace(/(#.+)|#$/, "$1");
	}function gc(a, b, d) {
		this.$$html5 = !0;d = d || "";jd(a, this);this.$$parse = function (a) {
			var d = la(b, a);if (!I(d)) throw Hb("ipthprfx", a, b);kd(d, this);this.$$path || (this.$$path = "/");this.$$compose();
		};this.$$compose = function () {
			var a = Ub(this.$$search),
			    d = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;this.$$absUrl = b + this.$$url.substr(1);
		};this.$$parseLinkUrl = function (c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;v(f = la(a, c)) ? (g = f, g = v(f = la(d, f)) ? b + (la("/", f) || f) : a + g) : v(f = la(b, c)) ? g = b + f : b == c + "/" && (g = b);g && this.$$parse(g);return !!g;
		};
	}function hc(a, b, d) {
		jd(a, this);this.$$parse = function (c) {
			var e = la(a, c) || la(b, c),
			    f;y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = la(d, e), y(f) && (f = e));kd(f, this);c = this.$$path;var e = a,
			    g = /^\/[A-Z]:(\/.*)/;0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);this.$$path = c;this.$$compose();
		};this.$$compose = function () {
			var b = Ub(this.$$search),
			    e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
		};this.$$parseLinkUrl = function (b, d) {
			return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1;
		};
	}function ld(a, b, d) {
		this.$$html5 = !0;hc.apply(this, arguments);this.$$parseLinkUrl = function (c, e) {
			if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;a == Ja(c) ? f = c : (g = la(b, c)) ? f = a + d + g : b === c + "/" && (f = b);f && this.$$parse(f);return !!f;
		};this.$$compose = function () {
			var b = Ub(this.$$search),
			    e = this.$$hash ? "#" + qb(this.$$hash) : "";this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;this.$$absUrl = a + d + this.$$url;
		};
	}function Ib(a) {
		return function () {
			return this[a];
		};
	}function md(a, b) {
		return function (d) {
			if (y(d)) return this[a];this[a] = b(d);this.$$compose();return this;
		};
	}function rf() {
		var a = "",
		    b = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.html5Mode = function (a) {
			return Ea(a) ? (b.enabled = a, this) : J(a) ? (Ea(a.enabled) && (b.enabled = a.enabled), Ea(a.requireBase) && (b.requireBase = a.requireBase), Ea(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b;
		};this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
			function h(a, b, d) {
				var e = l.url(),
				    f = l.$$state;try {
					c.url(a, b, d), l.$$state = c.state();
				} catch (g) {
					throw l.url(e), l.$$state = f, g;
				}
			}function k(a, b) {
				d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b);
			}var l, m;m = c.baseHref();var n = c.url(),
			    p;if (b.enabled) {
				if (!m && b.requireBase) throw Hb("nobase");p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? gc : ld;
			} else p = Ja(n), m = hc;var x = p.substr(0, Ja(p).lastIndexOf("/") + 1);l = new m(p, x, "#" + a);l.$$parseLinkUrl(n, n);l.$$state = c.state();var q = /^\s*(javascript|mailto):/i;f.on("click", function (a) {
				if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
					for (var e = G(a.target); "a" !== ta(e[0]);) {
						if (e[0] === f[0] || !(e = e.parent())[0]) return;
					}var h = e.prop("href"),
					    k = e.attr("href") || e.attr("xlink:href");J(h) && "[object SVGAnimatedString]" === h.toString() && (h = pa(h.animVal).href);q.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0));
				}
			});jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);var z = !0;c.onUrlChange(function (a, b) {
				y(la(x, a)) ? g.location.href = a : (d.$evalAsync(function () {
					var c = l.absUrl(),
					    e = l.$$state,
					    f;a = jb(a);l.$$parse(a);l.$$state = b;f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (z = !1, k(c, e)));
				}), d.$$phase || d.$digest());
			});d.$watch(function () {
				var a = jb(c.url()),
				    b = jb(l.absUrl()),
				    f = c.state(),
				    g = l.$$replace,
				    m = a !== b || l.$$html5 && e.history && f !== l.$$state;if (z || m) z = !1, d.$evalAsync(function () {
					var b = l.absUrl(),
					    c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)));
				});l.$$replace = !1;
			});return l;
		}];
	}function sf() {
		var a = !0,
		    b = this;this.debugEnabled = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.$get = ["$window", function (d) {
			function c(a) {
				a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
			}function e(a) {
				var b = d.console || {},
				    e = b[a] || b.log || C;a = !1;try {
					a = !!e.apply;
				} catch (k) {}return a ? function () {
					var a = [];q(arguments, function (b) {
						a.push(c(b));
					});return e.apply(b, a);
				} : function (a, b) {
					e(a, null == b ? "" : b);
				};
			}return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"),
				debug: function () {
					var c = e("debug");return function () {
						a && c.apply(b, arguments);
					};
				}() };
		}];
	}function Ua(a, b) {
		if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ba("isecfld", b);return a;
	}function hg(a) {
		return a + "";
	}function qa(a, b) {
		if (a) {
			if (a.constructor === a) throw ba("isecfn", b);if (a.window === a) throw ba("isecwindow", b);if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ba("isecdom", b);if (a === Object) throw ba("isecobj", b);
		}return a;
	}function nd(a, b) {
		if (a) {
			if (a.constructor === a) throw ba("isecfn", b);if (a === ig || a === jg || a === kg) throw ba("isecff", b);
		}
	}function Jb(a, b) {
		if (a && (a === 0 .constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ba("isecaf", b);
	}function lg(a, b) {
		return "undefined" !== typeof a ? a : b;
	}function od(a, b) {
		return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b;
	}function Z(a, b) {
		var d, c;switch (a.type) {case s.Program:
				d = !0;q(a.body, function (a) {
					Z(a.expression, b);d = d && a.expression.constant;
				});a.constant = d;break;case s.Literal:
				a.constant = !0;a.toWatch = [];break;case s.UnaryExpression:
				Z(a.argument, b);a.constant = a.argument.constant;a.toWatch = a.argument.toWatch;break;case s.BinaryExpression:
				Z(a.left, b);Z(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:
				Z(a.left, b);Z(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = a.constant ? [] : [a];break;case s.ConditionalExpression:
				Z(a.test, b);Z(a.alternate, b);Z(a.consequent, b);a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;a.toWatch = a.constant ? [] : [a];break;case s.Identifier:
				a.constant = !1;a.toWatch = [a];break;case s.MemberExpression:
				Z(a.object, b);a.computed && Z(a.property, b);a.constant = a.object.constant && (!a.computed || a.property.constant);a.toWatch = [a];break;case s.CallExpression:
				d = a.filter ? !b(a.callee.name).$stateful : !1;c = [];q(a.arguments, function (a) {
					Z(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});
				a.constant = d;a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];break;case s.AssignmentExpression:
				Z(a.left, b);Z(a.right, b);a.constant = a.left.constant && a.right.constant;a.toWatch = [a];break;case s.ArrayExpression:
				d = !0;c = [];q(a.elements, function (a) {
					Z(a, b);d = d && a.constant;a.constant || c.push.apply(c, a.toWatch);
				});a.constant = d;a.toWatch = c;break;case s.ObjectExpression:
				d = !0;c = [];q(a.properties, function (a) {
					Z(a.value, b);d = d && a.value.constant && !a.computed;a.value.constant || c.push.apply(c, a.value.toWatch);
				});
				a.constant = d;a.toWatch = c;break;case s.ThisExpression:
				a.constant = !1;a.toWatch = [];break;case s.LocalsExpression:
				a.constant = !1, a.toWatch = [];}
	}function pd(a) {
		if (1 == a.length) {
			a = a[0].expression;var b = a.toWatch;return 1 !== b.length ? b : b[0] !== a ? b : void 0;
		}
	}function qd(a) {
		return a.type === s.Identifier || a.type === s.MemberExpression;
	}function rd(a) {
		if (1 === a.body.length && qd(a.body[0].expression)) return { type: s.AssignmentExpression, left: a.body[0].expression, right: { type: s.NGValueParameter }, operator: "=" };
	}function sd(a) {
		return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression);
	}function td(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function ud(a, b) {
		this.astBuilder = a;this.$filter = b;
	}function Kb(a) {
		return "constructor" == a;
	}function ic(a) {
		return E(a.valueOf) ? a.valueOf() : mg.call(a);
	}function tf() {
		var a = S(),
		    b = S(),
		    d = { "true": !0, "false": !1, "null": null, undefined: void 0 },
		    c,
		    e;this.addLiteral = function (a, b) {
			d[a] = b;
		};this.setIdentifierFns = function (a, b) {
			c = a;e = b;return this;
		};this.$get = ["$filter", function (f) {
			function g(c, d, e) {
				var g, k, A;e = e || D;switch (typeof c === 'undefined' ? 'undefined' : _typeof(c)) {case "string":
						A = c = c.trim();var H = e ? b : a;g = H[A];if (!g) {
							":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2));g = e ? r : z;var q = new jc(g);g = new kc(q, f, g).parse(c);g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);e && (g = h(g));H[A] = g;
						}return x(g, d);case "function":
						return x(c, d);default:
						return x(C, d);}
			}function h(a) {
				function b(c, d, e, f) {
					var g = D;D = !0;try {
						return a(c, d, e, f);
					} finally {
						D = g;
					}
				}if (!a) return a;b.$$watchDelegate = a.$$watchDelegate;b.assign = h(a.assign);b.constant = a.constant;b.literal = a.literal;for (var c = 0; a.inputs && c < a.inputs.length; ++c) {
					a.inputs[c] = h(a.inputs[c]);
				}b.inputs = a.inputs;return b;
			}function k(a, b) {
				return null == a || null == b ? a === b : "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) && (a = ic(a), "object" === (typeof a === 'undefined' ? 'undefined' : _typeof(a))) ? !1 : a === b || a !== a && b !== b;
			}function l(a, b, c, d, e) {
				var f = d.inputs,
				    g;if (1 === f.length) {
					var h = k,
					    f = f[0];return a.$watch(function (a) {
						var b = f(a);k(b, h) || (g = d(a, void 0, void 0, [b]), h = b && ic(b));return g;
					}, b, c, e);
				}for (var l = [], m = [], n = 0, p = f.length; n < p; n++) {
					l[n] = k, m[n] = null;
				}return a.$watch(function (a) {
					for (var b = !1, c = 0, e = f.length; c < e; c++) {
						var h = f[c](a);if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h);
					}b && (g = d(a, void 0, void 0, m));return g;
				}, b, c, e);
			}function m(a, b, c, d) {
				var e, f;return e = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					f = a;E(b) && b.apply(this, arguments);v(a) && d.$$postDigest(function () {
						v(f) && e();
					});
				}, c);
			}function n(a, b, c, d) {
				function e(a) {
					var b = !0;q(a, function (a) {
						v(a) || (b = !1);
					});return b;
				}var f, g;return f = a.$watch(function (a) {
					return d(a);
				}, function (a, c, d) {
					g = a;E(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
						e(g) && f();
					});
				}, c);
			}function p(a, b, c, d) {
				var e;return e = a.$watch(function (a) {
					e();return d(a);
				}, b, c);
			}function x(a, b) {
				if (!b) return a;var c = a.$$watchDelegate,
				    d = !1,
				    c = c !== n && c !== m ? function (c, e, f, g) {
					f = d && g ? g[0] : a(c, e, f, g);return b(f, c, e);
				} : function (c, d, e, f) {
					e = a(c, d, e, f);c = b(e, c, d);return v(e) ? c : e;
				};a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);return c;
			}var U = Fa().noUnsafeEval,
			    z = { csp: U, expensiveChecks: !1, literals: oa(d), isIdentifierStart: E(c) && c, isIdentifierContinue: E(e) && e },
			    r = { csp: U, expensiveChecks: !0, literals: oa(d), isIdentifierStart: E(c) && c, isIdentifierContinue: E(e) && e },
			    D = !1;g.$$runningExpensiveChecks = function () {
				return D;
			};return g;
		}];
	}function vf() {
		this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
			return vd(function (b) {
				a.$evalAsync(b);
			}, b);
		}];
	}function wf() {
		this.$get = ["$browser", "$exceptionHandler", function (a, b) {
			return vd(function (b) {
				a.defer(b);
			}, b);
		}];
	}function vd(a, b) {
		function d() {
			this.$$state = { status: 0 };
		}function c(a, b) {
			return function (c) {
				b.call(a, c);
			};
		}function e(c) {
			!c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
				var a, d, e;e = c.pending;c.processScheduled = !1;c.pending = void 0;for (var f = 0, g = e.length; f < g; ++f) {
					d = e[f][0];a = e[f][c.status];try {
						E(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
					} catch (h) {
						d.reject(h), b(h);
					}
				}
			}));
		}
		function f() {
			this.promise = new d();
		}var g = O("$q", TypeError);P(d.prototype, { then: function then(a, b, c) {
				if (y(a) && y(b) && y(c)) return this;var d = new f();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && e(this.$$state);return d.promise;
			}, "catch": function _catch(a) {
				return this.then(null, a);
			}, "finally": function _finally(a, b) {
				return this.then(function (b) {
					return k(b, !0, a);
				}, function (b) {
					return k(b, !1, a);
				}, b);
			} });P(f.prototype, { resolve: function resolve(a) {
				this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a));
			}, $$resolve: function $$resolve(a) {
				function d(a) {
					k || (k = !0, h.$$resolve(a));
				}function f(a) {
					k || (k = !0, h.$$reject(a));
				}var g,
				    h = this,
				    k = !1;try {
					if (J(a) || E(a)) g = a && a.then;E(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state));
				} catch (l) {
					f(l), b(l);
				}
			}, reject: function reject(a) {
				this.promise.$$state.status || this.$$reject(a);
			}, $$reject: function $$reject(a) {
				this.promise.$$state.value = a;this.promise.$$state.status = 2;e(this.promise.$$state);
			}, notify: function notify(c) {
				var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && a(function () {
					for (var a, e, f = 0, g = d.length; f < g; f++) {
						e = d[f][0];a = d[f][3];try {
							e.notify(E(a) ? a(c) : c);
						} catch (h) {
							b(h);
						}
					}
				});
			} });var h = function h(a, b) {
			var c = new f();b ? c.resolve(a) : c.reject(a);return c.promise;
		},
		    k = function k(a, b, c) {
			var d = null;try {
				E(c) && (d = c());
			} catch (e) {
				return h(e, !1);
			}return d && E(d.then) ? d.then(function () {
				return h(a, b);
			}, function (a) {
				return h(a, !1);
			}) : h(a, b);
		},
		    l = function l(a, b, c, d) {
			var e = new f();e.resolve(a);return e.promise.then(b, c, d);
		},
		    m = function m(a) {
			if (!E(a)) throw g("norslvr", a);var b = new f();a(function (a) {
				b.resolve(a);
			}, function (a) {
				b.reject(a);
			});return b.promise;
		};m.prototype = d.prototype;m.defer = function () {
			var a = new f();a.resolve = c(a, a.resolve);a.reject = c(a, a.reject);a.notify = c(a, a.notify);return a;
		};m.reject = function (a) {
			var b = new f();b.reject(a);return b.promise;
		};m.when = l;m.resolve = l;m.all = function (a) {
			var b = new f(),
			    c = 0,
			    d = K(a) ? [] : {};q(a, function (a, e) {
				c++;l(a).then(function (a) {
					d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
				}, function (a) {
					d.hasOwnProperty(e) || b.reject(a);
				});
			});0 === c && b.resolve(d);return b.promise;
		};return m;
	}function Ff() {
		this.$get = ["$window", "$timeout", function (a, b) {
			var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
			    c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
			    e = !!d,
			    f = e ? function (a) {
				var b = d(a);return function () {
					c(b);
				};
			} : function (a) {
				var c = b(a, 16.66, !1);return function () {
					b.cancel(c);
				};
			};f.supported = e;return f;
		}];
	}function uf() {
		function a(a) {
			function b() {
				this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$id = ++pb;this.$$ChildScope = null;
			}b.prototype = a;return b;
		}var b = 10,
		    d = O("$rootScope"),
		    c = null,
		    e = null;this.digestTtl = function (a) {
			arguments.length && (b = a);return b;
		};this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
			function k(a) {
				a.currentScope.$$destroyed = !0;
			}function l(a) {
				9 === Ba && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null;
			}function m() {
				this.$id = ++pb;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$watchersCount = 0;this.$$isolateBindings = null;
			}function n(a) {
				if (D.$$phase) throw d("inprog", D.$$phase);D.$$phase = a;
			}function p(a, b) {
				do {
					a.$$watchersCount += b;
				} while (a = a.$parent);
			}function x(a, b, c) {
				do {
					a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
				} while (a = a.$parent);
			}function s() {}function z() {
				for (; w.length;) {
					try {
						w.shift()();
					} catch (a) {
						f(a);
					}
				}e = null;
			}function r() {
				null === e && (e = h.defer(function () {
					D.$apply(z);
				}));
			}m.prototype = { constructor: m, $new: function $new(b, c) {
					var d;c = c || this;b ? (d = new m(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope());d.$parent = c;d.$$prevSibling = c.$$childTail;c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;(b || c != this) && d.$on("$destroy", k);return d;
				}, $watch: function $watch(a, b, d, e) {
					var f = g(a);if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);var h = this,
					    k = h.$$watchers,
					    l = { fn: b, last: s, get: f, exp: e || a, eq: !!d };c = null;E(b) || (l.fn = C);k || (k = h.$$watchers = []);k.unshift(l);p(this, 1);return function () {
						0 <= $a(k, l) && p(h, -1);c = null;
					};
				}, $watchGroup: function $watchGroup(a, b) {
					function c() {
						h = !1;k ? (k = !1, b(e, e, g)) : b(e, d, g);
					}var d = Array(a.length),
					    e = Array(a.length),
					    f = [],
					    g = this,
					    h = !1,
					    k = !0;if (!a.length) {
						var l = !0;g.$evalAsync(function () {
							l && b(e, e, g);
						});return function () {
							l = !1;
						};
					}if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
						e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
					});q(a, function (a, b) {
						var k = g.$watch(a, function (a, f) {
							e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
						});f.push(k);
					});return function () {
						for (; f.length;) {
							f.shift()();
						}
					};
				}, $watchCollection: function $watchCollection(a, b) {
					function c(a) {
						e = a;var b, d, g, h;if (!y(e)) {
							if (J(e)) {
								if (xa(e)) for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) {
									h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
								} else {
									f !== p && (f = p = {}, u = 0, l++);a = 0;for (b in e) {
										sa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
									}if (u > a) for (b in l++, f) {
										sa.call(e, b) || (u--, delete f[b]);
									}
								}
							} else f !== e && (f = e, l++);return l;
						}
					}c.$stateful = !0;var d = this,
					    e,
					    f,
					    h,
					    k = 1 < b.length,
					    l = 0,
					    m = g(a, c),
					    n = [],
					    p = {},
					    r = !0,
					    u = 0;return this.$watch(m, function () {
						r ? (r = !1, b(e, e, d)) : b(e, h, d);if (k) if (J(e)) {
							if (xa(e)) {
								h = Array(e.length);for (var a = 0; a < e.length; a++) {
									h[a] = e[a];
								}
							} else for (a in h = {}, e) {
								sa.call(e, a) && (h[a] = e[a]);
							}
						} else h = e;
					});
				}, $digest: function $digest() {
					var a,
					    g,
					    k,
					    l,
					    m,
					    p,
					    r,
					    x,
					    q = b,
					    w,
					    y = [],
					    C,
					    F;n("$digest");h.$$checkUrlChange();this === D && null !== e && (h.defer.cancel(e), z());c = null;do {
						x = !1;w = this;for (p = 0; p < u.length; p++) {
							try {
								F = u[p], F.scope.$eval(F.expression, F.locals);
							} catch (G) {
								f(G);
							}c = null;
						}u.length = 0;a: do {
							if (p = w.$$watchers) for (r = p.length; r--;) {
								try {
									if (a = p[r]) if (m = a.get, (g = m(w)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) x = !0, c = a, a.last = a.eq ? oa(g, null) : g, l = a.fn, l(g, k === s ? g : k, w), 5 > q && (C = 4 - q, y[C] || (y[C] = []), y[C].push({ msg: E(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, newVal: g, oldVal: k }));else if (a === c) {
										x = !1;break a;
									}
								} catch (I) {
									f(I);
								}
							}if (!(p = w.$$watchersCount && w.$$childHead || w !== this && w.$$nextSibling)) for (; w !== this && !(p = w.$$nextSibling);) {
								w = w.$parent;
							}
						} while (w = p);if ((x || u.length) && !q--) throw D.$$phase = null, d("infdig", b, y);
					} while (x || u.length);for (D.$$phase = null; v < t.length;) {
						try {
							t[v++]();
						} catch (J) {
							f(J);
						}
					}t.length = v = 0;
				}, $destroy: function $destroy() {
					if (!this.$$destroyed) {
						var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;this === D && h.$$applicationDestroyed();p(this, -this.$$watchersCount);for (var b in this.$$listenerCount) {
							x(this, this.$$listenerCount[b], b);
						}a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;this.$on = this.$watch = this.$watchGroup = function () {
							return C;
						};this.$$listeners = {};this.$$nextSibling = null;l(this);
					}
				}, $eval: function $eval(a, b) {
					return g(a)(this, b);
				}, $evalAsync: function $evalAsync(a, b) {
					D.$$phase || u.length || h.defer(function () {
						u.length && D.$digest();
					});u.push({ scope: this, expression: g(a), locals: b });
				}, $$postDigest: function $$postDigest(a) {
					t.push(a);
				}, $apply: function $apply(a) {
					try {
						n("$apply");try {
							return this.$eval(a);
						} finally {
							D.$$phase = null;
						}
					} catch (b) {
						f(b);
					} finally {
						try {
							D.$digest();
						} catch (c) {
							throw f(c), c;
						}
					}
				}, $applyAsync: function $applyAsync(a) {
					function b() {
						c.$eval(a);
					}var c = this;a && w.push(b);
					a = g(a);r();
				}, $on: function $on(a, b) {
					var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do {
						d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
					} while (d = d.$parent);var e = this;return function () {
						var d = c.indexOf(b);-1 !== d && (c[d] = null, x(e, 1, a));
					};
				}, $emit: function $emit(a, b) {
					var c = [],
					    d,
					    e = this,
					    g = !1,
					    h = { name: a, targetScope: e, stopPropagation: function stopPropagation() {
							g = !0;
						}, preventDefault: function preventDefault() {
							h.defaultPrevented = !0;
						}, defaultPrevented: !1 },
					    k = ab([h], arguments, 1),
					    l,
					    m;do {
						d = e.$$listeners[a] || c;h.currentScope = e;l = 0;for (m = d.length; l < m; l++) {
							if (d[l]) try {
								d[l].apply(null, k);
							} catch (n) {
								f(n);
							} else d.splice(l, 1), l--, m--;
						}if (g) return h.currentScope = null, h;e = e.$parent;
					} while (e);h.currentScope = null;return h;
				}, $broadcast: function $broadcast(a, b) {
					var c = this,
					    d = this,
					    e = { name: a, targetScope: this, preventDefault: function preventDefault() {
							e.defaultPrevented = !0;
						}, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;for (var g = ab([e], arguments, 1), h, k; c = d;) {
						e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (k = d.length; h < k; h++) {
							if (d[h]) try {
								d[h].apply(null, g);
							} catch (l) {
								f(l);
							} else d.splice(h, 1), h--, k--;
						}if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) {
							c = c.$parent;
						}
					}e.currentScope = null;return e;
				} };var D = new m(),
			    u = D.$$asyncQueue = [],
			    t = D.$$postDigestQueue = [],
			    w = D.$$applyAsyncQueue = [],
			    v = 0;return D;
		}];
	}function ne() {
		var a = /^\s*(https?|ftp|mailto|tel|file):/,
		    b = /^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist = function (b) {
			return v(b) ? (a = b, this) : a;
		};this.imgSrcSanitizationWhitelist = function (a) {
			return v(a) ? (b = a, this) : b;
		};
		this.$get = function () {
			return function (d, c) {
				var e = c ? b : a,
				    f;f = pa(d).href;return "" === f || f.match(e) ? d : "unsafe:" + f;
			};
		};
	}function ng(a) {
		if ("self" === a) return a;if (I(a)) {
			if (-1 < a.indexOf("***")) throw ra("iwcard", a);a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + a + "$");
		}if (Xa(a)) return new RegExp("^" + a.source + "$");throw ra("imatcher");
	}function xd(a) {
		var b = [];v(a) && q(a, function (a) {
			b.push(ng(a));
		});return b;
	}function yf() {
		this.SCE_CONTEXTS = ma;var a = ["self"],
		    b = [];this.resourceUrlWhitelist = function (b) {
			arguments.length && (a = xd(b));return a;
		};this.resourceUrlBlacklist = function (a) {
			arguments.length && (b = xd(a));return b;
		};this.$get = ["$injector", function (d) {
			function c(a, b) {
				return "self" === a ? id(b) : !!a.exec(b.href);
			}function e(a) {
				var b = function b(a) {
					this.$$unwrapTrustedValue = function () {
						return a;
					};
				};a && (b.prototype = new a());b.prototype.valueOf = function () {
					return this.$$unwrapTrustedValue();
				};b.prototype.toString = function () {
					return this.$$unwrapTrustedValue().toString();
				};return b;
			}var f = function f(a) {
				throw ra("unsafe");
			};d.has("$sanitize") && (f = d.get("$sanitize"));var g = e(),
			    h = {};h[ma.HTML] = e(g);h[ma.CSS] = e(g);h[ma.URL] = e(g);h[ma.JS] = e(g);h[ma.RESOURCE_URL] = e(h[ma.URL]);return { trustAs: function trustAs(a, b) {
					var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw ra("icontext", a, b);if (null === b || y(b) || "" === b) return b;if ("string" !== typeof b) throw ra("itype", a);return new c(b);
				}, getTrusted: function getTrusted(d, e) {
					if (null === e || y(e) || "" === e) return e;var g = h.hasOwnProperty(d) ? h[d] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (d === ma.RESOURCE_URL) {
						var g = pa(e.toString()),
						    n,
						    p,
						    x = !1;n = 0;for (p = a.length; n < p; n++) {
							if (c(a[n], g)) {
								x = !0;break;
							}
						}if (x) for (n = 0, p = b.length; n < p; n++) {
							if (c(b[n], g)) {
								x = !1;break;
							}
						}if (x) return e;throw ra("insecurl", e.toString());
					}if (d === ma.HTML) return f(e);throw ra("unsafe");
				}, valueOf: function valueOf(a) {
					return a instanceof g ? a.$$unwrapTrustedValue() : a;
				} };
		}];
	}function xf() {
		var a = !0;this.enabled = function (b) {
			arguments.length && (a = !!b);return a;
		};this.$get = ["$parse", "$sceDelegate", function (b, d) {
			if (a && 8 > Ba) throw ra("iequirks");var c = fa(ma);c.isEnabled = function () {
				return a;
			};
			c.trustAs = d.trustAs;c.getTrusted = d.getTrusted;c.valueOf = d.valueOf;a || (c.trustAs = c.getTrusted = function (a, b) {
				return b;
			}, c.valueOf = Ya);c.parseAs = function (a, d) {
				var e = b(d);return e.literal && e.constant ? e : b(d, function (b) {
					return c.getTrusted(a, b);
				});
			};var e = c.parseAs,
			    f = c.getTrusted,
			    g = c.trustAs;q(ma, function (a, b) {
				var d = L(b);c[eb("parse_as_" + d)] = function (b) {
					return e(a, b);
				};c[eb("get_trusted_" + d)] = function (b) {
					return f(a, b);
				};c[eb("trust_as_" + d)] = function (b) {
					return g(a, b);
				};
			});return c;
		}];
	}function zf() {
		this.$get = ["$window", "$document", function (a, b) {
			var d = {},
			    c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
			    e = $((/android (\d+)/.exec(L((a.navigator || {}).userAgent)) || [])[1]),
			    f = /Boxee/i.test((a.navigator || {}).userAgent),
			    g = b[0] || {},
			    h,
			    k = /^(Moz|webkit|ms)(?=[A-Z])/,
			    l = g.body && g.body.style,
			    m = !1,
			    n = !1;if (l) {
				for (var p in l) {
					if (m = k.exec(p)) {
						h = m[0];h = h[0].toUpperCase() + h.substr(1);break;
					}
				}h || (h = "WebkitOpacity" in l && "webkit");m = !!("transition" in l || h + "Transition" in l);n = !!("animation" in l || h + "Animation" in l);!e || m && n || (m = I(l.webkitTransition), n = I(l.webkitAnimation));
			}return { history: !(!c || 4 > e || f), hasEvent: function hasEvent(a) {
					if ("input" === a && 11 >= Ba) return !1;if (y(d[a])) {
						var b = g.createElement("div");d[a] = "on" + a in b;
					}return d[a];
				}, csp: Fa(), vendorPrefix: h, transitions: m, animations: n, android: e };
		}];
	}function Bf() {
		var a;this.httpOptions = function (b) {
			return b ? (a = b, this) : a;
		};this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
			function f(g, h) {
				f.totalPendingRequests++;if (!I(g) || y(b.get(g))) g = e.getTrustedResourceUrl(g);
				var k = d.defaults && d.defaults.transformResponse;K(k) ? k = k.filter(function (a) {
					return a !== dc;
				}) : k === dc && (k = null);return d.get(g, P({ cache: b, transformResponse: k }, a))["finally"](function () {
					f.totalPendingRequests--;
				}).then(function (a) {
					b.put(g, a.data);return a.data;
				}, function (a) {
					if (!h) throw og("tpload", g, a.status, a.statusText);return c.reject(a);
				});
			}f.totalPendingRequests = 0;return f;
		}];
	}function Cf() {
		this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
			return { findBindings: function findBindings(a, b, d) {
					a = a.getElementsByClassName("ng-binding");
					var g = [];q(a, function (a) {
						var c = da.element(a).data("$binding");c && q(c, function (c) {
							d ? new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)").test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a);
						});
					});return g;
				}, findModels: function findModels(a, b, d) {
					for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
						var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');if (k.length) return k;
					}
				}, getLocation: function getLocation() {
					return d.url();
				}, setLocation: function setLocation(b) {
					b !== d.url() && (d.url(b), a.$digest());
				}, whenStable: function whenStable(a) {
					b.notifyWhenNoOutstandingRequests(a);
				} };
		}];
	}
	function Df() {
		this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
			function f(f, k, l) {
				E(f) || (l = k, k = f, f = C);var m = ya.call(arguments, 3),
				    n = v(l) && !l,
				    p = (n ? c : d).defer(),
				    x = p.promise,
				    q;q = b.defer(function () {
					try {
						p.resolve(f.apply(null, m));
					} catch (b) {
						p.reject(b), e(b);
					} finally {
						delete g[x.$$timeoutId];
					}n || a.$apply();
				}, k);x.$$timeoutId = q;g[q] = p;return x;
			}var g = {};f.cancel = function (a) {
				return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1;
			};return f;
		}];
	}function pa(a) {
		Ba && (X.setAttribute("href", a), a = X.href);X.setAttribute("href", a);return { href: X.href, protocol: X.protocol ? X.protocol.replace(/:$/, "") : "", host: X.host, search: X.search ? X.search.replace(/^\?/, "") : "", hash: X.hash ? X.hash.replace(/^#/, "") : "", hostname: X.hostname, port: X.port, pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname };
	}function id(a) {
		a = I(a) ? pa(a) : a;return a.protocol === yd.protocol && a.host === yd.host;
	}function Ef() {
		this.$get = ca(F);
	}function zd(a) {
		function b(a) {
			try {
				return decodeURIComponent(a);
			} catch (b) {
				return a;
			}
		}
		var d = a[0] || {},
		    c = {},
		    e = "";return function () {
			var a, g, h, k, l;a = d.cookie || "";if (a !== e) for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) {
				g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));
			}return c;
		};
	}function If() {
		this.$get = zd;
	}function Lc(a) {
		function b(d, c) {
			if (J(d)) {
				var e = {};q(d, function (a, c) {
					e[c] = b(c, a);
				});return e;
			}return a.factory(d + "Filter", c);
		}this.register = b;this.$get = ["$injector", function (a) {
			return function (b) {
				return a.get(b + "Filter");
			};
		}];b("currency", Ad);b("date", Bd);
		b("filter", pg);b("json", qg);b("limitTo", rg);b("lowercase", sg);b("number", Cd);b("orderBy", Dd);b("uppercase", tg);
	}function pg() {
		return function (a, b, d) {
			if (!xa(a)) {
				if (null == a) return a;throw O("filter")("notarray", a);
			}var c;switch (lc(b)) {case "function":
					break;case "boolean":case "null":case "number":case "string":
					c = !0;case "object":
					b = ug(b, d, c);break;default:
					return a;}return Array.prototype.filter.call(a, b);
		};
	}function ug(a, b, d) {
		var c = J(a) && "$" in a;!0 === b ? b = na : E(b) || (b = function b(a, _b) {
			if (y(a)) return !1;if (null === a || null === _b) return a === _b;if (J(_b) || J(a) && !uc(a)) return !1;a = L("" + a);_b = L("" + _b);return -1 !== a.indexOf(_b);
		});return function (e) {
			return c && !J(e) ? La(e, a.$, b, !1) : La(e, a, b, d);
		};
	}function La(a, b, d, c, e) {
		var f = lc(a),
		    g = lc(b);if ("string" === g && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c);if (K(a)) return a.some(function (a) {
			return La(a, b, d, c);
		});switch (f) {case "object":
				var h;if (c) {
					for (h in a) {
						if ("$" !== h.charAt(0) && La(a[h], b, d, !0)) return !0;
					}return e ? !1 : La(a, b, d, !1);
				}if ("object" === g) {
					for (h in b) {
						if (e = b[h], !E(e) && !y(e) && (f = "$" === h, !La(f ? a : a[h], e, d, f, f))) return !1;
					}return !0;
				}return d(a, b);case "function":
				return !1;default:
				return d(a, b);}
	}function lc(a) {
		return null === a ? "null" : typeof a === 'undefined' ? 'undefined' : _typeof(a);
	}function Ad(a) {
		var b = a.NUMBER_FORMATS;return function (a, c, e) {
			y(c) && (c = b.CURRENCY_SYM);y(e) && (e = b.PATTERNS[1].maxFrac);return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c);
		};
	}function Cd(a) {
		var b = a.NUMBER_FORMATS;return function (a, c) {
			return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
		};
	}function vg(a) {
		var b = 0,
		    d,
		    c,
		    e,
		    f,
		    g;-1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);for (e = 0; a.charAt(e) == mc; e++) {}if (e == (g = a.length)) d = [0], c = 1;else {
			for (g--; a.charAt(g) == mc;) {
				g--;
			}c -= e;d = [];for (f = 0; e <= g; e++, f++) {
				d[f] = +a.charAt(e);
			}
		}c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);return { d: d, e: b, i: c };
	}function wg(a, b, d, c) {
		var e = a.d,
		    f = e.length - a.i;b = y(b) ? Math.min(Math.max(d, f), c) : +b;d = b + a.i;c = e[d];if (0 < d) {
			e.splice(Math.max(a.i, d));for (var g = d; g < e.length; g++) {
				e[g] = 0;
			}
		} else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) {
			e[g] = 0;
		}if (5 <= c) if (0 > d - 1) {
			for (c = 0; c > d; c--) {
				e.unshift(0), a.i++;
			}e.unshift(1);a.i++;
		} else e[d - 1]++;for (; f < Math.max(0, b); f++) {
			e.push(0);
		}if (b = e.reduceRight(function (a, b, c, d) {
			b += a;d[c] = b % 10;return Math.floor(b / 10);
		}, 0)) e.unshift(b), a.i++;
	}function Ed(a, b, d, c, e) {
		if (!I(a) && !Q(a) || isNaN(a)) return "";var f = !isFinite(a),
		    g = !1,
		    h = Math.abs(a) + "",
		    k = "";if (f) k = '\u221E';else {
			g = vg(h);wg(g, e, b.minFrac, b.maxFrac);k = g.d;h = g.i;e = g.e;f = [];for (g = k.reduce(function (a, b) {
				return a && !b;
			}, !0); 0 > h;) {
				k.unshift(0), h++;
			}0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);h = [];for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) {
				h.unshift(k.splice(-b.gSize, k.length).join(""));
			}k.length && h.unshift(k.join(""));k = h.join(d);f.length && (k += c + f.join(""));e && (k += "e+" + e);
		}return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf;
	}function Lb(a, b, d, c) {
		var e = "";if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");for (a = "" + a; a.length < b;) {
			a = mc + a;
		}d && (a = a.substr(a.length - b));return e + a;
	}function W(a, b, d, c, e) {
		d = d || 0;return function (f) {
			f = f["get" + a]();if (0 < d || f > -d) f += d;0 === f && -12 == d && (f = 12);return Lb(f, b, c, e);
		};
	}function kb(a, b, d) {
		return function (c, e) {
			var f = c["get" + a](),
			    g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);return e[g][f];
		};
	}function Hd(a) {
		var b = new Date(a, 0, 1).getDay();return new Date(a, 0, (4 >= b ? 5 : 12) - b);
	}function Id(a) {
		return function (b) {
			var d = Hd(b.getFullYear());b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;b = 1 + Math.round(b / 6048E5);return Lb(b, a);
		};
	}function nc(a, b) {
		return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1];
	}function Bd(a) {
		function b(a) {
			var b;if (b = a.match(d)) {
				a = new Date(0);var f = 0,
				    g = 0,
				    h = b[8] ? a.setUTCFullYear : a.setFullYear,
				    k = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11]));h.call(a, $(b[1]), $(b[2]) - 1, $(b[3]));f = $(b[4] || 0) - f;g = $(b[5] || 0) - g;h = $(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));k.call(a, f, g, h, b);
			}return a;
		}var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, d, f) {
			var g = "",
			    h = [],
			    k,
			    l;d = d || "mediumDate";d = a.DATETIME_FORMATS[d] || d;I(c) && (c = xg.test(c) ? $(c) : b(c));Q(c) && (c = new Date(c));if (!ha(c) || !isFinite(c.getTime())) return c;for (; d;) {
				(l = yg.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
			}var m = c.getTimezoneOffset();f && (m = xc(f, m), c = Tb(c, f, !0));q(h, function (b) {
				k = zg[b];g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
			});return g;
		};
	}function qg() {
		return function (a, b) {
			y(b) && (b = 2);return cb(a, b);
		};
	}function rg() {
		return function (a, b, d) {
			b = Infinity === Math.abs(Number(b)) ? Number(b) : $(b);if (isNaN(b)) return a;Q(a) && (a = a.toString());if (!K(a) && !I(a)) return a;d = !d || isNaN(d) ? 0 : $(d);d = 0 > d ? Math.max(0, a.length + d) : d;return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d);
		};
	}function Dd(a) {
		function b(b, d) {
			d = d ? -1 : 1;return b.map(function (b) {
				var c = 1,
				    h = Ya;if (E(b)) h = b;else if (I(b)) {
					if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);if ("" !== b && (h = a(b), h.constant)) var k = h(),
					    h = function h(a) {
						return a[k];
					};
				}return { get: h,
					descending: c * d };
			});
		}function d(a) {
			switch (typeof a === 'undefined' ? 'undefined' : _typeof(a)) {case "number":case "boolean":case "string":
					return !0;default:
					return !1;}
		}return function (a, e, f) {
			if (null == a) return a;if (!xa(a)) throw O("orderBy")("notarray", a);K(e) || (e = [e]);0 === e.length && (e = ["+"]);var g = b(e, f);g.push({ get: function get() {
					return {};
				}, descending: f ? -1 : 1 });a = Array.prototype.map.call(a, function (a, b) {
				return { value: a, predicateValues: g.map(function (c) {
						var e = c.get(a);c = typeof e === 'undefined' ? 'undefined' : _typeof(e);if (null === e) c = "string", e = "null";else if ("string" === c) e = e.toLowerCase();else if ("object" === c) a: {
							if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;if (uc(e) && (e = e.toString(), d(e))) break a;e = b;
						}return { value: e, type: c };
					}) };
			});a.sort(function (a, b) {
				for (var c = 0, d = 0, e = g.length; d < e; ++d) {
					var c = a.predicateValues[d],
					    f = b.predicateValues[d],
					    x = 0;c.type === f.type ? c.value !== f.value && (x = c.value < f.value ? -1 : 1) : x = c.type < f.type ? -1 : 1;if (c = x * g[d].descending) break;
				}return c;
			});return a = a.map(function (a) {
				return a.value;
			});
		};
	}function Ma(a) {
		E(a) && (a = { link: a });a.restrict = a.restrict || "AC";return ca(a);
	}function Jd(a, b, d, c, e) {
		var f = this,
		    g = [];f.$error = {};f.$$success = {};f.$pending = void 0;f.$name = e(b.name || b.ngForm || "")(d);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;f.$$parentForm = Mb;f.$rollbackViewValue = function () {
			q(g, function (a) {
				a.$rollbackViewValue();
			});
		};f.$commitViewValue = function () {
			q(g, function (a) {
				a.$commitViewValue();
			});
		};f.$addControl = function (a) {
			Ra(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);a.$$parentForm = f;
		};f.$$renameControl = function (a, b) {
			var c = a.$name;f[c] === a && delete f[c];
			f[b] = a;a.$name = b;
		};f.$removeControl = function (a) {
			a.$name && f[a.$name] === a && delete f[a.$name];q(f.$pending, function (b, c) {
				f.$setValidity(c, null, a);
			});q(f.$error, function (b, c) {
				f.$setValidity(c, null, a);
			});q(f.$$success, function (b, c) {
				f.$setValidity(c, null, a);
			});$a(g, a);a.$$parentForm = Mb;
		};Kd({ ctrl: this, $element: a, set: function set(a, b, c) {
				var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
			}, unset: function unset(a, b, c) {
				var d = a[b];d && ($a(d, c), 0 === d.length && delete a[b]);
			}, $animate: c });f.$setDirty = function () {
			c.removeClass(a, Va);
			c.addClass(a, Nb);f.$dirty = !0;f.$pristine = !1;f.$$parentForm.$setDirty();
		};f.$setPristine = function () {
			c.setClass(a, Va, Nb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;q(g, function (a) {
				a.$setPristine();
			});
		};f.$setUntouched = function () {
			q(g, function (a) {
				a.$setUntouched();
			});
		};f.$setSubmitted = function () {
			c.addClass(a, "ng-submitted");f.$submitted = !0;f.$$parentForm.$setSubmitted();
		};
	}function oc(a) {
		a.$formatters.push(function (b) {
			return a.$isEmpty(b) ? b : b.toString();
		});
	}function lb(a, b, d, c, e, f) {
		var g = L(b[0].type);
		if (!e.android) {
			var h = !1;b.on("compositionstart", function () {
				h = !0;
			});b.on("compositionend", function () {
				h = !1;l();
			});
		}var k,
		    l = function l(a) {
			k && (f.defer.cancel(k), k = null);if (!h) {
				var e = b.val();a = a && a.type;"password" === g || d.ngTrim && "false" === d.ngTrim || (e = V(e));(c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a);
			}
		};if (e.hasEvent("input")) b.on("input", l);else {
			var m = function m(a, b, c) {
				k || (k = f.defer(function () {
					k = null;b && b.value === c || l(a);
				}));
			};b.on("keydown", function (a) {
				var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
			});if (e.hasEvent("paste")) b.on("paste cut", m);
		}b.on("change", l);if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
			if (!k) {
				var b = this.validity,
				    c = b.badInput,
				    d = b.typeMismatch;k = f.defer(function () {
					k = null;b.badInput === c && b.typeMismatch === d || l(a);
				});
			}
		});c.$render = function () {
			var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;b.val() !== a && b.val(a);
		};
	}function Ob(a, b) {
		return function (d, c) {
			var e, f;if (ha(d)) return d;if (I(d)) {
				'"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));if (Ag.test(d)) return new Date(d);a.lastIndex = 0;if (e = a.exec(d)) return e.shift(), f = c ? { yyyy: c.getFullYear(), MM: c.getMonth() + 1, dd: c.getDate(), HH: c.getHours(), mm: c.getMinutes(), ss: c.getSeconds(), sss: c.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, q(e, function (a, c) {
					c < b.length && (f[b[c]] = +a);
				}), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
			}return NaN;
		};
	}function mb(a, b, d, c) {
		return function (e, f, g, h, k, l, m) {
			function n(a) {
				return a && !(a.getTime && a.getTime() !== a.getTime());
			}function p(a) {
				return v(a) && !ha(a) ? d(a) || void 0 : a;
			}Md(e, f, g, h);lb(e, f, g, h, k, l);var q = h && h.$options && h.$options.timezone,
			    s;h.$$parserName = a;h.$parsers.push(function (a) {
				if (h.$isEmpty(a)) return null;if (b.test(a)) return a = d(a, s), q && (a = Tb(a, q)), a;
			});h.$formatters.push(function (a) {
				if (a && !ha(a)) throw nb("datefmt", a);if (n(a)) return (s = a) && q && (s = Tb(s, q, !0)), m("date")(a, c, q);s = null;return "";
			});if (v(g.min) || g.ngMin) {
				var z;h.$validators.min = function (a) {
					return !n(a) || y(z) || d(a) >= z;
				};g.$observe("min", function (a) {
					z = p(a);h.$validate();
				});
			}if (v(g.max) || g.ngMax) {
				var r;h.$validators.max = function (a) {
					return !n(a) || y(r) || d(a) <= r;
				};g.$observe("max", function (a) {
					r = p(a);h.$validate();
				});
			}
		};
	}function Md(a, b, d, c) {
		(c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function (a) {
			var c = b.prop("validity") || {};return c.badInput || c.typeMismatch ? void 0 : a;
		});
	}function Nd(a, b, d, c, e) {
		if (v(c)) {
			a = a(c);if (!a.constant) throw nb("constexpr", d, c);return a(b);
		}return e;
	}function pc(a, b) {
		a = "ngClass" + a;return ["$animate", function (d) {
			function c(a, b) {
				var c = [],
				    d = 0;a: for (; d < a.length; d++) {
					for (var e = a[d], m = 0; m < b.length; m++) {
						if (e == b[m]) continue a;
					}c.push(e);
				}return c;
			}function e(a) {
				var b = [];return K(a) ? (q(a, function (a) {
					b = b.concat(e(a));
				}), b) : I(a) ? a.split(" ") : J(a) ? (q(a, function (a, c) {
					a && (b = b.concat(c.split(" ")));
				}), b) : a;
			}return { restrict: "AC", link: function link(f, g, h) {
					function k(a) {
						a = l(a, 1);h.$addClass(a);
					}function l(a, b) {
						var c = g.data("$classCounts") || S(),
						    d = [];q(a, function (a) {
							if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
						});g.data("$classCounts", c);return d.join(" ");
					}function m(a, b) {
						var e = c(b, a),
						    f = c(a, b),
						    e = l(e, 1),
						    f = l(f, -1);e && e.length && d.addClass(g, e);f && f.length && d.removeClass(g, f);
					}function n(a) {
						if (!0 === b || (f.$index & 1) === b) {
							var c = e(a || []);if (!p) k(c);else if (!na(a, p)) {
								var d = e(p);m(d, c);
							}
						}p = K(a) ? a.map(function (a) {
							return fa(a);
						}) : fa(a);
					}var p;f.$watch(h[a], n, !0);h.$observe("class", function (b) {
						n(f.$eval(h[a]));
					});"ngClass" !== a && f.$watch("$index", function (c, d) {
						var g = c & 1;if (g !== (d & 1)) {
							var m = e(f.$eval(h[a]));g === b ? k(m) : (g = l(m, -1), h.$removeClass(g));
						}
					});
				} };
		}];
	}
	function Kd(a) {
		function b(a, b) {
			b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
		}function d(a, c) {
			a = a ? "-" + Bc(a, "-") : "";b(ob + a, !0 === c);b(Od + a, !1 === c);
		}var c = a.ctrl,
		    e = a.$element,
		    f = {},
		    g = a.set,
		    h = a.unset,
		    k = a.$animate;f[Od] = !(f[ob] = e.hasClass(ob));c.$setValidity = function (a, e, f) {
			y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));Ea(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;d(a, e);c.$$parentForm.$setValidity(a, e, c);
		};
	}function Pd(a) {
		if (a) for (var b in a) {
			if (a.hasOwnProperty(b)) return !1;
		}return !0;
	}var Bg = /^\/(.+)\/([a-z]*)$/,
	    sa = Object.prototype.hasOwnProperty,
	    L = function L(a) {
		return I(a) ? a.toLowerCase() : a;
	},
	    ub = function ub(a) {
		return I(a) ? a.toUpperCase() : a;
	},
	    Ba,
	    G,
	    Y,
	    ya = [].slice,
	    ag = [].splice,
	    Cg = [].push,
	    ja = Object.prototype.toString,
	    vc = Object.getPrototypeOf,
	    za = O("ng"),
	    da = F.angular || (F.angular = {}),
	    Vb,
	    pb = 0;Ba = F.document.documentMode;C.$inject = [];Ya.$inject = [];var K = Array.isArray,
	    ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
	    V = function V(a) {
		return I(a) ? a.trim() : a;
	},
	    wd = function wd(a) {
		return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
	},
	    Fa = function Fa() {
		if (!v(Fa.rules)) {
			var a = F.document.querySelector("[ng-csp]") || F.document.querySelector("[data-ng-csp]");if (a) {
				var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");Fa.rules = { noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"), noInlineStyle: !b || -1 !== b.indexOf("no-inline-style") };
			} else {
				a = Fa;try {
					new Function(""), b = !1;
				} catch (d) {
					b = !0;
				}a.rules = { noUnsafeEval: b, noInlineStyle: !1 };
			}
		}return Fa.rules;
	},
	    rb = function rb() {
		if (v(rb.name_)) return rb.name_;var a,
		    b,
		    d = Oa.length,
		    c,
		    e;for (b = 0; b < d; ++b) {
			if (c = Oa[b], a = F.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
				e = a.getAttribute(c + "jq");break;
			}
		}return rb.name_ = e;
	},
	    de = /:/g,
	    Oa = ["ng-", "data-ng-", "ng:", "x-ng-"],
	    ie = /[A-Z]/g,
	    Cc = !1,
	    Na = 3,
	    me = { full: "1.5.6", major: 1, minor: 5, dot: 6, codeName: "arrow-stringification" };T.expando = "ng339";var gb = T.cache = {},
	    Of = 1;T._data = function (a) {
		return this.cache[a[this.expando]] || {};
	};var Jf = /([\:\-\_]+(.))/g,
	    Kf = /^moz([A-Z])/,
	    yb = { mouseleave: "mouseout", mouseenter: "mouseover" },
	    Xb = O("jqLite"),
	    Nf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
	    Wb = /<|&#?\w+;/,
	    Lf = /<([\w:-]+)/,
	    Mf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	    ga = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ga.optgroup = ga.option;ga.tbody = ga.tfoot = ga.colgroup = ga.caption = ga.thead;ga.th = ga.td;var Tf = F.Node.prototype.contains || function (a) {
		return !!(this.compareDocumentPosition(a) & 16);
	},
	    Pa = T.prototype = { ready: function ready(a) {
			function b() {
				d || (d = !0, a());
			}var d = !1;"complete" === F.document.readyState ? F.setTimeout(b) : (this.on("DOMContentLoaded", b), T(F).on("load", b));
		}, toString: function toString() {
			var a = [];q(this, function (b) {
				a.push("" + b);
			});return "[" + a.join(", ") + "]";
		}, eq: function eq(a) {
			return 0 <= a ? G(this[a]) : G(this[this.length + a]);
		}, length: 0, push: Cg, sort: [].sort, splice: [].splice },
	    Eb = {};q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
		Eb[L(a)] = a;
	});var Uc = {};q("input select option textarea button form details".split(" "), function (a) {
		Uc[a] = !0;
	});var bd = { ngMinlength: "minlength",
		ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };q({ data: Zb, removeData: fb, hasData: function hasData(a) {
			for (var b in gb[a.ng339]) {
				return !0;
			}return !1;
		}, cleanData: function cleanData(a) {
			for (var b = 0, d = a.length; b < d; b++) {
				fb(a[b]);
			}
		} }, function (a, b) {
		T[b] = a;
	});q({ data: Zb, inheritedData: Cb, scope: function scope(a) {
			return G.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"]);
		}, isolateScope: function isolateScope(a) {
			return G.data(a, "$isolateScope") || G.data(a, "$isolateScopeNoTemplate");
		}, controller: Rc, injector: function injector(a) {
			return Cb(a, "$injector");
		}, removeAttr: function removeAttr(a, b) {
			a.removeAttribute(b);
		}, hasClass: zb, css: function css(a, b, d) {
			b = eb(b);if (v(d)) a.style[b] = d;else return a.style[b];
		}, attr: function attr(a, b, d) {
			var c = a.nodeType;if (c !== Na && 2 !== c && 8 !== c) if (c = L(b), Eb[c]) {
				if (v(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));else return a[b] || (a.attributes.getNamedItem(b) || C).specified ? c : void 0;
			} else if (v(d)) a.setAttribute(b, d);else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a;
		}, prop: function prop(a, b, d) {
			if (v(d)) a[b] = d;else return a[b];
		}, text: function () {
			function a(a, d) {
				if (y(d)) {
					var c = a.nodeType;return 1 === c || c === Na ? a.textContent : "";
				}a.textContent = d;
			}a.$dv = "";return a;
		}(), val: function val(a, b) {
			if (y(b)) {
				if (a.multiple && "select" === ta(a)) {
					var d = [];q(a.options, function (a) {
						a.selected && d.push(a.value || a.text);
					});return 0 === d.length ? null : d;
				}return a.value;
			}a.value = b;
		}, html: function html(a, b) {
			if (y(b)) return a.innerHTML;wb(a, !0);a.innerHTML = b;
		}, empty: Sc }, function (a, b) {
		T.prototype[b] = function (b, c) {
			var e,
			    f,
			    g = this.length;if (a !== Sc && y(2 == a.length && a !== zb && a !== Rc ? b : c)) {
				if (J(b)) {
					for (e = 0; e < g; e++) {
						if (a === Zb) a(this[e], b);else for (f in b) {
							a(this[e], f, b[f]);
						}
					}return this;
				}e = a.$dv;g = y(e) ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
					var h = a(this[f], b, c);e = e ? e + h : h;
				}return e;
			}for (e = 0; e < g; e++) {
				a(this[e], b, c);
			}return this;
		};
	});q({ removeData: fb, on: function on(a, b, d, c) {
			if (v(c)) throw Xb("onargs");if (Mc(a)) {
				c = xb(a, !0);var e = c.events,
				    f = c.handle;f || (f = c.handle = Qf(a, e));c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];for (var g = c.length, h = function h(b, c, g) {
					var h = e[b];h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));h.push(d);
				}; g--;) {
					b = c[g], yb[b] ? (h(yb[b], Sf), h(b, void 0, !0)) : h(b);
				}
			}
		}, off: Qc, one: function one(a, b, d) {
			a = G(a);a.on(b, function e() {
				a.off(b, d);a.off(b, e);
			});a.on(b, d);
		}, replaceWith: function replaceWith(a, b) {
			var d,
			    c = a.parentNode;wb(a);q(new T(b), function (b) {
				d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);d = b;
			});
		}, children: function children(a) {
			var b = [];q(a.childNodes, function (a) {
				1 === a.nodeType && b.push(a);
			});return b;
		}, contents: function contents(a) {
			return a.contentDocument || a.childNodes || [];
		}, append: function append(a, b) {
			var d = a.nodeType;if (1 === d || 11 === d) {
				b = new T(b);for (var d = 0, c = b.length; d < c; d++) {
					a.appendChild(b[d]);
				}
			}
		}, prepend: function prepend(a, b) {
			if (1 === a.nodeType) {
				var d = a.firstChild;q(new T(b), function (b) {
					a.insertBefore(b, d);
				});
			}
		}, wrap: function wrap(a, b) {
			Oc(a, G(b).eq(0).clone()[0]);
		}, remove: Db, detach: function detach(a) {
			Db(a, !0);
		}, after: function after(a, b) {
			var d = a,
			    c = a.parentNode;b = new T(b);for (var e = 0, f = b.length; e < f; e++) {
				var g = b[e];c.insertBefore(g, d.nextSibling);d = g;
			}
		}, addClass: Bb, removeClass: Ab, toggleClass: function toggleClass(a, b, d) {
			b && q(b.split(" "), function (b) {
				var e = d;y(e) && (e = !zb(a, b));(e ? Bb : Ab)(a, b);
			});
		}, parent: function parent(a) {
			return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
		}, next: function next(a) {
			return a.nextElementSibling;
		}, find: function find(a, b) {
			return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
		}, clone: Yb, triggerHandler: function triggerHandler(a, b, d) {
			var c,
			    e,
			    f = b.type || b,
			    g = xb(a);if (g = (g = g && g.events) && g[f]) c = { preventDefault: function preventDefault() {
					this.defaultPrevented = !0;
				}, isDefaultPrevented: function isDefaultPrevented() {
					return !0 === this.defaultPrevented;
				}, stopImmediatePropagation: function stopImmediatePropagation() {
					this.immediatePropagationStopped = !0;
				}, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
					return !0 === this.immediatePropagationStopped;
				}, stopPropagation: C, type: f, target: a }, b.type && (c = P(c, b)), b = fa(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
				c.isImmediatePropagationStopped() || b.apply(a, e);
			});
		} }, function (a, b) {
		T.prototype[b] = function (b, c, e) {
			for (var f, g = 0, h = this.length; g < h; g++) {
				y(f) ? (f = a(this[g], b, c, e), v(f) && (f = G(f))) : Pc(f, a(this[g], b, c, e));
			}return v(f) ? f : this;
		};T.prototype.bind = T.prototype.on;T.prototype.unbind = T.prototype.off;
	});Sa.prototype = { put: function put(a, b) {
			this[Ga(a, this.nextUid)] = b;
		}, get: function get(a) {
			return this[Ga(a, this.nextUid)];
		}, remove: function remove(a) {
			var b = this[a = Ga(a, this.nextUid)];delete this[a];return b;
		} };var Hf = [function () {
		this.$get = [function () {
			return Sa;
		}];
	}],
	    Vf = /^([^\(]+?)=>/,
	    Wf = /^[^\(]*\(\s*([^\)]*)\)/m,
	    Dg = /,/,
	    Eg = /^\s*(_?)(\S+?)\1\s*$/,
	    Uf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
	    Ha = O("$injector");db.$$annotate = function (a, b, d) {
		var c;if ("function" === typeof a) {
			if (!(c = a.$inject)) {
				c = [];if (a.length) {
					if (b) throw I(d) && d || (d = a.name || Xf(a)), Ha("strictdi", d);
					b = Vc(a);q(b[1].split(Dg), function (a) {
						a.replace(Eg, function (a, b, d) {
							c.push(d);
						});
					});
				}a.$inject = c;
			}
		} else K(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);return c;
	};var Rd = O("$animate"),
	    $e = function $e() {
		this.$get = C;
	},
	    af = function af() {
		var a = new Sa(),
		    b = [];this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
			function e(a, b, c) {
				var d = !1;b && (b = I(b) ? b.split(" ") : K(b) ? b : [], q(b, function (b) {
					b && (d = !0, a[b] = c);
				}));return d;
			}function f() {
				q(b, function (b) {
					var c = a.get(b);if (c) {
						var d = Yf(b.attr("class")),
						    e = "",
						    f = "";q(c, function (a, b) {
							a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b);
						});q(b, function (a) {
							e && Bb(a, e);f && Ab(a, f);
						});a.remove(b);
					}
				});b.length = 0;
			}return { enabled: C, on: C, off: C, pin: C, push: function push(g, h, k, l) {
					l && l();k = k || {};k.from && g.css(k.from);k.to && g.css(k.to);if (k.addClass || k.removeClass) if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);g = new d();g.complete();return g;
				} };
		}];
	},
	    Ye = ["$provide", function (a) {
		var b = this;this.$$registeredAnimations = Object.create(null);this.register = function (d, c) {
			if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);var e = d + "-animation";b.$$registeredAnimations[d.substr(1)] = e;a.factory(e, c);
		};this.classNameFilter = function (a) {
			if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");return this.$$classNameFilter;
		};this.$get = ["$$animateQueue", function (a) {
			function b(a, c, d) {
				if (d) {
					var h;a: {
						for (h = 0; h < d.length; h++) {
							var k = d[h];if (1 === k.nodeType) {
								h = k;break a;
							}
						}h = void 0;
					}!h || h.parentNode || h.previousElementSibling || (d = null);
				}d ? d.after(a) : c.prepend(a);
			}return { on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function cancel(a) {
					a.end && a.end();
				}, enter: function enter(e, f, g, h) {
					f = f && G(f);g = g && G(g);f = f || g.parent();b(e, f, g);return a.push(e, "enter", Ia(h));
				}, move: function move(e, f, g, h) {
					f = f && G(f);g = g && G(g);f = f || g.parent();b(e, f, g);return a.push(e, "move", Ia(h));
				}, leave: function leave(b, c) {
					return a.push(b, "leave", Ia(c), function () {
						b.remove();
					});
				}, addClass: function addClass(b, c, g) {
					g = Ia(g);g.addClass = hb(g.addclass, c);return a.push(b, "addClass", g);
				}, removeClass: function removeClass(b, c, g) {
					g = Ia(g);g.removeClass = hb(g.removeClass, c);return a.push(b, "removeClass", g);
				}, setClass: function setClass(b, c, g, h) {
					h = Ia(h);h.addClass = hb(h.addClass, c);h.removeClass = hb(h.removeClass, g);return a.push(b, "setClass", h);
				}, animate: function animate(b, c, g, h, k) {
					k = Ia(k);k.from = k.from ? P(k.from, c) : c;k.to = k.to ? P(k.to, g) : g;k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");return a.push(b, "animate", k);
				} };
		}];
	}],
	    cf = function cf() {
		this.$get = ["$$rAF", function (a) {
			function b(b) {
				d.push(b);1 < d.length || a(function () {
					for (var a = 0; a < d.length; a++) {
						d[a]();
					}d = [];
				});
			}var d = [];return function () {
				var a = !1;b(function () {
					a = !0;
				});return function (d) {
					a ? d() : b(d);
				};
			};
		}];
	},
	    bf = function bf() {
		this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
			function f(a) {
				this.setHost(a);var b = d();this._doneCallbacks = [];this._tick = function (a) {
					var d = c[0];d && d.hidden ? e(a, 0, !1) : b(a);
				};this._state = 0;
			}f.chain = function (a, b) {
				function c() {
					if (d === a.length) b(!0);else a[d](function (a) {
						!1 === a ? b(!1) : (d++, c());
					});
				}var d = 0;c();
			};f.all = function (a, b) {
				function c(f) {
					e = e && f;++d === a.length && b(e);
				}var d = 0,
				    e = !0;q(a, function (a) {
					a.done(c);
				});
			};f.prototype = { setHost: function setHost(a) {
					this.host = a || {};
				}, done: function done(a) {
					2 === this._state ? a() : this._doneCallbacks.push(a);
				}, progress: C, getPromise: function getPromise() {
					if (!this.promise) {
						var b = this;this.promise = a(function (a, c) {
							b.done(function (b) {
								!1 === b ? c() : a();
							});
						});
					}return this.promise;
				}, then: function then(a, b) {
					return this.getPromise().then(a, b);
				}, "catch": function _catch(a) {
					return this.getPromise()["catch"](a);
				},
				"finally": function _finally(a) {
					return this.getPromise()["finally"](a);
				}, pause: function pause() {
					this.host.pause && this.host.pause();
				}, resume: function resume() {
					this.host.resume && this.host.resume();
				}, end: function end() {
					this.host.end && this.host.end();this._resolve(!0);
				}, cancel: function cancel() {
					this.host.cancel && this.host.cancel();this._resolve(!1);
				}, complete: function complete(a) {
					var b = this;0 === b._state && (b._state = 1, b._tick(function () {
						b._resolve(a);
					}));
				}, _resolve: function _resolve(a) {
					2 !== this._state && (q(this._doneCallbacks, function (b) {
						b(a);
					}), this._doneCallbacks.length = 0, this._state = 2);
				} };return f;
		}];
	},
	    Ze = function Ze() {
		this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
			return function (b, e) {
				function f() {
					a(function () {
						g.addClass && (b.addClass(g.addClass), g.addClass = null);g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);g.to && (b.css(g.to), g.to = null);h || k.complete();h = !0;
					});return k;
				}var g = e || {};g.$$prepared || (g = oa(g));g.cleanupStyles && (g.from = g.to = null);g.from && (b.css(g.from), g.from = null);var h,
				    k = new d();return { start: f, end: f };
			};
		}];
	},
	    ea = O("$compile"),
	    bc = new function () {}();
	Ec.$inject = ["$provide", "$$sanitizeUriProvider"];Gb.prototype.isFirstChange = function () {
		return this.previousValue === bc;
	};var Xc = /^((?:x|data)[\:\-_])/i,
	    bg = O("$controller"),
	    cd = /^(\S+)(\s+as\s+([\w$]+))?$/,
	    jf = function jf() {
		this.$get = ["$document", function (a) {
			return function (b) {
				b ? !b.nodeType && b instanceof G && (b = b[0]) : b = a[0].body;return b.offsetWidth + 1;
			};
		}];
	},
	    dd = "application/json",
	    ec = { "Content-Type": dd + ";charset=utf-8" },
	    dg = /^\[|^\{(?!\{)/,
	    eg = { "[": /]$/, "{": /}$/ },
	    cg = /^\)\]\}',?\n/,
	    Fg = O("$http"),
	    hd = function hd(a) {
		return function () {
			throw Fg("legacy", a);
		};
	},
	    Ka = da.$interpolateMinErr = O("$interpolate");Ka.throwNoconcat = function (a) {
		throw Ka("noconcat", a);
	};Ka.interr = function (a, b) {
		return Ka("interr", a, b.toString());
	};var Gg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
	    gg = { http: 80, https: 443, ftp: 21 },
	    Hb = O("$location"),
	    Hg = { $$html5: !1, $$replace: !1, absUrl: Ib("$$absUrl"), url: function url(a) {
			if (y(a)) return this.$$url;var b = Gg.exec(a);(b[1] || "" === a) && this.path(decodeURIComponent(b[1]));(b[2] || b[1] || "" === a) && this.search(b[3] || "");this.hash(b[5] || "");return this;
		}, protocol: Ib("$$protocol"),
		host: Ib("$$host"), port: Ib("$$port"), path: md("$$path", function (a) {
			a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
		}), search: function search(a, b) {
			switch (arguments.length) {case 0:
					return this.$$search;case 1:
					if (I(a) || Q(a)) a = a.toString(), this.$$search = zc(a);else if (J(a)) a = oa(a, {}), q(a, function (b, c) {
						null == b && delete a[c];
					}), this.$$search = a;else throw Hb("isrcharg");break;default:
					y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;}this.$$compose();return this;
		}, hash: md("$$hash", function (a) {
			return null !== a ? a.toString() : "";
		}), replace: function replace() {
			this.$$replace = !0;return this;
		} };q([ld, hc, gc], function (a) {
		a.prototype = Object.create(Hg);a.prototype.state = function (b) {
			if (!arguments.length) return this.$$state;if (a !== gc || !this.$$html5) throw Hb("nostate");this.$$state = y(b) ? null : b;return this;
		};
	});var ba = O("$parse"),
	    ig = Function.prototype.call,
	    jg = Function.prototype.apply,
	    kg = Function.prototype.bind,
	    Pb = S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
		Pb[a] = !0;
	});var Ig = { n: "\n", f: "\f", r: "\r",
		t: "\t", v: "\v", "'": "'", '"': '"' },
	    jc = function jc(a) {
		this.options = a;
	};jc.prototype = { constructor: jc, lex: function lex(a) {
			this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) {
				if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
					var b = a + this.peek(),
					    d = b + this.peek(2),
					    c = Pb[b],
					    e = Pb[d];Pb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
				}
			}return this.tokens;
		}, is: function is(a, b) {
			return -1 !== b.indexOf(a);
		}, peek: function peek(a) {
			a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
		}, isNumber: function isNumber(a) {
			return "0" <= a && "9" >= a && "string" === typeof a;
		}, isWhitespace: function isWhitespace(a) {
			return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || '\xA0' === a;
		}, isIdentifierStart: function isIdentifierStart(a) {
			return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a);
		}, isValidIdentifierStart: function isValidIdentifierStart(a) {
			return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
		}, isIdentifierContinue: function isIdentifierContinue(a) {
			return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a);
		}, isValidIdentifierContinue: function isValidIdentifierContinue(a, b) {
			return this.isValidIdentifierStart(a, b) || this.isNumber(a);
		}, codePointAt: function codePointAt(a) {
			return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888;
		}, peekMultichar: function peekMultichar() {
			var a = this.text.charAt(this.index),
			    b = this.peek();if (!b) return a;var d = a.charCodeAt(0),
			    c = b.charCodeAt(0);return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a;
		}, isExpOperator: function isExpOperator(a) {
			return "-" === a || "+" === a || this.isNumber(a);
		}, throwError: function throwError(a, b, d) {
			d = d || this.index;b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;throw ba("lexerr", a, b, this.text);
		}, readNumber: function readNumber() {
			for (var a = "", b = this.index; this.index < this.text.length;) {
				var d = L(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
					var c = this.peek();if ("e" == d && this.isExpOperator(c)) a += d;else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
				}this.index++;
			}this.tokens.push({ index: b, text: a, constant: !0, value: Number(a) });
		},
		readIdent: function readIdent() {
			var a = this.index;for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
				var b = this.peekMultichar();if (!this.isIdentifierContinue(b)) break;this.index += b.length;
			}this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
		}, readString: function readString(a) {
			var b = this.index;this.index++;for (var d = "", c = a, e = !1; this.index < this.text.length;) {
				var f = this.text.charAt(this.index),
				    c = c + f;if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Ig[f] || f, e = !1;else if ("\\" === f) e = !0;else {
					if (f === a) {
						this.index++;this.tokens.push({ index: b, text: c, constant: !0, value: d });return;
					}d += f;
				}this.index++;
			}this.throwError("Unterminated quote", b);
		} };var s = function s(a, b) {
		this.lexer = a;this.options = b;
	};s.Program = "Program";s.ExpressionStatement = "ExpressionStatement";s.AssignmentExpression = "AssignmentExpression";s.ConditionalExpression = "ConditionalExpression";
	s.LogicalExpression = "LogicalExpression";s.BinaryExpression = "BinaryExpression";s.UnaryExpression = "UnaryExpression";s.CallExpression = "CallExpression";s.MemberExpression = "MemberExpression";s.Identifier = "Identifier";s.Literal = "Literal";s.ArrayExpression = "ArrayExpression";s.Property = "Property";s.ObjectExpression = "ObjectExpression";s.ThisExpression = "ThisExpression";s.LocalsExpression = "LocalsExpression";s.NGValueParameter = "NGValueParameter";s.prototype = { ast: function ast(a) {
			this.text = a;this.tokens = this.lexer.lex(a);
			a = this.program();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);return a;
		}, program: function program() {
			for (var a = [];;) {
				if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return { type: s.Program, body: a };
			}
		}, expressionStatement: function expressionStatement() {
			return { type: s.ExpressionStatement, expression: this.filterChain() };
		}, filterChain: function filterChain() {
			for (var a = this.expression(); this.expect("|");) {
				a = this.filter(a);
			}return a;
		}, expression: function expression() {
			return this.assignment();
		},
		assignment: function assignment() {
			var a = this.ternary();this.expect("=") && (a = { type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "=" });return a;
		}, ternary: function ternary() {
			var a = this.logicalOR(),
			    b,
			    d;return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), { type: s.ConditionalExpression, test: a, alternate: b, consequent: d }) : a;
		}, logicalOR: function logicalOR() {
			for (var a = this.logicalAND(); this.expect("||");) {
				a = { type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND() };
			}return a;
		}, logicalAND: function logicalAND() {
			for (var a = this.equality(); this.expect("&&");) {
				a = { type: s.LogicalExpression, operator: "&&", left: a, right: this.equality() };
			}return a;
		}, equality: function equality() {
			for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.relational() };
			}return a;
		}, relational: function relational() {
			for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.additive() };
			}return a;
		}, additive: function additive() {
			for (var a = this.multiplicative(), b; b = this.expect("+", "-");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.multiplicative() };
			}return a;
		}, multiplicative: function multiplicative() {
			for (var a = this.unary(), b; b = this.expect("*", "/", "%");) {
				a = { type: s.BinaryExpression, operator: b.text, left: a, right: this.unary() };
			}return a;
		}, unary: function unary() {
			var a;return (a = this.expect("+", "-", "!")) ? { type: s.UnaryExpression, operator: a.text, prefix: !0, argument: this.unary() } : this.primary();
		}, primary: function primary() {
			var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = oa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = { type: s.Literal, value: this.options.literals[this.consume().text] } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var b; b = this.expect("(", "[", ".");) {
				"(" === b.text ? (a = { type: s.CallExpression,
					callee: a, arguments: this.parseArguments() }, this.consume(")")) : "[" === b.text ? (a = { type: s.MemberExpression, object: a, property: this.expression(), computed: !0 }, this.consume("]")) : "." === b.text ? a = { type: s.MemberExpression, object: a, property: this.identifier(), computed: !1 } : this.throwError("IMPOSSIBLE");
			}return a;
		}, filter: function filter(a) {
			a = [a];for (var b = { type: s.CallExpression, callee: this.identifier(), arguments: a, filter: !0 }; this.expect(":");) {
				a.push(this.expression());
			}return b;
		}, parseArguments: function parseArguments() {
			var a = [];if (")" !== this.peekToken().text) {
				do {
					a.push(this.expression());
				} while (this.expect(","));
			}return a;
		}, identifier: function identifier() {
			var a = this.consume();a.identifier || this.throwError("is not a valid identifier", a);return { type: s.Identifier, name: a.text };
		}, constant: function constant() {
			return { type: s.Literal, value: this.consume().value };
		}, arrayDeclaration: function arrayDeclaration() {
			var a = [];if ("]" !== this.peekToken().text) {
				do {
					if (this.peek("]")) break;a.push(this.expression());
				} while (this.expect(","));
			}this.consume("]");return { type: s.ArrayExpression, elements: a };
		},
		object: function object() {
			var a = [],
			    b;if ("}" !== this.peekToken().text) {
				do {
					if (this.peek("}")) break;b = { type: s.Property, kind: "init" };this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());a.push(b);
				} while (this.expect(","));
			}this.consume("}");return { type: s.ObjectExpression, properties: a };
		}, throwError: function throwError(a, b) {
			throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
		}, consume: function consume(a) {
			if (0 === this.tokens.length) throw ba("ueoe", this.text);var b = this.expect(a);b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return b;
		}, peekToken: function peekToken() {
			if (0 === this.tokens.length) throw ba("ueoe", this.text);return this.tokens[0];
		}, peek: function peek(a, b, d, c) {
			return this.peekAhead(0, a, b, d, c);
		}, peekAhead: function peekAhead(a, b, d, c, e) {
			if (this.tokens.length > a) {
				a = this.tokens[a];var f = a.text;if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a;
			}return !1;
		}, expect: function expect(a, b, d, c) {
			return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1;
		}, selfReferential: { "this": { type: s.ThisExpression }, $locals: { type: s.LocalsExpression } } };td.prototype = { compile: function compile(a, b) {
			var d = this,
			    c = this.astBuilder.ast(a);this.state = { nextId: 0, filters: {}, expensiveChecks: b, fn: { vars: [], body: [], own: {} },
				assign: { vars: [], body: [], own: {} }, inputs: [] };Z(c, d.$filter);var e = "",
			    f;this.stage = "assign";if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");f = pd(c.body);d.stage = "inputs";q(f, function (a, b) {
				var c = "fn" + b;d.state[c] = { vars: [], body: [], own: {} };d.state.computing = c;var e = d.nextId();d.recurse(a, e);d.return_(e);d.state.inputs.push(c);a.watchId = b;
			});this.state.computing = "fn";this.stage = "main";this.recurse(c);e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";e = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e)(this.$filter, Ua, qa, nd, hg, Jb, lg, od, a);this.state = this.stage = void 0;e.literal = sd(c);e.constant = c.constant;return e;
		}, USE: "use", STRICT: "strict", watchFns: function watchFns() {
			var a = [],
			    b = this.state.inputs,
			    d = this;q(b, function (b) {
				a.push("var " + b + "=" + d.generateFunction(b, "s"));
			});b.length && a.push("fn.inputs=[" + b.join(",") + "];");return a.join("");
		}, generateFunction: function generateFunction(a, b) {
			return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};";
		}, filterPrefix: function filterPrefix() {
			var a = [],
			    b = this;q(this.state.filters, function (d, c) {
				a.push(d + "=$filter(" + b.escape(c) + ")");
			});return a.length ? "var " + a.join(",") + ";" : "";
		}, varsPrefix: function varsPrefix(a) {
			return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : "";
		}, body: function body(a) {
			return this.state[a].body.join("");
		},
		recurse: function recurse(a, b, d, c, e, f) {
			var g,
			    h,
			    k = this,
			    l,
			    m,
			    n;c = c || C;if (!f && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));else switch (a.type) {case s.Program:
					q(a.body, function (b, c) {
						k.recurse(b.expression, void 0, void 0, function (a) {
							h = a;
						});c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h);
					});break;case s.Literal:
					m = this.escape(a.value);this.assign(b, m);c(m);break;case s.UnaryExpression:
					this.recurse(a.argument, void 0, void 0, function (a) {
						h = a;
					});m = a.operator + "(" + this.ifDefined(h, 0) + ")";this.assign(b, m);c(m);break;case s.BinaryExpression:
					this.recurse(a.left, void 0, void 0, function (a) {
						g = a;
					});this.recurse(a.right, void 0, void 0, function (a) {
						h = a;
					});m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";this.assign(b, m);c(m);break;case s.LogicalExpression:
					b = b || this.nextId();k.recurse(a.left, b);k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
					c(b);break;case s.ConditionalExpression:
					b = b || this.nextId();k.recurse(a.test, b);k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));c(b);break;case s.Identifier:
					b = b || this.nextId();d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);Ua(a.name);k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
						k.if_("inputs" === k.stage || "s", function () {
							e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));k.assign(b, k.nonComputedMember("s", a.name));
						});
					}, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));(k.state.expensiveChecks || Kb(a.name)) && k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:
					g = d && (d.context = this.nextId()) || this.nextId();b = b || this.nextId();k.recurse(a.object, g, void 0, function () {
						k.if_(k.notNull(g), function () {
							e && 1 !== e && k.addEnsureSafeAssignContext(g);if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);else {
								Ua(a.property.name);e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));m = k.nonComputedMember(g, a.property.name);if (k.state.expensiveChecks || Kb(a.property.name)) m = k.ensureSafeObject(m);k.assign(b, m);d && (d.computed = !1, d.name = a.property.name);
							}
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}, !!e);break;case s.CallExpression:
					b = b || this.nextId();a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
						var b = k.nextId();k.recurse(a, b);l.push(b);
					}), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
						k.if_(k.notNull(h), function () {
							k.addEnsureSafeFunction(h);q(a.arguments, function (a) {
								k.recurse(a, k.nextId(), void 0, function (a) {
									l.push(k.ensureSafeObject(a));
								});
							});g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";m = k.ensureSafeObject(m);k.assign(b, m);
						}, function () {
							k.assign(b, "undefined");
						});c(b);
					}));break;case s.AssignmentExpression:
					h = this.nextId();g = {};if (!qd(a.left)) throw ba("lval");this.recurse(a.left, void 0, g, function () {
						k.if_(k.notNull(g.context), function () {
							k.recurse(a.right, h);k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));k.addEnsureSafeAssignContext(g.context);m = k.member(g.context, g.name, g.computed) + a.operator + h;k.assign(b, m);c(b || m);
						});
					}, 1);break;case s.ArrayExpression:
					l = [];q(a.elements, function (a) {
						k.recurse(a, k.nextId(), void 0, function (a) {
							l.push(a);
						});
					});m = "[" + l.join(",") + "]";this.assign(b, m);c(m);break;case s.ObjectExpression:
					l = [];n = !1;q(a.properties, function (a) {
						a.computed && (n = !0);
					});n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function (a) {
						a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;h = k.nextId();k.recurse(a.value, h);k.assign(k.member(b, g, a.computed), h);
					})) : (q(a.properties, function (b) {
						k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function (a) {
							l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a);
						});
					}), m = "{" + l.join(",") + "}", this.assign(b, m));c(b || m);break;case s.ThisExpression:
					this.assign(b, "s");c("s");break;case s.LocalsExpression:
					this.assign(b, "l");c("l");break;case s.NGValueParameter:
					this.assign(b, "v"), c("v");}
		}, getHasOwnProperty: function getHasOwnProperty(a, b) {
			var d = a + "." + b,
			    c = this.current().own;c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));return c[d];
		}, assign: function assign(a, b) {
			if (a) return this.current().body.push(a, "=", b, ";"), a;
		}, filter: function filter(a) {
			this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));return this.state.filters[a];
		}, ifDefined: function ifDefined(a, b) {
			return "ifDefined(" + a + "," + this.escape(b) + ")";
		}, plus: function plus(a, b) {
			return "plus(" + a + "," + b + ")";
		}, return_: function return_(a) {
			this.current().body.push("return ", a, ";");
		}, if_: function if_(a, b, d) {
			if (!0 === a) b();else {
				var c = this.current().body;
				c.push("if(", a, "){");b();c.push("}");d && (c.push("else{"), d(), c.push("}"));
			}
		}, not: function not(a) {
			return "!(" + a + ")";
		}, notNull: function notNull(a) {
			return a + "!=null";
		}, nonComputedMember: function nonComputedMember(a, b) {
			var d = /[^$_a-zA-Z0-9]/g;return (/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
			);
		}, computedMember: function computedMember(a, b) {
			return a + "[" + b + "]";
		}, member: function member(a, b, d) {
			return d ? this.computedMember(a, b) : this.nonComputedMember(a, b);
		}, addEnsureSafeObject: function addEnsureSafeObject(a) {
			this.current().body.push(this.ensureSafeObject(a), ";");
		}, addEnsureSafeMemberName: function addEnsureSafeMemberName(a) {
			this.current().body.push(this.ensureSafeMemberName(a), ";");
		}, addEnsureSafeFunction: function addEnsureSafeFunction(a) {
			this.current().body.push(this.ensureSafeFunction(a), ";");
		}, addEnsureSafeAssignContext: function addEnsureSafeAssignContext(a) {
			this.current().body.push(this.ensureSafeAssignContext(a), ";");
		}, ensureSafeObject: function ensureSafeObject(a) {
			return "ensureSafeObject(" + a + ",text)";
		}, ensureSafeMemberName: function ensureSafeMemberName(a) {
			return "ensureSafeMemberName(" + a + ",text)";
		}, ensureSafeFunction: function ensureSafeFunction(a) {
			return "ensureSafeFunction(" + a + ",text)";
		},
		getStringValue: function getStringValue(a) {
			this.assign(a, "getStringValue(" + a + ")");
		}, ensureSafeAssignContext: function ensureSafeAssignContext(a) {
			return "ensureSafeAssignContext(" + a + ",text)";
		}, lazyRecurse: function lazyRecurse(a, b, d, c, e, f) {
			var g = this;return function () {
				g.recurse(a, b, d, c, e, f);
			};
		}, lazyAssign: function lazyAssign(a, b) {
			var d = this;return function () {
				d.assign(a, b);
			};
		}, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function stringEscapeFn(a) {
			return '\\u' + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
		}, escape: function escape(a) {
			if (I(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";if (Q(a)) return a.toString();if (!0 === a) return "true";if (!1 === a) return "false";if (null === a) return "null";if ("undefined" === typeof a) return "undefined";throw ba("esc");
		}, nextId: function nextId(a, b) {
			var d = "v" + this.state.nextId++;a || this.current().vars.push(d + (b ? "=" + b : ""));return d;
		}, current: function current() {
			return this.state[this.state.computing];
		} };ud.prototype = { compile: function compile(a, b) {
			var d = this,
			    c = this.astBuilder.ast(a);this.expression = a;this.expensiveChecks = b;Z(c, d.$filter);var e, f;if (e = rd(c)) f = this.recurse(e);e = pd(c.body);
			var g;e && (g = [], q(e, function (a, b) {
				var c = d.recurse(a);a.input = c;g.push(c);a.watchId = b;
			}));var h = [];q(c.body, function (a) {
				h.push(d.recurse(a.expression));
			});e = 0 === c.body.length ? C : 1 === c.body.length ? h[0] : function (a, b) {
				var c;q(h, function (d) {
					c = d(a, b);
				});return c;
			};f && (e.assign = function (a, b, c) {
				return f(a, c, b);
			});g && (e.inputs = g);e.literal = sd(c);e.constant = c.constant;return e;
		}, recurse: function recurse(a, b, d) {
			var c,
			    e,
			    f = this,
			    g;if (a.input) return this.inputs(a.input, a.watchId);switch (a.type) {case s.Literal:
					return this.value(a.value, b);case s.UnaryExpression:
					return e = this.recurse(a.argument), this["unary" + a.operator](e, b);case s.BinaryExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.LogicalExpression:
					return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);case s.ConditionalExpression:
					return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);case s.Identifier:
					return Ua(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Kb(a.name), b, d, f.expression);case s.MemberExpression:
					return c = this.recurse(a.object, !1, !!d), a.computed || (Ua(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);case s.CallExpression:
					return g = [], q(a.arguments, function (a) {
						g.push(f.recurse(a));
					}), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
						for (var n = [], p = 0; p < g.length; ++p) {
							n.push(g[p](a, c, d, f));
						}a = e.apply(void 0, n, f);return b ? { context: void 0, name: void 0, value: a } : a;
					} : function (a, c, d, m) {
						var n = e(a, c, d, m),
						    p;if (null != n.value) {
							qa(n.context, f.expression);nd(n.value, f.expression);p = [];for (var q = 0; q < g.length; ++q) {
								p.push(qa(g[q](a, c, d, m), f.expression));
							}p = qa(n.value.apply(n.context, p), f.expression);
						}return b ? { value: p } : p;
					};case s.AssignmentExpression:
					return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
						var n = c(a, d, g, m);a = e(a, d, g, m);qa(n.value, f.expression);Jb(n.context);n.context[n.name] = a;return b ? { value: a } : a;
					};case s.ArrayExpression:
					return g = [], q(a.elements, function (a) {
						g.push(f.recurse(a));
					}), function (a, c, d, e) {
						for (var f = [], p = 0; p < g.length; ++p) {
							f.push(g[p](a, c, d, e));
						}return b ? { value: f } : f;
					};case s.ObjectExpression:
					return g = [], q(a.properties, function (a) {
						a.computed ? g.push({ key: f.recurse(a.key), computed: !0, value: f.recurse(a.value) }) : g.push({ key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value, computed: !1, value: f.recurse(a.value) });
					}), function (a, c, d, e) {
						for (var f = {}, p = 0; p < g.length; ++p) {
							g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
						}return b ? { value: f } : f;
					};case s.ThisExpression:
					return function (a) {
						return b ? { value: a } : a;
					};case s.LocalsExpression:
					return function (a, c) {
						return b ? { value: c } : c;
					};case s.NGValueParameter:
					return function (a, c, d) {
						return b ? { value: d } : d;
					};}
		}, "unary+": function unary(a, b) {
			return function (d, c, e, f) {
				d = a(d, c, e, f);d = v(d) ? +d : 0;return b ? { value: d } : d;
			};
		}, "unary-": function unary(a, b) {
			return function (d, c, e, f) {
				d = a(d, c, e, f);d = v(d) ? -d : 0;return b ? { value: d } : d;
			};
		}, "unary!": function unary(a, b) {
			return function (d, c, e, f) {
				d = !a(d, c, e, f);return b ? { value: d } : d;
			};
		}, "binary+": function binary(a, b, d) {
			return function (c, e, f, g) {
				var h = a(c, e, f, g);c = b(c, e, f, g);h = od(h, c);return d ? { value: h } : h;
			};
		}, "binary-": function binary(a, b, d) {
			return function (c, e, f, g) {
				var h = a(c, e, f, g);c = b(c, e, f, g);h = (v(h) ? h : 0) - (v(c) ? c : 0);return d ? { value: h } : h;
			};
		}, "binary*": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) * b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary/": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) / b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary%": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) % b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary===": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) === b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary!==": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) !== b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary==": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) == b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary!=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) != b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary<": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) < b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary>": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) > b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary<=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) <= b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary>=": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) >= b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary&&": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) && b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "binary||": function binary(a, b, d) {
			return function (c, e, f, g) {
				c = a(c, e, f, g) || b(c, e, f, g);return d ? { value: c } : c;
			};
		}, "ternary?:": function ternary(a, b, d, c) {
			return function (e, f, g, h) {
				e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);return c ? { value: e } : e;
			};
		}, value: function value(a, b) {
			return function () {
				return b ? { context: void 0, name: void 0, value: a } : a;
			};
		}, identifier: function identifier(a, b, d, c, e) {
			return function (f, g, h, k) {
				f = g && a in g ? g : f;c && 1 !== c && f && !f[a] && (f[a] = {});g = f ? f[a] : void 0;b && qa(g, e);return d ? { context: f, name: a,
					value: g } : g;
			};
		}, computedMember: function computedMember(a, b, d, c, e) {
			return function (f, g, h, k) {
				var l = a(f, g, h, k),
				    m,
				    n;null != l && (m = b(f, g, h, k), m += "", Ua(m, e), c && 1 !== c && (Jb(l), l && !l[m] && (l[m] = {})), n = l[m], qa(n, e));return d ? { context: l, name: m, value: n } : n;
			};
		}, nonComputedMember: function nonComputedMember(a, b, d, c, e, f) {
			return function (g, h, k, l) {
				g = a(g, h, k, l);e && 1 !== e && (Jb(g), g && !g[b] && (g[b] = {}));h = null != g ? g[b] : void 0;(d || Kb(b)) && qa(h, f);return c ? { context: g, name: b, value: h } : h;
			};
		}, inputs: function inputs(a, b) {
			return function (d, c, e, f) {
				return f ? f[b] : a(d, c, e);
			};
		} };var kc = function kc(a, b, d) {
		this.lexer = a;this.$filter = b;this.options = d;this.ast = new s(a, d);this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b);
	};kc.prototype = { constructor: kc, parse: function parse(a) {
			return this.astCompiler.compile(a, this.options.expensiveChecks);
		} };var mg = Object.prototype.valueOf,
	    ra = O("$sce"),
	    ma = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
	    og = O("$compile"),
	    X = F.document.createElement("a"),
	    yd = pa(F.location.href);zd.$inject = ["$document"];Lc.$inject = ["$provide"];var Gd = 22,
	    Fd = ".",
	    mc = "0";Ad.$inject = ["$locale"];Cd.$inject = ["$locale"];var zg = { yyyy: W("FullYear", 4, 0, !1, !0), yy: W("FullYear", 2, 0, !0, !0), y: W("FullYear", 1, 0, !1, !0), MMMM: kb("Month"), MMM: kb("Month", !0), MM: W("Month", 2, 1), M: W("Month", 1, 1), LLLL: kb("Month", !1, !0), dd: W("Date", 2), d: W("Date", 1), HH: W("Hours", 2), H: W("Hours", 1), hh: W("Hours", 2, -12), h: W("Hours", 1, -12), mm: W("Minutes", 2), m: W("Minutes", 1), ss: W("Seconds", 2), s: W("Seconds", 1), sss: W("Milliseconds", 3), EEEE: kb("Day"), EEE: kb("Day", !0), a: function a(_a, b) {
			return 12 > _a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
		}, Z: function Z(a, b, d) {
			a = -1 * d;return a = (0 <= a ? "+" : "") + (Lb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Lb(Math.abs(a % 60), 2));
		}, ww: Id(2), w: Id(1), G: nc, GG: nc, GGG: nc, GGGG: function GGGG(a, b) {
			return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1];
		} },
	    yg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
	    xg = /^\-?\d+$/;Bd.$inject = ["$locale"];var sg = ca(L),
	    tg = ca(ub);Dd.$inject = ["$parse"];var oe = ca({ restrict: "E", compile: function compile(a, b) {
			if (!b.href && !b.xlinkHref) return function (a, b) {
				if ("a" === b[0].nodeName.toLowerCase()) {
					var e = "[object SVGAnimatedString]" === ja.call(b.prop("href")) ? "xlink:href" : "href";b.on("click", function (a) {
						b.attr(e) || a.preventDefault();
					});
				}
			};
		} }),
	    vb = {};q(Eb, function (a, b) {
		function d(a, d, e) {
			a.$watch(e[c], function (a) {
				e.$set(b, !!a);
			});
		}if ("multiple" != a) {
			var c = wa("ng-" + b),
			    e = d;"checked" === a && (e = function e(a, b, _e) {
				_e.ngModel !== _e[c] && d(a, b, _e);
			});vb[c] = function () {
				return { restrict: "A", priority: 100, link: e };
			};
		}
	});q(bd, function (a, b) {
		vb[b] = function () {
			return { priority: 100, link: function link(a, c, e) {
					if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Bg))) {
						e.$set("ngPattern", new RegExp(c[1], c[2]));return;
					}a.$watch(e[b], function (a) {
						e.$set(b, a);
					});
				} };
		};
	});q(["src", "srcset", "href"], function (a) {
		var b = wa("ng-" + a);vb[b] = function () {
			return { priority: 99, link: function link(d, c, e) {
					var f = a,
					    g = a;"href" === a && "[object SVGAnimatedString]" === ja.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);e.$observe(b, function (b) {
						b ? (e.$set(g, b), Ba && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null);
					});
				} };
		};
	});
	var Mb = { $addControl: C, $$renameControl: function $$renameControl(a, b) {
			a.$name = b;
		}, $removeControl: C, $setValidity: C, $setDirty: C, $setPristine: C, $setSubmitted: C };Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var Sd = function Sd(a) {
		return ["$timeout", "$parse", function (b, d) {
			function c(a) {
				return "" === a ? d('this[""]').assign : d(a).assign || C;
			}return { name: "form", restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Jd, compile: function compile(d, f) {
					d.addClass(Va).addClass(ob);var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;return { pre: function pre(a, d, e, f) {
							var n = f[0];if (!("action" in e)) {
								var p = function p(b) {
									a.$apply(function () {
										n.$commitViewValue();n.$setSubmitted();
									});b.preventDefault();
								};d[0].addEventListener("submit", p, !1);d.on("$destroy", function () {
									b(function () {
										d[0].removeEventListener("submit", p, !1);
									}, 0, !1);
								});
							}(f[1] || n.$$parentForm).$addControl(n);var q = g ? c(n.$name) : C;g && (q(a, n), e.$observe(g, function (b) {
								n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n));
							}));d.on("$destroy", function () {
								n.$$parentForm.$removeControl(n);
								q(a, void 0);P(n, Mb);
							});
						} };
				} };
		}];
	},
	    pe = Sd(),
	    Ce = Sd(!0),
	    Ag = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
	    Jg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
	    Kg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	    Lg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
	    Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
	    Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    qc = /^(\d{4,})-W(\d\d)$/,
	    Vd = /^(\d{4,})-(\d\d)$/,
	    Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	    Ld = S();q(["date", "datetime-local", "month", "time", "week"], function (a) {
		Ld[a] = !0;
	});var Xd = { text: function text(a, b, d, c, e, f) {
			lb(a, b, d, c, e, f);oc(c);
		}, date: mb("date", Td, Ob(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": mb("datetimelocal", Ud, Ob(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: mb("time", Wd, Ob(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: mb("week", qc, function (a, b) {
			if (ha(a)) return a;
			if (I(a)) {
				qc.lastIndex = 0;var d = qc.exec(a);if (d) {
					var c = +d[1],
					    e = +d[2],
					    f = d = 0,
					    g = 0,
					    h = 0,
					    k = Hd(c),
					    e = 7 * (e - 1);b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());return new Date(c, 0, k.getDate() + e, d, f, g, h);
				}
			}return NaN;
		}, "yyyy-Www"), month: mb("month", Vd, Ob(Vd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, b, d, c, e, f) {
			Md(a, b, d, c);lb(a, b, d, c, e, f);c.$$parserName = "number";c.$parsers.push(function (a) {
				if (c.$isEmpty(a)) return null;if (Lg.test(a)) return parseFloat(a);
			});c.$formatters.push(function (a) {
				if (!c.$isEmpty(a)) {
					if (!Q(a)) throw nb("numfmt", a);a = a.toString();
				}return a;
			});if (v(d.min) || d.ngMin) {
				var g;c.$validators.min = function (a) {
					return c.$isEmpty(a) || y(g) || a >= g;
				};d.$observe("min", function (a) {
					v(a) && !Q(a) && (a = parseFloat(a, 10));g = Q(a) && !isNaN(a) ? a : void 0;c.$validate();
				});
			}if (v(d.max) || d.ngMax) {
				var h;c.$validators.max = function (a) {
					return c.$isEmpty(a) || y(h) || a <= h;
				};d.$observe("max", function (a) {
					v(a) && !Q(a) && (a = parseFloat(a, 10));h = Q(a) && !isNaN(a) ? a : void 0;c.$validate();
				});
			}
		}, url: function url(a, b, d, c, e, f) {
			lb(a, b, d, c, e, f);oc(c);c.$$parserName = "url";c.$validators.url = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || Jg.test(d);
			};
		}, email: function email(a, b, d, c, e, f) {
			lb(a, b, d, c, e, f);oc(c);c.$$parserName = "email";c.$validators.email = function (a, b) {
				var d = a || b;return c.$isEmpty(d) || Kg.test(d);
			};
		}, radio: function radio(a, b, d, c) {
			y(d.name) && b.attr("name", ++pb);b.on("click", function (a) {
				b[0].checked && c.$setViewValue(d.value, a && a.type);
			});c.$render = function () {
				b[0].checked = d.value == c.$viewValue;
			};d.$observe("value", c.$render);
		}, checkbox: function checkbox(a, b, d, c, e, f, g, h) {
			var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0),
			    l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);b.on("click", function (a) {
				c.$setViewValue(b[0].checked, a && a.type);
			});c.$render = function () {
				b[0].checked = c.$viewValue;
			};c.$isEmpty = function (a) {
				return !1 === a;
			};c.$formatters.push(function (a) {
				return na(a, k);
			});c.$parsers.push(function (a) {
				return a ? k : l;
			});
		}, hidden: C, button: C, submit: C, reset: C, file: C },
	    Fc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
		return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(e, f, g, h) {
					h[0] && (Xd[L(g.type)] || Xd.text)(e, f, g, h[0], b, a, d, c);
				} } };
	}],
	    Mg = /^(true|false|\d+)$/,
	    Ue = function Ue() {
		return { restrict: "A", priority: 100, compile: function compile(a, b) {
				return Mg.test(b.ngValue) ? function (a, b, e) {
					e.$set("value", a.$eval(e.ngValue));
				} : function (a, b, e) {
					a.$watch(e.ngValue, function (a) {
						e.$set("value", a);
					});
				};
			} };
	},
	    ue = ["$compile", function (a) {
		return { restrict: "AC", compile: function compile(b) {
				a.$$addBindingClass(b);return function (b, c, e) {
					a.$$addBindingInfo(c, e.ngBind);c = c[0];b.$watch(e.ngBind, function (a) {
						c.textContent = y(a) ? "" : a;
					});
				};
			} };
	}],
	    we = ["$interpolate", "$compile", function (a, b) {
		return { compile: function compile(d) {
				b.$$addBindingClass(d);return function (c, d, f) {
					c = a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d, c.expressions);d = d[0];f.$observe("ngBindTemplate", function (a) {
						d.textContent = y(a) ? "" : a;
					});
				};
			} };
	}],
	    ve = ["$sce", "$parse", "$compile", function (a, b, d) {
		return { restrict: "A", compile: function compile(c, e) {
				var f = b(e.ngBindHtml),
				    g = b(e.ngBindHtml, function (b) {
					return a.valueOf(b);
				});d.$$addBindingClass(c);return function (b, c, e) {
					d.$$addBindingInfo(c, e.ngBindHtml);b.$watch(g, function () {
						var d = f(b);c.html(a.getTrustedHtml(d) || "");
					});
				};
			} };
	}],
	    Te = ca({ restrict: "A", require: "ngModel", link: function link(a, b, d, c) {
			c.$viewChangeListeners.push(function () {
				a.$eval(d.ngChange);
			});
		} }),
	    xe = pc("", !0),
	    ze = pc("Odd", 0),
	    ye = pc("Even", 1),
	    Ae = Ma({ compile: function compile(a, b) {
			b.$set("ngCloak", void 0);a.removeClass("ng-cloak");
		} }),
	    Be = [function () {
		return { restrict: "A", scope: !0, controller: "@", priority: 500 };
	}],
	    Kc = {},
	    Ng = { blur: !0, focus: !0 };q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
		var b = wa("ng-" + a);Kc[b] = ["$parse", "$rootScope", function (d, c) {
			return { restrict: "A", compile: function compile(e, f) {
					var g = d(f[b], null, !0);return function (b, d) {
						d.on(a, function (d) {
							var e = function e() {
								g(b, { $event: d });
							};Ng[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e);
						});
					};
				} };
		}];
	});var Ee = ["$animate", "$compile", function (a, b) {
		return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(d, c, e, f, g) {
				var h, k, l;d.$watch(e.ngIf, function (d) {
					d ? k || g(function (d, f) {
						k = f;d[d.length++] = b.$$createComment("end ngIf", e.ngIf);h = { clone: d };a.enter(d, c.parent(), c);
					}) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function () {
						l = null;
					}), h = null));
				});
			} };
	}],
	    Fe = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
		return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: da.noop, compile: function compile(c, e) {
				var f = e.ngInclude || e.src,
				    g = e.onload || "",
				    h = e.autoscroll;return function (c, e, m, n, p) {
					var q = 0,
					    s,
					    z,
					    r,
					    D = function D() {
						z && (z.remove(), z = null);s && (s.$destroy(), s = null);r && (d.leave(r).then(function () {
							z = null;
						}), z = r, r = null);
					};c.$watch(f, function (f) {
						var m = function m() {
							!v(h) || h && !c.$eval(h) || b();
						},
						    w = ++q;f ? (a(f, !0).then(function (a) {
							if (!c.$$destroyed && w === q) {
								var b = c.$new();n.template = a;a = p(b, function (a) {
									D();d.enter(a, null, e).then(m);
								});s = b;r = a;s.$emit("$includeContentLoaded", f);c.$eval(g);
							}
						}, function () {
							c.$$destroyed || w !== q || (D(), c.$emit("$includeContentError", f));
						}), c.$emit("$includeContentRequested", f)) : (D(), n.template = null);
					});
				};
			} };
	}],
	    We = ["$compile", function (a) {
		return { restrict: "ECA",
			priority: -400, require: "ngInclude", link: function link(b, d, c, e) {
				ja.call(d[0]).match(/SVG/) ? (d.empty(), a(Nc(e.template, F.document).childNodes)(b, function (a) {
					d.append(a);
				}, { futureParentElement: d })) : (d.html(e.template), a(d.contents())(b));
			} };
	}],
	    Ge = Ma({ priority: 450, compile: function compile() {
			return { pre: function pre(a, b, d) {
					a.$eval(d.ngInit);
				} };
		} }),
	    Se = function Se() {
		return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, b, d, c) {
				var e = b.attr(d.$attr.ngList) || ", ",
				    f = "false" !== d.ngTrim,
				    g = f ? V(e) : e;c.$parsers.push(function (a) {
					if (!y(a)) {
						var b = [];a && q(a.split(g), function (a) {
							a && b.push(f ? V(a) : a);
						});return b;
					}
				});c.$formatters.push(function (a) {
					if (K(a)) return a.join(e);
				});c.$isEmpty = function (a) {
					return !a || !a.length;
				};
			} };
	},
	    ob = "ng-valid",
	    Od = "ng-invalid",
	    Va = "ng-pristine",
	    Nb = "ng-dirty",
	    Qd = "ng-pending",
	    nb = O("ngModel"),
	    Og = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
		this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = void 0;this.$validators = {};
		this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = void 0;this.$name = l(d.name || "", !1)(a);this.$$parentForm = Mb;var m = e(d.ngModel),
		    n = m.assign,
		    p = m,
		    s = n,
		    F = null,
		    z,
		    r = this;this.$$setOptions = function (a) {
			if ((r.$options = a) && a.getterSetter) {
				var b = e(d.ngModel + "()"),
				    f = e(d.ngModel + "($$$p)");p = function p(a) {
					var c = m(a);E(c) && (c = b(a));
					return c;
				};s = function s(a, b) {
					E(m(a)) ? f(a, { $$$p: b }) : n(a, b);
				};
			} else if (!m.assign) throw nb("nonassign", d.ngModel, ua(c));
		};this.$render = C;this.$isEmpty = function (a) {
			return y(a) || "" === a || null === a || a !== a;
		};this.$$updateEmptyClasses = function (a) {
			r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"));
		};var D = 0;Kd({ ctrl: this, $element: c, set: function set(a, b) {
				a[b] = !0;
			}, unset: function unset(a, b) {
				delete a[b];
			}, $animate: f });this.$setPristine = function () {
			r.$dirty = !1;r.$pristine = !0;f.removeClass(c, Nb);f.addClass(c, Va);
		};this.$setDirty = function () {
			r.$dirty = !0;r.$pristine = !1;f.removeClass(c, Va);f.addClass(c, Nb);r.$$parentForm.$setDirty();
		};this.$setUntouched = function () {
			r.$touched = !1;r.$untouched = !0;f.setClass(c, "ng-untouched", "ng-touched");
		};this.$setTouched = function () {
			r.$touched = !0;r.$untouched = !1;f.setClass(c, "ng-touched", "ng-untouched");
		};this.$rollbackViewValue = function () {
			g.cancel(F);r.$viewValue = r.$$lastCommittedViewValue;r.$render();
		};this.$validate = function () {
			if (!Q(r.$modelValue) || !isNaN(r.$modelValue)) {
				var a = r.$$rawModelValue,
				    b = r.$valid,
				    c = r.$modelValue,
				    d = r.$options && r.$options.allowInvalid;r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
					d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope());
				});
			}
		};this.$$runValidators = function (a, b, c) {
			function d() {
				var c = !0;q(r.$validators, function (d, e) {
					var g = d(a, b);c = c && g;f(e, g);
				});return c ? !0 : (q(r.$asyncValidators, function (a, b) {
					f(b, null);
				}), !1);
			}function e() {
				var c = [],
				    d = !0;q(r.$asyncValidators, function (e, g) {
					var h = e(a, b);if (!h || !E(h.then)) throw nb("nopromise", h);f(g, void 0);c.push(h.then(function () {
						f(g, !0);
					}, function () {
						d = !1;f(g, !1);
					}));
				});c.length ? k.all(c).then(function () {
					g(d);
				}, C) : g(!0);
			}function f(a, b) {
				h === D && r.$setValidity(a, b);
			}function g(a) {
				h === D && c(a);
			}D++;var h = D;(function () {
				var a = r.$$parserName || "parse";if (y(z)) f(a, null);else return z || (q(r.$validators, function (a, b) {
					f(b, null);
				}), q(r.$asyncValidators, function (a, b) {
					f(b, null);
				})), f(a, z), z;return !0;
			})() ? d() ? e() : g(!1) : g(!1);
		};this.$commitViewValue = function () {
			var a = r.$viewValue;g.cancel(F);if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate();
		};this.$$parseAndValidate = function () {
			var b = r.$$lastCommittedViewValue;if (z = y(b) ? void 0 : !0) for (var c = 0; c < r.$parsers.length; c++) {
				if (b = r.$parsers[c](b), y(b)) {
					z = !1;break;
				}
			}Q(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));var d = r.$modelValue,
			    e = r.$options && r.$options.allowInvalid;r.$$rawModelValue = b;e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
				e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope());
			});
		};this.$$writeModelToScope = function () {
			s(a, r.$modelValue);q(r.$viewChangeListeners, function (a) {
				try {
					a();
				} catch (c) {
					b(c);
				}
			});
		};this.$setViewValue = function (a, b) {
			r.$viewValue = a;r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b);
		};this.$$debounceViewValueCommit = function (b) {
			var c = 0,
			    d = r.$options;
			d && v(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));g.cancel(F);c ? F = g(function () {
				r.$commitViewValue();
			}, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
				r.$commitViewValue();
			});
		};a.$watch(function () {
			var b = p(a);if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
				r.$modelValue = r.$$rawModelValue = b;z = void 0;for (var c = r.$formatters, d = c.length, e = b; d--;) {
					e = c[d](e);
				}r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, C));
			}return b;
		});
	}],
	    Re = ["$rootScope", function (a) {
		return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Og, priority: 1, compile: function compile(b) {
				b.addClass(Va).addClass("ng-untouched").addClass(ob);return { pre: function pre(a, b, e, f) {
						var g = f[0];b = f[1] || g.$$parentForm;g.$$setOptions(f[2] && f[2].$options);b.$addControl(g);e.$observe("name", function (a) {
							g.$name !== a && g.$$parentForm.$$renameControl(g, a);
						});a.$on("$destroy", function () {
							g.$$parentForm.$removeControl(g);
						});
					}, post: function post(b, c, e, f) {
						var g = f[0];if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function (a) {
							g.$$debounceViewValueCommit(a && a.type);
						});c.on("blur", function () {
							g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched));
						});
					} };
			} };
	}],
	    Pg = /(\s+|^)default(\s+|$)/,
	    Ve = function Ve() {
		return { restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
				var d = this;this.$options = oa(a.$eval(b.ngModelOptions));v(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = V(this.$options.updateOn.replace(Pg, function () {
					d.$options.updateOnDefault = !0;return " ";
				}))) : this.$options.updateOnDefault = !0;
			}] };
	},
	    He = Ma({ terminal: !0, priority: 1E3 }),
	    Qg = O("ngOptions"),
	    Rg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	    Pe = ["$compile", "$document", "$parse", function (a, b, d) {
		function c(a, b, c) {
			function e(a, b, c, d, f) {
				this.selectValue = a;this.viewValue = b;this.label = c;this.group = d;this.disabled = f;
			}function f(a) {
				var b;if (!q && xa(a)) b = a;else {
					b = [];for (var c in a) {
						a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c);
					}
				}return b;
			}var n = a.match(Rg);if (!n) throw Qg("iexp", a, ua(b));var p = n[5] || n[7],
			    q = n[6];a = / as /.test(n[0]) && n[1];var s = n[9];b = d(n[2] ? n[1] : p);var z = a && d(a) || b,
			    r = s && d(s),
			    v = s ? function (a, b) {
				return r(c, b);
			} : function (a) {
				return Ga(a);
			},
			    u = function u(a, b) {
				return v(a, H(a, b));
			},
			    t = d(n[2] || n[1]),
			    w = d(n[3] || ""),
			    y = d(n[4] || ""),
			    B = d(n[8]),
			    A = {},
			    H = q ? function (a, b) {
				A[q] = b;A[p] = a;return A;
			} : function (a) {
				A[p] = a;return A;
			};return { trackBy: s, getTrackByValue: u, getWatchables: d(B, function (a) {
					var b = [];a = a || [];for (var d = f(a), e = d.length, g = 0; g < e; g++) {
						var h = a === d ? g : d[g],
						    l = a[h],
						    h = H(l, h),
						    l = v(l, h);b.push(l);if (n[2] || n[1]) l = t(c, h), b.push(l);n[4] && (h = y(c, h), b.push(h));
					}return b;
				}), getOptions: function getOptions() {
					for (var a = [], b = {}, d = B(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
						var p = d === g ? n : g[n],
						    q = H(d[p], p),
						    r = z(c, q),
						    p = v(r, q),
						    x = t(c, q),
						    A = w(c, q),
						    q = y(c, q),
						    r = new e(p, r, x, A, q);a.push(r);b[p] = r;
					}return { items: a, selectValueMap: b,
						getOptionFromViewValue: function getOptionFromViewValue(a) {
							return b[u(a)];
						}, getViewValueFromOption: function getViewValueFromOption(a) {
							return s ? da.copy(a.viewValue) : a.viewValue;
						} };
				} };
		}var e = F.document.createElement("option"),
		    f = F.document.createElement("optgroup");return { restrict: "A", terminal: !0, require: ["select", "ngModel"], link: { pre: function pre(a, b, c, d) {
					d[0].registerOption = C;
				}, post: function post(d, h, k, l) {
					function m(a, b) {
						a.element = b;b.disabled = a.disabled;a.label !== b.label && (b.label = a.label, b.textContent = a.label);a.value !== b.value && (b.value = a.selectValue);
					}function n() {
						var a = w && p.readValue();if (w) for (var b = w.items.length - 1; 0 <= b; b--) {
							var c = w.items[b];c.group ? Db(c.element.parentNode) : Db(c.element);
						}w = C.getOptions();var d = {};u && h.prepend(z);w.items.forEach(function (a) {
							var b;if (v(a.group)) {
								b = d[a.group];b || (b = f.cloneNode(!1), B.appendChild(b), b.label = a.group, d[a.group] = b);var c = e.cloneNode(!1);
							} else b = B, c = e.cloneNode(!1);b.appendChild(c);m(a, c);
						});h[0].appendChild(B);s.$render();s.$isEmpty(a) || (b = p.readValue(), (C.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()));
					}var p = l[0],
					    s = l[1],
					    y = k.multiple,
					    z;l = 0;for (var r = h.children(), D = r.length; l < D; l++) {
						if ("" === r[l].value) {
							z = r.eq(l);break;
						}
					}var u = !!z,
					    t = G(e.cloneNode(!1));t.val("?");var w,
					    C = c(k.ngOptions, h, d),
					    B = b[0].createDocumentFragment();y ? (s.$isEmpty = function (a) {
						return !a || 0 === a.length;
					}, p.writeValue = function (a) {
						w.items.forEach(function (a) {
							a.element.selected = !1;
						});a && a.forEach(function (a) {
							if (a = w.getOptionFromViewValue(a)) a.element.selected = !0;
						});
					}, p.readValue = function () {
						var a = h.val() || [],
						    b = [];q(a, function (a) {
							(a = w.selectValueMap[a]) && !a.disabled && b.push(w.getViewValueFromOption(a));
						});return b;
					}, C.trackBy && d.$watchCollection(function () {
						if (K(s.$viewValue)) return s.$viewValue.map(function (a) {
							return C.getTrackByValue(a);
						});
					}, function () {
						s.$render();
					})) : (p.writeValue = function (a) {
						var b = w.getOptionFromViewValue(a);b ? (h[0].value !== b.selectValue && (t.remove(), u || z.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || u ? (t.remove(), u || h.prepend(z), h.val(""), z.prop("selected", !0), z.attr("selected", !0)) : (u || z.remove(), h.prepend(t), h.val("?"), t.prop("selected", !0), t.attr("selected", !0));
					}, p.readValue = function () {
						var a = w.selectValueMap[h.val()];return a && !a.disabled ? (u || z.remove(), t.remove(), w.getViewValueFromOption(a)) : null;
					}, C.trackBy && d.$watch(function () {
						return C.getTrackByValue(s.$viewValue);
					}, function () {
						s.$render();
					}));u ? (z.remove(), a(z)(d), z.removeClass("ng-scope")) : z = G(e.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables, n);
				} } };
	}],
	    Ie = ["$locale", "$interpolate", "$log", function (a, b, d) {
		var c = /{}/g,
		    e = /^when(Minus)?(.+)$/;return { link: function link(f, g, h) {
				function k(a) {
					g.text(a || "");
				}var l = h.count,
				    m = h.$attr.when && g.attr(h.$attr.when),
				    n = h.offset || 0,
				    p = f.$eval(m) || {},
				    s = {},
				    v = b.startSymbol(),
				    z = b.endSymbol(),
				    r = v + l + "-" + n + z,
				    D = da.noop,
				    u;q(h, function (a, b) {
					var c = e.exec(b);c && (c = (c[1] ? "-" : "") + L(c[2]), p[c] = g.attr(h.$attr[b]));
				});q(p, function (a, d) {
					s[d] = b(a.replace(c, r));
				});f.$watch(l, function (b) {
					var c = parseFloat(b),
					    e = isNaN(c);e || c in p || (c = a.pluralCat(c - n));c === u || e && Q(u) && isNaN(u) || (D(), e = s[c], y(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), D = C, k()) : D = f.$watch(e, k), u = c);
				});
			} };
	}],
	    Je = ["$parse", "$animate", "$compile", function (a, b, d) {
		var c = O("ngRepeat"),
		    e = function e(a, b, c, d, _e2, m, n) {
			a[c] = d;_e2 && (a[_e2] = m);a.$index = b;a.$first = 0 === b;a.$last = b === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (b & 1));
		};return { restrict: "A", multiElement: !0, transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
				var h = g.ngRepeat,
				    k = d.$$createComment("end ngRepeat", h),
				    l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
				if (!l) throw c("iexp", h);var m = l[1],
				    n = l[2],
				    p = l[3],
				    s = l[4],
				    l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!l) throw c("iidexp", m);var v = l[3] || l[1],
				    z = l[2];if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);var r,
				    D,
				    u,
				    t,
				    w = { $id: Ga };s ? r = a(s) : (u = function u(a, b) {
					return Ga(b);
				}, t = function t(a) {
					return a;
				});return function (a, d, f, g, l) {
					r && (D = function D(b, c, d) {
						z && (w[z] = b);w[v] = c;w.$index = d;return r(a, w);
					});var m = S();a.$watchCollection(n, function (f) {
						var g,
						    n,
						    r = d[0],
						    s,
						    x = S(),
						    w,
						    y,
						    C,
						    A,
						    F,
						    E,
						    G;p && (a[p] = f);if (xa(f)) F = f, n = D || u;else for (G in n = D || t, F = [], f) {
							sa.call(f, G) && "$" !== G.charAt(0) && F.push(G);
						}w = F.length;G = Array(w);for (g = 0; g < w; g++) {
							if (y = f === F ? g : F[g], C = f[y], A = n(y, C, g), m[A]) E = m[A], delete m[A], x[A] = E, G[g] = E;else {
								if (x[A]) throw q(G, function (a) {
									a && a.scope && (m[a.id] = a);
								}), c("dupes", h, A, C);G[g] = { id: A, scope: void 0, clone: void 0 };x[A] = !0;
							}
						}for (s in m) {
							E = m[s];A = tb(E.clone);b.leave(A);if (A[0].parentNode) for (g = 0, n = A.length; g < n; g++) {
								A[g].$$NG_REMOVED = !0;
							}E.scope.$destroy();
						}for (g = 0; g < w; g++) {
							if (y = f === F ? g : F[g], C = f[y], E = G[g], E.scope) {
								s = r;do {
									s = s.nextSibling;
								} while (s && s.$$NG_REMOVED);E.clone[0] != s && b.move(tb(E.clone), null, r);r = E.clone[E.clone.length - 1];e(E.scope, g, v, C, z, y, w);
							} else l(function (a, c) {
								E.scope = c;var d = k.cloneNode(!1);a[a.length++] = d;b.enter(a, null, r);r = d;E.clone = a;x[E.id] = E;e(E.scope, g, v, C, z, y, w);
							});
						}m = x;
					});
				};
			} };
	}],
	    Ke = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngShow, function (b) {
					a[b ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    De = ["$animate", function (a) {
		return { restrict: "A", multiElement: !0, link: function link(b, d, c) {
				b.$watch(c.ngHide, function (b) {
					a[b ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
				});
			} };
	}],
	    Le = Ma(function (a, b, d) {
		a.$watch(d.ngStyle, function (a, d) {
			d && a !== d && q(d, function (a, c) {
				b.css(c, "");
			});a && b.css(a);
		}, !0);
	}),
	    Me = ["$animate", "$compile", function (a, b) {
		return { require: "ngSwitch", controller: ["$scope", function () {
				this.cases = {};
			}], link: function link(d, c, e, f) {
				var g = [],
				    h = [],
				    k = [],
				    l = [],
				    m = function m(a, b) {
					return function () {
						a.splice(b, 1);
					};
				};d.$watch(e.ngSwitch || e.on, function (c) {
					var d, e;d = 0;for (e = k.length; d < e; ++d) {
						a.cancel(k[d]);
					}d = k.length = 0;for (e = l.length; d < e; ++d) {
						var s = tb(h[d].clone);l[d].$destroy();(k[d] = a.leave(s)).then(m(k, d));
					}h.length = 0;l.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
						c.transclude(function (d, e) {
							l.push(e);var f = c.element;d[d.length++] = b.$$createComment("end ngSwitchWhen");h.push({ clone: d });a.enter(d, f.parent(), f);
						});
					});
				});
			} };
	}],
	    Ne = Ma({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
			c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];c.cases["!" + d.ngSwitchWhen].push({ transclude: e, element: b });
		} }),
	    Oe = Ma({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, b, d, c, e) {
			c.cases["?"] = c.cases["?"] || [];c.cases["?"].push({ transclude: e, element: b });
		} }),
	    Sg = O("ngTransclude"),
	    Qe = Ma({ restrict: "EAC", link: function link(a, b, d, c, e) {
			d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");if (!e) throw Sg("orphan", ua(b));e(function (a) {
				a.length && (b.empty(), b.append(a));
			}, null, d.ngTransclude || d.ngTranscludeSlot);
		} }),
	    qe = ["$templateCache", function (a) {
		return { restrict: "E", terminal: !0, compile: function compile(b, d) {
				"text/ng-template" == d.type && a.put(d.id, b[0].text);
			} };
	}],
	    Tg = { $setViewValue: C, $render: C },
	    Ug = ["$element", "$scope", function (a, b) {
		var d = this,
		    c = new Sa();d.ngModelCtrl = Tg;d.unknownOption = G(F.document.createElement("option"));d.renderUnknownOption = function (b) {
			b = "? " + Ga(b) + " ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b);
		};b.$on("$destroy", function () {
			d.renderUnknownOption = C;
		});d.removeUnknownOption = function () {
			d.unknownOption.parent() && d.unknownOption.remove();
		};d.readValue = function () {
			d.removeUnknownOption();return a.val();
		};d.writeValue = function (b) {
			d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b);
		};d.addOption = function (a, b) {
			if (8 !== b[0].nodeType) {
				Ra(a, '"option value"');"" === a && (d.emptyOption = b);var g = c.get(a) || 0;c.put(a, g + 1);d.ngModelCtrl.$render();b[0].hasAttribute("selected") && (b[0].selected = !0);
			}
		};d.removeOption = function (a) {
			var b = c.get(a);b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1));
		};d.hasOption = function (a) {
			return !!c.get(a);
		};d.registerOption = function (a, b, c, h, k) {
			if (h) {
				var l;c.$observe("value", function (a) {
					v(l) && d.removeOption(l);l = a;d.addOption(a, b);
				});
			} else k ? a.$watch(k, function (a, e) {
				c.$set("value", a);e !== a && d.removeOption(e);d.addOption(a, b);
			}) : d.addOption(c.value, b);b.on("$destroy", function () {
				d.removeOption(c.value);d.ngModelCtrl.$render();
			});
		};
	}],
	    re = function re() {
		return { restrict: "E", require: ["select", "?ngModel"], controller: Ug, priority: 1, link: { pre: function pre(a, b, d, c) {
					var e = c[1];if (e) {
						var f = c[0];f.ngModelCtrl = e;b.on("change", function () {
							a.$apply(function () {
								e.$setViewValue(f.readValue());
							});
						});if (d.multiple) {
							f.readValue = function () {
								var a = [];q(b.find("option"), function (b) {
									b.selected && a.push(b.value);
								});return a;
							};
							f.writeValue = function (a) {
								var c = new Sa(a);q(b.find("option"), function (a) {
									a.selected = v(c.get(a.value));
								});
							};var g,
							    h = NaN;a.$watch(function () {
								h !== e.$viewValue || na(g, e.$viewValue) || (g = fa(e.$viewValue), e.$render());h = e.$viewValue;
							});e.$isEmpty = function (a) {
								return !a || 0 === a.length;
							};
						}
					}
				}, post: function post(a, b, d, c) {
					var e = c[1];if (e) {
						var f = c[0];e.$render = function () {
							f.writeValue(e.$viewValue);
						};
					}
				} } };
	},
	    te = ["$interpolate", function (a) {
		return { restrict: "E", priority: 100, compile: function compile(b, d) {
				if (v(d.value)) var c = a(d.value, !0);else {
					var e = a(b.text(), !0);e || d.$set("value", b.text());
				}return function (a, b, d) {
					var k = b.parent();(k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e);
				};
			} };
	}],
	    se = ca({ restrict: "E", terminal: !1 }),
	    Hc = function Hc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				c && (d.required = !0, c.$validators.required = function (a, b) {
					return !d.required || !c.$isEmpty(b);
				}, d.$observe("required", function () {
					c.$validate();
				}));
			} };
	},
	    Gc = function Gc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e,
					    f = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
						I(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw O("ngPattern")("noregexp", f, a, ua(b));e = a || void 0;c.$validate();
					});c.$validators.pattern = function (a, b) {
						return c.$isEmpty(b) || y(e) || e.test(b);
					};
				}
			} };
	},
	    Jc = function Jc() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e = -1;d.$observe("maxlength", function (a) {
						a = $(a);e = isNaN(a) ? -1 : a;c.$validate();
					});c.$validators.maxlength = function (a, b) {
						return 0 > e || c.$isEmpty(b) || b.length <= e;
					};
				}
			} };
	},
	    Ic = function Ic() {
		return { restrict: "A", require: "?ngModel", link: function link(a, b, d, c) {
				if (c) {
					var e = 0;d.$observe("minlength", function (a) {
						e = $(a) || 0;c.$validate();
					});c.$validators.minlength = function (a, b) {
						return c.$isEmpty(b) || b.length >= e;
					};
				}
			} };
	};F.angular.bootstrap ? F.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(da), da.module("ngLocale", [], ["$provide", function (a) {
		function b(a) {
			a += "";var b = a.indexOf(".");return -1 == b ? 0 : a.length - b - 1;
		}a.value("$locale", { DATETIME_FORMATS: { AMPMS: ["AM", "PM"], DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ERANAMES: ["Before Christ", "Anno Domini"], ERAS: ["BC", "AD"], FIRSTDAYOFWEEK: 6, MONTH: "January February March April May June July August September October November December".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), STANDALONEMONTH: "January February March April May June July August September October November December".split(" "), WEEKENDRANGE: [5, 6], fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", medium: "MMM d, y h:mm:ss a", mediumDate: "MMM d, y", mediumTime: "h:mm:ss a", "short": "M/d/yy h:mm a", shortDate: "M/d/yy", shortTime: "h:mm a" }, NUMBER_FORMATS: { CURRENCY_SYM: "$", DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ gSize: 3, lgSize: 3, maxFrac: 3, minFrac: 0, minInt: 1, negPre: "-", negSuf: "", posPre: "", posSuf: "" }, { gSize: 3, lgSize: 3, maxFrac: 2, minFrac: 2, minInt: 1, negPre: '-\xA4', negSuf: "", posPre: '\xA4', posSuf: "" }] }, id: "en-us", localeID: "en_US", pluralCat: function pluralCat(a, c) {
				var e = a | 0,
				    f = c;void 0 === f && (f = Math.min(b(a), 3));Math.pow(10, f);return 1 == e && 0 == f ? "one" : "other";
			} });
	}]), G(F.document).ready(function () {
		fe(F.document, Ac);
	}));
})(window);!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
// const callback = angular.element('callback_btn');

// const callbackAction = new function() {
//     const popup = angular.element('popup');

//     const nameField = angular.element('fname');
//     const phoneField = angular.element('fnumber');
//     const adressField = angular.element('fadress');
//     const submit = angular.element('popup_btn');
//     const infoBlock = angular.element('footer_info');

//     function open() {
//         nameField.value = '';
//         phoneField.value = '';
//         adressField.value = '';
//         popup.style.visibility = 'visible';
//         popup.style.opacity = 1;
//     }

//     function close() {
//         popup.style.visibility = 'hidden';
//         popup.style.opacity = 0;
//     }

//     function send(userInfo) {
//         close();
//     }

//     submit.addEventListener('click', function() {
//         const nameRegEp = /^[a-zA-Z]{2,30}$/;
//         const phoneRegExp = /^[0-9]{7,16}$/;
//         const adressRegExp = /\S+@\S+\.\S+/;
//         let isBreak = false;
//         const userInfo = {
//             name: nameField.value,
//             phone: phoneField.value,
//             adress: adressField.value
//         }
//         nameField.style.borderColor = '#232324';
//         phoneField.style.borderColor = '#232324';
//         adressField.style.borderColor = '#232324';

//         if (nameField.value === '' || !nameField.value.match(nameRegEp)) {
//             nameField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (phoneField.value === '' || !phoneField.value.match(phoneRegExp)) {
//             phoneField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (adressField.value === '' || !adressField.value.match(adressRegExp)) {
//             adressField.style.borderColor = '#eb4f4e';
//             isBreak = true;
//         }
//         if (isBreak) {
//             return;
//         }

//         send(userInfo);
//     });

//     return {
//         open : open,
//         close: close,
//         nameField: nameField.value,
//         phoneField: phoneField.value,
//         adressField: adressField.value
//     }
// };

// callback.addEventListener('click', callbackAction.open);
// const tweetsArrowRight = angular.element('tweets_next');
// const tweetsArrowLeft = angular.element('tweets_prev');

// const tweetsSlider = new function() {
//     const slideHolder = angular.element('tweets_hearth');
//     const slides = slideHolder.getElementsByClassName('tweets_hearth_tweet');
//     const slidesAmount = slides.length;
//     let currentSlide = 0;
//     slides[currentSlide].style.opacity = 1;
//     init(undefined);

//     function init(event) {
//         slideHolder.style.width = slides[currentSlide].clientWidth + 'px';
//         slideHolder.style.height =  slides[currentSlide].clientHeight + 'px';
//     }

//     function nextSlide() {
//         slides[currentSlide].style.opacity = 0;
//         currentSlide = currentSlide < slidesAmount - 1 ? currentSlide + 1 : 0;
//         slides[currentSlide].style.opacity = 1;
//     }

//     function prevSlide() {
//         slides[currentSlide].style.opacity = 0;
//         currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
//         slides[currentSlide].style.opacity = 1;
//     }

//     return {
//         init: init,
//         nextSlide: nextSlide,
//         prevSlide: prevSlide,
//         currentSlide: currentSlide,
//         slidesAmount: slidesAmount
//     }
// };

// tweetsArrowRight.addEventListener('click', tweetsSlider.nextSlide);
// tweetsArrowLeft.addEventListener('click', tweetsSlider.prevSlide);