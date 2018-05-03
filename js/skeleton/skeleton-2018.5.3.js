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
		version:'17.4.98',
		mtCell: 10,
		mtSample: 5,
		trackMouse : "true",
		exchList:{'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain:'cdn.adsafeprotected.com',
		sp_cdnScripts:{xsca: "static.adsafeprotected.com/xsca.17.4.47.js", sca: "static.adsafeprotected.com/sca.17.4.72.js", main: "static.adsafeprotected.com/main.17.4.98.js"},
		protocol:'https',
		jsref : "",
		asid : "7c48bfa5-4ef0-11e8-b2ce-98f2b3ea203c",
		allowViewability : "true",
		jsFeatures : "cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1",
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
		mn: "app82",
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

__IntegralASConfig.initialize=function(n,B,L){function Da(){var l;O.startSystem();k=O.getAggregator();k.provide({omidAdSessionContext:{}});l=__IASOmidVerificationClient;k.provide({omidVerificationClient:l});l=[{environment:new ea(l),adSessionReadyStrategy:new Ea(fa,l)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){fa()}}}];(new Fa(l)).resolve().adSessionReadyStrategy.start()}function fa(){var l,a=S.instantiateModules();S.killRequest(a.mErrors)||(l=S.preImpression(a.mDataTransfer,
a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t),S.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,l,a.mVideo),S.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t))}var k,S=function(){function l(a){var b=new Ga(a,t),f=new Ha,g=new Ia(a,t),s=Ja(a,t),m=(new Ka(n,t,a)).resolve(),p=[b],l=[];
s.applies()&&p.push(s);g.applies()&&p.push(g);f.applies(a,t)&&p.push(f);d(m).each(function(a,b){p.push(new La(b,t));l.push(b.id)});0<l.length&&k.trigger("addOutputItem",{output:l},"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0});return p}function a(a,b,f,g,s,m,p,l,x,v){n.tpiLookupURL&&Ma(p,l).init(n.tpiLookupURL);t.isDomless()||v.isStarted()&&v.sendOriginList();O.runAll();r.execAtEndOfThread(function(){var m;try{m={output:(new Date).getTime()-s},a.addItem(m,"sinceFw",{type:h.DT_CODES.ADTALK}),d.isDef(b.loopStarted())&&
a.addItem({output:b.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK}),f.isApplicable(t)&&f.sendAdTalkCall()}catch(p){g.add(h.ERROR_CODES.ADTALK_DELAY)}})}function b(b,e,f,g,s,m,p,l,d){var v;"true"!==n.minimizeCalls&&(v=(new Date).getTime(),r.execAtEndOfThread(function(){a(b,e,f,g,v,s,m,p,l,d)}))}return{startViewabilityMeasurementStrategies:function(a,b,f,g){var s=l(a);return d(s).map(function(s,p){var l;l=new Na(p,b);var d=(new Oa(f,a,p.rts)).getCallbacks(),d=new Pa(g.createPingJobs(p.type,p.timeInViewThresholds,
d,p.metricId));l=p.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Qa(l,p.minUnit,d,t.isVideo()):new Ra(l,new Y(p.minUnit),d);l.start();return l})},killRequest:function(a){var b=!1,f,g;try{d.isDef(n)&&d.isDef(n.killPhrases)&&""!==n.killPhrases&&(f=n.adsafeSrc?n.adsafeSrc:n.requrl+n.reqquery,g=n.killPhrases.split(","),d(g).each(function(a,c){c=decodeURIComponent(g[a]).replace(/^\s+|\s+$/g,"");-1!==f.search(c)&&(b=!0)})),n.doNothing&&(b=!0)}catch(s){a.add(h.ERROR_CODES.KILL_IT)}return b},
instantiateModules:function(){var a,b,f,g,s,m,p,l,d={};k=O.getAggregator();d.mFeatures=k.provide("features",Sa());k.provide("mobileApp",function(){return a=a||new Ta(d.mFeatures)});k.provide("avidJsClient",function(){return b=b||new Ua(r.getWindow())});k.provide("context",t);d.mBrowser=k.provide("browser",(new Va).createInstance());d.mErrors=Wa();d.mIds=k.provide("ids",Xa());d.iOutput=new Ya(k);f=ga();d.mComm=(new Za).createInstance(d.mErrors,f);d.viewabilityMeasurement=(new $a(new ab(d.mIds),d.mFeatures,
d.mBrowser)).create();d.mFeatures.on("swapids")&&(n.oid=n.asid,n.asid=d.mIds.unq);d.mAdTalk=(new bb).createInstance(d.mFeatures);g=cb();f=db(k);s=k.provide("mPage",(new eb).createInstance());d.mAncestorOrigins=fb();d.mPageUrls=k.provide("pageUrls",(new gb).createInstance(d.mAncestorOrigins,r));m=hb();k.provide("ieXDomainViewability",ib(d.mBrowser));p=jb(d.mBrowser);d.mVideo=k.provide("video",!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:kb(n.videoId,d.mFeatures,m));lb(mb.build());
p=(new nb).createInstance(d.mErrors,p,d.mFeatures);s=(new ob).createInstance(p,d.mErrors,s,t);l=k.provide("jobFactory",pb(f));d.mDataTransfer=qb(p,d.mErrors,d.mFeatures,d.mIds,d.iOutput,d.mBrowser,m,g);g=rb(d.mErrors,d.mFeatures,k,f);d.mMode=sb(g,d.mFeatures,d.viewabilityMeasurement.isImmediate());d.mViewability=k.provide("viewability",tb(new C,d.viewabilityMeasurement,d.mBrowser,d.mDataTransfer,d.mFeatures,k,d.iOutput,s,m,d.mVideo));S.startViewabilityMeasurementStrategies(d.mFeatures,d.mViewability,
f,l);d.loopDelay=ha();d.mDataTransfer.setViewabilityMod(d.mViewability);return d},preImpression:function(a,b,f,g,s,m,p,d,l,v){var F,w,A,E,z;if(f.isApplicable(v))try{f.start(),g.addItem(f.getFrameMap(),"fm"),l.on("fm2")&&g.addItem(f.getFrameMapIncludingPeerCase(),"fm2"),l.on("idMap")&&(F=f.getIdMap())&&g.addItem(F,"idMap")}catch(r){s.add(h.ERROR_CODES.ADTALK_GENERAL)}m.isApplicable(p,l,v)&&m.start();try{z=d.detectTopURL(),l.on("exch")&&(w=(new ub).createInstance(s,g),w.parse(z)),A=vb(),A.isApplicable(l)&&
A.start(l),v.usesGroupMCustomMetric()&&wb(),E=xb(),E.isApplicable(l)&&(E.start(),k.trigger("sendCookie"))}catch(n){s.add(h.ERROR_CODES.IMPRESSION_LEADUP)}return z},sendImpression:function(a,b,f,g,s,m,p,l,x){try{yb(a,b,f,g,s,m,p).send(l),d.isFunction(x.triggerInitializationEvents)&&x.triggerInitializationEvents()}catch(v){__IntegralASDiagnosticCall("impsend",v,n)}},postImpression:function(a,e,f,g,s,m,p,d,l,v,F,w,A){try{var k=zb();k.start();k.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,
h.DT_SLOT.FRAUDEXP]);var z=Ab(a,e,f);z.isApplicable(g)&&z.start();var r;g.bootstrapOn("getTpl")&&g.on("usetpl")&&(r=Bb(s,m,p,e,d),r.init());b(d,l,v,p,g,s,m,e,w);F&&F.start&&F.start();A.isDomless()||Cb().start(["sca","xsca"],g);Db();O.runTier(h.TIERS.VIEWABILITY);var n=Eb();n.isApplicable(g)&&(n.start(),R.recordBlockingTime(),R.setupOnLoadTracking(),R.setupBrowserDelayTracking())}catch(t){p.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),d=function(d){return new D(d)},D=function(d){this.iterable=d};D.prototype.isObj=
function(d){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return d?a:b};D.prototype.isArray=function(){return this.iterable instanceof Array};D.prototype.isEmpty=function(d){return 0===this.keys(d).length};D.prototype.each=function(d,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,e=b.length;c<e;++c)d(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&d(c,b[c])};D.prototype.map=function(d,a){var b=[];this.each(function(c,e){var f=d(c,e);if(void 0!==
f||a)b[b.length]=f});return b};D.prototype.stringify=function(l,a){a=a||",";var b=[];this.each(function(a,e){var f=l(a,e);d.isDef(f)&&b.push(f)});return b.join(a)};D.prototype.toION=function(l,a){var b,c="[",e="]";a=a||0;l=l||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return d(c).toION(l,a)}):(c="{",e="}",b=this.map(function(b,c){var e="string"===typeof b&&-1!==b.indexOf("NULL"),m=d(c).toION(l,
a);return e?m:(l[b]||b)+":"+m}));return c+b.join(",")+e};D.prototype.compareTo=function(d){var a=!1;this.each(function(b,c){d[b]!==c&&(a||(a={}),a[b]=c)});return a};D.prototype.toParams=function(d){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},d)};D.prototype._privateMixin=function(l,a,b){for(var c in a)d.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(l[c]=a[c]);return l};D.prototype.mapToObj=function(l){var a={},b=this;this.each(function(c,e){var f=l(c,
e);d(f).isObj()&&b._privateMixin(a,f)});return a};D.prototype.invert=function(){return this.mapToObj(function(d,a){var b={};b[a]=d;return b})};D.prototype.mixin=function(d,a){return this._privateMixin(this.iterable,d,a)};D.prototype.find=function(d){var a;this.each(function(b,c){d(b,c)&&(a=c)});return a};D.prototype.findFirst=function(d){var a,b;this.each(function(c,e){!b&&d(c,e)&&(a=e,b=!0)});return a};D.prototype.keys=function(d){var a=[];this.each(function(b){a.push(b)},d);return a};D.prototype.asStrings=
function(){var d={};this.each(function(a,b){d[a]=""+b});return d};D.prototype.selectProperties=function(l){var a={},b=this;d(l).each(function(c,e){d.isDef(b.iterable[e])&&(a[e]=b.iterable[e])});return a};D.prototype.filter=function(l,a){return this.map(function(a,c){var e;if(d.isUndef(l)||d.resolve(l,a,c))e=c;return e},a)};D.prototype.toArray=function(){return this.map(function(d,a){return a})};D.prototype.JSONStringify=function(){var d,a,b=!1;B.Prototype&&B.Prototype.Version&&-1===B.Prototype.Version.indexOf("1.7")&&
(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);d=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return d};D.prototype.contains=function(l){var a=d(this.iterable).findFirst(function(a,c){return l===c});return d.isDef(a)};d.toBase=function(d,a){var b,c=0>d,e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];d=c?-d:d;do b=d%a,f.push(e[b]),d=(d-b)/a;while(0<d);f=f.reverse().join("");return c?"-"+f:f};d.isDef=function(d){return"undefined"!==
typeof d};d.isUndef=function(l){return!d.isDef(l)};d.isBool=function(d){return"boolean"===typeof d};d.noop=function(){};d.identity=function(d){return d};d.isFunction=function(d){return"function"===typeof d};d.isStr=function(d){return"string"===typeof d};d.useIfDef=function(l){return d.isDef(l)?l:!1};d.stringifyTriState=function(d){return!0===d?1:!1===d?0:"na"};d.getNum=function(d){d=parseInt(d);isFinite(d)||(d=-1);return d};d.resolve=function(l){var a=d(arguments).toArray();a.shift();return d.isFunction(l)?
l.apply({},a):l};d.flatJSONParse=function(d){var a,b,c,e=/"(\w+)":(\d+|(?:"([^"]*)"))/g,f={};for(c=e.exec(d);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=e.exec(d);return f};d.debounce=function(d,a,b){var c,e=b||B;return function(){var b=this,g=arguments;e.clearTimeout(c);c=e.setTimeout(function(){c=null;d.apply(b,g)},a)}};d.last=function(d){return d[d.length-1]};d.collapseArgsIntoHash=function(d,a){var b={};a?b[d]=a:b=d;return b};d.fromBoolToNum=function(d){return d?1:0};d.isNumeric=function(l){return d.isDef(l)&&
null!==l&&!isNaN(l)};var O=function(){var l,a={},b=[],c=[],e=function(){var a={},b=d(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,e,f,p,q){q=q||{};var x,v,h=function(a){0===b.length&&(b=d(a).map(function(a,b){return l.request(b)}))},w=function(){if(!x){var a=[];x=!0;h(["features","browser","context"]);q.emits&&(c.events=new C);if(!q.applies||q.applies.apply(q,b))v=!0,a=d(f).map(function(a,b){return l.request(b)},!0),a.push(c),d(c).mixin(p.apply({},a))}};(function(){var b=q.tier;
d.isDef(b)&&(a[b]=a[b]||new Z,a[b].push(w))})();l.provide(e,function(){var a;w();v&&(a=c);return a});return c};e.runAll=function(){var b=d(a).keys().sort(function(a,b){return a-b});d(b).each(function(a,b){e.runTier(b)})};e.runTier=function(b){a[b].run();delete a[b]};e.startSystem=function(){l=l||new ia;d(c).each(function(a,b){f.apply({},b)})};e.getAggregator=function(){return l};return e}(),h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",
PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",
MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",
BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",
ANCESTOR_ORIGINS:"o",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",
DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,
0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},W=function(){return{applies:function(d,a){var b=k.request("mobileApp");return(d.browserIs(h.BROWSERS.CHROME)||d.isAndroidWebViewBrowser()||d.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&d.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},wb=function(){var d,a,b=!1,c=k.request("mPage"),e=function(){!b&&a&&d&&!c.isHidden()&&(b=!0,k.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};
k.on("primaryadfound",function(a){d=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;e()});k.on("impressionsent",function(){a=!0;e()});c.onHiddenChange(e)},cb=function(){var l=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};k.on("newScreenEvent",function(c){c=d(c).selectProperties(d(b).keys());c=d(c).asStrings();var e=d(c).compareTo(a);e&&(e.t=t.getTagTime(),l.push(e));d(a).mixin(c)});return{toString:function(){return d(l).toION(b)}}},ia=function(){var l=new Fb,a=new C;return d(l).mixin(a)},
C=function(){var l={},a={},b=function(b,c,g){if((b=a[b])&&0!==b)return g&&(b=b.slice(0,1)),d(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){l[a]=l[a]||new Z;l[a].push(b,c)};return{on:function(a,f){var g={};f?g[a]=f:g=a;d(g).each(c);d(g).each(b)},once:function(a,f){b(a,f,!0)||c(a,f,1)},trigger:function(a){var b=d(arguments).toArray();b.shift();var c;(c=l[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=d(arguments).toArray();c.shift();var g=b;a[g]=a[g]||[];a[g].push(c);(g=l[b])&&
g.run.apply({},c)}}},$=function(){var l=function(a,c,e){var f,g=c.length,s=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);e&&e(a,c);if(s&&s.length){for(a=0;a<s.length;a++)(f=s[a])&&u.isWindow(f)&&(c[g]=a,l(f,c,e));c.pop()}},a=function(a,c){try{l(c||top,[0],a)}catch(e){}};return{traverse:a,getFrames:function(b,c){var e=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<e.length;b++)if(e[b]===a){c=!1;break}b=c}b&&e.push(a)},c);return d(e).filter(b)}}},Z=function(){var l=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;l[l.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;d(l).each(function(b,c){c.apply({},a)})}}},Pa=function(l){return{doEligibleJobs:function(a){var b=l[0],c=b&&b.time;d.isDef(c)&&a>=c&&(b.task(),l.shift())},getNextJob:function(){return l[0]}}},Gb=function(){var l,a=new ja,b=function(b,e,f,g){var s,m,p,q;if(JSON&&JSON.parse)try{s=JSON.parse(b.data),m=b.source,q=d.noop,e(s)&&(g&&(p=g(m,s))&&(q=function(){a.send(function(){return p},
m)}),f(b,s,q))}catch(l){s&&k.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,e,f){l=function(g){b(g,a,e,f)};y.addEvent(B,"message",l)},stop:function(){l&&y.removeEvent(B,"message",l);l=null}}},ja=function(){var l=function(a){return d(a).isObj()?[a]:(new $).getFrames(a)},a=function(a){return d(a).mapToObj(function(a,b){var f;d.isFunction(b)||(f={},f[a]=b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var e=l(c);d(e).each(function(c,e){var s;s=d.resolve(b,
e)||{};s.sentTime=r.now();s=a(s);e.postMessage(d(s).JSONStringify(),"*")})}}}},Hb=function(l,a){return{onAll:function(b){var c={};d(a).each(function(e,f){l.on(f,function(){c[f]=1;d(c).keys().length===a.length&&(c={},b())})})}}},Ya=function(l){var a=0,b={},c=function(b,c,e){if(d.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=e||{};this.output=function(){var a=d.resolve(b.output);this.props.asION&&(a=d(a).toION());return a}},e=function(a){var c,
e,f=[];for(c in b)b.hasOwnProperty(c)&&(e=a(c,b[c]))&&f.push(e);return f},f=function(a,e,f){f=f||e;f="string"!==typeof f?f:{};var p=function(a,e,f){a=new c(a,e,f);b[a.id]=a};d(a.output).isObj()&&!f.asION?d(a.output).each(function(a,b){p({output:b},a,f)}):p(a,e,f)};l.on("addOutputItem",function(a,b,c){f(a,b,c)});return{addItem:f,filterOutput:function(a,b){return e(function(c,e){var f=e.props,l;a(f)&&(l=e.output(),f.encode&&(c=encodeURIComponent(c),l=encodeURIComponent(l)),d.isFunction(b)?b(c,l):b[c]=
l)})},iterate:e,cleanup:function(){e(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Fb=function(){var l={},a=function(a,c){l[a]=c};return{request:function(a){var c,e=l[a],f=d(arguments).toArray();f.shift();d.isUndef(e)||(c=d.isFunction(e)?e.apply({},f):e);return c},provide:function(b,c){c?l[b]=c:d(b).each(a);return c}}},ob=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new Ib:new Jb(d,a,b,c)}}},Jb=function(l,a,b,c){var e;return{collect:function(){var a=
l.find(),g=a.getOutOfViewReasons(),s=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&e?e:J(u.calcWinDims()),p=a.getDims();e=m;if(!a.hasAd()||!m.hasValidDims()||!p.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:m,adDimensions:p};!0===s&&g.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:g.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),
reason:g.join("."),obstructed:d.stringifyTriState(a.isObstructed()),isHidden:d.stringifyTriState(a.isHidden()),tabHidden:d.stringifyTriState(s),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Ib=function(){return{collect:function(){return{}}}},Kb=function(l){l=l||d.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===
a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=l(b);c();0!==a.length&&b===f.state||a.push({state:b,duration:0})}}},ka=function(d,a){var b=d||1,c=0,e=0,f,g=0;return{start:function(){0===c%b&&(f=r.now())},stop:function(){var s=f||a;0===c%b&&(g+=r.now()-s,e++);c++},getTime:function(){return g},getCount:function(){return e}}},la=function(){var l,a=0,b=0,c=new C(!0),e=function(){l&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(e):f())},f=function(){l=!1;a=0};return{onTick:function(a,
e){var f=d.collapseArgsIntoHash(a,e);d(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},start:function(){l||(l=!0,r.execAtEndOfThread(e))},kill:f,isActive:function(){return l}}},Lb=function(d,a){var b,c=a,e=function(a){b||(a&&d(),b=r.setInterval(d,c))},f=function(a){a&&d();r.clearInterval(b);b=null};return{start:e,stop:f,updateFrequency:function(a,b){c=a;f();e(b)}}},Y=function(d){var a,b,c=0,e=t.getTagTime(),f=0,g=!1;return{getTotalTime:function(){return f},stop:function(){c=0;e=t.getTagTime();
g=!1},mark:function(){a=g?t.getTagTime()-e:0;c+=a;c>=d&&(b=c-a<d,f+=b?c:a);e=t.getTagTime();g=!0}}},T=function(l,a){var b=l||n.adsafeSrc||n.requrl;b&&0===b.indexOf("http")||(b=n.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],e=b[2],f=b[3],g=b[4],s=b[5],m=l?b[6]:"",p=a?b[7]:"",q={},x=function(a){d.isDef(a)&&(g=a);return g},h=function(a){d.isDef(a)&&(s=a);return s},k=function(a,b){return a+"="+d(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,
c){var e,f;(e=q[b])?q[b]=e+c:a&&p.length&&(e=p.split(b),f=1<e.length)&&(f=e[1].split("&")[0],e=[e[0],f].join(b),p=p.replace(e,e+c))},fullDom:c,hostname:f,sub:x,master:h,setParam:function(a,b){q[a]=q[a]||{};d(b).isObj()?d(q[a]).mixin(b):q[a]=b},path:function(a){m=a},toString:function(){var a=x()?x()+".":"",b=m?"/"+m:"",c;p||!d(q).isEmpty()?(c=d(q).isEmpty()?"":d(q).stringify(k,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return e+"://"+a+h()+b+c}}},Db=function(){var l=function(a){var c=[];d(a).each(function(a,
b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var e;c&&c.id&&(e=c.id.replace(/[^\w-_.>\/]/g,""));return e};(function(){var b;try{if(t.friendly&&!t.isMobileApp()){var c,e;if(c=u.getOurNodeInTop()){var f=u.getAncestorNodes(c);e=d(f).map(a)}(b=e=e&&l(e))&&k.trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0})}}catch(g){k.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}})()},fb=function(){var l,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,
"")};return{isApplicable:function(a,b,f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{l=r.getWindow().location.ancestorOrigins,a=!0}catch(b){k.trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return l&&l.length||0},getTopDomain:function(){return d.last(l)},sendOriginList:function(){var a;a="ao:"+(l?d(l).map(b).reverse():[]).join(",");k.trigger("addOutputItem",{output:a},"tpiLookup",
{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});k.trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},Bb=function(l,a,b,c,e){var f=function(a,b,c){e.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(e){try{a.diagnostic("c");var m=e.length,g=0,q=0;f(m,0,0);d(e).each(function(a,b){l.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){f(m,g,++q)},!0);f(m,++g,q)})}catch(x){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+n.asid;
l.jsonp(a,g)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},rb=function(d,a,b,c){return{enabled:"true"===n.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===n.accountForSadImps&&c.measure(a),n._onAPIResult&&n._onAPIResult(a)}catch(f){d.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Va=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new Mb:new Nb}}},Nb=function(){var l=h.BROWSERS,a,b=function(){var a="0",b=r.getWindow(),c=function(a){return a.replace(/\D+/g,
",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var e=r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{e.AllowScriptAccess="always"}catch(f){a="6"}}catch(d){}a=c(r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(s){try{b.navigator.mimeTypes[h.FLASH_MIME].enabledPlugin&&(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(g){}}return a},c=function(){d.isUndef(a)&&(a=b());return a},e=function(a){return g()===
a},f=function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:h.NA},g=function(){var a="u",b=r.getWindow();try{d.isDef(b.opera)&&d.isDef(b.opera.buildNumber)?a=l.OPERA:d.isDef(b.mozInnerScreenY)?a=l.GECKO:d.isDef(b.chrome)&&d.isDef(b.chrome.csi)?a=l.CHROME:d.isDef(b.msWriteProfilerMark)&&d.isDef(b.crypto)?a=l.MSEDGE:d.isDef(b.attachEvent)||d.isDef(b.msCrypto)?a=l.IE:d.isDef(b.WebKitPoint)&&(a=l.WEBKIT)}catch(c){}return a},s=function(){var a=!1,b=r.getWindow();d.isDef(b.navigator)&&d.isDef(b.navigator.userAgent)&&
(a=b.navigator.userAgent);return a};return{browserIs:e,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!d.isFunction(a.postMessage))},getFlashVersion:c,getDocumentMode:f,getBrowserType:g,getUserAgent:s,params:function(){var a=g(),b=c(),s;s=5;var x=r.getWindow(),v=r.getDoc();
e(l.IE)?x.msCrypto?s=11:x.atob?s=10:x.addEventListener?s=9:x.JSON&&v.querySelector?s=8:x.XMLHttpRequest?s=7:v.compatMode&&(s=6):s=h.NA;var x=f(),v=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],k=h.NA,w=r.getDoc(),A=w.createElement("div");if(e(l.IE))try{if("-ms-ime-align"in w.documentElement.style)k="11";else for(A.style.behavior="url(#default#clientcaps)",w=0;w<v.length&&!(k=A.getComponentVersion(v[w],"componentid").replace(/,/g,
"."));w++);}catch(E){}v=k;k=h.NA;A=r.getWindow();d.isDef(A.navigator)&&d.isDef(A.navigator.appName)&&(k=A.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,bv:s,dm:x,abv:v,an:k}},isAndroidWebViewBrowser:function(){var a=s(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return d(b).findFirst(function(b,c){return N.contains(a,c)})};return N.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=s())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));
return b}}},Mb=function(){var d=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",bv:a(),dm:a(),abv:a(),an:a()}},browserIs:d,getUserAgent:d,hasPostMessage:d,hasFlashEnabled:d,hasAncestorOrigins:d,hasIntersectionObserver:d,isAndroidWebViewBrowser:d}},Za=function(){return{createInstance:function(d,a){return t.isDomless()?new Ob(a):new Pb(d,
a)}}},Pb=function(l,a){var b=function(a,b){var c,e,f=n.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];e=c[0]+b+c[1];"true"===n.forceAppend?"script"!==a?(c=L.createElement("DIV"),c.innerHTML=e,f.appendChild(c.childNodes[0])):(c=L.createElement("SCRIPT"),
c.src=b,f.appendChild(c)):L.write(e)},c=function(a,b,c){var e=!c&&y.getXHR2();e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},e=function(a,b,c,e){var f=L.createElement("script");c=c||n.contextNode.parentNode;f.type="text/javascript";f.src=a;b&&(f.onload=b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));d.isDef(c)&&c.appendChild(f)},f=function(a){d.isFunction(a)?a({iasImpId:n.asid}):a&&
"string"===typeof a&&c(a,void 0,!0)},g=function(b,c,f,d){e(a.wrap(b,c,f,d))};k.on({addNode:b,send:c,exec:e,notify:f,jsonp:g});return{addNode:b,send:c,exec:e,notify:f,jsonp:g}},Ob=function(l){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";k.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);k.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){k.request("omidVerificationClient").injectJavaScriptResource(a,
b||function(){})},e=function(a){d.isFunction(a)?a({iasImpId:n.asid}):a&&"string"===typeof a&&b(a)},f=function(a,b,e,f){c(l.wrap(a,b,e,f))};k.on({addNode:a,send:b,exec:c,notify:e,jsonp:f});return{addNode:a,send:b,exec:c,notify:e,jsonp:f}},t=function(){var l="undefined"===typeof window,a="undefined"!==typeof window&&"undefined"!==typeof top&&window!==top,b=function(){var a=!1;if(l)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!l&&d.isDef(r.getWindow().mraid)},e=function(){var a=
!1;if(!l)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&d.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},f=function(){return n.mobOrTab},g=function(a){return!1===d(n.customViewability).isArray()?!1:0<d(n.customViewability).filter(function(b,c){return N.contains(c.id,a)}).length},s=function(){return g("grpm")||n.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(l)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(e){}a=
b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-n.birthdate},getPageTime:function(){var a=h.NA;!l&&d.isDef(window.chrome)&&d.isDef(window.chrome.csi)&&d.isFunction(window.chrome.csi)&&(a=r.round(chrome.csi().pageT));return a},isVideo:function(){var a;if(!(a=-1!==n.mode.indexOf("jsvid"))){var b;a=!1;if(!l){var c=k.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(f){}}(b=a)||(b=k.request("omidVerificationClient"),
a=!1,c=k.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||e());a=b}return a},isMobileApp:function(){return l||d.isDef(r.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;l||(a=(a=n._cl_adpath)&&d.isStr(a));return a},isAvid:function(){return!l&&d.isDef(r.getWindow().avid)},isOmid:function(){var a=k.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return l},isAvidNative:function(){var a=!1;if(!l){var b=k.request("avidJsClient");b.isAvidAvailable()&&
(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;l||(a=void 0!==aa());return a},isMraid:c,isSafeFrame:function(){var a=!1;l||(a=d(r.getWindow().$sf).isObj(!1)&&d(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:e,isDeviceTypeGroupMobile:f,usesIASFullyInViewCustomMetric:function(){return g("fiv")||n.use100v},isNativo:function(){var a=!1;l||(a=(a=n._cl_adpath)&&
N.contains(a,".ntv"));return a},usesGroupMCustomMetric:s,isCeltra:function(){var a=!1;l||(a=ma().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return s()&&f()},usesZeroPivCustomMetric:function(){return!1===d(n.customViewability).isArray()?!1:0<d(n.customViewability).filter(function(a,b){return d(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length}}}(),y={addEvent:function(l,a,b,c){d.isDef(l.addEventListener)?"mouseenter"===a?l.addEventListener("mouseover",
y.mouseEnter(b),c):"mouseleave"===a?l.addEventListener("mouseout",y.mouseEnter(b),c):l.addEventListener(a,b,c):d.isDef(l.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),l.attachEvent("on"+a,b))},removeEvent:function(l,a,b){d.isDef(l.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),l.removeEventListener(a,b)):d.isDef(l.detachEvent)&&l.detachEvent("on"+a,b)},mouseEnter:function(d){var a=this;return function(b){var c=b.relatedTarget;
this===c||a.isAChildOf(this,c)||d.call(this,b)}},isAChildOf:function(d,a){if(d===a)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d},getStyle:function(d,a,b){var c="",e=L.defaultView&&L.defaultView.getComputedStyle;b=b||"";e?c=(d=L.defaultView.getComputedStyle(d,b))?d.getPropertyValue(a):c:d.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=d.currentStyle[a]);return c},getXHR2:function(l,a){var b,c;d.isDef(B.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&
(b=c)):d.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(l,a){if(t.isDomless())r.setTimeout(function(){l()},50);else{var b=a||(t.xDomainIframe?L:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},e=this;(function(a){var g=function(){a(!0)};d.isFunction(L.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(g):e.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(l)}},
isSandboxed:function(d){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(e){}if(a)d=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(d.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}d=a}c=d}return c},styleElement:function(l,a){if(l&&d(l.style).isObj()&&d(a).isObj()){var b="";d(a).each(function(a,e){b+=a+": "+e+" !important;"});l.style.cssText=b}},nodeIsAbsolutelyPositioned:function(d){return"absolute"===
y.getStyle(d,"position")||d.style&&"absolute"===d.style.position}},X=function(l){var a,b=X.callTypeCounter,c=[h.DT_CODES.ADTALK],e={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=h.DT_CODES;d("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,f){a[b[f]]=e[f]});return a};a=function(){var a=f()[l],e=
b&&b[l];d.isDef(e)&&0!==e&&d(c).contains(l)&&(a=a+"."+e);e=b[l];b[l]=d.isDef(e)?e+1:1;return a}();return{callType:l,enumerator:a}};X.callTypeCounter={};var qb=function(l,a,b,c,e,f,g,s){var m=0,p=0,q=!1,x=function(a,f,s,l,x,v){s=s||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==g.getCurrentLoc()))try{var u=n.dtBaseURL,K=new T(u,!0),y=r.now();
k.trigger("preSendDt",a);u||(K.path("dt"),b.on("usedtdomain")&&K.sub("dt"));F(K,a,f);x&&x.field&&K.setParam(x.field,x.value);l||w(K,a);k.trigger("send",K,function(){p+=1;m=r.now()-y;d.isFunction(v)&&v()},s);a===h.DT_CODES.UNLOAD&&(q=!0);e.cleanup()}catch(M){__IntegralASDiagnosticCall("dt-"+a,M),k.trigger("error",h.ERROR_CODES.PHONE_HOME)}};l=function(){q||x(h.DT_CODES.UNLOAD,-1,!0)};var v=function(a,c){var e={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=n.mode,e=e[a]||e[f];b.on(c||f+"Diag")&&
e&&x(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:e})},F=function(a,b,f){var s=new X(b);f=d.isDef(f)?f:s.enumerator;a.setParam("asId",n.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};e.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},w=function(c,d){var q,l={};e.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===d},function(a,b){c.setParam(a,b.replace("%3A",":"))});g.fastForward();
if(d===h.DT_CODES.VIDEO_EVENTS||t.isVideo()&&d===h.DT_CODES.CUSTOM)if(q=k.request("videoEventsString"))l.ve=q;if(d===h.DT_CODES.CUSTOM||d===h.DT_CODES.UNLOAD||d===h.DT_CODES.VIDEO_EVENTS)l.clog=s;d===h.DT_CODES.UNLOAD&&(l.ndt=p);-1!==n.mode.indexOf("jsvid")&&(l.vv=k.request("videoVersion"));l.NULL1=b.output();l.NULL2=g.stringify(10);l.em=t.embedded;l.fr=t.friendly;l.uf=0;l.e=a.toString();l.tt=n.mode;l.dtt=m;e.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===d);b&&a.oneTime&&
(a.flagForRemoval=!0);return b},l);c.setParam("tv",l);c.setParam("br",f.getBrowserType())};k.on({sendDt:function(a,b,c){x(a,d.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:v,updateDtCount:function(){p++},unload:l});return{send:x,unload:l,diagnostic:v,setViewabilityMod:function(a){}}},J=function(l){var a={},b=!1,c=function(){var a=1===l.nodeType?u.nodeIsHidden(l):0===l.width||0===l.height;return b?!1:a},e=function(){var b={};d(a).each(function(a,c){b[a]=r.round(c)});
return b},f=function(a){return d.isNumeric(a)||d.isUndef(a)},g=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;l!==B.parent&&(1!==l.nodeType?a=l:d.isDef(l.getBoundingClientRect)&&(b=u.getRect(l),d(a).mixin({x:d.useIfDef(b.x)||b.scrX,y:d.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&d.isNumeric(a.width)&&d.isNumeric(a.height)},toString:function(){var a=e();return[a.scrX,a.scrY,
a.width,a.height].join(".")},getRounded:e,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},u={findElementsWithSize:function(l){var a=[],b=function(c){1>u.getNodeArea(c)?d(c.children).each(function(a,c){b(c)}):a.push(c)};b(l);return a},nodeIsHidden:function(d){var a=this.getRect(d),b=0!==parseInt(y.getStyle(d,"width"))&&0===a.width,a=0===a.width||0===a.height;d="hidden"===
y.getStyle(d,"visibility");return b||a||d},calcWinDims:function(){var d,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),d={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){k.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),d={}}return d},windowSize:function(){var l={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,d.isDef(top.innerWidth))l.width=top.innerWidth,l.height=top.innerHeight;
else if(d.isDef(b.clientWidth))l.width=b.clientWidth,l.height=b.clientHeight;else if(d.isDef(a.clientWidth))l.width=a.clientWidth,l.height=a.clientHeight;else throw l.width=l.height=0,"";else d.isDef(window.outerWidth)&&(l.width=window.outerWidth,l.height=window.outerHeight);return l},browserWindowPosition:function(){var l=0,a=0;d.isDef(window.screenX)?(l=window.screenX,a=window.screenY):d.isDef(window.screenLeft)&&(l=window.screenLeft,a=window.screenTop);return{scrX:l,scrY:a}},getNodeArea:function(d){var a=
-1;d&&(d=u.getRect(d),a=d.width*d.height);return a},getRect:function(l){var a={},b=u.browserWindowPosition();l=l.getBoundingClientRect();d.isUndef(l.x)&&(a.x=l.left,a.y=l.top);d.isUndef(l.width)&&(a.width=l.right-l.left,a.height=l.bottom-l.top);d(a).mixin(l,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(l){l=l.document;return l.documentElement&&d.isDef(l.documentElement.clientWidth)&&l.documentElement||l.body},getPlaceholderSpan:function(){var l=L.createElement("span");d(l.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});l.innerHTML=".";return l},createImage:function(){var l=t.friendly&&r.getTop().Image;return d.isFunction(l)?new l:new Image},createHiddenIframe:function(d){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,d?{display:"none"}:b);return a},tagNameIs:function(d,a){return d.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(d,
a){var b,c,e,f=1E4,g=1E4;b=y.nodeIsAbsolutelyPositioned(d);e=!u.tagNameIs(d,"OBJECT");if(null!==d.parentNode&&!b&&e&&!u.tagNameIs(a,"BODY")){e=d;do e=e.parentNode,b=!u.tagNameIs(e,"OBJECT"),c="inline"!==y.getStyle(e,"display"),b&&c&&(b=u.getRect(e),f=b.width<f?b.width:f,g=b.height<g?b.height:g);while(e.parentNode!==L&&e!==a)}return{width:r.round(f),height:r.round(g)}},findChildWithLargestContent:function(d){var a=k.request("mobileApp").isMobileAppEnvironment(),b=function(b){for(var c=b;b.parentNode!==
d&&"inline"!==y.getStyle(b.parentNode,"display");){var e;if(!(e=!a)){e=b.parentNode;var m=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))m=!1;e=m}e&&(c=b.parentNode);b=b.parentNode}return c},c=null,e=function(a){var b,c,e=null,p=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var q=a[b],x=u.getNodeArea(q),h;if(h=x>p){h=void 0;if(h=q.parentNode===d)if(h=void 0,h="DIV"===q.nodeName)if(h=void 0,h=""===q.style.backgroundImage){var k=
h=void 0,w=q.childNodes;for(h=0;h<w.length;h++)1===w[h].nodeType&&(k=!0);h=!k}h=!h}h&&(e=q,p=x)}return e}(function(a){var b,c,e,d,q=[],l="iframe img a object embed div".split(" ");b=0;for(c=l.length;b<c;b++){var h=a.getElementsByTagName(l[b]);if(h.length)for(e=0,d=h.length;e<d;e++)q.push(h[e])}return q}(d));e&&(c=b(e));return c},screenSize:function(){if(t.isDomless())return{width:0,height:0};var l={width:-1,height:-1};try{d.isDef(window.screen)&&(l={width:window.screen.width,height:window.screen.height})}catch(a){}return l},
calcMonDims:function(){var l=d(u.screenSize()).mixin({scrX:0,scrY:0});d.isDef(screen.availLeft)&&(l={scrX:window.screen.availLeft,scrY:window.screen.availTop,width:window.screen.availWidth,height:window.screen.availHeight});return l},getOurIFrameInTop:function(){for(var d,a=r.getTop(),b=r.getWindow();b!=a;)d=b,b=d.parent;return d},getOurNodeInTop:function(){var d;t.friendly&&(d=t.embedded?(d=u.getOurIFrameInTop())&&d.frameElement:n.contextNode);return d},getAncestorNodes:function(d){var a=[],b=d.ownerDocument&&
d.ownerDocument.documentElement;if(b)for(;d.parentNode!==b;)a.push(d),d=d.parentNode;return a},getTagsNamed:function(d,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(d)}catch(e){b=null}return b},containsScriptTagWithSrc:function(l){return!!d(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return d.isFunction(l)?l(c):c===l})},contains:function(l,a){var b=!1;try{b=d.isDef(l)&&d.isFunction(l.contains)&&l.contains(a)}catch(c){}return b},querySelector:function(d,a){var b;try{b=d.querySelector(a)}catch(c){b=
null}return b},nodeIsInWindow:function(d,a){return d.ownerDocument&&(d.ownerDocument.defaultView||d.ownerDocument.parentWindow)===a},setAttributeOf:function(l,a,b){l&&d.isFunction(l.setAttribute)&&l.setAttribute(a,b)},removeAttributeOf:function(l,a){l&&d.isFunction(l.removeAttribute)&&l.removeAttribute(a)},crossQuerySelector:function(l,a){var b,c,e=[n.contextNode.parentNode,r.getDoc()];t.friendly&&e.push(r.getTop().document);if(a&&t.embedded)try{e.push(r.getWindow().frameElement.ownerDocument)}catch(f){}d(e).each(function(a,
e){try{c=u.querySelector(e,l)}catch(d){}!b&&c&&(b=c)});return b},getNodeName:function(d){return d&&d.nodeName},isWindow:function(d){var a=!1;try{a=d&&"object"===typeof d&&"setInterval"in d}catch(b){a=!0}return!!a},getChildWindowsOf:function(l){var a=[];(l=u.getTagsNamed("iframe",l))&&(a=d(l).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var d=r.getWindow().frameElement;return d&&d.id},isViewportVisible:function(d,a){var b=d.innerWidth,c=d.innerHeight,e=b>a.width&&c>a.height;
return b*c>a.width*a.height&&e},getTagName:function(d){return d.tagName.toLowerCase()},getAttribute:function(d,a){return d.getAttribute(a)},attributeMatches:function(d,a,b){d=d&&u.getAttribute(d,a);return b.test(d)},isImageTag:function(d){return d&&d.src&&u.tagNameIs(d,"img")},getDimensionFromStyle:function(l){var a,b=y.getStyle(l,"width");l=y.getStyle(l,"height");b&&l&&(a={width:d.getNum(b),height:d.getNum(l)});return a},getDimensionFromAttributes:function(l){var a,b=u.getAttribute(l,"width");l=
u.getAttribute(l,"height");b&&l&&(a={width:d.getNum(b),height:d.getNum(l)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var e,d,g;if(c(b))d=b;else if(g=b.children)for(e=0;e<g.length&&!(d=a(g[e],c));e++);return d},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,e="fixed"===y.getStyle(a,"position"),d="hidden"!==y.getStyle(b,"overflow")&&!e;t.isSpecifiedAd()&&(e||d)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||
a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent}},Wa=function(){var a={},b=function(b){d.isDef(a[b])?a[b]++:a[b]=1};k.on("error",function(a){a=d(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",e;for(e in a)a.hasOwnProperty(e)&&(b+=e);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},ub=function(){return{createInstance:function(a,b){return t.isDomless()?new Qb:new Rb(a,b)}}},Rb=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=d(a).map(function(a,b){return b.val}),b.push(n.adsafeSrc,n.requrl,n.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(e){try{var f,g=c(e),s=g&&g.length&&g.join("|"),m=n.exchList;s&&(f=d(m).map(function(a,b){return 0<=s.indexOf(N.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},
"ex",{type:h.IMPRESSION_EVENT}))}catch(p){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},Qb=function(){return{parse:function(a){}}},Sa=function(){var a={},b=function(b){var c;d.isUndef(a[b])&&(c=n.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={rt:"rattie",cb:"cachebust",th:"tabHiddenDtCall",es:"everySecond",sa:"swapids",sc:"usesca",ha:"usehaps"},e={fif:"useFIF"},f=function(){var b,f;b=d(c).mapToObj(function(b,
c){var e={};e[b]=d.fromBoolToNum(a[c]);return e});f=d(e).mapToObj(function(a,b){var c={};c[a]=d.fromBoolToNum(g(b));return c});f.gm=d.fromBoolToNum(t.usesGroupMCustomMetric());return d(b).mixin(f)},g=function(a){a=n[a];return!0===a||"true"===a||d.isFunction(a)};d(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=d.isStr(a)?[a]:a;return d(a).map(function(a,b){if(d.isDef(n[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=n.sp_cdnScripts&&
n.sp_cdnScripts[a];return c&&a},output:function(){return d(f()).toParams()}}},jb=function(a){return{calcInitialViewState:function(a,c){var e;e={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var f={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},g=h.NA;e=c?e:f;d.isDef(a)&&a!==h.NA&&-1<a&&(g=a>=e.IN_VIEW?h.IN_VIEW:a<=e.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=e.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return g},calcPercentInView:function(a,c,e,f){var g=0,s=a;a.hasValidDims()&&!a.isHidden()&&(d([c,e,f]).each(function(a,
b){if(b.hasValidDims()){var c=s.getRounded(),e=b.getRounded(),d=Math.max(c.scrX,e.scrX),f=Math.max(c.scrY,e.scrY),g=Math.min(c.scrX+c.width,e.scrX+e.width),c=Math.min(c.scrY+c.height,e.scrY+e.height),g=g-d,c=c-f;s=J({scrX:d,scrY:f,width:0<g?g:0,height:0<c?c:0})}}),g=r.round(s.area()/a.area()*100));return g}}},Xa=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a=
"";try{for(var b,c=B.Uint32Array&&B.crypto&&B.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),B.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(e){k.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var e=function(){return n.anId};return{getAsid:function(){return n.asid},getAnId:e,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return d.toBase(a,62)},getFwId:function(){return e()||
n.advEntityId+"-"+n.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},Ma=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},pb=function(a){var b=function(a,b){return{time:a,task:b}};return{createPingJobs:function(a,e,f,g){return d(e.timeThresholds).map(function(e,m){var p=m/1E3;return new b(m,function(){d.isDef(g)&&
k.trigger("addOutputItem",{output:g},"metricId",{type:a});k.trigger("sendDt",a,p);if(f[m])f[m]()})})}}},ga=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){return"__IntegralAS_"+n.asid.replace(/\-/g,"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,f,g,s){var m=c(),p,q,h;s=s||"ias_callback";d=""+d;RegExp(s).test(d)&&(p=RegExp("("+
s+"=)(.[^&]*)").exec(d)[0],q=p.split("=")[1],h=N.stringToFn(q),d=a(d,p));B[m]=function(a){f(a);g&&h&&h(a);B[m]=void 0};return d=b(d,s,m)},wrapToGlobal:function(a){var b=c();B[b]=function(c){a(c);B[b]=void 0};return b}}},sb=function(a,b,c){var e=function(a,b){var c=a,e;b&&(e=","+d(b).stringify(function(a,b){return a+":"+b},","),c=T(a,!0),c.appendToParamValue("adsafe_jsinfo",e),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},
rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?k.trigger("jsonp",c,a.callback,!0):k.trigger("send",c,function(){k.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){k.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){k.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){k.on("adImpression",function(f,m){var p;try{p=e(c,
m),a.enabled?k.trigger("jsonp",p,a.callback,!0):k.trigger("send",p,d.noop,!b.on("postMon"))}catch(q){__IntegralASDiagnosticCall("jsvidimp",q,n)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===n.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&k.trigger("jsonp",c(a),function(a){k.trigger("videoBlockResult",a)});k.on("adImpression",function(c,f){var m;try{var h;if(h=b)h=c&&d.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;
h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=e(a,f);k.trigger("send",m,d.noop,!0)}catch(F){__IntegralASDiagnosticCall("fwjsvidimp",F,n)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[n.mode],d=!!b.isFW,e=function(a){var b;b=k.request("mobileApp").isMobileAppEnvironment()&&n.mobFwUrl?n.mobFwUrl:a?n.adsafeSrc:n.requrl;a||(b+="?"+n.reqquery);return b}(d),q=
e.indexOf("BEGIN__ADSAFE"),h=-1!==q,v=h?e.slice(q):"",a=h?e.slice(0,q):a(e);return{isFW:d,baseUrl:a,macroUrl:v,sendImpression:function(a){var d=function(){b.nodeType?k.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)k.on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},
floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return B},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?k.request("omidVerificationClient"):B},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getNewActiveXObject:function(a){t.isDomless();return new ActiveXObject(a)},getDoc:function(){t.isDomless();return L},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},eb=function(){return{createInstance:function(){return t.isDomless()?new Sb:new Tb}}},Tb=function(){var a,b=!1,c=k.request("features"),e=new Z,f=function(){var b;
c.on("blur")||c.on("abcAudit")&&923747==n.anId?(b=r.getWindow(),b=t.friendly&&b.top.document&&(d.isFunction(b.top.document.hasFocus)||d(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(d.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=d.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},g=function(){var b=r.getWindow(),c=function(){e.run(f())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a,b="hidden",c="visibilitychange",
e=r.getDoc();d.isUndef(e.hidden)?d(["moz","ms","webkit"]).each(function(f,g){var h=g+"Hidden";d.isDef(e[h])&&(b=h,c=g+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:f,onHiddenChange:function(a){e.push(a);b||(b=!0,g())}}},Sb=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},gb=function(){return{createInstance:function(a,b){return t.isDomless()?new Ub:new Vb(a,b)}}},Vb=function(a,b){var c,e=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===
c||"null"===c||"undefined"===c||null===c||d.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,e;for(e in a)a.hasOwnProperty(e)&&(c=a[e],d.isUndef(b[c])?b[c]=e:b[c]+=e);a={};for(e in b)b.hasOwnProperty(e)&&(c=b[e],a[c]=e);return a},g=function(){var g,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var e=c.message,e=e.substring(e.lastIndexOf("<")+1,e.lastIndexOf(">")),f;if(f=d.isDef(e)){var g=b.getWindow();
f=!1;d.isDef(g.navigator)&&d.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?13>=parseInt(g[2],10)&&(f=!0):f=!0)))}f&&(a.g=e)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(q){}try{p.b=encodeURIComponent(parent.location.href)}catch(h){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(k){}try{p.e=encodeURIComponent(window.document.referrer)}catch(F){}}try{"jsi"!==
n.mode&&(p.d=encodeURIComponent(window.location.href))}catch(w){}try{p.f=encodeURIComponent(n.jsref)}catch(r){}try{g=m(),p.g=encodeURIComponent(g.g||""),p.q=encodeURIComponent(g.q||""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(E){}p=e(p);p=f(p);g=[];for(var z in p)p.hasOwnProperty(z)&&g.push({key:z,val:p[z]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?
c:g()}}},Ub=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},db=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",n._onSuspicious)},skipAsFraudulent:function(){return b}}},hb=function(){var a=[],b={},c={sl:"n"},e=0,f,g,s={i:0,o:0,n:0,pp:0,pm:0},m=function(a){var b={},c=a.winDimensions,e=a.adDimensions;d.isDef(c)&&c.hasValidDims()&&(b.wc=c);d.isDef(e)&&e.hasValidDims()&&(b.ac=e,b.am=a.method,b.cc=a.containerDimensions);d({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason",cmps:"adCompCount"}).each(function(c,e){var f=a[e];d.isDef(f)&&(b[c]=f)});c=d(b).toParams();return""===c?"":","+c},p=function(a,c){var e=new Kb(c);return b[a]=e},q=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},x=function(){d(c).each(function(b,c){s[c]+=a.length?g-e:g});e=g},v=function(b){a.length&&x();d(b).each(function(a,b){var e=c[a];e!==b&&"n"===e&&(s[b]+=s.n);c[a]=b});a.length||x()},F=
function(a){var c,e=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=m(a);var f={sl:q(a.viewState)};g=t.getTagTime();v(f);f.t=g;c=d({toString:function(){d(b).each(function(a,b){b.fastForward()});return"{"+d(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+d(this.piv).stringify(b)+"]");a+=",as:["+d(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);d(c).mixin(a);
c.width=e.width;c.height=e.height;d.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);d.isUndef(c.reason)&&(c.reason="");return c};(function(){p("piv",function(a){var b,c=a.percentInView,e=[1,25,30,50,75];100===c||0===c?b=c:(d(e).each(function(a,f){d.isUndef(b)&&c<f&&(b=e[a-1])}),d.isUndef(b)&&(b=e[e.length-1]));return b});p("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){g=t.getTagTime();
x()},registerLocation:function(e){var g,s=!1;c.sl==q(e.viewState)&&a.length?(g=new F(e),a[a.length-1].details=g.details):(g=new F(e),a.push(g),f=e.viewState,s=!0);k.trigger("newScreenEvent",g);d(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(s&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=d({slTimes:"{"+d(s).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:p,
getCurrentLoc:function(){return q(f)}}},N={hashCode:function(a){var b=0,c,e,d;if(0===a.length)return b;c=0;for(d=a.length;c<d;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=B,e=a.split(".");for(a=0;a<e.length;a++)if(b=c,c=c[e[a]],d.isUndef(c)||a===e.length-1&&!d.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!d.isUndef(b));a++);return b},contains:function(a,b){return d.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return d.isFunction(a.trim)?a.trim():a.replace(" ","")}},Wb=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var e;(e=b(c))||(c=u.getDimensionFromStyle(c),e=a(c));return e},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,e=/doubleclick.net\/pcs\/click?/,d=/_blank/,g=function(a){var e=u.tagNameIs(a,"div"),d=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return e&&d&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),q=u.attributeMatches(b,"href",e),h=u.attributeMatches(b,"target",d);g&&q&&h&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},Xb=function(){var a=Wb(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var e;if(e=a.getDFPGoogleDiv(c)){var d;c={type:0};if(e)if(c.type=1,d=a.getClickableImage(e))c.type=2,b(d,c);else if(e=a.getNodeMatchingMinimumSize(e))c.type=3,b(e,c);e=c}else if(e=
{type:0},c=a.getNodeMatchingMinimumSize(c))e.type=4,b(c,e);return e}}};O("viewport",[],function(){var a={width:4,height:4},b=function(c,e){if(c!==e&&!u.isViewportVisible(c,a))return c;if(c!==e&&t.isFriendlyToParent(c))return b(c.parent,e)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},e=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:e,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();u.isViewportVisible(c,a)?e()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var Yb=function(a){var b,c,e=function(e){b=a.setInterval(e,100);c=a.setTimeout(function(){d()},42E4)},d=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,m=a.innerHeight,p=!1;e(function(){var e;e=a.innerHeight;(e=a.innerWidth!==c||e!==m)&&(p=!0);p&&!e&&(b(),d(),p=!1);c=a.innerWidth;m=a.innerHeight})}}};O("adStuffingDetector",["viewport"],function(a,b){var c,e=function(){try{var e=a.isHidden(),g,s={};e!==c&&(g=d.stringifyTriState(e),
s.res1=g,s.ps=g,s.ts=r.now(),s.psfr=d.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",s));c=e}catch(m){k.trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){e();var b=a.getWindowWithHiddenViewport();if(b)Yb(b).onResize(e)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});O("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){k.trigger("addThrottledProp",h.DT_SLOT.FRAUD,
a,d(b).toION())},e=function(a){2>b&&c("ha1",a);b++};(function(){var b,d;if(t.embedded)try{d=n.contextNode.parentNode,b=Xb().getDFPValue(d),d={},d.df=b.type,b.size&&(d.sz=b.size.width+"."+b.size.height),b.tag&&(d.dom=b.tag),c("dfp",d),b.size&&a&&(a.events.on("newState",e),a.start())}catch(s){k.trigger("error",h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var bb=function(){return{createInstance:function(a){return t.isDomless()?new Zb:
new $b(a)}}},$b=function(a){var b,c,e,f=new ia,g=new $,s=new ac(f),m=new bc,p=new cc,q=new dc(f,a),h=function(){d.isUndef(e)&&(e=new ec(f));return e},v=function(){f.provide({frameCollection:function(){return s},adProxy:function(){return p},adTalkMessage:function(a){return new fc(a,f)},adTalkMessageCollection:function(){return m},idMapModule:h,interFrameQuerySelector:function(a){return new gc(a)}})};return{isApplicable:function(a){return d.isDef(window.JSON)&&d.isDef(window.postMessage)&&!a.isAvid()&&
!a.isOmid()},start:function(){v();g.traverse(s.addFrame);q.startListening();q.sendToKnownFrames();k.once("stopAdTalk",function(){q.stopListening()})},sendAdTalkCall:q.sendAdTalkCall,getFrameMap:function(){d.isUndef(b)&&(b=new na(f));return b},getFrameMapIncludingPeerCase:function(){d.isUndef(c)&&(c=new na(f,!0));return c},getIdMap:h}},Zb=function(){return{isApplicable:function(){return!1},start:function(){}}},fc=function(a,b){var c,e=b.request("adProxy").myIdCard,d=b.request("frameCollection").getMe().getStringifiedPosition();
c=k.request("features").on("swapids")?n.oid:n.asid;var g=a||{},s=n.asid,e=e.tagId,m=t.embedded,p=t.friendly,q=n.birthdate;c=c.split("-")[2];var x;t.friendly?x="["+h.AD_IDENTIFIER+"-"+n.asid+"]":(x=r.getWindow(),x=x.location&&x.location.href,x='iframe[src*="'+(x&&x.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:s,srcTagId:e,srcIsEmbedded:m,srcIsFriendly:p,srcBirthdate:q,iasCommonId:c,nodeSelector:x,positionStr:d,version:"0.1"}},bc=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return d(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},hc=function(a,b,c,e){var f,g=a==B;f={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:n.birthdate,srcIsEmbedded:e?e.srcIsEmbedded:void 0,inbox:e?[e]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return d(f.position).map(function(a,b){return d.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||
f.isMe||d.isDef(f.selfDescription)}};var s=function(a){var b=f.adProxies;a=a.adProxies;var c=[];b.length&&a.length?d(a).each(function(a,e){m(b,e)&&c.push(e)}):c=a;f.adProxies=b.concat(c)},m=function(a,b){return!d(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){d(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=function(a,b){s(b);p(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},ac=function(a){var b=
[],c={},e={noMe:!0};return{addFrame:function(d,g,s){var m=a.request("adProxy").getAll();d=new hc(d,g,m,s);b.push(d);c[d.id]=d;d.isMe&&(e=d);return d},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return e}}},na=function(a,b){var c=function(a,c){var d=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=e(d,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=d.length?"."+d[0].tagId:"";m+=p}return m}},e=function(a,b){var c="";return c=a.length?
c+d(a).stringify(function(a,c){return b+(n.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),e=d(b.list).stringify(c,"|");return d.toBase(b.getMe().unifiedId,62)+"+"+e}}},ec=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=n.contextNode.parentNode,e=a.request("interFrameQuerySelector",c),d=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var d=!1,d=!t.embedded,f="BODY"!==u.getNodeName(c)&&
"HEAD"!==u.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var x=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);g=!(g?x:!a.srcIsFriendly)}d&&f&&!g?d=!!e.queryFor(a.nodeSelector):(d=a.positionStr,a=a.srcIsEmbedded&&t.embedded,d=0===b.indexOf(d)||0===d.indexOf(b),d=!(!a||!d));return d};return{output:function(){var c,e=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==n.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(e);c=c.join("|");120<c.length&&(c=d(c),k.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},gc=function(a){var b=new $,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},e=function(a,b){return u.querySelector(c(a),b)},f=function(c,f){var m,p,q;try{p=e(c,f),p||(m=b.getFrames(!0,a),d(m).findFirst(function(a,b){return q=e(b,f)}))}catch(h){}return p||q||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));return c}}},
dc=function(a){var b=!1,c,e;e=k.request("features").on("swapids")?n.oid:n.asid;var f=function(b){var c=e.split("-")[2],d=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==n.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&d},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},s=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);k.trigger("sendDt",c)},m=function(c,e,f){var g,m,w,n,
E;try{g=a.request("frameCollection");m=a.request("adTalkMessageCollection");w=e.messageContent.self;m.add(e);var z=g.getMe();z.unifiedId>w.unifiedId&&(z.unifiedId=w.unifiedId);var t;t=r.now()-e.sentTime;e.transferDuration=t;m=n=g.getFrame(w.id);d.isUndef(m)||d.isUndef(m.selfDescription)?(n=n||g.addFrame(c.source,w.id.split("-"),e),n.addInformationFromSrc(e,w),f()):n.addInformationFromSrc(e,w);(E=b&&a.request("idMapModule").isCandidateForMyIdMap(e))&&s()}catch(u){k.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};
return{sendAdTalkCall:s,sendToKnownFrames:function(){(new ja).send(g)},startListening:function(){c=new Gb;c.listen(f,m,g)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:m,createMessage:g}},ic=function(){var a=k.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},cc=function(){var a,b=[],c=function(a){a=new ic(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},ib=function(a){var b,c,d=!1,f=function(a){var f=!0;d&&(d=!1,a.stopPropagation?
(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,f=!1);return f};a.browserIs(h.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,"click",f,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},jc=function(a,b){var c,e=h.NA,f=e,g=!1,s=!1,m=!1,p=!b,q=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/
(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){k.trigger("IOPivChange",e)});f=e},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){e===h.NA&&(e=0)});b.observe(x(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||k.trigger("delayedViewabilityReady")});g=!0},x=function(b){if(!d.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");
d(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return e},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){s=!0}b&&null!==b.bodyElement?q():b&&b.document?y.whenReady(q,b.document):s?k.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):q()},isStarted:function(){return g},getAdNodeDimensions:function(){var a;
c&&(a=J({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return e!==h.NA}}},ha=function(){var a=!1;(function(){y.whenReady(function(){k.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};O("loopDelay",[],ha,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var kc=function(){return{start:function(a){k.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},
lc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Ab=function(a,b,c){var e=!1,f=function(){b.impressionIsIdentifiable()&&!e&&(e=!0,k.trigger("notify",n._onMeasurable))};return{start:function(){var b;b=[mc(),nc(),lc(),kc()];(b=d(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&d.isDef(n._onMeasurable)}}},nc=function(){return{start:function(a){Hb(k,
["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},mc=function(){return{start:function(a){k.once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},oc=function(a,b,c){var e=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=d.isDef(d(e).find(function(a,
b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||a.addEventListener("ready",function(){k.trigger("adImpression")})}}},pc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,e=a.getAvidAdSessionContext();a.isAvidAvailable()&&
d.isDef(e)&&(c=e.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.avidJsVersion,(c=d.isUndef(b))||(c=d.getNum(b.split(".")[0]),b=d.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},qc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&k.trigger("adImpression")})}catch(b){}}}},rc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},ea=function(a){var b=k.request("omidAdSessionContext");return{accepts:function(){return a&&a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},sc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},Fa=function(a){return{resolve:function(){return d(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ea=function(a,b){var c=!1,d=!1,f=k.request("omidAdSessionContext"),g=function(b){"sessionStart"===b.type&&(f.isNative="native"===b.data.context.adSessionType,(c=!0)&&d&&(B.omidSupported=!0,a()))},s=function(b){f.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(f.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});f.isNativeVideo=
f.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(B.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(g,"IAS");b.addEventListener("impression",s)}}},tc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},uc=function(a,b){var c,d=function(a){var d,e,m;try{d=a.eventData.percentageInView,
e=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:e,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(g){}},
addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},vc=function(a,b){var c=function(a){try{var c;"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(d){__IntegralASDiagnosticCall("omidvideo",
d,B.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},oa=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);
a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},wc=function(a,b,c){var e=d.isDef(a)?a.environment:void 0,f=d.isDef(a)?a.measurementStrategy:void 0,g=function(){return d.isDef(f)};d.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?e.isImmediate():!0},isMeasurable:function(){return g()?
f.isMeasurable():!1},isMediaType:function(a){return g()?e.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){g()&&e.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},$a=function(a,b,c){var d=k.request("mobileApp");return{create:function(){var f=[],f=f.concat(a.getOmidMeasurementStrategies()),f=f.concat(a.getAvidMeasurementStrategies()),f=f.concat(a.getMraidMeasurementStrategies()),
f=(new ba(f)).resolve(),g=new xc(f),s=new pa(b,c,t,d);return!f&&s.accepts()?new yc(t.isVideo(),new C):new wc(f,g,d.isMobileAppEnvironment())}}},ab=function(a){var b=k.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=k.request("omidVerificationClient"),b=new ea(a),d=[];if(b.accepts()){var g=new zc(a,new C),s=[{environment:new Ac,measurementStrategy:new Bc(a,new C)},{environment:new Cc,measurementStrategy:new qa(new ca,r.getWindow(),new C)}],m=(s=(new ba(s)).resolve())?s.measurementStrategy:
{},p=new ra(new sa(new V),new V),s=new rc(a,b,n.mode),q=new ta(g,m,new C,p),b=new sc(a,b,n.mode),a=new ua(g,m,new vc(a,new C),new C,p);d.push({environment:s,measurementStrategy:q});d.push({environment:b,measurementStrategy:a})}return d},getAvidMeasurementStrategies:function(){var b=k.request("avidJsClient"),d=new pc(b),f=[];if(d.accepts()){var g=new oc(b,d,n.mode),s=new qc(b,d,n.mode),m;m=new tc(b,new C);if(d.supportsAdContainerGeometry()){var p=new Dc,q=new Ec,h=new qa(new ca,r.getWindow(),new C),
v=new Fc(b,new C),p=(p=(new ba([{environment:p,measurementStrategy:v},{environment:q,measurementStrategy:h}])).resolve())?p.measurementStrategy:{},q=new ra(new sa(new V),new V),h=new Gc(b,new C),b=new ta(h,p,new C,q);m=new ua(h,p,m,new C,q)}else p=new uc(b,new C),b=new oa(p,new C),m=new va(p,m,new C);f.push({environment:g,measurementStrategy:b});f.push({environment:s,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return f},getMraidMeasurementStrategies:function(){var a=
[],d=b.isSafeToInjectMraid(),d=new Hc(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var f=k.request("context"),f=new Ic(r.getWindow(),f),g=new Jc(r.getWindow(),new C);f.accepts()?(d=new Kc(r.getWindow(),new C),d=new va(g,d,new C),d={environment:f,measurementStrategy:d}):(f=new oa(g,new C),d={environment:d,measurementStrategy:f});a.push(d)}return a}}},ba=function(a){return{resolve:function(){var b=d(a).findFirst(function(a,b){return b.environment.accepts()});if(d.isDef(b))return b}}},
xc=function(a){var b=!1,c,e={winDimensions:J({scrX:0,scrY:0,width:0,height:0}),adDimensions:J({scrX:0,scrY:0,width:0,height:0}),containerDimensions:J({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},f=function(a){return a?new J({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):J({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:f(a.windowDimensions),adDimensions:f(a.adDimensions),
containerDimensions:f(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:d.isDef(a.percentageInView)?a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:d.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,
isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,k.trigger("delayedViewabilityReady"))};return{create:function(b){var f=e;if(d.isDef(c))if(a.environment.supportsAdContainerGeometry())f=c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||75<=c.percentInView)f=c;return f},start:function(){var b;d.isDef(a)&&d.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=
!0}}},va=function(a,b,c){var e=!1,f=!1,g=!1,s,m,p,q,x=function(){if(!d.isUndef(m)){var a=[],b,k;e?(f?(k=!1,b=100):(k=q,b=p),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(k=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));g=!0;m.shouldDelegateToDomBasedViewability=k;m.percentageInView=b;m.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;m.outOfViewReason=a.join(".");s=m;c.trigger("measurementChanged",s)}},v=function(a){m=a;p=a.percentageInView;q=a.shouldDelegateToDomBasedViewability;x()},r=function(a){a=a.eventType;
"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?e=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(e=!1);x()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(v);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",
a)},isMeasurable:function(){return g}}},Ic=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,k.trigger("adImpression"))})}catch(d){}}}},Kc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Gc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:e(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",
a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",
a)},translateAvidOutOfViewReasons:e}},ra=function(a,b){function c(a,b,c){c=s(b,c);a=f(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},g=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},s=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,p){if(d.isDef(e)&&d.isDef(p)){var q=e.viewport,k=e.computedAdContainer,v=k.obstructions,n=v&&0<v.length,w=e.originalAdContainer,t=p.adGeometry,E=e.detectionMethod,z=0,q={x:0,y:0,width:q.width,height:q.height},u=g(w,t),I=e.outOfViewReason,G=0,H=0,U=n||!1;if(p.adFound&&0<e.percentageInView){G=c(q,k,u);n?(z=s(k,u),z=f(q,k,z),z=g(k,z),z=a.calculateObstructedArea(z,v)):z=0;H=z;z=Math.round((G-H)/(u.width*u.height)*
100);n&&0===H&&(U=!1);for(var t=U,K,n=0,H=b.getConfig(u).numberOfSlices,y=r.floor(u.height/H)||1,v=[],G=t?a.getObstructionStatusBySlice(H):[],M,n=0;n<H;n++)K=u.y+y*n,n==H-1&&(y=u.y+u.height-K),K={x:u.x,y:K,width:u.width,height:y},M=c(q,k,K),K=1==M/(K.width*K.height),v.push(K);if(t)for(k=r.min(G.length,H),n=0;n<k;n++)v[n]=v[n]&&!G[n];k=v}else k=p.adFound?b.getConfig(t).defaultSliceArray:void 0;return{windowDimensions:q,containerDimensions:w,adDimensions:u,percentageInView:z,viewState:50<=z?h.IN_VIEW:
h.OUT_OF_VIEW,outOfViewReason:50<=z?"":I||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:E,isObstructed:U,sliceStatus:k}}}}},Dc=function(){return{accepts:function(){return t.isAvidNative()}}},Fc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",
a)}}},Ec=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},ta=function(a,b,c,e){var f,g,s,m=function(){if(d.isDef(f)&&d.isDef(g)){var a=e.calculateGeometricMeasurement(f,g);s=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){f=a;m()},q=function(a){g=a;m()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();
b.addAdGeometryMeasurementChangedListener(q);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return s}}},sa=function(a){var b=[],c;return{calculateObstructedArea:function(e,f){var g,h,m,p;h=f&&0<f.length;var q;if(h){q=Math.round(e.width);var k=Math.round(e.height);g=Array(q);for(m=0;m<q;m++)g[m]=Array(k);q={matrix:g,obscuredPixelCount:0,x:Math.round(e.x),y:Math.round(e.y),
width:q,height:k}}else q={};g=q;k=q=0;if(h){for(;q<f.length;q++){h=f[q];m=k=g;var v=h;g=Math.max(m.x,v.x);h=Math.max(m.y,v.y);p=Math.min(m.x+m.width,v.x+v.width);v=Math.min(m.y+m.height,v.y+v.height);m=p-g;p=v-h;m=0<m?m:0;p=0<p?p:0;g-=k.x;h-=k.y;m=g+m;p=h+p;for(g=Math.round(g);g<Math.round(m);g++)for(v=Math.round(h);v<Math.round(p);v++)void 0!==k.matrix[g]&&void 0===k.matrix[g][v]&&(k.matrix[g][v]=1,k.obscuredPixelCount+=1);g=k}k=g.obscuredPixelCount;q=g;if(d.isUndef(q.matrix)||0===q.matrix.length)c=
[];else{h=0;p=!1;g=q.matrix[0].length;m=q.matrix.length;p=a.getConfig({height:g}).numberOfSlices;for(var v=r.floor(g/p)||1,n=[],w=0;w<g;w++){p=!1;for(var t=0;t<m;t++)if(1===q.matrix[t][w]){p=!0;break}h++;p&&(w+=v-h,h=v);if(h==v||w===g-1)n.push(p),h=0}c=n}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},zc=function(a,b){var c=k.request("omidAdSessionContext"),e=function(a){a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,
height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:f(a.data.adView.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},f=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";d(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&e(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",e)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:f}},Ac=function(){var a=k.request("omidAdSessionContext");return{accepts:function(){return a&&a.isNative}}},Bc=
function(a,b){var c=k.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Cc=function(){var a=k.request("omidAdSessionContext");
return{accepts:function(){return a&&!a.isNative}}},ua=function(a,b,c,e,f){var g=!1,s=!1,m,p,q,r,v,n=function(){if(!(d.isUndef(p)||d.isUndef(q)||d.isUndef(r))){v=!0;var a=f.calculateGeometricMeasurement(p,q),b=g&&s,c=g&&50<=a.percentageInView,k={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:g,
isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(k.percentageInView=100);b||c?k.viewState=h.IN_VIEW:(k.viewState=h.OUT_OF_VIEW,k.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);m=k;e.trigger("videoGeometryMeasurementChanged",m)}},t=function(a){p=a;n()},u=function(a){q=a;n()},E=function(a){r=a;a=a.eventType;"AdEnteredFullscreen"===a?s=!0:"AdExitedFullscreen"===a?s=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(g=!1);n()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(E);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){e.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return v}}},qa=function(a,
b,c){var e,f=function(){var b=a.find(),f,m=!0;d.isDef(b)?(f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height}):m=!1;if(b=m)b=f,b=!d.isDef(e)||!1!==d(b).compareTo(e);b&&(e=f,c.trigger("mobileAppGeometryChanged",{adGeometry:f,adFound:m}))};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Hc=function(a,b,c){return{accepts:function(){var e=d(a.mraid).isObj();return c&&(e||b)},isImmediate:function(){return!0},
supportsAdContainerGeometry:function(){return!1},start:function(){}}},Jc=function(a,b){var c=!1,e=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(g){}},f=function(){var b=a.mraid;
return d(b).isObj()&&d.isFunction(b.isViewable)},g=function(){var b=a.mraid;e();b.addEventListener("viewableChange",e)},s=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){g()}):g())},m=function(){c||s()};return{start:function(){var b=!0;if(d.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;k.trigger("addOutputItem",{output:d.stringifyTriState(b)},"mi",{type:"impression"});b?k.trigger("exec","mraid.js",m):s()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",
a)}}},Oa=function(a,b,c){var e={},f=function(c){var e=d.noop;b.bootstrapOn("useViewabilityNotification")&&(e=function(){var b=n[c];a.skipAsFraudulent()||k.trigger("notify",b)});return e};(function(){c&&d(c).map(function(a,b){e[a]=f(b)})})();return{getCallbacks:function(){return e}}},Ha=function(){var a=new Q({tiv:[1E4]}),b=d([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==n.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ga=function(a,b){var c,d,f;c=a.on("everySecond");var g=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];f=[1E3,5E3,15E3];var s=[2E3,5E3,15E3];c?(c=new Q({tiv:d}),d=d[0]):g?(c=new Q({tiv:s}),d=s[0]):(c=new Q({tiv:f}),d=f[0]);f={5E3:"_onInViewMRC5",15E3:"_onInViewMRC15"};f[d]="_onInViewMRC";return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:f,
isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Ja=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),f=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],s=[1E3,5E3,15E3],m=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:g}):d?new Q({tiv:m}):new Q({tiv:s});
k.provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return f},minUnit:1E3}},Ia=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},La=
function(a,b){var c,e,f=r.getMaxNumber(),g=b.isVideo();c=new Q(a);e={};d.isDef(a.rts)&&(e={timThreshold:a.rts});return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,rts:e,isInView:function(b){if(!b.adDimensions)return!1;var c,e,q,k=b.adDimensions.area(),n=1===b.tabHidden,t=r.max(b.fullPercentInView||0,b.percentInView);c=d(a.thresholds).findFirst(function(a,b){e=b.lb||0;q=b.ub||f;if(k>=e&&k<=q)return!0});c=!n&&t>=c.piv;b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);g&&(c=c&&b.isVideoPlaying);
return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Ka=function(a,b,c){var e=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=d(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),p=c.on("groupmCM"),q=function(a,b){var c,h,m,q,k;c=d(b.mediaTypes).contains(e);h=d(b.distributionChannels).contains(f);m=d.isDef(b.deviceGroups)?d(b.deviceGroups).contains(g):!0;q=N.contains(b.id,
"fiv");k=N.contains(b.id,"groupmCM");q=!q;k&&(q=p);return q&&c&&h&&m};return{resolve:function(){var b=[],c;m&&h&&(c=d(a.customViewability).filter(q),d(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){d(a.tiv).isArray()?a=a.tiv:"string"===typeof a.tiv?(a=a.tiv.split("|"),a=[8E3,1E3*parseInt(a[0])]):a=[1E3*a.tiv];return{timeThresholds:a}},Ra=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},
Qa=function(a,b,c,e){var f,g,h,m,p,q=function(a,b){return!b&&a},r=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},n=function(a){var b=0,q=1===a.tabHidden,k=a.isVideoPlaying,n=a.isSoundOn,v=a.isVideoPlayingInFullscreen;d(a.sliceStatus).each(function(a,b){h(b,q,k,v)?f[a].mark():f[a].stop();m[a]=f[a].getTotalTime()});t("slcVt",m);e&&(d(a.sliceStatus).each(function(a,b){r(b,q,k,v)&&n?g[a].mark():g[a].stop();p[a]=g[a].getTotalTime()}),t("slcVtVol",p));a=d(m).findFirst(function(a,c){b=Math.max(b,c);return 0>=
c});d.isUndef(a)&&c.doEligibleJobs(b)},t=function(a,b){var c={};c[a]=b;k.trigger("addOutputItem",{output:c},{minDt:!1})},w=function(a){!f&&a.sliceStatus&&(f=[],g=[],m=[],p=[],d(a.sliceStatus).each(function(a){f.push(new Y(1));m.push(0);e&&(g.push(new Y(1)),p.push(0))}))},u=function(a){d.isUndef(a.sliceStatus)||(f||w(a),n(a))};return{start:function(){h=e?r:q;a.addMeasurementChangedListener(u)}}},Na=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},
tb=function(a,b,c,d,f,g,k,m,p,q){var n=!1,v=t.isVideo(),u=g.request("mobileApp"),w=W().applies(c,f),A=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&f.on("rattie")||w,E=t.xDomainIframe&&!A,z=new ka(10),P=function(){f.on("viewabilityready")&&!n&&(d.send(h.DT_CODES.VIEWABILITY_READY),g.trigger("measurable"),n=!0)};g.on("delayedViewabilityReady",function(){I();P()});g.on("delayedViewabilityReadyCallOnly",P);var I=function(c){c=c||!1;try{z.start();var d,e;b.hasMeasurementStrategy()?e=u.isMobileAppEnvironment()&&
b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),u.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):E&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),v&&!t.isAvid()&&q.setVideoSpecificScreenEventFields(e));d=p.registerLocation(e);c||a.trigger("measurementChanged",e);z.stop();var f=r.round(z.getTime()/z.getCount());k.addItem({output:f},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(n){g.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};
return{checkScreenLoc:I,stringifyPingTimes:function(){return f.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":v?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&w,d=!d&&!e&&!a;return u.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){u.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",
b)}}};O("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,e){var f,g=Lc(c),s=[new Mc,new Nc(g)],m=function(){return d(s).findFirst(function(a,d){return d.applies(e,b,c)?d:void 0})},p=function(a){"sessionFinish"===a.type&&k.trigger("adSessionComplete")},q=function(a){y.addEvent(B,a,function(){k.trigger("adSessionComplete")},!1)},x=function(){var a=new X(h.DT_CODES.VIDEO_EVENTS);k.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:n.videoId,msg:"unloadComplete",
messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};k.once("startViewabilityLoop",function(){var b,c=k.request("mobileApp").isMobileAppEnvironment();k.request("ids").impressionIsIdentifiable()&&(f=Lb(a.checkScreenLoc,g.getPollingFrequency()),(b=m())?b.start(f):f.start(!0),c?t.isOmid()?k.request("omidVerificationClient").registerSessionObserver(p,"IAS"):q("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):q("beforeunload"))});k.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||
c.isOmid()||x();k.trigger("unload");f&&f.stop();k.trigger("endAdSession");k.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var Lc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Nc=function(a){var b,c,d,f,g,h=function(p){d&&!g&&1>p?(g=!0,r.setTimeout(function(){h(p)},1E3)):(f=1>p,!c&&f?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!f&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){h(a.percentInView)};
return{applies:function(a,b,c){var f=k.request("mobileApp");a=(new pa(b,a,c,f)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);k.on("IOPivChange",h);k.on("newScreenEvent",m)}}},Mc=function(){var a,b,c,d=!1,f=function(g){if(c&&!d&&1>g)d=!0,r.setTimeout(function(){f(g)},1E3);else return 1>g?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=W();return b.on("viewabilityOptimization")&&
e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);k.on("IOPivChange",f)}}},Sc=function(a,b,c,e,f,g){var s,m,p,q,x,v,F,w,A,E=u.getElementsWindow(b);u.getElementsDocument(b);k.provide("iframeCalculatorHelper",Oc(E));var z=Pc(b,e),P=h.AD_IDENTIFIER+"-"+n.asid,I=!1,G=J({}),H=t.isDeviceTypeGroupMobile(),U=t.usesGroupMCustomMetricMobilePassThru(),K,C=function(){if(!s)if(s=z.calcDims(b,e,p),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=s,d=(new J(b)).getRounded();try{a.set("width",
d.width),a.set("height",d.height)}catch(f){k.trigger("error",h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&s.treatAsPlaceholder();return s},M=function(){var b,e=t.xDomainIframe&&I;b=H&&I&&p.isReady();b=e||b;e=z.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=p.getPiv():d.isUndef(m)&&(b=!H&&(t.friendly||d.isDef(B.mozInnerScreenX))&&f.on("offscreen"),w=C(),F=new J(u.calcWinDims()),v=new J(b?u.calcMonDims():{}),A=e?z.getClippedDims():
G,m=a.calcPercentInView(w,F,v,A));return m},wa=function(){return a.calcInitialViewState(M())},xa=function(){return b===B?!1:C().isHidden()},D=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),d=r.getDoc(),f=b===c,g=d.body,h=new W,m=k.request("browser"),s=k.request("features"),n=k.request("context"),v=!t.xDomainIframe,w=D(b,e),d=f&&g?d.body:b;K=t.friendlyIframe?
c.frameElement:d;y.addEvent(d,"click",function(){k.trigger("adComponentClicked")});y.addEvent(d,"mouseover",function(){k.trigger("adComponentMousedOver")});h.applies(m,s,n)?(p=jc(b,v),p.start(),I=!0,U&&(q=new ya(Qc,C(),w))):U&&(x=new Rc(a))})();return{mark:function(){u.setAttributeOf(K,P,"")},cleanup:function(){u.removeAttributeOf(K,P)},isNode:function(a){return b===a},isHidden:xa,isObstructed:function(){return!1},getDims:C,getPercentInView:M,getLocationState:wa,getOnPageViewability:function(){return xa()?
h.OUT_OF_VIEW:wa()},getDetectionMethod:function(){return c},getContainerDims:function(){return z.allowsOptimization?s:J(e)},refresh:function(){A=w=F=v=m=s=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==B&&c&&c!==L&&!a;)a=c===e,c=c.parentNode;a||(e=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;q&&q.isReadyToMeasure()?a=q.getSliceStatus():t.friendly&&x&&d.isDef(w)&&(a=x.getSliceStatus(w,F,v,A));return a}}},Tc=function(a,b){var c=[],e,f=d([]),g=function(){return c[0]&&
c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},s=function(m,p,q,s){var n=g()||0===c.length;m=Sc(a,m,p,q,b,s);g()&&(q=c.shift(),f=d(c),q.cleanup(),e=void 0);c.push(m);f=d(c);n&&m.mark();n&&p!==h.DETECTION_METHODS.AD_PLACEHOLDER&&k.trigger("primaryadfound",m)},m=function(){if(e)return e;var a,b=!1,c=0,d=0;f.each(function(e,f){var g;g=f.getDims();g.hasValidDims()&&(a=f.getPercentInView(),b=a!==h.NA,g=g.area(),c+=g,d+=a/100*g)});return e={totalArea:c,totalInView:d,hasMeasurement:b}},
p=function(){var a;a=m();a=a.hasMeasurement?r.round(a.totalInView/a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},q=function(){var c=m().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!t.isVideo();return a.calcInitialViewState(p(),c)},n=function(a){var b=-1;f.each(function(c,d){d.isNode(a)&&(b=c)});return b},v=function(a){return function(){return c[0]&&c[0][a]()}};k.on("adComponentAdded",function(a){d(a).each(function(a,b){-1===n(b)&&s(b,h.DETECTION_METHODS.MUTATION)})});k.on("adComponentRemoved",
function(a){d(a).each(function(a,b){var d=n(b);-1<d&&c.splice(d,1)})});return{getDims:v("getDims"),isObstructed:v("isObstructed"),getDetectionMethod:v("getDetectionMethod"),getContainerDims:v("getContainerDims"),getViewState:q,getPercentInView:p,isHidden:v("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},refresh:function(){e=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:s,getOutOfViewReasons:function(){var a,b=[],d=c[0],f=h.OUT_OF_VIEW_REASONS;d&&(a=e||q(),a!==h.OUT_OF_VIEW&&
a!==h.PARTIAL_VIEW_MINUS||b.push(f.GEOM),d.isHidden()&&b.push(f.HIDDEN),d.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:v("getSliceStatus")}},Uc=function(a){var b=!1;if(!d.isUndef(B.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&d(a).each(function(a,b){b.addedNodes.length&&k.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&k.trigger("adComponentRemoved",
b.removedNodes)})})}),e=function(){b=!0;r.setTimeout(function(){b=!1},40)};k.on("adComponentClicked",e);k.on("adComponentMousedOver",e);y.whenReady(function(){try{c.observe(L.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},ad=function(a,b){var c=[Vc()],e=[ca(),Wc(),Xc(),Yc(),Zc(),$c()],c=c.concat(e);return d(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Xc=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){k.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||aa();var c=u.crossQuerySelector(aa().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},za=function(a){var b;a=u.findChildWithLargestContent(a||n.contextNode.parentNode);1<u.getNodeArea(a)&&!a[h.IAS_DETECTOR]&&(b=a);return b},Zc=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,
find:function(){return B},isApplicable:function(){return t.embedded},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},bd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=d(b).findFirst(function(a,b){return N.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,d=a||c(),
g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return"#ftdiv"+b}}},cd=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&N.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},dd=function(){var a,b,c=r.getDoc(),e=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+e()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&J(h).isOneByOne(),q=function(){var a=r.getDoc().scripts;return d(a).findFirst(function(a,b){return N.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!d(c.EBG.ads).isEmpty();return b.on("sizmek")&&q&&c&&h&&e()&&f()},getCssSelector:f}},aa=function(){var a,b=k.request("features");a||(a=[dd(),cd(),bd()]);return d(a).findFirst(function(a,d){return d.isApplicable(t,b)})},Yc=function(){var a,b=function(){r.execAtEndOfThread(function(){k.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=ma().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},ma=function(){var a,b=function(){var b;(b=n.contextNode.parentNode)&&N.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ca=function(){var a=k.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){return za(r.getDoc().body)},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},Vc=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(n._cl_adpath);b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},$c=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:za,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},Wc=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:k.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},Pc=function(a,b){var c,e;c=[ed(),fd(),gd()];
e=d(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=hd();c.isApplicable(b)&&(c.setBaseStrategy(e),e=c);return e},gd=function(){return{calcDims:function(a,b){var c,d,f=new J(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=f.getRounded(),f.set("height",c.height<d.height?c.height:d.height||1),f.set("width",c.width<d.width?c.width:d.width||1));return f},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&u.nodeIsInWindow(a,r.getTop());a=!u.elementIsEmbedded(a);
return b||a}}},fd=function(){var a=k.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&u.elementIsEmbedded(a)}}},ed=function(){var a=k.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new J(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,r.getTop()),f=t.isCeltra()&&u.elementIsEmbedded(a);return d||f}}},hd=function(){var a;return{calcDims:function(b,c,e){e=d.isDef(e)?e.getAdNodeDimensions():void 0;a&&d.isUndef(e)&&(e=a.calcDims(b,c));return e},isApplicable:function(a){a=W();var c=k.request("browser"),d=k.request("features"),f=k.request("context");return f.isDeviceTypeGroupMobile()&&a.applies(c,d,f)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},Oc=function(a){var b,c,e,f=k.request("features"),g=k.request("browser");a=a||r.getWindow();var s=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(n){k.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&s(b.parent,c)}return c},
m=function(){var m,q={};try{var n,v,F,w,A,E,z=r.getMaxNumber(),P=r.getMaxNumber();t.friendly?(n=s(),F=n.left,w=n.top,z=n.width,P=n.height,v=u.browserWindowPosition(),A=v.scrX+F,E=v.scrY+w):f.on("rattie")&&g.browserIs(h.BROWSERS.IE)?(e=e||k.request("ieXDomainViewability"),c=e.determineFramePosition(),A=c.scrX,E=c.scrY):d.isDef(a.mozInnerScreenX)&&(A=r.round(a.mozInnerScreenX),E=r.round(a.mozInnerScreenY));var q={scrX:A,scrY:E,iFrameClippingWidth:z,iFrameClippingHeight:P},I,G,H=b||u.getIeDimObj(a);
b=H;d.isDef(a.innerWidth)?(I=a.innerWidth,G=a.innerHeight):H&&d.isDef(H.clientWidth)?(I=H.clientWidth,G=H.clientHeight,0===I&&0<H.offsetWidth&&(I=H.offsetWidth),0===G&&0<H.offsetHeight&&(G=H.offsetHeight)):a.frameElement&&d.isDef(a.frameElement.clientWidth)&&(I=a.frameElement.clientWidth,G=a.frameElement.clientHeight);m=I;q.height=G;q.width=m}catch(y){k.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return q};return{calcDims:function(){return new J(m())},getClippedDims:function(){var a=m();return new J({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},nb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new id:new jd(a,b,c)}}},jd=function(a,b,c){var e,f=n&&n.contextNode&&n.contextNode.parentNode?n.contextNode.parentNode:null,g=Tc(b,c),k=function(){var a,b,f;e=e||ad(t,c);a=e.find();!a&&e.usePlaceholder?m():a&&(a=d(a).isArray()?a:[a],b=e.getAdContainer(),f=e.allowForAdContainerChange,d(a).each(function(a,c){g.addAdComponent(c,d.resolve(e.detectionMethod),
b,f)}))},m=function(){var a;g.hasAd()||(a=u.getPlaceholderSpan(),f.insertBefore(a,n.contextNode.nextSibling),g.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};Uc(a);return{find:function(){g.isUsingPlaceholder()||!g.hasAd()?k():g.refresh();return g},getDetectionMethod:function(){}}},id=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Ua=function(a){var b,c=[],d=a||B,f=function(){return"stub"===h().mode};a=function(){f()&&(b=d.setInterval(function(){if("stub"!==
h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},h=function(){var a,b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,B.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:h,addEventListener:function(a,b){f()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(f())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Ta=function(a){var b=new kd,c=new ld;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){k.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
md={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){var e;e=!1;var f=r.getWindow();d.isDef(f.navigator)&&d.isDef(f.navigator.userAgent)&&(e=(e=f.navigator.userAgent)&&-1!==e.indexOf(c));return e})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!d(a).findFirst(function(a,
c){return d.isDef(N.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return d.isDef(a)&&-1!==a.indexOf(c)})})}}},Aa=function(){var a=function(a,c){var d,f=md[a];f.detect(c)&&(d=f.STRINGIFIED_METHOD);return d};return{process:function(b){return d(b).map(a).join("")}}},nd={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},kd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=n.hasOwnProperty("serverSideAppDetection")&&0!==n.serverSideAppDetection.length?!0:Aa().process(nd);b()&&k.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},ld=function(){var a=[],
b=[],c=function(b,c){var d,h=Aa().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),d=c);return d};return{detect:function(){b=d(od).map(c);0<b.length&&k.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&d.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},od=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],V=function(){var a=
h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(f){if(d)return d;f.height<a&&(a=1,b=[100]);for(f=0;f<a;f++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},pd=function(){var a,b,c=0,e=-1,f=0,g=k.request("browser"),h=function(){var a,b;a=k.request("pageUrls").getDetectedURLs();a=d(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return d.isDef(a)};b=r.setInterval(function(){var a=r.now();e=a-f;f=a;c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var d;c=c.getRounded().height;var f=u.calcMonDims().height,k=g.getUserAgent(),k=k&&null!==k.match(/(FBAN)/)?1:0,n=g.getUserAgent(),n=n&&null!==n.match(/(iPad)/)?1:0,t=h()?1:0,w=g.getUserAgent(),w=w&&null!==w.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;d=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*k-0.874412*
n+0.646972*t+0.28118*w+2.987259*(1E3<e?1:0)-2.463292);d/=1+d;a={mbah:c,mbsh:f,mbfb:k,mbip:n,mbhs:t,mbbr:w,mblr:e,mbp:d};b&&r.clearInterval(b);return 0.15<d},getDebugState:function(){return a}}},yc=function(a,b,c){var e,f,g,s,m,p=[],q=n.contextNode.parentNode,x=0,v=0,u=!1,w=!1,A=new pd,E=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},z=function(){k.trigger("delayedViewabilityReadyCallOnly")},P=function(a){y.whenReady(function(){f=new ya(qd,a,r.getDoc().body)})},I=function(){f.removePixels()},
G=function(){var a=A.getDebugState(),b=E();d.isUndef(a)&&(a={});a.mbm=d.fromBoolToNum(w);a.mbrd=d.fromBoolToNum(u);a.mbtg=d.isDef(q.tagName)?q.tagName:"na";a.mbaf=d.isDef(g)?g:"na";a.mbad=d.isDef(e)?e.getRounded().width+"_"+e.getRounded().height:"na";a.piv=d.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{k.trigger("addOutputItem",{output:a},b),k.trigger("addOutputItem",{output:-101},"pingTime",b),k.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var q;q=d.isDef(e);if(c||
!b.adDimensions)return b;q||(g=b.method,e=b.adDimensions,e.isMrcLarge(),P(e));if(d.isUndef(f)||!f.isReadyToMeasure())q=!1;d.isUndef(s)&&q&&(s=A.isLikelyToProduceFalsePositive(e));if(w=!s&&q){var n;q=f.getPercentInView();var M=E(),I=1===b.tabHidden,G=b.adDimensions.isMrcLarge()?30:50;v=r.now()-x;n=0<x?900>v:!0;x=r.now();0===b.adDimensions.area()&&(q=0);n||(q=0);var y=q;p.push({tm:t.getTagTime(),piv:y});3<p.length&&p.shift();0===q&&0<M&&(n&&(n=p.length-1,y=!0,2<=p.length&&-1<n&&(y=0===p[n].piv&&0===
p[n-1].piv),n=!y),n&&(q=M));a?(d.isUndef(m)&&(m=k.request("video")),m.setVideoSpecificScreenEventFields(b),q=b.isVideoPlayingInFullscreen?!0:!I&&q>=G&&b.isVideoPlaying):q=!I&&q>=G;b.viewState=q?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=E();M=[];I=d(b.reason);G=h.OUT_OF_VIEW_REASONS;q||M.push(G.GEOM);I.contains(G.HIDDEN)&&M.push(G.HIDDEN);I.contains(G.OBSTRUCTION)&&M.push(G.OBSTRUCTION);b.reason=M;b.sliceStatus=f.getSliceStatus();u||(u=!0,r.execAtEndOfThread(z))}else b.viewState=h.NA,b.percentInView=
-1;return b},start:function(){k.on("endAdSession",I);c&&r.setTimeout(G,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},pa=function(a,b,c,d){return{accepts:function(){var f=c.xDomainIframe,g=a.bootstrapOn("mobOrTab"),k=a.on("ios"),m=b.browserIs(h.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),q=d.isMobileAppEnvironment();return f&&g&&k&&m&&p&&!q},isImmediate:function(){return!1},
start:function(){}}},qd=function(a,b,c,e,f,g){var k,m=n.birthdate+""+r.round(1E6*r.random()),p=101,q,t,v,u=!1,w=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,g=(new Date).getTime(),h=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(h)};a.requestAnimationFrame(h);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-g}}catch(m){b.body.setAttribute("data-err",m.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},A=function(a,b){v||(p=a,v=b)},E=function(){var a,b,c;if(v)return!1;if(t)return!0;try{if(q.contentWindow&&q.contentWindow.document&&q.contentWindow.document.body){c=q.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&A(104);(b=c.isReady?c.isReady():!1)&&(t=c.isInView?c.isInView:void 0)&&A(105)}}catch(e){A(106,e)}return d.isDef(t)},z=function(a,b,c){var g=L.createElement("iframe");g.id=m;d(g.style).mixin({position:"absolute",width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var k=g.style;g[h.IAS_DETECTOR]="true";k.left=b;k.top=c;a.appendChild(g);q=g;A(102);a=q;try{var p=a.contentWindow,s=w();p.document.open();
a.contentWindow.document.write(s);p.document.close()}catch(n){A(103,n)}return g}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();E()&&(a=t(!0),c=a.isInView,u=!1,k&&(b=20*k.rate+k.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,u=!0)),A(107),k=a);return c},isNotReadyToReport:function(){return!E()},createdElement:q,remove:function(){z.parentNode&&z.parentNode.removeChild(z)},getStatus:function(){return p},getError:function(){return v},isReadingInvalid:function(){return u},getRate:function(){return q.contentWindow&&
q.contentWindow.document&&q.contentWindow.document.body&&q.contentWindow.document.body.getRate?q.contentWindow.document.body.getRate():-1},percentInView:g}},ya=function(a,b,c){var e,f=b.getRounded(),g=[],h=!1;b=V().getConfig(f);var m=b.percentInViewSliceArray,k=1==b.numberOfSlices,q={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},n=function(){var a;if(!h)for(h=!0,a=0;a<g.length;a++)if(g[a].isNotReadyToReport()){h=!1;break}return h},v=function(a){var b=[],c=0;r.floor(a.height/m.length);var e=
r.floor(a.width/2-1);d(m).each(function(d,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(e)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},u=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),d(a).map(function(a,b){b.percentInView=100-b.percentInView}));d(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));
return!b.isInView});return c},A=function(){var a,b,c,e=[];q.mbs=[];d(g).each(function(b,c){a=c.isInView();q.mbs.push(a);e.push({isInView:a,percentInView:c.percentInView})});b=w(e,!1);c=w(e,!0);return r.max(b,c)};(function(){e=k?u(f):v(f);var b=e.get();d(b).each(function(b,d){var e=new a(c,d.x,d.y,d.width,d.height,d.percentInView);g.push(e)})})();return{getPercentInView:function(){var a=n(),b=A();q.mbrd=a?1:0;b!=q.mbp&&q.mbivs.push([t.getTagTime(),b]);q.mbp=b;return a?b:-1},removePixels:function(){d(g).each(function(a,
b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){q.mbm=1;g&&0<g.length&&(q.mbpr=[],q.mbir=[],d(g).each(function(a,b){q.mbpr.push(b.getRate());q.mbir.push(b.isReadingInvalid()?1:0)}));return q},isReadyToMeasure:n,getSliceStatus:function(){var a;g&&0<g.length&&(a=[],d(g).each(function(b,c){a.push(c.isInView())}));return a}}},Rc=function(a){var b=V();return{getSliceStatus:function(c,d,f,g){var h,m=[];h=c.getRounded();c=h.height;var k=h.scrY,q=new J({scrX:h.scrX,width:h.width}),n=b.getConfig(h).numberOfSlices;
q.set("height",r.floor(c/n));for(var t=0;t<n;t++)q.set("scrY",r.ceil(k+c/n*t)),h=100===a.calcPercentInView(q,d,f,g),m.push(h);return m}}},Qc=function(a,b,c,e,f){var g=n.birthdate+""+r.round(1E6*r.random()),k=101,m,p,q,t=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{var c;b.body.setAttribute("data-st","iasInit");var d;(new Date).getTime();b.body.isInView=function(a){return{isInView:d,lastUpdateTimestamp:0}};b.body.getPiv=function(){return c};b.body.isReady=
function(){return void 0!==c};(function(){var e=b.createElement("DIV");b.body.style.width="100%";b.body.style.height="100%";b.body.style.margin="0px";e.style.position="absolute";e.style.width="100%";e.style.opacity="0";e.style.height="100%";e.style.zIndex=-999;e.style.top="0px";e.style.left="0px";b.body.appendChild(e);(new a.IntersectionObserver(function(a){a=a.pop();a=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(a)&&(a=0);c=
a;d=0<c},{threshold:[0,1]})).observe(e)})()}catch(e){b.body.setAttribute("data-err",e.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},v=function(a,b){q||(k=a,q=b)},u=function(){var a,b,c;if(q)return!1;if(p)return!0;try{if(m.contentWindow&&m.contentWindow.document&&m.contentWindow.document.body){c=m.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&v(104);(b=c.isReady?c.isReady():
!1)&&(p=c.isInView?c.isInView:void 0)&&v(105)}}catch(e){v(106,e)}return d.isDef(p)};(function(a,b,c){var k=L.createElement("iframe");k.id=g;d(k.style).mixin({position:"absolute",width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var q=k.style;k[h.IAS_DETECTOR]="true";q.left=b;q.top=c;a.appendChild(k);m=k;v(102);a=m;try{var p=a.contentWindow,n=t();p.document.open();a.contentWindow.document.write(n);p.document.close()}catch(s){v(103,s)}return k})(a,
b,c);return{isInView:function(){var a;a=!1;u()&&(a=p(!0),a=a.isInView,v(107));return a},isNotReadyToReport:function(){return!u()},createdElement:m,remove:function(){m.parentNode&&m.parentNode.removeChild(m)},getStatus:function(){return k},getError:function(){return q},isReadingInvalid:function(){return!1},getRate:function(){return h.NA}}},rd=function(){return{decorateContextParams:function(a,b){try{var c=k.request("adNode"),d;if(d="adImpression"===a)d=k.request("adNode").hasAttribute("data-ias-autoplay");
d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(f){k.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},sd=function(){return{listenForResult:function(){k.on("videoBlockResult",function(a){var b=k.request("adNode"),c=!1,e="blockAd"+n.videoId;"failed"===a.action&&(c=!0);if(b&&d.isDef(b.blockAd))b.blockAd(c);else if(b&&d.isDef(b[e]))b[e](c)})}}},td=function(a,b){var c,e,f,g,h,m=k.request("videoTranslator"),p=k.request("videoAutoplay");f=m.translate(a.messageType);g=function(a){a=
a.eventData||{};a=d({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=d(a).mapToObj(c));return b}(a);p.decorateContextParams(f,g);e={t:a.time-n.birthdate,tp:f,sl:b};d(e).mixin(g);d(e).mixin(h);return c=d({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===f&&"normal"===g.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(f)},updateScreenLoc:function(a){e.sl=a;c.sl=a},trigger:function(){"adImpression"===f?k.persistentTrigger(f,g,h):k.trigger(f,g,h)},toString:function(){return"{"+d(e).toParams()+"}"}}).mixin(e)},ud=
function(){var a=[];return{registerEvent:function(b,c){var d=new td(b,c);a.push(d);return d},toString:function(){return"{"+d({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"}}},vd=function(){var a,b,c,e=function(e){c=d.isDef(e)?0===e:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&k.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;e()},n=function(a){a=(new Ba).getVolumeFromContext(a);e(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){k.on({adVideoStart:g,adImpression:g,volumeChanged:n,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",function(a){var c=k.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},wd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ba=function(){return{getVolumeFromContext:function(a){var b,c=-1;d.isDef(a)&&(d.isDef(a.volume)?
c=a.volume:d.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},kb=function(a,b,c){var e="IASid"+a,f="getIasVidBridgeVersion"+a,g,s,m,p,q=[],u=h.OUT_OF_VIEW,v=!1,F=!1,w=!1,A=!0,E=new ud,z=vd(),B=new sd,C=function(b){v=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=E.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(F=!0,u=w?h.IN_VIEW:!1):d.indicatesNotPlaying()?(F=!1,u=h.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,u=F?h.IN_VIEW:h.OUT_OF_VIEW):
d.indicatesNormalSize()&&(w=!1,u=F?!1:h.OUT_OF_VIEW));b=d;q.push(b);p&&J();return b},G=function(b){var c,g,h=ga().wrapToGlobal(C),m=function(a){d.isStr(a)&&(k.provide("vc",function(){return a}),k.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[f]||b.getIasVidBridgeVersion,c=d.isFunction(g)&&"2"===g.call(b)?unescape(b[e].call(b,a,h)):unescape(b[e].call(b,a)),v=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,n)}},H=function(){var c=function(a){return d(d(a).toArray()).findFirst(function(a,
b){return d.isFunction(b[e])})};g||(d([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},n));return g},D=function(){var a=H();a&&!v&&G(a);return a},K=function(a){a=(new Ba).getVolumeFromContext(a);A=d.isDef(a)?0<a:!1},J=function(){d(q).each(function(a,b){b&&(d.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&k.trigger("adSessionComplete"))});
q=[];p=!0};(function(){y.addEvent(r.getWindow(),"message",function(a){C(a)});k.on({volumeChanged:K});k.provide({videoEventsString:E,videoVersion:function(){var a,b=D();try{a=b.getVersion()}catch(c){a=-1,k.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return s=s||new wd},videoAutoplay:function(){return m=m||new rd},adNode:D});D();B.listenForResult();z.isApplicable(t)&&z.start(c)})();return{findAdNode:D,getViewStateOverride:function(){return u},isHandshakeComplete:function(){return v},
triggerInitializationEvents:J,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=A;a.isVideoPlayingInFullscreen=!1;if(u){if(u===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:u;a.isVideoPlaying=u===h.IN_VIEW}w&&F&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},xd=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,
b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},zb=function(){var a,b,c={},e=0,f=function(c){if(c||a)e+=5,b.onTick(e,function(){a?f():k.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},g=function(g,h,k,n){g=c[g];n?(d.isDef(g[h])||(g[h]=[]),g[h].push(k)):g[h]=k;b&&b.isActive()||(b=new la,e=0,f(!0),b.start());a=!0},n=function(b){d(c).each(function(e,f){var g=c[e],h={type:b,oneTime:!0,minDt:!0,asION:!0};d(g).isEmpty()||(k.trigger("addOutputItem",{output:g},e,h),
c[e]={});a=!1})};return{start:function(){k.on("preSendDt",function(a){n(a);b&&b.kill()});k.on("addThrottledProp",g)},addFieldTypes:function(a){d(a).each(function(a,b){c[b]={}})}}},Eb=function(){var a={},b=function(b){a[b]||(a[b]=new ka(1,n.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();k.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){k.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},yd=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,
function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},lb=function(a){var b={},c=a instanceof Array&&a.length;c&&(d(a).each(function(a,c){b[c.getType()]=c}),k.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(k.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),k.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(d){}}));k.provide("perfActive",function(){return c});return{isActive:c}},
da=function(a,b,c){var e=0,f=[],g=function(){var a,c={};f.sort(b);d(f).each(function(b,d){a&&(c[d.code]=d.timestamp-a);b===e&&(a=d.timestamp)});return c};return{addPoint:function(a){f.push(a)},toString:function(){return d(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){e=a},isFinished:function(){return f.length===c}}},mb=function(){function a(){}a.build=function(){var a=[],c=k.request("vc"),d={jv3:Ca,av3:Ca,jvw:yd,avw:xd};c&&d[c]&&a.push(d[c]());return a};return a}(),Ca=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
function(a,b){return a.code-b.code},h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){k.trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(B,"load",function(){k.trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new la;a.onTick({4:function(){k.trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){k.trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});
a.start()}};O("postMessageDetector",[],function(){var a=!1,b="pmdetector"+n.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var e=r.getWindow();y.addEvent(e,"message",c);e.postMessage(b,"*");r.execAtEndOfThread(function(){k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"pom",d.stringifyTriState(a));y.removeEvent(e,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});O("safeFrameDetector",[],function(){k.trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"sf",d.stringifyTriState(t.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var xb=function(){var a=n.asid,b=n.cookieBaseURL,c=n.protocol,e=function(a){d(a).each(function(a,b){k.trigger("notify",b)})},f=function(){var d;d=new T(c+"://"+b,!0);d.setParam("asid",a);d=d.toString();k.trigger("jsonp",d,e,!0);k.trigger("updateDtCount")};return{start:function(){k.on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&
a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},yb=function(a,b,c,d,f,g,s){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var q=d.baseUrl,r,t,u=g.getDocumentMode();"number"===typeof u?(t=2E3,8===u?t=4E3:8<u&&(t=8E3)):t=m(n.sp_imp_maxLength,2E3);r=t;t=q;var w=q.length,y,B,z=m(n.sp_imp_jsInfo_minLength,0),u="";try{y=r-w-z,0<y&&(B=zd(p,y,14,b.on("partialUrls")),u+=B.join("&"))}catch(C){a.add(h.ERROR_CODES.IMPRESSION_URLS)}q=t+u;p=q+="&"===q.slice(-1)?"":"&";
var D,w="";try{D=r-q.length,w+=Ad(D,"adsafe_jsinfo=",a,b,c,f,g,s)}catch(G){a.add(h.ERROR_CODES.JSINFO),w+="adsafe_jsinfo=e:"+a.toString()}q=p+w;d.macroUrl&&(q+="&"===q.slice(-1)?"":"&",q+=d.macroUrl);d.sendImpression(q);k.trigger("impressionsent")}catch(H){__IntegralASDiagnosticCall("impsend",H,n)}}}},Ad=function(a,b,c,e,f,g,k,m){return function(c){var e=c.primary.join(","),g=b,h=0,k=function(a){if(a)return","+a};g.length+e.length+5<=a&&(g+=k(e),f.impressionIsIdentifiable(!0),d(c.secondary).each(function(b,
c){g.length+c.length+5<=a?g+=k(c):h+=1}));return g+=",ov:"+h}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:e.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):d.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState;b=f.getAvidIds();u=["id:"+n.asid,"c:"+f.getCacheBustId(),"sl:"+u,"em:"+t.embedded,"fr:"+t.friendly];e.on("avidPropertiesInImpression")&&d.isDef(b)&&(u.push("abi:"+
b.bundleIdentifier),u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));a=Bd(a,c,e,f,g,k,m);return{primary:u,secondary:a}}())},Bd=function(a,b,c,e,f,g,k){var m=[];m.push("mn:"+n.mn);m.push("pt:"+function(){var b=k.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());m.push(d(g.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);f.iterate(function(a,b){var c=!b.props||d.isUndef(b.props.type),e=!b.props||b.props.type===h.IMPRESSION_EVENT;
(c||e)&&m.push(a+":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("uf:0");m.push("tt:"+n.mode);m.push("et:"+(r.now()-n.birthdate));c.on("swapids")?m.push("oid:"+n.oid):m.push("uid:"+e.unq);m.push("v:17.4.98");m.push("sp:"+(n.isSplitMode?1:0));m.push("ct:"+t.getPageTime());m.push("dtm:"+(c.on("postDts")&&y.getXHR2()?"p":"i"));m.push("gtpl:"+("true"===n.getTpl?1:0));c.on("resolution")&&(m.push("wr:"+d(u.windowSize()).toArray().join(".")),m.push("sr:"+d(u.screenSize()).toArray().join(".")));
n.mainScriptTime&&m.push("mst:"+(n.mainScriptTime-n.birthdate));return m},zd=function(a,b,c,e){var f,g=[],h=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(f=d(a).map(function(a,b){if(h(b))return b}),a=d(a).map(function(a,b){if(!h(b))return b}),d(f.concat(a)).each(function(a,d){var f;f=d.val;var h=d.key,k;k=24+g.join("&").length+h.length+c;k=b-k;e&&k<f.length&&0<k&&(f=f.substr(0,k));if(f.length||""===d.val||""===d.type)f="adsafe_url="+f+"&adsafe_type="+h,h=g.join("&").length,
f.length+h<=b&&g.push(f)}));return g},vb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Cd(a.navigator.plugins);var b=a.hash(),c=b.join(".");k.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),k.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},Fd=function(a,b){return{start:function(){try{var c=Dd(),d=c.getMethodName(a),f=new T(b.getEnabledScriptUrl(a)),
g=Ed,n=r.getDoc();(new g(n.body||n.head||n.documentElement,f)).getWindow()[d]=c.getMethod(b)}catch(m){k.trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},Dd=function(){var a=function(a,c,d){a===n.asid&&(d.unshift(c),k.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:n.asid,constant:h,features:b,context:t,dtBaseURL:n.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Cb=function(){return{start:function(a,b){d(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&Fd(d,b).start()})}}},Cd=function(a){return{hash:function(){for(var b=0,c=a.length,e=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,""),f=N.hashCode(f),f=d.toBase(f,62).slice(-4),e.push(f);return e},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Ed=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var g;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||n.contextNode.parentNode).appendChild(c);
g=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,k;h=(new Date).getTime();k=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+k}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");g.open().write(b);g.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Da()}catch(Gd){__IntegralASDiagnosticCall("main",Gd,
n)}};try{(function(){var n=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,n,n.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
