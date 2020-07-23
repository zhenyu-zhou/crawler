var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'false',
		version: '19.8.104',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.104.js"},
		protocol: 'https',
		jsref: "",
		asid: "59c3a648-cc9c-11ea-9da7-067641d02172",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100,rvCombo:100,mobSafIO:100",
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
		mn: "app07or",
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
__IntegralASConfig.initialize=function(n,w,N){function Ua(){var g,a,b;n.perf.markStart(na);l.startSystem();y=l.getAggregator();y.provide({omidAdSessionContext:{}});y.provide({omidAdSessionVerificationParameters:{}});g=Va();a=oa();b=(new Wa).createInstance(g,a);y.provide({mErrors:g,mJsonp:a,mComm:b});g=__IASOmidVerificationClient;y.provide({omidVerificationClient:g});y.once("callContinueMain",function(){var a,b;n.perf.markStart(pa);b=Y.instantiateModules();a=Y.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,s,b.renderDetector);Y.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);Y.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,s);n.perf.markEnd(pa)});y.on("tryToCallContinueMain",function(a){n.isResolved?y.trigger("callContinueMain"):y.trigger("requestBootstrapper",
a)});y.once("requestBootstrapper",function(a){var b=n.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,h=a&&a.sca,t=a&&a.xsca;e&&y.trigger("jsonp",b+"/jsconfig"+e+(n.adSessionId?"&adSessionId="+n.adSessionId:""),function(a){Object.assign(n,"string"===typeof a?JSON.parse(a):a);n.isResolved=!0;n.sp_cdnScripts={sca:h,xsca:t};y.trigger("callContinueMain")},!1,"cbName")});g=[{environment:new da(g),adSessionReadyStrategy:new Xa(g)},{environment:new Ya,
adSessionReadyStrategy:new Za}];(new $a(g)).resolve().adSessionReadyStrategy.start();n.perf.markEnd(na)}var y,Y=function(){function g(a){var b=new ab(a,s),c=new bb,d=new cb(a,s),p=db(a,s),q=(new eb(n,s,a)).resolve(),g=[b],D=[];p.applies()&&g.push(p);d.applies()&&g.push(d);c.applies(a,s)&&g.push(c);f(q).each(function(a,b){g.push(new fb(b,s));D.push(b.id)});0<D.length&&(y.trigger("addOutputItem",{output:D.join(".")},"scm",{type:k.IMPRESSION_EVENT}),y.trigger("addOutputItem",{output:D},"metricIdList",
{type:k.DT_CODES.UNLOAD,asION:!0}));return g}function a(a,b,c,d){var p=g(a);y.provide("viewabilityDefinitions",p);return f(p).map(function(q,p){var g,f,l;g=new qa(p,b);var K=(new gb(c,a,p.rts)).getCallbacks(),x=new ra(d.createPingJobs(p.type,p.timeInViewThresholds,K,p.metricId));p.sendOtherwiseInViewSignal&&(l=new qa(p,b,p.sendOtherwiseInViewSignal),f=new ra(d.createPingJobs(p.type,p.timeInViewThresholds,K,p.metricId,p.sendOtherwiseInViewSignal)));p.rtsCallbacks=K;p.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?
g=new hb(g,p,x,s.isVideo()):(g=new sa(g,new Z(p.minUnit),x),p.sendOtherwiseInViewSignal&&(f=new sa(l,new Z(p.minUnit),f,p.sendOtherwiseInViewSignal),f.start()));g.start();return g})}function b(a,b){var c=(new ea).accepts(),c=!s.isAvid()&&!c&&!s.isInMobiMraidVideo();return s.isVideo()&&c?ib(n.videoId,a,b):{}}function c(a,b,c,d,p,q,g,D,v,E){try{n.perf.markStart(ta),n.tpiLookupURL&&jb(g,D).init(n.tpiLookupURL),s.isDomless()||E.isStarted()&&E.sendOriginList(),l.runAll(),r.execAtEndOfThread(function(){var q;
try{n.perf.markStart(ua);q={output:(new Date).getTime()-p};a.addItem(q,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});n.perf.markEnd(ua);var g,A;n.isSplitMode&&(A=n.protocol+"://"+n.sp_cdnScripts.main,n.perf.markResource(kb,A));n.impUrl&&n.perf.markResource(lb,n.impUrl);g=n.perf.getData();y.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(D){d.add(k.ERROR_CODES.ADTALK_DELAY)}}),
n.perf.markEnd(ta)}catch(K){d.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,m,p,q,g,f,v){var k;"true"!==n.minimizeCalls&&(k=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,d,m,k,p,q,g,f,v)}))}return{instantiateModules:function(){var c,d,t,m,p,q,g,f,v={};n.perf.markStart(va);y=l.getAggregator();v.mFeatures=y.provide("features",mb());y.provide("mobileApp",function(){return c=c||new nb(v.mFeatures)});y.provide("avidJsClient",function(){return d=d||new ob(r.getWindow())});y.provide("context",
s);v.mBrowser=y.provide("browser",(new pb).createInstance());v.mErrors=y.request("mErrors");v.mIds=y.provide("ids",qb());v.iOutput=new rb(y);y.request("mJsonp");v.mComm=y.request("mComm");v.viewabilityMeasurement=(new sb(new tb(v.mIds),v.mFeatures,v.mBrowser)).create();if((m=y.request("omidAdSessionContext"))&&m.queuedOutputItems)for(q=0;q<m.queuedOutputItems.length;q++)y.trigger("addOutputItem",{output:m.queuedOutputItems[q].value},m.queuedOutputItems[q].code,{type:"impression"});v.mFeatures.on("swapids")&&
(n.oid=n.asid,n.asid=v.mIds.unq);v.mAdTalk=(new ub).createInstance(v.mFeatures);t=vb();m=wb(y);p=y.provide("mPage",(new xb).createInstance());v.mAncestorOrigins=yb();v.mPageUrls=y.provide("pageUrls",(new zb).createInstance(v.mAncestorOrigins,r));q=y.provide("mScreenEvents",Ab());y.provide("ieXDomainViewability",Bb(v.mBrowser));g=Cb(v.mBrowser);f=b(v.mFeatures,q);v.mVideo=y.provide("video",f);Db(Eb.build());g=(new Fb).createInstance(v.mErrors,g,v.mFeatures);p=(new Gb).createInstance(g,v.mErrors,p,
s);f=y.provide("jobFactory",Hb());v.mDataTransfer=Ib(g,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,q,t);t=Jb(v.mErrors,v.mFeatures,y,m);v.mMode=Kb(t,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=y.provide("viewability",Lb(new H,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,y,v.iOutput,p,q,v.mVideo));a(v.mFeatures,v.mViewability,m,f);v.loopDelay=wa();v.renderDetector=Mb();v.mDataTransfer.setViewabilityMod(v.mViewability);n.perf.markEnd(va);return v},preImpression:function(a,
b,c,d,p,q,g,f,v,l,K){var x,C,r,B,s;n.perf.markStart(xa);n.b11="1"===n.adHeight&&"1"===n.adWidth?"true":"false";n.cnod=n.contextNode?"true":"false";try{c.isApplicable(l)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(x=c.getIdMap())&&d.addItem(x,"idMap"))}catch(F){p.add(k.ERROR_CODES.ADTALK_GENERAL)}try{q.isApplicable(g,v,l)&&q.start(),s=f.detectTopURL(),v.on("exch")&&(C=(new Nb).createInstance(p,d),C.parse(s)),r=Ob(),r.isApplicable(v)&&
r.start(v),l.usesGroupMCustomMetric()&&Pb(),B=Qb(),B.isApplicable(v)&&(B.start(),y.trigger("sendCookie")),K.start()}catch(u){p.add(k.ERROR_CODES.IMPRESSION_LEADUP)}n.perf.markEnd(xa);return s},sendImpression:function(a,b,c,d,p,q,g,k,v){try{Sb(a,b,c,d,p,q,g).send(k),f.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(l){__IntegralASDiagnosticCall("impsend",l,n)}},postImpression:function(a,b,c,m,p,q,g,f,v,E,K,x,C){try{n.perf.markStart(ya);var r=Tb();r.start();r.addFieldTypes([k.DT_SLOT.IM,
k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var B=Ub(a,b,c);B.isApplicable(m)&&B.start();var s;m.bootstrapOn("getTpl")&&m.on("usetpl")&&(s=Vb(p,q,g,b,f),s.init());d(f,v,E,g,m,p,q,b,x);K&&K.start&&K.start();C.isDomless()||Wb().start(["sca","xsca","rsrch"],m);Xb();l.runTier(k.TIERS.VIEWABILITY);var F=Yb();F.isApplicable(m)&&(F.start(),T.recordBlockingTime(),n.perf.mark(Zb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());n.perf.markEnd(ya)}catch(u){g.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(g){return new I(g)},I=function(g){this.iterable=g};I.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};I.prototype.isArray=function(){return this.iterable instanceof Array};I.prototype.isEmpty=function(g){return 0===this.keys(g).length};I.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};I.prototype.map=
function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};I.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};I.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=f(c).toION(g,a);return d?m:(g[b]||b)+":"+m}));return c+b.join(",")+d};I.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};I.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};I.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};I.prototype.mapToObj=
function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};I.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};I.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};I.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};I.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};I.prototype.keys=function(g){var a=
[];this.each(function(b){a.push(b)},g);return a};I.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};I.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};I.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};I.prototype.toArray=function(){return this.map(function(g,a){return a})};I.prototype.JSONStringify=function(){var g,
a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};I.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<
g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);
return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||w;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=
a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var l=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,q){q=q||{};var A,k,v=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},l=function(){if(!A){var a=[];A=!0;v(["features","browser","context"]);q.emits&&
(c.events=new H);if(!q.applies||q.applies.apply(q,b))k=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=q.tier;f.isDef(b)&&(a[b]=a[b]||new fa,a[b].push(l))})();g.provide(d,function(){var a;l();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new za;f(c).each(function(a,b){e.apply({},
b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},
DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",
HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},na="mf",pa="cm",va="in",xa="pr",ya="po",Zb="bl",ta="lo",ua="lt",kb="md",lb="id",$b=function(){var g,a,b=0,c=["STYLE","SCRIPT","HEAD","META"],d=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),e=function(a){var b=u.getNodeName(a);a=h(a)||"IFRAME"===b;return b?a:!1},h=function(a){var b=u.getNodeName(a),c=a&&a.children&&0===a.children.length&&a.innerText&&0<a.innerText.length;return b?-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase())||u.hasBackgroundImage(a)||
c:!1},t=function(a,b){var c;try{c=a.document}catch(d){c=n.contextNode.ownerDocument}return V(c,b,e)},m=function(a){var b=[],e=(a=a&&a.getElementsByTagName&&a.getElementsByTagName("*"))&&a.length,h,t;if(a)for(var p=0;p<e;p++)t=(h=a[p])&&h.nodeName&&h.nodeName.toUpperCase(),!h.children||0!==h.children.length||f(d).contains(t)||f(c).contains(t)||f(b).contains(t)||b.push(t);return d.concat(b)},p=function(c){var d;g=g||n.contextNode.parentNode;if(c)if(u.isNodeXDomainIframe(c))d=c;else if(h(c))d=c;else{g=
c;d=p;var f;if((n.useFIF&&s.friendlyIframe||s.isSpecifiedAd())&&3>b)a:{var v=c,E,K,x,C,Q=u.getNodeName(v);c=r.getTop()&&r.getTop().document;try{x=m(v);if(c&&v===c.body){f=null;break a}u.isWindow(v)?(E=t(v,x),E||(C="["+k.AD_IDENTIFIER+"-"+n.asid+"]",K=u.crossQuerySelector(C),a=K.parentNode,E=V(a,x,e))):("IFRAME"===Q?v=v.contentWindow.document:a=v,x=m(v),E=V(v,x,e));void 0===E&&a&&a.parentNode&&(a=E=a.parentNode,b+=1)}catch(B){l.getAggregator().trigger("renderdiag",B)}f=E}else{f=c;E=u.getNodeName(f);
try{Q=m(f),u.isWindow(f)?v=t(f,Q):("IFRAME"===E&&(f=f.contentWindow.document,Q=m(f)),v=V(f,Q,e))}catch(L){l.getAggregator().trigger("renderdiag",L)}f=v}d=d(f)}else d=null;return d};return{find:p,getClosestContainerName:function(){return u.getNodeName(g)}}},Mb=function(){var g,a=!1,b=!1,c={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},d={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},e=l.getAggregator().request("omidAdSessionContext"),h=function(){a=!0},t=function(a){a&&
(a.status=k.RENDER.STATUS.DETECTED);l.getAggregator().trigger("adRendered")},m=function(){var a=!1;s.isOmid()&&e&&e.useOMID13Logic&&(a=!0);return a},p=function(a){var b={},c=r.getDoc(),d=function(e){var h=e&&e.type;if("readystatechange"===h&&"complete"===e.target.readyState||"load"===h)t(b),g.saveNode(a),"readystatechange"===h?g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===h&&g.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),D(b),z.removeEvent(a,"load",d),z.removeEvent(c,"readystatechange",d)};"complete"===
c.readyState?(t(b),g.saveNode(a),g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(z.addEvent(a,"load",d),z.addEvent(c,"readystatechange",d));return b},q=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),d=function(){z.removeEvent(a,"ready",d);g.save(k.RENDER.DETAILS.ENVIRONMENT);g.save(k.RENDER.DIAGNOSTIC.MRAID_READY);t();D({status:k.RENDER.STATUS.DETECTED})};g.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(t(),g.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),c.status=k.RENDER.STATUS.DETECTED):
"loading"===b?(z.addEvent(a,"ready",d),g.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(z.addEvent(a,"ready",d),g.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));D(c)},f=function(a){a===k.RENDER.STATUS.DETECTED&&l.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},D=function(b){var d=g.build();b=b.status||c.status;d=d?d:c.details;a&&b===k.RENDER.STATUS.DETECTED?(f(b),l.getAggregator().trigger("addThrottledOutputItem",
"rend",b),l.getAggregator().trigger("addThrottledOutputItem","renddet",d)):(f(b),l.getAggregator().trigger("addOutputItem",{output:b},"rend"),l.getAggregator().trigger("addOutputItem",{output:d},"renddet"))},v=function(){l.getAggregator().on("primaryadfound",function(a){var b,d=c,e=new $b,h=!0,m=function(){var c=a&&a.getAdNode(),m=e.find(c);if(u.isNodeXDomainIframe(m))b?r.clearInterval(b):h=!1,d=p(m);else if(m){var c=!1,q=u.getRect(m);m&&"IMG"===u.getNodeName(m)&&(c=0===m.naturalWidth||0===m.naturalHeight);
!c&&q.width>=k.RENDER.WIDTH_THRESHOLD&&q.height>=k.RENDER.HEIGHT_THRESHOLD&&(t(d),b?r.clearInterval(b):h=!1);g.saveNode(m)}else m=e.getClosestContainerName()||g.getAdNodeName(c)||d.details,g.save(m);D(d)},f=l.getAggregator().request("mobileApp");f&&f.isMobileAppEnvironment&&f.isMobileAppEnvironment()&&s.isMraid()?q():(m(),h&&(b=r.setInterval(m,500)));l.getAggregator().trigger("eligiblerender")})},E=function(){var a=e&&!!e.isVideo,c=e&&!!e.videoStartArrived,h=e&&!!e.geometryArrived;return b||!h||a&&
!c?!1:(l.getAggregator().trigger("eligiblerender"),g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),t(),D(d),b=!0)};return{start:function(){var a=!1;l.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});l.getAggregator().on("adRendered",function(){a=!0});l.getAggregator().provide("adRenderStatus",function(){return a});g=new ac;new bc;l.getAggregator().on("impressionsent",h);m()?E()||(g.save(k.RENDER.DETAILS.ENVIRONMENT),
g.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),D(c),l.getAggregator().on("omidrendgeoupdate",function(){E()}),l.getAggregator().on("omidrendvideostart",function(){E()})):s.isAvid()||s.isOmid()||s.isVideo()?(l.getAggregator().trigger("eligiblerender"),g.save(d.details),t(),D(d)):(D(c),v())}}},ac=function(){var g=[],a=[],b=function(a){var b;if(u.isWindow(a))b="WINDOW";else if(u.isNodeXDomainIframe(a))b="XIFRAME";else try{b=u.getNodeName(a)}catch(h){c("nen")}return b},c=function(a){g.push(a)};return{build:function(){var b=
[];f(a).each(function(a,c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),h=d&&u.getRect(d),t=d&&"IMG"===e,m=d&&u.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,q=d&&d.children&&0===d.children.length&&p,g=h&&h.width>=k.RENDER.WIDTH_THRESHOLD&&h.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,f=(m||t)&&(0===d.naturalWidth||0===d.naturalHeight);
a.push(e);a.push(g);f&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);m&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);q&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(v){c("sne")}}}},bc=function(g){var a,b=!1,c=!1,d=function(){l.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a),l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};l.getAggregator().on("eligiblerender",function(){b=!0;d()});l.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},aa=function(){return{applies:function(g,a){var b=l.getAggregator().request("mobileApp"),c=!a.bootstrapOn("mobOrTab")&&g.browserIs(k.BROWSERS.WEBKIT);return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||(a.on("mobSafIO")?g.browserIs(k.BROWSERS.WEBKIT):c)||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Pb=function(){var g,a,b=!1,c=l.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.getAggregator().trigger("sendDt",
k.DT_CODES.LARGE_BILLABLE))};l.getAggregator().on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});l.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},vb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=s.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},
za=function(){var g=new cc,a=new H;return f(g).mixin(a)},H=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new fa;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();
c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},ga=function(){var g=function(a,c,d){var e,h=c.length,t=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);d&&d(a,c);if(t&&t.length){for(a=0;a<t.length;a++)(e=t[a])&&u.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},
fa=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},ra=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Aa=function(){var g,a=new ha,b=function(b,d,e,h){var t,m,p,q;if(JSON&&JSON.parse)try{t=JSON.parse(b.data),m=b.source,q=f.noop,d(t)&&
(h&&(p=h(m,t))&&(q=function(){a.send(function(){return p},m)}),e(b,t,q))}catch(g){t&&l.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};z.addEvent(w,"message",g)},stop:function(){g&&z.removeEvent(w,"message",g);g=null}}},ha=function(){var g=function(a){return f(a).isObj()?[a]:(new ga).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&
JSON.stringify){var d=g(c);f(d).each(function(c,d){var t;t=f.resolve(b,d)||{};t.sentTime=r.now();t=a(t);d.postMessage(f(t).JSONStringify(),"*")})}}}},dc=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},rb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=
f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),
e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},cc=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Gb=function(){return{createInstance:function(g,a,b,
c){return s.isDomless()?new ec:new fc(g,a,b,c)}}},fc=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),t=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:G(u.calcWinDims()),p=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:s.embedded,winDimensions:m,adDimensions:p};!0===t&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),
viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(t),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},ec=function(){return{collect:function(){return{}}}},gc=
function(g){g=g||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ba=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var t=e||a;0===c%b&&(h+=r.now()-
t,d++);c++},getTime:function(){return h},getCount:function(){return d}}},Ca=function(){var g,a=0,b=0,c=new H(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},hc=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&
g();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},Z=function(g){var a,b,c=0,d=s.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=s.getTagTime();h=!1},mark:function(){a=h?s.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=s.getTagTime();h=!0}}},S=function(g,a){var b=g||n.adsafeSrc||n.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?n.protocol+":"+b:n.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),
c=b[1],d=b[2],e=b[3],h=b[4],t=b[5],m=g?b[6]:"",p=a?b[7]:"",q={},A=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(t=a);return t},v=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=q[b])?q[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:A,master:k,setParam:function(a,b){q[a]=q[a]||{};f(b).isObj()?f(q[a]).mixin(b):q[a]=b},path:function(a){m=
a},toString:function(){var a=A()?A()+".":"",b=m?"/"+m:"",c;p||!f(q).isEmpty()?(c=f(q).isEmpty()?"":f(q).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},Xb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(s.friendly&&!s.isMobileApp())if(b=l.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=
u.getOurNodeInTop()){var h=u.getAncestorNodes(d);e=f(h).map(a)}if(b=e=e&&g(e))l.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),l.getAggregator().provide("adSlotIds",b),c=b}return c}catch(t){l.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()};l("AdRefreshDetection",[],function(){var g=[30,45,60,90],a={start:function(){var a=this,c=n.asid,d=this.getChanId(),e=n&&n.contextNode&&n.contextNode.nextSibling&&n.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,
d,e,function(c,d){c?l.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=n.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;l.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var h=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);h.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=n.adRefreshThreshold&&parseInt(n.adRefreshThreshold)||null,h=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))l.getAggregator().on("sendDt",
function(t,m){t===k.DT_CODES.PING&&m===e&&(r.execAtEndOfThread(function(){h.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);l.getAggregator().trigger("adSessionComplete")}};s.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});
return a},{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}});var yb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Vb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,p=0,q=0;e(h,
0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,p,++q)},!0);e(h,++p,q)})}catch(A){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+n.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Jb=function(g,a,b,c){return{enabled:"true"===n.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===n.accountForSadImps&&c.measure(a),n._onAPIResult&&n._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),
b.trigger("sendDiag","bapiClient")}}}},pb=function(){return{createInstance:function(g,a,b,c){return s.isDomless()?new ic:new jc}}},jc=function(){var g=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&
(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?
a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,t=r.getDoc(),m=t.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in t.documentElement.style)h="11";else for(m.style.behavior="url(#default#clientcaps)",t=0;t<e.length&&!(h=m.getComponentVersion(e[t],"componentid").replace(/,/g,"."));t++);}catch(p){}e=h;h=k.NA;m=r.getWindow();
f.isDef(m.navigator)&&f.isDef(m.navigator.appName)&&(h=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return P.contains(a,c)})};return P.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},ic=function(){var g=function(){return!1},
a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Wa=function(){return{createInstance:function(g,a){return s.isDomless()?new kc(a):new lc(g,a)}}},mc=function(){var g,a=function(a,c){var d="",e="",h=r.getDoc().getElementsByTagName("ins");if(h&&0<h.length){e=h[0];d="<ins";
for(h=0;h<e.attributes.length;h++)d+=" "+e.attributes[h].nodeName+'="'+e.attributes[h].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=l.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!s.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=l.getAggregator().request("omidAdSessionContext");var c="iasbi"+n.asid,d;d=n.contextNode.parentNode;var e,h=n.adWidth&&0<n.adWidth?n.adWidth:0,t=n.adHeight&&0<n.adHeight?n.adHeight:0,m=r.getDoc().getElementsByTagName("ins"),
p;p=e=0;m&&0<m.length&&(p=m[0],e=parseInt(p.style.width),p=parseInt(p.style.height));h=e||h||window.innerWidth;t=p||t||window.innerHeight;"complete"===r.getDoc().readyState&&(n.forceAppend="true");"true"===n.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=h+"px",d.style.height=t+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},lc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=N.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=N.createElement("SCRIPT"),d.src=b);n.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];s.isOmid()?(e=new mc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===n.forceAppend?c(a,b,d):N.write(d)},c=function(a,b,c){var d=!c&&z.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=N.createElement("script");c=c||n.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:n.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};l.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},kc=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:n.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},s=function(){var g="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return g||f.isDef(r.getWindow().mraid)},d=function(){return!g&&f.isDef(r.getWindow().mraid)},e=function(){var a=!1;if(!g)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},h=function(){var a;
if(!(a=-1!==n.mode.indexOf("jsvid"))){var b;a=!1;var c=l.getAggregator();if(!g&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===k.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=l.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===k.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},t=function(){return n.mobOrTab},m=function(a){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(b,
c){return P.contains(c.id,a)}).length},p=function(){return m("grpm")||n.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=S(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-n.birthdate},getPageTime:function(){var a=k.NA;!g&&f.isDef(w.chrome)&&f.isDef(w.chrome.csi)&&f.isFunction(w.chrome.csi)&&(a=r.round(w.chrome.csi().pageT));return a},isVideo:h,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;g||(a=(a=n._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;g||(a=b.exec(n._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!g&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=l.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ea).accepts()},isOmidForWeb:function(){return(new Da).accepts()},isDomless:function(){return g},
isAvidNative:function(){var a=!1,b=l.getAggregator();g||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ia());return a},isMraid:d,isSafeFrame:function(){var a=!1;g||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:t,usesIASFullyInViewCustomMetric:function(){return m("fiv")||
n.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;g||(a=Ea().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&t()},usesZeroPivCustomMetric:function(){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!g&&!c()&&!h()&&a&&"jload"===n.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;n.contextNode&&f.isFunction(n.contextNode.getAttribute)&&(c=n.contextNode.getAttribute("data-ias-check-tag"),d=n.contextNode.getAttribute("data-ias-check-done"),e=(e=n.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(r.getWindow()[e]));var h=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=n.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var t=!0===n.fwMonitoring||"true"===n.fwMonitoring;h&&a&&("true"===c&&"true"!==d&&e?(b=!0,t&&l.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,t||l.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(),z={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",z.mouseEnter(b),
c):"mouseleave"===a?g.addEventListener("mouseout",z.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=z.mouseEnter):"mouseleave"===a&&(a="mouseout",b=z.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=N.defaultView&&N.defaultView.getComputedStyle;b=b||"";d?c=(g=N.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(g,a){if(s.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(s.xDomainIframe?N:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(N.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},isSandboxed:function(g){var a,
b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
z.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},ba=function(g){var a,b=ba.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],
d=b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};ba.callTypeCounter={};var Ib=function(g,a,b,c,d,e,h,t){var m=0,p=0,q=!1,A=function(a,e,t,g,A,D){t=t||!b.on("postDts");var s=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(s||"n"!==h.getCurrentLoc()))try{var u=n.dtBaseURL,J=new S(u,!0),
w=r.now();l.getAggregator().trigger("preSendDt",a);u||(J.path("dt"),b.on("usedtdomain")&&J.sub("dt"));v(J,a,e);A&&A.field&&J.setParam(A.field,A.value);g||E(J,a);l.getAggregator().trigger("send",J,function(){p+=1;m=r.now()-w;f.isFunction(D)&&D()},t);a===k.DT_CODES.UNLOAD&&(q=!0);d.cleanup()}catch(z){__IntegralASDiagnosticCall("dt-"+a,z),l.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){q||A(k.DT_CODES.UNLOAD,-1,!0)};var D=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",
jss:"d",jsi:"e"},e=n.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&A(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},v=function(a,b,e){var h=new ba(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",n.asid);e={c:c.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},E=function(c,g){var f,q={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)q.clog=t,s.isVideo()&&(f=s.isOmid()&&!s.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=l.getAggregator().request(f))&&!f.isEmpty()&&(q.ve=f));g===k.DT_CODES.UNLOAD&&(q.ndt=p);-1!==n.mode.indexOf("jsvid")&&(q.vv=l.getAggregator().request("videoVersion"));
q.NULL1=b.output();q.NULL2=h.stringify(10);q.em=s.embedded;q.fr=s.friendly;q.e=a.toString();q.tt=n.mode;q.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},q);c.setParam("tv",q);c.setParam("br",e.getBrowserType())};l.getAggregator().on({sendDt:function(a,b,c){A(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){A(a,b,void 0,!0)},sendDiag:D,updateDtCount:function(){p++},unload:g});return{send:A,unload:g,
diagnostic:D,setViewabilityMod:function(a){}}},G=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?u.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==w.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=u.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},u={findElementsWithSize:function(g){var a=[],b=function(c){1>u.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(z.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===z.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),
width:r.round(b.width),height:r.round(b.height)}}catch(c){l.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(w.outerWidth)&&(g.width=w.outerWidth,g.height=w.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(w.screenX)?(g=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(g=w.screenLeft,a=w.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=u.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=u.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=N.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=s.friendly&&r.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};z.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,h=1E4;b=z.nodeIsAbsolutelyPositioned(g);d=!u.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!u.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!u.tagNameIs(d,
"OBJECT"),c="inline"!==z.getStyle(d,"display"),b&&c&&(b=u.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==N&&d!==a)}return{width:r.round(e),height:r.round(h)}},hasBackgroundImage:function(g){g=z.getStyle(g,"background-image");return""!==g&&"none"!==g},findChildWithLargestContent:function(g,a,b){var c=l.getAggregator().request("mobileApp").isMobileAppEnvironment(),d=this.hasBackgroundImage,e=function(a){for(var b=a;a.parentNode!==g&&"inline"!==z.getStyle(a.parentNode,
"display");){var d;if(!(d=!c)){d=a.parentNode;var e=!0;if("visible"===z.getStyle(d,"overflow")||"visible"===z.getStyle(d,"overflowX")&&"visible"===z.getStyle(d,"overflowY"))e=!1;d=e}d&&(b=a.parentNode);a=a.parentNode}return b},h=null,t=function(a){var c,e,h=null,t=-1;if(a.length)for(c=0,e=a.length;c<e;c++){var k=a[c],l=u.getNodeArea(k),n;if(f.isFunction(b))n=b(k);else{n=k;var x=void 0;if(x=n.parentNode===g)if(x=void 0,x="DIV"===n.nodeName)if(x=void 0,x=!d(n))if(x=void 0,!(x="0"===z.getStyle(n,"opacity")||
"hidden"===z.getStyle(n,"visibility"))){var C=x=void 0;n=n.childNodes;for(x=0;x<n.length;x++)1===n[x].nodeType&&(C=!0);x=!C}n=!x}var r;try{var C=x=void 0,s=!1,L=k&&"IFRAME"===k.nodeName&&k.contentDocument;k&&k.parentElement&&"teads-player"===k.parentElement.classList.item(0)&&L&&(C=(x=L.body)&&1>x.childElementCount)&&(s=!0);r=s}catch(F){r=!1}l>t&&n&&!r&&(h=k,t=l)}h&&(h.hasValidSizeForMobileApp=1<t);return h}(function(b){var c,d,e,h,t=[],g=a||"iframe img a object embed div".split(" ");c=0;for(d=g.length;c<
d;c++){e=g[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,h=f.length;e<h;e++)t.push(f[e])}return t}(g));t&&(h=f.isFunction(b)?t:e(t),h.hasValidSizeForMobileApp=t.hasValidSizeForMobileApp);return h},screenSize:function(){if(s.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(w.screen)&&(g={width:w.screen.width,height:w.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(u.screenSize()).mixin({scrX:0,scrY:0});
f.isDef(screen.availLeft)&&(g={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;s.friendly&&(g=s.embedded?(g=u.getOurIFrameInTop())&&g.frameElement:n.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;
return a},getTagsNamed:function(g,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&
(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[n.contextNode.parentNode,r.getDoc()];s.friendly&&d.push(r.getTop().document);if(a&&s.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=u.querySelector(d,g)}catch(e){}!b&&
c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=u.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},
getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&u.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&u.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=z.getStyle(g,"width");g=z.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=u.getAttribute(g,"width");g=u.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,
c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===z.getStyle(a,"position"),e="hidden"!==z.getStyle(b,"overflow")&&!d;s.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==
r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===u.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Va=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Nb=function(){return{createInstance:function(a,b){return s.isDomless()?new nc:new oc(a,b)}}},oc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(n.adsafeSrc,n.requrl,n.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),t=h&&h.length&&h.join("|"),m=n.exchList;t&&(e=f(m).map(function(a,b){return 0<=t.indexOf(P.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},nc=function(){return{parse:function(a){}}},mb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=n.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",rv:"rvCombo",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};n.integration&&
(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(s.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){var b=n[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,
b){if(f.isDef(n[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=n.sp_cdnScripts&&n.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Cb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);
return e},calcPercentInView:function(a,b,c,d){var e=0,h=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;h=G({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(h.area()/a.area()*100));return e}}},qb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));
b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return n.anId};return{getAsid:function(){return n.asid},getAnId:d,getCacheBustId:function(){var a=
new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||n.advEntityId+"-"+n.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},jb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},pc=function(a,b,c,d,e){return{getTime:function(){return 1E3*
a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=l.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),t=a.getTimeInViewForRts();f.isDef(d)&&(l.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),l.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));l.getAggregator().trigger("sendDt",b,
e);if(c[t])c[t]()}}}},Hb=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,f){return new pc(f,a,c,d,e)})}}},Fa=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-n.birthdate||""}},d=function(){a||(a=l.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];
var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=l.getAggregator().request("mScreenEvents").getCurrentEvent(),q=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(l.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),l.getAggregator().trigger("addOutputItem",
{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),l.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,q),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();l.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},oa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},
c=function(){var a=n.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,h,f){var m=c(),p,q,k;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],q=p.split("=")[1],k=P.stringToFn(q),d=a(d,p));w[m]=function(a){e(a);h&&k&&k(a);w[m]=void 0};return d=b(d,f,m)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Kb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,
b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.getAggregator().trigger("jsonp",c,a.callback,!0):l.getAggregator().trigger("send",c,function(){l.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,
d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.getAggregator().on("adImpression",function(e,m){var p;try{p=d(c,m),a.enabled?l.getAggregator().trigger("jsonp",p,a.callback,!0):l.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(q){__IntegralASDiagnosticCall("jsvidimp",q,n)}})}},fwjsvid:{isFW:!0,
manualDefer:!0,impressionMethod:function(a){var b="false"===n.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.getAggregator().trigger("jsonp",c(a),function(a){l.getAggregator().trigger("videoBlockResult",a)});l.getAggregator().on("adImpression",function(c,e){var m;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));
m=d(a,e);l.getAggregator().trigger("send",m,f.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,n)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[n.mode],d=!!b.isFW,f=function(a){var b;b=l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&n.mobFwUrl?n.mobFwUrl:a?n.adsafeSrc:n.requrl;a||(b+="?"+n.reqquery);return b}(d),q=f.indexOf("BEGIN__ADSAFE"),k=-1!==q,D=k?f.slice(q):"",a=k?f.slice(0,q):a(f);return{isFW:d,
baseUrl:a,macroUrl:D,sendImpression:function(a){var d=function(){b.nodeType?l.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},
min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?l.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();return top},getDoc:function(){s.isDomless();return N},getIntersectionObserver:function(a,b){s.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},xb=function(){return{createInstance:function(){return s.isDomless()?new qc:new rc}}},rc=function(){var a,b=!1,c=!1,d=l.getAggregator().request("features"),e=new fa,h=function(){var b;d.on("blur")?(b=r.getWindow(),b=s.friendly&&b.top.document&&
(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},t=function(){var b=r.getWindow(),c=function(){e.run(h())};z.addEvent(b,"focus",c,!0);z.addEvent(b,"blur",c,!0);a.event&&z.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var t=h+"Hidden";f.isDef(d[t])&&
(a=t,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){e.push(a);c||(c=!0,t())},supportsVisAPI:function(){return b}}},qc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},zb=function(){return{createInstance:function(a,b){return s.isDomless()?new sc:new tc(a,b)}}},tc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===
c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&
(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(q){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(s.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{p.e=encodeURIComponent(w.document.referrer)}catch(v){}}try{"jsi"!==n.mode&&(p.d=encodeURIComponent(w.location.href))}catch(r){}try{p.f=
encodeURIComponent(n.jsref)}catch(K){}try{h=m(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(x){}p=d(p);p=e(p);h=[];for(var C in p)p.hasOwnProperty(C)&&h.push({key:C,val:p[C]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},sc=function(){return{detectTopURL:function(){return[]},
getDetectedURLs:function(){return[]}}},wb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",n._onSuspicious)},skipAsFraudulent:function(){return b}}},Ab=function(){var a=[],b={},c={sl:"n"},d=0,e,h,t,m={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,
d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},q=function(a,c){var d=new gc(c);return b[a]=d},A=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},D=function(){f(c).each(function(b,c){m[c]+=a.length?t-d:t});d=t},v=function(b){a.length&&D();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(m[b]+=m.n);c[a]=b});a.length||D()},n=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=
p(a);var e={sl:A(a.viewState)};t=s.getTagTime();v(e);e.t=t;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=
k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return h=c};(function(){q("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});q("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){t=s.getTagTime();D()},registerLocation:function(d){var h,p=!1;c.sl==A(d.viewState)&&a.length?
(h=new n(d),a[a.length-1].details=h.details):(h=new n(d),a.push(h),e=d.viewState,p=!0);l.getAggregator().trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return A(e)},
getCurrentEvent:function(){return h}}},P={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},uc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=u.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=u.tagNameIs(a,"div"),e=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),f=u.attributeMatches(b,"href",d),k=u.attributeMatches(b,"target",e);h&&f&&k&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},vc=function(){var a=uc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};l("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!u.isViewportVisible(c,a))return c;if(c!==d&&s.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();u.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var wc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};l("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),h,t={};d!==c&&(h=f.stringifyTriState(d),t.res1=
h,t.ps=h,t.ts=r.now(),t.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",t));c=d}catch(m){l.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)wc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});l("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(s.embedded)try{h=n.contextNode.parentNode,b=vc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Ga=function(a,b,c,d){var e,h=0,t=0,m=!1,p=function(){e=Math.round(u.getNodeArea(a.body));
if(e>=d){for(var p,q=e+20*e/100,v=a.querySelectorAll("iframe"),v=f.fromNodeListToArray(v);v.length&&(t<q||h<c);)p=v.shift(),p=Math.round(u.getNodeArea(p)),p>=d&&(h++,t+=p);t>=q&&h>=c&&(q={va:e,bia:t,bin:h},l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(q).toION()),m=!0)}},q=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&u.isElement(c)&&u.tagNameIs(c,"IFRAME")&&
f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!m&&f.isDef(w.MutationObserver)&&q())};l("BS_InApp",[],function(){var a=r.getWindow().document;l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ga(a,"bs1",3,100)},{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});l("BS_Browser",[],
function(){var a=r.getWindow().document,b=a.body?Math.round(u.getNodeArea(a.body)):null;!l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ga(a,"bs2",10,b)},{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var ub=function(){return{createInstance:function(a){return s.isDomless()?new xc:new yc(a)}}},yc=function(a){var b,c,d,e=new za,h=new ga,t=new zc(e),m=new Ac,p=new Bc,q=new Cc(e,a),k=function(){f.isUndef(d)&&
(d=new Dc(e));return d},n=function(){e.provide({frameCollection:function(){return t},adProxy:function(){return p},adTalkMessage:function(a){return new Ec(a,e)},adTalkMessageCollection:function(){return m},idMapModule:k,interFrameQuerySelector:function(a){return new Fc(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){n();h.traverse(t.addFrame);q.startListening();q.sendToKnownFrames();l.getAggregator().once("stopAdTalk",
function(){q.stopListening()});l.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:q.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ha(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ha(e,!0));return c},getIdMap:k}},xc=function(){return{isApplicable:function(){return!1},start:function(){}}},Ec=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.getAggregator().request("features").on("swapids")?
n.oid:n.asid;var h=a||{},f=n.asid,d=d.tagId,m=s.embedded,p=s.friendly,q=n.birthdate;c=c.split("-")[2];var A;s.friendly?A="["+k.AD_IDENTIFIER+"-"+n.asid+"]":(A=r.getWindow(),A=A.location&&A.location.href,A='iframe[src*="'+(A&&A.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:p,srcBirthdate:q,iasCommonId:c,nodeSelector:A,positionStr:e,version:"0.1"}},Ac=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Gc=function(a,b,c,d){var e,h=a==w;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:n.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var t=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){t(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},zc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,
h,f){var m=a.request("adProxy").getAll();e=new Gc(e,h,m,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ha=function(a,b){var c=function(a,c){var f=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";m+=p}return m}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+
(n.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Dc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=n.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},h=function(a){var e=!1,e=!s.embedded,h="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),f;if(f=a.srcIsEmbedded){f=
"0.1"!==a.version;var A=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?A:!a.srcIsFriendly)}e&&h&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&s.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==n.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),
l.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Fc=function(a){var b=new ga,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return u.querySelector(c(a),b)},e=function(c,e){var m,p,q;try{p=d(c,e),p||(m=b.getFrames(!0,a),f(m).findFirst(function(a,b){return q=d(b,e)}))}catch(k){}return p||q||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},Cc=function(a){var b=
!1,c,d;d=l.getAggregator().request("features").on("swapids")?n.oid:n.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==n.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},t=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.getAggregator().trigger("sendDt",c)},m=function(c,d,e){var h,
m,n,s,x;try{h=a.request("frameCollection");m=a.request("adTalkMessageCollection");n=d.messageContent.self;m.add(d);var C=h.getMe();C.unifiedId>n.unifiedId&&(C.unifiedId=n.unifiedId);var u;u=r.now()-d.sentTime;d.transferDuration=u;m=s=h.getFrame(n.id);f.isUndef(m)||f.isUndef(m.selfDescription)?(s=s||h.addFrame(c.source,n.id.split("-"),d),s.addInformationFromSrc(d,n),e()):s.addInformationFromSrc(d,n);(x=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&t()}catch(B){l.getAggregator().trigger("error",
k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:t,sendToKnownFrames:function(){(new ha).send(h)},startListening:function(){c=new Aa;c.listen(e,m,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:h}},Hc=function(){var a=l.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Bc=function(){var a,b=[],c=function(a){a=new Hc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Bb=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&z.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Ic=function(a,b){var c,d=k.NA,e=d,h=!1,t=!1,m=!1,p=!b,q=function(){var b=r.getIntersectionObserver(function(a){a=
a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&r.execAtEndOfThread(function(){l.getAggregator().trigger("IOPivChange",d)});e=d},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){d===k.NA&&(d=0)});b.observe(A(a));p&&r.execAtEndOfThread(function(){s.isBustedIframe()||l.getAggregator().trigger("delayedViewabilityReady")});
h=!0},A=function(b){if(!f.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){t=!0}b&&null!==b.bodyElement?q():b&&b.document?z.whenReady(q,b.document):t?l.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):
q()},isStarted:function(){return h},getAdNodeDimensions:function(){var a;c&&(a=G({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==k.NA}}},wa=function(){var a=!1;(function(){z.whenReady(function(){l.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};l("loopDelay",[],wa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY});var Jc=function(){return{start:function(a){l.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Kc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Ub=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.getAggregator().trigger("notify",n._onMeasurable))};return{start:function(){var b;b=[Lc(),Mc(),Kc(),Jc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&
f.isDef(n._onMeasurable)}}},Mc=function(){return{start:function(a){dc(l.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&s.isVideo()}}},Lc=function(){return{start:function(a){l.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&s.isVideo()}}},Nc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();
f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.getAggregator().trigger("adImpression")})}}},Oc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},
isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Pc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.getAggregator().trigger("adImpression")})}catch(b){}}}},Qc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},da=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=l.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},
Rc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){l.getAggregator().trigger("adImpression")})}}},$a=function(a){return{resolve:function(){return f(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Xa=function(a){var b=!1,c=!1,d=!1,e=!1,h=l.getAggregator().request("omidAdSessionContext");h.queuedOutputItems=[];var t=new ja,m=l.getAggregator().request("omidAdSessionVerificationParameters"),p=r.getWindow(),q=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,k=!1,D=function(){return m&&m.IAS&&0<Object.keys(m.IAS).length?m.IAS:m},v=function(){var a,f;b&&c&&(!e||d)&&(w.omidSupported=!0,a=h.app&&h.isDisplay&&!h.isWeb,
(f=n.mobFwUrl&&-1<n.mobFwUrl.indexOf("/blocking/"))&&h.isLimitedSandbox&&"1"===n.adWidth&&"1"===n.adHeight&&(h.isLimitedSandbox=!1),a&&f&&(h.delayingViewabilityEvents=!0),h.hasOwnProperty("impressionType")&&h.queuedOutputItems.push({code:"oiet",value:h.impressionType}),h.hasOwnProperty("creativeType")&&h.queuedOutputItems.push({code:"oct",value:h.creativeType}),l.getAggregator().trigger("tryToCallContinueMain",D()),k=!0)},E=function(a){var c;if("sessionStart"===a.type){h.adSessionType=a.data.context.adSessionType;
h.environment=a.data.context.environment;"app"===h.environment&&(n.mobOrTab=!0);h.accessMode=a.data.context.accessMode;h.omidNativeInfo=a.data.context.omidNativeInfo;h.omidJsInfo=a.data.context.omidJsInfo;h.deviceInfo=a.data.context.deviceInfo;h.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(h.contentUrl=a.data.contentUrl);h.isJavaScript="javascript"===h.adSessionType;h.isNative="native"===h.adSessionType||"javascript"===h.adSessionType;h.isLimitedSandbox=s.embedded;h.isHtml="html"===
a.data.context.adSessionType;h.isWeb="web"===a.data.context.environment;m=a.data.verificationParameters;c=h.isHtml&&h.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?h.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,h.useOMID13Logic=!0,h.queuedOutputItems.push({code:"ohand",value:"13"}));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},
{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],
f,p,q,t=0;t<d.length;t++)f=d[t].root,p=d[t].field,q=d[t].code,"object"===typeof h[f]&&"undefined"!==typeof h[f][p]&&h.queuedOutputItems.push({code:q,value:h[f][p]});h.queuedOutputItems.push({code:"oast",value:h.adSessionType});h.queuedOutputItems.push({code:"oacm",value:h.accessMode});h.queuedOutputItems.push({code:"oenv",value:h.environment});h.hasOwnProperty("contentUrl")&&h.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(h.contentUrl||"")});c?l.getAggregator().trigger("tryToCallContinueMain",
D()):(b=!0,v())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),k?l.getAggregator().trigger("addOutputItem",{output:a},"oser"):h.queuedOutputItems.push({code:"oser",value:a}))},u=function(a){h.mediaType=a.data.mediaType;h.queuedOutputItems.push({code:"omtp",value:h.mediaType});"video"===a.data.mediaType&&(h.isVideo=!0);a.data.viewport&&a.data.adView&&(h.impressionViewabilityMeasurement=
{data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof h.geometryArrived&&t.checkForViewAttachmentBasedOnAdSessionType(h,a.data.adView)&&(h.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!h.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType);h.isNativeVideo=h.isNative&&"video"===a.data.mediaType;h.isDisplay="display"===a.data.mediaType;c=!0;v()},x=function(a){a&&"start"===a.type?(h.videoStartArrived=
!0,l.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(h.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType),v())};return{start:function(){q.addEventListener("media",x);q.addEventListener("video",x);q.registerSessionObserver(E,"IAS");q.addEventListener("impression",u)}}},Ya=function(){return{accepts:function(){return!0}}},Da=function(){var a=l.getAggregator().request("omidAdSessionContext"),
b=l.getAggregator().request("omidVerificationClient"),c=new da(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Za=function(){return{start:function(){l.getAggregator().trigger("tryToCallContinueMain","")}}},Sc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Tc=function(a,
b){var c,d=function(a){var d,f,m;try{d=a.eventData.percentageInView,f=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===
b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Uc=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,t=!1,m=new Fa,p=l.getAggregator().request("omidAdSessionContext"),q={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+
",")+("volume:"+d.volume)+"}");return a+"]}"}},A=function(){t=!0},n=function(a){try{var m="",q=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),A="n",n=!1;switch(a.type){case "start":m="adVideoStart";p.videoStartArrived=!0;l.getAggregator().trigger("omidrendvideostart");d=q;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":m="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":m=
"adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);n=!0;l.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":m="pauseAd";break;case "resume":case "bufferFinish":m="resumeAd";break;case "skipped":m="adSkipped"}if(""!==m){var r=l.getAggregator().request("mScreenEvents");r&&(A=r.getCurrentLoc());c.push({t:q-d,tp:m,sl:A,ad_duration:h,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var D=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),
m=-1!==D?D+1:void 0,s=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===t?(f.isDef(m)&&l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",m),l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",s)):(f.isDef(m)&&l.getAggregator().trigger("addOutputItem",{output:m},"vbp",{type:k.IMPRESSION_EVENT}),l.getAggregator().trigger("addOutputItem",{output:s},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&l.getAggregator().trigger("omidAdDuration",{ad_duration:h});
var u;"playerStateChange"===a.type?u="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?u="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(u="AdPaused");f.isDef(u)&&b.trigger("videoPlaybackEvent",{eventType:u,eventData:null});n&&l.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(Rb){__IntegralASDiagnosticCall("omidvideo",Rb,w.bootstrapper)}};return{start:function(){l.getAggregator().on("impressionsent",
A);l.getAggregator().provide({omidVideoEventsString:q});a.addEventListener("video",n);m.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ia=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});
a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Vc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():
!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},sb=function(a,b,c){var d=l.getAggregator().request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),
e=e.concat(a.getMraidMeasurementStrategies());(e=(new ka(e)).resolve())||l.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var f=new Wc(e),t=new Ja(b,c,s,d);return b.on("mobSafIO")||e||!t.accepts()?new Vc(e,f,d.isMobileAppEnvironment()):new Xc(s.isVideo(),new H)}}},tb=function(a){var b=l.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.getAggregator().request("omidVerificationClient"),b=new da(a),e=new Da,f=[];if(b.accepts()&&
!e.accepts()){var t=new ea,m=new Yc,e=new Zc(a,new H),t=[{environment:t,measurementStrategy:new $c(a,new H)},{environment:m,measurementStrategy:new Ka(new la,r.getWindow(),new H)}],t=(t=(new ka(t)).resolve())?t.measurementStrategy:{},p=new La(new Ma(new U),new U,m.accepts()),m=new Qc(a,b,n.mode),q=new Na(e,t,new H,p),b=new Rc(a,b,n.mode),a=new Oa(e,t,new Uc(a,new H),new H,p);f.push({environment:m,measurementStrategy:q});f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=
l.getAggregator().request("avidJsClient"),d=new Oc(b),e=[];if(d.accepts()){var f=new Nc(b,d,n.mode),t=new Pc(b,d,n.mode),m;m=new Sc(b,new H);if(d.supportsAdContainerGeometry()){var p=new ad,q=new bd,k=new Ka(new la,r.getWindow(),new H),D=new cd(b,new H),p=(p=(new ka([{environment:p,measurementStrategy:D},{environment:q,measurementStrategy:k}])).resolve())?p.measurementStrategy:{},q=new La(new Ma(new U),new U,q.accepts()),k=new dd(b,new H),b=new Na(k,p,new H,q);m=new Oa(k,p,m,new H,q)}else q=new Tc(b,
new H),b=new Ia(q,new H),m=new Pa(q,m,new H);e.push({environment:f,measurementStrategy:b});e.push({environment:t,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new ed(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.getAggregator().request("context"),e=new fd(r.getWindow(),e),f=new gd(r.getWindow(),new H);e.accepts()?(d=new hd(r.getWindow(),new H),d=new Pa(f,d,
new H),d={environment:e,measurementStrategy:d}):(e=new Ia(f,new H),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ka=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Wc=function(a){var b=!1,c,d={winDimensions:G({scrX:0,scrY:0,width:0,height:0}),adDimensions:G({scrX:0,scrY:0,width:0,height:0}),containerDimensions:G({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",
obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?new G({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):G({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),
isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=
b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Pa=function(a,b,c){var d=!1,e=!1,h=!1,t,m,p,q,A=function(){if(!f.isUndef(m)){var a=[],b,l;d?(e?(l=!1,b=100):(l=q,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;m.shouldDelegateToDomBasedViewability=
l;m.percentageInView=b;m.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;m.outOfViewReason=a.join(".");t=m;c.trigger("measurementChanged",t)}},n=function(a){m=a;p=a.percentageInView;q=a.shouldDelegateToDomBasedViewability;A()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);A()};return{start:function(){l.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(n);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},fd=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.getAggregator().trigger("adImpression"))})}catch(d){}}}},hd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},dd=function(a,b){var c=function(a){var c=new G(a.eventData.viewport||
{width:0,height:0}),f=new G(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),m=new G(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,
viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
La=function(a,b,c){function d(a,b,c){c=m(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},t=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};
return{calculateGeometricMeasurement:function(e,q){if(f.isDef(e)&&f.isDef(q)){var l=e.viewport,n=e.computedAdContainer,v=n.obstructions,s=v&&0<v.length,u=e.originalAdContainer,x=q.adGeometry,C=q.adFound,Q=e.detectionMethod,B=0,l={x:0,y:0,width:l.width,height:l.height},L=t(u,x),F=e.outOfViewReason,w=0,J=0,z=s||!1,w=1>=x.width*x.height;c&&w&&(C=!1,F=F||"",C||-1!==F.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(F=k.OUT_OF_VIEW_REASONS.GEOM+(""!==F?"."+F:"")));if(C&&0<e.percentageInView){w=d(l,n,L);s?(B=m(n,
L),B=h(l,n,B),B=t(n,B),B=a.calculateObstructedArea(B,v)):B=0;J=B;B=Math.round((w-J)/(L.width*L.height)*100);s&&0===J&&(z=!1);for(var x=(new G(L)).getRoundedGeometry(),C=z,y,s=0,J=b.getConfig(x).numberOfSlices,O=r.floor(x.height/J)||1,v=[],w=C?a.getObstructionStatusBySlice(J):[],W,s=0;s<J;s++)y=x.y+O*s,s==J-1&&(O=x.y+x.height-y),y={x:x.x,y:y,width:x.width,height:O},W=d(l,n,y),y=1==W/(y.width*y.height),v.push(y);if(C)for(n=r.min(w.length,J),s=0;s<n;s++)v[s]=v[s]&&!w[s];n=v}else n=b.getConfig(x).defaultSliceArray;
return{windowDimensions:l,containerDimensions:u,adDimensions:L,percentageInView:B,viewState:50<=B?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=B?"":F||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:Q,isObstructed:z,sliceStatus:n}}}}},ad=function(){return{accepts:function(){return s.isAvidNative()}}},cd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new G({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,
adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},bd=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},Na=function(a,b,c,d){var e,h,t,m=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);t=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;m()},q=function(a){h=a;m()};return{start:function(){l.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(q);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return t}}},Ma=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,k,m,p;k=e&&0<e.length;var q;if(k){q=Math.round(d.width);
var l=Math.round(d.height);h=Array(q);for(m=0;m<q;m++)h[m]=Array(l);q={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:q,height:l}}else q={};h=q;l=q=0;if(k){for(;q<e.length;q++){k=e[q];m=l=h;var n=k;h=Math.max(m.x,n.x);k=Math.max(m.y,n.y);p=Math.min(m.x+m.width,n.x+n.width);n=Math.min(m.y+m.height,n.y+n.height);m=p-h;p=n-k;m=0<m?m:0;p=0<p?p:0;h-=l.x;k-=l.y;m=h+m;p=k+p;for(h=Math.round(h);h<Math.round(m);h++)for(n=Math.round(k);n<Math.round(p);n++)void 0!==l.matrix[h]&&void 0===
l.matrix[h][n]&&(l.matrix[h][n]=1,l.obscuredPixelCount+=1);h=l}l=h.obscuredPixelCount;q=h;if(f.isUndef(q.matrix)||0===q.matrix.length)c=[];else{k=0;p=!1;h=q.matrix[0].length;m=q.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var n=r.floor(h/p)||1,v=[],s=0;s<h;s++){p=!1;for(var u=0;u<m;u++)if(1===q.matrix[u][s]){p=!0;break}k++;p&&(s+=n-k,k=n);if(k==n||s===h-1)v.push(p),k=0}c=v}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Zc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),
d=null,e=!1,h=new ja,t=function(){var a=r.getDoc().getElementById("iasbi"+n.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(m(d),d=null)):r.setTimeout(t,50)},m=function(a){if(a&&a.data&&a.data.adView){var f=a.data.adView,m=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);if(c.delayingViewabilityEvents)d=a,e||(e=!0,t());else{m&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=
f.onScreenGeometry.obstructions);var n=new G(a.data.viewport||{width:0,height:0}),r=new G(f[m?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),m=new G(f["onScreen"+(m?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:n.getRoundedGeometry(),originalAdContainer:r.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:p(f.reasons)};"undefined"===typeof c.geometryArrived&&
h.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,
d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&m(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",m)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},ea=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},$c=
function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=new ja,t=function(){var a=r.getDoc().getElementById("iasbi"+n.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(m(d),d=null)):r.setTimeout(t,50)},m=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,t());else{var m=a.data.adView.geometry,n=a.data.adView.containerGeometry,r=!!m,v=a.data.adView.measuringElement&&!!n,m=(new G({x:r&&v?m.x-n.x:0,y:r&&v?m.y-
n.y:0,width:r?m.width:0,height:r?m.height:0})).getRoundedGeometry();"undefined"===typeof c.geometryArrived&&f.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,l.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:m,adFound:r})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&m(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",m)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Yc=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Oa=function(a,b,c,d,e){var h=!1,t=!1,m,p,q,n,r,v=function(){if(!(f.isUndef(p)||f.isUndef(q)||f.isUndef(n))){r=!0;var a=e.calculateGeometricMeasurement(p,q),b=h&&t,c=h&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,
isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=k.IN_VIEW:(l.viewState=k.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);m=l;d.trigger("videoGeometryMeasurementChanged",m)}},s=function(a){p=a;v()},u=function(a){q=a;v()},x=function(a){n=a;a=a.eventType;"AdEnteredFullscreen"===a?t=!0:"AdExitedFullscreen"===a?t=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?
h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);v()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(x);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",
a)},isMeasurable:function(){return r}}},Ka=function(a,b,c){var d,e=function(){var b=a.find(),e,m,p=!1;f.isDef(b)?(m=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},ed=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},gd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,
sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},t=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},m=function(){c||t()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;l.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},
"mi",{type:"impression"});b?l.getAggregator().trigger("exec","mraid.js",m):t()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},gb=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||l.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},bb=function(){var a=new R({tiv:[1E4]}),b=f([k.IN_VIEW,
k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==n.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},ab=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var l=[2E3,5E3,15E3],m=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new R({tiv:d}),d=d[0]):f?(c=new R({tiv:l}),d=l[0]):(c=new R({tiv:e}),d=e[0]);e={5E3:n._onInViewMRC5,15E3:n._onInViewMRC15};e[d]=n._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},db=function(a,b){var c;
c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],t=[1E3,5E3,15E3],m=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:f}):d?new R({tiv:m}):new R({tiv:t});l.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,
isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},cb=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:n._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},fb=function(a,b){var c,d,e,h=r.getMaxNumber(),l=b.isVideo(),m=a.id;d=
a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&n.groupm_native_publisher)&&d,q=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,m,q,n=b.adDimensions.area();q=1===b.tabHidden;var s=r.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;m=b.ub||h;if(n>=e&&n<=m)return!0});q=!q&&s>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(q=!1);l&&(q=q&&b.isVideoPlaying,p&&(q=q&&b.isSoundOn));
return q};c=new R(a);d=a.qiv;(function(){e={};var a;f.isDef(n.rts)&&f.isDef(n.rts[m])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=n.rts[m])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:q,isInViewIgnoringRender:function(a){return q(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},
eb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),p=c.on("groupmCM"),q=function(a,b){var c,m,k,q,l;c=f(b.mediaTypes).contains(d);m=f(b.distributionChannels).contains(e);k=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;q=P.contains(b.id,"fiv");l=P.contains(b.id,"groupmCM");q=!q;l&&(q=p);return q&&c&&m&&k};return{resolve:function(){var b=
[],c;m&&k&&(c=f(a.customViewability).filter(q),f(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ma(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new id;b.push(new jd(c,parseInt(a[1].replace("%"))));b.push(new ma(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ma(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},id=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:
b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ma=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},jd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&
(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},sa=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},hb=function(a,b,c,d){var e,h,k,m,p,q,n=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},v=function(a){var l=0,n=1===a.tabHidden,v=a.isVideoPlaying,A=a.isSoundOn,x=a.isVideoPlayingInFullscreen;
f(a.sliceStatus).each(function(a,b){k(b,n,v,x)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});s("slcVt",m);d&&(f(a.sliceStatus).each(function(a,b){r(b,n,v,x)&&A?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),s("slcVtVol",p));q=d&&b&&b.shouldIncludeSound?p:m;a=f(q).findFirst(function(a,b){l=Math.max(l,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(l)},s=function(a,b){var c={};c[a]=b;l.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},u=function(a){!e&&a.sliceStatus&&(e=[],h=
[],m=[],p=[],f(a.sliceStatus).each(function(a){e.push(new Z(1));m.push(0);d&&(h.push(new Z(1)),p.push(0))}))},x=function(a){f.isUndef(a.sliceStatus)||(e||u(a),v(a))};return{start:function(){k=d?r:n;a.addMeasurementChangedListener(x)}}},qa=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Lb=function(a,b,c,d,e,f,l,m,p,q){var n=!1,u=s.isVideo(),v=f.request("mobileApp"),E=aa().applies(c,
e),K=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||E,x=s.xDomainIframe&&!K,C=new Ba(10),w=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),n=!0)};f.on("delayedViewabilityReady",function(){B();w()});f.on("delayedViewabilityReadyCallOnly",w);var B=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=v.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),
c):(e=m.collect(),v.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):x&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),u&&!s.isAvid()&&q.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var n=r.round(C.getTime()/C.getCount());l.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(A){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:B,stringifyPingTimes:function(){return e.on("everySecond")?
"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":u?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=s.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&E,d=!d&&!e&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};l("viewabilityLoopLifecycle",
["viewability","features","context","browser"],function(a,b,c,d){var e,h=kd(c),t=[new ld,new md(h)],m=function(){return f(t).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&l.getAggregator().trigger("adSessionComplete")},q=function(a){z.addEvent(w,a,function(){l.getAggregator().trigger("adSessionComplete")},!1)},A=function(){var a=new ba(k.DT_CODES.VIDEO_EVENTS);l.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:n.videoId,
msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};l.getAggregator().once("startViewabilityLoop",function(){var b,c=l.getAggregator().request("mobileApp").isMobileAppEnvironment();l.getAggregator().request("ids").impressionIsIdentifiable()&&(e=hc(a.checkScreenLoc,h.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),c?s.isOmid()?l.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):q("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
q("beforeunload"))});l.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||A();l.getAggregator().trigger("unload");e&&e.stop();l.getAggregator().trigger("endAdSession");l.getAggregator().trigger("stopAdTalk")})},{tier:k.TIERS.VIEWABILITY});var kd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},md=function(a){var b,c,d,e,f,k=function(m){d&&!f&&1>m?(f=!0,r.setTimeout(function(){k(m)},
1E3)):(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){k(a.percentInView)};return{applies:function(a,b,c){var e=l.getAggregator().request("mobileApp");a=(new Ja(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&(b.on("mobSafIO")||!a);d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",k);l.getAggregator().on("newScreenEvent",m)}}},ld=function(){var a,
b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=aa();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",e)}}},ud=function(a,b,c,d,e,h){var t,m,p,q,A,D,v,E,K,x=u.getElementsWindow(b);u.getElementsDocument(b);l.getAggregator().provide("iframeCalculatorHelper",
nd(x));var C=od(b,d),Q=k.AD_IDENTIFIER+"-"+n.asid,B=!1,L=G({}),F=s.isDeviceTypeGroupMobile(),y=s.usesGroupMCustomMetricMobilePassThru(),J,$=function(){if(!t)if(t=C.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&s.embedded){var a=t,e=(new G(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&t.treatAsPlaceholder();return t},H=function(){var b,d=s.xDomainIframe&&
B;b=F&&B&&p.isReady();b=d||b;d=C.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&s.embedded||s.isCeltra());b?m=p.getPiv():f.isUndef(m)&&(b=!F&&(s.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),E=$(),v=new G(u.calcWinDims()),D=new G(b?u.calcMonDims():{}),K=d?C.getClippedDims():L,m=a.calcPercentInView(E,v,D,K));return m},O=function(){return a.calcInitialViewState(H())},W=function(){return b===w?!1:$().isHidden()},I=function(a,b){return s.isVideo()?r.getDoc().body:a.document&&a.document.body?
a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),e=r.getDoc(),f=b===c,h=e.body,m=l.getAggregator(),k=new aa,n=m.request("browser"),t=m.request("features"),v=m.request("context"),x=!s.xDomainIframe,m=I(b,d),e=f&&h?e.body:b;J=s.friendlyIframe?c.frameElement:e;z.addEvent(e,"click",function(){l.getAggregator().trigger("adComponentClicked")});z.addEvent(e,"mouseover",function(){l.getAggregator().trigger("adComponentMousedOver")});k.applies(n,
t,v)?(p=Ic(b,x),p.start(),B=!0,y&&(c=new pd($().getRounded()),k=new qd,m=new rd(m,k),q=new sd(c.getSlices(),m))):y&&(A=new td(a))})();return{mark:function(){u.setAttributeOf(J,Q,"")},cleanup:function(){u.removeAttributeOf(J,Q)},isNode:function(a){return b===a},isHidden:W,isObstructed:function(){return!1},getDims:$,getPercentInView:H,getLocationState:O,getOnPageViewability:function(){return W()?k.OUT_OF_VIEW:O()},getDetectionMethod:function(){return c},getContainerDims:function(){return C.allowsOptimization?
t:G(d)},refresh:function(){K=E=v=D=m=t=void 0;if(h){var a,c;if(!s.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==N&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;q&&q.isReadyToMeasure()?a=q.getSliceStatus():s.friendly&&A&&f.isDef(E)&&(a=A.getSliceStatus(E,v,D,K));return a}}},vd=function(a,b){var c=[],d,e=f([]),h=b.on("rvCombo"),n=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},m=function(h,
m,p,q){var r=n()||0===c.length;h=ud(a,h,m,p,b,q);n()&&(q=c.shift(),e=f(c),q.cleanup(),d=void 0);c.push(h);e=f(c);r&&h.mark();r&&m!==k.DETECTION_METHODS.AD_PLACEHOLDER&&l.getAggregator().trigger("primaryadfound",h);m===k.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof p&&l.getAggregator().trigger("addOutputItem",{output:p.nodeName},"spac")},p=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,
f+=a/100*h)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},q=function(a){var b;h&&(b=l.getAggregator().request("adRenderStatus"));return!a&&h&&!b},A=function(a){var b;b=p();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||q(a))b=0;return b},u=function(c){var d=b.bootstrapOn("mobOrTab"),d=p().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!s.isVideo();return a.calcInitialViewState(A(c),d)},v=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});
return b},E=function(a){return function(){return c[0]&&c[0][a]()}};l.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===v(b)&&m(b,k.DETECTION_METHODS.MUTATION)})});l.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=v(b);-1<d&&c.splice(d,1)})});return{getDims:E("getDims"),isObstructed:E("isObstructed"),getDetectionMethod:E("getDetectionMethod"),getContainerDims:E("getContainerDims"),getViewState:u,getViewStateIgnoringRender:function(){return u(!0)},
getPercentInView:A,getPercentInViewIgnoringRender:function(){return A(!0)},isHidden:E("isHidden"),isUsingPlaceholder:n,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(a){var b,e=[],f=c[0],h=k.OUT_OF_VIEW_REASONS;f&&(b=d||u(),q(a)?e.push(h.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(h.GEOM),f.isHidden()&&e.push(h.HIDDEN),f.isObstructed()&&e.push(h.OBSTRUCTION));return e},getComponentCount:function(){return c.length},
getComponents:function(){return c},getSliceStatus:E("getSliceStatus")}},wd=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};l.getAggregator().on("adComponentClicked",d);l.getAggregator().on("adComponentMousedOver",
d);z.whenReady(function(){try{c.observe(N.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},Ed=function(a,b){var c=[xd(),yd()],d=[la(),zd(),Ad(),Bd(),Cd(),Dd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Ad=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},
isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ia();var c=u.crossQuerySelector(ia().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},V=function(a,b,c){var d;a=u.findChildWithLargestContent(a||n.contextNode.parentNode,b,c);1<u.getNodeArea(a)&&!a[k.IAS_DETECTOR]&&(d=a);return d},Cd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return s.embedded},
getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},Fd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return P.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,
b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return u.crossQuerySelector(b,!0)})}catch(c){}return a}}},Gd=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&P.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Hd=function(){var a,b,c=r.getDoc(),d=function(){var b;
a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&G(k).isOneByOne(),q=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return P.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),
c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&q&&c&&k&&d()&&e()},getCssSelector:e}},ia=function(){var a,b=l.getAggregator().request("features");a||(a=[Hd(),Gd(),Fd()]);return f(a).findFirst(function(a,d){return d.isApplicable(s,b)})},Bd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&
a.isCeltra()},find:function(){var c,d=Ea().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Ea=function(){var a,b=function(){var b;(b=n.contextNode.parentNode)&&P.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},la=function(){var a=l.getAggregator().request("mobileApp");
return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=u.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},yd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(n._cl_adpath);
b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},xd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return s.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(n._cl_adpath)[1].split(",").forEach(function(d){if(c=u.crossQuerySelector(d))a=u.getParent(c),1>u.getNodeArea(c)&&(a=c,c=u.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},Dd=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:V,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},zd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:l.getAggregator().request("video").findAdNode,isApplicable:s.isVideo,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},od=function(a,b){var c,d;c=[Id(),
Jd(),Kd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Ld();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Kd=function(){return{calcDims:function(a,b){var c,d,e=new G(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(s.isSpecifiedAd()||s.isBustedIframe())&&u.nodeIsInWindow(a,r.getTop());
a=!u.elementIsEmbedded(a);return b||a}}},Jd=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||s.isBustedIframe())&&u.elementIsEmbedded(a)}}},Id=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new G(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,
allowsOptimization:!1,isApplicable:function(a,c){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!u.nodeIsInWindow(c,r.getTop()),e=s.isCeltra()&&u.elementIsEmbedded(a);return d||e}}},Ld=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=aa();var c=l.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,
e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},nd=function(a){var b,c,d,e=l.getAggregator().request("features"),h=l.getAggregator().request("browser");a=a||r.getWindow();var n=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,m=e.length;h<m;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(s){l.getAggregator().trigger("error",
k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&n(b.parent,c)}return c},m=function(){var m,q={};try{var A,D,v,E,w,x,C=r.getMaxNumber(),z=r.getMaxNumber();s.friendly?(A=n(),v=A.left,E=A.top,C=A.width,z=A.height,D=u.browserWindowPosition(),w=D.scrX+v,x=D.scrY+E):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||l.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),w=c.scrX,x=c.scrY):f.isDef(a.mozInnerScreenX)&&(w=r.round(a.mozInnerScreenX),x=r.round(a.mozInnerScreenY));var q=
{scrX:w,scrY:x,iFrameClippingWidth:C,iFrameClippingHeight:z},B,L,F=b||u.getIeDimObj(a);b=F;f.isDef(a.innerWidth)?(B=a.innerWidth,L=a.innerHeight):F&&f.isDef(F.clientWidth)?(B=F.clientWidth,L=F.clientHeight,0===B&&0<F.offsetWidth&&(B=F.offsetWidth),0===L&&0<F.offsetHeight&&(L=F.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(B=a.frameElement.clientWidth,L=a.frameElement.clientHeight);m=B;q.height=L;q.width=m}catch(y){l.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return q};
return{calcDims:function(){return new G(m())},getClippedDims:function(){var a=m();return new G({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Fb=function(){return{createInstance:function(a,b,c){return s.isDomless()?new Md:new Nd(a,b,c)}}},Nd=function(a,b,c){var d,e=n&&n.contextNode&&n.contextNode.parentNode?n.contextNode.parentNode:null,h=vd(b,c),l=function(){var a,b,e;d=d||Ed(s,c);a=d.find();!a&&d.usePlaceholder?m():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),
e=d.allowForAdContainerChange,f(a).each(function(a,c){h.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},m=function(){var a;h.hasAd()||(a=u.getPlaceholderSpan(),e.insertBefore(a,n.contextNode.nextSibling),h.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};wd(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?l():h.refresh();return h},getDetectionMethod:function(){}}},Md=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},ob=function(a){var b,
c=[],d=a||w,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||
a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},nb=function(a){var b=new Od,c=new Pd;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||s.isDomless()||s.isAvid()||s.isAvidNative())d=b.detect(),b.hasDetectedMobileApp()&&
(c.detect(),l.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),l.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){l.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Qd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(s.isDomless())return!1;var b=r.getWindow().location.href,
c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(s.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(N.referrer)}catch(k){}}try{"jsi"!==n.mode&&c.push(w.location.href)}catch(m){}try{c.push(n.jsref)}catch(p){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,h,m,k="mobfox"===d?c:[b];for(m=0;m<k.length;m++){h=k[m];var p="string"===typeof d?[d]:d;if(f(p).isArray()&&(p[0].substring(0,
4),p))for(var l=0;l<p.length&&(e=-1<h.indexOf(p[l]),!1!==e);l++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(P.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",
detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Qa=function(){var a=function(a,c){var d,e=Qd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Rd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",
detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},
{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",
detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Od=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,f=Qa().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){n.hasOwnProperty("serverSideAppDetection")&&0!==n.serverSideAppDetection.length?
a="s_serv":(a=f(Rd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Pd=function(){var a=[],b=[],c=function(b,c){var f,k=Qa().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=f(Sd).map(c);0<b.length&&l.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==
b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Sd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],
url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},
{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],pd=function(a){var b=[],c=function(a,b,c){a*=c;return new X(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new X(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},U=function(){var a=
k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Td=function(){var a,b,c=0,d=-1,e=0,h=l.getAggregator().request("browser"),k=function(){var a,b;a=l.getAggregator().request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=r.setInterval(function(){var a=r.now();d=a-e;e=a;c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=u.calcMonDims().height,l=h.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,n=h.getUserAgent(),n=n&&null!==n.match(/(iPad)/)?1:0,v=k()?1:0,s=h.getUserAgent(),s=s&&null!==s.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*
n+0.646972*v+0.28118*s+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:n,mbhs:v,mbbr:s,mblr:d,mbp:e};b&&r.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Xc=function(a,b,c){var d,e,h,t,m,p=[],q=n.contextNode.parentNode,A=0,u=0,v=!1,w=!1,y=new Td,x=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},C=function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")},Q=function(a){z.whenReady(function(){e=new Ud(a,r.getDoc().body)})},B=function(){e.removePixels()},
L=function(){var a=y.getDebugState(),b=x();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(w);a.mbrd=f.fromBoolToNum(v);a.mbtg=f.isDef(q.tagName)?q.tagName:"na";a.mbaf=f.isDef(h)?h:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.getAggregator().trigger("addOutputItem",{output:a},b),l.getAggregator().trigger("addOutputItem",{output:-101},"pingTime",b),l.getAggregator().trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,
c){var q;q=f.isDef(d);if(c||!b.adDimensions)return b;q||(h=b.method,d=b.adDimensions,Q(d));if(f.isUndef(e)||!e.isReadyToMeasure())q=!1;f.isUndef(t)&&q&&(t=y.isLikelyToProduceFalsePositive(d));if(w=!t&&q){var n;q=e.getPercentInView();var B=x(),O=1===b.tabHidden;u=r.now()-A;n=0<A?900>u:!0;A=r.now();0===b.adDimensions.area()&&(q=0);n||(q=0);var z=q;p.push({tm:s.getTagTime(),piv:z});3<p.length&&p.shift();0===q&&0<B&&(n&&(n=p.length-1,z=!0,2<=p.length&&-1<n&&(z=0===p[n].piv&&0===p[n-1].piv),n=!z),n&&(q=
B));a?(f.isUndef(m)&&(m=l.getAggregator().request("video")),m.setVideoSpecificScreenEventFields(b),q=b.isVideoPlayingInFullscreen?!0:!O&&50<=q&&b.isVideoPlaying):q=!O&&50<=q;b.viewState=q?k.IN_VIEW:k.OUT_OF_VIEW;b.percentInView=x();B=[];O=f(b.reason);n=k.OUT_OF_VIEW_REASONS;q||B.push(n.GEOM);O.contains(n.HIDDEN)&&B.push(n.HIDDEN);O.contains(n.OBSTRUCTION)&&B.push(n.OBSTRUCTION);b.reason=B;b.sliceStatus=e.getSliceStatus();v||(v=!0,r.execAtEndOfThread(C))}else b.viewState=k.NA,b.percentInView=-1;return b},
start:function(){l.getAggregator().on("endAdSession",B);c&&r.setTimeout(L,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Ja=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),m=b.browserIs(k.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),q=d.isMobileAppEnvironment();return e&&f&&l&&m&&p&&!q},isImmediate:function(){return!1},
start:function(){}}},Vd=function(a,b,c,d,e,h,l){var m,p=n.birthdate+""+r.round(1E6*r.random()),q=101,s,u,v,w=!1,z=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,h=(new Date).getTime(),k=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(k)};a.requestAnimationFrame(k);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-h}}catch(m){b.body.setAttribute("data-err",m.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},x=function(a,b){v||(q=a,v=b)},C=function(){var a,b,c;if(v)return!1;if(u)return!0;try{if(s.contentWindow&&s.contentWindow.document&&s.contentWindow.document.body){c=s.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&x(104);(b=c.isReady?c.isReady():!1)&&(u=c.isInView?c.isInView:void 0)&&x(105)}}catch(d){x(106,d)}return f.isDef(u)},y=function(a,b,c){var h=N.createElement("iframe");h.id=p;f(h.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var m=h.style;h[k.IAS_DETECTOR]="true";m.left=b;m.top=c;a.appendChild(h);s=h;x(102);a=s;try{var l=a.contentWindow,q=z();l.document.open();
a.contentWindow.document.write(q);l.document.close()}catch(n){x(103,n)}return h}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();C()&&(a=u(!0),c=a.isInView,w=!1,m&&(b=20*m.rate+m.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,w=!0)),x(107),m=a);return c},isNotReadyToReport:function(){return!C()},createdElement:s,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return q},getError:function(){return v},isReadingInvalid:function(){return w},getRate:function(){return s.contentWindow&&
s.contentWindow.document&&s.contentWindow.document.body&&s.contentWindow.document.body.getRate?s.contentWindow.document.body.getRate():-1},percentInView:h}},Ud=function(a,b,c){var d,e=a.getRounded(),h=[],k=!1;a=U().getConfig(e);var m=a.percentInViewSliceArray,l=1==a.numberOfSlices,q={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},n=function(){var a;if(!k)for(k=!0,a=0;a<h.length;a++)if(h[a].isNotReadyToReport()){k=!1;break}return k},u=function(a){var b=[],c=0;r.floor(a.height/m.length);var d=
r.floor(a.width/2-1);f(m).each(function(e,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},v=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));
return!b.isInView});return c},z=function(){var a,b,c,d=[];q.mbs=[];f(h).each(function(b,c){a=c.isInView();q.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=w(d,!1);c=w(d,!0);return r.max(b,c)};(function(){d=l?v(e):u(e);var a=d.get();f(a).each(function(a,d){var e=new Vd(b,d.x,d.y,d.width,d.height,d.percentInView,c);h.push(e)})})();return{getPercentInView:function(){var a=n(),b=z();q.mbrd=a?1:0;b!=q.mbp&&q.mbivs.push([s.getTagTime(),b]);q.mbp=b;return a?b:-1},removePixels:function(){void 0!==
c&&c.stop();f(h).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){q.mbm=1;h&&0<h.length&&(q.mbpr=[],q.mbir=[],f(h).each(function(a,b){q.mbpr.push(b.getRate());q.mbir.push(b.isReadingInvalid()?1:0)}));return q},isReadyToMeasure:n,getSliceStatus:function(){var a;h&&0<h.length&&(a=[],f(h).each(function(b,c){a.push(c.isInView())}));return a}}},sd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,
e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),m=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new X(h,k,m,f))}});return c},e=function(a,b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=
c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([s.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},td=function(a){var b=U();return{getSliceStatus:function(c,
d,e,f){var k,m=[];k=c.getRounded();c=k.height;var l=k.scrY,q=new G({scrX:k.scrX,width:k.width}),n=b.getConfig(k).numberOfSlices;q.set("height",r.floor(c/n));for(var s=0;s<n;s++)q.set("scrY",r.ceil(l+c/n*s)),k=100===a.calcPercentInView(q,d,e,f),m.push(k);return m}}},X=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),m=Math.ceil(d),l=f-e,q=m-k,n=l*q,r=function(){return{leftX:e,rightX:f,topY:k,bottomY:m,width:l,height:q,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=
a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},qd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},rd=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=
b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,n=d.left-f.left,f=d.top-f.top,f=new X(n,n+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new X(0,b,f[d],f[d+1]));h();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ja=function(){var a=function(a){var b=!1;Wd.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},
b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||
-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Wd=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Xd=function(){return{listenForResult:function(){l.getAggregator().on("videoBlockResult",function(a){var b=l.getAggregator().request("adNode"),c=!1,d="blockAd"+n.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Yd=function(a,b){var c,d,e,h,k;e=l.getAggregator().request("videoTranslator").translate(a.messageType);
h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-n.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(h)},
updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.getAggregator().persistentTrigger(e,h,k):l.getAggregator().trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Zd=function(){var a=[];return{registerEvent:function(b,c,d){b=new Yd(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},$d=function(){var a,b,c,d=function(d){c=f.isDef(d)?
0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},n=function(a){a=(new Ra).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:n,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.getAggregator().request("isFullyInViewProvider");
return!b||c&&c.isFullyInView(a)})}}},ae=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ra=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},ib=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,h,t,m,p=[],q=k.OUT_OF_VIEW,u=!1,w=!1,
v=!1,y=!0,K=new Zd,x=$d(),C=new Xd,G=new Ra,B=new Fa,H=function(b){var d;u=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=K.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(w=!0,q=v?k.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,q=k.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,q=w?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(v=!1,q=w?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(G)),0<b?y=!0:0===b&&(y=!1));p.push(d);m&&M();return d},F=function(b){var c,
h,k=oa().wrapToGlobal(H),m=function(a){f.isStr(a)&&(l.getAggregator().provide("vc",function(){return a}),l.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),u=!0,m(c||"n")}catch(q){__IntegralASDiagnosticCall("handshakefailure",q,n)}},I=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};h||(f(["*[data-integralas-vid-"+
a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},n));return h},J=function(){var a=I();a&&!u&&F(a);return a},N=function(a){a=G.getVolumeFromContext(a);y=f.isDef(a)?0<a:!1},M=function(){B.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.getAggregator().trigger("adSessionComplete"),
b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&l.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),l.getAggregator().trigger("videoQuartileEvent",b)))});p=[];m=!0};(function(){z.addEvent(r.getWindow(),"message",function(a){H(a)});l.getAggregator().on({volumeChanged:N});l.getAggregator().provide({videoEventsString:K,videoVersion:function(){var a,b=J();try{a=b.getVersion()}catch(c){a=-1,l.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return t=
t||new ae},adNode:J});J();C.listenForResult();x.isApplicable(s)&&x.start(c)})();return{findAdNode:J,getViewStateOverride:function(){return q},isHandshakeComplete:function(){return u},triggerInitializationEvents:M,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=y;a.isVideoPlayingInFullscreen=!1;if(q){if(q===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:
q;a.isVideoPlaying=q===k.IN_VIEW}v&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},be=function(){return new ca(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Tb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new Ca;d=0;e(!0);b.start()},n=function(d,e,k,m){d=c[d];m?(f.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||
h();a=!0},m=function(c,d,e){l.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(l.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});l.getAggregator().on("addThrottledProp",n);l.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){f(a).each(function(a,
b){c[b]={}})}}},Yb=function(){var a={},b=function(b){a[b]||(a[b]=new Ba(1,n.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},ce=function(){return new ca(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Db=function(a){var b=
{},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));l.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},ca=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};e();f(d).each(function(d,
e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Eb=function(){function a(){}a.build=function(){var a=[];a.push(new ca(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=l.getAggregator().request("vc");var d={jv3:Sa,av3:Sa,jvw:ce,avw:be};(c=c?d[c]:void 0)&&
a.push(c());return a};return a}(),Sa=function(){return new ca(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.getAggregator().trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){z.addEvent(w,"load",function(){l.getAggregator().trigger("measureTime",T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ca;a.onTick({4:function(){l.getAggregator().trigger("markTime",
T.IDS.IN_BROWSER_DELAY)},5:function(){l.getAggregator().trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});a.start()}},M={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=frame)}catch(m){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=M.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),z.removeEvent(r.getWindow(),"message",d))}catch(f){l.getAggregator().trigger("error",
k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+n.asid},send:function(a,b){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}};l("CCPAConsentDetector",[],function(){function a(a){a&&M.send(b,f(a).toION())}var b="ccd";(function(){var b=M.isFrameworkAvailable("__uspapi","__uspapiLocator");M.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:M.getCallId()}},e=M.getMessageHandler("__uspapiReturn",
a),z.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};M.send(c,f(a).toION())}var b=278,
c="gcd";(function(){var c=M.isFrameworkAvailable("__cmp","__cmpLocator");M.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:M.getCallId()}},h=M.getMessageHandler("__cmpReturn",a),z.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRV2ConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&
f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};M.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=M.isFrameworkAvailable("__tcfapi","__tcfapiLocator");M.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:M.getCallId(),version:2}},h=M.getMessageHandler("__tcfapiReturn",a),z.addEvent(r.getWindow(),
"message",h),c.postMessage(e,"*"))}})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("postMessageDetector",[],function(){var a=!1,b="pmdetector"+n.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();z.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",f.stringifyTriState(a));z.removeEvent(d,"message",c)})})()},{tier:k.TIERS.ENVIRONMENT,
applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});l("safeFrameDetector",[],function(){l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",f.stringifyTriState(s.isSafeFrame()))},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Qb=function(){var a=n.asid,b=n.cookieBaseURL,c=n.protocol,d=function(a){f(a).each(function(a,b){l.getAggregator().trigger("notify",b)})},e=function(){var e;e=new S(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();
l.getAggregator().trigger("jsonp",e,d,!0);l.getAggregator().trigger("updateDtCount")};return{start:function(){l.getAggregator().on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Sb=function(a,b,c,d,e,f,r){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var q,u=d.baseUrl,w,v,z=f.getDocumentMode();"number"===typeof z?(v=2E3,8===z?v=4E3:8<z&&(v=8E3)):v=m(n.sp_imp_maxLength,
2E3);w=v;if(s.integratedBlockingApplies(u)){v=u;var y=l.getAggregator().request("mobileApp"),x=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),C=n.contextNode.getAttribute("data-ias-container"),G=n.contextNode.getAttribute("data-ias-callback"),y=v+"adContainerId="+C+"&cbFunctionName="+G,y=x?y.replace("monitoring","blocking"):y.replace("skeleton.js",n.integration+".js"),B=n.protocol+":"+n.staticServer+n.integration+"a.js",H=n.protocol+":"+n.staticServer+n.integration+".js",u=y+"&true_pb="+
encodeURIComponent(n.passback)+(x?"&redirectUrl="+encodeURIComponent(H):"")+(x?"&passback=":"&adsafe_pb=")+encodeURIComponent(B)+"&"}var x=u=u.replace(k.UNIQUE_ID_TOKEN,n.asid),F=u.length,I,J,M=m(n.sp_imp_jsInfo_minLength,0),B="";try{I=w-F-M,0<I&&(J=de(p,I,14,b.on("partialUrls")),B+=J.join("&"))}catch(N){a.add(k.ERROR_CODES.IMPRESSION_URLS)}u=x+B;p=u+="&"===u.slice(-1)?"":"&";var O,F="";try{O=w-u.length,F+=ee(O,"adsafe_jsinfo=",a,b,c,e,f,r)}catch(P){a.add(k.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+
a.toString()}u=p+F;d.macroUrl&&(u+="&"===u.slice(-1)?"":"&",u+=d.macroUrl);q=u;d.sendImpression(q);n.impUrl=q;l.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",R,n)}}}},ee=function(a,b,c,d,e,h,t,m){return function(c){var d=c.primary.join(","),h=b,k=0,m=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=m(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=m(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=
a={viewState:k.NA};s.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState;b=e.getAvidIds();u=["id:"+n.asid,"c:"+e.getCacheBustId(),"sl:"+u,"em:"+s.embedded,"fr:"+s.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));
a=fe(a,c,d,e,h,t,m);l.getAggregator().trigger("eligiblerender");return{primary:u,secondary:a}}())},fe=function(a,b,c,d,e,h,t){var m=[],p=l.getAggregator().request("mPage");m.push("mn:"+n.mn);m.push("pt:"+function(){var b=t.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());m.push(f(h.params()).toParams());c.on("mrcAudit")&&!s.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;
(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+n.mode);m.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));m.push("et:"+(r.now()-n.birthdate));n.perf.mark("si");c.on("swapids")?m.push("oid:"+n.oid):m.push("uid:"+d.unq);m.push("v:19.8.104");m.push("sp:"+(n.isSplitMode?1:0));m.push("fwm:"+("true"===n.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+f(u.windowSize()).toArray().join(".")),m.push("sr:"+f(u.screenSize()).toArray().join(".")));
b=function(){var a;a=String(n.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},de=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+
k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Ob=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=ge(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),
l.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},je=function(a,b){return{start:function(){try{var c=he(),d=c.getMethodName(a),e=new S(b.getEnabledScriptUrl(a)),f=ie,n=r.getDoc();(new f(n.body||n.head||n.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){l.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},he=function(){var a=function(a,c,d){a===n.asid&&(d.unshift(c),l.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d=
{asid:n.asid,constant:k,features:b,context:s,dtBaseURL:n.dtBaseURL,spg:Ta};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Wb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&je(d,b).start()})}}},ge=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=P.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);
d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ie=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||n.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src",
"='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Ta=function(a){var b=new Aa;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==n.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(l.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*
r.random()))})})();(function(){l.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()};l("spg",["spgCache"],Ta,{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});l("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,
f(b).each(function(a,b){l.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),l.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&h()},isFull:d,sendToOtherTags:function(){(new ha).send({scaInfoOriginatorASID:n.asid,cache:b})}}},{});try{Ua()}catch(ke){__IntegralASDiagnosticCall("main",ke,n)}};
try{(function(){var n=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,n,n.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
