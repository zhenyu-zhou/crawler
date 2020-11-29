var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.147',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.147.js"},
		protocol: 'https',
		jsref: "",
		asid: "b08533eb-3264-11eb-a6a0-0aece8dd74aa",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100",
		adsafeDomain: "adsafeprotected.com:80",
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
		sendCookie: '',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=33642&pubEnt=3584127',
		fwMonitoring: '',
		doNothing: false,
		mn: "app05or",
		mobOrTab: false,
		app: true,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/33642\/3584127\/",
		anId: '',
		advEntityId: '33642',
		pubEntityId: '3584127',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: ''
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
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
		var versions = ['1.3.6-iab2177'];
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
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange"}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript",
			UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other"}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media"}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"},
		InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll",
			POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose",
			OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
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
	var module$exports$omid$common$eventTypedefs = {};
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
	var module$exports$omid$common$guid = {generateGuid:function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		}};
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
	;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
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
		if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
			return module$contents$omid$common$OmidGlobalProvider_globalThis;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
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
	var module$exports$omid$common$Rectangle = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	};
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
	var module$exports$omid$common$VastProperties = function(a, b, c, d) {
		this.isSkippable = a;
		this.skipOffset = b;
		this.isAutoPlay = c;
		this.position = d;
	};
	module$exports$omid$common$VastProperties.prototype.toJSON = function() {
		return {isSkippable:this.isSkippable, skipOffset:this.skipOffset, isAutoPlay:this.isAutoPlay, position:this.position};
	};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.3.6-iab2177"};
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




	
	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.3.6-iab2177'](); //try standard in-browser instantiation
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
		embedded = win != topWin,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		
		useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
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
		if (scriptIndex === 0 && useDocWrite && !embedded) {
			
			document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
			result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
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
		getData: getData
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(m,v,I){function la(g){if(!m.executedContinueMain){m.executedContinueMain=!0;var a;m.perf.markStart(ma);Va(m).verifyContextNode();a=Wa();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,h=a.mBrowser,q=a.mPageUrls,l=a.mFeatures,p=t,u=a.renderDetector,w,D,x,J;m.perf.markStart(na);m.b11="1"===m.adHeight&&"1"===m.adWidth?"true":"false";m.cnod=m.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:g?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});
var A;try{b.isApplicable(t)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),l.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),l.on("idMap")&&(A=b.getIdMap())&&c.addItem(A,"idMap"))}catch(P){d.add(k.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(h,l,p)&&e.start(),J=q.detectTopURL(),l.on("exch")&&(w=(new Xa).createInstance(d,c),w.parse(J)),D=Ya(),D.isApplicable(l)&&D.start(l),p.usesGroupMCustomMetric()&&Za(),x=$a(),x.isApplicable(l)&&(x.start(),n.getAggregator().trigger("sendCookie")),u.start()}catch(C){d.add(k.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(na);
g=J;b=a.mVideo;try{ab(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(g),f.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(r){__IntegralASDiagnosticCall("impsend",r,m)}g=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;h=a.mDataTransfer;q=a.mErrors;l=a.iOutput;p=a.loopDelay;u=a.mAdTalk;w=a.viewabilityMeasurement;a=a.mAncestorOrigins;D=t;try{m.perf.markStart(oa);var s=bb();s.start();s.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,
k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var G=cb(g,b,c);G.isApplicable(d)&&G.start();var F;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(F=db(e,h,q,b,l),F.init());eb(l,p,u,q,d,e,h,b,a);w&&w.start&&w.start();D.isDomless()||fb().start(["sca","xsca","rsrch"],d);gb();n.runTier(k.TIERS.VIEWABILITY);var O=hb();O.isApplicable(d)&&(O.start(),S.recordBlockingTime(),m.perf.mark(ib),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());m.perf.markEnd(oa)}catch(L){q.add(k.ERROR_CODES.POST_IMPRESSION)}m.perf.markEnd(ma)}}
function jb(g,a,b,c,d,e,h,q,l,p){try{m.perf.markStart(pa),m.tpiLookupURL&&kb(h,q).init(m.tpiLookupURL),t.isDomless()||p.isStarted()&&p.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{m.perf.markStart(qa);e={output:(new Date).getTime()-d};g.addItem(e,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(a.loopStarted())&&g.addItem({output:a.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});m.perf.markEnd(qa);var h,q;m.isSplitMode&&(q=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(lb,
q));m.impUrl&&m.perf.markResource(mb,m.impUrl);h=m.perf.getData();n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(h).toION());b.isApplicable(t)&&b.sendAdTalkCall()}catch(l){c.add(k.ERROR_CODES.ADTALK_DELAY)}}),m.perf.markEnd(pa)}catch(u){c.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function nb(g){var a=new ob(g,t),b=new pb,c=new qb(g,t),d=rb(g,t),e=(new sb(m,t,g)).resolve(),h=[a],q=[];d.applies()&&h.push(d);c.applies()&&h.push(c);b.applies(g,t)&&h.push(b);f(e).each(function(a,b){h.push(new tb(b,
t));q.push(b.id)});0<q.length&&(n.getAggregator().trigger("addOutputItem",{output:q.join(".")},"scm",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:q},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return h}function ub(g,a){var b=(new $).accepts(),b=!t.isAvid()&&!b&&!t.isInMobiMraidVideo();return t.isVideo()&&b?vb(m.videoId,g,a):{}}function Wa(){var g,a,b,c,d,e,h,q,l={};m.perf.markStart(ra);var p=n.getAggregator();wb();l.mFeatures=p.provide("features",xb());p.provide("mobileApp",
function(){return g=g||new yb(l.mFeatures)});p.provide("avidJsClient",function(){return a=a||new zb(r.getWindow())});p.provide("context",t);l.mBrowser=p.provide("browser",(new Ab).createInstance());l.mErrors=p.request("mErrors");l.mIds=p.provide("ids",Bb());l.iOutput=Cb(p);p.request("mJsonp");l.mComm=p.request("mComm");l.viewabilityMeasurement=(new Db(Eb(l.mIds),l.mFeatures,l.mBrowser)).create();c=p.request("omidAdSessionContext");Fb(c,p);l.mFeatures.on("swapids")&&(m.oid=m.asid,m.asid=l.mIds.unq);
l.mAdTalk=(new Gb).createInstance(l.mFeatures);b=Hb();c=Ib(p);d=p.provide("mPage",(new Jb).createInstance());l.mAncestorOrigins=Kb();l.mPageUrls=p.provide("pageUrls",(new Lb).createInstance(l.mAncestorOrigins,r));e=p.provide("mScreenEvents",Mb());p.provide("ieXDomainViewability",Nb(l.mBrowser));h=Ob(l.mBrowser);q=ub(l.mFeatures,e);l.mVideo=p.provide("video",q);Pb(Qb.build());h=(new Rb).createInstance(l.mErrors,h,l.mFeatures);d=(new Sb).createInstance(h,l.mErrors,d,t);q=p.provide("jobFactory",Tb());
l.mDataTransfer=Ub(h,l.mErrors,l.mFeatures,l.mIds,l.iOutput,l.mBrowser,e,b);b=Vb(l.mErrors,l.mFeatures,p,c);l.mMode=Wb(b,l.mFeatures,l.viewabilityMeasurement.isImmediate());l.mViewability=p.provide("viewability",Xb(z(),l.viewabilityMeasurement,l.mBrowser,l.mDataTransfer,l.mFeatures,p,l.iOutput,d,e,l.mVideo));Yb(l.mFeatures,l.mViewability,c,q);l.loopDelay=sa();l.renderDetector=Zb();l.mDataTransfer.setViewabilityMod(l.mViewability);m.perf.markEnd(ra);return l}function $b(g){var a=g&&g.sca,b=g&&g.xsca;
return function(c){c="string"===typeof c?JSON.parse(c):c;if(Object.assign)Object.assign(m,c);else for(var d in c)m[d]=c[d];m.isResolved=!0;m.sp_cdnScripts={sca:a,xsca:b};la(m.isNewBuild)}}function wb(){var g,a,b;b=n.getAggregator().request("omidAdSessionContext");g=b.app&&b.isDisplay&&!b.isWeb;(a=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===m.adWidth&&"1"===m.adHeight&&(b.isLimitedSandbox=!1);g&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||!0===m.mobAppWebview)m.mobOrTab=
!0}function Fb(g,a){if(g&&g.queuedOutputItems)for(var b=0;b<g.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:g.queuedOutputItems[b].value},g.queuedOutputItems[b].code,{type:"impression"})}function Yb(g,a,b,c){var d=nb(g);n.getAggregator().provide("viewabilityDefinitions",d);return f(d).map(ac(g,a,b,c))}function eb(g,a,b,c,d,e,h,q,l){var p;"true"!==m.minimizeCalls&&(p=(new Date).getTime(),r.execAtEndOfThread(function(){jb(g,a,b,c,p,d,e,h,q,l)}))}function aa(g){if(m.isResolved)la(m.isNewBuild);
else{if("string"===typeof g)try{g=JSON.parse(g)}catch(a){}var b=g&&g.host||"https://jsconfig.adsafeprotected.com",c=g&&g.config;c&&(b=b+"/jsconfig"+c+(m.adSessionId?"&adSessionId="+m.adSessionId:""),n.getAggregator().trigger("jsonp",b,$b(g),!1,"cbName"))}}function ac(g,a,b,c){return function(d,e){var h,q,l;h=ta(e,a);var p=bc(b,g,e.rts).getCallbacks(),f=ua(c.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId));e.sendOtherwiseInViewSignal&&(l=ta(e,a,e.sendOtherwiseInViewSignal),q=ua(c.createPingJobs(e.type,
e.timeInViewThresholds,p,e.metricId,e.sendOtherwiseInViewSignal)));e.rtsCallbacks=p;e.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?h=cc(h,e,f,t.isVideo()):(h=va(h,W(e.minUnit),f),e.sendOtherwiseInViewSignal&&(q=va(l,W(e.minUnit),q,e.sendOtherwiseInViewSignal),q.start()));h.start();return h}}function dc(g){var a,b,c;m.perf.markStart(wa);m.isNewBuild=g;g=[ec,fc,gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc];for(a=0;a<g.length;a+=1)n(g[a].name,g[a].dependencies,g[a].creator,g[a].settings);
n.startSystem();g=n.getAggregator();g.provide({omidAdSessionContext:{}});g.provide({omidAdSessionVerificationParameters:{}});a=tc();b=xa();c=(new uc).createInstance(a,b);g.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;g.provide({omidVerificationClient:a});g=[{environment:ba(a),adSessionReadyStrategy:vc(a)},{environment:wc(),adSessionReadyStrategy:xc()}];(new yc(g)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(wa)}var ya={};if(Object.assign)m=Object.assign({},m);else{for(var za in m)ya[za]=
m[za];m=ya}var f=function(g){return new E(g)},E=function(g){this.iterable=g};E.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};E.prototype.isArray=function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(g){return 0===this.keys(g).length};E.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,
b[c])};E.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};E.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",
d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),l=f(c).toION(g,a);return d?l:(g[b]||b)+":"+l}));return c+b.join(",")+d};E.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};E.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);
return g};E.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};E.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};E.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};E.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=
function(g){var a=[];this.each(function(b){a.push(b)},g);return a};E.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};E.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(g,a){return a})};E.prototype.JSONStringify=
function(){var g,a,b=!1;v.Prototype&&v.Prototype.Version&&-1===v.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};E.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=
(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||
(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||v;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b=
{};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var n=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,u){u=u||{};var w,k,n=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},m=function(){if(!w){var a=[];w=!0;n(["features","browser","context"]);
u.emits&&(c.events=new z);if(!u.applies||u.applies.apply(u,b))k=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=u.tier;f.isDef(b)&&(a[b]=a[b]||new ca,a[b].push(m))})();g.provide(d,function(){var a;m();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new Aa;f(c).each(function(a,
b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",
XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",
HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},wa="mf",ma="cm",ra="in",na="pr",oa="po",ib="bl",pa="lo",qa="lt",lb="md",mb="id",Va=function(g){return{verifyContextNode:function(){if(g.contextNode&&null===g.contextNode.parentNode){var a,b=I.getElementsByTagName("script"),c=b.length,d=b[c-1],e=g.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(h){}g.contextNode=d}}}},Ac=function(){var g,a=["STYLE",
"SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),c=0,d=m.useFIF&&t.friendlyIframe||t.isSpecifiedAd(),e=function(e){var q=s.isNodeXDomainIframe(e)||s.isNodeCreative(e),l=!e;g=l?m.contextNode.parentNode:e;if(q||l)n.getAggregator().trigger("evaluateCreativeFinderResult",e);else{if(d){var p;p=q=e;l=t.friendly?r.getTop().document.body:m.contextNode.ownerDocument.body;for(;3>c;){if(l&&q===l){p=q;c=3;break}s.isWindow(q)&&(p=s.crossQuerySelector("["+k.AD_IDENTIFIER+
"-"+m.asid+"]"),q=f.isDef(p)?p:q);p=q=f.isDef(q)?q.parentNode||q:q;c++}q=p}else q=e;if(s.isWindow(q)){var u;try{u=q.document}catch(w){u=m.contextNode.ownerDocument}e=u}else e="IFRAME"===s.getNodeName(q)?e.contentWindow.document:q;u=[];var l=(q=e&&e.getElementsByTagName&&e.getElementsByTagName("*"))&&q.length,D;if(q)for(var x=0;x<l;x++)D=(p=q[x])&&p.nodeName&&p.nodeName.toUpperCase(),!p.children||0!==p.children.length||f(b).contains(D)||f(a).contains(D)||f(u).contains(D)||u.push(D);u=b.concat(u);(new zc(u)).searchDescendants(e)}};
n.getAggregator().on("creativeFinderBatchCompleted",e);return{find:e,getClosestContainerName:function(){return s.getNodeName(g)}}},zc=function(g){var a=function(a){function c(a){var b=s.getNodeName(a),c=s.isNodeCreative(a)||"IFRAME"===b;b&&c&&!s.isEmptyTeadsFrame(a)&&(b=s.getNodeArea(a),b>q&&(h=a,q=b))}function d(){do c(a[e]),e+=1;while(0!==e%l&&e<a.length);e<a.length?r.execAtEndOfThread(d,0):n.getAggregator().trigger("creativeFinderBatchCompleted",h)}var e=0,h=null,q=-1,l=500;if(a.length&&n.getAggregator().request("useYieldSearch"))d();
else{for(e;e<a.length;e++)c(a[e]);n.getAggregator().trigger("creativeFinderBatchCompleted",h)}};return{searchDescendants:function(b){b=b||m.contextNode.parentNode;var c,d,e=[];for(c=0;c<g.length;c++){d=g[c].toLowerCase();var h=b.getElementsByTagName&&b.getElementsByTagName(d);if(h&&h.length)for(d=0;d<h.length;d++)e.push(h[d])}a(e)}}},Zb=function(){var g,a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},
h=n.getAggregator().request("omidAdSessionContext"),q=function(){c=a=!0},l=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},p=function(){var a=!1;t.isOmid()&&h&&h.useOMID13Logic&&(a=!0);return a},f=function(a){var b={},c=r.getDoc(),d=function(e){var h=e&&e.type;if("readystatechange"===h&&"complete"===e.target.readyState||"load"===h)l(b),g.saveNode(a),"readystatechange"===h?g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===h&&g.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),
x(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(l(b),g.saveNode(a),g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},w=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){y.removeEvent(a,"ready",c);g.save(k.RENDER.DETAILS.ENVIRONMENT);g.save(k.RENDER.DIAGNOSTIC.MRAID_READY);l();x({status:k.RENDER.STATUS.DETECTED})};g.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===
b?(l(),g.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));x(d)},D=function(a){a===k.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},x=function(b){var c=g.build();b=b.status||d.status;c=c?c:
d.details;a&&b===k.RENDER.STATUS.DETECTED?(D(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(D(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},m=function(){n.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Ac,h=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(s.isNodeXDomainIframe(a))b?r.clearInterval(b):
h=!1,c=f(a);else if(a){var d=!1,q=s.getRect(a);a&&"IMG"===s.getNodeName(a)&&(d=0===a.naturalWidth||0===a.naturalHeight);!d&&q.width>=k.RENDER.WIDTH_THRESHOLD&&q.height>=k.RENDER.HEIGHT_THRESHOLD&&(l(c),b?r.clearInterval(b):h=!1);g.saveNode(a)}else a=e.getClosestContainerName()||g.getAdNodeName(a)||c.details,g.save(a);x(c)});var q=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){n.getAggregator().trigger("renderdiag",c)}},p=n.getAggregator().request("mobileApp");p&&p.isMobileAppEnvironment&&
p.isMobileAppEnvironment()&&t.isMraid()?w():(q(),h&&(b=r.setInterval(q,500)));n.getAggregator().trigger("eligiblerender")})},A=function(){var a=h&&!!h.isVideo,c=h&&!!h.videoStartArrived,d=h&&!!h.geometryArrived;return b||!d||a&&!c?!1:(n.getAggregator().trigger("eligiblerender"),g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),l(),x(e),b=!0)};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),
code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});g=new Bc;new Cc;n.getAggregator().on("impressionsent",q);p()?A()||(g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),x(d),n.getAggregator().on("omidrendgeoupdate",function(){A()}),n.getAggregator().on("omidrendvideostart",function(){A()})):t.isAvid()||t.isOmid()||t.isVideo()?
(n.getAggregator().trigger("eligiblerender"),g.save(e.details),l(),x(e)):(x(d),m())}}},Bc=function(){var g=[],a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(h){c("nen")}return b},c=function(a){g.push(a)};return{build:function(){var b=[];f(a).each(function(a,c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),h=d&&s.getRect(d),
q=d&&"IMG"===e,l=d&&s.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,g=d&&d.children&&0===d.children.length&&p,f=h&&h.width>=k.RENDER.WIDTH_THRESHOLD&&h.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,D=(l||q)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(f);D&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);l&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);g&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(n){c("sne")}}}},Cc=function(g){var a,
b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,m),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},X=function(){return{applies:function(g,a){var b=n.getAggregator().request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||
g.browserIs(k.BROWSERS.WEBKIT)||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Za=function(){var g,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Hb=function(){var g=[],a=
{},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},c={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var h=f(c).compareTo(a);(h=d(h))&&JSON.stringify(h)!==JSON.stringify({})&&(h.t=t.getTagTime(),g.push(h));f(a).mixin(c)});var d=function(a){f(c).each(function(b,c){var d=!1;f(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return f(g).toION(b)}}},
Aa=function(){var g=new Dc,a=new z;return f(g).mixin(a)},z=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new ca;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();
c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},da=function(){var g=function(a,c,d){var e,h=c.length,q=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&d(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(e=q[a])&&s.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},
ca=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},ua=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ba=function(){var g,a=new ea,b=function(b,d,e,h){var q,l,p,g;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),l=b.source,g=f.noop,d(q)&&
(h&&(p=h(l,q))&&(g=function(){a.send(function(){return p},l)}),e(b,q,g))}catch(w){q&&n.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};y.addEvent(v,"message",g)},stop:function(){g&&y.removeEvent(v,"message",g);g=null}}},ea=function(){var g=function(a){return f(a).isObj()?[a]:(new da).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&
JSON.stringify){var d=g(c);f(d).each(function(c,d){var q;q=f.resolve(b,d)||{};q.sentTime=r.now();q=a(q);d.postMessage(f(q).JSONStringify(),"*")})}}}},Ec=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},Cb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=
f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),
e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Dc=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Sb=function(){return{createInstance:function(g,a,b,
c){return t.isDomless()?new Fc:new Gc(g,a,b,c)}}},Gc=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),q=b.isHidden(),l=c.isDeviceTypeGroupMobile()&&d?d:B(s.calcWinDims()),p=a.getDims();d=l;if(!a.hasAd()||!l.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:l,adDimensions:p};!0===q&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:l,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),
viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Fc=function(){return{collect:function(){return{}}}},Hc=
function(g){g=g||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ca=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var q=e||a;0===c%b&&(h+=r.now()-
q,d++);c++},getTime:function(){return h},getCount:function(){return d}}},Da=function(){var g,a=0,b=0,c=new z(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},Ic=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&
g();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},W=function(g){var a,b,c=0,d=t.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();h=!1},mark:function(){a=h?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();h=!0}}},Q=function(g,a){var b=g||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),
c=b[1],d=b[2],e=b[3],h=b[4],q=b[5],l=g?b[6]:"",p=a?b[7]:"",u={},w=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(q=a);return q},n=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:w,master:k,setParam:function(a,b){u[a]=u[a]||{};f(b).isObj()?f(u[a]).mixin(b):u[a]=b},path:function(a){l=
a},toString:function(){var a=w()?w()+".":"",b=l?"/"+l:"",c;p||!f(u).isEmpty()?(c=f(u).isEmpty()?"":f(u).stringify(n,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},gb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=
s.getOurNodeInTop()){var h=s.getAncestorNodes(d);e=f(h).map(a)}if(b=e=e&&g(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",b),c=b}return c}catch(q){n.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},oc={name:"AdRefreshDetection",dependencies:[],creator:function(){var g=[15,30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId(),e=m&&m.contextNode&&m.contextNode.nextSibling&&m.contextNode.nextSibling.id;
c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+
"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var h=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);h.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||
null,h=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(q,l){q===k.DT_CODES.PING&&l===e&&(r.execAtEndOfThread(function(){h.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&
d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}}},Kb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var h;if(h=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))h=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):
void 0,h=3.7>h;return!h&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},
"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},db=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,p=0,u=0;e(h,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,p,++u)},!0);e(h,++p,u)})}catch(w){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new Q).fullDom;"/"!==a.slice(-1)&&
(a+="/");a+="tpl?asId="+m.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Vb=function(g,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Ab=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new Jc:new Kc}}},Kc=function(){var g=k.BROWSERS,a=function(a){return b()===
a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,
hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,
getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,q=r.getDoc(),l=q.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in q.documentElement.style)h="11";else for(l.style.behavior="url(#default#clientcaps)",q=0;q<e.length&&!(h=l.getComponentVersion(e[q],"componentid").replace(/,/g,"."));q++);}catch(p){}e=h;h=k.NA;l=r.getWindow();f.isDef(l.navigator)&&f.isDef(l.navigator.appName)&&
(h=l.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return M.contains(a,c)})};return M.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Jc=function(){var g=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,
getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,hasMutationObserver:g,isAndroidWebViewBrowser:g}},uc=function(){return{createInstance:function(g,a){return t.isDomless()?new Lc(a):new Mc(g,a)}}},Nc=function(){var g,a=function(a,c){var d="",e="",h=r.getDoc().getElementsByTagName("ins");if(h&&0<h.length){e=h[0];d="<ins";for(h=0;h<e.attributes.length;h++)d+=
" "+e.attributes[h].nodeName+'="'+e.attributes[h].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=n.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,h=m.adWidth&&0<m.adWidth?m.adWidth:0,q=m.adHeight&&0<m.adHeight?m.adHeight:0,l=r.getDoc().getElementsByTagName("ins"),
p;p=e=0;l&&0<l.length&&(p=l[0],e=parseInt(p.style.width),p=parseInt(p.style.height));h=e||h||window.innerWidth;q=p||q||window.innerHeight;"complete"===r.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=h+"px",d.style.height=q+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},Mc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=I.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=I.createElement("SCRIPT"),d.src=b);m.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];t.isOmid()?(e=new Nc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===m.forceAppend?c(a,b,d):I.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=s.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=I.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new Q(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};n.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},Lc=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";n.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){n.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new Q(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(g){var a="undefined"===typeof window,b="undefined"!==typeof g&&"undefined"!==typeof top&&g!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||f.isDef(r.getWindow().mraid)},e=function(){return!a&&f.isDef(r.getWindow().mraid)},h=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&f.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},q=function(){var b;
if(!(b=-1!==m.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===k.MEDIA_TYPE.VIDEO),c=b||h());b=c}return b},l=function(){return m.mobOrTab},p=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,
c){return M.contains(c.id,a)}).length},u=function(){return p("grpm")||m.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=Q(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return r.now()-m.birthdate},getPageTime:function(){var b=k.NA;!a&&f.isDef(g.chrome)&&f.isDef(g.chrome.csi)&&f.isFunction(g.chrome.csi)&&(b=r.round(g.chrome.csi().pageT));return b},isVideo:q,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=f.isFunction(m.contextNode.getAttribute)&&m.contextNode.getAttribute("data-ias-container")||m._cl_adpath)&&f.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(m._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new $).accepts()},
isOmidForWeb:function(){return(new Ea).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==fa());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));
return b},isInMobiMraidVideo:h,isDeviceTypeGroupMobile:l,usesIASFullyInViewCustomMetric:function(){return p("fiv")||m.use100v||!u()},usesGroupMCustomMetric:u,isCeltra:function(){var b=!1;a||(b=Fa().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return u()&&l()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=
r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!q()&&b&&"jload"===m.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;m.contextNode&&f.isFunction(m.contextNode.getAttribute)&&(c=m.contextNode.getAttribute("data-ias-check-tag"),d=m.contextNode.getAttribute("data-ias-check-done"),e=(e=m.contextNode.getAttribute("data-ias-callback"))&&
f.isFunction(r.getWindow()[e]));var h=f.isDef(JSON)&&f.isFunction(JSON.parse);a=m.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var q=!0===m.fwMonitoring||"true"===m.fwMonitoring;h&&a&&("true"===c&&"true"!==d&&e?(b=!0,q&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,q||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(v),y={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===
a?g.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",y.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=
b.relatedTarget;this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=I.defaultView&&I.defaultView.getComputedStyle;b=b||"";d?c=(g=I.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(v.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in
c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(t.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?I:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(I.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},
isSandboxed:function(g){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
y.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var Ub=function(g,a,b,c,d,e,h,q){var l=0,p=0,u=!1,w=function(a,e,q,g,w,D){q=q||!b.on("postDts");var t=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==h.getCurrentLoc()))try{var s=m.dtBaseURL,v=new Q(s,!0),y=r.now();
n.getAggregator().trigger("preSendDt",a);s||(v.path("dt"),b.on("usedtdomain")&&v.sub("dt"));x(v,a,e);w&&w.field&&v.setParam(w.field,w.value);g||J(v,a);n.getAggregator().trigger("send",v,function(){p+=1;l=r.now()-y;f.isFunction(D)&&D()},q);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(B){__IntegralASDiagnosticCall("dt-"+a,B),n.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){u||w(k.DT_CODES.UNLOAD,-1,!0)};var D=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",
jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&w(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},x=function(a,b,e){var h=new Y(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},J=function(c,g){var f,u={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)u.clog=q,t.isVideo()&&(f=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=n.getAggregator().request(f))&&!f.isEmpty()&&(u.ve=f));g===k.DT_CODES.UNLOAD&&(u.ndt=p);-1!==m.mode.indexOf("jsvid")&&(u.vv=n.getAggregator().request("videoVersion"));
u.NULL1=b.output();u.NULL2=h.stringify(10);u.em=t.embedded;u.fr=t.friendly;u.e=a.toString();u.tt=m.mode;u.dtt=l;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);c.setParam("tv",u);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,b,c){w(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:D,updateDtCount:function(){p++},unload:g});return{send:w,unload:g,
diagnostic:D,setViewabilityMod:function(a){}}},B=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?s.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==v.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=s.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},s={findElementsWithSize:function(g){var a=[],b=function(c){1>s.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(y.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===y.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),
width:r.round(b.width),height:r.round(b.height)}}catch(c){n.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(v.outerWidth)&&(g.width=v.outerWidth,g.height=v.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(v.screenX)?(g=v.screenX,a=v.screenY):f.isDef(v.screenLeft)&&(g=v.screenLeft,a=v.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=s.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=s.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=I.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&r.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,h=1E4;b=y.nodeIsAbsolutelyPositioned(g);d=!s.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!s.tagNameIs(d,
"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==I&&d!==a)}return{width:r.round(e),height:r.round(h)}},hasBackgroundImage:function(g){g=y.getStyle(g,"background-image");return""!==g&&"none"!==g},isEmptyTeadsFrame:function(g){try{var a,b,c=!1,d=g&&"IFRAME"===g.nodeName&&g.contentDocument;g&&g.parentElement&&"teads-player"===g.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},
findChildWithLargestContent:function(g,a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==g&&"inline"!==y.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;var h=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))h=!1;e=h&&0<s.getNodeArea(a.parentNode)}!e||
b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},h=null,q=function(a){var b,c,h=null,q=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],k=s.getNodeArea(f),n=f,m=void 0;if(m=n.parentNode===g)if(m=void 0,m="DIV"===n.nodeName)if(m=void 0,m=!e(n))if(m=void 0,!(m="0"===y.getStyle(n,"opacity")||"hidden"===y.getStyle(n,"visibility"))){for(var C=m=void 0,n=n.childNodes,m=0;m<n.length;m++)1===n[m].nodeType&&(C=!0);m=!C}(n=!m)&&d&&"DIV"===f.nodeName&&(n=!1);m=s.isEmptyTeadsFrame(f);
k>q&&n&&!m&&(h=f,q=k)}h&&(h.hasValidSizeForMobileApp=1<q);return h}(function(b){var c,d,e,h,q=[],g=a||"iframe img a object embed div".split(" ");c=0;for(d=g.length;c<d;c++){e=g[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,h=f.length;e<h;e++)q.push(f[e])}return q}(g));q&&(h=c(q),h.hasValidSizeForMobileApp=q.hasValidSizeForMobileApp);return h},screenSize:function(){if(t.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(v.screen)&&
(g={width:v.screen.width,height:v.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(s.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:v.screen.availLeft,scrY:v.screen.availTop,width:v.screen.availWidth,height:v.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;t.friendly&&(g=t.embedded?(g=s.getOurIFrameInTop())&&g.frameElement:m.contextNode);return g},
getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(s.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},
querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[m.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&
t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=s.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=s.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&
g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&s.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&s.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});
return a},getDimensionFromAttributes:function(g){var a,b=s.getAttribute(g,"width");g=s.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&
(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=s.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||s.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},
getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},tc=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Xa=function(){return{createInstance:function(a,b){return t.isDomless()?new Oc:new Pc(a,b)}}},Pc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),q=h&&h.length&&h.join("|"),l=m.exchList;q&&(e=f(l).map(function(a,b){return 0<=q.indexOf(M.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Oc=function(){return{parse:function(a){}}},xb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};m.integration&&(d.intblk=
"integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){var b=m[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===
a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Ob=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,
b,c,d){var e=0,h=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;h=B({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(h.area()/a.area()*100));return e}}},Bb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,
16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=v.Uint32Array&&v.crypto&&v.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),v.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){n.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,
b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},kb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Qc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},
getTask:function(){return e?function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),q=a.getTimeInViewForRts();f.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[q])c[q]()}}}},Tb=function(){return{createPingJobs:function(a,
b,c,d,e){return f(b.getTimeThresholds()).map(function(b,q){return new Qc(q,a,c,d,e)})}}},Ga=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-m.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),
p=n.getAggregator().request("mScreenEvents").getCurrentEvent(),u=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&
f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},xa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var q=a.indexOf("?");b=b+"="+c;if(-1===q)return a+"?"+b;q++;return a.slice(0,q)+b+"&"+a.slice(q)},c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,
e,h,q){var f=c(),p,u,k;q=q||"ias_callback";d=""+d;RegExp(q).test(d)&&(p=RegExp("("+q+"=)(.[^&]*)").exec(d)[0],u=p.split("=")[1],k=M.stringToFn(u),d=a(d,p));v[f]=function(a){e(a);h&&k&&k(a);v[f]=void 0};return d=b(d,q,f)},wrapToGlobal:function(a){var b=c();v[b]=function(c){a(c);v[b]=void 0};return b}}},Wb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=Q(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,
nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",c,a.callback,!0):n.getAggregator().trigger("send",c,function(){n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?
a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,l){var p;try{p=d(c,l),a.enabled?n.getAggregator().trigger("jsonp",p,a.callback,!0):n.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]=
"db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var l;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));l=d(a,e);n.getAggregator().trigger("send",l,f.noop,!0)}catch(x){__IntegralASDiagnosticCall("fwjsvidimp",
x,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),u=f.indexOf("BEGIN__ADSAFE"),k=-1!==u,D=k?f.slice(u):"",a=k?f.slice(0,u):a(f);return{isFW:d,baseUrl:a,macroUrl:D,sendImpression:function(a){var d=function(){b.nodeType?n.getAggregator().trigger("addNode",
b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},
getWindow:function(){return v},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?n.getAggregator().request("omidVerificationClient"):v},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},
getDoc:function(){t.isDomless();return I},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){t.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){t.isDomless();return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Jb=function(){return{createInstance:function(){return t.isDomless()?new Rc:new Sc}}},Sc=function(){var a,b=!1,c=!1,d=n.getAggregator().request("features"),e=new ca,h=function(){var b;
d.on("blur")?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},q=function(){var b=r.getWindow(),c=function(){e.run(h())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz",
"ms","webkit"]).each(function(e,h){var q=h+"Hidden";f.isDef(d[q])&&(a=q,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){e.push(a);c||(c=!0,q())},supportsVisAPI:function(){return b}}},Rc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Lb=function(){return{createInstance:function(a,b){return t.isDomless()?new Tc:new Uc(a,b)}}},Uc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,l=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=
b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(u){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(n){}try{p.e=encodeURIComponent(v.document.referrer)}catch(x){}}try{"jsi"!==
m.mode&&(p.d=encodeURIComponent(v.location.href))}catch(r){}try{p.f=encodeURIComponent(m.jsref)}catch(A){}try{h=l(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(P){}p=d(p);p=e(p);h=[];for(var C in p)p.hasOwnProperty(C)&&h.push({key:C,val:p[C]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?
c:h()}}},Tc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Ib=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},Mb=function(){var a=[],b={},c={sl:"n"},d=0,e,h,q,l={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},u=function(a,c){var d=new Hc(c);return b[a]=d},w=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},m=function(){f(c).each(function(b,c){l[c]+=a.length?q-d:q});d=q},x=function(b){a.length&&m();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(l[b]+=l.n);c[a]=b});a.length||m()},r=function(a){var c,
d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e=a.omidObstructions,l={sl:w(a.viewState)};q=t.getTagTime();x(l);l.t=q;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(l).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(l);f(c).mixin(a);
c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");f.isDef(e)&&""!==e&&(c.omidObstructions=e);return h=c};(function(){u("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});u("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();
return{fastForward:function(){q=t.getTagTime();m()},registerLocation:function(d){var h,q=!1;c.sl==w(d.viewState)&&a.length?(h=new r(d),a[a.length-1].details=h.details):(h=new r(d),a.push(h),e=d.viewState,q=!0);n.getAggregator().trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(q&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(l).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+
"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:u,getCurrentLoc:function(){return w(e)},getCurrentEvent:function(){return h}}},M={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=v,d=a.split(".");for(a=0;a<d.length;a++)if(b=
c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},Vc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);
return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=s.getFirstChildElement(b))&&
s.tagNameIs(b,"a"),f=s.attributeMatches(b,"href",d),k=s.attributeMatches(b,"target",e);h&&f&&k&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},Wc=function(){var a=Vc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;
c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},lc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==
typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},Xc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&
(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}},jc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),h,q={};d!==c&&(h=f.stringifyTriState(d),q.res1=h,q.ps=h,q.ts=r.now(),q.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",q));c=d}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)Xc(b).onResize(d)}}}},
settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},kc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(t.embedded)try{h=m.contextNode.parentNode,b=Wc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",
d),a.start())}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Ha=function(a,b,c,d){var e,h=0,q=0,l=!1,p=function(){e=Math.round(s.getNodeArea(a.body));if(e>=d){for(var p,u=e+20*e/100,m=a.querySelectorAll("iframe"),m=f.fromNodeListToArray(m);m.length&&(q<u||h<c);)p=m.shift(),p=Math.round(s.getNodeArea(p)),p>=d&&(h++,q+=p);q>=u&&h>=c&&(u={va:e,bia:q,bin:h},n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.FF,b,f(u).toION()),l=!0)}},u=function(){var b;b=new MutationObserver(function(a){l?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!l&&f.isDef(v.MutationObserver)&&u())},ic={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
Ha(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},hc={name:"BS_Browser",dependencies:[],creator:function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ha(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&
!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Gb=function(){return{createInstance:function(a){return t.isDomless()?new Yc:new Zc(a)}}},Zc=function(a){var b,c,d,e=new Aa,h=new da,q=new $c(e),l=new ad,p=new bd,u=new cd(e,a),k=function(){f.isUndef(d)&&(d=new dd(e));return d},m=function(){e.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new ed(a,e)},adTalkMessageCollection:function(){return l},idMapModule:k,interFrameQuerySelector:function(a){return new fd(a)}})};
return{isApplicable:function(a){return f.isDef(v.JSON)&&f.isDef(v.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){m();h.traverse(q.addFrame);u.startListening();u.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){u.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ia(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ia(e,!0));return c},getIdMap:k}},
Yc=function(){return{isApplicable:function(){return!1},start:function(){}}},ed=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=n.getAggregator().request("features").on("swapids")?m.oid:m.asid;var h=a||{},f=m.asid,d=d.tagId,l=t.embedded,p=t.friendly,u=m.birthdate;c=c.split("-")[2];var w;t.friendly?w="["+k.AD_IDENTIFIER+"-"+m.asid+"]":(w=r.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,
""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:l,srcIsFriendly:p,srcBirthdate:u,iasCommonId:c,nodeSelector:w,positionStr:e,version:"0.1"}},ad=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},gd=function(a,b,c,d){var e,h=a==v;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:
void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var q=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){l(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},l=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,
c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){q(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},$c=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,h,f){var l=a.request("adProxy").getAll();e=new gd(e,h,l,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ia=function(a,b){var c=function(a,c){var f=c.adProxies,l="";if(c.isValidForMapping()){if(b)l+=
d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";l+=p}return l}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},dd=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,
d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},h=function(a){var e=!1,e=!t.embedded,h="BODY"!==s.getNodeName(c)&&"HEAD"!==s.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var w=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?w:!a.srcIsFriendly)}e&&h&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,
d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},fd=function(a){var b=new da,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,
e){var l,p,u;try{p=d(c,e),p||(l=b.getFrames(!0,a),f(l).findFirst(function(a,b){return u=d(b,e)}))}catch(k){}return p||u||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},cd=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();
return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",c)},l=function(c,d,e){var h,l,m,A,t;try{h=a.request("frameCollection");l=a.request("adTalkMessageCollection");m=d.messageContent.self;l.add(d);var C=h.getMe();C.unifiedId>m.unifiedId&&(C.unifiedId=m.unifiedId);var s;s=r.now()-d.sentTime;d.transferDuration=s;l=A=h.getFrame(m.id);f.isUndef(l)||f.isUndef(l.selfDescription)?(A=
A||h.addFrame(c.source,m.id.split("-"),d),A.addInformationFromSrc(d,m),e()):A.addInformationFromSrc(d,m);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(v){n.getAggregator().trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new ea).send(h)},startListening:function(){c=new Ba;c.listen(e,l,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:l,createMessage:h}},hd=function(){var a=n.getAggregator().request("ids"),
b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},bd=function(){var a,b=[],c=function(a){a=new hd(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Nb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&
(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},id=function(a,b){var c,d,e=k.NA,h=e,q=!1,l=!1,p=!1,u=!b,w=n.getAggregator().request("browser"),m=function(a){if(w.browserIs(k.BROWSERS.WEBKIT)&&w.hasResizeObserver()){var b=a.target,d=r.getResizeObserver(function(b){b=b.pop();var f=0<a.intersectionRect.height||0<a.intersectionRect.width;0<b.contentRect.height*b.contentRect.width&&0===e&&f&&(e=100);c=b.contentRect;e!==h&&(d.disconnect(),r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",
e)}));h=e});d.observe(b)}},x=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(m(a),b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==h&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});h=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});u&&r.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(J(a));u&&
r.execAtEndOfThread(function(){t.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});q=!0},J=function(b){if(!f.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){l=!0}b&&null!==b.bodyElement?
x():b&&b.document?y.whenReady(x,b.document):l?n.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):x()},isReady:function(){return e!==k.NA},isStarted:function(){return q},getAdNodeDimensions:function(){var a;c&&(a=B({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},sa=function(){var a=!1;(function(){y.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}},
pc={name:"loopDelay",dependencies:[],creator:sa,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},jd=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},kd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},cb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&
!d&&(d=!0,n.getAggregator().trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[ld(),md(),kd(),jd()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},md=function(){return{start:function(a){Ec(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||
c)&&t.isVideo()}}},ld=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},nd=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,
supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},od=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=
!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},pd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",
function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(b){}}}},qd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=
n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},rd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},yc=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},vc=function(a){var b=!1,c=!1,d=!1,e=!1,h=n.getAggregator().request("omidAdSessionContext");h.queuedOutputItems=[];var q=new ga,l=n.getAggregator().request("omidAdSessionVerificationParameters"),
p=r.getWindow(),k=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,w=!1,m=function(){return l&&l.IAS&&0<Object.keys(l.IAS).length?l.IAS:l},x=function(){b&&c&&(!e||d)&&(v.omidSupported=!0,h.hasOwnProperty("impressionType")&&h.queuedOutputItems.push({code:"oiet",value:h.impressionType}),h.hasOwnProperty("creativeType")&&h.queuedOutputItems.push({code:"oct",value:h.creativeType}),aa(m()),w=!0)},J=function(a){var c;if("sessionStart"===a.type){h.adSessionType=
a.data.context.adSessionType;h.environment=a.data.context.environment;h.accessMode=a.data.context.accessMode;h.omidNativeInfo=a.data.context.omidNativeInfo;h.omidJsInfo=a.data.context.omidJsInfo;h.deviceInfo=a.data.context.deviceInfo;h.app=a.data.context.app;h.app&&"string"===typeof h.app.appId&&-1<h.app.appId.toLowerCase().indexOf("pandora")&&(h.ignoreDivAsCandidate=!0);a.data.hasOwnProperty("contentUrl")&&(h.contentUrl=a.data.contentUrl);h.isJavaScript="javascript"===h.adSessionType;h.isNative=
"native"===h.adSessionType||"javascript"===h.adSessionType;h.isLimitedSandbox=t.embedded;h.isHtml="html"===a.data.context.adSessionType;h.isWeb="web"===a.data.context.environment;l=a.data.verificationParameters;c=h.isHtml&&h.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?h.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,h.useOMID13Logic=!0,h.queuedOutputItems.push({code:"ohand",
value:"13"}),k.addEventListener("video",s),k.addEventListener("media",s));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},
{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,q,p,r=0;r<d.length;r++)f=d[r].root,q=d[r].field,p=d[r].code,"object"===typeof h[f]&&"undefined"!==typeof h[f][q]&&h.queuedOutputItems.push({code:p,value:h[f][q]});h.queuedOutputItems.push({code:"oast",value:h.adSessionType});h.queuedOutputItems.push({code:"oacm",value:h.accessMode});h.queuedOutputItems.push({code:"oenv",value:h.environment});h.hasOwnProperty("contentUrl")&&
h.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(h.contentUrl||"")});c?aa(m()):(b=!0,x())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),w?n.getAggregator().trigger("addOutputItem",{output:a},"oser"):h.queuedOutputItems.push({code:"oser",value:a}))},A=function(a){h.mediaType=a.data.mediaType;h.queuedOutputItems.push({code:"omtp",value:h.mediaType});"video"===
a.data.mediaType&&(h.isVideo=!0);a.data.viewport&&a.data.adView&&(h.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof h.geometryArrived&&q.checkForViewAttachmentBasedOnAdSessionType(h,a.data.adView)&&(h.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!h.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType);h.isNativeVideo=h.isNative&&"video"===a.data.mediaType;
h.isDisplay="display"===a.data.mediaType;c=!0;x()},s=function(a){a&&"start"===a.type?(h.videoStartArrived=!0,n.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(h.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType),x())};return{start:function(){k.registerSessionObserver(J,"IAS");k.addEventListener("impression",A)}}},wc=function(){return{accepts:function(){return!0}}},Ea=function(){var a=
n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new ba(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},xc=function(){return{start:function(){aa(m.contextNode&&(m.contextNode.dataset.iasParameters||m.iasParameters))}}},sd=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",
a)}}},td=function(a,b){var c,d=function(a){var d,f,l;try{d=a.eventData.percentageInView,f=c&&75<=d,l={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",l)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;
c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(h){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},ud=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,q=!1,l=new Ga,p=n.getAggregator().request("omidAdSessionContext"),u={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+
d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},w=function(){q=!0},m=function(a){try{var l="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),w="n",m=!1;switch(a.type){case "start":l="adVideoStart";p.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=u;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":l="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":l=
"adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);m=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":l="pauseAd";break;case "resume":case "bufferFinish":l="resumeAd";break;case "skipped":l="adSkipped"}if(""!==l){var r=n.getAggregator().request("mScreenEvents");r&&(w=r.getCurrentLoc());c.push({t:u-d,tp:l,sl:w,ad_duration:h,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var D=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),
l=-1!==D?D+1:void 0,t=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===q?(f.isDef(l)&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",l),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",t)):(f.isDef(l)&&n.getAggregator().trigger("addOutputItem",{output:l},"vbp",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:h});
var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");f.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});m&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(y){__IntegralASDiagnosticCall("omidvideo",y,v.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",
w);n.getAggregator().provide({omidVideoEventsString:u});a.addEventListener("video",m);l.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ja=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});
a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},vd=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():
!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},Db=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),
b=b.concat(a.getMraidMeasurementStrategies());(b=(new ha(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new wd(b);return new vd(b,c,d.isMobileAppEnvironment())}}},Eb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new ba(a),e=new Ea,h=[];if(b.accepts()&&!e.accepts()){var f=new $,l=new xd,e=new yd(a,new z),f=[{environment:f,measurementStrategy:new zd(a,
new z)},{environment:l,measurementStrategy:new Ka(new ia,r.getWindow(),new z)}],f=(f=(new ha(f)).resolve())?f.measurementStrategy:{},p=new La(new Ma(new U),new U,l.accepts()),l=new qd(a,b,m.mode),k=new Na(e,f,new z,p),b=new rd(a,b,m.mode),a=new Oa(e,f,new ud(a,new z),new z,p);h.push({environment:l,measurementStrategy:k});h.push({environment:b,measurementStrategy:a})}return h},getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),d=new od(b),e=[];if(d.accepts()){var h=
new nd(b,d,m.mode),f=new pd(b,d,m.mode),l;l=new sd(b,new z);if(d.supportsAdContainerGeometry()){var p=new Ad,k=new Bd,w=new Ka(new ia,r.getWindow(),new z),D=new Cd(b,new z),p=(p=(new ha([{environment:p,measurementStrategy:D},{environment:k,measurementStrategy:w}])).resolve())?p.measurementStrategy:{},k=new La(new Ma(new U),new U,k.accepts()),w=new Dd(b,new z),b=new Na(w,p,new z,k);l=new Oa(w,p,l,new z,k)}else k=new td(b,new z),b=new Ja(k,new z),l=new Pa(k,l,new z);e.push({environment:h,measurementStrategy:b});
e.push({environment:f,measurementStrategy:l});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Ed(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Fd(r.getWindow(),e),h=new Gd(r.getWindow(),new z);e.accepts()?(d=new Hd(r.getWindow(),new z),d=new Pa(h,d,new z),d={environment:e,measurementStrategy:d}):(e=new Ja(h,new z),d={environment:d,measurementStrategy:e});
a.push(d)}return a}}},ha=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},wd=function(a){var b=!1,c,d={winDimensions:B({scrX:0,scrY:0,width:0,height:0}),adDimensions:B({scrX:0,scrY:0,width:0,height:0}),containerDimensions:B({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?
new B({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):B({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,
shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;f.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=
b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Pa=function(a,b,c){var d=!1,e=!1,h=!1,q,l,p,u,w=function(){if(!f.isUndef(l)){var a=[],b,m;d?(e?(m=!1,b=100):(m=u,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(m=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;l.shouldDelegateToDomBasedViewability=
m;l.percentageInView=b;l.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;l.outOfViewReason=a.join(".");q=l;c.trigger("measurementChanged",q)}},m=function(a){l=a;p=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;w()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);w()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(m);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},Fd=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Hd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Dd=function(a,b){var c=function(a){var c=new B(a.eventData.viewport||
{width:0,height:0}),f=new B(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),l=new B(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:l.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,
viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
La=function(a,b,c){function d(a,b,c){c=l(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),h=Math.min(a.y+a.height,b.y+b.height),e=e-c,h=h-d;return{x:c,y:d,width:0<e?e:0,height:0<h?h:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},l=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};
return{calculateGeometricMeasurement:function(e,u){if(f.isDef(e)&&f.isDef(u)){var m=e.viewport,n=e.computedAdContainer,x=n.obstructions,t=e.omidObstructions,s=x&&0<x.length,P=e.originalAdContainer,C=u.adGeometry,v=u.adFound,y=e.detectionMethod,G=0,m={x:0,y:0,width:m.width,height:m.height},F=q(P,C),O=e.outOfViewReason,L=0,K=0,z=s||!1,L=1>=C.width*C.height;c&&L&&(v=!1,O=O||"",v||-1!==O.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(O=k.OUT_OF_VIEW_REASONS.GEOM+(""!==O?"."+O:"")));if(v&&0<e.percentageInView){L=
d(m,n,F);s?(G=l(n,F),G=h(m,n,G),G=q(n,G),G=a.calculateObstructedArea(G,x)):G=0;K=G;G=Math.round((L-K)/(F.width*F.height)*100);s&&0===K&&(z=!1);for(var C=(new B(F)).getRoundedGeometry(),v=z,N,s=0,K=b.getConfig(C).numberOfSlices,T=r.floor(C.height/K)||1,x=[],L=v?a.getObstructionStatusBySlice(K):[],Qa,s=0;s<K;s++)N=C.y+T*s,s==K-1&&(T=C.y+C.height-N),N={x:C.x,y:N,width:C.width,height:T},Qa=d(m,n,N),N=1==Qa/(N.width*N.height),x.push(N);if(v)for(n=r.min(L.length,K),s=0;s<n;s++)x[s]=x[s]&&!L[s];n=x}else n=
b.getConfig(C).defaultSliceArray;P={windowDimensions:m,containerDimensions:P,adDimensions:F,percentageInView:G,viewState:50<=G?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=G?"":O||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:y,isObstructed:z,sliceStatus:n};f.isDef(t)&&""!==t&&(P.omidObstructions=t);return P}}}},Ad=function(){return{accepts:function(){return t.isAvidNative()}}},Cd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new B({x:0,y:0,width:a?c.width:0,height:a?
c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Bd=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Na=function(a,b,c,d){var e,h,q,l=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",
a)}},p=function(a){e=a;l()},u=function(a){h=a;l()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return q}}},Ma=
function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,q,l,p;q=e&&0<e.length;var k;if(q){k=Math.round(d.width);var m=Math.round(d.height);h=Array(k);for(l=0;l<k;l++)h[l]=Array(m);k={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:m}}else k={};h=k;m=k=0;if(q){for(;k<e.length;k++){q=e[k];l=m=h;var n=q;h=Math.max(l.x,n.x);q=Math.max(l.y,n.y);p=Math.min(l.x+l.width,n.x+n.width);n=Math.min(l.y+l.height,n.y+n.height);l=p-h;p=n-q;l=0<l?l:0;p=0<p?p:0;h-=
m.x;q-=m.y;l=h+l;p=q+p;for(h=Math.round(h);h<Math.round(l);h++)for(n=Math.round(q);n<Math.round(p);n++)void 0!==m.matrix[h]&&void 0===m.matrix[h][n]&&(m.matrix[h][n]=1,m.obscuredPixelCount+=1);h=m}m=h.obscuredPixelCount;k=h;if(f.isUndef(k.matrix)||0===k.matrix.length)c=[];else{q=0;p=!1;h=k.matrix[0].length;l=k.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var n=r.floor(h/p)||1,s=[],t=0;t<h;t++){p=!1;for(var A=0;A<l;A++)if(1===k.matrix[A][t]){p=!0;break}q++;p&&(t+=n-q,q=n);if(q==n||t===
h-1)s.push(p),q=0}c=s}}else c=b;return m},getObstructionStatusBySlice:function(){return c}}},yd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,h=new ga,q=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(l(d),d=null)):r.setTimeout(q,50)},l=function(a){if(a&&a.data&&a.data.adView){var l=a.data.adView,m=!!(l.measuringElement&&l.containerGeometry&&l.onScreenContainerGeometry);if(c.delayingViewabilityEvents)d=
a,e||(e=!0,q());else{var r=[];l.onScreenGeometry&&l.onScreenGeometry.obstructions&&0<l.onScreenGeometry.obstructions.length&&(m&&(l.onScreenContainerGeometry.obstructions=l.onScreenGeometry.obstructions),-1<l.reasons.indexOf("obstructed")&&100>l.percentageInView&&(l.onScreenGeometry.obstructions=l.onScreenGeometry.obstructions.slice(0,4),f(l.onScreenGeometry.obstructions).each(function(a,b){r.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));var s=new B(a.data.viewport||
{width:0,height:0}),t=new B(l[m?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),m=new B(l["onScreen"+(m?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),l={viewport:s.getRoundedGeometry(),originalAdContainer:t.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:l.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:p(l.reasons),omidObstructions:r.join("_")};"undefined"===typeof c.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(c,
a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,l)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&
c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&l(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",l)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},$=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},zd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),
d=null,e=!1,h=new ga,f=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(l(d),d=null)):r.setTimeout(f,50)},l=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,f());else{var l=a.data.adView.geometry,m=a.data.adView.containerGeometry,r=!!l,s=a.data.adView.measuringElement&&!!m,l=(new B({x:r&&s?l.x-m.x:0,y:r&&s?l.y-m.y:0,width:r?l.width:0,height:r?l.height:0})).getRoundedGeometry();"undefined"===
typeof c.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:l,adFound:r})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&l(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",l)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},xd=function(){var a=
n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Oa=function(a,b,c,d,e){var h=!1,q=!1,l,p,m,w,r,s=function(){if(!(f.isUndef(p)||f.isUndef(m)||f.isUndef(w))){r=!0;var a=e.calculateGeometricMeasurement(p,m),b=h&&q,c=h&&50<=a.percentageInView,n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,
sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0},s=a.omidObstructions;f.isDef(s)&&""!==s&&(n.omidObstructions=s);b&&(n.percentageInView=100);b||c?n.viewState=k.IN_VIEW:(n.viewState=k.OUT_OF_VIEW,n.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);l=n;d.trigger("videoGeometryMeasurementChanged",l)}},t=function(a){p=a;s()},A=function(a){m=a;s()},P=function(a){w=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?
h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);s()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(A);b.start();c.addVideoPlaybackEventListener(P);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",
a)},isMeasurable:function(){return r}}},Ka=function(a,b,c){var d,e=function(){var b=a.find(),e,l,p=!1;f.isDef(b)?(l=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),l=!1);if(b=l)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:l})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Ed=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Gd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var h={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:h,adDimensions:h,containerDimensions:h,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,
sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(f){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},l=function(){c||q()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},
"mi",{type:"impression"});b?n.getAggregator().trigger("exec","mraid.js",l):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},bc=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},pb=function(){var a=new R({tiv:[1E4]}),b=f([k.IN_VIEW,
k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ob=function(a,b){var c,d,e;c=a.on("everySecond");var h=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var f=[2E3,5E3,15E3],l=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new R({tiv:d}),d=d[0]):h?(c=new R({tiv:f}),d=f[0]):(c=new R({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:l,isInViewIgnoringRender:function(a){return l(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},rb=function(a,b){var c;
c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),h=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],f=[1E3,5E3,15E3],l=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:h}):d?new R({tiv:l}):new R({tiv:f});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,
isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},qb=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},tb=function(a,b){var c,d,e,h=r.getMaxNumber(),q=b.isVideo(),l=a.id;d=
a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,l,m,n=b.adDimensions.area();m=1===b.tabHidden;var u=r.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;l=b.ub||h;if(n>=e&&n<=l)return!0});m=!m&&u>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(m=!1);q&&(m=m&&b.isVideoPlaying,p&&(m=m&&b.isSoundOn));
return m};c=new R(a);d=a.qiv;(function(){e={};var a;f.isDef(m.rts)&&f.isDef(m.rts[l])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=m.rts[l])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:l,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},
sb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,l=c.on("customMetric"),p=c.on("groupmCM"),m=function(a,b){var c,l,k,q,m;c=f(b.mediaTypes).contains(d);l=f(b.distributionChannels).contains(e);k=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;q=M.contains(b.id,"fiv");m=M.contains(b.id,"groupmCM");q=!q;m&&(q=p);return q&&c&&l&&k};return{resolve:function(){var b=
[],c;l&&k&&(c=f(a.customViewability).filter(m),f(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ja(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Id;b.push(new Jd(c,parseInt(a[1].replace("%"))));b.push(new ja(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ja(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Id=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:
b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ja=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Jd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&
(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},va=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",h=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(h)}}},cc=function(a,b,c,d){var e,h,k,l,p,m,r=function(a,b){return!b&&a},s=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},t=function(a){var n=0,r=1===a.tabHidden,w=a.isVideoPlaying,t=a.isSoundOn,x=a.isVideoPlayingInFullscreen;
f(a.sliceStatus).each(function(a,b){k(b,r,w,x)?e[a].mark():e[a].stop();l[a]=e[a].getTotalTime()});J("slcVt",l);d&&(f(a.sliceStatus).each(function(a,b){s(b,r,w,x)&&t?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),J("slcVtVol",p));m=d&&b&&b.shouldIncludeSound?p:l;a=f(m).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(n)},J=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},A=function(a){!e&&a.sliceStatus&&(e=[],h=
[],l=[],p=[],f(a.sliceStatus).each(function(a){e.push(new W(1));l.push(0);d&&(h.push(new W(1)),p.push(0))}))},v=function(a){f.isUndef(a.sliceStatus)||(e||A(a),t(a))};return{start:function(){k=d?s:r;a.addMeasurementChangedListener(v)}}},ta=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Xb=function(a,b,c,d,e,h,f,l,p,m){var n=!1,s=t.isVideo(),x=h.request("mobileApp"),J=X().applies(c,
e),A=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||J,v=t.xDomainIframe&&!A,C=new Ca(10),y=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),h.trigger("measurable"),n=!0)};h.on("delayedViewabilityReady",function(){B();y()});h.on("delayedViewabilityReadyCallOnly",y);var B=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=x.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(l.collect(),
c):(e=l.collect(),x.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):v&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),s&&!t.isAvid()&&m.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var n=r.round(C.getTime()/C.getCount());f.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(w){h.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:B,stringifyPingTimes:function(){return e.on("everySecond")?
"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&J,d=!d&&!e&&!a;return x.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){x.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},qc={name:"viewabilityLoopLifecycle",
dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,h=Kd(c),q=[new Ld,new Md(h)],l=function(){return f(q).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&n.getAggregator().trigger("adSessionComplete")},u=function(a){y.addEvent(v,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},w=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a=
{id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Ic(a.checkScreenLoc,h.getPollingFrequency()),(b=l())?b.start(e):e.start(!0),c?t.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
u("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||w();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:k.TIERS.VIEWABILITY}},Kd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Md=function(a){var b,c,d,e,h,f=function(l){d&&!h&&1>l?(h=!0,r.setTimeout(function(){f(l)},
1E3)):(e=1>l,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},l=function(a){f(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",f);n.getAggregator().on("newScreenEvent",l)}}},Ld=function(){var a,b,c,d=!1,e=function(h){if(c&&!d&&1>h)d=!0,r.setTimeout(function(){e(h)},1E3);else return 1>
h?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},h=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",h)}}},Ud=function(a,b,c,d,e,h){var q,l,p,u,w,D,x,J,A,P=s.getElementsWindow(b);s.getElementsDocument(b);n.getAggregator().provide("iframeCalculatorHelper",Nd(P));var C=
Od(b,d),z=k.AD_IDENTIFIER+"-"+m.asid,E=!1,G=B({}),F=t.isDeviceTypeGroupMobile(),O=t.usesGroupMCustomMetricMobilePassThru(),L,K=function(){if(!q)if(q=C.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&t.embedded){var a=q,e=(new B(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(h){n.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},H=function(){var b,d=t.xDomainIframe&&E;b=
F&&E&&p.isReady();b=d||b;d=C.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?l=p.getPiv():f.isUndef(l)&&(b=!F&&(t.friendly||f.isDef(v.mozInnerScreenX))&&e.on("offscreen"),J=K(),x=new B(s.calcWinDims()),D=new B(b?s.calcMonDims():{}),A=d?C.getClippedDims():G,l=a.calcPercentInView(J,x,D,A));return l},N=function(){return a.calcInitialViewState(H())},T=function(){return b===v?!1:K().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),h=b===d,f=e.body,l=n.getAggregator(),
m=new X,q=l.request("browser"),s=l.request("features"),l=l.request("context"),x=!t.xDomainIframe,e=h&&f?e.body:b;L=t.friendlyIframe?d.frameElement:e;y.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});y.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});m.applies(q,s,l)?(p=id(b,x),p.start(),E=!0,O&&c!==k.DETECTION_METHODS.AD_PLACEHOLDER&&(d=new Pd(K().getRounded()),m=new Qd,m=new Rd(p.getObservedNode(),m),u=new Sd(d.getSlices(),m))):
O&&(w=new Td(a))})();return{mark:function(){s.setAttributeOf(L,z,"")},cleanup:function(){s.removeAttributeOf(L,z)},isNode:function(a){return b===a},isHidden:T,isObstructed:function(){return!1},getDims:K,getPercentInView:H,getLocationState:N,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:N()},getDetectionMethod:function(){return c},getContainerDims:function(){return C.allowsOptimization?q:B(d)},refresh:function(){A=J=x=D=l=q=void 0;if(h){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==
v&&c&&c!==I&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?a=u.getSliceStatus():t.friendly&&w&&f.isDef(J)&&(a=w.getSliceStatus(J,x,D,A));return a}}},Vd=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},m=function(l,m,p,q){var u=h()||0===c.length;l=Ud(a,l,m,p,b,q);h()&&(p=c.shift(),e=f(c),p.cleanup(),d=void 0);c.push(l);e=f(c);u&&l.mark();
u&&m!==k.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",l)},l=function(){if(d)return d;var a,b=!1,c=0,h=0;e.each(function(d,e){var f;f=e.getDims();f.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,f=f.area(),c+=f,h+=a/100*f)});return d={totalArea:c,totalInView:h,hasMeasurement:b}},p=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},u=function(a){var b;b=l();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=
0;return b},w=function(c){var d=b.bootstrapOn("mobOrTab"),d=l().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!t.isVideo();return a.calcInitialViewState(u(c),d)},s=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},x=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===s(b)&&m(b,k.DETECTION_METHODS.MUTATION)})});n.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,
b){var d=s(b);-1<d&&c.splice(d,1)})});return{getDims:x("getDims"),isObstructed:x("isObstructed"),getDetectionMethod:x("getDetectionMethod"),getContainerDims:x("getContainerDims"),getViewState:w,getViewStateIgnoringRender:function(){return w(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:x("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(a){var b,
e=[],h=c[0],f=k.OUT_OF_VIEW_REASONS;h&&(b=d||w(),p(a)?e.push(f.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(f.GEOM),h.isHidden()&&e.push(f.HIDDEN),h.isObstructed()&&e.push(f.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:x("getSliceStatus")}},Wd=function(a){var b=!1;if(!f.isUndef(v.MutationObserver)){var c=new v.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&
n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(I.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},de=function(a,b){var c=[Xd(),Yd()],d=[ia(),Zd(),$d(),ae(),
be(),ce()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},$d=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||fa();var c=s.crossQuerySelector(fa().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},ee=function(a,b){var c,d=s.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},be=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return v},isApplicable:function(){return t.embedded},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},fe=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return M.contains(b.src,
"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},ge=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&
c&&M.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},he=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&B(k).isOneByOne(),m=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return M.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&m&&c&&k&&d()&&e()},getCssSelector:e}},fa=function(){var a,b=n.getAggregator().request("features");a||(a=[he(),ge(),fe()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,
b)})},ae=function(){var a,b=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Fa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},
Fa=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&M.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ia=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&
!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Yd=function(){var a,b;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var c=f.isFunction(m.contextNode.getAttribute)&&m.contextNode.getAttribute("data-ias-container");b=c&&"#"+c||m._cl_adpath;if(c=s.crossQuerySelector(b))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},Xd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ce=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,
isApplicable:function(){return!0},find:ee,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Zd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Od=function(a,b){var c,d;c=[ie(),je(),ke()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=le();c.isApplicable(b)&&(c.setBaseStrategy(d),
d=c);return d},ke=function(){return{calcDims:function(a,b){var c,d,e=new B(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},je=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,
getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},ie=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new B(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,
r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},le=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=n.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Nd=function(a){var b,c,d,e=n.getAggregator().request("features"),
h=n.getAggregator().request("browser");a=a||r.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,l=e.length;h<l;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&m(b.parent,c)}return c},l=function(){var l,
u={};try{var w,D,x,v,A,y,C=r.getMaxNumber(),B=r.getMaxNumber();t.friendly?(w=m(),x=w.left,v=w.top,C=w.width,B=w.height,D=s.browserWindowPosition(),A=D.scrX+x,y=D.scrY+v):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||n.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),A=c.scrX,y=c.scrY):f.isDef(a.mozInnerScreenX)&&(A=r.round(a.mozInnerScreenX),y=r.round(a.mozInnerScreenY));var u={scrX:A,scrY:y,iFrameClippingWidth:C,iFrameClippingHeight:B},z,G,F=b||s.getIeDimObj(a);b=F;
f.isDef(a.innerWidth)?(z=a.innerWidth,G=a.innerHeight):F&&f.isDef(F.clientWidth)?(z=F.clientWidth,G=F.clientHeight,0===z&&0<F.offsetWidth&&(z=F.offsetWidth),0===G&&0<F.offsetHeight&&(G=F.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(z=a.frameElement.clientWidth,G=a.frameElement.clientHeight);l=z;u.height=G;u.width=l}catch(E){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new B(l())},getClippedDims:function(){var a=
l();return new B({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Rb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new me:new ne(a,b,c)}}},ne=function(a,b,c){var d,e=n.getAggregator().request("browser"),h=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,q=Vd(b,c),l=function(){var a,b,l;d=d||de(t,c);a=d.find();!a&&d.usePlaceholder?(p(),t.isDeviceTypeGroupMobile()&&e.hasMutationObserver()&&r.getMutationObserver(u).observe(h,
{childList:!0})):a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),l=d.allowForAdContainerChange,f(a).each(function(a,c){q.addAdComponent(c,f.resolve(d.detectionMethod),b,l)}))},p=function(){var a;q.hasAd()||(a=s.getPlaceholderSpan(),h.insertBefore(a,m.contextNode.nextSibling),q.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))},u=function(a,b){var c=!1;f(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())};
Wd(a);return{find:function(){q.isUsingPlaceholder()||!q.hasAd()?l():q.refresh();return q},getDetectionMethod:function(){}}},me=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},zb=function(a){var b,c=[],d=a||v,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,
b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,v.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},yb=function(a){var b=new oe,c=new pe,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=n.getAggregator().request("omidAdSessionContext"),m=t.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var l;if(!(l=m)){var p;if(!(p=t.isAvid())){var u;if(!(u=t.isAvidNative())){var r;if(r=!f){var s;if(s=a.bootstrapOn("mobOrTab")){var x;if(x=a.bootstrapOn("mobAppWebview")){var m="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
v,f=!1;for(v=0;v<m.length;v++)if(-1<d.indexOf(m[v].toLowerCase())){f=!0;break}x=!f}s=x}r=s}u=r}p=u}l=p}if(l&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)ka[ka.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(y){n.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},qe={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(I.referrer)}catch(k){}}try{"jsi"!==m.mode&&c.push(v.location.href)}catch(l){}try{c.push(m.jsref)}catch(n){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,h,l,k="mobfox"===d?c:[b];for(l=0;l<k.length;l++){h=k[l];var m="string"===typeof d?[d]:d;if(f(m).isArray()&&(m[0].substring(0,4),m))for(var n=0;n<m.length&&(e=-1<h.indexOf(m[n]),!1!==e);n++);if(e)break}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==
d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(M.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ra=function(){var a=function(a,c){var d,e=qe[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},
re=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",
".android"],["carsales",".ios"]]}}],oe=function(){var a,b=function(a,b){var e,f=Ra().process(b.detectionRules);f&&(e=f+"_"+b.STRINGIFIED_APPDET);return e};return{detect:function(){a=f(re).map(b);a=0<a.length?a[0]:"";""===a&&m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},pe=function(){var a=[],b=[],c=function(b,c){var f,k=Ra().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+
"*"+k),f=c);return f};return{detect:function(){b=f(ka).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},ka=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},
{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,
detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Pd=function(a){var b=
[];(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new V(0,a.width,e,e+(f<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},U=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Sd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),l=Math.min(d.rightX,f.rightX),k=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new V(h,l,k,f))}});return c},e=function(a,b){var c=0,
e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},Td=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var k,l=[];k=c.getRounded();c=k.height;var m=k.scrY,n=new B({scrX:k.scrX,width:k.width}),s=b.getConfig(k).numberOfSlices;n.set("height",r.floor(c/s));for(var t=0;t<s;t++)n.set("scrY",r.ceil(m+c/s*t)),k=100===a.calcPercentInView(n,
d,e,f),l.push(k);return l}}},V=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),l=Math.ceil(d),m=f-e,n=l-k,r=m*n,s=function(){return{leftX:e,rightX:f,topY:k,bottomY:l,width:m,height:n,area:r}};return{value:s,doesIntersect:function(a){var b=s();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},Qd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},Rd=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,
b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,n=d.left-f.left,f=d.top-f.top,f=new V(n,n+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new V(0,b,f[d],f[d+1]));h();
1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ga=function(){var a=function(a){var b=!1;se.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,
checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},se=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],te=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",
function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},ue=function(a,b){var c,d,e,h,k;e=n.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&
"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?n.getAggregator().persistentTrigger(e,h,k):n.getAggregator().trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+
"}"}}).mixin(d)},ve=function(){var a=[];return{registerEvent:function(b,c,d){b=new ue(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},we=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},m=
function(a){a=(new Sa).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},xe=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},Sa=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},vb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,h,q,l,p=[],u=k.OUT_OF_VIEW,s=!1,v=!1,x=!1,z=!0,A=new ve,B=we(),C=new te,E=new Sa,I=new Ga,G=function(b){var d;s=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=A.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(v=!0,u=x?k.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(x=!0,u=v?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(x=!1,u=v?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?z=!0:0===b&&(z=!1));p.push(d);l&&M();return d},F=function(b){var c,h,k=xa().wrapToGlobal(G),l=function(a){f.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||
b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),s=!0,l(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,m)}},H=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};h||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",
{},m));return h},L=function(){var a=H();a&&!s&&F(a);return a},K=function(a){a=E.getVolumeFromContext(a);z=f.isDef(a)?0<a:!1},M=function(){I.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",b)))});p=[];l=!0};(function(){y.addEvent(r.getWindow(),
"message",function(a){G(a)});n.getAggregator().on({volumeChanged:K});n.getAggregator().provide({videoEventsString:A,videoVersion:function(){var a,b=L();try{a=b.getVersion()}catch(c){a=-1,n.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new xe},adNode:L});L();C.listenForResult();B.isApplicable(t)&&B.start(c)})();return{findAdNode:L,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return s},triggerInitializationEvents:M,
setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:u;a.isVideoPlaying=u===k.IN_VIEW}x&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},ye=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},
bb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new Da;d=0;e(!0);b.start()},m=function(d,e,k,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||h();a=!0},l=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||
(n.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",m);n.getAggregator().on("addThrottledOutputItem",l)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},hb=function(){var a={},b=function(b){a[b]||(a[b]=new Ca(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();n.getAggregator().trigger("addThrottledProp",
"im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},ze=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Pb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===
b}}},Qb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:Ta,av3:Ta,jvw:ze,avw:ye};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Ta=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",
S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(v,"load",function(){n.getAggregator().trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Da;a.onTick({4:function(){n.getAggregator().trigger("markTime",S.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}},H={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(l){}if(f===
e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=H.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),y.removeEvent(r.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+m.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},fc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&
H.send(b,f(a).toION())}var b="ccd";(function(){var b=H.isFrameworkAvailable("__uspapi","__uspapiLocator");H.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:H.getCallId()}},e=H.getMessageHandler("__uspapiReturn",a),y.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},ec={name:"GDPRConsentDetector",dependencies:[],
creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};H.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=H.isFrameworkAvailable("__cmp","__cmpLocator");H.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",
parameter:[b],callId:H.getCallId()}},h=H.getMessageHandler("__cmpReturn",a),y.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},gc={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};
H.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=H.isFrameworkAvailable("__tcfapi","__tcfapiLocator");H.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:H.getCallId(),version:2}},h=H.getMessageHandler("__tcfapiReturn",a),y.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},mc={name:"postMessageDetector",
dependencies:[],creator:function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},nc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},$a=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){n.getAggregator().trigger("notify",b)})},e=function(){var e;e=new Q(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();n.getAggregator().trigger("jsonp",e,d,!0);n.getAggregator().trigger("updateDtCount")};return{start:function(){n.getAggregator().on("sendCookie",
e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},ab=function(a,b,c,d,e,f,q){var l=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var r,s=d.baseUrl,v,x,y=f.getDocumentMode();"number"===typeof y?(x=2E3,8===y?x=4E3:8<y&&(x=8E3)):x=l(m.sp_imp_maxLength,2E3);v=x;if(t.integratedBlockingApplies(s)){x=s;var A=n.getAggregator().request("mobileApp"),z=A&&A.isMobileAppEnvironment&&A.isMobileAppEnvironment(),
C=m.contextNode.getAttribute("data-ias-container"),B=m.contextNode.getAttribute("data-ias-callback"),A=x+"adContainerId="+C+"&cbFunctionName="+B,A=z?A.replace("monitoring","blocking"):A.replace("skeleton.js",m.integration+".js"),E=m.protocol+":"+m.staticServer+m.integration+"a.js",G=m.protocol+":"+m.staticServer+m.integration+".js",s=A+"&true_pb="+encodeURIComponent(m.passback)+(z?"&redirectUrl="+encodeURIComponent(G):"")+(z?"&passback=":"&adsafe_pb=")+encodeURIComponent(E)+"&"}var z=s=s.replace(k.UNIQUE_ID_TOKEN,
m.asid),F=s.length,I,H,K=l(m.sp_imp_jsInfo_minLength,0),E="";try{I=v-F-K,0<I&&(H=Ae(p,I,14,b.on("partialUrls")),E+=H.join("&"))}catch(M){a.add(k.ERROR_CODES.IMPRESSION_URLS)}s=z+E;p=s+="&"===s.slice(-1)?"":"&";var N,F="";try{N=v-s.length,F+=Be(N,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(R){a.add(k.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+a.toString()}s=p+F;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);r=s;d.sendImpression(r);m.impUrl=r;n.getAggregator().trigger("impressionsent")}catch(Q){__IntegralASDiagnosticCall("impsend",
Q,m)}}}},Be=function(a,b,c,d,e,h,q,l){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=l.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=l.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=l.checkScreenLoc(!0));l.isImmediatelyMeasurable()||
l.requiresDelayedViewabilityEvent();a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(s.push("abi:"+b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=Ce(a,c,d,e,h,q,l);n.getAggregator().trigger("eligiblerender");return{primary:s,secondary:a}}())},Ce=function(a,b,c,d,e,h,q){var l=[],p=n.getAggregator().request("mPage");l.push("mn:"+m.mn);l.push("pt:"+
function(){var b=q.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());l.push(f(h.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&l.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&l.push(a+":"+b.output())});b.toString()&&l.push("e:"+b.toString());l.push(c.output());l.push("tt:"+m.mode);l.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));l.push("et:"+(r.now()-m.birthdate));
m.perf.mark("si");c.on("swapids")?l.push("oid:"+m.oid):l.push("uid:"+d.unq);l.push("v:19.8.147");l.push("sp:"+(m.isSplitMode?1:0));l.push("fwm:"+("true"===m.fwMonitoring?1:0));c.on("resolution")&&(l.push("wr:"+f(s.windowSize()).toArray().join(".")),l.push("sr:"+f(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&l.push("x_xpc:"+
b);return l},Ae=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,m;m=24+h.join("&").length+k.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Ya=function(){return{isApplicable:function(a){a=
r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=De(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Ge=function(a,b){return{start:function(){try{var c=Ee(),d=c.getMethodName(a),e=new Q(b.getEnabledScriptUrl(a)),f=Fe,m=r.getDoc();(new f(m.body||
m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},Ee=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:k,features:b,context:t,dtBaseURL:m.dtBaseURL,spg:Ua};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},fb=function(){return{start:function(a,b){f(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&Ge(d,b).start()})}}},De=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=M.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Fe=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();c.setAttribute("src","about:blank");(a||m.contextNode.parentNode).appendChild(c);
f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Ua=function(a){var b=new Ba;(function(){b.listen(function(b){return b&&
b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==m.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,
3200))})})()},sc={name:"spg",dependencies:["spgCache"],creator:Ua,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},rc={name:"spgCache",dependencies:[],creator:function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,f(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",
k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&h()},isFull:d,sendToOtherTags:function(){(new ea).send({scaInfoOriginatorASID:m.asid,cache:b})}}},settings:{}};try{dc()}catch(He){__IntegralASDiagnosticCall("main",He,m)}};
try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.isSingleIASInstance&&top.iasAdSlots?top.iasAdSlots.forEach(function(v){__IntegralASConfig._cl_adpath=v.adSelector;__IntegralASConfig.iasParameters=v.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}):__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}catch(v){__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",
err$$10,__IntegralASConfig)};
