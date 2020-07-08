

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
		version: '19.8.101',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.101.js"},
		protocol: 'https',
		jsref: "",
		asid: "12a02f84-c130-11ea-9692-0ed27e783753",
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
		mn: "app32va",
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
__IntegralASConfig.initialize=function(l,w,M){function Va(){var h,a,b;l.perf.markStart(na);m.startSystem();z=m.getAggregator();z.provide({omidAdSessionContext:{}});z.provide({omidAdSessionVerificationParameters:{}});h=Wa();a=oa();b=(new Xa).createInstance(h,a);z.provide({mErrors:h,mJsonp:a,mComm:b});h=__IASOmidVerificationClient;z.provide({omidVerificationClient:h});z.once("callContinueMain",function(){var a,b;l.perf.markStart(pa);b=Y.instantiateModules();a=Y.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,s,b.renderDetector);Y.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);Y.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,s);l.perf.markEnd(pa)});z.on("tryToCallContinueMain",function(a){l.isResolved?z.trigger("callContinueMain"):z.trigger("requestBootstrapper",
a)});z.once("requestBootstrapper",function(a){var b=l.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var e=a&&a.config,k=a&&a.sca,u=a&&a.xsca;e&&z.trigger("jsonp",b+"/jsconfig"+e+(l.adSessionId?"&adSessionId="+l.adSessionId:""),function(a){Object.assign(l,"string"===typeof a?JSON.parse(a):a);l.isResolved=!0;l.sp_cdnScripts={sca:k,xsca:u};z.trigger("callContinueMain")},!1,"cbName")});h=[{environment:new da(h),adSessionReadyStrategy:new Ya(h)},{environment:new Za,
adSessionReadyStrategy:new $a}];(new ab(h)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(na)}var z,Y=function(){function h(a){var b=new bb(a,s),c=new cb,d=new db(a,s),p=eb(a,s),r=(new fb(l,s,a)).resolve(),h=[b],D=[];p.applies()&&h.push(p);d.applies()&&h.push(d);c.applies(a,s)&&h.push(c);f(r).each(function(a,b){h.push(new gb(b,s));D.push(b.id)});0<D.length&&(z.trigger("addOutputItem",{output:D.join(".")},"scm",{type:g.IMPRESSION_EVENT}),z.trigger("addOutputItem",{output:D},"metricIdList",
{type:g.DT_CODES.UNLOAD,asION:!0}));return h}function a(a,b,c,d){var p=h(a);z.provide("viewabilityDefinitions",p);return f(p).map(function(r,p){var h,f,m;h=new qa(p,b);var l=(new hb(c,a,p.rts)).getCallbacks(),x=new ra(d.createPingJobs(p.type,p.timeInViewThresholds,l,p.metricId));p.sendOtherwiseInViewSignal&&(m=new qa(p,b,p.sendOtherwiseInViewSignal),f=new ra(d.createPingJobs(p.type,p.timeInViewThresholds,l,p.metricId,p.sendOtherwiseInViewSignal)));p.rtsCallbacks=l;p.thresholdType===g.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?
h=new ib(h,p,x,s.isVideo()):(h=new sa(h,new Z(p.minUnit),x),p.sendOtherwiseInViewSignal&&(f=new sa(m,new Z(p.minUnit),f,p.sendOtherwiseInViewSignal),f.start()));h.start();return h})}function b(a,b){var c=(new ea).accepts(),c=!s.isAvid()&&!c&&!s.isInMobiMraidVideo();return s.isVideo()&&c?jb(l.videoId,a,b):{}}function c(a,b,c,d,p,r,h,D,B,F){try{l.perf.markStart(ta),l.tpiLookupURL&&kb(h,D).init(l.tpiLookupURL),s.isDomless()||F.isStarted()&&F.sendOriginList(),m.runAll(),q.execAtEndOfThread(function(){var r;
try{l.perf.markStart(ua);r={output:(new Date).getTime()-p};a.addItem(r,"sinceFw",{type:g.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:g.DT_CODES.ADTALK});l.perf.markEnd(ua);var h,v;l.isSplitMode&&(v=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(lb,v));l.impUrl&&l.perf.markResource(mb,l.impUrl);h=l.perf.getData();z.trigger("addThrottledProp",g.DT_SLOT.IM,"prf",f(h).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(D){d.add(g.ERROR_CODES.ADTALK_DELAY)}}),
l.perf.markEnd(ta)}catch(E){d.add(g.ERROR_CODES.EVENT_LOOP_ONE)}}function d(a,b,d,n,p,r,h,f,g){var m;"true"!==l.minimizeCalls&&(m=(new Date).getTime(),q.execAtEndOfThread(function(){c(a,b,d,n,m,p,r,h,f,g)}))}return{instantiateModules:function(){var c,d,u,n,p,r,h,f,g={};l.perf.markStart(va);z=m.getAggregator();g.mFeatures=z.provide("features",nb());z.provide("mobileApp",function(){return c=c||new ob(g.mFeatures)});z.provide("avidJsClient",function(){return d=d||new pb(q.getWindow())});z.provide("context",
s);g.mBrowser=z.provide("browser",(new qb).createInstance());g.mErrors=z.request("mErrors");g.mIds=z.provide("ids",rb());g.iOutput=new sb(z);z.request("mJsonp");g.mComm=z.request("mComm");g.viewabilityMeasurement=(new tb(new ub(g.mIds),g.mFeatures,g.mBrowser)).create();if((n=z.request("omidAdSessionContext"))&&n.queuedOutputItems)for(r=0;r<n.queuedOutputItems.length;r++)z.trigger("addOutputItem",{output:n.queuedOutputItems[r].value},n.queuedOutputItems[r].code,{type:"impression"});g.mFeatures.on("swapids")&&
(l.oid=l.asid,l.asid=g.mIds.unq);g.mAdTalk=(new vb).createInstance(g.mFeatures);u=wb();n=xb(z);p=z.provide("mPage",(new yb).createInstance());g.mAncestorOrigins=zb();g.mPageUrls=z.provide("pageUrls",(new Ab).createInstance(g.mAncestorOrigins,q));r=z.provide("mScreenEvents",Bb());z.provide("ieXDomainViewability",Cb(g.mBrowser));h=Db(g.mBrowser);f=b(g.mFeatures,r);g.mVideo=z.provide("video",f);Eb(Fb.build());h=(new Gb).createInstance(g.mErrors,h,g.mFeatures);p=(new Hb).createInstance(h,g.mErrors,p,
s);f=z.provide("jobFactory",Ib());g.mDataTransfer=Jb(h,g.mErrors,g.mFeatures,g.mIds,g.iOutput,g.mBrowser,r,u);u=Kb(g.mErrors,g.mFeatures,z,n);g.mMode=Lb(u,g.mFeatures,g.viewabilityMeasurement.isImmediate());g.mViewability=z.provide("viewability",Mb(new H,g.viewabilityMeasurement,g.mBrowser,g.mDataTransfer,g.mFeatures,z,g.iOutput,p,r,g.mVideo));a(g.mFeatures,g.mViewability,n,f);g.loopDelay=wa();g.renderDetector=Nb();g.mDataTransfer.setViewabilityMod(g.mViewability);l.perf.markEnd(va);return g},preImpression:function(a,
b,c,d,p,r,h,f,B,m,E){var x,C,q,A,J;l.perf.markStart(xa);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";try{c.isApplicable(m)&&(c.start(),d.addItem(c.getFrameMap(),"fm"),B.on("fm2")&&d.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),B.on("idMap")&&(x=c.getIdMap())&&d.addItem(x,"idMap"))}catch(s){p.add(g.ERROR_CODES.ADTALK_GENERAL)}try{r.isApplicable(h,B,m)&&r.start(),J=f.detectTopURL(),B.on("exch")&&(C=(new Ob).createInstance(p,d),C.parse(J)),q=Pb(),q.isApplicable(B)&&
q.start(B),m.usesGroupMCustomMetric()&&Qb(),A=Rb(),A.isApplicable(B)&&(A.start(),z.trigger("sendCookie")),E.start()}catch(t){p.add(g.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(xa);return J},sendImpression:function(a,b,c,d,p,r,h,g,m){try{Sb(a,b,c,d,p,r,h).send(g),f.isFunction(m.triggerInitializationEvents)&&m.triggerInitializationEvents()}catch(F){__IntegralASDiagnosticCall("impsend",F,l)}},postImpression:function(a,b,c,n,p,r,h,f,B,F,E,x,C){try{l.perf.markStart(ya);var q=Tb();q.start();q.addFieldTypes([g.DT_SLOT.IM,
g.DT_SLOT.FF,g.DT_SLOT.ENVIRONMENT,g.DT_SLOT.FF_EXP]);var A=Ub(a,b,c);A.isApplicable(n)&&A.start();var s;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(s=Vb(p,r,h,b,f),s.init());d(f,B,F,h,n,p,r,b,x);E&&E.start&&E.start();C.isDomless()||Wb().start(["sca","xsca","rsrch"],n);Xb();m.runTier(g.TIERS.VIEWABILITY);var G=Yb();G.isApplicable(n)&&(G.start(),T.recordBlockingTime(),l.perf.mark(Zb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());l.perf.markEnd(ya)}catch(t){h.add(g.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(h){return new K(h)},K=function(h){this.iterable=h};K.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};K.prototype.isArray=function(){return this.iterable instanceof Array};K.prototype.isEmpty=function(h){return 0===this.keys(h).length};K.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};K.prototype.map=
function(h,a){var b=[];this.each(function(c,d){var e=h(c,d);if(void 0!==e||a)b[b.length]=e});return b};K.prototype.stringify=function(h,a){a=a||",";var b=[];this.each(function(a,d){var e=h(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};K.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(h,a);return d?n:(h[b]||b)+":"+n}));return c+b.join(",")+d};K.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};K.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};K.prototype._privateMixin=function(h,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};K.prototype.mapToObj=
function(h){var a={},b=this;this.each(function(c,d){var e=h(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};K.prototype.invert=function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};K.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};K.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};K.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};K.prototype.keys=function(h){var a=
[];this.each(function(b){a.push(b)},h);return a};K.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};K.prototype.selectProperties=function(h){var a={},b=this;f(h).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};K.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(f.isUndef(h)||f.resolve(h,a,c))d=c;return d},a)};K.prototype.toArray=function(){return this.map(function(h,a){return a})};K.prototype.JSONStringify=function(){var h,
a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};K.prototype.contains=function(h){var a=f(this.iterable).findFirst(function(a,c){return h===c});return f.isDef(a)};f.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=c?-h:h;do b=h%a,e.push(d[b]),h=(h-b)/a;while(0<
h);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(h){return"undefined"!==typeof h};f.isUndef=function(h){return!f.isDef(h)};f.isBool=function(h){return"boolean"===typeof h};f.noop=function(){};f.identity=function(h){return h};f.isFunction=function(h){return"function"===typeof h};f.isStr=function(h){return"string"===typeof h};f.useIfDef=function(h){return f.isDef(h)?h:!1};f.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};f.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);
return h};f.resolve=function(h){var a=f(arguments).toArray();a.shift();return f.isFunction(h)?h.apply({},a):h};f.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(h);return e};f.debounce=function(h,a,b){var c,d=b||w;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,k)},a)}};f.last=function(h){return h[h.length-1]};f.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=
a:b=h;return b};f.fromBoolToNum=function(h){return h?1:0};f.isNumeric=function(h){return f.isDef(h)&&null!==h&&!isNaN(h)};f.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};var m=function(){var h,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,p,r){r=r||{};var v,g,m=function(a){0===b.length&&(b=f(a).map(function(a,b){return h.request(b)}))},l=function(){if(!v){var a=[];v=!0;m(["features","browser","context"]);r.emits&&
(c.events=new H);if(!r.applies||r.applies.apply(r,b))g=!0,a=f(e).map(function(a,b){return h.request(b)},!0),a.push(c),f(c).mixin(p.apply({},a))}};(function(){var b=r.tier;f.isDef(b)&&(a[b]=a[b]||new fa,a[b].push(l))})();h.provide(d,function(){var a;l();g&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new za;f(c).each(function(a,b){e.apply({},
b)})};d.getAggregator=function(){return h};return d}(),g={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},
DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},
PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",
HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",
ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",
IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",
RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",
UNIQUE_ID_TOKEN:"[IAS_ASID]"},na="mf",pa="cm",va="in",xa="pr",ya="po",Zb="bl",ta="lo",ua="lt",lb="md",mb="id",$b=function(){var h,a,b=0,c=["STYLE","SCRIPT","HEAD","META"],d=g.RENDER.CREATIVE_NODE_TYPES.concat(g.RENDER.CONTAINER_NODE_TYPES),e=function(a){var b=t.getNodeName(a);a=k(a)||"IFRAME"===b;return b?a:!1},k=function(a){var b=t.getNodeName(a),c=a&&a.children&&0===a.children.length&&a.innerText&&0<a.innerText.length;return b?-1!==g.RENDER.CREATIVE_NODE_TYPES.indexOf(b.toUpperCase())||t.hasBackgroundImage(a)||
c:!1},u=function(a){return"HEAD"===t.getNodeName(l.contextNode.parentNode)?U(l.contextNode.parentNode.ownerDocument.body,a,e):U(null,a,e)},n=function(a){var b=[],e=(a=a&&a.getElementsByTagName&&a.getElementsByTagName("*"))&&a.length,k,u;if(a)for(var p=0;p<e;p++)u=(k=a[p])&&k.nodeName&&k.nodeName.toUpperCase(),!k.children||0!==k.children.length||f(d).contains(u)||f(c).contains(u)||f(b).contains(u)||b.push(u);return d.concat(b)},p=function(c){var d;h=h||l.contextNode.parentNode;if(c)if(t.isNodeXDomainIframe(c))d=
c;else if(k(c))d=c;else{h=c;d=p;var f;if((l.useFIF&&s.friendlyIframe||s.isSpecifiedAd())&&3>b)a:{var B=c,F,E,x,C,P=t.getNodeName(B);c=q.getTop()&&q.getTop().document;try{x=n(B);if(c&&B===c.body){f=null;break a}t.isWindow(B)?(F=u(x),F||(C="["+g.AD_IDENTIFIER+"-"+l.asid+"]",E=t.crossQuerySelector(C),a=E.parentNode,F=U(a,x,e))):("IFRAME"===P?B=B.contentWindow.document:a=B,x=n(B),F=U(B,x,e));void 0===F&&a&&a.parentNode&&(a=F=a.parentNode,b+=1)}catch(A){m.getAggregator().trigger("renderdiag",A)}f=F}else{f=
c;F=t.getNodeName(f);try{P=n(f),t.isWindow(f)?B=u(P,e):("IFRAME"===F&&(f=f.contentWindow.document,P=n(f)),B=U(f,P,e))}catch(J){m.getAggregator().trigger("renderdiag",J)}f=B}d=d(f)}else d=null;return d};return{find:p,getClosestContainerName:function(){return t.getNodeName(h)}}},Nb=function(){var h,a,b=!1,c={status:g.RENDER.STATUS.OTHER,details:g.RENDER.DETAILS.OTHER},d={status:g.RENDER.STATUS.DETECTED,details:g.RENDER.DETAILS.ENVIRONMENT},e=m.getAggregator().request("omidAdSessionContext"),k=function(){b=
!0},u=function(a){a&&(a.status=g.RENDER.STATUS.DETECTED);m.getAggregator().trigger("adRendered")},n=function(){var a=!1;s.isOmid()&&e&&e.useOMID13Logic&&(a=!0);return a},p=function(a){var b={},c=q.getDoc(),d=function(e){var k=e&&e.type;if("readystatechange"===k&&"complete"===e.target.readyState||"load"===k)u(b),h.saveNode(a),"readystatechange"===k?h.save(g.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===k&&h.save(g.RENDER.DIAGNOSTIC.LOAD_FIRED),D(b),y.removeEvent(a,"load",d),y.removeEvent(c,"readystatechange",
d)};"complete"===c.readyState?(u(b),h.saveNode(a),h.save(g.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(y.addEvent(a,"load",d),y.addEvent(c,"readystatechange",d));return b},r=function(){var a=q.getWindow().mraid,b=a&&a.getState&&a.getState(),d=function(){y.removeEvent(a,"ready",d);h.save(g.RENDER.DETAILS.ENVIRONMENT);h.save(g.RENDER.DIAGNOSTIC.MRAID_READY);u();D({status:g.RENDER.STATUS.DETECTED})};h.save(g.RENDER.DETAILS.ENVIRONMENT);"default"===b?(u(),h.save(g.RENDER.DIAGNOSTIC.MRAID_DEFAULT),c.status=g.RENDER.STATUS.DETECTED):
"loading"===b?(y.addEvent(a,"ready",d),h.save(g.RENDER.DIAGNOSTIC.MRAID_LOADING)):(y.addEvent(a,"ready",d),h.save(g.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));D(c)},f=function(a){a===g.RENDER.STATUS.DETECTED&&m.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},D=function(a){var d=h.build();a=a.status||c.status;d=d?d:c.details;b&&a===g.RENDER.STATUS.DETECTED?(f(a),m.getAggregator().trigger("addThrottledOutputItem",
"rend",a),m.getAggregator().trigger("addThrottledOutputItem","renddet",d)):(f(a),m.getAggregator().trigger("addOutputItem",{output:a},"rend"),m.getAggregator().trigger("addOutputItem",{output:d},"renddet"))},B=function(){m.getAggregator().on("primaryadfound",function(a){var b,d=c,e=new $b,k=!0,n=function(){var c=a&&a.getAdNode(),n=e.find(c);if(t.isNodeXDomainIframe(n))b?q.clearInterval(b):k=!1,d=p(n);else if(n){var c=!1,r=t.getRect(n);n&&"IMG"===t.getNodeName(n)&&(c=0===n.naturalWidth||0===n.naturalHeight);
!c&&r.width>=g.RENDER.WIDTH_THRESHOLD&&r.height>=g.RENDER.HEIGHT_THRESHOLD&&(u(d),b?q.clearInterval(b):k=!1);h.saveNode(n)}else n=e.getClosestContainerName()||h.getAdNodeName(c)||d.details,h.save(n);D(d)},f=m.getAggregator().request("mobileApp");f&&f.isMobileAppEnvironment&&f.isMobileAppEnvironment()&&s.isMraid()?r():(n(),k&&(b=q.setInterval(n,500)));m.getAggregator().trigger("eligiblerender")})},l=function(){a&&(a.stop(),a=null)},E=function(){var a=e&&e.isVideo;return e&&e.geometryArrived&&(!a||
e.videoStartArrived)?(l(),m.getAggregator().trigger("eligiblerender"),h.save(g.RENDER.DETAILS.ENVIRONMENT),h.save(g.RENDER.DIAGNOSTIC.OMID_RENDERED),u(),D(d),!0):!1};return{start:function(){var b=!1;m.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:q.now(),code:"initial"});m.getAggregator().on("adRendered",function(){b=!0});m.getAggregator().provide("adRenderStatus",function(){return b});h=new ac;new bc;m.getAggregator().on("impressionsent",k);m.getAggregator().on("adSessionComplete",
l);n()?E()||(a=Aa(E,500),a.start(),h.save(g.RENDER.DETAILS.ENVIRONMENT),h.save(g.RENDER.DIAGNOSTIC.OMID_UNRENDERED),D(c)):s.isAvid()||s.isOmid()||s.isVideo()?(m.getAggregator().trigger("eligiblerender"),h.save(d.details),u(),D(d)):(D(c),B())}}},ac=function(){var h=[],a=[],b=function(a){var b;if(t.isWindow(a))b="WINDOW";else if(t.isNodeXDomainIframe(a))b="XIFRAME";else try{b=t.getNodeName(a)}catch(k){c("nen")}return b},c=function(a){h.push(a)};return{build:function(){var b=[];f(a).each(function(a,
c){b.push(c)});f(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:b,save:c,saveNode:function(d){try{var e=d&&b(d),k=d&&t.getRect(d),u=d&&"IMG"===e,n=d&&t.hasBackgroundImage(d),p=d&&d.innerText&&0<d.innerText.length,r=d&&d.children&&0===d.children.length&&p,h=k&&k.width>=g.RENDER.WIDTH_THRESHOLD&&k.height>=g.RENDER.HEIGHT_THRESHOLD?g.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:g.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE,f=(n||u)&&(0===d.naturalWidth||0===d.naturalHeight);a.push(e);a.push(h);
f&&a.push(g.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&a.push(g.RENDER.DIAGNOSTIC.STYLED_NODE);r&&a.push(g.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(m){c("sne")}}}},bc=function(h){var a,b=!1,c=!1,d=function(){m.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&!c&&(__IntegralASDiagnosticCall("renderloop",a),m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"rle",1),c=!0)};m.getAggregator().on("eligiblerender",function(){b=!0;d()});m.getAggregator().on("renderdiag",
function(b){a=b;d()});d()},aa=function(){return{applies:function(h,a){var b=m.getAggregator().request("mobileApp"),c=!a.bootstrapOn("mobOrTab")&&h.browserIs(g.BROWSERS.WEBKIT);return(h.browserIs(g.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||(a.on("mobSafIO")?h.browserIs(g.BROWSERS.WEBKIT):c)||h.browserIs(g.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Qb=function(){var h,a,b=!1,c=m.getAggregator().request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,m.getAggregator().trigger("sendDt",
g.DT_CODES.LARGE_BILLABLE))};m.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=g.MRC_LARGE_AD_SIZE;d()});m.getAggregator().on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},wb=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};m.getAggregator().on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=s.getTagTime(),h.push(d));f(a).mixin(c)});return{toString:function(){return f(h).toION(b)}}},
za=function(){var h=new cc,a=new H;return f(h).mixin(a)},H=function(){var h={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){h[a]=h[a]||new fa;h[a].push(b,c)};return{on:function(a,e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();
c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=h[b])&&k.run.apply({},c)}}},ga=function(){var h=function(a,c,d){var e,k=c.length,u=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&t.isWindow(e)&&(c[k]=a,h(e,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},
fa=function(){var h=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(h).each(function(b,c){c.apply({},a)})}}},ra=function(h){var a={};return{doEligibleJobs:function(b){f(h).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ba=function(){var h,a=new ha,b=function(b,d,e,k){var u,n,p,r;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),n=b.source,r=f.noop,d(u)&&
(k&&(p=k(n,u))&&(r=function(){a.send(function(){return p},n)}),e(b,u,r))}catch(h){u&&m.getAggregator().trigger("error",g.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){h=function(k){b(k,a,d,e)};y.addEvent(w,"message",h)},stop:function(){h&&y.removeEvent(w,"message",h);h=null}}},ha=function(){var h=function(a){return f(a).isObj()?[a]:(new ga).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&
JSON.stringify){var d=h(c);f(d).each(function(c,d){var u;u=f.resolve(b,d)||{};u.sentTime=q.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},dc=function(h,a){return{onAll:function(b){var c={};f(a).each(function(d,e){h.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},sb=function(h){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=
f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var p=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),
e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),f.isFunction(b)?b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},cc=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?h[b]=c:f(b).each(a);return c}}},Hb=function(){return{createInstance:function(h,a,b,
c){return s.isDomless()?new ec:new fc(h,a,b,c)}}},fc=function(h,a,b,c){var d;return{collect:function(){var a=h.find(),k=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:I(t.calcWinDims()),p=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:g.NA,posViewState:g.NA,embedded:s.embedded,winDimensions:n,adDimensions:p};!0===u&&k.push(g.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),
viewState:k.length?g.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},ec=function(){return{collect:function(){return{}}}},gc=
function(h){h=h||f.identity;var a=[],b=q.now(),c=function(){var c=q.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=h(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},Ca=function(h,a){var b=h||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=q.now())},stop:function(){var u=e||a;0===c%b&&(k+=q.now()-
u,d++);c++},getTime:function(){return k},getCount:function(){return d}}},Da=function(){var h,a=0,b=0,c=new H(!0),d=function(){h&&(a++,c.trigger(a),b>a?q.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){h||(h=!0,q.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Aa=function(h,a){var b,c=a,d=function(a){b||(a&&h(),b=q.setInterval(h,c))},e=function(a){a&&
h();q.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},Z=function(h){var a,b,c=0,d=s.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=s.getTagTime();k=!1},mark:function(){a=k?s.getTagTime()-d:0;c+=a;c>=h&&(b=c-a<h,e+=b?c:a);d=s.getTagTime();k=!0}}},S=function(h,a){var b=h||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),
c=b[1],d=b[2],e=b[3],k=b[4],u=b[5],n=h?b[6]:"",p=a?b[7]:"",r={},v=function(a){f.isDef(a)&&(k=a);return k},g=function(a){f.isDef(a)&&(u=a);return u},m=function(a,b){return a+"="+f(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=r[b])?r[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:c,hostname:e,sub:v,master:g,setParam:function(a,b){r[a]=r[a]||{};f(b).isObj()?f(r[a]).mixin(b):r[a]=b},path:function(a){n=
a},toString:function(){var a=v()?v()+".":"",b=n?"/"+n:"",c;p||!f(r).isEmpty()?(c=f(r).isEmpty()?"":f(r).stringify(m,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+g()+b+c}}},Xb=function(){var h=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var b,c;try{if(s.friendly&&!s.isMobileApp())if(b=m.getAggregator().request("adSlotIds"))c=b;else{var d,e;if(d=
t.getOurNodeInTop()){var k=t.getAncestorNodes(d);e=f(k).map(a)}if(b=e=e&&h(e))m.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:g.DT_CODES.ADTALK,asION:!0}),m.getAggregator().provide("adSlotIds",b),c=b}return c}catch(u){m.getAggregator().trigger("error",g.ERROR_CODES.AD_SLOT_ID)}}()};m("AdRefreshDetection",[],function(){var h=[30,45,60,90],a={start:function(){var a=this,c=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;c&&d&&(this.recordAdSlotImpression(c,
d,e,function(c,d){c?m.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var k=d.exec(a[e]);k&&3===k.length&&"chanId"===k[1]&&(c=k[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;m.getAggregator().trigger("addThrottledProp",
g.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,d,e){var k=q.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);k.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var d=this,e=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,k=q.getTop();if(e&&this.adRefreshIntervalIsValid(e))m.getAggregator().on("sendDt",
function(u,n){u===g.DT_CODES.PING&&n===e&&(q.execAtEndOfThread(function(){k.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"ir",a);m.getAggregator().trigger("adSessionComplete")}};s.isRefreshable(function(b,c){var d;if(!b&&c)try{d=JSON.parse(c),d.isRefreshable&&d.adServerName&&a.start()}catch(e){m.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH)}});
return a},{tier:g.TIERS.ENVIRONMENT,applies:function(h,a,b){return b.isPossiblyRefreshable()}});var zb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=q.getWindow().location.ancestorOrigins,a=!0}catch(b){m.getAggregator().trigger("error",g.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return f.last(h)},sendOriginList:function(){var a;a="ao:"+(h?f(h).map(b).reverse():[]).join(",");m.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:g.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});m.getAggregator().trigger("sendDt",g.DT_CODES.THIRD_PARTY)}}},Vb=function(h,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var k=d.length,p=0,r=0;e(k,
0,0);f(d).each(function(a,b){h.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(k,p,++r)},!0);e(k,++p,r)})}catch(v){b.add(g.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;h.jsonp(a,k)}catch(c){b.add(g.ERROR_CODES.AT_INIT)}}}},Kb=function(h,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(e){h.add(g.ERROR_CODES.BAPI_CALLBACK),
b.trigger("sendDiag","bapiClient")}}}},qb=function(){return{createInstance:function(h,a,b,c){return s.isDomless()?new hc:new ic}}},ic=function(){var h=g.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=q.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=h.OPERA:f.isDef(b.mozInnerScreenY)?a=h.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=h.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=h.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=h.IE:f.isDef(b.WebKitPoint)&&
(a=h.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=q.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=q.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=q.getWindow();return!(!a||!f.isFunction(a.postMessage))},getDocumentMode:function(){var a=q.getDoc();return a&&a.documentMode?
a.documentMode:g.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var k=g.NA,u=q.getDoc(),n=u.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in u.documentElement.style)k="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<e.length&&!(k=n.getComponentVersion(e[u],"componentid").replace(/,/g,"."));u++);}catch(p){}e=k;k=g.NA;n=q.getWindow();
f.isDef(n.navigator)&&f.isDef(n.navigator.appName)&&(k=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:e,an:k}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],k=function(){return f(b).findFirst(function(b,c){return O.contains(a,c)})};return O.contains(a,"Android")&&k()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},hc=function(){var h=function(){return!1},
a=function(){return g.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,isAndroidWebViewBrowser:h}},Xa=function(){return{createInstance:function(h,a){return s.isDomless()?new jc(a):new kc(h,a)}}},lc=function(){var h,a=function(a,c){var d="",e="",k=q.getDoc().getElementsByTagName("ins");if(k&&0<k.length){e=k[0];d="<ins";
for(k=0;k<e.attributes.length;k++)d+=" "+e.attributes[k].nodeName+'="'+e.attributes[k].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+c+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=m.getAggregator().request("omidAdSessionContext");var c=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!s.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){h=m.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,k=l.adWidth&&0<l.adWidth?l.adWidth:0,u=l.adHeight&&0<l.adHeight?l.adHeight:0,n=q.getDoc().getElementsByTagName("ins"),
p;p=e=0;n&&0<n.length&&(p=n[0],e=parseInt(p.style.width),p=parseInt(p.style.height));k=e||k||window.innerWidth;u=p||u||window.innerHeight;"complete"===q.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=q.getDoc().createElement("IFRAME"),e.id=c,e.src="about:blank",d.appendChild(e)):q.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(d=q.getDoc().getElementById(c))d.style.width=k+"px",d.style.height=u+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",
d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(c,b)),d.close())}}},kc=function(h,a){var b=function(a,b){function c(a,b,d){"script"!==a?(b=M.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=M.createElement("SCRIPT"),d.src=b);l.contextNode.parentNode.appendChild(d)}var d,e;b=b||a;a=1<arguments.length?a:"script";d={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=d[0]+b+d[1];s.isOmid()?(e=new lc,e.isApplicable(b)?e.deployBlockingScriptIntoIframe(b):c(a,b,d)):"true"===l.forceAppend?c(a,b,d):M.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=t.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=M.createElement("script");c=c||l.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=
b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),c(a,void 0,!0))},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};m.getAggregator().on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},jc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";m.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);m.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){m.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},e=function(a,b,d,e){c(h.wrap(a,b,d,e))};m.getAggregator().on({addNode:a,send:b,exec:c,notify:d,jsonp:e});
return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},s=function(){var h="undefined"===typeof window,a="undefined"!==typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(h)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return h||f.isDef(q.getWindow().mraid)},d=function(){return!h&&f.isDef(q.getWindow().mraid)},e=function(){var a=!1;if(!h)var b=(a=q.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=d()&&!!a;return a},k=function(){var a;
if(!(a=-1!==l.mode.indexOf("jsvid"))){var b;a=!1;var c=m.getAggregator();if(!h&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===g.MEDIA_TYPE.VIDEO}catch(d){}(b=a)||(c=m.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===g.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},u=function(){return l.mobOrTab},n=function(a){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(b,
c){return O.contains(c.id,a)}).length},p=function(){return n("grpm")||l.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(h)a=!0;else{try{c=S(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return q.now()-l.birthdate},getPageTime:function(){var a=g.NA;!h&&f.isDef(w.chrome)&&f.isDef(w.chrome.csi)&&f.isFunction(w.chrome.csi)&&(a=q.round(w.chrome.csi().pageT));return a},isVideo:k,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;h||(a=(a=l._cl_adpath)&&f.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;h||(a=b.exec(l._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!h&&f.isDef(q.getWindow().avid)},isOmid:function(){var a=m.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new ea).accepts()},isOmidForWeb:function(){return(new Ea).accepts()},isDomless:function(){return h},
isAvidNative:function(){var a=!1,b=m.getAggregator();h||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===g.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===g.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;h||(a=void 0!==ia());return a},isMraid:d,isSafeFrame:function(){var a=!1;h||(a=f(q.getWindow().$sf).isObj(!1)&&f(q.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||
l.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;h||(a=Fa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&u()},usesZeroPivCustomMetric:function(){return!1===f(l.customViewability).isArray()?!1:0<f(l.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=q.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!h&&!c()&&!k()&&a&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;l.contextNode&&f.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),e=(e=l.contextNode.getAttribute("data-ias-callback"))&&f.isFunction(q.getWindow()[e]));var k=f.isDef(JSON)&&
f.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var u=!0===l.fwMonitoring||"true"===l.fwMonitoring;k&&a&&("true"===c&&"true"!==d&&e?(b=!0,u&&m.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,u||m.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b}}}(),y={addEvent:function(h,a,b,c){f.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",y.mouseEnter(b),
c):"mouseleave"===a?h.addEventListener("mouseout",y.mouseEnter(b),c):h.addEventListener(a,b,c):f.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){f.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),h.removeEventListener(a,b)):f.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(h){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,
c)||h.call(this,b)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==h;)a=a.parentNode;return a===h},getStyle:function(h,a,b){var c="",d=M.defaultView&&M.defaultView.getComputedStyle;b=b||"";d?c=(h=M.defaultView.getComputedStyle(h,b))?h.getPropertyValue(a):c:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=h.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;f.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):f.isDef(XDomainRequest)&&
(b=new XDomainRequest);return b},whenReady:function(h,a){if(s.isDomless())q.setTimeout(function(){h()},50);else{var b=a||(s.xDomainIframe?M:q.getTop().document),c=function(a){var c=q.setInterval(function(){b.body&&(q.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(M.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?q.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(h)}},isSandboxed:function(h){var a,
b=q.getWindow(),c=!1;if("sandbox"in q.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)h=a.hasAttribute("sandbox");else{a=!1;b=q.getDoc();if(h.browserIs(g.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}h=a}c=h}return c},styleElement:function(h,a){if(h&&f(h.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===
y.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},ba=function(h){var a,b=ba.callTypeCounter,c=[g.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=g.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],
d=b&&b[h];f.isDef(d)&&0!==d&&f(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=f.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};ba.callTypeCounter={};var Jb=function(h,a,b,c,d,e,k,u){var n=0,p=0,r=!1,v=function(a,e,u,h,v,D){u=u||!b.on("postDts");var s=a===g.DT_CODES.DIAGNOSTIC||a===g.DT_CODES.ADTALK||a===g.DT_CODES.SCA||a===g.DT_CODES.XSCA||a===g.DT_CODES.EXTERNAL||a===g.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(s||"n"!==k.getCurrentLoc()))try{var t=l.dtBaseURL,L=new S(t,!0),
w=q.now();m.getAggregator().trigger("preSendDt",a);t||(L.path("dt"),b.on("usedtdomain")&&L.sub("dt"));B(L,a,e);v&&v.field&&L.setParam(v.field,v.value);h||F(L,a);m.getAggregator().trigger("send",L,function(){p+=1;n=q.now()-w;f.isFunction(D)&&D()},u);a===g.DT_CODES.UNLOAD&&(r=!0);d.cleanup()}catch(y){__IntegralASDiagnosticCall("dt-"+a,y),m.getAggregator().trigger("error",g.ERROR_CODES.PHONE_HOME)}};h=function(){r||v(g.DT_CODES.UNLOAD,-1,!0)};var D=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",
jss:"d",jsi:"e"},e=l.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&v(g.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},B=function(a,b,e){var k=new ba(b);e=f.isDef(e)?e:k.enumerator;a.setParam("asId",l.asid);e={c:c.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},F=function(c,h){var f,r={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,
b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();if(h===g.DT_CODES.CUSTOM||h===g.DT_CODES.UNLOAD||h===g.DT_CODES.VIDEO_EVENTS||h===g.DT_CODES.FULLY_INVIEW||h===g.DT_CODES.PING||h===g.DT_CODES.VIEWABILITY_READY||h===g.DT_CODES.ADTALK)r.clog=u,s.isVideo()&&(f=s.isOmid()&&!s.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(f=m.getAggregator().request(f))&&!f.isEmpty()&&(r.ve=f));h===g.DT_CODES.UNLOAD&&(r.ndt=p);-1!==l.mode.indexOf("jsvid")&&(r.vv=m.getAggregator().request("videoVersion"));
r.NULL1=b.output();r.NULL2=k.stringify(10);r.em=s.embedded;r.fr=s.friendly;r.e=a.toString();r.tt=l.mode;r.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},r);c.setParam("tv",r);c.setParam("br",e.getBrowserType())};m.getAggregator().on({sendDt:function(a,b,c){v(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){v(a,b,void 0,!0)},sendDiag:D,updateDtCount:function(){p++},unload:h});return{send:v,unload:h,
diagnostic:D,setViewabilityMod:function(a){}}},I=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?t.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=q.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return q.round(a.width)*q.round(a.height)};(function(){var b;h!==w.parent&&(1!==h.nodeType?a=h:f.isDef(h.getBoundingClientRect)&&(b=t.getRect(h),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};f(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?q.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=
g.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},t={findElementsWithSize:function(h){var a=[],b=function(c){1>t.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),b=0!==parseInt(y.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;h="hidden"===y.getStyle(h,"visibility");return b||a||h},calcWinDims:function(){var h,a,b;try{a=t.browserWindowPosition(),b=t.windowSize(),h={scrX:q.round(a.scrX),scrY:q.round(a.scrY),
width:q.round(b.width),height:q.round(b.height)}}catch(c){m.getAggregator().trigger("error",g.ERROR_CODES.GET_WIN_DIMENSIONS),h={}}return h},windowSize:function(){var h={},a,b;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))h.width=top.innerWidth,h.height=top.innerHeight;else if(f.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(f.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;
else throw h.width=h.height=0,"";else f.isDef(w.outerWidth)&&(h.width=w.outerWidth,h.height=w.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;f.isDef(w.screenX)?(h=w.screenX,a=w.screenY):f.isDef(w.screenLeft)&&(h=w.screenLeft,a=w.screenTop);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=t.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},b=t.browserWindowPosition();h=h.getBoundingClientRect();f.isUndef(h.x)&&(a.x=h.left,a.y=h.top);f.isUndef(h.width)&&
(a.width=h.right-h.left,a.height=h.bottom-h.top);f(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&f.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=M.createElement("span");f(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=s.friendly&&q.getTop().Image;return f.isFunction(h)?
new h:new Image},createHiddenIframe:function(h){var a=q.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,h?{display:"none"}:b);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var b,c,d,e=1E4,k=1E4;b=y.nodeIsAbsolutelyPositioned(h);d=!t.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!b&&d&&!t.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,b=!t.tagNameIs(d,
"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=t.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==M&&d!==a)}return{width:q.round(e),height:q.round(k)}},hasBackgroundImage:function(h){h=y.getStyle(h,"background-image");return""!==h&&"none"!==h},findChildWithLargestContent:function(h,a,b){var c=m.getAggregator().request("mobileApp").isMobileAppEnvironment(),d=this.hasBackgroundImage,e=function(a){for(var b=a;a.parentNode!==h&&"inline"!==y.getStyle(a.parentNode,
"display");){var d;if(!(d=!c)){d=a.parentNode;var e=!0;if("visible"===y.getStyle(d,"overflow")||"visible"===y.getStyle(d,"overflowX")&&"visible"===y.getStyle(d,"overflowY"))e=!1;d=e}d&&(b=a.parentNode);a=a.parentNode}return b},k=null,u=function(a){var c,e,k=null,u=-1;if(a.length)for(c=0,e=a.length;c<e;c++){var g=a[c],m=t.getNodeArea(g),l;if(f.isFunction(b))l=b(g);else{l=g;var x=void 0;if(x=l.parentNode===h)if(x=void 0,x="DIV"===l.nodeName)if(x=void 0,x=!d(l))if(x=void 0,!(x="0"===y.getStyle(l,"opacity")||
"hidden"===y.getStyle(l,"visibility"))){var C=x=void 0;l=l.childNodes;for(x=0;x<l.length;x++)1===l[x].nodeType&&(C=!0);x=!C}l=!x}var q;try{var C=x=void 0,s=!1,J=g&&"IFRAME"===g.nodeName&&g.contentDocument;g&&g.parentElement&&"teads-player"===g.parentElement.classList.item(0)&&J&&(C=(x=J.body)&&1>x.childElementCount)&&(s=!0);q=s}catch(G){q=!1}m>u&&l&&!q&&(k=g,u=m)}k&&(k.hasValidSizeForMobileApp=1<u);return k}(function(b){var c,d,e,k,u=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<
d;c++){e=h[c].toLowerCase();var f=b.getElementsByTagName&&b.getElementsByTagName(e);if(f&&f.length)for(e=0,k=f.length;e<k;e++)u.push(f[e])}return u}(h));u&&(k=f.isFunction(b)?u:e(u),k.hasValidSizeForMobileApp=u.hasValidSizeForMobileApp);return k},screenSize:function(){if(s.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{f.isDef(w.screen)&&(h={width:w.screen.width,height:w.screen.height})}catch(a){}return h},calcMonDims:function(){var h=f(t.screenSize()).mixin({scrX:0,scrY:0});
f.isDef(screen.availLeft)&&(h={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return h},getOurIFrameInTop:function(){for(var h,a=q.getTop(),b=q.getWindow();b!=a;)h=b,b=h.parent;return h},getOurNodeInTop:function(){var h;s.friendly&&(h=s.embedded?(h=t.getOurIFrameInTop())&&h.frameElement:l.contextNode);return h},getAncestorNodes:function(h){var a=[],b=h.ownerDocument&&h.ownerDocument.documentElement;if(b)for(;h.parentNode!==b;)a.push(h),h=h.parentNode;
return a},getTagsNamed:function(h,a){var b,c=a||q.getDoc();try{b=c.getElementsByTagName(h)}catch(d){b=null}return b},containsScriptTagWithSrc:function(h){return!!f(t.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=f.isDef(h)&&f.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(h,a){var b;try{b=h.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(h,a){return h.ownerDocument&&
(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,b){h&&f.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&f.isFunction(h.removeAttribute)&&h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[l.contextNode.parentNode,q.getDoc()];s.friendly&&d.push(q.getTop().document);if(a&&s.embedded)try{d.push(q.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=t.querySelector(d,h)}catch(e){}!b&&
c&&(b=c)});return b},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=t.getTagsNamed("iframe",h))&&(a=f(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var h=q.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var b=h.innerWidth,c=h.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},
getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,b){h=h&&t.getAttribute(h,a);return b.test(h)},isImageTag:function(h){return h&&h.src&&t.tagNameIs(h,"img")},getDimensionFromStyle:function(h){var a,b=y.getStyle(h,"width");h=y.getStyle(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=t.getAttribute(h,"width");h=t.getAttribute(h,"height");b&&h&&(a={width:f.getNum(b),height:f.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,
c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),e="hidden"!==y.getStyle(b,"overflow")&&!d;s.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=t.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==
q.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===t.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Wa=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};m.getAggregator().on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Ob=function(){return{createInstance:function(a,b){return s.isDomless()?new mc:new nc(a,b)}}},nc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,k=c(d),u=k&&k.length&&k.join("|"),n=l.exchList;u&&(e=f(n).map(function(a,b){return 0<=u.indexOf(O.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:g.IMPRESSION_EVENT}))}catch(p){a.add(g.ERROR_CODES.EXCHANGE_PARSING)}}}},mc=function(){return{parse:function(a){}}},nb=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*q.random());return a[b]},c={es:"everySecond",sc:"usesca",rv:"rvCombo",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&
(d.intblk="integration");var e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(s.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){var b=l[a];return f(["integration"]).contains(a)?!!b:!0===b||"true"===b||f.isFunction(b)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,
b){if(f.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Db=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=g.NA;c=b?c:d;f.isDef(a)&&a!==g.NA&&-1<a&&(e=a>=c.IN_VIEW?g.IN_VIEW:a<=c.OUT_OF_VIEW?g.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?g.PARTIAL_VIEW_PLUS:g.PARTIAL_VIEW_MINUS);
return e},calcPercentInView:function(a,b,c,d){var e=0,k=a;a.hasValidDims()&&!a.isHidden()&&(f([b,c,d]).each(function(a,b){if(b.hasValidDims()){var c=k.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),f=Math.max(c.scrY,d.scrY),g=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),g=g-e,c=c-f;k=I({scrX:e,scrY:f,width:0<g?g:0,height:0<c?c:0})}}),e=q.round(k.area()/a.area()*100));return e}}},rb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));
b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*q.random()|0).toString(16);a=a.slice(0,32)}catch(d){m.getAggregator().trigger("error",g.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=
new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},kb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(g.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},oc=function(a,b,c,d,e){return{getTime:function(){return 1E3*
a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var c=m.getAggregator().request("adRenderStatus"),e=d||b,f=a.getTimeInViewInSeconds();c||m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"nr_"+e,f)}:function(){var e=a.getTimeInViewInSeconds(),u=a.getTimeInViewForRts();f.isDef(d)&&(m.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:b}),m.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));m.getAggregator().trigger("sendDt",b,
e);if(c[u])c[u]()}}}},Ib=function(){return{createPingJobs:function(a,b,c,d,e){return f(b.getTimeThresholds()).map(function(b,f){return new oc(f,a,c,d,e)})}}},Ga=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=m.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&f(a).each(function(a,c){c.qivThreshold&&b.push(c)})},e=function(a){var d=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];
var e=a.indexOf(f(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=m.getAggregator().request("mScreenEvents").getCurrentEvent(),r=Math.floor(d.time/1E3);f(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(m.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:g.DT_CODES.CUSTOM}),m.getAggregator().trigger("addOutputItem",
{output:"q"},"cmr",{type:g.DT_CODES.CUSTOM}),m.getAggregator().trigger("sendDt",g.DT_CODES.CUSTOM,r),b.rtsCallbacks&&f.isFunction(b.rtsCallbacks[g.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[g.RTS_KEY_FOR_VQ]())})};return{init:function(){d();m.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},oa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},
c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+q.round(1E4*Math.random())};return{wrap:function(d,e,k,f){var n=c(),p,r,g;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(p=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],r=p.split("=")[1],g=O.stringToFn(r),d=a(d,p));w[n]=function(a){e(a);k&&g&&g(a);w[n]=void 0};return d=b(d,f,n)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Lb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,
b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?m.getAggregator().trigger("jsonp",c,a.callback,!0):m.getAggregator().trigger("send",c,function(){m.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,
d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:f.noop,d=a.enabled?!0:!1;m.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(c){m.getAggregator().on("adImpression",function(e,n){var p;try{p=d(c,n),a.enabled?m.getAggregator().trigger("jsonp",p,a.callback,!0):m.getAggregator().trigger("send",p,f.noop,!b.on("postMon"))}catch(r){__IntegralASDiagnosticCall("jsvidimp",r,l)}})}},fwjsvid:{isFW:!0,
manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&m.getAggregator().trigger("jsonp",c(a),function(a){m.getAggregator().trigger("videoBlockResult",a)});m.getAggregator().on("adImpression",function(c,e){var n;try{var g;if(g=b)g=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;g&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));
n=d(a,e);m.getAggregator().trigger("send",n,f.noop,!0)}catch(B){__IntegralASDiagnosticCall("fwjsvidimp",B,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[l.mode],d=!!b.isFW,f=function(a){var b;b=m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),r=f.indexOf("BEGIN__ADSAFE"),g=-1!==r,D=g?f.slice(r):"",a=g?f.slice(0,r):a(f);return{isFW:d,
baseUrl:a,macroUrl:D,sendImpression:function(a){var d=function(){b.nodeType?m.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)m.getAggregator().on("adImpression",function(){d(a)})}}}},q={execAtEndOfThread:function(a){q.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},
min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?m.getAggregator().request("omidVerificationClient"):w},setInterval:function(a,b){return q.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return q.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){q.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){q.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();return top},getDoc:function(){s.isDomless();return M},getIntersectionObserver:function(a,b){s.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},yb=function(){return{createInstance:function(){return s.isDomless()?new pc:new qc}}},qc=function(){var a,b=!1,c=!1,d=m.getAggregator().request("features"),e=new fa,k=function(){var b;b=923747==l.anId||925955==l.anId;d.on("blur")||d.on("abcAudit")&&
b?(b=q.getWindow(),b=s.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?q.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?q.getDoc()[a.prop]:null;return b},u=function(){var b=q.getWindow(),c=function(){e.run(k())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(q.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",d=q.getDoc();f.isUndef(d.hidden)?f(["moz","ms",
"webkit"]).each(function(e,k){var u=k+"Hidden";f.isDef(d[u])&&(a=u,c=k+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:k,onHiddenChange:function(a){e.push(a);c||(c=!0,u())},supportsVisAPI:function(){return b}}},pc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Ab=function(){return{createInstance:function(a,b){return s.isDomless()?new rc:new sc(a,b)}}},sc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=
b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(r){}try{p.b=encodeURIComponent(parent.location.href)}catch(g){}if(s.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(m){}try{p.e=encodeURIComponent(w.document.referrer)}catch(B){}}try{"jsi"!==
l.mode&&(p.d=encodeURIComponent(w.location.href))}catch(q){}try{p.f=encodeURIComponent(l.jsref)}catch(E){}try{k=n(),p.g=encodeURIComponent(k.g||""),p.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(x){}p=d(p);p=e(p);k=[];for(var C in p)p.hasOwnProperty(C)&&k.push({key:C,val:p[C]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?
c:k()}}},rc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},xb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},Bb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,u,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},r=function(a,c){var d=new gc(c);return b[a]=d},v=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},D=function(){f(c).each(function(b,c){n[c]+=a.length?u-d:u});d=u},l=function(b){a.length&&D();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(n[b]+=n.n);c[a]=b});a.length||D()},q=function(a){var c,
d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var e={sl:v(a.viewState)};u=s.getTagTime();l(e);e.t=u;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;
c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=g.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return k=c};(function(){r("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});r("as",function(a){var b=g.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=s.getTagTime();D()},registerLocation:function(d){var k,
p=!1;c.sl==v(d.viewState)&&a.length?(k=new q(d),a[a.length-1].details=k.details):(k=new q(d),a.push(k),e=d.viewState,p=!0);m.getAggregator().trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:r,getCurrentLoc:function(){return v(e)},
getCurrentEvent:function(){return k}}},O={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
q.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},tc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",b);a=t.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=t.getFirstChildElement(b))&&t.tagNameIs(b,"a"),f=t.attributeMatches(b,"href",d),g=t.attributeMatches(b,"target",e);k&&f&&g&&(b=t.getFirstChildElement(b),t.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},uc=function(){var a=tc(),b=function(a,b){b.tag=t.getTagName(a);b.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};m("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!t.isViewportVisible(c,a))return c;if(c!==d&&s.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=q.getWindow();return b(a,q.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=q.getWindow();t.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var vc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;f=a.innerHeight})}}};m("AS_Finder",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,u={};d!==c&&(k=f.stringifyTriState(d),u.res1=
k,u.ps=k,u.ts=q.now(),u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(n){m.getAggregator().trigger("error",g.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)vc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});m("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;if(s.embedded)try{k=l.contextNode.parentNode,b=uc().getDFPValue(k),k={},k.df=b.type,b.size&&(k.sz=b.size.width+"."+b.size.height),b.tag&&(k.dom=b.tag),c("dfp",k),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){m.getAggregator().trigger("error",g.ERROR_CODES.HIDDEN)}})()},{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Ha=function(a,b,c,d){var e,k=0,u=0,n=!1,p=function(){e=Math.round(t.getNodeArea(a.body));
if(e>=d){for(var p,r=e+20*e/100,l=a.querySelectorAll("iframe"),l=f.fromNodeListToArray(l);l.length&&(u<r||k<c);)p=l.shift(),p=Math.round(t.getNodeArea(p)),p>=d&&(k++,u+=p);u>=r&&k>=c&&(r={va:e,bia:u,bin:k},m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,b,f(r).toION()),n=!0)}},r=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():q.execAtEndOfThread(function(){f(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&t.isElement(c)&&t.tagNameIs(c,"IFRAME")&&
f.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(q.execAtEndOfThread(p),!n&&f.isDef(w.MutationObserver)&&r())};m("BS_InApp",[],function(){var a=q.getWindow().document;m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ha(a,"bs1",3,100)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});m("BS_Browser",[],
function(){var a=q.getWindow().document,b=a.body?Math.round(t.getNodeArea(a.body)):null;!m.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ha(a,"bs2",10,b)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var vb=function(){return{createInstance:function(a){return s.isDomless()?new wc:new xc(a)}}},xc=function(a){var b,c,d,e=new za,k=new ga,u=new yc(e),g=new zc,p=new Ac,r=new Bc(e,a),v=function(){f.isUndef(d)&&
(d=new Cc(e));return d},D=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return p},adTalkMessage:function(a){return new Dc(a,e)},adTalkMessageCollection:function(){return g},idMapModule:v,interFrameQuerySelector:function(a){return new Ec(a)}})};return{isApplicable:function(a){return f.isDef(w.JSON)&&f.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){D();k.traverse(u.addFrame);r.startListening();r.sendToKnownFrames();m.getAggregator().once("stopAdTalk",
function(){r.stopListening()});m.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:r.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new Ia(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new Ia(e,!0));return c},getIdMap:v}},wc=function(){return{isApplicable:function(){return!1},start:function(){}}},Dc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=m.getAggregator().request("features").on("swapids")?
l.oid:l.asid;var k=a||{},f=l.asid,d=d.tagId,n=s.embedded,p=s.friendly,r=l.birthdate;c=c.split("-")[2];var v;s.friendly?v="["+g.AD_IDENTIFIER+"-"+l.asid+"]":(v=q.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:r,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},zc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Fc=function(a,b,c,d){var e,k=a==w;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){g(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},g=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){u(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},yc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,
k,f){var g=a.request("adProxy").getAll();e=new Fc(e,k,g,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},Ia=function(a,b){var c=function(a,c){var f=c.adProxies,g="";if(c.isValidForMapping()){if(b)g+=d(f,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=f.length?"."+f[0].tagId:"";g+=p}return g}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+
(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},Cc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},k=function(a){var e=!1,e=!s.embedded,k="BODY"!==t.getNodeName(c)&&"HEAD"!==t.getNodeName(c),f;if(f=a.srcIsEmbedded){f=
"0.1"!==a.version;var v=a.nodeSelector&&-1===a.nodeSelector.indexOf(g.AD_IDENTIFIER);f=!(f?v:!a.srcIsFriendly)}e&&k&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&s.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&k(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),
m.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:k}},Ec=function(a){var b=new ga,c=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return t.querySelector(c(a),b)},e=function(c,e){var g,p,r;try{p=d(c,e),p||(g=b.getFrames(!0,a),f(g).findFirst(function(a,b){return r=d(b,e)}))}catch(v){}return p||r||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},Bc=function(a){var b=
!1,c,d;d=m.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=g.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);m.getAggregator().trigger("sendDt",c)},n=function(c,d,e){var k,
n,l,s,x;try{k=a.request("frameCollection");n=a.request("adTalkMessageCollection");l=d.messageContent.self;n.add(d);var C=k.getMe();C.unifiedId>l.unifiedId&&(C.unifiedId=l.unifiedId);var t;t=q.now()-d.sentTime;d.transferDuration=t;n=s=k.getFrame(l.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(s=s||k.addFrame(c.source,l.id.split("-"),d),s.addInformationFromSrc(d,l),e()):s.addInformationFromSrc(d,l);(x=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(A){m.getAggregator().trigger("error",
g.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ha).send(k)},startListening:function(){c=new Ba;c.listen(e,n,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:k}},Gc=function(){var a=m.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Ac=function(){var a,b=[],c=function(a){a=new Gc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Cb=function(a){var b,
c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(g.BROWSERS.IE)&&y.addEvent(q.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(g.BROWSERS.IE)&&(d=!0,q.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Hc=function(a,b){var c,d=g.NA,e=d,k=!1,u=!1,n=!1,p=!b,r=function(){var b=q.getIntersectionObserver(function(a){a=
a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&q.execAtEndOfThread(function(){m.getAggregator().trigger("IOPivChange",d)});e=d},{threshold:g.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&q.execAtEndOfThread(function(){d===g.NA&&(d=0)});b.observe(v(a));p&&q.execAtEndOfThread(function(){s.isBustedIframe()||m.getAggregator().trigger("delayedViewabilityReady")});
k=!0},v=function(b){if(!f.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[g.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){u=!0}b&&null!==b.bodyElement?r():b&&b.document?y.whenReady(r,b.document):u?m.getAggregator().request("errors").add(g.ERROR_CODES.BUSTED_IFRAME_IN_IO):
r()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;c&&(a=I({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==g.NA}}},wa=function(){var a=!1;(function(){y.whenReady(function(){m.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};m("loopDelay",[],wa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:g.TIERS.VIEWABILITY});var Ic=function(){return{start:function(a){m.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(g.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Jc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Ub=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,m.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[Kc(),Lc(),Jc(),Ic()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&
f.isDef(l._onMeasurable)}}},Lc=function(){return{start:function(a){dc(m.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(g.BROWSERS.WEBKIT)||c)&&s.isVideo()}}},Kc=function(){return{start:function(a){m.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&s.isVideo()}}},Mc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();
f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){m.getAggregator().trigger("adImpression")})}}},Nc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},
isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||g.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Oc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&m.getAggregator().trigger("adImpression")})}catch(b){}}}},Pc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},da=function(a){var b=q.getWindow(),b=b&&b.omid3p,c=m.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(b&&f.isFunction(b.registerSessionObserver)&&f.isFunction(b.addEventListener));return{accepts:function(){return d||e},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},
Qc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){m.getAggregator().trigger("adImpression")})}}},ab=function(a){return{resolve:function(){return f(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Ya=function(a){var b=!1,c=!1,d=!1,e=!1,k=m.getAggregator().request("omidAdSessionContext");k.queuedOutputItems=[];var g=new ja,n=m.getAggregator().request("omidAdSessionVerificationParameters"),p=q.getWindow(),r=(p=p&&p.omid3p)&&f.isFunction(p.registerSessionObserver)&&f.isFunction(p.addEventListener)?p:a,v=function(){return n&&n.IAS&&0<Object.keys(n.IAS).length?n.IAS:n},D=function(){var a,f;b&&c&&(!e||d)&&(w.omidSupported=!0,a=k.app&&k.isDisplay&&!k.isWeb,(f=
l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&k.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(k.isLimitedSandbox=!1),a&&f&&(k.delayingViewabilityEvents=!0),k.hasOwnProperty("impressionType")&&k.queuedOutputItems.push({code:"oiet",value:k.impressionType}),k.hasOwnProperty("creativeType")&&k.queuedOutputItems.push({code:"oct",value:k.creativeType}),m.getAggregator().trigger("tryToCallContinueMain",v()))},B=function(a){var c;if("sessionStart"===a.type){k.adSessionType=a.data.context.adSessionType;
k.environment=a.data.context.environment;"app"===k.environment&&(l.mobOrTab=!0);k.accessMode=a.data.context.accessMode;k.omidNativeInfo=a.data.context.omidNativeInfo;k.omidJsInfo=a.data.context.omidJsInfo;k.deviceInfo=a.data.context.deviceInfo;k.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(k.contentUrl=a.data.contentUrl);k.isJavaScript="javascript"===k.adSessionType;k.isNative="native"===k.adSessionType||"javascript"===k.adSessionType;k.isLimitedSandbox=s.embedded;k.isHtml="html"===
a.data.context.adSessionType;k.isWeb="web"===a.data.context.environment;n=a.data.verificationParameters;c=k.isHtml&&k.isWeb;!a.data.hasOwnProperty("supportsLoadedEvent")||"true"!==a.data.supportsLoadedEvent&&!0!==a.data.supportsLoadedEvent||"string"!==typeof a.data.creativeType||""===a.data.creativeType?k.queuedOutputItems.push({code:"ohand",value:"12"}):(e=!0,k.useOMID13Logic=!0,k.queuedOutputItems.push({code:"ohand",value:"13"}));a=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",
code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}];for(var d,f,
p,g=0;g<a.length;g++)d=a[g].root,f=a[g].field,p=a[g].code,"object"===typeof k[d]&&"undefined"!==typeof k[d][f]&&k.queuedOutputItems.push({code:p,value:k[d][f]});k.queuedOutputItems.push({code:"oast",value:k.adSessionType});k.queuedOutputItems.push({code:"oacm",value:k.accessMode});k.queuedOutputItems.push({code:"oenv",value:k.environment});k.hasOwnProperty("contentUrl")&&k.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(k.contentUrl||"")});c?m.getAggregator().trigger("tryToCallContinueMain",
v()):(b=!0,D())}},F=function(a){k.mediaType=a.data.mediaType;k.queuedOutputItems.push({code:"omtp",value:k.mediaType});"video"===a.data.mediaType&&(k.isVideo=!0);a.data.viewport&&a.data.adView&&(k.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}},k.geometryArrived||(k.geometryArrived=g.checkForViewAttachmentBasedOnAdSessionType(k,a.data.adView)));a.data.hasOwnProperty("impressionType")&&!k.hasOwnProperty("impressionType")&&(k.impressionType=a.data.impressionType);
k.isNativeVideo=k.isNative&&"video"===a.data.mediaType;k.isDisplay="display"===a.data.mediaType;c=!0;D()},t=function(a){"loaded"===a.type&&(d=!0,a.data.hasOwnProperty("creativeType")&&(k.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(k.impressionType=a.data.impressionType));D()},x=function(a){a&&"start"===a.type&&(k.videoStartArrived=!0)};return{start:function(){r.registerSessionObserver(B,"IAS");r.addEventListener("impression",F);try{r.addEventListener("media",t)}catch(a){}try{r.addEventListener("video",
x)}catch(b){}}}},Za=function(){return{accepts:function(){return!0}}},Ea=function(){var a=m.getAggregator().request("omidAdSessionContext"),b=m.getAggregator().request("omidVerificationClient"),c=new da(b),d=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&d}}},$a=function(){return{start:function(){m.getAggregator().trigger("tryToCallContinueMain","")}}},Rc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};
return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Sc=function(a,b){var c,d=function(a){var d,f,g;try{d=a.eventData.percentageInView,f=c&&75<=d,g={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},
b.trigger("screenLocationChanged",g)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Tc=function(a,b){var c=[],d=(new Date).getTime(),e=0,k=0,u=!1,n=new Ga,p={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var d=c[b],a=a+
((0<b?",{":"{")+("t:"+d.t+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},r=function(){u=!0},v=function(a){try{var p="",r=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),n="n",v=!1;switch(a.type){case "start":p="adVideoStart";d=r;k=a.data.duration;1E3<k&&(k/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p=
"adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);v=!0;m.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}if(""!==p){var l=m.getAggregator().request("mScreenEvents");l&&(n=l.getCurrentLoc());c.push({t:r-d,tp:p,sl:n,ad_duration:k,volume:e})}if("loaded"===a.type&&f.isDef(a.data)){var q=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),
p=-1!==q?q+1:void 0,s=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(f.isDef(p)&&m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vbp",p),m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vps",s)):(f.isDef(p)&&m.getAggregator().trigger("addOutputItem",{output:p},"vbp",{type:g.IMPRESSION_EVENT}),m.getAggregator().trigger("addOutputItem",{output:s},"vps",{type:g.IMPRESSION_EVENT}))}"start"===a.type&&m.getAggregator().trigger("omidAdDuration",{ad_duration:k});
var t;"playerStateChange"===a.type?t="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?t="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(t="AdPaused");f.isDef(t)&&b.trigger("videoPlaybackEvent",{eventType:t,eventData:null});v&&m.getAggregator().trigger("sendDt",g.DT_CODES.VIDEO_EVENTS)}catch(G){__IntegralASDiagnosticCall("omidvideo",G,w.bootstrapper)}};return{start:function(){m.getAggregator().on("impressionsent",
r);m.getAggregator().provide({omidVideoEventsString:p});a.addEventListener("video",v);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ja=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?g.IN_VIEW:g.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":g.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){m.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});
a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Uc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():
!0},isMeasurable:function(){return k()?e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},tb=function(a,b,c){var d=m.getAggregator().request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),
e=e.concat(a.getMraidMeasurementStrategies());(e=(new ka(e)).resolve())||m.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var f=new Vc(e),g=new Ka(b,c,s,d);return b.on("mobSafIO")||e||!g.accepts()?new Uc(e,f,d.isMobileAppEnvironment()):new Wc(s.isVideo(),new H)}}},ub=function(a){var b=m.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=m.getAggregator().request("omidVerificationClient"),b=new da(a),e=new Ea,f=[];if(b.accepts()&&
!e.accepts()){var g=new ea,n=new Xc,e=new Yc(a,new H),g=[{environment:g,measurementStrategy:new Zc(a,new H)},{environment:n,measurementStrategy:new La(new la,q.getWindow(),new H)}],g=(g=(new ka(g)).resolve())?g.measurementStrategy:{},p=new Ma(new Na(new V),new V,n.accepts()),n=new Pc(a,b,l.mode),r=new Oa(e,g,new H,p),b=new Qc(a,b,l.mode),a=new Pa(e,g,new Tc(a,new H),new H,p);f.push({environment:n,measurementStrategy:r});f.push({environment:b,measurementStrategy:a})}return f},getAvidMeasurementStrategies:function(){var b=
m.getAggregator().request("avidJsClient"),d=new Nc(b),e=[];if(d.accepts()){var f=new Mc(b,d,l.mode),g=new Oc(b,d,l.mode),n;n=new Rc(b,new H);if(d.supportsAdContainerGeometry()){var p=new $c,r=new ad,v=new La(new la,q.getWindow(),new H),D=new bd(b,new H),p=(p=(new ka([{environment:p,measurementStrategy:D},{environment:r,measurementStrategy:v}])).resolve())?p.measurementStrategy:{},r=new Ma(new Na(new V),new V,r.accepts()),v=new cd(b,new H),b=new Oa(v,p,new H,r);n=new Pa(v,p,n,new H,r)}else r=new Sc(b,
new H),b=new Ja(r,new H),n=new Qa(r,n,new H);e.push({environment:f,measurementStrategy:b});e.push({environment:g,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new dd(q.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=m.getAggregator().request("context"),e=new ed(q.getWindow(),e),f=new fd(q.getWindow(),new H);e.accepts()?(d=new gd(q.getWindow(),new H),d=new Qa(f,d,
new H),d={environment:e,measurementStrategy:d}):(e=new Ja(f,new H),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ka=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Vc=function(a){var b=!1,c,d={winDimensions:I({scrX:0,scrY:0,width:0,height:0}),adDimensions:I({scrX:0,scrY:0,width:0,height:0}),containerDimensions:I({scrX:0,scrY:0,width:0,height:0}),method:g.NA,viewState:g.NA,percentInView:g.PIV_NA,reason:"",
obstructed:g.NA,isHidden:g.NA,tabHidden:g.NA,posViewState:g.NA,adCompCount:1},e=function(a){return a?new I({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):I({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||g.NA,viewState:a.viewState||g.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:g.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),
isHidden:g.NA,tabHidden:g.NA,posViewState:a.viewState||g.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,m.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=
b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Qa=function(a,b,c){var d=!1,e=!1,k=!1,u,n,p,r,v=function(){if(!f.isUndef(n)){var a=[],b,v;d?(e?(v=!1,b=100):(v=r,b=p),50>b&&a.push(g.OUT_OF_VIEW_REASONS.GEOM)):(v=!1,b=0,a.push(g.OUT_OF_VIEW_REASONS.VIDEO));k=!0;n.shouldDelegateToDomBasedViewability=
v;n.percentageInView=b;n.viewState=50>b?g.OUT_OF_VIEW:g.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},l=function(a){n=a;p=a.percentageInView;r=a.shouldDelegateToDomBasedViewability;v()},q=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);v()};return{start:function(){m.getAggregator().trigger("addOutputItem",
{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(l);a.start();b.addVideoPlaybackEventListener(q);b.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return k}}},ed=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,m.getAggregator().trigger("adImpression"))})}catch(d){}}}},gd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},cd=function(a,b){var c=function(a){var c=new I(a.eventData.viewport||
{width:0,height:0}),f=new I(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),n=new I(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:c.getRoundedGeometry(),originalAdContainer:f.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:g.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,
viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
Ma=function(a,b,c){function d(a,b,c){c=n(b,c);a=k(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},k=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};
return{calculateGeometricMeasurement:function(e,r){if(f.isDef(e)&&f.isDef(r)){var v=e.viewport,m=e.computedAdContainer,l=m.obstructions,s=l&&0<l.length,t=e.originalAdContainer,x=r.adGeometry,C=r.adFound,P=e.detectionMethod,A=0,v={x:0,y:0,width:v.width,height:v.height},J=u(t,x),G=e.outOfViewReason,w=0,L=0,y=s||!1,w=1>=x.width*x.height;c&&w&&(C=!1,G=G||"",C||-1!==G.indexOf(g.OUT_OF_VIEW_REASONS.GEOM)||(G=g.OUT_OF_VIEW_REASONS.GEOM+(""!==G?"."+G:"")));if(C&&0<e.percentageInView){w=d(v,m,J);s?(A=n(m,
J),A=k(v,m,A),A=u(m,A),A=a.calculateObstructedArea(A,l)):A=0;L=A;A=Math.round((w-L)/(J.width*J.height)*100);s&&0===L&&(y=!1);for(var x=(new I(J)).getRoundedGeometry(),C=y,z,s=0,L=b.getConfig(x).numberOfSlices,Q=q.floor(x.height/L)||1,l=[],w=C?a.getObstructionStatusBySlice(L):[],W,s=0;s<L;s++)z=x.y+Q*s,s==L-1&&(Q=x.y+x.height-z),z={x:x.x,y:z,width:x.width,height:Q},W=d(v,m,z),z=1==W/(z.width*z.height),l.push(z);if(C)for(m=q.min(w.length,L),s=0;s<m;s++)l[s]=l[s]&&!w[s];m=l}else m=b.getConfig(x).defaultSliceArray;
return{windowDimensions:v,containerDimensions:t,adDimensions:J,percentageInView:A,viewState:50<=A?g.IN_VIEW:g.OUT_OF_VIEW,outOfViewReason:50<=A?"":G||g.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:P,isObstructed:y,sliceStatus:m}}}}},$c=function(){return{accepts:function(){return s.isAvidNative()}}},bd=function(a,b){var c=function(a){var c=a.eventData.originalAdContainer;a=!!c;c=(new I({x:0,y:0,width:a?c.width:0,height:a?c.height:0})).getRoundedGeometry();b.trigger("avidNativeGeometryChanged",{adGeometry:c,
adFound:a})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},ad=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},Oa=function(a,b,c,d){var e,k,u,n=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);u=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;n()},r=function(a){k=a;n()};return{start:function(){m.getAggregator().trigger("addOutputItem",
{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(r);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return u}}},Na=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,g,n,p;g=e&&0<e.length;var r;if(g){r=Math.round(d.width);
var m=Math.round(d.height);k=Array(r);for(n=0;n<r;n++)k[n]=Array(m);r={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:r,height:m}}else r={};k=r;m=r=0;if(g){for(;r<e.length;r++){g=e[r];n=m=k;var l=g;k=Math.max(n.x,l.x);g=Math.max(n.y,l.y);p=Math.min(n.x+n.width,l.x+l.width);l=Math.min(n.y+n.height,l.y+l.height);n=p-k;p=l-g;n=0<n?n:0;p=0<p?p:0;k-=m.x;g-=m.y;n=k+n;p=g+p;for(k=Math.round(k);k<Math.round(n);k++)for(l=Math.round(g);l<Math.round(p);l++)void 0!==m.matrix[k]&&void 0===
m.matrix[k][l]&&(m.matrix[k][l]=1,m.obscuredPixelCount+=1);k=m}m=k.obscuredPixelCount;r=k;if(f.isUndef(r.matrix)||0===r.matrix.length)c=[];else{g=0;p=!1;k=r.matrix[0].length;n=r.matrix.length;p=a.getConfig({height:k}).numberOfSlices;for(var l=q.floor(k/p)||1,s=[],t=0;t<k;t++){p=!1;for(var E=0;E<n;E++)if(1===r.matrix[E][t]){p=!0;break}g++;p&&(t+=l-g,g=l);if(g==l||t===k-1)s.push(p),g=0}c=s}}else c=b;return m},getObstructionStatusBySlice:function(){return c}}},Yc=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),
d=null,e=!1,k=new ja,u=function(){var a=q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(u,50)},n=function(a){var f=a.data.adView,n=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry);if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{n&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions);
var m=new I(a.data.viewport||{width:0,height:0}),l=new I(f[n?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0}),n=new I(f["onScreen"+(n?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0}),f={viewport:m.getRoundedGeometry(),originalAdContainer:l.getRoundedGeometry(),computedAdContainer:n.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:g.DETECTION_METHODS.OMID,outOfViewReason:p(f.reasons)};c.geometryArrived||(c.geometryArrived=k.checkForViewAttachmentBasedOnAdSessionType(c,
a.data.adView));b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,f)}},p=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN,hidden:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:p}},ea=function(){var a=m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Zc=function(a,b){var c=m.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=new ja,u=function(){var a=
q.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=c.delayingViewabilityEvents=!1,d&&(n(d),d=null)):q.setTimeout(u,50)},n=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)d=a,e||(e=!0,u());else{var n=a.data.adView.geometry,m=a.data.adView.containerGeometry,l=!!n,q=a.data.adView.measuringElement&&!!m,n=(new I({x:l&&q?n.x-m.x:0,y:l&&q?n.y-m.y:0,width:l?n.width:0,height:l?n.height:0})).getRoundedGeometry();c.geometryArrived||(c.geometryArrived=f.checkForViewAttachmentBasedOnAdSessionType(c,
a.data.adView));b.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:n,adFound:l})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&n(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",n)},addAdGeometryMeasurementChangedListener:function(a){b.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Xc=function(){var a=m.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Pa=function(a,b,c,d,e){var k=!1,
u=!1,n,p,r,l,q,s=function(){if(!(f.isUndef(p)||f.isUndef(r)||f.isUndef(l))){q=!0;var a=e.calculateGeometricMeasurement(p,r),b=k&&u,c=k&&50<=a.percentageInView,m={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(m.percentageInView=100);b||c?
m.viewState=g.IN_VIEW:(m.viewState=g.OUT_OF_VIEW,m.outOfViewReason=a.outOfViewReason||g.OUT_OF_VIEW_REASONS.VIDEO);n=m;d.trigger("videoGeometryMeasurementChanged",n)}},t=function(a){p=a;s()},E=function(a){r=a;s()},x=function(a){l=a;a=a.eventType;"AdEnteredFullscreen"===a?u=!0:"AdExitedFullscreen"===a?u=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(k=!1);s()};return{start:function(){m.getAggregator().trigger("addOutputItem",
{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(E);b.start();c.addVideoPlaybackEventListener(x);c.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},La=function(a,b,c){var d,e=function(){var b=a.find(),e,n,p=!1;f.isDef(b)?
(n=!0,e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),n=!1);if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);if(b||p)d=e,c.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:n})};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},dd=function(a,b,c){return{accepts:function(){var d=
f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},fd=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:g.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",
d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},l=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):k())},n=function(){c||l()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;m.getAggregator().trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?m.getAggregator().trigger("exec",
"mraid.js",n):l()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},hb=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||m.getAggregator().trigger("notify",c)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},cb=function(){var a=new R({tiv:[1E4]}),b=f([g.IN_VIEW,g.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:g.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var d=q.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},bb=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,9E4];var m=[2E3,5E3,15E3],n=function(a,b){return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a[b?
"viewStateIgnoringRender":"viewState"])};c?(c=new R({tiv:d}),d=d[0]):f?(c=new R({tiv:m}),d=m[0]):(c=new R({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:c,type:g.DT_CODES.PING,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},eb=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,
5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],l=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:f}):d?new R({tiv:n}):new R({tiv:l});m.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:g.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},db=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),
type:g.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=q.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},gb=function(a,b){var c,d,e,k=q.getMaxNumber(),m=b.isVideo(),n=a.id;d=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,r=function(b,c){if(!b.adDimensions)return!1;
var d=c?"percentInViewIgnoringRender":"percentInView",e,n,r,l=b.adDimensions.area();r=1===b.tabHidden;var s=q.max(b.fullPercentInView||0,b[d]),d=f(a.thresholds).findFirst(function(a,b){e=b.lb||0;n=b.ub||k;if(l>=e&&l<=n)return!0});r=!r&&s>=d.piv;b.method==g.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(r=!1);m&&(r=r&&b.isVideoPlaying,p&&(r=r&&b.isSoundOn));return r};c=new R(a);d=a.qiv;(function(){e={};var a;f.isDef(l.rts)&&f.isDef(l.rts[n])&&(a=c&&f.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],
a=f.isDef(a)?f.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():g.RTS_KEY_FOR_VQ,e[a]=l.rts[n])})();return{timeInViewThresholds:c,qivThreshold:d,type:g.DT_CODES.CUSTOM,rts:e,isInView:r,isInViewIgnoringRender:function(a){return r(a,!0)},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},fb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",
g=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),r=function(a,b){var c,g,n,r,m;c=f(b.mediaTypes).contains(d);g=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;r=O.contains(b.id,"fiv");m=O.contains(b.id,"groupmCM");r=!r;m&&(r=p);return r&&c&&g&&n};return{resolve:function(){var b=[],c;n&&g&&(c=f(a.customViewability).filter(r),f(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=
[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new ma(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new hd;b.push(new id(c,parseInt(a[1].replace("%"))));b.push(new ma(1E3*parseInt(a[0])))}else f.isDef(a.tiv)&&b.push(new ma(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},hd=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};m.getAggregator().on({omidAdDuration:b,adVideoStart:b,
adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ma=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},id=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=q.ceil(b/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},sa=function(a,
b,c,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},ib=function(a,b,c,d){var e,k,g,n,p,r,l=function(a,b){return!b&&a},q=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var m=0,l=1===a.tabHidden,v=a.isVideoPlaying,s=a.isSoundOn,x=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){g(b,l,v,x)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});
t("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){q(b,l,v,x)&&s?k[a].mark():k[a].stop();p[a]=k[a].getTotalTime()}),t("slcVtVol",p));r=d&&b&&b.shouldIncludeSound?p:n;a=f(r).findFirst(function(a,b){m=Math.max(m,b);return 0>=b});f.isUndef(a)&&c.doEligibleJobs(m)},t=function(a,b){var c={};c[a]=b;m.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},E=function(a){!e&&a.sliceStatus&&(e=[],k=[],n=[],p=[],f(a.sliceStatus).each(function(a){e.push(new Z(1));n.push(0);d&&(k.push(new Z(1)),p.push(0))}))},
x=function(a){f.isUndef(a.sliceStatus)||(e||E(a),s(a))};return{start:function(){g=d?q:l;a.addMeasurementChangedListener(x)}}},qa=function(a,b,c){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a,c)}}},Mb=function(a,b,c,d,e,f,m,n,p,r){var l=!1,t=s.isVideo(),B=f.request("mobileApp"),F=aa().applies(c,e),E=c.browserIs(g.BROWSERS.GECKO)||c.browserIs(g.BROWSERS.IE)&&e.on("rattie")||F,x=s.xDomainIframe&&
!E,C=new Ca(10),w=function(){e.on("viewabilityready")&&!l&&(d.send(g.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),l=!0)};f.on("delayedViewabilityReady",function(){A();w()});f.on("delayedViewabilityReadyCallOnly",w);var A=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=B.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),B.isMobileAppEnvironment()?(e.viewState=g.NA,e.method=g.NA,
e.percentInView=g.NA):x&&(e.viewState=g.NA,e.percentInView=g.PIV_NA),t&&!s.isAvid()&&r.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var l=q.round(C.getTime()/C.getCount());m.addItem({output:l},"lt",{type:g.DT_CODES.UNLOAD});return d}catch(v){f.trigger("error",g.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:A,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":t?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=
s.xDomainIframe,d=a&&c.browserIs(g.BROWSERS.WEBKIT),e=a&&c.browserIs(g.BROWSERS.MSEDGE),a=a&&F,d=!d&&!e&&!a;return B.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){B.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};m("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=jd(c),u=[new kd,new ld(k)],
n=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},p=function(a){"sessionFinish"===a.type&&m.getAggregator().trigger("adSessionComplete")},r=function(a){y.addEvent(w,a,function(){m.getAggregator().trigger("adSessionComplete")},!1)},v=function(){var a=new ba(g.DT_CODES.VIDEO_EVENTS);m.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};q.getWindow().postMessage(JSON.stringify(a),"*")})};m.getAggregator().once("startViewabilityLoop",
function(){var b,c=m.getAggregator().request("mobileApp").isMobileAppEnvironment();m.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Aa(a.checkScreenLoc,k.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?s.isOmid()?m.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):r("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):r("beforeunload"))});m.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||v();m.getAggregator().trigger("unload");
e&&e.stop();m.getAggregator().trigger("endAdSession");m.getAggregator().trigger("stopAdTalk")})},{tier:g.TIERS.VIEWABILITY});var jd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},ld=function(a){var b,c,d,e,f,g=function(p){d&&!f&&1>p?(f=!0,q.setTimeout(function(){g(p)},1E3)):(e=1>p,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){g(a.percentInView)};
return{applies:function(a,b,c){var e=m.getAggregator().request("mobileApp");a=(new Ka(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&(b.on("mobSafIO")||!a);d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);m.getAggregator().on("IOPivChange",g);m.getAggregator().on("newScreenEvent",n)}}},kd=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,q.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,
b,d){c=d.usesZeroPivCustomMetric();var e=aa();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);m.getAggregator().on("IOPivChange",e)}}},td=function(a,b,c,d,e,k){var u,n,p,r,v,D,B,F,E,x=t.getElementsWindow(b);t.getElementsDocument(b);m.getAggregator().provide("iframeCalculatorHelper",md(x));var C=nd(b,d),P=g.AD_IDENTIFIER+"-"+l.asid,A=!1,J=I({}),G=s.isDeviceTypeGroupMobile(),z=s.usesGroupMCustomMetricMobilePassThru(),L,$=function(){if(!u)if(u=
C.calcDims(b,d,p),c===g.DETECTION_METHODS.VIDEO&&s.embedded){var a=u,e=(new I(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){m.getAggregator().trigger("error",g.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===g.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},H=function(){var b,d=s.xDomainIframe&&A;b=G&&A&&p.isReady();b=d||b;d=C.getClippedDims&&(c===g.DETECTION_METHODS.VIDEO&&s.embedded||s.isCeltra());b?n=p.getPiv():f.isUndef(n)&&(b=!G&&(s.friendly||
f.isDef(w.mozInnerScreenX))&&e.on("offscreen"),F=$(),B=new I(t.calcWinDims()),D=new I(b?t.calcMonDims():{}),E=d?C.getClippedDims():J,n=a.calcPercentInView(F,B,D,E));return n},Q=function(){return a.calcInitialViewState(H())},W=function(){return b===w?!1:$().isHidden()},K=function(a,b){return s.isVideo()?q.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=q.getWindow(),e=q.getDoc(),f=b===c,k=e.body,g=m.getAggregator(),
n=new aa,l=g.request("browser"),u=g.request("features"),x=g.request("context"),t=!s.xDomainIframe,g=K(b,d),e=f&&k?e.body:b;L=s.friendlyIframe?c.frameElement:e;y.addEvent(e,"click",function(){m.getAggregator().trigger("adComponentClicked")});y.addEvent(e,"mouseover",function(){m.getAggregator().trigger("adComponentMousedOver")});n.applies(l,u,x)?(p=Hc(b,t),p.start(),A=!0,z&&(c=new od($().getRounded()),n=new pd,g=new qd(g,n),r=new rd(c.getSlices(),g))):z&&(v=new sd(a))})();return{mark:function(){t.setAttributeOf(L,
P,"")},cleanup:function(){t.removeAttributeOf(L,P)},isNode:function(a){return b===a},isHidden:W,isObstructed:function(){return!1},getDims:$,getPercentInView:H,getLocationState:Q,getOnPageViewability:function(){return W()?g.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return C.allowsOptimization?u:I(d)},refresh:function(){E=F=B=D=n=u=void 0;if(k){var a,c;if(!s.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==M&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},
getAdNode:function(){return b},getSliceStatus:function(){var a;r&&r.isReadyToMeasure()?a=r.getSliceStatus():s.friendly&&v&&f.isDef(F)&&(a=v.getSliceStatus(F,B,D,E));return a}}},ud=function(a,b){var c=[],d,e=f([]),k=b.on("rvCombo"),l=function(){return c[0]&&c[0].getDetectionMethod()===g.DETECTION_METHODS.AD_PLACEHOLDER},n=function(k,n,p,r){var q=l()||0===c.length;k=td(a,k,n,p,b,r);l()&&(r=c.shift(),e=f(c),r.cleanup(),d=void 0);c.push(k);e=f(c);q&&k.mark();q&&n!==g.DETECTION_METHODS.AD_PLACEHOLDER&&
m.getAggregator().trigger("primaryadfound",k);n===g.DETECTION_METHODS.AD_PLACEHOLDER&&"object"===typeof p&&m.getAggregator().trigger("addOutputItem",{output:p.nodeName},"spac")},p=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==g.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},r=function(a){var b;k&&(b=m.getAggregator().request("adRenderStatus"));return!a&&k&&!b},v=function(a){var b;
b=p();b=b.hasMeasurement?q.round(b.totalInView/b.totalArea*100):g.PIV_NA;if(isNaN(b)||r(a))b=0;return b},t=function(c){var d=b.bootstrapOn("mobOrTab"),d=p().totalArea>=g.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!d&&!s.isVideo();return a.calcInitialViewState(v(c),d)},B=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},F=function(a){return function(){return c[0]&&c[0][a]()}};m.getAggregator().on("adComponentAdded",function(a){f(a).each(function(a,b){-1===B(b)&&n(b,g.DETECTION_METHODS.MUTATION)})});
m.getAggregator().on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=B(b);-1<d&&c.splice(d,1)})});return{getDims:F("getDims"),isObstructed:F("isObstructed"),getDetectionMethod:F("getDetectionMethod"),getContainerDims:F("getContainerDims"),getViewState:t,getViewStateIgnoringRender:function(){return t(!0)},getPercentInView:v,getPercentInViewIgnoringRender:function(){return v(!0)},isHidden:F("isHidden"),isUsingPlaceholder:l,hasAd:function(){return!!c.length},refresh:function(){d=void 0;
e.each(function(a,b){b.refresh()})},addAdComponent:n,getOutOfViewReasons:function(a){var b,e=[],f=c[0],k=g.OUT_OF_VIEW_REASONS;f&&(b=d||t(),r(a)?e.push(k.RENDER):b!==g.OUT_OF_VIEW&&b!==g.PARTIAL_VIEW_MINUS||e.push(k.GEOM),f.isHidden()&&e.push(k.HIDDEN),f.isObstructed()&&e.push(k.OBSTRUCTION));return e},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:F("getSliceStatus")}},vd=function(a){var b=!1;if(!f.isUndef(w.MutationObserver)){var c=new w.MutationObserver(function(a){q.execAtEndOfThread(function(){b&&
f(a).each(function(a,b){b.addedNodes.length&&m.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&m.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;q.setTimeout(function(){b=!1},40)};m.getAggregator().on("adComponentClicked",d);m.getAggregator().on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(M.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(g.ERROR_CODES.AC_WATCHER)}},q.getDoc())}},Dd=function(a,
b){var c=[wd(),xd()],d=[la(),yd(),zd(),Ad(),Bd(),Cd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},zd=function(){var a,b,c,d=function(a){a?a&&c&&(q.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ia();var c=t.crossQuerySelector(ia().getCssSelector(),!0);a=c?c.parentNode:a;
d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},U=function(a,b,c){var d;a=t.findChildWithLargestContent(a||l.contextNode.parentNode,b,c);1<t.getNodeArea(a)&&!a[g.IAS_DETECTOR]&&(d=a);return d},Bd=function(){return{detectionMethod:g.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return s.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Ed=function(){var a,b=q.getDoc().scripts,c=function(){a||
(a=f(b).findFirst(function(a,b){return O.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var b,d=a||c(),f=/;(\d+);/;d&&d.src&&(b=d.src.match(f)[1]);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=d();try{a=f(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return t.crossQuerySelector(b,!0)})}catch(c){}return a}}},Fd=function(){return{isApplicable:function(a,
b){var c;try{c=t.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&O.contains(c,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Gd=function(){var a,b,c=q.getDoc(),d=function(){var b;a||(a=(b=(b=t.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+
d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=q.getWindow(),g=a.friendlyIframe&&q.getWindow().frameElement,g=g&&I(g).isOneByOne(),r=function(){var a=q.getDoc().scripts;return f(a).findFirst(function(a,b){return O.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&r&&c&&g&&d()&&e()},getCssSelector:e}},ia=function(){var a,b=m.getAggregator().request("features");
a||(a=[Gd(),Fd(),Ed()]);return f(a).findFirst(function(a,d){return d.isApplicable(s,b)})},Ad=function(){var a,b=function(){q.execAtEndOfThread(function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:g.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=Fa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=t.getElementsWindow(c).frameElement||c.parentNode,
b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Fa=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&O.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&t.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},la=function(){var a=m.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=
t.findChildWithLargestContent(q.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[g.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},xd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},find:function(){var b=t.crossQuerySelector(l._cl_adpath);b&&(a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},wd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return s.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(c=t.crossQuerySelector(d))a=t.getParent(c),1>t.getNodeArea(c)&&(a=c,c=t.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Cd=function(){return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,
isApplicable:function(){return!0},find:U,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},yd=function(){return{detectionMethod:g.DETECTION_METHODS.VIDEO,find:m.getAggregator().request("video").findAdNode,isApplicable:s.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},nd=function(a,b){var c,d;c=[Hd(),Id(),Jd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Kd();c.isApplicable(b)&&(c.setBaseStrategy(d),
d=c);return d},Jd=function(){return{calcDims:function(a,b){var c,d,e=new I(a);t.isClippable(a,b)&&(c=t.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(s.isSpecifiedAd()||s.isBustedIframe())&&t.nodeIsInWindow(a,q.getTop());a=!t.elementIsEmbedded(a);return b||a}}},Id=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,
getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||s.isBustedIframe())&&t.elementIsEmbedded(a)}}},Hd=function(){var a=m.getAggregator().request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new I(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!t.nodeIsInWindow(c,
q.getTop()),e=s.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},Kd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=aa();var c=m.getAggregator(),d=c.request("browser"),e=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(d,e,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},md=function(a){var b,c,d,e=m.getAggregator().request("features"),
k=m.getAggregator().request("browser");a=a||q.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:q.getMaxNumber(),height:q.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,n=e.length;k<n;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=q.min(c.width,d.width),c.height=q.min(c.height,d.height)}catch(s){m.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}b!==q.getTop()&&l(b.parent,c)}return c},n=function(){var n,
r={};try{var v,D,B,F,w,x,C=q.getMaxNumber(),y=q.getMaxNumber();s.friendly?(v=l(),B=v.left,F=v.top,C=v.width,y=v.height,D=t.browserWindowPosition(),w=D.scrX+B,x=D.scrY+F):e.on("rattie")&&k.browserIs(g.BROWSERS.IE)?(d=d||m.getAggregator().request("ieXDomainViewability"),c=d.determineFramePosition(),w=c.scrX,x=c.scrY):f.isDef(a.mozInnerScreenX)&&(w=q.round(a.mozInnerScreenX),x=q.round(a.mozInnerScreenY));var r={scrX:w,scrY:x,iFrameClippingWidth:C,iFrameClippingHeight:y},A,J,G=b||t.getIeDimObj(a);b=G;
f.isDef(a.innerWidth)?(A=a.innerWidth,J=a.innerHeight):G&&f.isDef(G.clientWidth)?(A=G.clientWidth,J=G.clientHeight,0===A&&0<G.offsetWidth&&(A=G.offsetWidth),0===J&&0<G.offsetHeight&&(J=G.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(A=a.frameElement.clientWidth,J=a.frameElement.clientHeight);n=A;r.height=J;r.width=n}catch(z){m.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}return r};return{calcDims:function(){return new I(n())},getClippedDims:function(){var a=
n();return new I({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Gb=function(){return{createInstance:function(a,b,c){return s.isDomless()?new Ld:new Md(a,b,c)}}},Md=function(a,b,c){var d,e=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,k=ud(b,c),m=function(){var a,b,e;d=d||Dd(s,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,
f.resolve(d.detectionMethod),b,e)}))},n=function(){var a;k.hasAd()||(a=t.getPlaceholderSpan(),e.insertBefore(a,l.contextNode.nextSibling),k.addAdComponent(a,g.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))};vd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?m():k.refresh();return k},getDetectionMethod:function(){}}},Ld=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},pb=function(a){var b,c=[],d=a||w,e=function(){return"stub"===g().mode};a=function(){e()&&
(b=d.setInterval(function(){if("stub"!==g().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,
b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},ob=function(a){var b=new Nd,c=new Od;(function(){var d="";try{if(a.bootstrapOn("mobOrTab")||s.isDomless()||s.isAvid()||s.isAvidNative())d=b.detect(),b.hasDetectedMobileApp()&&(c.detect(),m.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",
{type:"impression"}),m.getAggregator().trigger("addOutputItem",{output:d},"drul",{type:"impression"}))}catch(e){m.getAggregator().trigger("error",g.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Pd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(s.isDomless())return!1;var b=q.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(d){}try{c.push(parent.location.href)}catch(e){}if(s.embedded){try{c.push(parent.document.referrer)}catch(k){}try{c.push(M.referrer)}catch(g){}}try{"jsi"!==
l.mode&&c.push(w.location.href)}catch(n){}try{c.push(l.jsref)}catch(p){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!f(a).findFirst(function(a,d){var e=!1,k,g,n="mobfox"===d?c:[b];for(g=0;g<n.length;g++){k=n[g];var p="string"===typeof d?[d]:d;if(f(p).isArray()&&(p[0].substring(0,4),p))for(var m=0;m<p.length&&(e=-1<k.indexOf(p[m]),!1!==e);m++);}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;
d=!1;var e=q.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){var d=!1;return d=f.isDef(O.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return s.isDomless()?!1:!!f(a).findFirst(function(a,c){return t.containsScriptTagWithSrc(function(a){var b=!1;return b=f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ra=function(){var a=
function(a,c){var d,e=Pd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Qd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},
{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",
detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads",
"app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Nd=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,f=Ra().process(b.detectionRules);f&&(c=f+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length?a="s_serv":(a=f(Qd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},
Od=function(){var a=[],b=[],c=function(b,c){var f,g=Ra().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),f=c);return f};return{detect:function(){b=f(Rd).map(c);0<b.length&&m.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Rd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],
url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,
detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},
{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],
od=function(a){var b=[],c=function(a,b,c){a*=c;return new X(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new X(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},V=function(){var a=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;
e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Sd=function(){var a,b,c=0,d=-1,e=0,k=m.getAggregator().request("browser"),g=function(){var a,b;a=m.getAggregator().request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=q.setInterval(function(){var a=
q.now();d=a-e;e=a;c++;10<=c&&b&&q.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=t.calcMonDims().height,m=k.getUserAgent(),m=m&&null!==m.match(/(FBAN)/)?1:0,l=k.getUserAgent(),l=l&&null!==l.match(/(iPad)/)?1:0,s=g()?1:0,w=k.getUserAgent(),w=w&&null!==w.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=q.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*m-0.874412*l+0.646972*s+0.28118*w+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:m,mbip:l,
mbhs:s,mbbr:w,mblr:d,mbp:e};b&&q.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Wc=function(a,b,c){var d,e,k,u,n,p=[],r=l.contextNode.parentNode,v=0,t=0,B=!1,w=!1,z=new Sd,x=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},C=function(){m.getAggregator().trigger("delayedViewabilityReadyCallOnly")},P=function(a){y.whenReady(function(){e=new Td(a,q.getDoc().body)})},A=function(){e.removePixels()},J=function(){var a=z.getDebugState(),b=x();f.isUndef(a)&&(a={});a.mbm=
f.fromBoolToNum(w);a.mbrd=f.fromBoolToNum(B);a.mbtg=f.isDef(r.tagName)?r.tagName:"na";a.mbaf=f.isDef(k)?k:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{m.getAggregator().trigger("addOutputItem",{output:a},b),m.getAggregator().trigger("addOutputItem",{output:-101},"pingTime",b),m.getAggregator().trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var l;l=f.isDef(d);if(c||!b.adDimensions)return b;
l||(k=b.method,d=b.adDimensions,P(d));if(f.isUndef(e)||!e.isReadyToMeasure())l=!1;f.isUndef(u)&&l&&(u=z.isLikelyToProduceFalsePositive(d));if(w=!u&&l){var r;l=e.getPercentInView();var A=x(),Q=1===b.tabHidden;t=q.now()-v;r=0<v?900>t:!0;v=q.now();0===b.adDimensions.area()&&(l=0);r||(l=0);var y=l;p.push({tm:s.getTagTime(),piv:y});3<p.length&&p.shift();0===l&&0<A&&(r&&(r=p.length-1,y=!0,2<=p.length&&-1<r&&(y=0===p[r].piv&&0===p[r-1].piv),r=!y),r&&(l=A));a?(f.isUndef(n)&&(n=m.getAggregator().request("video")),
n.setVideoSpecificScreenEventFields(b),l=b.isVideoPlayingInFullscreen?!0:!Q&&50<=l&&b.isVideoPlaying):l=!Q&&50<=l;b.viewState=l?g.IN_VIEW:g.OUT_OF_VIEW;b.percentInView=x();A=[];Q=f(b.reason);r=g.OUT_OF_VIEW_REASONS;l||A.push(r.GEOM);Q.contains(r.HIDDEN)&&A.push(r.HIDDEN);Q.contains(r.OBSTRUCTION)&&A.push(r.OBSTRUCTION);b.reason=A;b.sliceStatus=e.getSliceStatus();B||(B=!0,q.execAtEndOfThread(C))}else b.viewState=g.NA,b.percentInView=-1;return b},start:function(){m.getAggregator().on("endAdSession",
A);c&&q.setTimeout(J,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Ka=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),m=a.on("ios"),n=b.browserIs(g.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),l=d.isMobileAppEnvironment();return e&&f&&m&&n&&p&&!l},isImmediate:function(){return!1},start:function(){}}},Ud=function(a,b,c,d,e,k,m){var n,
p=l.birthdate+""+q.round(1E6*q.random()),r=101,v,s,t,w=!1,y=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,k=(new Date).getTime(),g=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(g)};a.requestAnimationFrame(g);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};
b.body.isReady=function(){return 200<=(new Date).getTime()-k}}catch(n){b.body.setAttribute("data-err",n.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},x=function(a,b){t||(r=a,t=b)},C=function(){var a,b,c;if(t)return!1;if(s)return!0;try{if(v.contentWindow&&v.contentWindow.document&&v.contentWindow.document.body){c=v.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&x(104);
(b=c.isReady?c.isReady():!1)&&(s=c.isInView?c.isInView:void 0)&&x(105)}}catch(d){x(106,d)}return f.isDef(s)},z=function(a,b,c){var k=M.createElement("iframe");k.id=p;f(k.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var n=k.style;k[g.IAS_DETECTOR]="true";n.left=b;n.top=c;a.appendChild(k);v=k;x(102);a=v;try{var m=a.contentWindow,l=y();m.document.open();a.contentWindow.document.write(l);m.document.close()}catch(r){x(103,
r)}return k}(a,b,c);return{isInView:function(){var a,b,c=!1;q.now();C()&&(a=s(!0),c=a.isInView,w=!1,n&&(b=20*n.rate+n.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,w=!0)),x(107),n=a);return c},isNotReadyToReport:function(){return!C()},createdElement:v,remove:function(){z.parentNode&&z.parentNode.removeChild(z)},getStatus:function(){return r},getError:function(){return t},isReadingInvalid:function(){return w},getRate:function(){return v.contentWindow&&v.contentWindow.document&&v.contentWindow.document.body&&
v.contentWindow.document.body.getRate?v.contentWindow.document.body.getRate():-1},percentInView:k}},Td=function(a,b,c){var d,e=a.getRounded(),k=[],g=!1;a=V().getConfig(e);var n=a.percentInViewSliceArray,m=1==a.numberOfSlices,l={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},v=function(){var a;if(!g)for(g=!0,a=0;a<k.length;a++)if(k[a].isNotReadyToReport()){g=!1;break}return g},t=function(a){var b=[],c=0;q.floor(a.height/n.length);var d=q.floor(a.width/2-1);f(n).each(function(e,f){c=q.floor(a.height*
f);c===a.height&&(c-=2);b.push({y:q.floor(c)+"px",x:q.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},B=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=q.max(c,b.percentInView));return!b.isInView});return c},y=function(){var a,b,c,d=[];l.mbs=
[];f(k).each(function(b,c){a=c.isInView();l.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=w(d,!1);c=w(d,!0);return q.max(b,c)};(function(){d=m?B(e):t(e);var a=d.get();f(a).each(function(a,d){var e=new Ud(b,d.x,d.y,d.width,d.height,d.percentInView,c);k.push(e)})})();return{getPercentInView:function(){var a=v(),b=y();l.mbrd=a?1:0;b!=l.mbp&&l.mbivs.push([s.getTagTime(),b]);l.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();f(k).each(function(a,b){try{b.remove()}catch(c){}})},
getPixelStateForDebug:function(){l.mbm=1;k&&0<k.length&&(l.mbpr=[],l.mbir=[],f(k).each(function(a,b){l.mbpr.push(b.getRate());l.mbir.push(b.isReadingInvalid()?1:0)}));return l},isReadyToMeasure:v,getSliceStatus:function(){var a;k&&0<k.length&&(a=[],f(k).each(function(b,c){a.push(c.isInView())}));return a}}},rd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),
k=Math.max(d.leftX,f.leftX),g=Math.min(d.rightX,f.rightX),n=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new X(k,g,n,f))}});return c},e=function(a,b){var c=0,e=d(a,b),k;f(e).each(function(a,b){k=b.value();c+=k.area});return c},k=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=
k();c.mbrd=1;a!==c.mbp&&c.mbivs.push([s.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(g.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},sd=function(a){var b=V();return{getSliceStatus:function(c,d,e,f){var g,n=[];g=c.getRounded();c=g.height;var l=g.scrY,m=new I({scrX:g.scrX,
width:g.width}),v=b.getConfig(g).numberOfSlices;m.set("height",q.floor(c/v));for(var s=0;s<v;s++)m.set("scrY",q.ceil(l+c/v*s)),g=100===a.calcPercentInView(m,d,e,f),n.push(g);return n}}},X=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),g=Math.ceil(c),n=Math.ceil(d),l=f-e,m=n-g,q=l*m,s=function(){return{leftX:e,rightX:f,topY:g,bottomY:n,width:l,height:m,area:q}};return{value:s,doesIntersect:function(a){var b=s();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},pd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},qd=function(a,b){var c,d=[],e=[],g=function(){f(d).each(function(a,b){b(e)})},l=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var m=d.intersectionRatio,d=d.intersectionRect,
q=d.left-f.left,f=d.top-f.top,f=new X(q,q+d.width,f,f+d.height);e.push(f);f=l();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new X(0,b,f[d],f[d+1]));g();1===m&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},ja=function(){var a=function(a){var b=!1;Vd.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},b=function(b,e){return a(b.omidNativeInfo.partnerName)?e&&c(e.onScreenContainerGeometry):
e&&c(e.onScreenGeometry)},c=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:b,checkGeometryObject:c,checkForViewAttachmentBasedOnAdSessionType:function(a,c){if(c&&c.reasons&&0>c.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&b(a,c)))return!0}}},Vd=[{PARTNER_NAME:"IAB"},
{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],Wd=function(){return{listenForResult:function(){m.getAggregator().on("videoBlockResult",function(a){var b=m.getAggregator().request("adNode"),c=!1,d="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Xd=function(a,b){var c,d,e,g,u;e=m.getAggregator().request("videoTranslator").translate(a.messageType);g=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&
delete a.ext_passthrough;return a}(a);u=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:b};f(d).mixin(g);f(d).mixin(u);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=q.getWindow();
return("resizeAd"===e||"initAd"===e)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===g.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(g)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===
e?m.getAggregator().persistentTrigger(e,g,u):m.getAggregator().trigger(e,g,u)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Yd=function(){var a=[];return{registerEvent:function(b,c,d){b=new Xd(b,c,d);a.push(b);return b},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Zd=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&
a.hasAlwaysBeen(!0)&&m.getAggregator().trigger("sendDt",g.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},l=function(a){a=(new Sa).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){m.getAggregator().on({adVideoStart:k,adImpression:k,volumeChanged:l,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=m.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},$d=function(){var a=
{AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Sa=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},jb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,u,n,p=[],r=g.OUT_OF_VIEW,v=!1,t=!1,w=!1,z=!0,E=new Yd,x=Zd(),C=new Wd,I=new Sa,A=new Ga,J=function(b){var d;
v=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=E.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(t=!0,r=w?g.IN_VIEW:!1):d.indicatesNotPlaying()?(t=!1,r=g.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,r=t?g.IN_VIEW:g.OUT_OF_VIEW):d.indicatesNormalSize()&&(w=!1,r=t?!1:g.OUT_OF_VIEW),b=parseFloat(d.getVolume(I)),0<b?z=!0:0===b&&(z=!1));p.push(d);n&&M();return d},G=function(b){var c,g,k=oa().wrapToGlobal(J),n=function(a){f.isStr(a)&&(m.getAggregator().provide("vc",
function(){return a}),m.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(g)&&"2"===g.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),v=!0,n(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},H=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};k||(f(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,
b){var d=q.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return k},L=function(){var a=H();a&&!v&&G(a);return a},K=function(a){a=I.getVolumeFromContext(a);z=f.isDef(a)?0<a:!1},M=function(){A.init();f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&m.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&m.getAggregator().trigger("sendDt",
g.DT_CODES.VIDEO_EVENTS),m.getAggregator().trigger("videoQuartileEvent",b)))});p=[];n=!0};(function(){y.addEvent(q.getWindow(),"message",function(a){J(a)});m.getAggregator().on({volumeChanged:K});m.getAggregator().provide({videoEventsString:E,videoVersion:function(){var a,b=L();try{a=b.getVersion()}catch(c){a=-1,m.getAggregator().trigger("error",g.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new $d},adNode:L});L();C.listenForResult();x.isApplicable(s)&&x.start(c)})();
return{findAdNode:L,getViewStateOverride:function(){return r},isHandshakeComplete:function(){return v},triggerInitializationEvents:M,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===g.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(r){if(r===g.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=g.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:r;a.isVideoPlaying=r===g.IN_VIEW}w&&t&&(a.percentInView=100,a.isVideoPlayingInFullscreen=
!0)}}},ae=function(){return new ca(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Tb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():m.getAggregator().trigger("sendDt",g.DT_CODES.PERFORMANCE)}),a=!1},k=function(){b=new Da;d=0;e(!0);b.start()},l=function(d,e,g,l){d=c[d];l?(f.isDef(d[e])||(d[e]=[]),d[e].push(g)):d[e]=g;b&&b.isActive()||k();a=!0},n=function(c,d,e){m.getAggregator().trigger("addOutputItem",{output:d},
c,e);b&&b.isActive()||k();a=!0},p=function(b){f(c).each(function(d,e){var g=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(g).isEmpty()||(m.getAggregator().trigger("addOutputItem",{output:g},d,k),c[d]={});a=!1})};return{start:function(){m.getAggregator().on("preSendDt",function(a){p(a);b&&b.kill()});m.getAggregator().on("addThrottledProp",l);m.getAggregator().on("addThrottledOutputItem",n)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Yb=function(){var a={},b=function(b){a[b]||(a[b]=
new Ca(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();m.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){m.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},be=function(){return new ca(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Eb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(f(a).each(function(a,
c){b[c.getType()]=c}),m.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"pci",c.toString())}catch(f){}}));m.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},ca=function(a,b){var c=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},g=function(){var a,b={};e();f(d).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});
return b};return{addPoint:function(a){d.push(a)},toString:function(){return f(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return d.length===b}}},Fb=function(){function a(){}a.build=function(){var a=[];a.push(new ca(g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=m.getAggregator().request("vc");var d={jv3:Ta,av3:Ta,jvw:be,avw:ae};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Ta=function(){return new ca(g.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
g.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){m.getAggregator().trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(w,"load",function(){m.getAggregator().trigger("measureTime",T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Da;a.onTick({4:function(){m.getAggregator().trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){m.getAggregator().trigger("measureTime",
T.IDS.IN_BROWSER_DELAY)}});a.start()}},N={isFrameworkAvailable:function(a,b){var c,d,e=q.getTop(),f=q.getWindow();try{c=e[a]}catch(g){for(;!d;){try{f.frames[b]&&(d=frame)}catch(l){}if(f===e)break;f=f.parent}}return c||d},getMessageHandler:function(a,b){var c=N.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===c&&e.data[a].returnValue&&(b(e.data[a].returnValue),y.removeEvent(q.getWindow(),"message",d))}catch(f){m.getAggregator().trigger("error",g.ERROR_CODES.GDPR)}};return d},
getCallId:function(){return"ias_"+l.asid},send:function(a,b){m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,a,b)}};m("CCPAConsentDetector",[],function(){function a(a){a&&N.send(b,f(a).toION())}var b="ccd";(function(){var b=N.isFrameworkAvailable("__uspapi","__uspapiLocator");N.send("cca",!!b);if(b){var d,e;f.isFunction(b)?b("getUSPData",1,a):(d={__uspapiCall:{command:"getUSPData",version:1,callId:N.getCallId()}},e=N.getMessageHandler("__uspapiReturn",a),y.addEvent(q.getWindow(),
"message",e),b.postMessage(d,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});m("GDPRConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendorConsents)&&f.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e),glbl:f.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};N.send(c,f(a).toION())}var b=278,c="gcd";(function(){var c=N.isFrameworkAvailable("__cmp",
"__cmpLocator");N.send("gca",!!c);if(c){var e,g;f.isFunction(c)?c("getVendorConsents",[b],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:N.getCallId()}},g=N.getMessageHandler("__cmpReturn",a),y.addEvent(q.getWindow(),"message",g),c.postMessage(e,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});m("GDPRV2ConsentDetector",[],function(){function a(a){var e=f.isDef(a)&&f.isDef(a.vendor)&&f.isDef(a.vendor.consents)&&f.isDef(a.vendor.consents[b])?
a.vendor.consents[b]:void 0;a={appl:f.stringifyTriState(a.gdprApplies),cnst:f.stringifyTriState(e)};N.send(c,f(a).toION())}var b=278,c="gcd2";(function(){var c=N.isFrameworkAvailable("__tcfapi","__tcfapiLocator");N.send("gca2",!!c);if(c){var e,g;f.isFunction(c)?c("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[b],callId:N.getCallId(),version:2}},g=N.getMessageHandler("__tcfapiReturn",a),y.addEvent(q.getWindow(),"message",g),c.postMessage(e,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,
b,c){return b.hasPostMessage()&&!c.isDomless()}});m("postMessageDetector",[],function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=q.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");q.execAtEndOfThread(function(){m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});m("safeFrameDetector",
[],function(){m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"sf",f.stringifyTriState(s.isSafeFrame()))},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Rb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,d=function(a){f(a).each(function(a,b){m.getAggregator().trigger("notify",b)})},e=function(){var e;e=new S(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();m.getAggregator().trigger("jsonp",e,d,!0);m.getAggregator().trigger("updateDtCount")};return{start:function(){m.getAggregator().on("sendCookie",
e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Sb=function(a,b,c,d,e,f,q){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var r,t=d.baseUrl,w,y,z=f.getDocumentMode();"number"===typeof z?(y=2E3,8===z?y=4E3:8<z&&(y=8E3)):y=n(l.sp_imp_maxLength,2E3);w=y;if(s.integratedBlockingApplies(t)){y=t;var E=m.getAggregator().request("mobileApp"),x=E&&E.isMobileAppEnvironment&&E.isMobileAppEnvironment(),
C=l.contextNode.getAttribute("data-ias-container"),I=l.contextNode.getAttribute("data-ias-callback"),E=y+"adContainerId="+C+"&cbFunctionName="+I,E=x?E.replace("monitoring","blocking"):E.replace("skeleton.js",l.integration+".js"),A=l.protocol+":"+l.staticServer+l.integration+"a.js",J=l.protocol+":"+l.staticServer+l.integration+".js",t=E+"&true_pb="+encodeURIComponent(l.passback)+(x?"&redirectUrl="+encodeURIComponent(J):"")+(x?"&passback=":"&adsafe_pb=")+encodeURIComponent(A)+"&"}var x=t=t.replace(g.UNIQUE_ID_TOKEN,
l.asid),G=t.length,H,L,K=n(l.sp_imp_jsInfo_minLength,0),A="";try{H=w-G-K,0<H&&(L=ce(p,H,14,b.on("partialUrls")),A+=L.join("&"))}catch(M){a.add(g.ERROR_CODES.IMPRESSION_URLS)}t=x+A;p=t+="&"===t.slice(-1)?"":"&";var N,G="";try{N=w-t.length,G+=de(N,"adsafe_jsinfo=",a,b,c,e,f,q)}catch(O){a.add(g.ERROR_CODES.JSINFO),G+="adsafe_jsinfo=e:"+a.toString()}t=p+G;d.macroUrl&&(t+="&"===t.slice(-1)?"":"&",t+=d.macroUrl);r=t;d.sendImpression(r);l.impUrl=r;m.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",
R,l)}}}},de=function(a,b,c,d,e,k,t,n){return function(c){var d=c.primary.join(","),g=b,k=0,l=function(a){if(a)return","+a};g.length+d.length+5<=a&&(g+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=l(c):k+=1}));return g+=",ov:"+k}(function(){var a,b;b=a={viewState:g.NA};s.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?q.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(q.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||
n.requiresDelayedViewabilityEvent();a=b;var v=a.viewState;b=e.getAvidIds();v=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+v,"em:"+s.embedded,"fr:"+s.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(v.push("abi:"+b.bundleIdentifier),v.push("apn:"+b.partner),v.push("apv:"+b.partnerVersion));a=ee(a,c,d,e,k,t,n);m.getAggregator().trigger("eligiblerender");return{primary:v,secondary:a}}())},ee=function(a,b,c,d,e,k,u){var n=[],p=m.getAggregator().request("mPage");n.push("mn:"+l.mn);n.push("pt:"+
function(){var b=u.stringifyPingTimes();a.viewState!==g.NA&&(b+=a.details);return b}());n.push(f(k.params()).toParams());c.on("mrcAudit")&&!s.isDomless()&&n.push("dvs:"+q.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===g.IMPRESSION_EVENT;(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+l.mode);n.push("thd:"+f.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(q.now()-l.birthdate));
l.perf.mark("si");c.on("swapids")?n.push("oid:"+l.oid):n.push("uid:"+d.unq);n.push("v:19.8.101");n.push("sp:"+(l.isSplitMode?1:0));n.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+f(t.windowSize()).toArray().join(".")),n.push("sr:"+f(t.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+
b);return n},ce=function(a,b,c,d){var e,g=[],l=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(l(b))return b}),a=f(a).map(function(a,b){if(!l(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var l=e.key,m;m=24+g.join("&").length+l.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+l,l=g.join("&").length,f.length+l<=b&&g.push(f)}));return g},Pb=function(){return{isApplicable:function(a){a=
q.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=q.getWindow();a=fe(a.navigator.plugins);var b=a.hash(),c=b.join(".");m.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:g.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),m.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:g.DT_CODES.ADTALK}))}}},ie=function(a,b){return{start:function(){try{var c=ge(),d=c.getMethodName(a),e=new S(b.getEnabledScriptUrl(a)),f=he,l=q.getDoc();(new f(l.body||
l.head||l.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){m.getAggregator().trigger("error",g.ERROR_CODES.FEATURE_SCRIPT)}}}},ge=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),m.getAggregator().trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:g,features:b,context:s,dtBaseURL:l.dtBaseURL,spg:Ua};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Wb=function(){return{start:function(a,b){f(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&ie(d,b).start()})}}},fe=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=O.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=q.floor(q.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},he=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=t.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);
f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g,m;g=(new Date).getTime();m=Math.floor(1E5*Math.random());b=b+"?t="+g+"&r="+m}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}},Ua=function(a){var b=new Ba;(function(){b.listen(function(b){return b&&
b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,d){b.stop();q.setTimeout(function(){a.isDtCallAlreadySent()||(m.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),f(d.cache).each(function(b,c){a.addToCache(b,c)}))},q.round(1E3*q.random()))})})();(function(){m.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),q.setTimeout(a.sendToOtherTags,1300),q.setTimeout(a.sendToOtherTags,
3200))})})()};m("spg",["spgCache"],Ua,{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});m("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,d=function(){return e(b)},e=function(b){return f(b).keys().sort().toString()===a.toString()},k=function(){c||(c=!0,f(b).each(function(a,b){m.getAggregator().trigger("addOutputItem",b,a,{type:g.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),m.getAggregator().trigger("sendMinDt",g.DT_CODES.SCA))};return{allExpectedKeysPresent:e,
isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!d()&&(b[a]=c);d()&&k()},isFull:d,sendToOtherTags:function(){(new ha).send({scaInfoOriginatorASID:l.asid,cache:b})}}},{});try{Va()}catch(je){__IntegralASDiagnosticCall("main",je,l)}};try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
