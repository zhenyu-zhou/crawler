<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=gb2312"/>
    <title>Sina Visitor System</title>
</head>
<body>
<span id="message"></span>
<script type="text/javascript" src="/js/visitor/mini_original.js?v=20161116"></script>
<script type="text/javascript">
    window.use_fp = "1" == "1"; // 是否采集设备指纹。
    var url = url || {};
    (function () {
        this.l = function (u, c) {
            try {
                var s = document.createElement("script");
                s.type = "text/javascript";
                s[document.all ? "onreadystatechange" : "onload"] = function () {

                    if (document.all && this.readyState != "loaded" && this.readyState != "complete") {
                        return
                    }
                    this[document.all ? "onreadystatechange" : "onload"] = null;
                    this.parentNode.removeChild(this);
                    if (c) {
                        c()
                    }
                };
                s.src = u;
                document.getElementsByTagName("head")[0].appendChild(s)
            } catch (e) {
            }
        };
    }).call(url);

    var visitor_origin = function () {
        try {
            var need_restore = "1" == "1"; // 是否走恢复身份流程。

            // 如果需要走恢复身份流程，尝试从 cookie 获取用户身份。
            if (!need_restore || !Store.CookieHelper.get("SRF")) {

                // 若获取失败走创建访客流程。
                // 流程执行时间过长（超过 3s），则认为出错。
                var error_timeout = window.setTimeout("error_back()", 5000);

                tid.get(function (tid, where, confidence) {
                    // 取指纹顺利完成，清除出错 timeout 。
                    window.clearTimeout(error_timeout);
                    incarnate(tid, where, confidence);
                });
            } else {
                // 用户身份存在，尝试恢复用户身份。
                restore();
            }
        } catch (e) {
            // 出错。
            error_back();
        }
    };

    var visitor_gray = function () {
        var from = "weibo";
        var webdriver = navigator.webdriver;
        Store.DB.get("tid", function (v) {
            if (!v) {
                v = "";
            }
            ufp.util.postData('https://' + window.location.host + '/visitor/genvisitor2', 'cb=visitor_gray_callback&tid=' + v + '&from=' + from + '&webdriver=' + webdriver, function (res) {
                if (res) {
                    eval(res);
                }
            });
        });
    }
    // 流程入口。
    wload(function () {
        visitor_gray();
    });

    // “返回” 回调函数。
    var return_back = function (response) {

        if (response["retcode"] == 20000000) {
            back();
        } else {
            // 出错。
            error_back(response["msg"]);
        }
    };

    // 跳转回初始地址。
    var back = function () {

        var url = "https://weibo.com/login.php";
        if (url != "none") {
            window.location.href = url;
        }
    };

    // 跨域广播。
    var cross_domain = function (response) {

        var from = "weibo";
        var entry = "miniblog";
        if (response["retcode"] == 20000000) {

            var crossdomain_host = "login.sina.com.cn";
            if (crossdomain_host != "none") {

                var cross_domain_intr = window.location.protocol + "//" + crossdomain_host + "/visitor/visitor?a=crossdomain&cb=return_back&s=" +
                    encodeURIComponent(response["data"]["sub"]) + "&sp=" + encodeURIComponent(response["data"]["subp"]) + "&from=" + from + "&_rand=" + Math.random() + "&entry=" + entry;
                url.l(cross_domain_intr);
            } else {

                back();
            }
        } else {

            // 出错。
            error_back(response["msg"]);
        }
    };

    // 跨域广播。
    var cross_domain2 = function (response) {

        var from = "weibo";
        var entry = "miniblog";
        if (response["retcode"] == 20000000) {

            var crossdomain_host = "login.sina.com.cn";
            if (crossdomain_host != "none") {

                var cross_domain_intr = window.location.protocol + "//" + crossdomain_host + "/visitor/visitor?a=crossdomain&s=" +
                    encodeURIComponent(response["data"]["sub"]) + "&sp=" + encodeURIComponent(response["data"]["subp"]) + "&from=" + from + "&_rand=" + Math.random() + "&entry=" + entry+"&url=" + encodeURIComponent("https://weibo.com/login.php");
                window.location.href = cross_domain_intr;
            } else {
                back();
            }
        } else {

            // 出错。
            error_back(response["msg"]);
        }
    };

    // 为用户赋予访客身份 。
    var incarnate = function (tid, where, conficence) {

        var gen_conf = "";
        var from = "weibo";
        var incarnate_intr = "https://" + window.location.host + "/visitor/visitor?a=incarnate&t=" +
            encodeURIComponent(tid) + "&w=" + encodeURIComponent(where) + "&c=" + encodeURIComponent(conficence) +
            "&gc=" + encodeURIComponent(gen_conf) + "&cb=cross_domain&from=" + from + "&_rand=" + Math.random();
        url.l(incarnate_intr);
    };

    // 恢复用户丢失的身份。
    var restore = function () {

        var from = "weibo";
        var restore_intr = "https://" + window.location.host +
            "/visitor/visitor?a=restore&cb=restore_back&from=" + from + "&_rand=" + Math.random();

        url.l(restore_intr);
    };

    // 跨域恢复丢失的身份。
    var restore_back = function (response) {

        // 身份恢复成功走广播流程，否则走创建访客流程。
        if (response["retcode"] == 20000000) {

            var url = "https://weibo.com/login.php";
            var alt = response["data"]["alt"];
            var savestate = response["data"]["savestate"];
            if (alt != "") {
                requrl = (url == "none") ? "" : "&url=" + encodeURIComponent(url);
                var params = "entry=sso&alt=" + encodeURIComponent(alt) + "&returntype=META" +
                    "&gateway=1&savestate=" + encodeURIComponent(savestate) + requrl;
                window.location.href = "https://login.sina.com.cn/sso/login.php?" + params;
            } else {

                cross_domain(response);
            }
        } else if (response['retcode'] == 50111261 && isInIframe()) {
            //do nothing
        } else {

            tid.get(function (tid, where, confidence) {
                incarnate(tid, where, confidence);
            });
        }
    };

    // 出错情况返回登录页。
    var error_back = function (msg) {

        var url = "https://weibo.com/login.php";
        var clientType = "pc";
        if (url != "none") {

            if (url.indexOf("ssovie4c55=0") === -1) {
                url += (((url.indexOf("?") === -1) ? "?" : "&") + "ssovie4c55=0");
            }
            if (clientType == "mobile") {
                window.location.href = "https://passport.weibo.cn/signin/login?r=" + url;
            } else {
                window.location.href = "https://weibo.com/login.php";
            }
        } else {

            if (document.getElementById("message")) {
                document.getElementById("message").innerHTML = "Error occurred" + (msg ? (": " + msg) : ".");
            }
        }
    };

    var visitor_gray_callback = function (response) {
        if (response["retcode"] === 20000000) {
            var tid = response["data"]["tid"];
            Store.DB.set('tid', tid);

            var alt = response["data"]["alt"];
            if (alt !== "") {
                var url = "https://weibo.com/login.php";
                var saveState = response["data"]["savestate"];
                requrl = (url === "none") ? "" : "&url=" + encodeURIComponent(url);
                var params = "entry=sso&alt=" + encodeURIComponent(alt) + "&returntype=META" +
                    "&gateway=1&savestate=" + encodeURIComponent(saveState) + requrl;
                window.location.href = "https://login.sina.com.cn/sso/login.php?" + params;
            } else {
                cross_domain2(response)
            }
        }
    };

    var isInIframe = function () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    };

</script>
</body>
</html>