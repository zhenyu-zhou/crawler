

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
		version: '19.8.80',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.80.js"},
		protocol: 'https',
		jsref: "",
		asid: "96a54d22-9dd2-11ea-becc-0e8c96cf9bbf",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100,rvCombo:1",
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
		mn: "app17va",
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
__IntegralASConfig.initialize=function(l,w,M){function Ra(){var d,a,b;l.perf.markStart(ma);k.startSystem();x=k.getAggregator();x.provide({omidAdSessionContext:{}});x.provide({omidAdSessionVerificationParameters:{}});d=Sa();a=na();b=(new Ta).createInstance(d,a);x.provide({mErrors:d,mJsonp:a,mComm:b});d=__IASOmidVerificationClient;x.provide({omidVerificationClient:d});x.once("callContinueMain",function(){var a,b;l.perf.markStart(oa);b=Y.instantiateModules();a=Y.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,t,b.renderDetector);Y.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);Y.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,t);l.perf.markEnd(oa)});x.on("tryToCallContinueMain",function(a){l.isResolved?x.trigger("callContinueMain"):x.trigger("requestBootstrapper",
a)});x.once("requestBootstrapper",function(a){var b=l.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var f=a&&a.config,h=a&&a.sca,r=a&&a.xsca;f&&x.trigger("jsonp",b+"/jsconfig"+f+(l.adSessionId?"&adSessionId="+l.adSessionId:""),function(a){Object.assign(l,"string"===typeof a?JSON.parse(a):a);l.isResolved=!0;l.sp_cdnScripts={sca:h,xsca:r};x.trigger("callContinueMain")},!1,"cbName")});d=[{environment:new ca(d),adSessionReadyStrategy:new Ua(d)},{environment:new Va,
adSessionReadyStrategy:new Wa}];(new Xa(d)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(ma)}var x,Y=function(){function n(a){var b=new Ya(a,t),c=new Za,e=new $a(a,t),p=ab(a,t),s=(new bb(l,t,a)).resolve(),n=[b],C=[];p.applies()&&n.push(p);e.applies()&&n.push(e);c.applies(a,t)&&n.push(c);d(s).each(function(a,b){n.push(new cb(b,t));C.push(b.id)});0<C.length&&(x.trigger("addOutputItem",{output:C.join(".")},"scm",{type:g.IMPRESSION_EVENT}),x.trigger("addOutputItem",{output:C},"metricIdList",
{type:g.DT_CODES.UNLOAD,asION:!0}));return n}function a(a,b,c,e){var p=n(a);x.provide("viewabilityDefinitions",p);return d(p).map(function(s,p){var d;d=new db(p,b);var n=(new eb(c,a,p.rts)).getCallbacks(),k=new fb(e.createPingJobs(p.type,p.timeInViewThresholds,n,p.metricId));p.rtsCallbacks=n;d=p.thresholdType===g.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new gb(d,p,k,t.isVideo()):new hb(d,new da(p.minUnit),k);d.start();return d})}function b(a,b){var c=(new ea).accepts(),c=!t.isAvid()&&!c&&
!t.isInMobiMraidVideo();return t.isVideo()&&c?ib(l.videoId,a,b):{}}function c(a,b,c,e,p,s,n,C,v,F){try{l.perf.markStart(pa),l.tpiLookupURL&&jb(n,C).init(l.tpiLookupURL),t.isDomless()||F.isStarted()&&F.sendOriginList(),k.runAll(),q.execAtEndOfThread(function(){var s;try{l.perf.markStart(qa);s={output:(new Date).getTime()-p};a.addItem(s,"sinceFw",{type:g.DT_CODES.ADTALK});d.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:g.DT_CODES.ADTALK});l.perf.markEnd(qa);var n,A;l.isSplitMode&&
(A=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(kb,A));l.impUrl&&l.perf.markResource(lb,l.impUrl);n=l.perf.getData();x.trigger("addThrottledProp",g.DT_SLOT.IM,"prf",d(n).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(C){e.add(g.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(pa)}catch(K){e.add(g.ERROR_CODES.EVENT_LOOP_ONE)}}function e(a,b,e,m,p,s,d,n,v){var g;"true"!==l.minimizeCalls&&(g=(new Date).getTime(),q.execAtEndOfThread(function(){c(a,b,e,m,g,p,s,d,n,v)}))}return{instantiateModules:function(){var c,
e,r,m,p,s,d,n,v={};l.perf.markStart(ra);x=k.getAggregator();v.mFeatures=x.provide("features",mb());x.provide("mobileApp",function(){return c=c||new nb(v.mFeatures)});x.provide("avidJsClient",function(){return e=e||new ob(q.getWindow())});x.provide("context",t);v.mBrowser=x.provide("browser",(new pb).createInstance());v.mErrors=x.request("mErrors");v.mIds=x.provide("ids",qb());v.iOutput=new rb(x);x.request("mJsonp");v.mComm=x.request("mComm");v.viewabilityMeasurement=(new sb(new tb(v.mIds),v.mFeatures,
v.mBrowser)).create();if((m=x.request("omidAdSessionContext"))&&m.queuedOutputItems)for(s=0;s<m.queuedOutputItems.length;s++)x.trigger("addOutputItem",{output:m.queuedOutputItems[s].value},m.queuedOutputItems[s].code,{type:"impression"});v.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=v.mIds.unq);v.mAdTalk=(new ub).createInstance(v.mFeatures);r=vb();m=wb(x);p=x.provide("mPage",(new xb).createInstance());v.mAncestorOrigins=yb();v.mPageUrls=x.provide("pageUrls",(new zb).createInstance(v.mAncestorOrigins,
q));s=x.provide("mScreenEvents",Ab());x.provide("ieXDomainViewability",Bb(v.mBrowser));d=Cb(v.mBrowser);n=b(v.mFeatures,s);v.mVideo=x.provide("video",n);Db(Eb.build());d=(new Fb).createInstance(v.mErrors,d,v.mFeatures);p=(new Gb).createInstance(d,v.mErrors,p,t);n=x.provide("jobFactory",Hb());v.mDataTransfer=Ib(d,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,s,r);r=Jb(v.mErrors,v.mFeatures,x,m);v.mMode=Kb(r,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=x.provide("viewability",
Lb(new G,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,x,v.iOutput,p,s,v.mVideo));a(v.mFeatures,v.mViewability,m,n);v.loopDelay=sa();v.renderDetector=Mb();v.mDataTransfer.setViewabilityMod(v.mViewability);l.perf.markEnd(ra);return v},preImpression:function(a,b,c,e,p,s,d,n,v,k,K){var z,D,q,B,t;l.perf.markStart(ta);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";try{c.isApplicable(k)&&(c.start(),e.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&
e.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(z=c.getIdMap())&&e.addItem(z,"idMap"))}catch(u){p.add(g.ERROR_CODES.ADTALK_GENERAL)}try{s.isApplicable(d,v,k)&&s.start(),t=n.detectTopURL(),v.on("exch")&&(D=(new Nb).createInstance(p,e),D.parse(t)),q=Ob(),q.isApplicable(v)&&q.start(v),k.usesGroupMCustomMetric()&&Pb(),B=Qb(),B.isApplicable(v)&&(B.start(),x.trigger("sendCookie")),K.start()}catch(ua){p.add(g.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(ta);return t},sendImpression:function(a,
b,c,e,p,s,n,C,v){try{Rb(a,b,c,e,p,s,n).send(C),d.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(g){__IntegralASDiagnosticCall("impsend",g,l)}},postImpression:function(a,b,c,m,p,s,d,n,v,F,K,z,q){try{l.perf.markStart(va);var N=Sb();N.start();N.addFieldTypes([g.DT_SLOT.IM,g.DT_SLOT.FF,g.DT_SLOT.ENVIRONMENT,g.DT_SLOT.FF_EXP]);var B=Tb(a,b,c);B.isApplicable(m)&&B.start();var t;m.bootstrapOn("getTpl")&&m.on("usetpl")&&(t=Ub(p,s,d,b,n),t.init());e(n,v,F,d,m,p,s,b,z);K&&
K.start&&K.start();q.isDomless()||Vb().start(["sca","xsca","rsrch"],m);Wb();k.runTier(g.TIERS.VIEWABILITY);var u=Xb();u.isApplicable(m)&&(u.start(),T.recordBlockingTime(),l.perf.mark(Yb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());l.perf.markEnd(va)}catch(ua){d.add(g.ERROR_CODES.POST_IMPRESSION)}}}}(),d=function(d){return new I(d)},I=function(d){this.iterable=d};I.prototype.isObj=function(d){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return d?
a:b};I.prototype.isArray=function(){return this.iterable instanceof Array};I.prototype.isEmpty=function(d){return 0===this.keys(d).length};I.prototype.each=function(d,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,e=b.length;c<e;++c)d(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&d(c,b[c])};I.prototype.map=function(d,a){var b=[];this.each(function(c,e){var f=d(c,e);if(void 0!==f||a)b[b.length]=f});return b};I.prototype.stringify=function(n,a){a=a||",";var b=[];this.each(function(a,
e){var f=n(a,e);d.isDef(f)&&b.push(f)});return b.join(a)};I.prototype.toION=function(n,a){var b,c="[",e="]";a=a||0;n=n||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return d(c).toION(n,a)}):(c="{",e="}",b=this.map(function(b,c){var e="string"===typeof b&&-1!==b.indexOf("NULL"),m=d(c).toION(n,a);return e?m:(n[b]||b)+":"+m}));return c+b.join(",")+e};I.prototype.compareTo=function(d){var a=!1;this.each(function(b,
c){d[b]!==c&&(a||(a={}),a[b]=c)});return a};I.prototype.toParams=function(d){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},d)};I.prototype._privateMixin=function(n,a,b){for(var c in a)d.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(n[c]=a[c]);return n};I.prototype.mapToObj=function(n){var a={},b=this;this.each(function(c,e){var f=n(c,e);d(f).isObj()&&b._privateMixin(a,f)});return a};I.prototype.invert=function(){return this.mapToObj(function(d,a){var b=
{};b[a]=d;return b})};I.prototype.mixin=function(d,a){return this._privateMixin(this.iterable,d,a)};I.prototype.find=function(d){var a;this.each(function(b,c){d(b,c)&&(a=c)});return a};I.prototype.findFirst=function(d){var a,b;this.each(function(c,e){!b&&d(c,e)&&(a=e,b=!0)});return a};I.prototype.keys=function(d){var a=[];this.each(function(b){a.push(b)},d);return a};I.prototype.asStrings=function(){var d={};this.each(function(a,b){d[a]=""+b});return d};I.prototype.selectProperties=function(n){var a=
{},b=this;d(n).each(function(c,e){d.isDef(b.iterable[e])&&(a[e]=b.iterable[e])});return a};I.prototype.filter=function(n,a){return this.map(function(a,c){var e;if(d.isUndef(n)||d.resolve(n,a,c))e=c;return e},a)};I.prototype.toArray=function(){return this.map(function(d,a){return a})};I.prototype.JSONStringify=function(){var d,a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);d=JSON.stringify(this.iterable);
b&&(Array.prototype.toJSON=a);return d};I.prototype.contains=function(n){var a=d(this.iterable).findFirst(function(a,c){return n===c});return d.isDef(a)};d.toBase=function(d,a){var b,c=0>d,e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];d=c?-d:d;do b=d%a,f.push(e[b]),d=(d-b)/a;while(0<d);f=f.reverse().join("");return c?"-"+f:f};d.isDef=function(d){return"undefined"!==typeof d};d.isUndef=function(n){return!d.isDef(n)};d.isBool=function(d){return"boolean"===typeof d};
d.noop=function(){};d.identity=function(d){return d};d.isFunction=function(d){return"function"===typeof d};d.isStr=function(d){return"string"===typeof d};d.useIfDef=function(n){return d.isDef(n)?n:!1};d.stringifyTriState=function(d){return!0===d?1:!1===d?0:"na"};d.getNum=function(d){d=parseInt(d);isFinite(d)||(d=-1);return d};d.resolve=function(n){var a=d(arguments).toArray();a.shift();return d.isFunction(n)?n.apply({},a):n};d.flatJSONParse=function(d){var a,b,c,e=/"(\w+)":(\d+|(?:"([^"]*)"))/g,f=
{};for(c=e.exec(d);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=e.exec(d);return f};d.debounce=function(d,a,b){var c,e=b||w;return function(){var b=this,h=arguments;e.clearTimeout(c);c=e.setTimeout(function(){c=null;d.apply(b,h)},a)}};d.last=function(d){return d[d.length-1]};d.collapseArgsIntoHash=function(d,a){var b={};a?b[d]=a:b=d;return b};d.fromBoolToNum=function(d){return d?1:0};d.isNumeric=function(n){return d.isDef(n)&&null!==n&&!isNaN(n)};d.fromNodeListToArray=function(d){return Array.prototype.slice.call(d)};
var k=function(){var n,a={},b=[],c=[],e=function(){var a={},b=d(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,e,f,p,s){s=s||{};var A,C,v=function(a){0===b.length&&(b=d(a).map(function(a,b){return n.request(b)}))},g=function(){if(!A){var a=[];A=!0;v(["features","browser","context"]);s.emits&&(c.events=new G);if(!s.applies||s.applies.apply(s,b))C=!0,a=d(f).map(function(a,b){return n.request(b)},!0),a.push(c),d(c).mixin(p.apply({},a))}};(function(){var b=s.tier;d.isDef(b)&&(a[b]=
a[b]||new fa,a[b].push(g))})();n.provide(e,function(){var a;g();C&&(a=c);return a});return c};e.runAll=function(){var b=d(a).keys().sort(function(a,b){return a-b});d(b).each(function(a,b){e.runTier(b)})};e.runTier=function(b){a[b].run();delete a[b]};e.startSystem=function(){n=n||new wa;d(c).each(function(a,b){f.apply({},b)})};e.getAggregator=function(){return n};return e}(),g={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",
PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",
BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",
BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",
ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",
MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",
VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},
DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},ma="mf",oa="cm",ra="in",ta="pr",va="po",Yb="bl",pa="lo",qa="lt",kb="md",lb="id",Zb=function(){var n,a,b=0,c=["STYLE","SCRIPT"],e=g.RENDER.CREATIVE_NODE_TYPES.concat(g.RENDER.CONTAINER_NODE_TYPES),f=function(a){var b=u.getNodeName(a);a=h(a)||"IFRAME"===b;return b?a:!1},h=function(a){var b=
u.getNodeName(a),c=a.children&&0===a.children.length&&a.innerText&&0<a.innerText.length;return b?-1!==g.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase())||u.hasBackgroundImage(a)||c:!1},r=function(a){function b(a){return!d(e).contains(a)&&!d(c).contains(a)&&!d(m).contains(a)}var f,h,p=a.childNodes,m=[];if(p){for(h=0;h<p.length;h++)1==p[h].nodeType&&(f=r(p[h]),f.length?m=m.concat(f):(f=p[h].nodeName.toUpperCase(),b(f)&&m.push(f)));m.length||(f=a.nodeName.toUpperCase(),b(f)&&m.push(f))}return m},
m=function(a){return"HEAD"===u.getNodeName(l.contextNode.parentNode)?U(l.contextNode.parentNode.ownerDocument.body,a,f):U(null,a,f)},p=function(c){var d;n=n||l.contextNode.parentNode;if(c)if(u.isNodeXDomainIframe(c))d=c;else if(h(c))d=c;else{n=c;d=p;var C;if((l.useFIF&&t.friendlyIframe||t.isSpecifiedAd())&&3>b)a:{var v=c,F,K,z,D,N=u.getNodeName(v);c=r(v);try{z=e.concat(c);if(v===q.getTop().document.body){C=null;break a}u.isWindow(v)?(F=m(z),F||(D="["+g.AD_IDENTIFIER+"-"+l.asid+"]",K=u.crossQuerySelector(D),
a=K.parentNode,F=U(a,z,f))):("IFRAME"===N&&(v=v.contentWindow.document,z=z.concat(r(v))),F=U(v,z,f));void 0===F&&a&&a.parentNode&&(a=F=a.parentNode,b+=1)}catch(B){k.getAggregator().trigger("renderdiag",B)}C=F}else{C=c;F=u.getNodeName(C);K=r(C);try{N=e.concat(K),u.isWindow(C)?v=m(N,f):("IFRAME"===F&&(C=C.contentWindow.document),v=U(C,N,f))}catch(Q){k.getAggregator().trigger("renderdiag",Q)}C=v}d=d(C)}else d=null;return d};return{find:p,getClosestContainerName:function(){return u.getNodeName(n)}}},
Mb=function(){var d,a=!1,b={status:g.RENDER.STATUS.OTHER,details:g.RENDER.DETAILS.OTHER},c={status:g.RENDER.STATUS.DETECTED,details:g.RENDER.DETAILS.ENVIRONMENT},e=function(){a=!0},f=function(a){a&&(a.status=g.RENDER.STATUS.DETECTED);k.getAggregator().trigger("adRendered")},h=function(a){var b={},c=q.getDoc(),e=function(h){var r=h&&h.type;if("readystatechange"===r&&"complete"===h.target.readyState||"load"===r)f(b),b.details=d.build(a,{eventType:r}),m(b),y.removeEvent(a,"load",e),y.removeEvent(c,"readystatechange",
e)};"complete"===c.readyState?(f(b),b.details=d.build(a,{eventType:"readystatechange"})):(y.addEvent(a,"load",e),y.addEvent(c,"readystatechange",e));return b},r=function(a){a===g.RENDER.STATUS.DETECTED&&k.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},m=function(c){var e=c.status||b.status;c=c.details||b.details;a&&e===g.RENDER.STATUS.DETECTED?(r(e),k.getAggregator().trigger("addThrottledOutputItem",
"rend",e),k.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(r(e),k.getAggregator().trigger("addOutputItem",{output:e},"rend"),k.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},p=function(){k.getAggregator().on("primaryadfound",function(a){var c,e=b,r=new Zb,p=!0,l=k.getAggregator().request("mobileApp"),l=l&&l.isMobileAppEnvironment&&l.isMobileAppEnvironment(),z=function(){N();p&&(c=q.setInterval(N,500))},D=function(){var a=q.getWindow().mraid,b=function(){y.removeEvent(a,
"ready",b);d.appendCode(g.RENDER.DIAGNOSTIC.MRAID_READY);z()};"loading"===(a.getState&&a.getState())?y.addEvent(a,"ready",b):(d.appendCode(g.RENDER.DIAGNOSTIC.MRAID_DEFAULT),z())},N=function(){var b=a&&a.getAdNode(),k=r.find(b);if(u.isNodeXDomainIframe(k))c?q.clearInterval(c):p=!1,e=h(k);else if(k){var b=!1,z=u.getRect(k);k&&"IMG"===u.getNodeName(k)&&(b=0===k.naturalWidth||0===k.naturalHeight);!b&&z.width>=g.RENDER.WIDTH_THRESHOLD&&z.height>=g.RENDER.HEIGHT_THRESHOLD&&(f(e),c?q.clearInterval(c):p=
!1);e.details=d.build(k)}else e.details=r.getClosestContainerName()||d.getAdNodeName(b)||e.details;m(e)};t.isMraid()&&l?D():z();k.getAggregator().trigger("eligiblerender")})};return{start:function(){var a=!1;k.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:"initial"});k.getAggregator().on("adRendered",function(){a=!0});k.getAggregator().provide("adRenderStatus",function(){return a});d=new $b;new ac;k.getAggregator().on("impressionsent",
e);t.isAvid()||t.isOmid()||t.isVideo()?(k.getAggregator().trigger("eligiblerender"),f(),m(c)):(m(b),p())}}},$b=function(){var n=!1,a=[],b=function(a){var b;if(u.isWindow(a))b="WINDOW";else if(u.isNodeXDomainIframe(a))b="XIFRAME";else try{b=u.getNodeName(a)}catch(f){}return b};return{build:function(c,e){var f=c&&u.getRect(c),h=b(c),r=c&&"IMG"===h,m=u.hasBackgroundImage(c),p=c.innerText&&0<c.innerText.length,p=c.children&&0===c.children.length&&p,s=[h,f&&f.width>=g.RENDER.WIDTH_THRESHOLD&&f.height>=
g.RENDER.HEIGHT_THRESHOLD?g.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:g.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE];!m&&!r||0!==c.naturalWidth&&0!==c.naturalHeight||s.push(g.RENDER.DIAGNOSTIC.BROKEN_IMAGE);m&&s.push(g.RENDER.DIAGNOSTIC.STYLED_NODE);p&&s.push(g.RENDER.DIAGNOSTIC.TEXT_NODE);e&&e.eventType&&("readystatechange"===e.eventType?s.push(g.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===e.eventType&&s.push(g.RENDER.DIAGNOSTIC.LOAD_FIRED));n&&d(a).each(function(a,b){s.push(b)});return s.join(".")},getAdNodeName:b,
appendCode:function(b){a.push(b);n=!0}}},ac=function(d){var a,b=!1,c=function(){k.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&(__IntegralASDiagnosticCall("renderloop",a.message),k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"rle",a.message))};k.getAggregator().on("eligiblerender",function(){b=!0;c()});k.getAggregator().on("renderdiag",function(b){a=b;c()});c()},Z=function(){return{applies:function(d,a){var b=k.getAggregator().request("mobileApp"),
c=!a.bootstrapOn("mobOrTab")&&d.browserIs(g.BROWSERS.WEBKIT);return(d.browserIs(g.BROWSERS.CHROME)||d.isAndroidWebViewBrowser()||c||d.browserIs(g.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&d.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Pb=function(){var d,a,b=!1,c=k.getAggregator().request("mPage"),e=function(){!b&&a&&d&&!c.isHidden()&&(b=!0,k.getAggregator().trigger("sendDt",g.DT_CODES.LARGE_BILLABLE))};k.getAggregator().on("primaryadfound",function(a){d=a.getDims().area()>=g.MRC_LARGE_AD_SIZE;
e()});k.getAggregator().on("impressionsent",function(){a=!0;e()});c.onHiddenChange(e)},vb=function(){var n=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};k.getAggregator().on("newScreenEvent",function(c){c=d(c).selectProperties(d(b).keys());c=d(c).asStrings();var e=d(c).compareTo(a);e&&(e.t=t.getTagTime(),n.push(e));d(a).mixin(c)});return{toString:function(){return d(n).toION(b)}}},wa=function(){var n=new bc,a=new G;return d(n).mixin(a)},G=function(){var n={},a={},b=function(b,
c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),d(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){n[a]=n[a]||new fa;n[a].push(b,c)};return{on:function(a,f){var h={};f?h[a]=f:h=a;d(h).each(c);d(h).each(b)},once:function(a,f){b(a,f,!0)||c(a,f,1)},trigger:function(a){var b=d(arguments).toArray();b.shift();var c;(c=n[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=d(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=n[b])&&h.run.apply({},c)}}},ga=function(){var n=
function(a,c,e){var f,h=c.length,r=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);e&&e(a,c);if(r&&r.length){for(a=0;a<r.length;a++)(f=r[a])&&u.isWindow(f)&&(c[h]=a,n(f,c,e));c.pop()}},a=function(a,c){try{n(c||top,[0],a)}catch(e){}};return{traverse:a,getFrames:function(b,c){var e=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<e.length;b++)if(e[b]===a){c=!1;break}b=c}b&&e.push(a)},c);return d(e).filter(b)}}},fa=function(){var n=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;
n[n.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;d(n).each(function(b,c){c.apply({},a)})}}},fb=function(n){var a={};return{doEligibleJobs:function(b){d(n).each(function(c,e){var f=e&&e.getTime();d.isDef(f)&&b>=f&&!a[f]&&(e.getTask().call(),a[f]=!0)})}}},xa=function(){var n,a=new ha,b=function(b,e,f,h){var r,m,p,s;if(JSON&&JSON.parse)try{r=JSON.parse(b.data),m=b.source,s=d.noop,e(r)&&(h&&(p=h(m,r))&&(s=function(){a.send(function(){return p},m)}),f(b,r,s))}catch(n){r&&
k.getAggregator().trigger("error",g.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,e,f){n=function(h){b(h,a,e,f)};y.addEvent(w,"message",n)},stop:function(){n&&y.removeEvent(w,"message",n);n=null}}},ha=function(){var n=function(a){return d(a).isObj()?[a]:(new ga).getFrames(a)},a=function(a){return d(a).mapToObj(function(a,b){var f;d.isFunction(b)||(f={},f[a]=b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var e=n(c);d(e).each(function(c,e){var r;r=d.resolve(b,e)||{};r.sentTime=
q.now();r=a(r);e.postMessage(d(r).JSONStringify(),"*")})}}}},cc=function(n,a){return{onAll:function(b){var c={};d(a).each(function(e,f){n.on(f,function(){c[f]=1;d(c).keys().length===a.length&&(c={},b())})})}}},rb=function(n){var a=0,b={},c=function(b,c,e){if(d.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=e||{};this.output=function(){var a=d.resolve(b.output);this.props.asION&&(a=d(a).toION());return a}},e=function(a){var c,e,f=
[];for(c in b)b.hasOwnProperty(c)&&(e=a(c,b[c]))&&f.push(e);return f},f=function(a,e,f){f=f||e;f="string"!==typeof f?f:{};var p=function(a,e,f){a=new c(a,e,f);b[a.id]=a};d(a.output).isObj()&&!f.asION?d(a.output).each(function(a,b){p({output:b},a,f)}):p(a,e,f)};n.on("addOutputItem",function(a,b,c){f(a,b,c)});return{addItem:f,filterOutput:function(a,b){return e(function(c,e){var f=e.props,n;a(f)&&(n=e.output(),f.encode&&(c=encodeURIComponent(c),n=encodeURIComponent(n)),d.isFunction(b)?b(c,n):b[c]=n)})},
iterate:e,cleanup:function(){e(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},bc=function(){var n={},a=function(a,c){n[a]=c};return{request:function(a){var c,e=n[a],f=d(arguments).toArray();f.shift();d.isUndef(e)||(c=d.isFunction(e)?e.apply({},f):e);return c},provide:function(b,c){c?n[b]=c:d(b).each(a);return c}}},Gb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new dc:new ec(d,a,b,c)}}},ec=function(n,a,b,c){var e;return{collect:function(){var a=
n.find(),h=a.getOutOfViewReasons(),r=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&e?e:E(u.calcWinDims()),p=a.getDims();e=m;if(!a.hasAd()||!m.hasValidDims()||!p.hasValidDims())return{viewState:g.NA,posViewState:g.NA,embedded:t.embedded,winDimensions:m,adDimensions:p};!0===r&&h.push(g.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?g.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),
reason:h.join("."),obstructed:d.stringifyTriState(a.isObstructed()),isHidden:d.stringifyTriState(a.isHidden()),tabHidden:d.stringifyTriState(r),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},dc=function(){return{collect:function(){return{}}}},fc=function(n){n=n||d.identity;var a=[],b=q.now(),c=function(){var c=q.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=n(b);c();0!==a.length&&b===f.state||a.push({state:b,duration:0})}}},ya=function(d,a){var b=d||1,c=0,e=0,f,h=0;return{start:function(){0===c%b&&(f=q.now())},stop:function(){var d=f||a;0===c%b&&(h+=q.now()-d,e++);c++},getTime:function(){return h},getCount:function(){return e}}},za=function(){var n,a=0,b=0,c=new G(!0),e=function(){n&&(a++,c.trigger(a),b>a?q.execAtEndOfThread(e):f())},f=function(){n=!1;a=0};return{onTick:function(a,
e){var f=d.collapseArgsIntoHash(a,e);d(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},start:function(){n||(n=!0,q.execAtEndOfThread(e))},kill:f,isActive:function(){return n}}},gc=function(d,a){var b,c=a,e=function(a){b||(a&&d(),b=q.setInterval(d,c))},f=function(a){a&&d();q.clearInterval(b);b=null};return{start:e,stop:f,updateFrequency:function(a,b){c=a;f();e(b)}}},da=function(d){var a,b,c=0,e=t.getTagTime(),f=0,h=!1;return{getTotalTime:function(){return f},stop:function(){c=0;e=t.getTagTime();
h=!1},mark:function(){a=h?t.getTagTime()-e:0;c+=a;c>=d&&(b=c-a<d,f+=b?c:a);e=t.getTagTime();h=!0}}},S=function(n,a){var b=n||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],e=b[2],f=b[3],h=b[4],r=b[5],m=n?b[6]:"",p=a?b[7]:"",s={},A=function(a){d.isDef(a)&&(h=a);return h},C=function(a){d.isDef(a)&&(r=a);return r},g=function(a,b){return a+"="+d(b).toION()},
p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var e,f;(e=s[b])?s[b]=e+c:a&&p.length&&(e=p.split(b),f=1<e.length)&&(f=e[1].split("&")[0],e=[e[0],f].join(b),p=p.replace(e,e+c))},fullDom:c,hostname:f,sub:A,master:C,setParam:function(a,b){s[a]=s[a]||{};d(b).isObj()?d(s[a]).mixin(b):s[a]=b},path:function(a){m=a},toString:function(){var a=A()?A()+".":"",b=m?"/"+m:"",c;p||!d(s).isEmpty()?(c=d(s).isEmpty()?"":d(s).stringify(g,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return e+"://"+a+C()+b+c}}},
Wb=function(){var n=function(a){var c=[];d(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var e;c&&c.id&&(e=c.id.replace(/[^\w-_.>\/]/g,""));return e};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=k.getAggregator().request("adSlotIds"))c=b;else{var e,f;if(e=u.getOurNodeInTop()){var h=u.getAncestorNodes(e);f=d(h).map(a)}if(b=f=f&&n(f))k.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:g.DT_CODES.ADTALK,asION:!0}),k.getAggregator().provide("adSlotIds",
b),c=b}return c}catch(r){k.getAggregator().trigger("error",g.ERROR_CODES.AD_SLOT_ID)}}()};k("AdRefreshDetection",[],function(){var d=[30,45,60,90],a={start:function(){var a=this,c=l.asid,e=this.getChanId(),f=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;c&&e&&(this.recordAdSlotImpression(c,e,f,function(c,e){c?k.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(e)}),a.registerInternalViewabilityListener(e,f))},adRefreshIntervalIsValid:function(a){return-1!==
d.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,e=/(\S+)=(\S+)/g,f=0;f<a.length;f+=1){e.lastIndex=0;var d=e.exec(a[f]);d&&3===d.length&&"chanId"===d[1]&&(c=d[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,e,f){var d=q.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:e};window.addEventListener("message",
function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);f(null,b)}catch(c){f(c)}},!1);d.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var e=this,f=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,d=q.getTop();if(f&&this.adRefreshIntervalIsValid(f))k.getAggregator().on("sendDt",function(r,m){r===g.DT_CODES.PING&&m===f&&(q.execAtEndOfThread(function(){d.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),
"*")}),e.sendAutoRefreshProp(f))})},sendAutoRefreshProp:function(a){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"ir",a);k.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var e;if(!b&&c)try{e=JSON.parse(c),e.isRefreshable&&e.adServerName&&a.start()}catch(f){k.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH)}});return a},{tier:g.TIERS.ENVIRONMENT,applies:function(d,a,b){return b.isPossiblyRefreshable()}});var yb=function(){var n,a,b=function(a,
b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{n=q.getWindow().location.ancestorOrigins,a=!0}catch(b){k.getAggregator().trigger("error",g.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return n&&n.length||0},getTopDomain:function(){return d.last(n)},sendOriginList:function(){var a;a="ao:"+
(n?d(n).map(b).reverse():[]).join(",");k.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:g.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});k.getAggregator().trigger("sendDt",g.DT_CODES.THIRD_PARTY)}}},Ub=function(n,a,b,c,e){var f=function(a,b,c){e.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(e){try{a.diagnostic("c");var h=e.length,p=0,s=0;f(h,0,0);d(e).each(function(a,b){n.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){f(h,p,++s)},!0);f(h,++p,s)})}catch(A){b.add(g.ERROR_CODES.AT_SEND)}};
return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;n.jsonp(a,h)}catch(c){b.add(g.ERROR_CODES.AT_INIT)}}}},Jb=function(d,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(f){d.add(g.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},pb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new hc:
new ic}}},ic=function(){var n=g.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=q.getWindow();try{d.isDef(b.opera)&&d.isDef(b.opera.buildNumber)?a=n.OPERA:d.isDef(b.mozInnerScreenY)?a=n.GECKO:d.isDef(b.chrome)&&d.isDef(b.chrome.csi)?a=n.CHROME:d.isDef(b.msWriteProfilerMark)&&d.isDef(b.crypto)?a=n.MSEDGE:d.isDef(b.attachEvent)||d.isDef(b.msCrypto)?a=n.IE:d.isDef(b.WebKitPoint)&&(a=n.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=q.getWindow();d.isDef(b.navigator)&&d.isDef(b.navigator.userAgent)&&
(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=q.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=q.getWindow();return!(!a||!d.isFunction(a.postMessage))},getDocumentMode:function(){var a=q.getDoc();return a&&a.documentMode?a.documentMode:g.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),f;f=["{45EA75A0-A269-11D1-B5BF-0000F8051515}",
"{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=g.NA,r=q.getDoc(),m=r.createElement("div");if(a(n.IE))try{if("-ms-ime-align"in r.documentElement.style)h="11";else for(m.style.behavior="url(#default#clientcaps)",r=0;r<f.length&&!(h=m.getComponentVersion(f[r],"componentid").replace(/,/g,"."));r++);}catch(p){}f=h;h=g.NA;m=q.getWindow();d.isDef(m.navigator)&&d.isDef(m.navigator.appName)&&(h=m.navigator.appName.toLowerCase()[0]);return{br:c,abv:f,an:h}},isAndroidWebViewBrowser:function(){var a=
c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return d(b).findFirst(function(b,c){return P.contains(a,c)})};return P.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},hc=function(){var d=function(){return!1},a=function(){return g.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",
abv:a(),an:a()}},browserIs:d,getUserAgent:d,hasPostMessage:d,hasAncestorOrigins:d,hasIntersectionObserver:d,isAndroidWebViewBrowser:d}},Ta=function(){return{createInstance:function(d,a){return t.isDomless()?new jc(a):new kc(d,a)}}},lc=function(){var d,a=function(a,c){var e="",f="",d=q.getDoc().getElementsByTagName("ins");if(d&&0<d.length){f=d[0];e="<ins";for(d=0;d<f.attributes.length;d++)e+=" "+f.attributes[d].nodeName+'="'+f.attributes[d].nodeValue+'"';e+=">";f="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+
a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
e+'<script src="'+c+'">\x3c/script>'+f+"</body></html>"};return{isApplicable:function(a){d=k.getAggregator().request("omidAdSessionContext");var c=!(!d.app||!d.isDisplay||d.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){d=k.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,e;e=l.contextNode.parentNode;var f,h=l.adWidth&&0<l.adWidth?l.adWidth:0,r=l.adHeight&&0<l.adHeight?l.adHeight:0,m=q.getDoc().getElementsByTagName("ins"),
p;p=f=0;m&&0<m.length&&(p=m[0],f=parseInt(p.style.width),p=parseInt(p.style.height));h=f||h||window.innerWidth;r=p||r||window.innerHeight;"complete"===q.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(f=q.getDoc().createElement("IFRAME"),f.id=c,f.src="about:blank",e.appendChild(f)):q.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(e=q.getDoc().getElementById(c))e.style.width=h+"px",e.style.height=r+"px",e.scrolling="no",e.frameborder=0,e.style.position="absolute",
e.style.padding=e.style.margin=e.style.border="0px";e&&(e=e.contentWindow.document)&&(e.open().write(a(c,b)),e.close())}}},kc=function(n,a){var b=function(a,b){function c(a,b,e){"script"!==a?(b=M.createElement("DIV"),b.innerHTML=e,e=b.childNodes[0]):(e=M.createElement("SCRIPT"),e.src=b);l.contextNode.parentNode.appendChild(e)}var e,f;b=b||a;a=1<arguments.length?a:"script";e={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];e=e[0]+b+e[1];t.isOmid()?(f=new lc,f.isApplicable(b)?f.deployBlockingScriptIntoIframe(b):c(a,b,e)):"true"===l.forceAppend?c(a,b,e):M.write(e)},c=function(a,b,c){var e=!c&&y.getXHR2();e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},e=function(a,b,c,e){var f=M.createElement("script");c=c||l.contextNode.parentNode;f.type="text/javascript";f.src=a;b&&(f.onload=
b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));d.isDef(c)&&c.appendChild(f)},f=function(a){d.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,f,d){e(a.wrap(b,c,f,d))};k.getAggregator().on({addNode:b,send:c,exec:e,notify:f,jsonp:h});return{addNode:b,send:c,exec:e,notify:f,jsonp:h}},jc=function(n){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";k.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);k.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){k.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},e=function(a){d.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},f=function(a,b,e,f){c(n.wrap(a,b,e,f))};k.getAggregator().on({addNode:a,send:b,exec:c,notify:e,jsonp:f});
return{addNode:a,send:b,exec:c,notify:e,jsonp:f}},t=function(){var n="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(n)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return n||d.isDef(q.getWindow().mraid)},e=function(){return!n&&d.isDef(q.getWindow().mraid)},f=function(){var a=!1;if(!n)var b=(a=q.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&d.isFunction(b.addVideoEventListener),a=e()&&!!a;return a},h=function(){var a;
if(!(a=-1!==l.mode.indexOf("jsvid"))){var b;a=!1;var c=k.getAggregator();if(!n&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===g.MEDIA_TYPE.VIDEO}catch(e){}(b=a)||(c=k.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===g.MEDIA_TYPE.VIDEO),b=a||f());a=b}return a},r=function(){return l.mobOrTab},m=function(a){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(b,
c){return P.contains(c.id,a)}).length},p=function(){return m("grpm")||l.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(n)a=!0;else{try{c=S(a.document.referrer),b=c.hostname===a.location.hostname}catch(e){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return q.now()-l.birthdate},getPageTime:function(){var a=g.NA;!n&&d.isDef(w.chrome)&&d.isDef(w.chrome.csi)&&d.isFunction(w.chrome.csi)&&(a=q.round(w.chrome.csi().pageT));return a},isVideo:h,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;n||(a=(a=l._cl_adpath)&&d.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;n||(a=b.exec(l._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!n&&d.isDef(q.getWindow().avid)},isOmid:function(){var a=k.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ea).accepts()},isOmidForWeb:function(){return(new Aa).accepts()},isDomless:function(){return n},
isAvidNative:function(){var a=!1,b=k.getAggregator();n||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===g.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===g.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;n||(a=void 0!==ia());return a},isMraid:e,isSafeFrame:function(){var a=!1;n||(a=d(q.getWindow().$sf).isObj(!1)&&d(q.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:r,usesIASFullyInViewCustomMetric:function(){return m("fiv")||
l.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;n||(a=Ba().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&r()},usesZeroPivCustomMetric:function(){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(a,b){return d(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=q.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!n&&!c()&&!h()&&a&&"jload"===l.mode},integratedBlockingApplies:function(a){var b,c;l.contextNode&&d.isFunction(l.contextNode.getAttribute)&&(b=l.contextNode.getAttribute("data-ias-check-tag"),c=l.contextNode.getAttribute("data-ias-check-done"));return l.integration&&!(!0===l.fwMonitoring||"true"===l.fwMonitoring)&&d.isDef(JSON)&&d.isFunction(JSON.parse)&&"true"===
b&&"false"===c&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"))}}}(),y={addEvent:function(n,a,b,c){d.isDef(n.addEventListener)?"mouseenter"===a?n.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?n.addEventListener("mouseout",y.mouseEnter(b),c):n.addEventListener(a,b,c):d.isDef(n.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),n.attachEvent("on"+a,b))},removeEvent:function(n,a,b){d.isDef(n.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===
a&&(a="mouseout",b=y.mouseEnter),n.removeEventListener(a,b)):d.isDef(n.detachEvent)&&n.detachEvent("on"+a,b)},mouseEnter:function(d){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||d.call(this,b)}},isAChildOf:function(d,a){if(d===a)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d},getStyle:function(d,a,b){var c="",e=M.defaultView&&M.defaultView.getComputedStyle;b=b||"";e?c=(d=M.defaultView.getComputedStyle(d,b))?d.getPropertyValue(a):c:d.currentStyle&&(a=a.replace(/\-(\w)/g,
function(a,b){return b.toUpperCase()}),c=d.currentStyle[a]);return c},getXHR2:function(n,a){var b,c;d.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):d.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(n,a){if(t.isDomless())q.setTimeout(function(){n()},50);else{var b=a||(t.xDomainIframe?M:q.getTop().document),c=function(a){var c=q.setInterval(function(){b.body&&(q.clearInterval(c),a())},50)},e=this;(function(a){var h=function(){a(!0)};d.isFunction(M.addEventListener)?
"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?q.execAtEndOfThread(h):e.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(n)}},isSandboxed:function(d){var a,b=q.getWindow(),c=!1;if("sandbox"in q.getDoc().createElement("iframe")){try{a=b.frameElement}catch(e){}if(a)d=a.hasAttribute("sandbox");else{a=!1;b=q.getDoc();if(d.browserIs(g.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}d=a}c=d}return c},styleElement:function(n,
a){if(n&&d(n.style).isObj()&&d(a).isObj()){var b="";d(a).each(function(a,e){b+=a+": "+e+" !important;"});n.style.cssText=b}},nodeIsAbsolutelyPositioned:function(d){return"absolute"===y.getStyle(d,"position")||d.style&&"absolute"===d.style.position}},$=function(n){var a,b=$.callTypeCounter,c=[g.DT_CODES.ADTALK],e={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=g.DT_CODES;d("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,
f){a[b[f]]=e[f]});return a};a=function(){var a=f()[n],e=b&&b[n];d.isDef(e)&&0!==e&&d(c).contains(n)&&(a=a+"."+e);e=b[n];b[n]=d.isDef(e)?e+1:1;return a}();return{callType:n,enumerator:a}};$.callTypeCounter={};var Ib=function(n,a,b,c,e,f,h,r){var m=0,p=0,s=!1,A=function(a,f,r,n,A,C){r=r||!b.on("postDts");var t=a===g.DT_CODES.DIAGNOSTIC||a===g.DT_CODES.ADTALK||a===g.DT_CODES.SCA||a===g.DT_CODES.XSCA||a===g.DT_CODES.EXTERNAL||a===g.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==h.getCurrentLoc()))try{var u=
l.dtBaseURL,J=new S(u,!0),w=q.now();k.getAggregator().trigger("preSendDt",a);u||(J.path("dt"),b.on("usedtdomain")&&J.sub("dt"));v(J,a,f);A&&A.field&&J.setParam(A.field,A.value);n||F(J,a);k.getAggregator().trigger("send",J,function(){p+=1;m=q.now()-w;d.isFunction(C)&&C()},r);a===g.DT_CODES.UNLOAD&&(s=!0);e.cleanup()}catch(y){__IntegralASDiagnosticCall("dt-"+a,y),k.getAggregator().trigger("error",g.ERROR_CODES.PHONE_HOME)}};n=function(){s||A(g.DT_CODES.UNLOAD,-1,!0)};var C=function(a,c){var e={bapi:"a",
bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=l.mode,e=e[a]||e[f];b.on(c||f+"Diag")&&e&&A(g.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:e})},v=function(a,b,f){var h=new $(b);f=d.isDef(f)?f:h.enumerator;a.setParam("asId",l.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};e.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},F=function(c,d){var s,n={};e.filterOutput(function(a){return a.standalone&&
!a.minDt&&a.type===d},function(a,b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(d===g.DT_CODES.CUSTOM||d===g.DT_CODES.UNLOAD||d===g.DT_CODES.VIDEO_EVENTS||d===g.DT_CODES.FULLY_INVIEW||d===g.DT_CODES.PING||d===g.DT_CODES.VIEWABILITY_READY||d===g.DT_CODES.ADTALK)n.clog=r,t.isVideo()&&(s=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(s=k.getAggregator().request(s))&&!s.isEmpty()&&(n.ve=s));d===g.DT_CODES.UNLOAD&&(n.ndt=p);-1!==l.mode.indexOf("jsvid")&&(n.vv=k.getAggregator().request("videoVersion"));
n.NULL1=b.output();n.NULL2=h.stringify(10);n.em=t.embedded;n.fr=t.friendly;n.e=a.toString();n.tt=l.mode;n.dtt=m;e.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===d);b&&a.oneTime&&(a.flagForRemoval=!0);return b},n);c.setParam("tv",n);c.setParam("br",f.getBrowserType())};k.getAggregator().on({sendDt:function(a,b,c){A(a,d.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){A(a,b,void 0,!0)},sendDiag:C,updateDtCount:function(){p++},unload:n});return{send:A,unload:n,
diagnostic:C,setViewabilityMod:function(a){}}},E=function(n){var a={},b=!1,c=function(){var a=1===n.nodeType?u.nodeIsHidden(n):0===n.width||0===n.height;return b?!1:a},e=function(){var b={};d(a).each(function(a,c){b[a]=q.round(c)});return b},f=function(a){return d.isNumeric(a)||d.isUndef(a)},h=function(){return q.round(a.width)*q.round(a.height)};(function(){var b;n!==w.parent&&(1!==n.nodeType?a=n:d.isDef(n.getBoundingClientRect)&&(b=u.getRect(n),d(a).mixin({x:d.useIfDef(b.x)||b.scrX,y:d.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&d.isNumeric(a.width)&&d.isNumeric(a.height)},toString:function(){var a=e();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:e,getRoundedGeometry:function(){var b={};d(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?q.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
g.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},u={findElementsWithSize:function(n){var a=[],b=function(c){1>u.getNodeArea(c)?d(c.children).each(function(a,c){b(c)}):a.push(c)};b(n);return a},nodeIsHidden:function(d){var a=this.getRect(d),b=0!==parseInt(y.getStyle(d,"width"))&&0===a.width,a=0===a.width||0===a.height;d="hidden"===y.getStyle(d,"visibility");return b||a||d},calcWinDims:function(){var d,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),d={scrX:q.round(a.scrX),scrY:q.round(a.scrY),
width:q.round(b.width),height:q.round(b.height)}}catch(c){k.getAggregator().trigger("error",g.ERROR_CODES.GET_WIN_DIMENSIONS),d={}}return d},windowSize:function(){var n={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,d.isDef(top.innerWidth))n.width=top.innerWidth,n.height=top.innerHeight;else if(d.isDef(b.clientWidth))n.width=b.clientWidth,n.height=b.clientHeight;else if(d.isDef(a.clientWidth))n.width=a.clientWidth,n.height=a.clientHeight;
else throw n.width=n.height=0,"";else d.isDef(w.outerWidth)&&(n.width=w.outerWidth,n.height=w.outerHeight);return n},browserWindowPosition:function(){var n=0,a=0;d.isDef(w.screenX)?(n=w.screenX,a=w.screenY):d.isDef(w.screenLeft)&&(n=w.screenLeft,a=w.screenTop);return{scrX:n,scrY:a}},getNodeArea:function(d){var a=-1;d&&(d=u.getRect(d),a=d.width*d.height);return a},getRect:function(n){var a={},b=u.browserWindowPosition();n=n.getBoundingClientRect();d.isUndef(n.x)&&(a.x=n.left,a.y=n.top);d.isUndef(n.width)&&
(a.width=n.right-n.left,a.height=n.bottom-n.top);d(a).mixin(n,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(n){n=n.document;return n.documentElement&&d.isDef(n.documentElement.clientWidth)&&n.documentElement||n.body},getPlaceholderSpan:function(){var n=M.createElement("span");d(n.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});n.innerHTML=".";return n},createImage:function(){var n=t.friendly&&q.getTop().Image;return d.isFunction(n)?
new n:new Image},createHiddenIframe:function(d){var a=q.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,d?{display:"none"}:b);return a},tagNameIs:function(d,a){return d.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(d,a){var b,c,e,f=1E4,h=1E4;b=y.nodeIsAbsolutelyPositioned(d);e=!u.tagNameIs(d,"OBJECT");if(null!==d.parentNode&&!b&&e&&!u.tagNameIs(a,"BODY")){e=d;do e=e.parentNode,b=!u.tagNameIs(e,
"OBJECT"),c="inline"!==y.getStyle(e,"display"),b&&c&&(b=u.getRect(e),f=b.width<f?b.width:f,h=b.height<h?b.height:h);while(e.parentNode!==M&&e!==a)}return{width:q.round(f),height:q.round(h)}},hasBackgroundImage:function(d){d=y.getStyle(d,"background-image");return""!==d&&"none"!==d},findChildWithLargestContent:function(n,a,b){var c=k.getAggregator().request("mobileApp").isMobileAppEnvironment(),e=this.hasBackgroundImage,f=function(a){for(var b=a;a.parentNode!==n&&"inline"!==y.getStyle(a.parentNode,
"display");){var e;if(!(e=!c)){e=a.parentNode;var f=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))f=!1;e=f}e&&(b=a.parentNode);a=a.parentNode}return b},h=null,r=function(a){var c,f,h=null,r=-1;if(a.length)for(c=0,f=a.length;c<f;c++){var g=a[c],k=u.getNodeArea(g),l;if(d.isFunction(b))l=b(g);else{l=g;var q=void 0;if(q=l.parentNode===n)if(q=void 0,q="DIV"===l.nodeName)if(q=void 0,q=!e(l))if(q=void 0,!(q="0"===y.getStyle(l,"opacity")||
"hidden"===y.getStyle(l,"visibility"))){var D=q=void 0;l=l.childNodes;for(q=0;q<l.length;q++)1===l[q].nodeType&&(D=!0);q=!D}l=!q}k>r&&l&&(h=g,r=k)}h&&(h.hasValidSizeForMobileApp=1<r);return h}(function(b){var c,e,f,d,h=[],r=a||"iframe img a object embed div".split(" ");c=0;for(e=r.length;c<e;c++){f=r[c].toLowerCase();var n=b.getElementsByTagName&&b.getElementsByTagName(f);if(n&&n.length)for(f=0,d=n.length;f<d;f++)h.push(n[f])}return h}(n));r&&(h=d.isFunction(b)?r:f(r),h.hasValidSizeForMobileApp=r.hasValidSizeForMobileApp);
return h},screenSize:function(){if(t.isDomless())return{width:0,height:0};var n={width:-1,height:-1};try{d.isDef(w.screen)&&(n={width:w.screen.width,height:w.screen.height})}catch(a){}return n},calcMonDims:function(){var n=d(u.screenSize()).mixin({scrX:0,scrY:0});d.isDef(screen.availLeft)&&(n={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return n},getOurIFrameInTop:function(){for(var d,a=q.getTop(),b=q.getWindow();b!=a;)d=b,b=d.parent;return d},
getOurNodeInTop:function(){var d;t.friendly&&(d=t.embedded?(d=u.getOurIFrameInTop())&&d.frameElement:l.contextNode);return d},getAncestorNodes:function(d){var a=[],b=d.ownerDocument&&d.ownerDocument.documentElement;if(b)for(;d.parentNode!==b;)a.push(d),d=d.parentNode;return a},getTagsNamed:function(d,a){var b,c=a||q.getDoc();try{b=c.getElementsByTagName(d)}catch(e){b=null}return b},containsScriptTagWithSrc:function(n){return!!d(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return d.isFunction(n)?
n(c):c===n})},contains:function(n,a){var b=!1;try{b=d.isDef(n)&&d.isFunction(n.contains)&&n.contains(a)}catch(c){}return b},querySelector:function(d,a){var b;try{b=d.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(d,a){return d.ownerDocument&&(d.ownerDocument.defaultView||d.ownerDocument.parentWindow)===a},setAttributeOf:function(n,a,b){n&&d.isFunction(n.setAttribute)&&n.setAttribute(a,b)},removeAttributeOf:function(n,a){n&&d.isFunction(n.removeAttribute)&&n.removeAttribute(a)},
crossQuerySelector:function(n,a){var b,c,e=[l.contextNode.parentNode,q.getDoc()];t.friendly&&e.push(q.getTop().document);if(a&&t.embedded)try{e.push(q.getWindow().frameElement.ownerDocument)}catch(f){}d(e).each(function(a,e){try{c=u.querySelector(e,n)}catch(f){}!b&&c&&(b=c)});return b},getNodeName:function(d){return d&&d.nodeName},isWindow:function(d){var a=!1;try{a=d&&"object"===typeof d&&"setInterval"in d}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=u.getTagsNamed("iframe",
g))&&(a=d(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var d=q.getWindow().frameElement;return d&&d.id},isViewportVisible:function(d,a){var b=d.innerWidth,c=d.innerHeight,e=b>a.width&&c>a.height;return b*c>a.width*a.height&&e},getTagName:function(d){return d.tagName.toLowerCase()},getAttribute:function(d,a){return d.getAttribute(a)},attributeMatches:function(d,a,b){d=d&&u.getAttribute(d,a);return b.test(d)},isImageTag:function(d){return d&&d.src&&u.tagNameIs(d,"img")},
getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");b&&g&&(a={width:d.getNum(b),height:d.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=u.getAttribute(g,"width");g=u.getAttribute(g,"height");b&&g&&(a={width:d.getNum(b),height:d.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var e,d,h;if(c(b))d=b;else if(h=b.children)for(e=0;e<h.length&&!(d=a(h[e],c));e++);return d},getFirstChildElement:function(a){return a&&a.children&&
a.children[0]},isClippable:function(a,b){var c=!0,e="fixed"===y.getStyle(a,"position"),d="hidden"!==y.getStyle(b,"overflow")&&!e;t.isSpecifiedAd()&&(e||d)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==q.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;
if(a&&"IFRAME"===u.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Sa=function(){var a={},b=function(b){d.isDef(a[b])?a[b]++:a[b]=1};k.getAggregator().on("error",function(a){a=d(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",e;for(e in a)a.hasOwnProperty(e)&&(b+=e);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Nb=function(){return{createInstance:function(a,b){return t.isDomless()?
new mc:new nc(a,b)}}},nc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=d(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(e){try{var f,h=c(e),r=h&&h.length&&h.join("|"),m=l.exchList;r&&(f=d(m).map(function(a,b){return 0<=r.indexOf(P.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},"ex",{type:g.IMPRESSION_EVENT}))}catch(p){a.add(g.ERROR_CODES.EXCHANGE_PARSING)}}}},
mc=function(){return{parse:function(a){}}},mb=function(){var a={},b=function(b){var c;d.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*q.random());return a[b]},c={es:"everySecond",sc:"usesca",rv:"rvCombo",ha:"usehaps"},e={gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&(e.intblk="integration");var f=function(){var b,f;b=d(c).mapToObj(function(b,c){var e={};e[b]=
d.fromBoolToNum(a[c]);return e});f=d(e).mapToObj(function(a,b){var c={};c[a]=d.fromBoolToNum(h(b));return c});f.gm=d.fromBoolToNum(t.usesGroupMCustomMetric());return d(b).mixin(f)},h=function(a){var b=l[a];return d(["integration"]).contains(a)?!!b:!0===b||"true"===b||d.isFunction(b)};d(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=d.isStr(a)?[a]:a;return d(a).map(function(a,b){if(d.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=
b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return d(f()).toParams()}}},Cb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},f=g.NA;c=b?c:e;d.isDef(a)&&a!==g.NA&&-1<a&&(f=a>=c.IN_VIEW?g.IN_VIEW:a<=c.OUT_OF_VIEW?g.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?g.PARTIAL_VIEW_PLUS:g.PARTIAL_VIEW_MINUS);return f},calcPercentInView:function(a,b,c,e){var f=0,h=a;a.hasValidDims()&&
!a.isHidden()&&(d([b,c,e]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),e=b.getRounded(),d=Math.max(c.scrX,e.scrX),f=Math.max(c.scrY,e.scrY),g=Math.min(c.scrX+c.width,e.scrX+e.width),c=Math.min(c.scrY+c.height,e.scrY+e.height),g=g-d,c=c-f;h=E({scrX:d,scrY:f,width:0<g?g:0,height:0<c?c:0})}}),f=q.round(h.area()/a.area()*100));return f}}},qb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));
return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*q.random()|0).toString(16);a=a.slice(0,32)}catch(e){k.getAggregator().trigger("error",g.ERROR_CODES.UID_GENERATION)}return a}());var e=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:e,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-
b;return d.toBase(a,62)},getFwId:function(){return e()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},jb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(g.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},oc=function(a,b,c,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var f=
a.getTimeInViewInSeconds(),h=a.getTimeInViewForRts();d.isDef(e)&&(k.getAggregator().trigger("addOutputItem",{output:e},"metricId",{type:b}),k.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));k.getAggregator().trigger("sendDt",b,f);if(c[h])c[h]()}}}},Hb=function(){return{createPingJobs:function(a,b,c,e){return d(b.getTimeThresholds()).map(function(b,d){return new oc(d,a,c,e)})}}},Ca=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-
l.birthdate||""}},e=function(){a||(a=k.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&d(a).each(function(a,c){c.qivThreshold&&b.push(c)})},f=function(a){var e=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var f=a.indexOf(d(a).findFirst(function(a,b){return-1!==e.type.toLowerCase().indexOf(b.toLowerCase())})),p=k.getAggregator().request("mScreenEvents").getCurrentEvent(),s=Math.floor(e.time/1E3);d(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(f);
-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(k.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:g.DT_CODES.CUSTOM}),k.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:g.DT_CODES.CUSTOM}),k.getAggregator().trigger("sendDt",g.DT_CODES.CUSTOM,s),b.rtsCallbacks&&d.isFunction(b.rtsCallbacks[g.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[g.RTS_KEY_FOR_VQ]())})};return{init:function(){e();k.getAggregator().on("videoQuartileEvent",
function(a){e();f(a)})}}},na=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+q.round(1E4*Math.random())};return{wrap:function(e,d,h,r){var m=c(),p,s,g;r=r||"ias_callback";e=""+e;RegExp(r).test(e)&&(p=RegExp("("+r+"=)(.[^&]*)").exec(e)[0],s=p.split("=")[1],g=P.stringToFn(s),
e=a(e,p));w[m]=function(a){d(a);h&&g&&g(a);w[m]=void 0};return e=b(e,r,m)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Kb=function(a,b,c){var e=function(a,b){var c=a,e;b&&(e=","+d(b).stringify(function(a,b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",e),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?
k.getAggregator().trigger("jsonp",c,a.callback,!0):k.getAggregator().trigger("send",c,function(){k.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:d.noop,e=a.enabled?!0:!1;k.getAggregator().trigger("jsonp",b,c,e)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:d.noop,e=a.enabled?!0:!1;k.getAggregator().trigger("jsonp",b,c,e)}},jsvid:{manualDefer:!0,impressionMethod:function(c){k.getAggregator().on("adImpression",
function(f,m){var p;try{p=e(c,m),a.enabled?k.getAggregator().trigger("jsonp",p,a.callback,!0):k.getAggregator().trigger("send",p,d.noop,!b.on("postMon"))}catch(s){__IntegralASDiagnosticCall("jsvidimp",s,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&k.getAggregator().trigger("jsonp",c(a),function(a){k.getAggregator().trigger("videoBlockResult",a)});k.getAggregator().on("adImpression",
function(c,f){var m;try{var g;if(g=b)g=c&&d.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;g&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=e(a,f);k.getAggregator().trigger("send",m,d.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[l.mode],e=!!b.isFW,d=function(a){var b;b=k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(e),s=d.indexOf("BEGIN__ADSAFE"),g=-1!==s,C=g?d.slice(s):"",a=g?d.slice(0,s):a(d);return{isFW:e,baseUrl:a,macroUrl:C,sendImpression:function(a){var e=function(){b.nodeType?k.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)e(a);else if(!b.manualDefer)k.getAggregator().on("adImpression",function(){e(a)})}}}},q={execAtEndOfThread:function(a){q.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?k.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return q.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return q.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){q.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){q.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return M},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},xb=function(){return{createInstance:function(){return t.isDomless()?
new pc:new qc}}},qc=function(){var a,b=!1,c=!1,e=k.getAggregator().request("features"),f=new fa,h=function(){var b;b=923747==l.anId||925955==l.anId;e.on("blur")||e.on("abcAudit")&&b?(b=q.getWindow(),b=t.friendly&&b.top.document&&(d.isFunction(b.top.document.hasFocus)||d(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(d.isDef(a.prop)?q.getDoc()[a.prop]:null)):b=d.isDef(a.prop)?q.getDoc()[a.prop]:null;return b},r=function(){var b=q.getWindow(),c=function(){f.run(h())};y.addEvent(b,"focus",
c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(q.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",e=q.getDoc();d.isUndef(e.hidden)?d(["moz","ms","webkit"]).each(function(f,h){var r=h+"Hidden";d.isDef(e[r])&&(a=r,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){f.push(a);c||(c=!0,r())},supportsVisAPI:function(){return b}}},pc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},
zb=function(){return{createInstance:function(a,b){return t.isDomless()?new rc:new sc(a,b)}}},sc=function(a,b){var c,e=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||d.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,e;for(e in a)a.hasOwnProperty(e)&&(c=a[e],d.isUndef(b[c])?b[c]=e:b[c]+=e);a={};for(e in b)b.hasOwnProperty(e)&&(c=b[e],a[c]=e);return a},h=function(){var h,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var e=
c.message,e=e.substring(e.lastIndexOf("<")+1,e.lastIndexOf(">")),f;if(f=d.isDef(e)){var h=b.getWindow();f=!1;d.isDef(h.navigator)&&d.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(f=!0):f=!0)))}f&&(a.g=e)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(s){}try{p.b=encodeURIComponent(parent.location.href)}catch(g){}if(t.embedded){try{p.c=
encodeURIComponent(parent.document.referrer)}catch(C){}try{p.e=encodeURIComponent(w.document.referrer)}catch(k){}}try{"jsi"!==l.mode&&(p.d=encodeURIComponent(w.location.href))}catch(q){}try{p.f=encodeURIComponent(l.jsref)}catch(K){}try{h=m(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(z){}p=e(p);p=f(p);h=[];for(var D in p)p.hasOwnProperty(D)&&h.push({key:D,val:p[D]});h.sort(function(a,
b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},rc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},wb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},Ab=function(){var a=[],b={},c={sl:"n"},e=0,f,h,r,m={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,
e=a.adDimensions;d.isDef(c)&&c.hasValidDims()&&(b.wc=c);d.isDef(e)&&e.hasValidDims()&&(b.ac=e,b.am=a.method,b.cc=a.containerDimensions);d({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,e){var f=a[e];d.isDef(f)&&(b[c]=f)});c=d(b).toParams();return""===c?"":","+c},s=function(a,c){var e=new fc(c);return b[a]=e},A=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},C=function(){d(c).each(function(b,c){m[c]+=
a.length?r-e:r});e=r},v=function(b){a.length&&C();d(b).each(function(a,b){var e=c[a];e!==b&&"n"===e&&(m[b]+=m.n);c[a]=b});a.length||C()},l=function(a){var c,e=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var f={sl:A(a.viewState)};r=t.getTagTime();v(f);f.t=r;c=d({toString:function(){d(b).each(function(a,b){b.fastForward()});return"{"+d(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+
"~"+b.state};a=""+("piv:["+d(this.piv).stringify(b)+"]");a+=",as:["+d(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);d(c).mixin(a);c.width=e.width;c.height=e.height;d.isUndef(c.percentInView)&&(c.percentInView=g.PIV_NA);d.isUndef(c.reason)&&(c.reason="");return h=c};(function(){s("piv",function(a){var b,c=a.percentInView,e=[1,25,30,50,75];100===c||0===c?b=c:(d(e).each(function(a,f){d.isUndef(b)&&c<f&&(b=e[a-1])}),d.isUndef(b)&&(b=e[e.length-1]));return b});s("as",function(a){var b=g.NA;
a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){r=t.getTagTime();C()},registerLocation:function(e){var h,p=!1;c.sl==A(e.viewState)&&a.length?(h=new l(e),a[a.length-1].details=h.details):(h=new l(e),a.push(h),f=e.viewState,p=!0);k.getAggregator().trigger("newScreenEvent",h);d(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c=
"";a.length&&(c=d({slTimes:"{"+d(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:s,getCurrentLoc:function(){return A(f)},getCurrentEvent:function(){return h}}},P={hashCode:function(a){var b=0,c,e,d;if(0===a.length)return b;c=0;for(d=a.length;c<d;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:
a-26)})},stringToFn:function(a){var b,c=w,e=a.split(".");for(a=0;a<e.length;a++)if(b=c,c=c[e[a]],d.isUndef(c)||a===e.length-1&&!d.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=q.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!d.isUndef(b));a++);return b},contains:function(a,b){return d.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return d.isFunction(a.trim)?a.trim():a.replace(" ","")}},tc=function(){var a=function(){var a=function(a){return a&&
a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var e;(e=b(c))||(c=u.getDimensionFromStyle(c),e=a(c));return e},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,e=/doubleclick.net\/pcs\/click?/,d=/_blank/,h=function(a){var e=u.tagNameIs(a,"div"),d=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return e&&d&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,
h)},getClickableImage:function(b){var c,h=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),s=u.attributeMatches(b,"href",e),g=u.attributeMatches(b,"target",d);h&&s&&g&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},uc=function(){var a=tc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};
return{getDFPValue:function(c){var e;if(e=a.getDFPGoogleDiv(c)){var d;c={type:0};if(e)if(c.type=1,d=a.getClickableImage(e))c.type=2,b(d,c);else if(e=a.getNodeMatchingMinimumSize(e))c.type=3,b(e,c);e=c}else if(e={type:0},c=a.getNodeMatchingMinimumSize(c))e.type=4,b(c,e);return e}}};k("viewport",[],function(){var a={width:4,height:4},b=function(c,e){if(c!==e&&!u.isViewportVisible(c,a))return c;if(c!==e&&t.isFriendlyToParent(c))return b(c.parent,e)},c=function(){var a=q.getWindow();return b(a,q.getWindow().top)},
e=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:e,isCurrentIframeTheHiddenFrame:function(){var b,c=q.getWindow();u.isViewportVisible(c,a)?e()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var vc=function(a){var b,c,e=function(e){b=a.setInterval(e,100);c=a.setTimeout(function(){d()},42E4)},d=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,m=a.innerHeight,p=!1;e(function(){var e;e=a.innerHeight;
(e=a.innerWidth!==c||e!==m)&&(p=!0);p&&!e&&(b(),d(),p=!1);c=a.innerWidth;m=a.innerHeight})}}};k("AS_Finder",["viewport"],function(a,b){var c,e=function(){try{var e=a.isHidden(),h,r={};e!==c&&(h=d.stringifyTriState(e),r.res1=h,r.ps=h,r.ts=q.now(),r.psfr=d.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",r));c=e}catch(m){k.getAggregator().trigger("error",g.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){e();var b=a.getWindowWithHiddenViewport();if(b)vc(b).onResize(e)}}}},
{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});k("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,a,d(b).toION())},e=function(a){2>b&&c("ha1",a);b++};(function(){var b,d;if(t.embedded)try{d=l.contextNode.parentNode,b=uc().getDFPValue(d),d={},d.df=b.type,b.size&&(d.sz=b.size.width+"."+b.size.height),b.tag&&(d.dom=b.tag),c("dfp",d),b.size&&a&&(a.events.on("newState",e),a.start())}catch(r){k.getAggregator().trigger("error",
g.ERROR_CODES.HIDDEN)}})()},{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Da=function(a,b,c,e){var f,h=0,r=0,m=!1,p=function(){f=Math.round(u.getNodeArea(a.body));if(f>=e){for(var p,s=f+20*f/100,v=a.querySelectorAll("iframe"),v=d.fromNodeListToArray(v);v.length&&(r<s||h<c);)p=v.shift(),p=Math.round(u.getNodeArea(p)),p>=e&&(h++,r+=p);r>=s&&h>=c&&(s={va:f,bia:r,bin:h},k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,b,d(s).toION()),m=!0)}},s=function(){var b;
b=new MutationObserver(function(a){m?b.disconnect():q.execAtEndOfThread(function(){d(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&u.isElement(c)&&u.tagNameIs(c,"IFRAME")&&d.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(q.execAtEndOfThread(p),!m&&d.isDef(w.MutationObserver)&&s())};k("BS_InApp",[],function(){var a=q.getWindow().document;k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Da(a,"bs1",3,100)},{tier:g.TIERS.VIEWABILITY,
applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});k("BS_Browser",[],function(){var a=q.getWindow().document,b=a.body?Math.round(u.getNodeArea(a.body)):null;!k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Da(a,"bs2",10,b)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var ub=function(){return{createInstance:function(a){return t.isDomless()?
new wc:new xc(a)}}},xc=function(a){var b,c,e,f=new wa,h=new ga,r=new yc(f),m=new zc,p=new Ac,s=new Bc(f,a),g=function(){d.isUndef(e)&&(e=new Cc(f));return e},C=function(){f.provide({frameCollection:function(){return r},adProxy:function(){return p},adTalkMessage:function(a){return new Dc(a,f)},adTalkMessageCollection:function(){return m},idMapModule:g,interFrameQuerySelector:function(a){return new Ec(a)}})};return{isApplicable:function(a){return d.isDef(w.JSON)&&d.isDef(w.postMessage)&&!a.isAvid()&&
!a.isOmidNative()},start:function(){C();h.traverse(r.addFrame);s.startListening();s.sendToKnownFrames();k.getAggregator().once("stopAdTalk",function(){s.stopListening()});k.getAggregator().provide("adTalkEventAggregator",f)},sendAdTalkCall:s.sendAdTalkCall,getFrameMap:function(){d.isUndef(b)&&(b=new Ea(f));return b},getFrameMapIncludingPeerCase:function(){d.isUndef(c)&&(c=new Ea(f,!0));return c},getIdMap:g}},wc=function(){return{isApplicable:function(){return!1},start:function(){}}},Dc=function(a,
b){var c,e=b.request("adProxy").myIdCard,d=b.request("frameCollection").getMe().getStringifiedPosition();c=k.getAggregator().request("features").on("swapids")?l.oid:l.asid;var h=a||{},r=l.asid,e=e.tagId,m=t.embedded,p=t.friendly,s=l.birthdate;c=c.split("-")[2];var A;t.friendly?A="["+g.AD_IDENTIFIER+"-"+l.asid+"]":(A=q.getWindow(),A=A.location&&A.location.href,A='iframe[src*="'+(A&&A.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:r,srcTagId:e,srcIsEmbedded:m,srcIsFriendly:p,srcBirthdate:s,
iasCommonId:c,nodeSelector:A,positionStr:d,version:"0.1"}},zc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return d(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},Fc=function(a,b,c,e){var f,h=a==w;f={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:e?e.srcIsEmbedded:void 0,inbox:e?[e]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return d(f.position).map(function(a,
b){return d.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||f.isMe||d.isDef(f.selfDescription)}};var r=function(a){var b=f.adProxies;a=a.adProxies;var c=[];b.length&&a.length?d(a).each(function(a,e){m(b,e)&&c.push(e)}):c=a;f.adProxies=b.concat(c)},m=function(a,b){return!d(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){d(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=
function(a,b){r(b);p(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},yc=function(a){var b=[],c={},e={noMe:!0};return{addFrame:function(d,h,r){var m=a.request("adProxy").getAll();d=new Fc(d,h,m,r);b.push(d);c[d.id]=d;d.isMe&&(e=d);return d},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return e}}},Ea=function(a,b){var c=function(a,c){var d=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=e(d,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();
p+=c.isMe?"*":"";p+=d.length?"."+d[0].tagId:"";m+=p}return m}},e=function(a,b){var c="";return c=a.length?c+d(a).stringify(function(a,c){return b+(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),e=d(b.list).stringify(c,"|");return d.toBase(b.getMe().unifiedId,62)+"+"+e}}},Cc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,e=a.request("interFrameQuerySelector",c),d=function(a){return a&&
a.substr(0,120)+".of"+a.length},h=function(a){var d=!1,d=!t.embedded,f="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),h;if(h=a.srcIsEmbedded){h="0.1"!==a.version;var A=a.nodeSelector&&-1===a.nodeSelector.indexOf(g.AD_IDENTIFIER);h=!(h?A:!a.srcIsFriendly)}d&&f&&!h?d=!!e.queryFor(a.nodeSelector):(d=a.positionStr,a=a.srcIsEmbedded&&t.embedded,d=0===b.indexOf(d)||0===d.indexOf(b),d=!(!a||!d));return d};return{output:function(){var c,e=b+"*";c=a.request("adTalkMessageCollection").map(function(a,
b){var c;a!==l.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(e);c=c.join("|");120<c.length&&(c=d(c),k.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Ec=function(a){var b=new ga,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),e=u.isWindow(a);c?b=a.contentWindow.document:e&&(b=a.document);return b},e=function(a,b){return u.querySelector(c(a),b)},f=function(c,f){var m,p,s;try{p=e(c,f),p||(m=b.getFrames(!0,a),d(m).findFirst(function(a,
b){return s=e(b,f)}))}catch(g){}return p||s||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));return c}}},Bc=function(a){var b=!1,c,e;e=k.getAggregator().request("features").on("swapids")?l.oid:l.asid;var f=function(b){var c=e.split("-")[2],d=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&d},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},
r=function(){var c=g.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);k.getAggregator().trigger("sendDt",c)},m=function(c,e,f){var h,m,l,t,z;try{h=a.request("frameCollection");m=a.request("adTalkMessageCollection");l=e.messageContent.self;m.add(e);var D=h.getMe();D.unifiedId>l.unifiedId&&(D.unifiedId=l.unifiedId);var u;u=q.now()-e.sentTime;e.transferDuration=u;m=t=h.getFrame(l.id);d.isUndef(m)||d.isUndef(m.selfDescription)?(t=t||h.addFrame(c.source,l.id.split("-"),e),t.addInformationFromSrc(e,
l),f()):t.addInformationFromSrc(e,l);(z=b&&a.request("idMapModule").isCandidateForMyIdMap(e))&&r()}catch(B){k.getAggregator().trigger("error",g.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:r,sendToKnownFrames:function(){(new ha).send(h)},startListening:function(){c=new xa;c.listen(f,m,h)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:m,createMessage:h}},Gc=function(){var a=k.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Ac=function(){var a,
b=[],c=function(a){a=new Gc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Bb=function(a){var b,c,e=!1,d=function(a){var d=!0;e&&(e=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,d=!1);return d};a.browserIs(g.BROWSERS.IE)&&y.addEvent(q.getDoc().documentElement,"click",d,!0);return{determineFramePosition:function(){a.browserIs(g.BROWSERS.IE)&&(e=!0,q.getDoc().documentElement.click());
return{scrX:b,scrY:c}}}},Hc=function(a,b){var c,e=g.NA,f=e,h=!1,r=!1,m=!1,p=!b,s=function(){var b=q.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==f&&q.execAtEndOfThread(function(){k.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:g.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&q.execAtEndOfThread(function(){e===
g.NA&&(e=0)});b.observe(A(a));p&&q.execAtEndOfThread(function(){t.isBustedIframe()||k.getAggregator().trigger("delayedViewabilityReady")});h=!0},A=function(b){if(!d.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");d(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[g.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return e},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,
document:a.document})}catch(c){r=!0}b&&null!==b.bodyElement?s():b&&b.document?y.whenReady(s,b.document):r?k.getAggregator().request("errors").add(g.ERROR_CODES.BUSTED_IFRAME_IN_IO):s()},isStarted:function(){return h},getAdNodeDimensions:function(){var a;c&&(a=E({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return e!==g.NA}}},sa=function(){var a=!1;(function(){y.whenReady(function(){k.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};
k("loopDelay",[],sa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:g.TIERS.VIEWABILITY});var Ic=function(){return{start:function(a){k.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(g.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Jc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Tb=function(a,b,c){var e=!1,f=function(){b.impressionIsIdentifiable()&&!e&&(e=!0,k.getAggregator().trigger("notify",
l._onMeasurable))};return{start:function(){var b;b=[Kc(),Lc(),Jc(),Ic()];(b=d(b).findFirst(function(b,e){return e.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&d.isDef(l._onMeasurable)}}},Lc=function(){return{start:function(a){cc(k.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(g.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},Kc=function(){return{start:function(a){k.getAggregator().once("adImpression",
function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Mc=function(a,b,c){var e=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||
a.addEventListener("ready",function(){k.getAggregator().trigger("adImpression")})}}},Nc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,e=a.getAvidAdSessionContext();a.isAvidAvailable()&&d.isDef(e)&&(c=e.mediaType||g.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.avidJsVersion,(c=d.isUndef(b))||(c=d.getNum(b.split(".")[0]),
b=d.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Oc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&k.getAggregator().trigger("adImpression")})}catch(b){}}}},
Pc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ca=function(a){var b=q.getWindow(),b=b&&b.omid3p,c=k.getAggregator().request("omidAdSessionContext"),e=!!(a&&a.isSupported&&a.isSupported()),f=!!(b&&d.isFunction(b.registerSessionObserver)&&
d.isFunction(b.addEventListener));return{accepts:function(){return e||f},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Qc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",
function(a){k.getAggregator().trigger("adImpression")})}}},Xa=function(a){return{resolve:function(){return d(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ua=function(a){var b=!1,c=!1,e=k.getAggregator().request("omidAdSessionContext"),f=k.getAggregator().request("omidAdSessionVerificationParameters"),h=q.getWindow(),r=(h=h&&h.omid3p)&&d.isFunction(h.registerSessionObserver)&&d.isFunction(h.addEventListener)?h:a,m=function(){return f&&f.IAS&&0<Object.keys(f.IAS).length?f.IAS:f},p=
function(){var a,d;b&&c&&(w.omidSupported=!0,a=e.app&&e.isDisplay&&!e.isWeb,(d=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&e.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(e.isLimitedSandbox=!1),a&&d&&(e.delayingViewabilityEvents=!0),k.getAggregator().trigger("tryToCallContinueMain",m()))},s=function(a){if("sessionStart"===a.type){e.adSessionType=a.data.context.adSessionType;e.environment=a.data.context.environment;e.omidNativeInfo=a.data.context.omidNativeInfo;e.omidJsInfo=a.data.context.omidJsInfo;
e.deviceInfo=a.data.context.deviceInfo;e.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(e.contentUrl=a.data.contentUrl);e.isNative="native"===e.adSessionType;e.isLimitedSandbox=t.embedded;e.isHtml="html"===a.data.context.adSessionType;e.isWeb="web"===a.data.context.environment;f=a.data.verificationParameters;a=e.isHtml&&e.isWeb;e.queuedOutputItems=[];for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",
code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],d,h,s,r=0;r<c.length;r++)d=c[r].root,h=c[r].field,s=c[r].code,"object"===
typeof e[d]&&"undefined"!==typeof e[d][h]&&e.queuedOutputItems.push({code:s,value:e[d][h]});e.queuedOutputItems.push({code:"oast",value:e.adSessionType});e.queuedOutputItems.push({code:"oenv",value:e.environment});e.hasOwnProperty("contentUrl")&&e.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(e.contentUrl||"")});a?k.getAggregator().trigger("tryToCallContinueMain",m()):(b=!0,p())}},g=function(a){e.mediaType=a.data.mediaType;e.queuedOutputItems.push({code:"omtp",value:e.mediaType});a.data.viewport&&
a.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});e.isNativeVideo=e.isNative&&"video"===a.data.mediaType;e.isDisplay="display"===a.data.mediaType;c=!0;p()};return{start:function(){r.registerSessionObserver(s,"IAS");r.addEventListener("impression",g)}}},Va=function(){return{accepts:function(){return!0}}},Aa=function(){var a=k.getAggregator().request("omidAdSessionContext"),b=k.getAggregator().request("omidVerificationClient"),c=new ca(b),e=a.isHtml&&
a.isWeb;return{accepts:function(){return c.accepts()&&e}}},Wa=function(){return{start:function(){k.getAggregator().trigger("tryToCallContinueMain","")}}},Rc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Sc=function(a,b){var c,e=function(a){var e,d,m;try{e=a.eventData.percentageInView,d=c&&
75<=e,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:d,isMeasurable:0===e||75<=e,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:e,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",e)}catch(d){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",
a)}}},Tc=function(a,b){var c=[],e=(new Date).getTime(),f=0,h=0,r=!1,m=new Ca,p={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var e=c[b],a=a+((0<b?",{":"{")+("t:"+e.t+",")+("tp:"+e.tp+",")+("sl:"+e.sl+",")+("ad_duration:"+e.ad_duration+",")+("volume:"+e.volume)+"}");return a+"]}"}},s=function(){r=!0},A=function(a){try{var p="",m=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),s="n",A=!1;switch(a.type){case "start":p=
"adVideoStart";e=m;h=a.data.duration;1E3<h&&(h/=1E3);f=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";f=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);A=!0;k.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}if(""!==p){var l=
k.getAggregator().request("mScreenEvents");l&&(s=l.getCurrentLoc());c.push({t:m-e,tp:p,sl:s,ad_duration:h,volume:f})}if("loaded"===a.type&&d.isDef(a.data)){var q=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==q?q+1:void 0,t=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===r?(d.isDef(p)&&k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vbp",p),k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vps",t)):(d.isDef(p)&&k.getAggregator().trigger("addOutputItem",
{output:p},"vbp",{type:g.IMPRESSION_EVENT}),k.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:g.IMPRESSION_EVENT}))}"start"===a.type&&k.getAggregator().trigger("omidAdDuration",{ad_duration:h});var u;"playerStateChange"===a.type?u="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?u="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(u="AdPaused");d.isDef(u)&&
b.trigger("videoPlaybackEvent",{eventType:u,eventData:null});A&&k.getAggregator().trigger("sendDt",g.DT_CODES.VIDEO_EVENTS)}catch(H){__IntegralASDiagnosticCall("omidvideo",H,w.bootstrapper)}};return{start:function(){k.getAggregator().on("impressionsent",s);k.getAggregator().provide({omidVideoEventsString:p});a.addEventListener("video",A);m.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Fa=function(a,b){var c=!1,e=function(a){var e=a.percentageInView;c=!0;a.viewState=
50<=e?g.IN_VIEW:g.OUT_OF_VIEW;a.outOfViewReason=50<=e?"":g.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(e);a.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Uc=function(a,
b,c){var e=d.isDef(a)?a.environment:void 0,f=d.isDef(a)?a.measurementStrategy:void 0,h=function(){return d.isDef(f)};d.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?e.isImmediate():!0},isMeasurable:function(){return h()?f.isMeasurable():!1},isMediaType:function(a){return h()?e.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&
e.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},sb=function(a,b,c){var e=k.getAggregator().request("mobileApp");return{create:function(){var d=[],d=d.concat(a.getOmidMeasurementStrategies()),d=d.concat(a.getAvidMeasurementStrategies()),d=d.concat(a.getMraidMeasurementStrategies());(d=(new ja(d)).resolve())||k.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var h=new Vc(d),r=new Ga(b,c,t,e);return!d&&r.accepts()?new Wc(t.isVideo(),
new G):new Uc(d,h,e.isMobileAppEnvironment())}}},tb=function(a){var b=k.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=k.getAggregator().request("omidVerificationClient"),b=new ca(a),d=new Aa,h=[];if(b.accepts()&&!d.accepts()){var r=new ea,m=new Xc,d=new Yc(a,new G),r=[{environment:r,measurementStrategy:new Zc(a,new G)},{environment:m,measurementStrategy:new Ha(new ka,q.getWindow(),new G)}],r=(r=(new ja(r)).resolve())?r.measurementStrategy:{},p=new Ia(new Ja(new V),
new V,m.accepts()),m=new Pc(a,b,l.mode),s=new Ka(d,r,new G,p),b=new Qc(a,b,l.mode),a=new La(d,r,new Tc(a,new G),new G,p);h.push({environment:m,measurementStrategy:s});h.push({environment:b,measurementStrategy:a})}return h},getAvidMeasurementStrategies:function(){var b=k.getAggregator().request("avidJsClient"),e=new Nc(b),d=[];if(e.accepts()){var h=new Mc(b,e,l.mode),r=new Oc(b,e,l.mode),m;m=new Rc(b,new G);if(e.supportsAdContainerGeometry()){var p=new $c,s=new ad,g=new Ha(new ka,q.getWindow(),new G),
C=new bd(b,new G),p=(p=(new ja([{environment:p,measurementStrategy:C},{environment:s,measurementStrategy:g}])).resolve())?p.measurementStrategy:{},s=new Ia(new Ja(new V),new V,s.accepts()),g=new cd(b,new G),b=new Ka(g,p,new G,s);m=new La(g,p,m,new G,s)}else s=new Sc(b,new G),b=new Fa(s,new G),m=new Ma(s,m,new G);d.push({environment:h,measurementStrategy:b});d.push({environment:r,measurementStrategy:m});a.setAvidAdSessionContext(e.getAvidAdSessionContext())}return d},getMraidMeasurementStrategies:function(){var a=
[],e=b.isSafeToInjectMraid(),e=new dd(q.getWindow(),e,b.isMobileAppEnvironment());if(e.accepts()){var d=k.getAggregator().request("context"),d=new ed(q.getWindow(),d),h=new fd(q.getWindow(),new G);d.accepts()?(e=new gd(q.getWindow(),new G),e=new Ma(h,e,new G),e={environment:d,measurementStrategy:e}):(d=new Fa(h,new G),e={environment:e,measurementStrategy:d});a.push(e)}return a}}},ja=function(a){return{resolve:function(){var b=d(a).findFirst(function(a,b){return b.environment.accepts()});if(d.isDef(b))return b}}},
Vc=function(a){var b=!1,c,e={winDimensions:E({scrX:0,scrY:0,width:0,height:0}),adDimensions:E({scrX:0,scrY:0,width:0,height:0}),containerDimensions:E({scrX:0,scrY:0,width:0,height:0}),method:g.NA,viewState:g.NA,percentInView:g.PIV_NA,reason:"",obstructed:g.NA,isHidden:g.NA,tabHidden:g.NA,posViewState:g.NA,adCompCount:1},f=function(a){return a?new E({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):E({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:f(a.windowDimensions),adDimensions:f(a.adDimensions),
containerDimensions:f(a.containerDimensions),method:a.detectionMethod||g.NA,viewState:a.viewState||g.NA,percentInView:d.isDef(a.percentageInView)?a.percentageInView:g.PIV_NA,reason:a.outOfViewReason||"",obstructed:d.stringifyTriState(a.isObstructed),isHidden:g.NA,tabHidden:g.NA,posViewState:a.viewState||g.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,
isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,k.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var f=e;if(d.isDef(c))if(a.environment.supportsAdContainerGeometry())f=c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||75<=c.percentInView)f=c;return f},start:function(){var b;d.isDef(a)&&d.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=
!0}}},Ma=function(a,b,c){var e=!1,f=!1,h=!1,r,m,p,s,A=function(){if(!d.isUndef(m)){var a=[],b,k;e?(f?(k=!1,b=100):(k=s,b=p),50>b&&a.push(g.OUT_OF_VIEW_REASONS.GEOM)):(k=!1,b=0,a.push(g.OUT_OF_VIEW_REASONS.VIDEO));h=!0;m.shouldDelegateToDomBasedViewability=k;m.percentageInView=b;m.viewState=50>b?g.OUT_OF_VIEW:g.IN_VIEW;m.outOfViewReason=a.join(".");r=m;c.trigger("measurementChanged",r)}},l=function(a){m=a;p=a.percentageInView;s=a.shouldDelegateToDomBasedViewability;A()},q=function(a){a=a.eventType;
"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?e=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(e=!1);A()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(l);a.start();b.addVideoPlaybackEventListener(q);b.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},
addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},ed=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,k.getAggregator().trigger("adImpression"))})}catch(e){}}}},gd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",
{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},cd=function(a,b){var c=function(a){var c=new E(a.eventData.viewport||{width:0,height:0}),d=new E(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),m=new E(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:d.getRoundedGeometry(),
computedAdContainer:m.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:g.DETECTION_METHODS.AVID,outOfViewReason:e(a.eventData.reasons)};b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},e=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,
e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:e}},Ia=function(a,b,c){function e(a,b,c){c=m(b,c);a=h(a,b,c);return a.width*a.height}var f=function(a,b){var c=Math.max(a.x,b.x),e=Math.max(a.y,b.y),d=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),d=d-c,f=f-e;
return{x:c,y:e,width:0<d?d:0,height:0<f?f:0}},h=function(a,b,c){a=f(b,a);return f(c,{x:0,y:0,width:a.width,height:a.height})},r=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(f,s){if(d.isDef(f)&&d.isDef(s)){var k=f.viewport,l=f.computedAdContainer,v=l.obstructions,t=v&&0<v.length,u=f.originalAdContainer,z=s.adGeometry,D=s.adFound,N=f.detectionMethod,B=
0,k={x:0,y:0,width:k.width,height:k.height},Q=r(u,z),H=f.outOfViewReason,w=0,J=0,y=t||!1,w=1>=z.width*z.height;c&&w&&(D=!1,H=H||"",D||-1!==H.indexOf(g.OUT_OF_VIEW_REASONS.GEOM)||(H=g.OUT_OF_VIEW_REASONS.GEOM+(""!==H?"."+H:"")));if(D&&0<f.percentageInView){w=e(k,l,Q);t?(B=m(l,Q),B=h(k,l,B),B=r(l,B),B=a.calculateObstructedArea(B,v)):B=0;J=B;B=Math.round((w-J)/(Q.width*Q.height)*100);t&&0===J&&(y=!1);for(var z=(new E(Q)).getRoundedGeometry(),D=y,x,t=0,J=b.getConfig(z).numberOfSlices,O=q.floor(z.height/
J)||1,v=[],w=D?a.getObstructionStatusBySlice(J):[],W,t=0;t<J;t++)x=z.y+O*t,t==J-1&&(O=z.y+z.height-x),x={x:z.x,y:x,width:z.width,height:O},W=e(k,l,x),x=1==W/(x.width*x.height),v.push(x);if(D)for(l=q.min(w.length,J),t=0;t<l;t++)v[t]=v[t]&&!w[t];l=v}else l=b.getConfig(z).defaultSliceArray;return{windowDimensions:k,containerDimensions:u,adDimensions:Q,percentageInView:B,viewState:50<=B?g.IN_VIEW:g.OUT_OF_VIEW,outOfViewReason:50<=B?"":H||g.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:N,isObstructed:y,sliceStatus:l}}}}},
$c=function(){return{accepts:function(){return t.isAvidNative()}}},bd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new E({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},ad=function(){return{accepts:function(){return t.isAvid()&&
!t.isAvidNative()}}},Ka=function(a,b,c,e){var f,h,r,m=function(){if(d.isDef(f)&&d.isDef(h)){var a=e.calculateGeometricMeasurement(f,h);r=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){f=a;m()},s=function(a){h=a;m()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(s);b.start()},
addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return r}}},Ja=function(a){var b=[],c;return{calculateObstructedArea:function(e,f){var h,g,m,p;g=f&&0<f.length;var s;if(g){s=Math.round(e.width);var k=Math.round(e.height);h=Array(s);for(m=0;m<s;m++)h[m]=Array(k);s={matrix:h,obscuredPixelCount:0,x:Math.round(e.x),y:Math.round(e.y),width:s,height:k}}else s={};h=s;k=s=0;if(g){for(;s<
f.length;s++){g=f[s];m=k=h;var l=g;h=Math.max(m.x,l.x);g=Math.max(m.y,l.y);p=Math.min(m.x+m.width,l.x+l.width);l=Math.min(m.y+m.height,l.y+l.height);m=p-h;p=l-g;m=0<m?m:0;p=0<p?p:0;h-=k.x;g-=k.y;m=h+m;p=g+p;for(h=Math.round(h);h<Math.round(m);h++)for(l=Math.round(g);l<Math.round(p);l++)void 0!==k.matrix[h]&&void 0===k.matrix[h][l]&&(k.matrix[h][l]=1,k.obscuredPixelCount+=1);h=k}k=h.obscuredPixelCount;s=h;if(d.isUndef(s.matrix)||0===s.matrix.length)c=[];else{g=0;p=!1;h=s.matrix[0].length;m=s.matrix.length;
p=a.getConfig({height:h}).numberOfSlices;for(var l=q.floor(h/p)||1,v=[],t=0;t<h;t++){p=!1;for(var u=0;u<m;u++)if(1===s.matrix[u][t]){p=!0;break}g++;p&&(t+=l-g,g=l);if(g==l||t===h-1)v.push(p),g=0}c=v}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Yc=function(a,b){var c=k.getAggregator().request("omidAdSessionContext"),e=null,f=!1,h=function(){var a=q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(f=c.delayingViewabilityEvents=!1,e&&(r(e),e=null)):
q.setTimeout(h,50)},r=function(a){var d=a.data.adView,r=!!(d.measuringElement&&d.containerGeometry&&d.onScreenContainerGeometry);if(c.delayingViewabilityEvents)e=a,f||(f=!0,h());else{r&&d.onScreenGeometry.obstructions&&0<d.onScreenGeometry.obstructions.length&&(d.onScreenContainerGeometry.obstructions=d.onScreenGeometry.obstructions);a=new E(a.data.viewport||{width:0,height:0});var k=new E(d[r?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),r=new E(d["onScreen"+(r?"Container":"")+"Geometry"]||
{x:0,y:0,width:0,height:0}),d={viewport:a.getRoundedGeometry(),originalAdContainer:k.getRoundedGeometry(),computedAdContainer:r.getRoundedGeometry(),percentageInView:d.percentageInView,detectionMethod:g.DETECTION_METHODS.OMID,outOfViewReason:m(d.reasons)};b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,d)}},m=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,
notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&r(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",r)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:m}},ea=function(){var a=k.getAggregator().request("omidAdSessionContext");
return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Zc=function(a,b){var c=k.getAggregator().request("omidAdSessionContext"),e=null,d=!1,h=function(){var a=q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(d=c.delayingViewabilityEvents=!1,e&&(r(e),e=null)):q.setTimeout(h,50)},r=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)e=a,d||(d=!0,h());else{var p=a.data.adView.geometry,s=a.data.adView.containerGeometry,r=!!p;a=a.data.adView.measuringElement&&
!!s;p=(new E({x:r&&a?p.x-s.x:0,y:r&&a?p.y-s.y:0,width:r?p.width:0,height:r?p.height:0})).getRoundedGeometry();b.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:p,adFound:r})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&r(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",r)},addAdGeometryMeasurementChangedListener:function(a){b.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Xc=function(){var a=k.getAggregator().request("omidAdSessionContext");
return{accepts:function(){return a&&!a.isNative}}},La=function(a,b,c,e,f){var h=!1,r=!1,m,p,s,l,q,v=function(){if(!(d.isUndef(p)||d.isUndef(s)||d.isUndef(l))){q=!0;var a=f.calculateGeometricMeasurement(p,s),b=h&&r,c=h&&50<=a.percentageInView,k={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,
isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(k.percentageInView=100);b||c?k.viewState=g.IN_VIEW:(k.viewState=g.OUT_OF_VIEW,k.outOfViewReason=a.outOfViewReason||g.OUT_OF_VIEW_REASONS.VIDEO);m=k;e.trigger("videoGeometryMeasurementChanged",m)}},t=function(a){p=a;v()},u=function(a){s=a;v()},z=function(a){l=a;a=a.eventType;"AdEnteredFullscreen"===a?r=!0:"AdExitedFullscreen"===a?r=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(h=!1);v()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(z);c.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){e.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},
Ha=function(a,b,c){var e,f=function(){var b=a.find(),f,m,p=!1;d.isDef(b)?(m=!0,f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height},b.hasOwnProperty("adWasClipped")&&(f.adWasClipped=!0)):(e&&(p=!0,f={x:0,y:0,width:0,height:0}),m=!1);if(b=m)b=f,b=!d.isDef(e)||!1!==d(b).compareTo(e);if(b||p)e=f,c.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:m})};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},dd=function(a,b,c){return{accepts:function(){var e=d(a.mraid).isObj();return c&&(e||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},fd=function(a,b){var c=!1,e=function(){var c,e,d;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};d=100===c?[!0]:[!1];e={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:g.DETECTION_METHODS.MRAID,
sliceStatus:d};b.trigger("mraidScreenLocationChanged",e)}catch(h){}},f=function(){var b=a.mraid;return d(b).isObj()&&d.isFunction(b.isViewable)},h=function(){var b=a.mraid;e();b.addEventListener("viewableChange",e)},r=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},m=function(){c||r()};return{start:function(){var b=!0;if(d.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;k.getAggregator().trigger("addOutputItem",{output:d.stringifyTriState(b)},
"mi",{type:"impression"});b?k.getAggregator().trigger("exec","mraid.js",m):r()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},eb=function(a,b,c){var e={},f=function(c){var e=d.noop;b.bootstrapOn("useViewabilityNotification")&&(e=function(){a.skipAsFraudulent()||k.getAggregator().trigger("notify",c)});return e};(function(){c&&d(c).map(function(a,b){e[a]=f(b)})})();return{getCallbacks:function(){return e}}},Za=function(){var a=new R({tiv:[1E4]}),b=d([g.IN_VIEW,
g.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:g.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var e=q.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===e},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Ya=function(a,b){var c,e,d;c=a.on("everySecond");var h=b.isVideo();e=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];d=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var r=[2E3,5E3,15E3];c?(c=new R({tiv:e}),e=e[0]):h?(c=new R({tiv:r}),e=r[0]):(c=new R({tiv:d}),e=d[0]);d={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};d[e]=l._onInViewMRC;return{timeInViewThresholds:c,type:g.DT_CODES.PING,rts:d,isInView:function(a){return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3,shouldIncludeSound:!1}},ab=function(a,b){var c;c=a.on("everySecond");var e=b.isVideo(),d=b.usesIASFullyInViewCustomMetric(),h=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,
9E3,1E4,11E3,12E3,13E3,14E3,15E3],r=[1E3,5E3,15E3],m=[2E3,5E3,15E3],p=function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:h}):e?new R({tiv:m}):new R({tiv:r});k.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:g.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return d},minUnit:1E3,shouldIncludeSound:!1}},$a=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),
type:g.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},cb=function(a,b){var c,e,f,h=q.getMaxNumber(),r=b.isVideo(),m=a.id;e=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&e;c=new R(a);e=a.qiv;(function(){f=
{};var a;d.isDef(l.rts)&&d.isDef(l.rts[m])&&(a=c&&d.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=d.isDef(a)?d.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():g.RTS_KEY_FOR_VQ,f[a]=l.rts[m])})();return{timeInViewThresholds:c,qivThreshold:e,type:g.DT_CODES.CUSTOM,rts:f,isInView:function(b){if(!b.adDimensions)return!1;var c,e,f,m=b.adDimensions.area(),k=1===b.tabHidden,l=q.max(b.fullPercentInView||0,b.percentInView);c=d(a.thresholds).findFirst(function(a,b){e=b.lb||0;f=b.ub||
h;if(m>=e&&m<=f)return!0});c=!k&&l>=c.piv;b.method==g.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);r&&(c=c&&b.isVideoPlaying,p&&(c=c&&b.isSoundOn));return c},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p}},bb=function(a,b,c){var e=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",g=d(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),p=c.on("groupmCM"),
s=function(a,b){var c,g,m,s,r;c=d(b.mediaTypes).contains(e);g=d(b.distributionChannels).contains(f);m=d.isDef(b.deviceGroups)?d(b.deviceGroups).contains(h):!0;s=P.contains(b.id,"fiv");r=P.contains(b.id,"groupmCM");s=!s;r&&(s=p);return s&&c&&g&&m};return{resolve:function(){var b=[],c;m&&g&&(c=d(a.customViewability).filter(s),d(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(d(a.tiv).isArray())d(a.tiv).each(function(a,c){b.push(new la(c))});else if("string"===typeof a.tiv){a=
a.tiv.split("|");var c=new hd;b.push(new id(c,parseInt(a[1].replace("%"))));b.push(new la(1E3*parseInt(a[0])))}else d.isDef(a.tiv)&&b.push(new la(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},hd=function(){var a=-1,b=function(b){0<a||(b=d.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};k.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},la=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},id=function(a,b){var c=0,e=!1,d=function(a){c=0;0<b&&0<a&&(c=q.ceil(b/100*a))};d(15);return{getTimeInViewInSeconds:function(){!e&&a.isVideoDurationResolved()&&(e=!0,d(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},hb=function(a,b,c){var e=function(e){a.isInView(e)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(e)}}},
gb=function(a,b,c,e){var f,h,g,m,p,s,l=function(a,b){return!b&&a},q=function(a,b,c,e){return e?!0:!b&&(a||e)&&c},v=function(a){var k=0,l=1===a.tabHidden,A=a.isVideoPlaying,v=a.isSoundOn,u=a.isVideoPlayingInFullscreen;d(a.sliceStatus).each(function(a,b){g(b,l,A,u)?f[a].mark():f[a].stop();m[a]=f[a].getTotalTime()});t("slcVt",m);e&&(d(a.sliceStatus).each(function(a,b){q(b,l,A,u)&&v?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),t("slcVtVol",p));s=e&&b&&b.shouldIncludeSound?p:m;a=d(s).findFirst(function(a,
b){k=Math.max(k,b);return 0>=b});d.isUndef(a)&&c.doEligibleJobs(k)},t=function(a,b){var c={};c[a]=b;k.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},u=function(a){!f&&a.sliceStatus&&(f=[],h=[],m=[],p=[],d(a.sliceStatus).each(function(a){f.push(new da(1));m.push(0);e&&(h.push(new da(1)),p.push(0))}))},z=function(a){d.isUndef(a.sliceStatus)||(f||u(a),v(a))};return{start:function(){g=e?q:l;a.addMeasurementChangedListener(z)}}},db=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},
Lb=function(a,b,c,e,d,h,r,m,p,s){var k=!1,l=t.isVideo(),v=h.request("mobileApp"),u=Z().applies(c,d),K=c.browserIs(g.BROWSERS.GECKO)||c.browserIs(g.BROWSERS.IE)&&d.on("rattie")||u,z=t.xDomainIframe&&!K,D=new ya(10),w=function(){d.on("viewabilityready")&&!k&&(e.send(g.DT_CODES.VIEWABILITY_READY),h.trigger("measurable"),k=!0)};h.on("delayedViewabilityReady",function(){B();w()});h.on("delayedViewabilityReadyCallOnly",w);var B=function(c){c=c||!1;try{D.start();var e,d;b.hasMeasurementStrategy()?d=v.isMobileAppEnvironment()&&
b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(d=m.collect(),v.isMobileAppEnvironment()?(d.viewState=g.NA,d.method=g.NA,d.percentInView=g.NA):z&&(d.viewState=g.NA,d.percentInView=g.PIV_NA),l&&!t.isAvid()&&s.setVideoSpecificScreenEventFields(d));e=p.registerLocation(d);c||a.trigger("measurementChanged",d);D.stop();var f=q.round(D.getTime()/D.getCount());r.addItem({output:f},"lt",{type:g.DT_CODES.UNLOAD});return e}catch(k){h.trigger("error",g.ERROR_CODES.CHECK_SCREEN_LOC)}};
return{checkScreenLoc:B,stringifyPingTimes:function(){return d.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":l?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,e=a&&c.browserIs(g.BROWSERS.WEBKIT),d=a&&c.browserIs(g.BROWSERS.MSEDGE),a=a&&u,e=!e&&!d&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():e},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",
b)}}};k("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,e){var f,h=jd(c),r=[new kd,new ld(h)],m=function(){return d(r).findFirst(function(a,d){return d.applies(e,b,c)?d:void 0})},p=function(a){"sessionFinish"===a.type&&k.getAggregator().trigger("adSessionComplete")},s=function(a){y.addEvent(w,a,function(){k.getAggregator().trigger("adSessionComplete")},!1)},A=function(){var a=new $(g.DT_CODES.VIDEO_EVENTS);k.getAggregator().trigger("sendDt",a.callType,a.enumerator,
function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};q.getWindow().postMessage(JSON.stringify(a),"*")})};k.getAggregator().once("startViewabilityLoop",function(){var b,c=k.getAggregator().request("mobileApp").isMobileAppEnvironment();k.getAggregator().request("ids").impressionIsIdentifiable()&&(f=gc(a.checkScreenLoc,h.getPollingFrequency()),(b=m())?b.start(f):f.start(!0),c?t.isOmid()?k.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):s("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
s("beforeunload"))});k.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||A();k.getAggregator().trigger("unload");f&&f.stop();k.getAggregator().trigger("endAdSession");k.getAggregator().trigger("stopAdTalk")})},{tier:g.TIERS.VIEWABILITY});var jd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},ld=function(a){var b,c,e,d,h,g=function(p){e&&!h&&1>p?(h=!0,q.setTimeout(function(){g(p)},
1E3)):(d=1>p,!c&&d?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!d&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){g(a.percentInView)};return{applies:function(a,b,c){var d=k.getAggregator().request("mobileApp");a=(new Ga(b,a,c,d)).accepts();b=b.on("viewabilityOptimization")&&!a;e=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);k.getAggregator().on("IOPivChange",g);k.getAggregator().on("newScreenEvent",m)}}},kd=function(){var a,b,c,
e=!1,d=function(h){if(c&&!e&&1>h)e=!0,q.setTimeout(function(){d(h)},1E3);else return 1>h?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,e){c=e.usesZeroPivCustomMetric();var d=Z();return b.on("viewabilityOptimization")&&d.applies(a,b,e)&&e.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);k.getAggregator().on("IOPivChange",d)}}},td=function(a,b,c,e,f,h){var r,m,p,s,A,C,v,F,K,z=u.getElementsWindow(b);u.getElementsDocument(b);k.getAggregator().provide("iframeCalculatorHelper",
md(z));var D=nd(b,e),N=g.AD_IDENTIFIER+"-"+l.asid,B=!1,Q=E({}),H=t.isDeviceTypeGroupMobile(),x=t.usesGroupMCustomMetricMobilePassThru(),J,aa=function(){if(!r)if(r=D.calcDims(b,e,p),c===g.DETECTION_METHODS.VIDEO&&t.embedded){var a=r,d=(new E(b)).getRounded();try{a.set("width",d.width),a.set("height",d.height)}catch(f){k.getAggregator().trigger("error",g.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===g.DETECTION_METHODS.AD_PLACEHOLDER&&r.treatAsPlaceholder();return r},G=function(){var b,e=t.xDomainIframe&&
B;b=H&&B&&p.isReady();b=e||b;e=D.getClippedDims&&(c===g.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=p.getPiv():d.isUndef(m)&&(b=!H&&(t.friendly||d.isDef(w.mozInnerScreenX))&&f.on("offscreen"),F=aa(),v=new E(u.calcWinDims()),C=new E(b?u.calcMonDims():{}),K=e?D.getClippedDims():Q,m=a.calcPercentInView(F,v,C,K));return m},O=function(){return a.calcInitialViewState(G())},W=function(){return b===w?!1:aa().isHidden()},I=function(a,b){return t.isVideo()?q.getDoc().body:a.document&&a.document.body?
a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=q.getWindow(),d=q.getDoc(),f=b===c,h=d.body,g=k.getAggregator(),m=new Z,r=g.request("browser"),l=g.request("features"),v=g.request("context"),u=!t.xDomainIframe,g=I(b,e),d=f&&h?d.body:b;J=t.friendlyIframe?c.frameElement:d;y.addEvent(d,"click",function(){k.getAggregator().trigger("adComponentClicked")});y.addEvent(d,"mouseover",function(){k.getAggregator().trigger("adComponentMousedOver")});m.applies(r,
l,v)?(p=Hc(b,u),p.start(),B=!0,x&&(c=new od(aa().getRounded()),m=new pd,g=new qd(g,m),s=new rd(c.getSlices(),g))):x&&(A=new sd(a))})();return{mark:function(){u.setAttributeOf(J,N,"")},cleanup:function(){u.removeAttributeOf(J,N)},isNode:function(a){return b===a},isHidden:W,isObstructed:function(){return!1},getDims:aa,getPercentInView:G,getLocationState:O,getOnPageViewability:function(){return W()?g.OUT_OF_VIEW:O()},getDetectionMethod:function(){return c},getContainerDims:function(){return D.allowsOptimization?
r:E(e)},refresh:function(){K=F=v=C=m=r=void 0;if(h){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==M&&!a;)a=c===e,c=c.parentNode;a||(e=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;s&&s.isReadyToMeasure()?a=s.getSliceStatus():t.friendly&&A&&d.isDef(F)&&(a=A.getSliceStatus(F,v,C,K));return a}}},ud=function(a,b){var c=[],e,f=d([]),h=b.on("rvCombo"),r=function(){return c[0]&&c[0].getDetectionMethod()===g.DETECTION_METHODS.AD_PLACEHOLDER},m=function(h,
p,m,s){var l=r()||0===c.length;h=td(a,h,p,m,b,s);r()&&(m=c.shift(),f=d(c),m.cleanup(),e=void 0);c.push(h);f=d(c);l&&h.mark();l&&p!==g.DETECTION_METHODS.AD_PLACEHOLDER&&k.getAggregator().trigger("primaryadfound",h)},p=function(){if(e)return e;var a,b=!1,c=0,d=0;f.each(function(e,f){var h;h=f.getDims();h.hasValidDims()&&(a=f.getPercentInView(),b=a!==g.NA,h=h.area(),c+=h,d+=a/100*h)});return e={totalArea:c,totalInView:d,hasMeasurement:b}},s=function(){var a;h&&(a=k.getAggregator().request("adRenderStatus"));
return h&&!a},l=function(){var a;a=p();a=a.hasMeasurement?q.round(a.totalInView/a.totalArea*100):g.PIV_NA;if(isNaN(a)||s())a=0;return a},u=function(){var c=b.bootstrapOn("mobOrTab"),c=p().totalArea>=g.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!c&&!t.isVideo();return a.calcInitialViewState(l(),c)},v=function(a){var b=-1;f.each(function(c,e){e.isNode(a)&&(b=c)});return b},F=function(a){return function(){return c[0]&&c[0][a]()}};k.getAggregator().on("adComponentAdded",function(a){d(a).each(function(a,b){-1===
v(b)&&m(b,g.DETECTION_METHODS.MUTATION)})});k.getAggregator().on("adComponentRemoved",function(a){d(a).each(function(a,b){var e=v(b);-1<e&&c.splice(e,1)})});return{getDims:F("getDims"),isObstructed:F("isObstructed"),getDetectionMethod:F("getDetectionMethod"),getContainerDims:F("getContainerDims"),getViewState:u,getPercentInView:l,isHidden:F("isHidden"),isUsingPlaceholder:r,hasAd:function(){return!!c.length},refresh:function(){e=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:m,getOutOfViewReasons:function(){var a,
b=[],d=c[0],f=g.OUT_OF_VIEW_REASONS;d&&(a=e||u(),s()?b.push(f.RENDER):a!==g.OUT_OF_VIEW&&a!==g.PARTIAL_VIEW_MINUS||b.push(f.GEOM),d.isHidden()&&b.push(f.HIDDEN),d.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:F("getSliceStatus")}},vd=function(a){var b=!1;if(!d.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){q.execAtEndOfThread(function(){b&&d(a).each(function(a,b){b.addedNodes.length&&
k.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&k.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),e=function(){b=!0;q.setTimeout(function(){b=!1},40)};k.getAggregator().on("adComponentClicked",e);k.getAggregator().on("adComponentMousedOver",e);y.whenReady(function(){try{c.observe(M.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(g.ERROR_CODES.AC_WATCHER)}},q.getDoc())}},Dd=function(a,b){var c=[wd(),xd()],e=[ka(),yd(),zd(),Ad(),
Bd(),Cd()],c=c.concat(e);return d(c).findFirst(function(c,e){return e.isApplicable(a,b)})},zd=function(){var a,b,c,e=function(a){a?a&&c&&(q.execAtEndOfThread(function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ia();var c=u.crossQuerySelector(ia().getCssSelector(),!0);a=c?c.parentNode:a;e(c);return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},U=function(a,b,c){var e;a=u.findChildWithLargestContent(a||l.contextNode.parentNode,b,c);1<u.getNodeArea(a)&&!a[g.IAS_DETECTOR]&&(e=a);return e},Bd=function(){return{detectionMethod:g.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return t.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Ed=function(){var a,b=q.getDoc().scripts,c=function(){a||(a=d(b).findFirst(function(a,b){return P.contains(b.src,
"servedby.flashtalking")}));return a},e=function(){var b,e=a||c(),d=/;(\d+);/;e&&e.src&&(b=e.src.match(d)[1]);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=e();try{a=d(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return u.crossQuerySelector(b,!0)})}catch(c){}return a}}},Fd=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(e){}return b.on("yieldmo")&&
c&&P.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Gd=function(){var a,b,c=q.getDoc(),e=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+e()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
isApplicable:function(a,b){var c=q.getWindow(),g=a.friendlyIframe&&q.getWindow().frameElement,g=g&&E(g).isOneByOne(),s=function(){var a=q.getDoc().scripts;return d(a).findFirst(function(a,b){return P.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!d(c.EBG.ads).isEmpty();return b.on("sizmek")&&s&&c&&g&&e()&&f()},getCssSelector:f}},ia=function(){var a,b=k.getAggregator().request("features");a||(a=[Gd(),Fd(),Ed()]);return d(a).findFirst(function(a,e){return e.isApplicable(t,
b)})},Ad=function(){var a,b=function(){q.execAtEndOfThread(function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:g.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,e=Ba().find();e&&e.celtra&&e.celtra.loaded&&(c=e.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},
Ba=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&P.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ka=function(){var a=k.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=u.findChildWithLargestContent(q.getDoc().body);return a&&a.hasValidSizeForMobileApp&&
!a[g.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},xd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(l._cl_adpath);b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},wd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,
isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(e){if(c=u.crossQuerySelector(e))a=u.getParent(c),1>u.getNodeArea(c)&&(a=c,c=u.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Cd=function(){return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:U,getAdContainer:function(){return l.contextNode.parentNode},
allowForAdContainerChange:!0}},yd=function(){return{detectionMethod:g.DETECTION_METHODS.VIDEO,find:k.getAggregator().request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},nd=function(a,b){var c,e;c=[Hd(),Id(),Jd()];e=d(c).findFirst(function(c,e){return e.isApplicable(a,b)});c=Kd();c.isApplicable(b)&&(c.setBaseStrategy(e),e=c);return e},Jd=function(){return{calcDims:function(a,b){var c,e,d=new E(a);u.isClippable(a,
b)&&(c=u.getClippedDimensions(a,b),e=d.getRounded(),d.set("height",c.height<e.height?c.height:e.height||1),d.set("width",c.width<e.width?c.width:e.width||1));return d},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&u.nodeIsInWindow(a,q.getTop());a=!u.elementIsEmbedded(a);return b||a}}},Id=function(){var a=k.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||
t.isBustedIframe())&&u.elementIsEmbedded(a)}}},Hd=function(){var a=k.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new E(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var e=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,q.getTop()),d=t.isCeltra()&&u.elementIsEmbedded(a);return e||d}}},Kd=function(){var a;return{calcDims:function(b,
c,e){e=d.isDef(e)?e.getAdNodeDimensions():void 0;a&&d.isUndef(e)&&(e=a.calcDims(b,c));return e},isApplicable:function(a){a=Z();var c=k.getAggregator(),e=c.request("browser"),d=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(e,d,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},md=function(a){var b,c,e,f=k.getAggregator().request("features"),h=k.getAggregator().request("browser");a=a||q.getWindow();var r=function(b,c){b=b||a;c=c||{top:0,left:0,
width:q.getMaxNumber(),height:q.getMaxNumber()};for(var e,d=b.parent.frames,f=!1,h=0,m=d.length;h<m;h++)if(d[h]==b){e=d[h];f=!0;break}if(f){e=u.getRect(e.frameElement);c.left+=e.left;c.top+=e.top;try{c.width=q.min(c.width,e.width),c.height=q.min(c.height,e.height)}catch(l){k.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}b!==q.getTop()&&r(b.parent,c)}return c},m=function(){var m,s={};try{var l,C,v,F,w,z,D=q.getMaxNumber(),y=q.getMaxNumber();t.friendly?(l=r(),v=l.left,F=l.top,D=l.width,
y=l.height,C=u.browserWindowPosition(),w=C.scrX+v,z=C.scrY+F):f.on("rattie")&&h.browserIs(g.BROWSERS.IE)?(e=e||k.getAggregator().request("ieXDomainViewability"),c=e.determineFramePosition(),w=c.scrX,z=c.scrY):d.isDef(a.mozInnerScreenX)&&(w=q.round(a.mozInnerScreenX),z=q.round(a.mozInnerScreenY));var s={scrX:w,scrY:z,iFrameClippingWidth:D,iFrameClippingHeight:y},B,x,H=b||u.getIeDimObj(a);b=H;d.isDef(a.innerWidth)?(B=a.innerWidth,x=a.innerHeight):H&&d.isDef(H.clientWidth)?(B=H.clientWidth,x=H.clientHeight,
0===B&&0<H.offsetWidth&&(B=H.offsetWidth),0===x&&0<H.offsetHeight&&(x=H.offsetHeight)):a.frameElement&&d.isDef(a.frameElement.clientWidth)&&(B=a.frameElement.clientWidth,x=a.frameElement.clientHeight);m=B;s.height=x;s.width=m}catch(ua){k.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}return s};return{calcDims:function(){return new E(m())},getClippedDims:function(){var a=m();return new E({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Fb=function(){return{createInstance:function(a,
b,c){return t.isDomless()?new Ld:new Md(a,b,c)}}},Md=function(a,b,c){var e,f=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,h=ud(b,c),k=function(){var a,b,f;e=e||Dd(t,c);a=e.find();!a&&e.usePlaceholder?m():a&&(a=d(a).isArray()?a:[a],b=e.getAdContainer(),f=e.allowForAdContainerChange,d(a).each(function(a,c){h.addAdComponent(c,d.resolve(e.detectionMethod),b,f)}))},m=function(){var a;h.hasAd()||(a=u.getPlaceholderSpan(),f.insertBefore(a,l.contextNode.nextSibling),h.addAdComponent(a,
g.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};vd(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?k():h.refresh();return h},getDetectionMethod:function(){}}},Ld=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},ob=function(a){var b,c=[],e=a||w,d=function(){return"stub"===g().mode};a=function(){d()&&(b=e.setInterval(function(){if("stub"!==g().mode){e.clearInterval(b);for(var a=0;a<c.length;a++)e.avid.addEventListener(c[a].type,c[a].functionToExecute)}},
10))};var h=function(){return void 0!==e.avid},g=function(){var a,b={};if(h())if(a=e.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:h,getAvidAdSessionContext:g,addEventListener:function(a,b){d()?c.push({type:a,functionToExecute:b}):e.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(d())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return e.avid.getHtmlVideoAvidAdSessionListener()}}},nb=function(a){var b=new Nd,c=new Od;(function(){var e="";try{if(a.bootstrapOn("mobOrTab")||t.isDomless())e=b.detect(),b.hasDetectedMobileApp()&&(c.detect(),k.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),k.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"}))}catch(d){k.getAggregator().trigger("error",g.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Pd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=q.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(e){}try{c.push(parent.location.href)}catch(f){}if(t.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(M.referrer)}catch(g){}}try{"jsi"!==l.mode&&c.push(w.location.href)}catch(m){}try{c.push(l.jsref)}catch(p){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!d(a).findFirst(function(a,e){var f=!1,h,g,m="mobfox"===e?c:[b];for(g=0;g<m.length;g++){h=m[g];var p="string"===typeof e?[e]:e;if(d(p).isArray()&&(p[0].substring(0,4),p))for(var k=0;k<p.length&&(f=-1<h.indexOf(p[k]),!1!==f);k++);}return f})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){var e;e=!1;var f=q.getWindow();d.isDef(f.navigator)&&d.isDef(f.navigator.userAgent)&&(e=(e=f.navigator.userAgent)&&-1!==e.indexOf(c));
return e})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!d(a).findFirst(function(a,c){var e=!1;return e=d.isDef(P.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){var b=!1;return b=d.isDef(a)&&-1!==a.indexOf(c)})})}}},Na=function(){var a=function(a,c){var e,d=Pd[a];d.detect(c)&&(e=d.STRINGIFIED_METHOD);return e};return{process:function(b){return d(b).map(a).join("")}}},
Qd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Nd=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,d=Na().process(b.detectionRules);d&&(c=d+"_"+b.STRINGIFIED_APPDET);
return c};return{detect:function(){l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length?a="s_serv":(a=d(Qd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Od=function(){var a=[],b=[],c=function(b,c){var d,g=Na().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),d=c);return d};return{detect:function(){b=d(Rd).map(c);0<b.length&&k.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},
"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==b.length&&d.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Rd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],
scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,
detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",
detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],od=function(a){var b=[],c=function(a,b,c){a*=c;return new X(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new X(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var e=a.height/10,d=0;10>d;d++)b.push({geometry:c(d,
a.width,e),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},V=function(){var a=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],e;return{getConfig:function(d){if(e)return e;d.height<a&&(a=1,b=[100]);for(d=0;d<a;d++)c.push(!1);return e={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Sd=function(){var a,b,c=0,e=-1,f=0,h=k.getAggregator().request("browser"),g=function(){var a,b;a=k.getAggregator().request("pageUrls").getDetectedURLs();
a=d(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return d.isDef(a)};b=q.setInterval(function(){var a=q.now();e=a-f;f=a;c++;10<=c&&b&&q.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var d;c=c.getRounded().height;var f=u.calcMonDims().height,k=h.getUserAgent(),k=k&&null!==k.match(/(FBAN)/)?1:0,l=h.getUserAgent(),l=l&&null!==l.match(/(iPad)/)?
1:0,v=g()?1:0,t=h.getUserAgent(),t=t&&null!==t.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;d=q.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*k-0.874412*l+0.646972*v+0.28118*t+2.987259*(1E3<e?1:0)-2.463292);d/=1+d;a={mbah:c,mbsh:f,mbfb:k,mbip:l,mbhs:v,mbbr:t,mblr:e,mbp:d};b&&q.clearInterval(b);return 0.15<d},getDebugState:function(){return a}}},Wc=function(a,b,c){var e,f,h,r,m,p=[],s=l.contextNode.parentNode,A=0,u=0,v=!1,w=!1,x=new Sd,z=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},D=function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")},
N=function(a){y.whenReady(function(){f=new Td(a,q.getDoc().body)})},B=function(){f.removePixels()},Q=function(){var a=x.getDebugState(),b=z();d.isUndef(a)&&(a={});a.mbm=d.fromBoolToNum(w);a.mbrd=d.fromBoolToNum(v);a.mbtg=d.isDef(s.tagName)?s.tagName:"na";a.mbaf=d.isDef(h)?h:"na";a.mbad=d.isDef(e)?e.getRounded().width+"_"+e.getRounded().height:"na";a.piv=d.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{k.getAggregator().trigger("addOutputItem",{output:a},b),k.getAggregator().trigger("addOutputItem",{output:-101},
"pingTime",b),k.getAggregator().trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var l;l=d.isDef(e);if(c||!b.adDimensions)return b;l||(h=b.method,e=b.adDimensions,N(e));if(d.isUndef(f)||!f.isReadyToMeasure())l=!1;d.isUndef(r)&&l&&(r=x.isLikelyToProduceFalsePositive(e));if(w=!r&&l){var s;l=f.getPercentInView();var B=z(),O=1===b.tabHidden;u=q.now()-A;s=0<A?900>u:!0;A=q.now();0===b.adDimensions.area()&&(l=0);s||(l=0);var y=l;p.push({tm:t.getTagTime(),piv:y});3<p.length&&
p.shift();0===l&&0<B&&(s&&(s=p.length-1,y=!0,2<=p.length&&-1<s&&(y=0===p[s].piv&&0===p[s-1].piv),s=!y),s&&(l=B));a?(d.isUndef(m)&&(m=k.getAggregator().request("video")),m.setVideoSpecificScreenEventFields(b),l=b.isVideoPlayingInFullscreen?!0:!O&&50<=l&&b.isVideoPlaying):l=!O&&50<=l;b.viewState=l?g.IN_VIEW:g.OUT_OF_VIEW;b.percentInView=z();B=[];O=d(b.reason);s=g.OUT_OF_VIEW_REASONS;l||B.push(s.GEOM);O.contains(s.HIDDEN)&&B.push(s.HIDDEN);O.contains(s.OBSTRUCTION)&&B.push(s.OBSTRUCTION);b.reason=B;
b.sliceStatus=f.getSliceStatus();v||(v=!0,q.execAtEndOfThread(D))}else b.viewState=g.NA,b.percentInView=-1;return b},start:function(){k.getAggregator().on("endAdSession",B);c&&q.setTimeout(Q,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Ga=function(a,b,c,d){return{accepts:function(){var f=c.xDomainIframe,h=a.bootstrapOn("mobOrTab"),k=a.on("ios"),m=b.browserIs(g.BROWSERS.WEBKIT),
p=9<=b.getIOSVersion(),l=d.isMobileAppEnvironment();return f&&h&&k&&m&&p&&!l},isImmediate:function(){return!1},start:function(){}}},Ud=function(a,b,c,e,f,h,k){var m,p=l.birthdate+""+q.round(1E6*q.random()),s=101,t,u,v,w=!1,x=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,h=(new Date).getTime(),g=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();
a.requestAnimationFrame(g)};a.requestAnimationFrame(g);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-h}}catch(m){b.body.setAttribute("data-err",m.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},z=function(a,b){v||(s=a,v=b)},D=function(){var a,b,c;if(v)return!1;if(u)return!0;try{if(t.contentWindow&&t.contentWindow.document&&
t.contentWindow.document.body){c=t.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&z(104);(b=c.isReady?c.isReady():!1)&&(u=c.isInView?c.isInView:void 0)&&z(105)}}catch(e){z(106,e)}return d.isDef(u)},y=function(a,b,c){var h=M.createElement("iframe");h.id=p;d(h.style).mixin({position:"absolute",width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var m=h.style;h[g.IAS_DETECTOR]=
"true";m.left=b;m.top=c;a.appendChild(h);t=h;z(102);a=t;try{var k=a.contentWindow,l=x();k.document.open();a.contentWindow.document.write(l);k.document.close()}catch(s){z(103,s)}return h}(a,b,c);return{isInView:function(){var a,b,c=!1;q.now();D()&&(a=u(!0),c=a.isInView,w=!1,m&&(b=20*m.rate+m.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,w=!0)),z(107),m=a);return c},isNotReadyToReport:function(){return!D()},createdElement:t,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return s},
getError:function(){return v},isReadingInvalid:function(){return w},getRate:function(){return t.contentWindow&&t.contentWindow.document&&t.contentWindow.document.body&&t.contentWindow.document.body.getRate?t.contentWindow.document.body.getRate():-1},percentInView:h}},Td=function(a,b,c){var e,f=a.getRounded(),h=[],g=!1;a=V().getConfig(f);var m=a.percentInViewSliceArray,p=1==a.numberOfSlices,k={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},l=function(){var a;if(!g)for(g=!0,a=0;a<h.length;a++)if(h[a].isNotReadyToReport()){g=
!1;break}return g},u=function(a){var b=[],c=0;q.floor(a.height/m.length);var e=q.floor(a.width/2-1);d(m).each(function(d,f){c=q.floor(a.height*f);c===a.height&&(c-=2);b.push({y:q.floor(c)+"px",x:q.floor(e)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},v=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),d(a).map(function(a,b){b.percentInView=100-b.percentInView}));
d(a).findFirst(function(a,b){b.isInView&&(c=q.max(c,b.percentInView));return!b.isInView});return c},y=function(){var a,b,c,e=[];k.mbs=[];d(h).each(function(b,c){a=c.isInView();k.mbs.push(a);e.push({isInView:a,percentInView:c.percentInView})});b=w(e,!1);c=w(e,!0);return q.max(b,c)};(function(){e=p?v(f):u(f);var a=e.get();d(a).each(function(a,d){var e=new Ud(b,d.x,d.y,d.width,d.height,d.percentInView,c);h.push(e)})})();return{getPercentInView:function(){var a=l(),b=y();k.mbrd=a?1:0;b!=k.mbp&&k.mbivs.push([t.getTagTime(),
b]);k.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();d(h).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){k.mbm=1;h&&0<h.length&&(k.mbpr=[],k.mbir=[],d(h).each(function(a,b){k.mbpr.push(b.getRate());k.mbir.push(b.isReadingInvalid()?1:0)}));return k},isReadyToMeasure:l,getSliceStatus:function(){var a;h&&0<h.length&&(a=[],d(h).each(function(b,c){a.push(c.isInView())}));return a}}},rd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,
mbivs:[]},e=function(a,b){var c=[],e=a.geometry.value();d(b).each(function(b,d){if(a.geometry.doesIntersect(d)){var f=d.value(),h=Math.max(e.leftX,f.leftX),g=Math.min(e.rightX,f.rightX),m=Math.max(e.topY,f.topY),f=Math.min(e.bottomY,f.bottomY);c.push(new X(h,g,m,f))}});return c},f=function(a,b){var c=0,f=e(a,b),h;d(f).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];d(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};
b.addListener(function(b){d(a).each(function(a,c){c.isInView=f(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];d(a).each(function(a,b){c.mbpr.push(g.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];d(a).each(function(a,c){b.push(c.isInView)});
return b}}},sd=function(a){var b=V();return{getSliceStatus:function(c,d,f,h){var g,m=[];g=c.getRounded();c=g.height;var k=g.scrY,l=new E({scrX:g.scrX,width:g.width}),t=b.getConfig(g).numberOfSlices;l.set("height",q.floor(c/t));for(var u=0;u<t;u++)l.set("scrY",q.ceil(k+c/t*u)),g=100===a.calcPercentInView(l,d,f,h),m.push(g);return m}}},X=function(a,b,c,d){var f=Math.ceil(a),h=Math.ceil(b),g=Math.ceil(c),m=Math.ceil(d),k=h-f,l=m-g,q=k*l,t=function(){return{leftX:f,rightX:h,topY:g,bottomY:m,width:k,height:l,
area:q}};return{value:t,doesIntersect:function(a){var b=t();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},pd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},qd=function(a,b){var c,e=[],f=[],h=function(){d(e).each(function(a,b){b(f)})},g=function(){var a=[];d(f).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-
b})};(function(){c=b.createInstance(function(b){var d=b.pop(),e=d.boundingClientRect;b=e.width;var k=d.intersectionRatio,d=d.intersectionRect,l=d.left-e.left,e=d.top-e.top,e=new X(l,l+d.width,e,e+d.height);f.push(e);e=g();f=[];for(d=0;e.length>d&&e.length!==d+1;d++)f.push(new X(0,b,e[d],e[d+1]));h();1===k&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){e.push(a)}}},Vd=function(){return{listenForResult:function(){k.getAggregator().on("videoBlockResult",
function(a){var b=k.getAggregator().request("adNode"),c=!1,e="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&d.isDef(b.blockAd))b.blockAd(c);else if(b&&d.isDef(b[e]))b[e](c)})}}},Wd=function(a,b){var c,e,f,h,g;f=k.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=d({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);g=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=d(a).mapToObj(c));return b}(a);e={t:a.time-l.birthdate,tp:f,sl:b};d(e).mixin(h);d(e).mixin(g);return c=d({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},indicatesFullscreen:function(){var a=q.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===f&&
"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(f)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(f)},getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){e.sl=a;c.sl=a},trigger:function(){"adImpression"===f?k.getAggregator().persistentTrigger(f,h,g):k.getAggregator().trigger(f,h,g)},toString:function(){return"{"+d(e).toParams()+
"}"}}).mixin(e)},Xd=function(){var a=[];return{registerEvent:function(b,c,d){b=new Wd(b,c,d);a.push(b);return b},toString:function(){return"{"+d({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Yd=function(){var a,b,c,e=function(e){c=d.isDef(e)?0===e:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&k.getAggregator().trigger("sendDt",g.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;e()},l=
function(a){a=(new Oa).getVolumeFromContext(a);e(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){k.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:l,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",function(a){var c=k.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Zd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+
b.slice(1);b in a&&(c=a[b]);return c}}},Oa=function(){return{getVolumeFromContext:function(a){var b,c=-1;d.isDef(a)&&(d.isDef(a.volume)?c=a.volume:d.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},ib=function(a,b,c){var e="IASid"+a,f="getIasVidBridgeVersion"+a,h,r,m,p=[],s=g.OUT_OF_VIEW,u=!1,w=!1,v=!1,x=!0,K=new Xd,z=Yd(),D=new Vd,E=new Oa,B=new Ca,G=function(b){var d;u=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=K.registerEvent(e,c.getCurrentLoc()),
d.indicatesPlaying()?(w=!0,s=v?g.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,s=g.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,s=w?g.IN_VIEW:g.OUT_OF_VIEW):d.indicatesNormalSize()&&(v=!1,s=w?!1:g.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?x=!0:0===b&&(x=!1));p.push(d);m&&L();return d},H=function(b){var c,h,g=na().wrapToGlobal(G),m=function(a){d.isStr(a)&&(k.getAggregator().provide("vc",function(){return a}),k.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[f]||
b.getIasVidBridgeVersion,c=d.isFunction(h)&&"2"===h.call(b)?unescape(b[e].call(b,a,g)):unescape(b[e].call(b,a)),u=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},I=function(){var c=function(a){return d(d(a).toArray()).findFirst(function(a,b){return d.isFunction(b[e])})};h||(d(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=q.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",
{},l));return h},J=function(){var a=I();a&&!u&&H(a);return a},M=function(a){a=E.getVolumeFromContext(a);x=d.isDef(a)?0<a:!1},L=function(){B.init();d(p).each(function(a,b){b&&(d.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&k.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&k.getAggregator().trigger("sendDt",g.DT_CODES.VIDEO_EVENTS),k.getAggregator().trigger("videoQuartileEvent",b)))});p=[];m=!0};(function(){y.addEvent(q.getWindow(),
"message",function(a){G(a)});k.getAggregator().on({volumeChanged:M});k.getAggregator().provide({videoEventsString:K,videoVersion:function(){var a,b=J();try{a=b.getVersion()}catch(c){a=-1,k.getAggregator().trigger("error",g.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return r=r||new Zd},adNode:J});J();D.listenForResult();z.isApplicable(t)&&z.start(c)})();return{findAdNode:J,getViewStateOverride:function(){return s},isHandshakeComplete:function(){return u},triggerInitializationEvents:L,
setVideoSpecificScreenEventFields:function(a){var b=a.viewState===g.NA;a.isVideoPlaying=!0;a.isSoundOn=x;a.isVideoPlayingInFullscreen=!1;if(s){if(s===g.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=g.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:s;a.isVideoPlaying=s===g.IN_VIEW}v&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},$d=function(){return new ba(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},
Sb=function(){var a,b,c={},e=0,f=function(c){if(c||a)e+=5,b.onTick(e,function(){a?f():k.getAggregator().trigger("sendDt",g.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new za;e=0;f(!0);b.start()},l=function(e,f,g,k){e=c[e];k?(d.isDef(e[f])||(e[f]=[]),e[f].push(g)):e[f]=g;b&&b.isActive()||h();a=!0},m=function(c,d,e){k.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){d(c).each(function(e,f){var h=c[e],g={type:b,oneTime:!0,minDt:!0,asION:!0};d(h).isEmpty()||
(k.getAggregator().trigger("addOutputItem",{output:h},e,g),c[e]={});a=!1})};return{start:function(){k.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});k.getAggregator().on("addThrottledProp",l);k.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){d(a).each(function(a,b){c[b]={}})}}},Xb=function(){var a={},b=function(b){a[b]||(a[b]=new ya(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();k.getAggregator().trigger("addThrottledProp",
"im",a,c.getTime())};return{start:function(){k.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},ae=function(){return new ba(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Db=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(d(a).each(function(a,c){b[c.getType()]=c}),k.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&k.getAggregator().trigger("addThrottledProp",
g.DT_SLOT.IM,"pci",c.toString())}catch(d){}}));k.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},ba=function(a,b){var c=0,e=[],f=function(){e.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};f();d(e).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){e.push(a)},toString:function(){return d(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return e.length===
b}}},Eb=function(){function a(){}a.build=function(){var a=[];a.push(new ba(g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=k.getAggregator().request("vc");var d={jv3:Pa,av3:Pa,jvw:ae,avw:$d};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Pa=function(){return new ba(g.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){k.getAggregator().trigger("measureTime",
T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(w,"load",function(){k.getAggregator().trigger("measureTime",T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new za;a.onTick({4:function(){k.getAggregator().trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){k.getAggregator().trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});a.start()}},L={isFrameworkAvailable:function(a,b){var c,d,f=q.getTop(),h=q.getWindow();try{c=f[a]}catch(g){for(;!d;){try{h.frames[b]&&(d=frame)}catch(k){}if(h===
f)break;h=h.parent}}return c||d},getMessageHandler:function(a,b){var c=L.getCallId(),d=function(f){try{f&&f.data&&f.data[a]&&f.data[a].callId===c&&f.data[a].returnValue&&(b(f.data[a].returnValue),y.removeEvent(q.getWindow(),"message",d))}catch(h){k.getAggregator().trigger("error",g.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,a,b)}};k("CCPAConsentDetector",[],function(){function a(a){a&&
L.send(b,d(a).toION())}var b="ccd";(function(){var b=L.isFrameworkAvailable("__uspapi","__uspapiLocator");L.send("cca",!!b);if(b){var e,f;d.isFunction(b)?b("getUSPData",1,a):(e={__uspapiCall:{command:"getUSPData",version:1,callId:L.getCallId()}},f=L.getMessageHandler("__uspapiReturn",a),y.addEvent(q.getWindow(),"message",f),b.postMessage(e,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("GDPRConsentDetector",[],function(){function a(a){var f=
d.isDef(a)&&d.isDef(a.vendorConsents)&&d.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:d.stringifyTriState(a.gdprApplies),cnst:d.stringifyTriState(f),glbl:d.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};L.send(c,d(a).toION())}var b=278,c="gcd";(function(){var c=L.isFrameworkAvailable("__cmp","__cmpLocator");L.send("gca",!!c);if(c){var f,h;d.isFunction(c)?c("getVendorConsents",[b],a):(f={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:L.getCallId()}},
h=L.getMessageHandler("__cmpReturn",a),y.addEvent(q.getWindow(),"message",h),c.postMessage(f,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("GDPRV2ConsentDetector",[],function(){function a(a){var f=d.isDef(a)&&d.isDef(a.vendor)&&d.isDef(a.vendor.consents)&&d.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:d.stringifyTriState(a.gdprApplies),cnst:d.stringifyTriState(f)};L.send(c,d(a).toION())}var b=278,c="gcd2";(function(){var c=
L.isFrameworkAvailable("__tcfapi","__tcfapiLocator");L.send("gca2",!!c);if(c){var f,h;d.isFunction(c)?c("getTCData",2,a):(f={__tcfapiCall:{command:"getTCData",parameter:[b],callId:L.getCallId(),version:2}},h=L.getMessageHandler("__tcfapiReturn",a),y.addEvent(q.getWindow(),"message",h),c.postMessage(f,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("postMessageDetector",[],function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===
b&&(a=!0)};(function(){var e=q.getWindow();y.addEvent(e,"message",c);e.postMessage(b,"*");q.execAtEndOfThread(function(){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"pom",d.stringifyTriState(a));y.removeEvent(e,"message",c)})})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});k("safeFrameDetector",[],function(){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"sf",d.stringifyTriState(t.isSafeFrame()))},{tier:g.TIERS.ENVIRONMENT,
applies:function(a,b,c){return a.on("sfdetect")}});var Qb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,e=function(a){d(a).each(function(a,b){k.getAggregator().trigger("notify",b)})},f=function(){var d;d=new S(c+"://"+b,!0);d.setParam("asid",a);d=d.toString();k.getAggregator().trigger("jsonp",d,e,!0);k.getAggregator().trigger("updateDtCount")};return{start:function(){k.getAggregator().on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol",
"cookieBaseURL","asid"])}}},Rb=function(a,b,c,d,f,h,r){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var s,q=d.baseUrl,u,v,w=h.getDocumentMode();"number"===typeof w?(v=2E3,8===w?v=4E3:8<w&&(v=8E3)):v=m(l.sp_imp_maxLength,2E3);u=v;if(t.integratedBlockingApplies(q)){v=q;var x=k.getAggregator().request("mobileApp"),y=x&&x.isMobileAppEnvironment&&x.isMobileAppEnvironment(),D=l.contextNode.getAttribute("data-ias-container"),E=l.contextNode.getAttribute("data-ias-callback"),
x=v+"adContainerId="+D+"&cbFunctionName="+E,x=y?x.replace("monitoring","blocking"):x.replace("skeleton.js",l.integration+".js"),B=l.protocol+":"+l.staticServer+l.integration+"a.js",G=l.protocol+":"+l.staticServer+l.integration+".js",q=x+"&true_pb="+encodeURIComponent(l.passback)+(y?"&redirectUrl="+encodeURIComponent(G):"")+(y?"&passback=":"&adsafe_pb=")+encodeURIComponent(B)+"&"}var y=q=q.replace(g.UNIQUE_ID_TOKEN,l.asid),H=q.length,I,J,L=m(l.sp_imp_jsInfo_minLength,0),B="";try{I=u-H-L,0<I&&(J=be(p,
I,14,b.on("partialUrls")),B+=J.join("&"))}catch(M){a.add(g.ERROR_CODES.IMPRESSION_URLS)}q=y+B;p=q+="&"===q.slice(-1)?"":"&";var O,H="";try{O=u-q.length,H+=ce(O,"adsafe_jsinfo=",a,b,c,f,h,r)}catch(P){a.add(g.ERROR_CODES.JSINFO),H+="adsafe_jsinfo=e:"+a.toString()}q=p+H;d.macroUrl&&(q+="&"===q.slice(-1)?"":"&",q+=d.macroUrl);s=q;d.sendImpression(s);l.impUrl=s;k.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",R,l)}}}},ce=function(a,b,c,e,f,h,r,m){return function(c){var e=
c.primary.join(","),h=b,g=0,k=function(a){if(a)return","+a};h.length+e.length+5<=a&&(h+=k(e),f.impressionIsIdentifiable(!0),d(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=k(c):g+=1}));return h+=",ov:"+g}(function(){var a,b;b=a={viewState:g.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:e.on("impFailSafe")?q.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):d.isDef(q.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState;
b=f.getAvidIds();u=["id:"+l.asid,"c:"+f.getCacheBustId(),"sl:"+u,"em:"+t.embedded,"fr:"+t.friendly];e.on("avidPropertiesInImpression")&&d.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));a=de(a,c,e,f,h,r,m);k.getAggregator().trigger("eligiblerender");return{primary:u,secondary:a}}())},de=function(a,b,c,e,f,h,r){var m=[],p=k.getAggregator().request("mPage");m.push("mn:"+l.mn);m.push("pt:"+function(){var b=r.stringifyPingTimes();a.viewState!==g.NA&&
(b+=a.details);return b}());m.push(d(h.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+q.getDoc().visibilityState);f.iterate(function(a,b){var c=!b.props||d.isUndef(b.props.type),e=!b.props||b.props.type===g.IMPRESSION_EVENT;(c||e)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+l.mode);m.push("thd:"+d.stringifyTriState(p.supportsVisAPI()));m.push("et:"+(q.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?m.push("oid:"+
l.oid):m.push("uid:"+e.unq);m.push("v:19.8.80");m.push("sp:"+(l.isSplitMode?1:0));m.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(m.push("wr:"+d(u.windowSize()).toArray().join(".")),m.push("sr:"+d(u.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&m.push("x_xpc:"+b);return m},be=function(a,b,c,e){var f,
h=[],g=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(f=d(a).map(function(a,b){if(g(b))return b}),a=d(a).map(function(a,b){if(!g(b))return b}),d(f.concat(a)).each(function(a,d){var f;f=d.val;var g=d.key,k;k=24+h.join("&").length+g.length+c;k=b-k;e&&k<f.length&&0<k&&(f=f.substr(0,k));if(f.length||""===d.val||""===d.type)f="adsafe_url="+f+"&adsafe_type="+g,g=h.join("&").length,f.length+g<=b&&h.push(f)}));return h},Ob=function(){return{isApplicable:function(a){a=q.getWindow();
return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=q.getWindow();a=ee(a.navigator.plugins);var b=a.hash(),c=b.join(".");k.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:g.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),k.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:g.DT_CODES.ADTALK}))}}},he=function(a,b){return{start:function(){try{var c=fe(),d=c.getMethodName(a),f=new S(b.getEnabledScriptUrl(a)),h=ge,l=q.getDoc();(new h(l.body||l.head||l.documentElement,
f)).getWindow()[d]=c.getMethod(b)}catch(m){k.getAggregator().trigger("error",g.ERROR_CODES.FEATURE_SCRIPT)}}}},fe=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),k.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:g,features:b,context:t,dtBaseURL:l.dtBaseURL,spg:Qa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Vb=function(){return{start:function(a,b){d(a).each(function(a,d){b.getEnabledScriptUrl(d)&&
he(d,b).start()})}}},ee=function(a){return{hash:function(){for(var b=0,c=a.length,e=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,""),f=P.hashCode(f),f=d.toBase(f,62).slice(-4),e.push(f);return e},decode:function(b){var c,d;c=q.floor(q.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ge=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var g;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);
g=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,m;k=(new Date).getTime();m=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+m}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");g.open().write(b);g.close()})(b);return{getWindow:function(){return c.contentWindow}}},Qa=function(a){var b=new xa;(function(){b.listen(function(b){return b&&
b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,e){b.stop();q.setTimeout(function(){a.isDtCallAlreadySent()||(k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,"spg",e.scaInfoOriginatorASID),d(e.cache).each(function(b,c){a.addToCache(b,c)}))},q.round(1E3*q.random()))})})();(function(){k.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),q.setInterval(function(){a.sendToOtherTags()},
1E3))})})()};k("spg",["spgCache"],Qa,{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});k("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,e=function(){return f(b)},f=function(b){return d(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,d(b).each(function(a,b){k.getAggregator().trigger("addOutputItem",b,a,{type:g.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),k.getAggregator().trigger("sendMinDt",g.DT_CODES.SCA))};return{allExpectedKeysPresent:f,
isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!e()&&(b[a]=c);e()&&h()},isFull:e,sendToOtherTags:function(){(new ha).send({scaInfoOriginatorASID:l.asid,cache:b})}}},{});try{Ra()}catch(ie){__IntegralASDiagnosticCall("main",ie,l)}};try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
