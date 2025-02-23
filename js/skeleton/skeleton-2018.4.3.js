var __IntegralASDiagnosticCall = (function(code, err, config) {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			var contextNode, img;
			try {
				if (!alreadySent[code]) {
					alreadySent[code] = true;
					if (config) {
						// cannot stringify DOM node due to parent-child relationship
						contextNode = config.contextNode;
						config.contextNode = '';
					}

					var url = '//pixel.adsafeprotected.com/jsdiagnostic' +
						'?code:' + code +
						'&err:' + encodeURIComponent(err.message) +
						'&config:' + encodeURIComponent(JSON.stringify(config));

					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					}
					else {
						img = new Image();
						img.src = url;
					}
					//restore after stringification so js can continue
					if (config) {
						config.contextNode = contextNode;
					}
				}
			} catch(err) {}
		};
	} catch(err) {
		return function(){};
	}
})();

try {
	var __IntegralASConfig = {
		jsDoSplit : false,
		cocaPuffsPath : "",
		debug : "false",
		killPhrases : "",
		jsDiag:'true',
		version:'17.4.82',
		mtCell: 10,
		mtSample: 5,
		trackMouse : "true",
		exchList:{'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain:'cdn.adsafeprotected.com',
		sp_cdnScripts:{xsca: "static.adsafeprotected.com/xsca.17.4.47.js", sca: "static.adsafeprotected.com/sca.17.4.72.js", main: "static.adsafeprotected.com/main.17.4.82.js"},
		protocol:'https',
		jsref : "",
		asid : "14e1a3dc-3760-11e8-8061-f0795936ae78",
		allowViewability : "true",
		jsFeatures : "cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:0,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,useAvidGeometricMeasurement,mrcAudit:1",
		adsafeDomain : "adsafeprotected.com:80",
		minimizeCalls : "false",
		adWidth : "300",
		adHeight : "250",
		forceAppend : "false",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15 : __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC : __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable : __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult : __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull : __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious : __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5 : __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery : "",
		mode : "rjss",
		requrl : "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=33642",
		adsafeSrc : "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/33642\/3584127\/skeleton.js",
		tpiLookupURL:"",
		getTpl: "false",
		use100v: true,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl : "https:\/\/pixel.adsafeprotected.com\/rjss\/st\/33642\/3584127\/skeleton.js",
		accountForSadImps:'',
		sendCookie:'true',
		cookieBaseURL:'sc.iasds01.com\/dtc?advEntityId=33642',
		fwMonitoring:'true',
		doNothing: false,
		mn: "app50",
		mobOrTab: false,
		mobFwUrl : "https://mobile.adsafeprotected.com/internal/monitoring/app/initial/33642/3584127/",
		anId : '',
		advEntityId : '33642',
		pubEntityId : '3584127',
		videoId : '',
		videoChannel : '',
		customViewability: [],
		serverSideAppDetection: []
	};try {

	//copy/pasted the contents of the thirdpart OmidVerificationClient.js file here, remove and replace when a new version is received

	;(function(omidGlobal, factory, exports) {
		// CommonJS support
		if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
			factory(omidGlobal, exports);

			// If neither AMD nor CommonJS are used, export to a versioned name in the
			// global context.
		} else {
			var exports = {};
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
					if (!Object.getOwnPropertyDescriptor(omidGlobal, key)) {
						Object.defineProperty(omidGlobal, key, {
							get: function () {
								return deepFreeze({'1.0.2-dev': exports[key]});
							},
						});
					}
				}
			}
		}
	}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
		'use strict';var $jscomp = $jscomp || {};
		$jscomp.scope = {};
		$jscomp.inherits = function(a, b) {
			function c() {
			}
			c.prototype = b.prototype;
			a.superClass_ = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			for (var d in b) {
				if ("prototype" != d) {
					if (Object.defineProperties) {
						var e = Object.getOwnPropertyDescriptor(b, d);
						e && Object.defineProperty(a, d, e);
					} else {
						a[d] = b[d];
					}
				}
			}
		};
		$jscomp.ASSUME_ES5 = !1;
		$jscomp.ASSUME_NO_NATIVE_MAP = !1;
		$jscomp.ASSUME_NO_NATIVE_SET = !1;
		$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
			a != Array.prototype && a != Object.prototype && (a[b] = c.value);
		};
		$jscomp.getGlobal = function(a) {
			return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
		};
		$jscomp.global = $jscomp.getGlobal(this);
		$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
		$jscomp.initSymbol = function() {
			$jscomp.initSymbol = function() {
			};
			$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
		};
		$jscomp.symbolCounter_ = 0;
		$jscomp.Symbol = function(a) {
			return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++;
		};
		$jscomp.initSymbolIterator = function() {
			$jscomp.initSymbol();
			var a = $jscomp.global.Symbol.iterator;
			a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
			"function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
				return $jscomp.arrayIterator(this);
			}});
			$jscomp.initSymbolIterator = function() {
			};
		};
		$jscomp.arrayIterator = function(a) {
			var b = 0;
			return $jscomp.iteratorPrototype(function() {
				return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
			});
		};
		$jscomp.iteratorPrototype = function(a) {
			$jscomp.initSymbolIterator();
			a = {next:a};
			a[$jscomp.global.Symbol.iterator] = function() {
				return this;
			};
			return a;
		};
		$jscomp.makeIterator = function(a) {
			$jscomp.initSymbolIterator();
			var b = a[Symbol.iterator];
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
		var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
			this.guid = a;
			this.method = b;
			this.version = c;
			this.args = d;
		};
		module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
			return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
				"string" === typeof a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
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
		};
		module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
		};
		module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
			if (this.onMessage) {
				this.onMessage(a, b);
			}
		};
		module$exports$omid$common$Communication.prototype.generateGuid = function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		};
		module$exports$omid$common$Communication.prototype.serialize = function(a) {
			return JSON.stringify(a);
		};
		module$exports$omid$common$Communication.prototype.deserialize = function(a) {
			return JSON.parse(a);
		};
		var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
			AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{MOBILE:"app"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid",
				VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", Y:"y", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions"}};
		var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" ' + ('id="' + module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '"') + (' name="' +
				module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '">') + "</iframe>")));
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
		var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null].concat(["Could not complete the test successfully - "], $jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
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
		var module$exports$omid$common$PostMessageCommunication = function(a, b) {
			b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
			module$exports$omid$common$Communication.call(this, b);
			var c = this;
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
		var module$exports$omid$common$Rectangle = function(a, b, c, d) {
			this.x = a;
			this.y = b;
			this.width = c;
			this.height = d;
		};
		var module$exports$omid$common$serviceCommunication = {};
		function module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b) {
			return b.reduce(function(a, b) {
				return a && a[b];
			}, a);
		}
		module$exports$omid$common$serviceCommunication.startServiceCommunication = function(a, b, c) {
			c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
			return (b = module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b)) ? new module$exports$omid$common$DirectCommunication(b) : a.top && c(a.top) ? new module$exports$omid$common$PostMessageCommunication(a, a.top) : null;
		};
		var module$exports$omid$common$VastProperties = function(a, b, c, d) {
			this.isSkippable = a;
			this.skipOffset = b;
			this.isAutoPlay = c;
			this.position = d;
		};
		var module$exports$omid$common$version = {Version:"1.0.1-dev"};
		var module$contents$omid$verificationClient$VerificationClient_MESSAGE_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback, module$exports$omid$verificationClient$VerificationClient = function(a) {
			if (this.communication = a = void 0 === a ? (0,module$exports$omid$common$serviceCommunication.startServiceCommunication)(module$exports$omid$common$OmidGlobalProvider.omidGlobal, ["omid", "v1_VerificationServiceCommunication"]) : a) {
				this.communication.onMessage = this.handleMessage_.bind(this);
			}
			this.remoteIntervals_ = this.remoteTimeouts_ = 0;
			this.callbackMap_ = {};
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
			return !!this.communication;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			this.sendMessage_("addSessionListener", a, b);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
			this.sendMessage_("addEventListener", b, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
			this.sendMessage_("sendUrl", function(a) {
				a && b ? b() : !a && c && c();
			}, a);
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
			var c = this.remoteTimeouts_++;
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
			var c = this.remoteIntervals_++;
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
				var d = a ? JSON.parse(a) : [];
				this.callbackMap_[c].apply(this, d);
			}
			"error" === b && window.console && module$exports$omid$common$logger.error(a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d) {
				c[d - 1] = arguments[d];
			}
			this.sendMessage_.apply(this, [].concat([a, null], $jscomp.arrayFromIterable(c)));
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
			for (var d = [], e = 2; e < arguments.length; ++e) {
				d[e - 2] = arguments[e];
			}
			this.isSupported() && (e = this.communication.generateGuid(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_MESSAGE_VERSION, JSON.stringify(d)), this.communication.sendMessage(d));
		};
		(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

	}, typeof exports === 'undefined' ? undefined : exports));

} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}

	__IASScope = typeof window !== "undefined" ? window : this;
	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.0.2-dev'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	if (__IntegralASConfig.jsFeatures.indexOf('asidJsDiagnostic') !== -1) {
		var fakeErr = { message: __IntegralASConfig.asid };
		__IntegralASDiagnosticCall('asid', fakeErr);
	}

	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.contextNode = (function() {
		if (__IASScope.isDomless) {
			return;
		}
		if (__IntegralASConfig.useFIF) {
			return __IASScope.frameElement; // Early exit if using FIF
		}
		var tempScript,
			embedded = window != top,
			scripts = document.getElementsByTagName('script'),
			result = scripts[scripts.length - 1],
			scriptIndex = scripts.length,
			useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
			scriptUrl = __IntegralASConfig.scriptUrl;

		try {
			while (--scriptIndex >= 0) {
				tempScript = scripts[scriptIndex];
				if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
					result = tempScript;
					tempScript.setAttribute('data-ias-script-tag', 'found');
					break;
				}
			}
			if (scriptIndex === 0 && useDocWrite && !embedded) {
				document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
				result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
			}
		} catch(e) { }
	
		return result;
	}());

} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}

__IntegralASConfig.initialize=function(r,A,J){var l,Ga=function(){P.startSystem();l=P.getAggregator();l.provide({omidAdSessionContext:{}});var g=__IASOmidVerificationClient;l.provide({omidVerificationClient:g});g=[{environment:new fa(g),adSessionReadyStrategy:new Ea(ga,g)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){ga()}}}];(new Fa(g)).resolve().adSessionReadyStrategy.start()},ga=function(){l=P.getAggregator();var g;l.provide("mobileApp",function(){return g=
g||new Ha(b)});var a;l.provide("avidJsClient",function(){return a=a||new Ia(s.getWindow())});l.provide("context",t);var b=l.provide("features",Ja()),c=l.provide("browser",(new Ka).createInstance()),d=La(),e=l.provide("ids",Ma()),k=new Na(l),p=ha(),p=(new Oa).createInstance(d,p),m=(new Pa(new Qa(e),b,c)).create();b.on("swapids")&&(r.oid=r.asid,r.asid=e.unq);var q,n=(new Ra).createInstance(b),v=Sa(),F=Ta(l),z=l.provide("mPage",(new Ua).createInstance()),w=Va(),B=l.provide("pageUrls",(new Wa).createInstance(w,
s)),C=Xa();l.provide("ieXDomainViewability",Ya(c));var y=Za(c),O=l.provide("video",!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:$a(r.videoId,b,C));ab(bb.build());var D=(new cb).createInstance(d,y,b),G=(new db).createInstance(D,d,z,t),H=l.provide("jobFactory",eb(F)),v=fb(D,d,b,e,k,c,C,v),D=gb(d,b,l,F),D=hb(D,b,m.isImmediate()),z=l.provide("viewability",ib(new I,m,c,v,d,b,y,l,e,k,H,z,G,C,O));ia.startViewabilityMeasurementStrategies(b,z,F,H);var u=ja(),M;v.setViewabilityMod(z);if(!ia.killRequest(d)){if(n.isApplicable(t))try{n.start(),
k.addItem(n.getFrameMap(),"fm"),b.on("fm2")&&k.addItem(n.getFrameMapIncludingPeerCase(),"fm2"),b.on("idMap")&&(q=n.getIdMap())&&k.addItem(q,"idMap")}catch(Ud){d.add(h.ERROR_CODES.ADTALK_GENERAL)}w.isApplicable(c,b,t)&&w.start();var K;try{K=B.detectTopURL();b.on("exch")&&(new jb).createInstance(d,k).parse(K);var S=kb();S.isApplicable(b)&&S.start(b);t.usesGroupMCustomMetric()&&lb();var W=mb();W.isApplicable(b)&&(W.start(),l.trigger("sendCookie"))}catch(x){d.add(h.ERROR_CODES.IMPRESSION_LEADUP)}try{nb(d,
b,e,D,k,c,z).send(K),f.isFunction(O.triggerInitializationEvents)&&O.triggerInitializationEvents()}catch(ob){__IntegralASDiagnosticCall("impsend",ob,r)}try{var A=pb();A.start();A.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FRAUDEXP]);var E=qb(c,e,z);E.isApplicable(b)&&E.start();b.bootstrapOn("getTpl")&&b.on("usetpl")&&rb(p,v,d,e,k).init();r.tpiLookupURL&&sb(p,v).init(r.tpiLookupURL);tb();"true"!==r.minimizeCalls&&(M=(new Date).getTime(),s.execAtEndOfThread(function(){s.execAtEndOfThread(function(){try{var a=
{output:(new Date).getTime()-M};k.addItem(a,"sinceFw",{type:h.DT_CODES.ADTALK});f.isDef(u.loopStarted())&&k.addItem({output:u.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK});n.isApplicable(t)&&n.sendAdTalkCall()}catch(b){d.add(h.ERROR_CODES.ADTALK_DELAY)}})}));m&&m.start&&m.start();if(!t.isDomless()){var J=ub();J.isApplicable(b,c)&&J.start();var L=vb();L.isApplicable(b,c)&&L.start();var N=wb();N.isApplicable(b)&&N.start();var Q=xb();Q.isApplicable(b,c)&&Q.start();yb().start(["sca","xsca"],b);
w.isStarted()&&w.sendOriginList()}P.runAll();var R=zb();R.isApplicable(b)&&(R.start(),T.recordBlockingTime(),T.setupOnLoadTracking(),T.setupBrowserDelayTracking())}catch(U){d.add(h.ERROR_CODES.POST_IMPRESSION)}}},ia=function(){function g(a){var b=new Ab(a,t),c=new Bb,d=new Cb(a,t),e=Db(a,t),k=(new Eb(r,t,a)).resolve(),p=[b],m=[];e.applies()&&p.push(e);d.applies()&&p.push(d);c.applies(a,t)&&p.push(c);f(k).each(function(a,b){p.push(new Fb(b,t));m.push(b.id)});0<m.length&&l.trigger("addOutputItem",{output:m},
"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0});return p}return{startViewabilityMeasurementStrategies:function(a,b,c,d){var e=g(a);return f(e).map(function(e,p){var m;m=new Gb(p,b);var q=(new Hb(c,a,p.rts)).getCallbacks(),q=new Ib(d.createPingJobs(p.type,p.timeInViewThresholds,q,p.metricId));m=p.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Jb(m,p.minUnit,q,t.isVideo()):new Kb(m,new Z(p.minUnit),q);m.start();return m})},killRequest:function(a){var b=!1,c,d;try{f.isDef(r)&&
f.isDef(r.killPhrases)&&""!==r.killPhrases&&(c=r.adsafeSrc?r.adsafeSrc:r.requrl+r.reqquery,d=r.killPhrases.split(","),f(d).each(function(a,e){e=decodeURIComponent(d[a]).replace(/^\s+|\s+$/g,"");-1!==c.search(e)&&(b=!0)})),r.doNothing&&(b=!0)}catch(e){a.add(h.ERROR_CODES.KILL_IT)}return b}}}(),f=function(g){return new E(g)},E=function(g){this.iterable=g};E.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};E.prototype.isArray=
function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(g){return 0===this.keys(g).length};E.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};E.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&
b.push(e)});return b.join(a)};E.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=f(c).toION(g,a);return d?m:(g[b]||b)+":"+m}));return c+b.join(",")+d};E.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==
c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};E.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};E.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;
return b})};E.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};E.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};E.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};E.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};E.prototype.selectProperties=function(g){var a={},b=this;
f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(g,a){return a})};E.prototype.JSONStringify=function(){var g,a,b=!1;A.Prototype&&A.Prototype.Version&&-1===A.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&
(Array.prototype.toJSON=a);return g};E.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};
f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e=
{};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||A;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,k)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};var P=function(){var g,a={},b=[],c=[],d=function(){var a={},
b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,n){n=n||{};var v,h,l=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},w=function(){if(!v){var a=[];v=!0;l(["features","browser","context"]);n.emits&&(c.events=new I);if(!n.applies||n.applies.apply(n,b))h=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(q.apply({},a))}};(function(){var b=n.tier;f.isDef(b)&&(a[b]=a[b]||new $,a[b].push(w))})();g.provide(d,function(){var a;
w();h&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new ka;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",
NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",AVIREEN:"r",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",VH:"vh",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",
BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",
ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",GET_SCREEN_LOC_PIV_CALC:"p",
PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AVIREEN:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",
VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8,FRAUD:9},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,
0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},X=function(){return{applies:function(g,a,b){b=l.request("mobileApp");return(g.browserIs(h.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},lb=function(){var g,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};
l.on("primaryadfound",function(a){g=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;d()});l.on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},Sa=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=t.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},Lb=function(g,a,b,c,d,e,k){var p;(function(){var e=
b.getRounded(),q=e.width-5,n=e.height-5,f=0.5*e.width+1,e=0.5*e.height+1;p=[new g(a,q,n,d,k,c),new g(a,q,5,d,k,c),new g(a,5,n,d,k,c),new g(a,5,5,d,k,c),new g(a,f,e,d,k,c)]})();return{getNumInView:function(){var a=[],b=0;f(p).each(function(b,c){var d=c.isInView()?1:0;a.push(d)});e.addItem({output:a.join(".")},"pvs");f(a).each(function(a,c){b+=c});return b},getPctInView:function(a){return 5===a?100:3<=a?51:0},isReady:function(){var a=!0;f(p).each(function(b,c){c.isNotReadyToReport()&&(a=!1)});return a},
remove:function(){f(p).each(function(a,b){try{b.remove()}catch(c){}})}}},Mb=function(g,a,b,c,d,e,k,p){var m=new g(la,J.body,a,c,d,k,p),q,n,v=0;b=b||f.noop;q=s.setInterval(function(){m.isReady()&&!n?(n=!0,b(),s.clearInterval(q)):(5===++v||n)&&s.clearInterval(q)},50);return{checkViewable:function(){var a=m.isReady(),c=m.getNumInView(),c=m.getPctInView(c),d=e.calcInitialViewState(c);a&&!n&&(n=!0,b());return{str:a?d:h.NA,pct:a?c:-1}},removePixels:function(){m.remove()}}},Pb=function(g,a,b,c,d,e,k){var p,
m,q=a.getRounded(),n=[],v=!1,F=0,l=49>a.area(),w=(c.on("largeAd")&&a.isMrcLarge()&&!t.isVideo()||k)&&!l?Nb(q):Ob(q,l),B=function(){var a;if(!v)for(v=!0,a=0;a<n.length;a++)if(n[a].isNotReadyToReport()){v=!1;break}return v},C=function(){var a=0;f(n).each(function(b,c){c.isInView()&&(a+=1)});return w.getPctInView(a)};(function(){var a=w.get();f(a).each(function(a,b){var p=new g(J.body,b.x,b.y,c,d,e);p.weight=b.weight;n.push(p)})})();b=b||f.noop;p=s.setInterval(function(){B()&&!m?(m=!0,b(),s.clearInterval(p)):
(5===++F||m)&&s.clearInterval(p)},50);return{checkViewable:function(){var d=B(),e;d&&(e=c.on("largeAd")&&a.isMrcLarge()?30:50,e=C()>=e?h.IN_VIEW:h.OUT_OF_VIEW);d&&!m&&(m=!0,b());return{str:d?e:h.NA,pct:d?C():-1}},removePixels:function(){f(n).each(function(a,b){try{b.remove()}catch(c){}})},getPercentInView:C}},ka=function(){var g=new Qb,a=new I;return f(g).mixin(a)},I=function(){var g={},a={},b=function(a,b,c){g[a]=g[a]||new $;g[a].push(b,c)},c=function(a,c){b(a,c,1)},d=function(b,c,d){var m=a[b],
q=!1;m&&(d&&1<m.length&&(m=m.slice(-1)),f(m).each(function(a,b){c&&c.apply({},b)}),a[b]=void 0,q=!0);return q};return{on:function(a,c){c?b(a,c):f(a).each(b)},once:c,trigger:function(b){var c,d=f(arguments).toArray();d.shift();c=b;a[c]=a[c]||[];a[c].push(d);(c=g[b])&&c.run.apply({},d)},everOnce:function(a,b){return d(a,b,!0)?!0:(c(a,b),!1)}}},Rb=function(g,a,b,c){var d=l.request("browser");if(l.request("features").bootstrapOn("killFlash"))return{style:{},isPlaceholder:!0};var e=function(a,b){return'<param name="'+
a+'" value="'+b+'"/>'};return function(){var k,p,m,q=r.dtBaseURL,n=r.cocaPuffsPath,q=new R(q);q.sub(a||"static");q.master(q.master().split(":")[0]);q.path("");n&&(q.master(n),q.sub(""));q+=g;n=e("allowscriptaccess","always");k=e("movie",q)+e("play","true")+e("loop","true");m=d.browserIs(h.BROWSERS.IE)||d.browserIs(h.BROWSERS.MSEDGE);p=d.browserIs(h.BROWSERS.IE);m&&(m=c?"window":"transparent",k+=e("wmode",m));b&&(n+=e("FlashVars",b));p?(p=J.createElement("div"),m="blag"+r.birthdate+s.random(),p.innerHTML=
"<object "+('id="'+m+'" ')+'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '+('type="'+h.FLASH_MIME+'" ')+('data="'+q+'" ')+">"+k+n+"</object>",k=p.firstChild):(k=J.createElement("object"),k.data=q,k.type=h.FLASH_MIME,k.innerHTML=n);q=k;q.style.position="absolute";q.style.width="1px";q.style.opacity="0";q.style.height="0px";return k}()},la=function(g,a,b,c,d,e,k,p){var m=e.browserIs(h.BROWSERS.IE)||e.browserIs(h.BROWSERS.MSEDGE),q="_IASflashPixelCallback"+(r.birthdate+""+s.round(1E6*s.random())),
n=!1,v=!1,F,z,w,B,C=function(){if(F&&f.isFunction(F.jsHandshake)&&!n){F.style.height="1px"===F.style.height?"2px":"1px";try{F.confirmResize()}catch(a){n=!0,l.trigger("error",h.ERROR_CODES.FLASH_API_ACCESS)}}},y=function(){if(n)return!1;var a,b;try{(a=B||F&&f.isFunction(F.jsHandshake))&&!v&&(B=!0,A[q]=O,b=F.jsHandshake(q),v=!0,O(b))}catch(c){a=!1,n=!0,l.trigger("error",h.ERROR_CODES.FLASH_API_ACCESS)}return a},O=function(a){try{if(f.isUndef(a.isInView))throw"corrupted Flash pixel message received";
w=1===+a.isInView}catch(b){l.trigger("error",h.ERROR_CODES.FLASH_API_ACCESS)}},t=function(a,b,c){var d=new Rb(m?"/detector_4_5_IE.pix":"/detector_4_5.pix"),e=d.style;d[h.IAS_DETECTOR]="true";e.left=b+"px";e.top=c+"px";d.isPlaceholder||a.appendChild(d);e.height="1px";F=d;m&&!d.isPlaceholder&&s.setInterval(C,100);return d}(g,a,b);return{isInView:function(){var a;if(y()){try{a=w}catch(b){B=!1,l.trigger("error",h.ERROR_CODES.COCOA_GONE)}e.browserIs("w")&&void 0!==a&&(F.style.height=z?"1px":"2px",z=!z)}return y()&&
a},isNotReadyToReport:function(){return!y()},createdFlash:F,remove:function(){t.parentNode&&t.parentNode.removeChild(t)}}},aa=function(){var g=function(a,c,d){var e,k=c.length,p=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);d&&d(a,c);if(p&&p.length){for(a=0;a<p.length;a++)(e=p[a])&&u.isWindow(e)&&(c[k]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===
a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},$=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},Ib=function(g){return{doEligibleJobs:function(a){var b=g[0],c=b&&b.time;f.isDef(c)&&a>=c&&(b.task(),g.shift())},getNextJob:function(){return g[0]}}},Sb=function(){var g,a=new ma,b=function(b,d,e,k){var p,m,q,g;if(JSON&&JSON.parse)try{p=
JSON.parse(b.data),m=b.source,g=f.noop,d(p)&&(k&&(q=k(m,p))&&(g=function(){a.send(function(){return q},m)}),e(b,p,g))}catch(v){p&&l.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(k){b(k,a,d,e)};x.addEvent(A,"message",g)},stop:function(){g&&x.removeEvent(A,"message",g);g=null}}},ma=function(){var g=function(a){return f(a).isObj()?[a]:(new aa).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,
c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var p;p=f.resolve(b,d)||{};p.sentTime=s.now();p=a(p);d.postMessage(f(p).JSONStringify(),"*")})}}}},Tb=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},Na=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=
f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var q=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){q({output:b},a,e)}):q(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),
e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Nb=function(g){var a=g.width-5,b=g.height-5,c=0.5*g.width+1,d=0.5*g.height+1,e=0.3*g.width+1,k=0.7*g.width+1,p=0.3*g.height+1,m=0.7*g.height+2,q,n=function(a,b){1>a&&(a=1);1>b&&(b=1);a>g.width&&(a=0!==g.width?g.width:1);b>g.height&&(b=0!==g.height?g.height:1);return{x:s.floor(a),y:s.floor(b)}};
q=[n(a,b),n(a,5),n(5,b),n(5,5),n(c,d),n(e,p),n(k,p),n(e,m),n(k,m)];return{get:function(){return q},getPctInView:function(a){var b;0===a?b=0:1===a?b=10:2===a?b=20:5>a?b=30:7>a?b=50:9>a?b=70:9===a&&(b=100);return b}}},Ob=function(g,a){var b=0.5*g.width+1,c;c=[{y:s.floor(0.5*g.height+1),x:s.floor(b)}];return{get:function(){return c},getPctInView:function(a){return 1===a?50:0}}},Qb=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||
(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},db=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new Ub:new Vb(g,a,b,c)}}},Vb=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),k=a.getOutOfViewReasons(),p=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:L(u.calcWinDims()),q=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!q.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:m,
adDimensions:q};!0===p&&k.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(p),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Ub=function(){return{collect:function(){return{}}}},
Wb=function(g){g=g||f.identity;var a=[],b=s.now(),c=function(){var c=s.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},na=function(g,a){var b=g||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=s.now())},stop:function(){var p=e||a;0===c%b&&(k+=s.now()-
p,d++);c++},getTime:function(){return k},getCount:function(){return d}}},oa=function(){var g,a=0,b=0,c=new I(!0),d=function(){g&&(a++,c.trigger(a),b>a?s.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,s.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},Xb=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=s.setInterval(g,c))},e=function(a){a&&
g();s.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},Z=function(g){var a,b,c=0,d=t.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();k=!1},mark:function(){a=k?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();k=!0}}},R=function(g,a){var b=g||r.adsafeSrc||r.requrl;b&&0===b.indexOf("http")||(b=r.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),
c=b[1],d=b[2],e=b[3],k=b[4],p=b[5],m=g?b[6]:"",q=a?b[7]:"",n={},v=function(a){f.isDef(a)&&(k=a);return k},h=function(a){f.isDef(a)&&(p=a);return p},l=function(a,b){return a+"="+f(b).toION()},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=n[b])?n[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:v,master:h,setParam:function(a,b){n[a]=n[a]||{};f(b).isObj()?f(n[a]).mixin(b):n[a]=b},path:function(a){m=
a},toString:function(){var a=v()?v()+".":"",b=m?"/"+m:"",c;q||!f(n).isEmpty()?(c=f(n).isEmpty()?"":f(n).stringify(l,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+h()+b+c}}},tb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};(function(){var b;try{if(t.friendly&&!t.isMobileApp()){var c,d;if(c=u.getOurNodeInTop()){var e=u.getAncestorNodes(c);d=f(e).map(a)}(b=
d=d&&g(d))&&l.trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0})}}catch(k){l.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}})()},Va=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=s.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",
h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},rb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var m=d.length,k=0,n=0;
e(m,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(m,k,++n)},!0);e(m,++k,n)})}catch(v){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new R).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+r.asid;g.jsonp(a,k)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},gb=function(g,a,b,c){return{enabled:"true"===r.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===r.accountForSadImps&&c.measure(a),r._onAPIResult&&r._onAPIResult(a)}catch(e){g.add(h.ERROR_CODES.BAPI_CALLBACK),
b.trigger("sendDiag","bapiClient")}}}},Ka=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new Yb:new Zb}}},Zb=function(){var g=h.BROWSERS,a,b=function(){var a="0",b=s.getWindow(),c=function(a){return a.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var d=s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(e){a="6"}}catch(p){}a=c(s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(k){try{b.navigator.mimeTypes[h.FLASH_MIME].enabledPlugin&&
(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(g){}}return a},c=function(){f.isUndef(a)&&(a=b());return a},d=function(a){return k()===a},e=function(){var a=s.getDoc();return a&&a.documentMode?a.documentMode:h.NA},k=function(){var a="u",b=s.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?
a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},p=function(){var a=!1,b=s.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:d,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=s.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=
s.getWindow();return!(!a||!f.isFunction(a.postMessage))},getFlashVersion:c,getDocumentMode:e,getBrowserType:k,getUserAgent:p,params:function(){var a=k(),b=c(),p;p=5;var v=s.getWindow(),l=s.getDoc();d(g.IE)?v.msCrypto?p=11:v.atob?p=10:v.addEventListener?p=9:v.JSON&&l.querySelector?p=8:v.XMLHttpRequest?p=7:l.compatMode&&(p=6):p=h.NA;var v=e(),l=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],z=h.NA,w=s.getDoc(),B=w.createElement("div");
if(d(g.IE))try{if("-ms-ime-align"in w.documentElement.style)z="11";else for(B.style.behavior="url(#default#clientcaps)",w=0;w<l.length&&!(z=B.getComponentVersion(l[w],"componentid").replace(/,/g,"."));w++);}catch(C){}l=z;z=h.NA;B=s.getWindow();f.isDef(B.navigator)&&f.isDef(B.navigator.appName)&&(z=B.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,bv:p,dm:v,abv:l,an:z}},isAndroidWebViewBrowser:function(){var a=p(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return f(b).findFirst(function(b,
c){return N.contains(a,c)})};return N.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=p())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Yb=function(){var g=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",bv:a(),dm:a(),abv:a(),an:a()}},browserIs:g,
getUserAgent:g,hasPostMessage:g,hasFlashEnabled:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Oa=function(){return{createInstance:function(g,a){return t.isDomless()?new $b(a):new ac(g,a)}}},ac=function(g,a){var b=function(a,b){var c,d,e=r.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===r.forceAppend?"script"!==a?(c=J.createElement("DIV"),c.innerHTML=d,e.appendChild(c.childNodes[0])):(c=J.createElement("SCRIPT"),c.src=b,e.appendChild(c)):J.write(d)},c=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=J.createElement("script");c=c||r.contextNode.parentNode;
e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:r.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},$b=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":
"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:r.asid}):a&&"string"===typeof a&&b(a)},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(){var g="undefined"===typeof window,a="undefined"!==
typeof window&&"undefined"!==typeof top&&window!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!g&&f.isDef(s.getWindow().mraid)},d=function(){var a=!1;if(!g)var b=(a=s.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},e=function(){return r.mobOrTab},k=function(a){return!1===f(r.customViewability).isArray()?!1:0<f(r.customViewability).filter(function(b,c){return N.contains(c.id,
a)}).length},p=function(){return k("grpm")||r.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b=!1;if(g)b=!0;else try{b=a.frameElement}catch(c){}return b},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return s.now()-r.birthdate},getPageTime:function(){var a=h.NA;!g&&f.isDef(window.chrome)&&f.isDef(window.chrome.csi)&&f.isFunction(window.chrome.csi)&&(a=s.round(chrome.csi().pageT));return a},isVideo:function(){var a;if(!(a=-1!==r.mode.indexOf("jsvid"))){var b;
a=!1;if(!g){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=l.request("omidVerificationClient"),a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||d());a=b}return a},isMobileApp:function(){return g||f.isDef(s.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;g||(a=(a=r._cl_adpath)&&f.isStr(a));return a},isAvid:function(){return!g&&f.isDef(s.getWindow().avid)},
isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return g},isAvidNative:function(){var a=!1;if(!g){var b=l.request("avidJsClient");b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ba());return a},isMraid:c,isSafeFrame:function(){var a=!1;g||(a=f(s.getWindow().$sf).isObj(!1)&&
f(s.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:d,isDeviceTypeGroupMobile:e,usesIASFullyInViewCustomMetric:function(){return k("fiv")||r.use100v},isNativo:function(){var a=!1;g||(a=(a=r._cl_adpath)&&N.contains(a,".ntv"));return a},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;g||(a=pa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&e()}}}(),x={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",
x.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",x.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;
this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(g=J.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(A.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&
(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(t.isDomless())s.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?J:s.getTop().document),c=function(a){var c=s.setInterval(function(){b.body&&(s.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(J.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?s.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(g)}},
isSandboxed:function(g){var a,b=s.getWindow(),c=!1;if("sandbox"in s.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=s.getDoc();if(g.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
x.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[h.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,AVIREEN:-9,SCA:-10},e=function(){var a={},b=h.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE AVIREEN SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=
e()[g],d=b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var fb=function(g,a,b,c,d,e,k,p){var m=0,q=0,n=!1,v,F=function(a,e,p,g,v,F){p=p||!b.on("postDts");var z=a===h.DT_CODES.VH||a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(z||"n"!==k.getCurrentLoc()))try{var t=
r.dtBaseURL,u=new R(t,!0),K=s.now();l.trigger("preSendDt",a);t||(u.path("dt"),b.on("usedtdomain")&&u.sub("dt"));w(u,a,e);v&&v.field&&u.setParam(v.field,v.value);g||B(u,a);l.trigger("send",u,function(){q+=1;m=s.now()-K;f.isFunction(F)&&F()},p);a===h.DT_CODES.UNLOAD&&(n=!0);d.cleanup()}catch(x){__IntegralASDiagnosticCall("dt-"+a,x),l.trigger("error",h.ERROR_CODES.PHONE_HOME)}};g=function(){n||F(h.DT_CODES.UNLOAD,-1,!0)};var z=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=
r.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&d&&F(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},w=function(a,b,e){var p=new Y(b);e=f.isDef(e)?e:p.enumerator;a.setParam("asId",r.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},B=function(c,g){var f,n={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,b){c.setParam(a,
b.replace("%3A",":"))});k.fastForward();if(g===h.DT_CODES.VIDEO_EVENTS||t.isVideo()&&g===h.DT_CODES.CUSTOM)if(f=l.request("videoEventsString"))n.ve=f;if(g===h.DT_CODES.CUSTOM||g===h.DT_CODES.UNLOAD||g===h.DT_CODES.VIDEO_EVENTS)n.clog=p;g===h.DT_CODES.UNLOAD&&(n.ndt=q);-1!==r.mode.indexOf("jsvid")&&(n.vv=l.request("videoVersion"));n.NULL1=b.output();n.NULL2=k.stringify(10);n.em=t.embedded;n.fr=t.friendly;n.uf=v.useFlash()?1:0;n.e=a.toString();n.tt=r.mode;n.dtt=m;d.filterOutput(function(a){var b=!a.standalone&&
!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},n);c.setParam("tv",n);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){F(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){F(a,b,void 0,!0)},sendDiag:z,updateDtCount:function(){q++},unload:g});return{send:F,unload:g,diagnostic:z,setViewabilityMod:function(a){v=a}}},L=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?u.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b=
{};f(a).each(function(a,c){b[a]=s.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return s.round(a.width)*s.round(a.height)};(function(){var b;g!==A.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=u.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=
d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},u={findElementsWithSize:function(g){var a=[],b=function(c){1>u.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(x.getStyle(g,"width"))&&0===a.width,a=0===a.width||
0===a.height;g="hidden"===x.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),g={scrX:s.round(a.scrX),scrY:s.round(a.scrY),width:s.round(b.width),height:s.round(b.height)}}catch(c){l.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,
g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(window.outerWidth)&&(g.width=window.outerWidth,g.height=window.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(window.screenX)?(g=window.screenX,a=window.screenY):f.isDef(window.screenLeft)&&(g=window.screenLeft,a=window.screenTop);return{scrX:g,scrY:a}},
getNodeArea:function(g){var a=-1;g&&(g=u.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=u.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=
J.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&s.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=s.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===
a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,k=1E4;b=x.nodeIsAbsolutelyPositioned(g);d=!u.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!u.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!u.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=u.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==J&&d!==a)}return{width:s.round(e),height:s.round(k)}},findChildWithLargestContent:function(g){var a=function(a){for(;a.parentNode!==g&&
"inline"!==x.getStyle(a.parentNode,"display");)a=a.parentNode;return a},b=null,c=function(a){var b,c,p=null,m=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var q=a[b],f=u.getNodeArea(q),v;if(v=f>m){v=void 0;if(v=q.parentNode===g)if(v=void 0,v="DIV"===q.nodeName)if(v=void 0,v=""===q.style.backgroundImage){var h=v=void 0,l=q.childNodes;for(v=0;v<l.length;v++)1===l[v].nodeType&&(h=!0);v=!h}v=!v}v&&(p=q,m=f)}return p}(function(a){var b,c,p,g,q=[],f="iframe img a object embed div".split(" ");b=0;for(c=f.length;b<
c;b++){var v=a.getElementsByTagName(f[b]);if(v.length)for(p=0,g=v.length;p<g;p++)q.push(v[p])}return q}(g));c&&(b=a(c));return b},screenSize:function(){if(t.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(window.screen)&&(g={width:window.screen.width,height:window.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(u.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:window.screen.availLeft,scrY:window.screen.availTop,width:window.screen.availWidth,
height:window.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=s.getTop(),b=s.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;t.friendly&&(g=t.embedded?(g=u.getOurIFrameInTop())&&g.frameElement:r.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||s.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=
null}return b},containsScriptTagWithSrc:function(g){return!!f(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,
b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[r.contextNode.parentNode,s.getDoc()];t.friendly&&d.push(s.getTop().document);if(a&&t.embedded)try{d.push(s.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=u.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=
!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=u.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=s.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},
attributeMatches:function(g,a,b){g=g&&u.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&u.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=x.getStyle(g,"width");g=x.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=u.getAttribute(g,"width");g=u.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,
e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==
s.getTop()},getParent:function(a){return a.parentNode||a.parent}},La=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},jb=function(){return{createInstance:function(a,b){return t.isDomless()?new bc:new cc(a,b)}}},cc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof
Array)b=f(a).map(function(a,b){return b.val}),b.push(r.adsafeSrc,r.requrl,r.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,k=c(d),p=k&&k.length&&k.join("|"),m=r.exchList;p&&(e=f(m).map(function(a,b){return 0<=p.indexOf(N.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:h.IMPRESSION_EVENT}))}catch(q){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},bc=function(){return{parse:function(a){}}},Ja=function(){var a=
{},b=function(b){var c;f.isUndef(a[b])&&(c=r.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*s.random());return a[b]},c={rt:"rattie",cb:"cachebust",th:"tabHiddenDtCall",es:"everySecond",sa:"swapids",sc:"usesca",ha:"usehaps"},d={fif:"useFIF"},e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());
return f(b).mixin(e)},k=function(a){a=r[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(r[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=r.sp_cdnScripts&&r.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},Za=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,
PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},k=h.NA;d=c?d:e;f.isDef(a)&&a!==h.NA&&-1<a&&(k=a>=d.IN_VIEW?h.IN_VIEW:a<=d.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return k},calcPercentInView:function(a,c,d,e){var k=0,p=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,b){if(b.hasValidDims()){var c=p.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),k=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),
c=Math.min(c.scrY+c.height,d.scrY+d.height),f=f-e,c=c-k;p=L({scrX:e,scrY:k,width:0<f?f:0,height:0<c?c:0})}}),k=s.round(p.area()/a.area()*100));return k}}},Ma=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=A.Uint32Array&&A.crypto&&A.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),A.crypto.getRandomValues(b),a+=b[0].toString(16)):
a+=(16*s.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return r.anId};return{getAsid:function(){return r.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||r.advEntityId+"-"+r.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=
a}}},sb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},eb=function(a){var b=function(a,b){return{time:a,task:b}};return{createPingJobs:function(a,d,e,k){return f(d.timeThresholds).map(function(d,m){var q=m/1E3;return new b(m,function(){f.isDef(k)&&l.trigger("addOutputItem",{output:k},"metricId",{type:a});l.trigger("sendDt",a,q);if(e[m])e[m]()})})}}},ha=function(){var a=function(a,b){-1!==a.indexOf(b+
"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var p=a.indexOf("?");b=b+"="+c;if(-1===p)return a+"?"+b;p++;return a.slice(0,p)+b+"&"+a.slice(p)},c=function(){return"__IntegralAS_"+r.asid.replace(/\-/g,"")+"_"+s.round(1E4*Math.random())};return{wrap:function(d,e,k,p){var f=c(),q,n,h;p=p||"ias_callback";d=""+d;RegExp(p).test(d)&&(q=RegExp("("+p+"=)(.[^&]*)").exec(d)[0],n=q.split("=")[1],h=N.stringToFn(n),d=a(d,q));A[f]=function(a){e(a);k&&h&&h(a);A[f]=void 0};return d=b(d,p,f)},wrapToGlobal:function(a){var b=
c();A[b]=function(c){a(c);A[b]=void 0};return b}}},hb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=R(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},
!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,m){var q;try{q=d(c,m),a.enabled?l.trigger("jsonp",q,a.callback,!0):l.trigger("send",q,f.noop,!b.on("postMon"))}catch(n){__IntegralASDiagnosticCall("jsvidimp",n,r)}})}},fwjsvid:{isFW:!0,manualDefer:!0,
impressionMethod:function(a){var b="false"===r.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,e){var m;try{var h;if(h=b)h=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);l.trigger("send",m,f.noop,!0)}catch(s){__IntegralASDiagnosticCall("fwjsvidimp",
s,r)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[r.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&r.mobFwUrl?r.mobFwUrl:a?r.adsafeSrc:r.requrl;a||(b+="?"+r.reqquery);return b}(d),n=f.indexOf("BEGIN__ADSAFE"),h=-1!==n,F=h?f.slice(n):"",a=h?f.slice(0,n):a(f);return{isFW:d,baseUrl:a,macroUrl:F,sendImpression:function(a){var d=function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};
if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},s={execAtEndOfThread:function(a){s.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return A},getTimeoutScope:function(){return t.isDomless()&&
t.isOmid()?l.request("omidVerificationClient"):A},setInterval:function(a,b){return s.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return s.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){s.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){s.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getNewActiveXObject:function(a){t.isDomless();return new ActiveXObject(a)},getDoc:function(){t.isDomless();
return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},Ua=function(){return{createInstance:function(){return t.isDomless()?new dc:new ec}}},ec=function(){var a,b=!1,c=l.request("features"),d=new $,e=function(){var b;c.on("blur")||c.on("abcAudit")&&923747==r.anId?(b=s.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||
(f.isDef(a.prop)?s.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?s.getDoc()[a.prop]:null;return b},k=function(){var b=s.getWindow(),c=function(){d.run(e())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(s.getDoc(),a.event,c,!0)};a=function(){var a,b="hidden",c="visibilitychange",d=s.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,k){var h=k+"Hidden";f.isDef(d[h])&&(b=h,c=k+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);
b||(b=!0,k())}}},dc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},Wa=function(){return{createInstance:function(a,b){return t.isDomless()?new fc:new gc(a,b)}}},gc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=
b[d],a[c]=d);return a},k=function(){var k,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?
13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(n){}try{q.b=encodeURIComponent(parent.location.href)}catch(h){}if(t.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{q.e=encodeURIComponent(window.document.referrer)}catch(s){}}try{"jsi"!==r.mode&&(q.d=encodeURIComponent(window.location.href))}catch(w){}try{q.f=encodeURIComponent(r.jsref)}catch(B){}try{k=m(),q.g=encodeURIComponent(k.g||""),q.q=encodeURIComponent(k.q||
""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(C){}q=d(q);q=e(q);k=[];for(var y in q)q.hasOwnProperty(y)&&k.push({key:y,val:q[y]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?c:k()}}},fc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},Ta=function(a){var b=!1;return{measure:function(c){(b=0===
c.rsa)&&a.trigger("notify",r._onSuspicious)},skipAsFraudulent:function(){return b}}},Xa=function(){var a=[],b={},c={sl:"n"},d=0,e,k,p={i:0,o:0,n:0,pp:0,pm:0},m=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason",cmps:"adCompCount"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===
c?"":","+c},q=function(a,c){var d=new Wb(c);return b[a]=d},n=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},v=function(){f(c).each(function(b,c){p[c]+=a.length?k-d:k});d=k},s=function(b){a.length&&v();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(p[b]+=p.n);c[a]=b});a.length||v()},z=function(a){var c,d=h.NA,d=a.adDimensions?a.adDimensions.getRounded():{width:d,height:d};c=m(a);var e={sl:n(a.viewState)};k=t.getTagTime();s(e);e.t=k;
c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;return c};(function(){q("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=
c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});q("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){k=t.getTagTime();v()},registerLocation:function(d){var k,p=!1;c.sl==n(d.viewState)&&a.length?(k=new z(d),a[a.length-1].details=k.details):(k=new z(d),a.push(k),e=d.viewState,p=!0);l.trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?
(p&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(p).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return n(e)}}},N={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,
function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=A,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=s.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?
a.trim():a.replace(" ","")}},hc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=u.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=u.tagNameIs(a,"div"),e=u.attributeMatches(a,"class",b);
a=u.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),f=u.attributeMatches(b,"href",d),h=u.attributeMatches(b,"target",e);k&&f&&h&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},ic=
function(){var a=hc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};P("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(!u.isViewportVisible(c,
a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=s.getWindow();return b(a,s.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=s.getWindow();u.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var jc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=
null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,q=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(q=!0);q&&!d&&(b(),e(),q=!1);c=a.innerWidth;f=a.innerHeight})}}};P("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,p={};d!==c&&(k=f.stringifyTriState(d),p.res1=k,p.ps=k,p.ts=s.now(),p.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",p));c=d}catch(m){l.trigger("error",
h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)jc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});P("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;t.embedded&&s.execAtEndOfThread(function(){try{k=r.contextNode.parentNode;var f=
b=ic().getDFPValue(k),m={};m.df=f.type;f.size&&(m.sz=f.size.width+"."+f.size.height);f.tag&&(m.dom=f.tag);c("dfp",m);b.size&&a&&(a.events.on("newState",d),a.start())}catch(q){l.trigger("error",h.ERROR_CODES.HIDDEN)}})})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Ra=function(){return{createInstance:function(a){return t.isDomless()?new kc:new lc(a)}}},lc=function(a){var b,c,d,e=new ka,k=new aa,p=new mc(e),m=new nc,q=new oc,n=new pc(e,a),h=function(){f.isUndef(d)&&
(d=new qc(e));return d},s=function(){e.provide({frameCollection:function(){return p},adProxy:function(){return q},adTalkMessage:function(a){return new rc(a,e)},adTalkMessageCollection:function(){return m},idMapModule:h,interFrameQuerySelector:function(a){return new sc(a)}})};return{isApplicable:function(a){return f.isDef(window.JSON)&&f.isDef(window.postMessage)&&!a.isAvid()&&!a.isOmid()},start:function(){s();k.traverse(p.addFrame);n.startListening();n.sendToKnownFrames();l.once("stopAdTalk",function(){n.stopListening()})},
sendAdTalkCall:n.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new qa(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new qa(e,!0));return c},getIdMap:h}},kc=function(){return{isApplicable:function(){return!1},start:function(){}}},rc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.request("features").on("swapids")?r.oid:r.asid;var k=a||{},f=r.asid,d=d.tagId,m=t.embedded,q=t.friendly,n=r.birthdate;
c=c.split("-")[2];var v;t.friendly?v="["+h.AD_IDENTIFIER+"-"+r.asid+"]":(v=s.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:q,srcBirthdate:n,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},nc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},tc=function(a,b,
c,d){var e,k=a==A;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:r.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var p=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&
a.length?f(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){p(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},mc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,k,f){var m=a.request("adProxy").getAll();e=
new tc(e,k,m,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},qa=function(a,b){var c=function(a,c){var f=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=d(f,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();q+=c.isMe?"*":"";q+=f.length?"."+f[0].tagId:"";m+=q}return m}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(r.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):
c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},qc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=r.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},k=function(a){var e=!1,e=!t.embedded,k="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var v=a.nodeSelector&&
-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);f=!(f?v:!a.srcIsFriendly)}e&&k&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==r.asid&&k(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:k}},
sc=function(a){var b=new aa,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return u.querySelector(c(a),b)},e=function(c,e){var m,q,n;try{q=d(c,e),q||(m=b.getFrames(!0,a),f(m).findFirst(function(a,b){return n=d(b,e)}))}catch(h){}return q||n||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},pc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?r.oid:r.asid;var e=function(b){var c=
d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==r.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},p=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},m=function(c,d,e){var k,m,w,r,C;try{k=a.request("frameCollection");m=a.request("adTalkMessageCollection");w=d.messageContent.self;m.add(d);
var t=k.getMe();t.unifiedId>w.unifiedId&&(t.unifiedId=w.unifiedId);var u;u=s.now()-d.sentTime;d.transferDuration=u;m=r=k.getFrame(w.id);f.isUndef(m)||f.isUndef(m.selfDescription)?(r=r||k.addFrame(c.source,w.id.split("-"),d),r.addInformationFromSrc(d,w),e()):r.addInformationFromSrc(d,w);(C=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&p()}catch(D){l.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:p,sendToKnownFrames:function(){(new ma).send(k)},startListening:function(){c=
new Sb;c.listen(e,m,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:k}},uc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},oc=function(){var a,b=[],c=function(a){a=new uc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Ya=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=
a.screenY-a.clientY,e=!1);return e};a.browserIs(h.BROWSERS.IE)&&x.addEvent(s.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,s.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},vc=function(a,b){var c,d=h.NA,e=d,k=!1,p=!1,m=!1,q=!b,n=function(){var b=s.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&
(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&s.execAtEndOfThread(function(){l.trigger("IOPivChange",d)});e=d},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});q&&s.execAtEndOfThread(function(){d===h.NA&&(d=0)});b.observe(v(a));q&&s.execAtEndOfThread(function(){t.isBustedIframe()||l.trigger("delayedViewabilityReady")});k=!0},v=function(b){if(!f.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",
zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){p=!0}b&&null!==b.bodyElement?n():b&&b.document?x.whenReady(n,b.document):p?l.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):n()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;c&&(a=L({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));
return a},isReady:function(){return d!==h.NA}}},ja=function(){var a=!1;(function(){x.whenReady(function(){l.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};P("loopDelay",[],ja,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var wc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},xc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},
qb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.trigger("notify",r._onMeasurable))};return{start:function(){var b;b=[yc(),zc(),xc(),wc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(r._onMeasurable)}}},zc=function(){return{start:function(a){Tb(l,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();
return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},yc=function(){return{start:function(a){l.everOnce("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Ac=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.trigger("adImpression")})}}},Bc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=
!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Cc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",
function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},Dc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},fa=function(a){var b=l.request("omidAdSessionContext");return{accepts:function(){return a&&
a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},Ec=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},Fa=function(a){return{resolve:function(){return f(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Ea=function(a,b){var c=!1,d=!1,e=l.request("omidAdSessionContext"),f=function(b){"sessionStart"===b.type&&(e.isNative="native"===b.data.context.adSessionType,(c=!0)&&d&&(A.omidSupported=!0,a()))},p=function(b){e.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});e.isNativeVideo=e.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(A.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(f,
"IAS");b.addEventListener("impression",p)}}},Fc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Gc=function(a,b){var c,d=function(a){var d,f,m;try{d=a.eventData.percentageInView,f=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,
y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Hc=function(a,b){var c=function(a){try{var c;
"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(f){__IntegralASDiagnosticCall("omidvideo",f,A.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",
a)}}},ra=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",
a)},isMeasurable:function(){return c}}},Ic=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},
start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},Pa=function(a,b,c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),e=(new ca(e)).resolve(),f=new Jc(e),p=new sa(b,c,t,d);return!e&&p.accepts()?new Kc(t.isVideo(),new I):new Ic(e,f,d.isMobileAppEnvironment())}}},Qa=function(a){var b=
l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new fa(a),e=[];if(b.accepts()){var f=new Lc(a,new I),p=[{environment:new Mc,measurementStrategy:new Nc(a,new I)},{environment:new Oc,measurementStrategy:new ta(new da,s.getWindow(),new I)}],m=(p=(new ca(p)).resolve())?p.measurementStrategy:{},q=new ua(new va(new U),new U),p=new Dc(a,b,r.mode),n=new wa(f,m,new I,q),b=new Ec(a,b,r.mode),a=new xa(f,m,new Hc(a,new I),new I,q);e.push({environment:p,
measurementStrategy:n});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=l.request("avidJsClient"),d=new Bc(b),e=[];if(d.accepts()){var f=new Ac(b,d,r.mode),p=new Cc(b,d,r.mode),m;m=new Fc(b,new I);if(d.supportsAdContainerGeometry()){var q=new Pc,n=new Qc,h=new ta(new da,s.getWindow(),new I),F=new Rc(b,new I),q=(q=(new ca([{environment:q,measurementStrategy:F},{environment:n,measurementStrategy:h}])).resolve())?q.measurementStrategy:{},n=new ua(new va(new U),
new U),h=new Sc(b,new I),b=new wa(h,q,new I,n);m=new xa(h,q,m,new I,n)}else q=new Gc(b,new I),b=new ra(q,new I),m=new ya(q,m,new I);e.push({environment:f,measurementStrategy:b});e.push({environment:p,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Tc(s.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new Uc(s.getWindow(),e),f=new Vc(s.getWindow(),
new I);e.accepts()?(d=new Wc(s.getWindow(),new I),d=new ya(f,d,new I),d={environment:e,measurementStrategy:d}):(e=new ra(f,new I),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ca=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Jc=function(a){var b=!1,c,d={winDimensions:L({scrX:0,scrY:0,width:0,height:0}),adDimensions:L({scrX:0,scrY:0,width:0,height:0}),containerDimensions:L({scrX:0,scrY:0,width:0,
height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},e=function(a){return a?new L({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):L({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:
h.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=
c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},ya=function(a,b,c){var d=!1,e=!1,k=!1,p,m,q,n,v=function(){if(!f.isUndef(m)){var a=[],b,v;d?(e?(v=!1,b=100):(v=n,b=q),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(v=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));
k=!0;m.shouldDelegateToDomBasedViewability=v;m.percentageInView=b;m.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;m.outOfViewReason=a.join(".");p=m;c.trigger("measurementChanged",p)}},s=function(a){m=a;q=a.percentageInView;n=a.shouldDelegateToDomBasedViewability;v()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);v()};return{start:function(){l.trigger("addOutputItem",
{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(s);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return k}}},Uc=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},Wc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Sc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||
{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},d=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateAvidOutOfViewReasons:d}},ua=function(a,b){function c(a,b,c){c=p(b,c);a=e(a,b,c);return a.width*a.height}var d=function(a,b){var c=Math.max(a.x,
b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},e=function(a,b,c){a=d(b,a);return d(c,{x:0,y:0,width:a.width,height:a.height})},k=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},p=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(d,q){if(f.isDef(d)&&f.isDef(q)){var n=d.viewport,v=d.computedAdContainer,
l=v.obstructions,r=l&&0<l.length,w=d.originalAdContainer,t=q.adGeometry,C=d.detectionMethod,y=0,n={x:0,y:0,width:n.width,height:n.height},u=k(w,t),D=d.outOfViewReason,G=0,H=0,V=r||!1;if(q.adFound&&0<d.percentageInView){G=c(n,v,u);r?(y=p(v,u),y=e(n,v,y),y=k(v,y),y=a.calculateObstructedArea(y,l)):y=0;H=y;y=Math.round((G-H)/(u.width*u.height)*100);r&&0===H&&(V=!1);for(var t=V,M,r=0,H=b.getConfig(u).numberOfSlices,x=s.floor(u.height/H)||1,l=[],G=t?a.getObstructionStatusBySlice(H):[],K,r=0;r<H;r++)M=u.y+
x*r,r==H-1&&(x=u.y+u.height-M),M={x:u.x,y:M,width:u.width,height:x},K=c(n,v,M),M=1==K/(M.width*M.height),l.push(M);if(t)for(v=s.min(G.length,H),r=0;r<v;r++)l[r]=l[r]&&!G[r];v=l}else v=q.adFound?b.getConfig(t).defaultSliceArray:void 0;return{windowDimensions:n,containerDimensions:w,adDimensions:u,percentageInView:y,viewState:50<=y?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=y?"":D||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:C,isObstructed:V,sliceStatus:v}}}}},Pc=function(){return{accepts:function(){return t.isAvidNative()}}},
Rc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Qc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},wa=function(a,b,c,d){var e,k,p,m=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,
k);p=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;m()},n=function(a){k=a;m()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(n);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return p}}},va=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,p,m,q;p=e&&0<e.length;var n;if(p){n=Math.round(d.width);var h=Math.round(d.height);k=Array(n);for(m=0;m<n;m++)k[m]=Array(h);n={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:n,height:h}}else n={};k=n;h=n=0;if(p){for(;n<e.length;n++){p=e[n];m=h=k;var l=p;k=Math.max(m.x,l.x);p=Math.max(m.y,l.y);q=Math.min(m.x+m.width,l.x+l.width);l=Math.min(m.y+m.height,l.y+l.height);
m=q-k;q=l-p;m=0<m?m:0;q=0<q?q:0;k-=h.x;p-=h.y;m=k+m;q=p+q;for(k=Math.round(k);k<Math.round(m);k++)for(l=Math.round(p);l<Math.round(q);l++)void 0!==h.matrix[k]&&void 0===h.matrix[k][l]&&(h.matrix[k][l]=1,h.obscuredPixelCount+=1);k=h}h=k.obscuredPixelCount;n=k;if(f.isUndef(n.matrix)||0===n.matrix.length)c=[];else{p=0;q=!1;k=n.matrix[0].length;m=n.matrix.length;q=a.getConfig({height:k}).numberOfSlices;for(var l=s.floor(k/q)||1,r=[],t=0;t<k;t++){q=!1;for(var u=0;u<m;u++)if(1===n.matrix[u][t]){q=!0;break}p++;
q&&(t+=l-p,p=l);if(p==l||t===k-1)r.push(q),p=0}c=r}}else c=b;return h},getObstructionStatusBySlice:function(){return c}}},Lc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:e(a.data.adView.reasons)};
b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);
a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:e}},Mc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isNative}}},Nc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};
return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Oc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},xa=function(a,b,c,d,e){var k=!1,p=!1,m,q,n,v,s,r=function(){if(!(f.isUndef(q)||f.isUndef(n)||f.isUndef(v))){s=!0;var a=e.calculateGeometricMeasurement(q,n),b=k&&
p,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);m=l;d.trigger("videoGeometryMeasurementChanged",
m)}},t=function(a){q=a;r()},u=function(a){n=a;r()},C=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?p=!0:"AdExitedFullscreen"===a?p=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(k=!1);r()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(u);
b.start();c.addVideoPlaybackEventListener(C);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return s}}},ta=function(a,b,c){var d,e=function(){var b=a.find(),e,m=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height}):m=!1;if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);b&&(d=e,c.trigger("mobileAppGeometryChanged",{adGeometry:e,
adFound:m}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Tc=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Vc=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,
adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},p=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):
k())},m=function(){c||p()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",m):p()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Hb=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){var b=r[c];a.skipAsFraudulent()||l.trigger("notify",b)});
return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Bb=function(){var a=new Q({tiv:[1E4]}),b=f([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=s.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==r.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ab=function(a,b){var c,d,
e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3];var p=[2E3,5E3,15E3];c?(c=new Q({tiv:d}),d=d[0]):f?(c=new Q({tiv:p}),d=p[0]):(c=new Q({tiv:e}),d=e[0]);e={5E3:"_onInViewMRC5",15E3:"_onInViewMRC15"};e[d]="_onInViewMRC";return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Db=function(a,b){var c;c=a.on("everySecond");
var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],p=[1E3,5E3,15E3],m=[2E3,5E3,15E3],q=function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:f}):d?new Q({tiv:m}):new Q({tiv:p});l.provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},
minUnit:1E3}},Cb=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Fb=function(a,b){var c,d,e=s.getMaxNumber(),k=b.isVideo();c=new Q(a);d={};f.isDef(a.rts)&&(d={timThreshold:a.rts});return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,
rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,n,h=b.adDimensions.area(),l=1===b.tabHidden,r=s.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;n=b.ub||e;if(h>=d&&h<=n)return!0});c=!l&&r>=c.piv;k&&(c=c&&b.isVideoPlaying);return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Eb=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",
h=f(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),q=c.on("groupmCM"),n=function(a,b){var c,m,h,n,p;c=f(b.mediaTypes).contains(d);m=f(b.distributionChannels).contains(e);h=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;n=N.contains(b.id,"fiv");p=N.contains(b.id,"groupmCM");n=!n;p&&(n=q);return n&&c&&m&&h};return{resolve:function(){var b=[],c;m&&h&&(c=f(a.customViewability).filter(n),f(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){f(a.tiv).isArray()?
a=a.tiv:"string"===typeof a.tiv?(a=a.tiv.split("|"),a=[8E3,1E3*parseInt(a[0])]):a=[1E3*a.tiv];return{timeThresholds:a}},Kb=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},Jb=function(a,b,c,d){var e,k,h,m,q,n=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var b=0,n=1===a.tabHidden,l=a.isVideoPlaying,s=a.isSoundOn,t=a.isVideoPlayingInFullscreen;
f(a.sliceStatus).each(function(a,b){h(b,n,l,t)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});r("slcVt",m);d&&(f(a.sliceStatus).each(function(a,b){v(b,n,l,t)&&s?k[a].mark():k[a].stop();q[a]=k[a].getTotalTime()}),r("slcVtVol",q));a=f(m).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});f.isUndef(a)&&c.doEligibleJobs(b)},r=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},t=function(a){!e&&a.sliceStatus&&(e=[],k=[],m=[],q=[],f(a.sliceStatus).each(function(a){e.push(new Z(1));
m.push(0);d&&(k.push(new Z(1)),q.push(0))}))},u=function(a){f.isUndef(a.sliceStatus)||(e||t(a),s(a))};return{start:function(){h=d?v:n;a.addMeasurementChangedListener(u)}}},Gb=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},ib=function(a,b,c,d,e,k,p,m,q,n,l,r,u,w,B){var C,y,O=!1,D=t.isVideo(),G=m.request("mobileApp");e=t.isDeviceTypeGroupMobile();q=c.hasFlashEnabled();c.getDocumentMode();l=X();l=c.browserIs(h.BROWSERS.GECKO)||
c.browserIs(h.BROWSERS.IE)&&k.on("rattie")||l.applies(c,k,t);var H=t.xDomainIframe&&!l,x=!e&&H&&q&&!k.bootstrapOn("killFlash"),M=new na(10),A=function(){S();K()},K=function(){k.on("viewabilityready")&&!O&&(d.send(h.DT_CODES.VIEWABILITY_READY),m.trigger("measurable"),O=!0)};m.on("delayedViewabilityReady",A);m.on("delayedViewabilityReadyCallOnly",K);var S=function(d){d=d||!1;try{M.start();var e,f,q,l;if(b.hasMeasurementStrategy())f=G.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},
d):b.getScreenLocationInfo(u.collect(),d);else{f=u.collect();if(G.isMobileAppEnvironment())f.viewState=h.NA,f.method=h.NA,f.percentInView=h.NA;else if(x){C=C||new Pb(la,f.adDimensions,A,k,r,c)||{};q=C.checkViewable();t.usesGroupMLegacyCustomMetric()&&(y=y||new Mb(Lb,f.adDimensions,A,c,k,p,n,r)||{},l=y.checkViewable(),f.fullPercentInView=l.pct,f.useCocoa=x);if(1!==f.tabHidden||q.str===h.NA)f.viewState=q.str;f.percentInView=q.pct}else H&&(f.viewState=h.NA,f.percentInView=h.PIV_NA);D&&!t.isAvid()&&B.setVideoSpecificScreenEventFields(f)}e=
w.registerLocation(f);d||a.trigger("measurementChanged",f);M.stop();var v=s.round(M.getTime()/M.getCount());n.addItem({output:v},"lt",{type:h.DT_CODES.UNLOAD});return e}catch(K){m.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:S,cleanupPixelGrids:function(){f([C,y]).each(function(a,b){b&&"function"===typeof b.removePixels&&b.removePixels()})},needsFlash:function(){return H},useFlash:function(){return x},stringifyPingTimes:function(){return k.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
D?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&c.hasIntersectionObserver(),d=!x&&!d&&!e&&!a;return G.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){G.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};P("viewabilityLoopLifecycle",["viewability",
"features","context","browser"],function(a,b,c,d){var e,k=Xc(c),p=[new Yc,new Zc(k)],m=function(){return f(p).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},q=function(){var a=new Y(h.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:r.videoId,msg:"unloadComplete",messageType:"misc"};s.getWindow().postMessage(JSON.stringify(a),"*")})};l.once("startViewabilityLoop",function(){var b;l.request("ids").impressionIsIdentifiable()&&(e=Xb(a.checkScreenLoc,
k.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),x.addEvent(A,"beforeunload",function(){l.trigger("adSessionComplete")},!1))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||q();l.trigger("unload");e&&e.stop();a.cleanupPixelGrids();l.trigger("endAdSession");l.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var Xc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Zc=function(a){var b,
c,d,e=function(e){d=1>e;!c&&d?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!d&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0))},f=function(a){e(a.percentInView)};return{applies:function(a,b,c){var d=l.request("mobileApp");a=(new sa(b,a,c,d)).accepts();return b.on("viewabilityOptimization")&&!a},start:function(a){b=a;b.start(!0);l.on("IOPivChange",e);l.on("newScreenEvent",f)}}},Yc=function(){var a,b,c=function(c){1>c?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0));return a};return{applies:function(a,
b,c){var f=X();return b.on("viewabilityOptimization")&&f.applies(a,b,c)&&c.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.on("IOPivChange",c)}}},dd=function(a,b,c,d,e,k){var p,m,q,n,v,F,z,w,B,C=u.getElementsWindow(b);u.getElementsDocument(b);l.provide("iframeCalculatorHelper",$c(C));var y=ad(b,d),O=h.AD_IDENTIFIER+"-"+r.asid,D=!1,G=L({}),H=t.isDeviceTypeGroupMobile(),V=t.usesGroupMCustomMetricMobilePassThru(),M,E=function(){if(!p)if(p=y.calcDims(b,d,q),c===h.DETECTION_METHODS.VIDEO&&
t.embedded){var a=p,e=(new L(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.trigger("error",h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&p.treatAsPlaceholder();return p},K=function(){var b,d=t.xDomainIframe&&D;b=H&&D&&q.isReady();b=d||b;d=y.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=q.getPiv():f.isUndef(m)&&(b=!H&&(t.friendly||f.isDef(A.mozInnerScreenX))&&e.on("offscreen"),w=E(),z=new L(u.calcWinDims()),
F=new L(b?u.calcMonDims():{}),B=d?y.getClippedDims():G,m=a.calcPercentInView(w,z,F,B));return m},S=function(){return a.calcInitialViewState(K())},W=function(){return b===A?!1:E().isHidden()},I=function(a,b){return t.isVideo()?s.getDoc().body:a.document&&a.document.body?a.document.body:b};(function(){var c=s.getWindow(),e=s.getDoc(),f=b===c,k=e.body,m=new X,h=l.request("browser"),p=l.request("features"),r=l.request("context"),u=!t.xDomainIframe,w=I(b,d),e=f&&k?e.body:b;M=t.friendlyIframe?c.frameElement:
e;x.addEvent(e,"click",function(){l.trigger("adComponentClicked")});x.addEvent(e,"mouseover",function(){l.trigger("adComponentMousedOver")});m.applies(h,p,r)?(q=vc(b,u),q.start(),D=!0,V&&(n=new za(bd,E(),w))):V&&(v=new cd(a))})();return{mark:function(){u.setAttributeOf(M,O,"")},cleanup:function(){u.removeAttributeOf(M,O)},isNode:function(a){return b===a},isHidden:W,isObstructed:function(){return!1},getDims:E,getPercentInView:K,getLocationState:S,getOnPageViewability:function(){return W()?h.OUT_OF_VIEW:
S()},getDetectionMethod:function(){return c},getContainerDims:function(){return y.allowsOptimization?p:L(d)},refresh:function(){B=w=z=F=m=p=void 0;if(k){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==A&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;n&&n.isReadyToMeasure()?a=n.getSliceStatus():t.friendly&&v&&f.isDef(w)&&(a=v.getSliceStatus(w,z,F,B));return a}}},ed=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&
c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},p=function(d,m,q,n){var p=k()||0===c.length;d=dd(a,d,m,q,b,n);k()&&(q=c.shift(),e=f(c),q.cleanup());c.push(d);e=f(c);p&&d.mark();p&&m!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",d)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==h.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},q=function(){var a;
a=m();a=a.hasMeasurement?s.round(a.totalInView/a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},n=function(){var c=m().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!t.isVideo();return a.calcInitialViewState(q(),c)},v=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},r=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===v(b)&&p(b,h.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){f(a).each(function(a,
b){var d=v(b);-1<d&&c.splice(d,1)})});return{getDims:r("getDims"),isObstructed:r("isObstructed"),getDetectionMethod:r("getDetectionMethod"),getContainerDims:r("getContainerDims"),getViewState:n,getPercentInView:q,isHidden:r("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:p,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=h.OUT_OF_VIEW_REASONS;e&&(a=d||n(),a!==h.OUT_OF_VIEW&&a!==h.PARTIAL_VIEW_MINUS||
b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:r("getSliceStatus")}},fd=function(a){var b=!1;if(!f.isUndef(A.MutationObserver)){var c=new MutationObserver(function(a){s.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),
d=function(){b=!0;s.setTimeout(function(){b=!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(J.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},s.getDoc())}},md=function(a,b){var c=[gd()],d=[da(),hd(),id(),jd(),kd(),ld()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},id=function(){var a,b,c,d=function(a){a?a&&c&&(s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ba();var c=u.crossQuerySelector(ba().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Aa=function(a){var b;a=u.findChildWithLargestContent(a||r.contextNode.parentNode);1<u.getNodeArea(a)&&!a[h.IAS_DETECTOR]&&(b=a);return b},kd=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,
find:function(){return A},isApplicable:function(){return t.embedded},getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},nd=function(){var a,b=s.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return N.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),
f=/;(\d+);/;e&&e.src&&(b=e.src.match(f)[1]);return"#ftdiv"+b}}},od=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&N.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},pd=function(){var a,b,c=s.getDoc(),d=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=s.getWindow(),h=a.friendlyIframe&&s.getWindow().frameElement,h=h&&L(h).isOneByOne(),n=function(){var a=s.getDoc().scripts;return f(a).findFirst(function(a,b){return N.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&n&&c&&h&&d()&&e()},getCssSelector:e}},ba=function(){var a,b=l.request("features");a||(a=[pd(),od(),nd()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,b)})},jd=function(){var a,b=function(){s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=pa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},pa=function(){var a,b=function(){var b;(b=r.contextNode.parentNode)&&N.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},da=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){return Aa(s.getDoc().body)},getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},gd=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(r._cl_adpath);b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},ld=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Aa,getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},hd=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},ad=function(a,b){var c,d;c=[qd(),rd(),sd()];
d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=td();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},sd=function(){return{calcDims:function(a,b){var c,d,e=new L(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&u.nodeIsInWindow(a,s.getTop());a=!u.elementIsEmbedded(a);
return b||a}}},rd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&u.elementIsEmbedded(a)}}},qd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new L(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,s.getTop()),e=t.isCeltra()&&u.elementIsEmbedded(a);return d||e}}},td=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},$c=function(a){var b,c,d,e=l.request("features"),k=l.request("browser");a=a||s.getWindow();var p=function(b,c){b=b||a;c=c||{top:0,left:0,width:s.getMaxNumber(),height:s.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,m=e.length;k<m;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=s.min(c.width,d.width),c.height=s.min(c.height,d.height)}catch(r){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==s.getTop()&&p(b.parent,c)}return c},
m=function(){var m,n={};try{var v,r,z,w,B,C,y=s.getMaxNumber(),O=s.getMaxNumber();t.friendly?(v=p(),z=v.left,w=v.top,y=v.width,O=v.height,r=u.browserWindowPosition(),B=r.scrX+z,C=r.scrY+w):e.on("rattie")&&k.browserIs(h.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),B=c.scrX,C=c.scrY):f.isDef(a.mozInnerScreenX)&&(B=s.round(a.mozInnerScreenX),C=s.round(a.mozInnerScreenY));var n={scrX:B,scrY:C,iFrameClippingWidth:y,iFrameClippingHeight:O},D,G,H=b||u.getIeDimObj(a);
b=H;f.isDef(a.innerWidth)?(D=a.innerWidth,G=a.innerHeight):H&&f.isDef(H.clientWidth)?(D=H.clientWidth,G=H.clientHeight,0===D&&0<H.offsetWidth&&(D=H.offsetWidth),0===G&&0<H.offsetHeight&&(G=H.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(D=a.frameElement.clientWidth,G=a.frameElement.clientHeight);m=D;n.height=G;n.width=m}catch(x){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return n};return{calcDims:function(){return new L(m())},getClippedDims:function(){var a=m();return new L({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},cb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new ud:new vd(a,b,c)}}},vd=function(a,b,c){var d,e=r&&r.contextNode&&r.contextNode.parentNode?r.contextNode.parentNode:null,k=ed(b,c),p=function(){var a,b,e;d=d||md(t,c);a=d.find();!a&&d.usePlaceholder?m():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),
b,e)}))},m=function(){var a;k.hasAd()||(a=u.getPlaceholderSpan(),e.insertBefore(a,r.contextNode.nextSibling),k.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};fd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?p():k.refresh();return k},getDetectionMethod:function(){}}},ud=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Ia=function(a){var b,c=[],d=a||A,e=function(){return"stub"===h().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},h=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,A.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:h,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Ha=function(a){var b=new wd,c=new xd;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
yd={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==s.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=s.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,
c){return f.isDef(N.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ba=function(){var a=function(a,c){var d,e=yd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},zd={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},wd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=r.hasOwnProperty("serverSideAppDetection")&&0!==r.serverSideAppDetection.length?!0:Ba().process(zd);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},xd=function(){var a=[],
b=[],c=function(b,c){var f,h=Ba().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),f=c);return f};return{detect:function(){b=f(Ad).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Ad=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],U=function(){var a=
h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Bd=function(){var a,b,c=0,d=-1,e=0,k=l.request("browser"),h=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=s.setInterval(function(){var a=s.now();d=a-e;e=a;c++;10<=c&&b&&s.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=u.calcMonDims().height,l=k.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,r=k.getUserAgent(),r=r&&null!==r.match(/(iPad)/)?1:0,t=h()?1:0,w=k.getUserAgent(),w=w&&null!==w.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=s.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*
r+0.646972*t+0.28118*w+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:r,mbhs:t,mbbr:w,mblr:d,mbp:e};b&&s.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Kc=function(a,b,c){var d,e,k,p,m,q=[],n=r.contextNode.parentNode,v=0,u=0,z=!1,w=!1,B=new Bd,C=function(){var a=q.length-1,b=-1;-1<a&&(b=q[a].piv);return b},y=function(){l.trigger("delayedViewabilityReadyCallOnly")},O=function(a){x.whenReady(function(){e=new za(Cd,a,s.getDoc().body)})},D=function(){e.removePixels()},
G=function(){var a=B.getDebugState(),b=C();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(w);a.mbrd=f.fromBoolToNum(z);a.mbtg=f.isDef(n.tagName)?n.tagName:"na";a.mbaf=f.isDef(k)?k:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var n;n=f.isDef(d);if(c||
!b.adDimensions)return b;n||(k=b.method,d=b.adDimensions,d.isMrcLarge(),O(d));if(f.isUndef(e)||!e.isReadyToMeasure())n=!1;f.isUndef(p)&&n&&(p=B.isLikelyToProduceFalsePositive(d));if(w=!p&&n){var r;n=e.getPercentInView();var K=C(),D=1===b.tabHidden,G=b.adDimensions.isMrcLarge()?30:50;u=s.now()-v;r=0<v?900>u:!0;v=s.now();0===b.adDimensions.area()&&(n=0);r||(n=0);var x=n;q.push({tm:t.getTagTime(),piv:x});3<q.length&&q.shift();0===n&&0<K&&(r&&(r=q.length-1,x=!0,2<=q.length&&-1<r&&(x=0===q[r].piv&&0===
q[r-1].piv),r=!x),r&&(n=K));a?(f.isUndef(m)&&(m=l.request("video")),m.setVideoSpecificScreenEventFields(b),n=b.isVideoPlayingInFullscreen?!0:!D&&n>=G&&b.isVideoPlaying):n=!D&&n>=G;b.viewState=n?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=C();K=[];D=f(b.reason);G=h.OUT_OF_VIEW_REASONS;n||K.push(G.GEOM);D.contains(G.HIDDEN)&&K.push(G.HIDDEN);D.contains(G.OBSTRUCTION)&&K.push(G.OBSTRUCTION);b.reason=K;b.sliceStatus=e.getSliceStatus();z||(z=!0,s.execAtEndOfThread(y))}else b.viewState=h.NA,b.percentInView=
-1;return b},start:function(){l.on("endAdSession",D);c&&s.setTimeout(G,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},sa=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),p=a.on("ios"),m=b.browserIs(h.BROWSERS.WEBKIT),q=9<=b.getIOSVersion(),n=d.isMobileAppEnvironment();return e&&f&&p&&m&&q&&!n},isImmediate:function(){return!1},
start:function(){}}},Cd=function(a,b,c,d,e,k){var p,m=r.birthdate+""+s.round(1E6*s.random()),q=101,n,l,t,u=!1,w=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,k=(new Date).getTime(),h=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(h)};a.requestAnimationFrame(h);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-k}}catch(n){b.body.setAttribute("data-err",n.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},B=function(a,b){t||(q=a,t=b)},C=function(){var a,b,c;if(t)return!1;if(l)return!0;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.body){c=n.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&B(104);(b=c.isReady?c.isReady():!1)&&(l=c.isInView?c.isInView:void 0)&&B(105)}}catch(d){B(106,d)}return f.isDef(l)},y=function(a,b,c){var k=J.createElement("iframe");k.id=m;f(k.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=k.style;k[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(k);n=k;B(102);a=n;try{var q=a.contentWindow,p=w();q.document.open();
a.contentWindow.document.write(p);q.document.close()}catch(r){B(103,r)}return k}(a,b,c);return{isInView:function(){var a,b,c=!1;s.now();C()&&(a=l(!0),c=a.isInView,u=!1,p&&(b=20*p.rate+p.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,u=!0)),B(107),p=a);return c},isNotReadyToReport:function(){return!C()},createdElement:n,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return q},getError:function(){return t},isReadingInvalid:function(){return u},getRate:function(){return n.contentWindow&&
n.contentWindow.document&&n.contentWindow.document.body&&n.contentWindow.document.body.getRate?n.contentWindow.document.body.getRate():-1},percentInView:k}},za=function(a,b,c){var d,e=b.getRounded(),k=[],h=!1;b=U().getConfig(e);var m=b.percentInViewSliceArray,l=1==b.numberOfSlices,n={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},r=function(){var a;if(!h)for(h=!0,a=0;a<k.length;a++)if(k[a].isNotReadyToReport()){h=!1;break}return h},u=function(a){var b=[],c=0;s.floor(a.height/m.length);var d=
s.floor(a.width/2-1);f(m).each(function(e,f){c=s.floor(a.height*f);c===a.height&&(c-=2);b.push({y:s.floor(c)+"px",x:s.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},z=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=s.max(c,b.percentInView));
return!b.isInView});return c},B=function(){var a,b,c,d=[];n.mbs=[];f(k).each(function(b,c){a=c.isInView();n.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=w(d,!1);c=w(d,!0);return s.max(b,c)};(function(){d=l?z(e):u(e);var b=d.get();f(b).each(function(b,d){var e=new a(c,d.x,d.y,d.width,d.height,d.percentInView);k.push(e)})})();return{getPercentInView:function(){var a=r(),b=B();n.mbrd=a?1:0;b!=n.mbp&&n.mbivs.push([t.getTagTime(),b]);n.mbp=b;return a?b:-1},removePixels:function(){f(k).each(function(a,
b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){n.mbm=1;k&&0<k.length&&(n.mbpr=[],n.mbir=[],f(k).each(function(a,b){n.mbpr.push(b.getRate());n.mbir.push(b.isReadingInvalid()?1:0)}));return n},isReadyToMeasure:r,getSliceStatus:function(){var a;k&&0<k.length&&(a=[],f(k).each(function(b,c){a.push(c.isInView())}));return a}}},cd=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var h,m=[];h=c.getRounded();c=h.height;var l=h.scrY,n=new L({scrX:h.scrX,width:h.width}),r=b.getConfig(h).numberOfSlices;
n.set("height",s.floor(c/r));for(var t=0;t<r;t++)n.set("scrY",s.ceil(l+c/r*t)),h=100===a.calcPercentInView(n,d,e,f),m.push(h);return m}}},bd=function(a,b,c,d,e){var k=r.birthdate+""+s.round(1E6*s.random()),l=101,m,q,n,v=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{var c;b.body.setAttribute("data-st","iasInit");var d;(new Date).getTime();b.body.isInView=function(a){return{isInView:d,lastUpdateTimestamp:0}};b.body.getPiv=function(){return c};b.body.isReady=
function(){return void 0!==c};(function(){var e=b.createElement("DIV");b.body.style.width="100%";b.body.style.height="100%";b.body.style.margin="0px";e.style.position="absolute";e.style.width="100%";e.style.opacity="0";e.style.height="100%";e.style.zIndex=-999;e.style.top="0px";e.style.left="0px";b.body.appendChild(e);(new a.IntersectionObserver(function(a){a=a.pop();a=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(a)&&(a=0);c=
a;d=0<c},{threshold:[0,1]})).observe(e)})()}catch(e){b.body.setAttribute("data-err",e.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},t=function(a,b){n||(l=a,n=b)},u=function(){var a,b,c;if(n)return!1;if(q)return!0;try{if(m.contentWindow&&m.contentWindow.document&&m.contentWindow.document.body){c=m.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&t(104);(b=c.isReady?c.isReady():
!1)&&(q=c.isInView?c.isInView:void 0)&&t(105)}}catch(d){t(106,d)}return f.isDef(q)};(function(a,b,c){var n=J.createElement("iframe");n.id=k;f(n.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=n.style;n[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(n);m=n;t(102);a=m;try{var q=a.contentWindow,p=v();q.document.open();a.contentWindow.document.write(p);q.document.close()}catch(r){t(103,r)}return n})(a,
b,c);return{isInView:function(){var a;a=!1;u()&&(a=q(!0),a=a.isInView,t(107));return a},isNotReadyToReport:function(){return!u()},createdElement:m,remove:function(){m.parentNode&&m.parentNode.removeChild(m)},getStatus:function(){return l},getError:function(){return n},isReadingInvalid:function(){return!1},getRate:function(){return h.NA}}},Dd=function(){return{decorateContextParams:function(a,b){try{var c=l.request("adNode"),d;if(d="adImpression"===a)d=l.request("adNode").hasAttribute("data-ias-autoplay");
d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(e){l.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},Ed=function(){return{listenForResult:function(){l.on("videoBlockResult",function(a){var b=l.request("adNode"),c=!1,d="blockAd"+r.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Fd=function(a,b){var c,d,e,k,h,m=l.request("videoTranslator"),q=l.request("videoAutoplay");e=m.translate(a.messageType);k=function(a){a=
a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);q.decorateContextParams(e,k);d={t:a.time-r.birthdate,tp:e,sl:b};f(d).mixin(k);f(d).mixin(h);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},
indicatesFullscreen:function(){var a=s.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===k.viewMode||k.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===k.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(e)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){var a=function(){l.trigger(e,k,h)};"adImpression"===e?s.execAtEndOfThread(a):a()},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},
Gd=function(){var a=[];return{registerEvent:function(b,c){var d=new Fd(b,c);a.push(d);return d},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"}}},Hd=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},p=function(a){a=(new Ca).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){l.on({adVideoStart:k,adImpression:k,volumeChanged:p,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Id=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ca=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?
c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},$a=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,p,m,q,n=[],v=h.OUT_OF_VIEW,u=!1,z=!1,w=!1,B=!0,C=new Gd,y=Hd(),A=new Ed,D=function(b){u=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=C.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(z=!0,v=w?h.IN_VIEW:!1):d.indicatesNotPlaying()?(z=!1,v=h.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,v=z?h.IN_VIEW:h.OUT_OF_VIEW):
d.indicatesNormalSize()&&(w=!1,v=z?!1:h.OUT_OF_VIEW));b=d;n.push(b);q&&J();return b},G=function(b){var c,k,h=ha().wrapToGlobal(D),n=function(a){f.isStr(a)&&(l.provide("vc",function(){return a}),l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{k=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(k)&&"2"===k.call(b)?unescape(b[d].call(b,a,h)):unescape(b[d].call(b,a)),u=!0,n(c||"n")}catch(m){__IntegralASDiagnosticCall("handshakefailure",m,r)}},H=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,
b){return f.isFunction(b[d])})};k||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=s.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},r));return k},E=function(){var a=H();a&&!u&&G(a);return a},I=function(a){a=(new Ca).getVolumeFromContext(a);B=f.isDef(a)?0<a:!1},J=function(){f(n).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});
n=[];q=!0};(function(){x.addEvent(s.getWindow(),"message",function(a){D(a)});l.on({volumeChanged:I});l.provide({videoEventsString:C,videoVersion:function(){var a,b=E();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return p=p||new Id},videoAutoplay:function(){return m=m||new Dd},adNode:E});E();A.listenForResult();y.isApplicable(t)&&y.start(c)})();return{findAdNode:E,getViewStateOverride:function(){return v},isHandshakeComplete:function(){return u},
triggerInitializationEvents:J,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=B;a.isVideoPlayingInFullscreen=!1;if(v){if(v===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:v;a.isVideoPlaying=v===h.IN_VIEW}w&&z&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Jd=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,
b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},pb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},k=function(k,h,n,l){k=c[k];l?(f.isDef(k[h])||(k[h]=[]),k[h].push(n)):k[h]=n;b&&b.isActive()||(b=new oa,d=0,e(!0),b.start());a=!0},p=function(b){f(c).each(function(d,e){var k=c[d],h={type:b,oneTime:!0,minDt:!0,asION:!0};f(k).isEmpty()||(l.trigger("addOutputItem",{output:k},d,h),
c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){p(a);b&&b.kill()});l.on("addThrottledProp",k)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},zb=function(){var a={},b=function(b){a[b]||(a[b]=new na(1,r.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Kd=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,
function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},ab=function(a){var b={},c=a instanceof Array&&a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),l.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},
ea=function(a,b,c){var d=0,e=[],k=function(){var a,c={};e.sort(b);f(e).each(function(b,e){a&&(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){e.push(a)},toString:function(){return f(k()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return e.length===c}}},bb=function(){function a(){}a.build=function(){var a=[],c=l.request("vc"),d={jv3:Da,av3:Da,jvw:Kd,avw:Jd};c&&d[c]&&a.push(d[c]());return a};return a}(),Da=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
function(a,b){return a.code-b.code},h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(A,"load",function(){l.trigger("measureTime",T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new oa;a.onTick({4:function(){l.trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});
a.start()}};P("postMessageDetector",[],function(){var a=!1,b="pmdetector"+r.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=s.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");s.execAtEndOfThread(function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});P("safeFrameDetector",[],function(){l.trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"sf",f.stringifyTriState(t.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var mb=function(){var a=r.asid,b=r.cookieBaseURL,c=r.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=function(){var e;e=new R(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&
a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},nb=function(a,b,c,d,e,f,p){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(q){try{var n=d.baseUrl,s,t,u=f.getDocumentMode();"number"===typeof u?(t=2E3,8===u?t=4E3:8<u&&(t=8E3)):t=m(r.sp_imp_maxLength,2E3);s=t;t=n;var w=n.length,x,A,y=m(r.sp_imp_jsInfo_minLength,0),u="";try{x=s-w-y,0<x&&(A=Ld(q,x,14,b.on("partialUrls")),u+=A.join("&"))}catch(E){a.add(h.ERROR_CODES.IMPRESSION_URLS)}n=t+u;q=n+="&"===n.slice(-1)?"":"&";
var D,w="";try{D=s-n.length,w+=Md(D,"adsafe_jsinfo=",a,b,c,e,f,p)}catch(G){a.add(h.ERROR_CODES.JSINFO),w+="adsafe_jsinfo=e:"+a.toString()}n=q+w;d.macroUrl&&(n+="&"===n.slice(-1)?"":"&",n+=d.macroUrl);d.sendImpression(n);l.trigger("impressionsent")}catch(H){__IntegralASDiagnosticCall("impsend",H,r)}}}},Md=function(a,b,c,d,e,k,l,m){return function(c){var d=c.primary.join(","),k=b,h=0,l=function(a){if(a)return","+a};k.length+d.length+5<=a&&(k+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,
c){k.length+c.length+5<=a?k+=l(c):h+=1}));return k+=",ov:"+h}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?s.getDoc().body&&!m.useFlash()&&(b=(b=m.checkScreenLoc(!0))?b:a):f.isDef(s.getDoc().body)&&!m.useFlash()&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState;b=e.getAvidIds();u=["id:"+r.asid,"c:"+e.getCacheBustId(),"sl:"+u,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&
f.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));a=Nd(a,c,d,e,k,l,m);return{primary:u,secondary:a}}())},Nd=function(a,b,c,d,e,k,l){var m=[];m.push("mn:"+r.mn);m.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());m.push(f(k.params()).toParams());c.on("mrcAudit")&&m.push("dvs:"+s.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===h.IMPRESSION_EVENT;
(c||d)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("uf:"+(l.useFlash()?1:0));m.push("tt:"+r.mode);m.push("et:"+(s.now()-r.birthdate));c.on("swapids")?m.push("oid:"+r.oid):m.push("uid:"+d.unq);m.push("v:17.4.82");m.push("sp:"+(r.isSplitMode?1:0));m.push("ct:"+t.getPageTime());m.push("dtm:"+(c.on("postDts")&&x.getXHR2()?"p":"i"));m.push("gtpl:"+("true"===r.getTpl?1:0));c.on("resolution")&&(m.push("wr:"+f(u.windowSize()).toArray().join(".")),m.push("sr:"+
f(u.screenSize()).toArray().join(".")));(b=function(){var a,b,c;c=N.hashCode(r.asid)+"";b=k.params().br.toUpperCase().charCodeAt(0);-1===c.indexOf(b)&&(a=c);return a}())&&m.push("mf:"+b);r.mainScriptTime&&m.push("mst:"+(r.mainScriptTime-r.birthdate));return m},Ld=function(a,b,c,d){var e,k=[],h=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(h(b))return b}),a=f(a).map(function(a,b){if(!h(b))return b}),f(e.concat(a)).each(function(a,e){var f;
f=e.val;var h=e.key,l;l=24+k.join("&").length+h.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+h,h=k.join("&").length,f.length+h<=b&&k.push(f)}));return k},ub=function(){var a=function(){var a;a=!1;var b=s.getTop();if(b=b&&u.querySelector(b.document,'a[href^="http"]'))a=x.getStyle(b,"background",":before"),a=-1<a.indexOf("rgb(0, 255, 0)");return a},b=function(){var b;try{b=f.stringifyTriState(a()),l.trigger("addOutputItem",
{output:b},"avgrn"),l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,"avgrn1",b)}catch(d){l.trigger("error",h.ERROR_CODES.GREEN)}};return{isApplicable:function(a,b){var e=a.on("avgrn"),f=!a.bootstrapOn("mobOrTab"),l=b.browserIs(h.BROWSERS.CHROME);return e&&f&&l&&t.friendly},start:function(){try{x.whenReady(b)}catch(a){l.trigger("error",h.ERROR_CODES.GREEN)}}}},vb=function(){var a=function(a){a=f(a).map(function(a,b){return b.x+"."+b.y});a=f(a).toION();l.trigger("addOutputItem",{output:a},"avmm",{minDt:!0,
type:h.DT_CODES.AVIREEN});l.trigger("sendMinDt",h.DT_CODES.AVIREEN)},b=function(b){var d;try{20<=b.length&&(d=b.slice(0,20),a(d))}catch(e){l.trigger("error",h.ERROR_CODES.AVIREEN)}};return{isApplicable:function(a,b){var e=a.on("avmm"),f=!a.bootstrapOn("mobOrTab"),l=h.BROWSERS,l=b.browserIs(l.IE)||b.browserIs(l.MSEDGE);return e&&f&&l&&t.friendly},start:function(){try{Od(400,b)}catch(a){l.trigger("error",h.ERROR_CODES.AVIREEN)}}}},kb=function(){return{isApplicable:function(a){a=s.getWindow();return!(!a.navigator||
!a.navigator.plugins)},start:function(a){a=s.getWindow();a=Pd(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},Sd=function(a,b){return{start:function(){try{var c=Qd(),d=c.getMethodName(a),e=new R(b.getEnabledScriptUrl(a)),f=Rd,p=s.getDoc();(new f(p.body||p.head||p.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){l.trigger("error",
h.ERROR_CODES.FEATURE_SCRIPT)}}}},Qd=function(){var a=function(a,c,d){a===r.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:r.asid,constant:h,features:b,context:t,dtBaseURL:r.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},yb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Sd(d,b).start()})}}},wb=function(){var a,b=0,c=0,d=0,e=s.getTop(),k=f.debounce(function(){var b=
s.now(),e=a?(b-a)/1E3:0;1<=e&&5>=e&&d++;a=b;c++},100,e),p=f.debounce(function(){u.contains(e.document,u.getOurNodeInTop())||x.removeEvent(e.document,"mousemove",m)},1E3,e),m=function(){b++;k();p()},q=function(){l.trigger("addOutputItem",{output:{tmm:function(){return b},tma:function(){return c},sma:function(){return d}}},{type:h.DT_CODES.UNLOAD})};return{start:function(){q();x.addEvent(e.document,"mousemove",m)},isApplicable:function(a){return a.on("mmsb")&&!a.bootstrapOn("mobOrTab")&&!t.xDomainIframe}}},
Pd=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=N.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=s.floor(s.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Od=function(a,b){var c=[],d=!0,e=function(f){var h=s.getTop();f=f||h.event;c.push({x:s.round(f.clientX),y:s.round(f.clientY)});d&&s.setTimeout(function(){x.removeEvent(h.document,"mousemove",
e);b(c)},a);d=!1};(function(){var a=s.getTop();x.addEvent(a.document,"mousemove",e)})()},xb=function(){return{start:function(){var a=s.getTop().status;s.getTop().status=s.getTop().status+" ";s.getTop().status===a+" "&&(s.getTop().status=a,l.trigger("addOutputItem",{output:1},"sb"),l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,"sb1",1))},isApplicable:function(a,b){return a.on("mmsb")&&!a.bootstrapOn("mobOrTab")&&!t.xDomainIframe&&b.browserIs(h.BROWSERS.IE)}}};P("videoHoneypot",[],function(){var a=u.createHiddenIframe(!0);
a.setAttribute("name","hpif");r.contextNode.parentNode.appendChild(a);var b=function(b,c){a.contentWindow[b]=function(){return{play:function(){l.trigger("addOutputItem",{output:c},"vh",{minDt:!0,type:h.DT_CODES.VH});l.trigger("sendMinDt",h.DT_CODES.VH);l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,h.DT_CODES.VH+"1",c)}}}},c=function(){f([{pieces:["jwp","la","yer"],abbr:"j"},{pieces:["flo","wpl","ayer"],abbr:"f"}]).each(function(a,c){var f=c.pieces.join("");b(f,c.abbr)})};(function(){var b=5E3,e=function(){a.contentWindow?
c():(b-=100,0<=b&&window.setTimeout(e,100))};e()})()},{tier:h.TIERS.FRAUD,applies:function(a,b,c){b=!a.bootstrapOn("mobOrTab");return a.on("usevh")&&b}});var Rd=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||r.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();l=Math.floor(1E5*Math.random());
b=b+"?t="+h+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Ga()}catch(Td){__IntegralASDiagnosticCall("main",Td,r)}};
try{(function(){var r=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,r,r.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
