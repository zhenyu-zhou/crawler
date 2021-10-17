




var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var url = '//diag.adsafeprotected.com/js?';
					try {
						var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
						url += 'code:fwjs-diag-' + code;
						url += '&err:' + errMsg;
						if (config) {
							
							url += '&codeanderr:' + code + '_' + errMsg;
							url += '&version:' + config.version || '';
							url += '&server:' + config.mn || '';
							url += '&mode:' + config.mode || '';
							url += '&forceAppend:' + config.forceAppend || '';
							url += '&asid:' + config.asid || '';
							url += '&anId:' + config.anId || '';
							url += '&advEntityId:' + config.advEntityId || '';
							url += '&pubEntityId:' + config.pubEntityId || '';
							url += '&mobOrTab:' + config.mobOrTab || '';
							url += '&app:' + config.app || '';
							url += '&mobAppWebview:' + config.mobAppWebview || '';
						}
						url += '&domless:' + __IASScope.isDomless;
					} catch (e) {
						url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
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
		version: '19.8.250',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.5.12.js", main: "static.adsafeprotected.com/main.19.8.250.js"},
		protocol: 'https',
		jsref: "",
		asid: "9588f0ce-2f63-11ec-a3e4-0661eaac6e18",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime",
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
		fwMonitoring: '',
		mn: "app10or",
		mobOrTab: false,
		app: true,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/33642\/3584127\/",
		anId: '',
		advEntityId: '33642',
		pubEntityId: '3584127',
		videoId: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: '',
		iasProxyPartnerDomain: ''
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
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






	
	__IASScope.isDomless = typeof window === "undefined";
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
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
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
__IntegralASConfig.initialize=function(l,x,M){function W(h){if(!l.executedContinueMain){l.executedContinueMain=!0;var a;l.perf.markStart(ma);db(l).verifyContextNode();a=eb();var c=a.mAdTalk,b=a.iOutput,d=a.mErrors,e=a.mAncestorOrigins,f=a.mBrowser,q=a.mPageUrls,m=a.mFeatures,p=s,u=a.renderDetector,y,v,K;l.perf.markStart(na);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";n.getAggregator().trigger("addOutputItem",{output:h?"1":"0"},"nbld",{type:k.IMPRESSION_EVENT});
n.getAggregator().trigger("addOutputItem",{output:l.mainBirthdate},"mtim",{type:k.IMPRESSION_EVENT});var w;try{c.isApplicable(s)&&(c.start(),b.addItem(c.getFrameMap(),"fm"),m.on("fm2")&&b.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),m.on("idMap")&&(w=c.getIdMap())&&b.addItem(w,"idMap"))}catch(A){d.add(k.ERROR_CODES.ADTALK_GENERAL)}try{e.isApplicable(f,m,p)&&e.start(),K=q.detectTopURL(),m.on("exch")&&(y=(new fb).createInstance(d,b),y.parse(K)),v=gb(),v.isApplicable(m)&&v.start(m),p.usesGroupMCustomMetric()&&
hb(),u.start()}catch(F){d.add(k.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(na);h=K;c=a.mVideo;try{ib(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability).send(h),g.isFunction(c.triggerInitializationEvents)&&c.triggerInitializationEvents()}catch(B){__IntegralASDiagnosticCall("impsend",B,l)}h=a.mBrowser;c=a.mIds;b=a.mViewability;d=a.mFeatures;e=a.mComm;f=a.mDataTransfer;q=a.mErrors;m=a.iOutput;p=a.loopDelay;u=a.mAdTalk;y=a.viewabilityMeasurement;a=a.mAncestorOrigins;v=s;try{l.perf.markStart(oa);
var r=jb();r.start();r.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FF,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FF_EXP]);var X=kb(h,c,b);X.isApplicable(d)&&X.start();var G;d.bootstrapOn("getTpl")&&d.on("usetpl")&&(G=lb(e,f,q,c,m),G.init());mb(m,p,u,q,d,e,f,c,a);y&&y.start&&y.start();v.isDomless()||nb().start(["sca","xsca","rsrch"],d);ob();n.runTier(k.TIERS.VIEWABILITY);var pa=pb();pa.isApplicable(d)&&(pa.start(),S.recordBlockingTime(),l.perf.mark(qb),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());l.perf.markEnd(oa)}catch(t){q.add(k.ERROR_CODES.POST_IMPRESSION)}l.perf.markEnd(ma)}}
function rb(h,a,c,b,d,e,f,q,m,p){try{l.perf.markStart(qa),l.tpiLookupURL&&sb(f,q).init(l.tpiLookupURL),s.isDomless()||p.isStarted()&&p.sendOriginList(),n.runAll(),r.execAtEndOfThread(function(){var e;try{l.perf.markStart(ra);e={output:(new Date).getTime()-d};h.addItem(e,"sinceFw",{type:k.DT_CODES.ADTALK});g.isDef(a.loopStarted())&&h.addItem({output:a.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK});l.perf.markEnd(ra);var f,q;l.isSplitMode&&(q=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(sa,
q));l.impUrl&&l.perf.markResource(tb,l.impUrl);f=l.perf.getData();n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"prf",g(f).toION());c.isApplicable(s)&&c.sendAdTalkCall()}catch(m){b.add(k.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(qa)}catch(u){b.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function ub(h){var a=new vb(h,s),c=new wb,b=new xb(h,s),d=yb(h,s),e=(new zb(l,s,h)).resolve(),f=[a],q=[];d.applies()&&f.push(d);b.applies()&&f.push(b);c.applies(h,s)&&f.push(c);g(e).each(function(a,b){f.push(new Ab(b,
s));q.push(b.id)});0<q.length&&(n.getAggregator().trigger("addOutputItem",{output:q.join(".")},"scm",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:q},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0}));return f}function Bb(h,a){return!s.isVideo()||s.isAvid()||s.isOmid()||s.isInMobiMraidVideo()?{}:Cb(l.videoId,h,a)}function eb(){var h,a,c,b,d,e,f,q,m={};l.perf.markStart(ta);var p=n.getAggregator();Db();m.mFeatures=p.request("features");m.mFeatures||(m.mFeatures=p.provide("features",
ua()));l.integration&&m.mFeatures.setReportedBootstrapFeatures("intblk","integration");l.autotagSizeSet&&m.mFeatures.setReportedBootstrapFeatures("ats","autotagSizeSet");l.encodeInvalidUrlChars=s.isDomless()?!1:m.mFeatures.on("encodeInvalidUrlChars");p.provide("mobileApp",function(){return h=h||new Eb(m.mFeatures)});p.provide("avidJsClient",function(){return a=a||new Fb(r.getWindow())});p.provide("context",s);m.mBrowser=p.provide("browser",(new Gb).createInstance());m.mErrors=p.request("mErrors");
m.mIds=p.provide("ids",Hb());m.iOutput=Ib(p);p.request("mJsonp");m.mComm=p.request("mComm");m.viewabilityMeasurement=(new Jb(Kb(m.mIds),m.mFeatures,m.mBrowser)).create();b=p.request("omidAdSessionContext");Lb(b,p);m.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=m.mIds.unq);m.mAdTalk=(new Mb).createInstance(m.mFeatures);c=Nb();b=Ob(p);d=p.provide("mPage",(new Pb).createInstance());m.mAncestorOrigins=Qb();m.mPageUrls=p.provide("pageUrls",(new Rb).createInstance(m.mAncestorOrigins,r));e=p.provide("mScreenEvents",
Sb());p.provide("ieXDomainViewability",Tb(m.mBrowser));f=Ub(m.mBrowser);q=Bb(m.mFeatures,e);m.mVideo=p.provide("video",q);Vb(Wb.build());f=(new Xb).createInstance(m.mErrors,f,m.mFeatures);d=(new Yb).createInstance(f,m.mErrors,d,s);q=p.provide("jobFactory",Zb());m.mDataTransfer=$b(f,m.mErrors,m.mFeatures,m.mIds,m.iOutput,m.mBrowser,e,c);c=ac(m.mErrors,m.mFeatures,p,b);m.mMode=bc(c,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=p.provide("viewability",cc(E(),m.viewabilityMeasurement,
m.mBrowser,m.mDataTransfer,m.mFeatures,p,m.iOutput,d,e,m.mVideo));dc(m.mFeatures,m.mViewability,b,q);m.loopDelay=va();m.renderDetector=ec();m.mDataTransfer.setViewabilityMod(m.mViewability);l.perf.markEnd(ta);return m}function wa(h){var a=h&&h.sca,c=h&&h.xsca,b=h&&h.w,d=h&&h.h;return function(e){e="string"===typeof e?JSON.parse(e):e;if(Object.assign)Object.assign(l,e);else for(var f in e)l[f]=e[f];l.isResolved=!0;l.sp_cdnScripts={sca:a,xsca:c};b&&d&&(l.adWidth=b,l.adHeight=d,l.autotagSizeSet=!0);
W(l.isNewBuild)}}function Db(){var h,a,c;c=n.getAggregator().request("omidAdSessionContext");h=c.app&&c.isDisplay&&!c.isWeb;(a=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&c.isLimitedSandbox&&"1"===l.adWidth&&"1"===l.adHeight&&(c.isLimitedSandbox=!1);h&&a&&(c.delayingViewabilityEvents=!0);if("app"===c.environment||!0===l.mobAppWebview)l.mobOrTab=!0}function Lb(h,a){if(h&&h.queuedOutputItems)for(var c=0;c<h.queuedOutputItems.length;c++)a.trigger("addOutputItem",{output:h.queuedOutputItems[c].value},
h.queuedOutputItems[c].code,{type:"impression"})}function dc(h,a,c,b){var d=ub(h);n.getAggregator().provide("viewabilityDefinitions",d);return g(d).map(fc(h,a,c,b))}function mb(h,a,c,b,d,e,f,q,m){var p;"true"!==l.minimizeCalls&&(p=(new Date).getTime(),r.execAtEndOfThread(function(){rb(h,a,c,b,p,d,e,f,q,m)}))}function xa(h){if(l.isResolved)W(l.isNewBuild);else{if("string"===typeof h)try{h=JSON.parse(h)}catch(a){}var c,b=h;c={37103:"https://vfw.amazon-adsystem.com/ias/j"};var d=/iasProxyPartnerId=([\d]+)/g.exec(b&&
b.config),d=d&&d[1];c=b&&b.host||c[d]||"https://jsconfig.adsafeprotected.com";d=h&&h.config;b=h&&h.contentType;try{var e=l.contextNode.src;-1!==e.indexOf("fw.js")&&-1!==e.indexOf("?")&&(l.staticFwjsMacros=e.split("?")[1])}catch(f){}d&&(e=c+"/jsconfig"+d+(l.adSessionId?"&adSessionId="+l.adSessionId:""),"application/json"===b?n.getAggregator().trigger("getJSON",e,wa(h)):n.getAggregator().trigger("jsonp",e,wa(h),!1,"cbName"))}}function fc(h,a,c,b){return function(d,e){var f,q,m;f=ya(e,a);var p=gc(c,
h,e.rts).getCallbacks(),g=za(b.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId));e.sendOtherwiseInViewSignal&&(m=ya(e,a,e.sendOtherwiseInViewSignal),q=za(b.createPingJobs(e.type,e.timeInViewThresholds,p,e.metricId,e.sendOtherwiseInViewSignal)));e.rtsCallbacks=p;e.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?f=hc(f,e,g,s.isVideo()):(f=Aa(f,Y(e.minUnit),g),e.sendOtherwiseInViewSignal&&(q=Aa(m,Y(e.minUnit),q,e.sendOtherwiseInViewSignal),q.start()));f.start();return f}}
function ic(h){var a,c,b;l.mainBirthdate=l.hasOwnProperty("birthdate")?(new Date).getTime()-l.birthdate:-1;l.perf.markStart(Ba);l.isNewBuild=h;h=[jc,kc,lc,mc,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc];for(a=0;a<h.length;a+=1)n(h[a].name,h[a].dependencies,h[a].creator,h[a].settings);n.startSystem();h=n.getAggregator();h.provide({omidAdSessionContext:{}});h.provide({omidAdSessionVerificationParameters:{}});l.isResolved&&h.provide("features",ua());a=yc();c=Ca();b=(new zc).createInstance(a,c);h.provide({mErrors:a,
mJsonp:c,mComm:b});a=__IASOmidVerificationClient;h.provide({omidVerificationClient:a});h=[{environment:ba(a),adSessionReadyStrategy:Ac(a)},{environment:Bc(),adSessionReadyStrategy:Cc()}];(new Dc(h)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(Ba)}var Da={};if(Object.assign)l=Object.assign({},l);else{for(var Ea in l)Da[Ea]=l[Ea];l=Da}var g=function(h){return new D(h)},D=function(h){this.iterable=h};D.prototype.isObj=function(h){var a=null===this.iterable,a="object"===typeof this.iterable&&
!a,c=!this.isArray()&&a;return h?a:c};D.prototype.isArray=function(){return this.iterable instanceof Array};D.prototype.isEmpty=function(h){return 0===this.keys(h).length};D.prototype.each=function(h,a){var c=this.iterable;if(c.length===+c.length)for(var b=0,d=c.length;b<d;++b)h(b,c[b]);else for(b in c)(c.hasOwnProperty(b)||a)&&h(b,c[b])};D.prototype.map=function(h,a){var c=[];this.each(function(b,d){var e=h(b,d);if(void 0!==e||a)c[c.length]=e});return c};D.prototype.stringify=function(h,a){a=a||
",";var c=[];this.each(function(a,d){var e=h(a,d);g.isDef(e)&&c.push(e)});return c.join(a)};D.prototype.toION=function(h,a){var c,b="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?c=this.map(function(b,c){return g(c).toION(h,a)}):(b="{",d="}",c=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=g(c).toION(h,a);return d?m:(h[b]||b)+":"+m}));return b+c.join(",")+d};D.prototype.compareTo=
function(h){var a=!1;this.each(function(c,b){h[c]!==b&&(a||(a={}),a[c]=b)});return a};D.prototype.toParams=function(h){return this.stringify(function(a,c){return"string"===typeof a&&-1!==a.indexOf("NULL")?c:a+":"+c},h)};D.prototype._privateMixin=function(h,a,c){for(var b in a)g.isDef(a[b])&&(c||a.hasOwnProperty(b))&&(h[b]=a[b]);return h};D.prototype.mapToObj=function(h){var a={},c=this;this.each(function(b,d){var e=h(b,d);g(e).isObj()&&c._privateMixin(a,e)});return a};D.prototype.invert=function(){return this.mapToObj(function(h,
a){var c={};c[a]=h;return c})};D.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};D.prototype.find=function(h){var a;this.each(function(c,b){h(c,b)&&(a=b)});return a};D.prototype.findFirst=function(h){var a,c;this.each(function(b,d){!c&&h(b,d)&&(a=d,c=!0)});return a};D.prototype.keys=function(h){var a=[];this.each(function(c){a.push(c)},h);return a};D.prototype.asStrings=function(){var h={};this.each(function(a,c){h[a]=""+c});return h};D.prototype.selectProperties=function(h){var a=
{},c=this;g(h).each(function(b,d){g.isDef(c.iterable[d])&&(a[d]=c.iterable[d])});return a};D.prototype.filter=function(h,a){return this.map(function(a,b){var d;if(g.isUndef(h)||g.resolve(h,a,b))d=b;return d},a)};D.prototype.toArray=function(){return this.map(function(h,a){return a})};D.prototype.JSONStringify=function(){var h,a,c=!1;x.Prototype&&x.Prototype.Version&&-1===x.Prototype.Version.indexOf("1.7")&&(c=!0);c&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);h=JSON.stringify(this.iterable);
c&&(Array.prototype.toJSON=a);return h};D.prototype.contains=function(h){var a=g(this.iterable).findFirst(function(a,b){return h===b});return g.isDef(a)};g.toBase=function(h,a){var c,b=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];h=b?-h:h;do c=h%a,e.push(d[c]),h=(h-c)/a;while(0<h);e=e.reverse().join("");return b?"-"+e:e};g.isDef=function(h){return"undefined"!==typeof h};g.isUndef=function(h){return!g.isDef(h)};g.isBool=function(h){return"boolean"===typeof h};
g.noop=function(){};g.identity=function(h){return h};g.isFunction=function(h){return"function"===typeof h};g.isStr=function(h){return"string"===typeof h};g.useIfDef=function(h){return g.isDef(h)?h:!1};g.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};g.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};g.resolve=function(h){var a=g(arguments).toArray();a.shift();return g.isFunction(h)?h.apply({},a):h};g.flatJSONParse=function(h){var a,c,b,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e=
{};for(b=d.exec(h);b;)a=b[1],c=b[3],b=b[2],e[a]=c||+b,b=d.exec(h);return e};g.debounce=function(h,a,c){var b,d=c||x;return function(){var c=this,f=arguments;d.clearTimeout(b);b=d.setTimeout(function(){b=null;h.apply(c,f)},a)}};g.last=function(h){return h[h.length-1]};g.collapseArgsIntoHash=function(h,a){var c={};a?c[h]=a:c=h;return c};g.fromBoolToNum=function(h){return h?1:0};g.isNumeric=function(h){return g.isDef(h)&&null!==h&&!isNaN(h)};g.fromNodeListToArray=function(h){return Array.prototype.slice.call(h)};
g.encodeInvalidUrlChars=function(h,a){var c={$:"%24","[":"%5B","]":"%5D","{":"%7B","}":"%7D","|":"%7C"},b=h;a&&"string"===typeof h&&(b=h.replace(/%(?![0-9A-F][0-9A-F])/gi,"%25"),b=b.replace(/\$|\[|\]|\{|\}|\|/gi,function(a){return c[a]}));return b};var n=function(){var h,a={},c=[],b=[],d=function(){var a={},c=g(arguments).toArray();c.unshift(a);b.push(c);return a},e=function(b,d,e,p,u){u=u||{};var y,v,k=function(a){0===c.length&&(c=g(a).map(function(a,b){return h.request(b)}))},w=function(){if(!y){var a=
[];y=!0;k(["features","browser","context"]);u.emits&&(b.events=new E);if(!u.applies||u.applies.apply(u,c))v=!0,a=g(e).map(function(a,b){return h.request(b)},!0),a.push(b),g(b).mixin(p.apply({},a))}};(function(){var b=u.tier;g.isDef(b)&&(a[b]=a[b]||new ca,a[b].push(w))})();h.provide(d,function(){var a;w();v&&(a=b);return a});return b};d.runAll=function(){var b=g(a).keys().sort(function(a,b){return a-b});g(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=
function(){h=h||new Fa;g(b).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return h};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",
VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",RENDER:"r",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",
JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",IMPRESSION_PERFORMANCE:"e",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",
INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",
NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",
AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",OMID_GEOMETRY_MEASUREMENT_CHANGED:"omidGeometryChanged",VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,
0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",REFERRER_POLICY:"no-referrer-when-downgrade",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",
CONTENT_STYLED:"cs",MRAID_DEFAULT:"md",MRAID_READY:"mr",MRAID_LOADING:"ml",MRAID_UNKNOWN:"mu",OMID_RENDERED:"or",OMID_UNRENDERED:"ou"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},Ba="mf",ma="cm",ta="in",na="pr",oa="po",qb="bl",qa="lo",ra="lt",sa="md",tb="id",db=function(h){return{verifyContextNode:function(){if(!(__IASScope.isDomless||h.contextNode&&null!==h.contextNode.parentNode)){var a,c=M.getElementsByTagName("script"),b=c.length,d=c[b-1],e=h.scriptUrl;try{for(;0<=--b;)if(a=c[b],a.src&&
0===a.src.indexOf(e)&&null===a.getAttribute("data-ias-script-tag")){d=a;a.setAttribute("data-ias-script-tag","found");break}}catch(f){}h.contextNode=d}}}},Fc=function(){var h,a=["STYLE","SCRIPT","HEAD","META"],c=k.RENDER.CREATIVE_NODE_TYPES.concat(k.RENDER.CONTAINER_NODE_TYPES),b=0,d=l.useFIF&&s.friendlyIframe||s.isSpecifiedAd(),e=0,f=[],q=function(q){var p=t.isNodeXDomainIframe(q)||t.isNodeCreative(q),u=!q;h=u?l.contextNode.parentNode:q;if(p||u){var y=f.length;0<y&&(e<y?e=y:(e=0,f=[]));n.getAggregator().trigger("evaluateCreativeFinderResult",
q)}else{if(d){var v;v=p=q;u=s.friendly?r.getTop().document.body:l.contextNode.ownerDocument.body;for(;3>b;){if(u&&p===u){v=p;b=3;break}t.isWindow(p)&&(v=t.crossQuerySelector("["+k.AD_IDENTIFIER+"-"+l.asid+"]"),p=g.isDef(v)?v:p);v=p=g.isDef(p)?p.parentNode||p:p;b++}p=v}else p=q;if(t.isWindow(p)){try{y=p.document}catch(K){y=l.contextNode.ownerDocument}q=y}else"IFRAME"===t.getNodeName(p)?(f.push(q),q=q.contentWindow.document):q=p;var y=[],u=(p=q&&q.getElementsByTagName&&q.getElementsByTagName("*"))&&
p.length,w;if(p)for(var A=0;A<u;A++)w=(v=p[A])&&v.nodeName&&v.nodeName.toUpperCase(),!v.children||0!==v.children.length||g(c).contains(w)||g(a).contains(w)||g(y).contains(w)||y.push(w);y=c.concat(y);(new Ec(y,f)).searchDescendants(q)}};n.getAggregator().on("creativeFinderBatchCompleted",q);return{find:q,getClosestContainerName:function(){return t.getNodeName(h)}}},Ec=function(h,a){var c=function(b){function c(b){var d=t.getNodeName(b),e=t.isNodeCreative(b)||"IFRAME"===d;d&&e&&!t.isEmptyFriendlyFrame(b)&&
(d=t.getNodeArea(b),d>m&&!g(a).contains(b)&&(q=b,m=d))}function e(){do c(b[f]),f+=1;while(0!==f%p&&f<b.length);f<b.length?r.execAtEndOfThread(e,0):n.getAggregator().trigger("creativeFinderBatchCompleted",q)}var f=0,q=null,m=-1,p=500;if(b.length&&n.getAggregator().request("useYieldSearch"))e();else{for(f;f<b.length;f++)c(b[f]);n.getAggregator().trigger("creativeFinderBatchCompleted",q)}};return{searchDescendants:function(a){a=a||l.contextNode.parentNode;var d,e,f=[];for(d=0;d<h.length;d++){e=h[d].toLowerCase();
var q=a.getElementsByTagName&&a.getElementsByTagName(e);if(q&&q.length)for(e=0;e<q.length;e++)f.push(q[e])}c(f)}}},ec=function(){var h,a=!1,c=!1,b=!1,d={status:k.RENDER.STATUS.OTHER,details:k.RENDER.DETAILS.OTHER},e={status:k.RENDER.STATUS.DETECTED,details:k.RENDER.DETAILS.ENVIRONMENT},f=n.getAggregator().request("omidAdSessionContext"),q=function(){b=a=!0},m=function(a){a&&(a.status=k.RENDER.STATUS.DETECTED);n.getAggregator().trigger("adRendered")},p=function(){var a=!1;s.isOmid()&&f&&f.useOMID13Logic&&
(a=!0);return a},u=function(a,b){h.save(k.RENDER.DIAGNOSTIC.CONTENT_STYLED);var c=/url(?:\(['"]?)(.*?)(?:['"]?\))/.exec(b.content)[1],d=t.createImage();d.onload=function(){0<d.naturalHeight*d.naturalWidth&&a.setAttribute&&a.setAttribute("data-ias-rend-bi",!1)};d.src=c;a.setAttribute("data-ias-rend-bi",!0)},y=function(a){var b={},c=r.getDoc(),d=function(e){var f=e&&e.type;if("readystatechange"===f&&"complete"===e.target.readyState||"load"===f)m(b),h.saveNode(a),"readystatechange"===f?h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY):
"load"===f&&h.save(k.RENDER.DIAGNOSTIC.LOAD_FIRED),w(b),z.removeEvent(a,"load",d),z.removeEvent(c,"readystatechange",d)};"complete"===c.readyState?(m(b),h.saveNode(a),h.save(k.RENDER.DIAGNOSTIC.DOCUMENT_READY)):(z.addEvent(a,"load",d),z.addEvent(c,"readystatechange",d));return b},v=function(){var a=r.getWindow().mraid,b=a&&a.getState&&a.getState(),c=function(){z.removeEvent(a,"ready",c);h.save(k.RENDER.DETAILS.ENVIRONMENT);h.save(k.RENDER.DIAGNOSTIC.MRAID_READY);m();w({status:k.RENDER.STATUS.DETECTED})};
h.save(k.RENDER.DETAILS.ENVIRONMENT);"default"===b?(m(),h.save(k.RENDER.DIAGNOSTIC.MRAID_DEFAULT),d.status=k.RENDER.STATUS.DETECTED):"loading"===b?(z.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_LOADING)):(z.addEvent(a,"ready",c),h.save(k.RENDER.DIAGNOSTIC.MRAID_UNKNOWN));w(d)},l=function(a){a===k.RENDER.STATUS.DETECTED&&n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},w=function(b){var c=
h.build();b=b.status||d.status;c=c?c:d.details;a&&b===k.RENDER.STATUS.DETECTED?(l(b),n.getAggregator().trigger("addThrottledOutputItem","rend",b),n.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(l(b),n.getAggregator().trigger("addOutputItem",{output:b},"rend"),n.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},A=function(){n.getAggregator().on("primaryadfound",function(a){var b,c=d,e=new Fc,f=!0;n.getAggregator().on("evaluateCreativeFinderResult",function(a){if(t.isNodeXDomainIframe(a))b?
r.clearInterval(b):f=!1,c=y(a);else if(a){var d=!1,q=t.getRect(a),p;if(p=a&&"IMG"===t.getNodeName(a)){p=!0;var v=g.isDef(a.naturalWidth)?a.naturalHeight*a.naturalWidth:0,l=getComputedStyle(a),n=0===a.src.length&&H.contains(l.content,"url"),A=a.getAttribute&&a.getAttribute("data-ias-rend-bi");0<v&&!n&&(p=!1);"false"===A&&(h.save(k.RENDER.DIAGNOSTIC.CONTENT_STYLED),p=!1);n&&!A&&u(a,l)}p&&(d=!0,h.save(k.RENDER.DIAGNOSTIC.BROKEN_IMAGE));!d&&q.width>=k.RENDER.WIDTH_THRESHOLD&&q.height>=k.RENDER.HEIGHT_THRESHOLD&&
(m(c),b?r.clearInterval(b):f=!1);h.saveNode(a)}else a=e.getClosestContainerName()||h.getAdNodeName(a)||c.details,h.save(a);w(c)});var q=function(){var b=a&&a.getAdNode();try{e.find(b)}catch(c){n.getAggregator().trigger("renderdiag",c)}},p=n.getAggregator().request("mobileApp");p&&p.isMobileAppEnvironment&&p.isMobileAppEnvironment()&&s.isMraid()?v():(q(),f&&(b=r.setInterval(q,500)));n.getAggregator().trigger("eligiblerender")})},F=function(){var a=f&&!!f.isVideo,b=!p()||f&&!!f.videoStartArrived,d=
!p()||f&&!!f.geometryArrived,q=!f.omidEarlyExit||f.omidImpressionArrived,g=!(f.omidEarlyExit&&p())||f.omidLoadedArrived;return!c&&d&&q&&g&&(!a||b)?(n.getAggregator().trigger("addOutputItem",{output:s.getTagTime()},"oren"),n.getAggregator().trigger("eligiblerender"),h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_RENDERED),m(),w(e),c=!0):!1};return{start:function(){var a=!1;n.getAggregator().trigger("perfCheckpoint",{type:k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),
code:"initial"});n.getAggregator().on("adRendered",function(){a=!0});n.getAggregator().provide("adRenderStatus",function(){return a});n.getAggregator().provide("useYieldSearch",function(){return b});h=new Gc;new Hc;n.getAggregator().on("impressionsent",q);p()||f.omidEarlyExit?F()||(h.save(k.RENDER.DETAILS.ENVIRONMENT),h.save(k.RENDER.DIAGNOSTIC.OMID_UNRENDERED),w(d),n.getAggregator().on("omidrendgeoupdate",function(){F()}),n.getAggregator().on("omidrendvideostart",function(){F()}),f.omidEarlyExit&&
(n.getAggregator().on("omidimpressionarrived",function(){F()}),n.getAggregator().on("omidloadedarrived",function(){F()}))):s.isAvid()||s.isOmid()||s.isVideo()?(n.getAggregator().trigger("eligiblerender"),h.save(e.details),m(),w(e)):(w(d),A())}}},Gc=function(){var h=[],a=[],c=function(a){var c;if(t.isWindow(a))c="WINDOW";else if(t.isNodeXDomainIframe(a))c="XIFRAME";else try{c=t.getNodeName(a)}catch(f){b("nen")}return c},b=function(a){h.push(a)};return{build:function(){var b=[];g(a).each(function(a,
c){b.push(c)});g(h).each(function(a,c){b.push(c)});a=[];h=[];return b.join(".")},getAdNodeName:c,save:b,saveNode:function(d){try{var e=d&&c(d),f=d&&t.getRect(d),q=d&&t.hasBackgroundImage(d),m=d&&d.innerText&&0<d.innerText.length,p=d&&d.children&&0===d.children.length&&m,h=f&&f.width>=k.RENDER.WIDTH_THRESHOLD&&f.height>=k.RENDER.HEIGHT_THRESHOLD?k.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:k.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE;a.push(e);a.push(h);q&&a.push(k.RENDER.DIAGNOSTIC.STYLED_NODE);p&&a.push(k.RENDER.DIAGNOSTIC.TEXT_NODE)}catch(g){b("sne")}}}},
Hc=function(h){var a,c=!1,b=!1,d=function(){n.getAggregator().trigger("addOutputItem",{output:!a&&c?"1":"0"},"rmeas");a&&a.message&&!b&&(__IntegralASDiagnosticCall("renderloop",a,l),n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"rle",1),b=!0)};n.getAggregator().on("eligiblerender",function(){c=!0;d()});n.getAggregator().on("renderdiag",function(b){a=b;d()});d()},Z=function(){return{applies:function(h,a){var c=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||
h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!c.isMobileAppEnvironment()&&h.hasIntersectionObserver()}}},Ic=function(){return{applies:function(h){var a=n.getAggregator().request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.WEBKIT)||h.browserIs(k.BROWSERS.MSEDGE))&&!a.isMobileAppEnvironment()&&h.hasResizeObserver()}}},hb=function(){var h,a,c=!1,b=n.getAggregator().request("mPage"),d=function(){!c&&
a&&h&&!b.isHidden()&&(c=!0,n.getAggregator().trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};n.getAggregator().on("primaryadfound",function(a){h=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});n.getAggregator().on("impressionsent",function(){a=!0;d()});b.onHiddenChange(d)},Nb=function(){var h=[],a={},c={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h",omidObstructions:"oobs"},b={omidObstructions:["sl","percentInView","reason"]};n.getAggregator().on("newScreenEvent",function(b){b=g(b).selectProperties(g(c).keys());
b=g(b).asStrings();var f=g(b).compareTo(a);(f=d(f))&&JSON.stringify(f)!==JSON.stringify({})&&(f.t=s.getTagTime(),h.push(f));g(a).mixin(b)});var d=function(a){g(b).each(function(b,c){var d=!1;g(c).each(function(b,c){a[c]&&(d=!0)});!1===d&&delete a[b]});return a};return{toString:function(){return g(h).toION(c)}}},Fa=function(){var h=new Jc,a=new E;return g(h).mixin(a)},E=function(){var h={},a={},c=function(b,c,f){if((b=a[b])&&0!==b)return f&&(b=b.slice(0,1)),g(b).each(function(a,b){c.apply({},b)}),
!0},b=function(a,b,c){h[a]=h[a]||new ca;h[a].push(b,c)};return{on:function(a,e){var f={};e?f[a]=e:f=a;g(f).each(b);g(f).each(c)},once:function(a,e){c(a,e,!0)||b(a,e,1)},trigger:function(a){var b=g(arguments).toArray();b.shift();var c;(c=h[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=g(arguments).toArray();c.shift();var f=b;a[f]=a[f]||[];a[f].push(c);(f=h[b])&&f.run.apply({},c)}}},da=function(){var h=function(a,b,d){var e,f=b.length,q=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);d&&
d(a,b);if(q&&q.length){for(a=0;a<q.length;a++)(e=q[a])&&t.isWindow(e)&&(b[f]=a,h(e,b,d));b.pop()}},a=function(a,b){try{h(b||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(c,b){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},b);return g(d).filter(c)}}},ca=function(){var h=[];return{push:function(a,c){var b=0;c=c||Number.MAX_VALUE;h[h.length]=function(){b<c&&(b++,a.apply({},arguments))}},run:function(){var a=arguments;
g(h).each(function(c,b){b.apply({},a)})}}},za=function(h){var a={};return{doEligibleJobs:function(c){g(h).each(function(b,d){var e=d&&d.getTime();g.isDef(e)&&c>=e&&!a[e]&&(d.getTask().call(),a[e]=!0)})}}},Ha=function(){var h,a=new ea,c=function(b,c,e,f){var q,m,p,h;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),m=b.source,h=g.noop,c(q)&&(f&&(p=f(m,q))&&(h=function(){a.send(function(){return p},m)}),e(b,q,h))}catch(y){q&&n.getAggregator().trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,
d,e){h=function(f){c(f,a,d,e)};z.addEvent(x,"message",h)},stop:function(){h&&z.removeEvent(x,"message",h);h=null}}},ea=function(){var h=function(a){return g(a).isObj()?[a]:(new da).getFrames(a)},a=function(a){return g(a).mapToObj(function(a,c){var e;g.isFunction(c)||(e={},e[a]=c);return e})};return{send:function(c,b){if(JSON&&JSON.stringify){var d=h(b);g(d).each(function(b,d){var q;q=g.resolve(c,d)||{};q.sentTime=r.now();q=a(q);d.postMessage(g(q).JSONStringify(),"*")})}}}},Kc=function(h,a){return{onAll:function(c){var b=
{};g(a).each(function(d,e){h.on(e,function(){b[e]=1;g(b).keys().length===a.length&&(b={},c())})})}}},Ib=function(h){var a=0,c={},b=function(b,c,d){if(g.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=g.resolve(b.output);this.props.asION&&(a=g(a).toION());return a}},d=function(a){var b,d,e=[];for(b in c)c.hasOwnProperty(b)&&(d=a(b,c[b]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==
typeof e?e:{};var p=function(a,d,e){a=new b(a,d,e);c[a.id]=a};g(a.output).isObj()&&!e.asION?g(a.output).each(function(a,b){p({output:b},a,e)}):p(a,d,e)};h.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,h;a(e)&&(h=d.output(),e.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),g.isFunction(b)?b(c,h):b[c]=h)})},iterate:d,cleanup:function(){d(function(a,b){b.props.flagForRemoval&&delete c[a]})},getItem:function(a){return c[a]}}},
Jc=function(){var h={},a=function(a,b){h[a]=b};return{request:function(a){var b,d=h[a],e=g(arguments).toArray();e.shift();g.isUndef(d)||(b=g.isFunction(d)?d.apply({},e):d);return b},provide:function(c,b){b?h[c]=b:g(c).each(a);return b}}},Yb=function(){return{createInstance:function(h,a,c,b){return s.isDomless()?new Lc:new Mc(h,a,c,b)}}},Mc=function(h,a,c,b){var d;return{collect:function(){var a=h.find(),f=a.getOutOfViewReasons(),q=c.isHidden(),m=b.isDeviceTypeGroupMobile()&&d?d:C(t.calcWinDims()),
p=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!p.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:s.embedded,winDimensions:m,adDimensions:p};!0===q&&f.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:f.length?k.OUT_OF_VIEW:a.getViewState(),viewStateIgnoringRender:a.getViewStateIgnoringRender(),percentInView:a.getPercentInView(),percentInViewIgnoringRender:a.getPercentInViewIgnoringRender(),
reason:f.join("."),obstructed:g.stringifyTriState(a.isObstructed()),isHidden:g.stringifyTriState(a.isHidden()),tabHidden:g.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Lc=function(){return{collect:function(){return{}}}},Nc=function(h){h=h||g.identity;var a=[],c=r.now(),b=function(){var b=r.now();a.length&&(a[a.length-1].duration+=b-c,c=b)};return{clear:function(){b();a=[]},fastForward:b,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(c){var e=a[a.length-1];c=h(c);b();0!==a.length&&c===e.state||a.push({state:c,duration:0})}}},Ia=function(h,a){var c=h||1,b=0,d=0,e,f=0;return{start:function(){0===b%c&&(e=r.now())},stop:function(){var q=e||a;0===b%c&&(f+=r.now()-q,d++);b++},getTime:function(){return f},getCount:function(){return d}}},Ja=function(){var h,a=0,c=0,b=new E(!0),d=function(){h&&(a++,b.trigger(a),c>a?r.execAtEndOfThread(d):e())},e=function(){h=!1;a=0};return{onTick:function(a,
d){var e=g.collapseArgsIntoHash(a,d);g(e).each(function(a,b){a=parseInt(a);c=a>c?a:c});b.on(e)},start:function(){h||(h=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return h}}},Oc=function(h,a){var c,b=a,d=function(a){c||(a&&h(),c=r.setInterval(h,b))},e=function(a){c&&(a&&h(),r.clearInterval(c),c=null)};return{start:d,stop:e,updateFrequency:function(a,q){b=a;c&&(e(),d(q))}}},Y=function(h){var a,c,b=0,d=s.getTagTime(),e=0,f=!1;return{getTotalTime:function(){return e},stop:function(){b=0;d=
s.getTagTime();f=!1},mark:function(){a=f?s.getTagTime()-d:0;b+=a;b>=h&&(c=b-a<h,e+=c?b:a);d=s.getTagTime();f=!0}}},R=function(h,a){var c=h||l.adsafeSrc||l.requrl;c&&0===c.indexOf("http")||(c=0===c.indexOf("//")?l.protocol+":"+c:l.protocol+"://"+c);var c=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(c),b=c[1],d=c[2],e=c[3],f=c[4],q=c[5],m=h?c[6]:"",p=a?c[7]:"",u={},y=function(a){g.isDef(a)&&(f=a);return f},v=function(a){g.isDef(a)&&(q=a);return q},k=function(a,b){var c=a+
"="+g(b).toION();return g.encodeInvalidUrlChars(c,l.encodeInvalidUrlChars)},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=u[b])?u[b]=d+c:a&&p.length&&(d=p.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),p=p.replace(d,d+c))},fullDom:b,hostname:e,sub:y,master:v,setParam:function(a,b){u[a]=u[a]||{};g(b).isObj()?g(u[a]).mixin(b):u[a]=b},path:function(a){m=a},toString:function(){var a=y()?y()+".":"",b=m?"/"+m:"",c;p||!g(u).isEmpty()?(c=g(u).isEmpty()?"":
g(u).stringify(k,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return d+"://"+a+v()+b+c}}},ob=function(){var h=function(a){var b=[];g(a).each(function(a,c){400>=b.concat(c).join("").length&&b.push(c)});return b},a=function(a,b){var d;b&&b.id&&(d=b.id.replace(/[^\w-_.>\/]/g,""));return d};return function(){var c,b;try{if(s.friendly&&!s.isMobileApp())if(c=n.getAggregator().request("adSlotIds"))b=c;else{var d,e;if(d=t.getOurNodeInTop()){var f=t.getAncestorNodes(d);e=g(f).map(a)}if(c=e=e&&h(e))n.getAggregator().trigger("addOutputItem",
{output:c},"slid",{type:k.DT_CODES.ADTALK,asION:!0}),n.getAggregator().provide("adSlotIds",c),b=c}return b}catch(q){n.getAggregator().trigger("error",k.ERROR_CODES.AD_SLOT_ID)}}()},tc={name:"AdRefreshDetection",dependencies:[],creator:function(){var h=[15,30,45,60,90],a={start:function(){var a=this,b=l.asid,d=this.getChanId(),e=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;b&&d&&(this.recordAdSlotImpression(b,d,e,function(b,d){b?n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH):
a.sendRefreshSession(d)}),a.registerInternalViewabilityListener(d,e))},adRefreshIntervalIsValid:function(a){return-1!==h.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),b,d=/(\S+)=(\S+)/g,e=0;e<a.length;e+=1){d.lastIndex=0;var f=d.exec(a[e]);f&&3===f.length&&"chanId"===f[1]&&(b=f[2])}return b},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,
b,d,e){var f=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:b,cacheId:d};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&a.data&&JSON.parse(a.data);e(null,b)}catch(c){e(c)}},!1);f.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,b){var d=this,e=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,f=r.getTop();if(e&&this.adRefreshIntervalIsValid(e))n.getAggregator().on("sendDt",function(q,m){q===
k.DT_CODES.PING&&m===e&&(r.execAtEndOfThread(function(){f.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:b}),"*")}),d.sendAutoRefreshProp(e))})},sendAutoRefreshProp:function(a){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"ir",a);n.getAggregator().trigger("adSessionComplete")}};s.isRefreshable(function(c,b){var d;if(!c&&b)try{d=JSON.parse(b),d.isRefreshable&&d.adServerName&&a.start()}catch(e){n.getAggregator().trigger("error",k.ERROR_CODES.AD_REFRESH)}});
return a},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(h,a,c){return c.isPossiblyRefreshable()}}},Qb=function(){var h,a,c=function(a,c){-1!==c.indexOf("https")&&(c+="*");return c.replace(/^https?:\/\//,"")};return{isApplicable:function(a,c,e){var f;if(f=e.isVideo()&&!(e.isAvid()||e.isMraid()||e.isOmid()))f=n.getAggregator().request("adNode")?parseFloat(n.getAggregator().request("videoVersion")):void 0,f=3.7>f;return!f&&a.hasAncestorOrigins&&a.hasAncestorOrigins()&&c.on("ancestor")&&e.xDomainIframe},
isStarted:function(){return!!a},start:function(){try{h=r.getWindow().location.ancestorOrigins,a=!0}catch(b){n.getAggregator().trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return g.last(h)},sendOriginList:function(){var a;a="ao:"+(h?g(h).map(c).reverse():[]).join(",");n.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});n.getAggregator().trigger("sendDt",
k.DT_CODES.THIRD_PARTY)}}},lb=function(h,a,c,b,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},f=function(d){try{a.diagnostic("c");var f=d.length,p=0,u=0;e(f,0,0);g(d).each(function(a,c){h.send(c.replace("%%CBS%%",b.getCacheBustId()),function(){e(f,p,++u)},!0);e(f,++p,u)})}catch(y){c.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new R).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;h.jsonp(a,f)}catch(b){c.add(k.ERROR_CODES.AT_INIT)}}}},ac=function(h,
a,c,b){return{enabled:"true"===l.useBapiCallback,callback:function(a){c.trigger("sendDiag");try{"true"===l.accountForSadImps&&b.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(e){h.add(k.ERROR_CODES.BAPI_CALLBACK),c.trigger("sendDiag","bapiClient")}}}},Gb=function(){return{createInstance:function(h,a,c,b){return s.isDomless()?new Pc:new Qc}}},Qc=function(){var h=k.BROWSERS,a=function(a){return c()===a},c=function(){var a="u",b=r.getWindow();try{g.isDef(b.opera)&&g.isDef(b.opera.buildNumber)?a=
h.OPERA:g.isDef(b.mozInnerScreenY)?a=h.GECKO:g.isDef(b.chrome)&&g.isDef(b.chrome.csi)?a=h.CHROME:g.isDef(b.msWriteProfilerMark)&&g.isDef(b.crypto)?a=h.MSEDGE:g.isDef(b.attachEvent)||g.isDef(b.msCrypto)?a=h.IE:g.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},b=function(){var a=!1,b=r.getWindow();g.isDef(b.navigator)&&g.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasMutationObserver:function(){return"function"===
typeof MutationObserver},hasResizeObserver:function(){return"function"===typeof ResizeObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!g.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:c,getUserAgent:b,params:function(){var b=c(),e;e=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}",
"{89820200-ECBD-11CF-8B85-00AA005B4383}"];var f=k.NA,q=r.getDoc(),m=q.createElement("div");if(a(h.IE))try{if("-ms-ime-align"in q.documentElement.style)f="11";else for(m.style.behavior="url(#default#clientcaps)",q=0;q<e.length&&!(f=m.getComponentVersion(e[q],"componentid").replace(/,/g,"."));q++);}catch(p){}e=f;f=k.NA;m=r.getWindow();g.isDef(m.navigator)&&g.isDef(m.navigator.appName)&&(f=m.navigator.appName.toLowerCase()[0]);return{br:b,abv:e,an:f}},isAndroidWebViewBrowser:function(){var a=b(),c=["SamsungBrowser",
"FB_IAB","Silk"],f=function(){return g(c).findFirst(function(b,c){return H.contains(a,c)})};return H.contains(a,"Android")&&f()},getIOSVersion:function(){var a,c;(a=b())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(c=(c=a.toString().match(/\d+/))&&0<c.length&&parseInt(c.toString()));return c}}},Pc=function(){var h=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:h,
getUserAgent:h,hasPostMessage:h,hasAncestorOrigins:h,hasIntersectionObserver:h,hasMutationObserver:h,isAndroidWebViewBrowser:h}},zc=function(){return{createInstance:function(h,a){return s.isDomless()?new Rc(a):new Sc(h,a)}}},Tc=function(){var h,a=function(a,b){var d="",e="",f=r.getDoc().getElementsByTagName("ins");if(f&&0<f.length){e=f[0];d="<ins";for(f=0;f<e.attributes.length;f++)d+=" "+e.attributes[f].nodeName+'="'+e.attributes[f].nodeValue+'"';d+=">";e="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+
a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
d+'<script src="'+b+'" referrerpolicy="'+k.REFERRER_POLICY+'">\x3c/script>'+e+"</body></html>"};return{isApplicable:function(a){h=n.getAggregator().request("omidAdSessionContext");var b=!(!h.app||!h.isDisplay||h.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!s.integratedBlockingApplies(a);return b&&a},deployBlockingScriptIntoIframe:function(c){h=n.getAggregator().request("omidAdSessionContext");var b="iasbi"+l.asid,d;d=l.contextNode.parentNode;var e,f=l.adWidth&&0<l.adWidth?l.adWidth:0,q=l.adHeight&&0<
l.adHeight?l.adHeight:0,m=r.getDoc().getElementsByTagName("ins"),p;p=e=0;m&&0<m.length&&(p=m[0],e=parseInt(p.style.width),p=parseInt(p.style.height));f=e||f||window.innerWidth;q=p||q||window.innerHeight;"complete"===r.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(e=r.getDoc().createElement("IFRAME"),e.id=b,e.src="about:blank",d.appendChild(e)):r.getDoc().write('<iframe id="'+b+'" src="about:blank"></iframe>');if(d=r.getDoc().getElementById(b))d.style.width=f+"px",d.style.height=
q+"px",d.scrolling="no",d.frameborder=0,d.style.position="absolute",d.style.padding=d.style.margin=d.style.border="0px";d&&(d=d.contentWindow.document)&&(d.open().write(a(b,c)),d.close())}}},Sc=function(h,a){var c=function(a){var b=!1;s.isMSFT()&&(b=(a=a&&-1!=a.toString().indexOf("jsconfig.adsafeprotected.com/jsconfig"))?!1:l.iasProxyPartnerDomain);return b},b=function(a,b,d,e){var f=c(b);f&&(b="//"+f+encodeURIComponent(b));"script"!==a?(b=M.createElement("DIV"),b.innerHTML=d,d=b.childNodes[0]):(d=
M.createElement("SCRIPT"),d.src=b,e&&(d.onload=e));l.contextNode.parentNode.appendChild(d)},d=function(a,c,d){var e,f="";e=' src="'+c+'"';var q=' referrerpolicy="'+k.REFERRER_POLICY+'"';d&&(f="__IntegralASEventLoadHandler_"+l.asid.replace(/-/g,""),x[f]=d,f=' onload="'+f+" && "+f+'()"');q={script:['<script type="text/javascript"',f,e,q,">\x3c/script>"],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0"',f,e,q,"></iframe>"],
img:["<img",f,e,q,"/>"]}[a].join("");s.isOmid()?(e=new Tc,e.isApplicable(c)?e.deployBlockingScriptIntoIframe(c):b(a,c,q,d)):("loading"!==r.getDoc().readyState&&(l.forceAppend="true"),"true"===l.forceAppend?b(a,c,q,d):M.write(q))},e=function(a,b,d){var e=!d&&z.getXHR2();(d=c(a))&&(a="//"+d+encodeURIComponent(a));e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(d=t.createImage(),b&&(d.onload=b),d.src=a)},f=function(a,b){var c=z.getXHR2();shouldUseProxy(a)&&
(a=updateUrlWithProxy(a));c&&(c.open("GET",a),c.onreadystatechange=function(){if(4===c.readyState&&200===c.status&&b)try{var a=JSON.parse(c.responseText);b(a)}catch(d){}},c.send())},q=function(a,b,d,e){var f=M.createElement("script");d=d||l.contextNode.parentNode;var q=c(a);q&&(a="//"+q+encodeURIComponent(a));f.type="text/javascript";f.src=a;f.referrerPolicy=k.REFERRER_POLICY;b&&(f.onload=b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));g.isDef(d)&&d.appendChild(f)},m=function(a){g.isFunction(a)?
a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new R(a,!0)).toString(),e(a,void 0,!0))},p=function(b,c,d,e){q(a.wrap(b,c,d,e))};n.getAggregator().on({addNode:d,send:e,exec:q,notify:m,getJSON:f,jsonp:p});return{addNode:d,send:e,exec:q,notify:m,getJSON:f,jsonp:p}},Rc=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";b=encodeURI(b);n.getAggregator().request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},c=function(a,b){a=encodeURI(a);
n.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},b=function(a,b){var c=n.getAggregator().request("omidVerificationClient");a=encodeURI(a);c.injectJavaScriptResource(a,b||function(){})},d=function(a){g.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new R(a,!0)).toString(),c(a))},e=function(a,c,d,e){b(h.wrap(a,c,d,e))};n.getAggregator().on({addNode:a,send:c,exec:b,notify:d,jsonp:e});return{addNode:a,send:c,exec:b,notify:d,jsonp:e}},s=function(h){var a=
"undefined"===typeof window,c="undefined"!==typeof h&&"undefined"!==typeof top&&h!==top,b=function(){var b=!1;if(a)b=!0;else try{b=!!top.document}catch(c){}return b}(),d=function(){return a||g.isDef(r.getWindow().mraid)},e=function(){return!a&&g.isDef(r.getWindow().mraid)},f=function(){var b=!1;if(!a)var c=(b=r.getWindow().inmobi)&&b.IASDocumentVideoBuffer,b=b&&c&&g.isFunction(c.addVideoEventListener),b=e()&&!!b;return b},q=function(){var b;if(!(b=-1!==l.mode.indexOf("jsvid"))){var c;b=!1;var d=n.getAggregator();
if(!a&&(d=d.request("avidJsClient"),d.isAvidAvailable()))try{c=d.getAvidAdSessionContext(),b=c.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}(c=b)||(d=n.getAggregator(),c=d.request("omidVerificationClient"),b=!1,d=d.request("omidAdSessionContext"),c&&d&&(b=d.mediaType===k.MEDIA_TYPE.VIDEO),c=b||f());b=c}return b},m=function(){return!1===l.fwMonitoring||"false"===l.fwMonitoring},p=function(){return l.mobOrTab},u=function(a){return!1===g(l.customViewability).isArray()?!1:0<g(l.customViewability).filter(function(b,
c){return H.contains(c.id,a)}).length},y=function(){return u("grpm")||l.use100v};return{embedded:c,friendly:b,isFriendlyToParent:function(b){var c,d;if(a)b=!0;else{try{d=R(b.document.referrer),c=d.hostname===b.location.hostname}catch(e){}b=c}return b},friendlyIframe:c&&b,xDomainIframe:c&&!b,getTagTime:function(){return r.now()-l.birthdate},getPageTime:function(){var b=k.NA;!a&&g.isDef(h.chrome)&&g.isDef(h.chrome.csi)&&g.isFunction(h.chrome.csi)&&(b=r.round(h.chrome.csi().pageT));return b},isVideo:q,
isMobileApp:d,isSpecifiedAd:function(){var b=!1;a||(b=(b=g.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container")||l._cl_adpath)&&g.isStr(b));return b},isCompoundAd:function(){var b=!1,c=/\[(.*)\]/;a||(b=c.exec(l._cl_adpath),b=null!==b&&0!==b[1].length&&1<b[1].split(",").length);return b},isAvid:function(){return!a&&g.isDef(r.getWindow().avid)},isOmid:function(){var a=n.getAggregator().request("omidVerificationClient");return a&&a.isSupported()&&!l.videoId},isOmidNative:function(){return(new fa).accepts()},
isOmidSandboxedEnvironment:function(){return(new fa).accepts()},isOmidForWeb:function(){return(new Ka).accepts()},isDomless:function(){return a},isAvidNative:function(){var b=!1,c=n.getAggregator();a||(c=c.request("avidJsClient"),c.isAvidAvailable()&&(b=c.getAvidAdSessionContext().avidAdSessionType,b=b===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||b===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return b},isBustedIframe:function(){var b=!1;a||(b=void 0!==ga());return b},isMraid:e,isSafeFrame:function(){var b=
!1;a||(b=g(r.getWindow().$sf).isObj(!1)&&g(r.getWindow().$sf.ext).isObj(!1));return b},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:p,usesIASFullyInViewCustomMetric:function(){return u("fiv")||l.use100v||!y()},usesGroupMCustomMetric:y,isCeltra:function(){var b=!1;a||(b=La().isApplicable());return b},usesGroupMCustomMetricMobilePassThru:function(){return y()&&p()},usesZeroPivCustomMetric:function(){return!1===g(l.customViewability).isArray()?!1:0<g(l.customViewability).filter(function(a,b){return g(b.thresholds).findFirst(function(a,
b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!a&&!d()&&!q()&&c&&"jload"===l.mode},integratedBlockingApplies:function(a){var b=!1,c,d,e;l.contextNode&&g.isFunction(l.contextNode.getAttribute)&&(c=l.contextNode.getAttribute("data-ias-check-tag"),d=l.contextNode.getAttribute("data-ias-check-done"),
e=(e=l.contextNode.getAttribute("data-ias-callback"))&&g.isFunction(r.getWindow()[e]));var f=g.isDef(JSON)&&g.isFunction(JSON.parse);a=l.integration&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"));var q=!0===l.fwMonitoring||"true"===l.fwMonitoring;f&&a&&("true"===c&&"true"!==d&&e?(b=!0,q&&n.getAggregator().trigger("addOutputItem",{output:"imgb"},"smm",{type:"impression"})):(b=!1,q||n.getAggregator().trigger("addOutputItem",{output:"ibgm"},"smm",{type:"impression"})));return b},isBlocking:m,
isBlockingSizmekTag:function(){return m()&&H.contains(l.scriptUrl,"bs.serving-sys.com")},isAMZN:function(){return g.isStr(l.iasProxyPartnerDomain)&&-1!==l.iasProxyPartnerDomain.indexOf("amazon")},isMSFT:function(){return g.isStr(l.iasProxyPartnerDomain)&&-1!==l.iasProxyPartnerDomain.indexOf("bing")}}}(x),z={addEvent:function(h,a,c,b){g.isDef(h.addEventListener)?"mouseenter"===a?h.addEventListener("mouseover",z.mouseEnter(c),b):"mouseleave"===a?h.addEventListener("mouseout",z.mouseEnter(c),b):h.addEventListener(a,
c,b):g.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,c))},removeEvent:function(h,a,c){g.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",c=z.mouseEnter):"mouseleave"===a&&(a="mouseout",c=z.mouseEnter),h.removeEventListener(a,c)):g.isDef(h.detachEvent)&&h.detachEvent("on"+a,c)},mouseEnter:function(h){var a=this;return function(c){var b=c.relatedTarget;this===b||a.isAChildOf(this,b)||h.call(this,c)}},isAChildOf:function(h,a){if(h===a)return!1;for(;a&&a!==
h;)a=a.parentNode;return a===h},getStyle:function(h,a,c){var b="",d=M.defaultView&&M.defaultView.getComputedStyle;c=c||"";d?b=(h=M.defaultView.getComputedStyle(h,c))?h.getPropertyValue(a):b:h.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b=h.currentStyle[a]);return b},getXHR2:function(h,a){var c,b;g.isDef(x.XMLHttpRequest)?(b=new XMLHttpRequest,"withCredentials"in b&&(c=b)):g.isDef(XDomainRequest)&&(c=new XDomainRequest);return c},whenReady:function(h,a){if(s.isDomless())r.setTimeout(function(){h()},
50);else{var c=a||(s.xDomainIframe?M:r.getTop().document),b=function(a){var b=r.setInterval(function(){c.body&&(r.clearInterval(b),a())},50)},d=this;(function(a){var f=function(){a(!0)};g.isFunction(M.addEventListener)?"complete"==c.readyState||"loaded"==c.readyState||"interactive"==c.readyState?r.execAtEndOfThread(f):d.addEvent(c,"DOMContentLoaded",f,!1):b(a)})(h)}},isSandboxed:function(h){var a,c=r.getWindow(),b=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=c.frameElement}catch(d){}if(a)h=
a.hasAttribute("sandbox");else{a=!1;c=r.getDoc();if(h.browserIs(k.BROWSERS.CHROME))try{c.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}h=a}b=h}return b},styleElement:function(h,a){if(h&&g(h.style).isObj()&&g(a).isObj()){var c="";g(a).each(function(a,d){c+=a+": "+d+" !important;"});h.style.cssText=c}},nodeIsAbsolutelyPositioned:function(h){return"absolute"===z.getStyle(h,"position")||h.style&&"absolute"===h.style.position}},$=function(h){var a,c=
$.callTypeCounter,b=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;g("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[h],d=c&&c[h];g.isDef(d)&&0!==d&&g(b).contains(h)&&(a=a+"."+d);d=c[h];c[h]=g.isDef(d)?d+1:1;return a}();
return{callType:h,enumerator:a}};$.callTypeCounter={};var $b=function(h,a,c,b,d,e,f,q){var m=0,p=0,u=!1,y=function(a,e,q,h,y,v){q=q||!c.on("postDts");var s=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(b.impressionIsIdentifiable()&&(s||"n"!==f.getCurrentLoc()))try{var t=l.dtBaseURL,x=new R(t,!0),J=r.now();n.getAggregator().trigger("preSendDt",a);t||(x.path("dt"),c.on("usedtdomain")&&x.sub("dt"));
K(x,a,e);y&&y.field&&x.setParam(y.field,y.value);h||w(x,a);n.getAggregator().trigger("send",x,function(){p+=1;m=r.now()-J;g.isFunction(v)&&v()},q);a===k.DT_CODES.UNLOAD&&(u=!0);d.cleanup()}catch(z){__IntegralASDiagnosticCall("dt-"+a,z),n.getAggregator().trigger("error",k.ERROR_CODES.PHONE_HOME)}};h=function(){u||y(k.DT_CODES.UNLOAD,-1,!0)};var v=function(a,b){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=l.mode,d=d[a]||d[e];c.on(b||e+"Diag")&&d&&y(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",
value:d})},K=function(a,c,e){var f=new $(c);e=g.isDef(e)?e:f.enumerator;a.setParam("asId",l.asid);e={c:b.getCacheBustId(),pingTime:e,time:s.getTagTime(),type:c};d.filterOutput(function(a){var b=a.minDt&&(!a.type||a.type===c);b&&a.oneTime&&(a.flagForRemoval=!0);return b},e);a.setParam("tv",e)},w=function(b,h){var g,u={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===h},function(a,c){b.setParam(a,c.replace("%3A",":"))});f.fastForward();if(h===k.DT_CODES.CUSTOM||h===k.DT_CODES.UNLOAD||
h===k.DT_CODES.VIDEO_EVENTS||h===k.DT_CODES.FULLY_INVIEW||h===k.DT_CODES.PING||h===k.DT_CODES.VIEWABILITY_READY||h===k.DT_CODES.ADTALK)u.clog=q,s.isVideo()&&(g=s.isOmid()?"omidVideoEventsString":"videoEventsString",(g=n.getAggregator().request(g))&&!g.isEmpty()&&(u.ve=g));h===k.DT_CODES.UNLOAD&&(u.ndt=p);-1!==l.mode.indexOf("jsvid")&&(u.vv=n.getAggregator().request("videoVersion"));u.NULL1=c.output();u.NULL2=f.stringify(10);u.em=s.embedded;u.fr=s.friendly;u.e=a.toString();u.tt=l.mode;u.dtt=m;d.filterOutput(function(a){var b=
!a.standalone&&!a.minDt&&(!a.type||a.type===h);b&&a.oneTime&&(a.flagForRemoval=!0);return b},u);b.setParam("tv",u);b.setParam("br",e.getBrowserType())};n.getAggregator().on({sendDt:function(a,b,c){y(a,g.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){y(a,b,void 0,!0)},sendDiag:v,updateDtCount:function(){p++},unload:h});return{send:y,unload:h,diagnostic:v,setViewabilityMod:function(a){}}},C=function(h){var a={},c=!1,b=function(){var a=1===h.nodeType?t.nodeIsHidden(h):0===h.width||0===h.height;
return c?!1:a},d=function(){var b={};g(a).each(function(a,c){b[a]=r.round(c)});return b},e=function(a){return g.isNumeric(a)||g.isUndef(a)},f=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;h!==x.parent&&(1!==h.nodeType?a=h:g.isDef(h.getBoundingClientRect)&&(b=t.getRect(h),g(a).mixin({x:g.useIfDef(b.x)||b.scrX,y:g.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&g.isNumeric(a.width)&&
g.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,getRoundedGeometry:function(){var b={};g(a).each(function(a,c){b[a]="x"===a||"y"===a||"width"===a||"height"===a?r.round(c):c});return b},set:function(b,c){a[b]=c},isHidden:b,treatAsPlaceholder:function(){c=!0},area:f,isMrcLarge:function(){return f()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return b()&&1>=f()}}},t={findElementsWithSize:function(h){var a=[],c=function(b){1>t.getNodeArea(b)?
g(b.children).each(function(a,b){c(b)}):a.push(b)};c(h);return a},nodeIsHidden:function(h){var a=this.getRect(h),c=0!==parseInt(z.getStyle(h,"width"))&&0===a.width,a=0===a.width||0===a.height;h="hidden"===z.getStyle(h,"visibility");return c||a||h},calcWinDims:function(){var h,a,c;try{a=t.browserWindowPosition(),c=t.windowSize(),h={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(c.width),height:r.round(c.height)}}catch(b){n.getAggregator().trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),
h={}}return h},windowSize:function(){var h={},a,c;if(s.isDomless())return{width:0,height:0};if(s.friendly)if(a=top.document,c=a.documentElement,a=a.body,g.isDef(top.innerWidth))h.width=top.innerWidth,h.height=top.innerHeight;else if(g.isDef(c.clientWidth))h.width=c.clientWidth,h.height=c.clientHeight;else if(g.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else g.isDef(x.outerWidth)&&(h.width=x.outerWidth,h.height=x.outerHeight);return h},browserWindowPosition:function(){var h=
0,a=0;g.isDef(x.screenX)?(h=x.screenX,a=x.screenY):g.isDef(x.screenLeft)&&(h=x.screenLeft,a=x.screenTop);n.getAggregator().request("browser").browserIs(k.BROWSERS.GECKO)&&-8==h&&-8==a&&(h+=8,a+=8);return{scrX:h,scrY:a}},getNodeArea:function(h){var a=-1;h&&(h=t.getRect(h),a=h.width*h.height);return a},getRect:function(h){var a={},c=t.browserWindowPosition();h=h.getBoundingClientRect();g.isUndef(h.x)&&(a.x=h.left,a.y=h.top);g.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);g(a).mixin(h,
!0);a.scrX=c.scrX+a.x;a.scrY=c.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&g.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=M.createElement("span");g(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=s.friendly&&r.getTop().Image;return g.isFunction(h)?new h:new Image},createHiddenIframe:function(h){var a=
r.getDoc().createElement("iframe"),c={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};z.styleElement(a,h?{display:"none"}:c);return a},tagNameIs:function(h,a){return h.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(h,a){var c,b,d,e=1E4,f=1E4;c=z.nodeIsAbsolutelyPositioned(h);d=!t.tagNameIs(h,"OBJECT");if(null!==h.parentNode&&!c&&d&&!t.tagNameIs(a,"BODY")){d=h;do d=d.parentNode,c=!t.tagNameIs(d,"OBJECT"),b="inline"!==z.getStyle(d,"display"),
c&&b&&(c=t.getRect(d),e=c.width<e?c.width:e,f=c.height<f?c.height:f);while(d.parentNode!==M&&d!==a)}return{width:r.round(e),height:r.round(f)}},hasBackgroundImage:function(h){h=z.getStyle(h,"background-image");return""!==h&&"none"!==h},isEmptyFriendlyFrame:function(h){try{var a,c,b=!1;if(h&&h.document){var d=h&&"IFRAME"===h.nodeName&&h.contentDocument;d&&(c=(a=d.body)&&1>a.childElementCount)&&(b=!0)}return b}catch(e){return!1}},findChildWithLargestContent:function(h,a){var c=n.getAggregator().request("mobileApp").isMobileAppEnvironment(),
b=n.getAggregator().request("omidAdSessionContext"),d=b&&b.hasOwnProperty("ignoreDivAsCandidate"),e=this.hasBackgroundImage,b=function(a){for(var b=a;a.parentNode!==h&&"inline"!==z.getStyle(a.parentNode,"display");){var e;if(!(e=!c)){e=a.parentNode;var f=!0;if("visible"===z.getStyle(e,"overflow")||"visible"===z.getStyle(e,"overflowX")&&"visible"===z.getStyle(e,"overflowY"))f=!1;e=f&&0<t.getNodeArea(a.parentNode)}!e||c&&d&&"DIV"===a.parentNode.nodeName||(b=a.parentNode);a=a.parentNode}return b},f=
null,q=function(a){var b,c,f=null,q=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var g=a[b],k=t.getNodeArea(g),l=g,n=void 0;if(n=l.parentNode===h)if(n=void 0,n="DIV"===l.nodeName)if(n=void 0,n=!e(l))if(n=void 0,!(n="0"===z.getStyle(l,"opacity")||"hidden"===z.getStyle(l,"visibility"))){for(var B=n=void 0,l=l.childNodes,n=0;n<l.length;n++)1===l[n].nodeType&&(B=!0);n=!B}(l=!n)&&d&&"DIV"===g.nodeName&&(l=!1);n=t.isEmptyFriendlyFrame(g);k>q&&l&&!n&&(f=g,q=k)}f&&(f.hasValidSizeForMobileApp=1<q);return f}(function(b){var c,
d,e,f,q=[],h=a||"iframe img a object embed div".split(" ");c=0;for(d=h.length;c<d;c++){e=h[c].toLowerCase();var g=b.getElementsByTagName&&b.getElementsByTagName(e);if(g&&g.length)for(e=0,f=g.length;e<f;e++)q.push(g[e])}return q}(h));q&&(f=b(q),f.hasValidSizeForMobileApp=q.hasValidSizeForMobileApp);return f},screenSize:function(){if(s.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{g.isDef(x.screen)&&(h={width:x.screen.width,height:x.screen.height})}catch(a){}return h},calcMonDims:function(){var h=
g(t.screenSize()).mixin({scrX:0,scrY:0});g.isDef(screen.availLeft)&&(h={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return h},getOurIFrameInTop:function(){for(var h,a=r.getTop(),c=r.getWindow();c!=a;)h=c,c=h.parent;return h},getOurNodeInTop:function(){var h;s.friendly&&(h=s.embedded?(h=t.getOurIFrameInTop())&&h.frameElement:l.contextNode);return h},getAncestorNodes:function(h){var a=[],c=h.ownerDocument&&h.ownerDocument.documentElement;if(c)for(;h.parentNode!==
c;)a.push(h),h=h.parentNode;return a},getTagsNamed:function(h,a){var c,b=a||r.getDoc();try{c=b.getElementsByTagName(h)}catch(d){c=null}return c},containsScriptTagWithSrc:function(h){return!!g(t.getTagsNamed("script")).findFirst(function(a,c){var b=c.src;return g.isFunction(h)?h(b):b===h})},contains:function(h,a){var c=!1;try{c=g.isDef(h)&&g.isFunction(h.contains)&&h.contains(a)}catch(b){}return c},querySelector:function(h,a){var c;try{c=h.querySelector(a)}catch(b){c=null}return c},nodeIsInWindow:function(h,
a){return h.ownerDocument&&(h.ownerDocument.defaultView||h.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,c){h&&g.isFunction(h.setAttribute)&&h.setAttribute(a,c)},removeAttributeOf:function(h,a){h&&g.isFunction(h.removeAttribute)&&h.removeAttribute(a)},crossQuerySelector:function(h,a){var c,b,d=[l.contextNode.parentNode,r.getDoc()];s.friendly&&d.push(r.getTop().document);if(a&&s.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}g(d).each(function(a,d){try{b=t.querySelector(d,
h)}catch(e){}!c&&b&&(c=b)});return c},getNodeName:function(h){return h&&h.nodeName},isWindow:function(h){var a=!1;try{a=h&&"object"===typeof h&&"setInterval"in h}catch(c){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=t.getTagsNamed("iframe",h))&&(a=g(h).map(function(a,b){return b.contentWindow}));return a},getFrameId:function(){var h=r.getWindow().frameElement;return h&&h.id},isViewportVisible:function(h,a){var c=h.innerWidth,b=h.innerHeight,d=c>a.width&&b>a.height;return c*b>a.width*
a.height&&d},getTagName:function(h){return h.tagName.toLowerCase()},getAttribute:function(h,a){return h.getAttribute(a)},attributeMatches:function(h,a,c){h=h&&t.getAttribute(h,a);return c.test(h)},isImageTag:function(h){return h&&h.src&&t.tagNameIs(h,"img")},getDimensionFromStyle:function(h){var a,c=z.getStyle(h,"width");h=z.getStyle(h,"height");c&&h&&(a={width:g.getNum(c),height:g.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,c=t.getAttribute(h,"width");h=t.getAttribute(h,"height");
c&&h&&(a={width:g.getNum(c),height:g.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(c,b){var d,e,f;if(b(c))e=c;else if(f=c.children)for(d=0;d<f.length&&!(e=a(f[d],b));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,c){var b=!0,d="fixed"===z.getStyle(a,"position"),e="hidden"!==z.getStyle(c,"overflow")&&!d;s.isSpecifiedAd()&&(d||e)&&(b=!1);return b},isNodeCreative:function(a){var c=t.getNodeName(a),b=a&&a.innerText&&0<a.innerText.length,
b=a&&a.children&&0===a.children.length&&b,d=c&&-1!==k.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase());return c?!!(d||t.hasBackgroundImage(a)||b):!1},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var c=t.getElementsDocument(a);return c.defaultView||c.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var c=!1;if(a&&"IFRAME"===t.getNodeName(a))try{c=
!a.contentWindow.document}catch(b){c=!0}return c},isElement:function(a){return 1===a.nodeType}},yc=function(){var a={},c=function(b){g.isDef(a[b])?a[b]++:a[b]=1};n.getAggregator().on("error",function(a){a=g(a).isObj()?a.errorCode:a;c(a)});return{list:a,add:c,toString:function(){var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=c);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},fb=function(){return{createInstance:function(a,c){return s.isDomless()?new Uc:new Vc(a,c)}}},Vc=function(a,
c){var b=function(a){var b=[];if(a&&a instanceof Array)b=g(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,f=b(d),q=f&&f.length&&f.join("|"),m=l.exchList;q&&(e=g(m).map(function(a,b){return 0<=q.indexOf(H.rot(b))?a:void 0}),e.length&&c.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(p){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Uc=function(){return{parse:function(a){}}},
ua=function(){var a={},c=function(b){var c;g.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},b={es:"everySecond",sc:"usesca",ha:"usehaps"},d={fif:"useFIF",gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"},e=function(){var c,e;c=g(b).mapToObj(function(b,c){var d={};d[b]=g.fromBoolToNum(a[c]);return d});e=g(d).mapToObj(function(a,b){var c={};c[a]=g.fromBoolToNum(f(b));
return c});e.gm=g.fromBoolToNum(s.usesGroupMCustomMetric());return g(c).mixin(e)},f=function(a){var b=l[a];return g(["integration"]).contains(a)?!!b:!0===b||"true"===b||g.isFunction(b)};g(b).each(function(a,b){c(b)});return{on:c,bootstrapOn:f,bootstrapperHas:function(a){a=g.isStr(a)?[a]:a;return g(a).map(function(a,b){if(g.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var b=c("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return b&&a},setReportedBootstrapFeatures:function(a,
b){d[a]=b},reportedBootstrapFeatures:d,output:function(){return g(e()).toParams()}}},Ub=function(){return{calcInitialViewState:function(a,c){var b;b={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var d={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},e=k.NA;b=c?b:d;g.isDef(a)&&a!==k.NA&&-1<a&&(e=a>=b.IN_VIEW?k.IN_VIEW:a<=b.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=b.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return e},calcPercentInView:function(a,c,b,d){var e=0,f=a;a.hasValidDims()&&!a.isHidden()&&(g([c,b,
d]).each(function(a,b){if(b.hasValidDims()){var c=f.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),g=Math.max(c.scrY,d.scrY),k=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),k=k-e,c=c-g;f=C({scrX:e,scrY:g,width:0<k?k:0,height:0<c?c:0})}}),e=r.round(f.area()/a.area()*100));return e}}},Hb=function(){var a,c=!1,b;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a=
"";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){n.getAggregator().trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return g.toBase(a,62)},getFwId:function(){return d()||
l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(c=!0);return c},unq:a,getAvidIds:function(){return b},setAvidAdSessionContext:function(a){b=a}}},sb=function(a,c){return{init:function(b){a.jsonp(b,function(a){c.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},Wc=function(a,c,b,d,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return e?function(){var b=n.getAggregator().request("adRenderStatus"),
e=d||c,g=a.getTimeInViewInSeconds();b||n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"nr_"+e,g)}:function(){var e=a.getTimeInViewInSeconds(),q=a.getTimeInViewForRts();g.isDef(d)&&(n.getAggregator().trigger("addOutputItem",{output:d},"metricId",{type:c}),n.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:c}));n.getAggregator().trigger("sendDt",c,e);if(b[q])b[q]()}}}},Zb=function(){return{createPingJobs:function(a,c,b,d,e){return g(c.getTimeThresholds()).map(function(c,
q){return new Wc(q,a,b,d,e)})}}},Ma=function(){var a,c=[],b=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},d=function(){a||(a=n.getAggregator().request("viewabilityDefinitions"));a&&0==c.length&&g(a).each(function(a,b){b.qivThreshold&&c.push(b)})},e=function(a){var d=new b(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];var e=a.indexOf(g(a).findFirst(function(a,b){return-1!==d.type.toLowerCase().indexOf(b.toLowerCase())})),p=n.getAggregator().request("mScreenEvents").getCurrentEvent(),
u=Math.floor(d.time/1E3);g(c).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(e);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(n.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("addOutputItem",{output:"q"},"cmr",{type:k.DT_CODES.CUSTOM}),n.getAggregator().trigger("sendDt",k.DT_CODES.CUSTOM,u),b.rtsCallbacks&&g.isFunction(b.rtsCallbacks[k.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[k.RTS_KEY_FOR_VQ]())})};
return{init:function(){d();n.getAggregator().on("videoQuartileEvent",function(a){d();e(a)})}}},Ca=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},c=function(a,b,c){var q=a.indexOf("?");b=b+"="+c;if(-1===q)return a+"?"+b;q++;return a.slice(0,q)+b+"&"+a.slice(q)},b=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,f,q){var g=b(),p,u,k;q=q||"ias_callback";d=""+d;RegExp(q).test(d)&&
(p=RegExp("("+q+"=)(.[^&]*)").exec(d)[0],u=p.split("=")[1],k=H.stringToFn(u),d=a(d,p));x[g]=function(a){e(a);f&&k&&k(a);x[g]=void 0};return d=c(d,q,g)},wrapToGlobal:function(a){var c=b();x[c]=function(b){a(b);x[c]=void 0};return c}}},bc=function(a,c,b){var d=function(a,b){var c=a,d;b&&(d=","+g(b).stringify(function(a,b){return a+":"+b},","),c=R(a,!0),c.appendToParamValue("adsafe_jsinfo",g.encodeInvalidUrlChars(d,l.encodeInvalidUrlChars)),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},
rjss:{isFW:!0,onloadCallback:Na,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(b){a.enabled?n.getAggregator().trigger("jsonp",b,a.callback,!0):n.getAggregator().trigger("send",b,function(){Na();n.getAggregator().trigger("sendDiag")},!c.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=
a.enabled?a.callback:g.noop,d=a.enabled?!0:!1;n.getAggregator().trigger("jsonp",b,c,d)}},jsvid:{manualDefer:!0,impressionMethod:function(b){n.getAggregator().on("adImpression",function(e,m){var p;try{p=d(b,m),a.enabled?n.getAggregator().trigger("jsonp",p,a.callback,!0):n.getAggregator().trigger("send",p,g.noop,!c.on("postMon"))}catch(u){__IntegralASDiagnosticCall("jsvidimp",u,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");
a[3]="db2";a[4]="video";return a.join("/")};b&&n.getAggregator().trigger("jsonp",c(a),function(a){n.getAggregator().trigger("videoBlockResult",a)});n.getAggregator().on("adImpression",function(c,e){var m;try{var k;if(k=b)k=c&&g.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);n.getAggregator().trigger("send",m,g.noop,!0)}catch(r){__IntegralASDiagnosticCall("fwjsvidimp",
r,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},c=e[l.mode],d=!!c.isFW,g=function(a){var b;b=n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(d),u=g.indexOf("BEGIN__ADSAFE"),k=-1!==u,v=k?g.slice(u):"",a=k?g.slice(0,u):a(g);return{isFW:d,baseUrl:a,macroUrl:v,sendImpression:function(a){var d=function(){c.nodeType?n.getAggregator().trigger("addNode",
c.nodeType,a,c.onloadCallback):c.impressionMethod(a)};if(b||c.manualDefer)d(a);else if(!c.manualDefer)n.getAggregator().on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,
arguments)},getWindow:function(){return x},getTimeoutScope:function(){return s.isDomless()&&s.isOmid()?n.getAggregator().request("omidVerificationClient"):x},setInterval:function(a,c){return r.getTimeoutScope().setInterval(a,c)},setTimeout:function(a,c){return r.getTimeoutScope().setTimeout(a,c)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){s.isDomless();
return top},getDoc:function(){s.isDomless();return M},getIntersectionObserver:function(a,c){s.isDomless();return new IntersectionObserver(a,c)},getMutationObserver:function(a){s.isDomless();return new MutationObserver(a)},getResizeObserver:function(a){s.isDomless();return new ResizeObserver(a)},pow:function(a,c){return Math.pow(a,c)}},Pb=function(){return{createInstance:function(){return s.isDomless()?new Xc:new Yc}}},Yc=function(){var a,c=!1,b=!1;n.getAggregator().request("features");var d=new ca,
e=function(){return g.isDef(a.prop)?r.getDoc()[a.prop]:null},f=function(){var b=r.getWindow(),c=function(){d.run(e())};z.addEvent(b,"focus",c,!0);z.addEvent(b,"blur",c,!0);a.event&&z.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",b="visibilitychange",d=r.getDoc();g.isUndef(d.hidden)?g(["moz","ms","webkit"]).each(function(e,f){var k=f+"Hidden";g.isDef(d[k])&&(a=k,b=f+b,c=!0)}):c=!0;return c?{prop:a,event:b}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);b||(b=!0,f())},
supportsVisAPI:function(){return c}}},Xc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},Rb=function(){return{createInstance:function(a,c){return s.isDomless()?new Zc:new $c(a,c)}}},$c=function(a,c){var b,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||g.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],g.isUndef(b[c])?
b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},f=function(){var f,m=function(){var a={};try{a.q=c.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(b){var d=b.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=g.isDef(d)){var f=c.getWindow();e=!1;g.isDef(f.navigator)&&g.isDef(f.navigator.userAgent)&&(f=f.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==f&&2==f.length&&(f=f[1].split("."),3==
parseInt(f[0],10)&&6>=parseInt(f[1],10)&&(3==f.length?13>=parseInt(f[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(u){}try{p.b=encodeURIComponent(parent.location.href)}catch(k){}if(s.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(n){}try{p.e=encodeURIComponent(x.document.referrer)}catch(r){}}try{"jsi"!==l.mode&&(p.d=encodeURIComponent(x.location.href))}catch(w){}try{p.f=encodeURIComponent(l.jsref)}catch(A){}try{f=m(),p.g=
encodeURIComponent(f.g||""),p.q=encodeURIComponent(f.q||""),a.isStarted()&&!f.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(F){}p=d(p);p=e(p);f=[];for(var B in p)p.hasOwnProperty(B)&&f.push({key:B,val:p[B]});f.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return b=f};return{detectTopURL:f,getDetectedURLs:function(){return b?b:f()}}},Zc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Ob=
function(a){var c=!1;return{measure:function(b){(c=0===b.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return c}}},Sb=function(){var a=[],c={},b={sl:"n"},d=0,e,f,q,m={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b=n.getAggregator().request("features");b&&b.on("recoverOmidLostTime")&&(b=m.ri,m.ri=b?b+a:a)},u=function(a){var b={},c=a.winDimensions,d=a.adDimensions;g.isDef(c)&&c.hasValidDims()&&(b.wc=c);g.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);
g({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];g.isDef(e)&&(b[c]=e)});c=g(b).toParams();return""===c?"":","+c},l=function(a,b){var d=new Nc(b);return c[a]=d},v=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},r=function(){g(b).each(function(b,c){m[c]+=a.length?q-d:q});d=q},w=function(c){a.length&&r();g(c).each(function(a,c){var d=b[a];d!==c&&"n"===d&&(m[c]+=m.n);b[a]=c});a.length||r()},
A=function(a){var b,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};b=u(a);var e=a.omidObstructions,p={sl:v(a.viewState)};q=s.getTagTime();w(p);p.t=q;b=g({toString:function(){g(c).each(function(a,b){b.fastForward()});return"{"+g(p).toParams()+this.details+this.breakdowns+"}"},details:b,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+g(this.piv).stringify(b)+"]");a+=",as:["+g(this.as).stringify(b)+"]";return",bkn:{"+a+
"}"}}}).mixin(p);g(b).mixin(a);b.width=d.width;b.height=d.height;g.isUndef(b.percentInView)&&(b.percentInView=k.PIV_NA);g.isUndef(b.reason)&&(b.reason="");g.isDef(e)&&""!==e&&(b.omidObstructions=e);return f=b};(function(){l("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(g(d).each(function(a,e){g.isUndef(b)&&c<e&&(b=d[a-1])}),g.isUndef(b)&&(b=d[d.length-1]));return b});l("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+
"."+a.height});var a=n.getAggregator().request("omidAdSessionContext");a&&-1<a.recoveredTime&&p(a.recoveredTime)})();return{fastForward:function(){q=s.getTagTime();r()},registerLocation:function(d){var f,q=!1;b.sl==v(d.viewState)&&a.length?(f=new A(d),a[a.length-1].details=f.details):(f=new A(d),a.push(f),e=d.viewState,q=!0);n.getAggregator().trigger("newScreenEvent",f);g(c).each(function(b,c){-1!=="piv|as".indexOf(b)?(q&&c.clear(),c.addState(f),a[a.length-1].breakdowns[b]=c.get()):c.addState(f)});
return f},stringify:function(b){var c="";a.length&&(c=g({slTimes:"{"+g(m).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:l,getCurrentLoc:function(){return v(e)},getCurrentEvent:function(){return f},setRecoveredTimeInSlTimes:p}},H={hashCode:function(a){var c=0,b,d,e;if(0===a.length)return c;b=0;for(e=a.length;b<e;b++)d=a.charCodeAt(b),c=(c<<5)-c+d,c|=0;return c},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=
a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var c,b=x,d=a.split(".");for(a=0;a<d.length;a++)if(c=b,b=b[d[a]],g.isUndef(b)||a===d.length-1&&!g.isFunction(b))return!1;return function(){b.apply(c,arguments)}},stringToProp:function(a){var c=r.getWindow(),b=a.split(".");for(a=0;a<b.length&&(c=c[b[a]],!g.isUndef(c));a++);return c},contains:function(a,c){return g.isStr(a)?-1!==a.indexOf(c):!1},trim:function(a){return g.isFunction(a.trim)?a.trim():a.replace(" ","")}},ad=function(){var a=
function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),c=/GoogleActiveViewElement/,b=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,f=function(a){var b=a&&t.tagNameIs(a,"a"),c=t.attributeMatches(a,"href",d);a=t.attributeMatches(a,"target",e);return b&&
c&&a},g=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",c);a=t.attributeMatches(a,"id",b);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c;if(b=t.traverseAndFindFirstMatchingNode(b,f))b=t.getFirstChildElement(b),t.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b);return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},bd=function(){var a=
ad(),c=function(a,c){c.tag=t.getTagName(a);c.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(b){var d;if(d=a.getDFPGoogleDiv(b)){var e;b={type:0};if(d)if(b.type=1,e=a.getClickableImage(d))b.type=2,c(e,b);else if(d=a.getNodeMatchingMinimumSize(d))b.type=3,c(d,b);d=b}else if(d={type:0},b=a.getNodeMatchingMinimumSize(b))d.type=4,c(b,d);return d}}},qc={name:"viewport",dependencies:[],creator:function(){var a={width:4,height:4},c=function(b,d){if(b!==d&&!t.isViewportVisible(b,
a))return b;if(b!==d&&s.isFriendlyToParent(b))return c(b.parent,d)},b=function(){var a=r.getWindow();return c(a,r.getWindow().top)},d=function(){return"undefined"!==typeof b()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();t.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:b}}},cd=function(a){var c,b,d=function(d){c=a.setInterval(d,100);b=a.setTimeout(function(){e()},42E4)},e=function(){c&&(a.clearInterval(c),c=null);
b&&(a.clearTimeout(b),b=null)};return{onResize:function(b){var c=a.innerWidth,g=a.innerHeight,p=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==g)&&(p=!0);p&&!d&&(b(),e(),p=!1);c=a.innerWidth;g=a.innerHeight})}}},oc={name:"AS_Finder",dependencies:["viewport"],creator:function(a,c){var b,d=function(){try{var d=a.isHidden(),f,q={};d!==b&&(f=g.stringifyTriState(d),q.res1=f,q.ps=f,q.ts=r.now(),q.psfr=g.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),c.events.trigger("newState",q));
b=d}catch(m){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)cd(b).onResize(d)}}}},settings:{emits:!0,applies:function(a,c,b){return b.embedded&&!b.isBustedIframe()&&!b.isSpecifiedAd()}}},pc={name:"hA",dependencies:["AS_Finder"],creator:function(a){var c=0,b=function(a,b){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,a,g(b).toION())},d=function(a){2>c&&b("ha1",a);c++};(function(){var c,f;
if(s.embedded)try{f=l.contextNode.parentNode,c=bd().getDFPValue(f),f={},f.df=c.type,c.size&&(f.sz=c.size.width+"."+c.size.height),c.tag&&(f.dom=c.tag),b("dfp",f),c.size&&a&&(a.events.on("newState",d),a.start())}catch(g){n.getAggregator().trigger("error",k.ERROR_CODES.HIDDEN)}})()},settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,c,b){return a.on("usehaps")}}},Oa=function(a,c,b,d){var e,f=0,q=0,m=!1,p=function(){e=Math.round(t.getNodeArea(a.body));if(e>=d){for(var p,u=e+20*e/100,l=a.querySelectorAll("iframe"),
l=g.fromNodeListToArray(l);l.length&&(q<u||f<b);)p=l.shift(),p=Math.round(t.getNodeArea(p)),p>=d&&(f++,q+=p);q>=u&&f>=b&&(u={va:e,bia:q,bin:f},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,c,g(u).toION()),m=!0)}},u=function(){var b;b=new MutationObserver(function(a){m?b.disconnect():r.execAtEndOfThread(function(){g(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&t.isElement(c)&&t.tagNameIs(c,"IFRAME")&&g.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,
characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!m&&g.isDef(x.MutationObserver)&&u())},nc={name:"BS_InApp",dependencies:[],creator:function(){var a=r.getWindow().document;n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Oa(a,"bs1",3,100)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,c,b){c=b.isAvid()||b.isOmid()||b.isMraid();b=!b.isDomless()&&b.friendly&&!b.embedded;return a.on("bas")&&c&&b&&a.bootstrapOn("app")}}},mc={name:"BS_Browser",dependencies:[],creator:function(){var a=
r.getWindow().document,c=a.body?Math.round(t.getNodeArea(a.body)):null;!n.getAggregator().request("mobileApp").isMobileAppEnvironment()&&c&&Oa(a,"bs2",10,c)},settings:{tier:k.TIERS.VIEWABILITY,applies:function(a,c,b){c=!a.bootstrapOn("app")&&!b.isDomless();return a.on("bbs")&&b.embedded&&c}}},Mb=function(){return{createInstance:function(a){return s.isDomless()?new dd:new ed(a)}}},ed=function(a){var c,b,d,e=new Fa,f=new da,q=new fd(e),m=new gd,p=new hd,u=new id(e,a),k=function(){g.isUndef(d)&&(d=new jd(e));
return d},l=function(){e.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new kd(a,e)},adTalkMessageCollection:function(){return m},idMapModule:k,interFrameQuerySelector:function(a){return new ld(a)}})};return{isApplicable:function(a){return g.isDef(x.JSON)&&g.isDef(x.postMessage)&&!a.isAvid()&&(!a.isOmidNative()||a.isOmidForWeb())},start:function(){l();f.traverse(q.addFrame);u.startListening();u.sendToKnownFrames();n.getAggregator().once("stopAdTalk",
function(){u.stopListening()});n.getAggregator().provide("adTalkEventAggregator",e)},sendAdTalkCall:u.sendAdTalkCall,getFrameMap:function(){g.isUndef(c)&&(c=new Pa(e));return c},getFrameMapIncludingPeerCase:function(){g.isUndef(b)&&(b=new Pa(e,!0));return b},getIdMap:k}},dd=function(){return{isApplicable:function(){return!1},start:function(){}}},kd=function(a,c){var b,d=c.request("adProxy").myIdCard,e=c.request("frameCollection").getMe().getStringifiedPosition();b=n.getAggregator().request("features").on("swapids")?
l.oid:l.asid;var f=a||{},g=l.asid,d=d.tagId,m=s.embedded,p=s.friendly,u=l.birthdate;b=b.split("-")[2];var y;s.friendly?y="["+k.AD_IDENTIFIER+"-"+l.asid+"]":(y=r.getWindow(),y=y.location&&y.location.href,y='iframe[src*="'+(y&&y.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:f,srcAsid:g,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:p,srcBirthdate:u,iasCommonId:b,nodeSelector:y,positionStr:e,version:"0.1"}},gd=function(){var a={};return{add:function(c){var b=c&&c.srcAsid;b&&(a[b]=c)},map:function(c){return g(a).map(c)},
has:function(c){return a[c&&c.srcAsid]}}},md=function(a,c,b,d){var e,f=a==x;e={position:c.slice(0),id:c.join("-"),isMe:f,isLeaf:!a.frames.length,adProxies:f?b:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return g(e.position).map(function(a,b){return g.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||g.isDef(e.selfDescription)}};var q=function(a){var b=
e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?g(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!g(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){g(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){q(b);p(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},fd=function(a){var c=[],b={},d={noMe:!0};return{addFrame:function(e,
f,g){var m=a.request("adProxy").getAll();e=new md(e,f,m,g);c.push(e);b[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return b[a]},list:c,dictionary:b,getMe:function(){return d}}},Pa=function(a,c){var b=function(a,b){var g=b.adProxies,m="";if(b.isValidForMapping()){if(c)m+=d(g,b.getStringifiedPosition());else{var p;p=""+b.getStringifiedPosition();p+=b.isMe?"*":"";p+=g.length?"."+g[0].tagId:"";m+=p}return m}},d=function(a,b){var c="";return c=a.length?c+g(a).stringify(function(a,c){return b+
(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var c=a.request("frameCollection"),d=g(c.list).stringify(b,"|");return g.toBase(c.getMe().unifiedId,62)+"+"+d}}},jd=function(a){var c=a.request("frameCollection").getMe().getStringifiedPosition(),b=l.contextNode.parentNode,d=a.request("interFrameQuerySelector",b),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!s.embedded,f="BODY"!==t.getNodeName(b)&&"HEAD"!==t.getNodeName(b),g;if(g=a.srcIsEmbedded){g=
"0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);g=!(g?l:!a.srcIsFriendly)}e&&f&&!g?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&s.embedded,e=0===c.indexOf(e)||0===e.indexOf(c),e=!(!a||!e));return e};return{output:function(){var b,d=c+"*";b=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});b.push(d);b=b.join("|");120<b.length&&(b=e(b),
n.getAggregator().trigger("stopAdTalk"));return b},isCandidateForMyIdMap:f}},ld=function(a){var c=new da,b=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,c){return t.querySelector(b(a),c)},e=function(b,e){var m,p,k;try{p=d(b,e),p||(m=c.getFrames(!0,a),g(m).findFirst(function(a,b){return k=d(b,e)}))}catch(l){}return p||k||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},id=function(a){var c=
!1,b,d;d=n.getAggregator().request("features").on("swapids")?l.oid:l.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},f=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var b=k.DT_CODES.ADTALK;a.request("frameCollection");c||(c=!0);n.getAggregator().trigger("sendDt",b)},m=function(b,d,e){var f,
m,l,A,F;try{f=a.request("frameCollection");m=a.request("adTalkMessageCollection");l=d.messageContent.self;m.add(d);var B=f.getMe();B.unifiedId>l.unifiedId&&(B.unifiedId=l.unifiedId);var s;s=r.now()-d.sentTime;d.transferDuration=s;m=A=f.getFrame(l.id);g.isUndef(m)||g.isUndef(m.selfDescription)?(A=A||f.addFrame(b.source,l.id.split("-"),d),A.addInformationFromSrc(d,l),e()):A.addInformationFromSrc(d,l);(F=c&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(t){n.getAggregator().trigger("error",
k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new ea).send(f)},startListening:function(){b=new Ha;b.listen(e,m,f)},stopListening:function(){b&&b.stop()},validateMessage:e,processMessage:m,createMessage:f}},nd=function(){var a=n.getAggregator().request("ids"),c=a.getAsid();return{tagId:a.getFwId(),adSafeId:c}},hd=function(){var a,c=[],b=function(a){a=new nd(a);c.push(a);return a};a=b();return{createNew:b,getAll:function(){return c},myIdCard:a}},Tb=function(a){var c,
b,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,c=a.screenX-a.clientX,b=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&z.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:c,scrY:b}}}},od=function(a,c){var b,d,e=k.NA,f=e,q=!1,m=!1,p=!1,u=!c,l=n.getAggregator().request("browser"),v=function(a,b){Ic().applies(l)&&
r.getResizeObserver(function(c,d){var e=c.pop();0<e.contentRect.height*e.contentRect.width&&(b.unobserve(a),b.observe(a),d.disconnect())}).observe(a)},t=function(){var c=r.getIntersectionObserver(function(a,c){var d=a.pop(),g=d.intersectionRect.width*d.intersectionRect.height/(d.boundingClientRect.width*d.boundingClientRect.height)*100;isNaN(g)&&(v(d.target,c),g=0);e=Math.min(g,100);b=d.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){n.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});
u&&r.execAtEndOfThread(function(){e===k.NA&&(e=0)});c.observe(w(a));u&&r.execAtEndOfThread(function(){s.isBustedIframe()||n.getAggregator().trigger("delayedViewabilityReady")});q=!0},w=function(b){if(!g.isUndef(b)){if(p){b=a.document;var c=b.createElement("div");g(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return d=b}};return{start:function(){var b;try{a.document&&(p=!0,b={bodyElement:a.document.body,
document:a.document})}catch(c){m=!0}b&&null!==b.bodyElement?t():b&&b.document?z.whenReady(t,b.document):m?n.getAggregator().request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):t()},isReady:function(){return e!==k.NA},isStarted:function(){return q},getAdNodeDimensions:function(){var a;b&&(a=C({scrX:void 0,scrY:void 0,width:b.width,height:b.height}));return a},getObservedNode:function(){return d},getPiv:function(){return e}}},va=function(){var a=!1;(function(){z.whenReady(function(){n.getAggregator().trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}},uc={name:"loopDelay",dependencies:[],creator:va,settings:{applies:function(a,c,b){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY}},pd=function(){return{start:function(a){n.getAggregator().on("measurable",function(){a()})},isApplicable:function(a,c){return!c.browserIs(k.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},qd=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},kb=
function(a,c,b){var d=!1,e=function(){try{c.impressionIsIdentifiable()&&!d?(d=!0,n.getAggregator().trigger("notify",l._onMeasurable)):c.impressionIsIdentifiable()||__IntegralASDiagnosticCall("rtsmeas_imp_not_iden",{},l)}catch(a){__IntegralASDiagnosticCall("rtsmeas_send_noti_error",a,l)}};return{start:function(){try{var c,d=[rd(),sd(),qd(),pd()];(c=g(d).findFirst(function(c,d){return d.isApplicable(b,a)}))?c.start(e):__IntegralASDiagnosticCall("rtsmeas_no_chosen_strategy",{},l)}catch(m){__IntegralASDiagnosticCall("rtsmeas_start_error",
m,l)}},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&g.isDef(l._onMeasurable)}}},sd=function(){return{start:function(a){Kc(n.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,c){var b=9<=c.getIOSVersion();return(!c.browserIs(k.BROWSERS.WEBKIT)||b)&&s.isVideo()}}},rd=function(){return{start:function(a){n.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&s.isVideo()}}},
td=function(a,c,b){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();g.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=g.isDef(g(d).find(function(a,c){return c===b}));return c.accepts()&&c.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){n.getAggregator().trigger("adImpression")})}}},
ud=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(c){var b,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&g.isDef(d)&&(b=d.mediaType||k.MEDIA_TYPE.DISPLAY);return c===b},supportsAdContainerGeometry:function(){var c=!1,b=a.getAvidAdSessionContext();g.isDef(b)&&(c=b.avidJsVersion,(b=g.isUndef(c))||(b=g.getNum(c.split(".")[0]),c=g.getNum(c.split(".")[1]),b=2===b?7<=c:3<=b),c=b);return c}}},
vd=function(a,c,b){var d=["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,c){return c===b}));return c.accepts()&&c.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&n.getAggregator().trigger("adImpression")})}catch(b){}}}},wd=function(a,c,b){var d=["rjss",
"jss","jload"];return{accepts:function(){var a=g.isDef(g(d).find(function(a,c){return c===b}));return c.accepts()&&c.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var c=r.getWindow(),c=c&&c.omid3p,b=n.getAggregator().request("omidAdSessionContext"),d=!!(a&&a.isSupported&&a.isSupported()),e=!!(c&&g.isFunction(c.registerSessionObserver)&&
g.isFunction(c.addEventListener));return{accepts:function(){return(d||e)&&!l.videoId},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},xd=function(a,c,b){var d=n.getAggregator().request("omidAdSessionContext"),d=d.isHtml&&d.isWeb,e,f=r.getWindow(),q=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a;e=d?["rjss","jss","jload","jsvid","fwjsvid"]:["rjss","jss","jload"];return{accepts:function(){var a=g.isDef(g(e).find(function(a,
c){return c===b}));return c.accepts()&&c.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:c.isMediaType,supportsAdContainerGeometry:function(){return c.supportsAdContainerGeometry()},start:function(){q.addEventListener("start",function(a){n.getAggregator().trigger("adImpression")})}}},Dc=function(a){return{resolve:function(){return g(a).findFirst(function(a,b){return b.environment.accepts()})}}},Ac=function(a){var c=!1,b=!1,d=!1,e=!1,f=n.getAggregator().request("omidAdSessionContext");
f.queuedOutputItems=[];f.cachedEvents=[];f.cachedGeometryEventsReceived=!1;f.cachedVideoEventsReceived=!1;f.recoveredTime=-1;var q=new ha,m=n.getAggregator().request("omidAdSessionVerificationParameters"),p=n.getAggregator().request("features"),k=r.getWindow(),y=(k=k&&k.omid3p)&&g.isFunction(k.registerSessionObserver)&&g.isFunction(k.addEventListener)?k:a,v=!1;f.omidEarlyExit=!1;f.mediaType="display";var t=!1,w=function(a,b){f.queuedOutputItems.push({code:a,value:b})},A=function(a,b,c){n.getAggregator().trigger(a,
b,c)},F=function(a){n.getAggregator().trigger(a)},B=function(){if(c&&b&&(!e||d)){x.omidSupported=!0;f.hasOwnProperty("impressionType")&&w("oiet",f.impressionType);f.hasOwnProperty("creativeType")&&w("oct",f.creativeType);f.underEvaluation&&w("oef",!0);v=f.exitedOASRS=!0;var a=m&&m.IAS&&0<Object.keys(m.IAS).length;xa(a?m.IAS:m)}},Q=function(a){function g(){return s.isOmidForWeb()||a.data.hasOwnProperty("supportsLoadedEvent")&&("true"===a.data.supportsLoadedEvent||!0===a.data.supportsLoadedEvent)&&
"string"===typeof a.data.creativeType&&""!==a.data.creativeType}var q="0";if("sessionStart"===a.type){f.adSessionType=a.data.context.adSessionType;f.environment=a.data.context.environment;f.accessMode=a.data.context.accessMode;f.omidNativeInfo=a.data.context.omidNativeInfo;f.omidJsInfo=a.data.context.omidJsInfo;f.deviceInfo=a.data.context.deviceInfo;f.app=a.data.context.app;f.supports=a.data.context.supports;f.app&&"string"===typeof f.app.appId&&-1<f.app.appId.toLowerCase().indexOf("pandora")&&(f.ignoreDivAsCandidate=
!0);a.data.hasOwnProperty("contentUrl")&&(f.contentUrl=a.data.contentUrl);a.data.context.hasOwnProperty("underEvaluation")&&(f.underEvaluation=a.data.context.underEvaluation);f.isJavaScript="javascript"===f.adSessionType;f.isNative="native"===f.adSessionType||"javascript"===f.adSessionType;f.isLimitedSandbox="app"===f.environment?s.embedded:"full"!==a.data.context.accessMode;f.isHtml="html"===a.data.context.adSessionType;f.isWeb="web"===a.data.context.environment;m=a.data.verificationParameters;f.isOmidForWebEnvironment=
f.isHtml&&f.isWeb;f.element=a.data.context.videoElement||a.data.context.slotElement||null;g()?(e=!0,f.useOMID13Logic=!0,w("ohand","13"),y.addEventListener("video",G),y.addEventListener("media",G)):w("ohand","12");f.isOmidForWebEnvironment||(f.integratedBlocking=l&&l.isResolved&&s.integratedBlockingApplies(l.mobFwUrl),f.integratedBlocking&&p&&p.on("exitOASRSEarly")&&(f.omidEarlyExit=!0,q="1",f.omidEarlyExit&&-1<l.mobFwUrl.indexOf("xmtp=v")&&(f.mediaType="video")),!a.data.mediaType||"display"!==a.data.mediaType&&
"video"!==a.data.mediaType||(f.mediaType=a.data.mediaType));f.omidEarlyExit&&(b=!0,w("omtp",f.mediaType),g()&&(d=!0),"video"===f.mediaType&&(f.isVideo=!0),f.isNativeVideo=f.isNative&&f.isVideo,f.isDisplay="display"===f.mediaType);for(var k=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],u,n,r,F=0;F<k.length;F++)u=k[F].root,n=k[F].field,r=k[F].code,"object"===typeof f[u]&&"undefined"!==typeof f[u][n]&&w(r,f[u][n]);w("oast",f.adSessionType);w("oacm",f.accessMode);w("oenv",f.environment);f.hasOwnProperty("contentUrl")&&
w("ocon",encodeURIComponent(f.contentUrl||""));w("oerl",q);w("oses",s.getTagTime());c=!0;B()}"sessionError"===a.type&&(q=("string"===typeof a.data.errorType?a.data.errorType:"NoErrType")+"_"+encodeURIComponent("string"===typeof a.data.message?a.data.message:"NoMessage"),v?A("addOutputItem",{output:q},"oser"):w("oser",q))},X=function(a){"impression"===a.type&&(f.omidImpressionArrived=!0,F("omidimpressionarrived"),f.mediaType="web"===f.environment?a.data.mediaType||"video":a.data.mediaType,w("omtp",
f.mediaType),w("oimp",s.getTagTime()),"video"===a.data.mediaType&&(f.isVideo=!0),a.data.adView&&(a.data.viewport||f.isWeb)&&(f.impressionViewabilityMeasurement={type:"geometryChange",data:{viewport:a.data.viewport,adView:a.data.adView},timestamp:a.timestamp},"undefined"===typeof f.geometryArrived&&q.checkForViewAttachmentBasedOnAdSessionType(f,a.data.adView)&&(f.geometryArrived=!0,F("omidrendgeoupdate"))),a.data.hasOwnProperty("impressionType")&&!d&&(f.impressionType=a.data.impressionType),f.isNativeVideo=
f.isNative&&"video"===a.data.mediaType,f.isDisplay="display"===a.data.mediaType,b=!0,B())},G=function(a){a&&"start"===a.type?(f.videoStartArrived=!0,F("omidrendvideostart")):"loaded"===a.type&&(w("oloa",s.getTagTime()),d=!0,f.omidLoadedArrived=!0,F("omidloadedarrived"),a.data.hasOwnProperty("creativeType")&&(f.creativeType=a.data.creativeType),a.data.hasOwnProperty("impressionType")&&(f.impressionType=a.data.impressionType),!0!==f.omidEarlyExit||t||(A("addThrottledOutputItem","oiet",f.impressionType),
A("addThrottledOutputItem","oct",f.creativeType),t=!0),B())};return{start:function(){y.registerSessionObserver(Q,"IAS");y.addEventListener("impression",X)}}},Bc=function(){return{accepts:function(){return!0}}},Ka=function(){var a=n.getAggregator().request("omidAdSessionContext"),c=n.getAggregator().request("omidVerificationClient"),b=new ba(c),d=a.isHtml&&a.isWeb;return{accepts:function(){return b.accepts()&&d}}},Cc=function(){return{start:function(){xa(l.contextNode&&(l.contextNode.dataset.iasParameters||
l.iasParameters))}}},yd=function(a,c){var b=function(a){try{c.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(b){}};return{start:function(){a.addEventListener("video",b)},addVideoPlaybackEventListener:function(a){c.on("videoPlaybackEvent",a)}}},zd=function(a,c){var b,d=function(a){var d,g,m;try{d=a.eventData.percentageInView,g=b&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},
shouldDelegateToDomBasedViewability:g,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},c.trigger("screenLocationChanged",m)}catch(p){}};return{start:function(){try{var c=a.getAvidAdSessionContext().avidAdSessionType;b="display"===c||"video"===c;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){c.on("screenLocationChanged",a)}}},Ad=function(a,c){var b=[],d=(new Date).getTime(),e=0,f=0,q=!1,m=
new Ma,p=n.getAggregator().request("omidAdSessionContext"),u=r.getWindow(),y=(u=u&&u.omid3p)&&g.isFunction(u.registerSessionObserver)&&g.isFunction(u.addEventListener)?u:a,v=!1,s={isEmpty:function(){return 0===b.length},toString:function(){for(var a="{vEventCount:"+b.length+",vEvents:[",c=0;c<b.length;c++)var d=b[c],a=a+((0<c?",{":"{")+("t:"+d.t+",")+("rt:"+d.rt+",")+("tp:"+d.tp+",")+("sl:"+d.sl+",")+("ad_duration:"+d.ad_duration+",")+("volume:"+d.volume)+"}");return a+"]}"}},w=function(){q=!0},A=
function(a){if(-1!=="|start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish|complete|pause|bufferStart|skipped|playerStateChange|loaded|volumeChange|".indexOf("|"+a.type+"|")){v&&(p.cachedVideoEventsReceived=!0,"start"===a.type&&(p.cachedStartEventIndex=p.cachedEvents.length),p.cachedEvents.push(a));try{var m="",u=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),y=u-(l.birthdate||u+1),w="n",r=!1;switch(a.type){case "start":m="adVideoStart";p.videoStartArrived=!0;n.getAggregator().trigger("omidrendvideostart");
d=u;f=a.data.duration;1E3<f&&(f/=1E3);e=a.data.videoPlayerVolume;break;case "volumeChange":m="volumeChanged";e=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":m="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);r=!0;n.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":m="pauseAd";break;case "resume":case "bufferFinish":m="resumeAd";break;case "skipped":m="adSkipped"}if(""!==m){var A=n.getAggregator().request("mScreenEvents");
A&&(w=A.getCurrentLoc());b.push({t:u-d,rt:y,tp:m,sl:w,ad_duration:f,volume:e})}if("loaded"===a.type&&g.isDef(a.data)){var s=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),m=-1!==s?s+1:void 0,u=[];!0===a.data.autoPlay?u.push("autoplayed"):u.push("clicktoplay");!0===a.data.skippable&&u.push("skippable");"fullscreen"===a.data.state&&u.push("fullscreen");var t=u.join(".");!0===q?(g.isDef(m)&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"vbp",m),n.getAggregator().trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"vps",t)):(g.isDef(m)&&n.getAggregator().trigger("addOutputItem",{output:m},"vbp",{type:k.IMPRESSION_EVENT}),n.getAggregator().trigger("addOutputItem",{output:t},"vps",{type:k.IMPRESSION_EVENT}))}"start"===a.type&&n.getAggregator().trigger("omidAdDuration",{ad_duration:f});var K;"playerStateChange"===a.type?K="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?K="AdPlaying":
-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(K="AdPaused");g.isDef(K)&&c.trigger("videoPlaybackEvent",{eventType:K,eventData:null});r&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS)}catch(O){__IntegralASDiagnosticCall("omidvideo",O,x.bootstrapper)}}};return{start:function(){n.getAggregator().on("impressionsent",w);n.getAggregator().provide({omidVideoEventsString:s});v=!0;y.addEventListener("video",A);v=!1;p.cachedVideoEventsChecked=!0;p.cachedVideoEventsReceived&&p.processCachedEvents();
m.init()},addVideoPlaybackEventListener:function(a){c.on("videoPlaybackEvent",a)}}},Qa=function(a,c){var b=!1,d=function(a){var d=a.percentageInView;b=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;c.trigger("measurementChanged",a)};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},
addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return b}}},Bd=function(a,c,b){var d=g.isDef(a)?a.environment:void 0,e=g.isDef(a)?a.measurementStrategy:void 0,f=function(){return g.isDef(e)};g.isDef(c)&&c.start();return{hasMeasurementStrategy:f,getScreenLocationInfo:function(a){return c.create(a)},isImmediate:function(){return f()?d.isImmediate():!0},isMeasurable:function(){return f()?e.isMeasurable():!1},isMediaType:function(a){return f()?d.isMediaType(a):
!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){f()&&d.start()},requiresDelayedViewabilityEvent:function(){f()&&c.requiresDelayedViewabilityEvent()}}},Jb=function(a,c,b){var d=n.getAggregator().request("mobileApp");return{create:function(){var b=[],b=b.concat(a.getOmidMeasurementStrategies()),b=b.concat(a.getAvidMeasurementStrategies()),b=b.concat(a.getMraidMeasurementStrategies());(b=(new ia(b)).resolve())||n.getAggregator().trigger("addOutputItem",
{output:"0"},"oam",{type:"impression"});var c=new Cd(b);return new Bd(b,c,d.isMobileAppEnvironment())}}},Kb=function(a){var c=n.getAggregator().request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=n.getAggregator().request("omidVerificationClient"),c=new ba(a),e=[];if(c.accepts()){var f=new fa,g=new Dd,m=new Ka,p=n.getAggregator().request("omidAdSessionContext"),k=new Ed(a,new E),f=[{environment:f,measurementStrategy:new Fd(a,new E)},{environment:m,measurementStrategy:new Gd(new Ra,
r.getWindow(),new E)},{environment:g,measurementStrategy:new Sa(new ja,r.getWindow(),new E)}],f=(f=(new ia(f)).resolve())?f.measurementStrategy:{},m=new Ta(new Ua(new U),new U,p.isHtml),p=new wd(a,c,l.mode),g=new Va(k,f,new E,m),c=new xd(a,c,l.mode),a=new Wa(k,f,new Ad(a,new E),new E,m);e.push({environment:p,measurementStrategy:g});e.push({environment:c,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=n.getAggregator().request("avidJsClient"),c=new ud(b),e=[];if(c.accepts()){var f=
new td(b,c,l.mode),g=new vd(b,c,l.mode),m;m=new yd(b,new E);if(c.supportsAdContainerGeometry()){var p=new Hd,k=new Id,y=new Sa(new ja,r.getWindow(),new E),v=new Jd(b,new E),p=(p=(new ia([{environment:p,measurementStrategy:v},{environment:k,measurementStrategy:y}])).resolve())?p.measurementStrategy:{},k=new Ta(new Ua(new U),new U,k.accepts()),y=new Kd(b,new E),b=new Va(y,p,new E,k);m=new Wa(y,p,m,new E,k)}else k=new zd(b,new E),b=new Qa(k,new E),m=new Xa(k,m,new E);e.push({environment:f,measurementStrategy:b});
e.push({environment:g,measurementStrategy:m});a.setAvidAdSessionContext(c.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=c.isSafeToInjectMraid(),d=new Ld(r.getWindow(),d,c.isMobileAppEnvironment());if(d.accepts()){var e=n.getAggregator().request("context"),e=new Md(r.getWindow(),e),f=new Nd(r.getWindow(),new E);e.accepts()?(d=new Od(r.getWindow(),new E),d=new Xa(f,d,new E),d={environment:e,measurementStrategy:d}):(e=new Qa(f,new E),d={environment:d,measurementStrategy:e});
a.push(d)}return a}}},ia=function(a){return{resolve:function(){var c=g(a).findFirst(function(a,c){return c.environment.accepts()});if(g.isDef(c))return c}}},Cd=function(a){var c=!1,b,d={winDimensions:C({scrX:0,scrY:0,width:0,height:0}),adDimensions:C({scrX:0,scrY:0,width:0,height:0}),containerDimensions:C({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},e=function(a){return a?
new C({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):C({scrX:0,scrY:0,width:0,height:0})},f=function(a){b={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:g.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:g.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,
shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};var d=a.omidObstructions;g.isDef(d)&&""!==d&&(b.omidObstructions=d);a.isMeasurable&&c&&(c=!1,n.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(c){var e=d;if(g.isDef(b))if(a.environment.supportsAdContainerGeometry())e=b;else if(b.shouldDelegateToDomBasedViewability)e=
c,e.method=b.method;else if(0===b.percentInView||75<=b.percentInView)e=b;return e},start:function(){var b;g.isDef(a)&&g.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(f),b.start())},requiresDelayedViewabilityEvent:function(){c=!0}}},Xa=function(a,c,b){var d=!1,e=!1,f=!1,q,m,p,u,l=function(){if(!g.isUndef(m)){var a=[],c,l;d?(e?(l=!1,c=100):(l=u,c=p),50>c&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,c=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));f=!0;m.shouldDelegateToDomBasedViewability=
l;m.percentageInView=c;m.viewState=50>c?k.OUT_OF_VIEW:k.IN_VIEW;m.outOfViewReason=a.join(".");q=m;b.trigger("measurementChanged",q)}},v=function(a){m=a;p=a.percentageInView;u=a.shouldDelegateToDomBasedViewability;l()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);l()};return{start:function(){n.getAggregator().trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(v);a.start();c.addVideoPlaybackEventListener(r);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return f}}},Md=function(a,c){return{accepts:function(){return c.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,n.getAggregator().trigger("adImpression"))})}catch(c){}}}},Od=function(a,c){var b=function(a){try{c.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(b){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(b)}catch(c){}},addVideoPlaybackEventListener:function(a){c.on("inMobiMraidVideoPlaybackEvent",a)}}},Kd=function(a,c){var b=function(a){var b=new C(a.eventData.viewport||
{width:0,height:0}),g=new C(a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0}),m=new C(a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0});a={viewport:b.getRoundedGeometry(),originalAdContainer:g.getRoundedGeometry(),computedAdContainer:m.getRoundedGeometry(),percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};c.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,
viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",b)},addAdContainerGeometryMeasurementChangedListener:function(a){c.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateAvidOutOfViewReasons:d}},
Ta=function(a,c,b){function d(a,b,c){c=m(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){var c=s.isOmidForWeb(),d=!s.isOmidSandboxedEnvironment(),c=c&&d;return{x:c?b.x:a.x+b.x,y:c?b.y:a.y+b.y,width:b.width,height:b.height}},
m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,l){if(g.isDef(e)&&g.isDef(l)){var n=e.viewport,v=e.computedAdContainer,s=v.obstructions,w=e.omidObstructions,A=s&&0<s.length,t=e.originalAdContainer,B=l.adGeometry,Q=l.adFound,x=e.detectionMethod,G=0,n={x:0,y:0,width:n.width,height:n.height},z=q(t,B),I=e.outOfViewReason,L=0,J=0,E=A||!1,L=1>=B.width*B.height;b&&L&&(Q=!1,I=I||"",Q||-1!==I.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(I=
k.OUT_OF_VIEW_REASONS.GEOM+(""!==I?"."+I:"")));if(Q&&0<e.percentageInView){L=d(n,v,z);A?(G=m(v,z),G=f(n,v,G),G=q(v,G),G=a.calculateObstructedArea(G,s)):G=0;J=G;G=Math.round((L-J)/(z.width*z.height)*100);A&&0===J&&(E=!1);for(var B=(new C(z)).getRoundedGeometry(),Q=E,O,A=0,J=c.getConfig(B).numberOfSlices,T=r.floor(B.height/J)||1,s=[],L=Q?a.getObstructionStatusBySlice(J):[],Ga,A=0;A<J;A++)O=B.y+T*A,A==J-1&&(T=B.y+B.height-O),O={x:B.x,y:O,width:B.width,height:T},Ga=d(n,v,O),O=1==Ga/(O.width*O.height),
s.push(O);if(Q)for(v=r.min(L.length,J),A=0;A<v;A++)s[A]=s[A]&&!L[A];v=s}else v=c.getConfig(B).defaultSliceArray;t={windowDimensions:n,containerDimensions:t,adDimensions:z,percentageInView:G,viewState:50<=G?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=G?"":I||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:E,sliceStatus:v};g.isDef(w)&&""!==w&&(t.omidObstructions=w);return t}}}},Hd=function(){return{accepts:function(){return s.isAvidNative()}}},Jd=function(a,c){var b=function(a){var b=a.eventData.originalAdContainer;
a=!!b;b=(new C({x:0,y:0,width:a?b.width:0,height:a?b.height:0})).getRoundedGeometry();c.trigger("avidNativeGeometryChanged",{adGeometry:b,adFound:a})};return{start:function(){a.addEventListener("viewability",b)},addAdGeometryMeasurementChangedListener:function(a){c.on("avidNativeGeometryChanged",a)}}},Id=function(){return{accepts:function(){return s.isAvid()&&!s.isAvidNative()}}},Va=function(a,c,b,d){var e,f,q,m=function(){if(g.isDef(e)&&g.isDef(f)){var a=d.calculateGeometricMeasurement(e,f);q=a.isMeasurable=
!0;b.trigger("geometryMeasurementChanged",a)}},p=function(a){e=a;m()},l=function(a){f=a;m()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();c.addAdGeometryMeasurementChangedListener(l);c.start()},addMeasurementChangedListener:function(a){b.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return q}}},Ua=function(a){var c=[],b;return{calculateObstructedArea:function(d,e){var f,q,m,p;q=e&&0<e.length;var k;if(q){k=Math.round(d.width);var l=Math.round(d.height);f=Array(k);for(m=0;m<k;m++)f[m]=Array(l);k={matrix:f,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:k,height:l}}else k={};f=k;l=k=0;if(q){for(;k<e.length;k++){q=e[k];m=l=f;var n=q;f=Math.max(m.x,n.x);q=Math.max(m.y,n.y);p=Math.min(m.x+m.width,n.x+n.width);n=Math.min(m.y+m.height,n.y+n.height);
m=p-f;p=n-q;m=0<m?m:0;p=0<p?p:0;f-=l.x;q-=l.y;m=f+m;p=q+p;for(f=Math.round(f);f<Math.round(m);f++)for(n=Math.round(q);n<Math.round(p);n++)void 0!==l.matrix[f]&&void 0===l.matrix[f][n]&&(l.matrix[f][n]=1,l.obscuredPixelCount+=1);f=l}l=f.obscuredPixelCount;k=f;if(g.isUndef(k.matrix)||0===k.matrix.length)b=[];else{q=0;p=!1;f=k.matrix[0].length;m=k.matrix.length;p=a.getConfig({height:f}).numberOfSlices;for(var n=r.floor(f/p)||1,s=[],w=0;w<f;w++){p=!1;for(var A=0;A<m;A++)if(1===k.matrix[A][w]){p=!0;break}q++;
p&&(w+=n-q,q=n);if(q==n||w===f-1)s.push(p),q=0}b=s}}else b=c;return l},getObstructionStatusBySlice:function(){return b}}},Ed=function(a,c){var b=n.getAggregator().request("omidAdSessionContext");b.geometryChangeEvents=[];var d=null,e=!1,f=r.getWindow(),q=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new ha,p=!1,u=!1,y=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=b.delayingViewabilityEvents=!1,d&&
(v(d),d=null)):r.setTimeout(y,50)},v=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView){p&&(b.cachedGeometryEventsReceived||(b.cachedFirstGeometricIndex=b.cachedEvents.length),b.cachedGeometryEventsReceived=!0,b.cachedEvents.push(a));var f=a.data.adView,q=!!(f.measuringElement&&f.containerGeometry&&f.onScreenContainerGeometry),u=b.cachedStartEventIndex;if(!p&&b.unrecoveredPlayTime&&-1<u&&50<=f.percentageInView){var u=r.now()-b.cachedEvents[u].timestamp,v=n.getAggregator().request("mScreenEvents");
v&&v.setRecoveredTimeInSlTimes&&v.setRecoveredTimeInSlTimes(u)}10>b.geometryChangeEvents.length&&(b.geometryChangeEvents.push(a.timestamp-l.birthdate+"."+f.percentageInView),n.getAggregator().trigger("addOutputItem",{output:b.geometryChangeEvents.join("_")},"og"));if(b.delayingViewabilityEvents)d=a,e||(e=!0,y());else{var x=[];f.onScreenGeometry&&f.onScreenGeometry.obstructions&&0<f.onScreenGeometry.obstructions.length&&(q&&(f.onScreenContainerGeometry.obstructions=f.onScreenGeometry.obstructions),
f.reasons&&-1<f.reasons.indexOf("obstructed")&&100>f.percentageInView&&(f.onScreenGeometry.obstructions=f.onScreenGeometry.obstructions.slice(0,4),g(f.onScreenGeometry.obstructions).each(function(a,b){x.push(Math.round(b.x)+"."+Math.round(b.y)+"."+Math.round(b.width)+"."+Math.round(b.height))})));u=s.isOmidForWeb()?t.calcWinDims():{width:0,height:0};u=new C(a.data.viewport||u);v=new C(q?f.containerGeometry:f.geometry||{x:0,y:0,width:0,height:0});q=new C(q?f.onScreenContainerGeometry:f.onScreenGeometry||
{x:0,y:0,width:0,height:0});f={viewport:u.getRoundedGeometry(),originalAdContainer:v.getRoundedGeometry(),computedAdContainer:q.getRoundedGeometry(),percentageInView:f.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:K(f.reasons),omidObstructions:x.join("_")};"undefined"===typeof b.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(b,a.data.adView)&&(b.geometryArrived=!0,n.getAggregator().trigger("omidrendgeoupdate"));c.trigger(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
f)}}},K=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN,hidden:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";g(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};b.processCachedEvents=function(){if(!u&&b.omidNativeInfo&&"string"===typeof b.omidNativeInfo.partnerName&&
"bytedance"===b.omidNativeInfo.partnerName.toLowerCase()){var a="video"===b.mediaType,c=b.supports&&-1<b.supports.join().indexOf("clid"),d="full"===b.accessMode,e=!a||b.cachedVideoEventsChecked,f=b.cachedGeometryEventsChecked;if(("limited"===b.accessMode||d&&c)&&f&&e&&0<b.cachedEvents.length){var g=d="o",c=f=e=0,m=!a,p=!1,q=r.now();if(a){var k=b.cachedEvents[b.cachedFirstGeometricIndex],g=b.cachedEvents[b.cachedStartEventIndex];k&&g&&k.timestamp>g.timestamp&&(k.timestamp=g.timestamp)}for(k=0;k<b.cachedEvents.length;k++){for(var g=
q,l=-1,v=0;v<b.cachedEvents.length;v++)!b.cachedEvents[v].alreadyOrdered&&b.cachedEvents[v].timestamp<g&&(g=b.cachedEvents[v].timestamp,l=v);-1!==l&&(l=b.cachedEvents[l],l.alreadyOrdered=!0,"geometryChange"===l.type&&l.data&&l.data.adView?(e=l.data.adView.percentageInView,p=!0):m=-1<"start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(l.type),g=e&&50<=e&&m?"i":"o","o"===d&&"i"===g?f=l.timestamp:"i"===d&&"o"===g?c+=l.timestamp-f:"i"===d&&"i"===g&&(c+=l.timestamp-f,f=l.timestamp),
d=g)}u=!0;"i"===d?c+=r.now()-f:a&&!p&&-1<b.cachedStartEventIndex&&(b.unrecoveredPlayTime=!0);0<c&&(b.recoveredTime=c,(a=n.getAggregator().request("mScreenEvents"))&&a.setRecoveredTimeInSlTimes&&(a.setRecoveredTimeInSlTimes(c),b.recoveredTime=-1))}}};return{start:function(){p=!0;void 0!==b.impressionViewabilityMeasurement&&v(b.impressionViewabilityMeasurement);q.addEventListener("geometryChange",v);p=!1;b.cachedGeometryEventsChecked=!0;b.cachedGeometryEventsReceived&&b.processCachedEvents()},addAdContainerGeometryMeasurementChangedListener:function(a){c.on(k.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
a)},translateOmidOutOfViewReasons:K}},fa=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Fd=function(a,c){var b=n.getAggregator().request("omidAdSessionContext"),d=null,e=!1,f=r.getWindow(),q=(f=f&&f.omid3p)&&g.isFunction(f.registerSessionObserver)&&g.isFunction(f.addEventListener)?f:a,m=new ha,p=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(e=b.delayingViewabilityEvents=
!1,d&&(u(d),d=null)):r.setTimeout(p,50)},u=function(a){if(a&&"geometryChange"===a.type&&a.data&&a.data.adView)if(b.delayingViewabilityEvents)d=a,e||(e=!0,p());else{var f=a.data.adView.geometry,g=a.data.adView.containerGeometry,q=!!f,l=a.data.adView.measuringElement&&!!g,f=(new C({x:q&&l?f.x-g.x:0,y:q&&l?f.y-g.y:0,width:q?f.width:0,height:q?f.height:0})).getRoundedGeometry();"undefined"===typeof b.geometryArrived&&m.checkForViewAttachmentBasedOnAdSessionType(b,a.data.adView)&&(b.geometryArrived=!0,
n.getAggregator().trigger("omidrendgeoupdate"));c.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:q})}};return{start:function(){void 0!==b.impressionViewabilityMeasurement&&u(b.impressionViewabilityMeasurement);q.addEventListener("geometryChange",u)},addAdGeometryMeasurementChangedListener:function(a){c.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Dd=function(){var a=n.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Gd=function(a,
c,b){var d,e=function(){var c=a.find(),e,m,p=!1;g.isDef(c)&&null!==c?(m=!0,e=c.getBoundingClientRect(),e={x:e.x||e.left,y:e.y||e.top,width:e.width,height:e.height},c.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(c=m)c=e,c=!g.isDef(d)||!1!==g(c).compareTo(d);if(c||p)d=e,b.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();c.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Wa=function(a,c,b,d,e){var f=!1,q=!1,m,p,l,r,v,s=function(){if(!(g.isUndef(p)||g.isUndef(l)||g.isUndef(r))){v=!0;var a=e.calculateGeometricMeasurement(p,l),b=f&&q,c=f&&50<=a.percentageInView,n={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:f,isVideoPlayingInFullscreen:b,isSoundOn:!0},
s=a.omidObstructions;g.isDef(s)&&""!==s&&(n.omidObstructions=s);b&&(n.percentageInView=100);b||c?n.viewState=k.IN_VIEW:(n.viewState=k.OUT_OF_VIEW,n.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);m=n;d.trigger("videoGeometryMeasurementChanged",m)}},w=function(a){p=a;s()},t=function(a){l=a;s()},F=function(a){r=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?f=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(f=!1);s()};return{start:function(){n.getAggregator().trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(w);a.start();c.addAdGeometryMeasurementChangedListener(t);c.start();b.addVideoPlaybackEventListener(F);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return v}}},
Sa=function(a,c,b){var d,e=function(){var c=a.find(),e,m,p=!1;g.isDef(c)?(m=!0,e=c.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},c.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):(d&&(p=!0,e={x:0,y:0,width:0,height:0}),m=!1);if(c=m)c=e,c=!g.isDef(d)||!1!==g(c).compareTo(d);if(c||p)d=e,b.trigger(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:e,adFound:m})};return{start:function(){e();c.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){b.on(k.OMID_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},Ld=function(a,c,b){return{accepts:function(){var d=g(a.mraid).isObj();return b&&(d||c)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Nd=function(a,c){var b=!1,d=function(){var b,d,e;try{b=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===b?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:b,detectionMethod:k.DETECTION_METHODS.MRAID,
sliceStatus:e};c.trigger("mraidScreenLocationChanged",d)}catch(g){}},e=function(){var b=a.mraid;return g(b).isObj()&&g.isFunction(b.isViewable)},f=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var c=a.mraid;e()&&(b=!0,"loading"===c.getState()?c.addEventListener("ready",function(){f()}):f())},m=function(){b||q()};return{start:function(){var b=!0;if(g.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;n.getAggregator().trigger("addOutputItem",{output:g.stringifyTriState(b)},
"mi",{type:"impression"});b?n.getAggregator().trigger("exec","mraid.js",m):q()},addScreenLocationChangedListener:function(a){c.on("mraidScreenLocationChanged",a)}}},gc=function(a,c,b){var d={},e=function(b){var d=g.noop;c.bootstrapOn("useViewabilityNotification")&&(d=function(){a.skipAsFraudulent()||n.getAggregator().trigger("notify",b)});return d};(function(){b&&g(b).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},wb=function(){var a=new P({tiv:[1E4]}),c=g([k.IN_VIEW,
k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return c.contains(a.viewState)&&100===d},applies:function(a,c){return a.on("abcAudit")&&925955==l.anId&&c.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},vb=function(a,c){var b,d,e;b=a.on("everySecond");var f=c.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var g=[2E3,5E3,15E3],m=function(a,b){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a[b?"viewStateIgnoringRender":"viewState"])};b?(b=new P({tiv:d}),d=d[0]):f?(b=new P({tiv:g}),d=g[0]):(b=new P({tiv:e}),d=e[0]);e={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};e[d]=l._onInViewMRC;return{timeInViewThresholds:b,type:k.DT_CODES.PING,rts:e,isInView:m,isInViewIgnoringRender:function(a){return m(a,!0)},applies:!0,minUnit:1E3,shouldIncludeSound:!1,sendOtherwiseInViewSignal:!0}},yb=function(a,c){var b;
b=a.on("everySecond");var d=c.isVideo(),e=c.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],g=[1E3,5E3,15E3],m=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};b=b?new P({tiv:f}):d?new P({tiv:m}):new P({tiv:g});n.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:b,type:k.DT_CODES.FULLY_INVIEW,
isInView:p,applies:function(){return e},minUnit:1E3,shouldIncludeSound:!1}},xb=function(a,c){return{timeInViewThresholds:new P({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var c=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===c},applies:function(){return c.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Ab=function(a,c){var b,d,e,f=r.getMaxNumber(),q=c.isVideo(),m=a.id;d=
a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&d,n=function(b,c){if(!b.adDimensions)return!1;var d=c?"percentInViewIgnoringRender":"percentInView",e,m,l,n=b.adDimensions.area();l=1===b.tabHidden;var u=r.max(b.fullPercentInView||0,b[d]),d=g(a.thresholds).findFirst(function(a,b){e=b.lb||0;m=b.ub||f;if(n>=e&&n<=m)return!0});l=!l&&u>=d.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(l=!1);q&&(l=l&&b.isVideoPlaying,p&&(l=l&&b.isSoundOn));
return l};b=new P(a);d=a.qiv;(function(){e={};var a;g.isDef(l.rts)&&g.isDef(l.rts[m])&&(a=b&&g.isFunction(b.getTimeThresholds)&&b.getTimeThresholds()[0],a=g.isDef(a)?g.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():k.RTS_KEY_FOR_VQ,e[a]=l.rts[m])})();return{timeInViewThresholds:b,qivThreshold:d,type:k.DT_CODES.CUSTOM,rts:e,isInView:n,isInViewIgnoringRender:function(a){return n(a,!0)},metricId:m,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p,sendOtherwiseInViewSignal:!0}},
zb=function(a,c,b){var d=c.isVideo()?"video":"display",e=c.isMobileApp()?"app":"web",f=c.isDeviceTypeGroupMobile()?"mobile":"desktop",k=g(a.customViewability).isArray()&&0<a.customViewability.length,m=b.on("customMetric"),p=b.on("groupmCM"),l=function(a,b){var c,m,k,l,q;c=g(b.mediaTypes).contains(d);m=g(b.distributionChannels).contains(e);k=g.isDef(b.deviceGroups)?g(b.deviceGroups).contains(f):!0;l=H.contains(b.id,"fiv");q=H.contains(b.id,"groupmCM");l=!l;q&&(l=p);return l&&c&&m&&k};return{resolve:function(){var b=
[],c;m&&k&&(c=g(a.customViewability).filter(l),g(c).each(function(a,c){b.push(c)}));return b}}},P=function(a){var c=[];if(g(a.tiv).isArray())g(a.tiv).each(function(a,b){c.push(new ka(b))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var b=new Pd;c.push(new Qd(b,parseInt(a[1].replace("%"))));c.push(new ka(1E3*parseInt(a[0])))}else g.isDef(a.tiv)&&c.push(new ka(1E3*a.tiv));return{getTimeThresholds:function(){return c}}},Pd=function(){var a=-1,c=function(b){0<a||(b=g.isDef(b.ad_duration)?b.ad_duration:
b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};n.getAggregator().on({omidAdDuration:c,adVideoStart:c,adDurationChange:c});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},ka=function(a){var c=0,b;0<a&&(c=a/1E3);b=1E3*c;return{getTimeInViewInSeconds:function(){return c},getTimeInViewForRts:function(){return b}}},Qd=function(a,c){var b=0,d=!1,e=function(a){b=0;0<c&&0<a&&(b=r.ceil(c/100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&
(d=!0,e(a.getAdDuration()));return b},getTimeInViewForRts:function(){return 0}}},Aa=function(a,c,b,d){var e=d?"isInViewIgnoringRender":"isInView",f=function(d){a[e](d)?(c.mark(),b.doEligibleJobs(c.getTotalTime())):c.stop()};return{start:function(){a.addMeasurementChangedListener(f)}}},hc=function(a,c,b,d){var e,f,k,m,p,l,r=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var n=0,r=1===a.tabHidden,s=a.isVideoPlaying,y=a.isSoundOn,t=a.isVideoPlayingInFullscreen;
g(a.sliceStatus).each(function(a,b){k(b,r,s,t)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});w("slcVt",m);d&&(g(a.sliceStatus).each(function(a,b){v(b,r,s,t)&&y?f[a].mark():f[a].stop();p[a]=f[a].getTotalTime()}),w("slcVtVol",p));l=d&&c&&c.shouldIncludeSound?p:m;a=g(l).findFirst(function(a,b){n=Math.max(n,b);return 0>=b});g.isUndef(a)&&b.doEligibleJobs(n)},w=function(a,b){var c={};c[a]=b;n.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},t=function(a){!e&&a.sliceStatus&&(e=[],f=
[],m=[],p=[],g(a.sliceStatus).each(function(a){e.push(new Y(1));m.push(0);d&&(f.push(new Y(1)),p.push(0))}))},F=function(a){g.isUndef(a.sliceStatus)||(e||t(a),s(a))};return{start:function(){k=d?v:r;a.addMeasurementChangedListener(F)}}},ya=function(a,c,b){return{isInView:a.isInView,isInViewIgnoringRender:a.isInViewIgnoringRender,addMeasurementChangedListener:function(a){c.addMeasurementChangedListener(a,b)}}},cc=function(a,c,b,d,e,f,g,m,p,l){var n=!1,v=s.isVideo(),t=f.request("mobileApp"),w=Z().applies(b,
e),A=b.browserIs(k.BROWSERS.GECKO)||b.browserIs(k.BROWSERS.IE)&&e.on("rattie")||w,F=s.xDomainIframe&&!A,B=new Ia(10),x=function(){e.on("viewabilityready")&&!n&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),n=!0)};f.on("delayedViewabilityReady",function(){z();x()});f.on("delayedViewabilityReadyCallOnly",x);var z=function(b){b=b||!1;try{B.start();var d,e;c.hasMeasurementStrategy()?e=(t.isMobileAppEnvironment()||s.isOmidNative())&&c.supportsAdContainerGeometry()?c.getScreenLocationInfo({},
b):c.getScreenLocationInfo(m.collect(),b):(e=m.collect(),t.isMobileAppEnvironment()?(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):F&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),v&&!s.isAvid()&&l.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);b||a.trigger("measurementChanged",e);B.stop();var n=r.round(B.getTime()/B.getCount());g.addItem({output:n},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(y){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return e.on("everySecond")?
"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":v?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=s.xDomainIframe,d=a&&b.browserIs(k.BROWSERS.WEBKIT),e=a&&b.browserIs(k.BROWSERS.MSEDGE),a=a&&w,d=!d&&!e&&!a;return t.isMobileAppEnvironment()?c.isMeasurable():d},requiresDelayedViewabilityEvent:function(){t.isMobileAppEnvironment()&&c.hasMeasurementStrategy()&&c.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}},vc={name:"viewabilityLoopLifecycle",
dependencies:["viewability","features","context","browser"],creator:function(a,c,b,d){var e,f=Rd(b),q=[new Sd,new Td(f)],m=function(){return g(q).findFirst(function(a,e){return e.applies(d,c,b)?e:void 0})},p=function(a){"sessionFinish"===a.type&&(n.getAggregator().trigger("addOutputItem",{output:s.getTagTime()},"osef"),n.getAggregator().trigger("adSessionComplete"))},u=function(a){z.addEvent(x,a,function(){n.getAggregator().trigger("adSessionComplete")},!1)},y=function(){var a=new $(k.DT_CODES.VIDEO_EVENTS);
n.getAggregator().trigger("sendDt",a.callType,a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};n.getAggregator().once("startViewabilityLoop",function(){var b,c=n.getAggregator().request("mobileApp").isMobileAppEnvironment();n.getAggregator().request("ids").impressionIsIdentifiable()&&(e=Oc(a.checkScreenLoc,f.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),s.isOmid()?n.getAggregator().request("omidVerificationClient").registerSessionObserver(p,
"IAS"):c?u("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):u("beforeunload"))});n.getAggregator().once("adSessionComplete",function(){!b.isVideo()||b.isAvid()||b.isOmid()||y();n.getAggregator().trigger("unload");e&&e.stop();n.getAggregator().trigger("endAdSession");n.getAggregator().trigger("stopAdTalk")})},settings:{tier:k.TIERS.VIEWABILITY}},Rd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Td=function(a){var c,b,
d,e,f,g=function(m){d&&!f&&1>m?(f=!0,r.setTimeout(function(){g(m)},1E3)):(e=1>m,!b&&e?(b=!0,c.updateFrequency(a.getOptimizedPollingFrequency(),!0)):b&&!e&&(b=!1,c.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){g(a.percentInView)};return{applies:function(a,b,c){a=b.on("viewabilityOptimization");d=c.usesZeroPivCustomMetric();return a},start:function(a){c=a;c.start(!0);n.getAggregator().on("IOPivChange",g);n.getAggregator().on("newScreenEvent",m)}}},Sd=function(){var a,c,b,d=!1,e=function(f){if(b&&
!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||c.stop(!0),a=!0):a&&(a=!1,c.start(!0)),a},f=function(){c.start(!0)};return{applies:function(a,c,d){b=d.usesZeroPivCustomMetric();var e=Z();return c.on("viewabilityOptimization")&&e.applies(a,c,d)&&d.isDeviceTypeGroupMobile()},start:function(a){c=a;c.start(!0);n.getAggregator().on("IOPivChange",e);n.getAggregator().on("nodesAdded",f)}}},ae=function(a,c,b,d,e,f){var q,m,p,u,y,v,K,w,A,F=t.getElementsWindow(c);t.getElementsDocument(c);
n.getAggregator().provide("iframeCalculatorHelper",Ud(F));var B=Vd(c,d),Q=k.AD_IDENTIFIER+"-"+l.asid,E=!1,G=C({}),D=s.isDeviceTypeGroupMobile(),I=s.usesGroupMCustomMetricMobilePassThru(),L,J=function(){if(!q)if(q=B.calcDims(c,d,p),l.autotagSizeSet&&1<l.adWidth&&1<l.adHeight&&(q.set("width",l.adWidth),q.set("height",l.adHeight)),b===k.DETECTION_METHODS.VIDEO&&s.embedded){var a=q,e=(new C(c)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){n.getAggregator().trigger("error",
k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else b===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},H=function(){var c,d=s.xDomainIframe&&E;c=D&&E&&p.isReady();c=d||c;d=B.getClippedDims&&(b===k.DETECTION_METHODS.VIDEO&&s.embedded||s.isCeltra());c?m=p.getPiv():g.isUndef(m)&&(c=!D&&(s.friendly||g.isDef(x.mozInnerScreenX))&&e.on("offscreen"),w=J(),K=new C(t.calcWinDims()),v=new C(c?t.calcMonDims():{}),A=d?B.getClippedDims():G,m=a.calcPercentInView(w,K,v,A));return m},O=function(){return a.calcInitialViewState(H())},
T=function(){return c===x?!1:J().isHidden()};(function(){var d=r.getWindow(),e=r.getDoc(),f=c===d,g=e.body,m=n.getAggregator(),l=new Z,q=m.request("browser"),v=m.request("features"),m=m.request("context"),w=!s.xDomainIframe,e=f&&g?e.body:c;L=s.friendlyIframe?d.frameElement:e;z.addEvent(e,"click",function(){n.getAggregator().trigger("adComponentClicked")});z.addEvent(e,"mouseover",function(){n.getAggregator().trigger("adComponentMousedOver")});l.applies(q,v,m)?(p=od(c,w),p.start(),E=!0,I&&b!==k.DETECTION_METHODS.AD_PLACEHOLDER&&
(d=new Wd(J().getRounded()),l=new Xd,l=new Yd(p.getObservedNode(),l),u=new Zd(d.getSlices(),l))):I&&(y=new $d(a))})();return{mark:function(){t.setAttributeOf(L,Q,"")},cleanup:function(){t.removeAttributeOf(L,Q)},isNode:function(a){return c===a},isHidden:T,isObstructed:function(){return!1},getDims:J,getPercentInView:H,getLocationState:O,getOnPageViewability:function(){return T()?k.OUT_OF_VIEW:O()},getDetectionMethod:function(){return b},getContainerDims:function(){return B.allowsOptimization?q:C(d)},
refresh:function(){A=w=K=v=m=q=void 0;if(f){var a,b;if(!s.isDomless()&&(b=c.parentNode)){for(;c!==x&&b&&b!==M&&!a;)a=b===d,b=b.parentNode;a||(d=c.parentNode)}}},getAdNode:function(){return c},getSliceStatus:function(){var a;u&&u.isReadyToMeasure()?a=u.getSliceStatus():s.friendly&&y&&g.isDef(w)&&(a=y.getSliceStatus(w,K,v,A));return a}}},be=function(a,c){var b=[],d,e=g([]),f=function(){return b[0]&&b[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},l=function(m,l,p,q){var u=f()||0===b.length;
m=ae(a,m,l,p,c,q);f()&&(p=b.shift(),e=g(b),p.cleanup(),d=void 0);b.push(m);e=g(b);u&&m.mark();u&&l!==k.DETECTION_METHODS.AD_PLACEHOLDER&&n.getAggregator().trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var g;g=e.getDims();g.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,g=g.area(),c+=g,f+=a/100*g)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},p=function(a){var b=n.getAggregator().request("adRenderStatus");return!a&&!b},u=function(a){var b;
b=m();b=b.hasMeasurement?r.round(b.totalInView/b.totalArea*100):k.PIV_NA;if(isNaN(b)||p(a))b=0;return b},y=function(b){var d=c.bootstrapOn("mobOrTab"),d=m().totalArea>=k.MRC_LARGE_AD_SIZE&&c.on("largeAd")&&!d&&!s.isVideo();return a.calcInitialViewState(u(b),d)},v=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},t=function(a){return function(){return b[0]&&b[0][a]()}};n.getAggregator().on("adComponentAdded",function(a){g(a).each(function(a,b){-1===v(b)&&l(b,k.DETECTION_METHODS.MUTATION)})});
n.getAggregator().on("adComponentRemoved",function(a){g(a).each(function(a,c){var d=v(c);-1<d&&b.splice(d,1)})});return{getDims:t("getDims"),isObstructed:t("isObstructed"),getDetectionMethod:t("getDetectionMethod"),getContainerDims:t("getContainerDims"),getViewState:y,getViewStateIgnoringRender:function(){return y(!0)},getPercentInView:u,getPercentInViewIgnoringRender:function(){return u(!0)},isHidden:t("isHidden"),isUsingPlaceholder:f,hasAd:function(){return!!b.length},refresh:function(){d=void 0;
e.each(function(a,b){b.refresh()})},addAdComponent:l,clearCollection:function(){e.each(function(a,b){b.cleanup()});b=[];e=g([]);d=void 0},getOutOfViewReasons:function(a){var c,e=[],f=b[0],g=k.OUT_OF_VIEW_REASONS;f&&(c=d||y(),p(a)?e.push(g.RENDER):c!==k.OUT_OF_VIEW&&c!==k.PARTIAL_VIEW_MINUS||e.push(g.GEOM),f.isHidden()&&e.push(g.HIDDEN),f.isObstructed()&&e.push(g.OBSTRUCTION));return e},getComponentCount:function(){return b.length},getComponents:function(){return b},getSliceStatus:t("getSliceStatus")}},
ce=function(a){var c=!1;if(!g.isUndef(x.MutationObserver)){var b=new x.MutationObserver(function(a){r.execAtEndOfThread(function(){c&&g(a).each(function(a,b){b.addedNodes.length&&n.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&n.getAggregator().trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){c=!0;r.setTimeout(function(){c=!1},40)};n.getAggregator().on("adComponentClicked",d);n.getAggregator().on("adComponentMousedOver",d);z.whenReady(function(){try{b.observe(M.body,
{attributes:!0,childList:!0,characterData:!0})}catch(c){a.add(k.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},je=function(a,c){var b=[de(),ee()],d=[Ra(),ja(),fe(),Ya(),ge(),he(),ie()],b=b.concat(d);return g(b).findFirst(function(b,d){return d.isApplicable(a,c)})},Ya=function(){var a,c,b,d=function(a){a?a&&b&&(r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),b=!1):b=!0};return{detectionMethod:function(){return c&&c.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},
find:function(){c=c||ga();var b=t.crossQuerySelector(ga().getCssSelector(),!0);a=b?b.parentNode:a;d(b);return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ke=function(a,c){var b,d=t.findChildWithLargestContent(a||l.contextNode.parentNode,c);1<t.getNodeArea(d)&&!d[k.IAS_DETECTOR]&&(b=d);return b},Ra=function(){var a=n.getAggregator().request("omidAdSessionContext");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.OMID,isApplicable:function(){return s.isOmidForWeb()&&
!s.isOmidNative()},find:function(){a.element||a.queuedOutputItems.push({code:"oea",value:!0});return a.element},getAdContainer:function(){return a.element&&a.element.parentNode},allowForAdContainerChange:!0}},he=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return x},isApplicable:function(){return s.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},le=function(){var a,c=r.getDoc().scripts,b=function(){a||(a=g(c).findFirst(function(a,
b){return H.contains(b.src,"servedby.flashtalking")}));return a},d=function(){var c,d=a||b(),g=/;(\d+);/;d&&d.src&&(c=d.src.match(g)[1]);return c};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,c){return c.on("bustediframe")&&a.embedded&&void 0!==b()},getCssSelector:function(){var a,b=d();try{a=g(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return t.crossQuerySelector(b,!0)})}catch(c){}return a}}},me=function(){return{isApplicable:function(a,c){var b;
try{b=t.getFrameId()}catch(d){}return c.on("yieldmo")&&b&&H.contains(b,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Za=function(){var a,c,b=r.getDoc(),d=function(){var c;a||(a=(c=(c=t.querySelector(b,"div[id*='ebDiv']"))&&c.id)&&c.split("ebDiv")[1]);return a},e=function(){var a;c||(c=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+
d()+"']",!0))&&a.id)&&"#"+a);return c};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),k=a.friendlyIframe&&r.getWindow().frameElement,k=k&&C(k).isOneByOne(),l=function(){var a=["bs.serving-sys.com/BurstingPipe/adServer","secure-ds.serving-sys.com/BurstingCachedScripts"],b=r.getDoc().scripts;return g(b).findFirst(function(b,c){return g(a).findFirst(function(a,b){return H.contains(c.src,b)})})}(),c=c.EBG&&c.EBG.ads&&!g(c.EBG.ads).isEmpty();
return b.on("sizmek")&&l&&c&&k&&d()&&e()},getCssSelector:e}},ga=function(){var a,c=n.getAggregator().request("features");a||(a=[Za(),me(),le()]);return g(a).findFirst(function(a,d){return d.isApplicable(s,c)})},ge=function(){var a,c=function(){r.execAtEndOfThread(function(){n.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,c){return c.on("celtra")&&a.isCeltra()},find:function(){var b,d=
La().find();d&&d.celtra&&d.celtra.loaded&&(b=d.celtra.viewabilityObservee,a=t.getElementsWindow(b).frameElement||b.parentNode,c());return b},getAdContainer:function(){return a},allowForAdContainerChange:!1}},La=function(){var a,c=function(){var b;(b=l.contextNode.parentNode)&&(H.contains(b.className,"celtra-ad-v3")||H.contains(b.className,"celtra-ad-v4"))?a=b:(b=b&&(t.querySelector(b,".celtra-ad-v3")||t.querySelector(b,".celtra-ad-v4")))&&(a=b);return a};return{find:c,isApplicable:function(){return void 0!==
c()}}},ja=function(){var a=n.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=t.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},ee=function(){var a,c;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return s.isSpecifiedAd()},
find:function(){var b=g.isFunction(l.contextNode.getAttribute)&&l.contextNode.getAttribute("data-ias-container");c=b&&"#"+b||l._cl_adpath;if(b=t.crossQuerySelector(c))a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},de=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return s.isCompoundAd()},find:function(){var c=[],b;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(d){if(b=
t.crossQuerySelector(d))a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b));c.push(b)});return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},ie=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:ke,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},fe=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:n.getAggregator().request("video").findAdNode,
isApplicable:s.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Vd=function(a,c){var b,d;b=[ne(),oe(),pe()];d=g(b).findFirst(function(b,d){return d.isApplicable(a,c)});b=qe();b.isApplicable(c)&&(b.setBaseStrategy(d),d=b);return d},pe=function(){return{calcDims:function(a,c){var b,d,e=new C(a);t.isClippable(a,c)&&(b=t.getClippedDimensions(a,c),d=e.getRounded(),e.set("height",b.height<d.height?b.height:d.height||1),e.set("width",b.width<d.width?b.width:
d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var c=(s.isSpecifiedAd()||s.isBustedIframe())&&t.nodeIsInWindow(a,r.getTop());a=!t.elementIsEmbedded(a);return c||a}}},oe=function(){var a=n.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(s.isSpecifiedAd()||s.isBustedIframe())&&t.elementIsEmbedded(a)}}},ne=function(){var a=n.getAggregator().request("iframeCalculatorHelper");
return{calcDims:function(c){var b=a.calcDims();c=(new C(c)).getRounded();b.set("height",c.height);b.set("width",c.width);return b},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,b){var d=(s.isSpecifiedAd()||s.isBustedIframe())&&s.embedded&&!t.nodeIsInWindow(b,r.getTop()),e=s.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},qe=function(){var a;return{calcDims:function(c,b,d){d=g.isDef(d)?d.getAdNodeDimensions():void 0;a&&g.isUndef(d)&&(d=a.calcDims(c,b));return d},isApplicable:function(a){a=
Z();var b=n.getAggregator(),d=b.request("browser"),e=b.request("features"),b=b.request("context");return b.isDeviceTypeGroupMobile()&&a.applies(d,e,b)},allowsOptimization:!1,setBaseStrategy:function(c){a=c}}},Ud=function(a){var c,b,d,e=n.getAggregator().request("features"),f=n.getAggregator().request("browser");a=a||r.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];
f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(s){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&l(b.parent,c)}return c},m=function(){var m,u={};try{var y,v,x,w,A,F,z=r.getMaxNumber(),E=r.getMaxNumber();s.friendly?(y=l(),x=y.left,w=y.top,z=y.width,E=y.height,v=t.browserWindowPosition(),A=v.scrX+x,F=v.scrY+w):e.on("rattie")&&f.browserIs(k.BROWSERS.IE)?(d=d||n.getAggregator().request("ieXDomainViewability"),
b=d.determineFramePosition(),A=b.scrX,F=b.scrY):g.isDef(a.mozInnerScreenX)&&(A=r.round(a.mozInnerScreenX),F=r.round(a.mozInnerScreenY));var u={scrX:A,scrY:F,iFrameClippingWidth:z,iFrameClippingHeight:E},C,G,D=c||t.getIeDimObj(a);c=D;g.isDef(a.innerWidth)?(C=a.innerWidth,G=a.innerHeight):D&&g.isDef(D.clientWidth)?(C=D.clientWidth,G=D.clientHeight,0===C&&0<D.offsetWidth&&(C=D.offsetWidth),0===G&&0<D.offsetHeight&&(G=D.offsetHeight)):a.frameElement&&g.isDef(a.frameElement.clientWidth)&&(C=a.frameElement.clientWidth,
G=a.frameElement.clientHeight);m=C;u.height=G;u.width=m}catch(I){n.getAggregator().trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return u};return{calcDims:function(){return new C(m())},getClippedDims:function(){var a=m();return new C({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Xb=function(){return{createInstance:function(a,c,b){return s.isDomless()?new re:new se(a,c,b)}}},se=function(a,c,b){var d,e,f=n.getAggregator().request("browser"),q=l&&l.contextNode&&
l.contextNode.parentNode?l.contextNode.parentNode:null,m=be(c,b),p=function(){var a,c,e;d=d||je(s,b);a=d.find();s.friendlyIframe&&s.isBlockingSizmekTag()&&x(a);!a&&d.usePlaceholder?(u(),s.isDeviceTypeGroupMobile()&&f.hasMutationObserver()&&r.getMutationObserver(y).observe(q,{childList:!0})):a&&(a=g(a).isArray()?a:[a],c=d.getAdContainer(),e=d.allowForAdContainerChange,g(a).each(function(a,b){m.addAdComponent(b,g.resolve(d.detectionMethod),c,e)}))},u=function(){var a;m.hasAd()||(a=t.getPlaceholderSpan(),
q.insertBefore(a,l.contextNode.nextSibling),m.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))},y=function(a,b){var c=!1;g(a).each(function(a,b){b.addedNodes&&0<b.addedNodes.length&&(c=!0)});c&&(n.getAggregator().trigger("nodesAdded"),b.disconnect())},v=function(a,c){var e=!1;g(a).each(function(a,b){1>=b.target.height*b.target.width&&(e=!0)});var f;e&&(f=Za(),f.isApplicable(s,b)&&(c.disconnect(),d=Ya(),m.clearCollection(),n.getAggregator().trigger("nodesAdded")))},x=function(a){var b;
if(!e&&f.hasMutationObserver()&&t.isWindow(a))try{e=r.getMutationObserver(v),b=a&&a.frameElement,e.observe(b,{attributes:!0,attributeFilter:["height","width"]})}catch(c){}};ce(a);return{find:function(){m.isUsingPlaceholder()||!m.hasAd()?p():m.refresh();return m},getDetectionMethod:function(){}}},re=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Fb=function(a){var c,b=[],d=a||x,e=function(){return"stub"===g().mode};a=function(){e()&&(c=d.setInterval(function(){if("stub"!==
g().mode){d.clearInterval(c);for(var a=0;a<b.length;a++)d.avid.addEventListener(b[a].type,b[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},g=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};s.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:g,addEventListener:function(a,c){e()?b.push({type:a,
functionToExecute:c}):d.avid.addEventListener(a,c)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Eb=function(a){var c=new te,b=new ue,d="undefined"!==typeof navigator?navigator.userAgent.toLowerCase():"";(function(){var e="",f=n.getAggregator().request("omidAdSessionContext"),g=s.isDomless()||f&&"app"===f.environment,f=f&&"web"===f.environment;try{var m;if(!(m=g)){var l;
if(!(l=s.isAvid())){var u;if(!(u=s.isAvidNative())){var r;if(r=!f){var v;if(v=a.bootstrapOn("mobOrTab")){var t;if(t=a.bootstrapOn("mobAppWebview")){var g="FBAN FBAV Twitter Instagram Flipboard Snapchat LinkedInApp Pinterest".split(" "),w,f=!1;for(w=0;w<g.length;w++)if(-1<d.indexOf(g[w].toLowerCase())){f=!0;break}t=!f}v=t}r=v}u=r}l=u}m=l}if(m&&(e=c.detect(),c.hasDetectedMobileApp())){if("s_serv"===e||"u_cars"===e)la[la.length-1].detectionRules.userAgent[0]="/";b.detect();n.getAggregator().trigger("addOutputItem",
{output:"1"},"mapp",{type:"impression"});n.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"})}}catch(x){n.getAggregator().trigger("error",k.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return c.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return b.isSafeToInjectMraid()}}},ve={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(s.isDomless())return!1;var c=r.getWindow().location.href,b=[c];try{b.push(top.location.href)}catch(d){}try{b.push(parent.location.href)}catch(e){}if(s.embedded){try{b.push(parent.document.referrer)}catch(f){}try{b.push(M.referrer)}catch(k){}}try{"jsi"!==
l.mode&&b.push(x.location.href)}catch(m){}try{b.push(l.jsref)}catch(p){}b.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!g(a).findFirst(function(a,d){var e=!1,f,m,k="mobfox"===d?b:[c];for(m=0;m<k.length;m++){f=k[m];var l="string"===typeof d?[d]:d;if(g(l).isArray()&&(l[0].substring(0,4),l))for(var p=0;p<l.length&&(e=-1<f.indexOf(l[p]),!1!==e);p++);if(e)break}return e})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return s.isDomless()?!1:!!g(a).findFirst(function(a,
b){var d;d=!1;var e=r.getWindow();g.isDef(e.navigator)&&g.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(b));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!g(a).findFirst(function(a,b){var d=!1;return d=g.isDef(H.stringToProp(b))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return s.isDomless()?!1:!!g(a).findFirst(function(a,b){return t.containsScriptTagWithSrc(function(a){var c=!1;return c=g.isDef(a)&&-1!==a.indexOf(b)})})}}},$a=
function(){var a=function(a,b){var d,e=ve[a];e.detect(b)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(c){return g(c).map(a).join("")}}},we=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},
{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",
detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"aers",detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads",
"app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},{STRINGIFIED_APPDET:"cars",safeToInjectMraid:!0,detectionRules:{url:[["carsales",".android"],["carsales",".ios"]]}}],te=function(){var a,c=function(a,c){var e,f=$a().process(c.detectionRules);f&&(e=f+"_"+c.STRINGIFIED_APPDET);return e};return{detect:function(){a=g(we).map(c);a=0<a.length?a[0]:"";""===a&&l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length&&(a="s_serv");return a},hasDetectedMobileApp:function(){return void 0!==
a&&""!==a}}},ue=function(){var a=[],c=[],b=function(b,c){var f,g=$a().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),f=c);return f};return{detect:function(){c=g(la).map(b);0<c.length&&n.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<c.length},isSafeToInjectMraid:function(){return 1===c.length&&g.isDef(c[0].safeToInjectMraid)&&c[0].safeToInjectMraid}}},la=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],
url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,
detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},
{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}},
{STRINGIFIED_SDK:"mrad",safeToInjectMraid:!0,detectionRules:{userAgent:["unmatchabledetectionstring"]}}],Wd=function(a){var c=[];(function(){if(10>a.height)c.push({geometry:new V(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var b=Math.floor(a.height),d=b%10,b=(b-d)/10,e,f=0;10>f;f++)e=e||0,e={geometry:new V(0,a.width,e,e+(f<d?b+1:b)),percentageInViewContribution:10,isInView:!1},c.push(e),e=e.geometry.value().bottomY})();return{getSlices:function(){return c}}},U=function(){var a=
k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,c=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,b=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,c=[100]);for(e=0;e<a;e++)b.push(!1);return d={numberOfSlices:a,defaultSliceArray:b,percentInViewSliceArray:c}}}},Zd=function(a,c){var b={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();g(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),g=Math.max(d.leftX,f.leftX),
m=Math.min(d.rightX,f.rightX),k=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new V(g,m,k,f))}});return c},e=function(a,b){var c=0,e=d(a,b),f;g(e).each(function(a,b){f=b.value();c+=f.area});return c},f=function(){var c=0;b.mbs=[];g(a).each(function(a,d){b.mbs.push(d.isInView);d.isInView&&(c+=d.percentageInViewContribution)});return c};c.addListener(function(b){g(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=f();b.mbrd=
1;a!==b.mbp&&b.mbivs.push([s.getTagTime(),a]);return b.mbp=a},removePixels:function(){void 0!==c&&c.stop()},getPixelStateForDebug:function(){b.mbm=1;b.mbpr=[];b.mbir=[];g(a).each(function(a,c){b.mbpr.push(k.NA);b.mbir.push(!1)});return b},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];g(a).each(function(a,c){b.push(c.isInView)});return b}}},$d=function(a){var c=U();return{getSliceStatus:function(b,d,e,f){var g,m=[];g=b.getRounded();b=g.height;var k=g.scrY,l=new C({scrX:g.scrX,
width:g.width}),n=c.getConfig(g).numberOfSlices;l.set("height",r.floor(b/n));for(var s=0;s<n;s++)l.set("scrY",r.ceil(k+b/n*s)),g=100===a.calcPercentInView(l,d,e,f),m.push(g);return m}}},V=function(a,c,b,d){var e=Math.ceil(a),f=Math.ceil(c),g=Math.ceil(b),m=Math.ceil(d),k=f-e,l=m-g,n=k*l,r=function(){return{leftX:e,rightX:f,topY:g,bottomY:m,width:k,height:l,area:n}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>
b.topY}}},Xd=function(){return{createInstance:function(a,c){return new IntersectionObserver(a,c)}}},Yd=function(a,c){var b,d=[],e=[],f=function(){g(d).each(function(a,b){b(e)})},k=function(){var a=[];g(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){b=c.createInstance(function(c){var d=c.pop(),g=d.boundingClientRect;c=g.width;var l=d.intersectionRatio,d=d.intersectionRect,
n=d.left-g.left,g=d.top-g.top,g=new V(n,n+d.width,g,g+d.height);e.push(g);g=k();e=[];for(d=0;g.length>d&&g.length!==d+1;d++)e.push(new V(0,c,g[d],g[d+1]));f();1===l&&(b.unobserve(a),b.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();b.observe(a);return{addListener:function(a){d.push(a)}}},ha=function(){var a=function(a){var b=!1;xe.forEach(function(c){a===c.PARTNER_NAME&&(b=!0)});return b},c=function(c,e){return c.omidNativeInfo&&c.omidNativeInfo.partnerName&&a(c.omidNativeInfo.partnerName)?
e&&b(e.onScreenContainerGeometry):e&&b(e.onScreenGeometry)},b=function(a){return a&&a.hasOwnProperty("x")&&a.hasOwnProperty("y")&&a.hasOwnProperty("width")&&a.hasOwnProperty("height")};return{detect:a,checkAdViewGeometryBasedOnWhitelist:c,checkGeometryObject:b,checkForViewAttachmentBasedOnAdSessionType:function(a,b){if(b&&b.reasons&&0>b.reasons.indexOf("notFound")&&a.adSessionType&&(-1<a.adSessionType.indexOf("native")||-1<a.adSessionType.indexOf("javascript")||-1<a.adSessionType.indexOf("html")&&
c(a,b)))return!0}}},xe=[{PARTNER_NAME:"IAB"},{PARTNER_NAME:"IAS"},{PARTNER_NAME:"com.integralads.omid.iassdk"}],ye=function(){return{listenForResult:function(){n.getAggregator().on("videoBlockResult",function(a){var c=n.getAggregator().request("adNode"),b=!1,d="blockAd"+l.videoId;"failed"===a.action&&(b=!0);if(c&&g.isDef(c.blockAd))c.blockAd(b);else if(c&&g.isDef(c[d]))c[d](b)})}}},ze=function(a,c){var b,d,e,f,k;e=n.getAggregator().request("videoTranslator").translate(a.messageType);f=function(a){a=
a.eventData||{};a=g({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=g(a).mapToObj(c));return b}(a);d={t:a.time-l.birthdate,tp:e,sl:c};g(d).mixin(f);g(d).mixin(k);return b=g({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===f.viewMode||f.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===f.viewMode},indicatesQuartile:function(){return-1!=="adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(e)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(e)},getVolume:function(a){return a.getVolumeFromContext(f)},
updateScreenLoc:function(a){d.sl=a;b.sl=a},trigger:function(){"adImpression"===e?n.getAggregator().persistentTrigger(e,f,k):n.getAggregator().trigger(e,f,k)},toString:function(){return"{"+g(d).toParams()+"}"}}).mixin(d)},Ae=function(){var a=[];return{registerEvent:function(c,b,d){c=new ze(c,b,d);a.push(c);return c},toString:function(){return"{"+g({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Be=function(){var a,c,b,d=function(d){b=g.isDef(d)?
0===d:b;c&&b&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&n.getAggregator().trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},f=function(){c=!0;d()},l=function(a){a=(new ab).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(b){n.getAggregator().on({adVideoStart:f,adImpression:f,volumeChanged:l,adVideoMidpoint:e});a=b.createViewabilityTracker("mpt",function(a){var b=n.getAggregator().request("isFullyInViewProvider");
return!c||b&&b.isFullyInView(a)})}}},Ce=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(c){var b=c.charAt(0).toLowerCase()+c.slice(1);c in a&&(b=a[c]);return b}}},ab=function(){return{getVolumeFromContext:function(a){var c,b=-1;g.isDef(a)&&(g.isDef(a.volume)?b=a.volume:g.isDef(a.adVolume)&&(b=a.adVolume));-1!==b&&(c=b);return c}}},Cb=function(a,c,b){var d="IASid"+a,e="getIasVidBridgeVersion"+a,f,q,m,p=[],u=k.OUT_OF_VIEW,t=!1,v=!1,
x=!1,w=!0,A=new Ae,F=Be(),B=new ye,D=new ab,E=new Ma,G=function(c){var d;t=!0;var e={};try{e=JSON.parse(unescape(c&&c.data?c.data:c))}catch(f){e={}}e.id==a&&(d=A.registerEvent(e,b.getCurrentLoc()),d.indicatesPlaying()?(v=!0,u=x?k.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,u=k.OUT_OF_VIEW):d.indicatesFullscreen()?(x=!0,u=v?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(x=!1,u=v?!1:k.OUT_OF_VIEW),c=parseFloat(d.getVolume(D)),0<c?w=!0:0===c&&(w=!1));p.push(d);m&&H();return d},C=function(b){var c,
f,k=Ca().wrapToGlobal(G),m=function(a){g.isStr(a)&&(n.getAggregator().provide("vc",function(){return a}),n.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{f=b[e]||b.getIasVidBridgeVersion,c=g.isFunction(f)&&"2"===f.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),t=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},I=function(){var b=function(a){return g(g(a).toArray()).findFirst(function(a,b){return g.isFunction(b[d])})};f||(g(["*[data-integralas-vid-"+
a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,c){var d=r.getDoc().querySelectorAll(c);return f=b(d)}),!f&&c.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{message:"node not found"},l));return f},L=function(){var a=I();a&&!t&&C(a);return a},J=function(a){a=D.getVolumeFromContext(a);w=g.isDef(a)?0<a:!1},H=function(){E.init();g(p).each(function(a,c){c&&(g.isUndef(c.sl)&&c.updateScreenLoc(b.getCurrentLoc()),c.trigger(),c.indicatesCompletion()&&n.getAggregator().trigger("adSessionComplete"),
c.indicatesQuartile()&&("adVideoComplete"!==c.tp&&n.getAggregator().trigger("sendDt",k.DT_CODES.VIDEO_EVENTS),n.getAggregator().trigger("videoQuartileEvent",c)))});p=[];m=!0};(function(){z.addEvent(r.getWindow(),"message",function(a){G(a)});n.getAggregator().on({volumeChanged:J});n.getAggregator().provide({videoEventsString:A,videoVersion:function(){var a,b=L();try{a=b.getVersion()}catch(c){a=-1,n.getAggregator().trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=
q||new Ce},adNode:L});L();B.listenForResult();F.isApplicable(s)&&F.start(b)})();return{findAdNode:L,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return t},triggerInitializationEvents:H,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=w;a.isVideoPlayingInFullscreen=!1;if(u){if(u===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:
u;a.isVideoPlaying=u===k.IN_VIEW}x&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},De=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},jb=function(){var a,c,b={},d=0,e=function(b){if(b||a)d+=5,c.onTick(d,function(){a?e():n.getAggregator().trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},f=function(){c=new Ja;d=0;e(!0);c.start()},l=function(d,e,k,l){d=b[d];l?(g.isDef(d[e])||(d[e]=[]),d[e].push(k)):d[e]=k;c&&c.isActive()||
f();a=!0},m=function(b,d,e){n.getAggregator().trigger("addOutputItem",{output:d},b,e);c&&c.isActive()||f();a=!0},p=function(c){g(b).each(function(d,e){var f=b[d],k={type:c,oneTime:!0,minDt:!0,asION:!0};g(f).isEmpty()||(n.getAggregator().trigger("addOutputItem",{output:f},d,k),b[d]={});a=!1})};return{start:function(){n.getAggregator().on("preSendDt",function(a){p(a);c&&c.kill()});n.getAggregator().on("addThrottledProp",l);n.getAggregator().on("addThrottledOutputItem",m)},addFieldTypes:function(a){g(a).each(function(a,
c){b[c]={}})}}},pb=function(){var a={},c=function(b){a[b]||(a[b]=new Ia(1,l.birthdate));return a[b]},b=function(a){c(a).start()},d=function(a){var b=c(a);b.stop();n.getAggregator().trigger("addThrottledProp","im",a,b.getTime())};return{start:function(){n.getAggregator().on({markTime:b,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Ee=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Vb=function(a){var c=
{},b=a instanceof Array&&0<a.length;b&&(g(a).each(function(a,b){c[b.getType()]=b}),n.getAggregator().on("perfCheckpoint",function(a){var b=c[a.type];if(b)try{b.addPoint(a),b.isFinished()&&n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pci",b.toString())}catch(f){}}));n.getAggregator().provide("perfActive",function(){return b});return{isActive:b}},aa=function(a,c){var b=0,d=[],e=function(){d.sort(function(a,b){return a.timestamp-b.timestamp})},f=function(){var a,c={};e();g(d).each(function(d,
e){a&&(c[e.code]=e.timestamp-a);d===b&&(a=e.timestamp)});return c};return{addPoint:function(a){d.push(a)},toString:function(){return g(f()).toION()},getType:function(){return a},setBaseOrdinal:function(a){b=a},isFinished:function(){return d.length===c}}},Wb=function(){function a(){}a.build=function(){var a=[];a.push(new aa(k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var b;b=n.getAggregator().request("vc");var d={jv3:bb,av3:bb,jvw:Ee,avw:De};(b=b?d[b]:void 0)&&
a.push(b());return a};return a}(),bb=function(){return new aa(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){n.getAggregator().trigger("measureTime",S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){z.addEvent(x,"load",function(){n.getAggregator().trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new Ja;a.onTick({4:function(){n.getAggregator().trigger("markTime",
S.IDS.IN_BROWSER_DELAY)},5:function(){n.getAggregator().trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}},N={isFrameworkAvailable:function(a,c){var b,d,e=r.getTop(),f=r.getWindow();try{b=e[a]}catch(g){for(;!d;){try{f.frames[c]&&(d=f.frames[c].parent)}catch(k){}if(f===e)break;f=f.parent}}return b||d},getMessageHandler:function(a,c){var b=N.getCallId(),d=function(e){try{e&&e.data&&e.data[a]&&e.data[a].callId===b&&e.data[a].returnValue&&(c(e.data[a].returnValue),z.removeEvent(r.getWindow(),
"message",d))}catch(f){n.getAggregator().trigger("error",k.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,c){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,a,c)}},kc={name:"CCPAConsentDetector",dependencies:[],creator:function(){function a(a){a&&N.send(c,g(a).toION())}var c="ccd";(function(){var b=N.isFrameworkAvailable("__uspapi","__uspapiLocator");N.send("cca",!!b);if(b){var c,e;g.isFunction(b)?b("getUSPData",1,a):(c={__uspapiCall:{command:"getUSPData",
version:1,callId:N.getCallId()}},e=N.getMessageHandler("__uspapiReturn",a),z.addEvent(r.getWindow(),"message",e),b.postMessage(c,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},jc={name:"GDPRConsentDetector",dependencies:[],creator:function(){function a(a){var e=g.isDef(a)&&g.isDef(a.vendorConsents)&&g.isDef(a.vendorConsents[c])?a.vendorConsents[c]:void 0,e={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(e),glbl:g.stringifyTriState(a.hasGlobalScope),
mtdt:encodeURIComponent(a.metadata)},f=a&&a.tcString;n.getAggregator().provide("tcString",function(){return f});N.send(b,g(e).toION())}var c=278,b="gcd";(function(){var b=N.isFrameworkAvailable("__cmp","__cmpLocator");N.send("gca",!!b);if(b){var e,f;g.isFunction(b)?b("getVendorConsents",[c],a):(e={__cmpCall:{command:"getVendorConsents",parameter:[c],callId:N.getCallId()}},f=N.getMessageHandler("__cmpReturn",a),z.addEvent(r.getWindow(),"message",f),b.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,
applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},lc={name:"GDPRV2ConsentDetector",dependencies:[],creator:function(){function a(a){var e=g.isDef(a)&&g.isDef(a.vendor)&&g.isDef(a.vendor.consents)&&g.isDef(a.vendor.consents[c])?a.vendor.consents[c]:void 0;a={appl:g.stringifyTriState(a.gdprApplies),cnst:g.stringifyTriState(e)};N.send(b,g(a).toION())}var c=278,b="gcd2";(function(){var b=N.isFrameworkAvailable("__tcfapi","__tcfapiLocator");N.send("gca2",!!b);if(b){var e,f;g.isFunction(b)?
b("getTCData",2,a):(e={__tcfapiCall:{command:"getTCData",parameter:[c],callId:N.getCallId(),version:2}},f=N.getMessageHandler("__tcfapiReturn",a),z.addEvent(r.getWindow(),"message",f),b.postMessage(e,"*"))}})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,c,b){return c.hasPostMessage()&&!b.isDomless()}}},rc={name:"postMessageDetector",dependencies:[],creator:function(){var a=!1,c="pmdetector"+l.asid,b=function(b){(b&&b.data)===c&&(a=!0)};(function(){var d=r.getWindow();z.addEvent(d,"message",
b);d.postMessage(c,"*");r.execAtEndOfThread(function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"pom",g.stringifyTriState(a));z.removeEvent(d,"message",b)})})()},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,c,b){return a.on("pmdetect")&&c.hasPostMessage()}}},sc={name:"safeFrameDetector",dependencies:[],creator:function(){n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"sf",g.stringifyTriState(s.isSafeFrame()))},settings:{tier:k.TIERS.ENVIRONMENT,applies:function(a,
c,b){return a.on("sfdetect")}}},ib=function(a,c,b,d,e,f,q){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a},p=function(a){return"&"===a.slice(-1)?"":"&"};return{send:function(r){try{var t,v=d.baseUrl,x,w,A=f.getDocumentMode();"number"===typeof A?(w=2E3,8===A?w=4E3:8<A&&(w=8E3)):w=m(l.sp_imp_maxLength,2E3);x=w;if(s.integratedBlockingApplies(v)){w=v;var z=n.getAggregator().request("mobileApp"),B=z&&z.isMobileAppEnvironment&&z.isMobileAppEnvironment(),D=l.contextNode.getAttribute("data-ias-container"),
E=l.contextNode.getAttribute("data-ias-callback"),z=w+"adContainerId="+D+"&cbFunctionName="+E,z=B?z.replace("monitoring","blocking"):z.replace("skeleton.js",l.integration+".js"),C=l.protocol+":"+l.staticServer+l.integration+"a.js",H=l.protocol+":"+l.staticServer+l.integration+".js",v=z+"&true_pb="+encodeURIComponent(l.passback)+(B?"&redirectUrl="+encodeURIComponent(H):"")+(B?"&passback=":"&adsafe_pb=")+encodeURIComponent(C)+"&"}var B=v=v.replace(k.UNIQUE_ID_TOKEN,l.asid),I=v.length,L,J,M=m(l.sp_imp_jsInfo_minLength,
0),C="";try{L=x-I-M,0<L&&(J=Fe(r,L,14,c.on("partialUrls")),C+=J.join("&"))}catch(N){a.add(k.ERROR_CODES.IMPRESSION_URLS)}v=B+C;r=v+=p(v);var P,I="";try{P=x-v.length,I+=Ge(P,"adsafe_jsinfo=",a,c,b,e,f,q)}catch(S){a.add(k.ERROR_CODES.JSINFO),I+="adsafe_jsinfo=e:"+a.toString()}v=r+I;d.macroUrl&&(v+=p(v),v+=d.macroUrl);l.staticFwjsMacros&&(v+=p(v),v+=l.staticFwjsMacros);if(s.isAMZN()&&-1===v.indexOf("gdpr_consent")){var R=n.getAggregator().request("tcString");g.isDef(R)&&(v+=p(v),v+="gdpr_consent="+R)}t=
v;l.impUrl=t;d.sendImpression(t);n.getAggregator().trigger("impressionsent")}catch(W){__IntegralASDiagnosticCall("impsend",W,l)}}}},Na=function(){try{var a=l.perf,c,b,d,e,f,q;a.markEnd("ec");c=a.getEnd("ec");b=x.performance&&"function"===typeof x.performance.getEntriesByName&&x.performance.getEntriesByName(l.impUrl)[0];var m=a.getStart("bd"),p=a.getStart(sa);d=l.jsDoSplit?Math.round(c-m):Math.round(c-p);e=Math.round(b&&b.duration);f=Math.round(c-(b&&b.responseEnd));g.isNumeric(d)&&g.isNumeric(e)&&
g.isNumeric(f)&&(q={ttecl:d,ecd:e,tsecr:f},n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.IM,"imprf",g(q).toION()))}catch(r){n.getAggregator().trigger("error",k.ERROR_CODES.IMPRESSION_PERFORMANCE)}},Ge=function(a,c,b,d,e,f,q,m){return function(b){var d=g.encodeInvalidUrlChars(b.primary.join(","),l.encodeInvalidUrlChars),f=c,k=0,m=function(a){if(a)return","+a};f.length+d.length+5<=a?(f+=m(d),e.impressionIsIdentifiable(!0),g(b.secondary).each(function(b,c){var d=g.encodeInvalidUrlChars(c,l.encodeInvalidUrlChars);
f.length+d.length+5<=a?f+=m(d):k+=1})):k+=b.primary.length;return f+=",ov:"+k}(function(){var a,c;c=a={viewState:k.NA};s.isDomless()?c=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(c=(c=m.checkScreenLoc(!0))?c:a):g.isDef(r.getDoc().body)&&(c=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=c;var t=a.viewState,v=n.getAggregator().request("mPage");c=e.getAvidIds();t=["id:"+l.asid,"c:"+e.getCacheBustId(),"sl:"+t,"em:"+s.embedded,"fr:"+s.friendly,
"thd:"+g.stringifyTriState(v.supportsVisAPI())];d.on("avidPropertiesInImpression")&&g.isDef(c)&&(t.push("abi:"+c.bundleIdentifier),t.push("apn:"+c.partner),t.push("apv:"+c.partnerVersion));a=He(a,b,d,e,f,q,m);n.getAggregator().trigger("eligiblerender");return{primary:t,secondary:a}}())},He=function(a,c,b,d,e,f,n){var m=[];m.push("mn:"+l.mn);l.iasProxyPartnerDomain&&m.push("ipp:"+encodeURIComponent(l.iasProxyPartnerDomain));m.push("pt:"+function(){var b=n.stringifyPingTimes();a.viewState!==k.NA&&(b+=
a.details);return b}());m.push(g(f.params()).toParams());b.on("mrcAudit")&&!s.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||g.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&m.push(a+":"+b.output())});c.toString()&&m.push("e:"+c.toString());m.push(b.output());m.push("tt:"+l.mode);m.push("et:"+(r.now()-l.birthdate));l.perf.mark("si");b.on("swapids")?m.push("oid:"+l.oid):m.push("uid:"+d.unq);m.push("v:19.8.250");m.push("sp:"+
(l.isSplitMode?1:0));m.push("st:"+(l.staticMode?1:0));m.push("fwm:"+("true"===l.fwMonitoring?1:0));b.on("resolution")&&(m.push("wr:"+g(t.windowSize()).toArray().join(".")),m.push("sr:"+g(t.screenSize()).toArray().join(".")));c=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==c&&m.push("x_xpc:"+c);return m},Fe=function(a,c,b,d){var e,f=[],k=function(a){return-1!==
a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=g(a).map(function(a,b){if(k(b))return b}),a=g(a).map(function(a,b){if(!k(b))return b}),g(e.concat(a)).each(function(a,e){var g;g=e.val;var k=e.key,l;l=24+f.join("&").length+k.length+b;l=c-l;d&&l<g.length&&0<l&&(g=g.substr(0,l));if(g.length||""===e.val||""===e.type)g="adsafe_url="+g+"&adsafe_type="+k,k=f.join("&").length,g.length+k<=c&&f.push(g)}));return f},gb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||
!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Ie(a.navigator.plugins);var c=a.hash(),b=c.join(".");n.getAggregator().trigger("addOutputItem",{output:b},"pl",{type:k.IMPRESSION_EVENT});c.length&&(a=a.decode(c),a=a.join("."),n.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Le=function(a,c){return{start:function(){try{var b=Je(),d=b.getMethodName(a),e=new R(c.getEnabledScriptUrl(a)),f=Ke,g=r.getDoc();(new f(g.body||g.head||g.documentElement,e)).getWindow()[d]=
b.getMethod(c)}catch(l){n.getAggregator().trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},Je=function(){var a=function(a,b,d){a===l.asid&&(d.unshift(b),n.getAggregator().trigger.apply(null,d))};return{getMethod:function(c){return function(b){var d={asid:l.asid,constant:k,features:c,context:s,dtBaseURL:l.dtBaseURL,spg:cb};"function"===typeof b&&b(a,d)}},getMethodName:function(a){return"register_"+a}}},nb=function(){return{start:function(a,c){g(a).each(function(a,d){c.getEnabledScriptUrl(d)&&Le(d,
c).start()})}}},Ie=function(a){return{hash:function(){for(var c=0,b=a.length,d=[],e;c<b;c++)e=a[c].filename.replace(/\.plugin$/,""),e=H.hashCode(e),e=g.toBase(e,62).slice(-4),d.push(e);return d},decode:function(c){var b,d;b=r.floor(r.random()*c.length);d=encodeURIComponent(a[b].filename.replace(/\.plugin$/,""));return[c[b],d]}}},Ke=function(a,c){var b,d=/MSIE [1-9][^0-9]/g;(function(c){var f;b=t.createHiddenIframe();b.setAttribute("src","about:blank");b.setAttribute("class","_ntnrjf7826-hj");(a||
l.contextNode.parentNode).appendChild(b);f=b.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var g,k;g=(new Date).getTime();k=Math.floor(1E5*Math.random());c=c+"?t="+g+"&r="+k}c=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+c+"'\">"].join("");f.open().write(c);f.close()})(c);return{getWindow:function(){return b.contentWindow}}},cb=function(a){var c=
new Ha;(function(){c.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(b,d){c.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(n.getAggregator().trigger("addThrottledProp",k.DT_SLOT.FF,"spg",d.scaInfoOriginatorASID),g(d.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){n.getAggregator().on("addToSpg",function(b,c){a.addToCache(c,b);a.isFull()&&(a.sendToOtherTags(),
r.setTimeout(a.sendToOtherTags,1300),r.setTimeout(a.sendToOtherTags,3200))})})()},xc={name:"spg",dependencies:["spgCache"],creator:cb,settings:{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,c,b){return a.on("spg")}}},wc={name:"spgCache",dependencies:[],creator:function(){var a="asp ch fsc mvn no sd".split(" "),c={},b=!1,d=function(){return e(c)},e=function(b){return g(b).keys().sort().toString()===a.toString()},f=function(){b||(b=!0,g(c).each(function(a,b){n.getAggregator().trigger("addOutputItem",
b,a,{type:k.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),n.getAggregator().trigger("sendMinDt",k.DT_CODES.SCA))};return{allExpectedKeysPresent:e,isDtCallAlreadySent:function(){return b},addToCache:function(a,b){b&&b.output&&!d()&&(c[a]=b);d()&&f()},isFull:d,sendToOtherTags:function(){(new ea).send({scaInfoOriginatorASID:l.asid,cache:c})}}},settings:{}};try{ic()}catch(Me){__IntegralASDiagnosticCall("main",Me,l)}};
try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;try{top.__IntegralASAdPush=function(x){(x||top.isSingleIASInstance&&top.iasAdSlots).forEach(function(x){__IntegralASConfig._cl_adpath=x.adSelector;__IntegralASConfig.iasParameters=x.iasParameters;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})},top.isSingleIASInstance&&top.iasAdSlots?top.__IntegralASAdPush():__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)}catch(x){__IntegralASConfig.initialize(__IntegralASConfig,
l,l.document)}})()}catch(err$$11){__IntegralASDiagnosticCall("initialize",err$$11,__IntegralASConfig)};
