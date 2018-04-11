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
		version:'17.4.88',
		mtCell: 10,
		mtSample: 5,
		trackMouse : "true",
		exchList:{'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain:'cdn.adsafeprotected.com',
		sp_cdnScripts:{xsca: "static.adsafeprotected.com/xsca.17.4.47.js", sca: "static.adsafeprotected.com/sca.17.4.72.js", main: "static.adsafeprotected.com/main.17.4.88.js"},
		protocol:'https',
		jsref : "",
		asid : "42809d66-3db5-11e8-b1a9-00259087612a",
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
		mn: "app25",
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

__IntegralASConfig.initialize=function(r,C,J){function Ea(){var h;P.startSystem();m=P.getAggregator();m.provide({omidAdSessionContext:{}});h=__IASOmidVerificationClient;m.provide({omidVerificationClient:h});h=[{environment:new fa(h),adSessionReadyStrategy:new Fa(ga,h)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){ga()}}}];(new Ga(h)).resolve().adSessionReadyStrategy.start()}function ga(){var h,a=U.instantiateModules();U.killRequest(a.mErrors)||(h=U.preImpression(a.mDataTransfer,
a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t),U.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,h,a.mVideo),U.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t))}var m,U=function(){function h(a){var c=new Ha(a,t),d=new Ia,f=new Ja(a,t),g=Ka(a,t),q=(new La(r,t,a)).resolve(),l=[c],n=[];
g.applies()&&l.push(g);f.applies()&&l.push(f);d.applies(a,t)&&l.push(d);e(q).each(function(a,b){l.push(new Ma(b,t));n.push(b.id)});0<n.length&&m.trigger("addOutputItem",{output:n},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0});return l}function a(a,c,d,f,g,q){s.execAtEndOfThread(function(){var l;try{l={output:(new Date).getTime()-g},a.addItem(l,"sinceFw",{type:k.DT_CODES.ADTALK}),e.isDef(c.loopStarted())&&a.addItem({output:c.loopStarted()},"readyFired",{type:k.DT_CODES.ADTALK}),d.isApplicable(t)&&
d.sendAdTalkCall()}catch(q){f.add(k.ERROR_CODES.ADTALK_DELAY)}})}return{startViewabilityMeasurementStrategies:function(a,c,d,f){var g=h(a);return e(g).map(function(q,l){var g;g=new Na(l,c);var p=(new Oa(d,a,l.rts)).getCallbacks(),p=new Pa(f.createPingJobs(l.type,l.timeInViewThresholds,p,l.metricId));g=l.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Qa(g,l.minUnit,p,t.isVideo()):new Ra(g,new Z(l.minUnit),p);g.start();return g})},killRequest:function(a){var c=!1,d,f;try{e.isDef(r)&&
e.isDef(r.killPhrases)&&""!==r.killPhrases&&(d=r.adsafeSrc?r.adsafeSrc:r.requrl+r.reqquery,f=r.killPhrases.split(","),e(f).each(function(a,b){b=decodeURIComponent(f[a]).replace(/^\s+|\s+$/g,"");-1!==d.search(b)&&(c=!0)})),r.doNothing&&(c=!0)}catch(g){a.add(k.ERROR_CODES.KILL_IT)}return c},instantiateModules:function(){var a,c,d,f,g,q,l,n,p,h,e={};m=P.getAggregator();e.mFeatures=m.provide("features",Sa());m.provide("mobileApp",function(){return a=a||new Ta(e.mFeatures)});m.provide("avidJsClient",function(){return c=
c||new Ua(s.getWindow())});m.provide("context",t);e.mBrowser=m.provide("browser",(new Va).createInstance());e.mErrors=Wa();e.mIds=m.provide("ids",Xa());e.iOutput=new Ya(m);d=ha();e.mComm=(new Za).createInstance(e.mErrors,d);e.viewabilityMeasurement=(new $a(new ab(e.mIds),e.mFeatures,e.mBrowser)).create();e.mFeatures.on("swapids")&&(r.oid=r.asid,r.asid=e.mIds.unq);e.mAdTalk=(new bb).createInstance(e.mFeatures);f=cb();d=db(m);g=m.provide("mPage",(new eb).createInstance());e.mAncestorOrigins=fb();e.mPageUrls=
m.provide("pageUrls",(new gb).createInstance(e.mAncestorOrigins,s));q=hb();m.provide("ieXDomainViewability",ib(e.mBrowser));l=jb(e.mBrowser);e.mVideo=m.provide("video",!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?{}:kb(r.videoId,e.mFeatures,q));lb(mb.build());n=(new nb).createInstance(e.mErrors,l,e.mFeatures);p=(new ob).createInstance(n,e.mErrors,g,t);h=m.provide("jobFactory",pb(d));e.mDataTransfer=qb(n,e.mErrors,e.mFeatures,e.mIds,e.iOutput,e.mBrowser,q,f);f=rb(e.mErrors,e.mFeatures,
m,d);e.mMode=sb(f,e.mFeatures,e.viewabilityMeasurement.isImmediate());e.mViewability=m.provide("viewability",tb(new D,e.viewabilityMeasurement,e.mBrowser,e.mDataTransfer,e.mErrors,e.mFeatures,l,m,e.mIds,e.iOutput,h,g,p,q,e.mVideo));U.startViewabilityMeasurementStrategies(e.mFeatures,e.mViewability,d,h);e.loopDelay=ia();e.mDataTransfer.setViewabilityMod(e.mViewability);return e},preImpression:function(a,c,d,f,g,q,l,n,h,e){var x,E,w,z,B;if(d.isApplicable(e))try{d.start(),f.addItem(d.getFrameMap(),"fm"),
h.on("fm2")&&f.addItem(d.getFrameMapIncludingPeerCase(),"fm2"),h.on("idMap")&&(x=d.getIdMap())&&f.addItem(x,"idMap")}catch(A){g.add(k.ERROR_CODES.ADTALK_GENERAL)}q.isApplicable(l,h,e)&&q.start();try{B=n.detectTopURL(),h.on("exch")&&(E=(new ub).createInstance(g,f),E.parse(B)),w=vb(),w.isApplicable(h)&&w.start(h),e.usesGroupMCustomMetric()&&wb(),z=xb(),z.isApplicable(h)&&(z.start(),m.trigger("sendCookie"))}catch(s){g.add(k.ERROR_CODES.IMPRESSION_LEADUP)}return B},sendImpression:function(a,c,d,f,g,q,
l,n,h){try{yb(a,c,d,f,g,q,l).send(n),e.isFunction(h.triggerInitializationEvents)&&h.triggerInitializationEvents()}catch(v){__IntegralASDiagnosticCall("impsend",v,r)}},postImpression:function(b,c,d,f,g,q,l,n,h,e,x,E,w){var m;try{var B=zb();B.start();B.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FRAUD,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FRAUDEXP]);var A=Ab(b,c,d);A.isApplicable(f)&&A.start();f.bootstrapOn("getTpl")&&f.on("usetpl")&&Bb(g,q,l,c,n).init();r.tpiLookupURL&&Cb(g,q).init(r.tpiLookupURL);Db();"true"!==
r.minimizeCalls&&(m=(new Date).getTime(),s.execAtEndOfThread(function(){a(n,h,e,l,m,f)}));x&&x.start&&x.start();w.isDomless()||(Eb().start(["sca","xsca"],f),E.isStarted()&&E.sendOriginList());P.runAll();var N=Fb();N.isApplicable(f)&&(N.start(),R.recordBlockingTime(),R.setupOnLoadTracking(),R.setupBrowserDelayTracking())}catch(H){l.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),e=function(h){return new I(h)},I=function(h){this.iterable=h};I.prototype.isObj=function(h){var a=null===this.iterable,a="object"===
typeof this.iterable&&!a,b=!this.isArray()&&a;return h?a:b};I.prototype.isArray=function(){return this.iterable instanceof Array};I.prototype.isEmpty=function(h){return 0===this.keys(h).length};I.prototype.each=function(h,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)h(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&h(c,b[c])};I.prototype.map=function(h,a){var b=[];this.each(function(c,d){var f=h(c,d);if(void 0!==f||a)b[b.length]=f});return b};I.prototype.stringify=
function(h,a){a=a||",";var b=[];this.each(function(a,d){var f=h(a,d);e.isDef(f)&&b.push(f)});return b.join(a)};I.prototype.toION=function(h,a){var b,c="[",d="]";a=a||0;h=h||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return e(c).toION(h,a)}):(c="{",d="}",b=this.map(function(b,c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),l=e(c).toION(h,a);return d?l:(h[b]||b)+":"+l}));return c+b.join(",")+
d};I.prototype.compareTo=function(h){var a=!1;this.each(function(b,c){h[b]!==c&&(a||(a={}),a[b]=c)});return a};I.prototype.toParams=function(h){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},h)};I.prototype._privateMixin=function(h,a,b){for(var c in a)e.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(h[c]=a[c]);return h};I.prototype.mapToObj=function(h){var a={},b=this;this.each(function(c,d){var f=h(c,d);e(f).isObj()&&b._privateMixin(a,f)});return a};I.prototype.invert=
function(){return this.mapToObj(function(h,a){var b={};b[a]=h;return b})};I.prototype.mixin=function(h,a){return this._privateMixin(this.iterable,h,a)};I.prototype.find=function(h){var a;this.each(function(b,c){h(b,c)&&(a=c)});return a};I.prototype.findFirst=function(h){var a,b;this.each(function(c,d){!b&&h(c,d)&&(a=d,b=!0)});return a};I.prototype.keys=function(h){var a=[];this.each(function(b){a.push(b)},h);return a};I.prototype.asStrings=function(){var h={};this.each(function(a,b){h[a]=""+b});return h};
I.prototype.selectProperties=function(h){var a={},b=this;e(h).each(function(c,d){e.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};I.prototype.filter=function(h,a){return this.map(function(a,c){var d;if(e.isUndef(h)||e.resolve(h,a,c))d=c;return d},a)};I.prototype.toArray=function(){return this.map(function(h,a){return a})};I.prototype.JSONStringify=function(){var h,a,b=!1;C.Prototype&&C.Prototype.Version&&-1===C.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);
h=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return h};I.prototype.contains=function(h){var a=e(this.iterable).findFirst(function(a,c){return h===c});return e.isDef(a)};e.toBase=function(h,a){var b,c=0>h,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];h=c?-h:h;do b=h%a,f.push(d[b]),h=(h-b)/a;while(0<h);f=f.reverse().join("");return c?"-"+f:f};e.isDef=function(h){return"undefined"!==typeof h};e.isUndef=function(h){return!e.isDef(h)};e.isBool=function(h){return"boolean"===
typeof h};e.noop=function(){};e.identity=function(h){return h};e.isFunction=function(h){return"function"===typeof h};e.isStr=function(h){return"string"===typeof h};e.useIfDef=function(h){return e.isDef(h)?h:!1};e.stringifyTriState=function(h){return!0===h?1:!1===h?0:"na"};e.getNum=function(h){h=parseInt(h);isFinite(h)||(h=-1);return h};e.resolve=function(h){var a=e(arguments).toArray();a.shift();return e.isFunction(h)?h.apply({},a):h};e.flatJSONParse=function(h){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,
f={};for(c=d.exec(h);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=d.exec(h);return f};e.debounce=function(h,a,b){var c,d=b||C;return function(){var b=this,g=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;h.apply(b,g)},a)}};e.last=function(h){return h[h.length-1]};e.collapseArgsIntoHash=function(h,a){var b={};a?b[h]=a:b=h;return b};e.fromBoolToNum=function(h){return h?1:0};e.isNumeric=function(h){return e.isDef(h)&&null!==h&&!isNaN(h)};var P=function(){var h,a={},b=[],c=[],d=function(){var a=
{},b=e(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,d,f,n,p){p=p||{};var v,k,E=function(a){0===b.length&&(b=e(a).map(function(a,b){return h.request(b)}))},w=function(){if(!v){var a=[];v=!0;E(["features","browser","context"]);p.emits&&(c.events=new D);if(!p.applies||p.applies.apply(p,b))k=!0,a=e(f).map(function(a,b){return h.request(b)},!0),a.push(c),e(c).mixin(n.apply({},a))}};(function(){var b=p.tier;e.isDef(b)&&(a[b]=a[b]||new $,a[b].push(w))})();h.provide(d,function(){var a;
w();k&&(a=c);return a});return c};d.runAll=function(){var b=e(a).keys().sort(function(a,b){return a-b});e(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){h=h||new ja;e(c).each(function(a,b){f.apply({},b)})};d.getAggregator=function(){return h};return d}(),k={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",
NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",
BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",
GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",
NO_ORIGINAL_VAST:"q",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",
VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8,FRAUD:9},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},
X=function(){return{applies:function(h,a,b){b=m.request("mobileApp");return(h.browserIs(k.BROWSERS.CHROME)||h.isAndroidWebViewBrowser()||h.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&h.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},wb=function(){var h,a,b=!1,c=m.request("mPage"),d=function(){!b&&a&&h&&!c.isHidden()&&(b=!0,m.trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};m.on("primaryadfound",function(a){h=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});m.on("impressionsent",function(){a=
!0;d()});c.onHiddenChange(d)},cb=function(){var h=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};m.on("newScreenEvent",function(c){c=e(c).selectProperties(e(b).keys());c=e(c).asStrings();var d=e(c).compareTo(a);d&&(d.t=t.getTagTime(),h.push(d));e(a).mixin(c)});return{toString:function(){return e(h).toION(b)}}},Gb=function(h,a,b,c,d,f,g){var q;(function(){var f=b.getRounded(),n=f.width-5,e=f.height-5,v=0.5*f.width+1,f=0.5*f.height+1;q=[new h(a,n,e,d,g,c),new h(a,n,5,d,g,c),
new h(a,5,e,d,g,c),new h(a,5,5,d,g,c),new h(a,v,f,d,g,c)]})();return{getNumInView:function(){var a=[],b=0;e(q).each(function(b,c){var d=c.isInView()?1:0;a.push(d)});f.addItem({output:a.join(".")},"pvs");e(a).each(function(a,c){b+=c});return b},getPctInView:function(a){return 5===a?100:3<=a?51:0},isReady:function(){var a=!0;e(q).each(function(b,c){c.isNotReadyToReport()&&(a=!1)});return a},remove:function(){e(q).each(function(a,b){try{b.remove()}catch(c){}})}}},Hb=function(h,a,b,c,d,f,g,q){var l=new h(ka,
J.body,a,c,d,g,q),n,p,v=0;b=b||e.noop;n=s.setInterval(function(){l.isReady()&&!p?(p=!0,b(),s.clearInterval(n)):(5===++v||p)&&s.clearInterval(n)},50);return{checkViewable:function(){var a=l.isReady(),c=l.getNumInView(),c=l.getPctInView(c),d=f.calcInitialViewState(c);a&&!p&&(p=!0,b());return{str:a?d:k.NA,pct:a?c:-1}},removePixels:function(){l.remove()}}},Kb=function(h,a,b,c,d,f,g){var q,l,n=a.getRounded(),p=[],v=!1,x=0,m=49>a.area(),w=(c.on("largeAd")&&a.isMrcLarge()&&!t.isVideo()||g)&&!m?Ib(n):Jb(n,
m),z=function(){var a;if(!v)for(v=!0,a=0;a<p.length;a++)if(p[a].isNotReadyToReport()){v=!1;break}return v},B=function(){var a=0;e(p).each(function(b,c){c.isInView()&&(a+=1)});return w.getPctInView(a)};(function(){var a=w.get();e(a).each(function(a,b){var l=new h(J.body,b.x,b.y,c,d,f);l.weight=b.weight;p.push(l)})})();b=b||e.noop;q=s.setInterval(function(){z()&&!l?(l=!0,b(),s.clearInterval(q)):(5===++x||l)&&s.clearInterval(q)},50);return{checkViewable:function(){var d=z(),f;d&&(f=c.on("largeAd")&&
a.isMrcLarge()?30:50,f=B()>=f?k.IN_VIEW:k.OUT_OF_VIEW);d&&!l&&(l=!0,b());return{str:d?f:k.NA,pct:d?B():-1}},removePixels:function(){e(p).each(function(a,b){try{b.remove()}catch(c){}})},getPercentInView:B}},ja=function(){var h=new Lb,a=new D;return e(h).mixin(a)},D=function(){var h={},a={},b=function(a,b,c){h[a]=h[a]||new $;h[a].push(b,c)},c=function(a,c){b(a,c,1)},d=function(b,c,d){var l=a[b],n=!1;l&&(d&&1<l.length&&(l=l.slice(-1)),e(l).each(function(a,b){c&&c.apply({},b)}),a[b]=void 0,n=!0);return n};
return{on:function(a,c){c?b(a,c):e(a).each(b)},once:c,trigger:function(b){var c,d=e(arguments).toArray();d.shift();c=b;a[c]=a[c]||[];a[c].push(d);(c=h[b])&&c.run.apply({},d)},everOnce:function(a,b){return d(a,b,!0)?!0:(c(a,b),!1)}}},Mb=function(h,a,b,c){var d=m.request("browser");if(m.request("features").bootstrapOn("killFlash"))return{style:{},isPlaceholder:!0};var f=function(a,b){return'<param name="'+a+'" value="'+b+'"/>'};return function(){var g,q,l,n=r.dtBaseURL,e=r.cocaPuffsPath,n=new S(n);
n.sub(a||"static");n.master(n.master().split(":")[0]);n.path("");e&&(n.master(e),n.sub(""));n+=h;e=f("allowscriptaccess","always");g=f("movie",n)+f("play","true")+f("loop","true");l=d.browserIs(k.BROWSERS.IE)||d.browserIs(k.BROWSERS.MSEDGE);q=d.browserIs(k.BROWSERS.IE);l&&(l=c?"window":"transparent",g+=f("wmode",l));b&&(e+=f("FlashVars",b));q?(q=J.createElement("div"),l="blag"+r.birthdate+s.random(),q.innerHTML="<object "+('id="'+l+'" ')+'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '+('type="'+
k.FLASH_MIME+'" ')+('data="'+n+'" ')+">"+g+e+"</object>",g=q.firstChild):(g=J.createElement("object"),g.data=n,g.type=k.FLASH_MIME,g.innerHTML=e);n=g;n.style.position="absolute";n.style.width="1px";n.style.opacity="0";n.style.height="0px";return g}()},ka=function(h,a,b,c,d,f,g,q){var l=f.browserIs(k.BROWSERS.IE)||f.browserIs(k.BROWSERS.MSEDGE),n="_IASflashPixelCallback"+(r.birthdate+""+s.round(1E6*s.random())),p=!1,v=!1,x,E,w,z,B=function(){if(x&&e.isFunction(x.jsHandshake)&&!p){x.style.height="1px"===
x.style.height?"2px":"1px";try{x.confirmResize()}catch(a){p=!0,m.trigger("error",k.ERROR_CODES.FLASH_API_ACCESS)}}},A=function(){if(p)return!1;var a,b;try{(a=z||x&&e.isFunction(x.jsHandshake))&&!v&&(z=!0,C[n]=N,b=x.jsHandshake(n),v=!0,N(b))}catch(c){a=!1,p=!0,m.trigger("error",k.ERROR_CODES.FLASH_API_ACCESS)}return a},N=function(a){try{if(e.isUndef(a.isInView))throw"corrupted Flash pixel message received";w=1===+a.isInView}catch(b){m.trigger("error",k.ERROR_CODES.FLASH_API_ACCESS)}},t=function(a,
b,c){var d=new Mb(l?"/detector_4_5_IE.pix":"/detector_4_5.pix"),f=d.style;d[k.IAS_DETECTOR]="true";f.left=b+"px";f.top=c+"px";d.isPlaceholder||a.appendChild(d);f.height="1px";x=d;l&&!d.isPlaceholder&&s.setInterval(B,100);return d}(h,a,b);return{isInView:function(){var a;if(A()){try{a=w}catch(b){z=!1,m.trigger("error",k.ERROR_CODES.COCOA_GONE)}f.browserIs("w")&&void 0!==a&&(x.style.height=E?"1px":"2px",E=!E)}return A()&&a},isNotReadyToReport:function(){return!A()},createdFlash:x,remove:function(){t.parentNode&&
t.parentNode.removeChild(t)}}},aa=function(){var h=function(a,c,d){var f,g=c.length,q=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);d&&d(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(f=q[a])&&u.isWindow(f)&&(c[g]=a,h(f,c,d));c.pop()}},a=function(a,c){try{h(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return e(d).filter(b)}}},$=function(){var h=[];return{push:function(a,
b){var c=0;b=b||Number.MAX_VALUE;h[h.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;e(h).each(function(b,c){c.apply({},a)})}}},Pa=function(h){return{doEligibleJobs:function(a){var b=h[0],c=b&&b.time;e.isDef(c)&&a>=c&&(b.task(),h.shift())},getNextJob:function(){return h[0]}}},Nb=function(){var h,a=new la,b=function(b,d,f,g){var q,l,n,h;if(JSON&&JSON.parse)try{q=JSON.parse(b.data),l=b.source,h=e.noop,d(q)&&(g&&(n=g(l,q))&&(h=function(){a.send(function(){return n},
l)}),f(b,q,h))}catch(v){q&&m.trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,f){h=function(g){b(g,a,d,f)};y.addEvent(C,"message",h)},stop:function(){h&&y.removeEvent(C,"message",h);h=null}}},la=function(){var h=function(a){return e(a).isObj()?[a]:(new aa).getFrames(a)},a=function(a){return e(a).mapToObj(function(a,b){var f;e.isFunction(b)||(f={},f[a]=b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=h(c);e(d).each(function(c,d){var q;q=e.resolve(b,
d)||{};q.sentTime=s.now();q=a(q);d.postMessage(e(q).JSONStringify(),"*")})}}}},Ob=function(h,a){return{onAll:function(b){var c={};e(a).each(function(d,f){h.on(f,function(){c[f]=1;e(c).keys().length===a.length&&(c={},b())})})}}},Ya=function(h){var a=0,b={},c=function(b,c,d){if(e.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=e.resolve(b.output);this.props.asION&&(a=e(a).toION());return a}},d=function(a){var c,
d,f=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&f.push(d);return f},f=function(a,d,f){f=f||d;f="string"!==typeof f?f:{};var n=function(a,d,f){a=new c(a,d,f);b[a.id]=a};e(a.output).isObj()&&!f.asION?e(a.output).each(function(a,b){n({output:b},a,f)}):n(a,d,f)};h.on("addOutputItem",function(a,b,c){f(a,b,c)});return{addItem:f,filterOutput:function(a,b){return d(function(c,d){var f=d.props,h;a(f)&&(h=d.output(),f.encode&&(c=encodeURIComponent(c),h=encodeURIComponent(h)),e.isFunction(b)?b(c,h):b[c]=
h)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Ib=function(h){var a=h.width-5,b=h.height-5,c=0.5*h.width+1,d=0.5*h.height+1,f=0.3*h.width+1,g=0.7*h.width+1,q=0.3*h.height+1,l=0.7*h.height+2,n,e=function(a,b){1>a&&(a=1);1>b&&(b=1);a>h.width&&(a=0!==h.width?h.width:1);b>h.height&&(b=0!==h.height?h.height:1);return{x:s.floor(a),y:s.floor(b)}};n=[e(a,b),e(a,5),e(5,b),e(5,5),e(c,d),e(f,q),e(g,q),e(f,l),e(g,l)];return{get:function(){return n},
getPctInView:function(a){var b;0===a?b=0:1===a?b=10:2===a?b=20:5>a?b=30:7>a?b=50:9>a?b=70:9===a&&(b=100);return b}}},Jb=function(e,a){var b=0.5*e.width+1,c;c=[{y:s.floor(0.5*e.height+1),x:s.floor(b)}];return{get:function(){return c},getPctInView:function(a){return 1===a?50:0}}},Lb=function(){var h={},a=function(a,c){h[a]=c};return{request:function(a){var c,d=h[a],f=e(arguments).toArray();f.shift();e.isUndef(d)||(c=e.isFunction(d)?d.apply({},f):d);return c},provide:function(b,c){c?h[b]=c:e(b).each(a);
return c}}},ob=function(){return{createInstance:function(e,a,b,c){return t.isDomless()?new Pb:new Qb(e,a,b,c)}}},Qb=function(h,a,b,c){var d;return{collect:function(){var a=h.find(),g=a.getOutOfViewReasons(),q=b.isHidden(),l=c.isDeviceTypeGroupMobile()&&d?d:K(u.calcWinDims()),n=a.getDims();d=l;if(!a.hasAd()||!l.hasValidDims()||!n.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:t.embedded,winDimensions:l,adDimensions:n};!0===q&&g.push(k.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:l,
adDimensions:n,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:g.length?k.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:g.join("."),obstructed:e.stringifyTriState(a.isObstructed()),isHidden:e.stringifyTriState(a.isHidden()),tabHidden:e.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Pb=function(){return{collect:function(){return{}}}},Rb=function(h){h=h||e.identity;var a=
[],b=s.now(),c=function(){var c=s.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=h(b);c();0!==a.length&&b===f.state||a.push({state:b,duration:0})}}},ma=function(e,a){var b=e||1,c=0,d=0,f,g=0;return{start:function(){0===c%b&&(f=s.now())},stop:function(){var q=f||a;0===c%b&&(g+=s.now()-q,d++);c++},getTime:function(){return g},
getCount:function(){return d}}},na=function(){var h,a=0,b=0,c=new D(!0),d=function(){h&&(a++,c.trigger(a),b>a?s.execAtEndOfThread(d):f())},f=function(){h=!1;a=0};return{onTick:function(a,d){var f=e.collapseArgsIntoHash(a,d);e(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},start:function(){h||(h=!0,s.execAtEndOfThread(d))},kill:f,isActive:function(){return h}}},Sb=function(e,a){var b,c=a,d=function(a){b||(a&&e(),b=s.setInterval(e,c))},f=function(a){a&&e();s.clearInterval(b);b=null};return{start:d,
stop:f,updateFrequency:function(a,b){c=a;f();d(b)}}},Z=function(e){var a,b,c=0,d=t.getTagTime(),f=0,g=!1;return{getTotalTime:function(){return f},stop:function(){c=0;d=t.getTagTime();g=!1},mark:function(){a=g?t.getTagTime()-d:0;c+=a;c>=e&&(b=c-a<e,f+=b?c:a);d=t.getTagTime();g=!0}}},S=function(h,a){var b=h||r.adsafeSrc||r.requrl;b&&0===b.indexOf("http")||(b=r.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],f=b[3],g=b[4],q=b[5],l=h?b[6]:
"",n=a?b[7]:"",p={},v=function(a){e.isDef(a)&&(g=a);return g},k=function(a){e.isDef(a)&&(q=a);return q},m=function(a,b){return a+"="+e(b).toION()},n=n?n.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,f;(d=p[b])?p[b]=d+c:a&&n.length&&(d=n.split(b),f=1<d.length)&&(f=d[1].split("&")[0],d=[d[0],f].join(b),n=n.replace(d,d+c))},fullDom:c,hostname:f,sub:v,master:k,setParam:function(a,b){p[a]=p[a]||{};e(b).isObj()?e(p[a]).mixin(b):p[a]=b},path:function(a){l=a},toString:function(){var a=
v()?v()+".":"",b=l?"/"+l:"",c;n||!e(p).isEmpty()?(c=e(p).isEmpty()?"":e(p).stringify(m,"&"),c="?"+n+(n&&c?"&"+c:c)):c="";return d+"://"+a+k()+b+c}}},Db=function(){var h=function(a){var c=[];e(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};(function(){var b;try{if(t.friendly&&!t.isMobileApp()){var c,d;if(c=u.getOurNodeInTop()){var f=u.getAncestorNodes(c);d=e(f).map(a)}(b=d=d&&h(d))&&m.trigger("addOutputItem",
{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0})}}catch(g){m.trigger("error",k.ERROR_CODES.AD_SLOT_ID)}})()},fb=function(){var h,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{h=s.getWindow().location.ancestorOrigins,a=!0}catch(b){m.trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return h&&h.length||0},getTopDomain:function(){return e.last(h)},sendOriginList:function(){var a;a="ao:"+(h?e(h).map(b).reverse():[]).join(",");m.trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});m.trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Bb=function(h,a,b,c,d){var f=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(d){try{a.diagnostic("c");var l=d.length,g=0,p=0;f(l,0,0);e(d).each(function(a,b){h.send(b.replace("%%CBS%%",
c.getCacheBustId()),function(){f(l,g,++p)},!0);f(l,++g,p)})}catch(v){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+r.asid;h.jsonp(a,g)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},rb=function(e,a,b,c){return{enabled:"true"===r.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===r.accountForSadImps&&c.measure(a),r._onAPIResult&&r._onAPIResult(a)}catch(f){e.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag",
"bapiClient")}}}},Va=function(){return{createInstance:function(e,a,b,c){return t.isDomless()?new Tb:new Ub}}},Ub=function(){var h=k.BROWSERS,a,b=function(){var a="0",b=s.getWindow(),c=function(a){return a.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var d=s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(f){a="6"}}catch(q){}a=c(s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(g){try{b.navigator.mimeTypes[k.FLASH_MIME].enabledPlugin&&
(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(e){}}return a},c=function(){e.isUndef(a)&&(a=b());return a},d=function(a){return g()===a},f=function(){var a=s.getDoc();return a&&a.documentMode?a.documentMode:k.NA},g=function(){var a="u",b=s.getWindow();try{e.isDef(b.opera)&&e.isDef(b.opera.buildNumber)?a=h.OPERA:e.isDef(b.mozInnerScreenY)?a=h.GECKO:e.isDef(b.chrome)&&e.isDef(b.chrome.csi)?a=h.CHROME:e.isDef(b.msWriteProfilerMark)&&e.isDef(b.crypto)?
a=h.MSEDGE:e.isDef(b.attachEvent)||e.isDef(b.msCrypto)?a=h.IE:e.isDef(b.WebKitPoint)&&(a=h.WEBKIT)}catch(c){}return a},q=function(){var a=!1,b=s.getWindow();e.isDef(b.navigator)&&e.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:d,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=s.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=
s.getWindow();return!(!a||!e.isFunction(a.postMessage))},getFlashVersion:c,getDocumentMode:f,getBrowserType:g,getUserAgent:q,params:function(){var a=g(),b=c(),q;q=5;var v=s.getWindow(),x=s.getDoc();d(h.IE)?v.msCrypto?q=11:v.atob?q=10:v.addEventListener?q=9:v.JSON&&x.querySelector?q=8:v.XMLHttpRequest?q=7:x.compatMode&&(q=6):q=k.NA;var v=f(),x=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"],m=k.NA,w=s.getDoc(),z=w.createElement("div");
if(d(h.IE))try{if("-ms-ime-align"in w.documentElement.style)m="11";else for(z.style.behavior="url(#default#clientcaps)",w=0;w<x.length&&!(m=z.getComponentVersion(x[w],"componentid").replace(/,/g,"."));w++);}catch(B){}x=m;m=k.NA;z=s.getWindow();e.isDef(z.navigator)&&e.isDef(z.navigator.appName)&&(m=z.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,bv:q,dm:v,abv:x,an:m}},isAndroidWebViewBrowser:function(){var a=q(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return e(b).findFirst(function(b,
c){return O.contains(a,c)})};return O.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=q())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},Tb=function(){var e=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",bv:a(),dm:a(),abv:a(),an:a()}},browserIs:e,
getUserAgent:e,hasPostMessage:e,hasFlashEnabled:e,hasAncestorOrigins:e,hasIntersectionObserver:e,isAndroidWebViewBrowser:e}},Za=function(){return{createInstance:function(e,a){return t.isDomless()?new Vb(a):new Wb(e,a)}}},Wb=function(h,a){var b=function(a,b){var c,d,f=r.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===r.forceAppend?"script"!==a?(c=J.createElement("DIV"),c.innerHTML=d,f.appendChild(c.childNodes[0])):(c=J.createElement("SCRIPT"),c.src=b,f.appendChild(c)):J.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var f=J.createElement("script");c=c||r.contextNode.parentNode;
f.type="text/javascript";f.src=a;b&&(f.onload=b);d&&(f.setAttribute("defer",""),f.setAttribute("async",""));e.isDef(c)&&c.appendChild(f)},f=function(a){e.isFunction(a)?a({iasImpId:r.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},g=function(b,c,f,g){d(a.wrap(b,c,f,g))};m.on({addNode:b,send:c,exec:d,notify:f,jsonp:g});return{addNode:b,send:c,exec:d,notify:f,jsonp:g}},Vb=function(h){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";m.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":
"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);m.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){m.request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},d=function(a){e.isFunction(a)?a({iasImpId:r.asid}):a&&"string"===typeof a&&b(a)},f=function(a,b,d,f){c(h.wrap(a,b,d,f))};m.on({addNode:a,send:b,exec:c,notify:d,jsonp:f});return{addNode:a,send:b,exec:c,notify:d,jsonp:f}},t=function(){var h="undefined"===typeof window,a="undefined"!==
typeof window&&"undefined"!==typeof top&&window!==top,b=function(){var a=!1;if(h)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!h&&e.isDef(s.getWindow().mraid)},d=function(){var a=!1;if(!h)var b=(a=s.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&e.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},f=function(){return r.mobOrTab},g=function(a){return!1===e(r.customViewability).isArray()?!1:0<e(r.customViewability).filter(function(b,c){return O.contains(c.id,
a)}).length},q=function(){return g("grpm")||r.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(h)a=!0;else{try{c=S(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return s.now()-r.birthdate},getPageTime:function(){var a=k.NA;!h&&e.isDef(window.chrome)&&e.isDef(window.chrome.csi)&&e.isFunction(window.chrome.csi)&&(a=s.round(chrome.csi().pageT));return a},isVideo:function(){var a;
if(!(a=-1!==r.mode.indexOf("jsvid"))){var b;a=!1;if(!h){var c=m.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===k.MEDIA_TYPE.VIDEO}catch(f){}}(b=a)||(b=m.request("omidVerificationClient"),a=!1,c=m.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===k.MEDIA_TYPE.VIDEO),b=a||d());a=b}return a},isMobileApp:function(){return h||e.isDef(s.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;h||(a=(a=r._cl_adpath)&&e.isStr(a));return a},isAvid:function(){return!h&&
e.isDef(s.getWindow().avid)},isOmid:function(){var a=m.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return h},isAvidNative:function(){var a=!1;if(!h){var b=m.request("avidJsClient");b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;h||(a=void 0!==ba());return a},isMraid:c,isSafeFrame:function(){var a=!1;h||(a=
e(s.getWindow().$sf).isObj(!1)&&e(s.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:d,isDeviceTypeGroupMobile:f,usesIASFullyInViewCustomMetric:function(){return g("fiv")||r.use100v},isNativo:function(){var a=!1;h||(a=(a=r._cl_adpath)&&O.contains(a,".ntv"));return a},usesGroupMCustomMetric:q,isCeltra:function(){var a=!1;h||(a=oa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return q()&&f()}}}(),y={addEvent:function(h,a,b,c){e.isDef(h.addEventListener)?"mouseenter"===
a?h.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?h.addEventListener("mouseout",y.mouseEnter(b),c):h.addEventListener(a,b,c):e.isDef(h.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),h.attachEvent("on"+a,b))},removeEvent:function(h,a,b){e.isDef(h.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),h.removeEventListener(a,b)):e.isDef(h.detachEvent)&&h.detachEvent("on"+a,b)},mouseEnter:function(e){var a=this;return function(b){var c=
b.relatedTarget;this===c||a.isAChildOf(this,c)||e.call(this,b)}},isAChildOf:function(e,a){if(e===a)return!1;for(;a&&a!==e;)a=a.parentNode;return a===e},getStyle:function(e,a,b){var c="",d=J.defaultView&&J.defaultView.getComputedStyle;b=b||"";d?c=(e=J.defaultView.getComputedStyle(e,b))?e.getPropertyValue(a):c:e.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=e.currentStyle[a]);return c},getXHR2:function(h,a){var b,c;e.isDef(C.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in
c&&(b=c)):e.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(h,a){if(t.isDomless())s.setTimeout(function(){h()},50);else{var b=a||(t.xDomainIframe?J:s.getTop().document),c=function(a){var c=s.setInterval(function(){b.body&&(s.clearInterval(c),a())},50)},d=this;(function(a){var g=function(){a(!0)};e.isFunction(J.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?s.execAtEndOfThread(g):d.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(h)}},
isSandboxed:function(e){var a,b=s.getWindow(),c=!1;if("sandbox"in s.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)e=a.hasAttribute("sandbox");else{a=!1;b=s.getDoc();if(e.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}e=a}c=e}return c},styleElement:function(h,a){if(h&&e(h.style).isObj()&&e(a).isObj()){var b="";e(a).each(function(a,d){b+=a+": "+d+" !important;"});h.style.cssText=b}},nodeIsAbsolutelyPositioned:function(e){return"absolute"===
y.getStyle(e,"position")||e.style&&"absolute"===e.style.position}},Y=function(h){var a,b=Y.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=k.DT_CODES;e("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,f){a[b[f]]=d[f]});return a};a=function(){var a=f()[h],d=
b&&b[h];e.isDef(d)&&0!==d&&e(c).contains(h)&&(a=a+"."+d);d=b[h];b[h]=e.isDef(d)?d+1:1;return a}();return{callType:h,enumerator:a}};Y.callTypeCounter={};var qb=function(h,a,b,c,d,f,g,q){var l=0,n=0,p=!1,v,x=function(a,f,q,h,v,x){q=q||!b.on("postDts");var E=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(E||"n"!==g.getCurrentLoc()))try{var t=r.dtBaseURL,u=new S(t,!0),L=
s.now();m.trigger("preSendDt",a);t||(u.path("dt"),b.on("usedtdomain")&&u.sub("dt"));w(u,a,f);v&&v.field&&u.setParam(v.field,v.value);h||z(u,a);m.trigger("send",u,function(){n+=1;l=s.now()-L;e.isFunction(x)&&x()},q);a===k.DT_CODES.UNLOAD&&(p=!0);d.cleanup()}catch(T){__IntegralASDiagnosticCall("dt-"+a,T),m.trigger("error",k.ERROR_CODES.PHONE_HOME)}};h=function(){p||x(k.DT_CODES.UNLOAD,-1,!0)};var E=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=r.mode,d=d[a]||d[f];b.on(c||
f+"Diag")&&d&&x(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},w=function(a,b,f){var q=new Y(b);f=e.isDef(f)?f:q.enumerator;a.setParam("asId",r.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},z=function(c,e){var h,p={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===e},function(a,b){c.setParam(a,b.replace("%3A",":"))});
g.fastForward();if(e===k.DT_CODES.VIDEO_EVENTS||t.isVideo()&&e===k.DT_CODES.CUSTOM)if(h=m.request("videoEventsString"))p.ve=h;if(e===k.DT_CODES.CUSTOM||e===k.DT_CODES.UNLOAD||e===k.DT_CODES.VIDEO_EVENTS)p.clog=q;e===k.DT_CODES.UNLOAD&&(p.ndt=n);-1!==r.mode.indexOf("jsvid")&&(p.vv=m.request("videoVersion"));p.NULL1=b.output();p.NULL2=g.stringify(10);p.em=t.embedded;p.fr=t.friendly;p.uf=v.useFlash()?1:0;p.e=a.toString();p.tt=r.mode;p.dtt=l;d.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||
a.type===e);b&&a.oneTime&&(a.flagForRemoval=!0);return b},p);c.setParam("tv",p);c.setParam("br",f.getBrowserType())};m.on({sendDt:function(a,b,c){x(a,e.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){x(a,b,void 0,!0)},sendDiag:E,updateDtCount:function(){n++},unload:h});return{send:x,unload:h,diagnostic:E,setViewabilityMod:function(a){v=a}}},K=function(h){var a={},b=!1,c=function(){var a=1===h.nodeType?u.nodeIsHidden(h):0===h.width||0===h.height;return b?!1:a},d=function(){var b={};e(a).each(function(a,
c){b[a]=s.round(c)});return b},f=function(a){return e.isNumeric(a)||e.isUndef(a)},g=function(){return s.round(a.width)*s.round(a.height)};(function(){var b;h!==C.parent&&(1!==h.nodeType?a=h:e.isDef(h.getBoundingClientRect)&&(b=u.getRect(h),e(a).mixin({x:e.useIfDef(b.x)||b.scrX,y:e.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&e.isNumeric(a.width)&&e.isNumeric(a.height)},toString:function(){var a=d();
return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},u={findElementsWithSize:function(h){var a=[],b=function(c){1>u.getNodeArea(c)?e(c.children).each(function(a,c){b(c)}):a.push(c)};b(h);return a},nodeIsHidden:function(e){var a=this.getRect(e),b=0!==parseInt(y.getStyle(e,"width"))&&0===a.width,a=0===a.width||0===
a.height;e="hidden"===y.getStyle(e,"visibility");return b||a||e},calcWinDims:function(){var e,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),e={scrX:s.round(a.scrX),scrY:s.round(a.scrY),width:s.round(b.width),height:s.round(b.height)}}catch(c){m.trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),e={}}return e},windowSize:function(){var h={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,e.isDef(top.innerWidth))h.width=top.innerWidth,
h.height=top.innerHeight;else if(e.isDef(b.clientWidth))h.width=b.clientWidth,h.height=b.clientHeight;else if(e.isDef(a.clientWidth))h.width=a.clientWidth,h.height=a.clientHeight;else throw h.width=h.height=0,"";else e.isDef(window.outerWidth)&&(h.width=window.outerWidth,h.height=window.outerHeight);return h},browserWindowPosition:function(){var h=0,a=0;e.isDef(window.screenX)?(h=window.screenX,a=window.screenY):e.isDef(window.screenLeft)&&(h=window.screenLeft,a=window.screenTop);return{scrX:h,scrY:a}},
getNodeArea:function(e){var a=-1;e&&(e=u.getRect(e),a=e.width*e.height);return a},getRect:function(h){var a={},b=u.browserWindowPosition();h=h.getBoundingClientRect();e.isUndef(h.x)&&(a.x=h.left,a.y=h.top);e.isUndef(h.width)&&(a.width=h.right-h.left,a.height=h.bottom-h.top);e(a).mixin(h,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(h){h=h.document;return h.documentElement&&e.isDef(h.documentElement.clientWidth)&&h.documentElement||h.body},getPlaceholderSpan:function(){var h=
J.createElement("span");e(h.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});h.innerHTML=".";return h},createImage:function(){var h=t.friendly&&s.getTop().Image;return e.isFunction(h)?new h:new Image},createHiddenIframe:function(e){var a=s.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,e?{display:"none"}:b);return a},tagNameIs:function(e,a){return e.tagName.toUpperCase()===
a.toUpperCase()},getClippedDimensions:function(e,a){var b,c,d,f=1E4,g=1E4;b=y.nodeIsAbsolutelyPositioned(e);d=!u.tagNameIs(e,"OBJECT");if(null!==e.parentNode&&!b&&d&&!u.tagNameIs(a,"BODY")){d=e;do d=d.parentNode,b=!u.tagNameIs(d,"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=u.getRect(d),f=b.width<f?b.width:f,g=b.height<g?b.height:g);while(d.parentNode!==J&&d!==a)}return{width:s.round(f),height:s.round(g)}},findChildWithLargestContent:function(e){var a=function(a){for(;a.parentNode!==e&&
"inline"!==y.getStyle(a.parentNode,"display");)a=a.parentNode;return a},b=null,c=function(a){var b,c,q=null,l=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var n=a[b],p=u.getNodeArea(n),v;if(v=p>l){v=void 0;if(v=n.parentNode===e)if(v=void 0,v="DIV"===n.nodeName)if(v=void 0,v=""===n.style.backgroundImage){var k=v=void 0,m=n.childNodes;for(v=0;v<m.length;v++)1===m[v].nodeType&&(k=!0);v=!k}v=!v}v&&(q=n,l=p)}return q}(function(a){var b,c,e,l,n=[],h="iframe img a object embed div".split(" ");b=0;for(c=h.length;b<
c;b++){var v=a.getElementsByTagName(h[b]);if(v.length)for(e=0,l=v.length;e<l;e++)n.push(v[e])}return n}(e));c&&(b=a(c));return b},screenSize:function(){if(t.isDomless())return{width:0,height:0};var h={width:-1,height:-1};try{e.isDef(window.screen)&&(h={width:window.screen.width,height:window.screen.height})}catch(a){}return h},calcMonDims:function(){var h=e(u.screenSize()).mixin({scrX:0,scrY:0});e.isDef(screen.availLeft)&&(h={scrX:window.screen.availLeft,scrY:window.screen.availTop,width:window.screen.availWidth,
height:window.screen.availHeight});return h},getOurIFrameInTop:function(){for(var e,a=s.getTop(),b=s.getWindow();b!=a;)e=b,b=e.parent;return e},getOurNodeInTop:function(){var e;t.friendly&&(e=t.embedded?(e=u.getOurIFrameInTop())&&e.frameElement:r.contextNode);return e},getAncestorNodes:function(e){var a=[],b=e.ownerDocument&&e.ownerDocument.documentElement;if(b)for(;e.parentNode!==b;)a.push(e),e=e.parentNode;return a},getTagsNamed:function(e,a){var b,c=a||s.getDoc();try{b=c.getElementsByTagName(e)}catch(d){b=
null}return b},containsScriptTagWithSrc:function(h){return!!e(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return e.isFunction(h)?h(c):c===h})},contains:function(h,a){var b=!1;try{b=e.isDef(h)&&e.isFunction(h.contains)&&h.contains(a)}catch(c){}return b},querySelector:function(e,a){var b;try{b=e.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(e,a){return e.ownerDocument&&(e.ownerDocument.defaultView||e.ownerDocument.parentWindow)===a},setAttributeOf:function(h,a,
b){h&&e.isFunction(h.setAttribute)&&h.setAttribute(a,b)},removeAttributeOf:function(h,a){h&&e.isFunction(h.removeAttribute)&&h.removeAttribute(a)},crossQuerySelector:function(h,a){var b,c,d=[r.contextNode.parentNode,s.getDoc()];t.friendly&&d.push(s.getTop().document);if(a&&t.embedded)try{d.push(s.getWindow().frameElement.ownerDocument)}catch(f){}e(d).each(function(a,d){try{c=u.querySelector(d,h)}catch(f){}!b&&c&&(b=c)});return b},getNodeName:function(e){return e&&e.nodeName},isWindow:function(e){var a=
!1;try{a=e&&"object"===typeof e&&"setInterval"in e}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=u.getTagsNamed("iframe",h))&&(a=e(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var e=s.getWindow().frameElement;return e&&e.id},isViewportVisible:function(e,a){var b=e.innerWidth,c=e.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(e){return e.tagName.toLowerCase()},getAttribute:function(e,a){return e.getAttribute(a)},
attributeMatches:function(e,a,b){e=e&&u.getAttribute(e,a);return b.test(e)},isImageTag:function(e){return e&&e.src&&u.tagNameIs(e,"img")},getDimensionFromStyle:function(h){var a,b=y.getStyle(h,"width");h=y.getStyle(h,"height");b&&h&&(a={width:e.getNum(b),height:e.getNum(h)});return a},getDimensionFromAttributes:function(h){var a,b=u.getAttribute(h,"width");h=u.getAttribute(h,"height");b&&h&&(a={width:e.getNum(b),height:e.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,
f,e;if(c(b))f=b;else if(e=b.children)for(d=0;d<e.length&&!(f=a(e[d],c));d++);return f},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),f="hidden"!==y.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||f)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==
s.getTop()},getParent:function(a){return a.parentNode||a.parent}},Wa=function(){var a={},b=function(b){e.isDef(a[b])?a[b]++:a[b]=1};m.on("error",function(a){a=e(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},ub=function(){return{createInstance:function(a,b){return t.isDomless()?new Xb:new Yb(a,b)}}},Yb=function(a,b){var c=function(a){var b=[];if(a&&a instanceof
Array)b=e(a).map(function(a,b){return b.val}),b.push(r.adsafeSrc,r.requrl,r.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var f,g=c(d),q=g&&g.length&&g.join("|"),l=r.exchList;q&&(f=e(l).map(function(a,b){return 0<=q.indexOf(O.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(n){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},Xb=function(){return{parse:function(a){}}},Sa=function(){var a=
{},b=function(b){var c;e.isUndef(a[b])&&(c=r.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*s.random());return a[b]},c={rt:"rattie",cb:"cachebust",th:"tabHiddenDtCall",es:"everySecond",sa:"swapids",sc:"usesca",ha:"usehaps"},d={fif:"useFIF"},f=function(){var b,f;b=e(c).mapToObj(function(b,c){var d={};d[b]=e.fromBoolToNum(a[c]);return d});f=e(d).mapToObj(function(a,b){var c={};c[a]=e.fromBoolToNum(g(b));return c});f.gm=e.fromBoolToNum(t.usesGroupMCustomMetric());
return e(b).mixin(f)},g=function(a){a=r[a];return!0===a||"true"===a||e.isFunction(a)};e(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=e.isStr(a)?[a]:a;return e(a).map(function(a,b){if(e.isDef(r[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=r.sp_cdnScripts&&r.sp_cdnScripts[a];return c&&a},output:function(){return e(f()).toParams()}}},jb=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,
PARTIAL_VIEW:30};var f={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},g=k.NA;d=c?d:f;e.isDef(a)&&a!==k.NA&&-1<a&&(g=a>=d.IN_VIEW?k.IN_VIEW:a<=d.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return g},calcPercentInView:function(a,c,d,f){var g=0,q=a;a.hasValidDims()&&!a.isHidden()&&(e([c,d,f]).each(function(a,b){if(b.hasValidDims()){var c=q.getRounded(),d=b.getRounded(),f=Math.max(c.scrX,d.scrX),e=Math.max(c.scrY,d.scrY),g=Math.min(c.scrX+c.width,d.scrX+d.width),
c=Math.min(c.scrY+c.height,d.scrY+d.height),g=g-f,c=c-e;q=K({scrX:f,scrY:e,width:0<g?g:0,height:0<c?c:0})}}),g=s.round(q.area()/a.area()*100));return g}}},Xa=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=C.Uint32Array&&C.crypto&&C.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),C.crypto.getRandomValues(b),a+=b[0].toString(16)):
a+=(16*s.random()|0).toString(16);a=a.slice(0,32)}catch(d){m.trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return r.anId};return{getAsid:function(){return r.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return e.toBase(a,62)},getFwId:function(){return d()||r.advEntityId+"-"+r.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=
a}}},Cb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},pb=function(a){var b=function(a,b){return{time:a,task:b}};return{createPingJobs:function(a,d,f,g){return e(d.timeThresholds).map(function(d,l){var n=l/1E3;return new b(l,function(){e.isDef(g)&&m.trigger("addOutputItem",{output:g},"metricId",{type:a});m.trigger("sendDt",a,n);if(f[l])f[l]()})})}}},ha=function(){var a=function(a,b){-1!==a.indexOf(b+
"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var e=a.indexOf("?");b=b+"="+c;if(-1===e)return a+"?"+b;e++;return a.slice(0,e)+b+"&"+a.slice(e)},c=function(){return"__IntegralAS_"+r.asid.replace(/\-/g,"")+"_"+s.round(1E4*Math.random())};return{wrap:function(d,e,g,q){var l=c(),n,p,v;q=q||"ias_callback";d=""+d;RegExp(q).test(d)&&(n=RegExp("("+q+"=)(.[^&]*)").exec(d)[0],p=n.split("=")[1],v=O.stringToFn(p),d=a(d,n));C[l]=function(a){e(a);g&&v&&v(a);C[l]=void 0};return d=b(d,q,l)},wrapToGlobal:function(a){var b=
c();C[b]=function(c){a(c);C[b]=void 0};return b}}},sb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+e(b).stringify(function(a,b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?m.trigger("jsonp",c,a.callback,!0):m.trigger("send",c,function(){m.trigger("sendDiag")},
!b.on("postMon"))}},bapi:{impressionMethod:function(b){m.trigger("jsonp",b,a.enabled?a.callback:e.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){m.trigger("jsonp",b,a.enabled?a.callback:e.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){m.on("adImpression",function(f,l){var n;try{n=d(c,l),a.enabled?m.trigger("jsonp",n,a.callback,!0):m.trigger("send",n,e.noop,!b.on("postMon"))}catch(p){__IntegralASDiagnosticCall("jsvidimp",p,r)}})}},fwjsvid:{isFW:!0,manualDefer:!0,
impressionMethod:function(a){var b="false"===r.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&m.trigger("jsonp",c(a),function(a){m.trigger("videoBlockResult",a)});m.on("adImpression",function(c,f){var l;try{var k;if(k=b)k=c&&e.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;k&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));l=d(a,f);m.trigger("send",l,e.noop,!0)}catch(E){__IntegralASDiagnosticCall("fwjsvidimp",
E,r)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[r.mode],d=!!b.isFW,e=function(a){var b;b=m.request("mobileApp").isMobileAppEnvironment()&&r.mobFwUrl?r.mobFwUrl:a?r.adsafeSrc:r.requrl;a||(b+="?"+r.reqquery);return b}(d),p=e.indexOf("BEGIN__ADSAFE"),k=-1!==p,x=k?e.slice(p):"",a=k?e.slice(0,p):a(e);return{isFW:d,baseUrl:a,macroUrl:x,sendImpression:function(a){var d=function(){b.nodeType?m.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};
if(c||b.manualDefer)d(a);else if(!b.manualDefer)m.on("adImpression",function(){d(a)})}}}},s={execAtEndOfThread:function(a){s.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return C},getTimeoutScope:function(){return t.isDomless()&&
t.isOmid()?m.request("omidVerificationClient"):C},setInterval:function(a,b){return s.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return s.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){s.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){s.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getNewActiveXObject:function(a){t.isDomless();return new ActiveXObject(a)},getDoc:function(){t.isDomless();
return J},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},eb=function(){return{createInstance:function(){return t.isDomless()?new Zb:new $b}}},$b=function(){var a,b=!1,c=m.request("features"),d=new $,f=function(){var b;c.on("blur")||c.on("abcAudit")&&923747==r.anId?(b=s.getWindow(),b=t.friendly&&b.top.document&&(e.isFunction(b.top.document.hasFocus)||e(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||
(e.isDef(a.prop)?s.getDoc()[a.prop]:null)):b=e.isDef(a.prop)?s.getDoc()[a.prop]:null;return b},g=function(){var b=s.getWindow(),c=function(){d.run(f())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(s.getDoc(),a.event,c,!0)};a=function(){var a,b="hidden",c="visibilitychange",d=s.getDoc();e.isUndef(d.hidden)?e(["moz","ms","webkit"]).each(function(f,g){var k=g+"Hidden";e.isDef(d[k])&&(b=k,c=g+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:f,onHiddenChange:function(a){d.push(a);
b||(b=!0,g())}}},Zb=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},gb=function(){return{createInstance:function(a,b){return t.isDomless()?new ac:new bc(a,b)}}},bc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||e.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],e.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=
b[d],a[c]=d);return a},g=function(){var g,l=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),f;if(f=e.isDef(d)){var g=b.getWindow();f=!1;e.isDef(g.navigator)&&e.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?
13>=parseInt(g[2],10)&&(f=!0):f=!0)))}f&&(a.g=d)}return a},n={};try{n.a=encodeURIComponent(top.location.href)}catch(p){}try{n.b=encodeURIComponent(parent.location.href)}catch(k){}if(t.embedded){try{n.c=encodeURIComponent(parent.document.referrer)}catch(m){}try{n.e=encodeURIComponent(window.document.referrer)}catch(s){}}try{"jsi"!==r.mode&&(n.d=encodeURIComponent(window.location.href))}catch(w){}try{n.f=encodeURIComponent(r.jsref)}catch(z){}try{g=l(),n.g=encodeURIComponent(g.g||""),n.q=encodeURIComponent(g.q||
""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&(n.g=encodeURIComponent(a.getTopDomain()))}catch(B){}n=d(n);n=f(n);g=[];for(var A in n)n.hasOwnProperty(A)&&g.push({key:A,val:n[A]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?c:g()}}},ac=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},db=function(a){var b=!1;return{measure:function(c){(b=0===
c.rsa)&&a.trigger("notify",r._onSuspicious)},skipAsFraudulent:function(){return b}}},hb=function(){var a=[],b={},c={sl:"n"},d=0,f,g,q={i:0,o:0,n:0,pp:0,pm:0},l=function(a){var b={},c=a.winDimensions,d=a.adDimensions;e.isDef(c)&&c.hasValidDims()&&(b.wc=c);e.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);e({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason",cmps:"adCompCount"}).each(function(c,d){var f=a[d];e.isDef(f)&&(b[c]=f)});c=e(b).toParams();return""===
c?"":","+c},n=function(a,c){var d=new Rb(c);return b[a]=d},p=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},v=function(){e(c).each(function(b,c){q[c]+=a.length?g-d:g});d=g},x=function(b){a.length&&v();e(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(q[b]+=q.n);c[a]=b});a.length||v()},s=function(a){var c,d=k.NA,d=a.adDimensions?a.adDimensions.getRounded():{width:d,height:d};c=l(a);var f={sl:p(a.viewState)};g=t.getTagTime();x(f);f.t=g;
c=e({toString:function(){e(b).each(function(a,b){b.fastForward()});return"{"+e(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+e(this.piv).stringify(b)+"]");a+=",as:["+e(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);e(c).mixin(a);c.width=d.width;c.height=d.height;return c};(function(){n("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=
c:(e(d).each(function(a,f){e.isUndef(b)&&c<f&&(b=d[a-1])}),e.isUndef(b)&&(b=d[d.length-1]));return b});n("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){g=t.getTagTime();v()},registerLocation:function(d){var g,l=!1;c.sl==p(d.viewState)&&a.length?(g=new s(d),a[a.length-1].details=g.details):(g=new s(d),a.push(g),f=d.viewState,l=!0);m.trigger("newScreenEvent",g);e(b).each(function(b,c){-1!=="piv|as".indexOf(b)?
(l&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=e({slTimes:"{"+e(q).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:n,getCurrentLoc:function(){return p(f)}}},O={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,
function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=C,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],e.isUndef(c)||a===d.length-1&&!e.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=s.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!e.isUndef(b));a++);return b},contains:function(a,b){return e.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return e.isFunction(a.trim)?
a.trim():a.replace(" ","")}},cc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=u.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,g=function(a){var d=u.tagNameIs(a,"div"),e=u.attributeMatches(a,"class",b);
a=u.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),p=u.attributeMatches(b,"href",d),k=u.attributeMatches(b,"target",e);g&&p&&k&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},dc=
function(){var a=cc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};P("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!u.isViewportVisible(c,
a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=s.getWindow();return b(a,s.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=s.getWindow();u.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var ec=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=
null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,l=a.innerHeight,n=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==l)&&(n=!0);n&&!d&&(b(),e(),n=!1);c=a.innerWidth;l=a.innerHeight})}}};P("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),g,q={};d!==c&&(g=e.stringifyTriState(d),q.res1=g,q.ps=g,q.ts=s.now(),q.psfr=e.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",q));c=d}catch(l){m.trigger("error",
k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)ec(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});P("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){m.trigger("addThrottledProp",k.DT_SLOT.FRAUD,a,e(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,e;t.embedded&&s.execAtEndOfThread(function(){try{e=r.contextNode.parentNode;var q=
b=dc().getDFPValue(e),l={};l.df=q.type;q.size&&(l.sz=q.size.width+"."+q.size.height);q.tag&&(l.dom=q.tag);c("dfp",l);b.size&&a&&(a.events.on("newState",d),a.start())}catch(n){m.trigger("error",k.ERROR_CODES.HIDDEN)}})})()},{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var bb=function(){return{createInstance:function(a){return t.isDomless()?new fc:new gc(a)}}},gc=function(a){var b,c,d,f=new ja,g=new aa,q=new hc(f),l=new ic,n=new jc,p=new kc(f,a),k=function(){e.isUndef(d)&&
(d=new lc(f));return d},x=function(){f.provide({frameCollection:function(){return q},adProxy:function(){return n},adTalkMessage:function(a){return new mc(a,f)},adTalkMessageCollection:function(){return l},idMapModule:k,interFrameQuerySelector:function(a){return new nc(a)}})};return{isApplicable:function(a){return e.isDef(window.JSON)&&e.isDef(window.postMessage)&&!a.isAvid()&&!a.isOmid()},start:function(){x();g.traverse(q.addFrame);p.startListening();p.sendToKnownFrames();m.once("stopAdTalk",function(){p.stopListening()})},
sendAdTalkCall:p.sendAdTalkCall,getFrameMap:function(){e.isUndef(b)&&(b=new pa(f));return b},getFrameMapIncludingPeerCase:function(){e.isUndef(c)&&(c=new pa(f,!0));return c},getIdMap:k}},fc=function(){return{isApplicable:function(){return!1},start:function(){}}},mc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=m.request("features").on("swapids")?r.oid:r.asid;var g=a||{},q=r.asid,d=d.tagId,l=t.embedded,n=t.friendly,p=r.birthdate;
c=c.split("-")[2];var v;t.friendly?v="["+k.AD_IDENTIFIER+"-"+r.asid+"]":(v=s.getWindow(),v=v.location&&v.location.href,v='iframe[src*="'+(v&&v.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:q,srcTagId:d,srcIsEmbedded:l,srcIsFriendly:n,srcBirthdate:p,iasCommonId:c,nodeSelector:v,positionStr:e,version:"0.1"}},ic=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return e(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},oc=function(a,b,
c,d){var f,g=a==C;f={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:r.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return e(f.position).map(function(a,b){return e.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||f.isMe||e.isDef(f.selfDescription)}};var q=function(a){var b=f.adProxies;a=a.adProxies;var c=[];b.length&&
a.length?e(a).each(function(a,d){l(b,d)&&c.push(d)}):c=a;f.adProxies=b.concat(c)},l=function(a,b){return!e(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},n=function(a){e(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=function(a,b){q(b);n(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},hc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,g,q){var l=a.request("adProxy").getAll();e=
new oc(e,g,l,q);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},pa=function(a,b){var c=function(a,c){var e=c.adProxies,l="";if(c.isValidForMapping()){if(b)l+=d(e,c.getStringifiedPosition());else{var n;n=""+c.getStringifiedPosition();n+=c.isMe?"*":"";n+=e.length?"."+e[0].tagId:"";l+=n}return l}},d=function(a,b){var c="";return c=a.length?c+e(a).stringify(function(a,c){return b+(r.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):
c+b};return{output:function(){var b=a.request("frameCollection"),d=e(b.list).stringify(c,"|");return e.toBase(b.getMe().unifiedId,62)+"+"+d}}},lc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=r.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var e=!1,e=!t.embedded,f="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),g;if(g=a.srcIsEmbedded){g="0.1"!==a.version;var v=a.nodeSelector&&
-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);g=!(g?v:!a.srcIsFriendly)}e&&f&&!g?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==r.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),m.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},
nc=function(a){var b=new aa,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),d=u.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return u.querySelector(c(a),b)},f=function(c,f){var l,n,p;try{n=d(c,f),n||(l=b.getFrames(!0,a),e(l).findFirst(function(a,b){return p=d(b,f)}))}catch(k){}return n||p||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));return c}}},kc=function(a){var b=!1,c,d;d=m.request("features").on("swapids")?r.oid:r.asid;var f=function(b){var c=
d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==r.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);m.trigger("sendDt",c)},l=function(c,d,f){var g,l,w,r,B;try{g=a.request("frameCollection");l=a.request("adTalkMessageCollection");w=d.messageContent.self;l.add(d);
var t=g.getMe();t.unifiedId>w.unifiedId&&(t.unifiedId=w.unifiedId);var u;u=s.now()-d.sentTime;d.transferDuration=u;l=r=g.getFrame(w.id);e.isUndef(l)||e.isUndef(l.selfDescription)?(r=r||g.addFrame(c.source,w.id.split("-"),d),r.addInformationFromSrc(d,w),f()):r.addInformationFromSrc(d,w);(B=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&q()}catch(H){m.trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new la).send(g)},startListening:function(){c=
new Nb;c.listen(f,l,g)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:l,createMessage:g}},pc=function(){var a=m.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},jc=function(){var a,b=[],c=function(a){a=new pc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},ib=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=
a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&y.addEvent(s.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,s.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},qc=function(a,b){var c,d=k.NA,f=d,g=!1,q=!1,l=!1,n=!b,p=function(){var b=s.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&
(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==f&&s.execAtEndOfThread(function(){m.trigger("IOPivChange",d)});f=d},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});n&&s.execAtEndOfThread(function(){d===k.NA&&(d=0)});b.observe(v(a));n&&s.execAtEndOfThread(function(){t.isBustedIframe()||m.trigger("delayedViewabilityReady")});g=!0},v=function(b){if(!e.isUndef(b)){if(l){b=a.document;var c=b.createElement("div");e(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",
zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(l=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){q=!0}b&&null!==b.bodyElement?p():b&&b.document?y.whenReady(p,b.document):q?m.request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):p()},isStarted:function(){return g},getAdNodeDimensions:function(){var a;c&&(a=K({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));
return a},isReady:function(){return d!==k.NA}}},ia=function(){var a=!1;(function(){y.whenReady(function(){m.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};P("loopDelay",[],ia,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:k.TIERS.VIEWABILITY});var rc=function(){return{start:function(a){m.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)}}},sc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},
Ab=function(a,b,c){var d=!1,f=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,m.trigger("notify",r._onMeasurable))};return{start:function(){var b;b=[tc(),uc(),sc(),rc()];(b=e(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&e.isDef(r._onMeasurable)}}},uc=function(){return{start:function(a){Ob(m,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();
return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},tc=function(){return{start:function(a){m.everOnce("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},vc=function(a,b,c){var d=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();e.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=e.isDef(e(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||a.addEventListener("ready",function(){m.trigger("adImpression")})}}},wc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&e.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=
!1,c=a.getAvidAdSessionContext();e.isDef(c)&&(b=c.avidJsVersion,(c=e.isUndef(b))||(c=e.getNum(b.split(".")[0]),b=e.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},xc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=e.isDef(e(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",
function(a){"AdImpression"===a.eventSubType&&m.trigger("adImpression")})}catch(b){}}}},yc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=e.isDef(e(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},fa=function(a){var b=m.request("omidAdSessionContext");return{accepts:function(){return a&&
a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},zc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=e.isDef(e(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},Ga=function(a){return{resolve:function(){return e(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Fa=function(a,b){var c=!1,d=!1,e=m.request("omidAdSessionContext"),g=function(b){"sessionStart"===b.type&&(e.isNative="native"===b.data.context.adSessionType,(c=!0)&&d&&(C.omidSupported=!0,a()))},q=function(b){e.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});e.isNativeVideo=e.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(C.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(g,
"IAS");b.addEventListener("impression",q)}}},Ac=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Bc=function(a,b){var c,d=function(a){var d,e,l;try{d=a.eventData.percentageInView,e=c&&75<=d,l={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,
y:0,width:0,height:0},shouldDelegateToDomBasedViewability:e,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",l)}catch(n){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(e){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Cc=function(a,b){var c=function(a){try{var c;
"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(e){__IntegralASDiagnosticCall("omidvideo",e,C.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",
a)}}},qa=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){m.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",
a)},isMeasurable:function(){return c}}},Dc=function(a,b,c){var d=e.isDef(a)?a.environment:void 0,f=e.isDef(a)?a.measurementStrategy:void 0,g=function(){return e.isDef(f)};e.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?d.isImmediate():!0},isMeasurable:function(){return g()?f.isMeasurable():!1},isMediaType:function(a){return g()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},
start:function(){g()&&d.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},$a=function(a,b,c){var d=m.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),e=(new ca(e)).resolve(),g=new Ec(e),q=new ra(b,c,t,d);return!e&&q.accepts()?new Fc(t.isVideo(),new D):new Dc(e,g,d.isMobileAppEnvironment())}}},ab=function(a){var b=
m.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=m.request("omidVerificationClient"),b=new fa(a),e=[];if(b.accepts()){var g=new Gc(a,new D),q=[{environment:new Hc,measurementStrategy:new Ic(a,new D)},{environment:new Jc,measurementStrategy:new sa(new da,s.getWindow(),new D)}],l=(q=(new ca(q)).resolve())?q.measurementStrategy:{},n=new ta(new ua(new W),new W),q=new yc(a,b,r.mode),p=new va(g,l,new D,n),b=new zc(a,b,r.mode),a=new wa(g,l,new Cc(a,new D),new D,n);e.push({environment:q,
measurementStrategy:p});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=m.request("avidJsClient"),d=new wc(b),e=[];if(d.accepts()){var g=new vc(b,d,r.mode),q=new xc(b,d,r.mode),l;l=new Ac(b,new D);if(d.supportsAdContainerGeometry()){var n=new Kc,p=new Lc,k=new sa(new da,s.getWindow(),new D),x=new Mc(b,new D),n=(n=(new ca([{environment:n,measurementStrategy:x},{environment:p,measurementStrategy:k}])).resolve())?n.measurementStrategy:{},p=new ta(new ua(new W),
new W),k=new Nc(b,new D),b=new va(k,n,new D,p);l=new wa(k,n,l,new D,p)}else n=new Bc(b,new D),b=new qa(n,new D),l=new xa(n,l,new D);e.push({environment:g,measurementStrategy:b});e.push({environment:q,measurementStrategy:l});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Oc(s.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=m.request("context"),e=new Pc(s.getWindow(),e),g=new Qc(s.getWindow(),
new D);e.accepts()?(d=new Rc(s.getWindow(),new D),d=new xa(g,d,new D),d={environment:e,measurementStrategy:d}):(e=new qa(g,new D),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ca=function(a){return{resolve:function(){var b=e(a).findFirst(function(a,b){return b.environment.accepts()});if(e.isDef(b))return b}}},Ec=function(a){var b=!1,c,d={winDimensions:K({scrX:0,scrY:0,width:0,height:0}),adDimensions:K({scrX:0,scrY:0,width:0,height:0}),containerDimensions:K({scrX:0,scrY:0,width:0,
height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,posViewState:k.NA,adCompCount:1},f=function(a){return a?new K({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):K({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:f(a.windowDimensions),adDimensions:f(a.adDimensions),containerDimensions:f(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:e.isDef(a.percentageInView)?a.percentageInView:
k.PIV_NA,reason:a.outOfViewReason||"",obstructed:e.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,m.trigger("delayedViewabilityReady"))};return{create:function(b){var f=d;if(e.isDef(c))if(a.environment.supportsAdContainerGeometry())f=
c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||75<=c.percentInView)f=c;return f},start:function(){var b;e.isDef(a)&&e.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},xa=function(a,b,c){var d=!1,f=!1,g=!1,q,l,n,p,v=function(){if(!e.isUndef(l)){var a=[],b,v;d?(f?(v=!1,b=100):(v=p,b=n),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(v=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));
g=!0;l.shouldDelegateToDomBasedViewability=v;l.percentageInView=b;l.viewState=50>b?k.OUT_OF_VIEW:k.IN_VIEW;l.outOfViewReason=a.join(".");q=l;c.trigger("measurementChanged",q)}},s=function(a){l=a;n=a.percentageInView;p=a.shouldDelegateToDomBasedViewability;v()},r=function(a){a=a.eventType;"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);v()};return{start:function(){m.trigger("addOutputItem",
{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(s);a.start();b.addVideoPlaybackEventListener(r);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return g}}},Pc=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;
a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,m.trigger("adImpression"))})}catch(d){}}}},Rc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Nc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||
{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";e(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateAvidOutOfViewReasons:d}},ta=function(a,b){function c(a,b,c){c=q(b,c);a=f(a,b,c);return a.width*a.height}var d=function(a,b){var c=Math.max(a.x,
b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},f=function(a,b,c){a=d(b,a);return d(c,{x:0,y:0,width:a.width,height:a.height})},g=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},q=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(d,n){if(e.isDef(d)&&e.isDef(n)){var p=d.viewport,v=d.computedAdContainer,
m=v.obstructions,r=m&&0<m.length,w=d.originalAdContainer,t=n.adGeometry,B=d.detectionMethod,A=0,p={x:0,y:0,width:p.width,height:p.height},u=g(w,t),H=d.outOfViewReason,F=0,G=0,V=r||!1;if(n.adFound&&0<d.percentageInView){F=c(p,v,u);r?(A=q(v,u),A=f(p,v,A),A=g(v,A),A=a.calculateObstructedArea(A,m)):A=0;G=A;A=Math.round((F-G)/(u.width*u.height)*100);r&&0===G&&(V=!1);for(var t=V,M,r=0,G=b.getConfig(u).numberOfSlices,y=s.floor(u.height/G)||1,m=[],F=t?a.getObstructionStatusBySlice(G):[],L,r=0;r<G;r++)M=u.y+
y*r,r==G-1&&(y=u.y+u.height-M),M={x:u.x,y:M,width:u.width,height:y},L=c(p,v,M),M=1==L/(M.width*M.height),m.push(M);if(t)for(v=s.min(F.length,G),r=0;r<v;r++)m[r]=m[r]&&!F[r];v=m}else v=n.adFound?b.getConfig(t).defaultSliceArray:void 0;return{windowDimensions:p,containerDimensions:w,adDimensions:u,percentageInView:A,viewState:50<=A?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=A?"":H||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:B,isObstructed:V,sliceStatus:v}}}}},Kc=function(){return{accepts:function(){return t.isAvidNative()}}},
Mc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Lc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},va=function(a,b,c,d){var f,g,q,l=function(){if(e.isDef(f)&&e.isDef(g)){var a=d.calculateGeometricMeasurement(f,
g);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},n=function(a){f=a;l()},p=function(a){g=a;l()};return{start:function(){m.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(n);a.start();b.addAdGeometryMeasurementChangedListener(p);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},
isMeasurable:function(){return q}}},ua=function(a){var b=[],c;return{calculateObstructedArea:function(d,f){var g,q,l,n;q=f&&0<f.length;var p;if(q){p=Math.round(d.width);var k=Math.round(d.height);g=Array(p);for(l=0;l<p;l++)g[l]=Array(k);p={matrix:g,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:p,height:k}}else p={};g=p;k=p=0;if(q){for(;p<f.length;p++){q=f[p];l=k=g;var m=q;g=Math.max(l.x,m.x);q=Math.max(l.y,m.y);n=Math.min(l.x+l.width,m.x+m.width);m=Math.min(l.y+l.height,m.y+m.height);
l=n-g;n=m-q;l=0<l?l:0;n=0<n?n:0;g-=k.x;q-=k.y;l=g+l;n=q+n;for(g=Math.round(g);g<Math.round(l);g++)for(m=Math.round(q);m<Math.round(n);m++)void 0!==k.matrix[g]&&void 0===k.matrix[g][m]&&(k.matrix[g][m]=1,k.obscuredPixelCount+=1);g=k}k=g.obscuredPixelCount;p=g;if(e.isUndef(p.matrix)||0===p.matrix.length)c=[];else{q=0;n=!1;g=p.matrix[0].length;l=p.matrix.length;n=a.getConfig({height:g}).numberOfSlices;for(var m=s.floor(g/n)||1,r=[],w=0;w<g;w++){n=!1;for(var t=0;t<l;t++)if(1===p.matrix[t][w]){n=!0;break}q++;
n&&(w+=m-q,q=m);if(q==m||w===g-1)r.push(n),q=0}c=r}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Gc=function(a,b){var c=m.request("omidAdSessionContext"),d=function(a){a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:f(a.data.adView.reasons)};
b.trigger("containerGeometryMeasurementChanged",a)},f=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";e(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);
a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:f}},Hc=function(){var a=m.request("omidAdSessionContext");return{accepts:function(){return a&&a.isNative}}},Ic=function(a,b){var c=m.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};
return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Jc=function(){var a=m.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},wa=function(a,b,c,d,f){var g=!1,q=!1,l,n,p,v,s,r=function(){if(!(e.isUndef(n)||e.isUndef(p)||e.isUndef(v))){s=!0;var a=f.calculateGeometricMeasurement(n,p),b=g&&
q,c=g&&50<=a.percentageInView,m={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:g,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(m.percentageInView=100);b||c?m.viewState=k.IN_VIEW:(m.viewState=k.OUT_OF_VIEW,m.outOfViewReason=a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);l=m;d.trigger("videoGeometryMeasurementChanged",
l)}},t=function(a){n=a;r()},u=function(a){p=a;r()},B=function(a){v=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(g=!1);r()};return{start:function(){m.trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(u);
b.start();c.addVideoPlaybackEventListener(B);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return s}}},sa=function(a,b,c){var d,f=function(){var b=a.find(),f,l=!0;e.isDef(b)?(f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height}):l=!1;if(b=l)b=f,b=!e.isDef(d)||!1!==e(b).compareTo(d);b&&(d=f,c.trigger("mobileAppGeometryChanged",{adGeometry:f,
adFound:l}))};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Oc=function(a,b,c){return{accepts:function(){var d=e(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Qc=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,
adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(g){}},f=function(){var b=a.mraid;return e(b).isObj()&&e.isFunction(b.isViewable)},g=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},q=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){g()}):
g())},l=function(){c||q()};return{start:function(){var b=!0;if(e.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;m.trigger("addOutputItem",{output:e.stringifyTriState(b)},"mi",{type:"impression"});b?m.trigger("exec","mraid.js",l):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Oa=function(a,b,c){var d={},f=function(c){var d=e.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){var b=r[c];a.skipAsFraudulent()||m.trigger("notify",b)});
return d};(function(){c&&e(c).map(function(a,b){d[a]=f(b)})})();return{getCallbacks:function(){return d}}},Ia=function(){var a=new Q({tiv:[1E4]}),b=e([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=s.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==r.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ha=function(a,b){var c,d,
e;c=a.on("everySecond");var g=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3];var q=[2E3,5E3,15E3];c?(c=new Q({tiv:d}),d=d[0]):g?(c=new Q({tiv:q}),d=q[0]):(c=new Q({tiv:e}),d=e[0]);e={5E3:"_onInViewMRC5",15E3:"_onInViewMRC15"};e[d]="_onInViewMRC";return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Ka=function(a,b){var c;c=a.on("everySecond");
var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],q=[1E3,5E3,15E3],l=[2E3,5E3,15E3],n=function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new Q({tiv:g}):d?new Q({tiv:l}):new Q({tiv:q});m.provide("isFullyInViewProvider",{isFullyInView:n});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:n,applies:function(){return e},
minUnit:1E3}},Ja=function(a,b){return{timeInViewThresholds:new Q({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Ma=function(a,b){var c,d,f=s.getMaxNumber(),g=b.isVideo();c=new Q(a);d={};e.isDef(a.rts)&&(d={timThreshold:a.rts});return{timeInViewThresholds:c,type:k.DT_CODES.CUSTOM,
rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,k,m=b.adDimensions.area(),r=1===b.tabHidden,t=s.max(b.fullPercentInView||0,b.percentInView);c=e(a.thresholds).findFirst(function(a,b){d=b.lb||0;k=b.ub||f;if(m>=d&&m<=k)return!0});c=!r&&t>=c.piv;g&&(c=c&&b.isVideoPlaying);return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},La=function(a,b,c){var d=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",
k=e(a.customViewability).isArray()&&0<a.customViewability.length,l=c.on("customMetric"),n=c.on("groupmCM"),p=function(a,b){var c,l,k,p,q;c=e(b.mediaTypes).contains(d);l=e(b.distributionChannels).contains(f);k=e.isDef(b.deviceGroups)?e(b.deviceGroups).contains(g):!0;p=O.contains(b.id,"fiv");q=O.contains(b.id,"groupmCM");p=!p;q&&(p=n);return p&&c&&l&&k};return{resolve:function(){var b=[],c;l&&k&&(c=e(a.customViewability).filter(p),e(c).each(function(a,c){b.push(c)}));return b}}},Q=function(a){e(a.tiv).isArray()?
a=a.tiv:"string"===typeof a.tiv?(a=a.tiv.split("|"),a=[8E3,1E3*parseInt(a[0])]):a=[1E3*a.tiv];return{timeThresholds:a}},Ra=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},Qa=function(a,b,c,d){var f,g,k,l,n,p=function(a,b){return!b&&a},v=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},s=function(a){var b=0,p=1===a.tabHidden,m=a.isVideoPlaying,s=a.isSoundOn,t=a.isVideoPlayingInFullscreen;
e(a.sliceStatus).each(function(a,b){k(b,p,m,t)?f[a].mark():f[a].stop();l[a]=f[a].getTotalTime()});r("slcVt",l);d&&(e(a.sliceStatus).each(function(a,b){v(b,p,m,t)&&s?g[a].mark():g[a].stop();n[a]=g[a].getTotalTime()}),r("slcVtVol",n));a=e(l).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});e.isUndef(a)&&c.doEligibleJobs(b)},r=function(a,b){var c={};c[a]=b;m.trigger("addOutputItem",{output:c},{minDt:!1})},t=function(a){!f&&a.sliceStatus&&(f=[],g=[],l=[],n=[],e(a.sliceStatus).each(function(a){f.push(new Z(1));
l.push(0);d&&(g.push(new Z(1)),n.push(0))}))},u=function(a){e.isUndef(a.sliceStatus)||(f||t(a),s(a))};return{start:function(){k=d?v:p;a.addMeasurementChangedListener(u)}}},Na=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},tb=function(a,b,c,d,f,g,q,l,n,p,m,r,u,w,z){var B,A,N=!1,H=t.isVideo(),F=l.request("mobileApp");f=t.isDeviceTypeGroupMobile();n=c.hasFlashEnabled();c.getDocumentMode();m=X();m=c.browserIs(k.BROWSERS.GECKO)||
c.browserIs(k.BROWSERS.IE)&&g.on("rattie")||m.applies(c,g,t);var G=t.xDomainIframe&&!m,y=!f&&G&&n&&!g.bootstrapOn("killFlash"),M=new ma(10),C=function(){T();L()},L=function(){g.on("viewabilityready")&&!N&&(d.send(k.DT_CODES.VIEWABILITY_READY),l.trigger("measurable"),N=!0)};l.on("delayedViewabilityReady",C);l.on("delayedViewabilityReadyCallOnly",L);var T=function(d){d=d||!1;try{M.start();var e,f,n,m;if(b.hasMeasurementStrategy())f=F.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},
d):b.getScreenLocationInfo(u.collect(),d);else{f=u.collect();if(F.isMobileAppEnvironment())f.viewState=k.NA,f.method=k.NA,f.percentInView=k.NA;else if(y){B=B||new Kb(ka,f.adDimensions,C,g,r,c)||{};n=B.checkViewable();t.usesGroupMLegacyCustomMetric()&&(A=A||new Hb(Gb,f.adDimensions,C,c,g,q,p,r)||{},m=A.checkViewable(),f.fullPercentInView=m.pct,f.useCocoa=y);if(1!==f.tabHidden||n.str===k.NA)f.viewState=n.str;f.percentInView=n.pct}else G&&(f.viewState=k.NA,f.percentInView=k.PIV_NA);H&&!t.isAvid()&&z.setVideoSpecificScreenEventFields(f)}e=
w.registerLocation(f);d||a.trigger("measurementChanged",f);M.stop();var v=s.round(M.getTime()/M.getCount());p.addItem({output:v},"lt",{type:k.DT_CODES.UNLOAD});return e}catch(L){l.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:T,cleanupPixelGrids:function(){e([B,A]).each(function(a,b){b&&"function"===typeof b.removePixels&&b.removePixels()})},needsFlash:function(){return G},useFlash:function(){return y},stringifyPingTimes:function(){return g.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
H?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&c.hasIntersectionObserver(),d=!y&&!d&&!e&&!a;return F.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){F.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};P("viewabilityLoopLifecycle",["viewability",
"features","context","browser"],function(a,b,c,d){var f,g=Sc(c),q=[new Tc,new Uc(g)],l=function(){return e(q).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},n=function(){var a=new Y(k.DT_CODES.VIDEO_EVENTS);m.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:r.videoId,msg:"unloadComplete",messageType:"misc"};s.getWindow().postMessage(JSON.stringify(a),"*")})};m.once("startViewabilityLoop",function(){var b;m.request("ids").impressionIsIdentifiable()&&(f=Sb(a.checkScreenLoc,
g.getPollingFrequency()),(b=l())?b.start(f):f.start(!0),y.addEvent(C,"beforeunload",function(){m.trigger("adSessionComplete")},!1))});m.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||n();m.trigger("unload");f&&f.stop();a.cleanupPixelGrids();m.trigger("endAdSession");m.trigger("stopAdTalk")})},{tier:k.TIERS.VIEWABILITY});var Sc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Uc=function(a){var b,
c,d,e=function(e){d=1>e;!c&&d?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!d&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0))},g=function(a){e(a.percentInView)};return{applies:function(a,b,c){var d=m.request("mobileApp");a=(new ra(b,a,c,d)).accepts();return b.on("viewabilityOptimization")&&!a},start:function(a){b=a;b.start(!0);m.on("IOPivChange",e);m.on("newScreenEvent",g)}}},Tc=function(){var a,b,c=function(c){1>c?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0));return a};return{applies:function(a,
b,c){var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,c)&&c.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);m.on("IOPivChange",c)}}},Zc=function(a,b,c,d,f,g){var q,l,n,p,v,x,E,w,z,B=u.getElementsWindow(b);u.getElementsDocument(b);m.provide("iframeCalculatorHelper",Vc(B));var A=Wc(b,d),N=k.AD_IDENTIFIER+"-"+r.asid,H=!1,F=K({}),G=t.isDeviceTypeGroupMobile(),V=t.usesGroupMCustomMetricMobilePassThru(),M,D=function(){if(!q)if(q=A.calcDims(b,d,n),c===k.DETECTION_METHODS.VIDEO&&
t.embedded){var a=q,e=(new K(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){m.trigger("error",k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},L=function(){var b,d=t.xDomainIframe&&H;b=G&&H&&n.isReady();b=d||b;d=A.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?l=n.getPiv():e.isUndef(l)&&(b=!G&&(t.friendly||e.isDef(C.mozInnerScreenX))&&f.on("offscreen"),w=D(),E=new K(u.calcWinDims()),
x=new K(b?u.calcMonDims():{}),z=d?A.getClippedDims():F,l=a.calcPercentInView(w,E,x,z));return l},T=function(){return a.calcInitialViewState(L())},ya=function(){return b===C?!1:D().isHidden()},I=function(a,b){return t.isVideo()?s.getDoc().body:a.document&&a.document.body?a.document.body:b};(function(){var c=s.getWindow(),e=s.getDoc(),f=b===c,g=e.body,l=new X,k=m.request("browser"),q=m.request("features"),r=m.request("context"),w=!t.xDomainIframe,x=I(b,d),e=f&&g?e.body:b;M=t.friendlyIframe?c.frameElement:
e;y.addEvent(e,"click",function(){m.trigger("adComponentClicked")});y.addEvent(e,"mouseover",function(){m.trigger("adComponentMousedOver")});l.applies(k,q,r)?(n=qc(b,w),n.start(),H=!0,V&&(p=new za(Xc,D(),x))):V&&(v=new Yc(a))})();return{mark:function(){u.setAttributeOf(M,N,"")},cleanup:function(){u.removeAttributeOf(M,N)},isNode:function(a){return b===a},isHidden:ya,isObstructed:function(){return!1},getDims:D,getPercentInView:L,getLocationState:T,getOnPageViewability:function(){return ya()?k.OUT_OF_VIEW:
T()},getDetectionMethod:function(){return c},getContainerDims:function(){return A.allowsOptimization?q:K(d)},refresh:function(){z=w=E=x=l=q=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==C&&c&&c!==J&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;p&&p.isReadyToMeasure()?a=p.getSliceStatus():t.friendly&&v&&e.isDef(w)&&(a=v.getSliceStatus(w,E,x,z));return a}}},$c=function(a,b){var c=[],d,f=e([]),g=function(){return c[0]&&
c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},q=function(d,l,n,p){var q=g()||0===c.length;d=Zc(a,d,l,n,b,p);g()&&(n=c.shift(),f=e(c),n.cleanup());c.push(d);f=e(c);q&&d.mark();q&&l!==k.DETECTION_METHODS.AD_PLACEHOLDER&&m.trigger("primaryadfound",d)},l=function(){if(d)return d;var a,b=!1,c=0,e=0;f.each(function(d,f){var g;g=f.getDims();g.hasValidDims()&&(a=f.getPercentInView(),b=a!==k.NA,g=g.area(),c+=g,e+=a/100*g)});return d={totalArea:c,totalInView:e,hasMeasurement:b}},n=function(){var a;
a=l();a=a.hasMeasurement?s.round(a.totalInView/a.totalArea*100):k.PIV_NA;isNaN(a)&&(a=0);return a},p=function(){var c=l().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!t.isVideo();return a.calcInitialViewState(n(),c)},v=function(a){var b=-1;f.each(function(c,d){d.isNode(a)&&(b=c)});return b},r=function(a){return function(){return c[0]&&c[0][a]()}};m.on("adComponentAdded",function(a){e(a).each(function(a,b){-1===v(b)&&q(b,k.DETECTION_METHODS.MUTATION)})});m.on("adComponentRemoved",function(a){e(a).each(function(a,
b){var d=v(b);-1<d&&c.splice(d,1)})});return{getDims:r("getDims"),isObstructed:r("isObstructed"),getDetectionMethod:r("getDetectionMethod"),getContainerDims:r("getContainerDims"),getViewState:p,getPercentInView:n,isHidden:r("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},refresh:function(){d=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:q,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=k.OUT_OF_VIEW_REASONS;e&&(a=d||p(),a!==k.OUT_OF_VIEW&&a!==k.PARTIAL_VIEW_MINUS||
b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:r("getSliceStatus")}},ad=function(a){var b=!1;if(!e.isUndef(C.MutationObserver)){var c=new MutationObserver(function(a){s.execAtEndOfThread(function(){b&&e(a).each(function(a,b){b.addedNodes.length&&m.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&m.trigger("adComponentRemoved",b.removedNodes)})})}),
d=function(){b=!0;s.setTimeout(function(){b=!1},40)};m.on("adComponentClicked",d);m.on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(J.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},s.getDoc())}},hd=function(a,b){var c=[bd()],d=[da(),cd(),dd(),ed(),fd(),gd()],c=c.concat(d);return e(c).findFirst(function(c,d){return d.isApplicable(a,b)})},dd=function(){var a,b,c,d=function(a){a?a&&c&&(s.execAtEndOfThread(function(){m.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ba();var c=u.crossQuerySelector(ba().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Aa=function(a){var b;a=u.findChildWithLargestContent(a||r.contextNode.parentNode);1<u.getNodeArea(a)&&!a[k.IAS_DETECTOR]&&(b=a);return b},fd=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,
find:function(){return C},isApplicable:function(){return t.embedded},getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},id=function(){var a,b=s.getDoc().scripts,c=function(){a||(a=e(b).findFirst(function(a,b){return O.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),
g=/;(\d+);/;e&&e.src&&(b=e.src.match(g)[1]);return"#ftdiv"+b}}},jd=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&O.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},kd=function(){var a,b,c=s.getDoc(),d=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=s.getWindow(),n=a.friendlyIframe&&s.getWindow().frameElement,n=n&&K(n).isOneByOne(),k=function(){var a=s.getDoc().scripts;return e(a).findFirst(function(a,b){return O.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!e(c.EBG.ads).isEmpty();return b.on("sizmek")&&k&&c&&n&&d()&&f()},getCssSelector:f}},ba=function(){var a,b=m.request("features");a||(a=[kd(),jd(),id()]);return e(a).findFirst(function(a,d){return d.isApplicable(t,b)})},ed=function(){var a,b=function(){s.execAtEndOfThread(function(){m.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=oa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},oa=function(){var a,b=function(){var b;(b=r.contextNode.parentNode)&&O.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},da=function(){var a=m.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){return Aa(s.getDoc().body)},getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},bd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(r._cl_adpath);b&&(a=u.getParent(b),1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},gd=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Aa,getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},cd=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:m.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return r.contextNode.parentNode},allowForAdContainerChange:!0}},Wc=function(a,b){var c,d;c=[ld(),md(),nd()];
d=e(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=od();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},nd=function(){return{calcDims:function(a,b){var c,d,e=new K(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&u.nodeIsInWindow(a,s.getTop());a=!u.elementIsEmbedded(a);
return b||a}}},md=function(){var a=m.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&u.elementIsEmbedded(a)}}},ld=function(){var a=m.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new K(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,s.getTop()),e=t.isCeltra()&&u.elementIsEmbedded(a);return d||e}}},od=function(){var a;return{calcDims:function(b,c,d){d=e.isDef(d)?d.getAdNodeDimensions():void 0;a&&e.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=X();var c=m.request("browser"),d=m.request("features"),e=m.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},Vc=function(a){var b,c,d,f=m.request("features"),g=m.request("browser");a=a||s.getWindow();var q=function(b,c){b=b||a;c=c||{top:0,left:0,width:s.getMaxNumber(),height:s.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,l=e.length;g<l;g++)if(e[g]==b){d=e[g];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=s.min(c.width,d.width),c.height=s.min(c.height,d.height)}catch(r){m.trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==s.getTop()&&q(b.parent,c)}return c},
l=function(){var l,p={};try{var r,x,E,w,z,B,A=s.getMaxNumber(),N=s.getMaxNumber();t.friendly?(r=q(),E=r.left,w=r.top,A=r.width,N=r.height,x=u.browserWindowPosition(),z=x.scrX+E,B=x.scrY+w):f.on("rattie")&&g.browserIs(k.BROWSERS.IE)?(d=d||m.request("ieXDomainViewability"),c=d.determineFramePosition(),z=c.scrX,B=c.scrY):e.isDef(a.mozInnerScreenX)&&(z=s.round(a.mozInnerScreenX),B=s.round(a.mozInnerScreenY));var p={scrX:z,scrY:B,iFrameClippingWidth:A,iFrameClippingHeight:N},H,F,G=b||u.getIeDimObj(a);
b=G;e.isDef(a.innerWidth)?(H=a.innerWidth,F=a.innerHeight):G&&e.isDef(G.clientWidth)?(H=G.clientWidth,F=G.clientHeight,0===H&&0<G.offsetWidth&&(H=G.offsetWidth),0===F&&0<G.offsetHeight&&(F=G.offsetHeight)):a.frameElement&&e.isDef(a.frameElement.clientWidth)&&(H=a.frameElement.clientWidth,F=a.frameElement.clientHeight);l=H;p.height=F;p.width=l}catch(y){m.trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return p};return{calcDims:function(){return new K(l())},getClippedDims:function(){var a=l();return new K({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},nb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new pd:new qd(a,b,c)}}},qd=function(a,b,c){var d,f=r&&r.contextNode&&r.contextNode.parentNode?r.contextNode.parentNode:null,g=$c(b,c),q=function(){var a,b,f;d=d||hd(t,c);a=d.find();!a&&d.usePlaceholder?l():a&&(a=e(a).isArray()?a:[a],b=d.getAdContainer(),f=d.allowForAdContainerChange,e(a).each(function(a,c){g.addAdComponent(c,e.resolve(d.detectionMethod),
b,f)}))},l=function(){var a;g.hasAd()||(a=u.getPlaceholderSpan(),f.insertBefore(a,r.contextNode.nextSibling),g.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};ad(a);return{find:function(){g.isUsingPlaceholder()||!g.hasAd()?q():g.refresh();return g},getDetectionMethod:function(){}}},pd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},Ua=function(a){var b,c=[],d=a||C,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},k=function(){var a,b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,C.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},Ta=function(a){var b=new rd,c=new sd;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){m.trigger("error",k.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
td={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!e(a).findFirst(function(a,c){return-1!==s.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!e(a).findFirst(function(a,c){var d;d=!1;var f=s.getWindow();e.isDef(f.navigator)&&e.isDef(f.navigator.userAgent)&&(d=(d=f.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!e(a).findFirst(function(a,
c){return e.isDef(O.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!e(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return e.isDef(a)&&-1!==a.indexOf(c)})})}}},Ba=function(){var a=function(a,c){var d,e=td[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return e(b).map(a).join("")}}},ud={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},rd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=r.hasOwnProperty("serverSideAppDetection")&&0!==r.serverSideAppDetection.length?!0:Ba().process(ud);b()&&m.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},sd=function(){var a=[],
b=[],c=function(b,c){var e,k=Ba().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),e=c);return e};return{detect:function(){b=e(vd).map(c);0<b.length&&m.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&e.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},vd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],W=function(){var a=
k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},wd=function(){var a,b,c=0,d=-1,f=0,g=m.request("browser"),k=function(){var a,b;a=m.request("pageUrls").getDetectedURLs();a=e(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return e.isDef(a)};b=s.setInterval(function(){var a=s.now();d=a-f;f=a;c++;10<=c&&b&&s.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=u.calcMonDims().height,m=g.getUserAgent(),m=m&&null!==m.match(/(FBAN)/)?1:0,r=g.getUserAgent(),r=r&&null!==r.match(/(iPad)/)?1:0,t=k()?1:0,w=g.getUserAgent(),w=w&&null!==w.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=s.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*m-0.874412*
r+0.646972*t+0.28118*w+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:m,mbip:r,mbhs:t,mbbr:w,mblr:d,mbp:e};b&&s.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Fc=function(a,b,c){var d,f,g,q,l,n=[],p=r.contextNode.parentNode,v=0,u=0,E=!1,w=!1,z=new wd,B=function(){var a=n.length-1,b=-1;-1<a&&(b=n[a].piv);return b},A=function(){m.trigger("delayedViewabilityReadyCallOnly")},N=function(a){y.whenReady(function(){f=new za(xd,a,s.getDoc().body)})},H=function(){f.removePixels()},
F=function(){var a=z.getDebugState(),b=B();e.isUndef(a)&&(a={});a.mbm=e.fromBoolToNum(w);a.mbrd=e.fromBoolToNum(E);a.mbtg=e.isDef(p.tagName)?p.tagName:"na";a.mbaf=e.isDef(g)?g:"na";a.mbad=e.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=e.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{m.trigger("addOutputItem",{output:a},b),m.trigger("addOutputItem",{output:-101},"pingTime",b),m.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var p;p=e.isDef(d);if(c||
!b.adDimensions)return b;p||(g=b.method,d=b.adDimensions,d.isMrcLarge(),N(d));if(e.isUndef(f)||!f.isReadyToMeasure())p=!1;e.isUndef(q)&&p&&(q=z.isLikelyToProduceFalsePositive(d));if(w=!q&&p){var r;p=f.getPercentInView();var L=B(),H=1===b.tabHidden,F=b.adDimensions.isMrcLarge()?30:50;u=s.now()-v;r=0<v?900>u:!0;v=s.now();0===b.adDimensions.area()&&(p=0);r||(p=0);var y=p;n.push({tm:t.getTagTime(),piv:y});3<n.length&&n.shift();0===p&&0<L&&(r&&(r=n.length-1,y=!0,2<=n.length&&-1<r&&(y=0===n[r].piv&&0===
n[r-1].piv),r=!y),r&&(p=L));a?(e.isUndef(l)&&(l=m.request("video")),l.setVideoSpecificScreenEventFields(b),p=b.isVideoPlayingInFullscreen?!0:!H&&p>=F&&b.isVideoPlaying):p=!H&&p>=F;b.viewState=p?k.IN_VIEW:k.OUT_OF_VIEW;b.percentInView=B();L=[];H=e(b.reason);F=k.OUT_OF_VIEW_REASONS;p||L.push(F.GEOM);H.contains(F.HIDDEN)&&L.push(F.HIDDEN);H.contains(F.OBSTRUCTION)&&L.push(F.OBSTRUCTION);b.reason=L;b.sliceStatus=f.getSliceStatus();E||(E=!0,s.execAtEndOfThread(A))}else b.viewState=k.NA,b.percentInView=
-1;return b},start:function(){m.on("endAdSession",H);c&&s.setTimeout(F,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return w},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},ra=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,g=a.bootstrapOn("mobOrTab"),m=a.on("ios"),l=b.browserIs(k.BROWSERS.WEBKIT),n=9<=b.getIOSVersion(),p=d.isMobileAppEnvironment();return e&&g&&m&&l&&n&&!p},isImmediate:function(){return!1},
start:function(){}}},xd=function(a,b,c,d,f,g){var m,l=r.birthdate+""+s.round(1E6*s.random()),n=101,p,v,t,u=!1,w=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,g=(new Date).getTime(),l=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(l)};a.requestAnimationFrame(l);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-g}}catch(k){b.body.setAttribute("data-err",k.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},z=function(a,b){t||(n=a,t=b)},B=function(){var a,b,c;if(t)return!1;if(v)return!0;try{if(p.contentWindow&&p.contentWindow.document&&p.contentWindow.document.body){c=p.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&z(104);(b=c.isReady?c.isReady():!1)&&(v=c.isInView?c.isInView:void 0)&&z(105)}}catch(d){z(106,d)}return e.isDef(v)},A=function(a,b,c){var g=J.createElement("iframe");g.id=l;e(g.style).mixin({position:"absolute",width:d+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var n=g.style;g[k.IAS_DETECTOR]="true";n.left=b;n.top=c;a.appendChild(g);p=g;z(102);a=p;try{var m=a.contentWindow,q=w();m.document.open();
a.contentWindow.document.write(q);m.document.close()}catch(r){z(103,r)}return g}(a,b,c);return{isInView:function(){var a,b,c=!1;s.now();B()&&(a=v(!0),c=a.isInView,u=!1,m&&(b=20*m.rate+m.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,u=!0)),z(107),m=a);return c},isNotReadyToReport:function(){return!B()},createdElement:p,remove:function(){A.parentNode&&A.parentNode.removeChild(A)},getStatus:function(){return n},getError:function(){return t},isReadingInvalid:function(){return u},getRate:function(){return p.contentWindow&&
p.contentWindow.document&&p.contentWindow.document.body&&p.contentWindow.document.body.getRate?p.contentWindow.document.body.getRate():-1},percentInView:g}},za=function(a,b,c){var d,f=b.getRounded(),g=[],k=!1;b=W().getConfig(f);var l=b.percentInViewSliceArray,n=1==b.numberOfSlices,p={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},m=function(){var a;if(!k)for(k=!0,a=0;a<g.length;a++)if(g[a].isNotReadyToReport()){k=!1;break}return k},r=function(a){var b=[],c=0;s.floor(a.height/l.length);var d=
s.floor(a.width/2-1);e(l).each(function(e,f){c=s.floor(a.height*f);c===a.height&&(c-=2);b.push({y:s.floor(c)+"px",x:s.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},u=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},w=function(a,b){var c=0;b&&(a.reverse(),e(a).map(function(a,b){b.percentInView=100-b.percentInView}));e(a).findFirst(function(a,b){b.isInView&&(c=s.max(c,b.percentInView));
return!b.isInView});return c},z=function(){var a,b,c,d=[];p.mbs=[];e(g).each(function(b,c){a=c.isInView();p.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=w(d,!1);c=w(d,!0);return s.max(b,c)};(function(){d=n?u(f):r(f);var b=d.get();e(b).each(function(b,d){var e=new a(c,d.x,d.y,d.width,d.height,d.percentInView);g.push(e)})})();return{getPercentInView:function(){var a=m(),b=z();p.mbrd=a?1:0;b!=p.mbp&&p.mbivs.push([t.getTagTime(),b]);p.mbp=b;return a?b:-1},removePixels:function(){e(g).each(function(a,
b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){p.mbm=1;g&&0<g.length&&(p.mbpr=[],p.mbir=[],e(g).each(function(a,b){p.mbpr.push(b.getRate());p.mbir.push(b.isReadingInvalid()?1:0)}));return p},isReadyToMeasure:m,getSliceStatus:function(){var a;g&&0<g.length&&(a=[],e(g).each(function(b,c){a.push(c.isInView())}));return a}}},Yc=function(a){var b=W();return{getSliceStatus:function(c,d,e,g){var k,l=[];k=c.getRounded();c=k.height;var n=k.scrY,p=new K({scrX:k.scrX,width:k.width}),m=b.getConfig(k).numberOfSlices;
p.set("height",s.floor(c/m));for(var r=0;r<m;r++)p.set("scrY",s.ceil(n+c/m*r)),k=100===a.calcPercentInView(p,d,e,g),l.push(k);return l}}},Xc=function(a,b,c,d,f){var g=r.birthdate+""+s.round(1E6*s.random()),m=101,l,n,p,v=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{var c;b.body.setAttribute("data-st","iasInit");var d;(new Date).getTime();b.body.isInView=function(a){return{isInView:d,lastUpdateTimestamp:0}};b.body.getPiv=function(){return c};b.body.isReady=
function(){return void 0!==c};(function(){var e=b.createElement("DIV");b.body.style.width="100%";b.body.style.height="100%";b.body.style.margin="0px";e.style.position="absolute";e.style.width="100%";e.style.opacity="0";e.style.height="100%";e.style.zIndex=-999;e.style.top="0px";e.style.left="0px";b.body.appendChild(e);(new a.IntersectionObserver(function(a){a=a.pop();a=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(a)&&(a=0);c=
a;d=0<c},{threshold:[0,1]})).observe(e)})()}catch(e){b.body.setAttribute("data-err",e.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},t=function(a,b){p||(m=a,p=b)},u=function(){var a,b,c;if(p)return!1;if(n)return!0;try{if(l.contentWindow&&l.contentWindow.document&&l.contentWindow.document.body){c=l.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&t(104);(b=c.isReady?c.isReady():
!1)&&(n=c.isInView?c.isInView:void 0)&&t(105)}}catch(d){t(106,d)}return e.isDef(n)};(function(a,b,c){var p=J.createElement("iframe");p.id=g;e(p.style).mixin({position:"absolute",width:d+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var n=p.style;p[k.IAS_DETECTOR]="true";n.left=b;n.top=c;a.appendChild(p);l=p;t(102);a=l;try{var m=a.contentWindow,q=v();m.document.open();a.contentWindow.document.write(q);m.document.close()}catch(r){t(103,r)}return p})(a,
b,c);return{isInView:function(){var a;a=!1;u()&&(a=n(!0),a=a.isInView,t(107));return a},isNotReadyToReport:function(){return!u()},createdElement:l,remove:function(){l.parentNode&&l.parentNode.removeChild(l)},getStatus:function(){return m},getError:function(){return p},isReadingInvalid:function(){return!1},getRate:function(){return k.NA}}},yd=function(){return{decorateContextParams:function(a,b){try{var c=m.request("adNode"),d;if(d="adImpression"===a)d=m.request("adNode").hasAttribute("data-ias-autoplay");
d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(e){m.trigger("error",k.ERROR_CODES.AUTOPLAY_DETECTION)}}}},zd=function(){return{listenForResult:function(){m.on("videoBlockResult",function(a){var b=m.request("adNode"),c=!1,d="blockAd"+r.videoId;"failed"===a.action&&(c=!0);if(b&&e.isDef(b.blockAd))b.blockAd(c);else if(b&&e.isDef(b[d]))b[d](c)})}}},Ad=function(a,b){var c,d,f,g,k,l=m.request("videoTranslator"),n=m.request("videoAutoplay");f=l.translate(a.messageType);g=function(a){a=
a.eventData||{};a=e({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=e(a).mapToObj(c));return b}(a);n.decorateContextParams(f,g);d={t:a.time-r.birthdate,tp:f,sl:b};e(d).mixin(g);e(d).mixin(k);return c=e({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},
indicatesFullscreen:function(){var a=s.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===f&&"normal"===g.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(f)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){var a=function(){m.trigger(f,g,k)};"adImpression"===f?s.execAtEndOfThread(a):a()},toString:function(){return"{"+e(d).toParams()+"}"}}).mixin(d)},
Bd=function(){var a=[];return{registerEvent:function(b,c){var d=new Ad(b,c);a.push(d);return d},toString:function(){return"{"+e({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"}}},Cd=function(){var a,b,c,d=function(d){c=e.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&m.trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;d()},q=function(a){a=(new Ca).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){m.on({adVideoStart:g,adImpression:g,volumeChanged:q,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",function(a){var c=m.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Dd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ca=function(){return{getVolumeFromContext:function(a){var b,c=-1;e.isDef(a)&&(e.isDef(a.volume)?
c=a.volume:e.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},kb=function(a,b,c){var d="IASid"+a,f="getIasVidBridgeVersion"+a,g,q,l,n,p=[],v=k.OUT_OF_VIEW,u=!1,E=!1,w=!1,z=!0,B=new Bd,A=Cd(),C=new zd,H=function(b){u=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=B.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(E=!0,v=w?k.IN_VIEW:!1):d.indicatesNotPlaying()?(E=!1,v=k.OUT_OF_VIEW):d.indicatesFullscreen()?(w=!0,v=E?k.IN_VIEW:k.OUT_OF_VIEW):
d.indicatesNormalSize()&&(w=!1,v=E?!1:k.OUT_OF_VIEW));b=d;p.push(b);n&&J();return b},F=function(b){var c,g,k=ha().wrapToGlobal(H),l=function(a){e.isStr(a)&&(m.provide("vc",function(){return a}),m.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[f]||b.getIasVidBridgeVersion,c=e.isFunction(g)&&"2"===g.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),u=!0,l(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",n,r)}},G=function(){var c=function(a){return e(e(a).toArray()).findFirst(function(a,
b){return e.isFunction(b[d])})};g||(e([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=s.getDoc().querySelectorAll(b);return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},r));return g},D=function(){var a=G();a&&!u&&F(a);return a},I=function(a){a=(new Ca).getVolumeFromContext(a);z=e.isDef(a)?0<a:!1},J=function(){e(p).each(function(a,b){b&&(e.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&m.trigger("adSessionComplete"))});
p=[];n=!0};(function(){y.addEvent(s.getWindow(),"message",function(a){H(a)});m.on({volumeChanged:I});m.provide({videoEventsString:B,videoVersion:function(){var a,b=D();try{a=b.getVersion()}catch(c){a=-1,m.trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new Dd},videoAutoplay:function(){return l=l||new yd},adNode:D});D();C.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:D,getViewStateOverride:function(){return v},isHandshakeComplete:function(){return u},
triggerInitializationEvents:J,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;a.isVideoPlaying=!0;a.isSoundOn=z;a.isVideoPlayingInFullscreen=!1;if(v){if(v===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:v;a.isVideoPlaying=v===k.IN_VIEW}w&&E&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Ed=function(){return new ea(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,
b){return a.timestamp-b.timestamp},k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},zb=function(){var a,b,c={},d=0,f=function(c){if(c||a)d+=5,b.onTick(d,function(){a?f():m.trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},g=function(g,k,m,q){g=c[g];q?(e.isDef(g[k])||(g[k]=[]),g[k].push(m)):g[k]=m;b&&b.isActive()||(b=new na,d=0,f(!0),b.start());a=!0},q=function(b){e(c).each(function(d,f){var g=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};e(g).isEmpty()||(m.trigger("addOutputItem",{output:g},d,k),
c[d]={});a=!1})};return{start:function(){m.on("preSendDt",function(a){q(a);b&&b.kill()});m.on("addThrottledProp",g)},addFieldTypes:function(a){e(a).each(function(a,b){c[b]={}})}}},Fb=function(){var a={},b=function(b){a[b]||(a[b]=new ma(1,r.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();m.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){m.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Fd=function(){return new ea(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,
function(a,b){return a.timestamp-b.timestamp},k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},lb=function(a){var b={},c=a instanceof Array&&a.length;c&&(e(a).each(function(a,c){b[c.getType()]=c}),m.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(m.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:k.DT_CODES.PERFORMANCE}),m.trigger("sendMinDt",k.DT_CODES.PERFORMANCE))}catch(e){}}));m.provide("perfActive",function(){return c});return{isActive:c}},
ea=function(a,b,c){var d=0,f=[],g=function(){var a,c={};f.sort(b);e(f).each(function(b,e){a&&(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){f.push(a)},toString:function(){return e(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return f.length===c}}},mb=function(){function a(){}a.build=function(){var a=[],c=m.request("vc"),d={jv3:Da,av3:Da,jvw:Fd,avw:Ed};c&&d[c]&&a.push(d[c]());return a};return a}(),Da=function(){return new ea(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,
function(a,b){return a.code-b.code},k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},R={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){m.trigger("measureTime",R.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(C,"load",function(){m.trigger("measureTime",R.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new na;a.onTick({4:function(){m.trigger("markTime",R.IDS.IN_BROWSER_DELAY)},5:function(){m.trigger("measureTime",R.IDS.IN_BROWSER_DELAY)}});
a.start()}};P("postMessageDetector",[],function(){var a=!1,b="pmdetector"+r.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=s.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");s.execAtEndOfThread(function(){m.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"pom",e.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});P("safeFrameDetector",[],function(){m.trigger("addThrottledProp",
k.DT_SLOT.ENVIRONMENT,"sf",e.stringifyTriState(t.isSafeFrame()))},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var xb=function(){var a=r.asid,b=r.cookieBaseURL,c=r.protocol,d=function(a){e(a).each(function(a,b){m.trigger("notify",b)})},f=function(){var e;e=new S(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();m.trigger("jsonp",e,d,!0);m.trigger("updateDtCount")};return{start:function(){m.on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&
a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},yb=function(a,b,c,d,e,g,q){var l=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(n){try{var p=d.baseUrl,s,t,u=g.getDocumentMode();"number"===typeof u?(t=2E3,8===u?t=4E3:8<u&&(t=8E3)):t=l(r.sp_imp_maxLength,2E3);s=t;t=p;var w=p.length,z,y,A=l(r.sp_imp_jsInfo_minLength,0),u="";try{z=s-w-A,0<z&&(y=Gd(n,z,14,b.on("partialUrls")),u+=y.join("&"))}catch(C){a.add(k.ERROR_CODES.IMPRESSION_URLS)}p=t+u;n=p+="&"===p.slice(-1)?"":"&";
var D,w="";try{D=s-p.length,w+=Hd(D,"adsafe_jsinfo=",a,b,c,e,g,q)}catch(F){a.add(k.ERROR_CODES.JSINFO),w+="adsafe_jsinfo=e:"+a.toString()}p=n+w;d.macroUrl&&(p+="&"===p.slice(-1)?"":"&",p+=d.macroUrl);d.sendImpression(p);m.trigger("impressionsent")}catch(G){__IntegralASDiagnosticCall("impsend",G,r)}}}},Hd=function(a,b,c,d,f,g,m,l){return function(c){var d=c.primary.join(","),g=b,k=0,l=function(a){if(a)return","+a};g.length+d.length+5<=a&&(g+=l(d),f.impressionIsIdentifiable(!0),e(c.secondary).each(function(b,
c){g.length+c.length+5<=a?g+=l(c):k+=1}));return g+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};t.isDomless()?b=l.checkScreenLoc(!0)||a:d.on("impFailSafe")?s.getDoc().body&&!l.useFlash()&&(b=(b=l.checkScreenLoc(!0))?b:a):e.isDef(s.getDoc().body)&&!l.useFlash()&&(b=l.checkScreenLoc(!0));l.isImmediatelyMeasurable()||l.requiresDelayedViewabilityEvent();a=b;var v=a.viewState;b=f.getAvidIds();v=["id:"+r.asid,"c:"+f.getCacheBustId(),"sl:"+v,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&
e.isDef(b)&&(v.push("abi:"+b.bundleIdentifier),v.push("apn:"+b.partner),v.push("apv:"+b.partnerVersion));a=Id(a,c,d,f,g,m,l);return{primary:v,secondary:a}}())},Id=function(a,b,c,d,f,g,m){var l=[];l.push("mn:"+r.mn);l.push("pt:"+function(){var b=m.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());l.push(e(g.params()).toParams());c.on("mrcAudit")&&l.push("dvs:"+s.getDoc().visibilityState);f.iterate(function(a,b){var c=!b.props||e.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;
(c||d)&&l.push(a+":"+b.output())});b.toString()&&l.push("e:"+b.toString());l.push(c.output());l.push("uf:"+(m.useFlash()?1:0));l.push("tt:"+r.mode);l.push("et:"+(s.now()-r.birthdate));c.on("swapids")?l.push("oid:"+r.oid):l.push("uid:"+d.unq);l.push("v:17.4.88");l.push("sp:"+(r.isSplitMode?1:0));l.push("ct:"+t.getPageTime());l.push("dtm:"+(c.on("postDts")&&y.getXHR2()?"p":"i"));l.push("gtpl:"+("true"===r.getTpl?1:0));c.on("resolution")&&(l.push("wr:"+e(u.windowSize()).toArray().join(".")),l.push("sr:"+
e(u.screenSize()).toArray().join(".")));r.mainScriptTime&&l.push("mst:"+(r.mainScriptTime-r.birthdate));return l},Gd=function(a,b,c,d){var f,g=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(f=e(a).map(function(a,b){if(k(b))return b}),a=e(a).map(function(a,b){if(!k(b))return b}),e(f.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,m;m=24+g.join("&").length+k.length+c;m=b-m;d&&m<f.length&&0<m&&(f=f.substr(0,m));if(f.length||""===e.val||""===e.type)f="adsafe_url="+
f+"&adsafe_type="+k,k=g.join("&").length,f.length+k<=b&&g.push(f)}));return g},vb=function(){return{isApplicable:function(a){a=s.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=s.getWindow();a=Jd(a.navigator.plugins);var b=a.hash(),c=b.join(".");m.trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),m.trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Md=function(a,b){return{start:function(){try{var c=
Kd(),d=c.getMethodName(a),e=new S(b.getEnabledScriptUrl(a)),g=Ld,q=s.getDoc();(new g(q.body||q.head||q.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(l){m.trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},Kd=function(){var a=function(a,c,d){a===r.asid&&(d.unshift(c),m.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:r.asid,constant:k,features:b,context:t,dtBaseURL:r.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},
Eb=function(){return{start:function(a,b){e(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Md(d,b).start()})}}},Jd=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,""),f=O.hashCode(f),f=e.toBase(f,62).slice(-4),d.push(f);return d},decode:function(b){var c,d;c=s.floor(s.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Ld=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var e;c=u.createHiddenIframe();
c.setAttribute("src","about:blank");(a||r.contextNode.parentNode).appendChild(c);e=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");e.open().write(b);e.close()})(b);return{getWindow:function(){return c.contentWindow}}};
try{Ea()}catch(Nd){__IntegralASDiagnosticCall("main",Nd,r)}};try{(function(){var r=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,r,r.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
