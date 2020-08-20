

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
		version: '19.8.115',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.115.js"},
		protocol: 'https',
		jsref: "",
		asid: "4007e073-e2fe-11ea-a9af-0e8bec96a15b",
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
		mn: "app26va",
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
__IntegralASConfig.initialize=function(l,x,L){function Pa(g){var a,b,c;l.perf.markStart(ja);Qa();m.startSystem();z=m.getAggregator();z.provide({omidAdSessionContext:{}});z.provide({omidAdSessionVerificationParameters:{}});a=Ra();b=ka();c=(new Sa).createInstance(a,b);z.provide({mErrors:a,mJsonp:b,mComm:c});a=__IASOmidVerificationClient;z.provide({omidVerificationClient:a});z.once("callContinueMain",function(){var a,b;l.perf.markStart(la);b=V.instantiateModules();a=V.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,s,b.renderDetector,g);V.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);V.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,s);l.perf.markEnd(la)});z.on("tryToCallContinueMain",function(a){l.isResolved?z.trigger("callContinueMain"):z.trigger("requestBootstrapper",
a)});z.once("requestBootstrapper",function(a){var b=l.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var c=a&&a.config,t=a&&a.sca,n=a&&a.xsca;c&&z.trigger("jsonp",b+"/jsconfig"+c+(l.adSessionId?"&adSessionId="+l.adSessionId:""),function(a){Object.assign(l,"string"===typeof a?JSON.parse(a):a);l.isResolved=!0;l.sp_cdnScripts={sca:t,xsca:n};z.trigger("callContinueMain")},!1,"cbName")});a=[{environment:new $(a),adSessionReadyStrategy:new Ta(a)},{environment:new Ua,
adSessionReadyStrategy:new Va}];(new Wa(a)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(ja)}var z,V=function(){function g(a){var b=new Xa(a,s),c=new Ya,d=new Za(a,s),p=$a(a,s),g=(new ab(l,s,a)).resolve(),w=[b],A=[];p.applies()&&w.push(p);d.applies()&&w.push(d);c.applies(a,s)&&w.push(c);f(g).each(function(a,b){w.push(new bb(b,s));A.push(b.id)});0<A.length&&(z.trigger("addOutputItem",{output:A.join(".")},"scm",{type:k.IMPRESSION_EVENT}),z.trigger("addOutputItem",{output:A},"metricIdList",
{type:k.DT_CODES.UNLOAD,asION:!0}));return w}function a(a,b,c,d){var p=g(a);z.provide("viewabilityDefinitions",p);return f(p).map(function(p,g){var f,v,m;f=new ma(g,b);var I=(new cb(c,a,g.rts)).getCallbacks(),l=new na(d.createPingJobs(g.type,g.timeInViewThresholds,I,g.metricId));g.sendOtherwiseInViewSignal&&(m=new ma(g,b,g.sendOtherwiseInViewSignal),v=new na(d.createPingJobs(g.type,g.timeInViewThresholds,I,g.metricId,g.sendOtherwiseInViewSignal)));g.rtsCallbacks=I;g.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?
f=new db(f,g,l,s.isVideo()):(f=new oa(f,new W(g.minUnit),l),g.sendOtherwiseInViewSignal&&(v=new oa(m,new W(g.minUnit),v,g.sendOtherwiseInViewSignal),v.start()));f.start();return f})}function b(a,b){var c=(new aa).accepts(),c=!s.isAvid()&&!c&&!s.isInMobiMraidVideo();return s.isVideo()&&c?eb(l.videoId,a,b):{}}function c(a,b,c,d,p,g,w,A,v,H){try{l.perf.markStart(pa),l.tpiLookupURL&&fb(w,A).init(l.tpiLookupURL),s.isDomless()||H.isStarted()&&H.sendOriginList(),m.runAll(),q.execAtEndOfThread(function(){var g;
try{l.perf.markStart(qa);g={output:(new Date).getTime()-p};a.addItem(g,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});l.perf.markEnd(qa);var u,w;l.isSplitMode&&(w=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(gb,w));l.impUrl&&l.perf.markResource(hb,l.impUrl);u=l.perf.getData();z.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(u).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(v){d.add(k.ERROR_CODES.ADTALK_DELAY)}}),
l.perf.markEnd(pa)}catch(I){d.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,g,f,k,v){var m;"true"!==l.minimizeCalls&&(m=(new Date).getTime(),q.execAtEndOfThread(function(){c(a,b,d,n,m,p,g,f,k,v)}))}return{instantiateModules:function(){var c,d,t,n,p,g,f,k,v={};l.perf.markStart(ra);z=m.getAggregator();v.mFeatures=z.provide("features",ib());z.provide("mobileApp",function(){return c=c||new jb(v.mFeatures)});z.provide("avidJsClient",function(){return d=d||new kb(q.getWindow())});z.provide("context",
s);v.mBrowser=z.provide("browser",(new lb).createInstance());v.mErrors=z.request("mErrors");v.mIds=z.provide("ids",mb());v.iOutput=new nb(z);z.request("mJsonp");v.mComm=z.request("mComm");v.viewabilityMeasurement=(new ob(new pb(v.mIds),v.mFeatures,v.mBrowser)).create();if((n=z.request("omidAdSessionContext"))&&n.queuedOutputItems)for(g=0;g<n.queuedOutputItems.length;g++)z.trigger("addOutputItem",{output:n.queuedOutputItems[g].value},n.queuedOutputItems[g].code,{type:"impression"});v.mFeatures.on("swapids")&&
(l.oid=l.asid,l.asid=v.mIds.unq);v.mAdTalk=(new qb).createInstance(v.mFeatures);t=rb();n=sb(z);p=z.provide("mPage",(new tb).createInstance());v.mAncestorOrigins=ub();v.mPageUrls=z.provide("pageUrls",(new vb).createInstance(v.mAncestorOrigins,q));g=z.provide("mScreenEvents",wb());z.provide("ieXDomainViewability",xb(v.mBrowser));f=yb(v.mBrowser);k=b(v.mFeatures,g);v.mVideo=z.provide("video",k);zb(Ab.build());f=(new Bb).createInstance(v.mErrors,f,v.mFeatures);p=(new Cb).createInstance(f,v.mErrors,p,
s);k=z.provide("jobFactory",Db());v.mDataTransfer=Eb(f,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,g,t);t=Fb(v.mErrors,v.mFeatures,z,n);v.mMode=Gb(t,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=z.provide("viewability",Hb(new C,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,z,v.iOutput,p,g,v.mVideo));a(v.mFeatures,v.mViewability,n,k);v.loopDelay=sa();v.renderDetector=Ib();v.mDataTransfer.setViewabilityMod(v.mViewability);l.perf.markEnd(ra);return v},preImpression:function(a,
b,c,d,p,g,f,A,v,H,I,F){var M,q,s,r,E;l.perf.markStart(ta);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";m.getAggregator().trigger("addOutputItem",{output:F?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});try{c.isApplicable(H)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(M=c.getIdMap())&&d.addItem(M,"idMap"))}catch(Jb){p.add(k.ERROR_CODES.ADTALK_GENERAL)}try{g.isApplicable(f,v,H)&&
g.start(),E=A.detectTopURL(),v.on("exch")&&(q=(new Kb).createInstance(p,d),q.parse(E)),s=Lb(),s.isApplicable(v)&&s.start(v),H.usesGroupMCustomMetric()&&Mb(),r=Nb(),r.isApplicable(v)&&(r.start(),z.trigger("sendCookie")),I.start()}catch(J){p.add(k.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(ta);return E},sendImpression:function(a,b,c,d,p,g,w,k,v){try{Ob(a,b,c,d,p,g,w).send(k),f.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(m){__IntegralASDiagnosticCall("impsend",
m,l)}},postImpression:function(a,b,c,n,p,g,f,A,v,H,I,F,M){try{l.perf.markStart(ua);var q=Pb();q.start();q.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var s=Qb(a,b,c);s.isApplicable(n)&&s.start();var r;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(r=Rb(p,g,f,b,A),r.init());d(A,v,H,f,n,p,g,b,F);I&&I.start&&I.start();M.isDomless()||Sb().start(["sca","xsca","rsrch"],n);Tb();m.runTier(k.TIERS.VIEWABILITY);var E=Ub();E.isApplicable(n)&&(E.start(),R.recordBlockingTime(),
l.perf.mark(Vb),R.setupOnLoadTracking(),R.setupBrowserDelayTracking());l.perf.markEnd(ua)}catch(Jb){f.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(g){return new B(g)},B=function(g){this.iterable=g};B.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};B.prototype.isArray=function(){return this.iterable instanceof Array};B.prototype.isEmpty=function(g){return 0===this.keys(g).length};B.prototype.each=function(g,a){var b=
this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};B.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};B.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};B.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+
this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};B.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};B.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};B.prototype._privateMixin=
function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};B.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};B.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};B.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};B.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};B.prototype.findFirst=
function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};B.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};B.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};B.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};B.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},
a)};B.prototype.toArray=function(){return this.map(function(g,a){return a})};B.prototype.JSONStringify=function(){var g,a,b=!1;x.Prototype&&x.Prototype.Version&&-1===x.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};B.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};
f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||x;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-
1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};f.fromNodeListToArray=function(g){return Array.prototype.slice.call(g)};var m=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,u){u=u||{};var w,k,v=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},m=function(){if(!w){var a=
[];w=!0;v(["features","browser","context"]);u.emits&&(c.events=new C);if(!u.applies||u.applies.apply(u,b))k=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=u.tier;f.isDef(b)&&(a[b]=a[b]||new ba,a[b].push(m))})();g.provide(d,function(){var a;m();k&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=
function(){g=g||new va;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",
VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",
JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",
FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",
UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",
AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,
0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",
MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},ja="mf",la="cm",ra="in",ta="pr",ua="po",Vb="bl",pa="lo",qa="lt",gb="md",hb="id",Xb=function(){var g,a=["STYLE","SCRIPT","HEAD","META"],b=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),c=0,d=l.useFIF&&s.friendlyIframe||s.isSpecifiedAd(),e=function(e){var t=r.isNodeXDomainIframe(e)||r.isNodeCreative(e),n=!e;g=n?l.contextNode.parentNode:e;if(t||n)m.getAggregator().trigger("evaluateCreativeFinderResult",
e);else{if(d){var p;p=t=e;n=s.friendly?q.getTop().document.body:l.contextNode.ownerDocument.body;for(;3>c;){if(n&&t===n){p=t;c=3;break}r.isWindow(t)&&(p=r.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+l.asid+"]"),t=f.isDef(p)?p:t);p=t=f.isDef(t)?t.parentNode||t:t;c++}t=p}else t=e;if(r.isWindow(t)){var u;try{u=t.document}catch(w){u=l.contextNode.ownerDocument}e=u}else e="IFRAME"===r.getNodeName(t)?e.contentWindow.document:t;u=[];var n=(t=e&&e.getElementsByTagName&&e.getElementsByTagName("*"))&&t.length,
A;if(t)for(var v=0;v<n;v++)A=(p=t[v])&&p.nodeName&&p.nodeName.toUpperCase(),!p.children||0!==p.children.length||f(b).contains(A)||f(a).contains(A)||f(u).contains(A)||u.push(A);u=b.concat(u);(new Wb(u)).searchDescendants(e)}};m.getAggregator().on("creativeFinderBatchCompleted",e);return{find:e,getClosestContainerName:function(){return r.getNodeName(g)}}},Wb=function(g){var a=function(a){function c(a){var b=r.getNodeName(a),c=r.isNodeCreative(a)||"IFRAME"===b;b&&c&&!r.isEmptyTeadsFrame(a)&&(b=r.getNodeArea(a),
b>t&&(h=a,t=b))}function d(){do c(a[e]),e+=1;while(0!==e%n&&e<a.length);e<a.length?q.execAtEndOfThread(d,0):m.getAggregator().trigger("creativeFinderBatchCompleted",h)}var e=0,h=null,t=-1,n=50;if(a.length&&m.getAggregator().request("useYieldSearch"))d();else{for(e;e<a.length;e++)c(a[e]);m.getAggregator().trigger("creativeFinderBatchCompleted",h)}};return{searchDescendants:function(b){b=b||l.contextNode.parentNode;var c,d,e=[];for(c=0;c<g.length;c++){d=g[c].toLowerCase();var h=b.getElementsByTagName&&
b.getElementsByTagName(d);if(h&&h.length)for(d=0;d<h.length;d++)e.push(h[d])}a(e)}}},Ib=function(){var g,a=!1,b=!1,c=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},h=m.getAggregator().request("omidAdSessionContext"),t=function(){c=a=!0},n=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);m.getAggregator().trigger("adRendered")},p=function(){var a=!1;s.isOmid()&&h&&h.useOMID13Logic&&(a=!0);return a},f=function(a){var b=
{},c=q.getDoc(),d=function(e){var h=e&&e.type;if("readystatechange"===h&&"complete"===e.target.readyState||"load"===h)n(b),g.saveNode(a),"readystatechange"===h?g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===h&&g.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),v(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(n(b),g.saveNode(a),g.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},w=function(){var a=
q.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){y.removeEvent(a,"ready",c);g.save(k.RENDER.DETAILS.ENVIRONMENT);g.save(k.RENDER.DIAGNOSTIC.MRAID_READY);n();v({status:k.RENDER.STATUS.DETECTED})};g.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(n(),g.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(y.addEvent(a,"ready",c),g.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));v(d)},A=function(a){a===
k.RENDER.STATUS.DETECTED&&m.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},v=function(b){var c=g.build();b=b.status||d.status;c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(A(b),m.getAggregator().trigger("addThrottledOutputItem","rend",b),m.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(A(b),m.getAggregator().trigger("addOutputItem",{output:b},"rend"),m.getAggregator().trigger("addOutputItem",
{output:c},"renddet"))},H=function(){m.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Xb,h=!0;m.getAggregator().on("evaluateCreativeFinderResult",function(a){if(r.isNodeXDomainIframe(a))b?q.clearInterval(b):h=!1,c=f(a);else if(a){var d=!1,t=r.getRect(a);a&&"IMG"===r.getNodeName(a)&&(d=0===a.naturalWidth||0===a.naturalHeight);!d&&t.width>=k.RENDER.WIDTH_THRESHOLD&&t.height>=k.RENDER.HEIGHT_THRESHOLD&&(n(c),b?q.clearInterval(b):h=!1);g.saveNode(a)}else a=e.getClosestContainerName()||
g.getAdNodeName(a)||c.details,g.save(a);v(c)});var t=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){m.getAggregator().trigger("renderdiag",c)}},p=m.getAggregator().request("mobileApp");p&&p.isMobileAppEnvironment&&p.isMobileAppEnvironment()&&s.isMraid()?w():(t(),h&&(b=q.setInterval(t,500)));m.getAggregator().trigger("eligiblerender")})},l=function(){var a=h&&!!h.isVideo,c=h&&!!h.videoStartArrived,d=h&&!!h.geometryArrived;return b||!d||a&&!c?!1:(m.getAggregator().trigger("eligiblerender"),
g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),n(),v(e),b=!0)};return{start:function(){var a=!1;m.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:"initial"});m.getAggregator().on("adRendered",function(){a=!0});m.getAggregator().provide("adRenderStatus",function(){return a});m.getAggregator().provide("useYieldSearch",function(){return c});g=new Yb;new Zb;m.getAggregator().on("impressionsent",t);p()?l()||
(g.save(k.RENDER.DETAILS.ENVIRONMENT),g.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),v(d),m.getAggregator().on("omidrendgeoupdate",function(){l()}),m.getAggregator().on("omidrendvideostart",function(){l()})):s.isAvid()||s.isOmid()||s.isVideo()?(m.getAggregator().trigger("eligiblerender"),g.save(e.details),n(),v(e)):(v(d),H())}}},Yb=function(){var g=[],a=[],b=function(a){var b;if(r.isWindow(a))b="WINDOW";else if(r.isNodeXDomainIframe(a))b="XIFRAME";else try{b=r.getNodeName(a)}catch(h){c("nen")}return b},
c=function(a){g.push(a)};return{build:function(){var b=[];f(a).each(function(a,c){b.push(c)});f(g).each(function(a,c){b.push(c)});a=[];g=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),h=d&&r.getRect(d),t=d&&"IMG"===e,n=d&&r.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,g=d&&d.children&&0===d.children.length&&p,f=h&&h.width>=k.RENDER.WIDTH_THRESHOLD&&h.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,
A=(n||t)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(f);A&&a.push(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);g&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(v){c("sne")}}}},Zb=function(g){var a,b=!1,c=!1,d=function(){m.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a,l),m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};m.getAggregator().on("eligiblerender",
function(){b=!0;d()});m.getAggregator().on("renderdiag",function(b){a=b;d()});d()},X=function(){return{applies:function(g,a){var b=m.getAggregator().request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(k.BROWSERS.WEBKIT)||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()}}},Mb=function(){var g,a,b=!1,c=m.getAggregator().request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,m.getAggregator().trigger("sendDt",
k.DT_CODES.LARGE_BILLABLE))};m.getAggregator().on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});m.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},rb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};m.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=s.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},
va=function(){var g=new $b,a=new C;return f(g).mixin(a)},C=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new ba;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();
c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},ca=function(){var g=function(a,c,d){var e,h=c.length,t=r.isWindow(a)?a.frames:r.getChildWindowsOf(a);d&&d(a,c);if(t&&t.length){for(a=0;a<t.length;a++)(e=t[a])&&r.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=r.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},
ba=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},na=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},wa=function(){var g,a=new da,b=function(b,d,e,h){var t,n,p,g;if(JSON&&JSON.parse)try{t=JSON.parse(b.data),n=b.source,g=f.noop,d(t)&&
(h&&(p=h(n,t))&&(g=function(){a.send(function(){return p},n)}),e(b,t,g))}catch(w){t&&m.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};y.addEvent(x,"message",g)},stop:function(){g&&y.removeEvent(x,"message",g);g=null}}},da=function(){var g=function(a){return f(a).isObj()?[a]:(new ca).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&
JSON.stringify){var d=g(c);f(d).each(function(c,d){var t;t=f.resolve(b,d)||{};t.sentTime=q.now();t=a(t);d.postMessage(f(t).JSONStringify(),"*")})}}}},ac=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},nb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=
f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),
e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},$b=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},Cb=function(){return{createInstance:function(g,a,b,
c){return s.isDomless()?new bc:new cc(g,a,b,c)}}},cc=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),t=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:D(r.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:s.embedded,winDimensions:n,adDimensions:p};!0===t&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),
viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(t),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},bc=function(){return{collect:function(){return{}}}},dc=
function(g){g=g||f.identity;var a=[],b=q.now(),c=function(){var c=q.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},xa=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=q.now())},stop:function(){var t=e||a;0===c%b&&(h+=q.now()-
t,d++);c++},getTime:function(){return h},getCount:function(){return d}}},ya=function(){var g,a=0,b=0,c=new C(!0),d=function(){g&&(a++,c.trigger(a),b>a?q.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,q.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},ec=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=q.setInterval(g,c))},e=function(a){a&&
g();q.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},W=function(g){var a,b,c=0,d=s.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=s.getTagTime();h=!1},mark:function(){a=h?s.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=s.getTagTime();h=!0}}},P=function(g,a){var b=g||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),
c=b[1],d=b[2],e=b[3],h=b[4],t=b[5],n=g?b[6]:"",p=a?b[7]:"",u={},w=function(a){f.isDef(a)&&(h=a);return h},k=function(a){f.isDef(a)&&(t=a);return t},v=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:w,master:k,setParam:function(a,b){u[a]=u[a]||{};f(b).isObj()?f(u[a]).mixin(b):u[a]=b},path:function(a){n=
a},toString:function(){var a=w()?w()+".":"",b=n?"/"+n:"",c;p||!f(u).isEmpty()?(c=f(u).isEmpty()?"":f(u).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},Tb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(s.friendly&&!s.isMobileApp())if(b=m.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=
r.getOurNodeInTop()){var h=r.getAncestorNodes(d);e=f(h).map(a)}if(b=e=e&&g(e))m.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),m.getAggregator().provide("adSlotIds",b),c=b}return c}catch(t){m.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},fc={name:"AdRefreshDetection",dependencies:[],creator:function(){var g=[30,45,60,90],a={start:function(){var a=this,c=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;
c&&d&&(this.recordAdSlotImpression(c,d,e,function(c,d){c?m.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==g.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var h=d.exec(a[e]);h&&3===h.length&&"chanId"===h[1]&&(c=h[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+
"."+a.refreshCount;m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var h=q.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);h.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||
null,h=q.getTop();if(e&&this.adRefreshIntervalIsValid(e))m.getAggregator().on("sendDt",function(t,g){t===k.DT_CODES.PING&&g===e&&(q.execAtEndOfThread(function(){h.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);m.getAggregator().trigger("adSessionComplete")}};s.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&
d.adServerName&&a.start()}catch(e){m.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(g,a,b){return b.isPossiblyRefreshable()}}},ub=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=q.getWindow().location.ancestorOrigins,
a=!0}catch(b){m.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");m.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});m.getAggregator().trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Rb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+
b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,p=0,u=0;e(h,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(h,p,++u)},!0);e(h,++p,u)})}catch(w){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new P).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Fb=function(g,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===
l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},lb=function(){return{createInstance:function(g,a,b,c){return s.isDomless()?new gc:new hc}}},hc=function(){var g=k.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=q.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&
f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=q.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=q.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=q.getWindow();
return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=q.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=k.NA,t=q.getDoc(),n=t.createElement("div");if(a(g.IE))try{if("-ms-ime-align"in t.documentElement.style)h="11";else for(n.style.behavior="url(#default#clientcaps)",t=0;t<e.length&&
!(h=n.getComponentVersion(e[t],"componentid").replace(/,/g,"."));t++);}catch(p){}e=h;h=k.NA;n=q.getWindow();f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(h=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return f(b).findFirst(function(b,c){return K.contains(a,c)})};return K.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=
(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},gc=function(){var g=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Sa=function(){return{createInstance:function(g,a){return s.isDomless()?new ic(a):new jc(g,a)}}},kc=
function(){var g,a=function(a,c){var d="",e="",h=q.getDoc().getElementsByTagName("ins");if(h&&0<h.length){e=h[0];d="<ins";for(h=0;h<e.attributes.length;h++)d+=" "+e.attributes[h].nodeName+'="'+e.attributes[h].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){g=m.getAggregator().request("omidAdSessionContext");var c=!(!g.app||!g.isDisplay||g.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!s.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){g=m.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,h=l.adWidth&&0<l.adWidth?l.adWidth:0,t=l.adHeight&&0<l.adHeight?l.adHeight:0,n=q.getDoc().getElementsByTagName("ins"),
p;p=e=0;n&&0<n.length&&(p=n[0],e=parseInt(p.style.width),p=parseInt(p.style.height));h=e||h||window.innerWidth;t=p||t||window.innerHeight;"complete"===q.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=q.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):q.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=q.getDoc().getElementById(c))d.style.width=h+"px",d.style.height=t+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},jc=function(g,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=L.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=L.createElement("SCRIPT"),d.src=b);l.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];s.isOmid()?(e=new kc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===l.forceAppend?c(a,b,d):L.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=r.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=L.createElement("script");c=c||l.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};m.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},ic=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";m.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);m.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){m.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new P(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};m.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},s=function(g){var a="undefined"===typeof window,b="undefined"!==typeof g&&"undefined"!==typeof top&&g!==top,c=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||f.isDef(q.getWindow().mraid)},e=function(){return!a&&f.isDef(q.getWindow().mraid)},h=function(){var b=!1;if(!a)var c=(b=q.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&f.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},t=function(){var b;
if(!(b=-1!==l.mode.indexOf("jsvid"))){var c;b=!1;var d=m.getAggregator();if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=m.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===k.MEDIA_TYPE.VIDEO),c=b||h());b=c}return b},n=function(){return l.mobOrTab},p=function(a){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(b,
c){return K.contains(c.id,a)}).length},u=function(){return p("grpm")||l.use100v};return{embedded:b,friendly:c,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=P(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:b&&c,xDomainIframe:b&&!c,getTagTime:function(){return q.now()-l.birthdate},getPageTime:function(){var b=k.NA;!a&&f.isDef(g.chrome)&&f.isDef(g.chrome.csi)&&f.isFunction(g.chrome.csi)&&(b=q.round(g.chrome.csi().pageT));return b},isVideo:t,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=l._cl_adpath)&&f.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(l._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&f.isDef(q.getWindow().avid)},isOmid:function(){var a=m.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new aa).accepts()},isOmidForWeb:function(){return(new za).accepts()},isDomless:function(){return a},
isAvidNative:function(){var b=!1,c=m.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==ea());return b},isMraid:e,isSafeFrame:function(){var b=!1;a||(b=f(q.getWindow().$sf).isObj(!1)&&f(q.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:h,isDeviceTypeGroupMobile:n,usesIASFullyInViewCustomMetric:function(){return p("fiv")||
l.use100v||!u()},usesGroupMCustomMetric:u,isCeltra:function(){var b=!1;a||(b=Aa().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return u()&&n()},usesZeroPivCustomMetric:function(){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=q.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!t()&&b&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;l.contextNode&&f.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),e=(e=l.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(q.getWindow()[e]));var h=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var t=!0===l.fwMonitoring||"true"===l.fwMonitoring;h&&a&&("true"===c&&"true"!==d&&e?(b=!0,t&&m.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,t||m.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(x),y={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",y.mouseEnter(b),
c):"mouseleave"===a?g.addEventListener("mouseout",y.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=L.defaultView&&L.defaultView.getComputedStyle;b=b||"";d?c=(g=L.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(x.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(g,a){if(s.isDomless())q.setTimeout(function(){g()},50);else{var b=a||(s.xDomainIframe?L:q.getTop().document),c=function(a){var c=q.setInterval(function(){b.body&&(q.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(L.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?q.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},isSandboxed:function(g){var a,
b=q.getWindow(),c=!1;if("sandbox"in q.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=q.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
y.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var Eb=function(g,a,b,c,d,e,h,t){var n=0,p=0,u=!1,w=function(a,e,t,g,w,A){t=t||!b.on("postDts");var s=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(s||"n"!==h.getCurrentLoc()))try{var r=l.dtBaseURL,x=new P(r,!0),y=q.now();
m.getAggregator().trigger("preSendDt",a);r||(x.path("dt"),b.on("usedtdomain")&&x.sub("dt"));v(x,a,e);w&&w.field&&x.setParam(w.field,w.value);g||H(x,a);m.getAggregator().trigger("send",x,function(){p+=1;n=q.now()-y;f.isFunction(A)&&A()},t);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(z){__IntegralASDiagnosticCall("dt-"+a,z),m.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){u||w(k.DT_CODES.UNLOAD,-1,!0)};var A=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",
jsi:"e"},e=l.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&w(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},v=function(a,b,e){var h=new Y(b);e=f.isDef(e)?e:h.enumerator;a.setParam("asId",l.asid);e={c:c.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},H=function(c,g){var f,u={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,
b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)u.clog=t,s.isVideo()&&(f=s.isOmid()&&!s.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=m.getAggregator().request(f))&&!f.isEmpty()&&(u.ve=f));g===k.DT_CODES.UNLOAD&&(u.ndt=p);-1!==l.mode.indexOf("jsvid")&&(u.vv=m.getAggregator().request("videoVersion"));
u.NULL1=b.output();u.NULL2=h.stringify(10);u.em=s.embedded;u.fr=s.friendly;u.e=a.toString();u.tt=l.mode;u.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);c.setParam("tv",u);c.setParam("br",e.getBrowserType())};m.getAggregator().on({sendDt:function(a,b,c){w(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:A,updateDtCount:function(){p++},unload:g});return{send:w,unload:g,
diagnostic:A,setViewabilityMod:function(a){}}},D=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?r.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=q.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return q.round(a.width)*q.round(a.height)};(function(){var b;g!==x.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=r.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?q.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=
k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},r={findElementsWithSize:function(g){var a=[],b=function(c){1>r.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(y.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===y.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=r.browserWindowPosition(),b=r.windowSize(),g={scrX:q.round(a.scrX),scrY:q.round(a.scrY),
width:q.round(b.width),height:q.round(b.height)}}catch(c){m.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;
else throw g.width=g.height=0,"";else f.isDef(x.outerWidth)&&(g.width=x.outerWidth,g.height=x.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(x.screenX)?(g=x.screenX,a=x.screenY):f.isDef(x.screenLeft)&&(g=x.screenLeft,a=x.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=r.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=r.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&
(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=L.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=s.friendly&&q.getTop().Image;return f.isFunction(g)?
new g:new Image},createHiddenIframe:function(g){var a=q.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,h=1E4;b=y.nodeIsAbsolutelyPositioned(g);d=!r.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!r.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!r.tagNameIs(d,
"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=r.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==L&&d!==a)}return{width:q.round(e),height:q.round(h)}},hasBackgroundImage:function(g){g=y.getStyle(g,"background-image");return""!==g&&"none"!==g},isEmptyTeadsFrame:function(g){try{var a,b,c=!1,d=g&&"IFRAME"===g.nodeName&&g.contentDocument;g&&g.parentElement&&"teads-player"===g.parentElement.classList.item(0)&&d&&(b=(a=d.body)&&1>a.childElementCount)&&(c=!0);return c}catch(e){return!1}},
findChildWithLargestContent:function(g,a){var b=m.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=this.hasBackgroundImage,d=function(a){for(var c=a;a.parentNode!==g&&"inline"!==y.getStyle(a.parentNode,"display");){var d;if(!(d=!b)){d=a.parentNode;var e=!0;if("visible"===y.getStyle(d,"overflow")||"visible"===y.getStyle(d,"overflowX")&&"visible"===y.getStyle(d,"overflowY"))e=!1;d=e}d&&(c=a.parentNode);a=a.parentNode}return c},e=null,h=function(a){var b,d,e=null,h=-1;if(a.length)for(b=
0,d=a.length;b<d;b++){var f=a[b],k=r.getNodeArea(f),m=f,l=void 0;if(l=m.parentNode===g)if(l=void 0,l="DIV"===m.nodeName)if(l=void 0,l=!c(m))if(l=void 0,!(l="0"===y.getStyle(m,"opacity")||"hidden"===y.getStyle(m,"visibility"))){for(var q=l=void 0,m=m.childNodes,l=0;l<m.length;l++)1===m[l].nodeType&&(q=!0);l=!q}m=!l;l=r.isEmptyTeadsFrame(f);k>h&&m&&!l&&(e=f,h=k)}e&&(e.hasValidSizeForMobileApp=1<h);return e}(function(b){var c,d,e,h,g=[],f=a||"iframe img a object embed div".split(" ");c=0;for(d=f.length;c<
d;c++){e=f[c].toLowerCase();var k=b.getElementsByTagName&&b.getElementsByTagName(e);if(k&&k.length)for(e=0,h=k.length;e<h;e++)g.push(k[e])}return g}(g));h&&(e=d(h),e.hasValidSizeForMobileApp=h.hasValidSizeForMobileApp);return e},screenSize:function(){if(s.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(x.screen)&&(g={width:x.screen.width,height:x.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(r.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&
(g={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=q.getTop(),b=q.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;s.friendly&&(g=s.embedded?(g=r.getOurIFrameInTop())&&g.frameElement:l.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,
a){var b,c=a||q.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(r.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||
g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[l.contextNode.parentNode,q.getDoc()];s.friendly&&d.push(q.getTop().document);if(a&&s.embedded)try{d.push(q.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=r.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&
g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=r.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=q.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,
a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&r.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&r.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=r.getAttribute(g,"width");g=r.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,
c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;s.isSpecifiedAd()&&(d||e)&&(c=!1);return c},isNodeCreative:function(a){var b=r.getNodeName(a),c=a&&a.innerText&&0<a.innerText.length,c=a&&a.children&&0===a.children.length&&c,d=b&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase());
return b?!!(d||r.hasBackgroundImage(a)||c):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=r.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return r.getElementsWindow(a)!==q.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===r.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},
Ra=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};m.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Kb=function(){return{createInstance:function(a,b){return s.isDomless()?new lc:new mc(a,b)}}},mc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),
b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,h=c(d),t=h&&h.length&&h.join("|"),n=l.exchList;t&&(e=f(n).map(function(a,b){return 0<=t.indexOf(K.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},lc=function(){return{parse:function(a){}}},ib=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=
l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*q.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});
e.gm=f.fromBoolToNum(s.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){var b=l[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},
yb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;c=b?c:d;f.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=c.IN_VIEW?k.IN_VIEW:a<=c.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,b,c,d){var e=0,h=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),d=b.getRounded(),e=
Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-f;h=D({scrX:e,scrY:f,width:0<k?k:0,height:0<c?c:0})}}),e=q.round(h.area()/a.area()*100));return e}}},mb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>
a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*q.random()|0).toString(16);a=a.slice(0,32)}catch(d){m.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&
(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},fb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},nc=function(a,b,c,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=m.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||m.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),t=a.getTimeInViewForRts();f.isDef(d)&&(m.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),m.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));m.getAggregator().trigger("sendDt",b,e);if(c[t])c[t]()}}}},Db=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,f){return new nc(f,a,c,d,e)})}}},Ba=function(){var a,b=[],c=function(a){return{type:a.tp||
a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=m.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=m.getAggregator().request("mScreenEvents").getCurrentEvent(),u=Math.floor(d.time/1E3);f(b).each(function(a,
b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(m.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),m.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),m.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};return{init:function(){d();
m.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},ka=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+q.round(1E4*Math.random())};return{wrap:function(d,e,h,f){var n=c(),p,u,k;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],
u=p.split("=")[1],k=K.stringToFn(u),d=a(d,p));x[n]=function(a){e(a);h&&k&&k(a);x[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();x[b]=function(c){a(c);x[b]=void 0};return b}}},Gb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=P(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},
jload:{impressionMethod:function(c){a.enabled?m.getAggregator().trigger("jsonp",c,a.callback,!0):m.getAggregator().trigger("send",c,function(){m.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){m.getAggregator().on("adImpression",
function(e,n){var p;try{p=d(c,n),a.enabled?m.getAggregator().trigger("jsonp",p,a.callback,!0):m.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&m.getAggregator().trigger("jsonp",c(a),function(a){m.getAggregator().trigger("videoBlockResult",a)});m.getAggregator().on("adImpression",
function(c,e){var n;try{var k;if(k=b)k=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);m.getAggregator().trigger("send",n,f.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[l.mode],d=!!b.isFW,f=function(a){var b;b=m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),u=f.indexOf("BEGIN__ADSAFE"),k=-1!==u,A=k?f.slice(u):"",a=k?f.slice(0,u):a(f);return{isFW:d,baseUrl:a,macroUrl:A,sendImpression:function(a){var d=function(){b.nodeType?m.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)m.getAggregator().on("adImpression",function(){d(a)})}}}},q={execAtEndOfThread:function(a){q.setTimeout(a,0)},now:function(){return(new Date).getTime()},
random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return x},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?m.getAggregator().request("omidVerificationClient"):x},setInterval:function(a,b){return q.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,
b){return q.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){q.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){q.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();return top},getDoc:function(){s.isDomless();return L},getIntersectionObserver:function(a,b){s.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},tb=function(){return{createInstance:function(){return s.isDomless()?
new oc:new pc}}},pc=function(){var a,b=!1,c=!1,d=m.getAggregator().request("features"),e=new ba,h=function(){var b;d.on("blur")?(b=q.getWindow(),b=s.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?q.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?q.getDoc()[a.prop]:null;return b},t=function(){var b=q.getWindow(),c=function(){e.run(h())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(q.getDoc(),
a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=q.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var t=h+"Hidden";f.isDef(d[t])&&(a=t,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){e.push(a);c||(c=!0,t())},supportsVisAPI:function(){return b}}},oc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},vb=function(){return{createInstance:function(a,
b){return s.isDomless()?new qc:new rc(a,b)}}},rc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=
c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(u){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(s.embedded){try{p.c=
encodeURIComponent(parent.document.referrer)}catch(m){}try{p.e=encodeURIComponent(x.document.referrer)}catch(v){}}try{"jsi"!==l.mode&&(p.d=encodeURIComponent(x.location.href))}catch(q){}try{p.f=encodeURIComponent(l.jsref)}catch(I){}try{h=n(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(F){}p=d(p);p=e(p);h=[];for(var M in p)p.hasOwnProperty(M)&&h.push({key:M,val:p[M]});h.sort(function(a,
b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},qc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},sb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},wb=function(){var a=[],b={},c={sl:"n"},d=0,e,h,t,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,
d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},u=function(a,c){var d=new dc(c);return b[a]=d},w=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},l=function(){f(c).each(function(b,c){n[c]+=
a.length?t-d:t});d=t},v=function(b){a.length&&l();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||l()},q=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e={sl:w(a.viewState)};t=s.getTagTime();v(e);e.t=t;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+
"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return h=c};(function(){u("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});u("as",function(a){var b=k.NA;
a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){t=s.getTagTime();l()},registerLocation:function(d){var h,t=!1;c.sl==w(d.viewState)&&a.length?(h=new q(d),a[a.length-1].details=h.details):(h=new q(d),a.push(h),e=d.viewState,t=!0);m.getAggregator().trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(t&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c=
"";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:u,getCurrentLoc:function(){return w(e)},getCurrentEvent:function(){return h}}},K={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:
a-26)})},stringToFn:function(a){var b,c=x,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=q.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},sc=function(){var a=function(){var a=function(a){return a&&
a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=r.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=r.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=r.tagNameIs(a,"div"),e=r.attributeMatches(a,"class",b);a=r.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return r.traverseAndFindFirstMatchingNode(a,
h)},getClickableImage:function(b){var c,h=(b=r.getFirstChildElement(b))&&r.tagNameIs(b,"a"),f=r.attributeMatches(b,"href",d),k=r.attributeMatches(b,"target",e);h&&f&&k&&(b=r.getFirstChildElement(b),r.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return r.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},tc=function(){var a=sc(),b=function(a,b){b.tag=r.getTagName(a);b.size=r.getDimensionFromAttributes(a)||r.getDimensionFromStyle(a)};
return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}},uc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!r.isViewportVisible(c,a))return c;if(c!==d&&s.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=q.getWindow();
return b(a,q.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=q.getWindow();r.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}}},vc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;
d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}},wc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,b){var c,d=function(){try{var d=a.isHidden(),h,t={};d!==c&&(h=f.stringifyTriState(d),t.res1=h,t.ps=h,t.ts=q.now(),t.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",t));c=d}catch(n){m.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();
var b=a.getWindowWithHiddenViewport();if(b)vc(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}}},xc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var b=0,c=function(a,b){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(s.embedded)try{h=l.contextNode.parentNode,b=tc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),
b.tag&&(h.dom=b.tag),c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){m.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}}},Ca=function(a,b,c,d){var e,h=0,t=0,n=!1,p=function(){e=Math.round(r.getNodeArea(a.body));if(e>=d){for(var p,u=e+20*e/100,v=a.querySelectorAll("iframe"),v=f.fromNodeListToArray(v);v.length&&(t<u||h<c);)p=v.shift(),p=Math.round(r.getNodeArea(p)),p>=d&&(h++,
t+=p);t>=u&&h>=c&&(u={va:e,bia:t,bin:h},m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,b,f(u).toION()),n=!0)}},u=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():q.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&r.isElement(c)&&r.tagNameIs(c,"IFRAME")&&f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(q.execAtEndOfThread(p),!n&&f.isDef(x.MutationObserver)&&u())},
yc={name:"BS_InApp",dependencies:[],creator:function(){var a=q.getWindow().document;m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ca(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}}},zc={name:"BS_Browser",dependencies:[],creator:function(){var a=q.getWindow().document,b=a.body?Math.round(r.getNodeArea(a.body)):null;!m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&
b&&Ca(a,"bs2",10,b)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}}},qb=function(){return{createInstance:function(a){return s.isDomless()?new Ac:new Bc(a)}}},Bc=function(a){var b,c,d,e=new va,h=new ca,t=new Cc(e),n=new Dc,p=new Ec,u=new Fc(e,a),k=function(){f.isUndef(d)&&(d=new Gc(e));return d},l=function(){e.provide({frameCollection:function(){return t},adProxy:function(){return p},adTalkMessage:function(a){return new Hc(a,
e)},adTalkMessageCollection:function(){return n},idMapModule:k,interFrameQuerySelector:function(a){return new Ic(a)}})};return{isApplicable:function(a){return f.isDef(x.JSON)&&f.isDef(x.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){l();h.traverse(t.addFrame);u.startListening();u.sendToKnownFrames();m.getAggregator().once("stopAdTalk",function(){u.stopListening()});m.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&
(b=new Da(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Da(e,!0));return c},getIdMap:k}},Ac=function(){return{isApplicable:function(){return!1},start:function(){}}},Hc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=m.getAggregator().request("features").on("swapids")?l.oid:l.asid;var h=a||{},f=l.asid,d=d.tagId,n=s.embedded,p=s.friendly,u=l.birthdate;c=c.split("-")[2];var w;s.friendly?w="["+k.AD_IDENTIFIER+
"-"+l.asid+"]":(w=q.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:u,iasCommonId:c,nodeSelector:w,positionStr:e,version:"0.1"}},Dc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},Jc=function(a,b,c,d){var e,h=a==x;e={position:b.slice(0),id:b.join("-"),
isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var t=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=
a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){t(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},Cc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,h,f){var n=a.request("adProxy").getAll();e=new Jc(e,h,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},
getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Da=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";n+=p}return n}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),
d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Gc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},h=function(a){var e=!1,e=!s.embedded,h="BODY"!==r.getNodeName(c)&&"HEAD"!==r.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var m=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);f=!(f?m:!a.srcIsFriendly)}e&&
h&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&s.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),m.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Ic=function(a){var b=new ca,c=function(a){var b=
a,c="IFRAME"===r.getNodeName(a),d=r.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return r.querySelector(c(a),b)},e=function(c,e){var n,p,k;try{p=d(c,e),p||(n=b.getFrames(!0,a),f(n).findFirst(function(a,b){return k=d(b,e)}))}catch(m){}return p||k||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},Fc=function(a){var b=!1,c,d;d=m.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&
b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},t=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);m.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var h,n,l,s,r;try{h=a.request("frameCollection");n=a.request("adTalkMessageCollection");l=d.messageContent.self;n.add(d);var M=h.getMe();M.unifiedId>l.unifiedId&&
(M.unifiedId=l.unifiedId);var x;x=q.now()-d.sentTime;d.transferDuration=x;n=s=h.getFrame(l.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(s=s||h.addFrame(c.source,l.id.split("-"),d),s.addInformationFromSrc(d,l),e()):s.addInformationFromSrc(d,l);(r=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&t()}catch(ue){m.getAggregator().trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:t,sendToKnownFrames:function(){(new da).send(h)},startListening:function(){c=new wa;c.listen(e,
n,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:h}},Kc=function(){var a=m.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Ec=function(){var a,b=[],c=function(a){a=new Kc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},xb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-
a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&y.addEvent(q.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,q.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Lc=function(a,b){var c,d,e=k.NA,h=e,t=!1,n=!1,p=!1,u=!b,w=function(){var b=q.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=
Math.min(b,100);c=a.boundingClientRect;e!==h&&q.execAtEndOfThread(function(){m.getAggregator().trigger("IOPivChange",e)});h=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});u&&q.execAtEndOfThread(function(){e===k.NA&&(e=0)});b.observe(l(a));u&&q.execAtEndOfThread(function(){s.isBustedIframe()||m.getAggregator().trigger("delayedViewabilityReady")});t=!0},l=function(b){if(!f.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",
opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){n=!0}b&&null!==b.bodyElement?w():b&&b.document?y.whenReady(w,b.document):n?m.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):w()},isReady:function(){return e!==k.NA},isStarted:function(){return t},getAdNodeDimensions:function(){var a;c&&(a=D({scrX:void 0,
scrY:void 0,width:c.width,height:c.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},sa=function(){var a=!1;(function(){y.whenReady(function(){m.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}},Mc={name:"loopDelay",dependencies:[],creator:sa,settings:{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},Nc=function(){return{start:function(a){m.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Oc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Qb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,m.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[Pc(),Qc(),Oc(),Nc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&
f.isDef(l._onMeasurable)}}},Qc=function(){return{start:function(a){ac(m.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&s.isVideo()}}},Pc=function(){return{start:function(a){m.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&s.isVideo()}}},Rc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();
f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){m.getAggregator().trigger("adImpression")})}}},Sc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},
isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Tc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&m.getAggregator().trigger("adImpression")})}catch(b){}}}},Uc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},$=function(a){var b=q.getWindow(),b=b&&b.omid3p,c=m.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},
Vc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){m.getAggregator().trigger("adImpression")})}}},Wa=function(a){return{resolve:function(){return f(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Ta=function(a){var b=!1,c=!1,d=!1,e=!1,h=m.getAggregator().request("omidAdSessionContext");h.queuedOutputItems=[];var t=new fa,n=m.getAggregator().request("omidAdSessionVerificationParameters"),p=q.getWindow(),k=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,w=!1,A=function(){return n&&n.IAS&&0<Object.keys(n.IAS).length?n.IAS:n},v=function(){var a,f;b&&c&&(!e||d)&&(x.omidSupported=!0,a=h.app&&h.isDisplay&&!h.isWeb,
(f=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&h.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(h.isLimitedSandbox=!1),a&&f&&(h.delayingViewabilityEvents=!0),h.hasOwnProperty("impressionType")&&h.queuedOutputItems.push({code:"oiet",value:h.impressionType}),h.hasOwnProperty("creativeType")&&h.queuedOutputItems.push({code:"oct",value:h.creativeType}),m.getAggregator().trigger("tryToCallContinueMain",A()),w=!0)},H=function(a){var c;if("sessionStart"===a.type){h.adSessionType=a.data.context.adSessionType;
h.environment=a.data.context.environment;"app"===h.environment&&(l.mobOrTab=!0);h.accessMode=a.data.context.accessMode;h.omidNativeInfo=a.data.context.omidNativeInfo;h.omidJsInfo=a.data.context.omidJsInfo;h.deviceInfo=a.data.context.deviceInfo;h.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(h.contentUrl=a.data.contentUrl);h.isJavaScript="javascript"===h.adSessionType;h.isNative="native"===h.adSessionType||"javascript"===h.adSessionType;h.isLimitedSandbox=s.embedded;h.isHtml="html"===
a.data.context.adSessionType;h.isWeb="web"===a.data.context.environment;n=a.data.verificationParameters;c=h.isHtml&&h.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?h.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,h.useOMID13Logic=!0,h.queuedOutputItems.push({code:"ohand",value:"13"}));for(var d=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},
{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],
f,p,k,t=0;t<d.length;t++)f=d[t].root,p=d[t].field,k=d[t].code,"object"===typeof h[f]&&"undefined"!==typeof h[f][p]&&h.queuedOutputItems.push({code:k,value:h[f][p]});h.queuedOutputItems.push({code:"oast",value:h.adSessionType});h.queuedOutputItems.push({code:"oacm",value:h.accessMode});h.queuedOutputItems.push({code:"oenv",value:h.environment});h.hasOwnProperty("contentUrl")&&h.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(h.contentUrl||"")});c?m.getAggregator().trigger("tryToCallContinueMain",
A()):(b=!0,v())}"sessionError"===a.type&&(a=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),w?m.getAggregator().trigger("addOutputItem",{output:a},"oser"):h.queuedOutputItems.push({code:"oser",value:a}))},r=function(a){h.mediaType=a.data.mediaType;h.queuedOutputItems.push({code:"omtp",value:h.mediaType});"video"===a.data.mediaType&&(h.isVideo=!0);a.data.viewport&&a.data.adView&&(h.impressionViewabilityMeasurement=
{data:{viewport:a.data.viewport,adView:a.data.adView}},"undefined"===typeof h.geometryArrived&&t.checkForViewAttachmentBasedOnAdSessionType(h,a.data.adView)&&(h.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate")));a.data.hasOwnProperty("impressionType")&&!h.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType);h.isNativeVideo=h.isNative&&"video"===a.data.mediaType;h.isDisplay="display"===a.data.mediaType;c=!0;v()},F=function(a){a&&"start"===a.type?(h.videoStartArrived=
!0,m.getAggregator().trigger("omidrendvideostart")):"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(h.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(h.impressionType=a.data.impressionType),v())};return{start:function(){k.addEventListener("media",F);k.addEventListener("video",F);k.registerSessionObserver(H,"IAS");k.addEventListener("impression",r)}}},Ua=function(){return{accepts:function(){return!0}}},za=function(){var a=m.getAggregator().request("omidAdSessionContext"),
b=m.getAggregator().request("omidVerificationClient"),c=new $(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},Va=function(){return{start:function(){var a=l.contextNode&&(l.contextNode.dataset.iasParameters||l.iasParameters);m.getAggregator().trigger("tryToCallContinueMain",a)}}},Wc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",
a)}}},Xc=function(a,b){var c,d=function(a){var d,f,k;try{d=a.eventData.percentageInView,f=c&&75<=d,k={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",k)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;
c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(h){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Yc=function(a,b){var c=[],d=(new Date).getTime(),e=0,h=0,t=!1,n=new Ba,p=m.getAggregator().request("omidAdSessionContext"),u={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+
d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},w=function(){t=!0},l=function(a){try{var n="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),w="n",l=!1;switch(a.type){case "start":n="adVideoStart";p.videoStartArrived=!0;m.getAggregator().trigger("omidrendvideostart");d=u;h=a.data.duration;1E3<h&&(h/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":n="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":n=
"adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);l=!0;m.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":n="pauseAd";break;case "resume":case "bufferFinish":n="resumeAd";break;case "skipped":n="adSkipped"}if(""!==n){var q=m.getAggregator().request("mScreenEvents");q&&(w=q.getCurrentLoc());c.push({t:u-d,tp:n,sl:w,ad_duration:h,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var A=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),
n=-1!==A?A+1:void 0,s=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===t?(f.isDef(n)&&m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",n),m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vps",s)):(f.isDef(n)&&m.getAggregator().trigger("addOutputItem",{output:n},"vbp",{type:k.IMPRESSION_EVENT}),m.getAggregator().trigger("addOutputItem",{output:s},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&m.getAggregator().trigger("omidAdDuration",{ad_duration:h});
var r;"playerStateChange"===a.type?r="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?r="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(r="AdPaused");f.isDef(r)&&b.trigger("videoPlaybackEvent",{eventType:r,eventData:null});l&&m.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(y){__IntegralASDiagnosticCall("omidvideo",y,x.bootstrapper)}};return{start:function(){m.getAggregator().on("impressionsent",
w);m.getAggregator().provide({omidVideoEventsString:u});a.addEventListener("video",l);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ea=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});
a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Zc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():
!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},ob=function(a,b,c){var d=m.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),
b=b.concat(a.getMraidMeasurementStrategies());(b=(new ga(b)).resolve())||m.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var c=new $c(b);return new Zc(b,c,d.isMobileAppEnvironment())}}},pb=function(a){var b=m.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=m.getAggregator().request("omidVerificationClient"),b=new $(a),e=new za,h=[];if(b.accepts()&&!e.accepts()){var f=new aa,n=new ad,e=new bd(a,new C),f=[{environment:f,measurementStrategy:new cd(a,
new C)},{environment:n,measurementStrategy:new Fa(new ha,q.getWindow(),new C)}],f=(f=(new ga(f)).resolve())?f.measurementStrategy:{},p=new Ga(new Ha(new S),new S,n.accepts()),n=new Uc(a,b,l.mode),k=new Ia(e,f,new C,p),b=new Vc(a,b,l.mode),a=new Ja(e,f,new Yc(a,new C),new C,p);h.push({environment:n,measurementStrategy:k});h.push({environment:b,measurementStrategy:a})}return h},getAvidMeasurementStrategies:function(){var b=m.getAggregator().request("avidJsClient"),d=new Sc(b),e=[];if(d.accepts()){var f=
new Rc(b,d,l.mode),k=new Tc(b,d,l.mode),n;n=new Wc(b,new C);if(d.supportsAdContainerGeometry()){var p=new dd,u=new ed,w=new Fa(new ha,q.getWindow(),new C),A=new fd(b,new C),p=(p=(new ga([{environment:p,measurementStrategy:A},{environment:u,measurementStrategy:w}])).resolve())?p.measurementStrategy:{},u=new Ga(new Ha(new S),new S,u.accepts()),w=new gd(b,new C),b=new Ia(w,p,new C,u);n=new Ja(w,p,n,new C,u)}else u=new Xc(b,new C),b=new Ea(u,new C),n=new Ka(u,n,new C);e.push({environment:f,measurementStrategy:b});
e.push({environment:k,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new hd(q.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=m.getAggregator().request("context"),e=new id(q.getWindow(),e),f=new jd(q.getWindow(),new C);e.accepts()?(d=new kd(q.getWindow(),new C),d=new Ka(f,d,new C),d={environment:e,measurementStrategy:d}):(e=new Ea(f,new C),d={environment:d,measurementStrategy:e});
a.push(d)}return a}}},ga=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},$c=function(a){var b=!1,c,d={winDimensions:D({scrX:0,scrY:0,width:0,height:0}),adDimensions:D({scrX:0,scrY:0,width:0,height:0}),containerDimensions:D({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?
new D({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):D({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,
shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,m.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=
c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ka=function(a,b,c){var d=!1,e=!1,h=!1,t,n,p,u,w=function(){if(!f.isUndef(n)){var a=[],b,m;d?(e?(m=!1,b=100):(m=u,b=p),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(m=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;n.shouldDelegateToDomBasedViewability=m;n.percentageInView=b;n.viewState=50>b?k.OUT_OF_VIEW:
k.IN_VIEW;n.outOfViewReason=a.join(".");t=n;c.trigger("measurementChanged",t)}},l=function(a){n=a;p=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;w()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);w()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,
{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(l);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},id=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==
a.type||b||(b=!0,m.getAggregator().trigger("adImpression"))})}catch(d){}}}},kd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},gd=function(a,b){var c=function(a){var c=new D(a.eventData.viewport||{width:0,height:0}),f=new D(a.eventData.originalAdContainer||
{x:0,y:0,width:0,height:0}),n=new D(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,
obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},Ga=function(a,b,c){function d(a,b,c){c=n(b,c);a=h(a,b,c);return a.width*
a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},t=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,u){if(f.isDef(e)&&
f.isDef(u)){var m=e.viewport,l=e.computedAdContainer,v=l.obstructions,s=v&&0<v.length,r=e.originalAdContainer,F=u.adGeometry,M=u.adFound,x=e.detectionMethod,y=0,m={x:0,y:0,width:m.width,height:m.height},N=t(r,F),E=e.outOfViewReason,z=0,J=0,C=s||!1,z=1>=F.width*F.height;c&&z&&(M=!1,E=E||"",M||-1!==E.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(E=k.OUT_OF_VIEW_REASONS.GEOM+(""!==E?"."+E:"")));if(M&&0<e.percentageInView){z=d(m,l,N);s?(y=n(l,N),y=h(m,l,y),y=t(l,y),y=a.calculateObstructedArea(y,v)):y=0;J=y;y=
Math.round((z-J)/(N.width*N.height)*100);s&&0===J&&(C=!1);for(var F=(new D(N)).getRoundedGeometry(),M=C,B,s=0,J=b.getConfig(F).numberOfSlices,Q=q.floor(F.height/J)||1,v=[],z=M?a.getObstructionStatusBySlice(J):[],T,s=0;s<J;s++)B=F.y+Q*s,s==J-1&&(Q=F.y+F.height-B),B={x:F.x,y:B,width:F.width,height:Q},T=d(m,l,B),B=1==T/(B.width*B.height),v.push(B);if(M)for(l=q.min(z.length,J),s=0;s<l;s++)v[s]=v[s]&&!z[s];l=v}else l=b.getConfig(F).defaultSliceArray;return{windowDimensions:m,containerDimensions:r,adDimensions:N,
percentageInView:y,viewState:50<=y?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=y?"":E||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:C,sliceStatus:l}}}}},dd=function(){return{accepts:function(){return s.isAvidNative()}}},fd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new D({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,adFound:a})};return{start:function(){a.addEventListener("viewability",
c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},ed=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},Ia=function(a,b,c,d){var e,h,t,n=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);t=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},u=function(a){h=a;n()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,
{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return t}}},Ha=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,k,n,p;k=e&&0<e.length;var u;if(k){u=Math.round(d.width);var m=Math.round(d.height);h=Array(u);for(n=
0;n<u;n++)h[n]=Array(m);u={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:u,height:m}}else u={};h=u;m=u=0;if(k){for(;u<e.length;u++){k=e[u];n=m=h;var l=k;h=Math.max(n.x,l.x);k=Math.max(n.y,l.y);p=Math.min(n.x+n.width,l.x+l.width);l=Math.min(n.y+n.height,l.y+l.height);n=p-h;p=l-k;n=0<n?n:0;p=0<p?p:0;h-=m.x;k-=m.y;n=h+n;p=k+p;for(h=Math.round(h);h<Math.round(n);h++)for(l=Math.round(k);l<Math.round(p);l++)void 0!==m.matrix[h]&&void 0===m.matrix[h][l]&&(m.matrix[h][l]=1,m.obscuredPixelCount+=
1);h=m}m=h.obscuredPixelCount;u=h;if(f.isUndef(u.matrix)||0===u.matrix.length)c=[];else{k=0;p=!1;h=u.matrix[0].length;n=u.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var l=q.floor(h/p)||1,v=[],s=0;s<h;s++){p=!1;for(var r=0;r<n;r++)if(1===u.matrix[r][s]){p=!0;break}k++;p&&(s+=l-k,k=l);if(k==l||s===h-1)v.push(p),k=0}c=v}}else c=b;return m},getObstructionStatusBySlice:function(){return c}}},bd=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),d=null,e=!1,h=new fa,t=
function(){var a=q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(t,50)},n=function(a){if(a&&a.data&&a.data.adView){var f=a.data.adView,n=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);if(c.delayingViewabilityEvents)d=a,e||(e=!0,t());else{n&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions);
var l=new D(a.data.viewport||{width:0,height:0}),q=new D(f[n?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),n=new D(f["onScreen"+(n?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:l.getRoundedGeometry(),originalAdContainer:q.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:p(f.reasons)};"undefined"===typeof c.geometryArrived&&h.checkForViewAttachmentBasedOnAdSessionType(c,
a.data.adView)&&(c.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}}},p=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&
c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},aa=function(){var a=m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},cd=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),
d=null,e=!1,f=new fa,t=function(){var a=q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(t,50)},n=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,t());else{var n=a.data.adView.geometry,l=a.data.adView.containerGeometry,q=!!n,v=a.data.adView.measuringElement&&!!l,n=(new D({x:q&&v?n.x-l.x:0,y:q&&v?n.y-l.y:0,width:q?n.width:0,height:q?n.height:0})).getRoundedGeometry();"undefined"===
typeof c.geometryArrived&&f.checkForViewAttachmentBasedOnAdSessionType(c,a.data.adView)&&(c.geometryArrived=!0,m.getAggregator().trigger("omidrendgeoupdate"));b.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:n,adFound:q})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},ad=function(){var a=
m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ja=function(a,b,c,d,e){var h=!1,t=!1,n,p,l,w,q,v=function(){if(!(f.isUndef(p)||f.isUndef(l)||f.isUndef(w))){q=!0;var a=e.calculateGeometricMeasurement(p,l),b=h&&t,c=h&&50<=a.percentageInView,m={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,
sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(m.percentageInView=100);b||c?m.viewState=k.IN_VIEW:(m.viewState=k.OUT_OF_VIEW,m.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);n=m;d.trigger("videoGeometryMeasurementChanged",n)}},s=function(a){p=a;v()},r=function(a){l=a;v()},F=function(a){w=a;a=a.eventType;"AdEnteredFullscreen"===a?t=!0:"AdExitedFullscreen"===a?t=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(h=!1);v()};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(r);b.start();c.addVideoPlaybackEventListener(F);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},
Fa=function(a,b,c){var d,e=function(){var b=a.find(),e,n,p=!1;f.isDef(b)?(n=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),n=!1);if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:n})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},hd=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},jd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,
sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},l=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},n=function(){c||l()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||r.containsScriptTagWithSrc("mraid.js"))b=!1;m.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},
"mi",{type:"impression"});b?m.getAggregator().trigger("exec","mraid.js",n):l()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},cb=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||m.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Ya=function(){var a=new O({tiv:[1E4]}),b=f([k.IN_VIEW,
k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=q.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Xa=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var m=[2E3,5E3,15E3],n=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};c?(c=new O({tiv:d}),d=d[0]):f?(c=new O({tiv:m}),d=m[0]):(c=new O({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},$a=function(a,b){var c;
c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],l=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new O({tiv:f}):d?new O({tiv:n}):new O({tiv:l});m.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,
isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},Za=function(a,b){return{timeInViewThresholds:new O({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},bb=function(a,b){var c,d,e,h=q.getMaxNumber(),m=b.isVideo(),n=a.id;d=
a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,u=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,n,l,u=b.adDimensions.area();l=1===b.tabHidden;var s=q.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;n=b.ub||h;if(u>=e&&u<=n)return!0});l=!l&&s>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(l=!1);m&&(l=l&&b.isVideoPlaying,p&&(l=l&&b.isSoundOn));
return l};c=new O(a);d=a.qiv;(function(){e={};var a;f.isDef(l.rts)&&f.isDef(l.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=l.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:u,isInViewIgnoringRender:function(a){return u(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},
ab=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),m=function(a,b){var c,k,n,m,l;c=f(b.mediaTypes).contains(d);k=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;m=K.contains(b.id,"fiv");l=K.contains(b.id,"groupmCM");m=!m;l&&(m=p);return m&&c&&k&&n};return{resolve:function(){var b=
[],c;n&&k&&(c=f(a.customViewability).filter(m),f(c).each(function(a,c){b.push(c)}));return b}}},O=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ia(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new ld;b.push(new md(c,parseInt(a[1].replace("%"))));b.push(new ia(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ia(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},ld=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:
b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};m.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ia=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},md=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=q.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&
(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},oa=function(a,b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},db=function(a,b,c,d){var e,h,k,n,p,l,q=function(a,b){return!b&&a},s=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},v=function(a){var m=0,q=1===a.tabHidden,v=a.isVideoPlaying,w=a.isSoundOn,I=a.isVideoPlayingInFullscreen;
f(a.sliceStatus).each(function(a,b){k(b,q,v,I)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});r("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){s(b,q,v,I)&&w?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),r("slcVtVol",p));l=d&&b&&b.shouldIncludeSound?p:n;a=f(l).findFirst(function(a,b){m=Math.max(m,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(m)},r=function(a,b){var c={};c[a]=b;m.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},I=function(a){!e&&a.sliceStatus&&(e=[],h=
[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new W(1));n.push(0);d&&(h.push(new W(1)),p.push(0))}))},F=function(a){f.isUndef(a.sliceStatus)||(e||I(a),v(a))};return{start:function(){k=d?s:q;a.addMeasurementChangedListener(F)}}},ma=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Hb=function(a,b,c,d,e,f,m,n,p,l){var w=!1,r=s.isVideo(),v=f.request("mobileApp"),H=X().applies(c,
e),I=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&e.on("rattie")||H,F=s.xDomainIframe&&!I,x=new xa(10),y=function(){e.on("viewabilityready")&&!w&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),w=!0)};f.on("delayedViewabilityReady",function(){z();y()});f.on("delayedViewabilityReadyCallOnly",y);var z=function(c){c=c||!1;try{x.start();var d,e;b.hasMeasurementStrategy()?e=v.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),
c):(e=n.collect(),v.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):F&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),r&&!s.isAvid()&&l.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);x.stop();var w=q.round(x.getTime()/x.getCount());m.addItem({output:w},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(H){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return e.on("everySecond")?
"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":r?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=s.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&H,d=!d&&!e&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},qd={name:"viewabilityLoopLifecycle",
dependencies:["viewability","features","context","browser"],creator:function(a,b,c,d){var e,h=nd(c),t=[new od,new pd(h)],n=function(){return f(t).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&m.getAggregator().trigger("adSessionComplete")},u=function(a){y.addEvent(x,a,function(){m.getAggregator().trigger("adSessionComplete")},!1)},w=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);m.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a=
{id:l.videoId,msg:"unloadComplete",messageType:"misc"};q.getWindow().postMessage(JSON.stringify(a),"*")})};m.getAggregator().once("startViewabilityLoop",function(){var b,c=m.getAggregator().request("mobileApp").isMobileAppEnvironment();m.getAggregator().request("ids").impressionIsIdentifiable()&&(e=ec(a.checkScreenLoc,h.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?s.isOmid()?m.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
u("beforeunload"))});m.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||w();m.getAggregator().trigger("unload");e&&e.stop();m.getAggregator().trigger("endAdSession");m.getAggregator().trigger("stopAdTalk")})},settings:{tier:k.TIERS.VIEWABILITY}},nd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},pd=function(a){var b,c,d,e,f,k=function(n){d&&!f&&1>n?(f=!0,q.setTimeout(function(){k(n)},
1E3)):(e=1>n,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){k(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){b=a;b.start(!0);m.getAggregator().on("IOPivChange",k);m.getAggregator().on("newScreenEvent",n)}}},od=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,q.setTimeout(function(){e(f)},1E3);else return 1>
f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);m.getAggregator().on("IOPivChange",e)}}},yd=function(a,b,c,d,e,h){var t,n,p,u,w,A,v,H,I,F=r.getElementsWindow(b);r.getElementsDocument(b);m.getAggregator().provide("iframeCalculatorHelper",rd(F));var z=sd(b,d),B=k.AD_IDENTIFIER+"-"+l.asid,C=!1,N=D({}),E=s.isDeviceTypeGroupMobile(),
G=s.usesGroupMCustomMetricMobilePassThru(),J,K=function(){if(!t)if(t=z.calcDims(b,d,p),c===k.DETECTION_METHODS.VIDEO&&s.embedded){var a=t,e=(new D(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){m.getAggregator().trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&t.treatAsPlaceholder();return t},O=function(){var b,d=s.xDomainIframe&&C;b=E&&C&&p.isReady();b=d||b;d=z.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&s.embedded||
s.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!E&&(s.friendly||f.isDef(x.mozInnerScreenX))&&e.on("offscreen"),H=K(),v=new D(r.calcWinDims()),A=new D(b?r.calcMonDims():{}),I=d?z.getClippedDims():N,n=a.calcPercentInView(H,v,A,I));return n},Q=function(){return a.calcInitialViewState(O())},T=function(){return b===x?!1:K().isHidden()};(function(){var c=q.getWindow(),d=q.getDoc(),e=b===c,f=d.body,h=m.getAggregator(),k=new X,n=h.request("browser"),l=h.request("features"),h=h.request("context"),t=!s.xDomainIframe,
d=e&&f?d.body:b;J=s.friendlyIframe?c.frameElement:d;y.addEvent(d,"click",function(){m.getAggregator().trigger("adComponentClicked")});y.addEvent(d,"mouseover",function(){m.getAggregator().trigger("adComponentMousedOver")});k.applies(n,l,h)?(p=Lc(b,t),p.start(),C=!0,G&&(c=new td(K().getRounded()),k=new ud,k=new vd(p.getObservedNode(),k),u=new wd(c.getSlices(),k))):G&&(w=new xd(a))})();return{mark:function(){r.setAttributeOf(J,B,"")},cleanup:function(){r.removeAttributeOf(J,B)},isNode:function(a){return b===
a},isHidden:T,isObstructed:function(){return!1},getDims:K,getPercentInView:O,getLocationState:Q,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return z.allowsOptimization?t:D(d)},refresh:function(){I=H=v=A=n=t=void 0;if(h){var a,c;if(!s.isDomless()&&(c=b.parentNode)){for(;b!==x&&c&&c!==L&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?
a=u.getSliceStatus():s.friendly&&w&&f.isDef(H)&&(a=w.getSliceStatus(H,v,A,I));return a}}},zd=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},l=function(n,p,l,u){var t=h()||0===c.length;n=yd(a,n,p,l,b,u);h()&&(u=c.shift(),e=f(c),u.cleanup(),d=void 0);c.push(n);e=f(c);t&&n.mark();t&&p!==k.DETECTION_METHODS.AD_PLACEHOLDER&&m.getAggregator().trigger("primaryadfound",n);p===k.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof l&&
m.getAggregator().trigger("addOutputItem",{output:l.nodeName},"spac")},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,f+=a/100*h)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(a){var b=m.getAggregator().request("adRenderStatus");return!a&&!b},u=function(a){var b;b=n();b=b.hasMeasurement?q.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=0;return b},w=
function(c){var d=b.bootstrapOn("mobOrTab"),d=n().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!s.isVideo();return a.calcInitialViewState(u(c),d)},r=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},v=function(a){return function(){return c[0]&&c[0][a]()}};m.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===r(b)&&l(b,k.DETECTION_METHODS.MUTATION)})});m.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=r(b);
-1<d&&c.splice(d,1)})});return{getDims:v("getDims"),isObstructed:v("isObstructed"),getDetectionMethod:v("getDetectionMethod"),getContainerDims:v("getContainerDims"),getViewState:w,getViewStateIgnoringRender:function(){return w(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:v("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:l,getOutOfViewReasons:function(a){var b,
e=[],f=c[0],h=k.OUT_OF_VIEW_REASONS;f&&(b=d||w(),p(a)?e.push(h.RENDER):b!==k.OUT_OF_VIEW&&b!==k.PARTIAL_VIEW_MINUS||e.push(h.GEOM),f.isHidden()&&e.push(h.HIDDEN),f.isObstructed()&&e.push(h.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:v("getSliceStatus")}},Ad=function(a){var b=!1;if(!f.isUndef(x.MutationObserver)){var c=new x.MutationObserver(function(a){q.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&
m.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&m.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;q.setTimeout(function(){b=!1},40)};m.getAggregator().on("adComponentClicked",d);m.getAggregator().on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(L.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},q.getDoc())}},Id=function(a,b){var c=[Bd(),Cd()],d=[ha(),Dd(),Ed(),Fd(),
Gd(),Hd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Ed=function(){var a,b,c,d=function(a){a?a&&c&&(q.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ea();var c=r.crossQuerySelector(ea().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},Jd=function(a,b){var c,d=r.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<r.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(c=d);return c},Gd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return x},isApplicable:function(){return s.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Kd=function(){var a,b=q.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return K.contains(b.src,
"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return r.crossQuerySelector(b,!0)})}catch(c){}return a}}},Ld=function(){return{isApplicable:function(a,b){var c;try{c=r.getFrameId()}catch(d){}return b.on("yieldmo")&&
c&&K.contains(c,"_tpi")&&r.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+r.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Md=function(){var a,b,c=q.getDoc(),d=function(){var b;a||(a=(b=(b=r.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=r.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,
isApplicable:function(a,b){var c=q.getWindow(),k=a.friendlyIframe&&q.getWindow().frameElement,k=k&&D(k).isOneByOne(),l=function(){var a=q.getDoc().scripts;return f(a).findFirst(function(a,b){return K.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&l&&c&&k&&d()&&e()},getCssSelector:e}},ea=function(){var a,b=m.getAggregator().request("features");a||(a=[Md(),Ld(),Kd()]);return f(a).findFirst(function(a,d){return d.isApplicable(s,
b)})},Fd=function(){var a,b=function(){q.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Aa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=r.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},
Aa=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&K.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&r.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ha=function(){var a=m.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=r.findChildWithLargestContent(q.getDoc().body);return a&&a.hasValidSizeForMobileApp&&
!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Cd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},find:function(){var b=r.crossQuerySelector(l._cl_adpath);b&&(a=r.getParent(b),1>r.getNodeArea(b)&&(a=b,b=r.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Bd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,
isApplicable:function(){return s.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(c=r.crossQuerySelector(d))a=r.getParent(c),1>r.getNodeArea(c)&&(a=c,c=r.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Hd=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Jd,getAdContainer:function(){return l.contextNode.parentNode},
allowForAdContainerChange:!0}},Dd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:m.getAggregator().request("video").findAdNode,isApplicable:s.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},sd=function(a,b){var c,d;c=[Nd(),Od(),Pd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Qd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},Pd=function(){return{calcDims:function(a,b){var c,d,e=new D(a);r.isClippable(a,
b)&&(c=r.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(s.isSpecifiedAd()||s.isBustedIframe())&&r.nodeIsInWindow(a,q.getTop());a=!r.elementIsEmbedded(a);return b||a}}},Od=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||
s.isBustedIframe())&&r.elementIsEmbedded(a)}}},Nd=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new D(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!r.nodeIsInWindow(c,q.getTop()),e=s.isCeltra()&&r.elementIsEmbedded(a);return d||e}}},Qd=function(){var a;return{calcDims:function(b,
c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=m.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},rd=function(a){var b,c,d,e=m.getAggregator().request("features"),h=m.getAggregator().request("browser");a=a||q.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,
width:q.getMaxNumber(),height:q.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,n=e.length;h<n;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=r.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=q.min(c.width,d.width),c.height=q.min(c.height,d.height)}catch(s){m.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==q.getTop()&&l(b.parent,c)}return c},n=function(){var n,u={};try{var w,A,v,x,y,z,B=q.getMaxNumber(),C=q.getMaxNumber();s.friendly?(w=l(),v=w.left,x=w.top,B=w.width,
C=w.height,A=r.browserWindowPosition(),y=A.scrX+v,z=A.scrY+x):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||m.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),y=c.scrX,z=c.scrY):f.isDef(a.mozInnerScreenX)&&(y=q.round(a.mozInnerScreenX),z=q.round(a.mozInnerScreenY));var u={scrX:y,scrY:z,iFrameClippingWidth:B,iFrameClippingHeight:C},D,N,E=b||r.getIeDimObj(a);b=E;f.isDef(a.innerWidth)?(D=a.innerWidth,N=a.innerHeight):E&&f.isDef(E.clientWidth)?(D=E.clientWidth,N=E.clientHeight,
0===D&&0<E.offsetWidth&&(D=E.offsetWidth),0===N&&0<E.offsetHeight&&(N=E.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(D=a.frameElement.clientWidth,N=a.frameElement.clientHeight);n=D;u.height=N;u.width=n}catch(G){m.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new D(n())},getClippedDims:function(){var a=n();return new D({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Bb=function(){return{createInstance:function(a,
b,c){return s.isDomless()?new Rd:new Sd(a,b,c)}}},Sd=function(a,b,c){var d,e=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,h=zd(b,c),m=function(){var a,b,e;d=d||Id(s,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){h.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;h.hasAd()||(a=r.getPlaceholderSpan(),e.insertBefore(a,l.contextNode.nextSibling),h.addAdComponent(a,
k.DETECTION_METHODS.AD_PLACEHOLDER,r.getParent(a)))};Ad(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?m():h.refresh();return h},getDetectionMethod:function(){}}},Rd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},kb=function(a){var b,c=[],d=a||x,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},
10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";
return d.avid.getHtmlVideoAvidAdSessionListener()}}},jb=function(a){var b=new Td,c=new Ud;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||s.isDomless()||s.isAvid()||s.isAvidNative())d=b.detect(),b.hasDetectedMobileApp()&&(c.detect(),m.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),m.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){m.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Vd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(s.isDomless())return!1;var b=q.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(s.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(L.referrer)}catch(k){}}try{"jsi"!==l.mode&&c.push(x.location.href)}catch(n){}try{c.push(l.jsref)}catch(m){}c.sort(function(a,b){return a.length>b.length?1:a.length<
b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,h,k,n="mobfox"===d?c:[b];for(k=0;k<n.length;k++){h=n[k];var l="string"===typeof d?[d]:d;if(f(l).isArray()&&(l[0].substring(0,4),l))for(var m=0;m<l.length&&(e=-1<h.indexOf(l[m]),!1!==e);m++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=q.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));
return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(K.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return r.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},La=function(){var a=function(a,c){var d,e=Vd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},
Wd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],
url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},
{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Td=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,
b){var c,f=La().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length?a="s_serv":(a=f(Wd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Ud=function(){var a=[],b=[],c=function(b,c){var f,k=La().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=
f(Xd).map(c);0<b.length&&m.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Xd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,
detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",
safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},
{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],td=function(a){var b=[],c=function(a,b,c){a*=c;return new U(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new U(0,a.width,0,a.height),
percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},S=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},
wd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),n=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new U(h,k,n,f))}});return c},e=function(a,b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);
d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([s.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=
[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},xd=function(a){var b=S();return{getSliceStatus:function(c,d,e,f){var k,n=[];k=c.getRounded();c=k.height;var l=k.scrY,m=new D({scrX:k.scrX,width:k.width}),s=b.getConfig(k).numberOfSlices;m.set("height",q.floor(c/s));for(var r=0;r<s;r++)m.set("scrY",q.ceil(l+c/s*r)),k=100===a.calcPercentInView(m,d,e,f),n.push(k);return n}}},U=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),n=Math.ceil(d),l=f-e,m=n-k,q=l*m,s=function(){return{leftX:e,
rightX:f,topY:k,bottomY:n,width:l,height:m,area:q}};return{value:s,doesIntersect:function(a){var b=s();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},ud=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},vd=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&
e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,m=d.left-f.left,f=d.top-f.top,f=new U(m,m+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new U(0,b,f[d],f[d+1]));h();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},
fa=function(){var a=function(a){var b=!1;Yd.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&
a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Yd=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Zd=function(){return{listenForResult:function(){m.getAggregator().on("videoBlockResult",function(a){var b=m.getAggregator().request("adNode"),c=!1,d="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},
$d=function(a,b){var c,d,e,h,k;e=m.getAggregator().request("videoTranslator").translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},
indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=q.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===h.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},
getVolume:function(a){return a.getVolumeFromContext(h)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?m.getAggregator().persistentTrigger(e,h,k):m.getAggregator().trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},ae=function(){var a=[];return{registerEvent:function(b,c,d){b=new $d(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===
a.length}}},be=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&m.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},l=function(a){a=(new Ma).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){m.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:l,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",
function(a){var c=m.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},ce=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ma=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},eb=function(a,b,c){var d="IASid"+
a,e="getIasVidBridgeVersion"+a,h,t,n,p=[],u=k.OUT_OF_VIEW,r=!1,A=!1,v=!1,x=!0,z=new ae,B=be(),D=new Zd,C=new Ma,G=new Ba,N=function(b){var d;r=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=z.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(A=!0,u=v?k.IN_VIEW:!1):d.indicatesNotPlaying()?(A=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,u=A?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(v=!1,u=A?!1:k.OUT_OF_VIEW),b=parseFloat(d.getVolume(C)),0<b?
x=!0:0===b&&(x=!1));p.push(d);n&&O();return d},E=function(b){var c,h,k=ka().wrapToGlobal(N),n=function(a){f.isStr(a)&&(m.getAggregator().provide("vc",function(){return a}),m.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),r=!0,n(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},K=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,
b){return f.isFunction(b[d])})};h||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=q.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return h},J=function(){var a=K();a&&!r&&E(a);return a},L=function(a){a=C.getVolumeFromContext(a);x=f.isDef(a)?0<a:!1},O=function(){G.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&
m.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&m.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),m.getAggregator().trigger("videoQuartileEvent",b)))});p=[];n=!0};(function(){y.addEvent(q.getWindow(),"message",function(a){N(a)});m.getAggregator().on({volumeChanged:L});m.getAggregator().provide({videoEventsString:z,videoVersion:function(){var a,b=J();try{a=b.getVersion()}catch(c){a=-1,m.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},
videoTranslator:function(){return t=t||new ce},adNode:J});J();D.listenForResult();B.isApplicable(s)&&B.start(c)})();return{findAdNode:J,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return r},triggerInitializationEvents:O,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=x;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=
c.join(".")}a.viewState=b?a.viewState:u;a.isVideoPlaying=u===k.IN_VIEW}v&&A&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},de=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Pb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():m.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new ya;d=0;e(!0);b.start()},l=function(d,e,k,l){d=c[d];l?(f.isDef(d[e])||
(d[e]=[]),d[e].push(k)):d[e]=k;b&&b.isActive()||h();a=!0},n=function(c,d,e){m.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(m.getAggregator().trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){m.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});m.getAggregator().on("addThrottledProp",l);m.getAggregator().on("addThrottledOutputItem",
n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Ub=function(){var a={},b=function(b){a[b]||(a[b]=new xa(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();m.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){m.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},ee=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},
zb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),m.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));m.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},Z=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},h=function(){var a,b={};
e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Ab=function(){function a(){}a.build=function(){var a=[];a.push(new Z(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=m.getAggregator().request("vc");var d={jv3:Na,av3:Na,jvw:ee,
avw:de};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Na=function(){return new Z(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){m.getAggregator().trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(x,"load",function(){m.getAggregator().trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new ya;a.onTick({4:function(){m.getAggregator().trigger("markTime",
R.IDS.IN_BROWSER_DELAY)},5:function(){m.getAggregator().trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});a.start()}},G={isFrameworkAvailable:function(a,b){var c,d,e=q.getTop(),f=q.getWindow();try{c=e[a]}catch(k){for(;!d;){try{f.frames[b]&&(d=frame)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=G.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),y.removeEvent(q.getWindow(),"message",d))}catch(f){m.getAggregator().trigger("error",
k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,b)}},fe={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&G.send(b,f(a).toION())}var b="ccd";(function(){var b=G.isFrameworkAvailable("__uspapi","__uspapiLocator");G.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:G.getCallId()}},e=G.getMessageHandler("__uspapiReturn",
a),y.addEvent(q.getWindow(),"message",e),b.postMessage(d,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},ge={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};
G.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=G.isFrameworkAvailable("__cmp","__cmpLocator");G.send("gca",!!c);if(c){var e,h;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:G.getCallId()}},h=G.getMessageHandler("__cmpReturn",a),y.addEvent(q.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},he={name:"GDPRV2ConsentDetector",
dependencies:[],creator:function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};G.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=G.isFrameworkAvailable("__tcfapi","__tcfapiLocator");G.send("gca2",!!c);if(c){var e,h;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:G.getCallId(),version:2}},
h=G.getMessageHandler("__tcfapiReturn",a),y.addEvent(q.getWindow(),"message",h),c.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}}},ie={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=q.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");q.execAtEndOfThread(function(){m.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}}},je={name:"safeFrameDetector",dependencies:[],creator:function(){m.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",f.stringifyTriState(s.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}}},Nb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,d=function(a){f(a).each(function(a,
b){m.getAggregator().trigger("notify",b)})},e=function(){var e;e=new P(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();m.getAggregator().trigger("jsonp",e,d,!0);m.getAggregator().trigger("updateDtCount")};return{start:function(){m.getAggregator().on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Ob=function(a,b,c,d,e,f,q){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var u,
r=d.baseUrl,x,v,y=f.getDocumentMode();"number"===typeof y?(v=2E3,8===y?v=4E3:8<y&&(v=8E3)):v=n(l.sp_imp_maxLength,2E3);x=v;if(s.integratedBlockingApplies(r)){v=r;var z=m.getAggregator().request("mobileApp"),B=z&&z.isMobileAppEnvironment&&z.isMobileAppEnvironment(),C=l.contextNode.getAttribute("data-ias-container"),D=l.contextNode.getAttribute("data-ias-callback"),z=v+"adContainerId="+C+"&cbFunctionName="+D,z=B?z.replace("monitoring","blocking"):z.replace("skeleton.js",l.integration+".js"),G=l.protocol+
":"+l.staticServer+l.integration+"a.js",K=l.protocol+":"+l.staticServer+l.integration+".js",r=z+"&true_pb="+encodeURIComponent(l.passback)+(B?"&redirectUrl="+encodeURIComponent(K):"")+(B?"&passback=":"&adsafe_pb=")+encodeURIComponent(G)+"&"}var B=r=r.replace(k.UNIQUE_ID_TOKEN,l.asid),E=r.length,L,J,O=n(l.sp_imp_jsInfo_minLength,0),G="";try{L=x-E-O,0<L&&(J=ke(p,L,14,b.on("partialUrls")),G+=J.join("&"))}catch(P){a.add(k.ERROR_CODES.IMPRESSION_URLS)}r=B+G;p=r+="&"===r.slice(-1)?"":"&";var Q,E="";try{Q=
x-r.length,E+=le(Q,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(R){a.add(k.ERROR_CODES.JSINFO),E+="adsafe_jsinfo=e:"+a.toString()}r=p+E;d.macroUrl&&(r+="&"===r.slice(-1)?"":"&",r+=d.macroUrl);u=r;d.sendImpression(u);l.impUrl=u;m.getAggregator().trigger("impressionsent")}catch(S){__IntegralASDiagnosticCall("impsend",S,l)}}}},le=function(a,b,c,d,e,h,t,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,
c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};s.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?q.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(q.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var r=a.viewState;b=e.getAvidIds();r=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+r,"em:"+s.embedded,"fr:"+s.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(r.push("abi:"+
b.bundleIdentifier),r.push("apn:"+b.partner),r.push("apv:"+b.partnerVersion));a=me(a,c,d,e,h,t,n);m.getAggregator().trigger("eligiblerender");return{primary:r,secondary:a}}())},me=function(a,b,c,d,e,h,t){var n=[],p=m.getAggregator().request("mPage");n.push("mn:"+l.mn);n.push("pt:"+function(){var b=t.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());n.push(f(h.params()).toParams());c.on("mrcAudit")&&!s.isDomless()&&n.push("dvs:"+q.getDoc().visibilityState);e.iterate(function(a,b){var c=
!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+l.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(q.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?n.push("oid:"+l.oid):n.push("uid:"+d.unq);n.push("v:19.8.115");n.push("sp:"+(l.isSplitMode?1:0));n.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(r.windowSize()).toArray().join(".")),
n.push("sr:"+f(r.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+b);return n},ke=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,
e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Lb=function(){return{isApplicable:function(a){a=q.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=q.getWindow();a=ne(a.navigator.plugins);var b=a.hash(),c=b.join(".");m.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});
b.length&&(a=a.decode(b),a=a.join("."),m.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},qe=function(a,b){return{start:function(){try{var c=oe(),d=c.getMethodName(a),e=new P(b.getEnabledScriptUrl(a)),f=pe,l=q.getDoc();(new f(l.body||l.head||l.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){m.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},oe=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),m.getAggregator().trigger.apply(null,
d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:k,features:b,context:s,dtBaseURL:l.dtBaseURL,spg:Oa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Sb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&qe(d,b).start()})}}},ne=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=K.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},
decode:function(b){var c,d;c=q.floor(q.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},pe=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=r.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,m;k=(new Date).getTime();m=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+
m}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Oa=function(a){var b=new wa;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();q.setTimeout(function(){a.isDtCallAlreadySent()||(m.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},q.round(1E3*q.random()))})})();(function(){m.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),q.setTimeout(a.sendToOtherTags,1300),q.setTimeout(a.sendToOtherTags,3200))})})()},re={name:"spg",dependencies:["spgCache"],creator:Oa,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}}},se={name:"spgCache",dependencies:[],creator:function(){var a=
["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,f(b).each(function(a,b){m.getAggregator().trigger("addOutputItem",b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),m.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&h()},isFull:d,sendToOtherTags:function(){(new da).send({scaInfoOriginatorASID:l.asid,
cache:b})}}},settings:{}},Qa=function(){for(var a=[ge,fe,he,zc,yc,wc,xc,uc,ie,je,fc,Mc,qd,se,re],b=0;b<a.length;b+=1)m(a[b].name,a[b].dependencies,a[b].creator,a[b].settings)};try{Pa()}catch(te){__IntegralASDiagnosticCall("main",te,l)}};try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
