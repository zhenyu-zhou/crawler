var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.110',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.110.js"},
		protocol: 'https',
		jsref: "",
		asid: "59b5e669-d99c-11ea-8869-029b57fdf1a6",
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
		mn: "app12or",
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
__IntegralASConfig.initialize=function(m,w,K){function Sa(){var g,a,b;m.perf.markStart(ma);l.startSystem();y=l.getAggregator();y.provide({omidAdSessionContext:{}});y.provide({omidAdSessionVerificationParameters:{}});g=Ta();a=na();b=(new Ua).createInstance(g,a);y.provide({mErrors:g,mJsonp:a,mComm:b});g=__IASOmidVerificationClient;y.provide({omidVerificationClient:g});y.once("callContinueMain",function(){var a,b;m.perf.markStart(oa);b=X.instantiateModules();a=X.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,s,b.renderDetector);X.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);X.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,s);m.perf.markEnd(oa)});y.on("tryToCallContinueMain",function(a){m.isResolved?y.trigger("callContinueMain"):y.trigger("requestBootstrapper",
a)});y.once("requestBootstrapper",function(a){var b=m.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,h=a&&a.sca,u=a&&a.xsca;e&&y.trigger("jsonp",b+"/jsconfig"+e+(m.adSessionId?"&adSessionId="+m.adSessionId:""),function(a){Object.assign(m,"string"===typeof a?JSON.parse(a):a);m.isResolved=!0;m.sp_cdnScripts={sca:h,xsca:u};y.trigger("callContinueMain")},!1,"cbName")});g=[{environment:new ba(g),adSessionReadyStrategy:new Va(g)},{environment:new Wa,
adSessionReadyStrategy:new Xa}];(new Ya(g)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(ma)}var y,X=function(){function g(a){var b=new Za(a,s),c=new $a,d=new ab(a,s),p=bb(a,s),r=(new cb(m,s,a)).resolve(),g=[b],E=[];p.applies()&&g.push(p);d.applies()&&g.push(d);c.applies(a,s)&&g.push(c);f(r).each(function(a,b){g.push(new db(b,s));E.push(b.id)});0<E.length&&(y.trigger("addOutputItem",{output:E.join(".")},"scm",{type:k.IMPRESSION_EVENT}),y.trigger("addOutputItem",{output:E},"metricIdList",
{type:k.DT_CODES.UNLOAD,asION:!0}));return g}function a(a,b,c,d){var p=g(a);y.provide("viewabilityDefinitions",p);return f(p).map(function(r,p){var g,f,l;g=new pa(p,b);var L=(new eb(c,a,p.rts)).getCallbacks(),A=new qa(d.createPingJobs(p.type,p.timeInViewThresholds,L,p.metricId));p.sendOtherwiseInViewSignal&&(l=new pa(p,b,p.sendOtherwiseInViewSignal),f=new qa(d.createPingJobs(p.type,p.timeInViewThresholds,L,p.metricId,p.sendOtherwiseInViewSignal)));p.rtsCallbacks=L;p.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?
g=new fb(g,p,A,s.isVideo()):(g=new ra(g,new Y(p.minUnit),A),p.sendOtherwiseInViewSignal&&(f=new ra(l,new Y(p.minUnit),f,p.sendOtherwiseInViewSignal),f.start()));g.start();return g})}function b(a,b){var c=(new ca).accepts(),c=!s.isAvid()&&!c&&!s.isInMobiMraidVideo();return s.isVideo()&&c?gb(m.videoId,a,b):{}}function c(a,b,c,d,p,r,g,E,v,G){try{m.perf.markStart(sa),m.tpiLookupURL&&hb(g,E).init(m.tpiLookupURL),s.isDomless()||G.isStarted()&&G.sendOriginList(),l.runAll(),q.execAtEndOfThread(function(){var r;
try{m.perf.markStart(ta);r={output:(new Date).getTime()-p};a.addItem(r,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});m.perf.markEnd(ta);var g,x;m.isSplitMode&&(x=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(ib,x));m.impUrl&&m.perf.markResource(jb,m.impUrl);g=m.perf.getData();y.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(v){d.add(k.ERROR_CODES.ADTALK_DELAY)}}),
m.perf.markEnd(sa)}catch(L){d.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,r,g,f,v){var k;"true"!==m.minimizeCalls&&(k=(new Date).getTime(),q.execAtEndOfThread(function(){c(a,b,d,n,k,p,r,g,f,v)}))}return{instantiateModules:function(){var c,d,u,n,p,r,g,f,v={};m.perf.markStart(ua);y=l.getAggregator();v.mFeatures=y.provide("features",kb());y.provide("mobileApp",function(){return c=c||new lb(v.mFeatures)});y.provide("avidJsClient",function(){return d=d||new mb(q.getWindow())});y.provide("context",
s);v.mBrowser=y.provide("browser",(new nb).createInstance());v.mErrors=y.request("mErrors");v.mIds=y.provide("ids",ob());v.iOutput=new pb(y);y.request("mJsonp");v.mComm=y.request("mComm");v.viewabilityMeasurement=(new qb(new rb(v.mIds),v.mFeatures,v.mBrowser)).create();if((n=y.request("omidAdSessionContext"))&&n.queuedOutputItems)for(r=0;r<n.queuedOutputItems.length;r++)y.trigger("addOutputItem",{output:n.queuedOutputItems[r].value},n.queuedOutputItems[r].code,{type:"impression"});v.mFeatures.on("swapids")&&
(m.oid=m.asid,m.asid=v.mIds.unq);v.mAdTalk=(new sb).createInstance(v.mFeatures);u=tb();n=ub(y);p=y.provide("mPage",(new vb).createInstance());v.mAncestorOrigins=wb();v.mPageUrls=y.provide("pageUrls",(new xb).createInstance(v.mAncestorOrigins,q));r=y.provide("mScreenEvents",yb());y.provide("ieXDomainViewability",zb(v.mBrowser));g=Ab(v.mBrowser);f=b(v.mFeatures,r);v.mVideo=y.provide("video",f);Bb(Cb.build());g=(new Db).createInstance(v.mErrors,g,v.mFeatures);p=(new Eb).createInstance(g,v.mErrors,p,
s);f=y.provide("jobFactory",Fb());v.mDataTransfer=Gb(g,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,r,u);u=Hb(v.mErrors,v.mFeatures,y,n);v.mMode=Ib(u,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=y.provide("viewability",Jb(new D,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,y,v.iOutput,p,r,v.mVideo));a(v.mFeatures,v.mViewability,n,f);v.loopDelay=va();v.renderDetector=Kb();v.mDataTransfer.setViewabilityMod(v.mViewability);m.perf.markEnd(ua);return v},preImpression:function(a,
b,c,d,p,r,g,f,v,l,L){var A,H,q,s,t;m.perf.markStart(wa);m.b11="1"===m.adHeight&&"1"===m.adWidth?"true":"false";m.cnod=m.contextNode?"true":"false";try{c.isApplicable(l)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(A=c.getIdMap())&&d.addItem(A,"idMap"))}catch(da){p.add(k.ERROR_CODES.ADTALK_GENERAL)}try{r.isApplicable(g,v,l)&&r.start(),t=f.detectTopURL(),v.on("exch")&&(H=(new Lb).createInstance(p,d),H.parse(t)),q=Mb(),q.isApplicable(v)&&
q.start(v),l.usesGroupMCustomMetric()&&Nb(),s=Ob(),s.isApplicable(v)&&(s.start(),y.trigger("sendCookie")),L.start()}catch(Pb){p.add(k.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(wa);return t},sendImpression:function(a,b,c,d,p,r,g,k,v){try{Qb(a,b,c,d,p,r,g).send(k),f.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(l){__IntegralASDiagnosticCall("impsend",l,m)}},postImpression:function(a,b,c,n,p,r,g,f,v,G,L,A,H){try{m.perf.markStart(xa);var q=Rb();q.start();q.addFieldTypes([k.DT_SLOT.IM,
k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var s=Sb(a,b,c);s.isApplicable(n)&&s.start();var t;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(t=Tb(p,r,g,b,f),t.init());d(f,v,G,g,n,p,r,b,A);L&&L.start&&L.start();H.isDomless()||Ub().start(["sca","xsca","rsrch"],n);Vb();l.runTier(k.TIERS.VIEWABILITY);var da=Wb();da.isApplicable(n)&&(da.start(),R.recordBlockingTime(),m.perf.mark(Xb),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());m.perf.markEnd(xa)}catch(Pb){g.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(g){return new C(g)},C=function(g){this.iterable=g};C.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};C.prototype.isArray=function(){return this.iterable instanceof Array};C.prototype.isEmpty=function(g){return 0===this.keys(g).length};C.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};C.prototype.map=
function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};C.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};C.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};C.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};C.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};C.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};C.prototype.mapToObj=
function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};C.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};C.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};C.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};C.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};C.prototype.keys=function(g){var a=
[];this.each(function(b){a.push(b)},g);return a};C.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};C.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};C.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};C.prototype.toArray=function(){return this.map(function(g,a){return a})};C.prototype.JSONStringify=function(){var g,
a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};C.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<
g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);
return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||w;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=
a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var l=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,r){r=r||{};var x,k,v=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},l=function(){if(!x){var a=[];x=!0;v(["features","browser","context"]);r.emits&&
(c.events=new D);if(!r.applies||r.applies.apply(r,b))k=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=r.tier;f.isDef(b)&&(a[b]=a[b]||new ea,a[b].push(l))})();g.provide(d,function(){var a;l();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new ya;f(c).each(function(a,b){e.apply({},
b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},
DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",
HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},ma="mf",oa="cm",ua="in",wa="pr",xa="po",Xb="bl",sa="lo",ta="lt",ib="md",jb="id",Yb=function(){var g,a,b=0,c=["STYLE","SCRIPT","HEAD","META"],d=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),e=function(a){var b=t.getNodeName(a);a=h(a)||"IFRAME"===b;return b?a:!1},h=function(a){var b=t.getNodeName(a),c=a&&a.children&&0===a.children.length&&a.innerText&&0<a.innerText.length;return b?-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase())||t.hasBackgroundImage(a)||
c:!1},u=function(a,b){var c;try{c=a.document}catch(d){c=m.contextNode.ownerDocument}return S(c,b,e)},n=function(a){var b=[],e=(a=a&&a.getElementsByTagName&&a.getElementsByTagName("*"))&&a.length,h,u;if(a)for(var p=0;p<e;p++)u=(h=a[p])&&h.nodeName&&h.nodeName.toUpperCase(),!h.children||0!==h.children.length||f(d).contains(u)||f(c).contains(u)||f(b).contains(u)||b.push(u);return d.concat(b)},p=function(c){var d;g=g||m.contextNode.parentNode;if(c)if(t.isNodeXDomainIframe(c))d=c;else if(h(c))d=c;else{g=
c;d=p;var f;if((m.useFIF&&s.friendlyIframe||s.isSpecifiedAd())&&3>b)a:{var v=c,G,L,A,H,T=t.getNodeName(v);c=q.getTop()&&q.getTop().document;try{A=n(v);if(c&&v===c.body){f=null;break a}t.isWindow(v)?(G=u(v,A),G||(H="["+k.AD_IDENTIFIER+"-"+m.asid+"]",L=t.crossQuerySelector(H),a=L.parentNode,G=S(a,A,e))):("IFRAME"===T?v=v.contentWindow.document:a=v,A=n(v),G=S(v,A,e));void 0===G&&a&&a.parentNode&&(a=G=a.parentNode,b+=1)}catch(F){l.getAggregator().trigger("renderdiag",F)}f=G}else{f=c;G=t.getNodeName(f);
try{T=n(f),t.isWindow(f)?v=u(f,T):("IFRAME"===G&&(f=f.contentWindow.document,T=n(f)),v=S(f,T,e))}catch(P){l.getAggregator().trigger("renderdiag",P)}f=v}d=d(f)}else d=null;return d};return{find:p,getClosestContainerName:function(){return t.getNodeName(g)}}},Kb=function(){var g,a=!1,b=!1,c={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},d={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},e=l.getAggregator().request("omidAdSessionContext"),h=function(){a=!0},u=function(a){a&&
(a.status=k.RENDER.STATUS.DETECTED);l.getAggregator().trigger("adRendered")},n=function(){var a=!1;s.isOmid()&&e&&e.useOMID13Logic&&(a=!0);return a},p=function(a){var b={},c=q.getDoc(),d=function(e){var h=e&&e.type;if("readystatechange"===h&&"complete"===e.target.readyState||"load"===h)u(b),g.saveNode(a),"readystatechange"===h?g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===h&&g.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),E(b),z.removeEvent(a,"load",d),z.removeEvent(c,"readystatechange",d)};"complete"===
c.readyState?(u(b),g.saveNode(a),g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(z.addEvent(a,"load",d),z.addEvent(c,"readystatechange",d));return b},r=function(){var a=q.getWindow().mraid,b=a&&a.getState&&a.getState(),d=function(){z.removeEvent(a,"ready",d);g.save(k.RENDER.DETAILS.ENVIRONMENT);g.save(k.RENDER.DIAGNOSTIC.MRAID_READY);u();E({status:k.RENDER.STATUS.DETECTED})};g.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(u(),g.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),c.status=k.RENDER.STATUS.DETECTED):
"loading"===b?(z.addEvent(a,"ready",d),g.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(z.addEvent(a,"ready",d),g.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));E(c)},f=function(a){a===k.RENDER.STATUS.DETECTED&&l.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},E=function(b){var d=g.build();b=b.status||c.status;d=d?d:c.details;a&&b===k.RENDER.STATUS.DETECTED?(f(b),l.getAggregator().trigger("addThrottledOutputItem",
"rend",b),l.getAggregator().trigger("addThrottledOutputItem","renddet",d)):(f(b),l.getAggregator().trigger("addOutputItem",{output:b},"rend"),l.getAggregator().trigger("addOutputItem",{output:d},"renddet"))},v=function(){l.getAggregator().on("primaryadfound",function(a){var b,d=c,e=new Yb,h=!0,n=function(){var c=a&&a.getAdNode(),n=e.find(c);if(t.isNodeXDomainIframe(n))b?q.clearInterval(b):h=!1,d=p(n);else if(n){var c=!1,r=t.getRect(n);n&&"IMG"===t.getNodeName(n)&&(c=0===n.naturalWidth||0===n.naturalHeight);
!c&&r.width>=k.RENDER.WIDTH_THRESHOLD&&r.height>=k.RENDER.HEIGHT_THRESHOLD&&(u(d),b?q.clearInterval(b):h=!1);g.saveNode(n)}else n=e.getClosestContainerName()||g.getAdNodeName(c)||d.details,g.save(n);E(d)},f=l.getAggregator().request("mobileApp");f&&f.isMobileAppEnvironment&&f.isMobileAppEnvironment()&&s.isMraid()?r():(n(),h&&(b=q.setInterval(n,500)));l.getAggregator().trigger("eligiblerender")})},G=function(){var a=e&&!!e.isVideo,c=e&&!!e.videoStartArrived,h=e&&!!e.geometryArrived;return b||!h||a&&
!c?!1:(l.getAggregator().trigger("eligiblerender"),g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),u(),E(d),b=!0)};return{start:function(){var a=!1;l.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:"initial"});l.getAggregator().on("adRendered",function(){a=!0});l.getAggregator().provide("adRenderStatus",function(){return a});g=new Zb;new $b;l.getAggregator().on("impressionsent",h);n()?G()||(g.save(k.RENDER.DETAILS.ENVIRONMENT),
g.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),E(c),l.getAggregator().on("omidrendgeoupdate",function(){G()}),l.getAggregator().on("omidrendvideostart",function(){G()})):s.isAvid()||s.isOmid()||s.isVideo()?(l.getAggregator().trigger("eligiblerender"),g.save(d.details),u(),E(d)):(E(c),v())}}},Zb=function(){var g=[],a=[],b=function(a){var b;if(t.isWindow(a))b="WINDOW";else if(t.isNodeXDomainIframe(a))b="XIFRAME";else try{b=t.getNodeName(a)}catch(h){c("nen")}return b},c=function(a){g.push(a)};return{build:function(){var b=
[];f(a).each(function(a,c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),h=d&&t.getRect(d),u=d&&"IMG"===e,n=d&&t.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,r=d&&d.children&&0===d.children.length&&p,g=h&&h.width>=k.RENDER.WIDTH_THRESHOLD&&h.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,f=(n||u)&&(0===d.naturalWidth||0===d.naturalHeight);
a.push(e);a.push(g);f&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);r&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(v){c("sne")}}}},$b=function(g){var a,b=!1,c=!1,d=function(){l.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a),l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};l.getAggregator().on("eligiblerender",function(){b=!0;d()});l.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},Z=function(){return{applies:function(g,a){var b=l.getAggregator().request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(k.BROWSERS.WEBKIT)||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Nb=function(){var g,a,b=!1,c=l.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};l.getAggregator().on("primaryadfound",
function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});l.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},tb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=s.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},ya=function(){var g=new ac,a=new D;return f(g).mixin(a)},
D=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new ea;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=
g[b])&&h.run.apply({},c)}}},fa=function(){var g=function(a,c,d){var e,h=c.length,u=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&t.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},ea=function(){var g=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},qa=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},za=function(){var g,a=new ga,b=function(b,d,e,h){var u,n,p,r;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),n=b.source,r=f.noop,d(u)&&(h&&(p=h(n,u))&&(r=function(){a.send(function(){return p},
n)}),e(b,u,r))}catch(g){u&&l.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};z.addEvent(w,"message",g)},stop:function(){g&&z.removeEvent(w,"message",g);g=null}}},ga=function(){var g=function(a){return f(a).isObj()?[a]:(new fa).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var u;
u=f.resolve(b,d)||{};u.sentTime=q.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},bc=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},pb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},
d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?
b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},ac=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Eb=function(){return{createInstance:function(g,a,b,c){return s.isDomless()?new cc:new dc(g,a,b,c)}}},dc=function(g,a,b,c){var d;
return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:B(t.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:s.embedded,winDimensions:n,adDimensions:p};!0===u&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),
viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},cc=function(){return{collect:function(){return{}}}},ec=function(g){g=g||f.identity;var a=[],b=q.now(),c=function(){var c=
q.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Aa=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=q.now())},stop:function(){var u=e||a;0===c%b&&(h+=q.now()-u,d++);c++},getTime:function(){return h},getCount:function(){return d}}},
Ba=function(){var g,a=0,b=0,c=new D(!0),d=function(){g&&(a++,c.trigger(a),b>a?q.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,q.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},fc=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=q.setInterval(g,c))},e=function(a){a&&g();q.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,
b){c=a;e();d(b)}}},Y=function(g){var a,b,c=0,d=s.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=s.getTagTime();h=!1},mark:function(){a=h?s.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=s.getTagTime();h=!0}}},O=function(g,a){var b=g||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],h=b[4],u=b[5],n=g?
b[6]:"",p=a?b[7]:"",r={},x=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(u=a);return u},v=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=r[b])?r[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:x,master:k,setParam:function(a,b){r[a]=r[a]||{};f(b).isObj()?f(r[a]).mixin(b):r[a]=b},path:function(a){n=a},toString:function(){var a=
x()?x()+".":"",b=n?"/"+n:"",c;p||!f(r).isEmpty()?(c=f(r).isEmpty()?"":f(r).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},Vb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(s.friendly&&!s.isMobileApp())if(b=l.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=t.getOurNodeInTop()){var h=
t.getAncestorNodes(d);e=f(h).map(a)}if(b=e=e&&g(e))l.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),l.getAggregator().provide("adSlotIds",b),c=b}return c}catch(u){l.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()};l("AdRefreshDetection",[],function(){var g=[30,45,60,90],a={start:function(){var a=this,c=m.asid,d=this.getChanId(),e=m&&m.contextNode&&m.contextNode.nextSibling&&m.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,
d,e,function(c,d){c?l.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;l.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var h=q.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);h.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||null,h=q.getTop();if(e&&this.adRefreshIntervalIsValid(e))l.getAggregator().on("sendDt",
function(u,g){u===k.DT_CODES.PING&&g===e&&(q.execAtEndOfThread(function(){h.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);l.getAggregator().trigger("adSessionComplete")}};s.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});
return a},{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}});var wb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=q.getWindow().location.ancestorOrigins,a=!0}catch(b){l.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Tb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,p=0,r=0;e(h,
0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,p,++r)},!0);e(h,++p,r)})}catch(x){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new O).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Hb=function(g,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),
b.trigger("sendDiag","bapiClient")}}}},nb=function(){return{createInstance:function(g,a,b,c){return s.isDomless()?new gc:new hc}}},hc=function(){var g=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=q.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&
(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=q.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=q.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=q.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=q.getDoc();return a&&a.documentMode?
a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,u=q.getDoc(),n=u.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in u.documentElement.style)h="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<e.length&&!(h=n.getComponentVersion(e[u],"componentid").replace(/,/g,"."));u++);}catch(p){}e=h;h=k.NA;n=q.getWindow();
f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(h=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return I.contains(a,c)})};return I.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},gc=function(){var g=function(){return!1},
a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Ua=function(){return{createInstance:function(g,a){return s.isDomless()?new ic(a):new jc(g,a)}}},kc=function(){var g,a=function(a,c){var d="",e="",h=q.getDoc().getElementsByTagName("ins");if(h&&0<h.length){e=h[0];d="<ins";
for(h=0;h<e.attributes.length;h++)d+=" "+e.attributes[h].nodeName+'="'+e.attributes[h].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=l.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!s.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=l.getAggregator().request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,h=m.adWidth&&0<m.adWidth?m.adWidth:0,u=m.adHeight&&0<m.adHeight?m.adHeight:0,n=q.getDoc().getElementsByTagName("ins"),
p;p=e=0;n&&0<n.length&&(p=n[0],e=parseInt(p.style.width),p=parseInt(p.style.height));h=e||h||window.innerWidth;u=p||u||window.innerHeight;"complete"===q.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=q.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):q.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=q.getDoc().getElementById(c))d.style.width=h+"px",d.style.height=u+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},jc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=K.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=K.createElement("SCRIPT"),d.src=b);m.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];s.isOmid()?(e=new kc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===m.forceAppend?c(a,b,d):K.write(d)},c=function(a,b,c){var d=!c&&z.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=t.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=K.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new O(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};l.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},ic=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new O(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},s=function(){var g="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return g||f.isDef(q.getWindow().mraid)},d=function(){return!g&&f.isDef(q.getWindow().mraid)},e=function(){var a=!1;if(!g)var b=(a=q.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},h=function(){var a;
if(!(a=-1!==m.mode.indexOf("jsvid"))){var b;a=!1;var c=l.getAggregator();if(!g&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===k.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=l.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===k.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},u=function(){return m.mobOrTab},n=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,
c){return I.contains(c.id,a)}).length},p=function(){return n("grpm")||m.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=O(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return q.now()-m.birthdate},getPageTime:function(){var a=k.NA;!g&&f.isDef(w.chrome)&&f.isDef(w.chrome.csi)&&f.isFunction(w.chrome.csi)&&(a=q.round(w.chrome.csi().pageT));return a},isVideo:h,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;g||(a=(a=m._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;g||(a=b.exec(m._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!g&&f.isDef(q.getWindow().avid)},isOmid:function(){var a=l.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ca).accepts()},isOmidForWeb:function(){return(new Ca).accepts()},isDomless:function(){return g},
isAvidNative:function(){var a=!1,b=l.getAggregator();g||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ha());return a},isMraid:d,isSafeFrame:function(){var a=!1;g||(a=f(q.getWindow().$sf).isObj(!1)&&f(q.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||
m.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;g||(a=Da().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&u()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=q.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!g&&!c()&&!h()&&a&&"jload"===m.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;m.contextNode&&f.isFunction(m.contextNode.getAttribute)&&(c=m.contextNode.getAttribute("data-ias-check-tag"),d=m.contextNode.getAttribute("data-ias-check-done"),e=(e=m.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(q.getWindow()[e]));var h=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=m.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var u=!0===m.fwMonitoring||"true"===m.fwMonitoring;h&&a&&("true"===c&&"true"!==d&&e?(b=!0,u&&l.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,u||l.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(),z={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",z.mouseEnter(b),
c):"mouseleave"===a?g.addEventListener("mouseout",z.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=z.mouseEnter):"mouseleave"===a&&(a="mouseout",b=z.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=K.defaultView&&K.defaultView.getComputedStyle;b=b||"";d?c=(g=K.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(g,a){if(s.isDomless())q.setTimeout(function(){g()},50);else{var b=a||(s.xDomainIframe?K:q.getTop().document),c=function(a){var c=q.setInterval(function(){b.body&&(q.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(K.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?q.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},isSandboxed:function(g){var a,
b=q.getWindow(),c=!1;if("sandbox"in q.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=q.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
z.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},$=function(g){var a,b=$.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};$.callTypeCounter={};var Gb=function(g,a,b,c,d,e,h,u){var n=0,p=0,r=!1,x=function(a,e,u,g,x,E){u=u||!b.on("postDts");var s=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(s||"n"!==h.getCurrentLoc()))try{var t=m.dtBaseURL,w=new O(t,!0),z=q.now();
l.getAggregator().trigger("preSendDt",a);t||(w.path("dt"),b.on("usedtdomain")&&w.sub("dt"));v(w,a,e);x&&x.field&&w.setParam(x.field,x.value);g||G(w,a);l.getAggregator().trigger("send",w,function(){p+=1;n=q.now()-z;f.isFunction(E)&&E()},u);a===k.DT_CODES.UNLOAD&&(r=!0);d.cleanup()}catch(y){__IntegralASDiagnosticCall("dt-"+a,y),l.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){r||x(k.DT_CODES.UNLOAD,-1,!0)};var E=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",
jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&x(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},v=function(a,b,e){var h=new $(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},G=function(c,g){var f,r={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)r.clog=u,s.isVideo()&&(f=s.isOmid()&&!s.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=l.getAggregator().request(f))&&!f.isEmpty()&&(r.ve=f));g===k.DT_CODES.UNLOAD&&(r.ndt=p);-1!==m.mode.indexOf("jsvid")&&(r.vv=l.getAggregator().request("videoVersion"));
r.NULL1=b.output();r.NULL2=h.stringify(10);r.em=s.embedded;r.fr=s.friendly;r.e=a.toString();r.tt=m.mode;r.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},r);c.setParam("tv",r);c.setParam("br",e.getBrowserType())};l.getAggregator().on({sendDt:function(a,b,c){x(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:E,updateDtCount:function(){p++},unload:g});return{send:x,unload:g,
diagnostic:E,setViewabilityMod:function(a){}}},B=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?t.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=q.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return q.round(a.width)*q.round(a.height)};(function(){var b;g!==w.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=t.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?q.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},t={findElementsWithSize:function(g){var a=[],b=function(c){1>t.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(z.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===z.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=t.browserWindowPosition(),b=t.windowSize(),g={scrX:q.round(a.scrX),scrY:q.round(a.scrY),
width:q.round(b.width),height:q.round(b.height)}}catch(c){l.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(w.outerWidth)&&(g.width=w.outerWidth,g.height=w.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(w.screenX)?(g=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(g=w.screenLeft,a=w.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=t.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=t.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=K.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=s.friendly&&q.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=q.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};z.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,h=1E4;b=z.nodeIsAbsolutelyPositioned(g);d=!t.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!t.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!t.tagNameIs(d,
"OBJECT"),c="inline"!==z.getStyle(d,"display"),b&&c&&(b=t.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==K&&d!==a)}return{width:q.round(e),height:q.round(h)}},hasBackgroundImage:function(g){g=z.getStyle(g,"background-image");return""!==g&&"none"!==g},findChildWithLargestContent:function(g,a,b){var c=l.getAggregator().request("mobileApp").isMobileAppEnvironment(),d=this.hasBackgroundImage,e=function(a){for(var b=a;a.parentNode!==g&&"inline"!==z.getStyle(a.parentNode,
"display");){var d;if(!(d=!c)){d=a.parentNode;var e=!0;if("visible"===z.getStyle(d,"overflow")||"visible"===z.getStyle(d,"overflowX")&&"visible"===z.getStyle(d,"overflowY"))e=!1;d=e}d&&(b=a.parentNode);a=a.parentNode}return b},h=null,u=function(a){var c,e,h=null,u=-1;if(a.length)for(c=0,e=a.length;c<e;c++){var k=a[c],l=t.getNodeArea(k),m;if(f.isFunction(b))m=b(k);else{m=k;var q=void 0;if(q=m.parentNode===g)if(q=void 0,q="DIV"===m.nodeName)if(q=void 0,q=!d(m))if(q=void 0,!(q="0"===z.getStyle(m,"opacity")||
"hidden"===z.getStyle(m,"visibility"))){var H=q=void 0;m=m.childNodes;for(q=0;q<m.length;q++)1===m[q].nodeType&&(H=!0);q=!H}m=!q}var s;try{var H=q=void 0,F=!1,P=k&&"IFRAME"===k.nodeName&&k.contentDocument;k&&k.parentElement&&"teads-player"===k.parentElement.classList.item(0)&&P&&(H=(q=P.body)&&1>q.childElementCount)&&(F=!0);s=F}catch(w){s=!1}l>u&&m&&!s&&(h=k,u=l)}h&&(h.hasValidSizeForMobileApp=1<u);return h}(function(b){var c,d,e,h,g=[],u=a||"iframe img a object embed div".split(" ");c=0;for(d=u.length;c<
d;c++){e=u[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,h=f.length;e<h;e++)g.push(f[e])}return g}(g));u&&(h=f.isFunction(b)?u:e(u),h.hasValidSizeForMobileApp=u.hasValidSizeForMobileApp);return h},screenSize:function(){if(s.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(w.screen)&&(g={width:w.screen.width,height:w.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(t.screenSize()).mixin({scrX:0,scrY:0});
f.isDef(screen.availLeft)&&(g={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=q.getTop(),b=q.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;s.friendly&&(g=s.embedded?(g=t.getOurIFrameInTop())&&g.frameElement:m.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;
return a},getTagsNamed:function(g,a){var b,c=a||q.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(t.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&
(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[m.contextNode.parentNode,q.getDoc()];s.friendly&&d.push(q.getTop().document);if(a&&s.embedded)try{d.push(q.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=t.querySelector(d,g)}catch(e){}!b&&
c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=t.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=q.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},
getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&t.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&t.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=z.getStyle(g,"width");g=z.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=t.getAttribute(g,"width");g=t.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,
c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===z.getStyle(a,"position"),e="hidden"!==z.getStyle(b,"overflow")&&!d;s.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=t.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==
q.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===t.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Ta=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Lb=function(){return{createInstance:function(a,b){return s.isDomless()?new lc:new mc(a,b)}}},mc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),u=h&&h.length&&h.join("|"),n=m.exchList;u&&(e=f(n).map(function(a,b){return 0<=u.indexOf(I.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},lc=function(){return{parse:function(a){}}},kb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*q.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};m.integration&&(d.intblk=
"integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(s.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){var b=m[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===
a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Ab=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,
b,c,d){var e=0,h=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;h=B({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=q.round(h.area()/a.area()*100));return e}}},ob=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,
16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*q.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,
b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},hb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},nc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},
getTask:function(){return e?function(){var c=l.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),u=a.getTimeInViewForRts();f.isDef(d)&&(l.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),l.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));l.getAggregator().trigger("sendDt",b,e);if(c[u])c[u]()}}}},Fb=function(){return{createPingJobs:function(a,
b,c,d,e){return f(b.getTimeThresholds()).map(function(b,f){return new nc(f,a,c,d,e)})}}},Ea=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-m.birthdate||""}},d=function(){a||(a=l.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),
p=l.getAggregator().request("mScreenEvents").getCurrentEvent(),r=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(l.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),l.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),l.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,r),b.rtsCallbacks&&
f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();l.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},na=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+q.round(1E4*Math.random())};return{wrap:function(d,
e,h,f){var n=c(),p,r,k;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],r=p.split("=")[1],k=I.stringToFn(r),d=a(d,p));w[n]=function(a){e(a);h&&k&&k(a);w[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Ib=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=O(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,
nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.getAggregator().trigger("jsonp",c,a.callback,!0):l.getAggregator().trigger("send",c,function(){l.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?
a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.getAggregator().on("adImpression",function(e,n){var p;try{p=d(c,n),a.enabled?l.getAggregator().trigger("jsonp",p,a.callback,!0):l.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(r){__IntegralASDiagnosticCall("jsvidimp",r,m)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]=
"db2";a[4]="video";return a.join("/")};b&&l.getAggregator().trigger("jsonp",c(a),function(a){l.getAggregator().trigger("videoBlockResult",a)});l.getAggregator().on("adImpression",function(c,e){var n;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);l.getAggregator().trigger("send",n,f.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",
v,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),r=f.indexOf("BEGIN__ADSAFE"),k=-1!==r,E=k?f.slice(r):"",a=k?f.slice(0,r):a(f);return{isFW:d,baseUrl:a,macroUrl:E,sendImpression:function(a){var d=function(){b.nodeType?l.getAggregator().trigger("addNode",
b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.getAggregator().on("adImpression",function(){d(a)})}}}},q={execAtEndOfThread:function(a){q.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},
getWindow:function(){return w},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?l.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return q.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return q.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){q.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){q.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();return top},
getDoc:function(){s.isDomless();return K},getIntersectionObserver:function(a,b){s.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},vb=function(){return{createInstance:function(){return s.isDomless()?new oc:new pc}}},pc=function(){var a,b=!1,c=!1,d=l.getAggregator().request("features"),e=new ea,h=function(){var b;d.on("blur")?(b=q.getWindow(),b=s.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||
(f.isDef(a.prop)?q.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?q.getDoc()[a.prop]:null;return b},u=function(){var b=q.getWindow(),c=function(){e.run(h())};z.addEvent(b,"focus",c,!0);z.addEvent(b,"blur",c,!0);a.event&&z.addEvent(q.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=q.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var u=h+"Hidden";f.isDef(d[u])&&(a=u,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){e.push(a);
c||(c=!0,u())},supportsVisAPI:function(){return b}}},oc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},xb=function(){return{createInstance:function(a,b){return s.isDomless()?new qc:new rc(a,b)}}},rc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],
f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),
3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(r){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(s.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{p.e=encodeURIComponent(w.document.referrer)}catch(v){}}try{"jsi"!==m.mode&&(p.d=encodeURIComponent(w.location.href))}catch(q){}try{p.f=encodeURIComponent(m.jsref)}catch(L){}try{h=n(),
p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(A){}p=d(p);p=e(p);h=[];for(var H in p)p.hasOwnProperty(H)&&h.push({key:H,val:p[H]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},qc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},
ub=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},yb=function(){var a=[],b={},c={sl:"n"},d=0,e,h,u,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&
(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},r=function(a,c){var d=new ec(c);return b[a]=d},x=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},m=function(){f(c).each(function(b,c){n[c]+=a.length?u-d:u});d=u},v=function(b){a.length&&m();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||m()},q=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e={sl:x(a.viewState)};
u=s.getTagTime();v(e);e.t=u;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&
(c.reason="");return h=c};(function(){r("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});r("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=s.getTagTime();m()},registerLocation:function(d){var h,p=!1;c.sl==x(d.viewState)&&a.length?(h=new q(d),a[a.length-1].details=
h.details):(h=new q(d),a.push(h),e=d.viewState,p=!0);l.getAggregator().trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:r,getCurrentLoc:function(){return x(e)},getCurrentEvent:function(){return h}}},
I={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=q.getWindow(),
c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},sc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",b);a=t.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=t.getFirstChildElement(b))&&t.tagNameIs(b,"a"),f=t.attributeMatches(b,"href",d),k=t.attributeMatches(b,"target",e);h&&f&&k&&(b=t.getFirstChildElement(b),t.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},tc=function(){var a=sc(),b=function(a,b){b.tag=t.getTagName(a);b.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};l("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!t.isViewportVisible(c,a))return c;if(c!==d&&s.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=q.getWindow();return b(a,q.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=q.getWindow();t.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var uc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};l("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),h,u={};d!==c&&(h=f.stringifyTriState(d),u.res1=
h,u.ps=h,u.ts=q.now(),u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(n){l.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)uc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});l("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(s.embedded)try{h=m.contextNode.parentNode,b=tc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Fa=function(a,b,c,d){var e,h=0,u=0,n=!1,p=function(){e=Math.round(t.getNodeArea(a.body));
if(e>=d){for(var p,r=e+20*e/100,v=a.querySelectorAll("iframe"),v=f.fromNodeListToArray(v);v.length&&(u<r||h<c);)p=v.shift(),p=Math.round(t.getNodeArea(p)),p>=d&&(h++,u+=p);u>=r&&h>=c&&(r={va:e,bia:u,bin:h},l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(r).toION()),n=!0)}},r=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():q.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&t.isElement(c)&&t.tagNameIs(c,"IFRAME")&&
f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(q.execAtEndOfThread(p),!n&&f.isDef(w.MutationObserver)&&r())};l("BS_InApp",[],function(){var a=q.getWindow().document;l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Fa(a,"bs1",3,100)},{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});l("BS_Browser",[],
function(){var a=q.getWindow().document,b=a.body?Math.round(t.getNodeArea(a.body)):null;!l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Fa(a,"bs2",10,b)},{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var sb=function(){return{createInstance:function(a){return s.isDomless()?new vc:new wc(a)}}},wc=function(a){var b,c,d,e=new ya,h=new fa,u=new xc(e),n=new yc,p=new zc,r=new Ac(e,a),k=function(){f.isUndef(d)&&
(d=new Bc(e));return d},m=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return p},adTalkMessage:function(a){return new Cc(a,e)},adTalkMessageCollection:function(){return n},idMapModule:k,interFrameQuerySelector:function(a){return new Dc(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){m();h.traverse(u.addFrame);r.startListening();r.sendToKnownFrames();l.getAggregator().once("stopAdTalk",
function(){r.stopListening()});l.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:r.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ga(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ga(e,!0));return c},getIdMap:k}},vc=function(){return{isApplicable:function(){return!1},start:function(){}}},Cc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.getAggregator().request("features").on("swapids")?
m.oid:m.asid;var h=a||{},f=m.asid,d=d.tagId,n=s.embedded,p=s.friendly,r=m.birthdate;c=c.split("-")[2];var x;s.friendly?x="["+k.AD_IDENTIFIER+"-"+m.asid+"]":(x=q.getWindow(),x=x.location&&x.location.href,x='iframe[src*="'+(x&&x.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:r,iasCommonId:c,nodeSelector:x,positionStr:e,version:"0.1"}},yc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Ec=function(a,b,c,d){var e,h=a==w;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){u(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},xc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,
h,f){var n=a.request("adProxy").getAll();e=new Ec(e,h,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ga=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";n+=p}return n}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+
(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Bc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},h=function(a){var e=!1,e=!s.embedded,h="BODY"!==t.getNodeName(c)&&"HEAD"!==t.getNodeName(c),f;if(f=a.srcIsEmbedded){f=
"0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?l:!a.srcIsFriendly)}e&&h&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&s.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),
l.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Dc=function(a){var b=new fa,c=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return t.querySelector(c(a),b)},e=function(c,e){var n,p,r;try{p=d(c,e),p||(n=b.getFrames(!0,a),f(n).findFirst(function(a,b){return r=d(b,e)}))}catch(k){}return p||r||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},Ac=function(a){var b=
!1,c,d;d=l.getAggregator().request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var h,
n,m,s,t;try{h=a.request("frameCollection");n=a.request("adTalkMessageCollection");m=d.messageContent.self;n.add(d);var H=h.getMe();H.unifiedId>m.unifiedId&&(H.unifiedId=m.unifiedId);var w;w=q.now()-d.sentTime;d.transferDuration=w;n=s=h.getFrame(m.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(s=s||h.addFrame(c.source,m.id.split("-"),d),s.addInformationFromSrc(d,m),e()):s.addInformationFromSrc(d,m);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(F){l.getAggregator().trigger("error",
k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ga).send(h)},startListening:function(){c=new za;c.listen(e,n,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:h}},Fc=function(){var a=l.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},zc=function(){var a,b=[],c=function(a){a=new Fc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},zb=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&z.addEvent(q.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,q.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Gc=function(a,b){var c,d,e=k.NA,h=e,u=!1,n=!1,p=!1,r=!b,x=function(){var b=q.getIntersectionObserver(function(a){a=
a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==h&&q.execAtEndOfThread(function(){l.getAggregator().trigger("IOPivChange",e)});h=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});r&&q.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(m(a));r&&q.execAtEndOfThread(function(){s.isBustedIframe()||l.getAggregator().trigger("delayedViewabilityReady")});
u=!0},m=function(b){if(!f.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){n=!0}b&&null!==b.bodyElement?x():b&&b.document?z.whenReady(x,b.document):n?l.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):
x()},isReady:function(){return e!==k.NA},isStarted:function(){return u},getAdNodeDimensions:function(){var a;c&&(a=B({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},va=function(){var a=!1;(function(){z.whenReady(function(){l.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};l("loopDelay",[],va,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY});
var Hc=function(){return{start:function(a){l.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Ic=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Sb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.getAggregator().trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[Jc(),Kc(),Ic(),Hc()];(b=f(b).findFirst(function(b,
d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(m._onMeasurable)}}},Kc=function(){return{start:function(a){bc(l.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&s.isVideo()}}},Jc=function(){return{start:function(a){l.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&
s.isVideo()}}},Lc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.getAggregator().trigger("adImpression")})}}},
Mc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},
Nc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.getAggregator().trigger("adImpression")})}catch(b){}}}},Oc=function(a,b,c){var d=["rjss",
"jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var b=q.getWindow(),b=b&&b.omid3p,c=l.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&
f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Pc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",
function(a){l.getAggregator().trigger("adImpression")})}}},Ya=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Va=function(a){var b=!1,c=!1,d=!1,e=!1,h=l.getAggregator().request("omidAdSessionContext");h.queuedOutputItems=[];var k=new ia,n=l.getAggregator().request("omidAdSessionVerificationParameters"),p=q.getWindow(),r=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,x=!1,E=function(){return n&&
n.IAS&&0<Object.keys(n.IAS).length?n.IAS:n},v=function(){var a,f;b&&c&&(!e||d)&&(w.omidSupported=!0,a=h.app&&h.isDisplay&&!h.isWeb,(f=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&h.isLimitedSandbox&&"1"===m.adWidth&&"1"===m.adHeight&&(h.isLimitedSandbox=!1),a&&f&&(h.delayingViewabilityEvents=!0),h.hasOwnProperty("impressionType")&&h.queuedOutputItems.push({code:"oiet",value:h.impressionType}),h.hasOwnProperty("creativeType")&&h.queuedOutputItems.push({code:"oct",value:h.creativeType}),l.getAggregator().trigger("tryToCallContinueMain",
E()),x=!0)},G=function(a){var c;if("sessionStart"===a.type){h.adSessionType=a.data.context.adSessionType;h.environment=a.data.context.environment;"app"===h.environment&&(m.mobOrTab=!0);h.accessMode=a.data.context.accessMode;h.omidNativeInfo=a.data.context.omidNativeInfo;h.omidJsInfo=a.data.context.omidJsInfo;h.deviceInfo=a.data.context.deviceInfo;h.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(h.contentUrl=a.data.contentUrl);h.isJavaScript="javascript"===h.adSessionType;h.isNative=
"native"===h.adSessionType||"javascript"===h.adSessionType;h.isLimitedSandbox=s.embedded;h.isHtml="html"===a.data.context.adSessionType;h.isWeb="web"===a.data.context.environment;n=a.data.verificationParameters;c=h.isHtml&&h.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?h.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,h.useOMID13Logic=!0,h.queuedOutputItems.push({code:"ohand",
value:"13"}));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},
{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,p,k,r=0;r<d.length;r++)f=d[r].root,p=d[r].field,k=d[r].code,"object"===typeof h[f]&&"undefined"!==typeof h[f][p]&&h.queuedOutputItems.push({code:k,value:h[f][p]});h.queuedOutputItems.push({code:"oast",value:h.adSessionType});h.queuedOutputItems.push({code:"oacm",value:h.accessMode});h.queuedOutputItems.push({code:"oenv",value:h.environment});h.hasOwnProperty("contentUrl")&&h.queuedOutputItems.push({code:"ocon",
value:encodeURIComponent(h.contentUrl||"")});c?l.getAggregator().trigger("tryToCallContinueMain",E()):(b=!0,v())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),x?l.getAggregator().trigger("addOutputItem",{output:a},"oser"):h.queuedOutputItems.push({code:"oser",value:a}))},t=function(a){h.mediaType=a.data.mediaType;h.queuedOutputItems.push({code:"omtp",value:h.mediaType});
"video"===a.data.mediaType&&(h.isVideo=!0);a.data.viewport&&a.data.adView&&(h.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof h.geometryArrived&&k.checkForViewAttachmentBasedOnAdSessionType(h,a.data.adView)&&(h.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!h.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType);h.isNativeVideo=h.isNative&&"video"===a.data.mediaType;
h.isDisplay="display"===a.data.mediaType;c=!0;v()},A=function(a){a&&"start"===a.type?(h.videoStartArrived=!0,l.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(h.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType),v())};return{start:function(){r.addEventListener("media",A);r.addEventListener("video",A);r.registerSessionObserver(G,"IAS");r.addEventListener("impression",t)}}},
Wa=function(){return{accepts:function(){return!0}}},Ca=function(){var a=l.getAggregator().request("omidAdSessionContext"),b=l.getAggregator().request("omidVerificationClient"),c=new ba(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Xa=function(){return{start:function(){var a=m.contextNode&&(m.contextNode.dataset.iasParameters||m.iasParameters);l.getAggregator().trigger("tryToCallContinueMain",a)}}},Qc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,
eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Rc=function(a,b){var c,d=function(a){var d,f,n;try{d=a.eventData.percentageInView,f=c&&75<=d,n={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,
percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",n)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Sc=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,u=!1,n=new Ea,p=l.getAggregator().request("omidAdSessionContext"),r={isEmpty:function(){return 0===c.length},toString:function(){for(var a=
"{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},x=function(){u=!0},m=function(a){try{var n="",r=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),x="n",m=!1;switch(a.type){case "start":n="adVideoStart";p.videoStartArrived=!0;l.getAggregator().trigger("omidrendvideostart");d=r;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;
break;case "volumeChange":n="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":n="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);m=!0;l.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":n="pauseAd";break;case "resume":case "bufferFinish":n="resumeAd";break;case "skipped":n="adSkipped"}if(""!==n){var q=l.getAggregator().request("mScreenEvents");q&&(x=q.getCurrentLoc());c.push({t:r-
d,tp:n,sl:x,ad_duration:h,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var E=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),n=-1!==E?E+1:void 0,s=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(f.isDef(n)&&l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",n),l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",s)):(f.isDef(n)&&l.getAggregator().trigger("addOutputItem",{output:n},"vbp",{type:k.IMPRESSION_EVENT}),l.getAggregator().trigger("addOutputItem",
{output:s},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&l.getAggregator().trigger("omidAdDuration",{ad_duration:h});var t;"playerStateChange"===a.type?t="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?t="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(t="AdPaused");f.isDef(t)&&b.trigger("videoPlaybackEvent",{eventType:t,eventData:null});m&&l.getAggregator().trigger("sendDt",
k.DT_CODES.VIDEO_EVENTS)}catch(z){__IntegralASDiagnosticCall("omidvideo",z,w.bootstrapper)}};return{start:function(){l.getAggregator().on("impressionsent",x);l.getAggregator().provide({omidVideoEventsString:r});a.addEventListener("video",m);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ha=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",
a)};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Tc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};
f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},qb=function(a,b,
c){var d=l.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ja(b)).resolve())||l.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new Uc(b);return new Tc(b,c,d.isMobileAppEnvironment())}}},rb=function(a){var b=l.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=
l.getAggregator().request("omidVerificationClient"),b=new ba(a),e=new Ca,f=[];if(b.accepts()&&!e.accepts()){var k=new ca,n=new Vc,e=new Wc(a,new D),k=[{environment:k,measurementStrategy:new Xc(a,new D)},{environment:n,measurementStrategy:new Ia(new ka,q.getWindow(),new D)}],k=(k=(new ja(k)).resolve())?k.measurementStrategy:{},p=new Ja(new Ka(new U),new U,n.accepts()),n=new Oc(a,b,m.mode),r=new La(e,k,new D,p),b=new Pc(a,b,m.mode),a=new Ma(e,k,new Sc(a,new D),new D,p);f.push({environment:n,measurementStrategy:r});
f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=l.getAggregator().request("avidJsClient"),d=new Mc(b),e=[];if(d.accepts()){var f=new Lc(b,d,m.mode),k=new Nc(b,d,m.mode),n;n=new Qc(b,new D);if(d.supportsAdContainerGeometry()){var p=new Yc,r=new Zc,x=new Ia(new ka,q.getWindow(),new D),E=new $c(b,new D),p=(p=(new ja([{environment:p,measurementStrategy:E},{environment:r,measurementStrategy:x}])).resolve())?p.measurementStrategy:{},r=new Ja(new Ka(new U),
new U,r.accepts()),x=new ad(b,new D),b=new La(x,p,new D,r);n=new Ma(x,p,n,new D,r)}else r=new Rc(b,new D),b=new Ha(r,new D),n=new Na(r,n,new D);e.push({environment:f,measurementStrategy:b});e.push({environment:k,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new bd(q.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.getAggregator().request("context"),e=new cd(q.getWindow(),
e),f=new dd(q.getWindow(),new D);e.accepts()?(d=new ed(q.getWindow(),new D),d=new Na(f,d,new D),d={environment:e,measurementStrategy:d}):(e=new Ha(f,new D),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ja=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Uc=function(a){var b=!1,c,d={winDimensions:B({scrX:0,scrY:0,width:0,height:0}),adDimensions:B({scrX:0,scrY:0,width:0,height:0}),containerDimensions:B({scrX:0,
scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?new B({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):B({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?
a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=
d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Na=function(a,b,c){var d=!1,e=!1,h=!1,u,n,p,r,x=function(){if(!f.isUndef(n)){var a=[],b,l;d?(e?(l=!1,b=100):(l=r,
b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;n.shouldDelegateToDomBasedViewability=l;n.percentageInView=b;n.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},m=function(a){n=a;p=a.percentageInView;r=a.shouldDelegateToDomBasedViewability;x()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!==
"AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);x()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(m);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},cd=function(a,
b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.getAggregator().trigger("adImpression"))})}catch(d){}}}},ed=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},ad=function(a,b){var c=function(a){var c=new B(a.eventData.viewport||{width:0,height:0}),f=new B(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),n=new B(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,
outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",
c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ja=function(a,b,c){function d(a,b,c){c=n(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},
u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,r){if(f.isDef(e)&&f.isDef(r)){var l=e.viewport,m=e.computedAdContainer,v=m.obstructions,s=v&&0<v.length,t=e.originalAdContainer,A=r.adGeometry,H=r.adFound,w=e.detectionMethod,F=0,l={x:0,y:0,width:l.width,height:l.height},P=u(t,A),z=e.outOfViewReason,y=0,M=0,D=s||!1,y=1>=A.width*A.height;c&&y&&(H=!1,z=z||
"",H||-1!==z.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(z=k.OUT_OF_VIEW_REASONS.GEOM+(""!==z?"."+z:"")));if(H&&0<e.percentageInView){y=d(l,m,P);s?(F=n(m,P),F=h(l,m,F),F=u(m,F),F=a.calculateObstructedArea(F,v)):F=0;M=F;F=Math.round((y-M)/(P.width*P.height)*100);s&&0===M&&(D=!1);for(var A=(new B(P)).getRoundedGeometry(),H=D,C,s=0,M=b.getConfig(A).numberOfSlices,Q=q.floor(A.height/M)||1,v=[],y=H?a.getObstructionStatusBySlice(M):[],V,s=0;s<M;s++)C=A.y+Q*s,s==M-1&&(Q=A.y+A.height-C),C={x:A.x,y:C,width:A.width,
height:Q},V=d(l,m,C),C=1==V/(C.width*C.height),v.push(C);if(H)for(m=q.min(y.length,M),s=0;s<m;s++)v[s]=v[s]&&!y[s];m=v}else m=b.getConfig(A).defaultSliceArray;return{windowDimensions:l,containerDimensions:t,adDimensions:P,percentageInView:F,viewState:50<=F?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=F?"":z||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:w,isObstructed:D,sliceStatus:m}}}}},Yc=function(){return{accepts:function(){return s.isAvidNative()}}},$c=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;
a=!!c;c=(new B({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Zc=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},La=function(a,b,c,d){var e,h,u,n=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);u=a.isMeasurable=
!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},r=function(a){h=a;n()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(r);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return u}}},Ka=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,k,n,p;k=e&&0<e.length;var r;if(k){r=Math.round(d.width);var l=Math.round(d.height);h=Array(r);for(n=0;n<r;n++)h[n]=Array(l);r={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:r,height:l}}else r={};h=r;l=r=0;if(k){for(;r<e.length;r++){k=e[r];n=l=h;var m=k;h=Math.max(n.x,m.x);k=Math.max(n.y,m.y);p=Math.min(n.x+n.width,m.x+m.width);m=Math.min(n.y+n.height,m.y+m.height);
n=p-h;p=m-k;n=0<n?n:0;p=0<p?p:0;h-=l.x;k-=l.y;n=h+n;p=k+p;for(h=Math.round(h);h<Math.round(n);h++)for(m=Math.round(k);m<Math.round(p);m++)void 0!==l.matrix[h]&&void 0===l.matrix[h][m]&&(l.matrix[h][m]=1,l.obscuredPixelCount+=1);h=l}l=h.obscuredPixelCount;r=h;if(f.isUndef(r.matrix)||0===r.matrix.length)c=[];else{k=0;p=!1;h=r.matrix[0].length;n=r.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var m=q.floor(h/p)||1,v=[],s=0;s<h;s++){p=!1;for(var t=0;t<n;t++)if(1===r.matrix[t][s]){p=!0;break}k++;
p&&(s+=m-k,k=m);if(k==m||s===h-1)v.push(p),k=0}c=v}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Wc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,h=new ia,u=function(){var a=q.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(u,50)},n=function(a){if(a&&a.data&&a.data.adView){var f=a.data.adView,n=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);
if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{n&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions);var m=new B(a.data.viewport||{width:0,height:0}),q=new B(f[n?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),n=new B(f["onScreen"+(n?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:m.getRoundedGeometry(),originalAdContainer:q.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),
percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:p(f.reasons)};"undefined"===typeof c.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},
ca=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Xc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=new ia,u=function(){var a=q.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(u,50)},n=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{var n=
a.data.adView.geometry,m=a.data.adView.containerGeometry,q=!!n,v=a.data.adView.measuringElement&&!!m,n=(new B({x:q&&v?n.x-m.x:0,y:q&&v?n.y-m.y:0,width:q?n.width:0,height:q?n.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&f.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:n,adFound:q})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&
n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Vc=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ma=function(a,b,c,d,e){var h=!1,u=!1,n,p,r,m,q,v=function(){if(!(f.isUndef(p)||f.isUndef(r)||f.isUndef(m))){q=!0;var a=e.calculateGeometricMeasurement(p,r),b=h&&u,c=h&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,
containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=k.IN_VIEW:(l.viewState=k.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",n)}},s=function(a){p=a;v()},t=function(a){r=
a;v()},A=function(a){m=a;a=a.eventType;"AdEnteredFullscreen"===a?u=!0:"AdExitedFullscreen"===a?u=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);v()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(t);
b.start();c.addVideoPlaybackEventListener(A);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},Ia=function(a,b,c){var d,e=function(){var b=a.find(),e,n,p=!1;f.isDef(b)?(n=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),n=!1);if(b=
n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:n})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},bd=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},dd=function(a,b){var c=
!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",
d)},m=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},n=function(){c||m()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;l.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.getAggregator().trigger("exec","mraid.js",n):m()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},eb=function(a,b,c){var d={},
e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||l.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},$a=function(){var a=new N({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=q.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Za=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var l=[2E3,5E3,15E3],n=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new N({tiv:d}),d=d[0]):f?(c=new N({tiv:l}),d=
l[0]):(c=new N({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},bb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],m=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=
q.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new N({tiv:f}):d?new N({tiv:n}):new N({tiv:m});l.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},ab=function(a,b){return{timeInViewThresholds:new N({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=
q.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},db=function(a,b){var c,d,e,h=q.getMaxNumber(),l=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d,r=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,n,r,m=b.adDimensions.area();
r=1===b.tabHidden;var s=q.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;n=b.ub||h;if(m>=e&&m<=n)return!0});r=!r&&s>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(r=!1);l&&(r=r&&b.isVideoPlaying,p&&(r=r&&b.isSoundOn));return r};c=new N(a);d=a.qiv;(function(){e={};var a;f.isDef(m.rts)&&f.isDef(m.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():
k.RTS_KEY_FOR_VQ,e[a]=m.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:r,isInViewIgnoringRender:function(a){return r(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},cb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,n=
c.on("customMetric"),p=c.on("groupmCM"),r=function(a,b){var c,k,n,r,l;c=f(b.mediaTypes).contains(d);k=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;r=I.contains(b.id,"fiv");l=I.contains(b.id,"groupmCM");r=!r;l&&(r=p);return r&&c&&k&&n};return{resolve:function(){var b=[],c;n&&k&&(c=f(a.customViewability).filter(r),f(c).each(function(a,c){b.push(c)}));return b}}},N=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new la(c))});
else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new fd;b.push(new gd(c,parseInt(a[1].replace("%"))));b.push(new la(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new la(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},fd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},la=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},gd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=q.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},ra=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):
b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},fb=function(a,b,c,d){var e,h,k,n,p,r,m=function(a,b){return!b&&a},q=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},v=function(a){var l=0,m=1===a.tabHidden,v=a.isVideoPlaying,x=a.isSoundOn,t=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,m,v,t)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});s("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){q(b,m,v,t)&&x?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),
s("slcVtVol",p));r=d&&b&&b.shouldIncludeSound?p:n;a=f(r).findFirst(function(a,b){l=Math.max(l,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(l)},s=function(a,b){var c={};c[a]=b;l.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},t=function(a){!e&&a.sliceStatus&&(e=[],h=[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new Y(1));n.push(0);d&&(h.push(new Y(1)),p.push(0))}))},A=function(a){f.isUndef(a.sliceStatus)||(e||t(a),v(a))};return{start:function(){k=d?q:m;a.addMeasurementChangedListener(A)}}},
pa=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Jb=function(a,b,c,d,e,f,l,n,p,r){var m=!1,t=s.isVideo(),v=f.request("mobileApp"),G=Z().applies(c,e),L=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||G,A=s.xDomainIframe&&!L,w=new Aa(10),z=function(){e.on("viewabilityready")&&!m&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),m=!0)};
f.on("delayedViewabilityReady",function(){y();z()});f.on("delayedViewabilityReadyCallOnly",z);var y=function(c){c=c||!1;try{w.start();var d,e;b.hasMeasurementStrategy()?e=v.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),v.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):A&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),t&&!s.isAvid()&&r.setVideoSpecificScreenEventFields(e));d=
p.registerLocation(e);c||a.trigger("measurementChanged",e);w.stop();var m=q.round(w.getTime()/w.getCount());l.addItem({output:m},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(x){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:y,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":t?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=s.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=
a&&G,d=!d&&!e&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};l("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,h=hd(c),u=[new id,new jd(h)],n=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===
a.type&&l.getAggregator().trigger("adSessionComplete")},r=function(a){z.addEvent(w,a,function(){l.getAggregator().trigger("adSessionComplete")},!1)},x=function(){var a=new $(k.DT_CODES.VIDEO_EVENTS);l.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};q.getWindow().postMessage(JSON.stringify(a),"*")})};l.getAggregator().once("startViewabilityLoop",function(){var b,c=l.getAggregator().request("mobileApp").isMobileAppEnvironment();
l.getAggregator().request("ids").impressionIsIdentifiable()&&(e=fc(a.checkScreenLoc,h.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?s.isOmid()?l.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):r("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):r("beforeunload"))});l.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||x();l.getAggregator().trigger("unload");e&&e.stop();l.getAggregator().trigger("endAdSession");l.getAggregator().trigger("stopAdTalk")})},
{tier:k.TIERS.VIEWABILITY});var hd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},jd=function(a){var b,c,d,e,f,k=function(n){d&&!f&&1>n?(f=!0,q.setTimeout(function(){k(n)},1E3)):(e=1>n,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){k(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=
c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",k);l.getAggregator().on("newScreenEvent",n)}}},id=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,q.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Z();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);
l.getAggregator().on("IOPivChange",e)}}},rd=function(a,b,c,d,e,h){var u,n,p,r,x,E,v,G,L,A=t.getElementsWindow(b);t.getElementsDocument(b);l.getAggregator().provide("iframeCalculatorHelper",kd(A));var H=ld(b,d),y=k.AD_IDENTIFIER+"-"+m.asid,F=!1,C=B({}),D=s.isDeviceTypeGroupMobile(),J=s.usesGroupMCustomMetricMobilePassThru(),M,I=function(){if(!u)if(u=H.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&s.embedded){var a=u,e=(new B(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.getAggregator().trigger("error",
k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},N=function(){var b,d=s.xDomainIframe&&F;b=D&&F&&p.isReady();b=d||b;d=H.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&s.embedded||s.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!D&&(s.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),G=I(),v=new B(t.calcWinDims()),E=new B(b?t.calcMonDims():{}),L=d?H.getClippedDims():C,n=a.calcPercentInView(G,v,E,L));return n},Q=function(){return a.calcInitialViewState(N())},
V=function(){return b===w?!1:I().isHidden()};(function(){var c=q.getWindow(),d=q.getDoc(),e=b===c,f=d.body,h=l.getAggregator(),k=new Z,n=h.request("browser"),m=h.request("features"),h=h.request("context"),u=!s.xDomainIframe,d=e&&f?d.body:b;M=s.friendlyIframe?c.frameElement:d;z.addEvent(d,"click",function(){l.getAggregator().trigger("adComponentClicked")});z.addEvent(d,"mouseover",function(){l.getAggregator().trigger("adComponentMousedOver")});k.applies(n,m,h)?(p=Gc(b,u),p.start(),F=!0,J&&(c=new md(I().getRounded()),
k=new nd,k=new od(p.getObservedNode(),k),r=new pd(c.getSlices(),k))):J&&(x=new qd(a))})();return{mark:function(){t.setAttributeOf(M,y,"")},cleanup:function(){t.removeAttributeOf(M,y)},isNode:function(a){return b===a},isHidden:V,isObstructed:function(){return!1},getDims:I,getPercentInView:N,getLocationState:Q,getOnPageViewability:function(){return V()?k.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return H.allowsOptimization?u:B(d)},refresh:function(){L=G=v=
E=n=u=void 0;if(h){var a,c;if(!s.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==K&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;r&&r.isReadyToMeasure()?a=r.getSliceStatus():s.friendly&&x&&f.isDef(G)&&(a=x.getSliceStatus(G,v,E,L));return a}}},sd=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},m=function(n,p,r,m){var u=h()||0===c.length;n=rd(a,n,p,r,b,m);
h()&&(m=c.shift(),e=f(c),m.cleanup(),d=void 0);c.push(n);e=f(c);u&&n.mark();u&&p!==k.DETECTION_METHODS.AD_PLACEHOLDER&&l.getAggregator().trigger("primaryadfound",n);p===k.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof r&&l.getAggregator().trigger("addOutputItem",{output:r.nodeName},"spac")},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,f+=a/100*h)});return d={totalArea:c,totalInView:f,
hasMeasurement:b}},p=function(a){var b=l.getAggregator().request("adRenderStatus");return!a&&!b},r=function(a){var b;b=n();b=b.hasMeasurement?q.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=0;return b},x=function(c){var d=b.bootstrapOn("mobOrTab"),d=n().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!s.isVideo();return a.calcInitialViewState(r(c),d)},t=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},v=function(a){return function(){return c[0]&&c[0][a]()}};
l.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===t(b)&&m(b,k.DETECTION_METHODS.MUTATION)})});l.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=t(b);-1<d&&c.splice(d,1)})});return{getDims:v("getDims"),isObstructed:v("isObstructed"),getDetectionMethod:v("getDetectionMethod"),getContainerDims:v("getContainerDims"),getViewState:x,getViewStateIgnoringRender:function(){return x(!0)},getPercentInView:r,getPercentInViewIgnoringRender:function(){return r(!0)},
isHidden:v("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(a){var b,e=[],f=c[0],h=k.OUT_OF_VIEW_REASONS;f&&(b=d||x(),p(a)?e.push(h.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(h.GEOM),f.isHidden()&&e.push(h.HIDDEN),f.isObstructed()&&e.push(h.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:v("getSliceStatus")}},
td=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){q.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;q.setTimeout(function(){b=!1},40)};l.getAggregator().on("adComponentClicked",d);l.getAggregator().on("adComponentMousedOver",d);z.whenReady(function(){try{c.observe(K.body,
{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},q.getDoc())}},Bd=function(a,b){var c=[ud(),vd()],d=[ka(),wd(),xd(),yd(),zd(),Ad()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},xd=function(){var a,b,c,d=function(a){a?a&&c&&(q.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){b=b||ha();var c=t.crossQuerySelector(ha().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},S=function(a,b,c){var d;a=t.findChildWithLargestContent(a||m.contextNode.parentNode,b,c);1<t.getNodeArea(a)&&!a[k.IAS_DETECTOR]&&(d=a);return d},zd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return s.embedded},getAdContainer:function(){return m.contextNode.parentNode},
allowForAdContainerChange:!0}},Cd=function(){var a,b=q.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return I.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,
b){return t.crossQuerySelector(b,!0)})}catch(c){}return a}}},Dd=function(){return{isApplicable:function(a,b){var c;try{c=t.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&I.contains(c,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Ed=function(){var a,b,c=q.getDoc(),d=function(){var b;a||(a=(b=(b=t.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&
b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=q.getWindow(),k=a.friendlyIframe&&q.getWindow().frameElement,k=k&&B(k).isOneByOne(),r=function(){var a=q.getDoc().scripts;return f(a).findFirst(function(a,b){return I.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&
!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&r&&c&&k&&d()&&e()},getCssSelector:e}},ha=function(){var a,b=l.getAggregator().request("features");a||(a=[Ed(),Dd(),Cd()]);return f(a).findFirst(function(a,d){return d.isApplicable(s,b)})},yd=function(){var a,b=function(){q.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},
find:function(){var c,d=Da().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=t.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Da=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&I.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&t.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ka=function(){var a=l.getAggregator().request("mobileApp");
return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=t.findChildWithLargestContent(q.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},vd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},find:function(){var b=t.crossQuerySelector(m._cl_adpath);
b&&(a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ud=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return s.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=t.crossQuerySelector(d))a=t.getParent(c),1>t.getNodeArea(c)&&(a=c,c=t.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},Ad=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:S,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},wd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:l.getAggregator().request("video").findAdNode,isApplicable:s.isVideo,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ld=function(a,b){var c,d;c=[Fd(),
Gd(),Hd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Id();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Hd=function(){return{calcDims:function(a,b){var c,d,e=new B(a);t.isClippable(a,b)&&(c=t.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(s.isSpecifiedAd()||s.isBustedIframe())&&t.nodeIsInWindow(a,q.getTop());
a=!t.elementIsEmbedded(a);return b||a}}},Gd=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||s.isBustedIframe())&&t.elementIsEmbedded(a)}}},Fd=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new B(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,
allowsOptimization:!1,isApplicable:function(a,c){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!t.nodeIsInWindow(c,q.getTop()),e=s.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},Id=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=Z();var c=l.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,
e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},kd=function(a){var b,c,d,e=l.getAggregator().request("features"),h=l.getAggregator().request("browser");a=a||q.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:q.getMaxNumber(),height:q.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,n=e.length;h<n;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=q.min(c.width,d.width),c.height=q.min(c.height,d.height)}catch(s){l.getAggregator().trigger("error",
k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==q.getTop()&&m(b.parent,c)}return c},n=function(){var n,r={};try{var x,E,v,w,z,A,y=q.getMaxNumber(),C=q.getMaxNumber();s.friendly?(x=m(),v=x.left,w=x.top,y=x.width,C=x.height,E=t.browserWindowPosition(),z=E.scrX+v,A=E.scrY+w):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||l.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),z=c.scrX,A=c.scrY):f.isDef(a.mozInnerScreenX)&&(z=q.round(a.mozInnerScreenX),A=q.round(a.mozInnerScreenY));var r=
{scrX:z,scrY:A,iFrameClippingWidth:y,iFrameClippingHeight:C},F,D,B=b||t.getIeDimObj(a);b=B;f.isDef(a.innerWidth)?(F=a.innerWidth,D=a.innerHeight):B&&f.isDef(B.clientWidth)?(F=B.clientWidth,D=B.clientHeight,0===F&&0<B.offsetWidth&&(F=B.offsetWidth),0===D&&0<B.offsetHeight&&(D=B.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(F=a.frameElement.clientWidth,D=a.frameElement.clientHeight);n=F;r.height=D;r.width=n}catch(J){l.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return r};
return{calcDims:function(){return new B(n())},getClippedDims:function(){var a=n();return new B({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Db=function(){return{createInstance:function(a,b,c){return s.isDomless()?new Jd:new Kd(a,b,c)}}},Kd=function(a,b,c){var d,e=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,h=sd(b,c),l=function(){var a,b,e;d=d||Bd(s,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),
e=d.allowForAdContainerChange,f(a).each(function(a,c){h.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;h.hasAd()||(a=t.getPlaceholderSpan(),e.insertBefore(a,m.contextNode.nextSibling),h.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))};td(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?l():h.refresh();return h},getDetectionMethod:function(){}}},Jd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},mb=function(a){var b,
c=[],d=a||w,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||
a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},lb=function(a){var b=new Ld,c=new Md;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||s.isDomless()||s.isAvid()||s.isAvidNative())d=b.detect(),b.hasDetectedMobileApp()&&
(c.detect(),l.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),l.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){l.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Nd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(s.isDomless())return!1;var b=q.getWindow().location.href,
c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(s.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(K.referrer)}catch(k){}}try{"jsi"!==m.mode&&c.push(w.location.href)}catch(n){}try{c.push(m.jsref)}catch(l){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,h,k,n="mobfox"===d?c:[b];for(k=0;k<n.length;k++){h=n[k];var l="string"===typeof d?[d]:d;if(f(l).isArray()&&(l[0].substring(0,
4),l))for(var m=0;m<l.length&&(e=-1<h.indexOf(l[m]),!1!==e);m++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=q.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(I.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",
detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return t.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Oa=function(){var a=function(a,c){var d,e=Nd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Od=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",
detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},
{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",
detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Ld=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,f=Oa().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){m.hasOwnProperty("serverSideAppDetection")&&0!==m.serverSideAppDetection.length?
a="s_serv":(a=f(Od).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Md=function(){var a=[],b=[],c=function(b,c){var f,k=Oa().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=f(Pd).map(c);0<b.length&&l.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==
b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Pd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],
url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},
{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],md=function(a){var b=[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},U=function(){var a=
k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},pd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),
k=Math.min(d.rightX,f.rightX),n=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new W(h,k,n,f))}});return c},e=function(a,b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=
1;a!==c.mbp&&c.mbivs.push([s.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},qd=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var k,n=[];k=c.getRounded();c=k.height;var l=k.scrY,m=new B({scrX:k.scrX,
width:k.width}),s=b.getConfig(k).numberOfSlices;m.set("height",q.floor(c/s));for(var t=0;t<s;t++)m.set("scrY",q.ceil(l+c/s*t)),k=100===a.calcPercentInView(m,d,e,f),n.push(k);return n}}},W=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),n=Math.ceil(d),l=f-e,m=n-k,q=l*m,s=function(){return{leftX:e,rightX:f,topY:k,bottomY:n,width:l,height:m,area:q}};return{value:s,doesIntersect:function(a){var b=s();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},nd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},od=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,
m=d.left-f.left,f=d.top-f.top,f=new W(m,m+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new W(0,b,f[d],f[d+1]));h();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ia=function(){var a=function(a){var b=!1;Qd.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):
e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Qd=[{PARTNER_NAME:"IAB"},
{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Rd=function(){return{listenForResult:function(){l.getAggregator().on("videoBlockResult",function(a){var b=l.getAggregator().request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Sd=function(a,b){var c,d,e,h,k;e=l.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&
delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=q.getWindow();
return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===
e?l.getAggregator().persistentTrigger(e,h,k):l.getAggregator().trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Td=function(){var a=[];return{registerEvent:function(b,c,d){b=new Sd(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Ud=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&
a.hasAlwaysBeen(!0)&&l.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},m=function(a){a=(new Pa).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Vd=function(){var a=
{AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Pa=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},gb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,h,u,n,p=[],r=k.OUT_OF_VIEW,t=!1,w=!1,v=!1,y=!0,C=new Td,A=Ud(),B=new Rd,D=new Pa,F=new Ea,J=function(b){var d;
t=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=C.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(w=!0,r=v?k.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,r=k.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,r=w?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(v=!1,r=w?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(D)),0<b?y=!0:0===b&&(y=!1));p.push(d);n&&O();return d},I=function(b){var c,h,k=na().wrapToGlobal(J),n=function(a){f.isStr(a)&&(l.getAggregator().provide("vc",
function(){return a}),l.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),t=!0,n(c||"n")}catch(r){__IntegralASDiagnosticCall("handshakefailure",r,m)}},K=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};h||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,
b){var d=q.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},m));return h},M=function(){var a=K();a&&!t&&I(a);return a},N=function(a){a=D.getVolumeFromContext(a);y=f.isDef(a)?0<a:!1},O=function(){F.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&l.getAggregator().trigger("sendDt",
k.DT_CODES.VIDEO_EVENTS),l.getAggregator().trigger("videoQuartileEvent",b)))});p=[];n=!0};(function(){z.addEvent(q.getWindow(),"message",function(a){J(a)});l.getAggregator().on({volumeChanged:N});l.getAggregator().provide({videoEventsString:C,videoVersion:function(){var a,b=M();try{a=b.getVersion()}catch(c){a=-1,l.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Vd},adNode:M});M();B.listenForResult();A.isApplicable(s)&&A.start(c)})();
return{findAdNode:M,getViewStateOverride:function(){return r},isHandshakeComplete:function(){return t},triggerInitializationEvents:O,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=y;a.isVideoPlayingInFullscreen=!1;if(r){if(r===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:r;a.isVideoPlaying=r===k.IN_VIEW}v&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=
!0)}}},Wd=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Rb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new Ba;d=0;e(!0);b.start()},m=function(d,e,k,n){d=c[d];n?(f.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||h();a=!0},n=function(c,d,e){l.getAggregator().trigger("addOutputItem",{output:d},
c,e);b&&b.isActive()||h();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(l.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});l.getAggregator().on("addThrottledProp",m);l.getAggregator().on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Wb=function(){var a={},b=function(b){a[b]||(a[b]=
new Aa(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Xd=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Bb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,
c){b[c.getType()]=c}),l.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));l.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},aa=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});
return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Cb=function(){function a(){}a.build=function(){var a=[];a.push(new aa(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=l.getAggregator().request("vc");var d={jv3:Qa,av3:Qa,jvw:Xd,avw:Wd};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Qa=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.getAggregator().trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){z.addEvent(w,"load",function(){l.getAggregator().trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ba;a.onTick({4:function(){l.getAggregator().trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){l.getAggregator().trigger("measureTime",
R.IDS.IN_BROWSER_DELAY)}});a.start()}},J={isFrameworkAvailable:function(a,b){var c,d,e=q.getTop(),f=q.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=frame)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=J.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),z.removeEvent(q.getWindow(),"message",d))}catch(f){l.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},
getCallId:function(){return"ias_"+m.asid},send:function(a,b){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}};l("CCPAConsentDetector",[],function(){function a(a){a&&J.send(b,f(a).toION())}var b="ccd";(function(){var b=J.isFrameworkAvailable("__uspapi","__uspapiLocator");J.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:J.getCallId()}},e=J.getMessageHandler("__uspapiReturn",a),z.addEvent(q.getWindow(),
"message",e),b.postMessage(d,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};J.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=J.isFrameworkAvailable("__cmp",
"__cmpLocator");J.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:J.getCallId()}},h=J.getMessageHandler("__cmpReturn",a),z.addEvent(q.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRV2ConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?
a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};J.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=J.isFrameworkAvailable("__tcfapi","__tcfapiLocator");J.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:J.getCallId(),version:2}},h=J.getMessageHandler("__tcfapiReturn",a),z.addEvent(q.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,
b,c){return b.hasPostMessage()&&!c.isDomless()}});l("postMessageDetector",[],function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=q.getWindow();z.addEvent(d,"message",c);d.postMessage(b,"*");q.execAtEndOfThread(function(){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",f.stringifyTriState(a));z.removeEvent(d,"message",c)})})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});l("safeFrameDetector",
[],function(){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",f.stringifyTriState(s.isSafeFrame()))},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Ob=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){l.getAggregator().trigger("notify",b)})},e=function(){var e;e=new O(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.getAggregator().trigger("jsonp",e,d,!0);l.getAggregator().trigger("updateDtCount")};return{start:function(){l.getAggregator().on("sendCookie",
e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Qb=function(a,b,c,d,e,f,q){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var r,t=d.baseUrl,w,v,z=f.getDocumentMode();"number"===typeof z?(v=2E3,8===z?v=4E3:8<z&&(v=8E3)):v=n(m.sp_imp_maxLength,2E3);w=v;if(s.integratedBlockingApplies(t)){v=t;var y=l.getAggregator().request("mobileApp"),A=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),
C=m.contextNode.getAttribute("data-ias-container"),D=m.contextNode.getAttribute("data-ias-callback"),y=v+"adContainerId="+C+"&cbFunctionName="+D,y=A?y.replace("monitoring","blocking"):y.replace("skeleton.js",m.integration+".js"),B=m.protocol+":"+m.staticServer+m.integration+"a.js",J=m.protocol+":"+m.staticServer+m.integration+".js",t=y+"&true_pb="+encodeURIComponent(m.passback)+(A?"&redirectUrl="+encodeURIComponent(J):"")+(A?"&passback=":"&adsafe_pb=")+encodeURIComponent(B)+"&"}var A=t=t.replace(k.UNIQUE_ID_TOKEN,
m.asid),I=t.length,K,M,N=n(m.sp_imp_jsInfo_minLength,0),B="";try{K=w-I-N,0<K&&(M=Yd(p,K,14,b.on("partialUrls")),B+=M.join("&"))}catch(O){a.add(k.ERROR_CODES.IMPRESSION_URLS)}t=A+B;p=t+="&"===t.slice(-1)?"":"&";var Q,I="";try{Q=w-t.length,I+=Zd(Q,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(R){a.add(k.ERROR_CODES.JSINFO),I+="adsafe_jsinfo=e:"+a.toString()}t=p+I;d.macroUrl&&(t+="&"===t.slice(-1)?"":"&",t+=d.macroUrl);r=t;d.sendImpression(r);m.impUrl=r;l.getAggregator().trigger("impressionsent")}catch(S){__IntegralASDiagnosticCall("impsend",
S,m)}}}},Zd=function(a,b,c,d,e,h,t,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};s.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?q.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(q.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||
n.requiresDelayedViewabilityEvent();a=b;var x=a.viewState;b=e.getAvidIds();x=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+x,"em:"+s.embedded,"fr:"+s.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(x.push("abi:"+b.bundleIdentifier),x.push("apn:"+b.partner),x.push("apv:"+b.partnerVersion));a=$d(a,c,d,e,h,t,n);l.getAggregator().trigger("eligiblerender");return{primary:x,secondary:a}}())},$d=function(a,b,c,d,e,h,u){var n=[],p=l.getAggregator().request("mPage");n.push("mn:"+m.mn);n.push("pt:"+
function(){var b=u.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());n.push(f(h.params()).toParams());c.on("mrcAudit")&&!s.isDomless()&&n.push("dvs:"+q.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+m.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(q.now()-m.birthdate));
m.perf.mark("si");c.on("swapids")?n.push("oid:"+m.oid):n.push("uid:"+d.unq);n.push("v:19.8.110");n.push("sp:"+(m.isSplitMode?1:0));n.push("fwm:"+("true"===m.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(t.windowSize()).toArray().join(".")),n.push("sr:"+f(t.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+
b);return n},Yd=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Mb=function(){return{isApplicable:function(a){a=
q.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=q.getWindow();a=ae(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},de=function(a,b){return{start:function(){try{var c=be(),d=c.getMethodName(a),e=new O(b.getEnabledScriptUrl(a)),f=ce,m=q.getDoc();(new f(m.body||
m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},be=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),l.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:k,features:b,context:s,dtBaseURL:m.dtBaseURL,spg:Ra};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Ub=function(){return{start:function(a,b){f(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&de(d,b).start()})}}},ae=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=I.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=q.floor(q.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ce=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=t.createHiddenIframe();c.setAttribute("src","about:blank");(a||m.contextNode.parentNode).appendChild(c);
f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Ra=function(a){var b=new za;(function(){b.listen(function(b){return b&&
b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==m.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();q.setTimeout(function(){a.isDtCallAlreadySent()||(l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},q.round(1E3*q.random()))})})();(function(){l.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),q.setTimeout(a.sendToOtherTags,1300),q.setTimeout(a.sendToOtherTags,
3200))})})()};l("spg",["spgCache"],Ra,{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});l("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,f(b).each(function(a,b){l.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),l.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,
isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&h()},isFull:d,sendToOtherTags:function(){(new ga).send({scaInfoOriginatorASID:m.asid,cache:b})}}},{});try{Sa()}catch(ee){__IntegralASDiagnosticCall("main",ee,m)}};try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
