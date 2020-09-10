var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.125',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.125.js"},
		protocol: 'https',
		jsref: "",
		asid: "0226d124-f3c0-11ea-a822-02653a7a87ec",
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
		mn: "app03or",
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
__IntegralASConfig.initialize=function(l,x,G){function Ta(g){var a,b,c;l.perf.markStart(la);Ua();m.startSystem();A=m.getAggregator();A.provide({omidAdSessionContext:{}});A.provide({omidAdSessionVerificationParameters:{}});a=Va();b=ma();c=(new Wa).createInstance(a,b);A.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;A.provide({omidVerificationClient:a});A.once("callContinueMain",function(){var a,b;l.perf.markStart(na);Xa(l).verifyContextNode();b=W.instantiateModules();a=W.preImpression(b.mDataTransfer,
b.mViewability,b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,u,b.renderDetector,g);W.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);W.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,u);l.perf.markEnd(na)});A.on("tryToCallContinueMain",function(a){l.isResolved?A.trigger("callContinueMain"):
A.trigger("requestBootstrapper",a)});A.once("requestBootstrapper",function(a){var b=l.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";if("string"===typeof a)try{a=JSON.parse(a)}catch(c){}var s=a&&a.config,n=a&&a.sca,q=a&&a.xsca;s&&A.trigger("jsonp",b+"/jsconfig"+s+(l.adSessionId?"&adSessionId="+l.adSessionId:""),function(a){a="string"===typeof a?JSON.parse(a):a;if(Object.assign)Object.assign(l,a);else for(var b in a)l[b]=a[b];l.isResolved=!0;l.sp_cdnScripts={sca:n,xsca:q};A.trigger("callContinueMain")},
!1,"cbName")});a=[{environment:new aa(a),adSessionReadyStrategy:new Ya(a)},{environment:new Za,adSessionReadyStrategy:new $a}];(new ab(a)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(la)}var oa={};if(Object.assign)l=Object.assign({},l);else{for(var pa in l)oa[pa]=l[pa];l=oa}var A,W=function(){function g(a){var b=new bb(a,u),c=new cb,d=new db(a,u),e=eb(a,u),g=(new fb(l,u,a)).resolve(),B=[b],w=[];e.applies()&&B.push(e);d.applies()&&B.push(d);c.applies(a,u)&&B.push(c);f(g).each(function(a,
b){B.push(new gb(b,u));w.push(b.id)});0<w.length&&(A.trigger("addOutputItem",{output:w.join(".")},"scm",{type:k.IMPRESSION_EVENT}),A.trigger("addOutputItem",{output:w},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return B}function a(a,b,c,d){var e=g(a);A.provide("viewabilityDefinitions",e);return f(e).map(function(e,g){var r,f,m;r=new qa(g,b);var M=(new hb(c,a,g.rts)).getCallbacks(),l=new ra(d.createPingJobs(g.type,g.timeInViewThresholds,M,g.metricId));g.sendOtherwiseInViewSignal&&(m=new qa(g,
b,g.sendOtherwiseInViewSignal),f=new ra(d.createPingJobs(g.type,g.timeInViewThresholds,M,g.metricId,g.sendOtherwiseInViewSignal)));g.rtsCallbacks=M;g.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?r=new ib(r,g,l,u.isVideo()):(r=new sa(r,new X(g.minUnit),l),g.sendOtherwiseInViewSignal&&(f=new sa(m,new X(g.minUnit),f,g.sendOtherwiseInViewSignal),f.start()));r.start();return r})}function b(a,b){var c=(new ba).accepts(),c=!u.isAvid()&&!c&&!u.isInMobiMraidVideo();return u.isVideo()&&
c?jb(l.videoId,a,b):{}}function c(a,b,c,d,e,g,B,w,v,N){try{l.perf.markStart(ta),l.tpiLookupURL&&kb(B,w).init(l.tpiLookupURL),u.isDomless()||N.isStarted()&&N.sendOriginList(),m.runAll(),p.execAtEndOfThread(function(){var g;try{l.perf.markStart(ua);g={output:(new Date).getTime()-e};a.addItem(g,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});l.perf.markEnd(ua);var z,B;l.isSplitMode&&(B=l.protocol+"://"+l.sp_cdnScripts.main,
l.perf.markResource(lb,B));l.impUrl&&l.perf.markResource(mb,l.impUrl);z=l.perf.getData();A.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(z).toION());c.isApplicable(u)&&c.sendAdTalkCall()}catch(v){d.add(k.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(ta)}catch(M){d.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,e,g,f,k,w,v){var m;"true"!==l.minimizeCalls&&(m=(new Date).getTime(),p.execAtEndOfThread(function(){c(a,b,d,e,m,g,f,k,w,v)}))}function e(){var a,b,c;c=A.request("omidAdSessionContext");
a=c.app&&c.isDisplay&&!c.isWeb;(b=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&c.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(c.isLimitedSandbox=!1);a&&b&&(c.delayingViewabilityEvents=!0);if("app"===c.environment||!0===l.mobAppWebview)l.mobOrTab=!0}return{instantiateModules:function(){var c,d,n,q,g,f,k,w,v={};l.perf.markStart(va);A=m.getAggregator();e();v.mFeatures=A.provide("features",nb());A.provide("mobileApp",function(){return c=c||new ob(v.mFeatures)});A.provide("avidJsClient",
function(){return d=d||new pb(p.getWindow())});A.provide("context",u);v.mBrowser=A.provide("browser",(new qb).createInstance());v.mErrors=A.request("mErrors");v.mIds=A.provide("ids",rb());v.iOutput=new sb(A);A.request("mJsonp");v.mComm=A.request("mComm");v.viewabilityMeasurement=(new tb(new ub(v.mIds),v.mFeatures,v.mBrowser)).create();if((q=A.request("omidAdSessionContext"))&&q.queuedOutputItems)for(f=0;f<q.queuedOutputItems.length;f++)A.trigger("addOutputItem",{output:q.queuedOutputItems[f].value},
q.queuedOutputItems[f].code,{type:"impression"});v.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=v.mIds.unq);v.mAdTalk=(new vb).createInstance(v.mFeatures);n=wb();q=xb(A);g=A.provide("mPage",(new yb).createInstance());v.mAncestorOrigins=zb();v.mPageUrls=A.provide("pageUrls",(new Ab).createInstance(v.mAncestorOrigins,p));f=A.provide("mScreenEvents",Bb());A.provide("ieXDomainViewability",Cb(v.mBrowser));k=Db(v.mBrowser);w=b(v.mFeatures,f);v.mVideo=A.provide("video",w);Eb(Fb.build());k=(new Gb).createInstance(v.mErrors,
k,v.mFeatures);g=(new Hb).createInstance(k,v.mErrors,g,u);w=A.provide("jobFactory",Ib());v.mDataTransfer=Jb(k,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,f,n);n=Kb(v.mErrors,v.mFeatures,A,q);v.mMode=Lb(n,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=A.provide("viewability",Mb(new C,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,A,v.iOutput,g,f,v.mVideo));a(v.mFeatures,v.mViewability,q,w);v.loopDelay=wa();v.renderDetector=Nb();v.mDataTransfer.setViewabilityMod(v.mViewability);
l.perf.markEnd(va);return v},preImpression:function(a,b,c,d,e,g,f,w,v,N,M,L){var p,u,t,F,R;l.perf.markStart(xa);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";m.getAggregator().trigger("addOutputItem",{output:L?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});try{c.isApplicable(N)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(p=c.getIdMap())&&d.addItem(p,"idMap"))}catch(H){e.add(k.ERROR_CODES.ADTALK_GENERAL)}try{g.isApplicable(f,
v,N)&&g.start(),R=w.detectTopURL(),v.on("exch")&&(u=(new Ob).createInstance(e,d),u.parse(R)),t=Pb(),t.isApplicable(v)&&t.start(v),N.usesGroupMCustomMetric()&&Qb(),F=Rb(),F.isApplicable(v)&&(F.start(),A.trigger("sendCookie")),M.start()}catch(x){e.add(k.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(xa);return R},sendImpression:function(a,b,c,d,e,g,k,w,v){try{Sb(a,b,c,d,e,g,k).send(w),f.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(m){__IntegralASDiagnosticCall("impsend",
m,l)}},postImpression:function(a,b,c,e,g,f,B,w,v,N,M,L,p){try{l.perf.markStart(ya);var u=Tb();u.start();u.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var t=Ub(a,b,c);t.isApplicable(e)&&t.start();var F;e.bootstrapOn("getTpl")&&e.on("usetpl")&&(F=Vb(g,f,B,b,w),F.init());d(w,v,N,B,e,g,f,b,L);M&&M.start&&M.start();p.isDomless()||Wb().start(["sca","xsca","rsrch"],e);Xb();m.runTier(k.TIERS.VIEWABILITY);var R=Yb();R.isApplicable(e)&&(R.start(),O.recordBlockingTime(),
l.perf.mark(Zb),O.setupOnLoadTracking(),O.setupBrowserDelayTracking());l.perf.markEnd(ya)}catch(H){B.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(g){return new D(g)},D=function(g){this.iterable=g};D.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};D.prototype.isArray=function(){return this.iterable instanceof Array};D.prototype.isEmpty=function(g){return 0===this.keys(g).length};D.prototype.each=function(g,a){var b=
this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};D.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};D.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};D.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+
this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};D.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};D.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};D.prototype._privateMixin=
function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};D.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};D.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};D.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};D.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};D.prototype.findFirst=
function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};D.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};D.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};D.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};D.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},
a)};D.prototype.toArray=function(){return this.map(function(g,a){return a})};D.prototype.JSONStringify=function(){var g,a,b=!1;x.Prototype&&x.Prototype.Version&&-1===x.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};D.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};
f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||x;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-
1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var m=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,r){r=r||{};var z,k,w=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},v=function(){if(!z){var a=
[];z=!0;w(["features","browser","context"]);r.emits&&(c.events=new C);if(!r.applies||r.applies.apply(r,b))k=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(q.apply({},a))}};(function(){var b=r.tier;f.isDef(b)&&(a[b]=a[b]||new ca,a[b].push(v))})();g.provide(d,function(){var a;v();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=
function(){g=g||new za;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",
VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",
JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",
FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",
UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",
AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,
0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",
MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},la="mf",na="cm",va="in",xa="pr",ya="po",Zb="bl",ta="lo",ua="lt",lb="md",mb="id",Xa=function(g){return{verifyContextNode:function(){if(g.contextNode&&null===g.contextNode.parentNode){var a,b=G.getElementsByTagName("script"),c=b.length,d=b[c-1],e=g.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag",
"found");break}}catch(h){}g.contextNode=d}}}},ac=function(){var g,a=["STYLE","SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),c=0,d=l.useFIF&&u.friendlyIframe||u.isSpecifiedAd(),e=function(e){var s=t.isNodeXDomainIframe(e)||t.isNodeCreative(e),n=!e;g=n?l.contextNode.parentNode:e;if(s||n)m.getAggregator().trigger("evaluateCreativeFinderResult",e);else{if(d){var q;q=s=e;n=u.friendly?p.getTop().document.body:l.contextNode.ownerDocument.body;for(;3>c;){if(n&&
s===n){q=s;c=3;break}t.isWindow(s)&&(q=t.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+l.asid+"]"),s=f.isDef(q)?q:s);q=s=f.isDef(s)?s.parentNode||s:s;c++}s=q}else s=e;if(t.isWindow(s)){var r;try{r=s.document}catch(z){r=l.contextNode.ownerDocument}e=r}else e="IFRAME"===t.getNodeName(s)?e.contentWindow.document:s;r=[];var n=(s=e&&e.getElementsByTagName&&e.getElementsByTagName("*"))&&s.length,B;if(s)for(var w=0;w<n;w++)B=(q=s[w])&&q.nodeName&&q.nodeName.toUpperCase(),!q.children||0!==q.children.length||
f(b).contains(B)||f(a).contains(B)||f(r).contains(B)||r.push(B);r=b.concat(r);(new $b(r)).searchDescendants(e)}};m.getAggregator().on("creativeFinderBatchCompleted",e);return{find:e,getClosestContainerName:function(){return t.getNodeName(g)}}},$b=function(g){var a=function(a){function c(a){var b=t.getNodeName(a),c=t.isNodeCreative(a)||"IFRAME"===b;b&&c&&!t.isEmptyTeadsFrame(a)&&(b=t.getNodeArea(a),b>s&&(h=a,s=b))}function d(){do c(a[e]),e+=1;while(0!==e%n&&e<a.length);e<a.length?p.execAtEndOfThread(d,
0):m.getAggregator().trigger("creativeFinderBatchCompleted",h)}var e=0,h=null,s=-1,n=50;if(a.length&&m.getAggregator().request("useYieldSearch"))d();else{for(e;e<a.length;e++)c(a[e]);m.getAggregator().trigger("creativeFinderBatchCompleted",h)}};return{searchDescendants:function(b){b=b||l.contextNode.parentNode;var c,d,e=[];for(c=0;c<g.length;c++){d=g[c].toLowerCase();var h=b.getElementsByTagName&&b.getElementsByTagName(d);if(h&&h.length)for(d=0;d<h.length;d++)e.push(h[d])}a(e)}}},Nb=function(){var g,
a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},h=m.getAggregator().request("omidAdSessionContext"),s=function(){c=a=!0},n=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);m.getAggregator().trigger("adRendered")},q=function(){var a=!1;u.isOmid()&&h&&h.useOMID13Logic&&(a=!0);return a},f=function(a){var b={},c=p.getDoc(),d=function(e){var h=e&&e.type;if("readystatechange"===h&&"complete"===e.target.readyState||
"load"===h)n(b),g.saveNode(a),"readystatechange"===h?g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===h&&g.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),w(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(n(b),g.saveNode(a),g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},z=function(){var a=p.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){y.removeEvent(a,"ready",c);g.save(k.RENDER.DETAILS.ENVIRONMENT);
g.save(k.RENDER.DIAGNOSTIC.MRAID_READY);n();w({status:k.RENDER.STATUS.DETECTED})};g.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(n(),g.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));w(d)},B=function(a){a===k.RENDER.STATUS.DETECTED&&m.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
timestamp:p.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},w=function(b){var c=g.build();b=b.status||d.status;c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(B(b),m.getAggregator().trigger("addThrottledOutputItem","rend",b),m.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(B(b),m.getAggregator().trigger("addOutputItem",{output:b},"rend"),m.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},v=function(){m.getAggregator().on("primaryadfound",function(a){var b,
c=d,e=new ac,h=!0;m.getAggregator().on("evaluateCreativeFinderResult",function(a){if(t.isNodeXDomainIframe(a))b?p.clearInterval(b):h=!1,c=f(a);else if(a){var d=!1,s=t.getRect(a);a&&"IMG"===t.getNodeName(a)&&(d=0===a.naturalWidth||0===a.naturalHeight);!d&&s.width>=k.RENDER.WIDTH_THRESHOLD&&s.height>=k.RENDER.HEIGHT_THRESHOLD&&(n(c),b?p.clearInterval(b):h=!1);g.saveNode(a)}else a=e.getClosestContainerName()||g.getAdNodeName(a)||c.details,g.save(a);w(c)});var s=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){m.getAggregator().trigger("renderdiag",
c)}},q=m.getAggregator().request("mobileApp");q&&q.isMobileAppEnvironment&&q.isMobileAppEnvironment()&&u.isMraid()?z():(s(),h&&(b=p.setInterval(s,500)));m.getAggregator().trigger("eligiblerender")})},l=function(){var a=h&&!!h.isVideo,c=h&&!!h.videoStartArrived,d=h&&!!h.geometryArrived;return b||!d||a&&!c?!1:(m.getAggregator().trigger("eligiblerender"),g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),n(),w(e),b=!0)};return{start:function(){var a=!1;m.getAggregator().trigger("perfCheckpoint",
{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:p.now(),code:"initial"});m.getAggregator().on("adRendered",function(){a=!0});m.getAggregator().provide("adRenderStatus",function(){return a});m.getAggregator().provide("useYieldSearch",function(){return c});g=new bc;new cc;m.getAggregator().on("impressionsent",s);q()?l()||(g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),w(d),m.getAggregator().on("omidrendgeoupdate",function(){l()}),m.getAggregator().on("omidrendvideostart",
function(){l()})):u.isAvid()||u.isOmid()||u.isVideo()?(m.getAggregator().trigger("eligiblerender"),g.save(e.details),n(),w(e)):(w(d),v())}}},bc=function(){var g=[],a=[],b=function(a){var b;if(t.isWindow(a))b="WINDOW";else if(t.isNodeXDomainIframe(a))b="XIFRAME";else try{b=t.getNodeName(a)}catch(h){c("nen")}return b},c=function(a){g.push(a)};return{build:function(){var b=[];f(a).each(function(a,c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,
saveNode:function(d){try{var e=d&&b(d),h=d&&t.getRect(d),s=d&&"IMG"===e,n=d&&t.hasBackgroundImage(d),q=d&&d.innerText&&0<d.innerText.length,g=d&&d.children&&0===d.children.length&&q,f=h&&h.width>=k.RENDER.WIDTH_THRESHOLD&&h.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,B=(n||s)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(f);B&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);g&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(w){c("sne")}}}},
cc=function(g){var a,b=!1,c=!1,d=function(){m.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,l),m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};m.getAggregator().on("eligiblerender",function(){b=!0;d()});m.getAggregator().on("renderdiag",function(b){a=b;d()});d()},Y=function(){return{applies:function(g,a){var b=m.getAggregator().request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||
g.isAndroidWebViewBrowser()||g.browserIs(k.BROWSERS.WEBKIT)||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Qb=function(){var g,a,b=!1,c=m.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,m.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};m.getAggregator().on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});m.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},
wb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};m.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=u.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},za=function(){var g=new dc,a=new C;return f(g).mixin(a)},C=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},
b)}),!0},c=function(a,b,c){g[a]=g[a]||new ca;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},da=function(){var g=function(a,c,d){var e,h=c.length,s=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);
d&&d(a,c);if(s&&s.length){for(a=0;a<s.length;a++)(e=s[a])&&t.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},ca=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=
arguments;f(g).each(function(b,c){c.apply({},a)})}}},ra=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Aa=function(){var g,a=new ea,b=function(b,d,e,h){var s,n,q,g;if(JSON&&JSON.parse)try{s=JSON.parse(b.data),n=b.source,g=f.noop,d(s)&&(h&&(q=h(n,s))&&(g=function(){a.send(function(){return q},n)}),e(b,s,g))}catch(z){s&&m.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,
d,e){g=function(h){b(h,a,d,e)};y.addEvent(x,"message",g)},stop:function(){g&&y.removeEvent(x,"message",g);g=null}}},ea=function(){var g=function(a){return f(a).isObj()?[a]:(new da).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var s;s=f.resolve(b,d)||{};s.sentTime=p.now();s=a(s);d.postMessage(f(s).JSONStringify(),"*")})}}}},ec=function(g,a){return{onAll:function(b){var c=
{};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},sb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==
typeof e?e:{};var q=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){q({output:b},a,e)}):q(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},
dc=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Hb=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new fc:new gc(g,a,b,c)}}},gc=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),s=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:E(t.calcWinDims()),
q=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!q.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:u.embedded,winDimensions:n,adDimensions:q};!0===s&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),
reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(s),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},fc=function(){return{collect:function(){return{}}}},hc=function(g){g=g||f.identity;var a=[],b=p.now(),c=function(){var c=p.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ba=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=p.now())},stop:function(){var s=e||a;0===c%b&&(h+=p.now()-s,d++);c++},getTime:function(){return h},getCount:function(){return d}}},Ca=function(){var g,a=0,b=0,c=new C(!0),d=function(){g&&(a++,c.trigger(a),b>a?p.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,
d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,p.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},ic=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=p.setInterval(g,c))},e=function(a){a&&g();p.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},X=function(g){var a,b,c=0,d=u.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=u.getTagTime();
h=!1},mark:function(){a=h?u.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=u.getTagTime();h=!0}}},P=function(g,a){var b=g||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],h=b[4],s=b[5],n=g?b[6]:"",q=a?b[7]:"",r={},z=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(s=a);return s},w=function(a,b){return a+"="+f(b).toION()},
q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=r[b])?r[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:z,master:k,setParam:function(a,b){r[a]=r[a]||{};f(b).isObj()?f(r[a]).mixin(b):r[a]=b},path:function(a){n=a},toString:function(){var a=z()?z()+".":"",b=n?"/"+n:"",c;q||!f(r).isEmpty()?(c=f(r).isEmpty()?"":f(r).stringify(w,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},
Xb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(u.friendly&&!u.isMobileApp())if(b=m.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=t.getOurNodeInTop()){var h=t.getAncestorNodes(d);e=f(h).map(a)}if(b=e=e&&g(e))m.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),m.getAggregator().provide("adSlotIds",
b),c=b}return c}catch(s){m.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},jc={name:"AdRefreshDetection",dependencies:[],creator:function(){var g=[15,30,45,60,90],a={start:function(){var a=this,c=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?m.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},
adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var h=p.getTop();a={requestTop:"recordAdSlotImpression",
asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);h.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,h=p.getTop();if(e&&this.adRefreshIntervalIsValid(e))m.getAggregator().on("sendDt",function(s,g){s===k.DT_CODES.PING&&g===e&&(p.execAtEndOfThread(function(){h.postMessage(JSON.stringify({requestTop:"refreshAd",
adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);m.getAggregator().trigger("adSessionComplete")}};u.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){m.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}}},zb=
function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var h;if(h=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))h=m.getAggregator().request("adNode")?parseFloat(m.getAggregator().request("videoVersion")):void 0,h=3.7>h;return!h&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=p.getWindow().location.ancestorOrigins,a=!0}catch(b){m.getAggregator().trigger("error",
k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");m.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});m.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Vb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");
var h=d.length,q=0,r=0;e(h,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,q,++r)},!0);e(h,++q,r)})}catch(z){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new P).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Kb=function(g,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&
l._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},qb=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new kc:new lc}}},lc=function(){var g=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=p.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:
f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=p.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasAncestorOrigins:function(){var a=p.getWindow().location;return!(!a||!a.ancestorOrigins)},
hasPostMessage:function(){var a=p.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=p.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,s=p.getDoc(),n=s.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in s.documentElement.style)h="11";else for(n.style.behavior=
"url(#default#clientcaps)",s=0;s<e.length&&!(h=n.getComponentVersion(e[s],"componentid").replace(/,/g,"."));s++);}catch(q){}e=h;h=k.NA;n=p.getWindow();f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(h=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return J.contains(a,c)})};return J.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&
(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},kc=function(){var g=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,hasMutationObserver:g,isAndroidWebViewBrowser:g}},Wa=function(){return{createInstance:function(g,
a){return u.isDomless()?new mc(a):new nc(g,a)}}},oc=function(){var g,a=function(a,c){var d="",e="",h=p.getDoc().getElementsByTagName("ins");if(h&&0<h.length){e=h[0];d="<ins";for(h=0;h<e.attributes.length;h++)d+=" "+e.attributes[h].nodeName+'="'+e.attributes[h].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=m.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!u.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=m.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,h=l.adWidth&&0<l.adWidth?l.adWidth:0,s=l.adHeight&&0<l.adHeight?l.adHeight:0,n=p.getDoc().getElementsByTagName("ins"),
q;q=e=0;n&&0<n.length&&(q=n[0],e=parseInt(q.style.width),q=parseInt(q.style.height));h=e||h||window.innerWidth;s=q||s||window.innerHeight;"complete"===p.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=p.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):p.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=p.getDoc().getElementById(c))d.style.width=h+"px",d.style.height=s+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},nc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=G.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=G.createElement("SCRIPT"),d.src=b);l.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];u.isOmid()?(e=new oc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===l.forceAppend?c(a,b,d):G.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=t.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=G.createElement("script");c=c||l.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};m.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},mc=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";m.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);m.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){m.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};m.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},u=function(g){var a="undefined"===typeof window,b="undefined"!==typeof g&&"undefined"!==typeof top&&g!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||f.isDef(p.getWindow().mraid)},e=function(){return!a&&f.isDef(p.getWindow().mraid)},h=function(){var b=!1;if(!a)var c=(b=p.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&f.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},s=function(){var b;
if(!(b=-1!==l.mode.indexOf("jsvid"))){var c;b=!1;var d=m.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=m.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===k.MEDIA_TYPE.VIDEO),c=b||h());b=c}return b},n=function(){return l.mobOrTab},q=function(a){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(b,
c){return J.contains(c.id,a)}).length},r=function(){return q("grpm")||l.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=P(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return p.now()-l.birthdate},getPageTime:function(){var b=k.NA;!a&&f.isDef(g.chrome)&&f.isDef(g.chrome.csi)&&f.isFunction(g.chrome.csi)&&(b=p.round(g.chrome.csi().pageT));return b},isVideo:s,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=l._cl_adpath)&&f.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(l._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&f.isDef(p.getWindow().avid)},isOmid:function(){var a=m.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ba).accepts()},isOmidForWeb:function(){return(new Da).accepts()},isDomless:function(){return a},
isAvidNative:function(){var b=!1,c=m.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==fa());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=f(p.getWindow().$sf).isObj(!1)&&f(p.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:h,isDeviceTypeGroupMobile:n,usesIASFullyInViewCustomMetric:function(){return q("fiv")||
l.use100v||!r()},usesGroupMCustomMetric:r,isCeltra:function(){var b=!1;a||(b=Ea().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return r()&&n()},usesZeroPivCustomMetric:function(){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=p.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!s()&&b&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;l.contextNode&&f.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),e=(e=l.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(p.getWindow()[e]));var h=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var s=!0===l.fwMonitoring||"true"===l.fwMonitoring;h&&a&&("true"===c&&"true"!==d&&e?(b=!0,s&&m.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,s||m.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(x),y={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",y.mouseEnter(b),
c):"mouseleave"===a?g.addEventListener("mouseout",y.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=G.defaultView&&G.defaultView.getComputedStyle;b=b||"";d?c=(g=G.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(x.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(g,a){if(u.isDomless())p.setTimeout(function(){g()},50);else{var b=a||(u.xDomainIframe?G:p.getTop().document),c=function(a){var c=p.setInterval(function(){b.body&&(p.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(G.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?p.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},isSandboxed:function(g){var a,
b=p.getWindow(),c=!1;if("sandbox"in p.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=p.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
y.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Z=function(g){var a,b=Z.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Z.callTypeCounter={};var Jb=function(g,a,b,c,d,e,h,s){var n=0,q=0,r=!1,z=function(a,e,s,g,z,B){s=s||!b.on("postDts");var u=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(u||"n"!==h.getCurrentLoc()))try{var t=l.dtBaseURL,x=new P(t,!0),y=p.now();
m.getAggregator().trigger("preSendDt",a);t||(x.path("dt"),b.on("usedtdomain")&&x.sub("dt"));w(x,a,e);z&&z.field&&x.setParam(z.field,z.value);g||v(x,a);m.getAggregator().trigger("send",x,function(){q+=1;n=p.now()-y;f.isFunction(B)&&B()},s);a===k.DT_CODES.UNLOAD&&(r=!0);d.cleanup()}catch(A){__IntegralASDiagnosticCall("dt-"+a,A),m.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){r||z(k.DT_CODES.UNLOAD,-1,!0)};var B=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",
jsi:"e"},e=l.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&z(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},w=function(a,b,e){var h=new Z(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",l.asid);e={c:c.getCacheBustId(),pingTime:e,time:u.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},v=function(c,g){var f,r={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)r.clog=s,u.isVideo()&&(f=u.isOmid()&&!u.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=m.getAggregator().request(f))&&!f.isEmpty()&&(r.ve=f));g===k.DT_CODES.UNLOAD&&(r.ndt=q);-1!==l.mode.indexOf("jsvid")&&(r.vv=m.getAggregator().request("videoVersion"));
r.NULL1=b.output();r.NULL2=h.stringify(10);r.em=u.embedded;r.fr=u.friendly;r.e=a.toString();r.tt=l.mode;r.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},r);c.setParam("tv",r);c.setParam("br",e.getBrowserType())};m.getAggregator().on({sendDt:function(a,b,c){z(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){z(a,b,void 0,!0)},sendDiag:B,updateDtCount:function(){q++},unload:g});return{send:z,unload:g,
diagnostic:B,setViewabilityMod:function(a){}}},E=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?t.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=p.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return p.round(a.width)*p.round(a.height)};(function(){var b;g!==x.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=t.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?p.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},t={findElementsWithSize:function(g){var a=[],b=function(c){1>t.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(y.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===y.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=t.browserWindowPosition(),b=t.windowSize(),g={scrX:p.round(a.scrX),scrY:p.round(a.scrY),
width:p.round(b.width),height:p.round(b.height)}}catch(c){m.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(u.isDomless())return{width:0,height:0};if(u.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(x.outerWidth)&&(g.width=x.outerWidth,g.height=x.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(x.screenX)?(g=x.screenX,a=x.screenY):f.isDef(x.screenLeft)&&(g=x.screenLeft,a=x.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=t.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=t.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=G.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=u.friendly&&p.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=p.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,h=1E4;b=y.nodeIsAbsolutelyPositioned(g);d=!t.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!t.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!t.tagNameIs(d,
"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=t.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==G&&d!==a)}return{width:p.round(e),height:p.round(h)}},hasBackgroundImage:function(g){g=y.getStyle(g,"background-image");return""!==g&&"none"!==g},isEmptyTeadsFrame:function(g){try{var a,b,c=!1,d=g&&"IFRAME"===g.nodeName&&g.contentDocument;g&&g.parentElement&&"teads-player"===g.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},
findChildWithLargestContent:function(g,a){var b=m.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=m.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==g&&"inline"!==y.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;var h=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))h=!1;e=h}!e||
b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},h=null,s=function(a){var b,c,h=null,s=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],k=t.getNodeArea(f),m=f,l=void 0;if(l=m.parentNode===g)if(l=void 0,l="DIV"===m.nodeName)if(l=void 0,l=!e(m))if(l=void 0,!(l="0"===y.getStyle(m,"opacity")||"hidden"===y.getStyle(m,"visibility"))){for(var p=l=void 0,m=m.childNodes,l=0;l<m.length;l++)1===m[l].nodeType&&(p=!0);l=!p}(m=!l)&&d&&"DIV"===f.nodeName&&(m=!1);l=t.isEmptyTeadsFrame(f);
k>s&&m&&!l&&(h=f,s=k)}h&&(h.hasValidSizeForMobileApp=1<s);return h}(function(b){var c,d,e,h,s=[],g=a||"iframe img a object embed div".split(" ");c=0;for(d=g.length;c<d;c++){e=g[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,h=f.length;e<h;e++)s.push(f[e])}return s}(g));s&&(h=c(s),h.hasValidSizeForMobileApp=s.hasValidSizeForMobileApp);return h},screenSize:function(){if(u.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(x.screen)&&
(g={width:x.screen.width,height:x.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(t.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=p.getTop(),b=p.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;u.friendly&&(g=u.embedded?(g=t.getOurIFrameInTop())&&g.frameElement:l.contextNode);return g},
getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||p.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(t.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},
querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[l.contextNode.parentNode,p.getDoc()];u.friendly&&d.push(p.getTop().document);if(a&&
u.embedded)try{d.push(p.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=t.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=t.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=p.getWindow().frameElement;return g&&
g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&t.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&t.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});
return a},getDimensionFromAttributes:function(g){var a,b=t.getAttribute(g,"width");g=t.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;u.isSpecifiedAd()&&
(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=t.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||t.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=t.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==p.getTop()},
getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===t.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Va=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};m.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Ob=function(){return{createInstance:function(a,b){return u.isDomless()?new pc:new qc(a,b)}}},qc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),s=h&&h.length&&h.join("|"),n=l.exchList;s&&(e=f(n).map(function(a,b){return 0<=s.indexOf(J.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:k.IMPRESSION_EVENT}))}catch(q){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},pc=function(){return{parse:function(a){}}},nb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*p.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&(d.intblk=
"integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(u.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){var b=l[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(l[b]))return 1}).length===
a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Db=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,
b,c,d){var e=0,h=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;h=E({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=p.round(h.area()/a.area()*100));return e}}},rb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,
16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*p.random()|0).toString(16);a=a.slice(0,32)}catch(d){m.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=new Date,
b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},kb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},rc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},
getTask:function(){return e?function(){var c=m.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),s=a.getTimeInViewForRts();f.isDef(d)&&(m.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),m.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));m.getAggregator().trigger("sendDt",b,e);if(c[s])c[s]()}}}},Ib=function(){return{createPingJobs:function(a,
b,c,d,e){return f(b.getTimeThresholds()).map(function(b,s){return new rc(s,a,c,d,e)})}}},Fa=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=m.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),
q=m.getAggregator().request("mScreenEvents").getCurrentEvent(),r=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(q)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(m.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),m.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),m.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,r),b.rtsCallbacks&&
f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();m.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},ma=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var s=a.indexOf("?");b=b+"="+c;if(-1===s)return a+"?"+b;s++;return a.slice(0,s)+b+"&"+a.slice(s)},c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+p.round(1E4*Math.random())};return{wrap:function(d,
e,h,s){var f=c(),q,r,k;s=s||"ias_callback";d=""+d;RegExp(s).test(d)&&(q=RegExp("("+s+"=)(.[^&]*)").exec(d)[0],r=q.split("=")[1],k=J.stringToFn(r),d=a(d,q));x[f]=function(a){e(a);h&&k&&k(a);x[f]=void 0};return d=b(d,s,f)},wrapToGlobal:function(a){var b=c();x[b]=function(c){a(c);x[b]=void 0};return b}}},Lb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=P(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,
nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?m.getAggregator().trigger("jsonp",c,a.callback,!0):m.getAggregator().trigger("send",c,function(){m.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?
a.callback:f.noop,d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){m.getAggregator().on("adImpression",function(e,n){var q;try{q=d(c,n),a.enabled?m.getAggregator().trigger("jsonp",q,a.callback,!0):m.getAggregator().trigger("send",q,f.noop,!b.on("postMon"))}catch(r){__IntegralASDiagnosticCall("jsvidimp",r,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]=
"db2";a[4]="video";return a.join("/")};b&&m.getAggregator().trigger("jsonp",c(a),function(a){m.getAggregator().trigger("videoBlockResult",a)});m.getAggregator().on("adImpression",function(c,e){var n;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);m.getAggregator().trigger("send",n,f.noop,!0)}catch(w){__IntegralASDiagnosticCall("fwjsvidimp",
w,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[l.mode],d=!!b.isFW,f=function(a){var b;b=m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),r=f.indexOf("BEGIN__ADSAFE"),k=-1!==r,B=k?f.slice(r):"",a=k?f.slice(0,r):a(f);return{isFW:d,baseUrl:a,macroUrl:B,sendImpression:function(a){var d=function(){b.nodeType?m.getAggregator().trigger("addNode",
b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)m.getAggregator().on("adImpression",function(){d(a)})}}}},p={execAtEndOfThread:function(a){p.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},
getWindow:function(){return x},getTimeoutScope:function(){return u.isDomless()&&u.isOmid()?m.getAggregator().request("omidVerificationClient"):x},setInterval:function(a,b){return p.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return p.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){p.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){p.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){u.isDomless();return top},
getDoc:function(){u.isDomless();return G},getIntersectionObserver:function(a,b){u.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){u.isDomless();return new MutationObserver(a)},pow:function(a,b){return Math.pow(a,b)}},yb=function(){return{createInstance:function(){return u.isDomless()?new sc:new tc}}},tc=function(){var a,b=!1,c=!1,d=m.getAggregator().request("features"),e=new ca,h=function(){var b;d.on("blur")?(b=p.getWindow(),b=u.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||
f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?p.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?p.getDoc()[a.prop]:null;return b},s=function(){var b=p.getWindow(),c=function(){e.run(h())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(p.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=p.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var s=h+"Hidden";f.isDef(d[s])&&(a=s,c=h+c,b=!0)}):b=!0;return b?
{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){e.push(a);c||(c=!0,s())},supportsVisAPI:function(){return b}}},sc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Ab=function(){return{createInstance:function(a,b){return u.isDomless()?new uc:new vc(a,b)}}},vc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},
e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),
null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(r){}try{q.b=encodeURIComponent(parent.location.href)}catch(k){}if(u.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(m){}try{q.e=encodeURIComponent(x.document.referrer)}catch(w){}}try{"jsi"!==l.mode&&(q.d=encodeURIComponent(x.location.href))}catch(v){}try{q.f=encodeURIComponent(l.jsref)}catch(p){}try{h=
n(),q.g=encodeURIComponent(h.g||""),q.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(M){}q=d(q);q=e(q);h=[];for(var L in q)q.hasOwnProperty(L)&&h.push({key:L,val:q[L]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},uc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},
xb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},Bb=function(){var a=[],b={},c={sl:"n"},d=0,e,h,s,n={i:0,o:0,n:0,pp:0,pm:0},q=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&
(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},r=function(a,c){var d=new hc(c);return b[a]=d},z=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},l=function(){f(c).each(function(b,c){n[c]+=a.length?s-d:s});d=s},w=function(b){a.length&&l();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||l()},v=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=q(a);var e={sl:z(a.viewState)};
s=u.getTagTime();w(e);e.t=s;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&
(c.reason="");return h=c};(function(){r("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});r("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){s=u.getTagTime();l()},registerLocation:function(d){var h,s=!1;c.sl==z(d.viewState)&&a.length?(h=new v(d),a[a.length-1].details=
h.details):(h=new v(d),a.push(h),e=d.viewState,s=!0);m.getAggregator().trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(s&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:r,getCurrentLoc:function(){return z(e)},getCurrentEvent:function(){return h}}},
J={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=x,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=p.getWindow(),
c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},wc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",b);a=t.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=t.getFirstChildElement(b))&&t.tagNameIs(b,"a"),f=t.attributeMatches(b,"href",d),k=t.attributeMatches(b,"target",e);h&&f&&k&&(b=t.getFirstChildElement(b),t.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},xc=function(){var a=wc(),b=function(a,b){b.tag=t.getTagName(a);b.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},yc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!t.isViewportVisible(c,a))return c;if(c!==d&&u.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=p.getWindow();return b(a,p.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=p.getWindow();t.isViewportVisible(c,a)?
d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},zc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,q=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(q=!0);q&&!d&&(b(),e(),q=!1);c=a.innerWidth;f=a.innerHeight})}}},Ac={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,
d=function(){try{var d=a.isHidden(),h,s={};d!==c&&(h=f.stringifyTriState(d),s.res1=h,s.ps=h,s.ts=p.now(),s.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",s));c=d}catch(n){m.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)zc(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},Bc={name:"hA",dependencies:["AS_Finder"],
creator:function(a){var b=0,c=function(a,b){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(u.embedded)try{h=l.contextNode.parentNode,b=xc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){m.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,
b,c){return a.on("usehaps")}}},Ga=function(a,b,c,d){var e,h=0,s=0,n=!1,q=function(){e=Math.round(t.getNodeArea(a.body));if(e>=d){for(var q,r=e+20*e/100,l=a.querySelectorAll("iframe"),l=f.fromNodeListToArray(l);l.length&&(s<r||h<c);)q=l.shift(),q=Math.round(t.getNodeArea(q)),q>=d&&(h++,s+=q);s>=r&&h>=c&&(r={va:e,bia:s,bin:h},m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(r).toION()),n=!0)}},r=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():p.execAtEndOfThread(function(){f(a).each(function(a,
b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&t.isElement(c)&&t.tagNameIs(c,"IFRAME")&&f.debounce(q,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(p.execAtEndOfThread(q),!n&&f.isDef(x.MutationObserver)&&r())},Cc={name:"BS_InApp",dependencies:[],creator:function(){var a=p.getWindow().document;m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ga(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||
c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},Dc={name:"BS_Browser",dependencies:[],creator:function(){var a=p.getWindow().document,b=a.body?Math.round(t.getNodeArea(a.body)):null;!m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ga(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},vb=function(){return{createInstance:function(a){return u.isDomless()?
new Ec:new Fc(a)}}},Fc=function(a){var b,c,d,e=new za,h=new da,s=new Gc(e),n=new Hc,q=new Ic,r=new Jc(e,a),k=function(){f.isUndef(d)&&(d=new Kc(e));return d},l=function(){e.provide({frameCollection:function(){return s},adProxy:function(){return q},adTalkMessage:function(a){return new Lc(a,e)},adTalkMessageCollection:function(){return n},idMapModule:k,interFrameQuerySelector:function(a){return new Mc(a)}})};return{isApplicable:function(a){return f.isDef(x.JSON)&&f.isDef(x.postMessage)&&!a.isAvid()&&
!a.isOmidNative()},start:function(){l();h.traverse(s.addFrame);r.startListening();r.sendToKnownFrames();m.getAggregator().once("stopAdTalk",function(){r.stopListening()});m.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:r.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ha(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ha(e,!0));return c},getIdMap:k}},Ec=function(){return{isApplicable:function(){return!1},start:function(){}}},Lc=function(a,
b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=m.getAggregator().request("features").on("swapids")?l.oid:l.asid;var h=a||{},f=l.asid,d=d.tagId,n=u.embedded,q=u.friendly,r=l.birthdate;c=c.split("-")[2];var z;u.friendly?z="["+k.AD_IDENTIFIER+"-"+l.asid+"]":(z=p.getWindow(),z=z.location&&z.location.href,z='iframe[src*="'+(z&&z.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:q,srcBirthdate:r,
iasCommonId:c,nodeSelector:z,positionStr:e,version:"0.1"}},Hc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},Nc=function(a,b,c,d){var e,h=a==x;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,
b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var s=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=
function(a,b){s(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},Gc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,h,f){var n=a.request("adProxy").getAll();e=new Nc(e,h,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ha=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();
q+=c.isMe?"*":"";q+=f.length?"."+f[0].tagId:"";n+=q}return n}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Kc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&
a.substr(0,120)+".of"+a.length},h=function(a){var e=!1,e=!u.embedded,h="BODY"!==t.getNodeName(c)&&"HEAD"!==t.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var m=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?m:!a.srcIsFriendly)}e&&h&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&u.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,
b){var c;a!==l.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),m.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Mc=function(a){var b=new da,c=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return t.querySelector(c(a),b)},e=function(c,e){var k,q,r;try{q=d(c,e),q||(k=b.getFrames(!0,a),f(k).findFirst(function(a,
b){return r=d(b,e)}))}catch(m){}return q||r||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},Jc=function(a){var b=!1,c,d;d=m.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},
s=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);m.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var h,n,l,u,t;try{h=a.request("frameCollection");n=a.request("adTalkMessageCollection");l=d.messageContent.self;n.add(d);var L=h.getMe();L.unifiedId>l.unifiedId&&(L.unifiedId=l.unifiedId);var x;x=p.now()-d.sentTime;d.transferDuration=x;n=u=h.getFrame(l.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(u=u||h.addFrame(c.source,l.id.split("-"),d),u.addInformationFromSrc(d,
l),e()):u.addInformationFromSrc(d,l);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&s()}catch(xe){m.getAggregator().trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:s,sendToKnownFrames:function(){(new ea).send(h)},startListening:function(){c=new Aa;c.listen(e,n,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:h}},Oc=function(){var a=m.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Ic=function(){var a,
b=[],c=function(a){a=new Oc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Cb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&y.addEvent(p.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,p.getDoc().documentElement.click());
return{scrX:b,scrY:c}}}},Pc=function(a,b){var c,d,e=k.NA,h=e,s=!1,n=!1,q=!1,r=!b,z=function(){var b=p.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==h&&p.execAtEndOfThread(function(){m.getAggregator().trigger("IOPivChange",e)});h=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});r&&p.execAtEndOfThread(function(){e===
k.NA&&(e=0)});b.observe(l(a));r&&p.execAtEndOfThread(function(){u.isBustedIframe()||m.getAggregator().trigger("delayedViewabilityReady")});s=!0},l=function(b){if(!f.isUndef(b)){if(q){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(q=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){n=
!0}b&&null!==b.bodyElement?z():b&&b.document?y.whenReady(z,b.document):n?m.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):z()},isReady:function(){return e!==k.NA},isStarted:function(){return s},getAdNodeDimensions:function(){var a;c&&(a=E({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},wa=function(){var a=!1;(function(){y.whenReady(function(){m.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},Qc={name:"loopDelay",dependencies:[],creator:wa,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},Rc=function(){return{start:function(a){m.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Sc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Ub=
function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,m.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[Tc(),Uc(),Sc(),Rc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(l._onMeasurable)}}},Uc=function(){return{start:function(a){ec(m.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,
b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&u.isVideo()}}},Tc=function(){return{start:function(a){m.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&u.isVideo()}}},Vc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){m.getAggregator().trigger("adImpression")})}}},Wc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===
c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Xc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&m.getAggregator().trigger("adImpression")})}catch(b){}}}},Yc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},aa=
function(a){var b=p.getWindow(),b=b&&b.omid3p,c=m.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Zc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){m.getAggregator().trigger("adImpression")})}}},ab=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ya=function(a){var b=!1,c=!1,d=!1,e=!1,h=m.getAggregator().request("omidAdSessionContext");h.queuedOutputItems=
[];var s=new ga,k=m.getAggregator().request("omidAdSessionVerificationParameters"),q=p.getWindow(),r=(q=q&&q.omid3p)&&f.isFunction(q.registerSessionObserver)&&f.isFunction(q.addEventListener)?q:a,l=!1,B=function(){return k&&k.IAS&&0<Object.keys(k.IAS).length?k.IAS:k},w=function(){b&&c&&(!e||d)&&(x.omidSupported=!0,h.hasOwnProperty("impressionType")&&h.queuedOutputItems.push({code:"oiet",value:h.impressionType}),h.hasOwnProperty("creativeType")&&h.queuedOutputItems.push({code:"oct",value:h.creativeType}),
m.getAggregator().trigger("tryToCallContinueMain",B()),l=!0)},v=function(a){var c;if("sessionStart"===a.type){h.adSessionType=a.data.context.adSessionType;h.environment=a.data.context.environment;h.accessMode=a.data.context.accessMode;h.omidNativeInfo=a.data.context.omidNativeInfo;h.omidJsInfo=a.data.context.omidJsInfo;h.deviceInfo=a.data.context.deviceInfo;h.app=a.data.context.app;h.app&&"string"===typeof h.app.appId&&-1<h.app.appId.toLowerCase().indexOf("pandora")&&(h.ignoreDivAsCandidate=!0);a.data.hasOwnProperty("contentUrl")&&
(h.contentUrl=a.data.contentUrl);h.isJavaScript="javascript"===h.adSessionType;h.isNative="native"===h.adSessionType||"javascript"===h.adSessionType;h.isLimitedSandbox=u.embedded;h.isHtml="html"===a.data.context.adSessionType;h.isWeb="web"===a.data.context.environment;k=a.data.verificationParameters;c=h.isHtml&&h.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?
h.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,h.useOMID13Logic=!0,h.queuedOutputItems.push({code:"ohand",value:"13"}));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",
field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,s,q,r=0;r<d.length;r++)f=d[r].root,s=d[r].field,q=d[r].code,"object"===typeof h[f]&&"undefined"!==typeof h[f][s]&&h.queuedOutputItems.push({code:q,value:h[f][s]});h.queuedOutputItems.push({code:"oast",value:h.adSessionType});h.queuedOutputItems.push({code:"oacm",value:h.accessMode});h.queuedOutputItems.push({code:"oenv",
value:h.environment});h.hasOwnProperty("contentUrl")&&h.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(h.contentUrl||"")});c?m.getAggregator().trigger("tryToCallContinueMain",B()):(b=!0,w())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),l?m.getAggregator().trigger("addOutputItem",{output:a},"oser"):h.queuedOutputItems.push({code:"oser",value:a}))},t=function(a){h.mediaType=
a.data.mediaType;h.queuedOutputItems.push({code:"omtp",value:h.mediaType});"video"===a.data.mediaType&&(h.isVideo=!0);a.data.viewport&&a.data.adView&&(h.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof h.geometryArrived&&s.checkForViewAttachmentBasedOnAdSessionType(h,a.data.adView)&&(h.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!h.hasOwnProperty("impressionType")&&(h.impressionType=
a.data.impressionType);h.isNativeVideo=h.isNative&&"video"===a.data.mediaType;h.isDisplay="display"===a.data.mediaType;c=!0;w()},M=function(a){a&&"start"===a.type?(h.videoStartArrived=!0,m.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(h.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType),w())};return{start:function(){r.addEventListener("media",M);r.addEventListener("video",
M);r.registerSessionObserver(v,"IAS");r.addEventListener("impression",t)}}},Za=function(){return{accepts:function(){return!0}}},Da=function(){var a=m.getAggregator().request("omidAdSessionContext"),b=m.getAggregator().request("omidVerificationClient"),c=new aa(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},$a=function(){return{start:function(){var a=l.contextNode&&(l.contextNode.dataset.iasParameters||l.iasParameters);m.getAggregator().trigger("tryToCallContinueMain",a)}}},
$c=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},ad=function(a,b){var c,d=function(a){var d,f,k;try{d=a.eventData.percentageInView,f=c&&75<=d,k={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,
isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",k)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(h){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},bd=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,s=!1,n=new Fa,q=m.getAggregator().request("omidAdSessionContext"),
r={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},l=function(){s=!0},B=function(a){try{var r="",n=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),l="n",z=!1;switch(a.type){case "start":r="adVideoStart";q.videoStartArrived=!0;m.getAggregator().trigger("omidrendvideostart");
d=n;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":r="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":r="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);z=!0;m.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":r="pauseAd";break;case "resume":case "bufferFinish":r="resumeAd";break;case "skipped":r="adSkipped"}if(""!==r){var B=m.getAggregator().request("mScreenEvents");
B&&(l=B.getCurrentLoc());c.push({t:n-d,tp:r,sl:l,ad_duration:h,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var p=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),r=-1!==p?p+1:void 0,u=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===s?(f.isDef(r)&&m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",r),m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",u)):(f.isDef(r)&&m.getAggregator().trigger("addOutputItem",{output:r},"vbp",
{type:k.IMPRESSION_EVENT}),m.getAggregator().trigger("addOutputItem",{output:u},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&m.getAggregator().trigger("omidAdDuration",{ad_duration:h});var t;"playerStateChange"===a.type?t="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?t="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(t="AdPaused");f.isDef(t)&&b.trigger("videoPlaybackEvent",
{eventType:t,eventData:null});z&&m.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(y){__IntegralASDiagnosticCall("omidvideo",y,x.bootstrapper)}};return{start:function(){m.getAggregator().on("impressionsent",l);m.getAggregator().provide({omidVideoEventsString:r});a.addEventListener("video",B);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ia=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;
a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},cd=function(a,b,c){var d=f.isDef(a)?a.environment:
void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&
b.requiresDelayedViewabilityEvent()}}},tb=function(a,b,c){var d=m.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ha(b)).resolve())||m.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new dd(b);return new cd(b,c,d.isMobileAppEnvironment())}}},ub=function(a){var b=m.getAggregator().request("mobileApp");
return{getOmidMeasurementStrategies:function(){var a=m.getAggregator().request("omidVerificationClient"),b=new aa(a),e=new Da,h=[];if(b.accepts()&&!e.accepts()){var f=new ba,k=new ed,e=new fd(a,new C),f=[{environment:f,measurementStrategy:new gd(a,new C)},{environment:k,measurementStrategy:new Ja(new ia,p.getWindow(),new C)}],f=(f=(new ha(f)).resolve())?f.measurementStrategy:{},q=new Ka(new La(new T),new T,k.accepts()),k=new Yc(a,b,l.mode),r=new Ma(e,f,new C,q),b=new Zc(a,b,l.mode),a=new Na(e,f,new bd(a,
new C),new C,q);h.push({environment:k,measurementStrategy:r});h.push({environment:b,measurementStrategy:a})}return h},getAvidMeasurementStrategies:function(){var b=m.getAggregator().request("avidJsClient"),d=new Wc(b),e=[];if(d.accepts()){var h=new Vc(b,d,l.mode),f=new Xc(b,d,l.mode),k;k=new $c(b,new C);if(d.supportsAdContainerGeometry()){var q=new hd,r=new id,z=new Ja(new ia,p.getWindow(),new C),B=new jd(b,new C),q=(q=(new ha([{environment:q,measurementStrategy:B},{environment:r,measurementStrategy:z}])).resolve())?
q.measurementStrategy:{},r=new Ka(new La(new T),new T,r.accepts()),z=new kd(b,new C),b=new Ma(z,q,new C,r);k=new Na(z,q,k,new C,r)}else r=new ad(b,new C),b=new Ia(r,new C),k=new Oa(r,k,new C);e.push({environment:h,measurementStrategy:b});e.push({environment:f,measurementStrategy:k});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new ld(p.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=m.getAggregator().request("context"),
e=new md(p.getWindow(),e),h=new nd(p.getWindow(),new C);e.accepts()?(d=new od(p.getWindow(),new C),d=new Oa(h,d,new C),d={environment:e,measurementStrategy:d}):(e=new Ia(h,new C),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ha=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},dd=function(a){var b=!1,c,d={winDimensions:E({scrX:0,scrY:0,width:0,height:0}),adDimensions:E({scrX:0,scrY:0,width:0,height:0}),
containerDimensions:E({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?new E({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):E({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?
a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,m.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=
d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Oa=function(a,b,c){var d=!1,e=!1,h=!1,s,n,q,r,l=function(){if(!f.isUndef(n)){var a=[],b,m;d?(e?(m=!1,b=100):(m=r,
b=q),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(m=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;n.shouldDelegateToDomBasedViewability=m;n.percentageInView=b;n.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;n.outOfViewReason=a.join(".");s=n;c.trigger("measurementChanged",s)}},B=function(a){n=a;q=a.percentageInView;r=a.shouldDelegateToDomBasedViewability;l()},p=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!==
"AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);l()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(B);a.start();b.addVideoPlaybackEventListener(p);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},md=function(a,
b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,m.getAggregator().trigger("adImpression"))})}catch(d){}}}},od=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},kd=function(a,b){var c=function(a){var c=new E(a.eventData.viewport||{width:0,height:0}),f=new E(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),n=new E(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,
outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",
c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ka=function(a,b,c){function d(a,b,c){c=n(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),h=Math.min(a.y+a.height,b.y+b.height),e=e-c,h=h-d;return{x:c,y:d,width:0<e?e:0,height:0<h?h:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},
s=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,r){if(f.isDef(e)&&f.isDef(r)){var m=e.viewport,l=e.computedAdContainer,w=l.obstructions,v=w&&0<w.length,u=e.originalAdContainer,t=r.adGeometry,L=r.adFound,x=e.detectionMethod,y=0,m={x:0,y:0,width:m.width,height:m.height},Q=s(u,t),F=e.outOfViewReason,A=0,H=0,C=v||!1,A=1>=t.width*t.height;c&&A&&(L=!1,F=F||
"",L||-1!==F.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(F=k.OUT_OF_VIEW_REASONS.GEOM+(""!==F?"."+F:"")));if(L&&0<e.percentageInView){A=d(m,l,Q);v?(y=n(l,Q),y=h(m,l,y),y=s(l,y),y=a.calculateObstructedArea(y,w)):y=0;H=y;y=Math.round((A-H)/(Q.width*Q.height)*100);v&&0===H&&(C=!1);for(var t=(new E(Q)).getRoundedGeometry(),L=C,D,v=0,H=b.getConfig(t).numberOfSlices,S=p.floor(t.height/H)||1,w=[],A=L?a.getObstructionStatusBySlice(H):[],U,v=0;v<H;v++)D=t.y+S*v,v==H-1&&(S=t.y+t.height-D),D={x:t.x,y:D,width:t.width,
height:S},U=d(m,l,D),D=1==U/(D.width*D.height),w.push(D);if(L)for(l=p.min(A.length,H),v=0;v<l;v++)w[v]=w[v]&&!A[v];l=w}else l=b.getConfig(t).defaultSliceArray;return{windowDimensions:m,containerDimensions:u,adDimensions:Q,percentageInView:y,viewState:50<=y?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=y?"":F||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:C,sliceStatus:l}}}}},hd=function(){return{accepts:function(){return u.isAvidNative()}}},jd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;
a=!!c;c=(new E({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},id=function(){return{accepts:function(){return u.isAvid()&&!u.isAvidNative()}}},Ma=function(a,b,c,d){var e,h,s,n=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);s=a.isMeasurable=
!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;n()},r=function(a){h=a;n()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(r);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return s}}},La=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,k,n,q;k=e&&0<e.length;var r;if(k){r=Math.round(d.width);var m=Math.round(d.height);h=Array(r);for(n=0;n<r;n++)h[n]=Array(m);r={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:r,height:m}}else r={};h=r;m=r=0;if(k){for(;r<e.length;r++){k=e[r];n=m=h;var l=k;h=Math.max(n.x,l.x);k=Math.max(n.y,l.y);q=Math.min(n.x+n.width,l.x+l.width);l=Math.min(n.y+n.height,l.y+l.height);
n=q-h;q=l-k;n=0<n?n:0;q=0<q?q:0;h-=m.x;k-=m.y;n=h+n;q=k+q;for(h=Math.round(h);h<Math.round(n);h++)for(l=Math.round(k);l<Math.round(q);l++)void 0!==m.matrix[h]&&void 0===m.matrix[h][l]&&(m.matrix[h][l]=1,m.obscuredPixelCount+=1);h=m}m=h.obscuredPixelCount;r=h;if(f.isUndef(r.matrix)||0===r.matrix.length)c=[];else{k=0;q=!1;h=r.matrix[0].length;n=r.matrix.length;q=a.getConfig({height:h}).numberOfSlices;for(var l=p.floor(h/q)||1,w=[],v=0;v<h;v++){q=!1;for(var t=0;t<n;t++)if(1===r.matrix[t][v]){q=!0;break}k++;
q&&(v+=l-k,k=l);if(k==l||v===h-1)w.push(q),k=0}c=w}}else c=b;return m},getObstructionStatusBySlice:function(){return c}}},fd=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),d=null,e=!1,h=new ga,s=function(){var a=p.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):p.setTimeout(s,50)},n=function(a){if(a&&a.data&&a.data.adView){var f=a.data.adView,n=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);
if(c.delayingViewabilityEvents)d=a,e||(e=!0,s());else{n&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions);var l=new E(a.data.viewport||{width:0,height:0}),p=new E(f[n?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),n=new E(f["onScreen"+(n?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:l.getRoundedGeometry(),originalAdContainer:p.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),
percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:q(f.reasons)};"undefined"===typeof c.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},q=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:q}},
ba=function(){var a=m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},gd=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=new ga,s=function(){var a=p.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):p.setTimeout(s,50)},n=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,s());else{var n=
a.data.adView.geometry,l=a.data.adView.containerGeometry,p=!!n,w=a.data.adView.measuringElement&&!!l,n=(new E({x:p&&w?n.x-l.x:0,y:p&&w?n.y-l.y:0,width:p?n.width:0,height:p?n.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&f.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:n,adFound:p})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&
n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},ed=function(){var a=m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Na=function(a,b,c,d,e){var h=!1,s=!1,n,q,r,l,p,w=function(){if(!(f.isUndef(q)||f.isUndef(r)||f.isUndef(l))){p=!0;var a=e.calculateGeometricMeasurement(q,r),b=h&&s,c=h&&50<=a.percentageInView,m={windowDimensions:a.windowDimensions,
containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(m.percentageInView=100);b||c?m.viewState=k.IN_VIEW:(m.viewState=k.OUT_OF_VIEW,m.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);n=m;d.trigger("videoGeometryMeasurementChanged",n)}},v=function(a){q=a;w()},t=function(a){r=
a;w()},u=function(a){l=a;a=a.eventType;"AdEnteredFullscreen"===a?s=!0:"AdExitedFullscreen"===a?s=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);w()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(v);a.start();b.addAdGeometryMeasurementChangedListener(t);
b.start();c.addVideoPlaybackEventListener(u);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return p}}},Ja=function(a,b,c){var d,e=function(){var b=a.find(),e,n,q=!1;f.isDef(b)?(n=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),n=!1);if(b=
n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||q)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:n})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},ld=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},nd=function(a,b){var c=
!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",
d)},s=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},n=function(){c||s()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;m.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?m.getAggregator().trigger("exec","mraid.js",n):s()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},hb=function(a,b,c){var d={},
e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||m.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},cb=function(){var a=new K({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=p.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},bb=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var s=[2E3,5E3,15E3],n=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new K({tiv:d}),d=d[0]):f?(c=new K({tiv:s}),d=
s[0]):(c=new K({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},eb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],l=[1E3,5E3,15E3],n=[2E3,5E3,15E3],q=function(a){var b=
p.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new K({tiv:f}):d?new K({tiv:n}):new K({tiv:l});m.getAggregator().provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},db=function(a,b){return{timeInViewThresholds:new K({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=
p.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},gb=function(a,b){var c,d,e,h=p.getMaxNumber(),m=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var q=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,r=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,n,l,r=b.adDimensions.area();
l=1===b.tabHidden;var t=p.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;n=b.ub||h;if(r>=e&&r<=n)return!0});l=!l&&t>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(l=!1);m&&(l=l&&b.isVideoPlaying,q&&(l=l&&b.isSoundOn));return l};c=new K(a);d=a.qiv;(function(){e={};var a;f.isDef(l.rts)&&f.isDef(l.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():
k.RTS_KEY_FOR_VQ,e[a]=l.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:r,isInViewIgnoringRender:function(a){return r(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:q,sendOtherwiseInViewSignal:!0}},fb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,n=
c.on("customMetric"),l=c.on("groupmCM"),m=function(a,b){var c,k,n,m,r;c=f(b.mediaTypes).contains(d);k=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;m=J.contains(b.id,"fiv");r=J.contains(b.id,"groupmCM");m=!m;r&&(m=l);return m&&c&&k&&n};return{resolve:function(){var b=[],c;n&&k&&(c=f(a.customViewability).filter(m),f(c).each(function(a,c){b.push(c)}));return b}}},K=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ja(c))});
else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new pd;b.push(new qd(c,parseInt(a[1].replace("%"))));b.push(new ja(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ja(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},pd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};m.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},ja=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},qd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=p.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},sa=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):
b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},ib=function(a,b,c,d){var e,h,k,n,l,r,p=function(a,b){return!b&&a},t=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},w=function(a){var m=0,p=1===a.tabHidden,z=a.isVideoPlaying,w=a.isSoundOn,u=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,p,z,u)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});v("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){t(b,p,z,u)&&w?h[a].mark():h[a].stop();l[a]=h[a].getTotalTime()}),
v("slcVtVol",l));r=d&&b&&b.shouldIncludeSound?l:n;a=f(r).findFirst(function(a,b){m=Math.max(m,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(m)},v=function(a,b){var c={};c[a]=b;m.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},u=function(a){!e&&a.sliceStatus&&(e=[],h=[],n=[],l=[],f(a.sliceStatus).each(function(a){e.push(new X(1));n.push(0);d&&(h.push(new X(1)),l.push(0))}))},x=function(a){f.isUndef(a.sliceStatus)||(e||u(a),w(a))};return{start:function(){k=d?t:p;a.addMeasurementChangedListener(x)}}},
qa=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Mb=function(a,b,c,d,e,f,l,n,m,r){var z=!1,t=u.isVideo(),w=f.request("mobileApp"),v=Y().applies(c,e),N=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||v,x=u.xDomainIframe&&!N,y=new Ba(10),A=function(){e.on("viewabilityready")&&!z&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),z=!0)};
f.on("delayedViewabilityReady",function(){D();A()});f.on("delayedViewabilityReadyCallOnly",A);var D=function(c){c=c||!1;try{y.start();var d,e;b.hasMeasurementStrategy()?e=w.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),w.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):x&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),t&&!u.isAvid()&&r.setVideoSpecificScreenEventFields(e));d=
m.registerLocation(e);c||a.trigger("measurementChanged",e);y.stop();var z=p.round(y.getTime()/y.getCount());l.addItem({output:z},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(v){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:D,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":t?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=u.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=
a&&v,d=!d&&!e&&!a;return w.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){w.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},ud={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,h=rd(c),s=[new sd,new td(h)],n=function(){return f(s).findFirst(function(a,e){return e.applies(d,
b,c)?e:void 0})},q=function(a){"sessionFinish"===a.type&&m.getAggregator().trigger("adSessionComplete")},r=function(a){y.addEvent(x,a,function(){m.getAggregator().trigger("adSessionComplete")},!1)},z=function(){var a=new Z(k.DT_CODES.VIDEO_EVENTS);m.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};p.getWindow().postMessage(JSON.stringify(a),"*")})};m.getAggregator().once("startViewabilityLoop",function(){var b,c=m.getAggregator().request("mobileApp").isMobileAppEnvironment();
m.getAggregator().request("ids").impressionIsIdentifiable()&&(e=ic(a.checkScreenLoc,h.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?u.isOmid()?m.getAggregator().request("omidVerificationClient").registerSessionObserver(q,"IAS"):r("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):r("beforeunload"))});m.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||z();m.getAggregator().trigger("unload");e&&e.stop();m.getAggregator().trigger("endAdSession");m.getAggregator().trigger("stopAdTalk")})},
settings:{tier:k.TIERS.VIEWABILITY}},rd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},td=function(a){var b,c,d,e,f,k=function(n){d&&!f&&1>n?(f=!0,p.setTimeout(function(){k(n)},1E3)):(e=1>n,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){k(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");
d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);m.getAggregator().on("IOPivChange",k);m.getAggregator().on("newScreenEvent",n)}}},sd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,p.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},f=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Y();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=
a;b.start(!0);m.getAggregator().on("IOPivChange",e);m.getAggregator().on("nodesAdded",f)}}},Cd=function(a,b,c,d,e,h){var s,n,q,r,z,B,w,v,N,M=t.getElementsWindow(b);t.getElementsDocument(b);m.getAggregator().provide("iframeCalculatorHelper",vd(M));var A=wd(b,d),D=k.AD_IDENTIFIER+"-"+l.asid,C=!1,Q=E({}),F=u.isDeviceTypeGroupMobile(),I=u.usesGroupMCustomMetricMobilePassThru(),H,J=function(){if(!s)if(s=A.calcDims(b,d,q),c===k.DETECTION_METHODS.VIDEO&&u.embedded){var a=s,e=(new E(b)).getRounded();try{a.set("width",
e.width),a.set("height",e.height)}catch(f){m.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&s.treatAsPlaceholder();return s},K=function(){var b,d=u.xDomainIframe&&C;b=F&&C&&q.isReady();b=d||b;d=A.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&u.embedded||u.isCeltra());b?n=q.getPiv():f.isUndef(n)&&(b=!F&&(u.friendly||f.isDef(x.mozInnerScreenX))&&e.on("offscreen"),v=J(),w=new E(t.calcWinDims()),B=new E(b?t.calcMonDims():{}),N=
d?A.getClippedDims():Q,n=a.calcPercentInView(v,w,B,N));return n},S=function(){return a.calcInitialViewState(K())},U=function(){return b===x?!1:J().isHidden()};(function(){var c=p.getWindow(),d=p.getDoc(),e=b===c,f=d.body,h=m.getAggregator(),k=new Y,n=h.request("browser"),l=h.request("features"),h=h.request("context"),s=!u.xDomainIframe,d=e&&f?d.body:b;H=u.friendlyIframe?c.frameElement:d;y.addEvent(d,"click",function(){m.getAggregator().trigger("adComponentClicked")});y.addEvent(d,"mouseover",function(){m.getAggregator().trigger("adComponentMousedOver")});
k.applies(n,l,h)?(q=Pc(b,s),q.start(),C=!0,I&&(c=new xd(J().getRounded()),k=new yd,k=new zd(q.getObservedNode(),k),r=new Ad(c.getSlices(),k))):I&&(z=new Bd(a))})();return{mark:function(){t.setAttributeOf(H,D,"")},cleanup:function(){t.removeAttributeOf(H,D)},isNode:function(a){return b===a},isHidden:U,isObstructed:function(){return!1},getDims:J,getPercentInView:K,getLocationState:S,getOnPageViewability:function(){return U()?k.OUT_OF_VIEW:S()},getDetectionMethod:function(){return c},getContainerDims:function(){return A.allowsOptimization?
s:E(d)},refresh:function(){N=v=w=B=n=s=void 0;if(h){var a,c;if(!u.isDomless()&&(c=b.parentNode)){for(;b!==x&&c&&c!==G&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;r&&r.isReadyToMeasure()?a=r.getSliceStatus():u.friendly&&z&&f.isDef(v)&&(a=z.getSliceStatus(v,w,B,N));return a}}},Dd=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},l=function(n,l,r,q){var s=h()||
0===c.length;n=Cd(a,n,l,r,b,q);h()&&(q=c.shift(),e=f(c),q.cleanup(),d=void 0);c.push(n);e=f(c);s&&n.mark();s&&l!==k.DETECTION_METHODS.AD_PLACEHOLDER&&m.getAggregator().trigger("primaryadfound",n);l===k.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof r&&m.getAggregator().trigger("addOutputItem",{output:r.nodeName},"spac")},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,f+=a/100*h)});return d=
{totalArea:c,totalInView:f,hasMeasurement:b}},q=function(a){var b=m.getAggregator().request("adRenderStatus");return!a&&!b},r=function(a){var b;b=n();b=b.hasMeasurement?p.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||q(a))b=0;return b},z=function(c){var d=b.bootstrapOn("mobOrTab"),d=n().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!u.isVideo();return a.calcInitialViewState(r(c),d)},t=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},w=function(a){return function(){return c[0]&&
c[0][a]()}};m.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===t(b)&&l(b,k.DETECTION_METHODS.MUTATION)})});m.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=t(b);-1<d&&c.splice(d,1)})});return{getDims:w("getDims"),isObstructed:w("isObstructed"),getDetectionMethod:w("getDetectionMethod"),getContainerDims:w("getContainerDims"),getViewState:z,getViewStateIgnoringRender:function(){return z(!0)},getPercentInView:r,getPercentInViewIgnoringRender:function(){return r(!0)},
isHidden:w("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:l,getOutOfViewReasons:function(a){var b,e=[],f=c[0],h=k.OUT_OF_VIEW_REASONS;f&&(b=d||z(),q(a)?e.push(h.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(h.GEOM),f.isHidden()&&e.push(h.HIDDEN),f.isObstructed()&&e.push(h.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:w("getSliceStatus")}},
Ed=function(a){var b=!1;if(!f.isUndef(x.MutationObserver)){var c=new x.MutationObserver(function(a){p.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&m.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&m.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;p.setTimeout(function(){b=!1},40)};m.getAggregator().on("adComponentClicked",d);m.getAggregator().on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(G.body,
{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},p.getDoc())}},Md=function(a,b){var c=[Fd(),Gd()],d=[ia(),Hd(),Id(),Jd(),Kd(),Ld()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Id=function(){var a,b,c,d=function(a){a?a&&c&&(p.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||fa();var c=t.crossQuerySelector(fa().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Nd=function(a,b){var c,d=t.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<t.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},Kd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return x},isApplicable:function(){return u.embedded},getAdContainer:function(){return l.contextNode.parentNode},
allowForAdContainerChange:!0}},Od=function(){var a,b=p.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return J.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,
b){return t.crossQuerySelector(b,!0)})}catch(c){}return a}}},Pd=function(){return{isApplicable:function(a,b){var c;try{c=t.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&J.contains(c,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Qd=function(){var a,b,c=p.getDoc(),d=function(){var b;a||(a=(b=(b=t.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&
b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=p.getWindow(),k=a.friendlyIframe&&p.getWindow().frameElement,k=k&&E(k).isOneByOne(),l=function(){var a=p.getDoc().scripts;return f(a).findFirst(function(a,b){return J.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&
!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&l&&c&&k&&d()&&e()},getCssSelector:e}},fa=function(){var a,b=m.getAggregator().request("features");a||(a=[Qd(),Pd(),Od()]);return f(a).findFirst(function(a,d){return d.isApplicable(u,b)})},Jd=function(){var a,b=function(){p.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},
find:function(){var c,d=Ea().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=t.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Ea=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&J.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&t.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ia=function(){var a=m.getAggregator().request("mobileApp");
return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=t.findChildWithLargestContent(p.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Gd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return u.isSpecifiedAd()},find:function(){var b=t.crossQuerySelector(l._cl_adpath);
b&&(a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Fd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return u.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(c=t.crossQuerySelector(d))a=t.getParent(c),1>t.getNodeArea(c)&&(a=c,c=t.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},Ld=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Nd,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Hd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:m.getAggregator().request("video").findAdNode,isApplicable:u.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},wd=function(a,b){var c,d;c=[Rd(),
Sd(),Td()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Ud();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Td=function(){return{calcDims:function(a,b){var c,d,e=new E(a);t.isClippable(a,b)&&(c=t.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(u.isSpecifiedAd()||u.isBustedIframe())&&t.nodeIsInWindow(a,p.getTop());
a=!t.elementIsEmbedded(a);return b||a}}},Sd=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(u.isSpecifiedAd()||u.isBustedIframe())&&t.elementIsEmbedded(a)}}},Rd=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new E(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,
allowsOptimization:!1,isApplicable:function(a,c){var d=(u.isSpecifiedAd()||u.isBustedIframe())&&u.embedded&&!t.nodeIsInWindow(c,p.getTop()),e=u.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},Ud=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=Y();var c=m.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,
e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},vd=function(a){var b,c,d,e=m.getAggregator().request("features"),h=m.getAggregator().request("browser");a=a||p.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:p.getMaxNumber(),height:p.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,n=e.length;h<n;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=p.min(c.width,d.width),c.height=p.min(c.height,d.height)}catch(u){m.getAggregator().trigger("error",
k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==p.getTop()&&l(b.parent,c)}return c},n=function(){var n,r={};try{var z,B,w,v,x,y,A=p.getMaxNumber(),D=p.getMaxNumber();u.friendly?(z=l(),w=z.left,v=z.top,A=z.width,D=z.height,B=t.browserWindowPosition(),x=B.scrX+w,y=B.scrY+v):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||m.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),x=c.scrX,y=c.scrY):f.isDef(a.mozInnerScreenX)&&(x=p.round(a.mozInnerScreenX),y=p.round(a.mozInnerScreenY));var r=
{scrX:x,scrY:y,iFrameClippingWidth:A,iFrameClippingHeight:D},C,E,F=b||t.getIeDimObj(a);b=F;f.isDef(a.innerWidth)?(C=a.innerWidth,E=a.innerHeight):F&&f.isDef(F.clientWidth)?(C=F.clientWidth,E=F.clientHeight,0===C&&0<F.offsetWidth&&(C=F.offsetWidth),0===E&&0<F.offsetHeight&&(E=F.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(C=a.frameElement.clientWidth,E=a.frameElement.clientHeight);n=C;r.height=E;r.width=n}catch(G){m.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return r};
return{calcDims:function(){return new E(n())},getClippedDims:function(){var a=n();return new E({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Gb=function(){return{createInstance:function(a,b,c){return u.isDomless()?new Vd:new Wd(a,b,c)}}},Wd=function(a,b,c){var d,e=m.getAggregator().request("browser"),h=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,s=Dd(b,c),n=function(){var a,b,k;d=d||Md(u,c);a=d.find();!a&&d.usePlaceholder?(q(),
u.isDeviceTypeGroupMobile()&&e.hasMutationObserver()&&p.getMutationObserver(r).observe(h,{childList:!0})):a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),k=d.allowForAdContainerChange,f(a).each(function(a,c){s.addAdComponent(c,f.resolve(d.detectionMethod),b,k)}))},q=function(){var a;s.hasAd()||(a=t.getPlaceholderSpan(),h.insertBefore(a,l.contextNode.nextSibling),s.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))},r=function(a,b){var c=!1;f(a).each(function(a,b){b.addedNodes&&0<
b.addedNodes.length&&(c=!0)});c&&(m.getAggregator().trigger("nodesAdded"),b.disconnect())};Ed(a);return{find:function(){s.isUsingPlaceholder()||!s.hasAd()?n():s.refresh();return s},getDetectionMethod:function(){}}},Vd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},pb=function(a){var b,c=[],d=a||x,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,
c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};u.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},ob=function(a){var b=new Xd,c=new Yd,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=m.getAggregator().request("omidAdSessionContext"),l=u.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var n;if(!(n=l)){var q;if(!(q=u.isAvid())){var r;if(!(r=u.isAvidNative())){var p;if(p=!f){var t;if(t=a.bootstrapOn("mobOrTab")){var w;if(w=a.bootstrapOn("mobAppWebview")){var l="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
v,f=!1;for(v=0;v<l.length;v++)if(-1<d.indexOf(l[v].toLowerCase())){f=!0;break}w=!f}t=w}p=t}r=p}q=r}n=q}if(n&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"r_cars"===e)ka[ka.length-1].detectionRules.userAgent[0]="/";c.detect();m.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});m.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(x){m.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Zd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(u.isDomless())return!1;var b=p.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(u.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(G.referrer)}catch(k){}}try{"jsi"!==l.mode&&c.push(x.location.href)}catch(n){}try{c.push(l.jsref)}catch(m){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,h,k,l="mobfox"===d?c:[b];for(k=0;k<l.length;k++){h=l[k];var n="string"===typeof d?[d]:d;if(f(n).isArray()&&(n[0].substring(0,4),n))for(var m=0;m<n.length&&(e=-1<h.indexOf(n[m]),!1!==e);m++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=p.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));
return d})}},referer:{STRINGIFIED_METHOD:"r",detect:function(a){return!!f(a).findFirst(function(b,c){var d=!1,e="string"===typeof a?[a]:a;if(f(e).isArray()&&"string"===typeof l.jsref)for(var h=0;h<e.length;h++){for(var k="string"===typeof e[h]?[e[h]]:e[h],n=0;n<k.length&&(d=-1<l.jsref.indexOf(k[n]),!1!==d);n++);if(!0===d)break}return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(J.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",
detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){return t.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Pa=function(){var a=function(a,c){var d,e=Zd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},$d=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",
detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},
{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",
detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{referer:[["carsales","cs.android"],["carsales","cs.ios"]]}}],Xd=function(){var a,b=function(a,b){var e,f=Pa().process(b.detectionRules);f&&(e=f+"_"+b.STRINGIFIED_APPDET);return e};return{detect:function(){a=
f($d).map(b);a=0<a.length?a[0]:"";""===a&&l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},Yd=function(){var a=[],b=[],c=function(b,c){var f,k=Pa().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=f(ka).map(c);0<b.length&&m.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});
return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},ka=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},
{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},
{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},
{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],xd=function(a){var b=[],c=function(a,b,c){a*=c;return new V(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,
isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},T=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Ad=function(a,b){var c={mbrd:!1,
mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),l=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new V(h,k,l,f))}});return c},e=function(a,b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=
d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([u.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=
[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},Bd=function(a){var b=T();return{getSliceStatus:function(c,d,e,f){var k,l=[];k=c.getRounded();c=k.height;var m=k.scrY,r=new E({scrX:k.scrX,width:k.width}),t=b.getConfig(k).numberOfSlices;r.set("height",p.floor(c/t));for(var u=0;u<t;u++)r.set("scrY",p.ceil(m+c/t*u)),k=100===a.calcPercentInView(r,d,e,f),l.push(k);return l}}},V=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),l=Math.ceil(d),m=f-e,r=l-k,p=m*r,t=function(){return{leftX:e,
rightX:f,topY:k,bottomY:l,width:m,height:r,area:p}};return{value:t,doesIntersect:function(a){var b=t();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},yd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},zd=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&
e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,m=d.left-f.left,f=d.top-f.top,f=new V(m,m+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new V(0,b,f[d],f[d+1]));h();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},
ga=function(){var a=function(a){var b=!1;ae.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&
a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},ae=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],be=function(){return{listenForResult:function(){m.getAggregator().on("videoBlockResult",function(a){var b=m.getAggregator().request("adNode"),c=!1,d="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},
ce=function(a,b){var c,d,e,h,k;e=m.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},
indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=p.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},
getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?m.getAggregator().persistentTrigger(e,h,k):m.getAggregator().trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},de=function(){var a=[];return{registerEvent:function(b,c,d){b=new ce(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===
a.length}}},ee=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&m.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},l=function(a){a=(new Qa).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){m.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:l,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",
function(a){var c=m.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},fe=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Qa=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},jb=function(a,b,c){var d="IASid"+
a,e="getIasVidBridgeVersion"+a,h,s,n,q=[],r=k.OUT_OF_VIEW,t=!1,B=!1,w=!1,v=!0,x=new de,A=ee(),D=new be,C=new Qa,E=new Fa,G=function(b){var d;t=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=x.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(B=!0,r=w?k.IN_VIEW:!1):d.indicatesNotPlaying()?(B=!1,r=k.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,r=B?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,r=B?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(C)),0<b?
v=!0:0===b&&(v=!1));q.push(d);n&&K();return d},F=function(b){var c,h,k=ma().wrapToGlobal(G),n=function(a){f.isStr(a)&&(m.getAggregator().provide("vc",function(){return a}),m.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),t=!0,n(c||"n")}catch(r){__IntegralASDiagnosticCall("handshakefailure",r,l)}},I=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,
b){return f.isFunction(b[d])})};h||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=p.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return h},H=function(){var a=I();a&&!t&&F(a);return a},J=function(a){a=C.getVolumeFromContext(a);v=f.isDef(a)?0<a:!1},K=function(){E.init();f(q).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&
m.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&m.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),m.getAggregator().trigger("videoQuartileEvent",b)))});q=[];n=!0};(function(){y.addEvent(p.getWindow(),"message",function(a){G(a)});m.getAggregator().on({volumeChanged:J});m.getAggregator().provide({videoEventsString:x,videoVersion:function(){var a,b=H();try{a=b.getVersion()}catch(c){a=-1,m.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},
videoTranslator:function(){return s=s||new fe},adNode:H});H();D.listenForResult();A.isApplicable(u)&&A.start(c)})();return{findAdNode:H,getViewStateOverride:function(){return r},isHandshakeComplete:function(){return t},triggerInitializationEvents:K,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=v;a.isVideoPlayingInFullscreen=!1;if(r){if(r===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=
c.join(".")}a.viewState=b?a.viewState:r;a.isVideoPlaying=r===k.IN_VIEW}w&&B&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},ge=function(){return new $(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Tb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():m.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new Ca;d=0;e(!0);b.start()},l=function(d,e,k,l){d=c[d];l?(f.isDef(d[e])||
(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||h();a=!0},n=function(c,d,e){m.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},q=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(m.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){m.getAggregator().on("preSendDt",function(a){q(a);b&&b.kill()});m.getAggregator().on("addThrottledProp",l);m.getAggregator().on("addThrottledOutputItem",
n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Yb=function(){var a={},b=function(b){a[b]||(a[b]=new Ba(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();m.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){m.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},he=function(){return new $(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},
Eb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),m.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));m.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},$=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};
e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Fb=function(){function a(){}a.build=function(){var a=[];a.push(new $(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=m.getAggregator().request("vc");var d={jv3:Ra,av3:Ra,jvw:he,
avw:ge};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Ra=function(){return new $(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},O={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){m.getAggregator().trigger("measureTime",O.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(x,"load",function(){m.getAggregator().trigger("measureTime",O.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ca;a.onTick({4:function(){m.getAggregator().trigger("markTime",
O.IDS.IN_BROWSER_DELAY)},5:function(){m.getAggregator().trigger("measureTime",O.IDS.IN_BROWSER_DELAY)}});a.start()}},I={isFrameworkAvailable:function(a,b){var c,d,e=p.getTop(),f=p.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=I.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),y.removeEvent(p.getWindow(),
"message",d))}catch(f){m.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},ie={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&I.send(b,f(a).toION())}var b="ccd";(function(){var b=I.isFrameworkAvailable("__uspapi","__uspapiLocator");I.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",
version:1,callId:I.getCallId()}},e=I.getMessageHandler("__uspapiReturn",a),y.addEvent(p.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},je={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),
mtdt:encodeURIComponent(a.metadata)};I.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=I.isFrameworkAvailable("__cmp","__cmpLocator");I.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:I.getCallId()}},h=I.getMessageHandler("__cmpReturn",a),y.addEvent(p.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},
ke={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};I.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=I.isFrameworkAvailable("__tcfapi","__tcfapiLocator");I.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],
callId:I.getCallId(),version:2}},h=I.getMessageHandler("__tcfapiReturn",a),y.addEvent(p.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},le={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=p.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");p.execAtEndOfThread(function(){m.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},me={name:"safeFrameDetector",dependencies:[],creator:function(){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",f.stringifyTriState(u.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},Rb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,d=function(a){f(a).each(function(a,
b){m.getAggregator().trigger("notify",b)})},e=function(){var e;e=new P(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();m.getAggregator().trigger("jsonp",e,d,!0);m.getAggregator().trigger("updateDtCount")};return{start:function(){m.getAggregator().on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Sb=function(a,b,c,d,e,f,s){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(q){try{var r,
p=d.baseUrl,t,w,v=f.getDocumentMode();"number"===typeof v?(w=2E3,8===v?w=4E3:8<v&&(w=8E3)):w=n(l.sp_imp_maxLength,2E3);t=w;if(u.integratedBlockingApplies(p)){w=p;var x=m.getAggregator().request("mobileApp"),y=x&&x.isMobileAppEnvironment&&x.isMobileAppEnvironment(),A=l.contextNode.getAttribute("data-ias-container"),D=l.contextNode.getAttribute("data-ias-callback"),x=w+"adContainerId="+A+"&cbFunctionName="+D,x=y?x.replace("monitoring","blocking"):x.replace("skeleton.js",l.integration+".js"),C=l.protocol+
":"+l.staticServer+l.integration+"a.js",E=l.protocol+":"+l.staticServer+l.integration+".js",p=x+"&true_pb="+encodeURIComponent(l.passback)+(y?"&redirectUrl="+encodeURIComponent(E):"")+(y?"&passback=":"&adsafe_pb=")+encodeURIComponent(C)+"&"}var y=p=p.replace(k.UNIQUE_ID_TOKEN,l.asid),F=p.length,G,H,I=n(l.sp_imp_jsInfo_minLength,0),C="";try{G=t-F-I,0<G&&(H=ne(q,G,14,b.on("partialUrls")),C+=H.join("&"))}catch(J){a.add(k.ERROR_CODES.IMPRESSION_URLS)}p=y+C;q=p+="&"===p.slice(-1)?"":"&";var K,F="";try{K=
t-p.length,F+=oe(K,"adsafe_jsinfo=",a,b,c,e,f,s)}catch(P){a.add(k.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+a.toString()}p=q+F;d.macroUrl&&(p+="&"===p.slice(-1)?"":"&",p+=d.macroUrl);r=p;d.sendImpression(r);l.impUrl=r;m.getAggregator().trigger("impressionsent")}catch(O){__IntegralASDiagnosticCall("impsend",O,l)}}}},oe=function(a,b,c,d,e,h,s,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,
c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};u.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?p.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(p.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var t=a.viewState;b=e.getAvidIds();t=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+t,"em:"+u.embedded,"fr:"+u.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(t.push("abi:"+
b.bundleIdentifier),t.push("apn:"+b.partner),t.push("apv:"+b.partnerVersion));a=pe(a,c,d,e,h,s,n);m.getAggregator().trigger("eligiblerender");return{primary:t,secondary:a}}())},pe=function(a,b,c,d,e,h,s){var n=[],q=m.getAggregator().request("mPage");n.push("mn:"+l.mn);n.push("pt:"+function(){var b=s.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());n.push(f(h.params()).toParams());c.on("mrcAudit")&&!u.isDomless()&&n.push("dvs:"+p.getDoc().visibilityState);e.iterate(function(a,b){var c=
!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+l.mode);n.push("thd:"+f.stringifyTriState(q.supportsVisAPI()));n.push("et:"+(p.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?n.push("oid:"+l.oid):n.push("uid:"+d.unq);n.push("v:19.8.125");n.push("sp:"+(l.isSplitMode?1:0));n.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(t.windowSize()).toArray().join(".")),
n.push("sr:"+f(t.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+b);return n},ne=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,
e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Pb=function(){return{isApplicable:function(a){a=p.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=p.getWindow();a=qe(a.navigator.plugins);var b=a.hash(),c=b.join(".");m.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});
b.length&&(a=a.decode(b),a=a.join("."),m.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},te=function(a,b){return{start:function(){try{var c=re(),d=c.getMethodName(a),e=new P(b.getEnabledScriptUrl(a)),f=se,l=p.getDoc();(new f(l.body||l.head||l.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){m.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},re=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),m.getAggregator().trigger.apply(null,
d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:k,features:b,context:u,dtBaseURL:l.dtBaseURL,spg:Sa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Wb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&te(d,b).start()})}}},qe=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=J.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},
decode:function(b){var c,d;c=p.floor(p.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},se=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=t.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,m;k=(new Date).getTime();m=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+
m}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Sa=function(a){var b=new Aa;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();p.setTimeout(function(){a.isDtCallAlreadySent()||(m.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},p.round(1E3*p.random()))})})();(function(){m.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),p.setTimeout(a.sendToOtherTags,1300),p.setTimeout(a.sendToOtherTags,3200))})})()},ue={name:"spg",dependencies:["spgCache"],creator:Sa,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},ve={name:"spgCache",dependencies:[],creator:function(){var a=
["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,f(b).each(function(a,b){m.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),m.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&h()},isFull:d,sendToOtherTags:function(){(new ea).send({scaInfoOriginatorASID:l.asid,
cache:b})}}},settings:{}},Ua=function(){for(var a=[je,ie,ke,Dc,Cc,Ac,Bc,yc,le,me,jc,Qc,ud,ve,ue],b=0;b<a.length;b+=1)m(a[b].name,a[b].dependencies,a[b].creator,a[b].settings)};try{Ta()}catch(we){__IntegralASDiagnosticCall("main",we,l)}};
try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.isSingleIASInstance&&top.iasAdSlots?top.iasAdSlots.forEach(function(x){__IntegralASConfig._cl_adpath=x.adSelector;__IntegralASConfig.iasParameters=x.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}):__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}catch(x){__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",
err$$10,__IntegralASConfig)};
