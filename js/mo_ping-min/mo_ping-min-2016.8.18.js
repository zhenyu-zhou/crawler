// 采用swf监控链接请求时长等情况
;
(function() {
    var dom = crystal.dom;
    var wrap = dom.createElement({}, {}, 'div');
    document.body.appendChild(wrap);
    crystal.renderFodder({
        resource_url: "http://ra.gtimg.com/sc/monitor/monitor.swf?v=20130705",
        width: 1,
        height: 1
    }, wrap);
})();
//上报boss系统
;
(function() {

    var browsersniffer = function(uastr) {
        if (!uastr) return "unknown";
        var uastr = uastr.toLowerCase();
        var pos = -1;
        var ret = uastr.match(/(?:metasr.\d*|qqbrowser.\d*|maxthon.\d*|theworld|lbbrowser|firefox.\d*|opera.\d*|bidubrowser.\d*)/);
        if (ret !== null) {
            return ret[0].replace(" ", "").replace("/", "");
        }
        if ((pos = uastr.indexOf("chrome")) > -1) {
            return "chrome" + parseInt(uastr.substr(pos + 7, 4));
        } else if ((pos = uastr.indexOf("safari")) > -1) {
            return "safari";
        } else {
            var mpos = uastr.indexOf("msie");
            if (mpos > -1) {
                return "ie" + parseInt(uastr.substr(mpos + 5, 2));
            } else {
                var tpos = uastr.indexOf("trident");
                if (tpos > -1) {
                    var rvpos = uastr.indexOf("rv:");
                    if (rvpos > -1) {
                        return "ie" + parseInt(uastr.substr(rvpos + 3, 2));
                    }
                }
            }
        }
        if (uastr.indexOf('ipad') > -1) {
            return 'ipad';
        }
        if (uastr.indexOf('iphone') > -1) {
            return 'iphone';
        }
        return uastr;
    };

    var getBusinessPlatform = function(host, url) {
        var platformMapping = {
            'ra.gtimg.com': 'qqvideoclient',
            'm.v.qq.com': 'qqvideomobile',
            'v.qq.com': 'qqvideo',
            'mini2015.qq.com': 'qqaio'
        };
        var qqcoreList = ['news', 'ent', 'auto', 'edu', 'finance', 'money', 'stock', 'mil', 'sports', 'fashion', 'cul', 'tech', 'coral', 'www', 'data.auto', 'games', 'gu', 'astro.fashion', 'digi.tech', 'comic', 'nbachina'];
        var ret = '';
        if (platformMapping.hasOwnProperty(host)) {
            ret = platformMapping[host];
        }
        for (var i = 0; i < qqcoreList.length; i++) {
            if (host === qqcoreList[i] + '.qq.com') {
                ret = 'qqcore';
            }
        }
        if(typeof crystal_house !== 'undefined') {
            ret = 'qqhouse';
        }
        return ret;
    }
    // 浏览器宽度区分
    var getPw = function(i_width) {
        var ret = '-1';
        if(i_width>=1600) {
            ret = 1600;
        } else if (i_width>=1280) {
            ret = 1280;
        } else if (i_width>=1024) {
            ret = 1204;
        } else if (i_width>=700) {
            ret = 700;
        } else if (i_width>=500) {
            ret = 500;
        } else if (i_width>=400) {
            ret = 400;
        } else if (i_width>=300) {
            ret = 300;
        } else if (i_width>=200) {
            ret = 200;
        } else if (i_width>=100) {
            ret = 100;
        } else if(i_width>=50) {
            ret = 50;
        } else if(i_width<50) {
            ret = 1;
        }
        return ret;
    }
    // 浏览器高度区分
    var getPh = function(i_width) {
        var ret = '-1';
        if(i_width>=1040) {
            ret = 1040;
        } else if(i_width>=728) {
            ret = 728;
        } else if(i_width<728) {
            ret = 1;
        }
        return ret;
    }
    // 屏幕宽度区分
    var getPsw = function(i_width) {
        var ret = '-1';
        if(i_width>=1600) {
            ret = 1600;
        } else if(i_width>=1280) {
            ret = 1280;
        } else if(i_width<1280) {
            ret = 1;
        }
        return ret;
    }

    // 屏幕高度区分
    var getPsh = function(i_width) {
        var ret = '-1';
        if(i_width>=1040) {
            ret = 1040;
        } else if(i_width>=728) {
            ret = 728;
        } else if(i_width<728) {
            var ua = n
            ret = 1;
        }
        return ret;
    }

    // 只针对首页
    var getIndexSw = function(i_width) {
        var ret = '-1';
        if(i_width>=1600) {
            ret = 1600;
        } else if(i_width>=1280) {
            ret = 1280;
        } else if(i_width>=700) {
            ret = 700;
        } else if(i_width>=100) {
            ret = 100;
        } else if(i_width<100) {
            // ret = browsersniffer(navigator.userAgent);
            ret = 1;
        }
        return ret;
    }
    var g_btrace_BOSS = new Image(1, 1);
    var host = location.host || 'unknown';
    var url = location.href || 'unknown';
    var ref = '';
    try {
        ref = document.referrer || '';
        if (ref.length > 1000) {
            ref = ref.substring(0, 1000);
        }
        // ref = encodeURIComponent(document.referrer);
    } catch (e) {
        ref = 'noref';
    }
    // 网页宽高
    var pwidth = '',
        pheight = '';
    try {
        pwidth = window.innerWidth || document.body.offsetWidth;
        pheight = window.innerHeight || document.body.offsetHeight;
    } catch (e) {
        pwidth = '-1';
        pheight = '-1';
    }
    // 屏幕宽高
    var savailWidth = '';
    var savailHeight = '';
    try {
        savailWidth = screen.availWidth || -1;
        savailHeight = screen.availHeight || -1;
    } catch (e) {
        savailWidth = '-1';
        savailHeight = '-1';
    }

    var ua = navigator.userAgent || 'unknown';
    var browse = browsersniffer(ua);
    var cver = (crystal && crystal.version) || (crystal_house && crystal_house.version) || 'unknown';
    var plat = navigator.platform || 'unknown';
    var fver = crystal.getFlashVersion() || 'unknown';
    var bPlatform = getBusinessPlatform(host, url);
    if (location.href == 'http://v.qq.com/') {
        // 如果是视频首页，那么使用屏幕的上报区间
        var pw = 'qqvideoindex_'+getIndexSw(pwidth);
    } else {
        var pw = bPlatform+'_'+getPw(pwidth);
    }


    var ph = bPlatform+'_'+getPh(pheight);
    var psw = bPlatform+'_'+getPsw(savailWidth);
    var psh = bPlatform+'_'+getPsh(savailHeight);
    var bChannel = '';

    var isHttp = '1';
    if (host === 'v.qq.com' || host === 'film.qq.com') {
        if (location.protocol === 'https:') {
            isHttp = '3';
        } else {
            isHttp = '2';
        }
        if (host === 'v.qq.com') {
            if (url.indexOf('/x/cover/') > -1) {
                bChannel = bPlatform + '_01'; // 新版播放页
            } else if (url.indexOf('/cover/') > -1) {
                bChannel = bPlatform + '_02'; // 旧版播放页
            }
        }
    }
    if(bPlatform === 'qqcore') {
        if(url.indexOf('/a/')>-1) {
            bChannel = 'qqcore_page';   //底层页
        } else {
            bChannel = 'qqcore_channel'; // 频道页（包含首页）
        }
    }
    if (host === 'm.v.qq.com') {
        if (location.protocol === 'https:') {
            isHttp = '5';
        } else {
            isHttp = '4';
        }
    }
    if (url.indexOf('pgv_ref=aio2015') > -1) {
        isHttp = '10';
    }
    var lviewtime = '';
    if (crystal.cps && crystal.cps.tagMap) {
        var cpstagmap = crystal.cps.tagMap;
        if (cpstagmap['lview-l.qq.com'] && cpstagmap['lview-l.qq.com'].duration) {
            lviewtime = Math.floor(cpstagmap['lview-l.qq.com'].duration / 100);
            if (lviewtime >= 10) {
                lviewtime = Math.min(9, Math.floor(lviewtime / 10)) + '0';
            } else {
                lviewtime = '0' + lviewtime;
            }
        }
        var cpsdata = crystal.cps.getEnvInfo();
        if (cpsdata.adb && cpsdata.adb == 2) {
            lviewtime = 'aa';
        }
    }
    if (lviewtime === '') {
        lviewtime = 'bb';
    }
    var jver = isHttp + '' + lviewtime;
    // lviewtime;

    g_btrace_BOSS.src = "http://btrace.qq.com/kvcollect?BossId=3938&Pwd=1699213803&jEnable=" + isHttp + "&pHost=" + host + "&pUrl=" + url + "&pRef=" + ref + "&pW=" + pw + "&pH=" + ph + "&pSW=" + psw + "&pSH=" + psh + "&jUa=" + ua + "&jBrowser=" + browse + "&jVersion=" + jver + "&fVersion=" + fver + "&cVersion=" + cver + "&cPlatform=" + plat.toLowerCase() + "&bPlatform=" + bPlatform + "&bChannel=" + bChannel + "&_dc=" + Math.random();
})();
