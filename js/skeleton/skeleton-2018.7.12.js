var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		cocaPuffsPath: "",
		debug: "false",
		killPhrases: "",
		jsDiag: 'false',
		version: '17.4.124',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.95.js", main: "static.adsafeprotected.com/main.17.4.124.js"},
		protocol: 'https',
		jsref: "",
		asid: "294781c9-85ef-11e8-8897-0025903700d2",
		allowViewability: "true",
		jsFeatures: "cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1",
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
		mn: "app08sje",
		mobOrTab: false,
		mobFwUrl: "https://mobile.adsafeprotected.com/internal/monitoring/app/initial/33642/3584127/",
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

__IntegralASConfig.initialize=function(n,x,K){function Ka(){var g;n.perf.markStart(ha);O.startSystem();l=O.getAggregator();l.provide({omidAdSessionContext:{}});g=__IASOmidVerificationClient;l.provide({omidVerificationClient:g});g=[{environment:new ia(g),adSessionReadyStrategy:new La(ja,g)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){ja()}}}];(new Ma(g)).resolve().adSessionReadyStrategy.start();n.perf.markEnd(ha)}function ja(){var g,a;n.perf.markStart(ka);a=
X.instantiateModules();g=X.preImpression(a.mDataTransfer,a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,u);X.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,g,a.mVideo);X.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,u);n.perf.markEnd(ka)}var l,X=function(){function g(a){var b=new Na(a,
u),c=new Oa,t=new Pa(a,u),m=Qa(a,u),r=(new Ra(n,u,a)).resolve(),p=[b],g=[];m.applies()&&p.push(m);t.applies()&&p.push(t);c.applies(a,u)&&p.push(c);f(r).each(function(a,b){p.push(new Sa(b,u));g.push(b.id)});0<g.length&&l.trigger("addOutputItem",{output:g},"metricIdList",{type:k.DT_CODES.UNLOAD,asION:!0});return p}function a(a,b,c,t){var m=g(a);return f(m).map(function(m,p){var g;g=new Ta(p,b);var f=(new Ua(c,a,p.rts)).getCallbacks(),f=new Va(t.createPingJobs(p.type,p.timeInViewThresholds,f,p.metricId));
g=p.thresholdType===k.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Wa(g,p.minUnit,f,u.isVideo()):new Xa(g,new $(p.minUnit),f);g.start();return g})}function b(a,b,c,t,m,r,p,g,q,G){try{n.perf.markStart(la),n.tpiLookupURL&&Ya(p,g).init(n.tpiLookupURL),u.isDomless()||G.isStarted()&&G.sendOriginList(),O.runAll(),s.execAtEndOfThread(function(){var r;try{n.perf.markStart(ma);r={output:(new Date).getTime()-m};a.addItem(r,"sinceFw",{type:k.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},
"readyFired",{type:k.DT_CODES.ADTALK});n.perf.markEnd(ma);var g,p;n.isSplitMode&&(p=n.protocol+"://"+n.sp_cdnScripts.main,n.perf.markResource(Za,p));n.impUrl&&n.perf.markResource($a,n.impUrl);g=n.perf.getData();l.trigger("addThrottledProp",k.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(u)&&c.sendAdTalkCall()}catch(w){t.add(k.ERROR_CODES.ADTALK_DELAY)}}),n.perf.markEnd(la)}catch(L){t.add(k.ERROR_CODES.EVENT_LOOP_ONE)}}function c(a,c,h,t,m,r,g,f,q){var k;"true"!==n.minimizeCalls&&(k=(new Date).getTime(),
s.execAtEndOfThread(function(){b(a,c,h,t,k,m,r,g,f,q)}))}return{instantiateModules:function(){var b,c,h,t,m,r,g,f,q={};n.perf.markStart(na);l=O.getAggregator();q.mFeatures=l.provide("features",ab());l.provide("mobileApp",function(){return b=b||new bb(q.mFeatures)});l.provide("avidJsClient",function(){return c=c||new cb(s.getWindow())});l.provide("context",u);q.mBrowser=l.provide("browser",(new db).createInstance());q.mErrors=eb();q.mIds=l.provide("ids",fb());q.iOutput=new gb(l);h=oa();q.mComm=(new hb).createInstance(q.mErrors,
h);q.viewabilityMeasurement=(new ib(new jb(q.mIds),q.mFeatures,q.mBrowser)).create();q.mFeatures.on("swapids")&&(n.oid=n.asid,n.asid=q.mIds.unq);q.mAdTalk=(new kb).createInstance(q.mFeatures);t=lb();h=mb(l);m=l.provide("mPage",(new nb).createInstance());q.mAncestorOrigins=ob();q.mPageUrls=l.provide("pageUrls",(new pb).createInstance(q.mAncestorOrigins,s));r=qb();l.provide("ieXDomainViewability",rb(q.mBrowser));g=sb(q.mBrowser);q.mVideo=l.provide("video",!u.isVideo()||u.isAvid()||u.isOmid()||u.isInMobiMraidVideo()?
{}:tb(n.videoId,q.mFeatures,r));ub(vb.build());g=(new wb).createInstance(q.mErrors,g,q.mFeatures);m=(new xb).createInstance(g,q.mErrors,m,u);f=l.provide("jobFactory",yb());q.mDataTransfer=zb(g,q.mErrors,q.mFeatures,q.mIds,q.iOutput,q.mBrowser,r,t);t=Ab(q.mErrors,q.mFeatures,l,h);q.mMode=Bb(t,q.mFeatures,q.viewabilityMeasurement.isImmediate());q.mViewability=l.provide("viewability",Cb(new D,q.viewabilityMeasurement,q.mBrowser,q.mDataTransfer,q.mFeatures,l,q.iOutput,m,r,q.mVideo));a(q.mFeatures,q.mViewability,
h,f);q.loopDelay=pa();q.mDataTransfer.setViewabilityMod(q.mViewability);n.perf.markEnd(na);return q},preImpression:function(a,b,c,t,m,r,g,f,q,G){var L,M,A,s,u;n.perf.markStart(qa);try{c.isApplicable(G)&&(c.start(),t.addItem(c.getFrameMap(),"fm"),q.on("fm2")&&t.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),q.on("idMap")&&(L=c.getIdMap())&&t.addItem(L,"idMap"))}catch(z){m.add(k.ERROR_CODES.ADTALK_GENERAL)}try{r.isApplicable(g,q,G)&&r.start(),u=f.detectTopURL(),q.on("exch")&&(M=(new Db).createInstance(m,
t),M.parse(u)),A=Eb(),A.isApplicable(q)&&A.start(q),G.usesGroupMCustomMetric()&&Fb(),s=Gb(),s.isApplicable(q)&&(s.start(),l.trigger("sendCookie"))}catch(C){m.add(k.ERROR_CODES.IMPRESSION_LEADUP)}n.perf.markEnd(qa);return u},sendImpression:function(a,b,c,t,m,r,g,w,q){try{Hb(a,b,c,t,m,r,g).send(w),f.isFunction(q.triggerInitializationEvents)&&q.triggerInitializationEvents()}catch(k){__IntegralASDiagnosticCall("impsend",k,n)}},postImpression:function(a,b,h,t,m,r,g,f,q,G,L,l,A){try{n.perf.markStart(ra);
var s=Ib();s.start();s.addFieldTypes([k.DT_SLOT.IM,k.DT_SLOT.FRAUD,k.DT_SLOT.ENVIRONMENT,k.DT_SLOT.FRAUDEXP]);var u=Jb(a,b,h);u.isApplicable(t)&&u.start();var z;t.bootstrapOn("getTpl")&&t.on("usetpl")&&(z=Kb(m,r,g,b,f),z.init());c(f,q,G,g,t,m,r,b,l);L&&L.start&&L.start();A.isDomless()||Lb().start(["sca","xsca","rsrch"],t);Mb();O.runTier(k.TIERS.VIEWABILITY);var C=Nb();C.isApplicable(t)&&(C.start(),S.recordBlockingTime(),n.perf.mark(Ob),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());n.perf.markEnd(ra)}catch(I){g.add(k.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(g){return new E(g)},E=function(g){this.iterable=g};E.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};E.prototype.isArray=function(){return this.iterable instanceof Array};E.prototype.isEmpty=function(g){return 0===this.keys(g).length};E.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};E.prototype.map=
function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};E.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};E.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=f(c).toION(g,a);return d?m:(g[b]||b)+":"+m}));return c+b.join(",")+d};E.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};E.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};E.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};E.prototype.mapToObj=
function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};E.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};E.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};E.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};E.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};E.prototype.keys=function(g){var a=
[];this.each(function(b){a.push(b)},g);return a};E.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};E.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};E.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};E.prototype.toArray=function(){return this.map(function(g,a){return a})};E.prototype.JSONStringify=function(){var g,
a,b=!1;x.Prototype&&x.Prototype.Version&&-1===x.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};E.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<
g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);
return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||x;return function(){var b=this,h=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,h)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=
a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};var O=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,r,p){p=p||{};var w,q,k=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},L=function(){if(!w){var a=[];w=!0;k(["features","browser","context"]);p.emits&&(c.events=new D);if(!p.applies||p.applies.apply(p,b))q=!0,a=f(e).map(function(a,
b){return g.request(b)},!0),a.push(c),f(c).mixin(r.apply({},a))}};(function(){var b=p.tier;f.isDef(b)&&(a[b]=a[b]||new aa,a[b].push(L))})();g.provide(d,function(){var a;L();q&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new sa;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),k={MRC_LARGE_AD_SIZE:242500,
FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",
AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",
COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",
MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",
OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,
0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},ha="mf",ka="cm",na="in",qa="pr",ra="po",Ob="bl",la="lo",ma="lt",Za="md",$a="id",Y=function(){return{applies:function(g,a){var b=l.request("mobileApp");return(g.browserIs(k.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(k.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()&&
a.on("chromeNativeIO")}}},Fb=function(){var g,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.trigger("sendDt",k.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){g=a.getDims().area()>=k.MRC_LARGE_AD_SIZE;d()});l.on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},lb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=
f(c).compareTo(a);d&&(d.t=u.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},sa=function(){var g=new Pb,a=new D;return f(g).mixin(a)},D=function(){var g={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new aa;g[a].push(b,c)};return{on:function(a,e){var h={};e?h[a]=e:h=a;f(h).each(c);f(h).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=
f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=g[b])&&h.run.apply({},c)}}},ba=function(){var g=function(a,c,d){var e,h=c.length,t=v.isWindow(a)?a.frames:v.getChildWindowsOf(a);d&&d(a,c);if(t&&t.length){for(a=0;a<t.length;a++)(e=t[a])&&v.isWindow(e)&&(c[h]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=
[];a(function(a){var b;if(b=v.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},aa=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},Va=function(g){var a={};return{doEligibleJobs:function(b){f(g).each(function(c,d){var e=d&&d.getTime();f.isDef(e)&&b>=e&&!a[e]&&(d.getTask().call(),
a[e]=!0)})}}},Qb=function(){var g,a=new ta,b=function(b,d,e,h){var t,m,r,g;if(JSON&&JSON.parse)try{t=JSON.parse(b.data),m=b.source,g=f.noop,d(t)&&(h&&(r=h(m,t))&&(g=function(){a.send(function(){return r},m)}),e(b,t,g))}catch(w){t&&l.trigger("error",k.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(h){b(h,a,d,e)};y.addEvent(x,"message",g)},stop:function(){g&&y.removeEvent(x,"message",g);g=null}}},ta=function(){var g=function(a){return f(a).isObj()?[a]:(new ba).getFrames(a)},
a=function(a){return f(a).mapToObj(function(a,b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var t;t=f.resolve(b,d)||{};t.sentTime=s.now();t=a(t);d.postMessage(f(t).JSONStringify(),"*")})}}}},Rb=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},gb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+
c+' must have "output" method');this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var r=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){r({output:b},a,e)}):r(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});
return{addItem:e,filterOutput:function(a,b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Pb=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,
c){c?g[b]=c:f(b).each(a);return c}}},xb=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new Sb:new Tb(g,a,b,c)}}},Tb=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),h=a.getOutOfViewReasons(),t=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:F(v.calcWinDims()),r=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!r.hasValidDims())return{viewState:k.NA,posViewState:k.NA,embedded:u.embedded,winDimensions:m,adDimensions:r};!0===t&&h.push(k.OUT_OF_VIEW_REASONS.FOCUS);
return{winDimensions:m,adDimensions:r,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?k.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:h.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(t),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Sb=function(){return{collect:function(){return{}}}},Ub=function(g){g=
g||f.identity;var a=[],b=s.now(),c=function(){var c=s.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},ua=function(g,a){var b=g||1,c=0,d=0,e,h=0;return{start:function(){0===c%b&&(e=s.now())},stop:function(){var t=e||a;0===c%b&&(h+=s.now()-t,d++);c++},getTime:function(){return h},
getCount:function(){return d}}},va=function(){var g,a=0,b=0,c=new D(!0),d=function(){g&&(a++,c.trigger(a),b>a?s.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,s.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},Vb=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=s.setInterval(g,c))},e=function(a){a&&g();s.clearInterval(b);b=null};return{start:d,
stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},$=function(g){var a,b,c=0,d=u.getTagTime(),e=0,h=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=u.getTagTime();h=!1},mark:function(){a=h?u.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=u.getTagTime();h=!0}}},T=function(g,a){var b=g||n.adsafeSrc||n.requrl;b&&0===b.indexOf("http")||(b=n.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],h=b[4],t=b[5],m=g?b[6]:
"",r=a?b[7]:"",p={},w=function(a){f.isDef(a)&&(h=a);return h},q=function(a){f.isDef(a)&&(t=a);return t},k=function(a,b){return a+"="+f(b).toION()},r=r?r.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=p[b])?p[b]=d+c:a&&r.length&&(d=r.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),r=r.replace(d,d+c))},fullDom:c,hostname:e,sub:w,master:q,setParam:function(a,b){p[a]=p[a]||{};f(b).isObj()?f(p[a]).mixin(b):p[a]=b},path:function(a){m=a},toString:function(){var a=
w()?w()+".":"",b=m?"/"+m:"",c;r||!f(p).isEmpty()?(c=f(p).isEmpty()?"":f(p).stringify(k,"&"),c="?"+r+(r&&c?"&"+c:c)):c="";return d+"://"+a+q()+b+c}}},Mb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};(function(){var b;try{if(u.friendly&&!u.isMobileApp()){var c,d;if(c=v.getOurNodeInTop()){var e=v.getAncestorNodes(c);d=f(e).map(a)}(b=d=d&&g(d))&&l.trigger("addOutputItem",
{output:b},"slid",{type:k.DT_CODES.ADTALK,asION:!0})}}catch(h){l.trigger("error",k.ERROR_CODES.AD_SLOT_ID)}})()},ob=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=s.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",k.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:k.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",k.DT_CODES.THIRD_PARTY)}}},Kb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(d){try{a.diagnostic("c");var h=d.length,r=0,p=0;e(h,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",
c.getCacheBustId()),function(){e(h,r,++p)},!0);e(h,++r,p)})}catch(w){b.add(k.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+n.asid;g.jsonp(a,h)}catch(c){b.add(k.ERROR_CODES.AT_INIT)}}}},Ab=function(g,a,b,c){return{enabled:"true"===n.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===n.accountForSadImps&&c.measure(a),n._onAPIResult&&n._onAPIResult(a)}catch(e){g.add(k.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag",
"bapiClient")}}}},db=function(){return{createInstance:function(g,a,b,c){return u.isDomless()?new Wb:new Xb}}},Xb=function(){var g=k.BROWSERS,a,b=function(){var a="0",b=s.getWindow(),c=function(a){return a.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var d=s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(e){a="6"}}catch(h){}a=c(s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(g){try{b.navigator.mimeTypes[k.FLASH_MIME].enabledPlugin&&
(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(f){}}return a},c=function(){f.isUndef(a)&&(a=b());return a},d=function(a){return e()===a},e=function(){var a="u",b=s.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:
f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},h=function(){var a=!1,b=s.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:d,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=s.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=s.getWindow();return!(!a||!f.isFunction(a.postMessage))},
getFlashVersion:c,getDocumentMode:function(){var a=s.getDoc();return a&&a.documentMode?a.documentMode:k.NA},getBrowserType:e,getUserAgent:h,params:function(){var a=e(),b=c(),h;h=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var p=k.NA,w=s.getDoc(),q=w.createElement("div");if(d(g.IE))try{if("-ms-ime-align"in w.documentElement.style)p="11";else for(q.style.behavior="url(#default#clientcaps)",w=0;w<h.length&&!(p=q.getComponentVersion(h[w],
"componentid").replace(/,/g,"."));w++);}catch(l){}h=p;p=k.NA;q=s.getWindow();f.isDef(q.navigator)&&f.isDef(q.navigator.appName)&&(p=q.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,abv:h,an:p}},isAndroidWebViewBrowser:function(){var a=h(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return f(b).findFirst(function(b,c){return N.contains(a,c)})};return N.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=h())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&
0<b.length&&parseInt(b.toString()));return b}}},Wb=function(){var g=function(){return!1},a=function(){return k.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasFlashEnabled:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},hb=function(){return{createInstance:function(g,a){return u.isDomless()?
new Yb(a):new Zb(g,a)}}},Zb=function(g,a){var b=function(a,b){var c,d,e=n.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===n.forceAppend?"script"!==a?(c=K.createElement("DIV"),c.innerHTML=d,e.appendChild(c.childNodes[0])):
(c=K.createElement("SCRIPT"),c.src=b,e.appendChild(c)):K.write(d)},c=function(a,b,c){var d=!c&&y.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=v.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=K.createElement("script");c=c||n.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?
a({iasImpId:n.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},h=function(b,c,e,h){d(a.wrap(b,c,e,h))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:h});return{addNode:b,send:c,exec:d,notify:e,jsonp:h}},Yb=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,
b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:n.asid}):a&&"string"===typeof a&&b(a)},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},u=function(){var g="undefined"===typeof window,a="undefined"!==typeof x&&"undefined"!==typeof top&&x!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!g&&f.isDef(s.getWindow().mraid)},d=function(){var a=!1;if(!g)var b=
(a=s.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},e=function(){return n.mobOrTab},h=function(a){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(b,c){return N.contains(c.id,a)}).length},t=function(){return h("grpm")||n.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=b}return a},
friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return s.now()-n.birthdate},getPageTime:function(){var a=k.NA;!g&&f.isDef(x.chrome)&&f.isDef(x.chrome.csi)&&f.isFunction(x.chrome.csi)&&(a=s.round(chrome.csi().pageT));return a},isVideo:function(){var a;if(!(a=-1!==n.mode.indexOf("jsvid"))){var b;a=!1;if(!g){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===k.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=l.request("omidVerificationClient"),
a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===k.MEDIA_TYPE.VIDEO),b=a||d());a=b}return a},isMobileApp:function(){return g||f.isDef(s.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;g||(a=(a=n._cl_adpath)&&f.isStr(a));return a},isAvid:function(){return!g&&f.isDef(s.getWindow().avid)},isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return g},isAvidNative:function(){var a=!1;if(!g){var b=l.request("avidJsClient");b.isAvidAvailable()&&
(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===k.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===k.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ca());return a},isMraid:c,isSafeFrame:function(){var a=!1;g||(a=f(s.getWindow().$sf).isObj(!1)&&f(s.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:d,isDeviceTypeGroupMobile:e,usesIASFullyInViewCustomMetric:function(){return h("fiv")||n.use100v},isNativo:function(){var a=!1;g||(a=(a=n._cl_adpath)&&
N.contains(a,".ntv"));return a},usesGroupMCustomMetric:t,isCeltra:function(){var a=!1;g||(a=wa().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return t()&&e()},usesZeroPivCustomMetric:function(){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length}}}(),y={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",
y.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",y.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;
this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=K.defaultView&&K.defaultView.getComputedStyle;b=b||"";d?c=(g=K.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(x.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&
(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(u.isDomless())s.setTimeout(function(){g()},50);else{var b=a||(u.xDomainIframe?K:s.getTop().document),c=function(a){var c=s.setInterval(function(){b.body&&(s.clearInterval(c),a())},50)},d=this;(function(a){var h=function(){a(!0)};f.isFunction(K.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?s.execAtEndOfThread(h):d.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(g)}},
isSandboxed:function(g){var a,b=s.getWindow(),c=!1;if("sandbox"in s.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=s.getDoc();if(g.browserIs(k.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
y.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Z=function(g){var a,b=Z.callTypeCounter,c=[k.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=k.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Z.callTypeCounter={};var zb=function(g,a,b,c,d,e,h,t){var m=0,r=0,p=!1,w=function(a,e,t,g,q,w){t=t||!b.on("postDts");var u=a===k.DT_CODES.DIAGNOSTIC||a===k.DT_CODES.ADTALK||a===k.DT_CODES.SCA||a===k.DT_CODES.XSCA||a===k.DT_CODES.EXTERNAL||a===k.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(u||"n"!==h.getCurrentLoc()))try{var v=n.dtBaseURL,H=new T(v,!0),x=s.now();
l.trigger("preSendDt",a);v||(H.path("dt"),b.on("usedtdomain")&&H.sub("dt"));G(H,a,e);q&&q.field&&H.setParam(q.field,q.value);g||L(H,a);l.trigger("send",H,function(){r+=1;m=s.now()-x;f.isFunction(w)&&w()},t);a===k.DT_CODES.UNLOAD&&(p=!0);d.cleanup()}catch(J){__IntegralASDiagnosticCall("dt-"+a,J),l.trigger("error",k.ERROR_CODES.PHONE_HOME)}};g=function(){p||w(k.DT_CODES.UNLOAD,-1,!0)};var q=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=n.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&
d&&w(k.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},G=function(a,b,e){var t=new Z(b);e=f.isDef(e)?e:t.enumerator;a.setParam("asId",n.asid);e={c:c.getCacheBustId(),pingTime:e,time:u.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},L=function(c,g){var f,p={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();
if(g===k.DT_CODES.CUSTOM||g===k.DT_CODES.UNLOAD||g===k.DT_CODES.VIDEO_EVENTS||g===k.DT_CODES.FULLY_INVIEW||g===k.DT_CODES.PING||g===k.DT_CODES.VIEWABILITY_READY||g===k.DT_CODES.ADTALK)p.clog=t,u.isVideo()&&(f=l.request("videoEventsString"))&&!f.isEmpty()&&(p.ve=f);g===k.DT_CODES.UNLOAD&&(p.ndt=r);-1!==n.mode.indexOf("jsvid")&&(p.vv=l.request("videoVersion"));p.NULL1=b.output();p.NULL2=h.stringify(10);p.em=u.embedded;p.fr=u.friendly;p.e=a.toString();p.tt=n.mode;p.dtt=m;d.filterOutput(function(a){var b=
!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},p);c.setParam("tv",p);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){w(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:q,updateDtCount:function(){r++},unload:g});return{send:w,unload:g,diagnostic:q,setViewabilityMod:function(a){}}},F=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?v.nodeIsHidden(g):0===g.width||0===g.height;return b?
!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=s.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},h=function(){return s.round(a.width)*s.round(a.height)};(function(){var b;g!==x.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=v.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},
toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=k.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},v={findElementsWithSize:function(g){var a=[],b=function(c){1>v.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(y.getStyle(g,"width"))&&
0===a.width,a=0===a.width||0===a.height;g="hidden"===y.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=v.browserWindowPosition(),b=v.windowSize(),g={scrX:s.round(a.scrX),scrY:s.round(a.scrY),width:s.round(b.width),height:s.round(b.height)}}catch(c){l.trigger("error",k.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(u.isDomless())return{width:0,height:0};if(u.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=
top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(x.outerWidth)&&(g.width=x.outerWidth,g.height=x.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(x.screenX)?(g=x.screenX,a=x.screenY):f.isDef(x.screenLeft)&&(g=x.screenLeft,a=x.screenTop);return{scrX:g,scrY:a}},getNodeArea:function(g){var a=
-1;g&&(g=v.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=v.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=K.createElement("span");f(g.style).mixin({width:"0px",
height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=u.friendly&&s.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=s.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(g,
a){var b,c,d,e=1E4,h=1E4;b=y.nodeIsAbsolutelyPositioned(g);d=!v.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!v.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!v.tagNameIs(d,"OBJECT"),c="inline"!==y.getStyle(d,"display"),b&&c&&(b=v.getRect(d),e=b.width<e?b.width:e,h=b.height<h?b.height:h);while(d.parentNode!==K&&d!==a)}return{width:s.round(e),height:s.round(h)}},findChildWithLargestContent:function(g){var a=l.request("mobileApp").isMobileAppEnvironment(),b=function(b){for(var c=b;b.parentNode!==
g&&"inline"!==y.getStyle(b.parentNode,"display");){var d;if(!(d=!a)){d=b.parentNode;var f=!0;if("visible"===y.getStyle(d,"overflow")||"visible"===y.getStyle(d,"overflowX")&&"visible"===y.getStyle(d,"overflowY"))f=!1;d=f}d&&(c=b.parentNode);b=b.parentNode}return c},c=null,d=function(a){var b,c,d=null,r=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var f=a[b],w=v.getNodeArea(f),q;if(q=w>r){q=void 0;if(q=f.parentNode===g)if(q=void 0,q="DIV"===f.nodeName)if(q=void 0,q=""===f.style.backgroundImage){var k=
q=void 0,l=f.childNodes;for(q=0;q<l.length;q++)1===l[q].nodeType&&(k=!0);q=!k}q=!q}q&&(d=f,r=w)}d&&(d.hasValidSizeForMobileApp=1<r);return d}(function(a){var b,c,d,g,f=[],w="iframe img a object embed div".split(" ");b=0;for(c=w.length;b<c;b++){var q=a.getElementsByTagName(w[b]);if(q.length)for(d=0,g=q.length;d<g;d++)f.push(q[d])}return f}(g));d&&(c=b(d),c.hasValidSizeForMobileApp=d.hasValidSizeForMobileApp);return c},screenSize:function(){if(u.isDomless())return{width:0,height:0};var g={width:-1,
height:-1};try{f.isDef(x.screen)&&(g={width:x.screen.width,height:x.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(v.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=s.getTop(),b=s.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;u.friendly&&(g=u.embedded?(g=v.getOurIFrameInTop())&&
g.frameElement:n.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||s.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(v.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&
g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,d=[n.contextNode.parentNode,s.getDoc()];u.friendly&&
d.push(s.getTop().document);if(a&&u.embedded)try{d.push(s.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=v.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=v.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var g=
s.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&v.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&v.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=y.getStyle(g,"width");g=y.getStyle(g,"height");
b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=v.getAttribute(g,"width");g=v.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,h;if(c(b))e=b;else if(h=b.children)for(d=0;d<h.length&&!(e=a(h[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,d="fixed"===y.getStyle(a,"position"),
e="hidden"!==y.getStyle(b,"overflow")&&!d;u.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=v.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return v.getElementsWindow(a)!==s.getTop()},getParent:function(a){return a.parentNode||a.parent}},eb=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=f(a).isObj()?a.errorCode:a;b(a)});
return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Db=function(){return{createInstance:function(a,b){return u.isDomless()?new $b:new ac(a,b)}}},ac=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(n.adsafeSrc,n.requrl,n.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(d){try{var e,
h=c(d),t=h&&h.length&&h.join("|"),m=n.exchList;t&&(e=f(m).map(function(a,b){return 0<=t.indexOf(N.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:k.IMPRESSION_EVENT}))}catch(r){a.add(k.ERROR_CODES.EXCHANGE_PARSING)}}}},$b=function(){return{parse:function(a){}}},ab=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=n.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*s.random());return a[b]},c=
{es:"everySecond",sc:"usesca",ha:"usehaps"},d={},e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(h(b));return c});e.gm=f.fromBoolToNum(u.usesGroupMCustomMetric());return f(b).mixin(e)},h=function(a){a=n[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=f.isStr(a)?[a]:a;return f(a).map(function(a,b){if(f.isDef(n[b]))return 1}).length===
a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=n.sp_cdnScripts&&n.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},sb=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},h=k.NA;d=c?d:e;f.isDef(a)&&a!==k.NA&&-1<a&&(h=a>=d.IN_VIEW?k.IN_VIEW:a<=d.OUT_OF_VIEW?k.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?k.PARTIAL_VIEW_PLUS:k.PARTIAL_VIEW_MINUS);return h},calcPercentInView:function(a,
c,d,e){var h=0,t=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,b){if(b.hasValidDims()){var c=t.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),h=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),f=f-e,c=c-h;t=F({scrX:e,scrY:h,width:0<f?f:0,height:0<c?c:0})}}),h=s.round(t.area()/a.area()*100));return h}}},fb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,
16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*s.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.trigger("error",k.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return n.anId};return{getAsid:function(){return n.asid},getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+
a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||n.advEntityId+"-"+n.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},Ya=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(k.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},bc=function(a,b,c,d){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var e=
a.getTimeInViewInSeconds(),h=a.getTimeInViewForRts();f.isDef(d)&&l.trigger("addOutputItem",{output:d},"metricId",{type:b});l.trigger("sendDt",b,e);if(c[h])c[h]()}}}},yb=function(){return{createPingJobs:function(a,b,c,d){return f(b.getTimeThresholds()).map(function(b,h){return new bc(h,a,c,d)})}}},oa=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},
c=function(){return"__IntegralAS_"+n.asid.replace(/\-/g,"")+"_"+s.round(1E4*Math.random())};return{wrap:function(d,e,h,f){var m=c(),r,p,w;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(r=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],p=r.split("=")[1],w=N.stringToFn(p),d=a(d,r));x[m]=function(a){e(a);h&&w&&w(a);x[m]=void 0};return d=b(d,f,m)},wrapToGlobal:function(a){var b=c();x[b]=function(c){a(c);x[b]=void 0};return b}}},Bb=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,
b){return a+":"+b},","),c=T(a,!0),c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,
impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,m){var r;try{r=d(c,m),a.enabled?l.trigger("jsonp",r,a.callback,!0):l.trigger("send",r,f.noop,!b.on("postMon"))}catch(p){__IntegralASDiagnosticCall("jsvidimp",p,n)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===n.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};
b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",a)});l.on("adImpression",function(c,e){var m;try{var q;if(q=b)q=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;q&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);l.trigger("send",m,f.noop,!0)}catch(k){__IntegralASDiagnosticCall("fwjsvidimp",k,n)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":
"&";return a+b},b=e[n.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&n.mobFwUrl?n.mobFwUrl:a?n.adsafeSrc:n.requrl;a||(b+="?"+n.reqquery);return b}(d),p=f.indexOf("BEGIN__ADSAFE"),w=-1!==p,q=w?f.slice(p):"",a=w?f.slice(0,p):a(f);return{isFW:d,baseUrl:a,macroUrl:q,sendImpression:function(a){var d=function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},
s={execAtEndOfThread:function(a){s.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return x},getTimeoutScope:function(){return u.isDomless()&&u.isOmid()?l.request("omidVerificationClient"):x},setInterval:function(a,
b){return s.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return s.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){s.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){s.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){u.isDomless();return top},getNewActiveXObject:function(a){u.isDomless();return new ActiveXObject(a)},getDoc:function(){u.isDomless();return K},getIntersectionObserver:function(a,b){u.isDomless();
return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},nb=function(){return{createInstance:function(){return u.isDomless()?new cc:new dc}}},dc=function(){var a,b=!1,c=l.request("features"),d=new aa,e=function(){var b;c.on("blur")||c.on("abcAudit")&&923747==n.anId?(b=s.getWindow(),b=u.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?s.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?
s.getDoc()[a.prop]:null;return b},h=function(){var b=s.getWindow(),c=function(){d.run(e())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(s.getDoc(),a.event,c,!0)};a=function(){var a,b="hidden",c="visibilitychange",d=s.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,h){var k=h+"Hidden";f.isDef(d[k])&&(b=k,c=h+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);b||(b=!0,h())}}},cc=function(){return{isHidden:function(){return!1},
onHiddenChange:function(a){}}},pb=function(){return{createInstance:function(a,b){return u.isDomless()?new ec:new fc(a,b)}}},fc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},h=function(){var h,m=function(){var a={};try{a.q=
b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var h=b.getWindow();e=!1;f.isDef(h.navigator)&&f.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},r={};try{r.a=
encodeURIComponent(top.location.href)}catch(p){}try{r.b=encodeURIComponent(parent.location.href)}catch(w){}if(u.embedded){try{r.c=encodeURIComponent(parent.document.referrer)}catch(q){}try{r.e=encodeURIComponent(x.document.referrer)}catch(k){}}try{"jsi"!==n.mode&&(r.d=encodeURIComponent(x.location.href))}catch(l){}try{r.f=encodeURIComponent(n.jsref)}catch(s){}try{h=m(),r.g=encodeURIComponent(h.g||""),r.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(r.g=encodeURIComponent(a.getTopDomain()))}catch(A){}r=
d(r);r=e(r);h=[];for(var B in r)r.hasOwnProperty(B)&&h.push({key:B,val:r[B]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?c:h()}}},ec=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},mb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",n._onSuspicious)},skipAsFraudulent:function(){return b}}},qb=function(){var a=
[],b={},c={sl:"n"},d=0,e,h,t={i:0,o:0,n:0,pp:0,pm:0},m=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},r=function(a,c){var d=new Ub(c);return b[a]=d},p=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",
partialViewMinus:"pm",partialViewPlus:"pp"}[a]},w=function(){f(c).each(function(b,c){t[c]+=a.length?h-d:h});d=h},q=function(b){a.length&&w();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(t[b]+=t.n);c[a]=b});a.length||w()},G=function(a){var c,d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=m(a);var e={sl:p(a.viewState)};h=u.getTagTime();q(e);e.t=h;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,
breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=k.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return c};(function(){r("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=
d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});r("as",function(a){var b=k.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){h=u.getTagTime();w()},registerLocation:function(d){var h,r=!1;c.sl==p(d.viewState)&&a.length?(h=new G(d),a[a.length-1].details=h.details):(h=new G(d),a.push(h),e=d.viewState,r=!0);l.trigger("newScreenEvent",h);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(r&&c.clear(),c.addState(h),a[a.length-
1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(t).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:r,getCurrentLoc:function(){return p(e)}}},N={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=
a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=x,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=s.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},gc=function(){var a=
function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=v.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=v.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,h=function(a){var d=v.tagNameIs(a,"div"),e=v.attributeMatches(a,"class",b);a=v.attributeMatches(a,"id",c);return d&&e&&a};
return{getDFPGoogleDiv:function(a){return v.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=v.getFirstChildElement(b))&&v.tagNameIs(b,"a"),f=v.attributeMatches(b,"href",d),w=v.attributeMatches(b,"target",e);h&&f&&w&&(b=v.getFirstChildElement(b),v.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return v.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},hc=function(){var a=gc(),b=function(a,b){b.tag=v.getTagName(a);
b.size=v.getDimensionFromAttributes(a)||v.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d={type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};O("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!v.isViewportVisible(c,a))return c;if(c!==d&&u.isFriendlyToParent(c))return b(c.parent,
d)},c=function(){var a=s.getWindow();return b(a,s.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=s.getWindow();v.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var ic=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=
a.innerWidth,f=a.innerHeight,r=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(r=!0);r&&!d&&(b(),e(),r=!1);c=a.innerWidth;f=a.innerHeight})}}};O("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),h,t={};d!==c&&(h=f.stringifyTriState(d),t.res1=h,t.ps=h,t.ts=s.now(),t.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",t));c=d}catch(m){l.trigger("error",k.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();
var b=a.getWindowWithHiddenViewport();if(b)ic(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});O("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",k.DT_SLOT.FRAUD,a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,h;if(u.embedded)try{h=n.contextNode.parentNode,b=hc().getDFPValue(h),h={},h.df=b.type,b.size&&(h.sz=b.size.width+"."+b.size.height),b.tag&&(h.dom=b.tag),
c("dfp",h),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.trigger("error",k.ERROR_CODES.HIDDEN)}})()},{tier:k.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var kb=function(){return{createInstance:function(a){return u.isDomless()?new jc:new kc(a)}}},kc=function(a){var b,c,d,e=new sa,h=new ba,t=new lc(e),m=new mc,r=new nc,p=new oc(e,a),w=function(){f.isUndef(d)&&(d=new pc(e));return d},q=function(){e.provide({frameCollection:function(){return t},adProxy:function(){return r},
adTalkMessage:function(a){return new qc(a,e)},adTalkMessageCollection:function(){return m},idMapModule:w,interFrameQuerySelector:function(a){return new rc(a)}})};return{isApplicable:function(a){return f.isDef(x.JSON)&&f.isDef(x.postMessage)&&!a.isAvid()&&!a.isOmid()},start:function(){q();h.traverse(t.addFrame);p.startListening();p.sendToKnownFrames();l.once("stopAdTalk",function(){p.stopListening()})},sendAdTalkCall:p.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new xa(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&
(c=new xa(e,!0));return c},getIdMap:w}},jc=function(){return{isApplicable:function(){return!1},start:function(){}}},qc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();c=l.request("features").on("swapids")?n.oid:n.asid;var h=a||{},f=n.asid,d=d.tagId,m=u.embedded,r=u.friendly,p=n.birthdate;c=c.split("-")[2];var w;u.friendly?w="["+k.AD_IDENTIFIER+"-"+n.asid+"]":(w=s.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,
""))+'"]');return{messageContent:h,srcAsid:f,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:r,srcBirthdate:p,iasCommonId:c,nodeSelector:w,positionStr:e,version:"0.1"}},mc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},sc=function(a,b,c,d){var e,h=a==x;e={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:n.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:
void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||e.isMe||f.isDef(e.selfDescription)}};var t=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},r=function(a){f(e.inbox).find(function(b,
c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){t(b);r(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},lc=function(a){var b=[],c={},d={noMe:!0};return{addFrame:function(e,h,f){var m=a.request("adProxy").getAll();e=new sc(e,h,m,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},xa=function(a,b){var c=function(a,c){var f=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=
d(f,c.getStringifiedPosition());else{var r;r=""+c.getStringifiedPosition();r+=c.isMe?"*":"";r+=f.length?"."+f[0].tagId:"";m+=r}return m}},d=function(a,b){var c="";return c=a.length?c+f(a).stringify(function(a,c){return b+(n.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},pc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=n.contextNode.parentNode,
d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!u.embedded,f="BODY"!==v.getNodeName(c)&&"HEAD"!==v.getNodeName(c),h;if(h=a.srcIsEmbedded){h="0.1"!==a.version;var w=a.nodeSelector&&-1===a.nodeSelector.indexOf(k.AD_IDENTIFIER);h=!(h?w:!a.srcIsFriendly)}e&&f&&!h?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&u.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,
d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==n.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},rc=function(a){var b=new ba,c=function(a){var b=a,c="IFRAME"===v.getNodeName(a),d=v.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return v.querySelector(c(a),b)},e=function(c,e){var m,r,
p;try{r=d(c,e),r||(m=b.getFrames(!0,a),f(m).findFirst(function(a,b){return p=d(b,e)}))}catch(k){}return r||p||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));return c}}},oc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?n.oid:n.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==n.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",
{self:b,unifiedId:b.unifiedId})},t=function(){var c=k.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},m=function(c,d,e){var h,m,n,u,A;try{h=a.request("frameCollection");m=a.request("adTalkMessageCollection");n=d.messageContent.self;m.add(d);var B=h.getMe();B.unifiedId>n.unifiedId&&(B.unifiedId=n.unifiedId);var v;v=s.now()-d.sentTime;d.transferDuration=v;m=u=h.getFrame(n.id);f.isUndef(m)||f.isUndef(m.selfDescription)?(u=u||h.addFrame(c.source,n.id.split("-"),d),u.addInformationFromSrc(d,
n),e()):u.addInformationFromSrc(d,n);(A=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&t()}catch(z){l.trigger("error",k.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:t,sendToKnownFrames:function(){(new ta).send(h)},startListening:function(){c=new Qb;c.listen(e,m,h)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:h}},tc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},nc=function(){var a,b=[],c=function(a){a=
new tc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},rb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(k.BROWSERS.IE)&&y.addEvent(s.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(k.BROWSERS.IE)&&(d=!0,s.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},
uc=function(a,b){var c,d=k.NA,e=d,h=!1,t=!1,m=!1,r=!b,p=function(){var b=s.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&s.execAtEndOfThread(function(){l.trigger("IOPivChange",d)});e=d},{threshold:k.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});r&&s.execAtEndOfThread(function(){d===k.NA&&(d=0)});b.observe(w(a));
r&&s.execAtEndOfThread(function(){u.isBustedIframe()||l.trigger("delayedViewabilityReady")});h=!0},w=function(b){if(!f.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[k.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){t=!0}b&&null!==
b.bodyElement?p():b&&b.document?y.whenReady(p,b.document):t?l.request("errors").add(k.ERROR_CODES.BUSTED_IFRAME_IN_IO):p()},isStarted:function(){return h},getAdNodeDimensions:function(){var a;c&&(a=F({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==k.NA}}},pa=function(){var a=!1;(function(){y.whenReady(function(){l.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};O("loopDelay",[],pa,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},
tier:k.TIERS.VIEWABILITY});var vc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(k.BROWSERS.WEBKIT)}}},wc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Jb=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.trigger("notify",n._onMeasurable))};return{start:function(){var b;b=[xc(),yc(),wc(),vc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,
a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(n._onMeasurable)}}},yc=function(){return{start:function(a){Rb(l,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(k.BROWSERS.WEBKIT)||c)&&u.isVideo()}}},xc=function(){return{start:function(a){l.once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&u.isVideo()}}},zc=function(a,
b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.trigger("adImpression")})}}},Ac=function(a){return{accepts:function(){return a.isAvidAvailable()},
getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&f.isDef(d)&&(c=d.mediaType||k.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Bc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=
f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},Cc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===
c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ia=function(a){var b=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},Dc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=
f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(k.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},Ma=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},La=function(a,b){var c=!1,d=!1,e=l.request("omidAdSessionContext"),f=function(b){"sessionStart"===b.type&&(e.isNative="native"===
b.data.context.adSessionType,(c=!0)&&d&&(x.omidSupported=!0,a()))},t=function(b){e.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});e.isNativeVideo=e.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(x.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(f,"IAS");b.addEventListener("impression",t)}}},Ec=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,
eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Fc=function(a,b){var c,d=function(a){var d,f,m;try{d=a.eventData.percentageInView,f=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,
percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(r){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Gc=function(a,b){var c=function(a){try{var c;"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?
c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(f){__IntegralASDiagnosticCall("omidvideo",f,x.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},ya=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?k.IN_VIEW:k.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":k.OUT_OF_VIEW_REASONS.GEOM;
b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);a.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Hc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,h=function(){return f.isDef(e)};
f.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?d.isImmediate():!0},isMeasurable:function(){return h()?e.isMeasurable():!1},isMediaType:function(a){return h()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&d.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},ib=function(a,b,
c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),e=(new da(e)).resolve(),f=new Ic(e),t=new za(b,c,u,d);return!e&&t.accepts()?new Jc(u.isVideo(),new D):new Hc(e,f,d.isMobileAppEnvironment())}}},jb=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new ia(a),e=[];if(b.accepts()){var f=
new Kc,t=new Lc,m=new Mc(a,new D),f=[{environment:f,measurementStrategy:new Nc(a,new D)},{environment:t,measurementStrategy:new Aa(new ea,s.getWindow(),new D)}],f=(f=(new da(f)).resolve())?f.measurementStrategy:{},r=new Ba(new Ca(new U),new U,t.accepts()),t=new Cc(a,b,n.mode),p=new Da(m,f,new D,r),b=new Dc(a,b,n.mode),a=new Ea(m,f,new Gc(a,new D),new D,r);e.push({environment:t,measurementStrategy:p});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=
l.request("avidJsClient"),d=new Ac(b),e=[];if(d.accepts()){var f=new zc(b,d,n.mode),t=new Bc(b,d,n.mode),m;m=new Ec(b,new D);if(d.supportsAdContainerGeometry()){var r=new Oc,p=new Pc,k=new Aa(new ea,s.getWindow(),new D),q=new Qc(b,new D),r=(r=(new da([{environment:r,measurementStrategy:q},{environment:p,measurementStrategy:k}])).resolve())?r.measurementStrategy:{},p=new Ba(new Ca(new U),new U,p.accepts()),k=new Rc(b,new D),b=new Da(k,r,new D,p);m=new Ea(k,r,m,new D,p)}else p=new Fc(b,new D),b=new ya(p,
new D),m=new Fa(p,m,new D);e.push({environment:f,measurementStrategy:b});e.push({environment:t,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Sc(s.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new Tc(s.getWindow(),e),f=new Uc(s.getWindow(),new D);e.accepts()?(d=new Vc(s.getWindow(),new D),d=new Fa(f,d,new D),d={environment:e,measurementStrategy:d}):
(e=new ya(f,new D),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},da=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});if(f.isDef(b))return b}}},Ic=function(a){var b=!1,c,d={winDimensions:F({scrX:0,scrY:0,width:0,height:0}),adDimensions:F({scrX:0,scrY:0,width:0,height:0}),containerDimensions:F({scrX:0,scrY:0,width:0,height:0}),method:k.NA,viewState:k.NA,percentInView:k.PIV_NA,reason:"",obstructed:k.NA,isHidden:k.NA,tabHidden:k.NA,
posViewState:k.NA,adCompCount:1},e=function(a){return a?new F({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):F({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:e(a.windowDimensions),adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||k.NA,viewState:a.viewState||k.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:k.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:k.NA,tabHidden:k.NA,
posViewState:a.viewState||k.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||
75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Fa=function(a,b,c){var d=!1,e=!1,h=!1,t,m,r,p,w=function(){if(!f.isUndef(m)){var a=[],b,q;d?(e?(q=!1,b=100):(q=p,b=r),50>b&&a.push(k.OUT_OF_VIEW_REASONS.GEOM)):(q=!1,b=0,a.push(k.OUT_OF_VIEW_REASONS.VIDEO));h=!0;m.shouldDelegateToDomBasedViewability=q;m.percentageInView=b;m.viewState=
50>b?k.OUT_OF_VIEW:k.IN_VIEW;m.outOfViewReason=a.join(".");t=m;c.trigger("measurementChanged",t)}},q=function(a){m=a;r=a.percentageInView;p=a.shouldDelegateToDomBasedViewability;w()},s=function(a){a=a.eventType;"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);w()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,
{type:k.IMPRESSION_EVENT});a.addScreenLocationChangedListener(q);a.start();b.addVideoPlaybackEventListener(s);b.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},Tc=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==
a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},Vc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Rc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,
y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:k.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},d=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateAvidOutOfViewReasons:d}},Ba=function(a,b,c){function d(a,b,c){c=m(b,c);a=h(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+
a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},h=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},t=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,p){if(f.isDef(e)&&f.isDef(p)){var w=e.viewport,q=e.computedAdContainer,l=q.obstructions,n=l&&0<l.length,u=e.originalAdContainer,A=p.adGeometry,
B=p.adFound,v=e.detectionMethod,z=0,w={x:0,y:0,width:w.width,height:w.height},C=t(u,A),I=e.outOfViewReason,P=0,H=0,x=n||!1,J,P=1>=A.width*A.height;c&&P&&(B=!1,I=I||"",B||-1!==I.indexOf(k.OUT_OF_VIEW_REASONS.GEOM)||(I=k.OUT_OF_VIEW_REASONS.GEOM+(""!==I?"."+I:"")));if(B&&0<e.percentageInView){P=d(w,q,C);n?(z=m(q,C),z=h(w,q,z),z=t(q,z),z=a.calculateObstructedArea(z,l)):z=0;H=z;z=Math.round((P-H)/(C.width*C.height)*100);n&&0===H&&(x=!1);A=x;n=0;B=b.getConfig(C).numberOfSlices;J=s.floor(C.height/B)||1;
for(var l=[],P=A?a.getObstructionStatusBySlice(B):[],V,n=0;n<B;n++)H=C.y+J*n,n==B-1&&(J=C.y+C.height-H),H={x:C.x,y:H,width:C.width,height:J},V=d(w,q,H),H=1==V/(H.width*H.height),l.push(H);if(A)for(q=s.min(P.length,B),n=0;n<q;n++)l[n]=l[n]&&!P[n];J=l}else B&&(J=b.getConfig(A).defaultSliceArray);return{windowDimensions:w,containerDimensions:u,adDimensions:C,percentageInView:z,viewState:50<=z?k.IN_VIEW:k.OUT_OF_VIEW,outOfViewReason:50<=z?"":I||k.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:v,isObstructed:x,
sliceStatus:J}}}}},Oc=function(){return{accepts:function(){return u.isAvidNative()}}},Qc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Pc=function(){return{accepts:function(){return u.isAvid()&&!u.isAvidNative()}}},
Da=function(a,b,c,d){var e,h,t,m=function(){if(f.isDef(e)&&f.isDef(h)){var a=d.calculateGeometricMeasurement(e,h);t=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},r=function(a){e=a;m()},p=function(a){h=a;m()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.DISPLAY_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(r);a.start();b.addAdGeometryMeasurementChangedListener(p);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return t}}},Ca=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var h,t,m,r;t=e&&0<e.length;var p;if(t){p=Math.round(d.width);var k=Math.round(d.height);h=Array(p);for(m=0;m<p;m++)h[m]=Array(k);p={matrix:h,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:p,height:k}}else p={};h=p;k=p=0;if(t){for(;p<e.length;p++){t=e[p];m=k=h;var q=t;h=Math.max(m.x,q.x);t=Math.max(m.y,q.y);
r=Math.min(m.x+m.width,q.x+q.width);q=Math.min(m.y+m.height,q.y+q.height);m=r-h;r=q-t;m=0<m?m:0;r=0<r?r:0;h-=k.x;t-=k.y;m=h+m;r=t+r;for(h=Math.round(h);h<Math.round(m);h++)for(q=Math.round(t);q<Math.round(r);q++)void 0!==k.matrix[h]&&void 0===k.matrix[h][q]&&(k.matrix[h][q]=1,k.obscuredPixelCount+=1);h=k}k=h.obscuredPixelCount;p=h;if(f.isUndef(p.matrix)||0===p.matrix.length)c=[];else{t=0;r=!1;h=p.matrix[0].length;m=p.matrix.length;r=a.getConfig({height:h}).numberOfSlices;for(var q=s.floor(h/r)||1,
l=[],n=0;n<h;n++){r=!1;for(var u=0;u<m;u++)if(1===p.matrix[u][n]){r=!0;break}t++;r&&(n+=q-t,t=q);if(t==q||n===h-1)l.push(r),t=0}c=l}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Mc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,
detectionMethod:k.DETECTION_METHODS.OMID,outOfViewReason:e(a.data.adView.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:k.OUT_OF_VIEW_REASONS.FOCUS,viewport:k.OUT_OF_VIEW_REASONS.GEOM,clipped:k.OUT_OF_VIEW_REASONS.GEOM,obstructed:k.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:k.OUT_OF_VIEW_REASONS.FOCUS,notFound:k.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:e}},Kc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isNative}}},Nc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",
{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Lc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ea=function(a,b,c,d,e){var h=!1,t=!1,m,r,p,w,q,n=function(){if(!(f.isUndef(r)||f.isUndef(p)||
f.isUndef(w))){q=!0;var a=e.calculateGeometricMeasurement(r,p),b=h&&t,c=h&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=k.IN_VIEW:(l.viewState=k.OUT_OF_VIEW,l.outOfViewReason=
a.outOfViewReason||k.OUT_OF_VIEW_REASONS.VIDEO);m=l;d.trigger("videoGeometryMeasurementChanged",m)}},s=function(a){r=a;n()},u=function(a){p=a;n()},A=function(a){w=a;a=a.eventType;"AdEnteredFullscreen"===a?t=!0:"AdExitedFullscreen"===a?t=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);n()};return{start:function(){l.trigger("addOutputItem",{output:k.MEDIA_TYPE.VIDEO_CODE},k.MEDIA_TYPE_CODE,{type:k.IMPRESSION_EVENT});
a.addAdContainerGeometryMeasurementChangedListener(s);a.start();b.addAdGeometryMeasurementChangedListener(u);b.start();c.addVideoPlaybackEventListener(A);c.start()},getStrategyName:function(){return k.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},Aa=function(a,b,c){var d,e=function(){var b=a.find(),e,m=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},
b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):m=!1;if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);b&&(d=e,c.trigger("mobileAppGeometryChanged",{adGeometry:e,adFound:m}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Sc=function(a,b,c){return{accepts:function(){var d=f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},
Uc=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:k.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",d)}catch(h){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},h=function(){var b=
a.mraid;d();b.addEventListener("viewableChange",d)},t=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},m=function(){c||t()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||v.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",m):t()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Ua=function(a,
b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){var b=n[c];a.skipAsFraudulent()||l.trigger("notify",b)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Oa=function(){var a=new R({tiv:[1E4]}),b=f([k.IN_VIEW,k.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:k.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var d=s.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&
100===d},applies:function(a,b){return a.on("abcAudit")&&925955==n.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Na=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3];var t=[2E3,5E3,15E3];c?(c=new R({tiv:d}),d=d[0]):f?(c=new R({tiv:t}),d=t[0]):(c=new R({tiv:e}),d=e[0]);e={5E3:"_onInViewMRC5",15E3:"_onInViewMRC15"};e[d]="_onInViewMRC";return{timeInViewThresholds:c,type:k.DT_CODES.PING,rts:e,
isInView:function(a){return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Qa=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],t=[1E3,5E3,15E3],m=[2E3,5E3,15E3],r=function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:f}):d?new R({tiv:m}):new R({tiv:t});
l.provide("isFullyInViewProvider",{isFullyInView:r});return{timeInViewThresholds:c,type:k.DT_CODES.FULLY_INVIEW,isInView:r,applies:function(){return e},minUnit:1E3}},Pa=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),type:k.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(k.IN_VIEW+"|"+k.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Sa=
function(a,b){var c,d,e=s.getMaxNumber(),h=b.isVideo();c=new R(a);d={};f.isDef(a.rts)&&(d={0:a.rts});return{timeInViewThresholds:c,type:k.DT_CODES.CUSTOM,rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,p,l=b.adDimensions.area(),q=1===b.tabHidden,n=s.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;p=b.ub||e;if(l>=d&&l<=p)return!0});c=!q&&n>=c.piv;b.method==k.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);h&&(c=c&&b.isVideoPlaying);
return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Ra=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",k=f(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),r=c.on("groupmCM"),p=function(a,b){var c,m,p,k,t;c=f(b.mediaTypes).contains(d);m=f(b.distributionChannels).contains(e);p=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(h):!0;k=N.contains(b.id,
"fiv");t=N.contains(b.id,"groupmCM");k=!k;t&&(k=r);return k&&c&&m&&p};return{resolve:function(){var b=[],c;m&&k&&(c=f(a.customViewability).filter(p),f(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(f(a.tiv).isArray())f(a.tiv).each(function(a,c){b.push(new fa(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new Wc;b.push(new Xc(c,parseInt(a[1].replace("%"))));b.push(new fa(1E3*parseInt(a[0])))}else b.push(new fa(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},
Wc=function(){var a=-1,b=function(b){0<a||(b=f.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};l.on({adVideoStart:b,adDurationChange:b,adRemainingTimeChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},fa=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},Xc=function(a,b){var c=0,d=!1,e=function(a){c=0;0<b&&0<a&&(c=s.ceil(b/
100*a))};e(15);return{getTimeInViewInSeconds:function(){!d&&a.isVideoDurationResolved()&&(d=!0,e(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},Xa=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},Wa=function(a,b,c,d){var e,h,k,m,r,p=function(a,b){return!b&&a},w=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},q=function(a){var b=0,p=1===a.tabHidden,q=a.isVideoPlaying,
l=a.isSoundOn,s=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){k(b,p,q,s)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});n("slcVt",m);d&&(f(a.sliceStatus).each(function(a,b){w(b,p,q,s)&&l?h[a].mark():h[a].stop();r[a]=h[a].getTotalTime()}),n("slcVtVol",r));a=f(m).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});f.isUndef(a)&&c.doEligibleJobs(b)},n=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},s=function(a){!e&&a.sliceStatus&&(e=[],h=[],m=
[],r=[],f(a.sliceStatus).each(function(a){e.push(new $(1));m.push(0);d&&(h.push(new $(1)),r.push(0))}))},u=function(a){f.isUndef(a.sliceStatus)||(e||s(a),q(a))};return{start:function(){k=d?w:p;a.addMeasurementChangedListener(u)}}},Ta=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Cb=function(a,b,c,d,e,f,t,m,r,p){var l=!1,q=u.isVideo(),n=f.request("mobileApp"),v=Y().applies(c,e),x=c.browserIs(k.BROWSERS.GECKO)||c.browserIs(k.BROWSERS.IE)&&
e.on("rattie")||v,A=u.xDomainIframe&&!x,B=new ua(10),Q=function(){e.on("viewabilityready")&&!l&&(d.send(k.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),l=!0)};f.on("delayedViewabilityReady",function(){z();Q()});f.on("delayedViewabilityReadyCallOnly",Q);var z=function(c){c=c||!1;try{B.start();var d,e;b.hasMeasurementStrategy()?e=n.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),n.isMobileAppEnvironment()?
(e.viewState=k.NA,e.method=k.NA,e.percentInView=k.NA):A&&(e.viewState=k.NA,e.percentInView=k.PIV_NA),q&&!u.isAvid()&&p.setVideoSpecificScreenEventFields(e));d=r.registerLocation(e);c||a.trigger("measurementChanged",e);B.stop();var l=s.round(B.getTime()/B.getCount());t.addItem({output:l},"lt",{type:k.DT_CODES.UNLOAD});return d}catch(w){f.trigger("error",k.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
q?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=u.xDomainIframe,d=a&&c.browserIs(k.BROWSERS.WEBKIT),e=a&&c.browserIs(k.BROWSERS.MSEDGE),a=a&&v,d=!d&&!e&&!a;return n.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){n.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};O("viewabilityLoopLifecycle",["viewability","features","context","browser"],
function(a,b,c,d){var e,h=Yc(c),t=[new Zc,new $c(h)],m=function(){return f(t).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},r=function(a){"sessionFinish"===a.type&&l.trigger("adSessionComplete")},p=function(a){y.addEvent(x,a,function(){l.trigger("adSessionComplete")},!1)},w=function(){var a=new Z(k.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:n.videoId,msg:"unloadComplete",messageType:"misc"};s.getWindow().postMessage(JSON.stringify(a),"*")})};
l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(e=Vb(a.checkScreenLoc,h.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),c?u.isOmid()?l.request("omidVerificationClient").registerSessionObserver(r,"IAS"):p("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):p("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||w();l.trigger("unload");e&&e.stop();l.trigger("endAdSession");
l.trigger("stopAdTalk")})},{tier:k.TIERS.VIEWABILITY});var Yc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},$c=function(a){var b,c,d,e,f,k=function(r){d&&!f&&1>r?(f=!0,s.setTimeout(function(){k(r)},1E3)):(e=1>r,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){k(a.percentInView)};return{applies:function(a,b,c){var e=l.request("mobileApp");
a=(new za(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",k);l.on("newScreenEvent",m)}}},Zc=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,s.setTimeout(function(){e(f)},1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Y();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},
start:function(a){b=a;b.start(!0);l.on("IOPivChange",e)}}},hd=function(a,b,c,d,e,h){var t,m,r,p,w,q,G,L,M,A=v.getElementsWindow(b);v.getElementsDocument(b);l.provide("iframeCalculatorHelper",ad(A));var B=bd(b,d),Q=k.AD_IDENTIFIER+"-"+n.asid,z=!1,C=F({}),I=u.isDeviceTypeGroupMobile(),P=u.usesGroupMCustomMetricMobilePassThru(),H,D=function(){if(!t)if(t=B.calcDims(b,d,r),c===k.DETECTION_METHODS.VIDEO&&u.embedded){var a=t,e=(new F(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.trigger("error",
k.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===k.DETECTION_METHODS.AD_PLACEHOLDER&&t.treatAsPlaceholder();return t},J=function(){var b,d=u.xDomainIframe&&z;b=I&&z&&r.isReady();b=d||b;d=B.getClippedDims&&(c===k.DETECTION_METHODS.VIDEO&&u.embedded||u.isCeltra());b?m=r.getPiv():f.isUndef(m)&&(b=!I&&(u.friendly||f.isDef(x.mozInnerScreenX))&&e.on("offscreen"),L=D(),G=new F(v.calcWinDims()),q=new F(b?v.calcMonDims():{}),M=d?B.getClippedDims():C,m=a.calcPercentInView(L,G,q,M));return m},V=function(){return a.calcInitialViewState(J())},
Ga=function(){return b===x?!1:D().isHidden()},E=function(a,b){return u.isVideo()?s.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=s.getWindow(),e=s.getDoc(),f=b===c,h=e.body,m=new Y,k=l.request("browser"),t=l.request("features"),q=l.request("context"),n=!u.xDomainIframe,G=E(b,d),e=f&&h?e.body:b;H=u.friendlyIframe?c.frameElement:e;y.addEvent(e,"click",function(){l.trigger("adComponentClicked")});y.addEvent(e,
"mouseover",function(){l.trigger("adComponentMousedOver")});m.applies(k,t,q)?(r=uc(b,n),r.start(),z=!0,P&&(c=new cd(D().getRounded()),m=new dd,G=new ed(G,m),p=new fd(c.getSlices(),G))):P&&(w=new gd(a))})();return{mark:function(){v.setAttributeOf(H,Q,"")},cleanup:function(){v.removeAttributeOf(H,Q)},isNode:function(a){return b===a},isHidden:Ga,isObstructed:function(){return!1},getDims:D,getPercentInView:J,getLocationState:V,getOnPageViewability:function(){return Ga()?k.OUT_OF_VIEW:V()},getDetectionMethod:function(){return c},
getContainerDims:function(){return B.allowsOptimization?t:F(d)},refresh:function(){M=L=G=q=m=t=void 0;if(h){var a,c;if(!u.isDomless()&&(c=b.parentNode)){for(;b!==x&&c&&c!==K&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;p&&p.isReadyToMeasure()?a=p.getSliceStatus():u.friendly&&w&&f.isDef(L)&&(a=w.getSliceStatus(L,G,q,M));return a}}},id=function(a,b){var c=[],d,e=f([]),h=function(){return c[0]&&c[0].getDetectionMethod()===k.DETECTION_METHODS.AD_PLACEHOLDER},
t=function(r,m,p,t){var q=h()||0===c.length;r=hd(a,r,m,p,b,t);h()&&(p=c.shift(),e=f(c),p.cleanup(),d=void 0);c.push(r);e=f(c);q&&r.mark();q&&m!==k.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",r)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,e){var h;h=e.getDims();h.hasValidDims()&&(a=e.getPercentInView(),b=a!==k.NA,h=h.area(),c+=h,f+=a/100*h)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},r=function(){var a;a=m();a=a.hasMeasurement?s.round(a.totalInView/
a.totalArea*100):k.PIV_NA;isNaN(a)&&(a=0);return a},p=function(){var c=m().totalArea>=k.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!u.isVideo();return a.calcInitialViewState(r(),c)},w=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},q=function(a){return function(){return c[0]&&c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===w(b)&&t(b,k.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=w(b);-1<d&&c.splice(d,
1)})});return{getDims:q("getDims"),isObstructed:q("isObstructed"),getDetectionMethod:q("getDetectionMethod"),getContainerDims:q("getContainerDims"),getViewState:p,getPercentInView:r,isHidden:q("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,b){b.refresh()})},addAdComponent:t,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=k.OUT_OF_VIEW_REASONS;e&&(a=d||p(),a!==k.OUT_OF_VIEW&&a!==k.PARTIAL_VIEW_MINUS||b.push(f.GEOM),e.isHidden()&&
b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:q("getSliceStatus")}},jd=function(a){var b=!1;if(!f.isUndef(x.MutationObserver)){var c=new MutationObserver(function(a){s.execAtEndOfThread(function(){b&&f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;s.setTimeout(function(){b=
!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",d);y.whenReady(function(){try{c.observe(K.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(k.ERROR_CODES.AC_WATCHER)}},s.getDoc())}},qd=function(a,b){var c=[kd()],d=[ea(),ld(),md(),nd(),od(),pd()],c=c.concat(d);return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},md=function(){var a,b,c,d=function(a){a?a&&c&&(s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&
b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ca();var c=v.crossQuerySelector(ca().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},rd=function(a){var b;a=v.findChildWithLargestContent(a||n.contextNode.parentNode);1<v.getNodeArea(a)&&!a[k.IAS_DETECTOR]&&(b=a);return b},od=function(){return{detectionMethod:k.DETECTION_METHODS.IFRAME,find:function(){return x},isApplicable:function(){return u.embedded},
getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},sd=function(){var a,b=s.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return N.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),f=/;(\d+);/;e&&e.src&&(b=e.src.match(f)[1]);return"#ftdiv"+b}}},td=
function(){return{isApplicable:function(a,b){var c;try{c=v.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&N.contains(c,"_tpi")&&v.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+v.getFrameId().replace("_tpi","")+"']"},detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},ud=function(){var a,b,c=s.getDoc(),d=function(){var b;a||(a=(b=(b=v.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=
(a=v.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:k.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=s.getWindow(),r=a.friendlyIframe&&s.getWindow().frameElement,r=r&&F(r).isOneByOne(),k=function(){var a=s.getDoc().scripts;return f(a).findFirst(function(a,b){return N.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&k&&c&&
r&&d()&&e()},getCssSelector:e}},ca=function(){var a,b=l.request("features");a||(a=[ud(),td(),sd()]);return f(a).findFirst(function(a,d){return d.isApplicable(u,b)})},nd=function(){var a,b=function(){s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:k.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=wa().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,
a=v.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},wa=function(){var a,b=function(){var b;(b=n.contextNode.parentNode)&&N.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&v.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ea=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,
find:function(){var a=v.findChildWithLargestContent(s.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[k.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},kd=function(){var a;return{detectionMethod:k.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return u.isSpecifiedAd()},find:function(){var b=v.crossQuerySelector(n._cl_adpath);b&&(a=v.getParent(b),1>v.getNodeArea(b)&&(a=b,b=v.findElementsWithSize(b)));return b},getAdContainer:function(){return a},
allowForAdContainerChange:!0}},pd=function(){return{usePlaceholder:!0,detectionMethod:k.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:rd,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},ld=function(){return{detectionMethod:k.DETECTION_METHODS.VIDEO,find:l.request("video").findAdNode,isApplicable:u.isVideo,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},bd=function(a,b){var c,d;c=[vd(),wd(),xd()];
d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=yd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},xd=function(){return{calcDims:function(a,b){var c,d,e=new F(a);v.isClippable(a,b)&&(c=v.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(u.isSpecifiedAd()||u.isBustedIframe())&&v.nodeIsInWindow(a,s.getTop());a=!v.elementIsEmbedded(a);
return b||a}}},wd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(u.isSpecifiedAd()||u.isBustedIframe())&&v.elementIsEmbedded(a)}}},vd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new F(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,
c){var d=(u.isSpecifiedAd()||u.isBustedIframe())&&u.embedded&&!v.nodeIsInWindow(c,s.getTop()),e=u.isCeltra()&&v.elementIsEmbedded(a);return d||e}}},yd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=Y();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=
b}}},ad=function(a){var b,c,d,e=l.request("features"),h=l.request("browser");a=a||s.getWindow();var t=function(b,c){b=b||a;c=c||{top:0,left:0,width:s.getMaxNumber(),height:s.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,h=0,m=e.length;h<m;h++)if(e[h]==b){d=e[h];f=!0;break}if(f){d=v.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=s.min(c.width,d.width),c.height=s.min(c.height,d.height)}catch(n){l.trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}b!==s.getTop()&&t(b.parent,c)}return c},
m=function(){var r,m={};try{var n,q,G,x,M,A,B=s.getMaxNumber(),Q=s.getMaxNumber();u.friendly?(n=t(),G=n.left,x=n.top,B=n.width,Q=n.height,q=v.browserWindowPosition(),M=q.scrX+G,A=q.scrY+x):e.on("rattie")&&h.browserIs(k.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),M=c.scrX,A=c.scrY):f.isDef(a.mozInnerScreenX)&&(M=s.round(a.mozInnerScreenX),A=s.round(a.mozInnerScreenY));var m={scrX:M,scrY:A,iFrameClippingWidth:B,iFrameClippingHeight:Q},z,C,I=b||v.getIeDimObj(a);
b=I;f.isDef(a.innerWidth)?(z=a.innerWidth,C=a.innerHeight):I&&f.isDef(I.clientWidth)?(z=I.clientWidth,C=I.clientHeight,0===z&&0<I.offsetWidth&&(z=I.offsetWidth),0===C&&0<I.offsetHeight&&(C=I.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(z=a.frameElement.clientWidth,C=a.frameElement.clientHeight);r=z;m.height=C;m.width=r}catch(P){l.trigger("error",k.ERROR_CODES.GET_AD_DIMENSIONS)}return m};return{calcDims:function(){return new F(m())},getClippedDims:function(){var a=m();return new F({scrX:a.scrX,
scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},wb=function(){return{createInstance:function(a,b,c){return u.isDomless()?new zd:new Ad(a,b,c)}}},Ad=function(a,b,c){var d,e=n&&n.contextNode&&n.contextNode.parentNode?n.contextNode.parentNode:null,h=id(b,c),t=function(){var a,b,e;d=d||qd(u,c);a=d.find();!a&&d.usePlaceholder?m():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){h.addAdComponent(c,f.resolve(d.detectionMethod),
b,e)}))},m=function(){var a;h.hasAd()||(a=v.getPlaceholderSpan(),e.insertBefore(a,n.contextNode.nextSibling),h.addAdComponent(a,k.DETECTION_METHODS.AD_PLACEHOLDER,v.getParent(a)))};jd(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?t():h.refresh();return h},getDetectionMethod:function(){}}},zd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},cb=function(a){var b,c=[],d=a||x,e=function(){return"stub"===k().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==
k().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},k=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};u.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:k,addEventListener:function(a,b){e()?c.push({type:a,
functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},bb=function(a){var b=new Bd,c=new Cd;try{if(a.bootstrapOn("mobOrTab")||u.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",k.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
Dd={url:{STRINGIFIED_METHOD:"u",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==s.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;d=!1;var e=s.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,
c){return f.isDef(N.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return u.isDomless()?!1:!!f(a).findFirst(function(a,c){return v.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ha=function(){var a=function(a,c){var d,e=Dd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},Ed={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},Bd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=n.hasOwnProperty("serverSideAppDetection")&&0!==n.serverSideAppDetection.length?!0:Ha().process(Ed);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},Cd=function(){var a=[],
b=[],c=function(b,c){var f,k=Ha().process(c.detectionRules);k&&(a.push(c.STRINGIFIED_SDK+"*"+k),f=c);return f};return{detect:function(){b=f(Fd).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Fd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],cd=function(a){var b=
[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,e=0;10>e;e++)b.push({geometry:c(e,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},U=function(){var a=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=k.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<
a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Gd=function(){var a,b,c=0,d=-1,e=0,h=l.request("browser"),k=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=s.setInterval(function(){var a=s.now();d=a-e;e=a;
c++;10<=c&&b&&s.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=v.calcMonDims().height,l=h.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,q=h.getUserAgent(),q=q&&null!==q.match(/(iPad)/)?1:0,n=k()?1:0,u=h.getUserAgent(),u=u&&null!==u.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=s.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*q+0.646972*n+0.28118*u+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:q,mbhs:n,mbbr:u,mblr:d,
mbp:e};b&&s.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Jc=function(a,b,c){var d,e,h,t,m,r=[],p=n.contextNode.parentNode,w=0,q=0,v=!1,x=!1,M=new Gd,A=function(){var a=r.length-1,b=-1;-1<a&&(b=r[a].piv);return b},B=function(){l.trigger("delayedViewabilityReadyCallOnly")},Q=function(a){y.whenReady(function(){e=new Hd(a,s.getDoc().body)})},z=function(){e.removePixels()},C=function(){var a=M.getDebugState(),b=A();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(x);a.mbrd=f.fromBoolToNum(v);
a.mbtg=f.isDef(p.tagName)?p.tagName:"na";a.mbaf=f.isDef(h)?h:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var p;p=f.isDef(d);if(c||!b.adDimensions)return b;p||(h=b.method,d=b.adDimensions,d.isMrcLarge(),Q(d));if(f.isUndef(e)||!e.isReadyToMeasure())p=
!1;f.isUndef(t)&&p&&(t=M.isLikelyToProduceFalsePositive(d));if(x=!t&&p){var n;p=e.getPercentInView();var J=A(),z=1===b.tabHidden,C=b.adDimensions.isMrcLarge()?30:50;q=s.now()-w;n=0<w?900>q:!0;w=s.now();0===b.adDimensions.area()&&(p=0);n||(p=0);var y=p;r.push({tm:u.getTagTime(),piv:y});3<r.length&&r.shift();0===p&&0<J&&(n&&(n=r.length-1,y=!0,2<=r.length&&-1<n&&(y=0===r[n].piv&&0===r[n-1].piv),n=!y),n&&(p=J));a?(f.isUndef(m)&&(m=l.request("video")),m.setVideoSpecificScreenEventFields(b),p=b.isVideoPlayingInFullscreen?
!0:!z&&p>=C&&b.isVideoPlaying):p=!z&&p>=C;b.viewState=p?k.IN_VIEW:k.OUT_OF_VIEW;b.percentInView=A();J=[];z=f(b.reason);C=k.OUT_OF_VIEW_REASONS;p||J.push(C.GEOM);z.contains(C.HIDDEN)&&J.push(C.HIDDEN);z.contains(C.OBSTRUCTION)&&J.push(C.OBSTRUCTION);b.reason=J;b.sliceStatus=e.getSliceStatus();v||(v=!0,s.execAtEndOfThread(B))}else b.viewState=k.NA,b.percentInView=-1;return b},start:function(){l.on("endAdSession",z);c&&s.setTimeout(C,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return x},
isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},za=function(a,b,c,d){return{accepts:function(){var e=c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),m=b.browserIs(k.BROWSERS.WEBKIT),r=9<=b.getIOSVersion(),p=d.isMobileAppEnvironment();return e&&f&&l&&m&&r&&!p},isImmediate:function(){return!1},start:function(){}}},Id=function(a,b,c,d,e,h,l){var m,r=n.birthdate+""+s.round(1E6*s.random()),p=101,w,q,u,v=!1,x=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,h=(new Date).getTime(),k=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(k)};a.requestAnimationFrame(k);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-h}}catch(p){b.body.setAttribute("data-err",p.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+
")(window);")+"\x3c/script></body></html>"},A=function(a,b){u||(p=a,u=b)},B=function(){var a,b,c;if(u)return!1;if(q)return!0;try{if(w.contentWindow&&w.contentWindow.document&&w.contentWindow.document.body){c=w.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&A(104);(b=c.isReady?c.isReady():!1)&&(q=c.isInView?c.isInView:void 0)&&A(105)}}catch(d){A(106,d)}return f.isDef(q)},y=function(a,b,c){var h=K.createElement("iframe");h.id=r;f(h.style).mixin({position:"absolute",
width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var p=h.style;h[k.IAS_DETECTOR]="true";p.left=b;p.top=c;a.appendChild(h);w=h;A(102);a=w;try{var m=a.contentWindow,l=x();m.document.open();a.contentWindow.document.write(l);m.document.close()}catch(t){A(103,t)}return h}(a,b,c);return{isInView:function(){var a,b,c=!1;s.now();B()&&(a=q(!0),c=a.isInView,v=!1,m&&(b=20*m.rate+m.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,v=!0)),
A(107),m=a);return c},isNotReadyToReport:function(){return!B()},createdElement:w,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return p},getError:function(){return u},isReadingInvalid:function(){return v},getRate:function(){return w.contentWindow&&w.contentWindow.document&&w.contentWindow.document.body&&w.contentWindow.document.body.getRate?w.contentWindow.document.body.getRate():-1},percentInView:h}},Hd=function(a,b,c){var d,e=a.getRounded(),h=[],k=!1;a=U().getConfig(e);
var m=a.percentInViewSliceArray,r=1==a.numberOfSlices,p={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},l=function(){var a;if(!k)for(k=!0,a=0;a<h.length;a++)if(h[a].isNotReadyToReport()){k=!1;break}return k},q=function(a){var b=[],c=0;s.floor(a.height/m.length);var d=s.floor(a.width/2-1);f(m).each(function(e,f){c=s.floor(a.height*f);c===a.height&&(c-=2);b.push({y:s.floor(c)+"px",x:s.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},n=function(a){var b=
[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},v=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=s.max(c,b.percentInView));return!b.isInView});return c},x=function(){var a,b,c,d=[];p.mbs=[];f(h).each(function(b,c){a=c.isInView();p.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=v(d,!1);c=v(d,!0);return s.max(b,c)};(function(){d=r?
n(e):q(e);var a=d.get();f(a).each(function(a,d){var e=new Id(b,d.x,d.y,d.width,d.height,d.percentInView,c);h.push(e)})})();return{getPercentInView:function(){var a=l(),b=x();p.mbrd=a?1:0;b!=p.mbp&&p.mbivs.push([u.getTagTime(),b]);p.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();f(h).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){p.mbm=1;h&&0<h.length&&(p.mbpr=[],p.mbir=[],f(h).each(function(a,b){p.mbpr.push(b.getRate());p.mbir.push(b.isReadingInvalid()?
1:0)}));return p},isReadyToMeasure:l,getSliceStatus:function(){var a;h&&0<h.length&&(a=[],f(h).each(function(b,c){a.push(c.isInView())}));return a}}},fd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},d=function(a,b){var c=[],d=a.geometry.value();f(b).each(function(b,e){if(a.geometry.doesIntersect(e)){var f=e.value(),h=Math.max(d.leftX,f.leftX),k=Math.min(d.rightX,f.rightX),m=Math.max(d.topY,f.topY),f=Math.min(d.bottomY,f.bottomY);c.push(new W(h,k,m,f))}});return c},e=function(a,
b){var c=0,e=d(a,b),h;f(e).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];f(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){f(a).each(function(a,c){c.isInView=e(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([u.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];f(a).each(function(a,b){c.mbpr.push(k.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];f(a).each(function(a,c){b.push(c.isInView)});return b}}},gd=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var k,m=[];k=c.getRounded();c=k.height;var r=k.scrY,p=new F({scrX:k.scrX,width:k.width}),l=b.getConfig(k).numberOfSlices;p.set("height",s.floor(c/l));for(var q=0;q<l;q++)p.set("scrY",s.ceil(r+c/l*q)),k=100===a.calcPercentInView(p,
d,e,f),m.push(k);return m}}},W=function(a,b,c,d){var e=Math.ceil(a),f=Math.ceil(b),k=Math.ceil(c),m=Math.ceil(d),r=f-e,p=m-k,l=r*p,q=function(){return{leftX:e,rightX:f,topY:k,bottomY:m,width:r,height:p,area:l}};return{value:q,doesIntersect:function(a){var b=q();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},dd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},ed=function(a,b){var c,d=[],e=[],h=function(){f(d).each(function(a,
b){b(e)})},k=function(){var a=[];f(e).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),f=d.boundingClientRect;b=f.width;var l=d.intersectionRatio,d=d.intersectionRect,q=d.left-f.left,f=d.top-f.top,f=new W(q,q+d.width,f,f+d.height);e.push(f);f=k();e=[];for(d=0;f.length>d&&f.length!==d+1;d++)e.push(new W(0,b,f[d],f[d+1]));h();
1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){d.push(a)}}},Jd=function(){return{decorateContextParams:function(a,b){try{var c=l.request("adNode"),d;if(d="adImpression"===a)d=l.request("adNode").hasAttribute("data-ias-autoplay");d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(e){l.trigger("error",k.ERROR_CODES.AUTOPLAY_DETECTION)}}}},Kd=function(){return{listenForResult:function(){l.on("videoBlockResult",
function(a){var b=l.request("adNode"),c=!1,d="blockAd"+n.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Ld=function(a,b){var c,d,e,h,k,m=l.request("videoTranslator"),r=l.request("videoAutoplay");e=m.translate(a.messageType);h=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);k=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=f(a).mapToObj(c));return b}(a);r.decorateContextParams(e,h);d={t:a.time-n.birthdate,tp:e,sl:b};f(d).mixin(h);f(d).mixin(k);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=s.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===h.viewMode||h.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===
e&&"normal"===h.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|skipAd".indexOf(e)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.persistentTrigger(e,h,k):l.trigger(e,h,k)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Md=function(){var a=[];return{registerEvent:function(b,c){var d=new Ld(b,c);a.push(d);return d},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===
a.length}}},Nd=function(){var a,b,c,d=function(d){c=f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",k.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;d()},n=function(a){a=(new Ia).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.on({adVideoStart:h,adImpression:h,volumeChanged:n,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=
l.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Od=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ia=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},tb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,h,
t,m,r,p=[],w=k.OUT_OF_VIEW,q=!1,v=!1,x=!1,D=!0,A=new Md,B=Nd(),E=new Kd,z=function(b){q=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=A.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(v=!0,w=x?k.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,w=k.OUT_OF_VIEW):d.indicatesFullscreen()?(x=!0,w=v?k.IN_VIEW:k.OUT_OF_VIEW):d.indicatesNormalSize()&&(x=!1,w=v?!1:k.OUT_OF_VIEW));b=d;p.push(b);r&&K();return b},C=function(b){var c,h,k=oa().wrapToGlobal(z),m=function(a){f.isStr(a)&&
(l.provide("vc",function(){return a}),l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{h=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(h)&&"2"===h.call(b)?unescape(b[d].call(b,a,k)):unescape(b[d].call(b,a)),q=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,n)}},I=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};h||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=s.getDoc().querySelectorAll(b);
return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},n));return h},F=function(){var a=I();a&&!q&&C(a);return a},H=function(a){a=(new Ia).getVolumeFromContext(a);D=f.isDef(a)?0<a:!1},K=function(){f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});p=[];r=!0};(function(){y.addEvent(s.getWindow(),"message",function(a){z(a)});l.on({volumeChanged:H});l.provide({videoEventsString:A,
videoVersion:function(){var a,b=F();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",k.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return t=t||new Od},videoAutoplay:function(){return m=m||new Jd},adNode:F});F();E.listenForResult();B.isApplicable(u)&&B.start(c)})();return{findAdNode:F,getViewStateOverride:function(){return w},isHandshakeComplete:function(){return q},triggerInitializationEvents:K,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===k.NA;
a.isVideoPlaying=!0;a.isSoundOn=D;a.isVideoPlayingInFullscreen=!1;if(w){if(w===k.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=k.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:w;a.isVideoPlaying=w===k.IN_VIEW}x&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Pd=function(){return new ga(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,b){return a.timestamp-b.timestamp},k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Ib=function(){var a,
b,c={},d=0,e=function(c){if(c||a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",k.DT_CODES.PERFORMANCE)}),a=!1},h=function(h,k,l,n){h=c[h];n?(f.isDef(h[k])||(h[k]=[]),h[k].push(l)):h[k]=l;b&&b.isActive()||(b=new va,d=0,e(!0),b.start());a=!0},n=function(b){f(c).each(function(d,e){var h=c[d],k={type:b,oneTime:!0,minDt:!0,asION:!0};f(h).isEmpty()||(l.trigger("addOutputItem",{output:h},d,k),c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){n(a);b&&b.kill()});l.on("addThrottledProp",
h)},addFieldTypes:function(a){f(a).each(function(a,b){c[b]={}})}}},Nb=function(){var a={},b=function(b){a[b]||(a[b]=new ua(1,n.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Qd=function(){return new ga(k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,function(a,b){return a.timestamp-b.timestamp},k.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},
ub=function(a){var b={},c=a instanceof Array&&a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:k.DT_CODES.PERFORMANCE}),l.trigger("sendMinDt",k.DT_CODES.PERFORMANCE))}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},ga=function(a,b,c){var d=0,e=[],h=function(){var a,c={};e.sort(b);f(e).each(function(b,e){a&&
(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){e.push(a)},toString:function(){return f(h()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return e.length===c}}},vb=function(){function a(){}a.build=function(){var a=[],c=l.request("vc"),d={jv3:Ja,av3:Ja,jvw:Qd,avw:Pd};c&&d[c]&&a.push(d[c]());return a};return a}(),Ja=function(){return new ga(k.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,function(a,b){return a.code-b.code},
k.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(x,"load",function(){l.trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new va;a.onTick({4:function(){l.trigger("markTime",S.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}};O("postMessageDetector",
[],function(){var a=!1,b="pmdetector"+n.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=s.getWindow();y.addEvent(d,"message",c);d.postMessage(b,"*");s.execAtEndOfThread(function(){l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"pom",f.stringifyTriState(a));y.removeEvent(d,"message",c)})})()},{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});O("safeFrameDetector",[],function(){l.trigger("addThrottledProp",k.DT_SLOT.ENVIRONMENT,"sf",f.stringifyTriState(u.isSafeFrame()))},
{tier:k.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Gb=function(){var a=n.asid,b=n.cookieBaseURL,c=n.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=function(){var e;e=new T(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL",
"asid"])}}},Hb=function(a,b,c,d,e,f,t){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(r){try{var p,s=d.baseUrl,q,u,v=f.getDocumentMode();"number"===typeof v?(u=2E3,8===v?u=4E3:8<v&&(u=8E3)):u=m(n.sp_imp_maxLength,2E3);q=u;u=s;var x=s.length,y,B,D=m(n.sp_imp_jsInfo_minLength,0),v="";try{y=q-x-D,0<y&&(B=Rd(r,y,14,b.on("partialUrls")),v+=B.join("&"))}catch(z){a.add(k.ERROR_CODES.IMPRESSION_URLS)}s=u+v;r=s+="&"===s.slice(-1)?"":"&";var C,x="";try{C=q-s.length,x+=Sd(C,"adsafe_jsinfo=",
a,b,c,e,f,t)}catch(E){a.add(k.ERROR_CODES.JSINFO),x+="adsafe_jsinfo=e:"+a.toString()}s=r+x;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);p=s;d.sendImpression(p);n.impUrl=p;l.trigger("impressionsent")}catch(F){__IntegralASDiagnosticCall("impsend",F,n)}}}},Sd=function(a,b,c,d,e,h,l,m){return function(c){var d=c.primary.join(","),h=b,k=0,l=function(a){if(a)return","+a};h.length+d.length+5<=a&&(h+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){h.length+c.length+5<=a?h+=
l(c):k+=1}));return h+=",ov:"+k}(function(){var a,b;b=a={viewState:k.NA};u.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?s.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):f.isDef(s.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var w=a.viewState;b=e.getAvidIds();w=["id:"+n.asid,"c:"+e.getCacheBustId(),"sl:"+w,"em:"+u.embedded,"fr:"+u.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(w.push("abi:"+b.bundleIdentifier),
w.push("apn:"+b.partner),w.push("apv:"+b.partnerVersion));a=Td(a,c,d,e,h,l,m);return{primary:w,secondary:a}}())},Td=function(a,b,c,d,e,h,l){var m=[];m.push("mn:"+n.mn);m.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==k.NA&&(b+=a.details);return b}());m.push(f(h.params()).toParams());c.on("mrcAudit")&&!u.isDomless()&&m.push("dvs:"+s.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===k.IMPRESSION_EVENT;(c||d)&&m.push(a+
":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+n.mode);m.push("et:"+(s.now()-n.birthdate));n.perf.mark("si");c.on("swapids")?m.push("oid:"+n.oid):m.push("uid:"+d.unq);m.push("v:17.4.124");m.push("sp:"+(n.isSplitMode?1:0));c.on("resolution")&&(m.push("wr:"+f(v.windowSize()).toArray().join(".")),m.push("sr:"+f(v.screenSize()).toArray().join(".")));return m},Rd=function(a,b,c,d){var e,h=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};
a&&a.length&&(e=f(a).map(function(a,b){if(k(b))return b}),a=f(a).map(function(a,b){if(!k(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var k=e.key,l;l=24+h.join("&").length+k.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+k,k=h.join("&").length,f.length+k<=b&&h.push(f)}));return h},Eb=function(){return{isApplicable:function(a){a=s.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=
s.getWindow();a=Ud(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:k.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:k.DT_CODES.ADTALK}))}}},Xd=function(a,b){return{start:function(){try{var c=Vd(),d=c.getMethodName(a),e=new T(b.getEnabledScriptUrl(a)),f=Wd,n=s.getDoc();(new f(n.body||n.head||n.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){l.trigger("error",k.ERROR_CODES.FEATURE_SCRIPT)}}}},
Vd=function(){var a=function(a,c,d){a===n.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:n.asid,constant:k,features:b,context:u,dtBaseURL:n.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Lb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Xd(d,b).start()})}}},Ud=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,
""),e=N.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=s.floor(s.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Wd=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=v.createHiddenIframe();c.setAttribute("src","about:blank");(a||n.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,l;k=(new Date).getTime();
l=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Ka()}catch(Yd){__IntegralASDiagnosticCall("main",Yd,n)}};
try{(function(){var n=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,n,n.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
