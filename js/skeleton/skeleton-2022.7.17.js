




var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var url = '//diag.adsafeprotected.com/js?';
					try {
						var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
						url += 'code:fwjs-diag-' + code;
						url += '&err:' + errMsg;
						url += '&codeanderr:' + code + '_' + errMsg;
						if (config) {
							
							url += '&version:' + config.version || '';
							url += '&server:' + config.mn || '';
							url += '&region:' + config.region || '';
							url += '&mode:' + config.mode || '';
							url += '&forceAppend:' + config.forceAppend || '';
							url += '&asid:' + config.asid || '';
							url += '&anId:' + config.anId || '';
							url += '&advEntityId:' + config.advEntityId || '';
							url += '&pubEntityId:' + config.pubEntityId || '';
							url += '&mobOrTab:' + config.mobOrTab || '';
							url += '&app:' + config.app || '';
							url += '&mobAppWebview:' + config.mobAppWebview || '';
						}
						url += '&domless:' + __IASScope.isDomless;
					} catch (e) {
						url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.327',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.5.12.js", main: "static.adsafeprotected.com/main.19.8.327.js"},
		protocol: 'https',
		jsref: "",
		asid: "e5c6e7ca-05e9-11ed-b18c-06c967114c08",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime,forceKeepGoogleAdNode",
		minimizeCalls: "false",
		adWidth: "-1",
		adHeight: "-1",
		forceAppend: "null",
		sp_imp_maxLength: 10000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=33642",
		adsafeSrc: "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/33642\/3584127\/skeleton.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: true,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/pixel.adsafeprotected.com\/rjss\/st\/33642\/3584127\/skeleton.js",
		accountForSadImps: '',
		fwMonitoring: '',
		mn: "jsserver-primary-689ff677b6-nqnbs",
		mobOrTab: false,
		app: true,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/33642\/3584127\/",
		anId: '',
		advEntityId: '33642',
		pubEntityId: '3584127',
		videoId: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: '',
		iasProxyPartnerDomain: '',
		region: 'or'
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.3.25-iab3167'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//						value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//							enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
		var b = function() {
		};
		b.prototype = a;
		return new b;
	};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
		a.__proto__ = b;
		if (a.__proto__ !== b) {
			throw new TypeError(a + " is not extensible");
		}
		return a;
	} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
			UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app",
			WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", UNMEASURABLE:"unmeasurable", NO_WINDOW_FOCUS:"noWindowFocus"}, SupportedFeatures:{CONTAINER:"clid",
			VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY",
			OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels", HAS_WINDOW_FOCUS:"hasWindowFocus"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
		return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, $jscomp.arrayFromIterable(b));
			});
		}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.25-iab3167"};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		}};
	var module$exports$omid$common$OmidGlobalProvider = {};
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof globalThis && globalThis) {
			return globalThis;
		}
		var a = Function("return this")();
		if (a) {
			return a;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.isTopWindowAccessible = function(a) {
		try {
			return a.top.location.href ? !0 : !1;
		} catch (b) {
			return !1;
		}
	};
	module$exports$omid$common$windowUtils.evaluatePageUrl = function(a) {
		if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
			return null;
		}
		try {
			var b = a.top;
			return (0,module$exports$omid$common$windowUtils.isCrossOrigin)(b) ? null : b.location.href;
		} catch (c) {
			return null;
		}
	};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
				'"></iframe>'))));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
		this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
		if (a && a.injectionSource) {
			return a.injectionSource;
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
			a && b ? b() : !a && c && c();
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
			e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
		}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}





	
	__IASScope.isDomless = typeof window === "undefined";
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.25-iab3167'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}

	if (document.currentScript) {
		return document.currentScript;
	}
	
	var tempScript,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function getStart(baseName) {
		return _marks[baseName + START_CODE];
	}

	function getEnd(baseName) {
		return _marks[baseName + END_CODE];
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData,
		getStart: getStart,
		getEnd: getEnd
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(k,y,K){function oa(h){if(!k.executedContinueMain){k.executedContinueMain=!0;var a;k.perf.markStart(pa);cb(k).verifyContextNode();a=db();var c=a.mAdTalk,b=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,f=a.mBrowser,l=a.mPageUrls,u=a.mFeatures,p=v,t=a.renderDetector,x,w,D;k.perf.markStart(qa);k.b11="1"===k.adHeight&&"1"===k.adWidth?"true":"false";k.cnod=k.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:m.IMPRESSION_EVENT});
n.getAggregator().trigger("addOutputItem",{output:k.mainBirthdate},"mtim",{type:m.IMPRESSION_EVENT});h=k.hasOwnProperty("origMobOrTab")?k.origMobOrTab:k.mobOrTab;n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"mot",{type:m.IMPRESSION_EVENT});n.getAggregator().trigger("addOutputItem",{output:k.app?"1":"0"},"app",{type:m.IMPRESSION_EVENT});n.getAggregator().trigger("addOutputItem",{output:k.mobAppWebview?"1":"0"},"maw",{type:m.IMPRESSION_EVENT});h="undefined"!==typeof navigator?navigator.userAgent:
"";var z=u.bootstrapOn("app"),C=n.getAggregator().request("mobileApp"),B=C&&C.excludedByUserAgent();C&&C.isMobileAppEnvironment&&C.isMobileAppEnvironment()||B||!(-1<h.indexOf("IMDb-flg")||z)||(n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),n.getAggregator().trigger("addOutputItem",{output:z?"a_appt":"a_imdb"},"drul",{type:"impression"}));var N;try{c.isApplicable(v)&&(c.start(),b.addItem(c.getFrameMap(),"fm"),u.on("fm2")&&b.addItem(c.getFrameMapIncludingPeerCase(),
"fm2"),u.on("idMap")&&(N=c.getIdMap())&&b.addItem(N,"idMap"))}catch(J){d.add(m.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(f,u,p)&&e.start(),D=l.detectTopURL(),u.on("exch")&&(x=(new eb).createInstance(d,b),x.parse(D)),w=fb(),w.isApplicable(u)&&w.start(u),p.usesGroupMCustomMetric()&&gb(),t.start()}catch(J){d.add(m.ERROR_CODES.IMPRESSION_LEADUP)}k.perf.markEnd(qa);c=D;b=a.mVideo;try{hb(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(c),g.isFunction(b.triggerInitializationEvents)&&
b.triggerInitializationEvents()}catch(J){__IntegralASDiagnosticCall("impsend",J,k)}c=a.mBrowser;b=a.mIds;d=a.mViewability;e=a.mFeatures;f=a.mComm;l=a.mDataTransfer;u=a.mErrors;p=a.iOutput;t=a.loopDelay;x=a.mAdTalk;w=a.viewabilityMeasurement;a=a.mAncestorOrigins;D=v;try{k.perf.markStart(ra);var L=ib();L.start();L.addFieldTypes([m.DT_SLOT.IM,m.DT_SLOT.FF,m.DT_SLOT.ENVIRONMENT,m.DT_SLOT.FF_EXP]);var q=jb(c,b,d);q.isApplicable(e)&&q.start();var r;e.bootstrapOn("getTpl")&&e.on("usetpl")&&(r=kb(f,l,u,b,
p),r.init());lb(p,t,x,u,e,f,l,b,a);w&&w.start&&w.start();D.isDomless()||mb().start(["sca","xsca","rsrch"],e);nb();n.runTier(m.TIERS.VIEWABILITY);var sa=ob();sa.isApplicable(e)&&(sa.start(),T.recordBlockingTime(),k.perf.mark(pb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());k.perf.markEnd(ra)}catch(J){u.add(m.ERROR_CODES.POST_IMPRESSION)}k.perf.markEnd(pa)}}function qb(h,a,c,b,d,e,f,l,u,p){try{k.perf.markStart(ta),k.tpiLookupURL&&rb(f,l).init(k.tpiLookupURL),v.isDomless()||p.isStarted()&&
p.sendOriginList(),n.runAll(),q.execAtEndOfThread(function(){var e;try{k.perf.markStart(ua);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:m.DT_CODES.ADTALK});g.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:m.DT_CODES.ADTALK});k.perf.markEnd(ua);var f,l;k.isSplitMode&&(l=k.protocol+"://"+k.sp_cdnScripts.main,k.perf.markResource(va,l));k.impUrl&&k.perf.markResource(sb,k.impUrl);f=k.perf.getData();n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.IM,
"prf",g(f).toION());c.isApplicable(v)&&c.sendAdTalkCall()}catch(D){b.add(m.ERROR_CODES.ADTALK_DELAY)}}),k.perf.markEnd(ta)}catch(t){b.add(m.ERROR_CODES.EVENT_LOOP_ONE)}}function tb(h){var a=new ub(h,v),c=new vb,b=new wb(h,v),d=xb(h,v),e=(new yb(k,v,h)).resolve(),f=[a],l=[];d.applies()&&f.push(d);b.applies()&&f.push(b);c.applies(h,v)&&f.push(c);g(e).each(function(a,b){f.push(new zb(b,v));l.push(b.id)});0<l.length&&(n.getAggregator().trigger("addOutputItem",{output:l.join(".")},"scm",{type:m.IMPRESSION_EVENT}),
n.getAggregator().trigger("addOutputItem",{output:l},"metricIdList",{type:m.DT_CODES.UNLOAD,asION:!0}));return f}function Ab(h,a){return!v.isVideo()||v.isOmid()||v.isInMobiMraidVideo()?{}:Bb(k.videoId,h,a)}function db(){var h,a,c,b,d,e,f,l={};k.perf.markStart(wa);var u=n.getAggregator();Cb();l.mFeatures=u.request("features");l.mFeatures||(l.mFeatures=u.provide("features",xa()));k.integration&&l.mFeatures.setReportedBootstrapFeatures("intblk","integration");k.autotagSizeSet&&l.mFeatures.setReportedBootstrapFeatures("ats",
"autotagSizeSet");k.encodeInvalidUrlChars=v.isDomless()?!1:l.mFeatures.on("encodeInvalidUrlChars");u.provide("mobileApp",function(){return h=h||new Db(l.mFeatures)});u.provide("context",v);l.mBrowser=u.provide("browser",(new Eb).createInstance());l.mErrors=u.request("mErrors");l.mIds=u.provide("ids",Fb());l.iOutput=Gb(u);u.request("mJsonp");l.mComm=u.request("mComm");l.viewabilityMeasurement=(new Hb(Ib(l.mIds),l.mFeatures,l.mBrowser)).create();c=u.request("omidAdSessionContext");Jb(c,u);l.mFeatures.on("swapids")&&
(k.oid=k.asid,k.asid=l.mIds.unq);l.mAdTalk=(new Kb).createInstance(l.mFeatures);a=Lb();c=Mb(u);b=u.provide("mPage",(new Nb).createInstance());l.mAncestorOrigins=Ob();l.mPageUrls=u.provide("pageUrls",(new Pb).createInstance(l.mAncestorOrigins,q));d=u.provide("mScreenEvents",Qb());u.provide("ieXDomainViewability",Rb(l.mBrowser));e=Sb(l.mBrowser);f=Ab(l.mFeatures,d);l.mVideo=u.provide("video",f);Tb(Ub.build());e=(new Vb).createInstance(l.mErrors,e,l.mFeatures);b=(new Wb).createInstance(e,l.mErrors,b,
v);f=u.provide("jobFactory",Xb());l.mDataTransfer=Yb(e,l.mErrors,l.mFeatures,l.mIds,l.iOutput,l.mBrowser,d,a);a=Zb(l.mErrors,l.mFeatures,u,c);l.mMode=$b(a,l.mFeatures,l.viewabilityMeasurement.isImmediate());l.mViewability=u.provide("viewability",ac(O(),l.viewabilityMeasurement,l.mBrowser,l.mDataTransfer,l.mFeatures,u,l.iOutput,b,d,l.mVideo));bc(l.mFeatures,l.mViewability,c,f);l.loopDelay=ya();l.renderDetector=cc();l.mDataTransfer.setViewabilityMod(l.mViewability);k.perf.markEnd(wa);return l}function za(h){var a=
h&&h.sca,c=h&&h.xsca,b=h&&h.w,d=h&&h.h;return function(e){e="string"===typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(k,e);else for(var f in e)k[f]=e[f];k.isResolved=!0;k.sp_cdnScripts={sca:a,xsca:c};b&&d&&(k.adWidth=b,k.adHeight=d,k.autotagSizeSet=!0);oa(k.isNewBuild)}}function Cb(){var h,a,c;c=n.getAggregator().request("omidAdSessionContext");h=c.app&&c.isDisplay&&!c.isWeb;(a=k.mobFwUrl&&-1<k.mobFwUrl.indexOf("/blocking/"))&&c.isLimitedSandbox&&"1"===k.adWidth&&"1"===k.adHeight&&(c.isLimitedSandbox=
!1);h&&a&&(c.delayingViewabilityEvents=!0);if("app"===c.environment||!0===k.mobAppWebview)k.origMobOrTab=k.mobOrTab,k.mobOrTab=!0}function Jb(h,a){if(h&&h.queuedOutputItems)for(var c=0;c<h.queuedOutputItems.length;c++)a.trigger("addOutputItem",{output:h.queuedOutputItems[c].value},h.queuedOutputItems[c].code,{type:"impression"})}function bc(h,a,c,b){var d=tb(h);n.getAggregator().provide("viewabilityDefinitions",d);return g(d).map(dc(h,a,c,b))}function lb(h,a,c,b,d,e,f,l,u){var p;"true"!==k.minimizeCalls&&
(p=(new Date).getTime(),q.execAtEndOfThread(function(){qb(h,a,c,b,p,d,e,f,l,u)}))}function Aa(h){if(k.isResolved)oa(k.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(e){}var a,c=h;a={37103:"https://vfw.amazon-adsystem.com/ias/j"};var b=/iasProxyPartnerId=([\d]+)/g.exec(c&&c.config),b=b&&b[1];a=c&&c.host||a[b]||"https://jsconfig.adsafeprotected.com";b=h&&h.config;c=h&&h.contentType;try{var d=k.contextNode.src;-1!==d.indexOf("fw.js")&&-1!==d.indexOf("?")&&(k.staticFwjsMacros=d.split("?")[1])}catch(e){}b&&
(d=a+"/jsconfig"+b+(k.adSessionId?"&adSessionId="+k.adSessionId:""),"application/json"===c?n.getAggregator().trigger("getJSON",d,za(h)):n.getAggregator().trigger("jsonp",d,za(h),!1,"cbName"))}}function dc(h,a,c,b){return function(d,e){var f,l,u;f=Ba(e,a);var p=ec(c,h,e.rts).getCallbacks(),t=Ca(b.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId));e.sendOtherwiseInViewSignal&&(u=Ba(e,a,e.sendOtherwiseInViewSignal),l=Ca(b.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId,e.sendOtherwiseInViewSignal)));
e.rtsCallbacks=p;e.thresholdType===m.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?f=fc(f,e,t,v.isVideo()):(f=Da(f,X(e.minUnit),t),e.sendOtherwiseInViewSignal&&(l=Da(u,X(e.minUnit),l,e.sendOtherwiseInViewSignal),l.start()));f.start();return f}}function gc(h){var a,c,b;k.mainBirthdate=k.hasOwnProperty("birthdate")?(new Date).getTime()-k.birthdate:-1;k.perf.markStart(Ea);k.isNewBuild=h;h=[hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,
h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});k.isResolved&&h.provide("features",xa());a=yc();c=Fa();b=(new zc).createInstance(a,c);h.provide({mErrors:a,mJsonp:c,mComm:b});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:ba(a),adSessionReadyStrategy:Ac(a)},{environment:Bc(),adSessionReadyStrategy:Cc()}];(new Dc(h)).resolve().adSessionReadyStrategy.start();k.perf.markEnd(Ea)}
var Ga={};if(Object.assign)k=Object.assign({},k);else{for(var Ha in k)Ga[Ha]=k[Ha];k=Ga}var g=function(h){return new E(h)},E=function(h){this.iterable=h};E.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,c=!this.isArray()&&a;return h?a:c};E.prototype.isArray=function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(h){return 0===this.keys(h).length};E.prototype.each=function(h,a){var c=this.iterable;if(c.length===+c.length)for(var b=
0,d=c.length;b<d;++b)h(b,c[b]);else for(b in c)(c.hasOwnProperty(b)||a)&&h(b,c[b])};E.prototype.map=function(h,a){var c=[];this.each(function(b,d){var e=h(b,d);if(void 0!==e||a)c[c.length]=e});return c};E.prototype.stringify=function(h,a){a=a||",";var c=[];this.each(function(a,d){var b=h(a,d);g.isDef(b)&&c.push(b)});return c.join(a)};E.prototype.toION=function(h,a){var c,b="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;
this.isArray()?c=this.map(function(b,c){return g(c).toION(h,a)}):(b="{",d="}",c=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),e=g(c).toION(h,a);return d?e:(h[b]||b)+":"+e}));return b+c.join(",")+d};E.prototype.compareTo=function(h){var a=!1;this.each(function(c,b){h[c]!==b&&(a||(a={}),a[c]=b)});return a};E.prototype.toParams=function(h){return this.stringify(function(a,c){return"string"===typeof a&&-1!==a.indexOf("NULL")?c:a+":"+c},h)};E.prototype._privateMixin=function(h,
a,c){for(var b in a)g.isDef(a[b])&&(c||a.hasOwnProperty(b))&&(h[b]=a[b]);return h};E.prototype.mapToObj=function(h){var a={},c=this;this.each(function(b,d){var e=h(b,d);g(e).isObj()&&c._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(h,a){var c={};c[a]=h;return c})};E.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};E.prototype.find=function(h){var a;this.each(function(c,b){h(c,b)&&(a=b)});return a};E.prototype.findFirst=function(h){var a,
c;this.each(function(b,d){!c&&h(b,d)&&(a=d,c=!0)});return a};E.prototype.keys=function(h){var a=[];this.each(function(c){a.push(c)},h);return a};E.prototype.asStrings=function(){var h={};this.each(function(a,c){h[a]=""+c});return h};E.prototype.selectProperties=function(h){var a={},c=this;g(h).each(function(b,d){g.isDef(c.iterable[d])&&(a[d]=c.iterable[d])});return a};E.prototype.filter=function(h,a){return this.map(function(a,b){var c;if(g.isUndef(h)||g.resolve(h,a,b))c=b;return c},a)};E.prototype.toArray=
function(){return this.map(function(h,a){return a})};E.prototype.JSONStringify=function(){var h,a,c=!1;y.Prototype&&y.Prototype.Version&&-1===y.Prototype.Version.indexOf("1.7")&&(c=!0);c&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);c&&(Array.prototype.toJSON=a);return h};E.prototype.contains=function(h){var a=g(this.iterable).findFirst(function(a,b){return h===b});return g.isDef(a)};g.toBase=function(h,a){var c,b=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
e=[];h=b?-h:h;do c=h%a,e.push(d[c]),h=(h-c)/a;while(0<h);e=e.reverse().join("");return b?"-"+e:e};g.isDef=function(h){return"undefined"!==typeof h};g.isUndef=function(h){return!g.isDef(h)};g.isBool=function(h){return"boolean"===typeof h};g.noop=function(){};g.identity=function(h){return h};g.isFunction=function(h){return"function"===typeof h};g.isStr=function(h){return"string"===typeof h};g.useIfDef=function(h){return g.isDef(h)?h:!1};g.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};
g.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};g.resolve=function(h){var a=g(arguments).toArray();a.shift();return g.isFunction(h)?h.apply({},a):h};g.flatJSONParse=function(h){var a,c,b,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(b=d.exec(h);b;)a=b[1],c=b[3],b=b[2],e[a]=c||+b,b=d.exec(h);return e};g.debounce=function(h,a,c){var b,d=c||y;return function(){var c=this,f=arguments;d.clearTimeout(b);b=d.setTimeout(function(){b=null;h.apply(c,f)},a)}};g.last=function(h){return h[h.length-
1]};g.collapseArgsIntoHash=function(h,a){var c={};a?c[h]=a:c=h;return c};g.fromBoolToNum=function(h){return h?1:0};g.isNumeric=function(h){return g.isDef(h)&&null!==h&&!isNaN(h)};g.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};g.encodeInvalidUrlChars=function(h,a){var c={$:"%24","[":"%5B","]":"%5D","{":"%7B","}":"%7D","|":"%7C"},b=h;a&&"string"===typeof h&&(b=h.replace(/%(?![0-9A-F][0-9A-F])/gi,"%25"),b=b.replace(/\$|\[|\]|\{|\}|\|/gi,function(a){return c[a]}));return b};var n=
function(){var h,a={},c=[],b=[],d=function(){var a={},c=g(arguments).toArray();c.unshift(a);b.push(c);return a},e=function(b,d,e,p,t){t=t||{};var f,l,u=function(a){0===c.length&&(c=g(a).map(function(a,b){return h.request(b)}))},m=function(){if(!f){var a=[];f=!0;u(["features","browser","context"]);t.emits&&(b.events=new O);if(!t.applies||t.applies.apply(t,c))l=!0,a=g(e).map(function(a,b){return h.request(b)},!0),a.push(b),g(b).mixin(p.apply({},a))}};(function(){var b=t.tier;g.isDef(b)&&(a[b]=a[b]||
new ca,a[b].push(m))})();h.provide(d,function(){var a;m();l&&(a=b);return a});return b};d.runAll=function(){var b=g(a).keys().sort(function(a,b){return a-b});g(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new Ia;g(b).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),m={MRC_LARGE_AD_SIZE:242500,IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",
NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",
BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v",WINDOW:"w"},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",
ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",
NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},
MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,.01,.2,.25,.3,.5,.7,.75,.8,.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,.1,.2,.25,.3,.4,.5,.6,.7,.75,
.8,.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",REFERRER_POLICY:"no-referrer-when-downgrade",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",
CONTENT_STYLED:"cs",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},Ea="mf",pa="cm",wa="in",qa="pr",ra="po",pb="bl",ta="lo",ua="lt",va="md",sb="id",cb=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,c=K.getElementsByTagName("script"),b=c.length,d=c[b-1],e=h.scriptUrl;try{for(;0<=--b;)if(a=c[b],a.src&&
0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(f){}h.contextNode=d}}}},Fc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],c=m.RENDER.CREATIVE_NODE_TYPES.concat(m.RENDER.CONTAINER_NODE_TYPES),b=0,d=k.useFIF&&v.friendlyIframe||v.isSpecifiedAd(),e=0,f=[],l=function(l){var p=r.isNodeXDomainIframe(l)||r.isNodeCreative(l),u=!l;h=u?k.contextNode.parentNode:l;if(p||u){var x=f.length;0<x&&(e<x?e=x:(e=0,f=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",
l)}else{if(d){var w;w=p=l;u=v.friendly?q.getTop().document.body:k.contextNode.ownerDocument.body;for(;3>b;){if(u&&p===u){w=p;b=3;break}r.isWindow(p)&&(w=r.crossQuerySelector("["+m.AD_IDENTIFIER+"-"+k.asid+"]"),p=g.isDef(w)?w:p);w=p=g.isDef(p)?p.parentNode||p:p;b++}p=w}else p=l;if(r.isWindow(p)){try{x=p.document}catch(C){x=k.contextNode.ownerDocument}l=x}else"IFRAME"===r.getNodeName(p)?(f.push(l),l=l.contentWindow.document):l=p;var x=[],u=(p=l&&l.getElementsByTagName&&l.getElementsByTagName("*"))&&
p.length,D;if(p)for(var z=0;z<u;z++)D=(w=p[z])&&w.nodeName&&w.nodeName.toUpperCase(),!w.children||0!==w.children.length||g(c).contains(D)||g(a).contains(D)||g(x).contains(D)||x.push(D);x=c.concat(x);(new Ec(x,f)).searchDescendants(l)}};n.getAggregator().on("creativeFinderBatchCompleted",l);return{find:l,getClosestContainerName:function(){return r.getNodeName(h)}}},Ec=function(h,a){var c=function(b){function c(b){var c=r.getNodeName(b),d=r.isNodeCreative(b)||"IFRAME"===c;c&&d&&!r.isEmptyFriendlyFrame(b)&&
(c=r.getNodeArea(b),c>h&&!g(a).contains(b)&&(l=b,h=c))}function e(){do c(b[f]),f+=1;while(0!==f%500&&f<b.length);f<b.length?q.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",l)}var f=0,l=null,h=-1;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(;f<b.length;f++)c(b[f]);n.getAggregator().trigger("creativeFinderBatchCompleted",l)}};return{searchDescendants:function(a){a=a||k.contextNode.parentNode;var b,e,f=[];for(b=0;b<h.length;b++){e=h[b].toLowerCase();
var l=a.getElementsByTagName&&a.getElementsByTagName(e);if(l&&l.length)for(e=0;e<l.length;e++)f.push(l[e])}c(f)}}},cc=function(){var h,a=!1,c=!1,b=!1,d={status:m.RENDER.STATUS.OTHER,details:m.RENDER.DETAILS.OTHER},e={status:m.RENDER.STATUS.DETECTED,details:m.RENDER.DETAILS.ENVIRONMENT},f=n.getAggregator().request("omidAdSessionContext"),l=function(){b=a=!0},u=function(a){a&&(a.status=m.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},p=function(){var a=!1;v.isOmid()&&f&&f.useOMID13Logic&&
(a=!0);return a},t=function(a,b){h.save(m.RENDER.DIAGNOSTIC.CONTENT_STYLED);var c=/url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(b.content)[1],d=r.createImage();d.onload=function(){0<d.naturalHeight*d.naturalWidth&&a.setAttribute&&a.setAttribute("data-ias-rend-bi",!1)};d.src=c;a.setAttribute("data-ias-rend-bi",!0)},x=function(a){var b={},c=q.getDoc(),d=function(e){var f=e&&e.type;if("readystatechange"===f&&"complete"===e.target.readyState||"load"===f)u(b),h.saveNode(a),"readystatechange"===f?h.save(m.RENDER.DIAGNOSTIC.DOCUMENT_READY):
"load"===f&&h.save(m.RENDER.DIAGNOSTIC.LOAD_FIRED),z(b),A.removeEvent(a,"load",d),A.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(u(b),h.saveNode(a),h.save(m.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(A.addEvent(a,"load",d),A.addEvent(c,"readystatechange",d));return b},w=function(){var a=q.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){A.removeEvent(a,"ready",c);h.save(m.RENDER.DETAILS.ENVIRONMENT);h.save(m.RENDER.DIAGNOSTIC.MRAID_READY);u();z({status:m.RENDER.STATUS.DETECTED})};
h.save(m.RENDER.DETAILS.ENVIRONMENT);"default"===b?(u(),h.save(m.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=m.RENDER.STATUS.DETECTED):"loading"===b?(A.addEvent(a,"ready",c),h.save(m.RENDER.DIAGNOSTIC.MRAID_LOADING)):(A.addEvent(a,"ready",c),h.save(m.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));z(d)},k=function(a){a===m.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:m.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:m.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},z=function(b){var c=
h.build();b=b.status||d.status;c=c?c:d.details;a&&b===m.RENDER.STATUS.DETECTED?(k(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(k(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},C=function(){n.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Fc,f=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(r.isNodeXDomainIframe(a))b?
q.clearInterval(b):f=!1,c=x(a);else if(a){var d=!1,l=r.getRect(a),p;if(p=a&&"IMG"===r.getNodeName(a)){p=!0;var w=g.isDef(a.naturalWidth)?a.naturalHeight*a.naturalWidth:0,k=getComputedStyle(a),n=0===a.src.length&&H.contains(k.content,"url"),D=a.getAttribute&&a.getAttribute("data-ias-rend-bi");0<w&&!n&&(p=!1);"false"===D&&(h.save(m.RENDER.DIAGNOSTIC.CONTENT_STYLED),p=!1);n&&!D&&t(a,k)}p&&(d=!0,h.save(m.RENDER.DIAGNOSTIC.BROKEN_IMAGE));!d&&l.width>=m.RENDER.WIDTH_THRESHOLD&&l.height>=m.RENDER.HEIGHT_THRESHOLD&&
(u(c),b?q.clearInterval(b):f=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);z(c)});var l=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(M){n.getAggregator().trigger("renderdiag",M)}},p=n.getAggregator().request("mobileApp");p&&p.isMobileAppEnvironment&&p.isMobileAppEnvironment()&&v.isMraid()?w():(l(),f&&(b=q.setInterval(l,500)));n.getAggregator().trigger("eligiblerender")})},B=function(){var a=f&&!!f.isVideo,b=!p()||f&&!!f.videoStartArrived,d=
!p()||f&&!!f.geometryArrived,l=!f.omidEarlyExit||f.omidImpressionArrived,g=!(f.omidEarlyExit&&p())||f.omidLoadedArrived;return!c&&d&&l&&g&&(!a||b)?(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"oren"),n.getAggregator().trigger("eligiblerender"),h.save(m.RENDER.DETAILS.ENVIRONMENT),h.save(m.RENDER.DIAGNOSTIC.OMID_RENDERED),u(),z(e),c=!0):!1};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:m.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),
code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return b});h=new Hc;new Ic;n.getAggregator().on("impressionsent",l);p()||f.omidEarlyExit?B()||(h.save(m.RENDER.DETAILS.ENVIRONMENT),h.save(m.RENDER.DIAGNOSTIC.OMID_UNRENDERED),z(d),n.getAggregator().on("omidrendgeoupdate",function(){B()}),n.getAggregator().on("omidrendvideostart",function(){B()}),f.omidEarlyExit&&
(n.getAggregator().on("omidimpressionarrived",function(){B()}),n.getAggregator().on("omidloadedarrived",function(){B()}))):v.isOmid()||v.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),u(),z(e)):(z(d),C())}}},Hc=function(){var h=[],a=[],c=function(a){var c;if(r.isWindow(a))c="WINDOW";else if(r.isNodeXDomainIframe(a))c="XIFRAME";else try{c=r.getNodeName(a)}catch(f){b("nen")}return c},b=function(a){h.push(a)};return{build:function(){var b=[];g(a).each(function(a,c){b.push(c)});
g(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:c,save:b,saveNode:function(d){try{var e=d&&c(d),f=d&&r.getRect(d),l=d&&r.hasBackgroundImage(d),h=d&&d.innerText&&0<d.innerText.length,p=d&&d.children&&0===d.children.length&&h,g=f&&f.width>=m.RENDER.WIDTH_THRESHOLD&&f.height>=m.RENDER.HEIGHT_THRESHOLD?m.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:m.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;a.push(e);a.push(g);l&&a.push(m.RENDER.DIAGNOSTIC.STYLED_NODE);p&&a.push(m.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(x){b("sne")}}}},
Ic=function(h){var a,c=!1,b=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&c?"1":"0"},"rmeas");a&&a.message&&!b&&(__IntegralASDiagnosticCall("renderloop",a,k),n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,"rle",1),b=!0)};n.getAggregator().on("eligiblerender",function(){c=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},Y=function(){return{applies:function(h,a){var c=n.getAggregator().request("mobileApp");return(h.browserIs(m.BROWSERS.CHROME)||
h.isAndroidWebViewBrowser()||h.browserIs(m.BROWSERS.WEBKIT)||h.browserIs(m.BROWSERS.MSEDGE))&&!c.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Jc=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(m.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(m.BROWSERS.WEBKIT)||h.browserIs(m.BROWSERS.MSEDGE))&&!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},gb=function(){var h,a,c=!1,b=n.getAggregator().request("mPage"),d=function(){!c&&
a&&h&&!b.isHidden()&&(c=!0,n.getAggregator().trigger("sendDt",m.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=m.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});b.onHiddenChange(d)},Lb=function(){var h=[],a={},c={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},b={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(b){b=g(b).selectProperties(g(c).keys());
b=g(b).asStrings();var e=g(b).compareTo(a);(e=d(e))&&JSON.stringify(e)!==JSON.stringify({})&&(e.t=v.getTagTime(),h.push(e));g(a).mixin(b)});var d=function(a){g(b).each(function(b,c){var d=!1;g(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return g(h).toION(c)}}},Ia=function(){var h=new Kc,a=new O;return g(h).mixin(a)},O=function(){var h={},a={},c=function(b,c,f){if((b=a[b])&&0!==b)return f&&(b=b.slice(0,1)),g(b).each(function(a,b){c.apply({},b)}),
!0},b=function(a,b,c){h[a]=h[a]||new ca;h[a].push(b,c)};return{on:function(a,e){var d={};e?d[a]=e:d=a;g(d).each(b);g(d).each(c)},once:function(a,e){c(a,e,!0)||b(a,e,1)},trigger:function(a){var b=g(arguments).toArray();b.shift();var c=h[a];c&&c.run.apply({},b)},persistentTrigger:function(b){var c=g(arguments).toArray();c.shift();var d=b;a[d]=a[d]||[];a[d].push(c);(d=h[b])&&d.run.apply({},c)}}},fa=function(){var h=function(a,b,d){var c,f=b.length,l=r.isWindow(a)?a.frames:r.getChildWindowsOf(a);d&&d(a,
b);if(l&&l.length){for(a=0;a<l.length;a++)(c=l[a])&&r.isWindow(c)&&(b[f]=a,h(c,b,d));b.pop()}},a=function(a,b){try{h(b||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(c,b){var d=[];a(function(a){var b;if(b=r.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},b);return g(d).filter(c)}}},ca=function(){var h=[];return{push:function(a,c){var b=0;c=c||Number.MAX_VALUE;h[h.length]=function(){b<c&&(b++,a.apply({},arguments))}},run:function(){var a=arguments;
g(h).each(function(c,b){b.apply({},a)})}}},Ca=function(h){var a={};return{doEligibleJobs:function(c){g(h).each(function(b,d){var e=d&&d.getTime();g.isDef(e)&&c>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ka=function(){var h,a=new ga,c=function(b,c,e,f){var d,h,p,t;if(JSON&&JSON.parse)try{d=JSON.parse(b.data),h=b.source,t=g.noop,c(d)&&(f&&(p=f(h,d))&&(t=function(){a.send(function(){return p},h)}),e(b,d,t))}catch(x){d&&n.getAggregator().trigger("error",m.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,
d,e){h=function(b){c(b,a,d,e)};A.addEvent(y,"message",h)},stop:function(){h&&A.removeEvent(y,"message",h);h=null}}},ga=function(){var h=function(a){return g(a).isObj()?[a]:(new fa).getFrames(a)},a=function(a){return g(a).mapToObj(function(a,c){var b;g.isFunction(c)||(b={},b[a]=c);return b})};return{send:function(c,b){if(JSON&&JSON.stringify){var d=h(b);g(d).each(function(b,d){var e;e=g.resolve(c,d)||{};e.sentTime=q.now();e=a(e);d.postMessage(g(e).JSONStringify(),"*")})}}}},Lc=function(h,a){return{onAll:function(c){var b=
{};g(a).each(function(d,e){h.on(e,function(){b[e]=1;g(b).keys().length===a.length&&(b={},c())})})}}},Gb=function(h){var a=0,c={},b=function(b,c,d){if(g.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=g.resolve(b.output);this.props.asION&&(a=g(a).toION());return a}},d=function(a){var b,d,e=[];for(b in c)c.hasOwnProperty(b)&&(d=a(b,c[b]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==
typeof e?e:{};var f=function(a,d,e){a=new b(a,d,e);c[a.id]=a};g(a.output).isObj()&&!e.asION?g(a.output).each(function(a,b){f({output:b},a,e)}):f(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,f;a(e)&&(f=d.output(),e.encode&&(c=encodeURIComponent(c),f=encodeURIComponent(f)),g.isFunction(b)?b(c,f):b[c]=f)})},iterate:d,cleanup:function(){d(function(a,b){b.props.flagForRemoval&&delete c[a]})},getItem:function(a){return c[a]}}},
Kc=function(){var h={},a=function(a,b){h[a]=b};return{request:function(a){var b,c=h[a],e=g(arguments).toArray();e.shift();g.isUndef(c)||(b=g.isFunction(c)?c.apply({},e):c);return b},provide:function(c,b){b?h[c]=b:g(c).each(a);return b}}},Wb=function(){return{createInstance:function(h,a,c,b){return v.isDomless()?new Mc:new Nc(h,a,c,b)}}},Nc=function(h,a,c,b){var d;return{collect:function(){var a=h.find(),f=a.getOutOfViewReasons(),l=c.isHidden(),u=b.isDeviceTypeGroupMobile()&&d?d:F(r.calcWinDims()),
p=a.getDims();d=u;if(!a.hasAd()||!u.hasValidDims()||!p.hasValidDims())return{viewState:m.NA,posViewState:m.NA,embedded:v.embedded,winDimensions:u,adDimensions:p};!0===l&&f.push(m.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:u,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:f.length?m.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),
reason:f.join("."),obstructed:g.stringifyTriState(a.isObstructed()),isHidden:g.stringifyTriState(a.isHidden()),tabHidden:g.stringifyTriState(l),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Mc=function(){return{collect:function(){return{}}}},Oc=function(h){h=h||g.identity;var a=[],c=q.now(),b=function(){var b=q.now();a.length&&(a[a.length-1].duration+=b-c,c=b)};return{clear:function(){b();a=[]},fastForward:b,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(c){var d=a[a.length-1];c=h(c);b();0!==a.length&&c===d.state||a.push({state:c,duration:0})}}},La=function(h,a){var c=h||1,b=0,d=0,e,f=0;return{start:function(){0===b%c&&(e=q.now())},stop:function(){var l=e||a;0===b%c&&(f+=q.now()-l,d++);b++},getTime:function(){return f},getCount:function(){return d}}},Ma=function(){var h,a=0,c=0,b=new O(!0),d=function(){h&&(a++,b.trigger(a),c>a?q.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,
d){var e=g.collapseArgsIntoHash(a,d);g(e).each(function(a,b){a=parseInt(a);c=a>c?a:c});b.on(e)},start:function(){h||(h=!0,q.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Pc=function(h,a){var c,b=a,d=function(a){c||(a&&h(),c=q.setInterval(h,b))},e=function(a){c&&(a&&h(),q.clearInterval(c),c=null)};return{start:d,stop:e,updateFrequency:function(a,l){b=a;c&&(e(),d(l))}}},X=function(h){var a,c,b=0,d=v.getTagTime(),e=0,f=!1;return{getTotalTime:function(){return e},stop:function(){b=0;d=
v.getTagTime();f=!1},mark:function(){a=f?v.getTagTime()-d:0;b+=a;b>=h&&(c=b-a<h,e+=c?b:a);d=v.getTagTime();f=!0}}},U=function(h,a){var c=h||k.adsafeSrc||k.requrl;c&&0===c.indexOf("http")||(c=0===c.indexOf("//")?k.protocol+":"+c:k.protocol+"://"+c);var c=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(c)||[],b=c[1]?c[1]:"",d=c[2]?c[2]:"",e=c[3]?c[3]:"",f=c[4]?c[4]:"",l=c[5]?c[5]:"",u=h&&c[6]?c[6]:"",p=c[7]&&a?c[7]:"",t={},x=function(a){"string"===typeof a&&(f=a);return f},m=
function(a){"string"===typeof a&&(l=a);return l},n=function(a,b){var c=a+"="+g(b).toION();return g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars)},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=t[b])?t[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:b,hostname:e,sub:x,master:m,setParam:function(a,b){t[a]=t[a]||{};"string"===typeof b||"number"===typeof b?t[a]=b:g(t[a]).mixin(b)},path:function(a){u=
a},toString:function(){var a=x()?x()+".":"",b=u?"/"+u:"",c;p||!g(t).isEmpty()?(c=g(t).isEmpty()?"":g(t).stringify(n,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+m()+b+c}}},nb=function(){var h=function(a){var b=[];g(a).each(function(a,c){400>=b.concat(c).join("").length&&b.push(c)});return b},a=function(a,b){var c;b&&b.id&&(c=b.id.replace(/[^\w-_.>\/]/g,""));return c};return function(){var c,b;try{if(v.friendly&&!v.isMobileApp())if(c=n.getAggregator().request("adSlotIds"))b=c;else{var d,e;if(d=
r.getOurNodeInTop()){var f=r.getAncestorNodes(d);e=g(f).map(a)}if(c=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:c},"slid",{type:m.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",c),b=c}return b}catch(l){n.getAggregator().trigger("error",m.ERROR_CODES.AD_SLOT_ID)}}()},tc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,b=k.asid,d=this.getChanId(),e=k&&k.contextNode&&k.contextNode.nextSibling&&k.contextNode.nextSibling.id;
b&&d&&(this.recordAdSlotImpression(b,d,e,function(b,c){b?n.getAggregator().trigger("error",m.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(c)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=k.reqquery.split("&"),b,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var f=d.exec(a[e]);f&&3===f.length&&"chanId"===f[1]&&(b=f[2])}return b},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+
"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,b,d,e){var c=q.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:b,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(p){e(p)}},!1);c.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,b){var c=this,e=k.adRefreshThreshold&&parseInt(k.adRefreshThreshold)||
null,f=q.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(d,h){d===m.DT_CODES.PING&&h===e&&(q.execAtEndOfThread(function(){f.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:b}),"*")}),c.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};v.isRefreshable(function(c,b){var d;if(!c&&b)try{d=JSON.parse(b),d.isRefreshable&&
d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",m.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:m.TIERS.ENVIRONMENT,applies:function(h,a,c){return c.isPossiblyRefreshable()}}},Ob=function(){var h,a,c=function(a,c){-1!==c.indexOf("https")&&(c+="*");return c.replace(/^https?:\/\//,"")};return{isApplicable:function(a,c,e){var b;if(b=e.isVideo()&&!(e.isMraid()||e.isOmid()))b=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):void 0,b=3.7>
b;return!b&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&c.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=q.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",m.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return g.last(h)},sendOriginList:function(){var a;a="ao:"+(h?g(h).map(c).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",
{type:m.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",m.DT_CODES.THIRD_PARTY)}}},kb=function(h,a,c,b,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},f=function(d){try{a.diagnostic("c");var f=d.length,l=0,t=0;e(f,0,0);g(d).each(function(a,c){h.send(c.replace("%%CBS%%",b.getCacheBustId()),function(){e(f,l,++t)},!0);e(f,++l,t)})}catch(x){c.add(m.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new U).fullDom;"/"!==a.slice(-1)&&(a+="/");a+=
"tpl?asId="+k.asid;h.jsonp(a,f)}catch(u){c.add(m.ERROR_CODES.AT_INIT)}}}},Zb=function(h,a,c,b){return{enabled:"true"===k.useBapiCallback,callback:function(a){c.trigger("sendDiag");try{"true"===k.accountForSadImps&&b.measure(a),k._onAPIResult&&k._onAPIResult(a)}catch(e){h.add(m.ERROR_CODES.BAPI_CALLBACK),c.trigger("sendDiag","bapiClient")}}}},Eb=function(){return{createInstance:function(h,a,c,b){return v.isDomless()?new Qc:new Rc}}},Rc=function(){var h=m.BROWSERS,a=function(){var a="u",c=q.getWindow();
try{g.isDef(c.opera)&&g.isDef(c.opera.buildNumber)?a=h.OPERA:g.isDef(c.mozInnerScreenY)?a=h.GECKO:g.isDef(c.chrome)&&g.isDef(c.chrome.csi)?a=h.CHROME:g.isDef(c.msWriteProfilerMark)&&g.isDef(c.crypto)?a=h.MSEDGE:g.isDef(c.WebKitPoint)&&(a=h.WEBKIT)}catch(e){}return a},c=function(){var a=!1,c=q.getWindow();g.isDef(c.navigator)&&g.isDef(c.navigator.userAgent)&&(a=c.navigator.userAgent);return a};return{browserIs:function(b){return a()===b},hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},
hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=q.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=q.getWindow();return!(!a||!g.isFunction(a.postMessage))},getDocumentMode:function(){var a=q.getDoc();return a&&a.documentMode?a.documentMode:m.NA},getBrowserType:a,getUserAgent:c,params:function(){var b=a(),c=m.NA,e=q.getWindow();g.isDef(e.navigator)&&
g.isDef(e.navigator.appName)&&(c=e.navigator.appName.toLowerCase()[0]);return{br:b,an:c}},isAndroidWebViewBrowser:function(){var a=c(),d=["Line","SamsungBrowser","FB_IAB","Silk"];return H.contains(a,"Android")&&function(){return g(d).findFirst(function(b,c){return H.contains(a,c)})}()},getIOSVersion:function(){var a,d;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(d=(d=a.toString().match(/\d+/))&&0<d.length&&parseInt(d.toString()));return d}}},Qc=function(){var h=function(){return!1},a=function(){return m.NA};
return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},zc=function(){return{createInstance:function(h,a){return v.isDomless()?new Sc(a):new Tc(h,a)}}},Uc=function(){var h,a=function(a,b){var c="",e="",f=q.getDoc().getElementsByTagName("ins");if(f&&0<f.length){e=f[0];c="<ins";for(f=0;f<
e.attributes.length;f++)c+=" "+e.attributes[f].nodeName+'="'+e.attributes[f].nodeValue+'"';c+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
c+'<script src="'+b+'" referrerpolicy="'+m.REFERRER_POLICY+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var b=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!v.integratedBlockingApplies(a);return b&&a},deployBlockingScriptIntoIframe:function(c){h=n.getAggregator().request("omidAdSessionContext");var b="iasbi"+k.asid,d;d=k.contextNode.parentNode;var e,f=k.adWidth&&0<k.adWidth?k.adWidth:0,l=k.adHeight&&0<
k.adHeight?k.adHeight:0,g=q.getDoc().getElementsByTagName("ins"),p;p=e=0;g&&0<g.length&&(p=g[0],e=parseInt(p.style.width),p=parseInt(p.style.height));f=e||f||window.innerWidth;l=p||l||window.innerHeight;"complete"===q.getDoc().readyState&&(k.forceAppend="true");"true"===k.forceAppend?(e=q.getDoc().createElement("IFRAME"),e.id=b,e.src="about:blank",d.appendChild(e)):q.getDoc().write('<iframe id="'+b+'" src="about:blank"></iframe>');if(d=q.getDoc().getElementById(b))d.style.width=f+"px",d.style.height=
l+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(b,c)),d.close())}}},Tc=function(h,a){var c=function(a){var b=!1;v.isMSFT()&&(b=(a=a&&-1!=a.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig"))?!1:k.iasProxyPartnerDomain);return b},b=function(a,b,d,e){var f=c(b);f&&(b="//"+f+encodeURIComponent(b));"script"!==a?(b=K.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=
K.createElement("SCRIPT"),d.src=b,e&&(d.onload=e));k.contextNode.parentNode.appendChild(d)},d=function(a,d,e){var f;f="";var l;l=d;var h=c(l);h&&(l="//"+h+encodeURIComponent(l));l=' src="'+l+'"';h=' referrerpolicy="'+m.REFERRER_POLICY+'"';v.doesPageAllowAppendedScripts()&&e&&(f="__IntegralASEventLoadHandler_"+k.asid.replace(/-/g,""),y[f]=e,f=' onload="'+f+" && "+f+'()"');l={script:['<script type="text/javascript"',f,l,h,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',
f,l,h,"></iframe>"],img:["<img",f,l,h,"/>"]}[a].join("");v.isOmid()?(f=new Uc,f.isApplicable(d)?f.deployBlockingScriptIntoIframe(d):b(a,d,l,e)):("loading"!==q.getDoc().readyState&&(k.forceAppend="true"),"true"===k.forceAppend?b(a,d,l,e):K.write(l))},e=function(a,b,d){var e=!d&&A.getXHR2();(d=c(a))&&(a="//"+d+encodeURIComponent(a));e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(d=r.createImage(),b&&(d.onload=b),d.src=a.toString())},f=function(a,
b){var d=A.getXHR2(),e=c(a);e&&(a="//"+e+encodeURIComponent(a));d&&(d.open("GET",a),d.onreadystatechange=function(){if(4===d.readyState&&200===d.status&&b)try{var a=JSON.parse(d.responseText);b(a)}catch(C){}},d.send())},l=function(a,b,d,e){var f=K.createElement("script");d=d||k.contextNode.parentNode;var l=c(a);l&&(a="//"+l+encodeURIComponent(a));f.type="text/javascript";f.src=a;f.referrerPolicy=m.REFERRER_POLICY;b&&(f.onload=b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));g.isDef(d)&&
d.appendChild(f)},u=function(a){g.isFunction(a)?a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new U(a,!0)).toString(),e(a,void 0,!0))},p=function(b,c,d,e){l(a.wrap(b,c,d,e))};n.getAggregator().on({addNode:d,send:e,exec:l,notify:u,getJSON:f,jsonp:p});return{addNode:d,send:e,exec:l,notify:u,getJSON:f,jsonp:p}},Sc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";b=encodeURI(b);n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,
function(){})},c=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},b=function(a,b){var c=n.getAggregator().request("omidVerificationClient");a=encodeURI(a);c.injectJavaScriptResource(a,b||function(){})},d=function(a){g.isFunction(a)?a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new U(a,!0)).toString(),c(a))},e=function(a,c,d,e){b(h.wrap(a,c,d,e))};n.getAggregator().on({addNode:a,send:c,exec:b,notify:d,jsonp:e});return{addNode:a,
send:c,exec:b,notify:d,jsonp:e}},v=function(h){var a="undefined"===typeof window,c="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,b=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(z){}return b}(),d=function(){return a||g.isDef(q.getWindow().mraid)},e=function(){return!a&&g.isDef(q.getWindow().mraid)},f=function(){var b=!1;if(!a)var c=(b=q.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&g.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},l=function(){var a;if(!(a=
-1!==k.mode.indexOf("jsvid"))){var b=n.getAggregator();a=b.request("omidVerificationClient");var c=!1,b=b.request("omidAdSessionContext");a&&b&&(c=b.mediaType===m.MEDIA_TYPE.VIDEO);a=c}return a||f()},u=function(){return!1===k.fwMonitoring||"false"===k.fwMonitoring},p=function(){return k.mobOrTab},t=function(a){return!1===g(k.customViewability).isArray()?!1:0<g(k.customViewability).filter(function(b,c){return H.contains(c.id,a)}).length},x=function(){return t("grpm")||k.use100v},w=function(){return g.isStr(k.iasProxyPartnerDomain)&&
-1!==k.iasProxyPartnerDomain.indexOf("bing")};return{embedded:c,friendly:b,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=U(b.document.referrer),c=d.hostname===b.location.hostname}catch(B){}b=c}return b},friendlyIframe:c&&b,xDomainIframe:c&&!b,getTagTime:function(){return q.now()-k.birthdate},getPageTime:function(){var b=m.NA;!a&&g.isDef(h.chrome)&&g.isDef(h.chrome.csi)&&g.isFunction(h.chrome.csi)&&(b=q.round(h.chrome.csi().pageT));return b},isVideo:l,isMobileApp:d,isSpecifiedAd:function(){var b=
!1;a||(b=(b=g.isFunction(k.contextNode.getAttribute)&&k.contextNode.getAttribute("data-ias-container")||k._cl_adpath)&&g.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(k._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()&&!k.videoId},isOmidNative:function(){return(new ha).accepts()},isOmidSandboxedEnvironment:function(){return(new ha).accepts()},
isOmidForWeb:function(){return(new Na).accepts()},isDomless:function(){return a},isBustedIframe:function(){var b=!1;a||(b=void 0!==ia());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=g(q.getWindow().$sf).isObj(!1)&&g(q.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:p,usesIASFullyInViewCustomMetric:function(){return t("fiv")||k.use100v||!x()},usesGroupMCustomMetric:x,isCeltra:function(){var b=!1;a||(b=Oa().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return x()&&
p()},usesZeroPivCustomMetric:function(){return!1===g(k.customViewability).isArray()?!1:0<g(k.customViewability).filter(function(a,b){return g(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=q.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(C){a(C)}},isPossiblyRefreshable:function(){return!a&&!d()&&!l()&&c&&"jload"===
k.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;k.contextNode&&g.isFunction(k.contextNode.getAttribute)&&(c=k.contextNode.getAttribute("data-ias-check-tag"),d=k.contextNode.getAttribute("data-ias-check-done"),e=(e=k.contextNode.getAttribute("data-ias-callback"))&&g.isFunction(q.getWindow()[e]));var f=g.isDef(JSON)&&g.isFunction(JSON.parse);a=k.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var l=!0===k.fwMonitoring||"true"===k.fwMonitoring;f&&a&&("true"===c&&"true"!==
d&&e?(b=!0,l&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,l||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b},isBlocking:u,isBlockingSizmekTag:function(){return u()&&H.contains(k.scriptUrl,"bs.serving-sys.com")},isAMZN:function(){return g.isStr(k.iasProxyPartnerDomain)&&-1!==k.iasProxyPartnerDomain.indexOf("amazon")},isMSFT:w,isPageOnShadowDomWhitelist:function(){var a=!1;w()&&(a=!0);g.isStr(k.iasProxyPartnerDomain)&&
-1!==k.iasProxyPartnerDomain.indexOf("integral.local")&&(a=!0);return a},doesPageAllowAppendedScripts:function(){var a=!0;w()&&(a=!1);return a}}}(y),A={addEvent:function(h,a,c,b){g.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",A.mouseEnter(c),b):"mouseleave"===a?h.addEventListener("mouseout",A.mouseEnter(c),b):h.addEventListener(a,c,b):g.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,c))},removeEvent:function(h,a,c){g.isDef(h.removeEventListener)?
("mouseenter"===a?(a="mouseover",c=A.mouseEnter):"mouseleave"===a&&(a="mouseout",c=A.mouseEnter),h.removeEventListener(a,c)):g.isDef(h.detachEvent)&&h.detachEvent("on"+a,c)},mouseEnter:function(h){var a=this;return function(c){var b=c.relatedTarget;this===b||a.isAChildOf(this,b)||h.call(this,c)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,c){var b="",d=K.defaultView&&K.defaultView.getComputedStyle;c=c||"";d?b=(h=K.defaultView.getComputedStyle(h,
c))?h.getPropertyValue(a):b:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b=h.currentStyle[a]);return b},getXHR2:function(h,a){var c,b;g.isDef(y.XMLHttpRequest)?(b=new XMLHttpRequest,"withCredentials"in b&&(c=b)):g.isDef(XDomainRequest)&&(c=new XDomainRequest);return c},whenReady:function(h,a){if(v.isDomless())q.setTimeout(function(){h()},50);else{var c=a||(v.xDomainIframe?K:q.getTop().document),b=function(a){var b=q.setInterval(function(){c.body&&(q.clearInterval(b),
a())},50)},d=this;(function(a){var e=function(){a(!0)};g.isFunction(K.addEventListener)?"complete"==c.readyState||"loaded"==c.readyState||"interactive"==c.readyState?q.execAtEndOfThread(e):d.addEvent(c,"DOMContentLoaded",e,!1):b(a)})(h)}},isSandboxed:function(h){var a,c=q.getWindow(),b=!1;if("sandbox"in q.getDoc().createElement("iframe")){try{a=c.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;c=q.getDoc();if(h.browserIs(m.BROWSERS.CHROME))try{c.domain="hol@#3+~"}catch(d){/Assignment is forbidden for sandboxed iframes/.test(d.message)&&
(a=!0)}h=a}b=h}return b},styleElement:function(h,a){if(h&&g(h.style).isObj()&&g(a).isObj()){var c="";g(a).each(function(a,d){c+=a+": "+d+" !important;"});h.style.cssText=c}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===A.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},Z=function(h){var a,c=Z.callTypeCounter,b=[m.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},
e=function(){var a={},b=m.DT_CODES;g("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=c&&c[h];g.isDef(d)&&0!==d&&g(b).contains(h)&&(a=a+"."+d);d=c[h];c[h]=g.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};Z.callTypeCounter={};var Yb=function(h,a,c,b,d,e,f,l){var u=0,p=0,t=!1,x=function(a,e,l,h,x,w){l=l||!c.on("postDts");var N=a===m.DT_CODES.DIAGNOSTIC||
a===m.DT_CODES.ADTALK||a===m.DT_CODES.SCA||a===m.DT_CODES.XSCA||a===m.DT_CODES.EXTERNAL||a===m.DT_CODES.LARGE_BILLABLE;if(b.impressionIsIdentifiable()&&(N||"n"!==f.getCurrentLoc()))try{var B=k.dtBaseURL,C=new U(B,!0),L=q.now();n.getAggregator().trigger("preSendDt",a);B||(C.path("dt"),c.on("usedtdomain")&&C.sub("dt"));D(C,a,e);x&&x.field&&C.setParam(x.field,x.value);h||z(C,a);n.getAggregator().trigger("send",C,function(){p+=1;u=q.now()-L;g.isFunction(w)&&w()},l);a===m.DT_CODES.UNLOAD&&(t=!0);d.cleanup()}catch(M){__IntegralASDiagnosticCall("dt-"+
a,M),n.getAggregator().trigger("error",m.ERROR_CODES.PHONE_HOME)}};h=function(){t||x(m.DT_CODES.UNLOAD,-1,!0)};var w=function(a,b){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=k.mode,d=d[a]||d[e];c.on(b||e+"Diag")&&d&&x(m.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},D=function(a,c,e){var f=new Z(c);e=g.isDef(e)?e:f.enumerator;a.setParam("asId",k.asid);e={c:b.getCacheBustId(),pingTime:e,time:v.getTagTime(),type:c};d.filterOutput(function(a){var b=a.minDt&&(!a.type||a.type===
c);b&&a.oneTime&&(a.flagForRemoval=!0);return b},e);a.setParam("tv",e)},z=function(b,h){var g,t={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,c){b.setParam(a,c.replace(/%3A/g,":"))});f.fastForward();if(h===m.DT_CODES.CUSTOM||h===m.DT_CODES.UNLOAD||h===m.DT_CODES.VIDEO_EVENTS||h===m.DT_CODES.FULLY_INVIEW||h===m.DT_CODES.PING||h===m.DT_CODES.VIEWABILITY_READY||h===m.DT_CODES.ADTALK)t.clog=l,v.isVideo()&&(g=v.isOmid()?"omidVideoEventsString":"videoEventsString",
(g=n.getAggregator().request(g))&&!g.isEmpty()&&(t.ve=g));h===m.DT_CODES.UNLOAD&&(t.ndt=p);-1!==k.mode.indexOf("jsvid")&&(t.vv=n.getAggregator().request("videoVersion"));t.NULL1=c.output();t.NULL2=f.stringify(10);t.em=v.embedded;t.fr=v.friendly;t.e=a.toString();t.tt=k.mode;t.dtt=u;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},t);b.setParam("tv",t);b.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,
b,c){x(a,g.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:w,updateDtCount:function(){p++},unload:h});return{send:x,unload:h,diagnostic:w,setViewabilityMod:function(a){}}},F=function(h){var a={},c=!1,b=function(){var a=1===h.nodeType?r.nodeIsHidden(h):0===h.width||0===h.height;return c?!1:a},d=function(){var b={};g(a).each(function(a,c){b[a]=q.round(c)});return b},e=function(a){return g.isNumeric(a)||g.isUndef(a)},f=function(){return q.round(a.width)*q.round(a.height)};
(function(){var b;h!==y.parent&&(1!==h.nodeType?a=h:g.isDef(h.getBoundingClientRect)&&(b=r.getRect(h),g(a).mixin({x:g.useIfDef(b.x)||b.scrX,y:g.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&g.isNumeric(a.width)&&g.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};g(a).each(function(a,c){b[a]="x"===a||
"y"===a||"width"===a||"height"===a?q.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:b,treatAsPlaceholder:function(){c=!0},area:f,isMrcLarge:function(){return f()>=m.MRC_LARGE_AD_SIZE},isOneByOne:function(){return b()&&1>=f()}}},r={findElementsWithSize:function(h){var a=[],c=function(b){1>r.getNodeArea(b)?g(b.children).each(function(a,b){c(b)}):a.push(b)};c(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),c=0!==parseInt(A.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;
h="hidden"===A.getStyle(h,"visibility");return c||a||h},calcWinDims:function(){var h,a,c;try{a=r.browserWindowPosition(),c=r.windowSize(),h={scrX:q.round(a.scrX),scrY:q.round(a.scrY),width:q.round(c.width),height:q.round(c.height)}}catch(b){n.getAggregator().trigger("error",m.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,c;if(v.isDomless())return{width:0,height:0};if(v.friendly)if(a=top.document,c=a.documentElement,a=a.body,g.isDef(top.innerWidth))h.width=top.innerWidth,
h.height=top.innerHeight;else if(g.isDef(c.clientWidth))h.width=c.clientWidth,h.height=c.clientHeight;else if(g.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else g.isDef(y.outerWidth)&&(h.width=y.outerWidth,h.height=y.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;g.isDef(y.screenX)?(h=y.screenX,a=y.screenY):g.isDef(y.screenLeft)&&(h=y.screenLeft,a=y.screenTop);n.getAggregator().request("browser").browserIs(m.BROWSERS.GECKO)&&
-8==h&&-8==a&&(h+=8,a+=8);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=r.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},c=r.browserWindowPosition();h=h.getBoundingClientRect();g.isUndef(h.x)&&(a.x=h.left,a.y=h.top);g.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);g(a).mixin(h,!0);a.scrX=c.scrX+a.x;a.scrY=c.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&g.isDef(h.documentElement.clientWidth)&&h.documentElement||
h.body},getPlaceholderSpan:function(){var h=K.createElement("span");g(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=v.friendly&&q.getTop().Image;return g.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=q.getDoc().createElement("iframe"),c={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};A.styleElement(a,h?{display:"none"}:c);return a},
tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var c,b,d,e=1E4,f=1E4;c=A.nodeIsAbsolutelyPositioned(h);d=!r.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!c&&d&&!r.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,c=!r.tagNameIs(d,"OBJECT"),b="inline"!==A.getStyle(d,"display"),c&&b&&(c=r.getRect(d),e=c.width<e?c.width:e,f=c.height<f?c.height:f);while(d.parentNode!==K&&d!==a)}return{width:q.round(e),height:q.round(f)}},hasBackgroundImage:function(h){h=
A.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyFriendlyFrame:function(h){try{var a,c,b=!1;if(h&&h.document){var d=h&&"IFRAME"===h.nodeName&&h.contentDocument;d&&(c=(a=d.body)&&1>a.childElementCount)&&(b=!0)}return b}catch(e){return!1}},findChildWithLargestContent:function(h,a){var c=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),b=n.getAggregator().request("omidAdSessionContext"),d=b&&b.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,b=function(a){for(var b=
a;a.parentNode!==h&&"inline"!==A.getStyle(a.parentNode,"display");){var e;if(!(e=!c)){e=a.parentNode;var f=!0;if("visible"===A.getStyle(e,"overflow")||"visible"===A.getStyle(e,"overflowX")&&"visible"===A.getStyle(e,"overflowY"))f=!1;e=f&&0<r.getNodeArea(a.parentNode)}!e||c&&d&&"DIV"===a.parentNode.nodeName||(b=a.parentNode);a=a.parentNode}return b},f=null,l=function(a){var b,c,f=null,l=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var g=a[b],u=r.getNodeArea(g),m=void 0,k,n;k=g;if((n=k.parentNode===h&&
"DIV"===k.nodeName&&!e(k))&&!(n="0"===A.getStyle(k,"opacity")||"hidden"===A.getStyle(k,"visibility"))){n=k.childNodes;for(k=0;k<n.length;k++)1===n[k].nodeType&&(m=!0);n=!m}(m=!n)&&d&&"DIV"===g.nodeName&&(m=!1);k=r.isEmptyFriendlyFrame(g);u>l&&m&&!k&&(f=g,l=u)}f&&(f.hasValidSizeForMobileApp=1<l);return f}(function(b){var c,d,e,f,l=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var g=b.getElementsByTagName&&b.getElementsByTagName(e);if(g&&g.length)for(e=
0,f=g.length;e<f;e++)l.push(g[e])}return l}(h));l&&(f=b(l),f.hasValidSizeForMobileApp=l.hasValidSizeForMobileApp);return f},screenSize:function(){if(v.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{g.isDef(y.screen)&&(h={width:y.screen.width,height:y.screen.height})}catch(a){}return h},calcMonDims:function(){var h=g(r.screenSize()).mixin({scrX:0,scrY:0});g.isDef(screen.availLeft)&&(h={scrX:y.screen.availLeft,scrY:y.screen.availTop,width:y.screen.availWidth,height:y.screen.availHeight});
return h},getOurIFrameInTop:function(){for(var h,a=q.getTop(),c=q.getWindow();c!=a;)h=c,c=h.parent;return h},getOurNodeInTop:function(){var h;v.friendly&&(h=v.embedded?(h=r.getOurIFrameInTop())&&h.frameElement:k.contextNode);return h},getAncestorNodes:function(h){var a=[],c=h.ownerDocument&&h.ownerDocument.documentElement;if(c)for(;h.parentNode!==c;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var c,b=a||q.getDoc();try{c=b.getElementsByTagName(h)}catch(d){c=null}return c},containsScriptTagWithSrc:function(h){return!!g(r.getTagsNamed("script")).findFirst(function(a,
c){var b=c.src;return g.isFunction(h)?h(b):b===h})},contains:function(h,a){var c=!1;try{c=g.isDef(h)&&g.isFunction(h.contains)&&h.contains(a)}catch(b){}return c},querySelector:function(h,a){var c;try{c=h.querySelector(a)}catch(b){c=null}return c},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,c){h&&g.isFunction(h.setAttribute)&&h.setAttribute(a,c)},removeAttributeOf:function(h,a){h&&g.isFunction(h.removeAttribute)&&
h.removeAttribute(a)},crossQuerySelector:function(h,a){var c,b,d=[k.contextNode.parentNode,q.getDoc()];v.friendly&&d.push(q.getTop().document);if(a&&v.embedded)try{d.push(q.getWindow().frameElement.ownerDocument)}catch(e){}g(d).each(function(a,d){try{b=r.querySelector(d,h)}catch(l){}!c&&b&&(c=b)});return c},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(c){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=r.getTagsNamed("iframe",
h))&&(a=g(h).map(function(a,b){return b.contentWindow}));return a},getFrameId:function(){var h=q.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var c=h.innerWidth,b=h.innerHeight,d=c>a.width&&b>a.height;return c*b>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,c){h=h&&r.getAttribute(h,a);return c.test(h)},isImageTag:function(h){return h&&h.src&&r.tagNameIs(h,"img")},
getDimensionFromStyle:function(h){var a,c=A.getStyle(h,"width");h=A.getStyle(h,"height");c&&h&&(a={width:g.getNum(c),height:g.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,c=r.getAttribute(h,"width");h=r.getAttribute(h,"height");c&&h&&(a={width:g.getNum(c),height:g.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(c,b){var d,e,f;if(b(c))e=c;else if(f=c.children)for(d=0;d<f.length&&!(e=a(f[d],b));d++);return e},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,c){var b=!0,d="fixed"===A.getStyle(a,"position"),e="hidden"!==A.getStyle(c,"overflow")&&!d;v.isSpecifiedAd()&&(d||e)&&(b=!1);return b},isNodeCreative:function(a){var c=r.getNodeName(a),b=a&&a.innerText&&0<a.innerText.length,b=a&&a.children&&0===a.children.length&&b,d=c&&-1!==m.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase());return c?!!(d||r.hasBackgroundImage(a)||b):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var c=
r.getElementsDocument(a);return c.defaultView||c.parentWindow||a},elementIsEmbedded:function(a){return r.getElementsWindow(a)!==q.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var c=!1;if(a&&"IFRAME"===r.getNodeName(a))try{c=!a.contentWindow.document}catch(b){c=!0}return c},isElement:function(a){return 1===a.nodeType}},yc=function(){var a={},c=function(b){g.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=g(a).isObj()?a.errorCode:
a;c(a)});return{list:a,add:c,toString:function(){var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=c);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},eb=function(){return{createInstance:function(a,c){return v.isDomless()?new Vc:new Wc(a,c)}}},Wc=function(a,c){var b=function(a){var b=[];if(a&&a instanceof Array)b=g(a).map(function(a,b){return b.val}),b.push(k.adsafeSrc,k.requrl,k.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
f=b(d),l=f&&f.length&&f.join("|"),u=k.exchList;l&&(e=g(u).map(function(a,b){return 0<=l.indexOf(H.rot(b))?a:void 0}),e.length&&c.addItem({output:e.join(".")},"ex",{type:m.IMPRESSION_EVENT}))}catch(p){a.add(m.ERROR_CODES.EXCHANGE_PARSING)}}}},Vc=function(){return{parse:function(a){}}},xa=function(){var a={},c=function(b){var c;g.isUndef(a[b])&&(c=k.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=(new RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))")).exec(c)))&&(c=c[1],a[b]=!c||c>100*q.random());return a[b]},
b={es:"everySecond",sc:"usesca",ha:"usehaps",fgad:"forceKeepGoogleAdNode"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"},e=function(){var c,e;c=g(b).mapToObj(function(b,c){var d={};d[b]=g.fromBoolToNum(a[c]);return d});e=g(d).mapToObj(function(a,b){var c={};c[a]=g.fromBoolToNum(f(b));return c});e.gm=g.fromBoolToNum(v.usesGroupMCustomMetric());return g(c).mixin(e)},f=function(a){var b=k[a];return g(["integration"]).contains(a)?!!b:!0===b||"true"===b||g.isFunction(b)};
g(b).each(function(a,b){c(b)});return{on:c,bootstrapOn:f,bootstrapperHas:function(a){a=g.isStr(a)?[a]:a;return g(a).map(function(a,b){if(g.isDef(k[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var b=c("use"+a);a=k.sp_cdnScripts&&k.sp_cdnScripts[a];return b&&a},setReportedBootstrapFeatures:function(a,b){d[a]=b},reportedBootstrapFeatures:d,output:function(){return g(e()).toParams()}}},Sb=function(){return{calcInitialViewState:function(a,c){var b;b={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};
var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=m.NA;b=c?b:d;g.isDef(a)&&a!==m.NA&&-1<a&&(e=a>=b.IN_VIEW?m.IN_VIEW:a<=b.OUT_OF_VIEW?m.OUT_OF_VIEW:a>=b.PARTIAL_VIEW?m.PARTIAL_VIEW_PLUS:m.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,c,b,d){var e=0,f=a;a.hasValidDims()&&!a.isHidden()&&(g([c,b,d]).each(function(a,b){if(b.hasValidDims()){var c=f.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),l=Math.max(c.scrY,d.scrY),g=Math.min(c.scrX+c.width,d.scrX+d.width)-e,c=Math.min(c.scrY+
c.height,d.scrY+d.height)-l;f=F({scrX:e,scrY:l,width:0<g?g:0,height:0<c?c:0})}}),e=q.round(f.area()/a.area()*100));return e}}},Fb=function(){var a,c=!1;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=y.Uint32Array&&y.crypto&&y.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),y.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*q.random()|0).toString(16);
a=a.slice(0,32)}catch(l){n.getAggregator().trigger("error",m.ERROR_CODES.UID_GENERATION)}return a}());var b=function(){return k.anId};return{getAsid:function(){return k.asid},getAnId:b,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return g.toBase(a,62)},getFwId:function(){return b()||k.advEntityId+"-"+k.pubEntityId},impressionIsIdentifiable:function(a){a&&(c=!0);return c},unq:a}},rb=function(a,c){return{init:function(b){a.jsonp(b,function(a){c.send(m.DT_CODES.THIRD_PARTY,
void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Xc=function(a,c,b,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var b=n.getAggregator().request("adRenderStatus"),e=d||c,g=a.getTimeInViewInSeconds();b||n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,"nr_"+e,g)}:function(){var e=a.getTimeInViewInSeconds(),l=a.getTimeInViewForRts();g.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",
{type:c}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:c}));n.getAggregator().trigger("sendDt",c,e);if(b[l])b[l]()}}}},Xb=function(){return{createPingJobs:function(a,c,b,d,e){return g(c.getTimeThresholds()).map(function(c,l){return new Xc(l,a,b,d,e)})}}},Pa=function(){var a,c=[],b=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-k.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));a&&0==c.length&&g(a).each(function(a,
b){b.qivThreshold&&c.push(b)})},e=function(a){var d=new b(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(g(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),f=n.getAggregator().request("mScreenEvents").getCurrentEvent(),t=Math.floor(d.time/1E3);g(c).each(function(a,b){var c;c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(f)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(n.getAggregator().trigger("addOutputItem",
{output:b.metricId},"metricId",{type:m.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:m.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",m.DT_CODES.CUSTOM,t),b.rtsCallbacks&&g.isFunction(b.rtsCallbacks[m.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[m.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},Fa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},c=function(a,
b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},b=function(){var a=k.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+q.round(1E4*Math.random())};return{wrap:function(d,e,f,l){var g=b(),p,t,m;l=l||"ias_callback";d=""+d;(new RegExp(l)).test(d)&&(p=(new RegExp("("+l+"=)(.[^&]*)")).exec(d)[0],t=p.split("=")[1],m=H.stringToFn(t),d=a(d,p));y[g]=function(a){e(a);f&&m&&m(a);y[g]=void 0};return d=c(d,l,g)},wrapToGlobal:function(a){var c=b();
y[c]=function(b){a(b);y[c]=void 0};return c}}},$b=function(a,c,b){var d=function(a,b){var c=a,d;b&&(d=","+g(b).stringify(function(a,b){return a+":"+b},","),c=U(a,!0),c.appendToParamValue("adsafe_jsinfo",g.encodeInvalidUrlChars(d,k.encodeInvalidUrlChars)),c=c.toString());return c},e={jss:{isFW:!0,nodeType:v.doesPageAllowAppendedScripts()?"script":"img"},rjss:{isFW:!0,onloadCallback:Qa,nodeType:v.doesPageAllowAppendedScripts()?"script":"img"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},
jload:{impressionMethod:function(b){a.enabled?n.getAggregator().trigger("jsonp",b,a.callback,!0):n.getAggregator().trigger("send",b,function(){Qa();n.getAggregator().trigger("sendDiag")},!c.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(b){n.getAggregator().on("adImpression",
function(e,f){var l;try{l=d(b,f),a.enabled?n.getAggregator().trigger("jsonp",l,a.callback,!0):n.getAggregator().trigger("send",l,g.noop,!c.on("postMon"))}catch(t){__IntegralASDiagnosticCall("jsvidimp",t,k)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===k.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",
function(c,e){var f;try{var l;if(l=b)l=c&&g.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;l&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));f=d(a,e);n.getAggregator().trigger("send",f,g.noop,!0)}catch(D){__IntegralASDiagnosticCall("fwjsvidimp",D,k)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},c=e[k.mode],d=!!c.isFW,g=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
k.mobFwUrl?k.mobFwUrl:a?k.adsafeSrc:k.requrl;a||(b+="?"+k.reqquery);return b}(d),t=g.indexOf("BEGIN__ADSAFE"),m=-1!==t,w=m?g.slice(t):"",a=m?g.slice(0,t):a(g);return{isFW:d,baseUrl:a,macroUrl:w,sendImpression:function(a){var d=function(){c.nodeType?n.getAggregator().trigger("addNode",c.nodeType,a,c.onloadCallback):c.impressionMethod(a)};if(b||c.manualDefer)d(a);else if(!c.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},q={execAtEndOfThread:function(a){q.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return y},getTimeoutScope:function(){return v.isDomless()&&v.isOmid()?n.getAggregator().request("omidVerificationClient"):y},setInterval:function(a,c){return q.getTimeoutScope().setInterval(a,c)},setTimeout:function(a,
c){return q.getTimeoutScope().setTimeout(a,c)},clearInterval:function(a){q.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){q.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){v.isDomless();return top},getDoc:function(){v.isDomless();return K},getIntersectionObserver:function(a,c){v.isDomless();return new IntersectionObserver(a,c)},getMutationObserver:function(a){v.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){v.isDomless();
return new ResizeObserver(a)},pow:function(a,c){return Math.pow(a,c)}},Nb=function(){return{createInstance:function(){return v.isDomless()?new Yc:new Zc}}},Zc=function(){var a,c=!1,b=!1;n.getAggregator().request("features");var d=new ca,e=function(){return g.isDef(a.prop)?q.getDoc()[a.prop]:null},f=function(){var b=q.getWindow(),c=function(){d.run(e())};A.addEvent(b,"focus",c,!0);A.addEvent(b,"blur",c,!0);a.event&&A.addEvent(q.getDoc(),a.event,c,!0)};a=function(){var a="hidden",b="visibilitychange",
d=q.getDoc();g.isUndef(d.hidden)?g(["moz","ms","webkit"]).each(function(e,f){var l=f+"Hidden";g.isDef(d[l])&&(a=l,b=f+b,c=!0)}):c=!0;return c?{prop:a,event:b}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);b||(b=!0,f())},supportsVisAPI:function(){return c}}},Yc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Pb=function(){return{createInstance:function(a,c){return v.isDomless()?new $c:new ad(a,c)}}},ad=function(a,c){var b,
d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||g.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],g.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},f=function(){var f,u=function(){var a={};try{a.q=c.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(C){var b=C.message,b=b.substring(b.lastIndexOf("<")+
1,b.lastIndexOf(">")),d;if(d=g.isDef(b)){var e=c.getWindow();d=!1;g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(e=e.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==e&&2==e.length&&(e=e[1].split("."),3==parseInt(e[0],10)&&6>=parseInt(e[1],10)&&(3==e.length?13>=parseInt(e[2],10)&&(d=!0):d=!0)))}d&&(a.g=b)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(x){}try{p.b=encodeURIComponent(parent.location.href)}catch(x){}if(v.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(x){}try{p.e=
encodeURIComponent(y.document.referrer)}catch(x){}}try{"jsi"!==k.mode&&(p.d=encodeURIComponent(y.location.href))}catch(x){}try{p.f=encodeURIComponent(k.jsref)}catch(x){}try{f=u(),p.g=encodeURIComponent(f.g||""),p.q=encodeURIComponent(f.q||""),a.isStarted()&&!f.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(x){}p=d(p);p=e(p);f=[];for(var t in p)p.hasOwnProperty(t)&&f.push({key:t,val:p[t]});f.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?
-1:0});return b=f};return{detectTopURL:f,getDetectedURLs:function(){return b?b:f()}}},$c=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Mb=function(a){var c=!1;return{measure:function(b){(c=0===b.rsa)&&a.trigger("notify",k._onSuspicious)},skipAsFraudulent:function(){return c}}},Qb=function(){var a=[],c={},b={sl:"n"},d=0,e,f,l,u={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b=n.getAggregator().request("features");b&&b.on("recoverOmidLostTime")&&(b=u.ri,u.ri=
b?b+a:a)},t=function(a){var b={},c=a.winDimensions,d=a.adDimensions;g.isDef(c)&&c.hasValidDims()&&(b.wc=c);g.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);g({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];g.isDef(e)&&(b[c]=e)});c=g(b).toParams();return""===c?"":","+c},k=function(a,b){var d=new Oc(b);return c[a]=d},w=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},
q=function(){g(b).each(function(b,c){u[c]+=a.length?l-d:l});d=l},z=function(c){a.length&&q();g(c).each(function(a,c){var d=b[a];d!==c&&"n"===d&&(u[c]+=u.n);b[a]=c});a.length||q()},C=function(a){var b,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};b=t(a);var e=a.omidObstructions,p={sl:w(a.viewState)};l=v.getTagTime();z(p);p.t=l;b=g({toString:function(){g(c).each(function(a,b){b.fastForward()});return"{"+g(p).toParams()+this.details+this.breakdowns+"}"},details:b,breakdowns:{piv:[],
as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+g(this.piv).stringify(b)+"]");a+=",as:["+g(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(p);g(b).mixin(a);b.width=d.width;b.height=d.height;g.isUndef(b.percentInView)&&(b.percentInView=m.PIV_NA);g.isUndef(b.reason)&&(b.reason="");g.isDef(e)&&""!==e&&(b.omidObstructions=e);return f=b};(function(){k("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(g(d).each(function(a,
e){g.isUndef(b)&&c<e&&(b=d[a-1])}),g.isUndef(b)&&(b=d[d.length-1]));return b});k("as",function(a){var b=m.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height});var a=n.getAggregator().request("omidAdSessionContext");a&&-1<a.recoveredTime&&p(a.recoveredTime)})();return{fastForward:function(){l=v.getTagTime();q()},registerLocation:function(d){var f,l=!1;b.sl==w(d.viewState)&&a.length?(f=new C(d),a[a.length-1].details=f.details):(f=new C(d),a.push(f),e=d.viewState,
l=!0);n.getAggregator().trigger("newScreenEvent",f);g(c).each(function(b,c){-1!=="piv|as".indexOf(b)?(l&&c.clear(),c.addState(f),a[a.length-1].breakdowns[b]=c.get()):c.addState(f)});return f},stringify:function(b){var c="";a.length&&(c=g({slTimes:"{"+g(u).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:k,getCurrentLoc:function(){return w(e)},getCurrentEvent:function(){return f},setRecoveredTimeInSlTimes:p}},H={hashCode:function(a){var c=
0,b,d,e;if(0===a.length)return c;b=0;for(e=a.length;b<e;b++)d=a.charCodeAt(b),c=(c<<5)-c+d,c|=0;return c},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var c,b=y,d=a.split(".");for(a=0;a<d.length;a++)if(c=b,b=b[d[a]],g.isUndef(b)||a===d.length-1&&!g.isFunction(b))return!1;return function(){b.apply(c,arguments)}},stringToProp:function(a){var c=q.getWindow(),b=a.split(".");for(a=0;a<b.length&&
(c=c[b[a]],!g.isUndef(c));a++);return c},contains:function(a,c){return g.isStr(a)?-1!==a.indexOf(c):!1},trim:function(a){return g.isFunction(a.trim)?a.trim():a.replace(" ","")}},bd=function(){var a=function(){var a=function(a){return(a=r.getDimensionFromAttributes(a))&&a.width&&30<a.width&&a.height&&30<a.height};return{hasValidDimensions:function(b){var c;(c=a(b))||(c=(b=r.getDimensionFromStyle(b))&&b.width&&30<b.width&&b.height&&30<b.height);return c},hasValidDimentionAttributes:a}}(),c=/GoogleActiveViewElement/,
b=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,f=function(a){var b=a&&r.tagNameIs(a,"a"),c=r.attributeMatches(a,"href",d);a=r.attributeMatches(a,"target",e);return b&&c&&a},l=function(a){var d=r.tagNameIs(a,"div"),e=r.attributeMatches(a,"class",c);a=r.attributeMatches(a,"id",b);return d&&e&&a};return{getDFPGoogleDiv:function(a){return r.traverseAndFindFirstMatchingNode(a,l)},getClickableImage:function(b){var c;if(b=r.traverseAndFindFirstMatchingNode(b,f))b=r.getFirstChildElement(b),
r.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b);return c},getNodeMatchingMinimumSize:function(b){return r.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},Ra=function(){var a=bd(),c=function(a,c){c.tag=r.getTagName(a);c.size=r.getDimensionFromAttributes(a)||r.getDimensionFromStyle(a)};return{getDFPValue:function(b){var d;if(d=a.getDFPGoogleDiv(b)){var e;b={type:0};if(d)if(b.type=1,e=a.getClickableImage(d))b.type=2,c(e,b);else if(d=a.getNodeMatchingMinimumSize(d))b.type=3,c(d,b);
d=b}else if(d={type:0},b=a.getNodeMatchingMinimumSize(b))d.type=4,c(b,d);return d}}},qc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},c=function(b,d){if(b!==d&&!r.isViewportVisible(b,a))return b;if(b!==d&&v.isFriendlyToParent(b))return c(b.parent,d)},b=function(){var a=q.getWindow();return c(a,q.getWindow().top)},d=function(){return"undefined"!==typeof b()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=q.getWindow();r.isViewportVisible(c,
a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:b}}},cd=function(a){var c,b,d=function(d){c=a.setInterval(d,100);b=a.setTimeout(function(){e()},42E4)},e=function(){c&&(a.clearInterval(c),c=null);b&&(a.clearTimeout(b),b=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,g=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(g=!0);g&&!d&&(b(),e(),g=!1);c=a.innerWidth;f=a.innerHeight})}}},mc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,c){var b,
d=function(){try{var d=a.isHidden(),f,l={};d!==b&&(f=g.stringifyTriState(d),l.res1=f,l.ps=f,l.ts=q.now(),l.psfr=g.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),c.events.trigger("newState",l));b=d}catch(u){n.getAggregator().trigger("error",m.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)cd(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,c,b){return b.embedded&&!b.isBustedIframe()&&!b.isSpecifiedAd()}}},nc={name:"hA",dependencies:["AS_Finder"],
creator:function(a){var c=0,b=function(a,b){n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.FF,a,g(b).toION())},d=function(a){2>c&&b("ha1",a);c++};(function(){var c,f;if(v.embedded)try{f=k.contextNode.parentNode,c=Ra().getDFPValue(f),f={},f.df=c.type,c.size&&(f.sz=c.size.width+"."+c.size.height),c.tag&&(f.dom=c.tag),b("dfp",f),c.size&&a&&(a.events.on("newState",d),a.start())}catch(l){n.getAggregator().trigger("error",m.ERROR_CODES.HIDDEN)}})()},settings:{tier:m.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,
c,b){return a.on("usehaps")}}},pc={name:"thresholdDetector",dependencies:[],creator:function(){return{create:function(a,c,b){var d,e=c(),f=function(){var f=c();f!==e&&(b(a,f),q.clearInterval(d));e=f};e&&(b(a,e),d=q.setInterval(f,50))}}}},oc={name:"invisibleAds",dependencies:["thresholdDetector"],creator:function(a){var c={width:4,height:4},b=function(){var a=A.getStyle(q.getWindow().frameElement,"opacity");return.2>parseFloat(a)},d=function(){return"hidden"===A.getStyle(q.getWindow().frameElement,
"visibility")},e=function(a,b){var c={res1:g.stringifyTriState(b)};n.getAggregator().trigger("addThrottledProp","sca",a,g(c).toION())};try{var f=k.contextNode.parentNode,l=Ra().getDFPValue(f);r.isViewportVisible(q.getWindow(),c)&&2===l.type&&(b()&&a.create("ha2",b,e),d()&&a.create("ha3",d,e))}catch(u){}},settings:{tier:4,applies:function(a,c,b){return b.embedded&&!b.isBustedIframe()&&!b.isSpecifiedAd()}}},Sa=function(a,c,b,d){var e,f=0,l=0,u=!1,p=function(){e=Math.round(r.getNodeArea(a.body));if(e>=
d){for(var p,t=e+20*e/100,k=a.querySelectorAll("iframe"),k=g.fromNodeListToArray(k);k.length&&(l<t||f<b);)p=k.shift(),p=Math.round(r.getNodeArea(p)),p>=d&&(f++,l+=p);l>=t&&f>=b&&(t={va:e,bia:l,bin:f},n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.FF,c,g(t).toION()),u=!0)}},t=function(){var b;b=new MutationObserver(function(a){u?b.disconnect():q.execAtEndOfThread(function(){g(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&r.isElement(c)&&r.tagNameIs(c,"IFRAME")&&g.debounce(p,
10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(q.execAtEndOfThread(p),!u&&g.isDef(y.MutationObserver)&&t())},lc={name:"BS_InApp",dependencies:[],creator:function(){var a=q.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Sa(a,"bs1",3,100)},settings:{tier:m.TIERS.VIEWABILITY,applies:function(a,c,b){c=b.isOmid()||b.isMraid();b=!b.isDomless()&&b.friendly&&!b.embedded;return a.on("bas")&&c&&b&&a.bootstrapOn("app")}}},kc={name:"BS_Browser",
dependencies:[],creator:function(){var a=q.getWindow().document,c=a.body?Math.round(r.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&c&&Sa(a,"bs2",10,c)},settings:{tier:m.TIERS.VIEWABILITY,applies:function(a,c,b){c=!a.bootstrapOn("app")&&!b.isDomless();return a.on("bbs")&&b.embedded&&c}}},Kb=function(){return{createInstance:function(a){return v.isDomless()?new dd:new ed(a)}}},ed=function(a){var c,b,d,e=new Ia,f=new fa,l=new fd(e),u=new gd,p=new hd,t=new id(e,
a),m=function(){g.isUndef(d)&&(d=new jd(e));return d},k=function(){e.provide({frameCollection:function(){return l},adProxy:function(){return p},adTalkMessage:function(a){return new kd(a,e)},adTalkMessageCollection:function(){return u},idMapModule:m,interFrameQuerySelector:function(a){return new ld(a)}})};return{isApplicable:function(a){return g.isDef(y.JSON)&&g.isDef(y.postMessage)&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){k();f.traverse(l.addFrame);t.startListening();t.sendToKnownFrames();
n.getAggregator().once("stopAdTalk",function(){t.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:t.sendAdTalkCall,getFrameMap:function(){g.isUndef(c)&&(c=new Ta(e));return c},getFrameMapIncludingPeerCase:function(){g.isUndef(b)&&(b=new Ta(e,!0));return b},getIdMap:m}},dd=function(){return{isApplicable:function(){return!1},start:function(){}}},kd=function(a,c){var b,d=c.request("adProxy").myIdCard,e=c.request("frameCollection").getMe().getStringifiedPosition();
b=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var f=k.asid,d=d.tagId,l=v.embedded,g=v.friendly,p=k.birthdate;b=b.split("-")[2];var t;v.friendly?t="["+m.AD_IDENTIFIER+"-"+k.asid+"]":(t=q.getWindow(),t=t.location&&t.location.href,t='iframe[src*="'+(t&&t.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:a||{},srcAsid:f,srcTagId:d,srcIsEmbedded:l,srcIsFriendly:g,srcBirthdate:p,iasCommonId:b,nodeSelector:t,positionStr:e,version:"0.1"}},gd=function(){var a={};return{add:function(c){var b=
c&&c.srcAsid;b&&(a[b]=c)},map:function(c){return g(a).map(c)},has:function(c){return a[c&&c.srcAsid]}}},md=function(a,c,b,d){var e,f=a==y;e={position:c.slice(0),id:c.join("-"),isMe:f,isLeaf:!a.frames.length,adProxies:f?b:[],selfDescription:void 0,unifiedId:k.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return g(e.position).map(function(a,b){return g.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||g.isDef(e.selfDescription)}};var l=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?g(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!g(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){g(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){l(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},fd=function(a){var c=
[],b={},d={noMe:!0};return{addFrame:function(e,f,l){var g=a.request("adProxy").getAll();e=new md(e,f,g,l);c.push(e);b[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return b[a]},list:c,dictionary:b,getMe:function(){return d}}},Ta=function(a,c){var b=function(a,b){var e=b.adProxies,f="";if(b.isValidForMapping()){if(c)f+=d(e,b.getStringifiedPosition());else{var g;g=""+b.getStringifiedPosition();g+=b.isMe?"*":"";g+=e.length?"."+e[0].tagId:"";f+=g}return f}},d=function(a,b){var c="";return c=a.length?
c+g(a).stringify(function(a,c){return b+(k.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var c=a.request("frameCollection"),d=g(c.list).stringify(b,"|");return g.toBase(c.getMe().unifiedId,62)+"+"+d}}},jd=function(a){var c=a.request("frameCollection").getMe().getStringifiedPosition(),b=k.contextNode.parentNode,d=a.request("interFrameQuerySelector",b),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!v.embedded,f="BODY"!==r.getNodeName(b)&&"HEAD"!==
r.getNodeName(b),l;if(l=a.srcIsEmbedded){l="0.1"!==a.version;var g=a.nodeSelector&&-1===a.nodeSelector.indexOf(m.AD_IDENTIFIER);l=!(l?g:!a.srcIsFriendly)}e&&f&&!l?a=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&v.embedded,e=0===c.indexOf(e)||0===e.indexOf(c),a=!(!a||!e));return a};return{output:function(){var b,d=c+"*";b=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==k.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
b.push(d);b=b.join("|");120<b.length&&(b=e(b),n.getAggregator().trigger("stopAdTalk"));return b},isCandidateForMyIdMap:f}},ld=function(a){var c=new fa,b=function(a){var b=a,c="IFRAME"===r.getNodeName(a),d=r.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,c){return r.querySelector(b(a),c)},e=function(b,e){var f,l,t;try{l=d(b,e),l||(f=c.getFrames(!0,a),g(f).findFirst(function(a,b){return t=d(b,e)}))}catch(x){}return l||t||null};return{queryFor:function(b){var c=null;
b&&(c=e(a,b));return c}}},id=function(a){var c=!1,b,d;d=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==k.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},f=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},l=function(){var b=m.DT_CODES.ADTALK;a.request("frameCollection");c||(c=!0);n.getAggregator().trigger("sendDt",
b)},u=function(b,d,e){var f,p,t,k,u;try{f=a.request("frameCollection");p=a.request("adTalkMessageCollection");t=d.messageContent.self;p.add(d);var x=f.getMe();x.unifiedId>t.unifiedId&&(x.unifiedId=t.unifiedId);var v;v=q.now()-d.sentTime;d.transferDuration=v;p=k=f.getFrame(t.id);g.isUndef(p)||g.isUndef(p.selfDescription)?(k=k||f.addFrame(b.source,t.id.split("-"),d),k.addInformationFromSrc(d,t),e()):k.addInformationFromSrc(d,t);(u=c&&a.request("idMapModule").isCandidateForMyIdMap(d))&&l()}catch(R){n.getAggregator().trigger("error",
m.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:l,sendToKnownFrames:function(){(new ga).send(f)},startListening:function(){b=new Ka;b.listen(e,u,f)},stopListening:function(){b&&b.stop()},validateMessage:e,processMessage:u,createMessage:f}},nd=function(){var a=n.getAggregator().request("ids"),c=a.getAsid();return{tagId:a.getFwId(),adSafeId:c}},hd=function(){var a,c=[],b=function(a){a=new nd(a);c.push(a);return a};a=b();return{createNew:b,getAll:function(){return c},myIdCard:a}},Rb=function(a){var c,
b,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,c=a.screenX-a.clientX,b=a.screenY-a.clientY,e=!1);return e};a.browserIs(m.BROWSERS.IE)&&A.addEvent(q.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(m.BROWSERS.IE)&&(d=!0,q.getDoc().documentElement.click());return{scrX:c,scrY:b}}}},od=function(a,c){var b,d,e=m.NA,f=e,l=!1,k=!1,p=!1,t=!c,x=n.getAggregator().request("browser"),w=function(a,b){Jc().applies(x)&&
q.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},D=function(){var c=q.getIntersectionObserver(function(a,c){var d=a.pop(),l=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(l)&&(w(d.target,c),l=0);e=Math.min(l,100);b=d.boundingClientRect;e!==f&&q.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:m.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});
t&&q.execAtEndOfThread(function(){e===m.NA&&(e=0)});c.observe(z(a));t&&q.execAtEndOfThread(function(){v.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});l=!0},z=function(b){if(!g.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");g(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[m.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,
document:a.document})}catch(B){k=!0}b&&null!==b.bodyElement?D():b&&b.document?A.whenReady(D,b.document):k?n.getAggregator().request("errors").add(m.ERROR_CODES.BUSTED_IFRAME_IN_IO):D()},isReady:function(){return e!==m.NA},isStarted:function(){return l},getAdNodeDimensions:function(){var a;b&&(a=F({scrX:void 0,scrY:void 0,width:b.width,height:b.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},ya=function(){var a=!1;(function(){A.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},uc={name:"loopDelay",dependencies:[],creator:ya,settings:{applies:function(a,c,b){return a.bootstrapOn("allowViewability")},tier:m.TIERS.VIEWABILITY}},pd=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,c){return!c.browserIs(m.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},qd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},jb=
function(a,c,b){var d=!1,e=function(){try{c.impressionIsIdentifiable()&&!d?(d=!0,n.getAggregator().trigger("notify",k._onMeasurable)):c.impressionIsIdentifiable()||__IntegralASDiagnosticCall("rtsmeas_imp_not_iden",{},k)}catch(f){__IntegralASDiagnosticCall("rtsmeas_send_noti_error",f,k)}};return{start:function(){try{var c,d=[rd(),sd(),qd(),pd()];(c=g(d).findFirst(function(c,d){return d.isApplicable(b,a)}))?c.start(e):__IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy",{},k)}catch(u){__IntegralASDiagnosticCall("rtsmeas_start_error",
u,k)}},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&g.isDef(k._onMeasurable)}}},sd=function(){return{start:function(a){Lc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,c){var b=9<=c.getIOSVersion();return(!c.browserIs(m.BROWSERS.WEBKIT)||b)&&v.isVideo()}}},rd=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&v.isVideo()}}},
td=function(a,c,b){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,c){return c===b}));return c.accepts()&&c.isMediaType(m.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var c=q.getWindow(),c=c&&c.omid3p,b=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(c&&g.isFunction(c.registerSessionObserver)&&
g.isFunction(c.addEventListener));return{accepts:function(){return(d||e)&&!k.videoId},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},ud=function(a,c,b){var d=n.getAggregator().request("omidAdSessionContext"),d=d.isHtml&&d.isWeb,e,f=q.getWindow(),l=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a;e=d?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(e).find(function(a,
c){return c===b}));return c.accepts()&&c.isMediaType(m.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){l.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},Dc=function(a){return{resolve:function(){return g(a).findFirst(function(a,b){return b.environment.accepts()})}}},Ac=function(a){var c=!1,b=!1,d=!1,e=!1,f=n.getAggregator().request("omidAdSessionContext");
f.queuedOutputItems=[];f.cachedEvents=[];f.cachedGeometryEventsReceived=!1;f.cachedVideoEventsReceived=!1;f.recoveredTime=-1;var l=new ja,m=n.getAggregator().request("omidAdSessionVerificationParameters"),p=n.getAggregator().request("features"),t=q.getWindow(),x=(t=t&&t.omid3p)&&g.isFunction(t.registerSessionObserver)&&g.isFunction(t.addEventListener)?t:a,w=!1;f.omidEarlyExit=!1;f.mediaType="display";var D=!1,z=function(a,b){f.queuedOutputItems.push({code:a,value:b})},C=function(a,b,c){n.getAggregator().trigger(a,
b,c)},B=function(a){n.getAggregator().trigger(a)},N=function(){if(c&&b&&(!e||d)){y.omidSupported=!0;f.hasOwnProperty("impressionType")&&z("oiet",f.impressionType);f.hasOwnProperty("creativeType")&&z("oct",f.creativeType);f.underEvaluation&&z("oef",!0);w=f.exitedOASRS=!0;var a=m&&m.IAS&&0<Object.keys(m.IAS).length;Aa(a?m.IAS:m)}},r=function(a){function l(){return v.isOmidForWeb()||a.data.hasOwnProperty("supportsLoadedEvent")&&("true"===a.data.supportsLoadedEvent||!0===a.data.supportsLoadedEvent)&&
"string"===typeof a.data.creativeType&&""!==a.data.creativeType}var g="0";if("sessionStart"===a.type){f.adSessionType=a.data.context.adSessionType;f.environment=a.data.context.environment;f.accessMode=a.data.context.accessMode;f.omidNativeInfo=a.data.context.omidNativeInfo;f.omidJsInfo=a.data.context.omidJsInfo;f.deviceInfo=a.data.context.deviceInfo;f.app=a.data.context.app;f.supports=a.data.context.supports;f.app&&"string"===typeof f.app.appId&&-1<f.app.appId.toLowerCase().indexOf("pandora")&&(f.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(f.contentUrl=a.data.contentUrl);a.data.context.hasOwnProperty("underEvaluation")&&(f.underEvaluation=a.data.context.underEvaluation);f.isJavaScript="javascript"===f.adSessionType;f.isNative="native"===f.adSessionType||"javascript"===f.adSessionType;f.isLimitedSandbox="app"===f.environment?v.embedded:"full"!==a.data.context.accessMode;f.isHtml="html"===a.data.context.adSessionType;f.isWeb="web"===a.data.context.environment;f.partnerName=f.omidNativeInfo&&f.omidNativeInfo.partnerName&&
f.omidNativeInfo.partnerName.toLowerCase();m=a.data.verificationParameters;f.isOmidForWebEnvironment=f.isHtml&&f.isWeb;f.element=a.data.context.videoElement||a.data.context.slotElement||null;l()?(e=!0,f.useOMID13Logic=!0,z("ohand","13"),x.addEventListener("video",G),x.addEventListener("media",G)):z("ohand","12");f.isOmidForWebEnvironment||(f.integratedBlocking=k&&k.isResolved&&v.integratedBlockingApplies(k.mobFwUrl),f.integratedBlocking&&p&&p.on("exitOASRSEarly")&&(f.omidEarlyExit=!0,g="1",f.omidEarlyExit&&
-1<k.mobFwUrl.indexOf("xmtp=v")&&(f.mediaType="video")),!a.data.mediaType||"display"!==a.data.mediaType&&"video"!==a.data.mediaType||(f.mediaType=a.data.mediaType));f.omidEarlyExit&&(b=!0,z("omtp",f.mediaType),l()&&(d=!0),"video"===f.mediaType&&(f.isVideo=!0),f.isNativeVideo=f.isNative&&f.isVideo,f.isDisplay="display"===f.mediaType);"audio"===a.data.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=!0);for(var t=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",
code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],u,n,q,D=0;D<
t.length;D++)u=t[D].root,n=t[D].field,q=t[D].code,"object"===typeof f[u]&&"undefined"!==typeof f[u][n]&&z(q,f[u][n]);z("oast",f.adSessionType);z("oacm",f.accessMode);z("oenv",f.environment);f.hasOwnProperty("contentUrl")&&z("ocon",encodeURIComponent(f.contentUrl||""));z("oerl",g);z("oses",v.getTagTime());c=!0;N()}"sessionError"===a.type&&(g=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),w?C("addOutputItem",
{output:g},"oser"):z("oser",g))},R=function(a){"impression"===a.type&&(f.omidImpressionArrived=!0,B("omidimpressionarrived"),f.mediaType="web"===f.environment?a.data.mediaType||"video":a.data.mediaType,z("omtp",f.mediaType),"audio"===a.data.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=!0),z("oimp",v.getTagTime()),"video"===a.data.mediaType&&(f.isVideo=!0),a.data.adView&&(a.data.viewport||f.isWeb)&&(f.impressionViewabilityMeasurement={type:"geometryChange",data:{viewport:a.data.viewport,
adView:a.data.adView},timestamp:a.timestamp},"undefined"===typeof f.geometryArrived&&l.checkForViewAttachmentBasedOnAdSessionType(f,a.data.adView)&&(f.geometryArrived=!0,B("omidrendgeoupdate"))),a.data.hasOwnProperty("impressionType")&&!d&&(f.impressionType=a.data.impressionType),f.isNativeVideo=f.isNative&&"video"===a.data.mediaType,f.isDisplay="display"===a.data.mediaType,b=!0,N())},G=function(a){a&&"start"===a.type?(f.videoStartArrived=!0,B("omidrendvideostart")):"loaded"===a.type&&(z("oloa",v.getTagTime()),
d=!0,f.omidLoadedArrived=!0,B("omidloadedarrived"),a.data.hasOwnProperty("creativeType")&&(f.creativeType=a.data.creativeType),"audio"===f.creativeType&&(f.accessMode="limited",f.isLimitedSandbox=!0),a.data.hasOwnProperty("impressionType")&&(f.impressionType=a.data.impressionType),!0!==f.omidEarlyExit||D||(C("addThrottledOutputItem","oiet",f.impressionType),C("addThrottledOutputItem","oct",f.creativeType),D=!0),N())};return{start:function(){x.registerSessionObserver(r,"IAS");x.addEventListener("impression",
R)}}},Bc=function(){return{accepts:function(){return!0}}},Na=function(){var a=n.getAggregator().request("omidAdSessionContext"),c=n.getAggregator().request("omidVerificationClient"),b=new ba(c),d=a.isHtml&&a.isWeb;return{accepts:function(){return b.accepts()&&d}}},Cc=function(){return{start:function(){Aa(k.contextNode&&(k.contextNode.dataset.iasParameters||k.iasParameters))}}},vd=function(a,c){var b=[],d=(new Date).getTime(),e=0,f=1,l=0,u=!1,p=new Pa,t=n.getAggregator().request("omidAdSessionContext"),
x=q.getWindow(),w=(x=x&&x.omid3p)&&g.isFunction(x.registerSessionObserver)&&g.isFunction(x.addEventListener)?x:a,v=!1,z=!1,C={isEmpty:function(){return 0===b.length},toString:function(){for(var a="{vEventCount:"+b.length+",vEvents:[",c=0;c<b.length;c++)var d=b[c],a=a+((0<c?",{":"{")+("t:"+d.t+",")+("rt:"+d.rt+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume+",")+("devol:"+d.devol)+"}");return a+"]}"}},B=function(){u=!0},r=function(a){if(-1!=="|start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish|complete|pause|bufferStart|skipped|playerStateChange|loaded|volumeChange|".indexOf("|"+
a.type+"|"))try{var p="",x=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),w=x-(k.birthdate||x+1),q="n",C=!1;switch(a.type){case "start":p="adVideoStart";t.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=x;l=a.data.duration;1E3<l&&(l/=1E3);e=void 0!==a.data.mediaPlayerVolume?a.data.mediaPlayerVolume:a.data.videoPlayerVolume;f=void 0!==a.data.deviceVolume?a.data.deviceVolume:1;break;case "volumeChange":p="volumeChanged";e=void 0!==a.data.mediaPlayerVolume?a.data.mediaPlayerVolume:
a.data.videoPlayerVolume;f=void 0!==a.data.deviceVolume?a.data.deviceVolume:1;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);C=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}e=0<e&&.1>e?.1:parseInt(10*e)/10;f=0<f&&.1>f?.1:parseInt(10*f)/10;if(""!==p){var D=
n.getAggregator().request("mScreenEvents");D&&(q=D.getCurrentLoc());b.push({t:x-d,rt:w,tp:p,sl:q,ad_duration:l,volume:e,devol:f})}if("loaded"===a.type&&g.isDef(a.data)){var B=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),w=-1!==B?B+1:void 0,q=[];!0===a.data.autoPlay?q.push("autoplayed"):q.push("clicktoplay");!0===a.data.skippable&&q.push("skippable");"fullscreen"===a.data.state&&q.push("fullscreen");var r=q.join(".");!0===u?(g.isDef(w)&&n.getAggregator().trigger("addThrottledProp",
m.DT_SLOT.ENVIRONMENT,"vbp",w),n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,"vps",r)):(g.isDef(w)&&n.getAggregator().trigger("addOutputItem",{output:w},"vbp",{type:m.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:r},"vps",{type:m.IMPRESSION_EVENT}))}"start"===a.type&&(n.getAggregator().trigger("omidAdDuration",{ad_duration:l}),t.adDuration=l);var N;"playerStateChange"===a.type?N="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!==
"start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?(N="AdPlaying",z=!0):-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(N="AdPaused",z=!1);if("audio"===t.creativeType&&""!==p){var L=m.RENDER.WIDTH_THRESHOLD,A=m.RENDER.HEIGHT_THRESHOLD,p={type:"geometryChange",timestamp:x,internallyGenerated:!0,treatAsCached:v,data:{viewport:{width:L,height:A},adView:{measuringElement:!1,percentageInView:100,geometry:{x:0,y:0,width:L,height:A,obstructions:[],reasons:[]},reasons:[]}}};
p.data.adView.onScreenGeometry=p.data.adView.containerGeometry=p.data.adView.onScreenContainerGeometry=p.data.adView.geometry;z&&0!==f&&0!==e||(p.data.adView.geometry.width=p.data.adView.geometry.height=0,p.data.adView.percentageInView=0);n.getAggregator().trigger("internallyGeneratedGeometryEvent",p)}v&&"loaded"!==a.type&&(t.cachedVideoEventsReceived=!0,"start"===a.type&&(t.cachedStartEventIndex=t.cachedEvents.length),t.cachedEvents.push(a));g.isDef(N)&&c.trigger("videoPlaybackEvent",{eventType:N,
eventData:null});C&&n.getAggregator().trigger("sendDt",m.DT_CODES.VIDEO_EVENTS)}catch(Ja){__IntegralASDiagnosticCall("omidvideo",Ja,y.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",B);n.getAggregator().provide({omidVideoEventsString:C});v=!0;"audio"===t.creativeType?w.addEventListener("media",r):w.addEventListener("video",r);v=!1;t.cachedVideoEventsChecked=!0;t.cachedVideoEventsReceived&&t.processCachedEvents();p.init()},addVideoPlaybackEventListener:function(a){c.on("videoPlaybackEvent",
a)}}},wd=function(a,c){var b=!1,d=function(a){var d=a.percentageInView;b=!0;a.viewState=50<=d?m.IN_VIEW:m.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":m.OUT_OF_VIEW_REASONS.GEOM;c.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:m.MEDIA_TYPE.DISPLAY_CODE},m.MEDIA_TYPE_CODE,{type:m.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return m.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){c.on("measurementChanged",
a)},isMeasurable:function(){return b}}},xd=function(a,c,b){var d=g.isDef(a)?a.environment:void 0,e=g.isDef(a)?a.measurementStrategy:void 0,f=function(){return g.isDef(e)};g.isDef(c)&&c.start();return{hasMeasurementStrategy:f,getScreenLocationInfo:function(a){return c.create(a)},isImmediate:function(){return f()?d.isImmediate():!0},isMeasurable:function(){return f()?e.isMeasurable():!1},isMediaType:function(a){return f()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},
start:function(){f()&&d.start()},requiresDelayedViewabilityEvent:function(){f()&&c.requiresDelayedViewabilityEvent()}}},Hb=function(a,c,b){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new Ua(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new yd(b);return new xd(b,c,d.isMobileAppEnvironment())}}},Ib=function(a){var c=
n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),c=new ba(a),e=[];if(c.accepts()){var f=new ha,g=new zd,m=new Na,p=n.getAggregator().request("omidAdSessionContext"),t=new Ad(a,new O),f=[{environment:f,measurementStrategy:new Bd(a,new O)},{environment:m,measurementStrategy:new Cd(new Va,q.getWindow(),new O)},{environment:g,measurementStrategy:new Dd(new Wa,q.getWindow(),new O)}],f=(f=(new Ua(f)).resolve())?
f.measurementStrategy:{},m=new Ed(new Fd(new ka),new ka,p.isHtml),p=new td(a,c,k.mode),g=new Gd(t,f,new O,m),c=new ud(a,c,k.mode),a=new Hd(t,f,new vd(a,new O),new O,m);e.push({environment:p,measurementStrategy:g});e.push({environment:c,measurementStrategy:a})}return e},getMraidMeasurementStrategies:function(){var a=[],d=c.isSafeToInjectMraid(),d=new Id(q.getWindow(),d,c.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Jd(q.getWindow(),e),f=new Kd(q.getWindow(),
new O);e.accepts()?(d=new Ld(q.getWindow(),new O),d=new Md(f,d,new O),d={environment:e,measurementStrategy:d}):(e=new wd(f,new O),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},Ua=function(a){return{resolve:function(){var c=g(a).findFirst(function(a,c){return c.environment.accepts()});if(g.isDef(c))return c}}},yd=function(a){var c=!1,b,d={winDimensions:F({scrX:0,scrY:0,width:0,height:0}),adDimensions:F({scrX:0,scrY:0,width:0,height:0}),containerDimensions:F({scrX:0,scrY:0,width:0,
height:0}),method:m.NA,viewState:m.NA,percentInView:m.PIV_NA,reason:"",obstructed:m.NA,isHidden:m.NA,tabHidden:m.NA,posViewState:m.NA,adCompCount:1},e=function(a){return a?new F({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):F({scrX:0,scrY:0,width:0,height:0})},f=function(a){b={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||m.NA,viewState:a.viewState||m.NA,percentInView:g.isDef(a.percentageInView)?a.percentageInView:
m.PIV_NA,reason:a.outOfViewReason||"",obstructed:g.stringifyTriState(a.isObstructed),isHidden:m.NA,tabHidden:m.NA,posViewState:a.viewState||m.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;g.isDef(d)&&""!==d&&(b.omidObstructions=d);a.isMeasurable&&c&&(c=!1,n.getAggregator().trigger("delayedViewabilityReady"))};
return{create:function(c){var e=d;if(g.isDef(b))if(a.environment.supportsAdContainerGeometry())e=b;else if(b.shouldDelegateToDomBasedViewability)e=c,e.method=b.method;else if(0===b.percentInView||75<=b.percentInView)e=b;return e},start:function(){var b;g.isDef(a)&&g.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(f),b.start())},requiresDelayedViewabilityEvent:function(){c=!0}}},Md=function(a,c,b){var d=!1,e=!1,f=!1,l,k,p,t,x=function(){if(!g.isUndef(k)){var a=
[],c,n;d?(e?(n=!1,c=100):(n=t,c=p),50>c&&a.push(m.OUT_OF_VIEW_REASONS.GEOM)):(n=!1,c=0,a.push(m.OUT_OF_VIEW_REASONS.VIDEO));f=!0;k.shouldDelegateToDomBasedViewability=n;k.percentageInView=c;k.viewState=50>c?m.OUT_OF_VIEW:m.IN_VIEW;k.outOfViewReason=a.join(".");l=k;b.trigger("measurementChanged",l)}},w=function(a){k=a;p=a.percentageInView;t=a.shouldDelegateToDomBasedViewability;x()},q=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?
d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);x()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:m.MEDIA_TYPE.VIDEO_CODE},m.MEDIA_TYPE_CODE,{type:m.IMPRESSION_EVENT});a.addScreenLocationChangedListener(w);a.start();c.addVideoPlaybackEventListener(q);c.start()},getStrategyName:function(){return m.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return f}}},
Jd=function(a,c){return{accepts:function(){return c.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Ld=function(a,c){var b=function(a){try{c.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(e){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(b)}catch(d){}},
addVideoPlaybackEventListener:function(a){c.on("inMobiMraidVideoPlaybackEvent",a)}}},Ed=function(a,c,b){function d(a,b,c){c=k(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width)-c,f=Math.min(a.y+a.height,b.y+b.height)-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},l=function(a,b){var c=v.isOmidForWeb(),d=!v.isOmidSandboxedEnvironment(),
c=c&&d;return{x:c?b.x:a.x+b.x,y:c?b.y:a.y+b.y,width:b.width,height:b.height}},k=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,t){if(g.isDef(e)&&g.isDef(t)){var p=e.viewport,n=e.computedAdContainer,u=n.obstructions,z=e.omidObstructions,v=u&&0<u.length,B=e.originalAdContainer,r=t.adGeometry,L=t.adFound,y=e.detectionMethod,G=0,p={x:0,y:0,width:p.width,height:p.height},A=l(B,r),J=e.outOfViewReason,ea=v||!1,V=1>=r.width*r.height;
b&&V&&(L=!1,J=J||"",L||-1!==J.indexOf(m.OUT_OF_VIEW_REASONS.GEOM)||(J=m.OUT_OF_VIEW_REASONS.GEOM+(""!==J?"."+J:"")));if(L&&0<e.percentageInView){G=d(p,n,A);v?(r=k(n,A),r=f(p,n,r),r=l(n,r),u=a.calculateObstructedArea(r,u)):u=0;G=Math.round((G-u)/(A.width*A.height)*100);v&&0===u&&(ea=!1);for(var L=(new F(A)).getRoundedGeometry(),V=ea,M,P=c.getConfig(L).numberOfSlices,Q=q.floor(L.height/P)||1,u=[],r=V?a.getObstructionStatusBySlice(P):[],da,v=0;v<P;v++)M=L.y+Q*v,v==P-1&&(Q=L.y+L.height-M),M={x:L.x,y:M,
width:L.width,height:Q},da=d(p,n,M),M=1==da/(M.width*M.height),u.push(M);if(V)for(n=q.min(r.length,P),v=0;v<n;v++)u[v]=u[v]&&!r[v];n=u}else n=c.getConfig(r).defaultSliceArray;B={windowDimensions:p,containerDimensions:B,adDimensions:A,percentageInView:G,viewState:50<=G?m.IN_VIEW:m.OUT_OF_VIEW,outOfViewReason:50<=G?"":J||m.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:y,isObstructed:ea,sliceStatus:n};g.isDef(z)&&""!==z&&(B.omidObstructions=z);return B}}}},Gd=function(a,c,b,d){var e,f,l,k=function(){if(g.isDef(e)&&
g.isDef(f)){var a=d.calculateGeometricMeasurement(e,f);l=a.isMeasurable=!0;b.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;k()},t=function(a){f=a;k()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:m.MEDIA_TYPE.DISPLAY_CODE},m.MEDIA_TYPE_CODE,{type:m.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();c.addAdGeometryMeasurementChangedListener(t);c.start()},addMeasurementChangedListener:function(a){b.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return m.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return l}}},Fd=function(a){var c=[],b;return{calculateObstructedArea:function(d,e){var f,l,m,p;f=e&&0<e.length;var k;if(f){k=Math.round(d.width);var n=Math.round(d.height);l=Array(k);for(m=0;m<k;m++)l[m]=Array(n);k={matrix:l,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:n}}else k={};l=k;n=k=0;if(f){for(;k<e.length;k++){f=e[k];var n=l,w=Math.max(n.x,f.x);l=Math.max(n.y,f.y);m=Math.min(n.x+
n.width,f.x+f.width)-w;p=Math.min(n.y+n.height,f.y+f.height)-l;f=w;m=0<m?m:0;p=0<p?p:0;w=f-n.x;f=l-n.y;l=w+m;m=f+p;for(p=Math.round(w);p<Math.round(l);p++)for(w=Math.round(f);w<Math.round(m);w++)void 0!==n.matrix[p]&&void 0===n.matrix[p][w]&&(n.matrix[p][w]=1,n.obscuredPixelCount+=1);l=n}n=l.obscuredPixelCount;k=l;if(g.isUndef(k.matrix)||0===k.matrix.length)b=[];else{f=0;l=k.matrix[0].length;m=k.matrix.length;p=a.getConfig({height:l}).numberOfSlices;for(var w=q.floor(l/p)||1,v=[],z=0;z<l;z++){p=!1;
for(var r=0;r<m;r++)if(1===k.matrix[r][z]){p=!0;break}f++;p&&(z+=w-f,f=w);if(f==w||z===l-1)v.push(p),f=0}b=v}}else b=c;return n},getObstructionStatusBySlice:function(){return b}}},Ad=function(a,c){var b=n.getAggregator().request("omidAdSessionContext");b.geometryChangeEvents=[];var d=null,e=!1,f=q.getWindow(),l=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,u=new ja,p=!1,t=!1,x=function(){var a=q.getDoc().getElementById("iasbi"+k.asid);a&&a.hasAttribute("CreativeLoaded")?
(e=b.delayingViewabilityEvents=!1,d&&(w(d),d=null)):q.setTimeout(x,50)},w=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView&&("audio"!==b.creativeType||a.internallyGenerated)){var f=p||a.treatAsCached;f&&(b.cachedGeometryEventsReceived||(b.cachedFirstGeometricIndex=b.cachedEvents.length),b.cachedGeometryEventsReceived=!0,b.cachedEvents.push(a));var l=a.data.adView,t=!!(l.measuringElement&&l.containerGeometry&&l.onScreenContainerGeometry),w=b.cachedStartEventIndex;!f&&b.unrecoveredPlayTime&&
-1<w&&50<=l.percentageInView&&"audio"!==b.creativeType&&(f=q.now()-b.cachedEvents[w].timestamp,(w=n.getAggregator().request("mScreenEvents"))&&w.setRecoveredTimeInSlTimes&&w.setRecoveredTimeInSlTimes(f));10>b.geometryChangeEvents.length&&(b.geometryChangeEvents.push(a.timestamp-k.birthdate+"."+l.percentageInView),n.getAggregator().trigger("addOutputItem",{output:b.geometryChangeEvents.join("_")},"og"));if(b.delayingViewabilityEvents)d=a,e||(e=!0,x());else{var z=[];l.onScreenGeometry&&l.onScreenGeometry.obstructions&&
0<l.onScreenGeometry.obstructions.length&&(t&&(l.onScreenContainerGeometry.obstructions=l.onScreenGeometry.obstructions),l.reasons&&-1<l.reasons.indexOf("obstructed")&&100>l.percentageInView&&(l.onScreenGeometry.obstructions=l.onScreenGeometry.obstructions.slice(0,4),g(l.onScreenGeometry.obstructions).each(function(a,b){z.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));f=v.isOmidForWeb()?r.calcWinDims():{width:0,height:0};f=new F(a.data.viewport||f);
w=new F(t?l.containerGeometry:l.geometry||{x:0,y:0,width:0,height:0});t=new F(t?l.onScreenContainerGeometry:l.onScreenGeometry||{x:0,y:0,width:0,height:0});l={viewport:f.getRoundedGeometry(),originalAdContainer:w.getRoundedGeometry(),computedAdContainer:t.getRoundedGeometry(),percentageInView:l.percentageInView,detectionMethod:m.DETECTION_METHODS.OMID,outOfViewReason:D(l.reasons),omidObstructions:z.join("_")};"undefined"===typeof b.geometryArrived&&u.checkForViewAttachmentBasedOnAdSessionType(b,a.data.adView)&&
(b.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));c.trigger(m.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,l)}}},D=function(a){var b={inactive:m.OUT_OF_VIEW_REASONS.FOCUS,viewport:m.OUT_OF_VIEW_REASONS.GEOM,clipped:m.OUT_OF_VIEW_REASONS.GEOM,obstructed:m.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:m.OUT_OF_VIEW_REASONS.FOCUS,notFound:m.OUT_OF_VIEW_REASONS.HIDDEN,hidden:m.OUT_OF_VIEW_REASONS.HIDDEN,noWindowFocus:m.OUT_OF_VIEW_REASONS.WINDOW},c=[];if(!a)return"";g(a).each(function(a,
d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};b.processCachedEvents=function(){if(!t){var a="video"===b.mediaType,c=b.supports&&-1<b.supports.join().indexOf("clid"),d="full"===b.accessMode,e=!a||b.cachedVideoEventsChecked,f=b.cachedGeometryEventsChecked;if(("limited"===b.accessMode||d&&c)&&f&&e&&0<b.cachedEvents.length){var d="o",g,c=f=e=0,l=!a,p=!1,m=q.now();if(a){var k=b.cachedEvents[b.cachedFirstGeometricIndex],u=b.cachedEvents[b.cachedStartEventIndex];k&&u&&k.timestamp>u.timestamp&&
(k.timestamp=u.timestamp)}for(u=0;u<b.cachedEvents.length;u++){g=m;for(var x=-1,w=0;w<b.cachedEvents.length;w++)!b.cachedEvents[w].alreadyOrdered&&b.cachedEvents[w].timestamp<g&&(g=b.cachedEvents[w].timestamp,x=w);-1!==x&&(x=b.cachedEvents[x],x.alreadyOrdered=!0,"geometryChange"===x.type&&x.data&&x.data.adView?(e=x.data.adView.percentageInView,p=!0):l=-1<"start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(x.type),g=e&&50<=e&&l?"i":"o","o"===d&&"i"===g?f=x.timestamp:"i"===d&&"o"===
g?c+=x.timestamp-f:"i"===d&&"i"===g&&(c+=x.timestamp-f,f=x.timestamp),d=g)}t=!0;"i"===d?c+=m-f:a&&!p&&-1<b.cachedStartEventIndex&&(b.unrecoveredPlayTime=!0);0<c&&("audio"===b.creativeType&&(c=Math.min(c,m-k.timestamp)),b.recoveredTime=c,(a=n.getAggregator().request("mScreenEvents"))&&a.setRecoveredTimeInSlTimes&&(a.setRecoveredTimeInSlTimes(c),b.recoveredTime=-1))}}};return{start:function(){p=!0;void 0!==b.impressionViewabilityMeasurement&&w(b.impressionViewabilityMeasurement);l.addEventListener("geometryChange",
w);p=!1;b.cachedGeometryEventsChecked=!0;b.cachedGeometryEventsReceived&&b.processCachedEvents();n.getAggregator().on("internallyGeneratedGeometryEvent",w)},addAdContainerGeometryMeasurementChangedListener:function(a){c.on(m.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:D}},ha=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Bd=function(a,c){var b=n.getAggregator().request("omidAdSessionContext"),
d=null,e=!1,f=q.getWindow(),l=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,u=new ja,p=function(){var a=q.getDoc().getElementById("iasbi"+k.asid);a&&a.hasAttribute("CreativeLoaded")?(e=b.delayingViewabilityEvents=!1,d&&(t(d),d=null)):q.setTimeout(p,50)},t=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView&&("audio"!==b.creativeType||a.internallyGenerated))if(b.delayingViewabilityEvents)d=a,e||(e=!0,p());else{var f=a.data.adView.geometry,
g=a.data.adView.containerGeometry,l=!!f,k=a.data.adView.measuringElement&&!!g,f=(new F({x:l&&k?f.x-g.x:0,y:l&&k?f.y-g.y:0,width:l?f.width:0,height:l?f.height:0})).getRoundedGeometry();"undefined"===typeof b.geometryArrived&&u.checkForViewAttachmentBasedOnAdSessionType(b,a.data.adView)&&(b.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));c.trigger(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:l})}};return{start:function(){void 0!==b.impressionViewabilityMeasurement&&t(b.impressionViewabilityMeasurement);
l.addEventListener("geometryChange",t);n.getAggregator().on("internallyGeneratedGeometryEvent",t)},addAdGeometryMeasurementChangedListener:function(a){c.on(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},zd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Cd=function(a,c,b){var d,e=function(){var c=a.find(),e,k,p=!1;g.isDef(c)&&null!==c?(k=!0,e=c.getBoundingClientRect(),e={x:e.x||e.left,y:e.y||e.top,width:e.width,height:e.height},c.hasOwnProperty("adWasClipped")&&
(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),k=!1);if(c=k)c=e,c=!g.isDef(d)||!1!==g(c).compareTo(d);if(c||p)d=e,b.trigger(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:k})};return{start:function(){e();c.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){b.on(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Hd=function(a,c,b,d,e){var f=!1,l=!1,k,p,t,x,q,v=function(){if(!(g.isUndef(p)||g.isUndef(t)||g.isUndef(x))){q=!0;var a=e.calculateGeometricMeasurement(p,
t),b=f&&l,c=f&&50<=a.percentageInView,n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:f,isVideoPlayingInFullscreen:b,isSoundOn:!0},u=a.omidObstructions;g.isDef(u)&&""!==u&&(n.omidObstructions=u);b&&(n.percentageInView=100);b||c?n.viewState=m.IN_VIEW:(n.viewState=m.OUT_OF_VIEW,n.outOfViewReason=
a.outOfViewReason||m.OUT_OF_VIEW_REASONS.VIDEO);k=n;d.trigger("videoGeometryMeasurementChanged",k)}},z=function(a){p=a;v()},r=function(a){t=a;v()},B=function(a){x=a;a=a.eventType;"AdEnteredFullscreen"===a?l=!0:"AdExitedFullscreen"===a?l=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?f=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(f=!1);v()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:m.MEDIA_TYPE.VIDEO_CODE},m.MEDIA_TYPE_CODE,
{type:m.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(z);a.start();c.addAdGeometryMeasurementChangedListener(r);c.start();b.addVideoPlaybackEventListener(B);b.start()},getStrategyName:function(){return m.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},Dd=function(a,c,b){var d,e=function(){var c=a.find(),e,k,p=!1;g.isDef(c)?(k=!0,e=c.getBoundingClientRect(),e={x:e.left,y:e.top,
width:e.width,height:e.height},c.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),k=!1);if(c=k)c=e,c=!g.isDef(d)||!1!==g(c).compareTo(d);if(c||p)d=e,b.trigger(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:k})};return{start:function(){e();c.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){b.on(m.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Id=function(a,c,b){return{accepts:function(){var d=g(a.mraid).isObj();return b&&(d||c)},
isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Kd=function(a,c){var b=!1,d=function(){var b,d,e;try{b=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===b?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:b,detectionMethod:m.DETECTION_METHODS.MRAID,sliceStatus:e};c.trigger("mraidScreenLocationChanged",d)}catch(D){}},
e=function(){var b=a.mraid;return g(b).isObj()&&g.isFunction(b.isViewable)},f=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},l=function(){var c=a.mraid;e()&&(b=!0,"loading"===c.getState()?c.addEventListener("ready",function(){f()}):f())},k=function(){b||l()};return{start:function(){var b=!0;if(g.isDef(a.mraid)||r.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:g.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec",
"mraid.js",k):l()},addScreenLocationChangedListener:function(a){c.on("mraidScreenLocationChanged",a)}}},ec=function(a,c,b){var d={},e=function(b){var d=g.noop;c.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",b)});return d};(function(){b&&g(b).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},vb=function(){var a=new S({tiv:[1E4]}),c=g([m.IN_VIEW,m.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:m.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return c.contains(a.viewState)&&100===b},applies:function(a,c){return a.on("abcAudit")&&925955==k.anId&&c.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ub=function(a,c){var b,d,e;b=a.on("everySecond");var f=c.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var g=[2E3,5E3,15E3],n=function(a,b){return-1!==(m.IN_VIEW+"|"+m.PARTIAL_VIEW_PLUS).indexOf(a[b?
"viewStateIgnoringRender":"viewState"])};b?(b=new S({tiv:d}),d=d[0]):f?(b=new S({tiv:g}),d=g[0]):(b=new S({tiv:e}),d=e[0]);e={5E3:k._onInViewMRC5,15E3:k._onInViewMRC15};e[d]=k._onInViewMRC;return{timeInViewThresholds:b,type:m.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},xb=function(a,c){var b;b=a.on("everySecond");var d=c.isVideo(),e=c.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,
5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],g=[1E3,5E3,15E3],k=[2E3,5E3,15E3],p=function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(m.IN_VIEW+"|"+m.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};b=b?new S({tiv:f}):d?new S({tiv:k}):new S({tiv:g});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:b,type:m.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},wb=function(a,c){return{timeInViewThresholds:new S({tiv:[0]}),
type:m.DT_CODES.FULLY_INVIEW,rts:{0:k._onInViewFull},isInView:function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(m.IN_VIEW+"|"+m.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return c.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},zb=function(a,c){var b,d,e,f=q.getMaxNumber(),l=c.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&k.groupm_native_publisher)&&d,t=function(b,c){if(!b.adDimensions)return!1;
var d=c?"percentInViewIgnoringRender":"percentInView",e,k,n,t=b.adDimensions.area();n=1===b.tabHidden;var u=q.max(b.fullPercentInView||0,b[d]),d=g(a.thresholds).findFirst(function(a,b){e=b.lb||0;k=b.ub||f;if(t>=e&&t<=k)return!0});n=!n&&u>=d.piv;b.method==m.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(n=!1);l&&(n=n&&b.isVideoPlaying,p&&(n=n&&b.isSoundOn));return n};b=new S(a);d=a.qiv;(function(){e={};var a;g.isDef(k.rts)&&g.isDef(k.rts[n])&&(a=b&&g.isFunction(b.getTimeThresholds)&&b.getTimeThresholds()[0],
a=g.isDef(a)?g.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():m.RTS_KEY_FOR_VQ,e[a]=k.rts[n])})();return{timeInViewThresholds:b,qivThreshold:d,type:m.DT_CODES.CUSTOM,rts:e,isInView:t,isInViewIgnoringRender:function(a){return t(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},yb=function(a,c,b){var d=c.isVideo()?"video":"display",e=c.isMobileApp()?"app":"web",f=c.isDeviceTypeGroupMobile()?"mobile":"desktop",
l=g(a.customViewability).isArray()&&0<a.customViewability.length,k=b.on("customMetric"),m=b.on("groupmCM"),n=function(a,b){var c,l,k,p,n;c=g(b.mediaTypes).contains(d);l=g(b.distributionChannels).contains(e);k=g.isDef(b.deviceGroups)?g(b.deviceGroups).contains(f):!0;p=H.contains(b.id,"fiv");n=H.contains(b.id,"groupmCM");p=!p;n&&(p=m);return p&&c&&l&&k};return{resolve:function(){var b=[],c;k&&l&&(c=g(a.customViewability).filter(n),g(c).each(function(a,c){b.push(c)}));return b}}},S=function(a){var c=
[];if(g(a.tiv).isArray())g(a.tiv).each(function(a,b){c.push(new la(b))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var b=new Nd;c.push(new Od(b,parseInt(a[1].replace("%"))));c.push(new la(1E3*parseInt(a[0])))}else g.isDef(a.tiv)&&c.push(new la(1E3*a.tiv));return{getTimeThresholds:function(){return c}}},Nd=function(){var a=n.getAggregator().request("omidAdSessionContext").adDuration||-1,c=function(b){0<a||(b=g.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};
n.getAggregator().on({omidAdDuration:c,adVideoStart:c,adDurationChange:c});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},la=function(a){var c=0,b;0<a&&(c=a/1E3);b=1E3*c;return{getTimeInViewInSeconds:function(){return c},getTimeInViewForRts:function(){return b}}},Od=function(a,c){var b=0,d=!1,e=function(a){b=0;0<c&&0<a&&(b=q.ceil(c/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return b},
getTimeInViewForRts:function(){return 0}}},Da=function(a,c,b,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(c.mark(),b.doEligibleJobs(c.getTotalTime())):c.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},fc=function(a,c,b,d){var e,f,l,k,m,t,q=function(a,b){return!b&&a},w=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},v=function(a){var n=0,p=1===a.tabHidden,u=a.isVideoPlaying,q=a.isSoundOn,x=a.isVideoPlayingInFullscreen;g(a.sliceStatus).each(function(a,b){l(b,
p,u,x)?e[a].mark():e[a].stop();k[a]=e[a].getTotalTime()});r("slcVt",k);d&&(g(a.sliceStatus).each(function(a,b){w(b,p,u,x)&&q?f[a].mark():f[a].stop();m[a]=f[a].getTotalTime()}),r("slcVtVol",m));t=d&&c&&c.shouldIncludeSound?m:k;a=g(t).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});g.isUndef(a)&&b.doEligibleJobs(n)},r=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},C=function(a){!e&&a.sliceStatus&&(e=[],f=[],k=[],m=[],g(a.sliceStatus).each(function(a){e.push(new X(1));
k.push(0);d&&(f.push(new X(1)),m.push(0))}))},B=function(a){g.isUndef(a.sliceStatus)||(e||C(a),v(a))};return{start:function(){l=d?w:q;a.addMeasurementChangedListener(B)}}},Ba=function(a,c,b){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){c.addMeasurementChangedListener(a,b)}}},ac=function(a,c,b,d,e,f,g,k,n,t){var l=!1,p=v.isVideo(),u=f.request("mobileApp"),r=Y().applies(b,e),C=b.browserIs(m.BROWSERS.GECKO)||b.browserIs(m.BROWSERS.IE)&&
e.on("rattie")||r,B=v.xDomainIframe&&!C,y=new La(10),A=function(){e.on("viewabilityready")&&!l&&(d.send(m.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),l=!0)};f.on("delayedViewabilityReady",function(){R();A()});f.on("delayedViewabilityReadyCallOnly",A);var R=function(b){b=b||!1;try{y.start();var d,e;c.hasMeasurementStrategy()?e=(u.isMobileAppEnvironment()||v.isOmidNative())&&c.supportsAdContainerGeometry()?c.getScreenLocationInfo({},b):c.getScreenLocationInfo(k.collect(),b):(e=k.collect(),u.isMobileAppEnvironment()?
(e.viewState=m.NA,e.method=m.NA,e.percentInView=m.NA):B&&(e.viewState=m.NA,e.percentInView=m.PIV_NA),p&&t.setVideoSpecificScreenEventFields(e));d=n.registerLocation(e);b||a.trigger("measurementChanged",e);y.stop();var l=q.round(y.getTime()/y.getCount());g.addItem({output:l},"lt",{type:m.DT_CODES.UNLOAD});return d}catch(V){f.trigger("error",m.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:R,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":p?"2-5-15":
"1-5-15"},isImmediatelyMeasurable:function(){var a=v.xDomainIframe,d=a&&b.browserIs(m.BROWSERS.WEBKIT),e=a&&b.browserIs(m.BROWSERS.MSEDGE),a=a&&r,d=!d&&!e&&!a;return u.isMobileAppEnvironment()?c.isMeasurable():d},requiresDelayedViewabilityEvent:function(){u.isMobileAppEnvironment()&&c.hasMeasurementStrategy()&&c.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},vc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context",
"browser"],creator:function(a,c,b,d){var e,f=Pd(b),l=[new Qd,new Rd(f)],u=function(){return g(l).findFirst(function(a,e){return e.applies(d,c,b)?e:void 0})},p=function(a){"sessionFinish"===a.type&&(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"osef"),n.getAggregator().trigger("adSessionComplete"))},t=function(a){A.addEvent(y,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},x=function(){var a=new Z(m.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,
a.enumerator,function(){var a={id:k.videoId,msg:"unloadComplete",messageType:"misc"};q.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Pc(a.checkScreenLoc,f.getPollingFrequency()),(b=u())?b.start(e):e.start(!0),v.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):
c?t("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):t("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){b.isVideo()&&!b.isOmid()&&x();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:m.TIERS.VIEWABILITY}},Pd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Rd=function(a){var c,b,d,e,f,g=function(l){d&&
!f&&1>l?(f=!0,q.setTimeout(function(){g(l)},1E3)):(e=1>l,!b&&e?(b=!0,c.updateFrequency(a.getOptimizedPollingFrequency(),!0)):b&&!e&&(b=!1,c.updateFrequency(a.getPollingFrequency(),!0)))},k=function(a){g(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){c=a;c.start(!0);n.getAggregator().on("IOPivChange",g);n.getAggregator().on("newScreenEvent",k)}}},Qd=function(){var a,c,b,d=!1,e=function(f){if(b&&!d&&1>f)d=
!0,q.setTimeout(function(){e(f)},1E3);else return 1>f?(a||c.stop(!0),a=!0):a&&(a=!1,c.start(!0)),a},f=function(){c.start(!0)};return{applies:function(a,c,d){b=d.usesZeroPivCustomMetric();var e=Y();return c.on("viewabilityOptimization")&&e.applies(a,c,d)&&d.isDeviceTypeGroupMobile()},start:function(a){c=a;c.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",f)}}},Zd=function(a,c,b,d,e,f){var l,u,p,t,x,w,D,z,C,B=r.getElementsWindow(c);r.getElementsDocument(c);n.getAggregator().provide("iframeCalculatorHelper",
Sd(B));var N=Td(c,d),L=m.AD_IDENTIFIER+"-"+k.asid,R=!1,G=F({}),E=v.isDeviceTypeGroupMobile(),J=v.usesGroupMCustomMetricMobilePassThru(),H,I=function(){if(!l)if(l=N.calcDims(c,d,p),k.autotagSizeSet&&1<k.adWidth&&1<k.adHeight&&(l.set("width",k.adWidth),l.set("height",k.adHeight)),b===m.DETECTION_METHODS.VIDEO&&v.embedded){var a=l,e=(new F(c)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(Ja){n.getAggregator().trigger("error",m.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else b===
m.DETECTION_METHODS.AD_PLACEHOLDER&&l.treatAsPlaceholder();return l},M=function(){var c,d=v.xDomainIframe&&R;c=E&&R&&p.isReady();c=d||c;d=N.getClippedDims&&(b===m.DETECTION_METHODS.VIDEO&&v.embedded||v.isCeltra());c?u=p.getPiv():g.isUndef(u)&&(c=!E&&(v.friendly||g.isDef(y.mozInnerScreenX))&&e.on("offscreen"),z=I(),D=new F(r.calcWinDims()),w=new F(c?r.calcMonDims():{}),C=d?N.getClippedDims():G,u=a.calcPercentInView(z,D,w,C));return u},P=function(){return a.calcInitialViewState(M())},Q=function(){return c===
y?!1:I().isHidden()};(function(){var d=q.getWindow(),e=q.getDoc(),f=c===d,g=e.body,l=n.getAggregator(),k=new Y,u=l.request("browser"),w=l.request("features"),l=l.request("context"),r=!v.xDomainIframe,e=f&&g?e.body:c;H=v.friendlyIframe?d.frameElement:e;A.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});A.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});k.applies(u,w,l)?(p=od(c,r),p.start(),R=!0,J&&b!==m.DETECTION_METHODS.AD_PLACEHOLDER&&
(d=new Ud(I().getRounded()),k=new Vd,k=new Wd(p.getObservedNode(),k),t=new Xd(d.getSlices(),k))):J&&(x=new Yd(a))})();return{mark:function(){r.setAttributeOf(H,L,"")},cleanup:function(){r.removeAttributeOf(H,L)},isNode:function(a){return c===a},isHidden:Q,isObstructed:function(){return!1},getDims:I,getPercentInView:M,getLocationState:P,getOnPageViewability:function(){return Q()?m.OUT_OF_VIEW:P()},getDetectionMethod:function(){return b},getContainerDims:function(){return N.allowsOptimization?l:F(d)},
refresh:function(){C=z=D=w=u=l=void 0;if(f){var a,b;if(!v.isDomless()&&(b=c.parentNode)){for(;c!==y&&b&&b!==K&&!a;)a=b===d,b=b.parentNode;a||(d=c.parentNode)}}},getAdNode:function(){return c},getSliceStatus:function(){var a;t&&t.isReadyToMeasure()?a=t.getSliceStatus():v.friendly&&x&&g.isDef(z)&&(a=x.getSliceStatus(z,D,w,C));return a}}},$d=function(a,c){var b=[],d,e=g([]),f=function(){return b[0]&&b[0].getDetectionMethod()===m.DETECTION_METHODS.AD_PLACEHOLDER},l=function(l,k,p,t){var u=f()||0===b.length;
l=Zd(a,l,k,p,c,t);f()&&(p=b.shift(),e=g(b),p.cleanup(),d=void 0);b.push(l);e=g(b);u&&l.mark();u&&k!==m.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",l)},k=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var g;g=e.getDims();g.hasValidDims()&&(a=e.getPercentInView(),b=a!==m.NA,g=g.area(),c+=g,f+=a/100*g)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},t=function(a){var b;
b=k();b=b.hasMeasurement?q.round(b.totalInView/b.totalArea*100):m.PIV_NA;if(isNaN(b)||p(a))b=0;return b},x=function(b){var d=c.bootstrapOn("mobOrTab"),d=k().totalArea>=m.MRC_LARGE_AD_SIZE&&c.on("largeAd")&&!d&&!v.isVideo();return a.calcInitialViewState(t(b),d)},w=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},r=function(a){return function(){return b[0]&&b[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){g(a).each(function(a,b){-1===w(b)&&l(b,m.DETECTION_METHODS.MUTATION)})});
n.getAggregator().on("adComponentRemoved",function(a){g(a).each(function(a,c){var d=w(c);-1<d&&b.splice(d,1)})});return{getDims:r("getDims"),isObstructed:r("isObstructed"),getDetectionMethod:r("getDetectionMethod"),getContainerDims:r("getContainerDims"),getViewState:x,getViewStateIgnoringRender:function(){return x(!0)},getPercentInView:t,getPercentInViewIgnoringRender:function(){return t(!0)},isHidden:r("isHidden"),isUsingPlaceholder:f,hasAd:function(){return!!b.length},refresh:function(){d=void 0;
e.each(function(a,b){b.refresh()})},addAdComponent:l,clearCollection:function(){e.each(function(a,b){b.cleanup()});b=[];e=g([]);d=void 0},getOutOfViewReasons:function(a){var c,e=[],f=b[0],g=m.OUT_OF_VIEW_REASONS;f&&(c=d||x(),p(a)?e.push(g.RENDER):c!==m.OUT_OF_VIEW&&c!==m.PARTIAL_VIEW_MINUS||e.push(g.GEOM),f.isHidden()&&e.push(g.HIDDEN),f.isObstructed()&&e.push(g.OBSTRUCTION));return e},getComponentCount:function(){return b.length},getComponents:function(){return b},getSliceStatus:r("getSliceStatus")}},
ae=function(a){var c=!1;if(!g.isUndef(y.MutationObserver)){var b=new y.MutationObserver(function(a){q.execAtEndOfThread(function(){c&&g(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){c=!0;q.setTimeout(function(){c=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);A.whenReady(function(){try{b.observe(K.body,
{attributes:!0,childList:!0,characterData:!0})}catch(e){a.add(m.ERROR_CODES.AC_WATCHER)}},q.getDoc())}},he=function(a,c){var b=[be(),ce()],d=[Va(),Wa(),de(),ma(),ee(),fe(),ge()],b=b.concat(d);return g(b).findFirst(function(b,d){return d.isApplicable(a,c)})},ma=function(){var a,c,b,d=function(a){a?a&&b&&(q.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),b=!1):b=!0};return{detectionMethod:function(){return c&&c.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){c=c||ia();var b=r.crossQuerySelector(ia().getCssSelector(),!0);a=b?b.parentNode:a;d(b);return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ie=function(a,c){var b,d=r.findChildWithLargestContent(a||k.contextNode.parentNode,c);1<r.getNodeArea(d)&&!d[m.IAS_DETECTOR]&&(b=d);return b},Va=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:m.DETECTION_METHODS.OMID,isApplicable:function(){return v.isOmidForWeb()&&
!v.isOmidNative()},find:function(){a.element||a.queuedOutputItems.push({code:"oea",value:!0});return a.element},getAdContainer:function(){return a.element&&a.element.parentNode},allowForAdContainerChange:!0}},fe=function(){return{detectionMethod:m.DETECTION_METHODS.IFRAME,find:function(){return y},isApplicable:function(){return v.embedded},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},je=function(){var a,c=q.getDoc().scripts,b=function(){a||(a=g(c).findFirst(function(a,
b){return H.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var c,d=a||b(),g=/;(\d+);/;d&&d.src&&(c=d.src.match(g)[1]);return c};return{detectionMethod:m.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,c){return c.on("bustediframe")&&a.embedded&&void 0!==b()},getCssSelector:function(){var a,b=d();try{a=g(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return r.crossQuerySelector(b,!0)})}catch(l){}return a}}},ke=function(){return{isApplicable:function(a,c){var b;
try{b=r.getFrameId()}catch(d){}return c.on("yieldmo")&&b&&H.contains(b,"_tpi")&&r.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+r.getFrameId().replace("_tpi","")+"']"},detectionMethod:m.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Xa=function(){var a,c,b=q.getDoc(),d=function(){var c;a||(a=(c=(c=r.querySelector(b,"div[id*='ebDiv']"))&&c.id)&&c.split("ebDiv")[1]);return a},e=function(){var a=r.crossQuerySelector("iframe[id*='ebAd'][id$='"+d()+"']",!0);
return a&&a.id},f=function(){var a;c||(a=e()?e():(a=r.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id,c=a&&"#"+a);return c};return{detectionMethod:m.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=q.getWindow(),e=a.friendlyIframe&&q.getWindow().frameElement,e=e&&F(e).isOneByOne(),l=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=q.getDoc().scripts;return g(b).findFirst(function(b,
c){return g(a).findFirst(function(a,b){return H.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!g(c.EBG.ads).isEmpty();return b.on("sizmek")&&l&&c&&e&&d()&&f()},getCssSelector:f}},ia=function(){var a,c=n.getAggregator().request("features");a||(a=[Xa(),ke(),je()]);return g(a).findFirst(function(a,d){return d.isApplicable(v,c)})},ee=function(){var a,c=function(){q.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:m.DETECTION_METHODS.VENDOR_CELTRA,
isApplicable:function(a,c){return c.on("celtra")&&a.isCeltra()},find:function(){var b,d=Oa().find();d&&d.celtra&&d.celtra.loaded&&(b=d.celtra.viewabilityObservee,a=r.getElementsWindow(b).frameElement||b.parentNode,c());return b},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Oa=function(){var a,c=function(){var b;(b=k.contextNode.parentNode)&&(H.contains(b.className,"celtra-ad-v3")||H.contains(b.className,"celtra-ad-v4"))?a=b:(b=b&&(r.querySelector(b,".celtra-ad-v3")||r.querySelector(b,
".celtra-ad-v4")))&&(a=b);return a};return{find:c,isApplicable:function(){return void 0!==c()}}},Wa=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:m.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=r.findChildWithLargestContent(q.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[m.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},Ya=new (function(){function a(){this.cachedIsFoundOnPage=
!1}a.prototype.getDocument=function(){var a;try{a=q.getDoc()}catch(b){}return a};Object.defineProperty(a.prototype,"isIE11",{get:function(){var a=this.getDocument();return a&&a.documentMode},enumerable:!1,configurable:!0});a.prototype.hasBrowserSupport=function(){var a=!1,b=this.getDocument(),d=!v.isDomless(),b=!(this.isIE11||!b||"function"!==typeof b.body.attachShadow);d&&b&&(a=!0);return a};a.prototype.isFoundOnPage=function(a){var b=q.getDoc(),b=a||b.body;a=!1;if(this.cachedIsFoundOnPage)a=!0;
else if(this.hasBrowserSupport())if(b.shadowRoot)this.cachedIsFoundOnPage=a=!0;else for(var b=b.querySelectorAll("*"),c=0;c<b.length;c++){var e=b[c];if(e&&e.shadowRoot){this.cachedIsFoundOnPage=a=!0;break}}else a=!1;return a};a.prototype.querySelector=function(a){var b=a.customRootElement,c=a.selector;a=q.getDoc();var b=b||a.body,e,f=function(a){var b=c&&c.replace("#","");if(!e)for(var d=0;d<a.length;d++){var g=a[d];g&&g.id===b&&(e=g);g&&g.shadowRoot&&f(g.shadowRoot.querySelectorAll("*"))}};b.shadowRoot&&
f(b.shadowRoot.querySelectorAll("*"));f(b.querySelectorAll("*"));return e};return a}()),ce=function(){var a,c=function(a){var b=g.isFunction(a.contextNode.getAttribute)&&a.contextNode.getAttribute("data-ias-container");return b&&"#"+b||a._cl_adpath},b=function(){var a=n.getAggregator().request("features"),b=k&&4===k.integration;return a.on("forceKeepGoogleAdNode")?!b:!0};return{getAdSelectorId:c,detectionMethod:m.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return v.isSpecifiedAd()},find:function(){var d=
c(k),e=r.crossQuerySelector(d),f=v.isPageOnShadowDomWhitelist(),g;g=e;g=b()&&1>r.getNodeArea(g);e?(a=r.getParent(e),g&&(a=e,e=r.findElementsWithSize(e))):f&&Ya.isFoundOnPage()&&(e=Ya.querySelector({selector:d}),a=r.getParent(e));return e},getAdContainer:function(){return a},allowForAdContainerChange:!0,shouldValidateAdNode:b}},be=function(){var a;return{detectionMethod:m.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return v.isCompoundAd()},find:function(){var c=[],b;/\[(.*)\]/.exec(k._cl_adpath)[1].split(",").forEach(function(d){if(b=
r.crossQuerySelector(d))a=r.getParent(b),1>r.getNodeArea(b)&&(a=b,b=r.findElementsWithSize(b));c.push(b)});return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ge=function(){return{usePlaceholder:!0,detectionMethod:m.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:ie,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},de=function(){return{detectionMethod:m.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,
isApplicable:v.isVideo,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},Td=function(a,c){var b,d;b=[le(),me(),ne()];d=g(b).findFirst(function(b,d){return d.isApplicable(a,c)});b=oe();b.isApplicable(c)&&(b.setBaseStrategy(d),d=b);return d},ne=function(){return{calcDims:function(a,c){var b,d,e=new F(a);r.isClippable(a,c)&&(b=r.getClippedDimensions(a,c),d=e.getRounded(),e.set("height",b.height<d.height?b.height:d.height||1),e.set("width",b.width<d.width?b.width:
d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var c=(v.isSpecifiedAd()||v.isBustedIframe())&&r.nodeIsInWindow(a,q.getTop());a=!r.elementIsEmbedded(a);return c||a}}},me=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(v.isSpecifiedAd()||v.isBustedIframe())&&r.elementIsEmbedded(a)}}},le=function(){var a=n.getAggregator().request("iframeCalculatorHelper");
return{calcDims:function(c){var b=a.calcDims();c=(new F(c)).getRounded();b.set("height",c.height);b.set("width",c.width);return b},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,b){var c=(v.isSpecifiedAd()||v.isBustedIframe())&&v.embedded&&!r.nodeIsInWindow(b,q.getTop()),e=v.isCeltra()&&r.elementIsEmbedded(a);return c||e}}},oe=function(){var a;return{calcDims:function(c,b,d){d=g.isDef(d)?d.getAdNodeDimensions():void 0;a&&g.isUndef(d)&&(d=a.calcDims(c,b));return d},isApplicable:function(a){a=
Y();var b=n.getAggregator(),c=b.request("browser"),e=b.request("features"),b=b.request("context");return b.isDeviceTypeGroupMobile()&&a.applies(c,e,b)},allowsOptimization:!1,setBaseStrategy:function(c){a=c}}},Sd=function(a){var c,b,d,e=n.getAggregator().request("features"),f=n.getAggregator().request("browser");a=a||q.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:q.getMaxNumber(),height:q.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,k=e.length;g<k;g++)if(e[g]==b){d=e[g];
f=!0;break}if(f){d=r.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=q.min(c.width,d.width),c.height=q.min(c.height,d.height)}catch(B){n.getAggregator().trigger("error",m.ERROR_CODES.GET_AD_DIMENSIONS)}b!==q.getTop()&&l(b.parent,c)}return c},k=function(){var k,t={};try{var u,w,D,z,C,B,y=q.getMaxNumber(),A=q.getMaxNumber();v.friendly?(u=l(),D=u.left,z=u.top,y=u.width,A=u.height,w=r.browserWindowPosition(),C=w.scrX+D,B=w.scrY+z):e.on("rattie")&&f.browserIs(m.BROWSERS.IE)?(B=C=0,d=d||
n.getAggregator().request("ieXDomainViewability"),b=d.determineFramePosition(),C=b.scrX,B=b.scrY):g.isDef(a.mozInnerScreenX)&&(C=q.round(a.mozInnerScreenX),B=q.round(a.mozInnerScreenY));var t={scrX:C,scrY:B,iFrameClippingWidth:y,iFrameClippingHeight:A},E,G,F=c||r.getIeDimObj(a);c=F;g.isDef(a.innerWidth)?(E=a.innerWidth,G=a.innerHeight):F&&g.isDef(F.clientWidth)?(E=F.clientWidth,G=F.clientHeight,0===E&&0<F.offsetWidth&&(E=F.offsetWidth),0===G&&0<F.offsetHeight&&(G=F.offsetHeight)):a.frameElement&&
g.isDef(a.frameElement.clientWidth)&&(E=a.frameElement.clientWidth,G=a.frameElement.clientHeight);k=E;t.height=G;t.width=k}catch(J){n.getAggregator().trigger("error",m.ERROR_CODES.GET_AD_DIMENSIONS)}return t};return{calcDims:function(){return new F(k())},getClippedDims:function(){var a=k();return new F({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Vb=function(){return{createInstance:function(a,c,b){return v.isDomless()?new pe:new qe(a,c,b)}}},qe=function(a,
c,b){var d,e,f=n.getAggregator().request("browser"),l=k&&k.contextNode&&k.contextNode.parentNode?k.contextNode.parentNode:null,u=$d(c,b),p=function(){var a,c,e;d=d||he(v,b);a=d.find();v.friendlyIframe&&v.isBlockingSizmekTag()&&D(a);!a&&d.usePlaceholder?(t(),v.isDeviceTypeGroupMobile()&&f.hasMutationObserver()&&q.getMutationObserver(x).observe(l,{childList:!0})):a&&(a=g(a).isArray()?a:[a],c=d.getAdContainer(),e=d.allowForAdContainerChange,g(a).each(function(a,b){u.addAdComponent(b,g.resolve(d.detectionMethod),
c,e)}))},t=function(){var a;u.hasAd()||(a=r.getPlaceholderSpan(),l.insertBefore(a,k.contextNode.nextSibling),u.addAdComponent(a,m.DETECTION_METHODS.AD_PLACEHOLDER,r.getParent(a)))},x=function(a,b){var c=!1;g(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())},w=function(a,c){var e=!1;g(a).each(function(a,b){switch(b.type){case "childList":g(b.addedNodes).each(function(a,b){b.nodeName&&"script"===b.nodeName.toLowerCase()&&
(e=!0)});break;case "attributes":1>=b.target.height*b.target.width&&(e=!0)}});var f;e&&(f=Xa(),f.isApplicable(v,b)&&(c.disconnect(),d=ma(),u.clearCollection(),n.getAggregator().trigger("nodesAdded")),setTimeout(function(){f.isApplicable(v,b)&&(c.disconnect(),d=ma(),u.clearCollection(),n.getAggregator().trigger("nodesAdded"))},0))},D=function(a){var b,c;if(!e&&f.hasMutationObserver()&&r.isWindow(a))try{e=q.getMutationObserver(w),b=a&&a.frameElement,c=a&&a.document&&a.document.body,e.observe(b,{attributes:!0,
attributeFilter:["height","width"]}),e.observe(c,{childList:!0,subtree:!0})}catch(N){}};ae(a);return{find:function(){u.isUsingPlaceholder()||!u.hasAd()?p():u.refresh();return u},getDetectionMethod:function(){}}},pe=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Db=function(a){var c=new re,b=new se,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"",e=function(){var a="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
b,c=!1;for(b=0;b<a.length;b++)if(-1<d.indexOf(a[b].toLowerCase())){c=!0;n.getAggregator().trigger("addOutputItem",{output:a[b].substring(0,2)},"xlu",{type:"impression"});break}return c};(function(){var d="",g=n.getAggregator().request("omidAdSessionContext"),k=v.isDomless()||g&&"app"===g.environment,g=g&&"web"===g.environment;try{if(k||!g&&a.bootstrapOn("mobOrTab")&&a.bootstrapOn("mobAppWebview")&&!e()){if(d=c.detect(),c.hasDetectedMobileApp()){if("s_serv"===d||"u_cars"===d)na[na.length-1].detectionRules.userAgent[0]=
"/";b.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"})}}else g&&n.getAggregator().trigger("addOutputItem",{output:"a_oweb"},"drul",{type:"impression"})}catch(p){n.getAggregator().trigger("error",m.ERROR_CODES.MOBILE_APP)}})();return{excludedByUserAgent:e,isMobileAppEnvironment:function(){return c.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return b.isSafeToInjectMraid()}}},
te={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(v.isDomless())return!1;var c=q.getWindow().location.href,b=[c];try{b.push(top.location.href)}catch(d){}try{b.push(parent.location.href)}catch(d){}if(v.embedded){try{b.push(parent.document.referrer)}catch(d){}try{b.push(K.referrer)}catch(d){}}try{"jsi"!==k.mode&&b.push(y.location.href)}catch(d){}try{b.push(k.jsref)}catch(d){}b.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!g(a).findFirst(function(a,e){var d=!1,l,
k,m="mobfox"===e?b:[c];for(k=0;k<m.length;k++){l=m[k];var n="string"===typeof e?[e]:e;if(g(n).isArray()&&n)for(var q=0;q<n.length&&(d=-1<l.indexOf(n[q]),!1!==d);q++);if(d)break}return d})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,b){var c;c=!1;var e=q.getWindow();g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(c=(c=e.navigator.userAgent)&&-1!==c.indexOf(b));return c})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!g(a).findFirst(function(a,
b){return g.isDef(H.stringToProp(b))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,b){return r.containsScriptTagWithSrc(function(a){return g.isDef(a)&&-1!==a.indexOf(b)})})}}},Za=function(){var a=function(a,b){var c,e=te[a];e.detect(b)&&(c=e.STRINGIFIED_METHOD);return c};return{process:function(c){return g(c).map(a).join("")}}},ue=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],
scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},
{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",
detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",".android"],["carsales",".ios"]]}}],re=function(){var a,c=function(a,c){var b,d=Za().process(c.detectionRules);d&&(b=d+"_"+c.STRINGIFIED_APPDET);return b};return{detect:function(){a=g(ue).map(c);a=0<a.length?a[0]:"";""===a&&k.hasOwnProperty("serverSideAppDetection")&&
0!==k.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},se=function(){var a=[],c=[],b=function(b,c){var d,e=Za().process(c.detectionRules);e&&(a.push(c.STRINGIFIED_SDK+"*"+e),d=c);return d};return{detect:function(){c=g(na).map(b);0<c.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<c.length},isSafeToInjectMraid:function(){return 1===c.length&&g.isDef(c[0].safeToInjectMraid)&&
c[0].safeToInjectMraid}}},na=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},
{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},
{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",
detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Ud=function(a){var c=[];(function(){if(10>a.height)c.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var b=Math.floor(a.height),d=b%10,b=(b-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new W(0,a.width,e,e+(f<d?b+1:b)),percentageInViewContribution:10,
isInView:!1},c.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return c}}},ka=function(){var a=m.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,c=m.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,b=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,c=[100]);for(e=0;e<a;e++)b.push(!1);return d={numberOfSlices:a,defaultSliceArray:b,percentInViewSliceArray:c}}}},Xd=function(a,c){var b={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();
g(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value();c.push(new W(Math.max(d.leftX,f.leftX),Math.min(d.rightX,f.rightX),Math.max(d.topY,f.topY),Math.min(d.bottomY,f.bottomY)))}});return c},e=function(a,b){var c=0,e=d(a,b),f;g(e).each(function(a,b){f=b.value();c+=f.area});return c},f=function(){var c=0;b.mbs=[];g(a).each(function(a,d){b.mbs.push(d.isInView);d.isInView&&(c+=d.percentageInViewContribution)});return c};c.addListener(function(b){g(a).each(function(a,c){c.isInView=e(c,
b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=f();b.mbrd=1;a!==b.mbp&&b.mbivs.push([v.getTagTime(),a]);return b.mbp=a},removePixels:function(){void 0!==c&&c.stop()},getPixelStateForDebug:function(){b.mbm=1;b.mbpr=[];b.mbir=[];g(a).each(function(a,c){b.mbpr.push(m.NA);b.mbir.push(!1)});return b},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];g(a).each(function(a,c){b.push(c.isInView)});return b}}},Yd=function(a){var c=ka();return{getSliceStatus:function(b,
d,e,f){var g,k=[];g=b.getRounded();b=g.height;var m=g.scrY,n=new F({scrX:g.scrX,width:g.width}),v=c.getConfig(g).numberOfSlices;n.set("height",q.floor(b/v));for(var w=0;w<v;w++)n.set("scrY",q.ceil(m+b/v*w)),g=100===a.calcPercentInView(n,d,e,f),k.push(g);return k}}},W=function(a,c,b,d){var e=Math.ceil(a),f=Math.ceil(c),g=Math.ceil(b),k=Math.ceil(d),m=f-e,n=k-g,q=m*n,v=function(){return{leftX:e,rightX:f,topY:g,bottomY:k,width:m,height:n,area:q}};return{value:v,doesIntersect:function(a){var b=v();a=
a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},Vd=function(){return{createInstance:function(a,c){return new IntersectionObserver(a,c)}}},Wd=function(a,c){var b,d=[],e=[],f=function(){g(d).each(function(a,b){b(e)})},k=function(){var a=[];g(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){b=c.createInstance(function(c){var d=
c.pop(),g=d.boundingClientRect;c=g.width;var l=d.intersectionRatio,d=d.intersectionRect,m=d.left-g.left,g=d.top-g.top,g=new W(m,m+d.width,g,g+d.height);e.push(g);g=k();e=[];for(d=0;g.length>d&&g.length!==d+1;d++)e.push(new W(0,c,g[d],g[d+1]));f();1===l&&(b.unobserve(a),b.disconnect())},{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})})();b.observe(a);return{addListener:function(a){d.push(a)}}},ja=function(){var a=function(a){var b=!1;ve.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},c=function(c,
e){return c.omidNativeInfo&&c.omidNativeInfo.partnerName&&a(c.omidNativeInfo.partnerName)?e&&b(e.onScreenContainerGeometry):e&&b(e.onScreenGeometry)},b=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:c,checkGeometryObject:b,checkForViewAttachmentBasedOnAdSessionType:function(a,b){if(b&&b.reasons&&0>b.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||
-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&c(a,b)))return!0}}},ve=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],we=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",function(a){var c=n.getAggregator().request("adNode"),b=!1,d="blockAd"+k.videoId;"failed"===a.action&&(b=!0);if(c&&g.isDef(c.blockAd))c.blockAd(b);else if(c&&g.isDef(c[d]))c[d](b)})}}},xe=function(a,c){var b=n.getAggregator().request("videoTranslator").translate(a.messageType),
d=function(a){a=a.eventData||{};a=g({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a),e=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["".concat("x_").concat(a)]=b;return c};a&&(b=g(a).mapToObj(c));return b}(a),f={t:a.time-k.birthdate,tp:b,sl:c};g(f).mixin(d);g(f).mixin(e);var l=g({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(b)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(b)},
indicatesFullscreen:function(){var a=q.getWindow();return("resizeAd"===b||"initAd"===b)&&("fullscreen"===d.viewMode||d.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===b&&"normal"===d.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(b)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(b)},getVolume:function(a){return a.getVolumeFromContext(d)},
updateScreenLoc:function(a){f.sl=a;l.sl=a},trigger:function(){"adImpression"===b?n.getAggregator().persistentTrigger(b,d,e):n.getAggregator().trigger(b,d,e)},toString:function(){return"{"+g(f).toParams()+"}"}}).mixin(f);return l},ye=function(){var a=[];return{registerEvent:function(c,b){var d=xe(c,b);a.push(d);return d},toString:function(){return"{"+g({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},ze=function(){var a,c,b,d=function(d){b=
g.isDef(d)?0===d:b;c&&b&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",m.DT_CODES.QUARTILE_FULLY_INVIEW)},f=function(){c=!0;d()},k=function(a){a=(new $a).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(b){n.getAggregator().on({adVideoStart:f,adImpression:f,volumeChanged:k,adVideoMidpoint:e});a=b.createViewabilityTracker("mpt",function(a){var b=n.getAggregator().request("isFullyInViewProvider");
return!c||b&&b.isFullyInView(a)})}}},Ae=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(c){var b=c.charAt(0).toLowerCase()+c.slice(1);c in a&&(b=a[c]);return b}}},$a=function(){return{getVolumeFromContext:function(a){var c,b=-1;g.isDef(a)&&(g.isDef(a.volume)?b=a.volume:g.isDef(a.adVolume)&&(b=a.adVolume));-1!==b&&(c=b);return c}}},Bb=function(a,c,b){var d="IASid"+a,e="getIasVidBridgeVersion"+a,f,l,u,p=[],t=m.OUT_OF_VIEW,r=!1,w=!1,
y=!1,z=!0,C=new ye,B=ze(),F=new we,E=new $a,I=new Pa,G=function(c){var d;r=!0;var e={};try{e=JSON.parse(unescape(c&&c.data?c.data:c))}catch(Ke){e={}}e.id==a&&(d=C.registerEvent(e,b.getCurrentLoc()),d.indicatesPlaying()?(w=!0,t=y?m.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,t=m.OUT_OF_VIEW):d.indicatesFullscreen()?(y=!0,t=w?m.IN_VIEW:m.OUT_OF_VIEW):d.indicatesNormalSize()&&(y=!1,t=w?!1:m.OUT_OF_VIEW),c=parseFloat(d.getVolume(E)),0<c?z=!0:0===c&&(z=!1));p.push(d);u&&M();return d},H=function(b){var c,
f,l=Fa().wrapToGlobal(G),m=function(a){g.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{f=b[e]||b.getIasVidBridgeVersion,c=g.isFunction(f)&&"2"===f.call(b)?unescape(b[d].call(b,a,l)):unescape(b[d].call(b,a)),r=!0,m(c||"n")}catch(Gc){__IntegralASDiagnosticCall("handshakefailure",Gc,k)}},J=function(){var b=function(a){return g(g(a).toArray()).findFirst(function(a,b){return g.isFunction(b[d])})};f||
(g(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,c){var d=q.getDoc().querySelectorAll(c);return f=b(d)}),!f&&c.on("novidnodeerr")&&.1>Math.random()&&__IntegralASDiagnosticCall("novidnode",{message:"node not found*10"},k));return f},K=function(){var a=J();a&&!r&&H(a);return a},O=function(a){a=E.getVolumeFromContext(a);z=g.isDef(a)?0<a:!1},M=function(){I.init();g(p).each(function(a,c){c&&(g.isUndef(c.sl)&&c.updateScreenLoc(b.getCurrentLoc()),c.trigger(),
c.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),c.indicatesQuartile()&&("adVideoComplete"!==c.tp&&n.getAggregator().trigger("sendDt",m.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",c)))});p=[];u=!0};(function(){A.addEvent(q.getWindow(),"message",function(a){G(a)});n.getAggregator().on({volumeChanged:O});n.getAggregator().provide({videoEventsString:C,videoVersion:function(){var a,b=K();try{a=b.getVersion()}catch(da){a=-1,n.getAggregator().trigger("error",
m.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return l=l||new Ae},adNode:K});K();F.listenForResult();B.isApplicable(v)&&B.start(b)})();return{findAdNode:K,getViewStateOverride:function(){return t},isHandshakeComplete:function(){return r},triggerInitializationEvents:M,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===m.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(t){if(t===m.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=
m.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:t;a.isVideoPlaying=t===m.IN_VIEW}y&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Be=function(){return new aa(m.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,m.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},ib=function(){var a,c,b={},d=0,e=function(b){if(b||a)d+=5,c.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",m.DT_CODES.PERFORMANCE)}),a=!1},f=function(){c=new Ma;d=0;e(!0);c.start()},k=function(d,
e,k,l){d=b[d];l?(g.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;c&&c.isActive()||f();a=!0},q=function(b,d,e){n.getAggregator().trigger("addOutputItem",{output:d},b,e);c&&c.isActive()||f();a=!0},p=function(c){g(b).each(function(d,e){var f=b[d],k={type:c,oneTime:!0,minDt:!0,asION:!0};g(f).isEmpty()||(n.getAggregator().trigger("addOutputItem",{output:f},d,k),b[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){p(a);c&&c.kill()});n.getAggregator().on("addThrottledProp",
k);n.getAggregator().on("addThrottledOutputItem",q)},addFieldTypes:function(a){g(a).each(function(a,c){b[c]={}})}}},ob=function(){var a={},c=function(b){a[b]||(a[b]=new La(1,k.birthdate));return a[b]},b=function(a){c(a).start()},d=function(a){var b=c(a);b.stop();n.getAggregator().trigger("addThrottledProp","im",a,b.getTime())};return{start:function(){n.getAggregator().on({markTime:b,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Ce=function(){return new aa(m.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,
m.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Tb=function(a){var c={},b=a instanceof Array&&0<a.length;b&&(g(a).each(function(a,b){c[b.getType()]=b}),n.getAggregator().on("perfCheckpoint",function(a){var b=c[a.type];if(b)try{b.addPoint(a),b.isFinished()&&n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.IM,"pci",b.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return b});return{isActive:b}},aa=function(a,c){var b=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-
b.timestamp})},f=function(){var a,c={};e();g(d).each(function(d,e){a&&(c[e.code]=e.timestamp-a);d===b&&(a=e.timestamp)});return c};return{addPoint:function(a){d.push(a)},toString:function(){return g(f()).toION()},getType:function(){return a},setBaseOrdinal:function(a){b=a},isFinished:function(){return d.length===c}}},Ub=function(){function a(){}a.build=function(){var a=[];a.push(new aa(m.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,m.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var b;b=n.getAggregator().request("vc");
var d={jv3:ab,av3:ab,jvw:Ce,avw:Be};(b=b?d[b]:void 0)&&a.push(b());return a};return a}(),ab=function(){return new aa(m.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,m.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){A.addEvent(y,"load",function(){n.getAggregator().trigger("measureTime",T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=
new Ma;a.onTick({4:function(){n.getAggregator().trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});a.start()}},I={isFrameworkAvailable:function(a,c){var b,d,e=q.getTop(),f=q.getWindow();try{b=e[a]}catch(l){for(;!d;){try{f.frames[c]&&(d=f.frames[c].parent)}catch(u){}if(f===e)break;f=f.parent}}return b||d},getMessageHandler:function(a,c){var b=I.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===b&&e.data[a].returnValue&&
(c(e.data[a].returnValue),A.removeEvent(q.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",m.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+k.asid},send:function(a,c){n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.ENVIRONMENT,a,c)}},ic={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&I.send("ccd",g(a).toION())}(function(){var c=I.isFrameworkAvailable("__uspapi","__uspapiLocator");I.send("cca",!!c);if(c){var b,d;g.isFunction(c)?
c("getUSPData",1,a):(b={__uspapiCall:{command:"getUSPData",version:1,callId:I.getCallId()}},d=I.getMessageHandler("__uspapiReturn",a),A.addEvent(q.getWindow(),"message",d),c.postMessage(b,"*"))}})()},settings:{tier:m.TIERS.ENVIRONMENT,applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},hc={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendorConsents)&&g.isDef(a.vendorConsents[278])?a.vendorConsents[278]:void 0,b={appl:g.stringifyTriState(a.gdprApplies),
cnst:g.stringifyTriState(b),glbl:g.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)},c=a&&a.tcString;n.getAggregator().provide("tcString",function(){return c});I.send("gcd",g(b).toION())}(function(){var c=I.isFrameworkAvailable("__cmp","__cmpLocator");I.send("gca",!!c);if(c){var b,d;g.isFunction(c)?c("getVendorConsents",[278],a):(b={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:I.getCallId()}},d=I.getMessageHandler("__cmpReturn",a),A.addEvent(q.getWindow(),"message",
d),c.postMessage(b,"*"))}})()},settings:{tier:m.TIERS.ENVIRONMENT,applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},jc={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendor)&&g.isDef(a.vendor.consents)&&g.isDef(a.vendor.consents[278])?a.vendor.consents[278]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(b)};I.send("gcd2",g(a).toION())}(function(){var c=I.isFrameworkAvailable("__tcfapi","__tcfapiLocator");
I.send("gca2",!!c);if(c){var b,d;g.isFunction(c)?c("getTCData",2,a):(b={__tcfapiCall:{command:"getTCData",parameter:[278],callId:I.getCallId(),version:2}},d=I.getMessageHandler("__tcfapiReturn",a),A.addEvent(q.getWindow(),"message",d),c.postMessage(b,"*"))}})()},settings:{tier:m.TIERS.ENVIRONMENT,applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},rc={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,c="pmdetector"+k.asid,b=function(b){(b&&b.data)===c&&(a=!0)};
(function(){var d=q.getWindow();A.addEvent(d,"message",b);d.postMessage(c,"*");q.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.IM,"pom",g.stringifyTriState(a));A.removeEvent(d,"message",b)})})()},settings:{tier:m.TIERS.ENVIRONMENT,applies:function(a,c,b){return a.on("pmdetect")&&c.hasPostMessage()}}},sc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.IM,"sf",g.stringifyTriState(v.isSafeFrame()))},
settings:{tier:m.TIERS.ENVIRONMENT,applies:function(a,c,b){return a.on("sfdetect")}}},hb=function(a,c,b,d,e,f,l){var q=function(a,b){return isNaN(a)||0>a||""===a?b:a},p=function(a){return"&"===a.slice(-1)?"":"&"};return{send:function(t){try{var u,r=d.baseUrl,y,z,A=f.getDocumentMode();"number"===typeof A?(z=2E3,8===A?z=4E3:8<A&&(z=8E3)):z=q(k.sp_imp_maxLength,2E3);y=z;if(v.integratedBlockingApplies(r)){z=r;var B=n.getAggregator().request("mobileApp"),E=B&&B.isMobileAppEnvironment&&B.isMobileAppEnvironment(),
F=k.contextNode.getAttribute("data-ias-container"),K=k.contextNode.getAttribute("data-ias-callback"),B=z+"adContainerId="+F+"&cbFunctionName="+K,B=E?B.replace("monitoring","blocking"):B.replace("skeleton.js",k.integration+".js"),G=k.protocol+":"+k.staticServer+k.integration+"a.js",I=k.protocol+":"+k.staticServer+k.integration+".js",r=B+"&true_pb="+encodeURIComponent(k.passback)+(E?"&redirectUrl="+encodeURIComponent(I):"")+(E?"&passback=":"&adsafe_pb=")+encodeURIComponent(G)+"&"}var E=r=r.replace(m.UNIQUE_ID_TOKEN,
k.asid),J=r.length,H,O,M=q(k.sp_imp_jsInfo_minLength,0),G="";try{H=y-J-M,0<H&&(O=De(t,H,14,c.on("partialUrls")),G+=O.join("&"))}catch(Q){a.add(m.ERROR_CODES.IMPRESSION_URLS)}r=E+G;t=r+=p(r);J="";try{J+=Ee(y-r.length,"adsafe_jsinfo=",a,c,b,e,f,l,y)}catch(Q){a.add(m.ERROR_CODES.JSINFO),J+="adsafe_jsinfo=e:"+a.toString()}r=t+J;d.macroUrl&&(r+=p(r),r+=d.macroUrl);k.staticFwjsMacros&&(r+=p(r),r+=k.staticFwjsMacros);if(v.isAMZN()&&-1===r.indexOf("gdpr_consent")){var P=n.getAggregator().request("tcString");
g.isDef(P)&&(r+=p(r),r+="gdpr_consent="+P)}u=r;k.impUrl=u;d.sendImpression(u);n.getAggregator().trigger("impressionsent")}catch(Q){__IntegralASDiagnosticCall("impsend",Q,k)}}}},Qa=function(){try{var a=k.perf,c,b,d,e,f,l;a.markEnd("ec");c=a.getEnd("ec");b=y.performance&&"function"===typeof y.performance.getEntriesByName&&y.performance.getEntriesByName(k.impUrl)[0];var q=a.getStart("bd"),p=a.getStart(va);d=k.jsDoSplit?Math.round(c-q):Math.round(c-p);e=Math.round(b&&b.duration);f=Math.round(c-(b&&b.responseEnd));
g.isNumeric(d)&&g.isNumeric(e)&&g.isNumeric(f)&&(l={ttecl:d,ecd:e,tsecr:f},n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.IM,"imprf",g(l).toION()))}catch(t){n.getAggregator().trigger("error",m.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ee=function(a,c,b,d,e,f,l,u,p){return function(b){var d=g.encodeInvalidUrlChars(b.primary.join(","),k.encodeInvalidUrlChars),f=c,l=0,m=function(a){if(a)return","+a};f.length+d.length+5<=a?(f+=m(d),e.impressionIsIdentifiable(!0),g(b.secondary).each(function(b,c){var d=
g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars);f.length+d.length+5<=a?f+=m(d):l+=1})):l+=b.primary.length;return f+=",ov:"+l}(function(){var a,c;a=c={viewState:m.NA};v.isDomless()?a=u.checkScreenLoc(!0)||c:d.on("impFailSafe")?q.getDoc().body&&(a=(a=u.checkScreenLoc(!0))?a:c):g.isDef(q.getDoc().body)&&(a=u.checkScreenLoc(!0));u.isImmediatelyMeasurable()||u.requiresDelayedViewabilityEvent();c=a;a=c.viewState;var r=n.getAggregator().request("mPage");a=["id:"+k.asid,"c:"+e.getCacheBustId(),"sl:"+
a,"em:"+v.embedded,"fr:"+v.friendly,"thd:"+g.stringifyTriState(r.supportsVisAPI())];c=Fe(c,b,d,e,f,l,u,p);n.getAggregator().trigger("eligiblerender");return{primary:a,secondary:c}}())},Fe=function(a,c,b,d,e,f,l,n){var p=[];p.push("mn:"+k.mn);p.push("rg:"+k.region);k.iasProxyPartnerDomain&&p.push("ipp:"+encodeURIComponent(k.iasProxyPartnerDomain));p.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==m.NA&&(b+=a.details);return b}());p.push("mu:"+n);p.push(g(f.params()).toParams());b.on("mrcAudit")&&
!v.isDomless()&&p.push("dvs:"+q.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||g.isUndef(b.props.type),d=!b.props||b.props.type===m.IMPRESSION_EVENT;(c||d)&&p.push(a+":"+b.output())});c.toString()&&p.push("e:"+c.toString());p.push(b.output());p.push("tt:"+k.mode);p.push("et:"+(q.now()-k.birthdate));k.perf.mark("si");b.on("swapids")?p.push("oid:"+k.oid):p.push("uid:"+d.unq);p.push("v:19.8.327");p.push("sp:"+(k.isSplitMode?1:0));p.push("st:"+(k.staticMode?1:0));p.push("fwm:"+("true"===
k.fwMonitoring?1:0));b.on("resolution")&&(p.push("wr:"+g(r.windowSize()).toArray().join(".")),p.push("sr:"+g(r.screenSize()).toArray().join(".")));c=function(){var a;a=String(k.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==c&&p.push("x_xpc:"+c);return p},De=function(a,c,b,d){var e,f=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=g(a).map(function(a,
b){if(k(b))return b}),a=g(a).map(function(a,b){if(!k(b))return b}),g(e.concat(a)).each(function(a,e){var g;g=e.val;var k=e.key,l;l=24+f.join("&").length+k.length+b;l=c-l;d&&l<g.length&&0<l&&(g=g.substr(0,l));if(g.length||""===e.val||""===e.type)g="adsafe_url="+g+"&adsafe_type="+k,k=f.join("&").length,g.length+k<=c&&f.push(g)}));return f},fb=function(){return{isApplicable:function(a){a=q.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=q.getWindow();a=Ge(a.navigator.plugins);
var c=a.hash(),b=c.join(".");n.getAggregator().trigger("addOutputItem",{output:b},"pl",{type:m.IMPRESSION_EVENT});c.length&&(a=a.decode(c),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:m.DT_CODES.ADTALK}))}}},Je=function(a,c){return{start:function(){try{var b=He(),d=b.getMethodName(a),e=new U(c.getEnabledScriptUrl(a)),f=Ie,g=q.getDoc();(new f(g.body||g.head||g.documentElement,e)).getWindow()[d]=b.getMethod(c)}catch(u){n.getAggregator().trigger("error",m.ERROR_CODES.FEATURE_SCRIPT)}}}},
He=function(){var a=function(a,b,d){a===k.asid&&(d.unshift(b),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(c){return function(b){var d={asid:k.asid,constant:m,features:c,context:v,dtBaseURL:k.dtBaseURL,spg:bb};"function"===typeof b&&b(a,d)}},getMethodName:function(a){return"register_"+a}}},mb=function(){return{start:function(a,c){g(a).each(function(a,d){c.getEnabledScriptUrl(d)&&Je(d,c).start()})}}},Ge=function(a){return{hash:function(){for(var c=0,b=a.length,d=[],e;c<b;c++)e=
a[c].filename.replace(/\.plugin$/,""),e=H.hashCode(e),e=g.toBase(e,62).slice(-4),d.push(e);return d},decode:function(c){var b,d;b=q.floor(q.random()*c.length);d=encodeURIComponent(a[b].filename.replace(/\.plugin$/,""));return[c[b],d]}}},Ie=function(a,c){var b,d=/MSIE [1-9][^0-9]/g;(function(c){var e;b=r.createHiddenIframe();b.setAttribute("src","about:blank");b.setAttribute("class","_ntnrjf7826-hj");(a||k.contextNode.parentNode).appendChild(b);e=b.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&
-1!==navigator.userAgent.search(d)){var g;g=(new Date).getTime();c=c+"?t="+g+"&r="+Math.floor(1E5*Math.random())}c=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+c+"'\">"].join("");e.open().write(c);e.close()})(c);return{getWindow:function(){return b.contentWindow}}},bb=function(a){var c=new Ka;(function(){c.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==k.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},
function(b,d){c.stop();q.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",m.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),g(d.cache).each(function(b,c){a.addToCache(b,c)}))},q.round(1E3*q.random()))})})();(function(){n.getAggregator().on("addToSpg",function(b,c){a.addToCache(c,b);a.isFull()&&(a.sendToOtherTags(),q.setTimeout(a.sendToOtherTags,1300),q.setTimeout(a.sendToOtherTags,3200))})})()},xc={name:"spg",dependencies:["spgCache"],creator:bb,settings:{tier:m.TIERS.PRE_IMPRESSION_FRAUD,
applies:function(a,c,b){return a.on("spg")}}},wc={name:"spgCache",dependencies:[],creator:function(){var a="asp ch fsc mvn no sd".split(" "),c={},b=!1,d=function(){return e(c)},e=function(b){return g(b).keys().sort().toString()===a.toString()},f=function(){b||(b=!0,g(c).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:m.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",m.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return b},
addToCache:function(a,b){b&&b.output&&!d()&&(c[a]=b);d()&&f()},isFull:d,sendToOtherTags:function(){(new ga).send({scaInfoOriginatorASID:k.asid,cache:c})}}},settings:{}};try{gc()}catch(a){__IntegralASDiagnosticCall("main",a,k)}};
try{(function(){var k=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.__IntegralASAdPush=function(y){(y||top.isSingleIASInstance&&top.iasAdSlots).forEach(function(y){__IntegralASConfig._cl_adpath=y.adSelector;__IntegralASConfig.iasParameters=y.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)})},top.isSingleIASInstance&&top.iasAdSlots?top.__IntegralASAdPush():__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)}catch(y){__IntegralASConfig.initialize(__IntegralASConfig,
k,k.document)}})()}catch(k){__IntegralASDiagnosticCall("initialize",k,__IntegralASConfig)};
