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
		version:'17.4.96',
		mtCell: 10,
		mtSample: 5,
		trackMouse : "true",
		exchList:{'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain:'cdn.adsafeprotected.com',
		sp_cdnScripts:{xsca: "static.adsafeprotected.com/xsca.17.4.47.js", sca: "static.adsafeprotected.com/sca.17.4.72.js", main: "static.adsafeprotected.com/main.17.4.96.js"},
		protocol:'https',
		jsref : "",
		asid : "b174f970-4973-11e8-b6ee-382c4ac73093",
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
		mn: "app27",
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

__IntegralASConfig.initialize=function(p,C,L){function Da(){var g;P.startSystem();l=P.getAggregator();l.provide({omidAdSessionContext:{}});g=__IASOmidVerificationClient;l.provide({omidVerificationClient:g});g=[{environment:new ea(g),adSessionReadyStrategy:new Ea(fa,g)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){fa()}}}];(new Fa(g)).resolve().adSessionReadyStrategy.start()}function fa(){var g,a=S.instantiateModules();S.killRequest(a.mErrors)||(g=S.preImpression(a.mDataTransfer,
a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,u),S.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,g,a.mVideo),S.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,u))}var l,S=function(){function g(a){var c=new Ga(a,u),d=new Ha,e=new Ia(a,u),k=Ja(a,u),s=(new Ka(p,u,a)).resolve(),n=[c],q=[];
k.applies()&&n.push(k);e.applies()&&n.push(e);d.applies(a,u)&&n.push(d);f(s).each(function(a,b){n.push(new La(b,u));q.push(b.id)});0<q.length&&l.trigger("addOutputItem",{output:q},"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0});return n}function a(a,c,d,e,k,s){r.execAtEndOfThread(function(){var n;try{n={output:(new Date).getTime()-k},a.addItem(n,"sinceFw",{type:h.DT_CODES.ADTALK}),f.isDef(c.loopStarted())&&a.addItem({output:c.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK}),d.isApplicable(u)&&
d.sendAdTalkCall()}catch(s){e.add(h.ERROR_CODES.ADTALK_DELAY)}})}return{startViewabilityMeasurementStrategies:function(a,c,d,e){var k=g(a);return f(k).map(function(s,n){var k;k=new Ma(n,c);var m=(new Na(d,a,n.rts)).getCallbacks(),m=new Oa(e.createPingJobs(n.type,n.timeInViewThresholds,m,n.metricId));k=n.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Pa(k,n.minUnit,m,u.isVideo()):new Qa(k,new Y(n.minUnit),m);k.start();return k})},killRequest:function(a){var c=!1,d,e;try{f.isDef(p)&&
f.isDef(p.killPhrases)&&""!==p.killPhrases&&(d=p.adsafeSrc?p.adsafeSrc:p.requrl+p.reqquery,e=p.killPhrases.split(","),f(e).each(function(a,b){b=decodeURIComponent(e[a]).replace(/^\s+|\s+$/g,"");-1!==d.search(b)&&(c=!0)})),p.doNothing&&(c=!0)}catch(k){a.add(h.ERROR_CODES.KILL_IT)}return c},instantiateModules:function(){var a,c,d,e,k,s,n,q,m={};l=P.getAggregator();m.mFeatures=l.provide("features",Ra());l.provide("mobileApp",function(){return a=a||new Sa(m.mFeatures)});l.provide("avidJsClient",function(){return c=
c||new Ta(r.getWindow())});l.provide("context",u);m.mBrowser=l.provide("browser",(new Ua).createInstance());m.mErrors=Va();m.mIds=l.provide("ids",Wa());m.iOutput=new Xa(l);d=ga();m.mComm=(new Ya).createInstance(m.mErrors,d);m.viewabilityMeasurement=(new Za(new $a(m.mIds),m.mFeatures,m.mBrowser)).create();m.mFeatures.on("swapids")&&(p.oid=p.asid,p.asid=m.mIds.unq);m.mAdTalk=(new ab).createInstance(m.mFeatures);e=bb();d=cb(l);k=l.provide("mPage",(new db).createInstance());m.mAncestorOrigins=eb();m.mPageUrls=
l.provide("pageUrls",(new fb).createInstance(m.mAncestorOrigins,r));s=gb();l.provide("ieXDomainViewability",hb(m.mBrowser));n=ib(m.mBrowser);m.mVideo=l.provide("video",!u.isVideo()||u.isAvid()||u.isOmid()||u.isInMobiMraidVideo()?{}:jb(p.videoId,m.mFeatures,s));kb(lb.build());n=(new mb).createInstance(m.mErrors,n,m.mFeatures);k=(new nb).createInstance(n,m.mErrors,k,u);q=l.provide("jobFactory",ob(d));m.mDataTransfer=pb(n,m.mErrors,m.mFeatures,m.mIds,m.iOutput,m.mBrowser,s,e);e=qb(m.mErrors,m.mFeatures,
l,d);m.mMode=rb(e,m.mFeatures,m.viewabilityMeasurement.isImmediate());m.mViewability=l.provide("viewability",sb(new D,m.viewabilityMeasurement,m.mBrowser,m.mDataTransfer,m.mFeatures,l,m.iOutput,k,s,m.mVideo));S.startViewabilityMeasurementStrategies(m.mFeatures,m.mViewability,d,q);m.loopDelay=ha();m.mDataTransfer.setViewabilityMod(m.mViewability);return m},preImpression:function(a,c,d,e,k,s,n,q,m,g){var f,A,v,B,F;if(d.isApplicable(g))try{d.start(),e.addItem(d.getFrameMap(),"fm"),m.on("fm2")&&e.addItem(d.getFrameMapIncludingPeerCase(),
"fm2"),m.on("idMap")&&(f=d.getIdMap())&&e.addItem(f,"idMap")}catch(r){k.add(h.ERROR_CODES.ADTALK_GENERAL)}s.isApplicable(n,m,g)&&s.start();try{F=q.detectTopURL(),m.on("exch")&&(A=(new tb).createInstance(k,e),A.parse(F)),v=ub(),v.isApplicable(m)&&v.start(m),g.usesGroupMCustomMetric()&&vb(),B=wb(),B.isApplicable(m)&&(B.start(),l.trigger("sendCookie"))}catch(p){k.add(h.ERROR_CODES.IMPRESSION_LEADUP)}return F},sendImpression:function(a,c,d,e,k,s,n,q,m){try{xb(a,c,d,e,k,s,n).send(q),f.isFunction(m.triggerInitializationEvents)&&
m.triggerInitializationEvents()}catch(g){__IntegralASDiagnosticCall("impsend",g,p)}},postImpression:function(b,c,d,e,k,s,n,q,m,g,f,A,v){var B;try{var l=yb();l.start();l.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FRAUDEXP]);var z=zb(b,c,d);z.isApplicable(e)&&z.start();e.bootstrapOn("getTpl")&&e.on("usetpl")&&Ab(k,s,n,c,q).init();p.tpiLookupURL&&Bb(k,s).init(p.tpiLookupURL);Cb();"true"!==p.minimizeCalls&&(B=(new Date).getTime(),r.execAtEndOfThread(function(){a(q,m,g,
n,B,e)}));f&&f.start&&f.start();v.isDomless()||(Db().start(["sca","xsca"],e),A.isStarted()&&A.sendOriginList());P.runAll();var O=Eb();O.isApplicable(e)&&(O.start(),R.recordBlockingTime(),R.setupOnLoadTracking(),R.setupBrowserDelayTracking())}catch(u){n.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),f=function(g){return new E(g)},E=function(g){this.iterable=g};E.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};E.prototype.isArray=
function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(g){return 0===this.keys(g).length};E.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};E.prototype.map=function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&
b.push(e)});return b.join(a)};E.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),n=f(c).toION(g,a);return d?n:(g[b]||b)+":"+n}));return c+b.join(",")+d};E.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==
c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};E.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};E.prototype.mapToObj=function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;
return b})};E.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};E.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};E.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=function(g){var a=[];this.each(function(b){a.push(b)},g);return a};E.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};E.prototype.selectProperties=function(g){var a={},b=this;
f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(g,a){return a})};E.prototype.JSONStringify=function(){var g,a,b=!1;C.Prototype&&C.Prototype.Version&&-1===C.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&
(Array.prototype.toJSON=a);return g};E.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};
f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e=
{};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||C;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,k)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};var P=function(){var g,a={},b=[],c=[],d=function(){var a={},
b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,q,m){m=m||{};var w,h,l=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},v=function(){if(!w){var a=[];w=!0;l(["features","browser","context"]);m.emits&&(c.events=new D);if(!m.applies||m.applies.apply(m,b))h=!0,a=f(e).map(function(a,b){return g.request(b)},!0),a.push(c),f(c).mixin(q.apply({},a))}};(function(){var b=m.tier;f.isDef(b)&&(a[b]=a[b]||new Z,a[b].push(v))})();g.provide(d,function(){var a;
v();h&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new ia;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",
NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",
BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",
GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",
NO_ORIGINAL_VAST:"q",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",
VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8,FRAUD:9},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},
W=function(){return{applies:function(g,a){var b=l.request("mobileApp");return(g.browserIs(h.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},vb=function(){var g,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){g=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;d()});l.on("impressionsent",function(){a=
!0;d()});c.onHiddenChange(d)},bb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=f(c).compareTo(a);d&&(d.t=u.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},ia=function(){var g=new Fb,a=new D;return f(g).mixin(a)},D=function(){var g={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&(b=b.slice(0,1)),f(b).each(function(a,
b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new Z;g[a].push(b,c)};return{on:function(a,e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=g[b])&&k.run.apply({},c)}}},$=function(){var g=function(a,c,d){var e,k=c.length,s=t.isWindow(a)?a.frames:t.getChildWindowsOf(a);
d&&d(a,c);if(s&&s.length){for(a=0;a<s.length;a++)(e=s[a])&&t.isWindow(e)&&(c[k]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=t.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},Z=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;
f(g).each(function(b,c){c.apply({},a)})}}},Oa=function(g){return{doEligibleJobs:function(a){var b=g[0],c=b&&b.time;f.isDef(c)&&a>=c&&(b.task(),g.shift())},getNextJob:function(){return g[0]}}},Gb=function(){var g,a=new ja,b=function(b,d,e,k){var s,n,q,m;if(JSON&&JSON.parse)try{s=JSON.parse(b.data),n=b.source,m=f.noop,d(s)&&(k&&(q=k(n,s))&&(m=function(){a.send(function(){return q},n)}),e(b,s,m))}catch(g){s&&l.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(k){b(k,
a,d,e)};x.addEvent(C,"message",g)},stop:function(){g&&x.removeEvent(C,"message",g);g=null}}},ja=function(){var g=function(a){return f(a).isObj()?[a]:(new $).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var s;s=f.resolve(b,d)||{};s.sentTime=r.now();s=a(s);d.postMessage(f(s).JSONStringify(),"*")})}}}},Hb=function(g,a){return{onAll:function(b){var c=
{};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},Xa=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==
typeof e?e:{};var q=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){q({output:b},a,e)}):q(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},
Fb=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);return c}}},nb=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new Ib:new Jb(g,a,b,c)}}},Jb=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),k=a.getOutOfViewReasons(),s=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&d?d:J(t.calcWinDims()),
q=a.getDims();d=n;if(!a.hasAd()||!n.hasValidDims()||!q.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:u.embedded,winDimensions:n,adDimensions:q};!0===s&&k.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:q,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),
tabHidden:f.stringifyTriState(s),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Ib=function(){return{collect:function(){return{}}}},Kb=function(g){g=g||f.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&
b===e.state||a.push({state:b,duration:0})}}},ka=function(g,a){var b=g||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=r.now())},stop:function(){var s=e||a;0===c%b&&(k+=r.now()-s,d++);c++},getTime:function(){return k},getCount:function(){return d}}},la=function(){var g,a=0,b=0,c=new D(!0),d=function(){g&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},
start:function(){g||(g=!0,r.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},Lb=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=r.setInterval(g,c))},e=function(a){a&&g();r.clearInterval(b);b=null};return{start:d,stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},Y=function(g){var a,b,c=0,d=u.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=u.getTagTime();k=!1},mark:function(){a=k?u.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=u.getTagTime();
k=!0}}},T=function(g,a){var b=g||p.adsafeSrc||p.requrl;b&&0===b.indexOf("http")||(b=p.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],k=b[4],s=b[5],n=g?b[6]:"",q=a?b[7]:"",m={},w=function(a){f.isDef(a)&&(k=a);return k},h=function(a){f.isDef(a)&&(s=a);return s},l=function(a,b){return a+"="+f(b).toION()},q=q?q.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=m[b])?m[b]=d+c:a&&q.length&&(d=q.split(b),e=1<d.length)&&
(e=d[1].split("&")[0],d=[d[0],e].join(b),q=q.replace(d,d+c))},fullDom:c,hostname:e,sub:w,master:h,setParam:function(a,b){m[a]=m[a]||{};f(b).isObj()?f(m[a]).mixin(b):m[a]=b},path:function(a){n=a},toString:function(){var a=w()?w()+".":"",b=n?"/"+n:"",c;q||!f(m).isEmpty()?(c=f(m).isEmpty()?"":f(m).stringify(l,"&"),c="?"+q+(q&&c?"&"+c:c)):c="";return d+"://"+a+h()+b+c}}},Cb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,
c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};(function(){var b;try{if(u.friendly&&!u.isMobileApp()){var c,d;if(c=t.getOurNodeInTop()){var e=t.getAncestorNodes(c);d=f(e).map(a)}(b=d=d&&g(d))&&l.trigger("addOutputItem",{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0})}}catch(k){l.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}})()},eb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&
a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=r.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",
h.DT_CODES.THIRD_PARTY)}}},Ab=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var n=d.length,k=0,m=0;e(n,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){e(n,k,++m)},!0);e(n,++k,m)})}catch(w){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+p.asid;g.jsonp(a,k)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},qb=function(g,
a,b,c){return{enabled:"true"===p.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===p.accountForSadImps&&c.measure(a),p._onAPIResult&&p._onAPIResult(a)}catch(e){g.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},Ua=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new Mb:new Nb}}},Nb=function(){var g=h.BROWSERS,a,b=function(){var a="0",b=r.getWindow(),c=function(a){return a.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".")};
try{try{var d=r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(e){a="6"}}catch(s){}a=c(r.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(k){try{b.navigator.mimeTypes[h.FLASH_MIME].enabledPlugin&&(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(g){}}return a},c=function(){f.isUndef(a)&&(a=b());return a},d=function(a){return k()===a},e=function(){var a=r.getDoc();
return a&&a.documentMode?a.documentMode:h.NA},k=function(){var a="u",b=r.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},s=function(){var a=!1,b=r.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);
return a};return{browserIs:d,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!f.isFunction(a.postMessage))},getFlashVersion:c,getDocumentMode:e,getBrowserType:k,getUserAgent:s,params:function(){var a=k(),b=c(),s;s=5;var w=r.getWindow(),y=r.getDoc();d(g.IE)?w.msCrypto?s=11:
w.atob?s=10:w.addEventListener?s=9:w.JSON&&y.querySelector?s=8:w.XMLHttpRequest?s=7:y.compatMode&&(s=6):s=h.NA;var w=e(),y=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],l=h.NA,v=r.getDoc(),B=v.createElement("div");if(d(g.IE))try{if("-ms-ime-align"in v.documentElement.style)l="11";else for(B.style.behavior="url(#default#clientcaps)",v=0;v<y.length&&!(l=B.getComponentVersion(y[v],"componentid").replace(/,/g,"."));v++);}catch(F){}y=
l;l=h.NA;B=r.getWindow();f.isDef(B.navigator)&&f.isDef(B.navigator.appName)&&(l=B.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,bv:s,dm:w,abv:y,an:l}},isAndroidWebViewBrowser:function(){var a=s(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return f(b).findFirst(function(b,c){return N.contains(a,c)})};return N.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=s())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},
Mb=function(){var g=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",bv:a(),dm:a(),abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasFlashEnabled:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},Ya=function(){return{createInstance:function(g,a){return u.isDomless()?new Ob(a):new Pb(g,a)}}},Pb=function(g,
a){var b=function(a,b){var c,d,e=p.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===p.forceAppend?"script"!==a?(c=L.createElement("DIV"),c.innerHTML=d,e.appendChild(c.childNodes[0])):(c=L.createElement("SCRIPT"),c.src=
b,e.appendChild(c)):L.write(d)},c=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=t.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=L.createElement("script");c=c||p.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?a({iasImpId:p.asid}):a&&"string"===
typeof a&&c(a,void 0,!0)},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},Ob=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,
b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:p.asid}):a&&"string"===typeof a&&b(a)},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},u=function(){var g="undefined"===typeof window,a="undefined"!==typeof window&&"undefined"!==typeof top&&window!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!g&&f.isDef(r.getWindow().mraid)},d=function(){var a=
!1;if(!g)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},e=function(){return p.mobOrTab},k=function(a){return!1===f(p.customViewability).isArray()?!1:0<f(p.customViewability).filter(function(b,c){return N.contains(c.id,a)}).length},s=function(){return k("grpm")||p.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=
b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-p.birthdate},getPageTime:function(){var a=h.NA;!g&&f.isDef(window.chrome)&&f.isDef(window.chrome.csi)&&f.isFunction(window.chrome.csi)&&(a=r.round(chrome.csi().pageT));return a},isVideo:function(){var a;if(!(a=-1!==p.mode.indexOf("jsvid"))){var b;a=!1;if(!g){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=l.request("omidVerificationClient"),
a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||d());a=b}return a},isMobileApp:function(){return g||f.isDef(r.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;g||(a=(a=p._cl_adpath)&&f.isStr(a));return a},isAvid:function(){return!g&&f.isDef(r.getWindow().avid)},isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return g},isAvidNative:function(){var a=!1;if(!g){var b=l.request("avidJsClient");b.isAvidAvailable()&&
(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==aa());return a},isMraid:c,isSafeFrame:function(){var a=!1;g||(a=f(r.getWindow().$sf).isObj(!1)&&f(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:d,isDeviceTypeGroupMobile:e,usesIASFullyInViewCustomMetric:function(){return k("fiv")||p.use100v},isNativo:function(){var a=!1;g||(a=(a=p._cl_adpath)&&
N.contains(a,".ntv"));return a},usesGroupMCustomMetric:s,isCeltra:function(){var a=!1;g||(a=ma().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return s()&&e()},usesZeroPivCustomMetric:function(){return!1===f(p.customViewability).isArray()?!1:0<f(p.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length}}}(),x={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",
x.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",x.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;
this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=L.defaultView&&L.defaultView.getComputedStyle;b=b||"";d?c=(g=L.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(C.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&
(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(u.isDomless())r.setTimeout(function(){g()},50);else{var b=a||(u.xDomainIframe?L:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(L.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(g)}},
isSandboxed:function(g){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(g.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
x.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},X=function(g){var a,b=X.callTypeCounter,c=[h.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=h.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};X.callTypeCounter={};var pb=function(g,a,b,c,d,e,k,s){var n=0,q=0,m=!1,w=function(a,e,s,g,w,y){s=s||!b.on("postDts");var u=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(u||"n"!==k.getCurrentLoc()))try{var t=p.dtBaseURL,K=new T(t,!0),x=r.now();
l.trigger("preSendDt",a);t||(K.path("dt"),b.on("usedtdomain")&&K.sub("dt"));A(K,a,e);w&&w.field&&K.setParam(w.field,w.value);g||v(K,a);l.trigger("send",K,function(){q+=1;n=r.now()-x;f.isFunction(y)&&y()},s);a===h.DT_CODES.UNLOAD&&(m=!0);d.cleanup()}catch(M){__IntegralASDiagnosticCall("dt-"+a,M),l.trigger("error",h.ERROR_CODES.PHONE_HOME)}};g=function(){m||w(h.DT_CODES.UNLOAD,-1,!0)};var y=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=p.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&
d&&w(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},A=function(a,b,e){var s=new X(b);e=f.isDef(e)?e:s.enumerator;a.setParam("asId",p.asid);e={c:c.getCacheBustId(),pingTime:e,time:u.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},v=function(c,g){var f,m={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();
if(g===h.DT_CODES.VIDEO_EVENTS||u.isVideo()&&g===h.DT_CODES.CUSTOM)if(f=l.request("videoEventsString"))m.ve=f;if(g===h.DT_CODES.CUSTOM||g===h.DT_CODES.UNLOAD||g===h.DT_CODES.VIDEO_EVENTS)m.clog=s;g===h.DT_CODES.UNLOAD&&(m.ndt=q);-1!==p.mode.indexOf("jsvid")&&(m.vv=l.request("videoVersion"));m.NULL1=b.output();m.NULL2=k.stringify(10);m.em=u.embedded;m.fr=u.friendly;m.uf=0;m.e=a.toString();m.tt=p.mode;m.dtt=n;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&
(a.flagForRemoval=!0);return b},m);c.setParam("tv",m);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){w(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:y,updateDtCount:function(){q++},unload:g});return{send:w,unload:g,diagnostic:y,setViewabilityMod:function(a){}}},J=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?t.nodeIsHidden(g):0===g.width||0===g.height;return b?!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=r.round(c)});
return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;g!==C.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=t.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},toString:function(){var a=d();return[a.scrX,a.scrY,
a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},t={findElementsWithSize:function(g){var a=[],b=function(c){1>t.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(x.getStyle(g,"width"))&&0===a.width,a=0===a.width||0===a.height;g="hidden"===
x.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=t.browserWindowPosition(),b=t.windowSize(),g={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){l.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(u.isDomless())return{width:0,height:0};if(u.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=top.innerWidth,g.height=top.innerHeight;
else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(window.outerWidth)&&(g.width=window.outerWidth,g.height=window.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(window.screenX)?(g=window.screenX,a=window.screenY):f.isDef(window.screenLeft)&&(g=window.screenLeft,a=window.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=
-1;g&&(g=t.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=t.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=L.createElement("span");f(g.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=u.friendly&&r.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,
a){var b,c,d,e=1E4,k=1E4;b=x.nodeIsAbsolutelyPositioned(g);d=!t.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!t.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!t.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=t.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==L&&d!==a)}return{width:r.round(e),height:r.round(k)}},findChildWithLargestContent:function(g){var a=l.request("mobileApp").isMobileAppEnvironment(),b=function(b){for(var c=b;b.parentNode!==
g&&"inline"!==x.getStyle(b.parentNode,"display");){var d;if(!(d=!a)){d=b.parentNode;var n=!0;if("visible"===x.getStyle(d,"overflow")||"visible"===x.getStyle(d,"overflowX")&&"visible"===x.getStyle(d,"overflowY"))n=!1;d=n}d&&(c=b.parentNode);b=b.parentNode}return c},c=null,d=function(a){var b,c,d=null,f=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var m=a[b],w=t.getNodeArea(m),h;if(h=w>f){h=void 0;if(h=m.parentNode===g)if(h=void 0,h="DIV"===m.nodeName)if(h=void 0,h=""===m.style.backgroundImage){var l=
h=void 0,v=m.childNodes;for(h=0;h<v.length;h++)1===v[h].nodeType&&(l=!0);h=!l}h=!h}h&&(d=m,f=w)}return d}(function(a){var b,c,d,g,m=[],f="iframe img a object embed div".split(" ");b=0;for(c=f.length;b<c;b++){var h=a.getElementsByTagName(f[b]);if(h.length)for(d=0,g=h.length;d<g;d++)m.push(h[d])}return m}(g));d&&(c=b(d));return c},screenSize:function(){if(u.isDomless())return{width:0,height:0};var g={width:-1,height:-1};try{f.isDef(window.screen)&&(g={width:window.screen.width,height:window.screen.height})}catch(a){}return g},
calcMonDims:function(){var g=f(t.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:window.screen.availLeft,scrY:window.screen.availTop,width:window.screen.availWidth,height:window.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=r.getTop(),b=r.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;u.friendly&&(g=u.embedded?(g=t.getOurIFrameInTop())&&g.frameElement:p.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&
g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(t.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=
null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[p.contextNode.parentNode,r.getDoc()];u.friendly&&d.push(r.getTop().document);if(a&&u.embedded)try{d.push(r.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,
d){try{c=t.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=t.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=r.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;
return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&t.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&t.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=x.getStyle(g,"width");g=x.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=t.getAttribute(g,"width");g=
t.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;u.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||
a},getElementsWindow:function(a){var b=t.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return t.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent}},Va=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;
return!1}}},tb=function(){return{createInstance:function(a,b){return u.isDomless()?new Qb:new Rb(a,b)}}},Rb=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(p.adsafeSrc,p.requrl,p.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,k=c(d),s=k&&k.length&&k.join("|"),n=p.exchList;s&&(e=f(n).map(function(a,b){return 0<=s.indexOf(N.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},
"ex",{type:h.IMPRESSION_EVENT}))}catch(q){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},Qb=function(){return{parse:function(a){}}},Ra=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=p.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={rt:"rattie",cb:"cachebust",th:"tabHiddenDtCall",es:"everySecond",sa:"swapids",sc:"usesca",ha:"usehaps"},d={fif:"useFIF"},e=function(){var b,e;b=f(c).mapToObj(function(b,
c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(u.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){a=p[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(p[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=p.sp_cdnScripts&&
p.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},ib=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},k=h.NA;d=c?d:e;f.isDef(a)&&a!==h.NA&&-1<a&&(k=a>=d.IN_VIEW?h.IN_VIEW:a<=d.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return k},calcPercentInView:function(a,c,d,e){var k=0,s=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,
b){if(b.hasValidDims()){var c=s.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),k=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),f=f-e,c=c-k;s=J({scrX:e,scrY:k,width:0<f?f:0,height:0<c?c:0})}}),k=r.round(s.area()/a.area()*100));return k}}},Wa=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a=
"";try{for(var b,c=C.Uint32Array&&C.crypto&&C.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),C.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return p.anId};return{getAsid:function(){return p.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||
p.advEntityId+"-"+p.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},Bb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},ob=function(a){var b=function(a,b){return{time:a,task:b}};return{createPingJobs:function(a,d,e,k){return f(d.timeThresholds).map(function(d,n){var q=n/1E3;return new b(n,function(){f.isDef(k)&&
l.trigger("addOutputItem",{output:k},"metricId",{type:a});l.trigger("sendDt",a,q);if(e[n])e[n]()})})}}},ga=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var s=a.indexOf("?");b=b+"="+c;if(-1===s)return a+"?"+b;s++;return a.slice(0,s)+b+"&"+a.slice(s)},c=function(){return"__IntegralAS_"+p.asid.replace(/\-/g,"")+"_"+r.round(1E4*Math.random())};return{wrap:function(d,e,k,s){var f=c(),q,m,h;s=s||"ias_callback";d=""+d;RegExp(s).test(d)&&(q=RegExp("("+
s+"=)(.[^&]*)").exec(d)[0],m=q.split("=")[1],h=N.stringToFn(m),d=a(d,q));C[f]=function(a){e(a);k&&h&&h(a);C[f]=void 0};return d=b(d,s,f)},wrapToGlobal:function(a){var b=c();C[b]=function(c){a(c);C[b]=void 0};return b}}},rb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=T(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},
rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,n){var q;try{q=d(c,
n),a.enabled?l.trigger("jsonp",q,a.callback,!0):l.trigger("send",q,f.noop,!b.on("postMon"))}catch(m){__IntegralASDiagnosticCall("jsvidimp",m,p)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===p.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,e){var n;try{var h;if(h=b)h=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;
h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=d(a,e);l.trigger("send",n,f.noop,!0)}catch(A){__IntegralASDiagnosticCall("fwjsvidimp",A,p)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[p.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&p.mobFwUrl?p.mobFwUrl:a?p.adsafeSrc:p.requrl;a||(b+="?"+p.reqquery);return b}(d),m=
f.indexOf("BEGIN__ADSAFE"),h=-1!==m,y=h?f.slice(m):"",a=h?f.slice(0,m):a(f);return{isFW:d,baseUrl:a,macroUrl:y,sendImpression:function(a){var d=function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},
floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return C},getTimeoutScope:function(){return u.isDomless()&&u.isOmid()?l.request("omidVerificationClient"):C},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){u.isDomless();return top},getNewActiveXObject:function(a){u.isDomless();return new ActiveXObject(a)},getDoc:function(){u.isDomless();return L},getIntersectionObserver:function(a,b){u.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},db=function(){return{createInstance:function(){return u.isDomless()?new Sb:new Tb}}},Tb=function(){var a,b=!1,c=l.request("features"),d=new Z,e=function(){var b;
c.on("blur")||c.on("abcAudit")&&923747==p.anId?(b=r.getWindow(),b=u.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},k=function(){var b=r.getWindow(),c=function(){d.run(e())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a,b="hidden",c="visibilitychange",
d=r.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,k){var h=k+"Hidden";f.isDef(d[h])&&(b=h,c=k+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);b||(b=!0,k())}}},Sb=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},fb=function(){return{createInstance:function(a,b){return u.isDomless()?new Ub:new Vb(a,b)}}},Vb=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===
c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=b.getWindow();
e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},q={};try{q.a=encodeURIComponent(top.location.href)}catch(m){}try{q.b=encodeURIComponent(parent.location.href)}catch(h){}if(u.embedded){try{q.c=encodeURIComponent(parent.document.referrer)}catch(l){}try{q.e=encodeURIComponent(window.document.referrer)}catch(A){}}try{"jsi"!==
p.mode&&(q.d=encodeURIComponent(window.location.href))}catch(v){}try{q.f=encodeURIComponent(p.jsref)}catch(r){}try{k=n(),q.g=encodeURIComponent(k.g||""),q.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(q.g=encodeURIComponent(a.getTopDomain()))}catch(F){}q=d(q);q=e(q);k=[];for(var z in q)q.hasOwnProperty(z)&&k.push({key:z,val:q[z]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?
c:k()}}},Ub=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},cb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",p._onSuspicious)},skipAsFraudulent:function(){return b}}},gb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,s={i:0,o:0,n:0,pp:0,pm:0},n=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason",cmps:"adCompCount"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},q=function(a,c){var d=new Kb(c);return b[a]=d},m=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},w=function(){f(c).each(function(b,c){s[c]+=a.length?k-d:k});d=k},y=function(b){a.length&&w();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(s[b]+=s.n);c[a]=b});a.length||w()},A=
function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=n(a);var e={sl:m(a.viewState)};k=u.getTagTime();y(e);e.t=k;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);
c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return c};(function(){q("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});q("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){k=u.getTagTime();
w()},registerLocation:function(d){var k,s=!1;c.sl==m(d.viewState)&&a.length?(k=new A(d),a[a.length-1].details=k.details):(k=new A(d),a.push(k),e=d.viewState,s=!0);l.trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(s&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(s).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,
getCurrentLoc:function(){return m(e)}}},N={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=C,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},Wb=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=t.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=t.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=t.tagNameIs(a,"div"),e=t.attributeMatches(a,"class",b);a=t.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return t.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=t.getFirstChildElement(b))&&t.tagNameIs(b,"a"),f=t.attributeMatches(b,"href",d),h=t.attributeMatches(b,"target",e);k&&f&&h&&(b=t.getFirstChildElement(b),t.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return t.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},Xb=function(){var a=Wb(),b=function(a,b){b.tag=t.getTagName(a);b.size=t.getDimensionFromAttributes(a)||t.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};P("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!t.isViewportVisible(c,a))return c;if(c!==d&&u.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();t.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var Yb=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,q=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(q=!0);q&&!d&&(b(),e(),q=!1);c=a.innerWidth;f=a.innerHeight})}}};P("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,s={};d!==c&&(k=f.stringifyTriState(d),
s.res1=k,s.ps=k,s.ts=r.now(),s.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",s));c=d}catch(n){l.trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)Yb(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});P("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;u.embedded&&r.execAtEndOfThread(function(){try{k=p.contextNode.parentNode;var f=b=Xb().getDFPValue(k),n={};n.df=f.type;f.size&&(n.sz=f.size.width+"."+f.size.height);f.tag&&(n.dom=f.tag);c("dfp",n);b.size&&a&&(a.events.on("newState",d),a.start())}catch(q){l.trigger("error",h.ERROR_CODES.HIDDEN)}})})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var ab=function(){return{createInstance:function(a){return u.isDomless()?
new Zb:new $b(a)}}},$b=function(a){var b,c,d,e=new ia,k=new $,s=new ac(e),n=new bc,q=new cc,m=new dc(e,a),h=function(){f.isUndef(d)&&(d=new ec(e));return d},y=function(){e.provide({frameCollection:function(){return s},adProxy:function(){return q},adTalkMessage:function(a){return new fc(a,e)},adTalkMessageCollection:function(){return n},idMapModule:h,interFrameQuerySelector:function(a){return new gc(a)}})};return{isApplicable:function(a){return f.isDef(window.JSON)&&f.isDef(window.postMessage)&&!a.isAvid()&&
!a.isOmid()},start:function(){y();k.traverse(s.addFrame);m.startListening();m.sendToKnownFrames();l.once("stopAdTalk",function(){m.stopListening()})},sendAdTalkCall:m.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new na(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new na(e,!0));return c},getIdMap:h}},Zb=function(){return{isApplicable:function(){return!1},start:function(){}}},fc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();
c=l.request("features").on("swapids")?p.oid:p.asid;var k=a||{},f=p.asid,d=d.tagId,n=u.embedded,q=u.friendly,m=p.birthdate;c=c.split("-")[2];var w;u.friendly?w="["+h.AD_IDENTIFIER+"-"+p.asid+"]":(w=r.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:n,srcIsFriendly:q,srcBirthdate:m,iasCommonId:c,nodeSelector:w,positionStr:e,version:"0.1"}},bc=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},hc=function(a,b,c,d){var e,k=a==C;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:p.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||f.isDef(e.selfDescription)}};var s=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){n(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},n=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},q=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){s(b);q(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},ac=function(a){var b=
[],c={},d={noMe:!0};return{addFrame:function(e,k,f){var n=a.request("adProxy").getAll();e=new hc(e,k,n,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},na=function(a,b){var c=function(a,c){var f=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=d(f,c.getStringifiedPosition());else{var q;q=""+c.getStringifiedPosition();q+=c.isMe?"*":"";q+=f.length?"."+f[0].tagId:"";n+=q}return n}},d=function(a,b){var c="";return c=a.length?
c+f(a).stringify(function(a,c){return b+(p.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},ec=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=p.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},k=function(a){var e=!1,e=!u.embedded,k="BODY"!==t.getNodeName(c)&&
"HEAD"!==t.getNodeName(c),f;if(f=a.srcIsEmbedded){f="0.1"!==a.version;var l=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);f=!(f?l:!a.srcIsFriendly)}e&&k&&!f?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&u.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==p.asid&&k(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:k}},gc=function(a){var b=new $,c=function(a){var b=a,c="IFRAME"===t.getNodeName(a),d=t.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return t.querySelector(c(a),b)},e=function(c,e){var n,q,m;try{q=d(c,e),q||(n=b.getFrames(!0,a),f(n).findFirst(function(a,b){return m=d(b,e)}))}catch(h){}return q||m||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},
dc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?p.oid:p.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==p.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},s=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},n=function(c,d,e){var k,n,v,p,
F;try{k=a.request("frameCollection");n=a.request("adTalkMessageCollection");v=d.messageContent.self;n.add(d);var z=k.getMe();z.unifiedId>v.unifiedId&&(z.unifiedId=v.unifiedId);var u;u=r.now()-d.sentTime;d.transferDuration=u;n=p=k.getFrame(v.id);f.isUndef(n)||f.isUndef(n.selfDescription)?(p=p||k.addFrame(c.source,v.id.split("-"),d),p.addInformationFromSrc(d,v),e()):p.addInformationFromSrc(d,v);(F=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&s()}catch(t){l.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};
return{sendAdTalkCall:s,sendToKnownFrames:function(){(new ja).send(k)},startListening:function(){c=new Gb;c.listen(e,n,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:n,createMessage:k}},ic=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},cc=function(){var a,b=[],c=function(a){a=new ic(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},hb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?
(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(h.BROWSERS.IE)&&x.addEvent(r.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},jc=function(a,b){var c,d=h.NA,e=d,k=!1,s=!1,n=!1,q=!b,m=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/
(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&r.execAtEndOfThread(function(){l.trigger("IOPivChange",d)});e=d},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});q&&r.execAtEndOfThread(function(){d===h.NA&&(d=0)});b.observe(w(a));q&&r.execAtEndOfThread(function(){u.isBustedIframe()||l.trigger("delayedViewabilityReady")});k=!0},w=function(b){if(!f.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");
f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){s=!0}b&&null!==b.bodyElement?m():b&&b.document?x.whenReady(m,b.document):s?l.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):m()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;
c&&(a=J({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==h.NA}}},ha=function(){var a=!1;(function(){x.whenReady(function(){l.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};P("loopDelay",[],ha,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var kc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},
lc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},zb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.trigger("notify",p._onMeasurable))};return{start:function(){var b;b=[mc(),nc(),lc(),kc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(p._onMeasurable)}}},nc=function(){return{start:function(a){Hb(l,
["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&u.isVideo()}}},mc=function(){return{start:function(a){l.once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&u.isVideo()}}},oc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,
b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.trigger("adImpression")})}}},pc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&
f.isDef(d)&&(c=d.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},qc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},rc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},ea=function(a){var b=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},sc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},Fa=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ea=function(a,b){var c=!1,d=!1,e=l.request("omidAdSessionContext"),f=function(b){"sessionStart"===b.type&&(e.isNative="native"===b.data.context.adSessionType,(c=!0)&&d&&(C.omidSupported=!0,a()))},s=function(b){e.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});e.isNativeVideo=
e.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(C.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(f,"IAS");b.addEventListener("impression",s)}}},tc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},uc=function(a,b){var c,d=function(a){var d,f,n;try{d=a.eventData.percentageInView,
f=c&&75<=d,n={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",n)}catch(q){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},
addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},vc=function(a,b){var c=function(a){try{var c;"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(f){__IntegralASDiagnosticCall("omidvideo",
f,C.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},oa=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);
a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},wc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?
e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},Za=function(a,b,c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),
e=(new ba(e)).resolve(),f=new xc(e),s=new pa(b,c,u,d);return!e&&s.accepts()?new yc(u.isVideo(),new D):new wc(e,f,d.isMobileAppEnvironment())}}},$a=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new ea(a),e=[];if(b.accepts()){var f=new zc(a,new D),s=[{environment:new Ac,measurementStrategy:new Bc(a,new D)},{environment:new Cc,measurementStrategy:new qa(new ca,r.getWindow(),new D)}],n=(s=(new ba(s)).resolve())?s.measurementStrategy:
{},q=new ra(new sa(new V),new V),s=new rc(a,b,p.mode),m=new ta(f,n,new D,q),b=new sc(a,b,p.mode),a=new ua(f,n,new vc(a,new D),new D,q);e.push({environment:s,measurementStrategy:m});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=l.request("avidJsClient"),d=new pc(b),e=[];if(d.accepts()){var f=new oc(b,d,p.mode),s=new qc(b,d,p.mode),n;n=new tc(b,new D);if(d.supportsAdContainerGeometry()){var q=new Dc,m=new Ec,h=new qa(new ca,r.getWindow(),new D),
y=new Fc(b,new D),q=(q=(new ba([{environment:q,measurementStrategy:y},{environment:m,measurementStrategy:h}])).resolve())?q.measurementStrategy:{},m=new ra(new sa(new V),new V),h=new Gc(b,new D),b=new ta(h,q,new D,m);n=new ua(h,q,n,new D,m)}else q=new uc(b,new D),b=new oa(q,new D),n=new va(q,n,new D);e.push({environment:f,measurementStrategy:b});e.push({environment:s,measurementStrategy:n});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=
[],d=b.isSafeToInjectMraid(),d=new Hc(r.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new Ic(r.getWindow(),e),f=new Jc(r.getWindow(),new D);e.accepts()?(d=new Kc(r.getWindow(),new D),d=new va(f,d,new D),d={environment:e,measurementStrategy:d}):(e=new oa(f,new D),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ba=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},
xc=function(a){var b=!1,c,d={winDimensions:J({scrX:0,scrY:0,width:0,height:0}),adDimensions:J({scrX:0,scrY:0,width:0,height:0}),containerDimensions:J({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},e=function(a){return a?new J({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):J({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),
containerDimensions:e(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,
isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=
!0}}},va=function(a,b,c){var d=!1,e=!1,k=!1,s,n,q,m,w=function(){if(!f.isUndef(n)){var a=[],b,l;d?(e?(l=!1,b=100):(l=m,b=q),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(l=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));k=!0;n.shouldDelegateToDomBasedViewability=l;n.percentageInView=b;n.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;n.outOfViewReason=a.join(".");s=n;c.trigger("measurementChanged",s)}},r=function(a){n=a;q=a.percentageInView;m=a.shouldDelegateToDomBasedViewability;w()},p=function(a){a=a.eventType;
"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);w()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(p);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",
a)},isMeasurable:function(){return k}}},Ic=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},Kc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Gc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",
a)},d=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",
a)},translateAvidOutOfViewReasons:d}},ra=function(a,b){function c(a,b,c){c=s(b,c);a=e(a,b,c);return a.width*a.height}var d=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},e=function(a,b,c){a=d(b,a);return d(c,{x:0,y:0,width:a.width,height:a.height})},k=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},s=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(d,q){if(f.isDef(d)&&f.isDef(q)){var m=d.viewport,l=d.computedAdContainer,y=l.obstructions,p=y&&0<y.length,v=d.originalAdContainer,u=q.adGeometry,F=d.detectionMethod,z=0,m={x:0,y:0,width:m.width,height:m.height},t=k(v,u),I=d.outOfViewReason,G=0,H=0,U=p||!1;if(q.adFound&&0<d.percentageInView){G=c(m,l,t);p?(z=s(l,t),z=e(m,l,z),z=k(l,z),z=a.calculateObstructedArea(z,y)):z=0;H=z;z=Math.round((G-H)/(t.width*t.height)*
100);p&&0===H&&(U=!1);for(var u=U,K,p=0,H=b.getConfig(t).numberOfSlices,x=r.floor(t.height/H)||1,y=[],G=u?a.getObstructionStatusBySlice(H):[],M,p=0;p<H;p++)K=t.y+x*p,p==H-1&&(x=t.y+t.height-K),K={x:t.x,y:K,width:t.width,height:x},M=c(m,l,K),K=1==M/(K.width*K.height),y.push(K);if(u)for(l=r.min(G.length,H),p=0;p<l;p++)y[p]=y[p]&&!G[p];l=y}else l=q.adFound?b.getConfig(u).defaultSliceArray:void 0;return{windowDimensions:m,containerDimensions:v,adDimensions:t,percentageInView:z,viewState:50<=z?h.IN_VIEW:
h.OUT_OF_VIEW,outOfViewReason:50<=z?"":I||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:F,isObstructed:U,sliceStatus:l}}}}},Dc=function(){return{accepts:function(){return u.isAvidNative()}}},Fc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",
a)}}},Ec=function(){return{accepts:function(){return u.isAvid()&&!u.isAvidNative()}}},ta=function(a,b,c,d){var e,k,s,n=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);s=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},q=function(a){e=a;n()},m=function(a){k=a;n()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(q);a.start();
b.addAdGeometryMeasurementChangedListener(m);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return s}}},sa=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,h,n,q;h=e&&0<e.length;var m;if(h){m=Math.round(d.width);var l=Math.round(d.height);k=Array(m);for(n=0;n<m;n++)k[n]=Array(l);m={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),
width:m,height:l}}else m={};k=m;l=m=0;if(h){for(;m<e.length;m++){h=e[m];n=l=k;var p=h;k=Math.max(n.x,p.x);h=Math.max(n.y,p.y);q=Math.min(n.x+n.width,p.x+p.width);p=Math.min(n.y+n.height,p.y+p.height);n=q-k;q=p-h;n=0<n?n:0;q=0<q?q:0;k-=l.x;h-=l.y;n=k+n;q=h+q;for(k=Math.round(k);k<Math.round(n);k++)for(p=Math.round(h);p<Math.round(q);p++)void 0!==l.matrix[k]&&void 0===l.matrix[k][p]&&(l.matrix[k][p]=1,l.obscuredPixelCount+=1);k=l}l=k.obscuredPixelCount;m=k;if(f.isUndef(m.matrix)||0===m.matrix.length)c=
[];else{h=0;q=!1;k=m.matrix[0].length;n=m.matrix.length;q=a.getConfig({height:k}).numberOfSlices;for(var p=r.floor(k/q)||1,u=[],v=0;v<k;v++){q=!1;for(var t=0;t<n;t++)if(1===m.matrix[t][v]){q=!0;break}h++;q&&(v+=p-h,h=p);if(h==p||v===k-1)u.push(q),h=0}c=u}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},zc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,
height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:e(a.data.adView.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:e}},Ac=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isNative}}},Bc=
function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Cc=function(){var a=l.request("omidAdSessionContext");
return{accepts:function(){return a&&!a.isNative}}},ua=function(a,b,c,d,e){var k=!1,s=!1,n,q,m,p,r,u=function(){if(!(f.isUndef(q)||f.isUndef(m)||f.isUndef(p))){r=!0;var a=e.calculateGeometricMeasurement(q,m),b=k&&s,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:k,
isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);n=l;d.trigger("videoGeometryMeasurementChanged",n)}},v=function(a){q=a;u()},t=function(a){m=a;u()},F=function(a){p=a;a=a.eventType;"AdEnteredFullscreen"===a?s=!0:"AdExitedFullscreen"===a?s=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(k=!1);u()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(v);a.start();b.addAdGeometryMeasurementChangedListener(t);b.start();c.addVideoPlaybackEventListener(F);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},qa=function(a,
b,c){var d,e=function(){var b=a.find(),e,n=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height}):n=!1;if(b=n)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);b&&(d=e,c.trigger("mobileAppGeometryChanged",{adGeometry:e,adFound:n}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Hc=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},
supportsAdContainerGeometry:function(){return!1},start:function(){}}},Jc=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(k){}},e=function(){var b=a.mraid;
return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},s=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):k())},n=function(){c||s()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||t.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",n):s()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",
a)}}},Na=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){var b=p[c];a.skipAsFraudulent()||l.trigger("notify",b)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Ha=function(){var a=new Q({tiv:[1E4]}),b=f([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==p.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ga=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3];var l=[2E3,5E3,15E3];c?(c=new Q({tiv:d}),d=d[0]):f?(c=new Q({tiv:l}),d=l[0]):(c=new Q({tiv:e}),d=e[0]);e={5E3:"_onInViewMRC5",15E3:"_onInViewMRC15"};e[d]="_onInViewMRC";return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:e,
isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Ja=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],s=[1E3,5E3,15E3],n=[2E3,5E3,15E3],q=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:f}):d?new Q({tiv:n}):new Q({tiv:s});
l.provide("isFullyInViewProvider",{isFullyInView:q});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:q,applies:function(){return e},minUnit:1E3}},Ia=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},La=
function(a,b){var c,d,e=r.getMaxNumber(),k=b.isVideo();c=new Q(a);d={};f.isDef(a.rts)&&(d={timThreshold:a.rts});return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,m,l=b.adDimensions.area(),p=1===b.tabHidden,u=r.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;m=b.ub||e;if(l>=d&&l<=m)return!0});c=!p&&u>=c.piv;b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);k&&(c=c&&b.isVideoPlaying);
return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Ka=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=f(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),q=c.on("groupmCM"),m=function(a,b){var c,m,n,h,l;c=f(b.mediaTypes).contains(d);m=f(b.distributionChannels).contains(e);n=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;h=N.contains(b.id,
"fiv");l=N.contains(b.id,"groupmCM");h=!h;l&&(h=q);return h&&c&&m&&n};return{resolve:function(){var b=[],c;n&&h&&(c=f(a.customViewability).filter(m),f(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){f(a.tiv).isArray()?a=a.tiv:"string"===typeof a.tiv?(a=a.tiv.split("|"),a=[8E3,1E3*parseInt(a[0])]):a=[1E3*a.tiv];return{timeThresholds:a}},Qa=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},
Pa=function(a,b,c,d){var e,k,h,n,q,m=function(a,b){return!b&&a},p=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},r=function(a){var b=0,m=1===a.tabHidden,l=a.isVideoPlaying,r=a.isSoundOn,v=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){h(b,m,l,v)?e[a].mark():e[a].stop();n[a]=e[a].getTotalTime()});u("slcVt",n);d&&(f(a.sliceStatus).each(function(a,b){p(b,m,l,v)&&r?k[a].mark():k[a].stop();q[a]=k[a].getTotalTime()}),u("slcVtVol",q));a=f(n).findFirst(function(a,c){b=Math.max(b,c);return 0>=
c});f.isUndef(a)&&c.doEligibleJobs(b)},u=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},v=function(a){!e&&a.sliceStatus&&(e=[],k=[],n=[],q=[],f(a.sliceStatus).each(function(a){e.push(new Y(1));n.push(0);d&&(k.push(new Y(1)),q.push(0))}))},t=function(a){f.isUndef(a.sliceStatus)||(e||v(a),r(a))};return{start:function(){h=d?p:m;a.addMeasurementChangedListener(t)}}},Ma=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},
sb=function(a,b,c,d,e,f,l,n,q,m){var p=!1,y=u.isVideo(),t=f.request("mobileApp"),v=W().applies(c,e),B=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&e.on("rattie")||v,F=u.xDomainIframe&&!B,z=new ka(10),O=function(){e.on("viewabilityready")&&!p&&(d.send(h.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),p=!0)};f.on("delayedViewabilityReady",function(){I();O()});f.on("delayedViewabilityReadyCallOnly",O);var I=function(c){c=c||!1;try{z.start();var d,e;b.hasMeasurementStrategy()?e=t.isMobileAppEnvironment()&&
b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(e=n.collect(),t.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):F&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),y&&!u.isAvid()&&m.setVideoSpecificScreenEventFields(e));d=q.registerLocation(e);c||a.trigger("measurementChanged",e);z.stop();var p=r.round(z.getTime()/z.getCount());l.addItem({output:p},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(w){f.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};
return{checkScreenLoc:I,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":y?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=u.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&v,d=!d&&!e&&!a;return t.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){t.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",
b)}}};P("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=Lc(c),s=[new Mc,new Nc(k)],n=function(){return f(s).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},q=function(a){"sessionFinish"===a.type&&l.trigger("adSessionComplete")},m=function(a){x.addEvent(C,a,function(){l.trigger("adSessionComplete")},!1)},w=function(){var a=new X(h.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:p.videoId,msg:"unloadComplete",
messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(e=Lb(a.checkScreenLoc,k.getPollingFrequency()),(b=n())?b.start(e):e.start(!0),c?u.isOmid()?l.request("omidVerificationClient").registerSessionObserver(q,"IAS"):m("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):m("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||
c.isOmid()||w();l.trigger("unload");e&&e.stop();l.trigger("endAdSession");l.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var Lc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Nc=function(a){var b,c,d,e,f,h=function(n){d&&!f&&1>n?(f=!0,r.setTimeout(function(){h(n)},1E3)):(e=1>n,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){h(a.percentInView)};
return{applies:function(a,b,c){var e=l.request("mobileApp");a=(new pa(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",h);l.on("newScreenEvent",n)}}},Mc=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,r.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=W();return b.on("viewabilityOptimization")&&
e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.on("IOPivChange",e)}}},Sc=function(a,b,c,d,e,k){var s,n,q,m,w,y,A,v,B,F=t.getElementsWindow(b);t.getElementsDocument(b);l.provide("iframeCalculatorHelper",Oc(F));var z=Pc(b,d),O=h.AD_IDENTIFIER+"-"+p.asid,I=!1,G=J({}),H=u.isDeviceTypeGroupMobile(),U=u.usesGroupMCustomMetricMobilePassThru(),K,D=function(){if(!s)if(s=z.calcDims(b,d,q),c===h.DETECTION_METHODS.VIDEO&&u.embedded){var a=s,e=(new J(b)).getRounded();try{a.set("width",
e.width),a.set("height",e.height)}catch(f){l.trigger("error",h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&s.treatAsPlaceholder();return s},M=function(){var b,d=u.xDomainIframe&&I;b=H&&I&&q.isReady();b=d||b;d=z.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&u.embedded||u.isCeltra());b?n=q.getPiv():f.isUndef(n)&&(b=!H&&(u.friendly||f.isDef(C.mozInnerScreenX))&&e.on("offscreen"),v=D(),A=new J(t.calcWinDims()),y=new J(b?t.calcMonDims():{}),B=d?z.getClippedDims():
G,n=a.calcPercentInView(v,A,y,B));return n},wa=function(){return a.calcInitialViewState(M())},xa=function(){return b===C?!1:D().isHidden()},E=function(a,b){return u.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),e=r.getDoc(),f=b===c,k=e.body,h=new W,n=l.request("browser"),s=l.request("features"),p=l.request("context"),v=!u.xDomainIframe,t=E(b,d),e=f&&k?e.body:b;K=u.friendlyIframe?
c.frameElement:e;x.addEvent(e,"click",function(){l.trigger("adComponentClicked")});x.addEvent(e,"mouseover",function(){l.trigger("adComponentMousedOver")});h.applies(n,s,p)?(q=jc(b,v),q.start(),I=!0,U&&(m=new ya(Qc,D(),t))):U&&(w=new Rc(a))})();return{mark:function(){t.setAttributeOf(K,O,"")},cleanup:function(){t.removeAttributeOf(K,O)},isNode:function(a){return b===a},isHidden:xa,isObstructed:function(){return!1},getDims:D,getPercentInView:M,getLocationState:wa,getOnPageViewability:function(){return xa()?
h.OUT_OF_VIEW:wa()},getDetectionMethod:function(){return c},getContainerDims:function(){return z.allowsOptimization?s:J(d)},refresh:function(){B=v=A=y=n=s=void 0;if(k){var a,c;if(!u.isDomless()&&(c=b.parentNode)){for(;b!==C&&c&&c!==L&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;m&&m.isReadyToMeasure()?a=m.getSliceStatus():u.friendly&&w&&f.isDef(v)&&(a=w.getSliceStatus(v,A,y,B));return a}}},Tc=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&
c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},s=function(m,n,q,s){var p=k()||0===c.length;m=Sc(a,m,n,q,b,s);k()&&(q=c.shift(),e=f(c),q.cleanup(),d=void 0);c.push(m);e=f(c);p&&m.mark();p&&n!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",m)},n=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==h.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},
q=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},m=function(){var c=n().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!u.isVideo();return a.calcInitialViewState(q(),c)},p=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},t=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===p(b)&&s(b,h.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",
function(a){f(a).each(function(a,b){var d=p(b);-1<d&&c.splice(d,1)})});return{getDims:t("getDims"),isObstructed:t("isObstructed"),getDetectionMethod:t("getDetectionMethod"),getContainerDims:t("getContainerDims"),getViewState:m,getPercentInView:q,isHidden:t("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:s,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=h.OUT_OF_VIEW_REASONS;e&&(a=d||m(),a!==h.OUT_OF_VIEW&&
a!==h.PARTIAL_VIEW_MINUS||b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:t("getSliceStatus")}},Uc=function(a){var b=!1;if(!f.isUndef(C.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",
b.removedNodes)})})}),d=function(){b=!0;r.setTimeout(function(){b=!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(L.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},ad=function(a,b){var c=[Vc()],d=[ca(),Wc(),Xc(),Yc(),Zc(),$c()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},Xc=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||aa();var c=t.crossQuerySelector(aa().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},za=function(a){var b;a=t.findChildWithLargestContent(a||p.contextNode.parentNode);1<t.getNodeArea(a)&&!a[h.IAS_DETECTOR]&&(b=a);return b},Zc=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,
find:function(){return C},isApplicable:function(){return u.embedded},getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},bd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return N.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),
f=/;(\d+);/;e&&e.src&&(b=e.src.match(f)[1]);return"#ftdiv"+b}}},cd=function(){return{isApplicable:function(a,b){var c;try{c=t.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&N.contains(c,"_tpi")&&t.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+t.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},dd=function(){var a,b,c=r.getDoc(),d=function(){var b;a||(a=(b=(b=t.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=t.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&J(h).isOneByOne(),m=function(){var a=r.getDoc().scripts;return f(a).findFirst(function(a,b){return N.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&m&&c&&h&&d()&&e()},getCssSelector:e}},aa=function(){var a,b=l.request("features");a||(a=[dd(),cd(),bd()]);return f(a).findFirst(function(a,d){return d.isApplicable(u,b)})},Yc=function(){var a,b=function(){r.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=ma().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=t.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},ma=function(){var a,b=function(){var b;(b=p.contextNode.parentNode)&&N.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&t.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ca=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){return za(r.getDoc().body)},getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},Vc=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return u.isSpecifiedAd()},find:function(){var b=t.crossQuerySelector(p._cl_adpath);b&&(a=t.getParent(b),1>t.getNodeArea(b)&&(a=b,b=t.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},$c=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:za,getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},Wc=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:u.isVideo,getAdContainer:function(){return p.contextNode.parentNode},allowForAdContainerChange:!0}},Pc=function(a,b){var c,d;c=[ed(),fd(),gd()];
d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=hd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},gd=function(){return{calcDims:function(a,b){var c,d,e=new J(a);t.isClippable(a,b)&&(c=t.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(u.isSpecifiedAd()||u.isBustedIframe())&&t.nodeIsInWindow(a,r.getTop());a=!t.elementIsEmbedded(a);
return b||a}}},fd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(u.isSpecifiedAd()||u.isBustedIframe())&&t.elementIsEmbedded(a)}}},ed=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new J(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(u.isSpecifiedAd()||u.isBustedIframe())&&u.embedded&&!t.nodeIsInWindow(c,r.getTop()),e=u.isCeltra()&&t.elementIsEmbedded(a);return d||e}}},hd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=W();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},Oc=function(a){var b,c,d,e=l.request("features"),k=l.request("browser");a=a||r.getWindow();var s=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,n=e.length;k<n;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=t.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(p){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&s(b.parent,c)}return c},
n=function(){var n,m={};try{var p,y,A,v,B,F,z=r.getMaxNumber(),O=r.getMaxNumber();u.friendly?(p=s(),A=p.left,v=p.top,z=p.width,O=p.height,y=t.browserWindowPosition(),B=y.scrX+A,F=y.scrY+v):e.on("rattie")&&k.browserIs(h.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),B=c.scrX,F=c.scrY):f.isDef(a.mozInnerScreenX)&&(B=r.round(a.mozInnerScreenX),F=r.round(a.mozInnerScreenY));var m={scrX:B,scrY:F,iFrameClippingWidth:z,iFrameClippingHeight:O},I,G,H=b||t.getIeDimObj(a);
b=H;f.isDef(a.innerWidth)?(I=a.innerWidth,G=a.innerHeight):H&&f.isDef(H.clientWidth)?(I=H.clientWidth,G=H.clientHeight,0===I&&0<H.offsetWidth&&(I=H.offsetWidth),0===G&&0<H.offsetHeight&&(G=H.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(I=a.frameElement.clientWidth,G=a.frameElement.clientHeight);n=I;m.height=G;m.width=n}catch(x){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return m};return{calcDims:function(){return new J(n())},getClippedDims:function(){var a=n();return new J({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},mb=function(){return{createInstance:function(a,b,c){return u.isDomless()?new id:new jd(a,b,c)}}},jd=function(a,b,c){var d,e=p&&p.contextNode&&p.contextNode.parentNode?p.contextNode.parentNode:null,k=Tc(b,c),l=function(){var a,b,e;d=d||ad(u,c);a=d.find();!a&&d.usePlaceholder?n():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),
b,e)}))},n=function(){var a;k.hasAd()||(a=t.getPlaceholderSpan(),e.insertBefore(a,p.contextNode.nextSibling),k.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,t.getParent(a)))};Uc(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?l():k.refresh();return k},getDetectionMethod:function(){}}},id=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Ta=function(a){var b,c=[],d=a||C,e=function(){return"stub"===h().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},h=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,C.bootstrapper)}else"object"===typeof a&&(b=a);return b};u.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:h,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Sa=function(a){var b=new kd,c=new ld;try{if(a.bootstrapOn("mobOrTab")||u.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
md={url:{STRINGIFIED_METHOD:"u",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=r.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,
c){return f.isDef(N.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){return t.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},Aa=function(){var a=function(a,c){var d,e=md[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},nd={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},kd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=p.hasOwnProperty("serverSideAppDetection")&&0!==p.serverSideAppDetection.length?!0:Aa().process(nd);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},ld=function(){var a=[],
b=[],c=function(b,c){var f,h=Aa().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),f=c);return f};return{detect:function(){b=f(od).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},od=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],V=function(){var a=
h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},pd=function(){var a,b,c=0,d=-1,e=0,k=l.request("browser"),h=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=r.setInterval(function(){var a=r.now();d=a-e;e=a;c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=t.calcMonDims().height,l=k.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,p=k.getUserAgent(),p=p&&null!==p.match(/(iPad)/)?1:0,u=h()?1:0,v=k.getUserAgent(),v=v&&null!==v.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*
p+0.646972*u+0.28118*v+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:p,mbhs:u,mbbr:v,mblr:d,mbp:e};b&&r.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},yc=function(a,b,c){var d,e,k,s,n,q=[],m=p.contextNode.parentNode,t=0,y=0,A=!1,v=!1,B=new pd,F=function(){var a=q.length-1,b=-1;-1<a&&(b=q[a].piv);return b},z=function(){l.trigger("delayedViewabilityReadyCallOnly")},O=function(a){x.whenReady(function(){e=new ya(qd,a,r.getDoc().body)})},I=function(){e.removePixels()},
G=function(){var a=B.getDebugState(),b=F();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(v);a.mbrd=f.fromBoolToNum(A);a.mbtg=f.isDef(m.tagName)?m.tagName:"na";a.mbaf=f.isDef(k)?k:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var m;m=f.isDef(d);if(c||
!b.adDimensions)return b;m||(k=b.method,d=b.adDimensions,d.isMrcLarge(),O(d));if(f.isUndef(e)||!e.isReadyToMeasure())m=!1;f.isUndef(s)&&m&&(s=B.isLikelyToProduceFalsePositive(d));if(v=!s&&m){var p;m=e.getPercentInView();var M=F(),I=1===b.tabHidden,G=b.adDimensions.isMrcLarge()?30:50;y=r.now()-t;p=0<t?900>y:!0;t=r.now();0===b.adDimensions.area()&&(m=0);p||(m=0);var x=m;q.push({tm:u.getTagTime(),piv:x});3<q.length&&q.shift();0===m&&0<M&&(p&&(p=q.length-1,x=!0,2<=q.length&&-1<p&&(x=0===q[p].piv&&0===
q[p-1].piv),p=!x),p&&(m=M));a?(f.isUndef(n)&&(n=l.request("video")),n.setVideoSpecificScreenEventFields(b),m=b.isVideoPlayingInFullscreen?!0:!I&&m>=G&&b.isVideoPlaying):m=!I&&m>=G;b.viewState=m?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=F();M=[];I=f(b.reason);G=h.OUT_OF_VIEW_REASONS;m||M.push(G.GEOM);I.contains(G.HIDDEN)&&M.push(G.HIDDEN);I.contains(G.OBSTRUCTION)&&M.push(G.OBSTRUCTION);b.reason=M;b.sliceStatus=e.getSliceStatus();A||(A=!0,r.execAtEndOfThread(z))}else b.viewState=h.NA,b.percentInView=
-1;return b},start:function(){l.on("endAdSession",I);c&&r.setTimeout(G,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return v},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},pa=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),n=b.browserIs(h.BROWSERS.WEBKIT),q=9<=b.getIOSVersion(),m=d.isMobileAppEnvironment();return e&&f&&l&&n&&q&&!m},isImmediate:function(){return!1},
start:function(){}}},qd=function(a,b,c,d,e,k){var l,n=p.birthdate+""+r.round(1E6*r.random()),q=101,m,u,t,A=!1,v=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,k=(new Date).getTime(),m=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(m)};a.requestAnimationFrame(m);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-k}}catch(h){b.body.setAttribute("data-err",h.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},B=function(a,b){t||(q=a,t=b)},F=function(){var a,b,c;if(t)return!1;if(u)return!0;try{if(m.contentWindow&&m.contentWindow.document&&m.contentWindow.document.body){c=m.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&B(104);(b=c.isReady?c.isReady():!1)&&(u=c.isInView?c.isInView:void 0)&&B(105)}}catch(d){B(106,d)}return f.isDef(u)},z=function(a,b,c){var k=L.createElement("iframe");k.id=n;f(k.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=k.style;k[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(k);m=k;B(102);a=m;try{var q=a.contentWindow,p=v();q.document.open();
a.contentWindow.document.write(p);q.document.close()}catch(s){B(103,s)}return k}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();F()&&(a=u(!0),c=a.isInView,A=!1,l&&(b=20*l.rate+l.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,A=!0)),B(107),l=a);return c},isNotReadyToReport:function(){return!F()},createdElement:m,remove:function(){z.parentNode&&z.parentNode.removeChild(z)},getStatus:function(){return q},getError:function(){return t},isReadingInvalid:function(){return A},getRate:function(){return m.contentWindow&&
m.contentWindow.document&&m.contentWindow.document.body&&m.contentWindow.document.body.getRate?m.contentWindow.document.body.getRate():-1},percentInView:k}},ya=function(a,b,c){var d,e=b.getRounded(),k=[],h=!1;b=V().getConfig(e);var n=b.percentInViewSliceArray,l=1==b.numberOfSlices,m={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},p=function(){var a;if(!h)for(h=!0,a=0;a<k.length;a++)if(k[a].isNotReadyToReport()){h=!1;break}return h},t=function(a){var b=[],c=0;r.floor(a.height/n.length);var d=
r.floor(a.width/2-1);f(n).each(function(e,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},A=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},v=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));
return!b.isInView});return c},B=function(){var a,b,c,d=[];m.mbs=[];f(k).each(function(b,c){a=c.isInView();m.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=v(d,!1);c=v(d,!0);return r.max(b,c)};(function(){d=l?A(e):t(e);var b=d.get();f(b).each(function(b,d){var e=new a(c,d.x,d.y,d.width,d.height,d.percentInView);k.push(e)})})();return{getPercentInView:function(){var a=p(),b=B();m.mbrd=a?1:0;b!=m.mbp&&m.mbivs.push([u.getTagTime(),b]);m.mbp=b;return a?b:-1},removePixels:function(){f(k).each(function(a,
b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){m.mbm=1;k&&0<k.length&&(m.mbpr=[],m.mbir=[],f(k).each(function(a,b){m.mbpr.push(b.getRate());m.mbir.push(b.isReadingInvalid()?1:0)}));return m},isReadyToMeasure:p,getSliceStatus:function(){var a;k&&0<k.length&&(a=[],f(k).each(function(b,c){a.push(c.isInView())}));return a}}},Rc=function(a){var b=V();return{getSliceStatus:function(c,d,e,f){var h,n=[];h=c.getRounded();c=h.height;var l=h.scrY,m=new J({scrX:h.scrX,width:h.width}),p=b.getConfig(h).numberOfSlices;
m.set("height",r.floor(c/p));for(var u=0;u<p;u++)m.set("scrY",r.ceil(l+c/p*u)),h=100===a.calcPercentInView(m,d,e,f),n.push(h);return n}}},Qc=function(a,b,c,d,e){var k=p.birthdate+""+r.round(1E6*r.random()),l=101,n,q,m,u=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{var c;b.body.setAttribute("data-st","iasInit");var d;(new Date).getTime();b.body.isInView=function(a){return{isInView:d,lastUpdateTimestamp:0}};b.body.getPiv=function(){return c};b.body.isReady=
function(){return void 0!==c};(function(){var e=b.createElement("DIV");b.body.style.width="100%";b.body.style.height="100%";b.body.style.margin="0px";e.style.position="absolute";e.style.width="100%";e.style.opacity="0";e.style.height="100%";e.style.zIndex=-999;e.style.top="0px";e.style.left="0px";b.body.appendChild(e);(new a.IntersectionObserver(function(a){a=a.pop();a=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(a)&&(a=0);c=
a;d=0<c},{threshold:[0,1]})).observe(e)})()}catch(e){b.body.setAttribute("data-err",e.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},t=function(a,b){m||(l=a,m=b)},A=function(){var a,b,c;if(m)return!1;if(q)return!0;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.body){c=n.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&t(104);(b=c.isReady?c.isReady():
!1)&&(q=c.isInView?c.isInView:void 0)&&t(105)}}catch(d){t(106,d)}return f.isDef(q)};(function(a,b,c){var m=L.createElement("iframe");m.id=k;f(m.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=m.style;m[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(m);n=m;t(102);a=n;try{var q=a.contentWindow,p=u();q.document.open();a.contentWindow.document.write(p);q.document.close()}catch(s){t(103,s)}return m})(a,
b,c);return{isInView:function(){var a;a=!1;A()&&(a=q(!0),a=a.isInView,t(107));return a},isNotReadyToReport:function(){return!A()},createdElement:n,remove:function(){n.parentNode&&n.parentNode.removeChild(n)},getStatus:function(){return l},getError:function(){return m},isReadingInvalid:function(){return!1},getRate:function(){return h.NA}}},rd=function(){return{decorateContextParams:function(a,b){try{var c=l.request("adNode"),d;if(d="adImpression"===a)d=l.request("adNode").hasAttribute("data-ias-autoplay");
d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(e){l.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},sd=function(){return{listenForResult:function(){l.on("videoBlockResult",function(a){var b=l.request("adNode"),c=!1,d="blockAd"+p.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},td=function(a,b){var c,d,e,k,h,n=l.request("videoTranslator"),q=l.request("videoAutoplay");e=n.translate(a.messageType);k=function(a){a=
a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);q.decorateContextParams(e,k);d={t:a.time-p.birthdate,tp:e,sl:b};f(d).mixin(k);f(d).mixin(h);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},
indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===k.viewMode||k.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===k.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(e)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.persistentTrigger(e,k,h):l.trigger(e,k,h)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},ud=
function(){var a=[];return{registerEvent:function(b,c){var d=new td(b,c);a.push(d);return d},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"}}},vd=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},p=function(a){a=(new Ba).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){l.on({adVideoStart:k,adImpression:k,volumeChanged:p,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},wd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ba=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?
c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},jb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,s,n,q,m=[],t=h.OUT_OF_VIEW,y=!1,A=!1,v=!1,B=!0,F=new ud,z=vd(),C=new sd,D=function(b){y=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=F.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(A=!0,t=v?h.IN_VIEW:!1):d.indicatesNotPlaying()?(A=!1,t=h.OUT_OF_VIEW):d.indicatesFullscreen()?(v=!0,t=A?h.IN_VIEW:h.OUT_OF_VIEW):
d.indicatesNormalSize()&&(v=!1,t=A?!1:h.OUT_OF_VIEW));b=d;m.push(b);q&&J();return b},G=function(b){var c,k,h=ga().wrapToGlobal(D),m=function(a){f.isStr(a)&&(l.provide("vc",function(){return a}),l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{k=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(k)&&"2"===k.call(b)?unescape(b[d].call(b,a,h)):unescape(b[d].call(b,a)),y=!0,m(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",n,p)}},H=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,
b){return f.isFunction(b[d])})};k||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return k=c(d)}),!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},p));return k},E=function(){var a=H();a&&!y&&G(a);return a},K=function(a){a=(new Ba).getVolumeFromContext(a);B=f.isDef(a)?0<a:!1},J=function(){f(m).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});
m=[];q=!0};(function(){x.addEvent(r.getWindow(),"message",function(a){D(a)});l.on({volumeChanged:K});l.provide({videoEventsString:F,videoVersion:function(){var a,b=E();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return s=s||new wd},videoAutoplay:function(){return n=n||new rd},adNode:E});E();C.listenForResult();z.isApplicable(u)&&z.start(c)})();return{findAdNode:E,getViewStateOverride:function(){return t},isHandshakeComplete:function(){return y},
triggerInitializationEvents:J,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=B;a.isVideoPlayingInFullscreen=!1;if(t){if(t===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:t;a.isVideoPlaying=t===h.IN_VIEW}v&&A&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},xd=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,
b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},yb=function(){var a,b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},k=function(k,h,m,l){k=c[k];l?(f.isDef(k[h])||(k[h]=[]),k[h].push(m)):k[h]=m;b&&b.isActive()||(b=new la,d=0,e(!0),b.start());a=!0},p=function(b){f(c).each(function(d,e){var k=c[d],h={type:b,oneTime:!0,minDt:!0,asION:!0};f(k).isEmpty()||(l.trigger("addOutputItem",{output:k},d,h),
c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){p(a);b&&b.kill()});l.on("addThrottledProp",k)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Eb=function(){var a={},b=function(b){a[b]||(a[b]=new ka(1,p.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},yd=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,
function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},kb=function(a){var b={},c=a instanceof Array&&a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),l.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},
da=function(a,b,c){var d=0,e=[],k=function(){var a,c={};e.sort(b);f(e).each(function(b,e){a&&(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){e.push(a)},toString:function(){return f(k()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return e.length===c}}},lb=function(){function a(){}a.build=function(){var a=[],c=l.request("vc"),d={jv3:Ca,av3:Ca,jvw:yd,avw:xd};c&&d[c]&&a.push(d[c]());return a};return a}(),Ca=function(){return new da(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
function(a,b){return a.code-b.code},h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(C,"load",function(){l.trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new la;a.onTick({4:function(){l.trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});
a.start()}};P("postMessageDetector",[],function(){var a=!1,b="pmdetector"+p.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=r.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");r.execAtEndOfThread(function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});P("safeFrameDetector",[],function(){l.trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"sf",f.stringifyTriState(u.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var wb=function(){var a=p.asid,b=p.cookieBaseURL,c=p.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=function(){var e;e=new T(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&
a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},xb=function(a,b,c,d,e,f,s){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(q){try{var m=d.baseUrl,r,t,u=f.getDocumentMode();"number"===typeof u?(t=2E3,8===u?t=4E3:8<u&&(t=8E3)):t=n(p.sp_imp_maxLength,2E3);r=t;t=m;var v=m.length,x,C,z=n(p.sp_imp_jsInfo_minLength,0),u="";try{x=r-v-z,0<x&&(C=zd(q,x,14,b.on("partialUrls")),u+=C.join("&"))}catch(D){a.add(h.ERROR_CODES.IMPRESSION_URLS)}m=t+u;q=m+="&"===m.slice(-1)?"":"&";
var E,v="";try{E=r-m.length,v+=Ad(E,"adsafe_jsinfo=",a,b,c,e,f,s)}catch(G){a.add(h.ERROR_CODES.JSINFO),v+="adsafe_jsinfo=e:"+a.toString()}m=q+v;d.macroUrl&&(m+="&"===m.slice(-1)?"":"&",m+=d.macroUrl);d.sendImpression(m);l.trigger("impressionsent")}catch(H){__IntegralASDiagnosticCall("impsend",H,p)}}}},Ad=function(a,b,c,d,e,k,l,n){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,
c){h.length+c.length+5<=a?h+=l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:h.NA};u.isDomless()?b=n.checkScreenLoc(!0)||a:d.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):f.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var t=a.viewState;b=e.getAvidIds();t=["id:"+p.asid,"c:"+e.getCacheBustId(),"sl:"+t,"em:"+u.embedded,"fr:"+u.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(t.push("abi:"+
b.bundleIdentifier),t.push("apn:"+b.partner),t.push("apv:"+b.partnerVersion));a=Bd(a,c,d,e,k,l,n);return{primary:t,secondary:a}}())},Bd=function(a,b,c,d,e,k,l){var n=[];n.push("mn:"+p.mn);n.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());n.push(f(k.params()).toParams());c.on("mrcAudit")&&!u.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===h.IMPRESSION_EVENT;
(c||d)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("uf:0");n.push("tt:"+p.mode);n.push("et:"+(r.now()-p.birthdate));c.on("swapids")?n.push("oid:"+p.oid):n.push("uid:"+d.unq);n.push("v:17.4.96");n.push("sp:"+(p.isSplitMode?1:0));n.push("ct:"+u.getPageTime());n.push("dtm:"+(c.on("postDts")&&x.getXHR2()?"p":"i"));n.push("gtpl:"+("true"===p.getTpl?1:0));c.on("resolution")&&(n.push("wr:"+f(t.windowSize()).toArray().join(".")),n.push("sr:"+f(t.screenSize()).toArray().join(".")));
p.mainScriptTime&&n.push("mst:"+(p.mainScriptTime-p.birthdate));return n},zd=function(a,b,c,d){var e,h=[],l=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(e=f(a).map(function(a,b){if(l(b))return b}),a=f(a).map(function(a,b){if(!l(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var l=e.key,p;p=24+h.join("&").length+l.length+c;p=b-p;d&&p<f.length&&0<p&&(f=f.substr(0,p));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+l,l=h.join("&").length,
f.length+l<=b&&h.push(f)}));return h},ub=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=Cd(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},Fd=function(a,b){return{start:function(){try{var c=Dd(),d=c.getMethodName(a),e=new T(b.getEnabledScriptUrl(a)),
f=Ed,p=r.getDoc();(new f(p.body||p.head||p.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(n){l.trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},Dd=function(){var a=function(a,c,d){a===p.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:p.asid,constant:h,features:b,context:u,dtBaseURL:p.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Db=function(){return{start:function(a,b){f(a).each(function(a,
d){b.getEnabledScriptUrl(d)&&Fd(d,b).start()})}}},Cd=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,""),e=N.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Ed=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=t.createHiddenIframe();c.setAttribute("src","about:blank");(a||p.contextNode.parentNode).appendChild(c);
f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Da()}catch(Gd){__IntegralASDiagnosticCall("main",Gd,
p)}};try{(function(){var p=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,p,p.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
