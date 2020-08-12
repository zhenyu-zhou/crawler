var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.111',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.111.js"},
		protocol: 'https',
		jsref: "",
		asid: "fd7b1f71-dcb4-11ea-8058-02cb33a7e8c8",
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
		mn: "app09or",
		mobOrTab: false,
		app: true,
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
__IntegralASConfig.initialize=function(m,v,J){function Pa(){var g,a,b;m.perf.markStart(ja);l.startSystem();y=l.getAggregator();y.provide({omidAdSessionContext:{}});y.provide({omidAdSessionVerificationParameters:{}});g=Qa();a=ka();b=(new Ra).createInstance(g,a);y.provide({mErrors:g,mJsonp:a,mComm:b});g=__IASOmidVerificationClient;y.provide({omidVerificationClient:g});y.once("callContinueMain",function(){var a,b;m.perf.markStart(la);b=V.instantiateModules();a=V.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,t,b.renderDetector);V.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);V.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,t);m.perf.markEnd(la)});y.on("tryToCallContinueMain",function(a){m.isResolved?y.trigger("callContinueMain"):y.trigger("requestBootstrapper",
a)});y.once("requestBootstrapper",function(a){var b=m.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,k=a&&a.sca,u=a&&a.xsca;e&&y.trigger("jsonp",b+"/jsconfig"+e+(m.adSessionId?"&adSessionId="+m.adSessionId:""),function(a){Object.assign(m,"string"===typeof a?JSON.parse(a):a);m.isResolved=!0;m.sp_cdnScripts={sca:k,xsca:u};y.trigger("callContinueMain")},!1,"cbName")});g=[{environment:new $(g),adSessionReadyStrategy:new Sa(g)},{environment:new Ta,
adSessionReadyStrategy:new Ua}];(new Va(g)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(ja)}var y,V=function(){function g(a){var b=new Wa(a,t),c=new Xa,d=new Ya(a,t),q=Za(a,t),p=(new $a(m,t,a)).resolve(),g=[b],B=[];q.applies()&&g.push(q);d.applies()&&g.push(d);c.applies(a,t)&&g.push(c);f(p).each(function(a,b){g.push(new ab(b,t));B.push(b.id)});0<B.length&&(y.trigger("addOutputItem",{output:B.join(".")},"scm",{type:h.IMPRESSION_EVENT}),y.trigger("addOutputItem",{output:B},"metricIdList",
{type:h.DT_CODES.UNLOAD,asION:!0}));return g}function a(a,b,c,d){var q=g(a);y.provide("viewabilityDefinitions",q);return f(q).map(function(q,g){var f,w,l;f=new ma(g,b);var m=(new bb(c,a,g.rts)).getCallbacks(),E=new na(d.createPingJobs(g.type,g.timeInViewThresholds,m,g.metricId));g.sendOtherwiseInViewSignal&&(l=new ma(g,b,g.sendOtherwiseInViewSignal),w=new na(d.createPingJobs(g.type,g.timeInViewThresholds,m,g.metricId,g.sendOtherwiseInViewSignal)));g.rtsCallbacks=m;g.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?
f=new cb(f,g,E,t.isVideo()):(f=new oa(f,new W(g.minUnit),E),g.sendOtherwiseInViewSignal&&(w=new oa(l,new W(g.minUnit),w,g.sendOtherwiseInViewSignal),w.start()));f.start();return f})}function b(a,b){var c=(new aa).accepts(),c=!t.isAvid()&&!c&&!t.isInMobiMraidVideo();return t.isVideo()&&c?db(m.videoId,a,b):{}}function c(a,b,c,d,q,p,g,B,w,F){try{m.perf.markStart(pa),m.tpiLookupURL&&eb(g,B).init(m.tpiLookupURL),t.isDomless()||F.isStarted()&&F.sendOriginList(),l.runAll(),r.execAtEndOfThread(function(){var p;
try{m.perf.markStart(qa);p={output:(new Date).getTime()-q};a.addItem(p,"sinceFw",{type:h.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK});m.perf.markEnd(qa);var g,z;m.isSplitMode&&(z=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(fb,z));m.impUrl&&m.perf.markResource(gb,m.impUrl);g=m.perf.getData();y.trigger("addThrottledProp",h.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(w){d.add(h.ERROR_CODES.ADTALK_DELAY)}}),
m.perf.markEnd(pa)}catch(K){d.add(h.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,q,p,g,f,h){var l;"true"!==m.minimizeCalls&&(l=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,d,n,l,q,p,g,f,h)}))}return{instantiateModules:function(){var c,d,u,n,q,p,g,f,h={};m.perf.markStart(ra);y=l.getAggregator();h.mFeatures=y.provide("features",hb());y.provide("mobileApp",function(){return c=c||new ib(h.mFeatures)});y.provide("avidJsClient",function(){return d=d||new jb(r.getWindow())});y.provide("context",
t);h.mBrowser=y.provide("browser",(new kb).createInstance());h.mErrors=y.request("mErrors");h.mIds=y.provide("ids",lb());h.iOutput=new mb(y);y.request("mJsonp");h.mComm=y.request("mComm");h.viewabilityMeasurement=(new nb(new ob(h.mIds),h.mFeatures,h.mBrowser)).create();if((n=y.request("omidAdSessionContext"))&&n.queuedOutputItems)for(p=0;p<n.queuedOutputItems.length;p++)y.trigger("addOutputItem",{output:n.queuedOutputItems[p].value},n.queuedOutputItems[p].code,{type:"impression"});h.mFeatures.on("swapids")&&
(m.oid=m.asid,m.asid=h.mIds.unq);h.mAdTalk=(new pb).createInstance(h.mFeatures);u=qb();n=rb(y);q=y.provide("mPage",(new sb).createInstance());h.mAncestorOrigins=tb();h.mPageUrls=y.provide("pageUrls",(new ub).createInstance(h.mAncestorOrigins,r));p=y.provide("mScreenEvents",vb());y.provide("ieXDomainViewability",wb(h.mBrowser));g=xb(h.mBrowser);f=b(h.mFeatures,p);h.mVideo=y.provide("video",f);yb(zb.build());g=(new Ab).createInstance(h.mErrors,g,h.mFeatures);q=(new Bb).createInstance(g,h.mErrors,q,
t);f=y.provide("jobFactory",Cb());h.mDataTransfer=Db(g,h.mErrors,h.mFeatures,h.mIds,h.iOutput,h.mBrowser,p,u);u=Eb(h.mErrors,h.mFeatures,y,n);h.mMode=Fb(u,h.mFeatures,h.viewabilityMeasurement.isImmediate());h.mViewability=y.provide("viewability",Gb(new C,h.viewabilityMeasurement,h.mBrowser,h.mDataTransfer,h.mFeatures,y,h.iOutput,q,p,h.mVideo));a(h.mFeatures,h.mViewability,n,f);h.loopDelay=sa();h.renderDetector=Hb();h.mDataTransfer.setViewabilityMod(h.mViewability);m.perf.markEnd(ra);return h},preImpression:function(a,
b,c,d,q,p,g,f,l,F,K){var E,M,r,t,s;m.perf.markStart(ta);m.b11="1"===m.adHeight&&"1"===m.adWidth?"true":"false";m.cnod=m.contextNode?"true":"false";try{c.isApplicable(F)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),l.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),l.on("idMap")&&(E=c.getIdMap())&&d.addItem(E,"idMap"))}catch(G){q.add(h.ERROR_CODES.ADTALK_GENERAL)}try{p.isApplicable(g,l,F)&&p.start(),s=f.detectTopURL(),l.on("exch")&&(M=(new Ib).createInstance(q,d),M.parse(s)),r=Jb(),r.isApplicable(l)&&
r.start(l),F.usesGroupMCustomMetric()&&Kb(),t=Lb(),t.isApplicable(l)&&(t.start(),y.trigger("sendCookie")),K.start()}catch(Mb){q.add(h.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(ta);return s},sendImpression:function(a,b,c,d,q,p,g,h,l){try{Nb(a,b,c,d,q,p,g).send(h),f.isFunction(l.triggerInitializationEvents)&&l.triggerInitializationEvents()}catch(F){__IntegralASDiagnosticCall("impsend",F,m)}},postImpression:function(a,b,c,n,q,p,g,f,w,F,K,E,M){try{m.perf.markStart(ua);var r=Ob();r.start();r.addFieldTypes([h.DT_SLOT.IM,
h.DT_SLOT.FF,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FF_EXP]);var t=Pb(a,b,c);t.isApplicable(n)&&t.start();var s;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(s=Qb(q,p,g,b,f),s.init());d(f,w,F,g,n,q,p,b,E);K&&K.start&&K.start();M.isDomless()||Rb().start(["sca","xsca","rsrch"],n);Sb();l.runTier(h.TIERS.VIEWABILITY);var G=Tb();G.isApplicable(n)&&(G.start(),R.recordBlockingTime(),m.perf.mark(Ub),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());m.perf.markEnd(ua)}catch(Mb){g.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(g){return new A(g)},A=function(g){this.iterable=g};A.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};A.prototype.isArray=function(){return this.iterable instanceof Array};A.prototype.isEmpty=function(g){return 0===this.keys(g).length};A.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};A.prototype.map=
function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};A.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};A.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};A.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};A.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};A.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};A.prototype.mapToObj=
function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};A.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};A.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};A.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};A.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};A.prototype.keys=function(g){var a=
[];this.each(function(b){a.push(b)},g);return a};A.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};A.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};A.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};A.prototype.toArray=function(){return this.map(function(g,a){return a})};A.prototype.JSONStringify=function(){var g,
a,b=!1;v.Prototype&&v.Prototype.Version&&-1===v.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};A.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<
g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);
return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||v;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,k)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=
a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var l=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,p){p=p||{};var z,h,l=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},F=function(){if(!z){var a=[];z=!0;l(["features","browser","context"]);p.emits&&
(c.events=new C);if(!p.applies||p.applies.apply(p,b))h=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(q.apply({},a))}};(function(){var b=p.tier;f.isDef(b)&&(a[b]=a[b]||new ba,a[b].push(F))})();g.provide(d,function(){var a;F();h&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new va;f(c).each(function(a,b){e.apply({},
b)})};d.getAggregator=function(){return g};return d}(),h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},
DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",
HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},ja="mf",la="cm",ra="in",ta="pr",ua="po",Ub="bl",pa="lo",qa="lt",fb="md",gb="id",Wb=function(){var g,a=["STYLE","SCRIPT","HEAD","META"],b=h.RENDER.CREATIVE_NODE_TYPES.concat(h.RENDER.CONTAINER_NODE_TYPES),c=0,d=m.useFIF&&t.friendlyIframe||t.isSpecifiedAd(),e=function(e){var u=s.isNodeXDomainIframe(e)||s.isNodeCreative(e),n=!e;g=n?m.contextNode.parentNode:e;if(u||n)l.getAggregator().trigger("evaluateCreativeFinderResult",e);else{if(d){var q;q=u=e;n=t.friendly?r.getTop().document.body:
m.contextNode.ownerDocument.body;for(;3>c;){if(n&&u===n){q=u;c=3;break}s.isWindow(u)&&(q=s.crossQuerySelector("["+h.AD_IDENTIFIER+"-"+m.asid+"]"),u=f.isDef(q)?q:u);q=u=f.isDef(u)?u.parentNode||u:u;c++}u=q}else u=e;if(s.isWindow(u)){var p;try{p=u.document}catch(z){p=m.contextNode.ownerDocument}e=p}else e="IFRAME"===s.getNodeName(u)?e.contentWindow.document:u;p=[];var n=(u=e&&e.getElementsByTagName&&e.getElementsByTagName("*"))&&u.length,B;if(u)for(var w=0;w<n;w++)B=(q=u[w])&&q.nodeName&&q.nodeName.toUpperCase(),
!q.children||0!==q.children.length||f(b).contains(B)||f(a).contains(B)||f(p).contains(B)||p.push(B);p=b.concat(p);(new Vb(p)).searchDescendants(e)}};l.getAggregator().on("creativeFinderBatchCompleted",e);return{find:e,getClosestContainerName:function(){return s.getNodeName(g)}}},Vb=function(g){var a=function(a){function c(a){var b=s.getNodeName(a),c=s.isNodeCreative(a)||"IFRAME"===b;b&&c&&!s.isEmptyTeadsFrame(a)&&(b=s.getNodeArea(a),b>u&&(k=a,u=b))}function d(){do c(a[e]),e+=1;while(0!==e%g&&e<a.length);
e<a.length?r.execAtEndOfThread(d,0):l.getAggregator().trigger("creativeFinderBatchCompleted",k)}var e=0,k=null,u=-1,g=50;if(a.length&&l.getAggregator().request("useYieldSearch"))d();else{for(e;e<a.length;e++)c(a[e]);l.getAggregator().trigger("creativeFinderBatchCompleted",k)}};return{searchDescendants:function(b){b=b||m.contextNode.parentNode;var c,d,e=[];for(c=0;c<g.length;c++){d=g[c].toLowerCase();var k=b.getElementsByTagName&&b.getElementsByTagName(d);if(k&&k.length)for(d=0;d<k.length;d++)e.push(k[d])}a(e)}}},
Hb=function(){var g,a=!1,b=!1,c=!1,d={status:h.RENDER.STATUS.OTHER,details:h.RENDER.DETAILS.OTHER},e={status:h.RENDER.STATUS.DETECTED,details:h.RENDER.DETAILS.ENVIRONMENT},k=l.getAggregator().request("omidAdSessionContext"),u=function(){c=a=!0},n=function(a){a&&(a.status=h.RENDER.STATUS.DETECTED);l.getAggregator().trigger("adRendered")},q=function(){var a=!1;t.isOmid()&&k&&k.useOMID13Logic&&(a=!0);return a},p=function(a){var b={},c=r.getDoc(),d=function(e){var k=e&&e.type;if("readystatechange"===
k&&"complete"===e.target.readyState||"load"===k)n(b),g.saveNode(a),"readystatechange"===k?g.save(h.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===k&&g.save(h.RENDER.DIAGNOSTIC.LOAD_FIRED),w(b),x.removeEvent(a,"load",d),x.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(n(b),g.saveNode(a),g.save(h.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(x.addEvent(a,"load",d),x.addEvent(c,"readystatechange",d));return b},f=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){x.removeEvent(a,
"ready",c);g.save(h.RENDER.DETAILS.ENVIRONMENT);g.save(h.RENDER.DIAGNOSTIC.MRAID_READY);n();w({status:h.RENDER.STATUS.DETECTED})};g.save(h.RENDER.DETAILS.ENVIRONMENT);"default"===b?(n(),g.save(h.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=h.RENDER.STATUS.DETECTED):"loading"===b?(x.addEvent(a,"ready",c),g.save(h.RENDER.DIAGNOSTIC.MRAID_LOADING)):(x.addEvent(a,"ready",c),g.save(h.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));w(d)},B=function(a){a===h.RENDER.STATUS.DETECTED&&l.getAggregator().trigger("perfCheckpoint",
{type:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},w=function(b){var c=g.build();b=b.status||d.status;c=c?c:d.details;a&&b===h.RENDER.STATUS.DETECTED?(B(b),l.getAggregator().trigger("addThrottledOutputItem","rend",b),l.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(B(b),l.getAggregator().trigger("addOutputItem",{output:b},"rend"),l.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},F=function(){l.getAggregator().on("primaryadfound",
function(a){var b,c=d,e=new Wb,k=!0;l.getAggregator().on("evaluateCreativeFinderResult",function(a){if(s.isNodeXDomainIframe(a))b?r.clearInterval(b):k=!1,c=p(a);else if(a){var d=!1,u=s.getRect(a);a&&"IMG"===s.getNodeName(a)&&(d=0===a.naturalWidth||0===a.naturalHeight);!d&&u.width>=h.RENDER.WIDTH_THRESHOLD&&u.height>=h.RENDER.HEIGHT_THRESHOLD&&(n(c),b?r.clearInterval(b):k=!1);g.saveNode(a)}else a=e.getClosestContainerName()||g.getAdNodeName(a)||c.details,g.save(a);w(c)});var u=function(){var b=a&&
a.getAdNode();try{e.find(b)}catch(c){l.getAggregator().trigger("renderdiag",c)}},q=l.getAggregator().request("mobileApp");q&&q.isMobileAppEnvironment&&q.isMobileAppEnvironment()&&t.isMraid()?f():(u(),k&&(b=r.setInterval(u,500)));l.getAggregator().trigger("eligiblerender")})},m=function(){var a=k&&!!k.isVideo,c=k&&!!k.videoStartArrived,d=k&&!!k.geometryArrived;return b||!d||a&&!c?!1:(l.getAggregator().trigger("eligiblerender"),g.save(h.RENDER.DETAILS.ENVIRONMENT),g.save(h.RENDER.DIAGNOSTIC.OMID_RENDERED),
n(),w(e),b=!0)};return{start:function(){var a=!1;l.getAggregator().trigger("perfCheckpoint",{type:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});l.getAggregator().on("adRendered",function(){a=!0});l.getAggregator().provide("adRenderStatus",function(){return a});l.getAggregator().provide("useYieldSearch",function(){return c});g=new Xb;new Yb;l.getAggregator().on("impressionsent",u);q()?m()||(g.save(h.RENDER.DETAILS.ENVIRONMENT),g.save(h.RENDER.DIAGNOSTIC.OMID_UNRENDERED),
w(d),l.getAggregator().on("omidrendgeoupdate",function(){m()}),l.getAggregator().on("omidrendvideostart",function(){m()})):t.isAvid()||t.isOmid()||t.isVideo()?(l.getAggregator().trigger("eligiblerender"),g.save(e.details),n(),w(e)):(w(d),F())}}},Xb=function(){var g=[],a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(k){c("nen")}return b},c=function(a){g.push(a)};return{build:function(){var b=[];f(a).each(function(a,
c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),k=d&&s.getRect(d),u=d&&"IMG"===e,g=d&&s.hasBackgroundImage(d),q=d&&d.innerText&&0<d.innerText.length,p=d&&d.children&&0===d.children.length&&q,f=k&&k.width>=h.RENDER.WIDTH_THRESHOLD&&k.height>=h.RENDER.HEIGHT_THRESHOLD?h.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:h.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,l=(g||u)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(f);
l&&a.push(h.RENDER.DIAGNOSTIC.BROKEN_IMAGE);g&&a.push(h.RENDER.DIAGNOSTIC.STYLED_NODE);p&&a.push(h.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(w){c("sne")}}}},Yb=function(g){var a,b=!1,c=!1,d=function(){l.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,m),l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};l.getAggregator().on("eligiblerender",function(){b=!0;d()});l.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},X=function(){return{applies:function(g,a){var b=l.getAggregator().request("mobileApp");return(g.browserIs(h.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(h.BROWSERS.WEBKIT)||g.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Kb=function(){var g,a,b=!1,c=l.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.getAggregator().trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};l.getAggregator().on("primaryadfound",
function(a){g=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;d()});l.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},qb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=t.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},va=function(){var g=new Zb,a=new C;return f(g).mixin(a)},
C=function(){var g={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new ba;g[a].push(b,c)};return{on:function(a,e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=
g[b])&&k.run.apply({},c)}}},ca=function(){var g=function(a,c,d){var e,k=c.length,u=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&s.isWindow(e)&&(c[k]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},ba=function(){var g=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},na=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},wa=function(){var g,a=new da,b=function(b,d,e,k){var u,g,q,p;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),g=b.source,p=f.noop,d(u)&&(k&&(q=k(g,u))&&(p=function(){a.send(function(){return q},
g)}),e(b,u,p))}catch(z){u&&l.getAggregator().trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(k){b(k,a,d,e)};x.addEvent(v,"message",g)},stop:function(){g&&x.removeEvent(v,"message",g);g=null}}},da=function(){var g=function(a){return f(a).isObj()?[a]:(new ca).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var u;
u=f.resolve(b,d)||{};u.sentTime=r.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},$b=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},mb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},
d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var q=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){q({output:b},a,e)}):q(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?
b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Zb=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Bb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new ac:new bc(g,a,b,c)}}},bc=function(g,a,b,c){var d;
return{collect:function(){var a=g.find(),k=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:D(s.calcWinDims()),q=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!q.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:n,adDimensions:q};!0===u&&k.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?h.OUT_OF_VIEW:a.getViewState(),
viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},ac=function(){return{collect:function(){return{}}}},cc=function(g){g=g||f.identity;var a=[],b=r.now(),c=function(){var c=
r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},xa=function(g,a){var b=g||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var u=e||a;0===c%b&&(k+=r.now()-u,d++);c++},getTime:function(){return k},getCount:function(){return d}}},
ya=function(){var g,a=0,b=0,c=new C(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},dc=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&g();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,
b){c=a;e();d(b)}}},W=function(g){var a,b,c=0,d=t.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();k=!1},mark:function(){a=k?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();k=!0}}},P=function(g,a){var b=g||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],k=b[4],u=b[5],n=g?
b[6]:"",q=a?b[7]:"",p={},h=function(a){f.isDef(a)&&(k=a);return k},l=function(a){f.isDef(a)&&(u=a);return u},w=function(a,b){return a+"="+f(b).toION()},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=p[b])?p[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:h,master:l,setParam:function(a,b){p[a]=p[a]||{};f(b).isObj()?f(p[a]).mixin(b):p[a]=b},path:function(a){n=a},toString:function(){var a=
h()?h()+".":"",b=n?"/"+n:"",c;q||!f(p).isEmpty()?(c=f(p).isEmpty()?"":f(p).stringify(w,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+l()+b+c}}},Sb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=l.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=s.getOurNodeInTop()){var k=
s.getAncestorNodes(d);e=f(k).map(a)}if(b=e=e&&g(e))l.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0}),l.getAggregator().provide("adSlotIds",b),c=b}return c}catch(u){l.getAggregator().trigger("error",h.ERROR_CODES.AD_SLOT_ID)}}()};l("AdRefreshDetection",[],function(){var g=[30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId(),e=m&&m.contextNode&&m.contextNode.nextSibling&&m.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,
d,e,function(c,d){c?l.getAggregator().trigger("error",h.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var k=d.exec(a[e]);k&&3===k.length&&"chanId"===k[1]&&(c=k[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;l.getAggregator().trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var k=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);k.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||null,k=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))l.getAggregator().on("sendDt",
function(u,g){u===h.DT_CODES.PING&&g===e&&(r.execAtEndOfThread(function(){k.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ir",a);l.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.getAggregator().trigger("error",h.ERROR_CODES.AD_REFRESH)}});
return a},{tier:h.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}});var tb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.getAggregator().trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.getAggregator().trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},Qb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var k=d.length,q=0,p=0;e(k,
0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(k,q,++p)},!0);e(k,++q,p)})}catch(z){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new P).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;g.jsonp(a,k)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},Eb=function(g,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){g.add(h.ERROR_CODES.BAPI_CALLBACK),
b.trigger("sendDiag","bapiClient")}}}},kb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new ec:new fc}}},fc=function(){var g=h.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&
(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?
a.documentMode:h.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var k=h.NA,u=r.getDoc(),n=u.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in u.documentElement.style)k="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<e.length&&!(k=n.getComponentVersion(e[u],"componentid").replace(/,/g,"."));u++);}catch(q){}e=k;k=h.NA;n=r.getWindow();
f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(k=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:k}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],k=function(){return f(b).findFirst(function(b,c){return I.contains(a,c)})};return I.contains(a,"Android")&&k()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},ec=function(){var g=function(){return!1},
a=function(){return h.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Ra=function(){return{createInstance:function(g,a){return t.isDomless()?new gc(a):new hc(g,a)}}},ic=function(){var g,a=function(a,c){var d="",e="",k=r.getDoc().getElementsByTagName("ins");if(k&&0<k.length){e=k[0];d="<ins";
for(k=0;k<e.attributes.length;k++)d+=" "+e.attributes[k].nodeName+'="'+e.attributes[k].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=l.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=l.getAggregator().request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,k=m.adWidth&&0<m.adWidth?m.adWidth:0,u=m.adHeight&&0<m.adHeight?m.adHeight:0,n=r.getDoc().getElementsByTagName("ins"),
q;q=e=0;n&&0<n.length&&(q=n[0],e=parseInt(q.style.width),q=parseInt(q.style.height));k=e||k||window.innerWidth;u=q||u||window.innerHeight;"complete"===r.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=k+"px",d.style.height=u+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},hc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=J.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=J.createElement("SCRIPT"),d.src=b);m.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];t.isOmid()?(e=new ic,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===m.forceAppend?c(a,b,d):J.write(d)},c=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=s.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=J.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),c(a,void 0,!0))},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},gc=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(){var g="undefined"===typeof window,a="undefined"!==typeof v&&"undefined"!==typeof top&&v!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return g||f.isDef(r.getWindow().mraid)},d=function(){return!g&&f.isDef(r.getWindow().mraid)},e=function(){var a=!1;if(!g)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},k=function(){var a;
if(!(a=-1!==m.mode.indexOf("jsvid"))){var b;a=!1;var c=l.getAggregator();if(!g&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=l.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},u=function(){return m.mobOrTab},n=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,
c){return I.contains(c.id,a)}).length},q=function(){return n("grpm")||m.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=P(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-m.birthdate},getPageTime:function(){var a=h.NA;!g&&f.isDef(v.chrome)&&f.isDef(v.chrome.csi)&&f.isFunction(v.chrome.csi)&&(a=r.round(v.chrome.csi().pageT));return a},isVideo:k,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;g||(a=(a=m._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;g||(a=b.exec(m._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!g&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=l.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new aa).accepts()},isOmidForWeb:function(){return(new za).accepts()},isDomless:function(){return g},
isAvidNative:function(){var a=!1,b=l.getAggregator();g||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ea());return a},isMraid:d,isSafeFrame:function(){var a=!1;g||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||
m.use100v||!q()},usesGroupMCustomMetric:q,isCeltra:function(){var a=!1;g||(a=Aa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return q()&&u()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!g&&!c()&&!k()&&a&&"jload"===m.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;m.contextNode&&f.isFunction(m.contextNode.getAttribute)&&(c=m.contextNode.getAttribute("data-ias-check-tag"),d=m.contextNode.getAttribute("data-ias-check-done"),e=(e=m.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(r.getWindow()[e]));var k=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=m.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var u=!0===m.fwMonitoring||"true"===m.fwMonitoring;k&&a&&("true"===c&&"true"!==d&&e?(b=!0,u&&l.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,u||l.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(),x={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",x.mouseEnter(b),
c):"mouseleave"===a?g.addEventListener("mouseout",x.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(g=J.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(v.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(g,a){if(t.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?J:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(J.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(g)}},isSandboxed:function(g){var a,
b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
x.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[h.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=h.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var Db=function(g,a,b,c,d,e,k,u){var n=0,q=0,p=!1,z=function(a,e,u,g,z,B){u=u||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==k.getCurrentLoc()))try{var s=m.dtBaseURL,v=new P(s,!0),x=r.now();
l.getAggregator().trigger("preSendDt",a);s||(v.path("dt"),b.on("usedtdomain")&&v.sub("dt"));w(v,a,e);z&&z.field&&v.setParam(z.field,z.value);g||F(v,a);l.getAggregator().trigger("send",v,function(){q+=1;n=r.now()-x;f.isFunction(B)&&B()},u);a===h.DT_CODES.UNLOAD&&(p=!0);d.cleanup()}catch(y){__IntegralASDiagnosticCall("dt-"+a,y),l.getAggregator().trigger("error",h.ERROR_CODES.PHONE_HOME)}};g=function(){p||z(h.DT_CODES.UNLOAD,-1,!0)};var B=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",
jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&z(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},w=function(a,b,e){var k=new Y(b);e=f.isDef(e)?e:k.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},F=function(c,g){var f,p={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();if(g===h.DT_CODES.CUSTOM||g===h.DT_CODES.UNLOAD||g===h.DT_CODES.VIDEO_EVENTS||g===h.DT_CODES.FULLY_INVIEW||g===h.DT_CODES.PING||g===h.DT_CODES.VIEWABILITY_READY||g===h.DT_CODES.ADTALK)p.clog=u,t.isVideo()&&(f=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=l.getAggregator().request(f))&&!f.isEmpty()&&(p.ve=f));g===h.DT_CODES.UNLOAD&&(p.ndt=q);-1!==m.mode.indexOf("jsvid")&&(p.vv=l.getAggregator().request("videoVersion"));
p.NULL1=b.output();p.NULL2=k.stringify(10);p.em=t.embedded;p.fr=t.friendly;p.e=a.toString();p.tt=m.mode;p.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},p);c.setParam("tv",p);c.setParam("br",e.getBrowserType())};l.getAggregator().on({sendDt:function(a,b,c){z(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){z(a,b,void 0,!0)},sendDiag:B,updateDtCount:function(){q++},unload:g});return{send:z,unload:g,
diagnostic:B,setViewabilityMod:function(a){}}},D=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?s.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==v.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=s.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=
h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},s={findElementsWithSize:function(g){var a=[],b=function(c){1>s.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(x.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===x.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),
width:r.round(b.width),height:r.round(b.height)}}catch(c){l.getAggregator().trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(v.outerWidth)&&(g.width=v.outerWidth,g.height=v.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(v.screenX)?(g=v.screenX,a=v.screenY):f.isDef(v.screenLeft)&&(g=v.screenLeft,a=v.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=s.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=s.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=J.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&r.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,k=1E4;b=x.nodeIsAbsolutelyPositioned(g);d=!s.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!s.tagNameIs(d,
"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==J&&d!==a)}return{width:r.round(e),height:r.round(k)}},hasBackgroundImage:function(g){g=x.getStyle(g,"background-image");return""!==g&&"none"!==g},isEmptyTeadsFrame:function(g){try{var a,b,c=!1,d=g&&"IFRAME"===g.nodeName&&g.contentDocument;g&&g.parentElement&&"teads-player"===g.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},
findChildWithLargestContent:function(g,a){var b=l.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=this.hasBackgroundImage,d=function(a){for(var c=a;a.parentNode!==g&&"inline"!==x.getStyle(a.parentNode,"display");){var d;if(!(d=!b)){d=a.parentNode;var e=!0;if("visible"===x.getStyle(d,"overflow")||"visible"===x.getStyle(d,"overflowX")&&"visible"===x.getStyle(d,"overflowY"))e=!1;d=e}d&&(c=a.parentNode);a=a.parentNode}return c},e=null,k=function(a){var b,d,e=null,k=-1;if(a.length)for(b=
0,d=a.length;b<d;b++){var f=a[b],h=s.getNodeArea(f),l=f,m=void 0;if(m=l.parentNode===g)if(m=void 0,m="DIV"===l.nodeName)if(m=void 0,m=!c(l))if(m=void 0,!(m="0"===x.getStyle(l,"opacity")||"hidden"===x.getStyle(l,"visibility"))){for(var r=m=void 0,l=l.childNodes,m=0;m<l.length;m++)1===l[m].nodeType&&(r=!0);m=!r}l=!m;m=s.isEmptyTeadsFrame(f);h>k&&l&&!m&&(e=f,k=h)}e&&(e.hasValidSizeForMobileApp=1<k);return e}(function(b){var c,d,e,k,g=[],f=a||"iframe img a object embed div".split(" ");c=0;for(d=f.length;c<
d;c++){e=f[c].toLowerCase();var h=b.getElementsByTagName&&b.getElementsByTagName(e);if(h&&h.length)for(e=0,k=h.length;e<k;e++)g.push(h[e])}return g}(g));k&&(e=d(k),e.hasValidSizeForMobileApp=k.hasValidSizeForMobileApp);return e},screenSize:function(){if(t.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(v.screen)&&(g={width:v.screen.width,height:v.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(s.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&
(g={scrX:v.screen.availLeft,scrY:v.screen.availTop,width:v.screen.availWidth,height:v.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;t.friendly&&(g=t.embedded?(g=s.getOurIFrameInTop())&&g.frameElement:m.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,
a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(s.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||
g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[m.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=s.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&
g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=s.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,
a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&s.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&s.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=x.getStyle(g,"width");g=x.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=s.getAttribute(g,"width");g=s.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,
c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=s.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==h.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());
return b?!!(d||s.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},
Qa=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Ib=function(){return{createInstance:function(a,b){return t.isDomless()?new jc:new kc(a,b)}}},kc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),
b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,k=c(d),u=k&&k.length&&k.join("|"),n=m.exchList;u&&(e=f(n).map(function(a,b){return 0<=u.indexOf(I.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:h.IMPRESSION_EVENT}))}catch(q){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},jc=function(){return{parse:function(a){}}},hb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=
m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};m.integration&&(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});
e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){var b=m[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},
xb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=h.NA;c=b?c:d;f.isDef(a)&&a!==h.NA&&-1<a&&(e=a>=c.IN_VIEW?h.IN_VIEW:a<=c.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,k=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=k.getRounded(),d=b.getRounded(),e=
Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),h=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),h=h-e,c=c-f;k=D({scrX:e,scrY:f,width:0<h?h:0,height:0<c?c:0})}}),e=r.round(k.area()/a.area()*100));return e}}},lb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=v.Uint32Array&&v.crypto&&v.crypto.getRandomValues;32>
a.length;)c?(b=new Uint32Array(1),v.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.getAggregator().trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&
(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},eb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},lc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=l.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||l.getAggregator().trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),u=a.getTimeInViewForRts();f.isDef(d)&&(l.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),l.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));l.getAggregator().trigger("sendDt",b,e);if(c[u])c[u]()}}}},Cb=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,f){return new lc(f,a,c,d,e)})}}},Ba=function(){var a,b=[],c=function(a){return{type:a.tp||
a.type||"",time:a.t||a.timestamp&&a.timestamp-m.birthdate||""}},d=function(){a||(a=l.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),q=l.getAggregator().request("mScreenEvents").getCurrentEvent(),p=Math.floor(d.time/1E3);f(b).each(function(a,
b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(q)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(l.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:h.DT_CODES.CUSTOM}),l.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:h.DT_CODES.CUSTOM}),l.getAggregator().trigger("sendDt",h.DT_CODES.CUSTOM,p),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[h.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[h.RTS_KEY_FOR_VQ]())})};return{init:function(){d();
l.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},ka=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,k,f){var n=c(),q,p,h;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(q=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],
p=q.split("=")[1],h=I.stringToFn(p),d=a(d,q));v[n]=function(a){e(a);k&&h&&h(a);v[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();v[b]=function(c){a(c);v[b]=void 0};return b}}},Fb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=P(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},
jload:{impressionMethod:function(c){a.enabled?l.getAggregator().trigger("jsonp",c,a.callback,!0):l.getAggregator().trigger("send",c,function(){l.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.getAggregator().on("adImpression",
function(e,n){var q;try{q=d(c,n),a.enabled?l.getAggregator().trigger("jsonp",q,a.callback,!0):l.getAggregator().trigger("send",q,f.noop,!b.on("postMon"))}catch(p){__IntegralASDiagnosticCall("jsvidimp",p,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.getAggregator().trigger("jsonp",c(a),function(a){l.getAggregator().trigger("videoBlockResult",a)});l.getAggregator().on("adImpression",
function(c,e){var n;try{var h;if(h=b)h=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);l.getAggregator().trigger("send",n,f.noop,!0)}catch(w){__IntegralASDiagnosticCall("fwjsvidimp",w,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),p=f.indexOf("BEGIN__ADSAFE"),h=-1!==p,B=h?f.slice(p):"",a=h?f.slice(0,p):a(f);return{isFW:d,baseUrl:a,macroUrl:B,sendImpression:function(a){var d=function(){b.nodeType?l.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return v},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?l.getAggregator().request("omidVerificationClient"):v},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},sb=function(){return{createInstance:function(){return t.isDomless()?
new mc:new nc}}},nc=function(){var a,b=!1,c=!1,d=l.getAggregator().request("features"),e=new ba,k=function(){var b;d.on("blur")?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},u=function(){var b=r.getWindow(),c=function(){e.run(k())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(r.getDoc(),
a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,k){var u=k+"Hidden";f.isDef(d[u])&&(a=u,c=k+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:k,onHiddenChange:function(a){e.push(a);c||(c=!0,u())},supportsVisAPI:function(){return b}}},mc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},ub=function(){return{createInstance:function(a,
b){return t.isDomless()?new oc:new pc(a,b)}}},pc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,h=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=
c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(p){}try{q.b=encodeURIComponent(parent.location.href)}catch(l){}if(t.embedded){try{q.c=
encodeURIComponent(parent.document.referrer)}catch(B){}try{q.e=encodeURIComponent(v.document.referrer)}catch(w){}}try{"jsi"!==m.mode&&(q.d=encodeURIComponent(v.location.href))}catch(F){}try{q.f=encodeURIComponent(m.jsref)}catch(r){}try{k=h(),q.g=encodeURIComponent(k.g||""),q.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(E){}q=d(q);q=e(q);k=[];for(var M in q)q.hasOwnProperty(M)&&k.push({key:M,val:q[M]});k.sort(function(a,
b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?c:k()}}},oc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},rb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},vb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,u,n={i:0,o:0,n:0,pp:0,pm:0},q=function(a){var b={},c=a.winDimensions,
d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},p=function(a,c){var d=new cc(c);return b[a]=d},z=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},m=function(){f(c).each(function(b,c){n[c]+=
a.length?u-d:u});d=u},w=function(b){a.length&&m();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||m()},F=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=q(a);var e={sl:z(a.viewState)};u=t.getTagTime();w(e);e.t=u;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+
"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return k=c};(function(){p("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});p("as",function(a){var b=h.NA;
a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=t.getTagTime();m()},registerLocation:function(d){var k,u=!1;c.sl==z(d.viewState)&&a.length?(k=new F(d),a[a.length-1].details=k.details):(k=new F(d),a.push(k),e=d.viewState,u=!0);l.getAggregator().trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(u&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c=
"";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:p,getCurrentLoc:function(){return z(e)},getCurrentEvent:function(){return k}}},I={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:
a-26)})},stringToFn:function(a){var b,c=v,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},qc=function(){var a=function(){var a=function(a){return a&&
a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,
k)},getClickableImage:function(b){var c,k=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),f=s.attributeMatches(b,"href",d),h=s.attributeMatches(b,"target",e);k&&f&&h&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},rc=function(){var a=qc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};
return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};l("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},
d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var sc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,q=!1;d(function(){var d;d=a.innerHeight;
(d=a.innerWidth!==c||d!==f)&&(q=!0);q&&!d&&(b(),e(),q=!1);c=a.innerWidth;f=a.innerHeight})}}};l("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,u={};d!==c&&(k=f.stringifyTriState(d),u.res1=k,u.ps=k,u.ts=r.now(),u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(n){l.getAggregator().trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)sc(b).onResize(d)}}}},
{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});l("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;if(t.embedded)try{k=m.contextNode.parentNode,b=rc().getDFPValue(k),k={},k.df=b.type,b.size&&(k.sz=b.size.width+"."+b.size.height),b.tag&&(k.dom=b.tag),c("dfp",k),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.getAggregator().trigger("error",
h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Ca=function(a,b,c,d){var e,k=0,u=0,n=!1,q=function(){e=Math.round(s.getNodeArea(a.body));if(e>=d){for(var q,p=e+20*e/100,m=a.querySelectorAll("iframe"),m=f.fromNodeListToArray(m);m.length&&(u<p||k<c);)q=m.shift(),q=Math.round(s.getNodeArea(q)),q>=d&&(k++,u+=q);u>=p&&k>=c&&(p={va:e,bia:u,bin:k},l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.FF,b,f(p).toION()),n=!0)}},p=function(){var b;
b=new MutationObserver(function(a){n?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&f.debounce(q,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(q),!n&&f.isDef(v.MutationObserver)&&p())};l("BS_InApp",[],function(){var a=r.getWindow().document;l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ca(a,"bs1",3,100)},{tier:h.TIERS.VIEWABILITY,
applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});l("BS_Browser",[],function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ca(a,"bs2",10,b)},{tier:h.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var pb=function(){return{createInstance:function(a){return t.isDomless()?
new tc:new uc(a)}}},uc=function(a){var b,c,d,e=new va,k=new ca,u=new vc(e),h=new wc,q=new xc,p=new yc(e,a),z=function(){f.isUndef(d)&&(d=new zc(e));return d},m=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return q},adTalkMessage:function(a){return new Ac(a,e)},adTalkMessageCollection:function(){return h},idMapModule:z,interFrameQuerySelector:function(a){return new Bc(a)}})};return{isApplicable:function(a){return f.isDef(v.JSON)&&f.isDef(v.postMessage)&&!a.isAvid()&&
!a.isOmidNative()},start:function(){m();k.traverse(u.addFrame);p.startListening();p.sendToKnownFrames();l.getAggregator().once("stopAdTalk",function(){p.stopListening()});l.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:p.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Da(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Da(e,!0));return c},getIdMap:z}},tc=function(){return{isApplicable:function(){return!1},start:function(){}}},Ac=function(a,
b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.getAggregator().request("features").on("swapids")?m.oid:m.asid;var k=a||{},f=m.asid,d=d.tagId,n=t.embedded,q=t.friendly,p=m.birthdate;c=c.split("-")[2];var z;t.friendly?z="["+h.AD_IDENTIFIER+"-"+m.asid+"]":(z=r.getWindow(),z=z.location&&z.location.href,z='iframe[src*="'+(z&&z.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:q,srcBirthdate:p,
iasCommonId:c,nodeSelector:z,positionStr:e,version:"0.1"}},wc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},Cc=function(a,b,c,d){var e,k=a==v;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,
b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){h(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},h=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=
function(a,b){u(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},vc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,k,f){var h=a.request("adProxy").getAll();e=new Cc(e,k,h,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Da=function(a,b){var c=function(a,c){var f=c.adProxies,h="";if(c.isValidForMapping()){if(b)h+=d(f,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();
q+=c.isMe?"*":"";q+=f.length?"."+f[0].tagId:"";h+=q}return h}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},zc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&
a.substr(0,120)+".of"+a.length},k=function(a){var e=!1,e=!t.embedded,k="BODY"!==s.getNodeName(c)&&"HEAD"!==s.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);f=!(f?l:!a.srcIsFriendly)}e&&k&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,
b){var c;a!==m.asid&&k(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:k}},Bc=function(a){var b=new ca,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,e){var h,q,p;try{q=d(c,e),q||(h=b.getFrames(!0,a),f(h).findFirst(function(a,
b){return p=d(b,e)}))}catch(l){}return q||p||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},yc=function(a){var b=!1,c,d;d=l.getAggregator().request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},
u=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var k,n,m,t,s;try{k=a.request("frameCollection");n=a.request("adTalkMessageCollection");m=d.messageContent.self;n.add(d);var M=k.getMe();M.unifiedId>m.unifiedId&&(M.unifiedId=m.unifiedId);var v;v=r.now()-d.sentTime;d.transferDuration=v;n=t=k.getFrame(m.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(t=t||k.addFrame(c.source,m.id.split("-"),d),t.addInformationFromSrc(d,
m),e()):t.addInformationFromSrc(d,m);(s=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(ee){l.getAggregator().trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new da).send(k)},startListening:function(){c=new wa;c.listen(e,n,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:k}},Dc=function(){var a=l.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},xc=function(){var a,
b=[],c=function(a){a=new Dc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},wb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(h.BROWSERS.IE)&&x.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());
return{scrX:b,scrY:c}}}},Ec=function(a,b){var c,d,e=h.NA,k=e,u=!1,n=!1,q=!1,p=!b,m=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==k&&r.execAtEndOfThread(function(){l.getAggregator().trigger("IOPivChange",e)});k=e},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){e===
h.NA&&(e=0)});b.observe(B(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||l.getAggregator().trigger("delayedViewabilityReady")});u=!0},B=function(b){if(!f.isUndef(b)){if(q){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(q=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){n=
!0}b&&null!==b.bodyElement?m():b&&b.document?x.whenReady(m,b.document):n?l.getAggregator().request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):m()},isReady:function(){return e!==h.NA},isStarted:function(){return u},getAdNodeDimensions:function(){var a;c&&(a=D({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},sa=function(){var a=!1;(function(){x.whenReady(function(){l.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}};l("loopDelay",[],sa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var Fc=function(){return{start:function(a){l.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Gc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Pb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&
!d&&(d=!0,l.getAggregator().trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[Hc(),Ic(),Gc(),Fc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},Ic=function(){return{start:function(a){$b(l.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||
c)&&t.isVideo()}}},Hc=function(){return{start:function(a){l.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Jc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,
supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.getAggregator().trigger("adImpression")})}}},Kc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=
!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Lc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",
function(a){"AdImpression"===a.eventSubType&&l.getAggregator().trigger("adImpression")})}catch(b){}}}},Mc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=l.getAggregator().request("omidAdSessionContext"),
d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Nc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,
supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){l.getAggregator().trigger("adImpression")})}}},Va=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Sa=function(a){var b=!1,c=!1,d=!1,e=!1,k=l.getAggregator().request("omidAdSessionContext");k.queuedOutputItems=[];var h=new fa,n=l.getAggregator().request("omidAdSessionVerificationParameters"),q=r.getWindow(),
p=(q=q&&q.omid3p)&&f.isFunction(q.registerSessionObserver)&&f.isFunction(q.addEventListener)?q:a,z=!1,B=function(){return n&&n.IAS&&0<Object.keys(n.IAS).length?n.IAS:n},w=function(){var a,f;b&&c&&(!e||d)&&(v.omidSupported=!0,a=k.app&&k.isDisplay&&!k.isWeb,(f=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&k.isLimitedSandbox&&"1"===m.adWidth&&"1"===m.adHeight&&(k.isLimitedSandbox=!1),a&&f&&(k.delayingViewabilityEvents=!0),k.hasOwnProperty("impressionType")&&k.queuedOutputItems.push({code:"oiet",
value:k.impressionType}),k.hasOwnProperty("creativeType")&&k.queuedOutputItems.push({code:"oct",value:k.creativeType}),l.getAggregator().trigger("tryToCallContinueMain",B()),z=!0)},F=function(a){var c;if("sessionStart"===a.type){k.adSessionType=a.data.context.adSessionType;k.environment=a.data.context.environment;"app"===k.environment&&(m.mobOrTab=!0);k.accessMode=a.data.context.accessMode;k.omidNativeInfo=a.data.context.omidNativeInfo;k.omidJsInfo=a.data.context.omidJsInfo;k.deviceInfo=a.data.context.deviceInfo;
k.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(k.contentUrl=a.data.contentUrl);k.isJavaScript="javascript"===k.adSessionType;k.isNative="native"===k.adSessionType||"javascript"===k.adSessionType;k.isLimitedSandbox=t.embedded;k.isHtml="html"===a.data.context.adSessionType;k.isWeb="web"===a.data.context.environment;n=a.data.verificationParameters;c=k.isHtml&&k.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==
typeof a.data.creativeType||""===a.data.creativeType?k.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,k.useOMID13Logic=!0,k.queuedOutputItems.push({code:"ohand",value:"13"}));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",
field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,h,q,p=0;p<d.length;p++)f=d[p].root,h=d[p].field,q=d[p].code,"object"===typeof k[f]&&"undefined"!==typeof k[f][h]&&k.queuedOutputItems.push({code:q,value:k[f][h]});k.queuedOutputItems.push({code:"oast",value:k.adSessionType});k.queuedOutputItems.push({code:"oacm",
value:k.accessMode});k.queuedOutputItems.push({code:"oenv",value:k.environment});k.hasOwnProperty("contentUrl")&&k.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(k.contentUrl||"")});c?l.getAggregator().trigger("tryToCallContinueMain",B()):(b=!0,w())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),z?l.getAggregator().trigger("addOutputItem",{output:a},"oser"):
k.queuedOutputItems.push({code:"oser",value:a}))},s=function(a){k.mediaType=a.data.mediaType;k.queuedOutputItems.push({code:"omtp",value:k.mediaType});"video"===a.data.mediaType&&(k.isVideo=!0);a.data.viewport&&a.data.adView&&(k.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof k.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(k,a.data.adView)&&(k.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&
!k.hasOwnProperty("impressionType")&&(k.impressionType=a.data.impressionType);k.isNativeVideo=k.isNative&&"video"===a.data.mediaType;k.isDisplay="display"===a.data.mediaType;c=!0;w()},E=function(a){a&&"start"===a.type?(k.videoStartArrived=!0,l.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(k.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(k.impressionType=a.data.impressionType),w())};return{start:function(){p.addEventListener("media",
E);p.addEventListener("video",E);p.registerSessionObserver(F,"IAS");p.addEventListener("impression",s)}}},Ta=function(){return{accepts:function(){return!0}}},za=function(){var a=l.getAggregator().request("omidAdSessionContext"),b=l.getAggregator().request("omidVerificationClient"),c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Ua=function(){return{start:function(){var a=m.contextNode&&(m.contextNode.dataset.iasParameters||m.iasParameters);l.getAggregator().trigger("tryToCallContinueMain",
a)}}},Oc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Pc=function(a,b){var c,d=function(a){var d,f,h;try{d=a.eventData.percentageInView,f=c&&75<=d,h={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,
isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",h)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(k){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Qc=function(a,b){var c=[],d=(new Date).getTime(),e=0,k=0,u=!1,n=new Ba,q=l.getAggregator().request("omidAdSessionContext"),
p={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},m=function(){u=!0},r=function(a){try{var p="",n=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),m="n",z=!1;switch(a.type){case "start":p="adVideoStart";q.videoStartArrived=!0;l.getAggregator().trigger("omidrendvideostart");
d=n;k=a.data.duration;1E3<k&&(k/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);z=!0;l.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}if(""!==p){var r=l.getAggregator().request("mScreenEvents");
r&&(m=r.getCurrentLoc());c.push({t:n-d,tp:p,sl:m,ad_duration:k,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var B=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==B?B+1:void 0,t=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(f.isDef(p)&&l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"vbp",p),l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"vps",t)):(f.isDef(p)&&l.getAggregator().trigger("addOutputItem",{output:p},"vbp",
{type:h.IMPRESSION_EVENT}),l.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:h.IMPRESSION_EVENT}))}"start"===a.type&&l.getAggregator().trigger("omidAdDuration",{ad_duration:k});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");f.isDef(s)&&b.trigger("videoPlaybackEvent",
{eventType:s,eventData:null});z&&l.getAggregator().trigger("sendDt",h.DT_CODES.VIDEO_EVENTS)}catch(x){__IntegralASDiagnosticCall("omidvideo",x,v.bootstrapper)}};return{start:function(){l.getAggregator().on("impressionsent",m);l.getAggregator().provide({omidVideoEventsString:p});a.addEventListener("video",r);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ea=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;
a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Rc=function(a,b,c){var d=f.isDef(a)?a.environment:
void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&
b.requiresDelayedViewabilityEvent()}}},nb=function(a,b,c){var d=l.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ga(b)).resolve())||l.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new Sc(b);return new Rc(b,c,d.isMobileAppEnvironment())}}},ob=function(a){var b=l.getAggregator().request("mobileApp");
return{getOmidMeasurementStrategies:function(){var a=l.getAggregator().request("omidVerificationClient"),b=new $(a),e=new za,k=[];if(b.accepts()&&!e.accepts()){var f=new aa,h=new Tc,e=new Uc(a,new C),f=[{environment:f,measurementStrategy:new Vc(a,new C)},{environment:h,measurementStrategy:new Fa(new ha,r.getWindow(),new C)}],f=(f=(new ga(f)).resolve())?f.measurementStrategy:{},q=new Ga(new Ha(new S),new S,h.accepts()),h=new Mc(a,b,m.mode),p=new Ia(e,f,new C,q),b=new Nc(a,b,m.mode),a=new Ja(e,f,new Qc(a,
new C),new C,q);k.push({environment:h,measurementStrategy:p});k.push({environment:b,measurementStrategy:a})}return k},getAvidMeasurementStrategies:function(){var b=l.getAggregator().request("avidJsClient"),d=new Kc(b),e=[];if(d.accepts()){var f=new Jc(b,d,m.mode),h=new Lc(b,d,m.mode),n;n=new Oc(b,new C);if(d.supportsAdContainerGeometry()){var q=new Wc,p=new Xc,z=new Fa(new ha,r.getWindow(),new C),B=new Yc(b,new C),q=(q=(new ga([{environment:q,measurementStrategy:B},{environment:p,measurementStrategy:z}])).resolve())?
q.measurementStrategy:{},p=new Ga(new Ha(new S),new S,p.accepts()),z=new Zc(b,new C),b=new Ia(z,q,new C,p);n=new Ja(z,q,n,new C,p)}else p=new Pc(b,new C),b=new Ea(p,new C),n=new Ka(p,n,new C);e.push({environment:f,measurementStrategy:b});e.push({environment:h,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new $c(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.getAggregator().request("context"),
e=new ad(r.getWindow(),e),f=new bd(r.getWindow(),new C);e.accepts()?(d=new cd(r.getWindow(),new C),d=new Ka(f,d,new C),d={environment:e,measurementStrategy:d}):(e=new Ea(f,new C),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ga=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Sc=function(a){var b=!1,c,d={winDimensions:D({scrX:0,scrY:0,width:0,height:0}),adDimensions:D({scrX:0,scrY:0,width:0,height:0}),
containerDimensions:D({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},e=function(a){return a?new D({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):D({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:f.isDef(a.percentageInView)?
a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=
d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ka=function(a,b,c){var d=!1,e=!1,k=!1,u,n,q,p,m=function(){if(!f.isUndef(n)){var a=[],b,l;d?(e?(l=!1,b=100):(l=p,
b=q),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));k=!0;n.shouldDelegateToDomBasedViewability=l;n.percentageInView=b;n.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},r=function(a){n=a;q=a.percentageInView;p=a.shouldDelegateToDomBasedViewability;m()},w=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!==
"AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);m()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(w);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return k}}},ad=function(a,
b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.getAggregator().trigger("adImpression"))})}catch(d){}}}},cd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Zc=function(a,b){var c=function(a){var c=new D(a.eventData.viewport||{width:0,height:0}),f=new D(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),n=new D(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,
outOfViewReason:d(a.eventData.reasons)};b.trigger(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",
c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ga=function(a,b,c){function d(a,b,c){c=n(b,c);a=k(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},k=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},
u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,p){if(f.isDef(e)&&f.isDef(p)){var l=e.viewport,m=e.computedAdContainer,w=m.obstructions,t=w&&0<w.length,s=e.originalAdContainer,E=p.adGeometry,M=p.adFound,v=e.detectionMethod,x=0,l={x:0,y:0,width:l.width,height:l.height},N=u(s,E),G=e.outOfViewReason,y=0,L=0,C=t||!1,y=1>=E.width*E.height;c&&y&&(M=!1,G=G||
"",M||-1!==G.indexOf(h.OUT_OF_VIEW_REASONS.GEOM)||(G=h.OUT_OF_VIEW_REASONS.GEOM+(""!==G?"."+G:"")));if(M&&0<e.percentageInView){y=d(l,m,N);t?(x=n(m,N),x=k(l,m,x),x=u(m,x),x=a.calculateObstructedArea(x,w)):x=0;L=x;x=Math.round((y-L)/(N.width*N.height)*100);t&&0===L&&(C=!1);for(var E=(new D(N)).getRoundedGeometry(),M=C,A,t=0,L=b.getConfig(E).numberOfSlices,Q=r.floor(E.height/L)||1,w=[],y=M?a.getObstructionStatusBySlice(L):[],T,t=0;t<L;t++)A=E.y+Q*t,t==L-1&&(Q=E.y+E.height-A),A={x:E.x,y:A,width:E.width,
height:Q},T=d(l,m,A),A=1==T/(A.width*A.height),w.push(A);if(M)for(m=r.min(y.length,L),t=0;t<m;t++)w[t]=w[t]&&!y[t];m=w}else m=b.getConfig(E).defaultSliceArray;return{windowDimensions:l,containerDimensions:s,adDimensions:N,percentageInView:x,viewState:50<=x?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=x?"":G||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:v,isObstructed:C,sliceStatus:m}}}}},Wc=function(){return{accepts:function(){return t.isAvidNative()}}},Yc=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;
a=!!c;c=(new D({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Xc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ia=function(a,b,c,d){var e,k,u,n=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);u=a.isMeasurable=
!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;n()},p=function(a){k=a;n()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(p);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return u}}},Ha=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,h,n,q;h=e&&0<e.length;var p;if(h){p=Math.round(d.width);var l=Math.round(d.height);k=Array(p);for(n=0;n<p;n++)k[n]=Array(l);p={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:p,height:l}}else p={};k=p;l=p=0;if(h){for(;p<e.length;p++){h=e[p];n=l=k;var m=h;k=Math.max(n.x,m.x);h=Math.max(n.y,m.y);q=Math.min(n.x+n.width,m.x+m.width);m=Math.min(n.y+n.height,m.y+m.height);
n=q-k;q=m-h;n=0<n?n:0;q=0<q?q:0;k-=l.x;h-=l.y;n=k+n;q=h+q;for(k=Math.round(k);k<Math.round(n);k++)for(m=Math.round(h);m<Math.round(q);m++)void 0!==l.matrix[k]&&void 0===l.matrix[k][m]&&(l.matrix[k][m]=1,l.obscuredPixelCount+=1);k=l}l=k.obscuredPixelCount;p=k;if(f.isUndef(p.matrix)||0===p.matrix.length)c=[];else{h=0;q=!1;k=p.matrix[0].length;n=p.matrix.length;q=a.getConfig({height:k}).numberOfSlices;for(var m=r.floor(k/q)||1,t=[],s=0;s<k;s++){q=!1;for(var K=0;K<n;K++)if(1===p.matrix[K][s]){q=!0;break}h++;
q&&(s+=m-h,h=m);if(h==m||s===k-1)t.push(q),h=0}c=t}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Uc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,k=new fa,u=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):r.setTimeout(u,50)},n=function(a){if(a&&a.data&&a.data.adView){var f=a.data.adView,n=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);
if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{n&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions);var m=new D(a.data.viewport||{width:0,height:0}),r=new D(f[n?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),n=new D(f["onScreen"+(n?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:m.getRoundedGeometry(),originalAdContainer:r.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),
percentageInView:f.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:q(f.reasons)};"undefined"===typeof c.geometryArrived&&k.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},q=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN,hidden:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:q}},
aa=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Vc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=new fa,u=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):r.setTimeout(u,50)},n=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{var p=
a.data.adView.geometry,n=a.data.adView.containerGeometry,m=!!p,r=a.data.adView.measuringElement&&!!n,p=(new D({x:m&&r?p.x-n.x:0,y:m&&r?p.y-n.y:0,width:m?p.width:0,height:m?p.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&f.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:p,adFound:m})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&
n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdGeometryMeasurementChangedListener:function(a){b.on(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Tc=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ja=function(a,b,c,d,e){var k=!1,m=!1,n,q,p,r,t,s=function(){if(!(f.isUndef(q)||f.isUndef(p)||f.isUndef(r))){t=!0;var a=e.calculateGeometricMeasurement(q,p),b=k&&m,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,
containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",n)}},F=function(a){q=a;s()},K=function(a){p=
a;s()},E=function(a){r=a;a=a.eventType;"AdEnteredFullscreen"===a?m=!0:"AdExitedFullscreen"===a?m=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(k=!1);s()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(F);a.start();b.addAdGeometryMeasurementChangedListener(K);
b.start();c.addVideoPlaybackEventListener(E);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return t}}},Fa=function(a,b,c){var d,e=function(){var b=a.find(),e,l,q=!1;f.isDef(b)?(l=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(q=!0,e={x:0,y:0,width:0,height:0}),l=!1);if(b=
l)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||q)d=e,c.trigger(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:l})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},$c=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},bd=function(a,b){var c=
!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",
d)},m=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):k())},n=function(){c||m()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;l.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.getAggregator().trigger("exec","mraid.js",n):m()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},bb=function(a,b,c){var d={},
e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||l.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Xa=function(){var a=new O({tiv:[1E4]}),b=f([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Wa=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var l=[2E3,5E3,15E3],n=function(a,b){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new O({tiv:d}),d=d[0]):f?(c=new O({tiv:l}),d=
l[0]):(c=new O({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},Za=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],m=[1E3,5E3,15E3],n=[2E3,5E3,15E3],q=function(a){var b=
r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new O({tiv:f}):d?new O({tiv:n}):new O({tiv:m});l.getAggregator().provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},Ya=function(a,b){return{timeInViewThresholds:new O({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=
r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ab=function(a,b){var c,d,e,k=r.getMaxNumber(),l=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var q=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d,p=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,p,n,m=b.adDimensions.area();
n=1===b.tabHidden;var t=r.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;p=b.ub||k;if(m>=e&&m<=p)return!0});n=!n&&t>=d.piv;b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(n=!1);l&&(n=n&&b.isVideoPlaying,q&&(n=n&&b.isSoundOn));return n};c=new O(a);d=a.qiv;(function(){e={};var a;f.isDef(m.rts)&&f.isDef(m.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():
h.RTS_KEY_FOR_VQ,e[a]=m.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:h.DT_CODES.CUSTOM,rts:e,isInView:p,isInViewIgnoringRender:function(a){return p(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:q,sendOtherwiseInViewSignal:!0}},$a=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=f(a.customViewability).isArray()&&0<a.customViewability.length,l=
c.on("customMetric"),q=c.on("groupmCM"),p=function(a,b){var c,h,l,n,p;c=f(b.mediaTypes).contains(d);h=f(b.distributionChannels).contains(e);l=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;n=I.contains(b.id,"fiv");p=I.contains(b.id,"groupmCM");n=!n;p&&(n=q);return n&&c&&h&&l};return{resolve:function(){var b=[],c;l&&h&&(c=f(a.customViewability).filter(p),f(c).each(function(a,c){b.push(c)}));return b}}},O=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ia(c))});
else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new dd;b.push(new ed(c,parseInt(a[1].replace("%"))));b.push(new ia(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ia(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},dd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},ia=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},ed=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},oa=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):
b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},cb=function(a,b,c,d){var e,k,h,n,q,p,m=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},t=function(a){var l=0,m=1===a.tabHidden,z=a.isVideoPlaying,t=a.isSoundOn,w=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){h(b,m,z,w)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});s("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){r(b,m,z,w)&&t?k[a].mark():k[a].stop();q[a]=k[a].getTotalTime()}),
s("slcVtVol",q));p=d&&b&&b.shouldIncludeSound?q:n;a=f(p).findFirst(function(a,b){l=Math.max(l,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(l)},s=function(a,b){var c={};c[a]=b;l.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},K=function(a){!e&&a.sliceStatus&&(e=[],k=[],n=[],q=[],f(a.sliceStatus).each(function(a){e.push(new W(1));n.push(0);d&&(k.push(new W(1)),q.push(0))}))},E=function(a){f.isUndef(a.sliceStatus)||(e||K(a),t(a))};return{start:function(){h=d?r:m;a.addMeasurementChangedListener(E)}}},
ma=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Gb=function(a,b,c,d,e,f,l,n,q,p){var m=!1,s=t.isVideo(),w=f.request("mobileApp"),F=X().applies(c,e),K=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&e.on("rattie")||F,E=t.xDomainIframe&&!K,v=new xa(10),x=function(){e.on("viewabilityready")&&!m&&(d.send(h.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),m=!0)};
f.on("delayedViewabilityReady",function(){y();x()});f.on("delayedViewabilityReadyCallOnly",x);var y=function(c){c=c||!1;try{v.start();var d,e;b.hasMeasurementStrategy()?e=w.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),w.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):E&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),s&&!t.isAvid()&&p.setVideoSpecificScreenEventFields(e));d=
q.registerLocation(e);c||a.trigger("measurementChanged",e);v.stop();var m=r.round(v.getTime()/v.getCount());l.addItem({output:m},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(z){f.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:y,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=
a&&F,d=!d&&!e&&!a;return w.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){w.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};l("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=fd(c),u=[new gd,new hd(k)],n=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},q=function(a){"sessionFinish"===
a.type&&l.getAggregator().trigger("adSessionComplete")},p=function(a){x.addEvent(v,a,function(){l.getAggregator().trigger("adSessionComplete")},!1)},z=function(){var a=new Y(h.DT_CODES.VIDEO_EVENTS);l.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};l.getAggregator().once("startViewabilityLoop",function(){var b,c=l.getAggregator().request("mobileApp").isMobileAppEnvironment();
l.getAggregator().request("ids").impressionIsIdentifiable()&&(e=dc(a.checkScreenLoc,k.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?t.isOmid()?l.getAggregator().request("omidVerificationClient").registerSessionObserver(q,"IAS"):p("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):p("beforeunload"))});l.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||z();l.getAggregator().trigger("unload");e&&e.stop();l.getAggregator().trigger("endAdSession");l.getAggregator().trigger("stopAdTalk")})},
{tier:h.TIERS.VIEWABILITY});var fd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},hd=function(a){var b,c,d,e,f,h=function(l){d&&!f&&1>l?(f=!0,r.setTimeout(function(){h(l)},1E3)):(e=1>l,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){h(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=
c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",h);l.getAggregator().on("newScreenEvent",n)}}},gd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);
l.getAggregator().on("IOPivChange",e)}}},pd=function(a,b,c,d,e,k){var u,n,q,p,z,B,w,F,K,E=s.getElementsWindow(b);s.getElementsDocument(b);l.getAggregator().provide("iframeCalculatorHelper",id(E));var y=jd(b,d),A=h.AD_IDENTIFIER+"-"+m.asid,C=!1,N=D({}),G=t.isDeviceTypeGroupMobile(),H=t.usesGroupMCustomMetricMobilePassThru(),L,I=function(){if(!u)if(u=y.calcDims(b,d,q),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=u,e=(new D(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.getAggregator().trigger("error",
h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},O=function(){var b,d=t.xDomainIframe&&C;b=G&&C&&q.isReady();b=d||b;d=y.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?n=q.getPiv():f.isUndef(n)&&(b=!G&&(t.friendly||f.isDef(v.mozInnerScreenX))&&e.on("offscreen"),F=I(),w=new D(s.calcWinDims()),B=new D(b?s.calcMonDims():{}),K=d?y.getClippedDims():N,n=a.calcPercentInView(F,w,B,K));return n},Q=function(){return a.calcInitialViewState(O())},
T=function(){return b===v?!1:I().isHidden()};(function(){var c=r.getWindow(),d=r.getDoc(),e=b===c,f=d.body,k=l.getAggregator(),h=new X,n=k.request("browser"),m=k.request("features"),k=k.request("context"),u=!t.xDomainIframe,d=e&&f?d.body:b;L=t.friendlyIframe?c.frameElement:d;x.addEvent(d,"click",function(){l.getAggregator().trigger("adComponentClicked")});x.addEvent(d,"mouseover",function(){l.getAggregator().trigger("adComponentMousedOver")});h.applies(n,m,k)?(q=Ec(b,u),q.start(),C=!0,H&&(c=new kd(I().getRounded()),
h=new ld,h=new md(q.getObservedNode(),h),p=new nd(c.getSlices(),h))):H&&(z=new od(a))})();return{mark:function(){s.setAttributeOf(L,A,"")},cleanup:function(){s.removeAttributeOf(L,A)},isNode:function(a){return b===a},isHidden:T,isObstructed:function(){return!1},getDims:I,getPercentInView:O,getLocationState:Q,getOnPageViewability:function(){return T()?h.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return y.allowsOptimization?u:D(d)},refresh:function(){K=F=w=
B=n=u=void 0;if(k){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==v&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;p&&p.isReadyToMeasure()?a=p.getSliceStatus():t.friendly&&z&&f.isDef(F)&&(a=z.getSliceStatus(F,w,B,K));return a}}},qd=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},m=function(n,p,q,m){var u=k()||0===c.length;n=pd(a,n,p,q,b,m);
k()&&(m=c.shift(),e=f(c),m.cleanup(),d=void 0);c.push(n);e=f(c);u&&n.mark();u&&p!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.getAggregator().trigger("primaryadfound",n);p===h.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof q&&l.getAggregator().trigger("addOutputItem",{output:q.nodeName},"spac")},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==h.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,
hasMeasurement:b}},q=function(a){var b=l.getAggregator().request("adRenderStatus");return!a&&!b},p=function(a){var b;b=n();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):h.PIV_NA;if(isNaN(b)||q(a))b=0;return b},z=function(c){var d=b.bootstrapOn("mobOrTab"),d=n().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!t.isVideo();return a.calcInitialViewState(p(c),d)},s=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},w=function(a){return function(){return c[0]&&c[0][a]()}};
l.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===s(b)&&m(b,h.DETECTION_METHODS.MUTATION)})});l.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=s(b);-1<d&&c.splice(d,1)})});return{getDims:w("getDims"),isObstructed:w("isObstructed"),getDetectionMethod:w("getDetectionMethod"),getContainerDims:w("getContainerDims"),getViewState:z,getViewStateIgnoringRender:function(){return z(!0)},getPercentInView:p,getPercentInViewIgnoringRender:function(){return p(!0)},
isHidden:w("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(a){var b,e=[],f=c[0],k=h.OUT_OF_VIEW_REASONS;f&&(b=d||z(),q(a)?e.push(k.RENDER):b!==h.OUT_OF_VIEW&&b!==h.PARTIAL_VIEW_MINUS||e.push(k.GEOM),f.isHidden()&&e.push(k.HIDDEN),f.isObstructed()&&e.push(k.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:w("getSliceStatus")}},
rd=function(a){var b=!1;if(!f.isUndef(v.MutationObserver)){var c=new v.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};l.getAggregator().on("adComponentClicked",d);l.getAggregator().on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(J.body,
{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},zd=function(a,b){var c=[sd(),td()],d=[ha(),ud(),vd(),wd(),xd(),yd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},vd=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||ea();var c=s.crossQuerySelector(ea().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Ad=function(a,b){var c,d=s.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[h.IAS_DETECTOR]&&(c=d);return c},xd=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,find:function(){return v},isApplicable:function(){return t.embedded},getAdContainer:function(){return m.contextNode.parentNode},
allowForAdContainerChange:!0}},Bd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return I.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,
b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},Cd=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&I.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Dd=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&
b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&D(h).isOneByOne(),l=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return I.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&
!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&l&&c&&h&&d()&&e()},getCssSelector:e}},ea=function(){var a,b=l.getAggregator().request("features");a||(a=[Dd(),Cd(),Bd()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,b)})},wd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},
find:function(){var c,d=Aa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Aa=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&I.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ha=function(){var a=l.getAggregator().request("mobileApp");
return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[h.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},td=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=s.crossQuerySelector(m._cl_adpath);
b&&(a=s.getParent(b),1>s.getNodeArea(b)&&(a=b,b=s.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},sd=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},yd=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Ad,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ud=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:l.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},jd=function(a,b){var c,d;c=[Ed(),
Fd(),Gd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Hd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Gd=function(){return{calcDims:function(a,b){var c,d,e=new D(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());
a=!s.elementIsEmbedded(a);return b||a}}},Fd=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},Ed=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new D(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,
allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},Hd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=l.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,
e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},id=function(a){var b,c,d,e=l.getAggregator().request("features"),k=l.getAggregator().request("browser");a=a||r.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,n=e.length;k<n;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){l.getAggregator().trigger("error",
h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&m(b.parent,c)}return c},n=function(){var n,p={};try{var z,B,w,v,x,y,A=r.getMaxNumber(),C=r.getMaxNumber();t.friendly?(z=m(),w=z.left,v=z.top,A=z.width,C=z.height,B=s.browserWindowPosition(),x=B.scrX+w,y=B.scrY+v):e.on("rattie")&&k.browserIs(h.BROWSERS.IE)?(d=d||l.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),x=c.scrX,y=c.scrY):f.isDef(a.mozInnerScreenX)&&(x=r.round(a.mozInnerScreenX),y=r.round(a.mozInnerScreenY));var p=
{scrX:x,scrY:y,iFrameClippingWidth:A,iFrameClippingHeight:C},D,N,G=b||s.getIeDimObj(a);b=G;f.isDef(a.innerWidth)?(D=a.innerWidth,N=a.innerHeight):G&&f.isDef(G.clientWidth)?(D=G.clientWidth,N=G.clientHeight,0===D&&0<G.offsetWidth&&(D=G.offsetWidth),0===N&&0<G.offsetHeight&&(N=G.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(D=a.frameElement.clientWidth,N=a.frameElement.clientHeight);n=D;p.height=N;p.width=n}catch(H){l.getAggregator().trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return p};
return{calcDims:function(){return new D(n())},getClippedDims:function(){var a=n();return new D({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Ab=function(){return{createInstance:function(a,b,c){return t.isDomless()?new Id:new Jd(a,b,c)}}},Jd=function(a,b,c){var d,e=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,k=qd(b,c),l=function(){var a,b,e;d=d||zd(t,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),
e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;k.hasAd()||(a=s.getPlaceholderSpan(),e.insertBefore(a,m.contextNode.nextSibling),k.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))};rd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?l():k.refresh();return k},getDetectionMethod:function(){}}},Id=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},jb=function(a){var b,
c=[],d=a||v,e=function(){return"stub"===h().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},h=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,v.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||
a();return{isAvidAvailable:f,getAvidAdSessionContext:h,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},ib=function(a){var b=new Kd,c=new Ld;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||t.isDomless()||t.isAvid()||t.isAvidNative())d=b.detect(),b.hasDetectedMobileApp()&&
(c.detect(),l.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),l.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){l.getAggregator().trigger("error",h.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Md={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,
c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(k){}try{c.push(J.referrer)}catch(h){}}try{"jsi"!==m.mode&&c.push(v.location.href)}catch(l){}try{c.push(m.jsref)}catch(q){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,k,h,l="mobfox"===d?c:[b];for(h=0;h<l.length;h++){k=l[h];var m="string"===typeof d?[d]:d;if(f(m).isArray()&&(m[0].substring(0,
4),m))for(var n=0;n<m.length&&(e=-1<k.indexOf(m[n]),!1!==e);n++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(I.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",
detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},La=function(){var a=function(a,c){var d,e=Md[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Nd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",
detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},
{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",
detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Kd=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,f=La().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length?
a="s_serv":(a=f(Nd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Ld=function(){var a=[],b=[],c=function(b,c){var f,h=La().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),f=c);return f};return{detect:function(){b=f(Od).map(c);0<b.length&&l.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==
b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Od=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],
url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},
{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],kd=function(a){var b=[],c=function(a,b,c){a*=c;return new U(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new U(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},S=function(){var a=
h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},nd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),k=Math.max(d.leftX,f.leftX),
h=Math.min(d.rightX,f.rightX),l=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new U(k,h,l,f))}});return c},e=function(a,b){var c=0,e=d(a,b),k;f(e).each(function(a,b){k=b.value();c+=k.area});return c},k=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=k();c.mbrd=
1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(h.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},od=function(a){var b=S();return{getSliceStatus:function(c,d,e,f){var h,l=[];h=c.getRounded();c=h.height;var m=h.scrY,p=new D({scrX:h.scrX,
width:h.width}),t=b.getConfig(h).numberOfSlices;p.set("height",r.floor(c/t));for(var s=0;s<t;s++)p.set("scrY",r.ceil(m+c/t*s)),h=100===a.calcPercentInView(p,d,e,f),l.push(h);return l}}},U=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),h=Math.ceil(c),l=Math.ceil(d),m=f-e,p=l-h,r=m*p,t=function(){return{leftX:e,rightX:f,topY:h,bottomY:l,width:m,height:p,area:r}};return{value:t,doesIntersect:function(a){var b=t();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},ld=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},md=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},l=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,
r=d.left-f.left,f=d.top-f.top,f=new U(r,r+d.width,f,f+d.height);e.push(f);f=l();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new U(0,b,f[d],f[d+1]));h();1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},fa=function(){var a=function(a){var b=!1;Pd.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):
e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Pd=[{PARTNER_NAME:"IAB"},
{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Qd=function(){return{listenForResult:function(){l.getAggregator().on("videoBlockResult",function(a){var b=l.getAggregator().request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Rd=function(a,b){var c,d,e,h,u;e=l.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&
delete a.ext_passthrough;return a}(a);u=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(u);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=r.getWindow();
return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===
e?l.getAggregator().persistentTrigger(e,h,u):l.getAggregator().trigger(e,h,u)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Sd=function(){var a=[];return{registerEvent:function(b,c,d){b=new Rd(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Td=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&
a.hasAlwaysBeen(!0)&&l.getAggregator().trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},m=function(a){a=(new Ma).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.getAggregator().on({adVideoStart:k,adImpression:k,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Ud=function(){var a=
{AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ma=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},db=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,u,n,q=[],p=h.OUT_OF_VIEW,s=!1,v=!1,w=!1,y=!0,A=new Sd,E=Td(),D=new Qd,C=new Ma,H=new Ba,N=function(b){var d;
s=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=A.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(v=!0,p=w?h.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,p=h.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,p=v?h.IN_VIEW:h.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,p=v?!1:h.OUT_OF_VIEW),b=parseFloat(d.getVolume(C)),0<b?y=!0:0===b&&(y=!1));q.push(d);n&&O();return d},G=function(b){var c,h,k=ka().wrapToGlobal(N),p=function(a){f.isStr(a)&&(l.getAggregator().provide("vc",
function(){return a}),l.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),s=!0,p(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",n,m)}},I=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};k||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,
b){var d=r.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},m));return k},L=function(){var a=I();a&&!s&&G(a);return a},J=function(a){a=C.getVolumeFromContext(a);y=f.isDef(a)?0<a:!1},O=function(){H.init();f(q).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&l.getAggregator().trigger("sendDt",
h.DT_CODES.VIDEO_EVENTS),l.getAggregator().trigger("videoQuartileEvent",b)))});q=[];n=!0};(function(){x.addEvent(r.getWindow(),"message",function(a){N(a)});l.getAggregator().on({volumeChanged:J});l.getAggregator().provide({videoEventsString:A,videoVersion:function(){var a,b=L();try{a=b.getVersion()}catch(c){a=-1,l.getAggregator().trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Ud},adNode:L});L();D.listenForResult();E.isApplicable(t)&&E.start(c)})();
return{findAdNode:L,getViewStateOverride:function(){return p},isHandshakeComplete:function(){return s},triggerInitializationEvents:O,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=y;a.isVideoPlayingInFullscreen=!1;if(p){if(p===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:p;a.isVideoPlaying=p===h.IN_VIEW}w&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=
!0)}}},Vd=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Ob=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.getAggregator().trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},k=function(){b=new ya;d=0;e(!0);b.start()},m=function(d,e,h,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(h)):d[e]=h;b&&b.isActive()||k();a=!0},n=function(c,d,e){l.getAggregator().trigger("addOutputItem",{output:d},
c,e);b&&b.isActive()||k();a=!0},q=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(l.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.getAggregator().on("preSendDt",function(a){q(a);b&&b.kill()});l.getAggregator().on("addThrottledProp",m);l.getAggregator().on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Tb=function(){var a={},b=function(b){a[b]||(a[b]=
new xa(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Wd=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},yb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=
c}),l.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));l.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},
toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},zb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=l.getAggregator().request("vc");var d={jv3:Na,av3:Na,jvw:Wd,avw:Vd};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Na=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.getAggregator().trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(v,"load",function(){l.getAggregator().trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new ya;a.onTick({4:function(){l.getAggregator().trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){l.getAggregator().trigger("measureTime",
R.IDS.IN_BROWSER_DELAY)}});a.start()}},H={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(h){for(;!d;){try{f.frames[b]&&(d=frame)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=H.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),x.removeEvent(r.getWindow(),"message",d))}catch(f){l.getAggregator().trigger("error",h.ERROR_CODES.GDPR)}};return d},
getCallId:function(){return"ias_"+m.asid},send:function(a,b){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,a,b)}};l("CCPAConsentDetector",[],function(){function a(a){a&&H.send(b,f(a).toION())}var b="ccd";(function(){var b=H.isFrameworkAvailable("__uspapi","__uspapiLocator");H.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:H.getCallId()}},e=H.getMessageHandler("__uspapiReturn",a),x.addEvent(r.getWindow(),
"message",e),b.postMessage(d,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};H.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=H.isFrameworkAvailable("__cmp",
"__cmpLocator");H.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:H.getCallId()}},h=H.getMessageHandler("__cmpReturn",a),x.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRV2ConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?
a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};H.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=H.isFrameworkAvailable("__tcfapi","__tcfapiLocator");H.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:H.getCallId(),version:2}},h=H.getMessageHandler("__tcfapiReturn",a),x.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,
b,c){return b.hasPostMessage()&&!c.isDomless()}});l("postMessageDetector",[],function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.IM,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});l("safeFrameDetector",
[],function(){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Lb=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){l.getAggregator().trigger("notify",b)})},e=function(){var e;e=new P(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.getAggregator().trigger("jsonp",e,d,!0);l.getAggregator().trigger("updateDtCount")};return{start:function(){l.getAggregator().on("sendCookie",
e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Nb=function(a,b,c,d,e,f,r){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(q){try{var p,s=d.baseUrl,v,w,x=f.getDocumentMode();"number"===typeof x?(w=2E3,8===x?w=4E3:8<x&&(w=8E3)):w=n(m.sp_imp_maxLength,2E3);v=w;if(t.integratedBlockingApplies(s)){w=s;var y=l.getAggregator().request("mobileApp"),A=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),
C=m.contextNode.getAttribute("data-ias-container"),D=m.contextNode.getAttribute("data-ias-callback"),y=w+"adContainerId="+C+"&cbFunctionName="+D,y=A?y.replace("monitoring","blocking"):y.replace("skeleton.js",m.integration+".js"),H=m.protocol+":"+m.staticServer+m.integration+"a.js",I=m.protocol+":"+m.staticServer+m.integration+".js",s=y+"&true_pb="+encodeURIComponent(m.passback)+(A?"&redirectUrl="+encodeURIComponent(I):"")+(A?"&passback=":"&adsafe_pb=")+encodeURIComponent(H)+"&"}var A=s=s.replace(h.UNIQUE_ID_TOKEN,
m.asid),G=s.length,J,L,O=n(m.sp_imp_jsInfo_minLength,0),H="";try{J=v-G-O,0<J&&(L=Xd(q,J,14,b.on("partialUrls")),H+=L.join("&"))}catch(P){a.add(h.ERROR_CODES.IMPRESSION_URLS)}s=A+H;q=s+="&"===s.slice(-1)?"":"&";var Q,G="";try{Q=v-s.length,G+=Yd(Q,"adsafe_jsinfo=",a,b,c,e,f,r)}catch(R){a.add(h.ERROR_CODES.JSINFO),G+="adsafe_jsinfo=e:"+a.toString()}s=q+G;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);p=s;d.sendImpression(p);m.impUrl=p;l.getAggregator().trigger("impressionsent")}catch(S){__IntegralASDiagnosticCall("impsend",
S,m)}}}},Yd=function(a,b,c,d,e,k,u,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||
n.requiresDelayedViewabilityEvent();a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(s.push("abi:"+b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=Zd(a,c,d,e,k,u,n);l.getAggregator().trigger("eligiblerender");return{primary:s,secondary:a}}())},Zd=function(a,b,c,d,e,k,u){var n=[],q=l.getAggregator().request("mPage");n.push("mn:"+m.mn);n.push("pt:"+
function(){var b=u.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());n.push(f(k.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===h.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+m.mode);n.push("thd:"+f.stringifyTriState(q.supportsVisAPI()));n.push("et:"+(r.now()-m.birthdate));
m.perf.mark("si");c.on("swapids")?n.push("oid:"+m.oid):n.push("uid:"+d.unq);n.push("v:19.8.111");n.push("sp:"+(m.isSplitMode?1:0));n.push("fwm:"+("true"===m.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(s.windowSize()).toArray().join(".")),n.push("sr:"+f(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+
b);return n},Xd=function(a,b,c,d){var e,h=[],l=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(l(b))return b}),a=f(a).map(function(a,b){if(!l(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var l=e.key,m;m=24+h.join("&").length+l.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+l,l=h.join("&").length,f.length+l<=b&&h.push(f)}));return h},Jb=function(){return{isApplicable:function(a){a=
r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=$d(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},ce=function(a,b){return{start:function(){try{var c=ae(),d=c.getMethodName(a),e=new P(b.getEnabledScriptUrl(a)),f=be,m=r.getDoc();(new f(m.body||
m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.getAggregator().trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},ae=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),l.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:h,features:b,context:t,dtBaseURL:m.dtBaseURL,spg:Oa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Rb=function(){return{start:function(a,b){f(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&ce(d,b).start()})}}},$d=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=I.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},be=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();c.setAttribute("src","about:blank");(a||m.contextNode.parentNode).appendChild(c);
f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Oa=function(a){var b=new wa;(function(){b.listen(function(b){return b&&
b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==m.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){l.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,
3200))})})()};l("spg",["spgCache"],Oa,{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});l("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},k=function(){c||(c=!0,f(b).each(function(a,b){l.getAggregator().trigger("addOutputItem",b,a,{type:h.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),l.getAggregator().trigger("sendMinDt",h.DT_CODES.SCA))};return{allExpectedKeysPresent:e,
isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&k()},isFull:d,sendToOtherTags:function(){(new da).send({scaInfoOriginatorASID:m.asid,cache:b})}}},{});try{Pa()}catch(de){__IntegralASDiagnosticCall("main",de,m)}};try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
