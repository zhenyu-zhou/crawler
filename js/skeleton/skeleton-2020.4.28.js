

var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var propsStr, id;
					var url = '//pixel.adsafeprotected.com/mon?anid=925116&advId=fwjs-diag&campId=';
					try {
						url += code + '&adsafe_jsinfo=';
						if (err && err.message) {
							url +=
								'derr:' +
								encodeURIComponent(err.message.toString().replace(/ /g, '-')).substring(0, 200);
						}
						if (config) {
							
							id = config.anId
								? config.anId
								: config.advEntityId
								? config.advEntityId + '/' + config.pubEntityId
								: '';
							propsStr = config.version + ',' + config.mode + ',' + id;
							url += ',dconfig:' + encodeURIComponent(propsStr);
						}
					} catch (e) {
						url += ',dcatch:1';
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
		version: '19.8.73',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.73.js"},
		protocol: 'https',
		jsref: "",
		asid: "6b1fbb4a-8972-11ea-809f-0279d42948d9",
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
		mn: "app42va",
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
		var versions = ['1.2.20-iab1793'];
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
//							value: {},       Removed trailing comma for build
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
//								enumerable: true,       Removed trailing comma for build
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
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
		PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
		AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed",
			CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds",
			CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
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
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omid", "serviceWindow"];
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
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.2.20-iab1793"};
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
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b) : this.sendMessage_("addSessionListener", a, b);
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
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.2.20-iab1793'](); //try standard in-browser instantiation
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
__IntegralASConfig.initialize=function(m,w,J){function Na(){var g,a,b;m.perf.markStart(ja);l.startSystem();x=l.getAggregator();x.provide({omidAdSessionContext:{}});x.provide({omidAdSessionVerificationParameters:{}});g=Oa();a=ka();b=(new Pa).createInstance(g,a);x.provide({mErrors:g,mJsonp:a,mComm:b});g=__IASOmidVerificationClient;x.provide({omidVerificationClient:g});x.once("callContinueMain",function(){var a,b;m.perf.markStart(la);b=W.instantiateModules();a=W.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,t,b.renderDetector);W.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);W.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,t);m.perf.markEnd(la)});x.on("tryToCallContinueMain",function(a){m.isResolved?x.trigger("callContinueMain"):x.trigger("requestBootstrapper",
a)});x.once("requestBootstrapper",function(a){var b=m.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,k=a&&a.sca,u=a&&a.xsca;e&&x.trigger("jsonp",b+"/jsconfig"+e+(m.adSessionId?"&adSessionId="+m.adSessionId:""),function(a){Object.assign(m,"string"===typeof a?JSON.parse(a):a);m.isResolved=!0;m.sp_cdnScripts={sca:k,xsca:u};x.trigger("callContinueMain")},!1,"cbName")});g=[{environment:new $(g),adSessionReadyStrategy:new Qa(g)},{environment:new Ra,
adSessionReadyStrategy:new Sa}];(new Ta(g)).resolve().adSessionReadyStrategy.start();m.perf.markEnd(ja)}var x,W=function(){function g(a){var b=new Ua(a,t),c=new Va,d=new Wa(a,t),p=Xa(a,t),q=(new Ya(m,t,a)).resolve(),g=[b],B=[];p.applies()&&g.push(p);d.applies()&&g.push(d);c.applies(a,t)&&g.push(c);f(q).each(function(a,b){g.push(new Za(b,t));B.push(b.id)});0<B.length&&(x.trigger("addOutputItem",{output:B.join(".")},"scm",{type:h.IMPRESSION_EVENT}),x.trigger("addOutputItem",{output:B},"metricIdList",
{type:h.DT_CODES.UNLOAD,asION:!0}));return g}function a(a,b,c,d){var p=g(a);x.provide("viewabilityDefinitions",p);return f(p).map(function(p,g){var f;f=new $a(g,b);var v=(new ab(c,a,g.rts)).getCallbacks(),l=new bb(d.createPingJobs(g.type,g.timeInViewThresholds,v,g.metricId));g.rtsCallbacks=v;f=g.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new cb(f,g,l,t.isVideo()):new db(f,new aa(g.minUnit),l);f.start();return f})}function b(a,b){var c=(new ba).accepts(),c=!t.isAvid()&&!c&&
!t.isInMobiMraidVideo();return t.isVideo()&&c?eb(m.videoId,a,b):{}}function c(a,b,c,d,p,q,g,B,v,O){try{m.perf.markStart(ma),m.tpiLookupURL&&fb(g,B).init(m.tpiLookupURL),t.isDomless()||O.isStarted()&&O.sendOriginList(),l.runAll(),r.execAtEndOfThread(function(){var q;try{m.perf.markStart(na);q={output:(new Date).getTime()-p};a.addItem(q,"sinceFw",{type:h.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK});m.perf.markEnd(na);var g,z;m.isSplitMode&&
(z=m.protocol+"://"+m.sp_cdnScripts.main,m.perf.markResource(gb,z));m.impUrl&&m.perf.markResource(hb,m.impUrl);g=m.perf.getData();x.trigger("addThrottledProp",h.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(B){d.add(h.ERROR_CODES.ADTALK_DELAY)}}),m.perf.markEnd(ma)}catch(L){d.add(h.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,q,g,f,v){var h;"true"!==m.minimizeCalls&&(h=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,d,n,h,p,q,g,f,v)}))}return{instantiateModules:function(){var c,
d,u,n,p,q,g,f,v={};m.perf.markStart(oa);x=l.getAggregator();v.mFeatures=x.provide("features",ib());x.provide("mobileApp",function(){return c=c||new jb(v.mFeatures)});x.provide("avidJsClient",function(){return d=d||new kb(r.getWindow())});x.provide("context",t);v.mBrowser=x.provide("browser",(new lb).createInstance());v.mErrors=x.request("mErrors");v.mIds=x.provide("ids",mb());v.iOutput=new nb(x);x.request("mJsonp");v.mComm=x.request("mComm");v.viewabilityMeasurement=(new ob(new pb(v.mIds),v.mFeatures,
v.mBrowser)).create();if((n=x.request("omidAdSessionContext"))&&n.queuedOutputItems)for(q=0;q<n.queuedOutputItems.length;q++)x.trigger("addOutputItem",{output:n.queuedOutputItems[q].value},n.queuedOutputItems[q].code,{type:"impression"});v.mFeatures.on("swapids")&&(m.oid=m.asid,m.asid=v.mIds.unq);v.mAdTalk=(new qb).createInstance(v.mFeatures);u=rb();n=sb(x);p=x.provide("mPage",(new tb).createInstance());v.mAncestorOrigins=ub();v.mPageUrls=x.provide("pageUrls",(new vb).createInstance(v.mAncestorOrigins,
r));q=x.provide("mScreenEvents",wb());x.provide("ieXDomainViewability",xb(v.mBrowser));g=yb(v.mBrowser);f=b(v.mFeatures,q);v.mVideo=x.provide("video",f);zb(Ab.build());g=(new Bb).createInstance(v.mErrors,g,v.mFeatures);p=(new Cb).createInstance(g,v.mErrors,p,t);f=x.provide("jobFactory",Db());v.mDataTransfer=Eb(g,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,q,u);u=Fb(v.mErrors,v.mFeatures,x,n);v.mMode=Gb(u,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=x.provide("viewability",
Hb(new C,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,x,v.iOutput,p,q,v.mVideo));a(v.mFeatures,v.mViewability,n,f);v.loopDelay=pa();v.renderDetector=Ib();v.mDataTransfer.setViewabilityMod(v.mViewability);m.perf.markEnd(oa);return v},preImpression:function(a,b,c,d,p,q,g,f,v,l,L){var r,H,t,s,F;m.perf.markStart(qa);m.b11="1"===m.adHeight&&"1"===m.adWidth?"true":"false";m.cnod=m.contextNode?"true":"false";try{c.isApplicable(l)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&
d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(r=c.getIdMap())&&d.addItem(r,"idMap"))}catch(w){p.add(h.ERROR_CODES.ADTALK_GENERAL)}try{q.isApplicable(g,v,l)&&q.start(),F=f.detectTopURL(),v.on("exch")&&(H=(new Jb).createInstance(p,d),H.parse(F)),t=Kb(),t.isApplicable(v)&&t.start(v),l.usesGroupMCustomMetric()&&Lb(),s=Mb(),s.isApplicable(v)&&(s.start(),x.trigger("sendCookie")),L.start()}catch(M){p.add(h.ERROR_CODES.IMPRESSION_LEADUP)}m.perf.markEnd(qa);return F},sendImpression:function(a,
b,c,d,p,q,g,B,v){try{Nb(a,b,c,d,p,q,g).send(B),f.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(h){__IntegralASDiagnosticCall("impsend",h,m)}},postImpression:function(a,b,c,n,p,q,g,f,v,O,L,r,H){try{m.perf.markStart(ra);var t=Ob();t.start();t.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FF,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FF_EXP]);var s=Pb(a,b,c);s.isApplicable(n)&&s.start();var F;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(F=Qb(p,q,g,b,f),F.init());d(f,v,O,g,n,p,q,b,r);L&&
L.start&&L.start();H.isDomless()||Rb().start(["sca","xsca","rsrch"],n);Sb();l.runTier(h.TIERS.VIEWABILITY);var w=Tb();w.isApplicable(n)&&(w.start(),Q.recordBlockingTime(),m.perf.mark(Ub),Q.setupOnLoadTracking(),Q.setupBrowserDelayTracking());m.perf.markEnd(ra)}catch(M){g.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(g){return new A(g)},A=function(g){this.iterable=g};A.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:
b};A.prototype.isArray=function(){return this.iterable instanceof Array};A.prototype.isEmpty=function(g){return 0===this.keys(g).length};A.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};A.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};A.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=
g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};A.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};A.prototype.compareTo=function(g){var a=!1;this.each(function(b,
c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};A.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};A.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};A.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};A.prototype.invert=function(){return this.mapToObj(function(g,a){var b=
{};b[a]=g;return b})};A.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};A.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};A.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};A.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};A.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};A.prototype.selectProperties=function(g){var a=
{},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};A.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};A.prototype.toArray=function(){return this.map(function(g,a){return a})};A.prototype.JSONStringify=function(){var g,a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);
b&&(Array.prototype.toJSON=a);return g};A.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};
f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e=
{};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||w;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,k)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};
var l=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,q){q=q||{};var z,B,v=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},h=function(){if(!z){var a=[];z=!0;v(["features","browser","context"]);q.emits&&(c.events=new C);if(!q.applies||q.applies.apply(q,b))B=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=q.tier;f.isDef(b)&&(a[b]=
a[b]||new ca,a[b].push(h))})();g.provide(d,function(){var a;h();B&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new sa;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",
PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",
BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",
BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",
EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",
MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",
VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},
DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},ja="mf",la="cm",oa="in",qa="pr",ra="po",Ub="bl",ma="lo",na="lt",gb="md",hb="id",Vb=function(){var g,a,b=0,c=["STYLE","SCRIPT"],d=h.RENDER.CREATIVE_NODE_TYPES.concat(h.RENDER.CONTAINER_NODE_TYPES),e=function(a){var b=[],e=(a=a&&a.children)&&a.length,k,u;if(a)for(var g=0;g<
e;g++)k=a[g],u=k.nodeName.toUpperCase(),!k.children||0!==k.children.length||f(d).contains(u)||f(c).contains(u)||b.push(u);return b},k=function(a){return"HEAD"===s.getNodeName(m.contextNode.parentNode)?R(m.contextNode.parentNode.ownerDocument.body,a):R(null,a)},u=function(c){var p;g=g||m.contextNode.parentNode;if(c)if(s.isNodeXDomainIframe(c))p=c;else if((p=s.getNodeName(c))&&(-1!==h.RENDER.CREATIVE_NODE_TYPES.indexOf(p.toUpperCase())||s.hasBackgroundImage(c)||c.children&&0===c.children.length&&c.innerText&&
0<c.innerText.length))p=c;else{g=c;p=u;var q;if(m.useFIF&&t.friendlyIframe&&3>b)a:{var f=c,B,v,l,L,S=s.getNodeName(f);c=e(f);try{l=d.concat(c);if(f===r.getTop().document.body){q=null;break a}s.isWindow(f)?(B=k(l),B||(L="["+h.AD_IDENTIFIER+"-"+m.asid+"]",v=s.crossQuerySelector(L),a=v.parentNode,B=R(a,l))):("IFRAME"===S&&(f=f.contentWindow.document),B=R(f,l));void 0===B&&void 0!==a&&(a=B=a.parentNode,b+=1)}catch(H){}q=B}else{q=c;B=s.getNodeName(q);v=e(q);try{S=d.concat(v),s.isWindow(q)?f=k(S):("IFRAME"===
B&&(q=q.contentWindow.document),f=R(q,S))}catch(ce){}q=f}p=p(q)}else p=null;return p};return{find:u,getClosestContainerName:function(){return s.getNodeName(g)}}},Ib=function(){var g,a=!1,b={status:h.RENDER.STATUS.OTHER,details:h.RENDER.DETAILS.OTHER},c={status:h.RENDER.STATUS.DETECTED,details:h.RENDER.DETAILS.ENVIRONMENT},d=function(){a=!0},e=function(a){var b={},c=r.getDoc(),d=function(e){var k=e&&e.type;if("readystatechange"===k&&"complete"===e.target.readyState||"load"===k)b.status=h.RENDER.STATUS.DETECTED,
b.details=g.build(a,{eventType:k}),u(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(b.status=h.RENDER.STATUS.DETECTED,b.details=g.build(a,{eventType:"readystatechange"})):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},k=function(a){a===h.RENDER.STATUS.DETECTED&&l.getAggregator().trigger("perfCheckpoint",{type:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},u=function(c){var d=
new Wb(c),e=c.status||b.status;c=c.details||b.details;a&&e===h.RENDER.STATUS.DETECTED?(d=d.status(),k(e),l.getAggregator().trigger("addThrottledOutputItem","rend",e),l.getAggregator().trigger("addThrottledOutputItem","renddet",c),l.getAggregator().trigger("addThrottledOutputItem","rmeas",d)):(d=d.status(),k(e),l.getAggregator().trigger("addOutputItem",{output:e},"rend"),l.getAggregator().trigger("addOutputItem",{output:c},"renddet"),l.getAggregator().trigger("addOutputItem",{output:d},"rmeas"))},
n=function(){l.getAggregator().on("primaryadfound",function(a){var c,d=b,k=new Vb,n=!0,f=function(){m();n&&(c=r.setInterval(m,500))},l=function(){var a=r.getWindow().mraid,b=function(){y.removeEvent(a,"ready",b);g.appendCode(h.RENDER.DIAGNOSTIC.MRAID_READY);f()};"loading"===(a.getState&&a.getState())?y.addEvent(a,"ready",b):(g.appendCode(h.RENDER.DIAGNOSTIC.MRAID_DEFAULT),f())},m=function(){var b=a&&a.getAdNode(),f=k.find(b);if(s.isNodeXDomainIframe(f))c?r.clearInterval(c):n=!1,d=e(f);else if(f){var b=
!1,l=s.getRect(f);f&&"IMG"===s.getNodeName(f)&&(b=0===f.naturalWidth||0===f.naturalHeight);!b&&l.width>=h.RENDER.WIDTH_THRESHOLD&&l.height>=h.RENDER.HEIGHT_THRESHOLD&&(d.status=h.RENDER.STATUS.DETECTED,c?r.clearInterval(c):n=!1);d.details=g.build(f)}else d.details=k.getClosestContainerName()||g.getAdNodeName(b)||d.details;u(d)};t.isMraid()?l():f()})};return{start:function(){l.getAggregator().trigger("perfCheckpoint",{type:h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});
g=new Xb;l.getAggregator().on("impressionsent",d);t.isAvid()||t.isOmid()||t.isVideo()?u(c):(u(b),n())}}},Xb=function(){var g=!1,a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(e){}return b};return{build:function(c,d){var e=c&&s.getRect(c),k=b(c),u=c&&"IMG"===k,n=s.hasBackgroundImage(c),p=c.innerText&&0<c.innerText.length,p=c.children&&0===c.children.length&&p,q=[k,e&&e.width>=h.RENDER.WIDTH_THRESHOLD&&e.height>=h.RENDER.HEIGHT_THRESHOLD?
h.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:h.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE];!n&&!u||0!==c.naturalWidth&&0!==c.naturalHeight||q.push(h.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&q.push(h.RENDER.DIAGNOSTIC.STYLED_NODE);p&&q.push(h.RENDER.DIAGNOSTIC.TEXT_NODE);d&&d.eventType&&("readystatechange"===d.eventType?q.push(h.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===d.eventType&&q.push(h.RENDER.DIAGNOSTIC.LOAD_FIRED));g&&f(a).each(function(a,b){q.push(b)});return q.join(".")},getAdNodeName:b,appendCode:function(b){a.push(b);
g=!0}}},Wb=function(g){return{status:function(){var a=g.details||h.RENDER.DETAILS.OTHER,b=g.status||h.RENDER.STATUS.OTHER,c=a.split(".")[0],d="env"===a,e=c&&-1!==h.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase()),c="XIFRAME"===c,k=-1!==a.indexOf("tn"),a=-1!==a.indexOf("sn");return d?b:e||c||k||a?"1":"0"}}},X=function(){return{applies:function(g,a){var b=l.getAggregator().request("mobileApp");return(g.browserIs(h.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(h.BROWSERS.WEBKIT)||g.browserIs(h.BROWSERS.MSEDGE))&&
!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Lb=function(){var g,a,b=!1,c=l.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.getAggregator().trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};l.getAggregator().on("primaryadfound",function(a){g=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;d()});l.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},rb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",
width:"w",height:"h"};l.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=t.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},sa=function(){var g=new Yb,a=new C;return f(g).mixin(a)},C=function(){var g={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new ca;g[a].push(b,c)};return{on:function(a,
e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=g[b])&&k.run.apply({},c)}}},da=function(){var g=function(a,c,d){var e,k=c.length,u=s.isWindow(a)?a.frames:s.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&s.isWindow(e)&&(c[k]=
a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},ca=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},bb=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,
d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},ta=function(){var g,a=new ea,b=function(b,d,e,k){var u,n,p,q;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),n=b.source,q=f.noop,d(u)&&(k&&(p=k(n,u))&&(q=function(){a.send(function(){return p},n)}),e(b,u,q))}catch(g){u&&l.getAggregator().trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(k){b(k,a,d,e)};y.addEvent(w,"message",g)},stop:function(){g&&y.removeEvent(w,"message",g);g=
null}}},ea=function(){var g=function(a){return f(a).isObj()?[a]:(new da).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var u;u=f.resolve(b,d)||{};u.sentTime=r.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},Zb=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&
(c={},b())})})}}},nb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&
!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Yb=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,
d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Cb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new $b:new ac(g,a,b,c)}}},ac=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),k=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:G(s.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:h.NA,
posViewState:h.NA,embedded:t.embedded,winDimensions:n,adDimensions:p};!0===u&&k.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),
sliceStatus:a.getSliceStatus()}}}},$b=function(){return{collect:function(){return{}}}},bc=function(g){g=g||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},ua=function(g,a){var b=g||1,c=0,d=0,e,k=0;return{start:function(){0===
c%b&&(e=r.now())},stop:function(){var u=e||a;0===c%b&&(k+=r.now()-u,d++);c++},getTime:function(){return k},getCount:function(){return d}}},va=function(){var g,a=0,b=0,c=new C(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},cc=function(g,a){var b,
c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&g();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},aa=function(g){var a,b,c=0,d=t.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();k=!1},mark:function(){a=k?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();k=!0}}},P=function(g,a){var b=g||m.adsafeSrc||m.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?m.protocol+
":"+b:m.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],k=b[4],u=b[5],n=g?b[6]:"",p=a?b[7]:"",q={},z=function(a){f.isDef(a)&&(k=a);return k},h=function(a){f.isDef(a)&&(u=a);return u},v=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=q[b])?q[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,
hostname:e,sub:z,master:h,setParam:function(a,b){q[a]=q[a]||{};f(b).isObj()?f(q[a]).mixin(b):q[a]=b},path:function(a){n=a},toString:function(){var a=z()?z()+".":"",b=n?"/"+n:"",c;p||!f(q).isEmpty()?(c=f(q).isEmpty()?"":f(q).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+h()+b+c}}},Sb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,
c;try{if(t.friendly&&!t.isMobileApp())if(b=l.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=s.getOurNodeInTop()){var k=s.getAncestorNodes(d);e=f(k).map(a)}if(b=e=e&&g(e))l.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0}),l.getAggregator().provide("adSlotIds",b),c=b}return c}catch(u){l.getAggregator().trigger("error",h.ERROR_CODES.AD_SLOT_ID)}}()};l("AdRefreshDetection",[],function(){var g=[30,45,60,90],a={start:function(){var a=this,c=m.asid,
d=this.getChanId(),e=m&&m.contextNode&&m.contextNode.nextSibling&&m.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?l.getAggregator().trigger("error",h.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=m.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var k=d.exec(a[e]);k&&3===k.length&&"chanId"===k[1]&&
(c=k[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var k=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);k.postMessage(JSON.stringify(a),
"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=m.adRefreshThreshold&&parseInt(m.adRefreshThreshold)||null,k=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))l.getAggregator().on("sendDt",function(u,g){u===h.DT_CODES.PING&&g===e&&(r.execAtEndOfThread(function(){k.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ir",a);
l.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){l.getAggregator().trigger("error",h.ERROR_CODES.AD_REFRESH)}});return a},{tier:h.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}});var ub=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&
a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.getAggregator().trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,
encode:!0});l.getAggregator().trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},Qb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var k=d.length,p=0,q=0;e(k,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(k,p,++q)},!0);e(k,++p,q)})}catch(z){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new P).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+m.asid;g.jsonp(a,k)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},
Fb=function(g,a,b,c){return{enabled:"true"===m.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===m.accountForSadImps&&c.measure(a),m._onAPIResult&&m._onAPIResult(a)}catch(e){g.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},lb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new dc:new ec}}},ec=function(){var g=h.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?
a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=
r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:h.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var k=h.NA,u=r.getDoc(),n=u.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in
u.documentElement.style)k="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<e.length&&!(k=n.getComponentVersion(e[u],"componentid").replace(/,/g,"."));u++);}catch(p){}e=k;k=h.NA;n=r.getWindow();f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(k=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:k}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],k=function(){return f(b).findFirst(function(b,c){return I.contains(a,c)})};return I.contains(a,
"Android")&&k()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},dc=function(){var g=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},
Pa=function(){return{createInstance:function(g,a){return t.isDomless()?new fc(a):new gc(g,a)}}},hc=function(){var g,a=function(a,c){var d="",e="",k=r.getDoc().getElementsByTagName("ins");if(k&&0<k.length){e=k[0];d="<ins";for(k=0;k<e.attributes.length;k++)d+=" "+e.attributes[k].nodeName+'="'+e.attributes[k].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=l.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=l.getAggregator().request("omidAdSessionContext");var c="iasbi"+m.asid,d;d=m.contextNode.parentNode;var e,k=m.adWidth&&0<m.adWidth?m.adWidth:0,u=m.adHeight&&0<m.adHeight?m.adHeight:0,f=r.getDoc().getElementsByTagName("ins"),
p;p=e=0;f&&0<f.length&&(p=f[0],e=parseInt(p.style.width),p=parseInt(p.style.height));k=e||k||window.innerWidth;u=p||u||window.innerHeight;"complete"===r.getDoc().readyState&&(m.forceAppend="true");"true"===m.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(c))d.style.width=k+"px",d.style.height=u+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},gc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=J.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=J.createElement("SCRIPT"),d.src=b);m.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];t.isOmid()?(e=new hc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===m.forceAppend?c(a,b,d):J.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=s.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=J.createElement("script");c=c||m.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),c(a,void 0,!0))},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},fc=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:m.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(){var g="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return g||f.isDef(r.getWindow().mraid)},d=function(){return!g&&f.isDef(r.getWindow().mraid)},e=function(){var a=!1;if(!g)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},k=function(){var a;
if(!(a=-1!==m.mode.indexOf("jsvid"))){var b;a=!1;var c=l.getAggregator();if(!g&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=l.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},u=function(){return m.mobOrTab},n=function(a){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(b,
c){return I.contains(c.id,a)}).length},p=function(){return n("grpm")||m.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=P(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-m.birthdate},getPageTime:function(){var a=h.NA;!g&&f.isDef(w.chrome)&&f.isDef(w.chrome.csi)&&f.isFunction(w.chrome.csi)&&(a=r.round(w.chrome.csi().pageT));return a},isVideo:k,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;g||(a=(a=m._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;g||(a=b.exec(m._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!g&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=l.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ba).accepts()},isOmidForWeb:function(){return(new wa).accepts()},isDomless:function(){return g},
isAvidNative:function(){var a=!1,b=l.getAggregator();g||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==fa());return a},isMraid:d,isSafeFrame:function(){var a=!1;g||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||
m.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;g||(a=xa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&u()},usesZeroPivCustomMetric:function(){return!1===f(m.customViewability).isArray()?!1:0<f(m.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!g&&!c()&&!k()&&a&&"jload"===m.mode},integratedBlockingApplies:function(a){var b,c;m.contextNode&&f.isFunction(m.contextNode.getAttribute)&&(b=m.contextNode.getAttribute("data-ias-check-tag"),c=m.contextNode.getAttribute("data-ias-check-done"));return m.integration&&!(!0===m.fwMonitoring||"true"===m.fwMonitoring)&&f.isDef(JSON)&&f.isFunction(JSON.parse)&&"true"===
b&&"false"===c&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"))}}}(),y={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",y.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===
a&&(a="mouseout",b=y.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(g=J.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,
function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(t.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?J:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(J.addEventListener)?
"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(g)}},isSandboxed:function(g){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,
a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===y.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[h.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=h.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,
e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var Eb=function(g,a,b,c,d,e,k,u){var n=0,p=0,q=!1,z=function(a,e,u,g,z,B){u=u||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==k.getCurrentLoc()))try{var s=
m.dtBaseURL,w=new P(s,!0),y=r.now();l.getAggregator().trigger("preSendDt",a);s||(w.path("dt"),b.on("usedtdomain")&&w.sub("dt"));v(w,a,e);z&&z.field&&w.setParam(z.field,z.value);g||O(w,a);l.getAggregator().trigger("send",w,function(){p+=1;n=r.now()-y;f.isFunction(B)&&B()},u);a===h.DT_CODES.UNLOAD&&(q=!0);d.cleanup()}catch(x){__IntegralASDiagnosticCall("dt-"+a,x),l.getAggregator().trigger("error",h.ERROR_CODES.PHONE_HOME)}};g=function(){q||z(h.DT_CODES.UNLOAD,-1,!0)};var B=function(a,c){var d={bapi:"a",
bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=m.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&z(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},v=function(a,b,e){var k=new Y(b);e=f.isDef(e)?e:k.enumerator;a.setParam("asId",m.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},O=function(c,g){var f,q={};d.filterOutput(function(a){return a.standalone&&
!a.minDt&&a.type===g},function(a,b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();if(g===h.DT_CODES.CUSTOM||g===h.DT_CODES.UNLOAD||g===h.DT_CODES.VIDEO_EVENTS||g===h.DT_CODES.FULLY_INVIEW||g===h.DT_CODES.PING||g===h.DT_CODES.VIEWABILITY_READY||g===h.DT_CODES.ADTALK)q.clog=u,t.isVideo()&&(f=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=l.getAggregator().request(f))&&!f.isEmpty()&&(q.ve=f));g===h.DT_CODES.UNLOAD&&(q.ndt=p);-1!==m.mode.indexOf("jsvid")&&(q.vv=l.getAggregator().request("videoVersion"));
q.NULL1=b.output();q.NULL2=k.stringify(10);q.em=t.embedded;q.fr=t.friendly;q.e=a.toString();q.tt=m.mode;q.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},q);c.setParam("tv",q);c.setParam("br",e.getBrowserType())};l.getAggregator().on({sendDt:function(a,b,c){z(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){z(a,b,void 0,!0)},sendDiag:B,updateDtCount:function(){p++},unload:g});return{send:z,unload:g,
diagnostic:B,setViewabilityMod:function(a){}}},G=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?s.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==w.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=s.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},s={findElementsWithSize:function(g){var a=[],b=function(c){1>
s.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(y.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===y.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){l.getAggregator().trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),
g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(w.outerWidth)&&(g.width=w.outerWidth,g.height=w.outerHeight);return g},browserWindowPosition:function(){var g=
0,a=0;f.isDef(w.screenX)?(g=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(g=w.screenLeft,a=w.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=s.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=s.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;
return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=J.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&r.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",
top:"-10000px",left:"-10000px"};y.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,k=1E4;b=y.nodeIsAbsolutelyPositioned(g);d=!s.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!s.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!s.tagNameIs(d,"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=s.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==
J&&d!==a)}return{width:r.round(e),height:r.round(k)}},hasBackgroundImage:function(g){g=y.getStyle(g,"background-image");return""!==g&&"none"!==g},findChildWithLargestContent:function(g,a){var b=l.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=this.hasBackgroundImage,d=function(a){for(var c=a;a.parentNode!==g&&"inline"!==y.getStyle(a.parentNode,"display");){var d;if(!(d=!b)){d=a.parentNode;var e=!0;if("visible"===y.getStyle(d,"overflow")||"visible"===y.getStyle(d,"overflowX")&&"visible"===
y.getStyle(d,"overflowY"))e=!1;d=e}d&&(c=a.parentNode);a=a.parentNode}return c},e=null,k=function(a){var b,d,e=null,k=-1;if(a.length)for(b=0,d=a.length;b<d;b++){var f=a[b],h=s.getNodeArea(f),l;if(l=h>k){l=f;var m=void 0;if(m=l.parentNode===g)if(m=void 0,m="DIV"===l.nodeName)if(m=void 0,m=!c(l))if(m=void 0,!(m="0"===y.getStyle(l,"opacity")||"hidden"===y.getStyle(l,"visibility"))){var r=m=void 0;l=l.childNodes;for(m=0;m<l.length;m++)1===l[m].nodeType&&(r=!0);m=!r}l=!m}l&&(e=f,k=h)}e&&(e.hasValidSizeForMobileApp=
1<k);return e}(function(b){var c,d,e,k,g=[],f=a||"iframe img a object embed div".split(" ");c=0;for(d=f.length;c<d;c++){e=f[c].toLowerCase();var h=b.getElementsByTagName&&b.getElementsByTagName(e);if(h&&h.length)for(e=0,k=h.length;e<k;e++)g.push(h[e])}return g}(g));k&&(e=d(k),e.hasValidSizeForMobileApp=k.hasValidSizeForMobileApp);return e},screenSize:function(){if(t.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(w.screen)&&(g={width:w.screen.width,height:w.screen.height})}catch(a){}return g},
calcMonDims:function(){var g=f(s.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;t.friendly&&(g=t.embedded?(g=s.getOurIFrameInTop())&&g.frameElement:m.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;
if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(s.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},
nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[m.contextNode.parentNode,r.getDoc()];t.friendly&&d.push(r.getTop().document);if(a&&t.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,
d){try{c=s.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=s.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;
return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&s.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&s.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=s.getAttribute(g,"width");g=
s.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||
a},getElementsWindow:function(a){var b=s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Oa=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.getAggregator().on("error",
function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Jb=function(){return{createInstance:function(a,b){return t.isDomless()?new ic:new jc(a,b)}}},jc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(m.adsafeSrc,m.requrl,m.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");
return b};return{parse:function(d){try{var e,k=c(d),u=k&&k.length&&k.join("|"),n=m.exchList;u&&(e=f(n).map(function(a,b){return 0<=u.indexOf(I.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:h.IMPRESSION_EVENT}))}catch(p){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},ic=function(){return{parse:function(a){}}},ib=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=m.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],
a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};m.integration&&(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){var b=m[a];return f(["integration"]).contains(a)?
!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(m[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=m.sp_cdnScripts&&m.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},yb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,
PARTIAL_VIEW:50},e=h.NA;c=b?c:d;f.isDef(a)&&a!==h.NA&&-1<a&&(e=a>=c.IN_VIEW?h.IN_VIEW:a<=c.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,k=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=k.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),h=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),h=h-e,
c=c-f;k=G({scrX:e,scrY:f,width:0<h?h:0,height:0<c?c:0})}}),e=r.round(k.area()/a.area()*100));return e}}},mb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,
32)}catch(d){l.getAggregator().trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return m.anId};return{getAsid:function(){return m.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||m.advEntityId+"-"+m.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},fb=function(a,
b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},kc=function(a,b,c,d){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var e=a.getTimeInViewInSeconds(),k=a.getTimeInViewForRts();f.isDef(d)&&(l.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),l.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));l.getAggregator().trigger("sendDt",
b,e);if(c[k])c[k]()}}}},Db=function(){return{createPingJobs:function(a,b,c,d){return f(b.getTimeThresholds()).map(function(b,k){return new kc(k,a,c,d)})}}},ya=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-m.birthdate||""}},d=function(){a||(a=l.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];
var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=l.getAggregator().request("mScreenEvents").getCurrentEvent(),q=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(l.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:h.DT_CODES.CUSTOM}),l.getAggregator().trigger("addOutputItem",
{output:"q"},"cmr",{type:h.DT_CODES.CUSTOM}),l.getAggregator().trigger("sendDt",h.DT_CODES.CUSTOM,q),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[h.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[h.RTS_KEY_FOR_VQ]())})};return{init:function(){d();l.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},ka=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},
c=function(){var a=m.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,k,f){var n=c(),p,q,h;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],q=p.split("=")[1],h=I.stringToFn(q),d=a(d,p));w[n]=function(a){e(a);k&&h&&h(a);w[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Gb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,
b){return a+":"+b},","),c=P(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.getAggregator().trigger("jsonp",c,a.callback,!0):l.getAggregator().trigger("send",c,function(){l.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,
d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;l.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.getAggregator().on("adImpression",function(e,n){var p;try{p=d(c,n),a.enabled?l.getAggregator().trigger("jsonp",p,a.callback,!0):l.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(q){__IntegralASDiagnosticCall("jsvidimp",q,m)}})}},fwjsvid:{isFW:!0,
manualDefer:!0,impressionMethod:function(a){var b="false"===m.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.getAggregator().trigger("jsonp",c(a),function(a){l.getAggregator().trigger("videoBlockResult",a)});l.getAggregator().on("adImpression",function(c,e){var n;try{var h;if(h=b)h=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));
n=d(a,e);l.getAggregator().trigger("send",n,f.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,m)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[m.mode],d=!!b.isFW,f=function(a){var b;b=l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&m.mobFwUrl?m.mobFwUrl:a?m.adsafeSrc:m.requrl;a||(b+="?"+m.reqquery);return b}(d),q=f.indexOf("BEGIN__ADSAFE"),h=-1!==q,B=h?f.slice(q):"",a=h?f.slice(0,q):a(f);return{isFW:d,
baseUrl:a,macroUrl:B,sendImpression:function(a){var d=function(){b.nodeType?l.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},
min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?l.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},tb=function(){return{createInstance:function(){return t.isDomless()?new lc:new mc}}},mc=function(){var a,b=!1,c=!1,d=l.getAggregator().request("features"),e=new ca,k=function(){var b;b=923747==m.anId||925955==m.anId;d.on("blur")||d.on("abcAudit")&&
b?(b=r.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},u=function(){var b=r.getWindow(),c=function(){e.run(k())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms",
"webkit"]).each(function(e,k){var u=k+"Hidden";f.isDef(d[u])&&(a=u,c=k+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:k,onHiddenChange:function(a){e.push(a);c||(c=!0,u())},supportsVisAPI:function(){return b}}},lc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},vb=function(){return{createInstance:function(a,b){return t.isDomless()?new nc:new oc(a,b)}}},oc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=
b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(q){}try{p.b=encodeURIComponent(parent.location.href)}catch(h){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{p.e=encodeURIComponent(w.document.referrer)}catch(v){}}try{"jsi"!==
m.mode&&(p.d=encodeURIComponent(w.location.href))}catch(r){}try{p.f=encodeURIComponent(m.jsref)}catch(L){}try{k=n(),p.g=encodeURIComponent(k.g||""),p.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(s){}p=d(p);p=e(p);k=[];for(var H in p)p.hasOwnProperty(H)&&k.push({key:H,val:p[H]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?
c:k()}}},nc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},sb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",m._onSuspicious)},skipAsFraudulent:function(){return b}}},wb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,u,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},q=function(a,c){var d=new bc(c);return b[a]=d},z=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},B=function(){f(c).each(function(b,c){n[c]+=a.length?u-d:u});d=u},v=function(b){a.length&&B();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||B()},m=function(a){var c,
d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e={sl:z(a.viewState)};u=t.getTagTime();v(e);e.t=u;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;
c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return k=c};(function(){q("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});q("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=t.getTagTime();B()},registerLocation:function(d){var k,
p=!1;c.sl==z(d.viewState)&&a.length?(k=new m(d),a[a.length-1].details=k.details):(k=new m(d),a.push(k),e=d.viewState,p=!0);l.getAggregator().trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return z(e)},
getCurrentEvent:function(){return k}}},I={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},pc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=s.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=s.tagNameIs(a,"div"),e=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),f=s.attributeMatches(b,"href",d),h=s.attributeMatches(b,"target",e);k&&f&&h&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},qc=function(){var a=pc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};l("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!s.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var rc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};l("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,u={};d!==c&&(k=f.stringifyTriState(d),u.res1=
k,u.ps=k,u.ts=r.now(),u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(n){l.getAggregator().trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)rc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});l("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.FF,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;if(t.embedded)try{k=m.contextNode.parentNode,b=qc().getDFPValue(k),k={},k.df=b.type,b.size&&(k.sz=b.size.width+"."+b.size.height),b.tag&&(k.dom=b.tag),c("dfp",k),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.getAggregator().trigger("error",h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var za=function(a,b,c,d){var e,k=0,u=0,n=!1,p=function(){e=Math.round(s.getNodeArea(a.body));
if(e>=d){for(var p,q=e+20*e/100,v=a.querySelectorAll("iframe"),v=f.fromNodeListToArray(v);v.length&&(u<q||k<c);)p=v.shift(),p=Math.round(s.getNodeArea(p)),p>=d&&(k++,u+=p);u>=q&&k>=c&&(q={va:e,bia:u,bin:k},l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.FF,b,f(q).toION()),n=!0)}},q=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():r.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&
f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!n&&f.isDef(w.MutationObserver)&&q())};l("BS_InApp",[],function(){var a=r.getWindow().document;l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&za(a,"bs1",3,100)},{tier:h.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});l("BS_Browser",[],
function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!l.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&za(a,"bs2",10,b)},{tier:h.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var qb=function(){return{createInstance:function(a){return t.isDomless()?new sc:new tc(a)}}},tc=function(a){var b,c,d,e=new sa,k=new da,u=new uc(e),n=new vc,p=new wc,q=new xc(e,a),h=function(){f.isUndef(d)&&
(d=new yc(e));return d},B=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return p},adTalkMessage:function(a){return new zc(a,e)},adTalkMessageCollection:function(){return n},idMapModule:h,interFrameQuerySelector:function(a){return new Ac(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){B();k.traverse(u.addFrame);q.startListening();q.sendToKnownFrames();l.getAggregator().once("stopAdTalk",
function(){q.stopListening()});l.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:q.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Aa(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Aa(e,!0));return c},getIdMap:h}},sc=function(){return{isApplicable:function(){return!1},start:function(){}}},zc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.getAggregator().request("features").on("swapids")?
m.oid:m.asid;var k=a||{},f=m.asid,d=d.tagId,n=t.embedded,p=t.friendly,q=m.birthdate;c=c.split("-")[2];var z;t.friendly?z="["+h.AD_IDENTIFIER+"-"+m.asid+"]":(z=r.getWindow(),z=z.location&&z.location.href,z='iframe[src*="'+(z&&z.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:q,iasCommonId:c,nodeSelector:z,positionStr:e,version:"0.1"}},vc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Bc=function(a,b,c,d){var e,k=a==w;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:m.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){u(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},uc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,
k,f){var n=a.request("adProxy").getAll();e=new Bc(e,k,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Aa=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";n+=p}return n}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+
(m.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},yc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=m.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!t.embedded,f="BODY"!==s.getNodeName(c)&&"HEAD"!==s.getNodeName(c),k;if(k=a.srcIsEmbedded){k=
"0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);k=!(k?l:!a.srcIsFriendly)}e&&f&&!k?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==m.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),
l.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},Ac=function(a){var b=new da,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),d=s.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return s.querySelector(c(a),b)},e=function(c,e){var n,p,q;try{p=d(c,e),p||(n=b.getFrames(!0,a),f(n).findFirst(function(a,b){return q=d(b,e)}))}catch(h){}return p||q||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},xc=function(a){var b=
!1,c,d;d=l.getAggregator().request("features").on("swapids")?m.oid:m.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==m.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var k,
n,m,t,s;try{k=a.request("frameCollection");n=a.request("adTalkMessageCollection");m=d.messageContent.self;n.add(d);var H=k.getMe();H.unifiedId>m.unifiedId&&(H.unifiedId=m.unifiedId);var w;w=r.now()-d.sentTime;d.transferDuration=w;n=t=k.getFrame(m.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(t=t||k.addFrame(c.source,m.id.split("-"),d),t.addInformationFromSrc(d,m),e()):t.addInformationFromSrc(d,m);(s=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(D){l.getAggregator().trigger("error",
h.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ea).send(k)},startListening:function(){c=new ta;c.listen(e,n,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:k}},Cc=function(){var a=l.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},wc=function(){var a,b=[],c=function(a){a=new Cc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},xb=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(h.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Dc=function(a,b){var c,d=h.NA,e=d,k=!1,u=!1,n=!1,p=!b,q=function(){var b=r.getIntersectionObserver(function(a){a=
a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&r.execAtEndOfThread(function(){l.getAggregator().trigger("IOPivChange",d)});e=d},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){d===h.NA&&(d=0)});b.observe(m(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||l.getAggregator().trigger("delayedViewabilityReady")});
k=!0},m=function(b){if(!f.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){u=!0}b&&null!==b.bodyElement?q():b&&b.document?y.whenReady(q,b.document):u?l.getAggregator().request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):
q()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;c&&(a=G({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==h.NA}}},pa=function(){var a=!1;(function(){y.whenReady(function(){l.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};l("loopDelay",[],pa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var Ec=function(){return{start:function(a){l.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Fc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Pb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.getAggregator().trigger("notify",m._onMeasurable))};return{start:function(){var b;b=[Gc(),Hc(),Fc(),Ec()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&
f.isDef(m._onMeasurable)}}},Hc=function(){return{start:function(a){Zb(l.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},Gc=function(){return{start:function(a){l.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Ic=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();
f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.getAggregator().trigger("adImpression")})}}},Jc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},
isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Kc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.getAggregator().trigger("adImpression")})}catch(b){}}}},Lc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=l.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},
Mc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){l.getAggregator().trigger("adImpression")})}}},Ta=function(a){return{resolve:function(){return f(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Qa=function(a){var b=!1,c=!1,d=l.getAggregator().request("omidAdSessionContext"),e=l.getAggregator().request("omidAdSessionVerificationParameters"),k=r.getWindow(),h=(k=k&&k.omid3p)&&f.isFunction(k.registerSessionObserver)&&f.isFunction(k.addEventListener)?k:a,n=function(){return e&&e.IAS&&0<Object.keys(e.IAS).length?e.IAS:e},p=function(){var a,e;b&&c&&(w.omidSupported=!0,a=d.app&&d.isDisplay&&!d.isWeb,(e=m.mobFwUrl&&-1<m.mobFwUrl.indexOf("/blocking/"))&&d.isLimitedSandbox&&
"1"===m.adWidth&&"1"===m.adHeight&&(d.isLimitedSandbox=!1),a&&e&&(d.delayingViewabilityEvents=!0),l.getAggregator().trigger("tryToCallContinueMain",n()))},q=function(a){if("sessionStart"===a.type){d.adSessionType=a.data.context.adSessionType;d.environment=a.data.context.environment;d.omidNativeInfo=a.data.context.omidNativeInfo;d.omidJsInfo=a.data.context.omidJsInfo;d.deviceInfo=a.data.context.deviceInfo;d.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(d.contentUrl=a.data.contentUrl);
d.isNative="native"===d.adSessionType;d.isLimitedSandbox=t.embedded;d.isHtml="html"===a.data.context.adSessionType;d.isWeb="web"===a.data.context.environment;e=a.data.verificationParameters;a=d.isHtml&&d.isWeb;d.queuedOutputItems=[];for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],f,k,q,h=0;h<c.length;h++)f=c[h].root,k=c[h].field,q=c[h].code,"object"===typeof d[f]&&"undefined"!==typeof d[f][k]&&d.queuedOutputItems.push({code:q,value:d[f][k]});d.queuedOutputItems.push({code:"oast",value:d.adSessionType});
d.queuedOutputItems.push({code:"oenv",value:d.environment});d.hasOwnProperty("contentUrl")&&d.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(d.contentUrl||"")});a?l.getAggregator().trigger("tryToCallContinueMain",n()):(b=!0,p())}},z=function(a){d.mediaType=a.data.mediaType;d.queuedOutputItems.push({code:"omtp",value:d.mediaType});a.data.viewport&&a.data.adView&&(d.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});d.isNativeVideo=d.isNative&&"video"===
a.data.mediaType;d.isDisplay="display"===a.data.mediaType;c=!0;p()};return{start:function(){h.registerSessionObserver(q,"IAS");h.addEventListener("impression",z)}}},Ra=function(){return{accepts:function(){return!0}}},wa=function(){var a=l.getAggregator().request("omidAdSessionContext"),b=l.getAggregator().request("omidVerificationClient"),c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Sa=function(){return{start:function(){l.getAggregator().trigger("tryToCallContinueMain",
"")}}},Nc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Oc=function(a,b){var c,d=function(a){var d,f,h;try{d=a.eventData.percentageInView,f=c&&75<=d,h={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,
isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",h)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Pc=function(a,b){var c=[],d=(new Date).getTime(),e=0,k=0,u=!1,n=new ya,p={isEmpty:function(){return 0===
c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},q=function(){u=!0},m=function(a){try{var p="",q=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),n="n",m=!1;switch(a.type){case "start":p="adVideoStart";d=q;k=a.data.duration;1E3<k&&(k/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":p=
"volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);m=!0;l.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}if(""!==p){var z=l.getAggregator().request("mScreenEvents");z&&(n=z.getCurrentLoc());c.push({t:q-d,tp:p,sl:n,ad_duration:k,
volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var r=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==r?r+1:void 0,t=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(f.isDef(p)&&l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"vbp",p),l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"vps",t)):(f.isDef(p)&&l.getAggregator().trigger("addOutputItem",{output:p},"vbp",{type:h.IMPRESSION_EVENT}),l.getAggregator().trigger("addOutputItem",
{output:t},"vps",{type:h.IMPRESSION_EVENT}))}"start"===a.type&&l.getAggregator().trigger("omidAdDuration",{ad_duration:k});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");f.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});m&&l.getAggregator().trigger("sendDt",
h.DT_CODES.VIDEO_EVENTS)}catch(y){__IntegralASDiagnosticCall("omidvideo",y,w.bootstrapper)}};return{start:function(){l.getAggregator().on("impressionsent",q);l.getAggregator().provide({omidVideoEventsString:p});a.addEventListener("video",m);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ba=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",
a)};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Qc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};
f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},ob=function(a,b,
c){var d=l.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ga(b)).resolve())||l.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new Rc(b);return new Qc(b,c,d.isMobileAppEnvironment())}}},pb=function(a){var b=l.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=
l.getAggregator().request("omidVerificationClient"),b=new $(a),e=new wa,f=[];if(b.accepts()&&!e.accepts()){var h=new ba,n=new Sc,e=new Tc(a,new C),h=[{environment:h,measurementStrategy:new Uc(a,new C)},{environment:n,measurementStrategy:new Ca(new ha,r.getWindow(),new C)}],h=(h=(new ga(h)).resolve())?h.measurementStrategy:{},p=new Da(new Ea(new T),new T,n.accepts()),n=new Lc(a,b,m.mode),q=new Fa(e,h,new C,p),b=new Mc(a,b,m.mode),a=new Ga(e,h,new Pc(a,new C),new C,p);f.push({environment:n,measurementStrategy:q});
f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=l.getAggregator().request("avidJsClient"),d=new Jc(b),e=[];if(d.accepts()){var f=new Ic(b,d,m.mode),h=new Kc(b,d,m.mode),n;n=new Nc(b,new C);if(d.supportsAdContainerGeometry()){var p=new Vc,q=new Wc,z=new Ca(new ha,r.getWindow(),new C),B=new Xc(b,new C),p=(p=(new ga([{environment:p,measurementStrategy:B},{environment:q,measurementStrategy:z}])).resolve())?p.measurementStrategy:{},q=new Da(new Ea(new T),
new T,q.accepts()),z=new Yc(b,new C),b=new Fa(z,p,new C,q);n=new Ga(z,p,n,new C,q)}else q=new Oc(b,new C),b=new Ba(q,new C),n=new Ha(q,n,new C);e.push({environment:f,measurementStrategy:b});e.push({environment:h,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Zc(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.getAggregator().request("context"),e=new $c(r.getWindow(),
e),f=new ad(r.getWindow(),new C);e.accepts()?(d=new bd(r.getWindow(),new C),d=new Ha(f,d,new C),d={environment:e,measurementStrategy:d}):(e=new Ba(f,new C),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ga=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Rc=function(a){var b=!1,c,d={winDimensions:G({scrX:0,scrY:0,width:0,height:0}),adDimensions:G({scrX:0,scrY:0,width:0,height:0}),containerDimensions:G({scrX:0,
scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},e=function(a){return a?new G({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):G({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:f.isDef(a.percentageInView)?
a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=
d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ha=function(a,b,c){var d=!1,e=!1,k=!1,u,n,p,q,m=function(){if(!f.isUndef(n)){var a=[],b,l;d?(e?(l=!1,b=100):(l=q,
b=p),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));k=!0;n.shouldDelegateToDomBasedViewability=l;n.percentageInView=b;n.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},r=function(a){n=a;p=a.percentageInView;q=a.shouldDelegateToDomBasedViewability;m()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!==
"AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);m()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return k}}},$c=function(a,
b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.getAggregator().trigger("adImpression"))})}catch(d){}}}},bd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Yc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
a)},d=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
a)},translateAvidOutOfViewReasons:d}},Da=function(a,b,c){function d(a,b,c){c=n(b,c);a=k(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},k=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,q){if(f.isDef(e)&&f.isDef(q)){var l=e.viewport,m=e.computedAdContainer,v=m.obstructions,t=v&&0<v.length,s=e.originalAdContainer,w=q.adGeometry,H=q.adFound,y=e.detectionMethod,D=0,l={x:0,y:0,width:l.width,height:l.height},F=u(s,w),x=e.outOfViewReason,M=0,K=0,C=t||!1,M=1>=w.width*w.height;c&&M&&(H=!1,x=x||"",H||-1!==x.indexOf(h.OUT_OF_VIEW_REASONS.GEOM)||(x=h.OUT_OF_VIEW_REASONS.GEOM+(""!==x?"."+x:"")));if(H&&
0<e.percentageInView){M=d(l,m,F);t?(D=n(m,F),D=k(l,m,D),D=u(m,D),D=a.calculateObstructedArea(D,v)):D=0;K=D;D=Math.round((M-K)/(F.width*F.height)*100);t&&0===K&&(C=!1);for(var w=C,A,t=0,H=b.getConfig(F).numberOfSlices,K=r.floor(F.height/H)||1,v=[],M=w?a.getObstructionStatusBySlice(H):[],U,t=0;t<H;t++)A=F.y+K*t,t==H-1&&(K=F.y+F.height-A),A={x:F.x,y:A,width:F.width,height:K},U=d(l,m,A),A=1==U/(A.width*A.height),v.push(A);if(w)for(m=r.min(M.length,H),t=0;t<m;t++)v[t]=v[t]&&!M[t];m=v}else m=b.getConfig(w).defaultSliceArray;
return{windowDimensions:l,containerDimensions:s,adDimensions:F,percentageInView:D,viewState:50<=D?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=D?"":x||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:y,isObstructed:C,sliceStatus:m}}}}},Vc=function(){return{accepts:function(){return t.isAvidNative()}}},Xc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",
c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Wc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Fa=function(a,b,c,d){var e,k,u,n=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);u=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},q=function(a){k=a;n()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,
{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(q);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return u}}},Ea=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,h,n,p;h=e&&0<e.length;var q;if(h){q=Math.round(d.width);var l=Math.round(d.height);k=Array(q);for(n=
0;n<q;n++)k[n]=Array(l);q={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:q,height:l}}else q={};k=q;l=q=0;if(h){for(;q<e.length;q++){h=e[q];n=l=k;var m=h;k=Math.max(n.x,m.x);h=Math.max(n.y,m.y);p=Math.min(n.x+n.width,m.x+m.width);m=Math.min(n.y+n.height,m.y+m.height);n=p-k;p=m-h;n=0<n?n:0;p=0<p?p:0;k-=l.x;h-=l.y;n=k+n;p=h+p;for(k=Math.round(k);k<Math.round(n);k++)for(m=Math.round(h);m<Math.round(p);m++)void 0!==l.matrix[k]&&void 0===l.matrix[k][m]&&(l.matrix[k][m]=1,l.obscuredPixelCount+=
1);k=l}l=k.obscuredPixelCount;q=k;if(f.isUndef(q.matrix)||0===q.matrix.length)c=[];else{h=0;p=!1;k=q.matrix[0].length;n=q.matrix.length;p=a.getConfig({height:k}).numberOfSlices;for(var m=r.floor(k/p)||1,v=[],t=0;t<k;t++){p=!1;for(var s=0;s<n;s++)if(1===q.matrix[s][t]){p=!0;break}h++;p&&(t+=m-h,h=m);if(h==m||t===k-1)v.push(p),h=0}c=v}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Tc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,k=function(){var a=
r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(k,50)},u=function(a){var f=a.data.adView,l=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);c.delayingViewabilityEvents?(d=a,e||(e=!0,k())):(l&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions),a={viewport:a.data.viewport||{width:0,height:0},
originalAdContainer:f[l?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0},computedAdContainer:f["onScreen"+(l?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0},percentageInView:f.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:n(f.reasons)},b.trigger(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a))},n=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",u)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(h.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:n}},ba=function(){var a=l.getAggregator().request("omidAdSessionContext");
return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Uc=function(a,b){var c=l.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=function(){var a=r.getDoc().getElementById("iasbi"+m.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(u(d),d=null)):r.setTimeout(f,50)},u=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,f());else{var p=a.data.adView.geometry,q=a.data.adView.containerGeometry,l=!!p;a=a.data.adView.measuringElement&&
!!q;b.trigger(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:{x:l&&a?p.x-q.x:0,y:l&&a?p.y-q.y:0,width:l?p.width:0,height:l?p.height:0},adFound:l})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",u)},addAdGeometryMeasurementChangedListener:function(a){b.on(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Sc=function(){var a=l.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&
!a.isNative}}},Ga=function(a,b,c,d,e){var k=!1,m=!1,n,p,q,r,t,v=function(){if(!(f.isUndef(p)||f.isUndef(q)||f.isUndef(r))){t=!0;var a=e.calculateGeometricMeasurement(p,q),b=k&&m,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,
isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",n)}},s=function(a){p=a;v()},w=function(a){q=a;v()},S=function(a){r=a;a=a.eventType;"AdEnteredFullscreen"===a?m=!0:"AdExitedFullscreen"===a?m=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(k=!1);
v()};return{start:function(){l.getAggregator().trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(w);b.start();c.addVideoPlaybackEventListener(S);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return t}}},Ca=
function(a,b,c){var d,e=function(){var b=a.find(),e,n,p=!1;f.isDef(b)?(n=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),n=!1);if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:n})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(h.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Zc=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},ad=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,
sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},m=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):k())},n=function(){c||m()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;l.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},
"mi",{type:"impression"});b?l.getAggregator().trigger("exec","mraid.js",n):m()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},ab=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||l.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Va=function(){var a=new N({tiv:[1E4]}),b=f([h.IN_VIEW,
h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==m.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Ua=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var l=[2E3,5E3,15E3];c?(c=new N({tiv:d}),d=d[0]):f?(c=new N({tiv:l}),d=l[0]):(c=new N({tiv:e}),d=e[0]);e={5E3:m._onInViewMRC5,15E3:m._onInViewMRC15};e[d]=m._onInViewMRC;return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3,shouldIncludeSound:!1}},Xa=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,
9E3,1E4,11E3,12E3,13E3,14E3,15E3],m=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new N({tiv:f}):d?new N({tiv:n}):new N({tiv:m});l.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},Wa=function(a,b){return{timeInViewThresholds:new N({tiv:[0]}),
type:h.DT_CODES.FULLY_INVIEW,rts:{0:m._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Za=function(a,b){var c,d,e,k=r.getMaxNumber(),l=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&m.groupm_native_publisher)&&d;c=new N(a);d=a.qiv;(function(){e=
{};var a;f.isDef(m.rts)&&f.isDef(m.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():h.RTS_KEY_FOR_VQ,e[a]=m.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:h.DT_CODES.CUSTOM,rts:e,isInView:function(b){if(!b.adDimensions)return!1;var c,d,e,n=b.adDimensions.area(),m=1===b.tabHidden,t=r.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;e=b.ub||
k;if(n>=d&&n<=e)return!0});c=!m&&t>=c.piv;b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);l&&(c=c&&b.isVideoPlaying,p&&(c=c&&b.isSoundOn));return c},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p}},Ya=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),
q=function(a,b){var c,h,n,q,l;c=f(b.mediaTypes).contains(d);h=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;q=I.contains(b.id,"fiv");l=I.contains(b.id,"groupmCM");q=!q;l&&(q=p);return q&&c&&h&&n};return{resolve:function(){var b=[],c;n&&h&&(c=f(a.customViewability).filter(q),f(c).each(function(a,c){b.push(c)}));return b}}},N=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ia(c))});else if("string"===typeof a.tiv){a=
a.tiv.split("|");var c=new cd;b.push(new dd(c,parseInt(a[1].replace("%"))));b.push(new ia(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ia(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},cd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},ia=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},dd=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},db=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},
cb=function(a,b,c,d){var e,k,h,n,p,q,m=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},v=function(a){var l=0,m=1===a.tabHidden,v=a.isVideoPlaying,z=a.isSoundOn,s=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){h(b,m,v,s)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});t("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){r(b,m,v,s)&&z?k[a].mark():k[a].stop();p[a]=k[a].getTotalTime()}),t("slcVtVol",p));q=d&&b&&b.shouldIncludeSound?p:n;a=f(q).findFirst(function(a,
b){l=Math.max(l,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(l)},t=function(a,b){var c={};c[a]=b;l.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},s=function(a){!e&&a.sliceStatus&&(e=[],k=[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new aa(1));n.push(0);d&&(k.push(new aa(1)),p.push(0))}))},w=function(a){f.isUndef(a.sliceStatus)||(e||s(a),v(a))};return{start:function(){h=d?r:m;a.addMeasurementChangedListener(w)}}},$a=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},
Hb=function(a,b,c,d,e,f,l,n,p,q){var m=!1,s=t.isVideo(),v=f.request("mobileApp"),w=X().applies(c,e),L=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&e.on("rattie")||w,y=t.xDomainIframe&&!L,x=new ua(10),A=function(){e.on("viewabilityready")&&!m&&(d.send(h.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),m=!0)};f.on("delayedViewabilityReady",function(){D();A()});f.on("delayedViewabilityReadyCallOnly",A);var D=function(c){c=c||!1;try{x.start();var d,e;b.hasMeasurementStrategy()?e=v.isMobileAppEnvironment()&&
b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),v.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):y&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),s&&!t.isAvid()&&q.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);x.stop();var m=r.round(x.getTime()/x.getCount());l.addItem({output:m},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(z){f.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};
return{checkScreenLoc:D,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&w,d=!d&&!e&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",
b)}}};l("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=ed(c),u=[new fd,new gd(k)],n=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&l.getAggregator().trigger("adSessionComplete")},q=function(a){y.addEvent(w,a,function(){l.getAggregator().trigger("adSessionComplete")},!1)},z=function(){var a=new Y(h.DT_CODES.VIDEO_EVENTS);l.getAggregator().trigger("sendDt",a.callType,a.enumerator,
function(){var a={id:m.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};l.getAggregator().once("startViewabilityLoop",function(){var b,c=l.getAggregator().request("mobileApp").isMobileAppEnvironment();l.getAggregator().request("ids").impressionIsIdentifiable()&&(e=cc(a.checkScreenLoc,k.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?t.isOmid()?l.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):q("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
q("beforeunload"))});l.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||z();l.getAggregator().trigger("unload");e&&e.stop();l.getAggregator().trigger("endAdSession");l.getAggregator().trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var ed=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},gd=function(a){var b,c,d,e,f,h=function(p){d&&!f&&1>p?(f=!0,r.setTimeout(function(){h(p)},
1E3)):(e=1>p,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){h(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",h);l.getAggregator().on("newScreenEvent",n)}}},fd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>
f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.getAggregator().on("IOPivChange",e)}}},pd=function(a,b,c,d,e,k){var u,n,p,q,z,B,v,O,L,x=s.getElementsWindow(b);s.getElementsDocument(b);l.getAggregator().provide("iframeCalculatorHelper",hd(x));var H=id(b,d),A=h.AD_IDENTIFIER+"-"+m.asid,D=!1,F=G({}),C=t.isDeviceTypeGroupMobile(),
M=t.usesGroupMCustomMetricMobilePassThru(),K,E=function(){if(!u)if(u=H.calcDims(b,d,p),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=u,e=(new G(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.getAggregator().trigger("error",h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},I=function(){var b,d=t.xDomainIframe&&D;b=C&&D&&p.isReady();b=d||b;d=H.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||
t.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!C&&(t.friendly||f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),O=E(),v=new G(s.calcWinDims()),B=new G(b?s.calcMonDims():{}),L=d?H.getClippedDims():F,n=a.calcPercentInView(O,v,B,L));return n},U=function(){return a.calcInitialViewState(I())},Ia=function(){return b===w?!1:E().isHidden()},jd=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=
r.getWindow(),e=r.getDoc(),f=b===c,k=e.body,h=l.getAggregator(),n=new X,m=h.request("browser"),u=h.request("features"),v=h.request("context"),s=!t.xDomainIframe,h=jd(b,d),e=f&&k?e.body:b;K=t.friendlyIframe?c.frameElement:e;y.addEvent(e,"click",function(){l.getAggregator().trigger("adComponentClicked")});y.addEvent(e,"mouseover",function(){l.getAggregator().trigger("adComponentMousedOver")});n.applies(m,u,v)?(p=Dc(b,s),p.start(),D=!0,M&&(c=new kd(E().getRounded()),n=new ld,h=new md(h,n),q=new nd(c.getSlices(),
h))):M&&(z=new od(a))})();return{mark:function(){s.setAttributeOf(K,A,"")},cleanup:function(){s.removeAttributeOf(K,A)},isNode:function(a){return b===a},isHidden:Ia,isObstructed:function(){return!1},getDims:E,getPercentInView:I,getLocationState:U,getOnPageViewability:function(){return Ia()?h.OUT_OF_VIEW:U()},getDetectionMethod:function(){return c},getContainerDims:function(){return H.allowsOptimization?u:G(d)},refresh:function(){L=O=v=B=n=u=void 0;if(k){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==
w&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;q&&q.isReadyToMeasure()?a=q.getSliceStatus():t.friendly&&z&&f.isDef(O)&&(a=z.getSliceStatus(O,v,B,L));return a}}},qd=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},m=function(p,n,q,m){var u=k()||0===c.length;p=pd(a,p,n,q,b,m);k()&&(q=c.shift(),e=f(c),q.cleanup(),d=void 0);c.push(p);e=f(c);u&&p.mark();
u&&n!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.getAggregator().trigger("primaryadfound",p)},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==h.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},q=function(){var c=b.bootstrapOn("mobOrTab"),c=n().totalArea>=h.MRC_LARGE_AD_SIZE&&
b.on("largeAd")&&!c&&!t.isVideo();return a.calcInitialViewState(p(),c)},z=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},s=function(a){return function(){return c[0]&&c[0][a]()}};l.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===z(b)&&m(b,h.DETECTION_METHODS.MUTATION)})});l.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=z(b);-1<d&&c.splice(d,1)})});return{getDims:s("getDims"),isObstructed:s("isObstructed"),
getDetectionMethod:s("getDetectionMethod"),getContainerDims:s("getContainerDims"),getViewState:q,getPercentInView:p,isHidden:s("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=h.OUT_OF_VIEW_REASONS;e&&(a=d||q(),a!==h.OUT_OF_VIEW&&a!==h.PARTIAL_VIEW_MINUS||b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},
getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:s("getSliceStatus")}},rd=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};
l.getAggregator().on("adComponentClicked",d);l.getAggregator().on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(J.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},zd=function(a,b){var c=[sd(),td()],d=[ha(),ud(),vd(),wd(),xd(),yd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},vd=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||fa();var c=s.crossQuerySelector(fa().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},R=function(a,b){var c,d=s.findChildWithLargestContent(a||m.contextNode.parentNode,b);1<s.getNodeArea(d)&&!d[h.IAS_DETECTOR]&&(c=d);return c},xd=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,
find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},Ad=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return I.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&
a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},Bd=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&I.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},
Cd=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&G(h).isOneByOne(),q=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,
b){return I.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&q&&c&&h&&d()&&e()},getCssSelector:e}},fa=function(){var a,b=l.getAggregator().request("features");a||(a=[Cd(),Bd(),Ad()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,b)})},wd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,
isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=xa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},xa=function(){var a,b=function(){var b;(b=m.contextNode.parentNode)&&I.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==
b()}}},ha=function(){var a=l.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[h.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},td=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},
find:function(){var b=s.crossQuerySelector(m._cl_adpath);b&&(a=s.getParent(b),1>s.getNodeArea(b)&&(a=b,b=s.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},sd=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(m._cl_adpath)[1].split(",").forEach(function(d){if(c=s.crossQuerySelector(d))a=s.getParent(c),1>s.getNodeArea(c)&&
(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},yd=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:R,getAdContainer:function(){return m.contextNode.parentNode},allowForAdContainerChange:!0}},ud=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:l.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return m.contextNode.parentNode},
allowForAdContainerChange:!0}},id=function(a,b){var c,d;c=[Dd(),Ed(),Fd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Gd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Fd=function(){return{calcDims:function(a,b){var c,d,e=new G(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||
t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},Ed=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},Dd=function(){var a=l.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new G(b)).getRounded();c.set("height",
b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,r.getTop()),e=t.isCeltra()&&s.elementIsEmbedded(a);return d||e}}},Gd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=l.getAggregator(),d=c.request("browser"),e=c.request("features"),
c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},hd=function(a){var b,c,d,e=l.getAggregator().request("features"),k=l.getAggregator().request("browser");a=a||r.getWindow();var m=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,n=e.length;k<n;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=s.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=
r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(t){l.getAggregator().trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&m(b.parent,c)}return c},n=function(){var p,n={};try{var z,B,v,w,x,y,A=r.getMaxNumber(),C=r.getMaxNumber();t.friendly?(z=m(),v=z.left,w=z.top,A=z.width,C=z.height,B=s.browserWindowPosition(),x=B.scrX+v,y=B.scrY+w):e.on("rattie")&&k.browserIs(h.BROWSERS.IE)?(d=d||l.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),x=c.scrX,y=
c.scrY):f.isDef(a.mozInnerScreenX)&&(x=r.round(a.mozInnerScreenX),y=r.round(a.mozInnerScreenY));var n={scrX:x,scrY:y,iFrameClippingWidth:A,iFrameClippingHeight:C},D,F,E=b||s.getIeDimObj(a);b=E;f.isDef(a.innerWidth)?(D=a.innerWidth,F=a.innerHeight):E&&f.isDef(E.clientWidth)?(D=E.clientWidth,F=E.clientHeight,0===D&&0<E.offsetWidth&&(D=E.offsetWidth),0===F&&0<E.offsetHeight&&(F=E.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(D=a.frameElement.clientWidth,F=a.frameElement.clientHeight);
p=D;n.height=F;n.width=p}catch(G){l.getAggregator().trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return n};return{calcDims:function(){return new G(n())},getClippedDims:function(){var a=n();return new G({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Bb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new Hd:new Id(a,b,c)}}},Id=function(a,b,c){var d,e=m&&m.contextNode&&m.contextNode.parentNode?m.contextNode.parentNode:null,k=qd(b,c),
l=function(){var a,b,e;d=d||zd(t,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;k.hasAd()||(a=s.getPlaceholderSpan(),e.insertBefore(a,m.contextNode.nextSibling),k.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))};rd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?l():k.refresh();return k},getDetectionMethod:function(){}}},
Hd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},kb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===h().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},h=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",
c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:h,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},jb=function(a){var b=new Jd,c=new Kd;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||
t.isDomless())d=b.detect(),c.detect()&&""==d&&(b.setMobileAppDetectionRuleToSdk(),d="s_sdks"),b.hasDetectedMobileApp()&&(l.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),l.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){l.getAggregator().trigger("error",h.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Ld=
{url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(t.embedded){try{c.push(parent.document.referrer)}catch(k){}try{c.push(J.referrer)}catch(h){}}try{"jsi"!==m.mode&&c.push(w.location.href)}catch(l){}try{c.push(m.jsref)}catch(p){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,k,h,l=
"mobfox"===d?c:[b];for(h=0;h<l.length;h++){k=l[h];var n="string"===typeof d?[d]:d;if(f(n).isArray()&&(n[0].substring(0,4),n))for(var p=0;p<n.length&&(e=-1<k.indexOf(n[p]),!1!==e);p++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,
c){var d=!1;return d=f.isDef(I.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ja=function(){var a=function(a,c){var d,e=Ld[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Md=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",
detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}}],Jd=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,f=Ja().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){m.hasOwnProperty("serverSideAppDetection")&&0!==
m.serverSideAppDetection.length?a="s_serv":(a=f(Md).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Kd=function(){var a=[],b=[],c=function(b,c){var f,h=Ja().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),f=c);return f};return{detect:function(){b=f(Nd).map(c);0<b.length&&l.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==
b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Nd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],
url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},
{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],kd=function(a){var b=[],c=function(a,b,c){a*=c;return new V(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},T=function(){var a=
h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},nd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),k=Math.max(d.leftX,f.leftX),
h=Math.min(d.rightX,f.rightX),l=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new V(k,h,l,f))}});return c},e=function(a,b){var c=0,e=d(a,b),k;f(e).each(function(a,b){k=b.value();c+=k.area});return c},k=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=k();c.mbrd=
1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(h.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},od=function(a){var b=T();return{getSliceStatus:function(c,d,e,f){var h,l=[];h=c.getRounded();c=h.height;var m=h.scrY,q=new G({scrX:h.scrX,
width:h.width}),t=b.getConfig(h).numberOfSlices;q.set("height",r.floor(c/t));for(var s=0;s<t;s++)q.set("scrY",r.ceil(m+c/t*s)),h=100===a.calcPercentInView(q,d,e,f),l.push(h);return l}}},V=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),h=Math.ceil(c),l=Math.ceil(d),m=f-e,q=l-h,r=m*q,t=function(){return{leftX:e,rightX:f,topY:h,bottomY:l,width:m,height:q,area:r}};return{value:t,doesIntersect:function(a){var b=t();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},ld=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},md=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},l=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,
r=d.left-f.left,f=d.top-f.top,f=new V(r,r+d.width,f,f+d.height);e.push(f);f=l();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new V(0,b,f[d],f[d+1]));h();1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},Od=function(){return{listenForResult:function(){l.getAggregator().on("videoBlockResult",function(a){var b=l.getAggregator().request("adNode"),c=!1,d="blockAd"+m.videoId;"failed"===a.action&&
(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Pd=function(a,b){var c,d,e,h,u;e=l.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);u=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-m.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(u);
return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},
indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.getAggregator().persistentTrigger(e,h,u):l.getAggregator().trigger(e,h,u)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Qd=function(){var a=[];return{registerEvent:function(b,c,d){b=new Pd(b,c,d);a.push(b);return b},toString:function(){return"{"+
f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Rd=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.getAggregator().trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},m=function(a){a=(new Ka).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.getAggregator().on({adVideoStart:k,
adImpression:k,volumeChanged:m,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Sd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ka=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&
(c=a.adVolume));-1!==c&&(b=c);return b}}},eb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,u,n,p=[],q=h.OUT_OF_VIEW,s=!1,w=!1,v=!1,x=!0,A=new Qd,C=Rd(),E=new Od,G=new Ka,D=new ya,F=function(b){var d;s=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=A.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(w=!0,q=v?h.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,q=h.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,q=w?h.IN_VIEW:h.OUT_OF_VIEW):d.indicatesNormalSize()&&
(v=!1,q=w?!1:h.OUT_OF_VIEW),b=parseFloat(d.getVolume(G)),0<b?x=!0:0===b&&(x=!1));p.push(d);n&&N();return d},I=function(b){var c,h,k=ka().wrapToGlobal(F),p=function(a){f.isStr(a)&&(l.getAggregator().provide("vc",function(){return a}),l.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),s=!0,p(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",
n,m)}},M=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};k||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},m));return k},K=function(){var a=M();a&&!s&&I(a);return a},J=function(a){a=G.getVolumeFromContext(a);x=f.isDef(a)?0<a:!1},N=function(){D.init();f(p).each(function(a,
b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&l.getAggregator().trigger("sendDt",h.DT_CODES.VIDEO_EVENTS),l.getAggregator().trigger("videoQuartileEvent",b)))});p=[];n=!0};(function(){y.addEvent(r.getWindow(),"message",function(a){F(a)});l.getAggregator().on({volumeChanged:J});l.getAggregator().provide({videoEventsString:A,videoVersion:function(){var a,
b=K();try{a=b.getVersion()}catch(c){a=-1,l.getAggregator().trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Sd},adNode:K});K();E.listenForResult();C.isApplicable(t)&&C.start(c)})();return{findAdNode:K,getViewStateOverride:function(){return q},isHandshakeComplete:function(){return s},triggerInitializationEvents:N,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=x;a.isVideoPlayingInFullscreen=
!1;if(q){if(q===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:q;a.isVideoPlaying=q===h.IN_VIEW}v&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Td=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Ob=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.getAggregator().trigger("sendDt",h.DT_CODES.PERFORMANCE)}),
a=!1},k=function(){b=new va;d=0;e(!0);b.start()},m=function(d,e,h,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(h)):d[e]=h;b&&b.isActive()||k();a=!0},n=function(c,d,e){l.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||k();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(l.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.getAggregator().on("preSendDt",function(a){p(a);
b&&b.kill()});l.getAggregator().on("addThrottledProp",m);l.getAggregator().on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Tb=function(){var a={},b=function(b){a[b]||(a[b]=new ua(1,m.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},
Ud=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},zb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));l.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},
Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Ab=function(){function a(){}a.build=function(){var a=[];a.push(new Z(h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
h.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=l.getAggregator().request("vc");var d={jv3:La,av3:La,jvw:Ud,avw:Td};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),La=function(){return new Z(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},Q={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.getAggregator().trigger("measureTime",Q.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(w,"load",function(){l.getAggregator().trigger("measureTime",
Q.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new va;a.onTick({4:function(){l.getAggregator().trigger("markTime",Q.IDS.IN_BROWSER_DELAY)},5:function(){l.getAggregator().trigger("measureTime",Q.IDS.IN_BROWSER_DELAY)}});a.start()}},E={isFrameworkAvailable:function(a,b){var c,d,e=r.getTop(),f=r.getWindow();try{c=e[a]}catch(h){for(;!d;){try{f.frames[b]&&(d=frame)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=E.getCallId(),d=function(e){try{e&&e.data&&
e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),y.removeEvent(r.getWindow(),"message",d))}catch(f){l.getAggregator().trigger("error",h.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+m.asid},send:function(a,b){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,a,b)}};l("CCPAConsentDetector",[],function(){function a(a){a&&E.send(b,f(a).toION())}var b="ccd";(function(){var b=E.isFrameworkAvailable("__uspapi","__uspapiLocator");E.send("cca",
!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:E.getCallId()}},e=E.getMessageHandler("__uspapiReturn",a),y.addEvent(r.getWindow(),"message",e),b.postMessage(d,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),
cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};E.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=E.isFrameworkAvailable("__cmp","__cmpLocator");E.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:E.getCallId()}},h=E.getMessageHandler("__cmpReturn",a),y.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,
applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("GDPRV2ConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};E.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=E.isFrameworkAvailable("__tcfapi","__tcfapiLocator");E.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e=
{__tcfapiCall:{command:"getTCData",parameter:[b],callId:E.getCallId(),version:2}},h=E.getMessageHandler("__tcfapiReturn",a),y.addEvent(r.getWindow(),"message",h),c.postMessage(e,"*"))}})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});l("postMessageDetector",[],function(){var a=!1,b="pmdetector"+m.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.getAggregator().trigger("addThrottledProp",
h.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});l("safeFrameDetector",[],function(){l.getAggregator().trigger("addThrottledProp",h.DT_SLOT.IM,"sf",f.stringifyTriState(t.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Mb=function(){var a=m.asid,b=m.cookieBaseURL,c=m.protocol,d=function(a){f(a).each(function(a,b){l.getAggregator().trigger("notify",
b)})},e=function(){var e;e=new P(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.getAggregator().trigger("jsonp",e,d,!0);l.getAggregator().trigger("updateDtCount")};return{start:function(){l.getAggregator().on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Nb=function(a,b,c,d,e,f,r){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var q,s=d.baseUrl,w,v,x=f.getDocumentMode();
"number"===typeof x?(v=2E3,8===x?v=4E3:8<x&&(v=8E3)):v=n(m.sp_imp_maxLength,2E3);w=v;if(t.integratedBlockingApplies(s)){v=s;var y=l.getAggregator().request("mobileApp"),A=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),C=m.contextNode.getAttribute("data-ias-container"),E=m.contextNode.getAttribute("data-ias-callback"),y=v+"adContainerId="+C+"&cbFunctionName="+E,y=A?y.replace("monitoring","blocking"):y.replace("skeleton.js",m.integration+".js"),D=m.protocol+":"+m.staticServer+m.integration+
"a.js",F=m.protocol+":"+m.staticServer+m.integration+".js",s=y+"&true_pb="+encodeURIComponent(m.passback)+(A?"&redirectUrl="+encodeURIComponent(F):"")+(A?"&passback=":"&adsafe_pb=")+encodeURIComponent(D)+"&"}var A=s=s.replace(h.UNIQUE_ID_TOKEN,m.asid),G=s.length,I,K,J=n(m.sp_imp_jsInfo_minLength,0),D="";try{I=w-G-J,0<I&&(K=Vd(p,I,14,b.on("partialUrls")),D+=K.join("&"))}catch(N){a.add(h.ERROR_CODES.IMPRESSION_URLS)}s=A+D;p=s+="&"===s.slice(-1)?"":"&";var P,G="";try{P=w-s.length,G+=Wd(P,"adsafe_jsinfo=",
a,b,c,e,f,r)}catch(Q){a.add(h.ERROR_CODES.JSINFO),G+="adsafe_jsinfo=e:"+a.toString()}s=p+G;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);q=s;d.sendImpression(q);m.impUrl=q;l.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",R,m)}}}},Wd=function(a,b,c,d,e,k,l,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+
c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var s=a.viewState;b=e.getAvidIds();s=["id:"+m.asid,"c:"+e.getCacheBustId(),"sl:"+s,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(s.push("abi:"+
b.bundleIdentifier),s.push("apn:"+b.partner),s.push("apv:"+b.partnerVersion));a=Xd(a,c,d,e,k,l,n);return{primary:s,secondary:a}}())},Xd=function(a,b,c,d,e,k,u){var n=[],p=l.getAggregator().request("mPage");n.push("mn:"+m.mn);n.push("pt:"+function(){var b=u.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());n.push(f(k.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=
!b.props||b.props.type===h.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+m.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(r.now()-m.birthdate));m.perf.mark("si");c.on("swapids")?n.push("oid:"+m.oid):n.push("uid:"+d.unq);n.push("v:19.8.73");n.push("sp:"+(m.isSplitMode?1:0));n.push("fwm:"+("true"===m.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(s.windowSize()).toArray().join(".")),n.push("sr:"+
f(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(m.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+b);return n},Vd=function(a,b,c,d){var e,h=[],l=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(l(b))return b}),a=f(a).map(function(a,b){if(!l(b))return b}),f(e.concat(a)).each(function(a,
e){var f;f=e.val;var l=e.key,m;m=24+h.join("&").length+l.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+l,l=h.join("&").length,f.length+l<=b&&h.push(f)}));return h},Kb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Yd(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});
b.length&&(a=a.decode(b),a=a.join("."),l.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},ae=function(a,b){return{start:function(){try{var c=Zd(),d=c.getMethodName(a),e=new P(b.getEnabledScriptUrl(a)),f=$d,m=r.getDoc();(new f(m.body||m.head||m.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.getAggregator().trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},Zd=function(){var a=function(a,c,d){a===m.asid&&(d.unshift(c),l.getAggregator().trigger.apply(null,
d))};return{getMethod:function(b){return function(c){var d={asid:m.asid,constant:h,features:b,context:t,dtBaseURL:m.dtBaseURL,spg:Ma};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Rb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&ae(d,b).start()})}}},Yd=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=I.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},
decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},$d=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=s.createHiddenIframe();c.setAttribute("src","about:blank");(a||m.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+
l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Ma=function(a){var b=new ta;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==m.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(l.getAggregator().trigger("addThrottledProp",
h.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){l.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setInterval(function(){a.sendToOtherTags()},1E3))})})()};l("spg",["spgCache"],Ma,{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});l("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=
function(b){return f(b).keys().sort().toString()===a.toString()},k=function(){c||(c=!0,f(b).each(function(a,b){l.getAggregator().trigger("addOutputItem",b,a,{type:h.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),l.getAggregator().trigger("sendMinDt",h.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&k()},isFull:d,sendToOtherTags:function(){(new ea).send({scaInfoOriginatorASID:m.asid,cache:b})}}},{});try{Na()}catch(be){__IntegralASDiagnosticCall("main",
be,m)}};try{(function(){var m=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,m,m.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
