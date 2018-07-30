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
		jsDoSplit: false,
		cocaPuffsPath: "",
		debug: "false",
		killPhrases: "",
		jsDiag: 'true',
		version: '17.4.128',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.95.js", main: "static.adsafeprotected.com/main.17.4.128.js"},
		protocol: 'https',
		jsref: "",
		asid: "0984b247-9417-11e8-8f27-40167e358f15",
		allowViewability: "true",
		jsFeatures: "cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,useAvidGeometricMeasurement,mrcAudit:1",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "300",
		adHeight: "250",
		forceAppend: "false",
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
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=33642&pubEnt=3584127',
		fwMonitoring: 'true',
		doNothing: false,
		mn: "app01sje",
		mobOrTab: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/33642\/3584127\/",
		anId: '',
		advEntityId: '33642',
		pubEntityId: '3584127',
		videoId: '',
		videoChannel: '',
		customViewability: [],
		serverSideAppDetection: []
	};
try {
	__IASScope = typeof window !== "undefined" ? window : this;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;

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

	__IntegralASConfig.perf = (function() {
		var _marks = {};
		var START_CODE = 'A';
		var END_CODE = 'Z';

		function _addMark(codeName, time) {
			// TODO: consider validation that codeName doesn't already exist and throwing in debug mode
			// also that the code name is a string of the expected format
			// and/or consider consolidating all PERF_MARK_ definitions into a global-to-our-closure constants file
			// (except the ones in this file, since _init() wouldn't have access to that scope)
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
					// TODO: if we address the CORS issues in FW, we can gather more details about the download process here
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
				canUsePerformanceAPIs = __IASScope.performance &&
					isFunc(__IASScope.performance.getEntriesByName) &&
					isFunc(__IASScope.performance.now) &&
					__IntegralASConfig.perfBirth !== null;

				if (canUsePerformanceAPIs) {
					downloadMark = __IntegralASConfig.jsDoSplit ? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD : PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

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
	}());


} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}

__IntegralASConfig.initialize=function(p,w,L){function La(){var k;p.perf.markStart(ha);N.startSystem();l=N.getAggregator();l.provide({omidAdSessionContext:{}});k=__IASOmidVerificationClient;l.provide({omidVerificationClient:k});k=[{environment:new ia(k),adSessionReadyStrategy:new Ma(ja,k)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){ja()}}}];(new Na(k)).resolve().adSessionReadyStrategy.start();p.perf.markEnd(ha)}function ja(){var k,a;p.perf.markStart(ka);a=
X.instantiateModules();k=X.preImpression(a.mDataTransfer,a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t);X.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,k,a.mVideo);X.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t);p.perf.markEnd(ka)}var l,X=function(){function k(a){var b=new Oa(a,
t),c=new Pa,s=new Qa(a,t),m=Ra(a,t),q=(new Sa(p,t,a)).resolve(),n=[b],k=[];m.applies()&&n.push(m);s.applies()&&n.push(s);c.applies(a,t)&&n.push(c);d(q).each(function(a,b){n.push(new Ta(b,t));k.push(b.id)});0<k.length&&l.trigger("addOutputItem",{output:k},"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0});return n}function a(a,b,c,s){var m=k(a);return d(m).map(function(q,n){var m;m=new Ua(n,b);var k=(new Va(c,a,n.rts)).getCallbacks(),k=new Wa(s.createPingJobs(n.type,n.timeInViewThresholds,k,n.metricId));
m=n.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Xa(m,n.minUnit,k,t.isVideo()):new Ya(m,new $(n.minUnit),k);m.start();return m})}function b(a,b,c,s,m,q,n,k,F,z){try{p.perf.markStart(la),p.tpiLookupURL&&Za(n,k).init(p.tpiLookupURL),t.isDomless()||z.isStarted()&&z.sendOriginList(),N.runAll(),r.execAtEndOfThread(function(){var q;try{p.perf.markStart(ma);q={output:(new Date).getTime()-m};a.addItem(q,"sinceFw",{type:h.DT_CODES.ADTALK});d.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},
"readyFired",{type:h.DT_CODES.ADTALK});p.perf.markEnd(ma);var n,k;p.isSplitMode&&(k=p.protocol+"://"+p.sp_cdnScripts.main,p.perf.markResource($a,k));p.impUrl&&p.perf.markResource(ab,p.impUrl);n=p.perf.getData();l.trigger("addThrottledProp",h.DT_SLOT.IM,"prf",d(n).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(v){s.add(h.ERROR_CODES.ADTALK_DELAY)}}),p.perf.markEnd(la)}catch(x){s.add(h.ERROR_CODES.EVENT_LOOP_ONE)}}function c(a,c,g,s,m,q,n,k,d){var h;"true"!==p.minimizeCalls&&(h=(new Date).getTime(),
r.execAtEndOfThread(function(){b(a,c,g,s,h,m,q,n,k,d)}))}return{instantiateModules:function(){var b,c,g,s,m,q,n,k,d={};p.perf.markStart(na);l=N.getAggregator();d.mFeatures=l.provide("features",bb());l.provide("mobileApp",function(){return b=b||new cb(d.mFeatures)});l.provide("avidJsClient",function(){return c=c||new db(r.getWindow())});l.provide("context",t);d.mBrowser=l.provide("browser",(new eb).createInstance());d.mErrors=fb();d.mIds=l.provide("ids",gb());d.iOutput=new hb(l);g=oa();d.mComm=(new ib).createInstance(d.mErrors,
g);d.viewabilityMeasurement=(new jb(new kb(d.mIds),d.mFeatures,d.mBrowser)).create();d.mFeatures.on("swapids")&&(p.oid=p.asid,p.asid=d.mIds.unq);d.mAdTalk=(new lb).createInstance(d.mFeatures);s=mb();g=nb(l);m=l.provide("mPage",(new ob).createInstance());d.mAncestorOrigins=pb();d.mPageUrls=l.provide("pageUrls",(new qb).createInstance(d.mAncestorOrigins,r));q=rb();l.provide("ieXDomainViewability",sb(d.mBrowser));n=tb(d.mBrowser);d.mVideo=l.provide("video",!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?
{}:ub(p.videoId,d.mFeatures,q));vb(wb.build());n=(new xb).createInstance(d.mErrors,n,d.mFeatures);m=(new yb).createInstance(n,d.mErrors,m,t);k=l.provide("jobFactory",zb());d.mDataTransfer=Ab(n,d.mErrors,d.mFeatures,d.mIds,d.iOutput,d.mBrowser,q,s);s=Bb(d.mErrors,d.mFeatures,l,g);d.mMode=Cb(s,d.mFeatures,d.viewabilityMeasurement.isImmediate());d.mViewability=l.provide("viewability",Db(new E,d.viewabilityMeasurement,d.mBrowser,d.mDataTransfer,d.mFeatures,l,d.iOutput,m,q,d.mVideo));a(d.mFeatures,d.mViewability,
g,k);d.loopDelay=pa();d.mDataTransfer.setViewabilityMod(d.mViewability);p.perf.markEnd(na);return d},preImpression:function(a,b,c,s,m,q,n,d,k,z){var x,Q,B,r,t;p.perf.markStart(qa);try{c.isApplicable(z)&&(c.start(),s.addItem(c.getFrameMap(),"fm"),k.on("fm2")&&s.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),k.on("idMap")&&(x=c.getIdMap())&&s.addItem(x,"idMap"))}catch(A){m.add(h.ERROR_CODES.ADTALK_GENERAL)}try{q.isApplicable(n,k,z)&&q.start(),t=d.detectTopURL(),k.on("exch")&&(Q=(new Eb).createInstance(m,
s),Q.parse(t)),B=Fb(),B.isApplicable(k)&&B.start(k),z.usesGroupMCustomMetric()&&Gb(),r=Hb(),r.isApplicable(k)&&(r.start(),l.trigger("sendCookie"))}catch(D){m.add(h.ERROR_CODES.IMPRESSION_LEADUP)}p.perf.markEnd(qa);return t},sendImpression:function(a,b,c,s,m,q,n,k,h){try{Ib(a,b,c,s,m,q,n).send(k),d.isFunction(h.triggerInitializationEvents)&&h.triggerInitializationEvents()}catch(z){__IntegralASDiagnosticCall("impsend",z,p)}},postImpression:function(a,b,g,s,m,q,n,d,k,z,x,l,B){try{p.perf.markStart(ra);
var r=Jb();r.start();r.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FRAUDEXP]);var t=Kb(a,b,g);t.isApplicable(s)&&t.start();var A;s.bootstrapOn("getTpl")&&s.on("usetpl")&&(A=Lb(m,q,n,b,d),A.init());c(d,k,z,n,s,m,q,b,l);x&&x.start&&x.start();B.isDomless()||Mb().start(["sca","xsca","rsrch"],s);sa();N.runTier(h.TIERS.VIEWABILITY);var D=Nb();D.isApplicable(s)&&(D.start(),S.recordBlockingTime(),p.perf.mark(Ob),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());p.perf.markEnd(ra)}catch(J){n.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),
d=function(d){return new G(d)},G=function(d){this.iterable=d};G.prototype.isObj=function(d){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return d?a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(d){return 0===this.keys(d).length};G.prototype.each=function(d,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,e=b.length;c<e;++c)d(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&d(c,b[c])};G.prototype.map=
function(d,a){var b=[];this.each(function(c,e){var f=d(c,e);if(void 0!==f||a)b[b.length]=f});return b};G.prototype.stringify=function(k,a){a=a||",";var b=[];this.each(function(a,e){var f=k(a,e);d.isDef(f)&&b.push(f)});return b.join(a)};G.prototype.toION=function(k,a){var b,c="[",e="]";a=a||0;k=k||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return d(c).toION(k,a)}):(c="{",e="}",b=this.map(function(b,
c){var e="string"===typeof b&&-1!==b.indexOf("NULL"),m=d(c).toION(k,a);return e?m:(k[b]||b)+":"+m}));return c+b.join(",")+e};G.prototype.compareTo=function(d){var a=!1;this.each(function(b,c){d[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(d){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},d)};G.prototype._privateMixin=function(k,a,b){for(var c in a)d.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(k[c]=a[c]);return k};G.prototype.mapToObj=
function(k){var a={},b=this;this.each(function(c,e){var f=k(c,e);d(f).isObj()&&b._privateMixin(a,f)});return a};G.prototype.invert=function(){return this.mapToObj(function(d,a){var b={};b[a]=d;return b})};G.prototype.mixin=function(d,a){return this._privateMixin(this.iterable,d,a)};G.prototype.find=function(d){var a;this.each(function(b,c){d(b,c)&&(a=c)});return a};G.prototype.findFirst=function(d){var a,b;this.each(function(c,e){!b&&d(c,e)&&(a=e,b=!0)});return a};G.prototype.keys=function(d){var a=
[];this.each(function(b){a.push(b)},d);return a};G.prototype.asStrings=function(){var d={};this.each(function(a,b){d[a]=""+b});return d};G.prototype.selectProperties=function(k){var a={},b=this;d(k).each(function(c,e){d.isDef(b.iterable[e])&&(a[e]=b.iterable[e])});return a};G.prototype.filter=function(k,a){return this.map(function(a,c){var e;if(d.isUndef(k)||d.resolve(k,a,c))e=c;return e},a)};G.prototype.toArray=function(){return this.map(function(d,a){return a})};G.prototype.JSONStringify=function(){var d,
a,b=!1;w.Prototype&&w.Prototype.Version&&-1===w.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);d=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return d};G.prototype.contains=function(k){var a=d(this.iterable).findFirst(function(a,c){return k===c});return d.isDef(a)};d.toBase=function(d,a){var b,c=0>d,e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];d=c?-d:d;do b=d%a,f.push(e[b]),d=(d-b)/a;while(0<
d);f=f.reverse().join("");return c?"-"+f:f};d.isDef=function(d){return"undefined"!==typeof d};d.isUndef=function(k){return!d.isDef(k)};d.isBool=function(d){return"boolean"===typeof d};d.noop=function(){};d.identity=function(d){return d};d.isFunction=function(d){return"function"===typeof d};d.isStr=function(d){return"string"===typeof d};d.useIfDef=function(k){return d.isDef(k)?k:!1};d.stringifyTriState=function(d){return!0===d?1:!1===d?0:"na"};d.getNum=function(d){d=parseInt(d);isFinite(d)||(d=-1);
return d};d.resolve=function(k){var a=d(arguments).toArray();a.shift();return d.isFunction(k)?k.apply({},a):k};d.flatJSONParse=function(d){var a,b,c,e=/"(\w+)":(\d+|(?:"([^"]*)"))/g,f={};for(c=e.exec(d);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=e.exec(d);return f};d.debounce=function(d,a,b){var c,e=b||w;return function(){var b=this,g=arguments;e.clearTimeout(c);c=e.setTimeout(function(){c=null;d.apply(b,g)},a)}};d.last=function(d){return d[d.length-1]};d.collapseArgsIntoHash=function(d,a){var b={};a?b[d]=
a:b=d;return b};d.fromBoolToNum=function(d){return d?1:0};d.isNumeric=function(k){return d.isDef(k)&&null!==k&&!isNaN(k)};var N=function(){var k,a={},b=[],c=[],e=function(){var a={},b=d(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,e,f,q,n){n=n||{};var v,h,z=function(a){0===b.length&&(b=d(a).map(function(a,b){return k.request(b)}))},x=function(){if(!v){var a=[];v=!0;z(["features","browser","context"]);n.emits&&(c.events=new E);if(!n.applies||n.applies.apply(n,b))h=!0,a=d(f).map(function(a,
b){return k.request(b)},!0),a.push(c),d(c).mixin(q.apply({},a))}};(function(){var b=n.tier;d.isDef(b)&&(a[b]=a[b]||new aa,a[b].push(x))})();k.provide(e,function(){var a;x();h&&(a=c);return a});return c};e.runAll=function(){var b=d(a).keys().sort(function(a,b){return a-b});d(b).each(function(a,b){e.runTier(b)})};e.runTier=function(b){a[b].run();delete a[b]};e.startSystem=function(){k=k||new ta;d(c).each(function(a,b){f.apply({},b)})};e.getAggregator=function(){return k};return e}(),h={MRC_LARGE_AD_SIZE:242500,
FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",
AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",
COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",
MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",
OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,
0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},ha="mf",ka="cm",na="in",qa="pr",ra="po",Ob="bl",la="lo",ma="lt",$a="md",ab="id",Y=function(){return{applies:function(d,a){var b=l.request("mobileApp");return(d.browserIs(h.BROWSERS.CHROME)||d.isAndroidWebViewBrowser()||d.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&d.hasIntersectionObserver()&&
a.on("chromeNativeIO")}}},Gb=function(){var d,a,b=!1,c=l.request("mPage"),e=function(){!b&&a&&d&&!c.isHidden()&&(b=!0,l.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){d=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;e()});l.on("impressionsent",function(){a=!0;e()});c.onHiddenChange(e)},mb=function(){var k=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=d(c).selectProperties(d(b).keys());c=d(c).asStrings();var e=
d(c).compareTo(a);e&&(e.t=t.getTagTime(),k.push(e));d(a).mixin(c)});return{toString:function(){return d(k).toION(b)}}},ta=function(){var k=new Pb,a=new E;return d(k).mixin(a)},E=function(){var k={},a={},b=function(b,c,g){if((b=a[b])&&0!==b)return g&&(b=b.slice(0,1)),d(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){k[a]=k[a]||new aa;k[a].push(b,c)};return{on:function(a,f){var g={};f?g[a]=f:g=a;d(g).each(c);d(g).each(b)},once:function(a,f){b(a,f,!0)||c(a,f,1)},trigger:function(a){var b=
d(arguments).toArray();b.shift();var c;(c=k[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=d(arguments).toArray();c.shift();var g=b;a[g]=a[g]||[];a[g].push(c);(g=k[b])&&g.run.apply({},c)}}},ba=function(){var k=function(a,c,e){var f,g=c.length,s=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);e&&e(a,c);if(s&&s.length){for(a=0;a<s.length;a++)(f=s[a])&&u.isWindow(f)&&(c[g]=a,k(f,c,e));c.pop()}},a=function(a,c){try{k(c||top,[0],a)}catch(e){}};return{traverse:a,getFrames:function(b,c){var e=
[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<e.length;b++)if(e[b]===a){c=!1;break}b=c}b&&e.push(a)},c);return d(e).filter(b)}}},aa=function(){var k=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;k[k.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;d(k).each(function(b,c){c.apply({},a)})}}},Wa=function(k){var a={};return{doEligibleJobs:function(b){d(k).each(function(c,e){var f=e&&e.getTime();d.isDef(f)&&b>=f&&!a[f]&&(e.getTask().call(),
a[f]=!0)})}}},Qb=function(){var k,a=new ua,b=function(b,e,f,g){var s,m,q,n;if(JSON&&JSON.parse)try{s=JSON.parse(b.data),m=b.source,n=d.noop,e(s)&&(g&&(q=g(m,s))&&(n=function(){a.send(function(){return q},m)}),f(b,s,n))}catch(k){s&&l.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,e,f){k=function(g){b(g,a,e,f)};y.addEvent(w,"message",k)},stop:function(){k&&y.removeEvent(w,"message",k);k=null}}},ua=function(){var k=function(a){return d(a).isObj()?[a]:(new ba).getFrames(a)},
a=function(a){return d(a).mapToObj(function(a,b){var f;d.isFunction(b)||(f={},f[a]=b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var e=k(c);d(e).each(function(c,e){var s;s=d.resolve(b,e)||{};s.sentTime=r.now();s=a(s);e.postMessage(d(s).JSONStringify(),"*")})}}}},Rb=function(k,a){return{onAll:function(b){var c={};d(a).each(function(e,f){k.on(f,function(){c[f]=1;d(c).keys().length===a.length&&(c={},b())})})}}},hb=function(k){var a=0,b={},c=function(b,c,e){if(d.isUndef(b.output))throw Error("item with id "+
c+' must have "output" method');this.item=b;this.id=c||++a;this.props=e||{};this.output=function(){var a=d.resolve(b.output);this.props.asION&&(a=d(a).toION());return a}},e=function(a){var c,e,f=[];for(c in b)b.hasOwnProperty(c)&&(e=a(c,b[c]))&&f.push(e);return f},f=function(a,e,f){f=f||e;f="string"!==typeof f?f:{};var q=function(a,e,f){a=new c(a,e,f);b[a.id]=a};d(a.output).isObj()&&!f.asION?d(a.output).each(function(a,b){q({output:b},a,f)}):q(a,e,f)};k.on("addOutputItem",function(a,b,c){f(a,b,c)});
return{addItem:f,filterOutput:function(a,b){return e(function(c,e){var f=e.props,k;a(f)&&(k=e.output(),f.encode&&(c=encodeURIComponent(c),k=encodeURIComponent(k)),d.isFunction(b)?b(c,k):b[c]=k)})},iterate:e,cleanup:function(){e(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Pb=function(){var k={},a=function(a,c){k[a]=c};return{request:function(a){var c,e=k[a],f=d(arguments).toArray();f.shift();d.isUndef(e)||(c=d.isFunction(e)?e.apply({},f):e);return c},provide:function(b,
c){c?k[b]=c:d(b).each(a);return c}}},yb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new Sb:new Tb(d,a,b,c)}}},Tb=function(k,a,b,c){var e;return{collect:function(){var a=k.find(),g=a.getOutOfViewReasons(),s=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&e?e:H(u.calcWinDims()),q=a.getDims();e=m;if(!a.hasAd()||!m.hasValidDims()||!q.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:m,adDimensions:q};!0===s&&g.push(h.OUT_OF_VIEW_REASONS.FOCUS);
return{winDimensions:m,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:g.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:g.join("."),obstructed:d.stringifyTriState(a.isObstructed()),isHidden:d.stringifyTriState(a.isHidden()),tabHidden:d.stringifyTriState(s),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Sb=function(){return{collect:function(){return{}}}},Ub=function(k){k=
k||d.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=k(b);c();0!==a.length&&b===f.state||a.push({state:b,duration:0})}}},va=function(d,a){var b=d||1,c=0,e=0,f,g=0;return{start:function(){0===c%b&&(f=r.now())},stop:function(){var s=f||a;0===c%b&&(g+=r.now()-s,e++);c++},getTime:function(){return g},
getCount:function(){return e}}},wa=function(){var k,a=0,b=0,c=new E(!0),e=function(){k&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(e):f())},f=function(){k=!1;a=0};return{onTick:function(a,e){var f=d.collapseArgsIntoHash(a,e);d(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},start:function(){k||(k=!0,r.execAtEndOfThread(e))},kill:f,isActive:function(){return k}}},Vb=function(d,a){var b,c=a,e=function(a){b||(a&&d(),b=r.setInterval(d,c))},f=function(a){a&&d();r.clearInterval(b);b=null};return{start:e,
stop:f,updateFrequency:function(a,b){c=a;f();e(b)}}},$=function(d){var a,b,c=0,e=t.getTagTime(),f=0,g=!1;return{getTotalTime:function(){return f},stop:function(){c=0;e=t.getTagTime();g=!1},mark:function(){a=g?t.getTagTime()-e:0;c+=a;c>=d&&(b=c-a<d,f+=b?c:a);e=t.getTagTime();g=!0}}},T=function(k,a){var b=k||p.adsafeSrc||p.requrl;b&&0===b.indexOf("http")||(b=p.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],e=b[2],f=b[3],g=b[4],s=b[5],m=k?b[6]:
"",q=a?b[7]:"",n={},v=function(a){d.isDef(a)&&(g=a);return g},h=function(a){d.isDef(a)&&(s=a);return s},z=function(a,b){return a+"="+d(b).toION()},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var e,f;(e=n[b])?n[b]=e+c:a&&q.length&&(e=q.split(b),f=1<e.length)&&(f=e[1].split("&")[0],e=[e[0],f].join(b),q=q.replace(e,e+c))},fullDom:c,hostname:f,sub:v,master:h,setParam:function(a,b){n[a]=n[a]||{};d(b).isObj()?d(n[a]).mixin(b):n[a]=b},path:function(a){m=a},toString:function(){var a=
v()?v()+".":"",b=m?"/"+m:"",c;q||!d(n).isEmpty()?(c=d(n).isEmpty()?"":d(n).stringify(z,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return e+"://"+a+h()+b+c}}},sa=function(){var k=function(a){var c=[];d(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var e;c&&c.id&&(e=c.id.replace(/[^\w-_.>\/]/g,""));return e};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=l.request("adSlotIds"))c=b;else{var e,f;if(e=u.getOurNodeInTop()){var g=u.getAncestorNodes(e);
f=d(g).map(a)}if(b=f=f&&k(f))l.trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0}),l.provide("adSlotIds",b),c=b}return c}catch(s){l.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}}()};N("GPTRefreshDetection",[],function(){var k=sa();if(k&&d(k).isArray()&&0<k.length){k=k.join("::");try{var a=p.asid,b=r.getTop();b.__IntegralASExec=b.__IntegralASExec||{};b.__IntegralASExec.adSlotData=b.__IntegralASExec.adSlotData||{};b.__IntegralASExec.adSlotData.hasOwnProperty(k)?b.__IntegralASExec.adSlotData[k].refreshCount+=
1:b.__IntegralASExec.adSlotData[k]={refreshCount:0,refreshSessionId:a};var c=b.__IntegralASExec.adSlotData[k];l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ar",(0===c.refreshCount?"self":c.refreshSessionId)+"."+c.refreshCount)}catch(e){l.trigger("error",h.ERROR_CODES.AD_REFRESH)}}else l.trigger("error",h.ERROR_CODES.AD_REFRESH)},{tier:h.TIERS.ENVIRONMENT,applies:function(d,a,b){return b.isGPTRefreshable()}});var pb=function(){var k,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,
"")};return{isApplicable:function(a,b,f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{k=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return k&&k.length||0},getTopDomain:function(){return d.last(k)},sendOriginList:function(){var a;a="ao:"+(k?d(k).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",
{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},Lb=function(k,a,b,c,e){var f=function(a,b,c){e.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(e){try{a.diagnostic("c");var g=e.length,q=0,n=0;f(g,0,0);d(e).each(function(a,b){k.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){f(g,q,++n)},!0);f(g,++q,n)})}catch(v){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+p.asid;
k.jsonp(a,g)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},Bb=function(d,a,b,c){return{enabled:"true"===p.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===p.accountForSadImps&&c.measure(a),p._onAPIResult&&p._onAPIResult(a)}catch(f){d.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},eb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new Wb:new Xb}}},Xb=function(){var k=h.BROWSERS,a,b=function(){var a="0",b=r.getWindow(),c=function(a){return a.replace(/\D+/g,
",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var e=r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{e.AllowScriptAccess="always"}catch(f){a="6"}}catch(d){}a=c(r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(g){try{b.navigator.mimeTypes[h.FLASH_MIME].enabledPlugin&&(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(k){}}return a},c=function(){d.isUndef(a)&&(a=b());return a},e=function(a){return f()===
a},f=function(){var a="u",b=r.getWindow();try{d.isDef(b.opera)&&d.isDef(b.opera.buildNumber)?a=k.OPERA:d.isDef(b.mozInnerScreenY)?a=k.GECKO:d.isDef(b.chrome)&&d.isDef(b.chrome.csi)?a=k.CHROME:d.isDef(b.msWriteProfilerMark)&&d.isDef(b.crypto)?a=k.MSEDGE:d.isDef(b.attachEvent)||d.isDef(b.msCrypto)?a=k.IE:d.isDef(b.WebKitPoint)&&(a=k.WEBKIT)}catch(c){}return a},g=function(){var a=!1,b=r.getWindow();d.isDef(b.navigator)&&d.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:e,
hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!d.isFunction(a.postMessage))},getFlashVersion:c,getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:h.NA},getBrowserType:f,getUserAgent:g,params:function(){var a=f(),b=c(),g;g=["{45EA75A0-A269-11D1-B5BF-0000F8051515}",
"{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var n=h.NA,v=r.getDoc(),F=v.createElement("div");if(e(k.IE))try{if("-ms-ime-align"in v.documentElement.style)n="11";else for(F.style.behavior="url(#default#clientcaps)",v=0;v<g.length&&!(n=F.getComponentVersion(g[v],"componentid").replace(/,/g,"."));v++);}catch(z){}g=n;n=h.NA;F=r.getWindow();d.isDef(F.navigator)&&d.isDef(F.navigator.appName)&&(n=F.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,abv:g,an:n}},isAndroidWebViewBrowser:function(){var a=
g(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return d(b).findFirst(function(b,c){return M.contains(a,c)})};return M.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=g())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Wb=function(){var d=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},
params:function(){return{br:"u",fv:"0",abv:a(),an:a()}},browserIs:d,getUserAgent:d,hasPostMessage:d,hasFlashEnabled:d,hasAncestorOrigins:d,hasIntersectionObserver:d,isAndroidWebViewBrowser:d}},ib=function(){return{createInstance:function(d,a){return t.isDomless()?new Yb(a):new Zb(d,a)}}},Zb=function(k,a){var b=function(a,b){var c,e,f=p.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];e=c[0]+b+c[1];"true"===p.forceAppend?"script"!==a?(c=L.createElement("DIV"),c.innerHTML=e,f.appendChild(c.childNodes[0])):(c=L.createElement("SCRIPT"),c.src=b,f.appendChild(c)):L.write(e)},c=function(a,b,c){var e=!c&&y.getXHR2();e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},e=function(a,b,c,e){var f=L.createElement("script");c=c||p.contextNode.parentNode;
f.type="text/javascript";f.src=a;b&&(f.onload=b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));d.isDef(c)&&c.appendChild(f)},f=function(a){d.isFunction(a)?a({iasImpId:p.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},g=function(b,c,f,d){e(a.wrap(b,c,f,d))};l.on({addNode:b,send:c,exec:e,notify:f,jsonp:g});return{addNode:b,send:c,exec:e,notify:f,jsonp:g}},Yb=function(k){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":
"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},e=function(a){d.isFunction(a)?a({iasImpId:p.asid}):a&&"string"===typeof a&&b(a)},f=function(a,b,e,f){c(k.wrap(a,b,e,f))};l.on({addNode:a,send:b,exec:c,notify:e,jsonp:f});return{addNode:a,send:b,exec:c,notify:e,jsonp:f}},t=function(){var k="undefined"===typeof window,a="undefined"!==
typeof w&&"undefined"!==typeof top&&w!==top,b=function(){var a=!1;if(k)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return k||d.isDef(r.getWindow().mraid)},e=function(){return!k&&d.isDef(r.getWindow().mraid)},f=function(){var a=!1;if(!k)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&d.isFunction(b.addVideoEventListener),a=e()&&!!a;return a},g=function(){var a;if(!(a=-1!==p.mode.indexOf("jsvid"))){var b;a=!1;if(!k){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=
c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=l.request("omidVerificationClient"),a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||f());a=b}return a},s=function(){return p.mobOrTab},m=function(a){return!1===d(p.customViewability).isArray()?!1:0<d(p.customViewability).filter(function(b,c){return M.contains(c.id,a)}).length},q=function(){return m("grpm")||p.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,
c;if(k)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(e){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-p.birthdate},getPageTime:function(){var a=h.NA;!k&&d.isDef(w.chrome)&&d.isDef(w.chrome.csi)&&d.isFunction(w.chrome.csi)&&(a=r.round(chrome.csi().pageT));return a},isVideo:g,isMobileApp:c,isSpecifiedAd:function(){var a=!1;k||(a=(a=p._cl_adpath)&&d.isStr(a));return a},isAvid:function(){return!k&&d.isDef(r.getWindow().avid)},
isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return k},isAvidNative:function(){var a=!1;if(!k){var b=l.request("avidJsClient");b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;k||(a=void 0!==ca());return a},isMraid:e,isSafeFrame:function(){var a=!1;k||(a=d(r.getWindow().$sf).isObj(!1)&&
d(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:s,usesIASFullyInViewCustomMetric:function(){return m("fiv")||p.use100v},isNativo:function(){var a=!1;k||(a=(a=p._cl_adpath)&&M.contains(a,".ntv"));return a},usesGroupMCustomMetric:q,isCeltra:function(){var a=!1;k||(a=xa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return q()&&s()},usesZeroPivCustomMetric:function(){return!1===d(p.customViewability).isArray()?!1:0<d(p.customViewability).filter(function(a,
b){return d(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isGPTRefreshable:function(){var e;if(e=!k)if(e=!c())if(e=!g())if(e=a)if(e=b)if(e="jload"===p.mode)try{var f=r.getTop();e=!!f.googletag.apiReady&&d.isFunction(f.googletag.pubads)&&d.isFunction(f.googletag.pubads().refresh)}catch(s){e=!1}return e}}}(),y={addEvent:function(k,a,b,c){d.isDef(k.addEventListener)?"mouseenter"===a?k.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?k.addEventListener("mouseout",
y.mouseEnter(b),c):k.addEventListener(a,b,c):d.isDef(k.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),k.attachEvent("on"+a,b))},removeEvent:function(k,a,b){d.isDef(k.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),k.removeEventListener(a,b)):d.isDef(k.detachEvent)&&k.detachEvent("on"+a,b)},mouseEnter:function(d){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||d.call(this,b)}},isAChildOf:function(d,
a){if(d===a)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d},getStyle:function(d,a,b){var c="",e=L.defaultView&&L.defaultView.getComputedStyle;b=b||"";e?c=(d=L.defaultView.getComputedStyle(d,b))?d.getPropertyValue(a):c:d.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=d.currentStyle[a]);return c},getXHR2:function(k,a){var b,c;d.isDef(w.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):d.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(k,
a){if(t.isDomless())r.setTimeout(function(){k()},50);else{var b=a||(t.xDomainIframe?L:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},e=this;(function(a){var g=function(){a(!0)};d.isFunction(L.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(g):e.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(k)}},isSandboxed:function(d){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=
b.frameElement}catch(e){}if(a)d=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(d.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}d=a}c=d}return c},styleElement:function(k,a){if(k&&d(k.style).isObj()&&d(a).isObj()){var b="";d(a).each(function(a,e){b+=a+": "+e+" !important;"});k.style.cssText=b}},nodeIsAbsolutelyPositioned:function(d){return"absolute"===y.getStyle(d,"position")||d.style&&"absolute"===d.style.position}},
Z=function(k){var a,b=Z.callTypeCounter,c=[h.DT_CODES.ADTALK],e={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=h.DT_CODES;d("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,f){a[b[f]]=e[f]});return a};a=function(){var a=f()[k],e=b&&b[k];d.isDef(e)&&0!==e&&d(c).contains(k)&&(a=a+"."+e);e=b[k];b[k]=
d.isDef(e)?e+1:1;return a}();return{callType:k,enumerator:a}};Z.callTypeCounter={};var Ab=function(k,a,b,c,e,f,g,s){var m=0,q=0,n=!1,v=function(a,f,s,k,v,F){s=s||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==g.getCurrentLoc()))try{var u=p.dtBaseURL,I=new T(u,!0),w=r.now();l.trigger("preSendDt",a);u||(I.path("dt"),b.on("usedtdomain")&&
I.sub("dt"));z(I,a,f);v&&v.field&&I.setParam(v.field,v.value);k||x(I,a);l.trigger("send",I,function(){q+=1;m=r.now()-w;d.isFunction(F)&&F()},s);a===h.DT_CODES.UNLOAD&&(n=!0);e.cleanup()}catch(K){__IntegralASDiagnosticCall("dt-"+a,K),l.trigger("error",h.ERROR_CODES.PHONE_HOME)}};k=function(){n||v(h.DT_CODES.UNLOAD,-1,!0)};var F=function(a,c){var e={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=p.mode,e=e[a]||e[f];b.on(c||f+"Diag")&&e&&v(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:e})},
z=function(a,b,f){var s=new Z(b);f=d.isDef(f)?f:s.enumerator;a.setParam("asId",p.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};e.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},x=function(c,d){var n,k={};e.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===d},function(a,b){c.setParam(a,b.replace("%3A",":"))});g.fastForward();if(d===h.DT_CODES.CUSTOM||d===h.DT_CODES.UNLOAD||d===h.DT_CODES.VIDEO_EVENTS||
d===h.DT_CODES.FULLY_INVIEW||d===h.DT_CODES.PING||d===h.DT_CODES.VIEWABILITY_READY||d===h.DT_CODES.ADTALK)k.clog=s,t.isVideo()&&(n=l.request("videoEventsString"))&&!n.isEmpty()&&(k.ve=n);d===h.DT_CODES.UNLOAD&&(k.ndt=q);-1!==p.mode.indexOf("jsvid")&&(k.vv=l.request("videoVersion"));k.NULL1=b.output();k.NULL2=g.stringify(10);k.em=t.embedded;k.fr=t.friendly;k.e=a.toString();k.tt=p.mode;k.dtt=m;e.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===d);b&&a.oneTime&&(a.flagForRemoval=
!0);return b},k);c.setParam("tv",k);c.setParam("br",f.getBrowserType())};l.on({sendDt:function(a,b,c){v(a,d.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){v(a,b,void 0,!0)},sendDiag:F,updateDtCount:function(){q++},unload:k});return{send:v,unload:k,diagnostic:F,setViewabilityMod:function(a){}}},H=function(k){var a={},b=!1,c=function(){var a=1===k.nodeType?u.nodeIsHidden(k):0===k.width||0===k.height;return b?!1:a},e=function(){var b={};d(a).each(function(a,c){b[a]=r.round(c)});return b},
f=function(a){return d.isNumeric(a)||d.isUndef(a)},g=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;k!==w.parent&&(1!==k.nodeType?a=k:d.isDef(k.getBoundingClientRect)&&(b=u.getRect(k),d(a).mixin({x:d.useIfDef(b.x)||b.scrX,y:d.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&d.isNumeric(a.width)&&d.isNumeric(a.height)},toString:function(){var a=e();return[a.scrX,a.scrY,a.width,a.height].join(".")},
getRounded:e,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},u={findElementsWithSize:function(k){var a=[],b=function(c){1>u.getNodeArea(c)?d(c.children).each(function(a,c){b(c)}):a.push(c)};b(k);return a},nodeIsHidden:function(d){var a=this.getRect(d),b=0!==parseInt(y.getStyle(d,"width"))&&0===a.width,a=0===a.width||0===a.height;d="hidden"===y.getStyle(d,"visibility");
return b||a||d},calcWinDims:function(){var d,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),d={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){l.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),d={}}return d},windowSize:function(){var k={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,d.isDef(top.innerWidth))k.width=top.innerWidth,k.height=top.innerHeight;else if(d.isDef(b.clientWidth))k.width=
b.clientWidth,k.height=b.clientHeight;else if(d.isDef(a.clientWidth))k.width=a.clientWidth,k.height=a.clientHeight;else throw k.width=k.height=0,"";else d.isDef(w.outerWidth)&&(k.width=w.outerWidth,k.height=w.outerHeight);return k},browserWindowPosition:function(){var k=0,a=0;d.isDef(w.screenX)?(k=w.screenX,a=w.screenY):d.isDef(w.screenLeft)&&(k=w.screenLeft,a=w.screenTop);return{scrX:k,scrY:a}},getNodeArea:function(d){var a=-1;d&&(d=u.getRect(d),a=d.width*d.height);return a},getRect:function(k){var a=
{},b=u.browserWindowPosition();k=k.getBoundingClientRect();d.isUndef(k.x)&&(a.x=k.left,a.y=k.top);d.isUndef(k.width)&&(a.width=k.right-k.left,a.height=k.bottom-k.top);d(a).mixin(k,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(k){k=k.document;return k.documentElement&&d.isDef(k.documentElement.clientWidth)&&k.documentElement||k.body},getPlaceholderSpan:function(){var k=L.createElement("span");d(k.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});
k.innerHTML=".";return k},createImage:function(){var k=t.friendly&&r.getTop().Image;return d.isFunction(k)?new k:new Image},createHiddenIframe:function(d){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,d?{display:"none"}:b);return a},tagNameIs:function(d,a){return d.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(d,a){var b,c,e,f=1E4,g=1E4;b=y.nodeIsAbsolutelyPositioned(d);
e=!u.tagNameIs(d,"OBJECT");if(null!==d.parentNode&&!b&&e&&!u.tagNameIs(a,"BODY")){e=d;do e=e.parentNode,b=!u.tagNameIs(e,"OBJECT"),c="inline"!==y.getStyle(e,"display"),b&&c&&(b=u.getRect(e),f=b.width<f?b.width:f,g=b.height<g?b.height:g);while(e.parentNode!==L&&e!==a)}return{width:r.round(f),height:r.round(g)}},findChildWithLargestContent:function(d){var a=l.request("mobileApp").isMobileAppEnvironment(),b=function(b){for(var c=b;b.parentNode!==d&&"inline"!==y.getStyle(b.parentNode,"display");){var e;
if(!(e=!a)){e=b.parentNode;var m=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))m=!1;e=m}e&&(c=b.parentNode);b=b.parentNode}return c},c=null,e=function(a){var b,c,e=null,q=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var n=a[b],v=u.getNodeArea(n),h;if(h=v>q){h=void 0;if(h=n.parentNode===d)if(h=void 0,h="DIV"===n.nodeName)if(h=void 0,h=""===n.style.backgroundImage){var l=h=void 0,x=n.childNodes;for(h=0;h<x.length;h++)1===x[h].nodeType&&
(l=!0);h=!l}h=!h}h&&(e=n,q=v)}e&&(e.hasValidSizeForMobileApp=1<q);return e}(function(a){var b,c,e,d,n=[],k="iframe img a object embed div".split(" ");b=0;for(c=k.length;b<c;b++){var h=a.getElementsByTagName(k[b]);if(h.length)for(e=0,d=h.length;e<d;e++)n.push(h[e])}return n}(d));e&&(c=b(e),c.hasValidSizeForMobileApp=e.hasValidSizeForMobileApp);return c},screenSize:function(){if(t.isDomless())return{width:0,height:0};var k={width:-1,height:-1};try{d.isDef(w.screen)&&(k={width:w.screen.width,height:w.screen.height})}catch(a){}return k},
calcMonDims:function(){var k=d(u.screenSize()).mixin({scrX:0,scrY:0});d.isDef(screen.availLeft)&&(k={scrX:w.screen.availLeft,scrY:w.screen.availTop,width:w.screen.availWidth,height:w.screen.availHeight});return k},getOurIFrameInTop:function(){for(var d,a=r.getTop(),b=r.getWindow();b!=a;)d=b,b=d.parent;return d},getOurNodeInTop:function(){var d;t.friendly&&(d=t.embedded?(d=u.getOurIFrameInTop())&&d.frameElement:p.contextNode);return d},getAncestorNodes:function(d){var a=[],b=d.ownerDocument&&d.ownerDocument.documentElement;
if(b)for(;d.parentNode!==b;)a.push(d),d=d.parentNode;return a},getTagsNamed:function(d,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(d)}catch(e){b=null}return b},containsScriptTagWithSrc:function(k){return!!d(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return d.isFunction(k)?k(c):c===k})},contains:function(k,a){var b=!1;try{b=d.isDef(k)&&d.isFunction(k.contains)&&k.contains(a)}catch(c){}return b},querySelector:function(d,a){var b;try{b=d.querySelector(a)}catch(c){b=null}return b},
nodeIsInWindow:function(d,a){return d.ownerDocument&&(d.ownerDocument.defaultView||d.ownerDocument.parentWindow)===a},setAttributeOf:function(k,a,b){k&&d.isFunction(k.setAttribute)&&k.setAttribute(a,b)},removeAttributeOf:function(k,a){k&&d.isFunction(k.removeAttribute)&&k.removeAttribute(a)},crossQuerySelector:function(k,a){var b,c,e=[p.contextNode.parentNode,r.getDoc()];t.friendly&&e.push(r.getTop().document);if(a&&t.embedded)try{e.push(r.getWindow().frameElement.ownerDocument)}catch(f){}d(e).each(function(a,
e){try{c=u.querySelector(e,k)}catch(d){}!b&&c&&(b=c)});return b},getNodeName:function(d){return d&&d.nodeName},isWindow:function(d){var a=!1;try{a=d&&"object"===typeof d&&"setInterval"in d}catch(b){a=!0}return!!a},getChildWindowsOf:function(k){var a=[];(k=u.getTagsNamed("iframe",k))&&(a=d(k).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var d=r.getWindow().frameElement;return d&&d.id},isViewportVisible:function(d,a){var b=d.innerWidth,c=d.innerHeight,e=b>a.width&&c>a.height;
return b*c>a.width*a.height&&e},getTagName:function(d){return d.tagName.toLowerCase()},getAttribute:function(d,a){return d.getAttribute(a)},attributeMatches:function(d,a,b){d=d&&u.getAttribute(d,a);return b.test(d)},isImageTag:function(d){return d&&d.src&&u.tagNameIs(d,"img")},getDimensionFromStyle:function(k){var a,b=y.getStyle(k,"width");k=y.getStyle(k,"height");b&&k&&(a={width:d.getNum(b),height:d.getNum(k)});return a},getDimensionFromAttributes:function(k){var a,b=u.getAttribute(k,"width");k=
u.getAttribute(k,"height");b&&k&&(a={width:d.getNum(b),height:d.getNum(k)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var e,d,g;if(c(b))d=b;else if(g=b.children)for(e=0;e<g.length&&!(d=a(g[e],c));e++);return d},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,e="fixed"===y.getStyle(a,"position"),d="hidden"!==y.getStyle(b,"overflow")&&!e;t.isSpecifiedAd()&&(e||d)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||
a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent}},fb=function(){var a={},b=function(b){d.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=d(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",e;for(e in a)a.hasOwnProperty(e)&&(b+=e);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},Eb=function(){return{createInstance:function(a,b){return t.isDomless()?new $b:new ac(a,b)}}},ac=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=d(a).map(function(a,b){return b.val}),b.push(p.adsafeSrc,p.requrl,p.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(e){try{var f,g=c(e),s=g&&g.length&&g.join("|"),m=p.exchList;s&&(f=d(m).map(function(a,b){return 0<=s.indexOf(M.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},
"ex",{type:h.IMPRESSION_EVENT}))}catch(q){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},$b=function(){return{parse:function(a){}}},bb=function(){var a={},b=function(b){var c;d.isUndef(a[b])&&(c=p.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},e={},f=function(){var b,f;b=d(c).mapToObj(function(b,c){var e={};e[b]=d.fromBoolToNum(a[c]);return e});f=d(e).mapToObj(function(a,
b){var c={};c[a]=d.fromBoolToNum(g(b));return c});f.gm=d.fromBoolToNum(t.usesGroupMCustomMetric());return d(b).mixin(f)},g=function(a){a=p[a];return!0===a||"true"===a||d.isFunction(a)};d(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=d.isStr(a)?[a]:a;return d(a).map(function(a,b){if(d.isDef(p[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=p.sp_cdnScripts&&p.sp_cdnScripts[a];return c&&a},output:function(){return d(f()).toParams()}}},
tb=function(a){return{calcInitialViewState:function(a,c){var e;e={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var f={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},g=h.NA;e=c?e:f;d.isDef(a)&&a!==h.NA&&-1<a&&(g=a>=e.IN_VIEW?h.IN_VIEW:a<=e.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=e.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return g},calcPercentInView:function(a,c,e,f){var g=0,s=a;a.hasValidDims()&&!a.isHidden()&&(d([c,e,f]).each(function(a,b){if(b.hasValidDims()){var c=s.getRounded(),e=b.getRounded(),d=
Math.max(c.scrX,e.scrX),f=Math.max(c.scrY,e.scrY),g=Math.min(c.scrX+c.width,e.scrX+e.width),c=Math.min(c.scrY+c.height,e.scrY+e.height),g=g-d,c=c-f;s=H({scrX:d,scrY:f,width:0<g?g:0,height:0<c?c:0})}}),g=r.round(s.area()/a.area()*100));return g}}},gb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=w.Uint32Array&&w.crypto&&w.crypto.getRandomValues;32>
a.length;)c?(b=new Uint32Array(1),w.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(e){l.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var e=function(){return p.anId};return{getAsid:function(){return p.asid},getAnId:e,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return d.toBase(a,62)},getFwId:function(){return e()||p.advEntityId+"-"+p.pubEntityId},impressionIsIdentifiable:function(a){a&&
(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},Za=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},bc=function(a,b,c,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var f=a.getTimeInViewInSeconds(),g=a.getTimeInViewForRts();d.isDef(e)&&l.trigger("addOutputItem",{output:e},"metricId",{type:b});
l.trigger("sendDt",b,f);if(c[g])c[g]()}}}},zb=function(){return{createPingJobs:function(a,b,c,e){return d(b.getTimeThresholds()).map(function(b,d){return new bc(d,a,c,e)})}}},oa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){return"__IntegralAS_"+p.asid.replace(/\-/g,"")+"_"+r.round(1E4*Math.random())};return{wrap:function(e,d,g,s){var m=
c(),q,n,h;s=s||"ias_callback";e=""+e;RegExp(s).test(e)&&(q=RegExp("("+s+"=)(.[^&]*)").exec(e)[0],n=q.split("=")[1],h=M.stringToFn(n),e=a(e,q));w[m]=function(a){d(a);g&&h&&h(a);w[m]=void 0};return e=b(e,s,m)},wrapToGlobal:function(a){var b=c();w[b]=function(c){a(c);w[b]=void 0};return b}}},Cb=function(a,b,c){var e=function(a,b){var c=a,e;b&&(e=","+d(b).stringify(function(a,b){return a+":"+b},","),c=T(a,!0),c.appendToParamValue("adsafe_jsinfo",e),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},
rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",
function(f,m){var q;try{q=e(c,m),a.enabled?l.trigger("jsonp",q,a.callback,!0):l.trigger("send",q,d.noop,!b.on("postMon"))}catch(n){__IntegralASDiagnosticCall("jsvidimp",n,p)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===p.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,f){var m;try{var h;if(h=b)h=c&&d.isBool(c.integral_didBlock)&&
0<=c.integral_timeToDecision;h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=e(a,f);l.trigger("send",m,d.noop,!0)}catch(z){__IntegralASDiagnosticCall("fwjsvidimp",z,p)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[p.mode],e=!!b.isFW,d=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&p.mobFwUrl?p.mobFwUrl:a?p.adsafeSrc:p.requrl;a||(b+="?"+
p.reqquery);return b}(e),n=d.indexOf("BEGIN__ADSAFE"),h=-1!==n,F=h?d.slice(n):"",a=h?d.slice(0,n):a(d);return{isFW:e,baseUrl:a,macroUrl:F,sendImpression:function(a){var e=function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)e(a);else if(!b.manualDefer)l.on("adImpression",function(){e(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},
ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return w},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?l.request("omidVerificationClient"):w},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},
clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getNewActiveXObject:function(a){t.isDomless();return new ActiveXObject(a)},getDoc:function(){t.isDomless();return L},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},ob=function(){return{createInstance:function(){return t.isDomless()?new cc:new dc}}},dc=function(){var a,
b=!1,c=l.request("features"),e=new aa,f=function(){var b;c.on("blur")||c.on("abcAudit")&&923747==p.anId?(b=r.getWindow(),b=t.friendly&&b.top.document&&(d.isFunction(b.top.document.hasFocus)||d(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(d.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=d.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},g=function(){var b=r.getWindow(),c=function(){e.run(f())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,
c,!0)};a=function(){var a,b="hidden",c="visibilitychange",e=r.getDoc();d.isUndef(e.hidden)?d(["moz","ms","webkit"]).each(function(f,g){var h=g+"Hidden";d.isDef(e[h])&&(b=h,c=g+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:f,onHiddenChange:function(a){e.push(a);b||(b=!0,g())}}},cc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},qb=function(){return{createInstance:function(a,b){return t.isDomless()?new ec:new fc(a,b)}}},fc=function(a,b){var c,e=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||d.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,e;for(e in a)a.hasOwnProperty(e)&&(c=a[e],d.isUndef(b[c])?b[c]=e:b[c]+=e);a={};for(e in b)b.hasOwnProperty(e)&&(c=b[e],a[c]=e);return a},g=function(){var g,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var e=c.message,e=e.substring(e.lastIndexOf("<")+1,e.lastIndexOf(">")),f;if(f=d.isDef(e)){var g=
b.getWindow();f=!1;d.isDef(g.navigator)&&d.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?13>=parseInt(g[2],10)&&(f=!0):f=!0)))}f&&(a.g=e)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(n){}try{q.b=encodeURIComponent(parent.location.href)}catch(h){}if(t.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{q.e=encodeURIComponent(w.document.referrer)}catch(z){}}try{"jsi"!==
p.mode&&(q.d=encodeURIComponent(w.location.href))}catch(x){}try{q.f=encodeURIComponent(p.jsref)}catch(r){}try{g=m(),q.g=encodeURIComponent(g.g||""),q.q=encodeURIComponent(g.q||""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(B){}q=e(q);q=f(q);g=[];for(var C in q)q.hasOwnProperty(C)&&g.push({key:C,val:q[C]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?
c:g()}}},ec=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},nb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",p._onSuspicious)},skipAsFraudulent:function(){return b}}},rb=function(){var a=[],b={},c={sl:"n"},e=0,f,g,s={i:0,o:0,n:0,pp:0,pm:0},m=function(a){var b={},c=a.winDimensions,e=a.adDimensions;d.isDef(c)&&c.hasValidDims()&&(b.wc=c);d.isDef(e)&&e.hasValidDims()&&(b.ac=e,b.am=a.method,b.cc=a.containerDimensions);d({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,e){var f=a[e];d.isDef(f)&&(b[c]=f)});c=d(b).toParams();return""===c?"":","+c},q=function(a,c){var e=new Ub(c);return b[a]=e},n=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},v=function(){d(c).each(function(b,c){s[c]+=a.length?g-e:g});e=g},F=function(b){a.length&&v();d(b).each(function(a,b){var e=c[a];e!==b&&"n"===e&&(s[b]+=s.n);c[a]=b});a.length||v()},z=function(a){var c,
e=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=m(a);var f={sl:n(a.viewState)};g=t.getTagTime();F(f);f.t=g;c=d({toString:function(){d(b).each(function(a,b){b.fastForward()});return"{"+d(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+d(this.piv).stringify(b)+"]");a+=",as:["+d(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);d(c).mixin(a);c.width=e.width;
c.height=e.height;d.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);d.isUndef(c.reason)&&(c.reason="");return c};(function(){q("piv",function(a){var b,c=a.percentInView,e=[1,25,30,50,75];100===c||0===c?b=c:(d(e).each(function(a,f){d.isUndef(b)&&c<f&&(b=e[a-1])}),d.isUndef(b)&&(b=e[e.length-1]));return b});q("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){g=t.getTagTime();v()},registerLocation:function(e){var g,
q=!1;c.sl==n(e.viewState)&&a.length?(g=new z(e),a[a.length-1].details=g.details):(g=new z(e),a.push(g),f=e.viewState,q=!0);l.trigger("newScreenEvent",g);d(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(q&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=d({slTimes:"{"+d(s).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return n(f)}}},
M={hashCode:function(a){var b=0,c,e,d;if(0===a.length)return b;c=0;for(d=a.length;c<d;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=w,e=a.split(".");for(a=0;a<e.length;a++)if(b=c,c=c[e[a]],d.isUndef(c)||a===e.length-1&&!d.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),
c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!d.isUndef(b));a++);return b},contains:function(a,b){return d.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return d.isFunction(a.trim)?a.trim():a.replace(" ","")}},gc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var e;(e=b(c))||(c=u.getDimensionFromStyle(c),e=a(c));return e},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,e=/doubleclick.net\/pcs\/click?/,d=/_blank/,g=function(a){var e=u.tagNameIs(a,"div"),d=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return e&&d&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),n=u.attributeMatches(b,"href",e),h=u.attributeMatches(b,"target",d);g&&n&&h&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},hc=function(){var a=gc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var e;if(e=a.getDFPGoogleDiv(c)){var d;c={type:0};if(e)if(c.type=1,d=a.getClickableImage(e))c.type=2,b(d,c);else if(e=a.getNodeMatchingMinimumSize(e))c.type=3,b(e,c);e=c}else if(e=
{type:0},c=a.getNodeMatchingMinimumSize(c))e.type=4,b(c,e);return e}}};N("viewport",[],function(){var a={width:4,height:4},b=function(c,e){if(c!==e&&!u.isViewportVisible(c,a))return c;if(c!==e&&t.isFriendlyToParent(c))return b(c.parent,e)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},e=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:e,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();u.isViewportVisible(c,a)?e()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var ic=function(a){var b,c,e=function(e){b=a.setInterval(e,100);c=a.setTimeout(function(){d()},42E4)},d=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,m=a.innerHeight,q=!1;e(function(){var e;e=a.innerHeight;(e=a.innerWidth!==c||e!==m)&&(q=!0);q&&!e&&(b(),d(),q=!1);c=a.innerWidth;m=a.innerHeight})}}};N("adStuffingDetector",["viewport"],function(a,b){var c,e=function(){try{var e=a.isHidden(),g,s={};e!==c&&(g=d.stringifyTriState(e),
s.res1=g,s.ps=g,s.ts=r.now(),s.psfr=d.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",s));c=e}catch(m){l.trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){e();var b=a.getWindowWithHiddenViewport();if(b)ic(b).onResize(e)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});N("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,
a,d(b).toION())},e=function(a){2>b&&c("ha1",a);b++};(function(){var b,d;if(t.embedded)try{d=p.contextNode.parentNode,b=hc().getDFPValue(d),d={},d.df=b.type,b.size&&(d.sz=b.size.width+"."+b.size.height),b.tag&&(d.dom=b.tag),c("dfp",d),b.size&&a&&(a.events.on("newState",e),a.start())}catch(s){l.trigger("error",h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var lb=function(){return{createInstance:function(a){return t.isDomless()?new jc:
new kc(a)}}},kc=function(a){var b,c,e,f=new ta,g=new ba,s=new lc(f),m=new mc,q=new nc,n=new oc(f,a),h=function(){d.isUndef(e)&&(e=new pc(f));return e},F=function(){f.provide({frameCollection:function(){return s},adProxy:function(){return q},adTalkMessage:function(a){return new qc(a,f)},adTalkMessageCollection:function(){return m},idMapModule:h,interFrameQuerySelector:function(a){return new rc(a)}})};return{isApplicable:function(a){return d.isDef(w.JSON)&&d.isDef(w.postMessage)&&!a.isAvid()&&!a.isOmid()},
start:function(){F();g.traverse(s.addFrame);n.startListening();n.sendToKnownFrames();l.once("stopAdTalk",function(){n.stopListening()})},sendAdTalkCall:n.sendAdTalkCall,getFrameMap:function(){d.isUndef(b)&&(b=new ya(f));return b},getFrameMapIncludingPeerCase:function(){d.isUndef(c)&&(c=new ya(f,!0));return c},getIdMap:h}},jc=function(){return{isApplicable:function(){return!1},start:function(){}}},qc=function(a,b){var c,e=b.request("adProxy").myIdCard,d=b.request("frameCollection").getMe().getStringifiedPosition();
c=l.request("features").on("swapids")?p.oid:p.asid;var g=a||{},s=p.asid,e=e.tagId,m=t.embedded,q=t.friendly,n=p.birthdate;c=c.split("-")[2];var v;t.friendly?v="["+h.AD_IDENTIFIER+"-"+p.asid+"]":(v=r.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:s,srcTagId:e,srcIsEmbedded:m,srcIsFriendly:q,srcBirthdate:n,iasCommonId:c,nodeSelector:v,positionStr:d,version:"0.1"}},mc=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return d(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},sc=function(a,b,c,e){var f,g=a==w;f={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:p.birthdate,srcIsEmbedded:e?e.srcIsEmbedded:void 0,inbox:e?[e]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return d(f.position).map(function(a,b){return d.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||
f.isMe||d.isDef(f.selfDescription)}};var s=function(a){var b=f.adProxies;a=a.adProxies;var c=[];b.length&&a.length?d(a).each(function(a,e){m(b,e)&&c.push(e)}):c=a;f.adProxies=b.concat(c)},m=function(a,b){return!d(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){d(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=function(a,b){s(b);q(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},lc=function(a){var b=
[],c={},e={noMe:!0};return{addFrame:function(d,g,s){var m=a.request("adProxy").getAll();d=new sc(d,g,m,s);b.push(d);c[d.id]=d;d.isMe&&(e=d);return d},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return e}}},ya=function(a,b){var c=function(a,c){var d=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=e(d,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();q+=c.isMe?"*":"";q+=d.length?"."+d[0].tagId:"";m+=q}return m}},e=function(a,b){var c="";return c=a.length?
c+d(a).stringify(function(a,c){return b+(p.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),e=d(b.list).stringify(c,"|");return d.toBase(b.getMe().unifiedId,62)+"+"+e}}},pc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=p.contextNode.parentNode,e=a.request("interFrameQuerySelector",c),d=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var d=!1,d=!t.embedded,f="BODY"!==u.getNodeName(c)&&
"HEAD"!==u.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var v=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);g=!(g?v:!a.srcIsFriendly)}d&&f&&!g?d=!!e.queryFor(a.nodeSelector):(d=a.positionStr,a=a.srcIsEmbedded&&t.embedded,d=0===b.indexOf(d)||0===d.indexOf(b),d=!(!a||!d));return d};return{output:function(){var c,e=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==p.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(e);c=c.join("|");120<c.length&&(c=d(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},rc=function(a){var b=new ba,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),e=u.isWindow(a);c?b=a.contentWindow.document:e&&(b=a.document);return b},e=function(a,b){return u.querySelector(c(a),b)},f=function(c,f){var m,q,n;try{q=e(c,f),q||(m=b.getFrames(!0,a),d(m).findFirst(function(a,b){return n=e(b,f)}))}catch(h){}return q||n||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));
return c}}},oc=function(a){var b=!1,c,e;e=l.request("features").on("swapids")?p.oid:p.asid;var f=function(b){var c=e.split("-")[2],d=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==p.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&d},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},s=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},m=function(c,e,f){var g,
m,x,p,t;try{g=a.request("frameCollection");m=a.request("adTalkMessageCollection");x=e.messageContent.self;m.add(e);var C=g.getMe();C.unifiedId>x.unifiedId&&(C.unifiedId=x.unifiedId);var u;u=r.now()-e.sentTime;e.transferDuration=u;m=p=g.getFrame(x.id);d.isUndef(m)||d.isUndef(m.selfDescription)?(p=p||g.addFrame(c.source,x.id.split("-"),e),p.addInformationFromSrc(e,x),f()):p.addInformationFromSrc(e,x);(t=b&&a.request("idMapModule").isCandidateForMyIdMap(e))&&s()}catch(A){l.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};
return{sendAdTalkCall:s,sendToKnownFrames:function(){(new ua).send(g)},startListening:function(){c=new Qb;c.listen(f,m,g)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:m,createMessage:g}},tc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},nc=function(){var a,b=[],c=function(a){a=new tc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},sb=function(a){var b,c,e=!1,d=function(a){var d=!0;e&&(e=!1,a.stopPropagation?
(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,d=!1);return d};a.browserIs(h.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,"click",d,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(e=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},uc=function(a,b){var c,e=h.NA,f=e,g=!1,s=!1,m=!1,q=!b,n=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/
(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){l.trigger("IOPivChange",e)});f=e},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});q&&r.execAtEndOfThread(function(){e===h.NA&&(e=0)});b.observe(v(a));q&&r.execAtEndOfThread(function(){t.isBustedIframe()||l.trigger("delayedViewabilityReady")});g=!0},v=function(b){if(!d.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");
d(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return e},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){s=!0}b&&null!==b.bodyElement?n():b&&b.document?y.whenReady(n,b.document):s?l.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):n()},isStarted:function(){return g},getAdNodeDimensions:function(){var a;
c&&(a=H({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return e!==h.NA}}},pa=function(){var a=!1;(function(){y.whenReady(function(){l.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};N("loopDelay",[],pa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var vc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},
wc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Kb=function(a,b,c){var e=!1,f=function(){b.impressionIsIdentifiable()&&!e&&(e=!0,l.trigger("notify",p._onMeasurable))};return{start:function(){var b;b=[xc(),yc(),wc(),vc()];(b=d(b).findFirst(function(b,e){return e.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&d.isDef(p._onMeasurable)}}},yc=function(){return{start:function(a){Rb(l,
["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},xc=function(){return{start:function(a){l.once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},zc=function(a,b,c){var e=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=d.isDef(d(e).find(function(a,
b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||a.addEventListener("ready",function(){l.trigger("adImpression")})}}},Ac=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,e=a.getAvidAdSessionContext();a.isAvidAvailable()&&
d.isDef(e)&&(c=e.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.avidJsVersion,(c=d.isUndef(b))||(c=d.getNum(b.split(".")[0]),b=d.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Bc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},Cc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},ia=function(a){var b=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},Dc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},Na=function(a){return{resolve:function(){return d(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ma=function(a,b){var c=!1,e=!1,d=l.request("omidAdSessionContext"),g=function(b){"sessionStart"===b.type&&(d.isNative="native"===b.data.context.adSessionType,(c=!0)&&e&&(w.omidSupported=!0,a()))},s=function(b){d.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(d.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});d.isNativeVideo=
d.isNative&&"video"===b.data.mediaType;e=!0;c&&e&&(w.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(g,"IAS");b.addEventListener("impression",s)}}},Ec=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Fc=function(a,b){var c,e=function(a){var e,d,m;try{e=a.eventData.percentageInView,
d=c&&75<=e,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:d,isMeasurable:0===e||75<=e,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:e,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",e)}catch(d){}},
addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Gc=function(a,b){var c=function(a){try{var c;"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(d){__IntegralASDiagnosticCall("omidvideo",
d,w.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},za=function(a,b){var c=!1,e=function(a){var e=a.percentageInView;c=!0;a.viewState=50<=e?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=e?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(e);
a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Hc=function(a,b,c){var e=d.isDef(a)?a.environment:void 0,f=d.isDef(a)?a.measurementStrategy:void 0,g=function(){return d.isDef(f)};d.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?e.isImmediate():!0},isMeasurable:function(){return g()?
f.isMeasurable():!1},isMediaType:function(a){return g()?e.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){g()&&e.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},jb=function(a,b,c){var e=l.request("mobileApp");return{create:function(){var d=[],d=d.concat(a.getOmidMeasurementStrategies()),d=d.concat(a.getAvidMeasurementStrategies()),d=d.concat(a.getMraidMeasurementStrategies()),
d=(new da(d)).resolve(),g=new Ic(d),s=new Aa(b,c,t,e);return!d&&s.accepts()?new Jc(t.isVideo(),new E):new Hc(d,g,e.isMobileAppEnvironment())}}},kb=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new ia(a),d=[];if(b.accepts()){var g=new Kc,s=new Lc,m=new Mc(a,new E),g=[{environment:g,measurementStrategy:new Nc(a,new E)},{environment:s,measurementStrategy:new Ba(new ea,r.getWindow(),new E)}],g=(g=(new da(g)).resolve())?
g.measurementStrategy:{},q=new Ca(new Da(new U),new U,s.accepts()),s=new Cc(a,b,p.mode),n=new Ea(m,g,new E,q),b=new Dc(a,b,p.mode),a=new Fa(m,g,new Gc(a,new E),new E,q);d.push({environment:s,measurementStrategy:n});d.push({environment:b,measurementStrategy:a})}return d},getAvidMeasurementStrategies:function(){var b=l.request("avidJsClient"),d=new Ac(b),f=[];if(d.accepts()){var g=new zc(b,d,p.mode),s=new Bc(b,d,p.mode),m;m=new Ec(b,new E);if(d.supportsAdContainerGeometry()){var q=new Oc,n=new Pc,h=
new Ba(new ea,r.getWindow(),new E),F=new Qc(b,new E),q=(q=(new da([{environment:q,measurementStrategy:F},{environment:n,measurementStrategy:h}])).resolve())?q.measurementStrategy:{},n=new Ca(new Da(new U),new U,n.accepts()),h=new Rc(b,new E),b=new Ea(h,q,new E,n);m=new Fa(h,q,m,new E,n)}else n=new Fc(b,new E),b=new za(n,new E),m=new Ga(n,m,new E);f.push({environment:g,measurementStrategy:b});f.push({environment:s,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return f},
getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Sc(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var f=l.request("context"),f=new Tc(r.getWindow(),f),g=new Uc(r.getWindow(),new E);f.accepts()?(d=new Vc(r.getWindow(),new E),d=new Ga(g,d,new E),d={environment:f,measurementStrategy:d}):(f=new za(g,new E),d={environment:d,measurementStrategy:f});a.push(d)}return a}}},da=function(a){return{resolve:function(){var b=d(a).findFirst(function(a,b){return b.environment.accepts()});
if(d.isDef(b))return b}}},Ic=function(a){var b=!1,c,e={winDimensions:H({scrX:0,scrY:0,width:0,height:0}),adDimensions:H({scrX:0,scrY:0,width:0,height:0}),containerDimensions:H({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},f=function(a){return a?new H({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):H({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:f(a.windowDimensions),
adDimensions:f(a.adDimensions),containerDimensions:f(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:d.isDef(a.percentageInView)?a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:d.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,
isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var f=e;if(d.isDef(c))if(a.environment.supportsAdContainerGeometry())f=c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||75<=c.percentInView)f=c;return f},start:function(){var b;d.isDef(a)&&d.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=
!0}}},Ga=function(a,b,c){var e=!1,f=!1,g=!1,s,m,q,n,v=function(){if(!d.isUndef(m)){var a=[],b,v;e?(f?(v=!1,b=100):(v=n,b=q),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(v=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));g=!0;m.shouldDelegateToDomBasedViewability=v;m.percentageInView=b;m.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;m.outOfViewReason=a.join(".");s=m;c.trigger("measurementChanged",s)}},r=function(a){m=a;q=a.percentageInView;n=a.shouldDelegateToDomBasedViewability;v()},z=function(a){a=a.eventType;
"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?e=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(e=!1);v()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(z);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",
a)},isMeasurable:function(){return g}}},Tc=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},Vc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Rc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:e(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",
a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",
a)},translateAvidOutOfViewReasons:e}},Ca=function(a,b,c){function e(a,b,c){c=m(b,c);a=g(a,b,c);return a.width*a.height}var f=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},g=function(a,b,c){a=f(b,a);return f(c,{x:0,y:0,width:a.width,height:a.height})},s=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(f,n){if(d.isDef(f)&&d.isDef(n)){var v=f.viewport,l=f.computedAdContainer,p=l.obstructions,x=p&&0<p.length,t=f.originalAdContainer,B=n.adGeometry,C=n.adFound,u=f.detectionMethod,A=0,v={x:0,y:0,width:v.width,height:v.height},D=s(t,B),J=f.outOfViewReason,O=0,I=0,w=x||!1,K,O=1>=B.width*B.height;c&&O&&(C=!1,J=J||"",C||-1!==J.indexOf(h.OUT_OF_VIEW_REASONS.GEOM)||(J=h.OUT_OF_VIEW_REASONS.GEOM+(""!==J?"."+J:"")));if(C&&
0<f.percentageInView){O=e(v,l,D);x?(A=m(l,D),A=g(v,l,A),A=s(l,A),A=a.calculateObstructedArea(A,p)):A=0;I=A;A=Math.round((O-I)/(D.width*D.height)*100);x&&0===I&&(w=!1);B=w;x=0;C=b.getConfig(D).numberOfSlices;K=r.floor(D.height/C)||1;for(var p=[],O=B?a.getObstructionStatusBySlice(C):[],V,x=0;x<C;x++)I=D.y+K*x,x==C-1&&(K=D.y+D.height-I),I={x:D.x,y:I,width:D.width,height:K},V=e(v,l,I),I=1==V/(I.width*I.height),p.push(I);if(B)for(l=r.min(O.length,C),x=0;x<l;x++)p[x]=p[x]&&!O[x];K=p}else C&&(K=b.getConfig(B).defaultSliceArray);
return{windowDimensions:v,containerDimensions:t,adDimensions:D,percentageInView:A,viewState:50<=A?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=A?"":J||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:u,isObstructed:w,sliceStatus:K}}}}},Oc=function(){return{accepts:function(){return t.isAvidNative()}}},Qc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",
c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Pc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ea=function(a,b,c,e){var f,g,s,m=function(){if(d.isDef(f)&&d.isDef(g)){var a=e.calculateGeometricMeasurement(f,g);s=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){f=a;m()},n=function(a){g=a;m()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,
{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();b.addAdGeometryMeasurementChangedListener(n);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return s}}},Da=function(a){var b=[],c;return{calculateObstructedArea:function(e,f){var g,h,m,q;h=f&&0<f.length;var n;if(h){n=Math.round(e.width);var l=Math.round(e.height);g=Array(n);for(m=
0;m<n;m++)g[m]=Array(l);n={matrix:g,obscuredPixelCount:0,x:Math.round(e.x),y:Math.round(e.y),width:n,height:l}}else n={};g=n;l=n=0;if(h){for(;n<f.length;n++){h=f[n];m=l=g;var p=h;g=Math.max(m.x,p.x);h=Math.max(m.y,p.y);q=Math.min(m.x+m.width,p.x+p.width);p=Math.min(m.y+m.height,p.y+p.height);m=q-g;q=p-h;m=0<m?m:0;q=0<q?q:0;g-=l.x;h-=l.y;m=g+m;q=h+q;for(g=Math.round(g);g<Math.round(m);g++)for(p=Math.round(h);p<Math.round(q);p++)void 0!==l.matrix[g]&&void 0===l.matrix[g][p]&&(l.matrix[g][p]=1,l.obscuredPixelCount+=
1);g=l}l=g.obscuredPixelCount;n=g;if(d.isUndef(n.matrix)||0===n.matrix.length)c=[];else{h=0;q=!1;g=n.matrix[0].length;m=n.matrix.length;q=a.getConfig({height:g}).numberOfSlices;for(var p=r.floor(g/q)||1,z=[],t=0;t<g;t++){q=!1;for(var u=0;u<m;u++)if(1===n.matrix[u][t]){q=!0;break}h++;q&&(t+=p-h,h=p);if(h==p||t===g-1)z.push(q),h=0}c=z}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Mc=function(a,b){var c=l.request("omidAdSessionContext"),e=function(a){a={viewport:a.data.viewport||
{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:f(a.data.adView.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},f=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&e(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",e)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:f}},Kc=function(){var a=l.request("omidAdSessionContext");
return{accepts:function(){return a&&a.isNative}}},Nc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},
Lc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Fa=function(a,b,c,e,f){var g=!1,s=!1,m,q,n,v,p,r=function(){if(!(d.isUndef(q)||d.isUndef(n)||d.isUndef(v))){p=!0;var a=f.calculateGeometricMeasurement(q,n),b=g&&s,c=g&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,
sliceStatus:a.sliceStatus,isVideoPlaying:g,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);m=l;e.trigger("videoGeometryMeasurementChanged",m)}},t=function(a){q=a;r()},u=function(a){n=a;r()},B=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?s=!0:"AdExitedFullscreen"===a?s=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(g=!1);r()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(B);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){e.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return p}}},Ba=function(a,
b,c){var e,f=function(){var b=a.find(),f,m=!0;d.isDef(b)?(f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height},b.hasOwnProperty("adWasClipped")&&(f.adWasClipped=!0)):m=!1;if(b=m)b=f,b=!d.isDef(e)||!1!==d(b).compareTo(e);b&&(e=f,c.trigger("mobileAppGeometryChanged",{adGeometry:f,adFound:m}))};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Sc=function(a,b,c){return{accepts:function(){var e=
d(a.mraid).isObj();return c&&(e||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Uc=function(a,b){var c=!1,e=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",
d)}catch(g){}},f=function(){var b=a.mraid;return d(b).isObj()&&d.isFunction(b.isViewable)},g=function(){var b=a.mraid;e();b.addEventListener("viewableChange",e)},s=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){g()}):g())},m=function(){c||s()};return{start:function(){var b=!0;if(d.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:d.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",
m):s()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Va=function(a,b,c){var e={},f=function(c){var e=d.noop;b.bootstrapOn("useViewabilityNotification")&&(e=function(){var b=p[c];a.skipAsFraudulent()||l.trigger("notify",b)});return e};(function(){c&&d(c).map(function(a,b){e[a]=f(b)})})();return{getCallbacks:function(){return e}}},Pa=function(){var a=new P({tiv:[1E4]}),b=d([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==p.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Oa=function(a,b){var c,d,f;c=a.on("everySecond");var g=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];f=[1E3,5E3,15E3];var s=[2E3,5E3,15E3];c?(c=new P({tiv:d}),d=d[0]):g?(c=new P({tiv:s}),d=s[0]):(c=new P({tiv:f}),d=f[0]);f={5E3:"_onInViewMRC5",
15E3:"_onInViewMRC15"};f[d]="_onInViewMRC";return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:f,isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Ra=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),f=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],s=[1E3,5E3,15E3],m=[2E3,5E3,15E3],q=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+
"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new P({tiv:g}):d?new P({tiv:m}):new P({tiv:s});l.provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return f},minUnit:1E3}},Qa=function(a,b){return{timeInViewThresholds:new P({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&
100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Ta=function(a,b){var c,e,f=r.getMaxNumber(),g=b.isVideo();c=new P(a);e={};d.isDef(a.rts)&&(e={0:a.rts});return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,rts:e,isInView:function(b){if(!b.adDimensions)return!1;var c,e,n,l=b.adDimensions.area(),p=1===b.tabHidden,z=r.max(b.fullPercentInView||0,b.percentInView);c=d(a.thresholds).findFirst(function(a,b){e=b.lb||0;n=b.ub||f;if(l>=e&&l<=n)return!0});c=!p&&z>=c.piv;b.method==
h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);g&&(c=c&&b.isVideoPlaying);return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Sa=function(a,b,c){var e=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=d(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),q=c.on("groupmCM"),n=function(a,b){var c,h,m,n,s;c=d(b.mediaTypes).contains(e);h=d(b.distributionChannels).contains(f);
m=d.isDef(b.deviceGroups)?d(b.deviceGroups).contains(g):!0;n=M.contains(b.id,"fiv");s=M.contains(b.id,"groupmCM");n=!n;s&&(n=q);return n&&c&&h&&m};return{resolve:function(){var b=[],c;m&&h&&(c=d(a.customViewability).filter(n),d(c).each(function(a,c){b.push(c)}));return b}}},P=function(a){var b=[];if(d(a.tiv).isArray())d(a.tiv).each(function(a,c){b.push(new fa(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Wc;b.push(new Xc(c,parseInt(a[1].replace("%"))));b.push(new fa(1E3*parseInt(a[0])))}else b.push(new fa(1E3*
a.tiv));return{getTimeThresholds:function(){return b}}},Wc=function(){var a=-1,b=function(b){0<a||(b=d.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.on({adVideoStart:b,adDurationChange:b,adRemainingTimeChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},fa=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Xc=function(a,
b){var c=0,d=!1,f=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};f(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,f(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},Ya=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},Xa=function(a,b,c,e){var f,g,h,m,q,n=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&
c},p=function(a){var b=0,n=1===a.tabHidden,l=a.isVideoPlaying,p=a.isSoundOn,t=a.isVideoPlayingInFullscreen;d(a.sliceStatus).each(function(a,b){h(b,n,l,t)?f[a].mark():f[a].stop();m[a]=f[a].getTotalTime()});r("slcVt",m);e&&(d(a.sliceStatus).each(function(a,b){v(b,n,l,t)&&p?g[a].mark():g[a].stop();q[a]=g[a].getTotalTime()}),r("slcVtVol",q));a=d(m).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});d.isUndef(a)&&c.doEligibleJobs(b)},r=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},
{minDt:!1})},t=function(a){!f&&a.sliceStatus&&(f=[],g=[],m=[],q=[],d(a.sliceStatus).each(function(a){f.push(new $(1));m.push(0);e&&(g.push(new $(1)),q.push(0))}))},u=function(a){d.isUndef(a.sliceStatus)||(f||t(a),p(a))};return{start:function(){h=e?v:n;a.addMeasurementChangedListener(u)}}},Ua=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Db=function(a,b,c,d,f,g,s,m,q,n){var l=!1,p=t.isVideo(),z=g.request("mobileApp"),x=Y().applies(c,
f),u=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&f.on("rattie")||x,B=t.xDomainIframe&&!u,C=new va(10),w=function(){f.on("viewabilityready")&&!l&&(d.send(h.DT_CODES.VIEWABILITY_READY),g.trigger("measurable"),l=!0)};g.on("delayedViewabilityReady",function(){A();w()});g.on("delayedViewabilityReadyCallOnly",w);var A=function(c){c=c||!1;try{C.start();var d,e;b.hasMeasurementStrategy()?e=z.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),
c):(e=m.collect(),z.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):B&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),p&&!t.isAvid()&&n.setVideoSpecificScreenEventFields(e));d=q.registerLocation(e);c||a.trigger("measurementChanged",e);C.stop();var f=r.round(C.getTime()/C.getCount());s.addItem({output:f},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(l){g.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:A,stringifyPingTimes:function(){return f.on("everySecond")?
"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":p?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&x,d=!d&&!e&&!a;return z.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){z.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};N("viewabilityLoopLifecycle",
["viewability","features","context","browser"],function(a,b,c,e){var f,g=Yc(c),s=[new Zc,new $c(g)],m=function(){return d(s).findFirst(function(a,d){return d.applies(e,b,c)?d:void 0})},q=function(a){"sessionFinish"===a.type&&l.trigger("adSessionComplete")},n=function(a){y.addEvent(w,a,function(){l.trigger("adSessionComplete")},!1)},v=function(){var a=new Z(h.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:p.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),
"*")})};l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(f=Vb(a.checkScreenLoc,g.getPollingFrequency()),(b=m())?b.start(f):f.start(!0),c?t.isOmid()?l.request("omidVerificationClient").registerSessionObserver(q,"IAS"):n("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):n("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||v();l.trigger("unload");f&&f.stop();l.trigger("endAdSession");
l.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var Yc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},$c=function(a){var b,c,d,f,g,h=function(q){d&&!g&&1>q?(g=!0,r.setTimeout(function(){h(q)},1E3)):(f=1>q,!c&&f?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!f&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){h(a.percentInView)};return{applies:function(a,b,c){var f=l.request("mobileApp");
a=(new Aa(b,a,c,f)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",h);l.on("newScreenEvent",m)}}},Zc=function(){var a,b,c,d=!1,f=function(g){if(c&&!d&&1>g)d=!0,r.setTimeout(function(){f(g)},1E3);else return 1>g?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Y();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},
start:function(a){b=a;b.start(!0);l.on("IOPivChange",f)}}},hd=function(a,b,c,e,f,g){var s,m,q,n,v,F,z,x,Q,B=u.getElementsWindow(b);u.getElementsDocument(b);l.provide("iframeCalculatorHelper",ad(B));var C=bd(b,e),R=h.AD_IDENTIFIER+"-"+p.asid,A=!1,D=H({}),J=t.isDeviceTypeGroupMobile(),O=t.usesGroupMCustomMetricMobilePassThru(),I,E=function(){if(!s)if(s=C.calcDims(b,e,q),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=s,d=(new H(b)).getRounded();try{a.set("width",d.width),a.set("height",d.height)}catch(f){l.trigger("error",
h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&s.treatAsPlaceholder();return s},K=function(){var b,e=t.xDomainIframe&&A;b=J&&A&&q.isReady();b=e||b;e=C.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?m=q.getPiv():d.isUndef(m)&&(b=!J&&(t.friendly||d.isDef(w.mozInnerScreenX))&&f.on("offscreen"),x=E(),z=new H(u.calcWinDims()),F=new H(b?u.calcMonDims():{}),Q=e?C.getClippedDims():D,m=a.calcPercentInView(x,z,F,Q));return m},V=function(){return a.calcInitialViewState(K())},
Ha=function(){return b===w?!1:E().isHidden()},G=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),d=r.getDoc(),f=b===c,g=d.body,h=new Y,m=l.request("browser"),s=l.request("features"),p=l.request("context"),z=!t.xDomainIframe,x=G(b,e),d=f&&g?d.body:b;I=t.friendlyIframe?c.frameElement:d;y.addEvent(d,"click",function(){l.trigger("adComponentClicked")});y.addEvent(d,
"mouseover",function(){l.trigger("adComponentMousedOver")});h.applies(m,s,p)?(q=uc(b,z),q.start(),A=!0,O&&(c=new cd(E().getRounded()),h=new dd,x=new ed(x,h),n=new fd(c.getSlices(),x))):O&&(v=new gd(a))})();return{mark:function(){u.setAttributeOf(I,R,"")},cleanup:function(){u.removeAttributeOf(I,R)},isNode:function(a){return b===a},isHidden:Ha,isObstructed:function(){return!1},getDims:E,getPercentInView:K,getLocationState:V,getOnPageViewability:function(){return Ha()?h.OUT_OF_VIEW:V()},getDetectionMethod:function(){return c},
getContainerDims:function(){return C.allowsOptimization?s:H(e)},refresh:function(){Q=x=z=F=m=s=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==w&&c&&c!==L&&!a;)a=c===e,c=c.parentNode;a||(e=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;n&&n.isReadyToMeasure()?a=n.getSliceStatus():t.friendly&&v&&d.isDef(x)&&(a=v.getSliceStatus(x,z,F,Q));return a}}},id=function(a,b){var c=[],e,f=d([]),g=function(){return c[0]&&c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},
s=function(q,m,n,s){var p=g()||0===c.length;q=hd(a,q,m,n,b,s);g()&&(n=c.shift(),f=d(c),n.cleanup(),e=void 0);c.push(q);f=d(c);p&&q.mark();p&&m!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",q)},m=function(){if(e)return e;var a,b=!1,c=0,d=0;f.each(function(e,f){var g;g=f.getDims();g.hasValidDims()&&(a=f.getPercentInView(),b=a!==h.NA,g=g.area(),c+=g,d+=a/100*g)});return e={totalArea:c,totalInView:d,hasMeasurement:b}},q=function(){var a;a=m();a=a.hasMeasurement?r.round(a.totalInView/
a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},n=function(){var c=m().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!t.isVideo();return a.calcInitialViewState(q(),c)},p=function(a){var b=-1;f.each(function(c,d){d.isNode(a)&&(b=c)});return b},u=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){d(a).each(function(a,b){-1===p(b)&&s(b,h.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){d(a).each(function(a,b){var d=p(b);-1<d&&c.splice(d,
1)})});return{getDims:u("getDims"),isObstructed:u("isObstructed"),getDetectionMethod:u("getDetectionMethod"),getContainerDims:u("getContainerDims"),getViewState:n,getPercentInView:q,isHidden:u("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},refresh:function(){e=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:s,getOutOfViewReasons:function(){var a,b=[],d=c[0],f=h.OUT_OF_VIEW_REASONS;d&&(a=e||n(),a!==h.OUT_OF_VIEW&&a!==h.PARTIAL_VIEW_MINUS||b.push(f.GEOM),d.isHidden()&&
b.push(f.HIDDEN),d.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:u("getSliceStatus")}},jd=function(a){var b=!1;if(!d.isUndef(w.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&d(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),e=function(){b=!0;r.setTimeout(function(){b=
!1},40)};l.on("adComponentClicked",e);l.on("adComponentMousedOver",e);y.whenReady(function(){try{c.observe(L.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},qd=function(a,b){var c=[kd()],e=[ea(),ld(),md(),nd(),od(),pd()],c=c.concat(e);return d(c).findFirst(function(c,d){return d.isApplicable(a,b)})},md=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&
b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ca();var c=u.crossQuerySelector(ca().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},rd=function(a){var b;a=u.findChildWithLargestContent(a||p.contextNode.parentNode);1<u.getNodeArea(a)&&!a[h.IAS_DETECTOR]&&(b=a);return b},od=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,find:function(){return w},isApplicable:function(){return t.embedded},
getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},sd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=d(b).findFirst(function(a,b){return M.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,d=a||c(),g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return"#ftdiv"+b}}},td=
function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&M.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},ud=function(){var a,b,c=r.getDoc(),e=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=
(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+e()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&H(h).isOneByOne(),n=function(){var a=r.getDoc().scripts;return d(a).findFirst(function(a,b){return M.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!d(c.EBG.ads).isEmpty();return b.on("sizmek")&&n&&c&&
h&&e()&&f()},getCssSelector:f}},ca=function(){var a,b=l.request("features");a||(a=[ud(),td(),sd()]);return d(a).findFirst(function(a,d){return d.isApplicable(t,b)})},nd=function(){var a,b=function(){r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=xa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,
a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},xa=function(){var a,b=function(){var b;(b=p.contextNode.parentNode)&&M.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ea=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,
find:function(){var a=u.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[h.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},kd=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(p._cl_adpath);b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},pd=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:rd,getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},ld=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},bd=function(a,b){var c,e;c=[vd(),wd(),xd()];
e=d(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=yd();c.isApplicable(b)&&(c.setBaseStrategy(e),e=c);return e},xd=function(){return{calcDims:function(a,b){var c,d,f=new H(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=f.getRounded(),f.set("height",c.height<d.height?c.height:d.height||1),f.set("width",c.width<d.width?c.width:d.width||1));return f},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&u.nodeIsInWindow(a,r.getTop());a=!u.elementIsEmbedded(a);
return b||a}}},wd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&u.elementIsEmbedded(a)}}},vd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new H(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,r.getTop()),f=t.isCeltra()&&u.elementIsEmbedded(a);return d||f}}},yd=function(){var a;return{calcDims:function(b,c,e){e=d.isDef(e)?e.getAdNodeDimensions():void 0;a&&d.isUndef(e)&&(e=a.calcDims(b,c));return e},isApplicable:function(a){a=Y();var c=l.request("browser"),d=l.request("features"),f=l.request("context");return f.isDeviceTypeGroupMobile()&&a.applies(c,d,f)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},ad=function(a){var b,c,e,f=l.request("features"),g=l.request("browser");a=a||r.getWindow();var s=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,m=e.length;g<m;g++)if(e[g]==b){d=e[g];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(p){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&s(b.parent,c)}return c},
m=function(){var q,m={};try{var p,F,z,x,w,B,C=r.getMaxNumber(),R=r.getMaxNumber();t.friendly?(p=s(),z=p.left,x=p.top,C=p.width,R=p.height,F=u.browserWindowPosition(),w=F.scrX+z,B=F.scrY+x):f.on("rattie")&&g.browserIs(h.BROWSERS.IE)?(e=e||l.request("ieXDomainViewability"),c=e.determineFramePosition(),w=c.scrX,B=c.scrY):d.isDef(a.mozInnerScreenX)&&(w=r.round(a.mozInnerScreenX),B=r.round(a.mozInnerScreenY));var m={scrX:w,scrY:B,iFrameClippingWidth:C,iFrameClippingHeight:R},A,D,J=b||u.getIeDimObj(a);
b=J;d.isDef(a.innerWidth)?(A=a.innerWidth,D=a.innerHeight):J&&d.isDef(J.clientWidth)?(A=J.clientWidth,D=J.clientHeight,0===A&&0<J.offsetWidth&&(A=J.offsetWidth),0===D&&0<J.offsetHeight&&(D=J.offsetHeight)):a.frameElement&&d.isDef(a.frameElement.clientWidth)&&(A=a.frameElement.clientWidth,D=a.frameElement.clientHeight);q=A;m.height=D;m.width=q}catch(O){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return m};return{calcDims:function(){return new H(m())},getClippedDims:function(){var a=m();return new H({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},xb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new zd:new Ad(a,b,c)}}},Ad=function(a,b,c){var e,f=p&&p.contextNode&&p.contextNode.parentNode?p.contextNode.parentNode:null,g=id(b,c),l=function(){var a,b,f;e=e||qd(t,c);a=e.find();!a&&e.usePlaceholder?m():a&&(a=d(a).isArray()?a:[a],b=e.getAdContainer(),f=e.allowForAdContainerChange,d(a).each(function(a,c){g.addAdComponent(c,d.resolve(e.detectionMethod),
b,f)}))},m=function(){var a;g.hasAd()||(a=u.getPlaceholderSpan(),f.insertBefore(a,p.contextNode.nextSibling),g.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};jd(a);return{find:function(){g.isUsingPlaceholder()||!g.hasAd()?l():g.refresh();return g},getDetectionMethod:function(){}}},zd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},db=function(a){var b,c=[],d=a||w,f=function(){return"stub"===h().mode};a=function(){f()&&(b=d.setInterval(function(){if("stub"!==
h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},h=function(){var a,b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,w.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:h,addEventListener:function(a,b){f()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(f())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},cb=function(a){var b=new Bd,c=new Cd;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
Dd={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){var e;e=!1;var f=r.getWindow();d.isDef(f.navigator)&&d.isDef(f.navigator.userAgent)&&(e=(e=f.navigator.userAgent)&&-1!==e.indexOf(c));return e})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!d(a).findFirst(function(a,
c){return d.isDef(M.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return d.isDef(a)&&-1!==a.indexOf(c)})})}}},Ia=function(){var a=function(a,c){var d,f=Dd[a];f.detect(c)&&(d=f.STRINGIFIED_METHOD);return d};return{process:function(b){return d(b).map(a).join("")}}},Ed={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},Bd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=p.hasOwnProperty("serverSideAppDetection")&&0!==p.serverSideAppDetection.length?!0:Ia().process(Ed);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},Cd=function(){var a=[],
b=[],c=function(b,c){var d,h=Ia().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),d=c);return d};return{detect:function(){b=d(Fd).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&d.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Fd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],cd=function(a){var b=
[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,f=0;10>f;f++)b.push({geometry:c(f,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},U=function(){var a=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(f){if(d)return d;f.height<
a&&(a=1,b=[100]);for(f=0;f<a;f++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Gd=function(){var a,b,c=0,e=-1,f=0,g=l.request("browser"),h=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=d(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return d.isDef(a)};b=r.setInterval(function(){var a=r.now();e=a-f;f=a;
c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var d;c=c.getRounded().height;var f=u.calcMonDims().height,l=g.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,p=g.getUserAgent(),p=p&&null!==p.match(/(iPad)/)?1:0,t=h()?1:0,x=g.getUserAgent(),x=x&&null!==x.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;d=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*p+0.646972*t+0.28118*x+2.987259*(1E3<e?1:0)-2.463292);d/=1+d;a={mbah:c,mbsh:f,mbfb:l,mbip:p,mbhs:t,mbbr:x,mblr:e,
mbp:d};b&&r.clearInterval(b);return 0.15<d},getDebugState:function(){return a}}},Jc=function(a,b,c){var e,f,g,s,m,q=[],n=p.contextNode.parentNode,v=0,u=0,z=!1,x=!1,w=new Gd,B=function(){var a=q.length-1,b=-1;-1<a&&(b=q[a].piv);return b},C=function(){l.trigger("delayedViewabilityReadyCallOnly")},R=function(a){y.whenReady(function(){f=new Hd(a,r.getDoc().body)})},A=function(){f.removePixels()},D=function(){var a=w.getDebugState(),b=B();d.isUndef(a)&&(a={});a.mbm=d.fromBoolToNum(x);a.mbrd=d.fromBoolToNum(z);
a.mbtg=d.isDef(n.tagName)?n.tagName:"na";a.mbaf=d.isDef(g)?g:"na";a.mbad=d.isDef(e)?e.getRounded().width+"_"+e.getRounded().height:"na";a.piv=d.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var n;n=d.isDef(e);if(c||!b.adDimensions)return b;n||(g=b.method,e=b.adDimensions,e.isMrcLarge(),R(e));if(d.isUndef(f)||!f.isReadyToMeasure())n=
!1;d.isUndef(s)&&n&&(s=w.isLikelyToProduceFalsePositive(e));if(x=!s&&n){var p;n=f.getPercentInView();var K=B(),A=1===b.tabHidden,D=b.adDimensions.isMrcLarge()?30:50;u=r.now()-v;p=0<v?900>u:!0;v=r.now();0===b.adDimensions.area()&&(n=0);p||(n=0);var y=n;q.push({tm:t.getTagTime(),piv:y});3<q.length&&q.shift();0===n&&0<K&&(p&&(p=q.length-1,y=!0,2<=q.length&&-1<p&&(y=0===q[p].piv&&0===q[p-1].piv),p=!y),p&&(n=K));a?(d.isUndef(m)&&(m=l.request("video")),m.setVideoSpecificScreenEventFields(b),n=b.isVideoPlayingInFullscreen?
!0:!A&&n>=D&&b.isVideoPlaying):n=!A&&n>=D;b.viewState=n?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=B();K=[];A=d(b.reason);D=h.OUT_OF_VIEW_REASONS;n||K.push(D.GEOM);A.contains(D.HIDDEN)&&K.push(D.HIDDEN);A.contains(D.OBSTRUCTION)&&K.push(D.OBSTRUCTION);b.reason=K;b.sliceStatus=f.getSliceStatus();z||(z=!0,r.execAtEndOfThread(C))}else b.viewState=h.NA,b.percentInView=-1;return b},start:function(){l.on("endAdSession",A);c&&r.setTimeout(D,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return x},
isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Aa=function(a,b,c,d){return{accepts:function(){var f=c.xDomainIframe,g=a.bootstrapOn("mobOrTab"),l=a.on("ios"),m=b.browserIs(h.BROWSERS.WEBKIT),q=9<=b.getIOSVersion(),n=d.isMobileAppEnvironment();return f&&g&&l&&m&&q&&!n},isImmediate:function(){return!1},start:function(){}}},Id=function(a,b,c,e,f,g,l){var m,q=p.birthdate+""+r.round(1E6*r.random()),n=101,v,t,u,x=!1,w=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,g=(new Date).getTime(),h=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(h)};a.requestAnimationFrame(h);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-g}}catch(n){b.body.setAttribute("data-err",n.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+
")(window);")+"\x3c/script></body></html>"},B=function(a,b){u||(n=a,u=b)},C=function(){var a,b,c;if(u)return!1;if(t)return!0;try{if(v.contentWindow&&v.contentWindow.document&&v.contentWindow.document.body){c=v.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&B(104);(b=c.isReady?c.isReady():!1)&&(t=c.isInView?c.isInView:void 0)&&B(105)}}catch(e){B(106,e)}return d.isDef(t)},y=function(a,b,c){var g=L.createElement("iframe");g.id=q;d(g.style).mixin({position:"absolute",
width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var n=g.style;g[h.IAS_DETECTOR]="true";n.left=b;n.top=c;a.appendChild(g);v=g;B(102);a=v;try{var m=a.contentWindow,l=w();m.document.open();a.contentWindow.document.write(l);m.document.close()}catch(s){B(103,s)}return g}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();C()&&(a=t(!0),c=a.isInView,x=!1,m&&(b=20*m.rate+m.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,x=!0)),
B(107),m=a);return c},isNotReadyToReport:function(){return!C()},createdElement:v,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return n},getError:function(){return u},isReadingInvalid:function(){return x},getRate:function(){return v.contentWindow&&v.contentWindow.document&&v.contentWindow.document.body&&v.contentWindow.document.body.getRate?v.contentWindow.document.body.getRate():-1},percentInView:g}},Hd=function(a,b,c){var e,f=a.getRounded(),g=[],h=!1;a=U().getConfig(f);
var m=a.percentInViewSliceArray,q=1==a.numberOfSlices,n={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},l=function(){var a;if(!h)for(h=!0,a=0;a<g.length;a++)if(g[a].isNotReadyToReport()){h=!1;break}return h},p=function(a){var b=[],c=0;r.floor(a.height/m.length);var e=r.floor(a.width/2-1);d(m).each(function(d,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(e)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},u=function(a){var b=
[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},x=function(a,b){var c=0;b&&(a.reverse(),d(a).map(function(a,b){b.percentInView=100-b.percentInView}));d(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));return!b.isInView});return c},w=function(){var a,b,c,e=[];n.mbs=[];d(g).each(function(b,c){a=c.isInView();n.mbs.push(a);e.push({isInView:a,percentInView:c.percentInView})});b=x(e,!1);c=x(e,!0);return r.max(b,c)};(function(){e=q?
u(f):p(f);var a=e.get();d(a).each(function(a,d){var e=new Id(b,d.x,d.y,d.width,d.height,d.percentInView,c);g.push(e)})})();return{getPercentInView:function(){var a=l(),b=w();n.mbrd=a?1:0;b!=n.mbp&&n.mbivs.push([t.getTagTime(),b]);n.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();d(g).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){n.mbm=1;g&&0<g.length&&(n.mbpr=[],n.mbir=[],d(g).each(function(a,b){n.mbpr.push(b.getRate());n.mbir.push(b.isReadingInvalid()?
1:0)}));return n},isReadyToMeasure:l,getSliceStatus:function(){var a;g&&0<g.length&&(a=[],d(g).each(function(b,c){a.push(c.isInView())}));return a}}},fd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},e=function(a,b){var c=[],e=a.geometry.value();d(b).each(function(b,d){if(a.geometry.doesIntersect(d)){var f=d.value(),g=Math.max(e.leftX,f.leftX),h=Math.min(e.rightX,f.rightX),m=Math.max(e.topY,f.topY),f=Math.min(e.bottomY,f.bottomY);c.push(new W(g,h,m,f))}});return c},f=function(a,
b){var c=0,f=e(a,b),g;d(f).each(function(a,b){g=b.value();c+=g.area});return c},g=function(){var b=0;c.mbs=[];d(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){d(a).each(function(a,c){c.isInView=f(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=g();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];d(a).each(function(a,b){c.mbpr.push(h.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];d(a).each(function(a,c){b.push(c.isInView)});return b}}},gd=function(a){var b=U();return{getSliceStatus:function(c,d,f,g){var h,m=[];h=c.getRounded();c=h.height;var q=h.scrY,n=new H({scrX:h.scrX,width:h.width}),l=b.getConfig(h).numberOfSlices;n.set("height",r.floor(c/l));for(var p=0;p<l;p++)n.set("scrY",r.ceil(q+c/l*p)),h=100===a.calcPercentInView(n,
d,f,g),m.push(h);return m}}},W=function(a,b,c,d){var f=Math.ceil(a),g=Math.ceil(b),h=Math.ceil(c),m=Math.ceil(d),l=g-f,n=m-h,p=l*n,r=function(){return{leftX:f,rightX:g,topY:h,bottomY:m,width:l,height:n,area:p}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},dd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},ed=function(a,b){var c,e=[],f=[],g=function(){d(e).each(function(a,
b){b(f)})},h=function(){var a=[];d(f).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),e=d.boundingClientRect;b=e.width;var l=d.intersectionRatio,d=d.intersectionRect,p=d.left-e.left,e=d.top-e.top,e=new W(p,p+d.width,e,e+d.height);f.push(e);e=h();f=[];for(d=0;e.length>d&&e.length!==d+1;d++)f.push(new W(0,b,e[d],e[d+1]));g();
1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){e.push(a)}}},Jd=function(){return{decorateContextParams:function(a,b){try{var c=l.request("adNode"),d;if(d="adImpression"===a)d=l.request("adNode").hasAttribute("data-ias-autoplay");d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(f){l.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},Kd=function(){return{listenForResult:function(){l.on("videoBlockResult",
function(a){var b=l.request("adNode"),c=!1,e="blockAd"+p.videoId;"failed"===a.action&&(c=!0);if(b&&d.isDef(b.blockAd))b.blockAd(c);else if(b&&d.isDef(b[e]))b[e](c)})}}},Ld=function(a,b){var c,e,f,g,h,m=l.request("videoTranslator"),q=l.request("videoAutoplay");f=m.translate(a.messageType);g=function(a){a=a.eventData||{};a=d({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=d(a).mapToObj(c));return b}(a);q.decorateContextParams(f,g);e={t:a.time-p.birthdate,tp:f,sl:b};d(e).mixin(g);d(e).mixin(h);return c=d({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===
f&&"normal"===g.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(f)},updateScreenLoc:function(a){e.sl=a;c.sl=a},trigger:function(){"adImpression"===f?l.persistentTrigger(f,g,h):l.trigger(f,g,h)},toString:function(){return"{"+d(e).toParams()+"}"}}).mixin(e)},Md=function(){var a=[];return{registerEvent:function(b,c){var d=new Ld(b,c);a.push(d);return d},toString:function(){return"{"+d({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===
a.length}}},Nd=function(){var a,b,c,e=function(e){c=d.isDef(e)?0===e:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;e()},p=function(a){a=(new Ja).getVolumeFromContext(a);e(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.on({adVideoStart:g,adImpression:g,volumeChanged:p,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",function(a){var c=
l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Od=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ja=function(){return{getVolumeFromContext:function(a){var b,c=-1;d.isDef(a)&&(d.isDef(a.volume)?c=a.volume:d.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},ub=function(a,b,c){var e="IASid"+a,f="getIasVidBridgeVersion"+a,g,
s,m,q,n=[],v=h.OUT_OF_VIEW,u=!1,w=!1,x=!1,E=!0,B=new Md,C=Nd(),G=new Kd,A=function(b){u=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=B.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(w=!0,v=x?h.IN_VIEW:!1):d.indicatesNotPlaying()?(w=!1,v=h.OUT_OF_VIEW):d.indicatesFullscreen()?(x=!0,v=w?h.IN_VIEW:h.OUT_OF_VIEW):d.indicatesNormalSize()&&(x=!1,v=w?!1:h.OUT_OF_VIEW));b=d;n.push(b);q&&L();return b},D=function(b){var c,g,h=oa().wrapToGlobal(A),n=function(a){d.isStr(a)&&
(l.provide("vc",function(){return a}),l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[f]||b.getIasVidBridgeVersion,c=d.isFunction(g)&&"2"===g.call(b)?unescape(b[e].call(b,a,h)):unescape(b[e].call(b,a)),u=!0,n(c||"n")}catch(m){__IntegralASDiagnosticCall("handshakefailure",m,p)}},J=function(){var c=function(a){return d(d(a).toArray()).findFirst(function(a,b){return d.isFunction(b[e])})};g||(d([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);
return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},p));return g},H=function(){var a=J();a&&!u&&D(a);return a},I=function(a){a=(new Ja).getVolumeFromContext(a);E=d.isDef(a)?0<a:!1},L=function(){d(n).each(function(a,b){b&&(d.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});n=[];q=!0};(function(){y.addEvent(r.getWindow(),"message",function(a){A(a)});l.on({volumeChanged:I});l.provide({videoEventsString:B,
videoVersion:function(){var a,b=H();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return s=s||new Od},videoAutoplay:function(){return m=m||new Jd},adNode:H});H();G.listenForResult();C.isApplicable(t)&&C.start(c)})();return{findAdNode:H,getViewStateOverride:function(){return v},isHandshakeComplete:function(){return u},triggerInitializationEvents:L,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;
a.isVideoPlaying=!0;a.isSoundOn=E;a.isVideoPlayingInFullscreen=!1;if(v){if(v===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:v;a.isVideoPlaying=v===h.IN_VIEW}x&&w&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Pd=function(){return new ga(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Jb=function(){var a,
b,c={},e=0,f=function(c){if(c||a)e+=5,b.onTick(e,function(){a?f():l.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},g=function(g,h,n,l){g=c[g];l?(d.isDef(g[h])||(g[h]=[]),g[h].push(n)):g[h]=n;b&&b.isActive()||(b=new wa,e=0,f(!0),b.start());a=!0},p=function(b){d(c).each(function(e,f){var g=c[e],h={type:b,oneTime:!0,minDt:!0,asION:!0};d(g).isEmpty()||(l.trigger("addOutputItem",{output:g},e,h),c[e]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){p(a);b&&b.kill()});l.on("addThrottledProp",
g)},addFieldTypes:function(a){d(a).each(function(a,b){c[b]={}})}}},Nb=function(){var a={},b=function(b){a[b]||(a[b]=new va(1,p.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Qd=function(){return new ga(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},
vb=function(a){var b={},c=a instanceof Array&&a.length;c&&(d(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),l.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(d){}}));l.provide("perfActive",function(){return c});return{isActive:c}},ga=function(a,b,c){var e=0,f=[],g=function(){var a,c={};f.sort(b);d(f).each(function(b,d){a&&
(c[d.code]=d.timestamp-a);b===e&&(a=d.timestamp)});return c};return{addPoint:function(a){f.push(a)},toString:function(){return d(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){e=a},isFinished:function(){return f.length===c}}},wb=function(){function a(){}a.build=function(){var a=[],c=l.request("vc"),d={jv3:Ka,av3:Ka,jvw:Qd,avw:Pd};c&&d[c]&&a.push(d[c]());return a};return a}(),Ka=function(){return new ga(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,function(a,b){return a.code-b.code},
h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(w,"load",function(){l.trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new wa;a.onTick({4:function(){l.trigger("markTime",S.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}};N("postMessageDetector",
[],function(){var a=!1,b="pmdetector"+p.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var e=r.getWindow();y.addEvent(e,"message",c);e.postMessage(b,"*");r.execAtEndOfThread(function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"pom",d.stringifyTriState(a));y.removeEvent(e,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});N("safeFrameDetector",[],function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"sf",d.stringifyTriState(t.isSafeFrame()))},
{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Hb=function(){var a=p.asid,b=p.cookieBaseURL,c=p.protocol,e=function(a){d(a).each(function(a,b){l.trigger("notify",b)})},f=function(){var d;d=new T(c+"://"+b,!0);d.setParam("asid",a);d=d.toString();l.trigger("jsonp",d,e,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL",
"asid"])}}},Ib=function(a,b,c,d,f,g,r){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(q){try{var n,t=d.baseUrl,u,w,x=g.getDocumentMode();"number"===typeof x?(w=2E3,8===x?w=4E3:8<x&&(w=8E3)):w=m(p.sp_imp_maxLength,2E3);u=w;w=t;var y=t.length,B,C,E=m(p.sp_imp_jsInfo_minLength,0),x="";try{B=u-y-E,0<B&&(C=Rd(q,B,14,b.on("partialUrls")),x+=C.join("&"))}catch(A){a.add(h.ERROR_CODES.IMPRESSION_URLS)}t=w+x;q=t+="&"===t.slice(-1)?"":"&";var D,y="";try{D=u-t.length,y+=Sd(D,"adsafe_jsinfo=",
a,b,c,f,g,r)}catch(G){a.add(h.ERROR_CODES.JSINFO),y+="adsafe_jsinfo=e:"+a.toString()}t=q+y;d.macroUrl&&(t+="&"===t.slice(-1)?"":"&",t+=d.macroUrl);n=t;d.sendImpression(n);p.impUrl=n;l.trigger("impressionsent")}catch(H){__IntegralASDiagnosticCall("impsend",H,p)}}}},Sd=function(a,b,c,e,f,g,l,m){return function(c){var e=c.primary.join(","),g=b,h=0,l=function(a){if(a)return","+a};g.length+e.length+5<=a&&(g+=l(e),f.impressionIsIdentifiable(!0),d(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=
l(c):h+=1}));return g+=",ov:"+h}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:e.on("impFailSafe")?r.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):d.isDef(r.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var u=a.viewState;b=f.getAvidIds();u=["id:"+p.asid,"c:"+f.getCacheBustId(),"sl:"+u,"em:"+t.embedded,"fr:"+t.friendly];e.on("avidPropertiesInImpression")&&d.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),
u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));a=Td(a,c,e,f,g,l,m);return{primary:u,secondary:a}}())},Td=function(a,b,c,e,f,g,l){var m=[];m.push("mn:"+p.mn);m.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());m.push(d(g.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+r.getDoc().visibilityState);f.iterate(function(a,b){var c=!b.props||d.isUndef(b.props.type),e=!b.props||b.props.type===h.IMPRESSION_EVENT;(c||e)&&m.push(a+
":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+p.mode);m.push("et:"+(r.now()-p.birthdate));p.perf.mark("si");c.on("swapids")?m.push("oid:"+p.oid):m.push("uid:"+e.unq);m.push("v:17.4.128");m.push("sp:"+(p.isSplitMode?1:0));c.on("resolution")&&(m.push("wr:"+d(u.windowSize()).toArray().join(".")),m.push("sr:"+d(u.screenSize()).toArray().join(".")));return m},Rd=function(a,b,c,e){var f,g=[],h=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};
a&&a.length&&(f=d(a).map(function(a,b){if(h(b))return b}),a=d(a).map(function(a,b){if(!h(b))return b}),d(f.concat(a)).each(function(a,d){var f;f=d.val;var h=d.key,l;l=24+g.join("&").length+h.length+c;l=b-l;e&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===d.val||""===d.type)f="adsafe_url="+f+"&adsafe_type="+h,h=g.join("&").length,f.length+h<=b&&g.push(f)}));return g},Fb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=
r.getWindow();a=Ud(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},Xd=function(a,b){return{start:function(){try{var c=Vd(),d=c.getMethodName(a),f=new T(b.getEnabledScriptUrl(a)),g=Wd,p=r.getDoc();(new g(p.body||p.head||p.documentElement,f)).getWindow()[d]=c.getMethod(b)}catch(m){l.trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},
Vd=function(){var a=function(a,c,d){a===p.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:p.asid,constant:h,features:b,context:t,dtBaseURL:p.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Mb=function(){return{start:function(a,b){d(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Xd(d,b).start()})}}},Ud=function(a){return{hash:function(){for(var b=0,c=a.length,e=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,
""),f=M.hashCode(f),f=d.toBase(f,62).slice(-4),e.push(f);return e},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Wd=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var g;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||p.contextNode.parentNode).appendChild(c);g=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();
l=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");g.open().write(b);g.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{La()}catch(Yd){__IntegralASDiagnosticCall("main",Yd,p)}};
try{(function(){var p=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,p,p.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
