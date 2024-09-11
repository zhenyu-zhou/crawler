
/* [start] feature=taming */
var safeJSON=window.safeJSON;
var tamings___=window.tamings___||[];
var bridge___;
var caja___=window.caja___;
var ___=window.___;;

/* [end] feature=taming */

/* [start] feature=gapi-globals */
var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
;
;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi=window.osapi||{};
;

/* [end] feature=globals */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if(!window.gadgets["config"]){gadgets.config=function(){var f;
var h={};
var b={};
function c(j,l){for(var k in l){if(!l.hasOwnProperty(k)){continue
}if(typeof j[k]==="object"&&typeof l[k]==="object"){c(j[k],l[k])
}else{j[k]=l[k]
}}}function i(){var j=document.scripts||document.getElementsByTagName("script");
if(!j||j.length==0){return null
}var m;
if(f.u){for(var k=0;
!m&&k<j.length;
++k){var l=j[k];
if(l.src&&l.src.indexOf(f.u)==0){m=l
}}}if(!m){m=j[j.length-1]
}if(!m.src){return null
}return m
}function a(j){var k="";
if(j.nodeType==3||j.nodeType==4){k=j.nodeValue
}else{if(j.innerText){k=j.innerText
}else{if(j.innerHTML){k=j.innerHTML
}else{if(j.firstChild){var l=[];
for(var m=j.firstChild;
m;
m=m.nextSibling){l.push(a(m))
}k=l.join("")
}}}}return k
}function e(k){if(!k){return{}
}var j;
while(k.charCodeAt(k.length-1)==0){k=k.substring(0,k.length-1)
}try{j=(new Function("return ("+k+"\n)"))()
}catch(l){}if(typeof j==="object"){return j
}try{j=(new Function("return ({"+k+"\n})"))()
}catch(l){}return typeof j==="object"?j:{}
}function g(n){var p=window.___cfg;
if(p){c(n,p)
}var o=i();
if(!o){return
}var k=a(o);
var j=e(k);
if(f.f&&f.f.length==1){var m=f.f[0];
if(!j[m]){var l={};
l[f.f[0]]=j;
j=l
}}c(n,j)
}function d(o){for(var l in h){if(h.hasOwnProperty(l)){var n=h[l];
for(var m=0,k=n.length;
m<k;
++m){o(l,n[m])
}}}}return{register:function(l,k,j,m){var n=h[l];
if(!n){n=[];
h[l]=n
}n.push({validators:k||{},callback:j,callOnUpdate:m})
},get:function(j){if(j){return b[j]||{}
}return b
},init:function(k,j){f=window.___jsl||{};
c(b,k);
g(b);
var l=window.___config||{};
c(b,l);
d(function(q,p){var o=b[q];
if(o&&!j){var m=p.validators;
for(var n in m){if(m.hasOwnProperty(n)){if(!m[n](o[n])){throw new Error('Invalid config value "'+o[n]+'" for parameter "'+n+'" in component "'+q+'"')
}}}}if(p.callback){p.callback(b)
}})
},update:function(k,p){var o=(window.gapi&&window.gapi["config"]&&window.gapi["config"]["update"]);
if(!p&&o){o(k)
}var n=[];
d(function(q,j){if(k.hasOwnProperty(q)||(p&&b&&b[q])){if(j.callback&&j.callOnUpdate){n.push(j.callback)
}}});
b=p?{}:b||{};
c(b,k);
for(var m=0,l=n.length;
m<l;
++m){n[m](b)
}}}
}()
}else{gadgets.config=window.gadgets["config"];
gadgets.config.register=gadgets.config.register;
gadgets.config.get=gadgets.config.get;
gadgets.config.init=gadgets.config.init;
gadgets.config.update=gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.debug=function(i){};
gadgets.setLogLevel=function(i){h=i
};
function b(k,i){if(k<h||!g){return
}if(k===a&&g.warn){g.warn(i)
}else{if(k===f&&g.error){try{g.error(i)
}catch(j){}}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
;

/* [end] feature=core.log */

/* [start] feature=core.config */
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.makeClosure=function(d,f,e){var c=[];
for(var b=2,a=arguments.length;
b<a;
++b){c.push(arguments[b])
}return function(){var g=c.slice();
for(var k=0,h=arguments.length;
k<h;
++k){g.push(arguments[k])
}return f.apply(d,g)
}
};
gadgets.util.makeEnum=function(b){var c,a,d={};
for(c=0;
(a=b[c]);
++c){d[a]=a
}return d
}
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util=gadgets.util||{};
(function(){var c="http://www.w3.org/1999/xhtml";
function b(f,e){var h=e||{};
for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g]
}}}function d(g,f){var e=["<",g];
var i=f||{};
for(var h in i){if(i.hasOwnProperty(h)){e.push(" ");
e.push(h);
e.push('="');
e.push(gadgets.util.escapeString(i[h]));
e.push('"')
}}e.push("></");
e.push(g);
e.push(">");
return e.join("")
}function a(f){var g="";
if(f.nodeType==3||f.nodeType==4){g=f.nodeValue
}else{if(f.innerText){g=f.innerText
}else{if(f.innerHTML){g=f.innerHTML
}else{if(f.firstChild){var e=[];
for(var h=f.firstChild;
h;
h=h.nextSibling){e.push(a(h))
}g=e.join("")
}}}}return g
}gadgets.util.createElement=function(f){var e;
if((!document.body)||document.body.namespaceURI){try{e=document.createElementNS(c,f)
}catch(g){}}return e||document.createElement(f)
};
gadgets.util.createIframeElement=function(g){var i=gadgets.util.createElement("iframe");
try{var e=d("iframe",g);
var f=gadgets.util.createElement(e);
if(f&&((!i)||((f.tagName==i.tagName)&&(f.namespaceURI==i.namespaceURI)))){i=f
}}catch(h){}b(i,g);
return i
};
gadgets.util.getBodyElement=function(){if(document.body){return document.body
}try{var f=document.getElementsByTagNameNS(c,"body");
if(f&&(f.length==1)){return f[0]
}}catch(e){}return document.documentElement||document
};
gadgets.util.getInnerText=function(e){return a(e)
}
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.attachBrowserEvent=function(c,b,d,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,d,a)
}else{if(typeof c.attachEvent!="undefined"){c.attachEvent("on"+b,d)
}else{gadgets.warn("cannot attachBrowserEvent: "+b)
}}};
gadgets.util.removeBrowserEvent=function(c,b,d,a){if(c.removeEventListener){c.removeEventListener(b,d,a)
}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}else{gadgets.warn("cannot removeBrowserEvent: "+b)
}}}
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util=gadgets.util||{};
(function(){var a=[];
gadgets.util.registerOnLoadHandler=function(b){a.push(b)
};
gadgets.util.runOnLoadHandlers=function(){for(var c=0,b=a.length;
c<b;
++c){a[c]()
}}
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util=gadgets.util||{};
(function(){var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true,65282:true,65287:true,65308:true,65310:true,65340:true};
function b(c,d){return String.fromCharCode(d)
}gadgets.util.escape=function(c,g){if(!c){return c
}else{if(typeof c==="string"){return gadgets.util.escapeString(c)
}else{if(typeof c==="Array"){for(var f=0,d=c.length;
f<d;
++f){c[f]=gadgets.util.escape(c[f])
}}else{if(typeof c==="object"&&g){var e={};
for(var h in c){if(c.hasOwnProperty(h)){e[gadgets.util.escapeString(h)]=gadgets.util.escape(c[h],true)
}}return e
}}}}return c
};
gadgets.util.escapeString=function(g){if(!g){return g
}var d=[],f,h;
for(var e=0,c=g.length;
e<c;
++e){f=g.charCodeAt(e);
h=a[f];
if(h===true){d.push("&#",f,";")
}else{if(h!==false){d.push(g.charAt(e))
}}}return d.join("")
};
gadgets.util.unescapeString=function(c){if(!c){return c
}return c.replace(/&#([0-9]+);/g,b)
}
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util=gadgets.util||{};
(function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}gadgets.util.getUrlParameters=function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||window.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
};
gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=core.util */
gadgets.util=gadgets.util||{};
(function(){var b={};
var a={};
function c(d){b=d["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,c)
}gadgets.util.getFeatureParameters=function(d){return typeof b[d]==="undefined"?null:b[d]
};
gadgets.util.hasFeature=function(d){return typeof b[d]!=="undefined"
};
gadgets.util.getServices=function(){return a
}
})();;

/* [end] feature=core.util */

/* [start] feature=shindig.auth */
shindig.Auth=function(){var authToken=null;
var trusted=null;
function addParamsToToken(urlParams){var args=authToken.split("&");
for(var i=0;
i<args.length;
i++){var nameAndValue=args[i].split("=");
if(nameAndValue.length===2){var name=nameAndValue[0];
var value=nameAndValue[1];
if(value==="$"){value=encodeURIComponent(urlParams[name]);
args[i]=name+"="+value
}}}authToken=args.join("&")
}function init(configuration){var urlParams=gadgets.util.getUrlParameters();
var config=configuration["shindig.auth"]||{};
if(config.authToken){authToken=config.authToken
}else{if(urlParams.st){authToken=urlParams.st
}}if(authToken!==null){addParamsToToken(urlParams)
}if(config.trustedJson){trusted=(eval("("+config.trustedJson+")"))
}}gadgets.config.register("shindig.auth",null,init);
return{getSecurityToken:function(){return authToken
},updateSecurityToken:function(newToken){authToken=newToken
},getTrustedData:function(){return trusted
}}
};;
shindig.auth=new shindig.Auth();;

/* [end] feature=shindig.auth */

/* [start] feature=core.json */
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
function b(d,e){var c=this[d];
return c
}return{parse:function(d){try{return window.JSON.parse(d)
}catch(c){return false
}},stringify:function(d){var h=window.JSON.stringify;
function f(e){return h.call(this,e,b)
}var g=(Array.prototype.toJSON&&h([{x:1}])==='"[{\\"x\\": 1}]"')?f:h;
try{return g(d,function(i,e){return !a.test(i)?e:void 0
})
}catch(c){return null
}}}
})()
};;
;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/[\"\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(/___$/.test(k)){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;

/* [end] feature=core.json */

/* [start] feature=core.io */
gadgets.io=function(){var config={};
var oauthState;
function makeXhr(){var x;
var wrapperXhr=window.shindig&&window.shindig["xhrwrapper"]&&window.shindig["xhrwrapper"]["createXHR"];
if(wrapperXhr){return wrapperXhr()
}else{if(typeof ActiveXObject!="undefined"){x=new ActiveXObject("Msxml2.XMLHTTP");
if(!x){x=new ActiveXObject("Microsoft.XMLHTTP")
}return x
}else{if(typeof XMLHttpRequest!="undefined"||window.XMLHttpRequest){return new window.XMLHttpRequest()
}else{throw ("no xhr available")
}}}}function hadError(xobj,callback){if(xobj.readyState!==4){return true
}try{if(xobj.status!==200){var error=(""+xobj.status);
if(xobj.responseText){error=error+" "+xobj.responseText
}callback({errors:[error],rc:xobj.status,text:xobj.responseText});
return true
}}catch(e){callback({errors:[e.number+" Error not specified"],rc:e.number,text:e.description});
return true
}return false
}function processNonProxiedResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return
}var data={body:xobj.responseText};
callback(transformResponseData(params,data))
}var UNPARSEABLE_CRUFT="throw 1; < don't be evil' >";
function processResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return
}var txt=xobj.responseText;
var offset=txt.indexOf(UNPARSEABLE_CRUFT)+UNPARSEABLE_CRUFT.length;
if(offset<UNPARSEABLE_CRUFT.length){return
}txt=txt.substr(offset);
var data=eval("("+txt+")");
data=data[url];
if(data.oauthState){oauthState=data.oauthState
}if(data.st){shindig.auth.updateSecurityToken(data.st)
}callback(transformResponseData(params,data))
}function transformResponseData(params,data){var resp={text:data.body,rc:data.rc||200,headers:data.headers,oauthApprovalUrl:data.oauthApprovalUrl,oauthError:data.oauthError,oauthErrorText:data.oauthErrorText,errors:[]};
if(resp.rc<200||resp.rc>=400){resp.errors=[resp.rc+" Error"]
}else{if(resp.text){if(resp.rc>=300&&resp.rc<400){params.CONTENT_TYPE="TEXT"
}switch(params.CONTENT_TYPE){case"JSON":case"FEED":resp.data=gadgets.json.parse(resp.text);
if(!resp.data){resp.errors.push("500 Failed to parse JSON");
resp.rc=500;
resp.data=null
}break;
case"DOM":var dom;
if(typeof ActiveXObject!="undefined"){dom=new ActiveXObject("Microsoft.XMLDOM");
dom.async=false;
dom.validateOnParse=false;
dom.resolveExternals=false;
if(!dom.loadXML(resp.text)){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}else{var parser=new DOMParser();
dom=parser.parseFromString(resp.text,"text/xml");
if("parsererror"===dom.documentElement.nodeName){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}break;
default:resp.data=resp.text;
break
}}}return resp
}function makeXhrRequest(realUrl,proxyUrl,callback,paramData,method,params,processResponseFunction,opt_headers){var xhr=makeXhr();
if(proxyUrl.indexOf("//")==0){proxyUrl=document.location.protocol+proxyUrl
}xhr.open(method,proxyUrl,true);
if(callback){xhr.onreadystatechange=gadgets.util.makeClosure(null,processResponseFunction,realUrl,callback,params,xhr)
}if(paramData!==null){var contentTypeHeader="Content-Type";
var contentType="application/x-www-form-urlencoded";
if(typeof opt_headers==="string"){contentType=opt_headers;
opt_headers={}
}var headers=opt_headers||{};
if(!headers[contentTypeHeader]){headers[contentTypeHeader]=contentType
}for(var headerName in headers){xhr.setRequestHeader(headerName,headers[headerName])
}}xhr.send(paramData)
}function respondWithPreload(postData,params,callback){if(gadgets.io.preloaded_&&postData.httpMethod==="GET"){for(var i=0;
i<gadgets.io.preloaded_.length;
i++){var preload=gadgets.io.preloaded_[i];
if(preload&&(preload.id===postData.url)){delete gadgets.io.preloaded_[i];
if(preload.rc!==200){callback({rc:preload.rc,errors:[preload.rc+" Error"]})
}else{if(preload.oauthState){oauthState=preload.oauthState
}var resp={body:preload.body,rc:preload.rc,headers:preload.headers,oauthApprovalUrl:preload.oauthApprovalUrl,oauthError:preload.oauthError,oauthErrorText:preload.oauthErrorText,errors:[]};
callback(transformResponseData(params,resp))
}return true
}}}return false
}function init(configuration){config=configuration["core.io"]||{}
}gadgets.config.register("core.io",null,init);
return{makeRequest:function(url,callback,opt_params){var params=opt_params||{};
var httpMethod=params.METHOD||"GET";
var refreshInterval=params.REFRESH_INTERVAL;
var auth,st;
if(params.AUTHORIZATION&&params.AUTHORIZATION!=="NONE"){auth=params.AUTHORIZATION.toLowerCase();
st=shindig.auth.getSecurityToken()
}else{if(httpMethod==="GET"&&refreshInterval===undefined){refreshInterval=3600
}}var signOwner=true;
if(typeof params.OWNER_SIGNED!=="undefined"){signOwner=params.OWNER_SIGNED
}var signViewer=true;
if(typeof params.VIEWER_SIGNED!=="undefined"){signViewer=params.VIEWER_SIGNED
}var headers=params.HEADERS||{};
if(httpMethod==="POST"&&!headers["Content-Type"]){headers["Content-Type"]="application/x-www-form-urlencoded"
}var urlParams=gadgets.util.getUrlParameters();
var paramData={url:url,httpMethod:httpMethod,headers:gadgets.io.encodeValues(headers,false),postData:params.POST_DATA||"",authz:auth||"",st:st||"",contentType:params.CONTENT_TYPE||"TEXT",numEntries:params.NUM_ENTRIES||"3",getSummaries:!!params.GET_SUMMARIES,signOwner:signOwner,signViewer:signViewer,gadget:urlParams.url,container:urlParams.container||urlParams.synd||"default",bypassSpecCache:gadgets.util.getUrlParameters()["nocache"]||"",getFullHeaders:!!params.GET_FULL_HEADERS};
if(auth==="oauth"||auth==="signed"){if(gadgets.io.oauthReceivedCallbackUrl_){paramData.OAUTH_RECEIVED_CALLBACK=gadgets.io.oauthReceivedCallbackUrl_;
gadgets.io.oauthReceivedCallbackUrl_=null
}paramData.oauthState=oauthState||"";
for(var opt in params){if(params.hasOwnProperty(opt)){if(opt.indexOf("OAUTH_")===0){paramData[opt]=params[opt]
}}}}var proxyUrl=config.jsonProxyUrl.replace("%host%",document.location.host);
if(!respondWithPreload(paramData,params,callback)){if(httpMethod==="GET"&&refreshInterval>0){var extraparams="?refresh="+refreshInterval+"&"+gadgets.io.encodeValues(paramData);
makeXhrRequest(url,proxyUrl+extraparams,callback,null,"GET",params,processResponse)
}else{makeXhrRequest(url,proxyUrl,callback,gadgets.io.encodeValues(paramData),"POST",params,processResponse)
}}},makeNonProxiedRequest:function(relativeUrl,callback,opt_params,opt_headers){var params=opt_params||{};
makeXhrRequest(relativeUrl,relativeUrl,callback,params.POST_DATA,params.METHOD,params,processNonProxiedResponse,opt_headers)
},clearOAuthState:function(){oauthState=undefined
},encodeValues:function(fields,opt_noEscaping){var escape=!opt_noEscaping;
var buf=[];
var first=false;
for(var i in fields){if(fields.hasOwnProperty(i)&&!/___$/.test(i)){if(!first){first=true
}else{buf.push("&")
}buf.push(escape?encodeURIComponent(String(i)):i);
buf.push("=");
buf.push(escape?encodeURIComponent(String(fields[i])):fields[i])
}}return buf.join("")
},getProxyUrl:function(url,opt_params){var params=opt_params||{};
var refresh=params.REFRESH_INTERVAL;
if(refresh===undefined){refresh="3600"
}var urlParams=gadgets.util.getUrlParameters();
var rewriteMimeParam=params.rewriteMime?"&rewriteMime="+encodeURIComponent(String(params.rewriteMime)):"";
var ret=config.proxyUrl.replace("%url%",encodeURIComponent(url)).replace("%host%",document.location.host).replace("%rawurl%",url).replace("%refresh%",encodeURIComponent(String(refresh))).replace("%gadget%",encodeURIComponent(urlParams.url)).replace("%container%",encodeURIComponent(urlParams.container||urlParams.synd||"default")).replace("%rewriteMime%",rewriteMimeParam);
if(ret.indexOf("//")==0){ret=window.location.protocol+ret
}return ret
}}
}();
gadgets.io.RequestParameters=gadgets.util.makeEnum(["METHOD","CONTENT_TYPE","POST_DATA","HEADERS","AUTHORIZATION","NUM_ENTRIES","GET_SUMMARIES","GET_FULL_HEADERS","REFRESH_INTERVAL","OAUTH_SERVICE_NAME","OAUTH_USE_TOKEN","OAUTH_TOKEN_NAME","OAUTH_REQUEST_TOKEN","OAUTH_REQUEST_TOKEN_SECRET","OAUTH_RECEIVED_CALLBACK"]);
gadgets.io.MethodType=gadgets.util.makeEnum(["GET","POST","PUT","DELETE","HEAD"]);
gadgets.io.ContentType=gadgets.util.makeEnum(["TEXT","DOM","JSON","FEED"]);
gadgets.io.AuthorizationType=gadgets.util.makeEnum(["NONE","SIGNED","OAUTH"]);;

/* [end] feature=core.io */

/* [start] feature=core.prefs */
(function(){var i=null;
var j={};
var f=gadgets.util.escapeString;
var d={};
var h={};
var e="en";
var b="US";
var a=0;
function c(){var l=gadgets.util.getUrlParameters();
for(var k in l){if(l.hasOwnProperty(k)){if(k.indexOf("up_")===0&&k.length>3){j[k.substr(3)]=String(l[k])
}else{if(k==="country"){b=l[k]
}else{if(k==="lang"){e=l[k]
}else{if(k==="mid"){a=l[k]
}}}}}}}function g(){for(var k in h){if(typeof j[k]==="undefined"){j[k]=h[k]
}}}gadgets.Prefs=function(){if(!i){c();
g();
i=this
}return i
};
gadgets.Prefs.setInternal_=function(n,p){var o=false;
if(typeof n==="string"){if(!j.hasOwnProperty(n)||j[n]!==p){o=true
}j[n]=p
}else{for(var m in n){if(n.hasOwnProperty(m)){var l=n[m];
if(!j.hasOwnProperty(m)||j[m]!==l){o=true
}j[m]=l
}}}return o
};
gadgets.Prefs.setMessages_=function(k){d=k
};
gadgets.Prefs.setDefaultPrefs_=function(k){h=k
};
gadgets.Prefs.prototype.getString=function(k){if(k===".lang"){k="lang"
}return j[k]?f(j[k]):""
};
gadgets.Prefs.prototype.setDontEscape_=function(){f=function(l){return l
}
};
gadgets.Prefs.prototype.getInt=function(k){var l=parseInt(j[k],10);
return isNaN(l)?0:l
};
gadgets.Prefs.prototype.getFloat=function(k){var l=parseFloat(j[k]);
return isNaN(l)?0:l
};
gadgets.Prefs.prototype.getBool=function(k){var l=j[k];
if(l){return l==="true"||l===true||!!parseInt(l,10)
}return false
};
gadgets.Prefs.prototype.set=function(k,l){throw new Error("setprefs feature required to make this call.")
};
gadgets.Prefs.prototype.getArray=function(n){var o=j[n];
if(o){var k=o.split("|");
for(var m=0,l=k.length;
m<l;
++m){k[m]=f(k[m].replace(/%7C/g,"|"))
}return k
}return[]
};
gadgets.Prefs.prototype.setArray=function(k,l){throw new Error("setprefs feature required to make this call.")
};
gadgets.Prefs.prototype.getMsg=function(k){return d[k]||""
};
gadgets.Prefs.prototype.getCountry=function(){return b
};
gadgets.Prefs.prototype.getLang=function(){return e
};
gadgets.Prefs.prototype.getModuleId=function(){return a
}
})();;

/* [end] feature=core.prefs */

/* [start] feature=core.legacy */
var JSON=window.JSON||gadgets.json;
var _IG_Prefs=(function(){var a=null;
var b=function(){if(!a){a=new gadgets.Prefs();
a.setDontEscape_()
}return a
};
b._parseURL=gadgets.Prefs.parseUrl;
return b
})();
function _IG_Fetch_wrapper(b,a){b(a.data?a.data:"")
}function _IG_FetchContent(b,g,c){var f=c||{};
if(f.refreshInterval){f.REFRESH_INTERVAL=f.refreshInterval
}else{f.REFRESH_INTERVAL=3600
}for(var e in f){var d=f[e];
delete f[e];
f[e.toUpperCase()]=d
}var a=gadgets.util.makeClosure(null,_IG_Fetch_wrapper,g);
gadgets.io.makeRequest(b,a,f)
}function _IG_FetchXmlContent(b,e,c){var d=c||{};
if(d.refreshInterval){d.REFRESH_INTERVAL=d.refreshInterval
}else{d.REFRESH_INTERVAL=3600
}d.CONTENT_TYPE="DOM";
var a=gadgets.util.makeClosure(null,_IG_Fetch_wrapper,e);
gadgets.io.makeRequest(b,a,d)
}function _IG_FetchFeedAsJSON(b,f,c,a,d){var e=d||{};
e.CONTENT_TYPE="FEED";
e.NUM_ENTRIES=c;
e.GET_SUMMARIES=a;
gadgets.io.makeRequest(b,function(j){j.data=j.data||{};
if(j.errors&&j.errors.length>0){j.data.ErrorMsg=j.errors[0]
}if(j.data.link){j.data.URL=b
}if(j.data.title){j.data.Title=j.data.title
}if(j.data.description){j.data.Description=j.data.description
}if(j.data.link){j.data.Link=j.data.link
}if(j.data.items&&j.data.items.length>0){j.data.Entry=j.data.items;
for(var h=0;
h<j.data.Entry.length;
++h){var i=j.data.Entry[h];
i.Title=i.title;
i.Link=i.link;
i.Summary=i.summary||i.description;
i.Date=i.pubDate
}}for(var g=0;
g<j.data.Entry.length;
++g){var i=j.data.Entry[g];
i.Date=(i.Date/1000)
}f(j.data)
},e)
}function _IG_GetCachedUrl(a,b){var c=b||{};
c.REFRESH_INTERVAL=3600;
if(c.refreshInterval){c.REFRESH_INTERVAL=c.refreshInterval
}return gadgets.io.getProxyUrl(a,c)
}function _IG_GetImageUrl(a,b){return _IG_GetCachedUrl(a,b)
}function _IG_GetImage(b){var a=document.createElement("img");
a.src=_IG_GetCachedUrl(b);
return a
}function _IG_RegisterOnloadHandler(a){gadgets.util.registerOnLoadHandler(a)
}function _IG_Callback(b,c){var a=arguments;
return function(){var d=Array.prototype.slice.call(arguments);
b.apply(null,d.concat(Array.prototype.slice.call(a,1)))
}
}var _args=gadgets.util.getUrlParameters;
function _gel(a){return document.getElementById?document.getElementById(a):null
}function _gelstn(a){if(a==="*"&&document.all){return document.all
}return document.getElementsByTagName?document.getElementsByTagName(a):[]
}function _gelsbyregex(d,f){var c=_gelstn(d);
var e=[];
for(var b=0,a=c.length;
b<a;
++b){if(f.test(c[b].id)){e.push(c[b])
}}return e
}function _esc(a){return window.encodeURIComponent?encodeURIComponent(a):escape(a)
}function _unesc(a){return window.decodeURIComponent?decodeURIComponent(a):unescape(a)
}function _hesc(a){return gadgets.util.escapeString(a)
}function _striptags(a){return a.replace(/<\/?[^>]+>/g,"")
}function _trim(a){return a.replace(/^\s+|\s+$/g,"")
}function _toggle(a){a=(typeof a==="string")?_gel(a):a;
if(a!==null){if(a.style.display.length===0||a.style.display==="block"){a.style.display="none"
}else{if(a.style.display==="none"){a.style.display="block"
}}}}var _uid=(function(){var a=0;
return function(){return a++
}
})();
function _min(d,c){return(d<c?d:c)
}function _max(d,c){return(d>c?d:c)
}function _exportSymbols(a,c){var m=window;
var f=a.split(".");
for(var h=0,g=f.length;
h<g;
h++){var b=f[h];
m[b]=m[b]||{};
m=m[b]
}for(var e=0,d=c.length;
e<d;
e+=2){m[c[e]]=c[e+1]
}}function _IG_AddDOMEventHandler(c,b,a){gadgets.warn("_IG_AddDOMEventHandler not implemented - see SHINDIG-198")
};;

/* [end] feature=core.legacy */

/* [start] feature=core.tracking */
(function(){function f(b,c,a){b={msg:b||"",line:a||0,jsUrl:window.location.href.indexOf(c)==0?"-top-":c,fullUrl:window.location};try{if(++window._varz_numerrors,gadgets&&!(e>3)){c={};c[gadgets.io.RequestParameters.METHOD]=gadgets.io.MethodType.GET;a=encodeURIComponent||escape;var d=gadgets.util.getUrlParameters(),g=d.container||d.synd,h=d.gadget||d.url,l=["/gadgets/evthdlr?t=err&gadget=",a(h),"&container=",a(g),"&jsurl=",a(b.jsUrl),"&line=",a(b.line),"&session=",k,"&count=",e,"&msg=",a(b.msg)];gadgets.io.makeNonProxiedRequest(l.join(""),
null,c);e++}}catch(m){}}window._varz_numerrors=0;var k=(new Date).getTime(),e=0;window.location.href.indexOf("&debug=1")==-1&&window.location.href.indexOf("?debug=1")==-1&&(window.onerror=f)})();
;

/* [end] feature=core.tracking */

/* [start] feature=core */
(function(){var l=null,q=function(){function e(a){a=(""+a).match(w);return!a?l:new b(p(a[1]),p(a[2]),p(a[3]),p(a[4]),p(a[5]),p(a[6]),p(a[7]))}function x(a,e){return"string"==typeof a?encodeURI(a).replace(e,y):l}function y(a){a=a.charCodeAt(0);return"%"+"0123456789ABCDEF".charAt(a>>4&15)+"0123456789ABCDEF".charAt(a&15)}function u(a){if(a===l)return l;for(var a=a.replace(/(^|\/)\.(?:\/|$)/g,"$1").replace(/\/{2,}/g,"/"),e=z,m;(m=a.replace(e,"$1"))!=a;a=m);return a}function v(a,e){var m=a.R(),b=e.K();b?m.fa(e.j):
b=e.V();b?m.ca(e.n):b=e.W();b?m.da(e.k):b=e.Y();var s=e.g,g=u(s);if(b)m.ba(e.T()),g=g&&g.replace(j,"");else if(b=!!s){if(47!==g.charCodeAt(0))var g=u(m.g||"").replace(j,""),p=g.lastIndexOf("/")+1,g=u((p?g.substring(0,p):"")+u(s)).replace(j,"")}else g=g&&g.replace(j,""),g!==s&&m.G(g);b?m.G(g):b=e.Z();b?m.M(e.l):b=e.X();b&&m.ea(e.o);return m}function b(a,e,b,j,s,g,p){this.j=a;this.n=e;this.k=b;this.h=j;this.g=s;this.l=g;this.o=p}function p(a){return"string"==typeof a&&0<a.length?a:l}var z=RegExp(/(\/|^)(?:[^./][^/]*|\.{2,}(?:[^./][^/]*)|\.{3,}[^/]*)\/\.\.(?:\/|$)/),
j=/^(?:\.\.\/)*(?:\.\.$)?/;b.prototype.toString=function(){var a=[];l!==this.j&&a.push(this.j,":");l!==this.k&&(a.push("//"),l!==this.n&&a.push(this.n,"@"),a.push(this.k),l!==this.h&&a.push(":",this.h.toString()));l!==this.g&&a.push(this.g);l!==this.l&&a.push("?",this.l);l!==this.o&&a.push("#",this.o);return a.join("")};b.prototype.R=function(){return new b(this.j,this.n,this.k,this.h,this.g,this.l,this.o)};b.prototype.U=function(){return this.j&&decodeURIComponent(this.j).toLowerCase()};b.prototype.fa=
function(a){this.j=a?a:l};b.prototype.K=function(){return l!==this.j};b.prototype.ca=function(a){this.n=a?a:l};b.prototype.V=function(){return l!==this.n};b.prototype.da=function(a){this.k=a?a:l;this.G(this.g)};b.prototype.W=function(){return l!==this.k};b.prototype.T=function(){return this.h&&decodeURIComponent(this.h)};b.prototype.ba=function(a){if(a){a=Number(a);if(a!==(a&65535))throw Error("Bad port number "+a);this.h=""+a}else this.h=l};b.prototype.Y=function(){return l!==this.h};b.prototype.S=
function(){return this.g&&decodeURIComponent(this.g)};b.prototype.G=function(a){a?(a=""+a,this.g=!this.k||/^\//.test(a)?a:"/"+a):this.g=l};b.prototype.M=function(a){this.l=a?a:l};b.prototype.Z=function(){return l!==this.l};b.prototype.aa=function(a){if("object"===typeof a&&!(a instanceof Array)&&(a instanceof Object||"[object Array]"!==Object.prototype.toString.call(a))){var e=[],b=-1,j;for(j in a){var s=a[j];"string"===typeof s&&(e[++b]=j,e[++b]=s)}a=e}for(var e=[],b="",g=0;g<a.length;)j=a[g++],
s=a[g++],e.push(b,encodeURIComponent(j.toString())),b="&",s&&e.push("=",encodeURIComponent(s.toString()));this.l=e.join("")};b.prototype.ea=function(a){this.o=a?a:l};b.prototype.X=function(){return l!==this.o};var w=/^(?:([^:/?#]+):)?(?:\/\/(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,B=/[#\/\?@]/g,C=/[\#\?]/g;b.parse=e;b.create=function(a,e,j,p,s,g,u){a=new b(x(a,B),x(e,B),"string"==typeof j?encodeURIComponent(j):l,0<p?p.toString():l,x(s,C),l,"string"==typeof u?encodeURIComponent(u):
l);g&&("string"===typeof g?a.M(g.replace(/[^?&=0-9A-Za-z_\-~.%]/g,y)):a.aa(g));return a};b.$=v;b.ja=u;b.va={pa:function(a){return/\.html$/.test(e(a).S())?"text/html":"application/javascript"},$:function(a,b){return a?v(e(a),e(b)).toString():""+b}};return b}();"undefined"!==typeof window&&(window.URI=q);var M={f:{NONE:0,URI:1,URI_FRAGMENT:11,SCRIPT:2,STYLE:3,HTML:12,ID:4,IDREF:5,IDREFS:6,GLOBAL_NAME:7,LOCAL_NAME:8,CLASSES:9,FRAME_TARGET:10,MEDIA_QUERY:13}};M.atype=M.f;
M.w={"*::class":9,"*::dir":0,"*::draggable":0,"*::hidden":0,"*::id":4,"*::inert":0,"*::itemprop":0,"*::itemref":6,"*::itemscope":0,"*::lang":0,"*::onblur":2,"*::onchange":2,"*::onclick":2,"*::ondblclick":2,"*::onerror":2,"*::onfocus":2,"*::onkeydown":2,"*::onkeypress":2,"*::onkeyup":2,"*::onload":2,"*::onmousedown":2,"*::onmousemove":2,"*::onmouseout":2,"*::onmouseover":2,"*::onmouseup":2,"*::onreset":2,"*::onscroll":2,"*::onselect":2,"*::onsubmit":2,"*::ontouchcancel":2,"*::ontouchend":2,"*::ontouchenter":2,
"*::ontouchleave":2,"*::ontouchmove":2,"*::ontouchstart":2,"*::onunload":2,"*::spellcheck":0,"*::style":3,"*::tabindex":0,"*::title":0,"*::translate":0,"a::accesskey":0,"a::coords":0,"a::href":1,"a::hreflang":0,"a::name":7,"a::onblur":2,"a::onfocus":2,"a::shape":0,"a::target":10,"a::type":0,"area::accesskey":0,"area::alt":0,"area::coords":0,"area::href":1,"area::nohref":0,"area::onblur":2,"area::onfocus":2,"area::shape":0,"area::target":10,"audio::controls":0,"audio::loop":0,"audio::mediagroup":5,
"audio::muted":0,"audio::preload":0,"audio::src":1,"bdo::dir":0,"blockquote::cite":1,"br::clear":0,"button::accesskey":0,"button::disabled":0,"button::name":8,"button::onblur":2,"button::onfocus":2,"button::type":0,"button::value":0,"canvas::height":0,"canvas::width":0,"caption::align":0,"col::align":0,"col::char":0,"col::charoff":0,"col::span":0,"col::valign":0,"col::width":0,"colgroup::align":0,"colgroup::char":0,"colgroup::charoff":0,"colgroup::span":0,"colgroup::valign":0,"colgroup::width":0,
"command::checked":0,"command::command":5,"command::disabled":0,"command::icon":1,"command::label":0,"command::radiogroup":0,"command::type":0,"data::value":0,"del::cite":1,"del::datetime":0,"details::open":0,"dir::compact":0,"div::align":0,"dl::compact":0,"fieldset::disabled":0,"font::color":0,"font::face":0,"font::size":0,"form::accept":0,"form::action":1,"form::autocomplete":0,"form::enctype":0,"form::method":0,"form::name":7,"form::novalidate":0,"form::onreset":2,"form::onsubmit":2,"form::target":10,
"h1::align":0,"h2::align":0,"h3::align":0,"h4::align":0,"h5::align":0,"h6::align":0,"hr::align":0,"hr::noshade":0,"hr::size":0,"hr::width":0,"iframe::align":0,"iframe::frameborder":0,"iframe::height":0,"iframe::marginheight":0,"iframe::marginwidth":0,"iframe::width":0,"img::align":0,"img::alt":0,"img::border":0,"img::height":0,"img::hspace":0,"img::ismap":0,"img::name":7,"img::src":1,"img::usemap":11,"img::vspace":0,"img::width":0,"input::accept":0,"input::accesskey":0,"input::align":0,"input::alt":0,
"input::autocomplete":0,"input::checked":0,"input::disabled":0,"input::inputmode":0,"input::ismap":0,"input::list":5,"input::max":0,"input::maxlength":0,"input::min":0,"input::multiple":0,"input::name":8,"input::onblur":2,"input::onchange":2,"input::onfocus":2,"input::onselect":2,"input::pattern":0,"input::placeholder":0,"input::readonly":0,"input::required":0,"input::size":0,"input::src":1,"input::step":0,"input::type":0,"input::usemap":11,"input::value":0,"ins::cite":1,"ins::datetime":0,"label::accesskey":0,
"label::for":5,"label::onblur":2,"label::onfocus":2,"legend::accesskey":0,"legend::align":0,"li::type":0,"li::value":0,"map::name":7,"menu::compact":0,"menu::label":0,"menu::type":0,"meter::high":0,"meter::low":0,"meter::max":0,"meter::min":0,"meter::optimum":0,"meter::value":0,"ol::compact":0,"ol::reversed":0,"ol::start":0,"ol::type":0,"optgroup::disabled":0,"optgroup::label":0,"option::disabled":0,"option::label":0,"option::selected":0,"option::value":0,"output::for":6,"output::name":8,"p::align":0,
"pre::width":0,"progress::max":0,"progress::min":0,"progress::value":0,"q::cite":1,"select::autocomplete":0,"select::disabled":0,"select::multiple":0,"select::name":8,"select::onblur":2,"select::onchange":2,"select::onfocus":2,"select::required":0,"select::size":0,"source::type":0,"table::align":0,"table::bgcolor":0,"table::border":0,"table::cellpadding":0,"table::cellspacing":0,"table::frame":0,"table::rules":0,"table::summary":0,"table::width":0,"tbody::align":0,"tbody::char":0,"tbody::charoff":0,
"tbody::valign":0,"td::abbr":0,"td::align":0,"td::axis":0,"td::bgcolor":0,"td::char":0,"td::charoff":0,"td::colspan":0,"td::headers":6,"td::height":0,"td::nowrap":0,"td::rowspan":0,"td::scope":0,"td::valign":0,"td::width":0,"textarea::accesskey":0,"textarea::autocomplete":0,"textarea::cols":0,"textarea::disabled":0,"textarea::inputmode":0,"textarea::name":8,"textarea::onblur":2,"textarea::onchange":2,"textarea::onfocus":2,"textarea::onselect":2,"textarea::placeholder":0,"textarea::readonly":0,"textarea::required":0,
"textarea::rows":0,"textarea::wrap":0,"tfoot::align":0,"tfoot::char":0,"tfoot::charoff":0,"tfoot::valign":0,"th::abbr":0,"th::align":0,"th::axis":0,"th::bgcolor":0,"th::char":0,"th::charoff":0,"th::colspan":0,"th::headers":6,"th::height":0,"th::nowrap":0,"th::rowspan":0,"th::scope":0,"th::valign":0,"th::width":0,"thead::align":0,"thead::char":0,"thead::charoff":0,"thead::valign":0,"tr::align":0,"tr::bgcolor":0,"tr::char":0,"tr::charoff":0,"tr::valign":0,"track::default":0,"track::kind":0,"track::label":0,
"track::srclang":0,"ul::compact":0,"ul::type":0,"video::controls":0,"video::height":0,"video::loop":0,"video::mediagroup":5,"video::muted":0,"video::poster":1,"video::preload":0,"video::src":1,"video::width":0};M.ATTRIBS=M.w;M.c={OPTIONAL_ENDTAG:1,EMPTY:2,CDATA:4,RCDATA:8,UNSAFE:16,FOLDABLE:32,SCRIPT:64,STYLE:128,VIRTUALIZED:256};M.eflags=M.c;
M.e={a:0,abbr:0,acronym:0,address:0,applet:272,area:2,article:0,aside:0,audio:0,b:0,base:274,basefont:274,bdi:0,bdo:0,big:0,blockquote:0,body:305,br:2,button:0,canvas:0,caption:0,center:0,cite:0,code:0,col:2,colgroup:1,command:2,data:0,datalist:0,dd:1,del:0,details:0,dfn:0,dialog:272,dir:0,div:0,dl:0,dt:1,em:0,fieldset:0,figcaption:0,figure:0,font:0,footer:0,form:0,frame:274,frameset:272,h1:0,h2:0,h3:0,h4:0,h5:0,h6:0,head:305,header:0,hgroup:0,hr:2,html:305,i:0,iframe:4,img:2,input:2,ins:0,isindex:274,
kbd:0,keygen:274,label:0,legend:0,li:1,link:274,map:0,mark:0,menu:0,meta:274,meter:0,nav:0,nobr:0,noembed:276,noframes:276,noscript:276,object:272,ol:0,optgroup:0,option:1,output:0,p:1,param:274,pre:0,progress:0,q:0,s:0,samp:0,script:84,section:0,select:0,small:0,source:2,span:0,strike:0,strong:0,style:148,sub:0,summary:0,sup:0,table:0,tbody:1,td:1,textarea:8,tfoot:1,th:1,thead:1,time:0,title:280,tr:1,track:2,tt:0,u:0,ul:0,"var":0,video:0,wbr:2};M.ELEMENTS=M.e;
M.O={a:"HTMLAnchorElement",abbr:"HTMLElement",acronym:"HTMLElement",address:"HTMLElement",applet:"HTMLAppletElement",area:"HTMLAreaElement",article:"HTMLElement",aside:"HTMLElement",audio:"HTMLAudioElement",b:"HTMLElement",base:"HTMLBaseElement",basefont:"HTMLBaseFontElement",bdi:"HTMLElement",bdo:"HTMLElement",big:"HTMLElement",blockquote:"HTMLQuoteElement",body:"HTMLBodyElement",br:"HTMLBRElement",button:"HTMLButtonElement",canvas:"HTMLCanvasElement",caption:"HTMLTableCaptionElement",center:"HTMLElement",
cite:"HTMLElement",code:"HTMLElement",col:"HTMLTableColElement",colgroup:"HTMLTableColElement",command:"HTMLCommandElement",data:"HTMLElement",datalist:"HTMLDataListElement",dd:"HTMLElement",del:"HTMLModElement",details:"HTMLDetailsElement",dfn:"HTMLElement",dialog:"HTMLDialogElement",dir:"HTMLDirectoryElement",div:"HTMLDivElement",dl:"HTMLDListElement",dt:"HTMLElement",em:"HTMLElement",fieldset:"HTMLFieldSetElement",figcaption:"HTMLElement",figure:"HTMLElement",font:"HTMLFontElement",footer:"HTMLElement",
form:"HTMLFormElement",frame:"HTMLFrameElement",frameset:"HTMLFrameSetElement",h1:"HTMLHeadingElement",h2:"HTMLHeadingElement",h3:"HTMLHeadingElement",h4:"HTMLHeadingElement",h5:"HTMLHeadingElement",h6:"HTMLHeadingElement",head:"HTMLHeadElement",header:"HTMLElement",hgroup:"HTMLElement",hr:"HTMLHRElement",html:"HTMLHtmlElement",i:"HTMLElement",iframe:"HTMLIFrameElement",img:"HTMLImageElement",input:"HTMLInputElement",ins:"HTMLModElement",isindex:"HTMLUnknownElement",kbd:"HTMLElement",keygen:"HTMLKeygenElement",
label:"HTMLLabelElement",legend:"HTMLLegendElement",li:"HTMLLIElement",link:"HTMLLinkElement",map:"HTMLMapElement",mark:"HTMLElement",menu:"HTMLMenuElement",meta:"HTMLMetaElement",meter:"HTMLMeterElement",nav:"HTMLElement",nobr:"HTMLElement",noembed:"HTMLElement",noframes:"HTMLElement",noscript:"HTMLElement",object:"HTMLObjectElement",ol:"HTMLOListElement",optgroup:"HTMLOptGroupElement",option:"HTMLOptionElement",output:"HTMLOutputElement",p:"HTMLParagraphElement",param:"HTMLParamElement",pre:"HTMLPreElement",
progress:"HTMLProgressElement",q:"HTMLQuoteElement",s:"HTMLElement",samp:"HTMLElement",script:"HTMLScriptElement",section:"HTMLElement",select:"HTMLSelectElement",small:"HTMLElement",source:"HTMLSourceElement",span:"HTMLSpanElement",strike:"HTMLElement",strong:"HTMLElement",style:"HTMLStyleElement",sub:"HTMLElement",summary:"HTMLElement",sup:"HTMLElement",table:"HTMLTableElement",tbody:"HTMLTableSectionElement",td:"HTMLTableDataCellElement",textarea:"HTMLTextAreaElement",tfoot:"HTMLTableSectionElement",
th:"HTMLTableHeaderCellElement",thead:"HTMLTableSectionElement",time:"HTMLTimeElement",title:"HTMLTitleElement",tr:"HTMLTableRowElement",track:"HTMLTrackElement",tt:"HTMLElement",u:"HTMLElement",ul:"HTMLUListElement","var":"HTMLElement",video:"HTMLVideoElement",wbr:"HTMLElement"};M.ELEMENT_DOM_INTERFACES=M.O;M.N={NOT_LOADED:0,SAME_DOCUMENT:1,NEW_DOCUMENT:2};M.ueffects=M.N;
M.J={"a::href":2,"area::href":2,"audio::src":1,"blockquote::cite":0,"command::icon":1,"del::cite":0,"form::action":2,"img::src":1,"input::src":1,"ins::cite":0,"q::cite":0,"video::poster":1,"video::src":1};M.URIEFFECTS=M.J;M.L={UNSANDBOXED:2,SANDBOXED:1,DATA:0};M.ltypes=M.L;M.I={"a::href":2,"area::href":2,"audio::src":2,"blockquote::cite":2,"command::icon":1,"del::cite":2,"form::action":2,"img::src":1,"input::src":1,"ins::cite":2,"q::cite":2,"video::poster":1,"video::src":2};M.LOADERTYPES=M.I;
"undefined"!==typeof window&&(window.html4=M);var Q=function(e){function x(d){if(D.hasOwnProperty(d))return D[d];var a=d.match(R);return a?String.fromCharCode(parseInt(a[1],10)):(a=d.match(S))?String.fromCharCode(parseInt(a[1],16)):E&&T.test(d)?(E.innerHTML="&"+d+";",a=E.textContent,D[d]=a):"&"+d+";"}function y(d,a){return x(a)}function u(d){return d.replace(U,y)}function v(d){return(""+d).replace(N,"&amp;").replace(F,"&lt;").replace(G,"&gt;").replace(V,"&#34;")}function b(d){return(""+d).replace(N,"&amp;").replace(F,"&lt;").replace(G,"&gt;")}
function p(d){return d.replace(W,"&amp;$1").replace(F,"&lt;").replace(G,"&gt;")}function z(d){var a={z:d.z||d.cdata,A:d.A||d.comment,B:d.B||d.endDoc,t:d.t||d.endTag,d:d.d||d.pcdata,F:d.F||d.rcdata,H:d.H||d.startDoc,v:d.v||d.startTag};return function(d,e){var f;var r=/(<\/|<\!--|<[!?]|[&<>])/g;f=d+"";if(X)f=f.split(r);else{for(var k=[],i=0,b;(b=r.exec(f))!==l;)k.push(f.substring(i,b.index)),k.push(b[0]),i=b.index+b[0].length;k.push(f.substring(i));f=k}w(a,f,0,{r:!1,C:!1},e)}}function j(d,a,c,e,f){return function(){w(d,
a,c,e,f)}}function w(d,a,c,h,f){try{d.H&&0==c&&d.H(f);for(var r,k,i,b=a.length;c<b;){var n=a[c++],g=a[c];switch(n){case "&":Y.test(g)?(d.d&&d.d("&"+g,f,t,j(d,a,c,h,f)),c++):d.d&&d.d("&amp;",f,t,j(d,a,c,h,f));break;case "</":if(r=/^([-\w:]+)[^\'\"]*/.exec(g))if(r[0].length===g.length&&">"===a[c+1])c+=2,i=r[1].toLowerCase(),d.t&&d.t(i,f,t,j(d,a,c,h,f));else{var m=a,o=c,p=d,s=f,u=t,x=h,v=C(m,o);v?(p.t&&p.t(v.name,s,u,j(p,m,o,x,s)),c=v.next):c=m.length}else d.d&&d.d("&lt;/",f,t,j(d,a,c,h,f));break;case "<":if(r=
/^([-\w:]+)\s*\/?/.exec(g))if(r[0].length===g.length&&">"===a[c+1]){c+=2;i=r[1].toLowerCase();d.v&&d.v(i,[],f,t,j(d,a,c,h,f));var w=e.e[i];w&O&&(c=B(a,{name:i,next:c,c:w},d,f,t,h))}else{var m=a,o=d,p=f,s=t,u=h,A=C(m,c);A?(o.v&&o.v(A.name,A.P,p,s,j(o,m,A.next,u,p)),c=A.c&O?B(m,A,o,p,s,u):A.next):c=m.length}else d.d&&d.d("&lt;",f,t,j(d,a,c,h,f));break;case "<\!--":if(!h.C){for(k=c+1;k<b&&!(">"===a[k]&&/--$/.test(a[k-1]));k++);if(k<b){if(d.A){var y=a.slice(c,k).join("");d.A(y.substr(0,y.length-2),f,
t,j(d,a,k+1,h,f))}c=k+1}else h.C=!0}h.C&&d.d&&d.d("&lt;!--",f,t,j(d,a,c,h,f));break;case "<!":if(/^\w/.test(g)){if(!h.r){for(k=c+1;k<b&&">"!==a[k];k++);k<b?c=k+1:h.r=!0}h.r&&d.d&&d.d("&lt;!",f,t,j(d,a,c,h,f))}else d.d&&d.d("&lt;!",f,t,j(d,a,c,h,f));break;case "<?":if(!h.r){for(k=c+1;k<b&&">"!==a[k];k++);k<b?c=k+1:h.r=!0}h.r&&d.d&&d.d("&lt;?",f,t,j(d,a,c,h,f));break;case ">":d.d&&d.d("&gt;",f,t,j(d,a,c,h,f));break;case "":break;default:d.d&&d.d(n,f,t,j(d,a,c,h,f))}}d.B&&d.B(f)}catch(z){if(z!==t)throw z;
}}function B(a,b,c,h,f,r){var k=a.length;H.hasOwnProperty(b.name)||(H[b.name]=RegExp("^"+b.name+"(?:[\\s\\/]|$)","i"));for(var i=H[b.name],g=b.next,n=b.next+1;n<k&&!("</"===a[n-1]&&i.test(a[n]));n++);n<k&&(n-=1);k=a.slice(g,n).join("");if(b.c&e.c.CDATA)c.z&&c.z(k,h,f,j(c,a,n,r,h));else if(b.c&e.c.RCDATA)c.F&&c.F(p(k),h,f,j(c,a,n,r,h));else throw Error("bug");return n}function C(a,b){var c=/^([-\w:]+)/.exec(a[b]),h={};h.name=c[1].toLowerCase();h.c=e.e[h.name];for(var f=a[b].substr(c[0].length),r=b+
1,k=a.length;r<k&&">"!==a[r];r++)f+=a[r];if(!(k<=r)){for(var i=[];""!==f;)if(c=Z.exec(f))if(c[4]&&!c[5]||c[6]&&!c[7]){for(var c=c[4]||c[6],g=!1,f=[f,a[r++]];r<k;r++){if(g){if(">"===a[r])break}else 0<=a[r].indexOf(c)&&(g=!0);f.push(a[r])}if(k<=r)break;f=f.join("")}else{var g=c[1].toLowerCase(),n;if(c[2]){n=c[3];var j=n.charCodeAt(0);if(34===j||39===j)n=n.substr(1,n.length-2);n=u(n.replace($,""))}else n="";i.push(g,n);f=f.substr(c[0].length)}else f=f.replace(/^[\s\S][^a-z\s]*/,"");h.P=i;h.next=r+1;
return h}}function a(a){function g(){var a=h[h.length-1];return a?e.e[a.m]:0}function c(a){var d=h[h.length-1];if(!d)throw Error("shouldn't happen: CDATA/RCDATA context without any start tag");return a.replace(RegExp("</"+d.m+"(?=[^A-Za-z])>?","i"),"</>")}var h,f;return z({startDoc:function(){h=[];f=!1},startTag:function(c,b,i){if(!f&&e.e.hasOwnProperty(c)){var g=e.e[c];if(!(g&e.c.FOLDABLE)){var n=a(c,b);if(n){if("object"!==typeof n)throw Error("tagPolicy did not return object (old API?)");if("attribs"in
n)b=n.attribs;else throw Error("tagPolicy gave no attribs");var j;"tagName"in n?(j=n.tagName,n=e.e[j]):(j=c,n=g);if(g&e.c.OPTIONAL_ENDTAG){var m=h[h.length-1];m&&m.D===c&&(m.m!==j||c!==j)&&i.push("</",m.m,">")}g&e.c.EMPTY||h.push({D:c,m:j});i.push("<",j);c=0;for(m=b.length;c<m;c+=2){var o=b[c],p=b[c+1];p!==l&&void 0!==p&&i.push(" ",o,'="',v(p),'"')}i.push(">");g&e.c.EMPTY&&!(n&e.c.EMPTY)&&i.push("</",j,">")}else f=!(g&e.c.EMPTY)}}},endTag:function(a,d){if(f)f=!1;else if(e.e.hasOwnProperty(a)){var c=
e.e[a];if(!(c&(e.c.EMPTY|e.c.FOLDABLE))){if(c&e.c.OPTIONAL_ENDTAG)for(c=h.length;0<=--c;){var b=h[c].D;if(b===a)break;if(!(e.e[b]&e.c.OPTIONAL_ENDTAG))return}else for(c=h.length;0<=--c&&h[c].D!==a;);if(!(0>c)){for(b=h.length;--b>c;){var g=h[b].m;e.e[g]&e.c.OPTIONAL_ENDTAG||d.push("</",g,">")}c<h.length&&(a=h[c].m);h.length=c;d.push("</",a,">")}}}},pcdata:function(a,d){f||(g()&(e.c.RCDATA|e.c.CDATA)?d.push(c(a)):d.push(a))},rcdata:function(a,d){f||(g()&(e.c.RCDATA|e.c.CDATA)?d.push(c(a)):d.push(a))},
cdata:function(a,d){f||(g()&e.c.CDATA?d.push(c(a)):d.push(b(a)))},endDoc:function(a){for(;h.length;h.length--)a.push("</",h[h.length-1].m,">")}})}function J(a,b,c,e,f){if(!f)return l;try{var g=q.parse(""+a);if(g&&(!g.K()||aa.test(g.U()))){var k=f(g,b,c,e);return k?k.toString():l}}catch(i){}return l}function m(a,b,c,e,f){c||a(b+" removed",{Q:"removed",tagName:b});if(e!==f){var g="changed";e&&!f?g="removed":!e&&f&&(g="added");a(b+"."+c+" "+g,{Q:g,tagName:b,ia:c,oldValue:e,newValue:f})}}function K(a,
b,c){b=b+"::"+c;if(a.hasOwnProperty(b))return a[b];b="*::"+c;if(a.hasOwnProperty(b))return a[b]}function s(a,b,c,h,f){for(var g=0;g<b.length;g+=2){var k=b[g],i=b[g+1],j=i,n=l,o;if((o=a+"::"+k,e.w.hasOwnProperty(o))||(o="*::"+k,e.w.hasOwnProperty(o)))n=e.w[o];if(n!==l)switch(n){case e.f.NONE:break;case e.f.SCRIPT:i=l;f&&m(f,a,k,j,i);break;case e.f.STYLE:if("undefined"===typeof I){i=l;f&&m(f,a,k,j,i);break}var p=[];I(i,{declaration:function(a,b){var d=a.toLowerCase();P(d,b,c?function(a){return J(a,
e.N.ga,e.L.ha,{TYPE:"CSS",CSS_PROP:d},c)}:l);b.length&&p.push(d+": "+b.join(" "))}});i=0<p.length?p.join(" ; "):l;f&&m(f,a,k,j,i);break;case e.f.ID:case e.f.IDREF:case e.f.IDREFS:case e.f.GLOBAL_NAME:case e.f.LOCAL_NAME:case e.f.CLASSES:i=h?h(i):i;f&&m(f,a,k,j,i);break;case e.f.URI:i=J(i,K(e.J,a,k),K(e.I,a,k),{TYPE:"MARKUP",XML_ATTR:k,XML_TAG:a},c);f&&m(f,a,k,j,i);break;case e.f.URI_FRAGMENT:i&&"#"===i.charAt(0)?(i=i.substring(1),i=h?h(i):i,i!==l&&void 0!==i&&(i="#"+i)):i=l;f&&m(f,a,k,j,i);break;
default:i=l,f&&m(f,a,k,j,i)}else i=l,f&&m(f,a,k,j,i);b[g+1]=i}return b}function g(a,b,c){return function(g,f){if(e.e[g]&e.c.UNSAFE)c&&m(c,g,void 0,void 0,void 0);else return{attribs:s(g,f,a,b,c)}}}function L(b,e){var c=[];a(e)(b,c);return c.join("")}var I,P;"undefined"!==typeof window&&(I=window.parseCssDeclarations,P=window.sanitizeCssProperty);var D={lt:"<",LT:"<",gt:">",GT:">",amp:"&",AMP:"&",quot:'"',apos:"'",nbsp:"\u00a0"},R=/^#(\d+)$/,S=/^#x([0-9A-Fa-f]+)$/,T=/^[A-Za-z][A-Za-z0-9]+$/,E="undefined"!==
typeof window&&window.document?window.document.createElement("textarea"):l,$=/\0/g,U=/&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,Y=/^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,N=/&/g,W=/&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,F=/[<]/g,G=/>/g,V=/\"/g,Z=/^\s*([-.:\w]+)(?:\s*(=)\s*((")[^"]*("|$)|(')[^']*('|$)|(?=[a-z][-\w]*\s*=)|[^"'\s]*))?/i,X=3==="a,b".split(/(,)/).length,O=e.c.CDATA|e.c.RCDATA,t={},H={},aa=/^(?:https?|geo|mailto|sms|tel)$/i,o={};o.ka=o.escapeAttrib=v;o.la=o.escapePcdata=b;o.ma=o.makeHtmlSanitizer=
a;o.na=o.makeSaxParser=z;o.oa=o.makeTagPolicy=g;o.qa=o.normalizeRCData=p;o.ra=o.sanitize=function(a,b,c,e){return L(a,g(b,c,e))};o.sa=o.sanitizeAttribs=s;o.ta=o.sanitizeWithPolicy=L;o.ua=o.unescapeEntities=u;return o}(M),ba=Q.sanitize;"undefined"!==typeof window&&(window.html=Q,window.html_sanitize=ba);})();
;

/* [end] feature=core */

/* [start] feature=gapi.util-globals */
gapi.util=window.gapi&&window.gapi.util||{};
;

/* [end] feature=gapi.util-globals */

/* [start] feature=gapi.util.getOrigin */

;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=rpc */
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var e,d;
var c=true;
function b(h,j,g){if(typeof window.addEventListener!="undefined"){window.addEventListener(h,j,g)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+h,j)
}}if(h==="message"){window.___jsl=window.___jsl||{};
var i=window.___jsl;
i.RPMQ=i.RPMQ||[];
i.RPMQ.push(j)
}}function a(h,i,g){if(window.removeEventListener){window.removeEventListener(h,i,g)
}else{if(window.detachEvent){window.detachEvent("on"+h,i)
}}}function f(h){var i=gadgets.json.parse(h.data);
if(!i||!i.f){return
}gadgets.debug("gadgets.rpc.receive("+window.name+"): "+h.data);
var g=gadgets.rpc.getTargetOrigin(i.f);
if(c&&(typeof h.origin!=="undefined"?h.origin!==g:h.domain!==/^.+:\/\/([^:]+).*/.exec(g)[1])){gadgets.error("Invalid rpc message origin. "+g+" vs "+(h.origin||""));
return
}e(i,h.origin)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(h,i){function g(k){var j=k&&k.rpc||{};
if(String(j.disableForceSecure)==="true"){c=false
}}gadgets.config.register("rpc",null,g);
e=h;
d=i;
b("message",f,false);
d("..",true);
return true
},setup:function(h,g){d(h,true);
return true
},call:function(h,k,j){var g=gadgets.rpc.getTargetOrigin(h);
var i=gadgets.rpc._getTargetWin(h);
if(g){window.setTimeout(function(){var l=gadgets.json.stringify(j);
gadgets.debug("gadgets.rpc.send("+window.name+"): "+l);
i.postMessage(l,g)
},0)
}else{if(h!=".."){gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}}return true
}}
}()
};;

       gadgets.rpctx.ifpc = gadgets.rpctx.wpm;
    ;
if(!window.gadgets||!window.gadgets["rpc"]){gadgets.rpc=function(){var M="__cb";
var S="";
var T="__ack";
var f=500;
var G=10;
var b="|";
var u="callback";
var g="origin";
var r="referer";
var s="legacy__";
var q={};
var W={};
var D={};
var B={};
var z=0;
var l={};
var m={};
var d={};
var n={};
var E={};
var e=null;
var p=null;
var A=(window.top!==window.self);
var v=window.name;
var J=function(){};
var P=0;
var Y=1;
var a=2;
var x=window.console;
var V=x&&x.log&&function(ae){x.log(ae)
}||function(){};
var R=(function(){function ae(af){return function(){V(af+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:ae("init"),setup:ae("setup"),call:ae("call")}
})();
if(gadgets.util){d=gadgets.util.getUrlParameters()
}function K(){if(d.rpctx=="flash"){return gadgets.rpctx.flash
}if(d.rpctx=="rmr"){return gadgets.rpctx.rmr
}var ae=typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?(gadgets.rpctx.flash?gadgets.rpctx.flash:(gadgets.rpctx.nix?gadgets.rpctx.nix:gadgets.rpctx.ifpc)):navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc;
if(!ae){ae=R
}return ae
}function k(aj,ah){if(n[aj]){return
}var af=H;
if(!ah){af=R
}n[aj]=af;
var ae=E[aj]||[];
for(var ag=0;
ag<ae.length;
++ag){var ai=ae[ag];
ai.t=F(aj);
af.call(aj,ai.f,ai)
}E[aj]=[]
}var I=false,U=false;
function N(){if(U){return
}function ae(){I=true
}if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",ae,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onunload",ae)
}}U=true
}function j(ae,ai,af,ah,ag){if(!B[ai]||B[ai]!==af){gadgets.error("Invalid gadgets.rpc token. "+B[ai]+" vs "+af);
J(ai,a)
}ag.onunload=function(){if(m[ai]&&!I){J(ai,Y);
gadgets.rpc.removeReceiver(ai)
}};
N();
ah=gadgets.json.parse(decodeURIComponent(ah))
}function Z(ak,af){if(ak&&typeof ak.s==="string"&&typeof ak.f==="string"&&ak.a instanceof Array){if(B[ak.f]){if(B[ak.f]!==ak.t){gadgets.error("Invalid gadgets.rpc token. "+B[ak.f]+" vs "+ak.t);
J(ak.f,a)
}}if(ak.s===T){window.setTimeout(function(){k(ak.f,true)
},0);
return
}if(ak.c){ak[u]=function(al){var am=ak.g?s:"";
gadgets.rpc.call(ak.f,am+M,null,ak.c,al)
}
}if(af){var ag=t(af);
ak[g]=af;
var ah=ak.r,aj;
try{aj=t(ah)
}catch(ai){}if(!ah||aj!=ag){ah=af
}ak[r]=ah
}var ae=(q[ak.s]||q[S]).apply(ak,ak.a);
if(ak.c&&typeof ae!=="undefined"){gadgets.rpc.call(ak.f,M,null,ak.c,ae)
}}}function t(ag){if(!ag){return""
}ag=((ag.split("#"))[0].split("?"))[0];
ag=ag.toLowerCase();
if(ag.indexOf("//")==0){ag=window.location.protocol+ag
}if(ag.indexOf("://")==-1){ag=window.location.protocol+"//"+ag
}var ah=ag.substring(ag.indexOf("://")+3);
var ae=ah.indexOf("/");
if(ae!=-1){ah=ah.substring(0,ae)
}var aj=ag.substring(0,ag.indexOf("://"));
if(aj!=="http"&&aj!=="https"&&aj!=="chrome-extension"&&aj!=="file"){throw Error("Invalid URI scheme in origin")
}var ai="";
var ak=ah.indexOf(":");
if(ak!=-1){var af=ah.substring(ak+1);
ah=ah.substring(0,ak);
if((aj==="http"&&af!=="80")||(aj==="https"&&af!=="443")){ai=":"+af
}}return aj+"://"+ah+ai
}function C(af,ae){return"/"+af+(ae?b+ae:"")
}function y(ah){if(ah.charAt(0)=="/"){var af=ah.indexOf(b);
var ag=af>0?ah.substring(1,af):ah.substring(1);
var ae=af>0?ah.substring(af+1):null;
return{id:ag,origin:ae}
}else{return null
}}function ad(ag){if(typeof ag==="undefined"||ag===".."){return window.parent
}var af=y(ag);
if(af){return window.top.frames[af.id]
}ag=String(ag);
var ae=window.frames[ag];
if(ae){return ae
}ae=document.getElementById(ag);
if(ae&&ae.contentWindow){return ae.contentWindow
}return null
}function L(ah){var ag=null;
var ae=O(ah);
if(ae){ag=ae
}else{var af=y(ah);
if(af){ag=af.origin
}else{if(ah==".."){ag=d.parent
}else{ag=document.getElementById(ah).src
}}}return t(ag)
}var H=K();
q[S]=function(){V("Unknown RPC service: "+this["s"])
};
q[M]=function(af,ae){var ag=l[af];
if(ag){delete l[af];
ag.call(this,ae)
}};
function X(ag,ae){if(m[ag]===true){return
}if(typeof m[ag]==="undefined"){m[ag]=0
}var af=ad(ag);
if(ag===".."||af!=null){if(H.setup(ag,ae)===true){m[ag]=true;
return
}}if(m[ag]!==true&&m[ag]++<G){window.setTimeout(function(){X(ag,ae)
},f)
}else{n[ag]=R;
m[ag]=true
}}function O(af){var ae=W[af];
if(ae&&ae.substring(0,1)==="/"){if(ae.substring(1,2)==="/"){ae=document.location.protocol+ae
}else{ae=document.location.protocol+"//"+document.location.host+ae
}}return ae
}function ac(af,ae,ag){if(ae&&!/http(s)?:\/\/.+/.test(ae)){if(ae.indexOf("//")==0){ae=window.location.protocol+ae
}else{if(ae.charAt(0)=="/"){ae=window.location.protocol+"//"+window.location.host+ae
}else{if(ae.indexOf("://")==-1){ae=window.location.protocol+"//"+ae
}}}}W[af]=ae;
if(typeof ag!=="undefined"){D[af]=!!ag
}}function F(ae){return B[ae]
}function c(ae,af){af=af||"";
B[ae]=String(af);
X(ae,af)
}function ab(af){var ae=af.passReferrer||"";
var ag=ae.split(":",2);
e=ag[0]||"none";
p=ag[1]||"origin"
}function aa(ae){if(Q(ae)){H=gadgets.rpctx.ifpc||R;
H.init(Z,k)
}}function Q(ae){return String(ae.useLegacyProtocol)==="true"
}function h(af,ae){function ag(aj){var ai=aj&&aj.rpc||{};
ab(ai);
var ah=ai.parentRelayUrl||"";
ah=t(d.parent||ae)+ah;
ac("..",ah,Q(ai));
aa(ai);
c("..",af)
}if(!d.parent&&ae){ag({});
return
}gadgets.config.register("rpc",null,ag)
}function o(af,aj,al){var ai=null;
if(af.charAt(0)!="/"){if(!gadgets.util){return
}ai=document.getElementById(af);
if(!ai){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+af+", element not found.")
}}var ae=ai&&ai.src;
var ag=aj||gadgets.rpc.getOrigin(ae);
ac(af,ag);
var ak=gadgets.util.getUrlParameters(ae);
var ah=al||ak.rpctoken;
c(af,ah)
}function i(ae,ag,ah){if(ae===".."){var af=ah||d.rpctoken||d.ifpctok||"";
h(af,ag)
}else{o(ae,ag,ah)
}}function w(ag){if(e==="bidir"||(e==="c2p"&&ag==="..")||(e==="p2c"&&ag!=="..")){var af=window.location.href;
var ah="?";
if(p==="query"){ah="#"
}else{if(p==="hash"){return af
}}var ae=af.lastIndexOf(ah);
ae=ae===-1?af.length:ae;
return af.substring(0,ae)
}return null
}return{config:function(ae){if(typeof ae.securityCallback==="function"){J=ae.securityCallback
}},register:function(af,ae){if(af===M||af===T){throw new Error("Cannot overwrite callback/ack service")
}if(af===S){throw new Error("Cannot overwrite default service: use registerDefault")
}q[af]=ae
},unregister:function(ae){if(ae===M||ae===T){throw new Error("Cannot delete callback/ack service")
}if(ae===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete q[ae]
},registerDefault:function(ae){q[S]=ae
},unregisterDefault:function(){delete q[S]
},forceParentVerifiable:function(){if(!H.isParentVerifiable()){H=gadgets.rpctx.ifpc
}},call:function(ae,ag,al,aj){ae=ae||"..";
var ak="..";
if(ae===".."){ak=v
}else{if(ae.charAt(0)=="/"){ak=C(v,gadgets.rpc.getOrigin(window.location.href))
}}++z;
if(al){l[z]=al
}var ai={s:ag,f:ak,c:al?z:0,a:Array.prototype.slice.call(arguments,3),t:B[ae],l:!!D[ae]};
var af=w(ae);
if(af){ai.r=af
}if(ae!==".."&&y(ae)==null&&!document.getElementById(ae)){return
}var ah=n[ae];
if(!ah&&y(ae)!==null){ah=H
}if(ag.indexOf(s)===0){ah=H;
ai.s=ag.substring(s.length);
ai.c=ai.c?ai.c:z
}ai.g=true;
ai.r=ak;
if(!ah){if(!E[ae]){E[ae]=[ai]
}else{E[ae].push(ai)
}return
}if(D[ae]){ah=gadgets.rpctx.ifpc
}if(ah.call(ae,ak,ai)===false){n[ae]=R;
H.call(ae,ak,ai)
}},getRelayUrl:O,setRelayUrl:ac,setAuthToken:c,setupReceiver:i,getAuthToken:F,removeReceiver:function(ae){delete W[ae];
delete D[ae];
delete B[ae];
delete m[ae];
delete n[ae]
},getRelayChannel:function(){return H.getCode()
},receive:function(af,ae){if(af.length>4){H._receiveMessage(af,Z)
}else{j.apply(null,af.concat(ae))
}},receiveSameDomain:function(ae){ae.a=Array.prototype.slice.call(ae.a);
window.setTimeout(function(){Z(ae)
},0)
},getOrigin:t,getTargetOrigin:L,init:function(){if(H.init(Z,k)===false){H=R
}if(A){i("..")
}else{gadgets.config.register("rpc",null,function(af){var ae=af.rpc||{};
ab(ae);
aa(ae)
})
}},_getTargetWin:ad,_parseSiblingId:y,ACK:T,RPC_ID:v||"..",SEC_ERROR_LOAD_TIMEOUT:P,SEC_ERROR_FRAME_PHISH:Y,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
}else{if(typeof gadgets.rpc=="undefined"||!gadgets.rpc){gadgets.rpc=window.gadgets["rpc"];
gadgets.rpc.config=gadgets.rpc.config;
gadgets.rpc.register=gadgets.rpc.register;
gadgets.rpc.unregister=gadgets.rpc.unregister;
gadgets.rpc.registerDefault=gadgets.rpc.registerDefault;
gadgets.rpc.unregisterDefault=gadgets.rpc.unregisterDefault;
gadgets.rpc.forceParentVerifiable=gadgets.rpc.forceParentVerifiable;
gadgets.rpc.call=gadgets.rpc.call;
gadgets.rpc.getRelayUrl=gadgets.rpc.getRelayUrl;
gadgets.rpc.setRelayUrl=gadgets.rpc.setRelayUrl;
gadgets.rpc.setAuthToken=gadgets.rpc.setAuthToken;
gadgets.rpc.setupReceiver=gadgets.rpc.setupReceiver;
gadgets.rpc.getAuthToken=gadgets.rpc.getAuthToken;
gadgets.rpc.removeReceiver=gadgets.rpc.removeReceiver;
gadgets.rpc.getRelayChannel=gadgets.rpc.getRelayChannel;
gadgets.rpc.receive=gadgets.rpc.receive;
gadgets.rpc.receiveSameDomain=gadgets.rpc.receiveSameDomain;
gadgets.rpc.getOrigin=gadgets.rpc.getOrigin;
gadgets.rpc.getTargetOrigin=gadgets.rpc.getTargetOrigin;
gadgets.rpc._getTargetWin=gadgets.rpc._getTargetWin;
gadgets.rpc._parseSiblingId=gadgets.rpc._parseSiblingId
}};;

/* [end] feature=rpc */

/* [start] feature=config.min */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return $jscomp.createTemplateTagFirstArgWithRaw(a,a)};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a};
$jscomp.checkStringArgs=function(a,b,d){if(a==null)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return a+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.INSTRUMENT_ASYNC_CONTEXT=!0;$jscomp.defineProperty=$jscomp.ASSUME_ES5||typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,d){if(a==Array.prototype||a==Object.prototype)return a;a[b]=d.value;return a};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var d=a[b];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE=typeof Symbol==="function"&&typeof Symbol("x")==="symbol";$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.polyfill=function(a,b,d,c){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,d,c):$jscomp.polyfillUnisolated(a,b,d,c))};$jscomp.polyfillUnisolated=function(a,b){var d=$jscomp.global;a=a.split(".");for(var c=0;c<a.length-1;c++){var e=a[c];if(!(e in d))return;d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&b!=null&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,d){var c=a.split("."),e=c.length===1;a=c[0];a=!e&&a in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<c.length-1;f++){var g=c[f];if(!(g in a))return;a=a[g]}c=c[c.length-1];d=$jscomp.IS_SYMBOL_NATIVE&&d==="es6"?a[c]:null;b=b(d);b!=null&&(e?$jscomp.defineProperty($jscomp.polyfills,c,{configurable:!0,writable:!0,value:b}):b!==d&&($jscomp.propertyToPolyfillSymbol[c]===void 0&&(e=Math.random()*1E9>>>0,$jscomp.propertyToPolyfillSymbol[c]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(c):$jscomp.POLYFILL_PREFIX+e+"$"+c),e=$jscomp.propertyToPolyfillSymbol[c],$jscomp.defineProperty(a,e,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:a=function(b,d){var c=$jscomp.checkStringArgs(this,b,"startsWith");b+="";var e=c.length,f=b.length;d=Math.max(0,Math.min(d|0,c.length));for(var g=0;g<f&&d<e;)if(c[d++]!=b[g++])return!1;return g>=f}},"es6","es3");
$jscomp.polyfill("String.prototype.endsWith",function(a){return a?a:a=function(b,d){var c=$jscomp.checkStringArgs(this,b,"endsWith");b+="";d===void 0&&(d=c.length);d=Math.max(0,Math.min(d|0,c.length));for(var e=b.length;e>0&&d>0;)if(c[--d]!=b[--e])return!1;return e<=0}},"es6","es3");gapi.config={};gapi.config.GLOBAL_CFG_KEY_="___gcfg";gapi.config.GLOBAL_CFG_USED_="___gu";gapi.config.JSL_KEY_="___jsl";gapi.config.GAPI_OWNED_CONFIG_KEY_="___goc";gapi.config.DEFAULT_CFG_KEY_="cd";
gapi.config.USER_CFG_KEY_="cu";gapi.config.INJECTED_CFG_KEY_="ci";gapi.config.SAVED_CFG_KEY_="cfg";gapi.config.ALL_SOURCES_KEY_="us";gapi.config.DEFERRED_METRICS_KEY_="dm";gapi.config.ATTR_PROCESSED_CONFIG_="gapi_processed";gapi.config.jsl_=function(){return window[gapi.config.JSL_KEY_]=window[gapi.config.JSL_KEY_]||{}};gapi.config.jslComponent_=function(a){var b=gapi.config.jsl_();b[a]=b[a]||[];return b[a]};
gapi.config.cfg_=function(a){var b=gapi.config.jsl_();b[gapi.config.SAVED_CFG_KEY_]=!a&&b[gapi.config.SAVED_CFG_KEY_]||{};return b[gapi.config.SAVED_CFG_KEY_]};gapi.config.isArray_=function(a){return typeof a==="object"&&/\[native code\]/.test(a.push)};
gapi.config.foldConfig_=function(a,b,d){if(b&&typeof b==="object")for(var c in b)!Object.prototype.hasOwnProperty.call(b,c)||d&&c===gapi.config.GAPI_OWNED_CONFIG_KEY_&&typeof b[c]==="undefined"||(a[c]&&b[c]&&typeof a[c]==="object"&&typeof b[c]==="object"&&!gapi.config.isArray_(a[c])&&!gapi.config.isArray_(b[c])?gapi.config.foldConfig_(a[c],b[c]):b[c]&&typeof b[c]==="object"?(a[c]=gapi.config.isArray_(b[c])?[]:{},gapi.config.foldConfig_(a[c],b[c])):a[c]=b[c])};
gapi.config.getSelfScriptTags_=function(){var a=document.getElementsByTagName("script")||[],b=[],d=[];d.push.apply(d,gapi.config.getAllSourceUrls_());for(var c=0;c<a.length;++c)for(var e=a[c],f=0;f<d.length;++f)e.src&&e.src.indexOf(d[f])==0&&b.push(e);b.length==0&&a.length>0&&a[a.length-1].src&&b.push(a[a.length-1]);return b};
gapi.config.appendInlineConfig_=function(){for(var a=gapi.config.jslComponent_(gapi.config.USER_CFG_KEY_),b=gapi.config.getSelfScriptTags_(),d=0;d<b.length;++d)if(!b[d].getAttribute(gapi.config.ATTR_PROCESSED_CONFIG_)){b[d].setAttribute(gapi.config.ATTR_PROCESSED_CONFIG_,!0);var c=gapi.config.getInnerText_(b[d]),e=b[d].nonce||b[d].getAttribute("nonce");(c=gapi.config.parseConfig_(c,e))&&a.push(c)}};gapi.config.getAllSourceUrls_=function(){return gapi.config.jslComponent_(gapi.config.ALL_SOURCES_KEY_)};
gapi.config.getInnerText_=function(a){if(a){var b=a.nodeType;return b==3||b==4?a.nodeValue:a.textContent||""}};
gapi.config.parseConfig_=function(a,b){if(a&&!/^\s+$/.test(a)){for(;a.charCodeAt(a.length-1)==0;)a=a.substring(0,a.length-1);var d=""+a,c=gapi.config.jslComponent_(gapi.config.DEFERRED_METRICS_KEY_);c.push(20);try{var e=window.JSON.parse(a)}catch(k){}if(typeof e==="object")return c.push(21),e;try{e=window.JSON.parse("{"+a+"}")}catch(k){}if(typeof e==="object")return c.push(22),e;var f=RegExp("([^\"',{}\\s]+?)\\s*:\\s*(.*?)[,}\\s]","g"),g=function(k,m,h){h=h.startsWith('"')?"%DOUBLE_QUOTE%"+h.substring(1):
h;h=h.endsWith('"')?h.slice(0,-1)+"%DOUBLE_QUOTE%":h;return"%DOUBLE_QUOTE%"+m+"%DOUBLE_QUOTE%:"+h};a=a.replace(f,g);a=a.replace(/\\'/g,"%SINGLE_QUOTE%");a=a.replace(/"/g,'\\"');a=a.replace(/'/g,'"');a=a.replace(/%SINGLE_QUOTE%/g,"'");a=a.replace(/%DOUBLE_QUOTE%/g,'"');try{e=window.JSON.parse(a)}catch(k){}if(typeof e==="object")return c.push(23),e;try{e=window.JSON.parse("{"+a+"}")}catch(k){}if(typeof e==="object")return c.push(24),e;a=document.getElementsByTagName("script")||[];var l;a.length>0&&
(l=a[0].nonce||a[0].getAttribute("nonce"));if(l&&l===b||!l&&gapi.config.isGoogleDomain_(window.location.hostname))if(e=gapi.config.evalConfigText_(d),c.push(25),typeof e==="object")return e;return{}}};
gapi.config.isGoogleDomain_=function(a){return a?/(^|\.)(2mdn|ampproject|android|appspot|blogger|blogspot|chrome|chromium|doubleclick|gcpnode|ggpht|gmail|google|google-analytics|googleadservices|googleapis|googleapis-cn|googleoptimize|googlers|googlesource|googlesyndication|googletagmanager|googletagservices|googleusercontent|googlevideo|gstatic|tiltbrush|waze|withgoogle|youtube|ytimg)(\.com?|\.net|\.org)?(\.[a-z][a-z]|\.cat)?$/.test(a):!1};
gapi.config.evalConfigText_=function(a){try{var b=(new Function("return ("+a+"\n)"))()}catch(d){}if(typeof b==="object")return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return b};
gapi.config.mergeFragment_=function(a,b){var d={};d[gapi.config.GAPI_OWNED_CONFIG_KEY_]=void 0;a.length&&a[a.length-1]&&Object.hasOwnProperty.call(a[a.length-1],gapi.config.GAPI_OWNED_CONFIG_KEY_)&&typeof a[a.length-1][gapi.config.GAPI_OWNED_CONFIG_KEY_]==="undefined"&&(d=a.pop());gapi.config.foldConfig_(d,b);a.push(d)};
gapi.config.mergeConfig_=function(a){gapi.config.cfg_(!0);var b=window[gapi.config.GLOBAL_CFG_KEY_],d=gapi.config.jslComponent_(gapi.config.USER_CFG_KEY_),c=window[gapi.config.GLOBAL_CFG_USED_];b&&b!==c&&(gapi.config.mergeFragment_(d,b),window[gapi.config.GLOBAL_CFG_USED_]=b);gapi.config.appendInlineConfig_();a&&gapi.config.mergeFragment_(d,a);c=gapi.config.jslComponent_(gapi.config.DEFAULT_CFG_KEY_);a=0;for(b=c.length;a<b;++a)gapi.config.foldConfig_(gapi.config.cfg_(),c[a],!0);c=gapi.config.jslComponent_(gapi.config.INJECTED_CFG_KEY_);
a=0;for(b=c.length;a<b;++a)gapi.config.foldConfig_(gapi.config.cfg_(),c[a],!0);a=0;for(b=d.length;a<b;++a)gapi.config.foldConfig_(gapi.config.cfg_(),d[a],!0)};gapi.config.get=function(a,b){var d=gapi.config.cfg_();if(!a)return d;a=a.split("/");for(var c=0,e=a.length;d&&typeof d==="object"&&c<e;++c)d=d[a[c]];return c===a.length&&d!==void 0?d:b};
gapi.config.update=function(a,b){var d;if(typeof a==="string"){var c=d={};a=a.split("/");for(var e=0,f=a.length;e<f-1;++e){var g={};c=c[a[e]]=g}c[a[e]]=b}else d=a;gapi.config.mergeConfig_(d)};gapi.config.init=function(){gapi.config.mergeConfig_()};gapi.config.legacyInit&&gapi.config.legacyInit();gapi.config.init();
;

/* [end] feature=config.min */

/* [start] feature=shindig.sha1 */
shindig.sha1=(function(){var d="0123456789ABCDEF";
var h=[];
var e=[];
var l=[];
var o=[];
o[0]=128;
for(var g=1;
g<64;
++g){o[g]=0
}var n;
var b;
function j(){h[0]=1732584193;
h[1]=4023233417;
h[2]=2562383102;
h[3]=271733878;
h[4]=3285377520;
n=0;
b=0
}function m(i,p){return((i<<p)|(i>>>(32-p)))&4294967295
}function a(p){var q=l;
for(var s=0;
s<64;
s+=4){var B=(p[s]<<24)|(p[s+1]<<16)|(p[s+2]<<8)|(p[s+3]);
q[s/4]=B
}for(var s=16;
s<80;
s++){q[s]=m(q[s-3]^q[s-8]^q[s-14]^q[s-16],1)
}var A=h[0];
var z=h[1];
var y=h[2];
var x=h[3];
var v=h[4];
var u,r;
for(var s=0;
s<80;
s++){if(s<40){if(s<20){u=x^(z&(y^x));
r=1518500249
}else{u=z^y^x;
r=1859775393
}}else{if(s<60){u=(z&y)|(x&(z|y));
r=2400959708
}else{u=z^y^x;
r=3395469782
}}var C=(m(A,5)+u+v+r+q[s])&4294967295;
v=x;
x=y;
y=m(z,30);
z=A;
A=C
}h[0]=(h[0]+A)&4294967295;
h[1]=(h[1]+z)&4294967295;
h[2]=(h[2]+y)&4294967295;
h[3]=(h[3]+x)&4294967295;
h[4]=(h[4]+v)&4294967295
}function f(q,s){if(typeof(q)==="string"){q=unescape(encodeURIComponent(q));
var p=[];
for(var t=0,r=q.length;
t<r;
++t){p.push(q.charCodeAt(t))
}q=p
}if(!s){s=q.length
}var u=0;
if(n==0){while(u+64<s){a(q.slice(u,u+64));
u+=64;
b+=64
}}while(u<s){e[n++]=q[u++];
b++;
if(n==64){n=0;
a(e);
while(u+64<s){a(q.slice(u,u+64));
u+=64;
b+=64
}}}}function k(){var s=[];
var r=b*8;
if(n<56){f(o,56-n)
}else{f(o,64-(n-56))
}for(var q=63;
q>=56;
q--){e[q]=r&255;
r>>>=8
}a(e);
var t=0;
for(var q=0;
q<5;
q++){for(var p=24;
p>=0;
p-=8){s[t++]=(h[q]>>p)&255
}}return s
}function c(){var p=k();
var r="";
for(var q=0;
q<p.length;
q++){r+=d.charAt(Math.floor(p[q]/16))+d.charAt(p[q]%16)
}return r
}j();
return{reset:j,update:f,digest:k,digestString:c}
});;

/* [end] feature=shindig.sha1 */

/* [start] feature=shindig.random */
shindig.random=(function(){var a=window.crypto;
if(a&&typeof a.getRandomValues=="function"){return function(){var k=new window.Uint32Array(1);
a.getRandomValues(k);
return Number("0."+k[0])
}
}var d=gapi.config.get("random/maxObserveMousemove");
if(d==null){d=-1
}var j=0;
var f=Math.random();
var e="0123456789ABCDEF";
var c=1;
var g=((screen.width*screen.width)+screen.height)*1000000;
var b=function(l){l=l||window.event;
var k=(l.screenX+l.clientX)<<16;
k+=(l.screenY+l.clientY);
k*=new Date().getTime()%1000000;
c=(c*k)%g;
if(d>0&&++j==d){gadgets.util.removeBrowserEvent(window,"mousemove",b,false)
}};
if(d!=0){gadgets.util.attachBrowserEvent(window,"mousemove",b,false)
}function i(k){var l=shindig.sha1();
l.update(k);
return l.digestString()
}var h=i(document.cookie+"|"+document.location+"|"+(new Date()).getTime()+"|"+f);
return function(){var k=c;
k+=parseInt(h.substr(0,20),16);
h=i(h);
return k/(g+Math.pow(16,20))
}
})();;

/* [end] feature=shindig.random */
(function(){var j=window['___jsl']=window['___jsl']||{};j['l']=(j['l']||[]).concat(['core','rpc','shindig.random','shindig.sha1']);})();(function(){var j=window['___jsl']=window['___jsl']||{};if(j['c']){j['c']();delete j['c'];}})();