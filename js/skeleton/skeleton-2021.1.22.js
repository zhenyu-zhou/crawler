var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.157',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.157.js"},
		protocol: 'https',
		jsref: "",
		asid: "a825b382-5cd3-11eb-9626-060d2875439a",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100",
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
		mn: "app16or",
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
__IntegralASConfig.initialize=function(m,w,J){function ja(h){if(!m.executedContinueMain){m.executedContinueMain=!0;var a;m.perf.markStart(ka);Ya(m).verifyContextNode();a=Za();var b=a.mAdTalk,c=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,g=a.mBrowser,q=a.mPageUrls,l=a.mFeatures,p=t,u=a.renderDetector,v,A,z,E;m.perf.markStart(la);m.b11="1"===m.adHeight&&"1"===m.adWidth?"true":"false";m.cnod=m.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});
var y;try{b.isApplicable(t)&&(b.start(),c.addItem(b.getFrameMap(),"fm"),l.on("fm2")&&c.addItem(b.getFrameMapIncludingPeerCase(),"fm2"),l.on("idMap")&&(y=b.getIdMap())&&c.addItem(y,"idMap"))}catch(N){d.add(k.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(g,l,p)&&e.start(),E=q.detectTopURL(),l.on("exch")&&(v=(new $a).createInstance(d,c),v.parse(E)),A=ab(),A.isApplicable(l)&&A.start(l),p.usesGroupMCustomMetric()&&bb(),z=cb(),z.isApplicable(l)&&(z.start(),n.getAggregator().trigger("sendCookie")),u.start()}catch(I){d.add(k.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(la);
h=E;b=a.mVideo;try{db(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),f.isFunction(b.triggerInitializationEvents)&&b.triggerInitializationEvents()}catch(r){__IntegralASDiagnosticCall("impsend",r,m)}h=a.mBrowser;b=a.mIds;c=a.mViewability;d=a.mFeatures;e=a.mComm;g=a.mDataTransfer;q=a.mErrors;l=a.iOutput;p=a.loopDelay;u=a.mAdTalk;v=a.viewabilityMeasurement;a=a.mAncestorOrigins;A=t;try{m.perf.markStart(ma);var s=eb();s.start();s.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,
k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var G=fb(h,b,c);G.isApplicable(d)&&G.start();var F;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(F=gb(e,g,q,b,l),F.init());hb(l,p,u,q,d,e,g,b,a);v&&v.start&&v.start();A.isDomless()||ib().start(["sca","xsca","rsrch"],d);jb();n.runTier(k.TIERS.VIEWABILITY);var w=kb();w.isApplicable(d)&&(w.start(),R.recordBlockingTime(),m.perf.mark(lb),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());m.perf.markEnd(ma)}catch(K){q.add(k.ERROR_CODES.POST_IMPRESSION)}m.perf.markEnd(ka)}}
function mb(h,a,b,c,d,e,g,q,l,p){try{m.perf.markStart(na),m.tpiLookupURL&&nb(g,q).init(m.tpiLookupURL),t.isDomless()||p.isStarted()&&p.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{m.perf.markStart(oa);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});m.perf.markEnd(oa);var g,q;m.isSplitMode&&(q=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(pa,
q));m.impUrl&&m.perf.markResource(ob,m.impUrl);g=m.perf.getData();n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());b.isApplicable(t)&&b.sendAdTalkCall()}catch(l){c.add(k.ERROR_CODES.ADTALK_DELAY)}}),m.perf.markEnd(na)}catch(u){c.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function pb(h){var a=new qb(h,t),b=new rb,c=new sb(h,t),d=tb(h,t),e=(new ub(m,t,h)).resolve(),g=[a],q=[];d.applies()&&g.push(d);c.applies()&&g.push(c);b.applies(h,t)&&g.push(b);f(e).each(function(a,b){g.push(new vb(b,
t));q.push(b.id)});0<q.length&&(n.getAggregator().trigger("addOutputItem",{output:q.join(".")},"scm",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:q},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return g}function wb(h,a){return!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:xb(m.videoId,h,a)}function Za(){var h,a,b,c,d,e,g,q,l={};m.perf.markStart(qa);var p=n.getAggregator();yb();l.mFeatures=p.provide("features",zb());p.provide("mobileApp",function(){return h=
h||new Ab(l.mFeatures)});p.provide("avidJsClient",function(){return a=a||new Bb(r.getWindow())});p.provide("context",t);l.mBrowser=p.provide("browser",(new Cb).createInstance());l.mErrors=p.request("mErrors");l.mIds=p.provide("ids",Db());l.iOutput=Eb(p);p.request("mJsonp");l.mComm=p.request("mComm");l.viewabilityMeasurement=(new Fb(Gb(l.mIds),l.mFeatures,l.mBrowser)).create();c=p.request("omidAdSessionContext");Hb(c,p);l.mFeatures.on("swapids")&&(m.oid=m.asid,m.asid=l.mIds.unq);l.mAdTalk=(new Ib).createInstance(l.mFeatures);
b=Jb();c=Kb(p);d=p.provide("mPage",(new Lb).createInstance());l.mAncestorOrigins=Mb();l.mPageUrls=p.provide("pageUrls",(new Nb).createInstance(l.mAncestorOrigins,r));e=p.provide("mScreenEvents",Ob());p.provide("ieXDomainViewability",Pb(l.mBrowser));g=Qb(l.mBrowser);q=wb(l.mFeatures,e);l.mVideo=p.provide("video",q);Rb(Sb.build());g=(new Tb).createInstance(l.mErrors,g,l.mFeatures);d=(new Ub).createInstance(g,l.mErrors,d,t);q=p.provide("jobFactory",Vb());l.mDataTransfer=Wb(g,l.mErrors,l.mFeatures,l.mIds,
l.iOutput,l.mBrowser,e,b);b=Xb(l.mErrors,l.mFeatures,p,c);l.mMode=Yb(b,l.mFeatures,l.viewabilityMeasurement.isImmediate());l.mViewability=p.provide("viewability",Zb(B(),l.viewabilityMeasurement,l.mBrowser,l.mDataTransfer,l.mFeatures,p,l.iOutput,d,e,l.mVideo));$b(l.mFeatures,l.mViewability,c,q);l.loopDelay=ra();l.renderDetector=ac();l.mDataTransfer.setViewabilityMod(l.mViewability);m.perf.markEnd(qa);return l}function bc(h){var a=h&&h.sca,b=h&&h.xsca;return function(c){c="string"===typeof c?JSON.parse(c):
c;if(Object.assign)Object.assign(m,c);else for(var d in c)m[d]=c[d];m.isResolved=!0;m.sp_cdnScripts={sca:a,xsca:b};ja(m.isNewBuild)}}function yb(){var h,a,b;b=n.getAggregator().request("omidAdSessionContext");h=b.app&&b.isDisplay&&!b.isWeb;(a=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&b.isLimitedSandbox&&"1"===m.adWidth&&"1"===m.adHeight&&(b.isLimitedSandbox=!1);h&&a&&(b.delayingViewabilityEvents=!0);if("app"===b.environment||!0===m.mobAppWebview)m.mobOrTab=!0}function Hb(h,a){if(h&&h.queuedOutputItems)for(var b=
0;b<h.queuedOutputItems.length;b++)a.trigger("addOutputItem",{output:h.queuedOutputItems[b].value},h.queuedOutputItems[b].code,{type:"impression"})}function $b(h,a,b,c){var d=pb(h);n.getAggregator().provide("viewabilityDefinitions",d);return f(d).map(cc(h,a,b,c))}function hb(h,a,b,c,d,e,g,q,l){var p;"true"!==m.minimizeCalls&&(p=(new Date).getTime(),r.execAtEndOfThread(function(){mb(h,a,b,c,p,d,e,g,q,l)}))}function sa(h){if(m.isResolved)ja(m.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(a){}var b=
h&&h.host||"https://jsconfig.adsafeprotected.com",c=h&&h.config;c&&(b=b+"/jsconfig"+c+(m.adSessionId?"&adSessionId="+m.adSessionId:""),n.getAggregator().trigger("jsonp",b,bc(h),!1,"cbName"))}}function cc(h,a,b,c){return function(d,e){var g,q,l;g=ta(e,a);var p=dc(b,h,e.rts).getCallbacks(),f=ua(c.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId));e.sendOtherwiseInViewSignal&&(l=ta(e,a,e.sendOtherwiseInViewSignal),q=ua(c.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId,e.sendOtherwiseInViewSignal)));
e.rtsCallbacks=p;e.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?g=ec(g,e,f,t.isVideo()):(g=va(g,W(e.minUnit),f),e.sendOtherwiseInViewSignal&&(q=va(l,W(e.minUnit),q,e.sendOtherwiseInViewSignal),q.start()));g.start();return g}}function fc(h){var a,b,c;m.perf.markStart(wa);m.isNewBuild=h;h=[gc,hc,ic,jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});
h.provide({omidAdSessionVerificationParameters:{}});a=vc();b=xa();c=(new wc).createInstance(a,b);h.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:$(a),adSessionReadyStrategy:xc(a)},{environment:yc(),adSessionReadyStrategy:zc()}];(new Ac(h)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(wa)}var ya={};if(Object.assign)m=Object.assign({},m);else{for(var za in m)ya[za]=m[za];m=ya}var f=function(h){return new D(h)},D=
function(h){this.iterable=h};D.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};D.prototype.isArray=function(){return this.iterable instanceof Array};D.prototype.isEmpty=function(h){return 0===this.keys(h).length};D.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};D.prototype.map=function(h,a){var b=[];
this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};D.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var e=h(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};D.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===
typeof b&&-1!==b.indexOf("NULL"),l=f(c).toION(h,a);return d?l:(h[b]||b)+":"+l}));return c+b.join(",")+d};D.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};D.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};D.prototype._privateMixin=function(h,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};D.prototype.mapToObj=function(h){var a=
{},b=this;this.each(function(c,d){var e=h(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};D.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};D.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};D.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};D.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};D.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},
h);return a};D.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};D.prototype.selectProperties=function(h){var a={},b=this;f(h).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};D.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(f.isUndef(h)||f.resolve(h,a,c))d=c;return d},a)};D.prototype.toArray=function(){return this.map(function(h,a){return a})};D.prototype.JSONStringify=function(){var h,a,b=!1;w.Prototype&&w.Prototype.Version&&
-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};D.prototype.contains=function(h){var a=f(this.iterable).findFirst(function(a,c){return h===c});return f.isDef(a)};f.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<h);e=e.reverse().join("");return c?"-"+e:
e};f.isDef=function(h){return"undefined"!==typeof h};f.isUndef=function(h){return!f.isDef(h)};f.isBool=function(h){return"boolean"===typeof h};f.noop=function(){};f.identity=function(h){return h};f.isFunction=function(h){return"function"===typeof h};f.isStr=function(h){return"string"===typeof h};f.useIfDef=function(h){return f.isDef(h)?h:!1};f.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};f.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};f.resolve=function(h){var a=f(arguments).toArray();
a.shift();return f.isFunction(h)?h.apply({},a):h};f.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};f.debounce=function(h,a,b){var c,d=b||w;return function(){var b=this,g=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,g)},a)}};f.last=function(h){return h[h.length-1]};f.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};f.fromBoolToNum=function(h){return h?1:0};
f.isNumeric=function(h){return f.isDef(h)&&null!==h&&!isNaN(h)};f.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};var n=function(){var h,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,u){u=u||{};var v,k,n=function(a){0===b.length&&(b=f(a).map(function(a,b){return h.request(b)}))},m=function(){if(!v){var a=[];v=!0;n(["features","browser","context"]);u.emits&&(c.events=new B);if(!u.applies||u.applies.apply(u,b))k=
!0,a=f(e).map(function(a,b){return h.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=u.tier;f.isDef(b)&&(a[b]=a[b]||new aa,a[b].push(m))})();h.provide(d,function(){var a;m();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new Aa;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),
k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},
DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},
WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",
IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",
GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",
VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),
CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},wa="mf",ka="cm",qa="in",la="pr",ma="po",
lb="bl",na="lo",oa="lt",pa="md",ob="id",Ya=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,b=J.getElementsByTagName("script"),c=b.length,d=b[c-1],e=h.scriptUrl;try{for(;0<=--c;)if(a=b[c],a.src&&0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(g){}h.contextNode=d}}}},Cc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),
c=0,d=m.useFIF&&t.friendlyIframe||t.isSpecifiedAd(),e=0,g=[],q=function(q){var p=s.isNodeXDomainIframe(q)||s.isNodeCreative(q),u=!q;h=u?m.contextNode.parentNode:q;if(p||u){var v=g.length;0<v&&(e<v?e=v:(e=0,g=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",q)}else{if(d){var A;A=p=q;u=t.friendly?r.getTop().document.body:m.contextNode.ownerDocument.body;for(;3>c;){if(u&&p===u){A=p;c=3;break}s.isWindow(p)&&(A=s.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+m.asid+"]"),p=f.isDef(A)?A:p);A=p=
f.isDef(p)?p.parentNode||p:p;c++}p=A}else p=q;if(s.isWindow(p)){try{v=p.document}catch(z){v=m.contextNode.ownerDocument}q=v}else"IFRAME"===s.getNodeName(p)?(g.push(q),q=q.contentWindow.document):q=p;var v=[],u=(p=q&&q.getElementsByTagName&&q.getElementsByTagName("*"))&&p.length,E;if(p)for(var y=0;y<u;y++)E=(A=p[y])&&A.nodeName&&A.nodeName.toUpperCase(),!A.children||0!==A.children.length||f(b).contains(E)||f(a).contains(E)||f(v).contains(E)||v.push(E);v=b.concat(v);(new Bc(v,g)).searchDescendants(q)}};
n.getAggregator().on("creativeFinderBatchCompleted",q);return{find:q,getClosestContainerName:function(){return s.getNodeName(h)}}},Bc=function(h,a){var b=function(b){function d(b){var c=s.getNodeName(b),d=s.isNodeCreative(b)||"IFRAME"===c;c&&d&&!s.isEmptyTeadsFrame(b)&&(c=s.getNodeArea(b),c>l&&!f(a).contains(b)&&(q=b,l=c))}function e(){do d(b[g]),g+=1;while(0!==g%p&&g<b.length);g<b.length?r.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",q)}var g=0,q=null,l=-1,p=500;
if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(g;g<b.length;g++)d(b[g]);n.getAggregator().trigger("creativeFinderBatchCompleted",q)}};return{searchDescendants:function(a){a=a||m.contextNode.parentNode;var d,e,g=[];for(d=0;d<h.length;d++){e=h[d].toLowerCase();var q=a.getElementsByTagName&&a.getElementsByTagName(e);if(q&&q.length)for(e=0;e<q.length;e++)g.push(q[e])}b(g)}}},ac=function(){var h,a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,
details:k.RENDER.DETAILS.ENVIRONMENT},g=n.getAggregator().request("omidAdSessionContext"),q=function(){c=a=!0},l=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},p=function(){var a=!1;t.isOmid()&&g&&g.useOMID13Logic&&(a=!0);return a},u=function(a){var b={},c=r.getDoc(),d=function(e){var g=e&&e.type;if("readystatechange"===g&&"complete"===e.target.readyState||"load"===g)l(b),h.saveNode(a),"readystatechange"===g?h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===
g&&h.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),z(b),x.removeEvent(a,"load",d),x.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(l(b),h.saveNode(a),h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(x.addEvent(a,"load",d),x.addEvent(c,"readystatechange",d));return b},v=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){x.removeEvent(a,"ready",c);h.save(k.RENDER.DETAILS.ENVIRONMENT);h.save(k.RENDER.DIAGNOSTIC.MRAID_READY);l();z({status:k.RENDER.STATUS.DETECTED})};h.save(k.RENDER.DETAILS.ENVIRONMENT);
"default"===b?(l(),h.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(x.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(x.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));z(d)},A=function(a){a===k.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},z=function(b){var c=h.build();b=b.status||d.status;
c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(A(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(A(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},m=function(){n.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Cc,g=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(s.isNodeXDomainIframe(a))b?r.clearInterval(b):
g=!1,c=u(a);else if(a){var d=!1,q=s.getRect(a);a&&"IMG"===s.getNodeName(a)&&(d=f.isDef(a.naturalWidth)&&(0===a.naturalWidth||0===a.naturalHeight));!d&&q.width>=k.RENDER.WIDTH_THRESHOLD&&q.height>=k.RENDER.HEIGHT_THRESHOLD&&(l(c),b?r.clearInterval(b):g=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);z(c)});var q=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){n.getAggregator().trigger("renderdiag",c)}},p=n.getAggregator().request("mobileApp");
p&&p.isMobileAppEnvironment&&p.isMobileAppEnvironment()&&t.isMraid()?v():(q(),g&&(b=r.setInterval(q,500)));n.getAggregator().trigger("eligiblerender")})},y=function(){var a=g&&!!g.isVideo,c=g&&!!g.videoStartArrived,d=g&&!!g.geometryArrived;return b||!d||a&&!c?!1:(n.getAggregator().trigger("eligiblerender"),h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),l(),z(e),b=!0)};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
timestamp:r.now(),code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return c});h=new Dc;new Ec;n.getAggregator().on("impressionsent",q);p()?y()||(h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),z(d),n.getAggregator().on("omidrendgeoupdate",function(){y()}),n.getAggregator().on("omidrendvideostart",function(){y()})):t.isAvid()||t.isOmid()||
t.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),l(),z(e)):(z(d),m())}}},Dc=function(){var h=[],a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(g){c("nen")}return b},c=function(a){h.push(a)};return{build:function(){var b=[];f(a).each(function(a,c){b.push(c)});f(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),g=d&&
s.getRect(d),q=d&&"IMG"===e,l=d&&s.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,h=d&&d.children&&0===d.children.length&&p,v=g&&g.width>=k.RENDER.WIDTH_THRESHOLD&&g.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,A=(l||q)&&f.isDef(d.naturalWidth)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(v);A&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);l&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);h&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(n){c("sne")}}}},
Ec=function(h){var a,b=!1,c=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,m),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};n.getAggregator().on("eligiblerender",function(){b=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},X=function(){return{applies:function(h,a){var b=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||
h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Fc=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},bb=function(){var h,a,b=!1,c=n.getAggregator().request("mPage"),d=function(){!b&&
a&&h&&!c.isHidden()&&(b=!0,n.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Jb=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},c={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());
c=f(c).asStrings();var g=f(c).compareTo(a);(g=d(g))&&JSON.stringify(g)!==JSON.stringify({})&&(g.t=t.getTagTime(),h.push(g));f(a).mixin(c)});var d=function(a){f(c).each(function(b,c){var d=!1;f(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return f(h).toION(b)}}},Aa=function(){var h=new Gc,a=new B;return f(h).mixin(a)},B=function(){var h={},a={},b=function(b,c,g){if((b=a[b])&&0!==b)return g&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),
!0},c=function(a,b,c){h[a]=h[a]||new aa;h[a].push(b,c)};return{on:function(a,e){var g={};e?g[a]=e:g=a;f(g).each(c);f(g).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var g=b;a[g]=a[g]||[];a[g].push(c);(g=h[b])&&g.run.apply({},c)}}},ba=function(){var h=function(a,c,d){var e,g=c.length,q=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&
d(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(e=q[a])&&s.isWindow(e)&&(c[g]=a,h(e,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},aa=function(){var h=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;
f(h).each(function(b,c){c.apply({},a)})}}},ua=function(h){var a={};return{doEligibleJobs:function(b){f(h).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ba=function(){var h,a=new ca,b=function(b,d,e,g){var q,l,p,h;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),l=b.source,h=f.noop,d(q)&&(g&&(p=g(l,q))&&(h=function(){a.send(function(){return p},l)}),e(b,q,h))}catch(v){q&&n.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,
d,e){h=function(g){b(g,a,d,e)};x.addEvent(w,"message",h)},stop:function(){h&&x.removeEvent(w,"message",h);h=null}}},ca=function(){var h=function(a){return f(a).isObj()?[a]:(new ba).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);f(d).each(function(c,d){var q;q=f.resolve(b,d)||{};q.sentTime=r.now();q=a(q);d.postMessage(f(q).JSONStringify(),"*")})}}}},Hc=function(h,a){return{onAll:function(b){var c=
{};f(a).each(function(d,e){h.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},Eb=function(h){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==
typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),f.isFunction(b)?b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},
Gc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?h[b]=c:f(b).each(a);return c}}},Ub=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Ic:new Jc(h,a,b,c)}}},Jc=function(h,a,b,c){var d;return{collect:function(){var a=h.find(),g=a.getOutOfViewReasons(),q=b.isHidden(),l=c.isDeviceTypeGroupMobile()&&d?d:C(s.calcWinDims()),
p=a.getDims();d=l;if(!a.hasAd()||!l.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:l,adDimensions:p};!0===q&&g.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:l,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:g.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),
reason:g.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Ic=function(){return{collect:function(){return{}}}},Kc=function(h){h=h||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=h(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ca=function(h,a){var b=h||1,c=0,d=0,e,g=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var q=e||a;0===c%b&&(g+=r.now()-q,d++);c++},getTime:function(){return g},getCount:function(){return d}}},Da=function(){var h,a=0,b=0,c=new B(!0),d=function(){h&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,
d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Lc=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=r.setInterval(h,c))},e=function(a){a&&h();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},W=function(h){var a,b,c=0,d=t.getTagTime(),e=0,g=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();
g=!1},mark:function(){a=g?t.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=t.getTagTime();g=!0}}},S=function(h,a){var b=h||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],g=b[4],q=b[5],l=h?b[6]:"",p=a?b[7]:"",u={},v=function(a){f.isDef(a)&&(g=a);return g},k=function(a){f.isDef(a)&&(q=a);return q},n=function(a,b){return a+"="+f(b).toION()},
p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:v,master:k,setParam:function(a,b){u[a]=u[a]||{};f(b).isObj()?f(u[a]).mixin(b):u[a]=b},path:function(a){l=a},toString:function(){var a=v()?v()+".":"",b=l?"/"+l:"",c;p||!f(u).isEmpty()?(c=f(u).isEmpty()?"":f(u).stringify(n,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},
jb=function(){var h=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=n.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=s.getOurNodeInTop()){var g=s.getAncestorNodes(d);e=f(g).map(a)}if(b=e=e&&h(e))n.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",
b),c=b}return c}catch(q){n.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},qc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId(),e=m&&m.contextNode&&m.contextNode.nextSibling&&m.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},
adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var g=d.exec(a[e]);g&&3===g.length&&"chanId"===g[1]&&(c=g[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var g=r.getTop();a={requestTop:"recordAdSlotImpression",
asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);g.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||null,g=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(q,l){q===k.DT_CODES.PING&&l===e&&(r.execAtEndOfThread(function(){g.postMessage(JSON.stringify({requestTop:"refreshAd",
adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}}},Mb=
function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){var g;if(g=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))g=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):void 0,g=3.7>g;return!g&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",
k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return f.last(h)},sendOriginList:function(){var a;a="ao:"+(h?f(h).map(b).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},gb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(d){try{a.diagnostic("c");
var g=d.length,p=0,u=0;e(g,0,0);f(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(g,p,++u)},!0);e(g,++p,u)})}catch(v){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;h.jsonp(a,g)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Xb=function(h,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&
m._onAPIResult(a)}catch(e){h.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Cb=function(){return{createInstance:function(h,a,b,c){return t.isDomless()?new Mc:new Nc}}},Nc=function(){var h=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=h.OPERA:f.isDef(b.mozInnerScreenY)?a=h.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=h.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=h.MSEDGE:
f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=h.IE:f.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=
r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var g=k.NA,q=r.getDoc(),l=q.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in
q.documentElement.style)g="11";else for(l.style.behavior="url(#default#clientcaps)",q=0;q<e.length&&!(g=l.getComponentVersion(e[q],"componentid").replace(/,/g,"."));q++);}catch(p){}e=g;g=k.NA;l=r.getWindow();f.isDef(l.navigator)&&f.isDef(l.navigator.appName)&&(g=l.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:g}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],g=function(){return f(b).findFirst(function(b,c){return L.contains(a,c)})};return L.contains(a,
"Android")&&g()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Mc=function(){var h=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},
wc=function(){return{createInstance:function(h,a){return t.isDomless()?new Oc(a):new Pc(h,a)}}},Qc=function(){var h,a=function(a,c){var d="",e="",g=r.getDoc().getElementsByTagName("ins");if(g&&0<g.length){e=g[0];d="<ins";for(g=0;g<e.attributes.length;g++)d+=" "+e.attributes[g].nodeName+'="'+e.attributes[g].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var c=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){h=n.getAggregator().request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,g=m.adWidth&&0<m.adWidth?m.adWidth:0,q=m.adHeight&&0<m.adHeight?m.adHeight:0,l=r.getDoc().getElementsByTagName("ins"),
p;p=e=0;l&&0<l.length&&(p=l[0],e=parseInt(p.style.width),p=parseInt(p.style.height));g=e||g||window.innerWidth;q=p||q||window.innerHeight;"complete"===r.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=g+"px",d.style.height=q+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},Pc=function(h,a){var b=function(a,b,c,d){"script"!==a?(b=J.createElement("DIV"),b.innerHTML=c,c=b.childNodes[0]):(c=J.createElement("SCRIPT"),c.src=b,d&&(c.onload=d));m.contextNode.parentNode.appendChild(c)},c=function(a,c,d){var e,g="";e=' src="'+c+'"';d&&(g="__IntegralASEventLoadHandler_"+m.asid.replace(/-/g,""),w[g]=d,g=' onload="'+g+" && "+g+'()"');g={script:['<script type="text/javascript"',
g,e,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',g,e,"></iframe>"],img:["<img",g,e,"/>"]}[a].join("");t.isOmid()?(e=new Qc,e.isApplicable(c)?e.deployBlockingScriptIntoIframe(c):b(a,c,g,d)):"true"===m.forceAppend?b(a,c,g,d):J.write(g)},d=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=s.createImage(),
b&&(c.onload=b),c.src=a)},e=function(a,b,c,d){var e=J.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},g=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),d(a,void 0,!0))},q=function(b,c,d,g){e(a.wrap(b,c,d,g))};n.getAggregator().on({addNode:c,send:d,exec:e,notify:g,jsonp:q});return{addNode:c,send:d,exec:e,
notify:g,jsonp:q}},Oc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){n.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&
"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};n.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(h){var a="undefined"===typeof window,b="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||f.isDef(r.getWindow().mraid)},e=function(){return!a&&f.isDef(r.getWindow().mraid)},
g=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&f.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},q=function(){var b;if(!(b=-1!==m.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===
k.MEDIA_TYPE.VIDEO),c=b||g());b=c}return b},l=function(){return m.mobOrTab},p=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,c){return L.contains(c.id,a)}).length},u=function(){return p("grpm")||m.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=S(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return r.now()-
m.birthdate},getPageTime:function(){var b=k.NA;!a&&f.isDef(h.chrome)&&f.isDef(h.chrome.csi)&&f.isFunction(h.chrome.csi)&&(b=r.round(h.chrome.csi().pageT));return b},isVideo:q,isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=f.isFunction(m.contextNode.getAttribute)&&m.contextNode.getAttribute("data-ias-container")||m._cl_adpath)&&f.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(m._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&
f.isDef(r.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new Ea).accepts()},isOmidForWeb:function(){return(new Fa).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));
return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==da());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:g,isDeviceTypeGroupMobile:l,usesIASFullyInViewCustomMetric:function(){return p("fiv")||m.use100v||!u()},usesGroupMCustomMetric:u,isCeltra:function(){var b=!1;a||(b=Ga().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return u()&&l()},usesZeroPivCustomMetric:function(){return!1===
f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!q()&&b&&"jload"===m.mode},integratedBlockingApplies:function(a){var b=
!1,c,d,e;m.contextNode&&f.isFunction(m.contextNode.getAttribute)&&(c=m.contextNode.getAttribute("data-ias-check-tag"),d=m.contextNode.getAttribute("data-ias-check-done"),e=(e=m.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(r.getWindow()[e]));var g=f.isDef(JSON)&&f.isFunction(JSON.parse);a=m.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var q=!0===m.fwMonitoring||"true"===m.fwMonitoring;g&&a&&("true"===c&&"true"!==d&&e?(b=!0,q&&n.getAggregator().trigger("addOutputItem",
{output:"imgb"},"smm",{type:"impression"})):(b=!1,q||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(w),x={addEvent:function(h,a,b,c){f.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",x.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",x.mouseEnter(b),c):h.addEventListener(a,b,c):f.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){f.isDef(h.removeEventListener)?
("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),h.removeEventListener(a,b)):f.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(h=J.defaultView.getComputedStyle(h,
b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(t.isDomless())r.setTimeout(function(){h()},50);else{var b=a||(t.xDomainIframe?J:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),
a())},50)},d=this;(function(a){var g=function(){a(!0)};f.isFunction(J.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(g):d.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(h)}},isSandboxed:function(h){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(h.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&
(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&f(h.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===x.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},Y=function(h){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},
e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=b&&b[h];f.isDef(d)&&0!==d&&f(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=f.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};Y.callTypeCounter={};var Wb=function(h,a,b,c,d,e,g,q){var l=0,p=0,u=!1,v=function(a,e,q,h,v,A){q=q||!b.on("postDts");var t=a===k.DT_CODES.DIAGNOSTIC||
a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==g.getCurrentLoc()))try{var s=m.dtBaseURL,w=new S(s,!0),x=r.now();n.getAggregator().trigger("preSendDt",a);s||(w.path("dt"),b.on("usedtdomain")&&w.sub("dt"));z(w,a,e);v&&v.field&&w.setParam(v.field,v.value);h||E(w,a);n.getAggregator().trigger("send",w,function(){p+=1;l=r.now()-x;f.isFunction(A)&&A()},q);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(C){__IntegralASDiagnosticCall("dt-"+
a,C),n.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};h=function(){u||v(k.DT_CODES.UNLOAD,-1,!0)};var A=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&v(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},z=function(a,b,e){var g=new Y(b);e=f.isDef(e)?e:g.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===
b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},E=function(c,h){var f,u={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,b){c.setParam(a,b.replace("%3A",":"))});g.fastForward();if(h===k.DT_CODES.CUSTOM||h===k.DT_CODES.UNLOAD||h===k.DT_CODES.VIDEO_EVENTS||h===k.DT_CODES.FULLY_INVIEW||h===k.DT_CODES.PING||h===k.DT_CODES.VIEWABILITY_READY||h===k.DT_CODES.ADTALK)u.clog=q,t.isVideo()&&(f=t.isOmid()?"omidVideoEventsString":"videoEventsString",(f=
n.getAggregator().request(f))&&!f.isEmpty()&&(u.ve=f));h===k.DT_CODES.UNLOAD&&(u.ndt=p);-1!==m.mode.indexOf("jsvid")&&(u.vv=n.getAggregator().request("videoVersion"));u.NULL1=b.output();u.NULL2=g.stringify(10);u.em=t.embedded;u.fr=t.friendly;u.e=a.toString();u.tt=m.mode;u.dtt=l;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);c.setParam("tv",u);c.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,
b,c){v(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){v(a,b,void 0,!0)},sendDiag:A,updateDtCount:function(){p++},unload:h});return{send:v,unload:h,diagnostic:A,setViewabilityMod:function(a){}}},C=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?s.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},g=function(){return r.round(a.width)*r.round(a.height)};
(function(){var b;h!==w.parent&&(1!==h.nodeType?a=h:f.isDef(h.getBoundingClientRect)&&(b=s.getRect(h),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||
"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},s={findElementsWithSize:function(h){var a=[],b=function(c){1>s.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(x.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;
h="hidden"===x.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){n.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))h.width=top.innerWidth,
h.height=top.innerHeight;else if(f.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(f.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else f.isDef(w.outerWidth)&&(h.width=w.outerWidth,h.height=w.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;f.isDef(w.screenX)?(h=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(h=w.screenLeft,a=w.screenTop);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=
s.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=s.browserWindowPosition();h=h.getBoundingClientRect();f.isUndef(h.x)&&(a.x=h.left,a.y=h.top);f.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);f(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&f.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=J.createElement("span");f(h.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=t.friendly&&r.getTop().Image;return f.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,
a){var b,c,d,e=1E4,g=1E4;b=x.nodeIsAbsolutelyPositioned(h);d=!s.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!s.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,g=b.height<g?b.height:g);while(d.parentNode!==J&&d!==a)}return{width:r.round(e),height:r.round(g)}},hasBackgroundImage:function(h){h=x.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyTeadsFrame:function(h){try{var a,
b,c=!1,d=h&&"IFRAME"===h.nodeName&&h.contentDocument;h&&h.parentElement&&"teads-player"===h.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},findChildWithLargestContent:function(h,a){var b=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=n.getAggregator().request("omidAdSessionContext"),d=c&&c.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,c=function(a){for(var c=a;a.parentNode!==h&&"inline"!==x.getStyle(a.parentNode,
"display");){var e;if(!(e=!b)){e=a.parentNode;var g=!0;if("visible"===x.getStyle(e,"overflow")||"visible"===x.getStyle(e,"overflowX")&&"visible"===x.getStyle(e,"overflowY"))g=!1;e=g&&0<s.getNodeArea(a.parentNode)}!e||b&&d&&"DIV"===a.parentNode.nodeName||(c=a.parentNode);a=a.parentNode}return c},g=null,q=function(a){var b,c,g=null,q=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],k=s.getNodeArea(f),n=f,m=void 0;if(m=n.parentNode===h)if(m=void 0,m="DIV"===n.nodeName)if(m=void 0,m=!e(n))if(m=void 0,
!(m="0"===x.getStyle(n,"opacity")||"hidden"===x.getStyle(n,"visibility"))){for(var r=m=void 0,n=n.childNodes,m=0;m<n.length;m++)1===n[m].nodeType&&(r=!0);m=!r}(n=!m)&&d&&"DIV"===f.nodeName&&(n=!1);m=s.isEmptyTeadsFrame(f);k>q&&n&&!m&&(g=f,q=k)}g&&(g.hasValidSizeForMobileApp=1<q);return g}(function(b){var c,d,e,g,q=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,g=f.length;e<
g;e++)q.push(f[e])}return q}(h));q&&(g=c(q),g.hasValidSizeForMobileApp=q.hasValidSizeForMobileApp);return g},screenSize:function(){if(t.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{f.isDef(w.screen)&&(h={width:w.screen.width,height:w.screen.height})}catch(a){}return h},calcMonDims:function(){var h=f(s.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(h={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return h},
getOurIFrameInTop:function(){for(var h,a=r.getTop(),b=r.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;t.friendly&&(h=t.embedded?(h=s.getOurIFrameInTop())&&h.frameElement:m.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!f(s.getTagsNamed("script")).findFirst(function(a,
b){var c=b.src;return f.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=f.isDef(h)&&f.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&f.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&f.isFunction(h.removeAttribute)&&
h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[m.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=s.querySelector(d,h)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=s.getTagsNamed("iframe",
h))&&(a=f(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&s.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&s.tagNameIs(h,"img")},
getDimensionFromStyle:function(h){var a,b=x.getStyle(h,"width");h=x.getStyle(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=s.getAttribute(h,"width");h=s.getAttribute(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,g;if(c(b))e=b;else if(g=b.children)for(d=0;d<g.length&&!(e=a(g[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=s.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());return b?!!(d||s.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=
s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},vc=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:
a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},$a=function(){return{createInstance:function(a,b){return t.isDomless()?new Rc:new Sc(a,b)}}},Sc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
g=c(d),q=g&&g.length&&g.join("|"),l=m.exchList;q&&(e=f(l).map(function(a,b){return 0<=q.indexOf(L.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Rc=function(){return{parse:function(a){}}},zb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c=
{es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};m.integration&&(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(g(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},g=function(a){var b=m[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===
b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Qb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},
e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,g=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=g.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;g=C({scrX:e,
scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(g.area()/a.area()*100));return e}}},Db=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){n.getAggregator().trigger("error",
k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},nb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,
void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Tc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=n.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),q=a.getTimeInViewForRts();f.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",
{type:b}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));n.getAggregator().trigger("sendDt",b,e);if(c[q])c[q]()}}}},Vb=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,q){return new Tc(q,a,c,d,e)})}}},Ha=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-m.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,
c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=n.getAggregator().request("mScreenEvents").getCurrentEvent(),u=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(n.getAggregator().trigger("addOutputItem",
{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},xa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,
b,c){var q=a.indexOf("?");b=b+"="+c;if(-1===q)return a+"?"+b;q++;return a.slice(0,q)+b+"&"+a.slice(q)},c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,g,q){var f=c(),p,u,v;q=q||"ias_callback";d=""+d;RegExp(q).test(d)&&(p=RegExp("("+q+"=)(.[^&]*)").exec(d)[0],u=p.split("=")[1],v=L.stringToFn(u),d=a(d,p));w[f]=function(a){e(a);g&&v&&v(a);w[f]=void 0};return d=b(d,q,f)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);
w[b]=void 0};return b}}},Yb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,onloadCallback:Ia,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?n.getAggregator().trigger("jsonp",c,a.callback,!0):n.getAggregator().trigger("send",c,function(){Ia();
n.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){n.getAggregator().on("adImpression",function(e,l){var p;try{p=d(c,l),a.enabled?n.getAggregator().trigger("jsonp",p,a.callback,
!0):n.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var l;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=
c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));l=d(a,e);n.getAggregator().trigger("send",l,f.noop,!0)}catch(z){__IntegralASDiagnosticCall("fwjsvidimp",z,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?
m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),u=f.indexOf("BEGIN__ADSAFE"),k=-1!==u,A=k?f.slice(u):"",a=k?f.slice(0,u):a(f);return{isFW:d,baseUrl:a,macroUrl:A,sendImpression:function(a){var d=function(){b.nodeType?n.getAggregator().trigger("addNode",b.nodeType,a,b.onloadCallback):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?n.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},getMutationObserver:function(a){t.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){t.isDomless();
return new ResizeObserver(a)},pow:function(a,b){return Math.pow(a,b)}},Lb=function(){return{createInstance:function(){return t.isDomless()?new Uc:new Vc}}},Vc=function(){var a,b=!1,c=!1,d=n.getAggregator().request("features"),e=new aa,g=function(){var b;d.on("blur")?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;
return b},q=function(){var b=r.getWindow(),c=function(){e.run(g())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,g){var q=g+"Hidden";f.isDef(d[q])&&(a=q,c=g+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:g,onHiddenChange:function(a){e.push(a);c||(c=!0,q())},supportsVisAPI:function(){return b}}},Uc=function(){return{isHidden:function(){return!1},
onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Nb=function(){return{createInstance:function(a,b){return t.isDomless()?new Wc:new Xc(a,b)}}},Xc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},g=function(){var g,
l=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var g=b.getWindow();e=!1;f.isDef(g.navigator)&&f.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?13>=parseInt(g[2],10)&&(e=!0):e=!0)))}e&&(a.g=
d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(u){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(n){}try{p.e=encodeURIComponent(w.document.referrer)}catch(z){}}try{"jsi"!==m.mode&&(p.d=encodeURIComponent(w.location.href))}catch(r){}try{p.f=encodeURIComponent(m.jsref)}catch(y){}try{g=l(),p.g=encodeURIComponent(g.g||""),p.q=encodeURIComponent(g.q||""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&
(p.g=encodeURIComponent(a.getTopDomain()))}catch(N){}p=d(p);p=e(p);g=[];for(var I in p)p.hasOwnProperty(I)&&g.push({key:I,val:p[I]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?c:g()}}},Wc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Kb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},
Ob=function(){var a=[],b={},c={sl:"n"},d=0,e,g,q,l={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},u=function(a,c){var d=new Kc(c);return b[a]=d},v=function(a,b){return(b||"")+{inView:"i",
outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},m=function(){f(c).each(function(b,c){l[c]+=a.length?q-d:q});d=q},z=function(b){a.length&&m();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(l[b]+=l.n);c[a]=b});a.length||m()},r=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e=a.omidObstructions,l={sl:v(a.viewState)};q=t.getTagTime();z(l);l.t=q;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(l).toParams()+
this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(l);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");f.isDef(e)&&""!==e&&(c.omidObstructions=e);return g=c};(function(){u("piv",function(a){var b,c=a.percentInView,
d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});u("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){q=t.getTagTime();m()},registerLocation:function(d){var g,q=!1;c.sl==v(d.viewState)&&a.length?(g=new r(d),a[a.length-1].details=g.details):(g=new r(d),a.push(g),e=d.viewState,q=!0);n.getAggregator().trigger("newScreenEvent",
g);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(q&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(l).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:u,getCurrentLoc:function(){return v(e)},getCurrentEvent:function(){return g}}},L={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=
a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,
b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},Yc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,
e=/_blank/,g=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),f=s.attributeMatches(b,"href",d),k=s.attributeMatches(b,"target",e);g&&f&&k&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,
a.hasValidDimensions)}}},Zc=function(){var a=Yc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},nc={name:"viewport",dependencies:[],creator:function(){var a={width:4,
height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},$c=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},
42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}},lc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),g,q={};d!==c&&(g=f.stringifyTriState(d),q.res1=g,q.ps=g,q.ts=r.now(),q.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),
b.events.trigger("newState",q));c=d}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)$c(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},mc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",
a);b++};(function(){var b,g;if(t.embedded)try{g=m.contextNode.parentNode,b=Zc().getDFPValue(g),g={},g.df=b.type,b.size&&(g.sz=b.size.width+"."+b.size.height),b.tag&&(g.dom=b.tag),c("dfp",g),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Ja=function(a,b,c,d){var e,g=0,q=0,l=!1,p=function(){e=Math.round(s.getNodeArea(a.body));if(e>=d){for(var p,
u=e+20*e/100,m=a.querySelectorAll("iframe"),m=f.fromNodeListToArray(m);m.length&&(q<u||g<c);)p=m.shift(),p=Math.round(s.getNodeArea(p)),p>=d&&(g++,q+=p);q>=u&&g>=c&&(u={va:e,bia:q,bin:g},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(u).toION()),l=!0)}},u=function(){var b;b=new MutationObserver(function(a){l?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&f.debounce(p,10)}})})});
b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!l&&f.isDef(w.MutationObserver)&&u())},kc={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ja(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},jc={name:"BS_Browser",
dependencies:[],creator:function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ja(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},Ib=function(){return{createInstance:function(a){return t.isDomless()?new ad:new bd(a)}}},bd=function(a){var b,c,d,e=new Aa,g=new ba,q=new cd(e),l=new dd,p=new ed,u=new fd(e,
a),k=function(){f.isUndef(d)&&(d=new gd(e));return d},m=function(){e.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new hd(a,e)},adTalkMessageCollection:function(){return l},idMapModule:k,interFrameQuerySelector:function(a){return new id(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){m();g.traverse(q.addFrame);u.startListening();
u.sendToKnownFrames();n.getAggregator().once("stopAdTalk",function(){u.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ka(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ka(e,!0));return c},getIdMap:k}},ad=function(){return{isApplicable:function(){return!1},start:function(){}}},hd=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();
c=n.getAggregator().request("features").on("swapids")?m.oid:m.asid;var g=a||{},f=m.asid,d=d.tagId,l=t.embedded,p=t.friendly,u=m.birthdate;c=c.split("-")[2];var v;t.friendly?v="["+k.AD_IDENTIFIER+"-"+m.asid+"]":(v=r.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:f,srcTagId:d,srcIsEmbedded:l,srcIsFriendly:p,srcBirthdate:u,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},dd=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},jd=function(a,b,c,d){var e,g=a==w;e={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||f.isDef(e.selfDescription)}};var q=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){l(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},l=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){q(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},cd=function(a){var b=
[],c={},d={noMe:!0};return{addFrame:function(e,g,f){var l=a.request("adProxy").getAll();e=new jd(e,g,l,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ka=function(a,b){var c=function(a,c){var f=c.adProxies,l="";if(c.isValidForMapping()){if(b)l+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";l+=p}return l}},d=function(a,b){var c="";return c=a.length?
c+f(a).stringify(function(a,c){return b+(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},gd=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var e=!1,e=!t.embedded,g="BODY"!==s.getNodeName(c)&&
"HEAD"!==s.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var v=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?v:!a.srcIsFriendly)}e&&g&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(d);c=c.join("|");120<c.length&&(c=e(c),n.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},id=function(a){var b=new ba,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,e){var l,p,u;try{p=d(c,e),p||(l=b.getFrames(!0,a),f(l).findFirst(function(a,b){return u=d(b,e)}))}catch(k){}return p||u||null};return{queryFor:function(b){var c=null;
b&&(c=e(a,b));return c}}},fd=function(a){var b=!1,c,d;d=n.getAggregator().request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);n.getAggregator().trigger("sendDt",
c)},l=function(c,d,e){var g,l,m,y,N;try{g=a.request("frameCollection");l=a.request("adTalkMessageCollection");m=d.messageContent.self;l.add(d);var t=g.getMe();t.unifiedId>m.unifiedId&&(t.unifiedId=m.unifiedId);var s;s=r.now()-d.sentTime;d.transferDuration=s;l=y=g.getFrame(m.id);f.isUndef(l)||f.isUndef(l.selfDescription)?(y=y||g.addFrame(c.source,m.id.split("-"),d),y.addInformationFromSrc(d,m),e()):y.addInformationFromSrc(d,m);(N=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(w){n.getAggregator().trigger("error",
k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new ca).send(g)},startListening:function(){c=new Ba;c.listen(e,l,g)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:l,createMessage:g}},kd=function(){var a=n.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},ed=function(){var a,b=[],c=function(a){a=new kd(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Pb=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&x.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},ld=function(a,b){var c,d,e=k.NA,g=e,q=!1,l=!1,p=!1,u=!b,v=n.getAggregator().request("browser"),m=function(a,b){Fc().applies(v)&&
r.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},z=function(){var b=r.getIntersectionObserver(function(a,b){var d=a.pop(),f=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(f)&&(m(d.target,b),f=0);e=Math.min(f,100);c=d.boundingClientRect;e!==g&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});g=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});
u&&r.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(E(a));u&&r.execAtEndOfThread(function(){t.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});q=!0},E=function(b){if(!f.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,
document:a.document})}catch(c){l=!0}b&&null!==b.bodyElement?z():b&&b.document?x.whenReady(z,b.document):l?n.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):z()},isReady:function(){return e!==k.NA},isStarted:function(){return q},getAdNodeDimensions:function(){var a;c&&(a=C({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},ra=function(){var a=!1;(function(){x.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},rc={name:"loopDelay",dependencies:[],creator:ra,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},md=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},nd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},fb=
function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,n.getAggregator().trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[od(),pd(),nd(),md()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},pd=function(){return{start:function(a){Hc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,
b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},od=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},qd=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},rd=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===
c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},sd=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(b){}}}},td=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=
r.getWindow(),b=b&&b.omid3p,c=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},ud=function(a,b,c){var d=n.getAggregator().request("omidAdSessionContext"),e;e=d.isHtml&&d.isWeb?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];
return{accepts:function(){var a=f.isDef(f(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},Ac=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},xc=function(a){var b=
!1,c=!1,d=!1,e=!1,g=n.getAggregator().request("omidAdSessionContext");g.queuedOutputItems=[];var q=new ea,l=n.getAggregator().request("omidAdSessionVerificationParameters"),p=r.getWindow(),k=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,v=!1,m=function(){if(b&&c&&(!e||d)){w.omidSupported=!0;g.hasOwnProperty("impressionType")&&g.queuedOutputItems.push({code:"oiet",value:g.impressionType});g.hasOwnProperty("creativeType")&&g.queuedOutputItems.push({code:"oct",
value:g.creativeType});var a=l&&l.IAS&&0<Object.keys(l.IAS).length;sa(a?l.IAS:l);v=!0}},z=function(a){if("sessionStart"===a.type){g.adSessionType=a.data.context.adSessionType;g.environment=a.data.context.environment;g.accessMode=a.data.context.accessMode;g.omidNativeInfo=a.data.context.omidNativeInfo;g.omidJsInfo=a.data.context.omidJsInfo;g.deviceInfo=a.data.context.deviceInfo;g.app=a.data.context.app;g.app&&"string"===typeof g.app.appId&&-1<g.app.appId.toLowerCase().indexOf("pandora")&&(g.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(g.contentUrl=a.data.contentUrl);g.isJavaScript="javascript"===g.adSessionType;g.isNative="native"===g.adSessionType||"javascript"===g.adSessionType;g.isLimitedSandbox="app"===g.environment?t.embedded:"full"!==a.data.context.accessMode;g.isHtml="html"===a.data.context.adSessionType;g.isWeb="web"===a.data.context.environment;l=a.data.verificationParameters;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||
"string"!==typeof a.data.creativeType||""===a.data.creativeType?g.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,g.useOMID13Logic=!0,g.element=a.data.context.videoElement||a.data.context.slotElement||null,g.queuedOutputItems.push({code:"ohand",value:"13"}),k.addEventListener("video",y),k.addEventListener("media",y));for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},
{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],d,f,p,q=0;q<c.length;q++)d=c[q].root,f=c[q].field,p=c[q].code,"object"===typeof g[d]&&"undefined"!==
typeof g[d][f]&&g.queuedOutputItems.push({code:p,value:g[d][f]});g.queuedOutputItems.push({code:"oast",value:g.adSessionType});g.queuedOutputItems.push({code:"oacm",value:g.accessMode});g.queuedOutputItems.push({code:"oenv",value:g.environment});g.hasOwnProperty("contentUrl")&&g.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(g.contentUrl||"")});b=!0;m()}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?
a.data.message:"NoMessage"),v?n.getAggregator().trigger("addOutputItem",{output:a},"oser"):g.queuedOutputItems.push({code:"oser",value:a}))},E=function(a){g.mediaType=a.data.mediaType;g.queuedOutputItems.push({code:"omtp",value:g.mediaType});"video"===a.data.mediaType&&(g.isVideo=!0);a.data.adView&&(a.data.viewport||g.isWeb)&&(g.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof g.geometryArrived&&q.checkForViewAttachmentBasedOnAdSessionType(g,
a.data.adView)&&(g.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!g.hasOwnProperty("impressionType")&&(g.impressionType=a.data.impressionType);g.isNativeVideo=g.isNative&&"video"===a.data.mediaType;g.isDisplay="display"===a.data.mediaType;c=!0;m()},y=function(a){a&&"start"===a.type?(g.videoStartArrived=!0,n.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(g.creativeType=a.data.creativeType),
a.data.hasOwnProperty("impressionType")&&(g.impressionType=a.data.impressionType),m())};return{start:function(){k.registerSessionObserver(z,"IAS");k.addEventListener("impression",E)}}},yc=function(){return{accepts:function(){return!0}}},Fa=function(){var a=n.getAggregator().request("omidAdSessionContext"),b=n.getAggregator().request("omidVerificationClient"),c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},zc=function(){return{start:function(){sa(m.contextNode&&(m.contextNode.dataset.iasParameters||
m.iasParameters))}}},vd=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},wd=function(a,b){var c,d=function(a){var d,f,l;try{d=a.eventData.percentageInView,f=c&&75<=d,l={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},
shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",l)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(g){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},xd=function(a,b){var c=[],d=(new Date).getTime(),e=0,g=0,q=!1,l=
new Ha,p=n.getAggregator().request("omidAdSessionContext"),u={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},v=function(){q=!0},m=function(a){try{var l="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),v="n",m=!1;switch(a.type){case "start":l="adVideoStart";
p.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");d=u;g=a.data.duration;1E3<g&&(g/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":l="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":l="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);m=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":l="pauseAd";break;case "resume":case "bufferFinish":l=
"resumeAd";break;case "skipped":l="adSkipped"}if(""!==l){var A=n.getAggregator().request("mScreenEvents");A&&(v=A.getCurrentLoc());c.push({t:u-d,tp:l,sl:v,ad_duration:g,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var r=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),l=-1!==r?r+1:void 0,u=[];!0===a.data.autoPlay?u.push("autoplayed"):u.push("clicktoplay");!0===a.data.skippable&&u.push("skippable");"fullscreen"===a.data.state&&u.push("fullscreen");var t=u.join(".");!0===
q?(f.isDef(l)&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",l),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",t)):(f.isDef(l)&&n.getAggregator().trigger("addOutputItem",{output:l},"vbp",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:g});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":
"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");f.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});m&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(x){__IntegralASDiagnosticCall("omidvideo",x,w.bootstrapper)}};return{start:function(){n.getAggregator().on("impressionsent",v);n.getAggregator().provide({omidVideoEventsString:u});
a.addEventListener("video",m);l.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},La=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},
getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},yd=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,g=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?d.isImmediate():!0},isMeasurable:function(){return g()?
e.isMeasurable():!1},isMediaType:function(a){return g()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){g()&&d.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},Fb=function(a,b,c){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());
(b=(new fa(b)).resolve())||n.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new zd(b);return new yd(b,c,d.isMobileAppEnvironment())}}},Gb=function(a){var b=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),b=new $(a),e=[];if(b.accepts()){var g=new Ea,f=new Ad,l=new Fa,p=n.getAggregator().request("omidAdSessionContext"),k=new Bd(a,new B),g=[{environment:g,measurementStrategy:new Cd(a,
new B)},{environment:l,measurementStrategy:new Dd(new Ma,r.getWindow(),new B)},{environment:f,measurementStrategy:new Na(new ga,r.getWindow(),new B)}],g=(g=(new fa(g)).resolve())?g.measurementStrategy:{},l=new Oa(new Pa(new U),new U,p.isHtml),p=new td(a,b,m.mode),f=new Qa(k,g,new B,l),b=new ud(a,b,m.mode),a=new Ra(k,g,new xd(a,new B),new B,l);e.push({environment:p,measurementStrategy:f});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),
d=new rd(b),e=[];if(d.accepts()){var g=new qd(b,d,m.mode),f=new sd(b,d,m.mode),l;l=new vd(b,new B);if(d.supportsAdContainerGeometry()){var p=new Ed,k=new Fd,v=new Na(new ga,r.getWindow(),new B),A=new Gd(b,new B),p=(p=(new fa([{environment:p,measurementStrategy:A},{environment:k,measurementStrategy:v}])).resolve())?p.measurementStrategy:{},k=new Oa(new Pa(new U),new U,k.accepts()),v=new Hd(b,new B),b=new Qa(v,p,new B,k);l=new Ra(v,p,l,new B,k)}else k=new wd(b,new B),b=new La(k,new B),l=new Sa(k,l,
new B);e.push({environment:g,measurementStrategy:b});e.push({environment:f,measurementStrategy:l});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Id(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Jd(r.getWindow(),e),g=new Kd(r.getWindow(),new B);e.accepts()?(d=new Ld(r.getWindow(),new B),d=new Sa(g,d,new B),d={environment:e,measurementStrategy:d}):
(e=new La(g,new B),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},fa=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},zd=function(a){var b=!1,c,d={winDimensions:C({scrX:0,scrY:0,width:0,height:0}),adDimensions:C({scrX:0,scrY:0,width:0,height:0}),containerDimensions:C({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,
posViewState:k.NA,adCompCount:1},e=function(a){return a?new C({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):C({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,
posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;f.isDef(d)&&""!==d&&(c.omidObstructions=d);a.isMeasurable&&b&&(b=!1,n.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=
c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Sa=function(a,b,c){var d=!1,e=!1,g=!1,q,l,p,u,v=function(){if(!f.isUndef(l)){var a=[],b,v;d?(e?(v=!1,b=100):(v=u,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(v=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));
g=!0;l.shouldDelegateToDomBasedViewability=v;l.percentageInView=b;l.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;l.outOfViewReason=a.join(".");q=l;c.trigger("measurementChanged",q)}},m=function(a){l=a;p=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;v()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);v()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(m);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return g}}},Jd=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(d){}}}},Ld=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Hd=function(a,b){var c=function(a){var c=new C(a.eventData.viewport||
{width:0,height:0}),f=new C(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),l=new C(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:l.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,
viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
Oa=function(a,b,c){function d(a,b,c){c=l(b,c);a=g(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),g=Math.min(a.y+a.height,b.y+b.height),e=e-c,g=g-d;return{x:c,y:d,width:0<e?e:0,height:0<g?g:0}},g=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},l=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};
return{calculateGeometricMeasurement:function(e,u){if(f.isDef(e)&&f.isDef(u)){var v=e.viewport,m=e.computedAdContainer,n=m.obstructions,t=e.omidObstructions,s=n&&0<n.length,N=e.originalAdContainer,I=u.adGeometry,w=u.adFound,x=e.detectionMethod,G=0,v={x:0,y:0,width:v.width,height:v.height},F=q(N,I),P=e.outOfViewReason,K=0,M=0,B=s||!1,K=1>=I.width*I.height;c&&K&&(w=!1,P=P||"",w||-1!==P.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(P=k.OUT_OF_VIEW_REASONS.GEOM+(""!==P?"."+P:"")));if(w&&0<e.percentageInView){K=
d(v,m,F);s?(G=l(m,F),G=g(v,m,G),G=q(m,G),G=a.calculateObstructedArea(G,n)):G=0;M=G;G=Math.round((K-M)/(F.width*F.height)*100);s&&0===M&&(B=!1);for(var I=(new C(F)).getRoundedGeometry(),w=B,O,s=0,M=b.getConfig(I).numberOfSlices,T=r.floor(I.height/M)||1,n=[],K=w?a.getObstructionStatusBySlice(M):[],Ta,s=0;s<M;s++)O=I.y+T*s,s==M-1&&(T=I.y+I.height-O),O={x:I.x,y:O,width:I.width,height:T},Ta=d(v,m,O),O=1==Ta/(O.width*O.height),n.push(O);if(w)for(m=r.min(K.length,M),s=0;s<m;s++)n[s]=n[s]&&!K[s];m=n}else m=
b.getConfig(I).defaultSliceArray;N={windowDimensions:v,containerDimensions:N,adDimensions:F,percentageInView:G,viewState:50<=G?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=G?"":P||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:B,sliceStatus:m};f.isDef(t)&&""!==t&&(N.omidObstructions=t);return N}}}},Ed=function(){return{accepts:function(){return t.isAvidNative()}}},Gd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new C({x:0,y:0,width:a?c.width:0,height:a?
c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Fd=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Qa=function(a,b,c,d){var e,g,q,l=function(){if(f.isDef(e)&&f.isDef(g)){var a=d.calculateGeometricMeasurement(e,g);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",
a)}},p=function(a){e=a;l()},u=function(a){g=a;l()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return q}}},Pa=
function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var g,q,l,p;q=e&&0<e.length;var k;if(q){k=Math.round(d.width);var m=Math.round(d.height);g=Array(k);for(l=0;l<k;l++)g[l]=Array(m);k={matrix:g,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:m}}else k={};g=k;m=k=0;if(q){for(;k<e.length;k++){q=e[k];l=m=g;var n=q;g=Math.max(l.x,n.x);q=Math.max(l.y,n.y);p=Math.min(l.x+l.width,n.x+n.width);n=Math.min(l.y+l.height,n.y+n.height);l=p-g;p=n-q;l=0<l?l:0;p=0<p?p:0;g-=
m.x;q-=m.y;l=g+l;p=q+p;for(g=Math.round(g);g<Math.round(l);g++)for(n=Math.round(q);n<Math.round(p);n++)void 0!==m.matrix[g]&&void 0===m.matrix[g][n]&&(m.matrix[g][n]=1,m.obscuredPixelCount+=1);g=m}m=g.obscuredPixelCount;k=g;if(f.isUndef(k.matrix)||0===k.matrix.length)c=[];else{q=0;p=!1;g=k.matrix[0].length;l=k.matrix.length;p=a.getConfig({height:g}).numberOfSlices;for(var n=r.floor(g/p)||1,s=[],t=0;t<g;t++){p=!1;for(var y=0;y<l;y++)if(1===k.matrix[y][t]){p=!0;break}q++;p&&(t+=n-q,q=n);if(q==n||t===
g-1)s.push(p),q=0}c=s}}else c=b;return m},getObstructionStatusBySlice:function(){return c}}},Bd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,g=new ea,q=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(l(d),d=null)):r.setTimeout(q,50)},l=function(a){if(a&&a.data&&a.data.adView){var l=a.data.adView,m=!!(l.measuringElement&&l.containerGeometry&&l.onScreenContainerGeometry),r=t.isOmidForWeb()&&
c.element&&c.element.parentNode?c.element.parentNode:null;if(c.delayingViewabilityEvents)d=a,e||(e=!0,q());else{var E=[];l.onScreenGeometry&&l.onScreenGeometry.obstructions&&0<l.onScreenGeometry.obstructions.length&&(m&&(l.onScreenContainerGeometry.obstructions=l.onScreenGeometry.obstructions),-1<l.reasons.indexOf("obstructed")&&100>l.percentageInView&&(l.onScreenGeometry.obstructions=l.onScreenGeometry.obstructions.slice(0,4),f(l.onScreenGeometry.obstructions).each(function(a,b){E.push(Math.round(b.x)+
"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));var y=r?r:l.geometry,r=r?r:l.onScreenGeometry,N=t.isOmidForWeb()?s.calcWinDims():{width:0,height:0},N=new C(a.data.viewport||N),y=new C(m?l.containerGeometry:y||{x:0,y:0,width:0,height:0}),m=new C(m?l.onScreenContainerGeometry:r||{x:0,y:0,width:0,height:0}),l={viewport:N.getRoundedGeometry(),originalAdContainer:y.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:l.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,
outOfViewReason:p(l.reasons),omidObstructions:E.join("_")};"undefined"===typeof c.geometryArrived&&g.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,l)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,
notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&l(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",l)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},Ea=function(){var a=n.getAggregator().request("omidAdSessionContext");
return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Cd=function(a,b){var c=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,g=new ea,f=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(l(d),d=null)):r.setTimeout(f,50)},l=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,f());else{var l=a.data.adView.geometry,m=a.data.adView.containerGeometry,r=!!l,t=
a.data.adView.measuringElement&&!!m,l=(new C({x:r&&t?l.x-m.x:0,y:r&&t?l.y-m.y:0,width:r?l.width:0,height:r?l.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&g.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:l,adFound:r})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&l(c.impressionViewabilityMeasurement);
a.addEventListener("geometryChange",l)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Ad=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Dd=function(a,b,c){var d,e=function(){var b=a.find(),e,l,p=!1;f.isDef(b)?(l=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,
height:0}),l=!1);if(b=l)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:l})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Ra=function(a,b,c,d,e){var g=!1,q=!1,l,p,m,v,r,t=function(){if(!(f.isUndef(p)||f.isUndef(m)||f.isUndef(v))){r=!0;var a=e.calculateGeometricMeasurement(p,m),b=g&&q,c=g&&50<=a.percentageInView,
n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:g,isVideoPlayingInFullscreen:b,isSoundOn:!0},t=a.omidObstructions;f.isDef(t)&&""!==t&&(n.omidObstructions=t);b&&(n.percentageInView=100);b||c?n.viewState=k.IN_VIEW:(n.viewState=k.OUT_OF_VIEW,n.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);
l=n;d.trigger("videoGeometryMeasurementChanged",l)}},s=function(a){p=a;t()},y=function(a){m=a;t()},N=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(g=!1);t()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);
a.start();b.addAdGeometryMeasurementChangedListener(y);b.start();c.addVideoPlaybackEventListener(N);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Na=function(a,b,c){var d,e=function(){var b=a.find(),e,l,p=!1;f.isDef(b)?(l=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=
!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),l=!1);if(b=l)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:l})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Id=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},
start:function(){}}},Kd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var g={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:g,adDimensions:g,containerDimensions:g,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(f){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},
g=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){g()}):g())},l=function(){c||q()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?n.getAggregator().trigger("exec","mraid.js",l):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",
a)}}},dc=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},rb=function(){var a=new Q({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);
return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},qb=function(a,b){var c,d,e;c=a.on("everySecond");var g=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var f=[2E3,5E3,15E3],l=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new Q({tiv:d}),
d=d[0]):g?(c=new Q({tiv:f}),d=f[0]):(c=new Q({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:l,isInViewIgnoringRender:function(a){return l(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},tb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],f=[1E3,5E3,
15E3],l=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:g}):d?new Q({tiv:l}):new Q({tiv:f});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},sb=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,
rts:{0:m._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},vb=function(a,b){var c,d,e,g=r.getMaxNumber(),q=b.isVideo(),l=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":
"percentInView",e,l,m,n=b.adDimensions.area();m=1===b.tabHidden;var u=r.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;l=b.ub||g;if(n>=e&&n<=l)return!0});m=!m&&u>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(m=!1);q&&(m=m&&b.isVideoPlaying,p&&(m=m&&b.isSoundOn));return m};c=new Q(a);d=a.qiv;(function(){e={};var a;f.isDef(m.rts)&&f.isDef(m.rts[l])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&
a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=m.rts[l])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:l,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},ub=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,
l=c.on("customMetric"),p=c.on("groupmCM"),m=function(a,b){var c,l,k,q,m;c=f(b.mediaTypes).contains(d);l=f(b.distributionChannels).contains(e);k=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(g):!0;q=L.contains(b.id,"fiv");m=L.contains(b.id,"groupmCM");q=!q;m&&(q=p);return q&&c&&l&&k};return{resolve:function(){var b=[],c;l&&k&&(c=f(a.customViewability).filter(m),f(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ha(c))});
else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Md;b.push(new Nd(c,parseInt(a[1].replace("%"))));b.push(new ha(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ha(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},Md=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},ha=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Nd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},va=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",g=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):
b.stop()};return{start:function(){a.addMeasurementChangedListener(g)}}},ec=function(a,b,c,d){var e,g,k,l,p,m,v=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},t=function(a){var n=0,v=1===a.tabHidden,t=a.isVideoPlaying,z=a.isSoundOn,y=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,v,t,y)?e[a].mark():e[a].stop();l[a]=e[a].getTotalTime()});s("slcVt",l);d&&(f(a.sliceStatus).each(function(a,b){r(b,v,t,y)&&z?g[a].mark():g[a].stop();p[a]=g[a].getTotalTime()}),
s("slcVtVol",p));m=d&&b&&b.shouldIncludeSound?p:l;a=f(m).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(n)},s=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},y=function(a){!e&&a.sliceStatus&&(e=[],g=[],l=[],p=[],f(a.sliceStatus).each(function(a){e.push(new W(1));l.push(0);d&&(g.push(new W(1)),p.push(0))}))},w=function(a){f.isUndef(a.sliceStatus)||(e||y(a),t(a))};return{start:function(){k=d?r:v;a.addMeasurementChangedListener(w)}}},
ta=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Zb=function(a,b,c,d,e,g,f,l,p,m){var n=!1,s=t.isVideo(),z=g.request("mobileApp"),E=X().applies(c,e),y=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||E,w=t.xDomainIframe&&!y,x=new Ca(10),C=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),g.trigger("measurable"),n=!0)};
g.on("delayedViewabilityReady",function(){B();C()});g.on("delayedViewabilityReadyCallOnly",C);var B=function(c){c=c||!1;try{x.start();var d,e;b.hasMeasurementStrategy()?e=(z.isMobileAppEnvironment()||t.isOmidNative())&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(l.collect(),c):(e=l.collect(),z.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):w&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),s&&!t.isAvid()&&m.setVideoSpecificScreenEventFields(e));
d=p.registerLocation(e);c||a.trigger("measurementChanged",e);x.stop();var n=r.round(x.getTime()/x.getCount());f.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(v){g.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:B,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),
a=a&&E,d=!d&&!e&&!a;return z.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){z.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},sc={name:"viewabilityLoopLifecycle",dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,g=Od(c),q=[new Pd,new Qd(g)],l=function(){return f(q).findFirst(function(a,e){return e.applies(d,
b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&n.getAggregator().trigger("adSessionComplete")},u=function(a){x.addEvent(w,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},v=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);n.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();
n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Lc(a.checkScreenLoc,g.getPollingFrequency()),(b=l())?b.start(e):e.start(!0),t.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):c?u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):u("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||v();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},
settings:{tier:k.TIERS.VIEWABILITY}},Od=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Qd=function(a){var b,c,d,e,g,f=function(l){d&&!g&&1>l?(g=!0,r.setTimeout(function(){f(l)},1E3)):(e=1>l,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},l=function(a){f(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");
d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);n.getAggregator().on("IOPivChange",f);n.getAggregator().on("newScreenEvent",l)}}},Pd=function(){var a,b,c,d=!1,e=function(g){if(c&&!d&&1>g)d=!0,r.setTimeout(function(){e(g)},1E3);else return 1>g?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a},g=function(){b.start(!0)};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=
a;b.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",g)}}},Yd=function(a,b,c,d,e,g){var q,l,p,u,v,A,z,E,y,N=s.getElementsWindow(b);s.getElementsDocument(b);n.getAggregator().provide("iframeCalculatorHelper",Rd(N));var I=Sd(b,d),B=k.AD_IDENTIFIER+"-"+m.asid,D=!1,G=C({}),F=t.isDeviceTypeGroupMobile(),P=t.usesGroupMCustomMetricMobilePassThru(),K,M=function(){if(!q)if(q=I.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&t.embedded){var a=q,e=(new C(b)).getRounded();try{a.set("width",
e.width),a.set("height",e.height)}catch(g){n.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},H=function(){var b,d=t.xDomainIframe&&D;b=F&&D&&p.isReady();b=d||b;d=I.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?l=p.getPiv():f.isUndef(l)&&(b=!F&&(t.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),E=M(),z=new C(s.calcWinDims()),A=new C(b?s.calcMonDims():{}),y=
d?I.getClippedDims():G,l=a.calcPercentInView(E,z,A,y));return l},O=function(){return a.calcInitialViewState(H())},T=function(){return b===w?!1:M().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),g=b===d,f=e.body,l=n.getAggregator(),m=new X,q=l.request("browser"),s=l.request("features"),l=l.request("context"),A=!t.xDomainIframe,e=g&&f?e.body:b;K=t.friendlyIframe?d.frameElement:e;x.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});x.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});
m.applies(q,s,l)?(p=ld(b,A),p.start(),D=!0,P&&c!==k.DETECTION_METHODS.AD_PLACEHOLDER&&(d=new Td(M().getRounded()),m=new Ud,m=new Vd(p.getObservedNode(),m),u=new Wd(d.getSlices(),m))):P&&(v=new Xd(a))})();return{mark:function(){s.setAttributeOf(K,B,"")},cleanup:function(){s.removeAttributeOf(K,B)},isNode:function(a){return b===a},isHidden:T,isObstructed:function(){return!1},getDims:M,getPercentInView:H,getLocationState:O,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:O()},getDetectionMethod:function(){return c},
getContainerDims:function(){return I.allowsOptimization?q:C(d)},refresh:function(){y=E=z=A=l=q=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?a=u.getSliceStatus():t.friendly&&v&&f.isDef(E)&&(a=v.getSliceStatus(E,z,A,y));return a}}},Zd=function(a,b){var c=[],d,e=f([]),g=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},
m=function(l,p,m,q){var u=g()||0===c.length;l=Yd(a,l,p,m,b,q);g()&&(m=c.shift(),e=f(c),m.cleanup(),d=void 0);c.push(l);e=f(c);u&&l.mark();u&&p!==k.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",l)},l=function(){if(d)return d;var a,b=!1,c=0,g=0;e.each(function(d,e){var f;f=e.getDims();f.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,f=f.area(),c+=f,g+=a/100*f)});return d={totalArea:c,totalInView:g,hasMeasurement:b}},p=function(a){var b=n.getAggregator().request("adRenderStatus");
return!a&&!b},u=function(a){var b;b=l();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=0;return b},v=function(c){var d=b.bootstrapOn("mobOrTab"),d=l().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!t.isVideo();return a.calcInitialViewState(u(c),d)},s=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},z=function(a){return function(){return c[0]&&c[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,
b){-1===s(b)&&m(b,k.DETECTION_METHODS.MUTATION)})});n.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=s(b);-1<d&&c.splice(d,1)})});return{getDims:z("getDims"),isObstructed:z("isObstructed"),getDetectionMethod:z("getDetectionMethod"),getContainerDims:z("getContainerDims"),getViewState:v,getViewStateIgnoringRender:function(){return v(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:z("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},
refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(a){var b,e=[],g=c[0],f=k.OUT_OF_VIEW_REASONS;g&&(b=d||v(),p(a)?e.push(f.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(f.GEOM),g.isHidden()&&e.push(f.HIDDEN),g.isObstructed()&&e.push(f.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:z("getSliceStatus")}},$d=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=
new w.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(J.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},
r.getDoc())}},he=function(a,b){var c=[ae(),be()],d=[Ma(),ga(),ce(),de(),ee(),fe(),ge()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},de=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||da();var c=s.crossQuerySelector(da().getCssSelector(),
!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ie=function(a,b){var c,d=s.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},Ma=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.OMID,isApplicable:function(){return t.isOmidForWeb()&&!t.isOmidNative()},find:function(){return a.element},getAdContainer:function(){return a.element.parentNode},
allowForAdContainerChange:!0}},fe=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},je=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return L.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,
isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},ke=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&L.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+
"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},le=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&
C(k).isOneByOne(),m=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=r.getDoc().scripts;return f(b).findFirst(function(b,c){return f(a).findFirst(function(a,b){return L.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&m&&c&&k&&d()&&e()},getCssSelector:e}},da=function(){var a,b=n.getAggregator().request("features");a||(a=[le(),ke(),je()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,
b)})},ee=function(){var a,b=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Ga().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},
Ga=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&L.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ga=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&
!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},be=function(){var a,b;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var c=f.isFunction(m.contextNode.getAttribute)&&m.contextNode.getAttribute("data-ias-container");b=c&&"#"+c||m._cl_adpath;if(c=s.crossQuerySelector(b))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},ae=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ge=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,
isApplicable:function(){return!0},find:ie,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ce=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Sd=function(a,b){var c,d;c=[me(),ne(),oe()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=pe();c.isApplicable(b)&&(c.setBaseStrategy(d),
d=c);return d},oe=function(){return{calcDims:function(a,b){var c,d,e=new C(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},ne=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,
getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},me=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new C(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,
r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},pe=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=n.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Rd=function(a){var b,c,d,e=n.getAggregator().request("features"),
g=n.getAggregator().request("browser");a=a||r.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,g=!1,f=0,l=e.length;f<l;f++)if(e[f]==b){d=e[f];g=!0;break}if(g){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&m(b.parent,c)}return c},l=function(){var l,
u={};try{var v,A,z,w,y,x,B=r.getMaxNumber(),C=r.getMaxNumber();t.friendly?(v=m(),z=v.left,w=v.top,B=v.width,C=v.height,A=s.browserWindowPosition(),y=A.scrX+z,x=A.scrY+w):e.on("rattie")&&g.browserIs(k.BROWSERS.IE)?(d=d||n.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),y=c.scrX,x=c.scrY):f.isDef(a.mozInnerScreenX)&&(y=r.round(a.mozInnerScreenX),x=r.round(a.mozInnerScreenY));var u={scrX:y,scrY:x,iFrameClippingWidth:B,iFrameClippingHeight:C},D,G,F=b||s.getIeDimObj(a);b=F;
f.isDef(a.innerWidth)?(D=a.innerWidth,G=a.innerHeight):F&&f.isDef(F.clientWidth)?(D=F.clientWidth,G=F.clientHeight,0===D&&0<F.offsetWidth&&(D=F.offsetWidth),0===G&&0<F.offsetHeight&&(G=F.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(D=a.frameElement.clientWidth,G=a.frameElement.clientHeight);l=D;u.height=G;u.width=l}catch(J){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new C(l())},getClippedDims:function(){var a=
l();return new C({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Tb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new qe:new re(a,b,c)}}},re=function(a,b,c){var d,e=n.getAggregator().request("browser"),g=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,q=Zd(b,c),l=function(){var a,b,l;d=d||he(t,c);a=d.find();!a&&d.usePlaceholder?(p(),t.isDeviceTypeGroupMobile()&&e.hasMutationObserver()&&r.getMutationObserver(u).observe(g,
{childList:!0})):a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),l=d.allowForAdContainerChange,f(a).each(function(a,c){q.addAdComponent(c,f.resolve(d.detectionMethod),b,l)}))},p=function(){var a;q.hasAd()||(a=s.getPlaceholderSpan(),g.insertBefore(a,m.contextNode.nextSibling),q.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))},u=function(a,b){var c=!1;f(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())};
$d(a);return{find:function(){q.isUsingPlaceholder()||!q.hasAd()?l():q.refresh();return q},getDetectionMethod:function(){}}},qe=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Bb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===f().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==f().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},f=function(){var a,
b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:f,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},Ab=function(a){var b=new se,c=new te,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",g=n.getAggregator().request("omidAdSessionContext"),f=t.isDomless()||g&&"app"===g.environment,g=g&&"web"===g.environment;try{var l;if(!(l=f)){var m;if(!(m=t.isAvid())){var u;if(!(u=t.isAvidNative())){var r;if(r=!g){var s;if(s=a.bootstrapOn("mobOrTab")){var z;if(z=a.bootstrapOn("mobAppWebview")){var f="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),
w,g=!1;for(w=0;w<f.length;w++)if(-1<d.indexOf(f[w].toLowerCase())){g=!0;break}z=!g}s=z}r=s}u=r}m=u}l=m}if(l&&(e=b.detect(),b.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)ia[ia.length-1].detectionRules.userAgent[0]="/";c.detect();n.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(y){n.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},ue={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(g){}try{c.push(J.referrer)}catch(k){}}try{"jsi"!==m.mode&&c.push(w.location.href)}catch(l){}try{c.push(m.jsref)}catch(n){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,g,l,k="mobfox"===d?c:[b];for(l=0;l<k.length;l++){g=k[l];var m="string"===typeof d?[d]:d;if(f(m).isArray()&&(m[0].substring(0,4),m))for(var n=0;n<m.length&&(e=-1<g.indexOf(m[n]),!1!==e);n++);if(e)break}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==
d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(L.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ua=function(){var a=function(a,c){var d,e=ue[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},
ve=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",
".android"],["carsales",".ios"]]}}],se=function(){var a,b=function(a,b){var e,g=Ua().process(b.detectionRules);g&&(e=g+"_"+b.STRINGIFIED_APPDET);return e};return{detect:function(){a=f(ve).map(b);a=0<a.length?a[0]:"";""===a&&m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==a&&""!==a}}},te=function(){var a=[],b=[],c=function(b,c){var g,f=Ua().process(c.detectionRules);f&&(a.push(c.STRINGIFIED_SDK+
"*"+f),g=c);return g};return{detect:function(){b=f(ia).map(c);0<b.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1===b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},ia=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},
{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,
detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Td=function(a){var b=
[];(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var c=Math.floor(a.height),d=c%10,c=(c-d)/10,e,g=0;10>g;g++)e=e||0,e={geometry:new V(0,a.width,e,e+(g<d?c+1:c)),percentageInViewContribution:10,isInView:!1},b.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return b}}},U=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Wd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var g=e.value(),f=Math.max(d.leftX,g.leftX),l=Math.min(d.rightX,g.rightX),k=Math.max(d.topY,g.topY),g=Math.min(d.bottomY,g.bottomY);c.push(new V(f,l,k,g))}});return c},e=function(a,b){var c=0,
e=d(a,b),g;f(e).each(function(a,b){g=b.value();c+=g.area});return c},g=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=g();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},Xd=function(a){var b=U();return{getSliceStatus:function(c,d,e,g){var f,l=[];f=c.getRounded();c=f.height;var k=f.scrY,m=new C({scrX:f.scrX,width:f.width}),n=b.getConfig(f).numberOfSlices;m.set("height",r.floor(c/n));for(var t=0;t<n;t++)m.set("scrY",r.ceil(k+c/n*t)),f=100===a.calcPercentInView(m,
d,e,g),l.push(f);return l}}},V=function(a,b,c,d){var e=Math.ceil(a),g=Math.ceil(b),f=Math.ceil(c),l=Math.ceil(d),k=g-e,m=l-f,n=k*m,r=function(){return{leftX:e,rightX:g,topY:f,bottomY:l,width:k,height:m,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},Ud=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},Vd=function(a,b){var c,d=[],e=[],g=function(){f(d).each(function(a,
b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,g=d.topY;-1===e.indexOf(g)&&e.push(g);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,n=d.left-f.left,f=d.top-f.top,f=new V(n,n+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new V(0,b,f[d],f[d+1]));g();
1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ea=function(){var a=function(a){var b=!1;we.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return b.omidNativeInfo&&b.omidNativeInfo.partnerName&&a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&
a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},we=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],xe=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",
function(a){var b=n.getAggregator().request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},ye=function(a,b){var c,d,e,g,k;e=n.getAggregator().request("videoTranslator").translate(a.messageType);g=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(g);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&
"normal"===g.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(g)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?n.getAggregator().persistentTrigger(e,g,k):n.getAggregator().trigger(e,g,k)},toString:function(){return"{"+f(d).toParams()+
"}"}}).mixin(d)},ze=function(){var a=[];return{registerEvent:function(b,c,d){b=new ye(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Ae=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;d()},m=
function(a){a=(new Va).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){n.getAggregator().on({adVideoStart:g,adImpression:g,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=n.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Be=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},Va=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},xb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,g,q,l,p=[],u=k.OUT_OF_VIEW,v=!1,s=!1,w=!1,E=!0,y=new ze,B=Ae(),C=new xe,D=new Va,J=new Ha,G=function(b){var d;v=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=y.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(s=!0,u=w?k.IN_VIEW:!1):d.indicatesNotPlaying()?(s=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,u=s?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,u=s?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(D)),0<b?E=!0:0===b&&(E=!1));p.push(d);l&&L();return d},F=function(b){var c,g,l=xa().wrapToGlobal(G),k=function(a){f.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[e]||
b.getIasVidBridgeVersion,c=f.isFunction(g)&&"2"===g.call(b)?unescape(b[d].call(b,a,l)):unescape(b[d].call(b,a)),v=!0,k(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,m)}},H=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};g||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",
{},m));return g},K=function(){var a=H();a&&!v&&F(a);return a},M=function(a){a=D.getVolumeFromContext(a);E=f.isDef(a)?0<a:!1},L=function(){J.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",b)))});p=[];l=!0};(function(){x.addEvent(r.getWindow(),
"message",function(a){G(a)});n.getAggregator().on({volumeChanged:M});n.getAggregator().provide({videoEventsString:y,videoVersion:function(){var a,b=K();try{a=b.getVersion()}catch(c){a=-1,n.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new Be},adNode:K});K();C.listenForResult();B.isApplicable(t)&&B.start(c)})();return{findAdNode:K,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return v},triggerInitializationEvents:L,
setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=E;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:u;a.isVideoPlaying=u===k.IN_VIEW}w&&s&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Ce=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},
eb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},g=function(){b=new Da;d=0;e(!0);b.start()},m=function(d,e,l,k){d=c[d];k?(f.isDef(d[e])||(d[e]=[]),d[e].push(l)):d[e]=l;b&&b.isActive()||g();a=!0},l=function(c,d,e){n.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||g();a=!0},p=function(b){f(c).each(function(d,e){var g=c[d],l={type:b,oneTime:!0,minDt:!0,asION:!0};f(g).isEmpty()||
(n.getAggregator().trigger("addOutputItem",{output:g},d,l),c[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});n.getAggregator().on("addThrottledProp",m);n.getAggregator().on("addThrottledOutputItem",l)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},kb=function(){var a={},b=function(b){a[b]||(a[b]=new Ca(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();n.getAggregator().trigger("addThrottledProp",
"im",a,c.getTime())};return{start:function(){n.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},De=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Rb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),n.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},g=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===
b}}},Sb=function(){function a(){}a.build=function(){var a=[];a.push(new Z(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=n.getAggregator().request("vc");var d={jv3:Wa,av3:Wa,jvw:De,avw:Ce};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Wa=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",
R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(w,"load",function(){n.getAggregator().trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Da;a.onTick({4:function(){n.getAggregator().trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});a.start()}},H={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=f.frames[b].parent)}catch(l){}if(f===
e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=H.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),x.removeEvent(r.getWindow(),"message",d))}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+m.asid},send:function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},hc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&
H.send(b,f(a).toION())}var b="ccd";(function(){var b=H.isFrameworkAvailable("__uspapi","__uspapiLocator");H.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:H.getCallId()}},e=H.getMessageHandler("__uspapiReturn",a),x.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},gc={name:"GDPRConsentDetector",dependencies:[],
creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};H.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=H.isFrameworkAvailable("__cmp","__cmpLocator");H.send("gca",!!c);if(c){var e,g;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",
parameter:[b],callId:H.getCallId()}},g=H.getMessageHandler("__cmpReturn",a),x.addEvent(r.getWindow(),"message",g),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},ic={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};
H.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=H.isFrameworkAvailable("__tcfapi","__tcfapiLocator");H.send("gca2",!!c);if(c){var e,g;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:H.getCallId(),version:2}},g=H.getMessageHandler("__tcfapiReturn",a),x.addEvent(r.getWindow(),"message",g),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},oc={name:"postMessageDetector",
dependencies:[],creator:function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},pc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},cb=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){n.getAggregator().trigger("notify",b)})},e=function(){var e;e=new S(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();n.getAggregator().trigger("jsonp",e,d,!0);n.getAggregator().trigger("updateDtCount")};return{start:function(){n.getAggregator().on("sendCookie",
e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},db=function(a,b,c,d,e,f,q){var l=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var r,s=d.baseUrl,w,x,B=f.getDocumentMode();"number"===typeof B?(x=2E3,8===B?x=4E3:8<B&&(x=8E3)):x=l(m.sp_imp_maxLength,2E3);w=x;if(t.integratedBlockingApplies(s)){x=s;var y=n.getAggregator().request("mobileApp"),C=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),
D=m.contextNode.getAttribute("data-ias-container"),J=m.contextNode.getAttribute("data-ias-callback"),y=x+"adContainerId="+D+"&cbFunctionName="+J,y=C?y.replace("monitoring","blocking"):y.replace("skeleton.js",m.integration+".js"),H=m.protocol+":"+m.staticServer+m.integration+"a.js",G=m.protocol+":"+m.staticServer+m.integration+".js",s=y+"&true_pb="+encodeURIComponent(m.passback)+(C?"&redirectUrl="+encodeURIComponent(G):"")+(C?"&passback=":"&adsafe_pb=")+encodeURIComponent(H)+"&"}var C=s=s.replace(k.UNIQUE_ID_TOKEN,
m.asid),F=s.length,L,K,M=l(m.sp_imp_jsInfo_minLength,0),H="";try{L=w-F-M,0<L&&(K=Ee(p,L,14,b.on("partialUrls")),H+=K.join("&"))}catch(Q){a.add(k.ERROR_CODES.IMPRESSION_URLS)}s=C+H;p=s+="&"===s.slice(-1)?"":"&";var O,F="";try{O=w-s.length,F+=Fe(O,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(S){a.add(k.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+a.toString()}s=p+F;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);r=s;m.impUrl=r;d.sendImpression(r);n.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",
R,m)}}}},Ia=function(){try{var a=m.perf,b,c,d,e,g,q;a.markEnd("ec");b=a.getEnd("ec");c=w.performance&&"function"===typeof w.performance.getEntriesByName&&w.performance.getEntriesByName(m.impUrl)[0];var l=a.getStart("bd"),p=a.getStart(pa);d=m.jsDoSplit?Math.round(b-l):Math.round(b-p);e=Math.round(c&&c.duration);g=Math.round(b-(c&&c.responseEnd));f.isNumeric(d)&&f.isNumeric(e)&&f.isNumeric(g)&&(q={ttecl:d,ecd:e,tsecr:g},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"imprf",f(q).toION()))}catch(r){n.getAggregator().trigger("error",
k.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Fe=function(a,b,c,d,e,g,q,l){return function(c){var d=c.primary.join(","),g=b,k=0,l=function(a){if(a)return","+a};g.length+d.length+5<=a&&(g+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=l(c):k+=1}));return g+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=l.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=l.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=l.checkScreenLoc(!0));
l.isImmediatelyMeasurable()||l.requiresDelayedViewabilityEvent();a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(s.push("abi:"+b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=Ge(a,c,d,e,g,q,l);n.getAggregator().trigger("eligiblerender");return{primary:s,secondary:a}}())},Ge=function(a,b,c,d,e,g,q){var l=[],p=n.getAggregator().request("mPage");l.push("mn:"+
m.mn);l.push("pt:"+function(){var b=q.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());l.push(f(g.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&l.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&l.push(a+":"+b.output())});b.toString()&&l.push("e:"+b.toString());l.push(c.output());l.push("tt:"+m.mode);l.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));l.push("et:"+
(r.now()-m.birthdate));m.perf.mark("si");c.on("swapids")?l.push("oid:"+m.oid):l.push("uid:"+d.unq);l.push("v:19.8.157");l.push("sp:"+(m.isSplitMode?1:0));l.push("fwm:"+("true"===m.fwMonitoring?1:0));c.on("resolution")&&(l.push("wr:"+f(s.windowSize()).toArray().join(".")),l.push("sr:"+f(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||
""}();"NotFound"!==b&&l.push("x_xpc:"+b);return l},Ee=function(a,b,c,d){var e,g=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,m;m=24+g.join("&").length+k.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=g.join("&").length,f.length+k<=
b&&g.push(f)}));return g},ab=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=He(a.navigator.plugins);var b=a.hash(),c=b.join(".");n.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Ke=function(a,b){return{start:function(){try{var c=Ie(),d=c.getMethodName(a),
e=new S(b.getEnabledScriptUrl(a)),f=Je,m=r.getDoc();(new f(m.body||m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},Ie=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:k,features:b,context:t,dtBaseURL:m.dtBaseURL,spg:Xa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+
a}}},ib=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Ke(d,b).start()})}}},He=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=L.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Je=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();
c.setAttribute("src","about:blank");c.setAttribute("class","_ntnrjf7826-hj");(a||m.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);
return{getWindow:function(){return c.contentWindow}}},Xa=function(a){var b=new Ba;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==m.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",
function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()},uc={name:"spg",dependencies:["spgCache"],creator:Xa,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},tc={name:"spgCache",dependencies:[],creator:function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},g=function(){c||(c=
!0,f(b).each(function(a,b){n.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&g()},isFull:d,sendToOtherTags:function(){(new ca).send({scaInfoOriginatorASID:m.asid,cache:b})}}},settings:{}};try{fc()}catch(Le){__IntegralASDiagnosticCall("main",Le,m)}};
try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.isSingleIASInstance&&top.iasAdSlots?top.iasAdSlots.forEach(function(w){__IntegralASConfig._cl_adpath=w.adSelector;__IntegralASConfig.iasParameters=w.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}):__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}catch(w){__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)}})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",
err$$10,__IntegralASConfig)};
