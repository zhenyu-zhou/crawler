// 采用swf监控链接请求时长等情况
var nocrystal  = true;
;if(typeof crystal !== 'undefined' || typeof crystal_house !== 'undefined') {
    nocrystal = false;
}
;
(function() {
    if(nocrystal) return;
    var dom = crystal.dom;
    var wrap = dom.createElement({}, {}, 'div');
    document.body.appendChild(wrap);
    crystal.renderFodder({
        resource_url: "//ra.gtimg.com/sc/monitor/monitor.swf?v=20130705",
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
        var host = host.toLowerCase();
        var platformMapping = {
            'ra.gtimg.com': 'qqvideoclient',
            'm.v.qq.com': 'qqvideomobile',
            'v.qq.com': 'qqvideo',
            'mini2015.qq.com': 'qqaio'
        };
        var qqcoreList = ['news', 'ent', 'auto', 'edu', 'finance', 'money', 'stock', 'mil', 'sports', 'fashion', 'cul', 'tech', 'coral', 'www', 'data.auto', 'games', 'gu', 'astro.fashion', 'digi.tech', 'comic', 'nbachina'];
        var ret = 'unknown';
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
            if (location.href.indexOf('http://v.qq.com/ad/playlistad_v9.html') > -1) {
                ret = 'v9';
            } else if (browsersniffer(navigator.userAgent) == 'ie7') {
                ret = 'ie7';
            } else {
                ret = 1;
            }
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
    var plat = navigator.platform || 'unknown';
    var browse = browsersniffer(ua);
    if(!nocrystal) {
        var cver = (crystal && crystal.version) || (crystal_house && crystal_house.version) || 'unknown';
        var fver = crystal.getFlashVersion() || 'unknown';
    } else {
        var cver = 'unknown';
        var fver = 'unknown';
    }
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
    //lview加载时长
    var lviewtime = '';
    var loc_num = '';
    var mo_ping_time_out = 0;
    var from = '';
    var val2 = '',val3 = '', val4 = '';
    if (!nocrystal && crystal &&  crystal.cps && crystal.cps.tagMap) {
        var cpstagmap = crystal.cps.tagMap;
        var cpsdata = crystal.cps.getEnvInfo();
        from = cpsdata.err;
          // alert(document.getElementsByClassName);
        var locs = crystal.dom.getElementsByClassName('l_qq_com',['div']);
        if(typeof locs.length !== 'undefined') {
          loc_num = locs.length;
        }
        if (cpstagmap['lview-l.qq.com'] && cpstagmap['lview-l.qq.com'].duration) {
            lviewtime = Math.floor(cpstagmap['lview-l.qq.com'].duration / 100);
            if (lviewtime >= 10) {
                lviewtime = Math.min(9, Math.floor(lviewtime / 10)) + '0';
            } else {
                lviewtime = '0' + lviewtime;
            }
        } else if (cpsdata.adb && cpsdata.adb == 2) {
            lviewtime = 'aa'; //adblock
            val3 ='block';  //被屏蔽
        } else if(cpsdata.adb){
            lviewtime = 'e0'+cpsdata.adb; //看看是什么adb数据
        } else if(lviewtime === ''){
            lviewtime = 'e3'; //lview不对或超时，或没请求广告位信息
            if(loc_num === 0) {
              val3 = 'noloc';
            }
        }
    } else if(!nocrystal && crystal && crystal.cps) {
      lviewtime = 'e1'; //有crystal并且有cps
    } else if(!nocrystal && crystal) {
      lviewtime = 'e2'; //只有crystal
    }
    if(!nocrystal && crystal) {
        mo_ping_time_out = crystal.crystal_args.mo_ping_time_out;
    }
    if (lviewtime === '') {
        lviewtime = 'bb';
    }
    //视频客户端版本号
    var getPlatformVersion = function () {
        var ret = '';
        if( window.external && window.external.GetProtocalVersion ) {
            ret = window.external.GetProtocalVersion();
        }
        return ret;
    };

    var jver = isHttp + '' + lviewtime;
    // lviewtime;
    if(typeof boss_bPlatform !== 'undefined') {
        bPlatform = boss_bPlatform;
        bChannel = boss_bChannel;
    }
    //临时取消所有非目标请求
    if(bPlatform === 'qqvideoclient_noexists') {
      //非腾讯网主频道且有定义的其他平台暂时不上报
      //;
    } else {
      //
      var mo_version = '2016111504';
      var val1 = mo_version;  //监测版本暂时使用val1字段
      if(bPlatform === 'qqaio') {
        if(url && url.indexOf('guanjiaaio')>-1) {
          isHttp = '11';
          from = "guanjia";
        } else {
          isHttp = '12';
          from = "aio";
        }
      }
      val4 = plat.toLowerCase();
      //pf
      g_btrace_BOSS.src = "//btrace.qq.com/kvcollect?BossId=3938&Pwd=1699213803&jEnable=" + isHttp + "&pHost=" + host + "&pUrl=" + url + "&pRef=" + ref + "&pW=" + pw + "&pH=" + ph + "&pSW=" + psw + "&pSH=" + psh + "&jUa=" + ua + "&jBrowser=" + browse + "&jVersion=" + jver + "&fVersion=" + fver + "&cVersion=" + cver + "&cPlatform=" + plat.toLowerCase() + "&bPlatform=" + bPlatform + "&bChannel=" + bChannel + "&_dc=" + Math.random();
      var g_btrace_dp3 = new Image(1,1);
      //先统计下host，再统计下浏览器分布
      g_btrace_dp3.src = "//dp3.qq.com/stdlog?bid=crystal&pid=visit&host="+host+"&cv="+cver+"&ref="+encodeURIComponent(ref)+"&ua="+encodeURIComponent(browse)+"&uav="+encodeURIComponent(ua)+"&from="+from+"&val1="+val1+"&val2="+val2+"&val3="+val3+"&val4="+val4+"&sw="+savailWidth+"&sh="+savailHeight+"&ww="+pwidth+"&wh="+pheight+"&time1="+lviewtime+"&time2="+mo_ping_time_out+"&pf="+bPlatform+"&pfv="+getPlatformVersion();
      //针对aio计算停留时间，因为本来这个监测文件已经延迟10s加载了，所以我们监测3个点位：10s，60s，300s
      var reportStay = function(step) {
        var im = new Image(1,1);
        im.src = "//dp3.qq.com/stdlog?bid=crystal&host="+encodeURIComponent(host)+"&pid=aiostay&ua="+browse+"&from="+from+"&val1="+step+"&val2="+encodeURIComponent(url)+"&pf="+bPlatform+"&pfv="+getPlatformVersion();
      }
      setTimeout(function() {
        reportStay(10); //停留1小时
      },60*60*1000);
      setTimeout(function() {
          reportStay(1);
      },10*1000);
      setTimeout(function() {
          reportStay(2);
      },60*1000);
      setTimeout(function() {
          reportStay(3);
      },300*1000);
      setTimeout(function() {
          reportStay(4);
      },1800*1000);
    }
})();
