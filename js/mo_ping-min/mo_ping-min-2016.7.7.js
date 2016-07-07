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
        return uastr;
    };
    var g_btrace_BOSS = new Image(1, 1);
    var host = location.host || 'unknown';
    var url = location.href || 'unknown';
    var ref = document.referrer || '';
    var pwidth = window.innerWidth || document.body.offsetWidth;
    var pheight = window.innerHeight || document.body.offsetHeight;
    var ua = navigator.userAgent || 'unknown';
    var browse = browsersniffer(ua);
    var cver = crystal.version || crystal_house.version || 'unknown';
    var plat = navigator.platform || 'unknown';
    var fver = crystal.getFlashVersion() || 'unknown';

    var isHttp = '1';
    if (host === 'v.qq.com' || host === 'film.qq.com') {
        if (location.protocol === 'https:') {
            isHttp = '3';
        } else {
            isHttp = '2';
        }
    }
    if (host === 'm.v.qq.com') {
        if (location.protocol === 'https:') {
            isHttp = '5';
        } else {
            isHttp = '4';
        }
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

    g_btrace_BOSS.src = "http://btrace.qq.com/kvcollect?BossId=3938&Pwd=1699213803&jEnable=" + isHttp + "&pHost=" + host + "&pUrl=" + url + "&pRef=" + ref + "&pW=" + pwidth + "&pH=" + pheight + "&jUa=" + ua + "&jBrowser=" + browse + "&jVersion=" + jver + "&fVersion=" + fver + "&cVersion=" + cver + "&cPlatform=" + plat.toLowerCase() + "&_dc=" + Math.random();
})();
