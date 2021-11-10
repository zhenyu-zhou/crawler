




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
		version: '19.8.267',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.5.12.js", main: "static.adsafeprotected.com/main.19.8.267.js"},
		protocol: 'https',
		jsref: "",
		asid: "170784f2-4248-11ec-83a8-0adc51855674",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime",
		minimizeCalls: "false",
		adWidth: "-1",
		adHeight: "-1",
		forceAppend: "null",
		sp_imp_maxLength: 8000,
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
		mn: "app02or",
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
__IntegralASConfig.initialize=function(k,w,I){function oa(h){if(!k.executedContinueMain){k.executedContinueMain=!0;var a;k.perf.markStart(pa);eb(k).verifyContextNode();a=fb();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,f=a.mBrowser,p=a.mPageUrls,m=a.mFeatures,q=v,r=a.renderDetector,x,z,F;k.perf.markStart(qa);k.b11="1"===k.adHeight&&"1"===k.adWidth?"true":"false";k.cnod=k.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:l.IMPRESSION_EVENT});
n.getAggregator().trigger("addOutputItem",{output:k.mainBirthdate},"mtim",{type:l.IMPRESSION_EVENT});var y;try{b.isApplicable(v)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),m.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),m.on("idMap")&&(y=b.getIdMap())&&c.addItem(y,"idMap"))}catch(K){d.add(l.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(f,m,q)&&e.start(),F=p.detectTopURL(),m.on("exch")&&(x=(new gb).createInstance(d,c),x.parse(F)),z=hb(),z.isApplicable(m)&&z.start(m),q.usesGroupMCustomMetric()&&
ib(),r.start()}catch(K){d.add(l.ERROR_CODES.IMPRESSION_LEADUP)}k.perf.markEnd(qa);h=F;b=a.mVideo;try{jb(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),g.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(K){__IntegralASDiagnosticCall("impsend",K,k)}h=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;f=a.mDataTransfer;p=a.mErrors;m=a.iOutput;q=a.loopDelay;r=a.mAdTalk;x=a.viewabilityMeasurement;a=a.mAncestorOrigins;z=v;try{k.perf.markStart(ra);
var B=kb();B.start();B.addFieldTypes([l.DT_SLOT.IM,l.DT_SLOT.FF,l.DT_SLOT.ENVIRONMENT,l.DT_SLOT.FF_EXP]);var D=lb(h,b,c);D.isApplicable(d)&&D.start();var N;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(N=mb(e,f,p,b,m),N.init());nb(m,q,r,p,d,e,f,b,a);x&&x.start&&x.start();z.isDomless()||ob().start(["sca","xsca","rsrch"],d);pb();n.runTier(l.TIERS.VIEWABILITY);var t=qb();t.isApplicable(d)&&(t.start(),U.recordBlockingTime(),k.perf.mark(rb),U.setupOnLoadTracking(),U.setupBrowserDelayTracking());k.perf.markEnd(ra)}catch(K){p.add(l.ERROR_CODES.POST_IMPRESSION)}k.perf.markEnd(pa)}}
function sb(h,a,b,c,d,e,f,p,m,q){try{k.perf.markStart(sa),k.tpiLookupURL&&tb(f,p).init(k.tpiLookupURL),v.isDomless()||q.isStarted()&&q.sendOriginList(),n.runAll(),t.execAtEndOfThread(function(){var e;try{k.perf.markStart(ta);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:l.DT_CODES.ADTALK});g.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:l.DT_CODES.ADTALK});k.perf.markEnd(ta);var f,p;k.isSplitMode&&(p=k.protocol+"://"+k.sp_cdnScripts.main,k.perf.markResource(ua,
p));k.impUrl&&k.perf.markResource(ub,k.impUrl);f=k.perf.getData();n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"prf",g(f).toION());b.isApplicable(v)&&b.sendAdTalkCall()}catch(F){c.add(l.ERROR_CODES.ADTALK_DELAY)}}),k.perf.markEnd(sa)}catch(r){c.add(l.ERROR_CODES.EVENT_LOOP_ONE)}}function vb(h){var a=new wb(h,v),b=new xb,c=new yb(h,v),d=zb(h,v),e=(new Ab(k,v,h)).resolve(),f=[a],p=[];d.applies()&&f.push(d);c.applies()&&f.push(c);b.applies(h,v)&&f.push(b);g(e).each(function(a,b){f.push(new Bb(b,
v));p.push(b.id)});0<p.length&&(n.getAggregator().trigger("addOutputItem",{output:p.join(".")},"scm",{type:l.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:p},"metricIdList",{type:l.DT_CODES.UNLOAD,asION:!0}));return f}function Cb(h,a){return!v.isVideo()||v.isAvid()||v.isOmid()||v.isInMobiMraidVideo()?{}:Db(k.videoId,h,a)}function fb(){var h,a,b,c,d,e,f,p,m={};k.perf.markStart(va);var q=n.getAggregator();Eb();m.mFeatures=q.request("features");m.mFeatures||(m.mFeatures=q.provide("features",
wa()));k.integration&&m.mFeatures.setReportedBootstrapFeatures("intblk","integration");k.autotagSizeSet&&m.mFeatures.setReportedBootstrapFeatures("ats","autotagSizeSet");k.encodeInvalidUrlChars=v.isDomless()?!1:m.mFeatures.on("encodeInvalidUrlChars");q.provide("mobileApp",function(){return h=h||new Fb(m.mFeatures)});q.provide("avidJsClient",function(){return a=a||new Gb(t.getWindow())});q.provide("context",v);m.mBrowser=q.provide("browser",(new Hb).createInstance());m.mErrors=q.request("mErrors");
m.mIds=q.provide("ids",Ib());m.iOutput=Jb(q);q.request("mJsonp");m.mComm=q.request("mComm");m.viewabilityMeasurement=(new Kb(Lb(m.mIds),m.mFeatures,m.mBrowser)).create();c=q.request("omidAdSessionContext");Mb(c,q);m.mFeatures.on("swapids")&&(k.oid=k.asid,k.asid=m.mIds.unq);m.mAdTalk=(new Nb).createInstance(m.mFeatures);b=Ob();c=Pb(q);d=q.provide("mPage",(new Qb).createInstance());m.mAncestorOrigins=Rb();m.mPageUrls=q.provide("pageUrls",(new Sb).createInstance(m.mAncestorOrigins,t));e=q.provide("mScreenEvents",
Tb());q.provide("ieXDomainViewability",Ub(m.mBrowser));f=Vb(m.mBrowser);p=Cb(m.mFeatures,e);m.mVideo=q.provide("video",p);Wb(Xb.build());f=(new Yb).createInstance(m.mErrors,f,m.mFeatures);d=(new Zb).createInstance(f,m.mErrors,d,v);p=q.provide("jobFactory",$b());m.mDataTransfer=ac(f,m.mErrors,m.mFeatures,m.mIds,m.iOutput,m.mBrowser,e,b);b=bc(m.mErrors,m.mFeatures,q,c);m.mMode=cc(b,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=q.provide("viewability",dc(E(),m.viewabilityMeasurement,
m.mBrowser,m.mDataTransfer,m.mFeatures,q,m.iOutput,d,e,m.mVideo));ec(m.mFeatures,m.mViewability,c,p);m.loopDelay=xa();m.renderDetector=fc();m.mDataTransfer.setViewabilityMod(m.mViewability);k.perf.markEnd(va);return m}function ya(h){var a=h&&h.sca,b=h&&h.xsca,c=h&&h.w,d=h&&h.h;return function(e){e="string"===typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(k,e);else for(var f in e)k[f]=e[f];k.isResolved=!0;k.sp_cdnScripts={sca:a,xsca:b};c&&d&&(k.adWidth=c,k.adHeight=d,k.autotagSizeSet=!0);
oa(k.isNewBuild)}}function Eb(){var h,a,b;b=n.getAggregator().request("omidAdSessionContext");h=b.app&&b.isDisplay&&!b.isWeb;(a=k.mobFwUrl&&-1<k.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===k.adWidth&&"1"===k.adHeight&&(b.isLimitedSandbox=!1);h&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||!0===k.mobAppWebview)k.mobOrTab=!0}function Mb(h,a){if(h&&h.queuedOutputItems)for(var b=0;b<h.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:h.queuedOutputItems[b].value},
h.queuedOutputItems[b].code,{type:"impression"})}function ec(h,a,b,c){var d=vb(h);n.getAggregator().provide("viewabilityDefinitions",d);return g(d).map(gc(h,a,b,c))}function nb(h,a,b,c,d,e,f,p,m){var q;"true"!==k.minimizeCalls&&(q=(new Date).getTime(),t.execAtEndOfThread(function(){sb(h,a,b,c,q,d,e,f,p,m)}))}function za(h){if(k.isResolved)oa(k.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(e){}var a,b=h;a={37103:"https://vfw.amazon-adsystem.com/ias/j"};var c=/iasProxyPartnerId=([\d]+)/g.exec(b&&
b.config),c=c&&c[1];a=b&&b.host||a[c]||"https://jsconfig.adsafeprotected.com";c=h&&h.config;b=h&&h.contentType;try{var d=k.contextNode.src;-1!==d.indexOf("fw.js")&&-1!==d.indexOf("?")&&(k.staticFwjsMacros=d.split("?")[1])}catch(e){}c&&(d=a+"/jsconfig"+c+(k.adSessionId?"&adSessionId="+k.adSessionId:""),"application/json"===b?n.getAggregator().trigger("getJSON",d,ya(h)):n.getAggregator().trigger("jsonp",d,ya(h),!1,"cbName"))}}function gc(h,a,b,c){return function(d,e){var f,p,m;f=Aa(e,a);var q=hc(b,
h,e.rts).getCallbacks(),g=Ba(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId));e.sendOtherwiseInViewSignal&&(m=Aa(e,a,e.sendOtherwiseInViewSignal),p=Ba(c.createPingJobs(e.type,e.timeInViewThresholds,q,e.metricId,e.sendOtherwiseInViewSignal)));e.rtsCallbacks=q;e.thresholdType===l.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?f=ic(f,e,g,v.isVideo()):(f=Ca(f,Y(e.minUnit),g),e.sendOtherwiseInViewSignal&&(p=Ca(m,Y(e.minUnit),p,e.sendOtherwiseInViewSignal),p.start()));f.start();return f}}
function jc(h){var a,b,c;k.mainBirthdate=k.hasOwnProperty("birthdate")?(new Date).getTime()-k.birthdate:-1;k.perf.markStart(Da);k.isNewBuild=h;h=[kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});k.isResolved&&h.provide("features",wa());a=zc();b=Ea();c=(new Ac).createInstance(a,b);h.provide({mErrors:a,
mJsonp:b,mComm:c});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:ca(a),adSessionReadyStrategy:Bc(a)},{environment:Cc(),adSessionReadyStrategy:Dc()}];(new Ec(h)).resolve().adSessionReadyStrategy.start();k.perf.markEnd(Da)}var Fa={};if(Object.assign)k=Object.assign({},k);else{for(var Ga in k)Fa[Ga]=k[Ga];k=Fa}var g=function(h){return new C(h)},C=function(h){this.iterable=h};C.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&
!a,b=!this.isArray()&&a;return h?a:b};C.prototype.isArray=function(){return this.iterable instanceof Array};C.prototype.isEmpty=function(h){return 0===this.keys(h).length};C.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};C.prototype.map=function(h,a){var b=[];this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};C.prototype.stringify=function(h,a){a=a||
",";var b=[];this.each(function(a,d){var c=h(a,d);g.isDef(c)&&b.push(c)});return b.join(a)};C.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return g(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),e=g(c).toION(h,a);return d?e:(h[b]||b)+":"+e}));return c+b.join(",")+d};C.prototype.compareTo=
function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};C.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};C.prototype._privateMixin=function(h,a,b){for(var c in a)g.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};C.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,d){var e=h(c,d);g(e).isObj()&&b._privateMixin(a,e)});return a};C.prototype.invert=function(){return this.mapToObj(function(h,
a){var b={};b[a]=h;return b})};C.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};C.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};C.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};C.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},h);return a};C.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};C.prototype.selectProperties=function(h){var a=
{},b=this;g(h).each(function(c,d){g.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};C.prototype.filter=function(h,a){return this.map(function(a,c){var b;if(g.isUndef(h)||g.resolve(h,a,c))b=c;return b},a)};C.prototype.toArray=function(){return this.map(function(h,a){return a})};C.prototype.JSONStringify=function(){var h,a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);
b&&(Array.prototype.toJSON=a);return h};C.prototype.contains=function(h){var a=g(this.iterable).findFirst(function(a,c){return h===c});return g.isDef(a)};g.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:e};g.isDef=function(h){return"undefined"!==typeof h};g.isUndef=function(h){return!g.isDef(h)};g.isBool=function(h){return"boolean"===typeof h};
g.noop=function(){};g.identity=function(h){return h};g.isFunction=function(h){return"function"===typeof h};g.isStr=function(h){return"string"===typeof h};g.useIfDef=function(h){return g.isDef(h)?h:!1};g.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};g.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};g.resolve=function(h){var a=g(arguments).toArray();a.shift();return g.isFunction(h)?h.apply({},a):h};g.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e=
{};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};g.debounce=function(h,a,b){var c,d=b||w;return function(){var b=this,f=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,f)},a)}};g.last=function(h){return h[h.length-1]};g.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};g.fromBoolToNum=function(h){return h?1:0};g.isNumeric=function(h){return g.isDef(h)&&null!==h&&!isNaN(h)};g.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};
g.encodeInvalidUrlChars=function(h,a){var b={$:"%24","[":"%5B","]":"%5D","{":"%7B","}":"%7D","|":"%7C"},c=h;a&&"string"===typeof h&&(c=h.replace(/%(?![0-9A-F][0-9A-F])/gi,"%25"),c=c.replace(/\$|\[|\]|\{|\}|\|/gi,function(a){return b[a]}));return c};var n=function(){var h,a={},b=[],c=[],d=function(){var a={},b=g(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,r){r=r||{};var f,p,m=function(a){0===b.length&&(b=g(a).map(function(a,b){return h.request(b)}))},l=function(){if(!f){var a=
[];f=!0;m(["features","browser","context"]);r.emits&&(c.events=new E);if(!r.applies||r.applies.apply(r,b))p=!0,a=g(e).map(function(a,b){return h.request(b)},!0),a.push(c),g(c).mixin(q.apply({},a))}};(function(){var b=r.tier;g.isDef(b)&&(a[b]=a[b]||new da,a[b].push(l))})();h.provide(d,function(){var a;l();p&&(a=c);return a});return c};d.runAll=function(){var b=g(a).keys().sort(function(a,b){return a-b});g(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=
function(){h=h||new Ha;g(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),l={MRC_LARGE_AD_SIZE:242500,IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",
CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v",WINDOW:"w"},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",
COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",
IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",
GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",
VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,.01,.2,.25,.3,.5,.7,.75,.8,.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,.1,.2,.25,.3,.4,.5,.6,.7,.75,.8,.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",REFERRER_POLICY:"no-referrer-when-downgrade",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),
CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",CONTENT_STYLED:"cs",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},Da="mf",pa="cm",
va="in",qa="pr",ra="po",rb="bl",sa="lo",ta="lt",ua="md",ub="id",eb=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,b=I.getElementsByTagName("script"),c=b.length,d=b[c-1],e=h.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(f){}h.contextNode=d}}}},Gc=function(){var h,a=["STYLE","SCRIPT","HEAD",
"META"],b=l.RENDER.CREATIVE_NODE_TYPES.concat(l.RENDER.CONTAINER_NODE_TYPES),c=0,d=k.useFIF&&v.friendlyIframe||v.isSpecifiedAd(),e=0,f=[],p=function(p){var m=u.isNodeXDomainIframe(p)||u.isNodeCreative(p),r=!p;h=r?k.contextNode.parentNode:p;if(m||r){var x=f.length;0<x&&(e<x?e=x:(e=0,f=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",p)}else{if(d){var z;z=m=p;r=v.friendly?t.getTop().document.body:k.contextNode.ownerDocument.body;for(;3>c;){if(r&&m===r){z=m;c=3;break}u.isWindow(m)&&(z=u.crossQuerySelector("["+
l.AD_IDENTIFIER+"-"+k.asid+"]"),m=g.isDef(z)?z:m);z=m=g.isDef(m)?m.parentNode||m:m;c++}m=z}else m=p;if(u.isWindow(m)){try{x=m.document}catch(B){x=k.contextNode.ownerDocument}p=x}else"IFRAME"===u.getNodeName(m)?(f.push(p),p=p.contentWindow.document):p=m;var x=[],r=(m=p&&p.getElementsByTagName&&p.getElementsByTagName("*"))&&m.length,F;if(m)for(var y=0;y<r;y++)F=(z=m[y])&&z.nodeName&&z.nodeName.toUpperCase(),!z.children||0!==z.children.length||g(b).contains(F)||g(a).contains(F)||g(x).contains(F)||x.push(F);
x=b.concat(x);(new Fc(x,f)).searchDescendants(p)}};n.getAggregator().on("creativeFinderBatchCompleted",p);return{find:p,getClosestContainerName:function(){return u.getNodeName(h)}}},Fc=function(h,a){var b=function(b){function c(b){var c=u.getNodeName(b),d=u.isNodeCreative(b)||"IFRAME"===c;c&&d&&!u.isEmptyFriendlyFrame(b)&&(c=u.getNodeArea(b),c>m&&!g(a).contains(b)&&(p=b,m=c))}function e(){do c(b[f]),f+=1;while(0!==f%500&&f<b.length);f<b.length?t.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",
p)}var f=0,p=null,m=-1;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(f;f<b.length;f++)c(b[f]);n.getAggregator().trigger("creativeFinderBatchCompleted",p)}};return{searchDescendants:function(a){a=a||k.contextNode.parentNode;var c,e,f=[];for(c=0;c<h.length;c++){e=h[c].toLowerCase();var p=a.getElementsByTagName&&a.getElementsByTagName(e);if(p&&p.length)for(e=0;e<p.length;e++)f.push(p[e])}b(f)}}},fc=function(){var h,a=!1,b=!1,c=!1,d={status:l.RENDER.STATUS.OTHER,details:l.RENDER.DETAILS.OTHER},
e={status:l.RENDER.STATUS.DETECTED,details:l.RENDER.DETAILS.ENVIRONMENT},f=n.getAggregator().request("omidAdSessionContext"),p=function(){c=a=!0},m=function(a){a&&(a.status=l.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},q=function(){var a=!1;v.isOmid()&&f&&f.useOMID13Logic&&(a=!0);return a},r=function(a,b){h.save(l.RENDER.DIAGNOSTIC.CONTENT_STYLED);var c=/url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(b.content)[1],d=u.createImage();d.onload=function(){0<d.naturalHeight*d.naturalWidth&&
a.setAttribute&&a.setAttribute("data-ias-rend-bi",!1)};d.src=c;a.setAttribute("data-ias-rend-bi",!0)},x=function(a){var b={},c=t.getDoc(),d=function(e){var f=e&&e.type;if("readystatechange"===f&&"complete"===e.target.readyState||"load"===f)m(b),h.saveNode(a),"readystatechange"===f?h.save(l.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===f&&h.save(l.RENDER.DIAGNOSTIC.LOAD_FIRED),y(b),A.removeEvent(a,"load",d),A.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(m(b),h.saveNode(a),h.save(l.RENDER.DIAGNOSTIC.DOCUMENT_READY)):
(A.addEvent(a,"load",d),A.addEvent(c,"readystatechange",d));return b},z=function(){var a=t.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){A.removeEvent(a,"ready",c);h.save(l.RENDER.DETAILS.ENVIRONMENT);h.save(l.RENDER.DIAGNOSTIC.MRAID_READY);m();y({status:l.RENDER.STATUS.DETECTED})};h.save(l.RENDER.DETAILS.ENVIRONMENT);"default"===b?(m(),h.save(l.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=l.RENDER.STATUS.DETECTED):"loading"===b?(A.addEvent(a,"ready",c),h.save(l.RENDER.DIAGNOSTIC.MRAID_LOADING)):
(A.addEvent(a,"ready",c),h.save(l.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));y(d)},k=function(a){a===l.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:t.now(),code:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},y=function(b){var c=h.build();b=b.status||d.status;c=c?c:d.details;a&&b===l.RENDER.STATUS.DETECTED?(k(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",
c)):(k(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},B=function(){n.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Gc,f=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(u.isNodeXDomainIframe(a))b?t.clearInterval(b):f=!1,c=x(a);else if(a){var d=!1,p=u.getRect(a),q;if(q=a&&"IMG"===u.getNodeName(a)){q=!0;var z=g.isDef(a.naturalWidth)?a.naturalHeight*a.naturalWidth:0,k=getComputedStyle(a),
n=0===a.src.length&&J.contains(k.content,"url"),B=a.getAttribute&&a.getAttribute("data-ias-rend-bi");0<z&&!n&&(q=!1);"false"===B&&(h.save(l.RENDER.DIAGNOSTIC.CONTENT_STYLED),q=!1);n&&!B&&r(a,k)}q&&(d=!0,h.save(l.RENDER.DIAGNOSTIC.BROKEN_IMAGE));!d&&p.width>=l.RENDER.WIDTH_THRESHOLD&&p.height>=l.RENDER.HEIGHT_THRESHOLD&&(m(c),b?t.clearInterval(b):f=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);y(c)});var p=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(L){n.getAggregator().trigger("renderdiag",
L)}},q=n.getAggregator().request("mobileApp");q&&q.isMobileAppEnvironment&&q.isMobileAppEnvironment()&&v.isMraid()?z():(p(),f&&(b=t.setInterval(p,500)));n.getAggregator().trigger("eligiblerender")})},D=function(){var a=f&&!!f.isVideo,c=!q()||f&&!!f.videoStartArrived,d=!q()||f&&!!f.geometryArrived,p=!f.omidEarlyExit||f.omidImpressionArrived,g=!(f.omidEarlyExit&&q())||f.omidLoadedArrived;return!b&&d&&p&&g&&(!a||c)?(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"oren"),n.getAggregator().trigger("eligiblerender"),
h.save(l.RENDER.DETAILS.ENVIRONMENT),h.save(l.RENDER.DIAGNOSTIC.OMID_RENDERED),m(),y(e),b=!0):!1};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:t.now(),code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});h=new Ic;new Jc;n.getAggregator().on("impressionsent",p);q()||
f.omidEarlyExit?D()||(h.save(l.RENDER.DETAILS.ENVIRONMENT),h.save(l.RENDER.DIAGNOSTIC.OMID_UNRENDERED),y(d),n.getAggregator().on("omidrendgeoupdate",function(){D()}),n.getAggregator().on("omidrendvideostart",function(){D()}),f.omidEarlyExit&&(n.getAggregator().on("omidimpressionarrived",function(){D()}),n.getAggregator().on("omidloadedarrived",function(){D()}))):v.isAvid()||v.isOmid()||v.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),m(),y(e)):(y(d),B())}}},Ic=function(){var h=
[],a=[],b=function(a){var b;if(u.isWindow(a))b="WINDOW";else if(u.isNodeXDomainIframe(a))b="XIFRAME";else try{b=u.getNodeName(a)}catch(f){c("nen")}return b},c=function(a){h.push(a)};return{build:function(){var b=[];g(a).each(function(a,c){b.push(c)});g(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),f=d&&u.getRect(d),p=d&&u.hasBackgroundImage(d),m=d&&d.innerText&&0<d.innerText.length,q=d&&d.children&&0===d.children.length&&
m,h=f&&f.width>=l.RENDER.WIDTH_THRESHOLD&&f.height>=l.RENDER.HEIGHT_THRESHOLD?l.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:l.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;a.push(e);a.push(h);p&&a.push(l.RENDER.DIAGNOSTIC.STYLED_NODE);q&&a.push(l.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(x){c("sne")}}}},Jc=function(h){var a,b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,k),n.getAggregator().trigger("addThrottledProp",
l.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},Z=function(){return{applies:function(h,a){var b=n.getAggregator().request("mobileApp");return(h.browserIs(l.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(l.BROWSERS.WEBKIT)||h.browserIs(l.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Kc=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");
return(h.browserIs(l.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(l.BROWSERS.WEBKIT)||h.browserIs(l.BROWSERS.MSEDGE))&&!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},ib=function(){var h,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",l.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=l.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=
!0;d()});c.onHiddenChange(d)},Ob=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},c={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=g(c).selectProperties(g(b).keys());c=g(c).asStrings();var e=g(c).compareTo(a);(e=d(e))&&JSON.stringify(e)!==JSON.stringify({})&&(e.t=v.getTagTime(),h.push(e));g(a).mixin(c)});var d=function(a){g(c).each(function(b,c){var d=!1;g(c).each(function(b,c){a[c]&&
(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return g(h).toION(b)}}},Ha=function(){var h=new Lc,a=new E;return g(h).mixin(a)},E=function(){var h={},a={},b=function(b,c,f){if((b=a[b])&&0!==b)return f&&(b=b.slice(0,1)),g(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new da;h[a].push(b,c)};return{on:function(a,e){var d={};e?d[a]=e:d=a;g(d).each(c);g(d).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=g(arguments).toArray();b.shift();
var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=g(arguments).toArray();c.shift();var d=b;a[d]=a[d]||[];a[d].push(c);(d=h[b])&&d.run.apply({},c)}}},fa=function(){var h=function(a,c,d){var b,f=c.length,p=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);d&&d(a,c);if(p&&p.length){for(a=0;a<p.length;a++)(b=p[a])&&u.isWindow(b)&&(c[f]=a,h(b,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=u.isWindow(a)){var c=
!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return g(d).filter(b)}}},da=function(){var h=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;g(h).each(function(b,c){c.apply({},a)})}}},Ba=function(h){var a={};return{doEligibleJobs:function(b){g(h).each(function(c,d){var e=d&&d.getTime();g.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ia=function(){var h,a=new ga,b=function(b,
d,e,f){var c,m,h,r;if(JSON&&JSON.parse)try{c=JSON.parse(b.data),m=b.source,r=g.noop,d(c)&&(f&&(h=f(m,c))&&(r=function(){a.send(function(){return h},m)}),e(b,c,r))}catch(x){c&&n.getAggregator().trigger("error",l.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){h=function(c){b(c,a,d,e)};A.addEvent(w,"message",h)},stop:function(){h&&A.removeEvent(w,"message",h);h=null}}},ga=function(){var h=function(a){return g(a).isObj()?[a]:(new fa).getFrames(a)},a=function(a){return g(a).mapToObj(function(a,
b){var c;g.isFunction(b)||(c={},c[a]=b);return c})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);g(d).each(function(c,d){var e;e=g.resolve(b,d)||{};e.sentTime=t.now();e=a(e);d.postMessage(g(e).JSONStringify(),"*")})}}}},Mc=function(h,a){return{onAll:function(b){var c={};g(a).each(function(d,e){h.on(e,function(){c[e]=1;g(c).keys().length===a.length&&(c={},b())})})}}},Jb=function(h){var a=0,b={},c=function(b,c,d){if(g.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');
this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=g.resolve(b.output);this.props.asION&&(a=g(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var f=function(a,d,e){a=new c(a,d,e);b[a.id]=a};g(a.output).isObj()&&!e.asION?g(a.output).each(function(a,b){f({output:b},a,e)}):f(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,
b){return d(function(c,d){var e=d.props,f;a(e)&&(f=d.output(),e.encode&&(c=encodeURIComponent(c),f=encodeURIComponent(f)),g.isFunction(b)?b(c,f):b[c]=f)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Lc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var b,d=h[a],e=g(arguments).toArray();e.shift();g.isUndef(d)||(b=g.isFunction(d)?d.apply({},e):d);return b},provide:function(b,c){c?h[b]=c:g(b).each(a);
return c}}},Zb=function(){return{createInstance:function(h,a,b,c){return v.isDomless()?new Nc:new Oc(h,a,b,c)}}},Oc=function(h,a,b,c){var d;return{collect:function(){var a=h.find(),f=a.getOutOfViewReasons(),p=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:G(u.calcWinDims()),q=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!q.hasValidDims())return{viewState:l.NA,posViewState:l.NA,embedded:v.embedded,winDimensions:m,adDimensions:q};!0===p&&f.push(l.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,
adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:f.length?l.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:f.join("."),obstructed:g.stringifyTriState(a.isObstructed()),isHidden:g.stringifyTriState(a.isHidden()),tabHidden:g.stringifyTriState(p),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},
Nc=function(){return{collect:function(){return{}}}},Pc=function(h){h=h||g.identity;var a=[],b=t.now(),c=function(){var c=t.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var d=a[a.length-1];b=h(b);c();0!==a.length&&b===d.state||a.push({state:b,duration:0})}}},Ja=function(h,a){var b=h||1,c=0,d=0,e,f=0;return{start:function(){0===c%b&&(e=t.now())},
stop:function(){var p=e||a;0===c%b&&(f+=t.now()-p,d++);c++},getTime:function(){return f},getCount:function(){return d}}},Ka=function(){var h,a=0,b=0,c=new E(!0),d=function(){h&&(a++,c.trigger(a),b>a?t.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=g.collapseArgsIntoHash(a,d);g(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,t.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Qc=function(h,a){var b,c=a,d=function(a){b||
(a&&h(),b=t.setInterval(h,c))},e=function(a){b&&(a&&h(),t.clearInterval(b),b=null)};return{start:d,stop:e,updateFrequency:function(a,p){c=a;b&&(e(),d(p))}}},Y=function(h){var a,b,c=0,d=v.getTagTime(),e=0,f=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=v.getTagTime();f=!1},mark:function(){a=f?v.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=v.getTagTime();f=!0}}},V=function(h,a){var b=h||k.adsafeSrc||k.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?k.protocol+":"+b:k.protocol+
"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b)||[],c=b[1]?b[1]:"",d=b[2]?b[2]:"",e=b[3]?b[3]:"",f=b[4]?b[4]:"",p=b[5]?b[5]:"",m=h&&b[6]?b[6]:"",q=b[7]&&a?b[7]:"",r={},x=function(a){"string"===typeof a&&(f=a);return f},z=function(a){"string"===typeof a&&(p=a);return p},l=function(a,b){var c=a+"="+g(b).toION();return g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars)},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=r[b])?r[b]=d+
c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:x,master:z,setParam:function(a,b){r[a]=r[a]||{};"string"===typeof b||"number"===typeof b?r[a]=b:g(r[a]).mixin(b)},path:function(a){m=a},toString:function(){var a=x()?x()+".":"",b=m?"/"+m:"",c;q||!g(r).isEmpty()?(c=g(r).isEmpty()?"":g(r).stringify(l,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+z()+b+c}}},pb=function(){var h=function(a){var b=[];g(a).each(function(a,
c){400>=b.concat(c).join("").length&&b.push(c)});return b},a=function(a,c){var b;c&&c.id&&(b=c.id.replace(/[^\w-_.>\/]/g,""));return b};return function(){var b,c;try{if(v.friendly&&!v.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=u.getOurNodeInTop()){var f=u.getAncestorNodes(d);e=g(f).map(a)}if(b=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:l.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",b),c=b}return c}catch(p){n.getAggregator().trigger("error",
l.ERROR_CODES.AD_SLOT_ID)}}()},uc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,c=k.asid,d=this.getChanId(),e=k&&k.contextNode&&k.contextNode.nextSibling&&k.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(b,c){b?n.getAggregator().trigger("error",l.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(c)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},
getChanId:function(){for(var a=k.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var f=d.exec(a[e]);f&&3===f.length&&"chanId"===f[1]&&(c=f[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var b=t.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",
function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(q){e(q)}},!1);b.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var b=this,e=k.adRefreshThreshold&&parseInt(k.adRefreshThreshold)||null,f=t.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(d,m){d===l.DT_CODES.PING&&m===e&&(t.execAtEndOfThread(function(){f.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),
"*")}),b.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};v.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",l.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}}},Rb=function(){var h,a,b=
function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var c;if(c=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))c=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):void 0,c=3.7>c;return!c&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=t.getWindow().location.ancestorOrigins,a=!0}catch(c){n.getAggregator().trigger("error",
l.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return g.last(h)},sendOriginList:function(){var a;a="ao:"+(h?g(h).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:l.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",l.DT_CODES.THIRD_PARTY)}}},mb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},f=function(d){try{a.diagnostic("c");
var f=d.length,p=0,r=0;e(f,0,0);g(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(f,p,++r)},!0);e(f,++p,r)})}catch(x){b.add(l.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new V).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+k.asid;h.jsonp(a,f)}catch(m){b.add(l.ERROR_CODES.AT_INIT)}}}},bc=function(h,a,b,c){return{enabled:"true"===k.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===k.accountForSadImps&&c.measure(a),k._onAPIResult&&
k._onAPIResult(a)}catch(e){h.add(l.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Hb=function(){return{createInstance:function(h,a,b,c){return v.isDomless()?new Rc:new Sc}}},Sc=function(){var h=l.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=t.getWindow();try{g.isDef(b.opera)&&g.isDef(b.opera.buildNumber)?a=h.OPERA:g.isDef(b.mozInnerScreenY)?a=h.GECKO:g.isDef(b.chrome)&&g.isDef(b.chrome.csi)?a=h.CHROME:g.isDef(b.msWriteProfilerMark)&&g.isDef(b.crypto)?a=h.MSEDGE:
g.isDef(b.attachEvent)||g.isDef(b.msCrypto)?a=h.IE:g.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(f){}return a},c=function(){var a=!1,b=t.getWindow();g.isDef(b.navigator)&&g.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=
t.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=t.getWindow();return!(!a||!g.isFunction(a.postMessage))},getDocumentMode:function(){var a=t.getDoc();return a&&a.documentMode?a.documentMode:l.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],f=l.NA,p=t.getDoc(),m=p.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in
p.documentElement.style)f="11";else for(m.style.behavior="url(#default#clientcaps)",p=0;p<e.length&&!(f=m.getComponentVersion(e[p],"componentid").replace(/,/g,"."));p++);}catch(q){}e=f;f=l.NA;m=t.getWindow();g.isDef(m.navigator)&&g.isDef(m.navigator.appName)&&(f=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:f}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"];return J.contains(a,"Android")&&function(){return g(b).findFirst(function(b,c){return J.contains(a,
c)})}()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Rc=function(){var h=function(){return!1},a=function(){return l.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},
Ac=function(){return{createInstance:function(h,a){return v.isDomless()?new Tc(a):new Uc(h,a)}}},Vc=function(){var h,a=function(a,c){var b="",e="",f=t.getDoc().getElementsByTagName("ins");if(f&&0<f.length){e=f[0];b="<ins";for(f=0;f<e.attributes.length;f++)b+=" "+e.attributes[f].nodeName+'="'+e.attributes[f].nodeValue+'"';b+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
b+'<script src="'+c+'" referrerpolicy="'+l.REFERRER_POLICY+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var b=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!v.integratedBlockingApplies(a);return b&&a},deployBlockingScriptIntoIframe:function(b){h=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+k.asid,d;d=k.contextNode.parentNode;var e,f=k.adWidth&&0<k.adWidth?k.adWidth:0,p=k.adHeight&&0<
k.adHeight?k.adHeight:0,m=t.getDoc().getElementsByTagName("ins"),q;q=e=0;m&&0<m.length&&(q=m[0],e=parseInt(q.style.width),q=parseInt(q.style.height));f=e||f||window.innerWidth;p=q||p||window.innerHeight;"complete"===t.getDoc().readyState&&(k.forceAppend="true");"true"===k.forceAppend?(e=t.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):t.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=t.getDoc().getElementById(c))d.style.width=f+"px",d.style.height=
p+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},Uc=function(h,a){var b=function(a){var b=!1;v.isMSFT()&&(b=(a=a&&-1!=a.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig"))?!1:k.iasProxyPartnerDomain);return b},c=function(a,c,d,e){var f=b(c);f&&(c="//"+f+encodeURIComponent(c));"script"!==a?(c=I.createElement("DIV"),c.innerHTML=d,d=c.childNodes[0]):(d=
I.createElement("SCRIPT"),d.src=c,e&&(d.onload=e));k.contextNode.parentNode.appendChild(d)},d=function(a,b,d){var e,f="";e=' src="'+b+'"';var p=' referrerpolicy="'+l.REFERRER_POLICY+'"';d&&(f="__IntegralASEventLoadHandler_"+k.asid.replace(/-/g,""),w[f]=d,f=' onload="'+f+" && "+f+'()"');p={script:['<script type="text/javascript"',f,e,p,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',f,e,p,"></iframe>"],
img:["<img",f,e,p,"/>"]}[a].join("");v.isOmid()?(e=new Vc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,p,d)):("loading"!==t.getDoc().readyState&&(k.forceAppend="true"),"true"===k.forceAppend?c(a,b,p,d):I.write(p))},e=function(a,c,d){var e=!d&&A.getXHR2();(d=b(a))&&(a="//"+d+encodeURIComponent(a));e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&c&&c()},e.send()):(d=u.createImage(),c&&(d.onload=c),d.src=a)},f=function(a,b){var c=A.getXHR2();shouldUseProxy(a)&&
(a=updateUrlWithProxy(a));c&&(c.open("GET",a),c.onreadystatechange=function(){if(4===c.readyState&&200===c.status&&b)try{var a=JSON.parse(c.responseText);b(a)}catch(y){}},c.send())},p=function(a,c,d,e){var f=I.createElement("script");d=d||k.contextNode.parentNode;var p=b(a);p&&(a="//"+p+encodeURIComponent(a));f.type="text/javascript";f.src=a;f.referrerPolicy=l.REFERRER_POLICY;c&&(f.onload=c);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));g.isDef(d)&&d.appendChild(f)},m=function(a){g.isFunction(a)?
a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new V(a,!0)).toString(),e(a,void 0,!0))},q=function(b,c,d,e){p(a.wrap(b,c,d,e))};n.getAggregator().on({addNode:d,send:e,exec:p,notify:m,getJSON:f,jsonp:q});return{addNode:d,send:e,exec:p,notify:m,getJSON:f,jsonp:q}},Tc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";b=encodeURI(b);n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);
n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){var c=n.getAggregator().request("omidVerificationClient");a=encodeURI(a);c.injectJavaScriptResource(a,b||function(){})},d=function(a){g.isFunction(a)?a({iasImpId:k.asid}):a&&"string"===typeof a&&(a=(new V(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},v=function(h){var a=
"undefined"===typeof window,b="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(F){}return b}(),d=function(){return a||g.isDef(t.getWindow().mraid)},e=function(){return!a&&g.isDef(t.getWindow().mraid)},f=function(){var b=!1;if(!a)var c=(b=t.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&g.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},p=function(){var b;if(!(b=-1!==k.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();
if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===l.MEDIA_TYPE.VIDEO}catch(B){}}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===l.MEDIA_TYPE.VIDEO),c=b);return c||f()},m=function(){return!1===k.fwMonitoring||"false"===k.fwMonitoring},q=function(){return k.mobOrTab},r=function(a){return!1===g(k.customViewability).isArray()?!1:0<g(k.customViewability).filter(function(b,
c){return J.contains(c.id,a)}).length},x=function(){return r("grpm")||k.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=V(b.document.referrer),c=d.hostname===b.location.hostname}catch(B){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return t.now()-k.birthdate},getPageTime:function(){var b=l.NA;!a&&g.isDef(h.chrome)&&g.isDef(h.chrome.csi)&&g.isFunction(h.chrome.csi)&&(b=t.round(h.chrome.csi().pageT));return b},isVideo:p,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=g.isFunction(k.contextNode.getAttribute)&&k.contextNode.getAttribute("data-ias-container")||k._cl_adpath)&&g.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(k._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&g.isDef(t.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()&&!k.videoId},isOmidNative:function(){return(new ha).accepts()},
isOmidSandboxedEnvironment:function(){return(new ha).accepts()},isOmidForWeb:function(){return(new La).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===l.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===l.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==ia());return b},isMraid:e,isSafeFrame:function(){var b=
!1;a||(b=g(t.getWindow().$sf).isObj(!1)&&g(t.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:q,usesIASFullyInViewCustomMetric:function(){return r("fiv")||k.use100v||!x()},usesGroupMCustomMetric:x,isCeltra:function(){var b=!1;a||(b=Ma().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return x()&&q()},usesZeroPivCustomMetric:function(){return!1===g(k.customViewability).isArray()?!1:0<g(k.customViewability).filter(function(a,b){return g(b.thresholds).findFirst(function(a,
b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=t.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(y){a(y)}},isPossiblyRefreshable:function(){return!a&&!d()&&!p()&&b&&"jload"===k.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;k.contextNode&&g.isFunction(k.contextNode.getAttribute)&&(c=k.contextNode.getAttribute("data-ias-check-tag"),d=k.contextNode.getAttribute("data-ias-check-done"),
e=(e=k.contextNode.getAttribute("data-ias-callback"))&&g.isFunction(t.getWindow()[e]));var f=g.isDef(JSON)&&g.isFunction(JSON.parse);a=k.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var p=!0===k.fwMonitoring||"true"===k.fwMonitoring;f&&a&&("true"===c&&"true"!==d&&e?(b=!0,p&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,p||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b},isBlocking:m,
isBlockingSizmekTag:function(){return m()&&J.contains(k.scriptUrl,"bs.serving-sys.com")},isAMZN:function(){return g.isStr(k.iasProxyPartnerDomain)&&-1!==k.iasProxyPartnerDomain.indexOf("amazon")},isMSFT:function(){return g.isStr(k.iasProxyPartnerDomain)&&-1!==k.iasProxyPartnerDomain.indexOf("bing")}}}(w),A={addEvent:function(h,a,b,c){g.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",A.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",A.mouseEnter(b),c):h.addEventListener(a,
b,c):g.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){g.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",b=A.mouseEnter):"mouseleave"===a&&(a="mouseout",b=A.mouseEnter),h.removeEventListener(a,b)):g.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==
h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=I.defaultView&&I.defaultView.getComputedStyle;b=b||"";d?c=(h=I.defaultView.getComputedStyle(h,b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;g.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):g.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(v.isDomless())t.setTimeout(function(){h()},
50);else{var b=a||(v.xDomainIframe?I:t.getTop().document),c=function(a){var c=t.setInterval(function(){b.body&&(t.clearInterval(c),a())},50)},d=this;(function(a){var e=function(){a(!0)};g.isFunction(I.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?t.execAtEndOfThread(e):d.addEvent(b,"DOMContentLoaded",e,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=t.getWindow(),c=!1;if("sandbox"in t.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=
a.hasAttribute("sandbox");else{a=!1;b=t.getDoc();if(h.browserIs(l.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(d){/Assignment is forbidden for sandboxed iframes/.test(d.message)&&(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&g(h.style).isObj()&&g(a).isObj()){var b="";g(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===A.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},aa=function(h){var a,
b=aa.callTypeCounter,c=[l.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=l.DT_CODES;g("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];g.isDef(d)&&0!==d&&g(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=g.isDef(d)?d+1:1;
return a}();return{callType:h,enumerator:a}};aa.callTypeCounter={};var ac=function(h,a,b,c,d,e,f,p){var m=0,q=0,r=!1,x=function(a,e,p,h,x,z){p=p||!b.on("postDts");var N=a===l.DT_CODES.DIAGNOSTIC||a===l.DT_CODES.ADTALK||a===l.DT_CODES.SCA||a===l.DT_CODES.XSCA||a===l.DT_CODES.EXTERNAL||a===l.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(N||"n"!==f.getCurrentLoc()))try{var D=k.dtBaseURL,B=new V(D,!0),v=t.now();n.getAggregator().trigger("preSendDt",a);D||(B.path("dt"),b.on("usedtdomain")&&
B.sub("dt"));F(B,a,e);x&&x.field&&B.setParam(x.field,x.value);h||y(B,a);n.getAggregator().trigger("send",B,function(){q+=1;m=t.now()-v;g.isFunction(z)&&z()},p);a===l.DT_CODES.UNLOAD&&(r=!0);d.cleanup()}catch(L){__IntegralASDiagnosticCall("dt-"+a,L),n.getAggregator().trigger("error",l.ERROR_CODES.PHONE_HOME)}};h=function(){r||x(l.DT_CODES.UNLOAD,-1,!0)};var z=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=k.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&x(l.DT_CODES.DIAGNOSTIC,
-5,!0,!0,{field:"bkp",value:d})},F=function(a,b,e){var f=new aa(b);e=g.isDef(e)?e:f.enumerator;a.setParam("asId",k.asid);e={c:c.getCacheBustId(),pingTime:e,time:v.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},y=function(c,h){var g,r={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});f.fastForward();if(h===l.DT_CODES.CUSTOM||
h===l.DT_CODES.UNLOAD||h===l.DT_CODES.VIDEO_EVENTS||h===l.DT_CODES.FULLY_INVIEW||h===l.DT_CODES.PING||h===l.DT_CODES.VIEWABILITY_READY||h===l.DT_CODES.ADTALK)r.clog=p,v.isVideo()&&(g=v.isOmid()?"omidVideoEventsString":"videoEventsString",(g=n.getAggregator().request(g))&&!g.isEmpty()&&(r.ve=g));h===l.DT_CODES.UNLOAD&&(r.ndt=q);-1!==k.mode.indexOf("jsvid")&&(r.vv=n.getAggregator().request("videoVersion"));r.NULL1=b.output();r.NULL2=f.stringify(10);r.em=v.embedded;r.fr=v.friendly;r.e=a.toString();r.tt=
k.mode;r.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},r);c.setParam("tv",r);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,b,c){x(a,g.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:z,updateDtCount:function(){q++},unload:h});return{send:x,unload:h,diagnostic:z,setViewabilityMod:function(a){}}},G=function(h){var a={},b=!1,c=function(){var a=1===
h.nodeType?u.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};g(a).each(function(a,c){b[a]=t.round(c)});return b},e=function(a){return g.isNumeric(a)||g.isUndef(a)},f=function(){return t.round(a.width)*t.round(a.height)};(function(){var b;h!==w.parent&&(1!==h.nodeType?a=h:g.isDef(h.getBoundingClientRect)&&(b=u.getRect(h),g(a).mixin({x:g.useIfDef(b.x)||b.scrX,y:g.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&
e(a.scrY)&&g.isNumeric(a.width)&&g.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};g(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?t.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:f,isMrcLarge:function(){return f()>=l.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=f()}}},u={findElementsWithSize:function(h){var a=
[],b=function(c){1>u.getNodeArea(c)?g(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(A.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;h="hidden"===A.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),h={scrX:t.round(a.scrX),scrY:t.round(a.scrY),width:t.round(b.width),height:t.round(b.height)}}catch(c){n.getAggregator().trigger("error",
l.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(v.isDomless())return{width:0,height:0};if(v.friendly)if(a=top.document,b=a.documentElement,a=a.body,g.isDef(top.innerWidth))h.width=top.innerWidth,h.height=top.innerHeight;else if(g.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(g.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else g.isDef(w.outerWidth)&&(h.width=w.outerWidth,h.height=
w.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;g.isDef(w.screenX)?(h=w.screenX,a=w.screenY):g.isDef(w.screenLeft)&&(h=w.screenLeft,a=w.screenTop);n.getAggregator().request("browser").browserIs(l.BROWSERS.GECKO)&&-8==h&&-8==a&&(h+=8,a+=8);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=u.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=u.browserWindowPosition();h=h.getBoundingClientRect();g.isUndef(h.x)&&(a.x=h.left,a.y=h.top);g.isUndef(h.width)&&
(a.width=h.right-h.left,a.height=h.bottom-h.top);g(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&g.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=I.createElement("span");g(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=v.friendly&&t.getTop().Image;return g.isFunction(h)?
new h:new Image},createHiddenIframe:function(h){var a=t.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};A.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var b,c,d,e=1E4,f=1E4;b=A.nodeIsAbsolutelyPositioned(h);d=!u.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!u.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!u.tagNameIs(d,
"OBJECT"),c="inline"!==A.getStyle(d,"display"),b&&c&&(b=u.getRect(d),e=b.width<e?b.width:e,f=b.height<f?b.height:f);while(d.parentNode!==I&&d!==a)}return{width:t.round(e),height:t.round(f)}},hasBackgroundImage:function(h){h=A.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyFriendlyFrame:function(h){try{var a,b,c=!1;if(h&&h.document){var d=h&&"IFRAME"===h.nodeName&&h.contentDocument;d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0)}return c}catch(e){return!1}},findChildWithLargestContent:function(h,
a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==h&&"inline"!==A.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;var f=!0;if("visible"===A.getStyle(e,"overflow")||"visible"===A.getStyle(e,"overflowX")&&"visible"===A.getStyle(e,"overflowY"))f=!1;e=f&&0<u.getNodeArea(a.parentNode)}!e||b&&d&&"DIV"===
a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},f=null,p=function(a){var b,c,f=null,p=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var m=a[b],g=u.getNodeArea(m),l=void 0,k,n;k=m;if((n=k.parentNode===h&&"DIV"===k.nodeName&&!e(k))&&!(n="0"===A.getStyle(k,"opacity")||"hidden"===A.getStyle(k,"visibility"))){n=k.childNodes;for(k=0;k<n.length;k++)1===n[k].nodeType&&(l=!0);n=!l}(l=!n)&&d&&"DIV"===m.nodeName&&(l=!1);k=u.isEmptyFriendlyFrame(m);g>p&&l&&!k&&(f=m,p=g)}f&&(f.hasValidSizeForMobileApp=
1<p);return f}(function(b){var c,d,e,f,p=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var m=b.getElementsByTagName&&b.getElementsByTagName(e);if(m&&m.length)for(e=0,f=m.length;e<f;e++)p.push(m[e])}return p}(h));p&&(f=c(p),f.hasValidSizeForMobileApp=p.hasValidSizeForMobileApp);return f},screenSize:function(){if(v.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{g.isDef(w.screen)&&(h={width:w.screen.width,height:w.screen.height})}catch(a){}return h},
calcMonDims:function(){var h=g(u.screenSize()).mixin({scrX:0,scrY:0});g.isDef(screen.availLeft)&&(h={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return h},getOurIFrameInTop:function(){for(var h,a=t.getTop(),b=t.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;v.friendly&&(h=v.embedded?(h=u.getOurIFrameInTop())&&h.frameElement:k.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;
if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||t.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!g(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return g.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=g.isDef(h)&&g.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},
nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&g.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&g.isFunction(h.removeAttribute)&&h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[k.contextNode.parentNode,t.getDoc()];v.friendly&&d.push(t.getTop().document);if(a&&v.embedded)try{d.push(t.getWindow().frameElement.ownerDocument)}catch(e){}g(d).each(function(a,
d){try{c=u.querySelector(d,h)}catch(p){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=u.getTagsNamed("iframe",h))&&(a=g(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=t.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;
return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&u.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&u.tagNameIs(h,"img")},getDimensionFromStyle:function(h){var a,b=A.getStyle(h,"width");h=A.getStyle(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=u.getAttribute(h,"width");h=
u.getAttribute(h,"height");b&&h&&(a={width:g.getNum(b),height:g.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,f;if(c(b))e=b;else if(f=b.children)for(d=0;d<f.length&&!(e=a(f[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===A.getStyle(a,"position"),e="hidden"!==A.getStyle(b,"overflow")&&!d;v.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=u.getNodeName(a),
c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==l.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||u.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==t.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=
!1;if(a&&"IFRAME"===u.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},zc=function(){var a={},b=function(b){g.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=g(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},gb=function(){return{createInstance:function(a,b){return v.isDomless()?
new Wc:new Xc(a,b)}}},Xc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=g(a).map(function(a,b){return b.val}),b.push(k.adsafeSrc,k.requrl,k.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,f=c(d),p=f&&f.length&&f.join("|"),m=k.exchList;p&&(e=g(m).map(function(a,b){return 0<=p.indexOf(J.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:l.IMPRESSION_EVENT}))}catch(q){a.add(l.ERROR_CODES.EXCHANGE_PARSING)}}}},
Wc=function(){return{parse:function(a){}}},wa=function(){var a={},b=function(b){var c;g.isUndef(a[b])&&(c=k.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=(new RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))")).exec(c)))&&(c=c[1],a[b]=!c||c>100*t.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"},e=function(){var b,e;b=g(c).mapToObj(function(b,c){var d={};d[b]=g.fromBoolToNum(a[c]);return d});e=g(d).mapToObj(function(a,
b){var c={};c[a]=g.fromBoolToNum(f(b));return c});e.gm=g.fromBoolToNum(v.usesGroupMCustomMetric());return g(b).mixin(e)},f=function(a){var b=k[a];return g(["integration"]).contains(a)?!!b:!0===b||"true"===b||g.isFunction(b)};g(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:f,bootstrapperHas:function(a){a=g.isStr(a)?[a]:a;return g(a).map(function(a,b){if(g.isDef(k[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=k.sp_cdnScripts&&k.sp_cdnScripts[a];return c&&
a},setReportedBootstrapFeatures:function(a,b){d[a]=b},reportedBootstrapFeatures:d,output:function(){return g(e()).toParams()}}},Vb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=l.NA;c=b?c:d;g.isDef(a)&&a!==l.NA&&-1<a&&(e=a>=c.IN_VIEW?l.IN_VIEW:a<=c.OUT_OF_VIEW?l.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?l.PARTIAL_VIEW_PLUS:l.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,f=
a;a.hasValidDims()&&!a.isHidden()&&(g([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=f.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),p=Math.max(c.scrY,d.scrY),m=Math.min(c.scrX+c.width,d.scrX+d.width)-e,c=Math.min(c.scrY+c.height,d.scrY+d.height)-p;f=G({scrX:e,scrY:p,width:0<m?m:0,height:0<c?c:0})}}),e=t.round(f.area()/a.area()*100));return e}}},Ib=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));
b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*t.random()|0).toString(16);a=a.slice(0,32)}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return k.anId};return{getAsid:function(){return k.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),
a=a.getTime()-b;return g.toBase(a,62)},getFwId:function(){return d()||k.advEntityId+"-"+k.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},tb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(l.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Yc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?
function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,m=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"nr_"+e,m)}:function(){var e=a.getTimeInViewInSeconds(),p=a.getTimeInViewForRts();g.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[p])c[p]()}}}},$b=function(){return{createPingJobs:function(a,
b,c,d,e){return g(b.getTimeThresholds()).map(function(b,p){return new Yc(p,a,c,d,e)})}}},Na=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-k.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&g(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(g(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),
f=n.getAggregator().request("mScreenEvents").getCurrentEvent(),r=Math.floor(d.time/1E3);g(b).each(function(a,b){var c;c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(f)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:l.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:l.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",l.DT_CODES.CUSTOM,r),b.rtsCallbacks&&
g.isFunction(b.rtsCallbacks[l.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[l.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},Ea=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){var a=k.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+t.round(1E4*Math.random())};return{wrap:function(d,
e,f,p){var m=c(),g,r,l;p=p||"ias_callback";d=""+d;(new RegExp(p)).test(d)&&(g=(new RegExp("("+p+"=)(.[^&]*)")).exec(d)[0],r=g.split("=")[1],l=J.stringToFn(r),d=a(d,g));w[m]=function(a){e(a);f&&l&&l(a);w[m]=void 0};return d=b(d,p,m)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},cc=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+g(b).stringify(function(a,b){return a+":"+b},","),c=V(a,!0),c.appendToParamValue("adsafe_jsinfo",g.encodeInvalidUrlChars(d,k.encodeInvalidUrlChars)),
c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,onloadCallback:Oa,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",c,a.callback,!0):n.getAggregator().trigger("send",c,function(){Oa();n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",
b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,f){var p;try{p=d(c,f),a.enabled?n.getAggregator().trigger("jsonp",p,a.callback,!0):n.getAggregator().trigger("send",p,g.noop,!b.on("postMon"))}catch(r){__IntegralASDiagnosticCall("jsvidimp",r,k)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b=
"false"===k.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var f;try{var p;if(p=b)p=c&&g.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;p&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));f=d(a,e);n.getAggregator().trigger("send",f,
g.noop,!0)}catch(F){__IntegralASDiagnosticCall("fwjsvidimp",F,k)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[k.mode],d=!!b.isFW,g=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&k.mobFwUrl?k.mobFwUrl:a?k.adsafeSrc:k.requrl;a||(b+="?"+k.reqquery);return b}(d),r=g.indexOf("BEGIN__ADSAFE"),l=-1!==r,z=l?g.slice(r):"",a=l?g.slice(0,r):a(g);return{isFW:d,baseUrl:a,macroUrl:z,sendImpression:function(a){var d=
function(){b.nodeType?n.getAggregator().trigger("addNode",b.nodeType,a,b.onloadCallback):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},t={execAtEndOfThread:function(a){t.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,
arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return v.isDomless()&&v.isOmid()?n.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return t.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return t.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){t.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){t.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},
getTop:function(){v.isDomless();return top},getDoc:function(){v.isDomless();return I},getIntersectionObserver:function(a,b){v.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){v.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){v.isDomless();return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Qb=function(){return{createInstance:function(){return v.isDomless()?new Zc:new $c}}},$c=function(){var a,b=!1,c=!1;n.getAggregator().request("features");
var d=new da,e=function(){return g.isDef(a.prop)?t.getDoc()[a.prop]:null},f=function(){var b=t.getWindow(),c=function(){d.run(e())};A.addEvent(b,"focus",c,!0);A.addEvent(b,"blur",c,!0);a.event&&A.addEvent(t.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=t.getDoc();g.isUndef(d.hidden)?g(["moz","ms","webkit"]).each(function(e,f){var p=f+"Hidden";g.isDef(d[p])&&(a=p,c=f+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);c||
(c=!0,f())},supportsVisAPI:function(){return b}}},Zc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Sb=function(){return{createInstance:function(a,b){return v.isDomless()?new ad:new bd(a,b)}}},bd=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||g.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],g.isUndef(b[c])?
b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},f=function(){var f,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(B){var c=B.message,c=c.substring(c.lastIndexOf("<")+1,c.lastIndexOf(">")),d;if(d=g.isDef(c)){var e=b.getWindow();d=!1;g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(e=e.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==e&&2==e.length&&(e=e[1].split("."),3==
parseInt(e[0],10)&&6>=parseInt(e[1],10)&&(3==e.length?13>=parseInt(e[2],10)&&(d=!0):d=!0)))}d&&(a.g=c)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(x){}try{q.b=encodeURIComponent(parent.location.href)}catch(x){}if(v.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(x){}try{q.e=encodeURIComponent(w.document.referrer)}catch(x){}}try{"jsi"!==k.mode&&(q.d=encodeURIComponent(w.location.href))}catch(x){}try{q.f=encodeURIComponent(k.jsref)}catch(x){}try{f=m(),q.g=
encodeURIComponent(f.g||""),q.q=encodeURIComponent(f.q||""),a.isStarted()&&!f.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(x){}q=d(q);q=e(q);f=[];for(var r in q)q.hasOwnProperty(r)&&f.push({key:r,val:q[r]});f.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=f};return{detectTopURL:f,getDetectedURLs:function(){return c?c:f()}}},ad=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Pb=
function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",k._onSuspicious)},skipAsFraudulent:function(){return b}}},Tb=function(){var a=[],b={},c={sl:"n"},d=0,e,f,p,m={i:0,o:0,n:0,pp:0,pm:0},q=function(a){var b=n.getAggregator().request("features");b&&b.on("recoverOmidLostTime")&&(b=m.ri,m.ri=b?b+a:a)},r=function(a){var b={},c=a.winDimensions,d=a.adDimensions;g.isDef(c)&&c.hasValidDims()&&(b.wc=c);g.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);
g({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];g.isDef(e)&&(b[c]=e)});c=g(b).toParams();return""===c?"":","+c},k=function(a,c){var d=new Pc(c);return b[a]=d},z=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},t=function(){g(c).each(function(b,c){m[c]+=a.length?p-d:p});d=p},y=function(b){a.length&&t();g(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(m[b]+=m.n);c[a]=b});a.length||t()},
B=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=r(a);var e=a.omidObstructions,m={sl:z(a.viewState)};p=v.getTagTime();y(m);m.t=p;c=g({toString:function(){g(b).each(function(a,b){b.fastForward()});return"{"+g(m).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+g(this.piv).stringify(b)+"]");a+=",as:["+g(this.as).stringify(b)+"]";return",bkn:{"+a+
"}"}}}).mixin(m);g(c).mixin(a);c.width=d.width;c.height=d.height;g.isUndef(c.percentInView)&&(c.percentInView=l.PIV_NA);g.isUndef(c.reason)&&(c.reason="");g.isDef(e)&&""!==e&&(c.omidObstructions=e);return f=c};(function(){k("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(g(d).each(function(a,e){g.isUndef(b)&&c<e&&(b=d[a-1])}),g.isUndef(b)&&(b=d[d.length-1]));return b});k("as",function(a){var b=l.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+
"."+a.height});var a=n.getAggregator().request("omidAdSessionContext");a&&-1<a.recoveredTime&&q(a.recoveredTime)})();return{fastForward:function(){p=v.getTagTime();t()},registerLocation:function(d){var f,p=!1;c.sl==z(d.viewState)&&a.length?(f=new B(d),a[a.length-1].details=f.details):(f=new B(d),a.push(f),e=d.viewState,p=!0);n.getAggregator().trigger("newScreenEvent",f);g(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(f),a[a.length-1].breakdowns[b]=c.get()):c.addState(f)});
return f},stringify:function(b){var c="";a.length&&(c=g({slTimes:"{"+g(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:k,getCurrentLoc:function(){return z(e)},getCurrentEvent:function(){return f},setRecoveredTimeInSlTimes:q}},J={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=
a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],g.isUndef(c)||a===d.length-1&&!g.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=t.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!g.isUndef(b));a++);return b},contains:function(a,b){return g.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return g.isFunction(a.trim)?a.trim():a.replace(" ","")}},cd=function(){var a=
function(){var a=function(a){return(a=u.getDimensionFromAttributes(a))&&a.width&&30<a.width&&a.height&&30<a.height};return{hasValidDimensions:function(b){var c;(c=a(b))||(c=(b=u.getDimensionFromStyle(b))&&b.width&&30<b.width&&b.height&&30<b.height);return c},hasValidDimentionAttributes:a}}(),b=/GoogleActiveViewElement/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,f=function(a){var b=a&&u.tagNameIs(a,"a"),c=u.attributeMatches(a,"href",d);a=u.attributeMatches(a,"target",
e);return b&&c&&a},g=function(a){var d=u.tagNameIs(a,"div"),e=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c;if(b=u.traverseAndFindFirstMatchingNode(b,f))b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b);return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},
dd=function(){var a=cd(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},rc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,
d){if(c!==d&&!u.isViewportVisible(c,a))return c;if(c!==d&&v.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=t.getWindow();return b(a,t.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=t.getWindow();u.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},ed=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&
(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,g=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(g=!0);g&&!d&&(b(),e(),g=!1);c=a.innerWidth;f=a.innerHeight})}}},pc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),f,p={};d!==c&&(f=g.stringifyTriState(d),p.res1=f,p.ps=f,p.ts=t.now(),p.psfr=g.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",
p));c=d}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)ed(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},qc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,a,g(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,
f;if(v.embedded)try{f=k.contextNode.parentNode,b=dd().getDFPValue(f),f={},f.df=b.type,b.size&&(f.sz=b.size.width+"."+b.size.height),b.tag&&(f.dom=b.tag),c("dfp",f),b.size&&a&&(a.events.on("newState",d),a.start())}catch(p){n.getAggregator().trigger("error",l.ERROR_CODES.HIDDEN)}})()},settings:{tier:l.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Pa=function(a,b,c,d){var e,f=0,p=0,m=!1,q=function(){e=Math.round(u.getNodeArea(a.body));if(e>=d){for(var q,r=e+20*e/100,k=
a.querySelectorAll("iframe"),k=g.fromNodeListToArray(k);k.length&&(p<r||f<c);)q=k.shift(),q=Math.round(u.getNodeArea(q)),q>=d&&(f++,p+=q);p>=r&&f>=c&&(r={va:e,bia:p,bin:f},n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,b,g(r).toION()),m=!0)}},r=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():t.execAtEndOfThread(function(){g(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&u.isElement(c)&&u.tagNameIs(c,"IFRAME")&&g.debounce(q,10)}})})});b.observe(a.body,
{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(t.execAtEndOfThread(q),!m&&g.isDef(w.MutationObserver)&&r())},oc={name:"BS_InApp",dependencies:[],creator:function(){var a=t.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Pa(a,"bs1",3,100)},settings:{tier:l.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},nc={name:"BS_Browser",
dependencies:[],creator:function(){var a=t.getWindow().document,b=a.body?Math.round(u.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Pa(a,"bs2",10,b)},settings:{tier:l.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Nb=function(){return{createInstance:function(a){return v.isDomless()?new fd:new gd(a)}}},gd=function(a){var b,c,d,e=new Ha,f=new fa,p=new hd(e),m=new id,q=new jd,r=new kd(e,
a),l=function(){g.isUndef(d)&&(d=new ld(e));return d},k=function(){e.provide({frameCollection:function(){return p},adProxy:function(){return q},adTalkMessage:function(a){return new md(a,e)},adTalkMessageCollection:function(){return m},idMapModule:l,interFrameQuerySelector:function(a){return new nd(a)}})};return{isApplicable:function(a){return g.isDef(w.JSON)&&g.isDef(w.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){k();f.traverse(p.addFrame);r.startListening();
r.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){r.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:r.sendAdTalkCall,getFrameMap:function(){g.isUndef(b)&&(b=new Qa(e));return b},getFrameMapIncludingPeerCase:function(){g.isUndef(c)&&(c=new Qa(e,!0));return c},getIdMap:l}},fd=function(){return{isApplicable:function(){return!1},start:function(){}}},md=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();
c=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var f=k.asid,d=d.tagId,g=v.embedded,m=v.friendly,q=k.birthdate;c=c.split("-")[2];var r;v.friendly?r="["+l.AD_IDENTIFIER+"-"+k.asid+"]":(r=t.getWindow(),r=r.location&&r.location.href,r='iframe[src*="'+(r&&r.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:a||{},srcAsid:f,srcTagId:d,srcIsEmbedded:g,srcIsFriendly:m,srcBirthdate:q,iasCommonId:c,nodeSelector:r,positionStr:e,version:"0.1"}},id=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return g(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},od=function(a,b,c,d){var e,f=a==w;e={position:b.slice(0),id:b.join("-"),isMe:f,isLeaf:!a.frames.length,adProxies:f?c:[],selfDescription:void 0,unifiedId:k.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return g(e.position).map(function(a,b){return g.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||g.isDef(e.selfDescription)}};var p=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?g(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!g(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){g(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){p(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},hd=function(a){var b=
[],c={},d={noMe:!0};return{addFrame:function(e,f,g){var p=a.request("adProxy").getAll();e=new od(e,f,p,g);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Qa=function(a,b){var c=function(a,c){var e=c.adProxies,f="";if(c.isValidForMapping()){if(b)f+=d(e,c.getStringifiedPosition());else{var g;g=""+c.getStringifiedPosition();g+=c.isMe?"*":"";g+=e.length?"."+e[0].tagId:"";f+=g}return f}},d=function(a,b){var c="";return c=a.length?
c+g(a).stringify(function(a,c){return b+(k.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=g(b.list).stringify(c,"|");return g.toBase(b.getMe().unifiedId,62)+"+"+d}}},ld=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=k.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!v.embedded,f="BODY"!==u.getNodeName(c)&&"HEAD"!==
u.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var p=a.nodeSelector&&-1===a.nodeSelector.indexOf(l.AD_IDENTIFIER);g=!(g?p:!a.srcIsFriendly)}e&&f&&!g?a=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&v.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),a=!(!a||!e));return a};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==k.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},nd=function(a){var b=new fa,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return u.querySelector(c(a),b)},e=function(c,e){var f,p,r;try{p=d(c,e),p||(f=b.getFrames(!0,a),g(f).findFirst(function(a,b){return r=d(b,e)}))}catch(x){}return p||r||null};return{queryFor:function(b){var c=null;
b&&(c=e(a,b));return c}}},kd=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?k.oid:k.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==k.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},f=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},p=function(){var c=l.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",
c)},m=function(c,d,e){var f,m,q,r,k;try{f=a.request("frameCollection");m=a.request("adTalkMessageCollection");q=d.messageContent.self;m.add(d);var x=f.getMe();x.unifiedId>q.unifiedId&&(x.unifiedId=q.unifiedId);var v;v=t.now()-d.sentTime;d.transferDuration=v;m=r=f.getFrame(q.id);g.isUndef(m)||g.isUndef(m.selfDescription)?(r=r||f.addFrame(c.source,q.id.split("-"),d),r.addInformationFromSrc(d,q),e()):r.addInformationFromSrc(d,q);(k=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&p()}catch(K){n.getAggregator().trigger("error",
l.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:p,sendToKnownFrames:function(){(new ga).send(f)},startListening:function(){c=new Ia;c.listen(e,m,f)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:f}},pd=function(){var a=n.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},jd=function(){var a,b=[],c=function(a){a=new pd(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Ub=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(l.BROWSERS.IE)&&A.addEvent(t.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(l.BROWSERS.IE)&&(d=!0,t.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},qd=function(a,b){var c,d,e=l.NA,f=e,p=!1,m=!1,q=!1,r=!b,k=n.getAggregator().request("browser"),z=function(a,b){Kc().applies(k)&&
t.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},F=function(){var b=t.getIntersectionObserver(function(a,b){var d=a.pop(),g=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(g)&&(z(d.target,b),g=0);e=Math.min(g,100);c=d.boundingClientRect;e!==f&&t.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:l.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});
r&&t.execAtEndOfThread(function(){e===l.NA&&(e=0)});b.observe(y(a));r&&t.execAtEndOfThread(function(){v.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});p=!0},y=function(b){if(!g.isUndef(b)){if(q){b=a.document;var c=b.createElement("div");g(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[l.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(q=!0,b={bodyElement:a.document.body,
document:a.document})}catch(D){m=!0}b&&null!==b.bodyElement?F():b&&b.document?A.whenReady(F,b.document):m?n.getAggregator().request("errors").add(l.ERROR_CODES.BUSTED_IFRAME_IN_IO):F()},isReady:function(){return e!==l.NA},isStarted:function(){return p},getAdNodeDimensions:function(){var a;c&&(a=G({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},xa=function(){var a=!1;(function(){A.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},vc={name:"loopDelay",dependencies:[],creator:xa,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:l.TIERS.VIEWABILITY}},rd=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(l.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},sd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},lb=
function(a,b,c){var d=!1,e=function(){try{b.impressionIsIdentifiable()&&!d?(d=!0,n.getAggregator().trigger("notify",k._onMeasurable)):b.impressionIsIdentifiable()||__IntegralASDiagnosticCall("rtsmeas_imp_not_iden",{},k)}catch(f){__IntegralASDiagnosticCall("rtsmeas_send_noti_error",f,k)}};return{start:function(){try{var b,d=[td(),ud(),sd(),rd()];(b=g(d).findFirst(function(b,d){return d.isApplicable(c,a)}))?b.start(e):__IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy",{},k)}catch(m){__IntegralASDiagnosticCall("rtsmeas_start_error",
m,k)}},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&g.isDef(k._onMeasurable)}}},ud=function(){return{start:function(a){Mc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(l.BROWSERS.WEBKIT)||c)&&v.isVideo()}}},td=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&v.isVideo()}}},
vd=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},
wd=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&g.isDef(d)&&(c=d.mediaType||l.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.avidJsVersion,(c=g.isUndef(b))||(c=g.getNum(b.split(".")[0]),b=g.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},
xd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(e){}}}},yd=function(a,b,c){var d=["rjss",
"jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ca=function(a){var b=t.getWindow(),b=b&&b.omid3p,c=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&g.isFunction(b.registerSessionObserver)&&
g.isFunction(b.addEventListener));return{accepts:function(){return(d||e)&&!k.videoId},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},zd=function(a,b,c){var d=n.getAggregator().request("omidAdSessionContext"),d=d.isHtml&&d.isWeb,e,f=t.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a;e=d?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(e).find(function(a,
b){return b===c}));return b.accepts()&&b.isMediaType(l.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){p.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},Ec=function(a){return{resolve:function(){return g(a).findFirst(function(a,c){return c.environment.accepts()})}}},Bc=function(a){var b=!1,c=!1,d=!1,e=!1,f=n.getAggregator().request("omidAdSessionContext");
f.queuedOutputItems=[];f.cachedEvents=[];f.cachedGeometryEventsReceived=!1;f.cachedVideoEventsReceived=!1;f.recoveredTime=-1;var p=new ja,m=n.getAggregator().request("omidAdSessionVerificationParameters"),q=n.getAggregator().request("features"),r=t.getWindow(),l=(r=r&&r.omid3p)&&g.isFunction(r.registerSessionObserver)&&g.isFunction(r.addEventListener)?r:a,z=!1;f.omidEarlyExit=!1;f.mediaType="display";var F=!1,y=function(a,b){f.queuedOutputItems.push({code:a,value:b})},B=function(a,b,c){n.getAggregator().trigger(a,
b,c)},D=function(a){n.getAggregator().trigger(a)},N=function(){if(b&&c&&(!e||d)){w.omidSupported=!0;f.hasOwnProperty("impressionType")&&y("oiet",f.impressionType);f.hasOwnProperty("creativeType")&&y("oct",f.creativeType);f.underEvaluation&&y("oef",!0);z=f.exitedOASRS=!0;var a=m&&m.IAS&&0<Object.keys(m.IAS).length;za(a?m.IAS:m)}},u=function(a){function g(){return v.isOmidForWeb()||a.data.hasOwnProperty("supportsLoadedEvent")&&("true"===a.data.supportsLoadedEvent||!0===a.data.supportsLoadedEvent)&&
"string"===typeof a.data.creativeType&&""!==a.data.creativeType}var p="0";if("sessionStart"===a.type){f.adSessionType=a.data.context.adSessionType;f.environment=a.data.context.environment;f.accessMode=a.data.context.accessMode;f.omidNativeInfo=a.data.context.omidNativeInfo;f.omidJsInfo=a.data.context.omidJsInfo;f.deviceInfo=a.data.context.deviceInfo;f.app=a.data.context.app;f.supports=a.data.context.supports;f.app&&"string"===typeof f.app.appId&&-1<f.app.appId.toLowerCase().indexOf("pandora")&&(f.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(f.contentUrl=a.data.contentUrl);a.data.context.hasOwnProperty("underEvaluation")&&(f.underEvaluation=a.data.context.underEvaluation);f.isJavaScript="javascript"===f.adSessionType;f.isNative="native"===f.adSessionType||"javascript"===f.adSessionType;f.isLimitedSandbox="app"===f.environment?v.embedded:"full"!==a.data.context.accessMode;f.isHtml="html"===a.data.context.adSessionType;f.isWeb="web"===a.data.context.environment;m=a.data.verificationParameters;f.isOmidForWebEnvironment=
f.isHtml&&f.isWeb;f.element=a.data.context.videoElement||a.data.context.slotElement||null;g()?(e=!0,f.useOMID13Logic=!0,y("ohand","13"),l.addEventListener("video",Q),l.addEventListener("media",Q)):y("ohand","12");f.isOmidForWebEnvironment||(f.integratedBlocking=k&&k.isResolved&&v.integratedBlockingApplies(k.mobFwUrl),f.integratedBlocking&&q&&q.on("exitOASRSEarly")&&(f.omidEarlyExit=!0,p="1",f.omidEarlyExit&&-1<k.mobFwUrl.indexOf("xmtp=v")&&(f.mediaType="video")),!a.data.mediaType||"display"!==a.data.mediaType&&
"video"!==a.data.mediaType||(f.mediaType=a.data.mediaType));f.omidEarlyExit&&(c=!0,y("omtp",f.mediaType),g()&&(d=!0),"video"===f.mediaType&&(f.isVideo=!0),f.isNativeVideo=f.isNative&&f.isVideo,f.isDisplay="display"===f.mediaType);for(var r=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],n,x,t,D=0;D<r.length;D++)n=r[D].root,x=r[D].field,t=r[D].code,"object"===typeof f[n]&&"undefined"!==typeof f[n][x]&&y(t,f[n][x]);y("oast",f.adSessionType);y("oacm",f.accessMode);y("oenv",f.environment);f.hasOwnProperty("contentUrl")&&
y("ocon",encodeURIComponent(f.contentUrl||""));y("oerl",p);y("oses",v.getTagTime());b=!0;N()}"sessionError"===a.type&&(p=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),z?B("addOutputItem",{output:p},"oser"):y("oser",p))},K=function(a){"impression"===a.type&&(f.omidImpressionArrived=!0,D("omidimpressionarrived"),f.mediaType="web"===f.environment?a.data.mediaType||"video":a.data.mediaType,y("omtp",
f.mediaType),y("oimp",v.getTagTime()),"video"===a.data.mediaType&&(f.isVideo=!0),a.data.adView&&(a.data.viewport||f.isWeb)&&(f.impressionViewabilityMeasurement={type:"geometryChange",data:{viewport:a.data.viewport,adView:a.data.adView},timestamp:a.timestamp},"undefined"===typeof f.geometryArrived&&p.checkForViewAttachmentBasedOnAdSessionType(f,a.data.adView)&&(f.geometryArrived=!0,D("omidrendgeoupdate"))),a.data.hasOwnProperty("impressionType")&&!d&&(f.impressionType=a.data.impressionType),f.isNativeVideo=
f.isNative&&"video"===a.data.mediaType,f.isDisplay="display"===a.data.mediaType,c=!0,N())},Q=function(a){a&&"start"===a.type?(f.videoStartArrived=!0,D("omidrendvideostart")):"loaded"===a.type&&(y("oloa",v.getTagTime()),d=!0,f.omidLoadedArrived=!0,D("omidloadedarrived"),a.data.hasOwnProperty("creativeType")&&(f.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(f.impressionType=a.data.impressionType),!0!==f.omidEarlyExit||F||(B("addThrottledOutputItem","oiet",f.impressionType),
B("addThrottledOutputItem","oct",f.creativeType),F=!0),N())};return{start:function(){l.registerSessionObserver(u,"IAS");l.addEventListener("impression",K)}}},Cc=function(){return{accepts:function(){return!0}}},La=function(){var a=n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new ca(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Dc=function(){return{start:function(){za(k.contextNode&&(k.contextNode.dataset.iasParameters||
k.iasParameters))}}},Ad=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(e){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Bd=function(a,b){var c,d=function(a){var d,e,g;try{d=a.eventData.percentageInView,e=c&&75<=d,g={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},
shouldDelegateToDomBasedViewability:e,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",g)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Cd=function(a,b){var c=[],d=(new Date).getTime(),e=0,f=0,p=!1,m=
new Na,q=n.getAggregator().request("omidAdSessionContext"),r=t.getWindow(),x=(r=r&&r.omid3p)&&g.isFunction(r.registerSessionObserver)&&g.isFunction(r.addEventListener)?r:a,z=!1,v={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("rt:"+d.rt+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},y=function(){p=!0},B=
function(a){if(-1!=="|start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish|complete|pause|bufferStart|skipped|playerStateChange|loaded|volumeChange|".indexOf("|"+a.type+"|")){z&&(q.cachedVideoEventsReceived=!0,"start"===a.type&&(q.cachedStartEventIndex=q.cachedEvents.length),q.cachedEvents.push(a));try{var m="",r=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),x=r-(k.birthdate||r+1),y="n",t=!1;switch(a.type){case "start":m="adVideoStart";q.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");
d=r;f=a.data.duration;1E3<f&&(f/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":m="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":m="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);t=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":m="pauseAd";break;case "resume":case "bufferFinish":m="resumeAd";break;case "skipped":m="adSkipped"}if(""!==m){var B=n.getAggregator().request("mScreenEvents");
B&&(y=B.getCurrentLoc());c.push({t:r-d,rt:x,tp:m,sl:y,ad_duration:f,volume:e})}if("loaded"===a.type&&g.isDef(a.data)){var v=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),m=-1!==v?v+1:void 0,r=[];!0===a.data.autoPlay?r.push("autoplayed"):r.push("clicktoplay");!0===a.data.skippable&&r.push("skippable");"fullscreen"===a.data.state&&r.push("fullscreen");var F=r.join(".");!0===p?(g.isDef(m)&&n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,"vbp",m),n.getAggregator().trigger("addThrottledProp",
l.DT_SLOT.ENVIRONMENT,"vps",F)):(g.isDef(m)&&n.getAggregator().trigger("addOutputItem",{output:m},"vbp",{type:l.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:F},"vps",{type:l.IMPRESSION_EVENT}))}"start"===a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:f});var D;"playerStateChange"===a.type?D="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?D="AdPlaying":
-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(D="AdPaused");g.isDef(D)&&b.trigger("videoPlaybackEvent",{eventType:D,eventData:null});t&&n.getAggregator().trigger("sendDt",l.DT_CODES.VIDEO_EVENTS)}catch(O){__IntegralASDiagnosticCall("omidvideo",O,w.bootstrapper)}}};return{start:function(){n.getAggregator().on("impressionsent",y);n.getAggregator().provide({omidVideoEventsString:v});z=!0;x.addEventListener("video",B);z=!1;q.cachedVideoEventsChecked=!0;q.cachedVideoEventsReceived&&q.processCachedEvents();
m.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ra=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?l.IN_VIEW:l.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":l.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.DISPLAY_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.DISPLAY},
addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Dd=function(a,b,c){var d=g.isDef(a)?a.environment:void 0,e=g.isDef(a)?a.measurementStrategy:void 0,f=function(){return g.isDef(e)};g.isDef(b)&&b.start();return{hasMeasurementStrategy:f,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return f()?d.isImmediate():!0},isMeasurable:function(){return f()?e.isMeasurable():!1},isMediaType:function(a){return f()?d.isMediaType(a):
!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){f()&&d.start()},requiresDelayedViewabilityEvent:function(){f()&&b.requiresDelayedViewabilityEvent()}}},Kb=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ka(b)).resolve())||n.getAggregator().trigger("addOutputItem",
{output:"0"},"oam",{type:"impression"});var c=new Ed(b);return new Dd(b,c,d.isMobileAppEnvironment())}}},Lb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new ca(a),e=[];if(b.accepts()){var f=new ha,g=new Fd,m=new La,q=n.getAggregator().request("omidAdSessionContext"),r=new Gd(a,new E),f=[{environment:f,measurementStrategy:new Hd(a,new E)},{environment:m,measurementStrategy:new Id(new Sa,
t.getWindow(),new E)},{environment:g,measurementStrategy:new Ta(new la,t.getWindow(),new E)}],f=(f=(new ka(f)).resolve())?f.measurementStrategy:{},m=new Ua(new Va(new W),new W,q.isHtml),q=new yd(a,b,k.mode),g=new Wa(r,f,new E,m),b=new zd(a,b,k.mode),a=new Xa(r,f,new Cd(a,new E),new E,m);e.push({environment:q,measurementStrategy:g});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),d=new wd(b),e=[];if(d.accepts()){var f=
new vd(b,d,k.mode),g=new xd(b,d,k.mode),m;m=new Ad(b,new E);if(d.supportsAdContainerGeometry()){var q=new Jd,r=new Kd,l=new Ta(new la,t.getWindow(),new E),z=new Ld(b,new E),q=(q=(new ka([{environment:q,measurementStrategy:z},{environment:r,measurementStrategy:l}])).resolve())?q.measurementStrategy:{},r=new Ua(new Va(new W),new W,r.accepts()),l=new Md(b,new E),b=new Wa(l,q,new E,r);m=new Xa(l,q,m,new E,r)}else r=new Bd(b,new E),b=new Ra(r,new E),m=new Ya(r,m,new E);e.push({environment:f,measurementStrategy:b});
e.push({environment:g,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Nd(t.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Od(t.getWindow(),e),f=new Pd(t.getWindow(),new E);e.accepts()?(d=new Qd(t.getWindow(),new E),d=new Ya(f,d,new E),d={environment:e,measurementStrategy:d}):(e=new Ra(f,new E),d={environment:d,measurementStrategy:e});
a.push(d)}return a}}},ka=function(a){return{resolve:function(){var b=g(a).findFirst(function(a,b){return b.environment.accepts()});if(g.isDef(b))return b}}},Ed=function(a){var b=!1,c,d={winDimensions:G({scrX:0,scrY:0,width:0,height:0}),adDimensions:G({scrX:0,scrY:0,width:0,height:0}),containerDimensions:G({scrX:0,scrY:0,width:0,height:0}),method:l.NA,viewState:l.NA,percentInView:l.PIV_NA,reason:"",obstructed:l.NA,isHidden:l.NA,tabHidden:l.NA,posViewState:l.NA,adCompCount:1},e=function(a){return a?
new G({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):G({scrX:0,scrY:0,width:0,height:0})},f=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||l.NA,viewState:a.viewState||l.NA,percentInView:g.isDef(a.percentageInView)?a.percentageInView:l.PIV_NA,reason:a.outOfViewReason||"",obstructed:g.stringifyTriState(a.isObstructed),isHidden:l.NA,tabHidden:l.NA,posViewState:a.viewState||l.NA,adCompCount:1,
shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;g.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(g.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=
b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;g.isDef(a)&&g.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(f),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ya=function(a,b,c){var d=!1,e=!1,f=!1,p,m,q,r,k=function(){if(!g.isUndef(m)){var a=[],b,k;d?(e?(k=!1,b=100):(k=r,b=q),50>b&&a.push(l.OUT_OF_VIEW_REASONS.GEOM)):(k=!1,b=0,a.push(l.OUT_OF_VIEW_REASONS.VIDEO));f=!0;m.shouldDelegateToDomBasedViewability=
k;m.percentageInView=b;m.viewState=50>b?l.OUT_OF_VIEW:l.IN_VIEW;m.outOfViewReason=a.join(".");p=m;c.trigger("measurementChanged",p)}},z=function(a){m=a;q=a.percentageInView;r=a.shouldDelegateToDomBasedViewability;k()},t=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);k()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:l.MEDIA_TYPE.VIDEO_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addScreenLocationChangedListener(z);a.start();b.addVideoPlaybackEventListener(t);b.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return f}}},Od=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Qd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(e){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(d){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Md=function(a,b){var c=function(a){var c=new G(a.eventData.viewport||
{width:0,height:0}),e=new G(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),g=new G(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:e.getRoundedGeometry(),computedAdContainer:g.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:l.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:l.OUT_OF_VIEW_REASONS.FOCUS,
viewport:l.OUT_OF_VIEW_REASONS.GEOM,clipped:l.OUT_OF_VIEW_REASONS.GEOM,obstructed:l.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:l.OUT_OF_VIEW_REASONS.FOCUS,notFound:l.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
Ua=function(a,b,c){function d(a,b,c){c=m(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width)-c,f=Math.min(a.y+a.height,b.y+b.height)-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},p=function(a,b){var c=v.isOmidForWeb(),d=!v.isOmidSandboxedEnvironment(),c=c&&d;return{x:c?b.x:a.x+b.x,y:c?b.y:a.y+b.y,width:b.width,height:b.height}},m=
function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,r){if(g.isDef(e)&&g.isDef(r)){var q=e.viewport,k=e.computedAdContainer,n=k.obstructions,y=e.omidObstructions,B=n&&0<n.length,v=e.originalAdContainer,u=r.adGeometry,M=r.adFound,K=e.detectionMethod,Q=0,q={x:0,y:0,width:q.width,height:q.height},w=p(v,u),A=e.outOfViewReason,P=B||!1,R=1>=u.width*u.height;c&&R&&(M=!1,A=A||"",M||-1!==A.indexOf(l.OUT_OF_VIEW_REASONS.GEOM)||(A=l.OUT_OF_VIEW_REASONS.GEOM+
(""!==A?"."+A:"")));if(M&&0<e.percentageInView){Q=d(q,k,w);B?(u=m(k,w),u=f(q,k,u),u=p(k,u),n=a.calculateObstructedArea(u,n)):n=0;Q=Math.round((Q-n)/(w.width*w.height)*100);B&&0===n&&(P=!1);for(var M=(new G(w)).getRoundedGeometry(),R=P,L,O=b.getConfig(M).numberOfSlices,S=t.floor(M.height/O)||1,n=[],u=R?a.getObstructionStatusBySlice(O):[],ea,B=0;B<O;B++)L=M.y+S*B,B==O-1&&(S=M.y+M.height-L),L={x:M.x,y:L,width:M.width,height:S},ea=d(q,k,L),L=1==ea/(L.width*L.height),n.push(L);if(R)for(k=t.min(u.length,
O),B=0;B<k;B++)n[B]=n[B]&&!u[B];k=n}else k=b.getConfig(u).defaultSliceArray;v={windowDimensions:q,containerDimensions:v,adDimensions:w,percentageInView:Q,viewState:50<=Q?l.IN_VIEW:l.OUT_OF_VIEW,outOfViewReason:50<=Q?"":A||l.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:K,isObstructed:P,sliceStatus:k};g.isDef(y)&&""!==y&&(v.omidObstructions=y);return v}}}},Jd=function(){return{accepts:function(){return v.isAvidNative()}}},Ld=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=
(new G({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Kd=function(){return{accepts:function(){return v.isAvid()&&!v.isAvidNative()}}},Wa=function(a,b,c,d){var e,f,p,m=function(){if(g.isDef(e)&&g.isDef(f)){var a=d.calculateGeometricMeasurement(e,f);p=a.isMeasurable=
!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;m()},r=function(a){f=a;m()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.DISPLAY_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(r);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return p}}},Va=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var f,p,m,q;f=e&&0<e.length;var l;if(f){l=Math.round(d.width);var k=Math.round(d.height);p=Array(l);for(m=0;m<l;m++)p[m]=Array(k);l={matrix:p,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:l,height:k}}else l={};p=l;k=l=0;if(f){for(;l<e.length;l++){f=e[l];var k=p,n=Math.max(k.x,f.x);p=Math.max(k.y,f.y);m=Math.min(k.x+k.width,f.x+f.width)-n;q=Math.min(k.y+k.height,f.y+f.height)-
p;f=n;m=0<m?m:0;q=0<q?q:0;n=f-k.x;f=p-k.y;p=n+m;m=f+q;for(q=Math.round(n);q<Math.round(p);q++)for(n=Math.round(f);n<Math.round(m);n++)void 0!==k.matrix[q]&&void 0===k.matrix[q][n]&&(k.matrix[q][n]=1,k.obscuredPixelCount+=1);p=k}k=p.obscuredPixelCount;l=p;if(g.isUndef(l.matrix)||0===l.matrix.length)c=[];else{f=0;p=l.matrix[0].length;m=l.matrix.length;q=a.getConfig({height:p}).numberOfSlices;for(var n=t.floor(p/q)||1,v=[],y=0;y<p;y++){q=!1;for(var B=0;B<m;B++)if(1===l.matrix[B][y]){q=!0;break}f++;q&&
(y+=n-f,f=n);if(f==n||y===p-1)v.push(q),f=0}c=v}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Gd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext");c.geometryChangeEvents=[];var d=null,e=!1,f=t.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new ja,q=!1,r=!1,x=function(){var a=t.getDoc().getElementById("iasbi"+k.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(z(d),
d=null)):t.setTimeout(x,50)},z=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView){q&&(c.cachedGeometryEventsReceived||(c.cachedFirstGeometricIndex=c.cachedEvents.length),c.cachedGeometryEventsReceived=!0,c.cachedEvents.push(a));var f=a.data.adView,p=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry),r=c.cachedStartEventIndex;if(!q&&c.unrecoveredPlayTime&&-1<r&&50<=f.percentageInView){var r=t.now()-c.cachedEvents[r].timestamp,z=n.getAggregator().request("mScreenEvents");
z&&z.setRecoveredTimeInSlTimes&&z.setRecoveredTimeInSlTimes(r)}10>c.geometryChangeEvents.length&&(c.geometryChangeEvents.push(a.timestamp-k.birthdate+"."+f.percentageInView),n.getAggregator().trigger("addOutputItem",{output:c.geometryChangeEvents.join("_")},"og"));if(c.delayingViewabilityEvents)d=a,e||(e=!0,x());else{var y=[];f.onScreenGeometry&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(p&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions),
f.reasons&&-1<f.reasons.indexOf("obstructed")&&100>f.percentageInView&&(f.onScreenGeometry.obstructions=f.onScreenGeometry.obstructions.slice(0,4),g(f.onScreenGeometry.obstructions).each(function(a,b){y.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));r=v.isOmidForWeb()?u.calcWinDims():{width:0,height:0};r=new G(a.data.viewport||r);z=new G(p?f.containerGeometry:f.geometry||{x:0,y:0,width:0,height:0});p=new G(p?f.onScreenContainerGeometry:f.onScreenGeometry||
{x:0,y:0,width:0,height:0});f={viewport:r.getRoundedGeometry(),originalAdContainer:z.getRoundedGeometry(),computedAdContainer:p.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:l.DETECTION_METHODS.OMID,outOfViewReason:F(f.reasons),omidObstructions:y.join("_")};"undefined"===typeof c.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
f)}}},F=function(a){var b={inactive:l.OUT_OF_VIEW_REASONS.FOCUS,viewport:l.OUT_OF_VIEW_REASONS.GEOM,clipped:l.OUT_OF_VIEW_REASONS.GEOM,obstructed:l.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:l.OUT_OF_VIEW_REASONS.FOCUS,notFound:l.OUT_OF_VIEW_REASONS.HIDDEN,hidden:l.OUT_OF_VIEW_REASONS.HIDDEN,noWindowFocus:l.OUT_OF_VIEW_REASONS.WINDOW},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};c.processCachedEvents=function(){if(!r&&c.omidNativeInfo&&
"string"===typeof c.omidNativeInfo.partnerName&&"bytedance"===c.omidNativeInfo.partnerName.toLowerCase()){var a="video"===c.mediaType,b=c.supports&&-1<c.supports.join().indexOf("clid"),d="full"===c.accessMode,e=!a||c.cachedVideoEventsChecked,f=c.cachedGeometryEventsChecked;if(("limited"===c.accessMode||d&&b)&&f&&e&&0<c.cachedEvents.length){var d="o",g,b=f=e=0,m=!a,p=!1,q=t.now();if(a){var l=c.cachedEvents[c.cachedFirstGeometricIndex];g=c.cachedEvents[c.cachedStartEventIndex];l&&g&&l.timestamp>g.timestamp&&
(l.timestamp=g.timestamp)}for(l=0;l<c.cachedEvents.length;l++){g=q;for(var k=-1,x=0;x<c.cachedEvents.length;x++)!c.cachedEvents[x].alreadyOrdered&&c.cachedEvents[x].timestamp<g&&(g=c.cachedEvents[x].timestamp,k=x);-1!==k&&(k=c.cachedEvents[k],k.alreadyOrdered=!0,"geometryChange"===k.type&&k.data&&k.data.adView?(e=k.data.adView.percentageInView,p=!0):m=-1<"start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(k.type),g=e&&50<=e&&m?"i":"o","o"===d&&"i"===g?f=k.timestamp:"i"===d&&"o"===
g?b+=k.timestamp-f:"i"===d&&"i"===g&&(b+=k.timestamp-f,f=k.timestamp),d=g)}r=!0;"i"===d?b+=t.now()-f:a&&!p&&-1<c.cachedStartEventIndex&&(c.unrecoveredPlayTime=!0);0<b&&(c.recoveredTime=b,(a=n.getAggregator().request("mScreenEvents"))&&a.setRecoveredTimeInSlTimes&&(a.setRecoveredTimeInSlTimes(b),c.recoveredTime=-1))}}};return{start:function(){q=!0;void 0!==c.impressionViewabilityMeasurement&&z(c.impressionViewabilityMeasurement);p.addEventListener("geometryChange",z);q=!1;c.cachedGeometryEventsChecked=
!0;c.cachedGeometryEventsReceived&&c.processCachedEvents()},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(l.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:F}},ha=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Hd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=t.getWindow(),p=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&
g.isFunction(f.addEventListener)?f:a,m=new ja,q=function(){var a=t.getDoc().getElementById("iasbi"+k.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(r(d),d=null)):t.setTimeout(q,50)},r=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,q());else{var f=a.data.adView.geometry,g=a.data.adView.containerGeometry,p=!!f,k=a.data.adView.measuringElement&&!!g,f=(new G({x:p&&k?f.x-g.x:0,y:p&&k?f.y-g.y:0,width:p?f.width:
0,height:p?f.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:p})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&r(c.impressionViewabilityMeasurement);p.addEventListener("geometryChange",r)},addAdGeometryMeasurementChangedListener:function(a){b.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Fd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Id=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)&&null!==b?(m=!0,e=b.getBoundingClientRect(),e={x:e.x||e.left,y:e.y||e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);if(b||q)d=e,c.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,
{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Xa=function(a,b,c,d,e){var f=!1,p=!1,m,q,k,t,z,v=function(){if(!(g.isUndef(q)||g.isUndef(k)||g.isUndef(t))){z=!0;var a=e.calculateGeometricMeasurement(q,k),b=f&&p,c=f&&50<=a.percentageInView,r={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,
detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:f,isVideoPlayingInFullscreen:b,isSoundOn:!0},n=a.omidObstructions;g.isDef(n)&&""!==n&&(r.omidObstructions=n);b&&(r.percentageInView=100);b||c?r.viewState=l.IN_VIEW:(r.viewState=l.OUT_OF_VIEW,r.outOfViewReason=a.outOfViewReason||l.OUT_OF_VIEW_REASONS.VIDEO);m=r;d.trigger("videoGeometryMeasurementChanged",m)}},y=function(a){q=a;v()},u=function(a){k=a;v()},D=function(a){t=a;a=a.eventType;
"AdEnteredFullscreen"===a?p=!0:"AdExitedFullscreen"===a?p=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?f=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(f=!1);v()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:l.MEDIA_TYPE.VIDEO_CODE},l.MEDIA_TYPE_CODE,{type:l.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(y);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(D);
c.start()},getStrategyName:function(){return l.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return z}}},Ta=function(a,b,c){var d,e=function(){var b=a.find(),e,m,q=!1;g.isDef(b)?(m=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!g.isDef(d)||!1!==g(b).compareTo(d);
if(b||q)d=e,c.trigger(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(l.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Nd=function(a,b,c){return{accepts:function(){var d=g(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Pd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:
0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:l.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(F){}},e=function(){var b=a.mraid;return g(b).isObj()&&g.isFunction(b.isViewable)},f=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},p=function(){var b=a.mraid;
e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){f()}):f())},m=function(){c||p()};return{start:function(){var b=!0;if(g.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:g.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec","mraid.js",m):p()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},hc=function(a,b,c){var d={},e=function(c){var d=g.noop;b.bootstrapOn("useViewabilityNotification")&&
(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",c)});return d};(function(){c&&g(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},xb=function(){var a=new T({tiv:[1E4]}),b=g([l.IN_VIEW,l.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:l.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var c=t.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===c},applies:function(a,b){return a.on("abcAudit")&&925955==k.anId&&
b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},wb=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var g=[2E3,5E3,15E3],m=function(a,b){return-1!==(l.IN_VIEW+"|"+l.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new T({tiv:d}),d=d[0]):f?(c=new T({tiv:g}),d=g[0]):(c=new T({tiv:e}),d=e[0]);e={5E3:k._onInViewMRC5,15E3:k._onInViewMRC15};
e[d]=k._onInViewMRC;return{timeInViewThresholds:c,type:l.DT_CODES.PING,rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},zb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],g=[1E3,5E3,15E3],m=[2E3,5E3,15E3],k=function(a){var b=t.max(a.fullPercentInView||0,a.percentInView);return-1!==(l.IN_VIEW+
"|"+l.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new T({tiv:f}):d?new T({tiv:m}):new T({tiv:g});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:k});return{timeInViewThresholds:c,type:l.DT_CODES.FULLY_INVIEW,isInView:k,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},yb=function(a,b){return{timeInViewThresholds:new T({tiv:[0]}),type:l.DT_CODES.FULLY_INVIEW,rts:{0:k._onInViewFull},isInView:function(a){var b=t.max(a.fullPercentInView||0,a.percentInView);return-1!==
(l.IN_VIEW+"|"+l.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Bb=function(a,b){var c,d,e,f=t.getMaxNumber(),p=b.isVideo(),m=a.id;d=a.sound&&"on"===a.sound;var q=!(a.soundExcl&&"groupm_native"===a.soundExcl&&k.groupm_native_publisher)&&d,r=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,m,k,r=b.adDimensions.area();k=1===b.tabHidden;var n=t.max(b.fullPercentInView||
0,b[d]),d=g(a.thresholds).findFirst(function(a,b){e=b.lb||0;m=b.ub||f;if(r>=e&&r<=m)return!0});k=!k&&n>=d.piv;b.method==l.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(k=!1);p&&(k=k&&b.isVideoPlaying,q&&(k=k&&b.isSoundOn));return k};c=new T(a);d=a.qiv;(function(){e={};var a;g.isDef(k.rts)&&g.isDef(k.rts[m])&&(a=c&&g.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=g.isDef(a)?g.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():l.RTS_KEY_FOR_VQ,e[a]=k.rts[m])})();return{timeInViewThresholds:c,
qivThreshold:d,type:l.DT_CODES.CUSTOM,rts:e,isInView:r,isInViewIgnoringRender:function(a){return r(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:q,sendOtherwiseInViewSignal:!0}},Ab=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",f=b.isDeviceTypeGroupMobile()?"mobile":"desktop",p=g(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),k=c.on("groupmCM"),l=function(a,b){var c,m,p,
l,q;c=g(b.mediaTypes).contains(d);m=g(b.distributionChannels).contains(e);p=g.isDef(b.deviceGroups)?g(b.deviceGroups).contains(f):!0;l=J.contains(b.id,"fiv");q=J.contains(b.id,"groupmCM");l=!l;q&&(l=k);return l&&c&&m&&p};return{resolve:function(){var b=[],c;m&&p&&(c=g(a.customViewability).filter(l),g(c).each(function(a,c){b.push(c)}));return b}}},T=function(a){var b=[];if(g(a.tiv).isArray())g(a.tiv).each(function(a,c){b.push(new ma(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Rd;
b.push(new Sd(c,parseInt(a[1].replace("%"))));b.push(new ma(1E3*parseInt(a[0])))}else g.isDef(a.tiv)&&b.push(new ma(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Rd=function(){var a=-1,b=function(b){0<a||(b=g.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ma=function(a){var b=0,
c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Sd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=t.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},Ca=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};
return{start:function(){a.addMeasurementChangedListener(f)}}},ic=function(a,b,c,d){var e,f,p,m,k,l,t=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},u=function(a){var q=0,r=1===a.tabHidden,n=a.isVideoPlaying,t=a.isSoundOn,x=a.isVideoPlayingInFullscreen;g(a.sliceStatus).each(function(a,b){p(b,r,n,x)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});y("slcVt",m);d&&(g(a.sliceStatus).each(function(a,b){v(b,r,n,x)&&t?f[a].mark():f[a].stop();k[a]=f[a].getTotalTime()}),y("slcVtVol",
k));l=d&&b&&b.shouldIncludeSound?k:m;a=g(l).findFirst(function(a,b){q=Math.max(q,b);return 0>=b});g.isUndef(a)&&c.doEligibleJobs(q)},y=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},B=function(a){!e&&a.sliceStatus&&(e=[],f=[],m=[],k=[],g(a.sliceStatus).each(function(a){e.push(new Y(1));m.push(0);d&&(f.push(new Y(1)),k.push(0))}))},D=function(a){g.isUndef(a.sliceStatus)||(e||B(a),u(a))};return{start:function(){p=d?v:t;a.addMeasurementChangedListener(D)}}},
Aa=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},dc=function(a,b,c,d,e,f,g,m,k,r){var p=!1,q=v.isVideo(),n=f.request("mobileApp"),y=Z().applies(c,e),u=c.browserIs(l.BROWSERS.GECKO)||c.browserIs(l.BROWSERS.IE)&&e.on("rattie")||y,D=v.xDomainIframe&&!u,w=new Ja(10),A=function(){e.on("viewabilityready")&&!p&&(d.send(l.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),p=!0)};
f.on("delayedViewabilityReady",function(){K();A()});f.on("delayedViewabilityReadyCallOnly",A);var K=function(c){c=c||!1;try{w.start();var d,e;b.hasMeasurementStrategy()?e=(n.isMobileAppEnvironment()||v.isOmidNative())&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),n.isMobileAppEnvironment()?(e.viewState=l.NA,e.method=l.NA,e.percentInView=l.NA):D&&(e.viewState=l.NA,e.percentInView=l.PIV_NA),q&&!v.isAvid()&&r.setVideoSpecificScreenEventFields(e));
d=k.registerLocation(e);c||a.trigger("measurementChanged",e);w.stop();var p=t.round(w.getTime()/w.getCount());g.addItem({output:p},"lt",{type:l.DT_CODES.UNLOAD});return d}catch(R){f.trigger("error",l.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:K,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":q?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=v.xDomainIframe,d=a&&c.browserIs(l.BROWSERS.WEBKIT),e=a&&c.browserIs(l.BROWSERS.MSEDGE),
a=a&&y,d=!d&&!e&&!a;return n.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){n.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},wc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,f=Td(c),p=[new Ud,new Vd(f)],m=function(){return g(p).findFirst(function(a,e){return e.applies(d,
b,c)?e:void 0})},q=function(a){"sessionFinish"===a.type&&(n.getAggregator().trigger("addOutputItem",{output:v.getTagTime()},"osef"),n.getAggregator().trigger("adSessionComplete"))},r=function(a){A.addEvent(w,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},x=function(){var a=new aa(l.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:k.videoId,msg:"unloadComplete",messageType:"misc"};t.getWindow().postMessage(JSON.stringify(a),"*")})};
n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Qc(a.checkScreenLoc,f.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),v.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(q,"IAS"):c?r("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):r("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||
c.isAvid()||c.isOmid()||x();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:l.TIERS.VIEWABILITY}},Td=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Vd=function(a){var b,c,d,e,f,g=function(m){d&&!f&&1>m?(f=!0,t.setTimeout(function(){g(m)},1E3)):(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):
c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){g(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",g);n.getAggregator().on("newScreenEvent",m)}}},Ud=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,t.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},f=function(){b.start(!0)};
return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Z();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",f)}}},ce=function(a,b,c,d,e,f){var p,m,q,r,x,z,F,y,B,D=u.getElementsWindow(b);u.getElementsDocument(b);n.getAggregator().provide("iframeCalculatorHelper",Wd(D));var N=Xd(b,d),M=l.AD_IDENTIFIER+"-"+k.asid,K=!1,Q=G({}),E=v.isDeviceTypeGroupMobile(),
C=v.usesGroupMCustomMetricMobilePassThru(),J,H=function(){if(!p)if(p=N.calcDims(b,d,q),k.autotagSizeSet&&1<k.adWidth&&1<k.adHeight&&(p.set("width",k.adWidth),p.set("height",k.adHeight)),c===l.DETECTION_METHODS.VIDEO&&v.embedded){var a=p,e=(new G(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(Qe){n.getAggregator().trigger("error",l.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===l.DETECTION_METHODS.AD_PLACEHOLDER&&p.treatAsPlaceholder();return p},L=function(){var b,d=v.xDomainIframe&&
K;b=E&&K&&q.isReady();b=d||b;d=N.getClippedDims&&(c===l.DETECTION_METHODS.VIDEO&&v.embedded||v.isCeltra());b?m=q.getPiv():g.isUndef(m)&&(b=!E&&(v.friendly||g.isDef(w.mozInnerScreenX))&&e.on("offscreen"),y=H(),F=new G(u.calcWinDims()),z=new G(b?u.calcMonDims():{}),B=d?N.getClippedDims():Q,m=a.calcPercentInView(y,F,z,B));return m},O=function(){return a.calcInitialViewState(L())},S=function(){return b===w?!1:H().isHidden()};(function(){var d=t.getWindow(),e=t.getDoc(),f=b===d,g=e.body,m=n.getAggregator(),
k=new Z,p=m.request("browser"),y=m.request("features"),m=m.request("context"),z=!v.xDomainIframe,e=f&&g?e.body:b;J=v.friendlyIframe?d.frameElement:e;A.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});A.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});k.applies(p,y,m)?(q=qd(b,z),q.start(),K=!0,C&&c!==l.DETECTION_METHODS.AD_PLACEHOLDER&&(d=new Yd(H().getRounded()),k=new Zd,k=new $d(q.getObservedNode(),k),r=new ae(d.getSlices(),k))):
C&&(x=new be(a))})();return{mark:function(){u.setAttributeOf(J,M,"")},cleanup:function(){u.removeAttributeOf(J,M)},isNode:function(a){return b===a},isHidden:S,isObstructed:function(){return!1},getDims:H,getPercentInView:L,getLocationState:O,getOnPageViewability:function(){return S()?l.OUT_OF_VIEW:O()},getDetectionMethod:function(){return c},getContainerDims:function(){return N.allowsOptimization?p:G(d)},refresh:function(){B=y=F=z=m=p=void 0;if(f){var a,c;if(!v.isDomless()&&(c=b.parentNode)){for(;b!==
w&&c&&c!==I&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;r&&r.isReadyToMeasure()?a=r.getSliceStatus():v.friendly&&x&&g.isDef(y)&&(a=x.getSliceStatus(y,F,z,B));return a}}},de=function(a,b){var c=[],d,e=g([]),f=function(){return c[0]&&c[0].getDetectionMethod()===l.DETECTION_METHODS.AD_PLACEHOLDER},k=function(m,k,p,q){var r=f()||0===c.length;m=ce(a,m,k,p,b,q);f()&&(p=c.shift(),e=g(c),p.cleanup(),d=void 0);c.push(m);e=g(c);r&&m.mark();
r&&k!==l.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var g;g=e.getDims();g.hasValidDims()&&(a=e.getPercentInView(),b=a!==l.NA,g=g.area(),c+=g,f+=a/100*g)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},q=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},r=function(a){var b;b=m();b=b.hasMeasurement?t.round(b.totalInView/b.totalArea*100):l.PIV_NA;if(isNaN(b)||q(a))b=
0;return b},x=function(c){var d=b.bootstrapOn("mobOrTab"),d=m().totalArea>=l.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!v.isVideo();return a.calcInitialViewState(r(c),d)},z=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},u=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){g(a).each(function(a,b){-1===z(b)&&k(b,l.DETECTION_METHODS.MUTATION)})});n.getAggregator().on("adComponentRemoved",function(a){g(a).each(function(a,
b){var d=z(b);-1<d&&c.splice(d,1)})});return{getDims:u("getDims"),isObstructed:u("isObstructed"),getDetectionMethod:u("getDetectionMethod"),getContainerDims:u("getContainerDims"),getViewState:x,getViewStateIgnoringRender:function(){return x(!0)},getPercentInView:r,getPercentInViewIgnoringRender:function(){return r(!0)},isHidden:u("isHidden"),isUsingPlaceholder:f,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:k,clearCollection:function(){e.each(function(a,
b){b.cleanup()});c=[];e=g([]);d=void 0},getOutOfViewReasons:function(a){var b,e=[],f=c[0],g=l.OUT_OF_VIEW_REASONS;f&&(b=d||x(),q(a)?e.push(g.RENDER):b!==l.OUT_OF_VIEW&&b!==l.PARTIAL_VIEW_MINUS||e.push(g.GEOM),f.isHidden()&&e.push(g.HIDDEN),f.isObstructed()&&e.push(g.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:u("getSliceStatus")}},ee=function(a){var b=!1;if(!g.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){t.execAtEndOfThread(function(){b&&
g(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;t.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);A.whenReady(function(){try{c.observe(I.body,{attributes:!0,childList:!0,characterData:!0})}catch(e){a.add(l.ERROR_CODES.AC_WATCHER)}},t.getDoc())}},le=function(a,
b){var c=[fe(),ge()],d=[Sa(),la(),he(),Za(),ie(),je(),ke()],c=c.concat(d);return g(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Za=function(){var a,b,c,d=function(a){a?a&&c&&(t.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ia();var c=u.crossQuerySelector(ia().getCssSelector(),!0);a=c?c.parentNode:
a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},me=function(a,b){var c,d=u.findChildWithLargestContent(a||k.contextNode.parentNode,b);1<u.getNodeArea(d)&&!d[l.IAS_DETECTOR]&&(c=d);return c},Sa=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.OMID,isApplicable:function(){return v.isOmidForWeb()&&!v.isOmidNative()},find:function(){a.element||a.queuedOutputItems.push({code:"oea",value:!0});
return a.element},getAdContainer:function(){return a.element&&a.element.parentNode},allowForAdContainerChange:!0}},je=function(){return{detectionMethod:l.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return v.embedded},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},ne=function(){var a,b=t.getDoc().scripts,c=function(){a||(a=g(b).findFirst(function(a,b){return J.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,
d=a||c(),g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return b};return{detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=g(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return u.crossQuerySelector(b,!0)})}catch(p){}return a}}},oe=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&J.contains(c,"_tpi")&&
u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},$a=function(){var a,b,c=t.getDoc(),d=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:l.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
isApplicable:function(a,b){var c=t.getWindow(),f=a.friendlyIframe&&t.getWindow().frameElement,f=f&&G(f).isOneByOne(),k=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=t.getDoc().scripts;return g(b).findFirst(function(b,c){return g(a).findFirst(function(a,b){return J.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!g(c.EBG.ads).isEmpty();return b.on("sizmek")&&k&&c&&f&&d()&&e()},getCssSelector:e}},ia=function(){var a,b=n.getAggregator().request("features");
a||(a=[$a(),oe(),ne()]);return g(a).findFirst(function(a,d){return d.isApplicable(v,b)})},ie=function(){var a,b=function(){t.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:l.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Ma().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,
b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Ma=function(){var a,b=function(){var b;(b=k.contextNode.parentNode)&&(J.contains(b.className,"celtra-ad-v3")||J.contains(b.className,"celtra-ad-v4"))?a=b:(b=b&&(u.querySelector(b,".celtra-ad-v3")||u.querySelector(b,".celtra-ad-v4")))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},la=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.AD_HUNT,
isApplicable:a.isMobileAppEnvironment,find:function(){var a=u.findChildWithLargestContent(t.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[l.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},ge=function(){var a,b;return{detectionMethod:l.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return v.isSpecifiedAd()},find:function(){var c=g.isFunction(k.contextNode.getAttribute)&&k.contextNode.getAttribute("data-ias-container");
b=c&&"#"+c||k._cl_adpath;if(c=u.crossQuerySelector(b))a=u.getParent(c),1>u.getNodeArea(c)&&(a=c,c=u.findElementsWithSize(c));return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},fe=function(){var a;return{detectionMethod:l.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return v.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(k._cl_adpath)[1].split(",").forEach(function(d){if(c=u.crossQuerySelector(d))a=u.getParent(c),1>u.getNodeArea(c)&&(a=c,c=u.findElementsWithSize(c));
b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ke=function(){return{usePlaceholder:!0,detectionMethod:l.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:me,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},he=function(){return{detectionMethod:l.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,isApplicable:v.isVideo,getAdContainer:function(){return k.contextNode.parentNode},allowForAdContainerChange:!0}},
Xd=function(a,b){var c,d;c=[pe(),qe(),re()];d=g(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=se();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},re=function(){return{calcDims:function(a,b){var c,d,e=new G(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(v.isSpecifiedAd()||v.isBustedIframe())&&
u.nodeIsInWindow(a,t.getTop());a=!u.elementIsEmbedded(a);return b||a}}},qe=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(v.isSpecifiedAd()||v.isBustedIframe())&&u.elementIsEmbedded(a)}}},pe=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new G(b)).getRounded();c.set("height",b.height);c.set("width",
b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var b=(v.isSpecifiedAd()||v.isBustedIframe())&&v.embedded&&!u.nodeIsInWindow(c,t.getTop()),e=v.isCeltra()&&u.elementIsEmbedded(a);return b||e}}},se=function(){var a;return{calcDims:function(b,c,d){d=g.isDef(d)?d.getAdNodeDimensions():void 0;a&&g.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=Z();var b=n.getAggregator(),d=b.request("browser"),e=b.request("features"),b=b.request("context");
return b.isDeviceTypeGroupMobile()&&a.applies(d,e,b)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Wd=function(a){var b,c,d,e=n.getAggregator().request("features"),f=n.getAggregator().request("browser");a=a||t.getWindow();var k=function(b,c){b=b||a;c=c||{top:0,left:0,width:t.getMaxNumber(),height:t.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=t.min(c.width,
d.width),c.height=t.min(c.height,d.height)}catch(D){n.getAggregator().trigger("error",l.ERROR_CODES.GET_AD_DIMENSIONS)}b!==t.getTop()&&k(b.parent,c)}return c},m=function(){var m,p={};try{var x,z,F,y,B,w,A=t.getMaxNumber(),G=t.getMaxNumber();v.friendly?(x=k(),F=x.left,y=x.top,A=x.width,G=x.height,z=u.browserWindowPosition(),B=z.scrX+F,w=z.scrY+y):e.on("rattie")&&f.browserIs(l.BROWSERS.IE)?(w=B=0,d=d||n.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),B=c.scrX,w=c.scrY):
g.isDef(a.mozInnerScreenX)&&(B=t.round(a.mozInnerScreenX),w=t.round(a.mozInnerScreenY));var p={scrX:B,scrY:w,iFrameClippingWidth:A,iFrameClippingHeight:G},K,E,C=b||u.getIeDimObj(a);b=C;g.isDef(a.innerWidth)?(K=a.innerWidth,E=a.innerHeight):C&&g.isDef(C.clientWidth)?(K=C.clientWidth,E=C.clientHeight,0===K&&0<C.offsetWidth&&(K=C.offsetWidth),0===E&&0<C.offsetHeight&&(E=C.offsetHeight)):a.frameElement&&g.isDef(a.frameElement.clientWidth)&&(K=a.frameElement.clientWidth,E=a.frameElement.clientHeight);
m=K;p.height=E;p.width=m}catch(Oe){n.getAggregator().trigger("error",l.ERROR_CODES.GET_AD_DIMENSIONS)}return p};return{calcDims:function(){return new G(m())},getClippedDims:function(){var a=m();return new G({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Yb=function(){return{createInstance:function(a,b,c){return v.isDomless()?new te:new ue(a,b,c)}}},ue=function(a,b,c){var d,e,f=n.getAggregator().request("browser"),p=k&&k.contextNode&&k.contextNode.parentNode?
k.contextNode.parentNode:null,m=de(b,c),q=function(){var a,b,e;d=d||le(v,c);a=d.find();v.friendlyIframe&&v.isBlockingSizmekTag()&&w(a);!a&&d.usePlaceholder?(r(),v.isDeviceTypeGroupMobile()&&f.hasMutationObserver()&&t.getMutationObserver(x).observe(p,{childList:!0})):a&&(a=g(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,g(a).each(function(a,c){m.addAdComponent(c,g.resolve(d.detectionMethod),b,e)}))},r=function(){var a;m.hasAd()||(a=u.getPlaceholderSpan(),p.insertBefore(a,k.contextNode.nextSibling),
m.addAdComponent(a,l.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))},x=function(a,b){var c=!1;g(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())},z=function(a,b){var e=!1;g(a).each(function(a,b){1>=b.target.height*b.target.width&&(e=!0)});var f;e&&(f=$a(),f.isApplicable(v,c)&&(b.disconnect(),d=Za(),m.clearCollection(),n.getAggregator().trigger("nodesAdded")))},w=function(a){var b;if(!e&&f.hasMutationObserver()&&u.isWindow(a))try{e=
t.getMutationObserver(z),b=a&&a.frameElement,e.observe(b,{attributes:!0,attributeFilter:["height","width"]})}catch(D){}};ee(a);return{find:function(){m.isUsingPlaceholder()||!m.hasAd()?q():m.refresh();return m},getDetectionMethod:function(){}}},te=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Gb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===g().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==g().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,
c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(r){__IntegralASDiagnosticCall("avidadsessioncontext",r,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};v.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},Fb=function(a){var b=new ve,c=new we,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=n.getAggregator().request("omidAdSessionContext"),g=v.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var m;if(!(m=g||v.isAvid()||v.isAvidNative())){var k;if(k=!f&&a.bootstrapOn("mobOrTab")&&a.bootstrapOn("mobAppWebview")){var g="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
r,f=!1;for(r=0;r<g.length;r++)if(-1<d.indexOf(g[r].toLowerCase())){f=!0;break}k=!f}m=k}if(m&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)na[na.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(x){n.getAggregator().trigger("error",l.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},xe={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(v.isDomless())return!1;var b=t.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(d){}if(v.embedded){try{c.push(parent.document.referrer)}catch(d){}try{c.push(I.referrer)}catch(d){}}try{"jsi"!==k.mode&&c.push(w.location.href)}catch(d){}try{c.push(k.jsref)}catch(d){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!g(a).findFirst(function(a,e){var d=!1,k,m,l="mobfox"===e?c:[b];for(m=0;m<l.length;m++){k=l[m];var n="string"===typeof e?[e]:e;if(g(n).isArray()&&(n[0].substring(0,4),n))for(var t=0;t<n.length&&(d=-1<k.indexOf(n[t]),!1!==d);t++);if(d)break}return d})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,c){var b;b=!1;var e=t.getWindow();g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(b=(b=e.navigator.userAgent)&&-1!==
b.indexOf(c));return b})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!g(a).findFirst(function(a,c){return g.isDef(J.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return v.isDomless()?!1:!!g(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return g.isDef(a)&&-1!==a.indexOf(c)})})}}},ab=function(){var a=function(a,c){var b,e=xe[a];e.detect(c)&&(b=e.STRINGIFIED_METHOD);return b};return{process:function(b){return g(b).map(a).join("")}}},
ye=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",
".android"],["carsales",".ios"]]}}],ve=function(){var a,b=function(a,b){var c,d=ab().process(b.detectionRules);d&&(c=d+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){a=g(ye).map(b);a=0<a.length?a[0]:"";""===a&&k.hasOwnProperty("serverSideAppDetection")&&0!==k.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},we=function(){var a=[],b=[],c=function(b,c){var d,e=ab().process(c.detectionRules);e&&(a.push(c.STRINGIFIED_SDK+
"*"+e),d=c);return d};return{detect:function(){b=g(na).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&g.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},na=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},
{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,
detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Yd=function(a){var b=
[];(function(){if(10>a.height)b.push({geometry:new X(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new X(0,a.width,e,e+(f<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},W=function(){var a=l.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=l.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},ae=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();g(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value();c.push(new X(Math.max(d.leftX,f.leftX),Math.min(d.rightX,f.rightX),Math.max(d.topY,f.topY),Math.min(d.bottomY,f.bottomY)))}});return c},e=function(a,b){var c=0,e=d(a,b),f;g(e).each(function(a,
b){f=b.value();c+=f.area});return c},f=function(){var b=0;c.mbs=[];g(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){g(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=f();c.mbrd=1;a!==c.mbp&&c.mbivs.push([v.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];g(a).each(function(a,
b){c.mbpr.push(l.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];g(a).each(function(a,c){b.push(c.isInView)});return b}}},be=function(a){var b=W();return{getSliceStatus:function(c,d,e,f){var g,m=[];g=c.getRounded();c=g.height;var k=g.scrY,l=new G({scrX:g.scrX,width:g.width}),n=b.getConfig(g).numberOfSlices;l.set("height",t.floor(c/n));for(var v=0;v<n;v++)l.set("scrY",t.ceil(k+c/n*v)),g=100===a.calcPercentInView(l,d,e,f),m.push(g);return m}}},
X=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),g=Math.ceil(c),m=Math.ceil(d),k=f-e,l=m-g,n=k*l,t=function(){return{leftX:e,rightX:f,topY:g,bottomY:m,width:k,height:l,area:n}};return{value:t,doesIntersect:function(a){var b=t();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},Zd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},$d=function(a,b){var c,d=[],e=[],f=function(){g(d).each(function(a,b){b(e)})},k=function(){var a=
[];g(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),g=d.boundingClientRect;b=g.width;var m=d.intersectionRatio,d=d.intersectionRect,l=d.left-g.left,g=d.top-g.top,g=new X(l,l+d.width,g,g+d.height);e.push(g);g=k();e=[];for(d=0;g.length>d&&g.length!==d+1;d++)e.push(new X(0,b,g[d],g[d+1]));f();1===m&&(c.unobserve(a),c.disconnect())},
{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ja=function(){var a=function(a){var b=!1;ze.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return b.omidNativeInfo&&b.omidNativeInfo.partnerName&&a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,
checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},ze=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Ae=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",
function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+k.videoId;"failed"===a.action&&(c=!0);if(b&&g.isDef(b.blockAd))b.blockAd(c);else if(b&&g.isDef(b[d]))b[d](c)})}}},Be=function(a,b){var c=n.getAggregator().request("videoTranslator").translate(a.messageType),d=function(a){a=a.eventData||{};a=g({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a),e=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&
(b=g(a).mapToObj(c));return b}(a),f={t:a.time-k.birthdate,tp:c,sl:b};g(f).mixin(d);g(f).mixin(e);var l=g({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(c)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(c)},indicatesFullscreen:function(){var a=t.getWindow();return("resizeAd"===c||"initAd"===c)&&("fullscreen"===d.viewMode||d.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===c&&"normal"===
d.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(c)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(c)},getVolume:function(a){return a.getVolumeFromContext(d)},updateScreenLoc:function(a){f.sl=a;l.sl=a},trigger:function(){"adImpression"===c?n.getAggregator().persistentTrigger(c,d,e):n.getAggregator().trigger(c,d,e)},toString:function(){return"{"+g(f).toParams()+"}"}}).mixin(f);
return l},Ce=function(){var a=[];return{registerEvent:function(b,c){var d=Be(b,c);a.push(d);return d},toString:function(){return"{"+g({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},De=function(){var a,b,c,d=function(d){c=g.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",l.DT_CODES.QUARTILE_FULLY_INVIEW)},f=function(){b=!0;d()},k=function(a){a=
(new bb).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:f,adImpression:f,volumeChanged:k,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Ee=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},bb=function(){return{getVolumeFromContext:function(a){var b,c=-1;g.isDef(a)&&(g.isDef(a.volume)?c=a.volume:g.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},Db=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,f,p,m,q=[],r=l.OUT_OF_VIEW,u=!1,z=!1,w=!1,y=!0,B=new Ce,D=De(),C=new Ae,E=new bb,G=new Na,H=function(b){var d;u=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(Pe){e={}}e.id==a&&(d=B.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(z=!0,r=w?l.IN_VIEW:!1):d.indicatesNotPlaying()?(z=!1,r=l.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,r=z?l.IN_VIEW:l.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,r=z?!1:l.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?y=!0:0===b&&(y=!1));q.push(d);m&&L();return d},J=function(b){var c,f,l=Ea().wrapToGlobal(H),m=function(a){g.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{f=b[e]||
b.getIasVidBridgeVersion,c=g.isFunction(f)&&"2"===f.call(b)?unescape(b[d].call(b,a,l)):unescape(b[d].call(b,a)),u=!0,m(c||"n")}catch(Hc){__IntegralASDiagnosticCall("handshakefailure",Hc,k)}},I=function(){var c=function(a){return g(g(a).toArray()).findFirst(function(a,b){return g.isFunction(b[d])})};f||(g(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=t.getDoc().querySelectorAll(b);return f=c(d)}),!f&&b.on("novidnodeerr")&&.1>Math.random()&&
__IntegralASDiagnosticCall("novidnode",{message:"node not found*10"},k));return f},P=function(){var a=I();a&&!u&&J(a);return a},R=function(a){a=E.getVolumeFromContext(a);y=g.isDef(a)?0<a:!1},L=function(){G.init();g(q).each(function(a,b){b&&(g.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",l.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",
b)))});q=[];m=!0};(function(){A.addEvent(t.getWindow(),"message",function(a){H(a)});n.getAggregator().on({volumeChanged:R});n.getAggregator().provide({videoEventsString:B,videoVersion:function(){var a,b=P();try{a=b.getVersion()}catch(ea){a=-1,n.getAggregator().trigger("error",l.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return p=p||new Ee},adNode:P});P();C.listenForResult();D.isApplicable(v)&&D.start(c)})();return{findAdNode:P,getViewStateOverride:function(){return r},
isHandshakeComplete:function(){return u},triggerInitializationEvents:L,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===l.NA;a.isVideoPlaying=!0;a.isSoundOn=y;a.isVideoPlayingInFullscreen=!1;if(r){if(r===l.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=l.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:r;a.isVideoPlaying=r===l.IN_VIEW}w&&z&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Fe=function(){return new ba(l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,
l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},kb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",l.DT_CODES.PERFORMANCE)}),a=!1},f=function(){b=new Ka;d=0;e(!0);b.start()},k=function(d,e,k,l){d=c[d];l?(g.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||f();a=!0},m=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||f();a=!0},q=function(b){g(c).each(function(d,e){var f=c[d],
k={type:b,oneTime:!0,minDt:!0,asION:!0};g(f).isEmpty()||(n.getAggregator().trigger("addOutputItem",{output:f},d,k),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){q(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",k);n.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){g(a).each(function(a,b){c[b]={}})}}},qb=function(){var a={},b=function(b){a[b]||(a[b]=new Ja(1,k.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=
b(a);c.stop();n.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Ge=function(){return new ba(l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Wb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(g(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];
if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},ba=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},f=function(){var a,b={};e();g(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return g(f()).toION()},
getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Xb=function(){function a(){}a.build=function(){var a=[];a.push(new ba(l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:cb,av3:cb,jvw:Ge,avw:Fe};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),cb=function(){return new ba(l.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,l.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},
U={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",U.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){A.addEvent(w,"load",function(){n.getAggregator().trigger("measureTime",U.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ka;a.onTick({4:function(){n.getAggregator().trigger("markTime",U.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",U.IDS.IN_BROWSER_DELAY)}});a.start()}},
H={isFrameworkAvailable:function(a,b){var c,d,e=t.getTop(),f=t.getWindow();try{c=e[a]}catch(p){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(m){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=H.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),A.removeEvent(t.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",l.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+
k.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.ENVIRONMENT,a,b)}},lc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&H.send("ccd",g(a).toION())}(function(){var b=H.isFrameworkAvailable("__uspapi","__uspapiLocator");H.send("cca",!!b);if(b){var c,d;g.isFunction(b)?b("getUSPData",1,a):(c={__uspapiCall:{command:"getUSPData",version:1,callId:H.getCallId()}},d=H.getMessageHandler("__uspapiReturn",a),A.addEvent(t.getWindow(),"message",d),
b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},kc={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendorConsents)&&g.isDef(a.vendorConsents[278])?a.vendorConsents[278]:void 0,b={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(b),glbl:g.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)},d=a&&a.tcString;n.getAggregator().provide("tcString",
function(){return d});H.send("gcd",g(b).toION())}(function(){var b=H.isFrameworkAvailable("__cmp","__cmpLocator");H.send("gca",!!b);if(b){var c,d;g.isFunction(b)?b("getVendorConsents",[278],a):(c={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:H.getCallId()}},d=H.getMessageHandler("__cmpReturn",a),A.addEvent(t.getWindow(),"message",d),b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},mc={name:"GDPRV2ConsentDetector",
dependencies:[],creator:function(){function a(a){var b=g.isDef(a)&&g.isDef(a.vendor)&&g.isDef(a.vendor.consents)&&g.isDef(a.vendor.consents[278])?a.vendor.consents[278]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(b)};H.send("gcd2",g(a).toION())}(function(){var b=H.isFrameworkAvailable("__tcfapi","__tcfapiLocator");H.send("gca2",!!b);if(b){var c,d;g.isFunction(b)?b("getTCData",2,a):(c={__tcfapiCall:{command:"getTCData",parameter:[278],callId:H.getCallId(),version:2}},
d=H.getMessageHandler("__tcfapiReturn",a),A.addEvent(t.getWindow(),"message",d),b.postMessage(c,"*"))}})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},sc={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,b="pmdetector"+k.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=t.getWindow();A.addEvent(d,"message",c);d.postMessage(b,"*");t.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",
l.DT_SLOT.IM,"pom",g.stringifyTriState(a));A.removeEvent(d,"message",c)})})()},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},tc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"sf",g.stringifyTriState(v.isSafeFrame()))},settings:{tier:l.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},jb=function(a,b,c,d,e,f,p){var m=function(a,b){return isNaN(a)||
0>a||""===a?b:a},q=function(a){return"&"===a.slice(-1)?"":"&"};return{send:function(r){try{var t,u=d.baseUrl,w,y,B=f.getDocumentMode();"number"===typeof B?(y=2E3,8===B?y=4E3:8<B&&(y=8E3)):y=m(k.sp_imp_maxLength,2E3);w=y;if(v.integratedBlockingApplies(u)){y=u;var A=n.getAggregator().request("mobileApp"),C=A&&A.isMobileAppEnvironment&&A.isMobileAppEnvironment(),E=k.contextNode.getAttribute("data-ias-container"),G=k.contextNode.getAttribute("data-ias-callback"),A=y+"adContainerId="+E+"&cbFunctionName="+
G,A=C?A.replace("monitoring","blocking"):A.replace("skeleton.js",k.integration+".js"),H=k.protocol+":"+k.staticServer+k.integration+"a.js",J=k.protocol+":"+k.staticServer+k.integration+".js",u=A+"&true_pb="+encodeURIComponent(k.passback)+(C?"&redirectUrl="+encodeURIComponent(J):"")+(C?"&passback=":"&adsafe_pb=")+encodeURIComponent(H)+"&"}var C=u=u.replace(l.UNIQUE_ID_TOKEN,k.asid),I=u.length,P,R,L=m(k.sp_imp_jsInfo_minLength,0),H="";try{P=w-I-L,0<P&&(R=He(r,P,14,b.on("partialUrls")),H+=R.join("&"))}catch(S){a.add(l.ERROR_CODES.IMPRESSION_URLS)}u=
C+H;r=u+=q(u);I="";try{I+=Ie(w-u.length,"adsafe_jsinfo=",a,b,c,e,f,p)}catch(S){a.add(l.ERROR_CODES.JSINFO),I+="adsafe_jsinfo=e:"+a.toString()}u=r+I;d.macroUrl&&(u+=q(u),u+=d.macroUrl);k.staticFwjsMacros&&(u+=q(u),u+=k.staticFwjsMacros);if(v.isAMZN()&&-1===u.indexOf("gdpr_consent")){var O=n.getAggregator().request("tcString");g.isDef(O)&&(u+=q(u),u+="gdpr_consent="+O)}t=u;k.impUrl=t;d.sendImpression(t);n.getAggregator().trigger("impressionsent")}catch(S){__IntegralASDiagnosticCall("impsend",S,k)}}}},
Oa=function(){try{var a=k.perf,b,c,d,e,f,p;a.markEnd("ec");b=a.getEnd("ec");c=w.performance&&"function"===typeof w.performance.getEntriesByName&&w.performance.getEntriesByName(k.impUrl)[0];var m=a.getStart("bd"),q=a.getStart(ua);d=k.jsDoSplit?Math.round(b-m):Math.round(b-q);e=Math.round(c&&c.duration);f=Math.round(b-(c&&c.responseEnd));g.isNumeric(d)&&g.isNumeric(e)&&g.isNumeric(f)&&(p={ttecl:d,ecd:e,tsecr:f},n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.IM,"imprf",g(p).toION()))}catch(r){n.getAggregator().trigger("error",
l.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ie=function(a,b,c,d,e,f,p,m){return function(c){var d=g.encodeInvalidUrlChars(c.primary.join(","),k.encodeInvalidUrlChars),f=b,l=0,m=function(a){if(a)return","+a};f.length+d.length+5<=a?(f+=m(d),e.impressionIsIdentifiable(!0),g(c.secondary).each(function(b,c){var d=g.encodeInvalidUrlChars(c,k.encodeInvalidUrlChars);f.length+d.length+5<=a?f+=m(d):l+=1})):l+=c.primary.length;return f+=",ov:"+l}(function(){var a,b;b=a={viewState:l.NA};v.isDomless()?b=m.checkScreenLoc(!0)||
a:d.on("impFailSafe")?t.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):g.isDef(t.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState,z=n.getAggregator().request("mPage");b=e.getAvidIds();u=["id:"+k.asid,"c:"+e.getCacheBustId(),"sl:"+u,"em:"+v.embedded,"fr:"+v.friendly,"thd:"+g.stringifyTriState(z.supportsVisAPI())];d.on("avidPropertiesInImpression")&&g.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),
u.push("apv:"+b.partnerVersion));a=Je(a,c,d,e,f,p,m);n.getAggregator().trigger("eligiblerender");return{primary:u,secondary:a}}())},Je=function(a,b,c,d,e,f,n){var m=[];m.push("mn:"+k.mn);m.push("rg:"+k.region);k.iasProxyPartnerDomain&&m.push("ipp:"+encodeURIComponent(k.iasProxyPartnerDomain));m.push("pt:"+function(){var b=n.stringifyPingTimes();a.viewState!==l.NA&&(b+=a.details);return b}());m.push(g(f.params()).toParams());c.on("mrcAudit")&&!v.isDomless()&&m.push("dvs:"+t.getDoc().visibilityState);
e.iterate(function(a,b){var c=!b.props||g.isUndef(b.props.type),d=!b.props||b.props.type===l.IMPRESSION_EVENT;(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+k.mode);m.push("et:"+(t.now()-k.birthdate));k.perf.mark("si");c.on("swapids")?m.push("oid:"+k.oid):m.push("uid:"+d.unq);m.push("v:19.8.267");m.push("sp:"+(k.isSplitMode?1:0));m.push("st:"+(k.staticMode?1:0));m.push("fwm:"+("true"===k.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+
g(u.windowSize()).toArray().join(".")),m.push("sr:"+g(u.screenSize()).toArray().join(".")));b=function(){var a;a=String(k.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},He=function(a,b,c,d){var e,f=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=g(a).map(function(a,b){if(k(b))return b}),a=g(a).map(function(a,
b){if(!k(b))return b}),g(e.concat(a)).each(function(a,e){var g;g=e.val;var k=e.key,l;l=24+f.join("&").length+k.length+c;l=b-l;d&&l<g.length&&0<l&&(g=g.substr(0,l));if(g.length||""===e.val||""===e.type)g="adsafe_url="+g+"&adsafe_type="+k,k=f.join("&").length,g.length+k<=b&&f.push(g)}));return f},hb=function(){return{isApplicable:function(a){a=t.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=t.getWindow();a=Ke(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",
{output:c},"pl",{type:l.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:l.DT_CODES.ADTALK}))}}},Ne=function(a,b){return{start:function(){try{var c=Le(),d=c.getMethodName(a),e=new V(b.getEnabledScriptUrl(a)),f=Me,g=t.getDoc();(new f(g.body||g.head||g.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){n.getAggregator().trigger("error",l.ERROR_CODES.FEATURE_SCRIPT)}}}},Le=function(){var a=function(a,c,d){a===k.asid&&(d.unshift(c),
n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:k.asid,constant:l,features:b,context:v,dtBaseURL:k.dtBaseURL,spg:db};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},ob=function(){return{start:function(a,b){g(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Ne(d,b).start()})}}},Ke=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=J.hashCode(e),e=g.toBase(e,
62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=t.floor(t.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Me=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var e;c=u.createHiddenIframe();c.setAttribute("src","about:blank");c.setAttribute("class","_ntnrjf7826-hj");(a||k.contextNode.parentNode).appendChild(c);e=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g;
g=(new Date).getTime();b=b+"?t="+g+"&r="+Math.floor(1E5*Math.random())}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");e.open().write(b);e.close()})(b);return{getWindow:function(){return c.contentWindow}}},db=function(a){var b=new Ia;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==k.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,
d){b.stop();t.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",l.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),g(d.cache).each(function(b,c){a.addToCache(b,c)}))},t.round(1E3*t.random()))})})();(function(){n.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),t.setTimeout(a.sendToOtherTags,1300),t.setTimeout(a.sendToOtherTags,3200))})})()},yc={name:"spg",dependencies:["spgCache"],creator:db,settings:{tier:l.TIERS.PRE_IMPRESSION_FRAUD,
applies:function(a,b,c){return a.on("spg")}}},xc={name:"spgCache",dependencies:[],creator:function(){var a="asp ch fsc mvn no sd".split(" "),b={},c=!1,d=function(){return e(b)},e=function(b){return g(b).keys().sort().toString()===a.toString()},f=function(){c||(c=!0,g(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:l.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",l.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},
addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&f()},isFull:d,sendToOtherTags:function(){(new ga).send({scaInfoOriginatorASID:k.asid,cache:b})}}},settings:{}};try{jc()}catch(a){__IntegralASDiagnosticCall("main",a,k)}};
try{(function(){var k=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.__IntegralASAdPush=function(w){(w||top.isSingleIASInstance&&top.iasAdSlots).forEach(function(w){__IntegralASConfig._cl_adpath=w.adSelector;__IntegralASConfig.iasParameters=w.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)})},top.isSingleIASInstance&&top.iasAdSlots?top.__IntegralASAdPush():__IntegralASConfig.initialize(__IntegralASConfig,k,k.document)}catch(w){__IntegralASConfig.initialize(__IntegralASConfig,
k,k.document)}})()}catch(k){__IntegralASDiagnosticCall("initialize",k,__IntegralASConfig)};
