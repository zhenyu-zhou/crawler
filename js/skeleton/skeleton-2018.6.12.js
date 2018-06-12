var __IntegralASDiagnosticCall = function(){};

try {
	var __IntegralASConfig = {
		jsDoSplit : false,
		cocaPuffsPath : "",
		debug : "false",
		jsDiag:'false',
		version:'17.4.109',
		mtCell: 10,
		mtSample: 5,
		trackMouse : "true",
		exchList:{'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		killFlash: 'true',
		sp_cdnDomain:'cdn.adsafeprotected.com',
		sp_cdnScripts:{xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.91.js", main: "static.adsafeprotected.com/main.17.4.109.js"},
		protocol:'https',
		jsref : "",
		asid : "7a8a4d87-6e60-11e8-8f40-98f2b3f2a918",
		allowViewability : "true",
		jsFeatures : "cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1",
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
		cookieBaseURL:'sc.iasds01.com\/dtc?advEntityId=33642&pubEnt=3584127',
		fwMonitoring:'true',
		doNothing: false,
		mn: "app46sje",
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

__IntegralASConfig.initialize=function(n,B,K){function Ja(){var g;n.perf.markStart(fa);O.startSystem();l=O.getAggregator();l.provide({omidAdSessionContext:{}});g=__IASOmidVerificationClient;l.provide({omidVerificationClient:g});g=[{environment:new ga(g),adSessionReadyStrategy:new Ka(ha,g)},{environment:{accepts:function(){return!0}},adSessionReadyStrategy:{start:function(){ha()}}}];(new La(g)).resolve().adSessionReadyStrategy.start();n.perf.markEnd(fa)}function ha(){var g,a;n.perf.markStart(ia);a=
W.instantiateModules();g=W.preImpression(a.mDataTransfer,a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t);W.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,g,a.mVideo);W.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t);n.perf.markEnd(ia)}var l,W=function(){function g(a){var b=new Ma(a,
t),c=new Na,u=new Oa(a,t),m=Pa(a,t),r=(new Qa(n,t,a)).resolve(),g=[b],w=[];m.applies()&&g.push(m);u.applies()&&g.push(u);c.applies(a,t)&&g.push(c);f(r).each(function(a,b){g.push(new Ra(b,t));w.push(b.id)});0<w.length&&l.trigger("addOutputItem",{output:w},"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0});return g}function a(a,b,c,u){var m=g(a);return f(m).map(function(m,g){var f;f=new Sa(g,b);var q=(new Ta(c,a,g.rts)).getCallbacks(),q=new Ua(u.createPingJobs(g.type,g.timeInViewThresholds,q,g.metricId));
f=g.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new Va(f,g.minUnit,q,t.isVideo()):new Wa(f,new Z(g.minUnit),q);f.start();return f})}function b(a,b,c,u,m,r,g,w,q,L){try{n.perf.markStart(ja),n.tpiLookupURL&&Xa(g,w).init(n.tpiLookupURL),t.isDomless()||L.isStarted()&&L.sendOriginList(),O.runAll(),s.execAtEndOfThread(function(){var r;try{n.perf.markStart(ka);r={output:(new Date).getTime()-m};a.addItem(r,"sinceFw",{type:h.DT_CODES.ADTALK});f.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},
"readyFired",{type:h.DT_CODES.ADTALK});n.perf.markEnd(ka);var g,p;n.isSplitMode&&(p=n.protocol+"://"+n.sp_cdnScripts.main,n.perf.markResource(Ya,p));n.impUrl&&n.perf.markResource(Za,n.impUrl);g=n.perf.getData();l.trigger("addThrottledProp",h.DT_SLOT.IM,"prf",f(g).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(w){u.add(h.ERROR_CODES.ADTALK_DELAY)}}),n.perf.markEnd(ja)}catch(y){u.add(h.ERROR_CODES.EVENT_LOOP_ONE)}}function c(a,c,k,u,m,r,g,f,q){var h;"true"!==n.minimizeCalls&&(h=(new Date).getTime(),
s.execAtEndOfThread(function(){b(a,c,k,u,h,m,r,g,f,q)}))}return{instantiateModules:function(){var b,c,k,u,m,r,g,f,q={};n.perf.markStart(la);l=O.getAggregator();q.mFeatures=l.provide("features",$a());l.provide("mobileApp",function(){return b=b||new ab(q.mFeatures)});l.provide("avidJsClient",function(){return c=c||new bb(s.getWindow())});l.provide("context",t);q.mBrowser=l.provide("browser",(new cb).createInstance());q.mErrors=db();q.mIds=l.provide("ids",eb());q.iOutput=new fb(l);k=ma();q.mComm=(new gb).createInstance(q.mErrors,
k);q.viewabilityMeasurement=(new hb(new ib(q.mIds),q.mFeatures,q.mBrowser)).create();q.mFeatures.on("swapids")&&(n.oid=n.asid,n.asid=q.mIds.unq);q.mAdTalk=(new jb).createInstance(q.mFeatures);u=kb();k=lb(l);m=l.provide("mPage",(new mb).createInstance());q.mAncestorOrigins=nb();q.mPageUrls=l.provide("pageUrls",(new ob).createInstance(q.mAncestorOrigins,s));r=pb();l.provide("ieXDomainViewability",qb(q.mBrowser));g=rb(q.mBrowser);q.mVideo=l.provide("video",!t.isVideo()||t.isAvid()||t.isOmid()||t.isInMobiMraidVideo()?
{}:sb(n.videoId,q.mFeatures,r));tb(ub.build());g=(new vb).createInstance(q.mErrors,g,q.mFeatures);m=(new wb).createInstance(g,q.mErrors,m,t);f=l.provide("jobFactory",xb(k));q.mDataTransfer=yb(g,q.mErrors,q.mFeatures,q.mIds,q.iOutput,q.mBrowser,r,u);u=zb(q.mErrors,q.mFeatures,l,k);q.mMode=Ab(u,q.mFeatures,q.viewabilityMeasurement.isImmediate());q.mViewability=l.provide("viewability",Bb(new E,q.viewabilityMeasurement,q.mBrowser,q.mDataTransfer,q.mFeatures,l,q.iOutput,m,r,q.mVideo));a(q.mFeatures,q.mViewability,
k,f);q.loopDelay=na();q.mDataTransfer.setViewabilityMod(q.mViewability);n.perf.markEnd(la);return q},preImpression:function(a,b,c,u,m,r,g,f,q,L){var y,G,C,A,s;n.perf.markStart(oa);try{c.isApplicable(L)&&(c.start(),u.addItem(c.getFrameMap(),"fm"),q.on("fm2")&&u.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),q.on("idMap")&&(y=c.getIdMap())&&u.addItem(y,"idMap"))}catch(z){m.add(h.ERROR_CODES.ADTALK_GENERAL)}try{r.isApplicable(g,q,L)&&r.start(),s=f.detectTopURL(),q.on("exch")&&(G=(new Cb).createInstance(m,
u),G.parse(s)),C=Db(),C.isApplicable(q)&&C.start(q),L.usesGroupMCustomMetric()&&Eb(),A=Fb(),A.isApplicable(q)&&(A.start(),l.trigger("sendCookie"))}catch(t){m.add(h.ERROR_CODES.IMPRESSION_LEADUP)}n.perf.markEnd(oa);return s},sendImpression:function(a,b,c,u,m,r,g,w,q){try{Gb(a,b,c,u,m,r,g).send(w),f.isFunction(q.triggerInitializationEvents)&&q.triggerInitializationEvents()}catch(h){__IntegralASDiagnosticCall("impsend",h,n)}},postImpression:function(a,b,k,u,m,r,g,f,q,l,y,G,C){try{n.perf.markStart(pa);
var s=Hb();s.start();s.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FRAUDEXP]);var N=Ib(a,b,k);N.isApplicable(u)&&N.start();var z;u.bootstrapOn("getTpl")&&u.on("usetpl")&&(z=Jb(m,r,g,b,f),z.init());c(f,q,l,g,u,m,r,b,G);y&&y.start&&y.start();C.isDomless()||Kb().start(["sca","xsca","rsrch"],u);Lb();O.runTier(h.TIERS.VIEWABILITY);var t=Mb();t.isApplicable(u)&&(t.start(),S.recordBlockingTime(),n.perf.mark(Nb),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());n.perf.markEnd(pa)}catch(J){g.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),
f=function(g){return new F(g)},F=function(g){this.iterable=g};F.prototype.isObj=function(g){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return g?a:b};F.prototype.isArray=function(){return this.iterable instanceof Array};F.prototype.isEmpty=function(g){return 0===this.keys(g).length};F.prototype.each=function(g,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,d=b.length;c<d;++c)g(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&g(c,b[c])};F.prototype.map=
function(g,a){var b=[];this.each(function(c,d){var e=g(c,d);if(void 0!==e||a)b[b.length]=e});return b};F.prototype.stringify=function(g,a){a=a||",";var b=[];this.each(function(a,d){var e=g(a,d);f.isDef(e)&&b.push(e)});return b.join(a)};F.prototype.toION=function(g,a){var b,c="[",d="]";a=a||0;g=g||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return f(c).toION(g,a)}):(c="{",d="}",b=this.map(function(b,
c){var d="string"===typeof b&&-1!==b.indexOf("NULL"),m=f(c).toION(g,a);return d?m:(g[b]||b)+":"+m}));return c+b.join(",")+d};F.prototype.compareTo=function(g){var a=!1;this.each(function(b,c){g[b]!==c&&(a||(a={}),a[b]=c)});return a};F.prototype.toParams=function(g){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},g)};F.prototype._privateMixin=function(g,a,b){for(var c in a)f.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(g[c]=a[c]);return g};F.prototype.mapToObj=
function(g){var a={},b=this;this.each(function(c,d){var e=g(c,d);f(e).isObj()&&b._privateMixin(a,e)});return a};F.prototype.invert=function(){return this.mapToObj(function(g,a){var b={};b[a]=g;return b})};F.prototype.mixin=function(g,a){return this._privateMixin(this.iterable,g,a)};F.prototype.find=function(g){var a;this.each(function(b,c){g(b,c)&&(a=c)});return a};F.prototype.findFirst=function(g){var a,b;this.each(function(c,d){!b&&g(c,d)&&(a=d,b=!0)});return a};F.prototype.keys=function(g){var a=
[];this.each(function(b){a.push(b)},g);return a};F.prototype.asStrings=function(){var g={};this.each(function(a,b){g[a]=""+b});return g};F.prototype.selectProperties=function(g){var a={},b=this;f(g).each(function(c,d){f.isDef(b.iterable[d])&&(a[d]=b.iterable[d])});return a};F.prototype.filter=function(g,a){return this.map(function(a,c){var d;if(f.isUndef(g)||f.resolve(g,a,c))d=c;return d},a)};F.prototype.toArray=function(){return this.map(function(g,a){return a})};F.prototype.JSONStringify=function(){var g,
a,b=!1;B.Prototype&&B.Prototype.Version&&-1===B.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);g=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return g};F.prototype.contains=function(g){var a=f(this.iterable).findFirst(function(a,c){return g===c});return f.isDef(a)};f.toBase=function(g,a){var b,c=0>g,d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=[];g=c?-g:g;do b=g%a,e.push(d[b]),g=(g-b)/a;while(0<
g);e=e.reverse().join("");return c?"-"+e:e};f.isDef=function(g){return"undefined"!==typeof g};f.isUndef=function(g){return!f.isDef(g)};f.isBool=function(g){return"boolean"===typeof g};f.noop=function(){};f.identity=function(g){return g};f.isFunction=function(g){return"function"===typeof g};f.isStr=function(g){return"string"===typeof g};f.useIfDef=function(g){return f.isDef(g)?g:!1};f.stringifyTriState=function(g){return!0===g?1:!1===g?0:"na"};f.getNum=function(g){g=parseInt(g);isFinite(g)||(g=-1);
return g};f.resolve=function(g){var a=f(arguments).toArray();a.shift();return f.isFunction(g)?g.apply({},a):g};f.flatJSONParse=function(g){var a,b,c,d=/"(\w+)":(\d+|(?:"([^"]*)"))/g,e={};for(c=d.exec(g);c;)a=c[1],b=c[3],c=c[2],e[a]=b||+c,c=d.exec(g);return e};f.debounce=function(g,a,b){var c,d=b||B;return function(){var b=this,k=arguments;d.clearTimeout(c);c=d.setTimeout(function(){c=null;g.apply(b,k)},a)}};f.last=function(g){return g[g.length-1]};f.collapseArgsIntoHash=function(g,a){var b={};a?b[g]=
a:b=g;return b};f.fromBoolToNum=function(g){return g?1:0};f.isNumeric=function(g){return f.isDef(g)&&null!==g&&!isNaN(g)};var O=function(){var g,a={},b=[],c=[],d=function(){var a={},b=f(arguments).toArray();b.unshift(a);c.push(b);return a},e=function(c,d,e,r,p){p=p||{};var w,q,h=function(a){0===b.length&&(b=f(a).map(function(a,b){return g.request(b)}))},y=function(){if(!w){var a=[];w=!0;h(["features","browser","context"]);p.emits&&(c.events=new E);if(!p.applies||p.applies.apply(p,b))q=!0,a=f(e).map(function(a,
b){return g.request(b)},!0),a.push(c),f(c).mixin(r.apply({},a))}};(function(){var b=p.tier;f.isDef(b)&&(a[b]=a[b]||new $,a[b].push(y))})();g.provide(d,function(){var a;y();q&&(a=c);return a});return c};d.runAll=function(){var b=f(a).keys().sort(function(a,b){return a-b});f(b).each(function(a,b){d.runTier(b)})};d.runTier=function(b){a[b].run();delete a[b]};d.startSystem=function(){g=g||new qa;f(c).each(function(a,b){e.apply({},b)})};d.getAggregator=function(){return g};return d}(),h={MRC_LARGE_AD_SIZE:242500,
FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",
AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",
COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GREEN:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",
MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",FLASH_API_ACCESS:"z",XSCA:"Z",BUSTED_IFRAME_IN_IO:"y"},BROWSERS:{WEBKIT:"w",
OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,
0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru"},fa="mf",ia="cm",la="in",oa="pr",pa="po",Nb="bl",ja="lo",ka="lt",Ya="md",Za="id",X=function(){return{applies:function(g,a){var b=l.request("mobileApp");return(g.browserIs(h.BROWSERS.CHROME)||g.isAndroidWebViewBrowser()||g.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&g.hasIntersectionObserver()&&
a.on("chromeNativeIO")}}},Eb=function(){var g,a,b=!1,c=l.request("mPage"),d=function(){!b&&a&&g&&!c.isHidden()&&(b=!0,l.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};l.on("primaryadfound",function(a){g=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;d()});l.on("impressionsent",function(){a=!0;d()});c.onHiddenChange(d)},kb=function(){var g=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};l.on("newScreenEvent",function(c){c=f(c).selectProperties(f(b).keys());c=f(c).asStrings();var d=
f(c).compareTo(a);d&&(d.t=t.getTagTime(),g.push(d));f(a).mixin(c)});return{toString:function(){return f(g).toION(b)}}},qa=function(){var g=new Ob,a=new E;return f(g).mixin(a)},E=function(){var g={},a={},b=function(b,c,k){if((b=a[b])&&0!==b)return k&&(b=b.slice(0,1)),f(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){g[a]=g[a]||new $;g[a].push(b,c)};return{on:function(a,e){var k={};e?k[a]=e:k=a;f(k).each(c);f(k).each(b)},once:function(a,e){b(a,e,!0)||c(a,e,1)},trigger:function(a){var b=
f(arguments).toArray();b.shift();var c;(c=g[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=f(arguments).toArray();c.shift();var k=b;a[k]=a[k]||[];a[k].push(c);(k=g[b])&&k.run.apply({},c)}}},aa=function(){var g=function(a,c,d){var e,k=c.length,u=v.isWindow(a)?a.frames:v.getChildWindowsOf(a);d&&d(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(e=u[a])&&v.isWindow(e)&&(c[k]=a,g(e,c,d));c.pop()}},a=function(a,c){try{g(c||top,[0],a)}catch(d){}};return{traverse:a,getFrames:function(b,c){var d=
[];a(function(a){var b;if(b=v.isWindow(a)){var c=!0;for(b=0;b<d.length;b++)if(d[b]===a){c=!1;break}b=c}b&&d.push(a)},c);return f(d).filter(b)}}},$=function(){var g=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;g[g.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;f(g).each(function(b,c){c.apply({},a)})}}},Ua=function(g){return{doEligibleJobs:function(a){var b=g[0],c=b&&b.time;f.isDef(c)&&a>=c&&(b.task(),g.shift())},getNextJob:function(){return g[0]}}},
Pb=function(){var g,a=new ra,b=function(b,d,e,k){var u,m,r,g;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),m=b.source,g=f.noop,d(u)&&(k&&(r=k(m,u))&&(g=function(){a.send(function(){return r},m)}),e(b,u,g))}catch(w){u&&l.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,d,e){g=function(k){b(k,a,d,e)};x.addEvent(B,"message",g)},stop:function(){g&&x.removeEvent(B,"message",g);g=null}}},ra=function(){var g=function(a){return f(a).isObj()?[a]:(new aa).getFrames(a)},a=function(a){return f(a).mapToObj(function(a,
b){var e;f.isFunction(b)||(e={},e[a]=b);return e})};return{send:function(b,c){if(JSON&&JSON.stringify){var d=g(c);f(d).each(function(c,d){var u;u=f.resolve(b,d)||{};u.sentTime=s.now();u=a(u);d.postMessage(f(u).JSONStringify(),"*")})}}}},Qb=function(g,a){return{onAll:function(b){var c={};f(a).each(function(d,e){g.on(e,function(){c[e]=1;f(c).keys().length===a.length&&(c={},b())})})}}},fb=function(g){var a=0,b={},c=function(b,c,d){if(f.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');
this.item=b;this.id=c||++a;this.props=d||{};this.output=function(){var a=f.resolve(b.output);this.props.asION&&(a=f(a).toION());return a}},d=function(a){var c,d,e=[];for(c in b)b.hasOwnProperty(c)&&(d=a(c,b[c]))&&e.push(d);return e},e=function(a,d,e){e=e||d;e="string"!==typeof e?e:{};var r=function(a,d,e){a=new c(a,d,e);b[a.id]=a};f(a.output).isObj()&&!e.asION?f(a.output).each(function(a,b){r({output:b},a,e)}):r(a,d,e)};g.on("addOutputItem",function(a,b,c){e(a,b,c)});return{addItem:e,filterOutput:function(a,
b){return d(function(c,d){var e=d.props,g;a(e)&&(g=d.output(),e.encode&&(c=encodeURIComponent(c),g=encodeURIComponent(g)),f.isFunction(b)?b(c,g):b[c]=g)})},iterate:d,cleanup:function(){d(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},Ob=function(){var g={},a=function(a,c){g[a]=c};return{request:function(a){var c,d=g[a],e=f(arguments).toArray();e.shift();f.isUndef(d)||(c=f.isFunction(d)?d.apply({},e):d);return c},provide:function(b,c){c?g[b]=c:f(b).each(a);
return c}}},wb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new Rb:new Sb(g,a,b,c)}}},Sb=function(g,a,b,c){var d;return{collect:function(){var a=g.find(),k=a.getOutOfViewReasons(),u=b.isHidden(),m=c.isDeviceTypeGroupMobile()&&d?d:I(v.calcWinDims()),r=a.getDims();d=m;if(!a.hasAd()||!m.hasValidDims()||!r.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:m,adDimensions:r};!0===u&&k.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:m,
adDimensions:r,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:k.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:k.join("."),obstructed:f.stringifyTriState(a.isObstructed()),isHidden:f.stringifyTriState(a.isHidden()),tabHidden:f.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},Rb=function(){return{collect:function(){return{}}}},Tb=function(g){g=g||f.identity;var a=
[],b=s.now(),c=function(){var c=s.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var e=a[a.length-1];b=g(b);c();0!==a.length&&b===e.state||a.push({state:b,duration:0})}}},sa=function(g,a){var b=g||1,c=0,d=0,e,k=0;return{start:function(){0===c%b&&(e=s.now())},stop:function(){var u=e||a;0===c%b&&(k+=s.now()-u,d++);c++},getTime:function(){return k},
getCount:function(){return d}}},ta=function(){var g,a=0,b=0,c=new E(!0),d=function(){g&&(a++,c.trigger(a),b>a?s.execAtEndOfThread(d):e())},e=function(){g=!1;a=0};return{onTick:function(a,d){var e=f.collapseArgsIntoHash(a,d);f(e).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(e)},start:function(){g||(g=!0,s.execAtEndOfThread(d))},kill:e,isActive:function(){return g}}},Ub=function(g,a){var b,c=a,d=function(a){b||(a&&g(),b=s.setInterval(g,c))},e=function(a){a&&g();s.clearInterval(b);b=null};return{start:d,
stop:e,updateFrequency:function(a,b){c=a;e();d(b)}}},Z=function(g){var a,b,c=0,d=t.getTagTime(),e=0,k=!1;return{getTotalTime:function(){return e},stop:function(){c=0;d=t.getTagTime();k=!1},mark:function(){a=k?t.getTagTime()-d:0;c+=a;c>=g&&(b=c-a<g,e+=b?c:a);d=t.getTagTime();k=!0}}},T=function(g,a){var b=g||n.adsafeSrc||n.requrl;b&&0===b.indexOf("http")||(b=n.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],d=b[2],e=b[3],k=b[4],u=b[5],m=g?b[6]:
"",r=a?b[7]:"",p={},w=function(a){f.isDef(a)&&(k=a);return k},q=function(a){f.isDef(a)&&(u=a);return u},h=function(a,b){return a+"="+f(b).toION()},r=r?r.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var d,e;(d=p[b])?p[b]=d+c:a&&r.length&&(d=r.split(b),e=1<d.length)&&(e=d[1].split("&")[0],d=[d[0],e].join(b),r=r.replace(d,d+c))},fullDom:c,hostname:e,sub:w,master:q,setParam:function(a,b){p[a]=p[a]||{};f(b).isObj()?f(p[a]).mixin(b):p[a]=b},path:function(a){m=a},toString:function(){var a=
w()?w()+".":"",b=m?"/"+m:"",c;r||!f(p).isEmpty()?(c=f(p).isEmpty()?"":f(p).stringify(h,"&"),c="?"+r+(r&&c?"&"+c:c)):c="";return d+"://"+a+q()+b+c}}},Lb=function(){var g=function(a){var c=[];f(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var d;c&&c.id&&(d=c.id.replace(/[^\w-_.>\/]/g,""));return d};(function(){var b;try{if(t.friendly&&!t.isMobileApp()){var c,d;if(c=v.getOurNodeInTop()){var e=v.getAncestorNodes(c);d=f(e).map(a)}(b=d=d&&g(d))&&l.trigger("addOutputItem",
{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0})}}catch(k){l.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}})()},nb=function(){var g,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,e){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&e.xDomainIframe},isStarted:function(){return!!a},start:function(){try{g=s.getWindow().location.ancestorOrigins,a=!0}catch(b){l.trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},
getMyFrameDepth:function(){return g&&g.length||0},getTopDomain:function(){return f.last(g)},sendOriginList:function(){var a;a="ao:"+(g?f(g).map(b).reverse():[]).join(",");l.trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});l.trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},Jb=function(g,a,b,c,d){var e=function(a,b,c){d.addItem({output:a+"."+b+"."+c},"ctpl")},k=function(d){try{a.diagnostic("c");var k=d.length,r=0,p=0;e(k,0,0);f(d).each(function(a,b){g.send(b.replace("%%CBS%%",
c.getCacheBustId()),function(){e(k,r,++p)},!0);e(k,++r,p)})}catch(w){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+n.asid;g.jsonp(a,k)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},zb=function(g,a,b,c){return{enabled:"true"===n.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===n.accountForSadImps&&c.measure(a),n._onAPIResult&&n._onAPIResult(a)}catch(e){g.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag",
"bapiClient")}}}},cb=function(){return{createInstance:function(g,a,b,c){return t.isDomless()?new Vb:new Wb}}},Wb=function(){var g=h.BROWSERS,a,b=function(){var a="0",b=s.getWindow(),c=function(a){return a.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",").join(".")};try{try{var d=s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{d.AllowScriptAccess="always"}catch(e){a="6"}}catch(k){}a=c(s.getNewActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"))}catch(g){try{b.navigator.mimeTypes[h.FLASH_MIME].enabledPlugin&&
(a=c((b.navigator.plugins["Shockwave Flash 2.0"]||b.navigator.plugins["Shockwave Flash"]).description))}catch(f){}}return a},c=function(){f.isUndef(a)&&(a=b());return a},d=function(a){return e()===a},e=function(){var a="u",b=s.getWindow();try{f.isDef(b.opera)&&f.isDef(b.opera.buildNumber)?a=g.OPERA:f.isDef(b.mozInnerScreenY)?a=g.GECKO:f.isDef(b.chrome)&&f.isDef(b.chrome.csi)?a=g.CHROME:f.isDef(b.msWriteProfilerMark)&&f.isDef(b.crypto)?a=g.MSEDGE:f.isDef(b.attachEvent)||f.isDef(b.msCrypto)?a=g.IE:
f.isDef(b.WebKitPoint)&&(a=g.WEBKIT)}catch(c){}return a},k=function(){var a=!1,b=s.getWindow();f.isDef(b.navigator)&&f.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:d,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasFlashEnabled:function(){return"0"!==c()},hasAncestorOrigins:function(){var a=s.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=s.getWindow();return!(!a||!f.isFunction(a.postMessage))},
getFlashVersion:c,getDocumentMode:function(){var a=s.getDoc();return a&&a.documentMode?a.documentMode:h.NA},getBrowserType:e,getUserAgent:k,params:function(){var a=e(),b=c(),k;k=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var p=h.NA,w=s.getDoc(),q=w.createElement("div");if(d(g.IE))try{if("-ms-ime-align"in w.documentElement.style)p="11";else for(q.style.behavior="url(#default#clientcaps)",w=0;w<k.length&&!(p=q.getComponentVersion(k[w],
"componentid").replace(/,/g,"."));w++);}catch(l){}k=p;p=h.NA;q=s.getWindow();f.isDef(q.navigator)&&f.isDef(q.navigator.appName)&&(p=q.navigator.appName.toLowerCase()[0]);return{br:a,fv:b,abv:k,an:p}},isAndroidWebViewBrowser:function(){var a=k(),b=["SamsungBrowser","FB_IAB","Silk"],c=function(){return f(b).findFirst(function(b,c){return M.contains(a,c)})};return M.contains(a,"Android")&&c()},getIOSVersion:function(){var a,b;(a=k())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&
0<b.length&&parseInt(b.toString()));return b}}},Vb=function(){var g=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getFlashVersion:function(){return"0"},getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",fv:"0",abv:a(),an:a()}},browserIs:g,getUserAgent:g,hasPostMessage:g,hasFlashEnabled:g,hasAncestorOrigins:g,hasIntersectionObserver:g,isAndroidWebViewBrowser:g}},gb=function(){return{createInstance:function(g,a){return t.isDomless()?
new Xb(a):new Yb(g,a)}}},Yb=function(g,a){var b=function(a,b){var c,d,e=n.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];d=c[0]+b+c[1];"true"===n.forceAppend?"script"!==a?(c=K.createElement("DIV"),c.innerHTML=d,e.appendChild(c.childNodes[0])):
(c=K.createElement("SCRIPT"),c.src=b,e.appendChild(c)):K.write(d)},c=function(a,b,c){var d=!c&&x.getXHR2();d?(d.open("POST",a),d.onreadystatechange=function(){4===d.readyState&&200===d.status&&b&&b()},d.send()):(c=v.createImage(),b&&(c.onload=b),c.src=a)},d=function(a,b,c,d){var e=K.createElement("script");c=c||n.contextNode.parentNode;e.type="text/javascript";e.src=a;b&&(e.onload=b);d&&(e.setAttribute("defer",""),e.setAttribute("async",""));f.isDef(c)&&c.appendChild(e)},e=function(a){f.isFunction(a)?
a({iasImpId:n.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},k=function(b,c,e,k){d(a.wrap(b,c,e,k))};l.on({addNode:b,send:c,exec:d,notify:e,jsonp:k});return{addNode:b,send:c,exec:d,notify:e,jsonp:k}},Xb=function(g){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";l.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);l.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){l.request("omidVerificationClient").injectJavaScriptResource(a,
b||function(){})},d=function(a){f.isFunction(a)?a({iasImpId:n.asid}):a&&"string"===typeof a&&b(a)},e=function(a,b,d,e){c(g.wrap(a,b,d,e))};l.on({addNode:a,send:b,exec:c,notify:d,jsonp:e});return{addNode:a,send:b,exec:c,notify:d,jsonp:e}},t=function(){var g="undefined"===typeof window,a="undefined"!==typeof window&&"undefined"!==typeof top&&window!==top,b=function(){var a=!1;if(g)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return!g&&f.isDef(s.getWindow().mraid)},d=function(){var a=
!1;if(!g)var b=(a=s.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&f.isFunction(b.addVideoEventListener),a=c()&&!!a;return a},e=function(){return n.mobOrTab},k=function(a){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(b,c){return M.contains(c.id,a)}).length},u=function(){return k("grpm")||n.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(g)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(d){}a=
b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return s.now()-n.birthdate},getPageTime:function(){var a=h.NA;!g&&f.isDef(window.chrome)&&f.isDef(window.chrome.csi)&&f.isFunction(window.chrome.csi)&&(a=s.round(chrome.csi().pageT));return a},isVideo:function(){var a;if(!(a=-1!==n.mode.indexOf("jsvid"))){var b;a=!1;if(!g){var c=l.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=l.request("omidVerificationClient"),
a=!1,c=l.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===h.MEDIA_TYPE.VIDEO),b=a||d());a=b}return a},isMobileApp:function(){return g||f.isDef(s.getWindow().mraid)},isSpecifiedAd:function(){var a=!1;g||(a=(a=n._cl_adpath)&&f.isStr(a));return a},isAvid:function(){return!g&&f.isDef(s.getWindow().avid)},isOmid:function(){var a=l.request("omidVerificationClient");return a&&a.isSupported()},isDomless:function(){return g},isAvidNative:function(){var a=!1;if(!g){var b=l.request("avidJsClient");b.isAvidAvailable()&&
(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;g||(a=void 0!==ba());return a},isMraid:c,isSafeFrame:function(){var a=!1;g||(a=f(s.getWindow().$sf).isObj(!1)&&f(s.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:d,isDeviceTypeGroupMobile:e,usesIASFullyInViewCustomMetric:function(){return k("fiv")||n.use100v},isNativo:function(){var a=!1;g||(a=(a=n._cl_adpath)&&
M.contains(a,".ntv"));return a},usesGroupMCustomMetric:u,isCeltra:function(){var a=!1;g||(a=ua().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return u()&&e()},usesZeroPivCustomMetric:function(){return!1===f(n.customViewability).isArray()?!1:0<f(n.customViewability).filter(function(a,b){return f(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length}}}(),x={addEvent:function(g,a,b,c){f.isDef(g.addEventListener)?"mouseenter"===a?g.addEventListener("mouseover",
x.mouseEnter(b),c):"mouseleave"===a?g.addEventListener("mouseout",x.mouseEnter(b),c):g.addEventListener(a,b,c):f.isDef(g.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),g.attachEvent("on"+a,b))},removeEvent:function(g,a,b){f.isDef(g.removeEventListener)?("mouseenter"===a?(a="mouseover",b=x.mouseEnter):"mouseleave"===a&&(a="mouseout",b=x.mouseEnter),g.removeEventListener(a,b)):f.isDef(g.detachEvent)&&g.detachEvent("on"+a,b)},mouseEnter:function(g){var a=this;return function(b){var c=b.relatedTarget;
this===c||a.isAChildOf(this,c)||g.call(this,b)}},isAChildOf:function(g,a){if(g===a)return!1;for(;a&&a!==g;)a=a.parentNode;return a===g},getStyle:function(g,a,b){var c="",d=K.defaultView&&K.defaultView.getComputedStyle;b=b||"";d?c=(g=K.defaultView.getComputedStyle(g,b))?g.getPropertyValue(a):c:g.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=g.currentStyle[a]);return c},getXHR2:function(g,a){var b,c;f.isDef(B.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&
(b=c)):f.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(g,a){if(t.isDomless())s.setTimeout(function(){g()},50);else{var b=a||(t.xDomainIframe?K:s.getTop().document),c=function(a){var c=s.setInterval(function(){b.body&&(s.clearInterval(c),a())},50)},d=this;(function(a){var k=function(){a(!0)};f.isFunction(K.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?s.execAtEndOfThread(k):d.addEvent(b,"DOMContentLoaded",k,!1):c(a)})(g)}},
isSandboxed:function(g){var a,b=s.getWindow(),c=!1;if("sandbox"in s.getDoc().createElement("iframe")){try{a=b.frameElement}catch(d){}if(a)g=a.hasAttribute("sandbox");else{a=!1;b=s.getDoc();if(g.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(e){/Assignment is forbidden for sandboxed iframes/.test(e.message)&&(a=!0)}g=a}c=g}return c},styleElement:function(g,a){if(g&&f(g.style).isObj()&&f(a).isObj()){var b="";f(a).each(function(a,d){b+=a+": "+d+" !important;"});g.style.cssText=b}},nodeIsAbsolutelyPositioned:function(g){return"absolute"===
x.getStyle(g,"position")||g.style&&"absolute"===g.style.position}},Y=function(g){var a,b=Y.callTypeCounter,c=[h.DT_CODES.ADTALK],d={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},e=function(){var a={},b=h.DT_CODES;f("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,e){a[b[e]]=d[e]});return a};a=function(){var a=e()[g],d=
b&&b[g];f.isDef(d)&&0!==d&&f(c).contains(g)&&(a=a+"."+d);d=b[g];b[g]=f.isDef(d)?d+1:1;return a}();return{callType:g,enumerator:a}};Y.callTypeCounter={};var yb=function(g,a,b,c,d,e,k,u){var m=0,r=0,p=!1,w=function(a,e,u,g,q,w){u=u||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==k.getCurrentLoc()))try{var v=n.dtBaseURL,H=new T(v,!0),x=s.now();
l.trigger("preSendDt",a);v||(H.path("dt"),b.on("usedtdomain")&&H.sub("dt"));L(H,a,e);q&&q.field&&H.setParam(q.field,q.value);g||y(H,a);l.trigger("send",H,function(){r+=1;m=s.now()-x;f.isFunction(w)&&w()},u);a===h.DT_CODES.UNLOAD&&(p=!0);d.cleanup()}catch(P){__IntegralASDiagnosticCall("dt-"+a,P),l.trigger("error",h.ERROR_CODES.PHONE_HOME)}};g=function(){p||w(h.DT_CODES.UNLOAD,-1,!0)};var q=function(a,c){var d={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},e=n.mode,d=d[a]||d[e];b.on(c||e+"Diag")&&
d&&w(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:d})},L=function(a,b,e){var u=new Y(b);e=f.isDef(e)?e:u.enumerator;a.setParam("asId",n.asid);e={c:c.getCacheBustId(),pingTime:e,time:t.getTagTime(),type:b};d.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},e);a.setParam("tv",e)},y=function(c,g){var f,p={};d.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===g},function(a,b){c.setParam(a,b.replace("%3A",":"))});k.fastForward();
if(g===h.DT_CODES.CUSTOM||g===h.DT_CODES.UNLOAD||g===h.DT_CODES.VIDEO_EVENTS||g===h.DT_CODES.FULLY_INVIEW||g===h.DT_CODES.PING||g===h.DT_CODES.VIEWABILITY_READY||g===h.DT_CODES.ADTALK)p.clog=u,t.isVideo()&&(f=l.request("videoEventsString"))&&!f.isEmpty()&&(p.ve=f);g===h.DT_CODES.UNLOAD&&(p.ndt=r);-1!==n.mode.indexOf("jsvid")&&(p.vv=l.request("videoVersion"));p.NULL1=b.output();p.NULL2=k.stringify(10);p.em=t.embedded;p.fr=t.friendly;p.e=a.toString();p.tt=n.mode;p.dtt=m;d.filterOutput(function(a){var b=
!a.standalone&&!a.minDt&&(!a.type||a.type===g);b&&a.oneTime&&(a.flagForRemoval=!0);return b},p);c.setParam("tv",p);c.setParam("br",e.getBrowserType())};l.on({sendDt:function(a,b,c){w(a,f.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:q,updateDtCount:function(){r++},unload:g});return{send:w,unload:g,diagnostic:q,setViewabilityMod:function(a){}}},I=function(g){var a={},b=!1,c=function(){var a=1===g.nodeType?v.nodeIsHidden(g):0===g.width||0===g.height;return b?
!1:a},d=function(){var b={};f(a).each(function(a,c){b[a]=s.round(c)});return b},e=function(a){return f.isNumeric(a)||f.isUndef(a)},k=function(){return s.round(a.width)*s.round(a.height)};(function(){var b;g!==B.parent&&(1!==g.nodeType?a=g:f.isDef(g.getBoundingClientRect)&&(b=v.getRect(g),f(a).mixin({x:f.useIfDef(b.x)||b.scrX,y:f.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return e(a.scrX)&&e(a.scrY)&&f.isNumeric(a.width)&&f.isNumeric(a.height)},
toString:function(){var a=d();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:d,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:k,isMrcLarge:function(){return k()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=k()}}},v={findElementsWithSize:function(g){var a=[],b=function(c){1>v.getNodeArea(c)?f(c.children).each(function(a,c){b(c)}):a.push(c)};b(g);return a},nodeIsHidden:function(g){var a=this.getRect(g),b=0!==parseInt(x.getStyle(g,"width"))&&
0===a.width,a=0===a.width||0===a.height;g="hidden"===x.getStyle(g,"visibility");return b||a||g},calcWinDims:function(){var g,a,b;try{a=v.browserWindowPosition(),b=v.windowSize(),g={scrX:s.round(a.scrX),scrY:s.round(a.scrY),width:s.round(b.width),height:s.round(b.height)}}catch(c){l.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),g={}}return g},windowSize:function(){var g={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,f.isDef(top.innerWidth))g.width=
top.innerWidth,g.height=top.innerHeight;else if(f.isDef(b.clientWidth))g.width=b.clientWidth,g.height=b.clientHeight;else if(f.isDef(a.clientWidth))g.width=a.clientWidth,g.height=a.clientHeight;else throw g.width=g.height=0,"";else f.isDef(window.outerWidth)&&(g.width=window.outerWidth,g.height=window.outerHeight);return g},browserWindowPosition:function(){var g=0,a=0;f.isDef(window.screenX)?(g=window.screenX,a=window.screenY):f.isDef(window.screenLeft)&&(g=window.screenLeft,a=window.screenTop);return{scrX:g,
scrY:a}},getNodeArea:function(g){var a=-1;g&&(g=v.getRect(g),a=g.width*g.height);return a},getRect:function(g){var a={},b=v.browserWindowPosition();g=g.getBoundingClientRect();f.isUndef(g.x)&&(a.x=g.left,a.y=g.top);f.isUndef(g.width)&&(a.width=g.right-g.left,a.height=g.bottom-g.top);f(a).mixin(g,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(g){g=g.document;return g.documentElement&&f.isDef(g.documentElement.clientWidth)&&g.documentElement||g.body},getPlaceholderSpan:function(){var g=
K.createElement("span");f(g.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});g.innerHTML=".";return g},createImage:function(){var g=t.friendly&&s.getTop().Image;return f.isFunction(g)?new g:new Image},createHiddenIframe:function(g){var a=s.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};x.styleElement(a,g?{display:"none"}:b);return a},tagNameIs:function(g,a){return g.tagName.toUpperCase()===
a.toUpperCase()},getClippedDimensions:function(g,a){var b,c,d,e=1E4,k=1E4;b=x.nodeIsAbsolutelyPositioned(g);d=!v.tagNameIs(g,"OBJECT");if(null!==g.parentNode&&!b&&d&&!v.tagNameIs(a,"BODY")){d=g;do d=d.parentNode,b=!v.tagNameIs(d,"OBJECT"),c="inline"!==x.getStyle(d,"display"),b&&c&&(b=v.getRect(d),e=b.width<e?b.width:e,k=b.height<k?b.height:k);while(d.parentNode!==K&&d!==a)}return{width:s.round(e),height:s.round(k)}},findChildWithLargestContent:function(g){var a=l.request("mobileApp").isMobileAppEnvironment(),
b=function(b){for(var c=b;b.parentNode!==g&&"inline"!==x.getStyle(b.parentNode,"display");){var d;if(!(d=!a)){d=b.parentNode;var f=!0;if("visible"===x.getStyle(d,"overflow")||"visible"===x.getStyle(d,"overflowX")&&"visible"===x.getStyle(d,"overflowY"))f=!1;d=f}d&&(c=b.parentNode);b=b.parentNode}return c},c=null,d=function(a){var b,c,d=null,f=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var p=a[b],w=v.getNodeArea(p),q;if(q=w>f){q=void 0;if(q=p.parentNode===g)if(q=void 0,q="DIV"===p.nodeName)if(q=void 0,
q=""===p.style.backgroundImage){var h=q=void 0,y=p.childNodes;for(q=0;q<y.length;q++)1===y[q].nodeType&&(h=!0);q=!h}q=!q}q&&(d=p,f=w)}d&&(d.hasValidSizeForMobileApp=1<f);return d}(function(a){var b,c,d,g,f=[],w="iframe img a object embed div".split(" ");b=0;for(c=w.length;b<c;b++){var q=a.getElementsByTagName(w[b]);if(q.length)for(d=0,g=q.length;d<g;d++)f.push(q[d])}return f}(g));d&&(c=b(d),c.hasValidSizeForMobileApp=d.hasValidSizeForMobileApp);return c},screenSize:function(){if(t.isDomless())return{width:0,
height:0};var g={width:-1,height:-1};try{f.isDef(window.screen)&&(g={width:window.screen.width,height:window.screen.height})}catch(a){}return g},calcMonDims:function(){var g=f(v.screenSize()).mixin({scrX:0,scrY:0});f.isDef(screen.availLeft)&&(g={scrX:window.screen.availLeft,scrY:window.screen.availTop,width:window.screen.availWidth,height:window.screen.availHeight});return g},getOurIFrameInTop:function(){for(var g,a=s.getTop(),b=s.getWindow();b!=a;)g=b,b=g.parent;return g},getOurNodeInTop:function(){var g;
t.friendly&&(g=t.embedded?(g=v.getOurIFrameInTop())&&g.frameElement:n.contextNode);return g},getAncestorNodes:function(g){var a=[],b=g.ownerDocument&&g.ownerDocument.documentElement;if(b)for(;g.parentNode!==b;)a.push(g),g=g.parentNode;return a},getTagsNamed:function(g,a){var b,c=a||s.getDoc();try{b=c.getElementsByTagName(g)}catch(d){b=null}return b},containsScriptTagWithSrc:function(g){return!!f(v.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return f.isFunction(g)?g(c):c===g})},contains:function(g,
a){var b=!1;try{b=f.isDef(g)&&f.isFunction(g.contains)&&g.contains(a)}catch(c){}return b},querySelector:function(g,a){var b;try{b=g.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(g,a){return g.ownerDocument&&(g.ownerDocument.defaultView||g.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&f.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&f.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,
c,d=[n.contextNode.parentNode,s.getDoc()];t.friendly&&d.push(s.getTop().document);if(a&&t.embedded)try{d.push(s.getWindow().frameElement.ownerDocument)}catch(e){}f(d).each(function(a,d){try{c=v.querySelector(d,g)}catch(e){}!b&&c&&(b=c)});return b},getNodeName:function(g){return g&&g.nodeName},isWindow:function(g){var a=!1;try{a=g&&"object"===typeof g&&"setInterval"in g}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=v.getTagsNamed("iframe",g))&&(a=f(g).map(function(a,c){return c.contentWindow}));
return a},getFrameId:function(){var g=s.getWindow().frameElement;return g&&g.id},isViewportVisible:function(g,a){var b=g.innerWidth,c=g.innerHeight,d=b>a.width&&c>a.height;return b*c>a.width*a.height&&d},getTagName:function(g){return g.tagName.toLowerCase()},getAttribute:function(g,a){return g.getAttribute(a)},attributeMatches:function(g,a,b){g=g&&v.getAttribute(g,a);return b.test(g)},isImageTag:function(g){return g&&g.src&&v.tagNameIs(g,"img")},getDimensionFromStyle:function(g){var a,b=x.getStyle(g,
"width");g=x.getStyle(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=v.getAttribute(g,"width");g=v.getAttribute(g,"height");b&&g&&(a={width:f.getNum(b),height:f.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var d,e,k;if(c(b))e=b;else if(k=b.children)for(d=0;d<k.length&&!(e=a(k[d],c));d++);return e},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,
d="fixed"===x.getStyle(a,"position"),e="hidden"!==x.getStyle(b,"overflow")&&!d;t.isSpecifiedAd()&&(d||e)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=v.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return v.getElementsWindow(a)!==s.getTop()},getParent:function(a){return a.parentNode||a.parent}},db=function(){var a={},b=function(b){f.isDef(a[b])?a[b]++:a[b]=1};l.on("error",function(a){a=
f(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",d;for(d in a)a.hasOwnProperty(d)&&(b+=d);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Cb=function(){return{createInstance:function(a,b){return t.isDomless()?new Zb:new $b(a,b)}}},$b=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=f(a).map(function(a,b){return b.val}),b.push(n.adsafeSrc,n.requrl,n.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");
return b};return{parse:function(d){try{var e,k=c(d),u=k&&k.length&&k.join("|"),m=n.exchList;u&&(e=f(m).map(function(a,b){return 0<=u.indexOf(M.rot(b))?a:void 0}),e.length&&b.addItem({output:e.join(".")},"ex",{type:h.IMPRESSION_EVENT}))}catch(r){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},Zb=function(){return{parse:function(a){}}},$a=function(){var a={},b=function(b){var c;f.isUndef(a[b])&&(c=n.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],
a[b]=!c||c>100*s.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},d={},e=function(){var b,e;b=f(c).mapToObj(function(b,c){var d={};d[b]=f.fromBoolToNum(a[c]);return d});e=f(d).mapToObj(function(a,b){var c={};c[a]=f.fromBoolToNum(k(b));return c});e.gm=f.fromBoolToNum(t.usesGroupMCustomMetric());return f(b).mixin(e)},k=function(a){a=n[a];return!0===a||"true"===a||f.isFunction(a)};f(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:k,bootstrapperHas:function(a){a=f.isStr(a)?[a]:
a;return f(a).map(function(a,b){if(f.isDef(n[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=n.sp_cdnScripts&&n.sp_cdnScripts[a];return c&&a},output:function(){return f(e()).toParams()}}},rb=function(a){return{calcInitialViewState:function(a,c){var d;d={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},k=h.NA;d=c?d:e;f.isDef(a)&&a!==h.NA&&-1<a&&(k=a>=d.IN_VIEW?h.IN_VIEW:a<=d.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=d.PARTIAL_VIEW?
h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return k},calcPercentInView:function(a,c,d,e){var k=0,u=a;a.hasValidDims()&&!a.isHidden()&&(f([c,d,e]).each(function(a,b){if(b.hasValidDims()){var c=u.getRounded(),d=b.getRounded(),e=Math.max(c.scrX,d.scrX),k=Math.max(c.scrY,d.scrY),f=Math.min(c.scrX+c.width,d.scrX+d.width),c=Math.min(c.scrY+c.height,d.scrY+d.height),f=f-e,c=c-k;u=I({scrX:e,scrY:k,width:0<f?f:0,height:0<c?c:0})}}),k=s.round(u.area()/a.area()*100));return k}}},eb=function(){var a,b=!1,c;a=
function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=B.Uint32Array&&B.crypto&&B.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),B.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*s.random()|0).toString(16);a=a.slice(0,32)}catch(d){l.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var d=function(){return n.anId};return{getAsid:function(){return n.asid},
getAnId:d,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return f.toBase(a,62)},getFwId:function(){return d()||n.advEntityId+"-"+n.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},Xa=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},xb=function(a){var b=
function(a,b){return{time:a,task:b}};return{createPingJobs:function(a,d,e,k){return f(d.timeThresholds).map(function(d,m){var r=m/1E3;return new b(m,function(){f.isDef(k)&&l.trigger("addOutputItem",{output:k},"metricId",{type:a});l.trigger("sendDt",a,r);if(e[m])e[m]()})})}}},ma=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var f=a.indexOf("?");b=b+"="+c;if(-1===f)return a+"?"+b;f++;return a.slice(0,f)+b+"&"+a.slice(f)},c=function(){return"__IntegralAS_"+
n.asid.replace(/\-/g,"")+"_"+s.round(1E4*Math.random())};return{wrap:function(d,e,k,f){var m=c(),r,p,w;f=f||"ias_callback";d=""+d;RegExp(f).test(d)&&(r=RegExp("("+f+"=)(.[^&]*)").exec(d)[0],p=r.split("=")[1],w=M.stringToFn(p),d=a(d,r));B[m]=function(a){e(a);k&&w&&w(a);B[m]=void 0};return d=b(d,f,m)},wrapToGlobal:function(a){var b=c();B[b]=function(c){a(c);B[b]=void 0};return b}}},Ab=function(a,b,c){var d=function(a,b){var c=a,d;b&&(d=","+f(b).stringify(function(a,b){return a+":"+b},","),c=T(a,!0),
c.appendToParamValue("adsafe_jsinfo",d),c=c.toString());return c},e={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?l.trigger("jsonp",c,a.callback,!0):l.trigger("send",c,function(){l.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){l.trigger("jsonp",b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){l.trigger("jsonp",
b,a.enabled?a.callback:f.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){l.on("adImpression",function(e,m){var r;try{r=d(c,m),a.enabled?l.trigger("jsonp",r,a.callback,!0):l.trigger("send",r,f.noop,!b.on("postMon"))}catch(p){__IntegralASDiagnosticCall("jsvidimp",p,n)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===n.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&l.trigger("jsonp",c(a),function(a){l.trigger("videoBlockResult",
a)});l.on("adImpression",function(c,e){var m;try{var q;if(q=b)q=c&&f.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;q&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));m=d(a,e);l.trigger("send",m,f.noop,!0)}catch(h){__IntegralASDiagnosticCall("fwjsvidimp",h,n)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=e[n.mode],d=!!b.isFW,f=function(a){var b;b=l.request("mobileApp").isMobileAppEnvironment()&&
n.mobFwUrl?n.mobFwUrl:a?n.adsafeSrc:n.requrl;a||(b+="?"+n.reqquery);return b}(d),p=f.indexOf("BEGIN__ADSAFE"),h=-1!==p,q=h?f.slice(p):"",a=h?f.slice(0,p):a(f);return{isFW:d,baseUrl:a,macroUrl:q,sendImpression:function(a){var d=function(){b.nodeType?l.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)d(a);else if(!b.manualDefer)l.on("adImpression",function(){d(a)})}}}},s={execAtEndOfThread:function(a){s.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},
round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return B},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?l.request("omidVerificationClient"):B},setInterval:function(a,b){return s.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return s.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){s.getTimeoutScope().clearInterval(a)},
clearTimeout:function(a){s.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getNewActiveXObject:function(a){t.isDomless();return new ActiveXObject(a)},getDoc:function(){t.isDomless();return K},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},mb=function(){return{createInstance:function(){return t.isDomless()?new ac:new bc}}},bc=function(){var a,
b=!1,c=l.request("features"),d=new $,e=function(){var b;c.on("blur")||c.on("abcAudit")&&923747==n.anId?(b=s.getWindow(),b=t.friendly&&b.top.document&&(f.isFunction(b.top.document.hasFocus)||f(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(f.isDef(a.prop)?s.getDoc()[a.prop]:null)):b=f.isDef(a.prop)?s.getDoc()[a.prop]:null;return b},k=function(){var b=s.getWindow(),c=function(){d.run(e())};x.addEvent(b,"focus",c,!0);x.addEvent(b,"blur",c,!0);a.event&&x.addEvent(s.getDoc(),a.event,c,
!0)};a=function(){var a,b="hidden",c="visibilitychange",d=s.getDoc();f.isUndef(d.hidden)?f(["moz","ms","webkit"]).each(function(e,k){var h=k+"Hidden";f.isDef(d[h])&&(b=h,c=k+c,a=!0)}):a=!0;return a?{prop:b,event:c}:{}}();return{isHidden:e,onHiddenChange:function(a){d.push(a);b||(b=!0,k())}}},ac=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){}}},ob=function(){return{createInstance:function(a,b){return t.isDomless()?new cc:new dc(a,b)}}},dc=function(a,b){var c,d=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||f.isUndef(c))&&delete a[b]}return a},e=function(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=a[d],f.isUndef(b[c])?b[c]=d:b[c]+=d);a={};for(d in b)b.hasOwnProperty(d)&&(c=b[d],a[c]=d);return a},k=function(){var k,m=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var d=c.message,d=d.substring(d.lastIndexOf("<")+1,d.lastIndexOf(">")),e;if(e=f.isDef(d)){var k=
b.getWindow();e=!1;f.isDef(k.navigator)&&f.isDef(k.navigator.userAgent)&&(k=k.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==k&&2==k.length&&(k=k[1].split("."),3==parseInt(k[0],10)&&6>=parseInt(k[1],10)&&(3==k.length?13>=parseInt(k[2],10)&&(e=!0):e=!0)))}e&&(a.g=d)}return a},r={};try{r.a=encodeURIComponent(top.location.href)}catch(p){}try{r.b=encodeURIComponent(parent.location.href)}catch(h){}if(t.embedded){try{r.c=encodeURIComponent(parent.document.referrer)}catch(q){}try{r.e=encodeURIComponent(window.document.referrer)}catch(l){}}try{"jsi"!==
n.mode&&(r.d=encodeURIComponent(window.location.href))}catch(y){}try{r.f=encodeURIComponent(n.jsref)}catch(s){}try{k=m(),r.g=encodeURIComponent(k.g||""),r.q=encodeURIComponent(k.q||""),a.isStarted()&&!k.g&&1<a.getMyFrameDepth()&&(r.g=encodeURIComponent(a.getTopDomain()))}catch(C){}r=d(r);r=e(r);k=[];for(var A in r)r.hasOwnProperty(A)&&k.push({key:A,val:r[A]});k.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=k};return{detectTopURL:k,getDetectedURLs:function(){return c?
c:k()}}},cc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},lb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",n._onSuspicious)},skipAsFraudulent:function(){return b}}},pb=function(){var a=[],b={},c={sl:"n"},d=0,e,k,u={i:0,o:0,n:0,pp:0,pm:0},m=function(a){var b={},c=a.winDimensions,d=a.adDimensions;f.isDef(c)&&c.hasValidDims()&&(b.wc=c);f.isDef(d)&&d.hasValidDims()&&(b.ac=d,b.am=a.method,b.cc=a.containerDimensions);f({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,d){var e=a[d];f.isDef(e)&&(b[c]=e)});c=f(b).toParams();return""===c?"":","+c},r=function(a,c){var d=new Tb(c);return b[a]=d},p=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},w=function(){f(c).each(function(b,c){u[c]+=a.length?k-d:k});d=k},q=function(b){a.length&&w();f(b).each(function(a,b){var d=c[a];d!==b&&"n"===d&&(u[b]+=u.n);c[a]=b});a.length||w()},s=function(a){var c,
d=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=m(a);var e={sl:p(a.viewState)};k=t.getTagTime();q(e);e.t=k;c=f({toString:function(){f(b).each(function(a,b){b.fastForward()});return"{"+f(e).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+f(this.piv).stringify(b)+"]");a+=",as:["+f(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(e);f(c).mixin(a);c.width=d.width;
c.height=d.height;f.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);f.isUndef(c.reason)&&(c.reason="");return c};(function(){r("piv",function(a){var b,c=a.percentInView,d=[1,25,30,50,75];100===c||0===c?b=c:(f(d).each(function(a,e){f.isUndef(b)&&c<e&&(b=d[a-1])}),f.isUndef(b)&&(b=d[d.length-1]));return b});r("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){k=t.getTagTime();w()},registerLocation:function(d){var k,
u=!1;c.sl==p(d.viewState)&&a.length?(k=new s(d),a[a.length-1].details=k.details):(k=new s(d),a.push(k),e=d.viewState,u=!0);l.trigger("newScreenEvent",k);f(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(u&&c.clear(),c.addState(k),a[a.length-1].breakdowns[b]=c.get()):c.addState(k)});return k},stringify:function(b){var c="";a.length&&(c=f({slTimes:"{"+f(u).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:r,getCurrentLoc:function(){return p(e)}}},
M={hashCode:function(a){var b=0,c,d,e;if(0===a.length)return b;c=0;for(e=a.length;c<e;c++)d=a.charCodeAt(c),b=(b<<5)-b+d,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=B,d=a.split(".");for(a=0;a<d.length;a++)if(b=c,c=c[d[a]],f.isUndef(c)||a===d.length-1&&!f.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=s.getWindow(),
c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!f.isUndef(b));a++);return b},contains:function(a,b){return f.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return f.isFunction(a.trim)?a.trim():a.replace(" ","")}},ec=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=v.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var d;(d=b(c))||(c=v.getDimensionFromStyle(c),d=a(c));return d},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,d=/doubleclick.net\/pcs\/click?/,e=/_blank/,k=function(a){var d=v.tagNameIs(a,"div"),e=v.attributeMatches(a,"class",b);a=v.attributeMatches(a,"id",c);return d&&e&&a};return{getDFPGoogleDiv:function(a){return v.traverseAndFindFirstMatchingNode(a,k)},getClickableImage:function(b){var c,k=(b=v.getFirstChildElement(b))&&v.tagNameIs(b,"a"),f=v.attributeMatches(b,"href",d),h=v.attributeMatches(b,"target",e);k&&f&&h&&(b=v.getFirstChildElement(b),v.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return v.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},fc=function(){var a=ec(),b=function(a,b){b.tag=v.getTagName(a);b.size=v.getDimensionFromAttributes(a)||v.getDimensionFromStyle(a)};return{getDFPValue:function(c){var d;if(d=a.getDFPGoogleDiv(c)){var e;c={type:0};if(d)if(c.type=1,e=a.getClickableImage(d))c.type=2,b(e,c);else if(d=a.getNodeMatchingMinimumSize(d))c.type=3,b(d,c);d=c}else if(d=
{type:0},c=a.getNodeMatchingMinimumSize(c))d.type=4,b(c,d);return d}}};O("viewport",[],function(){var a={width:4,height:4},b=function(c,d){if(c!==d&&!v.isViewportVisible(c,a))return c;if(c!==d&&t.isFriendlyToParent(c))return b(c.parent,d)},c=function(){var a=s.getWindow();return b(a,s.getWindow().top)},d=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:d,isCurrentIframeTheHiddenFrame:function(){var b,c=s.getWindow();v.isViewportVisible(c,a)?d()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var gc=function(a){var b,c,d=function(d){b=a.setInterval(d,100);c=a.setTimeout(function(){e()},42E4)},e=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,f=a.innerHeight,r=!1;d(function(){var d;d=a.innerHeight;(d=a.innerWidth!==c||d!==f)&&(r=!0);r&&!d&&(b(),e(),r=!1);c=a.innerWidth;f=a.innerHeight})}}};O("adStuffingDetector",["viewport"],function(a,b){var c,d=function(){try{var d=a.isHidden(),k,u={};d!==c&&(k=f.stringifyTriState(d),
u.res1=k,u.ps=k,u.ts=s.now(),u.psfr=f.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=d}catch(m){l.trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){d();var b=a.getWindowWithHiddenViewport();if(b)gc(b).onResize(d)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});O("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){l.trigger("addThrottledProp",h.DT_SLOT.FRAUD,
a,f(b).toION())},d=function(a){2>b&&c("ha1",a);b++};(function(){var b,k;if(t.embedded)try{k=n.contextNode.parentNode,b=fc().getDFPValue(k),k={},k.df=b.type,b.size&&(k.sz=b.size.width+"."+b.size.height),b.tag&&(k.dom=b.tag),c("dfp",k),b.size&&a&&(a.events.on("newState",d),a.start())}catch(f){l.trigger("error",h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var jb=function(){return{createInstance:function(a){return t.isDomless()?new hc:
new ic(a)}}},ic=function(a){var b,c,d,e=new qa,k=new aa,u=new jc(e),m=new kc,r=new lc,p=new mc(e,a),h=function(){f.isUndef(d)&&(d=new nc(e));return d},q=function(){e.provide({frameCollection:function(){return u},adProxy:function(){return r},adTalkMessage:function(a){return new oc(a,e)},adTalkMessageCollection:function(){return m},idMapModule:h,interFrameQuerySelector:function(a){return new pc(a)}})};return{isApplicable:function(a){return f.isDef(window.JSON)&&f.isDef(window.postMessage)&&!a.isAvid()&&
!a.isOmid()},start:function(){q();k.traverse(u.addFrame);p.startListening();p.sendToKnownFrames();l.once("stopAdTalk",function(){p.stopListening()})},sendAdTalkCall:p.sendAdTalkCall,getFrameMap:function(){f.isUndef(b)&&(b=new va(e));return b},getFrameMapIncludingPeerCase:function(){f.isUndef(c)&&(c=new va(e,!0));return c},getIdMap:h}},hc=function(){return{isApplicable:function(){return!1},start:function(){}}},oc=function(a,b){var c,d=b.request("adProxy").myIdCard,e=b.request("frameCollection").getMe().getStringifiedPosition();
c=l.request("features").on("swapids")?n.oid:n.asid;var k=a||{},f=n.asid,d=d.tagId,m=t.embedded,r=t.friendly,p=n.birthdate;c=c.split("-")[2];var w;t.friendly?w="["+h.AD_IDENTIFIER+"-"+n.asid+"]":(w=s.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:k,srcAsid:f,srcTagId:d,srcIsEmbedded:m,srcIsFriendly:r,srcBirthdate:p,iasCommonId:c,nodeSelector:w,positionStr:e,version:"0.1"}},kc=function(){var a={};return{add:function(b){var c=
b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return f(a).map(b)},has:function(b){return a[b&&b.srcAsid]}}},qc=function(a,b,c,d){var e,k=a==B;e={position:b.slice(0),id:b.join("-"),isMe:k,isLeaf:!a.frames.length,adProxies:k?c:[],selfDescription:void 0,unifiedId:n.birthdate,srcIsEmbedded:d?d.srcIsEmbedded:void 0,inbox:d?[d]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return f(e.position).map(function(a,b){return f.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return e.isLeaf||
e.isMe||f.isDef(e.selfDescription)}};var u=function(a){var b=e.adProxies;a=a.adProxies;var c=[];b.length&&a.length?f(a).each(function(a,d){m(b,d)&&c.push(d)}):c=a;e.adProxies=b.concat(c)},m=function(a,b){return!f(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},r=function(a){f(e.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||e.inbox.push(a)};e.addInformationFromSrc=function(a,b){u(b);r(a);e.srcIsEmbedded=a.srcIsEmbedded;e.selfDescription=b};return e},jc=function(a){var b=
[],c={},d={noMe:!0};return{addFrame:function(e,k,f){var m=a.request("adProxy").getAll();e=new qc(e,k,m,f);b.push(e);c[e.id]=e;e.isMe&&(d=e);return e},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return d}}},va=function(a,b){var c=function(a,c){var f=c.adProxies,m="";if(c.isValidForMapping()){if(b)m+=d(f,c.getStringifiedPosition());else{var r;r=""+c.getStringifiedPosition();r+=c.isMe?"*":"";r+=f.length?"."+f[0].tagId:"";m+=r}return m}},d=function(a,b){var c="";return c=a.length?
c+f(a).stringify(function(a,c){return b+(n.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),d=f(b.list).stringify(c,"|");return f.toBase(b.getMe().unifiedId,62)+"+"+d}}},nc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=n.contextNode.parentNode,d=a.request("interFrameQuerySelector",c),e=function(a){return a&&a.substr(0,120)+".of"+a.length},f=function(a){var e=!1,e=!t.embedded,f="BODY"!==v.getNodeName(c)&&
"HEAD"!==v.getNodeName(c),k;if(k=a.srcIsEmbedded){k="0.1"!==a.version;var w=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);k=!(k?w:!a.srcIsFriendly)}e&&f&&!k?e=!!d.queryFor(a.nodeSelector):(e=a.positionStr,a=a.srcIsEmbedded&&t.embedded,e=0===b.indexOf(e)||0===e.indexOf(b),e=!(!a||!e));return e};return{output:function(){var c,d=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==n.asid&&f(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});
c.push(d);c=c.join("|");120<c.length&&(c=e(c),l.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:f}},pc=function(a){var b=new aa,c=function(a){var b=a,c="IFRAME"===v.getNodeName(a),d=v.isWindow(a);c?b=a.contentWindow.document:d&&(b=a.document);return b},d=function(a,b){return v.querySelector(c(a),b)},e=function(c,e){var m,r,p;try{r=d(c,e),r||(m=b.getFrames(!0,a),f(m).findFirst(function(a,b){return p=d(b,e)}))}catch(h){}return r||p||null};return{queryFor:function(b){var c=null;b&&(c=e(a,b));
return c}}},mc=function(a){var b=!1,c,d;d=l.request("features").on("swapids")?n.oid:n.asid;var e=function(b){var c=d.split("-")[2],e=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==n.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&e},k=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);l.trigger("sendDt",c)},m=function(c,d,e){var k,
m,y,n,C;try{k=a.request("frameCollection");m=a.request("adTalkMessageCollection");y=d.messageContent.self;m.add(d);var t=k.getMe();t.unifiedId>y.unifiedId&&(t.unifiedId=y.unifiedId);var v;v=s.now()-d.sentTime;d.transferDuration=v;m=n=k.getFrame(y.id);f.isUndef(m)||f.isUndef(m.selfDescription)?(n=n||k.addFrame(c.source,y.id.split("-"),d),n.addInformationFromSrc(d,y),e()):n.addInformationFromSrc(d,y);(C=b&&a.request("idMapModule").isCandidateForMyIdMap(d))&&u()}catch(z){l.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};
return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ra).send(k)},startListening:function(){c=new Pb;c.listen(e,m,k)},stopListening:function(){c&&c.stop()},validateMessage:e,processMessage:m,createMessage:k}},rc=function(){var a=l.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},lc=function(){var a,b=[],c=function(a){a=new rc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},qb=function(a){var b,c,d=!1,e=function(a){var e=!0;d&&(d=!1,a.stopPropagation?
(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,e=!1);return e};a.browserIs(h.BROWSERS.IE)&&x.addEvent(s.getDoc().documentElement,"click",e,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(d=!0,s.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},sc=function(a,b){var c,d=h.NA,e=d,k=!1,u=!1,m=!1,r=!b,p=function(){var b=s.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/
(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);d=Math.min(b,100);c=a.boundingClientRect;d!==e&&s.execAtEndOfThread(function(){l.trigger("IOPivChange",d)});e=d},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});r&&s.execAtEndOfThread(function(){d===h.NA&&(d=0)});b.observe(w(a));r&&s.execAtEndOfThread(function(){t.isBustedIframe()||l.trigger("delayedViewabilityReady")});k=!0},w=function(b){if(!f.isUndef(b)){if(m){b=a.document;var c=b.createElement("div");
f(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return d},start:function(){var b;try{a.document&&(m=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){u=!0}b&&null!==b.bodyElement?p():b&&b.document?x.whenReady(p,b.document):u?l.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):p()},isStarted:function(){return k},getAdNodeDimensions:function(){var a;
c&&(a=I({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return d!==h.NA}}},na=function(){var a=!1;(function(){x.whenReady(function(){l.trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};O("loopDelay",[],na,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var tc=function(){return{start:function(a){l.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},
uc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Ib=function(a,b,c){var d=!1,e=function(){b.impressionIsIdentifiable()&&!d&&(d=!0,l.trigger("notify",n._onMeasurable))};return{start:function(){var b;b=[vc(),wc(),uc(),tc()];(b=f(b).findFirst(function(b,d){return d.isApplicable(c,a)}))&&b.start(e)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&f.isDef(n._onMeasurable)}}},wc=function(){return{start:function(a){Qb(l,
["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},vc=function(){return{start:function(a){l.once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},xc=function(a,b,c){var d=["rjss","jss","jload"],e=function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=f.isDef(f(d).find(function(a,
b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:e,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){e()||a.addEventListener("ready",function(){l.trigger("adImpression")})}}},yc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,d=a.getAvidAdSessionContext();a.isAvidAvailable()&&
f.isDef(d)&&(c=d.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();f.isDef(c)&&(b=c.avidJsVersion,(c=f.isUndef(b))||(c=f.getNum(b.split(".")[0]),b=f.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},zc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},
isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&l.trigger("adImpression")})}catch(b){}}}},Ac=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},ga=function(a){var b=l.request("omidAdSessionContext");return{accepts:function(){return a&&a.isSupported&&a.isSupported()},isMediaType:function(a){return a===b.mediaType},supportsAdContainerGeometry:function(){return!0}}},Bc=function(a,b,c){var d=["rjss","jss","jload"];return{accepts:function(){var a=f.isDef(f(d).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},
start:function(){}}},La=function(a){return{resolve:function(){return f(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ka=function(a,b){var c=!1,d=!1,e=l.request("omidAdSessionContext"),f=function(b){"sessionStart"===b.type&&(e.isNative="native"===b.data.context.adSessionType,(c=!0)&&d&&(B.omidSupported=!0,a()))},u=function(b){e.mediaType=b.data.mediaType;b.data.viewport&&b.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:b.data.viewport,adView:b.data.adView}});e.isNativeVideo=
e.isNative&&"video"===b.data.mediaType;d=!0;c&&d&&(B.omidSupported=!0,a())};return{start:function(){b.registerSessionObserver(f,"IAS");b.addEventListener("impression",u)}}},Cc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Dc=function(a,b){var c,d=function(a){var d,f,m;try{d=a.eventData.percentageInView,
f=c&&75<=d,m={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:f,isMeasurable:0===d||75<=d,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:d,detectionMethod:"av"},b.trigger("screenLocationChanged",m)}catch(r){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",d)}catch(f){}},
addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Ec=function(a,b){var c=function(a){try{var c;"playerStateChange"===a.type?c="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?c="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(c="AdPaused");b.trigger("videoPlaybackEvent",{eventType:c,eventData:null})}catch(f){__IntegralASDiagnosticCall("omidvideo",
f,B.bootstrapper)}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},wa=function(a,b){var c=!1,d=function(a){var d=a.percentageInView;c=!0;a.viewState=50<=d?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=d?"":h.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",a)};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(d);
a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Fc=function(a,b,c){var d=f.isDef(a)?a.environment:void 0,e=f.isDef(a)?a.measurementStrategy:void 0,k=function(){return f.isDef(e)};f.isDef(b)&&b.start();return{hasMeasurementStrategy:k,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return k()?d.isImmediate():!0},isMeasurable:function(){return k()?
e.isMeasurable():!1},isMediaType:function(a){return k()?d.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){k()&&d.start()},requiresDelayedViewabilityEvent:function(){k()&&b.requiresDelayedViewabilityEvent()}}},hb=function(a,b,c){var d=l.request("mobileApp");return{create:function(){var e=[],e=e.concat(a.getOmidMeasurementStrategies()),e=e.concat(a.getAvidMeasurementStrategies()),e=e.concat(a.getMraidMeasurementStrategies()),
e=(new ca(e)).resolve(),f=new Gc(e),u=new xa(b,c,t,d);return!e&&u.accepts()?new Hc(t.isVideo(),new E):new Fc(e,f,d.isMobileAppEnvironment())}}},ib=function(a){var b=l.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=l.request("omidVerificationClient"),b=new ga(a),e=[];if(b.accepts()){var f=new Ic,u=new Jc,m=new Kc(a,new E),f=[{environment:f,measurementStrategy:new Lc(a,new E)},{environment:u,measurementStrategy:new ya(new da,s.getWindow(),new E)}],f=(f=(new ca(f)).resolve())?
f.measurementStrategy:{},r=new za(new Aa(new U),new U,u.accepts()),u=new Ac(a,b,n.mode),p=new Ba(m,f,new E,r),b=new Bc(a,b,n.mode),a=new Ca(m,f,new Ec(a,new E),new E,r);e.push({environment:u,measurementStrategy:p});e.push({environment:b,measurementStrategy:a})}return e},getAvidMeasurementStrategies:function(){var b=l.request("avidJsClient"),d=new yc(b),e=[];if(d.accepts()){var f=new xc(b,d,n.mode),u=new zc(b,d,n.mode),m;m=new Cc(b,new E);if(d.supportsAdContainerGeometry()){var r=new Mc,p=new Nc,h=
new ya(new da,s.getWindow(),new E),q=new Oc(b,new E),r=(r=(new ca([{environment:r,measurementStrategy:q},{environment:p,measurementStrategy:h}])).resolve())?r.measurementStrategy:{},p=new za(new Aa(new U),new U,p.accepts()),h=new Pc(b,new E),b=new Ba(h,r,new E,p);m=new Ca(h,r,m,new E,p)}else p=new Dc(b,new E),b=new wa(p,new E),m=new Da(p,m,new E);e.push({environment:f,measurementStrategy:b});e.push({environment:u,measurementStrategy:m});a.setAvidAdSessionContext(d.getAvidAdSessionContext())}return e},
getMraidMeasurementStrategies:function(){var a=[],d=b.isSafeToInjectMraid(),d=new Qc(s.getWindow(),d,b.isMobileAppEnvironment());if(d.accepts()){var e=l.request("context"),e=new Rc(s.getWindow(),e),f=new Sc(s.getWindow(),new E);e.accepts()?(d=new Tc(s.getWindow(),new E),d=new Da(f,d,new E),d={environment:e,measurementStrategy:d}):(e=new wa(f,new E),d={environment:d,measurementStrategy:e});a.push(d)}return a}}},ca=function(a){return{resolve:function(){var b=f(a).findFirst(function(a,b){return b.environment.accepts()});
if(f.isDef(b))return b}}},Gc=function(a){var b=!1,c,d={winDimensions:I({scrX:0,scrY:0,width:0,height:0}),adDimensions:I({scrX:0,scrY:0,width:0,height:0}),containerDimensions:I({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,posViewState:h.NA,adCompCount:1},e=function(a){return a?new I({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):I({scrX:0,scrY:0,width:0,height:0})},k=function(a){c={winDimensions:e(a.windowDimensions),
adDimensions:e(a.adDimensions),containerDimensions:e(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:f.isDef(a.percentageInView)?a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:f.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,
isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,l.trigger("delayedViewabilityReady"))};return{create:function(b){var e=d;if(f.isDef(c))if(a.environment.supportsAdContainerGeometry())e=c;else if(c.shouldDelegateToDomBasedViewability)e=b,e.method=c.method;else if(0===c.percentInView||75<=c.percentInView)e=c;return e},start:function(){var b;f.isDef(a)&&f.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(k),b.start())},requiresDelayedViewabilityEvent:function(){b=
!0}}},Da=function(a,b,c){var d=!1,e=!1,k=!1,u,m,r,p,w=function(){if(!f.isUndef(m)){var a=[],b,q;d?(e?(q=!1,b=100):(q=p,b=r),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(q=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));k=!0;m.shouldDelegateToDomBasedViewability=q;m.percentageInView=b;m.viewState=50>b?h.OUT_OF_VIEW:h.IN_VIEW;m.outOfViewReason=a.join(".");u=m;c.trigger("measurementChanged",u)}},q=function(a){m=a;r=a.percentageInView;p=a.shouldDelegateToDomBasedViewability;w()},s=function(a){a=a.eventType;
"AdEnteredFullscreen"===a?e=!0:"AdExitedFullscreen"===a?e=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?d=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(d=!1);w()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(q);a.start();b.addVideoPlaybackEventListener(s);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",
a)},isMeasurable:function(){return k}}},Rc=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,l.trigger("adImpression"))})}catch(d){}}}},Tc=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},Pc=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:d(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",
a)},d=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",
a)},translateAvidOutOfViewReasons:d}},za=function(a,b,c){function d(a,b,c){c=m(b,c);a=k(a,b,c);return a.width*a.height}var e=function(a,b){var c=Math.max(a.x,b.x),d=Math.max(a.y,b.y),e=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),e=e-c,f=f-d;return{x:c,y:d,width:0<e?e:0,height:0<f?f:0}},k=function(a,b,c){a=e(b,a);return e(c,{x:0,y:0,width:a.width,height:a.height})},u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},m=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(e,p){if(f.isDef(e)&&f.isDef(p)){var w=e.viewport,q=e.computedAdContainer,l=q.obstructions,n=l&&0<l.length,t=e.originalAdContainer,C=p.adGeometry,A=p.adFound,v=e.detectionMethod,z=0,w={x:0,y:0,width:w.width,height:w.height},D=u(t,C),J=e.outOfViewReason,Q=0,H=0,x=n||!1,P,Q=1>=C.width*C.height;c&&Q&&(A=!1,J=J||"",A||-1!==J.indexOf(h.OUT_OF_VIEW_REASONS.GEOM)||(J=h.OUT_OF_VIEW_REASONS.GEOM+(""!==J?"."+J:"")));if(A&&
0<e.percentageInView){Q=d(w,q,D);n?(z=m(q,D),z=k(w,q,z),z=u(q,z),z=a.calculateObstructedArea(z,l)):z=0;H=z;z=Math.round((Q-H)/(D.width*D.height)*100);n&&0===H&&(x=!1);C=x;n=0;A=b.getConfig(D).numberOfSlices;P=s.floor(D.height/A)||1;for(var l=[],Q=C?a.getObstructionStatusBySlice(A):[],V,n=0;n<A;n++)H=D.y+P*n,n==A-1&&(P=D.y+D.height-H),H={x:D.x,y:H,width:D.width,height:P},V=d(w,q,H),H=1==V/(H.width*H.height),l.push(H);if(C)for(q=s.min(Q.length,A),n=0;n<q;n++)l[n]=l[n]&&!Q[n];P=l}else A&&(P=b.getConfig(C).defaultSliceArray);
return{windowDimensions:w,containerDimensions:t,adDimensions:D,percentageInView:z,viewState:50<=z?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=z?"":J||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:v,isObstructed:x,sliceStatus:P}}}}},Mc=function(){return{accepts:function(){return t.isAvidNative()}}},Oc=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",
c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Nc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ba=function(a,b,c,d){var e,k,u,m=function(){if(f.isDef(e)&&f.isDef(k)){var a=d.calculateGeometricMeasurement(e,k);u=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},r=function(a){e=a;m()},p=function(a){k=a;m()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,
{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(r);a.start();b.addAdGeometryMeasurementChangedListener(p);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return u}}},Aa=function(a){var b=[],c;return{calculateObstructedArea:function(d,e){var k,h,m,r;h=e&&0<e.length;var p;if(h){p=Math.round(d.width);var l=Math.round(d.height);k=Array(p);for(m=
0;m<p;m++)k[m]=Array(l);p={matrix:k,obscuredPixelCount:0,x:Math.round(d.x),y:Math.round(d.y),width:p,height:l}}else p={};k=p;l=p=0;if(h){for(;p<e.length;p++){h=e[p];m=l=k;var q=h;k=Math.max(m.x,q.x);h=Math.max(m.y,q.y);r=Math.min(m.x+m.width,q.x+q.width);q=Math.min(m.y+m.height,q.y+q.height);m=r-k;r=q-h;m=0<m?m:0;r=0<r?r:0;k-=l.x;h-=l.y;m=k+m;r=h+r;for(k=Math.round(k);k<Math.round(m);k++)for(q=Math.round(h);q<Math.round(r);q++)void 0!==l.matrix[k]&&void 0===l.matrix[k][q]&&(l.matrix[k][q]=1,l.obscuredPixelCount+=
1);k=l}l=k.obscuredPixelCount;p=k;if(f.isUndef(p.matrix)||0===p.matrix.length)c=[];else{h=0;r=!1;k=p.matrix[0].length;m=p.matrix.length;r=a.getConfig({height:k}).numberOfSlices;for(var q=s.floor(k/r)||1,n=[],t=0;t<k;t++){r=!1;for(var v=0;v<m;v++)if(1===p.matrix[v][t]){r=!0;break}h++;r&&(t+=q-h,h=q);if(h==q||t===k-1)n.push(r),h=0}c=n}}else c=b;return l},getObstructionStatusBySlice:function(){return c}}},Kc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a={viewport:a.data.viewport||
{width:0,height:0},originalAdContainer:a.data.adView.geometry||{x:0,y:0,width:0,height:0},computedAdContainer:a.data.adView.onScreenGeometry||{x:0,y:0,width:0,height:0},percentageInView:a.data.adView.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:e(a.data.adView.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";f(a).each(function(a,d){var e=b[d];e&&0>c.indexOf(c)&&c.push(e)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:e}},Ic=function(){var a=l.request("omidAdSessionContext");
return{accepts:function(){return a&&a.isNative}}},Lc=function(a,b){var c=l.request("omidAdSessionContext"),d=function(a){a=a.data.adView.geometry;var c=!!a;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&d(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",d)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},
Jc=function(){var a=l.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ca=function(a,b,c,d,e){var k=!1,u=!1,m,r,p,w,q,s=function(){if(!(f.isUndef(r)||f.isUndef(p)||f.isUndef(w))){q=!0;var a=e.calculateGeometricMeasurement(r,p),b=k&&u,c=k&&50<=a.percentageInView,l={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,
sliceStatus:a.sliceStatus,isVideoPlaying:k,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(l.percentageInView=100);b||c?l.viewState=h.IN_VIEW:(l.viewState=h.OUT_OF_VIEW,l.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);m=l;d.trigger("videoGeometryMeasurementChanged",m)}},n=function(a){r=a;s()},t=function(a){p=a;s()},C=function(a){w=a;a=a.eventType;"AdEnteredFullscreen"===a?u=!0:"AdExitedFullscreen"===a?u=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?k=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&
(k=!1);s()};return{start:function(){l.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(n);a.start();b.addAdGeometryMeasurementChangedListener(t);b.start();c.addVideoPlaybackEventListener(C);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){d.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return q}}},ya=function(a,
b,c){var d,e=function(){var b=a.find(),e,m=!0;f.isDef(b)?(e=b.getBoundingClientRect(),e={x:e.left,y:e.top,width:e.width,height:e.height},b.hasOwnProperty("adWasClipped")&&(e.adWasClipped=!0)):m=!1;if(b=m)b=e,b=!f.isDef(d)||!1!==f(b).compareTo(d);b&&(d=e,c.trigger("mobileAppGeometryChanged",{adGeometry:e,adFound:m}))};return{start:function(){e();b.setInterval(e,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},Qc=function(a,b,c){return{accepts:function(){var d=
f(a.mraid).isObj();return c&&(d||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},Sc=function(a,b){var c=!1,d=function(){var c,d,e;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};e=100===c?[!0]:[!1];d={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:e};b.trigger("mraidScreenLocationChanged",
d)}catch(k){}},e=function(){var b=a.mraid;return f(b).isObj()&&f.isFunction(b.isViewable)},k=function(){var b=a.mraid;d();b.addEventListener("viewableChange",d)},u=function(){var b=a.mraid;e()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){k()}):k())},m=function(){c||u()};return{start:function(){var b=!0;if(f.isDef(a.mraid)||v.containsScriptTagWithSrc("mraid.js"))b=!1;l.trigger("addOutputItem",{output:f.stringifyTriState(b)},"mi",{type:"impression"});b?l.trigger("exec","mraid.js",
m):u()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},Ta=function(a,b,c){var d={},e=function(c){var d=f.noop;b.bootstrapOn("useViewabilityNotification")&&(d=function(){var b=n[c];a.skipAsFraudulent()||l.trigger("notify",b)});return d};(function(){c&&f(c).map(function(a,b){d[a]=e(b)})})();return{getCallbacks:function(){return d}}},Na=function(){var a=new R({tiv:[1E4]}),b=f([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,
rts:{},isInView:function(a){var d=s.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===d},applies:function(a,b){return a.on("abcAudit")&&925955==n.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Ma=function(a,b){var c,d,e;c=a.on("everySecond");var f=b.isVideo();d=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];e=[1E3,5E3,15E3];var u=[2E3,5E3,15E3];c?(c=new R({tiv:d}),d=d[0]):f?(c=new R({tiv:u}),d=u[0]):(c=new R({tiv:e}),d=e[0]);e={5E3:"_onInViewMRC5",
15E3:"_onInViewMRC15"};e[d]="_onInViewMRC";return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:e,isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3}},Pa=function(a,b){var c;c=a.on("everySecond");var d=b.isVideo(),e=b.usesIASFullyInViewCustomMetric(),f=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],u=[1E3,5E3,15E3],m=[2E3,5E3,15E3],r=function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+
"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:f}):d?new R({tiv:m}):new R({tiv:u});l.provide("isFullyInViewProvider",{isFullyInView:r});return{timeInViewThresholds:c,type:h.DT_CODES.FULLY_INVIEW,isInView:r,applies:function(){return e},minUnit:1E3}},Oa=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:"_onInViewFull"},isInView:function(a){var b=s.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&
100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},Ra=function(a,b){var c,d,e=s.getMaxNumber(),k=b.isVideo();c=new R(a);d={};f.isDef(a.rts)&&(d={timThreshold:a.rts});return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,rts:d,isInView:function(b){if(!b.adDimensions)return!1;var c,d,p,l=b.adDimensions.area(),q=1===b.tabHidden,n=s.max(b.fullPercentInView||0,b.percentInView);c=f(a.thresholds).findFirst(function(a,b){d=b.lb||0;p=b.ub||e;if(l>=d&&l<=p)return!0});c=!q&&n>=c.piv;
b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);k&&(c=c&&b.isVideoPlaying);return c},metricId:a.id,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Qa=function(a,b,c){var d=b.isVideo()?"video":"display",e=b.isMobileApp()?"app":"web",k=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=f(a.customViewability).isArray()&&0<a.customViewability.length,m=c.on("customMetric"),r=c.on("groupmCM"),p=function(a,b){var c,h,m,p,l;c=f(b.mediaTypes).contains(d);h=f(b.distributionChannels).contains(e);
m=f.isDef(b.deviceGroups)?f(b.deviceGroups).contains(k):!0;p=M.contains(b.id,"fiv");l=M.contains(b.id,"groupmCM");p=!p;l&&(p=r);return p&&c&&h&&m};return{resolve:function(){var b=[],c;m&&h&&(c=f(a.customViewability).filter(p),f(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){f(a.tiv).isArray()?a=a.tiv:"string"===typeof a.tiv?(a=a.tiv.split("|"),a=[8E3,1E3*parseInt(a[0])]):a=[1E3*a.tiv];return{timeThresholds:a}},Wa=function(a,b,c){var d=function(d){a.isInView(d)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):
b.stop()};return{start:function(){a.addMeasurementChangedListener(d)}}},Va=function(a,b,c,d){var e,k,h,m,r,p=function(a,b){return!b&&a},w=function(a,b,c,d){return d?!0:!b&&(a||d)&&c},q=function(a){var b=0,p=1===a.tabHidden,q=a.isVideoPlaying,l=a.isSoundOn,n=a.isVideoPlayingInFullscreen;f(a.sliceStatus).each(function(a,b){h(b,p,q,n)?e[a].mark():e[a].stop();m[a]=e[a].getTotalTime()});s("slcVt",m);d&&(f(a.sliceStatus).each(function(a,b){w(b,p,q,n)&&l?k[a].mark():k[a].stop();r[a]=k[a].getTotalTime()}),
s("slcVtVol",r));a=f(m).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});f.isUndef(a)&&c.doEligibleJobs(b)},s=function(a,b){var c={};c[a]=b;l.trigger("addOutputItem",{output:c},{minDt:!1})},n=function(a){!e&&a.sliceStatus&&(e=[],k=[],m=[],r=[],f(a.sliceStatus).each(function(a){e.push(new Z(1));m.push(0);d&&(k.push(new Z(1)),r.push(0))}))},t=function(a){f.isUndef(a.sliceStatus)||(e||n(a),q(a))};return{start:function(){h=d?w:p;a.addMeasurementChangedListener(t)}}},Sa=function(a,b){return{isInView:a.isInView,
addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Bb=function(a,b,c,d,e,f,l,m,r,p){var w=!1,q=t.isVideo(),n=f.request("mobileApp"),y=X().applies(c,e),v=c.browserIs(h.BROWSERS.GECKO)||c.browserIs(h.BROWSERS.IE)&&e.on("rattie")||y,C=t.xDomainIframe&&!v,A=new sa(10),N=function(){e.on("viewabilityready")&&!w&&(d.send(h.DT_CODES.VIEWABILITY_READY),f.trigger("measurable"),w=!0)};f.on("delayedViewabilityReady",function(){z();N()});f.on("delayedViewabilityReadyCallOnly",N);var z=
function(c){c=c||!1;try{A.start();var d,e;b.hasMeasurementStrategy()?e=n.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(m.collect(),c):(e=m.collect(),n.isMobileAppEnvironment()?(e.viewState=h.NA,e.method=h.NA,e.percentInView=h.NA):C&&(e.viewState=h.NA,e.percentInView=h.PIV_NA),q&&!t.isAvid()&&p.setVideoSpecificScreenEventFields(e));d=r.registerLocation(e);c||a.trigger("measurementChanged",e);A.stop();var w=s.round(A.getTime()/A.getCount());
l.addItem({output:w},"lt",{type:h.DT_CODES.UNLOAD});return d}catch(y){f.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return e.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":q?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,d=a&&c.browserIs(h.BROWSERS.WEBKIT),e=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&y,d=!d&&!e&&!a;return n.isMobileAppEnvironment()?b.isMeasurable():d},requiresDelayedViewabilityEvent:function(){n.isMobileAppEnvironment()&&
b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};O("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,d){var e,k=Uc(c),u=[new Vc,new Wc(k)],m=function(){return f(u).findFirst(function(a,e){return e.applies(d,b,c)?e:void 0})},r=function(a){"sessionFinish"===a.type&&l.trigger("adSessionComplete")},p=function(a){x.addEvent(B,a,function(){l.trigger("adSessionComplete")},!1)},
w=function(){var a=new Y(h.DT_CODES.VIDEO_EVENTS);l.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:n.videoId,msg:"unloadComplete",messageType:"misc"};s.getWindow().postMessage(JSON.stringify(a),"*")})};l.once("startViewabilityLoop",function(){var b,c=l.request("mobileApp").isMobileAppEnvironment();l.request("ids").impressionIsIdentifiable()&&(e=Ub(a.checkScreenLoc,k.getPollingFrequency()),(b=m())?b.start(e):e.start(!0),c?t.isOmid()?l.request("omidVerificationClient").registerSessionObserver(r,
"IAS"):p("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):p("beforeunload"))});l.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmid()||w();l.trigger("unload");e&&e.stop();l.trigger("endAdSession");l.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var Uc=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},Wc=function(a){var b,c,d,e,f,h=function(m){d&&!f&&1>m?(f=!0,s.setTimeout(function(){h(m)},1E3)):
(e=1>m,!c&&e?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!e&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},m=function(a){h(a.percentInView)};return{applies:function(a,b,c){var e=l.request("mobileApp");a=(new xa(b,a,c,e)).accepts();b=b.on("viewabilityOptimization")&&!a;d=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);l.on("IOPivChange",h);l.on("newScreenEvent",m)}}},Vc=function(){var a,b,c,d=!1,e=function(f){if(c&&!d&&1>f)d=!0,s.setTimeout(function(){e(f)},
1E3);else return 1>f?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=X();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);l.on("IOPivChange",e)}}},ad=function(a,b,c,d,e,k){var u,m,r,p,w,q,L,y,G,C=v.getElementsWindow(b);v.getElementsDocument(b);l.provide("iframeCalculatorHelper",Xc(C));var A=Yc(b,d),N=h.AD_IDENTIFIER+"-"+n.asid,z=!1,D=I({}),J=t.isDeviceTypeGroupMobile(),
Q=t.usesGroupMCustomMetricMobilePassThru(),H,E=function(){if(!u)if(u=A.calcDims(b,d,r),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=u,e=(new I(b)).getRounded();try{a.set("width",e.width),a.set("height",e.height)}catch(f){l.trigger("error",h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},P=function(){var b,d=t.xDomainIframe&&z;b=J&&z&&r.isReady();b=d||b;d=A.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());
b?m=r.getPiv():f.isUndef(m)&&(b=!J&&(t.friendly||f.isDef(B.mozInnerScreenX))&&e.on("offscreen"),y=E(),L=new I(v.calcWinDims()),q=new I(b?v.calcMonDims():{}),G=d?A.getClippedDims():D,m=a.calcPercentInView(y,L,q,G));return m},V=function(){return a.calcInitialViewState(P())},Ea=function(){return b===B?!1:E().isHidden()},F=function(a,b){return t.isVideo()?s.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=s.getWindow(),
e=s.getDoc(),f=b===c,k=e.body,h=new X,m=l.request("browser"),q=l.request("features"),u=l.request("context"),n=!t.xDomainIframe,y=F(b,d),e=f&&k?e.body:b;H=t.friendlyIframe?c.frameElement:e;x.addEvent(e,"click",function(){l.trigger("adComponentClicked")});x.addEvent(e,"mouseover",function(){l.trigger("adComponentMousedOver")});h.applies(m,q,u)?(r=sc(b,n),r.start(),z=!0,Q&&(p=new Fa(Zc,E(),y))):Q&&(w=new $c(a))})();return{mark:function(){v.setAttributeOf(H,N,"")},cleanup:function(){v.removeAttributeOf(H,
N)},isNode:function(a){return b===a},isHidden:Ea,isObstructed:function(){return!1},getDims:E,getPercentInView:P,getLocationState:V,getOnPageViewability:function(){return Ea()?h.OUT_OF_VIEW:V()},getDetectionMethod:function(){return c},getContainerDims:function(){return A.allowsOptimization?u:I(d)},refresh:function(){G=y=L=q=m=u=void 0;if(k){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==B&&c&&c!==K&&!a;)a=c===d,c=c.parentNode;a||(d=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;
p&&p.isReadyToMeasure()?a=p.getSliceStatus():t.friendly&&w&&f.isDef(y)&&(a=w.getSliceStatus(y,L,q,G));return a}}},bd=function(a,b){var c=[],d,e=f([]),k=function(){return c[0]&&c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},u=function(m,r,p,q){var u=k()||0===c.length;m=ad(a,m,r,p,b,q);k()&&(p=c.shift(),e=f(c),p.cleanup(),d=void 0);c.push(m);e=f(c);u&&m.mark();u&&r!==h.DETECTION_METHODS.AD_PLACEHOLDER&&l.trigger("primaryadfound",m)},m=function(){if(d)return d;var a,b=!1,c=0,f=0;e.each(function(d,
e){var k;k=e.getDims();k.hasValidDims()&&(a=e.getPercentInView(),b=a!==h.NA,k=k.area(),c+=k,f+=a/100*k)});return d={totalArea:c,totalInView:f,hasMeasurement:b}},r=function(){var a;a=m();a=a.hasMeasurement?s.round(a.totalInView/a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},p=function(){var c=m().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!t.isVideo();return a.calcInitialViewState(r(),c)},n=function(a){var b=-1;e.each(function(c,d){d.isNode(a)&&(b=c)});return b},q=function(a){return function(){return c[0]&&
c[0][a]()}};l.on("adComponentAdded",function(a){f(a).each(function(a,b){-1===n(b)&&u(b,h.DETECTION_METHODS.MUTATION)})});l.on("adComponentRemoved",function(a){f(a).each(function(a,b){var d=n(b);-1<d&&c.splice(d,1)})});return{getDims:q("getDims"),isObstructed:q("isObstructed"),getDetectionMethod:q("getDetectionMethod"),getContainerDims:q("getContainerDims"),getViewState:p,getPercentInView:r,isHidden:q("isHidden"),isUsingPlaceholder:k,hasAd:function(){return!!c.length},refresh:function(){d=void 0;e.each(function(a,
b){b.refresh()})},addAdComponent:u,getOutOfViewReasons:function(){var a,b=[],e=c[0],f=h.OUT_OF_VIEW_REASONS;e&&(a=d||p(),a!==h.OUT_OF_VIEW&&a!==h.PARTIAL_VIEW_MINUS||b.push(f.GEOM),e.isHidden()&&b.push(f.HIDDEN),e.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:q("getSliceStatus")}},cd=function(a){var b=!1;if(!f.isUndef(B.MutationObserver)){var c=new MutationObserver(function(a){s.execAtEndOfThread(function(){b&&
f(a).each(function(a,b){b.addedNodes.length&&l.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&l.trigger("adComponentRemoved",b.removedNodes)})})}),d=function(){b=!0;s.setTimeout(function(){b=!1},40)};l.on("adComponentClicked",d);l.on("adComponentMousedOver",d);x.whenReady(function(){try{c.observe(K.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},s.getDoc())}},jd=function(a,b){var c=[dd()],d=[da(),ed(),fd(),gd(),hd(),id()],c=c.concat(d);
return f(c).findFirst(function(c,d){return d.isApplicable(a,b)})},fd=function(){var a,b,c,d=function(a){a?a&&c&&(s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ba();var c=v.crossQuerySelector(ba().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},kd=
function(a){var b;a=v.findChildWithLargestContent(a||n.contextNode.parentNode);1<v.getNodeArea(a)&&!a[h.IAS_DETECTOR]&&(b=a);return b},hd=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,find:function(){return B},isApplicable:function(){return t.embedded},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},ld=function(){var a,b=s.getDoc().scripts,c=function(){a||(a=f(b).findFirst(function(a,b){return M.contains(b.src,"servedby.flashtalking")}));return a};
return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,e=a||c(),f=/;(\d+);/;e&&e.src&&(b=e.src.match(f)[1]);return"#ftdiv"+b}}},md=function(){return{isApplicable:function(a,b){var c;try{c=v.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&M.contains(c,"_tpi")&&v.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+v.getFrameId().replace("_tpi",
"")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},nd=function(){var a,b,c=s.getDoc(),d=function(){var b;a||(a=(b=(b=v.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},e=function(){var a;b||(b=(a=(a=v.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+d()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=s.getWindow(),h=a.friendlyIframe&&s.getWindow().frameElement,
h=h&&I(h).isOneByOne(),p=function(){var a=s.getDoc().scripts;return f(a).findFirst(function(a,b){return M.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!f(c.EBG.ads).isEmpty();return b.on("sizmek")&&p&&c&&h&&d()&&e()},getCssSelector:e}},ba=function(){var a,b=l.request("features");a||(a=[nd(),md(),ld()]);return f(a).findFirst(function(a,d){return d.isApplicable(t,b)})},gd=function(){var a,b=function(){s.execAtEndOfThread(function(){l.trigger("delayedViewabilityReadyCallOnly")})};
return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,d=ua().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=v.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},ua=function(){var a,b=function(){var b;(b=n.contextNode.parentNode)&&M.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&v.querySelector(b,
".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},da=function(){var a=l.request("mobileApp");return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=v.findChildWithLargestContent(s.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[h.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},dd=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,
isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=v.crossQuerySelector(n._cl_adpath);b&&(a=v.getParent(b),1>v.getNodeArea(b)&&(a=b,b=v.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},id=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:kd,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},ed=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,
find:l.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return n.contextNode.parentNode},allowForAdContainerChange:!0}},Yc=function(a,b){var c,d;c=[od(),pd(),qd()];d=f(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=rd();c.isApplicable(b)&&(c.setBaseStrategy(d),d=c);return d},qd=function(){return{calcDims:function(a,b){var c,d,e=new I(a);v.isClippable(a,b)&&(c=v.getClippedDimensions(a,b),d=e.getRounded(),e.set("height",c.height<d.height?c.height:d.height||1),
e.set("width",c.width<d.width?c.width:d.width||1));return e},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&v.nodeIsInWindow(a,s.getTop());a=!v.elementIsEmbedded(a);return b||a}}},pd=function(){var a=l.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&v.elementIsEmbedded(a)}}},od=function(){var a=l.request("iframeCalculatorHelper");
return{calcDims:function(b){var c=a.calcDims();b=(new I(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!v.nodeIsInWindow(c,s.getTop()),e=t.isCeltra()&&v.elementIsEmbedded(a);return d||e}}},rd=function(){var a;return{calcDims:function(b,c,d){d=f.isDef(d)?d.getAdNodeDimensions():void 0;a&&f.isUndef(d)&&(d=a.calcDims(b,c));return d},isApplicable:function(a){a=
X();var c=l.request("browser"),d=l.request("features"),e=l.request("context");return e.isDeviceTypeGroupMobile()&&a.applies(c,d,e)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},Xc=function(a){var b,c,d,e=l.request("features"),k=l.request("browser");a=a||s.getWindow();var u=function(b,c){b=b||a;c=c||{top:0,left:0,width:s.getMaxNumber(),height:s.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,k=0,m=e.length;k<m;k++)if(e[k]==b){d=e[k];f=!0;break}if(f){d=v.getRect(d.frameElement);c.left+=
d.left;c.top+=d.top;try{c.width=s.min(c.width,d.width),c.height=s.min(c.height,d.height)}catch(n){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==s.getTop()&&u(b.parent,c)}return c},m=function(){var m,p={};try{var n,q,L,y,G,C,A=s.getMaxNumber(),N=s.getMaxNumber();t.friendly?(n=u(),L=n.left,y=n.top,A=n.width,N=n.height,q=v.browserWindowPosition(),G=q.scrX+L,C=q.scrY+y):e.on("rattie")&&k.browserIs(h.BROWSERS.IE)?(d=d||l.request("ieXDomainViewability"),c=d.determineFramePosition(),G=c.scrX,C=
c.scrY):f.isDef(a.mozInnerScreenX)&&(G=s.round(a.mozInnerScreenX),C=s.round(a.mozInnerScreenY));var p={scrX:G,scrY:C,iFrameClippingWidth:A,iFrameClippingHeight:N},z,D,J=b||v.getIeDimObj(a);b=J;f.isDef(a.innerWidth)?(z=a.innerWidth,D=a.innerHeight):J&&f.isDef(J.clientWidth)?(z=J.clientWidth,D=J.clientHeight,0===z&&0<J.offsetWidth&&(z=J.offsetWidth),0===D&&0<J.offsetHeight&&(D=J.offsetHeight)):a.frameElement&&f.isDef(a.frameElement.clientWidth)&&(z=a.frameElement.clientWidth,D=a.frameElement.clientHeight);
m=z;p.height=D;p.width=m}catch(x){l.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return p};return{calcDims:function(){return new I(m())},getClippedDims:function(){var a=m();return new I({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},vb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new sd:new td(a,b,c)}}},td=function(a,b,c){var d,e=n&&n.contextNode&&n.contextNode.parentNode?n.contextNode.parentNode:null,k=bd(b,c),l=function(){var a,
b,e;d=d||jd(t,c);a=d.find();!a&&d.usePlaceholder?m():a&&(a=f(a).isArray()?a:[a],b=d.getAdContainer(),e=d.allowForAdContainerChange,f(a).each(function(a,c){k.addAdComponent(c,f.resolve(d.detectionMethod),b,e)}))},m=function(){var a;k.hasAd()||(a=v.getPlaceholderSpan(),e.insertBefore(a,n.contextNode.nextSibling),k.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,v.getParent(a)))};cd(a);return{find:function(){k.isUsingPlaceholder()||!k.hasAd()?l():k.refresh();return k},getDetectionMethod:function(){}}},
sd=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},bb=function(a){var b,c=[],d=a||B,e=function(){return"stub"===h().mode};a=function(){e()&&(b=d.setInterval(function(){if("stub"!==h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var f=function(){return void 0!==d.avid},h=function(){var a,b={};if(f())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",
c,B.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:f,getAvidAdSessionContext:h,addEventListener:function(a,b){e()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(e())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},ab=function(a){var b=new ud,c=new vd;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),
b.hasDetectedMobileApp()&&c.detect()}catch(d){l.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},wd={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return-1!==s.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){var d;
d=!1;var e=s.getWindow();f.isDef(e.navigator)&&f.isDef(e.navigator.userAgent)&&(d=(d=e.navigator.userAgent)&&-1!==d.indexOf(c));return d})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!f(a).findFirst(function(a,c){return f.isDef(M.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!f(a).findFirst(function(a,c){return v.containsScriptTagWithSrc(function(a){return f.isDef(a)&&-1!==a.indexOf(c)})})}}},Ga=function(){var a=function(a,c){var d,
e=wd[a];e.detect(c)&&(d=e.STRINGIFIED_METHOD);return d};return{process:function(b){return f(b).map(a).join("")}}},xd={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},ud=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=
n.hasOwnProperty("serverSideAppDetection")&&0!==n.serverSideAppDetection.length?!0:Ga().process(xd);b()&&l.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},vd=function(){var a=[],b=[],c=function(b,c){var f,h=Ga().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),f=c);return f};return{detect:function(){b=f(yd).map(c);0<b.length&&l.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==
b.length&&f.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},yd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},
{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],U=function(){var a=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(e){if(d)return d;e.height<a&&(a=1,b=[100]);for(e=0;e<a;e++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},zd=function(){var a,b,c=0,
d=-1,e=0,k=l.request("browser"),h=function(){var a,b;a=l.request("pageUrls").getDetectedURLs();a=f(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return f.isDef(a)};b=s.setInterval(function(){var a=s.now();d=a-e;e=a;c++;10<=c&&b&&s.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var e;c=c.getRounded().height;var f=v.calcMonDims().height,
l=k.getUserAgent(),l=l&&null!==l.match(/(FBAN)/)?1:0,q=k.getUserAgent(),q=q&&null!==q.match(/(iPad)/)?1:0,n=h()?1:0,t=k.getUserAgent(),t=t&&null!==t.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;e=s.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*l-0.874412*q+0.646972*n+0.28118*t+2.987259*(1E3<d?1:0)-2.463292);e/=1+e;a={mbah:c,mbsh:f,mbfb:l,mbip:q,mbhs:n,mbbr:t,mblr:d,mbp:e};b&&s.clearInterval(b);return 0.15<e},getDebugState:function(){return a}}},Hc=function(a,b,c){var d,e,k,u,m,r=[],p=n.contextNode.parentNode,
w=0,q=0,v=!1,y=!1,G=new zd,C=function(){var a=r.length-1,b=-1;-1<a&&(b=r[a].piv);return b},A=function(){l.trigger("delayedViewabilityReadyCallOnly")},N=function(a){x.whenReady(function(){e=new Fa(Ad,a,s.getDoc().body)})},z=function(){e.removePixels()},D=function(){var a=G.getDebugState(),b=C();f.isUndef(a)&&(a={});a.mbm=f.fromBoolToNum(y);a.mbrd=f.fromBoolToNum(v);a.mbtg=f.isDef(p.tagName)?p.tagName:"na";a.mbaf=f.isDef(k)?k:"na";a.mbad=f.isDef(d)?d.getRounded().width+"_"+d.getRounded().height:"na";
a.piv=f.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{l.trigger("addOutputItem",{output:a},b),l.trigger("addOutputItem",{output:-101},"pingTime",b),l.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var p;p=f.isDef(d);if(c||!b.adDimensions)return b;p||(k=b.method,d=b.adDimensions,d.isMrcLarge(),N(d));if(f.isUndef(e)||!e.isReadyToMeasure())p=!1;f.isUndef(u)&&p&&(u=G.isLikelyToProduceFalsePositive(d));if(y=!u&&p){var n;p=e.getPercentInView();var z=C(),D=1===b.tabHidden,x=b.adDimensions.isMrcLarge()?
30:50;q=s.now()-w;n=0<w?900>q:!0;w=s.now();0===b.adDimensions.area()&&(p=0);n||(p=0);var B=p;r.push({tm:t.getTagTime(),piv:B});3<r.length&&r.shift();0===p&&0<z&&(n&&(n=r.length-1,B=!0,2<=r.length&&-1<n&&(B=0===r[n].piv&&0===r[n-1].piv),n=!B),n&&(p=z));a?(f.isUndef(m)&&(m=l.request("video")),m.setVideoSpecificScreenEventFields(b),p=b.isVideoPlayingInFullscreen?!0:!D&&p>=x&&b.isVideoPlaying):p=!D&&p>=x;b.viewState=p?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=C();z=[];D=f(b.reason);x=h.OUT_OF_VIEW_REASONS;
p||z.push(x.GEOM);D.contains(x.HIDDEN)&&z.push(x.HIDDEN);D.contains(x.OBSTRUCTION)&&z.push(x.OBSTRUCTION);b.reason=z;b.sliceStatus=e.getSliceStatus();v||(v=!0,s.execAtEndOfThread(A))}else b.viewState=h.NA,b.percentInView=-1;return b},start:function(){l.on("endAdSession",z);c&&s.setTimeout(D,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return y},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},xa=function(a,b,c,d){return{accepts:function(){var e=
c.xDomainIframe,f=a.bootstrapOn("mobOrTab"),l=a.on("ios"),m=b.browserIs(h.BROWSERS.WEBKIT),r=9<=b.getIOSVersion(),p=d.isMobileAppEnvironment();return e&&f&&l&&m&&r&&!p},isImmediate:function(){return!1},start:function(){}}},Ad=function(a,b,c,d,e,k){var l,m=n.birthdate+""+s.round(1E6*s.random()),r=101,p,w,q,t=!1,v=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,k=(new Date).getTime(),h=function(){e=
(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(h)};a.requestAnimationFrame(h);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-k}}catch(m){b.body.setAttribute("data-err",m.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},G=function(a,b){q||(r=a,q=b)},
C=function(){var a,b,c;if(q)return!1;if(w)return!0;try{if(p.contentWindow&&p.contentWindow.document&&p.contentWindow.document.body){c=p.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&G(104);(b=c.isReady?c.isReady():!1)&&(w=c.isInView?c.isInView:void 0)&&G(105)}}catch(d){G(106,d)}return f.isDef(w)},A=function(a,b,c){var k=K.createElement("iframe");k.id=m;f(k.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",
border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var l=k.style;k[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(k);p=k;G(102);a=p;try{var r=a.contentWindow,q=v();r.document.open();a.contentWindow.document.write(q);r.document.close()}catch(n){G(103,n)}return k}(a,b,c);return{isInView:function(){var a,b,c=!1;s.now();C()&&(a=w(!0),c=a.isInView,t=!1,l&&(b=20*l.rate+l.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,t=!0)),G(107),l=a);return c},isNotReadyToReport:function(){return!C()},
createdElement:p,remove:function(){A.parentNode&&A.parentNode.removeChild(A)},getStatus:function(){return r},getError:function(){return q},isReadingInvalid:function(){return t},getRate:function(){return p.contentWindow&&p.contentWindow.document&&p.contentWindow.document.body&&p.contentWindow.document.body.getRate?p.contentWindow.document.body.getRate():-1},percentInView:k}},Fa=function(a,b,c){var d,e=b.getRounded(),k=[],h=!1;b=U().getConfig(e);var m=b.percentInViewSliceArray,l=1==b.numberOfSlices,
p={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},n=function(){var a;if(!h)for(h=!0,a=0;a<k.length;a++)if(k[a].isNotReadyToReport()){h=!1;break}return h},q=function(a){var b=[],c=0;s.floor(a.height/m.length);var d=s.floor(a.width/2-1);f(m).each(function(e,f){c=s.floor(a.height*f);c===a.height&&(c-=2);b.push({y:s.floor(c)+"px",x:s.floor(d)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},v=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];
return{get:function(){return b}}},y=function(a,b){var c=0;b&&(a.reverse(),f(a).map(function(a,b){b.percentInView=100-b.percentInView}));f(a).findFirst(function(a,b){b.isInView&&(c=s.max(c,b.percentInView));return!b.isInView});return c},G=function(){var a,b,c,d=[];p.mbs=[];f(k).each(function(b,c){a=c.isInView();p.mbs.push(a);d.push({isInView:a,percentInView:c.percentInView})});b=y(d,!1);c=y(d,!0);return s.max(b,c)};(function(){d=l?v(e):q(e);var b=d.get();f(b).each(function(b,d){var e=new a(c,d.x,d.y,
d.width,d.height,d.percentInView);k.push(e)})})();return{getPercentInView:function(){var a=n(),b=G();p.mbrd=a?1:0;b!=p.mbp&&p.mbivs.push([t.getTagTime(),b]);p.mbp=b;return a?b:-1},removePixels:function(){f(k).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){p.mbm=1;k&&0<k.length&&(p.mbpr=[],p.mbir=[],f(k).each(function(a,b){p.mbpr.push(b.getRate());p.mbir.push(b.isReadingInvalid()?1:0)}));return p},isReadyToMeasure:n,getSliceStatus:function(){var a;k&&0<k.length&&(a=
[],f(k).each(function(b,c){a.push(c.isInView())}));return a}}},$c=function(a){var b=U();return{getSliceStatus:function(c,d,e,f){var h,m=[];h=c.getRounded();c=h.height;var l=h.scrY,p=new I({scrX:h.scrX,width:h.width}),n=b.getConfig(h).numberOfSlices;p.set("height",s.floor(c/n));for(var q=0;q<n;q++)p.set("scrY",s.ceil(l+c/n*q)),h=100===a.calcPercentInView(p,d,e,f),m.push(h);return m}}},Zc=function(a,b,c,d,e){var k=n.birthdate+""+s.round(1E6*s.random()),l=101,m,r,p,w=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{var c;b.body.setAttribute("data-st","iasInit");var d;(new Date).getTime();b.body.isInView=function(a){return{isInView:d,lastUpdateTimestamp:0}};b.body.getPiv=function(){return c};b.body.isReady=function(){return void 0!==c};(function(){var e=b.createElement("DIV");b.body.style.width="100%";b.body.style.height="100%";b.body.style.margin="0px";e.style.position="absolute";e.style.width="100%";e.style.opacity="0";e.style.height="100%";e.style.zIndex=-999;e.style.top=
"0px";e.style.left="0px";b.body.appendChild(e);(new a.IntersectionObserver(function(a){a=a.pop();a=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(a)&&(a=0);c=a;d=0<c},{threshold:[0,1]})).observe(e)})()}catch(e){b.body.setAttribute("data-err",e.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},q=function(a,b){p||(l=a,p=b)},t=function(){var a,b,c;if(p)return!1;if(r)return!0;
try{if(m.contentWindow&&m.contentWindow.document&&m.contentWindow.document.body){c=m.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&q(104);(b=c.isReady?c.isReady():!1)&&(r=c.isInView?c.isInView:void 0)&&q(105)}}catch(d){q(106,d)}return f.isDef(r)};(function(a,b,c){var p=K.createElement("iframe");p.id=k;f(p.style).mixin({position:"absolute",width:d+"px",height:e+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",
zIndex:"-999"});var l=p.style;p[h.IAS_DETECTOR]="true";l.left=b;l.top=c;a.appendChild(p);m=p;q(102);a=m;try{var r=a.contentWindow,n=w();r.document.open();a.contentWindow.document.write(n);r.document.close()}catch(s){q(103,s)}return p})(a,b,c);return{isInView:function(){var a;a=!1;t()&&(a=r(!0),a=a.isInView,q(107));return a},isNotReadyToReport:function(){return!t()},createdElement:m,remove:function(){m.parentNode&&m.parentNode.removeChild(m)},getStatus:function(){return l},getError:function(){return p},
isReadingInvalid:function(){return!1},getRate:function(){return h.NA}}},Bd=function(){return{decorateContextParams:function(a,b){try{var c=l.request("adNode"),d;if(d="adImpression"===a)d=l.request("adNode").hasAttribute("data-ias-autoplay");d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(e){l.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},Cd=function(){return{listenForResult:function(){l.on("videoBlockResult",function(a){var b=l.request("adNode"),c=!1,d="blockAd"+
n.videoId;"failed"===a.action&&(c=!0);if(b&&f.isDef(b.blockAd))b.blockAd(c);else if(b&&f.isDef(b[d]))b[d](c)})}}},Dd=function(a,b){var c,d,e,k,h,m=l.request("videoTranslator"),r=l.request("videoAutoplay");e=m.translate(a.messageType);k=function(a){a=a.eventData||{};a=f({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=f(a).mapToObj(c));return b}(a);r.decorateContextParams(e,
k);d={t:a.time-n.birthdate,tp:e,sl:b};f(d).mixin(k);f(d).mixin(h);return c=f({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(e)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(e)},indicatesFullscreen:function(){var a=s.getWindow();return("resizeAd"===e||"initAd"===e)&&("fullscreen"===k.viewMode||k.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===e&&"normal"===k.viewMode},indicatesCompletion:function(){return-1!==
"adStopped|adVideoComplete|skipAd".indexOf(e)},updateScreenLoc:function(a){d.sl=a;c.sl=a},trigger:function(){"adImpression"===e?l.persistentTrigger(e,k,h):l.trigger(e,k,h)},toString:function(){return"{"+f(d).toParams()+"}"}}).mixin(d)},Ed=function(){var a=[];return{registerEvent:function(b,c){var d=new Dd(b,c);a.push(d);return d},toString:function(){return"{"+f({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Fd=function(){var a,b,c,d=function(d){c=
f.isDef(d)?0===d:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},e=function(){a&&a.hasAlwaysBeen(!0)&&l.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},k=function(){b=!0;d()},n=function(a){a=(new Ha).getVolumeFromContext(a);d(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){l.on({adVideoStart:k,adImpression:k,volumeChanged:n,adVideoMidpoint:e});a=c.createViewabilityTracker("mpt",function(a){var c=l.request("isFullyInViewProvider");return!b||c&&
c.isFullyInView(a)})}}},Gd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Ha=function(){return{getVolumeFromContext:function(a){var b,c=-1;f.isDef(a)&&(f.isDef(a.volume)?c=a.volume:f.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},sb=function(a,b,c){var d="IASid"+a,e="getIasVidBridgeVersion"+a,k,u,m,r,p=[],w=h.OUT_OF_VIEW,q=!1,v=!1,y=!1,G=!0,
C=new Ed,A=Fd(),B=new Cd,z=function(b){q=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=C.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(v=!0,w=y?h.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,w=h.OUT_OF_VIEW):d.indicatesFullscreen()?(y=!0,w=v?h.IN_VIEW:h.OUT_OF_VIEW):d.indicatesNormalSize()&&(y=!1,w=v?!1:h.OUT_OF_VIEW));b=d;p.push(b);r&&I();return b},D=function(b){var c,k,h=ma().wrapToGlobal(z),m=function(a){f.isStr(a)&&(l.provide("vc",function(){return a}),
l.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{k=b[e]||b.getIasVidBridgeVersion,c=f.isFunction(k)&&"2"===k.call(b)?unescape(b[d].call(b,a,h)):unescape(b[d].call(b,a)),q=!0,m(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,n)}},E=function(){var c=function(a){return f(f(a).toArray()).findFirst(function(a,b){return f.isFunction(b[d])})};k||(f([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=s.getDoc().querySelectorAll(b);return k=c(d)}),
!k&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},n));return k},F=function(){var a=E();a&&!q&&D(a);return a},H=function(a){a=(new Ha).getVolumeFromContext(a);G=f.isDef(a)?0<a:!1},I=function(){f(p).each(function(a,b){b&&(f.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&l.trigger("adSessionComplete"))});p=[];r=!0};(function(){x.addEvent(s.getWindow(),"message",function(a){z(a)});l.on({volumeChanged:H});l.provide({videoEventsString:C,videoVersion:function(){var a,
b=F();try{a=b.getVersion()}catch(c){a=-1,l.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Gd},videoAutoplay:function(){return m=m||new Bd},adNode:F});F();B.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:F,getViewStateOverride:function(){return w},isHandshakeComplete:function(){return q},triggerInitializationEvents:I,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;a.isVideoPlaying=!0;a.isSoundOn=
G;a.isVideoPlayingInFullscreen=!1;if(w){if(w===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:w;a.isVideoPlaying=w===h.IN_VIEW}y&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Hd=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Hb=function(){var a,b,c={},d=0,e=function(c){if(c||
a)d+=5,b.onTick(d,function(){a?e():l.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},k=function(k,h,l,n){k=c[k];n?(f.isDef(k[h])||(k[h]=[]),k[h].push(l)):k[h]=l;b&&b.isActive()||(b=new ta,d=0,e(!0),b.start());a=!0},n=function(b){f(c).each(function(d,e){var k=c[d],h={type:b,oneTime:!0,minDt:!0,asION:!0};f(k).isEmpty()||(l.trigger("addOutputItem",{output:k},d,h),c[d]={});a=!1})};return{start:function(){l.on("preSendDt",function(a){n(a);b&&b.kill()});l.on("addThrottledProp",k)},addFieldTypes:function(a){f(a).each(function(a,
b){c[b]={}})}}},Mb=function(){var a={},b=function(b){a[b]||(a[b]=new sa(1,n.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();l.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){l.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},Id=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},tb=
function(a){var b={},c=a instanceof Array&&a.length;c&&(f(a).each(function(a,c){b[c.getType()]=c}),l.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(l.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),l.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(f){}}));l.provide("perfActive",function(){return c});return{isActive:c}},ea=function(a,b,c){var d=0,e=[],k=function(){var a,c={};e.sort(b);f(e).each(function(b,e){a&&
(c[e.code]=e.timestamp-a);b===d&&(a=e.timestamp)});return c};return{addPoint:function(a){e.push(a)},toString:function(){return f(k()).toION()},getType:function(){return a},setBaseOrdinal:function(a){d=a},isFinished:function(){return e.length===c}}},ub=function(){function a(){}a.build=function(){var a=[],c=l.request("vc"),d={jv3:Ia,av3:Ia,jvw:Id,avw:Hd};c&&d[c]&&a.push(d[c]());return a};return a}(),Ia=function(){return new ea(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,function(a,b){return a.code-b.code},
h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){l.trigger("measureTime",S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){x.addEvent(B,"load",function(){l.trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new ta;a.onTick({4:function(){l.trigger("markTime",S.IDS.IN_BROWSER_DELAY)},5:function(){l.trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}};O("postMessageDetector",
[],function(){var a=!1,b="pmdetector"+n.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var d=s.getWindow();x.addEvent(d,"message",c);d.postMessage(b,"*");s.execAtEndOfThread(function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"pom",f.stringifyTriState(a));x.removeEvent(d,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});O("safeFrameDetector",[],function(){l.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"sf",f.stringifyTriState(t.isSafeFrame()))},
{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Fb=function(){var a=n.asid,b=n.cookieBaseURL,c=n.protocol,d=function(a){f(a).each(function(a,b){l.trigger("notify",b)})},e=function(){var e;e=new T(c+"://"+b,!0);e.setParam("asid",a);e=e.toString();l.trigger("jsonp",e,d,!0);l.trigger("updateDtCount")};return{start:function(){l.on("sendCookie",e)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL",
"asid"])}}},Gb=function(a,b,c,d,e,f,s){var m=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(r){try{var p,t=d.baseUrl,q,v,y=f.getDocumentMode();"number"===typeof y?(v=2E3,8===y?v=4E3:8<y&&(v=8E3)):v=m(n.sp_imp_maxLength,2E3);q=v;v=t;var x=t.length,C,A,B=m(n.sp_imp_jsInfo_minLength,0),y="";try{C=q-x-B,0<C&&(A=Jd(r,C,14,b.on("partialUrls")),y+=A.join("&"))}catch(z){a.add(h.ERROR_CODES.IMPRESSION_URLS)}t=v+y;r=t+="&"===t.slice(-1)?"":"&";var D,x="";try{D=q-t.length,x+=Kd(D,"adsafe_jsinfo=",
a,b,c,e,f,s)}catch(E){a.add(h.ERROR_CODES.JSINFO),x+="adsafe_jsinfo=e:"+a.toString()}t=r+x;d.macroUrl&&(t+="&"===t.slice(-1)?"":"&",t+=d.macroUrl);p=t;d.sendImpression(p);n.impUrl=p;l.trigger("impressionsent")}catch(F){__IntegralASDiagnosticCall("impsend",F,n)}}}},Kd=function(a,b,c,d,e,k,l,m){return function(c){var d=c.primary.join(","),k=b,h=0,l=function(a){if(a)return","+a};k.length+d.length+5<=a&&(k+=l(d),e.impressionIsIdentifiable(!0),f(c.secondary).each(function(b,c){k.length+c.length+5<=a?k+=
l(c):h+=1}));return k+=",ov:"+h}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=m.checkScreenLoc(!0)||a:d.on("impFailSafe")?s.getDoc().body&&(b=(b=m.checkScreenLoc(!0))?b:a):f.isDef(s.getDoc().body)&&(b=m.checkScreenLoc(!0));m.isImmediatelyMeasurable()||m.requiresDelayedViewabilityEvent();a=b;var v=a.viewState;b=e.getAvidIds();v=["id:"+n.asid,"c:"+e.getCacheBustId(),"sl:"+v,"em:"+t.embedded,"fr:"+t.friendly];d.on("avidPropertiesInImpression")&&f.isDef(b)&&(v.push("abi:"+b.bundleIdentifier),
v.push("apn:"+b.partner),v.push("apv:"+b.partnerVersion));a=Ld(a,c,d,e,k,l,m);return{primary:v,secondary:a}}())},Ld=function(a,b,c,d,e,k,l){var m=[];m.push("mn:"+n.mn);m.push("pt:"+function(){var b=l.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());m.push(f(k.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&m.push("dvs:"+s.getDoc().visibilityState);e.iterate(function(a,b){var c=!b.props||f.isUndef(b.props.type),d=!b.props||b.props.type===h.IMPRESSION_EVENT;(c||d)&&m.push(a+
":"+b.output())});b.toString()&&m.push("e:"+b.toString());m.push(c.output());m.push("tt:"+n.mode);m.push("et:"+(s.now()-n.birthdate));n.perf.mark("si");c.on("swapids")?m.push("oid:"+n.oid):m.push("uid:"+d.unq);m.push("v:17.4.109");m.push("sp:"+(n.isSplitMode?1:0));c.on("resolution")&&(m.push("wr:"+f(v.windowSize()).toArray().join(".")),m.push("sr:"+f(v.screenSize()).toArray().join(".")));return m},Jd=function(a,b,c,d){var e,k=[],h=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};
a&&a.length&&(e=f(a).map(function(a,b){if(h(b))return b}),a=f(a).map(function(a,b){if(!h(b))return b}),f(e.concat(a)).each(function(a,e){var f;f=e.val;var h=e.key,l;l=24+k.join("&").length+h.length+c;l=b-l;d&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===e.val||""===e.type)f="adsafe_url="+f+"&adsafe_type="+h,h=k.join("&").length,f.length+h<=b&&k.push(f)}));return k},Db=function(){return{isApplicable:function(a){a=s.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=
s.getWindow();a=Md(a.navigator.plugins);var b=a.hash(),c=b.join(".");l.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),l.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},Pd=function(a,b){return{start:function(){try{var c=Nd(),d=c.getMethodName(a),e=new T(b.getEnabledScriptUrl(a)),f=Od,n=s.getDoc();(new f(n.body||n.head||n.documentElement,e)).getWindow()[d]=c.getMethod(b)}catch(m){l.trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},
Nd=function(){var a=function(a,c,d){a===n.asid&&(d.unshift(c),l.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:n.asid,constant:h,features:b,context:t,dtBaseURL:n.dtBaseURL};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Kb=function(){return{start:function(a,b){f(a).each(function(a,d){b.getEnabledScriptUrl(d)&&Pd(d,b).start()})}}},Md=function(a){return{hash:function(){for(var b=0,c=a.length,d=[],e;b<c;b++)e=a[b].filename.replace(/\.plugin$/,
""),e=M.hashCode(e),e=f.toBase(e,62).slice(-4),d.push(e);return d},decode:function(b){var c,d;c=s.floor(s.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},Od=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var f;c=v.createHiddenIframe();c.setAttribute("src","about:blank");(a||n.contextNode.parentNode).appendChild(c);f=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,l;h=(new Date).getTime();
l=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+l}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");f.open().write(b);f.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Ja()}catch(Qd){__IntegralASDiagnosticCall("main",Qd,n)}};
try{(function(){var n=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,n,n.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
